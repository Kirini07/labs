const form = document.querySelector("#password-generator-form");
const resField = document.querySelector(".resoult");

let arr_en = ['a', 'b', 'c', 'd', 'e', 
                'f', 'g', 'h', 'i', 'j', 'k', 
                'l', 'm', 'n', 'o', 'p', 'q', 
                'r', 's', 't', 'u', 'v', 'w', 
                'x', 'y', 'z'];
let randomSrt = ()=> Math.floor(Math.random()*arr_en.length );
let arr_sym = ['@', '!', '#', '$', '%', '^', 
                '&', '?', '*', '(', ')', '_', 
                '-', '+', '=', ',', '.'];
let randomSym = ()=> Math.floor(Math.random()*arr_sym.length );

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let passLength = e.target.length.value;
    let isNumber = e.target.numbers;
    let isSymbol = e.target.symbols;
    let arrSrt = Array(parseInt(passLength)).fill(null).map(e => e = arr_en[randomSrt()]);

    if(isSymbol.checked){
        arrSrt = arrSrt.map(e => Math.random()*50 > 25 ? e = arr_sym[randomSym()] : e = e)
    }
    if(isNumber.checked){
        arrSrt = arrSrt.map(e => Math.random()*50 > 25 ? e = randomSrt() : e = e)
    }

    resField.innerHTML = 'You\'r password:' + '  ' + arrSrt.join('');
});
