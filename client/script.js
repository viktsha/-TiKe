// Sprintti 1: T6 (listaus), T8 (tietosivu), T9 (haku).
// Sprintti 2: T11 (puoluesuodatin), T12 (vaalipiirisuodatin).
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
const puolueValinta = document.querySelector('#puolue');
const vaalipiiriValinta = document.querySelector('#vaalipiiri');
let kaikkiEdustajat = [];

function kokoNimi(edustaja) {
  return `${edustaja.first || ''} ${edustaja.last || ''}`.trim();
}

async function haeJSON(polku) {
  const vastaus = await fetch(`${API}${polku}`);
  if (!vastaus.ok) throw new Error(`HTTP ${vastaus.status}`);
  return await vastaus.json();
}

// T6: hae edustajat palvelimelta ja muodosta HTML-lista.
// T11 ja T12: valittu puolue ja vaalipiiri lähetetään palvelimelle osoitteessa,
// esim. /edustajat?puolue=kok&vaalipiiri=Helsinki
async function lataaLista() {
  const parametrit = new URLSearchParams();
  if (puolueValinta.value) parametrit.set('puolue', puolueValinta.value);
  if (vaalipiiriValinta.value) parametrit.set('vaalipiiri', vaalipiiriValinta.value);
  const polku = parametrit.toString() ? `/edustajat?${parametrit}` : '/edustajat';

  try {
    const data = await haeJSON(polku);
    if (!Array.isArray(data)) throw new Error('Rajapinta ei palauttanut listaa');
    kaikkiEdustajat = data.sort((a, b) => kokoNimi(a).localeCompare(kokoNimi(b), 'fi'));
    virhe.hidden = true;
    naytaHaunTulos();
  } catch (error) {
    maara.textContent = 'Lataus epäonnistui';
    virhe.textContent = 'Edustajatietojen lataus epäonnistui. Käynnistä Flask-palvelin komennolla python server/app.py ja päivitä sivu.';
    virhe.hidden = false;
    console.error(error);
  }
}

// T11 ja T12: täytetään valikot aineiston puolueilla ja vaalipiireillä.
// Tämä tehdään kerran, kun koko lista on ladattu ensimmäisen kerran.
function taytaValikko(valikko, arvot) {
  for (const arvo of arvot) {
    const vaihtoehto = document.createElement('option');
    vaihtoehto.value = arvo;
    vaihtoehto.textContent = valikko === puolueValinta ? arvo.toUpperCase() : arvo;
    valikko.append(vaihtoehto);
  }
}

function taytaSuodattimet() {
  const puolueet = [...new Set(kaikkiEdustajat.map(e => e.party))].sort((a, b) => a.localeCompare(b, 'fi'));
  const vaalipiirit = [...new Set(kaikkiEdustajat.map(e => e.constituency))].sort((a, b) => a.localeCompare(b, 'fi'));
  taytaValikko(puolueValinta, puolueet);
  taytaValikko(vaalipiiriValinta, vaalipiirit);
}

puolueValinta.addEventListener('change', lataaLista);
vaalipiiriValinta.addEventListener('change', lataaLista);

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

// T9: nimihaku. Haku rajaa sitä listaa, joka on jo haettu palvelimelta.
function naytaHaunTulos() {
  const sana = haku.value.trim().toLocaleLowerCase('fi');
  naytaLista(kaikkiEdustajat.filter(edustaja =>
    kokoNimi(edustaja).toLocaleLowerCase('fi').includes(sana)
  ));
}

haku.addEventListener('input', naytaHaunTulos);

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

// T8: hakee kuvapienoiskuvan Wikipediasta automaattisesti nimen perusteella.
// Käytetään vain täsmälleen samalla nimellä löytyvää artikkelia.
async function haeWikipedianKuva(edustaja, kuvaAlue) {
  try {
    const params = new URLSearchParams({
      action: 'query',
      prop: 'pageimages',
      titles: kokoNimi(edustaja),
      pithumbsize: '480',
      redirects: '1',
      format: 'json',
      origin: '*'
    });
    const vastaus = await fetch(`https://fi.wikipedia.org/w/api.php?${params}`);
    if (!vastaus.ok) return;
    const data = await vastaus.json();
    const sivu = Object.values(data.query?.pages || {})[0];
    if (!sivu?.thumbnail?.source || !sivu?.pageimage) return;

    const kuva = document.createElement('img');
    kuva.className = 'edustajakuva';
    kuva.alt = `Kansanedustaja ${kokoNimi(edustaja)}`;
    kuva.onload = () => {
      const lahde = document.createElement('a');
      lahde.href = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(sivu.pageimage)}`;
      lahde.textContent = 'Kuva ja tekijätiedot: Wikimedia Commons';
      lahde.target = '_blank';
      lahde.rel = 'noopener noreferrer';
      lahde.style.display = 'block';
      lahde.style.fontSize = '11px';
      lahde.style.lineHeight = '1.4';
      lahde.style.marginTop = '6px';
      lahde.style.maxWidth = '190px';
      kuvaAlue.replaceChildren(kuva, lahde);
    };
    kuva.src = sivu.thumbnail.source;
  } catch (virhe) {
    // Ulkoisen kuvapalvelun virhe ei estä muun tietosivun näyttämistä.
    console.info('Kuvaa ei saatu Wikipediasta:', virhe);
  }
}

function naytaTiedot(edustaja) {
  const kortti = document.createElement('div');
  kortti.className = 'tieto-sisalto';
  const kuvaAlue = document.createElement('div');
  const varakuva = kuvapaikka(edustaja);
  kuvaAlue.append(varakuva);

  // JSON:in picture-kentässä oleva polku ei sisällä itse kuvaa.
  // Kokeile siksi hakea julkinen valokuva suomenkielisestä Wikipediasta.
  // Jos kuvaa ei löydy tai verkkoyhteys ei toimi, nimikirjaimet jäävät näkyviin.
  haeWikipedianKuva(edustaja, kuvaAlue);

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
if (tunniste === null) lataaLista().then(taytaSuodattimet);
else if (/^\d+$/.test(tunniste)) lataaTiedot(tunniste);
else {
  listanakyma.hidden = true;
  tietonakyma.hidden = false;
  tiedot.textContent = 'Virheellinen edustajatunniste.';
}
