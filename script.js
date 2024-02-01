const menu =[
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYp4vSWK1ESj70OsY0cyGlevRqqn6-V3d0fA&usqp=CAU",
        price: 55.99,
        title: "Buttermik Pancake",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit veniam sed quis eligendi nulla incidunt, aliquam pariatur inventore quia consequatur, perferendis explicabo tenetur.",
        category:"breakfast"
    },
    {
        id: 2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDO83LPkJQSw0fw-glQJ5gDV4eCEWseI27Q&usqp=CAU",
        price: 13.99,
        title:"dinner double",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit veniam sed quis eligendi nulla incidunt, aliquam pariatur inventore quia consequatur, perferendis explicabo tenetur.",
        category:"lunch"
    },
    {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv2rHGRTszl7sc3oKOQPedGG5bhiXqOukHg&usqp=CAU",
        price: 10.99,
        title:"godzilla milkshake",
        desc:"An earth shaking HALF GALLON thick & creamy milk shake! Choose up to two ice cream flavors and bring your friends to help put it down!",
        category:"dinner"
    } ,
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfGM90lV_oAw7rq2qsHNcJsFfvPdWli0L1Q&usqp=CAU",
        price: 11.99,
        title:"jollof rice",
        desc:"Jollof rice is a staple in West African cuisine. It's made from rice, tomatoes, onions, peppers, and other seasonings—absolutely delicious!",
        category:"dinner"
    } ,
    {
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BZ2q0FQ-UN_16DiPy3zS2bXFk4Y36b_e3Q&usqp=CAU",
        price: 9.99,
        title:"fried rice",
        desc:"This easy fried rice recipe only takes 15 minutes to make, it's easy to customize with your favorite add-ins, and it's SO delicious!",
        category:"dinner"
    } ,
    {
        id:6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWuSaD1_PczmOM4Dpr0JRqGUoGKm-bGDZNA&usqp=CAU",
        price: 12.99,
        title:"fried chicken",
        desc:"A quick dredge of buttermilk and seasoned flour is the secret to this perfectly moist, crunchy Fried Chicken recipe.",
        category:"break fast"
    } ,
    {
        id:7,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrSfvXI6dMQGx4o91RM2L5Oe-RCo-E7Gxew&usqp=CAU",
        price: 10.99,
        title:"pop corn",
        desc:"An earth shaking HALF GALLON thick & creamy milk shake! Choose up to two ice cream flavors and bring your friends to help put it down!",
        category:"dinner"
    } ,
    {
        id:8,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1cXkpK97b86ZVjMmf_pwejz1oojOu2Yq1g&usqp=CAU",
        price: 7.99,
        title:"coack",
        desc:"Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. In 2013, Coke products were sold in over 200 countries worldwide",
        category:"Appetizer"
    } ,
    {
        id:9,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5STk_Uk3LMZRzBdImSSqVqNYjAQhxiGj9-Pr9CHHYqG4_aZDPscTR_32klifS-0sVrs&usqp=CAU",
        price: 5.99,
        title:"ice cream",
        desc:"Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice",
        category:"Appetizer"
    } 
];


const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function (item){
    
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
           ${item.desc}
          </p>
        </div>
      </article>`
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})













