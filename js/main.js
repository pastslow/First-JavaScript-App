
var input_val = document.getElementById("input");
var res = document.getElementById("result");
function lastOperand() {
    if (input_val.value[input_val.value.length - 1] == "+" |
        input_val.value[input_val.value.length - 1] == "-" |
        input_val.value[input_val.value.length - 1] == "*" |
        input_val.value[input_val.value.length - 1] == "/" |
        input_val.value[input_val.value.length - 1] == ".") {
        return true

    } else {
        return false
    }

}
function getNumber(num) {
    switch (num) {
        case 1:
            input_val.value += "1";
            break;
        case 2:
            input_val.value += "2";
            break;
        case 3:
            input_val.value += "3";
            break;
        case 4:
            input_val.value += "4";
            break;
        case 5:
            input_val.value += "5";
            break;
        case 6:
            input_val.value += "6";
            break;
        case 7:
            input_val.value += "7";
            break;
        case 8:
            input_val.value += "8";
            break;
        case 9:
            input_val.value += "9";
            break;
        case 0:
            input_val.value += "0";
            break;
        case 'dot':
            input_val.value += ".";
            break;
    }
}
function clearScreen() {
    input_val.value = "";
    res.value = "";
}
var i = 0;
function brakers() {
    if (i == 0) {
        input_val.value += "(";
        i = 1;
    } else if (i == 1) {
        input_val.value += ")";
        i = 0;
    }

}
function backspace() {
    y = input_val.value;
    if (y.length > 0) {
        y = y.substring(0, y.length - 1)
        input_val.value = y;
    }
}
function calculate() {
    if (input_val.value != "") {
        x = eval(input_val.value);
        res.value = "=" + x;
    } else{
        res.value=""       
    }
    
}
function getOperand(op) {
    if (!lastOperand()) {
        if (input_val.value != "") {

            switch (op) {
                case "+":
                    input_val.value += "+";
                    break;
                case "-":
                    input_val.value += "-";
                    break;
                case "/":
                    input_val.value += "/";
                    break;
                case "*":
                    input_val.value += "*";
                    break;
            }

        } else {
            switch (op) {
                case "+":
                    input_val.value += "0" + "+";
                    break;
                case "-":
                    input_val.value += "0" + "-";
                    break;
                case "/":
                    input_val.value += "0" + "/";
                    break;
                case "*":
                    input_val.value += "0" + "*";
                    break;
            }
        }

        switch (op) {
            case "+/-":
                input_val.value += "-";
                break;

        }

    }

}

function powUp() {
    x = input_val.value;
    if (x == 0) {
        x = ""
    } else {
        y = Math.pow(x, 2)
        res.value = '=' + y;
    }
}

function radical() {
    x = input_val.value;
    if (x == 0) {
        x = ''
    } else {
        res.value = "=" + Math.sqrt(x);
    }
}
