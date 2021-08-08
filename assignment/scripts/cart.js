console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//my comments are things I was trying. Is this what you mean by wanting to see how we're testing our code?

let basket = [];

function addItem(item){
  basket.push(item);
}

addItem('item');

console.log(basket);

//function any(basket){return basket.length>0;}
//basket.some(item)

//function containsItem(basket){
  //for (let i = 0; i < basket.length; i++) {
    //if(basket[i] === 'item'){
      //return true;
    //}
  //}
  //return false;
//}
//function doesBasketContainItem(item) {
  //if (item[basket.length>0]){
    //return true;
//  } else {
  //  return false;
  //}con
  //}

//console.log( 'doesBasketContainItem - should say true', doesBasketContainItem('item') );
//console.log( 'doesBasketContainItem - should say false', doesBasketContainItem() );

if (basket.length === 0){
  console.log ('Array is empty!')
};

if (basket.length != 0){
    console.log (true);
};

//array.forEach(function (listItems(basket){
//  console.log(array, index);
//});

basket.pop ('item');
console.log(basket);

basket.unshift ('apples', 'oranges', 'bananas');
console.log(basket);

basket.forEach(item => console.log(item));

//function listItems (basket){
  //forEach (item =>console.log(item));
  //}

//  function listItems (basket){
  //  for (let i = 0; i < 3; i++) {
    //  basket[i] = listItems(){
      //  console.log(item + i);
  //    };
  //  }
  //  for (x = 0; x < 3; x++) {
    //  listItems[i]();
  //  }

//  function listItems (for (var i = 0; i < basket.length; i++) {
  //  console.log(listItems);

//  }

//function listItems(basket.length){
  //console.log('listItems')
//}

basket.forEach(listItems);
function listItems(item, index){
  console.log(item);
}

function empty(basket){
    basket.length=0;
}
  empty(basket);
  console.log('Reset basket:', basket);

// STRETCH GOALS

const maxItems = 5

function isFull(basket) {
  if (basket.length < maxItems){
    return false}
    else {basket.length >= maxItems
      return true
    };
  }

console.log ('Is basket full? :' , isFull(basket));

addItem('apples');
console.log(basket);

addItem('oranges');
console.log(basket);

basket.unshift('bananas');
console.log(basket);

basket.pop('bananas');
console.log(basket);

basket.shift('oranges');
console.log(basket);

console.log(basket);

addItem('oranges', addItem('bananas'));
console.log(basket);

addItem('pineapples', addItem('pears'), addItem('rutabagas')); //Question: Why did the console list rutabagas before pinepapples?
console.log(basket);


console.log(isFull(basket));

function isFull(basket) {
  if (basket.length < maxItems){
    return false}
    else {basket.length >= maxItems
      return true ; basket.length--
    };
    }
console.log ('Is basket full? :' , isFull(basket));

basket.maxItems = 5;

// function removeItem(basket){
  //if (basket.length > maxItems) {
  //  basket.length[i]-1; return true

  //}
//};
//console.log(removeItem(basket));

//console.log(basket);

//basket.push = function removeItems(elem) {
//basket.push('6');
//console.log(basket);

//function removeItem(basket, 5){
  //basket.removeItem(5);
  //basket.length = Math.mn(basket.length, 5);
  //return true;
//}

//function removeItem (basket){
  //for (let i = 0; i < basket.length; i--) {
    //basket[i]
  //} if (basket.length i--){
  //  return true;
  //}
//}
//console.log (basket);

//function removeItem (id, basket) {
  //if (basket.length === 5) {
    //basket.pop();
//  }
  //return basket;
//}
///console.log(basket);

//function removeItem (elem){
  //array.pop();
//}

//console.log(basket);

//let limitedArrayProxy = {
  //set: function(target, property, value, receiver){
  //  if (!isNaN(property)){
    //  if(parseInt(property) < 5) {
      //  target[property] = value;
    //  }
    //}
    //return true;
//  }
//};

//let limitArray = new Proxy ([], limitedArrayProxy);
//let limitArray = 5
//limitArray.push (1, 2, 3)
//console.log (limitArray)

//limitArray.unshift(5, 4)
//console.log(limitArray)

//limitArray.unshift(10)
//console.log(limitArray)

//limitArray[2] = 'manually changed'
//console.log(limitArray)

//limitArray.push(20)
//console.log(limitArray)

//limitArray[5] = 'overflow'
//console.log('still 5 element:', limitArray)

//console.log('length', limitArray.length)

//function removeItem ('item') {
  //if basket.indexOf() {
  //  basket.splice('item')

  //};


//}
// 
