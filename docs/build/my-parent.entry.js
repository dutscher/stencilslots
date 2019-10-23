import { r as registerInstance, h, H as Host } from './core-6ab53e35.js';

const Fragment = (_props, children = []) => {
    console.log(children);
    return [...children];
};

const Parent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tag = '';
        this.disabled = false;
        this.messageInline = {};
        this.componentName = 'parent';
    }
    hostData() {
        const classes = [];
        if (this.disabled) {
            classes.push(`${this.componentName}--disabled`);
        }
        return {
            class: classes.join(' '),
        };
    }
    renderMessage(message) {
        return (h(Fragment, null, !message.isPrimary && (h("span", null, "Secondary")), message.isPrimary && (h("span", null, "Primary"))));
    }
    __stencil_render() {
        return h(Fragment, null, "Hello, World! I'm Cool", h("div", null, this.disabled && !!this.tag && (h("div", { class: "tag", innerHTML: this.tag })), h("div", null, "before slot>", h("slot", null), "<after slot")));
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
};

export { Parent as my_parent };
