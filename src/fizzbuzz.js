export function fizzbuzz(){
    for (let i = 1; i <= 100; i++) {
        
        // 1. La regla más exigente va primero: ¿Es múltiplo de 3 Y de 5? (15, 30...)
        // Los símbolos && significan "Y"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        // 2. Si falló la de arriba, preguntamos: ¿Es múltiplo solo de 3? (3, 6, 9...)
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        // 3. Si fallaron las de arriba, preguntamos: ¿Es múltiplo solo de 5? (5, 10, 20...)
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        // 4. Si de plano no es múltiplo de nada, entonces sí imprime el número normal
        else {
            console.log(i);
        }

    }
}

fizzbuzz();