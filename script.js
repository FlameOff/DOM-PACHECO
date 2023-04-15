let num1 = 100;
let num2 = 20;
let resp = num1 + num2;
let desc = "Exercise 1";
let desc2 = "Exercise 2";
let desc3 = "Exercise 3";
let desc4 = "Exercise 4";
let desc5 = "Exercise 5";
let desc6 = "Exercise 6";
let desc7 = "Exercise 7";
console.log(desc)
console.log(resp)



function maiorNumber (n1, n2)
{
    let nu1 = "O primeiro numero é maior";
    let nu2 = "O segundo numero é maior";
    if(n1 > n2)
    {
        console.log(desc2)
        console.log(nu1)
    }
    else
    {
        console.log(desc2)
        console.log(nu2)
    }
}

maiorNumber (num1, num2);


let prime = 7;
function primeNumber (num)
{
    let d1 = "O numero não é primo";
    let d2 = "O numero é primo";
    for(i=2;i<num;i++)
    {
        if(num % i===0)
        {
            console.log(desc3)
            console.log(d1)
            return false;
        }
        else{
            console.log(desc3)
            console.log(d2)
        }
    }
    return num !== 1;
}
primeNumber(prime)


let catetoA = 25;
let catetoO = 50;
function hipotenusaFun (co, ca)
{
    let hipo = ((co**2 + ca**2)**0.5);
    return hipo;
}
let hip;
hip = hipotenusaFun(catetoO, catetoA)
console.log(desc4)
console.log(hip)



let salario = 1318;
let percent;
function salaryRead (salary){
    let diminuir = salary /100;
    let novosalario = salary + diminuir;
    return novosalario;
}
percent = salaryRead (salario)
console.log(desc5)
console.log(percent)



let far = 212;
function tempCeltoFar (farenheit){
    let celsius = (farenheit - 32)/9;
    return celsius;
}
let celsium;
celsium = tempCeltoFar(far)
console.log(desc6)
console.log(celsium)



let nota1 = 7;
let nota2 = 9;
let nota3 = 4;
let media;
function mediaAluno (n1, n2, n3)
{
    let med = ((n1*2)+(n2*3)+(n3*5))/10;
    return med;
}
media = mediaAluno (nota1, nota2, nota3)
console.log(desc7)
console.log(media)