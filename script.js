const products = [
    {
        id: 1,
        name: 'Fresh Organic Apples',
        price: 4.99,
        category: 'Fruits',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Sweet and crisp organic apples, locally sourced',
        isNew: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'Ripe Bananas',
        price: 2.49,
        category: 'Fruits',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Perfectly ripe, sweet bananas',
        isNew: false,
        rating: 4.5
    },
    {
        id: 3,
        name: 'Organic Spinach',
        price: 3.79,
        category: 'Vegetables',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Fresh, nutrient-rich organic spinach',
        isNew: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Whole Milk',
        price: 5.29,
        category: 'Dairy',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Farm-fresh whole milk, locally sourced',
        isNew: false,
        rating: 4.6
    },
    {
        id: 5,
        name: 'Artisan Bread',
        price: 6.99,
        category: 'Bakery',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Freshly baked sourdough bread',
        isNew: true,
        rating: 4.9,
        onSale: true,
        salePrice: 5.99
    },
    {
        id: 6,
        name: 'Mixed Nuts',
        price: 7.49,
        category: 'Snacks',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Premium mixed nuts, roasted and salted',
        isNew: false,
        rating: 4.4
    },
    {
        id: 7,
        name: 'Orange Juice',
        price: 4.29,
        category: 'Drinks',
        image: '/placeholder.svg?height=300&width=300',
        description: '100% pure, freshly squeezed orange juice',
        isNew: false,
        rating: 4.7
    },
    {
        id: 8,
        name: 'Organic Bananas',
        price: 2.99,
        category: 'Fruits',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Ripe, sweet organic bananas',
        isNew: false,
        rating: 4.5,
        onSale: true,
        salePrice: 2.49
    },
    {
        id: 9,
        name: 'Cherry Tomatoes',
        price: 3.79,
        category: 'Vegetables',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Sweet and juicy cherry tomatoes',
        isNew: true,
        rating: 4.6
    },
    {
        id: 10,
        name: 'Greek Yogurt',
        price: 4.99,
        category: 'Dairy',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Creamy Greek yogurt, high in protein',
        isNew: false,
        rating: 4.8,
        onSale: true,
        salePrice: 3.99
    },
    {
        id: 11,
        name: 'Avocados',
        price: 6.49,
        category: 'Fruits',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Perfectly ripe Hass avocados',
        isNew: false,
        rating: 4.9
    },
    {
        id: 12,
        name: 'Chocolate Chip Cookies',
        price: 5.99,
        category: 'Bakery',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Freshly baked chocolate chip cookies',
        isNew: false,
        rating: 4.7
    },
    {
        id: 13,
        name: 'Sparkling Water',
        price: 3.49,
        category: 'Drinks',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Refreshing sparkling water with natural flavors',
        isNew: true,
        rating: 4.3
    },
    {
        id: 14,
        name: 'Organic Carrots',
        price: 2.99,
        category: 'Vegetables',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Fresh organic carrots, perfect for snacking or cooking',
        isNew: false,
        rating: 4.5,
        onSale: true,
        salePrice: 2.29
    },
    {
        id: 15,
        name: 'Cheddar Cheese',
        price: 7.99,
        category: 'Dairy',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Aged cheddar cheese with rich flavor',
        isNew: false,
        rating: 4.8
    },
    {
        id: 16,
        name: 'Potato Chips',
        price: 3.99,
        category: 'Snacks',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Crispy kettle-cooked potato chips',
        isNew: true,
        rating: 4.4,
        onSale: true,
        salePrice: 2.99
    },
    {
        id: 17,
        name: 'Whole Grain Bagels',
        price: 5.49,
        category: 'Bakery',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Freshly baked whole grain bagels, pack of 6',
        isNew: false,
        rating: 4.6
    },
    {
        id: 18,
        name: 'Organic Strawberries',
        price: 6.99,
        category: 'Fruits',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Sweet and juicy organic strawberries',
        isNew: true,
        rating: 4.9
    },
    {
        id: 19,
        name: 'Almond Milk',
        price: 4.79,
        category: 'Dairy',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Creamy unsweetened almond milk',
        isNew: false,
        rating: 4.5
    },
    {
        id: 20,
        name: 'Cold Brew Coffee',
        price: 5.29,
        category: 'Drinks',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Smooth and rich cold brew coffee',
        isNew: true,
        rating: 4.7,
        onSale: true,
        salePrice: 4.49
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

    // Show added to cart notification
    showNotification(`${product.name} added to cart!`);
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
    const total = cart.reduce((sum, item) => {
        const price = item.salePrice || item.price;
        return sum + (price * item.quantity);
    }, 0);
    cartTotal.textContent = total.toFixed(2);
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        if (emptyCartMessage) {
            emptyCartMessage.classList.remove('hidden');
        }
        return;
    }

    if (emptyCartMessage) {
        emptyCartMessage.classList.add('hidden');
    }

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('flex', 'items-center', 'justify-between', 'border-b', 'pb-4', 'mb-4');
        
        const price = item.salePrice || item.price;
        const itemTotal = (price * item.quantity).toFixed(2);
        
        cartItemElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div>
                    <h4 class="font-semibold text-[#0F7173]">${item.name}</h4>
                    <p class="text-gray-600">$${price.toFixed(2)} ${item.salePrice ? `<span class="line-through text-gray-400 text-xs">$${item.price.toFixed(2)}</span>` : ''}</p>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex items-center border rounded-md">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="px-3 py-1 text-gray-700 hover:bg-gray-100">-</button>
                    <span class="px-3 py-1">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="px-3 py-1 text-gray-700 hover:bg-gray-100">+</button>
                </div>
                <span class="font-medium">$${itemTotal}</span>
                <button onclick="removeFromCart(${item.id})" class="text-[#FF6B6B] hover:text-red-600 ml-2">
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
            productElement.classList.add('product-card', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'transition-all', 'duration-300');
            
            const displayPrice = product.onSale 
                ? `<p class="text-[#FF6B6B] font-medium">$${product.salePrice.toFixed(2)} <span class="line-through text-gray-400 text-sm">$${product.price.toFixed(2)}</span></p>` 
                : `<p class="text-gray-700 font-medium">$${product.price.toFixed(2)}</p>`;
            
            const badge = product.isNew 
                ? `<span class="badge badge-new">NEW</span>` 
                : (product.onSale ? `<span class="badge badge-sale">SALE</span>` : '');
            
            // Generate star rating
            let stars = '';
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    stars += '<i class="fas fa-star text-yellow-400"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
                } else {
                    stars += '<i class="far fa-star text-yellow-400"></i>';
                }
            }
            
            productElement.innerHTML = `
                <div class="relative">
                    ${badge}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="text-[#0F7173] hover:text-[#FF6B6B]">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-gray-800">${product.name}</h3>
                    </div>
                    <div class="flex items-center mb-2 text-sm">
                        ${stars}
                        <span class="text-gray-500 ml-1">(${(product.rating * 10).toFixed(0)})</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                    <div class="flex justify-between items-center">
                        ${displayPrice}
                        <button onclick="addToCart(${product.id})" class="bg-[#0F7173] text-white px-3 py-1 rounded-md hover:bg-[#0A4F51] transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter') || document.getElementById('category-filter-mobile');
    const priceFilter = document.getElementById('price-filter') || document.getElementById('price-filter-mobile');
    const searchInput = document.getElementById('search-input') || document.getElementById('search-input-mobile') || document.getElementById('hero-search');

    let categoryValue = 'All';
    let priceValue = 'All';
    let searchQuery = '';

    if (categoryFilter) categoryValue = categoryFilter.value;
    if (priceFilter) priceValue = priceFilter.value;
    if (searchInput && searchInput.value) searchQuery = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesCategory = categoryValue === 'All' || product.category === categoryValue;
        const matchesPrice = priceValue === 'All' || 
            (priceValue === '0-5' && product.price <= 5) ||
            (priceValue === '5-10' && product.price > 5 && product.price <= 10) ||
            (priceValue === '10+' && product.price > 10);
        const matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery) || 
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery);

        return matchesCategory && matchesPrice && matchesSearch;
    });

    renderFilteredProducts(filteredProducts);

    // Update product count
    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = filteredProducts.length;
    }
}

function renderFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('products');
    if (productsContainer) {
        productsContainer.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-medium text-gray-700">No products found</h3>
                    <p class="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'transition-all', 'duration-300');
            
            const displayPrice = product.onSale 
                ? `<p class="text-[#FF6B6B] font-medium">$${product.salePrice.toFixed(2)} <span class="line-through text-gray-400 text-sm">$${product.price.toFixed(2)}</span></p>` 
                : `<p class="text-gray-700 font-medium">$${product.price.toFixed(2)}</p>`;
            
            const badge = product.isNew 
                ? `<span class="badge badge-new">NEW</span>` 
                : (product.onSale ? `<span class="badge badge-sale">SALE</span>` : '');
            
            // Generate star rating
            let stars = '';
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    stars += '<i class="fas fa-star text-yellow-400"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
                } else {
                    stars += '<i class="far fa-star text-yellow-400"></i>';
                }
            }
            
            productElement.innerHTML = `
                <div class="relative">
                    ${badge}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="text-[#0F7173] hover:text-[#FF6B6B]">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-gray-800">${product.name}</h3>
                    </div>
                    <div class="flex items-center mb-2 text-sm">
                        ${stars}
                        <span class="text-gray-500 ml-1">(${(product.rating * 10).toFixed(0)})</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                    <div class="flex justify-between items-center">
                        ${displayPrice}
                        <button onclick="addToCart(${product.id})" class="bg-[#0F7173] text-white px-3 py-1 rounded-md hover:bg-[#0A4F51] transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('fixed', 'bottom-4', 'right-4', 'bg-[#0F7173]', 'text-white', 'px-4', 'py-2', 'rounded-md', 'shadow-lg', 'z-50', 'animate-fade-in-up');
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
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
    const heroSearch = document.getElementById('hero-search');
    const mobileCategoryFilter = document.getElementById('category-filter-mobile');
    const mobilePriceFilter = document.getElementById('price-filter-mobile');
    const mobileSearchInput = document.getElementById('search-input-mobile');

    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (heroSearch) heroSearch.addEventListener('input', filterProducts);
    if (mobileCategoryFilter) mobileCategoryFilter.addEventListener('change', filterProducts);
    if (mobilePriceFilter) mobilePriceFilter.addEventListener('change', filterProducts);
    if (mobileSearchInput) mobileSearchInput.addEventListener('input', filterProducts);

    // Filter pills functionality
    const filterPills = document.querySelectorAll('.filter-pill');
    if (filterPills.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const category = pill.textContent.trim();
                if (categoryFilter) {
                    categoryFilter.value = category === 'All' ? 'All' : category;
                    filterProducts();
                }
                
                // Update active state
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
            });
        });
    }
});

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCartModal = openCartModal;
window.closeCartModal = closeCartModal;
