(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{RNiq:function(e,t,a){"use strict";a.r(t);var c=a("ln6h"),n=a.n(c),r=a("O40h"),s=a("q1tI"),i=a.n(s),l=a("I0qz"),o=a("zgjP"),m=a.n(o),d=function(e){var t=e.precio,a=t.price,c=t.percent_change_1h,n=t.percent_change_7d,r=t.percent_change_24h;return i.a.createElement("div",{className:"card text-white bg-success mb-3"},i.a.createElement("div",{className:"card-header"},"Precio del Bitcoin"),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Precio Actual: $ ",a.toFixed(2)),i.a.createElement("div",{className:"d-md-flex justify-content-between"},i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Ultima Hora: ")," ",c,"%"),i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Ultimas 24 Hora: "),r,"%"),i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Ultimos 7 Dias: "),n,"%"))))},u=function(e){var t,a=e.noticia,c=a.urlToImage,n=a.url,r=a.title,s=a.description,l=a.source;return t=""!==c?i.a.createElement("img",{src:c,alt:r,className:"card-img-top"}):i.a.createElement("p",{className:"text-center my-5"},"Imagen No Disponible"),i.a.createElement("div",{className:"col-md-6 col-12 mb-4"},i.a.createElement("div",{clas:"card"},i.a.createElement("div",{className:"card-image"},t),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},r),i.a.createElement("p",{className:"card-text"},s),i.a.createElement("p",{className:"card-text"},l.name),i.a.createElement("a",{href:n,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticias"))))},p=function(e){return i.a.createElement("div",{className:"row"},e.noticias.map(function(e){return i.a.createElement(u,{key:e.url,noticia:e})}))},E=a("pLtp"),b=a.n(E),v=function(e){var t=e.info,a=t.name,c=t.url,n=t.description,r=a.text;r.length>60&&(r=r.substr(0,60)+"...");var s=n.text;return s&&(s=s.substr(0,250)+"..."),i.a.createElement("a",{href:c,target:"_blank",className:"list-group-item active text-light mb-1"},i.a.createElement("h3",{className:"mb-3"},r),i.a.createElement("p",{className:"mb-1"},s))},N=function(e){var t=b()(e.eventos);return i.a.createElement("div",{className:"list-group"},t.map(function(t){return i.a.createElement(v,{key:t,info:e.eventos[t]})}))},h=function(e){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Precio del Bitcoin"),i.a.createElement(d,{precio:e.precioBitcoin})),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("h2",{className:"mb-3"},"Noticias del Bitcoin"),i.a.createElement(p,{noticias:e.noticias})),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h2",{className:"mb-3"},"Proximos Eventos Bitcoin"),i.a.createElement(N,{eventos:e.eventos}))))};h.getInitialProps=Object(r.default)(n.a.mark(function e(){var t,a,c,r,s,i,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coinmarketcap.com/v2/ticker/1/",e.next=3,m()("https://api.coinmarketcap.com/v2/ticker/1/");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,"https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=aa5536b31cbf4bf1b5cf4a96bc8938c2&language=es",e.next=10,m()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=aa5536b31cbf4bf1b5cf4a96bc8938c2&language=es");case 10:return c=e.sent,e.next=13,c.json();case 13:return r=e.sent,"6LSRMHFVJKNHDIMGQENV","date","es_ES",s="https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=".concat("date","&location.address=Argentina&token=").concat("6LSRMHFVJKNHDIMGQENV","&locale=").concat("es_ES"),e.next=20,m()(s);case 20:return i=e.sent,e.next=23,i.json();case 23:return l=e.sent,e.abrupt("return",{precioBitcoin:a.data.quotes.USD,noticias:r.articles,eventos:l.events});case 25:case"end":return e.stop()}},e)}));t.default=h},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}},[["vlRD","5d41","9da1"]]]);