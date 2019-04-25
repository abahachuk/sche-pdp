import { LitElement, html } from 'lit-element';

import '../Tabs';
import '../Table';

class ProductCharacteristics extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
    return html`
      <x-tabs>
        ${Object.keys(this.product.information.characteristics).map(characteristic => html`
          <x-table .caption=${characteristic} .data=${this.product.information.characteristics[characteristic]}></x-table>
        `)}
      </x-tabs>
    `;
  }
}

customElements.define('x-product-characteristics', ProductCharacteristics);
