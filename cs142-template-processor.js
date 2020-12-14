function Cs142TemplateProcessor(template) {
  this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
  let reg = /{{[^{]*}}/g;
  let hh = this.template.match(reg);
  hh = hh.map((el) => el.slice(2, el.length - 2));
  var t = this.template;
  var arr = hh;
  arr.map((el) => {
    var repl = "{{" + el + "}}";
    if (dictionary[el]) {
      t = t.replace(repl, dictionary[el]);
    } else {
      t = t.replace(repl, "");
    }
  });
  return t;
};
