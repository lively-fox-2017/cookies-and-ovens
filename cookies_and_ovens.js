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
	constructor(name) {
		this.name = name
		this.status = 'mentah'
	}

	bake() {
		this.status = 'selesai dimasak'
	}
}

class PeanutButter extends Cookie {
	constructor(name) {
		super(name)
		this.ingredients = []
		this.peanut_count = 100
	}
}

class ChocolateChip extends Cookie {
	constructor(name){
		super(name)
		this.ingredients = [] 
		this.choc_chip_count = 200
	}
}

class OtherCookie extends Cookie{
	constructor(name){
		super(name)
		this.ingredients = [] 
		this.choc_chip_count = 150
	}	
}

class CookieFactory {
	static create(option){
		this.input = option
		this.output = []
		 
		for(let i = 0;i<this.input.length;i++){
			if(this.input[i]==='peanut butter'){
				this.output[i] = new PeanutButter(this.input[i])
			}else
				if(this.input[i]==='chocolate chip'){
					this.output[i] = new ChocolateChip(this.input[i])
				}else{
					this.output[i] = new OtherCookie(this.input[i])
				}
		}
		return this
	}
}
var fs = require('fs')
var input = fs.readFileSync('cookies.txt').toString().split('\n')

let batch_of_cookies = CookieFactory.create(input)
console.log(batch_of_cookies)
