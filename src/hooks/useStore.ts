import {RootStore, RootStoreContext} from "../store/storeConfigue";
import {useContext} from "react";


export function useStore<T extends keyof RootStore>(storeName: T): RootStore[T]{
    const rootStore = useContext(RootStoreContext);
    const store = rootStore[storeName];
    if (!store){
        throw new Error(`Store with name '${storeName}' not found!`)
    }
    return store
}