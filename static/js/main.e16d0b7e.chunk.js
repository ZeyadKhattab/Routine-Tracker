(this.webpackJsonpreactcourse=this.webpackJsonpreactcourse||[]).push([[0],{108:function(e,t,a){e.exports=a(178)},113:function(e,t,a){},114:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),l=(a(113),a(9)),c=a(10),u=a(12),s=a(11),m=(a(114),a(115),a(50)),h=a(54),d=a(13),f=a(58),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={doneButton:!1},e.routinePercentage=function(e){var t=e.getTimesShouldDone();return 0===t?0:Math.round(100*e.numTimesDone()/t)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.doneButton&&this.setState({doneButton:!0})}},{key:"render",value:function(){var e=this.props.routine,t=this.props.zoom;return r.a.createElement(h.a,{bg:"info",style:p,className:"text-center"},r.a.createElement(h.a.Img,{variant:"top",src:e.imageLink}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,r.a.createElement(f.b,{style:{color:"black"},to:"/routines/".concat(e.name)},e.name)),t&&r.a.createElement(h.a.Text,null,"".concat(e.numTimesDone(),"/").concat(e.getTimesShouldDone()),r.a.createElement("br",null),"".concat(this.routinePercentage(e),"%"),r.a.createElement("br",null),"".concat(e.getTotalTimeSpent()," Minutes Spent")),this.state.doneButton&&r.a.createElement(d.a,{variant:"danger",onClick:this.props.markRoutineAsDone.bind(this,e.name)},"Mark as Done"),!t&&r.a.createElement(d.a,{variant:"success"},r.a.createElement(f.b,{style:{color:"black"},to:"/routines/".concat(e.name)},"See More"))))}}]),a}(r.a.Component),p={width:"250px",margin:"10px",borderRadius:"8px",border:"2px solid"},y=a(14),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=(e=new Date(e.getTime()-144e5)).getDay()-1;return t<0&&(t+=7),t},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date((new Date).getTime()-144e5);return e.getDate()-1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date((new Date).getTime()-144e5);return e.getMonth()},O=function(e,t,a){for(var n=[],r=0;r<e;r++){for(var o=[],i=0;i<t;i++)o.push(a);n.push(o)}return n},w=function(e,t){return localStorage.setItem(e,t)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2020;return new Date(t,e+1,0).getDate()},k=function(e,t){for(var a=new Date(2020,e,t+1),n=[];a=new Date(a.getTime()+864e5),0!==E(a);)n.push([b(a),g(a)]);for(n.reverse(),a=new Date(2020,e,t+1);n.push([b(a),g(a)]),0!==E(a);)a=new Date(a.getTime()-864e5);return n.reverse(),n},j=function e(t,a){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[!1,!1,!1,!1,!1,!1,!1],o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",c=arguments.length>5?arguments[5]:void 0;Object(l.a)(this,e),this.toggle=function(){var e=b(),t=g();n.done[e][t]=!n.done[e][t]},this.markDone=function(e,t){var a=b(),r=g();n.done[a][r]=!0,n.info[a][r]=e,n.timeNeeded[a][r]=t;var o=new Date;n.touchTime[a][r]=[o.getHours(),o.getMinutes()]},this.todayStatus=function(){var e=b(),t=g(),a=E();return n.days[a]&&n.active[e][t]?n.done[e][t]?1:-1:0},this.numTimesDone=function(){for(var e=0,t=0;t<12;t++)for(var a=0;a<31;a++)e+=n.done[t][a]?1:0;return e},this.getStartTime=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.touchTime[e][t],o=r[0],i=r[1],l=60*o+i,c=l-n.timeNeeded[e][t];return c<0&&(c+=1440),a&&c<240&&(c+=1440),c},this.getDuration=function(e,t){var a=n.getStartTime(e,t);return"".concat(Math.floor(a/60),":").concat(a%60," - ").concat(n.touchTime[e][t][0],":").concat(n.touchTime[e][t][1])},this.getTimesShouldDone=function(){for(var e=0,t=0;t<12;t++)for(var a=0;a<31;a++){var r=new Date(2020,t,a+1);if(r>new Date)break;r=new Date(2020,t,a+2),n.active[t][a]&&n.days[E(r)]&&e++}return e},this.getTotalTimeSpent=function(){for(var e=0,t=0;t<12;t++)for(var a=0;a<31;a++)e+=parseInt(n.timeNeeded[t][a]);return e},this.name=t,this.type=a,this.days=r,this.estimation=o,this.imageLink=i,this.tag=c,this.done=O(12,31,!1),this.info=O(12,31,""),this.active=O(12,31,!1),this.timeNeeded=O(12,31,0),this.touchTime=O(12,31,[0,0]);for(var u=b(),s=g(),m=u;m<12;m++)for(var h=m===u?s:0;h<D(m);h++)this.active[m][h]=!0},C=function(){return null===localStorage.getItem("routines")?[]:JSON.parse((e="routines",localStorage.getItem(e))).map((function(e){return Object.assign(new j,e)}));var e},M=C(),S=function(e){var t,a=Object(y.a)(M);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.name===e)return n}}catch(r){a.e(r)}finally{a.f()}},T=function(e,t,a,n,r){var o=new j(e,t,a,n,r);M.push(o),w("routines",JSON.stringify(M))},x=function(e,t,a){S(e).markDone(t,a),w("routines",JSON.stringify(M))},N=function(e){var t,a=b(),n=g(),r=Object(y.a)(M);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(o.name===e)for(var i=a;i<12;i++)for(var l=i===a?n:0;l<31;l++)o.active[i][l]=!1}}catch(c){r.e(c)}finally{r.f()}w("routines",JSON.stringify(M))},A=function(e){var t,a=b(),n=g(),r=Object(y.a)(M);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(o.name===e)for(var i=a;i<12;i++)for(var l=i===a?n:0;l<31;l++)o.active[i][l]=!0}}catch(c){r.e(c)}finally{r.f()}w("routines",JSON.stringify(M))},B=function(e){for(var t=0;t<M.length;t++)if(M[t].name===e){M.splice(t,1);break}w("routines",JSON.stringify(M))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g(),a=E(new Date(2020,e,t+2));return M.filter((function(n){return n.active[e][t]&&n.days[a]}))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M;if(0===a)return F().filter((function(a){return a.done[e][t]})).length/n.length*100;if(1===a){var r,o=k(e,t),i=0,l=0,c=Object(y.a)(n);try{for(c.s();!(r=c.n()).done;)for(var u=r.value,s=0;s<7;s++){var m=o[s];u.active[m[0]][m[1]]&&u.days[s]&&(l++,i+=u.done[m[0]][m[1]]?1:0)}}catch(j){c.e(j)}finally{c.f()}return i/l*100}if(2===a){var h,d=0,f=0,v=Object(y.a)(n);try{for(v.s();!(h=v.n()).done;)for(var p=h.value,O=0;O<31;O++){var w=new Date(2020,e,O+1),D=E(w)+1;7===D&&(D=0),p.active[e][O]&&p.days[D]&&(f++,d+=p.done[e][O]?1:0)}}catch(j){v.e(j)}finally{v.f()}return d/f*100}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M;if(0===a){var r,o=0,i=Object(y.a)(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;o+=parseInt(l.timeNeeded[e][t])}}catch(j){i.e(j)}finally{i.f()}return o}if(1===a){for(var c=new Date(2020,e,t+1),u=0;c=new Date(c.getTime()+864e5),0!==E(c);){var s,m=Object(y.a)(M);try{for(m.s();!(s=m.n()).done;){var h=s.value;u+=parseInt(h.timeNeeded[b(c)][g(c)])}}catch(j){m.e(j)}finally{m.f()}}for(c=new Date(2020,e,t+1);;){var d,f=Object(y.a)(M);try{for(f.s();!(d=f.n()).done;){var v=d.value;u+=parseInt(v.timeNeeded[b(c)][g(c)])}}catch(j){f.e(j)}finally{f.f()}if(0===E(c))break;c=new Date(c.getTime()-864e5)}return u}if(2===a){for(var p=0,O=0;O<31;O++){var w,D=Object(y.a)(M);try{for(D.s();!(w=D.n()).done;){var k=w.value;p+=parseInt(k.timeNeeded[e][O])}}catch(j){D.e(j)}finally{D.f()}}return p}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M;if(0===a){var r,o=0,i=Object(y.a)(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;o+=l.done[e][t]?1:0}}catch(j){i.e(j)}finally{i.f()}return o}if(1===a){var c,u=0,s=k(e,t),m=Object(y.a)(n);try{for(m.s();!(c=m.n()).done;){var h,d=c.value,f=Object(y.a)(s);try{for(f.s();!(h=f.n()).done;){var v=h.value;u+=d.done[v[0]][v[1]]?1:0}}catch(j){f.e(j)}finally{f.f()}}}catch(j){m.e(j)}finally{m.f()}return u}if(2===a){for(var p=0,E=0;E<31;E++){var O,w=Object(y.a)(n);try{for(w.s();!(O=w.n()).done;){var D=O.value;p+=D.done[e][E]?1:0}}catch(j){w.e(j)}finally{w.f()}}return p}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g(),a=new Date(2020,e,t+1),n=a.getDay()-1;return n<0&&(n+=7),M.filter((function(a){return a.active[e][t]&&a.days[n]}))},P=a(52),G=a(22),H=a(68),Y=a.n(H),J=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={routines:[],showModal:!1,month:b(),dayOfMonth:g()},e.Modal=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{show:e.state.showModal,onHide:function(){e.setState({showModal:!1,routineDoneName:""})},animation:!1},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,null,"Congrats")),r.a.createElement(P.a.Body,null,r.a.createElement(G.a,{id:"modalForm"},r.a.createElement(G.a.Group,{controlId:"time"},r.a.createElement(G.a.Label,null,"Time"),r.a.createElement(G.a.Control,{type:"number",placeholder:"Time in Minutes",name:"time",defaultValue:S(e.state.routineDoneName).estimation})),r.a.createElement(G.a.Group,{controlId:"comment"},r.a.createElement(G.a.Label,null,"Comment"),r.a.createElement(G.a.Control,{type:"text",placeholder:"Enter A comment",name:"comment"})))),r.a.createElement(P.a.Footer,null,r.a.createElement(d.a,{variant:"primary",onClick:function(t){var a=document.getElementById("modalForm"),n=a.time.value,r=a.comment.value,o=b(),i=g();x(e.state.routineDoneName,r,n),e.setState({routines:F().filter((function(e){return!e.done[o][i]})),showModal:!1}),e.props.updateParent()}},"Mark as Done"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1,routineDoneName:""})}},"Cancel"))))},e.markRoutineAsDone=function(t){e.setState({showModal:!0}),e.setState({routineDoneName:t})},e.updateDate=function(t){var a=t.getMonth(),n=t.getDate()-1;e.setState({month:t.getMonth(),dayOfMonth:t.getDate()-1,routines:F(a,n).filter((function(e){return!e.done[a][n]}))})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.month,t=this.state.dayOfMonth;this.setState({routines:F(e,t).filter((function(a){return!a.done[e][t]}))})}},{key:"render",value:function(){var e=this,t=this.state.routines;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{updateDate:this.updateDate}),r.a.createElement("div",{style:q},t.map((function(t){return r.a.createElement(v,{routine:t,markRoutineAsDone:e.markRoutineAsDone,doneButton:!0})}))),this.state.showModal&&this.Modal())}}]),a}(r.a.Component),q={display:"flex",flexWrap:"wrap"};function z(e){var t=Object(n.useState)(new Date),a=Object(m.a)(t,2),o=a[0],i=a[1];return r.a.createElement(Y.a,{selected:o,onChange:function(t){i(t),e.updateDate(t)}})}var V=a(19),U=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).getGraph=function(e,t,a){var n,o=[["Task","Minutes"]],i=Object(y.a)(e);try{for(i.s();!(n=i.n()).done;){var l=n.value;o.push([l.name,parseInt(l.timeNeeded[t][a])])}}catch(c){i.e(c)}finally{i.f()}return r.a.createElement(V.a,{width:"600px",height:"400px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:o,options:{title:"Your day Today",backgroundColor:"#546E7A"}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.month?this.props.month:b(),t=this.props.dayOfMonth?this.props.month:g();return this.getGraph(C(),e,t)}}]),a}(r.a.Component),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this);var r=e.month?e.month:b(),o=e.dayOfMonth?e.dayOfMonth:g();return n.state={month:r,dayOfMonth:o},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.routines,t=0|this.props.state,a=this.props.showMetric?this.props.showMetric:L,n=a===L?"Minutes Spent":"Routines Done",o=[["Day",n]];if(2===t)for(var i=0;i<=this.state.month;i++)o.push(["Month ".concat(i+1),a(i,-1,t,e)]);else for(var l=K-1;l>=0;l--){var c=void 0;0===t?c=new Date((new Date).getTime()-864e5*l-144e5):1===t&&(c=new Date((new Date).getTime()-6048e5*l-144e5));var u=c.getMonth(),s=c.getDate()-1;o.push(["".concat(u+1,"/").concat(s+1),a(u,s,t,e)])}return r.a.createElement(V.a,{width:"600px",height:"400px",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:o,options:{hAxis:{title:n}}})}}]),a}(r.a.Component),K=8,Q=a(48),X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this)).getTime=function(e){var t=n.state.month,a=n.state.dayOfMonth,r=e.touchTime[t][a],o=60*r[0]+r[1]-e.timeNeeded[t][a];o<0&&(o+=1440);var i=Math.floor(o/60);return"".concat(i,":").concat(o%60," - ").concat(r[0],":").concat(r[1])};var r=e.month?e.month:b(),o=e.dayOfMonth?e.dayOfMonth:g();return n.state={month:r,dayOfMonth:o,routines:e.routines},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.routines){var t=C().filter((function(t){return t.done[e.state.month][e.state.dayOfMonth]}));t.sort((function(t,a){return t.getStartTime(e.state.month,e.state.dayOfMonth,!0)-a.getStartTime(e.state.month,e.state.dayOfMonth,!0)})),this.setState({routines:t})}}},{key:"render",value:function(){var e=this;return r.a.createElement(Q.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Time Period"),r.a.createElement("th",null,"Routine"),r.a.createElement("th",null,"Comment"))),r.a.createElement("tbody",null,this.state.routines&&this.state.routines.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.getTime(t)),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.info[e.state.month][e.state.dayOfMonth]))}))))}}]),a}(r.a.Component),Z=(a(177),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this)).getData=function(){var e,t=n.state,a=t.month,r=t.dayOfMonth,o=t.monthComp,i=t.dayOfMonthComp,l=[W(a,r),W(o,i)],c=l[0].map((function(e){return e})),u=Object(y.a)(l[1]);try{for(u.s();!(e=u.n()).done;){var s,m=e.value,h=!1,d=Object(y.a)(c);try{for(d.s();!(s=d.n()).done;){s.value.name===m.name&&(h=!0)}}catch(f){d.e(f)}finally{d.f()}h||c.push(m)}}catch(f){u.e(f)}finally{u.f()}return c.map((function(e){return{name:e.name,done1:e.done[a][r],done2:e.done[o][i]}}))},n.update=function(e){n.setState({monthComp:e.getMonth(),dayOfMonthComp:e.getDate()-1})};var r=e.month?e.month:b(),o=e.dayOfMonth?e.dayOfMonth:g(),i=new Date(new Date(2020,r,o+1).getTime()-864e5),c=i.getMonth(),u=i.getDate()-1;return n.state={month:r,dayOfMonth:o,monthComp:c,dayOfMonthComp:u},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.getData();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{update:this.update,monthComp:this.state.monthComp,dayOfMonthComp:this.state.dayOfMonthComp}),r.a.createElement(Q.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Routine"),r.a.createElement("th",null,"".concat(this.state.monthComp+1,"/").concat(this.state.dayOfMonthComp+1)),r.a.createElement("th",null,"Today"))),r.a.createElement("tbody",null,e&&e.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.done2?"YES":"NO"),r.a.createElement("td",null,e.done1?"YES":"NO"))})))))}}]),a}(r.a.Component));function _(e){var t=Object(n.useState)(new Date(2020,e.monthComp,e.dayOfMonthComp+1)),a=Object(m.a)(t,2),o=a[0],i=a[1];return r.a.createElement(Y.a,{selected:o,onChange:function(t){t>=new Date?alert("You are trying to compare with a date in the future"):(i(t),e.update(t))}})}var ee=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={routines:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=b(),t=g();this.setState({routines:F(e,t).filter((function(a){return a.done[e][t]}))})}},{key:"summary",value:function(){return 0===this.state.routines.length?r.a.createElement("h1",null,"Nothing Done Yet"):r.a.createElement("div",{style:{flexGrow:"1",height:"100vh"}},r.a.createElement(U,null),r.a.createElement(X,null))}},{key:"render",value:function(){return r.a.createElement("div",{style:te},this.summary(),r.a.createElement("div",{style:{flexGrow:"1",height:"100vh"}},r.a.createElement($,null),r.a.createElement(Z,null)))}}]),a}(r.a.Component),te={display:"flex",flexWrap:"wrap",width:"100%"},ae=a(38),ne=a(107),re=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todo:!0},e.update=function(){e.setState(e.state)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ae.a,{"aria-label":"Basic example"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({todo:!0})}},"To Do"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({todo:!1})}},"Done")),r.a.createElement(ne.a,{striped:!0,variant:"success",now:I(),label:"".concat(I(),"%")}),this.state.todo&&r.a.createElement(J,{updateParent:this.update}),!this.state.todo&&r.a.createElement(ee,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(39),ie=a(92),le=a(53),ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clickWeekend=function(e){for(var t=document.querySelectorAll(".day-item"),a=0;a<7;a++)t[a].checked=a>=5},e.clickAll=function(e){document.querySelectorAll(".day-item").forEach((function(e){return e.checked=!0}))},e.handleSubmit=function(e){var t,a=e.target.parentElement,n=a.routineName.value,r=a.type.value,o=a.url.value,i=a.time.value,l=[],c=document.querySelectorAll(".day-item"),u=Object(y.a)(c);try{for(u.s();!(t=u.n()).done;){var s=t.value;l.push(s.checked)}}catch(m){u.e(m)}finally{u.f()}T(n,r,l,i,o)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(G.a,{style:{margin:"10px"}},r.a.createElement(G.a.Group,{controlId:"formBasicEmail"},r.a.createElement(G.a.Label,null,"Routine Name"),r.a.createElement(G.a.Control,{type:"text",placeholder:"Enter Routine Name",name:"routineName"})),r.a.createElement("input",{type:"radio",name:"type",value:"Daily",onClick:this.clickAll.bind(this)}),"Daily",r.a.createElement("input",{type:"radio",name:"type",value:"Weekly",onClick:this.clickWeekend.bind(this)}),"Weekly",r.a.createElement("ul",{id:"days"},r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:0})," Monday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:1})," Tuesday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:2})," Wednesday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:3})," Thursday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:4})," Friday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:5})," Saturday"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",className:"day-item",value:6})," Sunday")),r.a.createElement("input",{type:"text",name:"time",placeholder:"Time in Minutes"}),r.a.createElement("input",{type:"text",name:"url",placeholder:"Image url"}),r.a.createElement(d.a,{variant:"primary",type:"submit",onClick:this.handleSubmit.bind(this),href:"/logger-react"},"Add Routine"))}}]),a}(r.a.Component),ue=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Help")}}]),a}(r.a.Component),se=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={routines:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({routines:C()})}},{key:"render",value:function(){return r.a.createElement("div",{style:me},this.state.routines.map((function(e){return r.a.createElement(v,{routine:e})})))}}]),a}(r.a.Component),me={display:"flex",flexWrap:"wrap"},he=a(91),de=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.state.show?r.a.createElement(he.a,{variant:this.props.variant,onClose:function(){return e.setState({show:!1})},dismissible:!0},r.a.createElement(he.a.Heading,null,this.props.header)):r.a.createElement(r.a.Fragment,null)}}]),a}(r.a.Component),fe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getData=function(){for(var t=e.props.routine,a=[[{type:"date",id:"Date"},{type:"number",id:"Minutes Spent"}]],n=0;n<12;n++)for(var r=0;r<D(n);r++)t.active[n][r]&&t.days[ve(n,2020,r)]&&a.push([new Date(2020,n,r+1),parseInt(t.timeNeeded[n][r])]);return a},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(V.a,{chartType:"Calendar",loader:r.a.createElement("div",null,"Loading Chart"),data:this.getData(),options:ye})))}}]),a}(r.a.Component),ve=function(e,t,a){return a++,E(new Date(t,e,a+1))},pe=fe,ye={height:350,calendar:{cellColor:{stroke:"#6B8E23",strokeOpacity:.6,strokeWidth:1}},colors:["#FF0000","#00FF00"]},Ee=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).getGraph=function(){for(var t=be(e.props.routine),a=t.x,n=t.y,o=[["Day","Minutes"]],i=0;i<a.length;i++)o.push([a[i],n[i]]);return r.a.createElement(V.a,{width:"600px",height:"400px",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:o,options:{hAxis:{title:"Minutes Spent"}},rootProps:{"data-testid":"1"}})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is how you have been doing in the last ",ge," weeks"),this.getGraph())}}]),a}(r.a.Component),ge=6,be=function(e){for(var t=(new Date).getTime(),a=[],n=[],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=0;o<7;o++){var i=new Date(t),l=i.getMonth(),c=i.getDate()-1;n.push(e.timeNeeded[l][c]);var u=i.getDay();a.push(r[u]),t-=864e5}return{x:a,y:n}},Oe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).activateDeactivateButton=function(){var t=b(),a=g(),n=e.props.routine;return n.active[t][a]?r.a.createElement(d.a,{variant:"warning",onClick:function(e){N(n.name)},href:"/logger-react/routines"},"Deactivate"):r.a.createElement("div",null,r.a.createElement(d.a,{variant:"info",onClick:function(e){A(n.name)},href:"/logger-react//routines"},"Activate"),r.a.createElement(d.a,{variant:"danger",onClick:function(e){B(n.name)},href:"/logger-react//routines"},"Delete"))},e.getStatus=function(){var t=e.props.routine,a=b(),n=g();if(!t.active[a][n])return r.a.createElement("h1",null,"NOT ACTIVE");var o=E();return t.days[o]?t.done[a][n]?r.a.createElement("h1",null,"You did it today in ".concat(t.timeNeeded[a][n]," minutes and info was ").concat(t.info[a][n])," "):r.a.createElement("h1",null,"You still have to do it"):r.a.createElement("h1",null,"NOT SCHEDULED TODAY")},e.statsForRoutine=function(){var t=[e.props.routine];return r.a.createElement("div",null,r.a.createElement(ae.a,{"aria-label":"Basic example"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:0})}},"Daily"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:1})}},"Weekly"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:2})}},"Monthly")),r.a.createElement(ae.a,{"aria-label":"Basic example"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:R})}},"Number Done"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:L})}},"MinutesSpent"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:I})}},"Percentage")),r.a.createElement($,{state:e.state.state,showMetric:e.state.showMetric,routines:t}))},e.state={state:1,showMetric:R},e}return Object(c.a)(a,[{key:"showAlert",value:function(){var e=this.props.routine,t=e.todayStatus();return 1===t?r.a.createElement(de,{variant:"success",header:"Congrats"}):-1===t?r.a.createElement(de,{variant:"danger",header:"".concat(e.name," is scheduled for today")}):void 0}},{key:"render",value:function(){var e=this.props.routine;return r.a.createElement("div",null,this.showAlert(),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},r.a.createElement(v,{routine:e,zoom:!0}),r.a.createElement(pe,{style:{justifyContent:"center"},routine:e})),r.a.createElement("div",{style:De},this.statsForRoutine(),r.a.createElement(Ee,{routine:e}),r.a.createElement(we,{routine:e}),r.a.createElement(ke,{routine:e})),this.activateDeactivateButton())}}]),a}(r.a.Component);function we(e){for(var t=e.routine,a=[],n=new Date,o=E();a.length<7;o=(o+6)%7)t.days[o]&&a.push(n),n=new Date(n.getTime()-864e5);return r.a.createElement(Q.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time Period"),r.a.createElement("th",null,"Comment"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.toDateString()),r.a.createElement("td",null,t.done[b(e)][g(e)]?t.getDuration(b(e),g(e)):"NO"),r.a.createElement("td",null,t.info[b(e)][g(e)]))}))))}var De={display:"grid",gridTemplateColumns:"1fr 1fr"};function ke(e){for(var t=e.routine,a=new Map,n=0;n<12;n++)for(var o=0;o<31;o++)if(""!==t.info[n][o]){var i=t.info[n][o],l=a.has(i)?a.get(i):0;l++,a.set(i,l)}var c,u=[["Comment","# of Times"]],s=Object(y.a)(a);try{for(s.s();!(c=s.n()).done;){var h=Object(m.a)(c.value,2),d=h[0],f=h[1];u.push([d,f])}}catch(v){s.e(v)}finally{s.f()}return 1===u.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(V.a,{width:"600px",height:"400px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:u,options:{title:"Your Comments",backgroundColor:"#546E7A"}})}var je=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={state:1,showMetric:R},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ae.a,{"aria-label":"Basic example"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:0})}},"Daily"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:1})}},"Weekly"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({state:2})}},"Monthly")),r.a.createElement(ae.a,{"aria-label":"Basic example"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:R})}},"Number Done"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:L})}},"MinutesSpent"),r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.setState({showMetric:I})}},"Percentage")),r.a.createElement($,{state:this.state.state,showMetric:this.state.showMetric}),r.a.createElement(Ce,null),r.a.createElement(Me,{showMetric:this.state.showMetric}))}}]),a}(r.a.Component);function Ce(){var e=C();e.sort((function(e,t){return t.numTimesDone()-e.numTimesDone()}));var t,a=[["Routine","Number of times does"]],n=Object(y.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value,i=o.numTimesDone();i>0&&a.push([o.name,i])}}catch(l){n.e(l)}finally{n.f()}return r.a.createElement(V.a,{width:"600px",height:"400px",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:a,options:{hAxis:{title:"Top Routines"}}})}function Me(e){for(var t=[[{type:"date",id:"Date"},{type:"number",id:"Number of times done"}]],a=0;a<12;a++)for(var n=0;n<D(a,2020);n++)t.push([new Date(2020,a,n+1),e.showMetric(a,n)]);return r.a.createElement(V.a,{chartType:"Calendar",loader:r.a.createElement("div",null,"Loading Chart"),data:t,options:{title:"Heat Map",height:350,calendar:{cellColor:{stroke:"#6B8E23",strokeOpacity:.6,strokeWidth:1}},colors:["#FF0000","#00FF00"]}})}function Se(){var e=Object(oe.f)().routineName;return r.a.createElement(Oe,{routine:S(e)})}i.a.render(r.a.createElement(f.a,{basename:"/logger-react"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie.a,{bg:"primary",variant:"dark"},r.a.createElement(ie.a.Brand,{href:"/logger-react"},"Home"),r.a.createElement(le.a,{className:"mr-auto"},r.a.createElement(le.a.Link,{href:"/logger-react/add"},"Add"),r.a.createElement(le.a.Link,{href:"/logger-react/help"},"Help"),r.a.createElement(le.a.Link,{href:"/logger-react/stats"},"Stats"),r.a.createElement(le.a.Link,{href:"/logger-react/routines"},"All Routines"))),r.a.createElement(oe.c,null,r.a.createElement(oe.a,{exact:!0,path:"/add"},r.a.createElement(ce,null)),r.a.createElement(oe.a,{exact:!0,path:"/stats"},r.a.createElement(je,null)),r.a.createElement(oe.a,{exact:!0,path:"/help"},r.a.createElement(ue,null)),r.a.createElement(oe.a,{exact:!0,path:"/routines"},r.a.createElement(se,null)),r.a.createElement(oe.a,{exact:!0,path:"/routines/:routineName"},r.a.createElement(Se,null)),r.a.createElement(oe.a,{exact:!0,path:"/"},r.a.createElement(re,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.e16d0b7e.chunk.js.map