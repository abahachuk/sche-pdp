import { LitElement, html, css } from 'lit-element';

class Breadcrumbs extends LitElement {
  static get styles() {
    return css`
      .breadcrumbs {
        margin: 4px auto 40px;
        width: 960px;
      }

      .breadcrumbs_list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .breadcrumbs_item {
        color: #333;
        font-size: 12px;
        line-height: 20px;
      }

      .breadcrumbs_item::after {
        content: '';
        display: inline-block;
        margin: 0 9px;
        width: 3px;
        height: 6px;
        vertical-align: middle;
        background-image: url(https://www.schneider-electric.co.uk/shop-static/assets/images/pdp-page/pdp-arrow-right.svg);
        background-size: cover;
      }

      .breadcrumbs_item:last-child::after {
        display: none;
      }

      .breadcrumbs_link {
        color: #333;
        text-decoration: none;
        font-size: 12px;
        line-height: 20px;
      }

      .breadcrumbs_link:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <nav class="breadcrumbs">
        <ul class="breadcrumbs_list">
          <li class="breadcrumbs_item"><a class="breadcrumbs_link" href="">All Products</a></li>
          <li class="breadcrumbs_item"><a class="breadcrumbs_link" href="">Industrial Automation and Control</a></li>
          <li class="breadcrumbs_item"><a class="breadcrumbs_link" href="">Variable Speed Drives and Soft Starters</a></li>
          <li class="breadcrumbs_item"><a class="breadcrumbs_link" href="">Machine Drives</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('x-breadcrumbs', Breadcrumbs);
