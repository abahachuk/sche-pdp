import { LitElement, html, css } from 'lit-element';

class Slider extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
    };
  }

  static get styles() {
    return css`
      .slider {
        display: flex;
      }

      .slider_slides-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .slider_slides-item {
        margin: 0 0 10px;
        border: 1px solid #e6e6e6;
        height: 48px;
      }

      .slider_slides-item-image {
        display: block;
        height: 100%;
        width: 100%;
      }

      .slider_slides-item__active {
        border-color: #3dcd58;
      }

      .slider_slides-wrapper {
        min-width: 50px;
        width: 50px;
        flex-grow: 0;
        margin: 0 12px 0 0;
      }

      .slider_preview-wrapper {
        flex-grow: 1;
        width: 0;
        margin: 0 25px 0 0;
      }

      .slider_preview {
        display: block;
        width: 250px;
        height: 250px;
        border: 1px solid #e7e6e6;
        margin: 0 0 13px;
      }

      .slider_preview-description {
        font-size: 13px;
        line-height: 20px;
        color: #626469;
        font-weight: normal;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="slider">
        <div class="slider_slides-wrapper">
          <ul class="slider_slides-list">
            <li class="slider_slides-item slider_slides-item__active"><img class="slider_slides-item-image" src="${this.product.image}"></li>
            <li class="slider_slides-item"><img class="slider_slides-item-image" src="${this.product.image}"></li>
            <li class="slider_slides-item"><img class="slider_slides-item-image" src="${this.product.image}"></li>
          </ul>
        </div>
        <div class="slider_preview-wrapper">
          <img class="slider_preview" src="${this.product.image}">
          <p class="slider_preview-description">
            Video: How is a faulted Altivar drive reset?
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('x-slider', Slider);
