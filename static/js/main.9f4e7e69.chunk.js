(this["webpackJsonpprofile-manager"]=this["webpackJsonpprofile-manager"]||[]).push([[0],{25:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(6),i=c.n(s),l=c(13),A=c(11),j=c(12),b=c(7),o=(c(5),function(){return Object(a.jsx)("div",{className:"ui fixed menu",children:Object(a.jsxs)("div",{className:"ui container center",children:[Object(a.jsx)("h2",{children:"Profile Manager"}),"\xa0by"," ",Object(a.jsx)("a",{href:"https://github.com/PrerakMathur20",children:"Prerak Mathur"}),Object(a.jsx)("div",{className:"right menu",children:Object(a.jsx)("div",{className:"item",children:Object(a.jsxs)("a",{href:"https://github.com/PrerakMathur20/profile-manager",className:"item",target:"_blank",rel:"noopener noreferrer",children:[Object(a.jsx)("i",{className:"github icon"}),"Source Code"]})})})]})})}),d=c(8),u=c(9),m=c(14),h=c(10),O=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(d.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={name:"",email:"",contactnumber:"",link:"https://"},e.add=function(t){t.preventDefault(),""===e.state.name&&alert("Name is mandatory!"),""===e.state.email&&alert("Email is mandatory!"),""===e.state.contactnumber&&alert("Contact Number is mandatory!"),e.props.addContactHandler(e.state),e.setState({name:"",email:"",contactnumber:"",link:"https://"})},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"ui main",children:[Object(a.jsx)("h2",{children:"Add Profile"}),Object(a.jsxs)("form",{className:"ui form",onSubmit:this.add,children:[Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Contact Number"}),Object(a.jsx)("input",{type:"text",name:"contactnumber",placeholder:"Contact Number",value:this.state.contactnumber,onChange:function(t){return e.setState({contactnumber:t.target.value})}})]}),Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Link"}),Object(a.jsx)("input",{type:"text",name:"link",placeholder:"Link",value:this.state.link,onChange:function(t){return e.setState({link:t.target.value})}})]}),Object(a.jsx)("button",{className:"ui button blue",children:"Add"})]})]})}}]),c}(r.a.Component),w=function(e){var t=e.contact,c=t.id,n=t.name,r=t.email,s=t.contactnumber,i=t.link;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("img",{className:"ui avatar image",src:"data:image/png;base64,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",alt:"user"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"header",children:n}),Object(a.jsxs)("div",{children:["Phone: ",s]}),Object(a.jsxs)("div",{children:["Email: ",Object(a.jsx)("a",{href:"mailto:"+r,children:r})]}),Object(a.jsxs)("div",{children:["Link: ",Object(a.jsx)("a",{href:i,children:" Click Here"})]})]}),Object(a.jsx)("i",{className:"trash alternate outline icon",style:{color:"red",marginTop:"1rem"},onClick:function(){return e.clickHander(c)}})]})},x=function(e){console.log(e);var t=function(t){e.getContactId(t)},c=e.contacts.map((function(e){return Object(a.jsx)(w,{contact:e,clickHander:t},e.id)}));return Object(a.jsx)("div",{className:"ui celled list",children:c})};var E=function(){var e="contacts",t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&s(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r]),Object(a.jsxs)("div",{className:"ui container",children:[Object(a.jsx)(o,{}),Object(a.jsx)(O,{addContactHandler:function(e){console.log(e),s([].concat(Object(A.a)(r),[Object(l.a)({id:Object(b.uuid)()},e)]))}}),Object(a.jsx)(x,{contacts:r,getContactId:function(e){var t=r.filter((function(t){return t.id!==e}));s(t)}})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[25,1,2]]]);
//# sourceMappingURL=main.9f4e7e69.chunk.js.map