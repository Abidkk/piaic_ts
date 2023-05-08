/// ::: 05c Stractural Typing :::
// Here two Objects are completely transferable in a stractural type system.
// Transferable when (Keys and dataTypes ) are same

///-----------------------------------------------------------------
// Method-01 With interfaces
//01
// interface myCity {
//   city:string
//   }
  
// //02
// interface yourCity  {v
//     city:string
//   }
  
//   // Assigning values.
//   let city1 :myCity = {city : 'Karachi'};
//   let city2 :yourCity = {city : 'Mirpurkhas'};
  
  
//   console.log(city1) // Karachi
//   console.log(city2) // Mirpurkhas'
  
//   // tranfering to eachother
//   city1 = city2 ;
//   city2 = city1 ;
  
//   console.log(city1); // Mirpurkhas
//   console.log(city2); // Karachi




////-----------------------------------------------------------------------
//  // Method-2 With type
// //  01
// type myCity = {
//   city:string
//   }
  
// //02
// type yourCity = {
//     city:string
//   }
  
//   // Assigning values.
//   let city1 :myCity = {city : 'Karachi'};
//   let city2 :yourCity = {city : 'Mirpurkhas'};
  
  
//   console.log(city1) // Karachi
//   console.log(city2) // Mirpurkhas'
  
//   // tranfering to eachother
//   city1 = city2 ;
//   city2 = city1 ;
  
//   console.log(city1); // Mirpurkhas
//   console.log(city2); // Karachi

////---------------------------------------------------------------------
  // Method-3 Inline (without interface and type)

  // let city1 :{city:string} = {city:'Karachi'};
  // let city2 :{city:string} = {city:'Mirpurkhas'};

  // console.log(city1) // Karachi
  // console.log(city2) // Mirpurkhas'
  
  // // tranfering to eachother
  // city1 = city2 ;
  // city2 = city1 ;
  
  // console.log(city1); // Mirpurkhas
  // console.log(city2); // Karachi


// //-----------------------------------------------------------------......
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // What happpen if we change the key order Lets see!
// interface myAddress1 {
//   country:string,
//   city:string
// }

// interface yourAddress1 {
//   city:string,
//   country:string
// }


// let myAddress : myAddress1 = { country:'Pakistan', city:'Karachi',};
// let yourAddress : yourAddress1 = { city:'Delhi', country:'India'};

// console.log(myAddress); // Karachi ,Pakistan
// console.log(yourAddress); // Delhi , India

//  // transfering 
// myAddress = yourAddress;
// yourAddress = myAddress;

// console.log(myAddress) // Delhi , India
// console.log(yourAddress) // Karachi Pakistan

// // No issue of changing order interface and in type too.


////---------------------------------------------------------------------------
// // Here we have Less (key , values ) in interface-1 than interface-2
// interface myAddress1 {
//   country:string,
// }

// interface yourAddress1 {
//   city:string,
//   country:string
// }


// let myAddress : myAddress1 = { country:'Pakistan'};
// let yourAddress : yourAddress1 = {city:'Delhi',country:'India'};

// console.log(myAddress); // Karachi ,Pakistan
// console.log(yourAddress); // Delhi , India

//  // transfering 
//  myAddress = yourAddress;
// yourAddress = myAddress; // error

// console.log(myAddress) // Delhi , India
// console.log(yourAddress) // Karachi Pakistan

// // Error Detail :
// // Because yourAddress/interface-2 has more keys, values than myAddress/interface-1
// // get understand with an example :
// // we have a (glass of water )  and a (Jug of Water).
// // We can put whole glass water into a jug.But vice versa is not possible.
 

////<<<<<<>>>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<

// let myData = {name:'Abid',id: 45};
// myData = {id:50, name:'Abid KK'}; // changing order. no issue
// myData = {id:50, my_name:'Abid KK'} // changing key name is an error
// myData = {id:50, }  // missing key,value is also an error
// myData = {id:45, name:'Abid', age:23}// extra keys,values is an error too.

//------------------------------------------------------------------------------------
// // A scenario". Supose that we know that the first key will be id ,but what happend if we dont know what will be the key ,value :
// let data1: {id:number, [y:string]:any }
// data1 = {id:45, name:'Abid'};
// data1 = {id:45, fullName:'Abid Ali Khokahr'};
// data1 = {id:50, code:123};
// data1 = {id:50, status:true};
// data1 = {name:'abid', id:34};

//Now You can see last four/five example there is no issue of changing key,values (datatypes) of second stage.
//But it will still show error on changing first key, values

//// ---------------------------------------------------------------------------------
//  FRESH and Stale Object
// In Fresh we cant assign extra values but in stale we can.

// let data1 = { id:45, name:'Abid' };  
// console.log(data1)

// var data2 = { id: 50,  name: "Abid", age: 23 };

// data1 = data2;
// //here data1 i a stale object

// // // ---------------  more about STALE and FRESH :  

// let data1 = {name:'Abid', id:45, city:'Mirpurkhas'};  //here data 1 is stale;
// let data2 = {name:'Abidkk', id:50};

// data2 = data1 // now data1 is a stale object 
// // here i am transfering data1 to data2 .And data1 has more values than data2. 
// // And Its not showing any error 

// data2 = {name:'Abid',id:45 , city:'Mirpurkhas'} // error becauese we here assigning FRESH values.
// // it has capicity of 2 values but we are assigning more than 2 .
// // if we want to assing more values . so have to make a stale object. see below

// let data3 = {name:'imran', id:500, city:'Lahore', Country:'Pakistan', status:true}; // 
// /// now we are assigning a fresh object (data3) as a stale in data2
// data2 = data3 // no error

/////       -=========================================================================================
////        ==========================================================================================

/////                     >>>>>>>>>>>    Step -05d (Nested objects)                   <<<<<<<<<<<<<<


//// Nested Object  Example-1 With type
// obj-1
// type Author = {
//   firstName: string;
//   lastName: string;
// };

// // obj-2 + obj1 / Nesting
// type Book = {
//   author: Author;
//   name: string;
// };

// //asigining values 
// const myBook : Book = {
//   author: {
//       firstName: "Zia",
//       lastName: "Khan"
//   },
//   name: "My Best Book"
// }
// console.log(myBook)



// /////  Nested Object  Example-2 With type
// // obj-1
// type captian = {
//   name:string;
//   age:number;
// }

// // obj-2 + obj1 / Nesting
// type team = {
//   Captain :captian;
//   teamName:string
// }

// //asigining values 
// let myTeam : team = {
//   Captain :{
//     name:'Abid AALi',
//     age:23

//   },
//   teamName:'Seven Star'
// }
// console.log(myTeam)




// ///  Nested object  Exapmple-3 type 
// // obj-1
// type  principal = {
//   name:string;
//   status:boolean;
// };
// // obj-2 + obj1 / Nesting
// type school = {
//   Principal :principal;
//   schoolName:string;
//   city:string;
//   regCode:number
// };

// //asigining values 
// let mySchool : school = {
//   Principal : {
//     name:'Abid Ali',
//     status:true
//   },
//   schoolName:'The Islamic Educator',
//   city:'Mirpurkhas',
//   regCode:445500
// }
// console.log(mySchool);


///////////// >>>>>     Nested Objects With interface     <<<<<<<<<<<<<<<<  ///


//// Nested Object  Example-1 With interface
// // obj-1
// interface Author  {
//   firstName: string;
//   lastName: string;
// };

// // obj-2 + obj1 / Nesting
// interface Book  {
//   author: Author;
//   name: string;
// };

// //asigining values 
// let myBook : Book  = {
//   author : {
//       firstName: "Zia",
//       lastName: "Khan"
//   },
//   name: "My Best Book"
// }
// console.log(myBook)



/////  Nested Object  Example-2 With interface
// // obj-1
// interface captian  {
//   name:string;
//   age:number;
// }

// // obj-2 + obj1 / Nesting
// interface team  {
//   Captain :captian;
//   teamName:string
// }

// //asigining values 
// let myTeam : team = {
//   Captain :{
//     name:'Abid AALi',
//     age:23

//   },
//   teamName:'Seven Star'
// }
// console.log(myTeam)



///  Nested object  Exapmple-3 interface
// obj-1
// interface  principal  {
//   name:string;
//   status:boolean;
// };
// // obj-2 + obj1 / Nesting
// interface school {
//   Principal :principal;
//   schoolName:string;
//   city:string;
//   regCode:number
// };

// //asigining values 
// let mySchool : school = {
//   Principal : {
//     name:'Abid Ali',
//     status:true
//   },
//   schoolName:'The Islamic Educator',
//   city:'Mirpurkhas',
//   regCode:445500
// }
// console.log(mySchool);



///////////// >>>>>     Nested Objects With inline method    <<<<<<<<<<<<<<<<  ///

// let city1 :  {name:string} = {name:'Mirpurkhas'};

// let city2:{name: string} = {name:'Karachi'};

// // console.log(city1);
// // console.log(city2);

// let cities : {name:string} = {name:'Lahore'} && {name: city1} 
// console.log(cities)




///// -=========================================================================================
////  ==========================================================================================
/////     >>>>>>>>>>>    Step -05e (Intersection  Types) Merge Objects            <<<<<<<<<<<<<<

// ///         ::::::  Example -1 with interface    :::::::
// // obj-1
// interface student {
//   studentName:string;
//   rollNo:number;
//   city:string
// };
// // obj-2
// interface teacher {
//   teacherName:string;
// };

// // merging
// type mergedData = student & teacher;

// // assigning values ;
// let data : mergedData={
//   studentName:'Abid Ali',
//   rollNo:194948,
//   city:'Mirpurkhas',
//   teacherName:'Zia Khan'
// }
// console.log(data);




// ///             ::::::  Example -2 with interface   :::::
// //obj-1
// interface team_A {
//   team_A_score:number
// }

// //obj-2
// interface team_B {
//   team_B_score:number
// }

// // merging
// type scores = team_A & team_B;

// //assigning values
// let totalScore :scores = {
//   team_A_score:45,
//   team_B_score:15
// }
// console.log(totalScore);



// ///             ::::::  Example -3 with interface   :::::
// //obj-1
// interface student_1 {
//   s1_rollNo:number;
//   s1_name:string;
//   s1_age:number;
//   s1_city:string;
//   s1_status:boolean;
// }

//   //obj-2
// interface student_2 {
//   s2_rollNo:number;
//   s2_name:string;
//   s2_age:number;
//   s2_city:string;
//   s2_status:boolean;
// }

//   //obj-3
//   interface student_3 {
//     s3_rollNo:number;
//     s3_name:string;
//     s3_age:number;
//     s3_city:string;
//     s3_status:boolean;
//   }
  

//     //obj-4
//     interface student_4 {
//       s4_rollNo:number;
//       s4_name:string;
//       s4_age:number;
//       s4_city:string;
//       s4_status:boolean;
//     }
    
    
//     //obj-5
//     interface student_5 {
//       s5_rollNo:number;
//       s5_name:string;
//       s5_age:number;
//       s5_city:string;
//       s5_status:boolean;
//     }

//     // merging 
//     type alldata = student_1 & student_2 & student_3 & student_4 & student_5;

//     // assigning values:
//     let studentsData : alldata = {

//       s1_rollNo:45,
//       s1_name:"Abid Ali",
//       s1_age:23,
//       s1_city:"Mirpurkhas",
//       s1_status:true,

//       s2_rollNo:46,
//       s2_name:"Imran Ali",
//       s2_age:25,
//       s2_city:"Islamabad",
//       s2_status:false,

//       s3_rollNo:47,
//       s3_name:"Zahid Hussain",
//       s3_age:45,
//       s3_city:"Hyderabad",
//       s3_status:true,

//       s4_rollNo:48,
//       s4_name:"Bilal Ahmed ",
//       s4_age:28,
//       s4_city:"Karachi",
//       s4_status:false,

//       s5_rollNo:49,
//       s5_name:"Taimoor",
//       s5_age:32,
//       s5_city:"Lahore",
//       s5_status:true,

//     }

//     console.log(studentsData)






// ///         ::::::  Example -1 with type   :::::::
// // obj-1
// type  student = {
//   studentName:string;
//   rollNo:number;
//   city:string
// };
// // obj-2
// type teacher = {
//   teacherName:string;
// };

// // merging
// type mergedData = student & teacher;

// // assigning values ;
// let data : mergedData={
//   studentName:'Abid Ali',
//   rollNo:194948,
//   city:'Mirpurkhas',
//   teacherName:'Zia Khan'
// }
// console.log(data);


// ///             ::::::  Example -2 with type   :::::
// //obj-1
// type team_A = {
//   team_A_score:number
// }

// //obj-2
// type team_B = {
//   team_B_score:number
// }

// // merging
// type scores = team_A & team_B;

// //assigning values
// let totalScore :scores = {
//   team_A_score:45,
//   team_B_score:15
// }
// console.log(totalScore);



// ///             ::::::  Example -3 with type  :::::
// //obj-1
// type student_1 = {
//   s1_rollNo:number;
//   s1_name:string;
//   s1_age:number;
//   s1_city:string;
//   s1_status:boolean;
// }

//   //obj-2
// type student_2 = {
//   s2_rollNo:number;
//   s2_name:string;
//   s2_age:number;
//   s2_city:string;
//   s2_status:boolean;
// }

//   //obj-3
//   type student_3 = {
//     s3_rollNo:number;
//     s3_name:string;
//     s3_age:number;
//     s3_city:string;
//     s3_status:boolean;
//   }
  

//     //obj-4
//    type student_4 ={
//       s4_rollNo:number;
//       s4_name:string;
//       s4_age:number;
//       s4_city:string;
//       s4_status:boolean;
//     }
    
    
//     //obj-5
//     type student_5 = {
//       s5_rollNo:number;
//       s5_name:string;
//       s5_age:number;
//       s5_city:string;
//       s5_status:boolean;
//     }

//     // merging 
//     type alldata = student_1 & student_2 & student_3 & student_4 & student_5;

//     // assigning values:
//     let studentsData : alldata = {

//       s1_rollNo:45,
//       s1_name:"Abid Ali",
//       s1_age:23,
//       s1_city:"Mirpurkhas",
//       s1_status:true,

//       s2_rollNo:46,
//       s2_name:"Imran Ali",
//       s2_age:25,
//       s2_city:"Islamabad",
//       s2_status:false,

//       s3_rollNo:47,
//       s3_name:"Zahid Hussain",
//       s3_age:45,
//       s3_city:"Hyderabad",
//       s3_status:true,

//       s4_rollNo:48,
//       s4_name:"Bilal Ahmed ",
//       s4_age:28,
//       s4_city:"Karachi",
//       s4_status:false,

//       s5_rollNo:49,
//       s5_name:"Taimoor",
//       s5_age:32,
//       s5_city:"Lahore",
//       s5_status:true,

//     }

//     console.log(studentsData);

// //  Difference between intersect and Union
////  In union we can any one type at a time
//// but in intersect we merge and use multiple type at one time 


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//////          ::::::::      STEP O5F Any Casting      :::::::::              / ////// 

////      (any) ---  (unknown)  --- (never)

// // Any

// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK


// //Unknown

// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK


// // Assigning a value of type unknown to variables of other types

// let val: unknown;
// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// // Never

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
 
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
 
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }



// let a : unknown ;

// a = 45; 
// a = "abid";
// a = true;
// a = ['red','blue','green'];
// a = null;
// a = undefined;

// // here a is unknown . we can assign all type to unknown :
//  let b : unknown;

//  let val : string = b



 /// Need to understand more detail ::::::



 ////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////
 /////                 :::::  ( 06 - Explicit Casting )      ::::::                 /////////
 

//  let myname: unknown = "Zia";
// console.log((myname as string).length);  // casting method-1
// console.log((<string> myname).length)  // casting method-2
// /// Generic






 ////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////
 /////                 :::::  ( 07a - Enum )      ::::::                 /////////

 
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

// /// gerring value
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);


// // getting index value
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);




 ////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////
 /////                 :::::  ( 07c - const enum )      ::::::                 /////////


// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);


// do not use index to get vlaue
// use name like color.Blue
