/*function resolverLaberinto(lab,y,x){
    //console.log(lab, y , x)
    if(x < 0 || y < 0 || x >= lab.length || y >= lab.length) return false
    if(lab[y][x] == "G") {
        console.log(lab)
        return true
    }
    if(lab[y][x] == "#" || lab[y][x] == "+" ) return false
    lab[y][x] = "+"
    if(resolverLaberinto(lab, y - 1, x) === true) return true
    if(resolverLaberinto(lab, y, x + 1) === true) return true
    if(resolverLaberinto(lab, y + 1, x) === true) return true
    if(resolverLaberinto(lab, y , x - 1) === true) return true
    lab[y][x] = "X"
    return false
}

*/


const laberinto = [["S","#","#","#"],
                  [".",".",".","#"],
                  ["#",".","#","#"],
                  ["#",".",".","G"]]

//console.log(resolverLaberinto(laberinto,0,0))

//if(laberinto[3][3] === "G") console.log("Si")