function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
    return square
}

console.log(createSquare())

let grid = document.getElementById('grid')


for (i =0; i < 100 ; i++) {

    let square = createSquare()
    square.innerText = i + 1

    square.addEventListener('click', function(){
        this.classList.toggle('click-color')
        
        
    })

    grid.append(square)
    
    
}