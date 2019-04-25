import { LitElement, html, css } from 'lit-element';

class RelatedProducts extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
    };
  }

  static get styles() {
    return css`
      .related-products {
        margin: 0 0 40px;
      }

      .related-products_title {
        padding: 0 12px;
        margin: 0 0 25px;
        font-size: 20px;
        line-height: 23px;
        color: #3dcd58;
      }

      .related-products_list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .related-products_item {
        width: 33%;
        padding: 0 12px;
      }

      .related-products_more-link {
        display: block;
        margin: 0 0 20px;
        font-size: 14px;
        line-height: 18px;
        color: #333;
        font-weight: bold;
        text-decoration: none;
      }

      .related-products_more-link::after {
        content: '\\203A';
      }

      .related-products_card {
        display: flex;
        text-decoration: none;
      }

      .related-products_card-image {
        width: 60px;
        height: 60px;
      }

      .related-products_product-id {
        font-size: 12px;
        line-height: 16px;
        color: #9fa0a4;
        margin: 0 0 5px;
      }

      .related-products_product-description {
        font-size: 14px;
        line-height: 18px;
        color: #626469;
        margin: 0 0 5px;
      }

      .related-products_card-info {
        padding: 0 15px;
        width: calc(100% - 60px);
      }

      .related-products_product-price {
        margin: 0 0 5px;
        font-size: 14px;
        line-height: 20px;
        color: #9fa0a4;
      }

      .related-products_product-price-value {
        color: #333;
      }
    `;
  }

  render() {
    return html`
      <div class="related-products">
        <h2 class="related-products_title">
          Customers Also Buy These Products
        </h2>
        <ul class="related-products_list">
          <li class="related-products_item">
            <a class="related-products_more-link" href="">Related Products (${this.product['related_products'].length})</a>
            <a href="" class="related-products_card">
              <div class="related-products_card-image-wrapper">
                <img class="related-products_card-image" src=${this.product['related_products'][0].image}>
              </div>
              <div class="related-products_card-info">
                <p class="related-products_product-id">
                  ${this.product['related_products'][0].name}
                </p>
                <p class="related-products_product-description">
                  ${this.product['related_products'][0].description}
                </p>
                <p class="related-products_product-price">
                  <span class="related-products_product-price-label">Price:</span>
                  <b class="related-products_product-price-value">${this.product['related_products'][0].price}</b>
                </p>
              </div>
            </a>
          </li>
          <li class="related-products_item">
            <a class="related-products_more-link" href="">Related Products (${this.product['related_products'].length})</a>
            <a href="" class="related-products_card">
              <div class="related-products_card-image-wrapper">
                <img class="related-products_card-image" src=${this.product['related_products'][0].image}>
              </div>
              <div class="related-products_card-info">
                <p class="related-products_product-id">
                  ${this.product['related_products'][0].name}
                </p>
                <p class="related-products_product-description">
                  ${this.product['related_products'][0].description}
                </p>
                <p class="related-products_product-price">
                  <span class="related-products_product-price-label">Price:</span>
                  <b class="related-products_product-price-value">${this.product['related_products'][0].price}</b>
                </p>
              </div>
            </a>
          </li>
          <li class="related-products_item">
            <a class="related-products_more-link" href="">Related Products (${this.product['related_products'].length})</a>
            <a href="" class="related-products_card">
              <div class="related-products_card-image-wrapper">
                <img class="related-products_card-image" src=${this.product['related_products'][0].image}>
              </div>
              <div class="related-products_card-info">
                <p class="related-products_product-id">
                  ${this.product['related_products'][0].name}
                </p>
                <p class="related-products_product-description">
                  ${this.product['related_products'][0].description}
                </p>
                <p class="related-products_product-price">
                  <span class="related-products_product-price-label">Price:</span>
                  <b class="related-products_product-price-value">${this.product['related_products'][0].price}</b>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('x-related-products', RelatedProducts);
