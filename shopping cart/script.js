 let data = [
	{	id:"product01",
		name:"AEROREADY SHIRT",
		img:"img/t-shirt.jpeg",
		price:"$850"
	},
	{
		id:"product02",
		name:"BLUETOOTH",
		img:"img/product-2.jpeg",
		price:"$2500"
	},
	{
		id:"product03",
		name:"HOODED PARKA",
		img:"img/product-3.jpeg",
		price:"$1550"
	},
	{
		id:"product04",
		name:"METAL BOTTLE",
		img:"img/product-4.jpeg",
		price:"$700"
	},
	{
		id:"product05",
	    name:"METAL SUNGLASS",
		img:"img/product-5.jpeg",
		price:"$430"
	},
	{
		id:"product06",
		name:"HEAD CAP",
		img:"img/product-6.jpeg",
		price:"$550"
	},
	{
		id:"product07",
		name:"BACK HAT",
		img:"img/product-7.jpeg",
		price:"$930"
	},
	{
		id:"product08",
		name:"ULTRABOOST",
		img:"img/product-8.jpeg",
		price:"$4630"
	}
]

	let mainContainer=document.querySelector('.shop-container');

//createElement
	data.forEach(function(obj, indx){
	
	let div=document.createElement('div');
		div.className="product-box";
	
	let img = document.createElement('img');
		img.setAttribute("src",obj.img);
		img.className ="box-img-1";
		
	let title = document.createElement('h2');
		title.innerText=obj.name;
		title.className="pro-name"
		
	let price=document.createElement('span');
		price.innerText=obj.price;
		price.className="pro-price";	
	let addCart = document.createElement("BUTTON");
		addCart.className = "icofont-shopping-cart addBtn "+ " addcart-"+obj.id;
		addCart.setAttribute("data-addcart", obj.id)
		
	div.append(img,title,price,addCart);
	mainContainer.append(div);
    })
	
// add cart
	let addCartBtn = document.getElementsByClassName("addBtn");
	for(let x=0;x<addCartBtn.length;x++){
		addCartBtn[x].addEventListener("click",addCart, false)
	}

//add array function
	let arrayItem =[],newProduct;
	function addCart(add){
	let getaData = data.find(add => add.id == this.dataset["addcart"])
	let parentEle = this.parentNode;
	let title = parentEle.querySelector(".pro-name").innerText;
	let img = parentEle.querySelector(".box-img-1").src;
	let price = parentEle.querySelector(".pro-price").innerText;
	parentEle.getElementsByClassName("addBtn")[0].setAttribute("disabled", true);
	
	additem(getaData);

	let proCount =document.querySelector(".order-number");
	proCount.innerText = arrayItem.length;
    }
	console.log(arrayItem)
	
//add div add and remove
	let myCart = document.querySelector(".icofont-shopping-cart");
	let cartBox = document.querySelector(".card-items");
	let cartClsBtn = document.querySelector("#close-btn");

	myCart.addEventListener("click",()=>{
		cartBox.classList.add("card-active")
	});
	cartClsBtn.addEventListener("click",()=>{
		cartBox.classList.remove("card-active")
	})
	
//add small cart
	var cartDiv = document.querySelector(".card-items-container");
	
    function additem(getData){
	arrayItem.push(getData);
	
	let cartdiv = document.querySelector(".cart-container")

//create Elements
	let main = document.createElement("div");
	let cartdiv1 = document.createElement("div");
	let cartimg = document.createElement("img");
	let cartdiv2 = document.createElement("div");
	let price = document.createElement("span");
	let head = document.createElement("h3");
	let totalPr = document.createElement("h4");
	let deleteBtn = document.createElement("BUTTON");
	let inputBox = document.createElement("input")

//create className	
	main.className ="cart-box";
	cartdiv1.className = "img-box";
	cartimg.className ="cart-img";
	cartdiv2.className = "price-box"
	price.className = "pro-name";
	head.className = "price-amt";
	totalPr.className = "price-amt1";
	inputBox.className = "num-input";
	deleteBtn.className ="del-Btn icofont-ui-delete";
	deleteBtn.setAttribute("data-cart", getData.id);
	inputBox.setAttribute("type","number")
//inputs	
	cartimg.src = getData.img;
	price.innerText = getData.name;
	head.innerText = getData.price;
	totalPr.innerText = getData.price;
	console.log(totalPr)

//append div		
	cartdiv1.append(cartimg);
	cartdiv2.append(price,head,totalPr,inputBox)
	main.append(cartdiv1,cartdiv2,deleteBtn)
	cartdiv.appendChild(main)

//add small cart delete	
	let deleteCart = document.getElementsByClassName("del-Btn");
	for(let i = 0; i <deleteCart.length; i++ ){
		deleteCart[i].addEventListener("click",deleteCartItems);
	 }
	
	function deleteCartItems(e){
		this.parentNode.remove(); 
		document.getElementsByClassName("addcart-"+this.dataset["cart"])[0].removeAttribute("disabled");
	
	}
	let quantity=document.querySelectorAll(".num-input");
	quantity.forEach((i)=>{
		i.addEventListener("click",quantityTotal);
	})
}
let totalEl=0;
let qun;
function quantityTotal(qn){
	let main=qn.target.parentNode;
		let title=main.querySelectorAll(".price-amt")[0];
		let quantity=main.querySelectorAll(".num-input")[0];
		qun=parseInt(quantity.value);
	if(quantity.value > 0){
		let priceRateTo=main.querySelectorAll(".price-amt1")[0];
		let priceAmt=parseInt(title.innerText.replace("$",""));
		totalEl= (parseInt(qun)*priceAmt);
		// let priceAmtTol=totalEl;
		priceRateTo.innerText=totalEl;
	}
	
console.log(typeof qun)

}