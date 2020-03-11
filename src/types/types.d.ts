declare module "MyTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type ReducerState = StateType<typeof import("../reducers").default>;
  export type RootAction = ActionType<typeof import("../actions/actions")>;

  export type TodoModel = {
    id: number;
    name: string;
    content: string;
    priority: string;
  };

  export type NoteModel = {
    id: number;
    title: string;
    todos: TodoModel[];
  };
}
