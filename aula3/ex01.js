function writeMyName(name) {
    console.log('Meu nome é:', name);
}

writeMyName('João')

function writeAge(age) {
    if (age >18) {
        return ('Você é maior de idade')
    } else {
        return ('Você é menor de idade')
    }
}

console.log(writeAge(11))