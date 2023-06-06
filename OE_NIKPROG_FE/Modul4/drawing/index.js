let space = document.querySelector('#space')

let shapes = [
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'parallelogram',
    'triangle-down',
    'triangle-up',
    'triangle-left',
    'triangle-right',
]

space.addEventListener('click', function (e) {
    let shape = document.createElement('div')

    let randomShapeIndex = Math.floor(Math.random() * shapes.length);

    shape.classList.add(shapes[randomShapeIndex])
    //shape.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    

    let x = e.clientX
    let y = e.clientY
    
    shape.style.position = 'fixed'
    shape.style.top = y+'px'
    shape.style.left = x+'px'

    space.appendChild(shape)
})