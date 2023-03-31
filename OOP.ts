class human{
    name: string = '';
    age:string = '';

    sayhello(){
        return "Hello I'm " + this.name + " and " + this.age + " years old."
    }
}

const user1: any = new human();
user1.name = 'Mikey';
user1.age = '20';
console.log(user1.sayhello());
