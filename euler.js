
function GetValues()
{
  let a = document.getElementById("intElement").value.split(",").map(Number)
//   let a = document.getElementById("num1").value;
//   let  b = document.getElementById("num2").value;
  let l = document.getElementById("list").value.split(',').map(Number);
 console.log(a,l)
    // a limited to 2
    sum2(a,l)

    // a,l having no limit
    // sumwithtwoParams(a,l) 


     // only when l is list of array
    // sumOfMultiples(a,b,l);


    // regular
//    sum(a,b,n); 
}
function sum(a,b,n)
    {
       let  s=0;
        for(i=1;i<n;i++)
        {
            if(i%a==0 || i%b==0)
                s+=i;
        }
        console.log(sum)
        alert(`The sum of the multiples of ${a} and ${b} is ${s}`);
    }


function resetValues()
{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("list").value="";

}
function applyStyles(){
    const mainHead = document.getElementById("mainHead");
    mainHead.style.color="#008000"
    mainHead.style.fontSize="15px"

    const checkSum = document.getElementById("checkSum");
    checkSum.style.backgroundColor = "#008080"
     checkSum.style.fontFamily ="Arial, sans-serif"

    const clear = document.getElementById("clear");
    clear.style.backgroundColor = "#008080"
    clear.style.fontFamily ="Arial, sans-serif"

    const contetWrapper = document.getElementById("contentWrapper");
    contetWrapper.style.alignSelf ="center"
    contetWrapper.style.backgroundColor = "white";
    contetWrapper.style.borderRadius = "10px";
    contetWrapper.style.paddingTop = "40px"
}

function sumOfMultiples(a, b, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
      
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i]; 
        }
    }
    alert(`sum of multiples of ${a} and ${b} is ${sum}`)
    return sum;
}
function sumwithtwoParams(a,l){
    let sum=0;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<l.length;j++){
            if(a[i]%a[j]==0){
                sum +=a[i]
                break;
            }
        }
    }
    alert(`sum is ${sum}`)
}
function sum2(a,l){
   
    let sum=0;
    let num1=a[0];
    let num2= a[1];
    for(let i =0; i<l.length;i++){
  
        if (l[i] % num1 === 0 || l[i] % num2 === 0) {
            sum += l[i]; 
        }
    }
    alert(`sum = ${sum}`)
}