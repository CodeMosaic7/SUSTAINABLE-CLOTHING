// For carousel
const slides = document.querySelectorAll(".slide");
//Here, we declared that slides will have all the images with have class slide.
let counter = 0;
//Here, I'm traversing each slide in slides and appling style.
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

})
//This is the sliding function.

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )

}
const goNext = () => {
    if(counter<slides.length-1){
        counter++;
    }else{
        counter=0;
    }
    slideImage();
}

// If check whether the images is in range or not
const goPrev = () => {
    if(counter>0){
        counter--;
    }else{
        counter.slides.length-1;
    }
    slideImage();
}


// I have to write a script that when the product on the page is clicked a webpage is generated of that product
// that means product list of the webpage will also be dynamically generated.
const data = {
    "categories": {
      "Spring": [
        {
          "id": 1,
          "name": "Slaying Lavender",
          "price": 49.99,
          "description": "A light and breezy floral dress perfect for spring outings.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"

        },
        {
          "id": 2,
          "name": "Green day",
          "price": 69.99,
          "description": "A stylish jacket to keep you warm on cool spring evenings.",
          "img": "images/images-products/spring2.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 3,
          "name": "Own it!",
          "price": 69.99,
          "description": "A stylish jacket to keep you warm on cool spring evenings.",
          "img": "images/images-products/spring3.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 4,
          "name": "Own it!2",
          "price": 69.99,
          "description": "A stylish jacket to keep you warm on cool spring evenings.",
          "img": "images/images-products/spring4.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 5,
          "name": "Beach Day",
          "price": 69.99,
          "description": "A stylish jacket to keep you warm on cool spring evenings.",
          "img": "images/images-products/spring5.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 6,
          "name": "Pinkish",
          "price": 69.99,
          "description": "A stylish jacket to keep you warm on cool spring evenings.",
          "img": "images/images-products/spring6.jpg",
          "destination":"product-page.html"
        }
      ],
      "Summer": [
        {
          "id": 7,
          "name": "Beach Shorts",
          "price": 29.99,
          "description": "Comfortable and lightweight shorts ideal for the summer beach.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 8,
          "name": "Summer T-shirt",
          "price": 19.99,
          "description": "A breathable cotton T-shirt for hot summer days.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        }
      ],
      "Winter": [
        {
          "id": 9,
          "name": "Winter Coat",
          "price": 129.99,
          "description": "A thick, insulated coat to keep you warm during the winter months.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 10,
          "name": "Woolen Sweater",
          "price": 89.99,
          "description": "A cozy woolen sweater for those chilly winter days.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        }
      ],
      "Monsoon": [
        {
          "id": 11,
          "name": "Raincoat",
          "price": 59.99,
          "description": "A waterproof raincoat to stay dry during the rainy season.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        },
        {
          "id": 12,
          "name": "Waterproof Boots",
          "price": 79.99,
          "description": "Durable waterproof boots for walking through wet conditions.",
          "img": "images/images-products/spring1.jpg",
          "destination":"product-page.html"
        }
      ]
    }
  }
  const allproduct=document.getElementById('all-product-page');
  for (const category in data.categories) {
    console.log(`Category: ${category}`);
    data.categories[category].forEach(product => {
      allproduct.innerHTML+=`<div class='all-product'><a href="https://www.google.co.in/">

      <img src='${product.img}'>
        <h4 id="item-name">${product.name}</h4> 
       <p id="item-descryption">${product.price}</p>
       ${product.description}</a></div>`;
      // console.log(`ID: ${product.id} ${product.name}${product.price}`);
      // console.log(`Name: ${product.name}`);
      // console.log(`Price: ${product.price}`);
      // console.log(`Description: ${product.description}`);
      // console.log(`Image: ${product.img}`);
      // console.log('--------------------------');
    });
  }

// script for each page.
const springproducts=document.getElementById("spring-page-content");
const winterproducts=document.getElementById("winter-page-content");
const summerproducts=document.getElementById("summer-page-content");
const monsoonproducts=document.getElementById("monsoon-page-content");

for (const category in data.categories) {
  if (category==="Spring"){
    data.categories[category].forEach(product => {
      springproducts.innerHTML+=`<div class='all-product'><a href="https://www.google.co.in/">

      <img src='${product.img}'>
        <h4 id="item-name">${product.name}</h4> 
       <p id="item-descryption">${product.price}</p>
       ${product.description}</a></div>`;
    });
    

  }
  
}


