var a,
    h,
    triangleArea;

a = prompt('Enter base');
h = prompt('Enter height');

triangleArea=a*h/2;
document.getElementById("result").innerHTML = 'triangle field with base a: '+a + ' and height h: ' + h + ' is equal to: ' + triangleArea;console.log('')

document.getElementById("result").innerHTML = 'Triangle area <br> is equeal to: ' + triangleArea;