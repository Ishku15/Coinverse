(this.webpackJsonpcryptopage=this.webpackJsonpcryptopage||[]).push([[0],{586:function(e,c){},626:function(e,c,t){},628:function(e,c,t){"use strict";t.r(c);var a,s=t(0),n=t(32),i=t.n(n),r=t(37),l=t(29),j=t(631),o=t(633),d=t(640),b=t(63),h=t(637),u=t(639),x=t(308),O=t(641),p=t(642),m=t(643),v=t(644),g=t(645),y=t.p+"static/media/cryptocurrency.1548aced.png",f=t(4),N=function(){var e=Object(s.useState)(!0),c=Object(b.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(null),i=Object(b.a)(n,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(s.useEffect)((function(){a(!(l<768))}),[l]),Object(f.jsx)("div",{className:"nav-container",children:Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)(h.a,{src:y,size:"large"}),Object(f.jsx)(o.a.Title,{level:2,className:"logo",children:Object(f.jsx)(r.b,{to:"/homepage",children:"Crytoverse"})}),t&&Object(f.jsxs)(u.a,{theme:"dark",children:[Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(O.a,{}),children:Object(f.jsx)(r.b,{to:"/homepage",children:"Home"})}),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(p.a,{}),children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(m.a,{}),children:Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"})}),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(v.a,{}),children:Object(f.jsx)(r.b,{to:"/news",children:"News"})})]}),Object(f.jsx)(x.a,{className:"menu-control-container",onClick:function(){return a(!t)},children:Object(f.jsx)(g.a,{})})]})})},w=t(33),C=t.n(w),k=t(636),S=t(114),T=t(65),P=t(632),E=t(165),M=t(48),q={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"0e161ce069msh7e0ebb6daeb6e43p1d7b53jsn67595cc20534"},A=function(e){return{url:e,headers:q}},F=Object(E.a)({reducerPath:"cryptoApi",baseQuery:Object(M.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return A("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return A("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timeperiod;return A("/coin/".concat(c,"/history/").concat(t))}}),getCryptoExchanges:e.query({query:function(){return A("/exchanges")}})}}}),I=F.useGetCryptosQuery,U=F.useGetCryptoDetailsQuery,$=F.useGetCryptoHistoryQuery,D=F.useGetCryptoExchangesQuery,H=(t(185),t(630)),Q=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(H.a,{})})},V=function(e){var c=e.simplified,t=I(c?10:100),a=t.data,n=t.isFetching,i=Object(s.useState)([]),l=Object(b.a)(i,2),j=l[0],o=l[1],d=Object(s.useState)(""),h=Object(b.a)(d,2),u=h[0],x=h[1];return Object(s.useEffect)((function(){var e,c=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));o(c)}),[a,u]),n?Object(f.jsx)(Q,{}):Object(f.jsxs)(f.Fragment,{children:[!c&&Object(f.jsx)("div",{className:"search-crypto",children:Object(f.jsx)(k.a,{placeholder:"Search Crpyto",onChange:function(e){return x(e.target.value)}})}),Object(f.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(f.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(f.jsx)(r.b,{to:"/crypto/".concat(e.id),children:Object(f.jsxs)(P.a,{title:"".concat(e.rank,". ").concat(e.name," "),extra:Object(f.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(f.jsxs)("p",{children:["Price: $",C()(e.price)]}),Object(f.jsxs)("p",{children:["Market Cap: ",C()(e.marketCap)]}),Object(f.jsxs)("p",{children:["Daily Change: ",C()(e.change),"%"]})]})})},e.id)}))})]})},G=t(168),L=t(635),z=t(646),R=t(647),W=t(648),J=t(649),Z=t(169),_=t(650),B=t(311),K=t(305),X=o.a.Title,Y=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],i=[],r=0;r<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);r++){var l,j,o,d;n.push(null===(o=t.data)||void 0===o?void 0:o.history[r].price),i.push(new Date(null===(d=t.data)||void 0===d?void 0:d.history[r].timestamp))}var b={labels:i,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{className:"chart-header",children:[Object(f.jsxs)(X,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object(f.jsxs)(T.a,{className:"price-container",children:[Object(f.jsxs)(X,{level:5,className:"price-change",children:[null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(f.jsxs)(X,{level:5,className:"current-price",children:["Current ",s," price : $",a]})]})]}),Object(f.jsx)(K.a,{data:b,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},ee=o.a.Title,ce=o.a.Text,te=L.a.Option,ae=function(){var e,c=Object(l.f)().coinId,t=Object(s.useState)("7d"),a=Object(b.a)(t,2),n=a[0],i=a[1],r=U(c),j=r.data,o=r.isFetching,d=$({coinId:c,timeperiod:n}).data,h=null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.coin;if(o)return Object(f.jsx)(Q,{});var u=[{title:"Price to USD",value:"$ ".concat(h.price&&C()(h.price)),icon:Object(f.jsx)(z.a,{})},{title:"Rank",value:h.rank,icon:Object(f.jsx)(R.a,{})},{title:"24h Volume",value:"$ ".concat(h.volume&&C()(h.volume)),icon:Object(f.jsx)(W.a,{})},{title:"Market Cap",value:"$ ".concat(h.marketCap&&C()(h.marketCap)),icon:Object(f.jsx)(z.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(C()(h.allTimeHigh.price)),icon:Object(f.jsx)(J.a,{})}],x=[{title:"Number Of Markets",value:h.numberOfMarkets,icon:Object(f.jsx)(p.a,{})},{title:"Number Of Exchanges",value:h.numberOfExchanges,icon:Object(f.jsx)(m.a,{})},{title:"Aprroved Supply",value:h.approvedSupply?Object(f.jsx)(Z.a,{}):Object(f.jsx)(_.a,{}),icon:Object(f.jsx)(B.a,{})},{title:"Total Supply",value:"$ ".concat(C()(h.totalSupply)),icon:Object(f.jsx)(B.a,{})},{title:"Circulating Supply",value:"$ ".concat(C()(h.circulatingSupply)),icon:Object(f.jsx)(B.a,{})}];return Object(f.jsxs)(T.a,{className:"coin-detail-container",children:[Object(f.jsxs)(T.a,{className:"coin-heading-container",children:[Object(f.jsxs)(ee,{level:2,className:"coin-name",children:[h.name,"(",h.slug,") Price"]}),Object(f.jsxs)("p",{children:[h.name," live price in US Dollars. View value statistics,market cap and supply."]})]}),Object(f.jsx)(L.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return i(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(f.jsx)(te,{children:e},e)}))}),Object(f.jsx)(Y,{coinHistory:d,currentPrice:C()(h.price),coinName:h.name}),Object(f.jsxs)(T.a,{className:"stats-container",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsxs)(ee,{level:3,className:"coin-detailes",children:[h.name," Value Statistics"]}),Object(f.jsxs)("p",{children:["An Overview showing the stats of ",h.name]})]}),u.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(ce,{children:c}),Object(f.jsx)(ce,{children:t})]}),Object(f.jsx)(ce,{className:"stats",children:a})]})}))]}),Object(f.jsxs)(T.a,{className:"other-stats-info",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsx)(ee,{level:3,className:"coin-detailes",children:"Other Statistics"}),Object(f.jsx)("p",{children:"An Overview showing the stats of all Coins"})]}),x.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(ce,{children:c}),Object(f.jsx)(ce,{children:t})]}),Object(f.jsx)(ce,{className:"stats",children:a})]})}))]})]}),Object(f.jsxs)(T.a,{className:"coin-desc-link",children:[Object(f.jsx)(S.a,{className:"coin-desc",children:Object(f.jsxs)(ee,{level:3,className:"coin-details-heading",children:["What is ",h.name,"?",Object(G.a)(h.description)]})}),Object(f.jsxs)(T.a,{className:"coin-links",children:[Object(f.jsxs)(ee,{level:3,className:"coin-details-heading",children:[h.name," Links"]}),h.links.map((function(e){return Object(f.jsxs)(S.a,{className:"coin-link",children:[Object(f.jsx)(ee,{level:5,className:"link-name",children:e.type}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},se=t(638),ne=o.a.Text,ie=se.a.Panel,re=function(){var e,c=D(),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return console.log(s),a?Object(f.jsx)(Q,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{gutter:[32,50],children:[Object(f.jsx)(T.a,{span:6,children:"Exchanges"}),Object(f.jsx)(T.a,{span:6,children:"24h Trade Volume"}),Object(f.jsx)(T.a,{span:6,children:"Markets"}),Object(f.jsx)(T.a,{span:6,children:"Change"})]}),Object(f.jsx)(S.a,{children:s.map((function(e){return Object(f.jsx)(T.a,{span:24,children:Object(f.jsx)(se.a,{accordion:!0,children:Object(f.jsx)(ie,{header:Object(f.jsxs)(S.a,{children:[Object(f.jsxs)(T.a,{span:6,children:[Object(f.jsx)(ne,{children:Object(f.jsxs)("strong",{children:[e.rank,"."]})}),Object(f.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(f.jsx)(ne,{children:Object(f.jsx)("strong",{children:e.name})})]}),Object(f.jsxs)(T.a,{span:6,children:["$",C()(e.volume)]}),Object(f.jsx)(T.a,{span:6,children:C()(e.numberOfMarkets)}),Object(f.jsxs)(T.a,{span:6,children:[C()(e.marketShare),"%"]})]},e.id),showArrow:!1,children:Object(G.a)(e.description||" ")},e.id)})})}))})]})},le=t(634),je=o.a.Title,oe=function(){var e,c=I(10),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(f.jsx)(Q,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(je,{level:2,className:"heading",children:"Global Cypto Stats"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(le.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(le.a,{title:"Total Exchanges",value:C()(s.totalExchanges)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(le.a,{title:"Total Market Cap",value:C()(s.totalMarketCap)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(le.a,{title:"Total 24h volume",value:C()(s.total24hVolume)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(le.a,{title:"Total Markets",value:C()(s.totalMarkets)})})]}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(je,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(f.jsx)(je,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(f.jsx)(V,{simplified:!0}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(je,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(f.jsx)(je,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/news",children:"Show More"})})]}),Object(f.jsx)(ve,{simplified:!0})]})},de=t(304),be=t.n(de),he={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"0e161ce069msh7e0ebb6daeb6e43p1d7b53jsn67595cc20534"},ue=Object(E.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(M.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){return{url:"/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=".concat(e),headers:he}}})}}}),xe=ue.useGetCryptoNewsQuery,Oe="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",pe=o.a.Text,me=o.a.Title,ve=(L.a.Option,function(e){var c=e.simplified,t=xe(c?6:40).data;return t?(console.log(t),Object(f.jsx)(S.a,{gutter:[24,24],children:t.value.map((function(e,c){var t,a,s,n,i,r;return Object(f.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(f.jsx)(P.a,{hoverable:!0,className:"news-card",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(f.jsxs)("div",{className:"news-image-container",children:[Object(f.jsx)(me,{className:"news-title",level:4,children:e.name}),Object(f.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||Oe,alt:"News"})]}),Object(f.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(f.jsxs)("div",{className:"provider-container",children:[Object(f.jsx)(h.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.contentUrl)||Oe}),Object(f.jsx)(pe,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(f.jsx)(pe,{children:be()(e.datePublished).startOf("ss").fromNow()})]})})},c)}))})):Object(f.jsx)(Q,{})}),ge=(t(626),function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"navbar",children:Object(f.jsx)(N,{})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"routes",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/homepage",children:Object(f.jsx)(oe,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(f.jsx)(re,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(f.jsx)(V,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(f.jsx)(ae,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/news",children:Object(f.jsx)(ve,{})})]})})}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsxs)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(f.jsx)("br",{}),"All rights reserved."]}),Object(f.jsxs)(d.b,{children:[Object(f.jsx)(r.b,{to:"/",children:"Home"}),Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(f.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})}),ye=(t(627),t(45)),fe=t(34),Ne=t(11),we=Object(Ne.a)({reducer:(a={},Object(fe.a)(a,F.reducerPath,F.reducer),Object(fe.a)(a,ue.reducerPath,ue.reducer),a)});i.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(ye.a,{store:we,children:Object(f.jsx)(ge,{})})}),document.getElementById("root"))}},[[628,1,2]]]);
//# sourceMappingURL=main.55bf859b.chunk.js.map