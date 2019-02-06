import { observable, computed, action, flow, runInAction } from "mobx"
import axios from "axios"

export class User {
    @observable
    public text: string

    @observable
    public counter: number

    @action
    public setText(txt: string) {
        this.text = txt
    }

    @action
    public setCounter(n: number) {
        this.counter = n
    }

    @computed get CounterString() {
        return this.counter.toString()
    }

    constructor() {
        // NOTE: 使用 action 改變狀態
        this.setText("")
        runInAction(() => {
            this.counter = 5
        })
    }
}
