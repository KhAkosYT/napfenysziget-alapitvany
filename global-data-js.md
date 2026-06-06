# `global-data.js` Dokumentáció

Ez a JavaScript fájl a **Napfénysziget Rehabilitációs és Szociális Alapítvány** weboldalának globális törzsadat-kezeléséért felelős. A kód a modern **Web Components (Custom Elements)** technológiát használja, amely lehetővé teszi, hogy egyedi HTML elemeket hozzunk létre.

## Miért jó ez a megoldás?

* **Központosított adatkezelés**: Ha megváltozik egy adat, azt **elég egyetlen helyen (ebben a fájlban)** átírni.
* **Automatikus frissülés**: A módosítás azonnal érvénybe lép a honlap összes olyan aloldalán, ahol az adott egyedi HTML elemet elhelyezték.
* **Tiszta HTML kód**: A fejlesztés során nem kell hosszú szövegeket vagy linkeket másolgatni, elég csak a rövid HTML tageket használni.

---

## Elérhető Egyedi HTML Elemek

A fájl az alábbi egyedi elemeket regisztrálja a böngészőben:


| HTML Tag neve | Megjelenített tartalom | Típus |
| :--- | :--- | :--- |
| `<alapitvany-neve>` | `Napfénysziget Rehabilitációs és Szociális Alapítvány` | Sima szöveg |
| `<alapitvany-adoszam>` | `19363020-1-06` | Sima szöveg |
| `<bankszamla>` | `50468232-10014516 MBH Bank Nyilvánosan Működő Részvénytársaság` | Sima szöveg |
| `<telefonszam>` | `+3630 152 5797` | Sima szöveg |
| `<email-cim>` | `napfenyszigetalapitvany@gmail.com` | Sima szöveg |
| `<szekhely>` | `6800 Hódmezővásárhely, Szántó Kovács János u. 87.` | Sima szöveg |
| `<birosagi-nyilvantartas-szam>` | `06-01-0001807` | Sima szöveg |
| `<facebook-link>` | [Facebook oldalunk](https://facebook.com) | Kattintható link |

---

## Technikai Működés Elmagyarázása

A kód minden egyes adatnál az alábbi három lépést követi:

### 1. Osztály létrehozása (Class)
Minden elem mögött egy JavaScript osztály áll, amely a natív `HTMLElement` osztályból öröklődik.
```javascript
class AlapitvanyNeve extends HTMLElement { ... }
```

### 2. Életciklus függvény (`connectedCallback`)
Ez a beépített függvény automatikusan lefut, amikor a böngésző beilleszti az elemet a HTML dokumentumba. 
* A `this.textContent` használatával sima szöveget írunk ki.
* A `this.innerHTML` segítségével formázott HTML kódot (például új ablakban megnyíló linket) adhatunk át a böngészőnek.
```javascript
connectedCallback() {
    this.textContent = "Napfénysziget Rehabilitációs és Szociális Alapítvány"; 
}
```

### 3. Regisztráció (`customElements.define`)
Ahhoz, hogy a böngésző felismerje az egyedi tagedet, össze kell kapcsolni a választott nevet a létrehozott osztállyal. A névben **kötelező legalább egy kötőjelet (`-`) használni**, hogy ne ütközzön a gyári HTML elemekkel.
```javascript
customElements.define('alapitvany-neve', AlapitvanyNeve);
```

---

## Hogyan használd a HTML oldalakon?

### 1. Lépés: Beágyazás
A HTML dokumentum `<head>` részében vagy a `</body>` tag előtt be kell hívni ezt a JavaScript fájlt:
```html
<script src="global-data.js"></script>
```

### 2. Lépés: Megjelenítés
Ezután a weboldal bármelyik pontján közvetlenül használhatod az egyedi tageket:
```html
<p>Üdvözöljük a <alapitvany-neve></alapitvany-neve> honlapján!</p>

<ul>
    <li><strong>Adószám:</strong> <alapitvany-adoszam></alapitvany-adoszam></li>
    <li><strong>Bankszámlaszám:</strong> <bankszamla></bankszamla></li>
    <li><strong>Kapcsolat:</strong> <facebook-link></facebook-link></li>
</ul>
```
