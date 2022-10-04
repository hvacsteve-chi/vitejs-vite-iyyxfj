import './style.css';
import '/components/faithhvaclogo.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="/components/faithhvaclogo.svg" target="_blank" class="logo" alt="Faith logo" />
    </a>
    <h1>Hello WindyCity!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the blue flames logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
