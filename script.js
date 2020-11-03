/* 
  You are given arrays.
*/

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];



//Step 1
let  findNeedle=arr=>( arr.find(element => element === 'needle'))?
  console.log("found the needle at position " + arr.indexOf("needle")): console.log("Needle is not found ")

 findNeedle( haystack_1);
 findNeedle( haystack_2); 
 findNeedle( haystack_3);


//Step 2

let findAnyItem = (arr, item)=>( arr.find(element => element === item))?
  console.log("found the "+ item + " at position " + arr.indexOf(item)):console.log(item+" is not found ")
  
 findAnyItem( haystack_2 , 'a cat')


