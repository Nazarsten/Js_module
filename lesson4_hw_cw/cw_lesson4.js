//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c) {
//     if(a-c<0 && a-b<0){
//         console.log(a)
//     }else if( b-a<0 && b-c<0){
//         console.log(b)
//     }else if(c-a<0 && c-b<0){
//         console.log(c)
//     }
// }
// min(12,0.2,1);
//------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a,b,c) {
//     if(a-c>0 && a-b>0){
//         console.log(a)
//     }else if( b-a>0 && b-c>0){
//         console.log(b)
//     }else if(c-a>0 && c-b>0){
//         console.log(c)
//     }
// }
// max(12000,224,1000);
//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
//
// let array =[1,254,648,784,121,23,48,1208,1,2,30];
// function maxNumberOfArray(array) {
//         let max1 =Math.max.apply(null,array)
//     console.log(max1);
// }
// maxNumberOfArray(array);

// - створити функцію яка повертає найменьше число з масиву
// let array =[1,254,648,784,121,23,48,1208,0.2,2,30];
// // function min(array) {
// //     let min1 = Math.min.apply(null,array)
// //     console.log(min1)
// // }
// // min(array);
//-----------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array =[1,254,648,784,121,23,48,1208,0.2,2,30];
// function sum(array) {
//     let sum =0;
//     for (i=0; i<array.length; i++){
//         sum = sum+array[i]
//     }
//     console.log(sum);
// }
// sum(array);
//----------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array =[1,254,648,784,121,23,48,1208,0.2,2,30];
// // function avg(array) {
// //     let sum =0;
// //     for (i=0; i<array.length; i++){
// //         sum = sum+array[i]
// //     }
// //     console.log(sum/array.length);
// // }
// // avg(array);
//---------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//---

//-----------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomaizer() {
//     let arr=[];
//     for(i=0; i<100; i++){
//         arr[i]=(Math.round(Math.random()*100))
//     }
//     console.log(arr)
// }
// randomaizer();
//---------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomaizer() {
//     let arr=[];
//     let limit=100000;
//     for(i=0; i<10; i++){
//         arr[i]=(Math.round(Math.random()*limit))
//     }
//     console.log(arr)
// }
// randomaizer();
//--------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array =[1,254,648,784,121,23,48,1208,0.2,2,30];
// function reverse(array) {
//     let revArr=[];
//      for(i=array.length-1;i>=0;i--){
//          revArr.push((array[i]))
//   }
//   console.log(revArr)
// }
// reverse(array);