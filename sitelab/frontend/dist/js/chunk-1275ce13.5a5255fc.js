(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1275ce13"],{"55dc":function(e,o,r){},a55b:function(e,o,r){"use strict";r.r(o);var a=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"login"},[r("LoginForm"),r("Footer")],1)},s=[],t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"login-form"},[r("div",{staticClass:"box-wrapper",class:{active:e.logginIn}},[e.logginIn?r("div",[r("p",[e._v("User login")]),r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(o){o.target.composing||e.$set(e.form,"email",o.target.value)}}}),e.emailError?r("span",{staticClass:"error-messages"},[e._v("Invalid email address")]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(o){o.target.composing||e.$set(e.form,"password",o.target.value)}}}),e.passwordError?r("span",{staticClass:"error-messages"},[e._v("Invalid password")]):e._e()]),r("button",{on:{click:e.login}},[e._v("Login")]),r("p",{staticStyle:{cursor:"pointer"},on:{click:e.changeForm}},[e._v("Register?")])]):r("div",{staticClass:"box-wrapper"},[r("p",[e._v("Create an account")]),r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(o){o.target.composing||e.$set(e.form,"email",o.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(o){o.target.composing||e.$set(e.form,"password",o.target.value)}}})]),r("button",{on:{click:e.register}},[e._v("Register")]),r("p",{staticStyle:{cursor:"pointer"},on:{click:e.changeForm}},[e._v("Login?")])])])])},i=[],n={name:"LoginForm",data:function(){return{logginIn:!0,emailError:!1,passwordError:!1,existed:!1,form:{email:"",password:""}}},methods:{changeForm:function(){this.logginIn=!this.logginIn,this.form.email="",this.form.password=""},login:function(){},register:function(){}}},l=n,m=(r("df0b"),r("2877")),c=Object(m["a"])(l,t,i,!1,null,"dcf9802c",null),p=c.exports,d=r("fd2d"),u={name:"Login",components:{LoginForm:p,Footer:d["a"]}},f=u,g=Object(m["a"])(f,a,s,!1,null,null,null);o["default"]=g.exports},df0b:function(e,o,r){"use strict";r("55dc")}}]);
//# sourceMappingURL=chunk-1275ce13.5a5255fc.js.map