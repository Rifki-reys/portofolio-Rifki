const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.innerHTML = "☀️";
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toggle.innerHTML = "☀️";
    }else{
        localStorage.setItem("theme","light");
        toggle.innerHTML = "🌙";
    }

});
const words = [
    "Mahasiswa Sistem Informasi",
    "Web Developer",
    "Cloud Enthusiast",
    "UI/UX Enthusiast"
];

let index = 0;
let char = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    if(!typing) return;

    const current = words[index];

    if(!deleting){

        typing.textContent = current.substring(0,char++);

        if(char > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,char--);

        if(char < 0){

            deleting = false;

            index++;

            if(index >= words.length){

                index = 0;

            }

        }

    }

    setTimeout(type,deleting ? 50 : 100);

}

type();

 