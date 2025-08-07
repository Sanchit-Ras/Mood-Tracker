import type { State } from "./store"
export function happyMomentsSelector(State:State){
    return State.happyMoments;
}
export function SadMomentsSelector(State:State){
    return State.sadMoments;
}