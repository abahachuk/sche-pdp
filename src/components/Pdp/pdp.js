import { LitElement, html } from 'lit-element';

import '../Breadcrumbs';
import '../Product';
import '../Related-products';
import '../Documents';
import '../Tabs';

class Pdp extends LitElement {

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  constructor() {
    super();
    this.product = {};
  }

  render() {
    return html`
      <x-breadcrumbs></x-breadcrumbs>
      <x-product
        name=${this.product.name}
        description=${this.product.description}
        price=${this.product.price}
        currency=${this.product.currency}
      ></x-product>
      <x-related-products></x-related-products>
      <x-documents></x-documents>
      <x-tabs></x-tabs>
    `;
  }
}
customElements.define('x-pdp', Pdp);
