import { LitElement, html, css } from 'lit-element';

class Table extends LitElement {
  static get styles() {
    return css`
      .table {
        width: 100%;
        margin: 0 0 25px;
        border-collapse: collapse;
      }

      .table_caption {
        font-size: 16px;
        line-height: 40px;
        padding: 0 10px;
        background-color: #eaeaea;
        text-align: left;
      }

      .table_row {
        border-bottom: 1px solid #eaeaea;
      }

      .table_title {
        width: 35%;
        padding: 0 10px;
        font-size: 14px;
        line-height: 44px;
      }

      .table_value {
        padding: 0 10px;
        font-size: 14px;
        line-height: 44px;
      }
    `;
  }

	render() {
    return html`
      <table class="table">
        <caption class="table_caption">Main</caption>
        <tr class="table_row">
          <th class="table_title">range of product</th>
          <td class="table_value">Altivar 12</td>
        </tr>
        <tr class="table_row">
          <th class="table_title">range of product</th>
          <td class="table_value">Altivar 12</td>
        </tr>
        <tr class="table_row">
          <th class="table_title">range of product</th>
          <td class="table_value">Altivar 12</td>
        </tr>
        <tr class="table_row">
          <th class="table_title">range of product</th>
          <td class="table_value">Altivar 12</td>
        </tr>
      </table>
    `;
    }
}

customElements.define('x-table', Table);
