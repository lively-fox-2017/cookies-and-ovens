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
var fs = require('fs')

class Cookie {
    constructor(nama,ingredients,time,oven) {
        this.name = nama
        this.ingredients = this.amount(ingredients)
        this.manis = this.has_sugar(this.amount(ingredients))
        this.bakingTime = time
        this.limit = oven
        this.status = this.bake(time,oven)
    }

    amount(input) {
        input.split(',')
        var required = []
        var ingarr = []
        var hasil = []
        var categorized = input.split(',')
        for(var i = 0; i < categorized.length; i++) {
            required.push(categorized[i].split(':'))
        }
        for(var j = 0; j < required.length; j++) {
            let temp = new Ingredients(required[j][0],required[j][1])
            hasil.push(temp)
        }

        // console.log(ingarr)
        return hasil
    }

    has_sugar(input) {
        var manis = false
        for(var i = 0; i < input.length; i++) {
            // for(var j = 0; j < input[i].length; j++) {
                if(input[i].ingredient === ' sugar') {
                    manis = true
                    break
                }
            // }
        }
        return manis
    }

    bake(time,oven) {
        var status ="";
        var hasil = []
        for(var i = 0; i < oven; i+= 5) {
            if(i <= time - 10) {
                status = "Mentah"
            } else if (i <= time -5 && i > time - 10) {
                status = "Hampir Matang"
            } else if (i === time) {
                status = "Matang"
            } else if (i > time) {
                status = "Hangus"
            }
            hasil.push(`${this.name} , menit ke ${i}: ${status}`)
        }
        return hasil
    }
}

class Ingredients {
    constructor(name,ingredients) {
        this.amount = name;
        this.ingredient = ingredients
    }
}
class CookieFactory {
    static create(options,limit) {
        let kuePesanan = []
        let statuses = []
        for(var i = 0; i < options.length; i++) {
            if(options[i][0] === 'peanut butter ') {
               let pinat = new Cookie(options[i][0],options[i][1],30,limit)
               kuePesanan.push(pinat)
            } else if (options[i][0] === 'chocolate chip ') {
                let choco = new Cookie(options[i][0],options[i][1],20,limit)
                kuePesanan.push(choco)
            } else if (options[i][0] === 'chocolate cheese ') {
                let chocochis = new Cookie(options[i][0],options[i][1],35,limit)
                kuePesanan.push(chocochis)
            } else if (options[i][0] === 'chocolate butter ') {
                let chocolumer = new Cookie(options[i][0],options[i][1],20,limit)
                kuePesanan.push(chocolumer)
            }
        }
        return kuePesanan
    }
    static cookieRecommendation(day, options) {
        var free = []
        this.create(options)
        for(var i = 0; i < options.length; i++) {
            if(this.create(options)[i].manis === false) {
                free.push(this.create(options)[i])
            }
        }
        return  free
    }
}

let a = fs.readFileSync('./cookies.txt').toString().split(/\n/)
let arr = []
for (var i=0; i<a.length; i++) {
    arr.push(a[i].split('='))
}

var kue = CookieFactory.create(arr,30)
console.log(kue)
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday',arr)
console.log('sugar free cookies are :')
for (var i=0; i<sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}
console.log()
// console.log(CookieFactory.cookieRecommendation('hari', arr))