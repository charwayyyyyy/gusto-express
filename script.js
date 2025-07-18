        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('ordersChart').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Orders',
                        data: [85, 112, 94, 126, 142, 178, 195],
                        borderColor: '#ff6b6b',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#ff6b6b',
                        pointRadius: 5,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    }
                }
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add scroll parallax effect
            window.addEventListener('scroll', function() {
                const scrolled = window.scrollY;
                const parallaxElements = document.querySelectorAll('.hero');
                
                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    element.style.backgroundPositionY = -(scrolled * speed) + 'px';
                });
            });
        });
        // Initialize the orders chart and new features
        document.addEventListener('DOMContentLoaded', function() {
            // Chart.js orders chart
            const ctx = document.getElementById('ordersChart').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Orders',
                        data: [85, 112, 94, 126, 142, 178, 195],
                        borderColor: '#ff6b6b',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#ff6b6b',
                        pointRadius: 5,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    }
                }
            });

            // Smooth scrolling for navigation and footer links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href.length > 1 && document.querySelector(href)) {
                        e.preventDefault();
                        document.querySelector(href).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Parallax effect for hero
            window.addEventListener('scroll', function() {
                const scrolled = window.scrollY;
                const parallaxElements = document.querySelectorAll('.hero');
                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    element.style.backgroundPositionY = -(scrolled * speed) + 'px';
                });
            });

            // Animated Counters
            function animateCounter(counter) {
                const target = +counter.getAttribute('data-target');
                const duration = 1800;
                const start = 0;
                let startTime = null;
                function updateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const value = Math.floor(progress * (target - start) + start);
                    counter.textContent = value.toLocaleString();
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                        if (target >= 10000) counter.textContent = target.toLocaleString() + '+';
                    }
                }
                requestAnimationFrame(updateCounter);
            }
            const counters = document.querySelectorAll('.counter-value');
            let countersStarted = false;
            function startCountersIfVisible() {
                if (countersStarted) return;
                const section = document.querySelector('.counters');
                if (!section) return;
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    counters.forEach(animateCounter);
                    countersStarted = true;
                }
            }
            window.addEventListener('scroll', startCountersIfVisible);
            startCountersIfVisible();

            // Testimonials Carousel
            const slides = document.querySelectorAll('.testimonial-slide');
            let currentSlide = 0;
            function showSlide(idx) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === idx);
                });
            }
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }
            const nextBtn = document.querySelector('.carousel-btn.next');
            const prevBtn = document.querySelector('.carousel-btn.prev');
            if (nextBtn && prevBtn) {
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);
                setInterval(nextSlide, 6000);
            }
            showSlide(currentSlide);

            // Interactive Order Form
            const orderForm = document.querySelector('.order-form');
            if (orderForm) {
                orderForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const successMsg = orderForm.querySelector('.order-success');
                    orderForm.reset();
                    successMsg.style.display = 'block';
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 3000);
                });
            }

            // Micro-interactions: add ripple effect to cta-button
            document.querySelectorAll('.cta-button').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    ripple.style.left = (e.offsetX || e.touches?.[0]?.clientX || 0) + 'px';
                    ripple.style.top = (e.offsetY || e.touches?.[0]?.clientY || 0) + 'px';
                    this.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                });
            });
        });