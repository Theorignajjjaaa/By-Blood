let menu = document.querySelector('.menuh')
let menudown = document.querySelector('.headerT')
let menuc = document.querySelector('.allhead')
let cssf = document.querySelector('#cssfile')
let csss = document.querySelector('#cssoff')

menu.onclick = ()  =>{
    menu.classList.toggle('Pactive');
    menudown.classList.toggle('Pactive');
}

csss.onclick = () =>{
    if (cssf.disabled === false) {
        cssf.disabled = true;
        document.getElementById("cssoff").innerHTML ="Turn On CSS";
        alert("Css is Turned Off")
    }
    else {
        cssf.disabled = false;
        document.getElementById("cssoff").innerHTML ="Turn Off CSS";
        alert("Css is Turned On")
    }
}
