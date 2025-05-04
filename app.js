let currentDisplay='';

function update(){
    document.querySelector('#display').value=currentDisplay;
}

function clearBtn()
{
    currentDisplay='';
    update();
}

function one()
{
    currentDisplay=currentDisplay+'1';
    update();
}

function two()
{
    currentDisplay=currentDisplay+'2';
    update();
}

function addition()
{
    currentDisplay=currentDisplay+'+';
    update();
}

function three()
{
    currentDisplay=currentDisplay+'3';
    update();
}

function four()
{
    currentDisplay=currentDisplay+'4';
    update();
}

function subtraction()
{
    currentDisplay=currentDisplay+'-';
    update();
}

function five()
{
    currentDisplay=currentDisplay+'5';
    update();
}

function six()
{
    currentDisplay=currentDisplay+'6';
    update();
}

function multiplication()
{
    currentDisplay=currentDisplay+'*';
    update();
}

function seven()
{
    currentDisplay=currentDisplay+'7';
    update();
}

function eight()
{
    currentDisplay=currentDisplay+'8';
    update();
}

function division()
{
    currentDisplay=currentDisplay+'/';
    update();
}

function equal()
{
    currentDisplay=eval(currentDisplay);
    update();
}

function nine()
{
    currentDisplay=currentDisplay+'9';
    update();
}

function zero()
{
    currentDisplay=currentDisplay+'0';
    update();
}

function decimal()
{
    currentDisplay=currentDisplay+'.';
    update();
}