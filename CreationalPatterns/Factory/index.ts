// The Factory Pattern

interface IProduct {
	name: string
}

class ConcreteProduct implements IProduct {
 name = ''
}

class ConcreteProductA extends ConcreteProduct {
	constructor(){
		super()
		this.name = 'Concrete Product A'
	}
}

class ConcreteProductB extends ConcreteProduct{
	constructor(){
		super()
		this.name = 'Concrete Product B'
	}
}

class ConcreteProductC extends ConcreteProduct{
	constructor(){
		super()
		this.name = 'Concrete Product C'
	}
}


class Creator {
	static createObject(property: string){
		switch(property){
			case 'Create A':
				return new ConcreteProductA()
			case 'Create B':
				return new ConcreteProductB()
			case 'Create C':
				return new ConcreteProductC()
			default: 
				return new ConcreteProductA()
		}
		
	}
}

//THE DEVELOPER
const PRODUCT = Creator.createObject('Create B');
console.log(PRODUCT.name)
