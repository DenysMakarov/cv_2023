import {action, makeAutoObservable, observable} from "mobx";


export class Switcher {

    count: number = 0;

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

