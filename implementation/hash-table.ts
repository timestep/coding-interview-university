
interface HashTable {
  add(key: string, value: string | number): void;
  exists(key: string): boolean;
  get(key: string): any;
  remove(key: string): any;
  display(): void;
}

export const HashTable = (): HashTable => {
  let size = 0;
  let table = [];

  const _hash = (x: string): number => x.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0);

  const add = (key: string, value: string | number) => {
    const idx = _hash(key);
    if(table[idx]) {
      for (let i = 0; i < table[idx].length; i++) {
        const element = table[idx][i];
        if(element[i] === key){
          element[i][1] = value;
          return
        }
      }
      table[idx].push([key,value])
      return;
    }
    table[idx] = []
    table[idx].push([key, value]);
    size++
  }

  const exists = (key: string): boolean => {
    const idx = _hash(key);
    if(!table[idx]) return false;
    for (let i = 0; i < table[idx].length; i++) {
      const element = table[idx][i];
      if(element[i] === key){
        return true;
      }
    }
    return false;  
  }

  const get = (key: string) => {
    const idx = _hash(key);
    if(!table[idx]) return false;
    for (let i = 0; i < table[idx].length; i++) {
      const element = table[idx][i];
      if(element[i] === key){
        return element[i][1];
      }
    }
    return false;  
  }

  const remove = (key: string) => {
    const idx = _hash(key);
    if(table[idx]) {
      for (let i = 0; i < table[idx].length; i++) {
        const element = table[idx][i];
        if(element[i] === key){
          table[idx].splice(i, 1)
          size--;
          return true;
        }
      }
    } 
    return false
  }

  const display = () => {
    console.log(JSON.stringify(table))
  }

  return {
    add,
    exists,
    remove,
    get,
    display
  }
}

