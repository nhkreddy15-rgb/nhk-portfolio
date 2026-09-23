const homeButton = document.getElementById("homeButton");
const awayButton = document.getElementById("awayButton");

// ==============================
// HOME / AWAY SWITCH
// ==============================

homeButton.addEventListener("click", () => {
    document.body.classList.remove("away");

    homeButton.classList.add("active");
    awayButton.classList.remove("active");
});

awayButton.addEventListener("click", () => {
    document.body.classList.add("away");

    awayButton.classList.add("active");
    homeButton.classList.remove("active");
});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".project, .about-text, .player-profile, .build-flow, .final h2, .final p, .final-links"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ==============================
// HERO ENTRANCE
// ==============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// ==============================
// JERSEY FLOAT
// ==============================

const jersey = document.querySelector(".jersey");

if (jersey) {
    let time = 0;

    function floatJersey() {
        time += 0.015;

        const floatAmount = Math.sin(time) * 7;

        if (!jersey.matches(":hover")) {
            jersey.style.translate = `0 ${floatAmount}px`;
        }

        requestAnimationFrame(floatJersey);
    }

    floatJersey();
}