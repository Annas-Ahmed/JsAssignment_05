// question1
// function dateTime(){
//     console.log(new Date())
// }
// dateTime()

// question2
// function fullName(){
//     firstName=prompt("Enter first Name")
//     lastName=prompt("Enter last Name")
//     console.log(firstName+lastName)
// }
// fullName()

// question3
// function sum(){
//     firstNum=+prompt("Enter first Num")
//     lastNum=+prompt("Enter last Num")
//     console.log(firstNum+lastNum)
// }
// sum()

// question4
// function calculate(){
//     firstNum=prompt("Enter first Num")
//     operation=prompt("Enter operation")
//     secondNum=prompt("Enter second Num")
//     console.log(eval(firstNum+" "+operation+" "+secondNum))
// }
// calculate()

// question5
// function square(num){
//     console.log(num*num)
// }
// square(5)

// question6
// function fact(num){
//     factorial=1
//     f=num
//     for (i=1;i<num;i++){
//         f=f*i
//     }
//     console.log(factorial)
//     console.log(f)
// }
// fact(10)

// question7
// function counting(start,end){
//     for (i=start;i<=end;i++){
//         console.log(i)
//     }
// }
// counting(5,25)

// question8
// function hypotenuse(base,perpendicular){
//     function square(num){
//         return(num*num)
//     }
//     hyp=square(base)+square(perpendicular)
//     console.log(hyp)
// }
// hypotenuse(5,5)

// question9
// function aot(height,base){
//     area=base*height
//     console.log(area)
// }
// aot(5,10)
// height=5
// base=10
// aot(height,base)

// question10
// function chkreverse(word){
//     temp=word.split("").reverse().join("")
//     if(temp==word){
//         console.log("palindrome")
//     }
//     else{
//         console.log("not palindrome")
//     }
// }
// word=prompt("Enter any word")
// chkreverse(word)

// question11
// function capitalise(sentence){
//     temp=sentence.split(" ")
//     for (var i=0;i<temp.length;i++){
//         temp1=temp[i].split("")
//         temp1[0]=temp1[0].toUpperCase()    
//         temp1=temp1.join("")
//         temp[i]=temp1
//     }
//     temp=temp.join(" ")
//     console.log(temp)
// }
// capitalise("the quick brown fox")

// question12
// function longest(sentence){
//     var temp=sentence.split(" ")
//     longestWord=temp[0]
//     var arr=[]
//     for (var i=0; i<temp.length;i++){
//         if(temp[i].length>longestWord.length){
//             longestWord=temp[i]
//             arr=[]
//         }
//         else if(temp[i].length==longestWord.length){
//             arr=[longestWord,temp[i]]
//         }
//     }
//     if (arr.length==0 ){
//         console.log(longestWord)
//     }
//     else{
//         console.log(arr)
//     }
// }
// longest("Web Development Tutorial")

// question13
// function countOccurence(string,letter){
//     count=0
//     temp=string.split("")
//     for (var i=0;i<temp.length;i++){
//         if(temp[i].toUpperCase()==letter.toUpperCase()){
//             count+=1
//         }
//     }
//     console.log(count)
// }
// countOccurence('JSResourceS.com', 'o')

// question14
// function calcCircumference(r){
//     circumference=2*3.142*r
//     console.log("The Circumference of the circle is %d",circumference)
// }
// function calcArea(r){
//     Area=3.142*r*r
//     console.log("The Area of the circle is %d",Area)
// }
// calcCircumference(5)
// calcArea(5)