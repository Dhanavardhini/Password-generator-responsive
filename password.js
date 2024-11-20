
function pass() {
    let s1=document.getElementById("a5").value;
    let s2=document.getElementById("a6").checked;
    let s3=document.getElementById("a7").checked;
    let s4=document.getElementById("a8").checked;
    let s5=document.getElementById("a9").checked;
    
    let Uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Lowercase='abcdefghijklmnopqrstuvwxyz';
    let Symbol='!@#$%^&*-+';
    let Number='12345678910';

    let ammu="";
    if (s2)  {ammu += Uppercase; }
    if (s3) {ammu += Lowercase;}
    if (s4) {ammu += Symbol;}
    if (s5) {ammu += Number;}

    let pass="";
    for (let i = 0; i < s1; i++) {
        pass +=ammu.charAt(Math.floor(Math.random()*ammu.length));   
    }
    let s6=document.getElementById("a10").value=pass;
}


