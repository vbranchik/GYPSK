const toastmes = document.querySelector(".toastmes")
const mesbutton = document.querySelector(".mesbutton")

// const buttons = document.querySelectorAll(".buttons")
const fisrtbut = document.querySelectorAll(".imgleft")
const secondbut = document.querySelectorAll(".imgright")


fisrtbut.forEach((element) => {
    element.onmouseenter=()=>{
        element.src = "../img/arrownewsleftactive.png";
    }
    element.onmouseleave=()=>{
        element.src = "../img/arrownewsleftnone.png";
    }
});

secondbut.forEach((element) => {
    element.onmouseenter=()=>{
        element.src = "../img/arrownewsrightactive.png";
    }
    element.onmouseleave=()=>{
        element.src = "../img/arrownewsrightnone.png";
    }
});



mesbutton.onclick=()=>{
    toastmes.style.display = "none"
}









// const language = document.querySelectorAll(".language")
// const allLang = ['ru', 'en', 'fr'];

// language.forEach((item)=>{
//     item.onclick=(butlan)=>{

//         ruclick = document.getElementById('ru');
//         enclick = document.getElementById('en');
//         frclick = document.getElementById('fr');
//         if(enclick.onclick = true){
//             enclick.classList.add("selected");
//             ruclick.classList.remove("selected");
//             frclick.classList.remove("selected");
//         }
//         else if(frclick.onclick = true){
//             frclick.classList.add("selected");
//             ruclick.classList.remove("selected");
//             enclick.classList.remove("selected");
//         }
//         else if(ruclick.onclick = true){
//             ruclick.classList.add("selected");
//             enclick.classList.remove("selected");
//             frclick.classList.remove("selected");
//         }

//         let textlan = butlan.srcElement.id;

//         location.href = window.location.pathname + '#' + textlan;
    
//         let hash = window.location.hash;
//         hash = hash.substr(1);
//         console.log(hash);
//         // if(!allLang.includes(hash)){
//         //     location.href = window.location.pathname + '#ru';
//         //     location.reload();
//         // }
//         // language.value = hash;
//         document.querySelector('title').innerHTML = jsoninfo['first_trans'][hash];
//         for (let key in jsoninfo){
//             let jsonlan = document.querySelectorAll('.lng-' + key)
//             jsonlan.forEach((alltegs)=>{
//                 alltegs.innerHTML = jsoninfo[key][hash];
//             })
//         }
//     }
// })