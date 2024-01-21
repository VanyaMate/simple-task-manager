import { IDataGenerator } from '@vanyamate/market-place-service';
import { CreateTodo, Todo } from '@/services/todo/todo.types.ts';


export class LocalStorageTodoServiceDataGenerator implements IDataGenerator<Todo, CreateTodo> {
    private readonly _clearData: Todo = {
        id         : '',
        title      : '',
        description: '',
        date       : '',
        status     : false,
    };

    public id (): string {
        return Math.random().toString();
    }

    public title (): string {
        return Math.random().toString();
    }


    public description (): string {
        return Math.random().toString();
    }

    public date (): string {
        return new Date().toLocaleString();
    }

    public status (): boolean {
        return Math.random() > .5;
    }

    public byData (data: CreateTodo): Todo {
        return {
            ...this._clearData,
            ...data,
        };
    }

    public filled (data?: CreateTodo | undefined): Todo {
        return {
            id         : this.id(),
            title      : this.title(),
            description: this.description(),
            date       : this.date(),
            status     : this.status(),
            ...data,
        };
    }

    public clear (): Todo {
        return { ...this._clearData };
    }
}