// 1st Task: Ask the name name of the user and send him greatings on the screen.

let name_user;
alert(`task 1`);
name_user  = prompt("What is your name?");
console.log(`Hello, ${name_user}`);
alert(`Hello, ${name_user}`);


//2nd task: declare x and multiply by 30 and substract by 100 and put the result on the screen.

alert('task2');
let X;
X = parseFloat(prompt(`Please enter the value of X:`));
X = X*30 -100;
console.log(`The value of X now is: ${X}`);
alert(`The value of X now is: ${X}`);


//3rd task know the surface of rectangle.
alert(`task3`);
let width, height, surface;
height=parseFloat(prompt(`please enter the height of the rectangle`));
width=parseFloat(prompt('please enter the width of the rectangle'));
surface=height*width;
console.log(`The surface of rectangle is: ${surface}`);
alert(`The surface of rectangle is: ${surface}`);


//task 4th
let dokhod,superdokhod, years, yearsmax;
alert(`task 4th`);
dokhod = parseFloat(prompt("Enter the sum of the money that you want to stock in our bank, after a year we will add 5% for a year"));
yearsmax = parseFloat(prompt("For how many years do you want to stock your money?"));
for(years=0; years<yearsmax; years++){
    dokhod *=1.05;
}
superdokhod = parseInt(dokhod);
alert(`The sum of the stock of the money is ${superdokhod} , after ${yearsmax} year(s)`);
console.log(`The sum of the stock of the money is ${superdokhod} , after ${yearsmax} year(s)`);

// task 5th
alert(`task 5th`)
const now_year= 2020;
console.log(`Next year will be ${now_year+1} while the the previous year was ${now_year-1}`);
alert(`Next year will be ${now_year+1} while the the previous year was ${now_year-1}`);

//task 6th
let leapyear;
alert('Task 6th');
alert('This is a calculator to calcute if the year that you choose is a leap year');
leapyear = parseInt(prompt(`Enter the year of your choice to know if is a leap year`));
if (leapyear % 4===0 && leapyear % 100!== 0){
    console.log(`${leapyear} is a leap year`);
    alert(`${leapyear} is a leap year`);
}
else{
    console.log(`${leapyear} is not a leap year`);
    alert(`${leapyear} is not a leap year`);
}


//Task 7 th
alert(`Task 7`);
