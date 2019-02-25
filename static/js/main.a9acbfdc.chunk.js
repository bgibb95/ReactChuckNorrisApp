(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,n,t){e.exports=t.p+"static/media/background.b787a503.jpg"},51:function(e,n,t){e.exports=t(88)},88:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(11),r=t.n(i),c=t(8),l=t(90),s=t(91),p=t(92),d=t(15),m=t(16),u=t(17),g=t(23),f=t(18),h=t(24),b=t(13),x=t(2),y=t(89),k="#f25b25",E="#f36d3d",w="rgba(57, 57, 57, 0.9)",v="(max-width: 1070px)",j="(max-width: 800px)",C="(max-width: 600px)",O="'Poppins', -apple-system, 'Roboto', Arial, sans-serif ",_="'Quicksand', -apple-system, 'Roboto', Arial, sans-serif ";function N(){var e=Object(b.a)(["\n  text-decoration: none;\n  text-transform: capitalize;\n  margin: 10px 20px;\n  display: inline-block;\n  width: 30%;\n  cursor: pointer;\n  transition: color 0.5s ease;\n  font-family: ",";\n  &:hover{\n    color: ",";\n  }\n"]);return N=function(){return e},e}function z(){var e=Object(b.a)(["\n  body {\n    font-family: ",";\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    @media ","{\n      font-size: 30px;\n    }\n    @media ","{\n      font-size: 13px;\n    }\n  }\n  a,button{\n    color: white;\n    -webkit-tap-highlight-color: transparent;\n    &:focus, &:active{\n      outline: none;\n    }\n  }\n  .fade-appear, .fade-enter{\n    opacity: 0;\n    z-index: 1;\n  }\n  .fade-appear-active, .fade-enter{\n    &.fade-enter-active{\n      opacity: 1;\n      transition: opacity 0.5s ease 0.3s;\n    }\n  }\n  .fade-exit{\n    opacity: 1;\n  }\n  .fade-exit, .fade-exit-active{\n    opacity: 0;\n    transition: opacity 0.5s ease;\n  }\n"]);return z=function(){return e},e}var I=Object(x.a)(z(),O,j,C),R=x.c.div.withConfig({displayName:"common__Page",componentId:"sc-4zl79x-0"})(["overflow:auto;position:absolute;top:0;left:0;right:0;bottom:0;"]),T=x.c.p.withConfig({displayName:"common__Copy",componentId:"sc-4zl79x-1"})(["font-family:",";width:75%;line-height:1.5;margin:1em auto;"],_),J=Object(x.b)(N(),_,E),F=x.c.a.withConfig({displayName:"common__BasicLink",componentId:"sc-4zl79x-2"})(["",""],J),S=Object(x.c)(y.a).withConfig({displayName:"common__StyledLink",componentId:"sc-4zl79x-3"})(["border:1px solid white;border-radius:25px;padding:7px 0;",""],J),H=Object(x.c)(S).withConfig({displayName:"common__NewCategoryLink",componentId:"sc-4zl79x-4"})(["margin:auto 0;width:auto;border:none;"]),L=x.c.h1.withConfig({displayName:"common__MainTitle",componentId:"sc-4zl79x-5"})(["font-size:3rem;text-transform:capitalize;transition:all 0.5s ease;@media ","{font-size:2rem;}@media ","{font-size:3.5rem;margin:0px auto 40px;}@media ","{font-size:1.7rem;margin:10px auto;}"],v,j,C),A=x.c.div.withConfig({displayName:"common__Container",componentId:"sc-4zl79x-6"})(["width:30%;position:absolute;background-color:rgba(57,57,57,0.9);top:50%;padding:30px;transform:translateY(-50%);transition:all 0.5s ease;box-shadow:0px 0px 20px 0px black;@media ","{box-sizing:border-box;position:relative;top:0;left:0;width:90%;margin:20px auto;transform:translate(0px,0px);}@media ","{padding:10px;}"],j,C),B=Object(x.c)(A).withConfig({displayName:"common__RightContainer",componentId:"sc-4zl79x-7"})(["right:10%;opacity:",";@media ","{padding:70px 40px;}@media ","{padding:10px;}"],function(e){return e.loading?0:1},j,C),D=Object(x.c)(A).withConfig({displayName:"common__LeftContainer",componentId:"sc-4zl79x-8"})(["left:10%;"]),G=t(14),W=t.n(G),K=t(19),M=t(20),P=t.n(M),q=function(){return function(){var e=Object(K.a)(W.a.mark(function e(n){var t,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"FETCH_CATEGORIES"}),e.prev=1,e.next=4,P()("https://api.chucknorris.io/jokes/categories");case 4:t=e.sent,a=t.data,n({type:"FETCHED_CATEGORIES",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:"FETCH_ERROR"});case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(n){return e.apply(this,arguments)}}()},Q=function(e){function n(){return Object(m.a)(this,n),Object(g.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){(0,this.props.fetchCategories)()}},{key:"render",value:function(){var e=this.props.categories.map(function(e,n){return o.a.createElement(S,{to:"/joke/".concat(e),key:n},e)}),n=this.props.loading;return o.a.createElement(R,null,o.a.createElement(D,null,o.a.createElement(L,null,"Joke categories"),o.a.createElement(T,null,"Select a category to fetch a random Chuck Norris joke, relating to your chosen category.")),o.a.createElement(B,{loading:n},e))}}]),n}(a.Component),Y=Object(c.b)(function(e){return{categories:e.categories.categories,loading:e.categories.loading}},{fetchCategories:q})(Q),$=t(10),U=function(e){return function(){var n=Object(K.a)(W.a.mark(function n(t){var a,o;return W.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"FETCH_JOKE"}),n.prev=1,n.next=4,P()("https://api.chucknorris.io/jokes/random?category=".concat(e));case 4:a=n.sent,o=a.data,t({type:"FETCHED_JOKE",payload:o}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),t({type:"FETCH_ERROR"});case 12:case"end":return n.stop()}},n,this,[[1,9]])}));return function(e){return n.apply(this,arguments)}}()},V=x.c.img.withConfig({displayName:"joke__JokeIcon",componentId:"a9hi5-0"})(["max-width:50px;margin:10px 0;"]),X=x.c.h3.withConfig({displayName:"joke__JokeHeader",componentId:"a9hi5-1"})(["transition:all 0.5s ease;margin:35px auto;width:80%;@media ","{margin:40px auto;}@media ","{margin:10px auto;width:90%;}"],j,C),Z=x.c.button.withConfig({displayName:"joke__PrimaryButton",componentId:"a9hi5-2"})(["background-color:",";outline:none;display:inline-block;width:max-content;padding:12px 25px;margin:auto 20px auto 0;border:0;border-radius:25px;cursor:pointer;font-family:",";font-size:100%;transition:all 0.5s ease;&:hover{background-color:transparent;color:",";}"],k,_,k),ee=x.c.div.withConfig({displayName:"joke__Row",componentId:"a9hi5-3"})(["display:flex;justify-content:space-between;align-content:center;margin:20px auto;width:max-content;@media ","{margin:10px auto;}"],C),ne=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(f.a)(n).call(this,e))).getJoke=t.getJoke.bind(Object($.a)(t)),t}return Object(h.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){this.getJoke()}},{key:"getJoke",value:function(){var e=this.props;(0,e.fetchJokeFromCategory)(e.match.params.category)}},{key:"render",value:function(){var e=this.props,n=e.joke,t=e.loading;return o.a.createElement(R,null,o.a.createElement(D,null,o.a.createElement(L,null,n.category," ","Joke"),o.a.createElement(ee,null,o.a.createElement(Z,{type:"button",onClick:this.getJoke}," New Joke"),o.a.createElement(H,{to:"/"},"New Category"))),o.a.createElement(B,{loading:t},n.icon_url?o.a.createElement(V,{src:"".concat(n.icon_url),alt:"jokeImage"}):null,o.a.createElement(X,null,n.value),o.a.createElement(F,{href:"".concat(n.url),rel:"noopener noreferrer",target:"_blank"},"See joke")))}}]),n}(a.Component),te=Object(c.b)(function(e){return{joke:e.joke.joke,loading:e.joke.loading}},{fetchJokeFromCategory:U})(ne);function ae(){var e=Object(b.a)(["\n  0%{\n    border: 5px solid white;\n  }\n  25%{\n    border: 5px solid ",";\n  }\n  50%, 100%{\n    border: 5px solid white;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(b.a)(["\n  25%{\n    transform: translate(30px,0);\n  }\n  50%{\n    transform: translate(30px,30px);\n  }\n  75%{\n    transform: translate(0,30px);\n  }\n  100%{\n    transform: translate(0,0);\n  }\n"]);return oe=function(){return e},e}var ie=x.c.div.withConfig({displayName:"spinner__SpinnerContainer",componentId:"sc-11os0q1-0"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:auto;width:150px;height:150px;display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;z-index:2;transition:all 0.5s ease;"]),re=x.c.div.withConfig({displayName:"spinner__Parent",componentId:"sc-11os0q1-1"})(["width:50px;height:50px;transform:rotate(45deg);position:relative;"]),ce=Object(x.d)(oe()),le=Object(x.d)(ae(),k),se=x.c.div.withConfig({displayName:"spinner__BaseElement",componentId:"sc-11os0q1-2"})(["width:10px;height:10px;position:absolute;border-radius:100%;border:5px solid white;box-shadow:0 0 20px 0 ",";animation:"," 2s cubic-bezier(0.75,0,0.5,1) infinite normal;&.tl{top:0;left:0;animation-delay:0s;}&.tr{top:0;right:0;animation-delay:0.5s;}&.br{bottom:0;right:0;animation-delay:1s;}&.bl{bottom:0;left:0;animation-delay:1.5s;}&.moved{background:",";z-index:10;border:5px solid ",";animation:"," 2s cubic-bezier(0.75,0,0.5,1) infinite;}"],w,le,k,k,ce);var pe=Object(c.b)(function(e){return{categoryLoading:e.categories.loading,jokeLoading:e.joke.loading}})(function(e){var n=e.categoryLoading,t=e.jokeLoading;return o.a.createElement(d.CSSTransition,{timeout:2e3,classNames:"fade",in:n||t,unmountOnExit:!0},o.a.createElement(ie,null,o.a.createElement(re,null,o.a.createElement(se,{className:"moved"}),o.a.createElement(se,{className:"tl"}),o.a.createElement(se,{className:"tr"}),o.a.createElement(se,{className:"bl"}),o.a.createElement(se,{className:"br"}))))}),de=t(7),me=t(45),ue=t(46),ge=t(9),fe={categories:[],loading:!1},he={joke:{},loading:!1},be=Object(de.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_CATEGORIES":return Object(ge.a)({},e,{loading:!0});case"FETCHED_CATEGORIES":return Object(ge.a)({},e,{categories:n.payload,loading:!1});case"FETCH_ERROR":return Object(ge.a)({},e,{loading:!1});default:return e}},joke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_JOKE":return Object(ge.a)({},e,{loading:!0});case"FETCHED_JOKE":return Object(ge.a)({},e,{joke:n.payload,loading:!1});case"FETCH_ERROR":return Object(ge.a)({},e,{loading:!1});default:return e}}}),xe=[me.a],ye=Object(de.createStore)(be,{},Object(ue.composeWithDevTools)(de.applyMiddleware.apply(void 0,xe))),ke=t(47),Ee=t.n(ke),we=x.c.div.withConfig({displayName:"app__AppShell",componentId:"sc-1y28p19-0"})(["text-align:center;background-color:",";background-image:url(",");background-size:cover;background-repeat:no-repeat;height:100vh;@media ","{background-position:50%;}"],w,Ee.a,j),ve=function(){return o.a.createElement(c.a,{store:ye},o.a.createElement(I,null),o.a.createElement(l.a,null,o.a.createElement(we,null,o.a.createElement(pe,null),o.a.createElement(s.a,{render:function(e){var n=e.location;return o.a.createElement(d.TransitionGroup,null,o.a.createElement(d.CSSTransition,{key:n.pathname,timeout:2e3,classNames:"fade"},o.a.createElement(p.a,{location:n},o.a.createElement(s.a,{exact:!0,path:"/",component:Y}),o.a.createElement(s.a,{path:"/joke/:category",component:te}))))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.a9acbfdc.chunk.js.map