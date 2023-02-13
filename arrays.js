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

// Move all negative numbers to beginning and positive to end with constant extra space
class SeperatePositiveandNegative{
    constructor(arr){
        this.arr=arr
        this.res = function seperation(){
            const positive = this.arr.filter((val)=>{if(val > 0){
                return val
            }
            })
            const negative = this.arr.filter((val)=>{if(val < 0){
                return val
            }
            })
            return [...negative,...positive]
        }
    }
}
const result2 = new SeperatePositiveandNegative([-10,20,3,-2,-16,-15,8,2,9,-4])
// console.log("result2",result2.res())

// Union of two arrays
class Union{
    constructor(arr1,arr2){
        this.arr1 = arr1
        this.arr2 = arr2
        this.resUnion = function union(){
            return [... new Set([...this.arr1,...this.arr2])]
        }
        this.resIntersection = function intersection(){
            const newArray =  this.arr1.filter((val)=>{
                if(this.arr2.includes(val)){
                    return val
                }
            })
            return newArray
        }
    }
}
const result3 = new Union([1, 2 ,3, 4, 5],[1,2,3])
// console.log("result3",result3.resIntersection())
// console.log("result3",result3.resUnion())

// Given an array, rotate the array by one position in clock-wise direction.
class RotateArrayByOne{
    constructor(arr,position){
        this.arr = arr
        this.position = position
        this.resRotateByPosition = function rotateByOne(){
const temp = this.arr[this.arr.length-1]
        this.arr.splice(this.arr.length-1,1)
        this.arr.unshift(temp)
return this.arr
       }
    }
}
const result4 = new RotateArrayByOne([1, 2 ,3, 4, 5,8,9])
// console.log("result4",result4.resRotateByPosition())

// Kadane's Algorithm
class Solution1{
    //Function to find the sum of contiguous subarray with maximum sum.
    constructor(arr){
        this.arr=arr
      this.sum=0;
      this.max=this.arr[0];
      this.res= function result(){
        for(let i= 0; i<this.arr.length; i++) {
            this.sum += this.arr[i];
            if(this.sum > this.max) {
              this.max = this.sum;
            }
            if(this.sum < 0){
              this.sum=0;
            }
        }
        return this.max;
      }
    
    }
}
const result5 = new Solution1([-11,2,3,-2,5])
console.log("result5",result5.res())