import { LitElement, html } from 'lit-element';

class App extends LitElement {
  constructor() {
    super();
    this.product = {};
  }

  async getMockData() {
    const data = await fetch('data.json');

    return await data.json();
  }

  async firstUpdated() {
    this.product = await this.getMockData();
  }

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
    return html`
      <div>
        <lit-route path="/product"><x-pdp .product=${this.product}></x-pdp></lit-route>
        <lit-route path="/product-cart"><x-cart .product=${this.product}></x-cart></lit-route>
      </div>
    `;
  }
}

customElements.define('x-app', App);
