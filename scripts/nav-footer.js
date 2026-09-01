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
                <small>&copy; 2026 - <alapitvany-neve></alapitvany-neve></small>
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

// Aktív menüpont automatikus kijelölése az URL alapján
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