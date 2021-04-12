
/*
 * ------------------------------------------------------
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
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    isAdmin?: boolean;
}

export class FindOneUserInput {
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    isAdmin?: boolean;
}

export abstract class IQuery {
    abstract cats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(query?: FindOneUserInput): User | Promise<User>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract createUser(input?: CreateUserInput): User | Promise<User>;
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
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    isAdmin?: boolean;
}
