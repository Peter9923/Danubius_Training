let sendButton = document.querySelector("#btn-send")
sendButton.addEventListener('click', processName)




function processName(){
    let inputName = document.querySelector("#input-name").value
    console.log("Hello: " + inputName)

    let name = document.createElement("p")
    name.innerText = inputName

    document.querySelector("body").appendChild(name)

    let colors = ["red", "blue", "green", "purple"]
    let rnd = Math.round(Math.random() *colors.length)

    name.style = "font-size: 25px; border: 5px solid " + colors[rnd] + "; padding: 5px; margin: 5px"

    let colors2 = ["white", "pink", "orange", "yellow"]
    let rnd2 = Math.round(Math.random() *colors2.length)

    document.body.style.backgroundColor = colors2[rnd2]
}


function helloDiv() {
    console.log("hello")
    document.querySelector("#my-div").classList.toggle("my-custom-class")
}