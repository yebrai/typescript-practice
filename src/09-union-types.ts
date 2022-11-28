(() => {
    let userId: string | number;
    userId = 123;
    userId = "asd";

    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLocaleLowerCase()}`);
        }else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }

    greeting('asa');
    greeting(12.3344);
}) ()