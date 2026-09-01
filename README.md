# Napfénysziget Alapítvány – Projekt dokumentáció

Ez a dokumentáció a Napfénysziget Alapítvány statikus honlapjának célját, felépítését, működését és karbantartási szabályait írja le. A projekt teljesen frontend-alapú, HTML5, CSS3 és natív JavaScript használatával készült, és nem tartalmaz backendet, adatbázist, regisztrációs vagy bejelentkezési funkciót.

> [!IMPORTANT]
> Figyelem: a projekt célja kizárólag az alapítvány bemutatása, információközlése és támogatási lehetőségeinek nyújtása. A tartalom statikus, közvetlenül a HTML fájlokból és JavaScript adatfájlokból épül fel.

---

## 1. Projekt áttekintése

A Napfénysziget Alapítvány weboldala egy olyan információs platform, amely a szervezet bemutatását, programjainak ismertetését, híreit, támogatási lehetőségeit és elérhetőségeit foglalja össze.

A honlap fő jellemzői:

* statikus HTML5 felépítés
* semmilyen backend, API vagy adatbázis nem kapcsolódik hozzá
* Bootstrap alapú, kifejezetten testreszabott stílusokkal
* dinamikus navigáció és lábléc a JavaScript segítségével, automatikus aktív menüpont-kijelöléssel
* központi adatok kezelése egyedi HTML elemekben (Web Components API)
* támogatási és szervezeti információk központosított tárolása

A weboldal célja, hogy a látogatók gyorsan és egyszerűen megtalálják:

* az alapítvány küldetését és történetét
* a főbb programokat és támogatási témákat
* a legfrissebb híreket és beszámolókat
* az adományozási és kapcsolatfelvételi lehetőségeket

---

## 2. Végleges koncepció: design, vizuális irányelvek és oldalszerkezet

A weboldal végleges koncepciója a közösségi, segítő, barátságos és hiteles alapítványi identitás köré épül. A cél nem a túlbonyolított funkciók megjelenítése, hanem a bizalom, a közelség és a támogatási kedv felkeltése a látogatóban.

### 2.1. Vizuális irányelvek

A design fő jellemzői a következők:

* meleg, barátságos színpaletta a logó arculati színeire építve
* hangsúlyos sárga, mélynarancs és élénk zöld kiemelések
* lágy, meleg krém háttér, amely nyugodt és tiszta képet ad
* lekerekített gombok (border-radius: 50px), kártyák és panelek
* jól strukturált, szellős elrendezés
* nagyobb, jól olvasható, bizalmat keltő tipográfia (`Nunito` és `Quicksand`)

A CSS-ben használt végleges színskála (`:root` változók):

* `#fff200` – aranysárga, az alapértelmezett primer kiemelő szín (`--bg-yellow-gold`)
* `#f26522` – vibráló mélynarancs, a fő másodlagos akció- és CTA-szín (`--bg-orange-deep`)
* `#00a651` – élénk zöld, akcentusszín gombokhoz, jelvényekhez és sikeres állapotokhoz (`--poly-green`)
* `#fff9f0` – meleg, lágy krém háttérszín (`--bg-warm`)
* `#f1ede6` – világos krém a navigációhoz és a lábléchez (`--vanilla`)
* `#222222` – sötét, kontrasztos fő szövegszín (`--text-dark`)
* `#2e3192` – királykék, egyedi címsorokhoz és jogi kiemelésekhez (`--poly-blue`)
* `#00aeef` – türkiz / égkék, interaktív állapotokhoz (`--poly-teal`)

A tipográfia a `Nunito` és `Quicksand` betűtípusokra épül, amelyek kerekített, barátságos és modern megjelenést kölcsönöznek az oldalnak.

### 2.2. Design követelmények és működési elvek

A végleges koncepció fontos szempontjai:

* A honlap központi üzenete: „segítség, remény, értékteremtés és közösség.”
* A navigáció mindig könnyen használható, rövid és célzott.
* A fő oldalak strukturált, szellős felépítésűek, hogy ne terheljék túl a látogatót bonyolult információkkal.
* A CTA (Call to Action) elemek világosan kiemelkednek: adományozás, támogatás, kapcsolatfelvétel.
* A fotók és médiaelemek a rászorulókhoz, közösségi programokhoz és támogatási akciókhoz kapcsolódnak, így a tartalom emberi, valós és hiteles marad.
* A legfontosabb információk a főoldalra, a támogatási részre és a kapcsolatfelvételi pontokra koncentrálnak.

### 2.3. Oldalszerkezet

A végleges oldalszerkezet a következő fő fájlokból és modulokból épül fel:

* Főoldal – `index.html`
* Rólunk – `rolunk.html`
* Programok – `programok.html`
* Hírek – `hirek.html`
* Támogatás – `tamogatas.html`
* Kapcsolat – `kapcsolat.html`
* Impresszum – `impresszum.html`
* Oldaltérkép – `oldalterkep.html`

A struktúra logikája:

* a főoldal az első benyomást és az adományozási felhívást közvetíti,
* a Rólunk oldal az alapítvány értékeit és céljait mutatja be,
* a Programok oldal a konkrét kezdeményezéseket és támogatási modelleket írja le,
* a Hírek oldalon a friss események és beszámolók jelennek meg,
* a Támogatás oldalon a pénzügyi és adományozási információk vannak összefoglalva,
* a Kapcsolat és az Impresszum az elérhetőséget és a szükséges hivatalos adatokat biztosítja.

---

## 3. Technológiai háttér

A weboldal teljesen statikus, frontend-only megoldás.

### 3.1. Használt technológiák

* HTML5 (szemantikus elemek)
* CSS3 (CSS Variables, Flexbox, Grid, CSS animations)
* Bootstrap 5 (alapstruktúrához és reszponzivitáshoz)
* Vanilla JavaScript (ES6+)
* Web Components API (Custom Elements az adatszinkronizációhoz)

### 3.2. Backend és adatkezelés

A projekt nem használ:

* backend szerveroldali kódot
* automatikus regisztrációt
* felhasználói bejelentkezést
* adatbázist
* űrlapfeldolgozó szerveroldali scriptet

A belső adatok:

* közvetlenül a HTML-ben vannak megadva,
* JavaScript adatstruktúrákból (`hirek-data.js`) töltődnek be,
* a globális szervezeti adatok egyedi HTML elemeken keresztül (`global-data.js`) dinamikusan kerülnek beillesztésre.

---

## 4. Mappastruktúra

A struktúra a dokumentáció szempontjából releváns, publikus weboldal-fájlokat tartalmazza:

```text
.
├── README.md
├── index.html
├── rolunk.html
├── programok.html
├── hirek.html
├── kapcsolat.html
├── tamogatas.html
├── impresszum.html
├── oldalterkep.html
├── images/
│   ├── icon/
│   └── kepek/
├── scripts/
│   ├── global-data.js
│   ├── nav-footer.js
│   ├── hirek-data.js
│   └── bootstrap.bundle.min.js
├── styles/
│   ├── bootstrap.min.css
│   └── style.css
└── template/
    └── template.html

```

---

## 5. Oldalak és funkcióik

### 5.1. Főoldal – `index.html`

A főoldal célja az alapítvány rövid bemutatása és a legfontosabb cselekvési felhívás (adományozás) ösztönzése.

Fő elemek:

* Hero szekció címsorral és CTA gombokkal
* Rövid bemutatkozó és bevezető rész
* Beágyazott videós tartalom
* Mottó és kiemelt javaslatok
* Dinamikusan renderelt hírek rövid kártyás listája

### 5.2. Rólunk – `rolunk.html`

Az oldal a szervezet történetét, célkitűzéseit és értékrendjét mutatja be.

Fő elemek:

* Az alapítvány története és vízjelezett arculati háttere
* Küldetés, vízió és alapértékek
* Emberközpontú és esélyegyenlőségi megközelítés

### 5.3. Programok – `programok.html`

A programok oldalon a szervezet legfontosabb kezdeményezései jelennek meg:

* Megváltozott munkaképességűek foglalkoztatása és varróműhely
* Gyermek- és családtámogató adományprogram
* Iskolakezdési és tanszertámogatási akciók
* Önkormányzati és intézményi összefogások

### 5.4. Hírek – `hirek.html`

A hírek oldalon az alapítvány legutóbbi eseményei, kezdeményezései és támogatási akciói kerülnek részletes bemutatásra. Az adatok a `scripts/hirek-data.js` fájlból töltődnek be. Tartalmazza a beépített képgaléria és a Lightbox képnagyító funkciót.

### 5.5. Támogatás – `tamogatas.html`

Az adományozás és támogatás hivatalos csatornáit és adatait foglalja össze:

* Adószám és bankszámlaszám
* Online és közvetlen banki átutalási információk
* Az adó 1% felajánlásának lépésről lépésre követhető útmutatója

### 5.6. Kapcsolat – `kapcsolat.html`

Elérhetőségi adatok, térkép beágyazás és kapcsolatfelvételi információk.

### 5.7. Impresszum és oldaltérkép

* `impresszum.html`: A szervezet és a honlap jogi adatait, nyilvántartási számait tartalmazza.
* `oldalterkep.html`: A webhely átlátható belső elrendezését és linkstruktúráját mutatja be.

---

## 6. A projekt fő működési logikája

### 6.1. Központosított adatok – `scripts/global-data.js`

A szervezet alapadatai (név, adószám, bankszámlaszám stb.) központosítva vannak. A `customElements` API segítségével létrehozott egyedi HTML elemek automatikusan beillesztik az adatokat a megfelelő helyekre:

```javascript
class AlapitvanyNeve extends HTMLElement {
    connectedCallback() {
        this.textContent = "Napfény Sziget Rehabilitációs és Szociális Alapítvány"; 
    }
}

customElements.define('alapitvany-neve', AlapitvanyNeve);

class Telefonszam extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<a href="tel:+36301525797">+36 30 152 5797</a>`;
    }
}

customElements.define('alapitvany-telefonszam', Telefonszam);

```

Ez a megoldás biztosítja, hogy az adatok frissítésekor csupán egyetlen fájlt kelljen módosítani.

### 6.2. Navigáció és lábléc betöltése – `scripts/nav-footer.js`

A fejlécléc (navbar) és a lábléc (footer) JavaScript segítségével kerül dinamikus beillesztésre. A szkript az URL alapján automatikusan megkeresi és rásüti az `active` osztályt, valamint az `aria-current="page"` attribútumot az éppen megnyitott oldal menüpontjára.

```javascript
const navbarhtml = `
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img id="logo" src="images/icon/nap_logo.png" alt="Napfénysziget Alapítvány logója">
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#alapitvanyNav" aria-controls="alapitvanyNav" aria-expanded="false" aria-label="Navigáció nyitása">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="alapitvanyNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 nap-nav-links">
                <li class="nav-item"><a class="nav-link px-3" href="index.html">Főoldal</a></li>
                <li class="nav-item"><a class="nav-link px-3" href="rolunk.html">Rólunk</a></li>
                <li class="nav-item"><a class="nav-link px-3" href="programok.html">Programok</a></li>
                <li class="nav-item"><a class="nav-link px-3" href="hirek.html">Hírek</a></li>
                <li class="nav-item"><a class="nav-link px-3" href="kapcsolat.html">Kapcsolat</a></li>
            </ul>
            <div class="d-flex mt-3 mt-lg-0">
                <a href="tamogatas.html" class="nap-btn nap-btn-primary w-100 text-center">ADOMÁNYOZOK</a>
            </div>
        </div>
    </div>
</nav>
`;

const footerhtml = `
<div class="nap-footer-main py-5">
    <div class="container">
        <div class="row gy-4 text-start">
            <div class="col-lg-3 col-md-6">
                <img src="images/icon/nap_logo.png" alt="Napfénysziget Alapítvány logója" class="nap-footer-logo mb-3">
                <h5 class="mb-3 fw-bold nap-text-secondary"><alapitvany-neve></alapitvany-neve></h5>
                <p class="mb-1">
                    <strong>Székhely:</strong> <br>
                    <a href="https://www.google.com/maps/search/?api=1&query=6800+Hódmezővásárhely,+Szántó+Kovács+János+u.+87." target="_blank" rel="noopener">
                        <alapitvany-szekhely></alapitvany-szekhely>
                    </a>
                </p>
                <p class="mb-1 mt-2"><strong>Nyilvántartási szám:</strong> <br><birosagi-nyilvantartas-szam></birosagi-nyilvantartas-szam></p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="mb-3 fw-bold nap-text-accent">Támogass minket!</h5>
                <p class="mb-1"><strong>Adószám:</strong> <br><alapitvany-adoszam></alapitvany-adoszam></p>
                <p class="mb-3 mt-2"><strong>Bankszámlaszám:</strong> <br><alapitvany-bankszamla></alapitvany-bankszamla></p>
                <a href="tamogatas.html" class="nap-btn nap-btn-primary w-100 text-center mt-2">MOST ADOMÁNYOZOK</a>
            </div>
            <div class="col-lg-3 col-md-6" id="nap-elerhetosegek">
                <h5 class="mb-3 fw-bold">Kérdésed van?</h5>
                <p class="mb-1"><strong>Telefon:</strong> <br><alapitvany-telefonszam></alapitvany-telefonszam></p>
                <p class="mb-1 mt-2"><strong>Email:</strong> <br><alapitvany-email-cim></alapitvany-email-cim></p>
                <div class="mt-3 nap-footer-social">
                    <strong>Közösségi média:</strong> <br>
                    <facebook-link></facebook-link> 
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="mb-3 fw-bold">Ismerj meg minket!</h5>
                <ul class="list-unstyled nap-footer-links">
                    <li class="mb-2"><a href="rolunk.html">Rólunk</a></li>
                    <li class="mb-2"><a href="programok.html">Programok</a></li>
                    <li class="mb-2"><a href="hirek.html">Hírek</a></li>
                    <li class="mb-2"><a href="kapcsolat.html">Kapcsolat</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="nap-footer-secondary py-3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <small>© 2026 - <alapitvany-neve></alapitvany-neve></small>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <ul class="list-inline mb-0 nap-footer-bottom-links">
                    <li class="list-inline-item me-3"><a href="impresszum.html"><small>Impresszum</small></a></li>
                    <li class="list-inline-item"><a href="oldalterkep.html"><small>Oldaltérkép</small></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

function loadNavbar() {
    const navbar = document.querySelector('.nap-navbar');
    if (navbar) {
        navbar.innerHTML = navbarhtml;
        setActiveNavLink();
    }
}

function loadFooter() {
    const footer = document.querySelector('.nap-footer');
    if (footer) {
        footer.innerHTML = footerhtml;
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nap-nav-links .nav-link');
  
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
});
```

### 6.3. Hírek dinamikus renderelése – `index.html` és `hirek.html`

A főoldalon és a hírek oldalon a kártyák a `newsData` tömb alapján generálódnak:

```javascript
function renderNewsCards() {
    const container = document.getElementById('nap-news-container');
    if (!container || typeof newsData === 'undefined') return;

    container.innerHTML = newsData.map(news => `
        <article class="nap-news-card">
            <div>
                <span class="nap-badge">${news.date}</span>
                <h3>${news.title}</h3>
            </div>
            <p>${news.shortDescription}</p>
            <a href="hirek.html#${news.id}" class="nap-btn nap-btn-primary">
                Részletek
            </a>
        </article>
    `).join('');
}
```

### 6.4. Híradatok – `scripts/hirek-data.js`

A hírek adatai a `newsData` tömbben találhatók:

```javascript
const newsData = [
  {
    "id": "varromuhely-2023",
    "title": "Sikeres elindulás a megváltozott munkaképességűek foglalkoztatásában",
    "date": "2023. ősz",
    "shortDescription": "2023 őszén elindítottuk megváltozott munkaképességűeket foglalkoztató varróműhelyünket.",
    "fullDescription": "A projekt célja..."
  }
];
```

---

## 7. Stílus és dizájn

### 7.1. CSS Változók (`styles/style.css`)

A stílusok központi változói megegyeznek a forráskódban definiált `:root` értékekkel:

```css
:root {
    /* --- LOGÓ SZÍNEK --- */
    --bg-orange-deep: #f26522;    /* Vibráló mélynarancs */
    --bg-orange-light: #f7941d;   /* Világosabb narancs */
    --bg-yellow-gold: #fff200;    /* Aranysárga */
    --poly-green: #00a651;        /* Élénk zöld */
    --poly-teal: #00aeef;         /* Türkiz / Égkék */
    --poly-blue: #2e3192;         /* Királykék */

    /* --- ALAPVETŐ SZÍNEK --- */
    --primary: var(--bg-yellow-gold);
    --secondary: var(--bg-orange-deep);
    --accent: var(--poly-green);
    --bg-warm: #FFF9F0;           /* Lágy krém háttér */
    --text-dark: #222222;         /* Sötét, kontrasztos szöveg */
    --white: #ffffff;
    --vanilla: #f1ede6;           /* Világos krém navbar/footer háttér */
}
```

### 7.2. Gombok és CTA elemek

A gombok lekerekített (pill-style) megjelenést kaptak a közvetlen és barátságos hatás érdekében:

```css
.nap-btn {
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 50px;
    font-weight: 700;
    transition: 0.3s;
    display: inline-block;
    border: none;
}

.nap-btn-primary {
    background-color: var(--secondary);
    color: var(--white);
}

.nap-btn-secondary {
    background-color: var(--accent);
    color: var(--white);
    margin-left: 10px;
}

```

---

## 8. Karbantartás és bővítés

A projekt szerkezete elkülöníti a felelősségi köröket:

* **HTML**: Oldalstruktúra és szöveges tartalom.
* **CSS**: Vizuális megjelenés, animációk és elrendezés (`styles/style.css`).
* **JavaScript**: Dinamikus komponensek (`nav-footer.js`), adatok (`hirek-data.js`, `global-data.js`).
* **Média**: Képek az `images/kepek` és `images/icon` mappákban.

### 8.1. Adatok módosítása

Az alapítványi adatváltozásokat (telefon, e-mail, bankszámlaszám) a `scripts/global-data.js` fájlban kell átírni a megfelelő Custom Element osztályok törzsében.

### 8.2. Hír hozzáadása

Új hír felvételéhez a `scripts/hirek-data.js` fájlban található `newsData` tömböt kell bővíteni egy új objektummal.

### 8.3. Új oldal létrehozása

1. Hozz létre egy új `.html` fájlt a `template/template.html` alapján.
2. Hivatkozd be a szükséges szkripteket (`global-data.js`, `nav-footer.js`).
3. Szükség esetén add hozzá az új oldalt a `scripts/nav-footer.js` navigációs menüjéhez (`navbarhtml` string).

---

## 9. Helyi futtatás

Mivel a projekt teljesen statikus, nem igényel szerveroldali fordítást vagy adatbázis-telepítést.

### 9.1. Futtatási lehetőségek

1. **Helyi HTTP Szerver (Ajánlott)**: A JavaScript dinamikus moduljai és az egyedi elemek böngészőfüggő korlátozásainak (CORS) elkerülése érdekében ajánlott a projektet egy egyszerű helyi webszerverrel megnyitni (pl. VS Code *Live Server* bővítmény használatával).
2. **Közvetlen böngészős megnyitás**: A HTML fájlok (pl. `index.html`) közvetlenül duplaklikkel is megnyithatók bármilyen modern webböngészőben.

---

## 10. A projekt jellemzői összefoglalva

* Teljesen statikus, frontend-only architektúra
* Nincs szerveroldali kód, adatbázis vagy bejelentkezési felület
* Gyors betöltési sebesség és alacsony erőforrás-igény
* Egyedi CSS változókra épülő, Bootstrap-kompatibilis téma
* Automatizált navigáció, aktív oldal-kijelölés és beágyazott lábléc JavaScript alapon
* Adatkezelés natív JavaScript és Web Components alapon
* Mobilbarát, reszponzív felépítés

---

## 11. Összegzés

A Napfénysziget Alapítvány weboldala egy átlátható, modern és könnyen karbantartható statikus webhely. A felépítése biztosítja, hogy a látogatók gyorsan megtalálják a szükséges információkat és adományozási lehetőségeket, míg az üzemeltető számára egyszerűvé válik az adatok és hírek frissítése.
