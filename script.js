// ==============================
// MOBILE NAVBAR TOGGLE
// ==============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});





// ==============================
// STICKY HEADER SHADOW
// ==============================

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.1)";

    }


});





// ==============================
// COURSE SEARCH
// ==============================


const searchInput = document.getElementById("searchInput");

const courses = document.querySelectorAll(".course-card");


if(searchInput){


    searchInput.addEventListener("keyup",()=>{


        let value = searchInput.value.toLowerCase();


        courses.forEach(course=>{


            let text = course.innerText.toLowerCase();


            if(text.includes(value)){


                course.style.display="block";


            }

            else{


                course.style.display="none";


            }


        });


    });


}





// ==============================
// TESTIMONIAL SLIDER
// ==============================


const testimonials =
document.querySelectorAll(".testimonial-card");


const nextBtn =
document.getElementById("nextBtn");


const prevBtn =
document.getElementById("prevBtn");


let currentSlide = 0;



function showSlide(index){


    testimonials.forEach(card=>{

        card.style.display="none";

    });



    if(testimonials.length){

        testimonials[index].style.display="block";

    }


}



if(testimonials.length){


    showSlide(currentSlide);



    if(nextBtn){


        nextBtn.addEventListener("click",()=>{


            currentSlide++;


            if(currentSlide >= testimonials.length){

                currentSlide=0;

            }


            showSlide(currentSlide);


        });


    }




    if(prevBtn){


        prevBtn.addEventListener("click",()=>{


            currentSlide--;


            if(currentSlide < 0){

                currentSlide=testimonials.length-1;

            }


            showSlide(currentSlide);


        });


    }


}





// ==============================
// FAQ ACCORDION
// ==============================


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


    const question =
    item.querySelector("h3");


    const answer =
    item.querySelector("p");


    answer.style.display="none";



    question.addEventListener("click",()=>{


        if(answer.style.display==="block"){


            answer.style.display="none";


        }

        else{


            answer.style.display="block";


        }


    });


});





// ==============================
// NEWSLETTER VALIDATION
// ==============================


const newsletterForm =
document.getElementById("newsletterForm");



if(newsletterForm){


newsletterForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    const email =
    document.getElementById("email").value;



    if(email===""){


        alert("Please enter your email");


    }


    else{


        alert("Subscribed Successfully!");


        newsletterForm.reset();


    }


});


}





// ==============================
// SCROLL TO TOP
// ==============================


const topBtn =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){


        topBtn.style.display="block";


    }

    else{


        topBtn.style.display="none";


    }


});



if(topBtn){


topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}