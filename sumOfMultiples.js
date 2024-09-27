function sumOfMultiples(a,b,n){
  let sum=0;
  for(let i=1;i<n;i++){
    if(a%i==0 || b%i==0){
      sum += i;
    }
  }
  return sum
} 
const result= sumOfMultiples(a,b){
  alert (result)
}
