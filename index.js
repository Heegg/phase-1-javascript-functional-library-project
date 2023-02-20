//https://www.youtube.com/watch?v=0klZpQYlRu8&ab_channel=EnochGriffith
//https://www.youtube.com/watch?v=u2veef_YTuY&ab_channel=EnochGriffith

// myEach
// 1) calls alert with each element passed
// 2) calls alert properly on object values
// 3) returns the original collection
function myEach(collection, callback) {
    for (alert in collection){
        callback(collection[alert])
    }
    return collection
}

// myMap
// 4) successfully returns a correctly populated array
// ✓ does not modify the original array
// 5) successfully returns a correctly populated array from modified object values
// ✓ does not modify the original object
function myMap(collection, callback){
    let modifiedArr = []

    for (alert in collection){
        modifiedArr.push(callback(collection[alert]))
    }
    return modifiedArr
}

// myReduce
// 6) returns the correct reduced value when passed an initial value
// 7) returns the correct reduced value when not passed an initial value
// ✓ does not modify the original array
// 8) returns the correct reduced value from object values
// ✓ does not modify the original object
// function myReduce(collection, callback, acc){
//     let copy = [...collection]
//     acc = acc || copy.shift()
//     for (alert in copy){
//         acc = callback(acc, copy[alert], copy)
//     }
//     return acc
// }

// Have to convert the objects into an array to pass.  
// So if you can callback one of the last functions in the lab where you have to strip out keys from objects,
// that should work.
// collection: [1, 2, 3]/ callback: function(acc, currentVal, collection) {return acc + currentVal}/acc:10
// arr is [1, 2, 3, 4]
// obj is {one: 1, two: 2, three: 3, four: 4}
function myReduce(collection, callback, acc){
    let array = []
    let copy = [...collection]
    acc = acc || copy.shift()
    for (array in copy){
        acc = callback(acc, copy[array], copy)
        console.log(acc)
    }
    return acc
}


// myFind
// 9) returns the value if found
// 10) does not traverse the whole array if the value is found early
// 11) returns undefined if the value is not present
function myFind(collection, callback){

    for (alert in collection){
        let element = collection[alert]
        if (callback(element)){
            return element
        } 
    }
}

// myFilter
// 12) correctly filters for values that the callback evaluates as true
// 13) correctly returns an empty array if no matching values are found
function myFilter(collection, callback){
    let selectedArr = []

    for (alert in collection){
        let element = collection[alert]
        if (callback(element)){
            selectedArr.push(element)
        } 
    }
    return selectedArr
}

// mySize
// 14) correctly returns the size of the collection when an array is passed
// 15) correctly returns the size of the collection (amount of keys) when an object is passed
function mySize(collection){
    return Object.keys(collection).length
}

// myFirst
// 16) returns the first element of the collection
// 17) returns the first n elements of the collection when the second optional argument (n) is provided
function myFirst(collection, n = 1) {
    let count = 1
    let array = []

    for (let accessor in collection){
        if (count <= n){
            array.push(collection[accessor])
            count++
        }
    }
    return array.length > 1 ? array : array[0]
}
//42:26

// myLast
// 18) returns the last element of the collection
// 19) returns the last n elements of the collection when the second optional argument (n) is provided
function myLast(collection, n = 1) {
    let startingIndex = collection.length - n

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
}

// myKeys
// 20) retrieves all the names of the object's own enumerable properties
// ✓ does not modify the original object

function myKeys(object){
    let enumerableArr = []

    for (let enumerable in object){
        enumerableArr.push(enumerable)
    }
    return enumerableArr
}

// myValues
// 21) retrieves all the values of the object's own properties
// ✓ does not modify the original object

function myValues(object){
    // let ownArr = []
    let ownObj = []

    for (let own in object){
        ownObj.push(own)
    }
    return Object.values(object)
}