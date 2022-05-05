function returnEvenValue(array){
    let evenNums = []
    for(let i =0; i < array.length; i++){
        if (array[i] % 2 == 0){
            evenNums.push(array[i])
        }
        else{
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os numeros pares do array são:', evenNums)
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]



returnEvenValue(array)