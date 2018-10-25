(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(62),r=a.n(s),l=(a(75),a(4)),o=a(5),c=a(8),p=a(6),m=a(7),u=a(10),d=a(63),h=a.n(d),b=a(64),g=a.n(b),y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("span",{className:"header"},"Art Thief"))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"placeholder-square",style:this.props.parent_state.displayPlaceholderSquare})}}]),t}(n.Component),j=a(65),v=a(69),E=a(67);function O(){var e=Object(j.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return O=function(){return e},e}var w=Object(v.a)(O()),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{className:"sweet-loading"},i.a.createElement(E.ScaleLoader,{className:w,sizeUnit:"px",height:32,color:"#000",loading:this.props.loading}))}}]),t}(i.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.props.handleDropdownSubmit},i.a.createElement("select",{id:"tag",value:this.props.parent_state.value,onChange:this.props.handleDropdownChange},i.a.createElement("option",{value:"exoticism"},"choose search keyword"),i.a.createElement("option",{value:"abstract"},"abstract"),i.a.createElement("option",{value:"angular"},"angular"),i.a.createElement("option",{value:"architechts"},"architechts"),i.a.createElement("option",{value:"art deco"},"art deco"),i.a.createElement("option",{value:"art nouveau"},"art nouveau"),i.a.createElement("option",{value:"circular"},"circular"),i.a.createElement("option",{value:"geometric"},"geometric"),i.a.createElement("option",{value:"graphic designers"},"graphic design"),i.a.createElement("option",{value:"industrial design"},"industrial design"),i.a.createElement("option",{value:"intricate"},"intricate"),i.a.createElement("option",{value:"modernism"},"modernism"),i.a.createElement("option",{value:"posters"},"posters"),i.a.createElement("option",{value:"simple"},"simple"),i.a.createElement("option",{value:"textile design"},"textile desgin")),i.a.createElement("input",{type:"submit",value:"submit"}),i.a.createElement(k,{loading:this.props.loading}))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ArtResult",style:this.props.parent_state.displayArtResultImage},i.a.createElement("img",{src:this.props.parent_state.imageURL,alt:"random item from Cooper Hewitt collection based on search tag",className:"image-URL",onClick:this.props.viewBigImage}))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"modal-background",style:this.props.parent_state.displayModal},i.a.createElement("img",{className:"image-large",src:this.props.parent_state.imageURL,onClick:this.props.closeBigImage,alt:""}))}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("aside",{className:"info-panel"},i.a.createElement("br",null),i.a.createElement("p",{style:this.props.parent_state.displayIntroMessage,className:"intro-message"},"Be inspired by random items from the Cooper Hewitt Museum"),i.a.createElement("h2",{style:this.props.parent_state.displayArtResultInfo,className:"item-title"},this.props.parent_state.itemTitle),i.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo,className:"item-medium"},this.props.parent_state.itemMedium),i.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo,className:"item-information"},this.props.parent_state.itemInfo),i.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo},i.a.createElement("a",{className:"learn-more-link",href:this.props.parent_state.learnMoreURL},"learn more about this item")))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement("span",{className:"footerLink"},i.a.createElement("a",{href:"https://github.com/snphillips"},"Sarah Phillips")),i.a.createElement("span",{className:"footerLink"},i.a.createElement("a",{href:"https://github.com/snphillips"},i.a.createElement("i",{className:"fab fa-github"}))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,imageURL:"",itemTitle:"",itemMedium:"",itemInfo:"",learnMoreURL:"",value:"industrial design",displayArtResultImage:{display:"none"},displayArtResultInfo:{display:"none"},displayModal:{display:"none"},displayIntroMessage:{display:"block"},displayLargeArt:{display:"none"},displayPlaceholderSquare:{display:"block"}},a.handleDropdownChange=a.handleDropdownChange.bind(Object(u.a)(Object(u.a)(a))),a.handleDropdownSubmit=a.handleDropdownSubmit.bind(Object(u.a)(Object(u.a)(a))),a.viewBigImage=a.viewBigImage.bind(Object(u.a)(Object(u.a)(a))),a.closeBigImage=a.closeBigImage.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleDropdownChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleDropdownSubmit",value:function(e){this.setState({displayArtResultInfo:{display:"none"}}),this.setState({displayIntroMessage:{display:"none"}}),this.cooperHewittSearchByTagFromAPI(),e.preventDefault()}},{key:"cooperHewittSearchByTagFromAPI",value:function(){var e=this;this.setState({loading:!0}),h.a.get("https://art-thief.herokuapp.com/searchbytag/"+"".concat(this.state.value)).then(function(t){t.data.objects=g.a.shuffle(t.data.objects),console.log(t.data.objects),e.setState({loading:!1}),e.setState({displayPlaceholderSquare:{display:"none"}}),e.setState({displayArtResultImage:{display:"block"}}),e.setState({imageURL:t.data.objects[0].images[0].z.url}),e.setState({itemTitle:t.data.objects[0].title}),e.setState({itemMedium:t.data.objects[0].medium}),e.setState({itemInfo:t.data.objects[0].label_text}),e.setState({learnMoreURL:t.data.objects[0].url}),e.setState({displayArtResultInfo:{display:"block"}})}).catch(function(e){console.log(e)})}},{key:"viewBigImage",value:function(e){this.setState({displayModal:{display:"block"}}),this.setState({BigImageURL:this.imageURL})}},{key:"closeBigImage",value:function(e){this.setState({displayModal:{display:"none"}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 col-xl-6"},i.a.createElement(I,{handleDropdownChange:this.handleDropdownChange,handleDropdownSubmit:this.handleDropdownSubmit,loading:this.state.loading,parent_state:this.state}),i.a.createElement(f,{parent_state:this.state}),i.a.createElement(S,{parent_state:this.state,viewBigImage:this.viewBigImage}),i.a.createElement(N,{parent_state:this.state,closeBigImage:this.closeBigImage})),i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 col-xl-6"},i.a.createElement(R,{parent_state:this.state})))),i.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){e.exports=a(162)},75:function(e,t,a){}},[[70,2,1]]]);
//# sourceMappingURL=main.84960a4a.chunk.js.map