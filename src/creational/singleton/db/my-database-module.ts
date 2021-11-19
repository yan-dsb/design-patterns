import { IUser } from '../interfaces/IUser';

const users: IUser[] = [];

const myDatabaseModule = {
  add(user: IUser): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    users.forEach(user => {
      console.log(user);
    });
  }
};

export { myDatabaseModule };
