

function primeNumbers(){
    for(let i=0; i<1000; i++){
       let divFlag=0

       for(let x=2; x<i; x++){
           if (i % x == 0){
               divFlag=1
               break
           }
       }

       if(i>1 && divFlag == 0) {
           console.log(i + " is a prime number")
       }
    }

}

primeNumbers()