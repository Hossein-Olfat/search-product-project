const containerproduct =document.querySelector('.product-container');
const Searchs =document.getElementById("search");
const btns =document.querySelectorAll('.btn');


const items =[
    { id:1,
    title:"watch product",
    class:"watch",
    price:10.99,
    image:"1.png"
    },

    {
    id:2,
    title:"watch product",
    class:"watch",
    price:14.99,
    image:"2.png"
    },

    {
    id:3,
    title:"shirt product",
    class:"shirt",
    price:7.99,
    image:"3.png"
    },

    {
    id:4,
    title:"shirt product",
    class:"shirt",
    price:11.99,
    image:"4.png"
    },
    
    {
    id:5,
    title:"shirt product",
    class:"shirt",
    price:4.99,
    image:"5.png"
    },
    
    {
    id:6,
    title:"gown product",
    class:"gown",
    price:23.99,
    image:"6.png"
    },
    
    {  
    id:7,
    title:"shirt product",
    class:"shirt",
    price:50.99,
    image:"7.png"
    },

    {
    id:8,
    title:"shirt product",
    class:"shirt",
    price:120.99,
    image:"8.png"
    },

    {
    id:9,
    title:"jewelry product",
    class:"jewelry",
    price:3.99,
    image:"9.png"
    },

    {
    id:10,
    title:"jewelry product",
    class:"jewelry",
    price:18.99,
    image:"10.png"
    },

    {
    id:11,
    title:"jewelry product",
    class:"jewelry",
    price:5.99,
    image:"11.png"
    },
    
    {
    id:12,
    title:"jewelry product",
    class:"jewelry",
    price:1.99,
    image:"12.png"
    },

    {
    id:13,
    title:"watch product",
    class:"watch",
    price:8.99,
    image:"13.png"
    },
];
let search_value="";
let resultsearch=[...items];




class app{
    constructor(){

        Searchs.addEventListener('input',(event)=>{
            this.searching(controling_spaces(event));
            this.showproduct(resultsearch);
        });
           

        btns.forEach((btn)=>{
            btn.addEventListener('click',(event)=>{
                console.log(event.target.textContent);
               const choose =this.chooseproduct(event.target.textContent);
               this.showproduct(choose);
            })
        });

    }
    searching(search){
        search_value=search;
        let product_searching =items;
        for(let i=0;i<search_value.length;i++){
            product_searching=product_searching.filter((product)=>{return product.title.toLocaleLowerCase()[i]===search_value.toLocaleLowerCase()[i]}).length>=1 ? product_searching.filter((product)=>{return product.title.toLocaleLowerCase()[i]===search_value.toLocaleLowerCase()[i]}) : product_searching=[];
        }
         resultsearch=product_searching;
    }
     
    showproduct(productsall){
        containerproduct.innerHTML="";
        
        productsall.forEach((product)=>{
            const created=document.createElement('div');
        created.classList.add('product');
        created.innerHTML=`<div class="img-container"><img src="${product.image}" alt="${product.image}"></div>
        <div class="describtion-product">
              <span>${product.price}$</span>
              <p>${product.title}</p>
          </div>`;
          containerproduct.appendChild(created);
        });
        return containerproduct;
    }
    chooseproduct(value){
       console.log(resultsearch); 
       let choose = resultsearch.filter((product)=>{const _choose = value==="All" ? resultsearch : product.title.split(" ")[0]===value; return _choose;});
       return choose;
    }
      

}

function controling_spaces(event){

    const _event=event.target.value.trim();
    const text=_event.split("").filter((value,index)=>{return value!==" " || _event[index+1]!==" "}).join("");
    return text;
}

document.addEventListener("DOMContentLoaded",()=>{
    const _app =new app;
    _app.showproduct(resultsearch);
});
   




