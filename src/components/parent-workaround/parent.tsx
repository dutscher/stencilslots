import { Component, Prop, h } from '@stencil/core';
import Fragment from '../../utils/fragment';

@Component({
  tag: 'my-parent-workaround'
})
export class Parent {
  @Prop() tag: string = '';
  @Prop() disabled: boolean = false;
  @Prop() messageInline: {} = {};

  readonly componentName = 'parent';

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
    return <Fragment>
      Hello, World! I'm Cool
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
    </Fragment>;
  }
}
