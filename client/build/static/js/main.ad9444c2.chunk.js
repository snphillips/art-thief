(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){e.exports=a(80)},35:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),i=a.n(r),l=(a(35),a(3)),o=a(4),c=a(10),m=a(6),p=a(5),u=a(24),d=a.n(u),h=a(25),g=a.n(h),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("h1",{className:"header"},s.a.createElement("a",{href:"/",className:"header-link"},"Art Thief")))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{style:this.props.parent_state.displayPlaceholderImage},s.a.createElement("img",{id:"placeholder-image",alt:"",src:"./images/Cooper-Hewitt_Museum02.png",onMouseOver:function(e){e.currentTarget.src="https://i.imgur.com/IwBKBye.png"},onMouseOut:function(e){e.currentTarget.src="./images/Cooper-Hewitt_Museum02.png"}}))}}]),a}(n.Component),v=a(26),f=a(29),E=a(27);function j(){var e=Object(v.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return j=function(){return e},e}var w=Object(f.a)(j()),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("span",{className:"sweet-loading"},s.a.createElement(E.ScaleLoader,{className:w,sizeUnit:"px",height:32,color:"#000",loading:this.props.loading}))}}]),a}(s.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleDropdownSubmit},s.a.createElement("select",{id:"tag",value:this.props.parent_state.value,onChange:this.props.handleDropdownChange},s.a.createElement("option",{value:"exoticism"},"select search keyword"),s.a.createElement("option",{className:"dropdown-item-style",value:"abstract"},"abstract"),s.a.createElement("option",{className:"dropdown-item-style",value:"angular"},"angular"),s.a.createElement("option",{className:"dropdown-item-style",value:"graphic design"},"graphic design"),s.a.createElement("option",{className:"dropdown-item-style",value:"art deco"},"art deco"),s.a.createElement("option",{className:"dropdown-item-style",value:"art nouveau"},"art nouveau"),s.a.createElement("option",{className:"dropdown-item-style",value:"chairs"},"chairs"),s.a.createElement("option",{className:"dropdown-item-style",value:"circular"},"circular"),s.a.createElement("option",{className:"dropdown-item-style",value:"geometric"},"geometric"),s.a.createElement("option",{className:"dropdown-item-style",value:"graphic designers"},"graphic designers"),s.a.createElement("option",{className:"dropdown-item-style",value:"industrial design"},"industrial design"),s.a.createElement("option",{className:"dropdown-item-style",value:"intricate"},"intricate"),s.a.createElement("option",{className:"dropdown-item-style",value:"kitchen"},"kitchen"),s.a.createElement("option",{className:"dropdown-item-style",value:"modernism"},"modernism"),s.a.createElement("option",{className:"dropdown-item-style",value:"posters"},"posters"),s.a.createElement("option",{className:"dropdown-item-style",value:"simple"},"simple"),s.a.createElement("option",{className:"dropdown-item-style",value:"textile design"},"textile desgin")),s.a.createElement("input",{type:"submit",className:"button",id:"submit-button",value:"submit"}),s.a.createElement(O,{loading:this.props.loading}))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("span",{className:"ArtResult",style:this.props.parent_state.displayArtResultImage},s.a.createElement("img",{src:this.props.parent_state.imageURL,alt:"random item from Cooper Hewitt collection based on search tag",className:"image-URL",onClick:this.props.viewBigImage}))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"modal-background",style:this.props.parent_state.displayModal},s.a.createElement("img",{className:"image-large",src:this.props.parent_state.imageURL,onClick:this.props.closeBigImage,alt:""}))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("aside",{className:"info-panel"},s.a.createElement("p",{style:this.props.parent_state.displayIntroMessage,className:"intro-message"},"Be inspired by random items from the Cooper Hewitt Museum"),s.a.createElement("h2",{style:this.props.parent_state.displayArtResultInfo,className:"item-title"},this.props.parent_state.itemTitle),s.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo,className:"item-medium"},this.props.parent_state.itemMedium),s.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo,className:"item-information"},this.props.parent_state.itemInfo),s.a.createElement("p",{style:this.props.parent_state.displayArtResultInfo},s.a.createElement("a",{className:"learn-more-link",href:this.props.parent_state.learnMoreURL},"learn more about this item")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("span",{className:"footerLink"},s.a.createElement("a",{href:"https://sarahphillipsdev.surge.sh"}," by Sarah Phillips")),s.a.createElement("span",{className:"footerLink"},s.a.createElement("a",{href:"https://github.com/snphillips/art-thief"},s.a.createElement("i",{className:"fab fa-github"}))))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!1,imageURL:"",itemTitle:"",itemMedium:"",itemInfo:"",learnMoreURL:"",value:"exoticism",displayArtResultImage:{display:"none"},displayArtResultInfo:{display:"none"},displayModal:{display:"none"},displayIntroMessage:{display:"inline"},displayLargeArt:{display:"none"},displayPlaceholderSquare:{display:"block"}},n.handleDropdownChange=n.handleDropdownChange.bind(Object(c.a)(n)),n.handleDropdownSubmit=n.handleDropdownSubmit.bind(Object(c.a)(n)),n.viewBigImage=n.viewBigImage.bind(Object(c.a)(n)),n.closeBigImage=n.closeBigImage.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleDropdownChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleDropdownSubmit",value:function(e){this.setState({displayArtResultInfo:{display:"none"}}),this.setState({displayIntroMessage:{display:"none"}}),this.cooperHewittSearchByTagFromAPI(),e.preventDefault()}},{key:"cooperHewittSearchByTagFromAPI",value:function(){var e=this;this.setState({loading:!0}),d.a.get("https://art-thief.herokuapp.com/searchbytag/"+"".concat(this.state.value)).then((function(t){t.data.objects=g.a.shuffle(t.data.objects),console.log("The search value is:",e.state.value,"and there are",t.data.objects.length,"objects."),e.setState({loading:!1}),e.setState({displayPlaceholderImage:{display:"none"}}),e.setState({displayArtResultImage:{display:"block"}}),e.setState({imageURL:t.data.objects[0].images[0].z.url}),e.setState({itemTitle:t.data.objects[0].title}),e.setState({itemMedium:t.data.objects[0].medium}),e.setState({itemInfo:t.data.objects[0].label_text}),e.setState({learnMoreURL:t.data.objects[0].url}),e.setState({displayArtResultInfo:{display:"block"}})})).catch((function(e){console.log(e)}))}},{key:"viewBigImage",value:function(e){this.setState({displayModal:{display:"block"}}),this.setState({BigImageURL:this.imageURL})}},{key:"closeBigImage",value:function(e){this.setState({displayModal:{display:"none"}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"image-container-stack-vertical flex-item"},s.a.createElement(N,{handleDropdownChange:this.handleDropdownChange,handleDropdownSubmit:this.handleDropdownSubmit,parent_state:this.state,loading:this.state.loading}),s.a.createElement(b,{parent_state:this.state}),s.a.createElement(k,{parent_state:this.state,viewBigImage:this.viewBigImage}),s.a.createElement(I,{parent_state:this.state,closeBigImage:this.closeBigImage})),s.a.createElement("div",{className:"info-container-stack-horizontal flex-item"},s.a.createElement(S,{parent_state:this.state}))),s.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ad9444c2.chunk.js.map