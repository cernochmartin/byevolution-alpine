function validateNIF(num) {
    var numero, let, letra;
    var expresion_regular_num = /^[XYZ]?\d{5,8}[A-Z]$/;
    num = num.toUpperCase();

    if(expresion_regular_num.test(num) === true){
        numero = num.substr(0,num.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = num.substr(num.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('num erroneo, la letra del NIF no se corresponde');
            return "Número de documento introducido no es valido";
        }else{
            return '';
        }
    }
    return "Número de documento introducido no es valido";
}

function validatePassport(num){
    num = num.toUpperCase();
    if(!validator.isAlphanumeric(num)){
        return "Este campo solo permite valores alfanumericos";
    }
    //Check if it's valid passport number which is max. 9 xharacters long
    var countryCodes = ['AM', 'AR', 'AT', 'AU', 'BE', 'BG', 'BY', 'BR', 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IN', 'IR', 'ID', 'IS', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'LY', 'MT', 'MX', 'MY', 'MZ', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SL', 'SK', 'TR', 'UA', 'US' ];
    for(let i=0;i<countryCodes.length;i++){
        if (validator.isPassportNumber(num, countryCodes[i])) {
            return '';
        }
    }
    return "Número de documento introducido no es valido";
}

function validateExpiryDate(date){
    var today= new Date();
    if(date >=today){
        return true;
    }else{
        return false;
    }
}

function validateCode(verificationCode){
    let code = '';
    verificationCode.forEach(element => {
      code += String(element);
    });
    //verify code
    /*
    fetch('/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: code
    }).then((res) => {
        if (res.ok) {
            res.json().then(async (data) => {
                if(data.success) return true;
                else return false;
            });
        }else{
            return false;
        }
    });*/
    return code=='123456'?true:false;//should be false
}