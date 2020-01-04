(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a(84)},51:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},53:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(53),a(3)),i=a(4),l=a(7),m=a(5),p=a(6),u=a(2),d=a(1),h=a(9),v=a.n(h),f=a(12),b=a.n(f),E="GET_ERRORS",j=function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("/project",e));case 3:r.sent,t.push("/dashboard"),a({type:E,payload:{}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 11:case"end":return r.stop()}}),null,null,[[0,8]])}},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDelete=function(e){a.props.deleteProject(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(u.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(u.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete"},n.a.createElement("i",{className:"fa fa-minus-circle pr-1",onClick:this.onDelete.bind(this,e.projectIdentifier)},"Delete Project")))))))}}]),t}(r.Component),y=Object(d.b)(null,{deleteProject:function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(b.a.delete("/project/".concat(e)));case 2:a.sent,t({type:"DELETE_PROJECT",payload:e});case 4:case"end":return a.stop()}}))}}})(g),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(N,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(y,{key:e.id,project:e})}))))))}}]),t}(r.Component),O=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(b.a.get("/project/all"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(k),C=(a(81),a(10)),w=a.n(C),S=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},P=a(26),D=a.n(P),T=function(){return function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem("jwtToken"),S(!1),e({type:"SET_CURRENT_USER",payload:{}});case 3:case"end":return t.stop()}}))}},x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/dashboard",className:"nav-link "},n.a.createElement("i",{className:"fas fa-user-circle mr-1"})," ",r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/logout",className:"nav-link",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/register",className:"nav-link "},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/login",className:"nav-link"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),_=Object(d.b)((function(e){return{security:e.security}}),{logout:T})(x),I=a(23),R=a(14),A=a(11),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectIdentifier:"",projectName:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(A.a)(e)),e.onSubmit=e.onSubmit.bind(Object(A.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectIdentifier:this.state.projectIdentifier,projectName:this.state.projectName,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history),console.log(t)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),B=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:j})(U),G=a(16),L=a(44),q={},M=a(21),J={projects:[],project:{}},W={projectTasks:[],projectTask:{}},H={validToken:!1,user:{}},K=function(e){return!!e},X=Object(G.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(M.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(M.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(M.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(M.a)({},e,{projectTasks:t.payload});case"GET_PROJECT_TASK":return Object(M.a)({},e,{projectTask:t.payload});case"DELETE_PROJECT_TASK":return Object(M.a)({},e,{projectTasks:e.projectTasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(M.a)({},e,{validToken:K(t.payload),user:t.payload});default:return e}}}),F={},V=[L.a],z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),$=window.navigator.userAgent.includes("Chrome")&&z?Object(G.e)(X,F,Object(G.d)(G.a.apply(void 0,V),z)):Object(G.e)(X,F,Object(G.d)(G.a.apply(void 0,V))),Q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectIdentifier:"",id:"",projectName:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(A.a)(e)),e.onSubmit=e.onSubmit.bind(Object(A.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectIdentifier:this.state.projectIdentifier,projectName:this.state.projectName,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectIdentifier,n=t.projectName,c=t.description,o=t.startDate,s=t.endDate;this.setState({id:a,projectIdentifier:r,projectName:n,description:c,startDate:o,endDate:s})}},{key:"componentWillMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Edit Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:w()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),Y=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.get("/project/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.push("/dashboard");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},createProject:j})(Q),Z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onDeleteClicked",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(e="HIGH",t="bg-danger text-light"),2===a.priority&&(e="MEDIUM",t="bg-warning text-light"),3===a.priority&&(e="LOW",t="bg-info text-light"),0===a.priority&&(e="LOW",t="bg-info text-light"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority:",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(u.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClicked.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),ee=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.delete("http://3.20.54.196:8080/backlog/".concat(e,"/").concat(t)));case 3:r.sent,a({type:"DELETE_PROJECT_TASK",payload:t}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(Z),te=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project_task_props;1===e.priority&&"HIGH";for(var t=e.map((function(e){return n.a.createElement(ee,{key:e.id,project_task:e})})),a=[],r=[],c=[],o=0;o<t.length;o++)console.log(t[o].props.project_task.status),"TO_DO"===t[o].props.project_task.status&&a.push(t[o]),"IN_PROGRESS"===t[o].props.project_task.status&&r.push(t[o]),"DONE"===t[o].props.project_task.status&&c.push(t[o]);return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),r),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),c))))}}]),t}(r.Component),ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklogs(e)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.projectTasks;return e=function(e,t){return t.length<1?e.projectTaskNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectTaskNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Task"):n.a.createElement(te,{project_task_props:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(u.b,{to:"/addProjectTask/".concat(t)},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),re=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklogs:function(e){return function(t){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.get("/backlog/".concat(e)));case 3:a=r.sent,t({type:"GET_BACKLOG",payload:a.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:E,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(ae),ne=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",dueDate:"",priority:0,status:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(A.a)(a)),a.onSubmit=a.onSubmit.bind(Object(A.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,dueDate:this.state.dueDate,priority:this.state.priority,status:this.state.status},a=this.props.match.params.id;this.props.addProjectTask(a,t,this.props.history),console.log(t)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",value:this.state.summary,onChange:this.onChange,placeholder:"Project Task summary"}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ce=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(r){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.post("/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),r({type:E,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:E,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}})(ne),oe=function(e){function t(e){var a;Object(s.a)(this,t);(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:null,createdAt:"",projectIdentifier:"",errors:{}},a.onChange=a.onChange.bind(Object(A.a)(a)),a.onSubmit=a.onSubmit.bind(Object(A.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.ps_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,summary:this.state.summary,projectSequence:this.state.projectSequence,acceptanceCriteria:this.state.acceptanceCriteria,dueDate:this.state.dueDate,priority:this.state.priority,status:this.state.status,createdAt:this.state.createdAt,projectIdentifier:this.state.projectIdentifier};this.props.match.params.id;this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.createdAt,m=t.projectIdentifier;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,createdAt:l,projectIdentifier:m})}},{key:"render",value:function(){console.log("in project task");var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," + Project Code",this.state.projectSequence," "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),se=Object(d.b)((function(e){return{projectTask:e.backlog.projectTask,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.get("/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),a.push("/dashboard");case 10:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.patch("/backlog/".concat(e,"/").concat(t),a));case 3:c.sent,r.push("/projectBoard/".concat(e)),n({type:E,payload:{}}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(0),n({type:E,payload:c.t0.response.data});case 11:case"end":return c.stop()}}),null,null,[[0,8]])}}})(oe),ie=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(u.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(u.b,{to:"/login",className:"btn btn-lg btn-primary mr-2"},"Login"))))))}}]),t}(r.Component),le=Object(d.b)((function(e){return{security:e.security}}))(ie),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={password:"",fullName:"",username:"",confirmPassword:"",error:{}},e.onChange=e.onChange.bind(Object(A.a)(e)),e.onSubmit=e.onSubmit.bind(Object(A.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={password:this.state.password,fullName:this.state.fullName,username:this.state.username,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history),console.log(t)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{action:"create-profile.html",onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.fullName}),placeholder:"Name",value:this.state.fullName,onChange:this.onChange,name:"fullName"}),this.props.errors.fullName&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),(this.props.errors.username||this.props.errors.userAlreadyExists)&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),this.props.errors.password&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),this.props.errors.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),pe=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("http://3.20.54.196:8080/users/signup",e));case 3:r.sent,t.push("/login"),a({type:E,payload:{}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 11:case"end":return r.stop()}}),null,null,[[0,8]])}}})(me),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={password:"",username:"",errors:{}},e.onChange=e.onChange.bind(Object(A.a)(e)),e.onSubmit=e.onSubmit.bind(Object(A.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={password:this.state.password,username:this.state.username};this.props.login(t),console.log(t)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Login"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),this.props.errors.username&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:w()("form-control form-control-lg",{"is-invalid":this.props.errors.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),this.props.errors.password&&n.a.createElement("div",{className:"invalid-feedback"},this.props.errors.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),de=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{login:function(e){return function(t){var a,r,n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.post("http://3.20.54.196:8080/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),S(r),n=D()(r),t({type:"SET_CURRENT_USER",payload:n}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),t({type:E,payload:c.t0.response.data});case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}})(ue),he=a(45),ve=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(he.a)(e,["component","security"]);return n.a.createElement(I.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(I.a,{to:"/login"})}}))})),fe=localStorage.jwtToken;if(fe){S(fe);var be=D()(fe);$.dispatch({type:"SET_CURRENT_USER",payload:be});var Ee=Date.now()/1e3;be.exp<Ee&&($.dispatch(T()),window.location.href="/")}var je=function(){return n.a.createElement(d.a,{store:$},n.a.createElement(u.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(_,null),n.a.createElement(I.b,{exact:!0,path:"/",component:le}),n.a.createElement(I.b,{exact:!0,path:"/register",component:pe}),n.a.createElement(I.b,{exact:!0,path:"/login",component:de}),n.a.createElement(I.d,null,n.a.createElement(ve,{exact:!0,path:"/dashboard",component:O}),n.a.createElement(ve,{exact:!0,path:"/addProject",component:B}),n.a.createElement(ve,{exact:!0,path:"/updateProject/:id",component:Y}),n.a.createElement(ve,{exact:!0,path:"/projectBoard/:id",component:re}),n.a.createElement(ve,{exact:!0,path:"/addProjectTask/:id",component:ce}),n.a.createElement(ve,{exact:!0,path:"/updateProjectTask/:backlog_id/:ps_id",component:se})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4980487a.chunk.js.map