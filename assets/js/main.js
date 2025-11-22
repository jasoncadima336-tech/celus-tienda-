// Product Database
const products = [
    {
        id: 1,
        name: "Samsung Galaxy S23 Ultra",
        brand: "samsung",
        type: "phone",
        price: 1199.99,
        description: "Fotografía profesional con cámara de 200MP y S Pen incluido",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.8\" Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB/512GB/1TB",
            battery: "5000mAh",
            camera: "200MP + 12MP + 10MP + 10MP"
        }
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        brand: "apple",
        type: "phone",
        price: 1199.99,
        description: "Titanio. Ultraresistente. Ultra Pro",
        image: "https://tse1.mm.bing.net/th/id/OIP.dLmdDaLAm3CHhuFFaYMTvAHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.7\" Super Retina XDR",
            processor: "A17 Pro",
            ram: "8GB",
            storage: "256GB/512GB/1TB",
            battery: "4422mAh",
            camera: "48MP + 12MP + 12MP"
        }
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        brand: "google",
        type: "phone",
        price: 999.99,
        description: "La mejor experiencia Android con IA avanzada",
        image: "https://tse3.mm.bing.net/th/id/OIP.agQ8l_9vjgsEdpHC0PaVbAHaFl?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.7\" LTPO OLED",
            processor: "Google Tensor G3",
            ram: "12GB",
            storage: "128GB/256GB",
            battery: "5050mAh",
            camera: "50MP + 48MP + 48MP"
        }
    },
    {
        id: 4,
        name: "Xiaomi 13T Pro",
        brand: "xiaomi",
        type: "phone",
        price: 799.99,
        description: "Fotografía Leica con potencia flagship",
        image: "https://tse2.mm.bing.net/th/id/OIP.uU0ZG4T-1xbmya8Fje7-JwHaJJ?cb=12&w=1088&h=1344&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.67\" CrystalRes AMOLED",
            processor: "Dimensity 9200+",
            ram: "12GB",
            storage: "256GB/512GB",
            battery: "5000mAh",
            camera: "50MP + 50MP + 12MP"
        }
    },
    {
        id: 5,
        name: "iPad Pro 12.9",
        brand: "apple",
        type: "tablet",
        price: 1099.99,
        description: "Potencia de computadora en formato tablet",
        image: "https://th.bing.com/th/id/R.233d414f8fcc9186c1fbb542e4735221?rik=ZCYnu5sRRmYjCA&pid=ImgRaw&r=0",
        specs: {
            screen: "12.9\" Liquid Retina XDR",
            processor: "M2",
            ram: "8GB/16GB",
            storage: "128GB-2TB",
            battery: "10758mAh",
            camera: "12MP + 10MP"
        }
    },
    {
        id: 6,
        name: "Samsung Galaxy Tab S9 Ultra",
        brand: "samsung",
        type: "tablet",
        price: 1199.99,
        description: "La tablet Android definitiva con S Pen",
        image: "https://tse3.mm.bing.net/th/id/OIP.Ov5Nrxfo1lhY6n7ElKeuvAHaFP?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "14.6\" Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB/16GB",
            storage: "256GB/512GB/1TB",
            battery: "11200mAh",
            camera: "13MP + 8MP"
        }
    },
    {
        id: 7,
        name: "OnePlus 11",
        brand: "oneplus",
        type: "phone",
        price: 699.99,
        description: "Velocidad y rendimiento sin compromisos",
        image: "https://m.media-amazon.com/images/I/71jvbxyQ2TL.jpg",
        specs: {
            screen: "6.7\" AMOLED LTPO",
            processor: "Snapdragon 8 Gen 2",
            ram: "8GB/16GB",
            storage: "128GB/256GB",
            battery: "5000mAh",
            camera: "50MP + 48MP + 32MP"
        }
    },
    {
        id: 8,
        name: "Motorola Edge 40 Pro",
        brand: "motorola",
        type: "phone",
        price: 899.99,
        description: "Rendimiento premium con carga ultrarrápida",
        image: "https://tse4.mm.bing.net/th/id/OIP.M-uko4RVSzSkL3T3IKoyxQHaJc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.67\" pOLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB",
            battery: "4600mAh",
            camera: "50MP + 50MP + 12MP"
        }
    },
    {
        id: 9,
        name: "Xiaomi Pad 6 Pro",
        brand: "xiaomi",
        type: "tablet",
        price: 499.99,
        description: "Entretenimiento y productividad accesible",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "11\" 2.8K LCD",
            processor: "Snapdragon 8+ Gen 1",
            ram: "8GB",
            storage: "128GB/256GB",
            battery: "8600mAh",
            camera: "13MP"
        }
    },
    {
        id: 10,
        name: "Nothing Phone (2)",
        brand: "nothing",
        type: "phone",
        price: 699.99,
        description: "Diseño único con interfaz Glyph",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.7\" LTPO OLED",
            processor: "Snapdragon 8+ Gen 1",
            ram: "12GB",
            storage: "256GB",
            battery: "4700mAh",
            camera: "50MP + 50MP"
        }
    },
    {
        id: 11,
        name: "Lenovo Tab P12 Pro",
        brand: "lenovo",
        type: "tablet",
        price: 699.99,
        description: "Tablet premium para productividad",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "12.6\" AMOLED",
            processor: "Snapdragon 870",
            ram: "8GB",
            storage: "256GB",
            battery: "10200mAh",
            camera: "13MP + 5MP"
        }
    },
    {
        id: 12,
        name: "OPPO Find X6 Pro",
        brand: "oppo",
        type: "phone",
        price: 999.99,
        description: "Fotografía profesional Hasselblad",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.82\" LTPO AMOLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB/16GB",
            storage: "256GB/512GB",
            battery: "5000mAh",
            camera: "50MP + 50MP + 50MP"
        }
    },
    {
        id: 13,
        name: "Realme GT5 Pro",
        brand: "realme",
        type: "phone",
        price: 649.99,
        description: "Velocidad y carga ultrarrápida",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.74\" AMOLED",
            processor: "Snapdragon 8 Gen 3",
            ram: "12GB/16GB",
            storage: "256GB/512GB",
            battery: "5400mAh",
            camera: "50MP + 8MP + 2MP"
        }
    },
    {
        id: 14,
        name: "Huawei MatePad Pro 13.2",
        brand: "huawei",
        type: "tablet",
        price: 899.99,
        description: "Pantalla OLED de alta resolución",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "13.2\" OLED",
            processor: "Kirin 9000S",
            ram: "12GB",
            storage: "256GB/512GB",
            battery: "10100mAh",
            camera: "13MP"
        }
    },
    {
        id: 15,
        name: "Vivo X100 Pro",
        brand: "vivo",
        type: "phone",
        price: 899.99,
        description: "Fotografía profesional ZEISS",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.78\" AMOLED",
            processor: "Dimensity 9300",
            ram: "12GB/16GB",
            storage: "256GB/512GB",
            battery: "5400mAh",
            camera: "50MP + 50MP + 50MP"
        }
    },
    {
        id: 16,
        name: "Sony Xperia 1 V",
        brand: "sony",
        type: "phone",
        price: 1299.99,
        description: "Experiencia fotográfica profesional",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.5\" 4K OLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB/512GB",
            battery: "5000mAh",
            camera: "48MP + 12MP + 12MP"
        }
    },
    {
        id: 17,
        name: "Microsoft Surface Pro 9",
        brand: "microsoft",
        type: "tablet",
        price: 999.99,
        description: "Versatilidad Windows en formato tablet",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "13\" PixelSense",
            processor: "Intel Core i7-1255U",
            ram: "16GB",
            storage: "256GB/512GB/1TB",
            battery: "47.7Wh",
            camera: "10MP + 1080p"
        }
    },
    {
        id: 18,
        name: "ASUS ROG Phone 7 Ultimate",
        brand: "asus",
        type: "phone",
        price: 1299.99,
        description: "El mejor smartphone gaming",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "6.78\" AMOLED",
            processor: "Snapdragon 8 Gen 2",
            ram: "16GB",
            storage: "512GB",
            battery: "6000mAh",
            camera: "50MP + 13MP + 8MP"
        }
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Fold5",
        brand: "samsung",
        type: "phone",
        price: 1799.99,
        description: "El futuro de los smartphones plegables",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "7.6\" Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB/512GB/1TB",
            battery: "4400mAh",
            camera: "50MP + 12MP + 10MP"
        }
    },
    {
        id: 20,
        name: "iPad Air",
        brand: "apple",
        type: "tablet",
        price: 599.99,
        description: "Potencia y versatilidad a un precio accesible",
        image: "https://tse4.mm.bing.net/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        specs: {
            screen: "10.9\" Liquid Retina",
            processor: "M1",
            ram: "8GB",
            storage: "64GB/256GB",
            battery: "7600mAh",
            camera: "12MP"
        }
    }
];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const brandFilters = document.querySelectorAll('.brand-filter button');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.total-amount');
const checkoutButton = document.querySelector('.checkout-button');
const themeToggle = document.querySelector('.theme-toggle');
const productSearch = document.querySelector('.product-search input');
const compareSelects = document.querySelectorAll('.compare-select select');
const comparisonTable = document.querySelector('.comparison-table');
const contactForm = document.getElementById('contact-form');

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart();

// Theme State
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);
updateThemeIcon();

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    populateCompareSelects();
    updateCartCount();

    // Payment Event Listeners
    cardNumber.addEventListener('input', () => formatCardNumber(cardNumber));
    cardExpiry.addEventListener('input', () => formatExpiry(cardExpiry));
    cardCvc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    closePaymentBtn.addEventListener('click', () => {
        paymentModal.classList.remove('open');
    });

    paymentForm.addEventListener('submit', processPayment);
});

brandFilters.forEach(button => {
    button.addEventListener('click', () => {
        brandFilters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const brand = button.dataset.brand;
        const filteredProducts = brand === 'all' 
            ? products 
            : products.filter(product => product.brand === brand);
        displayProducts(filteredProducts);
    });
});

productSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('open');
});

themeToggle.addEventListener('click', toggleTheme);

compareSelects.forEach(select => {
    select.addEventListener('change', updateComparison);
});

contactForm.addEventListener('submit', handleContactSubmit);

// Payment Modal Elements
const paymentModal = document.querySelector('.payment-modal');
const paymentForm = document.getElementById('payment-form');
const closePaymentBtn = document.querySelector('.close-payment');
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('card-expiry');
const cardCvc = document.getElementById('card-cvc');
const loadingSpinner = document.querySelector('.loading-spinner');
const paymentSuccess = document.querySelector('.payment-success');
const orderItems = document.querySelector('.order-items');

// Demo Card for Testing
const demoCard = {
    number: '4242 4242 4242 4242',
    expiry: '12/25',
    cvc: '123'
};

// Functions
function displayProducts(products) {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification('Producto añadido al carrito');
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" width="50">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Actualizar el botón de checkout
    if (cart.length > 0) {
        checkoutButton.style.display = 'block';
        checkoutButton.onclick = initializePaymentModal;
    } else {
        checkoutButton.style.display = 'none';
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const currentTheme = document.body.getAttribute('data-theme');
    themeToggle.innerHTML = `<i class="fas fa-${currentTheme === 'light' ? 'moon' : 'sun'}"></i>`;
}

function populateCompareSelects() {
    const options = products.map(product => 
        `<option value="${product.id}">${product.name}</option>`
    ).join('');
    
    compareSelects.forEach(select => {
        select.innerHTML += options;
    });
}

function updateComparison() {
    const phone1Id = parseInt(compareSelects[0].value);
    const phone2Id = parseInt(compareSelects[1].value);

    if (phone1Id && phone2Id) {
        const phone1 = products.find(p => p.id === phone1Id);
        const phone2 = products.find(p => p.id === phone2Id);

        comparisonTable.innerHTML = `
            <table>
                <tr>
                    <th>Característica</th>
                    <th>${phone1.name}</th>
                    <th>${phone2.name}</th>
                </tr>
                <tr>
                    <td>Pantalla</td>
                    <td>${phone1.specs.screen}</td>
                    <td>${phone2.specs.screen}</td>
                </tr>
                <tr>
                    <td>Procesador</td>
                    <td>${phone1.specs.processor}</td>
                    <td>${phone2.specs.processor}</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>${phone1.specs.ram}</td>
                    <td>${phone2.specs.ram}</td>
                </tr>
                <tr>
                    <td>Almacenamiento</td>
                    <td>${phone1.specs.storage}</td>
                    <td>${phone2.specs.storage}</td>
                </tr>
                <tr>
                    <td>Batería</td>
                    <td>${phone1.specs.battery}</td>
                    <td>${phone2.specs.battery}</td>
                </tr>
                <tr>
                    <td>Precio</td>
                    <td>$${phone1.price.toFixed(2)}</td>
                    <td>$${phone2.price.toFixed(2)}</td>
                </tr>
            </table>
        `;
    }
}

// Payment Functions
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = value;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    input.value = value;
}

function initializePaymentModal() {
    // Auto-fill demo card for testing
    cardNumber.value = demoCard.number;
    cardExpiry.value = demoCard.expiry;
    cardCvc.value = demoCard.cvc;

    // Update order summary
    updateOrderSummary();
    
    paymentModal.classList.add('open');
}

function updateOrderSummary() {
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
}

function processPayment(e) {
    e.preventDefault();
    
    const paymentForm = document.querySelector('.payment-form');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const paymentSuccess = document.querySelector('.payment-success');

    // Ocultar formulario y mostrar spinner
    paymentForm.style.display = 'none';
    loadingSpinner.style.display = 'block';

    // Simular proceso de pago
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        paymentSuccess.style.display = 'block';

        // Esperar 2 segundos y cerrar el modal
        setTimeout(() => {
            // Limpiar carrito
            cart = [];
            updateCart();
            
            // Resetear formulario
            paymentForm.reset();
            
            // Cerrar modal y resetear vista
            paymentModal.classList.remove('open');
            paymentForm.style.display = 'block';
            paymentSuccess.style.display = 'none';

            // Mostrar notificación
            showNotification('¡Compra realizada con éxito!');
        }, 2000);
    }, 2000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };
    
    // Aquí irían las validaciones y el envío del formulario
    showNotification('Mensaje enviado correctamente');
    e.target.reset();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});