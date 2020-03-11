import { action } from "typesafe-actions";

export enum actionTypes {
  ADD = "ADD",
  DELETE = "DELETE"
}

export const todoActions = {
  add: (id: number, name: string, content: string, priority: string) =>
    action(actionTypes.ADD, { id, name, content, priority }),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
};
