const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setB.add(3);
setB.add(4);
setB.add(5);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size);


console.log(new Set([...setA, ...setB])); // união
console.log(new Set([...setA].filter(x => setB.has(x)))); // interseção
console.log(new Set([...setA].filter(x => !setB.has(x)))); // diferença