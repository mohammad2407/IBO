

function getUniquePrducts() {

    let arr = [] // to push products into array and check if they are present

    listOfProducts.map((product) => {
        if (arr.length == 0) { // if array is empty we will push the product initially
            arr.push(product)
        }
        else {
            let flag = false; // to check whether to add new product or not.

            arr.map((item) => { // mapping through array and checking for the same product

                if (item.productName == product.productName) {
                    item.quantity += product.quantity // increasing the quantity of same product in array;
                    flag = true

                }

            })
            if (!flag) {       // if there is no same product then we will add new product to arr;
                arr.push(product)
            }
        }
    })

    console.log(arr)

}



function getUniquePrductCount() {
    // initiallizing empty object
    let uniqueObj = document.getElementById("count")
    let obj = {}

    listOfProducts.map((product) => {
        if (obj[product.productName] == undefined) {
            // if the object is new initializing with 1;

            obj[product.productName] = 1;
        }
        else {
            // if its already present incrementing its count;

            obj[product.productName]++;
        }
    })


    console.log(obj)
}






const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];