import '../../css/app.css';

import {LitElement, html} from 'lit';

export class PlaylistHead extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
    <div class="overflow-x-auto">
      <table class="table">
        <tbody>
    `;
  }
}

window.customElements.define('app-playlistHead', PlaylistHead);
