"use strict";(self.webpackChunkdesert_fisher=self.webpackChunkdesert_fisher||[]).push([[6608],{6608:(e,t,n)=>{n.r(t),n.d(t,{render:()=>O});var r=n(5462),a=n(1566),i=(n(2962),n(1410)),d=(n(9063),n(1008),n(4484)),o=n(1766),s=(n(8782),n(6514),n(9895)),l=n(3985),g=(n(3800),n(4768),n(4758));function c(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:f(e),edges:h(e)};return(0,l.D)(e.graph())||(t.value=(0,l.e)(e.graph())),t}function f(e){return(0,l.s)(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),a={v:t};return(0,l.D)(n)||(a.value=n),(0,l.D)(r)||(a.parent=r),a}))}function h(e){return(0,l.s)(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return(0,l.D)(t.name)||(r.name=t.name),(0,l.D)(n)||(r.value=n),r}))}(0,g.a)(c,"write"),(0,g.a)(f,"writeNodes"),(0,g.a)(h,"writeEdges");var p=new Map,u=new Map,b=new Map,w=(0,g.a)((()=>{u.clear(),b.clear(),p.clear()}),"clear"),v=(0,g.a)(((e,t)=>{let n=u.get(t)||[];return s.b.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)}),"isDescendant"),y=(0,g.a)(((e,t)=>{let n=u.get(t)||[];return s.b.info("Descendants of ",t," is ",n),s.b.info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||v(e.v,t)||v(e.w,t)||n.includes(e.w):(s.b.debug("Tilt, ",t,",not in descendants"),!1))}),"edgeInCluster"),X=(0,g.a)(((e,t,n,r)=>{s.b.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let a=t.children(e)||[];e!==r&&a.push(e),s.b.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach((a=>{if(t.children(a).length>0)X(a,t,n,r);else{let i=t.node(a);s.b.info("cp ",a," to ",r," with parent ",e),n.setNode(a,i),r!==t.parent(a)&&(s.b.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==r&&a!==e?(s.b.debug("Setting parent",a,e),n.setParent(a,e)):(s.b.info("In copy ",e,"root",r,"data",t.node(e),r),s.b.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));let d=t.edges(a);s.b.debug("Copying Edges",d),d.forEach((a=>{s.b.info("Edge",a);let i=t.edge(a.v,a.w,a.name);s.b.info("Edge data",i,r);try{y(a,r)?(s.b.info("Copying as ",a.v,a.w,i,a.name),n.setEdge(a.v,a.w,i,a.name),s.b.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):s.b.info("Skipping copy of edge ",a.v,"--\x3e",a.w," rootId: ",r," clusterId:",e)}catch(e){s.b.error(e)}}))}s.b.debug("Removing node",a),t.removeNode(a)}))}),"copy"),m=(0,g.a)(((e,t)=>{let n=t.children(e),r=[...n];for(let a of n)b.set(a,e),r=[...r,...m(a,t)];return r}),"extractDescendants"),E=(0,g.a)(((e,t,n)=>{let r=e.edges().filter((e=>e.v===t||e.w===t)),a=e.edges().filter((e=>e.v===n||e.w===n)),i=r.map((e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w}))),d=a.map((e=>({v:e.v,w:e.w})));return i.filter((e=>d.some((t=>e.v===t.v&&e.w===t.w))))}),"findCommonEdges"),N=(0,g.a)(((e,t,n)=>{let r,a=t.children(e);if(s.b.trace("Searching children of id ",e,a),a.length<1)return e;for(let e of a){let a=N(e,t,n),i=E(t,n,a);if(a){if(!(i.length>0))return a;r=a}}return r}),"findNonClusterChild"),C=(0,g.a)((e=>p.has(e)&&p.get(e).externalConnections&&p.has(e)?p.get(e).id:e),"getAnchorId"),x=(0,g.a)(((e,t)=>{if(!e||t>10)s.b.debug("Opting out, no graph ");else{s.b.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(s.b.warn("Cluster identified",t," Replacement id in edges: ",N(t,e,t)),u.set(t,m(t,e)),p.set(t,{id:N(t,e,t),clusterData:e.node(t)}))})),e.nodes().forEach((function(t){let n=e.children(t),r=e.edges();n.length>0?(s.b.debug("Cluster identified",t,u),r.forEach((e=>{v(e.v,t)^v(e.w,t)&&(s.b.warn("Edge: ",e," leaves cluster ",t),s.b.warn("Descendants of XXX ",t,": ",u.get(t)),p.get(t).externalConnections=!0)}))):s.b.debug("Not a cluster ",t,u)}));for(let t of p.keys()){let n=p.get(t).id,r=e.parent(n);r!==t&&p.has(r)&&!p.get(r).externalConnections&&(p.get(t).id=r)}e.edges().forEach((function(t){let n=e.edge(t);s.b.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),s.b.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,a=t.w;if(s.b.warn("Fix XXX",p,"ids:",t.v,t.w,"Translating: ",p.get(t.v)," --- ",p.get(t.w)),p.get(t.v)||p.get(t.w)){if(s.b.warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=C(t.v),a=C(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let a=e.parent(r);p.get(a).externalConnections=!0,n.fromCluster=t.v}if(a!==t.w){let r=e.parent(a);p.get(r).externalConnections=!0,n.toCluster=t.w}s.b.warn("Fix Replacing with XXX",r,a,t.name),e.setEdge(r,a,n,t.name)}})),s.b.warn("Adjusted Graph",c(e)),S(e,0),s.b.trace(p)}}),"adjustClustersAndEdges"),S=(0,g.a)(((e,t)=>{if(s.b.warn("extractor - ",t,c(e),e.children("D")),t>10)return void s.b.error("Bailing out");let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(r){s.b.debug("Nodes = ",n,t);for(let r of n)if(s.b.debug("Extracting node",r,p,p.has(r)&&!p.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),p.has(r))if(!p.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){s.b.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";p.get(r)?.clusterData?.dir&&(n=p.get(r).clusterData.dir,s.b.warn("Fixing dir",p.get(r).clusterData.dir,n));let a=new o.a({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));s.b.warn("Old graph before copy",c(e)),X(r,e,a,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:p.get(r).clusterData,label:p.get(r).label,graph:a}),s.b.warn("New graph after copy node: (",r,")",c(a)),s.b.debug("Old graph after copy",c(e))}else s.b.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!p.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),s.b.debug(p);else s.b.debug("Not a cluster",r,t);n=e.nodes(),s.b.warn("New list of nodes",n);for(let r of n){let n=e.node(r);s.b.warn(" Now next level",r,n),n?.clusterNode&&S(n.graph,t+1)}}else s.b.debug("Done, no node has children",e.nodes())}),"extractor"),D=(0,g.a)(((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach((t=>{let r=e.children(t),a=D(e,r);n=[...n,...a]})),n}),"sorter"),I=(0,g.a)((e=>D(e,e.children())),"sortNodesByHierarchy"),k=(0,g.a)((async(e,t,n,o,l,f)=>{s.b.warn("Graph in recursive render:XAX",c(t),l);let h=t.graph().rankdir;s.b.trace("Dir in recursive render - dir:",h);let u=e.insert("g").attr("class","root");t.nodes()?s.b.info("Recursive render XXX",t.nodes()):s.b.info("No nodes found for",t),t.edges().length>0&&s.b.info("Recursive edges",t.edge(t.edges()[0]));let b=u.insert("g").attr("class","clusters"),w=u.insert("g").attr("class","edgePaths"),v=u.insert("g").attr("class","edgeLabels"),y=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){let r=t.node(e);if(void 0!==l){let n=JSON.parse(JSON.stringify(l.clusterData));s.b.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",l.height),t.setNode(l.id,n),t.parent(e)||(s.b.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(s.b.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r?.clusterNode){s.b.info("Cluster identified XBX",e,r.width,t.node(e));let{ranksep:i,nodesep:d}=t.graph();r.graph.setGraph({...r.graph.graph(),ranksep:i+25,nodesep:d});let l=await k(y,r.graph,n,o,t.node(e),f),g=l.elem;(0,a.b)(r,g),r.diff=l.diff||0,s.b.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,a.i)(g,r)}else t.children(e).length>0?(s.b.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",t),s.b.trace(N(r.id,t)),p.set(r.id,{id:N(r.id,t),node:r})):(s.b.trace("Node - the non recursive path XAX",e,y,t.node(e),h),await(0,a.h)(y,t.node(e),{config:f,dir:h}))}))),await(0,g.a)((async()=>{let e=t.edges().map((async function(e){let n=t.edge(e.v,e.w,e.name);s.b.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),s.b.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),s.b.info("Fix",p,"ids:",e.v,e.w,"Translating: ",p.get(e.v),p.get(e.w)),await(0,r.b)(v,n)}));await Promise.all(e)}),"processEdges")(),s.b.info("Graph before layout:",JSON.stringify(c(t))),s.b.info("############################################# XXX"),s.b.info("###                Layout                 ### XXX"),s.b.info("############################################# XXX"),(0,d.a)(t),s.b.info("Graph after layout:",JSON.stringify(c(t)));let X=0,{subGraphTitleTotalMargin:m}=(0,i.a)(f);return await Promise.all(I(t).map((async function(e){let n=t.node(e);if(s.b.info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=m,s.b.info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),p.get(n.id).node=n,(0,a.k)(n);else if(t.children(e).length>0){s.b.info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=m,t.node(n.parentId);let r=n?.padding/2||0,i=n?.labelBBox?.height||0,d=i-r||0;s.b.debug("OffsetY",d,"labelHeight",i,"halfPadding",r),await(0,a.f)(b,n),p.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=m/2,s.b.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,a.k)(n)}}))),t.edges().forEach((function(e){let a=t.edge(e);s.b.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(a),a),a.points.forEach((e=>e.y+=m/2));let i=t.node(e.v);var d=t.node(e.w);let l=(0,r.d)(w,a,p,n,i,d,o);(0,r.c)(a,l)})),t.nodes().forEach((function(e){let n=t.node(e);s.b.info(e,n.type,n.diff),n.isGroup&&(X=n.diff)})),s.b.warn("Returning from recursive render XAX",u,X),{elem:u,diff:X}}),"recursiveRender"),O=(0,g.a)((async(e,t)=>{let n=new o.a({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),i=t.select("g");(0,r.e)(i,e.markers,e.type,e.diagramId),(0,a.j)(),(0,r.a)(),(0,a.g)(),w(),e.nodes.forEach((e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)})),s.b.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",a=t+"---"+t+"---2",i=n.node(t);n.setNode(r,{domId:r,id:r,parentId:i.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,i.parentId),n.setNode(a,{domId:a,id:a,parentId:i.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(a,i.parentId);let d=structuredClone(e),o=structuredClone(e),s=structuredClone(e);d.label="",d.arrowTypeEnd="none",d.id=t+"-cyclic-special-1",o.arrowTypeEnd="none",o.id=t+"-cyclic-special-mid",s.label="",i.isGroup&&(d.fromCluster=t,s.toCluster=t),s.id=t+"-cyclic-special-2",n.setEdge(t,r,d,t+"-cyclic-special-0"),n.setEdge(r,a,o,t+"-cyclic-special-1"),n.setEdge(a,t,s,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)})),s.b.warn("Graph at first:",JSON.stringify(c(n))),x(n),s.b.warn("Graph after XAX:",JSON.stringify(c(n)));let d=(0,s.X)();await k(i,n,e.type,e.diagramId,void 0,d)}),"render")}}]);