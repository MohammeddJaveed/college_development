function sumOfMultiples(a,b,n){
  let sum=0;
  for(let i=1;i<n;i++){
    if(a%i==0 || b%i==0){
      sum += i;
    }
  }
  return sum
} 
function calculateSum() {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  const n =parseInt(documen.getElementById('n').value)

  const result = sumOfMultiples(a, b,n);
 alert( `The sum of multiples of ${a,b} up to ${n} is: ${result}`);
}