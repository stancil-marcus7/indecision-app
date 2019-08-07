import React, {Component} from 'react';


class Person extends Component{
    constructor(name = 'Anonymous', age ='23'){
        super();
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hi. I am ' + this.name + '!';
        //We're using a template string. This will read 'This is Marcus'
        return `This is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }

    render(){
        return (
            <div></div>
        )
    }
    
}

//Nested class of Person
class Student extends Person{
    constructor(name,age,major){
        //Getting name and age from Person component
        super(name,age);
        this.major = major; 
    }

    hasMajor(){
        //Returns if the student has a major or not (truthy value)
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, homeLocation){
        super(name)
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let description = `Hi, I'm ${this.name}.`

        if (this.homeLocation){
            description += `I'm visiting from ${this.homeLocation}.`
        }
        return description;
    }
}
const me = new Traveler ('Marcus', 'Fort Washington');
console.log(me.getGreeting());

const other = new Traveler(undefined, 'Nowhere');
console.log(other.getGreeting());


export default Person;