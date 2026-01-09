// Fade & slide animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// CSS animation classes
const style = document.createElement("style");
style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
}
.show {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);

// Video autoplay fallback
const video = document.querySelector(".full-video");
if (video) {
    video.play().catch(() => {
        console.log("Autoplay blocked");
    });
}
