
const cardapio = [{
    item: 1,
    produto: 'BIFE A MILANESA',
    valor: parseFloat(21.99),
    estoque: 3,
},

{
    item: 2,
    produto: 'BIFE DE ALCATRA A PARMEGIANA',
    valor: parseFloat(25.99),
    estoque: 2,
},

{
    item: 3,
    produto: 'FILÉ DE FRANGO A PARMEGIANA',
    valor: parseFloat(25.99),
    estoque: 2,
},

{
    item: 4,
    produto: 'FILÉ DE FRANGO A MILANESA',
    valor: parseFloat(21.99),
    estoque: 2,
},

{
    item: 5,
    produto: 'BIFE ACEBOLADO GRELHADO',
    valor: parseFloat(19.99),
    estoque: 2,
},

{
    item: 6,
    produto: 'FILÉ DE PEIXE A MILANESA',
    valor: parseFloat(19.99),
    estoque: 2,
},

{
    item: 7,
    produto: 'BISTECA SUINA GRELHADO',
    valor: parseFloat(17.99),
    estoque: 2,
},

{
    item: 8,
    produto: 'FILÉ DE FRANGO GRELHADO',
    valor: parseFloat(17.99),
    estoque: 2,
},

{
    item: 9,
    produto: 'PORÇÃO DE BATATA',
    valor: parseFloat(19.99),
    estoque: 2,
},

{
    item: 10,
    produto: 'PORÇÃO DE CALABRESA',
    valor: parseFloat(24.99),
    estoque: 2,
},

{
    item: 11,
    produto: 'PORÇÃO DE FRANGO A PASSARINHO',
    valor: parseFloat(24.99),
    estoque: 2,
},

{
    item: 12,
    produto: 'PORÇÃO DE TORRESMO A PURURUCA',
    valor: parseFloat(24.99),
    estoque: 2,
},

{
    item: 13,
    produto: 'REFRIGERANTE 600ML',
    valor: parseFloat(5.99),
    estoque: 5,
},

{
    item: 14,
    produto: 'SUCO DE LARANJA 1L',
    valor: parseFloat(7.99),
    estoque: 5,
},

{
    item: 15,
    produto: 'ÁGUA 500 ML',
    valor: parseFloat(2.99),
    estoque: 5,
}
]


const mesas = [{
    mesa: 1,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 2,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 3,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 4,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 5,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 6,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 7,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 8,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 9,
    pedidos: [],
    valorPedidos: []
},
{
    mesa: 10,
    pedidos: [],
    valorPedidos: []
},
]

let idMesa1 = '#mesa1'
let resumoPedido = []
let valorPedido = []

function limparPedido() {
    resumoPedido = []
    valorPedido = []
    let limparResumo = document.querySelector('#fundo-amarelo')
    limparResumo.innerHTML = (resumoPedido)
}



function controlarEstoque(resumoPedido) {
    for (let i = 0; i < resumoPedido.length; i++) {
        cardapio.filter(item => {
            if (item.item == resumoPedido[i].item) {
                return item.estoque--;
            }
        })

    }

}


function adicionarResumo(produto, menu) {
    let resumo = document.querySelector('#fundo-amarelo');
    let adicionarResumo = menu.filter(item => item.item == produto)
    let imprime = cardapio[produto - 1].produto
    if(cardapio[produto - 1].estoque == 0){
        alert('Produto fora de estoque!')
        return false
    } 
    resumoPedido.push(...adicionarResumo)
    resumo.innerHTML += (`${imprime} <br>`)



}

function adicionar() {
    let pedido = document.querySelector('#pedido')
    let valorOpcao = pedido.options[pedido.selectedIndex];
    let valor = valorOpcao.value
    if(valor == 0){
        alert('Escolha um produto!')
        return false
    }
    adicionarResumo(valor, cardapio)

}

function finalizarPedido() {
    let mesa = document.querySelector('#mesa')
    let numeroMesa = mesa.options[mesa.selectedIndex].value;
    let pedidoMesa = document.querySelector(`#mesa${numeroMesa}`)
    if(numeroMesa == 0){
        alert('escolha uma mesa')
        return false
    }
    
    controlarEstoque(resumoPedido)

    for (let i = 0; i < resumoPedido.length; i++) {
        mesas[numeroMesa - 1].pedidos.push(resumoPedido[i].produto)
    }
    for (let i = 0; i < resumoPedido.length; i++) {
        mesas[numeroMesa - 1].valorPedidos.push(resumoPedido[i].valor)
    }
    let valorTotal = mesas[numeroMesa - 1].valorPedidos.reduce(function (acumulator, value) {
        return acumulator + value;
    })

    limparPedido()




    pedidoMesa.innerHTML = `<h2>Mesa ${numeroMesa} </h2> <br> ${mesas[numeroMesa - 1].pedidos} <br> R$${valorTotal.toFixed(2)}`





}