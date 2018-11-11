// @flow
import {todosTypes} from "./todos";
import type {todosReducersTypes} from './todos';

// import type {otherReducersTypes} from './whatever';

type ReducersTypes = {
  ...$Exact<todosReducersTypes>,
  // ...$Exact<otherReducersTypes>,
}


//Extract state shape from reducers
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type RootAction =
  | todosTypes.TodoAction;


export type RootState = $ObjMap<ReducersTypes, $ExtractFunctionReturn>;
