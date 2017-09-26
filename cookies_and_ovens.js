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

'use strict'
class Cookie {
  constructor() {
    this.name = ''
    this.status = 'mentah'
    this.level = [] //tingkat kematangan
  }
}

class ChocoCookie extends Cookie {
  constructor(name) {
    super()
    this.name = name
    this.level = [5, 10, 15]
  }
}

class NutCookie extends Cookie {
  constructor(name) {
    super()
    this.name = name
    this.level = [20, 25, 50]
  }
}

class CheeseCookie extends Cookie {
  constructor(name) {
    super()
    this.name = name
    this.level = [10, 20, 35]
  }
}


class Cook {
  bake(name, bakeTime) {
    let cookie = {}
    switch (name) {
      case 'cokelat':
        cookie = new ChocoCookie(name)
        break
      case 'kacang':
        cookie = new NutCookie(name)
        break
      case 'keju':
        cookie = new CheeseCookie(name)
        break
    }

    for (let i = 5; i <= bakeTime; i += 5) {
      if (i > cookie.level[2]) {
        cookie.status = 'hangus'
      } else if (i > cookie.level[1]) {
        cookie.status = 'selesai'
      } else if (i > cookie.level[0]) {
        cookie.status = 'hampir matang'
      }

      console.log('Kue', cookie.name, 'menit ke', i, ':', cookie.status);
    }
  }
}

let cook = new Cook()
cook.bake('cokelat', 20)
cook.bake('keju', 20)
cook.bake('kacang', 20)
