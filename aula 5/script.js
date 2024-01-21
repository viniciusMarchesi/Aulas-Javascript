let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let tempA = varA;
let tempB = varB;
let tempC = varC;

varA = tempB; // varA agora é 'B'
varB = tempC; // varB agora é 'C'
varC = tempA; // varC agora é 'A'

console.log(varA, varB, varC); // Isto irá imprimir 'B', 'C', 'A'
