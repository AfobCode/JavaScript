/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/




function checkValue(num){
    let answer = "";
    console.log("The number entered was "+ num);
    switch(num){
        case 1:
            answer += "alpa\n";
        case 2:
            answer += "beta\n";
        case 3:
            answer += "gamma\n";
        case 4: 
            answer += "delta\n"
    }

    return answer
}

console.log(checkValue(1));
console.log(checkValue(4));
console.log(checkValue(3));
console.log(checkValue(5));

function CheckValue(num){
    let answer = "";
    console.log("The number entered was "+ num);
    switch(num){
        case 1:
            answer += "alpa\n";
            break;
        case 2:
            answer += "beta\n";
            break;
        case 3:
            answer += "gamma\n";
            break;
        case 4: 
            answer += "delta\n";
            break;
    }

    return answer
}

console.log(CheckValue(1));
console.log(CheckValue(4));
console.log(CheckValue(3));
console.log(CheckValue(5));