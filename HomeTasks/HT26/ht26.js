const quest = {
    firstName: "John",
    lastName: "Konor",
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
}

const admin = {
    firstName: "Bob",
    lastName: "Morley",
}

let fullName = quest.getFullName.bind(admin);

console.log(quest.getFullName.call(admin)); // "Bob Morley"
console.log(quest.getFullName.apply(admin)); // "Bob Morley"
console.log(fullName()); // "Bob Morley"