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
    multiplesOfIntegers(num1,num2,limit);

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
    contetWrapper.style.alignContent ="center"
    wrapper.style.backgroundColor = "#f9f9f9";
    wrapper.style.borderRadius = "10px";
}

function multiplesOfIntegers(a,b,l){
    let sum=0;
     for(let i=0;i<l.length;i++){
        if(l[i]%a == 0 || l[i]%b==0)
            sum +=l[i]
     }
     alert(`sum of all the multples of ${a} and ${b} in ${l} = ${sum} `)
}