import { myDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = myDatabaseFunction;
myDatabaseClassic.add({ name: 'Test 7', age: 20 });
myDatabaseClassic.add({ name: 'Test 8', age: 21 });
myDatabaseClassic.add({ name: 'Test 9', age: 22 });
myDatabaseClassic.add({ name: 'Test 10', age: 23 });
myDatabaseClassic.add({ name: 'Test 11', age: 24 });
myDatabaseClassic.add({ name: 'Test 12', age: 25 });

myDatabaseClassic.show();

console.log(myDatabaseFromModuleA === myDatabaseClassic);
