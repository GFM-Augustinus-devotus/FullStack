import { User } from "./entities/User";
import { Author } from "./entities/Author";
import { DataBase } from "./DataBase";
export {App}

class App { //O database pertencerá a classe app e não someente a suas instâncias

    static #database = new DataBase
}