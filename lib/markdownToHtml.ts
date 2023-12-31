var texzilla = require("texzilla");
var md = require("markdown-it")().use(require("markdown-it-math"), {
  inlineRenderer: function (str: string) {
    return texzilla.toMathMLString(str);
  },
  blockRenderer: function (str: string) {
    return texzilla.toMathMLString(str, true);
  },
  inlineOpen: "$$",
  inlineClose: "$$",
  blockOpen: "$$$",
  blockClose: "$$$",
});

export default function markdownToHtml(markdown: string) {
  return md.render(markdown);
}
