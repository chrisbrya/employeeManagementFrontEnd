export interface Dependent {
    id: number;
    first_name: string;
    last_name: string;
    dob: string;
}

export class Customer {
    id!: number;
    first_name!: string;
    last_name!: string;
    dob!: string;

    constructor() {}
}