import '../../css/app.css';

import {LitElement, html} from 'lit';

export class PlaylistFoot extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
          </tbody>
      </table>
    </div>
    `;
  }
}

window.customElements.define('app-playlistFoot', PlaylistFoot);
