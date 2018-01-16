function random(S,E){
    switch(arguments.length){
        case 1: return document.write(parseInt(Math.random()*S+1));
        case 2: return document.write(parseInt(Math.random()*(E-S+1)+S));
        case 0: return document.write(0);
    }
}