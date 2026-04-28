const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

hamburger.onclick = () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
};

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});
overlay.onclick = () =>{
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

const items = document.querySelectorAll(".menu-left li");
const contents = document.querySelectorAll(".content") ;

items.forEach(item => {
    item.addEventListener("click", () =>{

        items.forEach(i => i.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        item.classList.add("active");
        document.getElementById(item.dataset.target).classList.add("active");
    });
});


//slides
let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () =>{
    currentIndex++;
    if (currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});

setInterval(()=>{
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 5000);



// dropdown
document.querySelectorAll(".custom-select").forEach(select => {

    const btn = select.querySelector(".select-btn");
    const options = select.querySelector(".options");
    const text = select.querySelector("span");

    let selectedOption = null; // track current selection

    btn.addEventListener("click", () => {

        // close others
        document.querySelectorAll(".options").forEach(o => {
            if (o !== options) o.style.display = "none";
        });

        options.style.display = options.style.display === "block" ? "none" : "block";
    });

    options.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {

            // if same option clicked again → reset
            if (selectedOption === option) {
                selectedOption = null;
                text.textContent = btn.dataset.placeholder || "Select";
                option.classList.remove("selected");
            } else {
                // remove previous selected
                options.querySelectorAll("li").forEach(o => o.classList.remove("selected"));

                selectedOption = option;
                option.classList.add("selected");
                text.textContent = option.textContent;
            }

            options.style.display = "none";
        });
    });

});

//button
document.querySelector(".find-btn").addEventListener("click", function(){
    let selects = document.querySelectorAll(".select-btn span");

    let degree = selects[0].innerText;
    let study = selects[1].innerText;
    let location = selects[2].innerText;

    console.log(degree, study, location);

    alert(`Searching: \n${degree}\n${study}\n${location}`);
});

