///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");
btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        if (link.classList.contains("btn-nav")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});

const sectionHeroEl = document.querySelector(".header");

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    }, {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);