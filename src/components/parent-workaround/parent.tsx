import { Component, Prop, Host, h } from '@stencil/core';
import Fragment from '../../utils/fragment';

@Component({
  tag: 'my-parent-workaround'
})
export class Parent {
  @Prop() tag: string = '';
  @Prop() disabled: boolean = false;
  @Prop() messageInline: {} = {};

  readonly componentName = 'parent';

  renderMessage(message) {
    return (
      <Fragment>
        {!message.isPrimary && (
          <span>Secondary</span>
        )}
        {message.isPrimary && (
          <span>Primary</span>
        )}
      </Fragment>
    );
  }

  render() {
    const classes = [];

    if (this.disabled) {
      classes.push(`${this.componentName}--disabled`);
    }

    return (
      <Host class={classes.join(' ')}>
        Demonstrate working solution
        <div>
          <div>
            {this.disabled && !!this.tag && (
              <div class="tag" innerHTML={this.tag}/>
            )}
          </div>
          <div>
            before slot&gt;
            <slot/>
            &lt;after slot
          </div>
        </div>
      </Host>
    );
  }
}
