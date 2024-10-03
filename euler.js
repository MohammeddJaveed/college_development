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

function GetValues()
{
  
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    limit = document.getElementById("limit").value;
    sum(num1,num2,limit);

}
function resetValues()
{
    document.getElementById("num1")="";
    document.getElementById("num2")="";
    document.getElementById("limit")="";

}
function applyStyles(){
    const mainHead = document.getElementById("mainHead");
    mainHead.style.color="#008000"
    mainHead.style.alignContent ="center"
    mainHead.style.fontSize="15px"

    const checkSum = document.getElementById("checkSum");
    checkSum.style.backgroundColor = "#008080"
     checkSum.style.fontFamily ="Arial, sans-serif"

    const clear = document.getElementById("clear");
    clear.style.backgroundColor = "#008080"
    clear.style.fontFamily ="Arial, sans-serif"

}