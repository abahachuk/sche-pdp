import { LitElement, html } from 'lit-element';

class TestLit extends LitElement {
  render() {
    return html`
      <div>
        uraaa
      </div>
    `;
  }
}

customElements.define('test-lit', TestLit);
