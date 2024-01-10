import '../../css/app.css';

import {LitElement, html} from 'lit';

export class Playlist extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
    <app-playlistHead></app-playlistHead>
          <playlist-item></playlist-item>
          <app-playlistFoot></app-playlistFoot>
    `;
  }
}

window.customElements.define('app-playlist', Playlist);
