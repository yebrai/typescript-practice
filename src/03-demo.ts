//funcion anonima autoejecutada.

//De esta forma no chocaria con las variables de otros documentos llamadas igual

(() => {
    let myProductName: string = "Product 1";
    let myProductPrice = 123
    
    myProductName = "change";
    myProductName.toLocaleLowerCase();
    
    myProductPrice.toFixed();
    
    const myProductStock = 1000;
    
}) ();


