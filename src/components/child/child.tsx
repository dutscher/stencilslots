import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-child',
  styleUrl: 'my-child.css'
})
export class Child {
  // mutable doesnt have an effect
  @Prop() text: string = '';

  render() {
    return this.text;
  }
}
