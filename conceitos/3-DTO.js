function calcularTotalPedido(precoUnitatio, quantidade) {
    return precoUnitatio * quantidade
}

const totalPedido1 = calcularTotalPedido(20, 3)

function calcularTotal({ precoUnitatio, quantidade }) {
    return precoUnitatio * quantidade
}

const totalPedido2 = calcularTotal({
    precoUnitatio: 20,
    quantidade: 3
})

const pedidoDTO = {
    precoUnitatio: 20,
    quantidade: 3
}

const totalPedido3 = calcularTotal(pedidoDTO)

console.log(totalPedido1)
console.log(totalPedido2)
console.log(totalPedido3)