class Product{
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0

    }

    addToStock(quantity){
        return this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price *=(1 - (discount/100) )
    }
}

const fone = new Product("fone", "para usar na orelha", 100,20)

console.log(fone)

fone.addToStock(20)

fone.calculateDiscount(10)

console.log(fone)