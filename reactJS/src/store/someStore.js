import { makeAutoObservable } from "mobx";

class SomeStore {
	constructor() {
		this.value = "";

		makeAutoObservable(this, {}, { autoBind: true });
	}

	setValue(value) {
		this.value = value;
	}
}

export default new SomeStore();
