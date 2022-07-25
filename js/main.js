function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
    });
  }
  toggleMenu();
function changeColorOnScroll(){
    const navbar = document.querySelector('.nav-fixed'); 
    this.onscroll = () => {
        if (this.scrollY > 300) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };
}
changeColorOnScroll()


let pathArray = window.location.pathname.split("/");
if( pathArray.includes('contact.html')){
let myForm = document.getElementById("myForm");


myForm.addEventListener("submit", validForm)


function validForm(e){
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let telephone = document.getElementById("number");
let email = document.getElementById("email");

let myRegex = (/^[a-zA-Z]+$/);
let myRegexNumb = (/^[.0-9 ]+$/);
let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nom.value === "") {
        errorName.innerHTML = "Saisir votre Prenom svp";
        errorName.style.color = " red";
        prenom.style.borderColor = " red";
        e.preventDefault();
    }
    else if (!myRegex.test(nom.value)) {
        errorName.innerHTML = "Saisir un prenom valide!!";
        errorName.style.color = "red";
        prenom.style.borderColor = " red";
        e.preventDefault();
    }
    else {
        errorName.innerHTML = "Merci!!";
        errorName.style.color = "green";
    }
    if (prenom.value === "") {
        errorFirstName.innerHTML = "Saisir votre Nom svp";
        errorFirstName.style.color = " red";
        nom.style.borderColor = " red";
        e.preventDefault();
    }
    else if (!myRegex.test(prenom.value)) {
        errorFirstName.innerHTML = "Saisir un nom valide!!";
        errorFirstName.style.color = "red";
        nom.style.borderColor = " red";
        e.preventDefault();
    }
    else {
        errorFirstName.innerHTML = "Merci !!";
        errorFirstName.style.color = "green";
    }
    if (telephone.value === "") {
        errorTel.innerHTML = "Saisie ton numero de tel";
        errorTel.style.color = " red";
        telephone.style.borderColor = " red";
        e.preventDefault();
    }
    else if (!myRegexNumb.test(telephone.value)) {
        errorTel.innerHTML = "Saisir un numero valide Svp!!";
        errorTel.style.color = "red";
        telephone.style.borderColor = " red";
        e.preventDefault();
    }
    else {
        errorTel.innerHTML = "Merci !!";
        errorTel.style.color = "green";
    }
    if (email.value === "") {
        errorEmail.innerHTML = "Saisie ton e-mail";
        errorEmail.style.color = " red";
        email.style.borderColor = " red";
        e.preventDefault();
    }
    else if (!myRegexMail.test(email.value)) {
        errorEmail.innerHTML = "e-mail non valide";
        errorEmail.style.color = "red";
        email.style.borderColor = " red";
        e.preventDefault();
    }
    else {
        errorEmail.innerHTML = "Sayer nous avons toutes tes données Gros pigeon!!";
        errorEmail.style.color = "green";
    }
}

}




