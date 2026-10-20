// Плавное появление элементов при прокрутке

const elements = document.querySelectorAll(
    "figure, table, h2, h3, ol, main > ul"
);

const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach(function(element) {
    element.classList.add("hidden");
    observer.observe(element);
});



const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});