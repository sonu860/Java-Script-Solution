const arr = ["sonu" , "yadav" , "mohan", "ram"];
// Disturcturing arr            
// const [name , title ,...other]= arr;

// console.log(name , title , other);


// Disturcturing obj

// const Student = {
//     name : "sonu",
//     title : "yadav",
//     other : "mohan",
//     subject : ["maths" , "science" , "social" ],
//     city : "lucknow",
//     class : "10th",
//     rollno : 10
// }

// const {name:n , title:t , other:o , subject:s , city:c , address: a = "delhi",...rest } = Student;

// // console.log(n , t , o , s , c, a, rest);

// // console.log(rest);
// console.log(rest);
const user = {
    naam: "Rahul",
    umar: 25,
    pata: {
      sheher: "Delhi",
      pincode: 110001
    }
  };

// Normal tarika:
function printUser1(user) {
    console.log("normal user",user.naam, user.umar);
  }
  
// Destructuring se behtar tarika:
function printUser2({ naam, umar }) {
    console.log("destructuring user",naam, umar); // Direct variables use karo!
  }

  function printUser3({naam:n , umar:u}){
    console.log("destructuring user",n , u);
  }

//   printUser1(user);
//   printUser2(user);
//   printUser3(user);


// destructuring  arr  in function:
function getresult (){
    return [28.7041, 77.1025]; // [lat, lon]
}

const [lat, lon] = getresult();
console.log(lat);