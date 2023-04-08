import {action, makeAutoObservable, observable} from "mobx";


export class WorkToggle {

    count: number = 1;

    constructor() {
        makeAutoObservable(this, {
            count: observable,
            setCount: action
        })
    }

    setCount(num:number){
        this.count = num
    }

}

