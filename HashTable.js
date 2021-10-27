class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += key.charCodeAt(char);
    }
    return hash % this.size;
  }

  isRedundant(key) {
    const index = this._hash(key);
    const currentBucket = this.table[index];

    if (currentBucket && currentBucket.length) {
      //Desestructuro key y valor asociado del bucket
      for (const [keyBucket] of currentBucket) {
        if (keyBucket === key) return true;
      }
    }
    return false;
  }

  set(key, value) {
    const index = this._hash(key);

    //si no existe lidiamos con las colisiones usando un array en el bucket
    if (!this.table[index]) this.table[index] = [];
    if (this.isRedundant(key)) return console.warn("This entry already exist");
    // if (this.table[index][0] === key && this.table[index][1] === value)
    //   return console.warn("already exist");
    this.table[index].push([key, value]);
    console.log("saved!");
    return this.table;
  }

  iterativeSet(arr) {
    for (const i in arr) {
      this.set(`key no. ${i.toString()}`, arr[i].toString());
    }
    return console.log("Array saved");
  }

  remove(key) {
    const index = this._hash(key);
    const currentBucket = this.table[index];

    // si existe el indice y este no es de longitud 0
    if (currentBucket && currentBucket.length) {
      for (const [keyBucket] of currentBucket) {
        if (keyBucket === key) currentBucket.pop();
        return console.log("erased!");
      }
    }
    return false;
  }

  get(key) {
    const index = this._hash(key);
    const currentBucket = this.table[index];

    if (currentBucket && currentBucket.length) {
      //Desestructuro key y valor asociado del bucket
      for (const [keyBucket, value] of currentBucket) {
        if (keyBucket === key) return value;
      }
    } else {
      return false;
    }
  }

  get display() {
    let log = {};
    if (this.table && this.table.length) {
      for (const bucket of this.table) {
        // solo si hay un array en el bucket
        if (Array.isArray(bucket)) {
          for (const [key, value] of bucket) {
            log = { ...log, [key]: value };
          }
        }
      }
      return console.log(log);
    }
    return false;
  }
}

//Cronometrado
console.time();
const ht = new HashTable(30);
const arr = [5, 3, 7, 1, 6, 8, 2, 4, 7, 9];
ht.iterativeSet(arr);
ht.display;
console.timeEnd();

console.log("remove key no. 5");
ht.remove("key no. 5");
console.log(ht.get("key no. 6"));

ht.set("josh", "hello my friend");
ht.set("josh", "hello my friend");

console.log(ht.get("josh"));
