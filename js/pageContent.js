/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Hero Section -->
            <div class="relative h-96 md:h-[600px] mb-8 rounded-xl mx-4 overflow-hidden shadow-2xl" style="animation: fadeInUp 0.8s ease-out;">
                <!-- Background with overlay -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-yellow-500/30 animate-pulse"></div>
                </div>
                
                <!-- Hero Content -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <img src="./assets/images/dirtymyrtlewinglogo.png" alt="Dirty Myrtle Wing Company" class="h-32 md:h-48 mb-6 drop-shadow-lg">
                    <p class="text-2xl md:text-3xl mb-8 max-w-2xl text-white/90 drop-shadow font-bold">Myrtle Beach's Hottest Wings & Coldest Drinks</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="bg-white text-red-600 px-8 py-4 rounded-xl font-bold btn-animated card-hover shadow-xl text-lg border-2 border-transparent hover:border-yellow-400 hover:shadow-2xl" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                            View Our Wings
                        </button>
                    </div>
                </div>
            </div>

            <!-- Signature Wings & Sauces -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Handcrafted Wings<br><span class="text-red-600">Made Fresh Daily</span></h2>
                            <p class="text-xl text-gray-700 mb-6">At Dirty Myrtle Wing Company, we take pride in our hand-breaded, never-frozen wings tossed in your choice of 12 signature sauces ranging from Sweet BBQ to our famous "Dirty Myrtle" hot sauce.</p>
                            <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                View Our Menu
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                                         alt="Delicious Wings at Dirty Myrtle Wing Company" 
                                         class="max-w-full max-h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wing Wednesday Special -->
            <div class="bg-gradient-to-br from-red-700 to-red-800 rounded-xl p-6 mx-4 mb-12 border-2 border-yellow-400 shadow-2xl relative overflow-visible" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="text-center w-full">
                    <span class="inline-block bg-yellow-400 text-red-900 font-bold px-6 py-1 rounded-full text-sm mb-3">WEEKLY SPECIAL</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">WING WEDNESDAY</h2>
                    <p class="text-xl text-yellow-200 font-medium mb-6">All You Can Eat Wings</p>
                    
                    <div class="bg-black/20 rounded-xl p-6 max-w-2xl mx-auto mb-6">
                        <div class="text-8xl mb-4">🍗</div>
                        <div class="text-4xl font-bold text-yellow-300 mb-2">$20</div>
                        <div class="text-lg text-yellow-100 mb-2">Every Wednesday • 5PM - 9PM</div>
                        <p class="text-yellow-100">Enjoy unlimited servings of our famous wings in all your favorite flavors. Dine-in only.</p>
                    </div>
                    
                    <p class="text-yellow-100 text-sm mt-4">Limited seating available. First come, first served.</p>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-red-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-red-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Fan Favorite Wings</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Our most popular wing flavors that keep our customers coming back for more</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1624726175516-1433f389af8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Dirty Myrtle Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Dirty Myrtle</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Our signature sauce - the perfect blend of heat and flavor that made us famous. Not for the faint of heart!</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1563371339-5c61f8bc6026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hot Honey Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Hot Honey</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">The perfect balance of sweet honey and spicy heat that will have you reaching for more. Irresistibly delicious!</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Garlic Parm Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Garlic Parm</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Creamy, garlicky, and loaded with parmesan flavor. These wings are a garlic lover's dream come true.</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View All Wing Flavors
                    </a>
                </div>
            </div>

            <!-- Wing Lovers Testimonials -->
            <div class="bg-yellow-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-yellow-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">What Wing Lovers Say</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Don't just take our word for it - hear from our wing-obsessed customers</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">MW</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Mike W.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Dirty Myrtle Hot wings are LEGENDARY! Perfectly crispy with just the right amount of heat. I've tried wings all over the country, and these are hands down the best."</p>
                              <div class="text-xs text-gray-500">Wing Connoisseur</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">JL</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Jen L.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Honey Gold BBQ wings are addictive! Sweet, smoky, and perfectly sauced. I drive 30 minutes just to get my fix. The family pack is always our go-to for game nights!"</p>
                              <div class="text-xs text-gray-500">Regular Since 2022</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">DR</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Dana R.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Caribbean Jerk wings are a flavor explosion! The perfect balance of sweet and spicy. I love that they're always crispy and never greasy. The best wings in Myrtle Beach, hands down!"</p>
                              <div class="text-xs text-gray-500">Self-Proclaimed Wing Expert</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Cart Items</h2>
                <div id="cart-items-list"></div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-bold text-[var(--text-dark)]">Total:</span>
                    <span id="cart-total" class="text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                </div>
                <button class="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `,

    about: `
                <div class="mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--primary-color)]">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-[var(--primary-color)] mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Our Story</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Dirty Myrtle Wing Company opened its doors with a simple vision: to create Myrtle Beach's ultimate wing experience. We combine great food, bold flavors, and an unbeatable atmosphere to bring wing lovers together. Our founders, passionate about perfecting the art of wing-making, wanted to create a place where every bite is a touchdown.
                        </p>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg">
                            Located in the heart of Myrtle Beach, we've become the go-to spot for sports fans, families, and anyone looking for great food and a fun atmosphere. Our state-of-the-art screens and sound system ensure you won't miss a moment of the action, no matter where you're seated.
                        </p>
                    </div>
                </div>

                <!-- Why Myrtle Beach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Choose Us?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            At Dirty Myrtle Wing Company, we're more than just a wing joint - we're a community hub where wing lovers come together to enjoy bold flavors and great company. Our unique atmosphere combines the excitement of game day with the comfort of your favorite local hangout, all while serving up the best wings in Myrtle Beach.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Game Day Experience</h3>
                                <p class="text-[var(--text-medium)] text-sm">Over 30 HD screens and a stadium-quality sound system</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-green-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Fan Favorite Menu</h3>
                                <p class="text-[var(--text-medium)] text-sm">Signature dishes and drinks that score big with our guests</p>
                            </div>
                        </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Mission</h2>
                        <p class="text-[var(--text-medium)] leading-relaxed">
                            To be the ultimate sports destination in Myrtle Beach, where every game feels like home field advantage. We're committed to delivering an unbeatable combination of great food, cold drinks, and the best game-day atmosphere on the Grand Strand.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Values</h2>
                        <ul class="text-[var(--text-medium)] space-y-2">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Best game-day atmosphere</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Premium sports viewing</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Fan-first service</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Community engagement</li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Commitment</h2>
                        <p class="text-[var(--primary-color)] font-semibold">"Where Every Game Feels Like Home"</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg text-center">
                            Whether you're here for the big game, a casual night out, or to enjoy our weekly specials, we're committed to making every visit memorable. Our team works tirelessly to ensure you have the best wings, the coldest drinks, and the most delicious sauces in Myrtle Beach. At Dirty Myrtle Wing Company, you're not just a customer - you're part of our wing family.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-282-9294" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">843-282-9294</a>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('Troy.dirtymyrtlewingcompany@gmail.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-yellow-600 transition-colors"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">2297 South Kings Hwy, Myrtle Beach, SC 29577, United States</span>
                        </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 10:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Tuesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 10:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Wednesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 12:00 AM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 12:00 AM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Friday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 12:00 AM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 12:00 AM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 10:00 PM</span>
                        </div>
                </div>
            </div>
        </div>
    `,

};
