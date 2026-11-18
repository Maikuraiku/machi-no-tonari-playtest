var si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ql=0,sc=1,Yl=2;var rc=1,$l=2,En=3,On=0,Ge=1,We=2,kn=0,gi=1,oc=2,ac=3,cc=4,Zl=5,jn=100,Jl=101,Kl=102,jl=103,Ql=104,th=200,eh=201,nh=202,ih=203,zr=204,Br=205,sh=206,rh=207,oh=208,ah=209,ch=210,lh=211,hh=212,uh=213,dh=214,co=0,lo=1,ho=2,xi=3,uo=4,fo=5,po=6,mo=7,lc=0,fh=1,ph=2,Hn=0,mh=1,gh=2,xh=3,go=4,_h=5,yh=6,vh=7;var hc=300,Si=301,wi=302,xo=303,_o=304,nr=306,_i=1e3,Kn=1001,kr=1002,De=1003,Mh=1004;var ir=1005;var Qe=1006,yo=1007;var Tn=1008;var _n=1009,uc=1010,dc=1011,cs=1012,vo=1013,oi=1014,cn=1015,ls=1016,Mo=1017,bo=1018,hs=1020,fc=35902,pc=35899,mc=1021,gc=1022,ze=1023,ji=1026,us=1027,xc=1028,So=1029,_c=1030,wo=1031;var Eo=1033,sr=33776,rr=33777,or=33778,ar=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Io=36196,Po=37492,Do=37496,Lo=37808,Uo=37809,No=37810,Oo=37811,Fo=37812,zo=37813,Bo=37814,ko=37815,Ho=37816,Vo=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,$o=36494,Zo=36495,Jo=36283,Ko=36284,jo=36285,Qo=36286;var Ps=2300,Hr=2301,Fr=2302,Ya=2400,$a=2401,Za=2402;var bh=3200,Sh=3201;var yc=0,wh=1,Vn="",Me="srgb",yi="srgb-linear",Ds="linear",re="srgb";var mi=7680;var Ja=519,Eh=512,Th=513,Ah=514,vc=515,Rh=516,Ch=517,Ih=518,Ph=519,Ka=35044;var Mc="300 es",mn=2e3,Ls=2001;var bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=1234567,Cs=Math.PI/180,Qi=180/Math.PI;function ds(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function bc(n,t){return(n%t+t)%t}function sd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function rd(n,t,e){return n!==t?(e-n)/(t-n):0}function Is(n,t,e){return(1-e)*n+e*t}function od(n,t,e,i){return Is(n,t,1-Math.exp(-e*i))}function ad(n,t=1){return t-Math.abs(bc(n,t*2)-t)}function cd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ld(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ud(n,t){return n+Math.random()*(t-n)}function dd(n){return n*(.5-Math.random())}function fd(n){n!==void 0&&(yl=n);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pd(n){return n*Cs}function md(n){return n*Qi}function gd(n){return(n&n-1)===0&&n!==0}function xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _d(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yd(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),x=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*x,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*x,a*l);break;case"ZYZ":n.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Sc={DEG2RAD:Cs,RAD2DEG:Qi,generateUUID:ds,clamp:Qt,euclideanModulo:bc,mapLinear:sd,inverseLerp:rd,lerp:Is,damp:od,pingpong:ad,smoothstep:cd,smootherstep:ld,randInt:hd,randFloat:ud,randFloatSpread:dd,seededRandom:fd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:xd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:yd,normalize:He,denormalize:Ji},Gt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=_;return}if(d!==_||c!==f||l!==p||h!==x){let m=1-a,u=c*f+l*p+h*x+d*_,y=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){let E=Math.sqrt(M),A=Math.atan2(E,u*y);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}let g=a*y;if(c=c*m+f*g,l=l*m+p*g,h=h*m+x*g,d=d*m+_*g,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*d+c*p-l*f,t[e+1]=c*x+h*f+l*d-a*p,t[e+2]=l*x+h*p+a*f-c*d,t[e+3]=h*x-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),f=c(i/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"YZX":this._x=f*h*d+l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d-f*p*x;break;case"XZY":this._x=f*h*d-l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new N,vl=new an,Zt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],x=i[8],_=s[0],m=s[3],u=s[6],y=s[1],M=s[4],g=s[7],E=s[2],A=s[5],T=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*m+a*M+c*A,r[6]=o*u+a*g+c*T,r[1]=l*_+h*y+d*E,r[4]=l*m+h*M+d*A,r[7]=l*u+h*g+d*T,r[2]=f*_+p*y+x*E,r[5]=f*m+p*M+x*A,r[8]=f*u+p*g+x*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,x=e*d+i*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=d*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea=new Zt;function wc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dh(){let n=Us("canvas");return n.style.display="block",n}var Ml={};function ts(n){n in Ml||(Ml[n]=!0,console.warn(n))}function Lh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){let n={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yi]:{primaries:t,whitePoint:i,transfer:Ds,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:i,transfer:re,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),n}var ne=vd();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zi,Vr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zi===void 0&&(zi=Us("canvas")),zi.width=t.width,zi.height=t.height;let s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nn(e[i]/255)*255):e[i]=Nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Md=0,es=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bd=0,Aa=new N,Ve=class n extends bn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Kn,s=Kn,r=Qe,o=Tn,a=ze,c=_n,l=n.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ds(),this.name="",this.source=new es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=hc;Ve.DEFAULT_ANISOTROPY=1;var de=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],x=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,g=(p+1)/2,E=(u+1)/2,A=(h+f)/4,T=(d+_)/4,C=(x+m)/4;return M>g&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=T/i):g>E?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=A/s,r=C/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=T/r,s=C/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gr=class extends bn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new Ve(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new es(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Gr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ns=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wr=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),gr.subVectors(this.max,Ss),Bi.subVectors(t.a,Ss),ki.subVectors(t.b,Ss),Hi.subVectors(t.c,Ss),Wn.subVectors(ki,Bi),Xn.subVectors(Hi,ki),ui.subVectors(Bi,Hi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ui.z,ui.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ui.z,0,-ui.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ui.y,ui.x,0];return!Ra(e,Bi,ki,Hi,gr)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Bi,ki,Hi,gr))?!1:(xr.crossVectors(Wn,Xn),e=[xr.x,xr.y,xr.z],Ra(e,Bi,ki,Hi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},In=[new N,new N,new N,new N,new N,new N,new N,new N],dn=new N,mr=new Qn,Bi=new N,ki=new N,Hi=new N,Wn=new N,Xn=new N,ui=new N,Ss=new N,gr=new N,xr=new N,di=new N;function Ra(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);let a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),h=i.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Sd=new Qn,ws=new N,Ca=new N,Fn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Ca)),this.expandByPoint(ws.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pn=new N,Ia=new N,_r=new N,qn=new N,Pa=new N,yr=new N,Da=new N,vi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ia.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Ia);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=qn.dot(this.direction),c=-qn.dot(_r),l=qn.lengthSq(),h=Math.abs(1-o*o),d,f,p,x;if(h>0)if(d=o*c-a,f=o*a-c,x=r*h,d>=0)if(f>=-x)if(f<=x){let _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ia).addScaledVector(_r,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,i,s,r){Pa.subVectors(e,t),yr.subVectors(i,t),Da.crossVectors(Pa,yr);let o=this.direction.dot(Da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);let c=a*this.direction.dot(yr.crossVectors(qn,yr));if(c<0)return null;let l=a*this.direction.dot(Pa.cross(qn));if(l<0||c+l>o)return null;let h=-a*qn.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class n{constructor(t,e,i,s,r,o,a,c,l,h,d,f,p,x,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,d,f,p,x,_,m)}set(t,e,i,s,r,o,a,c,l,h,d,f,p,x,_,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=x,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,x=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+x*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,x=l*h,_=l*d;e[0]=f+_*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,x=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*d,x=a*h,_=a*d;e[0]=c*h,e[4]=x*l-p,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=x*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+x,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*c,p=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Ed)}lookAt(t,e,i){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Yn.crossVectors(i,Ke),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Yn.crossVectors(i,Ke)),Yn.normalize(),vr.crossVectors(Ke,Yn),s[0]=Yn.x,s[4]=vr.x,s[8]=Ke.x,s[1]=Yn.y,s[5]=vr.y,s[9]=Ke.y,s[2]=Yn.z,s[6]=vr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],x=i[2],_=i[6],m=i[10],u=i[14],y=i[3],M=i[7],g=i[11],E=i[15],A=s[0],T=s[4],C=s[8],b=s[12],S=s[1],P=s[5],D=s[9],L=s[13],O=s[2],z=s[6],W=s[10],q=s[14],H=s[3],ct=s[7],ft=s[11],wt=s[15];return r[0]=o*A+a*S+c*O+l*H,r[4]=o*T+a*P+c*z+l*ct,r[8]=o*C+a*D+c*W+l*ft,r[12]=o*b+a*L+c*q+l*wt,r[1]=h*A+d*S+f*O+p*H,r[5]=h*T+d*P+f*z+p*ct,r[9]=h*C+d*D+f*W+p*ft,r[13]=h*b+d*L+f*q+p*wt,r[2]=x*A+_*S+m*O+u*H,r[6]=x*T+_*P+m*z+u*ct,r[10]=x*C+_*D+m*W+u*ft,r[14]=x*b+_*L+m*q+u*wt,r[3]=y*A+M*S+g*O+E*H,r[7]=y*T+M*P+g*z+E*ct,r[11]=y*C+M*D+g*W+E*ft,r[15]=y*b+M*L+g*q+E*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],x=t[3],_=t[7],m=t[11],u=t[15];return x*(+r*c*d-s*l*d-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+i*o*p+r*a*h-i*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],x=t[12],_=t[13],m=t[14],u=t[15],y=d*m*l-_*f*l+_*c*p-a*m*p-d*c*u+a*f*u,M=x*f*l-h*m*l-x*c*p+o*m*p+h*c*u-o*f*u,g=h*_*l-x*d*l+x*a*p-o*_*p-h*a*u+o*d*u,E=x*d*c-h*_*c-x*a*f+o*_*f+h*a*m-o*d*m,A=e*y+i*M+s*g+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=y*T,t[1]=(_*f*r-d*m*r-_*s*p+i*m*p+d*s*u-i*f*u)*T,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*u+i*c*u)*T,t[3]=(d*c*r-a*f*r-d*s*l+i*f*l+a*s*p-i*c*p)*T,t[4]=M*T,t[5]=(h*m*r-x*f*r+x*s*p-e*m*p-h*s*u+e*f*u)*T,t[6]=(x*c*r-o*m*r-x*s*l+e*m*l+o*s*u-e*c*u)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*T,t[8]=g*T,t[9]=(x*d*r-h*_*r-x*i*p+e*_*p+h*i*u-e*d*u)*T,t[10]=(o*_*r-x*a*r+x*i*l-e*_*l-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*i*l+e*d*l+o*i*p-e*a*p)*T,t[12]=E*T,t[13]=(h*_*s-x*d*s+x*i*f-e*_*f-h*i*m+e*d*m)*T,t[14]=(x*a*s-o*_*s-x*i*c+e*_*c+o*i*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*i*c-e*d*c-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,x=r*d,_=o*h,m=o*d,u=a*d,y=c*l,M=c*h,g=c*d,E=i.x,A=i.y,T=i.z;return s[0]=(1-(_+u))*E,s[1]=(p+g)*E,s[2]=(x-M)*E,s[3]=0,s[4]=(p-g)*A,s[5]=(1-(f+u))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(x+M)*T,s[9]=(m-y)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let l=1/r,h=1/o,d=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=mn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),x,_;if(c)x=r/(o-r),_=o*r/(o-r);else if(a===mn)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ls)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=mn,c=!1){let l=this.elements,h=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s),x,_;if(c)x=1/(o-r),_=o/(o-r);else if(a===mn)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ls)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Vi=new N,fn=new me,wd=new N(0,0,0),Ed=new N(1,1,1),Yn=new N,vr=new N,Ke=new N,wl=new me,El=new an,gn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Td=0,Tl=new N,Gi=new an,Dn=new me,Mr=new N,Es=new N,Ad=new N,Rd=new an,Al=new N(1,0,0),Rl=new N(0,1,0),Cl=new N(0,0,1),Il={type:"added"},Cd={type:"removed"},Wi={type:"childadded",child:null},La={type:"childremoved",child:null},Le=class n extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new gn,i=new an,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Es,Mr,this.up):Dn.lookAt(Mr,Es,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Il),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Il),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Le.DEFAULT_UP=new N(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new N,Ln=new N,Ua=new N,Un=new N,Xi=new N,qi=new N,Pl=new N,Na=new N,Oa=new N,Fa=new N,za=new de,Ba=new de,ka=new de,Jn=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Ln.subVectors(i,e),Ua.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(Ln),c=pn.dot(Ua),l=Ln.dot(Ln),h=Ln.dot(Ua),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return za.setScalar(0),Ba.setScalar(0),ka.setScalar(0),za.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,i),ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(Ba,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Ln.subVectors(t,e),pn.cross(Ln).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Xi.subVectors(s,i),qi.subVectors(r,i),Na.subVectors(t,i);let c=Xi.dot(Na),l=qi.dot(Na);if(c<=0&&l<=0)return e.copy(i);Oa.subVectors(t,s);let h=Xi.dot(Oa),d=qi.dot(Oa);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Xi,o);Fa.subVectors(t,r);let p=Xi.dot(Fa),x=qi.dot(Fa);if(x>=0&&p<=x)return e.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(i).addScaledVector(qi,a);let m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return Pl.subVectors(r,s),a=(d-h)/(d-h+(p-x)),e.copy(s).addScaledVector(Pl,a);let u=1/(m+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},br={h:0,s:0,l:0};function Ha(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=bc(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ha(o,r,t+1/3),this.g=Ha(o,r,t),this.b=Ha(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let i=Uh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ne.workingToColorSpace(Oe.copy(this),t),Math.round(Qt(Oe.r*255,0,255))*65536+Math.round(Qt(Oe.g*255,0,255))*256+Math.round(Qt(Oe.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Oe.copy(this),e);let i=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Me){ne.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,s=Oe.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(br);let i=Is($n.h,br.h,e),s=Is($n.s,br.s,e),r=Is($n.l,br.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Jt;Jt.NAMES=Uh;var Id=0,zn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=gi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=Br,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zr&&(i.blendSrc=this.blendSrc),this.blendDst!==Br&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xn=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new N,Sr=new Gt,Pd=0,Pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ka,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}};var Fs=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zs=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ee=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dd=0,rn=new me,Va=new Le,Yi=new N,je=new Qn,Ts=new Qn,Ie=new N,Ye=class n extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?zs:Fs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(je.min,Ts.min),je.expandByPoint(Ie),Ie.addVectors(je.max,Ts.max),je.expandByPoint(Ie)):(je.expandByPoint(Ts.min),je.expandByPoint(Ts.max))}je.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Ie.add(Yi)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new N,c[C]=new N;let l=new N,h=new N,d=new N,f=new Gt,p=new Gt,x=new Gt,_=new N,m=new N;function u(C,b,S){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),h.sub(l),d.sub(l),p.sub(f),x.sub(f);let P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),a[C].add(_),a[b].add(_),a[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){let S=y[C],P=S.start,D=S.count;for(let L=P,O=P+D;L<O;L+=3)u(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new N,g=new N,E=new N,A=new N;function T(C){E.fromBufferAttribute(s,C),A.copy(E);let b=a[C];M.copy(b),M.sub(E.multiplyScalar(E.dot(b))).normalize(),g.crossVectors(A,b);let P=g.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,b=y.length;C<b;++C){let S=y[C],P=S.start,D=S.count;for(let L=P,O=P+D;L<O;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let x=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let u=0;u<h;u++)f[x++]=l[p++]}return new Pe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=new me,fi=new vi,wr=new Fn,Ll=new N,Er=new N,Tr=new N,Ar=new N,Ga=new N,Rr=new N,Ul=new N,Cr=new N,be=class extends Le{constructor(t=new Ye,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Ga.fromBufferAttribute(d,t),o?Rr.addScaledVector(Ga,h):Rr.addScaledVector(Ga.sub(e),h))}e.add(Rr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(wr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(wr,Ll)===null||fi.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Dl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],u=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,E=M;g<E;g+=3){let A=a.getX(g),T=a.getX(g+1),C=a.getX(g+2);s=Ir(this,u,t,i,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){let y=a.getX(m),M=a.getX(m+1),g=a.getX(m+2);s=Ir(this,o,t,i,l,h,d,y,M,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],u=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,E=M;g<E;g+=3){let A=g,T=g+1,C=g+2;s=Ir(this,u,t,i,l,h,d,A,T,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){let y=m,M=m+1,g=m+2;s=Ir(this,o,t,i,l,h,d,y,M,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ld(n,t,e,i,s,r,o,a){let c;if(t.side===Ge?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:n}}function Ir(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Er),n.getVertexPosition(c,Tr),n.getVertexPosition(l,Ar);let h=Ld(n,t,e,i,Er,Tr,Ar,Ul);if(h){let d=new N;Jn.getBarycoord(Ul,Er,Tr,Ar,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,c,l,d,new Gt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,c,l,d,new Gt)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,c,l,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};Jn.getNormal(Er,Tr,Ar,f.normal),h.face=f,h.barycoord=d}return h}var ns=class n extends Ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2));function x(_,m,u,y,M,g,E,A,T,C,b){let S=g/T,P=E/C,D=g/2,L=E/2,O=A/2,z=T+1,W=C+1,q=0,H=0,ct=new N;for(let ft=0;ft<W;ft++){let wt=ft*P-L;for(let yt=0;yt<z;yt++){let zt=yt*S-D;ct[_]=zt*y,ct[m]=wt*M,ct[u]=O,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[u]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(yt/T),d.push(1-ft/C),q+=1}}for(let ft=0;ft<C;ft++)for(let wt=0;wt<T;wt++){let yt=f+wt+z*ft,zt=f+wt+z*(ft+1),Dt=f+(wt+1)+z*(ft+1),mt=f+(wt+1)+z*ft;c.push(yt,zt,mt),c.push(zt,Dt,mt),H+=6}a.addGroup(p,H,b),p+=H,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ei(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Be(n){let t={};for(let e=0;e<n.length;e++){let i=Ei(n[e]);for(let s in i)t[s]=i[s]}return t}function Ud(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ec(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Nh={clone:Ei,merge:Be},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Bs=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new N,Nl=new Gt,Ol=new Gt,Fe=class extends Bs{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Nl,Ol),e.subVectors(Ol,Nl)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Zi=1,Xr=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe($i,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Fe($i,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Fe($i,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Fe($i,Zi,t,e);a.layers=this.layers,this.add(a);let c=new Fe($i,Zi,t,e);c.layers=this.layers,this.add(c);let l=new Fe($i,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ks=class extends Ve{constructor(t=[],e=Si,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qr=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ns(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:kn});r.uniforms.tEquirect.value=e;let o=new be(s,r),a=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Qe),new Xr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},pe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fd={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Hs=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ti=class extends Ve{constructor(t=null,e=1,i=1,s,r,o,a,c,l=De,h=De,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=new N,zd=new N,Bd=new Zt,on=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Wa.subVectors(i,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Fn,kd=new Gt(.5,.5),Pr=new N,ss=class{constructor(t=new on,e=new on,i=new on,s=new on,r=new on,o=new on){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],x=r[8],_=r[9],m=r[10],u=r[11],y=r[12],M=r[13],g=r[14],E=r[15];if(s[0].setComponents(l-o,p-h,u-x,E-y).normalize(),s[1].setComponents(l+o,p+h,u+x,E+y).normalize(),s[2].setComponents(l+a,p+d,u+_,E+M).normalize(),s[3].setComponents(l-a,p-d,u-_,E-M).normalize(),i)s[4].setComponents(c,f,m,g).normalize(),s[5].setComponents(l-c,p-f,u-m,E-g).normalize();else if(s[4].setComponents(l-c,p-f,u-m,E-g).normalize(),e===mn)s[5].setComponents(l+c,p+f,u+m,E+g).normalize();else if(e===Ls)s[5].setComponents(c,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);let e=kd.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rs=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yr=new N,$r=new N,Fl=new me,As=new vi,Dr=new Fn,Xa=new N,zl=new N,Zr=class extends Le{constructor(t=new Ye,e=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),$r.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Yr.distanceTo($r);t.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Fl.copy(s).invert(),As.copy(t.ray).applyMatrix4(Fl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let u=h.getX(_),y=h.getX(_+1),M=Lr(this,t,As,c,u,y,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(x-1),m=h.getX(p),u=Lr(this,t,As,c,_,m,x-1);u&&e.push(u)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let u=Lr(this,t,As,c,_,_+1,_);u&&e.push(u)}if(this.isLineLoop){let _=Lr(this,t,As,c,x-1,p,x-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lr(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Yr.fromBufferAttribute(a,s),$r.fromBufferAttribute(a,r),e.distanceSqToSegment(Yr,$r,Xa,zl)>i)return;Xa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Xa);if(!(l<t.near||l>t.far))return{distance:l,point:zl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Bl=new N,kl=new N,Gs=class extends Zr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Bl.fromBufferAttribute(e,s),kl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bl.distanceTo(kl);t.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ei=class extends Ve{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ws=class extends Ve{constructor(t,e,i=oi,s,r,o,a=De,c=De,l,h=ji,d=1){if(h!==ji&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};function Hd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Oh(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=qd(n,t,r,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let f=e;f<s;f+=e){let p=n[f],x=n[f+1];p<a&&(a=p),x<c&&(c=x),p>h&&(h=p),x>d&&(d=x)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return qs(r,o,e,a,c,l,0),o}function Oh(n,t,e,i,s){let r;if(s===sf(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Hl(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Hl(o/i|0,n[o],n[o+1],r);return r&&os(r,r.next)&&($s(r),r=r.next),r}function Mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(os(e,e.next)||_e(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Kd(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Gd(n,i,s,r):Vd(n)){t.push(c.i,n.i,l.i),$s(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Wd(Mi(n),t),qs(n,t,e,i,s,r,2)):o===2&&Xd(n,t,e,i,s,r):qs(Mi(n),t,e,i,s,r,1);break}}}function Vd(n){let t=n.prev,e=n,i=n.next;if(_e(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),x=i.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=p&&Rs(s,a,r,c,o,l,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Gd(n,t,e,i){let s=n.prev,r=n,o=n.next;if(_e(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,p=Math.min(a,c,l),x=Math.min(h,d,f),_=Math.max(a,c,l),m=Math.max(h,d,f),u=ja(p,x,t,e,i),y=ja(_,m,t,e,i),M=n.prevZ,g=n.nextZ;for(;M&&M.z>=u&&g&&g.z<=y;){if(M.x>=p&&M.x<=_&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Rs(a,h,c,d,l,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,g.x>=p&&g.x<=_&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&Rs(a,h,c,d,l,f,g.x,g.y)&&_e(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;M&&M.z>=u;){if(M.x>=p&&M.x<=_&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Rs(a,h,c,d,l,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=_&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&Rs(a,h,c,d,l,f,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Wd(n,t){let e=n;do{let i=e.prev,s=e.next.next;!os(i,s)&&zh(i,e,e.next,s)&&Ys(i,s)&&Ys(s,i)&&(t.push(i.i,e.i,s.i),$s(e),$s(e.next),e=n=s),e=e.next}while(e!==n);return Mi(e)}function Xd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tf(o,a)){let c=Bh(o,a);o=Mi(o,o.next),c=Mi(c,c.next),qs(o,t,e,i,s,r,0),qs(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function qd(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Oh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Qd(l))}s.sort(Yd);for(let r=0;r<s.length;r++)e=$d(s[r],e);return e}function Yd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function $d(n,t){let e=Zd(n,t);if(!e)return t;let i=Bh(e,n);return Mi(i,i.next),Mi(e,e.next)}function Zd(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(os(n,e))return e;do{if(os(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Fh(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Ys(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Jd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Jd(n,t){return _e(n.prev,n,t.prev)<0&&_e(t.next,n,n.next)<0}function Kd(n,t,e,i){let s=n;do s.z===0&&(s.z=ja(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jd(s)}function jd(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function ja(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Fh(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Rs(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Fh(n,t,e,i,s,r,o,a)}function tf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ef(n,t)&&(Ys(n,t)&&Ys(t,n)&&nf(n,t)&&(_e(n.prev,n,t.prev)||_e(n,t.prev,t))||os(n,t)&&_e(n.prev,n,n.next)>0&&_e(t.prev,t,t.next)>0)}function _e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function os(n,t){return n.x===t.x&&n.y===t.y}function zh(n,t,e,i){let s=Nr(_e(n,t,e)),r=Nr(_e(n,t,i)),o=Nr(_e(e,i,n)),a=Nr(_e(e,i,t));return!!(s!==r&&o!==a||s===0&&Ur(n,e,t)||r===0&&Ur(n,i,t)||o===0&&Ur(e,n,i)||a===0&&Ur(e,t,i))}function Ur(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Nr(n){return n>0?1:n<0?-1:0}function ef(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ys(n,t){return _e(n.prev,n,n.next)<0?_e(n,t,n.next)>=0&&_e(n,n.prev,t)>=0:_e(n,t,n.prev)<0||_e(n,n.next,t)<0}function nf(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bh(n,t){let e=Qa(n.i,n.x,n.y),i=Qa(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Hl(n,t,e,i){let s=Qa(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qa(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sf(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var tc=class{static triangulate(t,e,i=2){return Hd(t,e,i)}},Zs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Vl(t),Gl(i,t);let o=t.length;e.forEach(Vl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Gl(i,e[c]);let a=tc.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Vl(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Bn=class n extends Ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],x=[],_=[],m=[];for(let u=0;u<h;u++){let y=u*f-o;for(let M=0;M<l;M++){let g=M*d-r;x.push(g,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){let M=y+l*u,g=y+l*(u+1),E=y+1+l*(u+1),A=y+1+l*u;p.push(M,g,A),p.push(g,E,A)}this.setIndex(p),this.setAttribute("position",new Ee(x,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var wn=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jr=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kr=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function rf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var bi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jr=class extends bi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ya,endingEnd:Ya}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $a:r=t,a=2*e-i;break;case Za:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $a:o=t,c=2*i-e;break;case Za:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),_=x*x,m=_*x,u=-f*m+2*f*_-f*x,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,M=(-1-p)*m+(1.5+p)*_+.5*x,g=p*m-p*_;for(let E=0;E!==a;++E)r[E]=u*o[h+E]+y*o[l+E]+M*o[c+E]+g*o[d+E];return r}},Qr=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},to=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case Hr:e=this.InterpolantFactoryMethodLinear;break;case Fr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Fr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&rf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let x=0;x!==i;++x){let _=e[d+x];if(_!==e[f+x]||_!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Hr;var ni=class extends en{constructor(t,e,i){super(t,e,i)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ps;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends en{constructor(t,e,i,s){super(t,e,i,s)}};eo.prototype.ValueTypeName="color";var no=class extends en{constructor(t,e,i,s){super(t,e,i,s)}};no.prototype.ValueTypeName="number";var io=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Js=class extends en{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends en{constructor(t,e,i){super(t,e,i)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ps;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends en{constructor(t,e,i,s){super(t,e,i,s)}};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],x=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kh=new ro,oo=class{constructor(t){this.manager=t!==void 0?t:kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},js=class extends Ks{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qa=new me,Wl=new N,Xl=new N,ec=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qs=class extends Bs{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nc=class extends ec{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ao=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tc="\\[\\]\\.:\\/",of=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",af="[^"+Tc.replace("\\.","")+"]",cf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),lf=/(WCOD+)?/.source.replace("WCOD",af),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),df=new RegExp("^"+cf+lf+hf+uf+"$"),ff=["material","materials","bones","map"],ic=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(of,"")}static parseTrackName(t){let e=df.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ff.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=ic;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var as=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var er=class extends bn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Rc(n,t,e,i){let s=pf(i);switch(e){case mc:return n*t;case xc:return n*t/s.components*s.byteLength;case So:return n*t/s.components*s.byteLength;case _c:return n*t*2/s.components*s.byteLength;case wo:return n*t*2/s.components*s.byteLength;case gc:return n*t*3/s.components*s.byteLength;case ze:return n*t*4/s.components*s.byteLength;case Eo:return n*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(n,16)*Math.max(t,8)/4;case To:case Ro:return Math.max(n,8)*Math.max(t,8)/2;case Io:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yo:case $o:case Zo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jo:case Ko:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pf(n){switch(n){case _n:case uc:return{byteLength:1,components:1};case cs:case dc:case ls:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case oi:case vo:case cn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function gf(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){let x=d[f],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){let _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:xf,alphahash_pars_fragment:_f,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:wf,batching_pars_vertex:Ef,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:If,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Of,color_pars_fragment:Ff,color_pars_vertex:zf,color_vertex:Bf,common:kf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:$f,envmap_fragment:Zf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Kf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:lp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:cp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:_p,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:wp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Ip,morphnormal_vertex:Pp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Lp,normal_fragment_begin:Up,normal_fragment_maps:Np,normal_pars_fragment:Op,normal_pars_vertex:Fp,normal_vertex:zp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Gp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:$p,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:cm,tonemapping_pars_fragment:lm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:xm,backgroundCube_vert:_m,backgroundCube_frag:ym,cube_vert:vm,cube_frag:Mm,depth_vert:bm,depth_frag:Sm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Im,meshbasic_frag:Pm,meshlambert_vert:Dm,meshlambert_frag:Lm,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Om,meshnormal_frag:Fm,meshphong_vert:zm,meshphong_frag:Bm,meshphysical_vert:km,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:$m,sprite_frag:Zm},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},An={basic:{uniforms:Be([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Be([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Be([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Be([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Be([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Be([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Be([Et.points,Et.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Be([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Be([Et.common,Et.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Be([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Be([Et.sprite,Et.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Be([Et.common,Et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Be([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Be([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ta={r:0,b:0,g:0},Ti=new gn,Jm=new me;function Km(n,t,e,i,s,r,o){let a=new Jt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function x(M){let g=M.isScene===!0?M.background:null;return g&&g.isTexture&&(g=(M.backgroundBlurriness>0?e:t).get(g)),g}function _(M){let g=!1,E=x(M);E===null?u(a,c):E&&E.isColor&&(u(E,1),g=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,g){let E=x(g);E&&(E.isCubeTexture||E.mapping===nr)?(h===void 0&&(h=new be(new ns(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ei(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(g.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Ti)),h.material.toneMapped=ne.getTransfer(E.colorSpace)!==re,(d!==E||f!==E.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new be(new Bn(2,2),new tn({name:"BackgroundMaterial",uniforms:Ei(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ne.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,g){M.getRGB(ta,Ec(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,g,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,g=1){a.set(M),c=g,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:_,addToRenderList:m,dispose:y}}function jm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,P,D,L,O){let z=!1,W=d(L,D,P);r!==W&&(r=W,l(r.object)),z=p(S,L,D,O),z&&x(S,L,D,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,g(S,P,D,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,P,D){let L=D.wireframe===!0,O=i[S.id];O===void 0&&(O={},i[S.id]=O);let z=O[P.id];z===void 0&&(z={},O[P.id]=z);let W=z[L];return W===void 0&&(W=f(c()),z[L]=W),W}function f(S){let P=[],D=[],L=[];for(let O=0;O<e;O++)P[O]=0,D[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,P,D,L){let O=r.attributes,z=P.attributes,W=0,q=D.getAttributes();for(let H in q)if(q[H].location>=0){let ft=O[H],wt=z[H];if(wt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function x(S,P,D,L){let O={},z=P.attributes,W=0,q=D.getAttributes();for(let H in q)if(q[H].location>=0){let ft=z[H];ft===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));let wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),O[H]=wt,W++}r.attributes=O,r.attributesNum=W,r.index=L}function _(){let S=r.newAttributes;for(let P=0,D=S.length;P<D;P++)S[P]=0}function m(S){u(S,0)}function u(S,P){let D=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;D[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),O[S]!==P&&(n.vertexAttribDivisor(S,P),O[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let D=0,L=P.length;D<L;D++)P[D]!==S[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function M(S,P,D,L,O,z,W){W===!0?n.vertexAttribIPointer(S,P,D,O,z):n.vertexAttribPointer(S,P,D,L,O,z)}function g(S,P,D,L){_();let O=L.attributes,z=D.getAttributes(),W=P.defaultAttributeValues;for(let q in z){let H=z[q];if(H.location>=0){let ct=O[q];if(ct===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){let ft=ct.normalized,wt=ct.itemSize,yt=t.get(ct);if(yt===void 0)continue;let zt=yt.buffer,Dt=yt.type,mt=yt.bytesPerElement,J=Dt===n.INT||Dt===n.UNSIGNED_INT||ct.gpuType===vo;if(ct.isInterleavedBufferAttribute){let nt=ct.data,bt=nt.stride,Ft=ct.offset;if(nt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)u(H.location+Nt,nt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)m(H.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let Nt=0;Nt<H.locationSize;Nt++)M(H.location+Nt,wt/H.locationSize,Dt,ft,bt*mt,(Ft+wt/H.locationSize*Nt)*mt,J)}else{if(ct.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)u(H.location+nt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let nt=0;nt<H.locationSize;nt++)M(H.location+nt,wt/H.locationSize,Dt,ft,wt*mt,wt/H.locationSize*nt*mt,J)}}else if(W!==void 0){let ft=W[q];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(H.location,ft);break;case 3:n.vertexAttrib3fv(H.location,ft);break;case 4:n.vertexAttrib4fv(H.location,ft);break;default:n.vertexAttrib1fv(H.location,ft)}}}}y()}function E(){C();for(let S in i){let P=i[S];for(let D in P){let L=P[D];for(let O in L)h(L[O].object),delete L[O];delete P[D]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;let P=i[S.id];for(let D in P){let L=P[D];for(let O in L)h(L[O].object),delete L[O];delete P[D]}delete i[S.id]}function T(S){for(let P in i){let D=i[P];if(D[S.id]===void 0)continue;let L=D[S.id];for(let O in L)h(L[O].object),delete L[O];delete D[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Qm(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];e.update(p,i,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_]*f[_];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function t0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ze&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==_n&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!C)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=x>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:g,vertexTextures:E,maxSamples:A}}function e0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new on,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let y=r?0:i,M=y*4,g=u.clippingState||null;c.value=g,g=h(x,f,M,p);for(let E=0;E!==M;++E)g[E]=e[E];u.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,x){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let u=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,g=p;M!==_;++M,g+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,g),m[g+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function n0(n){let t=new WeakMap;function e(o,a){return a===xo?o.mapping=Si:a===_o&&(o.mapping=wi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xo||a===_o)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qr(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ps=4,Hh=[.125,.215,.35,.446,.526,.582],Ci=20,Cc=new Qs,Vh=new Jt,Ic=null,Pc=0,Dc=0,Lc=!1,Ri=(1+Math.sqrt(5))/2,fs=1/Ri,Gh=[new N(-Ri,fs,0),new N(Ri,fs,0),new N(-fs,0,Ri),new N(fs,0,Ri),new N(0,Ri,-fs),new N(0,Ri,fs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],i0=new N,ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=i0}=r;Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Pc,Dc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:ls,format:ze,colorSpace:yi,depthBuffer:!1},s=Wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,t,e)}return s}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Cc)}_sceneToCubeUV(t,e,i,s,r){let c=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Vh),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new xn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new be(new ns,_),u=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,u=!0):(_.color.copy(Vh),u=!0);for(let M=0;M<6;M++){let g=M%3;g===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):g===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let E=this._cubeSize;ea(s,g*E,M>2?E:0,E,E),d.setRenderTarget(s),u&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Si||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ea(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Cc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new be(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);let u=[],y=0;for(let T=0;T<Ci;++T){let C=T/_,b=Math.exp(-C*C/2);u.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<u.length;T++)u[T]=u[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-i;let g=this._sizeLods[s],E=3*g*(s>M-ps?s-M+ps:0),A=4*(this._cubeSize-g);ea(e,E,A,3*g,2*g),c.setRenderTarget(e),c.render(d,Cc)}};function s0(n){let t=[],e=[],i=[],s=n,r=n-ps+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ps?c=Hh[o-n+ps-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,_=3,m=2,u=1,y=new Float32Array(_*x*p),M=new Float32Array(m*x*p),g=new Float32Array(u*x*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,C=A>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(b,_*x*A),M.set(f,m*x*A);let S=[A,A,A,A,A,A];g.set(S,u*x*A)}let E=new Ye;E.setAttribute("position",new Pe(y,_)),E.setAttribute("uv",new Pe(M,m)),E.setAttribute("faceIndex",new Pe(g,u)),t.push(E),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wh(n,t,e){let i=new Sn(n,t,e);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function r0(n,t,e){let i=new Float32Array(Ci),s=new N(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Xh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function qh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===xo||c===_o,h=c===Si||c===wi;if(l||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ia(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ia(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function a0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function c0(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,x=d.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let M=0,g=y.length;M<g;M+=3){let E=y[M+0],A=y[M+1],T=y[M+2];f.push(E,A,A,T,T,E)}}else if(x!==void 0){let y=x.array;_=x.version;for(let M=0,g=y.length/3-1;M<g;M+=3){let E=M+0,A=M+1,T=M+2;f.push(E,A,A,T,T,E)}}else return;let m=new(wc(f)?zs:Fs)(f,1);m.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function l0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,f*o,x),e.update(p,i,x))}function h(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];e.update(m,i,1)}function d(f,p,x,_){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,x);let u=0;for(let y=0;y<x;y++)u+=p[y]*_[y];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function h0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function u0(n,t,e){let i=new WeakMap,s=new de;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let g=a.attributes.position.count*M,E=1;g>t.maxTextureSize&&(E=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let A=new Float32Array(g*E*4*d),T=new Ns(A,g,E,d);T.type=cn,T.needsUpdate=!0;let C=M*4;for(let S=0;S<d;S++){let P=m[S],D=u[S],L=y[S],O=g*E*4*S;for(let z=0;z<P.count;z++){let W=z*C;p===!0&&(s.fromBufferAttribute(P,z),A[O+W+0]=s.x,A[O+W+1]=s.y,A[O+W+2]=s.z,A[O+W+3]=0),x===!0&&(s.fromBufferAttribute(D,z),A[O+W+4]=s.x,A[O+W+5]=s.y,A[O+W+6]=s.z,A[O+W+7]=0),_===!0&&(s.fromBufferAttribute(L,z),A[O+W+8]=s.x,A[O+W+9]=s.y,A[O+W+10]=s.z,A[O+W+11]=L.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Gt(g,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function d0(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var uu=new Ve,Yh=new Ws(1,1),du=new Ns,fu=new Wr,pu=new ks,$h=[],Zh=[],Jh=new Float32Array(16),Kh=new Float32Array(9),jh=new Float32Array(4);function gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ra(n,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function f0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function p0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function m0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function g0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function x0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;jh.set(i),n.uniformMatrix2fv(this.addr,!1,jh),Ae(e,i)}}function _0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),Ae(e,i)}}function y0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Ae(e,i)}}function v0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function S0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function w0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function E0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function T0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function A0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function R0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yh.compareFunction=vc,r=Yh):r=uu,e.setTexture2D(t||r,s)}function C0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fu,s)}function I0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pu,s)}function P0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||du,s)}function D0(n){switch(n){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return S0;case 5125:return w0;case 36294:return E0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(n,t){n.uniform1fv(this.addr,t)}function U0(n,t){let e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function N0(n,t){let e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function O0(n,t){let e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function F0(n,t){let e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z0(n,t){let e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function B0(n,t){let e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function k0(n,t){n.uniform1iv(this.addr,t)}function H0(n,t){n.uniform2iv(this.addr,t)}function V0(n,t){n.uniform3iv(this.addr,t)}function G0(n,t){n.uniform4iv(this.addr,t)}function W0(n,t){n.uniform1uiv(this.addr,t)}function X0(n,t){n.uniform2uiv(this.addr,t)}function q0(n,t){n.uniform3uiv(this.addr,t)}function Y0(n,t){n.uniform4uiv(this.addr,t)}function $0(n,t,e){let i=this.cache,s=t.length,r=ra(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uu,r[o])}function Z0(n,t,e){let i=this.cache,s=t.length,r=ra(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fu,r[o])}function J0(n,t,e){let i=this.cache,s=t.length,r=ra(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pu,r[o])}function K0(n,t,e){let i=this.cache,s=t.length,r=ra(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||du,r[o])}function j0(n){switch(n){case 5126:return L0;case 35664:return U0;case 35665:return N0;case 35666:return O0;case 35674:return F0;case 35675:return z0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}var Nc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=D0(e.type)}},Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j0(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Qh(n,t){n.seq.push(t),n.map[t.id]=t}function Q0(n,t,e){let i=n.name,s=i.length;for(Uc.lastIndex=0;;){let r=Uc.exec(i),o=Uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(e,l===void 0?new Nc(a,n,t):new Oc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Fc(a),Qh(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Q0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function tu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var tg=37297,eg=0;function ng(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var eu=new Zt;function ig(n){ne._getMatrix(eu,ne.workingColorSpace,n);let t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Ds:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ng(n.getShaderSource(t),a)}else return r}function sg(n,t){let e=ig(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(n,t){let e;switch(t){case mh:e="Linear";break;case gh:e="Reinhard";break;case xh:e="Cineon";break;case go:e="ACESFilmic";break;case yh:e="AgX";break;case vh:e="Neutral";break;case _h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var na=new N;function og(){ne.getLuminanceCoefficients(na);let n=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function cg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function cr(n){return n!==""}function iu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function su(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(hg,dg)}var ug=new Map;function dg(n,t){let e=Xt[t];if(e===void 0){let i=ug.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(n){return n.replace(fg,pg)}function pg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case wi:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function yg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=mg(e),l=gg(e),h=xg(e),d=_g(e),f=yg(e),p=ag(e),x=cg(r),_=s.createProgram(),m,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),u.length>0&&(u+=`
`)):(m=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),u=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=zc(o),o=iu(o,e),o=su(o,e),a=zc(a),a=iu(a,e),a=su(a,e),o=ru(o),a=ru(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=y+m+o,g=y+u+a,E=tu(s,s.VERTEX_SHADER,M),A=tu(s,s.FRAGMENT_SHADER,g);s.attachShader(_,E),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(E)||"",O=s.getShaderInfoLog(A)||"",z=D.trim(),W=L.trim(),q=O.trim(),H=!0,ct=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,A);else{let ft=nu(s,E,"vertex"),wt=nu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ft+`
`+wt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||q==="")&&(ct=!1);ct&&(P.diagnostics={runnable:H,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(E),s.deleteShader(A),C=new ms(s,_),b=lg(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,tg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}var Mg=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}};function bg(n,t,e,i,s,r,o){let a=new Os,c=new Bc,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,D,L){let O=D.fog,z=L.geometry,W=b.isMeshStandardMaterial?D.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),H=q&&q.mapping===nr?q.image.height:null,ct=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=ft!==void 0?ft.length:0,yt=0;z.morphAttributes.position!==void 0&&(yt=1),z.morphAttributes.normal!==void 0&&(yt=2),z.morphAttributes.color!==void 0&&(yt=3);let zt,Dt,mt,J;if(ct){let se=An[ct];zt=se.vertexShader,Dt=se.fragmentShader}else zt=b.vertexShader,Dt=b.fragmentShader,c.update(b),mt=c.getVertexShaderID(b),J=c.getFragmentShaderID(b);let nt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Nt=L.isBatchedMesh===!0,Q=!!b.map,ut=!!b.matcap,I=!!q,vt=!!b.aoMap,Tt=!!b.lightMap,G=!!b.bumpMap,j=!!b.normalMap,et=!!b.displacementMap,tt=!!b.emissiveMap,Rt=!!b.metalnessMap,qt=!!b.roughnessMap,Yt=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,K=b.sheen>0,it=b.transmission>0,V=Yt&&!!b.anisotropyMap,At=R&&!!b.clearcoatMap,st=R&&!!b.clearcoatNormalMap,St=R&&!!b.clearcoatRoughnessMap,Y=F&&!!b.iridescenceMap,X=F&&!!b.iridescenceThicknessMap,rt=K&&!!b.sheenColorMap,dt=K&&!!b.sheenRoughnessMap,at=!!b.specularMap,_t=!!b.specularColorMap,Pt=!!b.specularIntensityMap,U=it&&!!b.transmissionMap,lt=it&&!!b.thicknessMap,xt=!!b.gradientMap,Ct=!!b.alphaMap,ht=b.alphaTest>0,ot=!!b.alphaHash,Lt=!!b.extensions,$t=Hn;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($t=n.toneMapping);let le={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:zt,fragmentShader:Dt,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:yi,alphaToCoverage:!!b.alphaToCoverage,map:Q,matcap:ut,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:H,aoMap:vt,lightMap:Tt,bumpMap:G,normalMap:j,displacementMap:f&&et,emissiveMap:tt,normalMapObjectSpace:j&&b.normalMapType===wh,normalMapTangentSpace:j&&b.normalMapType===yc,metalnessMap:Rt,roughnessMap:qt,anisotropy:Yt,anisotropyMap:V,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:st,clearcoatRoughnessMap:St,dispersion:v,iridescence:F,iridescenceMap:Y,iridescenceThicknessMap:X,sheen:K,sheenColorMap:rt,sheenRoughnessMap:dt,specularMap:at,specularColorMap:_t,specularIntensityMap:Pt,transmission:it,transmissionMap:U,thicknessMap:lt,gradientMap:xt,opaque:b.transparent===!1&&b.blending===gi&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ht,alphaHash:ot,combine:b.combine,mapUv:Q&&_(b.map.channel),aoMapUv:vt&&_(b.aoMap.channel),lightMapUv:Tt&&_(b.lightMap.channel),bumpMapUv:G&&_(b.bumpMap.channel),normalMapUv:j&&_(b.normalMap.channel),displacementMapUv:et&&_(b.displacementMap.channel),emissiveMapUv:tt&&_(b.emissiveMap.channel),metalnessMapUv:Rt&&_(b.metalnessMap.channel),roughnessMapUv:qt&&_(b.roughnessMap.channel),anisotropyMapUv:V&&_(b.anisotropyMap.channel),clearcoatMapUv:At&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:X&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(b.sheenRoughnessMap.channel),specularMapUv:at&&_(b.specularMap.channel),specularColorMapUv:_t&&_(b.specularColorMap.channel),specularIntensityMapUv:Pt&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:lt&&_(b.thicknessMap.channel),alphaMapUv:Ct&&_(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(j||Yt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Q||Ct),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Q&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:tt&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function u(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),M(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){let S=x[b.type],P;if(S){let D=An[S];P=Nh.clone(D.uniforms)}else P=b.uniforms;return P}function E(b,S){let P;for(let D=0,L=h.length;D<L;D++){let O=h[D];if(O.cacheKey===S){P=O,++P.usedTimes;break}}return P===void 0&&(P=new vg(n,S,b,r),h.push(P)),P}function A(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:g,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Sg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function au(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,x,_,m){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,x,_,m){let u=o(d,f,p,x,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,x,_,m){let u=o(d,f,p,x,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||wg),i.length>1&&i.sort(f||au),s.length>1&&s.sort(f||au)}function h(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Eg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new cu,n.set(i,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Ag(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Rg=0;function Cg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ig(n){let t=new Tg,e=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new me,o=new me;function a(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,_=0,m=0,u=0,y=0,M=0,g=0,E=0,A=0,T=0;l.sort(Cg);for(let b=0,S=l.length;b<S;b++){let P=l[b],D=P.color,L=P.intensity,O=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*L,d+=D.g*L,f+=D.b*L;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],L);T++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(L),W.distance=O,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=q.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=z,g++}_++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(D).multiplyScalar(L),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=z,i.pointShadowMatrix[x]=P.shadow.matrix,M++}i.point[x]=W,x++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(L),W.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[u]=W,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==g||C.numSpotMaps!==E||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=g+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=p,C.pointLength=x,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=g,C.numSpotMaps=E,C.numLightProbes=T,i.version=Rg++)}function c(l,h){let d=0,f=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){let M=l[u];if(M.isDirectionalLight){let g=i.directional[d];g.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(M.isSpotLight){let g=i.spot[p];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let g=i.rectArea[x];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(M.width*.5,0,0),g.halfHeight.set(0,M.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let g=i.point[f];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let g=i.hemi[_];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function lu(n){let t=new Ig(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Pg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new lu(n),t.set(s,[a])):r>=o.length?(a=new lu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ug(n,t,e){let i=new ss,s=new Gt,r=new Gt,o=new de,a=new Jr({depthPacking:Sh}),c=new Kr,l={},h=e.maxTextureSize,d={[On]:Ge,[Ge]:On,[We]:We},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Dg,fragmentShader:Lg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ye;x.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new be(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let u=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=u!==En&&this.type===En,O=u===En&&this.type!==En;for(let z=0,W=A.length;z<W;z++){let q=A[z],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ct=H.getFrameExtents();if(s.multiply(ct),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,H.mapSize.y=r.y)),H.map===null||L===!0||O===!0){let wt=this.type!==En?{minFilter:De,magFilter:De}:{};H.map!==null&&H.map.dispose(),H.map=new Sn(s.x,s.y,wt),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ft=H.getViewportCount();for(let wt=0;wt<ft;wt++){let yt=H.getViewport(wt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),D.viewport(o),H.updateMatrices(q,wt),i=H.getFrustum(),g(T,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===En&&y(H,C),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,P)};function y(A,T){let C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,p,_,null)}function M(A,T,C,b){let S=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=S.uuid,L=T.uuid,O=l[D];O===void 0&&(O={},l[D]=O);let z=O[L];z===void 0&&(z=S.clone(),O[L]=z,T.addEventListener("dispose",E)),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,b===En?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=n.properties.get(S);D.light=C}return S}function g(A,T,C,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===En)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let L=t.update(A),O=A.material;if(Array.isArray(O)){let z=L.groups;for(let W=0,q=z.length;W<q;W++){let H=z[W],ct=O[H.materialIndex];if(ct&&ct.visible){let ft=M(A,ct,b,S);A.onBeforeShadow(n,A,T,C,L,ft,H),n.renderBufferDirect(C,null,L,ft,A,H),A.onAfterShadow(n,A,T,C,L,ft,H)}}}else if(O.visible){let z=M(A,O,b,S);A.onBeforeShadow(n,A,T,C,L,z,null),n.renderBufferDirect(C,null,L,z,A,null),A.onAfterShadow(n,A,T,C,L,z,null)}}let D=A.children;for(let L=0,O=D.length;L<O;L++)g(D[L],T,C,b,S)}function E(A){A.target.removeEventListener("dispose",E);for(let C in l){let b=l[C],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Ng={[co]:lo,[ho]:po,[uo]:mo,[xi]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:xi};function Og(n,t){function e(){let U=!1,lt=new de,xt=null,Ct=new de(0,0,0,0);return{setMask:function(ht){xt!==ht&&!U&&(n.colorMask(ht,ht,ht,ht),xt=ht)},setLocked:function(ht){U=ht},setClear:function(ht,ot,Lt,$t,le){le===!0&&(ht*=$t,ot*=$t,Lt*=$t),lt.set(ht,ot,Lt,$t),Ct.equals(lt)===!1&&(n.clearColor(ht,ot,Lt,$t),Ct.copy(lt))},reset:function(){U=!1,xt=null,Ct.set(-1,0,0,0)}}}function i(){let U=!1,lt=!1,xt=null,Ct=null,ht=null;return{setReversed:function(ot){if(lt!==ot){let Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),lt=ot;let $t=ht;ht=null,this.setClear($t)}},getReversed:function(){return lt},setTest:function(ot){ot?nt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(ot){xt!==ot&&!U&&(n.depthMask(ot),xt=ot)},setFunc:function(ot){if(lt&&(ot=Ng[ot]),Ct!==ot){switch(ot){case co:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case xi:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case fo:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=ot}},setLocked:function(ot){U=ot},setClear:function(ot){ht!==ot&&(lt&&(ot=1-ot),n.clearDepth(ot),ht=ot)},reset:function(){U=!1,xt=null,Ct=null,ht=null,lt=!1}}}function s(){let U=!1,lt=null,xt=null,Ct=null,ht=null,ot=null,Lt=null,$t=null,le=null;return{setTest:function(se){U||(se?nt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(se){lt!==se&&!U&&(n.stencilMask(se),lt=se)},setFunc:function(se,Cn,Mn){(xt!==se||Ct!==Cn||ht!==Mn)&&(n.stencilFunc(se,Cn,Mn),xt=se,Ct=Cn,ht=Mn)},setOp:function(se,Cn,Mn){(ot!==se||Lt!==Cn||$t!==Mn)&&(n.stencilOp(se,Cn,Mn),ot=se,Lt=Cn,$t=Mn)},setLocked:function(se){U=se},setClear:function(se){le!==se&&(n.clearStencil(se),le=se)},reset:function(){U=!1,lt=null,xt=null,Ct=null,ht=null,ot=null,Lt=null,$t=null,le=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],x=null,_=!1,m=null,u=null,y=null,M=null,g=null,E=null,A=null,T=new Jt(0,0,0),C=0,b=!1,S=null,P=null,D=null,L=null,O=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,q=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let ct=null,ft={},wt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),zt=new de().fromArray(wt),Dt=new de().fromArray(yt);function mt(U,lt,xt,Ct){let ht=new Uint8Array(4),ot=n.createTexture();n.bindTexture(U,ot),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<xt;Lt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(lt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return ot}let J={};J[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(xi),G(!1),j(sc),nt(n.CULL_FACE),vt(kn);function nt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ft(U,lt){return d[U]!==lt?(n.bindFramebuffer(U,lt),d[U]=lt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=lt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Nt(U,lt){let xt=p,Ct=!1;if(U){xt=f.get(lt),xt===void 0&&(xt=[],f.set(lt,xt));let ht=U.textures;if(xt.length!==ht.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Lt=ht.length;ot<Lt;ot++)xt[ot]=n.COLOR_ATTACHMENT0+ot;xt.length=ht.length,Ct=!0}}else xt[0]!==n.BACK&&(xt[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(xt)}function Q(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let ut={[jn]:n.FUNC_ADD,[Jl]:n.FUNC_SUBTRACT,[Kl]:n.FUNC_REVERSE_SUBTRACT};ut[jl]=n.MIN,ut[Ql]=n.MAX;let I={[th]:n.ZERO,[eh]:n.ONE,[nh]:n.SRC_COLOR,[zr]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[sh]:n.DST_ALPHA,[ih]:n.ONE_MINUS_SRC_COLOR,[Br]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[rh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[hh]:n.ONE_MINUS_CONSTANT_COLOR,[uh]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(U,lt,xt,Ct,ht,ot,Lt,$t,le,se){if(U===kn){_===!0&&(bt(n.BLEND),_=!1);return}if(_===!1&&(nt(n.BLEND),_=!0),U!==Zl){if(U!==m||se!==b){if((u!==jn||g!==jn)&&(n.blendEquation(n.FUNC_ADD),u=jn,g=jn),se)switch(U){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,E=null,A=null,T.set(0,0,0),C=0,m=U,b=se}return}ht=ht||lt,ot=ot||xt,Lt=Lt||Ct,(lt!==u||ht!==g)&&(n.blendEquationSeparate(ut[lt],ut[ht]),u=lt,g=ht),(xt!==y||Ct!==M||ot!==E||Lt!==A)&&(n.blendFuncSeparate(I[xt],I[Ct],I[ot],I[Lt]),y=xt,M=Ct,E=ot,A=Lt),($t.equals(T)===!1||le!==C)&&(n.blendColor($t.r,$t.g,$t.b,le),T.copy($t),C=le),m=U,b=!1}function Tt(U,lt){U.side===We?bt(n.CULL_FACE):nt(n.CULL_FACE);let xt=U.side===Ge;lt&&(xt=!xt),G(xt),U.blending===gi&&U.transparent===!1?vt(kn):vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ct=U.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function j(U){U!==ql?(nt(n.CULL_FACE),U!==P&&(U===sc?n.cullFace(n.BACK):U===Yl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),P=U}function et(U){U!==D&&(W&&n.lineWidth(U),D=U)}function tt(U,lt,xt){U?(nt(n.POLYGON_OFFSET_FILL),(L!==lt||O!==xt)&&(n.polygonOffset(lt,xt),L=lt,O=xt)):bt(n.POLYGON_OFFSET_FILL)}function Rt(U){U?nt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function qt(U){U===void 0&&(U=n.TEXTURE0+z-1),ct!==U&&(n.activeTexture(U),ct=U)}function Yt(U,lt,xt){xt===void 0&&(ct===null?xt=n.TEXTURE0+z-1:xt=ct);let Ct=ft[xt];Ct===void 0&&(Ct={type:void 0,texture:void 0},ft[xt]=Ct),(Ct.type!==U||Ct.texture!==lt)&&(ct!==xt&&(n.activeTexture(xt),ct=xt),n.bindTexture(U,lt||J[U]),Ct.type=U,Ct.texture=lt)}function R(){let U=ft[ct];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(U){zt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function dt(U){Dt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Dt.copy(U))}function at(U,lt){let xt=l.get(lt);xt===void 0&&(xt=new WeakMap,l.set(lt,xt));let Ct=xt.get(U);Ct===void 0&&(Ct=n.getUniformBlockIndex(lt,U.name),xt.set(U,Ct))}function _t(U,lt){let Ct=l.get(lt).get(U);c.get(lt)!==Ct&&(n.uniformBlockBinding(lt,Ct,U.__bindingPointIndex),c.set(lt,Ct))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ct=null,ft={},d={},f=new WeakMap,p=[],x=null,_=!1,m=null,u=null,y=null,M=null,g=null,E=null,A=null,T=new Jt(0,0,0),C=0,b=!1,S=null,P=null,D=null,L=null,O=null,zt.set(0,0,n.canvas.width,n.canvas.height),Dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:bt,bindFramebuffer:Ft,drawBuffers:Nt,useProgram:Q,setBlending:vt,setMaterial:Tt,setFlipSided:G,setCullFace:j,setLineWidth:et,setPolygonOffset:tt,setScissorTest:Rt,activeTexture:qt,bindTexture:Yt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Y,texImage3D:X,updateUBOMapping:at,uniformBlockBinding:_t,texStorage2D:st,texStorage3D:St,texSubImage2D:K,texSubImage3D:it,compressedTexSubImage2D:V,compressedTexSubImage3D:At,scissor:rt,viewport:dt,reset:Pt}}function Fg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return p?new OffscreenCanvas(R,v):Us("canvas")}function _(R,v,F){let K=1,it=Yt(R);if((it.width>F||it.height>F)&&(K=F/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let V=Math.floor(K*it.width),At=Math.floor(K*it.height);d===void 0&&(d=x(V,At));let st=v?x(V,At):d;return st.width=V,st.height=At,st.getContext("2d").drawImage(R,0,0,V,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+V+"x"+At+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,v,F,K,it=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=v;if(v===n.RED&&(F===n.FLOAT&&(V=n.R32F),F===n.HALF_FLOAT&&(V=n.R16F),F===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.R8UI),F===n.UNSIGNED_SHORT&&(V=n.R16UI),F===n.UNSIGNED_INT&&(V=n.R32UI),F===n.BYTE&&(V=n.R8I),F===n.SHORT&&(V=n.R16I),F===n.INT&&(V=n.R32I)),v===n.RG&&(F===n.FLOAT&&(V=n.RG32F),F===n.HALF_FLOAT&&(V=n.RG16F),F===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RG8UI),F===n.UNSIGNED_SHORT&&(V=n.RG16UI),F===n.UNSIGNED_INT&&(V=n.RG32UI),F===n.BYTE&&(V=n.RG8I),F===n.SHORT&&(V=n.RG16I),F===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGB8UI),F===n.UNSIGNED_SHORT&&(V=n.RGB16UI),F===n.UNSIGNED_INT&&(V=n.RGB32UI),F===n.BYTE&&(V=n.RGB8I),F===n.SHORT&&(V=n.RGB16I),F===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),F===n.UNSIGNED_INT&&(V=n.RGBA32UI),F===n.BYTE&&(V=n.RGBA8I),F===n.SHORT&&(V=n.RGBA16I),F===n.INT&&(V=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),v===n.RGBA){let At=it?Ds:ne.getTransfer(K);F===n.FLOAT&&(V=n.RGBA32F),F===n.HALF_FLOAT&&(V=n.RGBA16F),F===n.UNSIGNED_BYTE&&(V=At===re?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function g(R,v){let F;return R?v===null||v===oi||v===hs?F=n.DEPTH24_STENCIL8:v===cn?F=n.DEPTH32F_STENCIL8:v===cs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===hs?F=n.DEPTH_COMPONENT24:v===cn?F=n.DEPTH_COMPONENT32F:v===cs&&(F=n.DEPTH_COMPONENT16),F}function E(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==De&&R.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&h.delete(v)}function T(R){let v=R.target;v.removeEventListener("dispose",T),S(v)}function C(R){let v=i.get(R);if(v.__webglInit===void 0)return;let F=R.source,K=f.get(F);if(K){let it=K[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(R),Object.keys(K).length===0&&f.delete(F)}i.remove(R)}function b(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let F=R.source,K=f.get(F);delete K[v.__cacheKey],o.memory.textures--}function S(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let it=0;it<v.__webglFramebuffer[K].length;it++)n.deleteFramebuffer(v.__webglFramebuffer[K][it]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=R.textures;for(let K=0,it=F.length;K<it;K++){let V=i.get(F[K]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(F[K])}i.remove(R)}let P=0;function D(){P=0}function L(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function O(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function z(R,v){let F=i.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,R,v);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function W(R,v){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){J(F,R,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function q(R,v){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){J(F,R,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function H(R,v){let F=i.get(R);if(R.version>0&&F.__version!==R.version){nt(F,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let ct={[_i]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[kr]:n.MIRRORED_REPEAT},ft={[De]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},wt={[Eh]:n.NEVER,[Ph]:n.ALWAYS,[Th]:n.LESS,[vc]:n.LEQUAL,[Ah]:n.EQUAL,[Ih]:n.GEQUAL,[Rh]:n.GREATER,[Ch]:n.NOTEQUAL};function yt(R,v){if(v.type===cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===yo||v.magFilter===ir||v.magFilter===Tn||v.minFilter===Qe||v.minFilter===yo||v.minFilter===ir||v.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ct[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ct[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ct[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ft[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===De||v.minFilter!==ir&&v.minFilter!==Tn||v.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function zt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,it=f.get(K);it===void 0&&(it={},f.set(K,it));let V=O(v);if(V!==R.__cacheKey){it[V]===void 0&&(it[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),it[V].usedTimes++;let At=it[R.__cacheKey];At!==void 0&&(it[R.__cacheKey].usedTimes--,At.usedTimes===0&&b(v)),R.__cacheKey=V,R.__webglTexture=it[V].texture}return F}function Dt(R,v,F){return Math.floor(Math.floor(R/F)/v)}function mt(R,v,F,K){let V=R.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,K,v.data);else{V.sort((X,rt)=>X.start-rt.start);let At=0;for(let X=1;X<V.length;X++){let rt=V[At],dt=V[X],at=rt.start+rt.count,_t=Dt(dt.start,v.width,4),Pt=Dt(rt.start,v.width,4);dt.start<=at+1&&_t===Pt&&Dt(dt.start+dt.count-1,v.width,4)===_t?rt.count=Math.max(rt.count,dt.start+dt.count-rt.start):(++At,V[At]=dt)}V.length=At+1;let st=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),Y=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let X=0,rt=V.length;X<rt;X++){let dt=V[X],at=Math.floor(dt.start/4),_t=Math.ceil(dt.count/4),Pt=at%v.width,U=Math.floor(at/v.width),lt=_t,xt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Pt,U,lt,xt,F,K,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,Y)}}function J(R,v,F){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let it=zt(R,v),V=v.source;e.bindTexture(K,R.__webglTexture,n.TEXTURE0+F);let At=i.get(V);if(V.version!==At.__version||it===!0){e.activeTexture(n.TEXTURE0+F);let st=ne.getPrimaries(ne.workingColorSpace),St=v.colorSpace===Vn?null:ne.getPrimaries(v.colorSpace),Y=v.colorSpace===Vn||st===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let X=_(v.image,!1,s.maxTextureSize);X=qt(v,X);let rt=r.convert(v.format,v.colorSpace),dt=r.convert(v.type),at=M(v.internalFormat,rt,dt,v.colorSpace,v.isVideoTexture);yt(K,v);let _t,Pt=v.mipmaps,U=v.isVideoTexture!==!0,lt=At.__version===void 0||it===!0,xt=V.dataReady,Ct=E(v,X);if(v.isDepthTexture)at=g(v.format===us,v.type),lt&&(U?e.texStorage2D(n.TEXTURE_2D,1,at,X.width,X.height):e.texImage2D(n.TEXTURE_2D,0,at,X.width,X.height,0,rt,dt,null));else if(v.isDataTexture)if(Pt.length>0){U&&lt&&e.texStorage2D(n.TEXTURE_2D,Ct,at,Pt[0].width,Pt[0].height);for(let ht=0,ot=Pt.length;ht<ot;ht++)_t=Pt[ht],U?xt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,_t.width,_t.height,rt,dt,_t.data):e.texImage2D(n.TEXTURE_2D,ht,at,_t.width,_t.height,0,rt,dt,_t.data);v.generateMipmaps=!1}else U?(lt&&e.texStorage2D(n.TEXTURE_2D,Ct,at,X.width,X.height),xt&&mt(v,X,rt,dt)):e.texImage2D(n.TEXTURE_2D,0,at,X.width,X.height,0,rt,dt,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,at,Pt[0].width,Pt[0].height,X.depth);for(let ht=0,ot=Pt.length;ht<ot;ht++)if(_t=Pt[ht],v.format!==ze)if(rt!==null)if(U){if(xt)if(v.layerUpdates.size>0){let Lt=Rc(_t.width,_t.height,v.format,v.type);for(let $t of v.layerUpdates){let le=_t.data.subarray($t*Lt/_t.data.BYTES_PER_ELEMENT,($t+1)*Lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,$t,_t.width,_t.height,1,rt,le)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,X.depth,rt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,at,_t.width,_t.height,X.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,X.depth,rt,dt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,at,_t.width,_t.height,X.depth,0,rt,dt,_t.data)}else{U&&lt&&e.texStorage2D(n.TEXTURE_2D,Ct,at,Pt[0].width,Pt[0].height);for(let ht=0,ot=Pt.length;ht<ot;ht++)_t=Pt[ht],v.format!==ze?rt!==null?U?xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,_t.width,_t.height,rt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,at,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,_t.width,_t.height,rt,dt,_t.data):e.texImage2D(n.TEXTURE_2D,ht,at,_t.width,_t.height,0,rt,dt,_t.data)}else if(v.isDataArrayTexture)if(U){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,at,X.width,X.height,X.depth),xt)if(v.layerUpdates.size>0){let ht=Rc(X.width,X.height,v.format,v.type);for(let ot of v.layerUpdates){let Lt=X.data.subarray(ot*ht/X.data.BYTES_PER_ELEMENT,(ot+1)*ht/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,X.width,X.height,1,rt,dt,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,rt,dt,X.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,at,X.width,X.height,X.depth,0,rt,dt,X.data);else if(v.isData3DTexture)U?(lt&&e.texStorage3D(n.TEXTURE_3D,Ct,at,X.width,X.height,X.depth),xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,rt,dt,X.data)):e.texImage3D(n.TEXTURE_3D,0,at,X.width,X.height,X.depth,0,rt,dt,X.data);else if(v.isFramebufferTexture){if(lt)if(U)e.texStorage2D(n.TEXTURE_2D,Ct,at,X.width,X.height);else{let ht=X.width,ot=X.height;for(let Lt=0;Lt<Ct;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,at,ht,ot,0,rt,dt,null),ht>>=1,ot>>=1}}else if(Pt.length>0){if(U&&lt){let ht=Yt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,at,ht.width,ht.height)}for(let ht=0,ot=Pt.length;ht<ot;ht++)_t=Pt[ht],U?xt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,rt,dt,_t):e.texImage2D(n.TEXTURE_2D,ht,at,rt,dt,_t);v.generateMipmaps=!1}else if(U){if(lt){let ht=Yt(X);e.texStorage2D(n.TEXTURE_2D,Ct,at,ht.width,ht.height)}xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,dt,X)}else e.texImage2D(n.TEXTURE_2D,0,at,rt,dt,X);m(v)&&u(K),At.__version=V.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function nt(R,v,F){if(v.image.length!==6)return;let K=zt(R,v),it=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);let V=i.get(it);if(it.version!==V.__version||K===!0){e.activeTexture(n.TEXTURE0+F);let At=ne.getPrimaries(ne.workingColorSpace),st=v.colorSpace===Vn?null:ne.getPrimaries(v.colorSpace),St=v.colorSpace===Vn||At===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Y=v.isCompressedTexture||v.image[0].isCompressedTexture,X=v.image[0]&&v.image[0].isDataTexture,rt=[];for(let ot=0;ot<6;ot++)!Y&&!X?rt[ot]=_(v.image[ot],!0,s.maxCubemapSize):rt[ot]=X?v.image[ot].image:v.image[ot],rt[ot]=qt(v,rt[ot]);let dt=rt[0],at=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),Pt=M(v.internalFormat,at,_t,v.colorSpace),U=v.isVideoTexture!==!0,lt=V.__version===void 0||K===!0,xt=it.dataReady,Ct=E(v,dt);yt(n.TEXTURE_CUBE_MAP,v);let ht;if(Y){U&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Pt,dt.width,dt.height);for(let ot=0;ot<6;ot++){ht=rt[ot].mipmaps;for(let Lt=0;Lt<ht.length;Lt++){let $t=ht[Lt];v.format!==ze?at!==null?U?xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,$t.width,$t.height,at,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,Pt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,$t.width,$t.height,at,_t,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,Pt,$t.width,$t.height,0,at,_t,$t.data)}}}else{if(ht=v.mipmaps,U&&lt){ht.length>0&&Ct++;let ot=Yt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Pt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(X){U?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,rt[ot].width,rt[ot].height,at,_t,rt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Pt,rt[ot].width,rt[ot].height,0,at,_t,rt[ot].data);for(let Lt=0;Lt<ht.length;Lt++){let le=ht[Lt].image[ot].image;U?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,le.width,le.height,at,_t,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,Pt,le.width,le.height,0,at,_t,le.data)}}else{U?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,at,_t,rt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Pt,at,_t,rt[ot]);for(let Lt=0;Lt<ht.length;Lt++){let $t=ht[Lt];U?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,at,_t,$t.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,Pt,at,_t,$t.image[ot])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),V.__version=it.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function bt(R,v,F,K,it,V){let At=r.convert(F.format,F.colorSpace),st=r.convert(F.type),St=M(F.internalFormat,At,st,F.colorSpace),Y=i.get(v),X=i.get(F);if(X.__renderTarget=v,!Y.__hasExternalTextures){let rt=Math.max(1,v.width>>V),dt=Math.max(1,v.height>>V);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,V,St,rt,dt,v.depth,0,At,st,null):e.texImage2D(it,V,St,rt,dt,0,At,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,it,X.__webglTexture,0,et(v)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,it,X.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let K=v.depthTexture,it=K&&K.isDepthTexture?K.type:null,V=g(v.stencilBuffer,it),At=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=et(v);tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,V,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,R)}else{let K=v.textures;for(let it=0;it<K.length;it++){let V=K[it],At=r.convert(V.format,V.colorSpace),st=r.convert(V.type),St=M(V.internalFormat,At,st,V.colorSpace),Y=et(v);F&&tt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,St,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,St,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,St,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);let it=K.__webglTexture,V=et(v);if(v.depthTexture.format===ji)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(v.depthTexture.format===us)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Q(R){let v=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=K}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let K=R.texture.mipmaps;K&&K.length>0?Nt(v.__webglFramebuffer[0],R):Nt(v.__webglFramebuffer,R)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),Ft(v.__webglDepthbuffer[K],R,!1);else{let it=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,V)}}else{let K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ft(v.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,v,F){let K=i.get(R);v!==void 0&&bt(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Q(R)}function I(R){let v=R.texture,F=i.get(R),K=i.get(v);R.addEventListener("dispose",T);let it=R.textures,V=R.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let St=0;St<v.mipmaps.length;St++)F.__webglFramebuffer[st][St]=n.createFramebuffer()}else F.__webglFramebuffer[st]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)F.__webglFramebuffer[st]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(At)for(let st=0,St=it.length;st<St;st++){let Y=i.get(it[st]);Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&tt(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let St=it[st];F.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[st]);let Y=r.convert(St.format,St.colorSpace),X=r.convert(St.type),rt=M(St.internalFormat,Y,X,St.colorSpace,R.isXRRenderTarget===!0),dt=et(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,rt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,F.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),yt(n.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)bt(F.__webglFramebuffer[st][St],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St);else bt(F.__webglFramebuffer[st],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(v)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let st=0,St=it.length;st<St;st++){let Y=it[st],X=i.get(Y),rt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,X.__webglTexture),yt(rt,Y),bt(F.__webglFramebuffer,R,Y,n.COLOR_ATTACHMENT0+st,rt,0),m(Y)&&u(rt)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),yt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)bt(F.__webglFramebuffer[St],R,v,n.COLOR_ATTACHMENT0,st,St);else bt(F.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,st,0);m(v)&&u(st),e.unbindTexture()}R.depthBuffer&&Q(R)}function vt(R){let v=R.textures;for(let F=0,K=v.length;F<K;F++){let it=v[F];if(m(it)){let V=y(R),At=i.get(it).__webglTexture;e.bindTexture(V,At),u(V),e.unbindTexture()}}}let Tt=[],G=[];function j(R){if(R.samples>0){if(tt(R)===!1){let v=R.textures,F=R.width,K=R.height,it=n.COLOR_BUFFER_BIT,V=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(R),st=v.length>1;if(st)for(let Y=0;Y<v.length;Y++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let St=R.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Y=0;Y<v.length;Y++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[Y]);let X=i.get(v[Y]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,it,n.NEAREST),c===!0&&(Tt.length=0,G.length=0,Tt.push(n.COLOR_ATTACHMENT0+Y),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Tt.push(V),G.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Y=0;Y<v.length;Y++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,At.__webglColorRenderbuffer[Y]);let X=i.get(v[Y]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,X,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function et(R){return Math.min(s.maxSamples,R.samples)}function tt(R){let v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function qt(R,v){let F=R.colorSpace,K=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==yi&&F!==Vn&&(ne.getTransfer(F)===re?(K!==ze||it!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=ut,this.setupRenderTarget=I,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=tt}function zg(n,t){function e(i,s=Vn){let r,o=ne.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===Mo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return n.BYTE;if(i===dc)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===mc)return n.ALPHA;if(i===gc)return n.RGB;if(i===ze)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===So)return n.RED_INTEGER;if(i===_c)return n.RG;if(i===wo)return n.RG_INTEGER;if(i===Eo)return n.RGBA_INTEGER;if(i===sr||i===rr||i===or||i===ar)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===Ao||i===Ro||i===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Io||i===Po||i===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Io||i===Po)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Do)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lo||i===Uo||i===No||i===Oo||i===Fo||i===zo||i===Bo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===No)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Go)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===$o||i===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===Ko||i===jo||i===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new tn({vertexShader:Bg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends bn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,x=null,_=typeof XRWebGLBinding<"u",m=new Hc,u={},y=e.getContextAttributes(),M=null,g=null,E=[],A=[],T=new Gt,C=null,b=new Fe;b.viewport=new de;let S=new Fe;S.viewport=new de;let P=[b,S],D=new ao,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=E[J];return nt===void 0&&(nt=new is,E[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=E[J];return nt===void 0&&(nt=new is,E[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=E[J];return nt===void 0&&(nt=new is,E[J]=nt),nt.getHandSpace()};function z(J){let nt=A.indexOf(J.inputSource);if(nt===-1)return;let bt=E[nt];bt!==void 0&&(bt.update(J.inputSource,J.frame,l||o),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let J=0;J<E.length;J++){let nt=A[J];nt!==null&&(A[J]=null,E[J].disconnect(nt))}L=null,O=null,m.reset();for(let J in u)delete u[J];t.setRenderTarget(M),p=null,f=null,d=null,s=null,g=null,mt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ft=null,Nt=null;y.depth&&(Nt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?us:ji,Ft=y.stencil?hs:oi);let Q={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new Sn(f.textureWidth,f.textureHeight,{format:ze,type:_n,depthTexture:new Ws(f.textureWidth,f.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Sn(p.framebufferWidth,p.framebufferHeight,{format:ze,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let nt=0;nt<J.removed.length;nt++){let bt=J.removed[nt],Ft=A.indexOf(bt);Ft>=0&&(A[Ft]=null,E[Ft].disconnect(bt))}for(let nt=0;nt<J.added.length;nt++){let bt=J.added[nt],Ft=A.indexOf(bt);if(Ft===-1){for(let Q=0;Q<E.length;Q++)if(Q>=A.length){A.push(bt),Ft=Q;break}else if(A[Q]===null){A[Q]=bt,Ft=Q;break}if(Ft===-1)break}let Nt=E[Ft];Nt&&Nt.connect(bt)}}let H=new N,ct=new N;function ft(J,nt,bt){H.setFromMatrixPosition(nt.matrixWorld),ct.setFromMatrixPosition(bt.matrixWorld);let Ft=H.distanceTo(ct),Nt=nt.projectionMatrix.elements,Q=bt.projectionMatrix.elements,ut=Nt[14]/(Nt[10]-1),I=Nt[14]/(Nt[10]+1),vt=(Nt[9]+1)/Nt[5],Tt=(Nt[9]-1)/Nt[5],G=(Nt[8]-1)/Nt[0],j=(Q[8]+1)/Q[0],et=ut*G,tt=ut*j,Rt=Ft/(-G+j),qt=Rt*-G;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qt),J.translateZ(Rt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Yt=ut+Rt,R=I+Rt,v=et-qt,F=tt+(Ft-qt),K=vt*I/R*Yt,it=Tt*I/R*Yt;J.projectionMatrix.makePerspective(v,F,K,it,Yt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function wt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,bt=J.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),D.near=S.near=b.near=nt,D.far=S.far=b.far=bt,(L!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,O=D.far),D.layers.mask=J.layers.mask|6,b.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;let Ft=J.parent,Nt=D.cameras;wt(D,Ft);for(let Q=0;Q<Nt.length;Q++)wt(Nt[Q],Ft);Nt.length===2?ft(D,b,S):D.projectionMatrix.copy(b.projectionMatrix),yt(J,D,Ft)};function yt(J,nt,bt){bt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return u[J]};let zt=null;function Dt(J,nt){if(h=nt.getViewerPose(l||o),x=nt,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let Ft=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Ft=!0);for(let I=0;I<bt.length;I++){let vt=bt[I],Tt=null;if(p!==null)Tt=p.getViewport(vt);else{let j=d.getViewSubImage(f,vt);Tt=j.viewport,I===0&&(t.setRenderTargetTextures(g,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(g))}let G=P[I];G===void 0&&(G=new Fe,G.layers.enable(I),G.viewport=new de,P[I]=G),G.matrix.fromArray(vt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(vt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),I===0&&(D.matrix.copy(G.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ft===!0&&D.cameras.push(G)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let I=d.getDepthInformation(bt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let I=0;I<bt.length;I++){let vt=bt[I].camera;if(vt){let Tt=u[vt];Tt||(Tt=new Xs,u[vt]=Tt);let G=d.getCameraImage(vt);Tt.sourceTexture=G}}}}for(let bt=0;bt<E.length;bt++){let Ft=A[bt],Nt=E[bt];Ft!==null&&Nt!==void 0&&Nt.update(Ft,nt,l||o)}zt&&zt(J,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),x=null}let mt=new hu;mt.setAnimationLoop(Dt),this.setAnimationLoop=function(J){zt=J},this.dispose=function(){}}},Ai=new gn,Hg=new me;function Vg(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ec(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,M,g){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,g)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,y,M):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ge&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ge&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=t.get(u),M=y.envMap,g=y.envMapRotation;M&&(m.envMap.value=M,Ai.copy(g),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(Ai)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,y,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let g=M.program;i.uniformBlockBinding(y,g)}function l(y,M){let g=s[y.id];g===void 0&&(x(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));let E=M.program;i.updateUBOMapping(y,E);let A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let M=d();y.__bindingPointIndex=M;let g=n.createBuffer(),E=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,g),g}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=s[y.id],g=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,T=g.length;A<T;A++){let C=Array.isArray(g[A])?g[A]:[g[A]];for(let b=0,S=C.length;b<S;b++){let P=C[b];if(p(P,A,b,E)===!0){let D=P.__offset,L=Array.isArray(P.value)?P.value:[P.value],O=0;for(let z=0;z<L.length;z++){let W=L[z],q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,D+O,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,M,g,E){let A=y.value,T=M+"_"+g;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{let C=E[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function x(y){let M=y.uniforms,g=0,E=16;for(let T=0,C=M.length;T<C;T++){let b=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,P=b.length;S<P;S++){let D=b[S],L=Array.isArray(D.value)?D.value:[D.value];for(let O=0,z=L.length;O<z;O++){let W=L[O],q=_(W),H=g%E,ct=H%q.boundary,ft=H+ct;g+=ct,ft!==0&&E-ft<q.storage&&(g+=E-ft),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=q.storage}}}let A=g%E;return A>0&&(g+=E-A),y.__size=g,y.__cache={},this}function _(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let g=o.indexOf(M.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var sa=class{constructor(t={}){let{canvas:e=Dh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,E=!1;this._outputColorSpace=Me;let A=0,T=0,C=null,b=-1,S=null,P=new de,D=new de,L=null,O=new Jt(0),z=0,W=e.width,q=e.height,H=1,ct=null,ft=null,wt=new de(0,0,W,q),yt=new de(0,0,W,q),zt=!1,Dt=new ss,mt=!1,J=!1,nt=new me,bt=new N,Ft=new de,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ut(){return C===null?H:1}let I=i;function vt(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){let B="webgl2";if(I=vt(B,w),I===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Tt,G,j,et,tt,Rt,qt,Yt,R,v,F,K,it,V,At,st,St,Y,X,rt,dt,at,_t,Pt;function U(){Tt=new a0(I),Tt.init(),at=new zg(I,Tt),G=new t0(I,Tt,t,at),j=new Og(I,Tt),G.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),et=new h0(I),tt=new Sg,Rt=new Fg(I,Tt,j,tt,G,at,et),qt=new n0(g),Yt=new o0(g),R=new gf(I),_t=new jm(I,R),v=new c0(I,R,et,_t),F=new d0(I,v,R,et),X=new u0(I,G,Rt),st=new e0(tt),K=new bg(g,qt,Yt,Tt,G,_t,st),it=new Vg(g,tt),V=new Eg,At=new Pg(Tt),Y=new Km(g,qt,Yt,j,F,p,c),St=new Ug(g,F,G),Pt=new Gg(I,et,G,j),rt=new Qm(I,Tt,et),dt=new l0(I,Tt,et),et.programs=K.programs,g.capabilities=G,g.extensions=Tt,g.properties=tt,g.renderLists=V,g.shadowMap=St,g.state=j,g.info=et}U();let lt=new Vc(g,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,q,!1))},this.getSize=function(w){return w.set(W,q)},this.setSize=function(w,B,$=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,q=B,e.width=Math.floor(w*H),e.height=Math.floor(B*H),$===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(W*H,q*H).floor()},this.setDrawingBufferSize=function(w,B,$){W=w,q=B,H=$,e.width=Math.floor(w*$),e.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,B,$,Z){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,B,$,Z),j.viewport(P.copy(wt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,B,$,Z){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,B,$,Z),j.scissor(D.copy(yt).multiplyScalar(H).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){j.setScissorTest(zt=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,$=!0){let Z=0;if(w){let k=!1;if(C!==null){let pt=C.texture.format;k=pt===Eo||pt===wo||pt===So}if(k){let pt=C.texture.type,It=pt===_n||pt===oi||pt===cs||pt===hs||pt===Mo||pt===bo,Ot=Y.getClearColor(),Ut=Y.getClearAlpha(),Vt=Ot.r,Wt=Ot.g,kt=Ot.b;It?(x[0]=Vt,x[1]=Wt,x[2]=kt,x[3]=Ut,I.clearBufferuiv(I.COLOR,0,x)):(_[0]=Vt,_[1]=Wt,_[2]=kt,_[3]=Ut,I.clearBufferiv(I.COLOR,0,_))}else Z|=I.COLOR_BUFFER_BIT}B&&(Z|=I.DEPTH_BUFFER_BIT),$&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Y.dispose(),V.dispose(),At.dispose(),tt.dispose(),qt.dispose(),Yt.dispose(),F.dispose(),_t.dispose(),Pt.dispose(),K.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Mn),lt.removeEventListener("sessionend",fl),li.stop()};function xt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=et.autoReset,B=St.enabled,$=St.autoUpdate,Z=St.needsUpdate,k=St.type;U(),et.autoReset=w,St.enabled=B,St.autoUpdate=$,St.needsUpdate=Z,St.type=k}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){let B=w.target;B.removeEventListener("dispose",ot),Lt(B)}function Lt(w){$t(w),tt.remove(w)}function $t(w){let B=tt.get(w).programs;B!==void 0&&(B.forEach(function($){K.releaseProgram($)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,Z,k,pt){B===null&&(B=Nt);let It=k.isMesh&&k.matrixWorld.determinant()<0,Ot=ju(w,B,$,Z,k);j.setMaterial(Z,It);let Ut=$.index,Vt=1;if(Z.wireframe===!0){if(Ut=v.getWireframeAttribute($),Ut===void 0)return;Vt=2}let Wt=$.drawRange,kt=$.attributes.position,te=Wt.start*Vt,oe=(Wt.start+Wt.count)*Vt;pt!==null&&(te=Math.max(te,pt.start*Vt),oe=Math.min(oe,(pt.start+pt.count)*Vt)),Ut!==null?(te=Math.max(te,0),oe=Math.min(oe,Ut.count)):kt!=null&&(te=Math.max(te,0),oe=Math.min(oe,kt.count));let ye=oe-te;if(ye<0||ye===1/0)return;_t.setup(k,Z,Ot,$,Ut);let he,ce=rt;if(Ut!==null&&(he=R.get(Ut),ce=dt,ce.setIndex(he)),k.isMesh)Z.wireframe===!0?(j.setLineWidth(Z.wireframeLinewidth*ut()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(k.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),j.setLineWidth(Ht*ut()),k.isLineSegments?ce.setMode(I.LINES):k.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else k.isPoints?ce.setMode(I.POINTS):k.isSprite&&ce.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ht=k._multiDrawStarts,ge=k._multiDrawCounts,ie=k._multiDrawCount,Ze=Ut?R.get(Ut).bytesPerElement:1,Fi=tt.get(Z).currentProgram.getUniforms();for(let Je=0;Je<ie;Je++)Fi.setValue(I,"_gl_DrawID",Je),ce.render(Ht[Je]/Ze,ge[Je])}else if(k.isInstancedMesh)ce.renderInstances(te,ye,k.count);else if($.isInstancedBufferGeometry){let Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ge=Math.min($.instanceCount,Ht);ce.renderInstances(te,ye,ge)}else ce.render(te,ye)};function le(w,B,$){w.transparent===!0&&w.side===We&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,pr(w,B,$),w.side=On,w.needsUpdate=!0,pr(w,B,$),w.side=We):pr(w,B,$)}this.compile=function(w,B,$=null){$===null&&($=w),u=At.get($),u.init(B),M.push(u),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==$&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();let Z=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let It=0;It<pt.length;It++){let Ot=pt[It];le(Ot,$,k),Z.add(Ot)}else le(pt,$,k),Z.add(pt)}),u=M.pop(),Z},this.compileAsync=function(w,B,$=null){let Z=this.compile(w,B,$);return new Promise(k=>{function pt(){if(Z.forEach(function(It){tt.get(It).currentProgram.isReady()&&Z.delete(It)}),Z.size===0){k(w);return}setTimeout(pt,10)}Tt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let se=null;function Cn(w){se&&se(w)}function Mn(){li.stop()}function fl(){li.start()}let li=new hu;li.setAnimationLoop(Cn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(w){se=w,lt.setAnimationLoop(w),w===null?li.stop():li.start()},lt.addEventListener("sessionstart",Mn),lt.addEventListener("sessionend",fl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(B),B=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,B,C),u=At.get(w,M.length),u.init(B),M.push(u),nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Dt.setFromProjectionMatrix(nt,mn,B.reversedDepth),J=this.localClippingEnabled,mt=st.init(this.clippingPlanes,J),m=V.get(w,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){let pt=g.xr.getDepthSensingMesh();pt!==null&&ba(pt,B,-1/0,g.sortObjects)}ba(w,B,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ct,ft),Q=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Q&&Y.addToRenderList(m,w),this.info.render.frame++,mt===!0&&st.beginShadows();let $=u.state.shadowsArray;St.render($,w,B),mt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,k=m.transmissive;if(u.setupLights(),B.isArrayCamera){let pt=B.cameras;if(k.length>0)for(let It=0,Ot=pt.length;It<Ot;It++){let Ut=pt[It];ml(Z,k,w,Ut)}Q&&Y.render(w);for(let It=0,Ot=pt.length;It<Ot;It++){let Ut=pt[It];pl(m,w,Ut,Ut.viewport)}}else k.length>0&&ml(Z,k,w,B),Q&&Y.render(w),pl(m,w,B);C!==null&&T===0&&(Rt.updateMultisampleRenderTarget(C),Rt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(g,w,B),_t.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(u=M[M.length-1],mt===!0&&st.setGlobalState(g.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ba(w,B,$,Z){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Dt.intersectsSprite(w)){Z&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);let It=F.update(w),Ot=w.material;Ot.visible&&m.push(w,It,Ot,$,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Dt.intersectsObject(w))){let It=F.update(w),Ot=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ft.copy(It.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Ot)){let Ut=It.groups;for(let Vt=0,Wt=Ut.length;Vt<Wt;Vt++){let kt=Ut[Vt],te=Ot[kt.materialIndex];te&&te.visible&&m.push(w,It,te,$,Ft.z,kt)}}else Ot.visible&&m.push(w,It,Ot,$,Ft.z,null)}}let pt=w.children;for(let It=0,Ot=pt.length;It<Ot;It++)ba(pt[It],B,$,Z)}function pl(w,B,$,Z){let k=w.opaque,pt=w.transmissive,It=w.transparent;u.setupLightsView($),mt===!0&&st.setGlobalState(g.clippingPlanes,$),Z&&j.viewport(P.copy(Z)),k.length>0&&fr(k,B,$),pt.length>0&&fr(pt,B,$),It.length>0&&fr(It,B,$),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ml(w,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Z.id]===void 0&&(u.state.transmissionRenderTarget[Z.id]=new Sn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?ls:_n,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let pt=u.state.transmissionRenderTarget[Z.id],It=Z.viewport||P;pt.setSize(It.z*g.transmissionResolutionScale,It.w*g.transmissionResolutionScale);let Ot=g.getRenderTarget(),Ut=g.getActiveCubeFace(),Vt=g.getActiveMipmapLevel();g.setRenderTarget(pt),g.getClearColor(O),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),Q&&Y.render($);let Wt=g.toneMapping;g.toneMapping=Hn;let kt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),u.setupLightsView(Z),mt===!0&&st.setGlobalState(g.clippingPlanes,Z),fr(w,$,Z),Rt.updateMultisampleRenderTarget(pt),Rt.updateRenderTargetMipmap(pt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let oe=0,ye=B.length;oe<ye;oe++){let he=B[oe],ce=he.object,Ht=he.geometry,ge=he.material,ie=he.group;if(ge.side===We&&ce.layers.test(Z.layers)){let Ze=ge.side;ge.side=Ge,ge.needsUpdate=!0,gl(ce,$,Z,Ht,ge,ie),ge.side=Ze,ge.needsUpdate=!0,te=!0}}te===!0&&(Rt.updateMultisampleRenderTarget(pt),Rt.updateRenderTargetMipmap(pt))}g.setRenderTarget(Ot,Ut,Vt),g.setClearColor(O,z),kt!==void 0&&(Z.viewport=kt),g.toneMapping=Wt}function fr(w,B,$){let Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pt=w.length;k<pt;k++){let It=w[k],Ot=It.object,Ut=It.geometry,Vt=It.group,Wt=It.material;Wt.allowOverride===!0&&Z!==null&&(Wt=Z),Ot.layers.test($.layers)&&gl(Ot,B,$,Ut,Wt,Vt)}}function gl(w,B,$,Z,k,pt){w.onBeforeRender(g,B,$,Z,k,pt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(g,B,$,Z,w,pt),k.transparent===!0&&k.side===We&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,g.renderBufferDirect($,B,Z,k,w,pt),k.side=On,k.needsUpdate=!0,g.renderBufferDirect($,B,Z,k,w,pt),k.side=We):g.renderBufferDirect($,B,Z,k,w,pt),w.onAfterRender(g,B,$,Z,k,pt)}function pr(w,B,$){B.isScene!==!0&&(B=Nt);let Z=tt.get(w),k=u.state.lights,pt=u.state.shadowsArray,It=k.state.version,Ot=K.getParameters(w,k.state,pt,B,$),Ut=K.getProgramCacheKey(Ot),Vt=Z.programs;Z.environment=w.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(w.isMeshStandardMaterial?Yt:qt).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",ot),Vt=new Map,Z.programs=Vt);let Wt=Vt.get(Ut);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===It)return _l(w,Ot),Wt}else Ot.uniforms=K.getUniforms(w),w.onBeforeCompile(Ot,g),Wt=K.acquireProgram(Ot,Ut),Vt.set(Ut,Wt),Z.uniforms=Ot.uniforms;let kt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=st.uniform),_l(w,Ot),Z.needsLights=td(w),Z.lightsStateVersion=It,Z.needsLights&&(kt.ambientLightColor.value=k.state.ambient,kt.lightProbe.value=k.state.probe,kt.directionalLights.value=k.state.directional,kt.directionalLightShadows.value=k.state.directionalShadow,kt.spotLights.value=k.state.spot,kt.spotLightShadows.value=k.state.spotShadow,kt.rectAreaLights.value=k.state.rectArea,kt.ltc_1.value=k.state.rectAreaLTC1,kt.ltc_2.value=k.state.rectAreaLTC2,kt.pointLights.value=k.state.point,kt.pointLightShadows.value=k.state.pointShadow,kt.hemisphereLights.value=k.state.hemi,kt.directionalShadowMap.value=k.state.directionalShadowMap,kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,kt.spotShadowMap.value=k.state.spotShadowMap,kt.spotLightMatrix.value=k.state.spotLightMatrix,kt.spotLightMap.value=k.state.spotLightMap,kt.pointShadowMap.value=k.state.pointShadowMap,kt.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function xl(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=ms.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function _l(w,B){let $=tt.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function ju(w,B,$,Z,k){B.isScene!==!0&&(B=Nt),Rt.resetTextureUnits();let pt=B.fog,It=Z.isMeshStandardMaterial?B.environment:null,Ot=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yi,Ut=(Z.isMeshStandardMaterial?Yt:qt).get(Z.envMap||It),Vt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Wt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!$.morphAttributes.position,te=!!$.morphAttributes.normal,oe=!!$.morphAttributes.color,ye=Hn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=g.toneMapping);let he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=he!==void 0?he.length:0,Ht=tt.get(Z),ge=u.state.lights;if(mt===!0&&(J===!0||w!==S)){let ke=w===S&&Z.id===b;st.setState(Z,w,ke)}let ie=!1;Z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ge.state.version||Ht.outputColorSpace!==Ot||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isBatchedMesh&&Ht.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ht.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Ut||Z.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==st.numPlanes||Ht.numIntersection!==st.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==kt||Ht.morphNormals!==te||Ht.morphColors!==oe||Ht.toneMapping!==ye||Ht.morphTargetsCount!==ce)&&(ie=!0):(ie=!0,Ht.__version=Z.version);let Ze=Ht.currentProgram;ie===!0&&(Ze=pr(Z,B,k));let Fi=!1,Je=!1,bs=!1,xe=Ze.getUniforms(),nn=Ht.uniforms;if(j.useProgram(Ze.program)&&(Fi=!0,Je=!0,bs=!0),Z.id!==b&&(b=Z.id,Je=!0),Fi||S!==w){j.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",w.projectionMatrix),xe.setValue(I,"viewMatrix",w.matrixWorldInverse);let qe=xe.map.cameraPosition;qe!==void 0&&qe.setValue(I,bt.setFromMatrixPosition(w.matrixWorld)),G.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Je=!0,bs=!0)}if(k.isSkinnedMesh){xe.setOptional(I,k,"bindMatrix"),xe.setOptional(I,k,"bindMatrixInverse");let ke=k.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),xe.setValue(I,"boneTexture",ke.boneTexture,Rt))}k.isBatchedMesh&&(xe.setOptional(I,k,"batchingTexture"),xe.setValue(I,"batchingTexture",k._matricesTexture,Rt),xe.setOptional(I,k,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",k._indirectTexture,Rt),xe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",k._colorsTexture,Rt));let sn=$.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&X.update(k,$,Ze),(Je||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,xe.setValue(I,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Ut,nn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(nn.envMapIntensity.value=B.environmentIntensity),Je&&(xe.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&Qu(nn,bs),pt&&Z.fog===!0&&it.refreshFogUniforms(nn,pt),it.refreshMaterialUniforms(nn,Z,H,q,u.state.transmissionRenderTarget[w.id]),ms.upload(I,xl(Ht),nn,Rt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ms.upload(I,xl(Ht),nn,Rt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(I,"center",k.center),xe.setValue(I,"modelViewMatrix",k.modelViewMatrix),xe.setValue(I,"normalMatrix",k.normalMatrix),xe.setValue(I,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let ke=Z.uniformsGroups;for(let qe=0,Sa=ke.length;qe<Sa;qe++){let hi=ke[qe];Pt.update(hi,Ze),Pt.bind(hi,Ze)}}return Ze}function Qu(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function td(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,$){let Z=tt.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),tt.get(w.texture).__webglTexture=B,tt.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let $=tt.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};let ed=I.createFramebuffer();this.setRenderTarget=function(w,B=0,$=0){C=w,A=B,T=$;let Z=!0,k=null,pt=!1,It=!1;if(w){let Ut=tt.get(w);if(Ut.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(Ut.__webglFramebuffer===void 0)Rt.setupRenderTarget(w);else if(Ut.__hasExternalTextures)Rt.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let kt=w.depthTexture;if(Ut.__boundDepthTexture!==kt){if(kt!==null&&tt.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(It=!0);let Wt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?k=Wt[B][$]:k=Wt[B],pt=!0):w.samples>0&&Rt.useMultisampledRTT(w)===!1?k=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[$]:k=Wt,P.copy(w.viewport),D.copy(w.scissor),L=w.scissorTest}else P.copy(wt).multiplyScalar(H).floor(),D.copy(yt).multiplyScalar(H).floor(),L=zt;if($!==0&&(k=ed),j.bindFramebuffer(I.FRAMEBUFFER,k)&&Z&&j.drawBuffers(w,k),j.viewport(P),j.scissor(D),j.setScissorTest(L),pt){let Ut=tt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,$)}else if(It){let Ut=B;for(let Vt=0;Vt<w.textures.length;Vt++){let Wt=tt.get(w.textures[Vt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,$,Ut)}}else if(w!==null&&$!==0){let Ut=tt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ut.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(w,B,$,Z,k,pt,It,Ot=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){j.bindFramebuffer(I.FRAMEBUFFER,Ut);try{let Vt=w.textures[Ot],Wt=Vt.format,kt=Vt.type;if(!G.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Z&&$>=0&&$<=w.height-k&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ot),I.readPixels(B,$,Z,k,at.convert(Wt),at.convert(kt),pt))}finally{let Vt=C!==null?tt.get(C).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,Z,k,pt,It,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(B>=0&&B<=w.width-Z&&$>=0&&$<=w.height-k){j.bindFramebuffer(I.FRAMEBUFFER,Ut);let Vt=w.textures[Ot],Wt=Vt.format,kt=Vt.type;if(!G.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ot),I.readPixels(B,$,Z,k,at.convert(Wt),at.convert(kt),0);let oe=C!==null?tt.get(C).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,oe);let ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lh(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(te),I.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,$=0){let Z=Math.pow(2,-$),k=Math.floor(w.image.width*Z),pt=Math.floor(w.image.height*Z),It=B!==null?B.x:0,Ot=B!==null?B.y:0;Rt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,It,Ot,k,pt),j.unbindTexture()};let nd=I.createFramebuffer(),id=I.createFramebuffer();this.copyTextureToTexture=function(w,B,$=null,Z=null,k=0,pt=null){pt===null&&(k!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=k,k=0):pt=0);let It,Ot,Ut,Vt,Wt,kt,te,oe,ye,he=w.isCompressedTexture?w.mipmaps[pt]:w.image;if($!==null)It=$.max.x-$.min.x,Ot=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,Wt=$.min.y,kt=$.isBox3?$.min.z:0;else{let sn=Math.pow(2,-k);It=Math.floor(he.width*sn),Ot=Math.floor(he.height*sn),w.isDataArrayTexture?Ut=he.depth:w.isData3DTexture?Ut=Math.floor(he.depth*sn):Ut=1,Vt=0,Wt=0,kt=0}Z!==null?(te=Z.x,oe=Z.y,ye=Z.z):(te=0,oe=0,ye=0);let ce=at.convert(B.format),Ht=at.convert(B.type),ge;B.isData3DTexture?(Rt.setTexture3D(B,0),ge=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Rt.setTexture2DArray(B,0),ge=I.TEXTURE_2D_ARRAY):(Rt.setTexture2D(B,0),ge=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let ie=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fi=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),bs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);let xe=w.isDataArrayTexture||w.isData3DTexture,nn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let sn=tt.get(w),ke=tt.get(B),qe=tt.get(sn.__renderTarget),Sa=tt.get(ke.__renderTarget);j.bindFramebuffer(I.READ_FRAMEBUFFER,qe.__webglFramebuffer),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let hi=0;hi<Ut;hi++)xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tt.get(w).__webglTexture,k,kt+hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tt.get(B).__webglTexture,pt,ye+hi)),I.blitFramebuffer(Vt,Wt,It,Ot,te,oe,It,Ot,I.DEPTH_BUFFER_BIT,I.NEAREST);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||tt.has(w)){let sn=tt.get(w),ke=tt.get(B);j.bindFramebuffer(I.READ_FRAMEBUFFER,nd),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,id);for(let qe=0;qe<Ut;qe++)xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,k,kt+qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,k),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,pt,ye+qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,pt),k!==0?I.blitFramebuffer(Vt,Wt,It,Ot,te,oe,It,Ot,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(ge,pt,te,oe,ye+qe,Vt,Wt,It,Ot):I.copyTexSubImage2D(ge,pt,te,oe,Vt,Wt,It,Ot);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(ge,pt,te,oe,ye,It,Ot,Ut,ce,Ht,he.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,pt,te,oe,ye,It,Ot,Ut,ce,he.data):I.texSubImage3D(ge,pt,te,oe,ye,It,Ot,Ut,ce,Ht,he):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,te,oe,It,Ot,ce,Ht,he.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,te,oe,he.width,he.height,ce,he.data):I.texSubImage2D(I.TEXTURE_2D,pt,te,oe,It,Ot,ce,Ht,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bs),pt===0&&B.generateMipmaps&&I.generateMipmap(ge),j.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&Rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Rt.setTextureCube(w,0):w.isData3DTexture?Rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Rt.setTexture2DArray(w,0):Rt.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,j.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var mu={type:"change"},Xc={type:"start"},xu={type:"end"},oa=new vi,gu=new on,Wg=Math.cos(70*Sc.DEG2RAD),Re=new N,$e=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wc=1e-6,aa=class extends er{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new an,this._lastTargetPosition=new N,this._quat=new an().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new as,this._sphericalDelta=new as,this._scale=1,this._panOffset=new N,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new N,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=Jg.bind(this),this._onKeyDown=Kg.bind(this),this._onTouchStart=jg.bind(this),this._onTouchMove=Qg.bind(this),this._onMouseDown=$g.bind(this),this._onMouseMove=Zg.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=ae.NONE}update(t=null){let e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Re.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<Wg?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Xg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $g(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ae.DOLLY;break;case si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}break;case si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Xc)}function Zg(n){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(n.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xu))}function Kg(n){this.enabled!==!1&&this._handleKeyDown(n)}function jg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ae.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ae.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Xc)}function Qg(n){switch(this._trackPointer(n),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ae.NONE}}function tx(n){this.enabled!==!1&&n.preventDefault()}function ex(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ln=.24;function qc(n,t=0,e=0){let i=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return i-Math.floor(i)}var Mt=(n,t,e,i="#ffffff",s={})=>({label:n,group:t,texture:e,tint:i,...s}),_u={"mortar-white":Mt("\u30E2\u30EB\u30BF\u30EB\uFF08\u767D\uFF09","wall","mortar","#fbfaf4"),"mortar-cream":Mt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","mortar","#f5ead0"),"mortar-ivory":Mt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","mortar","#f1e9d9"),"mortar-grey":Mt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","mortar","#c8c7bf"),"stucco-white":Mt("\u5857\u308A\u58C1\uFF08\u767D\uFF09","wall","stucco","#f8f6ef"),"stucco-ivory":Mt("\u5857\u308A\u58C1\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","stucco","#f3ecda"),"stucco-cream":Mt("\u5857\u308A\u58C1\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","stucco","#f2e2c0"),"stucco-yellow":Mt("\u5857\u308A\u58C1\uFF08\u9EC4\uFF09","wall","stucco","#efd58e"),"stucco-rose":Mt("\u5857\u308A\u58C1\uFF08\u30ED\u30FC\u30BA\uFF09","wall","stucco","#eccdc0"),"stucco-sage":Mt("\u5857\u308A\u58C1\uFF08\u82E5\u8349\uFF09","wall","stucco","#d2dcc0"),"stucco-blue":Mt("\u5857\u308A\u58C1\uFF08\u6C34\u8272\uFF09","wall","stucco","#c8d9e3"),"stucco-charcoal":Mt("\u5857\u308A\u58C1\uFF08\u30C1\u30E3\u30B3\u30FC\u30EB\uFF09","wall","stucco","#54585b"),"plaster-white":Mt("\u6F06\u55B0","wall","plaster","#f6f3ea"),concrete:Mt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u6253\u3061\u653E\u3057","wall","concrete"),"concrete-stained":Mt("\u53E4\u3073\u305F\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8","wall","concreteStained"),"concrete-dark":Mt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF08\u6FC3\uFF09","wall","concreteStained","#a4a39e"),"brick-red":Mt("\u30EC\u30F3\u30AC\uFF08\u8D64\uFF09","wall","brick"),"brick-brown":Mt("\u30EC\u30F3\u30AC\uFF08\u3053\u3052\u8336\uFF09","wall","brick","#b08d7c"),"brick-white":Mt("\u30EC\u30F3\u30AC\uFF08\u767D\uFF09","wall","brickWhite"),"tile-white":Mt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","wall","tile","#fafaf6"),"tile-beige":Mt("\u30BF\u30A4\u30EB\uFF08\u30D9\u30FC\u30B8\u30E5\uFF09","wall","tile","#e7d5bc"),"tile-sand":Mt("\u30BF\u30A4\u30EB\uFF08\u7802\u8272\uFF09","wall","tile","#d8c0a6"),"tile-brown":Mt("\u30BF\u30A4\u30EB\uFF08\u8336\uFF09","wall","tile","#a47b5d"),"tile-grey":Mt("\u30BF\u30A4\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","tile","#b8b6af"),"tile-navy":Mt("\u30BF\u30A4\u30EB\uFF08\u7D3A\uFF09","wall","tile","#49576c"),"siding-white":Mt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u767D\uFF09","wall","siding","#f4f3ee"),"siding-sand":Mt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7802\u8272\uFF09","wall","siding","#d9ceb7"),"siding-grey":Mt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u30B0\u30EC\u30FC\uFF09","wall","siding","#8e9397"),"siding-navy":Mt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7D3A\uFF09","wall","siding","#3e4b5d"),"siding-green":Mt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u6DF1\u7DD1\uFF09","wall","siding","#4d6455"),"wood-natural":Mt("\u677F\u5F35\u308A\uFF08\u660E\u308B\u3044\u6728\uFF09","wall","planks","#d3a979"),"wood-brown":Mt("\u677F\u5F35\u308A\uFF08\u8336\uFF09","wall","planks","#8f6646"),"wood-dark":Mt("\u677F\u5F35\u308A\uFF08\u713C\u6749\uFF09","wall","planks","#3d342e"),"wood-red":Mt("\u677F\u5F35\u308A\uFF08\u3079\u3093\u304C\u3089\uFF09","wall","planks","#8d4f3f"),"metal-dark":Mt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9ED2\uFF09","wall","metalPanel","#3d4349",{roughness:.45,metalness:.7}),"metal-silver":Mt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9280\uFF09","wall","metalPanel","#c3c8cc",{roughness:.4,metalness:.8}),"metal-white":Mt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u767D\uFF09","wall","metalPanel","#eef0f0",{roughness:.5,metalness:.3}),stone:Mt("\u77F3\u5F35\u308A","wall","stone"),"wp-white":Mt("\u58C1\u7D19\uFF08\u767D\uFF09","paper","wallpaper","#f7f5ef"),"wp-ivory":Mt("\u58C1\u7D19\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","paper","wallpaper","#f2ead9"),"wp-grey":Mt("\u58C1\u7D19\uFF08\u30B0\u30EC\u30FC\uFF09","paper","wallpaper","#d9dbd9"),"wp-blue":Mt("\u58C1\u7D19\uFF08\u6C34\u8272\uFF09","paper","wallpaper","#d2dfe9"),"wp-green":Mt("\u58C1\u7D19\uFF08\u82E5\u8349\uFF09","paper","wallpaper","#d7e3d0"),"wp-pink":Mt("\u58C1\u7D19\uFF08\u685C\uFF09","paper","wallpaper","#f1dcd8"),"wp-yellow":Mt("\u58C1\u7D19\uFF08\u305F\u307E\u3054\uFF09","paper","wallpaper","#f4e9bd"),"wp-navy":Mt("\u58C1\u7D19\uFF08\u7D3A\uFF09","paper","wallpaper","#44516a"),"wp-brown":Mt("\u58C1\u7D19\uFF08\u8336\uFF09","paper","wallpaper","#8b6f5c"),"wp-stripe":Mt("\u58C1\u7D19\uFF08\u30B9\u30C8\u30E9\u30A4\u30D7\uFF09","paper","wallpaperStripe"),juraku:Mt("\u3058\u3085\u3089\u304F\u58C1","paper","plaster","#dccfa9"),"tile-bath":Mt("\u30BF\u30A4\u30EB\uFF08\u6C34\u8272\uFF09","paper","bathTile","#d4e9ef"),"tile-bath-white":Mt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","paper","bathTile"),"panel-wood":Mt("\u677F\u58C1","paper","planks","#caa57c"),"floor-maple":Mt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30E1\u30FC\u30D7\u30EB\uFF09","floor","floorboards"),"floor-oak":Mt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30AA\u30FC\u30AF\uFF09","floor","floorboards","#d9b98f"),"floor-walnut":Mt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30A6\u30A9\u30EB\u30CA\u30C3\u30C8\uFF09","floor","floorboards","#8f6b52"),"floor-dark":Mt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u3053\u3052\u8336\uFF09","floor","floorboards","#5d4a40"),tatami:Mt("\u7573","floor","tatami"),"tile-floor":Mt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u767D\uFF09","floor","bathTile"),"tile-floor-blue":Mt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u6C34\u8272\uFF09","floor","bathTile","#d4e9ef"),"stone-floor":Mt("\u77F3\u7573","floor","pavers","#f1ece2"),"genkan-floor":Mt("\u7384\u95A2\u30BF\u30A4\u30EB","floor","pavers","#b8b2a6"),checker:Mt("\u5E02\u677E\u6A21\u69D8\u306E\u5E8A","floor","checker"),"carpet-grey":Mt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u30B0\u30EC\u30FC\uFF09","floor","carpet","#b4b9bf"),"carpet-blue":Mt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u9752\uFF09","floor","carpet","#6f7f93"),"carpet-red":Mt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u3048\u3093\u3058\uFF09","floor","carpet","#9a5a56"),"carpet-green":Mt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u7DD1\uFF09","floor","carpet","#6f8a72"),"concrete-floor":Mt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u5E8A","floor","concrete","#d2d0c9"),deck:Mt("\u30A6\u30C3\u30C9\u30C7\u30C3\u30AD","floor","planks","#b08a62"),"ceil-white":Mt("\u5929\u4E95\uFF08\u767D\uFF09","ceiling","plaster","#fbfaf6"),"ceil-wood":Mt("\u677F\u5929\u4E95","ceiling","planks","#c9a880"),"roof-kawara":Mt("\u74E6\uFF08\u3044\u3076\u3057\u9280\uFF09","roof","kawara","#a7adb4",{roughness:.55,metalness:.2}),"roof-kawara-dark":Mt("\u74E6\uFF08\u9ED2\uFF09","roof","kawara","#5b6068",{roughness:.6,metalness:.15}),"roof-tile-orange":Mt("\u6D0B\u74E6\uFF08\u3060\u3044\u3060\u3044\uFF09","roof","kawara","#c7633d",{roughness:.85}),"roof-tile-brown":Mt("\u6D0B\u74E6\uFF08\u8336\uFF09","roof","kawara","#8b5b45",{roughness:.85}),"roof-tile-green":Mt("\u6D0B\u74E6\uFF08\u7DD1\uFF09","roof","kawara","#4f6b58",{roughness:.8}),"roof-slate":Mt("\u30B9\u30EC\u30FC\u30C8","roof","slate","#5a5e63"),"roof-metal":Mt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u6FC3\u3044\u30B0\u30EC\u30FC\uFF09","roof","roofMetal","#5b5f63",{roughness:.5,metalness:.4}),"roof-metal-green":Mt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u7DD1\u9752\uFF09","roof","roofMetal","#5f8a7c",{roughness:.55,metalness:.35}),"roof-metal-red":Mt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u8D64\u3055\u3073\u8272\uFF09","roof","roofMetal","#8e4d3c",{roughness:.6,metalness:.3}),"roof-concrete":Mt("\u5C4B\u4E0A\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF09","roof","concrete","#9da09b")},ee=(n,t,e,i,s,r={})=>({label:n,door:t,w:e,h:i,s,...r}),ix={"door-entrance":ee("\u7384\u95A2\u30C9\u30A2",!0,.92,2.33,0),"door-oyako":ee("\u89AA\u5B50\u30C9\u30A2",!0,1.24,2.33,0),"door-flat":ee("\u96C6\u5408\u4F4F\u5B85\u306E\u7384\u95A2\u30C9\u30A2\uFF08\u92FC\u88FD\uFF09",!0,.85,2,0),"door-wood":ee("\u6728\u306E\u30C9\u30A2",!0,.78,2,0),"door-white":ee("\u767D\u3044\u30C9\u30A2",!0,.75,2,0),"door-glass":ee("\u30AC\u30E9\u30B9\u30C9\u30A2",!0,.8,2,0,{glass:!0}),"door-steel":ee("\u30B9\u30C1\u30FC\u30EB\u30C9\u30A2",!0,.78,2,0),"door-fold":ee("\u6D74\u5BA4\u306E\u6298\u308C\u6238",!0,.72,2,.05),"door-key":ee("\u9375\u4ED8\u304D\u306E\u30C9\u30A2",!0,.78,2,0,{lock:!0}),"door-slide":ee("\u5F15\u304D\u6238",!0,.8,2,0,{slide:!0}),"door-fusuma":ee("\u3075\u3059\u307E",!0,1.69,1.8,0,{slide:!0}),"door-shoji":ee("\u969C\u5B50",!0,1.69,1.8,0,{slide:!0}),"door-closet":ee("\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u306E\u6298\u308C\u6238",!0,1.6,2,0),"door-double":ee("\u4E21\u958B\u304D\u30C9\u30A2",!0,1.5,2.1,0),"door-auto":ee("\u81EA\u52D5\u30C9\u30A2",!0,1.6,2.3,0,{slide:!0,glass:!0}),"door-terrace":ee("\u6383\u304D\u51FA\u3057\u7A93\uFF08\u51FA\u5165\u308A\u3067\u304D\u308B\uFF09",!0,1.65,2,.03,{slide:!0,glass:!0}),"lift-door":ee("\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u6249",!0,.8,2.1,0,{slide:!0,lift:!0}),"door-platform":ee("\u30DB\u30FC\u30E0\u30C9\u30A2",!0,1.4,2.1,0,{slide:!0,glass:!0,platform:!0}),arch:ee("\u958B\u53E3\uFF08\u30C9\u30A2\u306A\u3057\uFF09",!0,1.2,2,0,{open:!0}),"win-slide":ee("\u5F15\u304D\u9055\u3044\u7A93",!1,1.65,1.1,.9),"win-wide":ee("\u6A2A\u9577\u306E\u7A93",!1,1.65,.9,1.1),"win-full":ee("\u5E8A\u307E\u3067\u306E\u7A93",!1,1.65,1.97,.03),"win-small":ee("\u5C0F\u7A93",!1,.6,.5,1.5),"win-high":ee("\u9AD8\u7A93",!1,.74,.5,1.5),"win-tall":ee("\u7E26\u3059\u3079\u308A\u51FA\u3057\u7A93",!1,.4,1.1,.9),"win-slit":ee("\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.34,1.5,.5),"win-fixed":ee("\u306F\u3081\u6BBA\u3057\u7A93",!1,1,1,1),"win-lattice":ee("\u9762\u683C\u5B50\u3064\u304D\u306E\u7A93",!1,1.19,.9,1.1),"win-shutter":ee("\u3088\u308D\u3044\u6238\u3064\u304D\u306E\u7A93",!1,1,1.2,.8),"win-steel":ee("\u30B9\u30C1\u30FC\u30EB\u30B5\u30C3\u30B7",!1,1.69,1.2,.8),"win-round":ee("\u4E38\u7A93",!1,.8,.8,1.1,{round:!0}),"win-shop":ee("\u30B7\u30E7\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",!1,1.6,2.2,.2),"win-curtain":ee("\u30AB\u30FC\u30C6\u30F3\u30A6\u30A9\u30FC\u30EB",!1,1.7,2.6,.75),"win-ribbon":ee("\u6A2A\u9023\u7A93",!1,1.7,1.5,.9),"win-hood":ee("\u3072\u3055\u3057\u4ED8\u304D\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.5,1.5,.6),"win-block":ee("\u30AC\u30E9\u30B9\u30D6\u30ED\u30C3\u30AF",!1,.8,1.6,.4)};var Bt=(n,t,e,i,s,r={})=>({label:n,group:t,w:e,d:i,h:s,solid:!0,...r}),yu={sofa:Bt("\u30BD\u30D5\u30A1","living",1.5,.72,.78),armchair:Bt("\u3072\u3068\u308A\u639B\u3051\u30BD\u30D5\u30A1","living",.78,.75,.78),"table-low":Bt("\u30ED\u30FC\u30C6\u30FC\u30D6\u30EB","living",.95,.55,.38),tv:Bt("\u30C6\u30EC\u30D3","living",1.3,.38,1.15),shelf:Bt("\u672C\u68DA","living",.9,.3,1.8),cabinet:Bt("\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8","living",.9,.4,.85),rug:Bt("\u30E9\u30B0","living",1.8,1.2,.02,{solid:!1}),plant:Bt("\u89B3\u8449\u690D\u7269","living",.45,.45,1.2),lamp:Bt("\u30D5\u30ED\u30A2\u30E9\u30F3\u30D7","living",.35,.35,1.5),"ceiling-light":Bt("\u5929\u4E95\u306E\u7167\u660E","living",.5,.5,.12,{solid:!1,ceiling:!0}),"table-dining":Bt("\u30C0\u30A4\u30CB\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB","dining",1.4,.8,.72),chair:Bt("\u3044\u3059","dining",.42,.45,.85),kitchen:Bt("\u30AD\u30C3\u30C1\u30F3","dining",1.5,.6,.86),fridge:Bt("\u51B7\u8535\u5EAB","dining",.62,.66,1.76),bed:Bt("\u30D9\u30C3\u30C9","bedroom",1,1.95,.5),"bed-double":Bt("\u30C0\u30D6\u30EB\u30D9\u30C3\u30C9","bedroom",1.5,1.95,.5),desk:Bt("\u673A","bedroom",1.1,.55,.72),wardrobe:Bt("\u6D0B\u670D\u3060\u3093\u3059","bedroom",1,.55,1.9),tansu:Bt("\u305F\u3093\u3059","japanese",.9,.45,1.3),cupboard:Bt("\u98DF\u5668\u68DA","dining",.9,.45,1.85),"mail-boxes":Bt("\u96C6\u5408\u90F5\u4FBF\u53D7\u3051","entrance",1.2,.3,1.3),car:Bt("\u81EA\u52D5\u8ECA","garden",1.48,3.4,1.55),chabudai:Bt("\u3061\u3083\u3076\u53F0","japanese",1,1,.32),zabuton:Bt("\u3056\u3076\u3068\u3093","japanese",.5,.5,.08,{solid:!1}),futon:Bt("\u3075\u3068\u3093","japanese",1,1.9,.14,{solid:!1}),toilet:Bt("\u30C8\u30A4\u30EC","water",.42,.7,.8),bathtub:Bt("\u6D74\u69FD","water",.75,1.4,.56),washbasin:Bt("\u6D17\u9762\u53F0","water",.6,.45,.85),washer:Bt("\u6D17\u6FEF\u6A5F","water",.6,.6,.9),"shoe-box":Bt("\u3052\u305F\u7BB1","entrance",1,.34,.9),boxes:Bt("\u6BB5\u30DC\u30FC\u30EB\u7BB1","entrance",.8,.7,1),rack:Bt("\u30CF\u30F3\u30AC\u30FC\u30E9\u30C3\u30AF","shop",1.3,.4,1.7),counter:Bt("\u30AB\u30A6\u30F3\u30BF\u30FC","shop",1.6,.6,1),mirror:Bt("\u59FF\u898B","shop",.9,.12,1.9),"cafe-table":Bt("\u30AB\u30D5\u30A7\u30C6\u30FC\u30D6\u30EB","shop",.8,.8,.72),stool:Bt("\u30B9\u30C4\u30FC\u30EB","shop",.36,.36,.46),"office-desk":Bt("\u30AA\u30D5\u30A3\u30B9\u30C7\u30B9\u30AF","office",1.2,.62,1.2),"office-chair":Bt("\u30AA\u30D5\u30A3\u30B9\u30C1\u30A7\u30A2","office",.5,.5,.9),bench:Bt("\u30D9\u30F3\u30C1","garden",1.6,.5,.8),planter:Bt("\u30D7\u30E9\u30F3\u30BF\u30FC","garden",.9,.35,.5),hedge:Bt("\u751F\u3051\u57A3","garden",1.6,.5,1.1),fence:Bt("\u30D5\u30A7\u30F3\u30B9","garden",1.6,.08,1),tree:Bt("\u5EAD\u6728","garden",.7,.7,3.2),mailbox:Bt("\u30DD\u30B9\u30C8","garden",.3,.3,1.1),bicycle:Bt("\u81EA\u8EE2\u8ECA","garden",.5,1.7,1),vending:Bt("\u81EA\u52D5\u8CA9\u58F2\u6A5F","garden",1,.7,1.85),"ac-unit":Bt("\u5BA4\u5916\u6A5F","garden",.86,.34,.65),"gate-post":Bt("\u6A5F\u80FD\u9580\u67F1","garden",.3,.16,1.45),lantern:Bt("\u77F3\u706F\u7C60","garden",.5,.5,1.3),"ticket-gate":Bt("\u81EA\u52D5\u6539\u672D\u6A5F","station",.19,1.5,1.03),"ticket-gate-clear":Bt("\u81EA\u52D5\u6539\u672D\u6A5F\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\uFF09","station",.19,1.5,1.03),"ticket-machine":Bt("\u5238\u58F2\u6A5F","station",.85,.5,1.75),"platform-bench":Bt("\u30DB\u30FC\u30E0\u306E\u30D9\u30F3\u30C1","station",1.8,.5,.8),"tactile-line":Bt("\u70B9\u5B57\u30D6\u30ED\u30C3\u30AF\uFF08\u30DB\u30FC\u30E0\uFF09","station",.3,2.4,.01,{solid:!1})};var vu=new N(0,1,0),ca=new N,la=new N,Rn=new N,ha=new N,Yc=new N,Ue=class{constructor(){this.parts=new Map,this.matrix=null}part(t){let e=this.parts.get(t);return e||(e={positions:[],normals:[],uvs:[],indices:[]},this.parts.set(t,e)),e}at(t,e,i,s,r){let o=this.matrix,a=new me().makeRotationY(s).setPosition(t,e,i);return this.matrix=o?o.clone().multiply(a):a,r(this),this.matrix=o,this}face(t,e){this.matrix&&(e=e.map(r=>r.clone().applyMatrix4(this.matrix)));let i=this.part(t);if(ca.subVectors(e[1],e[0]),la.subVectors(e[2],e[0]),Rn.crossVectors(ca,la),Rn.lengthSq()<1e-12)return this;Rn.normalize(),Math.abs(Rn.y)>.999?(ha.set(1,0,0),Yc.set(0,0,1)):(ha.crossVectors(vu,Rn).normalize(),Yc.crossVectors(Rn,ha));let s=i.positions.length/3;for(let r of e)i.positions.push(r.x,r.y,r.z),i.normals.push(Rn.x,Rn.y,Rn.z),i.uvs.push(r.dot(ha),r.dot(Yc));for(let r=1;r<e.length-1;r++)i.indices.push(s,s+r,s+r+1);return this}quad(t,e,i,s,r,o){return ca.subVectors(i,e),la.subVectors(s,e),this.face(t,Rn.crossVectors(ca,la).dot(o)>=0?[e,i,s,r]:[r,s,i,e])}shape(t,e,i,s,r=!0){let o=e.map(([f,p])=>new Gt(f,p)),a=i.map(f=>f.map(([p,x])=>new Gt(p,x))),c=[...o,...a.flat()],l=this.part(t),h=l.positions.length/3,d=new N;for(let f of c)d.set(f.x,s,f.y),this.matrix&&d.applyMatrix4(this.matrix),l.positions.push(d.x,d.y,d.z),l.normals.push(0,r?1:-1,0),l.uvs.push(d.x,d.z);for(let[f,p,x]of Zs.triangulateShape(o,a))(c[p].x-c[f].x)*(c[x].y-c[f].y)-(c[p].y-c[f].y)*(c[x].x-c[f].x)<0===r?l.indices.push(h+f,h+p,h+x):l.indices.push(h+f,h+x,h+p);return this}box(t,e,i,s,r,o,a,c=0){let l=Math.cos(c),h=Math.sin(c),d=(p,x,_)=>new N(e+p*r/2*l+_*a/2*h,i+x*o/2,s-p*r/2*h+_*a/2*l),f=[-1,1].map(p=>[-1,1].map(x=>[-1,1].map(_=>d(p,x,_))));return this.face(t,[f[1][0][0],f[1][1][0],f[1][1][1],f[1][0][1]]),this.face(t,[f[0][0][1],f[0][1][1],f[0][1][0],f[0][0][0]]),this.face(t,[f[0][1][0],f[0][1][1],f[1][1][1],f[1][1][0]]),this.face(t,[f[0][0][1],f[0][0][0],f[1][0][0],f[1][0][1]]),this.face(t,[f[1][0][1],f[1][1][1],f[0][1][1],f[0][0][1]]),this.face(t,[f[0][0][0],f[0][1][0],f[1][1][0],f[1][0][0]]),this}bar(t,e,i,s,r=s){let o=i.clone().sub(e),a=o.length();if(a<1e-5)return this;o.divideScalar(a);let c=new N().crossVectors(o,vu);c.lengthSq()<1e-8&&c.set(1,0,0),c.normalize().multiplyScalar(s/2);let l=new N().crossVectors(c,o).normalize().multiplyScalar(r/2),h=p=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,_])=>p.clone().addScaledVector(c,x).addScaledVector(l,_)),d=h(e),f=h(i);for(let p=0;p<4;p++){let x=(p+1)%4;this.quad(t,d[p],d[x],f[x],f[p],d[p].clone().add(d[x]).multiplyScalar(.5).sub(e))}return this.quad(t,d[0],d[1],d[2],d[3],o.clone().negate()),this.quad(t,f[0],f[1],f[2],f[3],o),this}slab(t,e,i,s,r,o){return this.face(t,[new N(e,o,i),new N(e,o,r),new N(s,o,r),new N(s,o,i)]),this}cylinder(t,e,i,s,r,o,a=10,c=r){let l=(f,p)=>Array.from({length:a},(x,_)=>{let m=_/a*Math.PI*2;return new N(e+Math.cos(m)*f,p,s+Math.sin(m)*f)}),h=l(r,i),d=l(c,i+o);for(let f=0;f<a;f++){let p=(f+1)%a;this.face(t,[h[f],d[f],d[p],h[p]])}return c>.001&&this.face(t,[...d].reverse()),this}get empty(){return[...this.parts.values()].every(t=>!t.indices.length)}build(t,{cast:e=!0,receive:i=!0,where:s=""}={}){let r=[];for(let[o,a]of this.parts){if(!a.indices.length)continue;let c=mx(o,s),l=new Ye;l.setAttribute("position",new Ee(a.positions,3)),l.setAttribute("normal",new Ee(a.normals,3)),l.setAttribute("uv",new Ee(a.uvs,2)),l.setIndex(a.indices);let h=new be(l,c);h.castShadow=e&&!c.transparent,h.receiveShadow=i,t.add(h),r.push(h)}return r}},_1=new tn({transparent:!0,depthWrite:!1,side:We,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`});function Pi(n){n.traverse(t=>{(t.isMesh||t.isLine||t.isSprite)&&(t.geometry?.dispose(),t.userData.ownMaterial&&(t.material.map?.dispose(),t.material.dispose()))}),n.clear()}function Mu(n){let t=document.createElement("canvas");return t.width=n,t.height=n,t}function ua(n,t,e,i,s){let r=Math.imul((n%e+e)%e,374761393)^Math.imul((t%i+i)%i,668265263)^Math.imul(s+1,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}var $c=new Map;function ax(n,t,e,i,s){let r=`${n}|${t}|${e}|${i}|${s}`;if($c.has(r))return $c.get(r);let o=new Float32Array(n*n),a=1,c=0;for(let l=0;l<i;l++){let h=Math.max(1,Math.round(t*2**l)),d=Math.max(1,Math.round(e*2**l));for(let f=0;f<n;f++){let p=f/n*d,x=Math.floor(p),_=p-x,m=_*_*(3-2*_);for(let u=0;u<n;u++){let y=u/n*h,M=Math.floor(y),g=y-M,E=g*g*(3-2*g),A=ua(M,x,h,d,s+l*7),T=ua(M+1,x,h,d,s+l*7),C=ua(M,x+1,h,d,s+l*7),b=ua(M+1,x+1,h,d,s+l*7);o[f*n+u]+=(A+(T-A)*E+(C-A)*m+(A-T-C+b)*E*m)*a}}c+=a,a*=.5}for(let l=0;l<o.length;l++)o[l]/=c;return $c.set(r,o),o}var bu=n=>{let t=Math.round(Math.min(1,Math.max(0,n))*255);return`rgb(${t},${t},${t})`},ai=([n,t,e],i=0)=>`rgb(${Math.round(n+i)},${Math.round(t+i)},${Math.round(e+i)})`,Jc=class{constructor(t){this.size=t,this.colour=Mu(t).getContext("2d",{willReadFrequently:!0}),this.height=Mu(t).getContext("2d",{willReadFrequently:!0}),this.passes=[],this.random=1}roll(){return this.random++,qc(this.random,this.size,7)}fill(t,e=.5){return this.colour.fillStyle=Array.isArray(t)?ai(t):t,this.colour.fillRect(0,0,this.size,this.size),this.height.fillStyle=bu(e),this.height.fillRect(0,0,this.size,this.size),this}both(t,e,i){for(let[s,r]of[[this.colour,t],[this.height,e==null?null:bu(e)]])if(r!=null){s.fillStyle=r,s.strokeStyle=r;for(let o of[0,-this.size,this.size])for(let a of[0,-this.size,this.size])s.save(),s.translate(o,a),i(s),s.restore()}return this}rect(t,e,i,s,r,o){return this.both(Array.isArray(r)?ai(r):r,o,a=>a.fillRect(t,e,i,s))}line(t,e,i,s,r,o,a){return this.both(o,a,c=>{c.lineWidth=r,c.beginPath(),c.moveTo(t,e),c.lineTo(i,s),c.stroke()})}dot(t,e,i,s,r){return this.both(s,r,o=>{o.beginPath(),o.arc(t,e,i,0,Math.PI*2),o.fill()})}speckle(t,[e,i],s,r){for(let o=0;o<t;o++)this.dot(this.roll()*this.size,this.roll()*this.size,e+this.roll()*(i-e),s[Math.floor(this.roll()*s.length)],typeof r=="function"?r(this.roll()):r);return this}streaks(t,e,{width:i=4,length:s=.6}={}){for(let r=0;r<t;r++){let o=this.roll()*this.size,a=this.roll()*this.size,c=(.2+this.roll()*s)*this.size,l=1+this.roll()*i;for(let h of[0,-this.size,this.size])for(let d of[0,-this.size]){let f=this.colour.createLinearGradient(0,a+d,0,a+d+c);f.addColorStop(0,e),f.addColorStop(1,"rgba(0,0,0,0)"),this.colour.fillStyle=f,this.colour.fillRect(o+h,a+d,l,c)}}return this}cracks(t,e,{width:i=1.2,level:s=.15,steps:r=26}={}){for(let o=0;o<t;o++){let a=this.roll()*this.size,c=this.roll()*this.size,l=this.roll()*Math.PI*2;for(let h=0;h<r;h++){l+=(this.roll()-.5)*1.1;let d=a+Math.cos(l)*this.size*.022,f=c+Math.sin(l)*this.size*.022;this.line(a,c,d,f,i*(.5+this.roll()),e,s),a=d,c=f}}return this}noise({cells:t=8,cellsY:e=t,octaves:i=3,colour:s=0,height:r=0,seed:o=1,tint:a=[1,1,1],ridge:c=!1}){return this.passes.push({cells:t,cellsY:e,octaves:i,colour:s,height:r,seed:o,tint:a,ridge:c}),this}finish({metres:t,depth:e=.002,rough:i=[.9,.9],shade:s=.7}){let{size:r}=this,o=this.colour.getImageData(0,0,r,r),a=this.height.getImageData(0,0,r,r).data,c=new Float32Array(r*r);for(let _=0;_<c.length;_++)c[_]=a[_*4]/255;for(let _ of this.passes){let m=ax(r,_.cells,_.cellsY,_.octaves,_.seed%3);for(let u=0;u<c.length;u++){let y=(_.ridge?1-Math.abs(m[u]*2-1):m[u])-.5;_.colour&&(o.data[u*4]+=y*_.colour*_.tint[0],o.data[u*4+1]+=y*_.colour*_.tint[1],o.data[u*4+2]+=y*_.colour*_.tint[2]),_.height&&(c[u]=Math.min(1,Math.max(0,c[u]+y*_.height)))}}this.colour.putImageData(o,0,0);let l=e*r/t*1.6,h=new Uint8Array(r*r*4),d=new Uint8Array(r*r*4);for(let _=0;_<r;_++){let m=(_-1+r)%r*r,u=(_+1)%r*r,y=(r-1-_)*r;for(let M=0;M<r;M++){let g=c[_*r+M],E=(c[_*r+(M+1)%r]-c[_*r+(M-1+r)%r])/2*l,A=(c[u+M]-c[m+M])/2*l,T=Math.hypot(E,A,1),C=(y+M)*4;h[C]=(-E/T*.5+.5)*255,h[C+1]=(A/T*.5+.5)*255,h[C+2]=(1/T*.5+.5)*255,h[C+3]=g*255,d[C]=(s+(1-s)*g)*255,d[C+1]=(i[0]+(i[1]-i[0])*g)*255,d[C+2]=255,d[C+3]=255}}let f=_=>(_.wrapS=_i,_.wrapT=_i,_.repeat.set(1/t,1/t),_.anisotropy=wu,_),p=_=>{let m=new ti(_,r,r,ze);return m.generateMipmaps=!0,m.minFilter=Tn,m.magFilter=Qe,m.needsUpdate=!0,f(m)},x=f(new ei(this.colour.canvas));return x.colorSpace=Me,{map:x,normalMap:p(h),surfaceMap:p(d),metres:t,depth:e}}};function Ii(n,t,e,{joint:i,jointLevel:s=.2,gap:r=2,stagger:o=!0,palette:a,tone:c=16,level:l=.85,bevel:h=0}){let{size:d}=n;n.fill(i,s);let f=d/t,p=d/e;for(let x=0;x<e;x++){let _=o&&x%2?f/2:0;for(let m=0;m<t;m++){let u=a[Math.floor(n.roll()*a.length)],y=(n.roll()-.5)*c,M=m*f+_+r/2,g=x*p+r/2;n.rect(M,g,f-r,p-r,ai(u,y),l+(n.roll()-.5)*.12),h&&(n.rect(M,g,f-r,h,"rgba(255,255,255,0.16)",null),n.rect(M,g+p-r-h,f-r,h,"rgba(0,0,0,0.2)",l-.25))}}}var Su={mortar:{size:512,metres:2.4,depth:.0035,rough:[.97,.85],relief:!0,paint(n){n.fill("#ece9e0").streaks(24,"rgba(92,88,74,0.11)").streaks(7,"rgba(58,70,58,0.09)",{width:10,length:.45}).cracks(3,"rgba(70,66,58,0.32)",{width:.8}).speckle(420,[.4,1.3],["rgba(120,115,102,0.28)","rgba(255,252,245,0.32)"],t=>.35+t*.45).noise({cells:6,octaves:4,colour:14,height:.16,seed:2,ridge:!0}).noise({cells:120,octaves:2,colour:11,height:.48,seed:3})}},stucco:{size:512,metres:2,depth:.0055,rough:[.97,.84],relief:!0,paint(n){n.fill("#f1eee7").noise({cells:10,octaves:4,colour:14,height:.58,seed:4,ridge:!0}).speckle(350,[.5,1.5],["rgba(110,104,92,0.22)","rgba(255,255,250,0.28)"],null).noise({cells:120,octaves:2,colour:7,height:.2,seed:5}).noise({cells:3,octaves:2,colour:9,seed:6})}},plaster:{size:256,metres:3,depth:.001,rough:[.9,.8],paint(n){n.fill("#f2f1ed").noise({cells:5,octaves:3,colour:7,height:.2,seed:7}).noise({cells:90,octaves:1,colour:4,height:.1,seed:8})}},concrete:{size:512,metres:3.6,depth:.0045,rough:[.96,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#b0aea6");for(let e=0;e<4;e++)for(let i=0;i<2;i++){let s=(n.roll()-.5)*10;n.rect(e*t/4,i*t/2,t/4,t/2,ai([176,174,166],s),.52+(n.roll()-.5)*.06)}n.streaks(22,"rgba(66,68,66,0.16)",{width:7,length:.72});for(let e=0;e<4;e++)n.rect(e*t/4-1.5,0,3,t,"rgba(48,48,46,0.55)",.12),n.rect(e*t/4+1.5,0,1.5,t,"rgba(240,238,232,0.24)",.65);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(48,48,46,0.55)",.12),n.rect(0,e*t/2+1.5,t,1.5,"rgba(240,238,232,0.22)",.65);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let s=e*t/4+t/8,r=i*t/4+t/8;n.dot(s,r,4.8,"rgba(130,128,122,0.5)",.35),n.dot(s,r,3.2,"rgba(32,32,32,0.78)",.02)}n.speckle(360,[.5,1.8],["rgba(38,38,38,0.42)","rgba(74,74,70,0.35)","rgba(225,223,216,0.25)"],.12).noise({cells:5,octaves:4,colour:28,height:.1,seed:9}).noise({cells:150,octaves:1,colour:12,height:.24,seed:10})}},concreteStained:{size:512,metres:3.6,depth:.005,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#878681").streaks(54,"rgba(26,28,26,0.26)",{width:9,length:.75}).streaks(9,"rgba(120,70,35,0.26)",{width:5,length:.5}).streaks(10,"rgba(225,225,215,0.2)",{width:7,length:.35});for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(28,28,28,0.6)",.08);for(let e=0;e<2;e++)n.rect(0,e*t/2-2,t,4,"rgba(28,28,28,0.6)",.08);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.8,"rgba(18,18,18,0.8)",0);n.cracks(5,"rgba(24,24,24,0.55)").speckle(380,[.6,2.2],["rgba(30,30,30,0.45)","rgba(150,150,140,0.3)"],.1).noise({cells:4,octaves:4,colour:44,height:.1,seed:11}).noise({cells:150,octaves:1,colour:14,height:.26,seed:12})}},brick:{size:512,metres:1.76,depth:.009,rough:[.98,.86],relief:!0,paint(n){Ii(n,8,16,{joint:"#b6b0a4",gap:4,tone:26,bevel:2,palette:[[152,82,62],[166,96,70],[138,72,56],[176,108,84],[146,90,72]]}),n.speckle(500,[.6,1.8],["rgba(60,30,24,0.3)","rgba(210,150,120,0.25)"],null).noise({cells:70,octaves:2,colour:16,height:.2,seed:13}).noise({cells:4,octaves:3,colour:16,seed:14})}},brickWhite:{size:512,metres:1.76,depth:.008,rough:[.97,.8],relief:!0,paint(n){Ii(n,8,16,{joint:"#cfcbc2",gap:4,tone:10,bevel:2,palette:[[240,238,232],[232,230,224],[244,242,238],[226,222,214]]}),n.noise({cells:70,octaves:2,colour:9,height:.2,seed:15}).noise({cells:4,octaves:3,colour:10,seed:16})}},tile:{size:512,metres:.9,depth:.0045,rough:[.9,.24],relief:!0,paint(n){Ii(n,9,18,{joint:"#868178",jointLevel:.2,gap:3.4,tone:14,bevel:1.8,palette:[[244,243,238],[235,234,229],[248,247,244],[228,226,220],[239,236,228]]}),n.streaks(8,"rgba(80,76,68,0.08)",{width:5,length:.45}).noise({cells:4,octaves:3,colour:9,seed:17}).noise({cells:90,octaves:1,colour:5,height:.06,seed:18})}},siding:{size:512,metres:1.44,depth:.0075,rough:[.9,.68],relief:!0,paint(n){let{size:t}=n;n.fill("#efefeb");for(let e=0;e<8;e++){let i=e*t/8,s=(n.roll()-.5)*7;for(let r=0;r<16;r++)n.rect(0,i+r*t/128,t,t/128+.5,ai([239,239,235],s),.34+r/15*.56);n.rect(0,i+t/8-3.2,t,3.2,"rgba(0,0,0,0.34)",.04),n.rect(0,i,t,2.2,"rgba(255,255,255,0.38)",null)}n.rect(t*.5-1.2,0,2.4,t,"rgba(90,88,82,0.28)",.16),n.noise({cells:6,cellsY:96,octaves:2,colour:10,height:.08,seed:19})}},planks:{size:512,metres:1.2,depth:.005,rough:[.95,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#e9d9c3");for(let e=0;e<8;e++){let i=e*t/8;if(n.rect(i,0,t/8,t,`rgba(${n.roll()>.5?"255,244,224":"70,46,24"},${.05+n.roll()*.13})`,.72+n.roll()*.14),n.rect(i-1.5,0,3,t,"rgba(34,22,12,0.75)",.05),n.roll()>.6){let s=i+t/16+(n.roll()-.5)*t/20,r=n.roll()*t;for(let o=4;o>0;o--)n.dot(s,r,o*2.4,`rgba(70,44,24,${.12+(4-o)*.09})`,.55)}}n.noise({cells:90,cellsY:3,octaves:2,colour:30,height:.16,seed:20,tint:[1,.86,.66]}).noise({cells:22,cellsY:2,octaves:2,colour:18,height:.08,seed:21,ridge:!0,tint:[1,.86,.66]})}},wood:{size:512,metres:1.1,depth:.0012,rough:[.82,.6],paint(n){n.fill("#96704e").noise({cells:70,cellsY:2,octaves:3,colour:34,height:.3,seed:22,tint:[1,.82,.6]}).noise({cells:14,cellsY:1,octaves:2,colour:22,seed:23,ridge:!0,tint:[1,.82,.6]}).noise({cells:3,octaves:2,colour:14,seed:24})}},metalPanel:{size:512,metres:2.4,depth:.004,rough:[.7,.42],paint(n){let{size:t}=n;n.fill("#e8e8e8",.8);for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(0,0,0,0.5)",.1),n.rect(e*t/4+2,0,2,t,"rgba(255,255,255,0.35)",null);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(0,0,0,0.42)",.15);n.noise({cells:3,octaves:3,colour:9,height:.05,seed:25}).noise({cells:2,cellsY:60,octaves:1,colour:5,seed:26})}},stone:{size:512,metres:2,depth:.014,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#77736b",.15);let e=0;for(let i of[.22,.3,.2,.28]){let s=n.roll()*40,r=s+t;for(;s<r-1;){let o=Math.min(r-s,t*(.14+n.roll()*.2)),a=(n.roll()-.5)*34,c=n.roll()>.6?[176,168,150]:[164,162,156];n.rect(s+2.5,e*t+2.5,o-5,i*t-5,ai(c,a),.7+n.roll()*.25),s+=o}e+=i}n.noise({cells:26,octaves:4,colour:26,height:.4,seed:27}).noise({cells:4,octaves:2,colour:12,seed:28})}},wallpaper:{size:256,metres:.8,depth:6e-4,rough:[.95,.88],paint(n){n.fill("#f4f2ec").noise({cells:128,cellsY:20,octaves:1,colour:5,height:.5,seed:29}).noise({cells:20,cellsY:128,octaves:1,colour:5,height:.5,seed:30}).noise({cells:3,octaves:2,colour:4,seed:31})}},wallpaperStripe:{size:256,metres:.64,depth:6e-4,rough:[.95,.88],paint(n){let{size:t}=n;n.fill("#f3efe4");for(let e=0;e<4;e++)n.rect(e*t/4,0,t/8,t,"#cfdbe3",.55),n.rect(e*t/4+t/8-2,0,2,t,"#b9982f",.6);n.noise({cells:128,cellsY:20,octaves:1,colour:5,height:.4,seed:32})}},floorboards:{size:512,metres:1.44,depth:.0016,rough:[.7,.36],paint(n){let{size:t}=n;n.fill("#e3c79d",.8);for(let e=0;e<12;e++){let i=e*t/12,s=n.roll()*t;for(let r=0;r<3;r++){let o=t*(.22+n.roll()*.3);n.rect(i,s,t/12,o,`rgba(${n.roll()>.5?"255,240,214":"96,60,28"},${.04+n.roll()*.16})`,null),n.rect(i,s,t/12,1.6,"rgba(60,36,18,0.6)",.2),s+=o}n.rect(i-.8,0,1.6,t,"rgba(60,36,18,0.62)",.15)}n.noise({cells:110,cellsY:3,octaves:2,colour:22,height:.12,seed:33,tint:[1,.84,.62]}).noise({cells:26,cellsY:2,octaves:2,colour:12,seed:34,ridge:!0,tint:[1,.84,.62]})}},tatami:{size:512,metres:1.82,depth:.0015,rough:[.95,.82],paint(n){let{size:t}=n;n.fill("#b9bb86");for(let e=0;e<t;e+=3)n.rect(0,e,t,1.4,`rgba(86,96,48,${.1+n.roll()*.14})`,.25);for(let e of[0,t/2])n.rect(e-7,0,14,t,"#2f3a2c",.9);n.noise({cells:4,octaves:3,colour:10,seed:35,tint:[1,1,.5]}).noise({cells:160,cellsY:6,octaves:1,colour:8,height:.2,seed:36})}},bathTile:{size:256,metres:.8,depth:.0025,rough:[.9,.14],paint(n){Ii(n,8,8,{joint:"#a9b0b2",jointLevel:.25,gap:3,stagger:!1,tone:6,bevel:1.5,palette:[[246,248,248],[240,243,244],[250,251,251]]})}},checker:{size:256,metres:1.2,depth:.002,rough:[.9,.22],paint(n){let{size:t}=n;n.fill("#8a8a88",.3);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.rect(i*t/4+1,e*t/4+1,t/4-2,t/4-2,(e+i)%2?"#3f4042":"#f1eee7",.85);n.noise({cells:6,octaves:3,colour:8,seed:37})}},pavers:{size:512,metres:1.6,depth:.007,rough:[.98,.82],relief:!0,paint(n){Ii(n,4,4,{joint:"#7f7a70",jointLevel:.15,gap:6,stagger:!1,tone:16,bevel:3,palette:[[226,220,206],[214,208,194],[234,230,218],[206,200,186]]}),n.noise({cells:40,octaves:3,colour:16,height:.22,seed:38}).noise({cells:3,octaves:3,colour:14,seed:39})}},carpet:{size:256,metres:1,depth:.003,rough:[1,.96],paint(n){n.fill("#cfcfcf").noise({cells:128,octaves:1,colour:40,height:.7,seed:40}).noise({cells:5,octaves:3,colour:10,seed:41})}},kawara:{size:512,metres:1.5,depth:.032,rough:[.76,.42],relief:!0,paint(n){let{size:t}=n,e=6,i=5;n.fill("#cfcfcf");for(let s=0;s<i;s++){let r=s*t/i;for(let o=0;o<e;o++){let a=o*t/e,c=(n.roll()-.5)*24;for(let l=0;l<16;l++){let h=Math.sin(l/15*Math.PI*1.25-.25),d=h>.55?8:0;n.rect(a+l*t/e/16,r,t/e/16+.6,t/i,ai([206,206,208],c+h*28+d),.22+Math.max(0,h)*.64)}n.rect(a,r+t/i-5.5,t/e,5.5,"rgba(0,0,0,0.44)",.02),n.rect(a,r,t/e,3.2,"rgba(255,255,255,0.26)",null)}}n.noise({cells:60,octaves:2,colour:10,height:.05,seed:42}).noise({cells:3,octaves:2,colour:12,seed:43})}},slate:{size:512,metres:1.2,depth:.009,rough:[.94,.66],relief:!0,paint(n){let{size:t}=n;n.fill("#b9b9b9",.5);for(let e=0;e<4;e++)for(let i=-1;i<6;i++){let s=i*t/6+(e%2?t/12:0),r=e*t/4,o=(n.roll()-.5)*32;for(let a=0;a<8;a++)n.rect(s+1,r+a*t/32,t/6-2,t/32+.5,ai([196,196,196],o),.28+a/7*.62);n.rect(s,r+t/4-4.2,t/6,4.2,"rgba(0,0,0,0.45)",.04),n.rect(s,r+t/4-6,t/6,1.8,"rgba(255,255,255,0.18)",null),n.rect(s-1,r,2,t/4,"rgba(0,0,0,0.32)",.1)}n.noise({cells:50,octaves:3,colour:15,height:.09,seed:44})}},roofMetal:{size:256,metres:.9,depth:.024,rough:[.58,.36],relief:!0,paint(n){let{size:t}=n;n.fill("#d6d6d6",.3);for(let e=0;e<4;e++){let i=e*t/4;n.rect(i-5,0,10,t,"rgba(0,0,0,0.24)",.65),n.rect(i-2,0,4,t,"rgba(255,255,255,0.45)",1)}n.noise({cells:2,cellsY:40,octaves:1,colour:6,seed:45}).noise({cells:4,octaves:3,colour:8,height:.04,seed:46})}},asphalt:{size:512,metres:4,depth:.0045,rough:[.96,.82],relief:!0,paint(n){n.fill("#45474b").speckle(2100,[.5,1.7],["rgba(182,182,178,0.52)","rgba(14,14,16,0.52)","rgba(128,124,114,0.48)","rgba(210,206,196,0.35)"],t=>.28+t*.64).cracks(5,"rgba(16,16,18,0.72)",{width:1.5,level:.05,steps:34}).noise({cells:5,octaves:4,colour:19,height:.1,seed:47}).noise({cells:180,octaves:1,colour:17,height:.42,seed:48})}},sidewalk:{size:512,metres:2.4,depth:.0055,rough:[.96,.8],relief:!0,paint(n){Ii(n,6,6,{joint:"#686660",jointLevel:.14,gap:4,stagger:!0,tone:16,bevel:2.2,palette:[[194,191,183],[182,179,171],[202,199,191],[174,171,163],[188,183,173]]}),n.speckle(420,[.5,1.7],["rgba(56,56,52,0.32)","rgba(236,235,228,0.28)"],null).noise({cells:64,octaves:2,colour:15,height:.22,seed:49}).noise({cells:3,octaves:3,colour:16,seed:50})}},grass:{size:512,metres:6,depth:.02,rough:[1,.92],paint(n){let{size:t}=n;n.fill("#587040");for(let e=0;e<5200;e++){let i=n.roll(),s=n.roll()*t,r=n.roll()*t;n.line(s,r,s+(n.roll()-.5)*6,r-3-n.roll()*6,1,i>.6?"rgba(134,156,86,0.5)":i>.25?"rgba(52,82,40,0.55)":"rgba(126,124,70,0.4)",.4+i*.5)}n.noise({cells:5,octaves:4,colour:34,height:.2,seed:51,tint:[.9,1,.5]}).noise({cells:26,octaves:2,colour:16,seed:52,tint:[1,1,.3]})}},dirt:{size:256,metres:5,depth:.01,rough:[1,.94],paint(n){n.fill("#88765c").speckle(260,[.6,2.4],["rgba(60,50,40,0.4)","rgba(190,176,150,0.35)"],t=>t).noise({cells:4,octaves:4,colour:30,height:.3,seed:53}).noise({cells:90,octaves:1,colour:14,height:.3,seed:54})}},gravel:{size:256,metres:1.5,depth:.012,rough:[1,.9],relief:!0,paint(n){n.fill("#77746c",.1).speckle(900,[2,5],["#b9b5aa","#9e9a90","#c9c5ba","#8a877e","#a8a094"],t=>.5+t*.5).noise({cells:80,octaves:1,colour:12,height:.1,seed:55})}},cblock:{size:512,metres:1.6,depth:.006,rough:[.98,.9],relief:!0,paint(n){Ii(n,4,8,{joint:"#a7a59d",jointLevel:.25,gap:3,tone:12,bevel:1,level:.86,palette:[[176,174,167],[168,167,161],[184,182,175],[162,161,156],[172,168,160]]}),n.speckle(900,[.4,1.4],["rgba(70,70,66,0.35)","rgba(210,208,200,0.25)"],.7).noise({cells:40,octaves:2,colour:12,height:.2,seed:61}).noise({cells:3,octaves:3,colour:14,seed:62,tint:[1,1,.9]})}},hedge:{size:512,metres:1.2,depth:.05,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#22381c",.15);let e=[[78,112,52],[92,128,60],[64,98,44],[104,136,66],[58,86,40],[118,146,70]];for(let i=0;i<3400;i++){let s=n.roll()*t,r=n.roll()*t,o=5+n.roll()*7,a=n.roll()*Math.PI,[c,l,h]=e[Math.floor(n.roll()*e.length)],d=.8+n.roll()*.4;n.both(`rgb(${Math.round(c*d)},${Math.round(l*d)},${Math.round(h*d)})`,.45+n.roll()*.55,f=>{f.beginPath(),f.ellipse(s,r,o,o*.45,a,0,Math.PI*2),f.fill()})}n.noise({cells:6,octaves:3,colour:26,height:.35,seed:63}).noise({cells:2,octaves:2,colour:14,seed:64,tint:[1,1,.6]})}},bark:{size:256,metres:1,depth:.03,rough:[1,.9],relief:!0,paint(n){n.fill("#6f5d4b").noise({cells:16,cellsY:2,octaves:3,colour:60,height:.9,seed:56,ridge:!0}).noise({cells:60,cellsY:20,octaves:2,colour:20,height:.15,seed:57}).noise({cells:3,octaves:2,colour:16,seed:58,tint:[.6,1,.6]})}}},Zc=new Map,wu=4,lr=1;function cx(n){if(!Zc.has(n)){let t=Su[n],e=new Jc(t.size);t.paint(e),Zc.set(n,{...e.finish(t),relief:!!t.relief})}return Zc.get(n)}var lx={value:new N(1.32,1.27,1.17)},hx=`
  uniform float parallaxDepth;
  uniform vec3 machiRoom;
  varying vec3 vMachiWorld;

  #ifndef USE_NORMALMAP_TANGENTSPACE
  vec2 parallaxShift() { return vec2( 0.0 ); }
  #else
  // The texture is looked up where the line of sight really meets the bumps, a few steps
  // below the flat face.
  vec2 parallaxShift() {
    float distance = length( vViewPosition );
    float reach = parallaxDepth * ( 1.0 - smoothstep( 9.0, 22.0, distance ) );
    if ( reach <= 0.0 ) return vec2( 0.0 );
    vec3 facing = normalize( vNormal );
    #ifdef DOUBLE_SIDED
      facing *= gl_FrontFacing ? 1.0 : - 1.0;
    #endif
    mat3 frame = getTangentFrame( - vViewPosition, facing, vNormalMapUv );
    vec3 eye = normalize( vViewPosition );
    vec3 sight = vec3( dot( eye, frame[ 0 ] ), dot( eye, frame[ 1 ] ), max( dot( eye, frame[ 2 ] ), 0.22 ) );
    vec2 ddx = dFdx( vNormalMapUv );
    vec2 ddy = dFdy( vNormalMapUv );
    const float steps = 12.0;
    vec2 stride = - sight.xy / sight.z * reach / steps;
    vec2 at = vNormalMapUv;
    float sunk = 0.0;
    float floorAt = 1.0 - textureGrad( normalMap, at, ddx, ddy ).a;
    float before = 0.0;
    for ( int index = 0; index < 12; index ++ ) {
      if ( sunk >= floorAt ) break;
      before = floorAt - sunk;
      at += stride;
      sunk += 1.0 / steps;
      floorAt = 1.0 - textureGrad( normalMap, at, ddx, ddy ).a;
    }
    float after = sunk - floorAt;
    at -= stride * clamp( after / max( after + before, 1e-4 ), 0.0, 1.0 );
    return at - vNormalMapUv;
  }
  #endif

  float machiHash( vec2 p ) {
    vec3 q = fract( vec3( p.xyx ) * 0.1031 );
    q += dot( q, q.yzx + 33.33 );
    return fract( ( q.x + q.y ) * q.z );
  }
  float machiNoise( vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );
    vec2 u = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( machiHash( i ), machiHash( i + vec2( 1.0, 0.0 ) ), u.x ),
      mix( machiHash( i + vec2( 0.0, 1.0 ) ), machiHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
  }
  // Soft blotches: three sizes of noise, each half as strong as the one before.
  float machiCloud( vec2 p ) {
    return machiNoise( p ) * 0.57 + machiNoise( p * 2.03 + 17.1 ) * 0.29 + machiNoise( p * 4.11 + 41.7 ) * 0.14;
  }
`,ux=`
  float machiRough = 0.0;
  #ifdef MACHI_WEAR
  {
    vec3 machiN = inverseTransformDirection( normalize( vNormal ), viewMatrix );
    #ifdef DOUBLE_SIDED
      machiN *= gl_FrontFacing ? 1.0 : - 1.0;
    #endif
    vec3 machiA = abs( machiN );
    // Across a face: along the ground for what lies flat, along the wall and up it otherwise.
    vec2 machiQ = machiA.y > 0.6 ? vMachiWorld.xz
      : machiA.x > machiA.z ? vec2( vMachiWorld.z + vMachiWorld.x * 0.37, vMachiWorld.y ) : vec2( vMachiWorld.x + vMachiWorld.z * 0.37, vMachiWorld.y );
    float machiFar = length( vViewPosition );
    float machiBroad = machiCloud( machiQ * 0.23 );
    float machiFine = mix( 0.5, machiCloud( machiQ * 1.9 + 9.0 ), 1.0 - smoothstep( 50.0, 150.0, machiFar ) );
    float machiGrain = ( machiNoise( machiQ * 173.0 ) - 0.5 ) * ( 1.0 - smoothstep( 1.2, 3.5, machiFar ) );
    #ifdef MACHI_OUTDOOR
      float machiWall = 1.0 - smoothstep( 0.45, 0.7, machiA.y );
      float machiUp = smoothstep( 0.5, 0.9, machiN.y );
      // Dirt splashed up from the ground, higher in some places than in others.
      float machiFoot = machiWall * ( 1.0 - smoothstep( 0.02, 0.3 + 0.8 * machiBroad, vMachiWorld.y ) );
      // Streaks where rain runs down a wall.
      float machiStreak = machiWall * smoothstep( 0.55, 0.95, machiNoise( vec2( machiQ.x * 7.0, machiQ.y * 0.33 ) ) )
        * ( 0.3 + 0.7 * machiNoise( machiQ * 0.6 + 5.0 ) );
      // Dust and moss in patches on what faces the sky.
      float machiDust = machiUp * smoothstep( 0.42, 0.8, machiCloud( machiQ * 0.5 + 3.0 ) );
      float machiDirt = machiFoot * 0.5 + machiStreak * 0.2 + machiDust * 0.22;
      diffuseColor.rgb *= 1.0 + ( machiBroad - 0.5 ) * 0.17 + ( machiFine - 0.5 ) * 0.08 + machiGrain * 0.07;
      diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * vec3( 0.50, 0.45, 0.37 ), machiDirt );
      machiRough = ( machiFine - 0.5 ) * 0.16 + machiDirt * 0.12 + machiGrain * 0.1;
    #else
      diffuseColor.rgb *= 1.0 + ( machiBroad - 0.5 ) * 0.05 + ( machiFine - 0.5 ) * 0.03 + machiGrain * 0.05;
      machiRough = ( machiFine - 0.5 ) * 0.1 + machiGrain * 0.08;
    #endif
  }
  #endif
`,dx=`
  #ifdef MACHI_INDOOR
    #if defined( RE_IndirectDiffuse )
      // A little more of it from above and from one side than from the other, so that the
      // faces of a piece of furniture differ.
      vec3 machiFace = inverseTransformDirection( geometryNormal, viewMatrix );
      irradiance = machiRoom * ( 0.86 + 0.14 * machiFace.y + 0.05 * dot( machiFace.xz, vec2( 0.6, 0.8 ) ) );
      iblIrradiance = vec3( 0.0 );
    #endif
    #if defined( RE_IndirectSpecular )
      radiance = machiRoom * 0.25;
    #endif
  #endif
`;function fx(n){n.userData.parallax={value:0},n.onBeforeCompile=t=>{t.uniforms.parallaxDepth=n.userData.parallax,t.uniforms.machiRoom=lx,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMachiWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>
${hx}`).replace("#include <map_fragment>",`vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${Xt.map_fragment.replaceAll("vMapUv","( vMapUv + parallaxUv )")}
        ${ux}`).replace("#include <roughnessmap_fragment>",`${Xt.roughnessmap_fragment.replaceAll("vRoughnessMapUv","( vRoughnessMapUv + parallaxUv )")}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`).replace("#include <normal_fragment_maps>",Xt.normal_fragment_maps.replaceAll("texture2D( normalMap, vNormalMapUv )","texture2D( normalMap, vNormalMapUv + parallaxUv )")).replace("#include <lights_fragment_end>",`${dx}
#include <lights_fragment_end>`).replace("#include <aomap_fragment>",Xt.aomap_fragment.replaceAll("vAoMapUv","( vAoMapUv + parallaxUv )"))},n.customProgramCacheKey=()=>"machi-surface"}function px(n){let{set:t,wants:e,recipe:i}=n.userData;if(!i)return;let s=(r,o)=>{o?n.defines[r]="":delete n.defines[r]};if(s("MACHI_WEAR",lr>=1),t){n.normalMap=lr>=1?t.normalMap:null,n.roughnessMap=lr>=1?t.surfaceMap:null,n.aoMap=lr>=1?t.surfaceMap:null;let r=lr>=2&&t.relief&&e;s("MACHI_PARALLAX",r),n.userData.parallax.value=r?t.depth/t.metres*1.5:0}n.needsUpdate=!0}var _s=new Map;function Kt(n,t="#ffffff",{roughness:e,metalness:i=0,twoSided:s=!1,relief:r=!0,where:o=""}={}){let a=`${n}|${t}|${e}|${i}|${s}|${r}|${o}`;if(!_s.has(a)){let c=Object.hasOwn(Su,n),l={color:c?t:n,roughness:e??(c?1:.85),metalness:i};s&&(l.side=We);let h=new wn(l);h.userData={recipe:[n,t,{roughness:e,metalness:i,twoSided:s,relief:r}],wants:r},c&&(h.userData.set=cx(n),h.map=h.userData.set.map,h.aoMapIntensity=.85),o==="out"&&(h.defines.MACHI_OUTDOOR=""),o==="in"&&(h.defines.MACHI_INDOOR=""),fx(h),px(h),_s.set(a,h)}return _s.get(a)}function mx(n,t){let e=n.userData?.recipe;return!e||!t?n:Kt(e[0],e[1],{...e[2],where:t})}var Di=(n,t=1.6)=>{let e=`glow|${n}|${t}`;return _s.has(e)||_s.set(e,new wn({color:n,emissive:n,emissiveIntensity:t,roughness:.6})),_s.get(e)};function Eu(n,{color:t="#30383c",background:e="",font:i="700 64px system-ui, sans-serif",padding:s=18,border:r=""}={}){let o=document.createElement("canvas"),a=o.getContext("2d");a.font=i;let c=a.measureText(n),l=Math.ceil((c.actualBoundingBoxAscent||52)+(c.actualBoundingBoxDescent||14))+s*2;o.width=Math.ceil(c.width)+s*2,o.height=l,a.font=i,e&&(a.fillStyle=e,a.beginPath(),a.roundRect(0,0,o.width,o.height,Math.min(o.height/2,30)),a.fill(),r&&(a.strokeStyle=r,a.lineWidth=4,a.stroke())),a.fillStyle=t,a.textBaseline="middle",a.textAlign="center",a.fillText(n,o.width/2,o.height/2+2);let h=new ei(o);return h.colorSpace=Me,h.anisotropy=wu,{map:h,aspect:o.width/o.height}}var jt={WATER:0,RIVERBED:1,FOREST:2,GREEN:3,FIELD:4,PADDY:5,PARK:6,LOW:7,DENSE:8,MID:9,HIGH:10,COMMERCIAL:11,INDUSTRIAL:12,PUBLIC:13},Tu={COLLECTOR:2,ARTERIAL:3,TRUNK:4},gx={[jt.WATER]:"#5f8fa8",[jt.RIVERBED]:"#93ad6c",[jt.FOREST]:"#4f6b3a",[jt.GREEN]:"#6d8a4a",[jt.FIELD]:"#a08a5c",[jt.PADDY]:"#8fa25a",[jt.PARK]:"#79984f",[jt.LOW]:"#788f59",[jt.DENSE]:"#859164",[jt.MID]:"#86906a",[jt.HIGH]:"#8e9278",[jt.COMMERCIAL]:"#989482",[jt.INDUSTRIAL]:"#929082",[jt.PUBLIC]:"#a6986e"},da=[];for(let[n,t]of Object.entries(gx))da[n]=new Jt(t);var xx={[jt.LOW]:2.9,[jt.DENSE]:2.8,[jt.MID]:2.95,[jt.HIGH]:2.95,[jt.COMMERCIAL]:3.4,[jt.INDUSTRIAL]:5.5,[jt.PUBLIC]:3.8},Au={[jt.LOW]:[["siding","#f1ece2"],["mortar","#e9e2d3"],["siding","#d9d5cc"],["mortar","#cfc5b3"],["siding","#b8b2a6"],["brickWhite","#eeeae2"]],[jt.DENSE]:[["mortar","#ddd5c4"],["planks","#8a7258"],["mortar","#c9c0ae"],["siding","#cfcac0"],["stucco","#e4ddd0"]],[jt.MID]:[["concrete","#e3e0d8"],["tile","#d8d2c6"],["mortar","#ece7dc"],["brick","#c78a72"]],[jt.HIGH]:[["concrete","#dcdad4"],["tile","#cfccc4"],["brickWhite","#e6e3dc"]],[jt.COMMERCIAL]:[["tile","#d6d0c8"],["concrete","#cfcbc4"],["mortar","#e2dbd0"],["brick","#b8765c"]],[jt.INDUSTRIAL]:[["metalPanel","#b9c0c6"],["metalPanel","#a7b0b5"],["concrete","#c4c2ba"]],[jt.PUBLIC]:[["concrete","#eeece6"],["tile","#e5e1d6"]]},Kc=[["kawara","#5c636a"],["kawara","#474e54"],["slate","#634f42"],["slate","#495662"],["roofMetal","#746354"],["roofMetal","#56646e"]],Ru=["#9c3d32","#2c5e4f","#355678","#b86b28","#52483e"],hr=(n,t,e)=>Math.min(e,Math.max(t,n)),Cu=5,Iu=()=>new Promise(n=>setTimeout(n,0)),Pu=null,Du=null;function Lu(){let n=new pe;n.name="region";let t=null,e=0;function i(y,M,g){let E=hr((M-y.box.x0)/y.step,0,y.width-1),A=hr((g-y.box.z0)/y.step,0,y.depth-1),T=Math.min(y.width-2,Math.floor(E)),C=Math.min(y.depth-2,Math.floor(A)),b=E-T,S=A-C,P=y.heights,D=T+C*y.width,L=P[D]+(P[D+1]-P[D])*b,O=P[D+y.width]+(P[D+y.width+1]-P[D+y.width])*b;return L+(O-L)*S}function s(y,M){let{width:g,depth:E,step:A}=y,T=new Uint32Array((g-1)*(E-1)*6),C=0;for(let b=0;b<E-1;b++){let S=y.box.z0+b*A,P=M&&S>=M.z0&&S+A<=M.z1;for(let D=0;D<g-1;D++){if(P){let q=y.box.x0+D*A;if(q>=M.x0&&q+A<=M.x1)continue}let L=D+b*g,O=L+1,z=L+g,W=z+1;T[C++]=L,T[C++]=z,T[C++]=O,T[C++]=O,T[C++]=z,T[C++]=W}}return new Pe(T.subarray(0,C),1)}function*r(y,M,g,E){let{width:A,depth:T,step:C,heights:b,use:S,water:P}=y,D=new Float32Array(A*T*3),L=new Float32Array(A*T*3),O=E?null:new Float32Array(D.length),z=1/0,W=-1/0;for(let yt=0;yt<T;yt++){let zt=Math.max(0,yt-1),Dt=Math.min(T-1,yt+1);for(let mt=0;mt<A;mt++){let J=mt+yt*A;D[J*3]=y.box.x0+mt*C-M[0];let nt=b[J]-g;D[J*3+1]=nt,D[J*3+2]=y.box.z0+yt*C-M[1],z=Math.min(z,nt),W=Math.max(W,nt);let bt=P[J]?da[jt.WATER]:da[S[J]]??da[jt.LOW],Ft=y.box.x0+mt*C,Nt=y.box.z0+yt*C,Q=E?1:.96+.08*Math.sin(Ft*.07+Nt*.05)*Math.cos(Ft*.04-Nt*.08);if(L[J*3]=Math.min(1,bt.r*Q),L[J*3+1]=Math.min(1,bt.g*Q),L[J*3+2]=Math.min(1,bt.b*Q),O){let ut=Math.max(0,mt-1),I=Math.min(A-1,mt+1),vt=(b[ut+yt*A]-b[I+yt*A])/((I-ut)*C),Tt=(b[mt+zt*A]-b[mt+Dt*A])/((Dt-zt)*C),G=Math.sqrt(vt*vt+1+Tt*Tt);O[J*3]=vt/G,O[J*3+1]=1/G,O[J*3+2]=Tt/G}}yt%8===7&&(yield)}let q=new Ye;q.setAttribute("position",new Pe(D,3)),q.setAttribute("color",new Pe(L,3)),O&&q.setAttribute("normal",new Pe(O,3)),q.setIndex(s(y,null));let H=(A-1)*C/2,ct=(T-1)*C/2,ft=new N(y.box.x0-M[0]+H,(z+W)/2,y.box.z0-M[1]+ct);q.boundingSphere=new Fn(ft,Math.hypot(H,(W-z)/2,ct)),Pu??(Pu=new wn({vertexColors:!0,roughness:1,metalness:0})),Du??(Du=new xn({vertexColors:!0}));let wt=new be(q,E?Du:Pu);return wt.receiveShadow=!E,wt.name="region-ground",wt}function o(y,M,g,E,A,T,C,{lift:b=.05,side0:S=-1,side1:P=1,step:D=6}={}){let{x0:L,z0:O,x1:z,z1:W}=g.box,q=20,H=[];for(let zt=0;zt<E.length;zt+=2)H.push([E[zt],E[zt+1]]);let ct=[H[0]];for(let zt=1;zt<H.length;zt++){let[Dt,mt]=H[zt-1],[J,nt]=H[zt],bt=Math.max(1,Math.ceil(Math.hypot(J-Dt,nt-mt)/D));for(let Ft=1;Ft<=bt;Ft++)ct.push([Dt+(J-Dt)*Ft/bt,mt+(nt-mt)*Ft/bt])}let ft=A/2,wt=zt=>{let[Dt,mt]=ct[Math.max(0,zt-1)],[J,nt]=ct[Math.min(ct.length-1,zt+1)],bt=Math.hypot(J-Dt,nt-mt)||1,Ft=-(nt-mt)/bt,Nt=(J-Dt)/bt,[Q,ut]=ct[zt],I=vt=>{let Tt=Q+Ft*ft*vt,G=ut+Nt*ft*vt;return new N(Tt-T[0],i(g,Tt,G)-C+b,G-T[1])};return[I(S),I(P)]},yt=null;for(let zt=0;zt<ct.length;zt++){let[Dt,mt]=ct[zt],nt=Dt>L-q&&Dt<z+q&&mt>O-q&&mt<W+q?wt(zt):null;yt&&nt&&y.face(M,[yt[0],nt[0],nt[1],yt[1]]),yt=nt}}function*a(y,M,g){let E=new Ue,A=Kt("asphalt","#ffffff"),T=Kt("sidewalk","#e2e0d8"),C=Kt("asphalt","#c4c4be"),b=Kt("concrete","#d0cec6"),S=Kt("#e6e3d6","#ffffff",{roughness:.7}),P=Math.min(2,y.step||2);for(let L of y.roads){let O=L.kind>=Tu.ARTERIAL?3.5:2.5,z=hr(1-2*O/L.width,.2,1),W=hr(.18/L.width,.01,.06);o(E,A,y,L.points,L.width,M,g,{lift:.12,side0:-z,side1:z,step:P}),o(E,T,y,L.points,L.width,M,g,{lift:.22,side0:-1,side1:-z,step:P}),o(E,T,y,L.points,L.width,M,g,{lift:.22,side0:z,side1:1,step:P}),o(E,S,y,L.points,L.width,M,g,{lift:.14,side0:-W,side1:W,step:P}),yield}for(let L of y.streets){let O=hr(1-.7/Math.max(L.width,2.4),.65,.9);o(E,C,y,L.points,L.width,M,g,{lift:.09,side0:-O,side1:O,step:P}),o(E,b,y,L.points,L.width,M,g,{lift:.1,side0:-1,side1:-O,step:P}),o(E,b,y,L.points,L.width,M,g,{lift:.1,side0:O,side1:1,step:P}),yield}let D=new pe;return D.name="region-roads",E.build(D,{cast:!1,receive:!0,where:"out"}),D}function*c(y,M,g){let E=[],A=[],T=new Jt;for(let P of y.roads){T.set(P.kind>=Tu.ARTERIAL?"#e9d8ad":"#dddcd4");for(let D=2;D<P.points.length;D+=2)for(let L of[D-2,D]){let O=P.points[L],z=P.points[L+1];E.push(O-M[0],i(y,O,z)-g+4,z-M[1]),A.push(T.r,T.g,T.b)}yield}let C=new Ye;C.setAttribute("position",new Ee(E,3)),C.setAttribute("color",new Ee(A,3));let b=new rs({vertexColors:!0});b.userData.ownMaterial=!0;let S=new Gs(C,b);return S.userData.ownMaterial=!0,S.name="region-overview-roads",S}function*l(y,M,g){let E=new Ue,A=[],T=Kt("concrete","#b9b6ae"),C=Kt("concrete","#c6c3bc"),b=Kt("concrete","#dfdcd4"),S=Kt("#324554","#ffffff",{roughness:.16,metalness:.72}),P=Kt("#4a5f6d","#ffffff",{roughness:.14,metalness:.55}),D=Kt("#3d4247","#ffffff",{roughness:.45,metalness:.5}),L=Kt("concrete","#dcd9d0"),O=Kt("wood","#7d593d"),z=(q,H,ct)=>new N(q,H,ct);for(let q of y.buildings){yield;let H=q.corners,ct=[[H[0],H[1]],[H[2],H[3]],[H[4],H[5]],[H[6],H[7]]],ft=1/0,wt=-1/0;for(let[G,j]of ct){let et=i(y,G,j)-g;ft=Math.min(ft,et),wt=Math.max(wt,et)}let yt=xx[q.use]??2.9,zt=ft-.35,Dt=wt+.38,mt=Dt+q.floors*yt,J=q.tone??.5,nt=Math.floor(J*4096),bt=Au[q.use]??Au[jt.LOW],[Ft,Nt]=bt[Math.floor(J*bt.length)%bt.length],Q=Kt(Ft,Nt),ut=ct.map(([G,j])=>[G-M[0],j-M[1]]),I=(ut[0][0]+ut[1][0]+ut[2][0]+ut[3][0])/4,vt=(ut[0][1]+ut[1][1]+ut[2][1]+ut[3][1])/4,Tt=(q.use===jt.LOW||q.use===jt.DENSE)&&q.floors<=3;for(let G=0;G<4;G++){let[j,et]=ut[G],[tt,Rt]=ut[(G+1)%4],qt=tt-j,Yt=Rt-et,R=Math.hypot(qt,Yt)||1,v=qt/R,F=Yt/R,K=(j+tt)/2-I,it=(et+Rt)/2-vt,V=Math.hypot(K,it)||1;K/=V,it/=V;let At=z(K,0,it);E.quad(T,z(j,zt,et),z(tt,zt,Rt),z(tt,Dt,Rt),z(j,Dt,et),At),E.quad(Q,z(j,Dt,et),z(tt,Dt,Rt),z(tt,mt,Rt),z(j,mt,et),At);let st=K*.045,St=it*.045,Y=(X,rt,dt,at,_t,Pt=.045)=>{let U=K*Pt,lt=it*Pt;E.quad(X,z(j+v*rt+U,at,et+F*rt+lt),z(j+v*dt+U,at,et+F*dt+lt),z(j+v*dt+U,_t,et+F*dt+lt),z(j+v*rt+U,_t,et+F*rt+lt),At)};if(Tt){if(G===0&&R>=4.2){let X=Math.min(R-1.4,Math.max(.7,R*(.28+(nt&3)*.1)));if(Y(O,X,X+.9,Dt,Dt+2.05,.05),Y(D,X-.15,X+1.05,Dt+2.08,Dt+2.2,.18),R>=6.2){let rt=X>R*.45?.9:Math.min(R-2.3,X+1.6);Y(S,rt,rt+1.4,Dt+.85,Dt+2,.04)}}if((G===0||G===2)&&R>=4){let X=Math.max(1,Math.min(3,Math.floor(R/3.2))),rt=R/X;for(let dt=G===0?1:0;dt<q.floors;dt++){let at=Dt+dt*yt+.85,_t=at+1.15;for(let Pt=0;Pt<X;Pt++){let U=(Pt+.5)*rt;Y(S,U-.65,U+.65,at,_t,.04)}}if(G===(nt&1?0:2)&&q.floors>=2&&R>=5.2&&q.use===jt.LOW){let dt=R*.22,at=R*.78,_t=Dt+yt;Y(L,dt,at,_t-.05,_t+.95,.28)}}}else if(q.use===jt.COMMERCIAL){if((G===0||G===1&&(nt&3)===0)&&R>=4.5){Y(P,.6,R-.6,Dt+.1,Dt+yt-.55,.04);let X=Kt(Ru[(nt>>2)%Ru.length],"#ffffff",{roughness:.65});Y(X,.4,R-.4,Dt+yt-.55,Dt+yt-.15,.22)}if(R>=4.5)for(let X=1;X<q.floors;X++){let rt=Dt+X*yt+.75,dt=Dt+(X+1)*yt-.5;Y(S,.7,R-.7,rt,dt,.04)}}else if(q.use===jt.MID||q.use===jt.HIGH){if(R>=8){let X=G===0||G===2;for(let rt=0;rt<q.floors;rt++){let dt=Dt+rt*yt;X&&(Y(S,.9,R-.9,dt+.45,dt+2.15,.04),(G===0||q.use===jt.HIGH)&&Y(L,.7,R-.7,dt+.05,dt+1.05,.24))}}}else if(q.use===jt.PUBLIC&&R>=10)for(let X=0;X<q.floors;X++){let rt=Dt+X*yt;Y(S,1.2,R-1.2,rt+.9,rt+yt-.45,.04)}else q.use===jt.INDUSTRIAL&&R>=8&&(Y(S,1.2,R-1.2,mt-1.6,mt-.55,.04),G===0&&Y(D,R*.35,R*.65,Dt,Dt+3.6,.05))}if(Tt){let[G,j]=Kc[Math.floor(J*7.3*Kc.length)%Kc.length],et=Kt(G,j),tt=Math.hypot(ut[1][0]-ut[0][0],ut[1][1]-ut[0][1]),Rt=Math.hypot(ut[3][0]-ut[0][0],ut[3][1]-ut[0][1]),qt=tt>=Rt,[Yt,R,v,F]=qt?ut:[ut[1],ut[2],ut[3],ut[0]],K=(Pt,U,lt)=>{let xt=Pt[0]-U[0],Ct=Pt[1]-U[1],ht=Math.hypot(xt,Ct)||1;return[Pt[0]+xt/ht*lt,Pt[1]+Ct/ht*lt]},it=[I,vt],[V,At,st,St]=[Yt,R,v,F].map(Pt=>K(Pt,it,.48)),Y=Math.hypot(F[0]-Yt[0],F[1]-Yt[1]),X=Math.min(2.6,Y*.28),rt=(Pt,U)=>[(Pt[0]+U[0])/2,(Pt[1]+U[1])/2],dt=mt-.14,at=(Pt,U)=>new N(Pt[0],U,Pt[1]),_t=nt%5;if(_t===2||_t===3){let Pt=rt(V,St),U=rt(At,st),lt=U[0]-Pt[0],xt=U[1]-Pt[1],Ct=Math.hypot(lt,xt)||1,ht=Math.min(Ct*.35,Y*.45),ot=[Pt[0]+lt/Ct*ht,Pt[1]+xt/Ct*ht],Lt=[U[0]-lt/Ct*ht,U[1]-xt/Ct*ht];E.quad(et,at(V,dt),at(At,dt),at(Lt,mt+X),at(ot,mt+X),z(V[0]-St[0],1,V[1]-St[1])),E.quad(et,at(St,dt),at(ot,mt+X),at(Lt,mt+X),at(st,dt),z(St[0]-V[0],1,St[1]-V[1])),E.face(et,[at(St,dt),at(V,dt),at(ot,mt+X)]),E.face(et,[at(V,dt),at(St,dt),at(ot,mt+X)]),E.face(et,[at(At,dt),at(st,dt),at(Lt,mt+X)]),E.face(et,[at(st,dt),at(At,dt),at(Lt,mt+X)])}else{let Pt=rt(V,St),U=rt(At,st);E.quad(et,at(V,dt),at(At,dt),at(U,mt+X),at(Pt,mt+X),z(V[0]-St[0],1,V[1]-St[1])),E.quad(et,at(St,dt),at(Pt,mt+X),at(U,mt+X),at(st,dt),z(St[0]-V[0],1,St[1]-V[1])),E.face(Q,[at(Yt,mt),at(F,mt),at(rt(Yt,F),mt+X)]),E.face(Q,[at(v,mt),at(R,mt),at(rt(R,v),mt+X)]),E.face(Q,[at(F,mt),at(Yt,mt),at(rt(Yt,F),mt+X)]),E.face(Q,[at(R,mt),at(v,mt),at(rt(R,v),mt+X)])}}else{E.face(C,ut.map(([j,et])=>new N(j,mt,et)).reverse()),E.face(C,ut.map(([j,et])=>new N(j,mt,et)));let G=mt+.55;for(let j=0;j<4;j++){let[et,tt]=ut[j],[Rt,qt]=ut[(j+1)%4],Yt=new N((et+Rt)/2-I,0,(tt+qt)/2-vt);E.quad(b,z(et,mt,tt),z(Rt,mt,qt),z(Rt,G,qt),z(et,G,tt),Yt)}if(q.floors>=4){let j=ut[1][0]-ut[0][0],et=ut[1][1]-ut[0][1],tt=Math.atan2(j,et);E.box(b,I,mt+1.2,vt,3.6,2.4,3.2,tt)}}A.push({ring:ut,base:zt,top:mt})}let W=new pe;return W.name="region-buildings",E.build(W,{cast:!0,receive:!0,where:"out"}),{node:W,solids:A}}function*h(y,M,g){let E=new Ue,A=Kt("#c8553d"),T=Kt("#e8e2d0");for(let[b,S,P,D]of[[y.borders.block,T,.35,4],[y.borders.town,A,.7,0]])for(let L=0;L<b.length;L+=4){let O=b[L],z=b[L+1],W=b[L+2],q=b[L+3],H=Math.hypot(W-O,q-z),ct=Math.max(1,Math.ceil(H/4));for(let ft=0;ft<ct;ft++){if(D&&ft%2)continue;let wt=ft/ct,yt=(ft+1)/ct;o(E,S,y,[O+(W-O)*wt,z+(q-z)*wt,O+(W-O)*yt,z+(q-z)*yt],P,M,g,{lift:.25,step:4})}yield}let C=new pe;return C.name="region-borders",E.build(C,{cast:!1,receive:!1,where:"out"}),C}function*d(y,M,g,E){let A=new Ue;for(let{colour:C,segments:b}of E){let S=Kt(C);for(let P=0;P+3<b.length;P+=4)o(A,S,y,[b[P],b[P+1],b[P+2],b[P+3]],2.4,M,g,{lift:.32,side0:0,side1:1,step:4}),P%64===0&&(yield)}let T=new pe;return T.name="region-district-outlines",A.build(T,{cast:!1,receive:!1,where:"out"}),T}function*f(y,M,g,E,A){let T=new Ue,C=Kt("concrete","#c9c5bc"),b=Kt("sidewalk","#ffffff"),S=(D,L,O)=>new N(D-M[0],L-g,O-M[1]);for(let[D,L]of E.entries()){let O=new N(L.nx,0,L.nz);T.quad(C,S(L.ax,L.low[0]-.2,L.az),S(L.bx,L.low[1]-.2,L.bz),S(L.bx,L.high[1]+.12,L.bz),S(L.ax,L.high[0]+.12,L.az),O),T.quad(C,S(L.bx,L.low[1]-.2,L.bz),S(L.ax,L.low[0]-.2,L.az),S(L.ax,L.high[0]+.12,L.az),S(L.bx,L.high[1]+.12,L.bz),O.clone().negate()),D%64===63&&(yield)}for(let D of A)T.face(b,[S(D.x0,D.y+.03,D.z0),S(D.x0,D.y+.03,D.z1),S(D.x1,D.y+.03,D.z1),S(D.x1,D.y+.03,D.z0)]);let P=new pe;return P.name="region-pads",T.build(P,{cast:!0,receive:!0,where:"out"}),P}async function p(y,{origin:M=[0,0],datum:g=0,borders:E=!0,roads:A=!0,coarse:T=!1,outlines:C=[],walls:b=[],paving:S=[]}={}){let P=++e,D=new pe;function*L(){let z=yield*r(y,M,g,T);D.add(z),yield,A&&D.add(T?yield*c(y,M,g):yield*a(y,M,g));let{node:W,solids:q}=yield*l(y,M,g);return y.buildings.length&&D.add(W),E&&D.add(yield*h(y,M,g)),C.length&&D.add(yield*d(y,M,g,C)),(b.length||S.length)&&D.add(yield*f(y,M,g,b,S)),{win:y,origin:M,datum:g,solids:q,ground:z}}let O=L();try{await Iu();let z=performance.now()+Cu;for(;P===e;){let W=O.next();if(W.done)return m(),n.add(...D.children.slice()),t=W.value,!0;performance.now()>=z&&(await Iu(),z=performance.now()+Cu)}return!1}finally{O.return(),Pi(D)}}function x(y){t&&t.ground.geometry.setIndex(s(t.win,y))}function _(){e++,m()}function m(){for(let y of[...n.children])n.remove(y),Pi(y);t=null}function u(y,M){if(!t)return null;let g=y+t.origin[0],E=M+t.origin[1],{x0:A,z0:T,x1:C,z1:b}=t.win.box;return g<A||E<T||g>C||E>b?null:i(t.win,g,E)-t.datum}return{group:n,show:p,clear:_,heightAt:u,setHole:x,get solids(){return t?.solids??[]},get window(){return t?.win??null}}}var hn={width:.85,height:1.5,span:22},gt={length:14.7,width:2.98,height:5.1,floor:1.13,ceiling:3.28,roof:3.73,skirt:1.37,doors:[-3.65,3.65],doorWidth:1.3,doorHeight:1.9,gap:.5},jc={speed:12.5,accel:.85,brake:.95,dwell:22,doorsOpenAt:1.4,doorTime:2.4,melodyAt:9.5,doorsCloseAt:5.2},fa=(n,t,e)=>Math.min(e,Math.max(t,n)),_x=n=>Math.round(n*1e3)/1e3,pa=n=>Array.from({length:n},(t,e)=>(e-(n-1)/2)*(gt.length+gt.gap)),ur=n=>pa(n).flatMap(t=>gt.doors.map(e=>_x(t+e))),Qc=n=>n*gt.length+(n-1)*gt.gap;function yx(n,t=60){let e=[[...n[0]]],i=a=>{let c=e.at(-1);Math.hypot(a[0]-c[0],a[1]-c[1])>1e-6&&e.push(a)};for(let a=1;a<n.length-1;a++){let[c,l,h]=[n[a-1],n[a],n[a+1]],d=Math.hypot(l[0]-c[0],l[1]-c[1]),f=Math.hypot(h[0]-l[0],h[1]-l[1]),p=[(l[0]-c[0])/d,(l[1]-c[1])/d],x=[(h[0]-l[0])/f,(h[1]-l[1])/f],_=Math.acos(fa(p[0]*x[0]+p[1]*x[1],-1,1));if(_<.001)continue;let m=Math.min(t*Math.tan(_/2),d/2,f/2),u=m/Math.tan(_/2),y=Math.sign(p[0]*x[1]-p[1]*x[0])||1,M=[l[0]-p[0]*m,l[1]-p[1]*m],g=[M[0]-p[1]*y*u,M[1]+p[0]*y*u],E=Math.atan2(M[1]-g[1],M[0]-g[0]),A=Math.max(2,Math.ceil(u*_));for(let T=0;T<=A;T++){let C=E+y*_*T/A;i([g[0]+Math.cos(C)*u,g[1]+Math.sin(C)*u])}}i([...n.at(-1)]);let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=s.at(-1);return{length:r,spot:a=>{let c=fa(a,0,r),l=0,h=s.length-1;for(;h-l>1;){let _=l+h>>1;s[_]<=c?l=_:h=_}let d=s[h]-s[l]||1,f=(c-s[l])/d,[p,x]=[e[l],e[h]];return{x:p[0]+(x[0]-p[0])*f,z:p[1]+(x[1]-p[1])*f,dx:(x[0]-p[0])/d,dz:(x[1]-p[1])/d}},samples:e}}function tl(n,t=[],e=hn.span){let i=[];for(let[o,a]of[...t].sort((c,l)=>c[0]-l[0])){let c=i.at(-1);c&&o<=c[1]?c[1]=Math.max(c[1],a):i.push([o,a])}let s=Math.max(1,Math.round(n/e)),r=[];for(let o=0;o<=s;o++){let a=n*o/s;for(let c=0;c<4;c++){let l=i.find(([h,d])=>a>h+1e-6&&a<d-1e-6);if(!l)break;a=a-l[0]<l[1]-a?l[0]:l[1]}a=fa(a,0,n),!r.length||a-r.at(-1)>4?r.push(a):o===s&&(r[r.length-1]=n)}return r}function vx(n,{speed:t,accel:e,brake:i}){let s=Math.min(t,Math.sqrt(2*n*e*i/(e+i))),r=s/e,o=s/i,a=Math.max(0,n-s*s/(2*e)-s*s/(2*i))/s,c=r+a+o;return{time:c,top:s,at:h=>{if(h<=0)return[0,0];if(h<r)return[e*h*h/2,e*h];if(h<r+a)return[s*s/(2*e)+s*(h-r),s];if(h<c){let d=c-h;return[n-i*d*d/2,i*d]}return[n,0]}}}function el(n,t=jc){let e=yx(n.path,n.radius),i=n.stops.map((p,x)=>({side:1,...p,index:x})),s=n.cars??2,r=[],o=0,a=[...i.keys(),...[...i.keys()].reverse().slice(1,-1)];a.forEach((p,x)=>{let _=a[(x+1)%a.length];r.push({kind:"dwell",at:p,next:_,start:o,time:t.dwell}),o+=t.dwell;let m=vx(Math.abs(i[_].at-i[p].at),t);r.push({kind:"run",at:p,next:_,start:o,time:m.time,run:m,way:Math.sign(i[_].at-i[p].at)}),o+=m.time});let c=o,l=p=>{let x=(p-t.doorsOpenAt)/t.doorTime,_=(t.dwell-t.doorsCloseAt-p)/t.doorTime;return fa(Math.min(x,_),0,1)};function h(p){let x=(p%c+c)%c,_=r[0];for(let E of r)if(E.start<=x)_=E;else break;let m=x-_.start,u=i[_.at],y=i[_.next];if(_.kind==="dwell")return{time:p,phase:"dwell",s:u.at,speed:0,way:Math.sign(y.at-u.at)||1,stop:u,next:y,doors:l(m),leaves:_.time-m};let[M,g]=_.run.at(m);return{time:p,phase:"run",s:u.at+_.way*M,speed:g,way:_.way,stop:null,from:u,next:y,doors:0,arrives:_.time-m}}function d(p,x){if(!(x>p))return[];let _=[];for(let y of r){let M=i[y.at],g=i[y.next];y.kind==="dwell"?_.push([y.start,"arrive",M,g],[y.start+t.doorsOpenAt,"open",M,g],[y.start+y.time-t.melodyAt,"melody",M,g],[y.start+y.time-t.doorsCloseAt,"close",M,g]):_.push([y.start,"depart",M,g],[y.start+Math.min(6,y.time*.3),"next",M,g],[y.start+Math.max(y.time-13,y.time*.55),"soon",M,g],[y.start+Math.max(y.time-16,y.time*.4),"approach",M,g])}let m=[],u=Math.max(p,x-c);for(let y=Math.floor(u/c);y<=Math.floor(x/c);y++)for(let[M,g,E,A]of _){let T=y*c+M;T>u&&T<=x&&m.push({time:T,kind:g,stop:E,next:A})}return m.sort((y,M)=>y.time-M.time)}let f=p=>p.way>0?i.at(-1):i[0];return{name:n.name??"\u30E2\u30CE\u30EC\u30FC\u30EB",y:n.y??7,cars:s,stops:i,way:e,period:c,drive:t,stateAt:h,eventsBetween:d,boundFor:f}}var Mx=(n,t)=>n*t>0?"\u5DE6":"\u53F3";function nl(n,t){let{kind:e,stop:i,next:s}=t,r=s.index===0||s.index===n.stops.length-1,o=Math.sign(s.at-i.at)||1,a=o>0?n.stops.at(-1):n.stops[0];return e==="next"?{where:"car",text:`\u672C\u65E5\u3082\u3001${n.name}\u3092\u3054\u5229\u7528\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u6B21\u306F\u3001${s.name}\u3001${s.name}${r?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002`}:e==="soon"?{where:"car",text:`\u307E\u3082\u306A\u304F\u3001${s.name}${r?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002\u304A\u51FA\u53E3\u306F\u3001${Mx(s.side,o)}\u5074\u3067\u3059\u3002`}:e==="approach"?{where:"platform",at:s,chime:"approach",text:`\u307E\u3082\u306A\u304F\u3001${a.name}\u3086\u304D\u304C\u3001\u307E\u3044\u308A\u307E\u3059\u3002\u30DB\u30FC\u30E0\u30C9\u30A2\u304B\u3089\u96E2\u308C\u3066\u3001\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002`}:e==="open"?{where:"both",at:i,chime:"door",text:`${i.name}\u3001${i.name}\u3067\u3059\u3002`}:e==="melody"?{where:"platform",at:i,chime:"depart",text:`${a.name}\u3086\u304D\u304C\u3001\u767A\u8ECA\u3044\u305F\u3057\u307E\u3059\u3002\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002`}:e==="close"?{where:"both",at:i,chime:"door",text:null}:null}function il(n,t){let e=n.boundFor(t);return t.phase==="dwell"?[`${t.stop.name}`,t.leaves<n.drive.melodyAt?"\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059":`${e.name} \u3086\u304D`]:[t.arrives<14?"\u307E\u3082\u306A\u304F":"\u6B21\u306F",`${t.next.name}`]}var bx=6.62,Sx=.05,wx={...jc,speed:18,accel:.97,brake:1.1,dwell:25},Ex=420,Gn=1.85,Se={edge:Gn+gt.width/2+.07,width:3.5,length:48,roof:3.9,stair:3};var ys=(n,t,e)=>Math.min(e,Math.max(t,n));function yn(n,t){if(!n?.length)return 0;if(t<=n[0][0])return n[0][1];let e=n[n.length-1];if(t>=e[0])return e[1];let i=0,s=n.length-1;for(;s-i>1;){let l=i+s>>1;n[l][0]<=t?i=l:s=l}let[r,o]=n[i],[a,c]=n[s];return o+(c-o)*((t-r)/(a-r||1))}function Tx(n,t,{clearance:e=bx,grade:i=Sx,level:s=[],floor:r=[]}={}){let o=n.length,a=Float64Array.from(n,h=>h+e),c=i*t,l=()=>{for(let[h,d,f]of r){let p=ys(Math.floor(h/t),0,o-1),x=ys(Math.ceil(d/t),0,o-1);for(let _=p;_<=x;_++)a[_]=Math.max(a[_],f)}for(let[h,d]of s){let f=ys(Math.floor(h/t),0,o-1),p=ys(Math.ceil(d/t),0,o-1),x=-1/0;for(let _=f;_<=p;_++)x=Math.max(x,a[_]);for(let _=f;_<=p;_++)a[_]=x}};for(let h=0;h<6;h++){l();for(let d=1;d<o;d++)a[d]=Math.max(a[d],a[d-1]-c);for(let d=o-2;d>=0;d--)a[d]=Math.max(a[d],a[d+1]-c)}return l(),a}function Uu(n,{origin:t=[0,0],datum:e=0,from:i=0,to:s=1/0,cars:r=2,step:o=20}={}){let c=(n.points.length/2-1)*o,l=ys(i,0,c),h=ys(s,l,c),d=Qc(r)/2,f=n.stations.filter(T=>T.s-d-2.5>=l&&T.s+d+2.5<=h);if(f.length<2)return null;let p=Math.floor(l/o),x=Math.ceil(h/o),_=[],m=[];for(let T=p;T<=x;T++)_.push([n.points[T*2]-t[0],n.points[T*2+1]-t[1]]),m.push((n.ground?.[T]??0)-e);let u=p*o,y=f.map(T=>[T.s-u-d-8,T.s-u+d+8]),M=Tx(m,o,{level:y}),g=Array.from(M,(T,C)=>[C*o,Math.round(T*100)/100]),E=m.map((T,C)=>[C*o,Math.round(T*100)/100]),A=f.map(T=>[T.s-u-6,T.s-u+6]);return{name:n.name,color:n.color,path:_,radius:2e3,heights:g,ground:E,y:g[0][1],cars:r,clear:A,drive:wx,stops:f.map(T=>({name:T.name,at:T.s-u,side:1}))}}function Nu(n,t=Ex){return Math.max(1,Math.ceil(n/t))}var Ax=40,Rx=32,Ou=64,Cx=new Float32Array(Ou*4*4),ma=new ti(Cx,Ou,4,ze,cn);ma.magFilter=De;ma.minFilter=De;ma.needsUpdate=!0;var rl=new ti(new Uint8Array([104,132,84,255]),1,1);rl.colorSpace=Me;rl.needsUpdate=!0;var Ix={glassScene:{value:ma},glassCount:{value:new Gt(0,0)},glassSun:{value:new N(.45,.64,.62)},glassGround:{value:rl},glassGroundBox:{value:new de(0,0,1,1)}},Px=`
varying vec3 vGlassWorld;
uniform sampler2D glassScene;
uniform vec2 glassCount;
uniform vec3 glassSun;
uniform sampler2D glassGround;
uniform vec4 glassGroundBox;

// What a pane mirrors of a room: its walls, in the light that fills a room.
const vec3 glassIndoors = vec3( 0.34, 0.32, 0.29 );

float glassHash( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}

// A surface of a given colour, lit by the sun and the sky.
vec3 glassLit( vec3 tint, vec3 n ) {
  return tint * ( 0.22 + 1.4 * max( dot( n, glassSun ), 0.0 ) );
}

// What a ray from 'ro' along 'rd' meets first: the ground, a building, a tree, or the sky.
vec3 glassTrace( vec3 ro, vec3 rd, vec3 sky ) {
  float best = 1.0e9;
  vec3 colour = sky;
  if ( rd.y < - 0.0005 ) {
    best = - ro.y / rd.y;
    vec3 p = ro + rd * best;
    vec2 uv = ( p.xz - glassGroundBox.xy ) * glassGroundBox.zw;
    bool land = uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0;
    colour = glassLit( land ? texture2D( glassGround, uv ).rgb : vec3( 0.06, 0.16, 0.22 ), vec3( 0.0, 1.0, 0.0 ) );
  }
  vec3 inv = 1.0 / rd;
  int boxes = int( glassCount.x );
  for ( int i = 0; i < ${Ax}; i ++ ) {
    if ( i >= boxes ) break;
    vec3 lo = texelFetch( glassScene, ivec2( i, 0 ), 0 ).xyz;
    vec3 hi = texelFetch( glassScene, ivec2( i, 1 ), 0 ).xyz;
    vec3 t0 = ( lo - ro ) * inv;
    vec3 t1 = ( hi - ro ) * inv;
    vec3 tmin = min( t0, t1 );
    vec3 tmax = max( t0, t1 );
    float tn = max( max( tmin.x, tmin.y ), tmin.z );
    float tf = min( min( tmax.x, tmax.y ), tmax.z );
    // (A box the ray starts inside is the building the window itself is part of.)
    if ( tn > 0.05 && tn < tf && tn < best ) {
      best = tn;
      vec3 p = ro + rd * tn;
      vec3 n = vec3( 0.0, 1.0, 0.0 );
      if ( tmin.x >= tmin.y && tmin.x >= tmin.z ) n = vec3( - sign( rd.x ), 0.0, 0.0 );
      else if ( tmin.z >= tmin.y ) n = vec3( 0.0, 0.0, - sign( rd.z ) );
      colour = glassLit( texelFetch( glassScene, ivec2( i, 2 ), 0 ).rgb, n );
      if ( n.y < 0.5 ) {
        // Rows of windows across the wall, darker than the wall and catching a little sky.
        float along = abs( n.x ) > 0.5 ? p.z : p.x;
        vec2 cell = vec2( fract( along / 2.7 ), fract( ( p.y - 0.4 ) / 2.85 ) );
        float pane = step( 0.2, cell.x ) * step( cell.x, 0.8 ) * step( 0.32, cell.y ) * step( cell.y, 0.76 );
        colour = mix( colour, sky * 0.35 + vec3( 0.02 ), pane * 0.8 );
      } else colour *= 0.7;
    }
  }
  int trees = int( glassCount.y );
  for ( int i = 0; i < ${Rx}; i ++ ) {
    if ( i >= trees ) break;
    vec4 ball = texelFetch( glassScene, ivec2( i, 3 ), 0 );
    vec3 from = ro - ball.xyz;
    float b = dot( from, rd );
    float h = b * b - dot( from, from ) + ball.w * ball.w;
    if ( h > 0.0 ) {
      float t = - b - sqrt( h );
      if ( t > 0.05 && t < best ) {
        vec3 at = ro + rd * t - ball.xyz;
        // A crown is ragged: towards its outline the sky shows between the sprays of leaves.
        float rim = h / ( ball.w * ball.w );
        float leafy = glassHash( floor( at.xy * 3.1 + at.zz * 2.3 ) ) * 0.6 + glassHash( floor( at.zy * 7.3 + at.xx * 5.1 ) ) * 0.4;
        if ( rim > leafy * 0.55 ) {
          best = t;
          colour = glassLit( vec3( 0.10, 0.22, 0.07 ) * ( 0.55 + 0.7 * leafy ) * ( 0.75 + 0.5 * glassHash( ball.xz ) ), normalize( at ) );
        }
      }
    }
  }
  // Far things fade into the haze of the sky.
  return best > 1.0e8 ? sky : mix( colour, sky, smoothstep( 80.0, 700.0, best ) );
}

#ifdef USE_ENVMAP
// The light a pane reflects towards the eye. (Two sheets of glass reflect about twice what the
// bare surface of one does.)
vec3 glassRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
  #ifdef GLASS_INDOORS
    return glassIndoors * 2.2;
  #else
    #ifdef GLASS_WINDOW
      if ( ! gl_FrontFacing ) return glassIndoors * 2.2;
    #endif
    vec3 sky = getIBLRadiance( viewDir, normal, roughness );
    vec3 n = inverseTransformDirection( normal, viewMatrix );
    vec3 rd = reflect( normalize( vGlassWorld - cameraPosition ), n );
    return glassTrace( vGlassWorld + n * 0.06, rd, sky ) * 2.2;
  #endif
}
#endif

// What is seen through a window whose room has not been built: the ray is followed into a
// plain room behind the pane, as wide as a room and as high as a storey.
vec3 glassRoom( vec3 p, vec3 v, vec3 n ) {
  vec3 t = normalize( cross( vec3( 0.0, 1.0, 0.0 ), n ) );
  const float wide = 3.3;
  const float high = 2.85;
  const float deep = 3.4;
  float u = dot( p, t );
  vec2 cell = vec2( floor( u / wide ), floor( ( p.y - 0.45 ) / high ) );
  vec3 at = vec3( u - cell.x * wide, p.y - 0.45 - cell.y * high, 0.0 );
  vec3 d = vec3( dot( v, t ), v.y, max( dot( v, - n ), 0.001 ) );
  float back = deep / d.z;
  float side = abs( d.x ) > 1.0e-4 ? ( d.x > 0.0 ? wide - at.x : - at.x ) / d.x : 1.0e9;
  float level = abs( d.y ) > 1.0e-4 ? ( d.y > 0.0 ? high - at.y : - at.y ) / d.y : 1.0e9;
  float reach = min( back, min( side, level ) );
  vec3 hit = at + d * reach;
  float seed = glassHash( cell + floor( dot( n.xz, vec2( 7.0, 13.0 ) ) ) );
  vec3 wall = mix( vec3( 0.78, 0.74, 0.66 ), vec3( 0.70, 0.76, 0.80 ), seed );
  vec3 colour = wall;
  if ( reach == level ) colour = d.y > 0.0 ? vec3( 0.86 ) : vec3( 0.42, 0.31, 0.22 );
  else if ( reach == side ) colour = wall * 0.82;
  // Daylight falls off towards the back of the room.
  colour *= 0.16 + 0.5 * ( 1.0 - hit.z / deep );
  // In some rooms a curtain is drawn, across half the window or all of it.
  float curtain = glassHash( cell + 3.7 );
  if ( curtain > 0.55 && ( curtain > 0.8 || fract( at.x / wide + curtain ) < 0.45 ) ) {
    colour = mix( vec3( 0.80, 0.78, 0.72 ), vec3( 0.62, 0.68, 0.74 ), seed ) * ( 0.45 + 0.1 * sin( at.x * 38.0 ) );
  }
  return colour * 0.55;
}
`,Dx=`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`,Lx={near:`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,far:`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,inner:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,rail:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`};function Ux(n){let t=n==="far",e=new wn({color:t?"#0b0e10":"#141b1f",roughness:.04,metalness:0,side:We,transparent:!t,depthWrite:t,premultipliedAlpha:!t,forceSinglePass:!0});return n==="inner"&&(e.defines.GLASS_INDOORS=""),(n==="near"||n==="far")&&(e.defines.GLASS_WINDOW=""),e.onBeforeCompile=i=>{Object.assign(i.uniforms,Ix),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`);let s=Xt.lights_fragment_maps.replace("radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );","radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );");i.fragmentShader=i.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
${Px}`).replace("#include <lights_fragment_maps>",s).replace("#include <opaque_fragment>",`${Dx}
${Lx[n]}`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=()=>`machi-glass-${n}`,e}var sl=new Map;function Fu(n="near"){return sl.has(n)||sl.set(n,Ux(n)),sl.get(n)}var ol=".".repeat(32),al=(n,t)=>[n,n,n,t,t,ol,ol,ol].join(""),$1=[al(`XXSSSSSAA${"M".repeat(12)}${"E".repeat(11)}`,`${"A".repeat(9)}${"M".repeat(12)}${"E".repeat(11)}`),al(`XXOOOOOOOTTttEEEEE${"O".repeat(7)}SSSSSXX`,"O".repeat(32)),al(`${"O".repeat(30)}XX`,"O".repeat(32))];var fe=gt.width/2,Ce=gt.length/2,we=gt.floor,un=(n,t=.5,e=0)=>Kt(n,"#ffffff",{roughness:t,metalness:e});function xa(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0}),s=5,r=document.createElement("canvas");r.width=n*s,r.height=t*s;let o=r.getContext("2d"),a=new ei(r);a.colorSpace=Me;let c=new xn({map:a,toneMapped:!1}),l=null;return{material:c,show(h,d=["#ffb23e","#8dff9a"]){let f=h.join("|");if(f===l)return;l=f,i.clearRect(0,0,n,t),i.textBaseline="middle",i.textAlign="center";let p=t/h.length;h.forEach((_,m)=>{let u=Math.floor(p*.88),y=g=>`700 ${g}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`;i.font=y(u);let M=i.measureText(_).width;M>n-4&&(i.font=y(Math.max(6,Math.floor(u*(n-4)/M)))),i.fillStyle=d[m%d.length],i.fillText(_,n/2,p*(m+.5)+.5)});let x=i.getImageData(0,0,n,t).data;o.fillStyle="#08090a",o.fillRect(0,0,r.width,r.height);for(let _=0;_<t;_++)for(let m=0;m<n;m++){let u=(_*n+m)*4;o.fillStyle=x[u+3]>96?`rgb(${x[u]},${x[u+1]},${x[u+2]})`:"#1b1d1f",o.beginPath(),o.arc((m+.5)*s,(_+.5)*s,s*.4,0,Math.PI*2),o.fill()}a.needsUpdate=!0},dispose(){a.dispose(),c.dispose()}}}function ga(n,t,e,i=!1,s=0){let r=new pe,o=new Ue;o.box(un("#2a2e31",.5,.3),0,0,0,t+.08,e+.08,.09);for(let a of s?[-t*.35,t*.35]:[])o.box(un("#9aa0a3",.4,.7),a,e/2+.04+s/2,0,.025,s,.025);o.build(r,{cast:!1});for(let a of i?[1,-1]:[1]){let c=new be(new Bn(t,e),n.material);c.position.z=a*.047,a<0&&(c.rotation.y=Math.PI),r.add(c)}return r}var zu=[[-Ce,gt.doors[0]-gt.doorWidth/2],[gt.doors[0]+gt.doorWidth/2,gt.doors[1]-gt.doorWidth/2],[gt.doors[1]+gt.doorWidth/2,Ce]];function Bu({front:n,back:t,boards:e}){let i=new pe,s=new Ue,r=new Ue,o=new Ue,a=un("#f1f2f0",.42,.12),c=un("#1e8f8a",.45,.12),l=un("#3a4046",.6,.25),h=un("#b9bcbd",.55,.2),d=un("#1f2326",.5,.2),f=un("#c9cdcf",.3,.8),p=Fu("near"),x=we+.45,_=we+1.95,m=gt.roof-.35,u=(g,E,A)=>new N(g,E,A);for(let g of[-1,1]){let E=g*fe,A=u(g,0,0);s.box(l,g*(fe-.03),(.3-gt.skirt)/2,0,.06,gt.skirt+.3,gt.length),s.box(c,g*(fe-.03),.525,0,.062,.45,gt.length);for(let[T,C]of zu){let b=C-T,S=(T+C)/2;s.box(a,g*(fe-.035),(.75+x)/2,S,.07,x-.75,b);let P=Math.max(1,Math.round(b/1.8)),D=[T===-Ce?T+.34:T+.1,C===Ce?C-.34:C-.1];for(let L=0;L<P;L++){let O=D[0]+(D[1]-D[0])*L/P+.03,z=D[0]+(D[1]-D[0])*(L+1)/P-.03;o.quad(p,u(E-g*.02,x,O),u(E-g*.02,x,z),u(E-g*.02,_,z),u(E-g*.02,_,O),A),L&&s.box(d,g*(fe-.035),(x+_)/2,O-.03,.07,_-x,.06)}for(let[L,O]of[[T,T===-Ce?.34:.1],[C,C===Ce?-.34:-.1]])s.box(a,g*(fe-.035),(x+_)/2,L+O/2,.07,_-x,Math.abs(O))}s.box(a,g*(fe-.035),(_+m)/2,0,.07,m-_,gt.length);for(let T of gt.doors)s.box(l,g*(fe-.03),.94,T,.062,.38,gt.doorWidth);s.quad(h,u(E,m,-Ce),u(E,m,Ce),u(g*.95,gt.roof,Ce),u(g*.95,gt.roof,-Ce),u(g*.4,1,0));for(let T of[-4.9,4.9])s.box(d,g*(hn.width/2+.34),-.6,T,.56,1.1,2.3)}s.quad(h,u(-.95,gt.roof,-Ce),u(-.95,gt.roof,Ce),u(.95,gt.roof,Ce),u(.95,gt.roof,-Ce),u(0,1,0));for(let g of[-3.1,3.1])s.box(un("#a9adae",.6,.2),0,gt.roof+.13,g,1.6,.26,2.4);s.box(l,0,we-.06,0,gt.width,.12,gt.length);for(let g of[-4.9,4.9])s.box(d,0,.52,g,gt.width-.2,.9,2.5);for(let[g,E]of[[1,n],[-1,t]]){let A=g*Ce,T=u(0,0,g);if(E){s.box(a,0,(.75+x)/2,A-g*.035,gt.width,x-.75,.07),s.box(c,0,.525,A-g*.03,gt.width,.45,.062),s.box(l,0,(.3-gt.skirt)/2,A-g*.03,gt.width,gt.skirt+.3,.06);for(let b of[-fe+.11,fe-.11])s.box(a,b,(x+_)/2,A-g*.035,.22,_-x,.07);s.box(a,0,(_+m)/2,A-g*.035,gt.width,m-_,.07),o.quad(p,u(-fe+.22,x,A-g*.02),u(fe-.22,x,A-g*.02),u(fe-.22,_,A-g*.02),u(-fe+.22,_,A-g*.02),T);for(let b of[-.95,.95])s.box(Di("#fff6dc",1.1),b,x-.2,A+g*.002,.26,.1,.01),s.box(Di("#d0302b",.6),b*.72,x-.2,A+g*.002,.12,.08,.01);let C=ga(e.bound,1.3,.2);C.position.set(0,(_+m)/2,A+g*.012),C.rotation.y=g>0?0:Math.PI,i.add(C)}else{for(let C of[-1,1])s.box(a,C*(fe+.55)/2,(we+m)/2,A-g*.035,fe-.55,m-we,.07);s.box(a,0,(we+2+m)/2,A-g*.035,1.1,m-we-2,.07);for(let C of[-.6,.6])s.box(d,C,we+1,A+g*gt.gap/4,.08,2.1,gt.gap/2);s.box(d,0,we+2.08,A+g*gt.gap/4,1.28,.08,gt.gap/2),s.box(d,0,we-.04,A+g*gt.gap/4,1.28,.08,gt.gap/2)}}r.slab(un("#5e6f7d",.7),-fe+.07,-Ce+.07,fe-.07,Ce-.07,we+.002),r.box(un("#eceeed",.6),0,gt.ceiling+.03,0,gt.width-.14,.06,gt.length-.14);for(let g of[-.5,.5])r.box(Di("#fff9ec",1.25),g,gt.ceiling-.004,0,.14,.012,gt.length-1.2);let y=Kt("carpet","#3f6f8f");for(let g of[-1,1]){for(let[E,A]of zu){let T=E===-Ce?E+(t?.75:.25):E+.3,C=A===Ce?A-(n?.75:.25):A-.3;if(C-T<.6)continue;let b=(T+C)/2;r.box(y,g*(fe-.32),we+.36,b,.46,.12,C-T),r.box(un("#d9dcdc",.6),g*(fe-.32),we+.15,b,.42,.3,C-T),r.box(y,g*(fe-.11),we+.62,b,.08,.4,C-T);for(let S of[T,C])r.box(f,g*(fe-.32),we+.7,S,.5,.56,.03)}r.box(f,g*.66,we+1.9,0,.03,.03,gt.length-1.4);for(let E of gt.doors){for(let T of[E-.76,E+.76])r.cylinder(f,g*(fe-.56),we,T,.017,gt.ceiling-we,8);let A=ga(e.car,.9,.16);A.position.set(g*(fe-.085),we+2.02,E),A.rotation.y=g>0?-Math.PI/2:Math.PI/2,i.add(A)}}s.build(i,{where:"out"}),r.build(i,{where:"in",cast:!1});for(let g of o.build(i,{cast:!1}))g.renderOrder=1;let M=[];for(let g of[-1,1])for(let E of gt.doors)for(let A of[-1,1]){let T=new Ue,C=gt.doorWidth/2,b=(P,D,L,O)=>T.box(f,0,(L+O)/2,(P+D)/2,.035,O-L,D-P);b(-C/2,-C/2+.05,0,gt.doorHeight),b(C/2-.05,C/2,0,gt.doorHeight),b(-C/2,C/2,0,.18),b(-C/2,C/2,gt.doorHeight-.07,gt.doorHeight),T.quad(p,u(0,.18,-C/2+.05),u(0,.18,C/2-.05),u(0,gt.doorHeight-.07,C/2-.05),u(0,gt.doorHeight-.07,-C/2+.05),u(g,0,0));let S=new pe;for(let P of T.build(S,{cast:!1}))P.material===p&&(P.renderOrder=1);S.position.set(g*(fe+.02),we,E+A*C/2),i.add(S),M.push({leaf:S,side:g,shut:E+A*C/2,slide:A*(C-.03)})}return{car:i,leaves:M}}var Ox=gt.width/2,ku=gt.length/2,Gu=gt.length+gt.gap,Wu=Gu/2,Fx=gt.doorWidth/2-ln,ll=Ox-ln-.1,Hu=Se.edge+ln+.055,Vu=(n,t)=>n?.phase==="dwell"&&n.doors>.85&&n.way===t.sign&&n.stop.index===t.stop.index;function cl(n,t=gt.doors){return t.find(e=>Math.abs(n-e)<=Fx)}function zx(n,t,e){let{spot:i,sign:s}=n;return((t-i.x)*i.dx+(e-i.z)*i.dz)*s}function Bx(n,t,e,i){return Math.abs(e)<=.98-ln&&Math.abs(i)<=ku-.3-ln||Math.abs(e)<=ll&&gt.doors.some(s=>Math.abs(i-s)<=.9-ln)?!0:Math.abs(e)<=.55-ln&&Math.abs(i)>=ku-.7&&Math.abs(i)<=Wu+.14&&!!n.cars[t+Math.sign(i)]}function Xu(n){function t(r,o,a){if(r.x===o&&r.z===a)return null;for(let c of n())for(let l of c.platforms){let{spot:h,sign:d,level:f}=l;if(Math.abs(r.y-f)>.4||Math.abs(r.x-h.x)>26||Math.abs(r.z-h.z)>26)continue;let p=((r.x-h.x)*h.dz-(r.z-h.z)*h.dx)*d,x=((o-h.x)*h.dz-(a-h.z)*h.dx)*d;if(p<Se.edge-.04||x>Hu||x>=p)continue;let _=Math.max(0,Math.min(1,(p-Hu)/(p-x))),m=zx(l,r.x+(o-r.x)*_,r.z+(a-r.z)*_),u=c.trains.find(({state:y})=>Vu(y,l));if(u)for(let y of u.cars){if(!y.place)continue;let M=m*d-y.offset,g=cl(M);if(!(g===void 0||Math.abs(g+y.offset)+gt.doorWidth/2>=Se.length/2))return{entry:c,train:u,car:y.index,x:d*(ll-.03),z:M}}}return null}function e(r){let{place:o}=r.train.cars[r.car],a=o.pitch??0,c=r.z*Math.cos(a)-gt.floor*Math.sin(a);return{x:o.x+r.x*o.dz+c*o.dx,z:o.z-r.x*o.dx+c*o.dz,y:o.y+gt.floor*Math.cos(a)+r.z*Math.sin(a)}}function i(r,o,a){let{entry:c,train:l}=r,h=l.cars[r.car],{place:d}=h,f=o*d.dz-a*d.dx,p=o*d.dx+a*d.dz,x=l.state.way,_=c.platforms.find(u=>Vu(l.state,u)),m=(h.offset+r.z+p)*x;if(_&&f*x>0&&(r.x+f)*x>ll&&cl(r.z+p)!==void 0&&Math.abs(m)<Se.length/2-ln&&cl(m,ur(l.cars.length))!==void 0){let{spot:u}=_,y=Se.edge+ln+.18;return{x:u.x+x*(y*u.dz+m*u.dx),z:u.z+x*(-y*u.dx+m*u.dz),y:_.level}}for(let[u,y]of[[f,p],[f,0],[0,p]]){let M=r.x+u,g=r.z+y;if(Bx(l,r.car,M,g)){r.x=M,r.z=g,Math.abs(g)>Wu&&l.cars[r.car+Math.sign(g)]?.place&&(r.car+=Math.sign(g),r.z-=Math.sign(g)*Gu);break}}return!0}return{board:t,spotOf:e,walk:i,riding:r=>!!(r&&n().includes(r.entry)&&r.train.cars[r.car]?.place)}}var Xe={width:1.8,slope:.6,landing:2.2,riser:.17,gap:.2};function qu(n,t,e=Se.length/2){let i=Se.edge,s=Se.edge+Se.width,r=n-t,o={edge:i,outer:s,long:e,level:n,ground:t,stair:null,landing:null};if(!(r>1))return o;let a=Math.min(r/Xe.slope,2*e-Xe.landing-4),c=e-2,l=c-a,h=s+Xe.gap;return o.stair={u0:h,u1:h+Xe.width,top:l,bottom:c,run:a,rise:r},o.landing={u0:s-.2,u1:h+Xe.width,v0:l-Xe.landing,v1:l},o}function kx(n){let{edge:t,outer:e,long:i,level:s,ground:r,stair:o,landing:a}=n,c=[s-.4,s+2.2],l=[{u0:t,u1:e,v0:-i,v1:i,y0:s,y1:s}],h=[[t,-i,t,i,...c],[t,-i,e,-i,...c],[t,i,e,i,...c]],d=[];if(o){l.push({u0:a.u0,u1:a.u1,v0:a.v0,v1:a.v1,y0:s,y1:s}),l.push({u0:o.u0,u1:o.u1,v0:o.top,v1:o.bottom,y0:s,y1:r}),h.push([e,-i,e,a.v0,...c],[e,a.v1,e,i,...c]),h.push([e,a.v0,a.u1,a.v0,...c],[a.u1,a.v0,a.u1,a.v1,...c]);let f=[r-.5,s+2.2];h.push([o.u0,o.top,o.u0,o.bottom,...f],[o.u1,o.top,o.u1,o.bottom,...f]),h.push([o.u0,o.top,o.u1,o.top,r-.5,s-2])}else h.push([e,-i,e,i,...c]);for(let f=-i+4;f<=i-4;f+=8)d.push({u:e-.6,v:f,w:.7,d:.7,low:r-.5,high:s-.5});return{surfaces:l,walls:h,boxes:d}}function Yu(n,{x:t,z:e,dx:i,dz:s,sign:r=1}){let o=r*s,a=r*-i,c=r*i,l=r*s,h=(m,u)=>[t+m*o+u*c,e+m*a+u*l],d=kx(n),f=d.surfaces.map(m=>{let u=[h(m.u0,m.v0),h(m.u1,m.v0),h(m.u1,m.v1),h(m.u0,m.v1)];return{...m,x:t,z:e,ux:o,uz:a,vx:c,vz:l,box:hl(u)}}),p=d.walls.map(([m,u,y,M,g,E])=>{let[A,T]=h(m,u),[C,b]=h(y,M);return{ax:A,az:T,bx:C,bz:b,r:.05,low:g,high:E,box:hl([[A,T],[C,b]])}}),x=Math.atan2(i,s)*180/Math.PI,_=d.boxes.map(m=>{let[u,y]=h(m.u,m.v);return{x:u,z:y,w:m.w,d:m.d,r:x,low:m.low,high:m.high,box:hl([[u-m.w,y-m.d],[u+m.w,y+m.d]])}});return{surfaces:f,walls:p,boxes:_}}function hl(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[r,o]of n)t=Math.min(t,r),i=Math.max(i,r),e=Math.min(e,o),s=Math.max(s,o);return{x0:t,z0:e,x1:i,z1:s}}function $u(n){return n.eventsBetween(-.001,n.period-.001).filter(t=>t.kind==="arrive").map(t=>({time:t.time,stop:t.stop.index,way:Math.sign(t.next.at-t.stop.at)||1}))}function Zu(n,t,e,i,s,r){let o=e.map(h=>n.stateAt(r+h)).find(h=>h.phase==="dwell"&&h.stop.index===i.index&&h.way===s),a=`${i.name} ${s>0?1:2}\u756A\u7DDA`,c=s>0?n.stops.at(-1):n.stops[0];if(o){let h=n.drive.dwell-o.leaves,d="\u505C\u8ECA\u4E2D";return h<n.drive.doorsOpenAt+n.drive.doorTime?d="\u30C9\u30A2\u304C\u958B\u304D\u307E\u3059":o.leaves<=n.drive.doorsCloseAt?d="\u767A\u8ECA\u3057\u307E\u3059":o.leaves<n.drive.doorsCloseAt+n.drive.doorTime&&(d="\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059"),{doors:o.doors,text:[a,`${c.name} \u3086\u304D`,d]}}let l=1/0;for(let h of t)if(!(h.stop!==i.index||h.way!==s))for(let d of e){let f=((h.time-r-d)%n.period+n.period)%n.period;l=Math.min(l,f)}return Number.isFinite(l)?{doors:0,text:[a,`${c.name} \u3086\u304D`,l<20?"\u307E\u3082\u306A\u304F\u5230\u7740":`\u7D04 ${Math.max(1,Math.ceil(l/60))} \u5206`]}:{doors:0,text:[a,"\u3053\u306E\u30DB\u30FC\u30E0\u306E\u904B\u884C\u306A\u3057","\u53CD\u5BFE\u5074\u30DB\u30FC\u30E0\u3078"]}}function Ju({clock:n=()=>Date.now()/1e3,sound:t=null}={}){let e=new pe;e.name="route-transit";let i=[],s="",r="",o=Xu(()=>i),a=0,c=new WeakMap;function l(u){if(u.track){e.remove(u.track),Pi(u.track);for(let y of u.platforms)y.board.dispose();u.track=null,u.platforms=[]}}function h(){for(let u of i){l(u);for(let y of u.trains){for(let M of y.cars)e.remove(M.car),Pi(M.car);y.boards.car.dispose(),y.boards.bound.dispose()}}i=[]}function d(u,y,M,g){let E=new pe,A=new Ue,T=Kt("concrete","#d6d4cd"),C=Kt("concrete","#c6c4bd"),b=Kt("concrete","#bfbcb4"),S=Kt("tile","#d9d4ca"),P=Kt("roofMetal","#9aa3a8"),D=Kt("#7d868c","#ffffff",{roughness:.45,metalness:.5}),L=Kt(y.color??"#1f7a6a","#ffffff",{roughness:.5}),O=u.way,z=Q=>{let ut=O.spot(Q);return Math.hypot(ut.x-M[0],ut.z-M[1])<g},W=(Q,ut,I)=>new N(Q,ut,I);for(let Q=0;Q<O.length;Q+=10){let ut=Math.min(O.length,Q+10);if(!z(Q)&&!z(ut))continue;let I=O.spot(Q),vt=O.spot(ut),Tt=yn(y.heights,Q)-hn.height/2,G=yn(y.heights,ut)-hn.height/2;for(let j of[-1,1]){let[et,tt]=[I.x+I.dz*j*Gn,I.z-I.dx*j*Gn],[Rt,qt]=[vt.x+vt.dz*j*Gn,vt.z-vt.dx*j*Gn];A.bar(T,W(et,Tt,tt),W(Rt,G,qt),hn.width,hn.height);for(let Yt of[-1,1]){let R=I.dz*Yt*(hn.width/2+.035),v=-I.dx*Yt*(hn.width/2+.035);A.bar(D,W(et+R,Tt+.13,tt+v),W(Rt+R,G+.13,qt+v),.05,.09)}}}let q=[];for(let Q of tl(O.length,y.clear??[])){if(!z(Q))continue;let ut=O.spot(Q),I=Math.atan2(ut.dx,ut.dz),vt=yn(y.ground,Q),Tt=yn(y.heights,Q)-hn.height,G=Tt-.9-vt;G<.3||(A.box(C,ut.x,vt+.15,ut.z,2.6,.3,2.6,I),A.box(C,ut.x,vt+G/2,ut.z,1.5,G,1.5,I),A.box(C,ut.x,Tt-.45,ut.z,Gn*2+1.4,.9,1.6,I),q.push({x:ut.x,z:ut.z,w:1.6,d:1.6,r:I*180/Math.PI}))}let H={surfaces:[],walls:[],boxes:[]},ct=[],ft=Kt("#e8c33a"),wt=Kt("#dfe5e8","#ffffff",{roughness:.3}),yt=Kt("#9ab4c4","#ffffff",{roughness:.18,metalness:.45}),zt=Kt("wood","#8c623e"),Dt=Kt("#2c3338","#ffffff",{roughness:.4,metalness:.65}),mt=Kt("#d8dde0","#ffffff",{roughness:.35,metalness:.4}),J=Kt("#c93a32","#ffffff",{roughness:.3}),nt=Di("#fff8e6",1.15),bt=Di("#2a9df4",.9),Ft=ur(u.cars).filter(Q=>Math.abs(Q)+gt.doorWidth/2<Se.length/2);for(let Q of u.stops){if(!z(Q.at))continue;let ut=O.spot(Q.at),I=Math.atan2(ut.dx,ut.dz),vt=yn(y.heights,Q.at)+gt.floor,Tt=yn(y.ground,Q.at),G=qu(vt,Tt);for(let j of[1,-1]){A.at(ut.x,0,ut.z,j>0?I:I+Math.PI,R=>Nt(R,G));let et=Yu(G,{x:ut.x,z:ut.z,dx:ut.dx,dz:ut.dz,sign:j});H.surfaces.push(...et.surfaces),H.walls.push(...et.walls),H.boxes.push(...et.boxes);let tt=new pe;tt.name="station-platform",tt.position.set(ut.x,0,ut.z),tt.rotation.y=j>0?I:I+Math.PI;let Rt=[];for(let R of Ft)for(let v of[-1,1]){let F=new pe;F.name="platform-door";let K=new Ue,it=gt.doorWidth/2;K.box(wt,0,.65,0,.06,1.25,it-.04),K.box(D,0,1.28,0,.09,.06,it);for(let At of[-1,1])K.box(D,0,.65,At*(it/2-.025),.09,1.25,.05);K.build(F,{cast:!1,where:"out"});let V=R+v*it/2;F.position.set(G.edge+.12,vt,V),tt.add(F),Rt.push({leaf:F,shut:V,slide:v*(it-.02)})}let qt=xa(208,68),Yt=ga(qt,2.1,.68,!0,.2);if(Yt.name="platform-departure-board",Yt.position.set((G.edge+G.outer)/2,vt+2.9,0),tt.add(Yt),typeof document<"u"){let R=Eu(`${Q.name}  ${j>0?"1\u756A\u7DDA":"2\u756A\u7DDA"}`,{color:"#1b262c",background:"#f7f6f0",border:y.color??"#1f7a6a",padding:14}),v=new xn({map:R.map}),F=.42,K=Math.min(2.4,F*R.aspect);for(let it of[-G.long*.48,G.long*.48]){let V=new be(new Bn(K,F),v);V.position.set(G.outer-.11,vt+1.95,it),V.rotation.y=-Math.PI/2,V.userData.ownMaterial=!0,tt.add(V)}}E.add(tt),ct.push({stop:Q,sign:j,spot:ut,level:vt,leaves:Rt,board:qt,nextBoard:-1/0})}A.at(ut.x,0,ut.z,I,j=>{let et=G.outer+.65,tt=G.long,Rt=vt+Se.roof;for(let qt of[-1,1])j.box(P,qt*(G.edge+(et-G.edge)/2),Rt+.08,0,et-G.edge+.3,.18,tt*2+2.4),j.box(L,qt*(et+.04),Rt+.06,0,.08,.32,tt*2+2.4),j.box(nt,qt*((G.edge+G.outer)/2),Rt-.04,0,.22,.03,tt*2-2);j.box(P,0,Rt+.52,0,G.edge*2+.8,.16,tt*2+2.4),j.box(yt,0,Rt+.3,0,G.edge*2+.4,.28,tt*2+1.6),j.box(L,0,Rt+.1,-tt-1.2,et*2,.38,.1),j.box(L,0,Rt+.1,tt+1.2,et*2,.38,.1);for(let qt=-tt+4;qt<=tt-4;qt+=8)j.box(D,0,Rt-.08,qt,et*2-.2,.22,.22),j.box(C,0,vt-.68,qt,G.outer*2-.4,.55,.75)}),q.push({x:ut.x,z:ut.z,w:2.4,d:2.4,r:I*180/Math.PI})}function Nt(Q,ut){let{edge:I,outer:vt,long:Tt,level:G,ground:j,stair:et,landing:tt}=ut,Rt=Tt*2;if(Q.box(b,(I+vt)/2,G-.25,0,vt-I,.5,Rt),Q.box(C,vt+.04,G-.22,0,.1,.56,Rt+.2),Q.box(S,(I+vt)/2,G+.005,0,vt-I,.01,Rt),Q.box(ft,I+.45,G+.012,0,.32,.012,Rt-.6),tt){let Y=(tt.v0+tt.v1)/2;Q.box(ft,(I+.6+vt)/2,G+.012,Y,vt-I-.6,.012,.3)}let qt=(Y,X)=>{let rt=X-Y;if(rt<=.1)return;let dt=(Y+X)/2;Q.box(b,vt-.06,G+.52,dt,.12,1.04,rt),Q.box(yt,vt-.05,G+1.75,dt,.05,1.4,Math.max(.1,rt-.16)),Q.box(D,vt-.06,G+2.48,dt,.12,.08,rt)};tt?(qt(-Tt,tt.v0),qt(tt.v1,Tt)):qt(-Tt,Tt);for(let Y of[-Tt+.05,Tt-.05])Q.box(b,(I+vt)/2,G+.52,Y,vt-I,1.04,.1),Q.box(yt,(I+vt)/2,G+1.65,Y,vt-I-.15,1.2,.05),Q.box(D,(I+vt)/2,G+2.28,Y,vt-I,.07,.1);let Yt=-Tt;for(let Y of Ft)R(Yt,Y-gt.doorWidth/2),Q.box(D,I+.12,G+2.18,Y,.12,.16,gt.doorWidth+.16),Q.box(L,I+.07,G+2.18,Y,.03,.1,gt.doorWidth+.12),Yt=Y+gt.doorWidth/2;R(Yt,Tt);function R(Y,X){if(X<=Y)return;let rt=(Y+X)/2,dt=X-Y;Q.box(wt,I+.12,G+.65,rt,.08,1.3,dt),Q.box(D,I+.12,G+1.3,rt,.1,.06,dt),Q.box(L,I+.07,G+1.12,rt,.02,.08,dt),Q.box(D,I+.12,G+2.22,rt,.1,.08,dt)}for(let Y of[-10,0,10]){if(tt&&Y>=tt.v0-1.8&&Y<=tt.v1+1.8)continue;let X=I+(vt-I)*.58;Q.box(zt,X,G+.44,Y,.52,.07,2.2),Q.box(zt,X+.2,G+.68,Y,.07,.42,2.2);for(let rt of[Y-.85,Y+.85])Q.box(Dt,X,G+.21,rt,.44,.42,.07)}for(let Y=-Tt+4;Y<=Tt-4;Y+=8){let X=G-.5-j;X>.5&&(Q.box(C,vt-.6,j+X/2,Y,.72,X,.72),Q.box(C,vt-.6,j+.18,Y,1,.36,1))}for(let Y=-Tt+2;Y<=Tt-2;Y+=8)Q.box(D,vt-.2,G+Se.roof/2,Y,.2,Se.roof,.2);if(!et)return;let v=(tt.u0+tt.u1)/2,F=(tt.v0+tt.v1)/2,K=tt.u1-tt.u0,it=tt.v1-tt.v0;Q.box(b,v,G-.25,F,K,.5,it),Q.box(S,v,G+.006,F,K,.01,it),Q.box(ft,v,G+.012,tt.v1-.15,Xe.width-.2,.012,.28),Q.box(b,(vt+tt.u1)/2,G+.52,tt.v0+.04,tt.u1-vt,1.04,.08),Q.box(yt,(vt+tt.u1)/2,G+1.7,tt.v0+.04,tt.u1-vt-.1,1.3,.04),Q.box(b,tt.u1-.04,G+.52,F,.08,1.04,it),Q.box(yt,tt.u1-.04,G+1.7,F,.04,1.3,it-.1),Q.box(P,v,G+Se.roof-.1,F,K+.4,.16,it+.6);for(let Y of[tt.v0+.35,tt.v1-.35])Q.box(mt,vt+.05,G+.48,Y,.95,.96,.22),Q.box(Dt,vt+.05,G+.97,Y,.92,.04,.2),Q.box(bt,vt+.36,G+.99,Y,.14,.02,.12),Q.box(J,vt+.05,G+.48,Y+(Y<F?.14:-.14),.04,.62,.08);let V=(et.u0+et.u1)/2,At=Math.max(1,Math.ceil(et.rise/Xe.riser));for(let Y=0;Y<At;Y++){let X=j+et.rise*(Y+1)/At,rt=et.bottom-et.run*(Y+.5)/At;Q.box(b,V,X-.15,rt,Xe.width,.3,et.run/At+.02)}let st=(Y,X,rt)=>new N(Y,X,rt);for(let Y of[et.u0,et.u1])Q.face(C,[st(Y,j,et.bottom),st(Y,G-.3,et.top),st(Y,G+.9,et.top),st(Y,j+.9,et.bottom)]),Q.face(C,[st(Y,j+.9,et.bottom),st(Y,G+.9,et.top),st(Y,G-.3,et.top),st(Y,j,et.bottom)]),Q.face(yt,[st(Y,j+.9,et.bottom),st(Y,G+.9,et.top),st(Y,G+2.15,et.top),st(Y,j+2.15,et.bottom)]),Q.face(yt,[st(Y,j+2.15,et.bottom),st(Y,G+2.15,et.top),st(Y,G+.9,et.top),st(Y,j+.9,et.bottom)]),Q.bar(D,st(Y,j+.95,et.bottom),st(Y,G+.95,et.top),.06,.06),Q.bar(D,st(Y,j+2.2,et.bottom),st(Y,G+2.2,et.top),.08,.08);Q.face(C,[st(et.u0,j-.2,et.bottom),st(et.u1,j-.2,et.bottom),st(et.u1,G-.3,et.top),st(et.u0,G-.3,et.top)]),Q.bar(P,st(V,j+2.55,et.bottom+.4),st(V,G+2.55,et.top-.2),Xe.width+.45,.14),Q.box(C,V,(j+G)/2-.3,et.top+.15,Xe.width,G-j,.35);let St=et.bottom+.3;Q.box(D,et.u0-.05,j+1.25,St,.12,2.5,.5),Q.box(D,et.u1+.05,j+1.25,St,.12,2.5,.5),Q.box(P,V,j+2.55,St,Xe.width+.5,.18,1.1),Q.box(L,V,j+2.38,St+.52,Xe.width+.46,.24,.06),Q.box(ft,V,j+.02,et.bottom+.25,Xe.width-.2,.015,.32),Q.box(Dt,et.u1+.18,j+.95,et.bottom-1.6,.28,1.9,1.4),Q.box(bt,et.u1+.33,j+1.2,et.bottom-1.6,.02,.55,.95)}return A.build(E,{where:"out"}),{node:E,piers:q,solids:H,platforms:ct}}function f(u,{near:y=[0,0],reach:M=1600}={}){let g=JSON.stringify(u.map(E=>[E.name,E.path.length,E.path[0],E.heights.length,E.ground?.length??0]));if(g!==s){s=g,h(),r="";for(let E of u)i.push(x(E))}p(y,M)}function p(u,y=1600){let M=JSON.stringify([u.map(g=>Math.round(g/200)),y]);if(M!==r){r=M;for(let g of i){l(g);let{node:E,piers:A,solids:T,platforms:C}=d(g.line,g.spec,u,y);e.add(E),g.track=E,g.piers=A,g.solids=T,g.platforms=C}a++}}function x(u){let y=el(u,u.drive),M=Nu(y.period),g=[];for(let E=0;E<M;E++){let A={car:xa(160,28),bound:xa(144,22)},T=pa(y.cars),C=T.map((b,S)=>{let P=Bu({front:S===T.length-1,back:S===0,boards:A});return e.add(P.car),{...P,offset:b,index:S}});g.push({offset:E*y.period/M,cars:C,boards:A,shown:""})}return{spec:u,line:y,track:null,piers:[],trains:g,platforms:[],calls:$u(y)}}function _(u,y,M,g){if(!t||!g)return;let{line:E,spec:A}=u,T=c.get(y);if(T||(T={time:M,events:new Set},c.set(y,T)),T.checked&&M>=T.time&&M-T.time<.25)return;let C=Math.max(T.time,M-2)+y.offset;T.time=M,T.checked=!0;let b=E.eventsBetween(C,M+y.offset),S=y.state;S.phase==="run"&&S.arrives<=16&&b.push({kind:"approach",time:S.time,stop:S.from,next:S.next,arrival:S.time+S.arrives});for(let P of b){let D=P.kind==="approach"?P.arrival??P.time+E.stateAt(P.time).arrives:P.time,L=`${P.kind}|${Math.round(D*1e3)}`;if(T.events.has(L))continue;let O=nl(E,P);if(!O)continue;let z=g.ride?.entry===u&&g.ride.train===y,W=0,q=Math.sign(P.next.at-P.stop.at)||1;if(z&&O.where!=="platform")W=1;else if(!g.ride&&O.where!=="car"&&O.at){O.at.index===0?q=1:O.at.index===E.stops.length-1&&(q=-1);let H=E.way.spot(O.at.at),ct=yn(A.heights,O.at.at)+gt.floor;if(q*((g.x-H.x)*H.dz-(g.z-H.z)*H.dx)<Se.edge-.6||Math.abs(g.y-ct)>2.2)continue;let wt=q*(Se.edge+Se.width/2),yt=H.x+H.dz*wt,zt=H.z-H.dx*wt,Dt=Math.hypot(g.x-yt,g.z-zt,(g.y-ct)*2);W=Math.max(0,1-Dt/32)}if(W>.05&&(T.events.add(L),T.events.size>32&&T.events.delete(T.events.values().next().value),O.chime&&t.play(O.chime,W),O.text)){let H=P.kind==="approach"?O.text.replace("\u307E\u3082\u306A\u304F\u3001",`\u307E\u3082\u306A\u304F\u3001${q>0?1:2}\u756A\u7DDA\u306B\u3001`):O.text;t.say(H,{volume:W})}}}function m(u=null,y=2200,M=null){let g=n();for(let E of i){let{line:A,spec:T}=E;for(let C of E.trains){let b=A.stateAt(g+C.offset);C.state=b;let S=b.way>=0?1:-1;for(let L of C.cars){let O=b.s+L.offset,z=A.way.spot(O),W=z.x+z.dz*S*Gn,q=z.z-z.dx*S*Gn,H=M?.ride?.train===C||!u||Math.hypot(W-u[0],q-u[1])<y;if(L.car.visible=H,!H)continue;let ct=yn(T.heights,O),ft=Math.atan2(yn(T.heights,O+gt.length/2)-yn(T.heights,O-gt.length/2),gt.length);L.car.position.set(W,ct,q),L.car.rotation.set(-ft,Math.atan2(z.dx,z.dz),0,"YXZ"),L.place={x:W,z:q,dx:z.dx,dz:z.dz,y:ct,pitch:ft};let wt=b.phase==="dwell"?S:0;for(let yt of L.leaves)yt.leaf.position.z=yt.shut+(yt.side===wt?yt.slide*b.doors:0)}let P=il(A,b),D=P.join("|");D!==C.shown&&(C.shown=D,C.boards.car.show(P,["#ffb23e","#ffffff"]),C.boards.bound.show([A.boundFor(b).name],["#ffb23e"])),_(E,C,g,M)}for(let C of E.platforms){let S=E.trains.find(({state:D})=>D.phase==="dwell"&&D.stop.index===C.stop.index&&D.way===C.sign)?.state.doors??0;for(let D of C.leaves)D.leaf.position.z=D.shut+D.slide*S;if(g<C.nextBoard&&C.nextBoard-g<=.5)continue;let P=Zu(A,E.calls,E.trains.map(({offset:D})=>D),C.stop,C.sign,g);C.board.show(P.text),C.nextBoard=g+.5}}}return{group:e,setLines:f,setNear:p,update:m,...o,get lines(){return i},get piers(){return i.flatMap(u=>u.piers)},get solids(){return{surfaces:i.flatMap(u=>u.solids?.surfaces??[]),walls:i.flatMap(u=>u.solids?.walls??[]),boxes:i.flatMap(u=>u.solids?.boxes??[])}},get revision(){return a},dispose(){s="",r="",h()}}}function Hx(n){let t=String(n??"").trim();if(/^\d{1,9}$/.test(t))return Number(t);let e=t||"1",i=2166136261;for(let s=0;s<e.length;s++)i=Math.imul(i^e.charCodeAt(s),16777619);return i>>>0}var dr=new URLSearchParams(location.hash.slice(1)),dl=Hx(dr.get("seed")??"3"),vn=Math.min(1600,Math.max(200,Number(dr.get("size"))||1e3)),vs=document.getElementById("info"),ya=document.getElementById("view"),Ui=new sa({canvas:ya,antialias:!0});Ui.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Ui.shadowMap.enabled=!0;Ui.toneMapping=go;Ui.toneMappingExposure=.9;var Oi=new Vs;Oi.background=new Jt("#c9dbe6");Oi.fog=new Hs("#c9dbe6",600,2600);var Ni=new Fe(50,1,.5,6e3);Ni.position.set(-380,260,420);var Li=new aa(Ni,ya);Li.target.set(0,30,0);Li.maxPolarAngle=Math.PI*.49;Oi.add(new js("#dfe8f0","#6b6a5a",1.2));var Ms=new tr("#fff4e2",2.6);Ms.position.set(-300,500,260);Ms.castShadow=!0;Ms.shadow.mapSize.set(4096,4096);Object.assign(Ms.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:10,far:1600});Oi.add(Ms,Ms.target);var va=Lu();Oi.add(va.group);var Ma=Ju();Oi.add(Ma.group);window.__view={camera:Ni,controls:Li,transit:Ma,region:va};function Ku(){let n=ya.clientWidth,t=ya.clientHeight;Ui.setSize(n,t,!1),Ni.aspect=n/Math.max(1,t),Ni.updateProjectionMatrix()}window.addEventListener("resize",Ku);Ku();Ui.setAnimationLoop(()=>{Li.update(),Ma.update([Li.target.x,Li.target.z],vn),Ui.render(Oi,Ni)});var ul=new Worker(new URL("./worker.bundle.js?v=boarding-20261119",import.meta.url)),_a=null,ci=null;ul.onmessage=n=>{let t=n.data;if(t.type==="progress")vs.textContent=`${t.label}\uFF08${Math.round(t.fraction*100)}%\u30FB${(t.elapsed/1e3).toFixed(1)}\u79D2\uFF09`;else if(t.type==="ready"){_a=t.overlay;let e=_a.lines[0]?.stations[Math.min(5,_a.lines[0].stations.length-1)];ci=[Number(dr.get("x"))||e?.x||1e4,Number(dr.get("z"))||e?.z||1e4],vs.textContent="3D\u306E\u5F62\u3092\u4F5C\u3063\u3066\u3044\u307E\u3059\u2026",ul.postMessage({type:"window",id:1,seed:dl,x0:ci[0]-vn/2,z0:ci[1]-vn/2,x1:ci[0]+vn/2,z1:ci[1]+vn/2,step:vn>1100?4:2,buildings:dr.get("bare")!=="1"})}else t.type==="window"?Vx(t.window).catch(e=>{vs.textContent=`3D\u306E\u5F62\u3092\u4F5C\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002${e.message}`}):t.type==="error"&&(vs.textContent=`\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A${t.message}`)};ul.postMessage({type:"generate",seed:dl});async function Vx(n){let t=1/0;for(let c of n.heights)t=Math.min(t,c);let e=Math.floor(t),i=ci,s=performance.now();if(!await va.show(n,{origin:i,datum:e}))return;let r=va.heightAt(0,0)??0;Li.target.set(0,r,0),Ni.position.set(-vn*.38,r+vn*.28,vn*.42),vs.textContent="\u30E2\u30CE\u30EC\u30FC\u30EB\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u2026",await new Promise(c=>requestAnimationFrame(()=>setTimeout(c,0)));let o=[];for(let c of _a.lines){if(!n.lines.includes(c.id))continue;let l=Uu({name:c.name,color:c.color,points:c.points,ground:c.ground,stations:c.stations},{origin:i,datum:e});l&&o.push(l)}Ma.setLines(o,{near:[0,0],reach:vn*.75});let a=o.length;vs.innerHTML=`\u30B7\u30FC\u30C9 ${dl}\u30FB${vn}m\u56DB\u65B9\uFF08\u6771\u3078 ${(ci[0]/1e3).toFixed(2)}km\u30FB\u5357\u3078 ${(ci[1]/1e3).toFixed(2)}km\uFF09<br>\u5EFA\u7269 ${n.buildings.length}\u68DF\u30FB\u751F\u6D3B\u9053\u8DEF ${n.streets.length}\u672C\u30FB\u5730\u533A ${n.districts.length}\u30FB\u30E2\u30CE\u30EC\u30FC\u30EB ${a}\u8DEF\u7DDA<br>3D\u306E\u7D44\u307F\u7ACB\u3066 ${Math.round(performance.now()-s)}\u30DF\u30EA\u79D2\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
