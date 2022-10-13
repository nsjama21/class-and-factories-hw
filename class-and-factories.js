class Hamster {
    constructor(nameParam) {
        this.owner = ""
        this.name = nameParam
        this.price = 15
    }

    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }

}

class Person {
    constructor(personNameParam) {
        this.personName = personNameParam
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0

    }

    getName() {
        return this.personName

    }

    getAge() {
        return this.age

    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`Hello, I am ${this.name}!`)
    }

    eat() {
        this.weight++
        this.mood++
    }

    exercise() {
        this.weight--
    }

    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()

    }


}

const timmy = new Person("Timmy")
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

// console.log(timmy)

timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

// console.log(timmy)

timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()


const gus = new Hamster("Gus")
gus.owner = "Timmy"
// console.log(gus.owner)

timmy.buyHamster(gus)

timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()




timmy.eat()
timmy.eat()

timmy.exercise()
timmy.exercise()

console.log(timmy)



