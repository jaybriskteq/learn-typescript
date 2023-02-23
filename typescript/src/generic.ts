// class keyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new keyValuePair<string, string>("1", "a");

// generic

// class ArrayUtils {
//   static w<T>(value: T) {
//     return [value];
//   }
// }

// let number = ArrayUtils.w(1);

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   console.log(url);
//   return { data: null, error: null };
// }

// type User = {
//   username: string;
// };

// type Product = {
//   title: string;
// };

// let result = fetch<User>("url");
// result.data;

//extending gemeric function limitation

// type Product = {
//   title: string;
// };

// class Persons {
//   constructor(public name: string) {}
// }

// function echo<T extends Persons>(value: T): T {
//   return value;
// }

// echo(new Persons("jay"));

//extending gemeric class

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   get allproduct(): T[] | undefined {
//     return this._objects;
//   }
// }

// 1

//pass on the generic type parameter
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// let store = new CompressibleStore<Product>();
// store.add({ name: "Product1", price: 1000 });
// store.add({ name: "Product2", price: 2000 });
// store.add({ name: "Product3", price: 3000 });
// console.log(store.allproduct);
//2

//restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// let ser = new SearchableStore<Product>();
// ser.add({ name: "Product1", price: 1000 });
// ser.add({ name: "Product2", price: 2000 });
// ser.add({ name: "Product3", price: 3000 });
// console.log(ser.allproduct);
// console.log(ser.find("Product1"));

// ser.find("jay");

//3

//fix the generic type parametet

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// keys operator

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  get allproduct(): T[] | undefined {
    return this._objects;
  }

  //T is Product
  //then Keyof return name | price
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();

store.add({ name: "Product1", price: 1000 });
store.add({ name: "Product2", price: 2000 });
store.add({ name: "Product3", price: 3000 });

store.find("name", "Product1");
store.find("price", 100);
// store.find("price3", 100);

//type mapping

interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly //Index Signature
  //keyof value

  [P in keyof T]: T[P];
};

let product: ReadOnly<Product> = {
  name: "A",
  price: 100,
};

// function echo<T>(arg: T): T | undefined {
//   return arg;
// }
// let a = echo('jay')

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
