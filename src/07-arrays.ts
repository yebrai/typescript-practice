(() => {
    let prices = [1,2,1,2,1,2,1,212, "hola", true];
    // prices.push("assas");
    // prices.push(true);
    // prices.push({});
    prices.push(121212);


    let products = ["hola", true];
    products.push(false);

    let mixedArr: (number | string | boolean | Object)[] = ['hola', true]
    mixedArr.push(12)
    mixedArr.push("as")
    mixedArr.push(true)
    mixedArr.push([])
    mixedArr.push({})

    let numbers = [1,2,1,2,1,2,1,212]
    numbers.map(item => item * 2)
    numbers.map((eachItem) => eachItem * 2)

}) ()