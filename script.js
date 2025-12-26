document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIC CHO MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- LOGIC CHO LANGUAGE SWITCHER ---
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        const langButton = document.getElementById('lang-button');
        const langMenu = document.getElementById('lang-menu');

        // Gán sự kiện click cho nút dropdown
        if (langButton && langMenu) {
            langButton.addEventListener('click', function(event) {
                // Ngăn sự kiện click lan ra ngoài và tự đóng menu ngay lập tức
                event.stopPropagation(); 
                langMenu.classList.toggle('hidden');
            });
        }
    }
});

// --- LOGIC ĐÓNG MENU KHI CLICK RA NGOÀI ---
document.addEventListener('click', function(event) {
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        const langMenu = document.getElementById('lang-menu');
        // Nếu có menu ngôn ngữ, nó đang mở, và cú click không nằm trong khu vực của nó
        if (langMenu && !langMenu.classList.contains('hidden') && !langSwitcher.contains(event.target)) {
            langMenu.classList.add('hidden');
        }
    }

    // Menu mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.classList.contains('hidden') && !mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    }
});