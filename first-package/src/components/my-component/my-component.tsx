import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * This is a fake prop without it, `my-second-component` component will not works.
   */
  @Prop() fakePop: string = '';

  render() {
    return <my-second-component first="First" middle="Middle" last="Last"></my-second-component>;
  }
}
