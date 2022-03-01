function getAccess() {

    if (this.access == false) {
        console.log("Sorry, you don't have access,", this.firstName + ' ' + this.lastName)
    } else { console.log("Access granted, welcome", this.firstName + ' ' + this.lastName) };

}

const guest = {
    firstName: "John",
    lastName: "Konor",
    access: false,
}

const admin = {
    firstName: "Bob",
    lastName: "Morley",
    access: true,
}

getAccess.call(guest);
getAccess.call(admin);

// console.log(guest.getAccess()); // "Sorry, you don't have access, John Konor"
// console.log(admin.getAccess()); // "Access granted, welcome Bob Morley"

// function getAccess() {

//     if (this.access == false) {
//         console.log("Sorry, you don't have access,", this.firstName + ' ' + this.lastName)
//     } else { console.log("Access granted, welcome", this.firstName + ' ' + this.lastName) };

// }

// const guest = {
//     firstName: "John",
//     lastName: "Konor",
//     access: false,
//     getAccess: function getAccess() {

//         if (this.access == false) {
//             console.log("Sorry, you don't have access,", this.firstName + ' ' + this.lastName)
//         } else { console.log("Access granted, welcome", this.firstName + ' ' + this.lastName) };

//     }

// }

// const admin = {
//     firstName: "Bob",
//     lastName: "Morley",
//     access: true,
//     getAccess: function getAccess() {

//         if (this.access == false) {
//             console.log("Sorry, you don't have access,", this.firstName + ' ' + this.lastName)
//         } else { console.log("Access granted, welcome", this.firstName + ' ' + this.lastName) };

//     }
// }

// getAccess.call(guest);
// getAccess.call(admin);

// console.log(guest.getAccess()); // "Sorry, you don't have access, John Konor"
// console.log(admin.getAccess()); // "Access granted, welcome Bob Morley"