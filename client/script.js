// Sprintti 1: T6 (listaus), T8 (tietosivu), T9 (vapaaehtoinen haku).
// Tämä toimii muuttamatta ryhmän valmista server/app.py-tiedostoa.
const API = 'http://127.0.0.1:5000';
const listanakyma = document.querySelector('#listanakyma');
const tietonakyma = document.querySelector('#tietonakyma');
const lista = document.querySelector('#edustajalista');
const maara = document.querySelector('#maara');
const haku = document.querySelector('#haku');
const virhe = document.querySelector('#virhe');
const tyhja = document.querySelector('#tyhja');
const tiedot = document.querySelector('#edustajatiedot');
let kaikkiEdustajat = [];

function kokoNimi(edustaja) {
  return `${edustaja.first || ''} ${edustaja.last || ''}`.trim();
}

async function haeJSON(polku) {
  const vastaus = await fetch(`${API}${polku}`);
  if (!vastaus.ok) throw new Error(`HTTP ${vastaus.status}`);
  return await vastaus.json();
}

// T6: hae kaikki edustajat palvelimelta ja muodosta HTML-lista.
async function lataaLista() {
  try {
    const data = await haeJSON('/edustajat');
    if (!Array.isArray(data)) throw new Error('Rajapinta ei palauttanut listaa');
    kaikkiEdustajat = data.sort((a, b) => kokoNimi(a).localeCompare(kokoNimi(b), 'fi'));
    naytaLista(kaikkiEdustajat);
  } catch (error) {
    maara.textContent = 'Lataus epäonnistui';
    virhe.textContent = 'Edustajatietojen lataus epäonnistui. Käynnistä Flask-palvelin komennolla python server/app.py ja päivitä sivu.';
    virhe.hidden = false;
    console.error(error);
  }
}

function naytaLista(edustajat) {
  lista.replaceChildren();
  maara.textContent = `${edustajat.length} edustajaa`;
  tyhja.hidden = edustajat.length !== 0;

  for (const edustaja of edustajat) {
    const li = document.createElement('li');
    const painike = document.createElement('button');
    painike.type = 'button';
    painike.className = 'edustaja';

    const tekstit = document.createElement('span');
    const nimi = document.createElement('span');
    nimi.className = 'edustaja-nimi';
    nimi.textContent = kokoNimi(edustaja);
    const lisatiedot = document.createElement('span');
    lisatiedot.className = 'edustaja-lisatiedot';
    lisatiedot.textContent = [edustaja.party?.toUpperCase(), edustaja.constituency].filter(Boolean).join(' · ');
    tekstit.append(nimi, lisatiedot);

    const nuoli = document.createElement('span');
    nuoli.className = 'nuoli';
    nuoli.textContent = '›';
    nuoli.setAttribute('aria-hidden', 'true');
    painike.append(tekstit, nuoli);
    painike.addEventListener('click', () => {
      window.location.href = `index.html?id=${encodeURIComponent(edustaja.personNumber)}`;
    });
    li.append(painike);
    lista.append(li);
  }
}

// T9: nimihaku (lisäominaisuus, voidaan laskea sprinttiin 2).
haku.addEventListener('input', () => {
  const sana = haku.value.trim().toLocaleLowerCase('fi');
  naytaLista(kaikkiEdustajat.filter(edustaja =>
    kokoNimi(edustaja).toLocaleLowerCase('fi').includes(sana)
  ));
});

// T8: hae yksittäisen edustajan tiedot personNumber-tunnisteella.
async function lataaTiedot(id) {
  listanakyma.hidden = true;
  tietonakyma.hidden = false;
  try {
    const edustaja = await haeJSON(`/edustajat/${encodeURIComponent(id)}`);
    naytaTiedot(edustaja);
  } catch (error) {
    tiedot.textContent = 'Edustajan tietoja ei saatu ladattua. Tarkista palvelimen käynnistys tai palaa listaan.';
    console.error(error);
  }
}

function kuvapaikka(edustaja) {
  const paikka = document.createElement('div');
  paikka.className = 'kuvapaikka';
  const alku = document.createElement('strong');
  alku.textContent = `${(edustaja.first || '?').slice(0, 1)}${(edustaja.last || '?').slice(0, 1)}`.toUpperCase();
  const ilmoitus = document.createElement('small');
  ilmoitus.textContent = 'Kuva ei saatavilla';
  paikka.append(alku, ilmoitus);
  return paikka;
}

function naytaTiedot(edustaja) {
  const kortti = document.createElement('div');
  kortti.className = 'tieto-sisalto';
  const kuvaAlue = document.createElement('div');
  const varakuva = kuvapaikka(edustaja);
  kuvaAlue.append(varakuva);

  // JSON sisältää suhteellisen kuvapolun. Jos sama kuva löytyy client/
  // -hakemiston alla, se näytetään. Muutoin näkyy siisti varakuva.
  if (edustaja.picture && !edustaja.picture.includes('..') && !edustaja.picture.startsWith('/')) {
    const kuva = document.createElement('img');
    kuva.className = 'edustajakuva';
    kuva.alt = `Kansanedustaja ${kokoNimi(edustaja)}`;
    kuva.src = edustaja.picture;
    kuva.onload = () => kuvaAlue.replaceChildren(kuva);
    // Jos kuvatiedostoa ei löydy, varakuva jää näkyviin.
  }

  const oikea = document.createElement('div');
  const otsikko = document.createElement('h3');
  otsikko.textContent = kokoNimi(edustaja);
  oikea.append(otsikko);

  const dl = document.createElement('dl');
  dl.className = 'tieto-rivit';
  const kentat = [
    ['Puolue', edustaja.party?.toUpperCase()],
    ['Vaalipiiri', edustaja.constituency],
    ['Syntymävuosi', edustaja.bornYear],
    ['Paikkanumero', edustaja.seatNumber],
    ['Ministeri', edustaja.minister ? 'Kyllä' : 'Ei']
  ];
  for (const [nimi, arvo] of kentat) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = nimi;
    dd.textContent = arvo == null || arvo === '' ? 'Ei tietoa' : String(arvo);
    dl.append(dt, dd);
  }
  oikea.append(dl);
  kortti.append(kuvaAlue, oikea);
  tiedot.replaceChildren(kortti);
}

const tunniste = new URLSearchParams(window.location.search).get('id');
if (tunniste === null) lataaLista();
else if (/^\d+$/.test(tunniste)) lataaTiedot(tunniste);
else {
  listanakyma.hidden = true;
  tietonakyma.hidden = false;
  tiedot.textContent = 'Virheellinen edustajatunniste.';
}
