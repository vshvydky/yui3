YUI.add("value-change",function(E){function K(N){return((E.Lang.isString(N)||E.Lang.isArray(N))?E.all(N):(N instanceof E.Node)?E.all([N._node]):(N instanceof E.NodeList)?N:E.all([N]));}function H(P,N){var O=E.on("available",function(){O.handle=E.on.apply(E,N);},P);return O;}function B(P,O){O[0]=C(P);O.splice(2,1);P.publish(O[0],{broadcast:true,emitFacade:true});var N=M(P),Q=P.on.apply(P,O);return Q;}function C(N){return E.stamp(N)+"-"+I;}function G(N,Q){var P={};for(var O in N){P[O]=J(O,N[O],Q);}return P;}function M(P){var N=C(P);var O=A[N]=A[N]||{count:0,handles:G(L,P)};O.count++;return O;}function J(P,N,O){var Q=E.on(P,N,O);E.after(E.bind(F,null,O,true),Q,"detach");return Q;}function F(P,Q){var O=A[C(P)];if(!O){return;}O.count--;if(Q){O.count=0;}if(O.count<=0){delete A[C(P)];for(var N in O.handles){O.handles[N].detach();}}}var A={},D={on:function(S,R,Q,T){var O=E.Array(arguments,0,true),N=K(Q);if(N.size()===0){return H(Q,O);}O[3]=T=T||((N.size()===1)?N.item(0):N);var P=[];N.each(function(U){var V=B(U,O);P.push(V);E.after(E.bind(F,null,U),V,"detach");});return{evt:P,sub:N,detach:function(){E.Array.each(P,function(U){U.detach();});}};}},I="valueChange",L=(function(){var P={},S={},N={};function U(X,Y){var W=C(X);T(X);S[W]=setInterval(E.bind(V,null,X,Y),50);N[W]=setTimeout(E.bind(T,null,X),10000);}function T(X){var W=C(X);clearTimeout(N[W]);clearInterval(S[W]);}function V(X,Z){var W=C(X);var Y=X.get("value");if(Y===P[W]){return;}X.fire(W,{type:I,value:Y,oldValue:P[W],_event:Z,target:X,currentTarget:X});P[W]=X.get("value");U(X,Z);}function Q(W){if(W.charCode===229||W.charCode===197){U(W.currentTarget,W);}}function R(W){T(W.currentTarget);}function O(W){U(W.currentTarget,W);}return{keyup:Q,blur:R,keydown:O};})();E.Env.evt.plugins[I]=D;if(E.Node){E.Node.DOM_EVENTS[I]=D;}},"@VERSION@",{optional:["event-custom"],requires:["node-base","event-focus"]});