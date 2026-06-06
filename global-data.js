// Definiáljuk a saját HTML elemünket
class AlapitvanyNeve extends HTMLElement {
    connectedCallback() {
        // Itt adjuk meg az értéket – ha változik, csak itt kell átírni!
        this.textContent = "Napfénysziget Rehabilitációs és Szociális Alapítvány"; 
    }
}

// Regisztráljuk a böngészőben <alapitvany-neve></alapitvany-neve> néven
customElements.define('alapitvany-neve', AlapitvanyNeve);



class AlapitvanyAdoszam extends HTMLElement {
    connectedCallback() {
        this.textContent = "19363020-1-06"; 
    }
}

//<alapitvany-adoszam></alapitvany-adoszam>
customElements.define('alapitvany-adoszam', AlapitvanyAdoszam);



class Bankszamla extends HTMLElement {
    connectedCallback() {
        this.textContent = "50468232-10014516 MBH Bank Nyilvánosan Működő Részvénytársaság";
    }
}
//<alapitvany-bankszamla></alapitvany-bankszamla>
customElements.define('alapitvany-bankszamla', Bankszamla);



class Telefonszam extends HTMLElement {
    connectedCallback() {
        this.textContent = "+3630 152 5797";
    }
}
//<alapitvany-telefonszam></alapitvany-telefonszam>
customElements.define('alapitvany-telefonszam', Telefonszam);



class EmailCim extends HTMLElement {
    connectedCallback() {
        this.textContent = "napfenyszigetalapitvany@gmail.com";
    }
}
//<alapitvany-email-cim></alapitvany-email-cim>
customElements.define('alapitvany-email-cim', EmailCim);



class Szekhely extends HTMLElement {
    connectedCallback() {
        this.textContent = "6800 Hódmezővásárhely, Szántó Kovács János u. 87.";
    }
}
//<alapitvany-szekhely></alapitvany-szekhely>
customElements.define('alapitvany-szekhely', Szekhely);



class FacebookLink extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<a href="https://www.facebook.com/profile.php?id=100095203377954" target="_blank">Facebook oldalunk</a>`;
    }
}
//<alapitvany-facebook-link></alapitvany-facebook-link>
customElements.define('facebook-link', FacebookLink);



class BirosagiNyilvantartasSzam extends HTMLElement {
    connectedCallback() {
        this.textContent = "06-01-0001807";
    }
}
//<birosagi-nyilvantartas-szam></birosagi-nyilvantartas-szam>
customElements.define('birosagi-nyilvantartas-szam', BirosagiNyilvantartasSzam);