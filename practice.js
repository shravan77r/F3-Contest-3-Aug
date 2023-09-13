//Q1-----------
// const prom1= new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
		
// 		console.log(b);
// 		resolve('foo');
// 	},300);
// });
// const prom2 = new Promise((resolve, rejecr)=>{
// 	setTimeout(()=>{
// 		resolve("bar");
// 	},200);
// });

// Promise.race([prom1, prom2])
// .then(value=>console.log(value))
// .catch(error=>console.log(error.message));

////-----
////output:- bar

//-----------------------------------------------

//Q2-----------
// async function foo(){
//     console.log("hello");
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('world');
// }

// foo();
// console.log('end');
// //-----
// //output:- hello end world

//-----------------------------------------------

//Q3-----------
// var elem = document.createElement('div');
// elem.innerHTML = "<p>Hello World</p>";
// document.body.insertBefore(elem.firstChild, document.getElementById('test'));
// console.log(document.body.innerHTML);

// //-----
// //output:- null

//-----------------------------------------------

//Q4-----------
// var elem = document.createElement('img');
// elem.src = "imge.jpg";
// elem.alt="img1";
// document.insertBefore(elem, document.getElementById('mydiv'));
// console.log(document.body.innerHTML);

//-----------------------------------------------
// //Q5-----------
// const prom1= new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve('foo');
// 	},300);
// });
// const prom2 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		reject(new Error('bar'));
// 	},200);
// });

// Promise.race([prom1, prom2])
// .then(value=>console.log(value))
// .catch(error=>console.log(error.message));

////-----
////output:- bar

//-----------------------------------------------
//Q6---------
// function printArray(a) { 
// 	var len = a.length, i = 0;
// 	 if (len == 0) 
// 	 	console.log("Empty Array");
// 	 else { 
// 		// do-while loop in javascript 
// 		do { 
// 			console.log(a[i]); 
// 		} while (++i < len); 
// 	} 
// }
////-----
////output:- prints elements

//-----------------------------------------------
//Q7---------
// const mypromise=Promise.resolve('woah some cool data');
// (async () => {
// 	try{
// 		console.log(await mypromise);
// 	}
// 	catch{
// 		throw new Error('Oops didnt work');
// 	}
// 	finally{
// 		console.log("Oh finally");
// 	}
// })();
////-----
////output:- woah some cool data Oh finally

//-----------------------------------------------
//Q8---------
// const mypromis = Promise.resolve(Promise.resolve('Promise'));
// function funOne(){
// 	setTimeout(()=>console.log('Timeout 1!'),0);
// 	mypromis.then(res=>res).then(res => console.log(`${res} 1!`));
// 	console.log('Last Line 1!');
// }

// async function funTwo(){
// 	const res = await mypromis;
// 	console.log(`${res} 2!`);
// 	setTimeout(()=>console.log('Timeout 2!'),0);
// 	console.log('Last Line 2!');
// }
// funOne();
// funTwo();
////-----
////output:- Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!

//-----------------------------------------------
//Q9---------
//[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
////-----
////output:- 1 2 and undefined 3 and undefined 4

//-----------------------------------------------
//Q10---------
// let config = {
// 	alert : setInterval(()=>{
// 		console.log('Alert!');
// 	}, 1000)
// }
// config = null;
////-----
////output:- The setInterval callback will still be called every second

//-----------------------------------------------
//Q11---------
const prom1 = Promise.resolve('First');
const prom2 = Promise.resolve('Second');
const prom3 = Promise.reject('Third');
const prom4 = Promise.resolve('Fourth');

const runprom = async () => {
 const res1 = await Promise.all([prom1,prom2]);
 const res2 = await Promise.all([prom3,prom4]);
 return [res1,res2];
}
runprom()
.then(res => console.log(res))
.catch(err => console.log(err));
////-----
////output:- Third

//-----------------------------------------------
//Q12---------
