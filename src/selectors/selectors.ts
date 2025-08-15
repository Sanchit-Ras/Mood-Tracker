import type { State } from "../store"
export function happyMomentsSelector(State:State){
    return State.happy.happyMoments;
}
export function SadMomentsSelector(State:State){
    return State.sad.sadMoments;
}