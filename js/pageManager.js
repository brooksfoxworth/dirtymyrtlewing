/**
 * Page Management Module
 * Handles page loading, content rendering, and page-specific functionality
 */
class PageManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.mainContent = document.getElementById('main-content');
        this.dynamicHeaderContent = document.getElementById('dynamic-header-content');
    }

    /**
     * Load and render a specific page
     */
    loadPage(page) {
        // Clear previous content
        this.mainContent.innerHTML = '';
        this.dynamicHeaderContent.innerHTML = '';

        // Render header with logos
        this.renderHeader(page);

        // Get page content
        const content = this.getPageContent(page);
        
        // Render content
        this.mainContent.innerHTML = content;

        // Setup page-specific functionality
        this.setupPageFunctionality(page);
        
        // Initialize Swiper after content is loaded
        setTimeout(() => {
            this.initializeSwipers();
        }, 100);
    }

    /**
     * Render the header with the Dirty Myrtle Wing Company logo and contact info
     */
    renderHeader() {
        const headerHTML = `
            <div class="flex flex-col items-center justify-center py-3 bg-gradient-to-b from-red-700 to-red-800 shadow-md">
                <div class="flex flex-col items-center">
                    <img src="./assets/images/dirtymyrtlewinglogo.png" 
                         alt="Dirty Myrtle Wing Company" 
                         class="h-16 md:h-20 object-contain">
                    <div class="flex items-center mt-2 space-x-4">
                        <a href="tel:843-282-9294" class="text-white text-sm md:text-base font-medium hover:text-yellow-300 transition-colors flex items-center">
                            <svg class="w-4 h-4 md:w-5 md:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            843-282-9294
                        </a>
                        <span class="text-white/60 hidden md:inline">|</span>
                        <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('contact')" class="text-white text-sm md:text-base font-medium hover:text-yellow-300 transition-colors hidden md:flex items-center">
                            <svg class="w-4 h-4 md:w-5 md:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Find Us
                        </a>
                    </div>
                </div>
            </div>
        `;
        this.dynamicHeaderContent.innerHTML = headerHTML;
    }

    /**
     * Get content for a specific page
     */
    getPageContent(page) {
        if (page === 'menu') {
            return this.renderMenuPage();
        }
        
        return PageContent[page] || PageContent.home;
    }

    /**
     * Render the menu page with dynamic content
     */
    renderMenuPage() {
        const menuSections = ['Appetizers', 'Smash Burgers', 'Flatbreads', 'Kids Menu', 'Dirty Bowls', 'Other Grub', 'Wet Wings', 'Wing Options'];
        
        let menuHTML = `
            <div id="menu-content">
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">Our Menu</h1>
                    <p class="text-[var(--text-medium)]">Delicious food at Dirty Myrtle Wing Company</p>
                </div>
                
                <nav class="mb-8">
                    <div class="overflow-x-auto">
                        <div class="flex space-x-4 border-b border-[var(--border-color)] min-w-max px-4">
                            <a href="#Appetizers" class="px-3 py-2 border-b-2 border-b-[var(--primary-color)] text-[var(--text-dark)] font-bold whitespace-nowrap">Appetizers</a>
                            <a href="#Smash Burgers" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Burgers</a>
                            <a href="#Flatbreads" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Flatbreads</a>
                            <a href="#Dirty Bowls" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Bowls</a>
                            <a href="#Other Grub" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Other Grub</a>
                            <a href="#Wet Wings" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Wet Wings</a>
                            <a href="#Wing Options" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Wing Options</a>
                        </div>
                    </div>
                </nav>
        `;

        // Add each menu section
        menuSections.forEach(section => {
            const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);
            menuHTML += `
                <div id="${section}" class="mb-12">
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-6">${sectionTitle}</h2>
                    <div class="space-y-4">
                        ${MenuData[section].map(item => this.createMenuItemHTML(item)).join('')}
                    </div>
                </div>
            `;
        });

        menuHTML += '</div>';
        return menuHTML;
    }
    
    /**
     * Initialize Swiper instances after content is loaded
     */
    initializeSwipers() {
        console.log('Initializing Swipers...');
        console.log('Swiper available:', typeof Swiper !== 'undefined');
        
        if (typeof Swiper !== 'undefined') {
            // Game Day Favorites Swiper
            const gameDayElement = document.querySelector('.game-day-swiper');
            console.log('Game Day Swiper element found:', !!gameDayElement);
            
            if (gameDayElement) {
                const slides = gameDayElement.querySelectorAll('.swiper-slide');
                console.log('Game Day slides found:', slides.length);
                
                try {
                    const gameSwiper = new Swiper('.game-day-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.game-day-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Game Day Swiper initialized successfully!');
                            },
                            slideChange: function() {
                                console.log('Game Day slide changed to:', this.activeIndex);
                            }
                        }
                    });
                    console.log('Game Day Swiper instance:', gameSwiper);
                } catch (error) {
                    console.error('Error initializing Game Day Swiper:', error);
                }
            }

            // Fans Say Swiper
            const fansElement = document.querySelector('.fans-say-swiper');
            console.log('Fans Say Swiper element found:', !!fansElement);
            
            if (fansElement) {
                const slides = fansElement.querySelectorAll('.swiper-slide');
                console.log('Fans Say slides found:', slides.length);
                
                try {
                    const fansSwiper = new Swiper('.fans-say-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.fans-say-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Fans Say Swiper initialized successfully!');
                            }
                        }
                    });
                    console.log('Fans Say Swiper instance:', fansSwiper);
                } catch (error) {
                    console.error('Error initializing Fans Say Swiper:', error);
                }
            }
        } else {
            console.error('Swiper library not loaded!');
        }
    }

    /**
     * Create HTML for a menu item
     */
    createMenuItemHTML(item) {
        return `
            <div class="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-400">🍽️</span>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-[var(--text-dark)] mb-1">${item.name}</h3>
                    <p class="text-[var(--text-medium)] text-sm mb-2">${item.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-[var(--primary-color)]">$${item.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                data-item-id="${item.id}" 
                                data-item-name="${item.name}" 
                                data-item-price="${item.price}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup menu page functionality
     */
    setupMenuPageFunctionality() {
        // Attach add-to-cart event listeners
        setTimeout(() => {
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.dataset.itemId;
                    const itemName = e.currentTarget.dataset.itemName;
                    const itemPrice = parseFloat(e.currentTarget.dataset.itemPrice);
                    this.cartManager.addItem(itemId, itemName, itemPrice);
                });
            });
        }, 100);
    }

    /**
     * Setup order page functionality
     */
    setupOrderPageFunctionality() {
        // Render cart items when order page loads
        setTimeout(() => {
            this.cartManager.renderCart();
        }, 100);
    }
}
