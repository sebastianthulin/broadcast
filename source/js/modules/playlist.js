import '../../css/app.css';

import {LitElement, html} from 'lit';

export class Playlist extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
      <playlist-item></playlist-item>
      <playlist-item></playlist-item>
      <playlist-item></playlist-item>
      <playlist-item></playlist-item>
      <playlist-item></playlist-item>

    `;
  }
}

window.customElements.define('app-playlist', Playlist);
