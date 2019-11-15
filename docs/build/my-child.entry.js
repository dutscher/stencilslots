import { r as registerInstance } from './core-ad2441d5.js';

const Child = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // mutable doesnt have an effect
        this.text = '';
    }
    render() {
        return this.text;
    }
    static get style() { return "my-child {\n  color: red;\n}"; }
};

export { Child as my_child };
