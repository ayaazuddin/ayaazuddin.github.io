var strin = document.getElementById("strin");
var button1 = document.querySelector("button");
var vowe = document.getElementById("vow");
var cons = document.getElementById("con");
var space = document.getElementById("space");
var special = document.getElementById("spch");

var vowels="aeiouAEIOU";
var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
var spc_ch = "!@#$%^&*(){}[]:;<>,./?\|'";

var con_count=0;
var vow_count=0;
var space_count=0;
var spc_count = 0;

button1.addEventListener("click",function()
{   
    var i = 0 , z = 0;
    vow_count = 0;
    con_count = 0;
    space_count = 0;
    spc = 0;
    for(var j=0 ; j < strin.value.length ; j++)
    {
        for (var i=0; i<41 ; i++)        
        {
            if (strin.value[j] ==  vowels[i])
            {
                vow_count++;
                break;
            }
            if (strin.value[j] == consonants[i])
            {
                con_count++;
                break;
            }
            if (strin.value[j] == " ")
            {
                space_count++;
                break;
            }
            if (strin.value[j] == spc_ch[i])
            {
                spc_count++;
                break;
            }
            else
            {
                continue;
            }
        }
    }
    cons.textContent = con_count;
    vowe.textContent = vow_count;
    space.textContent = space_count;
    special.textContent = spc_count;

})


