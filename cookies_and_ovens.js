// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
"use strict"

class Cookie {
	constructor(name,ingredient) {
		this.name = name
		this.status = 'mentah'
		this.ingredients = ingredient
	}

	bake() {
		this.status = 'selesai dimasak'
	}
}

class PeanutButter extends Cookie {
	constructor(name, ingredient) {
		super(name, ingredient)
		this.peanut_count = 100
	}
}

class ChocolateChip extends Cookie {
	constructor(name, ingredient){
		super(name, ingredient) 
		this.choc_chip_count = 200
	}
}

class OtherCookie extends Cookie{
	constructor(name, ingredient){
		super(name, ingredient) 
		this.choc_chip_count = 150
	}	
}

class Ingredient {
	constructor(input1, input2){
		this.name = input1
		this.amount = input2
		this.has_sugar = false
	}
}

class CookieFactory {
	static create(option){
		this.input = option
		this.output = []
		let temp = []
		let temp1 = []
		let temp2 = []
		let temp3 =''
		let temp4 = []
		let a = 0

		for(let j=0;j<this.input.length;j++){
			temp[j]=this.input[j].split(',')
		}

		for(let k=0;k<this.input.length;k++){
			a=0;
			for(let i=1;i<temp.length;i++){
		 		temp3=temp[k][i]
		 		temp2=temp3.split(':')
		 		temp4[a]=new Ingredient(temp2[0],temp2[1])
		 		a++ 
			}
			temp1[k]=temp4
			temp4=[]
		}

		console.log(temp1[0])

		
		for(let i = 0;i<this.input.length;i++){
			if(temp[i][0]==='peanut butter'){
				this.output[i] = new PeanutButter(temp[i][0],temp1[i])
			}else
				if(temp[i][0]==='chocolate chip'){
					this.output[i] = new ChocolateChip(temp[i][0],temp1[i])
				}else{
					this.output[i] = new OtherCookie(temp[i][0],temp1[i])
				}
		}


		return this
	}
}
var fs = require('fs')
// var input = fs.readFileSync('cookies.txt').toString().split('\n')
var input = fs.readFileSync('ingredient.txt').toString().split('\n')


const util = require('util')
let batch_of_cookies = CookieFactory.create(input)
console.log(util.inspect(batch_of_cookies, false, null))
