import { r as registerInstance, h, H as Host } from './core-ad2441d5.js';
import { F as Fragment } from './fragment-67b9b865.js';

const Parent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tag = '';
        this.disabled = false;
        this.messageInline = {};
        this.componentName = 'parent';
    }
    renderMessage(message) {
        return (h(Fragment, null, !message.isPrimary && (h("span", null, "Secondary")), message.isPrimary && (h("span", null, "Primary"))));
    }
    render() {
        const classes = [];
        if (this.disabled) {
            classes.push(`${this.componentName}--disabled`);
        }
        return (h(Host, { class: classes.join(' ') }, "Demonstrate slot rerender bug", h("div", null, this.disabled && !!this.tag && (h("div", { class: "tag", innerHTML: this.tag })), h("div", null, "before slot>", h("slot", null), "<after slot"))));
    }
};

export { Parent as my_parent };
