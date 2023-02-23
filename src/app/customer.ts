import { Dependent } from './dependent';
export interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    dob: string;
    password: string;
    dependent: Dependent[];
}

export class Customer {
    id!: number;
    first_name!: string;
    last_name!: string;
    email!: string;
    dob!: string;
    password!: string;
    dependent!: Dependent[];

    constructor() {}
}