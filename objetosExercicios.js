class ContaBancaria {
    constructor(saldo,agencia,conta){
        this.saldo = saldo
        this.agencia = agencia
        this.conta = conta
    }
    deposito(valorASomar){
        this.saldo += valorASomar
    }
    saque(valorARetirar){
        this.saldo -= valorARetirar 
    }
}
/*
let novaConta = new ContaBancaria(0,1111,222222)
console.log(novaConta)
novaConta.deposito(500)
console.log(novaConta.saldo)
novaConta.saque(300)
console.log(novaConta.saldo)
*/
// ================================================
class CarrinhoDeCompras{
    constructor(item,quantidade,valorTotal){
        this.item = item
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    addItem(itemAdicionado){
        let contador = 0 // verificará se o item existe no carrinho
        for(let itemDoCarrinho in this.item)
        if(this.item[itemDoCarrinho].id == itemAdicionado.id){
            this.item[itemDoCarrinho].quantidade += itemAdicionado.quantidade;
            contador = 1 // se o item existe no carrinho, o contador vai para 1
        }
        if(contador == 0){
            this.item.push(itemAdicionado)
        }
        this.quantidade += itemAdicionado.quantidade
        this.valorTotal += itemAdicionado.quantidade * itemAdicionado.preco
    }
/*
    removeItem(itemRemovido){
        let contador = 0 // verificará se o item existe no carrinho
        for(let itemDoCarrinho in this.item)
        if(this.item[itemDoCarrinho].id == itemRemovido.id){
            this.item[itemDoCarrinho].quantidade += itemRemovido.quantidade;
            contador = 1 // se o item existe no carrinho, o contador vai para 1
        }
        if(contador == 0){
            console.log("Este item não existe!")
        }
        this.quantidade += itemRemovido.quantidade
        this.valorTotal += itemRemovido.quantidade * itemRemovido.preco
    }
*/

}

let carrinho = new CarrinhoDeCompras([
    {
        id:01,
        nome: "Camisa",
        quantidade: 2,
        preco: 17.50,
    },
    {
        id:02,
        nome: "Calça",
        quantidade: 3,
        preco: 20.0,
    }
],5,95)

console.log(carrinho)

carrinho.addItem({
    id: 01,
    nome:"camisa",
    quantidade: 3,
    preco:18.20
})

console.log(carrinho)

carrinho.addItem({
    id: 02,
    //nome:"camisa",
    quantidade: 2,
    preco:30
})

console.log(carrinho)

carrinho.addItem({
    id: 03,
    nome:"boné",
    quantidade: 1,
    preco:12
})
console.log(carrinho)
