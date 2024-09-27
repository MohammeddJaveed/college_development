function sumOfMultiples(a,b,n){
  let sum=0;
  for(let i=1;i<n;i++){
    if(a%i==0 || b%i==0){
      sum += i;
    }
  }
  return sum
} 
function calulateSum(){
  const a = parseInt(getElementById('a').value);
  const b = parseInt(getElementById('b).value);
    const result = sumOfMultiples (a,b)
  alert (result)
}
