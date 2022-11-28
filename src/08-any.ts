(() => {
    let myDynamicVar: any;
    myDynamicVar = 100;
    myDynamicVar = {};
    myDynamicVar = null;

    myDynamicVar = "hola";
    const rta = (myDynamicVar as string).toLocaleLowerCase()
    console.log(rta);

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed()
    console.log(rta2);
}) ();