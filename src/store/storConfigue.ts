import {configure} from "mobx";
import {Switcher} from "./Switcher";
import {createContext} from "react";


configure({enforceActions: 'observed'})
export class RootStore{
    switcher = new Switcher()
}
export const RootStoreContext = createContext(new RootStore())