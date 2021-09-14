module.exports = function Pizzas(){
    const mediumPizzaCost = 65.00;
    const largePizzaCost = 85.00;
    const smallPizzaCost = 35.00;
    let smallPizzaTotalPrice = 0;
    let mediumPizzaTotalPrice = 0;
    let largePizzaTotalPrice = 0;
    let cart = [
    ];
    
    
    function orderPizza(pizzAsize) {
        let pizza = {
            size: '',
            price: 0,
            quantity: 0,
            totalPrice: 0
        }

        if (cart.find(p => p?.size === pizzAsize) !== undefined) {
            var pizzIndex = cart.indexOf(cart.find(p => p?.size === pizzAsize));
            var pizzaTobeUpdated = cart.find(p => p?.size === pizzAsize);

            pizzaTobeUpdated.quantity += 1;
            if (pizzAsize === 'small') {
                pizzaTobeUpdated.totalPrice =  pizzaTobeUpdated.quantity * smallPizzaCost;
            }else if(pizzAsize === 'large'){
                pizzaTobeUpdated.totalPrice =  pizzaTobeUpdated.quantity * largePizzaCost;
            }else{
                pizzaTobeUpdated.totalPrice =  pizzaTobeUpdated.quantity * mediumPizzaCost;
            }

            cart[pizzIndex] = pizzaTobeUpdated;

        }else{
            if (pizzAsize === 'small') {
                pizza.price = smallPizzaCost;
                pizza.size = 'small';
                pizza.quantity = 1;
                pizza.totalPrice = pizza.quantity * smallPizzaCost;
                cart.push(pizza)
               
            }else if(pizzAsize === 'large'){
                pizza.price = largePizzaCost;
                pizza.size = 'large';
                pizza.quantity = 1;
                pizza.totalPrice = pizza.quantity * largePizzaCost;
                cart.push(pizza)
    
                
            }else{
                pizza.price = mediumPizzaCost;
                pizza.size = 'medium';
                pizza.quantity = 1;
                pizza.totalPrice = pizza.quantity * mediumPizzaCost;
                cart.push(pizza)
            }
        }

        if(cart.find(p => p?.size === 'small') !== undefined){
            smallPizzaTotalPrice = cart.find(p => p?.size === 'small').totalPrice;
        }

        if(cart.find(p => p?.size === 'medium') !== undefined){
            mediumPizzaTotalPrice = cart.find(p => p?.size === 'medium').totalPrice;
        }

        if(cart.find(p => p?.size === 'large') !== undefined){
            largePizzaTotalPrice = cart.find(p => p?.size === 'large').totalPrice;
        }
        
    }
        
    function getCart() {
        return cart;
    }

    function getOverallTotalPrice() {
        return smallPizzaTotalPrice + mediumPizzaTotalPrice + largePizzaTotalPrice;
    }
    
    function getSmallPizzaTotalPrice() {
        return smallPizzaTotalPrice;
    }

    function getMediumPizzaTotalPrice() {
        return mediumPizzaTotalPrice;
    }

    function getLargePizzaTotalPrice() {
        return largePizzaTotalPrice;
    }

    return {
        orderPizza,
        getCart,
        getSmallPizzaTotalPrice,
        getMediumPizzaTotalPrice,
        getLargePizzaTotalPrice,
        getOverallTotalPrice
    }
}