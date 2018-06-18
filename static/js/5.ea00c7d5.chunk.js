webpackJsonp([5],{382:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var s=t(0),c=t.n(s),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),i=function(e){function a(){return l(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,e),m(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Headings"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Heading"),c.a.createElement("th",null,"Example"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h1></h1>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h1"},"h1. Bootstrap heading"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h2></h2>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h2"},"h2. Bootstrap heading"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h3></h3>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h3"},"h3. Bootstrap heading"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h4></h4>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h4"},"h4. Bootstrap heading"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h5></h5>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h5"},"h5. Bootstrap heading"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},"<h6></h6>"))),c.a.createElement("td",null,c.a.createElement("span",{className:"h6"},"h6. Bootstrap heading"))))))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Headings"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,c.a.createElement("code",{className:"highlighter-rouge"},".h1")," through ",c.a.createElement("code",{className:"highlighter-rouge"},".h6")," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),c.a.createElement("div",{className:"bd-example"},c.a.createElement("p",{className:"h1"},"h1. Bootstrap heading"),c.a.createElement("p",{className:"h2"},"h2. Bootstrap heading"),c.a.createElement("p",{className:"h3"},"h3. Bootstrap heading"),c.a.createElement("p",{className:"h4"},"h4. Bootstrap heading"),c.a.createElement("p",{className:"h5"},"h5. Bootstrap heading"),c.a.createElement("p",{className:"h6"},"h6. Bootstrap heading")))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Display headings"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ",c.a.createElement("strong",null,"display heading"),"\u2014a larger, slightly more opinionated heading style."),c.a.createElement("div",{className:"bd-example bd-example-type"},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("span",{className:"display-1"},"Display 1"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("span",{className:"display-2"},"Display 2"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("span",{className:"display-3"},"Display 3"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("span",{className:"display-4"},"Display 4")))))))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Inline text elements"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ",c.a.createElement("strong",null,"display heading"),"\u2014a larger, slightly more opinionated heading style."),c.a.createElement("div",{className:"bd-example"},c.a.createElement("p",null,"You can use the mark tag to ",c.a.createElement("mark",null,"highlight")," text."),c.a.createElement("p",null,c.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),c.a.createElement("p",null,c.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),c.a.createElement("p",null,c.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),c.a.createElement("p",null,c.a.createElement("u",null,"This line of text will render as underlined")),c.a.createElement("p",null,c.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),c.a.createElement("p",null,c.a.createElement("strong",null,"This line rendered as bold text.")),c.a.createElement("p",null,c.a.createElement("em",null,"This line rendered as italicized text."))))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Description list alignment"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ",c.a.createElement("code",{className:"highlighter-rouge"},".text-truncate")," class to truncate the text with an ellipsis."),c.a.createElement("div",{className:"bd-example"},c.a.createElement("dl",{className:"row"},c.a.createElement("dt",{className:"col-sm-3"},"Description lists"),c.a.createElement("dd",{className:"col-sm-9"},"A description list is perfect for defining terms."),c.a.createElement("dt",{className:"col-sm-3"},"Euismod"),c.a.createElement("dd",{className:"col-sm-9"},c.a.createElement("p",null,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),c.a.createElement("p",null,"Donec id elit non mi porta gravida at eget metus.")),c.a.createElement("dt",{className:"col-sm-3"},"Malesuada porta"),c.a.createElement("dd",{className:"col-sm-9"},"Etiam porta sem malesuada magna mollis euismod."),c.a.createElement("dt",{className:"col-sm-3 text-truncate"},"Truncated term is truncated"),c.a.createElement("dd",{className:"col-sm-9"},"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),c.a.createElement("dt",{className:"col-sm-3"},"Nesting"),c.a.createElement("dd",{className:"col-sm-9"},c.a.createElement("dl",{className:"row"},c.a.createElement("dt",{className:"col-sm-4"},"Nested definition list"),c.a.createElement("dd",{className:"col-sm-8"},"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."))))))))}}]),a}(s.Component);a.default=i}});
//# sourceMappingURL=5.ea00c7d5.chunk.js.map