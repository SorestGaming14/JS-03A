do {
    var first = +prompt('Введите число (не букву или 0)')
} while (isNaN(first) || first == 0);

var second = +prompt('Введите степень числа')

if(isNaN(second) || second == 0){
    second == 2
}

var end = 1
var result = first

while (end < second) {
    result = first * result
    end++
}

alert('Результат: ' + result)