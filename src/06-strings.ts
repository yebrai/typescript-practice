(() => {
    let productTile = "My amazing product";
    // productTile = null;
    // productTile = () => {}
    productTile = "My amazing product changed";
    console.log("productTile", productTile);
    let productDescription = "i'm blablablala"

    const summary = `
    title: ${productTile}
    description: ${productDescription}
    price: ${24}`
    console.log("summary", summary);

}) ()