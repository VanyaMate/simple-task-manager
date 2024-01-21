import { Filter, Options, MultiplyResponse } from '@/services/service.types.ts';
import { ITodoService } from '@/services/todo/todo-service.interface.ts';
import { CreateTodo, Todo, UpdateTodo } from '../../todo.types.ts';
import { ISingleService, IMultiplyService } from '@vanyamate/market-place-service';


export class LocalStorageTodoService implements ITodoService {
    constructor (
        private readonly _single: ISingleService<Todo, CreateTodo, UpdateTodo>,
        private readonly _multiply: IMultiplyService<Todo>,
    ) {
    }

    create (data: Todo): Promise<Todo> {
        return this._single.create(data);
    }

    update (id: string, data: Partial<Omit<Todo, 'id'>>): Promise<Todo> {
        return this._single.update(id, data);
    }

    delete (id: string): Promise<boolean> {
        return this._single.delete(id);
    }

    findOne (id: string): Promise<Todo | null> {
        return this._multiply.findOne(id);
    }

    findMany (filter: Filter<Todo>, options: Options<Todo>): Promise<MultiplyResponse<Todo>> {
        return this._multiply
            .findManyByFilter((todo: Todo) => {
                return Object.entries(filter)
                    .every(([ key, value ]) => {
                        const checked: unknown = todo[key as keyof Todo];
                        if (value.type === 'match' && typeof checked === 'string') {
                            return !!checked.match(value.value);
                        } else {
                            return checked === value.value;
                        }
                    });
            }, options)
            .then(
                (response) => ({
                    count  : response.count,
                    options: options,
                    items  : response.list,
                }),
            );
    }

}