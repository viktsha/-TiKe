import json
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from app import app, DATA_FILE
class TestEdustajat(unittest.TestCase):
    """T10. Yksikkötestit palvelimen REST-rajapinnoille."""

    def setUp(self):
        self.client = app.test_client()
        with open(DATA_FILE, encoding="utf-8") as tiedosto:
            self.aineisto = json.load(tiedosto)

    # Tarina 1, kaikki edustajat listana

    def test_lista_vastaa_200(self):
        vastaus = self.client.get("/edustajat")
        self.assertEqual(vastaus.status_code, 200)

    def test_lista_on_lista(self):
        edustajat = self.client.get("/edustajat").get_json()
        self.assertIsInstance(edustajat, list)

    def test_listassa_kaikki_edustajat(self):
        edustajat = self.client.get("/edustajat").get_json()
        self.assertEqual(len(edustajat), len(self.aineisto))

    def test_edustajalla_tarvittavat_kentat(self):
        edustaja = self.client.get("/edustajat").get_json()[0]
        for kentta in ["personNumber", "first", "last", "party", "constituency", "bornYear", "minister", "picture"]:
            self.assertIn(kentta, edustaja)

    def test_aakkoset_nakyvat_oikein(self):
        teksti = self.client.get("/edustajat").get_data(as_text=True)
        if any("ä" in e["constituency"] for e in self.aineisto):
            self.assertIn("ä", teksti)
        self.assertNotIn("\\u00e4", teksti)

    # Tarina 3, yhden edustajan tiedot

    def test_yksi_edustaja_loytyy(self):
        numero = self.aineisto[0]["personNumber"]
        vastaus = self.client.get(f"/edustajat/{numero}")
        self.assertEqual(vastaus.status_code, 200)
        self.assertEqual(vastaus.get_json()["personNumber"], numero)

    def test_oikea_edustaja_palautetaan(self):
        odotettu = self.aineisto[-1]
        vastaus = self.client.get(f"/edustajat/{odotettu['personNumber']}").get_json()
        self.assertEqual(vastaus["last"], odotettu["last"])
        self.assertEqual(vastaus["first"], odotettu["first"])

    # Virheelliset syötteet

    def test_tuntematon_numero_antaa_404(self):
        vastaus = self.client.get("/edustajat/999999")
        self.assertEqual(vastaus.status_code, 404)
        self.assertIn("virhe", vastaus.get_json())

    def test_kirjaimet_numeron_sijaan_antavat_404(self):
        vastaus = self.client.get("/edustajat/abc")
        self.assertEqual(vastaus.status_code, 404)

    # Selain saa hakea tietoa toisesta osoitteesta

    def test_selain_saa_hakea_tietoa(self):
        vastaus = self.client.get("/edustajat")
        self.assertEqual(vastaus.headers.get("Access-Control-Allow-Origin"), "*")


if __name__ == "__main__":
    unittest.main()
