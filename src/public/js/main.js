const observerImg = document.querySelector(".img-observer");

const uploadImage=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            observerImg.classList.toggle("img-observer_toggle");
        }
    });
}

const observer= new IntersectionObserver(uploadImage,{
    root: null,
    rootMargin: "0px",
    threshold: 0.3
});

observer.observe(observerImg);


document.getElementById("fb").addEventListener("click",()=>{
    location.href="https://www.facebook.com/profile.php?id=100086622981551";
});
document.getElementById("ig").addEventListener("click",()=>{
    location.href="https://instagram.com/cosnapusenterprise?igshid=YmMyMTA2M2Y=";
});