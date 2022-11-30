ScrollReveal().reveal('.reveal', { duration: 1000, reset: true });
ScrollReveal({ reset: true });

ScrollReveal().reveal('.left-to-right', { 
    distance: '60px',
    origin: 'left'
});

ScrollReveal().reveal('.right-to-left', { 
    distance: '60px',
    origin: 'right'
});

ScrollReveal().reveal('.delay-ltr', { 
    distance: '60px',
    origin: 'left',
    duration: 1000,
    delay: 500
});

ScrollReveal().reveal('.mini-delay-ltr', { 
    distance: '60px',
    origin: 'left',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.delay-rtl', { 
    distance: '60px',
    origin: 'right',
    duration: 1000,
    delay: 500
});

ScrollReveal().reveal('.mini-delay-rtl', { 
    distance: '60px',
    origin: 'right',
    duration: 1000,
    delay: 100
});