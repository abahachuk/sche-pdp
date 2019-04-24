import { LitElement, html } from 'lit-element';

import '../Breadcrumbs';
import '../Product';
import '../Related-products';
import '../Documents';
import '../Tabs';

class Pdp extends LitElement {
	render() {
		return html`
      <x-breadcrumbs></x-breadcrumbs>
      <x-product></x-product>
      <x-related-products></x-related-products>
      <x-documents></x-documents>
      <x-tabs></x-tabs>
    `;
	}
}
customElements.define('x-pdp', Pdp);
