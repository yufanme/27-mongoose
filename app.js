const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})
const Fruit = mongoose.model('Fruit', fruitSchema);

const pineApple = new Fruit({
    name: "PineApple",
    rating: 9,
    review: "Great fruit."
});

pineApple.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'Amy',
    age: 12,
    favoriteFruit: pineApple
});

// person.save().then(() => console.log('a new person'));



// const apple = new Fruit({
//     name: "Apple",
//     rating: 10,
//     review: "Peaches are good."
// });

// apple.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 3,
//     review: "Too sour for me."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully insert fruits to fruitsDB.")
//     }
// });

// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
        
//         fruits.forEach((fruit) => {
//             console.log(fruit.name);
//         });
        
//     }
//     mongoose.connection.close();
// })

Person.updateOne({_id: "627b7dd0176a6aa835ac0e12"}, {favoriteFruit: pineApple}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully update!");
    }
});

// delete
// Person.deleteOne({name: "Fan"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully delete!");
//         mongoose.connection.close();
//     }
// });

// Person.deleteMany({name: "Fan"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully delete!");
//     }
// });