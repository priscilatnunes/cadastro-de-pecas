let listadepecas = [
    {nome: "Retentor",peso:100},
    {nome: "borracha",peso:50},
    {nome: "ventosa",peso:80},
    {nome: "bateria",peso:10000},
    {nome: "WD",peso:100}
]

let quantidadeitens = listadepecas.length;

if(quantidadeitens > 10){
    console.log("limite de 10 peças excedido")
}else{

    for (let contador = 0 ;contador < quantidadeitens; contador++){
        let peca = listadepecas[contador].nome;
        let peso = listadepecas[contador].peso;
        //console.log(`peça: ${peca} / peso: ${peso}g`)

        if(peca.length < 3){
            console.log(`A peça ${peca} Não pode ser cadastrada, possui menos de 3 caracteres!`)
        }else
        if(peso < 100){
            console.log(`A peça ${peca} com peso de ${peso}g, Não pode ser cadastrada, possui o peso insuficiente!`)
            
        }
    }
}
