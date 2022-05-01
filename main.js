
const pedido1 = {
    estoque: 10,
    produto: 'BIFE A MILANESA',
    valor: parseFloat(21.99)

}

const pedido2 = {
    estoque: 10,
    produto: 'BIFE DE ALCATRA A PARMEGIANA',
    valor: parseFloat(25.99)
}

const pedido3 = {
    estoque: 10,
    produto: 'FILÉ DE FRANGO A PARMEGIANA',
    valor: parseFloat(25.99)
}
const pedido4 = {
    estoque: 10,
    produto: 'FILÉ DE FRANGO A MILANESA',
    valor: parseFloat(21.99)
}

const pedido5 = {
    estoque: 10,
    produto: 'BIFE ACEBOLADO GRELHADO',
    valor: parseFloat(19.99)
}
const pedido6 = {
    estoque: 10,
    produto: 'FILÉ DE PEIXE A MILANESA',
    valor: parseFloat(19.99)
}
const pedido7 = {
    estoque: 10,
    produto: 'BISTECA SUINA GRELHADO',
    valor: parseFloat(17.99)
}
const pedido8 = {
    estoque: 10,
    produto: 'FILÉ DE FRANGO GRELHADO',
    valor: parseFloat(17.99)
}
const pedido9 = {
    estoque: 10,
    produto: 'PORÇÃO DE BATATA',
    valor: parseFloat(19.99)
}
const pedido10 = {
    estoque: 10,
    produto: 'PORÇÃO DE CALABRESA',
    valor: parseFloat(24.99)
}
const pedido11 = {
    estoque: 10,
    produto: 'PORÇÃO DE FRANGO A PASSARINHO',
    valor: parseFloat(24.99)
}
const pedido12 = {
    estoque: 10,
    produto: 'PORÇÃO DE TORRESMO A PURURUCA',
    valor: parseFloat(24.99)
}
const pedido13 = {
    estoque: 10,
    produto: 'REFRIGERANTE 600ML',
    valor: parseFloat(5.99)
}
const pedido14 = {
    estoque: 10,
    produto: 'SUCO DE LARANJA 1L',
    valor: parseFloat(7.99)
}
const pedido15 = {
    estoque: 10,
    produto: 'ÁGUA 500 ML',
    valor: parseFloat(2.99)
}

let resumoPedido =[]
let valorPedido =[]

function limparPedido(){
    resumoPedido = []
    valorPedido =[]
    let limparResumo = document.querySelector ('#fundo-amarelo')
    limparResumo.innerHTML = (resumoPedido)
}

let mesa1 =[]
let mesa2 =[]
let mesa3 =[]
let mesa4 =[]
let mesa5 =[]
let mesa6 =[]
let mesa7 =[]
let mesa8 =[]
let mesa9 =[]
let mesa10 =[]

let valorMesa1 = []
let valorMesa2 = []
let valorMesa3 = []
let valorMesa4 = []
let valorMesa5 = []
let valorMesa6 = []
let valorMesa7 = []
let valorMesa8 = []
let valorMesa9 = []
let valorMesa10 = []

let estoquePedido1 = (pedido1.estoque)


function adicionar() {
    let pedido = document.querySelector('#pedido')
    let valorOpcao = pedido.options[pedido.selectedIndex];
    let valor = valorOpcao.value
    
    let resumo = document.querySelector('#fundo-amarelo');

    

    if (valor == 0) {
        alert('escolha um pedido')
    } else if (valor == 1) {
        
        resumoPedido.push(pedido1.produto)
        valorPedido.push(pedido1.valor)
        resumo.innerHTML = (`${resumoPedido} <br>`)
    }else if (valor == 2) {
        resumo.innerHTML += (`${pedido2.produto} <br>`)
        valorPedido.push(pedido2.valor)
        resumoPedido.push(pedido2.produto)
    }else if (valor == 3) {
        resumo.innerHTML += (`${pedido3.produto} <br>`)
        valorPedido.push(pedido3.valor)
        resumoPedido.push(pedido3.produto)
    }else if (valor == 4) {
        resumo.innerHTML += (`${pedido4.produto} <br>`)
        resumoPedido.push(pedido4.produto)
        valorPedido.push(pedido4.valor)
    }else if (valor == 5) {
        resumo.innerHTML += (`${pedido5.produto} <br>`)
        resumoPedido.push(pedido5.produto)
        valorPedido.push(pedido5.valor)
    }else if (valor == 6) {
        resumo.innerHTML += (`${pedido6.produto} <br>`)
        resumoPedido.push(pedido6.produto)
        valorPedido.push(pedido6.valor)
    }else if (valor == 7) {
        resumo.innerHTML += (`${pedido7.produto} <br>`)
        resumoPedido.push(pedido7.produto)
        valorPedido.push(pedido7.valor)
    }else if (valor == 8) {
        resumo.innerHTML += (`${pedido8.produto} <br>`)
        resumoPedido.push(pedido8.produto)
        valorPedido.push(pedido8.valor)
    }else if (valor == 9) {
        resumo.innerHTML += (`${pedido9.produto} <br>`)
        resumoPedido.push(pedido9.produto)
        valorPedido.push(pedido9.valor)
    }else if (valor == 10) {
        resumo.innerHTML += (`${pedido10.produto} <br>`)
        resumoPedido.push(pedido10.produto)
        valorPedido.push(pedido10.valor)
    }else if (valor == 11) {
        resumo.innerHTML += (`${pedido11.produto} <br>`)
        resumoPedido.push(pedido11.produto)
        valorPedido.push(pedido11.valor)
    }else if (valor == 12) {
        resumo.innerHTML += (`${pedido12.produto} <br>`)
        resumoPedido.push(pedido12.produto)
        valorPedido.push(pedido12.valor)
    }else if (valor == 13) {
        resumo.innerHTML += (`${pedido13.produto} <br>`)
        resumoPedido.push(pedido13.produto)
        valorPedido.push(pedido13.valor)
    }else if (valor == 14) {
        resumo.innerHTML += (`${pedido14.produto} <br>`)
        resumoPedido.push(pedido14.produto)
        valorPedido.push(pedido14.valor)
    }else if (valor == 15) {
        resumo.innerHTML += (`${pedido15.produto} <br>`)
        resumoPedido.push(pedido15.produto)
        valorPedido.push(pedido15.valor)
    }



}

function finalizarPedido(){
    let mesa = document.querySelector('#mesa')
    let numeroMesa = mesa.options[mesa.selectedIndex].value;
    

    if(numeroMesa == 0){
        alert('escolha uma mesa')
    }else if(numeroMesa == 1){
        mesa1.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa1')
        valorMesa1.push(...valorPedido)
        let valorTotal1 = valorMesa1.reduce(function(acumulator,value){
            return acumulator+value;
        })

        
       

        pedidoMesa.innerHTML = (`<h2>Mesa 1 </h2>${mesa1} <br> Total R$ ${valorTotal1.toFixed(2)}`)
        localStorage.mesa1 = JSON.stringify(mesa1)
    }else if(numeroMesa == 2){
        mesa2.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa2')
        valorMesa2.push(...valorPedido)
        let valorTotal2 = valorMesa2.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 2 </h2>${mesa2} <br> Total R$ ${valorTotal2.toFixed(2)}`)
        
    }else if(numeroMesa == 3){
        mesa3.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa3')
        valorMesa3.push(...valorPedido)
        let valorTotal3 = valorMesa3.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 3 </h2>${mesa3} <br> Total R$ ${valorTotal3.toFixed(2)}`)
        
    }else if(numeroMesa == 4){
        mesa4.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa4')
        valorMesa4.push(...valorPedido)
        let valorTotal4 = valorMesa4.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 4 </h2>${mesa4} <br> Total R$ ${valorTotal4.toFixed(2)}`)
        
    }else if(numeroMesa == 5){
        mesa5.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa5')
        valorMesa5.push(...valorPedido)
        let valorTotal5 = valorMesa5.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 5 </h2>${mesa5} <br> Total R$ ${valorTotal5.toFixed(2)}`)
        
    }else if(numeroMesa == 6){
        mesa6.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa6')
        valorMesa6.push(...valorPedido)
        let valorTotal6 = valorMesa6.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 6 </h2>${mesa6} <br> Total R$ ${valorTotal6.toFixed(2)}`)
        
    }else if(numeroMesa == 7){
        mesa7.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa7')
        valorMesa7.push(...valorPedido)
        let valorTotal7 = valorMesa7.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 7 </h2>${mesa7} <br> Total R$ ${valorTotal7.toFixed(2)}`)
        
    }else if(numeroMesa == 8){
        mesa8.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa8')
        valorMesa8.push(...valorPedido)
        let valorTotal8 = valorMesa8.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 8 </h2>${mesa8} <br> Total R$ ${valorTotal8.toFixed(2)}`)
        
    }else if(numeroMesa == 9){
        mesa9.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa9')
        valorMesa9.push(...valorPedido)
        let valorTotal9 = valorMesa9.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 9 </h2>${mesa9} <br> Total R$ ${valorTotal9.toFixed(2)}`)
    
    }else if(numeroMesa == 10){
        mesa10.push(resumoPedido)
        let pedidoMesa = document.querySelector('#mesa10')
        valorMesa10.push(...valorPedido)
        let valorTotal10 = valorMesa10.reduce(function(acumulator,value){
            return acumulator+value;
        })
        pedidoMesa.innerHTML = (`<h2>Mesa 10 </h2>${mesa10} <br> Total R$ ${valorTotal10.toFixed(2)}`)
            
        
    }

    

}