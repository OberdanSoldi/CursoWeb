const multiplicar = (num1, num2) => {
    if(num1 >= 0 && num2 >= 0) {
        let result = 0;
        for(let i = 0; i < num2; i++){
            result += num1;
        }
        console.log(result)
    }else{
        console.log('Digite um número maior que zero')
    }

};

multiplicar(2, 5);
multiplicar(5, 2);