var outputscreen=document.getElementById("outputscreen");
function display(num)
{
    outputscreen.value += num;
}

function calculate(num)
{
    try
    {
         outputscreen.value=eval(outputscreen.value);
    }
    catch{
        alert("invalid");
    }
}

function del()
{
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function Clear()
{
    outputscreen.value ="";
}