// // // // // // // //Assignment Solution
// // // // // // // // // // // // // // // // // // //  Task 1
// // // // // // // // // // // // // // // console.log ("hello world");
// // // // // // // // // // // // // // // // // // // //  // // // // // //Task2 
// // // // // // // // // // // // // // // //Personal Message: Store a person's name in a variable, and print a massage to that person.
// // // // // // // // // // // // // // // //Your massage should be simple, such as,"Hello Eric, would you like to learn some python today?"
// // // // // // // // // // // // // // // let personName: string = "Eric";
// // // // // // // // // // // // // // // console.log(`Hello ${personName},would you like to learn some python in today?`);
// // // // // // // // // // // // // // // //Task 3
// // // // // // // // // // // // // // //Name Cases: Store a person's in a variable, and then print that person's name in lowercase
// // // // // // // // // // // // // // let personName :string = "Ayyan Anabia";
// // // // // // // // // // // // // // //in lowercase
// // // // // // // // // // // // // // console.log("lowercase:", personName.toLowerCase());
// // // // // // // // // // // // // // //in uppercase
// // // // // // // // // // // // // // console.log("uppercase:",personName.toUpperCase());
// // // // // // // // // // // // // // //title case
// // // // // // // // // // // // // // console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));
// // // // // // // // // // // // // // //Task 4
// // // // // // // // // // // // // //Famous Quote: Find a quote from a famous person you admire.Print the quote and the name of
// // // // // // // // // // // // // //its author. Your output should look something like the following, including the quotation 
// // // // // // // // // // // // // //marks:
// // // // // // // // // // // // // //Albert Einstein once said, "A persome who never made a mistake never tried anything new."
// // // // // // // // // // // // // let quote: string = "A person who never made a mistake never tried anything new.";
// // // // // // // // // // // // // let author: string= "Albert Einstein";
// // // // // // // // // // // // // console.log('${author} once said, "${quote}"');
// // // // // // // // // // // // // //Task 5
// // // // // // // // // // // // //Famous Quote 2: Repeat Exercise 4, but this time store the famous person's name in a variable called famous_person
// // // // // // // // // // // // //Then compose your message and store it in a new variable called message. Print your message.
// // // // // // // // // // // // let famous_person: string = "Albert Einstein";
// // // // // // // // // // // // let message: string = `${famous_person} once said,"${quote}"`;
// // // // // // // // // // // // console.log(message);
// // // // // // // // // // // //Task 6
// // // // // // // // // // // //Stripping Names: Store a person's name, ad include some whitespace characters at the 
// // // // // // // // // // // //beginning and end of the name. Make sure you use each character combination,"\t" and "\n",
// // // // // // // // // // // //at least once. Print the name once, so that whitespace around the name is displayed.
// // // // // // // // // // // let personName: string = "\t\n Jhon Doe \n\t"
// // // // // // // // // // // console.log ("Original:", personName);
// // // // // // // // // // // console.log("Stripped:", personName.trim());
// // // // // // // // // // //Task 7, 8
// // // // // // // // // // //Namber Eight: Write addition, subtraction, multiplication, and division opperations that each result in the number 8
// // // // // // // // // // console.log(5 + 3);
// // // // // // // // // // console.log(10-2);
// // // // // // // // // // console.log(4*2);
// // // // // // // // // // console.log(16/2);
// // // // // // // // // // //Task 9
// // // // // // // // // //Favorite Number: Store your favorite number in a variable. Then, using that variable,create a messsage that reveals your favorite number.
// // // // // // // // // let favoriteNumber: number = 4;
// // // // // // // // // console.log(`My favourite number is ${favoriteNumber}.`);
// // // // // // // // // //Task 10
// // // // // // // // //Adding Comments: Choose two of the programs you've written, and add at least one comment to each
// // // // // // // // //author:[Ayyan Anabia]
// // // // // // // // //date:[tuesday ,Feburary 20 , 2024]
// // // // // // // // //task 9: printing my favorite number.
// // // // // // // // let favoriteNumber: number = 9;
// // // // // // // // //reveling my favorite number in a message formate. 
// // // // // // // // console.log(`My favourite number is ${favoriteNumber}.`);
// // // // // // // //Task 11
// // // // // // // let names : string  [] = ["Ayyan", "Anabia", "Ahmer","Afshan"]
// // // // // // // console.log(names[0]);
// // // // // // // console.log(names[1]);
// // // // // // // console.log(names[2]);
// // // // // // // console.log(names[3]);
// // // // // // //Task 12
// // // // // // let names : string  [] = ["Ayyan", "Anabia", "Sara","Ali"]
// // // // // // let message : string = "Do you like to play football?"
// // // // // // console.log(names[0] + " "+ message )
// // // // // // console.log(names[1] + " "+ message )
// // // // // // console.log(names[2] + " "+ message )
// // // // // // console.log(names[3] + " "+ message )
// // // // // //Task 13
// // // // // let vehicle : string [] = ["Honda civic","Mira","Toyota Corolla"];
// // // // // vehicle.map((items) => console.log(`I would like to own a ${items}`));
// // // // // //Task 14
// // // // let guestArr : string  [] = ["Ayyan", "Anabia","Ali"]
// // // //  guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
// // //  //Task 15
// // let guestArr : string[] = ["Ayyan", "Anabia","Sara", "Ali"];
// // let canNotAttend : string = "Sara"
// // // console.log(canNotAttend + " " "can not attend the dinner.")
// //)
// //Task 16

// const guest_names : string[] = ['Aliza' , 'Ayesha' , 'Hafsa']



// for(const guest_name of guest_names){
//     console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
// }


// // Removing the last guest and adding one new guest
// console.log('Unfortunately hafsa cant join us ')

// guest_names.pop()
// guest_names.push('Sara')

// for(const guest_name of guest_names){
//     console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
// }

// // inviting more friends
// console.log('Good News! We have a bigger dinner table . Inviting more friends to join us')


// guest_names.unshift('Faiza')

// guest_names.splice(2,0,'Mahnoor')

// guest_names.push('Maryam')

// console.log(guest_names)


// for(const guest_name of guest_names){
//     console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
// }


// // Shrinking Guest list

// console.log("Unfortunately, we can only invite two people for dinner.");



// const removedGuests: string[] = guest_names.splice(2);

// for(const guest_name of removedGuests){
//     console.log(`Sorry ${guest_name}, I cannot invite you.`)
// }

// for(const guest_name of guest_names){
//     console.log(`Hello ${guest_name} you are still invited`)
// }

// console.log(guest_names.splice(0,2))
// console.log(guest_names)

//Task 17

// // Initial list of guests
// let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// // Print message about only being able to invite two people
// console.log("Unfortunately, I can only invite two people for dinner.");

// // Remove guests until only two names remain
// while (guests.length > 2) {
//     const removedGuest: string = guests.pop()!;
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// // Print invitation to remaining two guests
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// }

// // Remove last two names
// guests.splice(0, guests.length);

// // Print empty list to confirm
// console.log("Final guest list:", guests);

//Task 18

// // Store the locations in an array
// let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Machu Picchu"];

// // Print the array in its original order
// console.log("Original Order:", placesToVisit);

// // Print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical Order:", [...placesToVisit].sort());

// // Show that the array is still in its original order
// console.log("Original Order:", placesToVisit);

// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// // Show that the array is still in its original order
// console.log("Original Order:", placesToVisit);

// // Reverse the order of the list
// placesToVisit.reverse();

// // Print the array to show that its order has changed
// console.log("Reversed Order:", placesToVisit);

// // Reverse the order of the list again
// placesToVisit.reverse();

// // Print the list to show it’s back to its original order
// console.log("Original Order:", placesToVisit);

// // Sort the array so it’s stored in alphabetical order
// placesToVisit.sort();

// // Print the array to show that its order has been changed
// console.log("Sorted Alphabetically:", placesToVisit);

// // Sort to change the array so it’s stored in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));

// // Print the list to show that its order has changed
// console.log("Sorted Reverse Alphabetically:", placesToVisit);

//Task 19
// Initial list of guests
// let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// // Print the number of people being invited to dinner
// console.log(`You are inviting ${guests.length} people to dinner.`);

// // Rest of the program logic...

//Task 20
// Array containing famous landmarks
// let landmarks: string[] = [
//   "Eiffel Tower",
//   "Great Wall of China",
//   "Taj Mahal",
//   "Statue of Liberty",
//   "Machu Picchu",];

// // Print the list of landmarks
// console.log("List of famous landmarks:");
// landmarks.forEach(landmark => {
//   console.log(landmark);
// });

//Task 21
//think of something you could store in Typescript Object. Write a program
//that creates Object containing these items.

// let person: {name: string, fname: string , age: number} = {name:"Ayyan", fname: "Male", age:15}
// console.log(person)

//Task 22

//let numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: Accessing an index that doesn't exist
//console.log(numbers[10]); // This will produce an index error

// Correcting the error
//console.log("Accessing index 10:", numbers[4]); // Correct index is 4, not 10

//Task 23
//let temperature: number = 25;
//let isSunny: boolean = true;
//let time: string = 'morning';
//let fruit: string = 'apple';
//let isWeekend: boolean = false;

// Test 1
// console.log("Is temperature greater than 20? I predict True.");
// console.log(temperature > 20);

// // Test 2
// console.log("Is it sunny outside? I predict True.");
// console.log(isSunny);

// // Test 3
// console.log("Is it morning time? I predict True.");
// console.log(time === 'morning');

// Test 4
// console.log("Is the fruit an apple? I predict True.");
// console.log(fruit === 'apple');

// Test 5
// console.log("Is it not the weekend? I predict True.");
// console.log(!isWeekend);

// Test 6
//console.log("Is temperature less than 20? I predict False.");
//console.log(temperature < 20);

// Test 7
//console.log("Is it raining outside? I predict False.");
//console.log(isSunny);

// Test 8
//console.log("Is it evening time? I predict False.");
//console.log(time === 'evening');

// Test 9
//console.log("Is the fruit a banana? I predict False.");
//console.log(fruit === 'banana');

// Test 10
//console.log("Is it the weekend? I predict False.");
//onsole.log(isWeekend);

//Task 24
// Tests for equality and inequality with strings
const string1: string = "ANABIA";
const string2: string = "ANABIA ZIA";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
const string3: string = "HELLO";
const string4: string = "hello";
console.log(string3.toLowerCase() === string4); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const bool1: boolean = true;
const bool2: boolean = false;
console.log(bool1 && bool2); // False
console.log(bool1 || bool2); // True

// Test whether an item is in an array
const array1: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
console.log(array1.includes(item1)); // True

// Test whether an item is not in an array
const item2: number = 6;
console.log(!array1.includes(item2)); // True
//Task 25

// let alien_color = "green"

// if (alien_color = "green")
// console.log( "you earn 5 points")

// let alien_color : string = "red"
// if (alien_color == "green")
// console.log("no output")

//Task 26

// let alien_color = "green"

// if (alien_color == "green") {
// console.log( "player just earned 5 points for shooting the alien.")
// } else {
// console.log("player just earned 10 points")
// }

// let alien_color = "red"

// if (alien_color == "green") {
// console.log( "player just earned 5 points for shooting the alien.")
// } else{
// console.log("player just earned 10 points")
//}

//Task 27

// let alien_color: string = "red"

// if (alien_color == "green") {
//     console.log("5 points")
// } else if (alien_color == "yellow") {
// } else {
//     console.log("15 points")
// } 

//Task 28
// let lage: number = 30;

// if (age < 2) {
//   console.log("The person is a baby.");
// }
// else if (age >= 2 && age < 4) {
//    console.log("The person is a toddler.");
// } 
//else if (age >= 4 && age < 13) {
//    console.log("The person is a kid.");
// } 
// else if (age >= 13 && age < 20) {
//    console.log("The person is a teenager.");
//} 
// else if (age >= 20 && age < 65) {
 //   console.log("The person is an adult.");
// }else {
 //   console.log("The person is an elder.");
//}

//Task 29

// let favourite_fruits : string [] = ["kivi", "orange", "apple" , "berry" , "peach"]

// if (favourite_fruits.includes("kivi")) {
//     console.log("kivi")
// }

// if(favourite_fruits.includes("apple")) {
//     console.log("apple")
// }

// if(favourite_fruits.includes("orange")) {
//      console.log("orange")
// }
// if(favourite_fruits.includes("berry")) {
//     console.log("you really like banana")
// }
// if(favourite_fruits.includes("peach")) {
//     console.log("you really like banana")
// }

//Task 30 

//let usernames: string[] = ['admin', 'john', 'alice', 'emma', 'alex'];

// for (let username of usernames) {
//   if (username === 'admin') {
//   console.log("Hello admin, would you like to see a status report?");
// } else {
//    console.log(`Hello ${username}, thank you for logging in again.`);
// }    

//Task 31
//let usernames: string[] = ['admin', 'john', 'alice', 'emma', 'alex'];

// Check if the list of users is not empty
//if (usernames.length > 0) {
// for (let username of usernames) {
// if (username === 'admin') {
//  console.log("Hello admin, would you like to see a status report?");
 // } else {
//  console.log(`Hello ${username}, thank you for logging in again.`);
//  }
// }
// } else {
// console.log("We need to find some users!");
// }

// Remove all usernames
// usernames = [];

// Check if the list of users is empty after removal
// if (usernames.length === 0) {
// console.log("We need to find some users!");
// } 

//Task 32
// let current_users: string[] = ['john', 'alice', 'emma', 'alex', 'mike'];
// let new_users: string[] = ['Mike', 'sarah', 'John', 'david', 'Emma'];

// for (let new_user of new_users) {
//     let is_unique: boolean = true;
//     for (let current_user of current_users) {
//         if (new_user.toLowerCase() === current_user.toLowerCase()) {
//             console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
//             is_unique = false;
//             break;
//         }
//     }
//     if (is_unique) {
//         console.log(`Congratulations! The username "${new_user}" is available.`);
//     }
// }

//Task 33 

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numbers) {
//     if (number === 1) {
//         console.log(`${number}st`);
//     } else if (number === 2) {
//         console.log(`${number}nd`);
//     } else if (number === 3) {
//         console.log(`${number}rd`);
//     } else {
//         console.log(`${number}th`);
//     }
// }

//Task 34
// let pizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

// for (let pizza of pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// console.log("I really love pizza!");

//Task 35
// let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// console.log("Any of these animals would make a great pet!");

//Task 36 
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size.toUpperCase()} and it has the message: "${message}".`);
// }

//  Call the function
// make_shirt('medium', 'Hello, World!');

//Task 37
//function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
//     console.log(`The shirt size is ${size.toUpperCase()} and it has the message: "${message}".`);
// }

//  Call the function to make a large shirt with default message
// make_shirt();

//  Call the function to make a medium shirt with default message
// make_shirt('medium');

//  Call the function to make a shirt of any size with a different message
// make_shirt('small', 'Hello, World!');

//Task 38
// function describe_city(city: string, country: string = 'default country'): void {
//     console.log(`${city} is in ${country}.`);
// }

// Call the function for three different cities
// describe_city('Karachi', 'Pakistan');
// describe_city('Paris', 'France');
// describe_city('New York');

//Task 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// Call the function with three city-country pairs and print the returned value
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Tokyo', 'Japan'));
// console.log(city_country('London', 'United Kingdom'));

//Task 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }

// Call the function to create three different album objects
// let album1 = make_album('Linkin Park', 'Meteora');
// let album2 = make_album('Eminem', 'Recovery', 17);
// let album3 = make_album('Taylor Swift', '1989');

// Print each album object
// console.log(album1);
// console.log(album2);
// console.log(album3);

//Task 41
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// Define an array of magician's names
//let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the show_magicians function passing the array
//show_magicians(magicians);

//Task 42
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push(`the Great ${magician}`);
//     }
//     return great_magicians;
// }

// let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// let great_magicians = make_great(magicians);

// show_magicians(great_magicians);

//Task 43
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push(`the Great ${magician}`);
//     }
//     return great_magicians;
// }

// let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

//let great_magicians = make_great([...magicians]); // Create a copy of the original array

//show_magicians(magicians); // Show the original array
//console.log(); // Print an empty line for separation
//show_magicians(great_magicians); // Show the array with "the Great" added to each magician's name

//Task 44

// function make_sandwich(...items: string[]): void {
//     console.log("Making sandwich with the following items:");
//     for (let item of items) {
//         console.log("- " + item);
//     }
//     console.log("Enjoy your sandwich!");
// }

// // Call the function three times with different numbers of arguments
// make_sandwich('Ham', 'Cheese', 'Lettuce');
// console.log(); // Empty line for separation
// make_sandwich('Turkey', 'Swiss');
// console.log(); // Empty line for separation
// make_sandwich('Tuna');

//Task45
// function carInfo(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
//     let car: { manufacturer: string, model: string, [key: string]: any } = {
//         manufacturer: manufacturer,
//         model: model
//     };
//     for (let option of options) {
//         for (let key in option) {
//             car[key] = option[key];
//         }
//     }
//     return car;
// }

// Call the function with required information and additional name-value pairs
// let myCar = carInfo('Toyota', 'Camry', { color: 'blue' }, { year: 2022 });

// console.log(myCar);

