import { LitElement, html, css } from 'lit-element';

class Tabs extends LitElement {
  static get styles() {
    return css`
      .tabs_nav-wrapper {
        border-top: 1px solid #fafafa;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
      }

      .tabs_nav {
        margin: 0 auto;
        width: 960px;
      }

      .tabs_nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      }

      .tabs_nav-link {
        color: #333;
        font-size: 18px;
        line-height: 52px;
        text-decoration: none;
        display: block;
        padding: 0 10px;
        border-bottom: 3px transparent solid;
      }

      .tabs_nav-link:hover {
        color: #3dcd58;
      }

      .tabs_nav-link__active {
        color: #3dcd58;
        border-bottom-color: #3dcd58;
      }

      .tabs_content-wrapper {
        background-color: #fafafa;
      }

      .tabs_content {
        margin: 25px auto 0;
        width: 960px;
      }

      .tabs_sections {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .tabs_section {
        margin: 0 0 50px;
      }

      .tabs_section-title {
        font-size: 26px;
        line-height: 40px;
        color: #3dcd58;
        font-weight: normal;
        margin: 0 0 13px;
      }
    `;
  }

  render() {
    return html`
      <div class="tabs">
        <div class="tabs_nav-wrapper">
          <nav class="tabs_nav">
            <ul class="tabs_nav-list">
              <li class="tabs_nav-item"><a class="tabs_nav-link tabs_nav-link__active" href="">Characteristics</a></li>
              <li class="tabs_nav-item"><a class="tabs_nav-link" href="">Characteristics</a></li>
              <li class="tabs_nav-item"><a class="tabs_nav-link" href="">Characteristics</a></li>
              <li class="tabs_nav-item"><a class="tabs_nav-link" href="">Characteristics</a></li>
              <li class="tabs_nav-item"><a class="tabs_nav-link" href="">Characteristics</a></li>
            </ul>
          </nav>
        </div>
        <div class="tabs_content-wrapper">
          <div class="tabs_content">
            <ul class="tabs_sections">
              <li class="tabs_section">
                <header class="tabs_section-header">
                  <h4 class="tabs_section-title">Characteristics</h4>
                </header>
                <section class="tabs_section-content">
                  <slot></slot>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('x-tabs', Tabs);
