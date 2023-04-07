import {action, makeAutoObservable, observable} from "mobx";


export class Switcher {

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

