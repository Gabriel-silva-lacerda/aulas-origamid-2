
function contagem() {
    let total = 0;
    return function incrimento() {
        total++;
        console.log(total);
    }
}


const ativarIncrmento = contagem();
ativarIncrmento()