console.log("ShopSphere JavaScript Loaded");

const products = [

    {

        name: "Headphones",

        price: 2999,

        rating: 4.5

    },

    {

        name: "Mouse",

        price: 799,

        rating: 4.2

    },

    {

        name: "Keyboard",

        price: 1499,

        rating: 4.6

    },

    {

        name: "Laptop",

        price: 59999,

        rating: 4.8

    },

    {

        name: "Phone",

        price: 24999,

        rating: 4.4

    }

];

const title = document.querySelector(".hero h2");

const searchButton = document.querySelector(".search button");

const searchInput = document.querySelector(".search input");

searchButton.onclick = function () {

    let found = false;
    let k;

    for (let i = 0; i < products.length; i++) {

        if (searchInput.value == products[i].name)  {

    found = true;

    k = i;

    break;

}

    }

    if (found) {

       title.innerText =
        products[k].name +
                           " | ₹" +
                                     products[k].price +
                                                          " | ⭐ " +
                                                                        products[k].rating;

    }

    else {

        title.innerText = "Product Not Found";

    }

};