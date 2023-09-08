
function burger_click() {
    const nav = document.querySelector(".nav-items");
    const line1 = document.querySelector(".line-1");
    const line2 = document.querySelector(".line-2");
    nav.classList.toggle("nav-active");
    line1.classList.toggle("active");
    line2.classList.toggle("active");
}


// ********** NUMBER ANIME *******************



function number_anime() {
    const clients = document.getElementById("clients").innerText;
    let clientdata = clients.substring(0, 2);

    const years = document.getElementById("years").innerText;
    let yearsdata = years.substring(0, 2);
    var i = 0;
    var j = 0;
    var cli = setInterval(scene1, 100);
    var yrs = setInterval(scene2, 300);

    document.getElementById("clients").innerHTML = 0 + "+";
    document.getElementById("years").innerHTML = 0 + "+";
    function scene1() {
        if (i > 25) {

            clearInterval(cli);
            i = 0;

        } else {
            document.getElementById("clients").innerHTML = i + "+";

            i++;
            console.log(clientdata);
        }
    }

    function scene2() {
        if (j > 6) {

            clearInterval(yrs);
            j = 0;

        } else {
            document.getElementById("years").innerText = "0" + j + "+";
            j++;

        }
    }

}

// ****************** SCROLL ANIMATION **********************
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);

        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();

});

// ****************** SCROLL ANIMATION END **********************

