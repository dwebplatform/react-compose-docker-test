import * as actions from "../index";
type inferType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes = ReturnType<inferType<typeof actions>>;
