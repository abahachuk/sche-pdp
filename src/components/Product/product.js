import { LitElement, html, css } from 'lit-element';
import { addToCart } from '../../redux/actions';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';

import '../Slider';

class Product extends connect(store)(LitElement) {
  static get styles() {
    return css`
      .product {
        margin: 0 auto 55px;
        width: 960px;
      }

      .product_add-to-cart-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        display: inline-block;
      }

      .product_add-to-cart-link:hover {
        text-decoration: underline;
      }

      .product_go-to-cart-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        display: inline-block;
      }

      .product_go-to-cart-link:hover {
        text-decoration: underline;
      }

      .product_view-all-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 18px;
        display: inline-block;
        margin: 0 0 15px;
        text-decoration: none;
      }

      .product_view-all-link:hover {
        text-decoration: underline;
      }

      .product_show-more-characteristics-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 20px;
        display: inline-block;
        margin: 0 0 15px;
        text-decoration: none;
      }

      .product_show-more-characteristics-link:hover {
        text-decoration: underline;
      }

      .product_id {
        color: #333;
        font-size: 28px;
        line-height: 32px;
        margin: 0 0 15px;
      }

      .product_description {
        color: #333;
        font-size: 14px;
        line-height: 22px;
        margin: 0 0 10px;
      }

      .product_card {
        display: flex;
      }

      .product_main-info {
        flex-grow: 3;
        width: 0;
      }

      .product_info {
        flex-grow: 3;
        width: 0;
        padding: 0 20px;
      }

      .product_additional-info {
        flex-grow: 1;
      }

      .product_info-box {
        border: 1px solid #e7e6e6;
      }

      .product_info-box-section {
        padding: 20px 30px;
        background-color: #fafafa;
        border-bottom: 1px solid #e7e6e6;
      }

      .product_info-box-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .product_info-box-section__bg-color_secondary {
        background-color: #fff;
      }

      .product_info-box-section:last-child {
        border-bottom: 0;
      }

      .product_characteristics-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .product_characteristics-item {
        margin: 0 0 13px;
        font-size: 14px;
        line-height: 14px;
        color: #333;
      }

      .product_characteristics-item-name {
        margin: 0 0 7px;
      }

      .product_info-box-item-name {
        font-size: 14px;
        line-height: 20px;
      }

      .product_info-box-item-value {
        font-size: 14px;
        line-height: 20px;
      }
    `;
  }

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  constructor() {
    super();
    this.product = {
      name: '',
      description: '',
      price: 0,
      currency: '',
    };
  }

  addToCart() {
    store.dispatch(addToCart({
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      currency: this.product.currency,
    }));
  }

  render() {
    return html`
      <div class="product">
        <div class="product_card">
          <div class="product_main-info">
            <x-slider .product=${this.product}></x-slider>
          </div>
          <div class="product_info">
            <a class="product_view-all-link" href="">View all EVlink private company's car park</a>
            <p class="product_id">${this.product.name}</p>
            <p class="product_description">${this.product.description}</p>
            <a class="product_show-more-characteristics-link" href="">Show more characteristics</a>
          </div>
          <div class="product_additional-info">
            <div class="product_info-box">
                <div class="product_info-box-section">
                  <ul class="product_info-box-list">
                    <li class="product_info-box-item">
                      <div class="product_info-box-item-name">
                        Price
                      </div>
                      <div class="product_info-box-item-value">
                        <b>${this.product.price} ${this.product.currency}</b>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="product_info-box-section product_info-box-section__bg-color_secondary">
                  <a href="" class="product_add-to-cart-link" @click=${this.addToCart}>Add to cart</a>
                </div>
                <div class="product_info-box-section product_info-box-section__bg-color_secondary">
                  <a class="product_go-to-cart-link" href="/product-cart" >GO to cart</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('x-product', Product);
