import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootReducerType } from "../../reducers/rootReducer";

// useSelector
export const useCustomSelector: TypedUseSelectorHook<RootReducerType> = useSelector;