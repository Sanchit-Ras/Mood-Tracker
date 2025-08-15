//common code which every action is going to use
export type ActionCreator<T=undefined>=(...args:any)=>{type:string,payload:T};