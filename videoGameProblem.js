let playerIsAlive = true

let playerHealth = 100 

let damage = 25

let playerHealthAfterDamage = 75

let message = `you took 25 damage!`

if(damage >= playerHealth){
    console.log(`You DIED!`)
}else{
    console.log(`you took ${damage} damage, now you have ${playerHealthAfterDamage} HP!
    Is the player alive? ${playerIsAlive}`)
    
}
