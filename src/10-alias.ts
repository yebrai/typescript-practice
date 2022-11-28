(() => {

    type UserID = string | number;

    let userId: UserID;

    
    //Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL'
    
    let shitSize: Sizes
    shitSize = "M"
    shitSize = "L"
    shitSize = "XL"
    shitSize = "S"
    
    function greeting(userId: UserID, size: Sizes) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`);
        }
    }
    greeting(1111, "L");
    greeting("111", "XL")

}) ()