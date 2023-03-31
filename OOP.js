var human = /** @class */ (function () {
    function human() {
        this.name = '';
        this.age = '';
    }
    human.prototype.sayhello = function () {
        return "Hello I'm " + this.name + " and " + this.age + " years old.";
    };
    return human;
}());
var user1 = new human();
user1.name = 'Mikey';
user1.age = '20';
console.log(user1.sayhello());
