import json
from pathlib import Path

from flask import Flask, jsonify

# Aineisto ladataan tiedostosta data/mps.json, joka on tämän tiedoston vieressä.
# Tiedoston saa osoitteesta https://users.metropolia.fi/~peterh/mps.json
DATA_FILE = Path(__file__).parent / "data" / "mps.json"

app = Flask(__name__)
app.json.ensure_ascii = False  # ä ja ö näkyvät vastauksessa oikein


def lue_edustajat():
    """T3. Lukee kansanedustajat JSON-tiedostosta listaksi."""
    with open(DATA_FILE, encoding="utf-8") as tiedosto:
        return json.load(tiedosto)


EDUSTAJAT = lue_edustajat()


@app.after_request
def salli_selain(vastaus):
    # Sallii selaimen sivun hakea tietoa palvelimelta, vaikka sivu avataan eri osoitteesta
    vastaus.headers["Access-Control-Allow-Origin"] = "*"
    return vastaus


@app.route("/edustajat")
def kaikki_edustajat():
    """T4. Palauttaa kaikki edustajat listana."""
    return jsonify(EDUSTAJAT)


@app.route("/edustajat/<int:numero>")
def yksi_edustaja(numero):
    """T7. Palauttaa yhden edustajan personNumber-kentän perusteella."""
    for edustaja in EDUSTAJAT:
        if edustaja["personNumber"] == numero:
            return jsonify(edustaja)
    return jsonify({"virhe": f"Edustajaa {numero} ei löytynyt"}), 404


if __name__ == "__main__":
    app.run(debug=True)
