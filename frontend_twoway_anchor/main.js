import html from "./html.js";

class Main {
  #cnt = 0;
  get cnt() {
    return this.#cnt;
  }
  set cnt(n) {
    this.#cnt = n;
    document.getElementById(this.cnt.__proto__.id).innerText = n;
  }

  func = {
    add() {
      ++this.cnt;
    },

    [Symbol.iterator]: function* () {
      yield this.add;
    }
  }

  constructor() {
    for (const i in this.func) {
      window[i] = this.func[i].bind(this);
    }
    this.render();
  }

  render() {
    app.innerHTML = html`
      <button onclick="add()">${this.cnt}</button>
    `
  }
}

new Main();
