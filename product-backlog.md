# Product backlog

## Menetelmä

Käyttäjätarinat kirjoitettiin Hurjan artikkelin mallin mukaan
[Käyttäjätarinat apuna sovelluksen suunnittelussa tekoälyllä](https://hurja.fi/blogi/kayttajatarinat-apuna-sovelluksen-suunnittelussa-tekoalylla/).

| Vaihe | Mitä tehtiin |
|---|---|
| 1 | Määriteltiin persoonat, niiden rooli, tavoite ja haaste |
| 2 | Kirjoitettiin tarinat mallilla "Käyttäjänä [nimi], haluan [tehdä jotain], jotta [hyöty]" |
| 3 | Lisättiin konteksti eli käyttötapaus ja käyttäjäpolku |
| 4 | Tarkistettiin tarinat INVEST-listalla |
| 5 | Verrattiin tarinoita aineistoon mps.json ja muutettiin ne, joille dataa ei ole |

INVEST tarkoittaa, että tarina on Independent, Negotiable, Valuable, Estimable, Small ja Testable.

## Persoonat

| Persoona | Rooli | Tavoite | Haaste |
|---|---|---|---|
| Aino | nuori äänestäjä | ymmärtää eduskuntaa ja oman alueen edustajia | tieto on hajallaan ja vaikeasti ymmärrettävää |
| Matti | toimittaja | löytää edustajien tiedot nopeasti juttuihin | tiedonhaku vie aikaa |
| Leena | yhteiskuntaopin opettaja | tehdä oppitunneista kiinnostavia | oppilaat eivät jaksa lukea pitkiä tekstejä |
| Raimo | eläkeläinen | seurata politiikkaa vaivatta | pieni teksti ja monimutkaiset sivut |

## Käyttötapaus

Käyttäjä haluaa tietoa kansanedustajista yhdestä paikasta ilman kirjautumista, myös puhelimella.

## Käyttäjäpolku

| Vaihe | Mitä käyttäjä tekee |
|---|---|
| 1 | avaa etusivun ja näkee kaikki edustajat |
| 2 | rajaa listaa hakemalla, suodattamalla tai järjestämällä |
| 3 | avaa yhden edustajan tiedot |
| 4 | katsoo koko eduskuntaa koskevia kaavioita |
| 5 | tallentaa suosikin tai tekee tietovisan |

## Käyttäjätarinat

Prioriteetti 1 on tärkein. Arviot ovat alustavia ja tarkentuvat sprinttien aikana.

| Prio | Nro | Käyttäjätarina | Arvio | Tila |
|---|---|---|---|---|
| 1 | 1 | Käyttäjänä Aino, haluan selata kaikkia kansanedustajia listana, jotta saan kokonaiskuvan eduskunnasta. | 6 h | Sprintti 1 |
| 2 | 3 | Käyttäjänä Aino, haluan nähdä edustajan kuvan ja perustiedot, jotta tunnistan hänet uutisista. | 5 h | Sprintti 1 |
| 3 | 6 | Käyttäjänä Matti, haluan hakea edustajaa nimellä, jotta löydän tiedot sekunneissa. | 4 h | Sprintti 1 |
| 4 | 4 | Käyttäjänä Aino, haluan suodattaa edustajat puolueen mukaan, jotta ymmärrän puolueiden kokoonpanot. | 4 h | Backlog |
| 5 | 2 | Käyttäjänä Aino, haluan nähdä oman vaalipiirini edustajat, jotta tiedän, ketkä edustavat minua. | 4 h | Backlog |
| 6 | 18 | Käyttäjänä Raimo, haluan järjestää edustajat iän tai nimen mukaan, jotta löydän etsimäni helpommin. | 3 h | Backlog |
| 7 | 7 | Käyttäjänä Matti, haluan nähdä, ketkä edustajat ovat ministereitä, jotta tiedän hallituksen kokoonpanon. | 3 h | Backlog |
| 8 | 8 | Käyttäjänä Matti, haluan nähdä puolueiden paikkamäärät kaaviona, jotta voin käyttää niitä juttujen taustana. | 6 h | Backlog |
| 9 | 14 | Käyttäjänä Leena, haluan nähdä ministerien määrän puolueittain, jotta voimme käsitellä hallituksen ja opposition eroa. | 4 h | Backlog |
| 10 | 11 | Käyttäjänä Leena, haluan näyttää eduskunnan ikäjakauman, jotta oppilaat voivat pohtia edustuksellisuutta. | 5 h | Backlog |
| 11 | 12 | Käyttäjänä Leena, haluan verrata puolueita rinnakkain, jotta oppitunnilla syntyy keskustelua. | 6 h | Backlog |
| 12 | 16 | Käyttäjänä Raimo, haluan tallentaa suosikkiedustajia, jotta löydän heidät nopeasti uudelleen. | 5 h | Backlog |
| 13 | 10 | Käyttäjänä Matti, haluan avata edustajan Twitter-tilin sovelluksesta, jotta voin seurata hänen kannanottojaan ja pyytää haastattelua. | 3 h | Backlog |
| 14 | 20 | Käyttäjänä Raimo, haluan nähdä edustajan paikkanumeron istuntosalissa, jotta tiedän, missä hän istuu. | 2 h | Backlog |
| 15 | 9 | Käyttäjänä Matti, haluan kopioida edustajan tiedot yhdellä painalluksella, jotta tiedonkeruu nopeutuu. | 2 h | Backlog |
| 16 | 5 | Käyttäjänä Aino, haluan lukea lyhyen selityksen eduskunnan toiminnasta, jotta ymmärrän, mitä edustajat tekevät. | 2 h | Backlog |
| 17 | 13 | Käyttäjänä Leena, haluan tietovisan kansanedustajista, jotta oppiminen on hauskempaa. | 10 h | Backlog |
| 18 | 19 | Käyttäjänä Raimo, haluan nähdä vaalipiirit kartalla, jotta ymmärrän alueellisen jakautumisen. | 12 h | Backlog |

## Ei-toiminnalliset vaatimukset

Nämä koskevat koko sovellusta ja otetaan huomioon jokaisessa sprintissä.

| Nro | Vaatimus |
|---|---|
| 15 | Käyttäjänä Leena, haluan sovelluksen toimivan puhelimella ilman kirjautumista, jotta oppilaat pääsevät heti alkuun. |
| 17 | Käyttäjänä Raimo, haluan suurentaa fonttikokoa, jotta tekstiä on helppo lukea. |

## INVEST-tarkistus

| Nro | Havainto | Toimenpide |
|---|---|---|
| 13 | Liian suuri, ei täytä Small-ehtoa | Jaetaan myöhemmin osiin, esim. kysymys kuvasta ja pisteiden lasku |
| 19 | Liian suuri, aineistossa ei ole karttakoordinaatteja | Jätetään viimeiseksi |
| 15, 17 | Ei-toiminnallisia vaatimuksia | Siirretty omaan taulukkoon |
| 5 | Pieni arvo käyttäjälle | Matala prioriteetti |

## Muutosloki

| Päivä | Nro | Muutos | Syy |
|---|---|---|---|
| 16.11.2026 | kaikki | Pilkku lisätty nimen jälkeen | Hurjan mallin mukainen muoto |
| 16.11.2026 | 10 | Yhteystiedot ja somekanavat vaihdettu Twitter-linkiksi | Aineistossa on vain twitter-kenttä |
| 16.11.2026 | 14 | Sukupuolijakauma vaihdettu ministerien määräksi puolueittain | Aineistossa ei ole sukupuolta |
| 16.11.2026 | 20 | Päivitysaika vaihdettu paikkanumeroksi | Aineistossa ei ole päivityspäivää, seatNumber on |
| 16.11.2026 | 15, 17 | Siirretty ei-toiminnallisiin vaatimuksiin | Koskevat koko sovellusta |
