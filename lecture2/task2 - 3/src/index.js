const deleteWarning = () => {
    document.querySelectorAll('.warning').forEach(e => e.remove())
}; // Видаляє поля попередження

const expectRegister = (str, count = 1) => {
    let resoult = 0;
    const arr = str.split('');
    arr.forEach(e => e === e.toUpperCase() && resoult++ );
    return resoult >= count ? true : false;
}; // Перевіряє стрічку на наявність літер верхнього регістру, відповідно до кількості, що задана другим параметром.

const expectLength = (str, length = 6) => {
    return str.length >= length ? true : false;
}; // Перевыряє стрічку на відповідність до довжини заданої другим парамертом.

const expectDigital = (str, count = 1) => {
    let resoult = 0;
    const arr = str.split('');
    const reg = /[0-9]/;
    arr.forEach(e => reg.test(e) && resoult++);
    return resoult >= count ? true : false;
}; // Перевіряє стрічку на наявність цифр , відповідно до кількості, що задана другим параметром.

const expectSymbol = (str, count = 1) => {
    let resoult = 0;
    const arr = str.split('');
    const reg = /["#$%&'()*+,-./:;<=>?@^_`{|}~Δ€ƒ…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]/;
    arr.forEach(e => reg.test(e) && resoult++);
    return resoult >= count ? true : false;
} // Перевіряє стрічку на наявність символів, відповідно до кількості, що задана другим параметром.


const validator = (str, config) => {
    const { length, upLeter, digit, symbol } = config; 
    let resoult = true;

    if( 
        !expectLength(str, length) || 
        !expectRegister(str, upLeter) || 
        !expectDigital(str, digit) || 
        !expectSymbol(str, symbol) 
    ){
        resoult = false;
    }

    return resoult;
}


const form = document.getElementById('authentication');

const authenticationData = {
    firstName: null,
    lastName: null,
    login: null,
    password: null
};

form.addEventListener('submit', e =>{
    e.preventDefault();
    deleteWarning();
    let flag = false;
    let validPass = false;
    const child = [e.target.firstName, e.target.lastName, e.target.login, e.target.password ];

    child.forEach(e => {
        if(e.value === undefined || e.value === null || e.value === ''){
            let warn = document.createElement('div');
            warn.classList.add('warning');
            warn.textContent = `Please type you'r ${e.name}`;
            form.insertBefore(warn, e);
            setTimeout(deleteWarning, 5000);
            return;
        }else{
            authenticationData[e.name] = e.value;
            flag = true;
        }
    });
    
    validPass = validator(e.target.password.value, { 
        length: 6, 
        upLeter: 1, 
        digit: 1, 
        symbol: 1 
    });

    if(flag &&! validPass){
        let warn = document.createElement('div');
        warn.classList.add('warning');
        warn.textContent = `The password must contain at least 6 letters, 1 uppercase letter, 1 character, 1 digit`;
        form.insertBefore(warn, e.target.password);
    }
    
    if(flag && validPass){
        console.log(authenticationData);
        alert('Ssuccess check you\'r console!')
    }
});


