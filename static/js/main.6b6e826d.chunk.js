(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{101:function(t,e,a){t.exports=a(131)},106:function(t,e,a){},107:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),i=a.n(o);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var c,l,s=a(174),d=a(175),u=a(176),f=a(167),m=a(133),p=a(170),b=a(178),v=a(179),h=a(177),k=a(17),g=a(28),E=a(20),j=a.n(E),C=a(30),O=a(82),y=a.n(O).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}})),T=function(){return y.get("todo-lists")},I=function(t){return y.post("todo-lists",{title:t})},w=function(t){return y.delete("todo-lists/".concat(t))},x=function(t,e){return y.put("todo-lists/".concat(t),{title:e})},A=function(t){return y.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return y.delete("todo-lists/".concat(t,"/tasks/").concat(e))},F=function(t,e){return y.post("todo-lists/".concat(t,"/tasks"),{title:e})},L=function(t,e,a){return y.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},P=function(t){return y.post("auth/login",t)},z=function(){return y.delete("auth/login")},N=function(){return y.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var D=function(t,e){t.messages.length?e(K({error:t.messages[0]})):e(K({error:"Some error occurred"})),e(V({status:"failed"}))},M=function(t,e){e(K({error:t.message?t.message:"Some error occurred"})),e(V({status:"failed"}))},q=a(19),B=Object(q.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),H=B.reducer,R=B.actions.setIsLoggedInAC,U=Object(q.c)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),W=U.reducer,J=U.actions,K=J.setAppErrorAC,V=J.setAppStatusAC,Y=J.setAppInitializedAC,$=Object(q.b)("todolists/fetchTodolists",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),t.prev=2,t.next=5,T();case 5:r=t.sent,n(it({todolists:r.data})),n(V({status:"succeeded"})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),M(t.t0,n);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()),_=Object(q.b)("todolists/removeTodolist",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),n(ot({id:e,status:"loading"})),t.prev=3,t.next=6,w(e);case 6:n(et({id:e})),n(V({status:"succeeded"})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),M(t.t0,n);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,a){return t.apply(this,arguments)}}()),G=Object(q.b)("todolists/addTodolist",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),t.prev=2,t.next=5,I(e);case 5:r=t.sent,n(at({todolist:r.data.data.item})),n(V({status:"succeeded"})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),M(t.t0,n);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()),Q=Object(q.b)("todolists/changeTodolistTitle",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),t.prev=2,t.next=5,x(e.id,e.title);case 5:n(nt({id:e.id,title:e.title})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),M(t.t0,n);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,a){return t.apply(this,arguments)}}()),X=Object(q.c)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(g.a)(Object(g.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),Z=X.reducer,tt=X.actions,et=tt.removeTodolistAC,at=tt.addTodolistAC,nt=tt.changeTodolistTitleAC,rt=tt.changeTodolistFilterAC,ot=tt.changeTodolistEntityStatusAC,it=tt.setTodolistsAC,ct=Object(q.b)("tasks/fetchTasks",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),t.prev=2,t.next=5,A(e);case 5:return r=t.sent,o=r.data.items,n(V({status:"succeeded"})),t.abrupt("return",{tasks:o,todolistId:e});case 11:t.prev=11,t.t0=t.catch(2),M(t.t0,n);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,a){return t.apply(this,arguments)}}()),lt=Object(q.b)("tasks/removeTask",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,t.prev=1,t.next=4,S(e.todolistId,e.id);case 4:n(pt({taskId:e.id,todolistId:e.todolistId})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),M(t.t0,n);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,a){return t.apply(this,arguments)}}()),st=Object(q.b)("tasks/addTask",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(V({status:"loading"})),t.prev=2,t.next=5,F(e.todolistId,e.title);case 5:0===(r=t.sent).data.resultCode?(o=r.data.data.item,n(bt(o)),n(V({status:"succeeded"}))):D(r.data,n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),D(t.t0,n);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,a){return t.apply(this,arguments)}}()),dt=Object(q.b)("tasks/updateTask",function(){var t=Object(C.a)(j.a.mark((function t(e,a){var n,r,o,i,c,l,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.getState,o=a.rejectWithValue,i=r(),c=i.tasks[e.todolistId].find((function(t){return t.id===e.id}))){t.next=5;break}return t.abrupt("return",o("task not found in the state"));case 5:return l=Object(g.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e.model),t.next=8,L(e.todolistId,e.id,l);case 8:s=t.sent;try{0===s.data.resultCode?n(vt({taskId:e.id,model:e.model,todolistId:e.todolistId})):D(s.data,n)}catch(d){M(d,n)}case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),ut=Object(q.c)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.todoListId].unshift(e.payload)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(g.a)(Object(g.a)({},a[n]),e.payload.model))}},extraReducers:function(t){t.addCase(at,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(et,(function(t,e){delete t[e.payload.id]})),t.addCase(it,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})),t.addCase(ct.fulfilled,(function(t,e){e.payload&&(t[e.payload.todolistId]=e.payload.tasks)}))}}),ft=ut.reducer,mt=ut.actions,pt=mt.removeTaskAC,bt=mt.addTaskAC,vt=mt.updateTaskAC,ht=a(171),kt=a(132),gt=a(47),Et=a(180),jt=a(168),Ct=r.a.memo((function(t){var e=t.addItem,a=t.disabled,o=void 0!==a&&a;console.log("AddItemForm called");var i=Object(n.useState)(""),c=Object(gt.a)(i,2),l=c[0],s=c[1],d=Object(n.useState)(null),u=Object(gt.a)(d,2),m=u[0],p=u[1],b=function(){""!==l.trim()?(e(l),s("")):p("Title is required")};return r.a.createElement("div",null,r.a.createElement(Et.a,{variant:"outlined",disabled:o,error:!!m,value:l,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==m&&p(null),13===t.charCode&&b()},label:"Title",helperText:m}),r.a.createElement(f.a,{color:"primary",onClick:b,disabled:o},r.a.createElement(jt.a,null)))})),Ot=a(89),yt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(gt.a)(e,2),o=a[0],i=a[1],c=Object(n.useState)(t.value),l=Object(gt.a)(c,2),s=l[0],d=l[1];return o?r.a.createElement(Et.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):r.a.createElement("span",{onDoubleClick:function(){i(!0),d(t.value)}},t.value)})),Tt=a(169),It=a(182),wt=r.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?c.Completed:c.New,t.todolistId)}),[t.task.id,t.todolistId]),o=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":""},r.a.createElement(It.a,{checked:t.task.status===c.Completed,color:"primary",onChange:a}),r.a.createElement(yt,{value:t.task.title,onChange:o}),r.a.createElement(f.a,{onClick:e},r.a.createElement(Tt.a,null)))})),xt=r.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,o=Object(Ot.a)(t,["demo"]);console.log("Todolist called");var i=Object(k.b)();Object(n.useEffect)((function(){if(!a){var t=ct(o.todolist.id);i(t)}}),[]);var l=Object(n.useCallback)((function(t){o.addTask(t,o.todolist.id)}),[o.addTask,o.todolist.id]),s=Object(n.useCallback)((function(t){o.changeTodolistTitle(o.todolist.id,t)}),[o.todolist.id,o.changeTodolistTitle]),d=Object(n.useCallback)((function(){return o.changeFilter("all",o.todolist.id)}),[o.todolist.id,o.changeFilter]),u=Object(n.useCallback)((function(){return o.changeFilter("active",o.todolist.id)}),[o.todolist.id,o.changeFilter]),m=Object(n.useCallback)((function(){return o.changeFilter("completed",o.todolist.id)}),[o.todolist.id,o.changeFilter]),b=o.tasks;return"active"===o.todolist.filter&&(b=o.tasks.filter((function(t){return t.status===c.New}))),"completed"===o.todolist.filter&&(b=o.tasks.filter((function(t){return t.status===c.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(yt,{value:o.todolist.title,onChange:s}),r.a.createElement(f.a,{onClick:function(){o.removeTodolist(o.todolist.id)},disabled:"loading"===o.todolist.entityStatus},r.a.createElement(Tt.a,null))),r.a.createElement(Ct,{addItem:l,disabled:"loading"===o.todolist.entityStatus}),r.a.createElement("div",null,b.map((function(t){return r.a.createElement(wt,{key:t.id,task:t,todolistId:o.todolist.id,removeTask:o.removeTask,changeTaskTitle:o.changeTaskTitle,changeTaskStatus:o.changeTaskStatus})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(p.a,{variant:"all"===o.todolist.filter?"outlined":"text",onClick:d,color:"default"},"All"),r.a.createElement(p.a,{variant:"active"===o.todolist.filter?"outlined":"text",onClick:u,color:"primary"},"Active"),r.a.createElement(p.a,{variant:"completed"===o.todolist.filter?"outlined":"text",onClick:m,color:"secondary"},"Completed")))})),At=a(13),St=function(t){var e=t.demo,a=void 0!==e&&e,o=Object(k.c)((function(t){return t.todolists})),i=Object(k.c)((function(t){return t.tasks})),c=Object(k.c)((function(t){return t.auth.isLoggedIn})),l=Object(k.b)();Object(n.useEffect)((function(){if(!a&&c){var t=$();l(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=lt({id:t,todolistId:e});l(a)}),[]),d=Object(n.useCallback)((function(t,e){var a=st({title:t,todolistId:e});l(a)}),[]),u=Object(n.useCallback)((function(t,e,a){var n=dt({id:t,model:{status:e},todolistId:a});l(n)}),[]),f=Object(n.useCallback)((function(t,e,a){var n=dt({id:t,model:{title:e},todolistId:a});l(n)}),[]),m=Object(n.useCallback)((function(t,e){var a=rt({id:e,filter:t});l(a)}),[]),p=Object(n.useCallback)((function(t){var e=_(t);l(e)}),[]),b=Object(n.useCallback)((function(t,e){var a=Q({id:t,title:e});l(a)}),[]),v=Object(n.useCallback)((function(t){var e=G(t);l(e)}),[l]);return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ht.a,{container:!0,style:{padding:"20px"}},r.a.createElement(Ct,{addItem:v})),r.a.createElement(ht.a,{container:!0,spacing:3},o.map((function(t){var e=i[t.id];return r.a.createElement(ht.a,{item:!0,key:t.id},r.a.createElement(kt.a,{style:{padding:"10px"}},r.a.createElement(xt,{todolist:t,tasks:e,removeTask:s,changeFilter:m,addTask:d,changeTaskStatus:u,removeTodolist:p,changeTaskTitle:f,changeTodolistTitle:b,demo:a})))})))):r.a.createElement(At.a,{to:"/login"})},Ft=a(184),Lt=a(181);function Pt(t){return r.a.createElement(Lt.a,Object.assign({elevation:6,variant:"filled"},t))}function zt(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),a=function(t,a){"clickaway"!==a&&e(K({error:null}))},n=null!==t;return r.a.createElement(Ft.a,{open:n,autoHideDuration:6e3,onClose:a},r.a.createElement(Pt,{onClose:a,severity:"error"},t))}var Nt=a(185),Dt=a(166),Mt=a(172),qt=a(173),Bt=a(88),Ht=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.auth.isLoggedIn})),a=Object(Bt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(V({status:"loading"})),P(a).then((function(e){0===e.data.resultCode?(t(R({value:!0})),t(V({status:"succeeded"}))):D(e.data,t)})).catch((function(e){M(e,t)}))}))}});return e?r.a.createElement(At.a,{to:"/"}):r.a.createElement(ht.a,{container:!0,justify:"center"},r.a.createElement(ht.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Nt.a,null,r.a.createElement(Dt.a,null,r.a.createElement("p",null,"To log in get registered ",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null," Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Mt.a,null,r.a.createElement(Et.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?r.a.createElement("div",null,a.errors.email):null,r.a.createElement(Et.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?r.a.createElement("div",null,a.errors.password):null,r.a.createElement(qt.a,{label:"Remember me",control:r.a.createElement(It.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Rt=function(t){var e=t.demo,a=void 0!==e&&e,o=Object(k.c)((function(t){return t.app.status})),i=Object(k.c)((function(t){return t.app.isInitialized})),c=Object(k.c)((function(t){return t.auth.isLoggedIn})),l=Object(k.b)();Object(n.useEffect)((function(){a||l((function(t){N().then((function(e){0===e.data.resultCode&&t(R({value:!0})),t(Y({isInitialized:!0}))}))}))}),[]);var g=Object(n.useCallback)((function(){l((function(t){t(V({status:"loading"})),z().then((function(e){0===e.data.resultCode?(t(R({value:!1})),t(V({status:"succeeded"}))):D(e.data,t)})).catch((function(e){M(e,t)}))}))}),[]);return i?r.a.createElement("div",{className:"App"},r.a.createElement(zt,null),r.a.createElement(d.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(h.a,null)),r.a.createElement(m.a,{variant:"h6"},"News"),c&&r.a.createElement(p.a,{color:"inherit",onClick:g},"Log out")),"loading"===o&&r.a.createElement(b.a,null)),r.a.createElement(v.a,{fixed:!0},r.a.createElement(At.b,{exact:!0,path:"/",render:function(){return r.a.createElement(St,{demo:a})}}),r.a.createElement(At.b,{path:"/login",render:function(){return r.a.createElement(Ht,null)}}))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(s.a,null))},Ut=a(24),Wt=a(50),Jt=Object(Ut.c)({tasks:ft,todolists:Z,app:W,auth:H}),Kt=Object(q.a)({reducer:Jt,middleware:function(t){return t().prepend(Wt.a)}});window.store=Kt;var Vt=a(49);i.a.render(r.a.createElement(k.a,{store:Kt},r.a.createElement(Vt.a,null,r.a.createElement(Rt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.6b6e826d.chunk.js.map