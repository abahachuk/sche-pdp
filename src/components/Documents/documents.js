import { LitElement, html, css } from 'lit-element';

class Documents extends LitElement {
  static get styles() {
    return css`
      .documents {
        margin: 0 0 25px;
        padding: 12px;
        background-color: #f5f5f5;
      }

      .documents_list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .documents_item {
        margin: 0 60px 0 0;
      }

      .documents_link {
        color: #626469;
        font-size: 13px;
        line-height: 20px;
        text-decoration: none;
      }

      .documents_link::before {
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 17px;
        height: 22px;
        margin: 0 10px 0 0;
        background-position: -93px -255px;
        background-image: url(https://www.schneider-electric.us/shop-static/assets/css/img/common-sprite@2x.png);
        background-size: 317px 314px;
      }
    `;
  }

  render() {
    return html`
      <div class="documents">
        <ul class="documents_list">
          <li class="documents_item"><a class="documents_link" href="">Product Datasheet</a></li>
          <li class="documents_item"><a class="documents_link" href="">Product Datasheet</a></li>
          <li class="documents_item"><a class="documents_link" href="">Product Datasheet</a></li>
        </ul>
      </div>
    `;
  }
}
customElements.define('x-documents', Documents);
