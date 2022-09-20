class Product {
id;
name;
price;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    setId(id){
        this.id=id;
    }
    getId(){
        return this.id;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setPrice(price){
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
};