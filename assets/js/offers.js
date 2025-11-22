// Ofertas especiales: productos con descuento
const discountedProducts = products.map(product => {
    // Generar descuentos aleatorios para algunos productos
    if (Math.random() > 0.5) {
        const discountPercent = [10, 15, 20, 25, 30, 40, 50][Math.floor(Math.random() * 7)];
        const originalPrice = product.price;
        const discountedPrice = originalPrice * (1 - discountPercent / 100);
        
        return {
            ...product,
            originalPrice,
            price: discountedPrice,
            discountPercent
        };
    }
    return null;
}).filter(product => product !== null);

// Ofertas relámpago: seleccionar 4 productos al azar
const flashDeals = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map(product => {
        const discountPercent = [40, 50, 60][Math.floor(Math.random() * 3)];
        const originalPrice = product.price;
        const discountedPrice = originalPrice * (1 - discountPercent / 100);
        
        return {
            ...product,
            originalPrice,
            price: discountedPrice,
            discountPercent
        };
    });

// Función para mostrar las ofertas
function displayDeals() {
    const dealsGrid = document.querySelector('.deals-grid');
    if (dealsGrid) {
        dealsGrid.innerHTML = discountedProducts.map(product => `
            <div class="deal-card">
                <span class="discount-badge">-${product.discountPercent}%</span>
                <img src="${product.image}" alt="${product.name}" class="deal-image">
                <div class="deal-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price-info">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        <span class="deal-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Función para mostrar las ofertas relámpago
function displayFlashDeals() {
    const flashDealsGrid = document.querySelector('.flash-deals-grid');
    if (flashDealsGrid) {
        flashDealsGrid.innerHTML = flashDeals.map(product => `
            <div class="deal-card">
                <span class="discount-badge">¡-${product.discountPercent}%!</span>
                <img src="${product.image}" alt="${product.name}" class="deal-image">
                <div class="deal-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price-info">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        <span class="deal-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        ¡Comprar Ya!
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Contador regresivo para ofertas relámpago
function startCountdown() {
    // Establecer tiempo límite (3 horas desde ahora)
    const endTime = new Date().getTime() + (3 * 60 * 60 * 1000);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = "¡Ofertas terminadas!";
        }
    }, 1000);
}

// Inicializar página de ofertas
document.addEventListener('DOMContentLoaded', () => {
    displayDeals();
    displayFlashDeals();
    startCountdown();
});