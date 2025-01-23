const products = [
    {
        id: 1,
        name: 'Fresh Organic Apples',
        price: 4.99,
        category: 'Fruits',
        image: 'Organic Apples.jpg'
    },
    {
        id: 2,
        name: 'Ripe Bananas',
        price: 2.49,
        category: 'Fruits',
        image: 'Bananas.jpg'
    },
    {
        id: 3,
        name: 'Organic Spinach',
        price: 3.79,
        category: 'Vegetables',
        image: 'Organic Spinach.jpg'
    },
    {
        id: 4,
        name: 'Whole Milk',
        price: 5.29,
        category: 'Dairy',
        image: 'Whole Milk.jpg',
        description: 'Farm-fresh whole milk, locally sourced'
    },
    {
        id: 5,
        name: 'Artisan Bread',
        price: 6.99,
        category: 'Bakery',
        image: 'Artisan Bread.jpg',
        description: 'Freshly baked sourdough bread'
    },
    {
        id: 6,
        name: 'Mixed Nuts',
        price: 7.49,
        category: 'Snacks',
        image: 'Mixed Nuts.jpg',
        description: 'Premium mixed nuts, roasted and salted'
    },
    {
        id: 7,
        name: 'Orange Juice',
        price: 4.29,
        category: 'Drinks',
        image: 'Orange Juice.jpg',
        description: '100% pure, freshly squeezed orange juice'
    },
    {
        id: 8,
        name: 'Organic Bananas',
        price: 2.99,
        category: 'Fruits',
        image: 'Organic Bananas.jpg',
        description: 'Ripe, sweet organic bananas'
    },
    {
        id: 9,
        name: 'Cherry Tomatoes',
        price: 3.79,
        category: 'Vegetables',
        image: 'Cherry Tomatoes.jpg',
        description: 'Sweet and juicy cherry tomatoes'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingCartItem = cart.find(item => item.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    calculateTotal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    calculateTotal();
}

function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            calculateTotal();
        }
    }
}

function calculateTotal() {
    const cartTotal = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('flex', 'items-center', 'justify-between', 'border-b', 'pb-4');
        cartItemElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div>
                    <h4 class="font-semibold text-[#0F7173]">${item.name}</h4>
                    <p class="text-gray-600">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="bg-gray-200 text-gray-700 px-2 py-1 rounded">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="bg-gray-200 text-gray-700 px-2 py-1 rounded">+</button>
                <button onclick="removeFromCart(${item.id})" class="text-[#FF6B6B] hover:text-red-600">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    updateCartCount();
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    if (productsContainer) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'text-center', 'hover:shadow-xl', 'transition');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 w-48 h-48 object-cover rounded">
                <h3 class="font-semibold text-lg text-[#0F7173]">${product.name}</h3>
                <p class="text-gray-600 mb-4">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="bg-[#0F7173] text-white px-4 py-2 rounded-full hover:bg-[#0A4F51] transition">
                    Add to Cart
                </button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
        const matchesPrice = priceFilter === 'All' || 
            (priceFilter === '0-5' && product.price <= 5) ||
            (priceFilter === '5-10' && product.price > 5 && product.price <= 10) ||
            (priceFilter === '10+' && product.price > 10);
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);

        return matchesCategory && matchesPrice && matchesSearch;
    });

    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('products');
    if (productsContainer) {
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'text-center', 'hover:shadow-xl', 'transition');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 w-48 h-48 object-cover rounded">
                <h3 class="font-semibold text-lg text-[#0F7173]">${product.name}</h3>
                <p class="text-gray-600 mb-4">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="bg-[#0F7173] text-white px-4 py-2 rounded-full hover:bg-[#0A4F51] transition">
                    Add to Cart
                </button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

function openCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('hidden');
    cartModal.classList.add('flex');
    renderCartItems();
    calculateTotal();
}

function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.add('hidden');
    cartModal.classList.remove('flex');
}

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');

    if (cartBtn) cartBtn.addEventListener('click', openCartModal);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartModal);

    renderProducts();
    updateCartCount();

    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');

    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (searchInput) searchInput.addEventListener('input', filterProducts);
});

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCartModal = openCartModal;
window.closeCartModal = closeCartModal;