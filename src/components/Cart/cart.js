import { LitElement, html } from 'lit-element';

class Cart extends LitElement {
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
			<div>
				<div>Cart element</div>
				<span>${'qwe: ' + this.product.name}</span>
      </div>
    `;
  }
}

customElements.define('x-cart', Cart);
