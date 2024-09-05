function cats (arr){
class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sound(){
        console.log(`${this.name}, age ${this.age} says Meow`);
        
    }
}
for (let i = 0; i<arr.length; i++){
    let catInfo = arr[i].split(` `);
    let [name, age] = [catInfo[0], catInfo[1]]
    let cat = new Cat(name,age);
    cat.sound()
}
    console.log();
    
}
cats(['Mellow 2', 'Tom 5'])