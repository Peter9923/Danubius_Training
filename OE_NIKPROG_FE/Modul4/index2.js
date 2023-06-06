let ul = document.querySelector('ul')

ul.addEventListener('click', handleClick)


function handleClick(e) {
    const handlerElement = this;
    const sourceElement = e.target;
    const selector = 'li a'

    const closestElement = sourceElement.closest(selector)


    if(handlerElement.contains(closestElement)){
        const delegatedElement = closestElement;
        if(e.shiftKey){
            e.preventDefault()
            console.log(delegatedElement)
        }
    }
}