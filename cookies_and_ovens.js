// Answer These Questions:
//
// - What are essential classes?
// - Class Cookie sebagai parent class dan Class CookieFactory yang merefactor seluruh proses
// - What attributes will each class have?
// - nama kue dan lamanya kue dimasak
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
"use strict"

class Cookie {
	constructor() {
		this.name = 'Kue'
		this.bake_time = 0
		this.status = ['mentah', 'hampir matang', 'selesai', 'hangus']
	}
}

class KueCoklat extends Cookie {
	constructor() {
		super()
		this.time = 20 
		this.name = 'Kue Coklat'
	}
}

class KueKacang extends Cookie {
	constructor(){
		super() 
		this.name = 'Kue Kacang'
		this.time = 30
	}
}

class KueKeju extends Cookie{
	constructor(){
		super() 
		this.name = 'Kue Keju'
		this.time = 35
	}	
}

class CookieFactory {

	static cakeBake(input, cake){
		
		let i = 0
		let a = ''
		let b = 0

		if(cake === 'Kue Kacang'){
			a = new KueKacang()
		}

		if(cake === 'Kue Keju'){
			a = new KueKeju()
		}

		if(cake === 'Kue Coklat'){
			a = new KueKacang()
		}

				while(i<input){
					console.log(a.name +', menit ke '+i+' : '+a.status[b])
				
					if(i>=15 && i<a.time){
					b=1
					}else
						if(i === a.time){
							b=2
						}else
							if(i > a.time){
								b=3
							}
					i+=5
				}
	}
}

let tes = CookieFactory.cakeBake(50, 'Kue Kacang')
console.log(tes)