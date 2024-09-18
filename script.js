// Optional: Add a script for hover on mobile
const wrappers = document.querySelectorAll('.image-wrapper');

wrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseover', () => {
        wrappers.forEach(w => w.classList.remove('expanded'));
        wrapper.classList.add('expanded');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger");
    const mobileNav = document.getElementById("mobileNav");

    // Toggle mobile menu
    burgerMenu.addEventListener("click", () => {
        mobileNav.classList.toggle("active");

        if (mobileNav.classList.contains("active")) {
            gsap.to(mobileNav, { duration: 0.5, x: 0 });
            gsap.to(".burger-menu .line:nth-child(1)", { duration: 0.3, rotation: 45, y: 8 });
            gsap.to(".burger-menu .line:nth-child(2)", { duration: 0.3, opacity: 0 });
            gsap.to(".burger-menu .line:nth-child(3)", { duration: 0.3, rotation: -45, y: -8 });
        } else {
            gsap.to(mobileNav, { duration: 0.5, x: "100%" });
            gsap.to(".burger-menu .line:nth-child(1)", { duration: 0.3, rotation: 0, y: 0 });
            gsap.to(".burger-menu .line:nth-child(2)", { duration: 0.3, opacity: 1 });
            gsap.to(".burger-menu .line:nth-child(3)", { duration: 0.3, rotation: 0, y: 0 });
        }
    });
});
