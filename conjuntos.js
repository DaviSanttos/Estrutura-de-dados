// sets - coleção não ordenada de itens
// implementação manual da classe set da ECMA

class Set {
    constructor() {
        this.items = {};
        // conjunto
    }
    
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }

        return false;
    }

    add(element){
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }

        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return console.log(Object.keys(this.items).length);
    }

    values() {
        return Object.values(this.items);
    }
    // esse método não modifica a instância da classe, são chamadas de funções puras, que não modifica a instâncial atual e nem seus parâmetros, apenas gera um nobo resultado.

    // união de conjuntos
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    //interseção de conjuntos

    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

}

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);

// const unionAB = setA.union(setB);
// console.log(unionAB.values());


const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(2);
setB.add(5);

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
