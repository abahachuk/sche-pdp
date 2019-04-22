import { LitElement, html } from 'lit-element';

class MyApp extends LitElement {
	render() {
		return html`
      <div>
        <lit-route path="/" active><h1>Home</h1></lit-route>
        <lit-route path="/about"><h1>About</h1></lit-route>
      </div>
    `;
	}
}
customElements.define('my-app', MyApp);
