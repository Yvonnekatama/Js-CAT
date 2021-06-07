var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();
 //This is a nested function and the ability of it to access and display the attributes in func  is what we call closures
 //The console statements in func will all run and diplay lovelace except from the third one because
//after assigning this to a variable called self we get to acces the name outside the outer function and we are trying to access the value of name using this
//We use this to access the value of of attributes inside a method or methods
//
