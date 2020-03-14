function findClosestPair(numbers: number[], sum: number): number {
   let distance = -1;

   for(let i=0; i<numbers.length; i++){
       for(let j=0;j<numbers.length; j++){
           const distanceSum = numbers[i] + numbers[j];
           const absDistance = Math.abs(i-j);

           if(sum === distanceSum){
               if(distance === -1 || absDistance < distance) {
                   distance = absDistance;
               }
           }
       }
   }
   return distance = -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));