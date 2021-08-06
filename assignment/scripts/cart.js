console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//my comments are things I was trying.

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
