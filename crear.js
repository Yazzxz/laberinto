function crearLaberinto (l, lb,x,y){
    if(lb.length < l){
        lb.push("#".repeat(l).split(''))
        if((lb.length === l)){
            let yg = l - 1; let xg = Math.floor(Math.random() * l)
            x = Math.floor(Math.random() * l)
            y = Math.floor(Math.random() * 2)
            if (y === 1) y = l - 1, yg = 0
            lb[yg][xg] = "G"; lb[y][x] = "S";
            a=x;b=y
            console.log(lb)
            return crearLaberinto(l,lb,x,y)
        }
        return crearLaberinto(l,lb)
    }
    if(x > lb.length - 1 || x < 0 || y > lb.length - 1 || y < 0) return false
    if(lb[y][x] === "G"){
        //console.log("camino hecho")
        lb[y][x] = "G"
        lb[b][a] = "S"
        //console.log(lb)
        ellaberinto = lb
        return lb, true;
    }
    lb[y][x] = "."
    save = Math.floor(Math.random() * 4)
    if(save == 0 && crearLaberinto(l, lb, x,y - 1) == true) return true
    if(save == 1 && crearLaberinto(l, lb, x + 1,y) == true) return true
    if(save == 2 && crearLaberinto(l, lb, x, y + 1)== true) return true
    if(save == 3 && crearLaberinto (l, lb,x - 1,y) == true) return true
    return crearLaberinto(l, lb,x,y)
}
//crearLaberinto (6,[],0,0)