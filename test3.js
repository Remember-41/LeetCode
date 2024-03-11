class Parent {
    constructor(name, play){
        this.name = "parent";
        this.play = [1];
    }   
}
class Child extends Parent{
    constructor(name,play){
        super(name,play);
        this.name = name;
    }
}

const child1 = new Child('yh');
const child2 = new Child();
child1.play.push(2)
console.log(child2.play);
console.log(child1.name)