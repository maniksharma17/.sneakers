console.log("hello")
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "AIR FORCE",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "JORDAN",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "BLAZER",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "CRATER",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "HIPPIE",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) =>{
    item.addEventListener("click",()=>{
        //changes the slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        //changes the choosen product
        choosenProduct = products[index];

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.background= choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size, index)=>{
            size.style.backgroundColor = "transparent";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
        
    });
})

const productButton = document.querySelector(".buyButton")
const closeButton = document.querySelector(".close")
const payment = document.querySelector(".payment")
const verified = document.querySelector(".flashMsg")
const checkoutBtn = document.querySelector(".checkoutBtn")
const closeVerified = document.querySelector(".closeVerified")

productButton.addEventListener("click", ()=>{
  payment.style.display = "flex";
})

closeButton.addEventListener("click", ()=>{
  payment.style.display = "none";
})

checkoutBtn.addEventListener("click", ()=>{
  verified.style.display = "flex";
  payment.style.display = "none";
})

closeVerified.addEventListener("click", ()=>{
  verified.style.display = "none";
})
