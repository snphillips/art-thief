(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(16),r=a.n(i),l=(a(22),a(3)),c=a(4),s=a(7),u=a(5),p=a(6),m=a(1),h=a(9),d=a.n(h),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",{className:"Header"},"Art Thief")}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"placeholder-square",style:this.props.parent_state.displayPlaceholderSquare})}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.props.handleDropdownSubmit},o.a.createElement("select",{id:"tag",value:this.props.parent_state.value,onChange:this.props.handleDropdownChange},o.a.createElement("option",{value:"abstract"},"abstract"),o.a.createElement("option",{value:"abstraction"},"abstraction"),o.a.createElement("option",{value:"advertising"},"advertising"),o.a.createElement("option",{value:"geometric"},"geometric"),o.a.createElement("option",{value:"pattern"},"pattern"),o.a.createElement("option",{value:"floral"},"floral"),o.a.createElement("option",{value:"decorative"},"decorative"),o.a.createElement("option",{value:"repetition"},"repetition"),o.a.createElement("option",{value:"ornament"},"ornament"),o.a.createElement("option",{value:"art deco"},"art deco"),o.a.createElement("option",{value:"textile design"},"textile desgin"),o.a.createElement("option",{value:"modernism"},"modernism"),o.a.createElement("option",{value:"angular"},"angular"),o.a.createElement("option",{value:"organic"},"organic")),o.a.createElement("input",{type:"submit",value:"submit"}))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.parent_state.imageURL,t=this.props.parent_state.learnMoreURL;return o.a.createElement("div",{className:"ArtResult",style:this.props.parent_state.displayArtResult},o.a.createElement("img",{src:e,alt:"random item from collection",className:"image-URL",onClick:this.props.viewBigImage}),o.a.createElement("div",null,o.a.createElement("a",{href:t,className:"learn-more-link"},"learn more about this item")))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal-background",style:this.props.parent_state.showModal},o.a.createElement("img",{className:"image-large",src:this.props.parent_state.imageURL,onClick:this.props.closeBigImage,alt:""}))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={serverSource:"http://localhost:8000/cooperhewittapi",imageURL:"",learnMoreURL:"",randomImageURL:"",randomURL:"",jazzAgeImageURL:"",jazzAgeLearnMoreURL:"",value:"",showModal:{display:"none"},displayArtResult:{display:"none"},displayLargeArt:{display:"none"},displayPlaceholderSquare:{display:"block"}},a.handleSubmitButton02=a.handleSubmitButton02.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmitButton03=a.handleSubmitButton03.bind(Object(m.a)(Object(m.a)(a))),a.handleDropdownChange=a.handleDropdownChange.bind(Object(m.a)(Object(m.a)(a))),a.handleDropdownSubmit=a.handleDropdownSubmit.bind(Object(m.a)(Object(m.a)(a))),a.viewBigImage=a.viewBigImage.bind(Object(m.a)(Object(m.a)(a))),a.closeBigImage=a.closeBigImage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleSubmitButton02",value:function(e){e.preventDefault(),console.log("button 02 clicked"),this.cooperHewittJazzAgeFromAPI(),this.setState({displayArtResult:{display:"block"}}),this.setState({displayPlaceholderSquare:{display:"none"}})}},{key:"cooperHewittJazzAgeFromAPI",value:function(){var e=this,t=Math.floor(100*Math.random()+1);console.log("randomNumber:",t),d.a.get("http://localhost:8000/cooperhewittapijazzage").then(function(a){e.setState({imageURL:a.data.objects[t].images[0].z.url}),console.log("response length:",a.data.objects.length)}).catch(function(e){console.log(e)})}},{key:"handleDropdownChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleDropdownSubmit",value:function(e){console.log("the current lookup tag is: "+this.state.value),this.cooperHewittSearchByTagFromAPI(),this.setState({displayArtResult:{display:"block"}}),this.setState({displayPlaceholderSquare:{display:"none"}}),e.preventDefault()}},{key:"cooperHewittSearchByTagFromAPI",value:function(){var e=this,t=Math.floor(56*Math.random()+1);console.log("randomNumber:",t),d.a.get("http://localhost:8000/searchbytag/"+"".concat(this.state.value)).then(function(a){e.setState({imageURL:a.data.objects[t].images[0].z.url})}).catch(function(e){console.log(e)})}},{key:"handleSubmitButton03",value:function(e){e.preventDefault(),console.log("button 03 clicked"),this.cooperHewittRandomFromAPI(),this.setState({displayArtResult:{display:"block"}}),this.setState({displayPlaceholderSquare:{display:"none"}})}},{key:"viewBigImage",value:function(e){console.log("image clicked"),this.setState({showModal:{display:"block"}}),this.setState({BigImageURL:this.imageURL})}},{key:"closeBigImage",value:function(e){console.log("close big image"),this.setState({showModal:{display:"none"}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null),"Click to reveal a random item from the Cooper Hewitt Museum:",o.a.createElement("br",null),o.a.createElement(v,{handleDropdownChange:this.handleDropdownChange,handleDropdownSubmit:this.handleDropdownSubmit,parent_state:this.state}),o.a.createElement(b,{parent_state:this.state}),o.a.createElement(j,{parent_state:this.state,closeBigImage:this.closeBigImage}),o.a.createElement(y,{parent_state:this.state,viewBigImage:this.viewBigImage}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.2e118607.chunk.js.map