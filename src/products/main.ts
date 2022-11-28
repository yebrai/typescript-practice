import { createProduct, calcStock, products } from "./product.service";

createProduct({
    title: "product1",
    createdAt: new Date(1991, 1 , 1),
    stock: 5
})

createProduct({
    title: "product2",
    createdAt: new Date(1991, 1 , 1),
    stock: 6,
    size: "L"
})
console.log(products);
const total = calcStock();
console.log(total);