document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const tabButtons = document.querySelectorAll(".tab-button");

    const homeContent = `
        <h1>Pagină Adaptivă</h1>
        <p>Acesta este un exemplu de pagină cu fundal #A67C68.</p>
    `;
    const shopContent = `
        <h1>ShopOnline</h1>
        <div class="products">
            <div class="product" data-product-id="product1">
                <img src="img/product1-grey.jpg" alt="Hidden Fan Installation" class="product-image">
                <h3>Hidden Fan Installation</h3>
                <div class="dots">
                    <button class="dot grey active" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>4999 MDL</p>
            </div>
            <div class="product" data-product-id="product2">
                <img src="img/product2-grey.jpg" alt="Hidden Fan Installation" class="product-image">
                <h3>Hidden Fan Installation</h3>
                <div class="dots">
                    <button class="dot grey active" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>5499 MDL</p>
            </div>
            <div class="product" data-product-id="product3">
                <img src="img/product3-grey.jpg" alt="Hidden Fan Installation" class="product-image">
                <h3>Hidden Fan Installation</h3>
                <div class="dots">
                    <button class="dot grey active" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>5999 MDL</p>
            </div>
            <div class="product" data-product-id="product4">
                <div class="loading-spinner"></div>
                <h3>VentDesign175</h3>
                <div class="dots">
                    <button class="dot grey" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>În curând</p>
            </div>
            <div class="product" data-product-id="product5">
                <div class="loading-spinner"></div>
                <h3>VentDesign200</h3>
                <div class="dots">
                    <button class="dot grey" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>În curând</p>
            </div>
            <div class="product" data-product-id="product6">
                <div class="loading-spinner"></div>
                <h3>VentDesign225</h3>
                <div class="dots">
                    <button class="dot grey" data-color="grey"></button>
                    <button class="dot ivory" data-color="ivory"></button>
                    <button class="dot black" data-color="black"></button>
                </div>
                <p>În curând</p>
            </div>
        </div>
    `;

    content.innerHTML = homeContent;

    // Logica pentru tab-uri
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const tab = this.getAttribute("data-tab");
            if (tab === "home") {
                content.innerHTML = homeContent;
            } else if (tab === "shop") {
                content.innerHTML = shopContent;
                addDotEventListeners(); // Adaugăm evenimentele după ce conținutul e încărcat
            }
        });
    });

    // Funcție pentru a adăuga evenimentele la puncte
    function addDotEventListeners() {
        const products = document.querySelectorAll(".product");
        products.forEach(product => {
            const dots = product.querySelectorAll(".dot");
            const image = product.querySelector(".product-image");
            const productId = product.getAttribute("data-product-id");

            dots.forEach(dot => {
                dot.addEventListener("click", function() {
                    // Eliminăm clasa active de la toate punctele din acest produs
                    dots.forEach(d => d.classList.remove("active"));
                    // Adăugăm clasa active la punctul apăsat
                    this.classList.add("active");

                    // Schimbăm imaginea în funcție de culoare
                    const color = this.getAttribute("data-color");
                    if (image) { // Verificăm dacă există o imagine (nu spinner)
                        image.src = `img/${productId}-${color}.jpg`;
                    }
                });
            });
        });
    }

    // Adaugăm evenimentele inițial dacă tab-ul ShopOnline e activ la încărcare
    if (document.querySelector(".tab-button.active").getAttribute("data-tab") === "shop") {
        addDotEventListeners();
    }
});