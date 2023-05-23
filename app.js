                            // JavaScript01task
//  Make a variable named zakat percentage and store a value of 2.5% (hint: 2.5% means 0.025)
//  Make one more variable named as user input and take the input from the user using the prompt. 
//  Make sure the input value should be of type number (hint: use the way by which we can convert a string prompt to a number)
//  Make a variable named as a result and assign it the value that should be the multiple of the zakat percentage and user input.
//  At the last alert, this result shows a message like "your zakat value is xxx"

// let Zakatpercentage = 0.025 ;
// let UserInput = +prompt ("Enter any amount");
// let Result = UserInput * Zakatpercentage
// alert("Your Zakat value is " + Result)


                            // task01
//    Calculate the zakat value, first, create a variable named "zakatPercentage" and
//    store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//    named "userInput" and take the input from the user using the prompt. Make sure
//    the input value is of a type number by converting the input string to a number
//    using a suitable method. Then, create a variable named "result" and assign its value
//    to the multiplication of the zakat percentage and user input. Finally, use an alert
//    message to display the calculated zakat value. The message should look like this:
//    "Your zakat value is xxx".

// let Zakatpercentage = 0.025 ;
// let UserInput = +prompt ("Enter any amount");
// let Result = UserInput * Zakatpercentage
// alert("Your Zakat value is " + Result);


                            // task02
//    calculate the fitrah amount, first, ask the user to enter the total number of family
//    members using the prompt and store the value in a variable called
//    "familyMembers". Next, ask the user to choose a fitrah method by providing them
//    options using the prompt, and store the selected method and its price in variables.
//    Then, use an if-else block to check the user's input and calculate the fitrah amount
//    by multiplying the selected method's price with the number of family members.
//    Finally, display the calculated fitrah amount using an alert message.

// let familyMembers = +prompt ("Enter total number of your family members");
// let wheat = 250;
// let barley = 450;
// let dates= 2100;
// let raisin = 2800;
// let fitrahmethod = +prompt ("Choose fitrah method \n 1.wheat : 250/2kg \n 2.barley : 450/3.5kg \n 3.dates : 2100/3.5kg  \n 4.raisin : 2800/3.5kg");
// if (fitrahmethod == 1) {
//     let totalfitrah =  wheat * familyMembers
//     alert ("your fitah amount is " + totalfitrah)
// } else if (fitrahmethod == 2) {
//     let totalfitrah =  barley * familyMembers
//     alert ("your fitah amount is " + totalfitrah)
// } else if (fitrahmethod == 3) {
//     let totalfitrah =  dates * familyMembers
//     alert ("your fitah amount is " + totalfitrah)
// } else if (fitrahmethod == 4) {
//     let totalfitrah =  raisin * familyMembers
//     alert ("your fitrah amount is " + totalfitrah)
// }else {
//     alert("Invalid fitrah method selected");
//   }


                            // task03
//   Create a program that generates a random number between 1 and 10 and stores it
//   in a variable called "secretNumber". Then, ask the user to enter a guess for the
//   secret number using a prompt.
//   Use an if-else statement to check if the user's guess matches the secret number. If
//   the guess is correct, display a message using an alert saying "Congratulations! You
//   guessed the secret number". Otherwise, if the guess is too high or too low, display
//   an appropriate message informing the user to guess again.

// let secretNumber= 3
// let userInput = +prompt ("Guess a secret number between 1 to 10");
// if (userInput==3){
//     alert ("Congratulations! You guessed the secret number");
// } else if (userInput>3){
//     alert ("Sorry Your guessed number is too high  \n  Guess again!");
// } else  {
//     alert ("Sorry Your guessed number is too low \n  Guess again!");



                            // task04
//   Create a program that asks the user to enter a name, and then prints out the name
//   with the first letter capitalized (Make your name in capitalized case).

// let userInput = prompt ("Enter your name");
// let username = userInput.toLocaleLowerCase()
// let capitalized = username.slice(0,1)
// let caps = capitalized.toLocaleUpperCase()
// alert (caps+username.slice(1) );



                            // task05
//   In this task, you will be creating two empty arrays called "contactNumbers" and
//   "contactNames". Using the prompt, you will ask the user to enter a contact number
//   and contact name. You will then push these values into their respective arrays
//   using the push method. After adding all the contacts, you will display the contact
//   numbers and names in the console. To do this, you will need to use a for loop to
//   iterate through both arrays and log each element to the console.
//   Make sure to use descriptive variable names and comment on your code for clarity.

// let contactNumbers= []        
// let contactNames= [] 
// let name1 = prompt ("enter your 1st name"); 
// let number1= +prompt("enter your 1st number");
// let name2 = prompt ("enter your 2nd name"); 
// let number2= +prompt("enter your 2nd number");
// let name3 = prompt ("enter your 3rd name");
// let number3= +prompt("enter your 3rd number");
// contactNames.push(name1,name2,name3);
// contactNumbers.push(number1,number2,number3);
// console.log("Names " + contactNames + "\n Numbers " + contactNumbers);



                            // task06
//   Create an Array that contains different products, and get input from the user in which you
//   ask your user to give the position of that element he/she wants. Now remove that Item
//   from your array and console the removed item, Also display the remaining items in the
//   array and total number of items remaining 

// let products= ["CocaCola" , "Sprite" , "Dew" , "Pepsi" , "Pakola" ]
// let userInput= +prompt ("Enter the number of softdrink you want to remove  \n 1.CocaCola  \n 2.Sprite  \n 3.Dew  \n 4.Pepsi  \n 5.Pakola  "  )       
// let removeitem = products.splice(userInput -1 ,1);
// console.log("you removed item is " + removeitem);
// console.log("you remaining items are " + products);
// console.log("your number of remaining prducts is " + products.length);




                            // task07
//   Create a program that asks the user for their nationality, gender, and age using the prompt
//   function. The program should then use nested if-else statements to determine if the
//   person is eligible to vote.
//   First, the program should check if the person is Pakistani or Indian. If they are not, the
//   program should display a message saying they are not eligible to vote.
//   If they are Pakistani or Indian, the program should then check their gender. If the person is
//   male and over the age of 18, they are eligible to vote. If the person is female and over the
//   age of 18, the program should ask if they are married. If they are married, they are eligible
//   to vote. If they are not married, they are not eligible to vote.
//   If the person is under 18, the program should display a message saying they are not eligible
//   to vote

// let nationality = prompt("Your Nationality Please");
// let gender = prompt("Your Gender Please");
// let age = +prompt("Your age Please");

// nationality= nationality.toLocaleLowerCase();
// gender = gender.toLocaleLowerCase();

// if (nationality == "pakistani" || nationality == "indian" ) {
//   if (gender== "male" && age > 18) {
//     alert ("You are eligible to vote");
//   }else if (gender=="female" && age > 18) {
//     let maritalStatus = prompt("Enter your marital status");
//     if (maritalStatus=="married") {
//       alert ("You are eligible to vote");
//     } else {
//       alert ("You are not eligible to vote");
//     } 
//   }else {
//     alert ("You are not eligible to vote");
//   }
// }


                            // task08
//   You have an array of that contains the name of Pakistani Teams Player selected for
//   WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//   India, So make an array of final team players (11 Players) that will be playing in tomorrows
//   match from the WorldCupSquad array.
//   (Hint : Make sure it should not disturb the array that contains 15 players instead you have
//   to make a copy of this array)

// let WorldCupSquad= ["Babar Azam" , "Shadab Khan" , " Asif Ali" , "Fakhar Zaman" , "Haider Ali" , "Haris Rauf" , "Iftikhar Ahmed" , "Khushdil Shah" , "Mohammad Hasnain" , "Mohammad Nawaz" , "Mohammad Rizwan" , "Mohammad Wasim" , "Naseem Shah" , "Shaheen Shah Afridi" , "Shan Masood" ] 
// alert ("World Cup Squad: \n"+ WorldCupSquad + "\n\nClick to know tomorrow's match players")
// let finalPlayers = WorldCupSquad.slice(2,13);
// alert("Tomorrow's match players are: \n"+ finalPlayers );


                            // function
                            // task01
              //   Make a function that checks whether the current year is a leap year or not       

// function leapYear (current) {
//         let currentYear = current.getFullYear();
//         if (currentYear % 4 == 0 ) {
//                 alert("Current Year "+currentYear+" is a Leap Year")      
//         }else {
//         alert("Current Year "+currentYear+" is not a Leap Year")
// }     
// }       
// let current = new Date();
// leapYear (current);


                            // task02
               // Make a function that returns the leap years of upcoming next 10 years
// function leapYear(current) {
//         let currentYear = current.getFullYear();
//         let Years = []

//         for (let i = 1; i < 10; i++) {
//         let year = currentYear + i;      
//         if (year % 4 == 0) {
//                 Years.push(year)
// }
// }   
//          if (Years.length > 0) {
//                 alert("Leap years in next 10 years : " + Years)
// }
// }
// let current = new Date();   
// leapYear(current);


         // task03
        //  Make a function to generate OTP
// function OTPGenerator(params) {
//       let character = Math.random();
//       let otp = Math.round(character*100000);
//       return otp;
// }
// let number = OTPGenerator();
// console.log (number)


        // task04
        // Make a function that converts string into capital case
// function toCapitalCase() {
//         let userInput1 = prompt ("Enter your name");
//         let userInput2= userInput1.toLocaleUpperCase();
//         return userInput2;

// }
// let string = toCapitalCase();
// alert(string); 


         // task05
        //  Make a function that calculate your age
// function ageCalculator() {
//         let dOb = prompt ("enter your date of birth (YYYY-MM-DD)")
//         let birth= new Date(dOb);
//         let current= new Date();
//         let age = current.getFullYear() - birth.getFullYear()
//         alert("your age is " + age);
// }
// ageCalculator();

