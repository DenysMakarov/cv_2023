import {configure} from "mobx";
import {WorkToggle} from "./WorkToggle";
import {createContext} from "react";
import {PageToggle} from "./PageToggle";


configure({enforceActions: 'observed'})
export class RootStore{
    workToggle = new WorkToggle()
    pageToggle = new PageToggle()
}
export const RootStoreContext = createContext(new RootStore())