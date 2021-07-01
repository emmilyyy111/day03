// // const fruits = ['banana', 'orange', 'apple']

// // fruits.push('lemons')

// // console.log('should get orange', fruits[1])
// // console.log('this length', fruits.length)
// // console.log( fruits )

// // const shoppingList = ['shampoo, milk, soap, 🍾']
// // console.log('this is my shopping list==>>>> ',shoppingList)

// // const newShoppingList = shoppingList.concat(fruits)
// // console.log('new shopping list here', shoppingList)

// const cars = [{ford: 'truck' }, 'audi', 'bmw', 'vw', 'nissan', 'mazda', 'honda', 'bus']
// console.log(cars.toString())
// // console.log(cars.join('== * =='))
// cars.push(['honda', 'toyota', 'mitsubishi'])
// console.log(cars)


const url = 'https://www.bocacode/courses/career/software-engineering'

const parts = url.split('/')

const domainParts = parts[2].split('.')

const domain = domainParts[1] + '.' + domainParts[2]

