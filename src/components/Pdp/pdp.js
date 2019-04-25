import { LitElement, html } from 'lit-element';

import '../Breadcrumbs';
import '../Product';
import '../Related-products';
import '../Documents';
import '../Product-characteristics';

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
      <x-product .product=${this.product}></x-product>
      <x-related-products .product=${this.product}></x-related-products>
      <x-documents .product=${this.product}></x-documents>
      <x-product-characteristics .product=${this.product}></x-product-characteristics>
    `;
  }
}
customElements.define('x-pdp', Pdp);
