import { LitElement, html } from 'lit-element';

class Test extends LitElement {
  render() {
    return html`
      <div>
            uraaaaaa
      </div>
    `;
  }
}
customElements.define('test-element', Test);
