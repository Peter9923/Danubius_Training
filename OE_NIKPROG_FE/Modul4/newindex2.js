let ul = document.querySelector('ul')

ul.addEventListener('click', handleClick)


function handleClick(e) {
  
    console.log("function test log")

    console.log("this:", this)
    console.log("e.target:", e.target)

    const handlerElement = this;
    const sourceElement = e.target;
    const selector = ".my-class"

    let element = sourceElement
    while(element !== handlerElement && !element.matches(selector)){
        element = element.parentElement
    }

    if(element !== handlerElement) {
        const delegatedElement = element
        console.log(delegatedElement)
    }


    console.log("Ugyanaz máshogy:")
    const closestElement = sourceElement.closest(selector)
    if(handlerElement.contains(closestElement)) {
        const delegatedElement = closestElement
        console.log(delegatedElement)
    }
}