(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["brigadeIndex"],{e41d:function(a,i,e){"use strict";e.r(i);var t=function(){var a=this,i=a.$createElement,e=a._self._c||i;return e("div",{staticClass:"home-container brigade-list__bg"},[e("div",{staticClass:"brigade-list-content"},[e("ul",{staticClass:"brigade-list"},a._l(a.brigadeData,(function(i,t){return e("li",{key:t,staticClass:"item",on:{click:function(e){return a.onBrigadeDetail(i.id)}}},[a._v(" "+a._s(i.value)+" ")])})),0)]),e("div",{staticClass:"btn-return"},[e("span",{staticClass:"btn-return__inner",on:{click:function(i){return a.goBack()}}},[a._v("返回")])])])},n=[],r={name:"BrigadeIndex",data:function(){return{brigadeData:[{id:"1",value:"中国人民政治协商会"},{id:"2",value:"中国政治的简要历史"},{id:"3",value:"政协会徽是如何产生的"},{id:"4",value:"中国政治的简要历史"},{id:"5",value:"政协会徽是如何产生的"},{id:"6",value:"中国政治的简要历史"},{id:"7",value:"政协会徽是如何产生的"},{id:"8",value:"中国政治的简要历史"},{id:"9",value:"政协会徽是如何产生的"}]}},methods:{onBrigadeDetail:function(a){this.$router.push({name:"brigadeDetail",params:{id:a}})},goBack:function(){this.$router.go(-1)}}},l=r,s=e("2877"),u=Object(s["a"])(l,t,n,!1,null,null,null);i["default"]=u.exports}}]);