import ast=AST;
module M {
    export ast=AST;

    var x:number;

    var y = (x === 10)?1:2;

    var zz = (y===4);

    var z=y;

    var a,b;

    switch(x) {
        case 1:break;
        default:break;
    }

    for(x = 1;x <2; ++x) {
        goto:console.log("hi");
    }

    while(i < 1) {
        ++i;
    }
}
