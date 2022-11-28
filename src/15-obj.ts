// Tipar obj

(() => {

    type Sizes = "S" | "M" | "L" | "XL";
    type Product = {
        title: String,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const products: Product[] = [];

    const addProduct = (data: Product ) => {
        products.push(data)
    }
    addProduct({
        title: "product1",
        createdAt: new Date(1991, 1 , 1),
        stock: 12
    })

    addProduct({
        title: "product1",
        createdAt: new Date(1991, 1 , 1),
        stock: 12,
        size: "L"
    })
    console.log(products);
}) ()