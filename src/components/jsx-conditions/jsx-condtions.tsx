import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'jsx-conditions'
})
export class JsxConditions {
  @Prop() tag: string = '';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <div>
          {true && <div />}
          {false && <div />}
          {undefined && <div />}
          {'' && <div />}
          {/* test props */}
          {this.tag && <div />}
          {this.disabled && <div />}
        </div>
      </Host>
    );
  }
}
