// Um dicionário é usado para armazenar pares chave valor, em que a chave pode ser usada para encontrar um elemento em particular.
import {defaultToString} from "./utils/defaultTostring.js";

export default class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
    //definindo uma chave e  um valor no dicionário, e a classe valuePair
    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey]= new ValuePair(key, value);
            return true;
        }

        return false;
    }

    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }

        return false;
    }

    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    keyValues(){
        return Object.values(this.table);
    }

    keys(){
        return this.keyValues().map(valuePair => valuePair.value);
    }

    forEach(callbackFn){
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++){
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false){
                break;
            }
        }
    }

    size(){
        return Object.keys(this.table).length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        return this.table = {};
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }

        const valuePairs = this.keyValues;
        let objString = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }

        return objString;
    }
   
}

export class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    toString(){
        return `[#${this.key}: ${this.value}]`
    }
}

// const dictionary = new Dictionary();
// dictionary.set('davi', 'davicel.santos@homatil.com');
// console.log(dictionary.get('davi'));
