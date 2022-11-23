let xlb; let ylb;
iniciox = 50
inicioy = 50
let ellaberinto = [["S","#","#","#"],[".",".",".","#"],["#",".","#","#"],["#",".",".","G"]]
function dibujarLaberinto(lbr){
    background(150);
    x = 50
    y = 50
    sx = 0
    sy = 0
    for(let i = 0; i < lbr.length; i++){
        for(let j = 0; j < lbr.length; j++){
            if(lbr[i][j] === "+" || lbr[i][j] === "X") lbr[i][j] = "." // genera punto
            if(lbr[i][j] === "#") fill('black') // pinta de negro los muros
            if(lbr[i][j] === "G") fill('pink') //pinta de rosa la llegada
            if(lbr[i][j] === "S") {
                ylb = i; xlb = j
                fill('red') //pinta de rojo la salida
            }
            if(lbr[i][j] === ".") fill(255)
            rect(x + sx,y + sy,50,50)
            sx += 55
        }
        sx = 0
        sy += 55
    }
    fill('red')
    rect(50 + xlb * 55,50 + ylb * 55,50,50)
}

function setup(){
    createCanvas(500,500);
    background(150);
    myButton = createButton('Crear')
    myButton.position(25,25)
    myButton.mouseClicked(()  => clicked = dibujarLaberinto(ellaberinto))
    colorear = createButton('Pintar')
    colorear.position(100,25)
    colorear.mouseClicked(()  => clicked  = resolverLaberint(ellaberinto,ylb,xlb))
    generar = createButton('Crear Nuevo Laberinto')
    generar.position(170,25)
    generar.mouseClicked(()  => clicked  = crearLaberinto (5,[],0,0))
 
}

function resolverLaberint(lab,y,x){
    if(x < 0 || y < 0 || x >= lab.length || y >= lab.length) return false
    if(lab[y][x] == "G") {
        fill('pink')
        rect(iniciox + x * 55, inicioy + y * 55, 50, 50)
        return true
    }
    if(lab[y][x] == "#" || lab[y][x] == "+" ) return false
    lab[y][x] = "+"
    fill('grey')
    rect(iniciox + x * 55, inicioy + y * 55, 50, 50)
    if(resolverLaberint(lab, y - 1, x) === true) return true
    if(resolverLaberint(lab, y, x + 1) === true) return true
    if(resolverLaberint(lab, y + 1, x) === true) return true
    if(resolverLaberint(lab, y , x - 1) === true) return true
    fill('yellow')
    rect(iniciox + x * 55, inicioy + y * 55, 50, 50)
    lab[y][x] = "X"
    return false
}