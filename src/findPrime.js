

findPrime(4,5,10,8,3,7,25)

function findPrime(...numbers){

    for(let i=0; i<numbers.length; i++){
        let divFlag=0

        for(let x=2; x< numbers[i]; x++){
            if (numbers[i]%x == 0){
                divFlag=1
                break
            }
        }

        if (numbers[i]>1 && divFlag == 0) {
            console.log(numbers[i] + " is a prime number")
        }else{
            console.log(numbers[i] + " is not a prime number")
        }
    }
}

