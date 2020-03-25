(this["webpackJsonpdhl-gallery"]=this["webpackJsonpdhl-gallery"]||[]).push([[0],{31:function(t,e,a){t.exports=a(48)},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},44:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(25),s=a.n(r),i=(a(36),a(14)),c=a(2),l=a(4),u=a(5),h=a(6),m=a(7),p=(a(37),a(38),a(28)),d=a(13),b=a(49),f=a(15),v=(a(41),a(42),a(17));var E=Object(v.a)({photos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":return t=Object(c.a)({},t,Object(i.a)({},e.photo.id,e.photo)),console.log("----------- NEW item is Added in store----------"),t;case"REMOVE":return delete t[e.photo.id],console.log("----------- 1 item is REMOVED in store----------"),t;case"GET":default:return t}}}),O=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return void console.log(e)}}(),g=Object(v.b)(E,O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());g.subscribe((function(){return function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(a){console.log(a)}}(g.getState())}));var S=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"handleSavingToFavorite",value:function(t){var e=t.target;return this.props.isSaved?("favorite"!==this.props.albumType&&e.classList.remove("saved"),void this.buildActionToStore(!1)):(e.classList.add("saved"),void this.buildActionToStore(!0))}},{key:"buildActionToStore",value:function(t){var e={};e=t?{type:"ADD",photo:Object(c.a)({},this.props.photo)}:{type:"REMOVE",photo:Object(c.a)({},this.props.photo)},g.dispatch(e),"favorite"===this.props.albumType&&this.props.updateState()}},{key:"properClassOnload",value:function(){return this.props.isSaved?"saved":""}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:this.props.photo.thumbnailUrl,className:"card-img-top",alt:this.props.photo.title}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},this.props.photo.title)),o.a.createElement("span",{className:"mark-fav ".concat(this.properClassOnload()),onClick:function(e){t.handleSavingToFavorite(e)}},o.a.createElement("i",{className:"far fa-star unmarked"}),o.a.createElement("i",{className:"fas fa-star marked"})))}}]),a}(n.Component),j=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={getStorePhotos:{},albumPhotos:{},isContentLoaded:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=g.getState().photos;this.setState({getStorePhotos:Object(c.a)({},e)}),this.setState({albumPhotos:Object(c.a)({},this.props.photos)},(function(){t.setState({isContentLoaded:!0})}))}},{key:"getSavedPhoto",value:function(t){if(this.state.getStorePhotos)for(var e in t=parseInt(t,10),this.state.getStorePhotos)if(this.state.getStorePhotos[e].id===t)return!0}},{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,this.state.isContentLoaded&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Album ",this.props.id),o.a.createElement(b.a,{className:"container-photos"},Object.keys(this.state.albumPhotos).map((function(e,a){return o.a.createElement(S,{key:a,photo:t.state.albumPhotos[e],isSaved:t.getSavedPhoto(e),albumType:"stock"})})))))}}]),a}(n.Component),y=(a(44),function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={photos:{},isFavoriteLoaded:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"updatePhotos",value:function(){var t=this,e=g.getState().photos;this.setState({photos:Object(c.a)({},e)},(function(){t.setState({isFavoriteLoaded:!0})}))}},{key:"getSavedPhoto",value:function(t){if(this.state.getStorePhotos)for(var e in t=parseInt(t,10),this.state.getStorePhotos)if(this.state.photos[e].id===t)return!0}},{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,this.state.isFavoriteLoaded&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Favorite Photos"),o.a.createElement(b.a,{className:"container-photos"},this.state.photos&&Object.keys(this.state.photos).map((function(e,a){return o.a.createElement(S,{key:a,photo:t.state.photos[e],isSaved:!0,albumType:"favorite",updateState:t.updatePhotos.bind(t)})})))))}}]),a}(n.Component));g.subscribe((function(){var t=g.getState().photos;console.log("------ STORE CONTAINS ---------: ",t)}));var k=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(b.a,null,o.a.createElement(p.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(f.d,{defaultIndex:0},o.a.createElement(f.b,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fas fa-star"})," Favorite"),Object.keys(this.props.albums).map((function(t,e){return o.a.createElement(f.a,{key:e},o.a.createElement("i",{className:"fas fa-images"})," Album ",t)}))),o.a.createElement(f.c,null,o.a.createElement(y,null)),Object.keys(this.props.albums).map((function(e,a){return o.a.createElement(f.c,{key:a},o.a.createElement(j,{id:e,photos:t.props.albums[e]}))})))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Oopps 404!")))))}}]),a}(n.Component),N=(a(47),function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.issueInConnection?o.a.createElement("p",{className:"error"},"Something went wrong on api server!"):o.a.createElement("p",{className:"loading"},"LOADING...")}}]),a}(n.Component)),w=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={isDataLoaded:!1,isThereAnError:!1,wantedAlbums:[1,2,3,4,5],albums:{}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){if(e.ok)return e.json();throw t.setState({isThereAnError:!0}),new Error("[fetch data] Something went wrong on api server!")})).then((function(e){for(var a=0;a<e.length;a++){if(e[a].albumId>5){t.setState({isDataLoaded:!0});break}t.state.wantedAlbums.indexOf(e[a].albumId)>-1&&t.setState({albums:Object(c.a)({},t.state.albums,Object(i.a)({},e[a].albumId,Object(c.a)({},t.state.albums[e[a].albumId],Object(i.a)({},e[a].id,e[a]))))})}})).catch((function(t){throw t}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.isDataLoaded?o.a.createElement(k,{albums:this.state.albums}):o.a.createElement(N,{issueInConnection:this.state.isThereAnError}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4d7e3368.chunk.js.map