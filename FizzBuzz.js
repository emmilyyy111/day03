// const fizz = [3, 6, 9, 12]
// const buzz = [5, 10, 15, 20]
// const fizzbuzz = [15, 30, 45]

// for(let i = 0; i<100; i/3){
//     console.log('fizz')
// }

// for(let i = 0; i<100; i/5){
//     console.log('buzz')
// }


for(let i = 1; i<101; i++){

    if(i%3 === 0){
        console.log('fizz')
    } else if (i%5 === 0){
        console.log('buzz')
    } else {
        console.log(i)
    }
}
    
