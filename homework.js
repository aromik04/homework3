"use strict"
//задание 1
function changeCollection() {
    for (let i = 0; i <= arguments.length - 1; i++) {
      arguments[i].splice(0, 1);
    }
  }
  
  let a = [1, 2, 3,]
  let b = ['a', 'b', 'c', 'd']

  
  changeCollection(a, b);
  
  console.log(a, b);


  //задание 2


  // не получилось :(
  
  
  //задание 3
  // не работает
  function chooseRandomElement (arr){
        return arr[Math.floor(Math.random()*arr.length)]
  }
  let someString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i', 'g', 'k', 'l', 'm', 'n']
  chooseRandomElement(someString);
  console.log(someString);
  