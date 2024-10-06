
function GetValues()
{
  
  let a = document.getElementById("num1").value;
  let  b = document.getElementById("num2").value;
  let l = document.getElementById("list").value.split(',').map(Number);
  console.log(l)
    sumOfMultiples(a,b,l);
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