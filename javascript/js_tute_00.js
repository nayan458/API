// // console.log('Hello woeld');

// var myName = 'this is nayan';

// // console.log(myName)

// var myNumber = 9101419696;

// // console.log(isNaN(myName));
// // console.log(isNaN(myNumber));

// if(isNaN(myName)===true){console.log('Enter valid number (myName)')};
// if(isNaN(myNumber)===true){console.log('Enter valid number')};

// // console.log("this is noob: " + 5 == 5); // W-R-O-N-G
// // console.log("this is noob: " + (5 == 5)); // K-E-R-E-K-T


// // var a= 5,b=10;

// // a+=b;
// // b=a-b;
// // a=a-b;
// // console.log("the value of a is" + a);
// // console.log("the value of b is " + b);

///////////////////////////////////////////////////////////////////
                            // FUNCTION //

// function sum(a,b){   //a,b is argument
//     // var total = a+b;
//     // return total;
//     return a+b;
// }
// var num1;
// num1 = sum(10,20);//10,20 is parameter
// console.log(num1);

// *****************************ANONYMOUS FUNCTION*************************

// var funexp = function(a,b){
//     return a+b;
//     // return total = a+b;
// }
// console.log("the value of funexp is "+funexp);

// console.log("the value of funexp is "+funexp(10,20));

// var num1 = funexp(15,15);

// console.log("the value of funexp is "+num1);

// ***************************ECMA SCRIPT ES6*******************************//
// ***************************ARRAY AND STRING******************************//
        // ARRAY.LENGTH - 1;
        // // *********TRAVERSAL****
        // var myFriends = new Array;
        // var myFriends = ["nayan","thapa","harry","gaurav"];
        
        // console.log(myFriends[0]);
        
        // // if u want to check the lengthof elements of an array
        
        // console.log(myFriends.length);
        
        // let num1 = myFriends.length;
        // console.log(`The valu of last element is ${myFriends[num1 - 1]}`);
        
    // // *******FOR IN LOOP ************FRO OF LOOP**********FOREACH**********//
        
    //     var myFriends = ["nayan","thapa","harry","gaurav"];
    
    //     // for(let i = 0; i < myFriends.length; i++)
    //     // {
        //     //     console.log(myFriends[i]);
        //     // }
        
        //     // for (let element in myFriends)
        //     // {
            //     //     // console.log(`${element}`) // returns index number
    //     //     console.log(`${myFriends[element]}`)
    //     // }
    
    //     // for ( let element of myFriends){
        //     //     console.log(element);
        //     // }
        
        //     // myFriends.forEach(function(element, index, array){
            //     //     // console.log(element);
            //     //     console.log(`${element} ; index: ${index} ; array: ${array}`);
            //     //    // WE CANNOT USE BREAK STATE MENT HERE; 
            //     //    // IT RETURNS ELEMENT INDEX 
            //     // });
            /***************************/
        //         var myFriends = ["nayan","thapa","harry","gaurav"];
        //     myFriends.forEach((element, index, array) => {
        //     // console.log(element);
        //     console.log(`${element} ; index: ${index} ; array: ${array}`);
        //    // WE CANNOT USE BREAK STATE MENT HERE; 
        //    // IT RETURNS ELEMENT INDEX 
        // });
        /**********************************/

    //     // myFriends.forEach((element,index,array) =>{
    //     //     console.log(`${element} ; index: ${index} ; array: ${array}`);
    //     // }); // but it doesnot support this

    // Array Subsection 2 searching and filter in Array

    ///////////////////////////// indexOf() //////////////////////////////
    // Array.prototype.indexOf()
    
    // Return the first (least) index of an element within  the array 
    // equal to an element , of -1 if none is found, it search the element from 
    // the 0th index number
    
    // var myFriends = ["nayan","thapa","harry","gaurav"];
    
    // console.log(myFriends.indexOf("gaurav"));//FORWORD SEARCH
    
    ///////////////////////////// lastindexOf() //////////////////////////////
    // console.log(myFriends.lastIndexOf("gaurav"));//FORWORD SEARCH
    
    
    ///////////////////////////// includes() //////////////////////////////
    // console.log(myFriends.includes("gaurav"));//FORWORD SEARCH

    // const prices = [250,369,100,500,600,800];
    
    // console.log(prices.)
    
    // findElement = (price) =>{
        //     return price>1000;
    // }
    
    // console.log(prices.find(findElement));
    // console.log(prices.findIndex(findElement));

    
    //*********** */ filter***********
    
    // const prices = [250,369,100,500,600,800];
    
    // findElement = (price) =>{
    //     return price<400;
    // }

    // prices.filter = (element) =>{
    //     return element<400;
    // }
    
    // sort the elelments of array and returns the sorted array by default
    //  sortedd array is by default in assending order

    // let month = ["jan","feb","march","may","july","nov","april","jun","agust","september","decem"];
   
    // console.log(month.sort());
   
    // ***************SORT BUG FOR NUMBER***********************
    // let array1 = [10, 4, 7, 3, 9,]

    // console.log(array1.sort());
    // *****************************************************
    
    // *************************CRUD****************************
    // Array.prototype.push()
    // The push() method adds one or more elements to the 
    // end of an array and returns the new length of the array

    // const animals = ['pigs', 'goat', 'sheep'];

    // animals.push('chicken');
    // // console.log(animals);
    
    // // // const count = animals.push('chicken');

    // // // console.log(count); // push returns length of the array

    // // we can add miltiple data using push method

    // animals.push('cow','cat','dog');
    // const newcount = animals.push('cow','cat','dog');
    
    // console.log(animals);
    // console.log(newcount);

    ////////////////////////////unsifed()/////////////////////////////

    // Array.prototype.unsift()
    // The unsifed() method adds one or more elements to the begining
    // of an array and it returns new length of the array
    
    // Example 1
    
    // const animals = ['pigs', 'goat', 'sheep'];
    // const count = animals.unshift('chicken');
    // console.log(animals);
    // console.log(count);
    
    // Example 2
    
    // const myNumber = [1, 2,3,5];
    
    // // myNumber.unshift(4,6);
    
    // // // console.log(myNumber.unshift(4,6));
    // console.log(myNumber);
    
    /////////////////////////pop()////////////////////////////////////
    
    // Array.prototype.pop()
    // The pop() method removes the last elements from an array
    // it returns that element. this method changes the length of array 
    
    // const plants = ['brocoli', 'cauliflower','kale','tomato','cabbage'];
    
    // console.log(plants);
    // console.log(plants.pop());
    // console.log(plants);
    
    /////////////////////////shift()////////////////////////////////////
    
    // Array.prototype.shift()
    // The shift() method removes the first elements from an array
    // it returns that element. this method changes the length of array 
    
    // const plants = ['brocoli', 'cauliflower','kale','tomato','cabbage'];
    
    // console.log(plants);
    // console.log(plants.shift());
    // console.log(plants);
    
    /////////////////////////CHALANGE////////////////////////////////////

    // Add Dec at the end of an array?
    // What is the return value of splice method?
    // update march to March (update)?
    // Delete June from an array?

    // const months = ['Jan','march','April','June','July'];
    
    // // sol 1
    // const months = ['Jan','march','April','June','July'];
    // // const newMonth = months.splice(5,0,"Dec");
    // const newMonth = months.splice(months.length,0,"Dec");
    // console.log(months);
    
    // sol 2
    // const months = ['Jan','march','April','June','July'];
    // console.log(newMonth);
    // const newMonth = months.splice(months.length,0,"Dec");
    
    // sol 3
    // const months = ['Jan','march','April','June','July'];

    // const indexOfMonths = months.indexOf('march');

    // if(indexOfMonths != -1){
    //     const updateMonth = months.splice(indexOfMonths,1,'March');
    //     console.log(months);
    //     console.log(updateMonth);
    // }else{
    //     console.log(`no data found`);
    // }
    
    // sol 4

    // const months = ['Jan','march','April','June','July'];
    
    // const indexOfJune = months.indexOf('June');
    // if(indexOfJune != -1){
    //     const updateMonth = months.splice(indexOfJune,1);
    //     console.log(months);
    //     console.log(updateMonth);
    // }
    
    // const months = ['Jan','march','April','June','July'];

    // const indexOfApril = months.indexOf('April');
    // if(indexOfApril != -1){
    //     const newupdateMonth = months.splice(indexOfApril,Infinity);
    //     console.log(months);
    //     console.log(newupdateMonth);
    // }

//    ********************************   MAP   *************************************************

// Array.protptype.map()

// let newArray = arr.ap(callback(crrentValue[,index[,array]])){
// return element fro newArrray, after ececuting something
// }[,thisArg]);

// const array1 = [1,4,9,16,25];

// // num > 9

// // let newArr = array1.map((curElem,index,arr) =>{
// //     return curElem>9;
// // })

// // console.log(array1);
// // console.log(newArr);

// let newArrfor = array1.map((curElem,index,arr) =>{
//     return `Index no: ${index} and the value is ${curElem} belong to ${arr}`;
// })
// console.log(newArrfor);
// // it returns the new array without mutating the original array
// // map method is chainable

////////////////////////////CHALANGE 2////////////////////////////////////////

// 1.find the square root of each element in an array?
// 2.Multiply each element by 2 and return only those element which are 
//     greater then 10
// let arr = [25,36,49,64,81];

// sol 1
// let arr = [25,36,49,64,81];

// let sqrArr = arr.map((curElem,index,arr) =>{
//     // return `${curElem}`**0.5;
//     return Math.sqrt(curElem);
// })
// console.log(sqrArr);

// sol 2
// let arr = [25,36,49,64,81];

// let arr2 = arr.map((curElem,index,arr) =>{
//     return curElem * 2;
// }).filter((curElem) => {
//     return curElem > 10;
// })

// console.log(arr2);

////////////////////////////Reduce Method/////////////////////////////////////

// reduce method 
// 
// Flatten an array means to convert 3d or 3d array into a 
// single dimentional array

// The reduce() method executes a reducer function (thar you provide) 
// on each element of the array, resulting in single out value.

// The reducer function takes four arguments :

// Accumulator 
// Current Value 
// Current index 
// Source Array

// let arr = [2,3,4,5,8,9];

// let sum = arr.reduce((accumulator, curElem, index, arr) =>{return accumulator +=curElem;})

// console.log(sum);

// chainability

// let arr2 = arr.map((curElem,index,arr) => curElem * 2).filter((curElem) =>curElem > 10).reduce((accumulator, curElem, index, arr) =>{return accumulator +=curElem;})

// let arr2 = arr.map((curElem,index,arr) => curElem).filter((curElem,index,arr) => curElem).reduce((accumulator, curElem, index, arr) =>{return accumulator += curElem;})

// console.log(arr2);

// let arr = [2,3,4,5,8,9];

// let product = arr.reduce((accumulator, curElem, index, arr) =>{
//         debugger;
//     return accumulator *=curElem;},7)

// console.log(product);

// let arr = [2,3,4,5,8,9];

// let sum1 = arr.reduce((accumulator, curElem, index, arr) =>{
//         debugger;
//     return accumulator +=curElem;},7)

// console.log(sum1);

// const strArr = [
//         ['zone_1','zone_2'],
//         ['zone_3','zone_4'],
//         ['zone_5','zone_6'],
//         ['zone_7','zone_8']

// ];

// let flatArr = strArr.reduce((accum, curval) =>{
//     return accum.concat(curval);
// })

// console.log(flatArr);

//////////////////////////////////////////////////////////////////////

// ******************************STRING*************************************//

// A JavaScript string is zero or more charecrter written inside quotes.

// JavaScript string are used for sorting and manupulating text.
// we can use single or double quotes
// string can be created as primitives
// for string litterals, or as objects, using the string() constructor 

// let myName =  "Nayanmoni Baruah";
// let myNickName = "Nayan";

// let myHomeName = new String("Putu"); // string() constructor 

// let myName =  "Nayanmoni Baruah";

// let count = myName.length;

// console.log(count);


/////////////// finding string in string//////////////// 

// const myBioData = 'I am Nayan Baruah';
// // console.log(myBioData.indexOf("nayan"));
// console.log(myBioData.indexOf("N",12));

// console.log(myBioData.lastIndexOf("B",12));

// console.log("hello world");

//////////////////////SEARCH()/////////////////////////////////////////////////

// string.prototype.search(regexp)
// The search() method searches a atrig for a specified
// value and return s the position of the match

// const myBiodata = `I am the Nayan Baruah`;

// let srcVal = myBiodata.search('Nayan');
// console.log(srcVal);

// The search() method cannot take a second start position arguement.


////////////////////////////Extracting String parts ///////////////////////////////////////////////

// There are 3 methods for extracting a part of string:

// slice(start,end(optoional));
// substring(start,end);
// substr(start,length)

////////////////////slice() method/////////////////////////////
// slice() extracts a part of a astring and returns the extrsted part 
// in a new string.

// The method takes 2 parameters: the start position,
// and the end position(end not included)

// var str = "Apple, Banana,kiwi";

// let res = str.slice(5,-3);
// console.log(res);
// let res = str.slice(5,-6);
// console.log(res);
// let res = str.slice(0,4);
// console.log(res);

// Note: 
// 1:   The slice() method select the elements starting at the 
//      given start argument, and ends at, but does not include,
//      the given end arguement
// 2:   the original array will not be changed.
//      Javascript counts position from zero. First position is 0

/////////CHALLENGE////////////////
// let myTweets = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta animi labore! Ipsa inventore iure veniam impedit? Minus facere eaque eum aut dolorum similique sequi. Sequi vero facilis perferendis unde? Iusto dolore fugiat ipsa dicta. Fuga cum sunt repellendus nihil optio quo dolorem? Nesciunt, illo. Adipisci illo optio quasi et. Ea in deserunt ipsa minima architecto, quos pariatur modi esse ab similique? Quia sunt dolorum non, porro fugiat, quos maiores blanditiis amet voluptatem quae distinctio, id ullam dolore ratione rem. Totam cupiditate quae molestias eum minus laudantium. Quisquam, minima placeat! Eum at nisi natus ipsam id perferendis voluptates totam rerum magnam obcaecati. Voluptatibus rerum saepe nobis accusantium possimus modi nulla consectetur, sed fuga adipisci reprehenderit est quibusdam fugiat molestiae minima suscipit? Suscipit, non! Distinctio vel ducimus nisi quos soluta! Temporibus beatae, praesentium nobis exercitationem id aliquam minus repellendus natus rem et omnis quos, suscipit cupiditate tenetur. Eum id qui et quibusdam quisquam ab explicabo fuga sunt laborum maiores ipsum quasi consectetur aspernatur, accusamus nulla porro eaque. Autem nesciunt velit porro perferendis. Itaque omnis obcaecati molestiae. Fuga repellat beatae cumque id maxime aliquid, eos sequi? Dolores excepturi reprehenderit ut esse repellat dolorem doloremque incidunt placeat officia nobis quos consequatur saepe architecto, corrupti natus minus vero vel delectus consectetur exercitationem assumenda itaque cupiditate obcaecati et. Dolore odit necessitatibus perferendis, ipsum asperiores deserunt. Eum quis suscipit consectetur, impedit dignissimos tempora voluptatum itaque nam reiciendis enim cum repellat quia debitis totam optio officia error sapiente nulla in numquam ipsam quod est. Dolor quis ratione voluptate? Libero assumenda sequi, dolore at ipsa, mollitia debitis velit, atque autem excepturi veniam? Nihil velit ducimus pariatur cupiditate ratione, eius at vel. Aspernatur ipsam laborum minus alias error at sint enim dolore ducimus fugiat asperiores voluptas impedit, veritatis doloribus saepe aliquid a quam facilis numquam quae eaque vitae, deserunt atque consequatur! Nemo, officia laboriosam. Debitis, suscipit vel soluta totam est molestiae consequatur alias doloremque fugiat esse minima numquam enim in pariatur rem hic reprehenderit nisi facere veritatis aliquam cupiditate itaque vitae accusamus? Ut laboriosam nobis sequi, doloremque, consequatur, dolorum ipsa excepturi perspiciatis officiis distinctio sapiente. Voluptatibus ratione nemo sint qui, minima possimus voluptas exercitationem! Saepe minus accusantium vero beatae recusandae ratione excepturi nemo atque, sequi, optio tempora illo nihil rerum quibusdam quae accusamus porro id laudantium nobis a quo sunt voluptas dolore magni! Quis quidem provident numquam ipsam veritatis quam, maiores quasi assumenda blanditiis autem temporibus maxime placeat molestiae aut voluptatem explicabo. Neque adipisci excepturi labore atque. Sit fuga, harum consectetur unde repellendus dicta accusamus quia fugit? Eos in tempore officia dolores magni libero itaque adipisci impedit hic debitis? Voluptatem aut excepturi reiciendis recusandae dolorum consequuntur, enim temporibus sequi veniam eius ex doloribus repudiandae placeat reprehenderit totam tenetur ipsum. Possimus doloribus in quisquam cumque suscipit perferendis sapiente, earum facilis quos quaerat animi libero magni voluptatem ad itaque blanditiis laudantium aperiam fugiat fuga sed, provident cum quod. Incidunt optio aliquid laudantium nulla a dolores possimus rerum excepturi beatae sapiente repellendus ex nemo illum, perspiciatis placeat, earum in molestias itaque eveniet!";


// let displayTweet = myTweets.slice(0,280);
// let count = displayTweet.length;
// console.log(count);

/////////substring()////////////////

// The substring() Method
// substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes.


// var str = "Apple, Banana,kiwi";
// let res = str.substring(7);
// console.log(res);
// let res1 = str.substring(5,7);
// console.log(res1);

// If we give negative value then the charecters are
//  not counted from the 0th position
// let res2 = str.substring(7,-2);
// console.log(res2);

/////////substr()////////////////

// The substr() Method
// substr() is similar to slice().

// The difference is tht the second parameter specifies 
// the length of the extracted part


// var str = "Apple, Banana,kiwi";
// let res = str.substr(0,4);
// let res = str.substr(7,-2);
// let res = str.substr(5);
// let res = str.substr(-4);
// console.log(res);

/////////replace()////////////////

// String.prototype.replace(searchFor, replaceWith)
// The replace() method replaces a specified value
// with anoother value in a string.

// let str = "I am nayan moni baruah nayan";
// //Note: It changes only frst word and not all words are replaced
// const replStr = str.replace("nayan","Nayan");
// console.log(replStr);

// Note:
// 1:   The replace() method does not change the string 
// it is called on. It returns a new string.
// 2: By default, the replace() method is caase sensitive.
// Writing NAYAN(withupper-case) will not work

/////////charAt()////////////////

// There are 3 method for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property Access

// let str = "HELLO WORLD";
// console.log(str.charAt(3));
// console.log(str.charCodeAt(3));

/////////CHALLENGE////////////////
//RETURN THE UNICODE OF THE LAST CHARECTER IN A STRING 

// let str = "HELLO WORLD";

// let lastStr = str.length - 1;
// console.log(str.charCodeAt(lastStr));

/////////property acess////////////////

// property Acess 
// ECMAScript 5 (2009) allowes property acess [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);

/////////othe importent method////////////////

// toUpperCase() //toLowerCase()
// let myName = "nAyanMoni baRuAh";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

///////////concat()///////////////

// let fname = "nayan";
// let lname = "baruah";

// console.log(fname+lname);
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));

////////////trim()////////////////
// string.trim()
// The trim() method reoves whitespaces from both
// sides of a string 

// // Note: it does not trim spaces between 
// var str = "         Hello   world       h       "
// console.log(str.trim());

// ////////////////CONSVERTING STRING INTO ARRAY
// A string can be converted to an Array with the 
// split() method

// var txt = "a, b,c | d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));
// ****************************************************************************
// **********************DATE AND TIME**************************************
// ****************************************************************************

// JavaScript Date objects represents a single momoent in time in a 
// plateform-independent format.Date object contains a Number that 
// represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects
// There are 4 ways to create a new date object:

// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(millisecond)
// new Date(date string)

// Greenwich Mean Time(GMT) 
// fro India GMT+ 0530(5HR 30MIN)

//////// new Date()
// Date object are created with the new Date() constructor
// let currDate = new Date();
// console.log(currDate);


// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

/////// Date.now()
// Returns the numberic value corrosponding to the current time-the number
// of milliseconds elapsed since january 1 1970 00:00:00 UTC

// console.log(Date.now());

///////////new Date(year, month, ...)
// 7 number specify year, month, day, hour, minute, second,
// and millisecond(in that order)
// Note: Javascript counts month from 0 to 11.

// January is 0. December is 11.

// let d = new Date(2021, 0, 5, 20, 33,30, 0);
// console.log(d.toLocaleString());
// let d = new Date(2021, 0, 5);
// let d = new Date(2021, 0);
// console.log(d.toLocaleString());

///////// new Date(dateString)
// new Date(dateString) creates a date object from a date string

//////////////////VERY VERY IMPPORTANT////////////////////////
// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString())

//////////// new Date(millisecond)
// // new Date(millisecond)
// let curMillSec = Date.now();
// console.log(curMillSec);

// let d = new Date(curMillSec);
// console.log(d);
// console.log(d.toLocaleString());

// console.log(new Date(0).toLocaleString());

/////////////////Date method

// How to get individual date
// const currDat = new Date();
// console.log(currDat.toLocaleString());
// console.log(currDat.getFullYear());
// console.log(currDat.getMonth());
// console.log(currDat.getDate());
// console.log(currDat.getDay());

// How to set the individual date

// const currDat = new Date();
// console.log(currDat.setFullYear(2021));
// // the setFullYear() method can oponally set month and day 
// console.log(currDat.setFullYear(2021, 10, 5));
// console.log(currDat.setMonth(10));
// console.log(currDat.setDate(5));
// console.log(currDat.toLocaleDateString());
// console.log(currDat.toLocaleString());


// How to get the individual time

// const currDat = new Date();

// console.log(currDat.getTime());
// // The get time method returns the number of milliseconds
// // since January 1, 1970
// console.log(currDat.getHours());
// console.log(currDat.getMinutes());
// console.log(currDat.getSeconds());
// console.log(currDat.getMilliseconds()); 

// How to set the individual time

// let curTime = new Date();

// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// console.log(curTime.setTime());

// go to html fiel and liveserver//;

// myfunc = () =>{
//     setInterval(() =>{
//     const d = Date.now()
//     let t = new Date();
//     t.setTime(t);
//     // t.setHours(5);
//     document.getElementById("demo").innerHTML = t;
// },1000)}

// how to get only date or time

// --date
// new Date().toDateString()//-- gives in word(day and month)(Fri Jun 25 2021)
// new Date().toLocaleDateString()//-- gives in number and /(25/06/2021)

// --time
// new Date().toTimeString()//--gives time in(12:09:27 GMT+0530 (India Standard Time))
// new Date().toLocaleString()//--gives time in(12:09:27 pm)

// let n = new Date().toDateString()
// console.log(n);

// let dte = new Date()
// console.log(dte.toLocaleDateString());

// let m = new Date().toTimeString();
// console.log(m);

// let tim = new Date()
// console.log(tim.toLocaleTimeString());

// console.log(new Date().toLocaleString());

// ///////////// view in html page

// document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
// let d = new Date().toLocaleDateString();
// document.getElementById('date').innerHTML = d;

// var t = new Date().toLocaleTimeString();
// document.getElementById("time").innerHTML = t; 

/*********************************************************************** */
/*                      MATH                                             */ 
/*********************************************************************** */

// Javascript Math object allowes you to perform mathematcal task on number

/////////// Math.PI
// console.log(Math.PI);

////////// Math.round()
//// returns the integer nearest to rounded 
// let num1 = 10.499
// console.log(Math.round(num1));

////////////Math.pow()
////returns the power

// let num1 = 3;
// console.log(Math.pow(num1,7));

/////////Math.sqrt()
// returns the square root of the number 

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(169));
// console.log(Math.sqrt(196));
// console.log(Math.sqrt(75));

////////Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-67.96));
// console.log(Math.abs(-234));
// console.log(Math.abs(-097));
// console.log(Math.abs(4-8));

//////////// Math.ceil()
// Math.ceil(x) return the value of x round up to its nearest integer

// console.log(Math.ceil(4.001));
// console.log(Math.ceil(4.5));

/////////// Math.floor()
// Math.floor(x) returns the value of x rounded to its nearest iinteger

// console.log(Math.floor(4.001));
// console.log(Math.floor(4.5));

//////////Math.max()
// Math.max() can be used to find maximum value

// console.log(Math.max(55,34,56,89,99,10));

/////////Math.min()
// Math.min() can be used to find minimum value 

// console.log(Math.min(55,34,56,89,99,10));

/////////Math.random()
// 
// console.log(Math.random());

/*//My way of generating random Numbers 
let num1 = Math.random();
num1 = Math.round(num1)
let num2 = Math.random();
num2 = Math.round(num2)
let num3 = Math.random();
num3 = Math.round(num3)
let num4 = num1 + num2 + num3;
console.log(num4);
*/
/* GENERATING RANDOM NUMBER FROM 0 - 10 */
// let num1 = (Math.random())*10;
// num1 = Math.floor(num1);
// console.log(num1);

// Math.trunc()
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.65));
// console.log(Math.trunc(-36.76));

/*NOTE:
    if the arguement +ve Math.trunc() ~= Math.floor()
    if the arguement -ve Math.trunc() ~= Math.ceil()
     */
/********************************************************* */
/*                      DOM                                 */
/********************************************************* */

// 847

// DOM
// document.head; document.body.chiledNodes;
// document.body.children;
// document.body.length
// document.height;
// document.width;

// how to find chiled
// document.body.children
// doucument.body.firstChild
// doucument.body.firstElementChild
// doucument.body.firstElementChild.firstElementChild
// document.body.parentNode
// document.body.nextSibling
// document.body.previousSibling
// document.body.previousElementSibling

// /////////Events///////////////

// using inline events alert()
// by calling a function
// by unsing inline events
// using Event Listeners

// Sectionn 2: what is Event object
// 9:50:00

// Section 3: Mouse Event
// 10:12
// section 4: KeybordEvents in JavaScript
// Event That occers when user presses a key on the keyBord
// belongs to the keyBoardEvent Object
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// 10:17

// ************ TIME EVENTS

// The window object allowsexecution of code at specified time intervals
// These time intervals are called timing events.
// The two key methods to use with javascript are:

/////////////////////setTimeout(function, milliseconds)
// Executes a function after waiting a specified number of milliseconds

/////////////////////setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// setTimeout()

// clearTimeout()

// setInterval()

// clearInterval()







//***************************************************************************************//
/*                              OOP IN JAVA                                              */
//***************************************************************************************//

/////////////////// Objects ///////////////////////
// What is object literals

// Object literals is a simply a key:value pair data stricture.

// storing variable and function in one contsiner,
// We can refer this as an objects

// object = school bag

// How to create an Object

// // 1st way

//     let biodata = {
//         myName : "nayan",
//         myAge : 21,
//         getData: ()=>{
//             console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//         }
//     }

//     biodata.getData();
    
    // // 2nd way : no need to write Functions after ES6
    
    // let biodata = {
    //     myName : "nayan",
    //     myAge : 21,
    //     getData (){
    //         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
    //     }
    // }

    // biodata.getData();
    
    // // What if we want object as a value inside an object

    // let biodata = {
    //     myName : {
    //         fName : "Nayan",
    //         lName : "Baruah",
    //     },
    //     myAge : 21,
    //     getData (){
    //         console.log(`My First name is ${biodata.myName.fName} and my Last name is ${biodata.myName.lName} and my age is ${biodata.myAge}`);
    //     }
    // }

    // biodata.getData();
    ////////////////////// this /////////////////
    // What is this object?

    // The definition of "this" object is that it constain the current context.

    // The this object can have different values depending on where it is placed.

    // // For Example 1

    // console.log(this)

    // console.log(this.alert('Awesom'));

    // // example 2

    // function myFunc(){
    //     console.log(this);
    // }

    // myFunc();

    // // example 3

    // var myNames = 'Nayan';

    // function func(){
    //     console.log(this.myNames);
    // }

    // func();


    
    // let biodata = {
    //     myFullName : "Nayanmoni Baruah",
    //     myAge : 21,
    //     getData (){
    //         console.log(this.myFullName);
    //     }
    // }
    
    // biodata.getData();
    
    // // flat ARROW function is not works with this
    

    
    // let biodata = {
    //     myFullName : "Nayanmoni Baruah",
    //     myName : {
    //         fName : "Nayan",
    //         lName : "Baruah",
    //     },
    //     myAge : 21,
    //     getData (){
    //         console.log(this.myFullName);
    //         console.log(this.myName.lName);
    //     }
    // }

    // biodata.getData()

    ////////////// DESTRUCTURING //////////////////

    // the destructuring assignment syntax is a javascriptexpression 
    // that makes it possible to unpacl values from arrays
    // or properties from objects, into distinct variables

    //////////Array Destructing
    //// const myBiodataArr = ['nayan','baruah',21,'Modern English School','K.C.Das Commerce College','B.C.A'];
    
    /* We will not do in this way
    let myFname = myBiodataArr[0];
    let myLname = myBiodataArr[1];
    let myAge = myBiodataArr[2];
    let mySchool = myBiodataArr[3];
    let myCollege = myBiodataArr[4];
    let myCourse = myBiodataArr[5];
    
    console.log(myAge);
    */
   // Array Destructuring method
   // let [myFname, myLname, myAge, mySchool, myCollege, myCourse] = myBiodataArr;
   
   // console.log(mySchool);
   // console.log(myAge);
   // console.log(myCollege);
   
//    /**ADDING ELEMENT WHILE DESTRUCTURING**/

//    const myBiodataArr = ['nayan','baruah',21,'Modern English School','K.C.Das Commerce College','B.C.A'];
   
//    let [myFname, myLname, myAge, mySchool, myCollege, myCourse, myBestFriend = "Gaurav Kakoti"] = myBiodataArr;
   
//     console.log(myBestFriend);

    /////////////////////////OBJECT DESTRUCTURING//////////////////////

    //  let biodata = {
    //         myFullName : "Nayanmoni Baruah",
    //         fName : "Nayan",
    //         lName : "Baruah",
    //         myAge : 21
    //     }
    
    //  let {myFullName,fName,lName,myAge,myBestFriend = "Gaurav Kakoti"} = biodata;
    //  console.log(lName);
    //  console.log(myBestFriend);

    //////////////////object properties ///////////////////

    // we cam now use Dynamic Properties

    /* no need to write key and value, if both are same*/
    /////////////
    // let myName = "Nayan Baruah";
    // let myAge = 21;
    
    // let myBio = {
    //     myName,
    //     myAge,
    // }

    /* same thing can also be written */
    // let myBio = {myName,myAge,}

    // console.log(myBio.myAge);

    /////////////
    // let myName = "Nayan Baruah";
    
    // let myBio = {
    //     [myName] : "hello how are you",
    //     [18 + 2] : "is my age",
    // }

    // console.log(myBio);

    /*Fat arrow function*/

    // // normal way
    // let num1 = 10, num2 = 5, rslt=0;
    // function sum(b,a){return a+b};
    // rslt = sum(num1,num2);
    // console.log(rslt);
    
    // // Fat arrow function
    // let num1 = 10, num2 = 5, rslt=0;
    // sum = (a,b) =>{return a+b};
    // rslt = sum(num1,num2);
    // console.log(rslt);
    
    /*Spred Operator*/
    // const colors = ['red', 'green', 'blue', 'white'];
    
    // const favColor = [...colors,'purle','black'];

    // // 2nd time if we add one more color on colors array and
    // // if we need to write it again in Favcolor arr then we use Spred Operator.
    
    // console.log(colors);
    // console.log(favColor);
    
    /* REST OPERATOR */
    // REPORT IMPORTANT NEED TO COVER SELF
    
    /*************************************************************************** */
    /*                      END                                                  */
    /*************************************************************************** */
    
    /**********ES7(2016)****************/
    
    //////// Array.prototype.includes
    //////// Exponentiation Operator
    
    // //////// Array.prototype.includes
    // const colors = ['red', 'green', 'blue', 'white'];
    // const isPresent = colors.includes('purple');
    // console.log(isPresent);
    
    // //////// Exponentiation Operator(**)
    // console.log(2**7);
    
    /**********ES8(2017)****************/
    
    // // trimStart() trimEnd()
    // string Padding
    // Object.values()
    // object.entries()
    
    // //////////// string Padding
    // const myName = "nayan";
    
    // const paddedName = myName.padStart(10);
    // console.log(paddedName);
    
    // const newPaddedName = myName.padEnd(10) + myName;
    // console.log(newPaddedName);
    
    // //////////// Object.values()
    // const person = {
        //     name : "Raju Rastoki",
        //     age : 23
        // }
        
        // // console.log(Object.values(person))
        // // // converts only values of an object into one array
        
    // //////////// Object.entries()
    // const person = {
        //     name : "Raju Rastoki",
        //     age : 23
        // }
        // // console.log(Object.entries(person))
        // // // converts only key values of an object into sapperate array
        // // //  and then puts this array into one single array

/* **********************ES10(2019)***********************
    // //////////// Object.fromEntries();
    // // it undoes the object.entries(varObject) method and converts the array back to object
    // const person = {
    //             name : "Raju Rastoki",
    //             age : 23
    //         }
    // console.log(person);
    // const toArr = Object.entries(person);
    // console.log(toArr);
    // const backToObject = Object.fromEntries(toArr);
    // console.log(backToObject);
*/
        
    /**********ES9(2018)****************/

    //     // flat(arg) to falten an array

    //     // const Arr = [
    //     //             ['zone_1','zone_2'],
    //     //             ['zone_3','zone_4'],
    //     //             ['zone_5','zone_6',['zone_7','zone_8',['zone_5','zone_6',['zone_1','zone_2',['zone_3','zone_4']]]]],
    //     //             ['zone_7','zone_8',['zone_5','zone_6',['zone_1','zone_2',['zone_3','zone_4']]]]
    //     //     ];
    //     // //     //syntax of reduce
    //     // //     // arr.reduce((accumulator, curElem, index, arr) =>{})
    //     // // // const flatArr = Arr.reduce((accmul,currval,index,arr) =>{return accmul.concat(currval)});
    //     // // // console.log(flatArr);
            
    //     // // /// using flat() *******

    //     // // const pro1 = Arr.flat(2);
    //     // // console.log(pro1);

    //     // // const pro = Arr.flat(Infinity);
    //     // // console.log(pro);

    // //////Spred Operator for Objects(...Object);
        // const person = {
        //     name : "Raju Rastoki",
        //     age : 23
        // }

        // const myfriends = {
        //     ...person,
        //     myName : "Nayan",
        //     myAge : 21,
        // }

        // console.log(myfriends);

        /* ES10(2019)        (ALSO DEFINED ABOVE)
    // //////////// Object.fromEntries();
    // // it undoes the object.entries(varObject) method and converts the array back to object
    // const person = {
    //             name : "Raju Rastoki",
    //             age : 23
    //         }
    // console.log(person);
    // const toArr = Object.entries(person);
    // console.log(toArr);
    // const backToObject = Object.fromEntries(toArr);
    // console.log(backToObject);
*/

    /**********ES9(2020)****************/
    ////////////BigInt(n)

    // let oldNum = Number.MAX_SAFE_INTEGER;   // gives the maximum safe integer value
    // console.log(oldNum);                    
    // console.log(oldNum + 36)                // gives an error

    // // to use big int we use a 'n' at the back of integer

    // const newNum = 18014398509481982n+36n;
    // console.log(newNum);
    // console.log(typeof(newNum));

    /////////////Nullish 
    // falsey in javascript : empty string, the number 0, undefined, null, false, NAN and so on
    //  we compare a value if it is nullish using operator '??' 
    // nullish type ?? comaring component
    // below are few wxample

    // // Example 1
    // const foo = NaN ?? 'default string'
    // console.log(foo);

    // // Example 2
    // const foo1 = null ?? 'default string'
    // console.log(foo1);

    // // "use strict";
    // // let x = 3.24
    // // console.log(x);
    // x = 3.24;
    // console.log(x)

/*************************************************************************** */
/*                      END                                                  */
/*************************************************************************** */

// 12:18 - 12:22

// 12:27

/*************************************************************************** */
/*                      ADVANCE JAVACRIPT                                    */
/*************************************************************************** */
    
////////////////EVENT PROPAGSTION
// Event bubbling and capturing are two ways of event propagatin in the HTML DOM API
// WHEN AN EVENT OCCURS IN AN ELEMENT AND 
// BOTH ELEMENTS HAVE REGISTERED A HANDEL FOR THAT EVENT 

//The  event  propagation  mode  determines  in  which  order
// the  event  recives  the  event

/******* BUBBLING(BOTTOM TO TOP) ********/
// With  Event Bubbling : the event is first captured and handled 
// by the innermost element and then propagated to outer elements

{/* <script>
        const var1 = document.getElementById('cont1');
        const var2 = document.getElementById('cont2');

        //////////////    FUNCTION     ///////////////
        parentcall=()=>{alert('Parent  Call');console.log('parent call')};
        childcall =()=>{alert('Child  call');console.log("chiled call");};

        //////////      Event Listener     ///////////
        var1.addEventListener('click',parentcall);
        var2.addEventListener('click',childcall);
</script> */}

/******* CAPTURING(TOP TO BOTTOM) OR (trickling) *******/
// with Event Capturing : the event is first captured by the outermost element
// and propagated to the inner elements

{/* <script>
const var1 = document.getElementById('cont1');
const var2 = document.getElementById('cont2');

//////////////    FUNCTION     ///////////////
parentcall=()=>{alert('Parent  Call');console.log('parent call')};
childcall =()=>{alert('Child  call');console.log("chiled call");};

//////////      Event Listener     ///////////
var1.addEventListener('click',parentcall,true);
var2.addEventListener('click',childcall,true);
</script> */}


/******** TARGETTING ***********/
// event.stoppropagation();

{/* <script>
        const var1 = document.getElementById('cont1');
        const var2 = document.getElementById('cont2');

        //////////////    FUNCTION     ///////////////
        parentcall=()=>{alert('Parent  Call');console.log('parent call')};
        childcall =()=>{alert('Child  call');console.log("chiled call");event.stopPropagation()};

        //////////      Event Listener     ///////////
        var1.addEventListener('click',parentcall);
        var2.addEventListener('click',childcall);
    </script> */}

////////////////    END     /////////////////////////

/*************call back and heigher order function */
// CREATE  A  CALCULATOR

// const sum = (num1,num2) =>{return num1 + num2};
// const diff = (num1,num2) =>{return num1 - num2};

// const calculator = (num1,num2,operator) =>{
//     return operator(num1,num2);
// }

// const num1 = calculator(5,2,sum);
// console.log(num1);

/****************** HOSTING ****************/
// // Hosting in JavasScrict
// // We have a creation phase and execution phase.

// // Hosting in javaScrict is a mechanism where variables and functions
// // declaration are moved tp the top-of-their-scope before the code execue.

// // For example

// console.log(myName);
// var myName;
// myName = "nayan";

// // How it will be output in creation phase
// 1. console.log(undefined);
// 2. var myName;
// 3. myName = "nayan"

// After ES6 

// // In Es6(2015) hosting is avoided by using let keyword
// // insted of var . (the other difference is that variable declared with let 
// // are local to the surrounding block , not the entier function)

// // it will give an error
// console.log(myName);
// let myName;
// myName = "nayan";

/**12:38 >> scope chain */
/*****************SCOPE CHAIN****************/
// what is scope chain and lexical scope in JavaScricpt?
// The scope chain is  used to resolve the value of variable means
// in JS

// // scope chain in JS is lexically defined, which means that
// // we can see what the  scope chain will be by looking at the code
// for example
// let PI = 3.1417;

// At the top, we have the Globa Scope, which is the window object
// in browser

// lexical Scopeing means Now, the inner function can get acces to their 
// parent function variable But the vice-versa is not true.

// for example

// let  a = "hello guys, ";// global scope

// const first = () =>{
    //     let b = " How are you";
    
    //         const secocnd = () =>{
        //             let c = " hi! I am Fine";
        //             console.log(a+b+c)
        //         }
        //         secocnd();
        // }
        
        // first();
        
        /**clouser 12:45 */
        /*****************Clouser****************/
        
        // // A closure is the combination of a function bundled togeather (enclosed) 
        // // with references to its surrounding state (the lexical environment).

        // // In other words, a closer gives you 
        // // access to an outer functon's scope from an inner function is created,
        // // at function creation time .

        // // In javaScript, closure are created every time a functin is created,
        // // at function creation time.

        // // for example

        // outerFun = (num1) =>{
        //     let b = 10;
        //         const innerFunc = () =>{
        //             let sum = num1+b;
        //             console.log(`the sum of the two no is ${sum}`);
        //         }
        //         return innerFunc();
        // }
        // // outerFun(3);

        // const rslt = outerFun(3)
        // rslt;                 // return the vale
        // // console.log(rslt); // print undefined after printing value 


        // outerFun = (num1) =>{
        //     let b = 10;
        //         const innerFunc = () =>{
        //             let sum = num1+b;
        //             console.log(`the sum of the two no is ${sum}`);
        //         }
        //         return innerFunc;    // returning
        // }
        // // outerFun(3);

        // const rslt = outerFun(3)
        // rslt();                 // return the vale
        
        // // console.log(rslt); // prints [Function: innerFunc]

        // console.dir(rslt);      // go to browser console

/*****************SCOPE CHAIN****************/

/////////// Synchronous JavaScript Prog  ////////////////

// const func1 = () =>{
//     console.log("function 1 is starting");
// };

// const func2 = () =>{
//     console.log("function 2 is starting");
//     func1();
//     console.log("function 2 is ending");
// };

// func2();

/////////// Asynchronus JavaScript Prog  /////////////
// const func1 = () =>{
//     setTimeout(()=>{
//         console.log("function 1 is starting");  // execution stack >> web API(3 second)
//                                                 // >> Message Queue(after 3 second)
//                                                 // >> execution Stack >> gives the output 
//     },3000);
// };

// const func2 = () =>{
//     console.log("function 2 is starting");
//     func1();
//     console.log("fuction 2 is ending");
// };

// func2();

/////////// Functin Carrying  /////////////

// curring is a techinque of evaluating function with multiple arguements, into
// sequence of function with single arguement.

// In other words, when a function instead of taking all arguements at one time,
// takes the first one and return a new function that takes the second
// one and returns a new fnction which takes the third one, and so forth,
// untill all arguements have been fulfiled.

// const sum = (num1)=>{
//     return (num2)=>{
//         return (num3)=> return num1+num2+num3;
//     }
// }

// function sum(num1) {
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(3)(4)(5);
                            /*OR */
// const sum = (num1) =>{
//     return (num2) =>{
//         return (num3) =>{console.log(num1+num2+num3);}
//     }
// }
// sum(3)(4)(5);
                            /*OR */
// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(3)(4)(5);

// XMLHttpRequest (XHR) object are usef to interact with server. you can retrieve
// data from a URL without having to do full page refresh. This enables a web page to
// just part of a page without disrupting what the user is doing. XMLHttpRequest 
// is used heavily in AJAX programing.

// AJAX
// Ajax, which initially stood for Asynchronus JavaScript and XML, is a programing 
// practice of building complex, dynamic webpages using technology known as XMLHttpRequest.


// 13:35
// REST API     // postman  //mongo postman express node

{/* <script>
        const container = document.querySelector('#cont');

        const request = new XMLHttpRequest();
        request.open('GET',"https://restcountries.eu/rest/v2/name/nepal");
        request.send();

        // to get the response

        request.addEventListener('load', function(){
            // const data = this.responseText;
            // console.log(data);
            const [Dta] = JSON.parse(this.responseText)
            console.log(Dta);
            // console.log(Dta.capital);
            const htmlDta = `
                <div id="flag" class="img"><img class="img" src="${Dta.flag}" alt="img"></div>
                <hr>
                <br><div class="cntryNam" id="ctn"><h3>${Dta.name}</h3></div>
                <br><div id="cptl"><h3>${Dta.capital}</h3></div>
                <br><div id="lan"><h3>${Dta.nativeName}</h3></div>
            `;
            container.insertAdjacentHTML('afterbegin',htmlDta)
        });
    </script> */}

/************************************************ JSON  *******************************/

// // JSON.stringify turns a javaScript object into JSON text and
// // stores that JSON text in a string, eg;

// const myBio = {
//     fullName : {
//         fName : "Nayan",
//         lName : "Baruah",
//     },
//     myAge : 21,
//     gender : "male",
//     education : {
//         school : "Modern English  School",
//         college : "K.C.Das Commerce College",
//     }
// }
// console.log(myBio);
// console.log("\n");
// console.log(typeof(myBio));
// console.log("\n");
// let object_string = JSON.stringify(myBio);
// console.log("\n");
// console.log(object_string);
// console.log("\n");
// console.log(typeof(object_string));
// console.log("\n");

// // JSON.parse turns a string of JSON text into a JavaScript object, eg:

// const object_string_object = JSON.parse(object_string);
// console.log(object_string_object);
// console.log(typeof(object_string_object));

/****************** PROMISE(fetch method)  *****************************/

// 2condition => succ => fail

// fetch('https://restcountries.eu/rest/v2/name/nepal')

// milaga => sahi hai => Fulfilled
// nai milaga => internet error. server error => Rejected

// Fulfilled
// Rejected

// 90% promise consumed and 10% create

// fetch()
// Fulfilled
// Rejected
// then then then

{/*    <script>
        const joke = document.querySelector('#joke');
        const btn = document.querySelector('#btn');

        const setHader= {
            headers : {
                Accept : "application/json",
            }
        }
        const crackJoke=()=>{
                fetch('https://icanhazdadjoke.com',setHader)
                .then((res) => res.json())                    // we get response
                .then((data)=>joke.innerHTML = data.joke)     // we extract data from response
                .catch((error)=>console.log(error))
        }
        btn.addEventListener('click',crackJoke);
        crackJoke();
    </script>  */}

    // to get data in JSON format we net to set headers Accept to "application/json"
    // /* * */setHader = { headers:{Accept:"application/json"}} 
    
    // /* * */num1.jason() 
    //mention json format(that means we need the request in JSON form)(*it doesnt converts)

/*********************** async await ***********************/

{/* <script>// 21638 
    // 22300GET https://icanhazdadjoke.com/
    </script> */}
    

{/* <script>
         const joke = document.querySelector('#joke');
        const btn = document.querySelector('#btn');

        // async function crackJoke(){}

        const crackJoke = async() =>{
            try{
                const setHadr = {
                    headers: {
                        Accept : "application/json"
                    }
                }
                const res = await fetch('https://icanhazdadjoke.com',setHadr)
                const data = await res.json();
                joke.innerHTML = data.joke;
            }catch(err){
                console.log(`the erro is ${err}`);
                joke.innerHTML = `${err}`;
            }
        }

        btn.addEventListener('click',crackJoke);
        crackJoke();
</script> */}


// creating async function
// // traditional way
// async function func1(){
//     const res = await fetch('#',setHadr);  // it will return promish and the data we get will be stored in res
//     const data = await res.json()          // data will be converted to json
// }

// modern way 
// const func = async() =>{}

////////// error handeling in async await
////////// try
// // sytax
// // func = async()=>{
// //     try{}catch(){}
// // }

// async function func1(){
//     try{
//         const res = await fetch('#',setHadr);  // it will return promish and the data we get will be stored in res
//         const data = await res.json()          // data will be converted to json
// }catch(err){
//     console.log(`the error is ${err}`);
// }}
        

///////////////// project section ////////////////////

/**********From project_03 */
// // there are several ways to achieve it:

// // using the unary plus operator:
// var n = +str;

// // The Number constructor:
// var n = Number(str);

// // The parseFloat() function
// var n = parseFloat(str);
        

/*************************************************************************/
/*                      From project notes                               */
/*************************************************************************/

//////create Element/////////
// used to create element (such as {div,p,input,...etc})
// document.createElent('elem')   //where elem = {div,p,input,...etc};


/////classList//////////////
//used to add or remove classes or classnames 
//document.classList.add('clsName');

// also in a more complex way it may be;
// document.querySelector('.cont').classList.add('clsName');

//                      OR

// const var1 = document.querySelector('.cont');
// var1.classList.remove('clsName')

////////////insertAdjacentHTML()//////////////////
// it takes two arguements 
// first is where to place the HTML data {'afterbegin'/'beforebegin'/''/''}
// second arguement is a variable that contains the html data stored
// const htmlDta = `
                        // <h1 class="cont1"> nayan </h1>
                // `;
// insertAdjacentHTML('afterbegin',htmlDta)




















































































































