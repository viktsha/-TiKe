# Product backlog

## Menetelmä


| Vaihe | Mitä tehtiin |
|---|---|
| 1 | Määriteltiin persoonat, niiden rooli, tavoite ja haaste |
| 2 | Kirjoitettiin tarinat mallilla "Käyttäjänä [nimi], haluan [tehdä jotain], jotta [hyöty]" |
| 3 | Lisättiin konteksti eli käyttötapaus ja käyttäjäpolku |
| 4 | Verrattiin tarinoita aineistoon mps.json ja muutettiin ne, joille dataa ei ole |
| 5 | Ryhmiteltiin tarinat epiikkeihin ja kirjoitettiin hyväksymiskriteerit kahden seuraavan sprintin tarinoille |

## Persoonat

| Persoona | Rooli | Tavoite | Haaste |
|---|---|---|---|
| Aino | nuori äänestäjä | ymmärtää eduskuntaa ja oman alueen edustajia | tieto on hajallaan ja vaikeasti ymmärrettävää |
| Matti | toimittaja | löytää edustajien tiedot nopeasti juttuihin | tiedonhaku vie aikaa |
| Leena | yhteiskuntatieteiden opiskelija | ymmärtää eduskuntaa opintojaan varten | tieto on hajallaan, ja pitkien raporttien lukeminen vie aikaa |
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

## Epiikit

Backlog on tavallinen lista prioriteettijärjestyksessä, koska tiimi on pieni ja tuote yksinkertainen. Tarinat on ryhmitelty epiikkeihin.

| Epiikki | Nimi | Tarinat |
|---|---|---|
| E1 | Edustajien selaus ja haku | 1, 2, 4, 6, 18 |
| E2 | Edustajan tiedot | 3, 7, 9, 10, 16, 20 |
| E3 | Tilastot ja kaaviot | 8, 11, 12, 14, 19 |
| E4 | Oppiminen | 5, 13 |
| E5 | Käytettävyys (ei-toiminnalliset) | 15, 17 |

## Käyttäjätarinat

Prioriteetti 1 on tärkein. Arviot ovat alustavia ja tarkentuvat sprinttien aikana.

| Prio | Nro | Epiikki | Käyttäjätarina | Arvio | Tila |
|---|---|---|---|---|---|
| 1 | 1 | E1 | Käyttäjänä Aino, haluan selata kaikkia kansanedustajia listana, jotta saan kokonaiskuvan eduskunnasta. | 6 h | Sprintti 1 |
| 2 | 3 | E2 | Käyttäjänä Aino, haluan nähdä edustajan kuvan ja perustiedot, jotta tunnistan hänet uutisista. | 5 h | Sprintti 1 |
| 3 | 6 | E1 | Käyttäjänä Matti, haluan hakea edustajaa nimellä, jotta löydän tiedot sekunneissa. | 4 h | Sprintti 1 |
| 4 | 4 | E1 | Käyttäjänä Aino, haluan suodattaa edustajat puolueen mukaan, jotta ymmärrän puolueiden kokoonpanot. | 4 h | Backlog |
| 5 | 2 | E1 | Käyttäjänä Aino, haluan nähdä oman vaalipiirini edustajat, jotta tiedän, ketkä edustavat minua. | 4 h | Backlog |
| 6 | 18 | E1 | Käyttäjänä Raimo, haluan järjestää edustajat iän tai nimen mukaan, jotta löydän etsimäni helpommin. | 3 h | Backlog |
| 7 | 7 | E2 | Käyttäjänä Matti, haluan nähdä, ketkä edustajat ovat ministereitä, jotta tiedän hallituksen kokoonpanon. | 3 h | Backlog |
| 8 | 8 | E3 | Käyttäjänä Matti, haluan nähdä puolueiden paikkamäärät kaaviona, jotta voin käyttää niitä juttujen taustana. | 6 h | Backlog |
| 9 | 14 | E3 | Käyttäjänä Leena, haluan nähdä ministerien määrän puolueittain, jotta ymmärrän hallituksen ja opposition eron. | 4 h | Backlog |
| 10 | 11 | E3 | Käyttäjänä Leena, haluan nähdä eduskunnan ikäjakauman, jotta voin käyttää sitä harjoitustyössäni edustuksellisuudesta. | 5 h | Backlog |
| 11 | 12 | E3 | Käyttäjänä Leena, haluan verrata puolueita rinnakkain, jotta ymmärrän niiden erot. | 6 h | Backlog |
| 12 | 16 | E2 | Käyttäjänä Raimo, haluan tallentaa suosikkiedustajia, jotta löydän heidät nopeasti uudelleen. | 5 h | Backlog |
| 13 | 10 | E2 | Käyttäjänä Matti, haluan avata edustajan X-tilin (entinen Twitter) sovelluksesta, jotta voin seurata hänen kannanottojaan ja pyytää haastattelua. | 3 h | Backlog |
| 14 | 20 | E2 | Käyttäjänä Raimo, haluan nähdä edustajan paikkanumeron istuntosalissa, jotta tiedän, missä hän istuu. | 2 h | Backlog |
| 15 | 9 | E2 | Käyttäjänä Matti, haluan kopioida edustajan tiedot yhdellä painalluksella, jotta tiedonkeruu nopeutuu. | 2 h | Backlog |
| 16 | 5 | E4 | Käyttäjänä Aino, haluan lukea lyhyen selityksen eduskunnan toiminnasta, jotta ymmärrän, mitä edustajat tekevät. | 2 h | Backlog |
| 17 | 13 | E4 | Käyttäjänä Leena, haluan tietovisan kansanedustajista, jotta eduskunnan opiskelu on hauskempaa. | 10 h | Backlog |
| 18 | 19 | E3 | Käyttäjänä Raimo, haluan nähdä vaalipiirit kartalla, jotta ymmärrän alueellisen jakautumisen. | 12 h | Backlog |

## Hyväksymiskriteerit

Kriteerit on kirjoitettu kahden seuraavan sprintin tarinoille. Muille tarinoille ne kirjoitetaan, kun tarinat tulevat sprinttiin.

| Nro | Tarina | Tarina on valmis, kun |
|---|---|---|
| 1 | Kaikki edustajat listana | etusivulla näkyvät kaikki aineiston edustajat nimen ja puolueen kanssa, ja lista tulee palvelimelta REST-rajapinnan kautta |
| 3 | Edustajan kuva ja perustiedot | edustajaa klikkaamalla aukeaa sivu, jossa näkyvät kuva, nimi, puolue, vaalipiiri ja syntymävuosi |
| 6 | Haku nimellä | hakukenttään kirjoitettu nimi tai sen osa näyttää vain sopivat edustajat, ja isot ja pienet kirjaimet eivät vaikuta |
| 4 | Suodatus puolueen mukaan | puolueen valinta näyttää vain sen puolueen edustajat, ja valinnan voi poistaa |
| 2 | Oman vaalipiirin edustajat | vaalipiirin valinta näyttää vain sen vaalipiirin edustajat |
| 18 | Järjestys iän tai nimen mukaan | listan voi järjestää nimen ja iän mukaan nousevasti ja laskevasti |
| 7 | Ministerit | ministerit on merkitty listaan, ja vain ministerit voi näyttää yhdellä valinnalla |

## Ei-toiminnalliset vaatimukset

Nämä koskevat koko sovellusta ja otetaan huomioon jokaisessa sprintissä.

| Nro | Vaatimus |
|---|---|
| 15 | Käyttäjänä Leena, haluan sovelluksen toimivan puhelimella ilman kirjautumista, jotta voin käyttää sitä esimerkiksi luennolla tai bussissa. |
| 17 | Käyttäjänä Raimo, haluan, että teksti on riittävän suurta ja selkeää, jotta sitä on helppo lukea. |
