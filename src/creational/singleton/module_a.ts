import { myDatabaseFunction } from './db/my-database-function';

// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = myDatabaseFunction;
myDatabaseClassic.add({ name: 'Test 1', age: 20 });
myDatabaseClassic.add({ name: 'Test 2', age: 21 });
myDatabaseClassic.add({ name: 'Test 3', age: 22 });
myDatabaseClassic.add({ name: 'Test 4', age: 23 });
myDatabaseClassic.add({ name: 'Test 5', age: 24 });
myDatabaseClassic.add({ name: 'Test 6', age: 25 });

export { myDatabaseClassic };
