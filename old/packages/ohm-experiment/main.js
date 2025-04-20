import './style.css';
import { setupParser } from './mondo.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
    <div class="card">
      <textarea id="code">[bd sd].fast(2)</textarea><br />
      <button id="parse-button" type="button">parse</button>
      <div id="output">
      </div>
    </div>
  </div>
`;

setupParser(
  document.querySelector('#parse-button'),
  document.querySelector('#code'),
  document.querySelector('#output'),
);
