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
  let htmlContent = md.render(markdown);

  // Put all the content into <div>
  htmlContent = `<div>${htmlContent}</div>`;

  // Put <table> inside <div style="overflow-x:auto;"> to enable horizontal scrolling on small screens
  htmlContent = htmlContent.replace(
    /<table>/g,
    '<div style="overflow-x:auto;"><table>'
  );
  htmlContent = htmlContent.replace(/<\/table>/g, "</table></div>");

  return htmlContent;
}
