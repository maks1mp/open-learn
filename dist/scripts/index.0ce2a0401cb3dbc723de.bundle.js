/*! For license information please see index.0ce2a0401cb3dbc723de.bundle.js.LICENSE.txt */
!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1),i(2);document.addEventListener("DOMContentLoaded",(function(){objectFitImages(),window.ShapesPolyfill.run();var t=document.getElementById("open-menu"),e=document.getElementById("close-menu"),i=document.getElementById("backdrop"),r=document.getElementById("menu");function n(){var t,e;e="open",(t=r).classList?t.classList.remove(e):hasClass(t,e)&&t.setAttribute("class",t.getAttribute("class").replace(e," ")),window.document.body.removeAttribute("style")}t.onclick=function(){var t,e;e="open",(t=r).classList?t.classList.add(e):hasClass(t,e)||t.setAttribute("class",t.getAttribute("class")+" "+e),window.document.body.setAttribute("style","overflow: hidden")},i.onclick=n,e.onclick=n;for(var s=r.querySelectorAll("a"),o=0;o<s.length;o++)s[o].addEventListener("click",n)}))},function(t,e,i){},function(t,e){!function(t){"use strict";function e(t){var e=getComputedStyle(t);this.units={px:1},this.element=t;var i=function(t){return t&&t.length?parseInt(t):0};this.margins=[e.marginTop,e.marginRight,e.marginBottom,e.marginLeft],this.margins=this.margins.map(i),this.borders=[e.borderTopWidth,e.borderRightWidth,e.borderBottomWidth,e.borderLeftWidth],this.borders=this.borders.map(i),this.paddings=[e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft],this.paddings=this.paddings.map(i),this.borderBox={x:0,y:0,width:t.offsetWidth,height:t.offsetHeight},this.marginBox={x:-this.margins[3],y:-this.margins[0],width:t.offsetWidth+this.margins[1]+this.margins[3],height:t.offsetHeight+this.margins[0]+this.margins[2]};var r=this;this.borderBox.radii=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"].map((function(t){return t=e[t].split(/\s+/),[r.toPixels(t[0],r.borderBox.width),r.toPixels(t.length>1?t[1]:t[0],r.borderBox.height)]})),this.cssFloat=e.cssFloat}function i(t,e,i){return(i.x-t.x)*(e.y-t.y)-(e.x-t.x)*(i.y-t.y)}function r(t,e,r){return Math.abs(i(t,e,r))<350}function n(t,e){return t.x==e.x&&t.y==e.y}function s(){}function o(t,e,i,r){return t.y>=i&&t.y<=r?{x1:t.x-e,x2:t.x+e}:r<t.y?(n=R(r-t.y,e,e),{x1:t.x-n,x2:t.x+n}):(n=R(i-t.y,e,e),{x1:t.x-n,x2:t.x+n});var n}function h(t,e,i){this.init(t,e,i)}function a(t,e){var i=t.polygon.shapeMargin,r=e.x*i,n=e.y*i;this.anchorEdge=t,this.normalUnitVector=e;var s={x:t.vertex1.x+r,y:t.vertex1.y+n},o={x:t.vertex2.x+r,y:t.vertex2.y+n};this.init(t.polygon,s,o)}function p(t){for(var e=0,r=1;r<t.length;++r){var n=t[r];(n.y<t[e].y||n.y==t[e].y&&n.x<t[e].x)&&(e=r)}var s=t[(e+1)%t.length];return i(t[(e+t.length-1)%t.length],t[e],s)<0}function c(t,e,i){if(this.m_vertices=t,this.fillRule=e,this.shapeMargin=i,t.length<3)return this.m_edges=[],void(this.shapeMarginEdges=[]);var n=[],s=t.length>0?t[0].x:void 0,o=t.length>0?t[0].y:void 0,c=s,u=o,l=p(t),d=0;do{var f=this.nextEdgeVertexIndex(d,l);n.push(new h(this,t[d],t[f]));var g=t[d].x,x=t[d].y;s=Math.min(g,s),o=Math.min(x,o),c=Math.max(g,c),u=Math.max(x,u),d=f}while(0!==d);for(var m,y=0;y<n.length&&n.length>3;)m=(y+1)%n.length,r(n[y].vertex1,n[y].vertex2,n[m].vertex2)?(n[y].vertex2=n[m].vertex2,n.splice(m,1)):y++;if(0===i)this.shapeMarginEdges=n;else{for(var v=[],b=0;b<n.length;b++)v.push(new a(n[b],n[b].outwardNormal())),v.push(new a(n[b],n[b].inwardNormal()));this.shapeMarginEdges=v}this.m_edges=n,this.bounds=new M(s-i,o-i,2*i+(c-s),2*i+(u-o))}function u(t,e){return t.minX-e.minX}function l(t,e){return e.x-t.x}function d(t,e){return e.maxX-t.maxX}function f(t,e){return t.x-e.x}function g(t,e,i){this.y=t,this.startX=e,this.endX=i}function x(t,e){this.intervals=[],this.yOffset=t,this.size=e;for(var i=0;e>i;i++)this.intervals[i]=x.none;this.minY=-t,this.maxY=e-t}function m(t){this.shapeMargin=t,this.xIntercepts=[];for(var e=0;t>=e;e++)this.xIntercepts[e]=Math.sqrt(t*t-e*e)}function y(t,e){console.log("Unable to load image ",t,". It's probably missing or you've run into a CORS issue."),e&&console.log("The exact problem was ",e)}function v(t,e,i){var r=document.createElement("canvas");this.width=r.width=e,this.height=r.height=i;var n=r.getContext("2d");n.drawImage(t,0,0,e,i);try{this.imageData=n.getImageData(0,0,e,i)}catch(e){y(t.src,e)}}function b(t,e,i,r,n,s){this.url=t,this.box=e,this.shapeImageThreshold=256*i,this.shapeMargin=r,this.clip=n,this.init(s)}function w(t,e){this.width=t,this.height=e}function M(t,e,i,r){this.x=t,this.y=e,this.width=i,this.height=r,this.maxX=t+i,this.maxY=e+r}function E(t,e,i,r,n){this.rect=t,this.radii={topLeft:e,topRight:i,bottomLeft:r,bottomRight:n}}function R(t,e,i){return e*Math.sqrt(1-t*t/(i*i))}function L(t,e,i){return 0===e?1:Math.round(0===t||i>t*e/2?e:Math.sqrt(2*i*(e/t)))}function A(t,e,i,r){return function(n,s,o){if(!this.rect.overlapsYRange(n,s))return[{x:void 0,height:s-n}];var h=[];n<this.rect.y&&h.push({x:void 0,height:this.rect.y-n});var a,p,c,u,l,d=t.call(this),f=e.call(this),g=new M(this.rect.x,d.maxY,this.rect.width,f.y-d.maxY);if(d.overlapsYRange(n,s))for(a=L(d.width,d.height,o),p=Math.max(d.y,n),c=Math.min(d.maxY,s),u=p;c>u;u+=a)l=R(d.maxY-Math.min(u+a,c),d.width,d.height),h.push({height:Math.min(a,c-u),x:r(d,l)});if(p=Math.max(g.y,n),c=Math.min(g.maxY,s),g.overlapsYRange(n,s)&&h.push({x:i(g),height:c-p}),f.overlapsYRange(n,s))for(a=L(f.width,f.height,o),p=Math.max(n,f.y),c=Math.min(f.maxY,s),u=p;c>u;u+=a)l=R(u-f.y,f.width,f.height),h.push({height:Math.min(a,c-u),x:r(f,l)});return s>this.rect.maxY&&h.push({x:void 0,height:s-this.rect.maxY}),h}}function S(t,e){var i,r=void 0===t.shapeMargin?0:t.shapeMargin;if(t.shape){switch(t.shape.type){case"circle":i=function(t,e){var i=t.r+e,r=new w(i,i);return new E(new M(t.cx-i,t.cy-i,2*i,2*i),r,r,r,r)}(t.shape,r);break;case"ellipse":i=function(t,e){var i=new w(t.rx+e,t.ry+e);return new E(new M(t.cx-i.width,t.cy-i.height,2*i.width,2*i.height),i,i,i,i)}(t.shape,r);break;case"inset":(i=function(t,e){function i(t){return new w(t[0]+e,t[1]+e)}var r=i(t.radii[0]),n=i(t.radii[1]),s=i(t.radii[2]),o=i(t.radii[3]);return new E(new M(t.x-e,t.y-e,t.width+2*e,t.height+2*e),r,n,o,s)}(t.shape,r)).isRenderable()||i.adjustRadii();break;case"polygon":i=function(t,e){return new c(t.points,t.fillRule,e)}(t.shape,r)}return e(),i}return t.url?function(t,e,i,r,n,s){return new b(t,e,i,r,new M(n.x,n.y,n.width,n.height),s)}(t.url,t.box,t.shapeImageThreshold,r,t.clip,e):t.box?(i=function(t,e){function i(t){return new w(t[0]+e,t[1]+e)}var r=i(t.radii[0]),n=i(t.radii[1]),s=i(t.radii[2]),o=i(t.radii[3]);return new E(new M(-e,-e,t.width+2*e,t.height+2*e),r,n,o,s)}(t.box,r),e(),i):void console.error("Unrecognized shape")}function Y(t){this.metrics=new e(t);var i={metrics:this.metrics,shapeOutside:t.getAttribute("data-shape-outside"),shapeMargin:t.getAttribute("data-shape-margin"),shapeImageThreshold:t.getAttribute("data-shape-image-threshold")};this.shapeValue=new X(i);var r=this;this.geometry=S(this.shapeValue,(function(){r.ready=!0,r.callback&&r.callback()}))}function I(t){this.scope=t;var e=document.currentScript;e||(e=(e=document.getElementsByTagName("script"))[e.length-1]);var i=this;"false"!==e.getAttribute("data-auto-run")&&t.addEventListener&&t.addEventListener("load",(function(){i.run()}))}function X(t){return t&&t.metrics&&t.shapeOutside?(this.url=this.parseUrl(t.shapeOutside),this.box=this.parseBox(this.url?"content-box":t.shapeOutside,t.metrics),this.shape=this.parseBasicShape(t.shapeOutside,this.box,t.metrics),this.clip=this.computeClip(this.box,t.metrics),this.shapeMargin=this.parseShapeMargin(t.shapeMargin,this.box,t.metrics),void(this.shapeImageThreshold=this.parseShapeImageThreshold(t.shapeImageThreshold))):void console.error("ShapeValue requires at least a metrics object and shape-outside string")}function C(t,e,i){var r=i.reduce((function(t,e){return t+e[0]}),0),n=i.reduce((function(t,e){return t+e[1]}),0),s=i.reduce((function(t,e){return t+e[2]}),0),o=i.reduce((function(t,e){return t+e[3]}),0);t.x-=e*o,t.y-=e*r,t.width+=e*(o+n),t.height+=e*(r+s)}function P(t,e,i){if(0>e)return Math.max(t+e*i,0);var r=Math.abs(t/i);return 1>r?Math.max(t+i*(1+Math.pow(r-1,3)),0):t+i}function O(t,e,i){var r=i.reduce((function(t,e){return t+e[0]}),0),n=i.reduce((function(t,e){return t+e[1]}),0),s=i.reduce((function(t,e){return t+e[2]}),0),o=i.reduce((function(t,e){return t+e[3]}),0);t[0][0]=P(t[0][0],e,o),t[0][1]=P(t[0][1],e,r),t[1][0]=P(t[1][0],e,n),t[1][1]=P(t[1][1],e,r),t[2][0]=P(t[2][0],e,n),t[2][1]=P(t[2][1],e,s),t[3][0]=P(t[3][0],e,o),t[3][1]=P(t[3][1],e,s)}function T(t,e){return t.map((function(t){return t[e]}))}function B(t,e,i){var r="TopLeft",n=0;switch((t=t.split(/\s+/))[0]){case"top":case"left":break;case"bottom":case"right":r="BottomRight";break;case"center":n=e/2;break;default:n=i.toPixels(t[0],e)}return t.length>1&&(n=i.toPixels(t[1],e)),"TopLeft"===r?n:e-n}function k(t,e,i,r){return"closest-side"===t?Math.min.apply(null,e):"farthest-side"===t?Math.max.apply(null,e):r.toPixels(t,i)}function z(t){this.source=t,this.url=t.href||null,this.cssText=""}function F(t){return this instanceof F?(this.stylesheets=[],this.queueCount=0,this.callback=t||function(){},void this.init()):new F(t)}function N(t){this.callback=t||function(){};var e=this;new F((function(t){e.onStylesLoaded(t)}))}e.prototype.unitToPx=function(t){if(this.units[t])return this.units[t];var e=this.element.style.getPropertyValue("line-height");return this.element.style.setProperty("line-height",1+t),this.units[t]=parseFloat(getComputedStyle(this.element).getPropertyValue("line-height")),this.element.style.setProperty("line-height",e),this.units[t]},e.prototype.getUnitsMap=function(t){var e=document.createElement("div");e.style.width="0px",e.style.height="0px",t.appendChild(e);var i=getComputedStyle(e),r={};return["em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","in","px","pt","pc"].forEach((function(t){e.style.lineHeight="1"+t,r[t]=parseFloat(i.lineHeight)})),e.parentNode.removeChild(e),r},e.prototype.toPixels=function(t,e){var i=/([\-0-9\.]*)([a-z%]*)/.exec(t);return i[1]=parseFloat(i[1]),i[2]?"%"===i[2]?i[1]*e/100:i[1]*this.unitToPx(i[2]):i[1]},s.prototype.init=function(t,e,i){this.polygon=t,this.vertex1=e,this.vertex2=i,this.minX=Math.min(this.vertex1.x,this.vertex2.x),this.maxX=Math.max(this.vertex1.x,this.vertex2.x)},s.prototype.containsPoint=function(t){return function(t,e,i){return i.x>=Math.min(t.x,e.x)&&i.x<=Math.max(t.x,e.x)&&r(t,e,i)}(this.vertex1,this.vertex2,t)},s.prototype.overlapsYRange=function(t,e){var i=this.vertex1.y,r=this.vertex2.y;return e>=Math.min(i,r)&&t<=Math.max(i,r)},s.prototype.isWithinYRange=function(t,e){var i=this.vertex1.y,r=this.vertex2.y;return t<=Math.min(i,r)&&e>=Math.max(i,r)},s.prototype.inwardNormal=function(){var t=this.vertex2.x-this.vertex1.x,e=this.vertex2.y-this.vertex1.y,i=Math.sqrt(t*t+e*e);return{x:-e/i,y:t/i}},s.prototype.outwardNormal=function(){var t=this.inwardNormal();return{x:-t.x,y:-t.y}},s.prototype.xIntercept=function(t){var e=this.vertex1.y,i=this.vertex2.y;return e==i?Math.min(this.vertex1.x,this.vertex2.x):t==Math.min(e,i)?i>e?this.vertex1.x:this.vertex2.x:t==Math.max(e,i)?e>i?this.vertex1.x:this.vertex2.x:this.vertex1.x+(t-e)*(this.vertex2.x-this.vertex1.x)/(i-e)},s.prototype.clippedEdgeXRange=function(t,e){if(this.isWithinYRange(t,e)){var i=this.vertex1.x,r=this.vertex2.x;return{x1:Math.min(i,r),x2:Math.max(i,r)}}var n,s;this.vertex1.y<this.vertex2.y?(n=this.vertex1,s=this.vertex2):(n=this.vertex2,s=this.vertex1);var o=n.y<t?this.xIntercept(t):n.x,h=s.y>e?this.xIntercept(e):s.x;return{x1:Math.min(o,h),x2:Math.max(o,h)}},h.prototype=new s,a.prototype=new s,c.prototype.vertexAt=function(t){return this.m_vertices[t]},c.prototype.edgeAt=function(t){return this.m_edges[t]},c.prototype.isEmpty=function(){return this.m_edges.length<3||this.bounds.isEmpty()},c.prototype.vertices=function(){return this.m_vertices.slice(0)},c.prototype.edges=function(){return this.m_edges.slice(0)},c.prototype.overlapsYRange=function(t,e){return t<this.bounds.maxY&&e>=this.bounds.y},c.prototype.nextVertexIndex=function(t,e){var i=this.m_vertices.length;return(e?t+1:t-1+i)%i},c.prototype.nextEdgeVertexIndex=function(t,e){for(var i=(this.m_vertices.length,this.nextVertexIndex(t,e));i&&n(this.vertexAt(t),this.vertexAt(i));)i=this.nextVertexIndex(i,e);for(;i;){var s=this.nextVertexIndex(i,e);if(!r(this.vertexAt(t),this.vertexAt(i),this.vertexAt(s)))break;i=s}return i},c.prototype.containsPointEvenOdd=function(t){for(var e=0,i=0;i<this.m_edges.length;++i){var r=this.edgeAt(i);if(r.containsPoint(t))return!0;var n=r.vertex1,s=r.vertex2;if(n.y<=t.y&&s.y>t.y||n.y>t.y&&s.y<=t.y){var o=(t.y-n.y)/(s.y-n.y);t.x<n.x+o*(s.x-n.x)&&++e}}return 0!=(1&e)},c.prototype.containsPointNonZero=function(t){for(var e=0,r=0;r<this.m_edges.length;++r){var n=this.edgeAt(r);if(n.containsPoint(t))return!0;var s=n.vertex1,o=n.vertex2;o.y<t.y?s.y>t.y&&i(s,o,t)>0&&++e:o.y>t.y&&s.y<=t.y&&i(s,o,t)<0&&--e}return 0!==e},c.prototype.containsPoint=function(t){return!!this.bounds.containsPoint(t)&&("nonzero"==this.fillRule?this.containsPointNonZero(t):this.containsPointEvenOdd(t))},c.prototype.edgeVerticesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.m_edges.length;r++){var n=this.edgeAt(r).vertex1;n.y>=t&&n.y<e&&i.push(n)}return i},c.prototype.edgesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.m_edges.length;r++){var n=this.edgeAt(r);n.overlapsYRange(t,e)&&i.push(n)}return i},c.prototype.shapeMarginEdgesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.shapeMarginEdges.length;r++){var n=this.shapeMarginEdges[r];n.overlapsYRange(t,e)&&i.push(n)}return i},c.prototype.leftExclusionEdge=function(t,e){if(!this.isEmpty()&&this.bounds.overlapsYRange(t,e)){var i,r,n,s=this.shapeMarginEdgesThatOverlapYRange(t,e);if(0!==s.length)for(s.sort(u),i=s[0].clippedEdgeXRange(t,e).x1,r=1;r<s.length&&!(s[r].minX>i);r++)n=s[r].clippedEdgeXRange(t,e),i=void 0===i?n.x1:Math.min(i,n.x1);var h=this.shapeMargin;if(h>0){var a=this.edgeVerticesThatOverlapYRange(t-h,e+h);for(a.sort(l),r=0;r<a.length;r++)n=o(a[r],h,t,e),i=void 0===i?n.x1:Math.min(i,n.x1)}return void 0===i&&console.error("Polygon leftExclusionEdge() failed"),i}},c.prototype.rightExclusionEdge=function(t,e){if(!this.isEmpty()&&this.bounds.overlapsYRange(t,e)){var i,r,n,s=this.shapeMarginEdgesThatOverlapYRange(t,e);if(0!==s.length)for(s.sort(d),i=s[0].clippedEdgeXRange(t,e).x2,r=1;r<s.length&&!(s[r].maxX<i);r++)n=s[r].clippedEdgeXRange(t,e),i=Math.max(i,n.x2);var h=this.shapeMargin;if(h>0){var a=this.edgeVerticesThatOverlapYRange(t-h,e+h);for(a.sort(f),r=0;r<a.length;r++)n=o(a[r],h,t,e),i=void 0===i?n.x2:Math.max(i,n.x2)}return void 0===i&&console.error("Polygon rightExclusionEdge() failed"),i}},x.none={},x.prototype.intervalAt=function(t){return this.intervals[t+this.yOffset]},x.prototype.setIntervalAt=function(t,e){this.intervals[t+this.yOffset]=e},x.prototype.uniteIntervalAt=function(t,e){var i=this.intervalAt(t);i===x.none?this.setIntervalAt(t,e):(i.startX=Math.min(i.startX,e.startX),i.endX=Math.max(i.endX,e.endX))},x.prototype.intervalAtContains=function(t,e){var i=this.intervalAt(t);return i!=x.none&&(i.startX<=e.startX&&i.endX>=e.endX)},m.prototype.generateIntervalAt=function(t,e){var i=Math.abs(t-e.y),r=i>this.shapeMargin?0:this.xIntercepts[i];return new g(t,e.startX-r,e.endX+r)},x.prototype.computeMarginIntervals=function(t){for(var e=new m(t),i=new x(this.yOffset,this.size),r=this.minY;r<this.maxY;++r){var n=this.intervalAt(r);if(n!=x.none){var s,o=Math.max(this.minY,r-t),h=Math.min(this.maxY-1,r+t);for(s=r-1;s>=o&&!(s>0&&this.intervalAtContains(s,n));--s)i.uniteIntervalAt(s,e.generateIntervalAt(s,n));for(i.uniteIntervalAt(r,e.generateIntervalAt(r,n)),s=r+1;h>=s&&!(s<this.maxY&&this.intervalAtContains(s,n));++s)i.uniteIntervalAt(s,e.generateIntervalAt(s,n))}}return i},v.prototype.hasData=function(){return!!this.imageData},v.prototype.alphaAt=function(t,e){return this.imageData.data[4*t+3+e*this.width*4]},b.prototype.init=function(t){var e,i=this,r=new Image;if(document.createElement("canvas").getContext||(y(i.url),t()),r.onload=function(){i.intervals=i.computeIntervals(r),i.intervals&&i.shapeMargin>0&&(i.intervals=i.intervals.computeMarginIntervals(i.shapeMargin,i.clip)),e&&URL.revokeObjectURL(e),t()},r.onerror=function(){y(i.url),t()},!r.hasOwnProperty("crossOrigin")&&window.URL&&window.URL.createObjectURL){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status?(e=URL.createObjectURL(n.response),r.src=e):(y(i.url),t()))},n.open("GET",i.url,!0),n.responseType="blob",n.send()}else r.crossOrigin="anonymous",r.src=i.url},b.prototype.computeIntervals=function(t){var e=this.clip,i=this.shapeImageThreshold,r=this.box.width,n=new v(t,r,this.box.height);if(n.hasData()){for(var s=new x(-e.y,e.height),o=Math.min(e.height,this.box.height),h=0;o>h;h++)for(var a=-1,p=0;p<this.box.width;p++){var c=n.alphaAt(p,h);-1==a&&c>i?(a=p,s.intervalAt(h)===x.none&&s.setIntervalAt(h,new g(h,a,r))):-1!=a&&i>=c&&(s.intervalAt(h).endX=p,a=-1)}return s}},b.prototype.rightExclusionEdge=function(t,e){var i=this.intervals;if(!i)return this.clip.width;for(var r,n=Math.max(t,this.clip.y);e>=n&&n<this.clip.maxY;n++){var s=i.intervalAt(n).endX;(void 0===r||void 0!==s&&s>r)&&(r=s)}return r},b.prototype.leftExclusionEdge=function(t,e){var i=this.intervals;if(!i)return 0;for(var r,n=Math.max(t,this.clip.y);e>=n&&n<this.clip.maxY;n++){var s=i.intervalAt(n).startX;(void 0===r||void 0!==s&&r>s)&&(r=s)}return r},w.zeroSize={width:0,height:0},w.prototype.isEmpty=function(){return this.width<=0||this.height<=0},w.prototype.scale=function(t){this.width*=t,this.height*=t},M.prototype.isEmpty=function(){return this.width<=0||this.height<=0},M.prototype.containsX=function(t){return t>=this.x&&t<this.maxX},M.prototype.containsY=function(t){return t>=this.y&&t<this.maxY},M.prototype.containsPoint=function(t){return this.containsX(t.x)&&this.containsY(t.y)},M.prototype.shiftLeftEdgeTo=function(t){this.width-=t-this.x,this.x=t},M.prototype.shiftTopEdgeTo=function(t){this.height-=t-this.y,this.y=t},M.prototype.shiftRightEdgeTo=function(t){this.width=t-this.x},M.prototype.shiftBottomEdgeTo=function(t){this.height=t-this.y},M.prototype.overlapsYRange=function(t,e){return!this.isEmpty()&&e>=this.y&&t<this.maxY},M.prototype.overlapsXRange=function(t,e){return!this.isEmpty()&&e>=this.x&&t<this.maxX},E.prototype.isEmpty=function(){return this.width<=0||this.height<=0},E.prototype.topLeftCorner=function(){return new M(this.rect.x,this.rect.y,this.radii.topLeft.width,this.radii.topLeft.height)},E.prototype.topRightCorner=function(){return new M(this.rect.maxX-this.radii.topRight.width,this.rect.y,this.radii.topRight.width,this.radii.topRight.height)},E.prototype.bottomLeftCorner=function(){return new M(this.rect.x,this.rect.maxY-this.radii.bottomLeft.height,this.radii.bottomLeft.width,this.radii.bottomLeft.height)},E.prototype.bottomRightCorner=function(){return new M(this.rect.maxX-this.radii.bottomRight.width,this.rect.maxY-this.radii.bottomRight.height,this.radii.bottomRight.width,this.radii.bottomRight.height)},E.prototype.isRounded=function(){function t(t){return t.width>0&&t.height>0}return t(this.radii.topLeft)||t(this.radii.topRight)||t(this.radii.bottomLeft)||t(this.radii.bottomRight)},E.prototype.cornersInsetRect=function(){var t=this.topLeftCorner(),e=this.topRightCorner(),i=this.bottomLeftCorner(),r=this.bottomRightCorner(),n=Math.max(t.maxX,i.maxX),s=Math.max(t.maxY,e.maxY);return new M(n,s,Math.min(e.x,r.x)-n,Math.min(i.y,r.y)-s)},E.prototype.scaleRadii=function(t){if(1!=t){var e=this.radii;e.topLeft.scale(t),e.topLeft.isEmpty()&&(e.topLeft=w.zeroSize),e.topRight.scale(t),e.topRight.isEmpty()&&(e.topRight=w.zeroSize),e.bottomLeft.scale(t),e.bottomLeft.isEmpty()&&(e.bottomLeft=w.zeroSize),e.bottomRight.scale(t),e.bottomRight.isEmpty()&&(e.bottomRight=w.zeroSize)}},E.prototype.isRenderable=function(){var t=this.radii,e=this.rect;return t.topLeft.width+t.topRight.width<=e.width&&t.bottomLeft.width+t.bottomRight.width<=e.width&&t.topLeft.height+t.bottomLeft.height<=e.height&&t.topRight.height+t.bottomRight.height<=e.height},E.prototype.adjustRadii=function(){var t=this.radii,e=Math.max(t.topLeft.width+t.topRight.width,t.bottomLeft.width+t.bottomRight.width),i=Math.max(t.topLeft.height+t.bottomLeft.height,t.topRight.height+t.bottomRight.height);if(0>=e||0>=i)this.radii={topLeft:w.zeroSize,topRight:w.zeroSize,bottomRight:w.zeroSize,bottomLeft:w.zeroSize};else{var r=this.rect,n=r.width/e,s=r.height/i;this.scaleRadii(s>n?n:s)}},E.prototype.minXInterceptAt=function(t,e){if(!this.rect.containsY(t))return e;var i,r=this.topLeftCorner();if(r.containsY(t))return i=r.maxY-t,r.maxX-R(i,r.width,r.height);var n=this.bottomLeftCorner();return n.containsY(t)?(i=t-n.y,n.maxX-R(i,n.width,n.height)):this.rect.x},E.prototype.maxXInterceptAt=function(t,e){if(!this.rect.containsY(t))return e;var i,r=this.topRightCorner();if(r.containsY(t))return i=r.maxY-t,r.x+R(i,r.width,r.height);var n=this.bottomRightCorner();return n.containsY(t)?(i=t-n.y,n.x+R(i,n.width,n.height)):this.rect.maxX},E.prototype.rightExclusionEdge=function(t,e){return this.rect.isEmpty()||!this.rect.overlapsYRange(t,e)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(t,e)?this.rect.maxX:Math.max(this.maxXInterceptAt(t,this.rect.x),this.maxXInterceptAt(e,this.rect.x))},E.prototype.leftExclusionEdge=function(t,e){return this.rect.isEmpty()||!this.rect.overlapsYRange(t,e)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(t,e)?this.rect.x:Math.min(this.minXInterceptAt(t,this.rect.maxX),this.minXInterceptAt(e,this.rect.maxX))},E.prototype.rightExclusionOffsets=A(E.prototype.topRightCorner,E.prototype.bottomRightCorner,(function(t){return t.maxX}),(function(t,e){return t.x+e})),E.prototype.leftExclusionOffsets=A(E.prototype.topLeftCorner,E.prototype.bottomLeftCorner,(function(t){return t.x}),(function(t,e){return t.maxX-e})),Y.prototype.onReady=function(t){this.ready?t():this.callback=t},Y.prototype.leftExclusionEdge=function(t){return this.geometry?this.geometry.leftExclusionEdge(t.top,t.bottom):t.left},Y.prototype.rightExclusionEdge=function(t){return this.geometry?this.geometry.rightExclusionEdge(t.top,t.bottom):t.right},Y.prototype.computeStepOffsets=function(t){for(var e,i=[],r=0;r<Math.ceil(this.metrics.marginBox.height/t);r++){var n={left:0,right:this.shapeValue.box.width,top:r*t,bottom:Math.min((r+1)*t,this.metrics.marginBox.height)};n.top-=this.metrics.margins[0]+this.shapeValue.box.y,n.bottom-=this.metrics.margins[0]+this.shapeValue.box.y,"left"===this.metrics.cssFloat?e=void 0===(e=this.rightExclusionEdge(n))?0:e+this.shapeValue.box.x+this.metrics.margins[3]:e=void 0===(e=this.leftExclusionEdge(n))?0:this.metrics.marginBox.width-(e+this.shapeValue.box.x+this.metrics.margins[3]),i.push({cssFloat:this.metrics.cssFloat,top:n.top+this.shapeValue.box.y+this.metrics.margins[0],bottom:n.bottom+this.shapeValue.box.y+this.metrics.margins[0],offset:Math.min(e,this.metrics.marginBox.width)})}return i},Y.prototype.computeAdaptiveOffsets=function(t){for(var e=this.shapeValue.box.x+this.metrics.margins[3],i=this.metrics.margins[0]+this.shapeValue.box.y,r="left"===this.metrics.cssFloat?this.geometry.rightExclusionOffsets(-i,this.metrics.marginBox.height-i,t):this.geometry.leftExclusionOffsets(-i,this.metrics.marginBox.height-i,t),n=[],s=0,o=0;o<r.length;o++){var h;void 0===r[o].x?h=0:(h="left"==this.metrics.cssFloat?r[o].x+e:this.metrics.marginBox.width-(r[o].x+e),h=Math.min(h,this.metrics.marginBox.width)),n.push({offset:h,top:s,bottom:s+r[o].height,cssFloat:this.metrics.cssFloat}),s+=r[o].height}return n},Y.prototype.offsets=function(t){return this.geometry instanceof E?"step"==(t&&t.mode)?this.computeStepOffsets(t.step):this.computeAdaptiveOffsets(t.limit):this.computeStepOffsets(t.step)},I.prototype.polyfill=function(t,e){var i=getComputedStyle(t);if(/left|right/.test(i.cssFloat)&&t.getAttribute("data-shape-outside")){var r=e&&e.step||parseInt(i.fontSize),n=e&&e.mode||"adaptive",s=e&&e.limit||1.8*r,o=new Y(t),h=this;o.onReady((function(){var i=o.offsets({mode:n,limit:s,step:r});(function(t,e){var i,r=document.createElement("div");for(var n in e.forEach((function(t){var e=t.bottom-t.top,n=document.createElement("div");for(var s in n.className="sandbag",i={cssFloat:t.cssFloat,width:t.offset+"px",height:e+"px",clear:t.cssFloat})n.style[s]=i[s];r.appendChild(n)})),i={position:"relative",width:"auto",height:"0",clear:"both",pointerEvents:"none"})r.style[n]=i[n];var s,o=t.parentNode,h=getComputedStyle(o),a=parseFloat(h.borderTop)+parseFloat(h.borderBottom);for(n in i={position:"absolute",top:"0",width:"100%",height:o.clientHeight-a,left:"0"},s=document.createElement("div"),i)s.style[n]=i[n];r.appendChild(s),t.parentNode&&t.parentNode.insertBefore(r,t),s.appendChild(t),r.setAttribute("data-shape-outside-container","true")})(t,i),e&&e.callback&&"function"==typeof e.callback&&e.callback.call(h.scope)}))}},I.prototype.removePolyfill=function(t){var e=t.parentNode;for(e=t.parentNode;e&&e.hasAttribute&&!e.hasAttribute("data-shape-outside-container");e=e.parentNode);e&&e.hasAttribute&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))},I.prototype.run=function(t){var e=this,i=t&&t.force,r=(i&&(i===this.Force.Layout||this.Force.LayoutStyles),i&&(i===this.Force.Styles||i===this.Force.LayoutStyles));if(i===this.Force.LayoutStyles?t.force=this.Force.Layout:i&&delete t.force,void 0===this.hasNativeSupport){var n=document.createElement("div");["shape-outside","-webkit-shape-outside"].forEach((function(t){n.style.setProperty(t,"content-box"),e.hasNativeSupport=e.hasNativeSupport||n.style.getPropertyValue(t)}))}if(!this.hasNativeSupport||i){if(!this.stylesLoaded||r){this.stylesLoaded=!0,new N((function(i){i.forEach((function(t){for(var e=document.querySelectorAll(t.selector),i=0;i<e.length;i++)e[i].setAttribute("data-"+t.property,t.value)})),e.run(t)}));var s=function(t,e){var i;return function(){var r=this,n=arguments;clearTimeout(i),i=setTimeout((function(){i=null,t.apply(r,n)}),e)}}((function(){e.teardown(),e.run(t)}),300);return void this.scope.addEventListener("resize",s)}for(var o=document.querySelectorAll("[data-shape-outside]"),h=0;h<o.length;h++)this.polyfill(o[h],t)}},I.prototype.teardown=function(){for(var t=document.querySelectorAll("[data-shape-outside]"),e=0;e<t.length;e++)this.removePolyfill(t[e])},I.prototype.Force={Layout:"force-layout",Styles:"force-styles",LayoutStyles:"force-layout-styles"},Object.freeze&&(I.prototype.Force=Object.freeze(I.prototype.Force)),X.prototype.parseUrl=function(t){var e=/url\((.*)\)/.exec(t);return e?e=(e=(e=e[1]).replace(/^['"]/,"")).replace(/['"]$/,""):null},X.prototype.parseBox=function(t,e){var i=/margin-box|border-box|padding-box|content-box/.exec(t);i=i?i[0]:"margin-box";var r=JSON.parse(JSON.stringify(e.borderBox.radii)),n={text:i,x:e.borderBox.x,y:e.borderBox.y,width:e.borderBox.width,height:e.borderBox.height,radii:r};switch(i){case"content-box":C(n,-1,[e.paddings,e.borders]),O(n.radii,-1,[e.paddings,e.borders]);break;case"padding-box":C(n,-1,[e.borders]),O(n.radii,-1,[e.borders]);break;case"border-box":break;case"margin-box":C(n,1,[e.margins]),O(n.radii,1,[e.margins])}return n},X.prototype.printShape=function(){if(this.shape)switch(this.shape.type){case"inset":return"inset("+this.shape.insets.join(" ")+" round "+T(this.shape.radii,0).join(" ")+" / "+T(this.shape.radii,1).join(" ")+")";case"circle":return"circle("+this.shape.r+" at "+this.shape.cx+" "+this.shape.cy+")";case"ellipse":return"ellipse("+this.shape.rx+" "+this.shape.ry+" at "+this.shape.cx+" "+this.shape.cy+")";case"polygon":return"polygon("+this.shape.fillRule+", "+this.shape.points.map((function(t){return t.x+" "+t.y})).join(", ")+")";default:return"not yet implemented for "+this.shape.type}return"no shape specified"},X.prototype.printBox=function(){return this.box?this.box.text+" { x: "+this.box.x+", y: "+this.box.y+", width: "+this.box.width+", height: "+this.box.height+", radii: "+T(this.box.radii,0).join(" ")+" / "+T(this.box.radii,1).join(" ")+" }":"no box specified"},X.prototype.parseBasicShape=function(t,e,i){var r=/(inset|circle|ellipse|polygon)\((.*)\)/.exec(t);if(!r)return null;var n=r[1],s=r[2]?r[2]:"";switch(n){case"inset":return this.parseInset(s,e,i);case"circle":return this.parseCircle(s,e,i);case"ellipse":return this.parseEllipse(s,e,i);case"polygon":return this.parsePolygon(s,e,i);default:return null}},X.prototype.parseInset=function(t,e,i){t=/((?:[^r]|r(?!o))*)?\s*(?:round\s+([^\/]*)(?:\s*\/\s*(.*))?)?/.exec(t);var r,n={type:"inset",insets:[0,0,0,0],radii:[[0,0],[0,0],[0,0],[0,0]]};if(t&&t[1]){var s=t[1].trim();s=s.split(/\s+/),n.insets[0]=s[0],n.insets[1]=s.length>1?s[1]:n.insets[0],n.insets[2]=s.length>2?s[2]:n.insets[0],n.insets[3]=s.length>3?s[3]:n.insets[1],n.insets[0]=i.toPixels(n.insets[0],e.height),n.insets[1]=i.toPixels(n.insets[1],e.width),n.insets[2]=i.toPixels(n.insets[2],e.height),n.insets[3]=i.toPixels(n.insets[3],e.width)}return t&&t[2]&&((r=(r=t[2].trim()).split(/\s+/)).length<2&&r.push(r[0]),r.length<3&&r.push(r[0]),r.length<4&&r.push(r[1]),n.radii=r.map((function(t){return[t=i.toPixels(t,e.width),t]}))),t&&t[3]&&((r=(r=t[3].trim()).split(/\s+/)).length<2&&r.push(r[0]),r.length<3&&r.push(r[0]),r.length<4&&r.push(r[1]),r.forEach((function(t,r){n.radii[r][1]=i.toPixels(t,e.height)}))),n.x=n.insets[3],n.y=n.insets[0],n.width=e.width-(n.insets[1]+n.insets[3]),n.height=e.height-(n.insets[0]+n.insets[2]),n},X.prototype.parseEllipsoid=function(t){var e={};if((t=/((?:[^a]|a(?!t))*)?\s*(?:at\s+(.*))?/.exec(t))&&t[1]){var i=t[1].trim();i=i.split(/\s+/),e.rx=i[0],e.ry=i.length>1?i[1]:i[0]}else e.rx=e.ry="closest-side";var r=[];if(t&&t[2]){var n=t[2].trim();n=n.split(/\s+/);var s=!1;n.forEach((function(t){/\d+/.test(t)&&s?r[r.length-1]+=" "+t:r.push(t),s=/top|bottom|left|right/.test(t)&&n.length>2}))}for(;r.length<2;)r.push("center");if(/top|bottom/.test(r[0])||/left|right/.test(r[1])){var o=r[0];r[0]=r[1],r[1]=o}return e.cx=r[0],e.cy=r[1],e},X.prototype.parseCircle=function(t,e,i){var r=this.parseEllipsoid(t);return r.type="circle",r.cx=B(r.cx,e.width,i),r.cy=B(r.cy,e.height,i),r.r=k(r.rx,[Math.abs(r.cx),Math.abs(e.width-r.cx),Math.abs(r.cy),Math.abs(e.height-r.cy)],Math.sqrt((e.width*e.width+e.height*e.height)/2),i),delete r.rx,delete r.ry,r},X.prototype.parseEllipse=function(t,e,i){var r=this.parseEllipsoid(t);return r.type="ellipse",r.cx=B(r.cx,e.width,i),r.cy=B(r.cy,e.height,i),r.rx=k(r.rx,[Math.abs(r.cx),Math.abs(e.width-r.cx)],e.width,i),r.ry=k(r.ry,[Math.abs(r.cy),Math.abs(e.height-r.cy)],e.height,i),r},X.prototype.parsePolygon=function(t,e,i){var r="nonzero";return(t=t.split(/\s*,\s*/)).length>0&&/nonzero|evenodd/.test(t[0])&&(r=t[0].trim(),t=t.slice(1)),{type:"polygon",fillRule:r,points:t.map((function(t){var r=t.split(/\s+/);return{x:i.toPixels(r[0],e.width),y:i.toPixels(r[1],e.height)}}))}},X.prototype.computeClip=function(t,e){var i=e.margins[3],r=e.margins[0],n=e.margins[3]+e.margins[1],s=e.margins[0]+e.margins[2];return{x:-t.x-i,y:-t.y-r,width:e.borderBox.width+n,height:e.borderBox.height+s}},X.prototype.parseShapeMargin=function(t,e,i){return parseInt(t)?Math.max(0,i.toPixels(t,e.width)):0},X.prototype.parseShapeImageThreshold=function(t){var e=parseFloat(t);return e?Math.min(Math.max(0,e),1):0},z.prototype.load=function(t,e,i){var r=this;if(this.url){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status?(r.cssText=n.responseText,t.call(i,r)):e.call(i,r))},n.open("GET",this.url);try{n.send(null)}catch(t){console.log("An error occurred loading a stylesheet, probably because we can't access the local file system"),e.call(i,r)}}else this.cssText=this.source.textContent,t.call(i,r)},F.prototype.init=function(){var t,e,i=function(){var t,e,i=document,r=[];if("function"==typeof i.querySelectorAll)r=i.querySelectorAll('link[rel="stylesheet"], style'),r=Array.prototype.slice.call(r,0);else{var n=i.getElementsByTagName("link");if(n.length)for(t=0,e=n.length;e>t;t++)"stylesheet"===n[t].getAttribute("rel")&&r.push(n[t]);for(t=0,e=(n=i.getElementsByTagName("style")).length;e>t;t++)r.push(n[t])}return r}(),r=i.length;for(this.queueCount=r,e=0;r>e;e++)t=new z(i[e]),this.stylesheets.push(t),t.load(this.onStyleSheetLoad,this.onStyleSheetError,this)},F.prototype.onStyleSheetLoad=function(){this.queueCount--,this.onComplete.call(this)},F.prototype.onStyleSheetError=function(t){var e,i=this.stylesheets.length;for(e=0;i>e;e++)if(t.source===this.stylesheets[e].source)return this.stylesheets.splice(e,1),this.queueCount--,void this.onComplete.call(this)},F.prototype.onComplete=function(){0===this.queueCount&&this.callback.call(this,this.stylesheets)},N.prototype.onStylesLoaded=function(t){var e,i,r=[];["shape-outside","shape-margin","shape-image-threshold"].forEach((function(n){e=new RegExp("\\s*([^{}]*[^\\s])\\s*{[^\\}]*("+n+")\\s*:\\s*((?:[^;\\(]|\\([^\\)]*\\))*)\\s*;","ig"),t.forEach((function(t){for(;null!==(i=e.exec(t.cssText));)r.push({selector:i[1],property:i[2],value:i[3]})}))})),this.callback(r)},t.ShapesPolyfill=new I(t)}(window)}]);