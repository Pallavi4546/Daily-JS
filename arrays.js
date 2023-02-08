// reverse an Array
    function reverseArray(arr){
        startIndex = 0
        endIndex = arr.length -1
        while(startIndex < endIndex){
            let temp = arr[startIndex]
            arr[startIndex]=arr[endIndex]
            arr[endIndex]=temp
            startIndex++
            endIndex--
        }
        return arr
    }
// using recursion
function reverseArrayRecursion(arr,start,end)
{
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    if (start+1<end-1){
        reverseArrayRecursion(arr, start + 1, end - 1);
    }
    return arr
}  
// console.log("reverseArrayRecursively",reverseArrayRecursion([1,2,3,4,5,6,7,8],0,7))
// console.log(reverseArray([1,2,3,4,5,6]))

// Maximum and minimum of an array 
class MaxandMin{
 constructor(arr){
    this.arr=arr
    this.sortedArray = function maxandmin(){
        this.arr.sort()
        return  this.arr[0] + " " + this.arr[this.arr.length -1]
    }
    
 }
}
const minmax = new MaxandMin([1,5,7,9,4])
// console.log(minmax.sortedArray())

// Kth smallest element

class Solution {
    constructor(arr,k){
      this.arr=arr
      this.k=k
      this.result= function kthSmallest(){
        this.arr.sort((v1,v2)=>v1-v2)
        return this.arr[this.k]
      }
    }
  }
  const result = new Solution([7,10,8,11,14,17,5],4)
//   console.log("result",result.result())

// Sort an array of 0s, 1s and 2s

class SortedArray{
    constructor(arr){
        this.arr = arr
        this.sortedArray = function sortArray(){
            return this.arr.sort((v1,v2)=>v1-v2)
        } 
    }
}
const result1 = new SortedArray([0,1,0,3,2,5,3,2,5,1,0])
// console.log("sorted Array",result1.sortedArray())