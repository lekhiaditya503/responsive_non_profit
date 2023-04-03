const toggle = document.getElementById("toggle");
const cls = document.querySelector(".close");


toggle.addEventListener('click', () =>{
    document.body.classList.toggle('show-nav');
})

cls.addEventListener('click', () =>{
    document.body.classList.toggle('show-nav');
    console.log("Hello");
})

