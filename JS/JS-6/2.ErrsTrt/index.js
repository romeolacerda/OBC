function sum (a, b){
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2,9))
    console.log(sum(true, 14)) // true = 1
    // console.log(sum(undefined,22))
    console.log(sum(18, "0"))
    console.log(sum(29, null)) // null = 0
    console.log(sum(13,"zero"))
} catch(error) { // erro que foi capturado 
    console.log("An error ocurred!")
    console.log(error.message)
} finally {
 console.log("calculations finished")   
}


