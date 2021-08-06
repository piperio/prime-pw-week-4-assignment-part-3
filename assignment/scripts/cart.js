console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

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
  //}
  //}

//console.log( 'doesBasketContainItem - should say true', doesBasketContainItem('item') );
//console.log( 'doesBasketContainItem - should say false', doesBasketContainItem() );

if (basket.length === 0){
  console.log ('Array is empty!')
};

if (basket.length != 0){
    console.log (true);
};
