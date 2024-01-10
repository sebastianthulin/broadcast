import '../../css/app.css';

import {LitElement, html} from 'lit';

export class PlaylistItem extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
      <tr>
        <td>
          <div class="flex items-center gap-3">
            
            <!-- Avatar -->
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

            <!-- Tackinfo -->
            <div>
              <div class="font-bold">
                Que veux-tu 

                <!-- Type: Rotation, FXP, etc. -->
                <span class="badge badge-sm">
                  A
                </span>
              </div>
              <div class="text-sm opacity-50">Madeon, Yelle</div>
            </div>

          </div>
        </td>
        <td>
          3:10
        </td>
        <td>
          <span class="badge badge-sm">
            House
          </span>
          <span class="badge badge-sm">
            Dance
          </span>
          <span class="badge badge-sm">
            Pop
          </span>
        </td>
        <th>
          <button class="btn btn-primary btn-xs">...</button>
        </th>
      </tr>
    `;
  }
}

window.customElements.define('playlist-item', PlaylistItem);
