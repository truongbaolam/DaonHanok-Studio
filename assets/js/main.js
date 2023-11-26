const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#mainNav li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
//  ------------------------owl-carousel ----------------------------
$(".owl-carousel-info").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        1000: {
            items: 1,
        },
        500: {
            items: 1,
        },
        400: {
            items: 1,
        },
        280: {
            items: 1,
        },
    },
});
$(".owl-carousel-gallery").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight: true,
    items: 4,
    responsive: {
        1400: {
            items: 3,
        },
        768: {
            items: 2,
        },
        400: {
            items: 1,
        },
        280: {
            items: 1,
        },
    },
});
//  ------------------------owl-carousel ----------------------------
window.addEventListener("load", function () {
    scpopLoad(".myLightBox");
    scpopLoad(".myLightBox-1");
    scpopLoad(".myLightBox-2");
});
