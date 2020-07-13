//- створити функцію яка виводить масив

  //let func = [1, 'hallo', 5,17, 'you'];
//function funcLog(array) {
    //for(let i of array) {
        //console.log(i);}}
        //funcLog(func)

    //- створити функцію яка заповнює масив рандомними числами та виводить 
    //його. Для виведення використати попвередню функцію.
//let func1 = []
//function randfunc (rand){
//for (let i=0;i<10;i++){
//rand.push(Math.floor(Math.random()*100))}}
//randfunc(func1)
//funcLog(func1)

   //- створити функцію яка приймає три числа
   //та виводить та повертає найменьше. 

//function func2 (a,b,c){
//let minfunc = Math.min(a,b,c)
//console.log(minfunc)
//return minfunc}
//func2 (6,86,-1)

  //- створити функцію яка приймає три числа та виводить та повертає
  //найбільше

//function func3 (a,b,c){
//let maxfunc = Math.max(a,b,c)
//console.log(maxfunc)
//return maxfunc}
//func3 (17,1,987)

   //- створити функцію яка приймає будь-яку кількість чисел, повертає
   //найменьше, а виводить найбільше

   //function  func4 () {
//let min = arguments [0]
//let max = arguments [0]

//for (let i=0;i<arguments.length;i++){
//if (arguments[i]<min) {min=arguments[i]}
//if (arguments[i]>max) {max=arguments[i]}}

   //console.log(max)
   //return min }
   //let minn=func4(17,46,52,36,89,-8,55,999,0,34,21,65) 
   //console.log(minn)
 
   // - створити функцію яка виводить масив

   //let func = [1, 'hallo', 5,17, 'you'];
//function funcLog(array) {
    //for(let i of array) {
    //console.log(i);}}
    //funcLog(func)

  //  - створити функцію яка повертає найбільше число з масиву 
 
 //let Numbers = [1, 3000, 6, 55, 10, -6];
//function maxNumber(arr) {
//let max = arr[0];
//for (let i = 0; i < arr.length; i++) {
    //if (arr[i] > max)
     // max = arr[i]}
  //console.log(max + 'MAX')}
  //maxNumber(Numbers)
  
  //- створити функцію яка повертає найменьше число з масиву

  //let Numbersmin = [1, 3000, 6, 55, 10, -6];
  //function minNumber(arr) {
  //let min = arr[0];
  //for (let i = 0; i < arr.length; i++) {
      //if (arr[i] < min)
       // min = arr[i]}
   // console.log(min + 'MIN')}
   // minNumber(Numbersmin)

// - створити функцію яка приймає масив чисел та складає значення
// елементів масиву та повертає його.

//let NumbersCalculator = [1, 3000, 6, 55, 10]
//function plusNumber(arrNumb) {  
//let summ = arrNumb.reduce((total,amount)=>total+amount)
  //console.log(summ)
  //return summ}
  //plusNumber(NumbersCalculator)

  //- створити функцію яка приймає масив чисел та повертає середнє
  // арифметичне його значень.

  //let Number1 = [50, 300, 6, 55, 10]
//function midlsumm(arrNumb) {  
//let summ1 = arrNumb.reduce((total,amount)=>total+amount)
//let result = summ1/arrNumb.length
  //console.log(result)
  //return result}
  //midlsumm(Number1)

  //- Створити функцію яка приймає масив будь яких объектів, та повертає 
  //значення кількості об'єктів в масиві

//function sumObj(arr) {
// for(let i=0;i<arr.length;i++)
//arr [i]=Object
// console.log(arr.length)
// return arr.length}
//sumObj([15,45,87,'you'])

//- Створити функцію яка приймає масив будь яких объектів, 
//та повертає загальн кількість полів в них

  //function obg(array) {
    //let summ=0
    //for(let x of array){
       // for (let xKey in x){summ++}}
   // console.log(summ)
    //return summ}
    //obg(['hello','how','are','you'])

   //- створити функцію  яка скаладає значення елементів з однаковими 
   //індексами  та повертає новий результуючий масив.
   //Приклад[1,2,3,4]
    //[2,3,4,5]     
    //результат
    //[3,5,7,9]

    //function summArr (arr1,arr2){
    //let resultArr = []
//for (let i=0;i<arr1.length;i++){
//let summOfElems=arr1[i]+arr2[i]
//resultArr.push(summOfElems)}
//return resultArr}

//let arr3 = summArr([2,3,4,5],[1,2,3,4])
//console.log(arr3)

//- *** приймає масив та число "i", та міняє місцями
// об`єкт який знаходиться в індексі "i" на "i+1"

//function ichange (array,i){
   // let buffer =array[i]
   // array[i]=array[i+1]
   // array[i]=i+1
   // console.log(array)}
//ichange([3,4,67,43,23,65], 43)

//- *** створити функцію яка буде переносити елементи з значенням 0
// у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100

//const func3 = (array) =>{
   //let newFunc = []
     //let zerend = []
     //for (let i = 0; i<array.length; i++) {
       // let elem = array[i];
         //if(elem === 0){
          //zerend.push(elem)
       //}else{
           // newFunc.push(elem)}}
   //return newFunc.concat(zerend)}
 //console.log(func3([50, 0, 39, 43, '', 5, 70, 30, 0, ]))


//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
//let div = document.createElement('div');
  // div.innerHTML = "Hi everyone";
  //document.body.appendChild(div);

//- Додає в боді елемент з текстом . Тип елементу та текст 
//отримати через аргументи

    //function addtext (type,text){
        //document.body.innerHTML = `${text}`}
//addtext('div', 'text')
        
//- приймає масив автомобілів (можна взяти з попередніх дз ),
//та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, 
//індентифікатор якого ви отримали. Всі властивості авто в обному блоці

//let cars = [ {model: 'tesla', year: 2020, power:170, color:'red'},
            // {model: 'niva', year: 2000, power:100, color:'blue'},
             //{model: 'nissan', year: 1995, power:170, color:'black'},
             //{model: 'mazda', year: 2019, power:166, color:'white'},
             //{model: 'bmv', year: 2004, power:200, color:'silver'},]       

     //let div1 = document.getElementById(elementID)
    //for (let index = 0; index < cars.length; index++) {
    //let element = cars[index];
    //let text = 'Тип елементу та текст'   

      //let ul = document.createElement('ul');
       //div1.appendChild(ul);
             
    //let l1 = document.createElement('li');
    //l1.innerHTML = `${element.model}`;
     //ul.appendChild(l1);
             
     // let l2 = document.createElement('li');
     //l2.innerHTML = `${element.year}`;
     // ul.appendChild(l2);
             
     //let l3 = document.createElement('li');
     //l3.innerHTML = `${element.power}`;
     //ul.appendChild(l3);
             
    //let l4 = document.createElement('li');
     //l4.innerHTML = `${element.color}`;
    // ul.appendChild(l4);}

   // const elementID = 'idi'
   //function9(text, cars, elementID)

