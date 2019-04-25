import { LitElement, html } from 'lit-element';
import data from '../../../data';

class App extends LitElement {
  constructor() {
    super();
    this.product = {};
  }

  async getMockData() {
    return await Promise.resolve(data);
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
        <lit-route class="app" path="/"><x-pdp .product=${this.product}></x-pdp></lit-route>
        <lit-route path="/product-cart"><x-cart></x-cart></lit-route>
      </div>
    `;
  }
}

customElements.define('x-app', App);
