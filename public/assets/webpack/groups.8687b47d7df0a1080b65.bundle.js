webpackJsonp(["groups"],{"../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/group_folder.vue":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{groups:{type:Object,required:!0},baseGroup:{type:Object,required:!1,default:function(){return{}}}}}},"../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/group_item.vue":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("./groups/event_hub.js");t.default={props:{group:{type:Object,required:!0},baseGroup:{type:Object,required:!1,default:function(){return{}}},collection:{type:Object,required:!1,default:function(){return{}}}},methods:{onClickRowGroup:function(e){e.stopPropagation(),"A"===e.target.tagName||"I"===e.target.tagName&&"A"===e.target.parentElement.tagName||(this.group.hasSubgroups?o.a.$emit("toggleSubGroups",this.group):window.location.href=this.group.webUrl)},onLeaveGroup:function(e){e.preventDefault(),confirm('Are you sure you want to leave the "'+this.group.fullName+'" group?')&&this.leaveGroup()},leaveGroup:function(){o.a.$emit("leaveGroup",this.group,this.collection)}},computed:{groupDomId:function(){return"group-"+this.group.id},rowClass:function(){return{"group-row":!0,"is-open":this.group.isOpen,"has-subgroups":this.group.hasSubgroups,"no-description":!this.group.description}},visibilityIcon:function(){return{fa:!0,"fa-globe":"public"===this.group.visibility,"fa-shield":"internal"===this.group.visibility,"fa-lock":"private"===this.group.visibility}},fullPath:function(){var e="";if(this.group.isOrphan)if(Object.keys(this.baseGroup).length>0&&this.baseGroup!==this.group){var t=this.group.fullName,r=this.baseGroup.fullName,o=r.length,s=t.indexOf(r);e=t.substr(s+o+3)}else e=this.group.fullName;else e=this.group.name;return e},hasGroups:function(){return Object.keys(this.group.subGroups).length>0}}}},"../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/groups.vue":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("./vue_shared/components/table_pagination.vue"),s=r.n(o),n=r("./groups/event_hub.js");t.default={props:{groups:{type:Object,required:!0},pageInfo:{type:Object,required:!0}},components:{tablePagination:s.a},methods:{change:function(e){var t=gl.utils.getParameterByName("filter_groups"),r=gl.utils.getParameterByName("sort");n.a.$emit("fetchPage",e,t,r)}}}},"../../../node_modules/vue-loader/lib/component-normalizer.js":function(e,t){e.exports=function(e,t,r,o){var s,n=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,n=e.default);var a="function"==typeof n?n.options:n;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),o){var u=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}}),a.computed=u}return{esModule:s,exports:n,options:a}}},'../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-130a7e70"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/group_item.vue':function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{class:e.rowClass,attrs:{id:e.groupDomId},on:{click:function(t){t.stopPropagation(),e.onClickRowGroup(t)}}},[r("div",{staticClass:"group-row-contents"},[r("div",{staticClass:"controls"},[e.group.canEdit?r("a",{staticClass:"edit-group btn",attrs:{href:e.group.editPath}},[r("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),r("a",{staticClass:"leave-group btn",attrs:{href:e.group.leavePath,title:"Leave this group"},on:{click:e.onLeaveGroup}},[r("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])]),e._v(" "),r("div",{staticClass:"stats"},[r("span",{staticClass:"number-projects"},[r("i",{staticClass:"fa fa-bookmark",attrs:{"aria-hidden":"true"}}),e._v("\n        "+e._s(e.group.numberProjects)+"\n      ")]),e._v(" "),r("span",{staticClass:"number-users"},[r("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),e._v("\n        "+e._s(e.group.numberUsers)+"\n      ")]),e._v(" "),r("span",{staticClass:"group-visibility"},[r("i",{class:e.visibilityIcon,attrs:{"aria-hidden":"true"}})])]),e._v(" "),r("div",{staticClass:"folder-toggle-wrap"},[e.group.hasSubgroups?r("span",{staticClass:"folder-caret"},[e.group.isOpen?r("i",{staticClass:"fa fa-caret-down",attrs:{"aria-hidden":"true"}}):e._e(),e._v(" "),e.group.isOpen?e._e():r("i",{staticClass:"fa fa-caret-right",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),r("span",{staticClass:"folder-icon"},[e.group.isOpen?r("i",{staticClass:"fa fa-folder-open",attrs:{"aria-hidden":"true"}}):e._e(),e._v(" "),e.group.isOpen?e._e():r("i",{staticClass:"fa fa-folder",attrs:{"aria-hidden":"true"}})])]),e._v(" "),r("div",{staticClass:"avatar-container s40 hidden-xs"},[r("a",{attrs:{href:e.group.webUrl}},[r("img",{staticClass:"avatar s40",attrs:{src:e.group.avatarUrl}})])]),e._v(" "),r("div",{staticClass:"title"},[r("a",{attrs:{href:e.group.webUrl}},[e._v(e._s(e.fullPath))]),e._v(" "),e.group.permissions.humanGroupAccess?[e._v("\n      as\n      "),r("span",{staticClass:"access-type"},[e._v(e._s(e.group.permissions.humanGroupAccess))])]:e._e()],2),e._v(" "),r("div",{staticClass:"description"},[e._v(e._s(e.group.description))])]),e._v(" "),e.group.isOpen&&e.hasGroups?r("group-folder",{attrs:{groups:e.group.subGroups,baseGroup:e.group}}):e._e()],1)},staticRenderFns:[]}},'../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4da4ed3a"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/group_folder.vue':function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"content-list group-list-tree"},e._l(e.groups,function(t,o){return r("group-item",{key:o,attrs:{group:t,"base-group":e.baseGroup,collection:e.groups}})}))},staticRenderFns:[]}},'../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6281b3c9"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/groups.vue':function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"groups-list-tree-container"},[r("group-folder",{attrs:{groups:e.groups}}),e._v(" "),r("table-pagination",{attrs:{change:e.change,pageInfo:e.pageInfo}})],1)},staticRenderFns:[]}},"./groups/components/group_folder.vue":function(e,t,r){var o=r("../../../node_modules/vue-loader/lib/component-normalizer.js")(r("../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/group_folder.vue"),r('../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4da4ed3a"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/group_folder.vue'),null,null);e.exports=o.exports},"./groups/components/group_item.vue":function(e,t,r){var o=r("../../../node_modules/vue-loader/lib/component-normalizer.js")(r("../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/group_item.vue"),r('../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-130a7e70"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/group_item.vue'),null,null);e.exports=o.exports},"./groups/components/groups.vue":function(e,t,r){var o=r("../../../node_modules/vue-loader/lib/component-normalizer.js")(r("../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./groups/components/groups.vue"),r('../../../node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6281b3c9"}!../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./groups/components/groups.vue'),null,null);e.exports=o.exports},"./groups/event_hub.js":function(e,t,r){"use strict";var o=r("../../../node_modules/vue/dist/vue.esm.js");t.a=new o.default},"./groups/groups_filterable_list.js":function(e,t,r){"use strict";(function(e){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r("./filterable_list.js"),a=r("./groups/event_hub.js"),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=function e(t,r,o){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,r);if(void 0===s){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,o)}if("value"in s)return s.value;var i=s.get;if(void 0!==i)return i.call(o)},p=function(t){function r(t){var n=t.form,i=t.filter,a=t.holder,u=t.filterEndpoint,l=t.pagePath;o(this,r);var p=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n,i,a));return p.form=n,p.filterEndpoint=u,p.pagePath=l,p.$dropdown=e(".js-group-filter-dropdown-wrap"),p}return n(r,t),u(r,[{key:"getFilterEndpoint",value:function(){return this.filterEndpoint}},{key:"getPagePath",value:function(t){var r=t?e.param(t):"",o=r?"?"+r:"";return""+this.pagePath+o}},{key:"bindEvents",value:function(){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"bindEvents",this).call(this),this.onFormSubmitWrapper=this.onFormSubmit.bind(this),this.onFilterOptionClikWrapper=this.onOptionClick.bind(this),this.filterForm.addEventListener("submit",this.onFormSubmitWrapper),this.$dropdown.on("click","a",this.onFilterOptionClikWrapper)}},{key:"onFormSubmit",value:function(t){t.preventDefault();var r=e(this.form),o=r.find('[name="filter_groups"]').val(),s={};o&&(s.filter_groups=o),this.filterResults(s),this.setDefaultFilterOption()}},{key:"setDefaultFilterOption",value:function(){var t=e.trim(this.$dropdown.find(".dropdown-menu a:first-child").text());this.$dropdown.find(".dropdown-label").text(t)}},{key:"onOptionClick",value:function(t){t.preventDefault();var r={},o=gl.utils.getParameterByName("sort",t.currentTarget.href);o&&(r.sort=o),this.filterResults(r),this.$dropdown.find(".dropdown-label").text(e.trim(t.currentTarget.text)),this.form.querySelector('[name="filter_groups"]').value=""}},{key:"onFilterSuccess",value:function(e,t,o){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"onFilterSuccess",this).call(this,e,t,o);var s={"X-Per-Page":t.getResponseHeader("X-Per-Page"),"X-Page":t.getResponseHeader("X-Page"),"X-Total":t.getResponseHeader("X-Total"),"X-Total-Pages":t.getResponseHeader("X-Total-Pages"),"X-Next-Page":t.getResponseHeader("X-Next-Page"),"X-Prev-Page":t.getResponseHeader("X-Prev-Page")};a.a.$emit("updateGroups",e),a.a.$emit("updatePagination",s)}}]),r}(i.a);t.a=p}).call(t,r("../../../node_modules/jquery/dist/jquery.js"))},"./groups/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=r("../../../node_modules/vue/dist/vue.esm.js"),o=r("./groups/groups_filterable_list.js"),s=r("./groups/components/groups.vue"),n=r.n(s),i=r("./groups/components/group_folder.vue"),a=r.n(i),u=r("./groups/components/group_item.vue"),l=r.n(u),p=r("./groups/stores/groups_store.js"),d=r("./groups/services/groups_service.js"),c=r("./groups/event_hub.js");document.addEventListener("DOMContentLoaded",function(){var r=document.getElementById("dashboard-group-app");r&&(t.default.component("groups-component",n.a),t.default.component("group-folder",a.a),t.default.component("group-item",l.a),new t.default({el:r,data:function(){return this.store=new p.a,this.service=new d.a(r.dataset.endpoint),{store:this.store,isLoading:!0,state:this.store.state,loading:!0}},computed:{isEmpty:function(){return 0===Object.keys(this.state.groups).length}},methods:{fetchGroups:function(e){var t=this,r=null,o=null,s=null,n=null,i=null,a=null,u=null,l=null;return e?r=e.id:this.isLoading=!0,i=gl.utils.getParameterByName("page"),i&&(s=i),l=gl.utils.getParameterByName("filter_groups"),l&&(u=l),a=gl.utils.getParameterByName("sort"),a&&(n=a),o=this.service.getGroups(r,s,u,n),o.then(function(e){return e.json()}).then(function(r){t.isLoading=!1,t.updateGroups(r,e)}).catch(this.handleErrorResponse),o},fetchPage:function(t,r,o){var s=this;return this.isLoading=!0,this.service.getGroups(null,t,r,o).then(function(r){s.isLoading=!1,e.scrollTo(0);var o=gl.utils.mergeUrlParams({page:t},window.location.href);window.history.replaceState({page:o},document.title,o),s.updateGroups(r.json()),s.updatePagination(r.headers)}).catch(this.handleErrorResponse)},toggleSubGroups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.isOpen||(this.store.resetGroups(e),this.fetchGroups(e)),this.store.toggleSubGroups(e)},leaveGroup:function(t,r){var o=this;this.service.leaveGroup(t.leavePath).then(function(s){e.scrollTo(0),o.store.removeGroup(t,r),new Flash(s.json().notice,"notice")}).catch(function(e){var t="An error occurred. Please try again.";403===e.status&&(t="Failed to leave the group. Please make sure you are not the only owner"),new Flash(t)})},updateGroups:function(e,t){this.store.setGroups(e,t)},updatePagination:function(e){this.store.storePagination(e)},handleErrorResponse:function(){this.isLoading=!1,e.scrollTo(0),new Flash("An error occurred. Please try again.")}},created:function(){c.a.$on("fetchPage",this.fetchPage),c.a.$on("toggleSubGroups",this.toggleSubGroups),c.a.$on("leaveGroup",this.leaveGroup),c.a.$on("updateGroups",this.updateGroups),c.a.$on("updatePagination",this.updatePagination)},beforeMount:function(){var e=null,t=document.querySelector("form#group-filter-form"),s=document.querySelector(".js-groups-list-filter"),n=document.querySelector(".js-groups-list-holder"),i={form:t,filter:s,holder:n,filterEndpoint:r.dataset.endpoint,pagePath:r.dataset.path};e=new o.a(i),e.initSearch()},mounted:function(){var e=this;this.fetchGroups().then(function(t){e.updatePagination(t.headers),e.isLoading=!1}).catch(this.handleErrorResponse)},beforeDestroy:function(){c.a.$off("fetchPage",this.fetchPage),c.a.$off("toggleSubGroups",this.toggleSubGroups),c.a.$off("leaveGroup",this.leaveGroup),c.a.$off("updateGroups",this.updateGroups),c.a.$off("updatePagination",this.updatePagination)}}))})}.call(t,r("../../../node_modules/jquery/dist/jquery.js"))},"./groups/services/groups_service.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=r("../../../node_modules/vue/dist/vue.esm.js"),n=r("../../../node_modules/vue-resource/dist/vue-resource.common.js"),i=r.n(n),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();s.default.use(i.a);var u=function(){function e(t){o(this,e),this.groups=s.default.resource(t)}return a(e,[{key:"getGroups",value:function(e,t,r,o){var s={};return e?s.parent_id=e:(t&&(s.page=t),r&&(s.filter_groups=r),o&&(s.sort=o)),this.groups.get(s)}},{key:"leaveGroup",value:function(e){return s.default.http.delete(e)}}]),e}();t.a=u},"./groups/stores/groups_store.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=r("../../../node_modules/vue/dist/vue.esm.js"),n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=function(){function e(){o(this,e),this.state={},this.state.groups={},this.state.pageInfo={}}return n(e,[{key:"setGroups",value:function(e,t){var r=t,o=this.buildTree(e,r);return r?r.subGroups=o:this.state.groups=o,o}},{key:"resetGroups",value:function(e){e.subGroups={}}},{key:"storePagination",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=void 0;if(Object.keys(e).length){var r=gl.utils.normalizeHeaders(e);t=gl.utils.parseIntPagination(r)}else t=e;this.state.pageInfo=t}},{key:"buildTree",value:function(e,t){var r=this.decorateGroups(e),o={},s={},n=[];return r.map(function(e){return s["id"+e.id]=e,s["id"+e.id].subGroups={},e}),Object.keys(s).map(function(e){var r=s[e];if(r.parentId){s["id"+r.parentId]?(s["id"+r.parentId].subGroups["id"+r.id]=r,s["id"+r.parentId].isOpen=!0):t&&t.id===r.parentId?o["id"+r.id]=r:(n.push(r),o["id"+r.id]=r)}else o["id"+r.id]=r;return e}),n.length&&n.map(function(e){var t=!1,r=e;return Object.keys(o).map(function(e){var s=o[e];return s&&0===r.fullPath.lastIndexOf(s.fullPath)&&r.id!==s.id&&(s.subGroups[r.id]=r,s.isOpen=!0,r.isOrphan=!0,t=!0,o["id"+r.id]&&delete o["id"+r.id]),e}),t||(r.isOrphan=!0,o["id"+r.id]=r),e}),o}},{key:"decorateGroups",value:function(e){return this.groups=e.map(this.decorateGroup),this.groups}},{key:"decorateGroup",value:function(e){return{id:e.id,fullName:e.full_name,fullPath:e.full_path,avatarUrl:e.avatar_url,name:e.name,hasSubgroups:e.has_subgroups,canEdit:e.can_edit,description:e.description,webUrl:e.web_url,parentId:e.parent_id,visibility:e.visibility,leavePath:e.leave_path,editPath:e.edit_path,isOpen:!1,isOrphan:!1,numberProjects:e.number_projects_with_delimiter,numberUsers:e.number_users_with_delimiter,permissions:{humanGroupAccess:e.permissions.human_group_access},subGroups:{}}}},{key:"removeGroup",value:function(e,t){s.default.delete(t,"id"+e.id)}},{key:"toggleSubGroups",value:function(e){var t=e;return t.isOpen=!t.isOpen,t}}]),e}();t.a=i}},["./groups/index.js"]);
//# sourceMappingURL=groups.8687b47d7df0a1080b65.bundle.js.map