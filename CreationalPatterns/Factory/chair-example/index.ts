interface IChairProduct {
	chairType: string
}

class ConcreteChair implements IChairProduct {
	chairType=''
}

class ConcreteSmallChair extends ConcreteChair {
	constructor(){
		super()
		this.chairType= "Small Chair"
	}
}


class ConcreteMediumChair extends ConcreteChair {
	constructor() {
		super()
		this.chairType="Medium Chair"
	}
}

class ConcreteLargeChair extends ConcreteChair {
	constructor(){
		super()
		this.chairType= "Large Chair"
	}
}


class ChairFactory {
	static createChair(chair: string) {
		switch(chair){
			case 'Create Small':
				return new ConcreteSmallChair();
		
			case 'Create Medium':
				return new ConcreteMediumChair();
			case 'Create Large':
				return new ConcreteLargeChair();
			default:
				return new ConcreteSmallChair();
		}
	}
}

const myChair = ChairFactory.createChair(process.argv[2]);
console.log(myChair.chairType)
