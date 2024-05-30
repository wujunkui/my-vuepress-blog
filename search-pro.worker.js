const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":59,\"nextId\":59,\"documentIds\":{\"0\":\"1\",\"1\":\"2\",\"2\":\"2@0\",\"3\":\"3\",\"4\":\"3@0\",\"5\":\"3@1\",\"6\":\"4\",\"7\":\"4@0\",\"8\":\"4@1\",\"9\":\"5\",\"10\":\"5#markdown-介绍\",\"11\":\"5#markdown-配置\",\"12\":\"5#markdown-扩展\",\"13\":\"5#vuepress-扩展\",\"14\":\"5#主题扩展\",\"15\":\"5#选项卡\",\"16\":\"5#脚注\",\"17\":\"5#导入文件\",\"18\":\"5#tex-语法\",\"19\":\"5#任务列表\",\"20\":\"5#图片增强\",\"21\":\"5#上下角标\",\"22\":\"5#组件\",\"23\":\"5@0\",\"24\":\"5@1\",\"25\":\"6\",\"26\":\"6#页面标题\",\"27\":\"6#页面信息\",\"28\":\"6#页面内容\",\"29\":\"6#组件\",\"30\":\"6@0\",\"31\":\"6@1\",\"32\":\"7\",\"33\":\"7@0\",\"34\":\"8\",\"35\":\"8@0\",\"36\":\"9\",\"37\":\"9@0\",\"38\":\"10\",\"39\":\"10@0\",\"40\":\"10@1\",\"41\":\"11\",\"42\":\"11@0\",\"43\":\"11@1\",\"44\":\"12\",\"45\":\"12@0\",\"46\":\"12@1\",\"47\":\"13\",\"48\":\"13@0\",\"49\":\"14\",\"50\":\"15\",\"51\":\"15@0\",\"52\":\"16\",\"53\":\"16@0\",\"54\":\"17\",\"55\":\"17@0\",\"56\":\"18\",\"57\":\"18@0\",\"58\":\"19\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,9],\"1\":[1],\"2\":[null,null,1],\"3\":[1,18],\"4\":[null,null,1],\"5\":[null,null,1],\"6\":[1,20],\"7\":[null,null,1],\"8\":[null,null,1],\"9\":[2,11],\"10\":[2,8],\"11\":[2,12],\"12\":[2,11],\"13\":[2,10],\"14\":[1,10],\"15\":[1,1],\"16\":[1,2],\"17\":[1,1],\"18\":[2,25],\"19\":[1,5],\"20\":[1,2],\"21\":[1,3],\"22\":[1],\"23\":[null,null,1],\"24\":[null,null,1],\"25\":[1,3],\"26\":[1,19],\"27\":[1,20],\"28\":[1,12],\"29\":[1,13],\"30\":[null,null,1],\"31\":[null,null,2],\"32\":[1],\"33\":[null,null,1],\"34\":[1],\"35\":[null,null,1],\"36\":[1],\"37\":[null,null,1],\"38\":[4,107],\"39\":[null,null,1],\"40\":[null,null,2],\"41\":[2,18],\"42\":[null,null,1],\"43\":[null,null,1],\"44\":[3],\"45\":[null,null,1],\"46\":[null,null,1],\"47\":[1,22],\"48\":[null,null,1],\"49\":[1],\"50\":[1],\"51\":[null,null,1],\"52\":[1],\"53\":[null,null,1],\"54\":[9,58],\"55\":[null,null,1],\"56\":[4,50],\"57\":[null,null,1],\"58\":[1,3]},\"averageFieldLength\":[1.4779453325488117,14.365358324264335,0.826256830585173],\"storedFields\":{\"0\":{\"h\":\"介绍页\",\"t\":[\"Hello everyone!\",\"I want to be a freelancer!\"]},\"1\":{\"h\":\"主要功能与配置演示\"},\"2\":{\"c\":[\"使用指南\"]},\"3\":{\"h\":\"布局与功能禁用\",\"t\":[\"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\",\"本页面就是一个示例，禁用了如下功能:\",\"导航栏\",\"侧边栏\",\"路径导航\",\"页面信息\",\"贡献者\",\"编辑此页链接\",\"更新时间\",\"上一篇/下一篇 链接\",\"评论\",\"页脚\",\"返回顶部按钮\"]},\"4\":{\"c\":[\"使用指南\"]},\"5\":{\"c\":[\"禁用\"]},\"6\":{\"h\":\"布局\",\"t\":[\"布局包括:\",\"导航栏\",\"侧边栏\",\"页脚\",\"同时每个页面包含:\",\"路径导航\",\"标题和页面信息\",\"TOC (文章标题列表)\",\"贡献者、更新时间等页面元信息\",\"评论\",\"主题也带有以下元素:\",\"夜间模式按钮\",\"返回顶部按钮\",\"打印按钮\",\"你可以在主题选项和页面的 frontmatter 中自定义它们。\"]},\"7\":{\"c\":[\"指南\"]},\"8\":{\"c\":[\"布局\"]},\"9\":{\"h\":\"Markdown 展示\",\"t\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},\"10\":{\"h\":\"Markdown 介绍\",\"t\":[\"如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。\"]},\"11\":{\"h\":\"Markdown 配置\",\"t\":[\"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\",\"Frontmatter\",\"Frontmatter 是 VuePress 中很重要的一个概念，请阅读 Frontmatter 介绍 了解详情。\"]},\"12\":{\"h\":\"Markdown 扩展\",\"t\":[\"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展 。\"]},\"13\":{\"h\":\"VuePress 扩展\",\"t\":[\"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\",\"关于这些扩展，请阅读 VuePress 中的 Markdown 扩展。\"]},\"14\":{\"h\":\"主题扩展\",\"t\":[\"通过 vuepress-plugin-md-enhance，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\"]},\"15\":{\"h\":\"选项卡\",\"t\":[\"查看详情\"]},\"16\":{\"h\":\"脚注\",\"t\":[\"此文字有脚注^first.\",\"查看详情\"]},\"17\":{\"h\":\"导入文件\",\"t\":[\"查看详情\"]},\"18\":{\"h\":\"TeX 语法\",\"t\":[\"$$ \\\\frac {\\\\partial^r} {\\\\partial \\\\omega^r} \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) = \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) \\\\left{(\\\\log y)^r + \\\\sum_{i=1}^r \\\\frac {(-1)^i r \\\\cdots (r-i+1) (\\\\log y)^{r-i}} {\\\\omega^i} \\\\right} $$\",\"查看详情\"]},\"19\":{\"h\":\"任务列表\",\"t\":[\" 计划 1\",\" 计划 2\",\"查看详情\"]},\"20\":{\"h\":\"图片增强\",\"t\":[\"支持为图片设置颜色模式和大小。\",\"查看详情\"]},\"21\":{\"h\":\"上下角标\",\"t\":[\"19th H2O\",\"查看详情\"]},\"22\":{\"h\":\"组件\"},\"23\":{\"c\":[\"使用指南\"]},\"24\":{\"c\":[\"Markdown\"]},\"25\":{\"h\":\"页面配置\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"26\":{\"h\":\"页面标题\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"Markdown 中的第一个 H1 标题会被视为页面标题。\",\"你可以在 Markdown 的 Frontmatter 中设置页面标题。\",\"--- title: 页面标题 ---\"]},\"27\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"28\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"图片引入\",\"你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\"]},\"29\":{\"h\":\"组件\",\"t\":[\"每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"你也可以创建并引入你自己的组件。\"]},\"30\":{\"c\":[\"使用指南\"]},\"31\":{\"c\":[\"页面配置\",\"使用指南\"]},\"32\":{\"h\":\"画画\"},\"33\":{\"c\":[\"画画\"]},\"34\":{\"h\":\"开始学习画画啦\"},\"35\":{\"c\":[\"画画\"]},\"36\":{\"h\":\"文章\"},\"37\":{\"c\":[\"使用指南\"]},\"38\":{\"h\":\"服务器安装 HTTPS 证书-免费版\",\"t\":[\"Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates:\",\"sudo apt install software-properties-common sudo add-apt-repository universe sudo apt update sudo apt install certbot python3-certbot-nginx\",\"To obtain a certificate, you can now use the Nginx Certbot plugin, by issuing the following command. The certificate can cover multiple domains (100 maximum) by appending additional d flags.\",\"sudo certbot --nginx certonly -d YOURDOMAIN -d www.YOURDOMAIN\",\"After entering your email address and agreeing to the terms and conditions, the Certbot client will generate the requested certificate. Make a note of where the certificate file fullchain.pem and key file privkey.pem are created, as you will need them later.\",\"Successfully received certificate. Certificate is saved at: /etc/letsencrypt/live/ashleyrich.com/fullchain.pem Key is saved at: /etc/letsencrypt/live/ashleyrich.com/privkey.pem\",\"Certbot will handle renewing all your certificates automatically, but you can test automatic renewals with the following command:\",\"sudo certbot renew --dry-run\"]},\"39\":{\"c\":[\"服务器\"]},\"40\":{\"c\":[\"技术\",\"运维\"]},\"41\":{\"h\":\"一行代码安装&配置brew国内源\",\"t\":[\"brew经常卡住？教你一行代码配置brew国内源。\",\"/bin/zsh -c \\\"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\\\"\"]},\"42\":{\"c\":[\"mac\"]},\"43\":{\"c\":[\"mac\"]},\"44\":{\"h\":\"vuepress 安装 unocss\"},\"45\":{\"c\":[\"vuepress\"]},\"46\":{\"c\":[\"vuepress\"]},\"47\":{\"h\":\"vuepress搭建自己的博客网站\",\"t\":[\"之前想过用wordpress搭建博客+知识+小商品网站，但是不会php（😢），而且还是想试试新东西，所以还是尝试下vuepress吧。\",\"这是个持续更新的文章，用于记录我用vuepress搭建博客网站的过程中遇到的坑和我的一些想法。\",\"首先的第一个坑就是，当我创建这个markdown之后，发现在首页和侧边栏都找不到他，理论上应该自动添加到侧边栏的文章栏目下，而且我给这个文章加了星标sticky: true配置，理论应该出现在首页，但是却并没有出现，很奇怪。\",\"然后我发现重启一下，也就是ctrl + C之后再启动开发者模式，新文章就出现了。\"]},\"48\":{\"c\":[\"使用指南\"]},\"49\":{\"h\":\"小商品\"},\"50\":{\"h\":\"绘画练习资料\"},\"51\":{\"c\":[\"小商品\"]},\"52\":{\"h\":\"Python开发\"},\"53\":{\"c\":[\"python\"]},\"54\":{\"h\":\"Python 中 os._exit()和 sys.exit()以及 eixt()函数的区别\",\"t\":[\"在 Python 3.x 中，os._exit(), sys.exit(), 和 exit() 是三个不同的终止程序执行的函数，它们之间有一些区别：\",\"os._exit()：这个函数是 os 模块中的一个函数，它用于直接终止程序的执行，并且不会触发任何清理活动或关闭程序中的资源。它不会抛出任何异常或执行任何 finally 子句。使用 os._exit()会立即终止程序，不会返回到调用它的地方。\",\"import os try: os._exit() except Exception as e: print(e) finally: print(\\\"finnally\\\") print(\\\"os exit\\\")\",\"不会打印任何东西就退出了\",\"sys.exit()：这个函数在 sys 模块中，当被调用时，会引发 SystemExit 异常。它可以传递一个可选的整数参数作为退出状态码，默认值为 0。使用 sys.exit()会引发异常，这意味着它可以被捕获和处理。\",\"import sys try: sys.exit() except Exception as e: print(e) finally: print(\\\"finally\\\") print(\\\"sys exit\\\")\",\"finally\",\"exit()：这个函数是内置函数，它实际上是 sys.exit()的别名，用法和效果与 sys.exit()相同。\",\"综上所述，os._exit() 是一个不可捕获的底层终止程序执行的函数，而 sys.exit() 和 exit() 是抛出 SystemExit 异常来终止程序执行的函数，它们可以被捕获和处理。通常情况下，推荐使用 sys.exit() 或 exit() 来退出程序，以便在需要时进行清理操作.\"]},\"55\":{\"c\":[\"python\"]},\"56\":{\"h\":\"Windows 下 Poetry 更改虚拟环境路径\",\"t\":[\"修改虚拟环境位置\",\"$ poetry config cache-dir F:\\\\cache $ poetry config --list cache-dir = \\\"F:\\\\\\\\cache\\\" experimental.system-git-client = false installer.max-workers = null installer.modern-installation = true installer.no-binary = null installer.parallel = true keyring.enabled = true solver.lazy-wheel = true virtualenvs.create = true virtualenvs.in-project = null virtualenvs.options.always-copy = false virtualenvs.options.no-pip = false virtualenvs.options.no-setuptools = false virtualenvs.options.system-site-packages = false virtualenvs.path = \\\"{cache-dir}\\\\\\\\virtualenvs\\\" # F:\\\\cache\\\\virtualenvs virtualenvs.prefer-active-python = false virtualenvs.prompt = \\\"{project_name}-py{python_version}\\\" warnings.export = true\"]},\"57\":{\"c\":[\"python开发\"]},\"58\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"404\",{\"1\":{\"58\":1}}],[\"version\",{\"1\":{\"56\":1}}],[\"virtualenvs\",{\"1\":{\"56\":11}}],[\"vue\",{\"1\":{\"29\":2}}],[\"vuepress搭建自己的博客网站\",{\"0\":{\"47\":1}}],[\"vuepress\",{\"0\":{\"13\":1,\"44\":1},\"1\":{\"9\":2,\"11\":2,\"12\":1,\"13\":2,\"14\":1,\"28\":1},\"2\":{\"45\":1,\"46\":1}}],[\"修改虚拟环境位置\",{\"1\":{\"56\":1}}],[\"更改虚拟环境路径\",{\"0\":{\"56\":1}}],[\"更新时间等页面元信息\",{\"1\":{\"6\":1}}],[\"更新时间\",{\"1\":{\"3\":1}}],[\"下\",{\"0\":{\"56\":1}}],[\"下一篇\",{\"1\":{\"3\":1}}],[\"来退出程序\",{\"1\":{\"54\":1}}],[\"来解析\",{\"1\":{\"12\":1}}],[\"或\",{\"1\":{\"54\":1}}],[\"推荐使用\",{\"1\":{\"54\":1}}],[\"通常情况下\",{\"1\":{\"54\":1}}],[\"通过\",{\"1\":{\"11\":1,\"14\":1}}],[\"而\",{\"1\":{\"54\":1}}],[\"而且我给这个文章加了星标sticky\",{\"1\":{\"47\":1}}],[\"而且还是想试试新东西\",{\"1\":{\"47\":1}}],[\"综上所述\",{\"1\":{\"54\":1}}],[\"相同\",{\"1\":{\"54\":1}}],[\"用法和效果与\",{\"1\":{\"54\":1}}],[\"用于记录我用vuepress搭建博客网站的过程中遇到的坑和我的一些想法\",{\"1\":{\"47\":1}}],[\"0\",{\"1\":{\"54\":1}}],[\"默认值为\",{\"1\":{\"54\":1}}],[\"异常来终止程序执行的函数\",{\"1\":{\"54\":1}}],[\"异常\",{\"1\":{\"54\":1}}],[\"当被调用时\",{\"1\":{\"54\":1}}],[\"当我创建这个markdown之后\",{\"1\":{\"47\":1}}],[\"模块中\",{\"1\":{\"54\":1}}],[\"模块中的一个函数\",{\"1\":{\"54\":1}}],[\"不会打印任何东西就退出了\",{\"1\":{\"54\":1}}],[\"不会返回到调用它的地方\",{\"1\":{\"54\":1}}],[\"会引发异常\",{\"1\":{\"54\":1}}],[\"会引发\",{\"1\":{\"54\":1}}],[\"会立即终止程序\",{\"1\":{\"54\":1}}],[\"会使用\",{\"1\":{\"12\":1}}],[\"使用\",{\"1\":{\"54\":2}}],[\"使用指南\",{\"1\":{\"27\":2},\"2\":{\"2\":1,\"4\":1,\"23\":1,\"30\":1,\"31\":1,\"37\":1,\"48\":1}}],[\"子句\",{\"1\":{\"54\":1}}],[\"并且不会触发任何清理活动或关闭程序中的资源\",{\"1\":{\"54\":1}}],[\"它们可以被捕获和处理\",{\"1\":{\"54\":1}}],[\"它们之间有一些区别\",{\"1\":{\"54\":1}}],[\"它实际上是\",{\"1\":{\"54\":1}}],[\"它可以传递一个可选的整数参数作为退出状态码\",{\"1\":{\"54\":1}}],[\"它不会抛出任何异常或执行任何\",{\"1\":{\"54\":1}}],[\"它用于直接终止程序的执行\",{\"1\":{\"54\":1}}],[\"x\",{\"1\":{\"54\":1}}],[\"3\",{\"1\":{\"54\":1}}],[\"在\",{\"1\":{\"54\":1}}],[\"在页面禁用功能与布局\",{\"1\":{\"3\":1}}],[\"函数的区别\",{\"0\":{\"54\":1}}],[\"以及\",{\"0\":{\"54\":1}}],[\"以便在需要时进行清理操作\",{\"1\":{\"54\":1}}],[\"以便\",{\"1\":{\"9\":1}}],[\"绘画练习资料\",{\"0\":{\"50\":1}}],[\"小商品\",{\"0\":{\"49\":1},\"2\":{\"51\":1}}],[\"新文章就出现了\",{\"1\":{\"47\":1}}],[\"也就是ctrl\",{\"1\":{\"47\":1}}],[\"然后我发现重启一下\",{\"1\":{\"47\":1}}],[\"很奇怪\",{\"1\":{\"47\":1}}],[\"但是却并没有出现\",{\"1\":{\"47\":1}}],[\"但是不会php\",{\"1\":{\"47\":1}}],[\"理论应该出现在首页\",{\"1\":{\"47\":1}}],[\"理论上应该自动添加到侧边栏的文章栏目下\",{\"1\":{\"47\":1}}],[\"发现在首页和侧边栏都找不到他\",{\"1\":{\"47\":1}}],[\"首先的第一个坑就是\",{\"1\":{\"47\":1}}],[\"这意味着它可以被捕获和处理\",{\"1\":{\"54\":1}}],[\"这意味着你可以在\",{\"1\":{\"29\":1}}],[\"这个函数在\",{\"1\":{\"54\":1}}],[\"这个函数是内置函数\",{\"1\":{\"54\":1}}],[\"这个函数是\",{\"1\":{\"54\":1}}],[\"这是个持续更新的文章\",{\"1\":{\"47\":1}}],[\"所以还是尝试下vuepress吧\",{\"1\":{\"47\":1}}],[\"😢\",{\"1\":{\"47\":1}}],[\"之前想过用wordpress搭建博客+知识+小商品网站\",{\"1\":{\"47\":1}}],[\"安装\",{\"0\":{\"44\":1}}],[\"git\",{\"1\":{\"56\":1}}],[\"gitee\",{\"1\":{\"41\":1}}],[\"generate\",{\"1\":{\"38\":1}}],[\"$\",{\"1\":{\"41\":1,\"56\":2}}],[\"$$\",{\"1\":{\"18\":2}}],[\"zsh\",{\"1\":{\"41\":1}}],[\"教你一行代码配置brew国内源\",{\"1\":{\"41\":1}}],[\"一行代码安装\",{\"0\":{\"41\":1}}],[\"运维\",{\"2\":{\"40\":1}}],[\"技术\",{\"2\":{\"40\":1}}],[\"服务器\",{\"2\":{\"39\":1}}],[\"服务器安装\",{\"0\":{\"38\":1}}],[\"keyring\",{\"1\":{\"56\":1}}],[\"key\",{\"1\":{\"38\":2}}],[\"dir\",{\"1\":{\"56\":3}}],[\"dry\",{\"1\":{\"38\":1}}],[\"d\",{\"1\":{\"38\":3}}],[\"domains\",{\"1\":{\"38\":1}}],[\"binary\",{\"1\":{\"56\":1}}],[\"bin\",{\"1\":{\"41\":1}}],[\"brew经常卡住\",{\"1\":{\"41\":1}}],[\"but\",{\"1\":{\"38\":1}}],[\"by\",{\"1\":{\"38\":2}}],[\"be\",{\"1\":{\"0\":1,\"26\":1}}],[\"name\",{\"1\":{\"56\":1}}],[\"null\",{\"1\":{\"56\":3}}],[\"need\",{\"1\":{\"38\":1}}],[\"not\",{\"1\":{\"58\":1}}],[\"note\",{\"1\":{\"38\":1}}],[\"no\",{\"1\":{\"56\":3}}],[\"now\",{\"1\":{\"38\":2}}],[\"nginx\",{\"1\":{\"38\":3}}],[\"unocss\",{\"0\":{\"44\":1}}],[\"universe\",{\"1\":{\"38\":1}}],[\"use\",{\"1\":{\"38\":1}}],[\"update\",{\"1\":{\"38\":1}}],[\"options\",{\"1\":{\"56\":4}}],[\"open\",{\"1\":{\"38\":1}}],[\"os\",{\"0\":{\"54\":1},\"1\":{\"54\":8}}],[\"of\",{\"1\":{\"38\":1}}],[\"obtain\",{\"1\":{\"38\":1}}],[\"omega^i\",{\"1\":{\"18\":1}}],[\"omega^r\",{\"1\":{\"18\":1}}],[\"omega\",{\"1\":{\"18\":4}}],[\"create\",{\"1\":{\"56\":1}}],[\"created\",{\"1\":{\"38\":1}}],[\"cache\",{\"1\":{\"56\":6}}],[\"can\",{\"1\":{\"38\":3}}],[\"c之后再启动开发者模式\",{\"1\":{\"47\":1}}],[\"cunkai\",{\"1\":{\"41\":1}}],[\"curl\",{\"1\":{\"41\":1}}],[\"c\",{\"1\":{\"41\":1}}],[\"client\",{\"1\":{\"38\":1,\"56\":1}}],[\"copy\",{\"1\":{\"56\":1}}],[\"config\",{\"1\":{\"56\":2}}],[\"conditions\",{\"1\":{\"38\":1}}],[\"com\",{\"1\":{\"38\":2,\"41\":1}}],[\"command\",{\"1\":{\"38\":2}}],[\"common\",{\"1\":{\"38\":1}}],[\"cover\",{\"1\":{\"38\":1}}],[\"certonly\",{\"1\":{\"38\":1}}],[\"certificate\",{\"1\":{\"38\":6}}],[\"certificates\",{\"1\":{\"38\":2}}],[\"certbot\",{\"1\":{\"38\":8}}],[\"cdots\",{\"1\":{\"18\":1}}],[\"site\",{\"1\":{\"56\":1}}],[\"setuptools\",{\"1\":{\"56\":1}}],[\"system\",{\"1\":{\"56\":2}}],[\"systemexit\",{\"1\":{\"54\":2}}],[\"sys\",{\"0\":{\"54\":1},\"1\":{\"54\":11}}],[\"sh\",{\"1\":{\"41\":1}}],[\"saved\",{\"1\":{\"38\":2}}],[\"solver\",{\"1\":{\"56\":1}}],[\"software\",{\"1\":{\"38\":1}}],[\"source\",{\"1\":{\"38\":1}}],[\"successfully\",{\"1\":{\"38\":1}}],[\"sudo\",{\"1\":{\"38\":6}}],[\"sum\",{\"1\":{\"18\":1}}],[\"s\",{\"1\":{\"38\":2}}],[\"免费版\",{\"0\":{\"38\":1}}],[\"证书\",{\"0\":{\"38\":1}}],[\"开始学习画画啦\",{\"0\":{\"34\":1}}],[\"画画\",{\"0\":{\"32\":1},\"2\":{\"33\":1,\"35\":1}}],[\"每个\",{\"1\":{\"29\":1}}],[\"进行引用\",{\"1\":{\"28\":1}}],[\"图片引入\",{\"1\":{\"28\":1}}],[\"图片增强\",{\"0\":{\"20\":1}}],[\"标签为\",{\"1\":{\"27\":1}}],[\"标题会被视为页面标题\",{\"1\":{\"26\":1}}],[\"标题和页面信息\",{\"1\":{\"6\":1}}],[\"分类为\",{\"1\":{\"27\":1}}],[\"日\",{\"1\":{\"27\":1}}],[\"月\",{\"1\":{\"27\":1}}],[\"年\",{\"1\":{\"27\":1}}],[\"写作日期为\",{\"1\":{\"27\":1}}],[\"作者设置为\",{\"1\":{\"27\":1}}],[\"的别名\",{\"1\":{\"54\":1}}],[\"的\",{\"1\":{\"26\":1,\"27\":1}}],[\"warnings\",{\"1\":{\"56\":1}}],[\"want\",{\"1\":{\"0\":1}}],[\"wheel\",{\"1\":{\"56\":1}}],[\"where\",{\"1\":{\"38\":1}}],[\"workers\",{\"1\":{\"56\":1}}],[\"windows\",{\"0\":{\"56\":1}}],[\"with\",{\"1\":{\"38\":1}}],[\"will\",{\"1\":{\"26\":1,\"38\":3}}],[\"www\",{\"1\":{\"38\":1}}],[\"false\",{\"1\":{\"56\":6}}],[\"f\",{\"1\":{\"56\":3}}],[\"fssl\",{\"1\":{\"41\":1}}],[\"fullchain\",{\"1\":{\"38\":2}}],[\"finnally\",{\"1\":{\"54\":1}}],[\"finally\",{\"1\":{\"54\":5}}],[\"file\",{\"1\":{\"38\":2}}],[\"first\",{\"1\":{\"26\":1}}],[\"flags\",{\"1\":{\"38\":1}}],[\"found\",{\"1\":{\"58\":1}}],[\"following\",{\"1\":{\"38\":2}}],[\"for\",{\"1\":{\"38\":1}}],[\"free\",{\"1\":{\"38\":1}}],[\"freelancer\",{\"1\":{\"0\":1}}],[\"frac\",{\"1\":{\"18\":4}}],[\"frontmatter\",{\"1\":{\"3\":1,\"6\":1,\"11\":4,\"26\":1,\"27\":1}}],[\"注释之前的内容被视为文章摘要\",{\"1\":{\"25\":1}}],[\"组件\",{\"0\":{\"22\":1,\"29\":1},\"1\":{\"29\":1}}],[\"homebrew\",{\"1\":{\"41\":1}}],[\"homebrewcn\",{\"1\":{\"41\":1}}],[\"hope\",{\"1\":{\"27\":1}}],[\"handle\",{\"1\":{\"38\":1}}],[\"https\",{\"0\":{\"38\":1},\"1\":{\"41\":1}}],[\"h1\",{\"1\":{\"26\":2}}],[\"h2o\",{\"1\":{\"21\":1}}],[\"hello\",{\"1\":{\"0\":1}}],[\"上下角标\",{\"0\":{\"21\":1}}],[\"上一篇\",{\"1\":{\"3\":1}}],[\"支持为图片设置颜色模式和大小\",{\"1\":{\"20\":1}}],[\"2020\",{\"1\":{\"27\":1}}],[\"2\",{\"1\":{\"19\":1}}],[\"计划\",{\"1\":{\"19\":2}}],[\"任务列表\",{\"0\":{\"19\":1}}],[\"raw\",{\"1\":{\"41\":1}}],[\"run\",{\"1\":{\"38\":1}}],[\"renew\",{\"1\":{\"38\":1}}],[\"renewals\",{\"1\":{\"38\":1}}],[\"renewing\",{\"1\":{\"38\":1}}],[\"received\",{\"1\":{\"38\":1}}],[\"requested\",{\"1\":{\"38\":1}}],[\"repository\",{\"1\":{\"38\":1}}],[\"regarded\",{\"1\":{\"26\":1}}],[\"r\",{\"1\":{\"18\":3}}],[\"right\",{\"1\":{\"18\":3}}],[\"^\",{\"1\":{\"18\":1}}],[\"^i\",{\"1\":{\"18\":1}}],[\"^r\",{\"1\":{\"18\":2}}],[\"100\",{\"1\":{\"38\":1}}],[\"19th\",{\"1\":{\"21\":1}}],[\"1\",{\"1\":{\"18\":1,\"19\":1,\"27\":2,\"29\":2}}],[\"+\",{\"1\":{\"18\":1,\"29\":1,\"47\":1}}],[\"your\",{\"1\":{\"38\":2}}],[\"yourdomain\",{\"1\":{\"38\":2}}],[\"you\",{\"1\":{\"38\":3}}],[\"y\",{\"1\":{\"18\":2}}],[\"y^\",{\"1\":{\"18\":2}}],[\"lazy\",{\"1\":{\"56\":1}}],[\"later\",{\"1\":{\"38\":1}}],[\"list\",{\"1\":{\"56\":1}}],[\"live\",{\"1\":{\"38\":2}}],[\"letsencrypt\",{\"1\":{\"38\":2}}],[\"let\",{\"1\":{\"38\":2}}],[\"left\",{\"1\":{\"18\":3}}],[\"log\",{\"1\":{\"18\":2}}],[\"=\",{\"1\":{\"18\":1,\"56\":18}}],[\"py\",{\"1\":{\"56\":1}}],[\"python\",{\"0\":{\"54\":1},\"1\":{\"54\":1,\"56\":2},\"2\":{\"53\":1,\"55\":1}}],[\"python开发\",{\"0\":{\"52\":1},\"2\":{\"57\":1}}],[\"python3\",{\"1\":{\"38\":1}}],[\"pip\",{\"1\":{\"56\":1}}],[\"poetry\",{\"0\":{\"56\":1},\"1\":{\"56\":2}}],[\"prefer\",{\"1\":{\"56\":1}}],[\"prompt\",{\"1\":{\"56\":1}}],[\"project\",{\"1\":{\"56\":2}}],[\"properties\",{\"1\":{\"38\":1}}],[\"print\",{\"1\":{\"54\":6}}],[\"privkey\",{\"1\":{\"38\":2}}],[\"pem\",{\"1\":{\"38\":4}}],[\"public\",{\"1\":{\"28\":1}}],[\"path\",{\"1\":{\"56\":1}}],[\"packages\",{\"1\":{\"56\":1}}],[\"parallel\",{\"1\":{\"56\":1}}],[\"partial\",{\"1\":{\"18\":1}}],[\"partial^r\",{\"1\":{\"18\":1}}],[\"page\",{\"1\":{\"26\":1}}],[\"plugin\",{\"1\":{\"14\":1,\"38\":1}}],[\"true\",{\"1\":{\"56\":6}}],[\"true配置\",{\"1\":{\"47\":1}}],[\"try\",{\"1\":{\"54\":2}}],[\"test\",{\"1\":{\"38\":1}}],[\"terms\",{\"1\":{\"38\":1}}],[\"tex\",{\"0\":{\"18\":1}}],[\"title\",{\"1\":{\"26\":3}}],[\"them\",{\"1\":{\"38\":1}}],[\"the\",{\"1\":{\"26\":1,\"38\":9}}],[\"tool\",{\"1\":{\"38\":1}}],[\"toc\",{\"1\":{\"6\":1}}],[\"to\",{\"1\":{\"0\":1,\"38\":2}}],[\"导入文件\",{\"0\":{\"17\":1}}],[\"导航栏\",{\"1\":{\"3\":1,\"6\":1}}],[\"此文字有脚注^first\",{\"1\":{\"16\":1}}],[\"脚注\",{\"0\":{\"16\":1}}],[\"查看详情\",{\"1\":{\"15\":1,\"16\":1,\"17\":1,\"18\":1,\"19\":1,\"20\":1,\"21\":1}}],[\"选项卡\",{\"0\":{\"15\":1}}],[\"提供更加丰富的写作功能\",{\"1\":{\"14\":1}}],[\"e\",{\"1\":{\"54\":4}}],[\"export\",{\"1\":{\"56\":1}}],[\"experimental\",{\"1\":{\"56\":1}}],[\"exception\",{\"1\":{\"54\":2}}],[\"except\",{\"1\":{\"54\":2}}],[\"exit\",{\"0\":{\"54\":2},\"1\":{\"54\":19}}],[\"eixt\",{\"0\":{\"54\":1}}],[\"etc\",{\"1\":{\"38\":2}}],[\"email\",{\"1\":{\"38\":1}}],[\"enabled\",{\"1\":{\"56\":1}}],[\"entering\",{\"1\":{\"38\":1}}],[\"encrypt\",{\"1\":{\"38\":1}}],[\"enhance\",{\"1\":{\"14\":1}}],[\"everyone\",{\"1\":{\"0\":1}}],[\"modern\",{\"1\":{\"56\":1}}],[\"more\",{\"1\":{\"25\":1}}],[\"multiple\",{\"1\":{\"38\":1}}],[\"max\",{\"1\":{\"56\":1}}],[\"maximum\",{\"1\":{\"38\":1}}],[\"mac\",{\"2\":{\"42\":1,\"43\":1}}],[\"master\",{\"1\":{\"41\":1}}],[\"make\",{\"1\":{\"38\":1}}],[\"managing\",{\"1\":{\"38\":1}}],[\"markdown\",{\"0\":{\"9\":1,\"10\":1,\"11\":1,\"12\":1},\"1\":{\"9\":2,\"10\":3,\"11\":1,\"12\":3,\"13\":2,\"14\":1,\"26\":3,\"27\":1,\"28\":2,\"29\":2},\"2\":{\"24\":1}}],[\"ms\",{\"1\":{\"27\":1}}],[\"md\",{\"1\":{\"14\":1}}],[\"关于这些扩展\",{\"1\":{\"13\":1}}],[\"语法\",{\"0\":{\"18\":1},\"1\":{\"14\":1,\"29\":1}}],[\"语法进行了扩展\",{\"1\":{\"13\":1}}],[\"语法扩展\",{\"1\":{\"12\":1}}],[\"对于\",{\"1\":{\"28\":1}}],[\"对\",{\"1\":{\"13\":1}}],[\"为了丰富文档写作\",{\"1\":{\"13\":1}}],[\"为每个\",{\"1\":{\"11\":1}}],[\"插件来实现\",{\"1\":{\"12\":1}}],[\"内容\",{\"1\":{\"12\":1}}],[\"扩展\",{\"0\":{\"12\":1,\"13\":1},\"1\":{\"13\":1}}],[\"了解详情\",{\"1\":{\"11\":1}}],[\"请使用绝对链接\",{\"1\":{\"28\":1}}],[\"请阅读\",{\"1\":{\"11\":1,\"13\":1}}],[\"请先阅读\",{\"1\":{\"10\":1}}],[\"中\",{\"0\":{\"54\":1},\"1\":{\"54\":1}}],[\"中使用\",{\"1\":{\"29\":1}}],[\"中设置页面信息\",{\"1\":{\"27\":1}}],[\"中设置页面标题\",{\"1\":{\"26\":1}}],[\"中的第一个\",{\"1\":{\"26\":1}}],[\"中的\",{\"1\":{\"13\":1}}],[\"中很重要的一个概念\",{\"1\":{\"11\":1}}],[\"中自定义它们\",{\"1\":{\"6\":1}}],[\"是抛出\",{\"1\":{\"54\":1}}],[\"是一个不可捕获的底层终止程序执行的函数\",{\"1\":{\"54\":1}}],[\"是三个不同的终止程序执行的函数\",{\"1\":{\"54\":1}}],[\"是\",{\"1\":{\"11\":1}}],[\"配置brew国内源\",{\"0\":{\"41\":1}}],[\"配置\",{\"0\":{\"11\":1}}],[\"演示\",{\"1\":{\"10\":1}}],[\"和\",{\"0\":{\"54\":1},\"1\":{\"10\":1,\"27\":1,\"54\":2}}],[\"还不会编写\",{\"1\":{\"10\":1}}],[\"如果你是一个新手\",{\"1\":{\"10\":1}}],[\"介绍\",{\"0\":{\"10\":1},\"1\":{\"10\":1,\"11\":1}}],[\"介绍页\",{\"0\":{\"0\":1}}],[\"可以根据文件结构将它们转换为不同的页面\",{\"1\":{\"9\":1}}],[\"你也可以创建并引入你自己的组件\",{\"1\":{\"29\":1}}],[\"你应该创建和编写\",{\"1\":{\"9\":1}}],[\"你可以将图片和\",{\"1\":{\"28\":1}}],[\"你可以自由在这里书写你的\",{\"1\":{\"28\":1}}],[\"你可以在\",{\"1\":{\"26\":1,\"27\":1}}],[\"你可以在主题选项和页面的\",{\"1\":{\"6\":1}}],[\"你可以使用它轻松生成文档或博客站点\",{\"1\":{\"9\":1}}],[\"你可以通过设置页面的\",{\"1\":{\"3\":1}}],[\"因此可以借助于\",{\"1\":{\"12\":1}}],[\"因此\",{\"1\":{\"9\":1}}],[\"文章\",{\"0\":{\"36\":1}}],[\"文章标题列表\",{\"1\":{\"6\":1}}],[\"文件夹的图片\",{\"1\":{\"28\":1}}],[\"文件放置在一起使用相对路径进行引用\",{\"1\":{\"28\":1}}],[\"文件\",{\"1\":{\"9\":1}}],[\"文件生成页面\",{\"1\":{\"9\":1}}],[\"展示\",{\"0\":{\"9\":1}}],[\"指南\",{\"2\":{\"7\":1}}],[\"打印按钮\",{\"1\":{\"6\":1}}],[\"夜间模式按钮\",{\"1\":{\"6\":1}}],[\"主题扩展了更多\",{\"1\":{\"14\":1}}],[\"主题扩展\",{\"0\":{\"14\":1}}],[\"主题也带有以下元素\",{\"1\":{\"6\":1}}],[\"主要从\",{\"1\":{\"9\":1}}],[\"主要功能与配置演示\",{\"0\":{\"1\":1}}],[\"同时每个页面包含\",{\"1\":{\"6\":1}}],[\"布局包括\",{\"1\":{\"6\":1}}],[\"布局\",{\"0\":{\"6\":1},\"2\":{\"8\":1}}],[\"布局与功能禁用\",{\"0\":{\"3\":1}}],[\"禁用\",{\"2\":{\"5\":1}}],[\"禁用了如下功能\",{\"1\":{\"3\":1}}],[\"返回顶部按钮\",{\"1\":{\"3\":1,\"6\":1}}],[\"页面都会被转换为一个\",{\"1\":{\"29\":1}}],[\"页面内容\",{\"0\":{\"28\":1}}],[\"页面标题\",{\"0\":{\"26\":1},\"1\":{\"26\":1}}],[\"页面配置\",{\"0\":{\"25\":1},\"1\":{\"27\":1},\"2\":{\"31\":1}}],[\"页面引入配置\",{\"1\":{\"11\":1}}],[\"页面信息\",{\"0\":{\"27\":1},\"1\":{\"3\":1}}],[\"页脚\",{\"1\":{\"3\":1,\"6\":1}}],[\"评论\",{\"1\":{\"3\":1,\"6\":1}}],[\"链接\",{\"1\":{\"3\":1}}],[\"编辑此页链接\",{\"1\":{\"3\":1}}],[\"贡献者\",{\"1\":{\"3\":1,\"6\":1}}],[\"路径导航\",{\"1\":{\"3\":1,\"6\":1}}],[\"侧边栏\",{\"1\":{\"3\":1,\"6\":1}}],[\"本页面就是一个示例\",{\"1\":{\"3\":1}}],[\"active\",{\"1\":{\"56\":1}}],[\"always\",{\"1\":{\"56\":1}}],[\"all\",{\"1\":{\"38\":1}}],[\"automatic\",{\"1\":{\"38\":1}}],[\"automatically\",{\"1\":{\"38\":1}}],[\"at\",{\"1\":{\"38\":2}}],[\"are\",{\"1\":{\"38\":1}}],[\"agreeing\",{\"1\":{\"38\":1}}],[\"and\",{\"1\":{\"38\":3}}],[\"after\",{\"1\":{\"38\":1}}],[\"appending\",{\"1\":{\"38\":1}}],[\"apt\",{\"1\":{\"38\":4}}],[\"address\",{\"1\":{\"38\":1}}],[\"additional\",{\"1\":{\"38\":1}}],[\"add\",{\"1\":{\"38\":1}}],[\"ashleyrich\",{\"1\":{\"38\":2}}],[\"as\",{\"1\":{\"26\":1,\"38\":1,\"54\":2}}],[\"a\",{\"1\":{\"0\":1,\"38\":2}}],[\"import\",{\"1\":{\"54\":2}}],[\"is\",{\"1\":{\"38\":2}}],[\"issuing\",{\"1\":{\"38\":1}}],[\"installation\",{\"1\":{\"56\":1}}],[\"installer\",{\"1\":{\"56\":4}}],[\"install\",{\"1\":{\"38\":3}}],[\"in\",{\"1\":{\"26\":1,\"56\":1}}],[\"i+1\",{\"1\":{\"18\":1}}],[\"i=1\",{\"1\":{\"18\":1}}],[\"it\",{\"1\":{\"12\":2}}],[\"i\",{\"1\":{\"0\":1,\"18\":1,\"29\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
