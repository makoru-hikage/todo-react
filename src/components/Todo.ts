import {TodoInterface} from './TodoInterface';

export class Todo implements TodoInterface {
    public name:string;
    public description: string;
    public is_done: boolean;

    constructor(name:string, description:string, completed:boolean){
        this.name = name;
        this.description = description;
        this.is_done = completed;
    }
}