import { r as registerInstance } from './core-2f56c436.js';

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
