(() => {
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }

    // login("ivan@ivan.com", "1234123")
    login({
        email:"vain@ivan.com",
        password: 1234123
    })
    type Sizes = "S" | "M" | "L" | "XL";
    const products: any[] = [];

    const addProduct = (data:   {
        title: String,
        createdAt: Date,
        stock: number,
        size?: Sizes
    } ) => {
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