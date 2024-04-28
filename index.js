const arrOne = [5,0,1,3,2];
const arrTwo = [7,9,10,11,12];
const arrThree = [1, 2, 4, 6, 3, 7, 8];
const emptyAr = []

// 1 линейный перебор массива O(n): Линейная сложность. 

const findMissingItemLinearSearch = (arr) => {
   if(!arr.length) {
       console.log('empty array')

    return null
   } else {
    let min = arr[0];
       let max = arr[0];
       let sum = 0;
       for(let i = 0; i < arr.length; i++) {
           sum +=arr[i]
           max = Math.max(max, arr[i])
           min = Math.min(min, arr[i])
       }
       if(min) min--
       let res = (max * (max + 1) / 2) - (min * (min + 1) / 2 + sum)
       console.log(res, 'res')
       return res
   }
}

findMissingItemLinearSearch(arrOne)
// findMissingItemLinearSearch(arrTwo)
// findMissingItemLinearSearch(arrThree)
// findMissingItemLinearSearch(emptyAr)

// 2 сортировка - Квадратичная сложность
const findMissingItemBuSotr = (arr) => {
    
    let sortedArr = [...arr].sort((a,b) => a - b)
    for(let i = 0; i < sortedArr.length; i++) {
        let cur = sortedArr[i]
        let prev = sortedArr[i - 1]
        if (cur - prev > 1) {
           
           console.log( prev + 1, ' prev + 1')
            return prev + 1
        }
       
    }
    
    return false
}
findMissingItemBuSotr(arrOne)
// findMissingItemBuSotr(arrTwo)
// findMissingItemBuSotr(arrThree)
// findMissingItemBuSotr(emptyAr)