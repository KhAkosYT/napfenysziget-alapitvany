# 🏢 Napfénysziget Alapítvány Weboldal Terv - Design & Struktúra

Ez a dokumentum tartalmazza a Napfénysziget Alapítványnak készülő statikus weboldal alapvető terveit, vizuális irányelveit és felépítését.

## 🎨 Vizuális Irányelvek (Design Guide)

### Színpaletta

| Szerep | Minta | Hex kód | Megjegyzés |
| :--- | :---: | :--- | :--- |
| **Fő hangsúly** | 🟡 | `#FFC837` | Gombok (CTA), fontos kiemelések, ikonok. |
| **Meleg kontraszt** | 🟠 | `#F05A28` | Másodlagos gombok, hover effektek. |
| **Természetes alap** | 🟢 | `#7AC143` | Alapítványi jelleg, sikerélmények, pipák. |
| **Háttér / Nyugalom** | 🍦 | `#FFF9F0` | Oldalháttér (tiszta fehér helyett). |
| **Szöveg / Keret** | ⚫ | `#333333` | **Szigorúan tilos a tiszta fekete!** |

***Lényeg, hogy barátságos meleg színek legyenek használva!***

### Tipográfia és Stílus
- **Betűtípus:** `Nunito` vagy `Quicksand` (Google Fonts) - kerekded, barátságos forma.
- **Formavilág:** Nagy lekerekítések (min. 15px) a gombokon és kártyákon.
- **Elrendezés:** Középre zárt tartalom (`max-width: 1200px`), szellős whitespace.

---

## 🏗️ Webhely Felépítése (Sitemap)

Az oldal többlapos felépítésű, statikus technológiával (HTML/CSS/JS).

1.  **Főoldal (Home):** `index.html` - Videós bemutatkozás, kiemelt adományozási felhívás.
2.  **Rólunk:** `rolunk.html` - Az alapítvány története + Alapító okirat (PDF letöltés).
3.  **Tevékenységeink:**
    - **Leírás szerint:** `tevekenysegeink/leiras.html`
    - **Képekben (Galéria):** `tevekenysegeink/galeria.html`
4.  **Támogatás:** `tamogatas.html` - Adószám (1%), bankszámlaszám és online adományozási infók.
5.  **Projektjeink:** `projektjeink.html` - (Üres oldal) Jövőbeli tervek számára.
6.  **Hírek:** `hirek.html` - Időrendi beszámolók (havi frissítéssel).
7.  **Kapcsolat:** `kapcsolat.html` - Cím, telefonszám, email és beágyazott térkép.
8.  **Impresszum:** `impresszum.html` - Hivatalos adatok, jogi nyilatkozat.
9.  **Oldaltérkép:** `oldalterkep.html` - Az oldal belső linkstruktúrája.

### Mappastruktúra terv

```text
.
├── index.html
├── rolunk.html
├── tamogatas.html
├── projektjeink.html
├── hirek.html
├── kapcsolat.html
├── impresszum.html
├── oldalterkep.html
└── tevekenysegeink/
    ├── leiras.html
    └── galeria.html
```

---

## 💡 Funkcionális követelmények

- **Call to Action (CTA):** A navbar jobb felső sarkában mindig látható narancssárga "ADOMÁNYOZOK" gomb.
- **Média:** Beágyazott YouTube videók (RTL interjú, személyes üzenet).
- **Elérhetőség:** A telefonszám és az email cím a láblécben is fixen szerepeljen.
- **Karakter:** Vidám, meleg, közösségi ház érzet.

---

## 🔗 Inspirációs források
- **Struktúra:** [pirosorr.hu](https://pirosorr.hu) (Navbar és adományozás fókusz)
- **Elrendezés:** [daganatos.hu](https://daganatos.hu) (Középre zárt tartalom)
