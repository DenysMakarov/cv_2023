import {action, makeAutoObservable, observable} from "mobx";


export class PageToggle{

    page: string = 'PORTFOLIO'

    constructor() {
        makeAutoObservable(this,{
            page: observable,
            setPage: action
        })
    }

    setPage(str:string){
        this.page = str
    }
}