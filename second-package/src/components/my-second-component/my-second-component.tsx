import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-second-component',
  styleUrl: 'my-second-component.css',
  shadow: {
		delegatesFocus: true
	},
	formAssociated: true
})
export class MySecondComponent {
  /**
   * The first name
   */
  @Prop({reflect: true}) first: string = '';

  /**
   * The middle name
   */
  @Prop({reflect: true}) middle: string = '';

  /**
   * The last name
   */
  @Prop({reflect: true}) last: string = '';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
