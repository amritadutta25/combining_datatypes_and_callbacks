//=================================================================
//Combine objects, arrays, and functions more than one level deep
//=================================================================

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    names: ['blue', 'black', 'green']
}
console.log(crayonBox.names[0])

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue' 
    }
}
console.log(bottle.cap.material)

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {name: 'top', price: 25},
    {name: 'pant', price: 35},
    {name: 'shoes', price:65}
]
console.log(receipt[0].name)
console.log(receipt[0].name, receipt[0].price)

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    ['Amanda', 'Brandon', 'Catherine'],
    ['Fiona', 'Greg', 'Hailey']
]

console.log(apartmentBuilding[0][0])

//============================================
//Combine objects, arrays, and functions more than one level deep
//============================================

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

function knit() 
{
    const obj = {
        item: 'scarf',
        size: '6ft'
    }
    return obj
}

console.log(knit()['item'])  // knit() returns the object obj. Then calling the property 'item' on the returned object.

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

function crayonSelector()
{
    const crayonBox = {
        names: ['blue', 'black', 'green']
    }
    return crayonBox
}

console.log(crayonSelector()['names'][1]) // calling the function crayonSelector() returns the crayonBox object. On this returned crayonBox object, accessing its property 'names' and then getting the second value of the array.

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

function powerButton()
{
    const options = () => {
        console.log("Select a song")
    }
    return options
}

const optionsFunc = powerButton() //calls the function powerButton that returns the function 'options'
optionsFunc()  // invoke the function options

