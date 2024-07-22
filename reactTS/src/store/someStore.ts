import { makeAutoObservable } from "mobx";

class SomeStore {
	value: string;
	constructor() {
		this.value = "";

		makeAutoObservable(this, {}, { autoBind: true });
	}

	setValue(value: string) {
		this.value = value;
	}
}

export default new SomeStore();
