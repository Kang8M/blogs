/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
	name?: string;
	age?: number;
}

export class CreateUserInput {
	username: string;
	password: string;
}

export class UpdateUserRoleInput {
	id: number;
	isAdmin?: boolean;
}

export class UpdateUserPasswordInput {
	id: number;
	password: string;
}

export abstract class IQuery {
	abstract cats(): Cat[] | Promise<Cat[]>;

	abstract cat(id: string): Cat | Promise<Cat>;

	abstract users(): User[] | Promise<User[]>;

	abstract user(id: string): User | Promise<User>;
}

export abstract class IMutation {
	abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

	abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;

	abstract updateUserRole(id: number, isAdmin: boolean): User | Promise<User>;

	abstract updateUserPassword(id: number, password: string): User | Promise<User>;
}

export abstract class ISubscription {
	abstract catCreated(): Cat | Promise<Cat>;
}

export class Owner {
	id: number;
	name: string;
	age?: number;
	cats?: Cat[];
}

export class Cat {
	id?: number;
	name?: string;
	age?: number;
	owner?: Owner;
}

export class User {
	id?: number;
	username: string;
	password: string;
	isAdmin?: boolean;
}