//função de hash lose lose

import { defaultToString } from "./utils/defaultTostring.js";
import { ValuePair } from "./class_dictonary.js";

class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key;
        }

        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
        }

        return hash % 37;
    }

    hashCode(key){
        return this.loseloseHashCode(key);
    }

    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }

        return false;
    }

    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key){
        const hash = this.hashCode(key);
        const ValuePair = this.table[hash];
        if(ValuePair != null){
            delete this.table[hash];
            return true;
        }

        return false;
    }

    // tratrando colisoes

    toString(){
        if(this.isEmpty()){
            return '';
        };

        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for(let i = 1; i < keys.length; i++){
            objString = `${objString}, ${keys[i]} => ${this.table[keys[i]].toString()}`;
        }

        return objString;
    }
}

const hash = new HashTable();
hash.put('davi', 'celso.davi@gmail.com');
console.log(hash.hashCode('davi') + '- Davi');
console.log(hash.get('davi'));