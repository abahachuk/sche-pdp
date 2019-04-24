import { LitElement, html, css } from 'lit-element';

import '../Slider';

class Product extends LitElement {

  static get styles() {
    return css`
      .product {
        margin: 0 12px 55px;
      }

      .product_view-all-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 18px;
        display: inline-block;
        margin: 0 0 15px;
      }

      .product_show-more-characteristics-link {
        color: #42b4e6;
        font-size: 14px;
        line-height: 20px;
        display: inline-block;
        margin: 0 0 15px;
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
        flex-grow: 1;
        width: 0;
      }

      .product_info {
        flex-grow: 0;
        width: 368px;
        min-width: 368px;
        padding: 0 20px;
      }

      .product_additional-info {
        width: 0;
        flex-grow: 1;
      }

      .product_info-box {
        border: 1px solid #e7e6e6;
      }

      .product_info-box-section {
        padding: 12px 30px;
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
    `;
  }

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  constructor() {
    super();
    this.product = {};
  }

  render() {
    return html`
      <div class="product">
        <div class="product_card">
          <div class="product_main-info">
            <x-slider></x-slider>
          </div>
          <div class="product_info">
            <a class="product_view-all-link" href="">View all EVlink private company's car park</a>
            <p class="product_id">EVF2S22P02</p>
            <p class="product_description">EVlink PARKING Floor Standing 22KW 1xT2 EV CHARGING STATION</p>
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
                        <b>184.62 USD</b>
                      </div>
                    </li>
                </div>
            </div>
          </div>
        </div>
				<a href="/product-cart" >cart</a>
      </div>
    `;
  }
}

customElements.define('x-product', Product);
