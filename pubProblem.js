let clientAge = rng(13,30)

const legalAge = 21

// fazer anotação maior igual

if(clientAge >= legalAge ){
    console.log(`You are ${clientAge} so you can drink alcohol`)
} else{
    console.log(`You are ${clientAge} so you can't drink alcohol`)


}



































































































function rng(min, max) {

    return Math.trunc(Math.random() * (max - min) + min);
    
    }