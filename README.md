# Kansanedustajat-sovellus

Politiikkasovellus, joka näyttää Suomen kansanedustajien tiedot selaimessa.
Sovellus tehdään ryhmätyönä opintojaksolla TX00CN62-3012 Tietojärjestelmien kehittäminen (Metropolia).
Projektissa käytetään Scrum-menetelmää.

## Aineisto

Sovelluksen pohjana on JSON-muotoinen aineisto
https://users.metropolia.fi/~peterh/mps.json

Aineistossa on noin 200 edustajaa. Jokaisella edustajalla on seuraavat kentät.

| Kenttä | Sisältö |
|---|---|
| personNumber | edustajan tunniste |
| seatNumber | paikkanumero istuntosalissa |
| first, last | etunimi ja sukunimi |
| party | puolueen lyhenne, esim. ps |
| minister | onko ministeri (true tai false) |
| picture | kuvan suhteellinen polku |
| twitter | Twitter-osoite, puuttuu osalta |
| bornYear | syntymävuosi |
| constituency | vaalipiiri |

## Tekniikka

| Osa | Tekniikka |
|---|---|
| Asiakas | HTML, CSS ja JavaScript, toimii selaimessa |
| Palvelin | Python ja Flask, REST-rajapinta |
| Yhteys | HTTP ja JSON |
| Testaus | Pythonin unittest |
| Versionhallinta | Git ja GitHub |

## Kansiorakenne (ehdotus)

```
/
├── README.md
├── docs/
│   ├── product-backlog.md
│   └── sprintti-1.md
├── server/
│   ├── app.py
│   └── tests/
└── client/
    ├── index.html
    ├── style.css
    └── script.js
```

## Käynnistys

```
pip install flask
python server/app.py
```

Avaa sen jälkeen selaimessa client/index.html.

## Dokumentaatio

| Tiedosto | Sisältö |
|---|---|
| [docs/product-backlog.md](docs/product-backlog.md) | persoonat, käyttäjäpolku, käyttäjätarinat ja prioriteetit |
| [docs/sprintti-1.md](docs/sprintti-1.md) | ensimmäisen sprintin tavoite ja tehtävät |
| [Google Sheets](https://docs.google.com/spreadsheets/d/1Jj5Rn60xBpffcmbMZ4Mx0G0hO5MmAkAcCo3JOMqJ5T8/edit) | backlog, sprintin tehtävät ja aikajana yhdessä taulukossa |

## Ryhmä ja roolit

| Nimi | Rooli |
|---|---|
| Majlinda | Product Owner, kehittäjä |
| Victoria | Scrum Master, kehittäjä |

Roolit on jaettu alustavasti, ja niitä voidaan vaihtaa myöhemmin.

## Aikataulu

| Ajankohta | Tapahtuma |
|---|---|
| 16.11.2026 | projektin aloitus, roolit ja product backlog |
| 17.11.2026 | product backlogin ja sprintin 1 suunnitelman palautus |
| 23.11.2026 | tentti ja ensimmäinen statustapaaminen |
| joka viikko | statustapaaminen, demo ja sprintin suunnitelma |
| viikko 8.2.2027 alkaen | projektin loppuesitys |
