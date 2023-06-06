const lis = document.querySelectorAll("li")
console.log(lis)

let lis2 = document.getElementsByTagName("li")
console.log(lis2)

let gyumolcsok = document.querySelector(".gyumolcsok")
let zoldsegek = document.getElementsByClassName("zoldsegek")

console.log(gyumolcsok)
console.log(zoldsegek)


gyumolcsok.innerHTML += "<li>Dinnye from JS</li>"
gyumolcsok.innerHTML += "<li>Barack from JS</li>"