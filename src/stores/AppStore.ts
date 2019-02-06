import { configure } from "mobx"
import { User } from "./User"

configure({
    enforceActions: "always",
})

export default class AppStore {
    public user: User
    constructor() {
        this.user = new User()
    }
}
