import { v4 } from 'https://cdn.skypack.dev/uuid';

export default function (strings, ...values) {
  const l = strings.length - 1;
  let html = "";

  for (let i = 0; i < l; ++i) {
    let v = values[i];
    if (v instanceof Array) {
      v = v.join("");
    }
    v.__proto__.id = v4();
    const s = strings[i] + `<fuck style="all:unset;" id="${v.__proto__.id}">${v}</fuck>`;
    html += s;
  }
  html += strings[l];
  return html;
}
