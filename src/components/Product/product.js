import { LitElement, html } from 'lit-element';
import { changeProductTitle } from '../../redux/actions';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { getProductTitle } from '../../redux/reducer';


class Product extends connect(store)(LitElement) {
	static get properties() {
		return {
			title: { type: String },
		};
	}

	stateChanged(state) {
		this.title = getProductTitle(state);
	}

	changeProductName(e) {
		const title = e.target.value;
		store.dispatch(changeProductTitle(title));
	}

	render() {
    return html`
			<div>
				<div>product data element</div>
				<span>${this.title}</span>
				<input 
					value="${this.title || ''}"
					@change="${this.changeProductName}"
				>
      </div>
    `;
    }
}

customElements.define('product-view', Product);
