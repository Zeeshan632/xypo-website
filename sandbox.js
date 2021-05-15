var menubtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = ("-250px");
menubtn.onclick = function(){
    if(sideNav.style.right == ("-250px")){
        sideNav.style.right = ("0px");
    }else{
        sideNav.style.right = ("-250px");
    }
}
let numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((item, index, array) => item * index);

console.log(doubledNumbers);


let products = [
    {
        name: 'laptop',
        price: 1000, 
        quantity: 6
    }, {
        name: 'desktop',
        price: 1500,
        quantity: 10
    }, {
        name: 'phone',
        price: 700,
        quantity: 10
    }
]

let totalPrice = products.map((item, index) => {
    name = item.name,
    price = item.price 
})







