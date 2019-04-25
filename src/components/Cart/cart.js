import { LitElement, html, css } from 'lit-element';

class Cart extends LitElement {
  static get styles() {
    return css`
    * {
      box-sizing: border-box; }

      html {
        font-size: 100%; }

      body {
        font-size: 13px;
        color: #333;
        font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
        font-weight: 300;
        margin: 0;
        padding: 0; }

      .main {
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 40px; }

      .cart-pills {
        display: flex;
        width: 100%;
        min-width: 100%;
        min-height: 25px;
        padding: 15px 0;
        margin-bottom: 0; }

      .cart-pills__item {
        border-radius: 25px;
        border: 1px solid #9fa0a4;
        padding: 4px 15px 3px;
        font-size: 12px;
        font-weight: 400;
        color: #626469;
        list-style: none;
        margin-left: 10px; }
        .cart-pills__item:first-child {
          margin-left: 0; }
        .cart-pills__item.selected {
          background: #3dcd58;
          color: #fff;
          border-color: #3dcd58; }
        .cart-pills__item:hover {
          cursor: pointer; }

      .cart {
        display: flex; }

      .cart-table {
        flex-grow: 1;
        margin-right: 20px; }

      .cart-sidebar {
        width: 280px;
        border: 1px solid #42b4e6;
        padding: 20px;
        font-size: 14px;
        color: #626469;
        font-weight: 700; }

      .cart-sidebar__section {
        margin-bottom: 10px; }
        .cart-sidebar__section > span:last-child {
          margin-left: 5px; }
        .cart-sidebar__section.total {
          color: #333; }

      .cart-sidebar__button-buy {
        display: block;
        width: 100%;
        border: 0;
        background-color: #42b4e6;
        color: #fff;
        font-size: 16px;
        padding: 10px; }
        .cart-sidebar__button-buy:hover {
          cursor: pointer;
          background-image: linear-gradient(#59bde9, #42b4e6 50%); }

      .flex-table {
        display: flex;
        flex-flow: row wrap; }
        .flex-table.header {
          padding: 7px 0;
          font-size: 13px;
          line-height: 18px;
          background-color: #f3f2f2;
          color: #626469; }
          .flex-table.header .first {
            padding-left: 20px; }
          .flex-table.header .second {
            text-align: center; }
          .flex-table.header .third {
            text-align: right;
            padding-right: 40px; }
        .flex-table.row {
          align-items: center;
          padding: 10px 0; }

      .flex-row.first {
        width: 60%; }

      .flex-row.second {
        width: 20%; }

      .flex-row.third {
        width: 20%; }

      .flex-row__name-cell {
        display: flex;
        padding-left: 20px; }

      .flex-row__subtotal {
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        color: #626469;
        font-weight: 700;
        align-items: center;
        word-break: break-word; }
        .flex-row__subtotal .flex-row__subtotal-currency {
          margin-left: 5px; }
        .flex-row__subtotal .delete-icon {
          margin: 0 10px;
          height: 20px;
          color: #9fa0a4; }
          .flex-row__subtotal .delete-icon:hover {
            cursor: pointer;
            color: #666; }

      .product-wrapper {
        display: flex;
        align-items: center; }

      .product__img img {
        width: 70px;
        min-width: 70px;
        max-width: 70px;
        height: 70px;
        min-height: 70px;
        max-height: 70px;
        overflow: hidden; }

      .product__link {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none; }
        .product__link:hover {
          color: #3dcd58; }

      .product__description {
        font-size: 12px;
        line-height: 16px;
        color: #626469; }

      .table-qty {
        display: flex;
        width: 94px;
        min-width: 94px;
        height: 35px;
        border: 1px solid #e7e6e6;
        margin: 0 auto; }

      .table-qty__btn {
        position: relative;
        flex: 0 0 25px;
        width: 25px;
        padding: 0;
        border: none;
        color: #626469;
        background-color: #e7e6e6;
        cursor: pointer; }

      .table-qty__btn:focus {
        outline: none; }

      .table-qty__btn:active {
        color: #9fa0a4; }

      .table-qty__btn-icon {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto; }

      .table-qty__value {
        flex: 1 1 auto;
        min-width: 0;
        width: 0;
        padding: 0;
        border: none;
        text-align: center;
        color: #626469;
        font-size: 14px; }

      .table-qty__value:focus {
        outline: none; }

      .table-qty__arrow {
        display: flex;
        width: 8px;
        height: 8px; }

      .checkbox__input {
        display: none; }

      .checkbox__input:checked + .checkbox__label:before {
        border: none;
        background: #42b4e6 url(src/styles/img/common/checkbox-arrow.svg) no-repeat 1px 2px; }

      .checkbox__input:disabled + .checkbox__label {
        color: rgba(98, 100, 105, 0.5); }

      .checkbox__input:disabled + .checkbox__label:before {
        border: none;
        background: #e7e6e6 url(src/styles/img/common/checkbox-arrow.svg) no-repeat 1px 2px; }

      .checkbox__label {
        display: flex;
        cursor: pointer;
        align-items: center; }

      .checkbox__label.checked:before {
        border: none;
        background: #42b4e6 url(src/styles/img/common/checkbox-arrow.svg) no-repeat 1px 2px; }

      .checkbox__label:before {
        content: "";
        border: 1px solid #626469;
        min-height: 14px;
        height: 14px;
        max-height: 14px;
        min-width: 14px;
        width: 14px;
        max-width: 14px;
        margin-right: 10px;
        box-sizing: border-box;
        padding-left: 1px;
        display: block; }

      .checkbox.disabled .checkbox__label:before, .checkbox__label:before.disabled {
        border-color: #9fa0a4; }
    `;
  }

  static get properties() {
    return {
      product: {
        type: Object
      },
    };
  }

  constructor() {
    super();
    this.product = {};
  }

  render() {
    return html `
      <div class="main">
        <div class="cart-pills__wrapper">
            <ul class="cart-pills">
                <li class="cart-pills__item selected">All Items</li>
                <li class="cart-pills__item">Single Items</li>
            </ul>
        </div>
        <div class="cart">
            <div class="cart-table">
                <div class="flex-table header">
                    <div class="flex-row first">Name</div>
                    <div class="flex-row second">Quantity</div>
                    <div class="flex-row third">Subtotal</div>
                </div>
                <div class="flex-table row">
                    <div class="flex-row first">
                        <div class="flex-row__name-cell"><input type="checkbox" class="checkbox__input hidden"
                                id="checkbox" readonly=""> <label for="checkbox"
                                class="checkbox__label cart-table__checkbox"></label>
                            <div class="product-wrapper"><a class="product__img" href="#"><img
                                        src="https://download.schneider-electric.com/files?p_Doc_Ref=PF080604&amp;p_File_Type=rendition_113_png&amp;default_image=DefaultProductImage.png"
                                        alt="Schneider Eletric ATV12H018M2 Picture"></a>
                                <div class="product__info"><a class="product__link" href="#">ATV12H018M2</a>
                                    <p class="product__description">variable speed drive ATV12 - 0.18kW - 0.25hp -
                                        200..240V - 1ph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-row second">
                        <div class="table-qty"><button class="table-qty__btn"><svg width="11" height="1"
                                    class="table-qty__btn-icon">
                                    <rect width="11" height="1" fill="currentColor"></rect>
                                </svg></button> <input pattern="[0-9]*" class="table-qty__value" inputmode="numeric"
                                value="1"> <button class="table-qty__btn"><svg width="11" height="11"
                                    class="table-qty__btn-icon">
                                    <rect width="1" height="11" transform="translate(5.000000, 0.000000)"
                                        fill="currentColor"></rect>
                                    <rect width="11" height="1" transform="translate(0.000000, 5.000000)"
                                        fill="currentColor"></rect>
                                </svg></button></div>
                    </div>
                    <div class="flex-row third">
                        <div class="flex-row__subtotal"><span>184.62</span><span
                                class="flex-row__subtotal-currency">USD</span>
                            <figure class="delete-icon"><svg width="20" height="20" viewBox="0 0 20 20" class="icon"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(1.000000, 0.000000)" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M1.9287,5.505 L1.9287,15.729 C1.9287,16.707 2.7327,17.5 3.7237,17.5 L12.2757,17.5 C13.2677,17.5 14.0717,16.707 14.0717,15.729 L14.0717,5.505"
                                                id="Stroke-6"></path>
                                            <polygon id="Stroke-7"
                                                points="0.31 5.357 15.691 5.357 15.691 2.928 0.31 2.928"></polygon>
                                            <polyline id="Stroke-8"
                                                points="5.1665 2.836 5.1665 0.5 10.8335 0.5 10.8335 2.836"></polyline>
                                            <path d="M5.1665,15.072 L5.1665,7.786" id="Stroke-9"></path>
                                            <path d="M10.8335,15.072 L10.8335,7.786" id="Stroke-10"></path>
                                            <path d="M8,15.072 L8,7.786" id="Stroke-11"></path>
                                        </g>
                                    </g>
                                </svg></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-sidebar__wrapper">
                <div class="cart-sidebar">
                    <div class="cart-sidebar__section"><span>Total items:</span><span>1</span></div>
                    <div class="cart-sidebar__section total"><span>184.62</span><span>USD</span></div><button
                        class="cart-sidebar__button-buy">Where to Buy</button>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('x-cart', Cart);