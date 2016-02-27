// var navShop = document.createElement('nav')
// 	navShop.className= 'navbar navbar-inverse navbar-fixed-top'
// var ulist = document.createElement('ul')
// var list1 = document.createElement('li')
// var list2 = document.createElement('li')
// var list3 = document.createElement('li')
// var list4 = document.createElement('li')
// var list5 = document.createElement('li')

// var listText1 = document.createTextNode('CLOTHING')
// list1.appendChild(listText1)

// document.getElementById('body').appendChild(list1)





function shoes (name, size, color, stock, image) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.stock = stock;
	this.image  = image;
}

var boots = []

var mayPort = new shoes ('Mayport', '8-14', 'cream', 10, 'img/mayport.png')
var seneca = new shoes ('Seneca', '6.5-11', 'brown', 35, 'img/seneca.png')
var timberland = new shoes ('Timberland', '7-13.5', 'Dark Yellow', 22, 'img/timberland2.png')
var reebok = new shoes ('Reebok', '6-14', 'white/red', 30, 'img/reebok.png')
var vans = new shoes ('Vans', '9-12', 'brown/blue', 5, 'img/vans.png')
var vincent = new shoes ('Vincent', '8.5-12', 'gray', 55, 'img/vincent.png')


boots.push(timberland)
boots.push(mayPort)
boots.push(seneca)
boots.push(reebok)
boots.push(vans)
boots.push(vincent)





for(i = 0; i < boots.length; i++) {
	var bootName = document.createTextNode(boots[i].name)
	var bootSize = document.createTextNode("Available size: " + boots[i].size)
	var bootColor = document.createTextNode("Color: " + boots[i].color)
	var bootStock = document.createTextNode("In stock: " + boots[i].stock)
	var bootButton = document.createTextNode("Select!")
	var bootImage = boots[i].image

	var newCol= document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var bName = document.createElement("H2")
	var bSize = document.createElement("H5")
	var bColor = document.createElement("H5")
	var bStock = document.createElement("H5")
	var select = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	bName.appendChild(bootName)
	bSize.appendChild(bootSize)
	bColor.appendChild(bootColor)
	bStock.appendChild(bootStock)
	select.appendChild(bootButton)
	select.className = "btn btn-primary btn-lg"
	image.src = bootImage
	image.className = "img-responsive"

	newCol.className = "col-md-4 popUp"
	newDiv.className = "shoe bootName" + i + " thumbnail"
	newDiv.appendChild(bName)
	newDiv.appendChild(image)
	newDiv.appendChild(bSize)
	newDiv.appendChild(bColor)
	newDiv.appendChild(bStock)
	newDiv.appendChild(select)
	newCol.appendChild(newDiv)

	document.getElementById('shoes').appendChild(newCol)
}


var navShop = document.createElement('nav')
	navShop.className= 'navbar navbar-inverse navbar-fixed-top'
var ulist = document.createElement('ul')
var list1 = document.createElement('li')
var list2 = document.createElement('li')
var list3 = document.createElement('li')
var list4 = document.createElement('li')
var list5 = document.createElement('li')

var listText1 = document.createTextNode('CLOTHING')
list1.appendChild(listText1)

document.getElementById('body').appendChild(list1)
