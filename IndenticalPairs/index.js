//Targeting the Elements from the HTML that we want to implement some funcitonality to it
const inputBox = document.querySelector("#input");
const submitBtn = document.querySelector("#submit");
const asnwerBox = document.querySelector("#answer"); //p tag wheere answer will be display

//BAsiclly onClick of React, on js is a simple addEventListener with the event of click
//takes a function that get executed when the event is trigger
submitBtn.addEventListener("click", function (){
   const valueStr = inputBox.value.replace(/\s/g, ""); //remove white spaces using .replace with regex


   //ValueStr is just a strim, so we want to convert it to an array using .split(",") 
   //and where it finds a comma it will put that into the array
   //then we are mapping each value of the array of string(numbers in string type)
   //and we are returning it, but converte to integer
    const nums = valueStr.split(",").map((num)=>{
        return parseInt(num);
    })

    //then we call this function to handle the logic of counting how many good pairs there are
    const count = numIdenticalPairs(nums)


    //returning the solution as a new html element basicly
    asnwerBox.innerHTML = `<p id="answer">Number of Identical Pair: <span>${count}</span></p>`

})

//LeetCode Problem 1512 - to see problem deatils search it up as Good Pairs or by problem number
function numIdenticalPairs (nums) {
    let counter = 0; //count how many good pair there are
    const map = new Map();
    

    //Time Complexity O(n)
    for(let num of nums){ 
        if(map.has(num)){
            counter += map.get(num);
            map.set(num, map.get(num) + 1);
        }
        else{
            map.set(num, 1)
        }
    }

    //Explanation:

    /* 
    lets use a for-of to iterate through the nums array, for every number in the array
    we are going to see if it's already in the map, if is not, let put it and the value will be 1,
    cause is the first one we see, and we know to find a pair we need to that are the same,

    if num is already in the map, then we want to add the value(frequency) of that number to the counter, 
    cause we saw it already and we know there is an equal to that one, 
    then we update the value of that number by one
    */


    return counter;
}