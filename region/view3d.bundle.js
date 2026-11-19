var Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iu=0,Hl=1,su=2;var Vl=1,ou=2,ni=3,gi=0,pn=1,je=2,yi=0,hs=1,Gl=2,Wl=3,Xl=4,ru=5,zi=100,au=101,cu=102,lu=103,hu=104,fu=200,uu=201,du=202,pu=203,Qr=204,ta=205,mu=206,gu=207,xu=208,_u=209,yu=210,vu=211,bu=212,Mu=213,wu=214,wa=0,Sa=1,Ea=2,fs=3,Ta=4,Aa=5,Ra=6,Ca=7,Yl=0,Su=1,Eu=2,vi=0,Tu=1,Au=2,Ru=3,Pa=4,Cu=5,Pu=6,Iu=7;var ql=300,gs=301,xs=302,Ia=303,La=304,hr=306,En=1e3,Ni=1001,ea=1002,Ze=1003,Lu=1004;var fr=1005;var Tn=1006,Da=1007;var ii=1008;var Yn=1009,$l=1010,Kl=1011,oo=1012,Ua=1013,Gi=1014,On=1015,ro=1016,Na=1017,za=1018,ao=1020,Zl=35902,Jl=35899,jl=1021,Ql=1022,rn=1023,Ks=1026,co=1027,th=1028,Oa=1029,eh=1030,Fa=1031;var Ba=1033,ur=33776,dr=33777,pr=33778,mr=33779,ka=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,Ya=37496,qa=37808,$a=37809,Ka=37810,Za=37811,Ja=37812,ja=37813,Qa=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,oc=37820,rc=37821,ac=36492,cc=36494,lc=36495,hc=36283,fc=36284,uc=36285,dc=36286;var Bo=2300,na=2301,jr=2302,Pl=2400,Il=2401,Ll=2402;var Du=3200,Uu=3201;var nh=0,Nu=1,bi="",Ee="srgb",us="srgb-linear",ko="linear",de="srgb";var ls=7680;var Dl=519,zu=512,Ou=513,Fu=514,ih=515,Bu=516,ku=517,Hu=518,Vu=519,Ul=35044;var sh="300 es",Wn=2e3,Ho=2001;var ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=1234567,Oo=Math.PI/180,Zs=180/Math.PI;function lo(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function oh(n,t){return(n%t+t)%t}function Q0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function tp(n,t,e){return n!==t?(e-n)/(t-n):0}function Fo(n,t,e){return(1-e)*n+e*t}function ep(n,t,e,i){return Fo(n,t,1-Math.exp(-e*i))}function np(n,t=1){return t-Math.abs(oh(n,t*2)-t)}function ip(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function sp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function op(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rp(n,t){return n+Math.random()*(t-n)}function ap(n){return n*(.5-Math.random())}function cp(n){n!==void 0&&(Pf=n);let t=Pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(n){return n*Oo}function hp(n){return n*Zs}function fp(n){return(n&n-1)===0&&n!==0}function up(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pp(n,t,e,i,s){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),f=r((t+i)/2),h=o((t-i)/2),u=r((t-i)/2),d=o((i-t)/2),p=r((i-t)/2);switch(s){case"XYX":n.set(a*f,c*h,c*u,a*l);break;case"YZY":n.set(c*u,a*f,c*h,a*l);break;case"ZXZ":n.set(c*h,c*u,a*f,a*l);break;case"XZX":n.set(a*f,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*f,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var rh={DEG2RAD:Oo,RAD2DEG:Zs,generateUUID:lo,clamp:oe,euclideanModulo:oh,mapLinear:Q0,inverseLerp:tp,lerp:Fo,damp:ep,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:op,randFloat:rp,randFloatSpread:ap,seededRandom:cp,degToRad:lp,radToDeg:hp,isPowerOfTwo:fp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:pp,normalize:fn,denormalize:qs},$t=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],f=i[s+2],h=i[s+3],u=o[r+0],d=o[r+1],p=o[r+2],y=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=y;return}if(h!==y||c!==u||l!==d||f!==p){let _=1-a,g=c*u+l*d+f*p+h*y,S=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let E=Math.sqrt(M),C=Math.atan2(E,g*S);_=Math.sin(_*C)/E,a=Math.sin(a*C)/E}let v=a*S;if(c=c*_+u*v,l=l*_+d*v,f=f*_+p*v,h=h*_+y*v,_===1-a){let E=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=E,l*=E,f*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],h=o[r],u=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+f*h+c*d-l*u,t[e+1]=c*p+f*u+l*h-a*d,t[e+2]=l*p+f*d+a*u-c*h,t[e+3]=f*p-a*h-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),h=a(o/2),u=c(i/2),d=c(s/2),p=c(o/2);switch(r){case"XYZ":this._x=u*f*h+l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h-u*d*p;break;case"YXZ":this._x=u*f*h+l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h+u*d*p;break;case"ZXY":this._x=u*f*h-l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h-u*d*p;break;case"ZYX":this._x=u*f*h-l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h+u*d*p;break;case"YZX":this._x=u*f*h+l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h-u*d*p;break;case"XZY":this._x=u*f*h-l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],f=e[6],h=e[10],u=i+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(f-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=i*f+r*a+s*l-o*c,this._y=s*f+r*c+o*a-i*l,this._z=o*f+r*l+i*c-s*a,this._w=r*f-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}let l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-e)*f)/l,u=Math.sin(e*f)/l;return this._w=r*h+this._w*u,this._x=i*h+this._x*u,this._y=s*h+this._y*u,this._z=o*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),f=2*(a*e-o*s),h=2*(o*i-r*e);return this.x=e+c*l+r*h-a*f,this.y=i+c*f+a*l-o*h,this.z=s+c*h+o*f-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new H,If=new zn,te=class n{constructor(t,e,i,s,o,r,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=o,f[5]=c,f[6]=i,f[7]=r,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],u=i[2],d=i[5],p=i[8],y=s[0],_=s[3],g=s[6],S=s[1],M=s[4],v=s[7],E=s[2],C=s[5],A=s[8];return o[0]=r*y+a*S+c*E,o[3]=r*_+a*M+c*C,o[6]=r*g+a*v+c*A,o[1]=l*y+f*S+h*E,o[4]=l*_+f*M+h*C,o[7]=l*g+f*v+h*A,o[2]=u*y+d*S+p*E,o[5]=u*_+d*M+p*C,o[8]=u*g+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*r*f-e*a*l-i*o*f+i*a*c+s*o*l-s*r*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=f*r-a*l,u=a*c-f*o,d=l*o-r*c,p=e*h+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(s*l-f*i)*y,t[2]=(a*i-s*r)*y,t[3]=u*y,t[4]=(f*e-s*c)*y,t[5]=(s*o-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(r*e-i*o)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new te;function ah(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gu(){let n=Vo("canvas");return n.style.display="block",n}var Lf={};function Js(n){n in Lf||(Lf[n]=!0,console.warn(n))}function Wu(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}var Df=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===de&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:t,whitePoint:i,transfer:ko,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),n}var ce=mp();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=Vo("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=mi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gp=0,js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ll(s[r].image)):o.push(ll(s[r]))}else o=ll(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xp=0,hl=new H,un=class n extends ti{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ni,s=Ni,o=Tn,r=ii,a=rn,c=Yn,l=n.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=lo(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case En:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case En:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ql;un.DEFAULT_ANISOTROPY=1;var we=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,c=t.elements,l=c[0],f=c[4],h=c[8],u=c[1],d=c[5],p=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(p-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(p+_)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(d+1)/2,E=(g+1)/2,C=(f+u)/4,A=(h+y)/4,b=(p+_)/4;return M>v&&M>E?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=C/i,o=A/i):v>E?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=C/s,o=b/s):E<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(E),i=A/o,s=b/o),this.set(i,s,o,e),this}let S=Math.sqrt((_-p)*(_-p)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(_-p)/S,this.y=(h-y)/S,this.z=(u-f)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:i.depth},o=new un(s);this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new js(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends sa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Go=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Hn):Hn.fromBufferAttribute(o,r),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Ir.subVectors(this.max,Io),zs.subVectors(t.a,Io),Os.subVectors(t.b,Io),Fs.subVectors(t.c,Io),Ri.subVectors(Os,zs),Ci.subVectors(Fs,Os),os.subVectors(zs,Fs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-os.z,os.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,os.z,0,-os.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-os.y,os.x,0];return!fl(e,zs,Os,Fs,Ir)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,zs,Os,Fs,Ir))?!1:(Lr.crossVectors(Ri,Ci),e=[Lr.x,Lr.y,Lr.z],fl(e,zs,Os,Fs,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new H,new H,new H,new H,new H,new H,new H,new H],Hn=new H,Pr=new Oi,zs=new H,Os=new H,Fs=new H,Ri=new H,Ci=new H,os=new H,Io=new H,Ir=new H,Lr=new H,rs=new H;function fl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){rs.fromArray(n,o);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=t.dot(rs),l=e.dot(rs),f=i.dot(rs);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var _p=new Oi,Lo=new H,ul=new H,xi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_p.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);let e=Lo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(ul)),this.expandByPoint(Lo.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fi=new H,dl=new H,Dr=new H,Pi=new H,pl=new H,Ur=new H,ml=new H,ds=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(dl);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Dr),a=Pi.dot(this.direction),c=-Pi.dot(Dr),l=Pi.lengthSq(),f=Math.abs(1-r*r),h,u,d,p;if(f>0)if(h=r*c-a,u=r*a-c,p=o*f,h>=0)if(u>=-p)if(u<=p){let y=1/f;h*=y,u*=y,d=h*(h+r*u+2*a)+u*(r*h+u+2*c)+l}else u=o,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*c)+l;else u=-o,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*c)+l;else u<=-p?(h=Math.max(0,-(-r*o+a)),u=h>0?-o:Math.min(Math.max(-o,-c),o),d=-h*h+u*(u+2*c)+l):u<=p?(h=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(h=Math.max(0,-(r*o+a)),u=h>0?o:Math.min(Math.max(-o,-c),o),d=-h*h+u*(u+2*c)+l);else u=r>0?-o:o,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(dl).addScaledVector(Dr,u),d}intersectSphere(t,e){fi.subVectors(t.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),f>=0?(o=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(o=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,o){pl.subVectors(e,t),Ur.subVectors(i,t),ml.crossVectors(pl,Ur);let r=this.direction.dot(ml),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Pi.subVectors(this.origin,t);let c=a*this.direction.dot(Ur.crossVectors(Pi,Ur));if(c<0)return null;let l=a*this.direction.dot(pl.cross(Pi));if(l<0||c+l>r)return null;let f=-a*Pi.dot(ml);return f<0?null:this.at(f/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class n{constructor(t,e,i,s,o,r,a,c,l,f,h,u,d,p,y,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,f,h,u,d,p,y,_)}set(t,e,i,s,o,r,a,c,l,f,h,u,d,p,y,_){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let u=r*f,d=r*h,p=a*f,y=a*h;e[0]=c*f,e[4]=-c*h,e[8]=l,e[1]=d+p*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=p+d*l,e[10]=r*c}else if(t.order==="YXZ"){let u=c*f,d=c*h,p=l*f,y=l*h;e[0]=u+y*a,e[4]=p*a-d,e[8]=r*l,e[1]=r*h,e[5]=r*f,e[9]=-a,e[2]=d*a-p,e[6]=y+u*a,e[10]=r*c}else if(t.order==="ZXY"){let u=c*f,d=c*h,p=l*f,y=l*h;e[0]=u-y*a,e[4]=-r*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*f,e[9]=y-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let u=r*f,d=r*h,p=a*f,y=a*h;e[0]=c*f,e[4]=p*l-d,e[8]=u*l+y,e[1]=c*h,e[5]=y*l+u,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let u=r*c,d=r*l,p=a*c,y=a*l;e[0]=c*f,e[4]=y-u*h,e[8]=p*h+d,e[1]=h,e[5]=r*f,e[9]=-a*f,e[2]=-l*f,e[6]=d*h+p,e[10]=u-y*h}else if(t.order==="XZY"){let u=r*c,d=r*l,p=a*c,y=a*l;e[0]=c*f,e[4]=-h,e[8]=l*f,e[1]=u*h+y,e[5]=r*f,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*f,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,vp)}lookAt(t,e,i){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ii.crossVectors(i,wn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ii.crossVectors(i,wn)),Ii.normalize(),Nr.crossVectors(wn,Ii),s[0]=Ii.x,s[4]=Nr.x,s[8]=wn.x,s[1]=Ii.y,s[5]=Nr.y,s[9]=wn.y,s[2]=Ii.z,s[6]=Nr.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],u=i[9],d=i[13],p=i[2],y=i[6],_=i[10],g=i[14],S=i[3],M=i[7],v=i[11],E=i[15],C=s[0],A=s[4],b=s[8],x=s[12],m=s[1],w=s[5],T=s[9],P=s[13],L=s[2],U=s[6],F=s[10],Y=s[14],B=s[3],k=s[7],V=s[11],K=s[15];return o[0]=r*C+a*m+c*L+l*B,o[4]=r*A+a*w+c*U+l*k,o[8]=r*b+a*T+c*F+l*V,o[12]=r*x+a*P+c*Y+l*K,o[1]=f*C+h*m+u*L+d*B,o[5]=f*A+h*w+u*U+d*k,o[9]=f*b+h*T+u*F+d*V,o[13]=f*x+h*P+u*Y+d*K,o[2]=p*C+y*m+_*L+g*B,o[6]=p*A+y*w+_*U+g*k,o[10]=p*b+y*T+_*F+g*V,o[14]=p*x+y*P+_*Y+g*K,o[3]=S*C+M*m+v*L+E*B,o[7]=S*A+M*w+v*U+E*k,o[11]=S*b+M*T+v*F+E*V,o[15]=S*x+M*P+v*Y+E*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],f=t[2],h=t[6],u=t[10],d=t[14],p=t[3],y=t[7],_=t[11],g=t[15];return p*(+o*c*h-s*l*h-o*a*u+i*l*u+s*a*d-i*c*d)+y*(+e*c*d-e*l*u+o*r*u-s*r*d+s*l*f-o*c*f)+_*(+e*l*h-e*a*d-o*r*h+i*r*d+o*a*f-i*l*f)+g*(-s*a*f-e*c*h+e*a*u+s*r*h-i*r*u+i*c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=t[9],u=t[10],d=t[11],p=t[12],y=t[13],_=t[14],g=t[15],S=h*_*l-y*u*l+y*c*d-a*_*d-h*c*g+a*u*g,M=p*u*l-f*_*l-p*c*d+r*_*d+f*c*g-r*u*g,v=f*y*l-p*h*l+p*a*d-r*y*d-f*a*g+r*h*g,E=p*h*c-f*y*c-p*a*u+r*y*u+f*a*_-r*h*_,C=e*S+i*M+s*v+o*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=S*A,t[1]=(y*u*o-h*_*o-y*s*d+i*_*d+h*s*g-i*u*g)*A,t[2]=(a*_*o-y*c*o+y*s*l-i*_*l-a*s*g+i*c*g)*A,t[3]=(h*c*o-a*u*o-h*s*l+i*u*l+a*s*d-i*c*d)*A,t[4]=M*A,t[5]=(f*_*o-p*u*o+p*s*d-e*_*d-f*s*g+e*u*g)*A,t[6]=(p*c*o-r*_*o-p*s*l+e*_*l+r*s*g-e*c*g)*A,t[7]=(r*u*o-f*c*o+f*s*l-e*u*l-r*s*d+e*c*d)*A,t[8]=v*A,t[9]=(p*h*o-f*y*o-p*i*d+e*y*d+f*i*g-e*h*g)*A,t[10]=(r*y*o-p*a*o+p*i*l-e*y*l-r*i*g+e*a*g)*A,t[11]=(f*a*o-r*h*o-f*i*l+e*h*l+r*i*d-e*a*d)*A,t[12]=E*A,t[13]=(f*y*s-p*h*s+p*i*u-e*y*u-f*i*_+e*h*_)*A,t[14]=(p*a*s-r*y*s-p*i*c+e*y*c+r*i*_-e*a*_)*A,t[15]=(r*h*s-f*a*s+f*i*c-e*h*c-r*i*u+e*a*u)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,f=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*r,0,l*c-s*a,f*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,f=r+r,h=a+a,u=o*l,d=o*f,p=o*h,y=r*f,_=r*h,g=a*h,S=c*l,M=c*f,v=c*h,E=i.x,C=i.y,A=i.z;return s[0]=(1-(y+g))*E,s[1]=(d+v)*E,s[2]=(p-M)*E,s[3]=0,s[4]=(d-v)*C,s[5]=(1-(u+g))*C,s[6]=(_+S)*C,s[7]=0,s[8]=(p+M)*A,s[9]=(_-S)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=Bs.set(s[0],s[1],s[2]).length(),r=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);let l=1/o,f=1/r,h=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=f,Vn.elements[5]*=f,Vn.elements[6]*=f,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Wn,c=!1){let l=this.elements,f=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,y;if(c)p=o/(r-o),y=r*o/(r-o);else if(a===Wn)p=-(r+o)/(r-o),y=-2*r*o/(r-o);else if(a===Ho)p=-r/(r-o),y=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Wn,c=!1){let l=this.elements,f=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),p,y;if(c)p=1/(r-o),y=r/(r-o);else if(a===Wn)p=-2/(r-o),y=-(r+o)/(r-o);else if(a===Ho)p=-1/(r-o),y=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Bs=new H,Vn=new Te,yp=new H(0,0,0),vp=new H(1,1,1),Ii=new H,Nr=new H,wn=new H,Nf=new Te,zf=new zn,Xn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zf.setFromEuler(this),this.setFromQuaternion(zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Wo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bp=0,Of=new H,ks=new zn,ui=new Te,zr=new H,Do=new H,Mp=new H,wp=new zn,Ff=new H(1,0,0),Bf=new H(0,1,0),kf=new H(0,0,1),Hf={type:"added"},Sp={type:"removed"},Hs={type:"childadded",child:null},gl={type:"childremoved",child:null},Je=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new H,e=new Xn,i=new zn,s=new H(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new te}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Bf,t)}rotateZ(t){return this.rotateOnAxis(kf,t)}translateOnAxis(t,e){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Bf,t)}translateZ(t){return this.translateOnAxis(kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Do,zr,this.up):ui.lookAt(zr,Do,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(ui),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),f=r(t.images),h=r(t.shapes),u=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Je.DEFAULT_UP=new H(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new H,di=new H,xl=new H,pi=new H,Vs=new H,Gs=new H,Vf=new H,_l=new H,yl=new H,vl=new H,bl=new we,Ml=new we,wl=new we,Ui=class n{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Gn.subVectors(s,e),di.subVectors(i,e),xl.subVectors(t,e);let r=Gn.dot(Gn),a=Gn.dot(di),c=Gn.dot(xl),l=di.dot(di),f=di.dot(xl),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;let u=1/h,d=(l*c-a*f)*u,p=(r*f-a*c)*u;return o.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,pi.x),c.addScaledVector(r,pi.y),c.addScaledVector(a,pi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return bl.setScalar(0),Ml.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bl,o.x),r.addScaledVector(Ml,o.y),r.addScaledVector(wl,o.z),r}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),di.subVectors(t,e),Gn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;Vs.subVectors(s,i),Gs.subVectors(o,i),_l.subVectors(t,i);let c=Vs.dot(_l),l=Gs.dot(_l);if(c<=0&&l<=0)return e.copy(i);yl.subVectors(t,s);let f=Vs.dot(yl),h=Gs.dot(yl);if(f>=0&&h<=f)return e.copy(s);let u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return r=c/(c-f),e.copy(i).addScaledVector(Vs,r);vl.subVectors(t,o);let d=Vs.dot(vl),p=Gs.dot(vl);if(p>=0&&d<=p)return e.copy(o);let y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Gs,a);let _=f*p-d*h;if(_<=0&&h-f>=0&&d-p>=0)return Vf.subVectors(o,s),a=(h-f)/(h-f+(d-p)),e.copy(s).addScaledVector(Vf,a);let g=1/(_+y+u);return r=y*g,a=u*g,e.copy(i).addScaledVector(Vs,r).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=oh(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Sl(r,o,t+1/3),this.g=Sl(r,o,t),this.b=Sl(r,o,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ce.workingToColorSpace(en.copy(this),t),Math.round(oe(en.r*255,0,255))*65536+Math.round(oe(en.g*255,0,255))*256+Math.round(oe(en.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(en.copy(this),e);let i=en.r,s=en.g,o=en.b,r=Math.max(i,s,o),a=Math.min(i,s,o),c,l,f=(a+r)/2;if(a===r)c=0,l=0;else{let h=r-a;switch(l=f<=.5?h/(r+a):h/(2-r-a),r){case i:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-i)/h+2;break;case o:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ee){ce.workingToColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Or);let i=Fo(Li.h,Or.h,e),s=Fo(Li.s,Or.s,e),o=Fo(Li.l,Or.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Kt;Kt.NAMES=Xu;var Ep=0,_i=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=hs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ta,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sn=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new H,Fr=new $t,Tp=0,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),o=fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}};var Xo=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yo=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ne=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ap=0,Un=new Te,El=new Je,Ws=new H,Sn=new Oi,Uo=new Oi,Xe=new H,Ye=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?Yo:Xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new te().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,i){return Un.makeTranslation(t,e,i),this.applyMatrix4(Un),this}scale(t,e,i){return Un.makeScale(t,e,i),this.applyMatrix4(Un),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Sn.min,Uo.min),Sn.expandByPoint(Xe),Xe.addVectors(Sn.max,Uo.max),Sn.expandByPoint(Xe)):(Sn.expandByPoint(Uo.min),Sn.expandByPoint(Uo.max))}Sn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Xe.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Xe.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(t,l),Xe.add(Ws)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<i.count;b++)a[b]=new H,c[b]=new H;let l=new H,f=new H,h=new H,u=new $t,d=new $t,p=new $t,y=new H,_=new H;function g(b,x,m){l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),u.fromBufferAttribute(o,b),d.fromBufferAttribute(o,x),p.fromBufferAttribute(o,m),f.sub(l),h.sub(l),d.sub(u),p.sub(u);let w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(y.copy(f).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(w),_.copy(h).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(w),a[b].add(y),a[x].add(y),a[m].add(y),c[b].add(_),c[x].add(_),c[m].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let b=0,x=S.length;b<x;++b){let m=S[b],w=m.start,T=m.count;for(let P=w,L=w+T;P<L;P+=3)g(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new H,v=new H,E=new H,C=new H;function A(b){E.fromBufferAttribute(s,b),C.copy(E);let x=a[b];M.copy(x),M.sub(E.multiplyScalar(E.dot(x))).normalize(),v.crossVectors(C,x);let w=v.dot(c[b])<0?-1:1;r.setXYZW(b,M.x,M.y,M.z,w)}for(let b=0,x=S.length;b<x;++b){let m=S[b],w=m.start,T=m.count;for(let P=w,L=w+T;P<L;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new H,o=new H,r=new H,a=new H,c=new H,l=new H,f=new H,h=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),y=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),f.subVectors(r,o),h.subVectors(s,o),f.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),a.add(f),c.add(f),l.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),f.subVectors(r,o),h.subVectors(s,o),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,f=a.itemSize,h=a.normalized,u=new l.constructor(c.length*f),d=0,p=0;for(let y=0,_=c.length;y<_;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*f;for(let g=0;g<f;g++)u[p++]=l[d++]}return new ue(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let f=0,h=l.length;f<h;f++){let u=l[f],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];f.push(d.toJSON(t.data))}f.length>0&&(s[c]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(e))}let o=t.morphAttributes;for(let l in o){let f=[],h=o[l];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,f=r.length;l<f;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gf=new Te,as=new ds,Br=new xi,Wf=new H,kr=new H,Hr=new H,Vr=new H,Tl=new H,Gr=new H,Xf=new H,Wr=new H,pe=class extends Je{constructor(t=new Ye,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Gr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let f=a[c],h=o[c];f!==0&&(Tl.fromBufferAttribute(h,t),r?Gr.addScaledVector(Tl,f):Gr.addScaledVector(Tl.sub(e),f))}e.add(Gr)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(o),as.copy(t.ray).recast(t.near),!(Br.containsPoint(as.origin)===!1&&(as.intersectSphere(Br,Wf)===null||as.origin.distanceToSquared(Wf)>(t.far-t.near)**2))&&(Gf.copy(o).invert(),as.copy(t.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,y=u.length;p<y;p++){let _=u[p],g=r[_.materialIndex],S=Math.max(_.start,d.start),M=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=S,E=M;v<E;v+=3){let C=a.getX(v),A=a.getX(v+1),b=a.getX(v+2);s=Xr(this,g,t,i,l,f,h,C,A,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let _=p,g=y;_<g;_+=3){let S=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);s=Xr(this,r,t,i,l,f,h,S,M,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,y=u.length;p<y;p++){let _=u[p],g=r[_.materialIndex],S=Math.max(_.start,d.start),M=Math.min(c.count,Math.min(_.start+_.count,d.start+d.count));for(let v=S,E=M;v<E;v+=3){let C=v,A=v+1,b=v+2;s=Xr(this,g,t,i,l,f,h,C,A,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let _=p,g=y;_<g;_+=3){let S=_,M=_+1,v=_+2;s=Xr(this,r,t,i,l,f,h,S,M,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Rp(n,t,e,i,s,o,r,a){let c;if(t.side===pn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===gi,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Wr);return l<e.near||l>e.far?null:{distance:l,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,kr),n.getVertexPosition(c,Hr),n.getVertexPosition(l,Vr);let f=Rp(n,t,e,i,kr,Hr,Vr,Xf);if(f){let h=new H;Ui.getBarycoord(Xf,kr,Hr,Vr,h),s&&(f.uv=Ui.getInterpolatedAttribute(s,a,c,l,h,new $t)),o&&(f.uv1=Ui.getInterpolatedAttribute(o,a,c,l,h,new $t)),r&&(f.normal=Ui.getInterpolatedAttribute(r,a,c,l,h,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new H,materialIndex:0};Ui.getNormal(kr,Hr,Vr,u.normal),f.face=u,f.barycoord=h}return f}var Qs=class n extends Ye{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],f=[],h=[],u=0,d=0;p("z","y","x",-1,-1,i,e,t,r,o,0),p("z","y","x",1,-1,i,e,-t,r,o,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,o,4),p("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(h,2));function p(y,_,g,S,M,v,E,C,A,b,x){let m=v/A,w=E/b,T=v/2,P=E/2,L=C/2,U=A+1,F=b+1,Y=0,B=0,k=new H;for(let V=0;V<F;V++){let K=V*w-P;for(let J=0;J<U;J++){let gt=J*m-T;k[y]=gt*S,k[_]=K*M,k[g]=L,l.push(k.x,k.y,k.z),k[y]=0,k[_]=0,k[g]=C>0?1:-1,f.push(k.x,k.y,k.z),h.push(J/A),h.push(1-V/b),Y+=1}}for(let V=0;V<b;V++)for(let K=0;K<A;K++){let J=u+K+U*V,gt=u+K+U*(V+1),lt=u+(K+1)+U*(V+1),j=u+(K+1)+U*V;c.push(J,gt,j),c.push(gt,lt,j),B+=6}a.addGroup(d,B,x),d+=B,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function an(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function Cp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Yu={clone:_s,merge:an},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},qo=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new H,Yf=new $t,qf=new $t,nn=class extends qo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Yf,qf),e.subVectors(qf,Yf)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xs=-90,Ys=1,ra=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Xs,Ys,t,e);s.layers=this.layers,this.add(s);let o=new nn(Xs,Ys,t,e);o.layers=this.layers,this.add(o);let r=new nn(Xs,Ys,t,e);r.layers=this.layers,this.add(r);let a=new nn(Xs,Ys,t,e);a.layers=this.layers,this.add(a);let c=new nn(Xs,Ys,t,e);c.layers=this.layers,this.add(c);let l=new nn(Xs,Ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$o=class extends un{constructor(t=[],e=gs,i,s,o,r,a,c,l,f){super(t,e,i,s,o,r,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},aa=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $o(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qs(5,5,5),o=new An({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:yi});o.uniforms.tEquirect.value=e;let r=new pe(s,o),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=Tn),new ra(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},se=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let _=e.getJointPose(y,i),g=this._getHandJoint(l,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Ko=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zo=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Fi=class extends un{constructor(t=null,e=1,i=1,s,o,r,a,c,l=Ze,f=Ze,h,u){super(null,r,a,c,l,f,s,o,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=new H,Dp=new H,Up=new te,Nn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Al.subVectors(i,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Up.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new xi,Np=new $t(.5,.5),Yr=new H,eo=class{constructor(t=new Nn,e=new Nn,i=new Nn,s=new Nn,o=new Nn,r=new Nn){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn,i=!1){let s=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],f=o[4],h=o[5],u=o[6],d=o[7],p=o[8],y=o[9],_=o[10],g=o[11],S=o[12],M=o[13],v=o[14],E=o[15];if(s[0].setComponents(l-r,d-f,g-p,E-S).normalize(),s[1].setComponents(l+r,d+f,g+p,E+S).normalize(),s[2].setComponents(l+a,d+h,g+y,E+M).normalize(),s[3].setComponents(l-a,d-h,g-y,E-M).normalize(),i)s[4].setComponents(c,u,_,v).normalize(),s[5].setComponents(l-c,d-u,g-_,E-v).normalize();else if(s[4].setComponents(l-c,d-u,g-_,E-v).normalize(),e===Wn)s[5].setComponents(l+c,d+u,g+_,E+v).normalize();else if(e===Ho)s[5].setComponents(c,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=Np.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var no=class extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ca=new H,la=new H,$f=new Te,No=new ds,qr=new xi,Rl=new H,Kf=new H,ha=class extends Je{constructor(t=new Ye,e=new no){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)ca.fromBufferAttribute(e,s-1),la.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ca.distanceTo(la);t.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=o,t.ray.intersectsSphere(qr)===!1)return;$f.copy(s).invert(),No.copy(t.ray).applyMatrix4($f);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let y=d,_=p-1;y<_;y+=l){let g=f.getX(y),S=f.getX(y+1),M=$r(this,t,No,c,g,S,y);M&&e.push(M)}if(this.isLineLoop){let y=f.getX(p-1),_=f.getX(d),g=$r(this,t,No,c,y,_,p-1);g&&e.push(g)}}else{let d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let y=d,_=p-1;y<_;y+=l){let g=$r(this,t,No,c,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=$r(this,t,No,c,p-1,d,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function $r(n,t,e,i,s,o,r){let a=n.geometry.attributes.position;if(ca.fromBufferAttribute(a,s),la.fromBufferAttribute(a,o),e.distanceSqToSegment(ca,la,Rl,Kf)>i)return;Rl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Rl);if(!(l<t.near||l>t.far))return{distance:l,point:Kf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var Zf=new H,Jf=new H,Jo=class extends ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Zf.fromBufferAttribute(e,s),Jf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zf.distanceTo(Jf);t.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dn=class extends un{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},jo=class extends un{constructor(t,e,i=Gi,s,o,r,a=Ze,c=Ze,l,f=Ks,h=1){if(f!==Ks&&f!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,o,r,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qo=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};function zp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=qu(n,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(i&&(o=Hp(n,t,o,e)),n.length>80*e){a=1/0,c=1/0;let f=-1/0,h=-1/0;for(let u=e;u<s;u+=e){let d=n[u],p=n[u+1];d<a&&(a=d),p<c&&(c=p),d>f&&(f=d),p>h&&(h=p)}l=Math.max(f-a,h-c),l=l!==0?32767/l:0}return tr(o,r,e,a,c,l,0),r}function qu(n,t,e,i,s){let o;if(s===jp(n,t,e,i)>0)for(let r=t;r<e;r+=i)o=jf(r/i|0,n[r],n[r+1],o);else for(let r=e-i;r>=t;r-=i)o=jf(r/i|0,n[r],n[r+1],o);return o&&io(o,o.next)&&(nr(o),o=o.next),o}function ps(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(io(e,e.next)||Pe(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Yp(n,i,s,o);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(o?Fp(n,i,s,o):Op(n)){t.push(c.i,n.i,l.i),nr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=Bp(ps(n),t),tr(n,t,e,i,s,o,2)):r===2&&kp(n,t,e,i,s,o):tr(ps(n),t,e,i,s,o,1);break}}}function Op(n){let t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;let s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,f=Math.min(s,o,r),h=Math.min(a,c,l),u=Math.max(s,o,r),d=Math.max(a,c,l),p=i.next;for(;p!==t;){if(p.x>=f&&p.x<=u&&p.y>=h&&p.y<=d&&zo(s,a,o,c,r,l,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fp(n,t,e,i){let s=n.prev,o=n,r=n.next;if(Pe(s,o,r)>=0)return!1;let a=s.x,c=o.x,l=r.x,f=s.y,h=o.y,u=r.y,d=Math.min(a,c,l),p=Math.min(f,h,u),y=Math.max(a,c,l),_=Math.max(f,h,u),g=Nl(d,p,t,e,i),S=Nl(y,_,t,e,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=g&&v&&v.z<=S;){if(M.x>=d&&M.x<=y&&M.y>=p&&M.y<=_&&M!==s&&M!==r&&zo(a,f,c,h,l,u,M.x,M.y)&&Pe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=y&&v.y>=p&&v.y<=_&&v!==s&&v!==r&&zo(a,f,c,h,l,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=y&&M.y>=p&&M.y<=_&&M!==s&&M!==r&&zo(a,f,c,h,l,u,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=_&&v!==s&&v!==r&&zo(a,f,c,h,l,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Bp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!io(i,s)&&Ku(i,e,e.next,s)&&er(i,s)&&er(s,i)&&(t.push(i.i,e.i,s.i),nr(e),nr(e.next),e=n=s),e=e.next}while(e!==n);return ps(e)}function kp(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Kp(r,a)){let c=Zu(r,a);r=ps(r,r.next),c=ps(c,c.next),tr(r,t,e,i,s,o,0),tr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function Hp(n,t,e,i){let s=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=qu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push($p(l))}s.sort(Vp);for(let o=0;o<s.length;o++)e=Gp(s[o],e);return e}function Vp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Gp(n,t){let e=Wp(n,t);if(!e)return t;let i=Zu(e,n);return ps(i,i.next),ps(e,e.next)}function Wp(n,t){let e=t,i=n.x,s=n.y,o=-1/0,r;if(io(n,e))return e;do{if(io(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>o&&(o=h,r=e.x<e.next.x?e:e.next,h===i))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,f=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&$u(s<l?i:o,s,c,l,s<l?o:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);er(e,n)&&(h<f||h===f&&(e.x>r.x||e.x===r.x&&Xp(r,e)))&&(r=e,f=h)}e=e.next}while(e!==a);return r}function Xp(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function Yp(n,t,e,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qp(s)}function qp(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let r=i,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=r}o.nextZ=null,e*=2}while(t>1);return n}function Nl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $p(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $u(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function zo(n,t,e,i,s,o,r,a){return!(n===r&&t===a)&&$u(n,t,e,i,s,o,r,a)}function Kp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Zp(n,t)&&(er(n,t)&&er(t,n)&&Jp(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||io(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function io(n,t){return n.x===t.x&&n.y===t.y}function Ku(n,t,e,i){let s=Zr(Pe(n,t,e)),o=Zr(Pe(n,t,i)),r=Zr(Pe(e,i,n)),a=Zr(Pe(e,i,t));return!!(s!==o&&r!==a||s===0&&Kr(n,e,t)||o===0&&Kr(n,i,t)||r===0&&Kr(e,n,i)||a===0&&Kr(e,t,i))}function Kr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zr(n){return n>0?1:n<0?-1:0}function Zp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function er(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function Jp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Zu(n,t){let e=zl(n.i,n.x,n.y),i=zl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function jf(n,t,e,i){let s=zl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}var Ol=class{static triangulate(t,e,i=2){return zp(t,e,i)}},ir=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];Qf(t),tu(i,t);let r=t.length;e.forEach(Qf);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,tu(i,e[c]);let a=Ol.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function Qf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function tu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var gn=class n extends Ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,h=t/a,u=e/c,d=[],p=[],y=[],_=[];for(let g=0;g<f;g++){let S=g*u-r;for(let M=0;M<l;M++){let v=M*h-o;p.push(v,-S,0),y.push(0,0,1),_.push(M/a),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){let M=S+l*g,v=S+l*(g+1),E=S+1+l*(g+1),C=S+1+l*g;d.push(M,v,C),d.push(v,E,C)}this.setIndex(d),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(y,3)),this.setAttribute("uv",new Ne(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var on=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var fa=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Jr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Qp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Il:o=t,a=2*e-i;break;case Ll:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:r=t,c=2*i-e;break;case Ll:r=1,c=i+s[1]-s[0];break;default:r=t-1,c=e}let l=(i-e)*.5,f=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=o*f,this._offsetNext=r*f}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),y=p*p,_=y*p,g=-u*_+2*u*y-u*p,S=(1+u)*_+(-1.5-2*u)*y+(-.5+u)*p+1,M=(-1-d)*_+(1.5+d)*y+.5*p,v=d*_-d*y;for(let E=0;E!==a;++E)o[E]=g*r[f+E]+S*r[l+E]+M*r[c+E]+v*r[h+E];return o}},pa=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=(i-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)o[u]=r[l+u]*h+r[c+u]*f;return o}},ma=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&Qp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jr,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],f=t[a+1];if(l!==f&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let y=e[h+p];if(y!==e[u+p]||y!==e[d+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let h=a*i,u=r*i;for(let d=0;d!==i;++d)e[u+d]=e[h+d]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=na;var Bi=class extends Rn{constructor(t,e,i){super(t,e,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Bo;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="color";var xa=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};xa.prototype.ValueTypeName="number";var _a=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let f=l+a;l!==f;l+=4)zn.slerpFlat(o,0,r,l-a,r,l,c);return o}},sr=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Rn{constructor(t,e,i){super(t,e,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Bo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){a++,o===!1&&s.onStart!==void 0&&s.onStart(f,r,a),o=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ju=new va,ba=class{constructor(t){this.manager=t!==void 0?t:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},rr=class extends or{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Cl=new Te,eu=new H,nu=new H,Fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ar=class extends qo{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bl=class extends Fl{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ma=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",tm=new RegExp("["+lh+"]","g"),hh="[^"+lh+"]",em="[^"+lh.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",hh),im=/(WCOD+)?/.source.replace("WCOD",em),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),rm=new RegExp("^"+nm+im+sm+om+"$"),am=["material","materials","bones","map"],kl=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(t){let e=rm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);am.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=kl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $v=new Float32Array(1);var so=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var lr=class extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function fh(n,t,e,i){let s=cm(i);switch(e){case jl:return n*t;case th:return n*t/s.components*s.byteLength;case Oa:return n*t/s.components*s.byteLength;case eh:return n*t*2/s.components*s.byteLength;case Fa:return n*t*2/s.components*s.byteLength;case Ql:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case Ba:return n*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(n,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case cc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cm(n){switch(n){case Yn:case $l:return{byteLength:1,components:1};case oo:case Kl:case ro:return{byteLength:2,components:1};case Na:case za:return{byteLength:2,components:4};case Gi:case Ua:case On:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function bd(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function hm(n){let t=new WeakMap;function e(a,c){let l=a.array,f=a.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let f=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,f);else{h.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<h.length;d++){let p=h[u],y=h[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,h[u]=y)}h.length=u+1;for(let d=0,p=h.length;d<p;d++){let y=h[d];n.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Ux=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 color;
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
}`,Vx=`uniform float rotation;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:fm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:xm,aomap_pars_fragment:_m,batching_pars_vertex:ym,batching_vertex:vm,begin_vertex:bm,beginnormal_vertex:Mm,bsdfs:wm,iridescence_fragment:Sm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Om,displacementmap_vertex:Fm,emissivemap_fragment:Bm,emissivemap_pars_fragment:km,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:$m,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:og,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:cg,lights_physical_pars_fragment:lg,lights_fragment_begin:hg,lights_fragment_maps:fg,lights_fragment_end:ug,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:_g,map_particle_fragment:yg,map_particle_pars_fragment:vg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:wg,morphcolor_vertex:Sg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Ig,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Og,opaque_fragment:Fg,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Hg,dithering_fragment:Vg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:$g,shadowmask_pars_fragment:Kg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:jg,skinnormal_vertex:Qg,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:ox,uv_pars_fragment:rx,uv_pars_vertex:ax,uv_vertex:cx,worldpos_vertex:lx,background_vert:hx,background_frag:fx,backgroundCube_vert:ux,backgroundCube_frag:dx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distanceRGBA_vert:_x,distanceRGBA_frag:yx,equirect_vert:vx,equirect_frag:bx,linedashed_vert:Mx,linedashed_frag:wx,meshbasic_vert:Sx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Lx,meshphong_frag:Dx,meshphysical_vert:Ux,meshphysical_frag:Nx,meshtoon_vert:zx,meshtoon_frag:Ox,points_vert:Fx,points_frag:Bx,shadow_vert:kx,shadow_frag:Hx,sprite_vert:Vx,sprite_frag:Gx},Ot={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},si={basic:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([Ot.points,Ot.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([Ot.common,Ot.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([Ot.sprite,Ot.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([Ot.common,Ot.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([Ot.lights,Ot.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};si.physical={uniforms:an([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var pc={r:0,b:0,g:0},ys=new Xn,Wx=new Te;function Xx(n,t,e,i,s,o,r){let a=new Kt(0),c=o===!0?0:1,l,f,h=null,u=0,d=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function y(M){let v=!1,E=p(M);E===null?g(a,c):E&&E.isColor&&(g(E,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,v){let E=p(v);E&&(E.isCubeTexture||E.mapping===hr)?(f===void 0&&(f=new pe(new Qs(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:_s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(ys)),f.material.toneMapped=ce.getTransfer(E.colorSpace)!==de,(h!==E||u!==E.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new pe(new gn(2,2),new An({name:"BackgroundMaterial",uniforms:_s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(E.colorSpace)!==de,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,v){M.getRGB(pc,ch(n)),i.buffers.color.setClear(pc.r,pc.g,pc.b,v,r)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,g(a,c)},render:y,addToRenderList:_,dispose:S}}function Yx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),o=s,r=!1;function a(m,w,T,P,L){let U=!1,F=h(P,T,w);o!==F&&(o=F,l(o.object)),U=d(m,P,T,L),U&&p(m,P,T,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,v(m,w,T,P),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return n.createVertexArray()}function l(m){return n.bindVertexArray(m)}function f(m){return n.deleteVertexArray(m)}function h(m,w,T){let P=T.wireframe===!0,L=i[m.id];L===void 0&&(L={},i[m.id]=L);let U=L[w.id];U===void 0&&(U={},L[w.id]=U);let F=U[P];return F===void 0&&(F=u(c()),U[P]=F),F}function u(m){let w=[],T=[],P=[];for(let L=0;L<e;L++)w[L]=0,T[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:T,attributeDivisors:P,object:m,attributes:{},index:null}}function d(m,w,T,P){let L=o.attributes,U=w.attributes,F=0,Y=T.getAttributes();for(let B in Y)if(Y[B].location>=0){let V=L[B],K=U[B];if(K===void 0&&(B==="instanceMatrix"&&m.instanceMatrix&&(K=m.instanceMatrix),B==="instanceColor"&&m.instanceColor&&(K=m.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;F++}return o.attributesNum!==F||o.index!==P}function p(m,w,T,P){let L={},U=w.attributes,F=0,Y=T.getAttributes();for(let B in Y)if(Y[B].location>=0){let V=U[B];V===void 0&&(B==="instanceMatrix"&&m.instanceMatrix&&(V=m.instanceMatrix),B==="instanceColor"&&m.instanceColor&&(V=m.instanceColor));let K={};K.attribute=V,V&&V.data&&(K.data=V.data),L[B]=K,F++}o.attributes=L,o.attributesNum=F,o.index=P}function y(){let m=o.newAttributes;for(let w=0,T=m.length;w<T;w++)m[w]=0}function _(m){g(m,0)}function g(m,w){let T=o.newAttributes,P=o.enabledAttributes,L=o.attributeDivisors;T[m]=1,P[m]===0&&(n.enableVertexAttribArray(m),P[m]=1),L[m]!==w&&(n.vertexAttribDivisor(m,w),L[m]=w)}function S(){let m=o.newAttributes,w=o.enabledAttributes;for(let T=0,P=w.length;T<P;T++)w[T]!==m[T]&&(n.disableVertexAttribArray(T),w[T]=0)}function M(m,w,T,P,L,U,F){F===!0?n.vertexAttribIPointer(m,w,T,L,U):n.vertexAttribPointer(m,w,T,P,L,U)}function v(m,w,T,P){y();let L=P.attributes,U=T.getAttributes(),F=w.defaultAttributeValues;for(let Y in U){let B=U[Y];if(B.location>=0){let k=L[Y];if(k===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(k=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(k=m.instanceColor)),k!==void 0){let V=k.normalized,K=k.itemSize,J=t.get(k);if(J===void 0)continue;let gt=J.buffer,lt=J.type,j=J.bytesPerElement,Z=lt===n.INT||lt===n.UNSIGNED_INT||k.gpuType===Ua;if(k.isInterleavedBufferAttribute){let z=k.data,q=z.stride,nt=k.offset;if(z.isInstancedInterleavedBuffer){for(let Q=0;Q<B.locationSize;Q++)g(B.location+Q,z.meshPerAttribute);m.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Q=0;Q<B.locationSize;Q++)_(B.location+Q);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Q=0;Q<B.locationSize;Q++)M(B.location+Q,K/B.locationSize,lt,V,q*j,(nt+K/B.locationSize*Q)*j,Z)}else{if(k.isInstancedBufferAttribute){for(let z=0;z<B.locationSize;z++)g(B.location+z,k.meshPerAttribute);m.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let z=0;z<B.locationSize;z++)_(B.location+z);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let z=0;z<B.locationSize;z++)M(B.location+z,K/B.locationSize,lt,V,K*j,K/B.locationSize*z*j,Z)}}else if(F!==void 0){let V=F[Y];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(B.location,V);break;case 3:n.vertexAttrib3fv(B.location,V);break;case 4:n.vertexAttrib4fv(B.location,V);break;default:n.vertexAttrib1fv(B.location,V)}}}}S()}function E(){b();for(let m in i){let w=i[m];for(let T in w){let P=w[T];for(let L in P)f(P[L].object),delete P[L];delete w[T]}delete i[m]}}function C(m){if(i[m.id]===void 0)return;let w=i[m.id];for(let T in w){let P=w[T];for(let L in P)f(P[L].object),delete P[L];delete w[T]}delete i[m.id]}function A(m){for(let w in i){let T=i[w];if(T[m.id]===void 0)continue;let P=T[m.id];for(let L in P)f(P[L].object),delete P[L];delete T[m.id]}}function b(){x(),r=!0,o!==s&&(o=s,l(o.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:_,disableUnusedAttributes:S}}function qx(n,t,e){let i;function s(l){i=l}function o(l,f){n.drawArrays(i,l,f),e.update(f,i,1)}function r(l,f,h){h!==0&&(n.drawArraysInstanced(i,l,f,h),e.update(f,i,h))}function a(l,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,h);let d=0;for(let p=0;p<h;p++)d+=f[p];e.update(d,i,1)}function c(l,f,h,u){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)r(l[p],f[p],u[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,f,0,u,0,h);let p=0;for(let y=0;y<h;y++)p+=f[y]*u[y];e.update(p,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $x(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Yn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!b)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:C}}function Kx(n){let t=this,e=null,i=0,s=!1,o=!1,r=new Nn,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||s;return s=u,i=h.length,d},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||o&&!_)o?f(null):l();else{let S=o?0:i,M=S*4,v=g.clippingState||null;c.value=v,v=f(p,u,M,d);for(let E=0;E!==M;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,d,p){let y=h!==null?h.length:0,_=null;if(y!==0){if(_=c.value,p!==!0||_===null){let g=d+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<g)&&(_=new Float32Array(g));for(let M=0,v=d;M!==y;++M,v+=4)r.copy(h[M]).applyMatrix4(S,a),r.normal.toArray(_,v),_[v+3]=r.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function Zx(n){let t=new WeakMap;function e(r,a){return a===Ia?r.mapping=gs:a===La&&(r.mapping=xs),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===Ia||a===La)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new aa(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var fo=4,ju=[.125,.215,.35,.446,.526,.582],Ms=20,uh=new ar,Qu=new Kt,dh=null,ph=0,mh=0,gh=!1,bs=(1+Math.sqrt(5))/2,ho=1/bs,td=[new H(-bs,ho,0),new H(bs,ho,0),new H(-ho,0,bs),new H(ho,0,bs),new H(0,bs,-ho),new H(0,bs,ho),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Jx=new H,xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){let{size:r=256,position:a=Jx}=o;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ro,format:rn,colorSpace:us,depthBuffer:!1},s=ed(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(o)),this._blurMaterial=Qx(o,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,uh)}_sceneToCubeUV(t,e,i,s,o){let c=new nn(90,1,e,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qu),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new sn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new pe(new Qs,y),g=!1,S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,g=!0):(y.color.copy(Qu),g=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+f[M],o.y,o.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+f[M],o.z)):(c.up.set(0,l[M],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+f[M]));let E=this._cubeSize;mc(s,v*E,M>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(_,c),h.render(t,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===gs||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new pe(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;mc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,uh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=td[(s-o-1)%td.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new pe(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),y=o/p,_=isFinite(o)?1+Math.floor(f*y):Ms;_>Ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ms}`);let g=[],S=0;for(let A=0;A<Ms;++A){let b=A/y,x=Math.exp(-b*b/2);g.push(x),A===0?S+=x:A<_&&(S+=2*x)}for(let A=0;A<g.length;A++)g[A]=g[A]/S;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=g,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-i;let v=this._sizeLods[s],E=3*v*(s>M-fo?s-M+fo:0),C=4*(this._cubeSize-v);mc(e,E,C,3*v,2*v),c.setRenderTarget(e),c.render(h,uh)}};function jx(n){let t=[],e=[],i=[],s=n,o=n-fo+1+ju.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let c=1/a;r>n-fo?c=ju[r-n+fo-1]:r===0&&(c=0),i.push(c);let l=1/(a-2),f=-l,h=1+l,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,p=6,y=3,_=2,g=1,S=new Float32Array(y*p*d),M=new Float32Array(_*p*d),v=new Float32Array(g*p*d);for(let C=0;C<d;C++){let A=C%3*2/3-1,b=C>2?0:-1,x=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];S.set(x,y*p*C),M.set(u,_*p*C);let m=[C,C,C,C,C,C];v.set(m,g*p*C)}let E=new Ye;E.setAttribute("position",new ue(S,y)),E.setAttribute("uv",new ue(M,_)),E.setAttribute("faceIndex",new ue(v,g)),t.push(E),s>fo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ed(n,t,e){let i=new ei(n,t,e);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Qx(n,t,e){let i=new Float32Array(Ms),s=new H(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nd(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function id(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function t1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ia||c===La,f=c===gs||c===xs;if(l||f){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new xc(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new xc(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function e1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n1(n,t,e,i){let s={},o=new WeakMap;function r(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete s[u.id];let d=o.get(u);d&&(t.remove(d),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function c(h){let u=h.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,p=h.attributes.position,y=0;if(d!==null){let S=d.array;y=d.version;for(let M=0,v=S.length;M<v;M+=3){let E=S[M+0],C=S[M+1],A=S[M+2];u.push(E,C,C,A,A,E)}}else if(p!==void 0){let S=p.array;y=p.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let E=M+0,C=M+1,A=M+2;u.push(E,C,C,A,A,E)}}else return;let _=new(ah(u)?Yo:Xo)(u,1);_.version=y;let g=o.get(h);g&&t.remove(g),o.set(h,_)}function f(h){let u=o.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function i1(n,t,e){let i;function s(u){i=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,d){n.drawElements(i,d,o,u*r),e.update(d,i,1)}function l(u,d,p){p!==0&&(n.drawElementsInstanced(i,d,o,u*r,p),e.update(d,i,p))}function f(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,u,0,p);let _=0;for(let g=0;g<p;g++)_+=d[g];e.update(_,i,1)}function h(u,d,p,y){if(p===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<u.length;g++)l(u[g]/r,d[g],y[g]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,o,u,0,y,0,p);let g=0;for(let S=0;S<p;S++)g+=d[S]*y[S];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function s1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function o1(n,t,e){let i=new WeakMap,s=new we;function o(r,a,c){let l=r.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(a);if(u===void 0||u.count!==h){let x=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*E*4*h),A=new Go(C,v,E,h);A.type=On,A.needsUpdate=!0;let b=M*4;for(let m=0;m<h;m++){let w=_[m],T=g[m],P=S[m],L=v*E*4*m;for(let U=0;U<w.count;U++){let F=U*b;d===!0&&(s.fromBufferAttribute(w,U),C[L+F+0]=s.x,C[L+F+1]=s.y,C[L+F+2]=s.z,C[L+F+3]=0),p===!0&&(s.fromBufferAttribute(T,U),C[L+F+4]=s.x,C[L+F+5]=s.y,C[L+F+6]=s.z,C[L+F+7]=0),y===!0&&(s.fromBufferAttribute(P,U),C[L+F+8]=s.x,C[L+F+9]=s.y,C[L+F+10]=s.z,C[L+F+11]=P.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new $t(v,E)},i.set(a,u),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function r1(n,t,e,i){let s=new WeakMap;function o(c){let l=i.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function r(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}var Md=new un,sd=new jo(1,1),wd=new Go,Sd=new oa,Ed=new $o,od=[],rd=[],ad=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function po(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=od[s];if(o===void 0&&(o=new Float32Array(s),od[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function yc(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function a1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function c1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function l1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function h1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function f1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Ve(e,i)}}function u1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),Ve(e,i)}}function d1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Ve(e,i)}}function p1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function m1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function g1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function x1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function _1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function y1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function v1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function b1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function M1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=ih,o=sd):o=Md,e.setTexture2D(t||o,s)}function w1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sd,s)}function S1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ed,s)}function E1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wd,s)}function T1(n){switch(n){case 5126:return a1;case 35664:return c1;case 35665:return l1;case 35666:return h1;case 35674:return f1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return x1;case 5125:return _1;case 36294:return y1;case 36295:return v1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(n,t){n.uniform1fv(this.addr,t)}function R1(n,t){let e=po(t,this.size,2);n.uniform2fv(this.addr,e)}function C1(n,t){let e=po(t,this.size,3);n.uniform3fv(this.addr,e)}function P1(n,t){let e=po(t,this.size,4);n.uniform4fv(this.addr,e)}function I1(n,t){let e=po(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function L1(n,t){let e=po(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function D1(n,t){let e=po(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function U1(n,t){n.uniform1iv(this.addr,t)}function N1(n,t){n.uniform2iv(this.addr,t)}function z1(n,t){n.uniform3iv(this.addr,t)}function O1(n,t){n.uniform4iv(this.addr,t)}function F1(n,t){n.uniform1uiv(this.addr,t)}function B1(n,t){n.uniform2uiv(this.addr,t)}function k1(n,t){n.uniform3uiv(this.addr,t)}function H1(n,t){n.uniform4uiv(this.addr,t)}function V1(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ve(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Md,o[r])}function G1(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ve(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Sd,o[r])}function W1(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ve(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ed,o[r])}function X1(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ve(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||wd,o[r])}function Y1(n){switch(n){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return P1;case 35674:return I1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return N1;case 35668:case 35672:return z1;case 35669:case 35673:return O1;case 5125:return F1;case 36294:return B1;case 36295:return k1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=T1(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y1(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function hd(n,t){n.seq.push(t),n.map[t.id]=t}function q1(n,t,e){let i=n.name,s=i.length;for(xh.lastIndex=0;;){let o=xh.exec(i),r=xh.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){hd(e,l===void 0?new _h(a,n,t):new yh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new vh(a),hd(e,h)),e=h}}}var uo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);q1(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function fd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $1=37297,K1=0;function Z1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}var ud=new te;function J1(n){ce._getMatrix(ud,ce.workingColorSpace,n);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case ko:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Z1(n.getShaderSource(t),a)}else return o}function j1(n,t){let e=J1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q1(n,t){let e;switch(t){case Tu:e="Linear";break;case Au:e="Reinhard";break;case Ru:e="Cineon";break;case Pa:e="ACESFilmic";break;case Pu:e="AgX";break;case Iu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gc=new H;function t_(){ce.getLuminanceCoefficients(gc);let n=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function n_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function i_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function gr(n){return n!==""}function pd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function md(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(s_,r_)}var o_=new Map;function r_(n,t){let e=Qt[t];if(e===void 0){let i=o_.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bh(e)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(a_,c_)}function c_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function l_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function h_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case Eu:t="ENVMAP_BLENDING_ADD";break}return t}function d_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function p_(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=l_(e),l=h_(e),f=f_(e),h=u_(e),u=d_(e),d=e_(e),p=n_(o),y=s.createProgram(),_,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(_=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==vi?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,j1("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),r=bh(r),r=pd(r,e),r=md(r,e),a=bh(a),a=pd(a,e),a=md(a,e),r=gd(r),a=gd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=S+_+r,v=S+g+a,E=fd(s,s.VERTEX_SHADER,M),C=fd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(w){if(n.debug.checkShaderErrors){let T=s.getProgramInfoLog(y)||"",P=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(C)||"",U=T.trim(),F=P.trim(),Y=L.trim(),B=!0,k=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,C);else{let V=dd(s,E,"vertex"),K=dd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+V+`
`+K)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||Y==="")&&(k=!1);k&&(w.diagnostics={runnable:B,programLog:U,vertexShader:{log:F,prefix:_},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(E),s.deleteShader(C),b=new uo(s,y),x=i_(s,y)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=s.getProgramParameter(y,$1)),m},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=C,this}var m_=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wh(t),e.set(t,i)),i}},wh=class{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}};function g_(n,t,e,i,s,o,r){let a=new Wo,c=new Mh,l=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,m,w,T,P){let L=T.fog,U=P.geometry,F=x.isMeshStandardMaterial?T.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||F),B=Y&&Y.mapping===hr?Y.image.height:null,k=p[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=V!==void 0?V.length:0,J=0;U.morphAttributes.position!==void 0&&(J=1),U.morphAttributes.normal!==void 0&&(J=2),U.morphAttributes.color!==void 0&&(J=3);let gt,lt,j,Z;if(k){let Ht=si[k];gt=Ht.vertexShader,lt=Ht.fragmentShader}else gt=x.vertexShader,lt=x.fragmentShader,c.update(x),j=c.getVertexShaderID(x),Z=c.getFragmentShaderID(x);let z=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),nt=P.isInstancedMesh===!0,Q=P.isBatchedMesh===!0,N=!!x.map,$=!!x.matcap,I=!!Y,X=!!x.aoMap,G=!!x.lightMap,it=!!x.bumpMap,rt=!!x.normalMap,ot=!!x.displacementMap,ut=!!x.emissiveMap,ct=!!x.metalnessMap,Mt=!!x.roughnessMap,ft=x.anisotropy>0,D=x.clearcoat>0,R=x.dispersion>0,tt=x.iridescence>0,ht=x.sheen>0,pt=x.transmission>0,st=ft&&!!x.anisotropyMap,Tt=D&&!!x.clearcoatMap,et=D&&!!x.clearcoatNormalMap,bt=D&&!!x.clearcoatRoughnessMap,vt=tt&&!!x.iridescenceMap,_t=tt&&!!x.iridescenceThicknessMap,yt=ht&&!!x.sheenColorMap,It=ht&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,at=!!x.specularColorMap,Lt=!!x.specularIntensityMap,W=pt&&!!x.transmissionMap,wt=pt&&!!x.thicknessMap,Pt=!!x.gradientMap,zt=!!x.alphaMap,Ct=x.alphaTest>0,At=!!x.alphaHash,Bt=!!x.extensions,Gt=vi;x.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Wt={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:gt,fragmentShader:lt,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Q,batchingColor:Q&&P._colorsTexture!==null,instancing:nt,instancingColor:nt&&P.instanceColor!==null,instancingMorph:nt&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:us,alphaToCoverage:!!x.alphaToCoverage,map:N,matcap:$,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:G,bumpMap:it,normalMap:rt,displacementMap:u&&ot,emissiveMap:ut,normalMapObjectSpace:rt&&x.normalMapType===Nu,normalMapTangentSpace:rt&&x.normalMapType===nh,metalnessMap:ct,roughnessMap:Mt,anisotropy:ft,anisotropyMap:st,clearcoat:D,clearcoatMap:Tt,clearcoatNormalMap:et,clearcoatRoughnessMap:bt,dispersion:R,iridescence:tt,iridescenceMap:vt,iridescenceThicknessMap:_t,sheen:ht,sheenColorMap:yt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:at,specularIntensityMap:Lt,transmission:pt,transmissionMap:W,thicknessMap:wt,gradientMap:Pt,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:zt,alphaTest:Ct,alphaHash:At,combine:x.combine,mapUv:N&&y(x.map.channel),aoMapUv:X&&y(x.aoMap.channel),lightMapUv:G&&y(x.lightMap.channel),bumpMapUv:it&&y(x.bumpMap.channel),normalMapUv:rt&&y(x.normalMap.channel),displacementMapUv:ot&&y(x.displacementMap.channel),emissiveMapUv:ut&&y(x.emissiveMap.channel),metalnessMapUv:ct&&y(x.metalnessMap.channel),roughnessMapUv:Mt&&y(x.roughnessMap.channel),anisotropyMapUv:st&&y(x.anisotropyMap.channel),clearcoatMapUv:Tt&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(x.sheenRoughnessMap.channel),specularMapUv:Rt&&y(x.specularMap.channel),specularColorMapUv:at&&y(x.specularColorMap.channel),specularIntensityMapUv:Lt&&y(x.specularIntensityMap.channel),transmissionMapUv:W&&y(x.transmissionMap.channel),thicknessMapUv:wt&&y(x.thicknessMap.channel),alphaMapUv:zt&&y(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(rt||ft),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(N||zt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:q,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:N&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:ut&&x.emissiveMap.isVideoTexture===!0&&ce.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Bt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&x.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function g(x){let m=[];if(x.shaderID?m.push(x.shaderID):(m.push(x.customVertexShaderID),m.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)m.push(w),m.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(S(m,x),M(m,x),m.push(n.outputColorSpace)),m.push(x.customProgramCacheKey),m.join()}function S(x,m){x.push(m.precision),x.push(m.outputColorSpace),x.push(m.envMapMode),x.push(m.envMapCubeUVHeight),x.push(m.mapUv),x.push(m.alphaMapUv),x.push(m.lightMapUv),x.push(m.aoMapUv),x.push(m.bumpMapUv),x.push(m.normalMapUv),x.push(m.displacementMapUv),x.push(m.emissiveMapUv),x.push(m.metalnessMapUv),x.push(m.roughnessMapUv),x.push(m.anisotropyMapUv),x.push(m.clearcoatMapUv),x.push(m.clearcoatNormalMapUv),x.push(m.clearcoatRoughnessMapUv),x.push(m.iridescenceMapUv),x.push(m.iridescenceThicknessMapUv),x.push(m.sheenColorMapUv),x.push(m.sheenRoughnessMapUv),x.push(m.specularMapUv),x.push(m.specularColorMapUv),x.push(m.specularIntensityMapUv),x.push(m.transmissionMapUv),x.push(m.thicknessMapUv),x.push(m.combine),x.push(m.fogExp2),x.push(m.sizeAttenuation),x.push(m.morphTargetsCount),x.push(m.morphAttributeCount),x.push(m.numDirLights),x.push(m.numPointLights),x.push(m.numSpotLights),x.push(m.numSpotLightMaps),x.push(m.numHemiLights),x.push(m.numRectAreaLights),x.push(m.numDirLightShadows),x.push(m.numPointLightShadows),x.push(m.numSpotLightShadows),x.push(m.numSpotLightShadowsWithMaps),x.push(m.numLightProbes),x.push(m.shadowMapType),x.push(m.toneMapping),x.push(m.numClippingPlanes),x.push(m.numClipIntersection),x.push(m.depthPacking)}function M(x,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),m.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reversedDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let m=p[x.type],w;if(m){let T=si[m];w=Yu.clone(T.uniforms)}else w=x.uniforms;return w}function E(x,m){let w;for(let T=0,P=f.length;T<P;T++){let L=f[T];if(L.cacheKey===m){w=L,++w.usedTimes;break}}return w===void 0&&(w=new p_(n,m,x,o),f.push(w)),w}function C(x){if(--x.usedTimes===0){let m=f.indexOf(x);f[m]=f[f.length-1],f.pop(),x.destroy()}}function A(x){c.remove(x)}function b(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:v,acquireProgram:E,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:b}}function x_(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function __(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yd(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(h,u,d,p,y,_){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:u,material:d,groupOrder:p,renderOrder:h.renderOrder,z:y,group:_},n[t]=g):(g.id=h.id,g.object=h,g.geometry=u,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=y,g.group=_),t++,g}function a(h,u,d,p,y,_){let g=r(h,u,d,p,y,_);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):e.push(g)}function c(h,u,d,p,y,_){let g=r(h,u,d,p,y,_);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function l(h,u){e.length>1&&e.sort(h||__),i.length>1&&i.sort(u||_d),s.length>1&&s.sort(u||_d)}function f(){for(let h=t,u=n.length;h<u;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:f,sort:l}}function y_(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new yd,n.set(i,[r])):s>=o.length?(r=new yd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function v_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Kt};break;case"SpotLight":e={position:new H,direction:new H,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function b_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var M_=0;function w_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function S_(n){let t=new v_,e=b_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);let s=new H,o=new Te,r=new Te;function a(l){let f=0,h=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,p=0,y=0,_=0,g=0,S=0,M=0,v=0,E=0,C=0,A=0;l.sort(w_);for(let x=0,m=l.length;x<m;x++){let w=l[x],T=w.color,P=w.intensity,L=w.distance,U=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=T.r*P,h+=T.g*P,u+=T.b*P;else if(w.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(w.sh.coefficients[F],P);A++}else if(w.isDirectionalLight){let F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,B=e.get(w);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=w.shadow.matrix,S++}i.directional[d]=F,d++}else if(w.isSpotLight){let F=t.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(T).multiplyScalar(P),F.distance=L,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,i.spot[y]=F;let Y=w.shadow;if(w.map&&(i.spotLightMap[E]=w.map,E++,Y.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[y]=Y.matrix,w.castShadow){let B=e.get(w);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=U,v++}y++}else if(w.isRectAreaLight){let F=t.get(w);F.color.copy(T).multiplyScalar(P),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),i.rectArea[_]=F,_++}else if(w.isPointLight){let F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let Y=w.shadow,B=e.get(w);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=w.shadow.matrix,M++}i.point[p]=F,p++}else if(w.isHemisphereLight){let F=t.get(w);F.skyColor.copy(w.color).multiplyScalar(P),F.groundColor.copy(w.groundColor).multiplyScalar(P),i.hemi[g]=F,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let b=i.hash;(b.directionalLength!==d||b.pointLength!==p||b.spotLength!==y||b.rectAreaLength!==_||b.hemiLength!==g||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==E||b.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=_,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=d,b.pointLength=p,b.spotLength=y,b.rectAreaLength=_,b.hemiLength=g,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=E,b.numLightProbes=A,i.version=M_++)}function c(l,f){let h=0,u=0,d=0,p=0,y=0,_=f.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){let M=l[g];if(M.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),h++}else if(M.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),d++}else if(M.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),r.identity(),o.copy(M.matrixWorld),o.premultiply(_),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(M.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),u++}else if(M.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(_),y++}}}return{setup:a,setupView:c,state:i}}function vd(n){let t=new S_(n),e=[],i=[];function s(f){l.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function r(f){i.push(f)}function a(){t.setup(e)}function c(f){t.setupView(e,f)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function E_(n){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new vd(n),t.set(s,[a])):o>=r.length?(a=new vd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(n,t,e){let i=new eo,s=new $t,o=new $t,r=new we,a=new fa({depthPacking:Uu}),c=new ua,l={},f=e.maxTextureSize,h={[gi]:pn,[pn]:gi,[je]:je},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ye;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pe(p,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let g=this.type;this.render=function(C,A,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;let x=n.getRenderTarget(),m=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),T=n.state;T.setBlending(yi),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let P=g!==ni&&this.type===ni,L=g===ni&&this.type!==ni;for(let U=0,F=C.length;U<F;U++){let Y=C[U],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let k=B.getFrameExtents();if(s.multiply(k),o.copy(B.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/k.x),s.x=o.x*k.x,B.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/k.y),s.y=o.y*k.y,B.mapSize.y=o.y)),B.map===null||P===!0||L===!0){let K=this.type!==ni?{minFilter:Ze,magFilter:Ze}:{};B.map!==null&&B.map.dispose(),B.map=new ei(s.x,s.y,K),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let V=B.getViewportCount();for(let K=0;K<V;K++){let J=B.getViewport(K);r.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),T.viewport(r),B.updateMatrices(Y,K),i=B.getFrustum(),v(A,b,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===ni&&S(B,b),B.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(x,m,w)};function S(C,A){let b=t.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ei(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,b,u,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,b,d,y,null)}function M(C,A,b,x){let m=null,w=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)m=w;else if(m=b.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let T=m.uuid,P=A.uuid,L=l[T];L===void 0&&(L={},l[T]=L);let U=L[P];U===void 0&&(U=m.clone(),L[P]=U,A.addEventListener("dispose",E)),m=U}if(m.visible=A.visible,m.wireframe=A.wireframe,x===ni?m.side=A.shadowSide!==null?A.shadowSide:A.side:m.side=A.shadowSide!==null?A.shadowSide:h[A.side],m.alphaMap=A.alphaMap,m.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,m.map=A.map,m.clipShadows=A.clipShadows,m.clippingPlanes=A.clippingPlanes,m.clipIntersection=A.clipIntersection,m.displacementMap=A.displacementMap,m.displacementScale=A.displacementScale,m.displacementBias=A.displacementBias,m.wireframeLinewidth=A.wireframeLinewidth,m.linewidth=A.linewidth,b.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let T=n.properties.get(m);T.light=b}return m}function v(C,A,b,x,m){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&m===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let P=t.update(C),L=C.material;if(Array.isArray(L)){let U=P.groups;for(let F=0,Y=U.length;F<Y;F++){let B=U[F],k=L[B.materialIndex];if(k&&k.visible){let V=M(C,k,x,m);C.onBeforeShadow(n,C,A,b,P,V,B),n.renderBufferDirect(b,null,P,V,C,B),C.onAfterShadow(n,C,A,b,P,V,B)}}}else if(L.visible){let U=M(C,L,x,m);C.onBeforeShadow(n,C,A,b,P,U,null),n.renderBufferDirect(b,null,P,U,C,null),C.onAfterShadow(n,C,A,b,P,U,null)}}let T=C.children;for(let P=0,L=T.length;P<L;P++)v(T[P],A,b,x,m)}function E(C){C.target.removeEventListener("dispose",E);for(let b in l){let x=l[b],m=C.target.uuid;m in x&&(x[m].dispose(),delete x[m])}}}var C_={[wa]:Sa,[Ea]:Ra,[Ta]:Ca,[fs]:Aa,[Sa]:wa,[Ra]:Ea,[Ca]:Ta,[Aa]:fs};function P_(n,t){function e(){let W=!1,wt=new we,Pt=null,zt=new we(0,0,0,0);return{setMask:function(Ct){Pt!==Ct&&!W&&(n.colorMask(Ct,Ct,Ct,Ct),Pt=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,At,Bt,Gt,Wt){Wt===!0&&(Ct*=Gt,At*=Gt,Bt*=Gt),wt.set(Ct,At,Bt,Gt),zt.equals(wt)===!1&&(n.clearColor(Ct,At,Bt,Gt),zt.copy(wt))},reset:function(){W=!1,Pt=null,zt.set(-1,0,0,0)}}}function i(){let W=!1,wt=!1,Pt=null,zt=null,Ct=null;return{setReversed:function(At){if(wt!==At){let Bt=t.get("EXT_clip_control");At?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),wt=At;let Gt=Ct;Ct=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(At){At?z(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(At){Pt!==At&&!W&&(n.depthMask(At),Pt=At)},setFunc:function(At){if(wt&&(At=C_[At]),zt!==At){switch(At){case wa:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case Ea:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case Ra:n.depthFunc(n.GREATER);break;case Ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}zt=At}},setLocked:function(At){W=At},setClear:function(At){Ct!==At&&(wt&&(At=1-At),n.clearDepth(At),Ct=At)},reset:function(){W=!1,Pt=null,zt=null,Ct=null,wt=!1}}}function s(){let W=!1,wt=null,Pt=null,zt=null,Ct=null,At=null,Bt=null,Gt=null,Wt=null;return{setTest:function(Ht){W||(Ht?z(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(Ht){wt!==Ht&&!W&&(n.stencilMask(Ht),wt=Ht)},setFunc:function(Ht,vn,Oe){(Pt!==Ht||zt!==vn||Ct!==Oe)&&(n.stencilFunc(Ht,vn,Oe),Pt=Ht,zt=vn,Ct=Oe)},setOp:function(Ht,vn,Oe){(At!==Ht||Bt!==vn||Gt!==Oe)&&(n.stencilOp(Ht,vn,Oe),At=Ht,Bt=vn,Gt=Oe)},setLocked:function(Ht){W=Ht},setClear:function(Ht){Wt!==Ht&&(n.clearStencil(Ht),Wt=Ht)},reset:function(){W=!1,wt=null,Pt=null,zt=null,Ct=null,At=null,Bt=null,Gt=null,Wt=null}}}let o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap,f={},h={},u=new WeakMap,d=[],p=null,y=!1,_=null,g=null,S=null,M=null,v=null,E=null,C=null,A=new Kt(0,0,0),b=0,x=!1,m=null,w=null,T=null,P=null,L=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=Y>=2);let k=null,V={},K=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),gt=new we().fromArray(K),lt=new we().fromArray(J);function j(W,wt,Pt,zt){let Ct=new Uint8Array(4),At=n.createTexture();n.bindTexture(W,At),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<Pt;Bt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,zt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(wt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return At}let Z={};Z[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),z(n.DEPTH_TEST),r.setFunc(fs),it(!1),rt(Hl),z(n.CULL_FACE),X(yi);function z(W){f[W]!==!0&&(n.enable(W),f[W]=!0)}function q(W){f[W]!==!1&&(n.disable(W),f[W]=!1)}function nt(W,wt){return h[W]!==wt?(n.bindFramebuffer(W,wt),h[W]=wt,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=wt),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function Q(W,wt){let Pt=d,zt=!1;if(W){Pt=u.get(wt),Pt===void 0&&(Pt=[],u.set(wt,Pt));let Ct=W.textures;if(Pt.length!==Ct.length||Pt[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Bt=Ct.length;At<Bt;At++)Pt[At]=n.COLOR_ATTACHMENT0+At;Pt.length=Ct.length,zt=!0}}else Pt[0]!==n.BACK&&(Pt[0]=n.BACK,zt=!0);zt&&n.drawBuffers(Pt)}function N(W){return p!==W?(n.useProgram(W),p=W,!0):!1}let $={[zi]:n.FUNC_ADD,[au]:n.FUNC_SUBTRACT,[cu]:n.FUNC_REVERSE_SUBTRACT};$[lu]=n.MIN,$[hu]=n.MAX;let I={[fu]:n.ZERO,[uu]:n.ONE,[du]:n.SRC_COLOR,[Qr]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[xu]:n.DST_COLOR,[mu]:n.DST_ALPHA,[pu]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[_u]:n.ONE_MINUS_DST_COLOR,[gu]:n.ONE_MINUS_DST_ALPHA,[vu]:n.CONSTANT_COLOR,[bu]:n.ONE_MINUS_CONSTANT_COLOR,[Mu]:n.CONSTANT_ALPHA,[wu]:n.ONE_MINUS_CONSTANT_ALPHA};function X(W,wt,Pt,zt,Ct,At,Bt,Gt,Wt,Ht){if(W===yi){y===!0&&(q(n.BLEND),y=!1);return}if(y===!1&&(z(n.BLEND),y=!0),W!==ru){if(W!==_||Ht!==x){if((g!==zi||v!==zi)&&(n.blendEquation(n.FUNC_ADD),g=zi,v=zi),Ht)switch(W){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,M=null,E=null,C=null,A.set(0,0,0),b=0,_=W,x=Ht}return}Ct=Ct||wt,At=At||Pt,Bt=Bt||zt,(wt!==g||Ct!==v)&&(n.blendEquationSeparate($[wt],$[Ct]),g=wt,v=Ct),(Pt!==S||zt!==M||At!==E||Bt!==C)&&(n.blendFuncSeparate(I[Pt],I[zt],I[At],I[Bt]),S=Pt,M=zt,E=At,C=Bt),(Gt.equals(A)===!1||Wt!==b)&&(n.blendColor(Gt.r,Gt.g,Gt.b,Wt),A.copy(Gt),b=Wt),_=W,x=!1}function G(W,wt){W.side===je?q(n.CULL_FACE):z(n.CULL_FACE);let Pt=W.side===pn;wt&&(Pt=!Pt),it(Pt),W.blending===hs&&W.transparent===!1?X(yi):X(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),o.setMask(W.colorWrite);let zt=W.stencilWrite;a.setTest(zt),zt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){m!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),m=W)}function rt(W){W!==iu?(z(n.CULL_FACE),W!==w&&(W===Hl?n.cullFace(n.BACK):W===su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),w=W}function ot(W){W!==T&&(F&&n.lineWidth(W),T=W)}function ut(W,wt,Pt){W?(z(n.POLYGON_OFFSET_FILL),(P!==wt||L!==Pt)&&(n.polygonOffset(wt,Pt),P=wt,L=Pt)):q(n.POLYGON_OFFSET_FILL)}function ct(W){W?z(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function Mt(W){W===void 0&&(W=n.TEXTURE0+U-1),k!==W&&(n.activeTexture(W),k=W)}function ft(W,wt,Pt){Pt===void 0&&(k===null?Pt=n.TEXTURE0+U-1:Pt=k);let zt=V[Pt];zt===void 0&&(zt={type:void 0,texture:void 0},V[Pt]=zt),(zt.type!==W||zt.texture!==wt)&&(k!==Pt&&(n.activeTexture(Pt),k=Pt),n.bindTexture(W,wt||Z[W]),zt.type=W,zt.texture=wt)}function D(){let W=V[k];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function R(){try{n.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{n.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{n.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{n.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{n.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{n.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{n.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{n.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{n.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(W){gt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function It(W){lt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),lt.copy(W))}function Rt(W,wt){let Pt=l.get(wt);Pt===void 0&&(Pt=new WeakMap,l.set(wt,Pt));let zt=Pt.get(W);zt===void 0&&(zt=n.getUniformBlockIndex(wt,W.name),Pt.set(W,zt))}function at(W,wt){let zt=l.get(wt).get(W);c.get(wt)!==zt&&(n.uniformBlockBinding(wt,zt,W.__bindingPointIndex),c.set(wt,zt))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},k=null,V={},h={},u=new WeakMap,d=[],p=null,y=!1,_=null,g=null,S=null,M=null,v=null,E=null,C=null,A=new Kt(0,0,0),b=0,x=!1,m=null,w=null,T=null,P=null,L=null,gt.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:z,disable:q,bindFramebuffer:nt,drawBuffers:Q,useProgram:N,setBlending:X,setMaterial:G,setFlipSided:it,setCullFace:rt,setLineWidth:ot,setPolygonOffset:ut,setScissorTest:ct,activeTexture:Mt,bindTexture:ft,unbindTexture:D,compressedTexImage2D:R,compressedTexImage3D:tt,texImage2D:vt,texImage3D:_t,updateUBOMapping:Rt,uniformBlockBinding:at,texStorage2D:et,texStorage3D:bt,texSubImage2D:ht,texSubImage3D:pt,compressedTexSubImage2D:st,compressedTexSubImage3D:Tt,scissor:yt,viewport:It,reset:Lt}}function I_(n,t,e,i,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,f=new WeakMap,h,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,R){return d?new OffscreenCanvas(D,R):Vo("canvas")}function y(D,R,tt){let ht=1,pt=ft(D);if((pt.width>tt||pt.height>tt)&&(ht=tt/Math.max(pt.width,pt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let st=Math.floor(ht*pt.width),Tt=Math.floor(ht*pt.height);h===void 0&&(h=p(st,Tt));let et=R?p(st,Tt):h;return et.width=st,et.height=Tt,et.getContext("2d").drawImage(D,0,0,st,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+st+"x"+Tt+")."),et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),D;return D}function _(D){return D.generateMipmaps}function g(D){n.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(D,R,tt,ht,pt=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let st=R;if(R===n.RED&&(tt===n.FLOAT&&(st=n.R32F),tt===n.HALF_FLOAT&&(st=n.R16F),tt===n.UNSIGNED_BYTE&&(st=n.R8)),R===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(st=n.R8UI),tt===n.UNSIGNED_SHORT&&(st=n.R16UI),tt===n.UNSIGNED_INT&&(st=n.R32UI),tt===n.BYTE&&(st=n.R8I),tt===n.SHORT&&(st=n.R16I),tt===n.INT&&(st=n.R32I)),R===n.RG&&(tt===n.FLOAT&&(st=n.RG32F),tt===n.HALF_FLOAT&&(st=n.RG16F),tt===n.UNSIGNED_BYTE&&(st=n.RG8)),R===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(st=n.RG8UI),tt===n.UNSIGNED_SHORT&&(st=n.RG16UI),tt===n.UNSIGNED_INT&&(st=n.RG32UI),tt===n.BYTE&&(st=n.RG8I),tt===n.SHORT&&(st=n.RG16I),tt===n.INT&&(st=n.RG32I)),R===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(st=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(st=n.RGB16UI),tt===n.UNSIGNED_INT&&(st=n.RGB32UI),tt===n.BYTE&&(st=n.RGB8I),tt===n.SHORT&&(st=n.RGB16I),tt===n.INT&&(st=n.RGB32I)),R===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),tt===n.UNSIGNED_INT&&(st=n.RGBA32UI),tt===n.BYTE&&(st=n.RGBA8I),tt===n.SHORT&&(st=n.RGBA16I),tt===n.INT&&(st=n.RGBA32I)),R===n.RGB&&(tt===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),tt===n.UNSIGNED_INT_10F_11F_11F_REV&&(st=n.R11F_G11F_B10F)),R===n.RGBA){let Tt=pt?ko:ce.getTransfer(ht);tt===n.FLOAT&&(st=n.RGBA32F),tt===n.HALF_FLOAT&&(st=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(st=Tt===de?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(D,R){let tt;return D?R===null||R===Gi||R===ao?tt=n.DEPTH24_STENCIL8:R===On?tt=n.DEPTH32F_STENCIL8:R===oo&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Gi||R===ao?tt=n.DEPTH_COMPONENT24:R===On?tt=n.DEPTH_COMPONENT32F:R===oo&&(tt=n.DEPTH_COMPONENT16),tt}function E(D,R){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ze&&D.minFilter!==Tn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function C(D){let R=D.target;R.removeEventListener("dispose",C),b(R),R.isVideoTexture&&f.delete(R)}function A(D){let R=D.target;R.removeEventListener("dispose",A),m(R)}function b(D){let R=i.get(D);if(R.__webglInit===void 0)return;let tt=D.source,ht=u.get(tt);if(ht){let pt=ht[R.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&x(D),Object.keys(ht).length===0&&u.delete(tt)}i.remove(D)}function x(D){let R=i.get(D);n.deleteTexture(R.__webglTexture);let tt=D.source,ht=u.get(tt);delete ht[R.__cacheKey],r.memory.textures--}function m(D){let R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(R.__webglFramebuffer[ht]))for(let pt=0;pt<R.__webglFramebuffer[ht].length;pt++)n.deleteFramebuffer(R.__webglFramebuffer[ht][pt]);else n.deleteFramebuffer(R.__webglFramebuffer[ht]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ht])}else{if(Array.isArray(R.__webglFramebuffer))for(let ht=0;ht<R.__webglFramebuffer.length;ht++)n.deleteFramebuffer(R.__webglFramebuffer[ht]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ht=0;ht<R.__webglColorRenderbuffer.length;ht++)R.__webglColorRenderbuffer[ht]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ht]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let tt=D.textures;for(let ht=0,pt=tt.length;ht<pt;ht++){let st=i.get(tt[ht]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(tt[ht])}i.remove(D)}let w=0;function T(){w=0}function P(){let D=w;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),w+=1,D}function L(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function U(D,R){let tt=i.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&tt.__version!==D.version){let ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(tt,D,R);return}}else D.isExternalTexture&&(tt.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+R)}function F(D,R){let tt=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Z(tt,D,R);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+R)}function Y(D,R){let tt=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Z(tt,D,R);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+R)}function B(D,R){let tt=i.get(D);if(D.version>0&&tt.__version!==D.version){z(tt,D,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+R)}let k={[En]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},V={[Ze]:n.NEAREST,[Lu]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},K={[zu]:n.NEVER,[Vu]:n.ALWAYS,[Ou]:n.LESS,[ih]:n.LEQUAL,[Fu]:n.EQUAL,[Hu]:n.GEQUAL,[Bu]:n.GREATER,[ku]:n.NOTEQUAL};function J(D,R){if(R.type===On&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Tn||R.magFilter===Da||R.magFilter===fr||R.magFilter===ii||R.minFilter===Tn||R.minFilter===Da||R.minFilter===fr||R.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,k[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,k[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,k[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,V[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,V[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ze||R.minFilter!==fr&&R.minFilter!==ii||R.type===On&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function gt(D,R){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",C));let ht=R.source,pt=u.get(ht);pt===void 0&&(pt={},u.set(ht,pt));let st=L(R);if(st!==D.__cacheKey){pt[st]===void 0&&(pt[st]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,tt=!0),pt[st].usedTimes++;let Tt=pt[D.__cacheKey];Tt!==void 0&&(pt[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(R)),D.__cacheKey=st,D.__webglTexture=pt[st].texture}return tt}function lt(D,R,tt){return Math.floor(Math.floor(D/tt)/R)}function j(D,R,tt,ht){let st=D.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,tt,ht,R.data);else{st.sort((_t,yt)=>_t.start-yt.start);let Tt=0;for(let _t=1;_t<st.length;_t++){let yt=st[Tt],It=st[_t],Rt=yt.start+yt.count,at=lt(It.start,R.width,4),Lt=lt(yt.start,R.width,4);It.start<=Rt+1&&at===Lt&&lt(It.start+It.count-1,R.width,4)===at?yt.count=Math.max(yt.count,It.start+It.count-yt.start):(++Tt,st[Tt]=It)}st.length=Tt+1;let et=n.getParameter(n.UNPACK_ROW_LENGTH),bt=n.getParameter(n.UNPACK_SKIP_PIXELS),vt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let _t=0,yt=st.length;_t<yt;_t++){let It=st[_t],Rt=Math.floor(It.start/4),at=Math.ceil(It.count/4),Lt=Rt%R.width,W=Math.floor(Rt/R.width),wt=at,Pt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,Lt,W,wt,Pt,tt,ht,R.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,et),n.pixelStorei(n.UNPACK_SKIP_PIXELS,bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function Z(D,R,tt){let ht=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=n.TEXTURE_3D);let pt=gt(D,R),st=R.source;e.bindTexture(ht,D.__webglTexture,n.TEXTURE0+tt);let Tt=i.get(st);if(st.version!==Tt.__version||pt===!0){e.activeTexture(n.TEXTURE0+tt);let et=ce.getPrimaries(ce.workingColorSpace),bt=R.colorSpace===bi?null:ce.getPrimaries(R.colorSpace),vt=R.colorSpace===bi||et===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let _t=y(R.image,!1,s.maxTextureSize);_t=Mt(R,_t);let yt=o.convert(R.format,R.colorSpace),It=o.convert(R.type),Rt=M(R.internalFormat,yt,It,R.colorSpace,R.isVideoTexture);J(ht,R);let at,Lt=R.mipmaps,W=R.isVideoTexture!==!0,wt=Tt.__version===void 0||pt===!0,Pt=st.dataReady,zt=E(R,_t);if(R.isDepthTexture)Rt=v(R.format===co,R.type),wt&&(W?e.texStorage2D(n.TEXTURE_2D,1,Rt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Rt,_t.width,_t.height,0,yt,It,null));else if(R.isDataTexture)if(Lt.length>0){W&&wt&&e.texStorage2D(n.TEXTURE_2D,zt,Rt,Lt[0].width,Lt[0].height);for(let Ct=0,At=Lt.length;Ct<At;Ct++)at=Lt[Ct],W?Pt&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,at.width,at.height,yt,It,at.data):e.texImage2D(n.TEXTURE_2D,Ct,Rt,at.width,at.height,0,yt,It,at.data);R.generateMipmaps=!1}else W?(wt&&e.texStorage2D(n.TEXTURE_2D,zt,Rt,_t.width,_t.height),Pt&&j(R,_t,yt,It)):e.texImage2D(n.TEXTURE_2D,0,Rt,_t.width,_t.height,0,yt,It,_t.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){W&&wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Rt,Lt[0].width,Lt[0].height,_t.depth);for(let Ct=0,At=Lt.length;Ct<At;Ct++)if(at=Lt[Ct],R.format!==rn)if(yt!==null)if(W){if(Pt)if(R.layerUpdates.size>0){let Bt=fh(at.width,at.height,R.format,R.type);for(let Gt of R.layerUpdates){let Wt=at.data.subarray(Gt*Bt/at.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,Gt,at.width,at.height,1,yt,Wt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,0,at.width,at.height,_t.depth,yt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ct,Rt,at.width,at.height,_t.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Pt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ct,0,0,0,at.width,at.height,_t.depth,yt,It,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ct,Rt,at.width,at.height,_t.depth,0,yt,It,at.data)}else{W&&wt&&e.texStorage2D(n.TEXTURE_2D,zt,Rt,Lt[0].width,Lt[0].height);for(let Ct=0,At=Lt.length;Ct<At;Ct++)at=Lt[Ct],R.format!==rn?yt!==null?W?Pt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ct,0,0,at.width,at.height,yt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,Ct,Rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Pt&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,at.width,at.height,yt,It,at.data):e.texImage2D(n.TEXTURE_2D,Ct,Rt,at.width,at.height,0,yt,It,at.data)}else if(R.isDataArrayTexture)if(W){if(wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Rt,_t.width,_t.height,_t.depth),Pt)if(R.layerUpdates.size>0){let Ct=fh(_t.width,_t.height,R.format,R.type);for(let At of R.layerUpdates){let Bt=_t.data.subarray(At*Ct/_t.data.BYTES_PER_ELEMENT,(At+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,_t.width,_t.height,1,yt,It,Bt)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,yt,It,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,_t.width,_t.height,_t.depth,0,yt,It,_t.data);else if(R.isData3DTexture)W?(wt&&e.texStorage3D(n.TEXTURE_3D,zt,Rt,_t.width,_t.height,_t.depth),Pt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,yt,It,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,_t.width,_t.height,_t.depth,0,yt,It,_t.data);else if(R.isFramebufferTexture){if(wt)if(W)e.texStorage2D(n.TEXTURE_2D,zt,Rt,_t.width,_t.height);else{let Ct=_t.width,At=_t.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Rt,Ct,At,0,yt,It,null),Ct>>=1,At>>=1}}else if(Lt.length>0){if(W&&wt){let Ct=ft(Lt[0]);e.texStorage2D(n.TEXTURE_2D,zt,Rt,Ct.width,Ct.height)}for(let Ct=0,At=Lt.length;Ct<At;Ct++)at=Lt[Ct],W?Pt&&e.texSubImage2D(n.TEXTURE_2D,Ct,0,0,yt,It,at):e.texImage2D(n.TEXTURE_2D,Ct,Rt,yt,It,at);R.generateMipmaps=!1}else if(W){if(wt){let Ct=ft(_t);e.texStorage2D(n.TEXTURE_2D,zt,Rt,Ct.width,Ct.height)}Pt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,It,_t)}else e.texImage2D(n.TEXTURE_2D,0,Rt,yt,It,_t);_(R)&&g(ht),Tt.__version=st.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function z(D,R,tt){if(R.image.length!==6)return;let ht=gt(D,R),pt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+tt);let st=i.get(pt);if(pt.version!==st.__version||ht===!0){e.activeTexture(n.TEXTURE0+tt);let Tt=ce.getPrimaries(ce.workingColorSpace),et=R.colorSpace===bi?null:ce.getPrimaries(R.colorSpace),bt=R.colorSpace===bi||Tt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let vt=R.isCompressedTexture||R.image[0].isCompressedTexture,_t=R.image[0]&&R.image[0].isDataTexture,yt=[];for(let At=0;At<6;At++)!vt&&!_t?yt[At]=y(R.image[At],!0,s.maxCubemapSize):yt[At]=_t?R.image[At].image:R.image[At],yt[At]=Mt(R,yt[At]);let It=yt[0],Rt=o.convert(R.format,R.colorSpace),at=o.convert(R.type),Lt=M(R.internalFormat,Rt,at,R.colorSpace),W=R.isVideoTexture!==!0,wt=st.__version===void 0||ht===!0,Pt=pt.dataReady,zt=E(R,It);J(n.TEXTURE_CUBE_MAP,R);let Ct;if(vt){W&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,zt,Lt,It.width,It.height);for(let At=0;At<6;At++){Ct=yt[At].mipmaps;for(let Bt=0;Bt<Ct.length;Bt++){let Gt=Ct[Bt];R.format!==rn?Rt!==null?W?Pt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt,0,0,Gt.width,Gt.height,Rt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt,Lt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt,0,0,Gt.width,Gt.height,Rt,at,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt,Lt,Gt.width,Gt.height,0,Rt,at,Gt.data)}}}else{if(Ct=R.mipmaps,W&&wt){Ct.length>0&&zt++;let At=ft(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,zt,Lt,At.width,At.height)}for(let At=0;At<6;At++)if(_t){W?Pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,yt[At].width,yt[At].height,Rt,at,yt[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Lt,yt[At].width,yt[At].height,0,Rt,at,yt[At].data);for(let Bt=0;Bt<Ct.length;Bt++){let Wt=Ct[Bt].image[At].image;W?Pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt+1,0,0,Wt.width,Wt.height,Rt,at,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt+1,Lt,Wt.width,Wt.height,0,Rt,at,Wt.data)}}else{W?Pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Rt,at,yt[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Lt,Rt,at,yt[At]);for(let Bt=0;Bt<Ct.length;Bt++){let Gt=Ct[Bt];W?Pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt+1,0,0,Rt,at,Gt.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt+1,Lt,Rt,at,Gt.image[At])}}}_(R)&&g(n.TEXTURE_CUBE_MAP),st.__version=pt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function q(D,R,tt,ht,pt,st){let Tt=o.convert(tt.format,tt.colorSpace),et=o.convert(tt.type),bt=M(tt.internalFormat,Tt,et,tt.colorSpace),vt=i.get(R),_t=i.get(tt);if(_t.__renderTarget=R,!vt.__hasExternalTextures){let yt=Math.max(1,R.width>>st),It=Math.max(1,R.height>>st);pt===n.TEXTURE_3D||pt===n.TEXTURE_2D_ARRAY?e.texImage3D(pt,st,bt,yt,It,R.depth,0,Tt,et,null):e.texImage2D(pt,st,bt,yt,It,0,Tt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),ut(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,pt,_t.__webglTexture,0,ot(R)):(pt===n.TEXTURE_2D||pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,pt,_t.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(D,R,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){let ht=R.depthTexture,pt=ht&&ht.isDepthTexture?ht.type:null,st=v(R.stencilBuffer,pt),Tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=ot(R);ut(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,st,R.width,R.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,st,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,st,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,D)}else{let ht=R.textures;for(let pt=0;pt<ht.length;pt++){let st=ht[pt],Tt=o.convert(st.format,st.colorSpace),et=o.convert(st.type),bt=M(st.internalFormat,Tt,et,st.colorSpace),vt=ot(R);tt&&ut(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,bt,R.width,R.height):ut(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,bt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,bt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=i.get(R.depthTexture);ht.__renderTarget=R,(!ht.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),U(R.depthTexture,0);let pt=ht.__webglTexture,st=ot(R);if(R.depthTexture.format===Ks)ut(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0);else if(R.depthTexture.format===co)ut(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function N(D){let R=i.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let ht=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ht){let pt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ht.removeEventListener("dispose",pt)};ht.addEventListener("dispose",pt),R.__depthDisposeCallback=pt}R.__boundDepthTexture=ht}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");let ht=D.texture.mipmaps;ht&&ht.length>0?Q(R.__webglFramebuffer[0],D):Q(R.__webglFramebuffer,D)}else if(tt){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]===void 0)R.__webglDepthbuffer[ht]=n.createRenderbuffer(),nt(R.__webglDepthbuffer[ht],D,!1);else{let pt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,st)}}else{let ht=D.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),nt(R.__webglDepthbuffer,D,!1);else{let pt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $(D,R,tt){let ht=i.get(D);R!==void 0&&q(ht.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&N(D)}function I(D){let R=D.texture,tt=i.get(D),ht=i.get(R);D.addEventListener("dispose",A);let pt=D.textures,st=D.isWebGLCubeRenderTarget===!0,Tt=pt.length>1;if(Tt||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=R.version,r.memory.textures++),st){tt.__webglFramebuffer=[];for(let et=0;et<6;et++)if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer[et]=[];for(let bt=0;bt<R.mipmaps.length;bt++)tt.__webglFramebuffer[et][bt]=n.createFramebuffer()}else tt.__webglFramebuffer[et]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer=[];for(let et=0;et<R.mipmaps.length;et++)tt.__webglFramebuffer[et]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let et=0,bt=pt.length;et<bt;et++){let vt=i.get(pt[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),r.memory.textures++)}if(D.samples>0&&ut(D)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let et=0;et<pt.length;et++){let bt=pt[et];tt.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[et]);let vt=o.convert(bt.format,bt.colorSpace),_t=o.convert(bt.type),yt=M(bt.internalFormat,vt,_t,bt.colorSpace,D.isXRRenderTarget===!0),It=ot(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,yt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,tt.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(tt.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),J(n.TEXTURE_CUBE_MAP,R);for(let et=0;et<6;et++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)q(tt.__webglFramebuffer[et][bt],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt);else q(tt.__webglFramebuffer[et],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);_(R)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let et=0,bt=pt.length;et<bt;et++){let vt=pt[et],_t=i.get(vt),yt=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(yt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,_t.__webglTexture),J(yt,vt),q(tt.__webglFramebuffer,D,vt,n.COLOR_ATTACHMENT0+et,yt,0),_(vt)&&g(yt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(et=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,ht.__webglTexture),J(et,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)q(tt.__webglFramebuffer[bt],D,R,n.COLOR_ATTACHMENT0,et,bt);else q(tt.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,et,0);_(R)&&g(et),e.unbindTexture()}D.depthBuffer&&N(D)}function X(D){let R=D.textures;for(let tt=0,ht=R.length;tt<ht;tt++){let pt=R[tt];if(_(pt)){let st=S(D),Tt=i.get(pt).__webglTexture;e.bindTexture(st,Tt),g(st),e.unbindTexture()}}}let G=[],it=[];function rt(D){if(D.samples>0){if(ut(D)===!1){let R=D.textures,tt=D.width,ht=D.height,pt=n.COLOR_BUFFER_BIT,st=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(D),et=R.length>1;if(et)for(let vt=0;vt<R.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let bt=D.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<R.length;vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pt|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);let _t=i.get(R[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,pt,n.NEAREST),c===!0&&(G.length=0,it.length=0,G.push(n.COLOR_ATTACHMENT0+vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(G.push(st),it.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,it)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<R.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);let _t=i.get(R[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function ut(D){let R=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ct(D){let R=r.render.frame;f.get(D)!==R&&(f.set(D,R),D.update())}function Mt(D,R){let tt=D.colorSpace,ht=D.format,pt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==us&&tt!==bi&&(ce.getTransfer(tt)===de?(ht!==rn||pt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),R}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=T,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=$,this.setupRenderTarget=I,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ut}function L_(n,t){function e(i,s=bi){let o,r=ce.getTransfer(s);if(i===Yn)return n.UNSIGNED_BYTE;if(i===Na)return n.UNSIGNED_SHORT_4_4_4_4;if(i===za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$l)return n.BYTE;if(i===Kl)return n.SHORT;if(i===oo)return n.UNSIGNED_SHORT;if(i===Ua)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===ro)return n.HALF_FLOAT;if(i===jl)return n.ALPHA;if(i===Ql)return n.RGB;if(i===rn)return n.RGBA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===co)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===Oa)return n.RED_INTEGER;if(i===eh)return n.RG;if(i===Fa)return n.RG_INTEGER;if(i===Ba)return n.RGBA_INTEGER;if(i===ur||i===dr||i===pr||i===mr)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Ha||i===Va||i===Ga)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===Ya)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Wa||i===Xa)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ya)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qa||i===$a||i===Ka||i===Za||i===Ja||i===ja||i===Qa||i===tc||i===ec||i===nc||i===ic||i===sc||i===oc||i===rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===qa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===cc||i===lc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ac)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===fc||i===uc||i===dc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===hc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new An({vertexShader:D_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends ti{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",c=1,l=null,f=null,h=null,u=null,d=null,p=null,y=typeof XRWebGLBinding<"u",_=new Sh,g={},S=e.getContextAttributes(),M=null,v=null,E=[],C=[],A=new $t,b=null,x=new nn;x.viewport=new we;let m=new nn;m.viewport=new we;let w=[x,m],T=new Ma,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let z=E[Z];return z===void 0&&(z=new to,E[Z]=z),z.getTargetRaySpace()},this.getControllerGrip=function(Z){let z=E[Z];return z===void 0&&(z=new to,E[Z]=z),z.getGripSpace()},this.getHand=function(Z){let z=E[Z];return z===void 0&&(z=new to,E[Z]=z),z.getHandSpace()};function U(Z){let z=C.indexOf(Z.inputSource);if(z===-1)return;let q=E[z];q!==void 0&&(q.update(Z.inputSource,Z.frame,l||r),q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<E.length;Z++){let z=C[Z];z!==null&&(C[Z]=null,E[Z].disconnect(z))}P=null,L=null,_.reset();for(let Z in g)delete g[Z];t.setRenderTarget(M),d=null,u=null,h=null,s=null,v=null,j.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,nt=null,Q=null;S.depth&&(Q=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=S.stencil?co:Ks,nt=S.stencil?ao:Gi);let N={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};h=this.getBinding(),u=h.createProjectionLayer(N),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ei(u.textureWidth,u.textureHeight,{format:rn,type:Yn,depthTexture:new jo(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ei(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let z=0;z<Z.removed.length;z++){let q=Z.removed[z],nt=C.indexOf(q);nt>=0&&(C[nt]=null,E[nt].disconnect(q))}for(let z=0;z<Z.added.length;z++){let q=Z.added[z],nt=C.indexOf(q);if(nt===-1){for(let N=0;N<E.length;N++)if(N>=C.length){C.push(q),nt=N;break}else if(C[N]===null){C[N]=q,nt=N;break}if(nt===-1)break}let Q=E[nt];Q&&Q.connect(q)}}let B=new H,k=new H;function V(Z,z,q){B.setFromMatrixPosition(z.matrixWorld),k.setFromMatrixPosition(q.matrixWorld);let nt=B.distanceTo(k),Q=z.projectionMatrix.elements,N=q.projectionMatrix.elements,$=Q[14]/(Q[10]-1),I=Q[14]/(Q[10]+1),X=(Q[9]+1)/Q[5],G=(Q[9]-1)/Q[5],it=(Q[8]-1)/Q[0],rt=(N[8]+1)/N[0],ot=$*it,ut=$*rt,ct=nt/(-it+rt),Mt=ct*-it;if(z.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(z.projectionMatrix),Z.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let ft=$+ct,D=I+ct,R=ot-Mt,tt=ut+(nt-Mt),ht=X*I/D*ft,pt=G*I/D*ft;Z.projectionMatrix.makePerspective(R,tt,ht,pt,ft,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,z){z===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(z.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let z=Z.near,q=Z.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(q=_.depthFar)),T.near=m.near=x.near=z,T.far=m.far=x.far=q,(P!==T.near||L!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,L=T.far),T.layers.mask=Z.layers.mask|6,x.layers.mask=T.layers.mask&3,m.layers.mask=T.layers.mask&5;let nt=Z.parent,Q=T.cameras;K(T,nt);for(let N=0;N<Q.length;N++)K(Q[N],nt);Q.length===2?V(T,x,m):T.projectionMatrix.copy(x.projectionMatrix),J(Z,T,nt)};function J(Z,z,q){q===null?Z.matrix.copy(z.matrixWorld):(Z.matrix.copy(q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(z.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(z.projectionMatrix),Z.projectionMatrixInverse.copy(z.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)},this.getCameraTexture=function(Z){return g[Z]};let gt=null;function lt(Z,z){if(f=z.getViewerPose(l||r),p=z,f!==null){let q=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let nt=!1;q.length!==T.cameras.length&&(T.cameras.length=0,nt=!0);for(let I=0;I<q.length;I++){let X=q[I],G=null;if(d!==null)G=d.getViewport(X);else{let rt=h.getViewSubImage(u,X);G=rt.viewport,I===0&&(t.setRenderTargetTextures(v,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(v))}let it=w[I];it===void 0&&(it=new nn,it.layers.enable(I),it.viewport=new we,w[I]=it),it.matrix.fromArray(X.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(X.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(G.x,G.y,G.width,G.height),I===0&&(T.matrix.copy(it.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),nt===!0&&T.cameras.push(it)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let I=h.getDepthInformation(q[0]);I&&I.isValid&&I.texture&&_.init(I,s.renderState)}if(Q&&Q.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let I=0;I<q.length;I++){let X=q[I].camera;if(X){let G=g[X];G||(G=new Qo,g[X]=G);let it=h.getCameraImage(X);G.sourceTexture=it}}}}for(let q=0;q<E.length;q++){let nt=C[q],Q=E[q];nt!==null&&Q!==void 0&&Q.update(nt,z,l||r)}gt&&gt(Z,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),p=null}let j=new bd;j.setAnimationLoop(lt),this.setAnimationLoop=function(Z){gt=Z},this.dispose=function(){}}},vs=new Xn,N_=new Te;function z_(n,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,ch(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,S,M,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(_,g):g.isMeshToonMaterial?(o(_,g),h(_,g)):g.isMeshPhongMaterial?(o(_,g),f(_,g)):g.isMeshStandardMaterial?(o(_,g),u(_,g),g.isMeshPhysicalMaterial&&d(_,g,v)):g.isMeshMatcapMaterial?(o(_,g),p(_,g)):g.isMeshDepthMaterial?o(_,g):g.isMeshDistanceMaterial?(o(_,g),y(_,g)):g.isMeshNormalMaterial?o(_,g):g.isLineBasicMaterial?(r(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?c(_,g,S,M):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===pn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===pn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let S=t.get(g),M=S.envMap,v=S.envMapRotation;M&&(_.envMap.value=M,vs.copy(v),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(vs)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function r(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,S,M){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*S,_.scale.value=M*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function u(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function d(_,g,S){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){let S=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O_(n,t,e,i){let s={},o={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let v=M.program;i.uniformBlockBinding(S,v)}function l(S,M){let v=s[S.id];v===void 0&&(p(S),v=f(S),s[S.id]=v,S.addEventListener("dispose",_));let E=M.program;i.updateUBOMapping(S,E);let C=t.render.frame;o[S.id]!==C&&(u(S),o[S.id]=C)}function f(S){let M=h();S.__bindingPointIndex=M;let v=n.createBuffer(),E=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let M=s[S.id],v=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,A=v.length;C<A;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,m=b.length;x<m;x++){let w=b[x];if(d(w,C,x,E)===!0){let T=w.__offset,P=Array.isArray(w.value)?w.value:[w.value],L=0;for(let U=0;U<P.length;U++){let F=P[U],Y=y(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,T+L,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,M,v,E){let C=S.value,A=M+"_"+v;if(E[A]===void 0)return typeof C=="number"||typeof C=="boolean"?E[A]=C:E[A]=C.clone(),!0;{let b=E[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return E[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function p(S){let M=S.uniforms,v=0,E=16;for(let A=0,b=M.length;A<b;A++){let x=Array.isArray(M[A])?M[A]:[M[A]];for(let m=0,w=x.length;m<w;m++){let T=x[m],P=Array.isArray(T.value)?T.value:[T.value];for(let L=0,U=P.length;L<U;L++){let F=P[L],Y=y(F),B=v%E,k=B%Y.boundary,V=B+k;v+=k,V!==0&&E-V<Y.storage&&(v+=E-V),T.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=Y.storage}}}let C=v%E;return C>0&&(v+=E-C),S.__size=v,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function _(S){let M=S.target;M.removeEventListener("dispose",_);let v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function g(){for(let S in s)n.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:g}}var _c=class{constructor(t={}){let{canvas:e=Gu(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;let p=new Uint32Array(4),y=new Int32Array(4),_=null,g=null,S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=Ee;let C=0,A=0,b=null,x=-1,m=null,w=new we,T=new we,P=null,L=new Kt(0),U=0,F=e.width,Y=e.height,B=1,k=null,V=null,K=new we(0,0,F,Y),J=new we(0,0,F,Y),gt=!1,lt=new eo,j=!1,Z=!1,z=new Te,q=new H,nt=new we,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},N=!1;function $(){return b===null?B:1}let I=i;function X(O,dt){return e.getContext(O,dt)}try{let O={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),I===null){let dt="webgl2";if(I=X(dt,O),I===null)throw X(dt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let G,it,rt,ot,ut,ct,Mt,ft,D,R,tt,ht,pt,st,Tt,et,bt,vt,_t,yt,It,Rt,at,Lt;function W(){G=new e1(I),G.init(),Rt=new L_(I,G),it=new $x(I,G,t,Rt),rt=new P_(I,G),it.reversedDepthBuffer&&u&&rt.buffers.depth.setReversed(!0),ot=new s1(I),ut=new x_,ct=new I_(I,G,rt,ut,it,Rt,ot),Mt=new Zx(v),ft=new t1(v),D=new hm(I),at=new Yx(I,D),R=new n1(I,D,ot,at),tt=new r1(I,R,D,ot),_t=new o1(I,it,ct),et=new Kx(ut),ht=new g_(v,Mt,ft,G,it,at,et),pt=new z_(v,ut),st=new y_,Tt=new E_(G),vt=new Xx(v,Mt,ft,rt,tt,d,c),bt=new R_(v,tt,it),Lt=new O_(I,ot,it,rt),yt=new qx(I,G,ot),It=new i1(I,G,ot),ot.programs=ht.programs,v.capabilities=it,v.extensions=G,v.properties=ut,v.renderLists=st,v.shadowMap=bt,v.state=rt,v.info=ot}W();let wt=new Eh(v,I);this.xr=wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let O=G.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=G.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(O){O!==void 0&&(B=O,this.setSize(F,Y,!1))},this.getSize=function(O){return O.set(F,Y)},this.setSize=function(O,dt,St=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=O,Y=dt,e.width=Math.floor(O*B),e.height=Math.floor(dt*B),St===!0&&(e.style.width=O+"px",e.style.height=dt+"px"),this.setViewport(0,0,O,dt)},this.getDrawingBufferSize=function(O){return O.set(F*B,Y*B).floor()},this.setDrawingBufferSize=function(O,dt,St){F=O,Y=dt,B=St,e.width=Math.floor(O*St),e.height=Math.floor(dt*St),this.setViewport(0,0,O,dt)},this.getCurrentViewport=function(O){return O.copy(w)},this.getViewport=function(O){return O.copy(K)},this.setViewport=function(O,dt,St,Et){O.isVector4?K.set(O.x,O.y,O.z,O.w):K.set(O,dt,St,Et),rt.viewport(w.copy(K).multiplyScalar(B).round())},this.getScissor=function(O){return O.copy(J)},this.setScissor=function(O,dt,St,Et){O.isVector4?J.set(O.x,O.y,O.z,O.w):J.set(O,dt,St,Et),rt.scissor(T.copy(J).multiplyScalar(B).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(O){rt.setScissorTest(gt=O)},this.setOpaqueSort=function(O){k=O},this.setTransparentSort=function(O){V=O},this.getClearColor=function(O){return O.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(O=!0,dt=!0,St=!0){let Et=0;if(O){let mt=!1;if(b!==null){let Dt=b.texture.format;mt=Dt===Ba||Dt===Fa||Dt===Oa}if(mt){let Dt=b.texture.type,kt=Dt===Yn||Dt===Gi||Dt===oo||Dt===ao||Dt===Na||Dt===za,Xt=vt.getClearColor(),Vt=vt.getClearAlpha(),Jt=Xt.r,jt=Xt.g,qt=Xt.b;kt?(p[0]=Jt,p[1]=jt,p[2]=qt,p[3]=Vt,I.clearBufferuiv(I.COLOR,0,p)):(y[0]=Jt,y[1]=jt,y[2]=qt,y[3]=Vt,I.clearBufferiv(I.COLOR,0,y))}else Et|=I.COLOR_BUFFER_BIT}dt&&(Et|=I.DEPTH_BUFFER_BIT),St&&(Et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),vt.dispose(),st.dispose(),Tt.dispose(),ut.dispose(),Mt.dispose(),ft.dispose(),tt.dispose(),at.dispose(),Lt.dispose(),ht.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Oe),wt.removeEventListener("sessionend",To),Qn.stop()};function Pt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let O=ot.autoReset,dt=bt.enabled,St=bt.autoUpdate,Et=bt.needsUpdate,mt=bt.type;W(),ot.autoReset=O,bt.enabled=dt,bt.autoUpdate=St,bt.needsUpdate=Et,bt.type=mt}function Ct(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function At(O){let dt=O.target;dt.removeEventListener("dispose",At),Bt(dt)}function Bt(O){Gt(O),ut.remove(O)}function Gt(O){let dt=ut.get(O).programs;dt!==void 0&&(dt.forEach(function(St){ht.releaseProgram(St)}),O.isShaderMaterial&&ht.releaseShaderCache(O))}this.renderBufferDirect=function(O,dt,St,Et,mt,Dt){dt===null&&(dt=Q);let kt=mt.isMesh&&mt.matrixWorld.determinant()<0,Xt=q0(O,dt,St,Et,mt);rt.setMaterial(Et,kt);let Vt=St.index,Jt=1;if(Et.wireframe===!0){if(Vt=R.getWireframeAttribute(St),Vt===void 0)return;Jt=2}let jt=St.drawRange,qt=St.attributes.position,re=jt.start*Jt,ge=(jt.start+jt.count)*Jt;Dt!==null&&(re=Math.max(re,Dt.start*Jt),ge=Math.min(ge,(Dt.start+Dt.count)*Jt)),Vt!==null?(re=Math.max(re,0),ge=Math.min(ge,Vt.count)):qt!=null&&(re=Math.max(re,0),ge=Math.min(ge,qt.count));let De=ge-re;if(De<0||De===1/0)return;at.setup(mt,Et,Xt,St,Vt);let be,ye=yt;if(Vt!==null&&(be=D.get(Vt),ye=It,ye.setIndex(be)),mt.isMesh)Et.wireframe===!0?(rt.setLineWidth(Et.wireframeLinewidth*$()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if(mt.isLine){let Zt=Et.linewidth;Zt===void 0&&(Zt=1),rt.setLineWidth(Zt*$()),mt.isLineSegments?ye.setMode(I.LINES):mt.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else mt.isPoints?ye.setMode(I.POINTS):mt.isSprite&&ye.setMode(I.TRIANGLES);if(mt.isBatchedMesh)if(mt._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(mt._multiDrawStarts,mt._multiDrawCounts,mt._multiDrawCount,mt._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))ye.renderMultiDraw(mt._multiDrawStarts,mt._multiDrawCounts,mt._multiDrawCount);else{let Zt=mt._multiDrawStarts,Re=mt._multiDrawCounts,he=mt._multiDrawCount,bn=Vt?D.get(Vt).bytesPerElement:1,Us=ut.get(Et).currentProgram.getUniforms();for(let Mn=0;Mn<he;Mn++)Us.setValue(I,"_gl_DrawID",Mn),ye.render(Zt[Mn]/bn,Re[Mn])}else if(mt.isInstancedMesh)ye.renderInstances(re,De,mt.count);else if(St.isInstancedBufferGeometry){let Zt=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,Re=Math.min(St.instanceCount,Zt);ye.renderInstances(re,De,Re)}else ye.render(re,De)};function Wt(O,dt,St){O.transparent===!0&&O.side===je&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,Ai(O,dt,St),O.side=gi,O.needsUpdate=!0,Ai(O,dt,St),O.side=je):Ai(O,dt,St)}this.compile=function(O,dt,St=null){St===null&&(St=O),g=Tt.get(St),g.init(dt),M.push(g),St.traverseVisible(function(mt){mt.isLight&&mt.layers.test(dt.layers)&&(g.pushLight(mt),mt.castShadow&&g.pushShadow(mt))}),O!==St&&O.traverseVisible(function(mt){mt.isLight&&mt.layers.test(dt.layers)&&(g.pushLight(mt),mt.castShadow&&g.pushShadow(mt))}),g.setupLights();let Et=new Set;return O.traverse(function(mt){if(!(mt.isMesh||mt.isPoints||mt.isLine||mt.isSprite))return;let Dt=mt.material;if(Dt)if(Array.isArray(Dt))for(let kt=0;kt<Dt.length;kt++){let Xt=Dt[kt];Wt(Xt,St,mt),Et.add(Xt)}else Wt(Dt,St,mt),Et.add(Dt)}),g=M.pop(),Et},this.compileAsync=function(O,dt,St=null){let Et=this.compile(O,dt,St);return new Promise(mt=>{function Dt(){if(Et.forEach(function(kt){ut.get(kt).currentProgram.isReady()&&Et.delete(kt)}),Et.size===0){mt(O);return}setTimeout(Dt,10)}G.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ht=null;function vn(O){Ht&&Ht(O)}function Oe(){Qn.stop()}function To(){Qn.start()}let Qn=new bd;Qn.setAnimationLoop(vn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(O){Ht=O,wt.setAnimationLoop(O),O===null?Qn.stop():Qn.start()},wt.addEventListener("sessionstart",Oe),wt.addEventListener("sessionend",To),this.render=function(O,dt){if(dt!==void 0&&dt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),dt.parent===null&&dt.matrixWorldAutoUpdate===!0&&dt.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(dt),dt=wt.getCamera()),O.isScene===!0&&O.onBeforeRender(v,O,dt,b),g=Tt.get(O,M.length),g.init(dt),M.push(g),z.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),lt.setFromProjectionMatrix(z,Wn,dt.reversedDepth),Z=this.localClippingEnabled,j=et.init(this.clippingPlanes,Z),_=st.get(O,S.length),_.init(),S.push(_),wt.enabled===!0&&wt.isPresenting===!0){let Dt=v.xr.getDepthSensingMesh();Dt!==null&&Ds(Dt,dt,-1/0,v.sortObjects)}Ds(O,dt,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(k,V),N=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,N&&vt.addToRenderList(_,O),this.info.render.frame++,j===!0&&et.beginShadows();let St=g.state.shadowsArray;bt.render(St,O,dt),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let Et=_.opaque,mt=_.transmissive;if(g.setupLights(),dt.isArrayCamera){let Dt=dt.cameras;if(mt.length>0)for(let kt=0,Xt=Dt.length;kt<Xt;kt++){let Vt=Dt[kt];Ro(Et,mt,O,Vt)}N&&vt.render(O);for(let kt=0,Xt=Dt.length;kt<Xt;kt++){let Vt=Dt[kt];Ao(_,O,Vt,Vt.viewport)}}else mt.length>0&&Ro(Et,mt,O,dt),N&&vt.render(O),Ao(_,O,dt);b!==null&&A===0&&(ct.updateMultisampleRenderTarget(b),ct.updateRenderTargetMipmap(b)),O.isScene===!0&&O.onAfterRender(v,O,dt),at.resetDefaultState(),x=-1,m=null,M.pop(),M.length>0?(g=M[M.length-1],j===!0&&et.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Ds(O,dt,St,Et){if(O.visible===!1)return;if(O.layers.test(dt.layers)){if(O.isGroup)St=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(dt);else if(O.isLight)g.pushLight(O),O.castShadow&&g.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||lt.intersectsSprite(O)){Et&&nt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(z);let kt=tt.update(O),Xt=O.material;Xt.visible&&_.push(O,kt,Xt,St,nt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||lt.intersectsObject(O))){let kt=tt.update(O),Xt=O.material;if(Et&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),nt.copy(O.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),nt.copy(kt.boundingSphere.center)),nt.applyMatrix4(O.matrixWorld).applyMatrix4(z)),Array.isArray(Xt)){let Vt=kt.groups;for(let Jt=0,jt=Vt.length;Jt<jt;Jt++){let qt=Vt[Jt],re=Xt[qt.materialIndex];re&&re.visible&&_.push(O,kt,re,St,nt.z,qt)}}else Xt.visible&&_.push(O,kt,Xt,St,nt.z,null)}}let Dt=O.children;for(let kt=0,Xt=Dt.length;kt<Xt;kt++)Ds(Dt[kt],dt,St,Et)}function Ao(O,dt,St,Et){let mt=O.opaque,Dt=O.transmissive,kt=O.transparent;g.setupLightsView(St),j===!0&&et.setGlobalState(v.clippingPlanes,St),Et&&rt.viewport(w.copy(Et)),mt.length>0&&is(mt,dt,St),Dt.length>0&&is(Dt,dt,St),kt.length>0&&is(kt,dt,St),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ro(O,dt,St,Et){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Et.id]===void 0&&(g.state.transmissionRenderTarget[Et.id]=new ei(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ro:Yn,minFilter:ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let Dt=g.state.transmissionRenderTarget[Et.id],kt=Et.viewport||w;Dt.setSize(kt.z*v.transmissionResolutionScale,kt.w*v.transmissionResolutionScale);let Xt=v.getRenderTarget(),Vt=v.getActiveCubeFace(),Jt=v.getActiveMipmapLevel();v.setRenderTarget(Dt),v.getClearColor(L),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),N&&vt.render(St);let jt=v.toneMapping;v.toneMapping=vi;let qt=Et.viewport;if(Et.viewport!==void 0&&(Et.viewport=void 0),g.setupLightsView(Et),j===!0&&et.setGlobalState(v.clippingPlanes,Et),is(O,St,Et),ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt),G.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let ge=0,De=dt.length;ge<De;ge++){let be=dt[ge],ye=be.object,Zt=be.geometry,Re=be.material,he=be.group;if(Re.side===je&&ye.layers.test(Et.layers)){let bn=Re.side;Re.side=pn,Re.needsUpdate=!0,Co(ye,St,Et,Zt,Re,he),Re.side=bn,Re.needsUpdate=!0,re=!0}}re===!0&&(ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt))}v.setRenderTarget(Xt,Vt,Jt),v.setClearColor(L,U),qt!==void 0&&(Et.viewport=qt),v.toneMapping=jt}function is(O,dt,St){let Et=dt.isScene===!0?dt.overrideMaterial:null;for(let mt=0,Dt=O.length;mt<Dt;mt++){let kt=O[mt],Xt=kt.object,Vt=kt.geometry,Jt=kt.group,jt=kt.material;jt.allowOverride===!0&&Et!==null&&(jt=Et),Xt.layers.test(St.layers)&&Co(Xt,dt,St,Vt,jt,Jt)}}function Co(O,dt,St,Et,mt,Dt){O.onBeforeRender(v,dt,St,Et,mt,Dt),O.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),mt.onBeforeRender(v,dt,St,Et,O,Dt),mt.transparent===!0&&mt.side===je&&mt.forceSinglePass===!1?(mt.side=pn,mt.needsUpdate=!0,v.renderBufferDirect(St,dt,Et,mt,O,Dt),mt.side=gi,mt.needsUpdate=!0,v.renderBufferDirect(St,dt,Et,mt,O,Dt),mt.side=je):v.renderBufferDirect(St,dt,Et,mt,O,Dt),O.onAfterRender(v,dt,St,Et,mt,Dt)}function Ai(O,dt,St){dt.isScene!==!0&&(dt=Q);let Et=ut.get(O),mt=g.state.lights,Dt=g.state.shadowsArray,kt=mt.state.version,Xt=ht.getParameters(O,mt.state,Dt,dt,St),Vt=ht.getProgramCacheKey(Xt),Jt=Et.programs;Et.environment=O.isMeshStandardMaterial?dt.environment:null,Et.fog=dt.fog,Et.envMap=(O.isMeshStandardMaterial?ft:Mt).get(O.envMap||Et.environment),Et.envMapRotation=Et.environment!==null&&O.envMap===null?dt.environmentRotation:O.envMapRotation,Jt===void 0&&(O.addEventListener("dispose",At),Jt=new Map,Et.programs=Jt);let jt=Jt.get(Vt);if(jt!==void 0){if(Et.currentProgram===jt&&Et.lightsStateVersion===kt)return Cf(O,Xt),jt}else Xt.uniforms=ht.getUniforms(O),O.onBeforeCompile(Xt,v),jt=ht.acquireProgram(Xt,Vt),Jt.set(Vt,jt),Et.uniforms=Xt.uniforms;let qt=Et.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(qt.clippingPlanes=et.uniform),Cf(O,Xt),Et.needsLights=K0(O),Et.lightsStateVersion=kt,Et.needsLights&&(qt.ambientLightColor.value=mt.state.ambient,qt.lightProbe.value=mt.state.probe,qt.directionalLights.value=mt.state.directional,qt.directionalLightShadows.value=mt.state.directionalShadow,qt.spotLights.value=mt.state.spot,qt.spotLightShadows.value=mt.state.spotShadow,qt.rectAreaLights.value=mt.state.rectArea,qt.ltc_1.value=mt.state.rectAreaLTC1,qt.ltc_2.value=mt.state.rectAreaLTC2,qt.pointLights.value=mt.state.point,qt.pointLightShadows.value=mt.state.pointShadow,qt.hemisphereLights.value=mt.state.hemi,qt.directionalShadowMap.value=mt.state.directionalShadowMap,qt.directionalShadowMatrix.value=mt.state.directionalShadowMatrix,qt.spotShadowMap.value=mt.state.spotShadowMap,qt.spotLightMatrix.value=mt.state.spotLightMatrix,qt.spotLightMap.value=mt.state.spotLightMap,qt.pointShadowMap.value=mt.state.pointShadowMap,qt.pointShadowMatrix.value=mt.state.pointShadowMatrix),Et.currentProgram=jt,Et.uniformsList=null,jt}function Rf(O){if(O.uniformsList===null){let dt=O.currentProgram.getUniforms();O.uniformsList=uo.seqWithValue(dt.seq,O.uniforms)}return O.uniformsList}function Cf(O,dt){let St=ut.get(O);St.outputColorSpace=dt.outputColorSpace,St.batching=dt.batching,St.batchingColor=dt.batchingColor,St.instancing=dt.instancing,St.instancingColor=dt.instancingColor,St.instancingMorph=dt.instancingMorph,St.skinning=dt.skinning,St.morphTargets=dt.morphTargets,St.morphNormals=dt.morphNormals,St.morphColors=dt.morphColors,St.morphTargetsCount=dt.morphTargetsCount,St.numClippingPlanes=dt.numClippingPlanes,St.numIntersection=dt.numClipIntersection,St.vertexAlphas=dt.vertexAlphas,St.vertexTangents=dt.vertexTangents,St.toneMapping=dt.toneMapping}function q0(O,dt,St,Et,mt){dt.isScene!==!0&&(dt=Q),ct.resetTextureUnits();let Dt=dt.fog,kt=Et.isMeshStandardMaterial?dt.environment:null,Xt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:us,Vt=(Et.isMeshStandardMaterial?ft:Mt).get(Et.envMap||kt),Jt=Et.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,jt=!!St.attributes.tangent&&(!!Et.normalMap||Et.anisotropy>0),qt=!!St.morphAttributes.position,re=!!St.morphAttributes.normal,ge=!!St.morphAttributes.color,De=vi;Et.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(De=v.toneMapping);let be=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,ye=be!==void 0?be.length:0,Zt=ut.get(Et),Re=g.state.lights;if(j===!0&&(Z===!0||O!==m)){let hn=O===m&&Et.id===x;et.setState(Et,O,hn)}let he=!1;Et.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Re.state.version||Zt.outputColorSpace!==Xt||mt.isBatchedMesh&&Zt.batching===!1||!mt.isBatchedMesh&&Zt.batching===!0||mt.isBatchedMesh&&Zt.batchingColor===!0&&mt.colorTexture===null||mt.isBatchedMesh&&Zt.batchingColor===!1&&mt.colorTexture!==null||mt.isInstancedMesh&&Zt.instancing===!1||!mt.isInstancedMesh&&Zt.instancing===!0||mt.isSkinnedMesh&&Zt.skinning===!1||!mt.isSkinnedMesh&&Zt.skinning===!0||mt.isInstancedMesh&&Zt.instancingColor===!0&&mt.instanceColor===null||mt.isInstancedMesh&&Zt.instancingColor===!1&&mt.instanceColor!==null||mt.isInstancedMesh&&Zt.instancingMorph===!0&&mt.morphTexture===null||mt.isInstancedMesh&&Zt.instancingMorph===!1&&mt.morphTexture!==null||Zt.envMap!==Vt||Et.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==et.numPlanes||Zt.numIntersection!==et.numIntersection)||Zt.vertexAlphas!==Jt||Zt.vertexTangents!==jt||Zt.morphTargets!==qt||Zt.morphNormals!==re||Zt.morphColors!==ge||Zt.toneMapping!==De||Zt.morphTargetsCount!==ye)&&(he=!0):(he=!0,Zt.__version=Et.version);let bn=Zt.currentProgram;he===!0&&(bn=Ai(Et,dt,mt));let Us=!1,Mn=!1,Po=!1,Ce=bn.getUniforms(),Ln=Zt.uniforms;if(rt.useProgram(bn.program)&&(Us=!0,Mn=!0,Po=!0),Et.id!==x&&(x=Et.id,Mn=!0),Us||m!==O){rt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),Ce.setValue(I,"projectionMatrix",O.projectionMatrix),Ce.setValue(I,"viewMatrix",O.matrixWorldInverse);let mn=Ce.map.cameraPosition;mn!==void 0&&mn.setValue(I,q.setFromMatrixPosition(O.matrixWorld)),it.logarithmicDepthBuffer&&Ce.setValue(I,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(Et.isMeshPhongMaterial||Et.isMeshToonMaterial||Et.isMeshLambertMaterial||Et.isMeshBasicMaterial||Et.isMeshStandardMaterial||Et.isShaderMaterial)&&Ce.setValue(I,"isOrthographic",O.isOrthographicCamera===!0),m!==O&&(m=O,Mn=!0,Po=!0)}if(mt.isSkinnedMesh){Ce.setOptional(I,mt,"bindMatrix"),Ce.setOptional(I,mt,"bindMatrixInverse");let hn=mt.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ce.setValue(I,"boneTexture",hn.boneTexture,ct))}mt.isBatchedMesh&&(Ce.setOptional(I,mt,"batchingTexture"),Ce.setValue(I,"batchingTexture",mt._matricesTexture,ct),Ce.setOptional(I,mt,"batchingIdTexture"),Ce.setValue(I,"batchingIdTexture",mt._indirectTexture,ct),Ce.setOptional(I,mt,"batchingColorTexture"),mt._colorsTexture!==null&&Ce.setValue(I,"batchingColorTexture",mt._colorsTexture,ct));let Dn=St.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&_t.update(mt,St,bn),(Mn||Zt.receiveShadow!==mt.receiveShadow)&&(Zt.receiveShadow=mt.receiveShadow,Ce.setValue(I,"receiveShadow",mt.receiveShadow)),Et.isMeshGouraudMaterial&&Et.envMap!==null&&(Ln.envMap.value=Vt,Ln.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Et.isMeshStandardMaterial&&Et.envMap===null&&dt.environment!==null&&(Ln.envMapIntensity.value=dt.environmentIntensity),Mn&&(Ce.setValue(I,"toneMappingExposure",v.toneMappingExposure),Zt.needsLights&&$0(Ln,Po),Dt&&Et.fog===!0&&pt.refreshFogUniforms(Ln,Dt),pt.refreshMaterialUniforms(Ln,Et,B,Y,g.state.transmissionRenderTarget[O.id]),uo.upload(I,Rf(Zt),Ln,ct)),Et.isShaderMaterial&&Et.uniformsNeedUpdate===!0&&(uo.upload(I,Rf(Zt),Ln,ct),Et.uniformsNeedUpdate=!1),Et.isSpriteMaterial&&Ce.setValue(I,"center",mt.center),Ce.setValue(I,"modelViewMatrix",mt.modelViewMatrix),Ce.setValue(I,"normalMatrix",mt.normalMatrix),Ce.setValue(I,"modelMatrix",mt.matrixWorld),Et.isShaderMaterial||Et.isRawShaderMaterial){let hn=Et.uniformsGroups;for(let mn=0,rl=hn.length;mn<rl;mn++){let ss=hn[mn];Lt.update(ss,bn),Lt.bind(ss,bn)}}return bn}function $0(O,dt){O.ambientLightColor.needsUpdate=dt,O.lightProbe.needsUpdate=dt,O.directionalLights.needsUpdate=dt,O.directionalLightShadows.needsUpdate=dt,O.pointLights.needsUpdate=dt,O.pointLightShadows.needsUpdate=dt,O.spotLights.needsUpdate=dt,O.spotLightShadows.needsUpdate=dt,O.rectAreaLights.needsUpdate=dt,O.hemisphereLights.needsUpdate=dt}function K0(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(O,dt,St){let Et=ut.get(O);Et.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,Et.__autoAllocateDepthBuffer===!1&&(Et.__useRenderToTexture=!1),ut.get(O.texture).__webglTexture=dt,ut.get(O.depthTexture).__webglTexture=Et.__autoAllocateDepthBuffer?void 0:St,Et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,dt){let St=ut.get(O);St.__webglFramebuffer=dt,St.__useDefaultFramebuffer=dt===void 0};let Z0=I.createFramebuffer();this.setRenderTarget=function(O,dt=0,St=0){b=O,C=dt,A=St;let Et=!0,mt=null,Dt=!1,kt=!1;if(O){let Vt=ut.get(O);if(Vt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(I.FRAMEBUFFER,null),Et=!1;else if(Vt.__webglFramebuffer===void 0)ct.setupRenderTarget(O);else if(Vt.__hasExternalTextures)ct.rebindTextures(O,ut.get(O.texture).__webglTexture,ut.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let qt=O.depthTexture;if(Vt.__boundDepthTexture!==qt){if(qt!==null&&ut.has(qt)&&(O.width!==qt.image.width||O.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(O)}}let Jt=O.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);let jt=ut.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(jt[dt])?mt=jt[dt][St]:mt=jt[dt],Dt=!0):O.samples>0&&ct.useMultisampledRTT(O)===!1?mt=ut.get(O).__webglMultisampledFramebuffer:Array.isArray(jt)?mt=jt[St]:mt=jt,w.copy(O.viewport),T.copy(O.scissor),P=O.scissorTest}else w.copy(K).multiplyScalar(B).floor(),T.copy(J).multiplyScalar(B).floor(),P=gt;if(St!==0&&(mt=Z0),rt.bindFramebuffer(I.FRAMEBUFFER,mt)&&Et&&rt.drawBuffers(O,mt),rt.viewport(w),rt.scissor(T),rt.setScissorTest(P),Dt){let Vt=ut.get(O.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Vt.__webglTexture,St)}else if(kt){let Vt=dt;for(let Jt=0;Jt<O.textures.length;Jt++){let jt=ut.get(O.textures[Jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Jt,jt.__webglTexture,St,Vt)}}else if(O!==null&&St!==0){let Vt=ut.get(O.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,St)}x=-1},this.readRenderTargetPixels=function(O,dt,St,Et,mt,Dt,kt,Xt=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ut.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt){rt.bindFramebuffer(I.FRAMEBUFFER,Vt);try{let Jt=O.textures[Xt],jt=Jt.format,qt=Jt.type;if(!it.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}dt>=0&&dt<=O.width-Et&&St>=0&&St<=O.height-mt&&(O.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Xt),I.readPixels(dt,St,Et,mt,Rt.convert(jt),Rt.convert(qt),Dt))}finally{let Jt=b!==null?ut.get(b).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(O,dt,St,Et,mt,Dt,kt,Xt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ut.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt)if(dt>=0&&dt<=O.width-Et&&St>=0&&St<=O.height-mt){rt.bindFramebuffer(I.FRAMEBUFFER,Vt);let Jt=O.textures[Xt],jt=Jt.format,qt=Jt.type;if(!it.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,re),I.bufferData(I.PIXEL_PACK_BUFFER,Dt.byteLength,I.STREAM_READ),O.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Xt),I.readPixels(dt,St,Et,mt,Rt.convert(jt),Rt.convert(qt),0);let ge=b!==null?ut.get(b).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,ge);let De=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wu(I,De,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Dt),I.deleteBuffer(re),I.deleteSync(De),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,dt=null,St=0){let Et=Math.pow(2,-St),mt=Math.floor(O.image.width*Et),Dt=Math.floor(O.image.height*Et),kt=dt!==null?dt.x:0,Xt=dt!==null?dt.y:0;ct.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,St,0,0,kt,Xt,mt,Dt),rt.unbindTexture()};let J0=I.createFramebuffer(),j0=I.createFramebuffer();this.copyTextureToTexture=function(O,dt,St=null,Et=null,mt=0,Dt=null){Dt===null&&(mt!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=mt,mt=0):Dt=0);let kt,Xt,Vt,Jt,jt,qt,re,ge,De,be=O.isCompressedTexture?O.mipmaps[Dt]:O.image;if(St!==null)kt=St.max.x-St.min.x,Xt=St.max.y-St.min.y,Vt=St.isBox3?St.max.z-St.min.z:1,Jt=St.min.x,jt=St.min.y,qt=St.isBox3?St.min.z:0;else{let Dn=Math.pow(2,-mt);kt=Math.floor(be.width*Dn),Xt=Math.floor(be.height*Dn),O.isDataArrayTexture?Vt=be.depth:O.isData3DTexture?Vt=Math.floor(be.depth*Dn):Vt=1,Jt=0,jt=0,qt=0}Et!==null?(re=Et.x,ge=Et.y,De=Et.z):(re=0,ge=0,De=0);let ye=Rt.convert(dt.format),Zt=Rt.convert(dt.type),Re;dt.isData3DTexture?(ct.setTexture3D(dt,0),Re=I.TEXTURE_3D):dt.isDataArrayTexture||dt.isCompressedArrayTexture?(ct.setTexture2DArray(dt,0),Re=I.TEXTURE_2D_ARRAY):(ct.setTexture2D(dt,0),Re=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,dt.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,dt.unpackAlignment);let he=I.getParameter(I.UNPACK_ROW_LENGTH),bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Us=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),Po=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);let Ce=O.isDataArrayTexture||O.isData3DTexture,Ln=dt.isDataArrayTexture||dt.isData3DTexture;if(O.isDepthTexture){let Dn=ut.get(O),hn=ut.get(dt),mn=ut.get(Dn.__renderTarget),rl=ut.get(hn.__renderTarget);rt.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let ss=0;ss<Vt;ss++)Ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(O).__webglTexture,mt,qt+ss),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(dt).__webglTexture,Dt,De+ss)),I.blitFramebuffer(Jt,jt,kt,Xt,re,ge,kt,Xt,I.DEPTH_BUFFER_BIT,I.NEAREST);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(mt!==0||O.isRenderTargetTexture||ut.has(O)){let Dn=ut.get(O),hn=ut.get(dt);rt.bindFramebuffer(I.READ_FRAMEBUFFER,J0),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,j0);for(let mn=0;mn<Vt;mn++)Ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dn.__webglTexture,mt,qt+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dn.__webglTexture,mt),Ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Dt,De+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Dt),mt!==0?I.blitFramebuffer(Jt,jt,kt,Xt,re,ge,kt,Xt,I.COLOR_BUFFER_BIT,I.NEAREST):Ln?I.copyTexSubImage3D(Re,Dt,re,ge,De+mn,Jt,jt,kt,Xt):I.copyTexSubImage2D(Re,Dt,re,ge,Jt,jt,kt,Xt);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ln?O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Re,Dt,re,ge,De,kt,Xt,Vt,ye,Zt,be.data):dt.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,Dt,re,ge,De,kt,Xt,Vt,ye,be.data):I.texSubImage3D(Re,Dt,re,ge,De,kt,Xt,Vt,ye,Zt,be):O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Dt,re,ge,kt,Xt,ye,Zt,be.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Dt,re,ge,be.width,be.height,ye,be.data):I.texSubImage2D(I.TEXTURE_2D,Dt,re,ge,kt,Xt,ye,Zt,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Us),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Po),Dt===0&&dt.generateMipmaps&&I.generateMipmap(Re),rt.unbindTexture()},this.initRenderTarget=function(O){ut.get(O).__webglFramebuffer===void 0&&ct.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?ct.setTextureCube(O,0):O.isData3DTexture?ct.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?ct.setTexture2DArray(O,0):ct.setTexture2D(O,0),rt.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,rt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Td={type:"change"},Rh={type:"start"},Rd={type:"end"},vc=new ds,Ad=new Nn,F_=Math.cos(70*rh.DEG2RAD),Ge=new H,xn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6,bc=class extends lr{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new zn,this._lastTargetPosition=new H,this._quat=new zn().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new so,this._sphericalDelta=new so,this._scale=1,this._panOffset=new H,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new H,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k_.bind(this),this._onPointerDown=B_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=$_.bind(this),this._onMouseWheel=W_.bind(this),this._onKeyDown=X_.bind(this),this._onTouchStart=Y_.bind(this),this._onTouchMove=q_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=G_.bind(this),this._interceptControlDown=K_.bind(this),this._interceptControlUp=Z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Td),this.update(),this.state=xe.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Ge.length();r=this._clampDistance(a*this._scale);let c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let l=new H(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<F_?this.object.lookAt(this.target):(Ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(Ad,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(Td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ge.copy(s).sub(this.target);let o=Ge.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function B_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function k_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function H_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rd),this.state=xe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xe.DOLLY;break;case Hi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}break;case Hi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Rh)}function G_(n){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W_(n){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(n.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rd))}function X_(n){this.enabled!==!1&&this._handleKeyDown(n)}function Y_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xe.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xe.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Rh)}function q_(n){switch(this._trackPointer(n),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xe.NONE}}function $_(n){this.enabled!==!1&&n.preventDefault()}function K_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ch=(n,t)=>[n[0]-t[0],n[1]-t[1]],Wi=(n,t,e=1)=>[n[0]+t[0]*e,n[1]+t[1]*e],Ph=(n,t)=>n[0]*t[0]+n[1]*t[1],Ih=n=>Math.hypot(n[0],n[1]),Cd=n=>{let t=Ih(n)||1;return[n[0]/t,n[1]/t]},Mc=n=>[n[1],-n[0]],wc={wood:{label:"\u6728\u306E\u7BB1\u968E\u6BB5",riser:.205,most:.23,tread:.24,rail:"wall"},open:{label:"\u30AA\u30FC\u30D7\u30F3\u968E\u6BB5",riser:.2,most:.23,tread:.25,rail:"bars"},rc:{label:"\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u968E\u6BB5",riser:.18,most:.2,tread:.27,rail:"bars"},steel:{label:"\u9244\u9AA8\u968E\u6BB5",riser:.19,most:.22,tread:.25,rail:"bars"},stone:{label:"\u77F3\u306E\u968E\u6BB5",riser:.17,most:.2,tread:.3,rail:"bars"}};function J_({x:n,z:t,radius:e=.85,from:i=0,sweep:s=360,post:o=.1}){let r=Math.max(4,Math.round(Math.abs(s)/30)),a=(e+o)/2;return{w:e-o,pts:Array.from({length:r+1},(c,l)=>{let f=(i+s*l/r)*Math.PI/180;return[n+Math.cos(f)*a,t+Math.sin(f)*a]})}}var Pd=new WeakMap;function ri(n,t){let e=Pd.get(n);return e||Pd.set(n,e=new Map),e.has(t)||e.set(t,j_(n,t)),e.get(t)}function j_(n,t){let e=n.k==="spiral",i=e?J_(n):n,s=Math.max(.4,i.w??.8),o=s/2,r=wc[n.look]??wc.wood,a=i.pts.filter((N,$,I)=>!$||Ih(Ch(N,I[$-1]))>1e-4),c=a.length-1,l=a.slice(1).map((N,$)=>Cd(Ch(N,a[$]))),f=a.slice(1).map((N,$)=>Ih(Ch(N,a[$]))),h=[0];f.forEach(N=>h.push(h.at(-1)+N));let u=h.at(-1),d=a.map((N,$)=>$>0&&$<c&&Math.abs(Ph(l[$-1],l[$]))<.35),p=N=>{let $=0;for(;$<c-1&&N>h[$+1];)$++;return $},y=N=>{let $=p(N);return Wi(a[$],l[$],Math.min(Math.max(N-h[$],0),f[$]))},_=(N,$)=>Wi(y(N),Mc(l[p(N)]),$*o),g=(N,$)=>{let I=Mc(l[N-1]),X=Mc(l[N]),G=Math.sqrt(Math.max(.05,(1+Ph(I,X))/2));return Wi(a[N],Cd([I[0]+X[0],I[1]+X[1]]),$*o/G)},S=(N,$,I)=>{let X=[_(N,I)];for(let G=1;G<c;G++)h[G]>N+1e-6&&h[G]<$-1e-6&&X.push(g(G,I));return X.push(_($,I)),X},M=(N,$)=>[...S(N,$,1),...S(N,$,-1).reverse()],v=[],E=0;for(let N=1;N<=c;N++){if(N<c&&!d[N])continue;let $=h[E]+(E>0?o:0),I=h[N]-(N<c?o:0);v.push({kind:"run",from:Math.min($,I),to:Math.max($,I),length:Math.max(0,I-$)}),N<c&&v.push({kind:"corner",vertex:N,from:h[N]-o,to:h[N]+o}),E=N}let C=v.filter(N=>N.kind==="run");C.forEach((N,$)=>{N.first=$===0,N.last=$===C.length-1,N.short=!N.first&&!N.last&&N.length<.35});let A=n.turn==="winder",b=[];for(let[N,$]of v.entries()){if($.kind!=="corner")continue;let I=v[N-1];!A&&I.short&&b.length?b.at(-1).to=$.to:b.push({from:$.from,to:$.to,corners:[]}),b.at(-1).corners.push($)}let x=A?v.filter(N=>N.kind==="corner").length*3:b.length,m=C.filter(N=>!N.short),w=m.reduce((N,$)=>N+$.length,0),T=N=>{let $=N-1-x;if($<0)return null;let I=m.map(rt=>w>0?$*rt.length/w:$/m.length),X=I.map(Math.floor),G=$-X.reduce((rt,ot)=>rt+ot,0);for(let rt of I.map((ot,ut)=>[ot-Math.floor(ot),ut]).sort((ot,ut)=>ut[0]-ot[0]).map(([,ot])=>ot)){if(G--<=0)break;X[rt]++}let it=m.map((rt,ot)=>X[ot]?rt.length/X[ot]:1/0);return{risers:N,given:X,shallowest:Math.min(...it)}},P=Math.max(2,Math.ceil(t/r.riser-1e-6)),L=Math.max(2,Math.ceil(t/r.most-1e-6),x+1),U=null;for(let N=Math.max(P,L);N>=L;N--){let $=T(N);if($){if(U??(U=$),$.shallowest>=.21){U=$;break}$.shallowest>U.shallowest&&(U=$)}}U??(U=T(x+1));let F=U.risers,Y=t/F,B=[],k=(N,$,I={})=>B.push({at:N,kind:$,...I}),V=0;for(let N of v)if(N.kind==="run"){if(N.short)continue;let $=U.given[m.indexOf(N)],I=$?Math.min(N.length/$,e?1/0:r.tread+.05):0,X=N.length-I*$,G=N.last?X:N.first?0:X/2;for(let it=0;it<$;it++)k(N.from+G+I*it,"tread");V=N.from+G+I*$}else if(A){let[$,I,X]=[a[N.vertex],l[N.vertex-1],l[N.vertex]];for(let G=0;G<3;G++)k(N.from+(N.to-N.from)*G/3,"winder",{corner:{p:$,a:I,b:X},wedge:G});V=N.to}else b.some($=>$.corners[0]===N)&&(k(V,"landing"),V=b.find($=>$.corners[0]===N).to);let K=[...B.map(N=>N.at),u],J=B.map((N,$)=>{let I=Y*($+1),X=Math.max(N.at+1e-4,K[$+1]);if(N.kind==="winder"){let{p:G,a:it,b:rt}=N.corner,ot=Wi(Wi(G,it,-o),rt,o),ut=ft=>{let D=ft*Math.PI/6,R=[-rt[0]*Math.cos(D)+it[0]*Math.sin(D),-rt[1]*Math.cos(D)+it[1]*Math.sin(D)];return Wi(ot,R,s/Math.max(Math.cos(D),Math.sin(D)))},ct=Wi(Wi(ot,rt,-s),it,s),Mt=N.wedge===0?[ot,ut(0),ut(1)]:N.wedge===1?[ot,ut(1),ct,ut(2)]:[ot,ut(2),ut(3)];return{kind:"winder",y:I,poly:Mt,nose:[ot,ut(N.wedge)]}}return{kind:N.kind,y:I,poly:M(N.at,X),nose:[_(N.at,1),_(N.at,-1)]}});if(A)for(let N of v){if(N.kind!=="run"||!N.short||N.length<.001)continue;let $=B.findLastIndex(I=>I.at<=N.from+1e-6);$>=0&&J.push({kind:"landing",y:Y*($+1),poly:M(N.from,N.to),nose:null})}let gt=N=>{let $=0;for(;$<F&&N>=K[$];)$++;return $*Y},lt=[[0,0]];K.forEach((N,$)=>{let I=N-($?K[$-1]:0),X=(K[$+1]??u+1)-N;lt.push([Math.max(0,N-Math.min(.13,I/2)),Y*$]),lt.push([Math.min(u,N+Math.min(.13,X/2)),Y*($+1)])}),lt.push([u,t]),lt.sort((N,$)=>N[0]-$[0]||N[1]-$[1]);let j=N=>{let $=1;for(;$<lt.length-1&&lt[$][0]<N;)$++;let[I,X]=lt[$-1],[G,it]=lt[$];return G-I<1e-9?it:X+(it-X)*Math.min(1,Math.max(0,(N-I)/(G-I)))},Z=new Set(lt.map(([N])=>N));for(let N=1;N<c;N++)Z.add(h[N]);let z=[...Z].sort((N,$)=>N-$).map(N=>[...y(N),j(N)]);z[0][2]=0,z.at(-1)[2]=t;let q=[];for(let N of v)N.kind==="run"&&N.length<.001||q.push({kind:N.kind,from:N.from,to:N.to,poly:M(N.from,N.to),y0:gt(N.from+1e-4),y1:gt(N.to-1e-4)});let nt=(N,$)=>[(N[0]+$[0])/2,(N[1]+$[1])/2],Q=[];for(let N=1;N<c;N++)d[N]&&Q.push({s:h[N],half:o,inner:Ph(Mc(l[N-1]),l[N])>0?1:-1});return{corners:Q,n:F,riser:Y,w:s,total:u,spiral:e,look:n.look&&wc[n.look]?n.look:"wood",tread:U.shallowest,steep:U.shallowest<.15,surfaces:J,pieces:q,path:z,outline:M(0,u),side:S,strip:M,edge:_,centre:y,heightAt:gt,ramp:j,foot:{at:[...nt(_(0,1),_(0,-1)),0],out:[-l[0][0],-l[0][1]],half:o},head:{at:[...nt(_(u,1),_(u,-1)),t],out:[l[c-1][0],l[c-1][1]],half:o}}}var Yi=8,Ie=.91,ze=.24,_n=1.2,Mi=.02;function Cn(n,t=0,e=0){let i=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return i-Math.floor(i)}function Dh(n){let t=7;for(let e of String(n))t=(t*31+e.charCodeAt(0))%100003;return t}var Uh={L:"\u30EA\u30D3\u30F3\u30B0",D:"\u30C0\u30A4\u30CB\u30F3\u30B0",K:"\u30AD\u30C3\u30C1\u30F3",B:"\u6D0B\u5BA4",P:"\u500B\u5BA4",W:"\u548C\u5BA4",R:"\u62BC\u5165\u308C\u30FB\u53CE\u7D0D",N:"\u6D17\u9762\u5BA4",U:"\u6D74\u5BA4",T:"\u30C8\u30A4\u30EC",G:"\u7384\u95A2",H:"\u5ECA\u4E0B",S:"\u968E\u6BB5",Y:"\u7E01\u5074",V:"\u30D9\u30E9\u30F3\u30C0",E:"\u7D0D\u6238",M:"\u5E97\u8217",O:"\u4E8B\u52D9\u5BA4",C:"\u5171\u7528\u5ECA\u4E0B",A:"\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9",X:"\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC",J:"\u99D0\u8ECA\u5834"};var mo={modern:{storey:2.85,ceiling:2.4,base:.55,doma:.2,wall:.17,inner:.125,stair:"wood",roof:{k:"gable",f:"roof-slate",pitch:22,eave:.6}},europe:{storey:2.9,ceiling:2.5,base:.5,doma:.15,wall:.2,inner:.125,stair:"wood",roof:{k:"gable",f:"roof-tile-orange",pitch:40,eave:.45}},japan:{storey:2.85,ceiling:2.4,base:.6,doma:.3,wall:.17,inner:.12,stair:"wood",roof:{k:"hip",f:"roof-kawara",pitch:26,eave:.9}},danchi:{storey:2.6,ceiling:2.3,base:.9,doma:.06,wall:.18,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.3}},mansion:{storey:2.9,ceiling:2.45,base:.3,doma:.05,wall:.18,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.9}},office:{storey:3.8,ceiling:2.7,base:.15,doma:0,wall:.2,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.9}},brutal:{storey:3.3,ceiling:2.6,base:.3,doma:0,wall:.3,inner:.15,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:1.1}},shop:{storey:3.2,ceiling:2.7,base:.12,doma:0,wall:.18,inner:.1,stair:"wood",roof:{k:"flat",f:"roof-concrete",parapet:.6}}},Nt=(n,t,e,i="#ffffff",s={})=>({label:n,group:t,texture:e,tint:i,...s}),qi={"mortar-white":Nt("\u30E2\u30EB\u30BF\u30EB\uFF08\u767D\uFF09","wall","mortar","#fbfaf4"),"mortar-cream":Nt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","mortar","#f5ead0"),"mortar-ivory":Nt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","mortar","#f1e9d9"),"mortar-grey":Nt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","mortar","#c8c7bf"),"stucco-white":Nt("\u5857\u308A\u58C1\uFF08\u767D\uFF09","wall","stucco","#f8f6ef"),"stucco-ivory":Nt("\u5857\u308A\u58C1\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","stucco","#f3ecda"),"stucco-cream":Nt("\u5857\u308A\u58C1\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","stucco","#f2e2c0"),"stucco-yellow":Nt("\u5857\u308A\u58C1\uFF08\u9EC4\uFF09","wall","stucco","#efd58e"),"stucco-rose":Nt("\u5857\u308A\u58C1\uFF08\u30ED\u30FC\u30BA\uFF09","wall","stucco","#eccdc0"),"stucco-sage":Nt("\u5857\u308A\u58C1\uFF08\u82E5\u8349\uFF09","wall","stucco","#d2dcc0"),"stucco-blue":Nt("\u5857\u308A\u58C1\uFF08\u6C34\u8272\uFF09","wall","stucco","#c8d9e3"),"stucco-charcoal":Nt("\u5857\u308A\u58C1\uFF08\u30C1\u30E3\u30B3\u30FC\u30EB\uFF09","wall","stucco","#54585b"),"plaster-white":Nt("\u6F06\u55B0","wall","plaster","#f6f3ea"),concrete:Nt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u6253\u3061\u653E\u3057","wall","concrete"),"concrete-stained":Nt("\u53E4\u3073\u305F\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8","wall","concreteStained"),"concrete-dark":Nt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF08\u6FC3\uFF09","wall","concreteStained","#a4a39e"),"brick-red":Nt("\u30EC\u30F3\u30AC\uFF08\u8D64\uFF09","wall","brick"),"brick-brown":Nt("\u30EC\u30F3\u30AC\uFF08\u3053\u3052\u8336\uFF09","wall","brick","#b08d7c"),"brick-white":Nt("\u30EC\u30F3\u30AC\uFF08\u767D\uFF09","wall","brickWhite"),"tile-white":Nt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","wall","tile","#fafaf6"),"tile-beige":Nt("\u30BF\u30A4\u30EB\uFF08\u30D9\u30FC\u30B8\u30E5\uFF09","wall","tile","#e7d5bc"),"tile-sand":Nt("\u30BF\u30A4\u30EB\uFF08\u7802\u8272\uFF09","wall","tile","#d8c0a6"),"tile-brown":Nt("\u30BF\u30A4\u30EB\uFF08\u8336\uFF09","wall","tile","#a47b5d"),"tile-grey":Nt("\u30BF\u30A4\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","tile","#b8b6af"),"tile-navy":Nt("\u30BF\u30A4\u30EB\uFF08\u7D3A\uFF09","wall","tile","#49576c"),"siding-white":Nt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u767D\uFF09","wall","siding","#f4f3ee"),"siding-sand":Nt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7802\u8272\uFF09","wall","siding","#d9ceb7"),"siding-grey":Nt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u30B0\u30EC\u30FC\uFF09","wall","siding","#8e9397"),"siding-navy":Nt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7D3A\uFF09","wall","siding","#3e4b5d"),"siding-green":Nt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u6DF1\u7DD1\uFF09","wall","siding","#4d6455"),"wood-natural":Nt("\u677F\u5F35\u308A\uFF08\u660E\u308B\u3044\u6728\uFF09","wall","planks","#d3a979"),"wood-brown":Nt("\u677F\u5F35\u308A\uFF08\u8336\uFF09","wall","planks","#8f6646"),"wood-dark":Nt("\u677F\u5F35\u308A\uFF08\u713C\u6749\uFF09","wall","planks","#3d342e"),"wood-red":Nt("\u677F\u5F35\u308A\uFF08\u3079\u3093\u304C\u3089\uFF09","wall","planks","#8d4f3f"),"metal-dark":Nt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9ED2\uFF09","wall","metalPanel","#3d4349",{roughness:.45,metalness:.7}),"metal-silver":Nt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9280\uFF09","wall","metalPanel","#c3c8cc",{roughness:.4,metalness:.8}),"metal-white":Nt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u767D\uFF09","wall","metalPanel","#eef0f0",{roughness:.5,metalness:.3}),stone:Nt("\u77F3\u5F35\u308A","wall","stone"),"wp-white":Nt("\u58C1\u7D19\uFF08\u767D\uFF09","paper","wallpaper","#f7f5ef"),"wp-ivory":Nt("\u58C1\u7D19\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","paper","wallpaper","#f2ead9"),"wp-grey":Nt("\u58C1\u7D19\uFF08\u30B0\u30EC\u30FC\uFF09","paper","wallpaper","#d9dbd9"),"wp-blue":Nt("\u58C1\u7D19\uFF08\u6C34\u8272\uFF09","paper","wallpaper","#d2dfe9"),"wp-green":Nt("\u58C1\u7D19\uFF08\u82E5\u8349\uFF09","paper","wallpaper","#d7e3d0"),"wp-pink":Nt("\u58C1\u7D19\uFF08\u685C\uFF09","paper","wallpaper","#f1dcd8"),"wp-yellow":Nt("\u58C1\u7D19\uFF08\u305F\u307E\u3054\uFF09","paper","wallpaper","#f4e9bd"),"wp-navy":Nt("\u58C1\u7D19\uFF08\u7D3A\uFF09","paper","wallpaper","#44516a"),"wp-brown":Nt("\u58C1\u7D19\uFF08\u8336\uFF09","paper","wallpaper","#8b6f5c"),"wp-stripe":Nt("\u58C1\u7D19\uFF08\u30B9\u30C8\u30E9\u30A4\u30D7\uFF09","paper","wallpaperStripe"),juraku:Nt("\u3058\u3085\u3089\u304F\u58C1","paper","plaster","#dccfa9"),"tile-bath":Nt("\u30BF\u30A4\u30EB\uFF08\u6C34\u8272\uFF09","paper","bathTile","#d4e9ef"),"tile-bath-white":Nt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","paper","bathTile"),"panel-wood":Nt("\u677F\u58C1","paper","planks","#caa57c"),"floor-maple":Nt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30E1\u30FC\u30D7\u30EB\uFF09","floor","floorboards"),"floor-oak":Nt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30AA\u30FC\u30AF\uFF09","floor","floorboards","#d9b98f"),"floor-walnut":Nt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30A6\u30A9\u30EB\u30CA\u30C3\u30C8\uFF09","floor","floorboards","#8f6b52"),"floor-dark":Nt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u3053\u3052\u8336\uFF09","floor","floorboards","#5d4a40"),tatami:Nt("\u7573","floor","tatami"),"tile-floor":Nt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u767D\uFF09","floor","bathTile"),"tile-floor-blue":Nt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u6C34\u8272\uFF09","floor","bathTile","#d4e9ef"),"stone-floor":Nt("\u77F3\u7573","floor","pavers","#f1ece2"),"genkan-floor":Nt("\u7384\u95A2\u30BF\u30A4\u30EB","floor","pavers","#b8b2a6"),checker:Nt("\u5E02\u677E\u6A21\u69D8\u306E\u5E8A","floor","checker"),"carpet-grey":Nt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u30B0\u30EC\u30FC\uFF09","floor","carpet","#b4b9bf"),"carpet-blue":Nt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u9752\uFF09","floor","carpet","#6f7f93"),"carpet-red":Nt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u3048\u3093\u3058\uFF09","floor","carpet","#9a5a56"),"carpet-green":Nt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u7DD1\uFF09","floor","carpet","#6f8a72"),"concrete-floor":Nt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u5E8A","floor","concrete","#d2d0c9"),deck:Nt("\u30A6\u30C3\u30C9\u30C7\u30C3\u30AD","floor","planks","#b08a62"),"ceil-white":Nt("\u5929\u4E95\uFF08\u767D\uFF09","ceiling","plaster","#fbfaf6"),"ceil-wood":Nt("\u677F\u5929\u4E95","ceiling","planks","#c9a880"),"roof-kawara":Nt("\u74E6\uFF08\u3044\u3076\u3057\u9280\uFF09","roof","kawara","#a7adb4",{roughness:.55,metalness:.2}),"roof-kawara-dark":Nt("\u74E6\uFF08\u9ED2\uFF09","roof","kawara","#5b6068",{roughness:.6,metalness:.15}),"roof-tile-orange":Nt("\u6D0B\u74E6\uFF08\u3060\u3044\u3060\u3044\uFF09","roof","kawara","#c7633d",{roughness:.85}),"roof-tile-brown":Nt("\u6D0B\u74E6\uFF08\u8336\uFF09","roof","kawara","#8b5b45",{roughness:.85}),"roof-tile-green":Nt("\u6D0B\u74E6\uFF08\u7DD1\uFF09","roof","kawara","#4f6b58",{roughness:.8}),"roof-slate":Nt("\u30B9\u30EC\u30FC\u30C8","roof","slate","#5a5e63"),"roof-metal":Nt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u6FC3\u3044\u30B0\u30EC\u30FC\uFF09","roof","roofMetal","#5b5f63",{roughness:.5,metalness:.4}),"roof-metal-green":Nt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u7DD1\u9752\uFF09","roof","roofMetal","#5f8a7c",{roughness:.55,metalness:.35}),"roof-metal-red":Nt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u8D64\u3055\u3073\u8272\uFF09","roof","roofMetal","#8e4d3c",{roughness:.6,metalness:.3}),"roof-concrete":Nt("\u5C4B\u4E0A\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF09","roof","concrete","#9da09b")},ae=(n,t,e,i,s,o={})=>({label:n,door:t,w:e,h:i,s,...o}),cn={"door-entrance":ae("\u7384\u95A2\u30C9\u30A2",!0,.92,2.33,0),"door-oyako":ae("\u89AA\u5B50\u30C9\u30A2",!0,1.24,2.33,0),"door-flat":ae("\u96C6\u5408\u4F4F\u5B85\u306E\u7384\u95A2\u30C9\u30A2\uFF08\u92FC\u88FD\uFF09",!0,.85,2,0),"door-wood":ae("\u6728\u306E\u30C9\u30A2",!0,.78,2,0),"door-white":ae("\u767D\u3044\u30C9\u30A2",!0,.75,2,0),"door-glass":ae("\u30AC\u30E9\u30B9\u30C9\u30A2",!0,.8,2,0,{glass:!0}),"door-steel":ae("\u30B9\u30C1\u30FC\u30EB\u30C9\u30A2",!0,.78,2,0),"door-fold":ae("\u6D74\u5BA4\u306E\u6298\u308C\u6238",!0,.72,2,.05),"door-key":ae("\u9375\u4ED8\u304D\u306E\u30C9\u30A2",!0,.78,2,0,{lock:!0}),"door-slide":ae("\u5F15\u304D\u6238",!0,.8,2,0,{slide:!0}),"door-fusuma":ae("\u3075\u3059\u307E",!0,1.69,1.8,0,{slide:!0}),"door-shoji":ae("\u969C\u5B50",!0,1.69,1.8,0,{slide:!0}),"door-closet":ae("\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u306E\u6298\u308C\u6238",!0,1.6,2,0),"door-double":ae("\u4E21\u958B\u304D\u30C9\u30A2",!0,1.5,2.1,0),"door-auto":ae("\u81EA\u52D5\u30C9\u30A2",!0,1.6,2.3,0,{slide:!0,glass:!0}),"door-terrace":ae("\u6383\u304D\u51FA\u3057\u7A93\uFF08\u51FA\u5165\u308A\u3067\u304D\u308B\uFF09",!0,1.65,2,.03,{slide:!0,glass:!0}),"lift-door":ae("\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u6249",!0,.8,2.1,0,{slide:!0,lift:!0}),"door-platform":ae("\u30DB\u30FC\u30E0\u30C9\u30A2",!0,1.4,2.1,0,{slide:!0,glass:!0,platform:!0}),arch:ae("\u958B\u53E3\uFF08\u30C9\u30A2\u306A\u3057\uFF09",!0,1.2,2,0,{open:!0}),"win-slide":ae("\u5F15\u304D\u9055\u3044\u7A93",!1,1.65,1.1,.9),"win-wide":ae("\u6A2A\u9577\u306E\u7A93",!1,1.65,.9,1.1),"win-full":ae("\u5E8A\u307E\u3067\u306E\u7A93",!1,1.65,1.97,.03),"win-small":ae("\u5C0F\u7A93",!1,.6,.5,1.5),"win-high":ae("\u9AD8\u7A93",!1,.74,.5,1.5),"win-tall":ae("\u7E26\u3059\u3079\u308A\u51FA\u3057\u7A93",!1,.4,1.1,.9),"win-slit":ae("\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.34,1.5,.5),"win-fixed":ae("\u306F\u3081\u6BBA\u3057\u7A93",!1,1,1,1),"win-lattice":ae("\u9762\u683C\u5B50\u3064\u304D\u306E\u7A93",!1,1.19,.9,1.1),"win-shutter":ae("\u3088\u308D\u3044\u6238\u3064\u304D\u306E\u7A93",!1,1,1.2,.8),"win-steel":ae("\u30B9\u30C1\u30FC\u30EB\u30B5\u30C3\u30B7",!1,1.69,1.2,.8),"win-round":ae("\u4E38\u7A93",!1,.8,.8,1.1,{round:!0}),"win-shop":ae("\u30B7\u30E7\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",!1,1.6,2.2,.2),"win-curtain":ae("\u30AB\u30FC\u30C6\u30F3\u30A6\u30A9\u30FC\u30EB",!1,1.7,2.6,.75),"win-ribbon":ae("\u6A2A\u9023\u7A93",!1,1.7,1.5,.9),"win-hood":ae("\u3072\u3055\u3057\u4ED8\u304D\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.5,1.5,.6),"win-block":ae("\u30AC\u30E9\u30B9\u30D6\u30ED\u30C3\u30AF",!1,.8,1.6,.4)},go={white:["\u767D","#f7f5ee"],black:["\u9ED2","#23272a"],silver:["\u30B7\u30EB\u30D0\u30FC","#b9bdb9"],bronze:["\u30D6\u30ED\u30F3\u30BA","#5b4a3c"],wood:["\u6728","#8a6746"],"wood-dark":["\u6FC3\u3044\u6728","#4a3a30"],sage:["\u82E5\u8349","#9fb3ae"],green:["\u6DF1\u7DD1","#3f6b52"],navy:["\u7D3A","#34506b"],red:["\u8D64","#8a3b34"],steel:["\u30B9\u30C1\u30FC\u30EB","#8ea1a8"],yellow:["\u9EC4","#d9a441"]},Yt=(n,t,e,i,s,o={})=>({label:n,group:t,w:e,d:i,h:s,solid:!0,...o}),Qe={sofa:Yt("\u30BD\u30D5\u30A1","living",1.5,.72,.78),armchair:Yt("\u3072\u3068\u308A\u639B\u3051\u30BD\u30D5\u30A1","living",.78,.75,.78),"table-low":Yt("\u30ED\u30FC\u30C6\u30FC\u30D6\u30EB","living",.95,.55,.38),tv:Yt("\u30C6\u30EC\u30D3","living",1.3,.38,1.15),shelf:Yt("\u672C\u68DA","living",.9,.3,1.8),cabinet:Yt("\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8","living",.9,.4,.85),rug:Yt("\u30E9\u30B0","living",1.8,1.2,.02,{solid:!1}),plant:Yt("\u89B3\u8449\u690D\u7269","living",.45,.45,1.2),lamp:Yt("\u30D5\u30ED\u30A2\u30E9\u30F3\u30D7","living",.35,.35,1.5),"ceiling-light":Yt("\u5929\u4E95\u306E\u7167\u660E","living",.5,.5,.12,{solid:!1,ceiling:!0}),"table-dining":Yt("\u30C0\u30A4\u30CB\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB","dining",1.4,.8,.72),chair:Yt("\u3044\u3059","dining",.42,.45,.85),kitchen:Yt("\u30AD\u30C3\u30C1\u30F3","dining",1.5,.6,.86),fridge:Yt("\u51B7\u8535\u5EAB","dining",.62,.66,1.76),bed:Yt("\u30D9\u30C3\u30C9","bedroom",1,1.95,.5),"bed-double":Yt("\u30C0\u30D6\u30EB\u30D9\u30C3\u30C9","bedroom",1.5,1.95,.5),desk:Yt("\u673A","bedroom",1.1,.55,.72),wardrobe:Yt("\u6D0B\u670D\u3060\u3093\u3059","bedroom",1,.55,1.9),tansu:Yt("\u305F\u3093\u3059","japanese",.9,.45,1.3),cupboard:Yt("\u98DF\u5668\u68DA","dining",.9,.45,1.85),"mail-boxes":Yt("\u96C6\u5408\u90F5\u4FBF\u53D7\u3051","entrance",1.2,.3,1.3),car:Yt("\u81EA\u52D5\u8ECA","garden",1.48,3.4,1.55),chabudai:Yt("\u3061\u3083\u3076\u53F0","japanese",1,1,.32),zabuton:Yt("\u3056\u3076\u3068\u3093","japanese",.5,.5,.08,{solid:!1}),futon:Yt("\u3075\u3068\u3093","japanese",1,1.9,.14,{solid:!1}),toilet:Yt("\u30C8\u30A4\u30EC","water",.42,.7,.8),bathtub:Yt("\u6D74\u69FD","water",.75,1.4,.56),washbasin:Yt("\u6D17\u9762\u53F0","water",.6,.45,.85),washer:Yt("\u6D17\u6FEF\u6A5F","water",.6,.6,.9),"shoe-box":Yt("\u3052\u305F\u7BB1","entrance",1,.34,.9),boxes:Yt("\u6BB5\u30DC\u30FC\u30EB\u7BB1","entrance",.8,.7,1),rack:Yt("\u30CF\u30F3\u30AC\u30FC\u30E9\u30C3\u30AF","shop",1.3,.4,1.7),counter:Yt("\u30AB\u30A6\u30F3\u30BF\u30FC","shop",1.6,.6,1),mirror:Yt("\u59FF\u898B","shop",.9,.12,1.9),"cafe-table":Yt("\u30AB\u30D5\u30A7\u30C6\u30FC\u30D6\u30EB","shop",.8,.8,.72),stool:Yt("\u30B9\u30C4\u30FC\u30EB","shop",.36,.36,.46),"office-desk":Yt("\u30AA\u30D5\u30A3\u30B9\u30C7\u30B9\u30AF","office",1.2,.62,1.2),"office-chair":Yt("\u30AA\u30D5\u30A3\u30B9\u30C1\u30A7\u30A2","office",.5,.5,.9),bench:Yt("\u30D9\u30F3\u30C1","garden",1.6,.5,.8),planter:Yt("\u30D7\u30E9\u30F3\u30BF\u30FC","garden",.9,.35,.5),hedge:Yt("\u751F\u3051\u57A3","garden",1.6,.5,1.1),fence:Yt("\u30D5\u30A7\u30F3\u30B9","garden",1.6,.08,1),tree:Yt("\u5EAD\u6728","garden",.7,.7,3.2),mailbox:Yt("\u30DD\u30B9\u30C8","garden",.3,.3,1.1),bicycle:Yt("\u81EA\u8EE2\u8ECA","garden",.5,1.7,1),vending:Yt("\u81EA\u52D5\u8CA9\u58F2\u6A5F","garden",1,.7,1.85),"ac-unit":Yt("\u5BA4\u5916\u6A5F","garden",.86,.34,.65),"gate-post":Yt("\u6A5F\u80FD\u9580\u67F1","garden",.3,.16,1.45),lantern:Yt("\u77F3\u706F\u7C60","garden",.5,.5,1.3),"ticket-gate":Yt("\u81EA\u52D5\u6539\u672D\u6A5F","station",.19,1.5,1.03),"ticket-gate-clear":Yt("\u81EA\u52D5\u6539\u672D\u6A5F\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\uFF09","station",.19,1.5,1.03),"ticket-machine":Yt("\u5238\u58F2\u6A5F","station",.85,.5,1.75),"platform-bench":Yt("\u30DB\u30FC\u30E0\u306E\u30D9\u30F3\u30C1","station",1.8,.5,.8),"tactile-line":Yt("\u70B9\u5B57\u30D6\u30ED\u30C3\u30AF\uFF08\u30DB\u30FC\u30E0\uFF09","station",.3,2.4,.01,{solid:!1})};var Ld={flat:"\u9678\u5C4B\u6839\uFF08\u5E73\u3089\uFF09",hip:"\u5BC4\u68DF",gable:"\u5207\u59BB",shed:"\u7247\u6D41\u308C"};function ws(n,t){let e=n.storeys[t];if(!e)return null;let i=Number.isInteger(e.like)&&n.storeys[e.like]&&!Number.isInteger(n.storeys[e.like].like)?n.storeys[e.like]:e;return{h:e.h??i.h??2.7,walls:i.walls??[],openings:i.openings??[],rooms:i.rooms??[],items:i.items??[],stairs:i.stairs??[],decor:i.decor??[],like:i===e?void 0:e.like,steps:i.steps??[],lifts:i.lifts??[]}}function xr(n,t){let e=n.base??.3;for(let i=0;i<t;i++)e+=n.storeys[i]?.h??n.storeys[n.storeys[i]?.like]?.h??2.7;return e}var Dd=n=>xr(n,n.storeys.length),Ud=n=>Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1]);function Nh(n){let t=n.map(a=>{let c=Ud(a);return{length:c,d:c>1e-6?[(a.b[0]-a.a[0])/c,(a.b[1]-a.a[1])/c]:[1,0],cuts:[0,c]}});for(let a=0;a<n.length;a++){let c=t[a];if(!(c.length<.01))for(let l=0;l<n.length;l++){let f=t[l];if(a===l||f.length<.01)continue;for(let _ of[n[l].a,n[l].b]){let g=_[0]-n[a].a[0],S=_[1]-n[a].a[1],M=g*c.d[0]+S*c.d[1];Math.abs(S*c.d[0]-g*c.d[1])<=Mi&&M>Mi&&M<c.length-Mi&&c.cuts.push(M)}if(l<a)continue;let h=c.d[0]*f.d[1]-c.d[1]*f.d[0];if(Math.abs(h)<1e-6)continue;let u=n[l].a[0]-n[a].a[0],d=n[l].a[1]-n[a].a[1],p=(u*f.d[1]-d*f.d[0])/h,y=(u*c.d[1]-d*c.d[0])/h;p>Mi&&p<c.length-Mi&&y>Mi&&y<f.length-Mi&&(c.cuts.push(p),f.cuts.push(y))}}let e=[],i=new Map,s=Mi*2,o=(a,c)=>{let l=Math.floor(a/s),f=Math.floor(c/s);for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++)for(let y of i.get(`${l+p},${f+d}`)??[])if(Math.hypot(e[y].x-a,e[y].z-c)<=Mi)return y;let h=e.push({x:a,z:c})-1,u=`${l},${f}`;return i.has(u)||i.set(u,[]),i.get(u).push(h),h},r=[];return n.forEach((a,c)=>{let l=t[c];if(l.length<.01)return;let f=[...new Set(l.cuts.map(d=>Math.round(d*1e3)/1e3))].sort((d,p)=>d-p),h=f[0],u=o(a.a[0]+l.d[0]*h,a.a[1]+l.d[1]*h);for(let d of f.slice(1)){if(d-h<.01)continue;let p=o(a.a[0]+l.d[0]*d,a.a[1]+l.d[1]*d);u!==p&&r.push({wall:c,from:h,to:d,a:u,b:p}),h=d,u=p}}),{nodes:e,pieces:r}}function Q_(n,t=Nh(n)){let{nodes:e,pieces:i}=t,s=e.map(()=>[]);i.forEach((a,c)=>{let l=e[a.a],f=e[a.b],h=f.x-l.x,u=f.z-l.z,d=Math.hypot(h,u)||1,p=(n[a.wall].t??.12)/2;a.d=[h/d,u/d],s[a.a].push({piece:c,end:"a",d:a.d,half:p,angle:Math.atan2(u,h)}),s[a.b].push({piece:c,end:"b",d:[-a.d[0],-a.d[1]],half:p,angle:Math.atan2(-u,-h)})});let o=i.map(()=>({a:{},b:{}})),r=[];return e.forEach((a,c)=>{let l=s[c].sort((h,u)=>h.angle-u.angle),f=(h,u)=>[a.x-u*h.d[1]*h.half,a.z+u*h.d[0]*h.half];if(l.length===1){let[h]=l,u=f(h,-1),d=f(h,1);o[h.piece][h.end]={cw:u,ccw:d},r.push({from:d,to:u,piece:h.piece,normal:[-h.d[0],-h.d[1]]});return}l.forEach((h,u)=>{let d=l[(u+1)%l.length],p=f(h,1),y=f(d,-1),_=h.d[0]*d.d[1]-h.d[1]*d.d[0],g=null;if(Math.abs(_)>.001){let S=((y[0]-p[0])*d.d[1]-(y[1]-p[1])*d.d[0])/_,M=[p[0]+h.d[0]*S,p[1]+h.d[1]*S];Math.hypot(M[0]-a.x,M[1]-a.z)<=4*Math.max(h.half,d.half)+.02&&(g=M)}if(o[h.piece][h.end].ccw=g??p,o[d.piece][d.end].cw=g??y,!g&&Math.hypot(p[0]-y[0],p[1]-y[1])>1e-4){let S=(p[0]+y[0])/2-a.x,M=(p[1]+y[1])/2-a.z,v=Math.hypot(S,M)||1;r.push({from:p,to:y,piece:h.half>=d.half?h.piece:d.piece,normal:[S/v,M/v]})}})}),{nodes:e,pieces:i.map((a,c)=>{let{a:l,b:f}=o[c],h=n[a.wall],u=y=>(y[0]-h.a[0])*a.d[0]+(y[1]-h.a[1])*a.d[1],d=[e[a.a].x,e[a.a].z],p=[e[a.b].x,e[a.b].z];return{wall:a.wall,from:a.from,to:a.to,a:a.a,b:a.b,d:a.d,start:d,end:p,l:[l.cw,f.ccw],r:[l.ccw,f.cw],span:{l:[u(l.cw),u(f.ccw)],r:[u(l.ccw),u(f.cw)]},poly:[l.cw,d,l.ccw,f.cw,p,f.ccw]}}),caps:r}}function ty(n){let t=0;for(let e=0;e<n.length;e++){let[i,s]=n[e],[o,r]=n[(e+1)%n.length];t+=i*r-o*s}return t/2}function Xi(n,t,e){let i=!1;for(let s=0,o=n.length-1;s<n.length;o=s++){let[r,a]=n[s],[c,l]=n[o];a>e!=l>e&&t<(c-r)*(e-a)/(l-a)+r&&(i=!i)}return i}function ey(n,t=Nh(n)){let{nodes:e,pieces:i}=t,s=e.map(()=>[]);i.forEach((h,u)=>{let d=e[h.a],p=e[h.b];s[h.a].push({half:u*2,angle:Math.atan2(p.z-d.z,p.x-d.x)}),s[h.b].push({half:u*2+1,angle:Math.atan2(d.z-p.z,d.x-p.x)})});let o=new Map;for(let h of s)h.sort((u,d)=>u.angle-d.angle),h.forEach((u,d)=>o.set(u.half^1,h[(d-1+h.length)%h.length].half));let r=e.map((h,u)=>u),a=h=>r[h]===h?h:r[h]=a(r[h]);for(let h of i)r[a(h.a)]=a(h.b);let c=new Set,l=[],f=[];for(let h=0;h<i.length*2;h++){if(c.has(h))continue;let u=[];for(let _=h;!c.has(_)&&_!==void 0;_=o.get(_))c.add(_),u.push(_);let d=u.map(_=>{let g=i[_>>1],S=e[_&1?g.b:g.a];return[S.x,S.z]}),p=ty(d),y=a(i[u[0]>>1].a);p>=.2?l.push({points:d,area:p,holes:[],part:y,walls:[...new Set(u.map(_=>i[_>>1].wall))]}):p<=-.2&&f.push({points:d.reverse(),area:-p,part:y})}for(let h of f){let[u,d]=h.points[0],p=l.filter(y=>y.part!==h.part&&Xi(y.points,u,d)).sort((y,_)=>y.area-_.area)[0];p&&(p.holes.push(h.points),p.area-=h.area)}for(let h of l)h.at=ny(h.points,h.holes);return l}function wi(n,t,e){return Xi(n.points,t,e)&&!n.holes?.some(i=>Xi(i,t,e))}function ny(n,t=[]){let e=(o,r)=>Xi(n,o,r)&&!t.some(a=>Xi(a,o,r)),i=n.reduce((o,r)=>o+r[0],0)/n.length,s=n.reduce((o,r)=>o+r[1],0)/n.length;if(e(i,s))return[i,s];for(let o=0;o<n.length;o++){let[r,a]=n[o],[c,l]=n[(o+1)%n.length],f=Math.hypot(c-r,l-a);if(!(f<.3))for(let h of[1,-1]){let u=(r+c)/2-h*(l-a)/f*.15,d=(a+l)/2+h*(c-r)/f*.15;if(e(u,d))return[u,d]}}return[i,s]}var Id=new WeakMap;function Sc(n,t,e){let i=(n.r??0)*Math.PI/180,s=Math.cos(i),o=Math.sin(i),r=(t-n.x)*s-(e-n.z)*o,a=(t-n.x)*o+(e-n.z)*s;return Math.abs(r)>n.w/2||Math.abs(a)>n.l/2?-1:(n.l/2-a)/n.l}function qn(n,t){let e=Id.get(n);if(e||Id.set(n,e=new Map),e.has(t))return e.get(t);let i=ws(n,t);if(!i)return null;let s=Nh(i.walls),o=p=>!!p.rail||(p.h??i.h)<i.h-.01,r={nodes:[],pieces:[],caps:[]};for(let p of[y=>!o(y),o]){let y=i.walls.map((S,M)=>({wall:S,index:M})).filter(({wall:S})=>!S.open&&p(S)),_=Q_(y.map(({wall:S})=>S)),g=r.pieces.length;r.nodes.push(..._.nodes),r.pieces.push(..._.pieces.map(S=>({...S,wall:y[S.wall].index}))),r.caps.push(..._.caps.map(S=>({...S,piece:S.piece+g})))}let a=ey(i.walls,s).map(p=>{let y=i.rooms.find(_=>wi(p,_.at[0],_.at[1]));return{...p,f:y?.f??"floor-oak",c:y?.c??"ceil-white",n:y?.n??"",code:y?.code,open:!!y?.open,y:y?.y??0,unit:y?.unit??0,shaft:!!y?.shaft}}),c=(p,y)=>a.find(_=>wi(_,p,y))??null,l=(p,y)=>a.some(_=>!_.open&&wi(_,p,y)),f=(p,y)=>a.some(_=>wi(_,p,y)),h=(p,y)=>{for(let g of i.steps){let S=Sc(g,p,y);if(S>=0)return(g.from??0)+g.rise*S}let _=c(p,y);return _?_.y:null},u=i.walls.map(p=>{let y=Ud(p)||1,_=[(p.b[0]-p.a[0])/y,(p.b[1]-p.a[1])/y],g=(p.t??.12)/2+.07,S=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2];return{length:y,d:_,l:l(S[0]+_[1]*g,S[1]-_[0]*g),r:l(S[0]-_[1]*g,S[1]+_[0]*g)}}),d={storey:i,graph:s,outlines:r,rooms:a,sides:u,indoors:l,floored:f,roomAt:c,heightAt:h,base:xr(n,t)};return e.set(t,d),d}function Ss(n,t,e){let i=n.yard;if(!i)return 0;for(let o of i.steps??[]){let r=Sc(o,t,e);if(r>=0)return(o.from??0)+o.rise*r}let s=0;for(let o of i.pads??[])t>=o.x0&&t<=o.x1&&e>=o.z0&&e<=o.z1&&(s=Math.max(s,o.y));return s}function Nd(n,t,e,i,s=0){let o=s*Math.PI/180,r=Math.cos(o),a=Math.sin(o);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([c,l])=>[n+c*e/2*r+l*i/2*a,t-c*e/2*a+l*i/2*r])}var zd=n=>!!cn[n.k]?.door,Od=n=>!!cn[n.k]?.lift,zh=(n,t,e)=>`${n}:${Math.round(t*10)}:${Math.round(e*10)}`,Lh=new WeakMap;function iy(n){return Lh.has(n)||Lh.set(n,n.storeys.some(t=>(t.rooms??[]).some(e=>e.unit&&e.unit!=="0"))),Lh.get(n)}var sy=1.9,oy=.18;function _r(n,t){let e=qn(n,t);if(!e)return{segments:[],boxes:[],stairs:[],lifts:[],doors:[],rooms:[]};let{storey:i,sides:s,rooms:o}=e,r=[],a=[],c=[],l=iy(n),f=y=>!y||y.open?null:l?y.unit&&y.unit!=="0"?`${t}:${y.unit}`:null:"main";i.walls.forEach((y,_)=>{if(y.open)return;let{length:g,d:S}=s[_],M=(y.t??.12)/2+.07,v=x=>{let m=y.a[0]+S[0]*x.at,w=y.a[1]+S[1]*x.at;return!(e.indoors(m+S[1]*M,w-S[0]*M)&&e.indoors(m-S[1]*M,w+S[0]*M))},E=i.openings.filter(x=>x.w===_&&zd(x));for(let x of E){let m=y.a[0]+S[0]*x.at,w=y.a[1]+S[1]*x.at,T=x.ww/2,P={ax:m-S[0]*T,az:w-S[1]*T,bx:m+S[0]*T,bz:w+S[1]*T,r:(y.t??.12)/2};if(Od(x))a.push({x:m,z:w,d:S,half:T,r:P.r});else if(!cn[x.k].open){let L=[e.roomAt(m+S[1]*M,w-S[0]*M),e.roomAt(m-S[1]*M,w+S[0]*M)].map(f),U=L[0]!==L[1]?L[0]??L[1]:cn[x.k].lock?L[0]:null;c.push({key:zh(t,m,w),x:m,z:w,lock:U,auto:x.k==="door-auto",kind:x.k,gate:P,outside:v(x)})}}let C=E.map(x=>[x.at-x.ww/2,x.at+x.ww/2]).sort((x,m)=>x[0]-m[0]),A=0,b=x=>{x-A>.02&&r.push({ax:y.a[0]+S[0]*A,az:y.a[1]+S[1]*A,bx:y.a[0]+S[0]*x,bz:y.a[1]+S[1]*x,r:(y.t??.12)/2})};for(let[x,m]of C)b(x),A=Math.max(A,m);b(g)});let h=i.items.filter(y=>Qe[y.k]?.solid).map(y=>({x:y.x,z:y.z,w:Qe[y.k].w,d:Qe[y.k].d,r:y.r??0}));if(t===0&&n.yard){for(let y of n.yard.bounds??[])r.push({ax:y.a[0],az:y.a[1],bx:y.b[0],bz:y.b[1],r:(y.t??.12)/2});for(let y of n.yard.items??[])Qe[y.k]?.solid&&!y.hung&&h.push({x:y.x,z:y.z,w:Qe[y.k].w,d:Qe[y.k].d,r:y.r??0})}let u=[],d=y=>{for(let _=1;_<y.length;_++)r.push({ax:y[_-1][0],az:y[_-1][1],bx:y[_][0],bz:y[_][1],r:.03})};for(let[y,_]of[[t,!0],[t-1,!1]]){let g=ws(n,y);if(!(!g||y+1>=n.storeys.length))for(let S of g.stairs){let M=ri(S,g.h);if(_){let v=A=>e.heightAt(...M.centre(A))??0,E=null,C=A=>{E!==null&&(d(M.side(E,A,1)),d(M.side(E,A,-1)),E>1e-6&&d([M.edge(E,1),M.edge(E,-1)]),d([M.edge(A,1),M.edge(A,-1)]),E=null)};for(let A of M.pieces){let b=[[A.from+.05,A.y0],[A.to-.05,A.y1]].some(([x,m])=>m-oy-v(x)<sy);b&&E===null&&(E=A.from),b||C(A.from)}C(M.total)}else d(M.side(0,M.total,1)),d(M.side(0,M.total,-1)),d([M.edge(0,1),M.edge(0,-1)]);u.push({path:M.path,foot:M.foot,head:M.head,up:_,from:y,rise:g.h,gate:_?M.foot:M.head})}}let p=i.lifts.map(y=>{let _=a.map(S=>({...S,gap:Math.hypot(S.x-y.x,S.z-y.z)})).sort((S,M)=>S.gap-M.gap)[0];if(!_||_.gap>3)return null;let g=(_.x-y.x)*_.d[1]-(_.z-y.z)*_.d[0]>=0?1:-1;return{x:y.x,z:y.z,w:y.w,d:y.d,r:y.r??0,at:[_.x,_.z],out:[g*_.d[1],-g*_.d[0]],half:_.half,gate:{ax:_.x-_.d[0]*_.half,az:_.z-_.d[1]*_.half,bx:_.x+_.d[0]*_.half,bz:_.z+_.d[1]*_.half,r:_.r}}}).filter(Boolean);return{segments:r,boxes:h,stairs:u,lifts:p,doors:c,rooms:o}}function Ec(n){let t={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let e=0;e<n.storeys.length;e++)for(let i of ws(n,e).walls)for(let[s,o]of[i.a,i.b])t.x0=Math.min(t.x0,s),t.x1=Math.max(t.x1,s),t.z0=Math.min(t.z0,o),t.z1=Math.max(t.z1,o);return Number.isFinite(t.x0)?t:{x0:0,z0:0,x1:0,z1:0}}function $i(n){let t=qn(n,0);return t?t.storey.openings.filter(e=>zd(e)&&!Od(e)&&!t.storey.walls[e.w]?.rail).map(e=>{let i=t.storey.walls[e.w],s=t.sides[e.w];if(i.open||s.l===s.r)return null;let o=s.l?-1:1,r=[o*s.d[1],-o*s.d[0]],a=i.a[0]+s.d[0]*e.at,c=i.a[1]+s.d[1]*e.at,l=[a+r[0]*.9,c+r[1]*.9];return t.floored(...l)?null:{x:a,z:c,normal:r,width:e.ww,kind:e.k,outside:l,opening:e}}).filter(Boolean):[]}var ry=40,ay=32,Fd=64,cy=new Float32Array(Fd*4*4),Tc=new Fi(cy,Fd,4,rn,On);Tc.magFilter=Ze;Tc.minFilter=Ze;Tc.needsUpdate=!0;var Fh=new Fi(new Uint8Array([104,132,84,255]),1,1);Fh.colorSpace=Ee;Fh.needsUpdate=!0;var ly={glassScene:{value:Tc},glassCount:{value:new $t(0,0)},glassSun:{value:new H(.45,.64,.62)},glassGround:{value:Fh},glassGroundBox:{value:new we(0,0,1,1)}},hy=`
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
  for ( int i = 0; i < ${ry}; i ++ ) {
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
  for ( int i = 0; i < ${ay}; i ++ ) {
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
`,fy=`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`,uy={near:`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,far:`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,inner:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,rail:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`};function dy(n){let t=n==="far",e=new on({color:t?"#0b0e10":"#141b1f",roughness:.04,metalness:0,side:je,transparent:!t,depthWrite:t,premultipliedAlpha:!t,forceSinglePass:!0});return n==="inner"&&(e.defines.GLASS_INDOORS=""),(n==="near"||n==="far")&&(e.defines.GLASS_WINDOW=""),e.onBeforeCompile=i=>{Object.assign(i.uniforms,ly),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`);let s=Qt.lights_fragment_maps.replace("radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );","radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );");i.fragmentShader=i.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
${hy}`).replace("#include <lights_fragment_maps>",s).replace("#include <opaque_fragment>",`${fy}
${uy[n]}`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=()=>`machi-glass-${n}`,e}var Oh=new Map;function Fn(n="near"){return Oh.has(n)||Oh.set(n,dy(n)),Oh.get(n)}var Bd=new H(0,1,0),Ac=new H,Rc=new H,ai=new H,Cc=new H,Bh=new H,le=class{constructor(){this.parts=new Map,this.matrix=null}part(t){let e=this.parts.get(t);return e||(e={positions:[],normals:[],uvs:[],indices:[]},this.parts.set(t,e)),e}at(t,e,i,s,o){let r=this.matrix,a=new Te().makeRotationY(s).setPosition(t,e,i);return this.matrix=r?r.clone().multiply(a):a,o(this),this.matrix=r,this}face(t,e){this.matrix&&(e=e.map(o=>o.clone().applyMatrix4(this.matrix)));let i=this.part(t);if(Ac.subVectors(e[1],e[0]),Rc.subVectors(e[2],e[0]),ai.crossVectors(Ac,Rc),ai.lengthSq()<1e-12)return this;ai.normalize(),Math.abs(ai.y)>.999?(Cc.set(1,0,0),Bh.set(0,0,1)):(Cc.crossVectors(Bd,ai).normalize(),Bh.crossVectors(ai,Cc));let s=i.positions.length/3;for(let o of e)i.positions.push(o.x,o.y,o.z),i.normals.push(ai.x,ai.y,ai.z),i.uvs.push(o.dot(Cc),o.dot(Bh));for(let o=1;o<e.length-1;o++)i.indices.push(s,s+o,s+o+1);return this}quad(t,e,i,s,o,r){return Ac.subVectors(i,e),Rc.subVectors(s,e),this.face(t,ai.crossVectors(Ac,Rc).dot(r)>=0?[e,i,s,o]:[o,s,i,e])}shape(t,e,i,s,o=!0){let r=e.map(([u,d])=>new $t(u,d)),a=i.map(u=>u.map(([d,p])=>new $t(d,p))),c=[...r,...a.flat()],l=this.part(t),f=l.positions.length/3,h=new H;for(let u of c)h.set(u.x,s,u.y),this.matrix&&h.applyMatrix4(this.matrix),l.positions.push(h.x,h.y,h.z),l.normals.push(0,o?1:-1,0),l.uvs.push(h.x,h.z);for(let[u,d,p]of ir.triangulateShape(r,a))(c[d].x-c[u].x)*(c[p].y-c[u].y)-(c[d].y-c[u].y)*(c[p].x-c[u].x)<0===o?l.indices.push(f+u,f+d,f+p):l.indices.push(f+u,f+p,f+d);return this}box(t,e,i,s,o,r,a,c=0){let l=Math.cos(c),f=Math.sin(c),h=(d,p,y)=>new H(e+d*o/2*l+y*a/2*f,i+p*r/2,s-d*o/2*f+y*a/2*l),u=[-1,1].map(d=>[-1,1].map(p=>[-1,1].map(y=>h(d,p,y))));return this.face(t,[u[1][0][0],u[1][1][0],u[1][1][1],u[1][0][1]]),this.face(t,[u[0][0][1],u[0][1][1],u[0][1][0],u[0][0][0]]),this.face(t,[u[0][1][0],u[0][1][1],u[1][1][1],u[1][1][0]]),this.face(t,[u[0][0][1],u[0][0][0],u[1][0][0],u[1][0][1]]),this.face(t,[u[1][0][1],u[1][1][1],u[0][1][1],u[0][0][1]]),this.face(t,[u[0][0][0],u[0][1][0],u[1][1][0],u[1][0][0]]),this}bar(t,e,i,s,o=s){let r=i.clone().sub(e),a=r.length();if(a<1e-5)return this;r.divideScalar(a);let c=new H().crossVectors(r,Bd);c.lengthSq()<1e-8&&c.set(1,0,0),c.normalize().multiplyScalar(s/2);let l=new H().crossVectors(c,r).normalize().multiplyScalar(o/2),f=d=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,y])=>d.clone().addScaledVector(c,p).addScaledVector(l,y)),h=f(e),u=f(i);for(let d=0;d<4;d++){let p=(d+1)%4;this.quad(t,h[d],h[p],u[p],u[d],h[d].clone().add(h[p]).multiplyScalar(.5).sub(e))}return this.quad(t,h[0],h[1],h[2],h[3],r.clone().negate()),this.quad(t,u[0],u[1],u[2],u[3],r),this}slab(t,e,i,s,o,r){return this.face(t,[new H(e,r,i),new H(e,r,o),new H(s,r,o),new H(s,r,i)]),this}cylinder(t,e,i,s,o,r,a=10,c=o){let l=(u,d)=>Array.from({length:a},(p,y)=>{let _=y/a*Math.PI*2;return new H(e+Math.cos(_)*u,d,s+Math.sin(_)*u)}),f=l(o,i),h=l(c,i+r);for(let u=0;u<a;u++){let d=(u+1)%a;this.face(t,[f[u],h[u],h[d],f[d]])}return c>.001&&this.face(t,[...h].reverse()),this}get empty(){return[...this.parts.values()].every(t=>!t.indices.length)}build(t,{cast:e=!0,receive:i=!0,where:s=""}={}){let o=[];for(let[r,a]of this.parts){if(!a.indices.length)continue;let c=wy(r,s),l=new Ye;l.setAttribute("position",new Ne(a.positions,3)),l.setAttribute("normal",new Ne(a.normals,3)),l.setAttribute("uv",new Ne(a.uvs,2)),l.setIndex(a.indices);let f=new pe(l,c);f.castShadow=e&&!c.transparent,f.receiveShadow=i,t.add(f),o.push(f)}return o}},py=new An({transparent:!0,depthWrite:!1,side:je,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`}),Es=class{constructor(){this.positions=[],this.shades=[],this.indices=[]}strip(t,e,i,s,o,r=0){let a=this.positions.length/3;for(let[c,l]of[[t,o],[e,o],[i,r],[s,r]])this.positions.push(c.x,c.y,c.z),this.shades.push(Math.sqrt(Math.max(0,l)));return this.indices.push(a,a+1,a+2,a,a+2,a+3),this}ring(t,e,i,s,o,r,a=14){let c=this.positions.length/3;for(let l=0;l<a;l++){let f=l/a*Math.PI*2;for(let[d,p]of[[s,r],[o,0]])this.positions.push(t+Math.cos(f)*d,e,i+Math.sin(f)*d),this.shades.push(Math.sqrt(p));let h=c+l*2,u=c+(l+1)%a*2;this.indices.push(h,u,u+1,h,u+1,h+1)}return this}around(t,e,i,s,o,r,a,c,l=0){let f=Math.cos(r),h=Math.sin(r),u=(p,y,_)=>{let g=p*(s/2+_),S=y*(o/2+_);return new H(t+g*f+S*h,e,i-g*h+S*f)},d=[[-1,-1],[1,-1],[1,1],[-1,1]];return l>0&&this.strip(u(-1,-1,0),u(1,-1,0),u(1,1,0),u(-1,1,0),l,l),d.forEach(([p,y],_)=>{let[g,S]=d[(_+1)%4];this.strip(u(p,y,0),u(g,S,0),u(g,S,a),u(p,y,a),c)}),this}get empty(){return!this.indices.length}build(t){if(!this.indices.length)return null;let e=new Ye;e.setAttribute("position",new Ne(this.positions,3)),e.setAttribute("shade",new Ne(this.shades,1)),e.setIndex(this.indices);let i=new pe(e,py);return i.renderOrder=-1,t.add(i),i}};function ci(n){n.traverse(t=>{(t.isMesh||t.isLine||t.isSprite)&&(t.geometry?.dispose(),t.userData.ownMaterial&&(t.material.map?.dispose(),t.material.dispose()))}),n.clear()}function Vh(n){let t=document.createElement("canvas");return t.width=n,t.height=n,t}function Pc(n,t,e,i,s){let o=Math.imul((n%e+e)%e,374761393)^Math.imul((t%i+i)%i,668265263)^Math.imul(s+1,1274126177);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}var kh=new Map;function my(n,t,e,i,s){let o=`${n}|${t}|${e}|${i}|${s}`;if(kh.has(o))return kh.get(o);let r=new Float32Array(n*n),a=1,c=0;for(let l=0;l<i;l++){let f=Math.max(1,Math.round(t*2**l)),h=Math.max(1,Math.round(e*2**l));for(let u=0;u<n;u++){let d=u/n*h,p=Math.floor(d),y=d-p,_=y*y*(3-2*y);for(let g=0;g<n;g++){let S=g/n*f,M=Math.floor(S),v=S-M,E=v*v*(3-2*v),C=Pc(M,p,f,h,s+l*7),A=Pc(M+1,p,f,h,s+l*7),b=Pc(M,p+1,f,h,s+l*7),x=Pc(M+1,p+1,f,h,s+l*7);r[u*n+g]+=(C+(A-C)*E+(b-C)*_+(C-A-b+x)*E*_)*a}}c+=a,a*=.5}for(let l=0;l<r.length;l++)r[l]/=c;return kh.set(o,r),r}var kd=n=>{let t=Math.round(Math.min(1,Math.max(0,n))*255);return`rgb(${t},${t},${t})`},Zi=([n,t,e],i=0)=>`rgb(${Math.round(n+i)},${Math.round(t+i)},${Math.round(e+i)})`,Gh=class{constructor(t){this.size=t,this.colour=Vh(t).getContext("2d",{willReadFrequently:!0}),this.height=Vh(t).getContext("2d",{willReadFrequently:!0}),this.passes=[],this.random=1}roll(){return this.random++,Cn(this.random,this.size,7)}fill(t,e=.5){return this.colour.fillStyle=Array.isArray(t)?Zi(t):t,this.colour.fillRect(0,0,this.size,this.size),this.height.fillStyle=kd(e),this.height.fillRect(0,0,this.size,this.size),this}both(t,e,i){for(let[s,o]of[[this.colour,t],[this.height,e==null?null:kd(e)]])if(o!=null){s.fillStyle=o,s.strokeStyle=o;for(let r of[0,-this.size,this.size])for(let a of[0,-this.size,this.size])s.save(),s.translate(r,a),i(s),s.restore()}return this}rect(t,e,i,s,o,r){return this.both(Array.isArray(o)?Zi(o):o,r,a=>a.fillRect(t,e,i,s))}line(t,e,i,s,o,r,a){return this.both(r,a,c=>{c.lineWidth=o,c.beginPath(),c.moveTo(t,e),c.lineTo(i,s),c.stroke()})}dot(t,e,i,s,o){return this.both(s,o,r=>{r.beginPath(),r.arc(t,e,i,0,Math.PI*2),r.fill()})}speckle(t,[e,i],s,o){for(let r=0;r<t;r++)this.dot(this.roll()*this.size,this.roll()*this.size,e+this.roll()*(i-e),s[Math.floor(this.roll()*s.length)],typeof o=="function"?o(this.roll()):o);return this}streaks(t,e,{width:i=4,length:s=.6}={}){for(let o=0;o<t;o++){let r=this.roll()*this.size,a=this.roll()*this.size,c=(.2+this.roll()*s)*this.size,l=1+this.roll()*i;for(let f of[0,-this.size,this.size])for(let h of[0,-this.size]){let u=this.colour.createLinearGradient(0,a+h,0,a+h+c);u.addColorStop(0,e),u.addColorStop(1,"rgba(0,0,0,0)"),this.colour.fillStyle=u,this.colour.fillRect(r+f,a+h,l,c)}}return this}cracks(t,e,{width:i=1.2,level:s=.15,steps:o=26}={}){for(let r=0;r<t;r++){let a=this.roll()*this.size,c=this.roll()*this.size,l=this.roll()*Math.PI*2;for(let f=0;f<o;f++){l+=(this.roll()-.5)*1.1;let h=a+Math.cos(l)*this.size*.022,u=c+Math.sin(l)*this.size*.022;this.line(a,c,h,u,i*(.5+this.roll()),e,s),a=h,c=u}}return this}noise({cells:t=8,cellsY:e=t,octaves:i=3,colour:s=0,height:o=0,seed:r=1,tint:a=[1,1,1],ridge:c=!1}){return this.passes.push({cells:t,cellsY:e,octaves:i,colour:s,height:o,seed:r,tint:a,ridge:c}),this}finish({metres:t,depth:e=.002,rough:i=[.9,.9],shade:s=.7}){let{size:o}=this,r=this.colour.getImageData(0,0,o,o),a=this.height.getImageData(0,0,o,o).data,c=new Float32Array(o*o);for(let y=0;y<c.length;y++)c[y]=a[y*4]/255;for(let y of this.passes){let _=my(o,y.cells,y.cellsY,y.octaves,y.seed%3);for(let g=0;g<c.length;g++){let S=(y.ridge?1-Math.abs(_[g]*2-1):_[g])-.5;y.colour&&(r.data[g*4]+=S*y.colour*y.tint[0],r.data[g*4+1]+=S*y.colour*y.tint[1],r.data[g*4+2]+=S*y.colour*y.tint[2]),y.height&&(c[g]=Math.min(1,Math.max(0,c[g]+S*y.height)))}}this.colour.putImageData(r,0,0);let l=e*o/t*1.6,f=new Uint8Array(o*o*4),h=new Uint8Array(o*o*4);for(let y=0;y<o;y++){let _=(y-1+o)%o*o,g=(y+1)%o*o,S=(o-1-y)*o;for(let M=0;M<o;M++){let v=c[y*o+M],E=(c[y*o+(M+1)%o]-c[y*o+(M-1+o)%o])/2*l,C=(c[g+M]-c[_+M])/2*l,A=Math.hypot(E,C,1),b=(S+M)*4;f[b]=(-E/A*.5+.5)*255,f[b+1]=(C/A*.5+.5)*255,f[b+2]=(1/A*.5+.5)*255,f[b+3]=v*255,h[b]=(s+(1-s)*v)*255,h[b+1]=(i[0]+(i[1]-i[0])*v)*255,h[b+2]=255,h[b+3]=255}}let u=y=>(y.wrapS=En,y.wrapT=En,y.repeat.set(1/t,1/t),y.anisotropy=Wh,y),d=y=>{let _=new Fi(y,o,o,rn);return _.generateMipmaps=!0,_.minFilter=ii,_.magFilter=Tn,_.needsUpdate=!0,u(_)},p=u(new dn(this.colour.canvas));return p.colorSpace=Ee,{map:p,normalMap:d(f),surfaceMap:d(h),metres:t,depth:e}}};function Ki(n,t,e,{joint:i,jointLevel:s=.2,gap:o=2,stagger:r=!0,palette:a,tone:c=16,level:l=.85,bevel:f=0}){let{size:h}=n;n.fill(i,s);let u=h/t,d=h/e;for(let p=0;p<e;p++){let y=r&&p%2?u/2:0;for(let _=0;_<t;_++){let g=a[Math.floor(n.roll()*a.length)],S=(n.roll()-.5)*c,M=_*u+y+o/2,v=p*d+o/2;n.rect(M,v,u-o,d-o,Zi(g,S),l+(n.roll()-.5)*.12),f&&(n.rect(M,v,u-o,f,"rgba(255,255,255,0.16)",null),n.rect(M,v+d-o-f,u-o,f,"rgba(0,0,0,0.2)",l-.25))}}}var Hd={mortar:{size:512,metres:2.4,depth:.0035,rough:[.97,.85],relief:!0,paint(n){n.fill("#ece9e0").streaks(24,"rgba(92,88,74,0.11)").streaks(7,"rgba(58,70,58,0.09)",{width:10,length:.45}).cracks(3,"rgba(70,66,58,0.32)",{width:.8}).speckle(420,[.4,1.3],["rgba(120,115,102,0.28)","rgba(255,252,245,0.32)"],t=>.35+t*.45).noise({cells:6,octaves:4,colour:14,height:.16,seed:2,ridge:!0}).noise({cells:120,octaves:2,colour:11,height:.48,seed:3})}},stucco:{size:512,metres:2,depth:.0055,rough:[.97,.84],relief:!0,paint(n){n.fill("#f1eee7").noise({cells:10,octaves:4,colour:14,height:.58,seed:4,ridge:!0}).speckle(350,[.5,1.5],["rgba(110,104,92,0.22)","rgba(255,255,250,0.28)"],null).noise({cells:120,octaves:2,colour:7,height:.2,seed:5}).noise({cells:3,octaves:2,colour:9,seed:6})}},plaster:{size:256,metres:3,depth:.001,rough:[.9,.8],paint(n){n.fill("#f2f1ed").noise({cells:5,octaves:3,colour:7,height:.2,seed:7}).noise({cells:90,octaves:1,colour:4,height:.1,seed:8})}},concrete:{size:512,metres:3.6,depth:.0045,rough:[.96,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#b0aea6");for(let e=0;e<4;e++)for(let i=0;i<2;i++){let s=(n.roll()-.5)*10;n.rect(e*t/4,i*t/2,t/4,t/2,Zi([176,174,166],s),.52+(n.roll()-.5)*.06)}n.streaks(22,"rgba(66,68,66,0.16)",{width:7,length:.72});for(let e=0;e<4;e++)n.rect(e*t/4-1.5,0,3,t,"rgba(48,48,46,0.55)",.12),n.rect(e*t/4+1.5,0,1.5,t,"rgba(240,238,232,0.24)",.65);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(48,48,46,0.55)",.12),n.rect(0,e*t/2+1.5,t,1.5,"rgba(240,238,232,0.22)",.65);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let s=e*t/4+t/8,o=i*t/4+t/8;n.dot(s,o,4.8,"rgba(130,128,122,0.5)",.35),n.dot(s,o,3.2,"rgba(32,32,32,0.78)",.02)}n.speckle(360,[.5,1.8],["rgba(38,38,38,0.42)","rgba(74,74,70,0.35)","rgba(225,223,216,0.25)"],.12).noise({cells:5,octaves:4,colour:28,height:.1,seed:9}).noise({cells:150,octaves:1,colour:12,height:.24,seed:10})}},concreteStained:{size:512,metres:3.6,depth:.005,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#878681").streaks(54,"rgba(26,28,26,0.26)",{width:9,length:.75}).streaks(9,"rgba(120,70,35,0.26)",{width:5,length:.5}).streaks(10,"rgba(225,225,215,0.2)",{width:7,length:.35});for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(28,28,28,0.6)",.08);for(let e=0;e<2;e++)n.rect(0,e*t/2-2,t,4,"rgba(28,28,28,0.6)",.08);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.8,"rgba(18,18,18,0.8)",0);n.cracks(5,"rgba(24,24,24,0.55)").speckle(380,[.6,2.2],["rgba(30,30,30,0.45)","rgba(150,150,140,0.3)"],.1).noise({cells:4,octaves:4,colour:44,height:.1,seed:11}).noise({cells:150,octaves:1,colour:14,height:.26,seed:12})}},brick:{size:512,metres:1.76,depth:.009,rough:[.98,.86],relief:!0,paint(n){Ki(n,8,16,{joint:"#b6b0a4",gap:4,tone:26,bevel:2,palette:[[152,82,62],[166,96,70],[138,72,56],[176,108,84],[146,90,72]]}),n.speckle(500,[.6,1.8],["rgba(60,30,24,0.3)","rgba(210,150,120,0.25)"],null).noise({cells:70,octaves:2,colour:16,height:.2,seed:13}).noise({cells:4,octaves:3,colour:16,seed:14})}},brickWhite:{size:512,metres:1.76,depth:.008,rough:[.97,.8],relief:!0,paint(n){Ki(n,8,16,{joint:"#cfcbc2",gap:4,tone:10,bevel:2,palette:[[240,238,232],[232,230,224],[244,242,238],[226,222,214]]}),n.noise({cells:70,octaves:2,colour:9,height:.2,seed:15}).noise({cells:4,octaves:3,colour:10,seed:16})}},tile:{size:512,metres:.9,depth:.0045,rough:[.9,.24],relief:!0,paint(n){Ki(n,9,18,{joint:"#868178",jointLevel:.2,gap:3.4,tone:14,bevel:1.8,palette:[[244,243,238],[235,234,229],[248,247,244],[228,226,220],[239,236,228]]}),n.streaks(8,"rgba(80,76,68,0.08)",{width:5,length:.45}).noise({cells:4,octaves:3,colour:9,seed:17}).noise({cells:90,octaves:1,colour:5,height:.06,seed:18})}},siding:{size:512,metres:1.44,depth:.0075,rough:[.9,.68],relief:!0,paint(n){let{size:t}=n;n.fill("#efefeb");for(let e=0;e<8;e++){let i=e*t/8,s=(n.roll()-.5)*7;for(let o=0;o<16;o++)n.rect(0,i+o*t/128,t,t/128+.5,Zi([239,239,235],s),.34+o/15*.56);n.rect(0,i+t/8-3.2,t,3.2,"rgba(0,0,0,0.34)",.04),n.rect(0,i,t,2.2,"rgba(255,255,255,0.38)",null)}n.rect(t*.5-1.2,0,2.4,t,"rgba(90,88,82,0.28)",.16),n.noise({cells:6,cellsY:96,octaves:2,colour:10,height:.08,seed:19})}},planks:{size:512,metres:1.2,depth:.005,rough:[.95,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#e9d9c3");for(let e=0;e<8;e++){let i=e*t/8;if(n.rect(i,0,t/8,t,`rgba(${n.roll()>.5?"255,244,224":"70,46,24"},${.05+n.roll()*.13})`,.72+n.roll()*.14),n.rect(i-1.5,0,3,t,"rgba(34,22,12,0.75)",.05),n.roll()>.6){let s=i+t/16+(n.roll()-.5)*t/20,o=n.roll()*t;for(let r=4;r>0;r--)n.dot(s,o,r*2.4,`rgba(70,44,24,${.12+(4-r)*.09})`,.55)}}n.noise({cells:90,cellsY:3,octaves:2,colour:30,height:.16,seed:20,tint:[1,.86,.66]}).noise({cells:22,cellsY:2,octaves:2,colour:18,height:.08,seed:21,ridge:!0,tint:[1,.86,.66]})}},wood:{size:512,metres:1.1,depth:.0012,rough:[.82,.6],paint(n){n.fill("#96704e").noise({cells:70,cellsY:2,octaves:3,colour:34,height:.3,seed:22,tint:[1,.82,.6]}).noise({cells:14,cellsY:1,octaves:2,colour:22,seed:23,ridge:!0,tint:[1,.82,.6]}).noise({cells:3,octaves:2,colour:14,seed:24})}},metalPanel:{size:512,metres:2.4,depth:.004,rough:[.7,.42],paint(n){let{size:t}=n;n.fill("#e8e8e8",.8);for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(0,0,0,0.5)",.1),n.rect(e*t/4+2,0,2,t,"rgba(255,255,255,0.35)",null);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(0,0,0,0.42)",.15);n.noise({cells:3,octaves:3,colour:9,height:.05,seed:25}).noise({cells:2,cellsY:60,octaves:1,colour:5,seed:26})}},stone:{size:512,metres:2,depth:.014,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#77736b",.15);let e=0;for(let i of[.22,.3,.2,.28]){let s=n.roll()*40,o=s+t;for(;s<o-1;){let r=Math.min(o-s,t*(.14+n.roll()*.2)),a=(n.roll()-.5)*34,c=n.roll()>.6?[176,168,150]:[164,162,156];n.rect(s+2.5,e*t+2.5,r-5,i*t-5,Zi(c,a),.7+n.roll()*.25),s+=r}e+=i}n.noise({cells:26,octaves:4,colour:26,height:.4,seed:27}).noise({cells:4,octaves:2,colour:12,seed:28})}},wallpaper:{size:256,metres:.8,depth:6e-4,rough:[.95,.88],paint(n){n.fill("#f4f2ec").noise({cells:128,cellsY:20,octaves:1,colour:5,height:.5,seed:29}).noise({cells:20,cellsY:128,octaves:1,colour:5,height:.5,seed:30}).noise({cells:3,octaves:2,colour:4,seed:31})}},wallpaperStripe:{size:256,metres:.64,depth:6e-4,rough:[.95,.88],paint(n){let{size:t}=n;n.fill("#f3efe4");for(let e=0;e<4;e++)n.rect(e*t/4,0,t/8,t,"#cfdbe3",.55),n.rect(e*t/4+t/8-2,0,2,t,"#b9982f",.6);n.noise({cells:128,cellsY:20,octaves:1,colour:5,height:.4,seed:32})}},floorboards:{size:512,metres:1.44,depth:.0016,rough:[.7,.36],paint(n){let{size:t}=n;n.fill("#e3c79d",.8);for(let e=0;e<12;e++){let i=e*t/12,s=n.roll()*t;for(let o=0;o<3;o++){let r=t*(.22+n.roll()*.3);n.rect(i,s,t/12,r,`rgba(${n.roll()>.5?"255,240,214":"96,60,28"},${.04+n.roll()*.16})`,null),n.rect(i,s,t/12,1.6,"rgba(60,36,18,0.6)",.2),s+=r}n.rect(i-.8,0,1.6,t,"rgba(60,36,18,0.62)",.15)}n.noise({cells:110,cellsY:3,octaves:2,colour:22,height:.12,seed:33,tint:[1,.84,.62]}).noise({cells:26,cellsY:2,octaves:2,colour:12,seed:34,ridge:!0,tint:[1,.84,.62]})}},tatami:{size:512,metres:1.82,depth:.0015,rough:[.95,.82],paint(n){let{size:t}=n;n.fill("#b9bb86");for(let e=0;e<t;e+=3)n.rect(0,e,t,1.4,`rgba(86,96,48,${.1+n.roll()*.14})`,.25);for(let e of[0,t/2])n.rect(e-7,0,14,t,"#2f3a2c",.9);n.noise({cells:4,octaves:3,colour:10,seed:35,tint:[1,1,.5]}).noise({cells:160,cellsY:6,octaves:1,colour:8,height:.2,seed:36})}},bathTile:{size:256,metres:.8,depth:.0025,rough:[.9,.14],paint(n){Ki(n,8,8,{joint:"#a9b0b2",jointLevel:.25,gap:3,stagger:!1,tone:6,bevel:1.5,palette:[[246,248,248],[240,243,244],[250,251,251]]})}},checker:{size:256,metres:1.2,depth:.002,rough:[.9,.22],paint(n){let{size:t}=n;n.fill("#8a8a88",.3);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.rect(i*t/4+1,e*t/4+1,t/4-2,t/4-2,(e+i)%2?"#3f4042":"#f1eee7",.85);n.noise({cells:6,octaves:3,colour:8,seed:37})}},pavers:{size:512,metres:1.6,depth:.007,rough:[.98,.82],relief:!0,paint(n){Ki(n,4,4,{joint:"#7f7a70",jointLevel:.15,gap:6,stagger:!1,tone:16,bevel:3,palette:[[226,220,206],[214,208,194],[234,230,218],[206,200,186]]}),n.noise({cells:40,octaves:3,colour:16,height:.22,seed:38}).noise({cells:3,octaves:3,colour:14,seed:39})}},carpet:{size:256,metres:1,depth:.003,rough:[1,.96],paint(n){n.fill("#cfcfcf").noise({cells:128,octaves:1,colour:40,height:.7,seed:40}).noise({cells:5,octaves:3,colour:10,seed:41})}},kawara:{size:512,metres:1.5,depth:.032,rough:[.76,.42],relief:!0,paint(n){let{size:t}=n,e=6,i=5;n.fill("#cfcfcf");for(let s=0;s<i;s++){let o=s*t/i;for(let r=0;r<e;r++){let a=r*t/e,c=(n.roll()-.5)*24;for(let l=0;l<16;l++){let f=Math.sin(l/15*Math.PI*1.25-.25),h=f>.55?8:0;n.rect(a+l*t/e/16,o,t/e/16+.6,t/i,Zi([206,206,208],c+f*28+h),.22+Math.max(0,f)*.64)}n.rect(a,o+t/i-5.5,t/e,5.5,"rgba(0,0,0,0.44)",.02),n.rect(a,o,t/e,3.2,"rgba(255,255,255,0.26)",null)}}n.noise({cells:60,octaves:2,colour:10,height:.05,seed:42}).noise({cells:3,octaves:2,colour:12,seed:43})}},slate:{size:512,metres:1.2,depth:.009,rough:[.94,.66],relief:!0,paint(n){let{size:t}=n;n.fill("#b9b9b9",.5);for(let e=0;e<4;e++)for(let i=-1;i<6;i++){let s=i*t/6+(e%2?t/12:0),o=e*t/4,r=(n.roll()-.5)*32;for(let a=0;a<8;a++)n.rect(s+1,o+a*t/32,t/6-2,t/32+.5,Zi([196,196,196],r),.28+a/7*.62);n.rect(s,o+t/4-4.2,t/6,4.2,"rgba(0,0,0,0.45)",.04),n.rect(s,o+t/4-6,t/6,1.8,"rgba(255,255,255,0.18)",null),n.rect(s-1,o,2,t/4,"rgba(0,0,0,0.32)",.1)}n.noise({cells:50,octaves:3,colour:15,height:.09,seed:44})}},roofMetal:{size:256,metres:.9,depth:.024,rough:[.58,.36],relief:!0,paint(n){let{size:t}=n;n.fill("#d6d6d6",.3);for(let e=0;e<4;e++){let i=e*t/4;n.rect(i-5,0,10,t,"rgba(0,0,0,0.24)",.65),n.rect(i-2,0,4,t,"rgba(255,255,255,0.45)",1)}n.noise({cells:2,cellsY:40,octaves:1,colour:6,seed:45}).noise({cells:4,octaves:3,colour:8,height:.04,seed:46})}},asphalt:{size:512,metres:4,depth:.0045,rough:[.96,.82],relief:!0,paint(n){n.fill("#45474b").speckle(2100,[.5,1.7],["rgba(182,182,178,0.52)","rgba(14,14,16,0.52)","rgba(128,124,114,0.48)","rgba(210,206,196,0.35)"],t=>.28+t*.64).cracks(5,"rgba(16,16,18,0.72)",{width:1.5,level:.05,steps:34}).noise({cells:5,octaves:4,colour:19,height:.1,seed:47}).noise({cells:180,octaves:1,colour:17,height:.42,seed:48})}},sidewalk:{size:512,metres:2.4,depth:.0055,rough:[.96,.8],relief:!0,paint(n){Ki(n,6,6,{joint:"#686660",jointLevel:.14,gap:4,stagger:!0,tone:16,bevel:2.2,palette:[[194,191,183],[182,179,171],[202,199,191],[174,171,163],[188,183,173]]}),n.speckle(420,[.5,1.7],["rgba(56,56,52,0.32)","rgba(236,235,228,0.28)"],null).noise({cells:64,octaves:2,colour:15,height:.22,seed:49}).noise({cells:3,octaves:3,colour:16,seed:50})}},grass:{size:512,metres:5.5,depth:.024,rough:[.98,.86],relief:!0,paint(n){let{size:t}=n;n.fill("#566f3e",.35),n.speckle(480,[2.5,8],["rgba(68,58,42,0.22)","rgba(54,78,38,0.28)","rgba(98,118,58,0.24)"],e=>.25+e*.3);for(let e=0;e<7200;e++){let i=n.roll(),s=n.roll()*t,o=n.roll()*t,r=(n.roll()-.5)*7,a=-2.5-n.roll()*6.5;n.line(s,o,s+r,o+a,.9+n.roll()*.7,i>.65?"rgba(138,162,88,0.52)":i>.3?"rgba(54,84,40,0.56)":"rgba(122,118,66,0.42)",.42+i*.52)}n.speckle(650,[.7,1.9],["rgba(154,176,98,0.45)","rgba(38,60,28,0.45)","rgba(196,192,138,0.28)"],e=>.55+e*.4),n.noise({cells:5,octaves:4,colour:32,height:.24,seed:51,tint:[.9,1,.55]}).noise({cells:28,octaves:2,colour:16,height:.14,seed:52,tint:[1,1,.35]})}},terrainGround:{size:512,metres:6.4,depth:.028,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#e6e6e2",.44),n.speckle(620,[2,7.5],["rgba(186,184,176,0.35)","rgba(246,245,240,0.32)","rgba(162,158,148,0.28)"],e=>.28+e*.36);for(let e=0;e<6400;e++){let i=n.roll(),s=n.roll()*t,o=n.roll()*t,r=(n.roll()-.5)*2.2,a=3+n.roll()*5.5;n.line(s,o,s+Math.sin(r)*a,o-Math.cos(r)*a,1,i>.5?"rgba(255,255,250,0.36)":"rgba(164,162,154,0.38)",.4+i*.52)}n.speckle(1100,[.6,2.1],["rgba(140,136,128,0.36)","rgba(255,255,252,0.38)"],e=>.35+e*.6).noise({cells:6,octaves:4,colour:22,height:.28,seed:65,ridge:!0}).noise({cells:36,octaves:2,colour:14,height:.22,seed:66})}},dirt:{size:512,metres:4.5,depth:.016,rough:[.99,.88],relief:!0,paint(n){n.fill("#867358",.42).speckle(1400,[.6,3.2],["rgba(56,46,34,0.44)","rgba(186,170,142,0.38)","rgba(112,94,72,0.42)","rgba(210,196,172,0.26)"],t=>.22+t*.72).cracks(6,"rgba(48,38,28,0.38)",{width:1.1,level:.14,steps:22}).noise({cells:5,octaves:4,colour:32,height:.34,seed:53,ridge:!0}).noise({cells:96,octaves:2,colour:16,height:.32,seed:54})}},gravel:{size:512,metres:1.8,depth:.016,rough:[.98,.84],relief:!0,paint(n){n.fill("#737068",.14).speckle(2200,[1.6,5.4],["#b9b5aa","#9e9a90","#c9c5ba","#8a877e","#a8a094","#68645c","#d6d1c6"],t=>.42+t*.56).speckle(900,[.6,1.8],["rgba(36,34,30,0.48)","rgba(240,236,228,0.34)"],t=>.3+t*.6).noise({cells:84,octaves:2,colour:14,height:.14,seed:55})}},revetment:{size:512,metres:2.8,depth:.016,rough:[.96,.78],relief:!0,paint(n){Ki(n,8,8,{joint:"#52524c",jointLevel:.1,gap:4.5,stagger:!0,tone:20,bevel:2.4,palette:[[166,165,158],[154,154,146],[176,174,166],[146,148,138],[160,158,150]]}),n.streaks(32,"rgba(44,58,38,0.24)",{width:9,length:.65}).streaks(18,"rgba(32,34,30,0.22)",{width:6,length:.75}).speckle(520,[.6,2],["rgba(42,46,38,0.38)","rgba(220,218,210,0.26)"],.25).noise({cells:48,octaves:2,colour:16,height:.22,seed:67})}},cblock:{size:512,metres:1.6,depth:.006,rough:[.98,.9],relief:!0,paint(n){Ki(n,4,8,{joint:"#a7a59d",jointLevel:.25,gap:3,tone:12,bevel:1,level:.86,palette:[[176,174,167],[168,167,161],[184,182,175],[162,161,156],[172,168,160]]}),n.speckle(900,[.4,1.4],["rgba(70,70,66,0.35)","rgba(210,208,200,0.25)"],.7).noise({cells:40,octaves:2,colour:12,height:.2,seed:61}).noise({cells:3,octaves:3,colour:14,seed:62,tint:[1,1,.9]})}},hedge:{size:512,metres:1.2,depth:.05,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#22381c",.15);let e=[[78,112,52],[92,128,60],[64,98,44],[104,136,66],[58,86,40],[118,146,70]];for(let i=0;i<3400;i++){let s=n.roll()*t,o=n.roll()*t,r=5+n.roll()*7,a=n.roll()*Math.PI,[c,l,f]=e[Math.floor(n.roll()*e.length)],h=.8+n.roll()*.4;n.both(`rgb(${Math.round(c*h)},${Math.round(l*h)},${Math.round(f*h)})`,.45+n.roll()*.55,u=>{u.beginPath(),u.ellipse(s,o,r,r*.45,a,0,Math.PI*2),u.fill()})}n.noise({cells:6,octaves:3,colour:26,height:.35,seed:63}).noise({cells:2,octaves:2,colour:14,seed:64,tint:[1,1,.6]})}},bark:{size:256,metres:1,depth:.03,rough:[1,.9],relief:!0,paint(n){n.fill("#6f5d4b").noise({cells:16,cellsY:2,octaves:3,colour:60,height:.9,seed:56,ridge:!0}).noise({cells:60,cellsY:20,octaves:2,colour:20,height:.15,seed:57}).noise({cells:3,octaves:2,colour:16,seed:58,tint:[.6,1,.6]})}}},Hh=new Map,Wh=4,yr=1;function gy(n){if(!Hh.has(n)){let t=Hd[n],e=new Gh(t.size);t.paint(e),Hh.set(n,{...e.finish(t),relief:!!t.relief})}return Hh.get(n)}var xy={value:new H(1.32,1.27,1.17)},_y=`
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
`,yy=`
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
`,vy=`
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
`;function by(n){n.userData.parallax={value:0},n.onBeforeCompile=t=>{t.uniforms.parallaxDepth=n.userData.parallax,t.uniforms.machiRoom=xy,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMachiWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>
${_y}`).replace("#include <map_fragment>",`vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${Qt.map_fragment.replaceAll("vMapUv","( vMapUv + parallaxUv )")}
        ${yy}`).replace("#include <roughnessmap_fragment>",`${Qt.roughnessmap_fragment.replaceAll("vRoughnessMapUv","( vRoughnessMapUv + parallaxUv )")}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`).replace("#include <normal_fragment_maps>",Qt.normal_fragment_maps.replaceAll("texture2D( normalMap, vNormalMapUv )","texture2D( normalMap, vNormalMapUv + parallaxUv )")).replace("#include <lights_fragment_end>",`${vy}
#include <lights_fragment_end>`).replace("#include <aomap_fragment>",Qt.aomap_fragment.replaceAll("vAoMapUv","( vAoMapUv + parallaxUv )"))},n.customProgramCacheKey=()=>"machi-surface"}function My(n){let{set:t,wants:e,recipe:i}=n.userData;if(!i)return;let s=(o,r)=>{r?n.defines[o]="":delete n.defines[o]};if(s("MACHI_WEAR",yr>=1),t){n.normalMap=yr>=1?t.normalMap:null,n.roughnessMap=yr>=1?t.surfaceMap:null,n.aoMap=yr>=1?t.surfaceMap:null;let o=yr>=2&&t.relief&&e;s("MACHI_PARALLAX",o),n.userData.parallax.value=o?t.depth/t.metres*1.5:0}n.needsUpdate=!0}var Si=new Map;function xt(n,t="#ffffff",{roughness:e,metalness:i=0,twoSided:s=!1,relief:o=!0,where:r=""}={}){let a=`${n}|${t}|${e}|${i}|${s}|${o}|${r}`;if(!Si.has(a)){let c=Object.hasOwn(Hd,n),l={color:c?t:n,roughness:e??(c?1:.85),metalness:i};s&&(l.side=je);let f=new on(l);f.userData={recipe:[n,t,{roughness:e,metalness:i,twoSided:s,relief:o}],wants:o},c&&(f.userData.set=gy(n),f.map=f.userData.set.map,f.aoMapIntensity=.85),r==="out"&&(f.defines.MACHI_OUTDOOR=""),r==="in"&&(f.defines.MACHI_INDOOR=""),by(f),My(f),Si.set(a,f)}return Si.get(a)}function wy(n,t){let e=n.userData?.recipe;return!e||!t?n:xt(e[0],e[1],{...e[2],where:t})}function qe(n){let t=qi[n]??qi["wp-white"];return xt(t.texture,t.tint,{roughness:t.roughness,metalness:t.metalness,twoSided:t.group==="roof"})}function vr(n){let t=(go[n]??go.white)[1];if(n==="wood"||n==="wood-dark")return xt("wood",n==="wood"?"#c9a37a":"#7a5a44");let e=["black","silver","bronze","steel"].includes(n);return xt(t,"#ffffff",{roughness:e?.45:.6,metalness:e?.6:.05})}var xo=(n="#2c3a44")=>{let t=`glass|${n}`;return Si.has(t)||Si.set(t,new on({color:n,roughness:.05,metalness:1,envMapIntensity:1.35})),Si.get(t)},_e=(n,t=1.6)=>{let e=`glow|${n}|${t}`;return Si.has(e)||Si.set(e,new on({color:n,emissive:n,emissiveIntensity:t,roughness:.6})),Si.get(e)};function Vd(n=256){let t=Vh(n),e=t.getContext("2d"),i=e.createImageData(n,n),s=[[1,2,.92,.3],[3,1,.64,1.7],[2,5,.46,4.1],[5,3,.34,2.6],[7,6,.24,5.2],[4,9,.18,.8],[11,8,.12,3.4],[8,13,.1,1.9]];for(let r=0;r<n;r++)for(let a=0;a<n;a++){let c=0,l=0;for(let[u,d,p,y]of s){let _=Math.cos((a*u+r*d)/n*Math.PI*2+y)*p;c+=_*u,l+=_*d}let f=Math.hypot(c*.24,l*.24,1),h=(r*n+a)*4;i.data[h]=(-c*.24/f*.5+.5)*255,i.data[h+1]=(-l*.24/f*.5+.5)*255,i.data[h+2]=(1/f*.5+.5)*255,i.data[h+3]=255}e.putImageData(i,0,0);let o=new dn(t);return o.wrapS=En,o.wrapT=En,o.anisotropy=Wh,o}function br(n,{color:t="#30383c",background:e="",font:i="700 64px system-ui, sans-serif",padding:s=18,border:o=""}={}){let r=document.createElement("canvas"),a=r.getContext("2d");a.font=i;let c=a.measureText(n),l=Math.ceil((c.actualBoundingBoxAscent||52)+(c.actualBoundingBoxDescent||14))+s*2;r.width=Math.ceil(c.width)+s*2,r.height=l,a.font=i,e&&(a.fillStyle=e,a.beginPath(),a.roundRect(0,0,r.width,r.height,Math.min(r.height/2,30)),a.fill(),o&&(a.strokeStyle=o,a.lineWidth=4,a.stroke())),a.fillStyle=t,a.textBaseline="middle",a.textAlign="center",a.fillText(n,r.width/2,r.height/2+2);let f=new dn(r);return f.colorSpace=Ee,f.anisotropy=Wh,{map:f,aspect:r.width/r.height}}var me=(n="#b08a62")=>xt("wood",n),Ft=(n,t=.6,e=0)=>xt(n,"#ffffff",{roughness:t,metalness:e}),Pn=()=>Ft("#f4f2ec",.5),ln=n=>xt("carpet",n),$n=()=>Ft("#70777a",.45,.7),$e=()=>Ft("#3d4447",.6,.5),Be=()=>Ft("#2b3035",.5),Xh=()=>Ft("#15181a",.2),Ei=["#7c93a8","#a88b7c","#8aa184","#b3899a","#c2a56b","#6f7f93"],Ic=["#dda995","#9fba98","#dfb184","#ab9fbd","#d69698","#647991"],Gd=["#a8574e","#56789a","#d9b25a","#5f8a6b","#8a6aa0","#e2ddcf"];function Mr(n,t,e,i,s,o=.05){for(let r of[-1,1])for(let a of[-1,1])n.box(t,r*(e/2-o),s/2,a*(i/2-o),o,s,o)}function Sy(n,t,e,i,s,o){let r=Ft("#1b1c1e",.9),a=Ft("#b9bcbd",.4,.8),c=(h,u)=>Array.from({length:12},(d,p)=>{let y=p/12*Math.PI*2;return new H(t+h*o/2,e+Math.sin(y)*u,i+Math.cos(y)*u)}),[l,f]=[c(-1,s),c(1,s)];for(let h=0;h<12;h++){let u=(h+1)%12;n.quad(r,l[h],l[u],f[u],f[h],new H(0,l[h].y+l[u].y-2*e,l[h].z+l[u].z-2*i))}for(let h of[-1,1]){let u=(d,p)=>{let y=d[1].clone().sub(d[0]).cross(d[2].clone().sub(d[0])).x*h;n.face(p,y>=0?d:[...d].reverse())};u(c(h,s),r),u(c(h*1.02,s*.6),a)}}var Lc=null;function Ey(){if(Lc)return Lc;let n=document.createElement("canvas");n.width=64,n.height=64;let t=n.getContext("2d");t.fillStyle="#d9a91c",t.fillRect(0,0,64,64);let e=t.createRadialGradient(28,28,2,32,32,20);e.addColorStop(0,"#f6d35a"),e.addColorStop(.75,"#e4b52a"),e.addColorStop(1,"#b8890f"),t.fillStyle=e,t.beginPath(),t.arc(32,32,19,0,Math.PI*2),t.fill();let i=new dn(n);return i.colorSpace=Ee,i.wrapS=i.wrapT=En,i.repeat.set(1/.075,1/.075),i.anisotropy=4,Lc=new on({map:i,roughness:.7}),Lc}function Wd(n){n.box(Ft("#2e3236",.6),0,.05,0,.17,.1,1.46)}function Xd(n){n.box(Ft("#1c2023",.28,.3),0,.985,0,.19,.09,1.5);for(let t of[-1,1])n.box(Ft("#2a2f33",.3,.3),0,1.038,t*.5,.16,.016,.24).box(_e("#2f7df0",1.2),0,1.048,t*.5,.11,.004,.15).box(Ft("#e6c229",.5),0,1.032,t*.68,.11,.006,.03).box(_e("#cfe6d8",.6),0,1.034,t*.27,.12,.004,.12)}var Ty={sofa(n,t){let e=ln(t(Ei));n.box(e,0,.21,.04,1.5,.3,.64).box(e,0,.5,-.28,1.5,.56,.16);for(let i of[-.68,.68])n.box(e,i,.3,.04,.14,.56,.64);for(let i of[-.31,.31])n.box(ln(t(Ei,1)),i,.41,.06,.58,.12,.52);Mr(n,$e(),1.44,.66,.07,.04)},armchair(n,t){let e=ln(t(Ei));n.box(e,0,.22,.04,.78,.3,.66).box(e,0,.52,-.3,.78,.56,.14);for(let i of[-.33,.33])n.box(e,i,.3,.04,.12,.54,.66)},"table-low"(n){n.box(me(),0,.355,0,.95,.05,.55),Mr(n,me("#8f6a48"),.95,.55,.33)},tv(n){n.box(me("#8f6a48"),0,.21,0,1.3,.42,.38).box(Xh(),0,.82,0,1.06,.62,.04).box(Be(),0,.47,0,.3,.1,.16).box(_e("#3b5a78",.35),0,.82,.022,.98,.54,.004)},shelf(n){let t=me("#9a7650");for(let e of[-.43,.43])n.box(t,e,.9,0,.04,1.8,.3);n.box(t,0,.9,-.14,.86,1.8,.02);for(let e=0;e<=5;e++)n.box(t,0,.02+e*.352,0,.86,.04,.3);for(let e=0;e<5;e++){let i=-.4;for(let s=0;i<.34;s++){let o=.035+Cn(e,s,3)*.04,r=.2+Cn(e,s,5)*.1;n.box(Ft(Gd[Math.floor(Cn(e,s)*Gd.length)],.8),i+o/2,.04+e*.352+r/2,.01,o,r,.2),i+=o+.004,Cn(e,s,9)>.86&&(i+=.1)}}},cabinet(n){n.box(me("#a8825a"),0,.425,0,.9,.85,.4).box(me("#8f6a48"),0,.86,0,.94,.03,.44);for(let t of[-.22,.22])n.box(me("#b89064"),t,.42,.203,.42,.74,.01).box($e(),t*.2,.46,.215,.02,.1,.02)},rug(n,t){n.box(ln(t(Ei)),0,.01,0,1.8,.02,1.2).box(ln(t(Ei,2)),0,.012,0,1.5,.02,.9)},plant(n){n.cylinder(Ft("#b9845e",.9),0,0,0,.15,.3,10,.19).cylinder(Ft("#4a3a2c",1),0,.28,0,.17,.02,10);let t=Ft("#4f7d4a",.9);for(let e=0;e<7;e++){let i=e/7*Math.PI*2;n.box(t,Math.cos(i)*.1,.62+e%3*.12,Math.sin(i)*.1,.07,.72+e%2*.2,.02,-i)}},lamp(n){n.cylinder($e(),0,0,0,.13,.03,10).cylinder($e(),0,.03,0,.015,1.2,6).cylinder(_e("#fff0cf",1.1),0,1.2,0,.17,.28,12,.12)},"ceiling-light"(n){n.cylinder(Pn(),0,.05,0,.22,.05,16).cylinder(_e("#fff4dc",1.6),0,0,0,.19,.05,16)},"table-dining"(n){n.box(me("#c19a6b"),0,.7,0,1.4,.04,.8),Mr(n,me("#9a7650"),1.36,.76,.68,.06)},chair(n){let t=me("#9a7650");n.box(t,0,.44,.02,.42,.04,.42).box(t,0,.68,-.19,.4,.34,.03),Mr(n,t,.42,.44,.42,.035)},kitchen(n){n.box(Pn(),0,.42,0,1.5,.84,.58).box(Ft("#cfd2d2",.3,.6),0,.855,0,1.52,.03,.6).box(Ft("#3a3f42",.3,.6),-.36,.866,0,.5,.012,.4).box(Ft("#1c1e1f",.4),.4,.872,.02,.5,.012,.36).cylinder($n(),-.36,.87,-.2,.012,.22,6).box(Pn(),0,1.72,-.12,1.5,.5,.34);for(let t of[-.5,0,.5])n.box($e(),t,.6,.295,.14,.015,.012)},fridge(n){let t=Ft("#dfe3e6",.3,.5);n.box(t,0,.88,0,.62,1.76,.64).box(Ft("#b9bec2",.3,.5),0,1.16,.322,.6,.012,.004).box($e(),-.24,1.4,.335,.025,.36,.025).box($e(),-.24,.8,.335,.025,.4,.025)},bed(n,t){n.box(me(),0,.15,0,1,.3,1.95).box(me("#8f6a48"),0,.45,-.955,1,.9,.04).box(ln("#f4f2ec"),0,.38,.01,.94,.16,1.86).box(ln(t(Ei)),0,.43,.3,.97,.1,1.25).box(ln("#f4f2ec"),0,.5,-.68,.6,.1,.36)},"bed-double"(n,t){n.box(me(),0,.15,0,1.5,.3,1.95).box(me("#8f6a48"),0,.45,-.955,1.5,.9,.04).box(ln("#f4f2ec"),0,.38,.01,1.44,.16,1.86).box(ln(t(Ei)),0,.43,.3,1.47,.1,1.25);for(let e of[-.37,.37])n.box(ln("#f4f2ec"),e,.5,-.68,.56,.1,.36)},desk(n){n.box(me("#c19a6b"),0,.7,0,1.1,.04,.55).box(me("#a8825a"),.36,.5,0,.34,.36,.5);for(let t of[-.52,.52])n.box(me("#9a7650"),t,.34,0,.04,.68,.5)},wardrobe(n){n.box(me("#b89064"),0,.95,0,1,1.9,.55);for(let t of[-.25,.25])n.box(me("#c9a37a"),t,.95,.278,.48,1.8,.01).box($e(),t*.16,1,.29,.02,.16,.02)},chabudai(n){n.cylinder(me("#6e4b32"),0,.27,0,.5,.05,20);for(let[t,e]of[[-.28,-.28],[.28,-.28],[.28,.28],[-.28,.28]])n.cylinder(me("#5e4030"),t,0,e,.03,.27,6)},zabuton(n,t){n.box(Ft(t(["#7c4a54","#4f6a7c","#6f7a4a","#8a6a4f"]),1),0,.04,0,.5,.08,.5)},futon(n,t){n.box(ln("#f4f2ec"),0,.05,0,1,.1,1.9).box(ln(t(Ei)),0,.11,.26,1.02,.08,1.3).box(ln("#f4f2ec"),0,.13,-.72,.5,.07,.3)},toilet(n){n.box(Pn(),0,.2,.12,.38,.4,.5).box(Pn(),0,.56,-.24,.42,.42,.18).box(Ft("#e6e4dc",.4),0,.42,.12,.36,.04,.46)},bathtub(n){n.box(Pn(),0,.28,0,.75,.56,1.4).box(xo("#5f97a8"),0,.5,0,.62,.02,1.26).cylinder($n(),.24,.56,-.6,.015,.16,6)},washbasin(n){n.box(Pn(),0,.4,0,.6,.8,.45).box(Ft("#e6e9ea",.2),0,.82,.02,.5,.04,.34).box(xo("#9fb9bd"),0,1.45,-.21,.5,.7,.02).cylinder($n(),0,.84,-.14,.012,.14,6)},washer(n){n.box(Pn(),0,.45,0,.6,.9,.6).cylinder(Ft("#5f6b73",.2,.3),0,.3,.26,.2,.36,16).box(Be(),0,.82,.302,.5,.08,.004)},"shoe-box"(n){n.box(me("#a8825a"),0,.45,0,1,.9,.34);for(let t of[-.25,.25])n.box(me("#b89064"),t,.45,.173,.48,.8,.008)},boxes(n){n.box(xt("wood","#c9a880"),-.1,.3,-.05,.6,.6,.6).box(xt("wood","#b8946c"),.08,.84,0,.5,.48,.5,.2).box(xt("wood","#d2b48c"),.26,.2,.2,.36,.4,.4,-.3)},rack(n){let t=$n();for(let e of[-.62,.62])n.box(t,e,.85,0,.035,1.7,.035).box(t,e,.02,0,.04,.04,.4);n.box(t,0,1.68,0,1.26,.035,.035);for(let e=0;e<6;e++)n.box(ln(Ic[e%Ic.length]),-.5+e*.2,1.2,0,.14,.82,.34)},counter(n){n.box(me("#a8825a"),0,.49,0,1.6,.98,.56).box(Pn(),0,1,0,1.68,.04,.64).box(Be(),.5,1.12,0,.3,.2,.3).box(Xh(),.5,1.28,-.06,.26,.16,.02)},mirror(n){n.box(me("#9a7650"),0,.95,0,.9,1.9,.06).box(xo("#9fb9bd"),0,.97,.035,.78,1.72,.01)},"cafe-table"(n){n.cylinder(me("#c19a6b"),0,.69,0,.4,.035,18).cylinder($e(),0,.02,0,.035,.67,8).cylinder($e(),0,0,0,.24,.025,14)},stool(n,t){n.cylinder(ln(t(Ei)),0,.4,0,.17,.06,14);for(let e=0;e<3;e++){let i=e/3*Math.PI*2;n.cylinder($e(),Math.cos(i)*.12,0,Math.sin(i)*.12,.015,.4,6)}},"office-desk"(n){n.box(Pn(),0,.71,0,1.2,.035,.62);for(let t of[-.57,.57])n.box(Be(),t,.35,0,.035,.7,.58);n.box(Xh(),0,1,-.16,.54,.33,.025).box(_e("#44627c",.4),0,1,-.146,.5,.29,.004).box(Be(),0,.78,-.16,.06,.12,.05).box(Be(),0,.735,.12,.4,.015,.13)},"office-chair"(n,t){let e=Ft(t(["#3f4c5c","#4a4a4c","#5c3f3f","#3f5c4a"]),.95);n.box(e,0,.46,0,.46,.08,.44).box(e,0,.78,-.2,.42,.5,.06).cylinder($e(),0,.06,0,.025,.38,8);for(let i=0;i<5;i++){let s=i/5*Math.PI*2;n.box($e(),Math.cos(s)*.14,.04,Math.sin(s)*.14,.28,.035,.04,-s)}},bench(n){let t=xt("planks","#c9b392");for(let e of[-.16,0,.16])n.box(t,0,.45,e,1.6,.045,.13);for(let e of[.66,.82])n.box(t,0,e,-.25,1.6,.12,.04);for(let e of[-.68,.68])n.box($e(),e,.225,0,.06,.45,.46).box($e(),e,.66,-.25,.05,.44,.05)},planter(n){n.box(Ft("#a8795a",.95),0,.19,0,.9,.38,.35).box(Ft("#4a3a2c",1),0,.385,0,.84,.01,.29);for(let t=0;t<7;t++){let e=-.36+t*.12;n.box(Ft("#4f7d4a",.95),e,.47,t%2*.08-.04,.09,.18,.09,t).box(Ft(["#d4667a","#e9b44c","#f2ede4","#b98fd0"][t%4],.9),e,.58,t%2*.08-.04,.07,.06,.07,t)}},hedge(n){let t=xt("grass","#7f9a6a");n.box(t,0,.55,0,1.6,1,.46).box(t,.3,1.07,.02,.8,.12,.36).box(t,-.4,1.06,-.03,.6,.1,.32)},fence(n){let t=xt("planks","#e9e2d2");for(let e of[-.76,0,.76])n.box(t,e,.5,0,.08,1,.08);for(let e of[.3,.78])n.box(t,0,e,0,1.6,.07,.04);for(let e=0;e<9;e++)n.box(t,-.68+e*.17,.52,.03,.09,.92,.02)},tree(n){n.cylinder(xt("bark"),0,0,0,.09,1.5,8,.06);let t=xt("grass","#6f9a5c");for(let[e,i,s,o]of[[0,2.2,0,1.3],[.4,1.8,.2,.9],[-.35,1.9,-.25,1],[.1,2.8,-.1,.8]])n.cylinder(t,e,i-o/2,s,o*.5,o*.5,9,o*.62).cylinder(t,e,i,s,o*.62,o*.45,9,o*.2)},mailbox(n){n.cylinder($e(),0,0,0,.03,.85,8).box(Ft("#b9352c",.5,.2),0,.98,0,.3,.24,.22).box(Be(),0,1.04,.112,.2,.02,.004)},bicycle(n,t){let e=Ft(t(["#b9352c","#3f6b8a","#4f7d4a","#e2ddcf","#2b3035"]),.5,.4);for(let i of[-.55,.55])for(let s=0;s<10;s++){let o=s/10*Math.PI*2;n.box(Be(),0,.33+Math.sin(o)*.31,i+Math.cos(o)*.31,.03,.2,.03,0)}n.box(e,0,.55,0,.03,.03,.9).box(e,0,.72,-.2,.03,.36,.03).box(e,0,.74,.48,.03,.44,.03).box(Be(),0,.92,-.22,.14,.04,.24).box($e(),0,.98,.48,.46,.03,.03)},vending(n,t){let e=Ft(t(["#f2f2ee","#c0392b","#2f6fa8","#f2f2ee"]),.4,.2);n.box(e,0,.925,0,1,1.85,.7).box(_e("#eaf4ff",.9),0,1.3,.352,.84,.86,.004).box(Be(),0,.42,.352,.5,.16,.004).box(Be(),.32,.72,.352,.16,.12,.004);for(let i=0;i<3;i++)for(let s=0;s<7;s++)n.cylinder(Ft(Ic[(i*3+s)%Ic.length],.4,.3),-.36+s*.12,.98+i*.27,.34,.035,.13,8)},car(n,t){let e=Ft(t(["#e8e8e4","#c9ccd0","#3a4046","#8fa3b5","#b9a37f","#a34a43","#f1efe6"]),.35,.35),i=Ft("#1c1f22",.6),s=xo("#27323a");n.box(e,0,.56,0,1.46,.52,3.36).box(e,0,1.13,-.18,1.36,.64,2.25),n.box(s,0,1.17,.955,1.2,.44,.02).box(s,0,1.17,-1.315,1.2,.42,.02);for(let o of[-.688,.688])n.box(s,o,1.19,-.18,.02,.38,1.9);n.box(i,0,.36,1.66,1.42,.2,.1).box(i,0,.36,-1.66,1.42,.2,.1);for(let o of[-.55,.55])n.box(_e("#fff4d8",.3),o,.7,1.686,.26,.12,.02),n.box(Ft("#a8322c",.4),o,.74,-1.686,.22,.14,.02),n.box(i,o*1.28,1.02,.7,.14,.09,.05);n.box(Pn(),0,.44,1.712,.33,.165,.01).box(Pn(),0,.5,-1.712,.33,.165,.01);for(let o of[-.64,.64])for(let r of[1.08,-1.08])Sy(n,o,.29,r,.29,.2)},cupboard(n){let t=Pn();n.box(t,0,.43,0,.9,.86,.45).box(me("#b08a62"),0,.875,0,.92,.03,.47),n.box(t,0,1.4,-.06,.9,.9,.33);for(let e of[-.225,.225])n.box(xo("#5d7480"),e,1.4,.108,.4,.8,.008).box($n(),e*.2,.5,.232,.02,.12,.012)},tansu(n){let t=me("#7a5a44");n.box(t,0,.65,0,.9,1.3,.45);for(let e=0;e<5;e++){n.box(me("#8a6850"),0,.15+e*.25,.228,.84,.22,.01);for(let i of[-.2,.2])n.box($e(),i,.15+e*.25,.238,.09,.02,.012)}},"mail-boxes"(n){n.box($n(),0,.85,0,1.2,.9,.3);for(let t=0;t<3;t++)for(let e=0;e<4;e++)n.box(Ft("#d9dcd8",.4,.5),-.45+e*.3,.55+t*.3,.152,.27,.27,.006),n.box(Be(),-.45+e*.3,.63+t*.3,.158,.18,.02,.004);Mr(n,$n(),1.16,.26,.4,.04)},"ac-unit"(n,t,e={}){let i=Ft("#dedbd1",.55,.15),s=Ft("#2a2d30",.6),o=.1;if(e.hung)for(let a of[-.27,.27])n.box(Ft("#c9ccc8",.4,.6),a,o-.02,-.06,.04,.04,.42),n.bar(Ft("#c9ccc8",.4,.6),new H(a,o-.04,.12),new H(a,-.25,-.26),.035,.035);else for(let a of[-.25,.25])n.box(Ft("#3a3d40",.7),a,o/2,0,.07,o,.42);n.box(i,-.03,o+.275,-.01,.8,.55,.27);let r=(a,c,l)=>n.face(l,Array.from({length:24},(f,h)=>{let u=-h/24*Math.PI*2;return new H(-.17+Math.cos(u)*a,o+.28+Math.sin(u)*a,c)}));r(.21,.126,s),r(.06,.13,Ft("#4a4e52",.5));for(let a of[.09,.14,.19])for(let c=0;c<16;c++){let l=c/16*Math.PI*2,f=(c+1)/16*Math.PI*2;n.bar(Ft("#9a9890",.5,.3),new H(-.17+Math.cos(l)*a,o+.28+Math.sin(l)*a,.132),new H(-.17+Math.cos(f)*a,o+.28+Math.sin(f)*a,.132),.006,.006)}for(let a=0;a<8;a++)n.box(Ft("#c9c6bc",.6),.22,o+.08+a*.055,.128,.24,.012,.012);if(n.box(i,.405,o+.2,-.02,.05,.3,.2),!e.hung&&e.h){let a=Ft("#e8e2cf",.5),c=-.27;n.box(a,.405,o+.12,(c+.04-.12)/2,.075,.063,Math.abs(c+.04+.12)),n.box(a,.405,(o+.12+e.h)/2,c+.035,.075,e.h-o-.12,.063),n.box(a,.405,e.h,c+.05,.135,.07,.1)}else e.hung&&n.box(Ft("#e8e2cf",.5),.405,o+.12,-.16,.075,.063,.22)},"gate-post"(n,t){let e=Ft(t(["#4d4741","#2f3336","#8a7a68","#b9bdbd"]),.45,.55);n.box(Ft("#a9a79f",.9),0,.03,0,.36,.06,.22),n.box(e,0,.73,0,.3,1.34,.16),n.box(Be(),0,.9,.081,.24,.035,.004).box(e,0,.93,.084,.25,.03,.01),n.box(Ft("#9a948a",.5,.5),0,.68,-.081,.22,.36,.004),n.box(Ft("#e9e6dd",.35,.1),0,1.13,.082,.22,.08,.006),n.box(Be(),-.05,1.13,.086,.12,.012,.002),n.box(Ft("#1d2023",.25,.3),0,1.3,.086,.1,.15,.02),n.box(Ft("#3c4247",.15,.5),0,1.345,.097,.025,.025,.002).box(Ft("#c9ccce",.3,.6),0,1.265,.097,.04,.04,.003),n.box(e,0,1.415,0,.3,.03,.18).box(_e("#fff1d6",.7),0,1.39,.06,.22,.02,.04)},"ticket-gate"(n){Wd(n);let t=Ft("#c9cdcf",.36,.75);n.box(t,0,.52,0,.19,.84,1.42);for(let e of[-1,1])n.box(t,0,.5,e*.73,.15,.8,.06),n.box(_e("#27c46b",1.3),0,.78,e*.762,.09,.09,.004);for(let e of[-1,1])n.box(Be(),e*.096,.5,.12,.004,.5,.05).box(Be(),e*.096,.5,-.12,.004,.5,.05);n.box(Ft("#3f6f9a",.5),0,.3,0,.194,.08,1.42),Xd(n)},"ticket-gate-clear"(n){Wd(n);let t=Ft("#d5d8d9",.3,.8);for(let i of[-.74,-.25,.25,.74])for(let s of[-.085,.085])n.box(t,s,.52,i,.018,.84,.018);for(let i of[-.085,.085])n.box(t,i,.11,0,.018,.018,1.48);let e=Fn("inner");for(let i of[-1,1])n.face(e,[new H(i*.094,.1,-.74),new H(i*.094,.1,.74),new H(i*.094,.94,.74),new H(i*.094,.94,-.74)]);for(let i of[-1,1])n.face(e,[new H(-.085,.1,i*.749),new H(.085,.1,i*.749),new H(.085,.94,i*.749),new H(-.085,.94,i*.749)]),n.box(_e("#27c46b",1.3),0,.78,i*.752,.09,.09,.004);n.box(Ft("#8d9498",.4,.7),0,.84,0,.13,.012,1.3);for(let i=0;i<13;i++)n.box(Ft(i%2?"#2a2e31":"#b9bec1",.5,.4),0,.865,-.6+i*.1,.12,.03,.03);for(let i of[-.035,.035])n.box(Ft("#d98a2b",.8),i,.885,0,.02,.006,1.24);n.cylinder(Ft("#5f666b",.45,.7),0,.62,-.5,.05,.16,12).cylinder(Ft("#5f666b",.45,.7),0,.62,.5,.05,.16,12).box(Ft("#3a3f44",.6),0,.3,.42,.13,.3,.26).box(Ft("#1f7a4a",.5),.02,.5,-.05,.008,.3,.42).box(Ft("#1f7a4a",.5),-.03,.34,-.42,.008,.24,.3).box(Ft("#c9ccce",.4,.6),-.02,.6,.12,.06,.1,.16);for(let[i,s]of[[-.05,"#c0392b"],[-.035,"#e6c229"],[-.02,"#2f6fa8"]])n.box(Ft(s,.7),i,.2,-.05,.01,.01,1.1);Xd(n)},"ticket-machine"(n){n.box(Ft("#e4e6e3",.45,.15),0,.875,0,.85,1.75,.5).box(Ft("#2f6fa8",.5),0,1.66,.252,.85,.14,.004).box(Be(),0,1.22,.252,.6,.48,.006).box(_e("#bcd8ef",.5),0,1.22,.256,.52,.4,.004).box(Ft("#c9cccd",.35,.7),0,.84,.262,.7,.2,.03).box(Be(),-.2,.86,.279,.09,.012,.004).box(Be(),.02,.86,.279,.16,.012,.004).box(_e("#2f7df0",.9),.24,.85,.279,.1,.07,.004).box(Be(),0,.6,.252,.34,.1,.02).box(Ft("#b9bdbf",.4,.6),0,.3,.252,.7,.4,.004)},"tactile-line"(n){n.box(Ey(),0,.004,0,.3,.008,2.4),n.box(Ft("#e4b52a",.7),.12,.01,0,.025,.006,2.4)},"platform-bench"(n){let t=Ft("#4f7396",.55);for(let e=0;e<4;e++){let i=-.675+e*.45;n.box(t,i,.44,.03,.4,.04,.4).box(t,i,.64,-.19,.4,.34,.04)}n.box($n(),0,.39,0,1.76,.05,.08).box($n(),0,.6,-.22,1.76,.04,.03);for(let e of[-.8,.8])n.box($n(),e,.2,0,.05,.4,.05).box($n(),e,.015,0,.08,.03,.44)},lantern(n){let t=xt("stone","#c9c6bd");n.cylinder(t,0,0,0,.22,.12,8).cylinder(t,0,.12,0,.09,.55,8).cylinder(t,0,.67,0,.2,.08,6).box(_e("#ffe6b0",.7),0,.88,0,.2,.26,.2).cylinder(t,0,1.02,0,.3,.16,6,.06)}};function Dc(n,t,e=0,i=0,s={}){let o=Ty[t];if(!o){let r=Qe[t]??{w:.5,d:.5,h:.5};n.box(Ft("#b9b5aa"),0,r.h/2,0,r.w,r.h,r.d);return}o(n,(r,a=0)=>r[Math.floor(Cn(e*3.1+a,i*7.3,t.length)*r.length)%r.length],s)}var Kn=.8,yn=2.3,Ae=.03,wr="#ffb23e",Yd=()=>xt("#c9ccc8","#ffffff",{roughness:.34,metalness:.8}),Ay=()=>xt("#4a5054","#ffffff",{roughness:.42,metalness:.7}),Ry=()=>xt("#ece6d8","#ffffff",{roughness:.62}),qd=()=>xt("#8f8b80","#ffffff",{roughness:.8});function Yh(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=new dn(e);return i.colorSpace=Ee,i.anisotropy=4,{canvas:e,map:i,context:e.getContext("2d")}}function Uc(n,t,e,i=1){let s=new pe(new gn(t,e),new sn({map:n,toneMapped:!1,color:new Kt(i,i,i)}));return s.userData.ownMaterial=!0,s}function Cy({canvas:n,context:t,map:e},i,s){let{width:o,height:r}=n;if(t.fillStyle="#090b0c",t.fillRect(0,0,o,r),t.fillStyle=wr,t.shadowColor=wr,t.shadowBlur=10,s){let a=o*.25,c=r/2,l=r*.24*s;t.beginPath(),t.moveTo(a,c-l),t.lineTo(a+r*.2,c+l*.8),t.lineTo(a-r*.2,c+l*.8),t.closePath(),t.fill()}t.font=`700 ${Math.round(r*.74)}px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(String(i+1),o*(s?.66:.5),r*.54),t.shadowBlur=0,t.fillStyle="rgba(0, 0, 0, 0.3)";for(let a=0;a<r;a+=4)t.fillRect(0,a,o,1);for(let a=0;a<o;a+=4)t.fillRect(a,0,1,r);e.needsUpdate=!0}function Py(n){let t=Math.ceil(n.length/2),e=150+t*62+170,i=[];n.forEach((o,r)=>{let a=Math.floor(r/2);i.push({type:"floor",level:o,x:r%2?176:80,y:150+(t-1-a)*62+30,r:25})});let s=150+t*62;return i.push({type:"open",x:80,y:s+48,r:25},{type:"close",x:176,y:s+48,r:25}),{width:256,height:e,buttons:i,below:s}}function Iy({canvas:n,context:t,map:e},i,{shown:s,heading:o,calls:r,at:a,open:c}){let{width:l,height:f}=n,h=t.createLinearGradient(0,0,l,0);h.addColorStop(0,"#b9bdbb"),h.addColorStop(.5,"#d9dcda"),h.addColorStop(1,"#b4b8b6"),t.fillStyle=h,t.fillRect(0,0,l,f),t.strokeStyle="#7d8280",t.lineWidth=3,t.strokeRect(1.5,1.5,l-3,f-3),t.fillStyle="#0a0c0d",t.beginPath(),t.roundRect(40,26,176,84,8),t.fill(),t.fillStyle=wr,t.font='700 60px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(`${o>0?"\u25B2 ":o<0?"\u25BC ":""}${s+1}`,128,70);for(let d of i.buttons){let p=d.type==="floor"?r.has(d.level):d.type==="open"&&c;t.beginPath(),t.arc(d.x,d.y,d.r,0,Math.PI*2),t.fillStyle=p?wr:"#f1f2f0",t.fill(),t.lineWidth=d.type==="floor"&&d.level===a?5:3,t.strokeStyle=p?"#c97a12":d.type==="open"?"#2f8a57":"#6f7573",t.stroke(),t.fillStyle=p?"#3a2606":"#2c3235",d.type==="floor"?(t.font='700 26px "Yu Gothic UI", system-ui, sans-serif',t.fillText(String(d.level+1),d.x,d.y+1)):(t.font='700 15px "Yu Gothic UI", system-ui, sans-serif',t.fillText(d.type==="open"?"\u25C0\u25B6":"\u25B6\u25C0",d.x,d.y-6),t.fillText(d.type==="open"?"\u958B":"\u9589",d.x,d.y+11))}let u=i.below+112;t.beginPath(),t.arc(128,u,21,0,Math.PI*2),t.fillStyle="#f0c13a",t.fill(),t.strokeStyle="#8a6a12",t.lineWidth=3,t.stroke(),t.fillStyle="#3a2f08",t.font='700 14px "Yu Gothic UI", system-ui, sans-serif',t.fillText("\u975E\u5E38",128,u+1),t.fillStyle="#4b5154",t.font='600 13px "Yu Gothic UI", system-ui, sans-serif',t.fillText("\u5B9A\u54E1 9\u540D\u3000\u7A4D\u8F09 600kg",128,f-18),e.needsUpdate=!0}function $d({canvas:n,context:t,map:e},{up:i,down:s,lit:o}){let{width:r,height:a}=n,c=t.createLinearGradient(0,0,r,0);c.addColorStop(0,"#b9bdbb"),c.addColorStop(.5,"#dadddb"),c.addColorStop(1,"#b4b8b6"),t.fillStyle=c,t.fillRect(0,0,r,a),t.strokeStyle="#7d8280",t.lineWidth=3,t.strokeRect(1.5,1.5,r-3,a-3),t.textAlign="center",t.textBaseline="middle";let l=[...i?[["\u25B2",a*(s?.3:.5)]]:[],...s?[["\u25BC",a*(i?.7:.5)]]:[]];for(let[f,h]of l)t.beginPath(),t.arc(r/2,h,30,0,Math.PI*2),t.fillStyle=o?wr:"#f1f2f0",t.fill(),t.lineWidth=3,t.strokeStyle=o?"#c97a12":"#6f7573",t.stroke(),t.fillStyle=o?"#3a2606":"#2c3235",t.font="700 28px system-ui, sans-serif",t.fillText(f,r/2,h+1);e.needsUpdate=!0}function Kd(n){let{w:t,d:e}=n,i=n.stops.map(b=>b.level),s=Math.max(...i),o=Math.min(...i),r=new se;r.position.set(n.x,n.stops[0].y,n.z),r.rotation.y=(n.r??0)*Math.PI/180;let a=new le,c=Yd(),l=Ay(),f=Ry();a.box(qe("stone-floor"),0,.02,0,t,.04,e),a.box(c,0,.043,e/2-.035,Kn+.12,.008,.07);for(let b of[-.012,.012])a.box(l,0,.048,e/2-.035+b,Kn+.1,.003,.007);for(let b of[-1,1]){let x=b*(t/2-Ae/2);a.box(l,x,.06,0,Ae,.12,e),a.box(c,x,.535,0,Ae,.83,e),a.box(f,x,(.95+yn)/2,0,Ae,yn-.95,e);for(let m of[-e/6,e/6])a.box(qd(),b*(t/2-Ae-.002),(.95+yn)/2,m,.004,yn-.95,.008);a.box(qd(),b*(t/2-Ae-.002),.95,0,.004,.012,e),a.box(c,b*(t/2-Ae-.065),.85,-.06,.035,.035,e-.5);for(let m of[-e/2+.3,-.06,e/2-.42])a.box(c,b*(t/2-Ae-.035),.85,m,.06,.018,.018);a.box(c,b*(t/4+Kn/4),yn/2,e/2-Ae/2,t/2-Kn/2,yn,Ae)}a.box(l,0,.06,-e/2+Ae/2,t,.12,Ae),a.box(c,0,.535,-e/2+Ae/2,t,.83,Ae),a.box(f,0,(.95+yn)/2,-e/2+Ae/2,t,yn-.95,Ae),a.box(c,0,.85,-e/2+Ae+.065,t-.36,.035,.035);for(let b of[-t/2+.3,0,t/2-.3])a.box(c,b,.85,-e/2+Ae+.035,.018,.018,.06);a.box(l,0,1.52,-e/2+Ae+.004,t*.62+.03,.98,.006),a.box(xt("#aab6ba","#ffffff",{roughness:.06,metalness:1}),0,1.52,-e/2+Ae+.009,t*.62,.95,.004),a.box(c,0,(2.1+yn)/2,e/2-Ae/2,Kn,yn-2.1,Ae),a.box(xt("#f4f2ec","#ffffff",{roughness:.7}),0,yn+.02,0,t,.04,e),a.box(_e("#fff6e0",1.25),0,yn-.006,0,t*.46,.012,e*.42);for(let b of[-1,1])for(let x of[-1,1])a.cylinder(_e("#fff3d6",1.5),b*t*.37,yn-.012,x*e*.37,.045,.012,12);for(let b=-2;b<=2;b++)a.box(l,b*.035,yn-.004,-e*.36,.014,.008,.16);a.build(r,{cast:!1,where:"in"});let h=[-1,1].map(b=>{let x=new se,m=new le;return m.box(c,0,1.05,0,Kn/2+.012,2.1,.026),m.box(l,-b*(Kn/4),1.05,.014,.006,2.1,.002),m.build(x,{cast:!1,where:"in"}),x.position.set(b*Kn/4,0,e/2+.018),r.add(x),{leaf:x,side:b}}),u=Yh(192,96),d=Py(i),p=Yh(d.width,d.height),y=.17,_=y*d.height/d.width,g={x:-(t/4+Kn/4),y:1.24,z:e/2-Ae-.004},S=Uc(p.map,y,_,.86);S.position.set(g.x,g.y,g.z),S.rotation.y=Math.PI,r.add(S);let M=Uc(u.map,.26,.13);M.position.set(0,2.2,e/2-Ae-.004),M.rotation.y=Math.PI,r.add(M);let v=new Map,E={key:""},C=new Set;function A(b){Cy(u,b.shown,b.heading),Iy(p,d,b);for(let[x,m]of v)$d(m.board,{up:x<s,down:x>o,lit:b.calls.has(x)})}return{car:r,hall(b){let x=new se,m=new se,[w,T]=b.out,P=[T,-w],L=Math.atan2(w,T),U=(b.gate?.r??.08)+.012,F=Yd(),Y=new le,B=Uc(u.map,.24,.12),k=[b.at[0]+w*(U+.006),b.y+2.26,b.at[1]+T*(U+.006)];Y.box(F,b.at[0]+w*U,k[1],b.at[1]+T*U,.3,.16,.012,L),B.position.set(...k),B.rotation.y=L,m.add(B),Y.build(m,{cast:!1,where:"in"});let V=Yh(128,256),K=[b.at[0]+P[0]*(b.half+.2),b.y+1.12,b.at[1]+P[1]*(b.half+.2)],J=Uc(V.map,.1,.2,.86);J.position.set(K[0]+w*(U+.004),K[1],K[2]+T*(U+.004)),J.rotation.y=L,x.add(J);let gt=new le;return gt.box(F,K[0]+w*(U-.002),K[1],K[2]+T*(U-.002),.115,.215,.01,L),gt.build(x,{cast:!1,where:"in"}),v.set(b.level,{board:V,centre:K,out:[w,T],right:P,width:.1,height:.2,y:b.y}),$d(V,{up:b.level<s,down:b.level>o,lit:C.has(b.level)}),{low:x,high:m}},setCar(b){r.position.y=b},setDoor(b){for(let{leaf:x,side:m}of h)x.position.x=m*(Kn/4+b*(Kn/2-.03))},show(b){let x=`${b.shown}|${b.heading}|${[...b.calls].sort().join()}|${b.at}|${b.open}`;if(x!==E.key){E={key:x},C.clear();for(let m of b.calls)C.add(m);A({...b,calls:C})}},pick(b,x,m=2.6){let w=null,T=(K,J)=>{J>.05&&J<m&&(!w||J<w.distance)&&(w={...K,distance:J})},P=r.rotation.y,L=Math.cos(P),U=Math.sin(P),F=(K,J)=>[K*L-J*U,K*U+J*L],[Y,B]=F(b.x-r.position.x,b.z-r.position.z),[k,V]=F(x.x,x.z);if(V>1e-4){let K=(g.z-B)/V,J=Y+k*K,gt=b.y-r.position.y+x.y*K,lt=(g.x+y/2-J)/y*d.width,j=(g.y+_/2-gt)/_*d.height,Z=d.buttons.find(z=>Math.hypot(z.x-lt,z.y-j)<=z.r*1.25);Z&&T({type:Z.type,level:Z.level},K)}for(let[K,J]of v){let gt=x.x*J.out[0]+x.z*J.out[1];if(gt>-1e-4)continue;let lt=((J.centre[0]-b.x)*J.out[0]+(J.centre[2]-b.z)*J.out[1])/gt,j=(b.x+x.x*lt-J.centre[0])*J.right[0]+(b.z+x.z*lt-J.centre[2])*J.right[1],Z=b.y+x.y*lt-J.centre[1];Math.abs(j)<=J.width/2+.03&&Math.abs(Z)<=J.height/2+.03&&T({type:"hall",level:K},lt)}return w},dispose(){for(let b of[u,p,...[...v.values()].map(x=>x.board)])b.map.dispose()}}}var Ly=new H(0,1,0),ve=([n,t],e)=>new H(n,e,t);function Ji(n,t,e,i,s,o){n.bar(t,e,i,s,o)}function Dy(n,t,e,i,s,o,{nose:r=null,front:a=e,bottom:c=!0}={}){n.shape(t,i,[],o,!0),c&&n.shape(e,i,[],s,!1);let l=i.reduce((u,d)=>u+d[0],0)/i.length,f=i.reduce((u,d)=>u+d[1],0)/i.length,h=(u,d)=>Math.hypot(u[0]-d[0],u[1]-d[1])<1e-4;i.forEach((u,d)=>{let p=i[(d+1)%i.length],y=new H(p[1]-u[1],0,u[0]-p[0]);y.x*((u[0]+p[0])/2-l)+y.z*((u[1]+p[1])/2-f)<0&&y.negate();let _=r&&(h(u,r[0])&&h(p,r[1])||h(u,r[1])&&h(p,r[0]));n.quad(_?a:e,ve(u,s),ve(p,s),ve(p,o),ve(u,o),y)})}function Uy(n,t,e,i,s,o){let[r,a,c,l]=e,f=i-s-o,h=i-o,u=[(r[0]+a[0]+c[0]+l[0])/4,(r[1]+a[1]+c[1]+l[1])/4],d=(p,y)=>new H((p[0]+y[0])/2-u[0],0,(p[1]+y[1])/2-u[1]);n.quad(t.tread,ve(r,i),ve(a,i),ve(c,i),ve(l,i),Ly),n.quad(t.riser??t.side,ve(r,f),ve(l,f),ve(l,i),ve(r,i),d(r,l)),n.quad(t.side,ve(r,f),ve(a,h),ve(a,i),ve(r,i),d(r,a)),n.quad(t.side,ve(l,f),ve(c,h),ve(c,i),ve(l,i),d(l,c)),n.quad(t.side,ve(r,f),ve(l,f),ve(c,h),ve(a,h),new H(0,-1,0))}var Zn=(n,t=.45)=>xt(n,"#ffffff",{roughness:t,metalness:.7}),zc={wood:()=>({tread:xt("planks","#b98f63"),riser:xt("#f1ece0","#ffffff",{roughness:.85}),side:xt("#ebe5d8","#ffffff",{roughness:.9}),rail:xt("wood","#8a6a4c"),post:xt("wood","#8a6a4c")}),open:()=>({tread:xt("planks","#a9825a"),side:Zn("#2b2f33"),rail:Zn("#2b2f33"),post:Zn("#2b2f33"),open:!0}),rc:()=>({tread:xt("concrete","#c9c6bd"),riser:xt("concrete","#c2bfb6"),side:xt("concrete","#c2bfb6"),rail:Zn("#6b7377"),post:Zn("#6b7377"),nose:xt("#55585a","#ffffff",{roughness:.95})}),steel:()=>({tread:Zn("#585f63",.6),side:Zn("#4d5458",.55),rail:Zn("#4d5458"),post:Zn("#4d5458"),open:!0}),stone:()=>({tread:xt("stone","#d8d4ca"),riser:xt("stone","#c6c2b8"),side:xt("stone","#c6c2b8"),rail:Zn("#3d4447"),post:Zn("#3d4447")})};function qh(n,t,e,i=.3){let s=new Set([0,n.total]);for(let c=i;c<n.total-.05;c+=i)s.add(c);let o=n.corners.filter(c=>c.inner===t);for(let c of n.corners)s.add(Math.max(0,c.s-c.half)),s.add(Math.min(n.total,c.s+c.half));let r=[...s].filter(c=>!o.some(l=>Math.abs(c-l.s)<l.half-1e-6)).sort((c,l)=>c-l).filter((c,l,f)=>!l||c-f[l-1]>1e-6),a=[];for(let c=1;c<r.length;c++){let l=n.side(r[c-1],r[c],t);l.forEach((f,h)=>{if(c>1&&h===0)return;let u=h===0?r[c-1]:h===l.length-1?r[c]:(r[c-1]+r[c])/2,d=n.centre(u),p=Math.hypot(d[0]-f[0],d[1]-f[1])||1,y=[(d[0]-f[0])/p,(d[1]-f[1])/p];a.push({x:f[0]+y[0]*e,z:f[1]+y[1]*e,y:n.ramp(u),out:[f[0]-y[0]*.1,f[1]-y[1]*.1]})})}return a}function Zd(n,t,e,i,s=()=>!1){let o=ri(t,e),r=(zc[o.look]??zc.wood)();o.spiral&&n.cylinder(r.post,t.x,i,t.z,.065,e+.95,12);for(let a of o.surfaces){let c=i+a.y,l=o.look==="rc"?.14:.05;if(!r.open&&a.kind==="tread"&&a.poly.length===4)Uy(n,r,a.poly,c,o.riser,l);else{let f=r.open?.045:a.kind==="landing"?Math.max(l,o.riser)+.03:o.riser+l;Dy(n,r.tread,r.side,a.poly,c-f,c,{nose:a.nose,front:r.riser??r.side})}if(r.nose&&a.nose){let f=a.poly.reduce((y,_)=>y+_[0],0)/a.poly.length,h=a.poly.reduce((y,_)=>y+_[1],0)/a.poly.length,[u,d]=a.nose,p=new H(f-(u[0]+d[0])/2,0,h-(u[1]+d[1])/2).normalize().multiplyScalar(.03);Ji(n,r.nose,ve(u,c+.003).add(p),ve(d,c+.003).add(p),.045,.006)}}for(let a of[1,-1]){if(r.open){let f=qh(o,a,.04);for(let h=1;h<f.length;h++){let[u,d]=[f[h-1],f[h]];Ji(n,r.side,new H(u.x,i+u.y-.16,u.z),new H(d.x,i+d.y-.16,d.z),.05,.24)}}let c=qh(o,a,.05),l=0;for(let f=1;f<c.length;f++){let[h,u]=[c[f-1],c[f]],d=s((h.out[0]+u.out[0])/2,(h.out[1]+u.out[1])/2),p=d?.8:.9,y=new H(h.x,i+h.y+p,h.z),_=new H(u.x,i+u.y+p,u.z);if(Ji(n,r.rail,y,_,.045,.05),!d&&(Ji(n,r.rail,y.clone().setY(y.y-.45),_.clone().setY(_.y-.45),.03,.03),l+=Math.hypot(u.x-h.x,u.z-h.z),f===1||l>=.85||f===c.length-1)){l=0;let g=f===1?h:u;Ji(n,r.post,new H(g.x,i+g.y,g.z),new H(g.x,i+g.y+p,g.z),.045,.045)}}}}function Jd(n,t,e,i,s=()=>!1){let o=ri(t,e),r=(zc[o.look]??zc.wood)(),a=(h,u)=>{let d=new H(h[0],i,h[1]),p=new H(u[0],i,u[1]);if(!(d.distanceTo(p)<.05)){Ji(n,r.rail,d.clone().setY(i+.95),p.clone().setY(i+.95),.045,.05),Ji(n,r.rail,d.clone().setY(i+.48),p.clone().setY(i+.48),.03,.03);for(let y of[d,p])Ji(n,r.post,y,y.clone().setY(i+.95),.045,.045)}};for(let h of[1,-1]){let u=qh(o,h,.03);for(let d=1;d<u.length;d++){let[p,y]=[u[d-1],u[d]];e-(p.y+y.y)/2<.8||s((p.out[0]+y.out[0])/2,(p.out[1]+y.out[1])/2)||a([p.x,p.z],[y.x,y.z])}}let[c,l]=[o.edge(0,1),o.edge(0,-1)],f=[o.centre(0)[0]+o.foot.out[0]*.1,o.centre(0)[1]+o.foot.out[1]*.1];s(f[0],f[1])||a(c,l)}function $h(n,t,e){let i=Math.max(1,t.n??Math.round(t.rise/.17)),s=t.look==="rc"?xt("concrete","#c4c1b8"):t.look==="wood"?xt("planks","#b98f63"):qe("genkan-floor");n.at(t.x,e+(t.from??0),t.z,(t.r??0)*Math.PI/180,o=>{let r=t.l/i;for(let a=1;a<=i;a++){let c=t.rise*a/i;o.box(s,0,c/2,t.l/2-r*(a-.5),t.w,c,r)}})}var Ny={picture(n,t){let e=xt("wood",t(["#6e4b32","#c9a37a","#2b2f33","#e9e2d2"]));n.box(e,0,0,.012,.6,.45,.024),n.box(xt("#f6f3ea","#ffffff",{roughness:.9}),0,0,.026,.52,.37,.004);let[i,s,o]=t([["#b9d3e3","#7f9a6a","#d9c98a"],["#f0c9a4","#8f6a5a","#5f7c8a"],["#cfe0d0","#5f8a6b","#e2ddcf"]],3);n.box(xt(i,"#ffffff",{roughness:.9}),0,.07,.03,.42,.14,.002),n.box(xt(s,"#ffffff",{roughness:.9}),-.05,-.03,.031,.32,.07,.002),n.box(xt(o,"#ffffff",{roughness:.9}),0,-.1,.03,.42,.08,.002)},clock(n){let t=xt("#2b2f33","#ffffff",{roughness:.5,metalness:.3}),e=xt("#f7f5ee","#ffffff",{roughness:.7}),i=(a,c)=>Array.from({length:20},(l,f)=>new H(Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a,c)),[s,o]=[i(.16,.03),i(.16,0)];for(let a=0;a<20;a++){let c=(a+1)%20;n.quad(t,o[a],o[c],s[c],s[a],new H(s[a].x+s[c].x,s[a].y+s[c].y,0))}n.face(t,i(.16,.03)),n.face(e,i(.14,.032));let r=xt("#23272a","#ffffff",{roughness:.5});n.bar(r,new H(0,0,.036),new H(.05,.07,.036),.012,.004),n.bar(r,new H(0,0,.038),new H(-.09,.06,.038),.008,.004);for(let a=0;a<12;a++){let c=a/12*Math.PI*2;n.box(r,Math.cos(c)*.12,Math.sin(c)*.12,.034,.012,.012,.002)}},"wall-shelf"(n,t){let e=xt("wood","#b08a62");n.box(e,0,-.1,.11,.8,.025,.22);for(let s of[-.3,.3])n.box(xt("#3d4447","#ffffff",{roughness:.6,metalness:.5}),s,-.17,.07,.02,.12,.14);let i=-.34;for(let s=0;s<6;s++){let o=.03+s%3*.012;n.box(xt(t(["#a8574e","#56789a","#d9b25a","#5f8a6b","#8a6aa0","#e2ddcf"],s),"#ffffff",{roughness:.8}),i+o/2,.005,.1,o,.19-s%2*.03,.15),i+=o+.004}n.cylinder(xt("#b9845e","#ffffff",{roughness:.9}),.24,-.087,.11,.05,.09,8,.06),n.cylinder(xt("#4f7d4a","#ffffff",{roughness:.9}),.24,0,.11,.07,.1,7,.02)},"wall-lamp"(n){let t=xt("#8a6e3c","#ffffff",{roughness:.4,metalness:.7});n.box(t,0,-.06,.012,.1,.14,.024),n.bar(t,new H(0,-.06,.02),new H(0,0,.12),.016,.016),n.cylinder(_e("#fff0cf",1.2),0,-.02,.12,.07,.15,10,.045)},"wall-mirror"(n){n.box(xt("wood","#9a7650"),0,0,.012,.5,.9,.024),n.box(xt("#aab6ba","#ffffff",{roughness:.06,metalness:1}),0,0,.026,.43,.83,.004)},noren(n,t){let e=xt(t(["#34506b","#8a3b34","#3f6b52","#5b4a3c"]),"#ffffff",{roughness:.95,twoSided:!0});n.bar(xt("wood","#5a4636"),new H(-.48,.22,.05),new H(.48,.22,.05),.024,.024);for(let i of[-.3,0,.3])n.box(e,i,-.02,.05,.285,.46,.006);n.box(xt("#f1eee6","#ffffff",{roughness:.9}),0,.02,.054,.12,.12,.002)},awning(n,t){let e=xt(t(["#b9352c","#34506b","#3f6b52","#d9a441"]),"#ffffff",{roughness:.9,twoSided:!0}),[i,s,o]=[.25,-.2,.7];n.quad(e,new H(-.8,i,.01),new H(.8,i,.01),new H(.8,s,o),new H(-.8,s,o),new H(0,1,.6)),n.quad(e,new H(-.8,s,o),new H(.8,s,o),new H(.8,s-.1,o),new H(-.8,s-.1,o),new H(0,0,1));let r=xt("#e9e9e4","#ffffff",{roughness:.5,metalness:.4});for(let a of[-.78,.78])n.bar(r,new H(a,i,.02),new H(a,s,o),.02,.02),n.bar(r,new H(a,s-.02,.02),new H(a,s,o),.018,.018)},"water-heater"(n,t,e={}){let i=xt("#c3c6c6","#ffffff",{roughness:.35,metalness:.6});n.box(i,0,0,.085,.35,.53,.17),n.box(xt("#2a2d30","#ffffff",{roughness:.5}),0,.2,.171,.22,.05,.004);for(let o=0;o<5;o++)n.box(xt("#7d8182","#ffffff",{roughness:.4,metalness:.5}),0,.146+o*.012,.173,.2,.004,.003);n.box(xt("#3a6fa0","#ffffff",{roughness:.5}),-.11,-.2,.171,.06,.012,.003);let s=e.l??.6;s>.05&&n.box(i,0,-.265-s/2,.075,.3,s,.15)},"meter-gas"(n,t,e={}){n.box(xt("#cfcabb","#ffffff",{roughness:.5,metalness:.2}),0,0,.1,.22,.28,.16),n.box(xt("#1f2326","#ffffff",{roughness:.3}),0,.05,.181,.1,.05,.003),n.box(xt("#d9a91c","#ffffff",{roughness:.6}),0,-.07,.181,.12,.025,.003);let i=xt("#c9b25a","#ffffff",{roughness:.5,metalness:.4}),s=e.l??.5;for(let o of[-.065,.065])n.box(i,o,.17,.08,.03,.06,.03);n.box(i,-.065,.2,.04,.03,.03,.08),s>.05&&n.box(i,.065,-.14-s/2,.08,.03,s,.03)},"meter-power"(n){n.box(xt("#eceae4","#ffffff",{roughness:.6}),0,0,.012,.28,.42,.024),n.box(xt("#d9dbd8","#ffffff",{roughness:.4,metalness:.1}),0,.02,.074,.152,.214,.1),n.box(xt("#2b3035","#ffffff",{roughness:.3}),0,.05,.125,.07,.03,.003),n.box(xt("#9aa0a3","#ffffff",{roughness:.5}),0,-.06,.125,.12,.05,.003),n.box(xt("#9aa0a3","#ffffff",{roughness:.5,metalness:.2}),.08,.6,.035,.028,.8,.028)},"vent-hood"(n){let t=xt("#c9cdcf","#ffffff",{roughness:.35,metalness:.75});n.box(t,0,0,.004,.17,.17,.008),n.box(t,0,.02,.06,.15,.11,.11),n.box(xt("#2a2d30","#ffffff",{roughness:.6}),0,-.04,.06,.13,.012,.09)},"vent-hood-large"(n){let t=xt("#c9cdcf","#ffffff",{roughness:.35,metalness:.75});n.box(t,0,0,.004,.23,.23,.008),n.box(t,0,.025,.085,.21,.16,.16),n.box(xt("#2a2d30","#ffffff",{roughness:.6}),0,-.06,.085,.19,.012,.14)},"flower-box"(n){n.box(xt("#7a5a44","#ffffff",{roughness:.9}),0,-.05,.11,1,.15,.2),n.box(xt("#4a3a2c","#ffffff",{roughness:1}),0,.027,.11,.94,.006,.15);for(let t=0;t<8;t++){let e=-.42+t*.12;n.box(xt("#4f7d4a","#ffffff",{roughness:.95}),e,.08,.11+t%2*.04-.02,.09,.11,.09,t),n.box(xt(["#d4667a","#e9b44c","#f2ede4","#b98fd0"][t%4],"#ffffff",{roughness:.9}),e,.15,.11+t%2*.04-.02,.07,.05,.07,t)}}};function jd(n,t,e=0,i={}){let s=Ny[t];if(!s){n.box(xt("#b9b5aa","#ffffff",{roughness:.8}),0,0,.02,.4,.3,.04);return}s(n,(o,r=0)=>o[Math.floor(Cn(e*1.7+r,t.length,r)*o.length)%o.length],i)}var Nc={};function zy(n){let t=n?"green":"grey";if(Nc[t])return Nc[t];let e=document.createElement("canvas");e.width=32,e.height=96;let i=e.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,3,96),i.fillRect(0,0,32,3);let s=new dn(e);return s.wrapS=s.wrapT=En,s.repeat.set(1/.05,1/.15),s.anisotropy=4,Nc[t]=new on({color:n?"#3d6650":"#8d9290",map:s,alphaTest:.35,side:je,roughness:.5,metalness:.45}),Nc[t]}function Oy(n,t){let[e,i]=t.a,[s,o]=t.b,r=Math.hypot(s-e,o-i);if(r<.05)return;let a=(s-e)/r,c=(o-i)/r,l=Math.atan2(-c,a),f=S=>[e+a*S,i+c*S],[h,u]=f(r/2),d=t.base??.4,p=t.fence??0;if(t.k==="hedge"){let S=xt("hedge","#ffffff"),M=t.t??.5;n.box(xt("cblock","#ffffff"),h,d/2,u,r,d,M,l),n.box(S,h,d+(p-.08)/2,u,r-.04,p-.08,M-.04,l),n.box(S,h,d+p-.04,u,r-.12,.08,M-.14,l);return}if(n.box(xt("cblock","#ffffff"),h,(d-.04)/2,u,r,d-.04,.12,l),n.box(xt("concrete","#cfccc4"),h,d-.02,u,r+.01,.04,.15,l),p<=0)return;let y=d+p,_=Math.max(1,Math.ceil(r/2)),g=t.white?xt("#f1f0ea","#ffffff",{roughness:.4,metalness:.2}):t.k==="mesh"?xt(t.green?"#3d6650":"#8d9290","#ffffff",{roughness:.45,metalness:.5}):xt(t.k==="slats"?"#4d4741":"#b9bdbd","#ffffff",{roughness:.4,metalness:.6});for(let S=0;S<=_;S++){let[M,v]=f(Math.min(r-.025,Math.max(.025,r*S/_)));n.box(g,M,d+p/2,v,.05,p,.05,l)}if(t.k==="slats"){for(let S=d+.08;S+.1<=y-.02;S+=.13)n.box(g,h,S+.05,u,r-.02,.1,.018,l);n.box(g,h,y-.015,u,r,.03,.04,l)}else if(t.k==="lattice"){n.box(g,h,d+.06,u,r,.035,.03,l),n.box(g,h,y-.02,u,r,.04,.035,l);for(let S=.1;S<r-.05;S+=.11){let[M,v]=f(S);n.box(g,M,d+p/2+.02,v,.018,p-.08,.018,l)}}else{let S=(M,v)=>new H(f(M)[0],v,f(M)[1]);n.face(zy(t.green),[S(0,d+.04),S(r,d+.04),S(r,y-.03),S(0,y-.03)]),n.box(g,h,y-.015,u,r,.03,.035,l)}}function Qd(n,t){let e=t.yard;if(e){for(let i of e.pads??[]){let s=qe(i.f),[o,r]=[(i.x0+i.x1)/2,(i.z0+i.z1)/2];i.porch?n.box(s,o,i.y/2,r,i.x1-i.x0,i.y,i.z1-i.z0):n.box(s,o,i.y-.02,r,i.x1-i.x0,.04,i.z1-i.z0)}for(let i of e.steps??[])$h(n,i,0);for(let i of e.bounds??[])Oy(n,i);for(let i of e.items??[])n.at(i.x,i.y??Ss(t,i.x,i.z),i.z,(i.r??0)*Math.PI/180,s=>Dc(s,i.k,i.x,i.z,i))}}var Le=n=>Math.round(n*1e3)/1e3,Fy={modern:{front:{k:"slats",base:.4,fence:.8},side:{k:"mesh",base:.6,fence:.6}},europe:{front:{k:"lattice",base:.6,fence:.6,white:!0},side:{k:"mesh",base:.6,fence:.6}},japan:{front:{k:"hedge",base:.2,fence:1},side:{k:"block",base:1,fence:0}},danchi:{front:{k:"mesh",base:.2,fence:1,green:!0},side:{k:"mesh",base:.2,fence:1,green:!0}},mansion:{front:{k:"lattice",base:.6,fence:.6},side:{k:"mesh",base:.4,fence:.8}}},By=.6,t0={block:.12,hedge:.5},ky=(n,t)=>[{a:[0,t],b:[n,t],inward:[0,-1],front:!0},{a:[0,0],b:[n,0],inward:[0,1],front:!1},{a:[0,0],b:[0,t],inward:[1,0],front:!1},{a:[n,0],b:[n,t],inward:[-1,0],front:!1}];function e0(n,t,e,i,s){for(let o=.05;o<=s+1e-6;o+=.05)if(n.floored(t+i[0]*o,e+i[1]*o))return!0;return!1}function n0(n,t,e){let i=[],s=n;for(let[o,r]of[...e].sort((a,c)=>a[0]-c[0]))o>s+.05&&i.push([s,Math.min(o,t)]),s=Math.max(s,r);return t>s+.05&&i.push([s,t]),i.filter(([o,r])=>r-o>.3)}var i0=n=>{let t=Nd(n.x,n.z,n.w,n.l,n.r??0);return{x0:Math.min(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),x1:Math.max(...t.map(e=>e[0])),z1:Math.max(...t.map(e=>e[1]))}};function s0(n,{lotWidth:t,lotDepth:e,style:i}){let s=Fy[i];if(!s)return;let o=qn(n,0);if(!o)return;let r=n.yard,a=[],c=[...(r.pads??[]).filter(x=>!x.porch),...(r.steps??[]).map(x=>({...i0(x),f:"steps"}))],l=[];for(let x of ky(t,e)){let m=x.front?s.front:s.side,w=m.k==="hedge"?t0.hedge:t0.block,T=x.a[1]===x.b[1],P=T?t:e,L=T?x.a[1]:x.a[0],U=w/2+.02,F=(K,J=U)=>T?[K,L+x.inward[1]*J]:[L+x.inward[0]*J,K],Y=[];for(let K of c){let J=T?x.inward[1]>0?K.z0:K.z1:x.inward[0]>0?K.x0:K.x1;if(Math.abs(J-L)>.08)continue;let[gt,lt]=T?[K.x0,K.x1]:[K.z0,K.z1];Y.push([gt-.05,lt+.05]),K.f==="stone-floor"&&l.push({edge:x,alongX:T,line:L,from:gt,to:lt,gaps:Y})}let B=.2,k=[],V=null;for(let K=B/2;K<P;K+=B){let J=!e0(o,...F(K,0),x.inward,By);J&&!V?V=[K-B/2,K+B/2]:J?V[1]=K+B/2:V&&(k.push(V),V=null)}V&&k.push([V[0],Math.min(P,V[1])]);for(let[K,J]of k)for(let[gt,lt]of n0(Math.max(K,.02),Math.min(J,P-.02),Y))a.push({a:F(gt).map(Le),b:F(lt).map(Le),...m,t:w,front:x.front,inward:x.inward})}r.bounds=a;let f=$i(n).find(x=>x.opening.canopy),h=l.sort((x,m)=>Number(m.edge.front)-Number(x.edge.front))[0];if(!h||!f)return;let{edge:u,alongX:d,line:p,from:y,to:_}=h,g=(y+_)/2,S=(x,m)=>d?[x,p+u.inward[1]*m]:[p+u.inward[0]*m,x],[M,v]=S(g,-.7);r.gate={x:Le(M),z:Le(v)};let E=(x,m)=>c.some(w=>x>w.x0-.2&&x<w.x1+.2&&m>w.z0-.12&&m<w.z1+.12),C=d?t:e,A=h.gaps.filter(([x,m])=>x<_&&m>y),b=[Math.min(y,...A.map(([x])=>x)),Math.max(_,...A.map(([,x])=>x))];for(let x of[b[1]+.19,b[0]-.19,b[1]+.5,b[0]-.5]){let[m,w]=S(x,.3);if(!(x<.3||x>C-.3||E(m,w)||e0(o,m,w,u.inward,.25))){r.items.push({k:"gate-post",x:Le(m),z:Le(w),r:Le(Math.atan2(-u.inward[0],-u.inward[1])*180/Math.PI)});break}}}function Hy(n){let t=[];return n.storey.walls.forEach((e,i)=>{if(e.open||e.rail)return;let s=n.sides[i];if(s.l===s.r)return;let o=s.l?"r":"l",r=o==="l"?1:-1,a=[r*s.d[1],-r*s.d[0]],c=(e.t??.12)/2+.07,l=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],f=n.roomAt(l[0]-a[0]*c,l[1]-a[1]*c);t.push({wall:e,index:i,side:o,normal:a,d:s.d,length:s.length,thick:e.t??.12,room:f})}),t}function Oc(n,t,e,i=.15,s=.3){let o=t.filter(r=>r.w===n.index).map(r=>[r.at-r.ww/2-i,r.at+r.ww/2+i]);return n0(s,n.length-s,o).filter(([r,a])=>a-r>=e)}var Sr=(n,t,e)=>n.filter(i=>i.s<e&&i.s+i.hh>t);function o0(n,{lotWidth:t,lotDepth:e,style:i}){let s=["modern","europe","japan"].includes(i);if(!s&&i!=="danchi"&&i!=="mansion")return;let o=n.yard,r=n.base??.3,a=(d,p,y=0)=>d>y&&p>y&&d<t-y&&p<e-y,c=(d,p,y)=>(o.pads??[]).some(_=>d>_.x0-y&&d<_.x1+y&&p>_.z0-y&&p<_.z1+y)||(o.steps??[]).some(_=>{let g=i0(_);return d>g.x0-y&&d<g.x1+y&&p>g.z0-y&&p<g.z1+y}),l=(d,p,y)=>(o.bounds??[]).some(({a:_,b:g,t:S})=>{let[M,v]=[g[0]-_[0],g[1]-_[1]],E=Math.min(1,Math.max(0,((d-_[0])*M+(p-_[1])*v)/(M*M+v*v||1)));return Math.hypot(d-_[0]-M*E,p-_[1]-v*E)<y+S/2}),f=(d,p,y)=>(o.items??[]).some(_=>Math.hypot(d-_.x,p-_.z)<y),h=!1,u=!1;for(let d=0;d<n.storeys.length;d++){let p=n.storeys[d];if(p.like!==void 0)continue;let y=qn(n,d);if(!y)continue;let _=Hy(y),g=new Set,S=new Set,M=[],v=p.decor??[],E=(b,x,m)=>[b.wall.a[0]+b.d[0]*x+b.normal[0]*(b.thick/2+m),b.wall.a[1]+b.d[1]*x+b.normal[1]*(b.thick/2+m)],C=(b,x,m)=>{let[w,T]=E(b,x,m),[P,L]=E(b,x,m/2);return a(w,T,.02)&&!y.floored(w,T)&&!c(P,L,.05)&&!l(w,T,.02)&&!f(P,L,.6)};for(let b of _){let x=b.room?.code;if(!x)continue;if("LBPW".includes(x)&&!g.has(b.room)&&g.size<8){for(let[w,T]of Oc(b,Sr(p.openings,-1,.6),.9,.04,.04)){let P=T-w>1.6?w+.45:(w+T)/2,[L,U]=E(b,P,.27),[F,Y]=E(b,P,.7);if(!(d===0?a(F,Y,.15)&&!y.floored(F,Y)&&!c(L,U,.5)&&!l(F,Y,.05)&&!f(L,U,1.2)&&Ss(n,L,U)<.05:!!y.roomAt(F,Y)?.open&&!!y.roomAt(L,U)?.open))continue;let k=(n.ceiling??2.4)-.2,V={k:"ac-unit",x:Le(L),z:Le(U),r:Le(Math.atan2(b.normal[0],b.normal[1])*180/Math.PI),h:Le(d===0?r+k:k+.05)};d===0?o.items.push(V):p.items.push(V),g.add(b.room);break}if(!g.has(b.room)&&d===0&&b.normal[1]!==0){let w=Math.max(0,...Sr(p.openings.filter(B=>B.w===b.index),-1,3).map(B=>B.s+B.hh))+.07,T=p.h-.2,P=b.length-.55,[L,U]=E(b,P,.2),[F,Y]=E(b,P,.6);w+.55<=T&&P>.5&&a(F,Y,.1)&&!y.floored(F,Y)&&!f(L,U,1)&&(o.items.push({k:"ac-unit",x:Le(L),z:Le(U),r:Le(Math.atan2(b.normal[0],b.normal[1])*180/Math.PI),y:Le(r+w),hung:1}),g.add(b.room))}}if(!s)continue;let m=(n.ceiling??2.4)-.15;if("KUNT".includes(x)&&!S.has(b.room)){let w=Oc(b,Sr(p.openings,m-.15,m+.15),.3,.1).map(([T,P])=>(T+P)/2).find(T=>d>0||C(b,T,.15));w!==void 0&&(v.push({w:b.index,side:b.side,at:Le(w),y:Le(m),k:x==="K"?"vent-hood-large":"vent-hood",l:0}),S.add(b.room))}if(d===0){if(!h&&"UNK".includes(x)){let w=Oc(b,Sr(p.openings,.65-r-.3,1.15-r+.1),.95).find(([T])=>C(b,T+.3,.19)&&C(b,T+.75,.18));if(w){let[T]=w;v.push({w:b.index,side:b.side,at:Le(T+.3),y:Le(.865-r),k:"water-heater",l:.6},{w:b.index,side:b.side,at:Le(T+.75),y:Le(.64-r),k:"meter-gas",l:.5}),h=!0}}if(b.normal[0]!==0)for(let w of Oc(b,Sr(p.openings,1.55-r,2.85-r),.35).flatMap(([T,P])=>[T+.2,P-.2]))C(b,w,.12)&&M.push({face:b,at:w,z:E(b,w,0)[1]})}}let A=M.sort((b,x)=>x.z-b.z)[0];d===0&&s&&A&&!u&&(v.push({w:A.face.index,side:A.face.side,at:Le(A.at),y:Le(1.8-r),k:"meter-power",l:0}),u=!0),v.length&&(p.decor=v)}}var ji=[{name:"s",dx:0,dz:1},{name:"n",dx:0,dz:-1},{name:"e",dx:1,dz:0},{name:"w",dx:-1,dz:0}],Bn=n=>ji.find(t=>t.name===n),Fc={s:"n",n:"s",e:"w",w:"e"},l0={s:0,e:90,n:180,w:270},ne=n=>Math.round(n*1e3)/1e3,Kh=(n,t,e)=>e==="s"?`${n},${t},s`:e==="n"?`${n},${t-1},s`:e==="e"?`${n},${t},e`:`${n-1},${t},e`,h0="VC",_o="HCAG",Bc="LDK",Ts=n=>n!=="."&&!"SXJ".includes(n);function Vy(n){let t=(n.turn??0)%2===1,e=t?n.d??1:n.w??1,i=t?n.w??1:n.d??1,s=Yi*e,o=Yi*i,r=n.floors??[],a=n.units??[],c=(g,S,M)=>g>=0&&g<r.length&&S>=0&&M>=0&&S<s&&M<o,l=(g,S,M)=>c(g,S,M)?r[g][M*s+S]??".":".",f=(g,S,M)=>l(g,S,M).toUpperCase(),h=(g,S,M)=>c(g,S,M)?a[g]?.[M*s+S]??"0":"0",u=(g,S,M)=>{let v=f(g,S,M);return v!=="."&&v!=="J"&&!h0.includes(v)},d=8*e,p=8*i,y=(d-s*Ie)/2,_=(p-o*Ie)/2;return{width:s,depth:o,levels:r.length,key:l,at:f,unit:h,solid:u,lotWidth:d,lotDepth:p,gx:g=>ne(y+g*Ie),gz:g=>ne(_+g*Ie)}}function f0(n,t){let e=[],i=new Map,s=(o,r)=>`${o},${r}`;for(let o=0;o<n.depth;o++)for(let r=0;r<n.width;r++){let a=n.key(t,r,o);if(a==="."||a.toUpperCase()==="J"||i.has(s(r,o)))continue;let c=n.unit(t,r,o),l={id:e.length,code:a.toUpperCase(),key:a,unit:c,cells:[],open:h0.includes(a.toUpperCase())},f=[[r,o]];for(i.set(s(r,o),l);f.length;){let[h,u]=f.pop();l.cells.push({x:h,z:u});for(let{dx:d,dz:p}of ji){let y=s(h+d,u+p);!i.has(y)&&n.key(t,h+d,u+p)===a&&n.unit(t,h+d,u+p)===c&&(i.set(y,l),f.push([h+d,u+p]))}}l.cells.sort((h,u)=>h.z-u.z||h.x-u.x),l.x0=Math.min(...l.cells.map(h=>h.x)),l.x1=Math.max(...l.cells.map(h=>h.x)),l.z0=Math.min(...l.cells.map(h=>h.z)),l.z1=Math.max(...l.cells.map(h=>h.z)),l.box=l.cells.length===(l.x1-l.x0+1)*(l.z1-l.z0+1),e.push(l)}return{rooms:e,at:(o,r)=>i.get(s(o,r))??null}}var Zh=new WeakMap;function Gy(n){let t=(o,r)=>n.some(a=>a.x===o&&a.z===r),e=o=>ji.map(({dx:r,dz:a})=>({x:o.x+r,z:o.z+a})).filter(r=>t(r.x,r.z));if(n.some(o=>e(o).length>2))return null;if(n.length===1)return[n[0]];let i=n.filter(o=>e(o).length===1);if(i.length!==2)return null;let s=[i[0]];for(;s.length<n.length;){let o=e(s.at(-1)).find(r=>!s.some(a=>a.x===r.x&&a.z===r.z));if(!o)return null;s.push(o)}return s}function Wy(n,t="modern"){if(Zh.has(n))return Zh.get(n);let e=mo[t]??mo.modern,i=e.stair==="rc",s=(i?e.wall:e.inner)/2+.012,o=[],r=l=>[n.gx(l.x)+Ie/2,n.gz(l.z)+Ie/2],a=(l,f,h)=>{let[u,d]=[f.x+Bn(h).dx,f.z+Bn(h).dz];return n.unit(l,u,d)===n.unit(l,f.x,f.z)||n.at(l,u,d)==="."?n.at(l,u,d):"."},c=l=>_o.includes(l)?2:0;for(let l=0;l<n.levels-1;l++){let f=[];for(let h of f0(n,l).rooms){if(h.code!=="S")continue;let u=new Set(h.cells.map(g=>`${g.x},${g.z}`)),d=(o[l-1]??[]).find(g=>g.set.size===u.size&&[...g.set].every(S=>u.has(S)));if(d){f.push(d);continue}let p=h.box&&Math.min(h.x1-h.x0,h.z1-h.z0)>=1?null:Gy(h.cells)??[h.cells[0]],y=null,_=(g,S)=>{(!y||g>y.score)&&(y={score:g,spec:S})};if(p)for(let g of[p,[...p].reverse()]){let S=g[0],M=g.at(-1),v=(x,m)=>ji.find(({dx:w,dz:T})=>m&&x.x+w===m.x&&x.z+T===m.z)?.name,E=v(S,g[1]),C=v(M,g.at(-2)),A=ji.map(x=>x.name).filter(x=>x!==E),b=ji.map(x=>x.name).filter(x=>x!==C);for(let x of A)for(let m of b){if(g.length===1&&x===m)continue;let w=a(l,S,x),T=a(l+1,M,m),P=!E||x===Fc[E],L=!C||m===Fc[C],U=(Ts(w)?20:0)+(Ts(T)?20:0)+c(w)+c(T)+(P?1:0)+(L?1:0)+(g.length===1&&m===Fc[x]?1:0),F=(k,V,K)=>{let[J,gt]=r(k);return[J+Bn(V).dx*(Ie/2-K),gt+Bn(V).dz*(Ie/2-K)]},Y=[F(S,x,.05),...g.map(r),F(M,m,.05)],B=Y.filter((k,V)=>{if(V===0||V===Y.length-1)return!0;let[K,J]=[Y[V-1],Y[V+1]];return Math.abs((k[0]-K[0])*(J[1]-k[1])-(k[1]-K[1])*(J[0]-k[0]))>1e-6});_(U,{pts:B.map(([k,V])=>[ne(k),ne(V)]),w:ne(Ie-s*2-.01),foot:[{...S,side:x}],head:[{...M,side:m}]})}}else{let g=h.x1-h.x0+1,S=h.z1-h.z0+1,M=g===S?["z","x"]:g<S?["z"]:["x"];for(let v of M)for(let E of v==="z"?["s","n"]:["e","w"])for(let C of[!1,!0]){let A=v==="z"?E==="s"?h.z1:h.z0:E==="e"?h.x1:h.x0,b=h.cells.filter(lt=>(v==="z"?lt.z:lt.x)===A),x=b.map(lt=>a(l,lt,E)),m=b.map(lt=>a(l+1,lt,E)),w=(x.every(Ts)?20:x.some(Ts)?8:0)+(m.every(Ts)?20:m.some(Ts)?8:0)+Math.max(...x.map(c))+Math.max(...m.map(c))+(C?0:.5)+(E==="s"||E==="e"?.2:0),T=i?.1:.06,[P,L]=v==="z"?[n.gx(h.x0)+s,n.gx(h.x1+1)-s]:[n.gz(h.z0)+s,n.gz(h.z1+1)-s],[U,F]=v==="z"?[n.gz(h.z0),n.gz(h.z1+1)]:[n.gx(h.x0),n.gx(h.x1+1)],Y=(L-P-T)/2,B=E==="s"||E==="e",k=B?F-.05:U+.05,V=B?U+s+Y/2:F-s-Y/2,[K,J]=C?[L-Y/2,P+Y/2]:[P+Y/2,L-Y/2],gt=(lt,j)=>v==="z"?[ne(lt),ne(j)]:[ne(j),ne(lt)];_(w,{pts:[gt(K,k),gt(K,V),gt(J,V),gt(J,k)],w:ne(Y),turn:Math.abs(k-V)-Y/2<1.3?"winder":"landing",foot:b.map(lt=>({...lt,side:E})),head:b.map(lt=>({...lt,side:E})),block:{axis:v,open:E,far:Fc[E],flip:C,u0:P,u1:L,v0:U,v1:F,w:Y,gap:T,tw:s}})}}f.push({...y.spec,set:u,cells:h.cells,look:e.stair})}o.push(f)}return o.push([]),Zh.set(n,o),o}function Xy(n,t,e,i){return e.rooms.filter(s=>s.code==="X"&&s.box).map(s=>{let o=["s","e","w","n"].map(u=>{let{dx:d,dz:p}=Bn(u),y=s.cells.filter(g=>d?g.x===(d>0?s.x1:s.x0):g.z===(p>0?s.z1:s.z0)),_=0;for(let g=0;g<n.levels;g++){if(n.at(g,s.x0,s.z0)!=="X")continue;let S=y.map(M=>n.unit(g,M.x+d,M.z+p)===n.unit(g,M.x,M.z)?n.at(g,M.x+d,M.z+p):".");S.every(M=>Ts(M)&&M!=="V")&&(_+=S.every(M=>_o.includes(M))?3:1)}return{name:u,good:_,cells:y}}).sort((u,d)=>d.good-u.good),[r]=o,a=n.gx(s.x0),c=n.gx(s.x1+1),l=n.gz(s.z0),f=n.gz(s.z1+1),h=r.name==="s"||r.name==="n";return{room:s,side:r.name,x:ne((a+c)/2),z:ne((l+f)/2),r:l0[r.name],w:ne((h?c-a:f-l)-i*2-.16),d:ne((h?f-l:c-a)-i*2-.12),door:h?{line:"h",index:r.name==="s"?s.z1+1:s.z0,pos:(a+c)/2}:{line:"v",index:r.name==="e"?s.x1+1:s.x0,pos:(l+f)/2}}})}function Yy(n,t){let e=n.code+t.code;return n.unit!==t.unit?"door-flat":e.includes("A")&&e.includes("C")?"door-auto":e.includes("V")?"door-terrace":e.includes("Y")?e.includes("W")?"door-shoji":"door-terrace":e.includes("U")?"door-fold":e.includes("W")?"door-fusuma":e.includes("R")?/[BP]/.test(e)?"door-closet":"door-white":/[TNE]/.test(e)?"door-white":/[LD]/.test(e)?"door-glass":"door-wood"}var r0={"door-terrace":.76,"door-shoji":.78,"door-fusuma":.78,"door-closet":.74,"door-auto":.76};function qy(n,t,e,i,s){let o=new Map,r=(m,w)=>m.id<w.id?`${m.id}|${w.id}`:`${w.id}|${m.id}`;for(let m of e.rooms)for(let w of m.cells)for(let[T,P,L]of[[1,0,"e"],[0,1,"s"]]){let U=e.at(w.x+T,w.z+P);if(!U||U===m)continue;let F=r(m,U);o.has(F)||o.set(F,[]),o.get(F).push({x:w.x,z:w.z,dir:L,name:`${w.x},${w.z},${L}`})}let a=new Set,c=new Set;for(let[m,w]of[i.here,i.below].entries())for(let T of w){for(let P of T.cells)for(let{name:L}of ji)a.add(Kh(P.x,P.z,L));for(let P of m===0?T.foot:T.head)c.add(Kh(P.x,P.z,P.side))}for(let m of c)a.delete(m);for(let m of s)for(let w of m.room.cells)for(let{name:T}of ji)a.add(Kh(w.x,w.z,T));let l=m=>[...o.keys()].map(w=>w.split("|").map(Number)).filter(w=>w.includes(m.id)).map(w=>e.rooms[w[0]===m.id?w[1]:w[0]]).filter(w=>o.get(r(m,w)).some(T=>!a.has(T.name))),f=(m,w)=>o.get(r(m,w)).filter(T=>!a.has(T.name)).length,h=m=>l(m).some(w=>w.code==="H"&&w.unit===m.unit),u=(m,w)=>m.code==="G"&&(w.code==="H"||!h(m)&&"LDMOA".includes(w.code)),d=(m,w)=>m.unit===w.unit&&!m.open&&!w.open&&(Bc.includes(m.code)&&Bc.includes(w.code)||u(m,w)||u(w,m)||m.code===w.code&&"HAMO".includes(m.code)||"AH".includes(m.code)&&"AH".includes(w.code)||"YH".includes(m.code)&&"YH".includes(w.code)),p=(m,w)=>m.open&&w.open&&m.unit===w.unit,y=new Map(e.rooms.map(m=>[m.id,m.id])),_=m=>{let w=m.id;for(;y.get(w)!==w;)w=y.get(w);return w},g=(m,w)=>y.set(_(m),_(w));for(let[m,w]of o){let[T,P]=m.split("|").map(L=>e.rooms[Number(L)]);if(d(T,P)||p(T,P)){for(let L of w)a.has(L.name)||c.add(L.name);g(T,P)}}let S=[],M=new Set,v=(m,w,T=Yy(m,w))=>{let P=r(m,w);if(M.has(P)||_(m)===_(w))return!0;let L=(o.get(P)??[]).filter(V=>!a.has(V.name));if(!L.length)return!1;let U=[];for(let V of[...L].sort((K,J)=>K.dir===J.dir?K.dir==="e"?K.x-J.x||K.z-J.z:K.z-J.z||K.x-J.x:K.dir<J.dir?-1:1)){let K=U.at(-1)?.at(-1);K&&K.dir===V.dir&&(V.dir==="e"?K.x===V.x&&K.z+1===V.z:K.z===V.z&&K.x+1===V.x)?U.at(-1).push(V):U.push([V])}let F=U.sort((V,K)=>K.length-V.length)[0],Y=F[0],B=Object.hasOwn(r0,T)&&F.length>=2,k=B?F.length/2:Math.floor((F.length-1)/2)+.5;return S.push({k:T,a:m,b:w,ww:B?cn[T].w:Math.min(r0[T]??cn[T].w,Ie-.15),...Y.dir==="e"?{line:"v",index:Y.x+1,pos:n.gz(Y.z)+k*Ie}:{line:"h",index:Y.z+1,pos:n.gx(Y.x)+k*Ie}}),M.add(P),!0},E=m=>m.open?m.code:_o.includes(m.code)?"hall":Bc.includes(m.code)||"MO".includes(m.code)?"living":m.code,C=(m,w,T=!1)=>{let L=l(m).filter(U=>U.unit===m.unit&&U.code!=="S"&&U.code!=="X").map(U=>[w.indexOf(w.includes(U.code)?U.code:E(U)),U]).filter(([U])=>U>=0).sort((U,F)=>U[0]-F[0]||f(m,F[1])-f(m,U[1]));return T?L.filter(([,U])=>v(m,U)).length>0:L.some(([,U])=>v(m,U))};for(let m of e.rooms){let{code:w}=m;w==="U"?C(m,["N","hall","living"])||C(m,["B","P","W","E"]):w==="N"?C(m,["hall","living"])||C(m,["B","P","W","E"]):w==="T"?C(m,["hall","N","living"])||C(m,["B","P","W","E"]):w==="R"?C(m,["W","B","P"])||C(m,["hall","living","E","N"]):w==="B"||w==="P"||w==="E"?C(m,["hall","living","Y"])||C(m,["B","P","W","E","N"]):w==="W"?(C(m,["hall","living"])||C(m,["B","P","E","N"]),C(m,["W","Y"],!0)):w==="Y"?C(m,["W","living","hall","B","P"],!0):w==="V"?C(m,["living","B","P","W","Y"],!0)||C(m,["hall","E","N"]):w==="A"?l(m).filter(T=>T.code==="C").forEach(T=>v(m,T)):w==="G"&&m.unit!=="0"&&l(m).filter(P=>P.unit==="0"&&"CAH".includes(P.code)).sort((P,L)=>f(m,L)-f(m,P)).some(P=>v(m,P,"door-flat"))}let A=new Set;for(let m of e.rooms){if(!(Bc.includes(m.code)||"MO".includes(m.code))||m.open||A.has(_(m)))continue;let w=l(m).filter(T=>T.unit===m.unit&&_o.includes(T.code)).sort((T,P)=>(T.code==="H"?0:1)-(P.code==="H"?0:1));(w.some(T=>_(T)===_(m)||M.has(r(m,T)))||w.length&&v(m,w[0]))&&A.add(_(m))}let b=m=>[...i.here,...i.below].some(w=>(i.here.includes(w)?w.foot:w.head).some(T=>e.at(T.x+Bn(T.side).dx,T.z+Bn(T.side).dz)===m)),x=e.rooms.filter(m=>m.unit==="0"&&(t===0?"GAMC".includes(m.code)||b(m):b(m)||s.some(w=>$y(w,e)===m)));for(let m=0;m<e.rooms.length*2;m++){let w=new Set,T=x.length?[...x]:e.rooms.filter(U=>!U.open&&U.code!=="S"&&U.code!=="X").slice(0,1);for(T.forEach(U=>w.add(U));T.length;){let U=T.pop();for(let F of l(U))w.has(F)||F.code==="S"||F.code==="X"||(_(F)===_(U)||M.has(r(U,F)))&&(w.add(F),T.push(F))}let P=e.rooms.filter(U=>!w.has(U)&&U.code!=="S"&&U.code!=="X"),L=!1;for(let U of P){let F=l(U).filter(B=>w.has(B)&&!B.open).sort((B,k)=>(B.unit===U.unit?0:1)-(k.unit===U.unit?0:1)||(_o.includes(B.code)?0:1)-(_o.includes(k.code)?0:1)).filter(B=>B.unit===U.unit||B.unit==="0"||U.unit==="0"),Y=l(U).filter(B=>w.has(B)&&B.open&&(B.unit===U.unit||B.code==="C"));if([...F,...Y].some(B=>v(U,B))){L=!0;break}}if(!L)break}return{open:c,closed:a,doors:S,shared:o,spaceOf:_}}function $y(n,t){let{dx:e,dz:i}=Bn(n.side),s=e?{x:e>0?n.room.x1:n.room.x0,z:n.room.z0}:{x:n.room.x0,z:i>0?n.room.z1:n.room.z0};return t.at(s.x+e,s.z+i)}var a0={L:["wp-white","floor-oak"],D:["wp-white","floor-oak"],K:["wp-ivory","floor-oak"],B:["wp-white","floor-maple"],P:["wp-ivory","floor-maple"],W:["juraku","tatami"],R:["wp-ivory","floor-maple"],N:["wp-white","tile-floor"],U:["tile-bath-white","tile-floor-blue"],T:["wp-white","tile-floor"],G:["wp-ivory","genkan-floor"],H:["wp-white","floor-oak"],S:["wp-white","floor-walnut"],Y:["plaster-white","floor-walnut"],O:["wp-grey","carpet-grey"],M:["wp-ivory","stone-floor"],E:["wp-ivory","floor-maple"],V:["concrete","concrete-floor"],C:["concrete","concrete-floor"],A:["wp-ivory","stone-floor"],X:["metal-silver","concrete-floor"]};function u0(n){let t=Object.hasOwn(mo,n.style)?n.style:"modern",e=Dh(n.id),i=(a,c=0)=>a[Math.floor(Cn(e,c+1)*a.length)%a.length],s={...mo[t].roof},o;t==="danchi"?o={wall:i(["mortar-white","mortar-cream","mortar-ivory"]),frame:i(["silver","steel","sage"],2),door:i(["steel","green","bronze"],3),rail:"bars"}:t==="mansion"?o={wall:i(["tile-white","tile-beige","tile-sand","tile-grey"]),frame:"black",door:"bronze",rail:i(["glass","solid"],4)}:t==="office"?o={wall:i(["metal-dark","tile-grey","metal-silver"]),frame:"black",door:"black",rail:"glass"}:t==="brutal"?o={wall:i(["concrete-stained","concrete","concrete-dark"]),frame:"black",door:"bronze",rail:"solid"}:t==="europe"?(o={wall:i(["stucco-cream","stucco-rose","stucco-ivory","stucco-yellow","stucco-sage"]),frame:"white",door:i(["green","navy","red"],5),rail:"bars",low:"brick-red"},s.f=i(["roof-tile-orange","roof-tile-orange","roof-tile-brown"],2)):t==="japan"?(o={wall:"plaster-white",frame:"wood",door:"wood",rail:"bars",low:i(["wood-dark","wood-dark","wood-brown"])},s.f=i(["roof-kawara","roof-kawara","roof-kawara-dark"],2)):t==="shop"?o={wall:i(["mortar-ivory","stucco-ivory","siding-sand"]),frame:"silver",door:"wood",rail:"bars"}:(o={wall:i(["siding-white","siding-sand","siding-grey","stucco-white","siding-navy"]),frame:i(["black","silver","bronze"],2),door:i(["wood","wood-dark","black"],3),rail:"panel"},s.f=i(["roof-slate","roof-metal","roof-slate"],4),s.k=i(["gable","gable","hip","shed"],6),s.k==="shed"&&(s.pitch=12));let r=n.look??{};return Object.hasOwn(qi,r.wall)?(o.wall=r.wall,o.low=Object.hasOwn(qi,r.low)?r.low:void 0):Object.hasOwn(qi,r.low)&&(o.low=r.low),Object.hasOwn(qi,r.roof)&&(s.f=r.roof),Object.hasOwn(Ld,r.roofKind)&&(s.k=r.roofKind,s.k!=="flat"?(s.pitch??(s.pitch=s.k==="shed"?12:30),s.eave??(s.eave=.45)):s.parapet??(s.parapet=.4)),Number.isFinite(r.eave)&&s.k!=="flat"&&(s.eave=r.eave),["bars","panel","glass","solid"].includes(r.rail)&&(o.rail=r.rail),Object.hasOwn(go,r.frame)&&(o.frame=r.frame),Object.hasOwn(go,r.door)&&(o.door=r.door),{...o,style:t,seed:e,roof:s}}function Ky(n,t,e,i,s,o,r){let{code:a}=t,c=h=>Array.from({length:Math.floor(i/2)},(u,d)=>[i/2+(d-(Math.floor(i/2)-1)/2)*2,h]),l=(h,u=!0)=>u?i>=2?[[i/2,h]]:[]:[[Math.floor((i-1)/2)+.5,h]];if(s==="C")return(a==="B"||a==="P")&&i>=2?l("win-lattice"):[];if(a==="S")return l(n==="danchi"||n==="mansion"||n==="brutal"?"win-block":"win-tall",!1);if("TNU".includes(a))return l("win-high",!1);if("GRXEAC".includes(a))return[];if(n==="office")return"OM".includes(a)?c(o===0&&e===r?"win-shop":e===r?"win-curtain":"win-ribbon"):[];if(n==="brutal")return"OMLDBPK".includes(a)?c(e===r?"win-ribbon":"win-hood"):l("win-hood",!1);if(n==="shop"&&a==="M")return e===r?c("win-shop"):[];if(a==="M"||a==="O")return c(e===r&&o===0?"win-shop":"win-slide");if(a==="H")return i>=1&&o>0?l("win-tall",!1):[];let f=n==="danchi"?"win-steel":"win-slide";return s==="V"||a==="Y"?c("door-terrace"):a==="L"||a==="D"||a==="W"?e===r&&o===0&&n!=="danchi"&&n!=="mansion"?c("door-terrace"):i>=2?l(f):[]:a==="K"?i>=2?l(n==="danchi"?"win-steel":"win-wide"):l("win-high",!1):a==="B"||a==="P"?i>=2?l(f):l("win-tall",!1):[]}function Gc(n,{exteriorOnly:t=!1,compactYard:e=!1}={}){let i=u0(n),{style:s,seed:o}=i,r=mo[s],a=Vy(n),{gx:c,gz:l}=a,f=Wy(a,s),h="s",u=r.wall/2+.012,d=[],p={pads:[],steps:[],items:[]},y=s==="danchi"||s==="mansion";for(let M=0;M<a.levels;M++){let v=f0(a,M),E={here:f[M]??[],below:f[M-1]??[]},C=Xy(a,M,v,u),A=qy(a,M,v,E,C),b=[],x=[],m=[],w=[],T=[],P=A.doors.map(k=>({...k}));for(let k of C)P.push({...k.door,k:"lift-door",ww:cn["lift-door"].w});let L=k=>k?k.code==="G"?k.unit==="0"&&!y?-r.doma:-Math.min(r.doma,.06):k.code==="V"?-.05:k.code==="C"?-.03:0:0;if(M===0){let k=v.rooms.filter(K=>K.unit==="0"&&K.code==="G"),V=k.length?[]:v.rooms.filter(K=>K.unit==="0"&&"AMOHL".includes(K.code)).sort((K,J)=>"AMOHL".indexOf(K.code)-"AMOHL".indexOf(J.code)||J.z1-K.z1).slice(0,1);for(let K of[...k,...V]){let J=null;for(let N of["s","e","w","n"]){let{dx:$,dz:I}=Bn(N),X=K.cells.filter(it=>a.at(0,it.x+$,it.z+I)==="."||a.at(0,it.x+$,it.z+I)==="J").sort((it,rt)=>$?it.z-rt.z:it.x-rt.x),G=[];for(let it of X){let rt=G.at(-1)?.at(-1);rt&&($?rt.x===it.x&&rt.z+1===it.z:rt.z===it.z&&rt.x+1===it.x)?G.at(-1).push(it):G.push([it])}for(let it of G){let rt=Math.min(it.length,2)*10-["s","e","w","n"].indexOf(N);(!J||rt>J.score)&&(J={score:rt,name:N,run:it})}}if(!J)continue;let{name:gt,run:lt}=J,{dx:j,dz:Z}=Bn(gt),z=lt.length>=2,q=K.code!=="G"||s==="shop"||s==="office"||s==="mansion",nt=q?z?"door-auto":"door-glass":z?"door-entrance":"door-steel",Q=z?lt.length>2&&!q?1:lt.length/2:.5;P.push({k:nt,ww:Math.min(cn[nt].w,lt.length*Ie-.3),s:L(K),c:i.door,canopy:1,front:!0,...j?{line:"v",index:lt[0].x+(j>0?1:0),pos:l(lt[0].z)+Q*Ie}:{line:"h",index:lt[0].z+(Z>0?1:0),pos:c(lt[0].x)+Q*Ie},out:gt})}}let U=(k,V)=>{let K=v.at(...k),J=v.at(...V);if(K===J)return null;let gt=!K||K.open,lt=!J||J.open;return!K||!J?(K??J).open?{type:"rail",a:K,b:J}:{type:"ext",a:K,b:J}:gt!==lt?{type:"ext",a:K,b:J}:gt&&lt?K.unit===J.unit?null:{type:"screen",a:K,b:J}:null},F=(k,V,K)=>{let J=null,gt=()=>{if(!J)return;let{from:lt,to:j,kind:Z}=J,[z,q]=k==="h"?[[c(lt),l(V)],[c(j+1),l(V)]]:[[c(V),l(lt)],[c(V),l(j+1)]],[nt,Q]=k==="h"?[Z.a,Z.b]:[Z.b,Z.a],N=ot=>!ot||ot.open?i.wall:r.stair==="rc"&&"SX".includes(ot.code)?"mortar-white":a0[ot.code]?.[0]??"wp-white",$={a:z,b:q,t:r.inner,l:N(nt),r:N(Q)};Z.type==="ext"?($.t=r.wall,i.low&&M===0&&((!nt||nt.open)&&($.ll=i.low),(!Q||Q.open)&&($.rl=i.low))):Z.type==="rail"?Object.assign($,{t:i.rail==="solid"?.12:.06,h:1.1,rail:(Z.a??Z.b).code==="C"&&i.rail==="glass"?"solid":i.rail}):Z.type==="screen"?Object.assign($,{t:.03,h:1.9,l:"metal-white",r:"metal-white"}):Z.type==="open"?Object.assign($,{t:.002,open:1}):(Z.type==="party"||Z.type==="shaft")&&($.t=Math.max(r.inner,r.wall*.85));let I=b.length;if(b.push($),Z.type==="open"||Z.type==="screen"){J=null;return}let X=k==="h"?z[0]:z[1],G=(j+1-lt)*Ie,it=[],rt=(ot,ut,ct,Mt={})=>{let ft=cn[ut],D=Math.min(ct??ft.w,G-.16),R=Math.min(Math.max(ot,D/2+.08),G-D/2-.08);if(D<.3||it.some(([pt,st])=>R+D/2>pt-.06&&R-D/2<st+.06))return!1;it.push([R-D/2,R+D/2]);let tt=Mt.s??ft.s,ht=Math.min(tt+ft.h,($.h??r.storey)-.12);return x.push({w:I,at:ne(R),k:ut,ww:ne(D),hh:ne(ht-tt),...Mt,s:ne(tt)}),!0};for(let ot of P){if(ot.line!==k||ot.index!==V||ot.pos<X-1e-6||ot.pos>X+G+1e-6)continue;let ut={};ot.s!==void 0&&(ut.s=ot.s),ot.canopy&&(ut.canopy=1);let ct=ot.c??(ot.k==="door-flat"?i.door:ot.k==="door-terrace"||ot.k==="door-auto"||ot.k==="door-glass"?i.frame:ot.k==="door-fusuma"||ot.k==="door-shoji"||ot.k==="door-closet"?void 0:s==="japan"?"wood":"white");ct&&(ut.c=ct),(ot.front||ot.k==="door-flat")&&(ut.outward=1),rt(ot.pos-X,ot.k,ot.ww,ut)}if(Z.type==="ext"){let ot=Z.a&&!Z.a.open?Z.a:Z.b,ut=ot===Z.a?Z.b:Z.a,ct=k==="h"?ot===Z.a?"s":"n":ot===Z.a?"e":"w",Mt=ut?ut.code:"out";for(let[ft,D]of Ky(s,ot,ct,j+1-lt,Mt,M,h))rt(ft*Ie,D,void 0,{c:D==="win-shutter"?i.door:i.frame})}J=null};for(let lt=0;lt<K;lt++){let[j,Z]=k==="h"?[[lt,V-1],[lt,V]]:[[V-1,lt],[V,lt]],z=U(j,Z),q=v.at(...j),nt=v.at(...Z),Q=k==="h"?`${lt},${V-1},s`:`${V-1},${lt},e`;if(q&&nt&&q!==nt&&A.open.has(Q))z={type:"open",a:q,b:nt};else if(!z&&q&&nt&&q!==nt){let $=q.code==="S"||nt.code==="S"||q.code==="X"||nt.code==="X";z={type:q.unit!==nt.unit?"party":$&&r.stair==="rc"?"shaft":"int",a:q,b:nt}}let N=z?`${z.type}|${z.a?.id??"-"}|${z.b?.id??"-"}`:"";J&&J.key!==N&&gt(),z&&(J??(J={from:lt,kind:z,key:N}),J.to=lt)}gt()};for(let k=0;k<=a.depth;k++)F("h",k,a.width);for(let k=0;k<=a.width;k++)F("v",k,a.depth);for(let k of v.rooms){let[V]=k.cells,K={at:[ne(c(V.x)+Ie/2),ne(l(V.z)+Ie/2)],f:r.stair==="rc"&&k.code==="S"?"concrete-floor":a0[k.code]?.[1]??"floor-oak",c:k.code==="W"||k.code==="Y"?"ceil-wood":"ceil-white",n:Uh[k.code]??"",code:k.code},J=L(k);J&&(K.y=J),k.open&&(K.open=1),k.unit!=="0"&&(K.unit=k.unit),k.code==="X"&&(K.shaft=1),m.push(K)}t||Zy({plan:a,level:M,rooms:v,walls:b,openings:x,items:w,house:n,style:s,info:r,flights:E});let Y=E.here.map(k=>({k:"path",pts:k.pts,w:k.w,...k.turn==="winder"?{turn:"winder"}:{},look:k.look})),B=C.map(k=>({x:k.x,z:k.z,w:k.w,d:k.d,r:k.r}));if(M===0&&r.base>=.6)for(let k of E.here){if(!k.block)continue;let{axis:V,open:K,far:J,flip:gt,u0:lt,u1:j,v0:Z,v1:z,w:q,gap:nt}=k.block;if(!k.cells.filter(et=>V==="z"?et.z===(J==="n"?Math.min(...k.cells.map(bt=>bt.z)):Math.max(...k.cells.map(bt=>bt.z))):et.x===(J==="w"?Math.min(...k.cells.map(bt=>bt.x)):Math.max(...k.cells.map(bt=>bt.x)))).every(et=>a.at(0,et.x+Bn(J).dx,et.z+Bn(J).dz)==="."))continue;let N=-(r.base-.1),$=K==="s"||K==="e",[I,X]=gt?[lt,lt+q]:[j-q,j],G=$?1:-1,it=$?Z:z,rt=it+G*(r.wall/2+q+.02),ot=Math.ceil(-N/.17),ut=(ot-1)*.27,ct=rt+G*(ut+.1),Mt=$?z:Z,ft=(et,bt)=>V==="z"?[ne(et),ne(bt)]:[ne(bt),ne(et)],D=gt?X+nt/2:I-nt/2;b.push({a:ft(D,ct),b:ft(gt?lt-k.block.tw:j+k.block.tw,ct),t:.002,open:1,l:"concrete",r:"concrete"}),b.push({a:ft(D,ct),b:ft(D,Mt),t:.002,open:1,l:"concrete",r:"concrete"});let R=(I+X)/2,tt=([et,bt])=>k.cells.some(vt=>et>c(vt.x)&&et<c(vt.x+1)&&bt>l(vt.z)&&bt<l(vt.z+1));for(let et=m.length-1;et>=0;et--)m[et].code==="S"&&tt(m[et].at)&&m.splice(et,1);m.push({at:ft(R,it+G*(r.wall/2+.3)),f:"concrete-floor",c:"ceil-white",n:"\u5165\u53E3",code:"A",y:N}),m.push({at:ft(R,(ct+Mt)/2),f:"concrete-floor",c:"ceil-white",n:"\u8E0A\u308A\u5834",code:"H"});let ht=ft(R,rt+G*(ut/2+.05));T.push({x:ht[0],z:ht[1],r:l0[J],w:ne(q),l:ne(ut+.1),from:N,rise:-N,n:ot,look:"rc"});let pt=V==="z"?"h":"v",st=V==="z"?J==="n"?Math.min(...k.cells.map(et=>et.z)):Math.max(...k.cells.map(et=>et.z))+1:J==="w"?Math.min(...k.cells.map(et=>et.x)):Math.max(...k.cells.map(et=>et.x))+1,Tt=b.findIndex(et=>!et.open&&(pt==="h"?Math.abs(et.a[1]-l(st))<1e-6&&Math.abs(et.b[1]-l(st))<1e-6&&et.a[0]<=R&&et.b[0]>=R:Math.abs(et.a[0]-c(st))<1e-6&&Math.abs(et.b[0]-c(st))<1e-6&&et.a[1]<=R&&et.b[1]>=R));if(Tt>=0){let et=b[Tt],bt=R-(pt==="h"?et.a[0]:et.a[1]);for(let vt=x.length-1;vt>=0;vt--)x[vt].w===Tt&&Math.abs(x[vt].at-bt)<q&&x.splice(vt,1);x.push({w:Tt,at:ne(bt),k:"arch",ww:ne(q-.1),hh:ne(2),s:ne(N),canopy:1,c:i.frame})}}d.push({h:r.storey,walls:b,openings:x,rooms:m,items:w,stairs:Y,...T.length?{steps:T}:{},...B.length?{lifts:B}:{}})}let _={v:2,style:s,base:r.base,ceiling:r.ceiling,storeys:d,roof:i.roof,yard:p};if(jy(_,a,i,r,n,{compact:e}),e||s0(_,{lotWidth:a.lotWidth,lotDepth:a.lotDepth,style:s}),o0(_,{lotWidth:a.lotWidth,lotDepth:a.lotDepth,style:s}),!t)for(let M=0;M<d.length;M++)Qy(_,M,[a.lotWidth,a.lotDepth]);let g=[],S=d.map(M=>{let v=JSON.stringify([M.walls,M.openings,M.rooms,M.items,M.stairs,M.steps,M.lifts]),E=g.indexOf(v);return g.push(v),E>=0?{h:M.h,like:E}:M});return{..._,storeys:S}}function Zy({plan:n,level:t,rooms:e,walls:i,openings:s,items:o,house:r,style:a}){let{gx:c,gz:l}=n,f=s.filter(d=>cn[d.k]?.door).map(d=>{let p=i[d.w],y=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])||1,_=Math.abs(p.b[0]-p.a[0])/y,g=Math.abs(p.b[1]-p.a[1])/y,S=p.a[0]+(p.b[0]-p.a[0])/y*d.at,M=p.a[1]+(p.b[1]-p.a[1])/y*d.at,v=d.ww/2+.06,E=.7;return{x0:S-_*v-g*E,x1:S+_*v+g*E,z0:M-g*v-_*E,z1:M+g*v+_*E}}),h=0,u=0;for(let d of e.rooms){if(d.code==="S"||d.code==="X")continue;let p={x0:c(d.x0)+.1,x1:c(d.x1+1)-.1,z0:l(d.z0)+.1,z1:l(d.z1+1)-.1},y=p.x1-p.x0,_=p.z1-p.z0,g=(x,m)=>e.at(Math.floor((x-c(0))/Ie),Math.floor((m-l(0))/Ie))===d,S=(x,m,w=.5,T=.02)=>{let P=Qe[x];if(!P)return!1;let L=m==="n"||m==="s",U=L?y:_;if(P.w>U-.04)return!1;let F=Math.min(Math.max(w*U,P.w/2+.03),U-P.w/2-.03),Y=L?p.x0+F:m==="w"?p.x0+P.d/2+T:p.x1-P.d/2-T,B=L?m==="n"?p.z0+P.d/2+T:p.z1-P.d/2-T:p.z0+F;return M(x,Y,B,{n:0,w:90,s:180,e:270}[m])},M=(x,m,w,T=0)=>{let P=Qe[x];if(!P)return!1;let[L,U]=T%180?[P.d/2,P.w/2]:[P.w/2,P.d/2];return![[-1,-1],[1,-1],[1,1],[-1,1]].every(([F,Y])=>g(m+F*(L-.02),w+Y*(U-.02)))||P.solid&&f.some(F=>m+L>F.x0&&m-L<F.x1&&w+U>F.z0&&w-U<F.z1)?!1:(o.push({k:x,x:ne(m),z:ne(w),r:T,...h?{set:h}:{}}),!0)},v=x=>{let m=o.length;h=++u,x.every(w=>w())||(o.length=m),h=0},E=[(p.x0+p.x1)/2,(p.z0+p.z1)/2],C=y>=_?["n","s","w","e"]:["w","e","n","s"],A=(x,m,w=.5)=>m.some(T=>S(x,T,w)),{code:b}=d;if(b==="G")d.unit==="0"&&a!=="danchi"&&a!=="mansion"?A("shoe-box",["w","e","n"]):A("shoe-box",["w","e","n","s"]);else if(b==="L"){let[x,m]=y>=_?["w","e"]:["n","s"];!S("sofa",x)&&!S("sofa",m)&&A("sofa",C),S("tv",m),M("table-low",E[0],E[1],y>=_?90:0),M("rug",E[0],E[1]),A("plant",["s","e","w","n"],.94),M("ceiling-light",E[0],E[1])}else if(b==="D"){let x=y>=_?0:90;v([()=>M("table-dining",E[0],E[1],x),...[[-.4,-.62,0],[.4,-.62,0],[-.4,.62,180],[.4,.62,180]].map(([m,w,T])=>()=>x?M("chair",E[0]+w,E[1]+m,(T+270)%360):M("chair",E[0]+m,E[1]+w,T))]),M("ceiling-light",E[0],E[1])}else if(b==="K")A("kitchen",C,.4),A("fridge",[...C].reverse(),.06)||A("fridge",C,.97),A("cupboard",[...C].reverse(),.8);else if(b==="B"){let x=d.cells.length>=12;A(x?"bed-double":"bed",["n","w","e","s"],.5),A("desk",["s","e","w","n"],.2),e.rooms.some(m=>m.code==="R"&&m.unit===d.unit)||A("wardrobe",["e","w","n","s"],.9)}else if(b==="P"){if(A("bed",["w","e","n","s"],.3),A("desk",["n","s","e","w"],.75)){let x=o.at(-1),m=x.r*Math.PI/180;M("chair",x.x+Math.sin(m)*.55,x.z+Math.cos(m)*.55,(x.r+180)%360)}A("shelf",["e","w","s","n"],.9)}else if(b==="W")v([()=>M("chabudai",E[0],E[1]),()=>M("zabuton",E[0],E[1]-.8),()=>M("zabuton",E[0],E[1]+.8)]),d.cells.length>=12&&A("tansu",["n","w","e"],.15);else if(b==="N")A("washbasin",C,.25),A("washer",C,.85)||A("washer",[...C].reverse(),.5);else if(b==="U")A("bathtub",y>=_?["e","w","n","s"]:["n","s","e","w"]);else if(b==="T")A("toilet",y>=_?["e","w"]:["n","s"])||A("toilet",["n","s","e","w"]);else if(b==="E")A("shelf",C,.3),A("boxes",[...C].reverse(),.7);else if(b==="O")for(let x=p.z0+1.9;x<p.z1-1.7;x+=3.5)for(let m=p.x0+2.1;m<p.x1-1.9;m+=4)for(let[w,T,P]of[[-.61,-.32,180],[.61,-.32,180],[-.61,.32,0],[.61,.32,0]])v([()=>M("office-desk",m+w,x+T,P),()=>M("office-chair",m+w,x+T+(P?-.62:.62),P?0:180)]);else if(b==="M")if(r.kind==="shop"){for(let x=p.x0+.9;x<p.x1-.8;x+=1.7)M("rack",x,p.z0+.5);A("counter",["e","w"],.3),A("mirror",["w","e"],.7)}else if(r.kind==="cafe"){A("counter",["n","e","w"],.5);for(let x=p.z0+2;x<p.z1-.9;x+=1.8)for(let m=p.x0+.9;m<p.x1-.8;m+=1.9)v([()=>M("cafe-table",m,x),()=>M("stool",m-.62,x),()=>M("stool",m+.62,x)])}else A("counter",["n","e","w"],.5),A("bench",["w","e"],.5),A("plant",["s","e","w"],.06);else b==="A"?(A("mail-boxes",["w","e","n"],.3),A("plant",["e","w","s"],.9)):b==="V"&&d.cells.length>=2&&t>=0&&(A("ac-unit",["w","e"],.5)||A("ac-unit",["n"],.1))}}function Jy(n,t,e,i=.17){let s=[],o=[];for(let r of $i(n).filter(a=>a.opening.canopy)){let[a,c]=r.normal;if(Math.max(Math.abs(a),Math.abs(c))<.9)continue;let l=(n.base??.3)+(r.opening.s??0),f=ne(l-.02),h=a>.9?t-r.x:a<-.9?r.x:c>.9?e-r.z:r.z,u=Math.min(r.width+.9,2.4),d=i/2,p=f>.06?Math.ceil(f/.18):0,y=Math.max(0,p-1)*.3,_=Math.max(.6,Math.min(1.25,h-y-.3));d+_+y>h&&(_=Math.max(.3,h-d-y)),d+_+y>h+1e-6&&(p=Math.min(p,1),y=0,_=Math.max(.2,Math.min(_,h-d)));let g=(v,E)=>ne(Math.min(E,Math.max(0,v))),S=(v,E,C)=>{let A=[r.x+a*v-c*C,r.z+c*v+a*C],b=[r.x+a*E+c*C,r.z+c*E-a*C];return{x0:g(Math.min(A[0],b[0]),t),z0:g(Math.min(A[1],b[1]),e),x1:g(Math.max(A[0],b[0]),t),z1:g(Math.max(A[1],b[1]),e)}};f>.03&&s.push({...S(d,d+_,u/2),y:f,f:"genkan-floor",porch:1});let M=d+_;p>1&&(o.push({x:ne(r.x+a*(M+y/2)),z:ne(r.z+c*(M+y/2)),r:c>.9?0:a>.9?90:c<-.9?180:270,w:ne(u),l:ne(y),from:0,rise:ne(f*(p-1)/p),n:p-1,top:f,look:"stone"}),M+=y),h-M>.2&&s.push({...S(M,h,Math.min(u,1.3)/2),y:.03,f:"stone-floor"})}return{pads:s,steps:o}}function jy(n,t,e,i,s,{compact:o=!1}={}){let{yard:r}=n,a=Jy(n,t.lotWidth,t.lotDepth,i.wall);if(o){r.pads.push(...a.pads.filter(l=>l.porch)),r.steps.push(...a.steps);return}r.pads.push(...a.pads),r.steps.push(...a.steps);let c=new Set;for(let l=0;l<t.depth;l++)for(let f=0;f<t.width;f++){if(t.at(0,f,l)!=="J"||c.has(`${f},${l}`))continue;let h=f;for(;t.at(0,h+1,l)==="J";)h++;let u=l;for(;Array.from({length:h-f+1},(y,_)=>t.at(0,f+_,u+1)).every(y=>y==="J");)u++;for(let y=l;y<=u;y++)for(let _=f;_<=h;_++)c.add(`${_},${y}`);let d={x0:t.gx(f),z0:t.gz(l),x1:t.gx(h+1),z1:Math.min(t.gz(u+1)+.4,t.lotDepth),y:.03,f:"concrete-floor"};r.pads.push(d);let p=d.z1-d.z0>=d.x1-d.x0;(p?d.z1-d.z0:d.x1-d.x0)>=4.2&&Cn(Dh(s.id),f,l)>.25&&r.items.push({k:"car",x:ne((d.x0+d.x1)/2),z:ne((d.z0+d.z1)/2),r:p?0:90})}}var Er=new Map;function Qy(n,t,e){let i=n.storeys[t],s=b=>!!Qe[b.k]?.solid,o=b=>{i.items=b.map(({set:x,...m})=>m)};if(!i.items.some(s))return o(i.items);let r=n.storeys[t-1]?.stairs??[],a=JSON.stringify([e,n.base,i.h,i.walls,i.openings,i.stairs,i.items,i.steps,i.lifts,r,t===0]);if(Er.has(a))return o(Er.get(a));let c={...n,storeys:n.storeys.map((b,x)=>x===t?{...b,items:[]}:b)},l=_r(c,t,{locked:!1}),f=.06,h=Math.ceil((e[0]+2)/f)+1,u=Math.ceil((e[1]+2)/f)+1,d=(b,x)=>[Math.round((b+1)/f),Math.round((x+1)/f)],p=new Uint8Array(h*u),y=(b,x,m,w,T,P)=>{let[L,U]=d(x,m),[F,Y]=d(w,T);for(let B=Math.max(0,U);B<=Math.min(u-1,Y);B++)for(let k=Math.max(0,L);k<=Math.min(h-1,F);k++)!b[B*h+k]&&P(k*f-1,B*f-1)&&(b[B*h+k]=1)};for(let b of l.segments){let x=ze+b.r,m=b.bx-b.ax,w=b.bz-b.az,T=m*m+w*w||1e-9;y(p,Math.min(b.ax,b.bx)-x,Math.min(b.az,b.bz)-x,Math.max(b.ax,b.bx)+x,Math.max(b.az,b.bz)+x,(P,L)=>{let U=Math.min(1,Math.max(0,((P-b.ax)*m+(L-b.az)*w)/T));return Math.hypot(P-b.ax-m*U,L-b.az-w*U)<x-1e-6})}let _=(b,x,m=0)=>{let w=x.r*Math.PI/180,T=Math.cos(w),P=Math.sin(w),L=Math.hypot(x.w,x.d)/2+ze+m;y(b,x.x-L,x.z-L,x.x+L,x.z+L,(U,F)=>{let Y=(U-x.x)*T-(F-x.z)*P,B=(U-x.x)*P+(F-x.z)*T;return Math.hypot(Math.max(0,Math.abs(Y)-x.w/2),Math.max(0,Math.abs(B)-x.d/2))<ze+m-1e-6})};for(let b of l.boxes)_(p,b);let g=t===0?$i(c).map(b=>b.outside):_r(c,t-1,{locked:!1}).stairs.filter(b=>b.up).map(({head:b})=>[b.at[0]+b.out[0]*(ze+.16),b.at[1]+b.out[1]*(ze+.16)]);if(t>0)for(let b of l.lifts)g.push([b.at[0]+b.out[0]*.6,b.at[1]+b.out[1]*.6]);let S=l.stairs.map(({gate:b})=>[b.at[0]+b.out[0]*(ze+.08),b.at[1]+b.out[1]*(ze+.08)]);for(let b of l.lifts)S.push([b.at[0]+b.out[0]*.6,b.at[1]+b.out[1]*.6]);for(let b of i.openings){if(!cn[b.k]?.door||cn[b.k].lift)continue;let x=i.walls[b.w],m=Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])||1,w=(x.b[0]-x.a[0])/m,T=(x.b[1]-x.a[1])/m,P=x.a[0]+w*b.at,L=x.a[1]+T*b.at;S.push([P+T*.55,L-w*.55],[P-T*.55,L+w*.55])}let M=b=>{let x=new Uint8Array(h*u),m=[],w=(T,P)=>{T<0||P<0||T>=h||P>=u||x[P*h+T]||b[P*h+T]||(x[P*h+T]=1,m.push(T,P))};for(let[T,P]of g){let[L,U]=d(T,P);for(let F=-2;F<=2;F++)for(let Y=-2;Y<=2;Y++)w(L+Y,U+F)}for(;m.length;){let T=m.pop(),P=m.pop();w(P+1,T),w(P-1,T),w(P,T+1),w(P,T-1)}return([T,P])=>{let[L,U]=d(T,P);for(let F=-1;F<=1;F++)for(let Y=-1;Y<=1;Y++)if(L+Y>=0&&U+F>=0&&L+Y<h&&U+F<u&&x[(U+F)*h+L+Y])return!0;return!1}},v=S.filter(M(p)),E=b=>({x:b.x,z:b.z,w:Qe[b.k].w,d:Qe[b.k].d,r:b.r??0}),C=b=>{let x=p.slice();for(let m of b)s(m)&&_(x,E(m),.07);return x},A=i.items;if(!v.every(M(C(A)))){A=[];for(let b=0;b<i.items.length;){let x=b+1;for(;i.items[b].set&&i.items[x]?.set===i.items[b].set;)x++;let m=i.items.slice(b,x);b=x,(!m.some(s)||v.every(M(C([...A,...m]))))&&A.push(...m)}}Er.size>400&&Er.clear(),Er.set(a,A),o(A)}var Jh=new WeakMap;function d0(n){return n.design?n.design:(Jh.has(n)||Jh.set(n,Gc(n)),Jh.get(n))}var tv={modern:2,europe:2,japan:1,danchi:4,mansion:6,office:6,brutal:1,shop:1},p0=n=>"123456789abcdefghijklmnopqrstuvwxyz"[n%35];function yo(n,t){let e=Array.from({length:t},()=>Array(n).fill(".")),i=Array.from({length:t},()=>Array(n).fill("0")),s=(r,a)=>r>=0&&a>=0&&r<n&&a<t,o={fill(r,a,c,l,f,h){for(let u=a;u<=l;u++)for(let d=r;d<=c;d++)s(d,u)&&(e[u][d]=f,h!==void 0&&(i[u][d]=String(h)));return o},stamp(r,a,c,{unit:l,flip:f=!1}={}){return c.forEach((h,u)=>{[...f?[...h].reverse().join(""):h].forEach((d,p)=>{d===" "||!s(r+p,a+u)||(e[a+u][r+p]=d,l!==void 0&&(i[a+u][r+p]=String(l)))})}),o},text:()=>e.map(r=>r.join("")).join(""),units:()=>i.map(r=>r.join("")).join("")};return o}var ev={ground:["UUSSKKKK","UUSSKKKK","NNSSDDDD","NNHHDDDD","THHLLLLL","TGGLLLLL","RGGLLLLL","........"],upper:["EESSTPPP","EESSTPPP","EESSHPPP","HHHHHRRR","PPPPBBBB","PPPPBBBB","PPPPBBBB","VVVVVVVV"]},nv={ground:["UUNTKKKK","UUNTKKKK","HHHHDDDD","SSHWWWWR","SSHWWWWR","GGHWWWWR","GGHYYYYY","........"],upper:["EETRWWWW","EETRWWWW","HHHHWWWW","SSHBBBBR","SSHBBBBR","PPHBBBBR","PPHVVVVV","........"]};function m0(n,t,e,i,s,o){let r=yo(t,e),a=n==="japan"?nv:ev,c=o%2===1,l=t>=24||t>=16&&c?8:0,f=e>=16?e-15:0,h=i===0?a.ground:a.upper;return s===1&&(h=h.map(u=>u.replaceAll("S","E"))),r.stamp(l,f,h,{flip:c}),i===0&&(e>=16?r.fill(c?l+1:l+4,e-6,c?l+3:l+6,e-1,"J"):t>=16&&r.fill(l?2:t-5,2,l?4:t-3,7,"J")),r}var c0={pair:{rows:["KKKNUUSSSUUNKKKK","KKKNUUSSSUUNKKKK","DDDHTTSSSTTHDDDD","DDDHHGHHHGHHDDDD","WWWWwwwRRwwwRWWW","WWWWwwwRRwwwRWWW","WWWWwwwEEwwwRWWW","VVVVVVVVVVVVVVVV"],units:["aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb"]},single:{rows:["SSSUUNKK","SSSUUNKK","SSSTHDDD","HHHGHDDD","wwwHHWWW","wwwRRWWW","wwwRRWWW","VVVVVVVV"],units:["000aaaaa","000aaaaa","000aaaaa","000aaaaa","aaaaaaaa","aaaaaaaa","aaaaaaaa","aaaaaaaa"]}};function Vc(n,t,e,{rows:i,units:s},o){let r=[...new Set(s.join("").replaceAll("0",""))].sort();return n.stamp(t,e,i,{unit:0}),s.forEach((a,c)=>[...a].forEach((l,f)=>{l!=="0"&&n.fill(t+f,e+c,t+f,e+c,i[c][f],p0(o+r.indexOf(l)))})),r.length}function iv(n,t){let e=yo(n,t),i=Math.max(0,t-8-(t>=16?7:0)),s=0,o=0;for(;o+16<=n;o+=16)s+=Vc(e,o,i,c0.pair,s);return o+8<=n&&Vc(e,o,i,c0.single,s),e}var sv={wide:["BBBGPPP","BBBHPPP","BBBHPPP","BBBHPPP","UUNHTTR","UUNHEEE","KKKHEEE","KKKDRRR","LLLDWWW","LLLDWWW","LLLDWWW","LLLDWWW","VVVVVVV","VVVVVVV"],narrow:["BBBGPP","BBBHPP","BBBHPP","BBBHPP","UUNHTT","UUNHEE","KKKHEE","KKKDRR","LLLDWW","LLLDWW","LLLDWW","LLLDWW","VVVVVV","VVVVVV"],studio:["UUGKKK","UUHKKK","TTHLLL","LLLLLL","LLLLLL","LLLLLL","VVVVVV"]};function ov(n,t,e){let i=yo(n,t),s=t>=16,o=s?2:1,r=o+(s?13:6),a=n>=24?[s?"wide":"studio",s?"wide":"studio","core",s?"narrow":"studio"]:n>=16?[s?"narrow":"studio","core",s?"narrow":"studio"]:["stairs",s?"narrow":"studio"],c=0,l=0,f=!1;for(let[h,u]of a.entries())if(u==="core")i.fill(c,o,c+1,o+2,"X",0).fill(c+2,o,c+3,o+4,"S",0),c+=4;else if(u==="stairs")i.fill(c,o,c+1,o+3,"S",0),c+=2;else{let d=sv[u],p=d[0].length;e===0&&!f&&a[h-1]&&a[h-1]!==u?(f=!0,i.fill(c,o,c+p-1,r,"A",0),s&&i.fill(c+2,o,c+p-1,o+5,"E",0)):i.stamp(c,o,d,{unit:p0(l++),flip:h>0&&a[h-1]!==u}),c+=p}return i.fill(0,0,c-1,o-1,"C",0),e===0&&t>=24&&i.fill(1,t-6,n-2,t-1,"J"),i}function rv(n,t,e){let i=yo(n,t).fill(0,0,n-1,t-1,e?"O":"M");return i.fill(0,0,1,2,"X").fill(2,0,3,4,"S").fill(4,0,5,1,"T").fill(6,0,7,1,"E"),i}function Qi(n,t,e,i=tv[n]??2,s=0){let o=Yi*t,r=Yi*e,a=Array.from({length:i},(l,f)=>n==="danchi"?iv(o,r):n==="mansion"?ov(o,r,f):n==="office"?rv(o,r,f):n==="brutal"?yo(o,r):m0(n,o,r,f,i,s)),c=a.map(l=>l.units());return{floors:a.map(l=>l.text()),...c.some(l=>/[^0]/.test(l))?{units:c}:{}}}var kc={ground:[".UUTSS..",".NNKSS..",".NNKKH..",".LLLLH..",".LLLLG..",".LLLLG..","........","........"],middle:[".EEESS..",".DDDSS..",".DDDKK..",".LLLLL..",".LLLLL..",".LLLLL..",".VVVVV..","........"],top:[".BBBSS..",".BBBSS..",".BBBHH..",".PPPHH..",".PPPPR..",".PPPPR..",".VVVVV..","........"]},Hc={rows:["AACCCCCCCCCCCCCC","SSGGTTTGGTTTGGTT","SSKKHHNKKHHNKKHH","SSKKUUUKKUUUKKUU","EELLLLLLLLLLLLLL","EELLLLLLLLLLLLLL","..VVVVVVVVVVVVVV","................"],units:["0000000000000000","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","0000000000000000"]},jh={ground:[".EETSS..",".KKKSS..",".KKKHH..",".MMMMM..",".MMMMM..",".MMMMM..",".MMMMM..","........"],upper:[".UUTSS..",".NNKSS..",".LLDDH..",".LLLLB..",".LLLLB..",".VVVVV..","........","........"]},Qh={ground:[".UUTKK..",".NNTHK..",".SSSHD..",".SSWWW..",".GGWWW..",".GGYYY..","........","........"],upper:[".EETRR..",".SSSHR..",".SSSHW..",".BBBBW..",".BBBBW..",".VVVVV..","........","........"]},tf={ground:["..UUUUNNKKKKK...","..UUUUNNKKKKK...","..SSSTHHDDDDD...","..SSSTHHDDDDD...","..RRRHHHLLLLL...","..RRRGGHLLLLL...","..RRRGGHLLLLL...","....HHHHWWWWW...","....VVVVWWWWW..."],upper:["..EEETBBBBBPP...","..EEETBBBBBPP...","..SSSHBBBBBPP...","..SSSHHHHHHPP...","..PPPPHRRRbbb...","..PPPPHRRRbbb...","....VVVVVVbbb...","....VVVVVVVVV..."]},ef={ground:[".UUUUUNNKKKKKKK.",".UUUUUNNKKKKKKK.",".SSSTTHHDDDDDDD.",".SSSTTHHDDDDDDD.",".RRRRRHHLLLLLLL.",".RRRRRHHLLLLLLL.",".WWWWGGGLLLLLLL.",".WWWWGGGLLLLLLL.",".WWWWWWWYYYYYY..",".WWWWWWWYYYYYY..",".VVVVV..VVVVVV.."],upper:[".EEEETBBBBBPPPP.",".EEEETBBBBBPPPP.",".SSSTHBBBBBPPPP.",".SSSTHHHHHHPPPP.",".RRRRHbbbbRRRPP.",".RRRRHbbbbRRRPP.",".PPPPHbbbbRRRPP.",".PPPPHbbbbVVVVV.",".VVVVV....VVVVV."]};function ts(n,t=1,e=1,i=2,s=0){let o=Yi*t,r=Yi*e,a=s%2===1,c=Array.from({length:i},(f,h)=>{let u=yo(o,r);if(n==="estate"&&t>=2&&e>=2){let d=h===0?ef.ground:ef.upper;return i===1&&(d=ef.ground.map(p=>p.replaceAll("S","E"))),u.stamp(0,2,d,{flip:a}),u}if(n==="large"&&t>=2&&e>=2){let d=h===0?tf.ground:tf.upper;return i===1&&(d=tf.ground.map(p=>p.replaceAll("S","E"))),u.stamp(0,3,d,{flip:a}),u}if(n==="apart")return t>=2?Vc(u,0,0,{rows:Hc.rows,units:Hc.units},0):Vc(u,0,0,{rows:Hc.rows.map(d=>d.slice(0,7)),units:Hc.units.map(d=>d.slice(0,7))},0),u;if(n==="pencil"){let d=h===0?kc.ground:h===i-1&&i>=3?kc.top:kc.middle;return i===1&&(d=kc.ground.map(p=>p.replaceAll("S","E"))),u.stamp(0,0,d,{flip:a}),u}if(n==="shophouse"){let d=h===0?jh.ground:jh.upper;return i===1&&(d=jh.ground.map(p=>p.replaceAll("S","E"))),u.stamp(0,0,d,{flip:a}),u}if(n==="machiya"){let d=h===0?Qh.ground:Qh.upper;return i===1&&(d=Qh.ground.map(p=>p.replaceAll("S","E"))),u.stamp(0,0,d,{flip:a}),u}return m0("modern",o,r,h,i,s)}),l=c.map(f=>f.units());return{floors:c.map(f=>f.text()),...l.some(f=>/[^0]/.test(f))?{units:l}:{}}}var rf={shop:{id:"shop",kind:"shop",style:"shop",w:1,d:1,sign:"\u3072\u3060\u307E\u308A\u6D0B\u54C1\u5E97",floors:[`EEEETTKKEEEETTKK${"MMMMMMMM".repeat(5)}........`]},cafe:{id:"cafe",kind:"cafe",style:"shop",w:1,d:1,sign:"\u3053\u3082\u308C\u3073\u55AB\u8336",floors:[`EEEETTKKEEEETTKK${"MMMMMMMM".repeat(5)}........`]}},y0=new H(0,1,0),v0=new H(0,-1,0),fe=([n,t],e)=>new H(n,e,t),av=()=>xt("#3a4046","#ffffff",{roughness:.9}),cv=()=>xt("concrete","#b9b6ae"),Xc=()=>xt("#5b6266","#ffffff",{roughness:.5,metalness:.6}),nf=()=>xt("#4a4f52","#ffffff",{roughness:.5,metalness:.45}),sf=(n,t)=>Math.max(.12,t.h-(n.ceiling??t.h-.22));function li(n,t,e,i,s,{narrow:o=1,top:r=!0,bottom:a=!1}={}){let c=(d,p)=>[(d[0]+p[0])/2+(d[0]-p[0])/2*o,(d[1]+p[1])/2+(d[1]-p[1])/2*o],l=c(e.l[0],e.r[0]),f=c(e.l[1],e.r[1]),h=c(e.r[0],e.l[0]),u=c(e.r[1],e.l[1]);n.quad(t,fe(l,i),fe(f,i),fe(f,s),fe(l,s),new H(e.d[1],0,-e.d[0])),n.quad(t,fe(h,i),fe(u,i),fe(u,s),fe(h,s),new H(-e.d[1],0,e.d[0])),a&&(o===1?n.shape(t,e.poly,[],i,!1):n.quad(t,fe(l,i),fe(f,i),fe(u,i),fe(h,i),v0)),r&&(o===1?n.shape(t,e.poly,[],s,!0):n.quad(t,fe(l,s),fe(f,s),fe(u,s),fe(h,s),y0))}function lv(n,t,e,i,s,o,r,a,c){let[l]=n[t],[f,h]=n.span[t],u=t==="l"?new H(n.d[1],0,-n.d[0]):new H(-n.d[1],0,n.d[0]),d=(S,M)=>new H(l[0]+n.d[0]*(S-f),o+M,l[1]+n.d[1]*(S-f)),p=(S,M,v,E)=>{if(!(M-S<1e-4))for(let[C,A,b]of i){let x=Math.max(v,C),m=Math.min(E,A);if(m-x<1e-4)continue;let w=c?x<_n&&m>_n?[[x,_n,r],[_n,m,a]]:[[x,m,x>=_n?a:r]]:[[x,m,r]];for(let[T,P,L]of w)L?.quad(b,d(S,T),d(M,T),d(M,P),d(S,P),u)}},y=i[0][0],_=Math.min(f,h),g=Math.max(f,h);for(let S of e){let M=Math.max(_,S.at-S.ww/2),v=Math.min(g,S.at+S.ww/2);v<=M||(p(_,M,y,s),p(M,v,y,S.s),p(M,v,Math.min(s,S.s+S.hh),s),_=v)}p(_,g,y,s)}function hv(n,t,e,i,s,o,r){let a=i.rail,c=qe(i.l);li(n,c,e,s-r,s+.001,{bottom:!0});let l=Xc(),f=Math.hypot(e.r[1][0]-e.r[0][0],e.r[1][1]-e.r[0][1]),h=d=>{let p=[(e.l[0][0]+e.r[0][0])/2,(e.l[0][1]+e.r[0][1])/2];return[p[0]+e.d[0]*d,p[1]+e.d[1]*d]},u=Math.atan2(-e.d[1],e.d[0]);if(a==="panel"){li(n,xt("#e9e2cd","#ffffff",{roughness:.8}),e,s+.1,s+.66,{narrow:.5}),li(n,l,e,s+.69,s+.72,{narrow:.5}),li(n,l,e,s+o-.06,s+o);for(let d=.04;d<f;d+=1.56){let[p,y]=h(Math.min(d,f-.04));n.box(l,p,s+o/2,y,.04,o,.04,u)}}else if(a==="glass"){li(t,Fn("rail"),e,s+.12,s+o-.08,{narrow:.25,top:!1}),li(n,l,e,s+o-.06,s+o),li(n,l,e,s,s+.08,{narrow:.6});for(let d=.04;d<f+.8;d+=1.56){let[p,y]=h(Math.min(d,f-.04));n.box(l,p,s+o/2,y,.04,o,.04,u)}}else{li(n,l,e,s+o-.05,s+o),li(n,l,e,s+.06,s+.1,{narrow:.7});for(let d=.08;d<f-.02;d+=.13){let[p,y]=h(d);n.box(l,p,s+o/2,y,.018,o-.12,.018,u)}}}var g0={"door-entrance":{swing:1,look:"slit"},"door-wood":{swing:1,look:"panel"},"door-white":{swing:1,look:"panel"},"door-steel":{swing:1,look:"flat"},"door-glass":{swing:1,look:"glass"},"door-double":{swing:2,look:"panel"},"door-slide":{slide:1,look:"panel"},"door-fusuma":{slide:2,look:"fusuma"},"door-shoji":{slide:2,look:"shoji"},"door-auto":{slide:2,apart:!0,look:"glass"},"door-terrace":{slide:2,look:"glass"},"door-oyako":{swing:1,look:"slit",small:.27},"door-flat":{swing:1,look:"flat"},"door-fold":{swing:1,look:"glass"},"door-key":{swing:1,look:"key"},"door-closet":{swing:2,look:"panel"},"lift-door":{slide:2,apart:!0,look:"plain",lift:!0},"door-platform":{slide:2,apart:!0,look:"glass",platform:!0}},b0=n=>Fn(n?"far":"inner"),fv=()=>xt("#d3dcda","#ffffff",{roughness:.28});function of(n,t,e,i,s,o,r){let a=[new H(e,s,r),new H(i,s,r),new H(i,o,r),new H(e,o,r)];n.face(b0(t),t<0?a.reverse():a)}var uv={"win-slide":2,"win-full":2,"win-lattice":2,"win-hood":2,"win-wide":4},dv=new Set(["win-small","win-high","win-tall"]);function pv(n,t,e,i,s,o,r){let a=e.k,c=e.ww,l=e.hh,f=e.s,h=s,u=f+l/2,p=a==="win-curtain"||a==="win-shop"||a==="win-ribbon"?.035:.045,y=a==="win-shutter"?vr("white"):r,_=(m,w,T,P,L,U,F,Y,B=U)=>{n.box(m,w+U/2,(P+L)/2,F,U,L-P,Y),n.box(m,T-U/2,(P+L)/2,F,U,L-P,Y),n.box(m,(w+T)/2,L-U/2,F,T-w-U*2,U,Y),n.box(m,(w+T)/2,P+B/2,F,T-w-U*2,B,Y)},g=h?h*(i/2+.02):i/2+.005,S=h?h*(i/2-.05):-i/2-.005;if(_(y,-c/2,c/2,f,f+l,p,(g+S)/2,Math.abs(g-S)),h){let w=e.c==="wood"||e.c==="wood-dark"?r:xt("#f1eee6","#ffffff",{roughness:.8}),T=-h*(i/2+.008);Math.abs(T-S)>.02&&_(w,-c/2,c/2,f,f+l,.02,(S+T)/2,Math.abs(T-S)),n.box(w,0,f+.011,-h*(i/2+.02),c+.05,.022,.06),n.box(y,0,f-.008,h*(i/2+.04),c+.03,.016,.08)}let M=-c/2+p,v=c/2-p,E=f+p,C=f+l-p,A=m=>h?h*(i/2-.004-m*.028):m?-.014:.014,b=(m,w,T,P=.035,L=.05)=>{_(y,m,w,E,C,P,T,.026,L),of(t,h,m+P,w-P,E+L,C-P,T)},x=uv[a];if(a==="win-round"){n.box(y,0,u,A(0),v-M,C-E,.03);let m=Math.min(v-M,C-E)/2-.05;for(let[w,T]of[[h||1,b0(h)],[-(h||1),Fn("inner")]])t.face(T,Array.from({length:18},(P,L)=>{let U=L/18*Math.PI*2*w;return new H(Math.cos(U)*m,u+Math.sin(U)*m,A(0)+w*.018)}))}else if(a==="win-block"){n.box(xt("#dfe9e6","#ffffff",{roughness:.25}),0,u,0,v-M,C-E,.08);let m=xt("#b9c2bf","#ffffff",{roughness:.8});for(let w=M+.19;w<v-.05;w+=.19)n.box(m,w,u,0,.012,C-E,.085);for(let w=E+.19;w<C-.05;w+=.19)n.box(m,0,w,0,v-M,.012,.085)}else if(x===2){let m=h>=0;b(M,.0175,A(m?1:0)),b(-.0175,v,A(m?0:1))}else if(x===4){let m=(v-M)/4;b(M,-m+.0175,A(0)),b(-m-.0175,0,A(1)),b(0,m+.0175,A(1)),b(m-.0175,v,A(0))}else a==="win-shutter"?(b(M,0,A(0),.03,.03),b(0,v,A(0),.03,.03),n.box(y,0,u,A(0),v-M,.03,.03)):dv.has(a)?b(M,v,A(0),.03,.03):(of(t,h,M,v,E,C,A(0)),a==="win-steel"&&(n.box(y,0,u,A(0),.03,C-E,.04),n.box(y,0,f+l*.72,A(0),v-M,.03,.04)));if(x&&h&&n.box(Xc(),0,u,h*(i/2-.056),.022,.06,.018),a==="win-shutter"&&h)for(let m of[-c/2-.15,c/2+.15]){n.box(r,m,u,h*(i/2+.03),.27,l,.04);for(let w=1;w<8;w++)n.box(r,m,f+l*w/8,h*(i/2+.055),.21,.02,.012)}if(a==="win-lattice"&&h){let m=h*(i/2+.05);for(let w=1;w<8;w++)n.box(r,-c/2+c*w/8,u,m,.028,l,.028);for(let w of[f+.06,f+l-.06])n.box(r,0,w,m,c,.04,.035)}if(a==="win-hood"&&h){let m=h*(i/2+.16);for(let w of[-c/2-.1,c/2+.1])n.box(o,w,u,m,.2,l+.36,.32);n.box(o,0,f+l+.09,m,c,.18,.32)}a==="win-shop"&&n.box(y,0,f-.06,h*.02,c,.12,i+.05)}function vo(n,t,e,i,s=0){let o=new le,r=t/2,a=()=>{for(let c of[-.04,.04])o.box(Xc(),t-.08,1,c,.03,.14,.03)};if(n==="glass"){for(let c of[.03,t-.03])o.box(i,c,e/2,0,.06,e,.04);for(let c of[.04,e-.04])o.box(i,r,c,0,t-.12,.08,.04);of(o,s,.06,t-.06,.08,e-.08,0),a()}else if(n==="fusuma"){o.box(xt("#efe9d8","#ffffff",{roughness:.95}),r,e/2,0,t-.04,e-.04,.02);let c=xt("wood","#5a4636");for(let l of[.01,t-.01])o.box(c,l,e/2,0,.02,e,.03);for(let l of[.01,e-.01])o.box(c,r,l,0,t-.04,.02,.03);for(let l of[-.012,.012])o.cylinder(xt("#3d3530"),t-.1,.92,l-.004,.03,.008,10)}else if(n==="shoji"){o.box(xt("#f6f1e2","#ffffff",{roughness:1}),r,e/2,0,t-.04,e-.04,.008);let c=xt("wood","#c9a37a");for(let l of[.012,t-.012])o.box(c,l,e/2,0,.024,e,.03);for(let l of[.012,e-.012])o.box(c,r,l,0,t-.048,.024,.03);for(let l=1;l<3;l++)o.box(c,t*l/3,e/2,0,.012,e-.05,.02);for(let l=1;l<6;l++)o.box(c,r,e*l/6,0,t-.05,.012,.02)}else{if(o.box(i,r,e/2,0,t,e,.04),n==="panel"||n==="key")for(let c of[e*.28,e*.72])for(let l of[-.022,.022])o.box(i,r,c,l,t*.66,e*.34,.006);else if(n==="slit")for(let c of[-.022,.022])o.box(fv(),t*.3,e*.56,c,Math.min(.12,t*.4),e*.56,.006);if(n==="key")for(let c of[-.026,.026])o.box(Xc(),t-.08,1.16,c,.05,.09,.012);n!=="plain"&&n!=="still"&&a()}return o}function mv(n,t,e,i,s,o){let r=cn[e.k]??cn["win-fixed"],a=e.ww,c=e.hh,l=e.s,f=l+c/2,h=i+.03,u=vr(e.c??(r.door?"wood":"white"));if(e.k==="arch"){let E=xt("#f1eee6","#ffffff",{roughness:.8});for(let C of[-a/2+.008,a/2-.008])n.box(E,C,f,0,.016,c,h);return n.box(E,0,l+c-.008,0,a-.032,.016,h),[]}if(!r.door)return pv(n,t,e,i,s,o,u),[];let d=g0[e.k]??g0["door-wood"],p=xt("#c6c9c5","#ffffff",{roughness:.32,metalness:.75}),y=d.lift||d.platform?p:u,_=.05;for(let E of[-a/2+_/2,a/2-_/2])n.box(y,E,l+c/2,0,_,c,h);n.box(y,0,l+c-_/2,0,a-_*2,_,h),n.box(d.lift?p:xt("#8f8d87","#ffffff",{roughness:.7}),0,l+.008,0,a-_*2,.016,h);let g=a-_*2,S=d.lift?p:d.look==="glass"?d.platform?p:u:vr(e.c??"wood"),M=c-_-.02,v=(s?-s:1)*(e.outward?-1:1);if(d.swing===1){let E=e.flip?g/2:-g/2,C=(e.flip?-1:1)*(v>0?-1:1),A=d.small&&g>.9?g*d.small:0,b=[{swing:!0,x:E,y:l+.016,z:0,mirror:!!e.flip,batch:vo(d.look,g-A,M,S,s*(e.flip?-1:1)),dir:C}];return A&&b.push({swing:!0,x:-E,y:l+.016,z:0,mirror:!e.flip,batch:vo("still",A-.004,M,S,s*(e.flip?1:-1)),dir:0}),b}return d.swing===2?[-1,1].map(E=>({swing:!0,x:E*g/2,y:l+.016,z:0,mirror:E>0,batch:vo(d.look,g/2,M,S,s*(E>0?-1:1)),dir:(E>0?-1:1)*(v>0?-1:1)})):d.apart?[-1,1].map(E=>({slide:E*(g/2-.04),x:E<0?-g/2:0,y:l+.016,z:d.lift||d.platform?0:v*(i/2+.035),batch:vo(d.look,g/2,M,S,s),lift:!!d.lift})):d.slide===2?[0,1].map(E=>({slide:E?0:g/2-.05,x:E?0:-g/2,y:l+.016,z:(E?1:-1)*.022,batch:vo(d.look,g/2+.02,M,S,s)})):[{slide:g-.06,x:-g/2,y:l+.016,z:v*(i/2+.03),batch:vo(d.look,g,M,S,s)}]}function x0(n,t,e,i,s){let o=i.clone().sub(e).normalize(),r=(Math.abs(o.y)>.95?new H(1,0,0):new H(0,1,0)).cross(o).normalize().multiplyScalar(s/2),a=o.clone().cross(r).normalize().multiplyScalar(s/2),c=h=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([u,d])=>h.clone().addScaledVector(r,u).addScaledVector(a,d)),l=c(e),f=c(i);for(let h=0;h<4;h++){let u=(h+1)%4,d=l[h].clone().add(l[u]).multiplyScalar(.5).sub(e);n.quad(t,l[h],l[u],f[u],f[h],d)}}var _0=new WeakMap;function gv(n,t){let e=_0.get(n);e||_0.set(n,e=new Map);let i=l=>n.storeys[l]?.like??l,s=t+1>=n.storeys.length,o=`${i(t)}|${s?"sky":i(t+1)}`;if(e.has(o))return e.get(o);let r=qn(n,t),a=s?null:qn(n,t+1),c=null;if(s||i(t)!==i(t+1)){let l=p=>{let y=new Set;for(let S of[r,a])for(let M of S?.storey.walls??[])y.add(Math.round(M.a[p]*100)/100),y.add(Math.round(M.b[p]*100)/100);let _=[...y].sort((S,M)=>S-M),g=[];return _.forEach((S,M)=>{if(M){let v=S-_[M-1],E=Math.ceil(v/.5);for(let C=1;C<E;C++)g.push(_[M-1]+v*C/E)}g.push(S)}),g},f=l(0),h=l(1),u=[],d=!1;for(let p=0;p<h.length-1;p++){let y=[];for(let _=0;_<f.length-1;_++){let g=(f[_]+f[_+1])/2,S=(h[p]+h[p+1])/2,M=a?.floored(g,S)?2:r.indoors(g,S)?1:0;d||(d=M===1),y.push(M)}u.push(y)}d&&(c={xs:f,zs:h,state:u})}return e.set(o,c),c}function xv(n,t,e,i){let s=gv(t,e);if(!s)return;let{xs:o,zs:r,state:a}=s,c=qn(t,e),l=c.base+c.storey.h,f=t.roof??{k:"flat",f:"roof-concrete"},h=qe(f.f),u=(z,q)=>a[q]?.[z]===1,d=(z,q)=>(a[q]?.[z]??0)===0;if(f.k==="flat"){for(let q=0;q<r.length-1;q++){let nt=-1;for(let Q=0;Q<=o.length-1;Q++)u(Q,q)&&nt<0&&(nt=Q),!u(Q,q)&&nt>=0&&(n.slab(h,o[nt],r[q],o[Q],r[q+1],l),nt=-1)}let z=Math.max(.1,f.parapet??.4);for(let q of c.outlines.pieces){let nt=c.storey.walls[q.wall];if(nt.open||nt.rail||(nt.h??c.storey.h)<c.storey.h-.01)continue;let Q=(nt.t??.12)/2+.09,N=(q.l[0][0]+q.l[1][0]+q.r[0][0]+q.r[1][0])/4,$=(q.l[0][1]+q.l[1][1]+q.r[0][1]+q.r[1][1])/4,I=c.indoors(N+q.d[1]*Q,$-q.d[0]*Q),X=c.indoors(N-q.d[1]*Q,$+q.d[0]*Q);I!==X&&li(n,qe(I?nt.r:nt.l),q,l,l+z)}return}let p=[],y=1/0,_=-1/0,g=1/0,S=-1/0;for(let z=0;z<r.length-1;z++)for(let q=0;q<o.length-1;q++)if(u(q,z)){y=Math.min(y,o[q]),_=Math.max(_,o[q+1]),g=Math.min(g,r[z]),S=Math.max(S,r[z+1]);for(let[nt,Q,N,$]of[[0,-1,[q,z],[q+1,z]],[0,1,[q,z+1],[q+1,z+1]],[-1,0,[q,z],[q,z+1]],[1,0,[q+1,z],[q+1,z+1]]])u(q+nt,z+Q)||p.push({a:N,b:$,normal:[nt,Q],open:d(q+nt,z+Q)})}let M=_-y>=S-g;f.turn&&(M=!M);let v=z=>z.open&&(f.k==="hip"||(f.k==="gable"?M?z.normal[1]!==0:z.normal[0]!==0:M?z.normal[1]<0:z.normal[0]<0)),E=p.filter(v),C=Math.tan((f.pitch??30)*Math.PI/180),A=/kawara|tile/.test(f.f??""),b=A?.16:.1,x=Math.max(.06,...c.storey.walls.filter(z=>!z.open&&!z.rail).map(z=>(z.t??.12)/2)),m=b+x*C-.005,w=new Map,T=(z,q)=>{let nt=z*4096+q;if(!w.has(nt)){let Q=E.length?1/0:0;for(let{a:N,b:$}of E){let I=o[N[0]],X=r[N[1]],G=o[$[0]]-I,it=r[$[1]]-X,rt=Math.min(1,Math.max(0,((o[z]-I)*G+(r[q]-X)*it)/(G*G+it*it||1)));Q=Math.min(Q,Math.hypot(o[z]-I-G*rt,r[q]-X-it*rt))}w.set(nt,l+m+Math.min(Q,7)*C)}return w.get(nt)},P=(z,q)=>new H(o[z],T(z,q),r[q]),L=xt("#e7e3d8","#ffffff",{roughness:.9}),U=A?L:xt("#3f4447","#ffffff",{roughness:.6,metalness:.3}),F=z=>{let q=z[1].clone().sub(z[0]),nt=z[2].clone().sub(z[0]),Q=q.cross(nt).y<0?[...z].reverse():z;n.face(h,Q),n.face(L,[...Q].reverse().map(N=>N.clone().setY(N.y-b)))},Y=(z,q,nt)=>n.quad(U,z.clone().setY(z.y-b),q.clone().setY(q.y-b),q,z,nt);for(let z=0;z<r.length-1;z++)for(let q=0;q<o.length-1;q++){if(!u(q,z))continue;let nt=P(q,z),Q=P(q+1,z),N=P(q+1,z+1),$=P(q,z+1);Math.abs(nt.y-N.y)>=Math.abs(Q.y-$.y)?(F([nt,$,N]),F([nt,N,Q])):(F([nt,$,Q]),F([$,N,Q]))}let B=f.eave??.4,k=new Map;for(let z of E)for(let[q,nt]of[z.a,z.b]){let Q=q*4096+nt,N=k.get(Q)??[0,0];N[0]=N[0]||z.normal[0],N[1]=N[1]||z.normal[1],k.set(Q,N)}let V=([z,q],nt)=>{let Q=k.get(z*4096+q)??nt;return new H(o[z]+Q[0]*B,l+m-B*C,r[q]+Q[1]*B)},K=(z,q)=>z[0]===q[0]&&z[1]===q[1],J=Math.min(.3,B),gt=p.filter(z=>z.open&&!v(z)),lt=A?xt("#5d4b3c","#ffffff",{roughness:.6}):xt("#33383b","#ffffff",{roughness:.55,metalness:.3}),j=new Set,Z=(z,q,nt)=>{let Q=z[0]*4096+z[1];if(j.has(Q)||B<.15)return;j.add(Q);let N=o[z[0]]+q[0]*(x+.045)+nt[0]*.15,$=r[z[1]]+q[1]*(x+.045)+nt[1]*.15,I=.1;for(let rt=e-1;rt>=0;rt--){let ot=qn(t,rt);if(ot?.indoors(N,$)){I=ot.base+ot.storey.h+.25;break}}let X=l+m-B*C-b-.07,G=new H(N+q[0]*(B-x-.045+.06),X,$+q[1]*(B-x-.045+.06)),it=new H(N,X-Math.max(.2,(B-x)*.8),$);if(!(it.y-I<.3)){x0(n,lt,G,it,.06),x0(n,lt,it,new H(N,I,$),.06);for(let rt=it.y-.3;rt>I+.3;rt-=1.2)n.box(lt,N-q[0]*.03,rt,$-q[1]*.03,.075,.03,.075)}};for(let z of E){let q=new H(z.normal[0],0,z.normal[1]),nt=[V(z.a,z.normal),V(z.b,z.normal)];if(F([P(...z.a),P(...z.b),nt[1],nt[0]]),Y(nt[0],nt[1],q),B>=.15){let Q=nt[0].clone().add(nt[1]).multiplyScalar(.5).addScaledVector(q,.06),N=nt[0].distanceTo(nt[1])+.02;n.box(lt,Q.x,Q.y-b-.035,Q.z,z.normal[0]?.105:N,.07,z.normal[0]?N:.105)}for(let[Q,N]of[[z.a,z.b],[z.b,z.a]]){let $=[Math.sign(o[N[0]]-o[Q[0]]),Math.sign(r[N[1]]-r[Q[1]])],I=E.filter(X=>X!==z&&(K(X.a,Q)||K(X.b,Q)));(!I.length||I.some(X=>X.normal[0]!==z.normal[0]||X.normal[1]!==z.normal[1]))&&Z(Q,z.normal,$)}for(let[Q,N,$]of[[z.a,z.b,nt[0]],[z.b,z.a,nt[1]]]){if(E.some(it=>it!==z&&(K(it.a,Q)||K(it.b,Q))))continue;let I=gt.find(it=>K(it.a,Q)||K(it.b,Q));if(!I){Y(P(...Q),$,new H(o[Q[0]]-o[N[0]],0,r[Q[1]]-r[N[1]]));continue}let X=new H(I.normal[0],0,I.normal[1]).multiplyScalar(J),G=P(...Q);F([G,$,$.clone().add(X),G.clone().add(X)]),Y($,$.clone().add(X),q),Y(G.clone().add(X),$.clone().add(X),X)}}for(let z of gt){let q=P(...z.a),nt=P(...z.b),Q=new H(z.normal[0],0,z.normal[1]),N=Q.clone().multiplyScalar(J);F([q,nt,nt.clone().add(N),q.clone().add(N)]),Y(q.clone().add(N),nt.clone().add(N),Q);let $=Q.clone().multiplyScalar(x),I=G=>new H(G.x,l,G.z).add($),X=G=>new H(G.x,Math.max(l,G.y-b+.01),G.z).add($);(q.y-b-l>.005||nt.y-b-l>.005)&&n.quad(i,I(q),I(nt),X(nt),X(q),Q)}}function Wc(n,t,e){let i=qn(n,t),{storey:s,outlines:o}=i,{base:r}=i,a=!!e.split,c={value:null},l=[],f=sf(n,s),h=s.walls.filter(p=>!p.open&&!p.rail),u=(p,y)=>h.some(_=>{let g=_.b[0]-_.a[0],S=_.b[1]-_.a[1],M=Math.min(1,Math.max(0,((p-_.a[0])*g+(y-_.a[1])*S)/(g*g+S*S||1e-9)));return Math.hypot(p-_.a[0]-g*M,y-_.a[1]-S*M)<(_.t??.12)/2+.13}),d=(p,y)=>s.steps.some(_=>Sc(_,p,y)>=0);s.walls.forEach((p,y)=>{if(!p.open||!e.inside)return;let{d:_}=i.sides[y],[g,S]=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],M=[1,-1].map(m=>[g+m*_[1]*.12,S-m*_[0]*.12]),[v,E]=M.map(([m,w])=>i.roomAt(m,w)),C=new H(_[1],0,-_[0]),A=new H(-_[1],0,_[0]);if(v&&E&&Math.abs(v.y-E.y)>.015&&!M.some(([m,w])=>d(m,w))){let m=Math.min(v.y,E.y),w=Math.max(v.y,E.y),T=w-m>.6?xt("concrete","#c4c1b8"):w-m>.1?xt("wood","#a9825a"):xt("#8f8d87","#ffffff",{roughness:.7});e.inside.quad(T,fe(p.a,r+m),fe(p.b,r+m),fe(p.b,r+w),fe(p.a,r+w),v.y<E.y?C:A)}let b=xt("#f1eee6","#ffffff",{roughness:.9}),x=e.insideHigh??e.inside;for(let m of[C,A])x.quad(b,fe(p.a,r+s.h-f),fe(p.b,r+s.h-f),fe(p.b,r+s.h),fe(p.a,r+s.h),m)});for(let p of o.pieces){let y=s.walls[p.wall],_=Math.min(y.h??s.h,s.h);if(y.rail&&y.rail!=="solid"){e.out&&hv(e.out,e.panes??e.out,p,y,r,_,t===0?r:.15);continue}let g=(y.t??.12)/2+.07,S=(p.l[0][0]+p.l[1][0]+p.r[0][0]+p.r[1][0])/4,M=(p.l[0][1]+p.l[1][1]+p.r[0][1]+p.r[1][1])/4,v=s.openings.filter(E=>E.w===p.wall).sort((E,C)=>E.at-C.at);for(let E of["l","r"]){let C=E==="l"?1:-1,A=i.indoors(S+C*p.d[1]*g,M-C*p.d[0]*g),b=A?e.inside:e.out,x=A?e.insideHigh:e.outHigh;if(!b&&!x)continue;let m=qe(y[E]),w=[],T=0;for(let U of[.06,.28,.5,.72,.94]){let F=p.start[0]+(p.end[0]-p.start[0])*U+C*p.d[1]*g,Y=p.start[1]+(p.end[1]-p.start[1])*U-C*p.d[0]*g;T=Math.min(T,i.roomAt(F,Y)?.y??0)}A||(c.value??(c.value=m),t===0&&r>.001?w.push([-r,0,cv()]):y.rail&&w.push([-.15,0,m]));let P=T;if(A&&!y.rail&&_>.6){let U=i.roomAt(S+C*p.d[1]*g,M-C*p.d[0]*g);U&&!U.shaft&&U.code!=="U"&&U.code!=="W"&&U.f!=="tatami"&&(w.push([T,T+.06,n.style==="japan"?xt("wood","#8a6746"):xt("#f3f0e8","#ffffff",{roughness:.7})]),P=T+.06)}let L=y[`${E}l`];if(L&&_>1.05?w.push([P,1,qe(L)],[1,_,m]):w.push([P,_,m]),lv(p,E,v,w,_,r,b,x,a),!A&&b&&t===0&&r>.2&&!y.rail){let[U]=p[E],[F,Y]=p.span[E],B=[C*p.d[1],-C*p.d[0]],k=(lt,j,Z)=>new H(U[0]+p.d[0]*(lt-F)+B[0]*j,r+Z,U[1]+p.d[1]*(lt-F)+B[1]*j),V=new H(B[0],0,B[1]),K=(lt,j)=>{j-lt<.02||(b.quad(nf(),k(lt,0,.014),k(j,0,.014),k(j,.03,-.004),k(lt,.03,-.004),y0),b.quad(nf(),k(lt,.03,-.004),k(j,.03,-.004),k(j,.03,-.03),k(lt,.03,-.03),V),b.quad(nf(),k(lt,.03,-.03),k(j,.03,-.03),k(j,0,-.03),k(lt,0,-.03),v0))},J=Math.min(F,Y),gt=Math.max(F,Y);for(let lt of v)lt.s>.05||(K(J,Math.min(gt,lt.at-lt.ww/2)),J=Math.max(J,lt.at+lt.ww/2));K(J,gt)}}e.cap&&_>_n&&e.cap.shape(av(),p.poly,[],r+_n+.002,!0),_<s.h-.01&&e.out&&e.out.shape(qe(y.l),p.poly,[],r+_,!0)}for(let p of o.caps){let y=o.pieces[p.piece],_=s.walls[y.wall];if(_.rail&&_.rail!=="solid")continue;let g=Math.min(_.h??s.h,s.h),S=(p.from[0]+p.to[0])/2+p.normal[0]*.07,M=(p.from[1]+p.to[1])/2+p.normal[1]*.07,v=i.indoors(S,M),E=new H(p.normal[0],0,p.normal[1]),C=qe(_.l),A=(m,w,T)=>m?.quad(C,fe(p.from,r+w),fe(p.to,r+w),fe(p.to,r+T),fe(p.from,r+T),E),b=v?e.inside:e.out,x=v?e.insideHigh:e.outHigh;a?(A(b,0,Math.min(_n,g)),g>_n&&A(x,_n,g)):A(b,0,g)}if(s.openings.forEach(p=>{let y=s.walls[p.w];if(!y)return;let _=i.sides[p.w],g=y.t??.12,S=g/2+.07,M=y.a[0]+_.d[0]*p.at,v=y.a[1]+_.d[1]*p.at,E=i.indoors(M+_.d[1]*S,v-_.d[0]*S),C=i.indoors(M-_.d[1]*S,v+_.d[0]*S),A=E&&C,b=p.s+p.hh>_n,x=A?b&&a?e.insideHigh:e.inside:b&&a?e.outHigh:e.out;if(!x)return;let m=A?x:e.panes??x,w=A||E===C?0:C?-1:1,T=Math.atan2(-_.d[1],_.d[0]),P=[];x.at(M,r,v,T,L=>{let U=m.matrix;m.matrix=L.matrix,P=mv(L,m,p,g,w,c.value??qe(y.l)),m!==L&&(m.matrix=U)});for(let L of P)l.push({...L,level:t,interior:A,cx:M,cz:v,base:r,turn:T,d:_.d,width:p.ww,auto:p.k==="door-auto"})}),s.decor.forEach((p,y)=>{let _=s.walls[p.w];if(!_||_.open)return;let g=i.sides[p.w],S=p.side==="l"?1:-1,M=[S*g.d[1],-S*g.d[0]],v=(_.t??.12)/2+.003,E=_.a[0]+g.d[0]*p.at+M[0]*v,C=_.a[1]+g.d[1]*p.at+M[1]*v,A=p.side==="l"?g.l:g.r,b=p.y>_n&&a;(A?b?e.insideHigh:e.inside:b?e.outHigh:e.out)?.at(E,r+p.y,C,Math.atan2(M[0],M[1]),m=>jd(m,p.k,y+t*31,p))}),e.out)for(let p of i.rooms)p.open&&(e.out.shape(qe(p.f),p.points,p.holes,r+p.y+.001,!0),t>0&&e.out.shape(xt("concrete","#d9d6cd"),p.points,p.holes,r-.15,!1));if(e.inside){let p=t>0?ws(n,t-1):null,y=p?p.stairs.map(M=>({stair:M,layout:ri(M,p.h)})):[],_=t+1<n.storeys.length?s.stairs.map(M=>({stair:M,layout:ri(M,s.h)})):[],g=(M,{layout:v})=>v.outline.every(([E,C])=>Xi(M.points,E,C)||M.points.some(A=>Math.hypot(A[0]-E,A[1]-C)<.2)),S=(M,{layout:v})=>wi(M,...v.centre(v.total/2))||wi(M,...v.centre(.3))||wi(M,...v.centre(v.total-.3));for(let M of i.rooms){if(M.open)continue;if(M.shaft){t===0&&e.inside.shape(xt("concrete","#8f8d87"),M.points,M.holes,r-.03,!0);continue}let v=y.filter(A=>S(M,A)),E=v.filter(A=>g(M,A));if(v.length===E.length&&e.inside.shape(qe(M.f),M.points,[...M.holes,...E.map(({layout:A})=>A.outline)],r+M.y,!0),_.some(A=>S(M,A)))continue;(e.insideHigh??e.inside).shape(qe(M.c),M.points,M.holes,r+s.h-f,!1)}for(let{stair:M,layout:v}of y){let E=xt("#e6e1d6","#ffffff",{roughness:.9}),C=sf(n,p),A=v.outline.reduce((x,m)=>x+m[0],0)/v.outline.length,b=v.outline.reduce((x,m)=>x+m[1],0)/v.outline.length;v.outline.forEach((x,m)=>{let w=v.outline[(m+1)%v.outline.length],T=new H(A-(x[0]+w[0])/2,0,b-(x[1]+w[1])/2);e.inside.quad(E,fe(x,r-C),fe(w,r-C),fe(w,r),fe(x,r),T)}),Jd(e.inside,M,p.h,r,u)}for(let{stair:M}of _)Zd(e.inside,M,s.h,r,u);for(let M of s.steps)$h(e.inside,M,r);for(let M of s.items){let v=M.k==="ceiling-light",E=v?e.insideHigh??e.inside:e.inside,C=r+(i.heightAt(M.x,M.z)??0);E.at(M.x,v?r+s.h-f-.1:C,M.z,(M.r??0)*Math.PI/180,A=>Dc(A,M.k,M.x,M.z,M))}}return _v(n,t,i,e),{leaves:l,wallPaint:c.value}}var es={floor:[.34,.34],foot:[.22,.2],head:[.26,.3],ceiling:[.2,.36],corner:[.2,.2],ground:[.42,.75],deck:[.3,.3],item:[.32,.13]};function _v(n,t,e,i){if(!i.shade&&!i.shadeOut)return;let{storey:s,outlines:o,base:r}=e,a=sf(n,s),c=s.walls.filter(v=>!v.open&&!v.rail),l=(v,E)=>c.some(C=>{let A=C.b[0]-C.a[0],b=C.b[1]-C.a[1],x=Math.min(1,Math.max(0,((v-C.a[0])*A+(E-C.a[1])*b)/(A*A+b*b||1e-9)));return Math.hypot(v-C.a[0]-A*x,E-C.a[1]-b*x)<(C.t??.12)/2-.004}),f=t>0?ws(n,t-1):null,h=f?f.stairs.map(v=>ri(v,f.h).outline):[],u=t+1<n.storeys.length?s.stairs.map(v=>ri(v,s.h)):[],d=(v,E)=>h.some(C=>Xi(C,v,E)),p=v=>!v||v.shaft||u.some(E=>[.3,E.total/2,E.total-.3].some(C=>wi(v,...E.centre(C)))),y=r+s.h-a,_=r+_n;for(let v of o.pieces){let E=s.walls[v.wall];if(E.rail&&E.rail!=="solid")continue;let C=Math.min(E.h??s.h,s.h),A=(E.t??.12)/2+.07,b=(v.l[0][0]+v.l[1][0]+v.r[0][0]+v.r[1][0])/4,x=(v.l[0][1]+v.l[1][1]+v.r[0][1]+v.r[1][1])/4,m=s.openings.filter(w=>w.w===v.wall&&w.s<.3).map(w=>[w.at-w.ww/2,w.at+w.ww/2]).sort((w,T)=>w[0]-T[0]);for(let w of["l","r"]){let T=w==="l"?1:-1,[P]=v[w],[L,U]=v.span[w],F=Math.min(L,U),Y=Math.max(L,U);if(Y-F<.05)continue;let B=[T*v.d[1],-T*v.d[0]],k=(lt,j)=>[P[0]+v.d[0]*(lt-L)+B[0]*j,P[1]+v.d[1]*(lt-L)+B[1]*j],V=(lt,j,Z)=>{let[z,q]=k(lt,j);return new H(z,Z,q)},K=[],J=F;for(let[lt,j]of m)Math.min(lt,Y)-J>.03&&K.push([J,Math.min(lt,Y)]),J=Math.max(J,j);Y-J>.03&&K.push([J,Y]);let gt=e.indoors(b+B[0]*A,x+B[1]*A);if(gt&&i.shade){let lt=e.roomAt(...k((F+Y)/2,A));if(lt?.shaft)continue;let[j,Z]=es.floor,[z,q]=es.foot;for(let[I,X]of K){let G=r+(e.roomAt(...k((I+X)/2,A))?.y??0);[I,(I+X)/2,X].some(it=>d(...k(it,Z/2)))||i.shade.strip(V(I,0,G+.004),V(X,0,G+.004),V(X,Z,G+.004),V(I,Z,G+.004),j),i.shade.strip(V(I,.003,G),V(X,.003,G),V(X,.003,G+q),V(I,.003,G+q),z)}let nt=!p(lt)&&r+C>=y-.01,Q=nt?y:r+C;if(nt){let I=i.shadeHigh??i.shade,[X,G]=es.head,[it,rt]=es.ceiling;I.strip(V(F,.003,y),V(Y,.003,y),V(Y,.003,y-G),V(F,.003,y-G),X),I.strip(V(F,0,y-.004),V(Y,0,y-.004),V(Y,rt,y-.004),V(F,rt,y-.004),it)}let[N,$]=es.corner;for(let[I,X]of[[F,1],[Y,-1]]){if(!l(...k(I-X*.045,.05)))continue;let G=Math.min($,(Y-F)/2),it=r+(e.roomAt(...k(I+X*.2,A))?.y??0),rt=i.shadeHigh&&Q>_?[[it,_,i.shade],[_,Q,i.shadeHigh]]:[[it,Q,i.shade]];for(let[ot,ut,ct]of rt)ct.strip(V(I,.003,ot),V(I,.003,ut),V(I+X*G,.003,ut),V(I+X*G,.003,ot),N)}}if(!gt&&i.shadeOut){let lt=e.roomAt(...k((F+Y)/2,A+.1));if(lt?.open){let[j,Z]=es.deck,z=r+lt.y+.006;for(let[q,nt]of K)i.shadeOut.strip(V(q,0,z),V(nt,0,z),V(nt,Z,z),V(q,Z,z),j)}else if(t===0&&!E.rail){let[j,Z]=es.ground;for(let[z,q]of K){let nt=Math.max(1,Math.ceil((q-z)/.5));for(let Q=0;Q<nt;Q++){let N=z+(q-z)*Q/nt,$=z+(q-z)*(Q+1)/nt,I=Math.min(...[.08,.38,Z-.05].map(X=>Ss(n,...k((N+$)/2,X))))+.012;i.shadeOut.strip(V(N,0,I),V($,0,I),V($,Z,I),V(N,Z,I),j)}}}}}}let[g,S]=es.item,M=(v,E,C)=>{let A=Qe[E.k];if(!A||A.ceiling||A.h<.2)return;let b=(E.r??0)*Math.PI/180;E.k==="car"?v.around(E.x,C,E.z,A.w,A.d,b,.3,.42,.42):yv.has(E.k)?v.around(E.x,C,E.z,A.w,A.d,b,S,.15,.15):v.around(E.x,C,E.z,A.w,A.d,b,S,g)};if(i.shade)for(let v of s.items){let E=e.heightAt(v.x,v.z);E!=null&&M(i.shade,v,r+E+.005)}if(i.shadeOut&&t===0)for(let v of n.yard?.items??[])M(i.shadeOut,v,Ss(n,v.x,v.z)+.014)}var yv=new Set(["table-low","table-dining","chair","desk","chabudai","cafe-table","stool","office-desk","office-chair","bench","rack","bicycle"]);function vv(n,t,e,i){let{map:s,aspect:o}=br(t,{color:"#4b3b30",background:"#fff6e2",border:"#b98a5e",font:'800 72px "Yu Gothic UI", "Hiragino Sans", sans-serif'}),r=Math.min(3.4,e.width+2.2),a=new pe(new gn(r,r/o),new sn({map:s,transparent:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.userData.ownMaterial=!0,a.position.set(e.x+e.normal[0]*.16,i,e.z+e.normal[1]*.16),a.rotation.y=Math.atan2(e.normal[0],e.normal[1]),n.add(a)}function M0(n){let t=d0(n),e=t.storeys.length,i=new se,s=new se,o=new se,r=new se;o.visible=!1,i.add(s,o,r);let a=new Map,c=[],l=null,f=!1,h=qe("stucco-white"),u=[];function d(b){let x=new Map;for(let m of b){let w=new se,[T,P]=m.d;w.position.set(m.cx+T*m.x-P*m.z,m.base+m.y,m.cz+P*m.x+T*m.z),w.rotation.y=m.turn+(m.mirror?Math.PI:0);for(let U of m.batch.build(w,{where:m.interior?"in":""}))U.material===Fn("far")&&(U.castShadow=!1,u.push(U));r.add(w);let L=`${m.level}|${m.cx.toFixed(2)}|${m.cz.toFixed(2)}`;x.has(L)||(x.set(L,{level:m.level,interior:m.interior,x:m.cx,z:m.cz,y:m.base,width:m.width,auto:m.auto,open:0,parts:[],key:zh(m.level,m.cx,m.cz),lift:!!m.lift}),c.push(x.get(L))),x.get(L).parts.push({pivot:w,rest:w.rotation.y,home:w.position.clone(),swing:!!m.swing,sign:m.dir??0,slide:m.slide?new H(T,0,P).multiplyScalar(m.slide):null})}}function p(){let b=new le,x=new le,m=new Es,w=[];for(let L=0;L<e;L++){let U=Wc(t,L,{out:b,outHigh:b,panes:x,shadeOut:m});w.push(...U.leaves.filter(F=>!F.interior)),h=U.wallPaint??h}for(let L=0;L<e;L++)xv(b,t,L,h);let T=t.base??.3;Qd(b,t);for(let L of $i(t)){if(!L.opening.canopy)continue;let U=Math.atan2(L.normal[0],L.normal[1]),F=T+L.opening.s+L.opening.hh+.22;b.box(vr(L.opening.c==="white"?"white":"black"),L.x+L.normal[0]*.55,F,L.z+L.normal[1]*.55,L.width+.8,.08,1,U)}b.build(s,{where:"out"}),m.build(s);for(let L of x.build(s,{cast:!1}))L.userData.glass=L.material===Fn("far");d(w);let[P]=$i(t).filter(L=>L.opening.canopy);n.sign&&P&&vv(s,n.sign,P,T+P.opening.s+P.opening.hh+.75)}function y(b){ci(o);let x=new le,m=new le,w=new Es;for(let T=0;T<b;T++)Wc(t,T,{out:x,outHigh:x,panes:m,shadeOut:w});Wc(t,b,{out:x,outHigh:null,panes:m,split:!0,shadeOut:w}),x.build(o,{where:"out"}),w.build(o);for(let T of m.build(o,{cast:!1}))T.userData.glass=T.material===Fn("far")}function _(b){let x=new se,m=new se,w=new se,T=new le,P=new le,L=new le,U=new Es,F=new Es,Y=Wc(t,b,{inside:T,insideHigh:P,cap:L,split:!0,shade:U,shadeHigh:F});T.build(x,{where:"in"}),P.build(m,{where:"in"}),U.build(x),F.build(m),L.build(w,{cast:!1}),i.add(x,m,w),d(Y.leaves.filter(B=>B.interior));for(let B of S??[]){let k=v(B,b);k&&(k.open=B.wide.get(b)??0,M(k));let V=B.stops.find(J=>J.level===b);if(!V)continue;let K=B.look.hall(V);x.add(K.low),m.add(K.high)}return{low:x,high:m,cap:w}}function g(){let b=l!==null;s.visible=!b,o.visible=b;let x=Fn(f?"near":"far");for(let m of[s,o])for(let w of m.children)w.userData.glass&&(w.material=x);for(let m of u)m.material=x;for(let m of c){let w=m.interior?!!a.get(m.level)?.low.visible&&m.level!==l:!b||m.level<l;for(let T of m.parts)T.pivot.visible=w}}p(),g();let S=[];for(let b=0;b<e;b++)for(let x of _r(t,b).lifts){let m=S.find(w=>Math.hypot(w.x-x.x,w.z-x.z)<.3);m||(m={x:x.x,z:x.z,w:x.w,d:x.d,r:x.r,stops:[],wide:new Map},S.push(m)),m.stops.push({level:b,y:xr(t,b),at:x.at,out:x.out,half:x.half,gate:x.gate})}for(let b of S)b.look=Kd(b),i.add(b.look.car);let M=b=>{for(let x of b.parts)x.slide&&x.pivot.position.copy(x.home).addScaledVector(x.slide,b.open)},v=(b,x)=>{let m=b.stops.find(w=>w.level===x);return m&&c.find(w=>w.lift&&w.level===x&&Math.hypot(w.x-m.at[0],w.z-m.at[1])<.4)},E=Ec(t),C=t.roof??{k:"flat"},A=C.k==="flat"?C.parapet??.4:Math.min(7,Math.min(E.x1-E.x0,E.z1-E.z0)/2)*Math.tan((C.pitch??30)*Math.PI/180);return{group:i,design:t,doors:c,bounds:E,levels:e,height:Dd(t)+A,tint:h.color,show({close:b=!1,level:x=null,cut:m=!1}){let w=m&&x!==null;w&&l!==x&&y(x),l=w?x:null,f=b;let T=new Set;b&&(w?[x-1,x].filter(P=>P>=0).forEach(P=>T.add(P)):x!==null?[x-1,x,x+1].filter(P=>P>=0&&P<e).forEach(P=>T.add(P)):[0,1].filter(P=>P<e).forEach(P=>T.add(P)));for(let P of T)a.has(P)||a.set(P,_(P));for(let[P,L]of a){let U=T.has(P);L.low.visible=U,L.high.visible=U&&!(w&&P===x),L.cap.visible=U&&w&&P===x}g()},swing(b,x){for(let m of c){if(m.lift)continue;let w=x(m);if(!(Math.abs(w-m.open)<.001)){m.open+=(w-m.open)*(1-Math.exp(-9*b));for(let T of m.parts)T.swing?T.pivot.rotation.y=T.rest+T.sign*m.open*1.5:T.slide&&T.pivot.position.copy(T.home).addScaledVector(T.slide,m.open)}}},lifts:S.map(b=>({x:b.x,z:b.z,w:b.w,d:b.d,r:b.r,stops:b.stops,setCar(x){b.look.setCar(x)},setDoor(x,m){if(b.wide.get(x)===m)return;b.wide.set(x,m);let w=v(b,x);w&&(w.open=m,M(w))},setCarDoor:x=>b.look.setDoor(x),show:x=>b.look.show(x),pick:(x,m,w)=>b.look.pick(x,m,w)})),dispose(){for(let b of S)b.look.dispose();ci(i)}}}var ee={WATER:0,RIVERBED:1,FOREST:2,GREEN:3,FIELD:4,PADDY:5,PARK:6,LOW:7,DENSE:8,MID:9,HIGH:10,COMMERCIAL:11,INDUSTRIAL:12,PUBLIC:13},Yc={COLLECTOR:2,ARTERIAL:3,TRUNK:4},As=new H(0,1,0),bv={[ee.WATER]:"#3b738f",[ee.RIVERBED]:"#96947e",[ee.FOREST]:"#486535",[ee.GREEN]:"#678646",[ee.FIELD]:"#9d8658",[ee.PADDY]:"#869d54",[ee.PARK]:"#6c9148",[ee.LOW]:"#7f8368",[ee.DENSE]:"#89867b",[ee.MID]:"#86877c",[ee.HIGH]:"#8e8e88",[ee.COMMERCIAL]:"#98948a",[ee.INDUSTRIAL]:"#8f8e86",[ee.PUBLIC]:"#b2a177"},Ar=[];for(let[n,t]of Object.entries(bv))Ar[n]=new Kt(t);var af=new Kt("#806c50"),bo=new Kt("#b6b09e"),cf=new Kt("#9e9a90"),lf=new Kt("#7c765f"),hf=new Kt("#6f8f72"),ff=new Kt("#5a7538");function qc(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function w0(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,o=t-i,r=s*s*(3-2*s),a=o*o*(3-2*o),c=qc(e,i),l=qc(e+1,i),f=qc(e,i+1),h=qc(e+1,i+1),u=c+(l-c)*r,d=f+(h-f)*r;return(u+(d-u)*a)*2-1}function $c(n,t){return w0(n,t)*.65+w0(n*2.13+17.3,t*2.13-11.7)*.35}var ie=(n,t,e)=>Math.min(e,Math.max(t,n)),S0=5,E0=()=>new Promise(n=>setTimeout(n,0)),Rs=null,T0=null,uf=null,df=null,Kc=null;function C0(){return Kc||(Kc=Vd(256),Kc.repeat.set(1/14,1/14)),Kc}function Mv(){if(!Rs){let n=xt("terrainGround","#ffffff",{where:"out",relief:!1});Rs=n.clone(),Rs.vertexColors=!0,Rs.userData={...n.userData},Rs.onBeforeCompile=n.onBeforeCompile,Rs.customProgramCacheKey=n.customProgramCacheKey}return Rs}function wv(){return uf||(uf=new on({vertexColors:!0,color:"#ffffff",roughness:.12,metalness:.68,envMapIntensity:1.35,normalMap:C0(),normalScale:new $t(.55,.55)})),uf}function Sv(){return df||(df=new on({color:"#2e6b84",roughness:.12,metalness:.68,envMapIntensity:1.3,normalMap:C0(),normalScale:new $t(.45,.45)})),df}var Jc=new Map,Ev=n=>n,Tr=(n,t)=>{let e=t[0],i=Math.abs(n-e);for(let s=1;s<t.length;s++){let o=Math.abs(n-t[s]);o<i&&(i=o,e=t[s])}return e},Mo=["siding-white","siding-sand","siding-grey","siding-navy","mortar-cream","metal-dark"],Tv=["roof-metal","roof-slate","roof-metal-green","roof-slate"],A0=["plaster-white","wood-dark","wood-brown","mortar-cream"],Av=["roof-kawara","roof-kawara-dark"],Rv=["stucco-ivory","stucco-yellow","brick-brown","mortar-cream"],R0=["tile-beige","tile-white","tile-grey","concrete-stained"],Zc=["tile-white","mortar-grey","tile-grey","metal-silver"];function Cv(n,t,e,i,s,o,r){let a=Math.round(ie(o,0,1)*255),c=a/255,f=(Math.imul(a,1103515245)+12345>>>16&255)%6,h=f&1,u=f%3,d=f&3,p=t<=3?"old":t<=6?"mid":"new",y=n!==ee.LOW||!r||i<5.2||s<4.8;if(n===ee.LOW||n===ee.DENSE){if(e>=3&&(i<=6.8||n===ee.DENSE&&s<=6.6)){let x=ie(Math.round(e),3,4),m=d,w=f&1?"shed":"flat";return{key:`pencil|${x}|${m}|${w}`,spec:{id:`reg-pencil-${x}-${m}`,style:"modern",w:1,d:1,...ts("pencil",1,1,x,h),look:{wall:Mo[(m+1)%Mo.length],roof:"roof-metal",roofKind:w,eave:.28,low:!0}},compactYard:!0}}if(n===ee.DENSE&&i>=8.8&&s>=5.5&&c>=(p==="old"?.88:.8)){let x=ie(Math.round(e),2,3),m=Mo[u];return{key:`apart|${x}|${u}`,spec:{id:`reg-apart-${x}-${u}`,style:"modern",w:1,d:1,...ts("apart",1,1,x,u),look:{wall:m,roof:"roof-metal",roofKind:"gable",eave:.45,rail:"panel",low:!0}},compactYard:!0}}if(n===ee.DENSE&&p==="old"&&e<=2&&c<.3){let x=A0[h];return{key:`machiya|${h}|${x}`,spec:{id:`reg-machiya-${h}`,style:"japan",w:1,d:1,...ts("machiya",1,1,2,h),look:{wall:x,roof:"roof-kawara-dark",roofKind:"gable",eave:.34,low:!0}},compactYard:!0}}if(n===ee.DENSE&&e>=2&&c>=(p==="old"?.54:.9)&&c<(p==="old"?.68:.96)){let x=ie(Math.round(e),2,3),m=Zc[u];return{key:`dense-shop|${x}|${u}`,spec:{id:`reg-dshop-${x}-${u}`,style:"modern",w:1,d:1,...ts("shophouse",1,1,x,u),look:{wall:m,roof:"roof-metal",roofKind:h?"flat":"gable",rail:"solid",eave:.32}},compactYard:!0}}let M=p==="old"?n===ee.DENSE?.54:.45:p==="mid"?.22:n===ee.DENSE?.09:.12,v=.04,E="modern";c<M?E="japan":c>=1-v&&(E="europe");let C=E==="japan"?Math.min(2,Math.max(1,Math.round(e))):ie(Math.round(e),1,3),A={};E==="japan"?(A.wall=A0[d],A.roof=Av[h],A.roofKind=f%3===0?"gable":"hip",A.eave=.72,A.low=!0):E==="modern"?(A.wall=Mo[f%Mo.length],A.roof=p==="new"?Tv[u]:h?"roof-slate":"roof-metal",A.roofKind=f===0?"shed":u===1?"hip":"gable",A.eave=p==="new"&&f<3?.28:.52,A.low=C<=2):(A.wall=Rv[d],A.roof=h?"roof-tile-brown":"roof-tile-orange",A.low=C<=2);let b=`${A.wall}|${A.roof}|${A.roofKind||""}|${A.eave||""}`;return{key:`det|${E}|${C}|${h}|${b}|${y?"c":"f"}`,spec:{id:`reg-det-${f}`,style:E,w:1,d:1,...Qi(E,1,1,C,h),look:A},compactYard:y}}if(n===ee.MID){if(e<=3&&c<.42&&i/Math.max(1,s)<2.2){let b=ie(Math.round(e),2,3),x=Mo[u];return{key:`mid|apart|${b}|${u}`,spec:{id:`reg-midap-${b}-${u}`,style:"modern",w:1,d:1,...ts("apart",1,1,b,u),look:{wall:x,roof:"roof-metal",roofKind:"gable",eave:.42,rail:"panel",low:!0}},compactYard:!0}}if(i/Math.max(1,s)>=1.8&&e<=5){let b=ie(Math.round(i/7.3),2,3),x=ie(Math.round(e),4,5),m=["mortar-white","mortar-ivory","mortar-grey"][u];return{key:`mid|danchi|${b}|1|${x}|${u}`,spec:{id:`reg-danchi-${u}`,style:"danchi",w:b,d:1,...Qi("danchi",b,1,x,h),look:{wall:m,rail:"solid"}},compactYard:!0}}let v=ie(Math.round(i/8),1,2),E=Tr(e,[3,4,5,7,10]),C=R0[d],A=h?"solid":"panel";return{key:`mid|mansion|${v}|1|${E}|${d}|${A}`,spec:{id:`reg-mid-${d}`,style:"mansion",w:v,d:1,...Qi("mansion",v,1,E,h),look:{wall:C,rail:A}},compactYard:!0}}if(n===ee.HIGH){let v=s>=14?2:1,E=Tr(e,[10,14,18,24]),C=R0[d],A=h?"glass":"panel";return{key:`high|mansion|2|${v}|${E}|${h}|${A}`,spec:{id:`reg-high-${h}`,style:"mansion",w:2,d:v,...Qi("mansion",2,v,E,0),look:{wall:C,rail:A}},compactYard:!0}}if(n===ee.COMMERCIAL){if(e<=2&&i<=10.5&&c<.34){let A=h===0?rf.shop:rf.cafe;return{key:`com|${A.kind}|${u}`,spec:{id:`reg-${A.kind}-${u}`,kind:A.kind,style:"shop",w:1,d:1,floors:A.floors},compactYard:!0}}if(e<=3&&(i<=10||c<.62)){let A=ie(Math.round(e),2,3),b=Zc[d];return{key:`com|shophouse|${A}|${u}`,spec:{id:`reg-cshop-${A}-${u}`,style:"modern",w:1,d:1,...ts("shophouse",1,1,A,u),look:{wall:b,roof:"roof-metal",roofKind:h?"flat":"gable",rail:"solid",eave:.3}},compactYard:!0}}if(e>=3&&i<=6.8){let A=Tr(e,[3,4]);return{key:`com|pencil|${A}|${h}`,spec:{id:`reg-cpencil-${A}-${h}`,style:"modern",w:1,d:1,...ts("pencil",1,1,A,h),look:{wall:Zc[h],roof:"roof-metal",roofKind:"flat",eave:.28}},compactYard:!0}}let M=["office","mansion","office","brutal"][d],v=ie(Math.round(i/8),1,2),E=Tr(e,[3,5,7,10]),C=Zc[u];return{key:`com|${M}|${v}|1|${E}|${u}`,spec:{id:`reg-com-${u}`,style:M,w:v,d:1,floors:Qi("office",v,1,E,0).floors,look:{wall:C,rail:"panel"}},compactYard:!0}}if(n===ee.INDUSTRIAL){let M=ie(Math.round(i/10),2,3),v=ie(Math.round(e),1,2),E=h===0?"metal-silver":"metal-white";return{key:`ind|office|${M}|2|${v}|${E}`,spec:{id:`reg-ind-${h}`,style:"office",w:M,d:2,floors:Qi("office",M,2,v,0).floors,look:{wall:E,frame:"black",roofKind:"flat",rail:"solid"}},compactYard:!0}}let _=ie(Math.round(i/8.5),2,5),g=ie(Math.round(s/9),1,2),S=Tr(e,[2,3,4]);return{key:`pub|brutal|${_}|${g}|${S}`,spec:{id:"reg-pub-0",style:"brutal",w:_,d:g,floors:Qi("office",_,g,S,0).floors,look:{wall:"concrete",frame:"silver",roofKind:"flat",rail:"solid"}},compactYard:!0}}function Pv({key:n,spec:t,compactYard:e}){if(Jc.has(n))return Jc.get(n);let i=Gc(t,{exteriorOnly:!0,compactYard:e}),s=M0({...t,design:i});s.group.updateMatrixWorld(!0);let o=Ec(i),r=(o.x0+o.x1)/2,a=(o.z0+o.z1)/2,c=Math.max(.5,o.x1-o.x0),l=Math.max(.5,o.z1-o.z0),f=[],h=new H,u=new H,d=new te;for(let _ of[s.group.children[0],s.group.children[2]])_&&_.traverse(g=>{if(!g.isMesh||!g.visible)return;let S=g.geometry,M=S.getAttribute("position"),v=S.getIndex();if(!M||!v)return;let E=S.getAttribute("shade"),C=S.getAttribute("normal"),A=S.getAttribute("uv"),b=g.matrixWorld;d.getNormalMatrix(b);let x=M.count,m=new Float32Array(x*3);for(let L=0;L<x;L++)h.fromBufferAttribute(M,L).applyMatrix4(b),m[L*3]=h.x-r,m[L*3+1]=h.y,m[L*3+2]=h.z-a;let w=Uint32Array.from(v.array);if(E){let L=Float32Array.from(E.array);f.push({isShade:!0,material:g.material,positions:m,shades:L,indices:w});return}if(!C||!A)return;let T=new Float32Array(x*3);for(let L=0;L<x;L++)u.fromBufferAttribute(C,L).applyMatrix3(d).normalize(),T[L*3]=u.x,T[L*3+1]=u.y,T[L*3+2]=u.z;let P=Float32Array.from(A.array);f.push({isShade:!1,material:Ev(g.material),castShadow:g.castShadow,receiveShadow:g.receiveShadow,positions:m,normals:T,uvs:P,indices:w})});let p=s.height;s.dispose();let y={bw:c,bd:l,totalHeight:p,compactYard:e,parts:f};return Jc.set(n,y),y}function P0(){let n=new se;n.name="region";let t=null,e=0;function i(x,m,w){let T=ie((m-x.box.x0)/x.step,0,x.width-1),P=ie((w-x.box.z0)/x.step,0,x.depth-1),L=Math.min(x.width-2,Math.floor(T)),U=Math.min(x.depth-2,Math.floor(P)),F=T-L,Y=P-U,B=x.heights,k=L+U*x.width,V=B[k]+(B[k+1]-B[k])*F,K=B[k+x.width]+(B[k+x.width+1]-B[k+x.width])*F;return V+(K-V)*Y}function s(x,m,w){let T=ie((m-x.box.x0)/x.step,0,x.width-1),P=ie((w-x.box.z0)/x.step,0,x.depth-1);return x.water[Math.round(T)+Math.round(P)*x.width]}function o(x,m,w){if(!x.era)return 5;let T=ie((m-x.box.x0)/x.step,0,x.width-1),P=ie((w-x.box.z0)/x.step,0,x.depth-1);return x.era[Math.round(T)+Math.round(P)*x.width]||5}function r(x,m,w=null){let{width:T,depth:P,step:L}=x,U=new Uint32Array((T-1)*(P-1)*6),F=0;for(let Y=0;Y<P-1;Y++){let B=x.box.z0+Y*L,k=m&&B>=m.z0&&B+L<=m.z1;for(let V=0;V<T-1;V++){if(w&&!w[V+Y*T])continue;if(k){let j=x.box.x0+V*L;if(j>=m.x0&&j+L<=m.x1)continue}let K=V+Y*T,J=K+1,gt=K+T,lt=gt+1;U[F++]=K,U[F++]=gt,U[F++]=J,U[F++]=J,U[F++]=gt,U[F++]=lt}}return new ue(U.subarray(0,F),1)}let a=(x,m)=>r(x,m);function*c(x,m,w,T){let{width:P,depth:L,step:U,heights:F,use:Y,water:B}=x,k=new Float32Array(P*L*3),V=new Float32Array(P*L*3),K=T?null:new Float32Array(P*L*2),J=T?null:new Float32Array(k.length),gt=1/0,lt=-1/0;for(let Q=0;Q<L;Q++){let N=Math.max(0,Q-1),$=Math.min(L-1,Q+1);for(let I=0;I<P;I++){let X=I+Q*P,G=x.box.x0+I*U,it=x.box.z0+Q*U;k[X*3]=G-m[0];let rt=F[X]-w;k[X*3+1]=rt,k[X*3+2]=it-m[1],K&&(K[X*2]=G,K[X*2+1]=it),gt=Math.min(gt,rt),lt=Math.max(lt,rt);let ot=Math.max(0,I-1),ut=Math.min(P-1,I+1),ct=(F[ot+Q*P]-F[ut+Q*P])/(Math.max(1,ut-ot)*U),Mt=(F[I+N*P]-F[I+$*P])/(Math.max(1,$-N)*U),ft=Math.sqrt(ct*ct+1+Mt*Mt),D=1/ft;J&&(J[X*3]=ct/ft,J[X*3+1]=D,J[X*3+2]=Mt/ft);let R=Y[X],tt=B[X]===1,ht=tt?Ar[ee.WATER]:Ar[R]??Ar[ee.LOW],pt=ht.r,st=ht.g,Tt=ht.b;if(!T){let et=$c(G*.025,it*.025),bt=$c(G*.14+31.4,it*.14-19.2),vt=.97+.06*et+.03*bt;if(tt)vt=.72+.08*et;else if(B[X]===2)vt=.76+.06*et,pt=pt*.55+bo.r*.45,st=st*.55+bo.g*.45,Tt=Tt*.55+bo.b*.45;else{let _t=Math.sqrt(Math.max(0,1-D*D)),yt=Math.max(1,Math.round(6/U)),It=Math.max(2,Math.round(13/U)),Rt=W=>B[Math.max(0,I-W)+Q*P]===1||B[Math.min(P-1,I+W)+Q*P]===1||B[I+Math.max(0,Q-W)*P]===1||B[I+Math.min(L-1,Q+W)*P]===1||B[Math.max(0,I-W)+Math.max(0,Q-W)*P]===1||B[Math.min(P-1,I+W)+Math.max(0,Q-W)*P]===1||B[Math.max(0,I-W)+Math.min(L-1,Q+W)*P]===1||B[Math.min(P-1,I+W)+Math.min(L-1,Q+W)*P]===1,at=Rt(yt),Lt=at||Rt(It);if(R===ee.RIVERBED||Lt&&(R===ee.GREEN||_t>.12)){let W=$c(G*.032+7.1,it*.032-3.4)*.5+.5,wt=at?.68:R===ee.RIVERBED?.35+.45*W:.48+.25*W,Pt=Ar[ee.RIVERBED];pt=pt*(1-wt)+bo.r*(wt*W)+Pt.r*(wt*(1-W)),st=st*(1-wt)+bo.g*(wt*W)+Pt.g*(wt*(1-W)),Tt=Tt*(1-wt)+bo.b*(wt*W)+Pt.b*(wt*(1-W))}else if(R===ee.LOW||R===ee.DENSE||R===ee.MID||R===ee.COMMERCIAL){let W=$c(G*.085-5.2,it*.085+9.4);if(W>.1){let wt=ie((W-.1)*.9,0,.55);pt=pt*(1-wt)+cf.r*wt,st=st*(1-wt)+cf.g*wt,Tt=Tt*(1-wt)+cf.b*wt}else if(W<-.15){let wt=ie((-.15-W)*.85,0,.45);pt=pt*(1-wt)+lf.r*wt,st=st*(1-wt)+lf.g*wt,Tt=Tt*(1-wt)+lf.b*wt}}else if(R===ee.PADDY){let W=Math.abs(Math.sin(G*(Math.PI/24))),wt=Math.abs(Math.sin(it*(Math.PI/38)));if(W>.955||wt>.965)pt=ff.r,st=ff.g,Tt=ff.b;else{let Pt=.35+.15*et;pt=pt*(1-Pt)+hf.r*Pt,st=st*(1-Pt)+hf.g*Pt,Tt=Tt*(1-Pt)+hf.b*Pt}}else if(R===ee.FIELD){let W=Math.sin((G*.78+it*.62)*(Math.PI*2/3.2));vt+=W*.055}else(R===ee.FOREST||R===ee.GREEN)&&(vt+=.05*Math.sin(G*.13+it*.11));if(!B[X]&&_t>.24&&!Lt){let W=ie((_t-.24)*2.2,0,.75);pt=pt*(1-W)+af.r*W,st=st*(1-W)+af.g*W,Tt=Tt*(1-W)+af.b*W}}pt=ie(pt*vt,0,1),st=ie(st*vt,0,1),Tt=ie(Tt*vt,0,1)}V[X*3]=pt,V[X*3+1]=st,V[X*3+2]=Tt}Q%8===7&&(yield)}let j=new Ye;if(j.setAttribute("position",new ue(k,3)),j.setAttribute("color",new ue(V,3)),K){let Q=new ue(K,2);j.setAttribute("uv",Q),j.setAttribute("uv1",Q)}J&&j.setAttribute("normal",new ue(J,3)),j.setIndex(a(x,null));let Z=(P-1)*U/2,z=(L-1)*U/2,q=new H(x.box.x0-m[0]+Z,(gt+lt)/2,x.box.z0-m[1]+z);j.boundingSphere=new xi(q,Math.hypot(Z,(lt-gt)/2,z)),T0??(T0=new sn({vertexColors:!0}));let nt=new pe(j,T?T0:Mv());return nt.receiveShadow=!T,nt.name="region-ground",nt}function*l(x,m,w,T){let{width:P,depth:L,step:U,heights:F,water:Y}=x,B=new se;B.name="region-water";let k=null,V=null,K=P*L,J=new Float32Array(K).fill(NaN),gt=new Uint8Array(K).fill(255),lt=!1;for(let j=0;j<K;j++)Y[j]===1&&(J[j]=F[j]-w+1.65,gt[j]=0,lt=!0);if(lt){let j=U<=4?4:1,Z=[];for(let q=0;q<K;q++)gt[q]===0&&Z.push(q);for(let q=1;q<=j&&Z.length;q++){let nt=[];for(let Q of Z){let N=Q%P,$=(Q-N)/P;for(let I=-1;I<=1;I++)for(let X=-1;X<=1;X++){if(X===0&&I===0)continue;let G=N+X,it=$+I;if(G<0||G>=P||it<0||it>=L)continue;let rt=G+it*P;if(gt[rt]!==255)continue;let ot=0,ut=0;for(let Mt=-1;Mt<=1;Mt++)for(let ft=-1;ft<=1;ft++){let D=G+ft,R=it+Mt;if(D<0||D>=P||R<0||R>=L)continue;let tt=D+R*P;gt[tt]<q&&(ot+=J[tt],ut++)}if(!ut)continue;let ct=ot/ut;J[rt]=ct,gt[rt]=q,F[rt]-w<=ct+.2&&nt.push(rt)}}Z=nt}V=new Uint8Array(K);let z=!1;for(let q=0;q<L-1;q++)for(let nt=0;nt<P-1;nt++){let Q=nt+q*P,N=Q+1,$=Q+P,I=$+1;gt[Q]<255&&gt[N]<255&&gt[$]<255&&gt[I]<255&&Math.min(gt[Q],gt[N],gt[$],gt[I])<j&&(V[Q]=1,z=!0)}if(z){let q=new Float32Array(K*3),nt=new Float32Array(K*3),Q=new Float32Array(K*2),N=new Float32Array(K*3),$=new Kt("#1d526d"),I=new Kt("#3b7c92");for(let it=0;it<L;it++)for(let rt=0;rt<P;rt++){let ot=rt+it*P;if(gt[ot]===255)continue;let ut=x.box.x0+rt*U,ct=x.box.z0+it*U,Mt=J[ot];q[ot*3]=ut-m[0],q[ot*3+1]=Mt,q[ot*3+2]=ct-m[1],Q[ot*2]=ut,Q[ot*2+1]=ct,N[ot*3]=0,N[ot*3+1]=1,N[ot*3+2]=0;let ft=ie((Mt-(F[ot]-w))/1.5,0,1),D=.95+.06*Math.sin(ut*.08+ct*.06);nt[ot*3]=ie((I.r*(1-ft)+$.r*ft)*D,0,1),nt[ot*3+1]=ie((I.g*(1-ft)+$.g*ft)*D,0,1),nt[ot*3+2]=ie((I.b*(1-ft)+$.b*ft)*D,0,1)}let X=new Ye;X.setAttribute("position",new ue(q,3)),X.setAttribute("color",new ue(nt,3)),X.setAttribute("uv",new ue(Q,2)),X.setAttribute("normal",new ue(N,3)),X.setIndex(r(x,null,V));let G=new pe(X,wv());G.receiveShadow=!0,G.name="region-water-surface",B.add(G),k={mesh:G,cells:V}}}if(yield,!T&&U<=4&&x.streams&&x.streams.length){let j=new le,Z=new le,z=xt("revetment","#c4c0b4"),q=xt("concrete","#d4d1c8"),nt=Sv(),{x0:Q,z0:N,x1:$,z1:I}=x.box,X=25,G=(it,rt,ot)=>new H(it-m[0],rt,ot-m[1]);for(let it of x.streams){if(it.covered)continue;let rt=[];for(let et=0;et<it.points.length;et+=2)rt.push([it.points[et],it.points[et+1]]);let ot=[rt[0]];for(let et=1;et<rt.length;et++){let[bt,vt]=rt[et-1],[_t,yt]=rt[et],It=Math.hypot(_t-bt,yt-vt),Rt=Math.max(1,Math.ceil(It/2.2));for(let at=1;at<=Rt;at++)ot.push([bt+(_t-bt)*at/Rt,vt+(yt-vt)*at/Rt])}if(ot.length<2)continue;let ut=Math.max(1.1,it.width*.5),ct=ut+2.5,Mt=ot.length,ft=new Float32Array(Mt),D=new Float32Array(Mt),R=new Float32Array(Mt),tt=new Float32Array(Mt),ht=new Float32Array(Mt),pt=new Uint8Array(Mt);for(let et=0;et<Mt;et++){let[bt,vt]=ot[Math.max(0,et-1)],[_t,yt]=ot[Math.min(Mt-1,et+1)],It=Math.hypot(_t-bt,yt-vt)||1,Rt=-(yt-vt)/It,at=(_t-bt)/It;ft[et]=Rt,D[et]=at;let[Lt,W]=ot[et];Lt>Q-X&&Lt<$+X&&W>N-X&&W<I+X&&s(x,Lt,W)!==1&&(pt[et]=1);let wt=i(x,Lt-Rt*ct,W-at*ct)-w,Pt=i(x,Lt+Rt*ct,W+at*ct)-w;R[et]=wt,tt[et]=Pt,ht[et]=Math.min(wt,Pt)}let st=et=>{for(let bt=0;bt<3;bt++){let vt=et.slice();for(let _t=1;_t<Mt-1;_t++)et[_t]=vt[_t-1]*.25+vt[_t]*.5+vt[_t+1]*.25}};st(R),st(tt),st(ht);let Tt=Math.min(.68,(it.depth??1.4)*.45);for(let et=1;et<Mt;et++){if(!pt[et-1]&&!pt[et])continue;let[bt,vt]=ot[et-1],[_t,yt]=ot[et],It=ft[et-1],Rt=D[et-1],at=ft[et],Lt=D[et],W=ht[et-1]-Tt,wt=ht[et]-Tt,Pt=Math.max(R[et-1]+.05,W+.36),zt=Math.max(R[et]+.05,wt+.36),Ct=Math.max(tt[et-1]+.05,W+.36),At=Math.max(tt[et]+.05,wt+.36),Bt=ut+.22,Gt=Math.max(.4,ut-.16),Wt=ut+.55,Ht=ut+1.05;Z.quad(nt,G(bt-It*Bt,W,vt-Rt*Bt),G(_t-at*Bt,wt,yt-Lt*Bt),G(_t+at*Bt,wt,yt+Lt*Bt),G(bt+It*Bt,W,vt+Rt*Bt),As);let vn=new H((It+at)*.5,.35,(Rt+Lt)*.5);j.quad(z,G(bt-It*Wt,Pt,vt-Rt*Wt),G(_t-at*Wt,zt,yt-Lt*Wt),G(_t-at*Gt,wt-.55,yt-Lt*Gt),G(bt-It*Gt,W-.55,vt-Rt*Gt),vn),j.quad(q,G(bt-It*Ht,Pt,vt-Rt*Ht),G(_t-at*Ht,zt,yt-Lt*Ht),G(_t-at*Wt,zt,yt-Lt*Wt),G(bt-It*Wt,Pt,vt-Rt*Wt),As),j.quad(q,G(bt-It*Ht,Pt-.35,vt-Rt*Ht),G(_t-at*Ht,zt-.35,yt-Lt*Ht),G(_t-at*Ht,zt,yt-Lt*Ht),G(bt-It*Ht,Pt,vt-Rt*Ht),new H(-(It+at)*.5,0,-(Rt+Lt)*.5));let Oe=new H(-(It+at)*.5,.35,-(Rt+Lt)*.5);j.quad(z,G(bt+It*Gt,W-.55,vt+Rt*Gt),G(_t+at*Gt,wt-.55,yt+Lt*Gt),G(_t+at*Wt,At,yt+Lt*Wt),G(bt+It*Wt,Ct,vt+Rt*Wt),Oe),j.quad(q,G(bt+It*Wt,Ct,vt+Rt*Wt),G(_t+at*Wt,At,yt+Lt*Wt),G(_t+at*Ht,At,yt+Lt*Ht),G(bt+It*Ht,Ct,vt+Rt*Ht),As),j.quad(q,G(bt+It*Ht,Ct-.35,vt+Rt*Ht),G(_t+at*Ht,At-.35,yt+Lt*Ht),G(_t+at*Ht,At,yt+Lt*Ht),G(bt+It*Ht,Ct,vt+Rt*Ht),new H((It+at)*.5,0,(Rt+Lt)*.5))}yield}j.build(B,{cast:!1,receive:!0,where:"out"}),Z.build(B,{cast:!1,receive:!0})}return{node:B,waterSurface:k}}function f(x,m,w,T,{bridge:P=!1}={}){let L=[];for(let J=0;J<m.length;J+=2)L.push([m[J],m[J+1]]);let U=[L[0]],F=[0];for(let J=1;J<L.length;J++){let[gt,lt]=L[J-1],[j,Z]=L[J],z=Math.hypot(j-gt,Z-lt),q=Math.max(1,Math.ceil(z/w)),nt=F[F.length-1];for(let Q=1;Q<=q;Q++)U.push([gt+(j-gt)*Q/q,lt+(Z-lt)*Q/q]),F.push(nt+z*Q/q)}let Y=U.length,B=new Float32Array(Y),k=new Float32Array(Y);for(let J=0;J<Y;J++){let[gt,lt]=U[Math.max(0,J-1)],[j,Z]=U[Math.min(Y-1,J+1)],z=Math.hypot(j-gt,Z-lt)||1;B[J]=-(Z-lt)/z,k[J]=(j-gt)/z}let V=null,K=null;if(P){let J=new Uint8Array(Y),gt=new Float32Array(Y),lt=!1;for(let j=0;j<Y;j++){let Z=s(x,U[j][0],U[j][1]);J[j]=Z,gt[j]=i(x,U[j][0],U[j][1])-T,Z&&(lt=!0)}if(lt){V=new Float32Array(Y).fill(NaN),K=new Uint8Array(Y);for(let j=0;j<Y;j++){if(!J[j])continue;let Z=j,z=J[j]===1;for(;j+1<Y&&J[j+1];)j++,J[j]===1&&(z=!0);let q=j;if(z){let nt=Z;for(;nt>0&&Z-nt<12&&(J[nt]||gt[nt-1]>gt[nt]+.08);)nt--;let Q=q;for(;Q<Y-1&&Q-q<12&&(J[Q]||gt[Q+1]>gt[Q]+.08);)Q++;let N=1/0;for(let I=Z;I<=q;I++)J[I]===1&&(N=Math.min(N,gt[I]));let $=Math.max(gt[nt],gt[Q],(Number.isFinite(N)?N:0)+4.5);for(let I=nt;I<=Q;I++)if(K[I]=1,I<Z){let X=(I-nt)/Math.max(1,Z-nt);V[I]=gt[nt]+($-gt[nt])*X}else if(I>q){let X=(I-q)/Math.max(1,Q-q);V[I]=$+(gt[Q]-$)*X}else V[I]=$}else{let nt=Math.max(0,Z-2),Q=Math.min(Y-1,q+2),N=gt[nt],$=gt[Q];for(let I=nt;I<=Q;I++){let X=(I-nt)/Math.max(1,Q-nt);V[I]=N+($-N)*X+.12*Math.sin(Math.PI*X),K[I]=2}}}}}return{dense:U,dist:F,nxArr:B,nzArr:k,overrideY:V,bridgeKind:K}}function h(x,m,w,T,P,L,U,{lift:F=.05,side0:Y=-1,side1:B=1,step:k=6,dash:V=null,skirt:K=0,bridge:J=!1}={}){let gt=Array.isArray(T)||ArrayBuffer.isView(T)?f(w,T,k,U,{bridge:J}):T,{dense:lt,dist:j,nxArr:Z,nzArr:z,overrideY:q,bridgeKind:nt}=gt,{x0:Q,z0:N,x1:$,z1:I}=w.box,X=22,G=P/2,it=Math.abs(B-Y)*G,rt=V?1:Math.max(P>=2.4?2:1,Math.min(4,Math.ceil(it/3.5))),ot=ct=>{let[Mt,ft]=lt[ct],D=Z[ct],R=z[ct],tt=q&&!Number.isNaN(q[ct])?q[ct]:null,ht=[];for(let pt=0;pt<=rt;pt++){let st=Y+(B-Y)*(pt/rt),Tt=Mt+D*G*st,et=ft+R*G*st,bt=(tt!==null?tt:i(w,Tt,et)-U)+F;ht.push(new H(Tt-L[0],bt,et-L[1]))}return{pts:ht,nx:D,nz:R,isBridge:nt?nt[ct]===1:!1}},ut=null;for(let ct=0;ct<lt.length;ct++){let[Mt,ft]=lt[ct],R=Mt>Q-X&&Mt<$+X&&ft>N-X&&ft<I+X?ot(ct):null;if(ut&&R&&(!V||(j[ct-1]+j[ct])*.5%V[1]<V[0])){for(let pt=0;pt<rt;pt++)x.quad(m,ut.pts[pt],R.pts[pt],R.pts[pt+1],ut.pts[pt+1],As);let ht=(ut.isBridge||R.isBridge)&&K>0?Math.max(K,.85):K;if(ht>0){let pt=ut.pts[0],st=R.pts[0],Tt=ut.pts[rt],et=R.pts[rt],bt=new H(-(ut.nx+R.nx)*.5,0,-(ut.nz+R.nz)*.5),vt=new H((ut.nx+R.nx)*.5,0,(ut.nz+R.nz)*.5);x.quad(m,new H(pt.x,pt.y-ht,pt.z),new H(st.x,st.y-ht,st.z),st,pt,bt),x.quad(m,new H(Tt.x,Tt.y-ht,Tt.z),new H(et.x,et.y-ht,et.z),et,Tt,vt)}}ut=R}}function u(x,m,w,T,P,L,U,F,Y,B,k,V,K,J=.18){let gt=-Y,lt=F,j=(Z,z)=>{let q=L+F*Z+gt*z,nt=U+Y*Z+lt*z;return new H(q-T[0],i(w,q,nt)-P+J,nt-T[1])};x.quad(m,j(B,V),j(k,V),j(k,K),j(B,K),As)}function d(x,m,w,T,P,L,U,F){let Y=w-x,B=T-m,k=U-P,V=F-L,K=Y*V-B*k;if(Math.abs(K)<1e-6)return null;let J=P-x,gt=L-m,lt=(J*V-gt*k)/K,j=(J*B-gt*Y)/K;return lt>=-.02&&lt<=1.02&&j>=-.02&&j<=1.02?{x:x+lt*Y,z:m+lt*B,t:lt,u:j}:null}function*p(x,m,w){let T=new le,P=xt("asphalt","#ffffff"),L=xt("sidewalk","#e2e0d8"),U=xt("concrete","#c4c2b8"),F=xt("asphalt","#c4c4be"),Y=xt("asphalt","#cecdc6"),B=xt("pavers","#d8d2c5"),k=xt("concrete","#d0cec6"),V=xt("#43474b","#ffffff",{roughness:.45,metalness:.72}),K=xt("#eeece2","#ffffff",{roughness:.65}),J=xt("#e4a829","#ffffff",{roughness:.62}),gt=Math.min(2,x.step||2),{x0:lt,z0:j,x1:Z,z1:z}=x.box;for(let N of x.roads){let $=f(x,N.points,gt,w,{bridge:!0}),I=N.kind>=Yc.ARTERIAL?3.5:2.5,X=.25,G=ie(1-2*I/N.width,.2,1),it=ie(G-2*X/N.width,.18,G),rt=ie(.18/N.width,.01,.05),ot=ie(.15/N.width,.008,.035),ut=it-ot*1.6;if(h(T,P,x,$,N.width,m,w,{lift:.16,side0:-G,side1:G,step:gt}),h(T,U,x,$,N.width,m,w,{lift:.26,side0:-G,side1:-it,step:gt,skirt:.14}),h(T,U,x,$,N.width,m,w,{lift:.26,side0:it,side1:G,step:gt,skirt:.14}),h(T,L,x,$,N.width,m,w,{lift:.27,side0:-1,side1:-G,step:gt,skirt:.28}),h(T,L,x,$,N.width,m,w,{lift:.27,side0:G,side1:1,step:gt,skirt:.28}),h(T,K,x,$,N.width,m,w,{lift:.18,side0:-ut-ot,side1:-ut+ot,step:gt}),h(T,K,x,$,N.width,m,w,{lift:.18,side0:ut-ot,side1:ut+ot,step:gt}),N.kind>=Yc.ARTERIAL){h(T,J,x,$,N.width,m,w,{lift:.184,side0:-rt,side1:rt,step:gt});let ct=ut*.5;h(T,K,x,$,N.width,m,w,{lift:.18,side0:-ct-ot,side1:-ct+ot,step:gt,dash:[4.5,10]}),h(T,K,x,$,N.width,m,w,{lift:.18,side0:ct-ot,side1:ct+ot,step:gt,dash:[4.5,10]})}else h(T,K,x,$,N.width,m,w,{lift:.184,side0:-rt,side1:rt,step:gt,dash:[4.5,9.5]});if($.bridgeKind){let ct=N.width/2,Mt=22,{dense:ft,nxArr:D,nzArr:R,overrideY:tt,bridgeKind:ht}=$;for(let pt of[-1,1])for(let st=1;st<ft.length;st++){if(ht[st-1]!==1&&ht[st]!==1)continue;let[Tt,et]=ft[st-1],[bt,vt]=ft[st];if(Tt<lt-Mt||Tt>Z+Mt||et<j-Mt||et>z+Mt)continue;let _t=(Number.isNaN(tt[st-1])?i(x,Tt,et)-w:tt[st-1])+.27,yt=(Number.isNaN(tt[st])?i(x,bt,vt)-w:tt[st])+.27,It=Tt+D[st-1]*(ct-.12)*pt-m[0],Rt=et+R[st-1]*(ct-.12)*pt-m[1],at=bt+D[st]*(ct-.12)*pt-m[0],Lt=vt+R[st]*(ct-.12)*pt-m[1],W=(It+at)*.5,wt=(Rt+Lt)*.5,Pt=Math.hypot(at-It,Lt-Rt);if(Pt<.05)continue;let zt=Math.atan2(at-It,Lt-Rt);T.box(U,W,(_t+yt)*.5+.48,wt,.22,.96,Pt+.04,zt)}}yield}for(let N of x.streets){let $=f(x,N.points,gt,w,{bridge:!0}),I=N.kind==="alley"||N.width<3.7,X=N.kind==="lane";if(I){let G=ie(1-.5/Math.max(N.width,2.2),.72,.9),it=ie(.16/Math.max(N.width,2.2),.03,.08);h(T,B,x,$,N.width,m,w,{lift:.2,side0:-G,side1:G,step:gt}),h(T,k,x,$,N.width,m,w,{lift:.215,side0:-1,side1:-G,step:gt,skirt:.26}),h(T,k,x,$,N.width,m,w,{lift:.215,side0:G,side1:1,step:gt,skirt:.26}),h(T,k,x,$,N.width,m,w,{lift:.218,side0:-it,side1:it,step:gt})}else{let G=X?Y:F,it=ie(1-2*.35/Math.max(N.width,2.4),.65,.9);if(h(T,G,x,$,N.width,m,w,{lift:.2,side0:-it,side1:it,step:gt}),h(T,k,x,$,N.width,m,w,{lift:.215,side0:-1,side1:-it,step:gt,skirt:.26}),h(T,k,x,$,N.width,m,w,{lift:.215,side0:it,side1:1,step:gt,skirt:.26}),N.width>=4.8){let ft=ie(.11/N.width,.015,.035),D=it-ft*1.4;h(T,K,x,$,N.width,m,w,{lift:.218,side0:-D-ft,side1:-D+ft,step:gt}),h(T,K,x,$,N.width,m,w,{lift:.218,side0:D-ft,side1:D+ft,step:gt})}let[rt,ot,ut,ct]=N.points,Mt=Math.hypot(ut-rt,ct-ot);if(Mt>=16&&rt>=lt&&rt<=Z&&ot>=j&&ot<=z){let ft=(ut-rt)/Mt,D=(ct-ot)/Mt,R=N.width/2*((1+it)*.5);for(let tt=10;tt<Mt-8;tt+=22)u(T,V,x,m,w,rt+ft*tt,ot+D*tt,ft,D,-.45,.45,R-.14,R+.14,.222)}}yield}let q=[];for(let N=0;N<x.roads.length;N++){let $=x.roads[N],I=$.points;for(let X=2;X<I.length;X+=2){let G=I[X-2],it=I[X-1],rt=I[X],ot=I[X+1];Math.max(G,rt)<lt||Math.min(G,rt)>Z||Math.max(it,ot)<j||Math.min(it,ot)>z||q.push({rIdx:N,kind:$.kind,width:$.width,ax:G,az:it,bx:rt,bz:ot})}}let nt=[];for(let N=0;N<q.length;N++){let $=q[N];for(let I=N+1;I<q.length;I++){let X=q[I];if($.rIdx===X.rIdx)continue;let G=d($.ax,$.az,$.bx,$.bz,X.ax,X.az,X.bx,X.bz);if(!(!G||G.x<lt+4||G.x>Z-4||G.z<j+4||G.z>z-4)&&!nt.some(it=>Math.hypot(it.x-G.x,it.z-G.z)<22)){nt.push(G);for(let[it,rt]of[[$,X],[X,$]]){let ot=Math.hypot(it.bx-it.ax,it.bz-it.az)||1,ut=(it.bx-it.ax)/ot,ct=(it.bz-it.az)/ot,Mt=it.kind>=Yc.ARTERIAL?3.5:2.5,ft=Math.max(2.5,it.width/2-Mt-.35),D=rt.width/2+2.2;for(let R of[-1,1]){let tt=R*(D+1.6);for(let Tt=-ft+.45;Tt<=ft-.45;Tt+=.9)u(T,K,x,m,w,G.x,G.z,ut,ct,tt-1.5,tt+1.5,Tt-.22,Tt+.22,.19);let ht=R*(D+4.8),pt=R>0?.2:-ft+.25,st=R>0?ft-.25:-.2;u(T,K,x,m,w,G.x,G.z,ut,ct,ht-.22,ht+.22,pt,st,.19)}}}}}for(let N of x.streets){if(N.width<3.6)continue;let[$,I,X,G]=N.points,it=Math.hypot(X-$,G-I);if(it<10)continue;let rt=(X-$)/it,ot=(G-I)/it,ut=N.width/2-.38;for(let[ct,Mt,ft]of[[$,I,!1],[X,G,!0]]){if(ct<lt+2||ct>Z-2||Mt<j+2||Mt>z-2)continue;let D=null;for(let st of q){let Tt=st.bx-st.ax,et=st.bz-st.az,bt=Tt*Tt+et*et,vt=bt>0?((ct-st.ax)*Tt+(Mt-st.az)*et)/bt:0;if(vt=ie(vt,0,1),Math.hypot(st.ax+Tt*vt-ct,st.az+et*vt-Mt)<st.width/2+1.8){D=st;break}}if(!D)continue;let R=D.width/2+1.6;if(R+2.5>=it)continue;let tt=ft?it-R:R,ht=ft?-ut:.05,pt=ft?-.05:ut;u(T,K,x,m,w,$,I,rt,ot,tt-.18,tt+.18,ht,pt,.225)}}yield;let Q=new se;return Q.name="region-roads",T.build(Q,{cast:!1,receive:!0,where:"out"}),Q}function*y(x,m,w){let T=[],P=[],L=new Kt;for(let B of x.roads){L.set(B.kind>=Yc.ARTERIAL?"#e9d8ad":"#dddcd4");for(let k=2;k<B.points.length;k+=2)for(let V of[k-2,k]){let K=B.points[V],J=B.points[V+1];T.push(K-m[0],i(x,K,J)-w+4,J-m[1]),P.push(L.r,L.g,L.b)}yield}let U=new Ye;U.setAttribute("position",new Ne(T,3)),U.setAttribute("color",new Ne(P,3));let F=new no({vertexColors:!0});F.userData.ownMaterial=!0;let Y=new Jo(U,F);return Y.userData.ownMaterial=!0,Y.name="region-overview-roads",Y}function*_(x,m,w){let T=[];if(!x.buildings.length){let j=new se;return j.name="region-buildings",{node:j,solids:T}}let P=32,L=new Map,U=(j,Z,z,q,nt)=>{let Q={ax:j,az:Z,bx:z,bz:q,half:nt},N=Math.floor((Math.min(j,z)-nt-4)/P),$=Math.floor((Math.max(j,z)+nt+4)/P),I=Math.floor((Math.min(Z,q)-nt-4)/P),X=Math.floor((Math.max(Z,q)+nt+4)/P);for(let G=I;G<=X;G++)for(let it=N;it<=$;it++){let rt=it+G*1e5,ot=L.get(rt);ot||L.set(rt,ot=[]),ot.push(Q)}};for(let j of x.roads){let Z=j.width*.5;for(let z=2;z<j.points.length;z+=2)U(j.points[z-2],j.points[z-1],j.points[z],j.points[z+1],Z)}for(let j of x.streets)U(j.points[0],j.points[1],j.points[2],j.points[3],j.width*.5);let F=(j,Z,z)=>{let q=L.get(Math.floor(j/P)+Math.floor(Z/P)*1e5);if(!q)return!0;for(let nt of q){let Q=nt.bx-nt.ax,N=nt.bz-nt.az,$=Q*Q+N*N,I=$>0?ie(((j-nt.ax)*Q+(Z-nt.az)*N)/$,0,1):0;if(Math.hypot(nt.ax+Q*I-j,nt.az+N*I-Z)-nt.half<z)return!1}return!0},Y=new le,B=xt("concrete","#b9b6ae"),k=new Map,V={material:null,vCount:0,iCount:0,vCursor:0,iCursor:0},K=(j,Z,z,q,nt)=>{let Q=k.get(j);Q||(Q={material:j,castShadow:Z,receiveShadow:z,vCount:0,iCount:0,vCursor:0,iCursor:0},k.set(j,Q)),Q.vCount+=q,Q.iCount+=nt},J=(j,Z,z)=>new H(j,Z,z),gt=new Array(x.buildings.length);for(let j=0;j<x.buildings.length;j++){let Z=x.buildings[j],z=Z.corners,q=(z[0]+z[2]+z[4]+z[6])*.25,nt=(z[1]+z[3]+z[5]+z[7])*.25,Q=[[z[0],z[1]],[z[2],z[3]],[z[4],z[5]],[z[6],z[7]]],N=1/0,$=-1/0;for(let[yt,It]of Q){let Rt=i(x,yt,It)-w;N=Math.min(N,Rt),$=Math.max($,Rt)}let I=N-.45,X=$+.04,G=Q.map(([yt,It])=>[yt-m[0],It-m[1]]),it=(G[0][0]+G[1][0]+G[2][0]+G[3][0])*.25,rt=(G[0][1]+G[1][1]+G[2][1]+G[3][1])*.25,ot=Math.hypot(G[1][0]-G[0][0],G[1][1]-G[0][1])||1,ut=Math.hypot(G[3][0]-G[0][0],G[3][1]-G[0][1])||1,ct=G[0][0]-G[3][0],Mt=G[0][1]-G[3][1],ft=Math.hypot(ct,Mt)||1,D=ct/ft,R=Mt/ft,tt=R,ht=-D,pt=Z.use===ee.LOW?F((z[0]+z[2])*.5,(z[1]+z[3])*.5,1.55):!1,st=o(x,q,nt),Tt=Cv(Z.use,st,Z.floors,ot,ut,Z.tone??.5,pt),et=!Jc.has(Tt.key),bt=Pv(Tt);et&&(yield);for(let yt of bt.parts){let It=yt.positions.length/3,Rt=yt.indices.length;yt.isShade?(V.material??(V.material=yt.material),V.vCount+=It,V.iCount+=Rt):K(yt.material,yt.castShadow,yt.receiveShadow,It,Rt)}let vt=ot/bt.bw,_t=ut/bt.bd;gt[j]={arch:bt,ring:G,cx:it,cz:rt,rightX:tt,rightZ:ht,outX:D,outZ:R,base:I,padY:X,widthM:ot,depthM:ut,sx:vt,sz:_t,invSx:1/vt,invSz:1/_t},T.push({ring:G,base:I,top:X+bt.totalHeight}),(j&63)===63&&(yield)}for(let j of k.values())j.positions=new Float32Array(j.vCount*3),j.normals=new Float32Array(j.vCount*3),j.uvs=new Float32Array(j.vCount*2),j.indices=new Uint32Array(j.iCount);V.vCount>0&&(V.positions=new Float32Array(V.vCount*3),V.shades=new Float32Array(V.vCount),V.indices=new Uint32Array(V.iCount));for(let j=0;j<gt.length;j++){let Z=gt[j],{arch:z,cx:q,cz:nt,rightX:Q,rightZ:N,outX:$,outZ:I,base:X,padY:G,widthM:it,depthM:rt,sx:ot,sz:ut,invSx:ct,invSz:Mt}=Z,ft=z.bw*.5,D=z.bd*.5,R=z.compactYard?.06:1.28,tt=z.compactYard?.06:.36,ht=it*.5+tt,pt=rt*.5+R,st=-(rt*.5+tt),Tt=(bt,vt,_t)=>J(q+Q*bt+$*_t,vt,nt+N*bt+I*_t),et=[[-ht,st],[ht,st],[ht,pt],[-ht,pt]];Y.quad(B,Tt(et[0][0],G,et[0][1]),Tt(et[1][0],G,et[1][1]),Tt(et[2][0],G,et[2][1]),Tt(et[3][0],G,et[3][1]),As);for(let bt=0;bt<4;bt++){let[vt,_t]=et[bt],[yt,It]=et[(bt+1)%4],Rt=(vt+yt)*.5,at=(_t+It)*.5,Lt=J(Q*Rt+$*at,0,N*Rt+I*at).normalize();Y.quad(B,Tt(vt,X,_t),Tt(yt,X,It),Tt(yt,G,It),Tt(vt,G,_t),Lt)}for(let bt of z.parts){let vt=bt.positions,_t=bt.indices,yt=vt.length/3;if(bt.isShade){let It=V.vCursor,Rt=V.positions,at=V.shades,Lt=bt.shades,W=It*3,wt=It;for(let Ct=0;Ct<yt;Ct++){let At=vt[Ct*3],Bt=vt[Ct*3+1],Gt=vt[Ct*3+2],Wt=At>ft?ft*ot+Math.min(At-ft,.42):At<-ft?-ft*ot+Math.max(At+ft,-.42):At*ot,Ht=Gt>D?D*ut+Math.min(Gt-D,1.38):Gt<-D?-D*ut+Math.max(Gt+D,-.42):Gt*ut;Rt[W++]=q+Q*Wt+$*Ht,Rt[W++]=G+Bt,Rt[W++]=nt+N*Wt+I*Ht,at[wt++]=Lt[Ct]}V.vCursor=It+yt;let Pt=V.indices,zt=V.iCursor;for(let Ct=0;Ct<_t.length;Ct++)Pt[zt++]=It+_t[Ct];V.iCursor=zt}else{let It=k.get(bt.material),Rt=It.vCursor,at=It.positions,Lt=It.normals,W=It.uvs,wt=bt.normals,Pt=bt.uvs,zt=Rt*3,Ct=Rt*3,At=Rt*2;for(let Wt=0;Wt<yt;Wt++){let Ht=vt[Wt*3],vn=vt[Wt*3+1],Oe=vt[Wt*3+2],To=Ht>ft?ft*ot+Math.min(Ht-ft,.42):Ht<-ft?-ft*ot+Math.max(Ht+ft,-.42):Ht*ot,Qn=Oe>D?D*ut+Math.min(Oe-D,1.38):Oe<-D?-D*ut+Math.max(Oe+D,-.42):Oe*ut;at[zt++]=q+Q*To+$*Qn,at[zt++]=G+vn,at[zt++]=nt+N*To+I*Qn;let Ds=wt[Wt*3]*(Ht>=-ft&&Ht<=ft?ct:1),Ao=wt[Wt*3+1],Ro=wt[Wt*3+2]*(Oe>=-D&&Oe<=D?Mt:1),is=Q*Ds+$*Ro,Co=N*Ds+I*Ro,Ai=1/(Math.hypot(is,Ao,Co)||1);Lt[Ct++]=is*Ai,Lt[Ct++]=Ao*Ai,Lt[Ct++]=Co*Ai,W[At++]=Pt[Wt*2],W[At++]=Pt[Wt*2+1]}It.vCursor=Rt+yt;let Bt=It.indices,Gt=It.iCursor;for(let Wt=0;Wt<_t.length;Wt++)Bt[Gt++]=Rt+_t[Wt];It.iCursor=Gt}}j%48===47&&(yield)}let lt=new se;lt.name="region-buildings",Y.build(lt,{cast:!0,receive:!0,where:"out"});for(let j of k.values()){if(!j.iCount)continue;let Z=new Ye;Z.setAttribute("position",new ue(j.positions,3)),Z.setAttribute("normal",new ue(j.normals,3)),Z.setAttribute("uv",new ue(j.uvs,2)),Z.setIndex(new ue(j.indices,1));let z=new pe(Z,j.material);z.castShadow=j.castShadow&&!j.material.transparent,z.receiveShadow=j.receiveShadow,lt.add(z)}if(V.iCount&&V.material){let j=new Ye;j.setAttribute("position",new ue(V.positions,3)),j.setAttribute("shade",new ue(V.shades,1)),j.setIndex(new ue(V.indices,1));let Z=new pe(j,V.material);Z.renderOrder=-1,lt.add(Z)}return{node:lt,solids:T}}function*g(x,m,w){let T=new le,P=xt("#c8553d"),L=xt("#e8e2d0");for(let[F,Y,B,k]of[[x.borders.block,L,.35,4],[x.borders.town,P,.7,0]])for(let V=0;V<F.length;V+=4){let K=F[V],J=F[V+1],gt=F[V+2],lt=F[V+3],j=Math.hypot(gt-K,lt-J),Z=Math.max(1,Math.ceil(j/4));for(let z=0;z<Z;z++){if(k&&z%2)continue;let q=z/Z,nt=(z+1)/Z;h(T,Y,x,[K+(gt-K)*q,J+(lt-J)*q,K+(gt-K)*nt,J+(lt-J)*nt],B,m,w,{lift:.3,step:4})}yield}let U=new se;return U.name="region-borders",T.build(U,{cast:!1,receive:!1,where:"out"}),U}function*S(x,m,w,T){let P=new le;for(let{colour:U,segments:F}of T){let Y=xt(U);for(let B=0;B+3<F.length;B+=4)h(P,Y,x,[F[B],F[B+1],F[B+2],F[B+3]],2.4,m,w,{lift:.34,side0:0,side1:1,step:4}),B%64===0&&(yield)}let L=new se;return L.name="region-district-outlines",P.build(L,{cast:!1,receive:!1,where:"out"}),L}function*M(x,m,w,T,P){let L=new le,U=xt("concrete","#c9c5bc"),F=xt("sidewalk","#ffffff"),Y=(k,V,K)=>new H(k-m[0],V-w,K-m[1]);for(let[k,V]of T.entries()){let K=new H(V.nx,0,V.nz);L.quad(U,Y(V.ax,V.low[0]-.2,V.az),Y(V.bx,V.low[1]-.2,V.bz),Y(V.bx,V.high[1]+.12,V.bz),Y(V.ax,V.high[0]+.12,V.az),K),L.quad(U,Y(V.bx,V.low[1]-.2,V.bz),Y(V.ax,V.low[0]-.2,V.az),Y(V.ax,V.high[0]+.12,V.az),Y(V.bx,V.high[1]+.12,V.bz),K.clone().negate()),k%64===63&&(yield)}for(let k of P)L.quad(F,Y(k.x0,k.y+.03,k.z0),Y(k.x0,k.y+.03,k.z1),Y(k.x1,k.y+.03,k.z1),Y(k.x1,k.y+.03,k.z0),As);let B=new se;return B.name="region-pads",L.build(B,{cast:!0,receive:!0,where:"out"}),B}async function v(x,{origin:m=[0,0],datum:w=0,borders:T=!0,roads:P=!0,coarse:L=!1,outlines:U=[],walls:F=[],paving:Y=[]}={}){let B=++e,k=new se;function*V(){let J=yield*c(x,m,w,L);k.add(J),yield;let gt=null;if(!L){let Z=yield*l(x,m,w,L);Z.node.children.length&&k.add(Z.node),gt=Z.waterSurface}P&&k.add(L?yield*y(x,m,w):yield*p(x,m,w));let{node:lt,solids:j}=yield*_(x,m,w);return x.buildings.length&&k.add(lt),T&&k.add(yield*g(x,m,w)),U.length&&k.add(yield*S(x,m,w,U)),(F.length||Y.length)&&k.add(yield*M(x,m,w,F,Y)),{win:x,origin:m,datum:w,solids:j,ground:J,waterSurface:gt}}let K=V();try{await E0();let J=performance.now()+S0;for(;B===e;){let gt=K.next();if(gt.done)return A(),n.add(...k.children.slice()),t=gt.value,!0;performance.now()>=J&&(await E0(),J=performance.now()+S0)}return!1}finally{K.return(),ci(k)}}function E(x){t&&(t.ground.geometry.setIndex(a(t.win,x)),t.waterSurface&&t.waterSurface.mesh.geometry.setIndex(r(t.win,x,t.waterSurface.cells)))}function C(){e++,A()}function A(){for(let x of[...n.children])n.remove(x),ci(x);t=null}function b(x,m){if(!t)return null;let w=x+t.origin[0],T=m+t.origin[1],{x0:P,z0:L,x1:U,z1:F}=t.win.box;return w<P||T<L||w>U||T>F?null:i(t.win,w,T)-t.datum}return{group:n,show:v,clear:C,heightAt:b,setHole:E,get solids(){return t?.solids??[]},get window(){return t?.win??null}}}var In={width:.85,height:1.5,span:22},Ut={length:14.7,width:2.98,height:5.1,floor:1.13,ceiling:3.28,roof:3.73,skirt:1.37,doors:[-3.65,3.65],doorWidth:1.3,doorHeight:1.9,gap:.5},pf={speed:12.5,accel:.85,brake:.95,dwell:22,doorsOpenAt:1.4,doorTime:2.4,melodyAt:9.5,doorsCloseAt:5.2},jc=(n,t,e)=>Math.min(e,Math.max(t,n)),Iv=n=>Math.round(n*1e3)/1e3,Qc=n=>Array.from({length:n},(t,e)=>(e-(n-1)/2)*(Ut.length+Ut.gap)),Rr=n=>Qc(n).flatMap(t=>Ut.doors.map(e=>Iv(t+e))),mf=n=>n*Ut.length+(n-1)*Ut.gap;function Lv(n,t=60){let e=[[...n[0]]],i=a=>{let c=e.at(-1);Math.hypot(a[0]-c[0],a[1]-c[1])>1e-6&&e.push(a)};for(let a=1;a<n.length-1;a++){let[c,l,f]=[n[a-1],n[a],n[a+1]],h=Math.hypot(l[0]-c[0],l[1]-c[1]),u=Math.hypot(f[0]-l[0],f[1]-l[1]),d=[(l[0]-c[0])/h,(l[1]-c[1])/h],p=[(f[0]-l[0])/u,(f[1]-l[1])/u],y=Math.acos(jc(d[0]*p[0]+d[1]*p[1],-1,1));if(y<.001)continue;let _=Math.min(t*Math.tan(y/2),h/2,u/2),g=_/Math.tan(y/2),S=Math.sign(d[0]*p[1]-d[1]*p[0])||1,M=[l[0]-d[0]*_,l[1]-d[1]*_],v=[M[0]-d[1]*S*g,M[1]+d[0]*S*g],E=Math.atan2(M[1]-v[1],M[0]-v[0]),C=Math.max(2,Math.ceil(g*y));for(let A=0;A<=C;A++){let b=E+S*y*A/C;i([v[0]+Math.cos(b)*g,v[1]+Math.sin(b)*g])}}i([...n.at(-1)]);let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let o=s.at(-1);return{length:o,spot:a=>{let c=jc(a,0,o),l=0,f=s.length-1;for(;f-l>1;){let y=l+f>>1;s[y]<=c?l=y:f=y}let h=s[f]-s[l]||1,u=(c-s[l])/h,[d,p]=[e[l],e[f]];return{x:d[0]+(p[0]-d[0])*u,z:d[1]+(p[1]-d[1])*u,dx:(p[0]-d[0])/h,dz:(p[1]-d[1])/h}},samples:e}}function gf(n,t=[],e=In.span){let i=[];for(let[r,a]of[...t].sort((c,l)=>c[0]-l[0])){let c=i.at(-1);c&&r<=c[1]?c[1]=Math.max(c[1],a):i.push([r,a])}let s=Math.max(1,Math.round(n/e)),o=[];for(let r=0;r<=s;r++){let a=n*r/s;for(let c=0;c<4;c++){let l=i.find(([f,h])=>a>f+1e-6&&a<h-1e-6);if(!l)break;a=a-l[0]<l[1]-a?l[0]:l[1]}a=jc(a,0,n),!o.length||a-o.at(-1)>4?o.push(a):r===s&&(o[o.length-1]=n)}return o}function Dv(n,{speed:t,accel:e,brake:i}){let s=Math.min(t,Math.sqrt(2*n*e*i/(e+i))),o=s/e,r=s/i,a=Math.max(0,n-s*s/(2*e)-s*s/(2*i))/s,c=o+a+r;return{time:c,top:s,at:f=>{if(f<=0)return[0,0];if(f<o)return[e*f*f/2,e*f];if(f<o+a)return[s*s/(2*e)+s*(f-o),s];if(f<c){let h=c-f;return[n-i*h*h/2,i*h]}return[n,0]}}}function xf(n,t=pf){let e=Lv(n.path,n.radius),i=n.stops.map((d,p)=>({side:1,...d,index:p})),s=n.cars??2,o=[],r=0,a=[...i.keys(),...[...i.keys()].reverse().slice(1,-1)];a.forEach((d,p)=>{let y=a[(p+1)%a.length];o.push({kind:"dwell",at:d,next:y,start:r,time:t.dwell}),r+=t.dwell;let _=Dv(Math.abs(i[y].at-i[d].at),t);o.push({kind:"run",at:d,next:y,start:r,time:_.time,run:_,way:Math.sign(i[y].at-i[d].at)}),r+=_.time});let c=r,l=d=>{let p=(d-t.doorsOpenAt)/t.doorTime,y=(t.dwell-t.doorsCloseAt-d)/t.doorTime;return jc(Math.min(p,y),0,1)};function f(d){let p=(d%c+c)%c,y=o[0];for(let E of o)if(E.start<=p)y=E;else break;let _=p-y.start,g=i[y.at],S=i[y.next];if(y.kind==="dwell")return{time:d,phase:"dwell",s:g.at,speed:0,way:Math.sign(S.at-g.at)||1,stop:g,next:S,doors:l(_),leaves:y.time-_};let[M,v]=y.run.at(_);return{time:d,phase:"run",s:g.at+y.way*M,speed:v,way:y.way,stop:null,from:g,next:S,doors:0,arrives:y.time-_}}function h(d,p){if(!(p>d))return[];let y=[];for(let S of o){let M=i[S.at],v=i[S.next];S.kind==="dwell"?y.push([S.start,"arrive",M,v],[S.start+t.doorsOpenAt,"open",M,v],[S.start+S.time-t.melodyAt,"melody",M,v],[S.start+S.time-t.doorsCloseAt,"close",M,v]):y.push([S.start,"depart",M,v],[S.start+Math.min(6,S.time*.3),"next",M,v],[S.start+Math.max(S.time-13,S.time*.55),"soon",M,v],[S.start+Math.max(S.time-16,S.time*.4),"approach",M,v])}let _=[],g=Math.max(d,p-c);for(let S=Math.floor(g/c);S<=Math.floor(p/c);S++)for(let[M,v,E,C]of y){let A=S*c+M;A>g&&A<=p&&_.push({time:A,kind:v,stop:E,next:C})}return _.sort((S,M)=>S.time-M.time)}let u=d=>d.way>0?i.at(-1):i[0];return{name:n.name??"\u30E2\u30CE\u30EC\u30FC\u30EB",y:n.y??7,cars:s,stops:i,way:e,period:c,drive:t,stateAt:f,eventsBetween:h,boundFor:u}}var Uv=(n,t)=>n*t>0?"\u5DE6":"\u53F3";function _f(n,t){let{kind:e,stop:i,next:s}=t,o=s.index===0||s.index===n.stops.length-1,r=Math.sign(s.at-i.at)||1,a=r>0?n.stops.at(-1):n.stops[0];return e==="next"?{where:"car",text:`\u672C\u65E5\u3082\u3001${n.name}\u3092\u3054\u5229\u7528\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u6B21\u306F\u3001${s.name}\u3001${s.name}${o?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002`}:e==="soon"?{where:"car",text:`\u307E\u3082\u306A\u304F\u3001${s.name}${o?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002\u304A\u51FA\u53E3\u306F\u3001${Uv(s.side,r)}\u5074\u3067\u3059\u3002`}:e==="approach"?{where:"platform",at:s,chime:"approach",text:`\u307E\u3082\u306A\u304F\u3001${a.name}\u3086\u304D\u304C\u3001\u307E\u3044\u308A\u307E\u3059\u3002\u30DB\u30FC\u30E0\u30C9\u30A2\u304B\u3089\u96E2\u308C\u3066\u3001\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002`}:e==="open"?{where:"both",at:i,chime:"door",text:`${i.name}\u3001${i.name}\u3067\u3059\u3002`}:e==="melody"?{where:"platform",at:i,chime:"depart",text:`${a.name}\u3086\u304D\u304C\u3001\u767A\u8ECA\u3044\u305F\u3057\u307E\u3059\u3002\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002`}:e==="close"?{where:"both",at:i,chime:"door",text:null}:null}function yf(n,t){let e=n.boundFor(t);return t.phase==="dwell"?[`${t.stop.name}`,t.leaves<n.drive.melodyAt?"\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059":`${e.name} \u3086\u304D`]:[t.arrives<14?"\u307E\u3082\u306A\u304F":"\u6B21\u306F",`${t.next.name}`]}var Nv=6.62,zv=.05,Ov={...pf,speed:18,accel:.97,brake:1.1,dwell:25},Fv=420,Ti=1.85,Ue={edge:Ti+Ut.width/2+.07,width:3.5,length:48,roof:3.9,stair:3};var wo=(n,t,e)=>Math.min(e,Math.max(t,n));function Jn(n,t){if(!n?.length)return 0;if(t<=n[0][0])return n[0][1];let e=n[n.length-1];if(t>=e[0])return e[1];let i=0,s=n.length-1;for(;s-i>1;){let l=i+s>>1;n[l][0]<=t?i=l:s=l}let[o,r]=n[i],[a,c]=n[s];return r+(c-r)*((t-o)/(a-o||1))}function Bv(n,t,{clearance:e=Nv,grade:i=zv,level:s=[],floor:o=[]}={}){let r=n.length,a=Float64Array.from(n,f=>f+e),c=i*t,l=()=>{for(let[f,h,u]of o){let d=wo(Math.floor(f/t),0,r-1),p=wo(Math.ceil(h/t),0,r-1);for(let y=d;y<=p;y++)a[y]=Math.max(a[y],u)}for(let[f,h]of s){let u=wo(Math.floor(f/t),0,r-1),d=wo(Math.ceil(h/t),0,r-1),p=-1/0;for(let y=u;y<=d;y++)p=Math.max(p,a[y]);for(let y=u;y<=d;y++)a[y]=p}};for(let f=0;f<6;f++){l();for(let h=1;h<r;h++)a[h]=Math.max(a[h],a[h-1]-c);for(let h=r-2;h>=0;h--)a[h]=Math.max(a[h],a[h+1]-c)}return l(),a}function I0(n,{origin:t=[0,0],datum:e=0,from:i=0,to:s=1/0,cars:o=2,step:r=20}={}){let c=(n.points.length/2-1)*r,l=wo(i,0,c),f=wo(s,l,c),h=mf(o)/2,u=n.stations.filter(b=>b.s-h-2.5>=l&&b.s+h+2.5<=f);if(u.length<2)return null;let d=Math.floor(l/r),p=Math.ceil(f/r),y=[],_=[];for(let b=d;b<=p;b++)y.push([n.points[b*2]-t[0],n.points[b*2+1]-t[1]]),_.push((n.ground?.[b]??0)-e);let g=d*r,S=Math.max(h+8,Ue.length/2+4),M=u.map(b=>[b.s-g-S,b.s-g+S]),v=Bv(_,r,{level:M}),E=Array.from(v,(b,x)=>[x*r,Math.round(b*100)/100]),C=_.map((b,x)=>[x*r,Math.round(b*100)/100]),A=u.map(b=>[b.s-g-6,b.s-g+6]);return{name:n.name,color:n.color,path:y,radius:2e3,heights:E,ground:C,y:E[0][1],cars:o,clear:A,drive:Ov,stops:u.map(b=>({name:b.name,at:b.s-g,side:1}))}}function L0(n,t=Fv){return Math.max(1,Math.ceil(n/t))}var vf=".".repeat(32),bf=(n,t)=>[n,n,n,t,t,vf,vf,vf].join(""),aS=[bf(`XXSSSSSAA${"M".repeat(12)}${"E".repeat(11)}`,`${"A".repeat(9)}${"M".repeat(12)}${"E".repeat(11)}`),bf(`XXOOOOOOOTTttEEEEE${"O".repeat(7)}SSSSSXX`,"O".repeat(32)),bf(`${"O".repeat(30)}XX`,"O".repeat(32))];var Se=Ut.width/2,We=Ut.length/2,ke=Ut.floor,kn=(n,t=.5,e=0)=>xt(n,"#ffffff",{roughness:t,metalness:e});function el(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0}),s=5,o=document.createElement("canvas");o.width=n*s,o.height=t*s;let r=o.getContext("2d"),a=new dn(o);a.colorSpace=Ee;let c=new sn({map:a,toneMapped:!1}),l=null;return{material:c,show(f,h=["#ffb23e","#8dff9a"]){let u=f.join("|");if(u===l)return;l=u,i.clearRect(0,0,n,t),i.textBaseline="middle",i.textAlign="center";let d=t/f.length;f.forEach((y,_)=>{let g=Math.floor(d*.88),S=v=>`700 ${v}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`;i.font=S(g);let M=i.measureText(y).width;M>n-4&&(i.font=S(Math.max(6,Math.floor(g*(n-4)/M)))),i.fillStyle=h[_%h.length],i.fillText(y,n/2,d*(_+.5)+.5)});let p=i.getImageData(0,0,n,t).data;r.fillStyle="#08090a",r.fillRect(0,0,o.width,o.height);for(let y=0;y<t;y++)for(let _=0;_<n;_++){let g=(y*n+_)*4;r.fillStyle=p[g+3]>96?`rgb(${p[g]},${p[g+1]},${p[g+2]})`:"#1b1d1f",r.beginPath(),r.arc((_+.5)*s,(y+.5)*s,s*.4,0,Math.PI*2),r.fill()}a.needsUpdate=!0},dispose(){a.dispose(),c.dispose()}}}function tl(n,t,e,i=!1,s=0){let o=new se,r=new le;r.box(kn("#2a2e31",.5,.3),0,0,0,t+.08,e+.08,.09);for(let a of s?[-t*.35,t*.35]:[])r.box(kn("#9aa0a3",.4,.7),a,e/2+.04+s/2,0,.025,s,.025);r.build(o,{cast:!1});for(let a of i?[1,-1]:[1]){let c=new pe(new gn(t,e),n.material);c.position.z=a*.047,a<0&&(c.rotation.y=Math.PI),o.add(c)}return o}var D0=[[-We,Ut.doors[0]-Ut.doorWidth/2],[Ut.doors[0]+Ut.doorWidth/2,Ut.doors[1]-Ut.doorWidth/2],[Ut.doors[1]+Ut.doorWidth/2,We]];function U0({front:n,back:t,boards:e}){let i=new se,s=new le,o=new le,r=new le,a=kn("#f1f2f0",.42,.12),c=kn("#1e8f8a",.45,.12),l=kn("#3a4046",.6,.25),f=kn("#b9bcbd",.55,.2),h=kn("#1f2326",.5,.2),u=kn("#c9cdcf",.3,.8),d=Fn("near"),p=ke+.45,y=ke+1.95,_=Ut.roof-.35,g=(v,E,C)=>new H(v,E,C);for(let v of[-1,1]){let E=v*Se,C=g(v,0,0);s.box(l,v*(Se-.03),(.3-Ut.skirt)/2,0,.06,Ut.skirt+.3,Ut.length),s.box(c,v*(Se-.03),.525,0,.062,.45,Ut.length);for(let[A,b]of D0){let x=b-A,m=(A+b)/2;s.box(a,v*(Se-.035),(.75+p)/2,m,.07,p-.75,x);let w=Math.max(1,Math.round(x/1.8)),T=[A===-We?A+.34:A+.1,b===We?b-.34:b-.1];for(let P=0;P<w;P++){let L=T[0]+(T[1]-T[0])*P/w+.03,U=T[0]+(T[1]-T[0])*(P+1)/w-.03;r.quad(d,g(E-v*.02,p,L),g(E-v*.02,p,U),g(E-v*.02,y,U),g(E-v*.02,y,L),C),P&&s.box(h,v*(Se-.035),(p+y)/2,L-.03,.07,y-p,.06)}for(let[P,L]of[[A,A===-We?.34:.1],[b,b===We?-.34:-.1]])s.box(a,v*(Se-.035),(p+y)/2,P+L/2,.07,y-p,Math.abs(L))}s.box(a,v*(Se-.035),(y+_)/2,0,.07,_-y,Ut.length);for(let A of Ut.doors)s.box(l,v*(Se-.03),.94,A,.062,.38,Ut.doorWidth);s.quad(f,g(E,_,-We),g(E,_,We),g(v*.95,Ut.roof,We),g(v*.95,Ut.roof,-We),g(v*.4,1,0));for(let A of[-4.9,4.9])s.box(h,v*(In.width/2+.34),-.6,A,.56,1.1,2.3)}s.quad(f,g(-.95,Ut.roof,-We),g(-.95,Ut.roof,We),g(.95,Ut.roof,We),g(.95,Ut.roof,-We),g(0,1,0));for(let v of[-3.1,3.1])s.box(kn("#a9adae",.6,.2),0,Ut.roof+.13,v,1.6,.26,2.4);s.box(l,0,ke-.06,0,Ut.width,.12,Ut.length);for(let v of[-4.9,4.9])s.box(h,0,.52,v,Ut.width-.2,.9,2.5);for(let[v,E]of[[1,n],[-1,t]]){let C=v*We,A=g(0,0,v);if(E){s.box(a,0,(.75+p)/2,C-v*.035,Ut.width,p-.75,.07),s.box(c,0,.525,C-v*.03,Ut.width,.45,.062),s.box(l,0,(.3-Ut.skirt)/2,C-v*.03,Ut.width,Ut.skirt+.3,.06);for(let x of[-Se+.11,Se-.11])s.box(a,x,(p+y)/2,C-v*.035,.22,y-p,.07);s.box(a,0,(y+_)/2,C-v*.035,Ut.width,_-y,.07),r.quad(d,g(-Se+.22,p,C-v*.02),g(Se-.22,p,C-v*.02),g(Se-.22,y,C-v*.02),g(-Se+.22,y,C-v*.02),A);for(let x of[-.95,.95])s.box(_e("#fff6dc",1.1),x,p-.2,C+v*.002,.26,.1,.01),s.box(_e("#d0302b",.6),x*.72,p-.2,C+v*.002,.12,.08,.01);let b=tl(e.bound,1.3,.2);b.position.set(0,(y+_)/2,C+v*.012),b.rotation.y=v>0?0:Math.PI,i.add(b)}else{for(let b of[-1,1])s.box(a,b*(Se+.55)/2,(ke+_)/2,C-v*.035,Se-.55,_-ke,.07);s.box(a,0,(ke+2+_)/2,C-v*.035,1.1,_-ke-2,.07);for(let b of[-.6,.6])s.box(h,b,ke+1,C+v*Ut.gap/4,.08,2.1,Ut.gap/2);s.box(h,0,ke+2.08,C+v*Ut.gap/4,1.28,.08,Ut.gap/2),s.box(h,0,ke-.04,C+v*Ut.gap/4,1.28,.08,Ut.gap/2)}}o.slab(kn("#5e6f7d",.7),-Se+.07,-We+.07,Se-.07,We-.07,ke+.002),o.box(kn("#eceeed",.6),0,Ut.ceiling+.03,0,Ut.width-.14,.06,Ut.length-.14);for(let v of[-.5,.5])o.box(_e("#fff9ec",1.25),v,Ut.ceiling-.004,0,.14,.012,Ut.length-1.2);let S=xt("carpet","#3f6f8f");for(let v of[-1,1]){for(let[E,C]of D0){let A=E===-We?E+(t?.75:.25):E+.3,b=C===We?C-(n?.75:.25):C-.3;if(b-A<.6)continue;let x=(A+b)/2;o.box(S,v*(Se-.32),ke+.36,x,.46,.12,b-A),o.box(kn("#d9dcdc",.6),v*(Se-.32),ke+.15,x,.42,.3,b-A),o.box(S,v*(Se-.11),ke+.62,x,.08,.4,b-A);for(let m of[A,b])o.box(u,v*(Se-.32),ke+.7,m,.5,.56,.03)}o.box(u,v*.66,ke+1.9,0,.03,.03,Ut.length-1.4);for(let E of Ut.doors){for(let A of[E-.76,E+.76])o.cylinder(u,v*(Se-.56),ke,A,.017,Ut.ceiling-ke,8);let C=tl(e.car,.9,.16);C.position.set(v*(Se-.085),ke+2.02,E),C.rotation.y=v>0?-Math.PI/2:Math.PI/2,i.add(C)}}s.build(i,{where:"out"}),o.build(i,{where:"in",cast:!1});for(let v of r.build(i,{cast:!1}))v.renderOrder=1;let M=[];for(let v of[-1,1])for(let E of Ut.doors)for(let C of[-1,1]){let A=new le,b=Ut.doorWidth/2,x=(w,T,P,L)=>A.box(u,0,(P+L)/2,(w+T)/2,.035,L-P,T-w);x(-b/2,-b/2+.05,0,Ut.doorHeight),x(b/2-.05,b/2,0,Ut.doorHeight),x(-b/2,b/2,0,.18),x(-b/2,b/2,Ut.doorHeight-.07,Ut.doorHeight),A.quad(d,g(0,.18,-b/2+.05),g(0,.18,b/2-.05),g(0,Ut.doorHeight-.07,b/2-.05),g(0,Ut.doorHeight-.07,-b/2+.05),g(v,0,0));let m=new se;for(let w of A.build(m,{cast:!1}))w.material===d&&(w.renderOrder=1);m.position.set(v*(Se+.02),ke,E+C*b/2),i.add(m),M.push({leaf:m,side:v,shut:E+C*b/2,slide:C*(b-.03)})}return{car:i,leaves:M}}var Sf=Ut.width/2,O0=Ut.length/2,F0=Ut.length+Ut.gap,B0=F0/2,kv=Ut.doorWidth/2-ze,vS=Sf-ze-.1,Hv=Math.min(.98-ze,Sf-ze-.24),wf=Sf-ze-.19,Vv=O0-.36-ze,N0=Ue.edge+ze+.055,z0=(n,t)=>n?.phase==="dwell"&&n.doors>.85&&n.way===t.sign&&n.stop.index===t.stop.index;function Mf(n,t=Ut.doors){return t.find(e=>Math.abs(n-e)<=kv)}function Gv(n,t,e){let{spot:i,sign:s}=n;return((t-i.x)*i.dx+(e-i.z)*i.dz)*s}function Wv(n,t,e,i){return Math.abs(e)<=Hv&&Math.abs(i)<=Vv||Math.abs(e)<=wf&&Ut.doors.some(s=>Math.abs(i-s)<=.9-ze)?!0:Math.abs(e)<=.55-ze&&Math.abs(i)>=O0-.7&&Math.abs(i)<=B0+.14&&!!n.cars[t+Math.sign(i)]}function k0(n){function t(o,r,a){if(o.x===r&&o.z===a)return null;for(let c of n())for(let l of c.platforms){let{spot:f,sign:h,level:u}=l;if(Math.abs(o.y-u)>.4||Math.abs(o.x-f.x)>26||Math.abs(o.z-f.z)>26)continue;let d=((o.x-f.x)*f.dz-(o.z-f.z)*f.dx)*h,p=((r-f.x)*f.dz-(a-f.z)*f.dx)*h;if(d<Ue.edge-.04||p>N0||p>=d)continue;let y=Math.max(0,Math.min(1,(d-N0)/(d-p))),_=Gv(l,o.x+(r-o.x)*y,o.z+(a-o.z)*y),g=c.trains.find(({state:S})=>z0(S,l));if(g)for(let S of g.cars){if(!S.place)continue;let M=_*h-S.offset,v=Mf(M);if(!(v===void 0||Math.abs(v+S.offset)+Ut.doorWidth/2>=Ue.length/2))return{entry:c,train:g,car:S.index,x:h*(wf-.04),z:M}}}return null}function e(o){let{place:r}=o.train.cars[o.car],a=r.pitch??0,c=o.z*Math.cos(a)-Ut.floor*Math.sin(a);return{x:r.x+o.x*r.dz+c*r.dx,z:r.z-o.x*r.dx+c*r.dz,y:r.y+Ut.floor*Math.cos(a)+o.z*Math.sin(a)}}function i(o,r,a){let{entry:c,train:l}=o,f=l.cars[o.car],{place:h}=f,u=r*h.dz-a*h.dx,d=r*h.dx+a*h.dz,p=l.state.way,y=c.platforms.find(g=>z0(l.state,g)),_=(f.offset+o.z+d)*p;if(y&&u*p>0&&(o.x+u)*p>wf&&Mf(o.z+d)!==void 0&&Math.abs(_)<Ue.length/2-ze&&Mf(_,Rr(l.cars.length))!==void 0){let{spot:g}=y,S=Ue.edge+ze+.18;return{x:g.x+p*(S*g.dz+_*g.dx),z:g.z+p*(-S*g.dx+_*g.dz),y:y.level}}for(let[g,S]of[[u,d],[u,0],[0,d]]){let M=o.x+g,v=o.z+S;if(Wv(l,o.car,M,v)){o.x=M,o.z=v,Math.abs(v)>B0&&l.cars[o.car+Math.sign(v)]?.place&&(o.car+=Math.sign(v),o.z-=Math.sign(v)*F0);break}}return!0}return{board:t,spotOf:e,walk:i,riding:o=>!!(o&&n().includes(o.entry)&&o.train.cars[o.car]?.place)}}var Ke={width:1.8,slope:.6,landing:2.2,riser:.17,gap:.2};function H0(n,t,e=Ue.length/2){let i=Ue.edge,s=Ue.edge+Ue.width,o=n-t,r={edge:i,outer:s,long:e,level:n,ground:t,stair:null,landing:null};if(!(o>1))return r;let a=Math.min(o/Ke.slope,2*e-Ke.landing-4),c=e-2,l=c-a,f=s+Ke.gap;return r.stair={u0:f,u1:f+Ke.width,top:l,bottom:c,run:a,rise:o},r.landing={u0:s-.2,u1:f+Ke.width,v0:l-Ke.landing,v1:l},r}function Xv(n){let{edge:t,outer:e,long:i,level:s,ground:o,stair:r,landing:a}=n,c=[s-.4,s+2.2],l=[{u0:t,u1:e,v0:-i,v1:i,y0:s,y1:s}],f=[[t,-i,t,i,...c],[t,-i,e,-i,...c],[t,i,e,i,...c]],h=[];if(r){l.push({u0:a.u0,u1:a.u1,v0:a.v0,v1:a.v1,y0:s,y1:s}),l.push({u0:r.u0,u1:r.u1,v0:r.top,v1:r.bottom,y0:s,y1:o}),f.push([e,-i,e,a.v0,...c],[e,a.v1,e,i,...c]),f.push([e,a.v0,a.u1,a.v0,...c],[a.u1,a.v0,a.u1,a.v1,...c]);let u=[o-.5,s+2.2];f.push([r.u0,r.top,r.u0,r.bottom,...u],[r.u1,r.top,r.u1,r.bottom,...u]),f.push([r.u0,r.top,r.u1,r.top,o-.5,s-2])}else f.push([e,-i,e,i,...c]);for(let u=-i+4;u<=i-4;u+=8)h.push({u:e-.6,v:u,w:.7,d:.7,low:o-.5,high:s-.5});return{surfaces:l,walls:f,boxes:h}}function V0(n,{x:t,z:e,dx:i,dz:s,sign:o=1}){let r=o*s,a=o*-i,c=o*i,l=o*s,f=(_,g)=>[t+_*r+g*c,e+_*a+g*l],h=Xv(n),u=h.surfaces.map(_=>{let g=[f(_.u0,_.v0),f(_.u1,_.v0),f(_.u1,_.v1),f(_.u0,_.v1)];return{..._,x:t,z:e,ux:r,uz:a,vx:c,vz:l,box:Ef(g)}}),d=h.walls.map(([_,g,S,M,v,E])=>{let[C,A]=f(_,g),[b,x]=f(S,M);return{ax:C,az:A,bx:b,bz:x,r:.05,low:v,high:E,box:Ef([[C,A],[b,x]])}}),p=Math.atan2(i,s)*180/Math.PI,y=h.boxes.map(_=>{let[g,S]=f(_.u,_.v);return{x:g,z:S,w:_.w,d:_.d,r:p,low:_.low,high:_.high,box:Ef([[g-_.w,S-_.d],[g+_.w,S+_.d]])}});return{surfaces:u,walls:d,boxes:y}}function Ef(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[o,r]of n)t=Math.min(t,o),i=Math.max(i,o),e=Math.min(e,r),s=Math.max(s,r);return{x0:t,z0:e,x1:i,z1:s}}function G0(n){return n.eventsBetween(-.001,n.period-.001).filter(t=>t.kind==="arrive").map(t=>({time:t.time,stop:t.stop.index,way:Math.sign(t.next.at-t.stop.at)||1}))}function W0(n,t,e,i,s,o){let r=e.map(f=>n.stateAt(o+f)).find(f=>f.phase==="dwell"&&f.stop.index===i.index&&f.way===s),a=`${i.name} ${s>0?1:2}\u756A\u7DDA`,c=s>0?n.stops.at(-1):n.stops[0];if(r){let f=n.drive.dwell-r.leaves,h="\u505C\u8ECA\u4E2D";return f<n.drive.doorsOpenAt+n.drive.doorTime?h="\u30C9\u30A2\u304C\u958B\u304D\u307E\u3059":r.leaves<=n.drive.doorsCloseAt?h="\u767A\u8ECA\u3057\u307E\u3059":r.leaves<n.drive.doorsCloseAt+n.drive.doorTime&&(h="\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059"),{doors:r.doors,text:[a,`${c.name} \u3086\u304D`,h]}}let l=1/0;for(let f of t)if(!(f.stop!==i.index||f.way!==s))for(let h of e){let u=((f.time-o-h)%n.period+n.period)%n.period;l=Math.min(l,u)}return Number.isFinite(l)?{doors:0,text:[a,`${c.name} \u3086\u304D`,l<20?"\u307E\u3082\u306A\u304F\u5230\u7740":`\u7D04 ${Math.max(1,Math.ceil(l/60))} \u5206`]}:{doors:0,text:[a,"\u3053\u306E\u30DB\u30FC\u30E0\u306E\u904B\u884C\u306A\u3057","\u53CD\u5BFE\u5074\u30DB\u30FC\u30E0\u3078"]}}function X0({clock:n=()=>Date.now()/1e3,sound:t=null}={}){let e=new se;e.name="route-transit";let i=[],s="",o="",r=k0(()=>i),a=0,c=new WeakMap;function l(g){if(g.track){e.remove(g.track),ci(g.track);for(let S of g.platforms)S.board.dispose();g.track=null,g.platforms=[]}}function f(){for(let g of i){l(g);for(let S of g.trains){for(let M of S.cars)e.remove(M.car),ci(M.car);S.boards.car.dispose(),S.boards.bound.dispose()}}i=[]}function h(g,S,M,v){let E=new se,C=new le,A=xt("concrete","#d6d4cd"),b=xt("concrete","#c6c4bd"),x=xt("concrete","#bfbcb4"),m=xt("tile","#d9d4ca"),w=xt("roofMetal","#9aa3a8"),T=xt("#7d868c","#ffffff",{roughness:.45,metalness:.5}),P=xt(S.color??"#1f7a6a","#ffffff",{roughness:.5}),L=g.way,U=X=>{let G=L.spot(X);return Math.hypot(G.x-M[0],G.z-M[1])<v},F=(X,G,it)=>new H(X,G,it);for(let X=0;X<L.length;X+=10){let G=Math.min(L.length,X+10);if(!U(X)&&!U(G))continue;let it=L.spot(X),rt=L.spot(G),ot=Jn(S.heights,X)-In.height/2,ut=Jn(S.heights,G)-In.height/2;for(let ct of[-1,1]){let[Mt,ft]=[it.x+it.dz*ct*Ti,it.z-it.dx*ct*Ti],[D,R]=[rt.x+rt.dz*ct*Ti,rt.z-rt.dx*ct*Ti];C.bar(A,F(Mt,ot,ft),F(D,ut,R),In.width,In.height);for(let tt of[-1,1]){let ht=it.dz*tt*(In.width/2+.035),pt=-it.dx*tt*(In.width/2+.035);C.bar(T,F(Mt+ht,ot+.13,ft+pt),F(D+ht,ut+.13,R+pt),.05,.09)}}}let Y=[];for(let X of gf(L.length,S.clear??[])){if(!U(X))continue;let G=L.spot(X),it=Math.atan2(G.dx,G.dz),rt=Jn(S.ground,X),ot=Jn(S.heights,X)-In.height,ut=ot-.9-rt;ut<.3||(C.box(b,G.x,rt+.15,G.z,2.6,.3,2.6,it),C.box(b,G.x,rt+ut/2,G.z,1.5,ut,1.5,it),C.box(b,G.x,ot-.45,G.z,Ti*2+1.4,.9,1.6,it),Y.push({x:G.x,z:G.z,w:1.6,d:1.6,r:it*180/Math.PI}))}let B={surfaces:[],walls:[],boxes:[]},k=[],V=xt("#e8c33a"),K=xt("#dfe5e8","#ffffff",{roughness:.3}),J=xt("#9ab4c4","#ffffff",{roughness:.18,metalness:.45}),gt=xt("wood","#8c623e"),lt=xt("wood","#a57c52"),j=xt("#2c3338","#ffffff",{roughness:.4,metalness:.65}),Z=xt("#d8dde0","#ffffff",{roughness:.35,metalness:.4}),z=xt("#c93a32","#ffffff",{roughness:.3}),q=xt("tile","#e6e2d8"),nt=_e("#fff8e6",1.15),Q=_e("#2a9df4",.9),N=_e("#4cd964",.85),$=Rr(g.cars).filter(X=>Math.abs(X)+Ut.doorWidth/2<Ue.length/2);for(let X of g.stops){if(!U(X.at))continue;let G=L.spot(X.at),it=Math.atan2(G.dx,G.dz),rt=Jn(S.heights,X.at),ot=rt-In.height,ut=rt+Ut.floor,ct=Jn(S.ground,X.at),Mt=H0(ut,ct);for(let ft of[1,-1]){C.at(G.x,0,G.z,ft>0?it:it+Math.PI,st=>I(st,Mt,ot));let D=V0(Mt,{x:G.x,z:G.z,dx:G.dx,dz:G.dz,sign:ft});B.surfaces.push(...D.surfaces),B.walls.push(...D.walls),B.boxes.push(...D.boxes);let R=new se;R.name="station-platform",R.position.set(G.x,0,G.z),R.rotation.y=ft>0?it:it+Math.PI;let tt=[];for(let st of $)for(let Tt of[-1,1]){let et=new se;et.name="platform-door";let bt=new le,vt=Ut.doorWidth/2;bt.box(K,0,.65,0,.05,1.25,vt-.04),bt.box(T,0,1.28,0,.07,.06,vt);for(let yt of[-1,1])bt.box(T,0,.65,yt*(vt/2-.025),.07,1.25,.05);bt.build(et,{cast:!1,where:"out"});let _t=st+Tt*vt/2;et.position.set(Mt.edge+.14,ut,_t),R.add(et),tt.push({leaf:et,shut:_t,slide:Tt*(vt-.02)})}let ht=el(208,68),pt=tl(ht,2.1,.68,!0,.2);if(pt.name="platform-departure-board",pt.position.set((Mt.edge+Mt.outer)/2,ut+2.9,0),R.add(pt),typeof document<"u"){let st=br(`${X.name}  ${ft>0?"1\u756A\u7DDA":"2\u756A\u7DDA"}`,{color:"#1b262c",background:"#f7f6f0",border:S.color??"#1f7a6a",padding:14}),Tt=new sn({map:st.map}),et=.42,bt=Math.min(2.4,et*st.aspect);for(let vt of[-Mt.long*.48,Mt.long*.48]){let _t=new pe(new gn(bt,et),Tt);_t.position.set(Mt.outer-.12,ut+1.95,vt),_t.rotation.y=-Math.PI/2,_t.userData.ownMaterial=!0,R.add(_t)}if(Mt.stair){let vt=br(`${X.name}\u99C5  ${ft>0?"1\u756A\u7DDA\u306E\u308A\u3070":"2\u756A\u7DDA\u306E\u308A\u3070"}`,{color:"#ffffff",background:S.color??"#1f7a6a",border:"#f4f2ea",padding:14}),_t=new sn({map:vt.map}),yt=.34,It=Math.min(Ke.width+.3,yt*vt.aspect),Rt=new pe(new gn(It,yt),_t);Rt.position.set((Mt.stair.u0+Mt.stair.u1)/2,ct+2.42,Mt.stair.bottom+.88),Rt.userData.ownMaterial=!0,R.add(Rt)}}E.add(R),k.push({stop:X,sign:ft,spot:G,level:ut,leaves:tt,board:ht,nextBoard:-1/0})}C.at(G.x,0,G.z,it,ft=>{let D=Mt.outer+.65,R=Mt.long,tt=ut+Ue.roof;for(let ht of[-1,1])ft.box(w,ht*(Mt.edge+(D-Mt.edge)/2),tt+.08,0,D-Mt.edge+.3,.18,R*2+2.4),ft.box(lt,ht*(Mt.edge+(Mt.outer-Mt.edge)/2),tt-.01,0,Mt.outer-Mt.edge-.3,.02,R*2-.6),ft.box(P,ht*(D+.04),tt+.06,0,.08,.32,R*2+2.4),ft.box(nt,ht*((Mt.edge+Mt.outer)/2),tt-.04,0,.22,.03,R*2-2);ft.box(w,0,tt+.54,0,Mt.edge*2+.8,.16,R*2+2.4);for(let ht of[-1,1])ft.box(J,ht*(Mt.edge+.15),tt+.3,0,.06,.32,R*2+1.6);ft.box(P,0,tt+.3,-R-1.2,D*2,.42,.12),ft.box(P,0,tt+.3,R+1.2,D*2,.42,.12);for(let ht=-R+4;ht<=R-4;ht+=8){ft.box(T,0,tt+.18,ht,D*2-.2,.18,.2),ft.box(b,0,ot-.42,ht,Mt.outer*2-.2,.84,.92);for(let pt of[-1,1]){let st=Mt.outer-Mt.edge-.35,Tt=pt*(Mt.edge+.25+st/2),et=ut-.5-(ot-.05);et>.1&&ft.box(b,Tt,ot-.05+et/2,ht,st,et,.72)}}for(let ht of[-8,8]){let pt=ot-.84-ct;pt>.4&&(ft.box(b,0,ct+.18,ht,2.8,.36,2.2),ft.box(b,0,ct+pt/2,ht,1.7,pt,1.5))}}),Y.push({x:G.x,z:G.z,w:2.4,d:2.4,r:it*180/Math.PI})}function I(X,G,it){let{edge:rt,outer:ot,long:ut,level:ct,ground:Mt,stair:ft,landing:D}=G,R=ut*2;if(X.box(x,(rt+ot)/2,ct-.25,0,ot-rt,.5,R),X.box(b,ot+.04,ct-.22,0,.1,.56,R+.2),X.box(P,ot+.095,ct-.16,0,.02,.16,R+.2),X.box(m,(rt+ot)/2,ct+.005,0,ot-rt,.01,R),X.box(V,rt+.46,ct+.012,0,.32,.012,R-.6),D){let at=(D.v0+D.v1)/2;X.box(V,(rt+.6+ot)/2,ct+.012,at,ot-rt-.6,.012,.3)}let tt=(at,Lt)=>{let W=Lt-at;if(W<=.1)return;let wt=(at+Lt)/2;X.box(x,ot-.06,ct+.52,wt,.12,1.04,W),X.box(q,ot-.125,ct+.52,wt,.02,.96,Math.max(.1,W-.1)),X.box(J,ot-.05,ct+1.78,wt,.05,1.46,Math.max(.1,W-.16)),X.box(T,ot-.06,ct+2.54,wt,.12,.08,W),X.box(x,ot-.06,ct+3.22,wt,.12,1.28,W);for(let Pt=at+3;Pt<Lt-1;Pt+=3)X.box(j,ot-.06,ct+1.78,Pt,.09,1.46,.06)};D?(tt(-ut,D.v0),tt(D.v1,ut)):tt(-ut,ut);for(let at of[-ut+.05,ut-.05])X.box(x,(rt+ot)/2,ct+.52,at,ot-rt,1.04,.1),X.box(J,(rt+ot)/2,ct+1.65,at,ot-rt-.15,1.2,.05),X.box(T,(rt+ot)/2,ct+2.28,at,ot-rt,.07,.1);let ht=-ut;for(let at of $)pt(ht,at-Ut.doorWidth/2),X.box(T,rt+.14,ct+2.22,at,.1,.16,Ut.doorWidth+.16),X.box(P,rt+.09,ct+2.22,at,.02,.1,Ut.doorWidth+.12),X.box(N,rt+.2,ct+2.22,at,.02,.05,.32),ht=at+Ut.doorWidth/2;pt(ht,ut);function pt(at,Lt){if(Lt<=at)return;let W=(at+Lt)/2,wt=Lt-at;X.box(K,rt+.14,ct+.65,W,.06,1.3,wt),X.box(T,rt+.14,ct+1.3,W,.08,.06,wt),X.box(P,rt+.1,ct+1.12,W,.02,.08,wt),X.box(T,rt+.14,ct+2.26,W,.08,.08,wt)}for(let at of[-11,0,11]){if(D&&at>=D.v0-2.2&&at<=D.v1+2.2)continue;let Lt=rt+(ot-rt)*.62;X.box(gt,Lt,ct+.44,at,.52,.07,2.4),X.box(gt,Lt+.2,ct+.68,at,.07,.42,2.4);for(let W of[at-.95,at+.95])X.box(j,Lt,ct+.21,W,.44,.42,.07);if(at===0)for(let W of[-1.45,1.45])X.box(j,Lt-.05,ct+1.1,W,.72,2.2,.06),X.box(J,Lt-.05,ct+1.15,W,.64,1.7,.03)}for(let at=-ut+4;at<=ut-4;at+=8){let Lt=ct-.5-Mt;Lt>.5&&(X.box(b,ot-.6,Mt+Lt/2,at,.72,Lt,.72),X.box(b,ot-.6,Mt+.18,at,1,.36,1))}for(let at=-ut+2;at<=ut-2;at+=8)X.box(T,ot-.2,ct+Ue.roof/2,at,.2,Ue.roof,.2);if(!ft)return;let st=(D.u0+D.u1)/2,Tt=(D.v0+D.v1)/2,et=D.u1-D.u0,bt=D.v1-D.v0;X.box(x,st,ct-.25,Tt,et,.5,bt),X.box(m,st,ct+.006,Tt,et,.01,bt),X.box(V,st,ct+.012,D.v1-.15,Ke.width-.2,.012,.28),X.box(x,(ot+D.u1)/2,ct+.52,D.v0+.04,D.u1-ot,1.04,.08),X.box(J,(ot+D.u1)/2,ct+1.75,D.v0+.04,D.u1-ot-.1,1.4,.04),X.box(x,D.u1-.04,ct+.52,Tt,.08,1.04,bt),X.box(J,D.u1-.04,ct+1.75,Tt,.04,1.4,bt-.1),X.box(w,st,ct+Ue.roof-.08,Tt,et+.45,.18,bt+.7),X.box(nt,st,ct+Ue.roof-.18,Tt,.35,.03,bt-.4);for(let at of[D.v0+.35,D.v1-.35])X.box(Z,ot+.05,ct+.48,at,.95,.96,.22),X.box(j,ot+.05,ct+.97,at,.92,.04,.2),X.box(Q,ot+.36,ct+.99,at,.14,.02,.12),X.box(z,ot+.05,ct+.48,at+(at<Tt?.14:-.14),.04,.62,.08);let vt=(ft.u0+ft.u1)/2,_t=Math.max(1,Math.ceil(ft.rise/Ke.riser));for(let at=0;at<_t;at++){let Lt=Mt+ft.rise*(at+1)/_t,W=ft.bottom-ft.run*(at+.5)/_t;X.box(x,vt,Lt-.15,W,Ke.width,.3,ft.run/_t+.02)}let yt=(at,Lt,W)=>new H(at,Lt,W);for(let at of[ft.u0,ft.u1])X.face(b,[yt(at,Mt,ft.bottom),yt(at,ct-.3,ft.top),yt(at,ct+.9,ft.top),yt(at,Mt+.9,ft.bottom)]),X.face(b,[yt(at,Mt+.9,ft.bottom),yt(at,ct+.9,ft.top),yt(at,ct-.3,ft.top),yt(at,Mt,ft.bottom)]),X.face(J,[yt(at,Mt+.9,ft.bottom),yt(at,ct+.9,ft.top),yt(at,ct+2.2,ft.top),yt(at,Mt+2.2,ft.bottom)]),X.face(J,[yt(at,Mt+2.2,ft.bottom),yt(at,ct+2.2,ft.top),yt(at,ct+.9,ft.top),yt(at,Mt+.9,ft.bottom)]),X.bar(T,yt(at,Mt+.95,ft.bottom),yt(at,ct+.95,ft.top),.06,.06),X.bar(T,yt(at,Mt+.72,ft.bottom),yt(at,ct+.72,ft.top),.045,.045),X.bar(T,yt(at,Mt+2.25,ft.bottom),yt(at,ct+2.25,ft.top),.08,.08);X.face(b,[yt(ft.u0,Mt-.2,ft.bottom),yt(ft.u1,Mt-.2,ft.bottom),yt(ft.u1,ct-.3,ft.top),yt(ft.u0,ct-.3,ft.top)]),X.bar(w,yt(vt,Mt+2.6,ft.bottom+.4),yt(vt,ct+2.6,ft.top-.2),Ke.width+.48,.15),X.box(b,vt,(Mt+ct)/2-.3,ft.top+.15,Ke.width,ct-Mt,.35);let It=Math.min(ft.run*.55,8.5);if(It>3&&ct-Mt>4.5){let at=ft.top+It/2+.3,Lt=Math.min(2.8,(ct-Mt)*.45);X.box(q,vt,Mt+Lt/2,at,Ke.width-.08,Lt,It)}let Rt=ft.bottom+.32;X.box(T,ft.u0-.05,Mt+1.3,Rt,.12,2.6,.55),X.box(T,ft.u1+.05,Mt+1.3,Rt,.12,2.6,.55),X.box(w,vt,Mt+2.62,Rt,Ke.width+.55,.18,1.15),X.box(P,vt,Mt+2.44,Rt+.56,Ke.width+.5,.26,.06),X.box(nt,vt,Mt+2.51,Rt+.1,Ke.width-.2,.03,.4),X.box(V,vt,Mt+.02,ft.bottom+.25,Ke.width-.2,.015,.32),X.box(j,ft.u1+.18,Mt+1,ft.bottom-1.8,.28,2,1.8),X.box(Q,ft.u1+.33,Mt+1.18,ft.bottom-1.4,.02,.58,.8),X.box(nt,ft.u1+.33,Mt+1.45,ft.bottom-2.25,.02,.45,.65)}return C.build(E,{where:"out"}),{node:E,piers:Y,solids:B,platforms:k}}function u(g,{near:S=[0,0],reach:M=1600}={}){let v=JSON.stringify(g.map(E=>[E.name,E.path.length,E.path[0],E.heights.length,E.ground?.length??0]));if(v!==s){s=v,f(),o="";for(let E of g)i.push(p(E))}d(S,M)}function d(g,S=1600){let M=JSON.stringify([g.map(v=>Math.round(v/200)),S]);if(M!==o){o=M;for(let v of i){l(v);let{node:E,piers:C,solids:A,platforms:b}=h(v.line,v.spec,g,S);e.add(E),v.track=E,v.piers=C,v.solids=A,v.platforms=b}a++}}function p(g){let S=xf(g,g.drive),M=L0(S.period),v=[];for(let E=0;E<M;E++){let C={car:el(160,28),bound:el(144,22)},A=Qc(S.cars),b=A.map((x,m)=>{let w=U0({front:m===A.length-1,back:m===0,boards:C});return e.add(w.car),{...w,offset:x,index:m}});v.push({offset:E*S.period/M,cars:b,boards:C,shown:""})}return{spec:g,line:S,track:null,piers:[],trains:v,platforms:[],calls:G0(S)}}function y(g,S,M,v){if(!t||!v)return;let{line:E,spec:C}=g,A=c.get(S);if(A||(A={time:M,events:new Set},c.set(S,A)),A.checked&&M>=A.time&&M-A.time<.25)return;let b=Math.max(A.time,M-2)+S.offset;A.time=M,A.checked=!0;let x=E.eventsBetween(b,M+S.offset),m=S.state;m.phase==="run"&&m.arrives<=16&&x.push({kind:"approach",time:m.time,stop:m.from,next:m.next,arrival:m.time+m.arrives});for(let w of x){let T=w.kind==="approach"?w.arrival??w.time+E.stateAt(w.time).arrives:w.time,P=`${w.kind}|${Math.round(T*1e3)}`;if(A.events.has(P))continue;let L=_f(E,w);if(!L)continue;let U=v.ride?.entry===g&&v.ride.train===S,F=0,Y=Math.sign(w.next.at-w.stop.at)||1;if(U&&L.where!=="platform")F=1;else if(!v.ride&&L.where!=="car"&&L.at){L.at.index===0?Y=1:L.at.index===E.stops.length-1&&(Y=-1);let B=E.way.spot(L.at.at),k=Jn(C.heights,L.at.at)+Ut.floor;if(Y*((v.x-B.x)*B.dz-(v.z-B.z)*B.dx)<Ue.edge-.6||Math.abs(v.y-k)>2.2)continue;let K=Y*(Ue.edge+Ue.width/2),J=B.x+B.dz*K,gt=B.z-B.dx*K,lt=Math.hypot(v.x-J,v.z-gt,(v.y-k)*2);F=Math.max(0,1-lt/32)}if(F>.05&&(A.events.add(P),A.events.size>32&&A.events.delete(A.events.values().next().value),L.chime&&t.play(L.chime,F),L.text)){let B=w.kind==="approach"?L.text.replace("\u307E\u3082\u306A\u304F\u3001",`\u307E\u3082\u306A\u304F\u3001${Y>0?1:2}\u756A\u7DDA\u306B\u3001`):L.text;t.say(B,{volume:F})}}}function _(g=null,S=2200,M=null){let v=n();for(let E of i){let{line:C,spec:A}=E;for(let b of E.trains){let x=C.stateAt(v+b.offset);b.state=x;let m=x.way>=0?1:-1;for(let P of b.cars){let L=x.s+P.offset,U=C.way.spot(L),F=U.x+U.dz*m*Ti,Y=U.z-U.dx*m*Ti,B=M?.ride?.train===b||!g||Math.hypot(F-g[0],Y-g[1])<S;if(P.car.visible=B,!B)continue;let k=Jn(A.heights,L),V=Math.atan2(Jn(A.heights,L+Ut.length/2)-Jn(A.heights,L-Ut.length/2),Ut.length);P.car.position.set(F,k,Y),P.car.rotation.set(-V,Math.atan2(U.dx,U.dz),0,"YXZ"),P.place={x:F,z:Y,dx:U.dx,dz:U.dz,y:k,pitch:V};let K=x.phase==="dwell"?m:0;for(let J of P.leaves)J.leaf.position.z=J.shut+(J.side===K?J.slide*x.doors:0)}let w=yf(C,x),T=w.join("|");T!==b.shown&&(b.shown=T,b.boards.car.show(w,["#ffb23e","#ffffff"]),b.boards.bound.show([C.boundFor(x).name],["#ffb23e"])),y(E,b,v,M)}for(let b of E.platforms){let m=E.trains.find(({state:T})=>T.phase==="dwell"&&T.stop.index===b.stop.index&&T.way===b.sign)?.state.doors??0;for(let T of b.leaves)T.leaf.position.z=T.shut+T.slide*m;if(v<b.nextBoard&&b.nextBoard-v<=.5)continue;let w=W0(C,E.calls,E.trains.map(({offset:T})=>T),b.stop,b.sign,v);b.board.show(w.text),b.nextBoard=v+.5}}}return{group:e,setLines:u,setNear:d,update:_,...r,get lines(){return i},get piers(){return i.flatMap(g=>g.piers)},get solids(){return{surfaces:i.flatMap(g=>g.solids?.surfaces??[]),walls:i.flatMap(g=>g.solids?.walls??[]),boxes:i.flatMap(g=>g.solids?.boxes??[])}},get revision(){return a},dispose(){s="",o="",f()}}}function Yv(n){let t=String(n??"").trim();if(/^\d{1,9}$/.test(t))return Number(t);let e=t||"1",i=2166136261;for(let s=0;s<e.length;s++)i=Math.imul(i^e.charCodeAt(s),16777619);return i>>>0}var Cr=new URLSearchParams(location.hash.slice(1)),Af=Yv(Cr.get("seed")??"3"),jn=Math.min(1600,Math.max(200,Number(Cr.get("size"))||1e3)),So=document.getElementById("info"),il=document.getElementById("view"),Ps=new _c({canvas:il,antialias:!0});Ps.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Ps.shadowMap.enabled=!0;Ps.toneMapping=Pa;Ps.toneMappingExposure=.9;var Ls=new Zo;Ls.background=new Kt("#c9dbe6");Ls.fog=new Ko("#c9dbe6",600,2600);var Is=new nn(50,1,.5,6e3);Is.position.set(-380,260,420);var Cs=new bc(Is,il);Cs.target.set(0,30,0);Cs.maxPolarAngle=Math.PI*.49;Ls.add(new rr("#dfe8f0","#6b6a5a",1.2));var Eo=new cr("#fff4e2",2.6);Eo.position.set(-300,500,260);Eo.castShadow=!0;Eo.shadow.mapSize.set(4096,4096);Object.assign(Eo.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:10,far:1600});Ls.add(Eo,Eo.target);var sl=P0();Ls.add(sl.group);var ol=X0();Ls.add(ol.group);window.__view={camera:Is,controls:Cs,transit:ol,region:sl};function Y0(){let n=il.clientWidth,t=il.clientHeight;Ps.setSize(n,t,!1),Is.aspect=n/Math.max(1,t),Is.updateProjectionMatrix()}window.addEventListener("resize",Y0);Y0();Ps.setAnimationLoop(()=>{Cs.update(),ol.update([Cs.target.x,Cs.target.z],jn),Ps.render(Ls,Is)});var Tf=new Worker(new URL("./worker.bundle.js?v=online-20261119-2",import.meta.url)),nl=null,ns=null;Tf.onmessage=n=>{let t=n.data;if(t.type==="progress")So.textContent=`${t.label}\uFF08${Math.round(t.fraction*100)}%\u30FB${(t.elapsed/1e3).toFixed(1)}\u79D2\uFF09`;else if(t.type==="ready"){nl=t.overlay;let e=nl.lines[0]?.stations[Math.min(5,nl.lines[0].stations.length-1)];ns=[Number(Cr.get("x"))||e?.x||1e4,Number(Cr.get("z"))||e?.z||1e4],So.textContent="3D\u306E\u5F62\u3092\u4F5C\u3063\u3066\u3044\u307E\u3059\u2026",Tf.postMessage({type:"window",id:1,seed:Af,x0:ns[0]-jn/2,z0:ns[1]-jn/2,x1:ns[0]+jn/2,z1:ns[1]+jn/2,step:jn>1100?4:2,buildings:Cr.get("bare")!=="1"})}else t.type==="window"?qv(t.window).catch(e=>{So.textContent=`3D\u306E\u5F62\u3092\u4F5C\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002${e.message}`}):t.type==="error"&&(So.textContent=`\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A${t.message}`)};Tf.postMessage({type:"generate",seed:Af});async function qv(n){let t=1/0;for(let c of n.heights)t=Math.min(t,c);let e=Math.floor(t),i=ns,s=performance.now();if(!await sl.show(n,{origin:i,datum:e}))return;let o=sl.heightAt(0,0)??0;Cs.target.set(0,o,0),Is.position.set(-jn*.38,o+jn*.28,jn*.42),So.textContent="\u30E2\u30CE\u30EC\u30FC\u30EB\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u2026",await new Promise(c=>requestAnimationFrame(()=>setTimeout(c,0)));let r=[];for(let c of nl.lines){if(!n.lines.includes(c.id))continue;let l=I0({name:c.name,color:c.color,points:c.points,ground:c.ground,stations:c.stations},{origin:i,datum:e});l&&r.push(l)}ol.setLines(r,{near:[0,0],reach:jn*.75});let a=r.length;So.innerHTML=`\u30B7\u30FC\u30C9 ${Af}\u30FB${jn}m\u56DB\u65B9\uFF08\u6771\u3078 ${(ns[0]/1e3).toFixed(2)}km\u30FB\u5357\u3078 ${(ns[1]/1e3).toFixed(2)}km\uFF09<br>\u5EFA\u7269 ${n.buildings.length}\u68DF\u30FB\u751F\u6D3B\u9053\u8DEF ${n.streets.length}\u672C\u30FB\u5730\u533A ${n.districts.length}\u30FB\u30E2\u30CE\u30EC\u30FC\u30EB ${a}\u8DEF\u7DDA<br>3D\u306E\u7D44\u307F\u7ACB\u3066 ${Math.round(performance.now()-s)}\u30DF\u30EA\u79D2\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
