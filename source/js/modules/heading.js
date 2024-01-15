import '../../css/app.css';

import {LitElement, html} from 'lit';

export class Heading extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
    <div class="navbar bg-base-200 px-6">

      <!-- Logo -->
      <div class="flex-1">
        <div class="logo flex-none">
          <div class="text-xl">Castway</div>
          <div class="text-sm">VoiceTrack</div>
        </div>
      </div>

      <!-- Dropdown -->
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define('app-heading', Heading);
