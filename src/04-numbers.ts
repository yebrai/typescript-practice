(()=> {
    let productPrice=100; //inferido
    productPrice = 12
    console.log("producPrice", productPrice);

    let customerAge: number = 28 //explicito

    customerAge = customerAge + "1"; //Esto dara 281
    customerAge = customerAge + 1;
    console.log("customerAge", customerAge);


    let productInStock: number; //si es una variable sin valor debe de llevar el tipo de forma explicito
    console.log("productInStock", productInStock)
    if (productInStock > 10) {
        console.log("Is greater");
    }

    let discount = parseInt("123");
    console.log("discount", discount);
    if (discount <= 200) {
        console.log("apply");
    } else {
        console.log("not apply");
    }

    let hex = 0xfff;
    console.log("hex",hex);
    let bin = 0b10101010;
    console.log("bin", bin)

    const myNumber: Number = 10 // No se usa en mayusculas (Significa conjunto de datos)
    const myNumberOk: number = 10
    console.log("myNumberOk", myNumberOk);

}) ();