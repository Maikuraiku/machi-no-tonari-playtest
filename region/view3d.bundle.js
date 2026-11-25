var Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vd=0,Qh=1,bd=2;var tf=1,Md=2,Yi=3,hs=0,Qn=1,zn=2,ds=0,ro=1,ef=2,nf=3,sf=4,wd=5,Ds=100,Sd=101,Ed=102,Td=103,Ad=104,Rd=200,Cd=201,Pd=202,Id=203,cc=204,lc=205,Ld=206,Dd=207,zd=208,Ud=209,Nd=210,Od=211,Fd=212,Bd=213,kd=214,Lc=0,Dc=1,zc=2,ao=3,Uc=4,Nc=5,Oc=6,Fc=7,of=0,Hd=1,Vd=2,ps=0,Gd=1,Wd=2,Xd=3,Bc=4,Yd=5,$d=6,qd=7;var rf=300,po=301,mo=302,kc=303,Hc=304,ua=306,hi=1e3,Ls=1001,hc=1002,In=1003,Kd=1004;var da=1005;var fi=1006,Vc=1007;var $i=1008;var Ni=1009,af=1010,cf=1011,or=1012,Gc=1013,Bs=1014,gi=1015,rr=1016,Wc=1017,Xc=1018,ar=1020,lf=35902,hf=35899,ff=1021,uf=1022,Wn=1023,Ko=1026,cr=1027,Yc=1028,$c=1029,df=1030,qc=1031;var Kc=1033,pa=33776,ma=33777,ga=33778,xa=33779,Zc=35840,Jc=35841,jc=35842,Qc=35843,tl=36196,el=37492,nl=37496,il=37808,sl=37809,ol=37810,rl=37811,al=37812,cl=37813,ll=37814,hl=37815,fl=37816,ul=37817,dl=37818,pl=37819,ml=37820,gl=37821,xl=36492,_l=36494,yl=36495,vl=36283,bl=36284,Ml=36285,wl=36286;var Hr=2300,fc=2301,ac=2302,Vh=2400,Gh=2401,Wh=2402;var Zd=3200,Jd=3201;var pf=0,jd=1,ms="",on="srgb",co="srgb-linear",Vr="linear",Ge="srgb";var oo=7680;var Xh=519,Qd=512,t0=513,e0=514,mf=515,n0=516,i0=517,s0=518,o0=519,Yh=35044;var gf="300 es",zi=2e3,Gr=2001;var Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,Br=Math.PI/180,Zo=180/Math.PI;function lr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function xf(n,t){return(n%t+t)%t}function Mm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function wm(n,t,e){return n!==t?(e-n)/(t-n):0}function kr(n,t,e){return(1-e)*n+e*t}function Sm(n,t,e,i){return kr(n,t,1-Math.exp(-e*i))}function Em(n,t=1){return t-Math.abs(xf(n,t*2)-t)}function Tm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Am(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Cm(n,t){return n+Math.random()*(t-n)}function Pm(n){return n*(.5-Math.random())}function Im(n){n!==void 0&&(Xu=n);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lm(n){return n*Br}function Dm(n){return n*Zo}function zm(n){return(n&n-1)===0&&n!==0}function Um(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n,t,e,i,s){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),f=r((t+i)/2),h=o((t-i)/2),d=r((t-i)/2),u=o((i-t)/2),p=r((i-t)/2);switch(s){case"XYX":n.set(a*f,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*f,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*f,a*l);break;case"XZX":n.set(a*f,c*p,c*u,a*l);break;case"YXY":n.set(c*u,a*f,c*p,a*l);break;case"ZYZ":n.set(c*p,c*u,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $o(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var _f={DEG2RAD:Br,RAD2DEG:Zo,generateUUID:lr,clamp:be,euclideanModulo:xf,mapLinear:Mm,inverseLerp:wm,lerp:kr,damp:Sm,pingpong:Em,smoothstep:Tm,smootherstep:Am,randInt:Rm,randFloat:Cm,randFloatSpread:Pm,seededRandom:Im,degToRad:Lm,radToDeg:Dm,isPowerOfTwo:zm,ceilPowerOfTwo:Um,floorPowerOfTwo:Nm,setQuaternionFromProperEuler:Om,normalize:Zn,denormalize:$o},le=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ti=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],f=i[s+2],h=i[s+3],d=o[r+0],u=o[r+1],p=o[r+2],y=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=p,t[e+3]=y;return}if(h!==y||c!==d||l!==u||f!==p){let _=1-a,x=c*d+l*u+f*p+h*y,S=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){let A=Math.sqrt(w),P=Math.atan2(A,x*S);_=Math.sin(_*P)/A,a=Math.sin(a*P)/A}let v=a*S;if(c=c*_+d*v,l=l*_+u*v,f=f*_+p*v,h=h*_+y*v,_===1-a){let A=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=A,l*=A,f*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],h=o[r],d=o[r+1],u=o[r+2],p=o[r+3];return t[e]=a*p+f*h+c*u-l*d,t[e+1]=c*p+f*d+l*h-a*u,t[e+2]=l*p+f*u+a*d-c*h,t[e+3]=f*p-a*h-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),h=a(o/2),d=c(i/2),u=c(s/2),p=c(o/2);switch(r){case"XYZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"YZX":this._x=d*f*h+l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h-d*u*p;break;case"XZY":this._x=d*f*h-l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],f=e[6],h=e[10],d=i+a+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(o-l)*u,this._z=(r-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(o-l)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(c+f)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(r-s)/u,this._x=(o+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=i*f+r*a+s*l-o*c,this._y=s*f+r*c+o*a-i*l,this._z=o*f+r*l+i*c-s*a,this._w=r*f-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*r+e*this._w,this._x=u*i+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}let l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-e)*f)/l,d=Math.sin(e*f)/l;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),f=2*(a*e-o*s),h=2*(o*i-r*e);return this.x=e+c*l+r*h-a*f,this.y=i+c*f+a*l-o*h,this.z=s+c*h+o*f-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yh=new X,Yu=new Ti,ge=class n{constructor(t,e,i,s,o,r,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=o,f[5]=c,f[6]=i,f[7]=r,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],y=s[0],_=s[3],x=s[6],S=s[1],w=s[4],v=s[7],A=s[2],P=s[5],C=s[8];return o[0]=r*y+a*S+c*A,o[3]=r*_+a*w+c*P,o[6]=r*x+a*v+c*C,o[1]=l*y+f*S+h*A,o[4]=l*_+f*w+h*P,o[7]=l*x+f*v+h*C,o[2]=d*y+u*S+p*A,o[5]=d*_+u*w+p*P,o[8]=d*x+u*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*r*f-e*a*l-i*o*f+i*a*c+s*o*l-s*r*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=f*r-a*l,d=a*c-f*o,u=l*o-r*c,p=e*h+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(s*l-f*i)*y,t[2]=(a*i-s*r)*y,t[3]=d*y,t[4]=(f*e-s*c)*y,t[5]=(s*o-a*e)*y,t[6]=u*y,t[7]=(i*c-l*e)*y,t[8]=(r*e-i*o)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vh.makeScale(t,e)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,e){return this.premultiply(vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vh=new ge;function yf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r0(){let n=Wr("canvas");return n.style.display="block",n}var $u={};function Jo(n){n in $u||($u[n]=!0,console.warn(n))}function a0(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}var qu=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){let n={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Ge&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ge&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[co]:{primaries:t,whitePoint:i,transfer:Vr,toXYZ:qu,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:Ge,toXYZ:qu,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var Ue=Fm();function ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zo,uc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zo===void 0&&(zo=Wr("canvas")),zo.width=t.width,zo.height=t.height;let s=zo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ls(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ls(e[i]/255)*255):e[i]=ls(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bm=0,jo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(bh(s[r].image)):o.push(bh(s[r]))}else o=bh(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var km=0,Mh=new X,Jn=class n extends Wi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ls,s=Ls,o=fi,r=$i,a=Wn,c=Ni,l=n.DEFAULT_ANISOTROPY,f=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=lr(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hi:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hi:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=rf;Jn.DEFAULT_ANISOTROPY=1;var Qe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,c=t.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],p=c[9],y=c[2],_=c[6],x=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+_)<.1&&Math.abs(l+u+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(u+1)/2,A=(x+1)/2,P=(f+d)/4,C=(h+y)/4,M=(p+_)/4;return w>v&&w>A?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=P/i,o=C/i):v>A?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=P/s,o=M/s):A<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),i=C/o,s=M/o),this.set(i,s,o,e),this}let S=Math.sqrt((_-p)*(_-p)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(S)<.001&&(S=1),this.x=(_-p)/S,this.y=(h-y)/S,this.z=(d-f)/S,this.w=Math.acos((l+u+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e);let s={width:t,height:e,depth:i.depth},o=new Jn(s);this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends dc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Xr=class extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pc=class extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ii):Ii.fromBufferAttribute(o,r),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Ba.subVectors(this.max,Ir),Uo.subVectors(t.a,Ir),No.subVectors(t.b,Ir),Oo.subVectors(t.c,Ir),Es.subVectors(No,Uo),Ts.subVectors(Oo,No),eo.subVectors(Uo,Oo);let e=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-eo.z,eo.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,eo.z,0,-eo.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-eo.y,eo.x,0];return!wh(e,Uo,No,Oo,Ba)||(e=[1,0,0,0,1,0,0,0,1],!wh(e,Uo,No,Oo,Ba))?!1:(ka.crossVectors(Es,Ts),e=[ka.x,ka.y,ka.z],wh(e,Uo,No,Oo,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new X,new X,new X,new X,new X,new X,new X,new X],Ii=new X,Fa=new ui,Uo=new X,No=new X,Oo=new X,Es=new X,Ts=new X,eo=new X,Ir=new X,Ba=new X,ka=new X,no=new X;function wh(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){no.fromArray(n,o);let a=s.x*Math.abs(no.x)+s.y*Math.abs(no.y)+s.z*Math.abs(no.z),c=t.dot(no),l=e.dot(no),f=i.dot(no);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var Hm=new ui,Lr=new X,Sh=new X,di=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hm.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Sh)),this.expandByPoint(Lr.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},os=new X,Eh=new X,Ha=new X,As=new X,Th=new X,Va=new X,Ah=new X,lo=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(os.copy(this.origin).addScaledVector(this.direction,e),os.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eh.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),As.copy(this.origin).sub(Eh);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ha),a=As.dot(this.direction),c=-As.dot(Ha),l=As.lengthSq(),f=Math.abs(1-r*r),h,d,u,p;if(f>0)if(h=r*c-a,d=r*a-c,p=o*f,h>=0)if(d>=-p)if(d<=p){let y=1/f;h*=y,d*=y,u=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),u=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-o,-c),o),u=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),u=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Eh).addScaledVector(Ha,d),u}intersectSphere(t,e){os.subVectors(t.center,this.origin);let i=os.dot(this.direction),s=os.dot(os)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),f>=0?(o=(t.min.y-d.y)*f,r=(t.max.y-d.y)*f):(o=(t.max.y-d.y)*f,r=(t.min.y-d.y)*f),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,os)!==null}intersectTriangle(t,e,i,s,o){Th.subVectors(e,t),Va.subVectors(i,t),Ah.crossVectors(Th,Va);let r=this.direction.dot(Ah),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;As.subVectors(this.origin,t);let c=a*this.direction.dot(Va.crossVectors(As,Va));if(c<0)return null;let l=a*this.direction.dot(Th.cross(As));if(l<0||c+l>r)return null;let f=-a*As.dot(Ah);return f<0?null:this.at(f/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class n{constructor(t,e,i,s,o,r,a,c,l,f,h,d,u,p,y,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,f,h,d,u,p,y,_)}set(t,e,i,s,o,r,a,c,l,f,h,d,u,p,y,_){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=o,x[5]=r,x[9]=a,x[13]=c,x[2]=l,x[6]=f,x[10]=h,x[14]=d,x[3]=u,x[7]=p,x[11]=y,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Fo.setFromMatrixColumn(t,0).length(),o=1/Fo.setFromMatrixColumn(t,1).length(),r=1/Fo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let d=r*f,u=r*h,p=a*f,y=a*h;e[0]=c*f,e[4]=-c*h,e[8]=l,e[1]=u+p*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=p+u*l,e[10]=r*c}else if(t.order==="YXZ"){let d=c*f,u=c*h,p=l*f,y=l*h;e[0]=d+y*a,e[4]=p*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*f,e[9]=-a,e[2]=u*a-p,e[6]=y+d*a,e[10]=r*c}else if(t.order==="ZXY"){let d=c*f,u=c*h,p=l*f,y=l*h;e[0]=d-y*a,e[4]=-r*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=r*f,e[9]=y-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let d=r*f,u=r*h,p=a*f,y=a*h;e[0]=c*f,e[4]=p*l-u,e[8]=d*l+y,e[1]=c*h,e[5]=y*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let d=r*c,u=r*l,p=a*c,y=a*l;e[0]=c*f,e[4]=y-d*h,e[8]=p*h+u,e[1]=h,e[5]=r*f,e[9]=-a*f,e[2]=-l*f,e[6]=u*h+p,e[10]=d-y*h}else if(t.order==="XZY"){let d=r*c,u=r*l,p=a*c,y=a*l;e[0]=c*f,e[4]=-h,e[8]=l*f,e[1]=d*h+y,e[5]=r*f,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*f,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vm,t,Gm)}lookAt(t,e,i){let s=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Rs.crossVectors(i,ci),Rs.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Rs.crossVectors(i,ci)),Rs.normalize(),Ga.crossVectors(ci,Rs),s[0]=Rs.x,s[4]=Ga.x,s[8]=ci.x,s[1]=Rs.y,s[5]=Ga.y,s[9]=ci.y,s[2]=Rs.z,s[6]=Ga.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],y=i[6],_=i[10],x=i[14],S=i[3],w=i[7],v=i[11],A=i[15],P=s[0],C=s[4],M=s[8],m=s[12],g=s[1],b=s[5],T=s[9],I=s[13],R=s[2],D=s[6],N=s[10],H=s[14],U=s[3],F=s[7],Y=s[11],$=s[15];return o[0]=r*P+a*g+c*R+l*U,o[4]=r*C+a*b+c*D+l*F,o[8]=r*M+a*T+c*N+l*Y,o[12]=r*m+a*I+c*H+l*$,o[1]=f*P+h*g+d*R+u*U,o[5]=f*C+h*b+d*D+u*F,o[9]=f*M+h*T+d*N+u*Y,o[13]=f*m+h*I+d*H+u*$,o[2]=p*P+y*g+_*R+x*U,o[6]=p*C+y*b+_*D+x*F,o[10]=p*M+y*T+_*N+x*Y,o[14]=p*m+y*I+_*H+x*$,o[3]=S*P+w*g+v*R+A*U,o[7]=S*C+w*b+v*D+A*F,o[11]=S*M+w*T+v*N+A*Y,o[15]=S*m+w*I+v*H+A*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],f=t[2],h=t[6],d=t[10],u=t[14],p=t[3],y=t[7],_=t[11],x=t[15];return p*(+o*c*h-s*l*h-o*a*d+i*l*d+s*a*u-i*c*u)+y*(+e*c*u-e*l*d+o*r*d-s*r*u+s*l*f-o*c*f)+_*(+e*l*h-e*a*u-o*r*h+i*r*u+o*a*f-i*l*f)+x*(-s*a*f-e*c*h+e*a*d+s*r*h-i*r*d+i*c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=t[9],d=t[10],u=t[11],p=t[12],y=t[13],_=t[14],x=t[15],S=h*_*l-y*d*l+y*c*u-a*_*u-h*c*x+a*d*x,w=p*d*l-f*_*l-p*c*u+r*_*u+f*c*x-r*d*x,v=f*y*l-p*h*l+p*a*u-r*y*u-f*a*x+r*h*x,A=p*h*c-f*y*c-p*a*d+r*y*d+f*a*_-r*h*_,P=e*S+i*w+s*v+o*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return t[0]=S*C,t[1]=(y*d*o-h*_*o-y*s*u+i*_*u+h*s*x-i*d*x)*C,t[2]=(a*_*o-y*c*o+y*s*l-i*_*l-a*s*x+i*c*x)*C,t[3]=(h*c*o-a*d*o-h*s*l+i*d*l+a*s*u-i*c*u)*C,t[4]=w*C,t[5]=(f*_*o-p*d*o+p*s*u-e*_*u-f*s*x+e*d*x)*C,t[6]=(p*c*o-r*_*o-p*s*l+e*_*l+r*s*x-e*c*x)*C,t[7]=(r*d*o-f*c*o+f*s*l-e*d*l-r*s*u+e*c*u)*C,t[8]=v*C,t[9]=(p*h*o-f*y*o-p*i*u+e*y*u+f*i*x-e*h*x)*C,t[10]=(r*y*o-p*a*o+p*i*l-e*y*l-r*i*x+e*a*x)*C,t[11]=(f*a*o-r*h*o-f*i*l+e*h*l+r*i*u-e*a*u)*C,t[12]=A*C,t[13]=(f*y*s-p*h*s+p*i*d-e*y*d-f*i*_+e*h*_)*C,t[14]=(p*a*s-r*y*s-p*i*c+e*y*c+r*i*_-e*a*_)*C,t[15]=(r*h*s-f*a*s+f*i*c-e*h*c-r*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,f=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*r,0,l*c-s*a,f*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,f=r+r,h=a+a,d=o*l,u=o*f,p=o*h,y=r*f,_=r*h,x=a*h,S=c*l,w=c*f,v=c*h,A=i.x,P=i.y,C=i.z;return s[0]=(1-(y+x))*A,s[1]=(u+v)*A,s[2]=(p-w)*A,s[3]=0,s[4]=(u-v)*P,s[5]=(1-(d+x))*P,s[6]=(_+S)*P,s[7]=0,s[8]=(p+w)*C,s[9]=(_-S)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=Fo.set(s[0],s[1],s[2]).length(),r=Fo.set(s[4],s[5],s[6]).length(),a=Fo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Li.copy(this);let l=1/o,f=1/r,h=1/a;return Li.elements[0]*=l,Li.elements[1]*=l,Li.elements[2]*=l,Li.elements[4]*=f,Li.elements[5]*=f,Li.elements[6]*=f,Li.elements[8]*=h,Li.elements[9]*=h,Li.elements[10]*=h,e.setFromRotationMatrix(Li),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=zi,c=!1){let l=this.elements,f=2*o/(e-t),h=2*o/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),p,y;if(c)p=o/(r-o),y=r*o/(r-o);else if(a===zi)p=-(r+o)/(r-o),y=-2*r*o/(r-o);else if(a===Gr)p=-r/(r-o),y=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=zi,c=!1){let l=this.elements,f=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),u=-(i+s)/(i-s),p,y;if(c)p=1/(r-o),y=r/(r-o);else if(a===zi)p=-2/(r-o),y=-(r+o)/(r-o);else if(a===Gr)p=-1/(r-o),y=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Fo=new X,Li=new Ze,Vm=new X(0,0,0),Gm=new X(1,1,1),Rs=new X,Ga=new X,ci=new X,Zu=new Ze,Ju=new Ti,Ui=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wm=0,ju=new X,Bo=new Ti,rs=new Ze,Wa=new X,Dr=new X,Xm=new X,Ym=new Ti,Qu=new X(1,0,0),td=new X(0,1,0),ed=new X(0,0,1),nd={type:"added"},$m={type:"removed"},ko={type:"childadded",child:null},Rh={type:"childremoved",child:null},Ln=class n extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new Ui,i=new Ti,s=new X(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ge}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bo.setFromAxisAngle(t,e),this.quaternion.multiply(Bo),this}rotateOnWorldAxis(t,e){return Bo.setFromAxisAngle(t,e),this.quaternion.premultiply(Bo),this}rotateX(t){return this.rotateOnAxis(Qu,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qu,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wa.copy(t):Wa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Dr,Wa,this.up):rs.lookAt(Wa,Dr,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Bo.setFromRotationMatrix(rs),this.quaternion.premultiply(Bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),ko.child=t,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($m),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,Xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Ym,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),f=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ln.DEFAULT_UP=new X(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=new X,as=new X,Ch=new X,cs=new X,Ho=new X,Vo=new X,id=new X,Ph=new X,Ih=new X,Lh=new X,Dh=new Qe,zh=new Qe,Uh=new Qe,Is=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Di.subVectors(t,e),s.cross(Di);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Di.subVectors(s,e),as.subVectors(i,e),Ch.subVectors(t,e);let r=Di.dot(Di),a=Di.dot(as),c=Di.dot(Ch),l=as.dot(as),f=as.dot(Ch),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;let d=1/h,u=(l*c-a*f)*d,p=(r*f-a*c)*d;return o.set(1-u-p,p,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,cs.x),c.addScaledVector(r,cs.y),c.addScaledVector(a,cs.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Dh.setScalar(0),zh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(t,e),zh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Dh,o.x),r.addScaledVector(zh,o.y),r.addScaledVector(Uh,o.z),r}static isFrontFacing(t,e,i,s){return Di.subVectors(i,e),as.subVectors(t,e),Di.cross(as).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Di.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;Ho.subVectors(s,i),Vo.subVectors(o,i),Ph.subVectors(t,i);let c=Ho.dot(Ph),l=Vo.dot(Ph);if(c<=0&&l<=0)return e.copy(i);Ih.subVectors(t,s);let f=Ho.dot(Ih),h=Vo.dot(Ih);if(f>=0&&h<=f)return e.copy(s);let d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return r=c/(c-f),e.copy(i).addScaledVector(Ho,r);Lh.subVectors(t,o);let u=Ho.dot(Lh),p=Vo.dot(Lh);if(p>=0&&u<=p)return e.copy(o);let y=u*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Vo,a);let _=f*p-u*h;if(_<=0&&h-f>=0&&u-p>=0)return id.subVectors(o,s),a=(h-f)/(h-f+(u-p)),e.copy(s).addScaledVector(id,a);let x=1/(_+y+d);return r=y*x,a=d*x,e.copy(i).addScaledVector(Ho,r).addScaledVector(Vo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Nh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var he=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ue.workingColorSpace){if(t=xf(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Nh(r,o,t+1/3),this.g=Nh(r,o,t),this.b=Nh(r,o,t-1/3)}return Ue.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let i=c0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Ue.workingToColorSpace(Hn.copy(this),t),Math.round(be(Hn.r*255,0,255))*65536+Math.round(be(Hn.g*255,0,255))*256+Math.round(be(Hn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.workingToColorSpace(Hn.copy(this),e);let i=Hn.r,s=Hn.g,o=Hn.b,r=Math.max(i,s,o),a=Math.min(i,s,o),c,l,f=(a+r)/2;if(a===r)c=0,l=0;else{let h=r-a;switch(l=f<=.5?h/(r+a):h/(2-r-a),r){case i:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-i)/h+2;break;case o:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=Ue.workingColorSpace){return Ue.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=on){Ue.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,i=Hn.g,s=Hn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+e,Cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Cs),t.getHSL(Xa);let i=kr(Cs.h,Xa.h,e),s=kr(Cs.s,Xa.s,e),o=kr(Cs.l,Xa.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new he;he.NAMES=c0;var qm=0,fs=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=ro,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gn=class extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xn=new X,Ya=new le,Km=0,Ce=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$o(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$o(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$o(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$o(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$o(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),i=Zn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),i=Zn(i,this.array),s=Zn(s,this.array),o=Zn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yh&&(t.usage=this.usage),t}};var $r=class extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var qr=class extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pn=class extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zm=0,Si=new Ze,Oh=new Ln,Go=new X,li=new ui,zr=new ui,An=new X,bn=class n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?qr:$r)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ge().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Go).negate(),this.translate(Go.x,Go.y,Go.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new pn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];li.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(li.min,zr.min),li.expandByPoint(An),An.addVectors(li.max,zr.max),li.expandByPoint(An)):(li.expandByPoint(zr.min),li.expandByPoint(zr.max))}li.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)An.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(An));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)An.fromBufferAttribute(a,l),c&&(Go.fromBufferAttribute(t,l),An.add(Go)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new X,c[M]=new X;let l=new X,f=new X,h=new X,d=new le,u=new le,p=new le,y=new X,_=new X;function x(M,m,g){l.fromBufferAttribute(i,M),f.fromBufferAttribute(i,m),h.fromBufferAttribute(i,g),d.fromBufferAttribute(o,M),u.fromBufferAttribute(o,m),p.fromBufferAttribute(o,g),f.sub(l),h.sub(l),u.sub(d),p.sub(d);let b=1/(u.x*p.y-p.x*u.y);isFinite(b)&&(y.copy(f).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(b),_.copy(h).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(b),a[M].add(y),a[m].add(y),a[g].add(y),c[M].add(_),c[m].add(_),c[g].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let M=0,m=S.length;M<m;++M){let g=S[M],b=g.start,T=g.count;for(let I=b,R=b+T;I<R;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let w=new X,v=new X,A=new X,P=new X;function C(M){A.fromBufferAttribute(s,M),P.copy(A);let m=a[M];w.copy(m),w.sub(A.multiplyScalar(A.dot(m))).normalize(),v.crossVectors(P,m);let b=v.dot(c[M])<0?-1:1;r.setXYZW(M,w.x,w.y,w.z,b)}for(let M=0,m=S.length;M<m;++M){let g=S[M],b=g.start,T=g.count;for(let I=b,R=b+T;I<R;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new X,o=new X,r=new X,a=new X,c=new X,l=new X,f=new X,h=new X;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),y=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),f.subVectors(r,o),h.subVectors(s,o),f.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),a.add(f),c.add(f),l.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),f.subVectors(r,o),h.subVectors(s,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(a,c){let l=a.array,f=a.itemSize,h=a.normalized,d=new l.constructor(c.length*f),u=0,p=0;for(let y=0,_=c.length;y<_;y++){a.isInterleavedBufferAttribute?u=c[y]*a.data.stride+a.offset:u=c[y]*f;for(let x=0;x<f;x++)d[p++]=l[u++]}return new Ce(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let f=0,h=l.length;f<h;f++){let d=l[f],u=t(d,i);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];f.push(u.toJSON(t.data))}f.length>0&&(s[c]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(e))}let o=t.morphAttributes;for(let l in o){let f=[],h=o[l];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,f=r.length;l<f;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sd=new Ze,io=new lo,$a=new di,od=new X,qa=new X,Ka=new X,Za=new X,Fh=new X,Ja=new X,rd=new X,ja=new X,Be=class extends Ln{constructor(t=new bn,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Ja.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let f=a[c],h=o[c];f!==0&&(Fh.fromBufferAttribute(h,t),r?Ja.addScaledVector(Fh,f):Ja.addScaledVector(Fh.sub(e),f))}e.add(Ja)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(o),io.copy(t.ray).recast(t.near),!($a.containsPoint(io.origin)===!1&&(io.intersectSphere($a,od)===null||io.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(sd.copy(o).invert(),io.copy(t.ray).applyMatrix4(sd),!(i.boundingBox!==null&&io.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,io)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){let _=d[p],x=r[_.materialIndex],S=Math.max(_.start,u.start),w=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let v=S,A=w;v<A;v+=3){let P=a.getX(v),C=a.getX(v+1),M=a.getX(v+2);s=Qa(this,x,t,i,l,f,h,P,C,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let _=p,x=y;_<x;_+=3){let S=a.getX(_),w=a.getX(_+1),v=a.getX(_+2);s=Qa(this,r,t,i,l,f,h,S,w,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){let _=d[p],x=r[_.materialIndex],S=Math.max(_.start,u.start),w=Math.min(c.count,Math.min(_.start+_.count,u.start+u.count));for(let v=S,A=w;v<A;v+=3){let P=v,C=v+1,M=v+2;s=Qa(this,x,t,i,l,f,h,P,C,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let p=Math.max(0,u.start),y=Math.min(c.count,u.start+u.count);for(let _=p,x=y;_<x;_+=3){let S=_,w=_+1,v=_+2;s=Qa(this,r,t,i,l,f,h,S,w,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Jm(n,t,e,i,s,o,r,a){let c;if(t.side===Qn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===hs,a),c===null)return null;ja.copy(a),ja.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ja);return l<e.near||l>e.far?null:{distance:l,point:ja.clone(),object:n}}function Qa(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,qa),n.getVertexPosition(c,Ka),n.getVertexPosition(l,Za);let f=Jm(n,t,e,i,qa,Ka,Za,rd);if(f){let h=new X;Is.getBarycoord(rd,qa,Ka,Za,h),s&&(f.uv=Is.getInterpolatedAttribute(s,a,c,l,h,new le)),o&&(f.uv1=Is.getInterpolatedAttribute(o,a,c,l,h,new le)),r&&(f.normal=Is.getInterpolatedAttribute(r,a,c,l,h,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new X,materialIndex:0};Is.getNormal(qa,Ka,Za,d.normal),f.face=d,f.barycoord=h}return f}var zs=class n extends bn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],f=[],h=[],d=0,u=0;p("z","y","x",-1,-1,i,e,t,r,o,0),p("z","y","x",1,-1,i,e,-t,r,o,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,o,4),p("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(h,2));function p(y,_,x,S,w,v,A,P,C,M,m){let g=v/C,b=A/M,T=v/2,I=A/2,R=P/2,D=C+1,N=M+1,H=0,U=0,F=new X;for(let Y=0;Y<N;Y++){let $=Y*b-I;for(let J=0;J<D;J++){let Rt=J*g-T;F[y]=Rt*S,F[_]=$*w,F[x]=R,l.push(F.x,F.y,F.z),F[y]=0,F[_]=0,F[x]=P>0?1:-1,f.push(F.x,F.y,F.z),h.push(J/C),h.push(1-Y/M),H+=1}}for(let Y=0;Y<M;Y++)for(let $=0;$<C;$++){let J=d+$+D*Y,Rt=d+$+D*(Y+1),vt=d+($+1)+D*(Y+1),mt=d+($+1)+D*Y;c.push(J,Rt,mt),c.push(Rt,vt,mt),U+=6}a.addGroup(u,U,m),u+=U,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function go(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xn(n){let t={};for(let e=0;e<n.length;e++){let i=go(n[e]);for(let s in i)t[s]=i[s]}return t}function jm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var l0={clone:go,merge:Xn},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Kr=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ps=new X,ad=new le,cd=new le,Vn=class extends Kr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,e){return this.getViewBounds(t,ad,cd),e.subVectors(cd,ad)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wo=-90,Xo=1,mc=class extends Ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vn(Wo,Xo,t,e);s.layers=this.layers,this.add(s);let o=new Vn(Wo,Xo,t,e);o.layers=this.layers,this.add(o);let r=new Vn(Wo,Xo,t,e);r.layers=this.layers,this.add(r);let a=new Vn(Wo,Xo,t,e);a.layers=this.layers,this.add(a);let c=new Vn(Wo,Xo,t,e);c.layers=this.layers,this.add(c);let l=new Vn(Wo,Xo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(h,d,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zr=class extends Jn{constructor(t=[],e=po,i,s,o,r,a,c,l,f){super(t,e,i,s,o,r,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gc=class extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),o=new pi({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:ds});o.uniforms.tEquirect.value=e;let r=new Be(s,o),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=fi),new mc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},_e=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},Qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let _=e.getJointPose(y,i),x=this._getHandJoint(l,y);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Jr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jr=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var us=class extends Jn{constructor(t=null,e=1,i=1,s,o,r,a,c,l=In,f=In,h,d){super(null,r,a,c,l,f,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends Ce{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yo=new Ze,ld=new Ze,tc=[],hd=new ui,ng=new Ze,Ur=new Be,Nr=new di,tr=class extends Be{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yo),hd.copy(t.boundingBox).applyMatrix4(Yo),this.boundingBox.union(hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yo),Nr.copy(t.boundingSphere).applyMatrix4(Yo),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(i),t.ray.intersectsSphere(Nr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Yo),ld.multiplyMatrices(i,Yo),Ur.matrixWorld=ld,Ur.raycast(t,tc);for(let r=0,a=tc.length;r<a;r++){let c=tc[r];c.instanceId=o,c.object=this,e.push(c)}tc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(s*this.count),s,this.count,Yc,gi));let o=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bh=new X,ig=new X,sg=new ge,Ei=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bh.subVectors(i,e).cross(ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Bh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||sg.getNormalMatrix(t),s=this.coplanarPoint(Bh).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},so=new di,og=new le(.5,.5),ec=new X,er=class{constructor(t=new Ei,e=new Ei,i=new Ei,s=new Ei,o=new Ei,r=new Ei){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi,i=!1){let s=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],f=o[4],h=o[5],d=o[6],u=o[7],p=o[8],y=o[9],_=o[10],x=o[11],S=o[12],w=o[13],v=o[14],A=o[15];if(s[0].setComponents(l-r,u-f,x-p,A-S).normalize(),s[1].setComponents(l+r,u+f,x+p,A+S).normalize(),s[2].setComponents(l+a,u+h,x+y,A+w).normalize(),s[3].setComponents(l-a,u-h,x-y,A-w).normalize(),i)s[4].setComponents(c,d,_,v).normalize(),s[5].setComponents(l-c,u-d,x-_,A-v).normalize();else if(s[4].setComponents(l-c,u-d,x-_,A-v).normalize(),e===zi)s[5].setComponents(l+c,u+d,x+_,A+v).normalize();else if(e===Gr)s[5].setComponents(c,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(t){so.center.set(0,0,0);let e=og.distanceTo(t.center);return so.radius=.7071067811865476+e,so.applyMatrix4(t.matrixWorld),this.intersectsSphere(so)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ec.x=s.normal.x>0?t.max.x:t.min.x,ec.y=s.normal.y>0?t.max.y:t.min.y,ec.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xc=new X,_c=new X,fd=new Ze,Or=new lo,nc=new di,kh=new X,ud=new X,yc=class extends Ln{constructor(t=new bn,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)xc.fromBufferAttribute(e,s-1),_c.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xc.distanceTo(_c);t.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=o,t.ray.intersectsSphere(nc)===!1)return;fd.copy(s).invert(),Or.copy(t.ray).applyMatrix4(fd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){let u=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let y=u,_=p-1;y<_;y+=l){let x=f.getX(y),S=f.getX(y+1),w=ic(this,t,Or,c,x,S,y);w&&e.push(w)}if(this.isLineLoop){let y=f.getX(p-1),_=f.getX(u),x=ic(this,t,Or,c,y,_,p-1);x&&e.push(x)}}else{let u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let y=u,_=p-1;y<_;y+=l){let x=ic(this,t,Or,c,y,y+1,y);x&&e.push(x)}if(this.isLineLoop){let y=ic(this,t,Or,c,p-1,u,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ic(n,t,e,i,s,o,r){let a=n.geometry.attributes.position;if(xc.fromBufferAttribute(a,s),_c.fromBufferAttribute(a,o),e.distanceSqToSegment(xc,_c,kh,ud)>i)return;kh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(kh);if(!(l<t.near||l>t.far))return{distance:l,point:ud.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var dd=new X,pd=new X,Qr=class extends yc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)dd.fromBufferAttribute(e,s),pd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dd.distanceTo(pd);t.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jn=class extends Jn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ta=class extends Jn{constructor(t,e,i=Bs,s,o,r,a=In,c=In,l,f=Ko,h=1){if(f!==Ko&&f!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,o,r,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ea=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};function rg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=h0(n,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(i&&(o=fg(n,t,o,e)),n.length>80*e){a=1/0,c=1/0;let f=-1/0,h=-1/0;for(let d=e;d<s;d+=e){let u=n[d],p=n[d+1];u<a&&(a=u),p<c&&(c=p),u>f&&(f=u),p>h&&(h=p)}l=Math.max(f-a,h-c),l=l!==0?32767/l:0}return na(o,r,e,a,c,l,0),r}function h0(n,t,e,i,s){let o;if(s===Mg(n,t,e,i)>0)for(let r=t;r<e;r+=i)o=md(r/i|0,n[r],n[r+1],o);else for(let r=e-i;r>=t;r-=i)o=md(r/i|0,n[r],n[r+1],o);return o&&ir(o,o.next)&&(sa(o),o=o.next),o}function fo(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ir(e,e.next)||an(e.prev,e,e.next)===0)){if(sa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function na(n,t,e,i,s,o,r){if(!n)return;!r&&o&&gg(n,i,s,o);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(o?cg(n,i,s,o):ag(n)){t.push(c.i,n.i,l.i),sa(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=lg(fo(n),t),na(n,t,e,i,s,o,2)):r===2&&hg(n,t,e,i,s,o):na(fo(n),t,e,i,s,o,1);break}}}function ag(n){let t=n.prev,e=n,i=n.next;if(an(t,e,i)>=0)return!1;let s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,f=Math.min(s,o,r),h=Math.min(a,c,l),d=Math.max(s,o,r),u=Math.max(a,c,l),p=i.next;for(;p!==t;){if(p.x>=f&&p.x<=d&&p.y>=h&&p.y<=u&&Fr(s,a,o,c,r,l,p.x,p.y)&&an(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cg(n,t,e,i){let s=n.prev,o=n,r=n.next;if(an(s,o,r)>=0)return!1;let a=s.x,c=o.x,l=r.x,f=s.y,h=o.y,d=r.y,u=Math.min(a,c,l),p=Math.min(f,h,d),y=Math.max(a,c,l),_=Math.max(f,h,d),x=$h(u,p,t,e,i),S=$h(y,_,t,e,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=x&&v&&v.z<=S;){if(w.x>=u&&w.x<=y&&w.y>=p&&w.y<=_&&w!==s&&w!==r&&Fr(a,f,c,h,l,d,w.x,w.y)&&an(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=u&&v.x<=y&&v.y>=p&&v.y<=_&&v!==s&&v!==r&&Fr(a,f,c,h,l,d,v.x,v.y)&&an(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=x;){if(w.x>=u&&w.x<=y&&w.y>=p&&w.y<=_&&w!==s&&w!==r&&Fr(a,f,c,h,l,d,w.x,w.y)&&an(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=u&&v.x<=y&&v.y>=p&&v.y<=_&&v!==s&&v!==r&&Fr(a,f,c,h,l,d,v.x,v.y)&&an(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ir(i,s)&&u0(i,e,e.next,s)&&ia(i,s)&&ia(s,i)&&(t.push(i.i,e.i,s.i),sa(e),sa(e.next),e=n=s),e=e.next}while(e!==n);return fo(e)}function hg(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&yg(r,a)){let c=d0(r,a);r=fo(r,r.next),c=fo(c,c.next),na(r,t,e,i,s,o,0),na(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function fg(n,t,e,i){let s=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=h0(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(_g(l))}s.sort(ug);for(let o=0;o<s.length;o++)e=dg(s[o],e);return e}function ug(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function dg(n,t){let e=pg(n,t);if(!e)return t;let i=d0(e,n);return fo(i,i.next),fo(e,e.next)}function pg(n,t){let e=t,i=n.x,s=n.y,o=-1/0,r;if(ir(n,e))return e;do{if(ir(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>o&&(o=h,r=e.x<e.next.x?e:e.next,h===i))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,f=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&f0(s<l?i:o,s,c,l,s<l?o:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);ia(e,n)&&(h<f||h===f&&(e.x>r.x||e.x===r.x&&mg(r,e)))&&(r=e,f=h)}e=e.next}while(e!==a);return r}function mg(n,t){return an(n.prev,n,t.prev)<0&&an(t.next,n,n.next)<0}function gg(n,t,e,i){let s=n;do s.z===0&&(s.z=$h(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xg(s)}function xg(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let r=i,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=r}o.nextZ=null,e*=2}while(t>1);return n}function $h(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function _g(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function f0(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function Fr(n,t,e,i,s,o,r,a){return!(n===r&&t===a)&&f0(n,t,e,i,s,o,r,a)}function yg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vg(n,t)&&(ia(n,t)&&ia(t,n)&&bg(n,t)&&(an(n.prev,n,t.prev)||an(n,t.prev,t))||ir(n,t)&&an(n.prev,n,n.next)>0&&an(t.prev,t,t.next)>0)}function an(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ir(n,t){return n.x===t.x&&n.y===t.y}function u0(n,t,e,i){let s=oc(an(n,t,e)),o=oc(an(n,t,i)),r=oc(an(e,i,n)),a=oc(an(e,i,t));return!!(s!==o&&r!==a||s===0&&sc(n,e,t)||o===0&&sc(n,i,t)||r===0&&sc(e,n,i)||a===0&&sc(e,t,i))}function sc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function oc(n){return n>0?1:n<0?-1:0}function vg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&u0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ia(n,t){return an(n.prev,n,n.next)<0?an(n,t,n.next)>=0&&an(n,n.prev,t)>=0:an(n,t,n.prev)<0||an(n,n.next,t)<0}function bg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function d0(n,t){let e=qh(n.i,n.x,n.y),i=qh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function md(n,t,e,i){let s=qh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mg(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}var Kh=class{static triangulate(t,e,i=2){return rg(t,e,i)}},oa=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];gd(t),xd(i,t);let r=t.length;e.forEach(gd);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,xd(i,e[c]);let a=Kh.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function gd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function xd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ni=class n extends bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,h=t/a,d=e/c,u=[],p=[],y=[],_=[];for(let x=0;x<f;x++){let S=x*d-r;for(let w=0;w<l;w++){let v=w*h-o;p.push(v,-S,0),y.push(0,0,1),_.push(w/a),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let S=0;S<a;S++){let w=S+l*x,v=S+l*(x+1),A=S+1+l*(x+1),P=S+1+l*x;u.push(w,v,P),u.push(v,A,P)}this.setIndex(u),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Dn=class extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var vc=class extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bc=class extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rc(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var uo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mc=class extends uo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Gh:o=t,a=2*e-i;break;case Wh:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Gh:r=t,c=2*i-e;break;case Wh:r=1,c=i+s[1]-s[0];break;default:r=t-1,c=e}let l=(i-e)*.5,f=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=o*f,this._offsetNext=r*f}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-e)/(s-e),y=p*p,_=y*p,x=-d*_+2*d*y-d*p,S=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*p+1,w=(-1-u)*_+(1.5+u)*y+.5*p,v=u*_-u*y;for(let A=0;A!==a;++A)o[A]=x*r[f+A]+S*r[l+A]+w*r[c+A]+v*r[h+A];return o}},wc=class extends uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,f=(i-e)/(s-e),h=1-f;for(let d=0;d!==a;++d)o[d]=r[l+d]*h+r[c+d]*f;return o}},Sc=class extends uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rc(e,this.TimeBufferType),this.values=rc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rc(t.times,Array),values:rc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case fc:e=this.InterpolantFactoryMethodLinear;break;case ac:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&wg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ac,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],f=t[a+1];if(l!==f&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let y=e[h+p];if(y!==e[d+p]||y!==e[u+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let h=a*i,d=r*i;for(let u=0;u!==i;++u)e[d+u]=e[h+u]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=fc;var Us=class extends mi{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Hr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Ec.prototype.ValueTypeName="color";var Tc=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Tc.prototype.ValueTypeName="number";var Ac=class extends uo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let f=l+a;l!==f;l+=4)Ti.slerpFlat(o,0,r,l-a,r,l,c);return o}},ra=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends mi{constructor(t,e,i){super(t,e,i)}};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Hr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){a++,o===!1&&s.onStart!==void 0&&s.onStart(f,r,a),o=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},p0=new Cc,Pc=class{constructor(t){this.manager=t!==void 0?t:p0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var aa=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ca=class extends aa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hh=new Ze,_d=new X,yd=new X,Zh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),yd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yd),e.updateMatrixWorld(),Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var la=class extends Kr{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jh=class extends Zh{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ic=class extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bf="\\[\\]\\.:\\/",Sg=new RegExp("["+bf+"]","g"),Mf="[^"+bf+"]",Eg="[^"+bf.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",Mf),Ag=/(WCOD+)?/.source.replace("WCOD",Eg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mf),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mf),Pg=new RegExp("^"+Tg+Ag+Rg+Cg+"$"),Ig=["material","materials","bones","map"],jh=class{constructor(t,e,i){let s=i||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Pg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);Ig.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=jh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vb=new Float32Array(1);var sr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fa=class extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function wf(n,t,e,i){let s=Lg(i);switch(e){case ff:return n*t;case Yc:return n*t/s.components*s.byteLength;case $c:return n*t/s.components*s.byteLength;case df:return n*t*2/s.components*s.byteLength;case qc:return n*t*2/s.components*s.byteLength;case uf:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case Kc:return n*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:case Qc:return Math.max(n,16)*Math.max(t,8)/4;case Zc:case jc:return Math.max(n,8)*Math.max(t,8)/2;case tl:case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xl:case _l:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vl:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ml:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(n){switch(n){case Ni:case af:return{byteLength:1,components:1};case or:case cf:case rr:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Bs:case Gc:case gi:return{byteLength:4,components:1};case lf:case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function F0(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function zg(n){let t=new WeakMap;function e(a,c){let l=a.array,f=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let f=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,f);else{h.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<h.length;u++){let p=h[d],y=h[u];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,h[d]=y)}h.length=d+1;for(let u=0,p=h.length;u<p;u++){let y=h[u];n.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
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
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rx=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,zx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
}`,V1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
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
}`,$1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,K1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,J1=`#define LAMBERT
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
}`,j1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,t_=`#define NORMAL
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
}`,e_=`#define NORMAL
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
}`,n_=`#define PHONG
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
}`,i_=`#define PHONG
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
}`,s_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,a_=`#define TOON
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
}`,c_=`uniform float size;
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
}`,l_=`uniform vec3 diffuse;
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
}`,h_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Og,alphamap_pars_fragment:Fg,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:Hg,aomap_pars_fragment:Vg,batching_pars_vertex:Gg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:Yg,bsdfs:$g,iridescence_fragment:qg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Qg,color_fragment:tx,color_pars_fragment:ex,color_pars_vertex:nx,color_vertex:ix,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:rx,displacementmap_pars_vertex:ax,displacementmap_vertex:cx,emissivemap_fragment:lx,emissivemap_pars_fragment:hx,colorspace_fragment:fx,colorspace_pars_fragment:ux,envmap_fragment:dx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ax,envmap_vertex:xx,fog_vertex:_x,fog_pars_vertex:yx,fog_fragment:vx,fog_pars_fragment:bx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:wx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Tx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Px,lights_phong_pars_fragment:Ix,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:zx,lights_fragment_maps:Ux,lights_fragment_end:Nx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:kx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:$x,morphcolor_vertex:qx,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Jx,normal_fragment_begin:jx,normal_fragment_maps:Qx,normal_pars_fragment:t1,normal_pars_vertex:e1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:a1,opaque_fragment:c1,packing:l1,premultiplied_alpha_fragment:h1,project_vertex:f1,dithering_fragment:u1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:x1,shadowmap_vertex:_1,shadowmask_pars_fragment:y1,skinbase_vertex:v1,skinning_pars_vertex:b1,skinning_vertex:M1,skinnormal_vertex:w1,specularmap_fragment:S1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:R1,transmission_pars_fragment:C1,uv_pars_fragment:P1,uv_pars_vertex:I1,uv_vertex:L1,worldpos_vertex:D1,background_vert:z1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:B1,depth_vert:k1,depth_frag:H1,distanceRGBA_vert:V1,distanceRGBA_frag:G1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:Y1,linedashed_frag:$1,meshbasic_vert:q1,meshbasic_frag:K1,meshlambert_vert:Z1,meshlambert_frag:J1,meshmatcap_vert:j1,meshmatcap_frag:Q1,meshnormal_vert:t_,meshnormal_frag:e_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:o_,meshtoon_vert:r_,meshtoon_frag:a_,points_vert:c_,points_frag:l_,shadow_vert:h_,shadow_frag:f_,sprite_vert:u_,sprite_frag:d_},qt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},qi={basic:{uniforms:Xn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Xn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new he(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Xn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Xn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Xn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new he(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Xn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Xn([qt.points,qt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Xn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Xn([qt.common,qt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Xn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Xn([qt.sprite,qt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Xn([qt.common,qt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Xn([qt.lights,qt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};qi.physical={uniforms:Xn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Sl={r:0,b:0,g:0},xo=new Ui,p_=new Ze;function m_(n,t,e,i,s,o,r){let a=new he(0),c=o===!0?0:1,l,f,h=null,d=0,u=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function y(w){let v=!1,A=p(w);A===null?x(a,c):A&&A.isColor&&(x(A,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(w,v){let A=p(v);A&&(A.isCubeTexture||A.mapping===ua)?(f===void 0&&(f=new Be(new zs(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:go(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),xo.copy(v.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(xo)),f.material.toneMapped=Ue.getTransfer(A.colorSpace)!==Ge,(h!==A||d!==A.version||u!==n.toneMapping)&&(f.material.needsUpdate=!0,h=A,d=A.version,u=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Be(new ni(2,2),new pi({name:"BackgroundMaterial",uniforms:go(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(A.colorSpace)!==Ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,v){w.getRGB(Sl,vf(n)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,v,r)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,x(a,c)},render:y,addToRenderList:_,dispose:S}}function g_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),o=s,r=!1;function a(g,b,T,I,R){let D=!1,N=h(I,T,b);o!==N&&(o=N,l(o.object)),D=u(g,I,T,R),D&&p(g,I,T,R),R!==null&&t.update(R,n.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,v(g,b,T,I),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function f(g){return n.deleteVertexArray(g)}function h(g,b,T){let I=T.wireframe===!0,R=i[g.id];R===void 0&&(R={},i[g.id]=R);let D=R[b.id];D===void 0&&(D={},R[b.id]=D);let N=D[I];return N===void 0&&(N=d(c()),D[I]=N),N}function d(g){let b=[],T=[],I=[];for(let R=0;R<e;R++)b[R]=0,T[R]=0,I[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:T,attributeDivisors:I,object:g,attributes:{},index:null}}function u(g,b,T,I){let R=o.attributes,D=b.attributes,N=0,H=T.getAttributes();for(let U in H)if(H[U].location>=0){let Y=R[U],$=D[U];if($===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&($=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&($=g.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;N++}return o.attributesNum!==N||o.index!==I}function p(g,b,T,I){let R={},D=b.attributes,N=0,H=T.getAttributes();for(let U in H)if(H[U].location>=0){let Y=D[U];Y===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&(Y=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&(Y=g.instanceColor));let $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),R[U]=$,N++}o.attributes=R,o.attributesNum=N,o.index=I}function y(){let g=o.newAttributes;for(let b=0,T=g.length;b<T;b++)g[b]=0}function _(g){x(g,0)}function x(g,b){let T=o.newAttributes,I=o.enabledAttributes,R=o.attributeDivisors;T[g]=1,I[g]===0&&(n.enableVertexAttribArray(g),I[g]=1),R[g]!==b&&(n.vertexAttribDivisor(g,b),R[g]=b)}function S(){let g=o.newAttributes,b=o.enabledAttributes;for(let T=0,I=b.length;T<I;T++)b[T]!==g[T]&&(n.disableVertexAttribArray(T),b[T]=0)}function w(g,b,T,I,R,D,N){N===!0?n.vertexAttribIPointer(g,b,T,R,D):n.vertexAttribPointer(g,b,T,I,R,D)}function v(g,b,T,I){y();let R=I.attributes,D=T.getAttributes(),N=b.defaultAttributeValues;for(let H in D){let U=D[H];if(U.location>=0){let F=R[H];if(F===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(F=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(F=g.instanceColor)),F!==void 0){let Y=F.normalized,$=F.itemSize,J=t.get(F);if(J===void 0)continue;let Rt=J.buffer,vt=J.type,mt=J.bytesPerElement,j=vt===n.INT||vt===n.UNSIGNED_INT||F.gpuType===Gc;if(F.isInterleavedBufferAttribute){let G=F.data,q=G.stride,ct=F.offset;if(G.isInstancedInterleavedBuffer){for(let Q=0;Q<U.locationSize;Q++)x(U.location+Q,G.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Q=0;Q<U.locationSize;Q++)_(U.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let Q=0;Q<U.locationSize;Q++)w(U.location+Q,$/U.locationSize,vt,Y,q*mt,(ct+$/U.locationSize*Q)*mt,j)}else{if(F.isInstancedBufferAttribute){for(let G=0;G<U.locationSize;G++)x(U.location+G,F.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let G=0;G<U.locationSize;G++)_(U.location+G);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let G=0;G<U.locationSize;G++)w(U.location+G,$/U.locationSize,vt,Y,$*mt,$/U.locationSize*G*mt,j)}}else if(N!==void 0){let Y=N[H];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(U.location,Y);break;case 3:n.vertexAttrib3fv(U.location,Y);break;case 4:n.vertexAttrib4fv(U.location,Y);break;default:n.vertexAttrib1fv(U.location,Y)}}}}S()}function A(){M();for(let g in i){let b=i[g];for(let T in b){let I=b[T];for(let R in I)f(I[R].object),delete I[R];delete b[T]}delete i[g]}}function P(g){if(i[g.id]===void 0)return;let b=i[g.id];for(let T in b){let I=b[T];for(let R in I)f(I[R].object),delete I[R];delete b[T]}delete i[g.id]}function C(g){for(let b in i){let T=i[b];if(T[g.id]===void 0)continue;let I=T[g.id];for(let R in I)f(I[R].object),delete I[R];delete T[g.id]}}function M(){m(),r=!0,o!==s&&(o=s,l(o.object))}function m(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:m,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:S}}function x_(n,t,e){let i;function s(l){i=l}function o(l,f){n.drawArrays(i,l,f),e.update(f,i,1)}function r(l,f,h){h!==0&&(n.drawArraysInstanced(i,l,f,h),e.update(f,i,h))}function a(l,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,h);let u=0;for(let p=0;p<h;p++)u+=f[p];e.update(u,i,1)}function c(l,f,h,d){if(h===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<l.length;p++)r(l[p],f[p],d[p]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,f,0,d,0,h);let p=0;for(let y=0;y<h;y++)p+=f[y]*d[y];e.update(p,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let M=C===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ni&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!M)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:A,maxSamples:P}}function y_(n){let t=this,e=null,i=0,s=!1,o=!1,r=new Ei,a=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||s;return s=d,i=h.length,u},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,x=n.get(h);if(!s||p===null||p.length===0||o&&!_)o?f(null):l();else{let S=o?0:i,w=S*4,v=x.clippingState||null;c.value=v,v=f(p,d,w,u);for(let A=0;A!==w;++A)v[A]=e[A];x.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,d,u,p){let y=h!==null?h.length:0,_=null;if(y!==0){if(_=c.value,p!==!0||_===null){let x=u+y*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<x)&&(_=new Float32Array(x));for(let w=0,v=u;w!==y;++w,v+=4)r.copy(h[w]).applyMatrix4(S,a),r.normal.toArray(_,v),_[v+3]=r.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function v_(n){let t=new WeakMap;function e(r,a){return a===kc?r.mapping=po:a===Hc&&(r.mapping=mo),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===kc||a===Hc)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new gc(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var fr=4,m0=[.125,.215,.35,.446,.526,.582],vo=20,Sf=new la,g0=new he,Ef=null,Tf=0,Af=0,Rf=!1,yo=(1+Math.sqrt(5))/2,hr=1/yo,x0=[new X(-yo,hr,0),new X(yo,hr,0),new X(-hr,0,yo),new X(hr,0,yo),new X(0,yo,-hr),new X(0,yo,hr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],b_=new X,Al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){let{size:r=256,position:a=b_}=o;Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ef,Tf,Af),this._renderer.xr.enabled=Rf,t.scissorTest=!1,El(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===po||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:rr,format:Wn,colorSpace:co,depthBuffer:!1},s=_0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(o)),this._blurMaterial=w_(o,t,e)}return s}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Sf)}_sceneToCubeUV(t,e,i,s,o){let c=new Vn(90,1,e,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(g0),h.toneMapping=ps,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new Gn({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),_=new Be(new zs,y),x=!1,S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,x=!0):(y.color.copy(g0),x=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+f[w],o.y,o.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+f[w],o.z)):(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+f[w]));let A=this._cubeSize;El(s,v*A,w>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(_,c),h.render(t,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===po||t.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Be(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;El(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Sf)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=x0[(s-o-1)%x0.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new Be(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*vo-1),y=o/p,_=isFinite(o)?1+Math.floor(f*y):vo;_>vo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${vo}`);let x=[],S=0;for(let C=0;C<vo;++C){let M=C/y,m=Math.exp(-M*M/2);x.push(m),C===0?S+=m:C<_&&(S+=2*m)}for(let C=0;C<x.length;C++)x[C]=x[C]/S;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=x,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let v=this._sizeLods[s],A=3*v*(s>w-fr?s-w+fr:0),P=4*(this._cubeSize-v);El(e,A,P,3*v,2*v),c.setRenderTarget(e),c.render(h,Sf)}};function M_(n){let t=[],e=[],i=[],s=n,o=n-fr+1+m0.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let c=1/a;r>n-fr?c=m0[r-n+fr-1]:r===0&&(c=0),i.push(c);let l=1/(a-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],u=6,p=6,y=3,_=2,x=1,S=new Float32Array(y*p*u),w=new Float32Array(_*p*u),v=new Float32Array(x*p*u);for(let P=0;P<u;P++){let C=P%3*2/3-1,M=P>2?0:-1,m=[C,M,0,C+2/3,M,0,C+2/3,M+1,0,C,M,0,C+2/3,M+1,0,C,M+1,0];S.set(m,y*p*P),w.set(d,_*p*P);let g=[P,P,P,P,P,P];v.set(g,x*p*P)}let A=new bn;A.setAttribute("position",new Ce(S,y)),A.setAttribute("uv",new Ce(w,_)),A.setAttribute("faceIndex",new Ce(v,x)),t.push(A),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _0(n,t,e){let i=new Xi(n,t,e);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function w_(n,t,e){let i=new Float32Array(vo),s=new X(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function y0(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function v0(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Ff(){return`

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
	`}function S_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===kc||c===Hc,f=c===po||c===mo;if(l||f){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Al(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let u=a.image;return l&&u&&u.height>0||f&&u&&s(u)?(e===null&&(e=new Al(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function E_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Jo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function T_(n,t,e,i){let s={},o=new WeakMap;function r(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",r),delete s[d.id];let u=o.get(d);u&&(t.remove(u),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let u in d)t.update(d[u],n.ARRAY_BUFFER)}function l(h){let d=[],u=h.index,p=h.attributes.position,y=0;if(u!==null){let S=u.array;y=u.version;for(let w=0,v=S.length;w<v;w+=3){let A=S[w+0],P=S[w+1],C=S[w+2];d.push(A,P,P,C,C,A)}}else if(p!==void 0){let S=p.array;y=p.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let A=w+0,P=w+1,C=w+2;d.push(A,P,P,C,C,A)}}else return;let _=new(yf(d)?qr:$r)(d,1);_.version=y;let x=o.get(h);x&&t.remove(x),o.set(h,_)}function f(h){let d=o.get(h);if(d){let u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function A_(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,u){n.drawElements(i,u,o,d*r),e.update(u,i,1)}function l(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,o,d*r,p),e.update(u,i,p))}function f(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,o,d,0,p);let _=0;for(let x=0;x<p;x++)_+=u[x];e.update(_,i,1)}function h(d,u,p,y){if(p===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d.length;x++)l(d[x]/r,u[x],y[x]);else{_.multiDrawElementsInstancedWEBGL(i,u,0,o,d,0,y,0,p);let x=0;for(let S=0;S<p;S++)x+=u[S]*y[S];e.update(x,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function R_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function C_(n,t,e){let i=new WeakMap,s=new Qe;function o(r,a,c){let l=r.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==h){let m=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",m)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*A*4*h),C=new Xr(P,v,A,h);C.type=gi,C.needsUpdate=!0;let M=w*4;for(let g=0;g<h;g++){let b=_[g],T=x[g],I=S[g],R=v*A*4*g;for(let D=0;D<b.count;D++){let N=D*M;u===!0&&(s.fromBufferAttribute(b,D),P[R+N+0]=s.x,P[R+N+1]=s.y,P[R+N+2]=s.z,P[R+N+3]=0),p===!0&&(s.fromBufferAttribute(T,D),P[R+N+4]=s.x,P[R+N+5]=s.y,P[R+N+6]=s.z,P[R+N+7]=0),y===!0&&(s.fromBufferAttribute(I,D),P[R+N+8]=s.x,P[R+N+9]=s.y,P[R+N+10]=s.z,P[R+N+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new le(v,A)},i.set(a,d),a.addEventListener("dispose",m)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let u=0;for(let y=0;y<l.length;y++)u+=l[y];let p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function P_(n,t,e,i){let s=new WeakMap;function o(c){let l=i.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}var B0=new Jn,b0=new ta(1,1),k0=new Xr,H0=new pc,V0=new Zr,M0=[],w0=[],S0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function dr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=M0[s];if(o===void 0&&(o=new Float32Array(s),M0[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Mn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function wn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Cl(n,t){let e=w0[t];e===void 0&&(e=new Int32Array(t),w0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function I_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;n.uniform2fv(this.addr,t),wn(e,t)}}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;n.uniform3fv(this.addr,t),wn(e,t)}}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;n.uniform4fv(this.addr,t),wn(e,t)}}function U_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(Mn(e,i))return;T0.set(i),n.uniformMatrix2fv(this.addr,!1,T0),wn(e,i)}}function N_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(Mn(e,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),wn(e,i)}}function O_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(Mn(e,i))return;S0.set(i),n.uniformMatrix4fv(this.addr,!1,S0),wn(e,i)}}function F_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;n.uniform2iv(this.addr,t),wn(e,t)}}function k_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;n.uniform3iv(this.addr,t),wn(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;n.uniform4iv(this.addr,t),wn(e,t)}}function V_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;n.uniform2uiv(this.addr,t),wn(e,t)}}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;n.uniform3uiv(this.addr,t),wn(e,t)}}function X_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;n.uniform4uiv(this.addr,t),wn(e,t)}}function Y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(b0.compareFunction=mf,o=b0):o=B0,e.setTexture2D(t||o,s)}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||H0,s)}function q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||V0,s)}function K_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||k0,s)}function Z_(n){switch(n){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return z_;case 35674:return U_;case 35675:return N_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return K_}}function J_(n,t){n.uniform1fv(this.addr,t)}function j_(n,t){let e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function Q_(n,t){let e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function ty(n,t){let e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function ey(n,t){let e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ny(n,t){let e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iy(n,t){let e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sy(n,t){n.uniform1iv(this.addr,t)}function oy(n,t){n.uniform2iv(this.addr,t)}function ry(n,t){n.uniform3iv(this.addr,t)}function ay(n,t){n.uniform4iv(this.addr,t)}function cy(n,t){n.uniform1uiv(this.addr,t)}function ly(n,t){n.uniform2uiv(this.addr,t)}function hy(n,t){n.uniform3uiv(this.addr,t)}function fy(n,t){n.uniform4uiv(this.addr,t)}function uy(n,t,e){let i=this.cache,s=t.length,o=Cl(e,s);Mn(i,o)||(n.uniform1iv(this.addr,o),wn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||B0,o[r])}function dy(n,t,e){let i=this.cache,s=t.length,o=Cl(e,s);Mn(i,o)||(n.uniform1iv(this.addr,o),wn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||H0,o[r])}function py(n,t,e){let i=this.cache,s=t.length,o=Cl(e,s);Mn(i,o)||(n.uniform1iv(this.addr,o),wn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||V0,o[r])}function my(n,t,e){let i=this.cache,s=t.length,o=Cl(e,s);Mn(i,o)||(n.uniform1iv(this.addr,o),wn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||k0,o[r])}function gy(n){switch(n){case 5126:return J_;case 35664:return j_;case 35665:return Q_;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return oy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return cy;case 36294:return ly;case 36295:return hy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var Pf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}},If=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},Lf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function A0(n,t){n.seq.push(t),n.map[t.id]=t}function xy(n,t,e){let i=n.name,s=i.length;for(Cf.lastIndex=0;;){let o=Cf.exec(i),r=Cf.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){A0(e,l===void 0?new Pf(a,n,t):new If(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Lf(a),A0(e,h)),e=h}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);xy(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function R0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var _y=37297,yy=0;function vy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}var C0=new ge;function by(n){Ue._getMatrix(C0,Ue.workingColorSpace,n);let t=`mat3( ${C0.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(n)){case Vr:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function P0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+vy(n.getShaderSource(t),a)}else return o}function My(n,t){let e=by(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wy(n,t){let e;switch(t){case Gd:e="Linear";break;case Wd:e="Reinhard";break;case Xd:e="Cineon";break;case Bc:e="ACESFilmic";break;case $d:e="AgX";break;case qd:e="Neutral";break;case Yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tl=new X;function Sy(){Ue.getLuminanceCoefficients(Tl);let n=Tl.x.toFixed(4),t=Tl.y.toFixed(4),e=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function Ty(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ay(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function _a(n){return n!==""}function I0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(n){return n.replace(Ry,Py)}var Cy=new Map;function Py(n,t){let e=de[t];if(e===void 0){let i=Cy.get(t);if(i!==void 0)e=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Df(e)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(n){return n.replace(Iy,Ly)}function Ly(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function z0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Dy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function zy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case po:case mo:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mo:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case of:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Fy(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=Dy(e),l=zy(e),f=Uy(e),h=Ny(e),d=Oy(e),u=Ey(e),p=Ty(o),y=s.createProgram(),_,x,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_a).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_a).join(`
`),x.length>0&&(x+=`
`)):(_=[z0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),x=[z0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ps?"#define TONE_MAPPING":"",e.toneMapping!==ps?de.tonemapping_pars_fragment:"",e.toneMapping!==ps?wy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,My("linearToOutputTexel",e.outputColorSpace),Sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),r=Df(r),r=I0(r,e),r=L0(r,e),a=Df(a),a=I0(a,e),a=L0(a,e),r=D0(r),a=D0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",e.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=S+_+r,v=S+x+a,A=R0(s,s.VERTEX_SHADER,w),P=R0(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(b){if(n.debug.checkShaderErrors){let T=s.getProgramInfoLog(y)||"",I=s.getShaderInfoLog(A)||"",R=s.getShaderInfoLog(P)||"",D=T.trim(),N=I.trim(),H=R.trim(),U=!0,F=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,P);else{let Y=P0(s,A,"vertex"),$=P0(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+Y+`
`+$)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||H==="")&&(F=!1);F&&(b.diagnostics={runnable:U,programLog:D,vertexShader:{log:N,prefix:_},fragmentShader:{log:H,prefix:x}})}s.deleteShader(A),s.deleteShader(P),M=new ur(s,y),m=Ay(s,y)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let m;this.getAttributes=function(){return m===void 0&&C(this),m};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,_y)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=P,this}var By=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uf(t),e.set(t,i)),i}},Uf=class{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}};function ky(n,t,e,i,s,o,r){let a=new Yr,c=new zf,l=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return l.add(m),m===0?"uv":`uv${m}`}function _(m,g,b,T,I){let R=T.fog,D=I.geometry,N=m.isMeshStandardMaterial?T.environment:null,H=(m.isMeshStandardMaterial?e:t).get(m.envMap||N),U=H&&H.mapping===ua?H.image.height:null,F=p[m.type];m.precision!==null&&(u=s.getMaxPrecision(m.precision),u!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=Y!==void 0?Y.length:0,J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let Rt,vt,mt,j;if(F){let Vt=qi[F];Rt=Vt.vertexShader,vt=Vt.fragmentShader}else Rt=m.vertexShader,vt=m.fragmentShader,c.update(m),mt=c.getVertexShaderID(m),j=c.getFragmentShaderID(m);let G=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),ct=I.isInstancedMesh===!0,Q=I.isBatchedMesh===!0,B=!!m.map,et=!!m.matcap,z=!!H,K=!!m.aoMap,nt=!!m.lightMap,lt=!!m.bumpMap,gt=!!m.normalMap,ut=!!m.displacementMap,Mt=!!m.emissiveMap,yt=!!m.metalnessMap,pt=!!m.roughnessMap,wt=m.anisotropy>0,L=m.clearcoat>0,E=m.dispersion>0,k=m.iridescence>0,st=m.sheen>0,rt=m.transmission>0,Z=wt&&!!m.anisotropyMap,Et=L&&!!m.clearcoatMap,V=L&&!!m.clearcoatNormalMap,it=L&&!!m.clearcoatRoughnessMap,tt=k&&!!m.iridescenceMap,at=k&&!!m.iridescenceThicknessMap,dt=st&&!!m.sheenColorMap,zt=st&&!!m.sheenRoughnessMap,Pt=!!m.specularMap,ot=!!m.specularColorMap,It=!!m.specularIntensityMap,W=rt&&!!m.transmissionMap,ht=rt&&!!m.thicknessMap,Tt=!!m.gradientMap,Nt=!!m.alphaMap,St=m.alphaTest>0,bt=!!m.alphaHash,Dt=!!m.extensions,Ut=ps;m.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Bt={shaderID:F,shaderType:m.type,shaderName:m.name,vertexShader:Rt,fragmentShader:vt,defines:m.defines,customVertexShaderID:mt,customFragmentShaderID:j,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:Q,batchingColor:Q&&I._colorsTexture!==null,instancing:ct,instancingColor:ct&&I.instanceColor!==null,instancingMorph:ct&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:co,alphaToCoverage:!!m.alphaToCoverage,map:B,matcap:et,envMap:z,envMapMode:z&&H.mapping,envMapCubeUVHeight:U,aoMap:K,lightMap:nt,bumpMap:lt,normalMap:gt,displacementMap:d&&ut,emissiveMap:Mt,normalMapObjectSpace:gt&&m.normalMapType===jd,normalMapTangentSpace:gt&&m.normalMapType===pf,metalnessMap:yt,roughnessMap:pt,anisotropy:wt,anisotropyMap:Z,clearcoat:L,clearcoatMap:Et,clearcoatNormalMap:V,clearcoatRoughnessMap:it,dispersion:E,iridescence:k,iridescenceMap:tt,iridescenceThicknessMap:at,sheen:st,sheenColorMap:dt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:ot,specularIntensityMap:It,transmission:rt,transmissionMap:W,thicknessMap:ht,gradientMap:Tt,opaque:m.transparent===!1&&m.blending===ro&&m.alphaToCoverage===!1,alphaMap:Nt,alphaTest:St,alphaHash:bt,combine:m.combine,mapUv:B&&y(m.map.channel),aoMapUv:K&&y(m.aoMap.channel),lightMapUv:nt&&y(m.lightMap.channel),bumpMapUv:lt&&y(m.bumpMap.channel),normalMapUv:gt&&y(m.normalMap.channel),displacementMapUv:ut&&y(m.displacementMap.channel),emissiveMapUv:Mt&&y(m.emissiveMap.channel),metalnessMapUv:yt&&y(m.metalnessMap.channel),roughnessMapUv:pt&&y(m.roughnessMap.channel),anisotropyMapUv:Z&&y(m.anisotropyMap.channel),clearcoatMapUv:Et&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:V&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:at&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:zt&&y(m.sheenRoughnessMap.channel),specularMapUv:Pt&&y(m.specularMap.channel),specularColorMapUv:ot&&y(m.specularColorMap.channel),specularIntensityMapUv:It&&y(m.specularIntensityMap.channel),transmissionMapUv:W&&y(m.transmissionMap.channel),thicknessMapUv:ht&&y(m.thicknessMap.channel),alphaMapUv:Nt&&y(m.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||wt),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(B||Nt),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:q,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:B&&m.map.isVideoTexture===!0&&Ue.getTransfer(m.map.colorSpace)===Ge,decodeVideoTextureEmissive:Mt&&m.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(m.emissiveMap.colorSpace)===Ge,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===zn,flipSided:m.side===Qn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Dt&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&m.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function x(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let b in m.defines)g.push(b),g.push(m.defines[b]);return m.isRawShaderMaterial===!1&&(S(g,m),w(g,m),g.push(n.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()}function S(m,g){m.push(g.precision),m.push(g.outputColorSpace),m.push(g.envMapMode),m.push(g.envMapCubeUVHeight),m.push(g.mapUv),m.push(g.alphaMapUv),m.push(g.lightMapUv),m.push(g.aoMapUv),m.push(g.bumpMapUv),m.push(g.normalMapUv),m.push(g.displacementMapUv),m.push(g.emissiveMapUv),m.push(g.metalnessMapUv),m.push(g.roughnessMapUv),m.push(g.anisotropyMapUv),m.push(g.clearcoatMapUv),m.push(g.clearcoatNormalMapUv),m.push(g.clearcoatRoughnessMapUv),m.push(g.iridescenceMapUv),m.push(g.iridescenceThicknessMapUv),m.push(g.sheenColorMapUv),m.push(g.sheenRoughnessMapUv),m.push(g.specularMapUv),m.push(g.specularColorMapUv),m.push(g.specularIntensityMapUv),m.push(g.transmissionMapUv),m.push(g.thicknessMapUv),m.push(g.combine),m.push(g.fogExp2),m.push(g.sizeAttenuation),m.push(g.morphTargetsCount),m.push(g.morphAttributeCount),m.push(g.numDirLights),m.push(g.numPointLights),m.push(g.numSpotLights),m.push(g.numSpotLightMaps),m.push(g.numHemiLights),m.push(g.numRectAreaLights),m.push(g.numDirLightShadows),m.push(g.numPointLightShadows),m.push(g.numSpotLightShadows),m.push(g.numSpotLightShadowsWithMaps),m.push(g.numLightProbes),m.push(g.shadowMapType),m.push(g.toneMapping),m.push(g.numClippingPlanes),m.push(g.numClipIntersection),m.push(g.depthPacking)}function w(m,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),m.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),m.push(a.mask)}function v(m){let g=p[m.type],b;if(g){let T=qi[g];b=l0.clone(T.uniforms)}else b=m.uniforms;return b}function A(m,g){let b;for(let T=0,I=f.length;T<I;T++){let R=f[T];if(R.cacheKey===g){b=R,++b.usedTimes;break}}return b===void 0&&(b=new Fy(n,g,m,o),f.push(b)),b}function P(m){if(--m.usedTimes===0){let g=f.indexOf(m);f[g]=f[f.length-1],f.pop(),m.destroy()}}function C(m){c.remove(m)}function M(){c.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:P,releaseShaderCache:C,programs:f,dispose:M}}function Hy(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Vy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function U0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function N0(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(h,d,u,p,y,_){let x=n[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:u,groupOrder:p,renderOrder:h.renderOrder,z:y,group:_},n[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=u,x.groupOrder=p,x.renderOrder=h.renderOrder,x.z=y,x.group=_),t++,x}function a(h,d,u,p,y,_){let x=r(h,d,u,p,y,_);u.transmission>0?i.push(x):u.transparent===!0?s.push(x):e.push(x)}function c(h,d,u,p,y,_){let x=r(h,d,u,p,y,_);u.transmission>0?i.unshift(x):u.transparent===!0?s.unshift(x):e.unshift(x)}function l(h,d){e.length>1&&e.sort(h||Vy),i.length>1&&i.sort(d||U0),s.length>1&&s.sort(d||U0)}function f(){for(let h=t,d=n.length;h<d;h++){let u=n[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:f,sort:l}}function Gy(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new N0,n.set(i,[r])):s>=o.length?(r=new N0,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new he};break;case"SpotLight":e={position:new X,direction:new X,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function Xy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Yy=0;function $y(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qy(n){let t=new Wy,e=Xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);let s=new X,o=new Ze,r=new Ze;function a(l){let f=0,h=0,d=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let u=0,p=0,y=0,_=0,x=0,S=0,w=0,v=0,A=0,P=0,C=0;l.sort($y);for(let m=0,g=l.length;m<g;m++){let b=l[m],T=b.color,I=b.intensity,R=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=T.r*I,h+=T.g*I,d+=T.b*I;else if(b.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],I);C++}else if(b.isDirectionalLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let H=b.shadow,U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[u]=U,i.directionalShadowMap[u]=D,i.directionalShadowMatrix[u]=b.shadow.matrix,S++}i.directional[u]=N,u++}else if(b.isSpotLight){let N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(T).multiplyScalar(I),N.distance=R,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,i.spot[y]=N;let H=b.shadow;if(b.map&&(i.spotLightMap[A]=b.map,A++,H.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[y]=H.matrix,b.castShadow){let U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=D,v++}y++}else if(b.isRectAreaLight){let N=t.get(b);N.color.copy(T).multiplyScalar(I),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[_]=N,_++}else if(b.isPointLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){let H=b.shadow,U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=b.shadow.matrix,w++}i.point[p]=N,p++}else if(b.isHemisphereLight){let N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(I),N.groundColor.copy(b.groundColor).multiplyScalar(I),i.hemi[x]=N,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qt.LTC_FLOAT_1,i.rectAreaLTC2=qt.LTC_FLOAT_2):(i.rectAreaLTC1=qt.LTC_HALF_1,i.rectAreaLTC2=qt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;let M=i.hash;(M.directionalLength!==u||M.pointLength!==p||M.spotLength!==y||M.rectAreaLength!==_||M.hemiLength!==x||M.numDirectionalShadows!==S||M.numPointShadows!==w||M.numSpotShadows!==v||M.numSpotMaps!==A||M.numLightProbes!==C)&&(i.directional.length=u,i.spot.length=y,i.rectArea.length=_,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,M.directionalLength=u,M.pointLength=p,M.spotLength=y,M.rectAreaLength=_,M.hemiLength=x,M.numDirectionalShadows=S,M.numPointShadows=w,M.numSpotShadows=v,M.numSpotMaps=A,M.numLightProbes=C,i.version=Yy++)}function c(l,f){let h=0,d=0,u=0,p=0,y=0,_=f.matrixWorldInverse;for(let x=0,S=l.length;x<S;x++){let w=l[x];if(w.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),h++}else if(w.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),u++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(_),r.identity(),o.copy(w.matrixWorld),o.premultiply(_),r.extractRotation(o),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(w.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(_),y++}}}return{setup:a,setupView:c,state:i}}function O0(n){let t=new qy(n),e=[],i=[];function s(f){l.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function r(f){i.push(f)}function a(){t.setup(e)}function c(f){t.setupView(e,f)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Ky(n){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new O0(n),t.set(s,[a])):o>=r.length?(a=new O0(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`;function jy(n,t,e){let i=new er,s=new le,o=new le,r=new Qe,a=new vc({depthPacking:Jd}),c=new bc,l={},f=e.maxTextureSize,h={[hs]:Qn,[Qn]:hs,[zn]:zn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Zy,fragmentShader:Jy}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new bn;p.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(p,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let x=this.type;this.render=function(P,C,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;let m=n.getRenderTarget(),g=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),T=n.state;T.setBlending(ds),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let I=x!==Yi&&this.type===Yi,R=x===Yi&&this.type!==Yi;for(let D=0,N=P.length;D<N;D++){let H=P[D],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let F=U.getFrameExtents();if(s.multiply(F),o.copy(U.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/F.x),s.x=o.x*F.x,U.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/F.y),s.y=o.y*F.y,U.mapSize.y=o.y)),U.map===null||I===!0||R===!0){let $=this.type!==Yi?{minFilter:In,magFilter:In}:{};U.map!==null&&U.map.dispose(),U.map=new Xi(s.x,s.y,$),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let Y=U.getViewportCount();for(let $=0;$<Y;$++){let J=U.getViewport($);r.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),T.viewport(r),U.updateMatrices(H,$),i=U.getFrustum(),v(C,M,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Yi&&S(U,M),U.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(m,g,b)};function S(P,C){let M=t.update(y);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,M,d,y,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,M,u,y,null)}function w(P,C,M,m){let g=null,b=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)g=b;else if(g=M.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let T=g.uuid,I=C.uuid,R=l[T];R===void 0&&(R={},l[T]=R);let D=R[I];D===void 0&&(D=g.clone(),R[I]=D,C.addEventListener("dispose",A)),g=D}if(g.visible=C.visible,g.wireframe=C.wireframe,m===Yi?g.side=C.shadowSide!==null?C.shadowSide:C.side:g.side=C.shadowSide!==null?C.shadowSide:h[C.side],g.alphaMap=C.alphaMap,g.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,g.map=C.map,g.clipShadows=C.clipShadows,g.clippingPlanes=C.clippingPlanes,g.clipIntersection=C.clipIntersection,g.displacementMap=C.displacementMap,g.displacementScale=C.displacementScale,g.displacementBias=C.displacementBias,g.wireframeLinewidth=C.wireframeLinewidth,g.linewidth=C.linewidth,M.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let T=n.properties.get(g);T.light=M}return g}function v(P,C,M,m,g){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&g===Yi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);let I=t.update(P),R=P.material;if(Array.isArray(R)){let D=I.groups;for(let N=0,H=D.length;N<H;N++){let U=D[N],F=R[U.materialIndex];if(F&&F.visible){let Y=w(P,F,m,g);P.onBeforeShadow(n,P,C,M,I,Y,U),n.renderBufferDirect(M,null,I,Y,P,U),P.onAfterShadow(n,P,C,M,I,Y,U)}}}else if(R.visible){let D=w(P,R,m,g);P.onBeforeShadow(n,P,C,M,I,D,null),n.renderBufferDirect(M,null,I,D,P,null),P.onAfterShadow(n,P,C,M,I,D,null)}}let T=P.children;for(let I=0,R=T.length;I<R;I++)v(T[I],C,M,m,g)}function A(P){P.target.removeEventListener("dispose",A);for(let M in l){let m=l[M],g=P.target.uuid;g in m&&(m[g].dispose(),delete m[g])}}}var Qy={[Lc]:Dc,[zc]:Oc,[Uc]:Fc,[ao]:Nc,[Dc]:Lc,[Oc]:zc,[Fc]:Uc,[Nc]:ao};function tv(n,t){function e(){let W=!1,ht=new Qe,Tt=null,Nt=new Qe(0,0,0,0);return{setMask:function(St){Tt!==St&&!W&&(n.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){W=St},setClear:function(St,bt,Dt,Ut,Bt){Bt===!0&&(St*=Ut,bt*=Ut,Dt*=Ut),ht.set(St,bt,Dt,Ut),Nt.equals(ht)===!1&&(n.clearColor(St,bt,Dt,Ut),Nt.copy(ht))},reset:function(){W=!1,Tt=null,Nt.set(-1,0,0,0)}}}function i(){let W=!1,ht=!1,Tt=null,Nt=null,St=null;return{setReversed:function(bt){if(ht!==bt){let Dt=t.get("EXT_clip_control");bt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=bt;let Ut=St;St=null,this.setClear(Ut)}},getReversed:function(){return ht},setTest:function(bt){bt?G(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(bt){Tt!==bt&&!W&&(n.depthMask(bt),Tt=bt)},setFunc:function(bt){if(ht&&(bt=Qy[bt]),Nt!==bt){switch(bt){case Lc:n.depthFunc(n.NEVER);break;case Dc:n.depthFunc(n.ALWAYS);break;case zc:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Nt=bt}},setLocked:function(bt){W=bt},setClear:function(bt){St!==bt&&(ht&&(bt=1-bt),n.clearDepth(bt),St=bt)},reset:function(){W=!1,Tt=null,Nt=null,St=null,ht=!1}}}function s(){let W=!1,ht=null,Tt=null,Nt=null,St=null,bt=null,Dt=null,Ut=null,Bt=null;return{setTest:function(Vt){W||(Vt?G(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(Vt){ht!==Vt&&!W&&(n.stencilMask(Vt),ht=Vt)},setFunc:function(Vt,Yt,me){(Tt!==Vt||Nt!==Yt||St!==me)&&(n.stencilFunc(Vt,Yt,me),Tt=Vt,Nt=Yt,St=me)},setOp:function(Vt,Yt,me){(bt!==Vt||Dt!==Yt||Ut!==me)&&(n.stencilOp(Vt,Yt,me),bt=Vt,Dt=Yt,Ut=me)},setLocked:function(Vt){W=Vt},setClear:function(Vt){Bt!==Vt&&(n.clearStencil(Vt),Bt=Vt)},reset:function(){W=!1,ht=null,Tt=null,Nt=null,St=null,bt=null,Dt=null,Ut=null,Bt=null}}}let o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap,f={},h={},d=new WeakMap,u=[],p=null,y=!1,_=null,x=null,S=null,w=null,v=null,A=null,P=null,C=new he(0,0,0),M=0,m=!1,g=null,b=null,T=null,I=null,R=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=H>=2);let F=null,Y={},$=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Rt=new Qe().fromArray($),vt=new Qe().fromArray(J);function mt(W,ht,Tt,Nt){let St=new Uint8Array(4),bt=n.createTexture();n.bindTexture(W,bt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Tt;Dt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(ht+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return bt}let j={};j[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),G(n.DEPTH_TEST),r.setFunc(ao),lt(!1),gt(Qh),G(n.CULL_FACE),K(ds);function G(W){f[W]!==!0&&(n.enable(W),f[W]=!0)}function q(W){f[W]!==!1&&(n.disable(W),f[W]=!1)}function ct(W,ht){return h[W]!==ht?(n.bindFramebuffer(W,ht),h[W]=ht,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Q(W,ht){let Tt=u,Nt=!1;if(W){Tt=d.get(ht),Tt===void 0&&(Tt=[],d.set(ht,Tt));let St=W.textures;if(Tt.length!==St.length||Tt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Dt=St.length;bt<Dt;bt++)Tt[bt]=n.COLOR_ATTACHMENT0+bt;Tt.length=St.length,Nt=!0}}else Tt[0]!==n.BACK&&(Tt[0]=n.BACK,Nt=!0);Nt&&n.drawBuffers(Tt)}function B(W){return p!==W?(n.useProgram(W),p=W,!0):!1}let et={[Ds]:n.FUNC_ADD,[Sd]:n.FUNC_SUBTRACT,[Ed]:n.FUNC_REVERSE_SUBTRACT};et[Td]=n.MIN,et[Ad]=n.MAX;let z={[Rd]:n.ZERO,[Cd]:n.ONE,[Pd]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[zd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Id]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Dd]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function K(W,ht,Tt,Nt,St,bt,Dt,Ut,Bt,Vt){if(W===ds){y===!0&&(q(n.BLEND),y=!1);return}if(y===!1&&(G(n.BLEND),y=!0),W!==wd){if(W!==_||Vt!==m){if((x!==Ds||v!==Ds)&&(n.blendEquation(n.FUNC_ADD),x=Ds,v=Ds),Vt)switch(W){case ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.ONE,n.ONE);break;case nf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,w=null,A=null,P=null,C.set(0,0,0),M=0,_=W,m=Vt}return}St=St||ht,bt=bt||Tt,Dt=Dt||Nt,(ht!==x||St!==v)&&(n.blendEquationSeparate(et[ht],et[St]),x=ht,v=St),(Tt!==S||Nt!==w||bt!==A||Dt!==P)&&(n.blendFuncSeparate(z[Tt],z[Nt],z[bt],z[Dt]),S=Tt,w=Nt,A=bt,P=Dt),(Ut.equals(C)===!1||Bt!==M)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Bt),C.copy(Ut),M=Bt),_=W,m=!1}function nt(W,ht){W.side===zn?q(n.CULL_FACE):G(n.CULL_FACE);let Tt=W.side===Qn;ht&&(Tt=!Tt),lt(Tt),W.blending===ro&&W.transparent===!1?K(ds):K(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),o.setMask(W.colorWrite);let Nt=W.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Mt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){g!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),g=W)}function gt(W){W!==vd?(G(n.CULL_FACE),W!==b&&(W===Qh?n.cullFace(n.BACK):W===bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),b=W}function ut(W){W!==T&&(N&&n.lineWidth(W),T=W)}function Mt(W,ht,Tt){W?(G(n.POLYGON_OFFSET_FILL),(I!==ht||R!==Tt)&&(n.polygonOffset(ht,Tt),I=ht,R=Tt)):q(n.POLYGON_OFFSET_FILL)}function yt(W){W?G(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function pt(W){W===void 0&&(W=n.TEXTURE0+D-1),F!==W&&(n.activeTexture(W),F=W)}function wt(W,ht,Tt){Tt===void 0&&(F===null?Tt=n.TEXTURE0+D-1:Tt=F);let Nt=Y[Tt];Nt===void 0&&(Nt={type:void 0,texture:void 0},Y[Tt]=Nt),(Nt.type!==W||Nt.texture!==ht)&&(F!==Tt&&(n.activeTexture(Tt),F=Tt),n.bindTexture(W,ht||j[W]),Nt.type=W,Nt.texture=ht)}function L(){let W=Y[F];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{n.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function rt(){try{n.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function V(){try{n.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{n.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{n.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{n.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(W){Rt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Rt.copy(W))}function zt(W){vt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),vt.copy(W))}function Pt(W,ht){let Tt=l.get(ht);Tt===void 0&&(Tt=new WeakMap,l.set(ht,Tt));let Nt=Tt.get(W);Nt===void 0&&(Nt=n.getUniformBlockIndex(ht,W.name),Tt.set(W,Nt))}function ot(W,ht){let Nt=l.get(ht).get(W);c.get(ht)!==Nt&&(n.uniformBlockBinding(ht,Nt,W.__bindingPointIndex),c.set(ht,Nt))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},F=null,Y={},h={},d=new WeakMap,u=[],p=null,y=!1,_=null,x=null,S=null,w=null,v=null,A=null,P=null,C=new he(0,0,0),M=0,m=!1,g=null,b=null,T=null,I=null,R=null,Rt.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:G,disable:q,bindFramebuffer:ct,drawBuffers:Q,useProgram:B,setBlending:K,setMaterial:nt,setFlipSided:lt,setCullFace:gt,setLineWidth:ut,setPolygonOffset:Mt,setScissorTest:yt,activeTexture:pt,bindTexture:wt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:tt,texImage3D:at,updateUBOMapping:Pt,uniformBlockBinding:ot,texStorage2D:V,texStorage3D:it,texSubImage2D:st,texSubImage3D:rt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Et,scissor:dt,viewport:zt,reset:It}}function ev(n,t,e,i,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,f=new WeakMap,h,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return u?new OffscreenCanvas(L,E):Wr("canvas")}function y(L,E,k){let st=1,rt=wt(L);if((rt.width>k||rt.height>k)&&(st=k/Math.max(rt.width,rt.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Z=Math.floor(st*rt.width),Et=Math.floor(st*rt.height);h===void 0&&(h=p(Z,Et));let V=E?p(Z,Et):h;return V.width=Z,V.height=Et,V.getContext("2d").drawImage(L,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Z+"x"+Et+")."),V}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function _(L){return L.generateMipmaps}function x(L){n.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(L,E,k,st,rt=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=E;if(E===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),E===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),E===n.RGBA){let Et=rt?Vr:Ue.getTransfer(st);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=Et===Ge?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(L,E){let k;return L?E===null||E===Bs||E===ar?k=n.DEPTH24_STENCIL8:E===gi?k=n.DEPTH32F_STENCIL8:E===or&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bs||E===ar?k=n.DEPTH_COMPONENT24:E===gi?k=n.DEPTH_COMPONENT32F:E===or&&(k=n.DEPTH_COMPONENT16),k}function A(L,E){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==fi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){let E=L.target;E.removeEventListener("dispose",P),M(E),E.isVideoTexture&&f.delete(E)}function C(L){let E=L.target;E.removeEventListener("dispose",C),g(E)}function M(L){let E=i.get(L);if(E.__webglInit===void 0)return;let k=L.source,st=d.get(k);if(st){let rt=st[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&m(L),Object.keys(st).length===0&&d.delete(k)}i.remove(L)}function m(L){let E=i.get(L);n.deleteTexture(E.__webglTexture);let k=L.source,st=d.get(k);delete st[E.__cacheKey],r.memory.textures--}function g(L){let E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let rt=0;rt<E.__webglFramebuffer[st].length;rt++)n.deleteFramebuffer(E.__webglFramebuffer[st][rt]);else n.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)n.deleteFramebuffer(E.__webglFramebuffer[st]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=L.textures;for(let st=0,rt=k.length;st<rt;st++){let Z=i.get(k[st]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(k[st])}i.remove(L)}let b=0;function T(){b=0}function I(){let L=b;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),b+=1,L}function R(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function D(L,E){let k=i.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&k.__version!==L.version){let st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,L,E);return}}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function N(L,E){let k=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){j(k,L,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function H(L,E){let k=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){j(k,L,E);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function U(L,E){let k=i.get(L);if(L.version>0&&k.__version!==L.version){G(k,L,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}let F={[hi]:n.REPEAT,[Ls]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},Y={[In]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},$={[Qd]:n.NEVER,[o0]:n.ALWAYS,[t0]:n.LESS,[mf]:n.LEQUAL,[e0]:n.EQUAL,[s0]:n.GEQUAL,[n0]:n.GREATER,[i0]:n.NOTEQUAL};function J(L,E){if(E.type===gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fi||E.magFilter===Vc||E.magFilter===da||E.magFilter===$i||E.minFilter===fi||E.minFilter===Vc||E.minFilter===da||E.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,F[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,F[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,F[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Y[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==da&&E.minFilter!==$i||E.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(L,E){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));let st=E.source,rt=d.get(st);rt===void 0&&(rt={},d.set(st,rt));let Z=R(E);if(Z!==L.__cacheKey){rt[Z]===void 0&&(rt[Z]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,k=!0),rt[Z].usedTimes++;let Et=rt[L.__cacheKey];Et!==void 0&&(rt[L.__cacheKey].usedTimes--,Et.usedTimes===0&&m(E)),L.__cacheKey=Z,L.__webglTexture=rt[Z].texture}return k}function vt(L,E,k){return Math.floor(Math.floor(L/k)/E)}function mt(L,E,k,st){let Z=L.updateRanges;if(Z.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,k,st,E.data);else{Z.sort((at,dt)=>at.start-dt.start);let Et=0;for(let at=1;at<Z.length;at++){let dt=Z[Et],zt=Z[at],Pt=dt.start+dt.count,ot=vt(zt.start,E.width,4),It=vt(dt.start,E.width,4);zt.start<=Pt+1&&ot===It&&vt(zt.start+zt.count-1,E.width,4)===ot?dt.count=Math.max(dt.count,zt.start+zt.count-dt.start):(++Et,Z[Et]=zt)}Z.length=Et+1;let V=n.getParameter(n.UNPACK_ROW_LENGTH),it=n.getParameter(n.UNPACK_SKIP_PIXELS),tt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let at=0,dt=Z.length;at<dt;at++){let zt=Z[at],Pt=Math.floor(zt.start/4),ot=Math.ceil(zt.count/4),It=Pt%E.width,W=Math.floor(Pt/E.width),ht=ot,Tt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,It,W,ht,Tt,k,st,E.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,V),n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,tt)}}function j(L,E,k){let st=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=n.TEXTURE_3D);let rt=Rt(L,E),Z=E.source;e.bindTexture(st,L.__webglTexture,n.TEXTURE0+k);let Et=i.get(Z);if(Z.version!==Et.__version||rt===!0){e.activeTexture(n.TEXTURE0+k);let V=Ue.getPrimaries(Ue.workingColorSpace),it=E.colorSpace===ms?null:Ue.getPrimaries(E.colorSpace),tt=E.colorSpace===ms||V===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let at=y(E.image,!1,s.maxTextureSize);at=pt(E,at);let dt=o.convert(E.format,E.colorSpace),zt=o.convert(E.type),Pt=w(E.internalFormat,dt,zt,E.colorSpace,E.isVideoTexture);J(st,E);let ot,It=E.mipmaps,W=E.isVideoTexture!==!0,ht=Et.__version===void 0||rt===!0,Tt=Z.dataReady,Nt=A(E,at);if(E.isDepthTexture)Pt=v(E.format===cr,E.type),ht&&(W?e.texStorage2D(n.TEXTURE_2D,1,Pt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Pt,at.width,at.height,0,dt,zt,null));else if(E.isDataTexture)if(It.length>0){W&&ht&&e.texStorage2D(n.TEXTURE_2D,Nt,Pt,It[0].width,It[0].height);for(let St=0,bt=It.length;St<bt;St++)ot=It[St],W?Tt&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,ot.width,ot.height,dt,zt,ot.data):e.texImage2D(n.TEXTURE_2D,St,Pt,ot.width,ot.height,0,dt,zt,ot.data);E.generateMipmaps=!1}else W?(ht&&e.texStorage2D(n.TEXTURE_2D,Nt,Pt,at.width,at.height),Tt&&mt(E,at,dt,zt)):e.texImage2D(n.TEXTURE_2D,0,Pt,at.width,at.height,0,dt,zt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Pt,It[0].width,It[0].height,at.depth);for(let St=0,bt=It.length;St<bt;St++)if(ot=It[St],E.format!==Wn)if(dt!==null)if(W){if(Tt)if(E.layerUpdates.size>0){let Dt=wf(ot.width,ot.height,E.format,E.type);for(let Ut of E.layerUpdates){let Bt=ot.data.subarray(Ut*Dt/ot.data.BYTES_PER_ELEMENT,(Ut+1)*Dt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,Ut,ot.width,ot.height,1,dt,Bt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,ot.width,ot.height,at.depth,dt,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,St,Pt,ot.width,ot.height,at.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,ot.width,ot.height,at.depth,dt,zt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,St,Pt,ot.width,ot.height,at.depth,0,dt,zt,ot.data)}else{W&&ht&&e.texStorage2D(n.TEXTURE_2D,Nt,Pt,It[0].width,It[0].height);for(let St=0,bt=It.length;St<bt;St++)ot=It[St],E.format!==Wn?dt!==null?W?Tt&&e.compressedTexSubImage2D(n.TEXTURE_2D,St,0,0,ot.width,ot.height,dt,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,St,Pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,ot.width,ot.height,dt,zt,ot.data):e.texImage2D(n.TEXTURE_2D,St,Pt,ot.width,ot.height,0,dt,zt,ot.data)}else if(E.isDataArrayTexture)if(W){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Pt,at.width,at.height,at.depth),Tt)if(E.layerUpdates.size>0){let St=wf(at.width,at.height,E.format,E.type);for(let bt of E.layerUpdates){let Dt=at.data.subarray(bt*St/at.data.BYTES_PER_ELEMENT,(bt+1)*St/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,at.width,at.height,1,dt,zt,Dt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,zt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,at.width,at.height,at.depth,0,dt,zt,at.data);else if(E.isData3DTexture)W?(ht&&e.texStorage3D(n.TEXTURE_3D,Nt,Pt,at.width,at.height,at.depth),Tt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,zt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,at.width,at.height,at.depth,0,dt,zt,at.data);else if(E.isFramebufferTexture){if(ht)if(W)e.texStorage2D(n.TEXTURE_2D,Nt,Pt,at.width,at.height);else{let St=at.width,bt=at.height;for(let Dt=0;Dt<Nt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Pt,St,bt,0,dt,zt,null),St>>=1,bt>>=1}}else if(It.length>0){if(W&&ht){let St=wt(It[0]);e.texStorage2D(n.TEXTURE_2D,Nt,Pt,St.width,St.height)}for(let St=0,bt=It.length;St<bt;St++)ot=It[St],W?Tt&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,dt,zt,ot):e.texImage2D(n.TEXTURE_2D,St,Pt,dt,zt,ot);E.generateMipmaps=!1}else if(W){if(ht){let St=wt(at);e.texStorage2D(n.TEXTURE_2D,Nt,Pt,St.width,St.height)}Tt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,zt,at)}else e.texImage2D(n.TEXTURE_2D,0,Pt,dt,zt,at);_(E)&&x(st),Et.__version=Z.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function G(L,E,k){if(E.image.length!==6)return;let st=Rt(L,E),rt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+k);let Z=i.get(rt);if(rt.version!==Z.__version||st===!0){e.activeTexture(n.TEXTURE0+k);let Et=Ue.getPrimaries(Ue.workingColorSpace),V=E.colorSpace===ms?null:Ue.getPrimaries(E.colorSpace),it=E.colorSpace===ms||Et===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let tt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,dt=[];for(let bt=0;bt<6;bt++)!tt&&!at?dt[bt]=y(E.image[bt],!0,s.maxCubemapSize):dt[bt]=at?E.image[bt].image:E.image[bt],dt[bt]=pt(E,dt[bt]);let zt=dt[0],Pt=o.convert(E.format,E.colorSpace),ot=o.convert(E.type),It=w(E.internalFormat,Pt,ot,E.colorSpace),W=E.isVideoTexture!==!0,ht=Z.__version===void 0||st===!0,Tt=rt.dataReady,Nt=A(E,zt);J(n.TEXTURE_CUBE_MAP,E);let St;if(tt){W&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,It,zt.width,zt.height);for(let bt=0;bt<6;bt++){St=dt[bt].mipmaps;for(let Dt=0;Dt<St.length;Dt++){let Ut=St[Dt];E.format!==Wn?Pt!==null?W?Tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt,0,0,Ut.width,Ut.height,Pt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt,It,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt,0,0,Ut.width,Ut.height,Pt,ot,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt,It,Ut.width,Ut.height,0,Pt,ot,Ut.data)}}}else{if(St=E.mipmaps,W&&ht){St.length>0&&Nt++;let bt=wt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,It,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(at){W?Tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,dt[bt].width,dt[bt].height,Pt,ot,dt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,It,dt[bt].width,dt[bt].height,0,Pt,ot,dt[bt].data);for(let Dt=0;Dt<St.length;Dt++){let Bt=St[Dt].image[bt].image;W?Tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt+1,0,0,Bt.width,Bt.height,Pt,ot,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt+1,It,Bt.width,Bt.height,0,Pt,ot,Bt.data)}}else{W?Tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Pt,ot,dt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,It,Pt,ot,dt[bt]);for(let Dt=0;Dt<St.length;Dt++){let Ut=St[Dt];W?Tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt+1,0,0,Pt,ot,Ut.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Dt+1,It,Pt,ot,Ut.image[bt])}}}_(E)&&x(n.TEXTURE_CUBE_MAP),Z.__version=rt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function q(L,E,k,st,rt,Z){let Et=o.convert(k.format,k.colorSpace),V=o.convert(k.type),it=w(k.internalFormat,Et,V,k.colorSpace),tt=i.get(E),at=i.get(k);if(at.__renderTarget=E,!tt.__hasExternalTextures){let dt=Math.max(1,E.width>>Z),zt=Math.max(1,E.height>>Z);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,Z,it,dt,zt,E.depth,0,Et,V,null):e.texImage2D(rt,Z,it,dt,zt,0,Et,V,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,rt,at.__webglTexture,0,ut(E)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,rt,at.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(L,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){let st=E.depthTexture,rt=st&&st.isDepthTexture?st.type:null,Z=v(E.stencilBuffer,rt),Et=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=ut(E);Mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,Z,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,L)}else{let st=E.textures;for(let rt=0;rt<st.length;rt++){let Z=st[rt],Et=o.convert(Z.format,Z.colorSpace),V=o.convert(Z.type),it=w(Z.internalFormat,Et,V,Z.colorSpace),tt=ut(E);k&&Mt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,it,E.width,E.height):Mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,it,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,it,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(E.depthTexture);st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);let rt=st.__webglTexture,Z=ut(E);if(E.depthTexture.format===Ko)Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(E.depthTexture.format===cr)Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function B(L){let E=i.get(L),k=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let st=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){let rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",rt)};st.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=st}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let st=L.texture.mipmaps;st&&st.length>0?Q(E.__webglFramebuffer[0],L):Q(E.__webglFramebuffer,L)}else if(k){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=n.createRenderbuffer(),ct(E.__webglDepthbuffer[st],L,!1);else{let rt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,Z)}}else{let st=L.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ct(E.__webglDepthbuffer,L,!1);else{let rt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,Z)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(L,E,k){let st=i.get(L);E!==void 0&&q(st.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&B(L)}function z(L){let E=L.texture,k=i.get(L),st=i.get(E);L.addEventListener("dispose",C);let rt=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Et=rt.length>1;if(Et||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=E.version,r.memory.textures++),Z){k.__webglFramebuffer=[];for(let V=0;V<6;V++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[V]=[];for(let it=0;it<E.mipmaps.length;it++)k.__webglFramebuffer[V][it]=n.createFramebuffer()}else k.__webglFramebuffer[V]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let V=0;V<E.mipmaps.length;V++)k.__webglFramebuffer[V]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Et)for(let V=0,it=rt.length;V<it;V++){let tt=i.get(rt[V]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&Mt(L)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let V=0;V<rt.length;V++){let it=rt[V];k.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[V]);let tt=o.convert(it.format,it.colorSpace),at=o.convert(it.type),dt=w(it.internalFormat,tt,at,it.colorSpace,L.isXRRenderTarget===!0),zt=ut(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,dt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,k.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),J(n.TEXTURE_CUBE_MAP,E);for(let V=0;V<6;V++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)q(k.__webglFramebuffer[V][it],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it);else q(k.__webglFramebuffer[V],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);_(E)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let V=0,it=rt.length;V<it;V++){let tt=rt[V],at=i.get(tt),dt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,at.__webglTexture),J(dt,tt),q(k.__webglFramebuffer,L,tt,n.COLOR_ATTACHMENT0+V,dt,0),_(tt)&&x(dt)}e.unbindTexture()}else{let V=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(V=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(V,st.__webglTexture),J(V,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)q(k.__webglFramebuffer[it],L,E,n.COLOR_ATTACHMENT0,V,it);else q(k.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,V,0);_(E)&&x(V),e.unbindTexture()}L.depthBuffer&&B(L)}function K(L){let E=L.textures;for(let k=0,st=E.length;k<st;k++){let rt=E[k];if(_(rt)){let Z=S(L),Et=i.get(rt).__webglTexture;e.bindTexture(Z,Et),x(Z),e.unbindTexture()}}}let nt=[],lt=[];function gt(L){if(L.samples>0){if(Mt(L)===!1){let E=L.textures,k=L.width,st=L.height,rt=n.COLOR_BUFFER_BIT,Z=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(L),V=E.length>1;if(V)for(let tt=0;tt<E.length;tt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let it=L.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[tt]);let at=i.get(E[tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,k,st,0,0,k,st,rt,n.NEAREST),c===!0&&(nt.length=0,lt.length=0,nt.push(n.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(nt.push(Z),lt.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let tt=0;tt<E.length;tt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[tt]);let at=i.get(E[tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.TEXTURE_2D,at,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ut(L){return Math.min(s.maxSamples,L.samples)}function Mt(L){let E=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(L){let E=r.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function pt(L,E){let k=L.colorSpace,st=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==co&&k!==ms&&(Ue.getTransfer(k)===Ge?(st!==Wn||rt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=et,this.setupRenderTarget=z,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Mt}function nv(n,t){function e(i,s=ms){let o,r=Ue.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===af)return n.BYTE;if(i===cf)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===rr)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===uf)return n.RGB;if(i===Wn)return n.RGBA;if(i===Ko)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===Yc)return n.RED;if(i===$c)return n.RED_INTEGER;if(i===df)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===xa)if(r===Ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===jc||i===Qc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tl||i===el||i===nl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===tl||i===el)return r===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===il||i===sl||i===ol||i===rl||i===al||i===cl||i===ll||i===hl||i===fl||i===ul||i===dl||i===pl||i===ml||i===gl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===il)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===_l||i===yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===xl)return r===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===bl||i===Ml||i===wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
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

}`,Nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ea(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new pi({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Of=class extends Wi{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",c=1,l=null,f=null,h=null,d=null,u=null,p=null,y=typeof XRWebGLBinding<"u",_=new Nf,x={},S=e.getContextAttributes(),w=null,v=null,A=[],P=[],C=new le,M=null,m=new Vn;m.viewport=new Qe;let g=new Vn;g.viewport=new Qe;let b=[m,g],T=new Ic,I=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let G=A[j];return G===void 0&&(G=new Qo,A[j]=G),G.getTargetRaySpace()},this.getControllerGrip=function(j){let G=A[j];return G===void 0&&(G=new Qo,A[j]=G),G.getGripSpace()},this.getHand=function(j){let G=A[j];return G===void 0&&(G=new Qo,A[j]=G),G.getHandSpace()};function D(j){let G=P.indexOf(j.inputSource);if(G===-1)return;let q=A[G];q!==void 0&&(q.update(j.inputSource,j.frame,l||r),q.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let j=0;j<A.length;j++){let G=P[j];G!==null&&(P[j]=null,A[j].disconnect(G))}I=null,R=null,_.reset();for(let j in x)delete x[j];t.setRenderTarget(w),u=null,d=null,h=null,s=null,v=null,mt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ct=null,Q=null;S.depth&&(Q=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=S.stencil?cr:Ko,ct=S.stencil?ar:Bs);let B={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(B),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Xi(d.textureWidth,d.textureHeight,{format:Wn,type:Ni,depthTexture:new ta(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Xi(u.framebufferWidth,u.framebufferHeight,{format:Wn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(j){for(let G=0;G<j.removed.length;G++){let q=j.removed[G],ct=P.indexOf(q);ct>=0&&(P[ct]=null,A[ct].disconnect(q))}for(let G=0;G<j.added.length;G++){let q=j.added[G],ct=P.indexOf(q);if(ct===-1){for(let B=0;B<A.length;B++)if(B>=P.length){P.push(q),ct=B;break}else if(P[B]===null){P[B]=q,ct=B;break}if(ct===-1)break}let Q=A[ct];Q&&Q.connect(q)}}let U=new X,F=new X;function Y(j,G,q){U.setFromMatrixPosition(G.matrixWorld),F.setFromMatrixPosition(q.matrixWorld);let ct=U.distanceTo(F),Q=G.projectionMatrix.elements,B=q.projectionMatrix.elements,et=Q[14]/(Q[10]-1),z=Q[14]/(Q[10]+1),K=(Q[9]+1)/Q[5],nt=(Q[9]-1)/Q[5],lt=(Q[8]-1)/Q[0],gt=(B[8]+1)/B[0],ut=et*lt,Mt=et*gt,yt=ct/(-lt+gt),pt=yt*-lt;if(G.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pt),j.translateZ(yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Q[10]===-1)j.projectionMatrix.copy(G.projectionMatrix),j.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let wt=et+yt,L=z+yt,E=ut-pt,k=Mt+(ct-pt),st=K*z/L*wt,rt=nt*z/L*wt;j.projectionMatrix.makePerspective(E,k,st,rt,wt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,G){G===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(G.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let G=j.near,q=j.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(q=_.depthFar)),T.near=g.near=m.near=G,T.far=g.far=m.far=q,(I!==T.near||R!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,R=T.far),T.layers.mask=j.layers.mask|6,m.layers.mask=T.layers.mask&3,g.layers.mask=T.layers.mask&5;let ct=j.parent,Q=T.cameras;$(T,ct);for(let B=0;B<Q.length;B++)$(Q[B],ct);Q.length===2?Y(T,m,g):T.projectionMatrix.copy(m.projectionMatrix),J(j,T,ct)};function J(j,G,q){q===null?j.matrix.copy(G.matrixWorld):(j.matrix.copy(q.matrixWorld),j.matrix.invert(),j.matrix.multiply(G.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(G.projectionMatrix),j.projectionMatrixInverse.copy(G.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)},this.getCameraTexture=function(j){return x[j]};let Rt=null;function vt(j,G){if(f=G.getViewerPose(l||r),p=G,f!==null){let q=f.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let ct=!1;q.length!==T.cameras.length&&(T.cameras.length=0,ct=!0);for(let z=0;z<q.length;z++){let K=q[z],nt=null;if(u!==null)nt=u.getViewport(K);else{let gt=h.getViewSubImage(d,K);nt=gt.viewport,z===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let lt=b[z];lt===void 0&&(lt=new Vn,lt.layers.enable(z),lt.viewport=new Qe,b[z]=lt),lt.matrix.fromArray(K.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(K.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(nt.x,nt.y,nt.width,nt.height),z===0&&(T.matrix.copy(lt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ct===!0&&T.cameras.push(lt)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let z=h.getDepthInformation(q[0]);z&&z.isValid&&z.texture&&_.init(z,s.renderState)}if(Q&&Q.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let z=0;z<q.length;z++){let K=q[z].camera;if(K){let nt=x[K];nt||(nt=new ea,x[K]=nt);let lt=h.getCameraImage(K);nt.sourceTexture=lt}}}}for(let q=0;q<A.length;q++){let ct=P[q],Q=A[q];ct!==null&&Q!==void 0&&Q.update(ct,G,l||r)}Rt&&Rt(j,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),p=null}let mt=new F0;mt.setAnimationLoop(vt),this.setAnimationLoop=function(j){Rt=j},this.dispose=function(){}}},_o=new Ui,ov=new Ze;function rv(n,t){function e(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,vf(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function s(_,x,S,w,v){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(_,x):x.isMeshToonMaterial?(o(_,x),h(_,x)):x.isMeshPhongMaterial?(o(_,x),f(_,x)):x.isMeshStandardMaterial?(o(_,x),d(_,x),x.isMeshPhysicalMaterial&&u(_,x,v)):x.isMeshMatcapMaterial?(o(_,x),p(_,x)):x.isMeshDepthMaterial?o(_,x):x.isMeshDistanceMaterial?(o(_,x),y(_,x)):x.isMeshNormalMaterial?o(_,x):x.isLineBasicMaterial?(r(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?c(_,x,S,w):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,e(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Qn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,e(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Qn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,e(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,e(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);let S=t.get(x),w=S.envMap,v=S.envMapRotation;w&&(_.envMap.value=w,_o.copy(v),_o.x*=-1,_o.y*=-1,_o.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),_.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(_o)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,_.aoMapTransform))}function r(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function c(_,x,S,w){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*S,_.scale.value=w*.5,x.map&&(_.map.value=x.map,e(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function f(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function h(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function d(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function u(_,x,S){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,x){x.matcap&&(_.matcap.value=x.matcap)}function y(_,x){let S=t.get(x).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function av(n,t,e,i){let s={},o={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){let v=w.program;i.uniformBlockBinding(S,v)}function l(S,w){let v=s[S.id];v===void 0&&(p(S),v=f(S),s[S.id]=v,S.addEventListener("dispose",_));let A=w.program;i.updateUBOMapping(S,A);let P=t.render.frame;o[S.id]!==P&&(d(S),o[S.id]=P)}function f(S){let w=h();S.__bindingPointIndex=w;let v=n.createBuffer(),A=S.__size,P=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let w=s[S.id],v=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,C=v.length;P<C;P++){let M=Array.isArray(v[P])?v[P]:[v[P]];for(let m=0,g=M.length;m<g;m++){let b=M[m];if(u(b,P,m,A)===!0){let T=b.__offset,I=Array.isArray(b.value)?b.value:[b.value],R=0;for(let D=0;D<I.length;D++){let N=I[D],H=y(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,T+R,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,R),R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(S,w,v,A){let P=S.value,C=w+"_"+v;if(A[C]===void 0)return typeof P=="number"||typeof P=="boolean"?A[C]=P:A[C]=P.clone(),!0;{let M=A[C];if(typeof P=="number"||typeof P=="boolean"){if(M!==P)return A[C]=P,!0}else if(M.equals(P)===!1)return M.copy(P),!0}return!1}function p(S){let w=S.uniforms,v=0,A=16;for(let C=0,M=w.length;C<M;C++){let m=Array.isArray(w[C])?w[C]:[w[C]];for(let g=0,b=m.length;g<b;g++){let T=m[g],I=Array.isArray(T.value)?T.value:[T.value];for(let R=0,D=I.length;R<D;R++){let N=I[R],H=y(N),U=v%A,F=U%H.boundary,Y=U+F;v+=F,Y!==0&&A-Y<H.storage&&(v+=A-Y),T.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=H.storage}}}let P=v%A;return P>0&&(v+=A-P),S.__size=v,S.__cache={},this}function y(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function _(S){let w=S.target;w.removeEventListener("dispose",_);let v=r.indexOf(w.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function x(){for(let S in s)n.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:x}}var Rl=class{constructor(t={}){let{canvas:e=r0(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=r;let p=new Uint32Array(4),y=new Int32Array(4),_=null,x=null,S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=on;let P=0,C=0,M=null,m=-1,g=null,b=new Qe,T=new Qe,I=null,R=new he(0),D=0,N=e.width,H=e.height,U=1,F=null,Y=null,$=new Qe(0,0,N,H),J=new Qe(0,0,N,H),Rt=!1,vt=new er,mt=!1,j=!1,G=new Ze,q=new X,ct=new Qe,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function et(){return M===null?U:1}let z=i;function K(O,_t){return e.getContext(O,_t)}try{let O={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",St,!1),z===null){let _t="webgl2";if(z=K(_t,O),z===null)throw K(_t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let nt,lt,gt,ut,Mt,yt,pt,wt,L,E,k,st,rt,Z,Et,V,it,tt,at,dt,zt,Pt,ot,It;function W(){nt=new E_(z),nt.init(),Pt=new nv(z,nt),lt=new __(z,nt,t,Pt),gt=new tv(z,nt),lt.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),ut=new R_(z),Mt=new Hy,yt=new ev(z,nt,gt,Mt,lt,Pt,ut),pt=new v_(v),wt=new S_(v),L=new zg(z),ot=new g_(z,L),E=new T_(z,L,ut,ot),k=new P_(z,E,L,ut),at=new C_(z,lt,yt),V=new y_(Mt),st=new ky(v,pt,wt,nt,lt,ot,V),rt=new rv(v,Mt),Z=new Gy,Et=new Ky(nt),tt=new m_(v,pt,wt,gt,k,u,c),it=new jy(v,k,lt),It=new av(z,ut,lt,gt),dt=new x_(z,nt,ut),zt=new A_(z,nt,ut),ut.programs=st.programs,v.capabilities=lt,v.extensions=nt,v.properties=Mt,v.renderLists=Z,v.shadowMap=it,v.state=gt,v.info=ut}W();let ht=new Of(v,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let O=nt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=nt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(O){O!==void 0&&(U=O,this.setSize(N,H,!1))},this.getSize=function(O){return O.set(N,H)},this.setSize=function(O,_t,At=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=O,H=_t,e.width=Math.floor(O*U),e.height=Math.floor(_t*U),At===!0&&(e.style.width=O+"px",e.style.height=_t+"px"),this.setViewport(0,0,O,_t)},this.getDrawingBufferSize=function(O){return O.set(N*U,H*U).floor()},this.setDrawingBufferSize=function(O,_t,At){N=O,H=_t,U=At,e.width=Math.floor(O*At),e.height=Math.floor(_t*At),this.setViewport(0,0,O,_t)},this.getCurrentViewport=function(O){return O.copy(b)},this.getViewport=function(O){return O.copy($)},this.setViewport=function(O,_t,At,Ct){O.isVector4?$.set(O.x,O.y,O.z,O.w):$.set(O,_t,At,Ct),gt.viewport(b.copy($).multiplyScalar(U).round())},this.getScissor=function(O){return O.copy(J)},this.setScissor=function(O,_t,At,Ct){O.isVector4?J.set(O.x,O.y,O.z,O.w):J.set(O,_t,At,Ct),gt.scissor(T.copy(J).multiplyScalar(U).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(O){gt.setScissorTest(Rt=O)},this.setOpaqueSort=function(O){F=O},this.setTransparentSort=function(O){Y=O},this.getClearColor=function(O){return O.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(O=!0,_t=!0,At=!0){let Ct=0;if(O){let xt=!1;if(M!==null){let Lt=M.texture.format;xt=Lt===Kc||Lt===qc||Lt===$c}if(xt){let Lt=M.texture.type,Ot=Lt===Ni||Lt===Bs||Lt===or||Lt===ar||Lt===Wc||Lt===Xc,Qt=tt.getClearColor(),Jt=tt.getClearAlpha(),ce=Qt.r,fe=Qt.g,$t=Qt.b;Ot?(p[0]=ce,p[1]=fe,p[2]=$t,p[3]=Jt,z.clearBufferuiv(z.COLOR,0,p)):(y[0]=ce,y[1]=fe,y[2]=$t,y[3]=Jt,z.clearBufferiv(z.COLOR,0,y))}else Ct|=z.COLOR_BUFFER_BIT}_t&&(Ct|=z.DEPTH_BUFFER_BIT),At&&(Ct|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),tt.dispose(),Z.dispose(),Et.dispose(),Mt.dispose(),pt.dispose(),wt.dispose(),k.dispose(),ot.dispose(),It.dispose(),st.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",me),ht.removeEventListener("sessionend",we),Fe.stop()};function Tt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let O=ut.autoReset,_t=it.enabled,At=it.autoUpdate,Ct=it.needsUpdate,xt=it.type;W(),ut.autoReset=O,it.enabled=_t,it.autoUpdate=At,it.needsUpdate=Ct,it.type=xt}function St(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function bt(O){let _t=O.target;_t.removeEventListener("dispose",bt),Dt(_t)}function Dt(O){Ut(O),Mt.remove(O)}function Ut(O){let _t=Mt.get(O).programs;_t!==void 0&&(_t.forEach(function(At){st.releaseProgram(At)}),O.isShaderMaterial&&st.releaseShaderCache(O))}this.renderBufferDirect=function(O,_t,At,Ct,xt,Lt){_t===null&&(_t=Q);let Ot=xt.isMesh&&xt.matrixWorld.determinant()<0,Qt=vi(O,_t,At,Ct,xt);gt.setMaterial(Ct,Ot);let Jt=At.index,ce=1;if(Ct.wireframe===!0){if(Jt=E.getWireframeAttribute(At),Jt===void 0)return;ce=2}let fe=At.drawRange,$t=At.attributes.position,ue=fe.start*ce,Pe=(fe.start+fe.count)*ce;Lt!==null&&(ue=Math.max(ue,Lt.start*ce),Pe=Math.min(Pe,(Lt.start+Lt.count)*ce)),Jt!==null?(ue=Math.max(ue,0),Pe=Math.min(Pe,Jt.count)):$t!=null&&(ue=Math.max(ue,0),Pe=Math.min(Pe,$t.count));let Ht=Pe-ue;if(Ht<0||Ht===1/0)return;ot.setup(xt,Ct,Qt,At,Jt);let Ft,te=dt;if(Jt!==null&&(Ft=L.get(Jt),te=zt,te.setIndex(Ft)),xt.isMesh)Ct.wireframe===!0?(gt.setLineWidth(Ct.wireframeLinewidth*et()),te.setMode(z.LINES)):te.setMode(z.TRIANGLES);else if(xt.isLine){let Wt=Ct.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*et()),xt.isLineSegments?te.setMode(z.LINES):xt.isLineLoop?te.setMode(z.LINE_LOOP):te.setMode(z.LINE_STRIP)}else xt.isPoints?te.setMode(z.POINTS):xt.isSprite&&te.setMode(z.TRIANGLES);if(xt.isBatchedMesh)if(xt._multiDrawInstances!==null)Jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount,xt._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))te.renderMultiDraw(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount);else{let Wt=xt._multiDrawStarts,ne=xt._multiDrawCounts,ie=xt._multiDrawCount,Ve=Jt?L.get(Jt).bytesPerElement:1,On=Mt.get(Ct).currentProgram.getUniforms();for(let Gt=0;Gt<ie;Gt++)On.setValue(z,"_gl_DrawID",Gt),te.render(Wt[Gt]/Ve,ne[Gt])}else if(xt.isInstancedMesh)te.renderInstances(ue,Ht,xt.count);else if(At.isInstancedBufferGeometry){let Wt=At._maxInstanceCount!==void 0?At._maxInstanceCount:1/0,ne=Math.min(At.instanceCount,Wt);te.renderInstances(ue,Ht,ne)}else te.render(ue,Ht)};function Bt(O,_t,At){O.transparent===!0&&O.side===zn&&O.forceSinglePass===!1?(O.side=Qn,O.needsUpdate=!0,He(O,_t,At),O.side=hs,O.needsUpdate=!0,He(O,_t,At),O.side=zn):He(O,_t,At)}this.compile=function(O,_t,At=null){At===null&&(At=O),x=Et.get(At),x.init(_t),w.push(x),At.traverseVisible(function(xt){xt.isLight&&xt.layers.test(_t.layers)&&(x.pushLight(xt),xt.castShadow&&x.pushShadow(xt))}),O!==At&&O.traverseVisible(function(xt){xt.isLight&&xt.layers.test(_t.layers)&&(x.pushLight(xt),xt.castShadow&&x.pushShadow(xt))}),x.setupLights();let Ct=new Set;return O.traverse(function(xt){if(!(xt.isMesh||xt.isPoints||xt.isLine||xt.isSprite))return;let Lt=xt.material;if(Lt)if(Array.isArray(Lt))for(let Ot=0;Ot<Lt.length;Ot++){let Qt=Lt[Ot];Bt(Qt,At,xt),Ct.add(Qt)}else Bt(Lt,At,xt),Ct.add(Lt)}),x=w.pop(),Ct},this.compileAsync=function(O,_t,At=null){let Ct=this.compile(O,_t,At);return new Promise(xt=>{function Lt(){if(Ct.forEach(function(Ot){Mt.get(Ot).currentProgram.isReady()&&Ct.delete(Ot)}),Ct.size===0){xt(O);return}setTimeout(Lt,10)}nt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Vt=null;function Yt(O){Vt&&Vt(O)}function me(){Fe.stop()}function we(){Fe.start()}let Fe=new F0;Fe.setAnimationLoop(Yt),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(O){Vt=O,ht.setAnimationLoop(O),O===null?Fe.stop():Fe.start()},ht.addEventListener("sessionstart",me),ht.addEventListener("sessionend",we),this.render=function(O,_t){if(_t!==void 0&&_t.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_t.parent===null&&_t.matrixWorldAutoUpdate===!0&&_t.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(_t),_t=ht.getCamera()),O.isScene===!0&&O.onBeforeRender(v,O,_t,M),x=Et.get(O,w.length),x.init(_t),w.push(x),G.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),vt.setFromProjectionMatrix(G,zi,_t.reversedDepth),j=this.localClippingEnabled,mt=V.init(this.clippingPlanes,j),_=Z.get(O,S.length),_.init(),S.push(_),ht.enabled===!0&&ht.isPresenting===!0){let Lt=v.xr.getDepthSensingMesh();Lt!==null&&pe(Lt,_t,-1/0,v.sortObjects)}pe(O,_t,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(F,Y),B=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,B&&tt.addToRenderList(_,O),this.info.render.frame++,mt===!0&&V.beginShadows();let At=x.state.shadowsArray;it.render(At,O,_t),mt===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();let Ct=_.opaque,xt=_.transmissive;if(x.setupLights(),_t.isArrayCamera){let Lt=_t.cameras;if(xt.length>0)for(let Ot=0,Qt=Lt.length;Ot<Qt;Ot++){let Jt=Lt[Ot];Xe(Ct,xt,O,Jt)}B&&tt.render(O);for(let Ot=0,Qt=Lt.length;Ot<Qt;Ot++){let Jt=Lt[Ot];Me(_,O,Jt,Jt.viewport)}}else xt.length>0&&Xe(Ct,xt,O,_t),B&&tt.render(O),Me(_,O,_t);M!==null&&C===0&&(yt.updateMultisampleRenderTarget(M),yt.updateRenderTargetMipmap(M)),O.isScene===!0&&O.onAfterRender(v,O,_t),ot.resetDefaultState(),m=-1,g=null,w.pop(),w.length>0?(x=w[w.length-1],mt===!0&&V.setGlobalState(v.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function pe(O,_t,At,Ct){if(O.visible===!1)return;if(O.layers.test(_t.layers)){if(O.isGroup)At=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(_t);else if(O.isLight)x.pushLight(O),O.castShadow&&x.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||vt.intersectsSprite(O)){Ct&&ct.setFromMatrixPosition(O.matrixWorld).applyMatrix4(G);let Ot=k.update(O),Qt=O.material;Qt.visible&&_.push(O,Ot,Qt,At,ct.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||vt.intersectsObject(O))){let Ot=k.update(O),Qt=O.material;if(Ct&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),ct.copy(O.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ct.copy(Ot.boundingSphere.center)),ct.applyMatrix4(O.matrixWorld).applyMatrix4(G)),Array.isArray(Qt)){let Jt=Ot.groups;for(let ce=0,fe=Jt.length;ce<fe;ce++){let $t=Jt[ce],ue=Qt[$t.materialIndex];ue&&ue.visible&&_.push(O,Ot,ue,At,ct.z,$t)}}else Qt.visible&&_.push(O,Ot,Qt,At,ct.z,null)}}let Lt=O.children;for(let Ot=0,Qt=Lt.length;Ot<Qt;Ot++)pe(Lt[Ot],_t,At,Ct)}function Me(O,_t,At,Ct){let xt=O.opaque,Lt=O.transmissive,Ot=O.transparent;x.setupLightsView(At),mt===!0&&V.setGlobalState(v.clippingPlanes,At),Ct&&gt.viewport(b.copy(Ct)),xt.length>0&&fn(xt,_t,At),Lt.length>0&&fn(Lt,_t,At),Ot.length>0&&fn(Ot,_t,At),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Xe(O,_t,At,Ct){if((At.isScene===!0?At.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Ct.id]===void 0&&(x.state.transmissionRenderTarget[Ct.id]=new Xi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?rr:Ni,minFilter:$i,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Lt=x.state.transmissionRenderTarget[Ct.id],Ot=Ct.viewport||b;Lt.setSize(Ot.z*v.transmissionResolutionScale,Ot.w*v.transmissionResolutionScale);let Qt=v.getRenderTarget(),Jt=v.getActiveCubeFace(),ce=v.getActiveMipmapLevel();v.setRenderTarget(Lt),v.getClearColor(R),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),B&&tt.render(At);let fe=v.toneMapping;v.toneMapping=ps;let $t=Ct.viewport;if(Ct.viewport!==void 0&&(Ct.viewport=void 0),x.setupLightsView(Ct),mt===!0&&V.setGlobalState(v.clippingPlanes,Ct),fn(O,At,Ct),yt.updateMultisampleRenderTarget(Lt),yt.updateRenderTargetMipmap(Lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Pe=0,Ht=_t.length;Pe<Ht;Pe++){let Ft=_t[Pe],te=Ft.object,Wt=Ft.geometry,ne=Ft.material,ie=Ft.group;if(ne.side===zn&&te.layers.test(Ct.layers)){let Ve=ne.side;ne.side=Qn,ne.needsUpdate=!0,ti(te,At,Ct,Wt,ne,ie),ne.side=Ve,ne.needsUpdate=!0,ue=!0}}ue===!0&&(yt.updateMultisampleRenderTarget(Lt),yt.updateRenderTargetMipmap(Lt))}v.setRenderTarget(Qt,Jt,ce),v.setClearColor(R,D),$t!==void 0&&(Ct.viewport=$t),v.toneMapping=fe}function fn(O,_t,At){let Ct=_t.isScene===!0?_t.overrideMaterial:null;for(let xt=0,Lt=O.length;xt<Lt;xt++){let Ot=O[xt],Qt=Ot.object,Jt=Ot.geometry,ce=Ot.group,fe=Ot.material;fe.allowOverride===!0&&Ct!==null&&(fe=Ct),Qt.layers.test(At.layers)&&ti(Qt,_t,At,Jt,fe,ce)}}function ti(O,_t,At,Ct,xt,Lt){O.onBeforeRender(v,_t,At,Ct,xt,Lt),O.modelViewMatrix.multiplyMatrices(At.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),xt.onBeforeRender(v,_t,At,Ct,O,Lt),xt.transparent===!0&&xt.side===zn&&xt.forceSinglePass===!1?(xt.side=Qn,xt.needsUpdate=!0,v.renderBufferDirect(At,_t,Ct,xt,O,Lt),xt.side=hs,xt.needsUpdate=!0,v.renderBufferDirect(At,_t,Ct,xt,O,Lt),xt.side=zn):v.renderBufferDirect(At,_t,Ct,xt,O,Lt),O.onAfterRender(v,_t,At,Ct,xt,Lt)}function He(O,_t,At){_t.isScene!==!0&&(_t=Q);let Ct=Mt.get(O),xt=x.state.lights,Lt=x.state.shadowsArray,Ot=xt.state.version,Qt=st.getParameters(O,xt.state,Lt,_t,At),Jt=st.getProgramCacheKey(Qt),ce=Ct.programs;Ct.environment=O.isMeshStandardMaterial?_t.environment:null,Ct.fog=_t.fog,Ct.envMap=(O.isMeshStandardMaterial?wt:pt).get(O.envMap||Ct.environment),Ct.envMapRotation=Ct.environment!==null&&O.envMap===null?_t.environmentRotation:O.envMapRotation,ce===void 0&&(O.addEventListener("dispose",bt),ce=new Map,Ct.programs=ce);let fe=ce.get(Jt);if(fe!==void 0){if(Ct.currentProgram===fe&&Ct.lightsStateVersion===Ot)return Nn(O,Qt),fe}else Qt.uniforms=st.getUniforms(O),O.onBeforeCompile(Qt,v),fe=st.acquireProgram(Qt,Jt),ce.set(Jt,fe),Ct.uniforms=Qt.uniforms;let $t=Ct.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&($t.clippingPlanes=V.uniform),Nn(O,Qt),Ct.needsLights=ri(O),Ct.lightsStateVersion=Ot,Ct.needsLights&&($t.ambientLightColor.value=xt.state.ambient,$t.lightProbe.value=xt.state.probe,$t.directionalLights.value=xt.state.directional,$t.directionalLightShadows.value=xt.state.directionalShadow,$t.spotLights.value=xt.state.spot,$t.spotLightShadows.value=xt.state.spotShadow,$t.rectAreaLights.value=xt.state.rectArea,$t.ltc_1.value=xt.state.rectAreaLTC1,$t.ltc_2.value=xt.state.rectAreaLTC2,$t.pointLights.value=xt.state.point,$t.pointLightShadows.value=xt.state.pointShadow,$t.hemisphereLights.value=xt.state.hemi,$t.directionalShadowMap.value=xt.state.directionalShadowMap,$t.directionalShadowMatrix.value=xt.state.directionalShadowMatrix,$t.spotShadowMap.value=xt.state.spotShadowMap,$t.spotLightMatrix.value=xt.state.spotLightMatrix,$t.spotLightMap.value=xt.state.spotLightMap,$t.pointShadowMap.value=xt.state.pointShadowMap,$t.pointShadowMatrix.value=xt.state.pointShadowMatrix),Ct.currentProgram=fe,Ct.uniformsList=null,fe}function Ke(O){if(O.uniformsList===null){let _t=O.currentProgram.getUniforms();O.uniformsList=ur.seqWithValue(_t.seq,O.uniforms)}return O.uniformsList}function Nn(O,_t){let At=Mt.get(O);At.outputColorSpace=_t.outputColorSpace,At.batching=_t.batching,At.batchingColor=_t.batchingColor,At.instancing=_t.instancing,At.instancingColor=_t.instancingColor,At.instancingMorph=_t.instancingMorph,At.skinning=_t.skinning,At.morphTargets=_t.morphTargets,At.morphNormals=_t.morphNormals,At.morphColors=_t.morphColors,At.morphTargetsCount=_t.morphTargetsCount,At.numClippingPlanes=_t.numClippingPlanes,At.numIntersection=_t.numClipIntersection,At.vertexAlphas=_t.vertexAlphas,At.vertexTangents=_t.vertexTangents,At.toneMapping=_t.toneMapping}function vi(O,_t,At,Ct,xt){_t.isScene!==!0&&(_t=Q),yt.resetTextureUnits();let Lt=_t.fog,Ot=Ct.isMeshStandardMaterial?_t.environment:null,Qt=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:co,Jt=(Ct.isMeshStandardMaterial?wt:pt).get(Ct.envMap||Ot),ce=Ct.vertexColors===!0&&!!At.attributes.color&&At.attributes.color.itemSize===4,fe=!!At.attributes.tangent&&(!!Ct.normalMap||Ct.anisotropy>0),$t=!!At.morphAttributes.position,ue=!!At.morphAttributes.normal,Pe=!!At.morphAttributes.color,Ht=ps;Ct.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ht=v.toneMapping);let Ft=At.morphAttributes.position||At.morphAttributes.normal||At.morphAttributes.color,te=Ft!==void 0?Ft.length:0,Wt=Mt.get(Ct),ne=x.state.lights;if(mt===!0&&(j===!0||O!==g)){let Ye=O===g&&Ct.id===m;V.setState(Ct,O,Ye)}let ie=!1;Ct.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ne.state.version||Wt.outputColorSpace!==Qt||xt.isBatchedMesh&&Wt.batching===!1||!xt.isBatchedMesh&&Wt.batching===!0||xt.isBatchedMesh&&Wt.batchingColor===!0&&xt.colorTexture===null||xt.isBatchedMesh&&Wt.batchingColor===!1&&xt.colorTexture!==null||xt.isInstancedMesh&&Wt.instancing===!1||!xt.isInstancedMesh&&Wt.instancing===!0||xt.isSkinnedMesh&&Wt.skinning===!1||!xt.isSkinnedMesh&&Wt.skinning===!0||xt.isInstancedMesh&&Wt.instancingColor===!0&&xt.instanceColor===null||xt.isInstancedMesh&&Wt.instancingColor===!1&&xt.instanceColor!==null||xt.isInstancedMesh&&Wt.instancingMorph===!0&&xt.morphTexture===null||xt.isInstancedMesh&&Wt.instancingMorph===!1&&xt.morphTexture!==null||Wt.envMap!==Jt||Ct.fog===!0&&Wt.fog!==Lt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==V.numPlanes||Wt.numIntersection!==V.numIntersection)||Wt.vertexAlphas!==ce||Wt.vertexTangents!==fe||Wt.morphTargets!==$t||Wt.morphNormals!==ue||Wt.morphColors!==Pe||Wt.toneMapping!==Ht||Wt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,Wt.__version=Ct.version);let Ve=Wt.currentProgram;ie===!0&&(Ve=He(Ct,_t,xt));let On=!1,Gt=!1,Fn=!1,Le=Ve.getUniforms(),ve=Wt.uniforms;if(gt.useProgram(Ve.program)&&(On=!0,Gt=!0,Fn=!0),Ct.id!==m&&(m=Ct.id,Gt=!0),On||g!==O){gt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),Le.setValue(z,"projectionMatrix",O.projectionMatrix),Le.setValue(z,"viewMatrix",O.matrixWorldInverse);let un=Le.map.cameraPosition;un!==void 0&&un.setValue(z,q.setFromMatrixPosition(O.matrixWorld)),lt.logarithmicDepthBuffer&&Le.setValue(z,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(Ct.isMeshPhongMaterial||Ct.isMeshToonMaterial||Ct.isMeshLambertMaterial||Ct.isMeshBasicMaterial||Ct.isMeshStandardMaterial||Ct.isShaderMaterial)&&Le.setValue(z,"isOrthographic",O.isOrthographicCamera===!0),g!==O&&(g=O,Gt=!0,Fn=!0)}if(xt.isSkinnedMesh){Le.setOptional(z,xt,"bindMatrix"),Le.setOptional(z,xt,"bindMatrixInverse");let Ye=xt.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Le.setValue(z,"boneTexture",Ye.boneTexture,yt))}xt.isBatchedMesh&&(Le.setOptional(z,xt,"batchingTexture"),Le.setValue(z,"batchingTexture",xt._matricesTexture,yt),Le.setOptional(z,xt,"batchingIdTexture"),Le.setValue(z,"batchingIdTexture",xt._indirectTexture,yt),Le.setOptional(z,xt,"batchingColorTexture"),xt._colorsTexture!==null&&Le.setValue(z,"batchingColorTexture",xt._colorsTexture,yt));let Zt=At.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&at.update(xt,At,Ve),(Gt||Wt.receiveShadow!==xt.receiveShadow)&&(Wt.receiveShadow=xt.receiveShadow,Le.setValue(z,"receiveShadow",xt.receiveShadow)),Ct.isMeshGouraudMaterial&&Ct.envMap!==null&&(ve.envMap.value=Jt,ve.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),Ct.isMeshStandardMaterial&&Ct.envMap===null&&_t.environment!==null&&(ve.envMapIntensity.value=_t.environmentIntensity),Gt&&(Le.setValue(z,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Tn(ve,Fn),Lt&&Ct.fog===!0&&rt.refreshFogUniforms(ve,Lt),rt.refreshMaterialUniforms(ve,Ct,U,H,x.state.transmissionRenderTarget[O.id]),ur.upload(z,Ke(Wt),ve,yt)),Ct.isShaderMaterial&&Ct.uniformsNeedUpdate===!0&&(ur.upload(z,Ke(Wt),ve,yt),Ct.uniformsNeedUpdate=!1),Ct.isSpriteMaterial&&Le.setValue(z,"center",xt.center),Le.setValue(z,"modelViewMatrix",xt.modelViewMatrix),Le.setValue(z,"normalMatrix",xt.normalMatrix),Le.setValue(z,"modelMatrix",xt.matrixWorld),Ct.isShaderMaterial||Ct.isRawShaderMaterial){let Ye=Ct.uniformsGroups;for(let un=0,Pn=Ye.length;un<Pn;un++){let ke=Ye[un];It.update(ke,Ve),It.bind(ke,Ve)}}return Ve}function Tn(O,_t){O.ambientLightColor.needsUpdate=_t,O.lightProbe.needsUpdate=_t,O.directionalLights.needsUpdate=_t,O.directionalLightShadows.needsUpdate=_t,O.pointLights.needsUpdate=_t,O.pointLightShadows.needsUpdate=_t,O.spotLights.needsUpdate=_t,O.spotLightShadows.needsUpdate=_t,O.rectAreaLights.needsUpdate=_t,O.hemisphereLights.needsUpdate=_t}function ri(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(O,_t,At){let Ct=Mt.get(O);Ct.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,Ct.__autoAllocateDepthBuffer===!1&&(Ct.__useRenderToTexture=!1),Mt.get(O.texture).__webglTexture=_t,Mt.get(O.depthTexture).__webglTexture=Ct.__autoAllocateDepthBuffer?void 0:At,Ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,_t){let At=Mt.get(O);At.__webglFramebuffer=_t,At.__useDefaultFramebuffer=_t===void 0};let bi=z.createFramebuffer();this.setRenderTarget=function(O,_t=0,At=0){M=O,P=_t,C=At;let Ct=!0,xt=null,Lt=!1,Ot=!1;if(O){let Jt=Mt.get(O);if(Jt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(z.FRAMEBUFFER,null),Ct=!1;else if(Jt.__webglFramebuffer===void 0)yt.setupRenderTarget(O);else if(Jt.__hasExternalTextures)yt.rebindTextures(O,Mt.get(O.texture).__webglTexture,Mt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let $t=O.depthTexture;if(Jt.__boundDepthTexture!==$t){if($t!==null&&Mt.has($t)&&(O.width!==$t.image.width||O.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(O)}}let ce=O.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Ot=!0);let fe=Mt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(fe[_t])?xt=fe[_t][At]:xt=fe[_t],Lt=!0):O.samples>0&&yt.useMultisampledRTT(O)===!1?xt=Mt.get(O).__webglMultisampledFramebuffer:Array.isArray(fe)?xt=fe[At]:xt=fe,b.copy(O.viewport),T.copy(O.scissor),I=O.scissorTest}else b.copy($).multiplyScalar(U).floor(),T.copy(J).multiplyScalar(U).floor(),I=Rt;if(At!==0&&(xt=bi),gt.bindFramebuffer(z.FRAMEBUFFER,xt)&&Ct&&gt.drawBuffers(O,xt),gt.viewport(b),gt.scissor(T),gt.setScissorTest(I),Lt){let Jt=Mt.get(O.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Jt.__webglTexture,At)}else if(Ot){let Jt=_t;for(let ce=0;ce<O.textures.length;ce++){let fe=Mt.get(O.textures[ce]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ce,fe.__webglTexture,At,Jt)}}else if(O!==null&&At!==0){let Jt=Mt.get(O.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Jt.__webglTexture,At)}m=-1},this.readRenderTargetPixels=function(O,_t,At,Ct,xt,Lt,Ot,Qt=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Mt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ot!==void 0&&(Jt=Jt[Ot]),Jt){gt.bindFramebuffer(z.FRAMEBUFFER,Jt);try{let ce=O.textures[Qt],fe=ce.format,$t=ce.type;if(!lt.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_t>=0&&_t<=O.width-Ct&&At>=0&&At<=O.height-xt&&(O.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qt),z.readPixels(_t,At,Ct,xt,Pt.convert(fe),Pt.convert($t),Lt))}finally{let ce=M!==null?Mt.get(M).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(O,_t,At,Ct,xt,Lt,Ot,Qt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Mt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ot!==void 0&&(Jt=Jt[Ot]),Jt)if(_t>=0&&_t<=O.width-Ct&&At>=0&&At<=O.height-xt){gt.bindFramebuffer(z.FRAMEBUFFER,Jt);let ce=O.textures[Qt],fe=ce.format,$t=ce.type;if(!lt.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),O.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qt),z.readPixels(_t,At,Ct,xt,Pt.convert(fe),Pt.convert($t),0);let Pe=M!==null?Mt.get(M).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,Pe);let Ht=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await a0(z,Ht,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(ue),z.deleteSync(Ht),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,_t=null,At=0){let Ct=Math.pow(2,-At),xt=Math.floor(O.image.width*Ct),Lt=Math.floor(O.image.height*Ct),Ot=_t!==null?_t.x:0,Qt=_t!==null?_t.y:0;yt.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,At,0,0,Ot,Qt,xt,Lt),gt.unbindTexture()};let Se=z.createFramebuffer(),Re=z.createFramebuffer();this.copyTextureToTexture=function(O,_t,At=null,Ct=null,xt=0,Lt=null){Lt===null&&(xt!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=xt,xt=0):Lt=0);let Ot,Qt,Jt,ce,fe,$t,ue,Pe,Ht,Ft=O.isCompressedTexture?O.mipmaps[Lt]:O.image;if(At!==null)Ot=At.max.x-At.min.x,Qt=At.max.y-At.min.y,Jt=At.isBox3?At.max.z-At.min.z:1,ce=At.min.x,fe=At.min.y,$t=At.isBox3?At.min.z:0;else{let Zt=Math.pow(2,-xt);Ot=Math.floor(Ft.width*Zt),Qt=Math.floor(Ft.height*Zt),O.isDataArrayTexture?Jt=Ft.depth:O.isData3DTexture?Jt=Math.floor(Ft.depth*Zt):Jt=1,ce=0,fe=0,$t=0}Ct!==null?(ue=Ct.x,Pe=Ct.y,Ht=Ct.z):(ue=0,Pe=0,Ht=0);let te=Pt.convert(_t.format),Wt=Pt.convert(_t.type),ne;_t.isData3DTexture?(yt.setTexture3D(_t,0),ne=z.TEXTURE_3D):_t.isDataArrayTexture||_t.isCompressedArrayTexture?(yt.setTexture2DArray(_t,0),ne=z.TEXTURE_2D_ARRAY):(yt.setTexture2D(_t,0),ne=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,_t.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,_t.unpackAlignment);let ie=z.getParameter(z.UNPACK_ROW_LENGTH),Ve=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),Gt=z.getParameter(z.UNPACK_SKIP_ROWS),Fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ce),z.pixelStorei(z.UNPACK_SKIP_ROWS,fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);let Le=O.isDataArrayTexture||O.isData3DTexture,ve=_t.isDataArrayTexture||_t.isData3DTexture;if(O.isDepthTexture){let Zt=Mt.get(O),Ye=Mt.get(_t),un=Mt.get(Zt.__renderTarget),Pn=Mt.get(Ye.__renderTarget);gt.bindFramebuffer(z.READ_FRAMEBUFFER,un.__webglFramebuffer),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let ke=0;ke<Jt;ke++)Le&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,xt,$t+ke),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.get(_t).__webglTexture,Lt,Ht+ke)),z.blitFramebuffer(ce,fe,Ot,Qt,ue,Pe,Ot,Qt,z.DEPTH_BUFFER_BIT,z.NEAREST);gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(xt!==0||O.isRenderTargetTexture||Mt.has(O)){let Zt=Mt.get(O),Ye=Mt.get(_t);gt.bindFramebuffer(z.READ_FRAMEBUFFER,Se),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Re);for(let un=0;un<Jt;un++)Le?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Zt.__webglTexture,xt,$t+un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Zt.__webglTexture,xt),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.__webglTexture,Lt,Ht+un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ye.__webglTexture,Lt),xt!==0?z.blitFramebuffer(ce,fe,Ot,Qt,ue,Pe,Ot,Qt,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(ne,Lt,ue,Pe,Ht+un,ce,fe,Ot,Qt):z.copyTexSubImage2D(ne,Lt,ue,Pe,ce,fe,Ot,Qt);gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?O.isDataTexture||O.isData3DTexture?z.texSubImage3D(ne,Lt,ue,Pe,Ht,Ot,Qt,Jt,te,Wt,Ft.data):_t.isCompressedArrayTexture?z.compressedTexSubImage3D(ne,Lt,ue,Pe,Ht,Ot,Qt,Jt,te,Ft.data):z.texSubImage3D(ne,Lt,ue,Pe,Ht,Ot,Qt,Jt,te,Wt,Ft):O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,ue,Pe,Ot,Qt,te,Wt,Ft.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,ue,Pe,Ft.width,Ft.height,te,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Lt,ue,Pe,Ot,Qt,te,Wt,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,ie),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fn),Lt===0&&_t.generateMipmaps&&z.generateMipmap(ne),gt.unbindTexture()},this.initRenderTarget=function(O){Mt.get(O).__webglFramebuffer===void 0&&yt.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?yt.setTextureCube(O,0):O.isData3DTexture?yt.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?yt.setTexture2DArray(O,0):yt.setTexture2D(O,0),gt.unbindTexture()},this.resetState=function(){P=0,C=0,M=null,gt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}};var G0={type:"change"},kf={type:"start"},X0={type:"end"},Pl=new lo,W0=new Ei,cv=Math.cos(70*_f.DEG2RAD),Sn=new X,ii=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bf=1e-6,Il=class extends fa{constructor(t,e=null){super(t,e),this.state=$e.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ti,this._lastTargetPosition=new X,this._quat=new Ti().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new X,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new X,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hv.bind(this),this._onPointerDown=lv.bind(this),this._onPointerUp=fv.bind(this),this._onContextMenu=_v.bind(this),this._onMouseWheel=pv.bind(this),this._onKeyDown=mv.bind(this),this._onTouchStart=gv.bind(this),this._onTouchMove=xv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=dv.bind(this),this._interceptControlDown=yv.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(G0),this.update(),this.state=$e.NONE}update(t=null){let e=this.object.position;Sn.copy(e).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ii:i>Math.PI&&(i-=ii),s<-Math.PI?s+=ii:s>Math.PI&&(s-=ii),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Sn.length();r=this._clampDistance(a*this._scale);let c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let l=new X(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Pl.origin.copy(this.object.position),Pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pl.direction))<cv?this.object.lookAt(this.target):(W0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pl.intersectPlane(W0,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Bf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bf||this._lastTargetPosition.distanceToSquared(this.target)>Bf?(this.dispatchEvent(G0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ii/60*this.autoRotateSpeed*t:ii/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Sn.setFromMatrixColumn(e,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,e){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(e,1):(Sn.setFromMatrixColumn(e,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Sn.copy(s).sub(this.target);let o=Sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/e.clientHeight),this._rotateUp(ii*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/e.clientHeight),this._rotateUp(ii*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new le,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function lv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(X0),this.state=$e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=$e.DOLLY;break;case Os.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$e.ROTATE}break;case Os.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(kf)}function dv(n){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pv(n){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(n.preventDefault(),this.dispatchEvent(kf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(X0))}function mv(n){this.enabled!==!1&&this._handleKeyDown(n)}function gv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=$e.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=$e.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(kf)}function xv(n){switch(this._trackPointer(n),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=$e.NONE}}function _v(n){this.enabled!==!1&&n.preventDefault()}function yv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hf=(n,t)=>[n[0]-t[0],n[1]-t[1]],ks=(n,t,e=1)=>[n[0]+t[0]*e,n[1]+t[1]*e],Vf=(n,t)=>n[0]*t[0]+n[1]*t[1],Gf=n=>Math.hypot(n[0],n[1]),Y0=n=>{let t=Gf(n)||1;return[n[0]/t,n[1]/t]},Ll=n=>[n[1],-n[0]],Dl={wood:{label:"\u6728\u306E\u7BB1\u968E\u6BB5",riser:.205,most:.23,tread:.24,rail:"wall"},open:{label:"\u30AA\u30FC\u30D7\u30F3\u968E\u6BB5",riser:.2,most:.23,tread:.25,rail:"bars"},rc:{label:"\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u968E\u6BB5",riser:.18,most:.2,tread:.27,rail:"bars"},steel:{label:"\u9244\u9AA8\u968E\u6BB5",riser:.19,most:.22,tread:.25,rail:"bars"},stone:{label:"\u77F3\u306E\u968E\u6BB5",riser:.17,most:.2,tread:.3,rail:"bars"}};function bv({x:n,z:t,radius:e=.85,from:i=0,sweep:s=360,post:o=.1}){let r=Math.max(4,Math.round(Math.abs(s)/30)),a=(e+o)/2;return{w:e-o,pts:Array.from({length:r+1},(c,l)=>{let f=(i+s*l/r)*Math.PI/180;return[n+Math.cos(f)*a,t+Math.sin(f)*a]})}}var $0=new WeakMap;function Zi(n,t){let e=$0.get(n);return e||$0.set(n,e=new Map),e.has(t)||e.set(t,Mv(n,t)),e.get(t)}function Mv(n,t){let e=n.k==="spiral",i=e?bv(n):n,s=Math.max(.4,i.w??.8),o=s/2,r=Dl[n.look]??Dl.wood,a=i.pts.filter((B,et,z)=>!et||Gf(Hf(B,z[et-1]))>1e-4),c=a.length-1,l=a.slice(1).map((B,et)=>Y0(Hf(B,a[et]))),f=a.slice(1).map((B,et)=>Gf(Hf(B,a[et]))),h=[0];f.forEach(B=>h.push(h.at(-1)+B));let d=h.at(-1),u=a.map((B,et)=>et>0&&et<c&&Math.abs(Vf(l[et-1],l[et]))<.35),p=B=>{let et=0;for(;et<c-1&&B>h[et+1];)et++;return et},y=B=>{let et=p(B);return ks(a[et],l[et],Math.min(Math.max(B-h[et],0),f[et]))},_=(B,et)=>ks(y(B),Ll(l[p(B)]),et*o),x=(B,et)=>{let z=Ll(l[B-1]),K=Ll(l[B]),nt=Math.sqrt(Math.max(.05,(1+Vf(z,K))/2));return ks(a[B],Y0([z[0]+K[0],z[1]+K[1]]),et*o/nt)},S=(B,et,z)=>{let K=[_(B,z)];for(let nt=1;nt<c;nt++)h[nt]>B+1e-6&&h[nt]<et-1e-6&&K.push(x(nt,z));return K.push(_(et,z)),K},w=(B,et)=>[...S(B,et,1),...S(B,et,-1).reverse()],v=[],A=0;for(let B=1;B<=c;B++){if(B<c&&!u[B])continue;let et=h[A]+(A>0?o:0),z=h[B]-(B<c?o:0);v.push({kind:"run",from:Math.min(et,z),to:Math.max(et,z),length:Math.max(0,z-et)}),B<c&&v.push({kind:"corner",vertex:B,from:h[B]-o,to:h[B]+o}),A=B}let P=v.filter(B=>B.kind==="run");P.forEach((B,et)=>{B.first=et===0,B.last=et===P.length-1,B.short=!B.first&&!B.last&&B.length<.35});let C=n.turn==="winder",M=[];for(let[B,et]of v.entries()){if(et.kind!=="corner")continue;let z=v[B-1];!C&&z.short&&M.length?M.at(-1).to=et.to:M.push({from:et.from,to:et.to,corners:[]}),M.at(-1).corners.push(et)}let m=C?v.filter(B=>B.kind==="corner").length*3:M.length,g=P.filter(B=>!B.short),b=g.reduce((B,et)=>B+et.length,0),T=B=>{let et=B-1-m;if(et<0)return null;let z=g.map(gt=>b>0?et*gt.length/b:et/g.length),K=z.map(Math.floor),nt=et-K.reduce((gt,ut)=>gt+ut,0);for(let gt of z.map((ut,Mt)=>[ut-Math.floor(ut),Mt]).sort((ut,Mt)=>Mt[0]-ut[0]).map(([,ut])=>ut)){if(nt--<=0)break;K[gt]++}let lt=g.map((gt,ut)=>K[ut]?gt.length/K[ut]:1/0);return{risers:B,given:K,shallowest:Math.min(...lt)}},I=Math.max(2,Math.ceil(t/r.riser-1e-6)),R=Math.max(2,Math.ceil(t/r.most-1e-6),m+1),D=null;for(let B=Math.max(I,R);B>=R;B--){let et=T(B);if(et){if(D??(D=et),et.shallowest>=.21){D=et;break}et.shallowest>D.shallowest&&(D=et)}}D??(D=T(m+1));let N=D.risers,H=t/N,U=[],F=(B,et,z={})=>U.push({at:B,kind:et,...z}),Y=0;for(let B of v)if(B.kind==="run"){if(B.short)continue;let et=D.given[g.indexOf(B)],z=et?Math.min(B.length/et,e?1/0:r.tread+.05):0,K=B.length-z*et,nt=B.last?K:B.first?0:K/2;for(let lt=0;lt<et;lt++)F(B.from+nt+z*lt,"tread");Y=B.from+nt+z*et}else if(C){let[et,z,K]=[a[B.vertex],l[B.vertex-1],l[B.vertex]];for(let nt=0;nt<3;nt++)F(B.from+(B.to-B.from)*nt/3,"winder",{corner:{p:et,a:z,b:K},wedge:nt});Y=B.to}else M.some(et=>et.corners[0]===B)&&(F(Y,"landing"),Y=M.find(et=>et.corners[0]===B).to);let $=[...U.map(B=>B.at),d],J=U.map((B,et)=>{let z=H*(et+1),K=Math.max(B.at+1e-4,$[et+1]);if(B.kind==="winder"){let{p:nt,a:lt,b:gt}=B.corner,ut=ks(ks(nt,lt,-o),gt,o),Mt=wt=>{let L=wt*Math.PI/6,E=[-gt[0]*Math.cos(L)+lt[0]*Math.sin(L),-gt[1]*Math.cos(L)+lt[1]*Math.sin(L)];return ks(ut,E,s/Math.max(Math.cos(L),Math.sin(L)))},yt=ks(ks(ut,gt,-s),lt,s),pt=B.wedge===0?[ut,Mt(0),Mt(1)]:B.wedge===1?[ut,Mt(1),yt,Mt(2)]:[ut,Mt(2),Mt(3)];return{kind:"winder",y:z,poly:pt,nose:[ut,Mt(B.wedge)]}}return{kind:B.kind,y:z,poly:w(B.at,K),nose:[_(B.at,1),_(B.at,-1)]}});if(C)for(let B of v){if(B.kind!=="run"||!B.short||B.length<.001)continue;let et=U.findLastIndex(z=>z.at<=B.from+1e-6);et>=0&&J.push({kind:"landing",y:H*(et+1),poly:w(B.from,B.to),nose:null})}let Rt=B=>{let et=0;for(;et<N&&B>=$[et];)et++;return et*H},vt=[[0,0]];$.forEach((B,et)=>{let z=B-(et?$[et-1]:0),K=($[et+1]??d+1)-B;vt.push([Math.max(0,B-Math.min(.13,z/2)),H*et]),vt.push([Math.min(d,B+Math.min(.13,K/2)),H*(et+1)])}),vt.push([d,t]),vt.sort((B,et)=>B[0]-et[0]||B[1]-et[1]);let mt=B=>{let et=1;for(;et<vt.length-1&&vt[et][0]<B;)et++;let[z,K]=vt[et-1],[nt,lt]=vt[et];return nt-z<1e-9?lt:K+(lt-K)*Math.min(1,Math.max(0,(B-z)/(nt-z)))},j=new Set(vt.map(([B])=>B));for(let B=1;B<c;B++)j.add(h[B]);let G=[...j].sort((B,et)=>B-et).map(B=>[...y(B),mt(B)]);G[0][2]=0,G.at(-1)[2]=t;let q=[];for(let B of v)B.kind==="run"&&B.length<.001||q.push({kind:B.kind,from:B.from,to:B.to,poly:w(B.from,B.to),y0:Rt(B.from+1e-4),y1:Rt(B.to-1e-4)});let ct=(B,et)=>[(B[0]+et[0])/2,(B[1]+et[1])/2],Q=[];for(let B=1;B<c;B++)u[B]&&Q.push({s:h[B],half:o,inner:Vf(Ll(l[B-1]),l[B])>0?1:-1});return{corners:Q,n:N,riser:H,w:s,total:d,spiral:e,look:n.look&&Dl[n.look]?n.look:"wood",tread:D.shallowest,steep:D.shallowest<.15,surfaces:J,pieces:q,path:G,outline:w(0,d),side:S,strip:w,edge:_,centre:y,heightAt:Rt,ramp:mt,foot:{at:[...ct(_(0,1),_(0,-1)),0],out:[-l[0][0],-l[0][1]],half:o},head:{at:[...ct(_(d,1),_(d,-1)),t],out:[l[c-1][0],l[c-1][1]],half:o}}}var Vs=8,cn=.91,mn=.24,si=1.2,gs=.02;function xi(n,t=0,e=0){let i=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return i-Math.floor(i)}function Xf(n){let t=7;for(let e of String(n))t=(t*31+e.charCodeAt(0))%100003;return t}var Yf={L:"\u30EA\u30D3\u30F3\u30B0",D:"\u30C0\u30A4\u30CB\u30F3\u30B0",K:"\u30AD\u30C3\u30C1\u30F3",B:"\u6D0B\u5BA4",P:"\u500B\u5BA4",W:"\u548C\u5BA4",R:"\u62BC\u5165\u308C\u30FB\u53CE\u7D0D",N:"\u6D17\u9762\u5BA4",U:"\u6D74\u5BA4",T:"\u30C8\u30A4\u30EC",G:"\u7384\u95A2",H:"\u5ECA\u4E0B",S:"\u968E\u6BB5",Y:"\u7E01\u5074",V:"\u30D9\u30E9\u30F3\u30C0",E:"\u7D0D\u6238",M:"\u5E97\u8217",O:"\u4E8B\u52D9\u5BA4",C:"\u5171\u7528\u5ECA\u4E0B",A:"\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9",X:"\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC",J:"\u99D0\u8ECA\u5834"};var pr={modern:{storey:2.85,ceiling:2.4,base:.55,doma:.2,wall:.17,inner:.125,stair:"wood",roof:{k:"gable",f:"roof-slate",pitch:22,eave:.6}},europe:{storey:2.9,ceiling:2.5,base:.5,doma:.15,wall:.2,inner:.125,stair:"wood",roof:{k:"gable",f:"roof-tile-orange",pitch:40,eave:.45}},japan:{storey:2.85,ceiling:2.4,base:.6,doma:.3,wall:.17,inner:.12,stair:"wood",roof:{k:"hip",f:"roof-kawara",pitch:26,eave:.9}},danchi:{storey:2.6,ceiling:2.3,base:.9,doma:.06,wall:.18,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.3}},mansion:{storey:2.9,ceiling:2.45,base:.3,doma:.05,wall:.18,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.9}},office:{storey:3.8,ceiling:2.7,base:.15,doma:0,wall:.2,inner:.1,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:.9}},brutal:{storey:3.3,ceiling:2.6,base:.3,doma:0,wall:.3,inner:.15,stair:"rc",roof:{k:"flat",f:"roof-concrete",parapet:1.1}},shop:{storey:3.2,ceiling:2.7,base:.12,doma:0,wall:.18,inner:.1,stair:"wood",roof:{k:"flat",f:"roof-concrete",parapet:.6}}},Xt=(n,t,e,i="#ffffff",s={})=>({label:n,group:t,texture:e,tint:i,...s}),Gs={"mortar-white":Xt("\u30E2\u30EB\u30BF\u30EB\uFF08\u767D\uFF09","wall","mortar","#fbfaf4"),"mortar-cream":Xt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","mortar","#f5ead0"),"mortar-ivory":Xt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","mortar","#f1e9d9"),"mortar-grey":Xt("\u30E2\u30EB\u30BF\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","mortar","#c8c7bf"),"stucco-white":Xt("\u5857\u308A\u58C1\uFF08\u767D\uFF09","wall","stucco","#f8f6ef"),"stucco-ivory":Xt("\u5857\u308A\u58C1\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","stucco","#f3ecda"),"stucco-cream":Xt("\u5857\u308A\u58C1\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","stucco","#f2e2c0"),"stucco-yellow":Xt("\u5857\u308A\u58C1\uFF08\u9EC4\uFF09","wall","stucco","#efd58e"),"stucco-rose":Xt("\u5857\u308A\u58C1\uFF08\u30ED\u30FC\u30BA\uFF09","wall","stucco","#eccdc0"),"stucco-sage":Xt("\u5857\u308A\u58C1\uFF08\u82E5\u8349\uFF09","wall","stucco","#d2dcc0"),"stucco-blue":Xt("\u5857\u308A\u58C1\uFF08\u6C34\u8272\uFF09","wall","stucco","#c8d9e3"),"stucco-charcoal":Xt("\u5857\u308A\u58C1\uFF08\u30C1\u30E3\u30B3\u30FC\u30EB\uFF09","wall","stucco","#54585b"),"plaster-white":Xt("\u6F06\u55B0","wall","plaster","#f6f3ea"),concrete:Xt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u6253\u3061\u653E\u3057","wall","concrete"),"concrete-stained":Xt("\u53E4\u3073\u305F\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8","wall","concreteStained"),"concrete-dark":Xt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF08\u6FC3\uFF09","wall","concreteStained","#a4a39e"),"brick-red":Xt("\u30EC\u30F3\u30AC\uFF08\u8D64\uFF09","wall","brick"),"brick-brown":Xt("\u30EC\u30F3\u30AC\uFF08\u3053\u3052\u8336\uFF09","wall","brick","#b08d7c"),"brick-white":Xt("\u30EC\u30F3\u30AC\uFF08\u767D\uFF09","wall","brickWhite"),"tile-white":Xt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","wall","tile","#fafaf6"),"tile-beige":Xt("\u30BF\u30A4\u30EB\uFF08\u30D9\u30FC\u30B8\u30E5\uFF09","wall","tile","#e7d5bc"),"tile-sand":Xt("\u30BF\u30A4\u30EB\uFF08\u7802\u8272\uFF09","wall","tile","#d8c0a6"),"tile-brown":Xt("\u30BF\u30A4\u30EB\uFF08\u8336\uFF09","wall","tile","#a47b5d"),"tile-grey":Xt("\u30BF\u30A4\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","tile","#b8b6af"),"tile-navy":Xt("\u30BF\u30A4\u30EB\uFF08\u7D3A\uFF09","wall","tile","#49576c"),"siding-white":Xt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u767D\uFF09","wall","siding","#f4f3ee"),"siding-sand":Xt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7802\u8272\uFF09","wall","siding","#d9ceb7"),"siding-grey":Xt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u30B0\u30EC\u30FC\uFF09","wall","siding","#8e9397"),"siding-navy":Xt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7D3A\uFF09","wall","siding","#3e4b5d"),"siding-green":Xt("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u6DF1\u7DD1\uFF09","wall","siding","#4d6455"),"wood-natural":Xt("\u677F\u5F35\u308A\uFF08\u660E\u308B\u3044\u6728\uFF09","wall","planks","#d3a979"),"wood-brown":Xt("\u677F\u5F35\u308A\uFF08\u8336\uFF09","wall","planks","#8f6646"),"wood-dark":Xt("\u677F\u5F35\u308A\uFF08\u713C\u6749\uFF09","wall","planks","#3d342e"),"wood-red":Xt("\u677F\u5F35\u308A\uFF08\u3079\u3093\u304C\u3089\uFF09","wall","planks","#8d4f3f"),"metal-dark":Xt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9ED2\uFF09","wall","metalPanel","#3d4349",{roughness:.45,metalness:.7}),"metal-silver":Xt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9280\uFF09","wall","metalPanel","#c3c8cc",{roughness:.4,metalness:.8}),"metal-white":Xt("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u767D\uFF09","wall","metalPanel","#eef0f0",{roughness:.5,metalness:.3}),stone:Xt("\u77F3\u5F35\u308A","wall","stone"),"wp-white":Xt("\u58C1\u7D19\uFF08\u767D\uFF09","paper","wallpaper","#f7f5ef"),"wp-ivory":Xt("\u58C1\u7D19\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","paper","wallpaper","#f2ead9"),"wp-grey":Xt("\u58C1\u7D19\uFF08\u30B0\u30EC\u30FC\uFF09","paper","wallpaper","#d9dbd9"),"wp-blue":Xt("\u58C1\u7D19\uFF08\u6C34\u8272\uFF09","paper","wallpaper","#d2dfe9"),"wp-green":Xt("\u58C1\u7D19\uFF08\u82E5\u8349\uFF09","paper","wallpaper","#d7e3d0"),"wp-pink":Xt("\u58C1\u7D19\uFF08\u685C\uFF09","paper","wallpaper","#f1dcd8"),"wp-yellow":Xt("\u58C1\u7D19\uFF08\u305F\u307E\u3054\uFF09","paper","wallpaper","#f4e9bd"),"wp-navy":Xt("\u58C1\u7D19\uFF08\u7D3A\uFF09","paper","wallpaper","#44516a"),"wp-brown":Xt("\u58C1\u7D19\uFF08\u8336\uFF09","paper","wallpaper","#8b6f5c"),"wp-stripe":Xt("\u58C1\u7D19\uFF08\u30B9\u30C8\u30E9\u30A4\u30D7\uFF09","paper","wallpaperStripe"),juraku:Xt("\u3058\u3085\u3089\u304F\u58C1","paper","plaster","#dccfa9"),"tile-bath":Xt("\u30BF\u30A4\u30EB\uFF08\u6C34\u8272\uFF09","paper","bathTile","#d4e9ef"),"tile-bath-white":Xt("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","paper","bathTile"),"panel-wood":Xt("\u677F\u58C1","paper","planks","#caa57c"),"floor-maple":Xt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30E1\u30FC\u30D7\u30EB\uFF09","floor","floorboards"),"floor-oak":Xt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30AA\u30FC\u30AF\uFF09","floor","floorboards","#d9b98f"),"floor-walnut":Xt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30A6\u30A9\u30EB\u30CA\u30C3\u30C8\uFF09","floor","floorboards","#8f6b52"),"floor-dark":Xt("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u3053\u3052\u8336\uFF09","floor","floorboards","#5d4a40"),tatami:Xt("\u7573","floor","tatami"),"tile-floor":Xt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u767D\uFF09","floor","bathTile"),"tile-floor-blue":Xt("\u30BF\u30A4\u30EB\u5E8A\uFF08\u6C34\u8272\uFF09","floor","bathTile","#d4e9ef"),"stone-floor":Xt("\u77F3\u7573","floor","pavers","#f1ece2"),"genkan-floor":Xt("\u7384\u95A2\u30BF\u30A4\u30EB","floor","pavers","#b8b2a6"),checker:Xt("\u5E02\u677E\u6A21\u69D8\u306E\u5E8A","floor","checker"),"carpet-grey":Xt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u30B0\u30EC\u30FC\uFF09","floor","carpet","#b4b9bf"),"carpet-blue":Xt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u9752\uFF09","floor","carpet","#6f7f93"),"carpet-red":Xt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u3048\u3093\u3058\uFF09","floor","carpet","#9a5a56"),"carpet-green":Xt("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u7DD1\uFF09","floor","carpet","#6f8a72"),"concrete-floor":Xt("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u5E8A","floor","concrete","#d2d0c9"),deck:Xt("\u30A6\u30C3\u30C9\u30C7\u30C3\u30AD","floor","planks","#b08a62"),"ceil-white":Xt("\u5929\u4E95\uFF08\u767D\uFF09","ceiling","plaster","#fbfaf6"),"ceil-wood":Xt("\u677F\u5929\u4E95","ceiling","planks","#c9a880"),"roof-kawara":Xt("\u74E6\uFF08\u3044\u3076\u3057\u9280\uFF09","roof","kawara","#a7adb4",{roughness:.55,metalness:.2}),"roof-kawara-dark":Xt("\u74E6\uFF08\u9ED2\uFF09","roof","kawara","#5b6068",{roughness:.6,metalness:.15}),"roof-tile-orange":Xt("\u6D0B\u74E6\uFF08\u3060\u3044\u3060\u3044\uFF09","roof","kawara","#c7633d",{roughness:.85}),"roof-tile-brown":Xt("\u6D0B\u74E6\uFF08\u8336\uFF09","roof","kawara","#8b5b45",{roughness:.85}),"roof-tile-green":Xt("\u6D0B\u74E6\uFF08\u7DD1\uFF09","roof","kawara","#4f6b58",{roughness:.8}),"roof-slate":Xt("\u30B9\u30EC\u30FC\u30C8","roof","slate","#5a5e63"),"roof-metal":Xt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u6FC3\u3044\u30B0\u30EC\u30FC\uFF09","roof","roofMetal","#5b5f63",{roughness:.5,metalness:.4}),"roof-metal-green":Xt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u7DD1\u9752\uFF09","roof","roofMetal","#5f8a7c",{roughness:.55,metalness:.35}),"roof-metal-red":Xt("\u91D1\u5C5E\u5C4B\u6839\uFF08\u8D64\u3055\u3073\u8272\uFF09","roof","roofMetal","#8e4d3c",{roughness:.6,metalness:.3}),"roof-concrete":Xt("\u5C4B\u4E0A\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF09","roof","concrete","#9da09b")},Ae=(n,t,e,i,s,o={})=>({label:n,door:t,w:e,h:i,s,...o}),Yn={"door-entrance":Ae("\u7384\u95A2\u30C9\u30A2",!0,.92,2.33,0),"door-oyako":Ae("\u89AA\u5B50\u30C9\u30A2",!0,1.24,2.33,0),"door-flat":Ae("\u96C6\u5408\u4F4F\u5B85\u306E\u7384\u95A2\u30C9\u30A2\uFF08\u92FC\u88FD\uFF09",!0,.85,2,0),"door-wood":Ae("\u6728\u306E\u30C9\u30A2",!0,.78,2,0),"door-white":Ae("\u767D\u3044\u30C9\u30A2",!0,.75,2,0),"door-glass":Ae("\u30AC\u30E9\u30B9\u30C9\u30A2",!0,.8,2,0,{glass:!0}),"door-steel":Ae("\u30B9\u30C1\u30FC\u30EB\u30C9\u30A2",!0,.78,2,0),"door-fold":Ae("\u6D74\u5BA4\u306E\u6298\u308C\u6238",!0,.72,2,.05),"door-key":Ae("\u9375\u4ED8\u304D\u306E\u30C9\u30A2",!0,.78,2,0,{lock:!0}),"door-slide":Ae("\u5F15\u304D\u6238",!0,.8,2,0,{slide:!0}),"door-fusuma":Ae("\u3075\u3059\u307E",!0,1.69,1.8,0,{slide:!0}),"door-shoji":Ae("\u969C\u5B50",!0,1.69,1.8,0,{slide:!0}),"door-closet":Ae("\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u306E\u6298\u308C\u6238",!0,1.6,2,0),"door-double":Ae("\u4E21\u958B\u304D\u30C9\u30A2",!0,1.5,2.1,0),"door-auto":Ae("\u81EA\u52D5\u30C9\u30A2",!0,1.6,2.3,0,{slide:!0,glass:!0}),"door-terrace":Ae("\u6383\u304D\u51FA\u3057\u7A93\uFF08\u51FA\u5165\u308A\u3067\u304D\u308B\uFF09",!0,1.65,2,.03,{slide:!0,glass:!0}),"lift-door":Ae("\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u6249",!0,.8,2.1,0,{slide:!0,lift:!0}),"door-platform":Ae("\u30DB\u30FC\u30E0\u30C9\u30A2",!0,1.4,2.1,0,{slide:!0,glass:!0,platform:!0}),arch:Ae("\u958B\u53E3\uFF08\u30C9\u30A2\u306A\u3057\uFF09",!0,1.2,2,0,{open:!0}),"win-slide":Ae("\u5F15\u304D\u9055\u3044\u7A93",!1,1.65,1.1,.9),"win-wide":Ae("\u6A2A\u9577\u306E\u7A93",!1,1.65,.9,1.1),"win-full":Ae("\u5E8A\u307E\u3067\u306E\u7A93",!1,1.65,1.97,.03),"win-small":Ae("\u5C0F\u7A93",!1,.6,.5,1.5),"win-high":Ae("\u9AD8\u7A93",!1,.74,.5,1.5),"win-tall":Ae("\u7E26\u3059\u3079\u308A\u51FA\u3057\u7A93",!1,.4,1.1,.9),"win-slit":Ae("\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.34,1.5,.5),"win-fixed":Ae("\u306F\u3081\u6BBA\u3057\u7A93",!1,1,1,1),"win-lattice":Ae("\u9762\u683C\u5B50\u3064\u304D\u306E\u7A93",!1,1.19,.9,1.1),"win-shutter":Ae("\u3088\u308D\u3044\u6238\u3064\u304D\u306E\u7A93",!1,1,1.2,.8),"win-steel":Ae("\u30B9\u30C1\u30FC\u30EB\u30B5\u30C3\u30B7",!1,1.69,1.2,.8),"win-round":Ae("\u4E38\u7A93",!1,.8,.8,1.1,{round:!0}),"win-shop":Ae("\u30B7\u30E7\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",!1,1.6,2.2,.2),"win-curtain":Ae("\u30AB\u30FC\u30C6\u30F3\u30A6\u30A9\u30FC\u30EB",!1,1.7,2.6,.75),"win-ribbon":Ae("\u6A2A\u9023\u7A93",!1,1.7,1.5,.9),"win-hood":Ae("\u3072\u3055\u3057\u4ED8\u304D\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.5,1.5,.6),"win-block":Ae("\u30AC\u30E9\u30B9\u30D6\u30ED\u30C3\u30AF",!1,.8,1.6,.4)},mr={white:["\u767D","#f7f5ee"],black:["\u9ED2","#23272a"],silver:["\u30B7\u30EB\u30D0\u30FC","#b9bdb9"],bronze:["\u30D6\u30ED\u30F3\u30BA","#5b4a3c"],wood:["\u6728","#8a6746"],"wood-dark":["\u6FC3\u3044\u6728","#4a3a30"],sage:["\u82E5\u8349","#9fb3ae"],green:["\u6DF1\u7DD1","#3f6b52"],navy:["\u7D3A","#34506b"],red:["\u8D64","#8a3b34"],steel:["\u30B9\u30C1\u30FC\u30EB","#8ea1a8"],yellow:["\u9EC4","#d9a441"]},ae=(n,t,e,i,s,o={})=>({label:n,group:t,w:e,d:i,h:s,solid:!0,...o}),Un={sofa:ae("\u30BD\u30D5\u30A1","living",1.5,.72,.78),armchair:ae("\u3072\u3068\u308A\u639B\u3051\u30BD\u30D5\u30A1","living",.78,.75,.78),"table-low":ae("\u30ED\u30FC\u30C6\u30FC\u30D6\u30EB","living",.95,.55,.38),tv:ae("\u30C6\u30EC\u30D3","living",1.3,.38,1.15),shelf:ae("\u672C\u68DA","living",.9,.3,1.8),cabinet:ae("\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8","living",.9,.4,.85),rug:ae("\u30E9\u30B0","living",1.8,1.2,.02,{solid:!1}),plant:ae("\u89B3\u8449\u690D\u7269","living",.45,.45,1.2),lamp:ae("\u30D5\u30ED\u30A2\u30E9\u30F3\u30D7","living",.35,.35,1.5),"ceiling-light":ae("\u5929\u4E95\u306E\u7167\u660E","living",.5,.5,.12,{solid:!1,ceiling:!0}),"table-dining":ae("\u30C0\u30A4\u30CB\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB","dining",1.4,.8,.72),chair:ae("\u3044\u3059","dining",.42,.45,.85),kitchen:ae("\u30AD\u30C3\u30C1\u30F3","dining",1.5,.6,.86),fridge:ae("\u51B7\u8535\u5EAB","dining",.62,.66,1.76),bed:ae("\u30D9\u30C3\u30C9","bedroom",1,1.95,.5),"bed-double":ae("\u30C0\u30D6\u30EB\u30D9\u30C3\u30C9","bedroom",1.5,1.95,.5),desk:ae("\u673A","bedroom",1.1,.55,.72),wardrobe:ae("\u6D0B\u670D\u3060\u3093\u3059","bedroom",1,.55,1.9),tansu:ae("\u305F\u3093\u3059","japanese",.9,.45,1.3),cupboard:ae("\u98DF\u5668\u68DA","dining",.9,.45,1.85),"mail-boxes":ae("\u96C6\u5408\u90F5\u4FBF\u53D7\u3051","entrance",1.2,.3,1.3),car:ae("\u81EA\u52D5\u8ECA","garden",1.48,3.4,1.55),chabudai:ae("\u3061\u3083\u3076\u53F0","japanese",1,1,.32),zabuton:ae("\u3056\u3076\u3068\u3093","japanese",.5,.5,.08,{solid:!1}),futon:ae("\u3075\u3068\u3093","japanese",1,1.9,.14,{solid:!1}),toilet:ae("\u30C8\u30A4\u30EC","water",.42,.7,.8),bathtub:ae("\u6D74\u69FD","water",.75,1.4,.56),washbasin:ae("\u6D17\u9762\u53F0","water",.6,.45,.85),washer:ae("\u6D17\u6FEF\u6A5F","water",.6,.6,.9),"shoe-box":ae("\u3052\u305F\u7BB1","entrance",1,.34,.9),boxes:ae("\u6BB5\u30DC\u30FC\u30EB\u7BB1","entrance",.8,.7,1),rack:ae("\u30CF\u30F3\u30AC\u30FC\u30E9\u30C3\u30AF","shop",1.3,.4,1.7),counter:ae("\u30AB\u30A6\u30F3\u30BF\u30FC","shop",1.6,.6,1),mirror:ae("\u59FF\u898B","shop",.9,.12,1.9),"cafe-table":ae("\u30AB\u30D5\u30A7\u30C6\u30FC\u30D6\u30EB","shop",.8,.8,.72),stool:ae("\u30B9\u30C4\u30FC\u30EB","shop",.36,.36,.46),"office-desk":ae("\u30AA\u30D5\u30A3\u30B9\u30C7\u30B9\u30AF","office",1.2,.62,1.2),"office-chair":ae("\u30AA\u30D5\u30A3\u30B9\u30C1\u30A7\u30A2","office",.5,.5,.9),bench:ae("\u30D9\u30F3\u30C1","garden",1.6,.5,.8),planter:ae("\u30D7\u30E9\u30F3\u30BF\u30FC","garden",.9,.35,.5),hedge:ae("\u751F\u3051\u57A3","garden",1.6,.5,1.1),fence:ae("\u30D5\u30A7\u30F3\u30B9","garden",1.6,.08,1),tree:ae("\u5EAD\u6728","garden",.7,.7,3.2),mailbox:ae("\u30DD\u30B9\u30C8","garden",.3,.3,1.1),bicycle:ae("\u81EA\u8EE2\u8ECA","garden",.5,1.7,1),vending:ae("\u81EA\u52D5\u8CA9\u58F2\u6A5F","garden",1,.7,1.85),"ac-unit":ae("\u5BA4\u5916\u6A5F","garden",.86,.34,.65),"gate-post":ae("\u6A5F\u80FD\u9580\u67F1","garden",.3,.16,1.45),lantern:ae("\u77F3\u706F\u7C60","garden",.5,.5,1.3),"ticket-gate":ae("\u81EA\u52D5\u6539\u672D\u6A5F","station",.19,1.5,1.03),"ticket-gate-clear":ae("\u81EA\u52D5\u6539\u672D\u6A5F\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\uFF09","station",.19,1.5,1.03),"ticket-machine":ae("\u5238\u58F2\u6A5F","station",.85,.5,1.75),"platform-bench":ae("\u30DB\u30FC\u30E0\u306E\u30D9\u30F3\u30C1","station",1.8,.5,.8),"tactile-line":ae("\u70B9\u5B57\u30D6\u30ED\u30C3\u30AF\uFF08\u30DB\u30FC\u30E0\uFF09","station",.3,2.4,.01,{solid:!1})};var K0={flat:"\u9678\u5C4B\u6839\uFF08\u5E73\u3089\uFF09",hip:"\u5BC4\u68DF",gable:"\u5207\u59BB",shed:"\u7247\u6D41\u308C"};function bo(n,t){let e=n.storeys[t];if(!e)return null;let i=Number.isInteger(e.like)&&n.storeys[e.like]&&!Number.isInteger(n.storeys[e.like].like)?n.storeys[e.like]:e;return{h:e.h??i.h??2.7,walls:i.walls??[],openings:i.openings??[],rooms:i.rooms??[],items:i.items??[],stairs:i.stairs??[],decor:i.decor??[],like:i===e?void 0:e.like,steps:i.steps??[],lifts:i.lifts??[]}}function ya(n,t){let e=n.base??.3;for(let i=0;i<t;i++)e+=n.storeys[i]?.h??n.storeys[n.storeys[i]?.like]?.h??2.7;return e}var Z0=n=>ya(n,n.storeys.length),J0=n=>Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1]);function $f(n){let t=n.map(a=>{let c=J0(a);return{length:c,d:c>1e-6?[(a.b[0]-a.a[0])/c,(a.b[1]-a.a[1])/c]:[1,0],cuts:[0,c]}});for(let a=0;a<n.length;a++){let c=t[a];if(!(c.length<.01))for(let l=0;l<n.length;l++){let f=t[l];if(a===l||f.length<.01)continue;for(let _ of[n[l].a,n[l].b]){let x=_[0]-n[a].a[0],S=_[1]-n[a].a[1],w=x*c.d[0]+S*c.d[1];Math.abs(S*c.d[0]-x*c.d[1])<=gs&&w>gs&&w<c.length-gs&&c.cuts.push(w)}if(l<a)continue;let h=c.d[0]*f.d[1]-c.d[1]*f.d[0];if(Math.abs(h)<1e-6)continue;let d=n[l].a[0]-n[a].a[0],u=n[l].a[1]-n[a].a[1],p=(d*f.d[1]-u*f.d[0])/h,y=(d*c.d[1]-u*c.d[0])/h;p>gs&&p<c.length-gs&&y>gs&&y<f.length-gs&&(c.cuts.push(p),f.cuts.push(y))}}let e=[],i=new Map,s=gs*2,o=(a,c)=>{let l=Math.floor(a/s),f=Math.floor(c/s);for(let u=-1;u<=1;u++)for(let p=-1;p<=1;p++)for(let y of i.get(`${l+p},${f+u}`)??[])if(Math.hypot(e[y].x-a,e[y].z-c)<=gs)return y;let h=e.push({x:a,z:c})-1,d=`${l},${f}`;return i.has(d)||i.set(d,[]),i.get(d).push(h),h},r=[];return n.forEach((a,c)=>{let l=t[c];if(l.length<.01)return;let f=[...new Set(l.cuts.map(u=>Math.round(u*1e3)/1e3))].sort((u,p)=>u-p),h=f[0],d=o(a.a[0]+l.d[0]*h,a.a[1]+l.d[1]*h);for(let u of f.slice(1)){if(u-h<.01)continue;let p=o(a.a[0]+l.d[0]*u,a.a[1]+l.d[1]*u);d!==p&&r.push({wall:c,from:h,to:u,a:d,b:p}),h=u,d=p}}),{nodes:e,pieces:r}}function wv(n,t=$f(n)){let{nodes:e,pieces:i}=t,s=e.map(()=>[]);i.forEach((a,c)=>{let l=e[a.a],f=e[a.b],h=f.x-l.x,d=f.z-l.z,u=Math.hypot(h,d)||1,p=(n[a.wall].t??.12)/2;a.d=[h/u,d/u],s[a.a].push({piece:c,end:"a",d:a.d,half:p,angle:Math.atan2(d,h)}),s[a.b].push({piece:c,end:"b",d:[-a.d[0],-a.d[1]],half:p,angle:Math.atan2(-d,-h)})});let o=i.map(()=>({a:{},b:{}})),r=[];return e.forEach((a,c)=>{let l=s[c].sort((h,d)=>h.angle-d.angle),f=(h,d)=>[a.x-d*h.d[1]*h.half,a.z+d*h.d[0]*h.half];if(l.length===1){let[h]=l,d=f(h,-1),u=f(h,1);o[h.piece][h.end]={cw:d,ccw:u},r.push({from:u,to:d,piece:h.piece,normal:[-h.d[0],-h.d[1]]});return}l.forEach((h,d)=>{let u=l[(d+1)%l.length],p=f(h,1),y=f(u,-1),_=h.d[0]*u.d[1]-h.d[1]*u.d[0],x=null;if(Math.abs(_)>.001){let S=((y[0]-p[0])*u.d[1]-(y[1]-p[1])*u.d[0])/_,w=[p[0]+h.d[0]*S,p[1]+h.d[1]*S];Math.hypot(w[0]-a.x,w[1]-a.z)<=4*Math.max(h.half,u.half)+.02&&(x=w)}if(o[h.piece][h.end].ccw=x??p,o[u.piece][u.end].cw=x??y,!x&&Math.hypot(p[0]-y[0],p[1]-y[1])>1e-4){let S=(p[0]+y[0])/2-a.x,w=(p[1]+y[1])/2-a.z,v=Math.hypot(S,w)||1;r.push({from:p,to:y,piece:h.half>=u.half?h.piece:u.piece,normal:[S/v,w/v]})}})}),{nodes:e,pieces:i.map((a,c)=>{let{a:l,b:f}=o[c],h=n[a.wall],d=y=>(y[0]-h.a[0])*a.d[0]+(y[1]-h.a[1])*a.d[1],u=[e[a.a].x,e[a.a].z],p=[e[a.b].x,e[a.b].z];return{wall:a.wall,from:a.from,to:a.to,a:a.a,b:a.b,d:a.d,start:u,end:p,l:[l.cw,f.ccw],r:[l.ccw,f.cw],span:{l:[d(l.cw),d(f.ccw)],r:[d(l.ccw),d(f.cw)]},poly:[l.cw,u,l.ccw,f.cw,p,f.ccw]}}),caps:r}}function Sv(n){let t=0;for(let e=0;e<n.length;e++){let[i,s]=n[e],[o,r]=n[(e+1)%n.length];t+=i*r-o*s}return t/2}function Hs(n,t,e){let i=!1;for(let s=0,o=n.length-1;s<n.length;o=s++){let[r,a]=n[s],[c,l]=n[o];a>e!=l>e&&t<(c-r)*(e-a)/(l-a)+r&&(i=!i)}return i}function Ev(n,t=$f(n)){let{nodes:e,pieces:i}=t,s=e.map(()=>[]);i.forEach((h,d)=>{let u=e[h.a],p=e[h.b];s[h.a].push({half:d*2,angle:Math.atan2(p.z-u.z,p.x-u.x)}),s[h.b].push({half:d*2+1,angle:Math.atan2(u.z-p.z,u.x-p.x)})});let o=new Map;for(let h of s)h.sort((d,u)=>d.angle-u.angle),h.forEach((d,u)=>o.set(d.half^1,h[(u-1+h.length)%h.length].half));let r=e.map((h,d)=>d),a=h=>r[h]===h?h:r[h]=a(r[h]);for(let h of i)r[a(h.a)]=a(h.b);let c=new Set,l=[],f=[];for(let h=0;h<i.length*2;h++){if(c.has(h))continue;let d=[];for(let _=h;!c.has(_)&&_!==void 0;_=o.get(_))c.add(_),d.push(_);let u=d.map(_=>{let x=i[_>>1],S=e[_&1?x.b:x.a];return[S.x,S.z]}),p=Sv(u),y=a(i[d[0]>>1].a);p>=.2?l.push({points:u,area:p,holes:[],part:y,walls:[...new Set(d.map(_=>i[_>>1].wall))]}):p<=-.2&&f.push({points:u.reverse(),area:-p,part:y})}for(let h of f){let[d,u]=h.points[0],p=l.filter(y=>y.part!==h.part&&Hs(y.points,d,u)).sort((y,_)=>y.area-_.area)[0];p&&(p.holes.push(h.points),p.area-=h.area)}for(let h of l)h.at=Tv(h.points,h.holes);return l}function xs(n,t,e){return Hs(n.points,t,e)&&!n.holes?.some(i=>Hs(i,t,e))}function Tv(n,t=[]){let e=(o,r)=>Hs(n,o,r)&&!t.some(a=>Hs(a,o,r)),i=n.reduce((o,r)=>o+r[0],0)/n.length,s=n.reduce((o,r)=>o+r[1],0)/n.length;if(e(i,s))return[i,s];for(let o=0;o<n.length;o++){let[r,a]=n[o],[c,l]=n[(o+1)%n.length],f=Math.hypot(c-r,l-a);if(!(f<.3))for(let h of[1,-1]){let d=(r+c)/2-h*(l-a)/f*.15,u=(a+l)/2+h*(c-r)/f*.15;if(e(d,u))return[d,u]}}return[i,s]}var q0=new WeakMap;function zl(n,t,e){let i=(n.r??0)*Math.PI/180,s=Math.cos(i),o=Math.sin(i),r=(t-n.x)*s-(e-n.z)*o,a=(t-n.x)*o+(e-n.z)*s;return Math.abs(r)>n.w/2||Math.abs(a)>n.l/2?-1:(n.l/2-a)/n.l}function Oi(n,t){let e=q0.get(n);if(e||q0.set(n,e=new Map),e.has(t))return e.get(t);let i=bo(n,t);if(!i)return null;let s=$f(i.walls),o=p=>!!p.rail||(p.h??i.h)<i.h-.01,r={nodes:[],pieces:[],caps:[]};for(let p of[y=>!o(y),o]){let y=i.walls.map((S,w)=>({wall:S,index:w})).filter(({wall:S})=>!S.open&&p(S)),_=wv(y.map(({wall:S})=>S)),x=r.pieces.length;r.nodes.push(..._.nodes),r.pieces.push(..._.pieces.map(S=>({...S,wall:y[S.wall].index}))),r.caps.push(..._.caps.map(S=>({...S,piece:S.piece+x})))}let a=Ev(i.walls,s).map(p=>{let y=i.rooms.find(_=>xs(p,_.at[0],_.at[1]));return{...p,f:y?.f??"floor-oak",c:y?.c??"ceil-white",n:y?.n??"",code:y?.code,open:!!y?.open,y:y?.y??0,unit:y?.unit??0,shaft:!!y?.shaft}}),c=(p,y)=>a.find(_=>xs(_,p,y))??null,l=(p,y)=>a.some(_=>!_.open&&xs(_,p,y)),f=(p,y)=>a.some(_=>xs(_,p,y)),h=(p,y)=>{for(let x of i.steps){let S=zl(x,p,y);if(S>=0)return(x.from??0)+x.rise*S}let _=c(p,y);return _?_.y:null},d=i.walls.map(p=>{let y=J0(p)||1,_=[(p.b[0]-p.a[0])/y,(p.b[1]-p.a[1])/y],x=(p.t??.12)/2+.07,S=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2];return{length:y,d:_,l:l(S[0]+_[1]*x,S[1]-_[0]*x),r:l(S[0]-_[1]*x,S[1]+_[0]*x)}}),u={storey:i,graph:s,outlines:r,rooms:a,sides:d,indoors:l,floored:f,roomAt:c,heightAt:h,base:ya(n,t)};return e.set(t,u),u}function Mo(n,t,e){let i=n.yard;if(!i)return 0;for(let o of i.steps??[]){let r=zl(o,t,e);if(r>=0)return(o.from??0)+o.rise*r}let s=0;for(let o of i.pads??[])t>=o.x0&&t<=o.x1&&e>=o.z0&&e<=o.z1&&(s=Math.max(s,o.y));return s}function j0(n,t,e,i,s=0){let o=s*Math.PI/180,r=Math.cos(o),a=Math.sin(o);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([c,l])=>[n+c*e/2*r+l*i/2*a,t-c*e/2*a+l*i/2*r])}var Q0=n=>!!Yn[n.k]?.door,tp=n=>!!Yn[n.k]?.lift,qf=(n,t,e)=>`${n}:${Math.round(t*10)}:${Math.round(e*10)}`,Wf=new WeakMap;function Av(n){return Wf.has(n)||Wf.set(n,n.storeys.some(t=>(t.rooms??[]).some(e=>e.unit&&e.unit!=="0"))),Wf.get(n)}var Rv=1.9,Cv=.18;function va(n,t){let e=Oi(n,t);if(!e)return{segments:[],boxes:[],stairs:[],lifts:[],doors:[],rooms:[]};let{storey:i,sides:s,rooms:o}=e,r=[],a=[],c=[],l=Av(n),f=y=>!y||y.open?null:l?y.unit&&y.unit!=="0"?`${t}:${y.unit}`:null:"main";i.walls.forEach((y,_)=>{if(y.open)return;let{length:x,d:S}=s[_],w=(y.t??.12)/2+.07,v=m=>{let g=y.a[0]+S[0]*m.at,b=y.a[1]+S[1]*m.at;return!(e.indoors(g+S[1]*w,b-S[0]*w)&&e.indoors(g-S[1]*w,b+S[0]*w))},A=i.openings.filter(m=>m.w===_&&Q0(m));for(let m of A){let g=y.a[0]+S[0]*m.at,b=y.a[1]+S[1]*m.at,T=m.ww/2,I={ax:g-S[0]*T,az:b-S[1]*T,bx:g+S[0]*T,bz:b+S[1]*T,r:(y.t??.12)/2};if(tp(m))a.push({x:g,z:b,d:S,half:T,r:I.r});else if(!Yn[m.k].open){let R=[e.roomAt(g+S[1]*w,b-S[0]*w),e.roomAt(g-S[1]*w,b+S[0]*w)].map(f),D=R[0]!==R[1]?R[0]??R[1]:Yn[m.k].lock?R[0]:null;c.push({key:qf(t,g,b),x:g,z:b,lock:D,auto:m.k==="door-auto",kind:m.k,gate:I,outside:v(m)})}}let P=A.map(m=>[m.at-m.ww/2,m.at+m.ww/2]).sort((m,g)=>m[0]-g[0]),C=0,M=m=>{m-C>.02&&r.push({ax:y.a[0]+S[0]*C,az:y.a[1]+S[1]*C,bx:y.a[0]+S[0]*m,bz:y.a[1]+S[1]*m,r:(y.t??.12)/2})};for(let[m,g]of P)M(m),C=Math.max(C,g);M(x)});let h=i.items.filter(y=>Un[y.k]?.solid).map(y=>({x:y.x,z:y.z,w:Un[y.k].w,d:Un[y.k].d,r:y.r??0}));if(t===0&&n.yard){for(let y of n.yard.bounds??[])r.push({ax:y.a[0],az:y.a[1],bx:y.b[0],bz:y.b[1],r:(y.t??.12)/2});for(let y of n.yard.items??[])Un[y.k]?.solid&&!y.hung&&h.push({x:y.x,z:y.z,w:Un[y.k].w,d:Un[y.k].d,r:y.r??0})}let d=[],u=y=>{for(let _=1;_<y.length;_++)r.push({ax:y[_-1][0],az:y[_-1][1],bx:y[_][0],bz:y[_][1],r:.03})};for(let[y,_]of[[t,!0],[t-1,!1]]){let x=bo(n,y);if(!(!x||y+1>=n.storeys.length))for(let S of x.stairs){let w=Zi(S,x.h);if(_){let v=C=>e.heightAt(...w.centre(C))??0,A=null,P=C=>{A!==null&&(u(w.side(A,C,1)),u(w.side(A,C,-1)),A>1e-6&&u([w.edge(A,1),w.edge(A,-1)]),u([w.edge(C,1),w.edge(C,-1)]),A=null)};for(let C of w.pieces){let M=[[C.from+.05,C.y0],[C.to-.05,C.y1]].some(([m,g])=>g-Cv-v(m)<Rv);M&&A===null&&(A=C.from),M||P(C.from)}P(w.total)}else u(w.side(0,w.total,1)),u(w.side(0,w.total,-1)),u([w.edge(0,1),w.edge(0,-1)]);d.push({path:w.path,foot:w.foot,head:w.head,up:_,from:y,rise:x.h,gate:_?w.foot:w.head})}}let p=i.lifts.map(y=>{let _=a.map(S=>({...S,gap:Math.hypot(S.x-y.x,S.z-y.z)})).sort((S,w)=>S.gap-w.gap)[0];if(!_||_.gap>3)return null;let x=(_.x-y.x)*_.d[1]-(_.z-y.z)*_.d[0]>=0?1:-1;return{x:y.x,z:y.z,w:y.w,d:y.d,r:y.r??0,at:[_.x,_.z],out:[x*_.d[1],-x*_.d[0]],half:_.half,gate:{ax:_.x-_.d[0]*_.half,az:_.z-_.d[1]*_.half,bx:_.x+_.d[0]*_.half,bz:_.z+_.d[1]*_.half,r:_.r}}}).filter(Boolean);return{segments:r,boxes:h,stairs:d,lifts:p,doors:c,rooms:o}}function Ul(n){let t={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let e=0;e<n.storeys.length;e++)for(let i of bo(n,e).walls)for(let[s,o]of[i.a,i.b])t.x0=Math.min(t.x0,s),t.x1=Math.max(t.x1,s),t.z0=Math.min(t.z0,o),t.z1=Math.max(t.z1,o);return Number.isFinite(t.x0)?t:{x0:0,z0:0,x1:0,z1:0}}function Ws(n){let t=Oi(n,0);return t?t.storey.openings.filter(e=>Q0(e)&&!tp(e)&&!t.storey.walls[e.w]?.rail).map(e=>{let i=t.storey.walls[e.w],s=t.sides[e.w];if(i.open||s.l===s.r)return null;let o=s.l?-1:1,r=[o*s.d[1],-o*s.d[0]],a=i.a[0]+s.d[0]*e.at,c=i.a[1]+s.d[1]*e.at,l=[a+r[0]*.9,c+r[1]*.9];return t.floored(...l)?null:{x:a,z:c,normal:r,width:e.ww,kind:e.k,outside:l,opening:e}}).filter(Boolean):[]}var Pv=40,Iv=32,ep=64,Lv=new Float32Array(ep*4*4),Nl=new us(Lv,ep,4,Wn,gi);Nl.magFilter=In;Nl.minFilter=In;Nl.needsUpdate=!0;var Zf=new us(new Uint8Array([104,132,84,255]),1,1);Zf.colorSpace=on;Zf.needsUpdate=!0;var Dv={glassScene:{value:Nl},glassCount:{value:new le(0,0)},glassSun:{value:new X(.45,.64,.62)},glassGround:{value:Zf},glassGroundBox:{value:new Qe(0,0,1,1)}},zv=`
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
  for ( int i = 0; i < ${Pv}; i ++ ) {
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
  for ( int i = 0; i < ${Iv}; i ++ ) {
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
`,Uv=`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`,Nv={near:`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,far:`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,inner:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,rail:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`};function Ov(n){let t=n==="far",e=new Dn({color:t?"#0b0e10":"#141b1f",roughness:.04,metalness:0,side:zn,transparent:!t,depthWrite:t,premultipliedAlpha:!t,forceSinglePass:!0});return n==="inner"&&(e.defines.GLASS_INDOORS=""),(n==="near"||n==="far")&&(e.defines.GLASS_WINDOW=""),e.onBeforeCompile=i=>{Object.assign(i.uniforms,Dv),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`);let s=de.lights_fragment_maps.replace("radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );","radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );");i.fragmentShader=i.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
${zv}`).replace("#include <lights_fragment_maps>",s).replace("#include <opaque_fragment>",`${Uv}
${Nv[n]}`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=()=>`machi-glass-${n}`,e}var Kf=new Map;function Ai(n="near"){return Kf.has(n)||Kf.set(n,Ov(n)),Kf.get(n)}var np=new X(0,1,0),Ol=new X,Fl=new X,Ji=new X,Bl=new X,Jf=new X,Ie=class{constructor(){this.parts=new Map,this.matrix=null}part(t){let e=this.parts.get(t);return e||(e={positions:[],normals:[],uvs:[],indices:[]},this.parts.set(t,e)),e}at(t,e,i,s,o){let r=this.matrix,a=new Ze().makeRotationY(s).setPosition(t,e,i);return this.matrix=r?r.clone().multiply(a):a,o(this),this.matrix=r,this}face(t,e){this.matrix&&(e=e.map(o=>o.clone().applyMatrix4(this.matrix)));let i=this.part(t);if(Ol.subVectors(e[1],e[0]),Fl.subVectors(e[2],e[0]),Ji.crossVectors(Ol,Fl),Ji.lengthSq()<1e-12)return this;Ji.normalize(),Math.abs(Ji.y)>.999?(Bl.set(1,0,0),Jf.set(0,0,1)):(Bl.crossVectors(np,Ji).normalize(),Jf.crossVectors(Ji,Bl));let s=i.positions.length/3;for(let o of e)i.positions.push(o.x,o.y,o.z),i.normals.push(Ji.x,Ji.y,Ji.z),i.uvs.push(o.dot(Bl),o.dot(Jf));for(let o=1;o<e.length-1;o++)i.indices.push(s,s+o,s+o+1);return this}quad(t,e,i,s,o,r){return Ol.subVectors(i,e),Fl.subVectors(s,e),this.face(t,Ji.crossVectors(Ol,Fl).dot(r)>=0?[e,i,s,o]:[o,s,i,e])}shape(t,e,i,s,o=!0){let r=e.map(([d,u])=>new le(d,u)),a=i.map(d=>d.map(([u,p])=>new le(u,p))),c=[...r,...a.flat()],l=this.part(t),f=l.positions.length/3,h=new X;for(let d of c)h.set(d.x,s,d.y),this.matrix&&h.applyMatrix4(this.matrix),l.positions.push(h.x,h.y,h.z),l.normals.push(0,o?1:-1,0),l.uvs.push(h.x,h.z);for(let[d,u,p]of oa.triangulateShape(r,a))(c[u].x-c[d].x)*(c[p].y-c[d].y)-(c[u].y-c[d].y)*(c[p].x-c[d].x)<0===o?l.indices.push(f+d,f+u,f+p):l.indices.push(f+d,f+p,f+u);return this}box(t,e,i,s,o,r,a,c=0){let l=Math.cos(c),f=Math.sin(c),h=(u,p,y)=>new X(e+u*o/2*l+y*a/2*f,i+p*r/2,s-u*o/2*f+y*a/2*l),d=[-1,1].map(u=>[-1,1].map(p=>[-1,1].map(y=>h(u,p,y))));return this.face(t,[d[1][0][0],d[1][1][0],d[1][1][1],d[1][0][1]]),this.face(t,[d[0][0][1],d[0][1][1],d[0][1][0],d[0][0][0]]),this.face(t,[d[0][1][0],d[0][1][1],d[1][1][1],d[1][1][0]]),this.face(t,[d[0][0][1],d[0][0][0],d[1][0][0],d[1][0][1]]),this.face(t,[d[1][0][1],d[1][1][1],d[0][1][1],d[0][0][1]]),this.face(t,[d[0][0][0],d[0][1][0],d[1][1][0],d[1][0][0]]),this}bar(t,e,i,s,o=s){let r=i.clone().sub(e),a=r.length();if(a<1e-5)return this;r.divideScalar(a);let c=new X().crossVectors(r,np);c.lengthSq()<1e-8&&c.set(1,0,0),c.normalize().multiplyScalar(s/2);let l=new X().crossVectors(c,r).normalize().multiplyScalar(o/2),f=u=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,y])=>u.clone().addScaledVector(c,p).addScaledVector(l,y)),h=f(e),d=f(i);for(let u=0;u<4;u++){let p=(u+1)%4;this.quad(t,h[u],h[p],d[p],d[u],h[u].clone().add(h[p]).multiplyScalar(.5).sub(e))}return this.quad(t,h[0],h[1],h[2],h[3],r.clone().negate()),this.quad(t,d[0],d[1],d[2],d[3],r),this}slab(t,e,i,s,o,r){return this.face(t,[new X(e,r,i),new X(e,r,o),new X(s,r,o),new X(s,r,i)]),this}cylinder(t,e,i,s,o,r,a=10,c=o){let l=(d,u)=>Array.from({length:a},(p,y)=>{let _=y/a*Math.PI*2;return new X(e+Math.cos(_)*d,u,s+Math.sin(_)*d)}),f=l(o,i),h=l(c,i+r);for(let d=0;d<a;d++){let u=(d+1)%a;this.face(t,[f[d],h[d],h[u],f[u]])}return c>.001&&this.face(t,[...h].reverse()),this}get empty(){return[...this.parts.values()].every(t=>!t.indices.length)}build(t,{cast:e=!0,receive:i=!0,where:s=""}={}){let o=[];for(let[r,a]of this.parts){if(!a.indices.length)continue;let c=$v(r,s),l=new bn;l.setAttribute("position",new pn(a.positions,3)),l.setAttribute("normal",new pn(a.normals,3)),l.setAttribute("uv",new pn(a.uvs,2)),l.setIndex(a.indices);let f=new Be(l,c);f.castShadow=e&&!c.transparent,f.receiveShadow=i,t.add(f),o.push(f)}return o}},Fv=new pi({transparent:!0,depthWrite:!1,side:zn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`}),wo=class{constructor(){this.positions=[],this.shades=[],this.indices=[]}strip(t,e,i,s,o,r=0){let a=this.positions.length/3;for(let[c,l]of[[t,o],[e,o],[i,r],[s,r]])this.positions.push(c.x,c.y,c.z),this.shades.push(Math.sqrt(Math.max(0,l)));return this.indices.push(a,a+1,a+2,a,a+2,a+3),this}ring(t,e,i,s,o,r,a=14){let c=this.positions.length/3;for(let l=0;l<a;l++){let f=l/a*Math.PI*2;for(let[u,p]of[[s,r],[o,0]])this.positions.push(t+Math.cos(f)*u,e,i+Math.sin(f)*u),this.shades.push(Math.sqrt(p));let h=c+l*2,d=c+(l+1)%a*2;this.indices.push(h,d,d+1,h,d+1,h+1)}return this}around(t,e,i,s,o,r,a,c,l=0){let f=Math.cos(r),h=Math.sin(r),d=(p,y,_)=>{let x=p*(s/2+_),S=y*(o/2+_);return new X(t+x*f+S*h,e,i-x*h+S*f)},u=[[-1,-1],[1,-1],[1,1],[-1,1]];return l>0&&this.strip(d(-1,-1,0),d(1,-1,0),d(1,1,0),d(-1,1,0),l,l),u.forEach(([p,y],_)=>{let[x,S]=u[(_+1)%4];this.strip(d(p,y,0),d(x,S,0),d(x,S,a),d(p,y,a),c)}),this}get empty(){return!this.indices.length}build(t){if(!this.indices.length)return null;let e=new bn;e.setAttribute("position",new pn(this.positions,3)),e.setAttribute("shade",new pn(this.shades,1)),e.setIndex(this.indices);let i=new Be(e,Fv);return i.renderOrder=-1,t.add(i),i}};function ji(n){n.traverse(t=>{(t.isMesh||t.isLine||t.isSprite)&&(t.geometry?.dispose(),t.userData.ownMaterial&&(t.material.map?.dispose(),t.material.dispose()))}),n.clear()}function tu(n){let t=document.createElement("canvas");return t.width=n,t.height=n,t}function kl(n,t,e,i,s){let o=Math.imul((n%e+e)%e,374761393)^Math.imul((t%i+i)%i,668265263)^Math.imul(s+1,1274126177);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}var jf=new Map;function Bv(n,t,e,i,s){let o=`${n}|${t}|${e}|${i}|${s}`;if(jf.has(o))return jf.get(o);let r=new Float32Array(n*n),a=1,c=0;for(let l=0;l<i;l++){let f=Math.max(1,Math.round(t*2**l)),h=Math.max(1,Math.round(e*2**l));for(let d=0;d<n;d++){let u=d/n*h,p=Math.floor(u),y=u-p,_=y*y*(3-2*y);for(let x=0;x<n;x++){let S=x/n*f,w=Math.floor(S),v=S-w,A=v*v*(3-2*v),P=kl(w,p,f,h,s+l*7),C=kl(w+1,p,f,h,s+l*7),M=kl(w,p+1,f,h,s+l*7),m=kl(w+1,p+1,f,h,s+l*7);r[d*n+x]+=(P+(C-P)*A+(M-P)*_+(P-C-M+m)*A*_)*a}}c+=a,a*=.5}for(let l=0;l<r.length;l++)r[l]/=c;return jf.set(o,r),r}var ip=n=>{let t=Math.round(Math.min(1,Math.max(0,n))*255);return`rgb(${t},${t},${t})`},Ys=([n,t,e],i=0)=>`rgb(${Math.round(n+i)},${Math.round(t+i)},${Math.round(e+i)})`,eu=class{constructor(t){this.size=t,this.colour=tu(t).getContext("2d",{willReadFrequently:!0}),this.height=tu(t).getContext("2d",{willReadFrequently:!0}),this.passes=[],this.random=1}roll(){return this.random++,xi(this.random,this.size,7)}fill(t,e=.5){return this.colour.fillStyle=Array.isArray(t)?Ys(t):t,this.colour.fillRect(0,0,this.size,this.size),this.height.fillStyle=ip(e),this.height.fillRect(0,0,this.size,this.size),this}both(t,e,i){for(let[s,o]of[[this.colour,t],[this.height,e==null?null:ip(e)]])if(o!=null){s.fillStyle=o,s.strokeStyle=o;for(let r of[0,-this.size,this.size])for(let a of[0,-this.size,this.size])s.save(),s.translate(r,a),i(s),s.restore()}return this}rect(t,e,i,s,o,r){return this.both(Array.isArray(o)?Ys(o):o,r,a=>a.fillRect(t,e,i,s))}line(t,e,i,s,o,r,a){return this.both(r,a,c=>{c.lineWidth=o,c.beginPath(),c.moveTo(t,e),c.lineTo(i,s),c.stroke()})}dot(t,e,i,s,o){return this.both(s,o,r=>{r.beginPath(),r.arc(t,e,i,0,Math.PI*2),r.fill()})}speckle(t,[e,i],s,o){for(let r=0;r<t;r++)this.dot(this.roll()*this.size,this.roll()*this.size,e+this.roll()*(i-e),s[Math.floor(this.roll()*s.length)],typeof o=="function"?o(this.roll()):o);return this}streaks(t,e,{width:i=4,length:s=.6}={}){for(let o=0;o<t;o++){let r=this.roll()*this.size,a=this.roll()*this.size,c=(.2+this.roll()*s)*this.size,l=1+this.roll()*i;for(let f of[0,-this.size,this.size])for(let h of[0,-this.size]){let d=this.colour.createLinearGradient(0,a+h,0,a+h+c);d.addColorStop(0,e),d.addColorStop(1,"rgba(0,0,0,0)"),this.colour.fillStyle=d,this.colour.fillRect(r+f,a+h,l,c)}}return this}cracks(t,e,{width:i=1.2,level:s=.15,steps:o=26}={}){for(let r=0;r<t;r++){let a=this.roll()*this.size,c=this.roll()*this.size,l=this.roll()*Math.PI*2;for(let f=0;f<o;f++){l+=(this.roll()-.5)*1.1;let h=a+Math.cos(l)*this.size*.022,d=c+Math.sin(l)*this.size*.022;this.line(a,c,h,d,i*(.5+this.roll()),e,s),a=h,c=d}}return this}noise({cells:t=8,cellsY:e=t,octaves:i=3,colour:s=0,height:o=0,seed:r=1,tint:a=[1,1,1],ridge:c=!1}){return this.passes.push({cells:t,cellsY:e,octaves:i,colour:s,height:o,seed:r,tint:a,ridge:c}),this}finish({metres:t,depth:e=.002,rough:i=[.9,.9],shade:s=.7}){let{size:o}=this,r=this.colour.getImageData(0,0,o,o),a=this.height.getImageData(0,0,o,o).data,c=new Float32Array(o*o);for(let y=0;y<c.length;y++)c[y]=a[y*4]/255;for(let y of this.passes){let _=Bv(o,y.cells,y.cellsY,y.octaves,y.seed%3);for(let x=0;x<c.length;x++){let S=(y.ridge?1-Math.abs(_[x]*2-1):_[x])-.5;y.colour&&(r.data[x*4]+=S*y.colour*y.tint[0],r.data[x*4+1]+=S*y.colour*y.tint[1],r.data[x*4+2]+=S*y.colour*y.tint[2]),y.height&&(c[x]=Math.min(1,Math.max(0,c[x]+S*y.height)))}}this.colour.putImageData(r,0,0);let l=e*o/t*1.6,f=new Uint8Array(o*o*4),h=new Uint8Array(o*o*4);for(let y=0;y<o;y++){let _=(y-1+o)%o*o,x=(y+1)%o*o,S=(o-1-y)*o;for(let w=0;w<o;w++){let v=c[y*o+w],A=(c[y*o+(w+1)%o]-c[y*o+(w-1+o)%o])/2*l,P=(c[x+w]-c[_+w])/2*l,C=Math.hypot(A,P,1),M=(S+w)*4;f[M]=(-A/C*.5+.5)*255,f[M+1]=(P/C*.5+.5)*255,f[M+2]=(1/C*.5+.5)*255,f[M+3]=v*255,h[M]=(s+(1-s)*v)*255,h[M+1]=(i[0]+(i[1]-i[0])*v)*255,h[M+2]=255,h[M+3]=255}}let d=y=>(y.wrapS=hi,y.wrapT=hi,y.repeat.set(1/t,1/t),y.anisotropy=nu,y),u=y=>{let _=new us(y,o,o,Wn);return _.generateMipmaps=!0,_.minFilter=$i,_.magFilter=fi,_.needsUpdate=!0,d(_)},p=d(new jn(this.colour.canvas));return p.colorSpace=on,{map:p,normalMap:u(f),surfaceMap:u(h),metres:t,depth:e}}};function Xs(n,t,e,{joint:i,jointLevel:s=.2,gap:o=2,stagger:r=!0,palette:a,tone:c=16,level:l=.85,bevel:f=0}){let{size:h}=n;n.fill(i,s);let d=h/t,u=h/e;for(let p=0;p<e;p++){let y=r&&p%2?d/2:0;for(let _=0;_<t;_++){let x=a[Math.floor(n.roll()*a.length)],S=(n.roll()-.5)*c,w=_*d+y+o/2,v=p*u+o/2;n.rect(w,v,d-o,u-o,Ys(x,S),l+(n.roll()-.5)*.12),f&&(n.rect(w,v,d-o,f,"rgba(255,255,255,0.16)",null),n.rect(w,v+u-o-f,d-o,f,"rgba(0,0,0,0.2)",l-.25))}}}var sp={mortar:{size:512,metres:2.4,depth:.0035,rough:[.97,.85],relief:!0,paint(n){n.fill("#ece9e0").streaks(24,"rgba(92,88,74,0.11)").streaks(7,"rgba(58,70,58,0.09)",{width:10,length:.45}).cracks(3,"rgba(70,66,58,0.32)",{width:.8}).speckle(420,[.4,1.3],["rgba(120,115,102,0.28)","rgba(255,252,245,0.32)"],t=>.35+t*.45).noise({cells:6,octaves:4,colour:14,height:.16,seed:2,ridge:!0}).noise({cells:120,octaves:2,colour:11,height:.48,seed:3})}},stucco:{size:512,metres:2,depth:.0055,rough:[.97,.84],relief:!0,paint(n){n.fill("#f1eee7").noise({cells:10,octaves:4,colour:14,height:.58,seed:4,ridge:!0}).speckle(350,[.5,1.5],["rgba(110,104,92,0.22)","rgba(255,255,250,0.28)"],null).noise({cells:120,octaves:2,colour:7,height:.2,seed:5}).noise({cells:3,octaves:2,colour:9,seed:6})}},plaster:{size:256,metres:3,depth:.001,rough:[.9,.8],paint(n){n.fill("#f2f1ed").noise({cells:5,octaves:3,colour:7,height:.2,seed:7}).noise({cells:90,octaves:1,colour:4,height:.1,seed:8})}},concrete:{size:512,metres:3.6,depth:.0045,rough:[.96,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#b0aea6");for(let e=0;e<4;e++)for(let i=0;i<2;i++){let s=(n.roll()-.5)*10;n.rect(e*t/4,i*t/2,t/4,t/2,Ys([176,174,166],s),.52+(n.roll()-.5)*.06)}n.streaks(22,"rgba(66,68,66,0.16)",{width:7,length:.72});for(let e=0;e<4;e++)n.rect(e*t/4-1.5,0,3,t,"rgba(48,48,46,0.55)",.12),n.rect(e*t/4+1.5,0,1.5,t,"rgba(240,238,232,0.24)",.65);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(48,48,46,0.55)",.12),n.rect(0,e*t/2+1.5,t,1.5,"rgba(240,238,232,0.22)",.65);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let s=e*t/4+t/8,o=i*t/4+t/8;n.dot(s,o,4.8,"rgba(130,128,122,0.5)",.35),n.dot(s,o,3.2,"rgba(32,32,32,0.78)",.02)}n.speckle(360,[.5,1.8],["rgba(38,38,38,0.42)","rgba(74,74,70,0.35)","rgba(225,223,216,0.25)"],.12).noise({cells:5,octaves:4,colour:28,height:.1,seed:9}).noise({cells:150,octaves:1,colour:12,height:.24,seed:10})}},concreteStained:{size:512,metres:3.6,depth:.005,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#878681").streaks(54,"rgba(26,28,26,0.26)",{width:9,length:.75}).streaks(9,"rgba(120,70,35,0.26)",{width:5,length:.5}).streaks(10,"rgba(225,225,215,0.2)",{width:7,length:.35});for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(28,28,28,0.6)",.08);for(let e=0;e<2;e++)n.rect(0,e*t/2-2,t,4,"rgba(28,28,28,0.6)",.08);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.8,"rgba(18,18,18,0.8)",0);n.cracks(5,"rgba(24,24,24,0.55)").speckle(380,[.6,2.2],["rgba(30,30,30,0.45)","rgba(150,150,140,0.3)"],.1).noise({cells:4,octaves:4,colour:44,height:.1,seed:11}).noise({cells:150,octaves:1,colour:14,height:.26,seed:12})}},brick:{size:512,metres:1.76,depth:.009,rough:[.98,.86],relief:!0,paint(n){Xs(n,8,16,{joint:"#b6b0a4",gap:4,tone:26,bevel:2,palette:[[152,82,62],[166,96,70],[138,72,56],[176,108,84],[146,90,72]]}),n.speckle(500,[.6,1.8],["rgba(60,30,24,0.3)","rgba(210,150,120,0.25)"],null).noise({cells:70,octaves:2,colour:16,height:.2,seed:13}).noise({cells:4,octaves:3,colour:16,seed:14})}},brickWhite:{size:512,metres:1.76,depth:.008,rough:[.97,.8],relief:!0,paint(n){Xs(n,8,16,{joint:"#cfcbc2",gap:4,tone:10,bevel:2,palette:[[240,238,232],[232,230,224],[244,242,238],[226,222,214]]}),n.noise({cells:70,octaves:2,colour:9,height:.2,seed:15}).noise({cells:4,octaves:3,colour:10,seed:16})}},tile:{size:512,metres:.9,depth:.0045,rough:[.9,.24],relief:!0,paint(n){Xs(n,9,18,{joint:"#868178",jointLevel:.2,gap:3.4,tone:14,bevel:1.8,palette:[[244,243,238],[235,234,229],[248,247,244],[228,226,220],[239,236,228]]}),n.streaks(8,"rgba(80,76,68,0.08)",{width:5,length:.45}).noise({cells:4,octaves:3,colour:9,seed:17}).noise({cells:90,octaves:1,colour:5,height:.06,seed:18})}},siding:{size:512,metres:1.44,depth:.0075,rough:[.9,.68],relief:!0,paint(n){let{size:t}=n;n.fill("#efefeb");for(let e=0;e<8;e++){let i=e*t/8,s=(n.roll()-.5)*7;for(let o=0;o<16;o++)n.rect(0,i+o*t/128,t,t/128+.5,Ys([239,239,235],s),.34+o/15*.56);n.rect(0,i+t/8-3.2,t,3.2,"rgba(0,0,0,0.34)",.04),n.rect(0,i,t,2.2,"rgba(255,255,255,0.38)",null)}n.rect(t*.5-1.2,0,2.4,t,"rgba(90,88,82,0.28)",.16),n.noise({cells:6,cellsY:96,octaves:2,colour:10,height:.08,seed:19})}},planks:{size:512,metres:1.2,depth:.005,rough:[.95,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#e9d9c3");for(let e=0;e<8;e++){let i=e*t/8;if(n.rect(i,0,t/8,t,`rgba(${n.roll()>.5?"255,244,224":"70,46,24"},${.05+n.roll()*.13})`,.72+n.roll()*.14),n.rect(i-1.5,0,3,t,"rgba(34,22,12,0.75)",.05),n.roll()>.6){let s=i+t/16+(n.roll()-.5)*t/20,o=n.roll()*t;for(let r=4;r>0;r--)n.dot(s,o,r*2.4,`rgba(70,44,24,${.12+(4-r)*.09})`,.55)}}n.noise({cells:90,cellsY:3,octaves:2,colour:30,height:.16,seed:20,tint:[1,.86,.66]}).noise({cells:22,cellsY:2,octaves:2,colour:18,height:.08,seed:21,ridge:!0,tint:[1,.86,.66]})}},wood:{size:512,metres:1.1,depth:.0012,rough:[.82,.6],paint(n){n.fill("#96704e").noise({cells:70,cellsY:2,octaves:3,colour:34,height:.3,seed:22,tint:[1,.82,.6]}).noise({cells:14,cellsY:1,octaves:2,colour:22,seed:23,ridge:!0,tint:[1,.82,.6]}).noise({cells:3,octaves:2,colour:14,seed:24})}},metalPanel:{size:512,metres:2.4,depth:.004,rough:[.7,.42],paint(n){let{size:t}=n;n.fill("#e8e8e8",.8);for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(0,0,0,0.5)",.1),n.rect(e*t/4+2,0,2,t,"rgba(255,255,255,0.35)",null);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(0,0,0,0.42)",.15);n.noise({cells:3,octaves:3,colour:9,height:.05,seed:25}).noise({cells:2,cellsY:60,octaves:1,colour:5,seed:26})}},stone:{size:512,metres:2,depth:.014,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#77736b",.15);let e=0;for(let i of[.22,.3,.2,.28]){let s=n.roll()*40,o=s+t;for(;s<o-1;){let r=Math.min(o-s,t*(.14+n.roll()*.2)),a=(n.roll()-.5)*34,c=n.roll()>.6?[176,168,150]:[164,162,156];n.rect(s+2.5,e*t+2.5,r-5,i*t-5,Ys(c,a),.7+n.roll()*.25),s+=r}e+=i}n.noise({cells:26,octaves:4,colour:26,height:.4,seed:27}).noise({cells:4,octaves:2,colour:12,seed:28})}},wallpaper:{size:256,metres:.8,depth:6e-4,rough:[.95,.88],paint(n){n.fill("#f4f2ec").noise({cells:128,cellsY:20,octaves:1,colour:5,height:.5,seed:29}).noise({cells:20,cellsY:128,octaves:1,colour:5,height:.5,seed:30}).noise({cells:3,octaves:2,colour:4,seed:31})}},wallpaperStripe:{size:256,metres:.64,depth:6e-4,rough:[.95,.88],paint(n){let{size:t}=n;n.fill("#f3efe4");for(let e=0;e<4;e++)n.rect(e*t/4,0,t/8,t,"#cfdbe3",.55),n.rect(e*t/4+t/8-2,0,2,t,"#b9982f",.6);n.noise({cells:128,cellsY:20,octaves:1,colour:5,height:.4,seed:32})}},floorboards:{size:512,metres:1.44,depth:.0016,rough:[.7,.36],paint(n){let{size:t}=n;n.fill("#e3c79d",.8);for(let e=0;e<12;e++){let i=e*t/12,s=n.roll()*t;for(let o=0;o<3;o++){let r=t*(.22+n.roll()*.3);n.rect(i,s,t/12,r,`rgba(${n.roll()>.5?"255,240,214":"96,60,28"},${.04+n.roll()*.16})`,null),n.rect(i,s,t/12,1.6,"rgba(60,36,18,0.6)",.2),s+=r}n.rect(i-.8,0,1.6,t,"rgba(60,36,18,0.62)",.15)}n.noise({cells:110,cellsY:3,octaves:2,colour:22,height:.12,seed:33,tint:[1,.84,.62]}).noise({cells:26,cellsY:2,octaves:2,colour:12,seed:34,ridge:!0,tint:[1,.84,.62]})}},tatami:{size:512,metres:1.82,depth:.0015,rough:[.95,.82],paint(n){let{size:t}=n;n.fill("#b9bb86");for(let e=0;e<t;e+=3)n.rect(0,e,t,1.4,`rgba(86,96,48,${.1+n.roll()*.14})`,.25);for(let e of[0,t/2])n.rect(e-7,0,14,t,"#2f3a2c",.9);n.noise({cells:4,octaves:3,colour:10,seed:35,tint:[1,1,.5]}).noise({cells:160,cellsY:6,octaves:1,colour:8,height:.2,seed:36})}},bathTile:{size:256,metres:.8,depth:.0025,rough:[.9,.14],paint(n){Xs(n,8,8,{joint:"#a9b0b2",jointLevel:.25,gap:3,stagger:!1,tone:6,bevel:1.5,palette:[[246,248,248],[240,243,244],[250,251,251]]})}},checker:{size:256,metres:1.2,depth:.002,rough:[.9,.22],paint(n){let{size:t}=n;n.fill("#8a8a88",.3);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.rect(i*t/4+1,e*t/4+1,t/4-2,t/4-2,(e+i)%2?"#3f4042":"#f1eee7",.85);n.noise({cells:6,octaves:3,colour:8,seed:37})}},pavers:{size:512,metres:1.6,depth:.007,rough:[.98,.82],relief:!0,paint(n){Xs(n,4,4,{joint:"#7f7a70",jointLevel:.15,gap:6,stagger:!1,tone:16,bevel:3,palette:[[226,220,206],[214,208,194],[234,230,218],[206,200,186]]}),n.noise({cells:40,octaves:3,colour:16,height:.22,seed:38}).noise({cells:3,octaves:3,colour:14,seed:39})}},carpet:{size:256,metres:1,depth:.003,rough:[1,.96],paint(n){n.fill("#cfcfcf").noise({cells:128,octaves:1,colour:40,height:.7,seed:40}).noise({cells:5,octaves:3,colour:10,seed:41})}},kawara:{size:512,metres:1.5,depth:.032,rough:[.76,.42],relief:!0,paint(n){let{size:t}=n,e=6,i=5;n.fill("#cfcfcf");for(let s=0;s<i;s++){let o=s*t/i;for(let r=0;r<e;r++){let a=r*t/e,c=(n.roll()-.5)*24;for(let l=0;l<16;l++){let f=Math.sin(l/15*Math.PI*1.25-.25),h=f>.55?8:0;n.rect(a+l*t/e/16,o,t/e/16+.6,t/i,Ys([206,206,208],c+f*28+h),.22+Math.max(0,f)*.64)}n.rect(a,o+t/i-5.5,t/e,5.5,"rgba(0,0,0,0.44)",.02),n.rect(a,o,t/e,3.2,"rgba(255,255,255,0.26)",null)}}n.noise({cells:60,octaves:2,colour:10,height:.05,seed:42}).noise({cells:3,octaves:2,colour:12,seed:43})}},slate:{size:512,metres:1.2,depth:.009,rough:[.94,.66],relief:!0,paint(n){let{size:t}=n;n.fill("#b9b9b9",.5);for(let e=0;e<4;e++)for(let i=-1;i<6;i++){let s=i*t/6+(e%2?t/12:0),o=e*t/4,r=(n.roll()-.5)*32;for(let a=0;a<8;a++)n.rect(s+1,o+a*t/32,t/6-2,t/32+.5,Ys([196,196,196],r),.28+a/7*.62);n.rect(s,o+t/4-4.2,t/6,4.2,"rgba(0,0,0,0.45)",.04),n.rect(s,o+t/4-6,t/6,1.8,"rgba(255,255,255,0.18)",null),n.rect(s-1,o,2,t/4,"rgba(0,0,0,0.32)",.1)}n.noise({cells:50,octaves:3,colour:15,height:.09,seed:44})}},roofMetal:{size:256,metres:.9,depth:.024,rough:[.58,.36],relief:!0,paint(n){let{size:t}=n;n.fill("#d6d6d6",.3);for(let e=0;e<4;e++){let i=e*t/4;n.rect(i-5,0,10,t,"rgba(0,0,0,0.24)",.65),n.rect(i-2,0,4,t,"rgba(255,255,255,0.45)",1)}n.noise({cells:2,cellsY:40,octaves:1,colour:6,seed:45}).noise({cells:4,octaves:3,colour:8,height:.04,seed:46})}},asphalt:{size:512,metres:4,depth:.0045,rough:[.96,.82],relief:!0,paint(n){n.fill("#45474b").speckle(2100,[.5,1.7],["rgba(182,182,178,0.52)","rgba(14,14,16,0.52)","rgba(128,124,114,0.48)","rgba(210,206,196,0.35)"],t=>.28+t*.64).cracks(5,"rgba(16,16,18,0.72)",{width:1.5,level:.05,steps:34}).noise({cells:5,octaves:4,colour:19,height:.1,seed:47}).noise({cells:180,octaves:1,colour:17,height:.42,seed:48})}},sidewalk:{size:512,metres:2.4,depth:.0055,rough:[.96,.8],relief:!0,paint(n){Xs(n,6,6,{joint:"#686660",jointLevel:.14,gap:4,stagger:!0,tone:16,bevel:2.2,palette:[[194,191,183],[182,179,171],[202,199,191],[174,171,163],[188,183,173]]}),n.speckle(420,[.5,1.7],["rgba(56,56,52,0.32)","rgba(236,235,228,0.28)"],null).noise({cells:64,octaves:2,colour:15,height:.22,seed:49}).noise({cells:3,octaves:3,colour:16,seed:50})}},grass:{size:512,metres:5.5,depth:.024,rough:[.98,.86],relief:!0,paint(n){let{size:t}=n;n.fill("#566f3e",.35),n.speckle(480,[2.5,8],["rgba(68,58,42,0.22)","rgba(54,78,38,0.28)","rgba(98,118,58,0.24)"],e=>.25+e*.3);for(let e=0;e<7200;e++){let i=n.roll(),s=n.roll()*t,o=n.roll()*t,r=(n.roll()-.5)*7,a=-2.5-n.roll()*6.5;n.line(s,o,s+r,o+a,.9+n.roll()*.7,i>.65?"rgba(138,162,88,0.52)":i>.3?"rgba(54,84,40,0.56)":"rgba(122,118,66,0.42)",.42+i*.52)}n.speckle(650,[.7,1.9],["rgba(154,176,98,0.45)","rgba(38,60,28,0.45)","rgba(196,192,138,0.28)"],e=>.55+e*.4),n.noise({cells:5,octaves:4,colour:32,height:.24,seed:51,tint:[.9,1,.55]}).noise({cells:28,octaves:2,colour:16,height:.14,seed:52,tint:[1,1,.35]})}},terrainGround:{size:512,metres:6.4,depth:.028,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#e6e6e2",.44),n.speckle(620,[2,7.5],["rgba(186,184,176,0.35)","rgba(246,245,240,0.32)","rgba(162,158,148,0.28)"],e=>.28+e*.36);for(let e=0;e<6400;e++){let i=n.roll(),s=n.roll()*t,o=n.roll()*t,r=(n.roll()-.5)*2.2,a=3+n.roll()*5.5;n.line(s,o,s+Math.sin(r)*a,o-Math.cos(r)*a,1,i>.5?"rgba(255,255,250,0.36)":"rgba(164,162,154,0.38)",.4+i*.52)}n.speckle(1100,[.6,2.1],["rgba(140,136,128,0.36)","rgba(255,255,252,0.38)"],e=>.35+e*.6).noise({cells:6,octaves:4,colour:22,height:.28,seed:65,ridge:!0}).noise({cells:36,octaves:2,colour:14,height:.22,seed:66})}},dirt:{size:512,metres:4.5,depth:.016,rough:[.99,.88],relief:!0,paint(n){n.fill("#867358",.42).speckle(1400,[.6,3.2],["rgba(56,46,34,0.44)","rgba(186,170,142,0.38)","rgba(112,94,72,0.42)","rgba(210,196,172,0.26)"],t=>.22+t*.72).cracks(6,"rgba(48,38,28,0.38)",{width:1.1,level:.14,steps:22}).noise({cells:5,octaves:4,colour:32,height:.34,seed:53,ridge:!0}).noise({cells:96,octaves:2,colour:16,height:.32,seed:54})}},gravel:{size:512,metres:1.8,depth:.016,rough:[.98,.84],relief:!0,paint(n){n.fill("#737068",.14).speckle(2200,[1.6,5.4],["#b9b5aa","#9e9a90","#c9c5ba","#8a877e","#a8a094","#68645c","#d6d1c6"],t=>.42+t*.56).speckle(900,[.6,1.8],["rgba(36,34,30,0.48)","rgba(240,236,228,0.34)"],t=>.3+t*.6).noise({cells:84,octaves:2,colour:14,height:.14,seed:55})}},revetment:{size:512,metres:2.8,depth:.016,rough:[.96,.78],relief:!0,paint(n){Xs(n,8,8,{joint:"#52524c",jointLevel:.1,gap:4.5,stagger:!0,tone:20,bevel:2.4,palette:[[166,165,158],[154,154,146],[176,174,166],[146,148,138],[160,158,150]]}),n.streaks(32,"rgba(44,58,38,0.24)",{width:9,length:.65}).streaks(18,"rgba(32,34,30,0.22)",{width:6,length:.75}).speckle(520,[.6,2],["rgba(42,46,38,0.38)","rgba(220,218,210,0.26)"],.25).noise({cells:48,octaves:2,colour:16,height:.22,seed:67})}},cblock:{size:512,metres:1.6,depth:.006,rough:[.98,.9],relief:!0,paint(n){Xs(n,4,8,{joint:"#a7a59d",jointLevel:.25,gap:3,tone:12,bevel:1,level:.86,palette:[[176,174,167],[168,167,161],[184,182,175],[162,161,156],[172,168,160]]}),n.speckle(900,[.4,1.4],["rgba(70,70,66,0.35)","rgba(210,208,200,0.25)"],.7).noise({cells:40,octaves:2,colour:12,height:.2,seed:61}).noise({cells:3,octaves:3,colour:14,seed:62,tint:[1,1,.9]})}},hedge:{size:512,metres:1.2,depth:.05,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#22381c",.15);let e=[[78,112,52],[92,128,60],[64,98,44],[104,136,66],[58,86,40],[118,146,70]];for(let i=0;i<3400;i++){let s=n.roll()*t,o=n.roll()*t,r=5+n.roll()*7,a=n.roll()*Math.PI,[c,l,f]=e[Math.floor(n.roll()*e.length)],h=.8+n.roll()*.4;n.both(`rgb(${Math.round(c*h)},${Math.round(l*h)},${Math.round(f*h)})`,.45+n.roll()*.55,d=>{d.beginPath(),d.ellipse(s,o,r,r*.45,a,0,Math.PI*2),d.fill()})}n.noise({cells:6,octaves:3,colour:26,height:.35,seed:63}).noise({cells:2,octaves:2,colour:14,seed:64,tint:[1,1,.6]})}},bark:{size:256,metres:1,depth:.03,rough:[1,.9],relief:!0,paint(n){n.fill("#6f5d4b").noise({cells:16,cellsY:2,octaves:3,colour:60,height:.9,seed:56,ridge:!0}).noise({cells:60,cellsY:20,octaves:2,colour:20,height:.15,seed:57}).noise({cells:3,octaves:2,colour:16,seed:58,tint:[.6,1,.6]})}}},Qf=new Map,nu=4,ba=1;function kv(n){if(!Qf.has(n)){let t=sp[n],e=new eu(t.size);t.paint(e),Qf.set(n,{...e.finish(t),relief:!!t.relief})}return Qf.get(n)}var Hv={value:new X(1.32,1.27,1.17)},Vv=`
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
`,Gv=`
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
`,Wv=`
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
`;function Xv(n){n.userData.parallax={value:0},n.onBeforeCompile=t=>{t.uniforms.parallaxDepth=n.userData.parallax,t.uniforms.machiRoom=Hv,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMachiWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>
${Vv}`).replace("#include <map_fragment>",`vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${de.map_fragment.replaceAll("vMapUv","( vMapUv + parallaxUv )")}
        ${Gv}`).replace("#include <roughnessmap_fragment>",`${de.roughnessmap_fragment.replaceAll("vRoughnessMapUv","( vRoughnessMapUv + parallaxUv )")}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`).replace("#include <normal_fragment_maps>",de.normal_fragment_maps.replaceAll("texture2D( normalMap, vNormalMapUv )","texture2D( normalMap, vNormalMapUv + parallaxUv )")).replace("#include <lights_fragment_end>",`${Wv}
#include <lights_fragment_end>`).replace("#include <aomap_fragment>",de.aomap_fragment.replaceAll("vAoMapUv","( vAoMapUv + parallaxUv )"))},n.customProgramCacheKey=()=>"machi-surface"}function Yv(n){let{set:t,wants:e,recipe:i}=n.userData;if(!i)return;let s=(o,r)=>{r?n.defines[o]="":delete n.defines[o]};if(s("MACHI_WEAR",ba>=1),t){n.normalMap=ba>=1?t.normalMap:null,n.roughnessMap=ba>=1?t.surfaceMap:null,n.aoMap=ba>=1?t.surfaceMap:null;let o=ba>=2&&t.relief&&e;s("MACHI_PARALLAX",o),n.userData.parallax.value=o?t.depth/t.metres*1.5:0}n.needsUpdate=!0}var _s=new Map;function ft(n,t="#ffffff",{roughness:e,metalness:i=0,twoSided:s=!1,relief:o=!0,where:r=""}={}){let a=`${n}|${t}|${e}|${i}|${s}|${o}|${r}`;if(!_s.has(a)){let c=Object.hasOwn(sp,n),l={color:c?t:n,roughness:e??(c?1:.85),metalness:i};s&&(l.side=zn);let f=new Dn(l);f.userData={recipe:[n,t,{roughness:e,metalness:i,twoSided:s,relief:o}],wants:o},c&&(f.userData.set=kv(n),f.map=f.userData.set.map,f.aoMapIntensity=.85),r==="out"&&(f.defines.MACHI_OUTDOOR=""),r==="in"&&(f.defines.MACHI_INDOOR=""),Xv(f),Yv(f),_s.set(a,f)}return _s.get(a)}function $v(n,t){let e=n.userData?.recipe;return!e||!t?n:ft(e[0],e[1],{...e[2],where:t})}function _n(n){let t=Gs[n]??Gs["wp-white"];return ft(t.texture,t.tint,{roughness:t.roughness,metalness:t.metalness,twoSided:t.group==="roof"})}function Ma(n){let t=(mr[n]??mr.white)[1];if(n==="wood"||n==="wood-dark")return ft("wood",n==="wood"?"#c9a37a":"#7a5a44");let e=["black","silver","bronze","steel"].includes(n);return ft(t,"#ffffff",{roughness:e?.45:.6,metalness:e?.6:.05})}var gr=(n="#2c3a44")=>{let t=`glass|${n}`;return _s.has(t)||_s.set(t,new Dn({color:n,roughness:.05,metalness:1,envMapIntensity:1.35})),_s.get(t)},qe=(n,t=1.6)=>{let e=`glow|${n}|${t}`;return _s.has(e)||_s.set(e,new Dn({color:n,emissive:n,emissiveIntensity:t,roughness:.6})),_s.get(e)};function op(n=256){let t=tu(n),e=t.getContext("2d"),i=e.createImageData(n,n),s=[[1,2,.92,.3],[3,1,.64,1.7],[2,5,.46,4.1],[5,3,.34,2.6],[7,6,.24,5.2],[4,9,.18,.8],[11,8,.12,3.4],[8,13,.1,1.9]];for(let r=0;r<n;r++)for(let a=0;a<n;a++){let c=0,l=0;for(let[d,u,p,y]of s){let _=Math.cos((a*d+r*u)/n*Math.PI*2+y)*p;c+=_*d,l+=_*u}let f=Math.hypot(c*.24,l*.24,1),h=(r*n+a)*4;i.data[h]=(-c*.24/f*.5+.5)*255,i.data[h+1]=(-l*.24/f*.5+.5)*255,i.data[h+2]=(1/f*.5+.5)*255,i.data[h+3]=255}e.putImageData(i,0,0);let o=new jn(t);return o.wrapS=hi,o.wrapT=hi,o.anisotropy=nu,o}function wa(n,{color:t="#30383c",background:e="",font:i="700 64px system-ui, sans-serif",padding:s=18,border:o=""}={}){let r=document.createElement("canvas"),a=r.getContext("2d");a.font=i;let c=a.measureText(n),l=Math.ceil((c.actualBoundingBoxAscent||52)+(c.actualBoundingBoxDescent||14))+s*2;r.width=Math.ceil(c.width)+s*2,r.height=l,a.font=i,e&&(a.fillStyle=e,a.beginPath(),a.roundRect(0,0,r.width,r.height,Math.min(r.height/2,30)),a.fill(),o&&(a.strokeStyle=o,a.lineWidth=4,a.stroke())),a.fillStyle=t,a.textBaseline="middle",a.textAlign="center",a.fillText(n,r.width/2,r.height/2+2);let f=new jn(r);return f.colorSpace=on,f.anisotropy=nu,{map:f,aspect:r.width/r.height}}var We=(n="#b08a62")=>ft("wood",n),Kt=(n,t=.6,e=0)=>ft(n,"#ffffff",{roughness:t,metalness:e}),_i=()=>Kt("#f4f2ec",.5),$n=n=>ft("carpet",n),Fi=()=>Kt("#70777a",.45,.7),Rn=()=>Kt("#3d4447",.6,.5),yn=()=>Kt("#2b3035",.5),iu=()=>Kt("#15181a",.2),ys=["#7c93a8","#a88b7c","#8aa184","#b3899a","#c2a56b","#6f7f93"],Hl=["#dda995","#9fba98","#dfb184","#ab9fbd","#d69698","#647991"],rp=["#a8574e","#56789a","#d9b25a","#5f8a6b","#8a6aa0","#e2ddcf"];function Sa(n,t,e,i,s,o=.05){for(let r of[-1,1])for(let a of[-1,1])n.box(t,r*(e/2-o),s/2,a*(i/2-o),o,s,o)}function qv(n,t,e,i,s,o){let r=Kt("#1b1c1e",.9),a=Kt("#b9bcbd",.4,.8),c=(h,d)=>Array.from({length:12},(u,p)=>{let y=p/12*Math.PI*2;return new X(t+h*o/2,e+Math.sin(y)*d,i+Math.cos(y)*d)}),[l,f]=[c(-1,s),c(1,s)];for(let h=0;h<12;h++){let d=(h+1)%12;n.quad(r,l[h],l[d],f[d],f[h],new X(0,l[h].y+l[d].y-2*e,l[h].z+l[d].z-2*i))}for(let h of[-1,1]){let d=(u,p)=>{let y=u[1].clone().sub(u[0]).cross(u[2].clone().sub(u[0])).x*h;n.face(p,y>=0?u:[...u].reverse())};d(c(h,s),r),d(c(h*1.02,s*.6),a)}}var Vl=null;function Kv(){if(Vl)return Vl;let n=document.createElement("canvas");n.width=64,n.height=64;let t=n.getContext("2d");t.fillStyle="#d9a91c",t.fillRect(0,0,64,64);let e=t.createRadialGradient(28,28,2,32,32,20);e.addColorStop(0,"#f6d35a"),e.addColorStop(.75,"#e4b52a"),e.addColorStop(1,"#b8890f"),t.fillStyle=e,t.beginPath(),t.arc(32,32,19,0,Math.PI*2),t.fill();let i=new jn(n);return i.colorSpace=on,i.wrapS=i.wrapT=hi,i.repeat.set(1/.075,1/.075),i.anisotropy=4,Vl=new Dn({map:i,roughness:.7}),Vl}function ap(n){n.box(Kt("#2e3236",.6),0,.05,0,.17,.1,1.46)}function cp(n){n.box(Kt("#1c2023",.28,.3),0,.985,0,.19,.09,1.5);for(let t of[-1,1])n.box(Kt("#2a2f33",.3,.3),0,1.038,t*.5,.16,.016,.24).box(qe("#2f7df0",1.2),0,1.048,t*.5,.11,.004,.15).box(Kt("#e6c229",.5),0,1.032,t*.68,.11,.006,.03).box(qe("#cfe6d8",.6),0,1.034,t*.27,.12,.004,.12)}var Zv={sofa(n,t){let e=$n(t(ys));n.box(e,0,.21,.04,1.5,.3,.64).box(e,0,.5,-.28,1.5,.56,.16);for(let i of[-.68,.68])n.box(e,i,.3,.04,.14,.56,.64);for(let i of[-.31,.31])n.box($n(t(ys,1)),i,.41,.06,.58,.12,.52);Sa(n,Rn(),1.44,.66,.07,.04)},armchair(n,t){let e=$n(t(ys));n.box(e,0,.22,.04,.78,.3,.66).box(e,0,.52,-.3,.78,.56,.14);for(let i of[-.33,.33])n.box(e,i,.3,.04,.12,.54,.66)},"table-low"(n){n.box(We(),0,.355,0,.95,.05,.55),Sa(n,We("#8f6a48"),.95,.55,.33)},tv(n){n.box(We("#8f6a48"),0,.21,0,1.3,.42,.38).box(iu(),0,.82,0,1.06,.62,.04).box(yn(),0,.47,0,.3,.1,.16).box(qe("#3b5a78",.35),0,.82,.022,.98,.54,.004)},shelf(n){let t=We("#9a7650");for(let e of[-.43,.43])n.box(t,e,.9,0,.04,1.8,.3);n.box(t,0,.9,-.14,.86,1.8,.02);for(let e=0;e<=5;e++)n.box(t,0,.02+e*.352,0,.86,.04,.3);for(let e=0;e<5;e++){let i=-.4;for(let s=0;i<.34;s++){let o=.035+xi(e,s,3)*.04,r=.2+xi(e,s,5)*.1;n.box(Kt(rp[Math.floor(xi(e,s)*rp.length)],.8),i+o/2,.04+e*.352+r/2,.01,o,r,.2),i+=o+.004,xi(e,s,9)>.86&&(i+=.1)}}},cabinet(n){n.box(We("#a8825a"),0,.425,0,.9,.85,.4).box(We("#8f6a48"),0,.86,0,.94,.03,.44);for(let t of[-.22,.22])n.box(We("#b89064"),t,.42,.203,.42,.74,.01).box(Rn(),t*.2,.46,.215,.02,.1,.02)},rug(n,t){n.box($n(t(ys)),0,.01,0,1.8,.02,1.2).box($n(t(ys,2)),0,.012,0,1.5,.02,.9)},plant(n){n.cylinder(Kt("#b9845e",.9),0,0,0,.15,.3,10,.19).cylinder(Kt("#4a3a2c",1),0,.28,0,.17,.02,10);let t=Kt("#4f7d4a",.9);for(let e=0;e<7;e++){let i=e/7*Math.PI*2;n.box(t,Math.cos(i)*.1,.62+e%3*.12,Math.sin(i)*.1,.07,.72+e%2*.2,.02,-i)}},lamp(n){n.cylinder(Rn(),0,0,0,.13,.03,10).cylinder(Rn(),0,.03,0,.015,1.2,6).cylinder(qe("#fff0cf",1.1),0,1.2,0,.17,.28,12,.12)},"ceiling-light"(n){n.cylinder(_i(),0,.05,0,.22,.05,16).cylinder(qe("#fff4dc",1.6),0,0,0,.19,.05,16)},"table-dining"(n){n.box(We("#c19a6b"),0,.7,0,1.4,.04,.8),Sa(n,We("#9a7650"),1.36,.76,.68,.06)},chair(n){let t=We("#9a7650");n.box(t,0,.44,.02,.42,.04,.42).box(t,0,.68,-.19,.4,.34,.03),Sa(n,t,.42,.44,.42,.035)},kitchen(n){n.box(_i(),0,.42,0,1.5,.84,.58).box(Kt("#cfd2d2",.3,.6),0,.855,0,1.52,.03,.6).box(Kt("#3a3f42",.3,.6),-.36,.866,0,.5,.012,.4).box(Kt("#1c1e1f",.4),.4,.872,.02,.5,.012,.36).cylinder(Fi(),-.36,.87,-.2,.012,.22,6).box(_i(),0,1.72,-.12,1.5,.5,.34);for(let t of[-.5,0,.5])n.box(Rn(),t,.6,.295,.14,.015,.012)},fridge(n){let t=Kt("#dfe3e6",.3,.5);n.box(t,0,.88,0,.62,1.76,.64).box(Kt("#b9bec2",.3,.5),0,1.16,.322,.6,.012,.004).box(Rn(),-.24,1.4,.335,.025,.36,.025).box(Rn(),-.24,.8,.335,.025,.4,.025)},bed(n,t){n.box(We(),0,.15,0,1,.3,1.95).box(We("#8f6a48"),0,.45,-.955,1,.9,.04).box($n("#f4f2ec"),0,.38,.01,.94,.16,1.86).box($n(t(ys)),0,.43,.3,.97,.1,1.25).box($n("#f4f2ec"),0,.5,-.68,.6,.1,.36)},"bed-double"(n,t){n.box(We(),0,.15,0,1.5,.3,1.95).box(We("#8f6a48"),0,.45,-.955,1.5,.9,.04).box($n("#f4f2ec"),0,.38,.01,1.44,.16,1.86).box($n(t(ys)),0,.43,.3,1.47,.1,1.25);for(let e of[-.37,.37])n.box($n("#f4f2ec"),e,.5,-.68,.56,.1,.36)},desk(n){n.box(We("#c19a6b"),0,.7,0,1.1,.04,.55).box(We("#a8825a"),.36,.5,0,.34,.36,.5);for(let t of[-.52,.52])n.box(We("#9a7650"),t,.34,0,.04,.68,.5)},wardrobe(n){n.box(We("#b89064"),0,.95,0,1,1.9,.55);for(let t of[-.25,.25])n.box(We("#c9a37a"),t,.95,.278,.48,1.8,.01).box(Rn(),t*.16,1,.29,.02,.16,.02)},chabudai(n){n.cylinder(We("#6e4b32"),0,.27,0,.5,.05,20);for(let[t,e]of[[-.28,-.28],[.28,-.28],[.28,.28],[-.28,.28]])n.cylinder(We("#5e4030"),t,0,e,.03,.27,6)},zabuton(n,t){n.box(Kt(t(["#7c4a54","#4f6a7c","#6f7a4a","#8a6a4f"]),1),0,.04,0,.5,.08,.5)},futon(n,t){n.box($n("#f4f2ec"),0,.05,0,1,.1,1.9).box($n(t(ys)),0,.11,.26,1.02,.08,1.3).box($n("#f4f2ec"),0,.13,-.72,.5,.07,.3)},toilet(n){n.box(_i(),0,.2,.12,.38,.4,.5).box(_i(),0,.56,-.24,.42,.42,.18).box(Kt("#e6e4dc",.4),0,.42,.12,.36,.04,.46)},bathtub(n){n.box(_i(),0,.28,0,.75,.56,1.4).box(gr("#5f97a8"),0,.5,0,.62,.02,1.26).cylinder(Fi(),.24,.56,-.6,.015,.16,6)},washbasin(n){n.box(_i(),0,.4,0,.6,.8,.45).box(Kt("#e6e9ea",.2),0,.82,.02,.5,.04,.34).box(gr("#9fb9bd"),0,1.45,-.21,.5,.7,.02).cylinder(Fi(),0,.84,-.14,.012,.14,6)},washer(n){n.box(_i(),0,.45,0,.6,.9,.6).cylinder(Kt("#5f6b73",.2,.3),0,.3,.26,.2,.36,16).box(yn(),0,.82,.302,.5,.08,.004)},"shoe-box"(n){n.box(We("#a8825a"),0,.45,0,1,.9,.34);for(let t of[-.25,.25])n.box(We("#b89064"),t,.45,.173,.48,.8,.008)},boxes(n){n.box(ft("wood","#c9a880"),-.1,.3,-.05,.6,.6,.6).box(ft("wood","#b8946c"),.08,.84,0,.5,.48,.5,.2).box(ft("wood","#d2b48c"),.26,.2,.2,.36,.4,.4,-.3)},rack(n){let t=Fi();for(let e of[-.62,.62])n.box(t,e,.85,0,.035,1.7,.035).box(t,e,.02,0,.04,.04,.4);n.box(t,0,1.68,0,1.26,.035,.035);for(let e=0;e<6;e++)n.box($n(Hl[e%Hl.length]),-.5+e*.2,1.2,0,.14,.82,.34)},counter(n){n.box(We("#a8825a"),0,.49,0,1.6,.98,.56).box(_i(),0,1,0,1.68,.04,.64).box(yn(),.5,1.12,0,.3,.2,.3).box(iu(),.5,1.28,-.06,.26,.16,.02)},mirror(n){n.box(We("#9a7650"),0,.95,0,.9,1.9,.06).box(gr("#9fb9bd"),0,.97,.035,.78,1.72,.01)},"cafe-table"(n){n.cylinder(We("#c19a6b"),0,.69,0,.4,.035,18).cylinder(Rn(),0,.02,0,.035,.67,8).cylinder(Rn(),0,0,0,.24,.025,14)},stool(n,t){n.cylinder($n(t(ys)),0,.4,0,.17,.06,14);for(let e=0;e<3;e++){let i=e/3*Math.PI*2;n.cylinder(Rn(),Math.cos(i)*.12,0,Math.sin(i)*.12,.015,.4,6)}},"office-desk"(n){n.box(_i(),0,.71,0,1.2,.035,.62);for(let t of[-.57,.57])n.box(yn(),t,.35,0,.035,.7,.58);n.box(iu(),0,1,-.16,.54,.33,.025).box(qe("#44627c",.4),0,1,-.146,.5,.29,.004).box(yn(),0,.78,-.16,.06,.12,.05).box(yn(),0,.735,.12,.4,.015,.13)},"office-chair"(n,t){let e=Kt(t(["#3f4c5c","#4a4a4c","#5c3f3f","#3f5c4a"]),.95);n.box(e,0,.46,0,.46,.08,.44).box(e,0,.78,-.2,.42,.5,.06).cylinder(Rn(),0,.06,0,.025,.38,8);for(let i=0;i<5;i++){let s=i/5*Math.PI*2;n.box(Rn(),Math.cos(s)*.14,.04,Math.sin(s)*.14,.28,.035,.04,-s)}},bench(n){let t=ft("planks","#c9b392");for(let e of[-.16,0,.16])n.box(t,0,.45,e,1.6,.045,.13);for(let e of[.66,.82])n.box(t,0,e,-.25,1.6,.12,.04);for(let e of[-.68,.68])n.box(Rn(),e,.225,0,.06,.45,.46).box(Rn(),e,.66,-.25,.05,.44,.05)},planter(n){n.box(Kt("#a8795a",.95),0,.19,0,.9,.38,.35).box(Kt("#4a3a2c",1),0,.385,0,.84,.01,.29);for(let t=0;t<7;t++){let e=-.36+t*.12;n.box(Kt("#4f7d4a",.95),e,.47,t%2*.08-.04,.09,.18,.09,t).box(Kt(["#d4667a","#e9b44c","#f2ede4","#b98fd0"][t%4],.9),e,.58,t%2*.08-.04,.07,.06,.07,t)}},hedge(n){let t=ft("grass","#7f9a6a");n.box(t,0,.55,0,1.6,1,.46).box(t,.3,1.07,.02,.8,.12,.36).box(t,-.4,1.06,-.03,.6,.1,.32)},fence(n){let t=ft("planks","#e9e2d2");for(let e of[-.76,0,.76])n.box(t,e,.5,0,.08,1,.08);for(let e of[.3,.78])n.box(t,0,e,0,1.6,.07,.04);for(let e=0;e<9;e++)n.box(t,-.68+e*.17,.52,.03,.09,.92,.02)},tree(n){n.cylinder(ft("bark"),0,0,0,.09,1.5,8,.06);let t=ft("grass","#6f9a5c");for(let[e,i,s,o]of[[0,2.2,0,1.3],[.4,1.8,.2,.9],[-.35,1.9,-.25,1],[.1,2.8,-.1,.8]])n.cylinder(t,e,i-o/2,s,o*.5,o*.5,9,o*.62).cylinder(t,e,i,s,o*.62,o*.45,9,o*.2)},mailbox(n){n.cylinder(Rn(),0,0,0,.03,.85,8).box(Kt("#b9352c",.5,.2),0,.98,0,.3,.24,.22).box(yn(),0,1.04,.112,.2,.02,.004)},bicycle(n,t){let e=Kt(t(["#b9352c","#3f6b8a","#4f7d4a","#e2ddcf","#2b3035"]),.5,.4);for(let i of[-.55,.55])for(let s=0;s<10;s++){let o=s/10*Math.PI*2;n.box(yn(),0,.33+Math.sin(o)*.31,i+Math.cos(o)*.31,.03,.2,.03,0)}n.box(e,0,.55,0,.03,.03,.9).box(e,0,.72,-.2,.03,.36,.03).box(e,0,.74,.48,.03,.44,.03).box(yn(),0,.92,-.22,.14,.04,.24).box(Rn(),0,.98,.48,.46,.03,.03)},vending(n,t){let e=Kt(t(["#f2f2ee","#c0392b","#2f6fa8","#f2f2ee"]),.4,.2);n.box(e,0,.925,0,1,1.85,.7).box(qe("#eaf4ff",.9),0,1.3,.352,.84,.86,.004).box(yn(),0,.42,.352,.5,.16,.004).box(yn(),.32,.72,.352,.16,.12,.004);for(let i=0;i<3;i++)for(let s=0;s<7;s++)n.cylinder(Kt(Hl[(i*3+s)%Hl.length],.4,.3),-.36+s*.12,.98+i*.27,.34,.035,.13,8)},car(n,t){let e=Kt(t(["#e8e8e4","#c9ccd0","#3a4046","#8fa3b5","#b9a37f","#a34a43","#f1efe6"]),.35,.35),i=Kt("#1c1f22",.6),s=gr("#27323a");n.box(e,0,.56,0,1.46,.52,3.36).box(e,0,1.13,-.18,1.36,.64,2.25),n.box(s,0,1.17,.955,1.2,.44,.02).box(s,0,1.17,-1.315,1.2,.42,.02);for(let o of[-.688,.688])n.box(s,o,1.19,-.18,.02,.38,1.9);n.box(i,0,.36,1.66,1.42,.2,.1).box(i,0,.36,-1.66,1.42,.2,.1);for(let o of[-.55,.55])n.box(qe("#fff4d8",.3),o,.7,1.686,.26,.12,.02),n.box(Kt("#a8322c",.4),o,.74,-1.686,.22,.14,.02),n.box(i,o*1.28,1.02,.7,.14,.09,.05);n.box(_i(),0,.44,1.712,.33,.165,.01).box(_i(),0,.5,-1.712,.33,.165,.01);for(let o of[-.64,.64])for(let r of[1.08,-1.08])qv(n,o,.29,r,.29,.2)},cupboard(n){let t=_i();n.box(t,0,.43,0,.9,.86,.45).box(We("#b08a62"),0,.875,0,.92,.03,.47),n.box(t,0,1.4,-.06,.9,.9,.33);for(let e of[-.225,.225])n.box(gr("#5d7480"),e,1.4,.108,.4,.8,.008).box(Fi(),e*.2,.5,.232,.02,.12,.012)},tansu(n){let t=We("#7a5a44");n.box(t,0,.65,0,.9,1.3,.45);for(let e=0;e<5;e++){n.box(We("#8a6850"),0,.15+e*.25,.228,.84,.22,.01);for(let i of[-.2,.2])n.box(Rn(),i,.15+e*.25,.238,.09,.02,.012)}},"mail-boxes"(n){n.box(Fi(),0,.85,0,1.2,.9,.3);for(let t=0;t<3;t++)for(let e=0;e<4;e++)n.box(Kt("#d9dcd8",.4,.5),-.45+e*.3,.55+t*.3,.152,.27,.27,.006),n.box(yn(),-.45+e*.3,.63+t*.3,.158,.18,.02,.004);Sa(n,Fi(),1.16,.26,.4,.04)},"ac-unit"(n,t,e={}){let i=Kt("#dedbd1",.55,.15),s=Kt("#2a2d30",.6),o=.1;if(e.hung)for(let a of[-.27,.27])n.box(Kt("#c9ccc8",.4,.6),a,o-.02,-.06,.04,.04,.42),n.bar(Kt("#c9ccc8",.4,.6),new X(a,o-.04,.12),new X(a,-.25,-.26),.035,.035);else for(let a of[-.25,.25])n.box(Kt("#3a3d40",.7),a,o/2,0,.07,o,.42);n.box(i,-.03,o+.275,-.01,.8,.55,.27);let r=(a,c,l)=>n.face(l,Array.from({length:24},(f,h)=>{let d=-h/24*Math.PI*2;return new X(-.17+Math.cos(d)*a,o+.28+Math.sin(d)*a,c)}));r(.21,.126,s),r(.06,.13,Kt("#4a4e52",.5));for(let a of[.09,.14,.19])for(let c=0;c<16;c++){let l=c/16*Math.PI*2,f=(c+1)/16*Math.PI*2;n.bar(Kt("#9a9890",.5,.3),new X(-.17+Math.cos(l)*a,o+.28+Math.sin(l)*a,.132),new X(-.17+Math.cos(f)*a,o+.28+Math.sin(f)*a,.132),.006,.006)}for(let a=0;a<8;a++)n.box(Kt("#c9c6bc",.6),.22,o+.08+a*.055,.128,.24,.012,.012);if(n.box(i,.405,o+.2,-.02,.05,.3,.2),!e.hung&&e.h){let a=Kt("#e8e2cf",.5),c=-.27;n.box(a,.405,o+.12,(c+.04-.12)/2,.075,.063,Math.abs(c+.04+.12)),n.box(a,.405,(o+.12+e.h)/2,c+.035,.075,e.h-o-.12,.063),n.box(a,.405,e.h,c+.05,.135,.07,.1)}else e.hung&&n.box(Kt("#e8e2cf",.5),.405,o+.12,-.16,.075,.063,.22)},"gate-post"(n,t){let e=Kt(t(["#4d4741","#2f3336","#8a7a68","#b9bdbd"]),.45,.55);n.box(Kt("#a9a79f",.9),0,.03,0,.36,.06,.22),n.box(e,0,.73,0,.3,1.34,.16),n.box(yn(),0,.9,.081,.24,.035,.004).box(e,0,.93,.084,.25,.03,.01),n.box(Kt("#9a948a",.5,.5),0,.68,-.081,.22,.36,.004),n.box(Kt("#e9e6dd",.35,.1),0,1.13,.082,.22,.08,.006),n.box(yn(),-.05,1.13,.086,.12,.012,.002),n.box(Kt("#1d2023",.25,.3),0,1.3,.086,.1,.15,.02),n.box(Kt("#3c4247",.15,.5),0,1.345,.097,.025,.025,.002).box(Kt("#c9ccce",.3,.6),0,1.265,.097,.04,.04,.003),n.box(e,0,1.415,0,.3,.03,.18).box(qe("#fff1d6",.7),0,1.39,.06,.22,.02,.04)},"ticket-gate"(n){ap(n);let t=Kt("#c9cdcf",.36,.75);n.box(t,0,.52,0,.19,.84,1.42);for(let e of[-1,1])n.box(t,0,.5,e*.73,.15,.8,.06),n.box(qe("#27c46b",1.3),0,.78,e*.762,.09,.09,.004);for(let e of[-1,1])n.box(yn(),e*.096,.5,.12,.004,.5,.05).box(yn(),e*.096,.5,-.12,.004,.5,.05);n.box(Kt("#3f6f9a",.5),0,.3,0,.194,.08,1.42),cp(n)},"ticket-gate-clear"(n){ap(n);let t=Kt("#d5d8d9",.3,.8);for(let i of[-.74,-.25,.25,.74])for(let s of[-.085,.085])n.box(t,s,.52,i,.018,.84,.018);for(let i of[-.085,.085])n.box(t,i,.11,0,.018,.018,1.48);let e=Ai("inner");for(let i of[-1,1])n.face(e,[new X(i*.094,.1,-.74),new X(i*.094,.1,.74),new X(i*.094,.94,.74),new X(i*.094,.94,-.74)]);for(let i of[-1,1])n.face(e,[new X(-.085,.1,i*.749),new X(.085,.1,i*.749),new X(.085,.94,i*.749),new X(-.085,.94,i*.749)]),n.box(qe("#27c46b",1.3),0,.78,i*.752,.09,.09,.004);n.box(Kt("#8d9498",.4,.7),0,.84,0,.13,.012,1.3);for(let i=0;i<13;i++)n.box(Kt(i%2?"#2a2e31":"#b9bec1",.5,.4),0,.865,-.6+i*.1,.12,.03,.03);for(let i of[-.035,.035])n.box(Kt("#d98a2b",.8),i,.885,0,.02,.006,1.24);n.cylinder(Kt("#5f666b",.45,.7),0,.62,-.5,.05,.16,12).cylinder(Kt("#5f666b",.45,.7),0,.62,.5,.05,.16,12).box(Kt("#3a3f44",.6),0,.3,.42,.13,.3,.26).box(Kt("#1f7a4a",.5),.02,.5,-.05,.008,.3,.42).box(Kt("#1f7a4a",.5),-.03,.34,-.42,.008,.24,.3).box(Kt("#c9ccce",.4,.6),-.02,.6,.12,.06,.1,.16);for(let[i,s]of[[-.05,"#c0392b"],[-.035,"#e6c229"],[-.02,"#2f6fa8"]])n.box(Kt(s,.7),i,.2,-.05,.01,.01,1.1);cp(n)},"ticket-machine"(n){n.box(Kt("#e4e6e3",.45,.15),0,.875,0,.85,1.75,.5).box(Kt("#2f6fa8",.5),0,1.66,.252,.85,.14,.004).box(yn(),0,1.22,.252,.6,.48,.006).box(qe("#bcd8ef",.5),0,1.22,.256,.52,.4,.004).box(Kt("#c9cccd",.35,.7),0,.84,.262,.7,.2,.03).box(yn(),-.2,.86,.279,.09,.012,.004).box(yn(),.02,.86,.279,.16,.012,.004).box(qe("#2f7df0",.9),.24,.85,.279,.1,.07,.004).box(yn(),0,.6,.252,.34,.1,.02).box(Kt("#b9bdbf",.4,.6),0,.3,.252,.7,.4,.004)},"tactile-line"(n){n.box(Kv(),0,.004,0,.3,.008,2.4),n.box(Kt("#e4b52a",.7),.12,.01,0,.025,.006,2.4)},"platform-bench"(n){let t=Kt("#4f7396",.55);for(let e=0;e<4;e++){let i=-.675+e*.45;n.box(t,i,.44,.03,.4,.04,.4).box(t,i,.64,-.19,.4,.34,.04)}n.box(Fi(),0,.39,0,1.76,.05,.08).box(Fi(),0,.6,-.22,1.76,.04,.03);for(let e of[-.8,.8])n.box(Fi(),e,.2,0,.05,.4,.05).box(Fi(),e,.015,0,.08,.03,.44)},lantern(n){let t=ft("stone","#c9c6bd");n.cylinder(t,0,0,0,.22,.12,8).cylinder(t,0,.12,0,.09,.55,8).cylinder(t,0,.67,0,.2,.08,6).box(qe("#ffe6b0",.7),0,.88,0,.2,.26,.2).cylinder(t,0,1.02,0,.3,.16,6,.06)}};function Gl(n,t,e=0,i=0,s={}){let o=Zv[t];if(!o){let r=Un[t]??{w:.5,d:.5,h:.5};n.box(Kt("#b9b5aa"),0,r.h/2,0,r.w,r.h,r.d);return}o(n,(r,a=0)=>r[Math.floor(xi(e*3.1+a,i*7.3,t.length)*r.length)%r.length],s)}var Bi=.8,oi=2.3,rn=.03,Ea="#ffb23e",lp=()=>ft("#c9ccc8","#ffffff",{roughness:.34,metalness:.8}),Jv=()=>ft("#4a5054","#ffffff",{roughness:.42,metalness:.7}),jv=()=>ft("#ece6d8","#ffffff",{roughness:.62}),hp=()=>ft("#8f8b80","#ffffff",{roughness:.8});function su(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=new jn(e);return i.colorSpace=on,i.anisotropy=4,{canvas:e,map:i,context:e.getContext("2d")}}function Wl(n,t,e,i=1){let s=new Be(new ni(t,e),new Gn({map:n,toneMapped:!1,color:new he(i,i,i)}));return s.userData.ownMaterial=!0,s}function Qv({canvas:n,context:t,map:e},i,s){let{width:o,height:r}=n;if(t.fillStyle="#090b0c",t.fillRect(0,0,o,r),t.fillStyle=Ea,t.shadowColor=Ea,t.shadowBlur=10,s){let a=o*.25,c=r/2,l=r*.24*s;t.beginPath(),t.moveTo(a,c-l),t.lineTo(a+r*.2,c+l*.8),t.lineTo(a-r*.2,c+l*.8),t.closePath(),t.fill()}t.font=`700 ${Math.round(r*.74)}px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(String(i+1),o*(s?.66:.5),r*.54),t.shadowBlur=0,t.fillStyle="rgba(0, 0, 0, 0.3)";for(let a=0;a<r;a+=4)t.fillRect(0,a,o,1);for(let a=0;a<o;a+=4)t.fillRect(a,0,1,r);e.needsUpdate=!0}function t2(n){let t=Math.ceil(n.length/2),e=150+t*62+170,i=[];n.forEach((o,r)=>{let a=Math.floor(r/2);i.push({type:"floor",level:o,x:r%2?176:80,y:150+(t-1-a)*62+30,r:25})});let s=150+t*62;return i.push({type:"open",x:80,y:s+48,r:25},{type:"close",x:176,y:s+48,r:25}),{width:256,height:e,buttons:i,below:s}}function e2({canvas:n,context:t,map:e},i,{shown:s,heading:o,calls:r,at:a,open:c}){let{width:l,height:f}=n,h=t.createLinearGradient(0,0,l,0);h.addColorStop(0,"#b9bdbb"),h.addColorStop(.5,"#d9dcda"),h.addColorStop(1,"#b4b8b6"),t.fillStyle=h,t.fillRect(0,0,l,f),t.strokeStyle="#7d8280",t.lineWidth=3,t.strokeRect(1.5,1.5,l-3,f-3),t.fillStyle="#0a0c0d",t.beginPath(),t.roundRect(40,26,176,84,8),t.fill(),t.fillStyle=Ea,t.font='700 60px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(`${o>0?"\u25B2 ":o<0?"\u25BC ":""}${s+1}`,128,70);for(let u of i.buttons){let p=u.type==="floor"?r.has(u.level):u.type==="open"&&c;t.beginPath(),t.arc(u.x,u.y,u.r,0,Math.PI*2),t.fillStyle=p?Ea:"#f1f2f0",t.fill(),t.lineWidth=u.type==="floor"&&u.level===a?5:3,t.strokeStyle=p?"#c97a12":u.type==="open"?"#2f8a57":"#6f7573",t.stroke(),t.fillStyle=p?"#3a2606":"#2c3235",u.type==="floor"?(t.font='700 26px "Yu Gothic UI", system-ui, sans-serif',t.fillText(String(u.level+1),u.x,u.y+1)):(t.font='700 15px "Yu Gothic UI", system-ui, sans-serif',t.fillText(u.type==="open"?"\u25C0\u25B6":"\u25B6\u25C0",u.x,u.y-6),t.fillText(u.type==="open"?"\u958B":"\u9589",u.x,u.y+11))}let d=i.below+112;t.beginPath(),t.arc(128,d,21,0,Math.PI*2),t.fillStyle="#f0c13a",t.fill(),t.strokeStyle="#8a6a12",t.lineWidth=3,t.stroke(),t.fillStyle="#3a2f08",t.font='700 14px "Yu Gothic UI", system-ui, sans-serif',t.fillText("\u975E\u5E38",128,d+1),t.fillStyle="#4b5154",t.font='600 13px "Yu Gothic UI", system-ui, sans-serif',t.fillText("\u5B9A\u54E1 9\u540D\u3000\u7A4D\u8F09 600kg",128,f-18),e.needsUpdate=!0}function fp({canvas:n,context:t,map:e},{up:i,down:s,lit:o}){let{width:r,height:a}=n,c=t.createLinearGradient(0,0,r,0);c.addColorStop(0,"#b9bdbb"),c.addColorStop(.5,"#dadddb"),c.addColorStop(1,"#b4b8b6"),t.fillStyle=c,t.fillRect(0,0,r,a),t.strokeStyle="#7d8280",t.lineWidth=3,t.strokeRect(1.5,1.5,r-3,a-3),t.textAlign="center",t.textBaseline="middle";let l=[...i?[["\u25B2",a*(s?.3:.5)]]:[],...s?[["\u25BC",a*(i?.7:.5)]]:[]];for(let[f,h]of l)t.beginPath(),t.arc(r/2,h,30,0,Math.PI*2),t.fillStyle=o?Ea:"#f1f2f0",t.fill(),t.lineWidth=3,t.strokeStyle=o?"#c97a12":"#6f7573",t.stroke(),t.fillStyle=o?"#3a2606":"#2c3235",t.font="700 28px system-ui, sans-serif",t.fillText(f,r/2,h+1);e.needsUpdate=!0}function up(n){let{w:t,d:e}=n,i=n.stops.map(M=>M.level),s=Math.max(...i),o=Math.min(...i),r=new _e;r.position.set(n.x,n.stops[0].y,n.z),r.rotation.y=(n.r??0)*Math.PI/180;let a=new Ie,c=lp(),l=Jv(),f=jv();a.box(_n("stone-floor"),0,.02,0,t,.04,e),a.box(c,0,.043,e/2-.035,Bi+.12,.008,.07);for(let M of[-.012,.012])a.box(l,0,.048,e/2-.035+M,Bi+.1,.003,.007);for(let M of[-1,1]){let m=M*(t/2-rn/2);a.box(l,m,.06,0,rn,.12,e),a.box(c,m,.535,0,rn,.83,e),a.box(f,m,(.95+oi)/2,0,rn,oi-.95,e);for(let g of[-e/6,e/6])a.box(hp(),M*(t/2-rn-.002),(.95+oi)/2,g,.004,oi-.95,.008);a.box(hp(),M*(t/2-rn-.002),.95,0,.004,.012,e),a.box(c,M*(t/2-rn-.065),.85,-.06,.035,.035,e-.5);for(let g of[-e/2+.3,-.06,e/2-.42])a.box(c,M*(t/2-rn-.035),.85,g,.06,.018,.018);a.box(c,M*(t/4+Bi/4),oi/2,e/2-rn/2,t/2-Bi/2,oi,rn)}a.box(l,0,.06,-e/2+rn/2,t,.12,rn),a.box(c,0,.535,-e/2+rn/2,t,.83,rn),a.box(f,0,(.95+oi)/2,-e/2+rn/2,t,oi-.95,rn),a.box(c,0,.85,-e/2+rn+.065,t-.36,.035,.035);for(let M of[-t/2+.3,0,t/2-.3])a.box(c,M,.85,-e/2+rn+.035,.018,.018,.06);a.box(l,0,1.52,-e/2+rn+.004,t*.62+.03,.98,.006),a.box(ft("#aab6ba","#ffffff",{roughness:.06,metalness:1}),0,1.52,-e/2+rn+.009,t*.62,.95,.004),a.box(c,0,(2.1+oi)/2,e/2-rn/2,Bi,oi-2.1,rn),a.box(ft("#f4f2ec","#ffffff",{roughness:.7}),0,oi+.02,0,t,.04,e),a.box(qe("#fff6e0",1.25),0,oi-.006,0,t*.46,.012,e*.42);for(let M of[-1,1])for(let m of[-1,1])a.cylinder(qe("#fff3d6",1.5),M*t*.37,oi-.012,m*e*.37,.045,.012,12);for(let M=-2;M<=2;M++)a.box(l,M*.035,oi-.004,-e*.36,.014,.008,.16);a.build(r,{cast:!1,where:"in"});let h=[-1,1].map(M=>{let m=new _e,g=new Ie;return g.box(c,0,1.05,0,Bi/2+.012,2.1,.026),g.box(l,-M*(Bi/4),1.05,.014,.006,2.1,.002),g.build(m,{cast:!1,where:"in"}),m.position.set(M*Bi/4,0,e/2+.018),r.add(m),{leaf:m,side:M}}),d=su(192,96),u=t2(i),p=su(u.width,u.height),y=.17,_=y*u.height/u.width,x={x:-(t/4+Bi/4),y:1.24,z:e/2-rn-.004},S=Wl(p.map,y,_,.86);S.position.set(x.x,x.y,x.z),S.rotation.y=Math.PI,r.add(S);let w=Wl(d.map,.26,.13);w.position.set(0,2.2,e/2-rn-.004),w.rotation.y=Math.PI,r.add(w);let v=new Map,A={key:""},P=new Set;function C(M){Qv(d,M.shown,M.heading),e2(p,u,M);for(let[m,g]of v)fp(g.board,{up:m<s,down:m>o,lit:M.calls.has(m)})}return{car:r,hall(M){let m=new _e,g=new _e,[b,T]=M.out,I=[T,-b],R=Math.atan2(b,T),D=(M.gate?.r??.08)+.012,N=lp(),H=new Ie,U=Wl(d.map,.24,.12),F=[M.at[0]+b*(D+.006),M.y+2.26,M.at[1]+T*(D+.006)];H.box(N,M.at[0]+b*D,F[1],M.at[1]+T*D,.3,.16,.012,R),U.position.set(...F),U.rotation.y=R,g.add(U),H.build(g,{cast:!1,where:"in"});let Y=su(128,256),$=[M.at[0]+I[0]*(M.half+.2),M.y+1.12,M.at[1]+I[1]*(M.half+.2)],J=Wl(Y.map,.1,.2,.86);J.position.set($[0]+b*(D+.004),$[1],$[2]+T*(D+.004)),J.rotation.y=R,m.add(J);let Rt=new Ie;return Rt.box(N,$[0]+b*(D-.002),$[1],$[2]+T*(D-.002),.115,.215,.01,R),Rt.build(m,{cast:!1,where:"in"}),v.set(M.level,{board:Y,centre:$,out:[b,T],right:I,width:.1,height:.2,y:M.y}),fp(Y,{up:M.level<s,down:M.level>o,lit:P.has(M.level)}),{low:m,high:g}},setCar(M){r.position.y=M},setDoor(M){for(let{leaf:m,side:g}of h)m.position.x=g*(Bi/4+M*(Bi/2-.03))},show(M){let m=`${M.shown}|${M.heading}|${[...M.calls].sort().join()}|${M.at}|${M.open}`;if(m!==A.key){A={key:m},P.clear();for(let g of M.calls)P.add(g);C({...M,calls:P})}},pick(M,m,g=2.6){let b=null,T=($,J)=>{J>.05&&J<g&&(!b||J<b.distance)&&(b={...$,distance:J})},I=r.rotation.y,R=Math.cos(I),D=Math.sin(I),N=($,J)=>[$*R-J*D,$*D+J*R],[H,U]=N(M.x-r.position.x,M.z-r.position.z),[F,Y]=N(m.x,m.z);if(Y>1e-4){let $=(x.z-U)/Y,J=H+F*$,Rt=M.y-r.position.y+m.y*$,vt=(x.x+y/2-J)/y*u.width,mt=(x.y+_/2-Rt)/_*u.height,j=u.buttons.find(G=>Math.hypot(G.x-vt,G.y-mt)<=G.r*1.25);j&&T({type:j.type,level:j.level},$)}for(let[$,J]of v){let Rt=m.x*J.out[0]+m.z*J.out[1];if(Rt>-1e-4)continue;let vt=((J.centre[0]-M.x)*J.out[0]+(J.centre[2]-M.z)*J.out[1])/Rt,mt=(M.x+m.x*vt-J.centre[0])*J.right[0]+(M.z+m.z*vt-J.centre[2])*J.right[1],j=M.y+m.y*vt-J.centre[1];Math.abs(mt)<=J.width/2+.03&&Math.abs(j)<=J.height/2+.03&&T({type:"hall",level:$},vt)}return b},dispose(){for(let M of[d,p,...[...v.values()].map(m=>m.board)])M.map.dispose()}}}var n2=new X(0,1,0),Je=([n,t],e)=>new X(n,e,t);function $s(n,t,e,i,s,o){n.bar(t,e,i,s,o)}function i2(n,t,e,i,s,o,{nose:r=null,front:a=e,bottom:c=!0}={}){n.shape(t,i,[],o,!0),c&&n.shape(e,i,[],s,!1);let l=i.reduce((d,u)=>d+u[0],0)/i.length,f=i.reduce((d,u)=>d+u[1],0)/i.length,h=(d,u)=>Math.hypot(d[0]-u[0],d[1]-u[1])<1e-4;i.forEach((d,u)=>{let p=i[(u+1)%i.length],y=new X(p[1]-d[1],0,d[0]-p[0]);y.x*((d[0]+p[0])/2-l)+y.z*((d[1]+p[1])/2-f)<0&&y.negate();let _=r&&(h(d,r[0])&&h(p,r[1])||h(d,r[1])&&h(p,r[0]));n.quad(_?a:e,Je(d,s),Je(p,s),Je(p,o),Je(d,o),y)})}function s2(n,t,e,i,s,o){let[r,a,c,l]=e,f=i-s-o,h=i-o,d=[(r[0]+a[0]+c[0]+l[0])/4,(r[1]+a[1]+c[1]+l[1])/4],u=(p,y)=>new X((p[0]+y[0])/2-d[0],0,(p[1]+y[1])/2-d[1]);n.quad(t.tread,Je(r,i),Je(a,i),Je(c,i),Je(l,i),n2),n.quad(t.riser??t.side,Je(r,f),Je(l,f),Je(l,i),Je(r,i),u(r,l)),n.quad(t.side,Je(r,f),Je(a,h),Je(a,i),Je(r,i),u(r,a)),n.quad(t.side,Je(l,f),Je(c,h),Je(c,i),Je(l,i),u(l,c)),n.quad(t.side,Je(r,f),Je(l,f),Je(c,h),Je(a,h),new X(0,-1,0))}var ki=(n,t=.45)=>ft(n,"#ffffff",{roughness:t,metalness:.7}),Yl={wood:()=>({tread:ft("planks","#b98f63"),riser:ft("#f1ece0","#ffffff",{roughness:.85}),side:ft("#ebe5d8","#ffffff",{roughness:.9}),rail:ft("wood","#8a6a4c"),post:ft("wood","#8a6a4c")}),open:()=>({tread:ft("planks","#a9825a"),side:ki("#2b2f33"),rail:ki("#2b2f33"),post:ki("#2b2f33"),open:!0}),rc:()=>({tread:ft("concrete","#c9c6bd"),riser:ft("concrete","#c2bfb6"),side:ft("concrete","#c2bfb6"),rail:ki("#6b7377"),post:ki("#6b7377"),nose:ft("#55585a","#ffffff",{roughness:.95})}),steel:()=>({tread:ki("#585f63",.6),side:ki("#4d5458",.55),rail:ki("#4d5458"),post:ki("#4d5458"),open:!0}),stone:()=>({tread:ft("stone","#d8d4ca"),riser:ft("stone","#c6c2b8"),side:ft("stone","#c6c2b8"),rail:ki("#3d4447"),post:ki("#3d4447")})};function ou(n,t,e,i=.3){let s=new Set([0,n.total]);for(let c=i;c<n.total-.05;c+=i)s.add(c);let o=n.corners.filter(c=>c.inner===t);for(let c of n.corners)s.add(Math.max(0,c.s-c.half)),s.add(Math.min(n.total,c.s+c.half));let r=[...s].filter(c=>!o.some(l=>Math.abs(c-l.s)<l.half-1e-6)).sort((c,l)=>c-l).filter((c,l,f)=>!l||c-f[l-1]>1e-6),a=[];for(let c=1;c<r.length;c++){let l=n.side(r[c-1],r[c],t);l.forEach((f,h)=>{if(c>1&&h===0)return;let d=h===0?r[c-1]:h===l.length-1?r[c]:(r[c-1]+r[c])/2,u=n.centre(d),p=Math.hypot(u[0]-f[0],u[1]-f[1])||1,y=[(u[0]-f[0])/p,(u[1]-f[1])/p];a.push({x:f[0]+y[0]*e,z:f[1]+y[1]*e,y:n.ramp(d),out:[f[0]-y[0]*.1,f[1]-y[1]*.1]})})}return a}function dp(n,t,e,i,s=()=>!1){let o=Zi(t,e),r=(Yl[o.look]??Yl.wood)();o.spiral&&n.cylinder(r.post,t.x,i,t.z,.065,e+.95,12);for(let a of o.surfaces){let c=i+a.y,l=o.look==="rc"?.14:.05;if(!r.open&&a.kind==="tread"&&a.poly.length===4)s2(n,r,a.poly,c,o.riser,l);else{let f=r.open?.045:a.kind==="landing"?Math.max(l,o.riser)+.03:o.riser+l;i2(n,r.tread,r.side,a.poly,c-f,c,{nose:a.nose,front:r.riser??r.side})}if(r.nose&&a.nose){let f=a.poly.reduce((y,_)=>y+_[0],0)/a.poly.length,h=a.poly.reduce((y,_)=>y+_[1],0)/a.poly.length,[d,u]=a.nose,p=new X(f-(d[0]+u[0])/2,0,h-(d[1]+u[1])/2).normalize().multiplyScalar(.03);$s(n,r.nose,Je(d,c+.003).add(p),Je(u,c+.003).add(p),.045,.006)}}for(let a of[1,-1]){if(r.open){let f=ou(o,a,.04);for(let h=1;h<f.length;h++){let[d,u]=[f[h-1],f[h]];$s(n,r.side,new X(d.x,i+d.y-.16,d.z),new X(u.x,i+u.y-.16,u.z),.05,.24)}}let c=ou(o,a,.05),l=0;for(let f=1;f<c.length;f++){let[h,d]=[c[f-1],c[f]],u=s((h.out[0]+d.out[0])/2,(h.out[1]+d.out[1])/2),p=u?.8:.9,y=new X(h.x,i+h.y+p,h.z),_=new X(d.x,i+d.y+p,d.z);if($s(n,r.rail,y,_,.045,.05),!u&&($s(n,r.rail,y.clone().setY(y.y-.45),_.clone().setY(_.y-.45),.03,.03),l+=Math.hypot(d.x-h.x,d.z-h.z),f===1||l>=.85||f===c.length-1)){l=0;let x=f===1?h:d;$s(n,r.post,new X(x.x,i+x.y,x.z),new X(x.x,i+x.y+p,x.z),.045,.045)}}}}function pp(n,t,e,i,s=()=>!1){let o=Zi(t,e),r=(Yl[o.look]??Yl.wood)(),a=(h,d)=>{let u=new X(h[0],i,h[1]),p=new X(d[0],i,d[1]);if(!(u.distanceTo(p)<.05)){$s(n,r.rail,u.clone().setY(i+.95),p.clone().setY(i+.95),.045,.05),$s(n,r.rail,u.clone().setY(i+.48),p.clone().setY(i+.48),.03,.03);for(let y of[u,p])$s(n,r.post,y,y.clone().setY(i+.95),.045,.045)}};for(let h of[1,-1]){let d=ou(o,h,.03);for(let u=1;u<d.length;u++){let[p,y]=[d[u-1],d[u]];e-(p.y+y.y)/2<.8||s((p.out[0]+y.out[0])/2,(p.out[1]+y.out[1])/2)||a([p.x,p.z],[y.x,y.z])}}let[c,l]=[o.edge(0,1),o.edge(0,-1)],f=[o.centre(0)[0]+o.foot.out[0]*.1,o.centre(0)[1]+o.foot.out[1]*.1];s(f[0],f[1])||a(c,l)}function ru(n,t,e){let i=Math.max(1,t.n??Math.round(t.rise/.17)),s=t.look==="rc"?ft("concrete","#c4c1b8"):t.look==="wood"?ft("planks","#b98f63"):_n("genkan-floor");n.at(t.x,e+(t.from??0),t.z,(t.r??0)*Math.PI/180,o=>{let r=t.l/i;for(let a=1;a<=i;a++){let c=t.rise*a/i;o.box(s,0,c/2,t.l/2-r*(a-.5),t.w,c,r)}})}var o2={picture(n,t){let e=ft("wood",t(["#6e4b32","#c9a37a","#2b2f33","#e9e2d2"]));n.box(e,0,0,.012,.6,.45,.024),n.box(ft("#f6f3ea","#ffffff",{roughness:.9}),0,0,.026,.52,.37,.004);let[i,s,o]=t([["#b9d3e3","#7f9a6a","#d9c98a"],["#f0c9a4","#8f6a5a","#5f7c8a"],["#cfe0d0","#5f8a6b","#e2ddcf"]],3);n.box(ft(i,"#ffffff",{roughness:.9}),0,.07,.03,.42,.14,.002),n.box(ft(s,"#ffffff",{roughness:.9}),-.05,-.03,.031,.32,.07,.002),n.box(ft(o,"#ffffff",{roughness:.9}),0,-.1,.03,.42,.08,.002)},clock(n){let t=ft("#2b2f33","#ffffff",{roughness:.5,metalness:.3}),e=ft("#f7f5ee","#ffffff",{roughness:.7}),i=(a,c)=>Array.from({length:20},(l,f)=>new X(Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a,c)),[s,o]=[i(.16,.03),i(.16,0)];for(let a=0;a<20;a++){let c=(a+1)%20;n.quad(t,o[a],o[c],s[c],s[a],new X(s[a].x+s[c].x,s[a].y+s[c].y,0))}n.face(t,i(.16,.03)),n.face(e,i(.14,.032));let r=ft("#23272a","#ffffff",{roughness:.5});n.bar(r,new X(0,0,.036),new X(.05,.07,.036),.012,.004),n.bar(r,new X(0,0,.038),new X(-.09,.06,.038),.008,.004);for(let a=0;a<12;a++){let c=a/12*Math.PI*2;n.box(r,Math.cos(c)*.12,Math.sin(c)*.12,.034,.012,.012,.002)}},"wall-shelf"(n,t){let e=ft("wood","#b08a62");n.box(e,0,-.1,.11,.8,.025,.22);for(let s of[-.3,.3])n.box(ft("#3d4447","#ffffff",{roughness:.6,metalness:.5}),s,-.17,.07,.02,.12,.14);let i=-.34;for(let s=0;s<6;s++){let o=.03+s%3*.012;n.box(ft(t(["#a8574e","#56789a","#d9b25a","#5f8a6b","#8a6aa0","#e2ddcf"],s),"#ffffff",{roughness:.8}),i+o/2,.005,.1,o,.19-s%2*.03,.15),i+=o+.004}n.cylinder(ft("#b9845e","#ffffff",{roughness:.9}),.24,-.087,.11,.05,.09,8,.06),n.cylinder(ft("#4f7d4a","#ffffff",{roughness:.9}),.24,0,.11,.07,.1,7,.02)},"wall-lamp"(n){let t=ft("#8a6e3c","#ffffff",{roughness:.4,metalness:.7});n.box(t,0,-.06,.012,.1,.14,.024),n.bar(t,new X(0,-.06,.02),new X(0,0,.12),.016,.016),n.cylinder(qe("#fff0cf",1.2),0,-.02,.12,.07,.15,10,.045)},"wall-mirror"(n){n.box(ft("wood","#9a7650"),0,0,.012,.5,.9,.024),n.box(ft("#aab6ba","#ffffff",{roughness:.06,metalness:1}),0,0,.026,.43,.83,.004)},noren(n,t){let e=ft(t(["#34506b","#8a3b34","#3f6b52","#5b4a3c"]),"#ffffff",{roughness:.95,twoSided:!0});n.bar(ft("wood","#5a4636"),new X(-.48,.22,.05),new X(.48,.22,.05),.024,.024);for(let i of[-.3,0,.3])n.box(e,i,-.02,.05,.285,.46,.006);n.box(ft("#f1eee6","#ffffff",{roughness:.9}),0,.02,.054,.12,.12,.002)},awning(n,t){let e=ft(t(["#b9352c","#34506b","#3f6b52","#d9a441"]),"#ffffff",{roughness:.9,twoSided:!0}),[i,s,o]=[.25,-.2,.7];n.quad(e,new X(-.8,i,.01),new X(.8,i,.01),new X(.8,s,o),new X(-.8,s,o),new X(0,1,.6)),n.quad(e,new X(-.8,s,o),new X(.8,s,o),new X(.8,s-.1,o),new X(-.8,s-.1,o),new X(0,0,1));let r=ft("#e9e9e4","#ffffff",{roughness:.5,metalness:.4});for(let a of[-.78,.78])n.bar(r,new X(a,i,.02),new X(a,s,o),.02,.02),n.bar(r,new X(a,s-.02,.02),new X(a,s,o),.018,.018)},"water-heater"(n,t,e={}){let i=ft("#c3c6c6","#ffffff",{roughness:.35,metalness:.6});n.box(i,0,0,.085,.35,.53,.17),n.box(ft("#2a2d30","#ffffff",{roughness:.5}),0,.2,.171,.22,.05,.004);for(let o=0;o<5;o++)n.box(ft("#7d8182","#ffffff",{roughness:.4,metalness:.5}),0,.146+o*.012,.173,.2,.004,.003);n.box(ft("#3a6fa0","#ffffff",{roughness:.5}),-.11,-.2,.171,.06,.012,.003);let s=e.l??.6;s>.05&&n.box(i,0,-.265-s/2,.075,.3,s,.15)},"meter-gas"(n,t,e={}){n.box(ft("#cfcabb","#ffffff",{roughness:.5,metalness:.2}),0,0,.1,.22,.28,.16),n.box(ft("#1f2326","#ffffff",{roughness:.3}),0,.05,.181,.1,.05,.003),n.box(ft("#d9a91c","#ffffff",{roughness:.6}),0,-.07,.181,.12,.025,.003);let i=ft("#c9b25a","#ffffff",{roughness:.5,metalness:.4}),s=e.l??.5;for(let o of[-.065,.065])n.box(i,o,.17,.08,.03,.06,.03);n.box(i,-.065,.2,.04,.03,.03,.08),s>.05&&n.box(i,.065,-.14-s/2,.08,.03,s,.03)},"meter-power"(n){n.box(ft("#eceae4","#ffffff",{roughness:.6}),0,0,.012,.28,.42,.024),n.box(ft("#d9dbd8","#ffffff",{roughness:.4,metalness:.1}),0,.02,.074,.152,.214,.1),n.box(ft("#2b3035","#ffffff",{roughness:.3}),0,.05,.125,.07,.03,.003),n.box(ft("#9aa0a3","#ffffff",{roughness:.5}),0,-.06,.125,.12,.05,.003),n.box(ft("#9aa0a3","#ffffff",{roughness:.5,metalness:.2}),.08,.6,.035,.028,.8,.028)},"vent-hood"(n){let t=ft("#c9cdcf","#ffffff",{roughness:.35,metalness:.75});n.box(t,0,0,.004,.17,.17,.008),n.box(t,0,.02,.06,.15,.11,.11),n.box(ft("#2a2d30","#ffffff",{roughness:.6}),0,-.04,.06,.13,.012,.09)},"vent-hood-large"(n){let t=ft("#c9cdcf","#ffffff",{roughness:.35,metalness:.75});n.box(t,0,0,.004,.23,.23,.008),n.box(t,0,.025,.085,.21,.16,.16),n.box(ft("#2a2d30","#ffffff",{roughness:.6}),0,-.06,.085,.19,.012,.14)},"flower-box"(n){n.box(ft("#7a5a44","#ffffff",{roughness:.9}),0,-.05,.11,1,.15,.2),n.box(ft("#4a3a2c","#ffffff",{roughness:1}),0,.027,.11,.94,.006,.15);for(let t=0;t<8;t++){let e=-.42+t*.12;n.box(ft("#4f7d4a","#ffffff",{roughness:.95}),e,.08,.11+t%2*.04-.02,.09,.11,.09,t),n.box(ft(["#d4667a","#e9b44c","#f2ede4","#b98fd0"][t%4],"#ffffff",{roughness:.9}),e,.15,.11+t%2*.04-.02,.07,.05,.07,t)}}};function mp(n,t,e=0,i={}){let s=o2[t];if(!s){n.box(ft("#b9b5aa","#ffffff",{roughness:.8}),0,0,.02,.4,.3,.04);return}s(n,(o,r=0)=>o[Math.floor(xi(e*1.7+r,t.length,r)*o.length)%o.length],i)}var Xl={};function r2(n){let t=n?"green":"grey";if(Xl[t])return Xl[t];let e=document.createElement("canvas");e.width=32,e.height=96;let i=e.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,3,96),i.fillRect(0,0,32,3);let s=new jn(e);return s.wrapS=s.wrapT=hi,s.repeat.set(1/.05,1/.15),s.anisotropy=4,Xl[t]=new Dn({color:n?"#3d6650":"#8d9290",map:s,alphaTest:.35,side:zn,roughness:.5,metalness:.45}),Xl[t]}function a2(n,t){let[e,i]=t.a,[s,o]=t.b,r=Math.hypot(s-e,o-i);if(r<.05)return;let a=(s-e)/r,c=(o-i)/r,l=Math.atan2(-c,a),f=S=>[e+a*S,i+c*S],[h,d]=f(r/2),u=t.base??.4,p=t.fence??0;if(t.k==="hedge"){let S=ft("hedge","#ffffff"),w=t.t??.5;n.box(ft("cblock","#ffffff"),h,u/2,d,r,u,w,l),n.box(S,h,u+(p-.08)/2,d,r-.04,p-.08,w-.04,l),n.box(S,h,u+p-.04,d,r-.12,.08,w-.14,l);return}if(n.box(ft("cblock","#ffffff"),h,(u-.04)/2,d,r,u-.04,.12,l),n.box(ft("concrete","#cfccc4"),h,u-.02,d,r+.01,.04,.15,l),p<=0)return;let y=u+p,_=Math.max(1,Math.ceil(r/2)),x=t.white?ft("#f1f0ea","#ffffff",{roughness:.4,metalness:.2}):t.k==="mesh"?ft(t.green?"#3d6650":"#8d9290","#ffffff",{roughness:.45,metalness:.5}):ft(t.k==="slats"?"#4d4741":"#b9bdbd","#ffffff",{roughness:.4,metalness:.6});for(let S=0;S<=_;S++){let[w,v]=f(Math.min(r-.025,Math.max(.025,r*S/_)));n.box(x,w,u+p/2,v,.05,p,.05,l)}if(t.k==="slats"){for(let S=u+.08;S+.1<=y-.02;S+=.13)n.box(x,h,S+.05,d,r-.02,.1,.018,l);n.box(x,h,y-.015,d,r,.03,.04,l)}else if(t.k==="lattice"){n.box(x,h,u+.06,d,r,.035,.03,l),n.box(x,h,y-.02,d,r,.04,.035,l);for(let S=.1;S<r-.05;S+=.11){let[w,v]=f(S);n.box(x,w,u+p/2+.02,v,.018,p-.08,.018,l)}}else{let S=(w,v)=>new X(f(w)[0],v,f(w)[1]);n.face(r2(t.green),[S(0,u+.04),S(r,u+.04),S(r,y-.03),S(0,y-.03)]),n.box(x,h,y-.015,d,r,.03,.035,l)}}function gp(n,t){let e=t.yard;if(e){for(let i of e.pads??[]){let s=_n(i.f),[o,r]=[(i.x0+i.x1)/2,(i.z0+i.z1)/2];i.porch?n.box(s,o,i.y/2,r,i.x1-i.x0,i.y,i.z1-i.z0):n.box(s,o,i.y-.02,r,i.x1-i.x0,.04,i.z1-i.z0)}for(let i of e.steps??[])ru(n,i,0);for(let i of e.bounds??[])a2(n,i);for(let i of e.items??[])n.at(i.x,i.y??Mo(t,i.x,i.z),i.z,(i.r??0)*Math.PI/180,s=>Gl(s,i.k,i.x,i.z,i))}}var ln=n=>Math.round(n*1e3)/1e3,c2={modern:{front:{k:"slats",base:.4,fence:.8},side:{k:"mesh",base:.6,fence:.6}},europe:{front:{k:"lattice",base:.6,fence:.6,white:!0},side:{k:"mesh",base:.6,fence:.6}},japan:{front:{k:"hedge",base:.2,fence:1},side:{k:"block",base:1,fence:0}},danchi:{front:{k:"mesh",base:.2,fence:1,green:!0},side:{k:"mesh",base:.2,fence:1,green:!0}},mansion:{front:{k:"lattice",base:.6,fence:.6},side:{k:"mesh",base:.4,fence:.8}}},l2=.6,xp={block:.12,hedge:.5},h2=(n,t)=>[{a:[0,t],b:[n,t],inward:[0,-1],front:!0},{a:[0,0],b:[n,0],inward:[0,1],front:!1},{a:[0,0],b:[0,t],inward:[1,0],front:!1},{a:[n,0],b:[n,t],inward:[-1,0],front:!1}];function _p(n,t,e,i,s){for(let o=.05;o<=s+1e-6;o+=.05)if(n.floored(t+i[0]*o,e+i[1]*o))return!0;return!1}function yp(n,t,e){let i=[],s=n;for(let[o,r]of[...e].sort((a,c)=>a[0]-c[0]))o>s+.05&&i.push([s,Math.min(o,t)]),s=Math.max(s,r);return t>s+.05&&i.push([s,t]),i.filter(([o,r])=>r-o>.3)}var vp=n=>{let t=j0(n.x,n.z,n.w,n.l,n.r??0);return{x0:Math.min(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),x1:Math.max(...t.map(e=>e[0])),z1:Math.max(...t.map(e=>e[1]))}};function bp(n,{lotWidth:t,lotDepth:e,style:i}){let s=c2[i];if(!s)return;let o=Oi(n,0);if(!o)return;let r=n.yard,a=[],c=[...(r.pads??[]).filter(m=>!m.porch),...(r.steps??[]).map(m=>({...vp(m),f:"steps"}))],l=[];for(let m of h2(t,e)){let g=m.front?s.front:s.side,b=g.k==="hedge"?xp.hedge:xp.block,T=m.a[1]===m.b[1],I=T?t:e,R=T?m.a[1]:m.a[0],D=b/2+.02,N=($,J=D)=>T?[$,R+m.inward[1]*J]:[R+m.inward[0]*J,$],H=[];for(let $ of c){let J=T?m.inward[1]>0?$.z0:$.z1:m.inward[0]>0?$.x0:$.x1;if(Math.abs(J-R)>.08)continue;let[Rt,vt]=T?[$.x0,$.x1]:[$.z0,$.z1];H.push([Rt-.05,vt+.05]),$.f==="stone-floor"&&l.push({edge:m,alongX:T,line:R,from:Rt,to:vt,gaps:H})}let U=.2,F=[],Y=null;for(let $=U/2;$<I;$+=U){let J=!_p(o,...N($,0),m.inward,l2);J&&!Y?Y=[$-U/2,$+U/2]:J?Y[1]=$+U/2:Y&&(F.push(Y),Y=null)}Y&&F.push([Y[0],Math.min(I,Y[1])]);for(let[$,J]of F)for(let[Rt,vt]of yp(Math.max($,.02),Math.min(J,I-.02),H))a.push({a:N(Rt).map(ln),b:N(vt).map(ln),...g,t:b,front:m.front,inward:m.inward})}r.bounds=a;let f=Ws(n).find(m=>m.opening.canopy),h=l.sort((m,g)=>Number(g.edge.front)-Number(m.edge.front))[0];if(!h||!f)return;let{edge:d,alongX:u,line:p,from:y,to:_}=h,x=(y+_)/2,S=(m,g)=>u?[m,p+d.inward[1]*g]:[p+d.inward[0]*g,m],[w,v]=S(x,-.7);r.gate={x:ln(w),z:ln(v)};let A=(m,g)=>c.some(b=>m>b.x0-.2&&m<b.x1+.2&&g>b.z0-.12&&g<b.z1+.12),P=u?t:e,C=h.gaps.filter(([m,g])=>m<_&&g>y),M=[Math.min(y,...C.map(([m])=>m)),Math.max(_,...C.map(([,m])=>m))];for(let m of[M[1]+.19,M[0]-.19,M[1]+.5,M[0]-.5]){let[g,b]=S(m,.3);if(!(m<.3||m>P-.3||A(g,b)||_p(o,g,b,d.inward,.25))){r.items.push({k:"gate-post",x:ln(g),z:ln(b),r:ln(Math.atan2(-d.inward[0],-d.inward[1])*180/Math.PI)});break}}}function f2(n){let t=[];return n.storey.walls.forEach((e,i)=>{if(e.open||e.rail)return;let s=n.sides[i];if(s.l===s.r)return;let o=s.l?"r":"l",r=o==="l"?1:-1,a=[r*s.d[1],-r*s.d[0]],c=(e.t??.12)/2+.07,l=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],f=n.roomAt(l[0]-a[0]*c,l[1]-a[1]*c);t.push({wall:e,index:i,side:o,normal:a,d:s.d,length:s.length,thick:e.t??.12,room:f})}),t}function $l(n,t,e,i=.15,s=.3){let o=t.filter(r=>r.w===n.index).map(r=>[r.at-r.ww/2-i,r.at+r.ww/2+i]);return yp(s,n.length-s,o).filter(([r,a])=>a-r>=e)}var Ta=(n,t,e)=>n.filter(i=>i.s<e&&i.s+i.hh>t);function Mp(n,{lotWidth:t,lotDepth:e,style:i}){let s=["modern","europe","japan"].includes(i);if(!s&&i!=="danchi"&&i!=="mansion")return;let o=n.yard,r=n.base??.3,a=(u,p,y=0)=>u>y&&p>y&&u<t-y&&p<e-y,c=(u,p,y)=>(o.pads??[]).some(_=>u>_.x0-y&&u<_.x1+y&&p>_.z0-y&&p<_.z1+y)||(o.steps??[]).some(_=>{let x=vp(_);return u>x.x0-y&&u<x.x1+y&&p>x.z0-y&&p<x.z1+y}),l=(u,p,y)=>(o.bounds??[]).some(({a:_,b:x,t:S})=>{let[w,v]=[x[0]-_[0],x[1]-_[1]],A=Math.min(1,Math.max(0,((u-_[0])*w+(p-_[1])*v)/(w*w+v*v||1)));return Math.hypot(u-_[0]-w*A,p-_[1]-v*A)<y+S/2}),f=(u,p,y)=>(o.items??[]).some(_=>Math.hypot(u-_.x,p-_.z)<y),h=!1,d=!1;for(let u=0;u<n.storeys.length;u++){let p=n.storeys[u];if(p.like!==void 0)continue;let y=Oi(n,u);if(!y)continue;let _=f2(y),x=new Set,S=new Set,w=[],v=p.decor??[],A=(M,m,g)=>[M.wall.a[0]+M.d[0]*m+M.normal[0]*(M.thick/2+g),M.wall.a[1]+M.d[1]*m+M.normal[1]*(M.thick/2+g)],P=(M,m,g)=>{let[b,T]=A(M,m,g),[I,R]=A(M,m,g/2);return a(b,T,.02)&&!y.floored(b,T)&&!c(I,R,.05)&&!l(b,T,.02)&&!f(I,R,.6)};for(let M of _){let m=M.room?.code;if(!m)continue;if("LBPW".includes(m)&&!x.has(M.room)&&x.size<8){for(let[b,T]of $l(M,Ta(p.openings,-1,.6),.9,.04,.04)){let I=T-b>1.6?b+.45:(b+T)/2,[R,D]=A(M,I,.27),[N,H]=A(M,I,.7);if(!(u===0?a(N,H,.15)&&!y.floored(N,H)&&!c(R,D,.5)&&!l(N,H,.05)&&!f(R,D,1.2)&&Mo(n,R,D)<.05:!!y.roomAt(N,H)?.open&&!!y.roomAt(R,D)?.open))continue;let F=(n.ceiling??2.4)-.2,Y={k:"ac-unit",x:ln(R),z:ln(D),r:ln(Math.atan2(M.normal[0],M.normal[1])*180/Math.PI),h:ln(u===0?r+F:F+.05)};u===0?o.items.push(Y):p.items.push(Y),x.add(M.room);break}if(!x.has(M.room)&&u===0&&M.normal[1]!==0){let b=Math.max(0,...Ta(p.openings.filter(U=>U.w===M.index),-1,3).map(U=>U.s+U.hh))+.07,T=p.h-.2,I=M.length-.55,[R,D]=A(M,I,.2),[N,H]=A(M,I,.6);b+.55<=T&&I>.5&&a(N,H,.1)&&!y.floored(N,H)&&!f(R,D,1)&&(o.items.push({k:"ac-unit",x:ln(R),z:ln(D),r:ln(Math.atan2(M.normal[0],M.normal[1])*180/Math.PI),y:ln(r+b),hung:1}),x.add(M.room))}}if(!s)continue;let g=(n.ceiling??2.4)-.15;if("KUNT".includes(m)&&!S.has(M.room)){let b=$l(M,Ta(p.openings,g-.15,g+.15),.3,.1).map(([T,I])=>(T+I)/2).find(T=>u>0||P(M,T,.15));b!==void 0&&(v.push({w:M.index,side:M.side,at:ln(b),y:ln(g),k:m==="K"?"vent-hood-large":"vent-hood",l:0}),S.add(M.room))}if(u===0){if(!h&&"UNK".includes(m)){let b=$l(M,Ta(p.openings,.65-r-.3,1.15-r+.1),.95).find(([T])=>P(M,T+.3,.19)&&P(M,T+.75,.18));if(b){let[T]=b;v.push({w:M.index,side:M.side,at:ln(T+.3),y:ln(.865-r),k:"water-heater",l:.6},{w:M.index,side:M.side,at:ln(T+.75),y:ln(.64-r),k:"meter-gas",l:.5}),h=!0}}if(M.normal[0]!==0)for(let b of $l(M,Ta(p.openings,1.55-r,2.85-r),.35).flatMap(([T,I])=>[T+.2,I-.2]))P(M,b,.12)&&w.push({face:M,at:b,z:A(M,b,0)[1]})}}let C=w.sort((M,m)=>m.z-M.z)[0];u===0&&s&&C&&!d&&(v.push({w:C.face.index,side:C.face.side,at:ln(C.at),y:ln(1.8-r),k:"meter-power",l:0}),d=!0),v.length&&(p.decor=v)}}var qs=[{name:"s",dx:0,dz:1},{name:"n",dx:0,dz:-1},{name:"e",dx:1,dz:0},{name:"w",dx:-1,dz:0}],Ri=n=>qs.find(t=>t.name===n),ql={s:"n",n:"s",e:"w",w:"e"},Tp={s:0,e:90,n:180,w:270},ye=n=>Math.round(n*1e3)/1e3,au=(n,t,e)=>e==="s"?`${n},${t},s`:e==="n"?`${n},${t-1},s`:e==="e"?`${n},${t},e`:`${n-1},${t},e`,Ap="VC",xr="HCAG",Kl="LDK",So=n=>n!=="."&&!"SXJ".includes(n);function u2(n){let t=(n.turn??0)%2===1,e=t?n.d??1:n.w??1,i=t?n.w??1:n.d??1,s=Vs*e,o=Vs*i,r=n.floors??[],a=n.units??[],c=(x,S,w)=>x>=0&&x<r.length&&S>=0&&w>=0&&S<s&&w<o,l=(x,S,w)=>c(x,S,w)?r[x][w*s+S]??".":".",f=(x,S,w)=>l(x,S,w).toUpperCase(),h=(x,S,w)=>c(x,S,w)?a[x]?.[w*s+S]??"0":"0",d=(x,S,w)=>{let v=f(x,S,w);return v!=="."&&v!=="J"&&!Ap.includes(v)},u=8*e,p=8*i,y=(u-s*cn)/2,_=(p-o*cn)/2;return{width:s,depth:o,levels:r.length,key:l,at:f,unit:h,solid:d,lotWidth:u,lotDepth:p,gx:x=>ye(y+x*cn),gz:x=>ye(_+x*cn)}}function Rp(n,t){let e=[],i=new Map,s=(o,r)=>`${o},${r}`;for(let o=0;o<n.depth;o++)for(let r=0;r<n.width;r++){let a=n.key(t,r,o);if(a==="."||a.toUpperCase()==="J"||i.has(s(r,o)))continue;let c=n.unit(t,r,o),l={id:e.length,code:a.toUpperCase(),key:a,unit:c,cells:[],open:Ap.includes(a.toUpperCase())},f=[[r,o]];for(i.set(s(r,o),l);f.length;){let[h,d]=f.pop();l.cells.push({x:h,z:d});for(let{dx:u,dz:p}of qs){let y=s(h+u,d+p);!i.has(y)&&n.key(t,h+u,d+p)===a&&n.unit(t,h+u,d+p)===c&&(i.set(y,l),f.push([h+u,d+p]))}}l.cells.sort((h,d)=>h.z-d.z||h.x-d.x),l.x0=Math.min(...l.cells.map(h=>h.x)),l.x1=Math.max(...l.cells.map(h=>h.x)),l.z0=Math.min(...l.cells.map(h=>h.z)),l.z1=Math.max(...l.cells.map(h=>h.z)),l.box=l.cells.length===(l.x1-l.x0+1)*(l.z1-l.z0+1),e.push(l)}return{rooms:e,at:(o,r)=>i.get(s(o,r))??null}}var cu=new WeakMap;function d2(n){let t=(o,r)=>n.some(a=>a.x===o&&a.z===r),e=o=>qs.map(({dx:r,dz:a})=>({x:o.x+r,z:o.z+a})).filter(r=>t(r.x,r.z));if(n.some(o=>e(o).length>2))return null;if(n.length===1)return[n[0]];let i=n.filter(o=>e(o).length===1);if(i.length!==2)return null;let s=[i[0]];for(;s.length<n.length;){let o=e(s.at(-1)).find(r=>!s.some(a=>a.x===r.x&&a.z===r.z));if(!o)return null;s.push(o)}return s}function p2(n,t="modern"){if(cu.has(n))return cu.get(n);let e=pr[t]??pr.modern,i=e.stair==="rc",s=(i?e.wall:e.inner)/2+.012,o=[],r=l=>[n.gx(l.x)+cn/2,n.gz(l.z)+cn/2],a=(l,f,h)=>{let[d,u]=[f.x+Ri(h).dx,f.z+Ri(h).dz];return n.unit(l,d,u)===n.unit(l,f.x,f.z)||n.at(l,d,u)==="."?n.at(l,d,u):"."},c=l=>xr.includes(l)?2:0;for(let l=0;l<n.levels-1;l++){let f=[];for(let h of Rp(n,l).rooms){if(h.code!=="S")continue;let d=new Set(h.cells.map(x=>`${x.x},${x.z}`)),u=(o[l-1]??[]).find(x=>x.set.size===d.size&&[...x.set].every(S=>d.has(S)));if(u){f.push(u);continue}let p=h.box&&Math.min(h.x1-h.x0,h.z1-h.z0)>=1?null:d2(h.cells)??[h.cells[0]],y=null,_=(x,S)=>{(!y||x>y.score)&&(y={score:x,spec:S})};if(p)for(let x of[p,[...p].reverse()]){let S=x[0],w=x.at(-1),v=(m,g)=>qs.find(({dx:b,dz:T})=>g&&m.x+b===g.x&&m.z+T===g.z)?.name,A=v(S,x[1]),P=v(w,x.at(-2)),C=qs.map(m=>m.name).filter(m=>m!==A),M=qs.map(m=>m.name).filter(m=>m!==P);for(let m of C)for(let g of M){if(x.length===1&&m===g)continue;let b=a(l,S,m),T=a(l+1,w,g),I=!A||m===ql[A],R=!P||g===ql[P],D=(So(b)?20:0)+(So(T)?20:0)+c(b)+c(T)+(I?1:0)+(R?1:0)+(x.length===1&&g===ql[m]?1:0),N=(F,Y,$)=>{let[J,Rt]=r(F);return[J+Ri(Y).dx*(cn/2-$),Rt+Ri(Y).dz*(cn/2-$)]},H=[N(S,m,.05),...x.map(r),N(w,g,.05)],U=H.filter((F,Y)=>{if(Y===0||Y===H.length-1)return!0;let[$,J]=[H[Y-1],H[Y+1]];return Math.abs((F[0]-$[0])*(J[1]-F[1])-(F[1]-$[1])*(J[0]-F[0]))>1e-6});_(D,{pts:U.map(([F,Y])=>[ye(F),ye(Y)]),w:ye(cn-s*2-.01),foot:[{...S,side:m}],head:[{...w,side:g}]})}}else{let x=h.x1-h.x0+1,S=h.z1-h.z0+1,w=x===S?["z","x"]:x<S?["z"]:["x"];for(let v of w)for(let A of v==="z"?["s","n"]:["e","w"])for(let P of[!1,!0]){let C=v==="z"?A==="s"?h.z1:h.z0:A==="e"?h.x1:h.x0,M=h.cells.filter(vt=>(v==="z"?vt.z:vt.x)===C),m=M.map(vt=>a(l,vt,A)),g=M.map(vt=>a(l+1,vt,A)),b=(m.every(So)?20:m.some(So)?8:0)+(g.every(So)?20:g.some(So)?8:0)+Math.max(...m.map(c))+Math.max(...g.map(c))+(P?0:.5)+(A==="s"||A==="e"?.2:0),T=i?.1:.06,[I,R]=v==="z"?[n.gx(h.x0)+s,n.gx(h.x1+1)-s]:[n.gz(h.z0)+s,n.gz(h.z1+1)-s],[D,N]=v==="z"?[n.gz(h.z0),n.gz(h.z1+1)]:[n.gx(h.x0),n.gx(h.x1+1)],H=(R-I-T)/2,U=A==="s"||A==="e",F=U?N-.05:D+.05,Y=U?D+s+H/2:N-s-H/2,[$,J]=P?[R-H/2,I+H/2]:[I+H/2,R-H/2],Rt=(vt,mt)=>v==="z"?[ye(vt),ye(mt)]:[ye(mt),ye(vt)];_(b,{pts:[Rt($,F),Rt($,Y),Rt(J,Y),Rt(J,F)],w:ye(H),turn:Math.abs(F-Y)-H/2<1.3?"winder":"landing",foot:M.map(vt=>({...vt,side:A})),head:M.map(vt=>({...vt,side:A})),block:{axis:v,open:A,far:ql[A],flip:P,u0:I,u1:R,v0:D,v1:N,w:H,gap:T,tw:s}})}}f.push({...y.spec,set:d,cells:h.cells,look:e.stair})}o.push(f)}return o.push([]),cu.set(n,o),o}function m2(n,t,e,i){return e.rooms.filter(s=>s.code==="X"&&s.box).map(s=>{let o=["s","e","w","n"].map(d=>{let{dx:u,dz:p}=Ri(d),y=s.cells.filter(x=>u?x.x===(u>0?s.x1:s.x0):x.z===(p>0?s.z1:s.z0)),_=0;for(let x=0;x<n.levels;x++){if(n.at(x,s.x0,s.z0)!=="X")continue;let S=y.map(w=>n.unit(x,w.x+u,w.z+p)===n.unit(x,w.x,w.z)?n.at(x,w.x+u,w.z+p):".");S.every(w=>So(w)&&w!=="V")&&(_+=S.every(w=>xr.includes(w))?3:1)}return{name:d,good:_,cells:y}}).sort((d,u)=>u.good-d.good),[r]=o,a=n.gx(s.x0),c=n.gx(s.x1+1),l=n.gz(s.z0),f=n.gz(s.z1+1),h=r.name==="s"||r.name==="n";return{room:s,side:r.name,x:ye((a+c)/2),z:ye((l+f)/2),r:Tp[r.name],w:ye((h?c-a:f-l)-i*2-.16),d:ye((h?f-l:c-a)-i*2-.12),door:h?{line:"h",index:r.name==="s"?s.z1+1:s.z0,pos:(a+c)/2}:{line:"v",index:r.name==="e"?s.x1+1:s.x0,pos:(l+f)/2}}})}function g2(n,t){let e=n.code+t.code;return n.unit!==t.unit?"door-flat":e.includes("A")&&e.includes("C")?"door-auto":e.includes("V")?"door-terrace":e.includes("Y")?e.includes("W")?"door-shoji":"door-terrace":e.includes("U")?"door-fold":e.includes("W")?"door-fusuma":e.includes("R")?/[BP]/.test(e)?"door-closet":"door-white":/[TNE]/.test(e)?"door-white":/[LD]/.test(e)?"door-glass":"door-wood"}var wp={"door-terrace":.76,"door-shoji":.78,"door-fusuma":.78,"door-closet":.74,"door-auto":.76};function x2(n,t,e,i,s){let o=new Map,r=(g,b)=>g.id<b.id?`${g.id}|${b.id}`:`${b.id}|${g.id}`;for(let g of e.rooms)for(let b of g.cells)for(let[T,I,R]of[[1,0,"e"],[0,1,"s"]]){let D=e.at(b.x+T,b.z+I);if(!D||D===g)continue;let N=r(g,D);o.has(N)||o.set(N,[]),o.get(N).push({x:b.x,z:b.z,dir:R,name:`${b.x},${b.z},${R}`})}let a=new Set,c=new Set;for(let[g,b]of[i.here,i.below].entries())for(let T of b){for(let I of T.cells)for(let{name:R}of qs)a.add(au(I.x,I.z,R));for(let I of g===0?T.foot:T.head)c.add(au(I.x,I.z,I.side))}for(let g of c)a.delete(g);for(let g of s)for(let b of g.room.cells)for(let{name:T}of qs)a.add(au(b.x,b.z,T));let l=g=>[...o.keys()].map(b=>b.split("|").map(Number)).filter(b=>b.includes(g.id)).map(b=>e.rooms[b[0]===g.id?b[1]:b[0]]).filter(b=>o.get(r(g,b)).some(T=>!a.has(T.name))),f=(g,b)=>o.get(r(g,b)).filter(T=>!a.has(T.name)).length,h=g=>l(g).some(b=>b.code==="H"&&b.unit===g.unit),d=(g,b)=>g.code==="G"&&(b.code==="H"||!h(g)&&"LDMOA".includes(b.code)),u=(g,b)=>g.unit===b.unit&&!g.open&&!b.open&&(Kl.includes(g.code)&&Kl.includes(b.code)||d(g,b)||d(b,g)||g.code===b.code&&"HAMO".includes(g.code)||"AH".includes(g.code)&&"AH".includes(b.code)||"YH".includes(g.code)&&"YH".includes(b.code)),p=(g,b)=>g.open&&b.open&&g.unit===b.unit,y=new Map(e.rooms.map(g=>[g.id,g.id])),_=g=>{let b=g.id;for(;y.get(b)!==b;)b=y.get(b);return b},x=(g,b)=>y.set(_(g),_(b));for(let[g,b]of o){let[T,I]=g.split("|").map(R=>e.rooms[Number(R)]);if(u(T,I)||p(T,I)){for(let R of b)a.has(R.name)||c.add(R.name);x(T,I)}}let S=[],w=new Set,v=(g,b,T=g2(g,b))=>{let I=r(g,b);if(w.has(I)||_(g)===_(b))return!0;let R=(o.get(I)??[]).filter(Y=>!a.has(Y.name));if(!R.length)return!1;let D=[];for(let Y of[...R].sort(($,J)=>$.dir===J.dir?$.dir==="e"?$.x-J.x||$.z-J.z:$.z-J.z||$.x-J.x:$.dir<J.dir?-1:1)){let $=D.at(-1)?.at(-1);$&&$.dir===Y.dir&&(Y.dir==="e"?$.x===Y.x&&$.z+1===Y.z:$.z===Y.z&&$.x+1===Y.x)?D.at(-1).push(Y):D.push([Y])}let N=D.sort((Y,$)=>$.length-Y.length)[0],H=N[0],U=Object.hasOwn(wp,T)&&N.length>=2,F=U?N.length/2:Math.floor((N.length-1)/2)+.5;return S.push({k:T,a:g,b,ww:U?Yn[T].w:Math.min(wp[T]??Yn[T].w,cn-.15),...H.dir==="e"?{line:"v",index:H.x+1,pos:n.gz(H.z)+F*cn}:{line:"h",index:H.z+1,pos:n.gx(H.x)+F*cn}}),w.add(I),!0},A=g=>g.open?g.code:xr.includes(g.code)?"hall":Kl.includes(g.code)||"MO".includes(g.code)?"living":g.code,P=(g,b,T=!1)=>{let R=l(g).filter(D=>D.unit===g.unit&&D.code!=="S"&&D.code!=="X").map(D=>[b.indexOf(b.includes(D.code)?D.code:A(D)),D]).filter(([D])=>D>=0).sort((D,N)=>D[0]-N[0]||f(g,N[1])-f(g,D[1]));return T?R.filter(([,D])=>v(g,D)).length>0:R.some(([,D])=>v(g,D))};for(let g of e.rooms){let{code:b}=g;b==="U"?P(g,["N","hall","living"])||P(g,["B","P","W","E"]):b==="N"?P(g,["hall","living"])||P(g,["B","P","W","E"]):b==="T"?P(g,["hall","N","living"])||P(g,["B","P","W","E"]):b==="R"?P(g,["W","B","P"])||P(g,["hall","living","E","N"]):b==="B"||b==="P"||b==="E"?P(g,["hall","living","Y"])||P(g,["B","P","W","E","N"]):b==="W"?(P(g,["hall","living"])||P(g,["B","P","E","N"]),P(g,["W","Y"],!0)):b==="Y"?P(g,["W","living","hall","B","P"],!0):b==="V"?P(g,["living","B","P","W","Y"],!0)||P(g,["hall","E","N"]):b==="A"?l(g).filter(T=>T.code==="C").forEach(T=>v(g,T)):b==="G"&&g.unit!=="0"&&l(g).filter(I=>I.unit==="0"&&"CAH".includes(I.code)).sort((I,R)=>f(g,R)-f(g,I)).some(I=>v(g,I,"door-flat"))}let C=new Set;for(let g of e.rooms){if(!(Kl.includes(g.code)||"MO".includes(g.code))||g.open||C.has(_(g)))continue;let b=l(g).filter(T=>T.unit===g.unit&&xr.includes(T.code)).sort((T,I)=>(T.code==="H"?0:1)-(I.code==="H"?0:1));(b.some(T=>_(T)===_(g)||w.has(r(g,T)))||b.length&&v(g,b[0]))&&C.add(_(g))}let M=g=>[...i.here,...i.below].some(b=>(i.here.includes(b)?b.foot:b.head).some(T=>e.at(T.x+Ri(T.side).dx,T.z+Ri(T.side).dz)===g)),m=e.rooms.filter(g=>g.unit==="0"&&(t===0?"GAMC".includes(g.code)||M(g):M(g)||s.some(b=>_2(b,e)===g)));for(let g=0;g<e.rooms.length*2;g++){let b=new Set,T=m.length?[...m]:e.rooms.filter(D=>!D.open&&D.code!=="S"&&D.code!=="X").slice(0,1);for(T.forEach(D=>b.add(D));T.length;){let D=T.pop();for(let N of l(D))b.has(N)||N.code==="S"||N.code==="X"||(_(N)===_(D)||w.has(r(D,N)))&&(b.add(N),T.push(N))}let I=e.rooms.filter(D=>!b.has(D)&&D.code!=="S"&&D.code!=="X"),R=!1;for(let D of I){let N=l(D).filter(U=>b.has(U)&&!U.open).sort((U,F)=>(U.unit===D.unit?0:1)-(F.unit===D.unit?0:1)||(xr.includes(U.code)?0:1)-(xr.includes(F.code)?0:1)).filter(U=>U.unit===D.unit||U.unit==="0"||D.unit==="0"),H=l(D).filter(U=>b.has(U)&&U.open&&(U.unit===D.unit||U.code==="C"));if([...N,...H].some(U=>v(D,U))){R=!0;break}}if(!R)break}return{open:c,closed:a,doors:S,shared:o,spaceOf:_}}function _2(n,t){let{dx:e,dz:i}=Ri(n.side),s=e?{x:e>0?n.room.x1:n.room.x0,z:n.room.z0}:{x:n.room.x0,z:i>0?n.room.z1:n.room.z0};return t.at(s.x+e,s.z+i)}var Sp={L:["wp-white","floor-oak"],D:["wp-white","floor-oak"],K:["wp-ivory","floor-oak"],B:["wp-white","floor-maple"],P:["wp-ivory","floor-maple"],W:["juraku","tatami"],R:["wp-ivory","floor-maple"],N:["wp-white","tile-floor"],U:["tile-bath-white","tile-floor-blue"],T:["wp-white","tile-floor"],G:["wp-ivory","genkan-floor"],H:["wp-white","floor-oak"],S:["wp-white","floor-walnut"],Y:["plaster-white","floor-walnut"],O:["wp-grey","carpet-grey"],M:["wp-ivory","stone-floor"],E:["wp-ivory","floor-maple"],V:["concrete","concrete-floor"],C:["concrete","concrete-floor"],A:["wp-ivory","stone-floor"],X:["metal-silver","concrete-floor"]};function Cp(n){let t=Object.hasOwn(pr,n.style)?n.style:"modern",e=Xf(n.id),i=(a,c=0)=>a[Math.floor(xi(e,c+1)*a.length)%a.length],s={...pr[t].roof},o;t==="danchi"?o={wall:i(["mortar-white","mortar-cream","mortar-ivory"]),frame:i(["silver","steel","sage"],2),door:i(["steel","green","bronze"],3),rail:"bars"}:t==="mansion"?o={wall:i(["tile-white","tile-beige","tile-sand","tile-grey"]),frame:"black",door:"bronze",rail:i(["glass","solid"],4)}:t==="office"?o={wall:i(["metal-dark","tile-grey","metal-silver"]),frame:"black",door:"black",rail:"glass"}:t==="brutal"?o={wall:i(["concrete-stained","concrete","concrete-dark"]),frame:"black",door:"bronze",rail:"solid"}:t==="europe"?(o={wall:i(["stucco-cream","stucco-rose","stucco-ivory","stucco-yellow","stucco-sage"]),frame:"white",door:i(["green","navy","red"],5),rail:"bars",low:"brick-red"},s.f=i(["roof-tile-orange","roof-tile-orange","roof-tile-brown"],2)):t==="japan"?(o={wall:"plaster-white",frame:"wood",door:"wood",rail:"bars",low:i(["wood-dark","wood-dark","wood-brown"])},s.f=i(["roof-kawara","roof-kawara","roof-kawara-dark"],2)):t==="shop"?o={wall:i(["mortar-ivory","stucco-ivory","siding-sand"]),frame:"silver",door:"wood",rail:"bars"}:(o={wall:i(["siding-white","siding-sand","siding-grey","stucco-white","siding-navy"]),frame:i(["black","silver","bronze"],2),door:i(["wood","wood-dark","black"],3),rail:"panel"},s.f=i(["roof-slate","roof-metal","roof-slate"],4),s.k=i(["gable","gable","hip","shed"],6),s.k==="shed"&&(s.pitch=12));let r=n.look??{};return Object.hasOwn(Gs,r.wall)?(o.wall=r.wall,o.low=Object.hasOwn(Gs,r.low)?r.low:void 0):Object.hasOwn(Gs,r.low)&&(o.low=r.low),Object.hasOwn(Gs,r.roof)&&(s.f=r.roof),Object.hasOwn(K0,r.roofKind)&&(s.k=r.roofKind,s.k!=="flat"?(s.pitch??(s.pitch=s.k==="shed"?12:30),s.eave??(s.eave=.45)):s.parapet??(s.parapet=.4)),Number.isFinite(r.eave)&&s.k!=="flat"&&(s.eave=r.eave),["bars","panel","glass","solid"].includes(r.rail)&&(o.rail=r.rail),Object.hasOwn(mr,r.frame)&&(o.frame=r.frame),Object.hasOwn(mr,r.door)&&(o.door=r.door),{...o,style:t,seed:e,roof:s}}function y2(n,t,e,i,s,o,r){let{code:a}=t,c=h=>Array.from({length:Math.floor(i/2)},(d,u)=>[i/2+(u-(Math.floor(i/2)-1)/2)*2,h]),l=(h,d=!0)=>d?i>=2?[[i/2,h]]:[]:[[Math.floor((i-1)/2)+.5,h]];if(s==="C")return(a==="B"||a==="P")&&i>=2?l("win-lattice"):[];if(a==="S")return l(n==="danchi"||n==="mansion"||n==="brutal"?"win-block":"win-tall",!1);if("TNU".includes(a))return l("win-high",!1);if("GRXEAC".includes(a))return[];if(n==="office")return"OM".includes(a)?c(o===0&&e===r?"win-shop":e===r?"win-curtain":"win-ribbon"):[];if(n==="brutal")return"OMLDBPK".includes(a)?c(e===r?"win-ribbon":"win-hood"):l("win-hood",!1);if(n==="shop"&&a==="M")return e===r?c("win-shop"):[];if(a==="M"||a==="O")return c(e===r&&o===0?"win-shop":"win-slide");if(a==="H")return i>=1&&o>0?l("win-tall",!1):[];let f=n==="danchi"?"win-steel":"win-slide";return s==="V"||a==="Y"?c("door-terrace"):a==="L"||a==="D"||a==="W"?e===r&&o===0&&n!=="danchi"&&n!=="mansion"?c("door-terrace"):i>=2?l(f):[]:a==="K"?i>=2?l(n==="danchi"?"win-steel":"win-wide"):l("win-high",!1):a==="B"||a==="P"?i>=2?l(f):l("win-tall",!1):[]}function Ql(n,{exteriorOnly:t=!1,compactYard:e=!1}={}){let i=Cp(n),{style:s,seed:o}=i,r=pr[s],a=u2(n),{gx:c,gz:l}=a,f=p2(a,s),h="s",d=r.wall/2+.012,u=[],p={pads:[],steps:[],items:[]},y=s==="danchi"||s==="mansion";for(let w=0;w<a.levels;w++){let v=Rp(a,w),A={here:f[w]??[],below:f[w-1]??[]},P=m2(a,w,v,d),C=x2(a,w,v,A,P),M=[],m=[],g=[],b=[],T=[],I=C.doors.map(F=>({...F}));for(let F of P)I.push({...F.door,k:"lift-door",ww:Yn["lift-door"].w});let R=F=>F?F.code==="G"?F.unit==="0"&&!y?-r.doma:-Math.min(r.doma,.06):F.code==="V"?-.05:F.code==="C"?-.03:0:0;if(w===0){let F=v.rooms.filter($=>$.unit==="0"&&$.code==="G"),Y=F.length?[]:v.rooms.filter($=>$.unit==="0"&&"AMOHL".includes($.code)).sort(($,J)=>"AMOHL".indexOf($.code)-"AMOHL".indexOf(J.code)||J.z1-$.z1).slice(0,1);for(let $ of[...F,...Y]){let J=null;for(let B of["s","e","w","n"]){let{dx:et,dz:z}=Ri(B),K=$.cells.filter(lt=>a.at(0,lt.x+et,lt.z+z)==="."||a.at(0,lt.x+et,lt.z+z)==="J").sort((lt,gt)=>et?lt.z-gt.z:lt.x-gt.x),nt=[];for(let lt of K){let gt=nt.at(-1)?.at(-1);gt&&(et?gt.x===lt.x&&gt.z+1===lt.z:gt.z===lt.z&&gt.x+1===lt.x)?nt.at(-1).push(lt):nt.push([lt])}for(let lt of nt){let gt=Math.min(lt.length,2)*10-["s","e","w","n"].indexOf(B);(!J||gt>J.score)&&(J={score:gt,name:B,run:lt})}}if(!J)continue;let{name:Rt,run:vt}=J,{dx:mt,dz:j}=Ri(Rt),G=vt.length>=2,q=$.code!=="G"||s==="shop"||s==="office"||s==="mansion",ct=q?G?"door-auto":"door-glass":G?"door-entrance":"door-steel",Q=G?vt.length>2&&!q?1:vt.length/2:.5;I.push({k:ct,ww:Math.min(Yn[ct].w,vt.length*cn-.3),s:R($),c:i.door,canopy:1,front:!0,...mt?{line:"v",index:vt[0].x+(mt>0?1:0),pos:l(vt[0].z)+Q*cn}:{line:"h",index:vt[0].z+(j>0?1:0),pos:c(vt[0].x)+Q*cn},out:Rt})}}let D=(F,Y)=>{let $=v.at(...F),J=v.at(...Y);if($===J)return null;let Rt=!$||$.open,vt=!J||J.open;return!$||!J?($??J).open?{type:"rail",a:$,b:J}:{type:"ext",a:$,b:J}:Rt!==vt?{type:"ext",a:$,b:J}:Rt&&vt?$.unit===J.unit?null:{type:"screen",a:$,b:J}:null},N=(F,Y,$)=>{let J=null,Rt=()=>{if(!J)return;let{from:vt,to:mt,kind:j}=J,[G,q]=F==="h"?[[c(vt),l(Y)],[c(mt+1),l(Y)]]:[[c(Y),l(vt)],[c(Y),l(mt+1)]],[ct,Q]=F==="h"?[j.a,j.b]:[j.b,j.a],B=ut=>!ut||ut.open?i.wall:r.stair==="rc"&&"SX".includes(ut.code)?"mortar-white":Sp[ut.code]?.[0]??"wp-white",et={a:G,b:q,t:r.inner,l:B(ct),r:B(Q)};j.type==="ext"?(et.t=r.wall,i.low&&w===0&&((!ct||ct.open)&&(et.ll=i.low),(!Q||Q.open)&&(et.rl=i.low))):j.type==="rail"?Object.assign(et,{t:i.rail==="solid"?.12:.06,h:1.1,rail:(j.a??j.b).code==="C"&&i.rail==="glass"?"solid":i.rail}):j.type==="screen"?Object.assign(et,{t:.03,h:1.9,l:"metal-white",r:"metal-white"}):j.type==="open"?Object.assign(et,{t:.002,open:1}):(j.type==="party"||j.type==="shaft")&&(et.t=Math.max(r.inner,r.wall*.85));let z=M.length;if(M.push(et),j.type==="open"||j.type==="screen"){J=null;return}let K=F==="h"?G[0]:G[1],nt=(mt+1-vt)*cn,lt=[],gt=(ut,Mt,yt,pt={})=>{let wt=Yn[Mt],L=Math.min(yt??wt.w,nt-.16),E=Math.min(Math.max(ut,L/2+.08),nt-L/2-.08);if(L<.3||lt.some(([rt,Z])=>E+L/2>rt-.06&&E-L/2<Z+.06))return!1;lt.push([E-L/2,E+L/2]);let k=pt.s??wt.s,st=Math.min(k+wt.h,(et.h??r.storey)-.12);return m.push({w:z,at:ye(E),k:Mt,ww:ye(L),hh:ye(st-k),...pt,s:ye(k)}),!0};for(let ut of I){if(ut.line!==F||ut.index!==Y||ut.pos<K-1e-6||ut.pos>K+nt+1e-6)continue;let Mt={};ut.s!==void 0&&(Mt.s=ut.s),ut.canopy&&(Mt.canopy=1);let yt=ut.c??(ut.k==="door-flat"?i.door:ut.k==="door-terrace"||ut.k==="door-auto"||ut.k==="door-glass"?i.frame:ut.k==="door-fusuma"||ut.k==="door-shoji"||ut.k==="door-closet"?void 0:s==="japan"?"wood":"white");yt&&(Mt.c=yt),(ut.front||ut.k==="door-flat")&&(Mt.outward=1),gt(ut.pos-K,ut.k,ut.ww,Mt)}if(j.type==="ext"){let ut=j.a&&!j.a.open?j.a:j.b,Mt=ut===j.a?j.b:j.a,yt=F==="h"?ut===j.a?"s":"n":ut===j.a?"e":"w",pt=Mt?Mt.code:"out";for(let[wt,L]of y2(s,ut,yt,mt+1-vt,pt,w,h))gt(wt*cn,L,void 0,{c:L==="win-shutter"?i.door:i.frame})}J=null};for(let vt=0;vt<$;vt++){let[mt,j]=F==="h"?[[vt,Y-1],[vt,Y]]:[[Y-1,vt],[Y,vt]],G=D(mt,j),q=v.at(...mt),ct=v.at(...j),Q=F==="h"?`${vt},${Y-1},s`:`${Y-1},${vt},e`;if(q&&ct&&q!==ct&&C.open.has(Q))G={type:"open",a:q,b:ct};else if(!G&&q&&ct&&q!==ct){let et=q.code==="S"||ct.code==="S"||q.code==="X"||ct.code==="X";G={type:q.unit!==ct.unit?"party":et&&r.stair==="rc"?"shaft":"int",a:q,b:ct}}let B=G?`${G.type}|${G.a?.id??"-"}|${G.b?.id??"-"}`:"";J&&J.key!==B&&Rt(),G&&(J??(J={from:vt,kind:G,key:B}),J.to=vt)}Rt()};for(let F=0;F<=a.depth;F++)N("h",F,a.width);for(let F=0;F<=a.width;F++)N("v",F,a.depth);for(let F of v.rooms){let[Y]=F.cells,$={at:[ye(c(Y.x)+cn/2),ye(l(Y.z)+cn/2)],f:r.stair==="rc"&&F.code==="S"?"concrete-floor":Sp[F.code]?.[1]??"floor-oak",c:F.code==="W"||F.code==="Y"?"ceil-wood":"ceil-white",n:Yf[F.code]??"",code:F.code},J=R(F);J&&($.y=J),F.open&&($.open=1),F.unit!=="0"&&($.unit=F.unit),F.code==="X"&&($.shaft=1),g.push($)}t||v2({plan:a,level:w,rooms:v,walls:M,openings:m,items:b,house:n,style:s,info:r,flights:A});let H=A.here.map(F=>({k:"path",pts:F.pts,w:F.w,...F.turn==="winder"?{turn:"winder"}:{},look:F.look})),U=P.map(F=>({x:F.x,z:F.z,w:F.w,d:F.d,r:F.r}));if(w===0&&r.base>=.6)for(let F of A.here){if(!F.block)continue;let{axis:Y,open:$,far:J,flip:Rt,u0:vt,u1:mt,v0:j,v1:G,w:q,gap:ct}=F.block;if(!F.cells.filter(V=>Y==="z"?V.z===(J==="n"?Math.min(...F.cells.map(it=>it.z)):Math.max(...F.cells.map(it=>it.z))):V.x===(J==="w"?Math.min(...F.cells.map(it=>it.x)):Math.max(...F.cells.map(it=>it.x)))).every(V=>a.at(0,V.x+Ri(J).dx,V.z+Ri(J).dz)==="."))continue;let B=-(r.base-.1),et=$==="s"||$==="e",[z,K]=Rt?[vt,vt+q]:[mt-q,mt],nt=et?1:-1,lt=et?j:G,gt=lt+nt*(r.wall/2+q+.02),ut=Math.ceil(-B/.17),Mt=(ut-1)*.27,yt=gt+nt*(Mt+.1),pt=et?G:j,wt=(V,it)=>Y==="z"?[ye(V),ye(it)]:[ye(it),ye(V)],L=Rt?K+ct/2:z-ct/2;M.push({a:wt(L,yt),b:wt(Rt?vt-F.block.tw:mt+F.block.tw,yt),t:.002,open:1,l:"concrete",r:"concrete"}),M.push({a:wt(L,yt),b:wt(L,pt),t:.002,open:1,l:"concrete",r:"concrete"});let E=(z+K)/2,k=([V,it])=>F.cells.some(tt=>V>c(tt.x)&&V<c(tt.x+1)&&it>l(tt.z)&&it<l(tt.z+1));for(let V=g.length-1;V>=0;V--)g[V].code==="S"&&k(g[V].at)&&g.splice(V,1);g.push({at:wt(E,lt+nt*(r.wall/2+.3)),f:"concrete-floor",c:"ceil-white",n:"\u5165\u53E3",code:"A",y:B}),g.push({at:wt(E,(yt+pt)/2),f:"concrete-floor",c:"ceil-white",n:"\u8E0A\u308A\u5834",code:"H"});let st=wt(E,gt+nt*(Mt/2+.05));T.push({x:st[0],z:st[1],r:Tp[J],w:ye(q),l:ye(Mt+.1),from:B,rise:-B,n:ut,look:"rc"});let rt=Y==="z"?"h":"v",Z=Y==="z"?J==="n"?Math.min(...F.cells.map(V=>V.z)):Math.max(...F.cells.map(V=>V.z))+1:J==="w"?Math.min(...F.cells.map(V=>V.x)):Math.max(...F.cells.map(V=>V.x))+1,Et=M.findIndex(V=>!V.open&&(rt==="h"?Math.abs(V.a[1]-l(Z))<1e-6&&Math.abs(V.b[1]-l(Z))<1e-6&&V.a[0]<=E&&V.b[0]>=E:Math.abs(V.a[0]-c(Z))<1e-6&&Math.abs(V.b[0]-c(Z))<1e-6&&V.a[1]<=E&&V.b[1]>=E));if(Et>=0){let V=M[Et],it=E-(rt==="h"?V.a[0]:V.a[1]);for(let tt=m.length-1;tt>=0;tt--)m[tt].w===Et&&Math.abs(m[tt].at-it)<q&&m.splice(tt,1);m.push({w:Et,at:ye(it),k:"arch",ww:ye(q-.1),hh:ye(2),s:ye(B),canopy:1,c:i.frame})}}u.push({h:r.storey,walls:M,openings:m,rooms:g,items:b,stairs:H,...T.length?{steps:T}:{},...U.length?{lifts:U}:{}})}let _={v:2,style:s,base:r.base,ceiling:r.ceiling,storeys:u,roof:i.roof,yard:p};if(M2(_,a,i,r,n,{compact:e}),e||bp(_,{lotWidth:a.lotWidth,lotDepth:a.lotDepth,style:s}),Mp(_,{lotWidth:a.lotWidth,lotDepth:a.lotDepth,style:s}),!t)for(let w=0;w<u.length;w++)w2(_,w,[a.lotWidth,a.lotDepth]);let x=[],S=u.map(w=>{let v=JSON.stringify([w.walls,w.openings,w.rooms,w.items,w.stairs,w.steps,w.lifts]),A=x.indexOf(v);return x.push(v),A>=0?{h:w.h,like:A}:w});return{..._,storeys:S}}function v2({plan:n,level:t,rooms:e,walls:i,openings:s,items:o,house:r,style:a}){let{gx:c,gz:l}=n,f=s.filter(u=>Yn[u.k]?.door).map(u=>{let p=i[u.w],y=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])||1,_=Math.abs(p.b[0]-p.a[0])/y,x=Math.abs(p.b[1]-p.a[1])/y,S=p.a[0]+(p.b[0]-p.a[0])/y*u.at,w=p.a[1]+(p.b[1]-p.a[1])/y*u.at,v=u.ww/2+.06,A=.7;return{x0:S-_*v-x*A,x1:S+_*v+x*A,z0:w-x*v-_*A,z1:w+x*v+_*A}}),h=0,d=0;for(let u of e.rooms){if(u.code==="S"||u.code==="X")continue;let p={x0:c(u.x0)+.1,x1:c(u.x1+1)-.1,z0:l(u.z0)+.1,z1:l(u.z1+1)-.1},y=p.x1-p.x0,_=p.z1-p.z0,x=(m,g)=>e.at(Math.floor((m-c(0))/cn),Math.floor((g-l(0))/cn))===u,S=(m,g,b=.5,T=.02)=>{let I=Un[m];if(!I)return!1;let R=g==="n"||g==="s",D=R?y:_;if(I.w>D-.04)return!1;let N=Math.min(Math.max(b*D,I.w/2+.03),D-I.w/2-.03),H=R?p.x0+N:g==="w"?p.x0+I.d/2+T:p.x1-I.d/2-T,U=R?g==="n"?p.z0+I.d/2+T:p.z1-I.d/2-T:p.z0+N;return w(m,H,U,{n:0,w:90,s:180,e:270}[g])},w=(m,g,b,T=0)=>{let I=Un[m];if(!I)return!1;let[R,D]=T%180?[I.d/2,I.w/2]:[I.w/2,I.d/2];return![[-1,-1],[1,-1],[1,1],[-1,1]].every(([N,H])=>x(g+N*(R-.02),b+H*(D-.02)))||I.solid&&f.some(N=>g+R>N.x0&&g-R<N.x1&&b+D>N.z0&&b-D<N.z1)?!1:(o.push({k:m,x:ye(g),z:ye(b),r:T,...h?{set:h}:{}}),!0)},v=m=>{let g=o.length;h=++d,m.every(b=>b())||(o.length=g),h=0},A=[(p.x0+p.x1)/2,(p.z0+p.z1)/2],P=y>=_?["n","s","w","e"]:["w","e","n","s"],C=(m,g,b=.5)=>g.some(T=>S(m,T,b)),{code:M}=u;if(M==="G")u.unit==="0"&&a!=="danchi"&&a!=="mansion"?C("shoe-box",["w","e","n"]):C("shoe-box",["w","e","n","s"]);else if(M==="L"){let[m,g]=y>=_?["w","e"]:["n","s"];!S("sofa",m)&&!S("sofa",g)&&C("sofa",P),S("tv",g),w("table-low",A[0],A[1],y>=_?90:0),w("rug",A[0],A[1]),C("plant",["s","e","w","n"],.94),w("ceiling-light",A[0],A[1])}else if(M==="D"){let m=y>=_?0:90;v([()=>w("table-dining",A[0],A[1],m),...[[-.4,-.62,0],[.4,-.62,0],[-.4,.62,180],[.4,.62,180]].map(([g,b,T])=>()=>m?w("chair",A[0]+b,A[1]+g,(T+270)%360):w("chair",A[0]+g,A[1]+b,T))]),w("ceiling-light",A[0],A[1])}else if(M==="K")C("kitchen",P,.4),C("fridge",[...P].reverse(),.06)||C("fridge",P,.97),C("cupboard",[...P].reverse(),.8);else if(M==="B"){let m=u.cells.length>=12;C(m?"bed-double":"bed",["n","w","e","s"],.5),C("desk",["s","e","w","n"],.2),e.rooms.some(g=>g.code==="R"&&g.unit===u.unit)||C("wardrobe",["e","w","n","s"],.9)}else if(M==="P"){if(C("bed",["w","e","n","s"],.3),C("desk",["n","s","e","w"],.75)){let m=o.at(-1),g=m.r*Math.PI/180;w("chair",m.x+Math.sin(g)*.55,m.z+Math.cos(g)*.55,(m.r+180)%360)}C("shelf",["e","w","s","n"],.9)}else if(M==="W")v([()=>w("chabudai",A[0],A[1]),()=>w("zabuton",A[0],A[1]-.8),()=>w("zabuton",A[0],A[1]+.8)]),u.cells.length>=12&&C("tansu",["n","w","e"],.15);else if(M==="N")C("washbasin",P,.25),C("washer",P,.85)||C("washer",[...P].reverse(),.5);else if(M==="U")C("bathtub",y>=_?["e","w","n","s"]:["n","s","e","w"]);else if(M==="T")C("toilet",y>=_?["e","w"]:["n","s"])||C("toilet",["n","s","e","w"]);else if(M==="E")C("shelf",P,.3),C("boxes",[...P].reverse(),.7);else if(M==="O")for(let m=p.z0+1.9;m<p.z1-1.7;m+=3.5)for(let g=p.x0+2.1;g<p.x1-1.9;g+=4)for(let[b,T,I]of[[-.61,-.32,180],[.61,-.32,180],[-.61,.32,0],[.61,.32,0]])v([()=>w("office-desk",g+b,m+T,I),()=>w("office-chair",g+b,m+T+(I?-.62:.62),I?0:180)]);else if(M==="M")if(r.kind==="shop"){for(let m=p.x0+.9;m<p.x1-.8;m+=1.7)w("rack",m,p.z0+.5);C("counter",["e","w"],.3),C("mirror",["w","e"],.7)}else if(r.kind==="cafe"){C("counter",["n","e","w"],.5);for(let m=p.z0+2;m<p.z1-.9;m+=1.8)for(let g=p.x0+.9;g<p.x1-.8;g+=1.9)v([()=>w("cafe-table",g,m),()=>w("stool",g-.62,m),()=>w("stool",g+.62,m)])}else C("counter",["n","e","w"],.5),C("bench",["w","e"],.5),C("plant",["s","e","w"],.06);else M==="A"?(C("mail-boxes",["w","e","n"],.3),C("plant",["e","w","s"],.9)):M==="V"&&u.cells.length>=2&&t>=0&&(C("ac-unit",["w","e"],.5)||C("ac-unit",["n"],.1))}}function b2(n,t,e,i=.17){let s=[],o=[];for(let r of Ws(n).filter(a=>a.opening.canopy)){let[a,c]=r.normal;if(Math.max(Math.abs(a),Math.abs(c))<.9)continue;let l=(n.base??.3)+(r.opening.s??0),f=ye(l-.02),h=a>.9?t-r.x:a<-.9?r.x:c>.9?e-r.z:r.z,d=Math.min(r.width+.9,2.4),u=i/2,p=f>.06?Math.ceil(f/.18):0,y=Math.max(0,p-1)*.3,_=Math.max(.6,Math.min(1.25,h-y-.3));u+_+y>h&&(_=Math.max(.3,h-u-y)),u+_+y>h+1e-6&&(p=Math.min(p,1),y=0,_=Math.max(.2,Math.min(_,h-u)));let x=(v,A)=>ye(Math.min(A,Math.max(0,v))),S=(v,A,P)=>{let C=[r.x+a*v-c*P,r.z+c*v+a*P],M=[r.x+a*A+c*P,r.z+c*A-a*P];return{x0:x(Math.min(C[0],M[0]),t),z0:x(Math.min(C[1],M[1]),e),x1:x(Math.max(C[0],M[0]),t),z1:x(Math.max(C[1],M[1]),e)}};f>.03&&s.push({...S(u,u+_,d/2),y:f,f:"genkan-floor",porch:1});let w=u+_;p>1&&(o.push({x:ye(r.x+a*(w+y/2)),z:ye(r.z+c*(w+y/2)),r:c>.9?0:a>.9?90:c<-.9?180:270,w:ye(d),l:ye(y),from:0,rise:ye(f*(p-1)/p),n:p-1,top:f,look:"stone"}),w+=y),h-w>.2&&s.push({...S(w,h,Math.min(d,1.3)/2),y:.03,f:"stone-floor"})}return{pads:s,steps:o}}function M2(n,t,e,i,s,{compact:o=!1}={}){let{yard:r}=n,a=b2(n,t.lotWidth,t.lotDepth,i.wall);if(o){r.pads.push(...a.pads.filter(l=>l.porch)),r.steps.push(...a.steps);return}r.pads.push(...a.pads),r.steps.push(...a.steps);let c=new Set;for(let l=0;l<t.depth;l++)for(let f=0;f<t.width;f++){if(t.at(0,f,l)!=="J"||c.has(`${f},${l}`))continue;let h=f;for(;t.at(0,h+1,l)==="J";)h++;let d=l;for(;Array.from({length:h-f+1},(y,_)=>t.at(0,f+_,d+1)).every(y=>y==="J");)d++;for(let y=l;y<=d;y++)for(let _=f;_<=h;_++)c.add(`${_},${y}`);let u={x0:t.gx(f),z0:t.gz(l),x1:t.gx(h+1),z1:Math.min(t.gz(d+1)+.4,t.lotDepth),y:.03,f:"concrete-floor"};r.pads.push(u);let p=u.z1-u.z0>=u.x1-u.x0;(p?u.z1-u.z0:u.x1-u.x0)>=4.2&&xi(Xf(s.id),f,l)>.25&&r.items.push({k:"car",x:ye((u.x0+u.x1)/2),z:ye((u.z0+u.z1)/2),r:p?0:90})}}var Aa=new Map;function w2(n,t,e){let i=n.storeys[t],s=M=>!!Un[M.k]?.solid,o=M=>{i.items=M.map(({set:m,...g})=>g)};if(!i.items.some(s))return o(i.items);let r=n.storeys[t-1]?.stairs??[],a=JSON.stringify([e,n.base,i.h,i.walls,i.openings,i.stairs,i.items,i.steps,i.lifts,r,t===0]);if(Aa.has(a))return o(Aa.get(a));let c={...n,storeys:n.storeys.map((M,m)=>m===t?{...M,items:[]}:M)},l=va(c,t,{locked:!1}),f=.06,h=Math.ceil((e[0]+2)/f)+1,d=Math.ceil((e[1]+2)/f)+1,u=(M,m)=>[Math.round((M+1)/f),Math.round((m+1)/f)],p=new Uint8Array(h*d),y=(M,m,g,b,T,I)=>{let[R,D]=u(m,g),[N,H]=u(b,T);for(let U=Math.max(0,D);U<=Math.min(d-1,H);U++)for(let F=Math.max(0,R);F<=Math.min(h-1,N);F++)!M[U*h+F]&&I(F*f-1,U*f-1)&&(M[U*h+F]=1)};for(let M of l.segments){let m=mn+M.r,g=M.bx-M.ax,b=M.bz-M.az,T=g*g+b*b||1e-9;y(p,Math.min(M.ax,M.bx)-m,Math.min(M.az,M.bz)-m,Math.max(M.ax,M.bx)+m,Math.max(M.az,M.bz)+m,(I,R)=>{let D=Math.min(1,Math.max(0,((I-M.ax)*g+(R-M.az)*b)/T));return Math.hypot(I-M.ax-g*D,R-M.az-b*D)<m-1e-6})}let _=(M,m,g=0)=>{let b=m.r*Math.PI/180,T=Math.cos(b),I=Math.sin(b),R=Math.hypot(m.w,m.d)/2+mn+g;y(M,m.x-R,m.z-R,m.x+R,m.z+R,(D,N)=>{let H=(D-m.x)*T-(N-m.z)*I,U=(D-m.x)*I+(N-m.z)*T;return Math.hypot(Math.max(0,Math.abs(H)-m.w/2),Math.max(0,Math.abs(U)-m.d/2))<mn+g-1e-6})};for(let M of l.boxes)_(p,M);let x=t===0?Ws(c).map(M=>M.outside):va(c,t-1,{locked:!1}).stairs.filter(M=>M.up).map(({head:M})=>[M.at[0]+M.out[0]*(mn+.16),M.at[1]+M.out[1]*(mn+.16)]);if(t>0)for(let M of l.lifts)x.push([M.at[0]+M.out[0]*.6,M.at[1]+M.out[1]*.6]);let S=l.stairs.map(({gate:M})=>[M.at[0]+M.out[0]*(mn+.08),M.at[1]+M.out[1]*(mn+.08)]);for(let M of l.lifts)S.push([M.at[0]+M.out[0]*.6,M.at[1]+M.out[1]*.6]);for(let M of i.openings){if(!Yn[M.k]?.door||Yn[M.k].lift)continue;let m=i.walls[M.w],g=Math.hypot(m.b[0]-m.a[0],m.b[1]-m.a[1])||1,b=(m.b[0]-m.a[0])/g,T=(m.b[1]-m.a[1])/g,I=m.a[0]+b*M.at,R=m.a[1]+T*M.at;S.push([I+T*.55,R-b*.55],[I-T*.55,R+b*.55])}let w=M=>{let m=new Uint8Array(h*d),g=[],b=(T,I)=>{T<0||I<0||T>=h||I>=d||m[I*h+T]||M[I*h+T]||(m[I*h+T]=1,g.push(T,I))};for(let[T,I]of x){let[R,D]=u(T,I);for(let N=-2;N<=2;N++)for(let H=-2;H<=2;H++)b(R+H,D+N)}for(;g.length;){let T=g.pop(),I=g.pop();b(I+1,T),b(I-1,T),b(I,T+1),b(I,T-1)}return([T,I])=>{let[R,D]=u(T,I);for(let N=-1;N<=1;N++)for(let H=-1;H<=1;H++)if(R+H>=0&&D+N>=0&&R+H<h&&D+N<d&&m[(D+N)*h+R+H])return!0;return!1}},v=S.filter(w(p)),A=M=>({x:M.x,z:M.z,w:Un[M.k].w,d:Un[M.k].d,r:M.r??0}),P=M=>{let m=p.slice();for(let g of M)s(g)&&_(m,A(g),.07);return m},C=i.items;if(!v.every(w(P(C)))){C=[];for(let M=0;M<i.items.length;){let m=M+1;for(;i.items[M].set&&i.items[m]?.set===i.items[M].set;)m++;let g=i.items.slice(M,m);M=m,(!g.some(s)||v.every(w(P([...C,...g]))))&&C.push(...g)}}Aa.size>400&&Aa.clear(),Aa.set(a,C),o(C)}var lu=new WeakMap;function Pp(n){return n.design?n.design:(lu.has(n)||lu.set(n,Ql(n)),lu.get(n))}var S2={modern:2,europe:2,japan:1,danchi:4,mansion:6,office:6,brutal:1,shop:1},Ip=n=>"123456789abcdefghijklmnopqrstuvwxyz"[n%35];function _r(n,t){let e=Array.from({length:t},()=>Array(n).fill(".")),i=Array.from({length:t},()=>Array(n).fill("0")),s=(r,a)=>r>=0&&a>=0&&r<n&&a<t,o={fill(r,a,c,l,f,h){for(let d=a;d<=l;d++)for(let u=r;u<=c;u++)s(u,d)&&(e[d][u]=f,h!==void 0&&(i[d][u]=String(h)));return o},stamp(r,a,c,{unit:l,flip:f=!1}={}){return c.forEach((h,d)=>{[...f?[...h].reverse().join(""):h].forEach((u,p)=>{u===" "||!s(r+p,a+d)||(e[a+d][r+p]=u,l!==void 0&&(i[a+d][r+p]=String(l)))})}),o},text:()=>e.map(r=>r.join("")).join(""),units:()=>i.map(r=>r.join("")).join("")};return o}var E2={ground:["UUSSKKKK","UUSSKKKK","NNSSDDDD","NNHHDDDD","THHLLLLL","TGGLLLLL","RGGLLLLL","........"],upper:["EESSTPPP","EESSTPPP","EESSHPPP","HHHHHRRR","PPPPBBBB","PPPPBBBB","PPPPBBBB","VVVVVVVV"]},T2={ground:["UUNTKKKK","UUNTKKKK","HHHHDDDD","SSHWWWWR","SSHWWWWR","GGHWWWWR","GGHYYYYY","........"],upper:["EETRWWWW","EETRWWWW","HHHHWWWW","SSHBBBBR","SSHBBBBR","PPHBBBBR","PPHVVVVV","........"]};function Lp(n,t,e,i,s,o){let r=_r(t,e),a=n==="japan"?T2:E2,c=o%2===1,l=t>=24||t>=16&&c?8:0,f=e>=16?e-15:0,h=i===0?a.ground:a.upper;return s===1&&(h=h.map(d=>d.replaceAll("S","E"))),r.stamp(l,f,h,{flip:c}),i===0&&(e>=16?r.fill(c?l+1:l+4,e-6,c?l+3:l+6,e-1,"J"):t>=16&&r.fill(l?2:t-5,2,l?4:t-3,7,"J")),r}var Ep={pair:{rows:["KKKNUUSSSUUNKKKK","KKKNUUSSSUUNKKKK","DDDHTTSSSTTHDDDD","DDDHHGHHHGHHDDDD","WWWWwwwRRwwwRWWW","WWWWwwwRRwwwRWWW","WWWWwwwEEwwwRWWW","VVVVVVVVVVVVVVVV"],units:["aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaa000bbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb","aaaaaaaaabbbbbbb"]},single:{rows:["SSSUUNKK","SSSUUNKK","SSSTHDDD","HHHGHDDD","wwwHHWWW","wwwRRWWW","wwwRRWWW","VVVVVVVV"],units:["000aaaaa","000aaaaa","000aaaaa","000aaaaa","aaaaaaaa","aaaaaaaa","aaaaaaaa","aaaaaaaa"]}};function jl(n,t,e,{rows:i,units:s},o){let r=[...new Set(s.join("").replaceAll("0",""))].sort();return n.stamp(t,e,i,{unit:0}),s.forEach((a,c)=>[...a].forEach((l,f)=>{l!=="0"&&n.fill(t+f,e+c,t+f,e+c,i[c][f],Ip(o+r.indexOf(l)))})),r.length}function A2(n,t){let e=_r(n,t),i=Math.max(0,t-8-(t>=16?7:0)),s=0,o=0;for(;o+16<=n;o+=16)s+=jl(e,o,i,Ep.pair,s);return o+8<=n&&jl(e,o,i,Ep.single,s),e}var R2={wide:["BBBGPPP","BBBHPPP","BBBHPPP","BBBHPPP","UUNHTTR","UUNHEEE","KKKHEEE","KKKDRRR","LLLDWWW","LLLDWWW","LLLDWWW","LLLDWWW","VVVVVVV","VVVVVVV"],narrow:["BBBGPP","BBBHPP","BBBHPP","BBBHPP","UUNHTT","UUNHEE","KKKHEE","KKKDRR","LLLDWW","LLLDWW","LLLDWW","LLLDWW","VVVVVV","VVVVVV"],studio:["UUGKKK","UUHKKK","TTHLLL","LLLLLL","LLLLLL","LLLLLL","VVVVVV"]};function C2(n,t,e){let i=_r(n,t),s=t>=16,o=s?2:1,r=o+(s?13:6),a=n>=24?[s?"wide":"studio",s?"wide":"studio","core",s?"narrow":"studio"]:n>=16?[s?"narrow":"studio","core",s?"narrow":"studio"]:["stairs",s?"narrow":"studio"],c=0,l=0,f=!1;for(let[h,d]of a.entries())if(d==="core")i.fill(c,o,c+1,o+2,"X",0).fill(c+2,o,c+3,o+4,"S",0),c+=4;else if(d==="stairs")i.fill(c,o,c+1,o+3,"S",0),c+=2;else{let u=R2[d],p=u[0].length;e===0&&!f&&a[h-1]&&a[h-1]!==d?(f=!0,i.fill(c,o,c+p-1,r,"A",0),s&&i.fill(c+2,o,c+p-1,o+5,"E",0)):i.stamp(c,o,u,{unit:Ip(l++),flip:h>0&&a[h-1]!==d}),c+=p}return i.fill(0,0,c-1,o-1,"C",0),e===0&&t>=24&&i.fill(1,t-6,n-2,t-1,"J"),i}function P2(n,t,e){let i=_r(n,t).fill(0,0,n-1,t-1,e?"O":"M");return i.fill(0,0,1,2,"X").fill(2,0,3,4,"S").fill(4,0,5,1,"T").fill(6,0,7,1,"E"),i}function Qi(n,t,e,i=S2[n]??2,s=0){let o=Vs*t,r=Vs*e,a=Array.from({length:i},(l,f)=>n==="danchi"?A2(o,r):n==="mansion"?C2(o,r,f):n==="office"?P2(o,r,f):n==="brutal"?_r(o,r):Lp(n,o,r,f,i,s)),c=a.map(l=>l.units());return{floors:a.map(l=>l.text()),...c.some(l=>/[^0]/.test(l))?{units:c}:{}}}var Zl={ground:[".UUTSS..",".NNKSS..",".NNKKH..",".LLLLH..",".LLLLG..",".LLLLG..","........","........"],middle:[".EEESS..",".DDDSS..",".DDDKK..",".LLLLL..",".LLLLL..",".LLLLL..",".VVVVV..","........"],top:[".BBBSS..",".BBBSS..",".BBBHH..",".PPPHH..",".PPPPR..",".PPPPR..",".VVVVV..","........"]},Jl={rows:["AACCCCCCCCCCCCCC","SSGGTTTGGTTTGGTT","SSKKHHNKKHHNKKHH","SSKKUUUKKUUUKKUU","EELLLLLLLLLLLLLL","EELLLLLLLLLLLLLL","..VVVVVVVVVVVVVV","................"],units:["0000000000000000","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","00aaaaabbbbbcccc","0000000000000000"]},hu={ground:[".EETSS..",".KKKSS..",".KKKHH..",".MMMMM..",".MMMMM..",".MMMMM..",".MMMMM..","........"],upper:[".UUTSS..",".NNKSS..",".LLDDH..",".LLLLB..",".LLLLB..",".VVVVV..","........","........"]},fu={ground:[".UUTKK..",".NNTHK..",".SSSHD..",".SSWWW..",".GGWWW..",".GGYYY..","........","........"],upper:[".EETRR..",".SSSHR..",".SSSHW..",".BBBBW..",".BBBBW..",".VVVVV..","........","........"]},uu={ground:["..UUUUNNKKKKK...","..UUUUNNKKKKK...","..SSSTHHDDDDD...","..SSSTHHDDDDD...","..RRRHHHLLLLL...","..RRRGGHLLLLL...","..RRRGGHLLLLL...","....HHHHWWWWW...","....VVVVWWWWW..."],upper:["..EEETBBBBBPP...","..EEETBBBBBPP...","..SSSHBBBBBPP...","..SSSHHHHHHPP...","..PPPPHRRRbbb...","..PPPPHRRRbbb...","....VVVVVVbbb...","....VVVVVVVVV..."]},du={ground:[".UUUUUNNKKKKKKK.",".UUUUUNNKKKKKKK.",".SSSTTHHDDDDDDD.",".SSSTTHHDDDDDDD.",".RRRRRHHLLLLLLL.",".RRRRRHHLLLLLLL.",".WWWWGGGLLLLLLL.",".WWWWGGGLLLLLLL.",".WWWWWWWYYYYYY..",".WWWWWWWYYYYYY..",".VVVVV..VVVVVV.."],upper:[".EEEETBBBBBPPPP.",".EEEETBBBBBPPPP.",".SSSTHBBBBBPPPP.",".SSSTHHHHHHPPPP.",".RRRRHbbbbRRRPP.",".RRRRHbbbbRRRPP.",".PPPPHbbbbRRRPP.",".PPPPHbbbbVVVVV.",".VVVVV....VVVVV."]};function Hi(n,t=1,e=1,i=2,s=0){let o=Vs*t,r=Vs*e,a=s%2===1,c=Array.from({length:i},(f,h)=>{let d=_r(o,r);if(n==="estate"&&t>=2&&e>=2){let u=h===0?du.ground:du.upper;return i===1&&(u=du.ground.map(p=>p.replaceAll("S","E"))),d.stamp(0,2,u,{flip:a}),d}if(n==="large"&&t>=2&&e>=2){let u=h===0?uu.ground:uu.upper;return i===1&&(u=uu.ground.map(p=>p.replaceAll("S","E"))),d.stamp(0,3,u,{flip:a}),d}if(n==="apart")return t>=2?jl(d,0,0,{rows:Jl.rows,units:Jl.units},0):jl(d,0,0,{rows:Jl.rows.map(u=>u.slice(0,7)),units:Jl.units.map(u=>u.slice(0,7))},0),d;if(n==="pencil"){let u=h===0?Zl.ground:h===i-1&&i>=3?Zl.top:Zl.middle;return i===1&&(u=Zl.ground.map(p=>p.replaceAll("S","E"))),d.stamp(0,0,u,{flip:a}),d}if(n==="shophouse"){let u=h===0?hu.ground:hu.upper;return i===1&&(u=hu.ground.map(p=>p.replaceAll("S","E"))),d.stamp(0,0,u,{flip:a}),d}if(n==="machiya"){let u=h===0?fu.ground:fu.upper;return i===1&&(u=fu.ground.map(p=>p.replaceAll("S","E"))),d.stamp(0,0,u,{flip:a}),d}return Lp("modern",o,r,h,i,s)}),l=c.map(f=>f.units());return{floors:c.map(f=>f.text()),...l.some(f=>/[^0]/.test(f))?{units:l}:{}}}var xu={shop:{id:"shop",kind:"shop",style:"shop",w:1,d:1,sign:"\u3072\u3060\u307E\u308A\u6D0B\u54C1\u5E97",floors:[`EEEETTKKEEEETTKK${"MMMMMMMM".repeat(5)}........`]},cafe:{id:"cafe",kind:"cafe",style:"shop",w:1,d:1,sign:"\u3053\u3082\u308C\u3073\u55AB\u8336",floors:[`EEEETTKKEEEETTKK${"MMMMMMMM".repeat(5)}........`]}},Np=new X(0,1,0),Op=new X(0,-1,0),Oe=([n,t],e)=>new X(n,e,t),I2=()=>ft("#3a4046","#ffffff",{roughness:.9}),L2=()=>ft("concrete","#b9b6ae"),eh=()=>ft("#5b6266","#ffffff",{roughness:.5,metalness:.6}),pu=()=>ft("#4a4f52","#ffffff",{roughness:.5,metalness:.45}),mu=(n,t)=>Math.max(.12,t.h-(n.ceiling??t.h-.22));function ts(n,t,e,i,s,{narrow:o=1,top:r=!0,bottom:a=!1}={}){let c=(u,p)=>[(u[0]+p[0])/2+(u[0]-p[0])/2*o,(u[1]+p[1])/2+(u[1]-p[1])/2*o],l=c(e.l[0],e.r[0]),f=c(e.l[1],e.r[1]),h=c(e.r[0],e.l[0]),d=c(e.r[1],e.l[1]);n.quad(t,Oe(l,i),Oe(f,i),Oe(f,s),Oe(l,s),new X(e.d[1],0,-e.d[0])),n.quad(t,Oe(h,i),Oe(d,i),Oe(d,s),Oe(h,s),new X(-e.d[1],0,e.d[0])),a&&(o===1?n.shape(t,e.poly,[],i,!1):n.quad(t,Oe(l,i),Oe(f,i),Oe(d,i),Oe(h,i),Op)),r&&(o===1?n.shape(t,e.poly,[],s,!0):n.quad(t,Oe(l,s),Oe(f,s),Oe(d,s),Oe(h,s),Np))}function D2(n,t,e,i,s,o,r,a,c){let[l]=n[t],[f,h]=n.span[t],d=t==="l"?new X(n.d[1],0,-n.d[0]):new X(-n.d[1],0,n.d[0]),u=(S,w)=>new X(l[0]+n.d[0]*(S-f),o+w,l[1]+n.d[1]*(S-f)),p=(S,w,v,A)=>{if(!(w-S<1e-4))for(let[P,C,M]of i){let m=Math.max(v,P),g=Math.min(A,C);if(g-m<1e-4)continue;let b=c?m<si&&g>si?[[m,si,r],[si,g,a]]:[[m,g,m>=si?a:r]]:[[m,g,r]];for(let[T,I,R]of b)R?.quad(M,u(S,T),u(w,T),u(w,I),u(S,I),d)}},y=i[0][0],_=Math.min(f,h),x=Math.max(f,h);for(let S of e){let w=Math.max(_,S.at-S.ww/2),v=Math.min(x,S.at+S.ww/2);v<=w||(p(_,w,y,s),p(w,v,y,S.s),p(w,v,Math.min(s,S.s+S.hh),s),_=v)}p(_,x,y,s)}function z2(n,t,e,i,s,o,r){let a=i.rail,c=_n(i.l);ts(n,c,e,s-r,s+.001,{bottom:!0});let l=eh(),f=Math.hypot(e.r[1][0]-e.r[0][0],e.r[1][1]-e.r[0][1]),h=u=>{let p=[(e.l[0][0]+e.r[0][0])/2,(e.l[0][1]+e.r[0][1])/2];return[p[0]+e.d[0]*u,p[1]+e.d[1]*u]},d=Math.atan2(-e.d[1],e.d[0]);if(a==="panel"){ts(n,ft("#e9e2cd","#ffffff",{roughness:.8}),e,s+.1,s+.66,{narrow:.5}),ts(n,l,e,s+.69,s+.72,{narrow:.5}),ts(n,l,e,s+o-.06,s+o);for(let u=.04;u<f;u+=1.56){let[p,y]=h(Math.min(u,f-.04));n.box(l,p,s+o/2,y,.04,o,.04,d)}}else if(a==="glass"){ts(t,Ai("rail"),e,s+.12,s+o-.08,{narrow:.25,top:!1}),ts(n,l,e,s+o-.06,s+o),ts(n,l,e,s,s+.08,{narrow:.6});for(let u=.04;u<f+.8;u+=1.56){let[p,y]=h(Math.min(u,f-.04));n.box(l,p,s+o/2,y,.04,o,.04,d)}}else{ts(n,l,e,s+o-.05,s+o),ts(n,l,e,s+.06,s+.1,{narrow:.7});for(let u=.08;u<f-.02;u+=.13){let[p,y]=h(u);n.box(l,p,s+o/2,y,.018,o-.12,.018,d)}}}var Dp={"door-entrance":{swing:1,look:"slit"},"door-wood":{swing:1,look:"panel"},"door-white":{swing:1,look:"panel"},"door-steel":{swing:1,look:"flat"},"door-glass":{swing:1,look:"glass"},"door-double":{swing:2,look:"panel"},"door-slide":{slide:1,look:"panel"},"door-fusuma":{slide:2,look:"fusuma"},"door-shoji":{slide:2,look:"shoji"},"door-auto":{slide:2,apart:!0,look:"glass"},"door-terrace":{slide:2,look:"glass"},"door-oyako":{swing:1,look:"slit",small:.27},"door-flat":{swing:1,look:"flat"},"door-fold":{swing:1,look:"glass"},"door-key":{swing:1,look:"key"},"door-closet":{swing:2,look:"panel"},"lift-door":{slide:2,apart:!0,look:"plain",lift:!0},"door-platform":{slide:2,apart:!0,look:"glass",platform:!0}},Fp=n=>Ai(n?"far":"inner"),U2=()=>ft("#d3dcda","#ffffff",{roughness:.28});function gu(n,t,e,i,s,o,r){let a=[new X(e,s,r),new X(i,s,r),new X(i,o,r),new X(e,o,r)];n.face(Fp(t),t<0?a.reverse():a)}var N2={"win-slide":2,"win-full":2,"win-lattice":2,"win-hood":2,"win-wide":4},O2=new Set(["win-small","win-high","win-tall"]);function F2(n,t,e,i,s,o,r){let a=e.k,c=e.ww,l=e.hh,f=e.s,h=s,d=f+l/2,p=a==="win-curtain"||a==="win-shop"||a==="win-ribbon"?.035:.045,y=a==="win-shutter"?Ma("white"):r,_=(g,b,T,I,R,D,N,H,U=D)=>{n.box(g,b+D/2,(I+R)/2,N,D,R-I,H),n.box(g,T-D/2,(I+R)/2,N,D,R-I,H),n.box(g,(b+T)/2,R-D/2,N,T-b-D*2,D,H),n.box(g,(b+T)/2,I+U/2,N,T-b-D*2,U,H)},x=h?h*(i/2+.02):i/2+.005,S=h?h*(i/2-.05):-i/2-.005;if(_(y,-c/2,c/2,f,f+l,p,(x+S)/2,Math.abs(x-S)),h){let b=e.c==="wood"||e.c==="wood-dark"?r:ft("#f1eee6","#ffffff",{roughness:.8}),T=-h*(i/2+.008);Math.abs(T-S)>.02&&_(b,-c/2,c/2,f,f+l,.02,(S+T)/2,Math.abs(T-S)),n.box(b,0,f+.011,-h*(i/2+.02),c+.05,.022,.06),n.box(y,0,f-.008,h*(i/2+.04),c+.03,.016,.08)}let w=-c/2+p,v=c/2-p,A=f+p,P=f+l-p,C=g=>h?h*(i/2-.004-g*.028):g?-.014:.014,M=(g,b,T,I=.035,R=.05)=>{_(y,g,b,A,P,I,T,.026,R),gu(t,h,g+I,b-I,A+R,P-I,T)},m=N2[a];if(a==="win-round"){n.box(y,0,d,C(0),v-w,P-A,.03);let g=Math.min(v-w,P-A)/2-.05;for(let[b,T]of[[h||1,Fp(h)],[-(h||1),Ai("inner")]])t.face(T,Array.from({length:18},(I,R)=>{let D=R/18*Math.PI*2*b;return new X(Math.cos(D)*g,d+Math.sin(D)*g,C(0)+b*.018)}))}else if(a==="win-block"){n.box(ft("#dfe9e6","#ffffff",{roughness:.25}),0,d,0,v-w,P-A,.08);let g=ft("#b9c2bf","#ffffff",{roughness:.8});for(let b=w+.19;b<v-.05;b+=.19)n.box(g,b,d,0,.012,P-A,.085);for(let b=A+.19;b<P-.05;b+=.19)n.box(g,0,b,0,v-w,.012,.085)}else if(m===2){let g=h>=0;M(w,.0175,C(g?1:0)),M(-.0175,v,C(g?0:1))}else if(m===4){let g=(v-w)/4;M(w,-g+.0175,C(0)),M(-g-.0175,0,C(1)),M(0,g+.0175,C(1)),M(g-.0175,v,C(0))}else a==="win-shutter"?(M(w,0,C(0),.03,.03),M(0,v,C(0),.03,.03),n.box(y,0,d,C(0),v-w,.03,.03)):O2.has(a)?M(w,v,C(0),.03,.03):(gu(t,h,w,v,A,P,C(0)),a==="win-steel"&&(n.box(y,0,d,C(0),.03,P-A,.04),n.box(y,0,f+l*.72,C(0),v-w,.03,.04)));if(m&&h&&n.box(eh(),0,d,h*(i/2-.056),.022,.06,.018),a==="win-shutter"&&h)for(let g of[-c/2-.15,c/2+.15]){n.box(r,g,d,h*(i/2+.03),.27,l,.04);for(let b=1;b<8;b++)n.box(r,g,f+l*b/8,h*(i/2+.055),.21,.02,.012)}if(a==="win-lattice"&&h){let g=h*(i/2+.05);for(let b=1;b<8;b++)n.box(r,-c/2+c*b/8,d,g,.028,l,.028);for(let b of[f+.06,f+l-.06])n.box(r,0,b,g,c,.04,.035)}if(a==="win-hood"&&h){let g=h*(i/2+.16);for(let b of[-c/2-.1,c/2+.1])n.box(o,b,d,g,.2,l+.36,.32);n.box(o,0,f+l+.09,g,c,.18,.32)}a==="win-shop"&&n.box(y,0,f-.06,h*.02,c,.12,i+.05)}function yr(n,t,e,i,s=0){let o=new Ie,r=t/2,a=()=>{for(let c of[-.04,.04])o.box(eh(),t-.08,1,c,.03,.14,.03)};if(n==="glass"){for(let c of[.03,t-.03])o.box(i,c,e/2,0,.06,e,.04);for(let c of[.04,e-.04])o.box(i,r,c,0,t-.12,.08,.04);gu(o,s,.06,t-.06,.08,e-.08,0),a()}else if(n==="fusuma"){o.box(ft("#efe9d8","#ffffff",{roughness:.95}),r,e/2,0,t-.04,e-.04,.02);let c=ft("wood","#5a4636");for(let l of[.01,t-.01])o.box(c,l,e/2,0,.02,e,.03);for(let l of[.01,e-.01])o.box(c,r,l,0,t-.04,.02,.03);for(let l of[-.012,.012])o.cylinder(ft("#3d3530"),t-.1,.92,l-.004,.03,.008,10)}else if(n==="shoji"){o.box(ft("#f6f1e2","#ffffff",{roughness:1}),r,e/2,0,t-.04,e-.04,.008);let c=ft("wood","#c9a37a");for(let l of[.012,t-.012])o.box(c,l,e/2,0,.024,e,.03);for(let l of[.012,e-.012])o.box(c,r,l,0,t-.048,.024,.03);for(let l=1;l<3;l++)o.box(c,t*l/3,e/2,0,.012,e-.05,.02);for(let l=1;l<6;l++)o.box(c,r,e*l/6,0,t-.05,.012,.02)}else{if(o.box(i,r,e/2,0,t,e,.04),n==="panel"||n==="key")for(let c of[e*.28,e*.72])for(let l of[-.022,.022])o.box(i,r,c,l,t*.66,e*.34,.006);else if(n==="slit")for(let c of[-.022,.022])o.box(U2(),t*.3,e*.56,c,Math.min(.12,t*.4),e*.56,.006);if(n==="key")for(let c of[-.026,.026])o.box(eh(),t-.08,1.16,c,.05,.09,.012);n!=="plain"&&n!=="still"&&a()}return o}function B2(n,t,e,i,s,o){let r=Yn[e.k]??Yn["win-fixed"],a=e.ww,c=e.hh,l=e.s,f=l+c/2,h=i+.03,d=Ma(e.c??(r.door?"wood":"white"));if(e.k==="arch"){let A=ft("#f1eee6","#ffffff",{roughness:.8});for(let P of[-a/2+.008,a/2-.008])n.box(A,P,f,0,.016,c,h);return n.box(A,0,l+c-.008,0,a-.032,.016,h),[]}if(!r.door)return F2(n,t,e,i,s,o,d),[];let u=Dp[e.k]??Dp["door-wood"],p=ft("#c6c9c5","#ffffff",{roughness:.32,metalness:.75}),y=u.lift||u.platform?p:d,_=.05;for(let A of[-a/2+_/2,a/2-_/2])n.box(y,A,l+c/2,0,_,c,h);n.box(y,0,l+c-_/2,0,a-_*2,_,h),n.box(u.lift?p:ft("#8f8d87","#ffffff",{roughness:.7}),0,l+.008,0,a-_*2,.016,h);let x=a-_*2,S=u.lift?p:u.look==="glass"?u.platform?p:d:Ma(e.c??"wood"),w=c-_-.02,v=(s?-s:1)*(e.outward?-1:1);if(u.swing===1){let A=e.flip?x/2:-x/2,P=(e.flip?-1:1)*(v>0?-1:1),C=u.small&&x>.9?x*u.small:0,M=[{swing:!0,x:A,y:l+.016,z:0,mirror:!!e.flip,batch:yr(u.look,x-C,w,S,s*(e.flip?-1:1)),dir:P}];return C&&M.push({swing:!0,x:-A,y:l+.016,z:0,mirror:!e.flip,batch:yr("still",C-.004,w,S,s*(e.flip?1:-1)),dir:0}),M}return u.swing===2?[-1,1].map(A=>({swing:!0,x:A*x/2,y:l+.016,z:0,mirror:A>0,batch:yr(u.look,x/2,w,S,s*(A>0?-1:1)),dir:(A>0?-1:1)*(v>0?-1:1)})):u.apart?[-1,1].map(A=>({slide:A*(x/2-.04),x:A<0?-x/2:0,y:l+.016,z:u.lift||u.platform?0:v*(i/2+.035),batch:yr(u.look,x/2,w,S,s),lift:!!u.lift})):u.slide===2?[0,1].map(A=>({slide:A?0:x/2-.05,x:A?0:-x/2,y:l+.016,z:(A?1:-1)*.022,batch:yr(u.look,x/2+.02,w,S,s)})):[{slide:x-.06,x:-x/2,y:l+.016,z:v*(i/2+.03),batch:yr(u.look,x,w,S,s)}]}function zp(n,t,e,i,s){let o=i.clone().sub(e).normalize(),r=(Math.abs(o.y)>.95?new X(1,0,0):new X(0,1,0)).cross(o).normalize().multiplyScalar(s/2),a=o.clone().cross(r).normalize().multiplyScalar(s/2),c=h=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([d,u])=>h.clone().addScaledVector(r,d).addScaledVector(a,u)),l=c(e),f=c(i);for(let h=0;h<4;h++){let d=(h+1)%4,u=l[h].clone().add(l[d]).multiplyScalar(.5).sub(e);n.quad(t,l[h],l[d],f[d],f[h],u)}}var Up=new WeakMap;function k2(n,t){let e=Up.get(n);e||Up.set(n,e=new Map);let i=l=>n.storeys[l]?.like??l,s=t+1>=n.storeys.length,o=`${i(t)}|${s?"sky":i(t+1)}`;if(e.has(o))return e.get(o);let r=Oi(n,t),a=s?null:Oi(n,t+1),c=null;if(s||i(t)!==i(t+1)){let l=p=>{let y=new Set;for(let S of[r,a])for(let w of S?.storey.walls??[])y.add(Math.round(w.a[p]*100)/100),y.add(Math.round(w.b[p]*100)/100);let _=[...y].sort((S,w)=>S-w),x=[];return _.forEach((S,w)=>{if(w){let v=S-_[w-1],A=Math.ceil(v/.5);for(let P=1;P<A;P++)x.push(_[w-1]+v*P/A)}x.push(S)}),x},f=l(0),h=l(1),d=[],u=!1;for(let p=0;p<h.length-1;p++){let y=[];for(let _=0;_<f.length-1;_++){let x=(f[_]+f[_+1])/2,S=(h[p]+h[p+1])/2,w=a?.floored(x,S)?2:r.indoors(x,S)?1:0;u||(u=w===1),y.push(w)}d.push(y)}u&&(c={xs:f,zs:h,state:d})}return e.set(o,c),c}function H2(n,t,e,i){let s=k2(t,e);if(!s)return;let{xs:o,zs:r,state:a}=s,c=Oi(t,e),l=c.base+c.storey.h,f=t.roof??{k:"flat",f:"roof-concrete"},h=_n(f.f),d=(G,q)=>a[q]?.[G]===1,u=(G,q)=>(a[q]?.[G]??0)===0;if(f.k==="flat"){for(let q=0;q<r.length-1;q++){let ct=-1;for(let Q=0;Q<=o.length-1;Q++)d(Q,q)&&ct<0&&(ct=Q),!d(Q,q)&&ct>=0&&(n.slab(h,o[ct],r[q],o[Q],r[q+1],l),ct=-1)}let G=Math.max(.1,f.parapet??.4);for(let q of c.outlines.pieces){let ct=c.storey.walls[q.wall];if(ct.open||ct.rail||(ct.h??c.storey.h)<c.storey.h-.01)continue;let Q=(ct.t??.12)/2+.09,B=(q.l[0][0]+q.l[1][0]+q.r[0][0]+q.r[1][0])/4,et=(q.l[0][1]+q.l[1][1]+q.r[0][1]+q.r[1][1])/4,z=c.indoors(B+q.d[1]*Q,et-q.d[0]*Q),K=c.indoors(B-q.d[1]*Q,et+q.d[0]*Q);z!==K&&ts(n,_n(z?ct.r:ct.l),q,l,l+G)}return}let p=[],y=1/0,_=-1/0,x=1/0,S=-1/0;for(let G=0;G<r.length-1;G++)for(let q=0;q<o.length-1;q++)if(d(q,G)){y=Math.min(y,o[q]),_=Math.max(_,o[q+1]),x=Math.min(x,r[G]),S=Math.max(S,r[G+1]);for(let[ct,Q,B,et]of[[0,-1,[q,G],[q+1,G]],[0,1,[q,G+1],[q+1,G+1]],[-1,0,[q,G],[q,G+1]],[1,0,[q+1,G],[q+1,G+1]]])d(q+ct,G+Q)||p.push({a:B,b:et,normal:[ct,Q],open:u(q+ct,G+Q)})}let w=_-y>=S-x;f.turn&&(w=!w);let v=G=>G.open&&(f.k==="hip"||(f.k==="gable"?w?G.normal[1]!==0:G.normal[0]!==0:w?G.normal[1]<0:G.normal[0]<0)),A=p.filter(v),P=Math.tan((f.pitch??30)*Math.PI/180),C=/kawara|tile/.test(f.f??""),M=C?.16:.1,m=Math.max(.06,...c.storey.walls.filter(G=>!G.open&&!G.rail).map(G=>(G.t??.12)/2)),g=M+m*P-.005,b=new Map,T=(G,q)=>{let ct=G*4096+q;if(!b.has(ct)){let Q=A.length?1/0:0;for(let{a:B,b:et}of A){let z=o[B[0]],K=r[B[1]],nt=o[et[0]]-z,lt=r[et[1]]-K,gt=Math.min(1,Math.max(0,((o[G]-z)*nt+(r[q]-K)*lt)/(nt*nt+lt*lt||1)));Q=Math.min(Q,Math.hypot(o[G]-z-nt*gt,r[q]-K-lt*gt))}b.set(ct,l+g+Math.min(Q,7)*P)}return b.get(ct)},I=(G,q)=>new X(o[G],T(G,q),r[q]),R=ft("#e7e3d8","#ffffff",{roughness:.9}),D=C?R:ft("#3f4447","#ffffff",{roughness:.6,metalness:.3}),N=G=>{let q=G[1].clone().sub(G[0]),ct=G[2].clone().sub(G[0]),Q=q.cross(ct).y<0?[...G].reverse():G;n.face(h,Q),n.face(R,[...Q].reverse().map(B=>B.clone().setY(B.y-M)))},H=(G,q,ct)=>n.quad(D,G.clone().setY(G.y-M),q.clone().setY(q.y-M),q,G,ct);for(let G=0;G<r.length-1;G++)for(let q=0;q<o.length-1;q++){if(!d(q,G))continue;let ct=I(q,G),Q=I(q+1,G),B=I(q+1,G+1),et=I(q,G+1);Math.abs(ct.y-B.y)>=Math.abs(Q.y-et.y)?(N([ct,et,B]),N([ct,B,Q])):(N([ct,et,Q]),N([et,B,Q]))}let U=f.eave??.4,F=new Map;for(let G of A)for(let[q,ct]of[G.a,G.b]){let Q=q*4096+ct,B=F.get(Q)??[0,0];B[0]=B[0]||G.normal[0],B[1]=B[1]||G.normal[1],F.set(Q,B)}let Y=([G,q],ct)=>{let Q=F.get(G*4096+q)??ct;return new X(o[G]+Q[0]*U,l+g-U*P,r[q]+Q[1]*U)},$=(G,q)=>G[0]===q[0]&&G[1]===q[1],J=Math.min(.3,U),Rt=p.filter(G=>G.open&&!v(G)),vt=C?ft("#5d4b3c","#ffffff",{roughness:.6}):ft("#33383b","#ffffff",{roughness:.55,metalness:.3}),mt=new Set,j=(G,q,ct)=>{let Q=G[0]*4096+G[1];if(mt.has(Q)||U<.15)return;mt.add(Q);let B=o[G[0]]+q[0]*(m+.045)+ct[0]*.15,et=r[G[1]]+q[1]*(m+.045)+ct[1]*.15,z=.1;for(let gt=e-1;gt>=0;gt--){let ut=Oi(t,gt);if(ut?.indoors(B,et)){z=ut.base+ut.storey.h+.25;break}}let K=l+g-U*P-M-.07,nt=new X(B+q[0]*(U-m-.045+.06),K,et+q[1]*(U-m-.045+.06)),lt=new X(B,K-Math.max(.2,(U-m)*.8),et);if(!(lt.y-z<.3)){zp(n,vt,nt,lt,.06),zp(n,vt,lt,new X(B,z,et),.06);for(let gt=lt.y-.3;gt>z+.3;gt-=1.2)n.box(vt,B-q[0]*.03,gt,et-q[1]*.03,.075,.03,.075)}};for(let G of A){let q=new X(G.normal[0],0,G.normal[1]),ct=[Y(G.a,G.normal),Y(G.b,G.normal)];if(N([I(...G.a),I(...G.b),ct[1],ct[0]]),H(ct[0],ct[1],q),U>=.15){let Q=ct[0].clone().add(ct[1]).multiplyScalar(.5).addScaledVector(q,.06),B=ct[0].distanceTo(ct[1])+.02;n.box(vt,Q.x,Q.y-M-.035,Q.z,G.normal[0]?.105:B,.07,G.normal[0]?B:.105)}for(let[Q,B]of[[G.a,G.b],[G.b,G.a]]){let et=[Math.sign(o[B[0]]-o[Q[0]]),Math.sign(r[B[1]]-r[Q[1]])],z=A.filter(K=>K!==G&&($(K.a,Q)||$(K.b,Q)));(!z.length||z.some(K=>K.normal[0]!==G.normal[0]||K.normal[1]!==G.normal[1]))&&j(Q,G.normal,et)}for(let[Q,B,et]of[[G.a,G.b,ct[0]],[G.b,G.a,ct[1]]]){if(A.some(lt=>lt!==G&&($(lt.a,Q)||$(lt.b,Q))))continue;let z=Rt.find(lt=>$(lt.a,Q)||$(lt.b,Q));if(!z){H(I(...Q),et,new X(o[Q[0]]-o[B[0]],0,r[Q[1]]-r[B[1]]));continue}let K=new X(z.normal[0],0,z.normal[1]).multiplyScalar(J),nt=I(...Q);N([nt,et,et.clone().add(K),nt.clone().add(K)]),H(et,et.clone().add(K),q),H(nt.clone().add(K),et.clone().add(K),K)}}for(let G of Rt){let q=I(...G.a),ct=I(...G.b),Q=new X(G.normal[0],0,G.normal[1]),B=Q.clone().multiplyScalar(J);N([q,ct,ct.clone().add(B),q.clone().add(B)]),H(q.clone().add(B),ct.clone().add(B),Q);let et=Q.clone().multiplyScalar(m),z=nt=>new X(nt.x,l,nt.z).add(et),K=nt=>new X(nt.x,Math.max(l,nt.y-M+.01),nt.z).add(et);(q.y-M-l>.005||ct.y-M-l>.005)&&n.quad(i,z(q),z(ct),K(ct),K(q),Q)}}function th(n,t,e){let i=Oi(n,t),{storey:s,outlines:o}=i,{base:r}=i,a=!!e.split,c={value:null},l=[],f=mu(n,s),h=s.walls.filter(p=>!p.open&&!p.rail),d=(p,y)=>h.some(_=>{let x=_.b[0]-_.a[0],S=_.b[1]-_.a[1],w=Math.min(1,Math.max(0,((p-_.a[0])*x+(y-_.a[1])*S)/(x*x+S*S||1e-9)));return Math.hypot(p-_.a[0]-x*w,y-_.a[1]-S*w)<(_.t??.12)/2+.13}),u=(p,y)=>s.steps.some(_=>zl(_,p,y)>=0);s.walls.forEach((p,y)=>{if(!p.open||!e.inside)return;let{d:_}=i.sides[y],[x,S]=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],w=[1,-1].map(g=>[x+g*_[1]*.12,S-g*_[0]*.12]),[v,A]=w.map(([g,b])=>i.roomAt(g,b)),P=new X(_[1],0,-_[0]),C=new X(-_[1],0,_[0]);if(v&&A&&Math.abs(v.y-A.y)>.015&&!w.some(([g,b])=>u(g,b))){let g=Math.min(v.y,A.y),b=Math.max(v.y,A.y),T=b-g>.6?ft("concrete","#c4c1b8"):b-g>.1?ft("wood","#a9825a"):ft("#8f8d87","#ffffff",{roughness:.7});e.inside.quad(T,Oe(p.a,r+g),Oe(p.b,r+g),Oe(p.b,r+b),Oe(p.a,r+b),v.y<A.y?P:C)}let M=ft("#f1eee6","#ffffff",{roughness:.9}),m=e.insideHigh??e.inside;for(let g of[P,C])m.quad(M,Oe(p.a,r+s.h-f),Oe(p.b,r+s.h-f),Oe(p.b,r+s.h),Oe(p.a,r+s.h),g)});for(let p of o.pieces){let y=s.walls[p.wall],_=Math.min(y.h??s.h,s.h);if(y.rail&&y.rail!=="solid"){e.out&&z2(e.out,e.panes??e.out,p,y,r,_,t===0?r:.15);continue}let x=(y.t??.12)/2+.07,S=(p.l[0][0]+p.l[1][0]+p.r[0][0]+p.r[1][0])/4,w=(p.l[0][1]+p.l[1][1]+p.r[0][1]+p.r[1][1])/4,v=s.openings.filter(A=>A.w===p.wall).sort((A,P)=>A.at-P.at);for(let A of["l","r"]){let P=A==="l"?1:-1,C=i.indoors(S+P*p.d[1]*x,w-P*p.d[0]*x),M=C?e.inside:e.out,m=C?e.insideHigh:e.outHigh;if(!M&&!m)continue;let g=_n(y[A]),b=[],T=0;for(let D of[.06,.28,.5,.72,.94]){let N=p.start[0]+(p.end[0]-p.start[0])*D+P*p.d[1]*x,H=p.start[1]+(p.end[1]-p.start[1])*D-P*p.d[0]*x;T=Math.min(T,i.roomAt(N,H)?.y??0)}C||(c.value??(c.value=g),t===0&&r>.001?b.push([-r,0,L2()]):y.rail&&b.push([-.15,0,g]));let I=T;if(C&&!y.rail&&_>.6){let D=i.roomAt(S+P*p.d[1]*x,w-P*p.d[0]*x);D&&!D.shaft&&D.code!=="U"&&D.code!=="W"&&D.f!=="tatami"&&(b.push([T,T+.06,n.style==="japan"?ft("wood","#8a6746"):ft("#f3f0e8","#ffffff",{roughness:.7})]),I=T+.06)}let R=y[`${A}l`];if(R&&_>1.05?b.push([I,1,_n(R)],[1,_,g]):b.push([I,_,g]),D2(p,A,v,b,_,r,M,m,a),!C&&M&&t===0&&r>.2&&!y.rail){let[D]=p[A],[N,H]=p.span[A],U=[P*p.d[1],-P*p.d[0]],F=(vt,mt,j)=>new X(D[0]+p.d[0]*(vt-N)+U[0]*mt,r+j,D[1]+p.d[1]*(vt-N)+U[1]*mt),Y=new X(U[0],0,U[1]),$=(vt,mt)=>{mt-vt<.02||(M.quad(pu(),F(vt,0,.014),F(mt,0,.014),F(mt,.03,-.004),F(vt,.03,-.004),Np),M.quad(pu(),F(vt,.03,-.004),F(mt,.03,-.004),F(mt,.03,-.03),F(vt,.03,-.03),Y),M.quad(pu(),F(vt,.03,-.03),F(mt,.03,-.03),F(mt,0,-.03),F(vt,0,-.03),Op))},J=Math.min(N,H),Rt=Math.max(N,H);for(let vt of v)vt.s>.05||($(J,Math.min(Rt,vt.at-vt.ww/2)),J=Math.max(J,vt.at+vt.ww/2));$(J,Rt)}}e.cap&&_>si&&e.cap.shape(I2(),p.poly,[],r+si+.002,!0),_<s.h-.01&&e.out&&e.out.shape(_n(y.l),p.poly,[],r+_,!0)}for(let p of o.caps){let y=o.pieces[p.piece],_=s.walls[y.wall];if(_.rail&&_.rail!=="solid")continue;let x=Math.min(_.h??s.h,s.h),S=(p.from[0]+p.to[0])/2+p.normal[0]*.07,w=(p.from[1]+p.to[1])/2+p.normal[1]*.07,v=i.indoors(S,w),A=new X(p.normal[0],0,p.normal[1]),P=_n(_.l),C=(g,b,T)=>g?.quad(P,Oe(p.from,r+b),Oe(p.to,r+b),Oe(p.to,r+T),Oe(p.from,r+T),A),M=v?e.inside:e.out,m=v?e.insideHigh:e.outHigh;a?(C(M,0,Math.min(si,x)),x>si&&C(m,si,x)):C(M,0,x)}if(s.openings.forEach(p=>{let y=s.walls[p.w];if(!y)return;let _=i.sides[p.w],x=y.t??.12,S=x/2+.07,w=y.a[0]+_.d[0]*p.at,v=y.a[1]+_.d[1]*p.at,A=i.indoors(w+_.d[1]*S,v-_.d[0]*S),P=i.indoors(w-_.d[1]*S,v+_.d[0]*S),C=A&&P,M=p.s+p.hh>si,m=C?M&&a?e.insideHigh:e.inside:M&&a?e.outHigh:e.out;if(!m)return;let g=C?m:e.panes??m,b=C||A===P?0:P?-1:1,T=Math.atan2(-_.d[1],_.d[0]),I=[];m.at(w,r,v,T,R=>{let D=g.matrix;g.matrix=R.matrix,I=B2(R,g,p,x,b,c.value??_n(y.l)),g!==R&&(g.matrix=D)});for(let R of I)l.push({...R,level:t,interior:C,cx:w,cz:v,base:r,turn:T,d:_.d,width:p.ww,auto:p.k==="door-auto"})}),s.decor.forEach((p,y)=>{let _=s.walls[p.w];if(!_||_.open)return;let x=i.sides[p.w],S=p.side==="l"?1:-1,w=[S*x.d[1],-S*x.d[0]],v=(_.t??.12)/2+.003,A=_.a[0]+x.d[0]*p.at+w[0]*v,P=_.a[1]+x.d[1]*p.at+w[1]*v,C=p.side==="l"?x.l:x.r,M=p.y>si&&a;(C?M?e.insideHigh:e.inside:M?e.outHigh:e.out)?.at(A,r+p.y,P,Math.atan2(w[0],w[1]),g=>mp(g,p.k,y+t*31,p))}),e.out)for(let p of i.rooms)p.open&&(e.out.shape(_n(p.f),p.points,p.holes,r+p.y+.001,!0),t>0&&e.out.shape(ft("concrete","#d9d6cd"),p.points,p.holes,r-.15,!1));if(e.inside){let p=t>0?bo(n,t-1):null,y=p?p.stairs.map(w=>({stair:w,layout:Zi(w,p.h)})):[],_=t+1<n.storeys.length?s.stairs.map(w=>({stair:w,layout:Zi(w,s.h)})):[],x=(w,{layout:v})=>v.outline.every(([A,P])=>Hs(w.points,A,P)||w.points.some(C=>Math.hypot(C[0]-A,C[1]-P)<.2)),S=(w,{layout:v})=>xs(w,...v.centre(v.total/2))||xs(w,...v.centre(.3))||xs(w,...v.centre(v.total-.3));for(let w of i.rooms){if(w.open)continue;if(w.shaft){t===0&&e.inside.shape(ft("concrete","#8f8d87"),w.points,w.holes,r-.03,!0);continue}let v=y.filter(C=>S(w,C)),A=v.filter(C=>x(w,C));if(v.length===A.length&&e.inside.shape(_n(w.f),w.points,[...w.holes,...A.map(({layout:C})=>C.outline)],r+w.y,!0),_.some(C=>S(w,C)))continue;(e.insideHigh??e.inside).shape(_n(w.c),w.points,w.holes,r+s.h-f,!1)}for(let{stair:w,layout:v}of y){let A=ft("#e6e1d6","#ffffff",{roughness:.9}),P=mu(n,p),C=v.outline.reduce((m,g)=>m+g[0],0)/v.outline.length,M=v.outline.reduce((m,g)=>m+g[1],0)/v.outline.length;v.outline.forEach((m,g)=>{let b=v.outline[(g+1)%v.outline.length],T=new X(C-(m[0]+b[0])/2,0,M-(m[1]+b[1])/2);e.inside.quad(A,Oe(m,r-P),Oe(b,r-P),Oe(b,r),Oe(m,r),T)}),pp(e.inside,w,p.h,r,d)}for(let{stair:w}of _)dp(e.inside,w,s.h,r,d);for(let w of s.steps)ru(e.inside,w,r);for(let w of s.items){let v=w.k==="ceiling-light",A=v?e.insideHigh??e.inside:e.inside,P=r+(i.heightAt(w.x,w.z)??0);A.at(w.x,v?r+s.h-f-.1:P,w.z,(w.r??0)*Math.PI/180,C=>Gl(C,w.k,w.x,w.z,w))}}return V2(n,t,i,e),{leaves:l,wallPaint:c.value}}var Ks={floor:[.34,.34],foot:[.22,.2],head:[.26,.3],ceiling:[.2,.36],corner:[.2,.2],ground:[.42,.75],deck:[.3,.3],item:[.32,.13]};function V2(n,t,e,i){if(!i.shade&&!i.shadeOut)return;let{storey:s,outlines:o,base:r}=e,a=mu(n,s),c=s.walls.filter(v=>!v.open&&!v.rail),l=(v,A)=>c.some(P=>{let C=P.b[0]-P.a[0],M=P.b[1]-P.a[1],m=Math.min(1,Math.max(0,((v-P.a[0])*C+(A-P.a[1])*M)/(C*C+M*M||1e-9)));return Math.hypot(v-P.a[0]-C*m,A-P.a[1]-M*m)<(P.t??.12)/2-.004}),f=t>0?bo(n,t-1):null,h=f?f.stairs.map(v=>Zi(v,f.h).outline):[],d=t+1<n.storeys.length?s.stairs.map(v=>Zi(v,s.h)):[],u=(v,A)=>h.some(P=>Hs(P,v,A)),p=v=>!v||v.shaft||d.some(A=>[.3,A.total/2,A.total-.3].some(P=>xs(v,...A.centre(P)))),y=r+s.h-a,_=r+si;for(let v of o.pieces){let A=s.walls[v.wall];if(A.rail&&A.rail!=="solid")continue;let P=Math.min(A.h??s.h,s.h),C=(A.t??.12)/2+.07,M=(v.l[0][0]+v.l[1][0]+v.r[0][0]+v.r[1][0])/4,m=(v.l[0][1]+v.l[1][1]+v.r[0][1]+v.r[1][1])/4,g=s.openings.filter(b=>b.w===v.wall&&b.s<.3).map(b=>[b.at-b.ww/2,b.at+b.ww/2]).sort((b,T)=>b[0]-T[0]);for(let b of["l","r"]){let T=b==="l"?1:-1,[I]=v[b],[R,D]=v.span[b],N=Math.min(R,D),H=Math.max(R,D);if(H-N<.05)continue;let U=[T*v.d[1],-T*v.d[0]],F=(vt,mt)=>[I[0]+v.d[0]*(vt-R)+U[0]*mt,I[1]+v.d[1]*(vt-R)+U[1]*mt],Y=(vt,mt,j)=>{let[G,q]=F(vt,mt);return new X(G,j,q)},$=[],J=N;for(let[vt,mt]of g)Math.min(vt,H)-J>.03&&$.push([J,Math.min(vt,H)]),J=Math.max(J,mt);H-J>.03&&$.push([J,H]);let Rt=e.indoors(M+U[0]*C,m+U[1]*C);if(Rt&&i.shade){let vt=e.roomAt(...F((N+H)/2,C));if(vt?.shaft)continue;let[mt,j]=Ks.floor,[G,q]=Ks.foot;for(let[z,K]of $){let nt=r+(e.roomAt(...F((z+K)/2,C))?.y??0);[z,(z+K)/2,K].some(lt=>u(...F(lt,j/2)))||i.shade.strip(Y(z,0,nt+.004),Y(K,0,nt+.004),Y(K,j,nt+.004),Y(z,j,nt+.004),mt),i.shade.strip(Y(z,.003,nt),Y(K,.003,nt),Y(K,.003,nt+q),Y(z,.003,nt+q),G)}let ct=!p(vt)&&r+P>=y-.01,Q=ct?y:r+P;if(ct){let z=i.shadeHigh??i.shade,[K,nt]=Ks.head,[lt,gt]=Ks.ceiling;z.strip(Y(N,.003,y),Y(H,.003,y),Y(H,.003,y-nt),Y(N,.003,y-nt),K),z.strip(Y(N,0,y-.004),Y(H,0,y-.004),Y(H,gt,y-.004),Y(N,gt,y-.004),lt)}let[B,et]=Ks.corner;for(let[z,K]of[[N,1],[H,-1]]){if(!l(...F(z-K*.045,.05)))continue;let nt=Math.min(et,(H-N)/2),lt=r+(e.roomAt(...F(z+K*.2,C))?.y??0),gt=i.shadeHigh&&Q>_?[[lt,_,i.shade],[_,Q,i.shadeHigh]]:[[lt,Q,i.shade]];for(let[ut,Mt,yt]of gt)yt.strip(Y(z,.003,ut),Y(z,.003,Mt),Y(z+K*nt,.003,Mt),Y(z+K*nt,.003,ut),B)}}if(!Rt&&i.shadeOut){let vt=e.roomAt(...F((N+H)/2,C+.1));if(vt?.open){let[mt,j]=Ks.deck,G=r+vt.y+.006;for(let[q,ct]of $)i.shadeOut.strip(Y(q,0,G),Y(ct,0,G),Y(ct,j,G),Y(q,j,G),mt)}else if(t===0&&!A.rail){let[mt,j]=Ks.ground;for(let[G,q]of $){let ct=Math.max(1,Math.ceil((q-G)/.5));for(let Q=0;Q<ct;Q++){let B=G+(q-G)*Q/ct,et=G+(q-G)*(Q+1)/ct,z=Math.min(...[.08,.38,j-.05].map(K=>Mo(n,...F((B+et)/2,K))))+.012;i.shadeOut.strip(Y(B,0,z),Y(et,0,z),Y(et,j,z),Y(B,j,z),mt)}}}}}}let[x,S]=Ks.item,w=(v,A,P)=>{let C=Un[A.k];if(!C||C.ceiling||C.h<.2)return;let M=(A.r??0)*Math.PI/180;A.k==="car"?v.around(A.x,P,A.z,C.w,C.d,M,.3,.42,.42):G2.has(A.k)?v.around(A.x,P,A.z,C.w,C.d,M,S,.15,.15):v.around(A.x,P,A.z,C.w,C.d,M,S,x)};if(i.shade)for(let v of s.items){let A=e.heightAt(v.x,v.z);A!=null&&w(i.shade,v,r+A+.005)}if(i.shadeOut&&t===0)for(let v of n.yard?.items??[])w(i.shadeOut,v,Mo(n,v.x,v.z)+.014)}var G2=new Set(["table-low","table-dining","chair","desk","chabudai","cafe-table","stool","office-desk","office-chair","bench","rack","bicycle"]);function W2(n,t,e,i){let{map:s,aspect:o}=wa(t,{color:"#4b3b30",background:"#fff6e2",border:"#b98a5e",font:'800 72px "Yu Gothic UI", "Hiragino Sans", sans-serif'}),r=Math.min(3.4,e.width+2.2),a=new Be(new ni(r,r/o),new Gn({map:s,transparent:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.userData.ownMaterial=!0,a.position.set(e.x+e.normal[0]*.16,i,e.z+e.normal[1]*.16),a.rotation.y=Math.atan2(e.normal[0],e.normal[1]),n.add(a)}function Bp(n){let t=Pp(n),e=t.storeys.length,i=new _e,s=new _e,o=new _e,r=new _e;o.visible=!1,i.add(s,o,r);let a=new Map,c=[],l=null,f=!1,h=_n("stucco-white"),d=[];function u(M){let m=new Map;for(let g of M){let b=new _e,[T,I]=g.d;b.position.set(g.cx+T*g.x-I*g.z,g.base+g.y,g.cz+I*g.x+T*g.z),b.rotation.y=g.turn+(g.mirror?Math.PI:0);for(let D of g.batch.build(b,{where:g.interior?"in":""}))D.material===Ai("far")&&(D.castShadow=!1,d.push(D));r.add(b);let R=`${g.level}|${g.cx.toFixed(2)}|${g.cz.toFixed(2)}`;m.has(R)||(m.set(R,{level:g.level,interior:g.interior,x:g.cx,z:g.cz,y:g.base,width:g.width,auto:g.auto,open:0,parts:[],key:qf(g.level,g.cx,g.cz),lift:!!g.lift}),c.push(m.get(R))),m.get(R).parts.push({pivot:b,rest:b.rotation.y,home:b.position.clone(),swing:!!g.swing,sign:g.dir??0,slide:g.slide?new X(T,0,I).multiplyScalar(g.slide):null})}}function p(){let M=new Ie,m=new Ie,g=new wo,b=[];for(let R=0;R<e;R++){let D=th(t,R,{out:M,outHigh:M,panes:m,shadeOut:g});b.push(...D.leaves.filter(N=>!N.interior)),h=D.wallPaint??h}for(let R=0;R<e;R++)H2(M,t,R,h);let T=t.base??.3;gp(M,t);for(let R of Ws(t)){if(!R.opening.canopy)continue;let D=Math.atan2(R.normal[0],R.normal[1]),N=T+R.opening.s+R.opening.hh+.22;M.box(Ma(R.opening.c==="white"?"white":"black"),R.x+R.normal[0]*.55,N,R.z+R.normal[1]*.55,R.width+.8,.08,1,D)}M.build(s,{where:"out"}),g.build(s);for(let R of m.build(s,{cast:!1}))R.userData.glass=R.material===Ai("far");u(b);let[I]=Ws(t).filter(R=>R.opening.canopy);n.sign&&I&&W2(s,n.sign,I,T+I.opening.s+I.opening.hh+.75)}function y(M){ji(o);let m=new Ie,g=new Ie,b=new wo;for(let T=0;T<M;T++)th(t,T,{out:m,outHigh:m,panes:g,shadeOut:b});th(t,M,{out:m,outHigh:null,panes:g,split:!0,shadeOut:b}),m.build(o,{where:"out"}),b.build(o);for(let T of g.build(o,{cast:!1}))T.userData.glass=T.material===Ai("far")}function _(M){let m=new _e,g=new _e,b=new _e,T=new Ie,I=new Ie,R=new Ie,D=new wo,N=new wo,H=th(t,M,{inside:T,insideHigh:I,cap:R,split:!0,shade:D,shadeHigh:N});T.build(m,{where:"in"}),I.build(g,{where:"in"}),D.build(m),N.build(g),R.build(b,{cast:!1}),i.add(m,g,b),u(H.leaves.filter(U=>U.interior));for(let U of S??[]){let F=v(U,M);F&&(F.open=U.wide.get(M)??0,w(F));let Y=U.stops.find(J=>J.level===M);if(!Y)continue;let $=U.look.hall(Y);m.add($.low),g.add($.high)}return{low:m,high:g,cap:b}}function x(){let M=l!==null;s.visible=!M,o.visible=M;let m=Ai(f?"near":"far");for(let g of[s,o])for(let b of g.children)b.userData.glass&&(b.material=m);for(let g of d)g.material=m;for(let g of c){let b=g.interior?!!a.get(g.level)?.low.visible&&g.level!==l:!M||g.level<l;for(let T of g.parts)T.pivot.visible=b}}p(),x();let S=[];for(let M=0;M<e;M++)for(let m of va(t,M).lifts){let g=S.find(b=>Math.hypot(b.x-m.x,b.z-m.z)<.3);g||(g={x:m.x,z:m.z,w:m.w,d:m.d,r:m.r,stops:[],wide:new Map},S.push(g)),g.stops.push({level:M,y:ya(t,M),at:m.at,out:m.out,half:m.half,gate:m.gate})}for(let M of S)M.look=up(M),i.add(M.look.car);let w=M=>{for(let m of M.parts)m.slide&&m.pivot.position.copy(m.home).addScaledVector(m.slide,M.open)},v=(M,m)=>{let g=M.stops.find(b=>b.level===m);return g&&c.find(b=>b.lift&&b.level===m&&Math.hypot(b.x-g.at[0],b.z-g.at[1])<.4)},A=Ul(t),P=t.roof??{k:"flat"},C=P.k==="flat"?P.parapet??.4:Math.min(7,Math.min(A.x1-A.x0,A.z1-A.z0)/2)*Math.tan((P.pitch??30)*Math.PI/180);return{group:i,design:t,doors:c,bounds:A,levels:e,height:Z0(t)+C,tint:h.color,show({close:M=!1,level:m=null,cut:g=!1}){let b=g&&m!==null;b&&l!==m&&y(m),l=b?m:null,f=M;let T=new Set;M&&(b?[m-1,m].filter(I=>I>=0).forEach(I=>T.add(I)):m!==null?[m-1,m,m+1].filter(I=>I>=0&&I<e).forEach(I=>T.add(I)):[0,1].filter(I=>I<e).forEach(I=>T.add(I)));for(let I of T)a.has(I)||a.set(I,_(I));for(let[I,R]of a){let D=T.has(I);R.low.visible=D,R.high.visible=D&&!(b&&I===m),R.cap.visible=D&&b&&I===m}x()},swing(M,m){for(let g of c){if(g.lift)continue;let b=m(g);if(!(Math.abs(b-g.open)<.001)){g.open+=(b-g.open)*(1-Math.exp(-9*M));for(let T of g.parts)T.swing?T.pivot.rotation.y=T.rest+T.sign*g.open*1.5:T.slide&&T.pivot.position.copy(T.home).addScaledVector(T.slide,g.open)}}},lifts:S.map(M=>({x:M.x,z:M.z,w:M.w,d:M.d,r:M.r,stops:M.stops,setCar(m){M.look.setCar(m)},setDoor(m,g){if(M.wide.get(m)===g)return;M.wide.set(m,g);let b=v(M,m);b&&(b.open=g,w(b))},setCarDoor:m=>M.look.setDoor(m),show:m=>M.look.show(m),pick:(m,g,b)=>M.look.pick(m,g,b)})),dispose(){for(let M of S)M.look.dispose();ji(i)}}}var se={WATER:0,RIVERBED:1,FOREST:2,GREEN:3,FIELD:4,PADDY:5,PARK:6,LOW:7,DENSE:8,MID:9,HIGH:10,COMMERCIAL:11,INDUSTRIAL:12,PUBLIC:13,ROADSIDE_COM:14,STATION_HUB:15},Eo={COLLECTOR:2,ARTERIAL:3,TRUNK:4},Ci=new X(0,1,0),X2={0:"#4b3621",1:"#6f421f",2:"#3f2a1d",3:"#8d6b28",4:"#3a5743",5:"#6d3048",6:"#404852",7:"#1f5a8c",8:"#2d7d9a",9:"#5c246b",10:"#2d7a2d",11:"#1f5c87",12:"#912924",13:"#c75d24",14:"#9c6626",15:"#26466d",16:"#1a5a8a",17:"#a62626",18:"#36658c",19:"#a63a68",20:"#8c1438",21:"#b52e1c",22:"#c94a14",23:"#008c5a",24:"#0c63a8",25:"#246328",26:"#124694",27:"#c42b6e",28:"#9c1646",29:"#7a1236",30:"#1a3275",31:"#5c3820",32:"#b84b14",33:"#c9341a",34:"#8f2419",35:"#1f6e4a",36:"#c95c14",37:"#a34486",38:"#1f5394",39:"#128277",40:"#367d39",41:"#5c34a6",42:"#b58d12",43:"#1c6d8f",44:"#52575e"},kp=new Map;function Y2(n){let t=kp.get(n);if(!t){let e=X2[n]??"#8f2419";t=ft(e,"#ffffff",{roughness:n===44?.65:.32,metalness:n===44?.52:.14}),kp.set(n,t)}return t}var $2={[se.WATER]:"#3b738f",[se.RIVERBED]:"#96947e",[se.FOREST]:"#486535",[se.GREEN]:"#678646",[se.FIELD]:"#9d8658",[se.PADDY]:"#869d54",[se.PARK]:"#6c9148",[se.LOW]:"#7f8368",[se.DENSE]:"#89867b",[se.MID]:"#86877c",[se.HIGH]:"#8e8e88",[se.COMMERCIAL]:"#98948a",[se.INDUSTRIAL]:"#8f8e86",[se.PUBLIC]:"#b2a177",[se.ROADSIDE_COM]:"#8d8c87",[se.STATION_HUB]:"#9a9894"},Ca=[];for(let[n,t]of Object.entries($2))Ca[n]=new he(t);var _u=new he("#806c50"),vr=new he("#b6b09e"),yu=new he("#9e9a90"),vu=new he("#7c765f"),bu=new he("#6f8f72"),Mu=new he("#5a7538");function nh(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Hp(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,o=t-i,r=s*s*(3-2*s),a=o*o*(3-2*o),c=nh(e,i),l=nh(e+1,i),f=nh(e,i+1),h=nh(e+1,i+1),d=c+(l-c)*r,u=f+(h-f)*r;return(d+(u-d)*a)*2-1}function ih(n,t){return Hp(n,t)*.65+Hp(n*2.13+17.3,t*2.13-11.7)*.35}var jt=(n,t,e)=>Math.min(e,Math.max(t,n)),Vp=5,Gp=()=>new Promise(n=>setTimeout(n,0)),To=null,Wp=null,wu=null,Su=null,sh=null;function qp(){return sh||(sh=op(256),sh.repeat.set(1/14,1/14)),sh}function q2(){if(!To){let n=ft("terrainGround","#ffffff",{where:"out",relief:!1});To=n.clone(),To.vertexColors=!0,To.userData={...n.userData},To.onBeforeCompile=n.onBeforeCompile,To.customProgramCacheKey=n.customProgramCacheKey}return To}function K2(){return wu||(wu=new Dn({vertexColors:!0,color:"#ffffff",roughness:.12,metalness:.68,envMapIntensity:1.35,normalMap:qp(),normalScale:new le(.55,.55)})),wu}function Z2(){return Su||(Su=new Dn({color:"#2e6b84",roughness:.12,metalness:.68,envMapIntensity:1.3,normalMap:qp(),normalScale:new le(.45,.45)})),Su}var oh=new Map,J2=n=>n,Ao=(n,t)=>{let e=t[0],i=Math.abs(n-e);for(let s=1;s<t.length;s++){let o=Math.abs(n-t[s]);o<i&&(i=o,e=t[s])}return e},Zs=["siding-white","siding-sand","siding-grey","siding-navy","mortar-cream","metal-dark"],Xp=["roof-metal","roof-slate","roof-metal-green","roof-slate"],Ra=["plaster-white","wood-dark","wood-brown","mortar-cream"],Yp=["roof-kawara","roof-kawara-dark"],Eu=["stucco-ivory","stucco-yellow","brick-brown","mortar-cream"],$p=["tile-beige","tile-white","tile-grey","concrete-stained"],br=["tile-white","mortar-grey","tile-grey","metal-silver"];function Kp(n,t,e,i,s,o,r,a,c=255){let l=Math.round(jt(r,0,1)*255),f=l/255,d=(Math.imul(l,1103515245)+12345>>>16&255)%6,u=d&1,p=d%3,y=d&3,_=t<=3?"old":t<=6?"mid":"new",x=!0;if(n===se.LOW||n===se.DENSE){if(e===4&&n===se.LOW&&s>=10.2&&o>=8.2){let R=f<(_==="old"?.65:_==="mid"?.45:.34)?"japan":f>=.78?"europe":"modern",D=R==="japan"?{wall:Ra[u],roof:"roof-kawara-dark",roofKind:"hip",eave:.32,low:!0}:R==="europe"?{wall:Eu[u],roof:"roof-tile-brown",roofKind:"hip",eave:.3,low:!0}:{wall:u?"mortar-cream":"tile-beige",roof:"roof-slate",roofKind:"hip",eave:.3,low:!0},N=`${D.wall}|${D.roof}|${D.roofKind}|${D.eave}`;return{key:`estate|${R}|${u}|${N}`,spec:{id:`reg-estate-${R}-${d}`,style:R,w:2,d:2,...Hi("estate",2,2,2,u),look:D},compactYard:x}}if(e===3&&s>=8.6&&o>=6.8){let R=f<(_==="old"?.5:_==="mid"?.26:.14)?"japan":f>=.88?"europe":"modern",D=R==="japan"?2:jt(Math.round(i),2,3),N=R==="japan"?{wall:Ra[y],roof:Yp[u],roofKind:u?"gable":"hip",eave:.3,low:!0}:R==="europe"?{wall:Eu[y],roof:u?"roof-tile-brown":"roof-tile-orange",eave:.28,low:!0}:{wall:Zs[d%Zs.length],roof:Xp[p],roofKind:u?"hip":"gable",eave:.28,low:!0},H=`${N.wall}|${N.roof}|${N.roofKind||""}|${N.eave||""}`;return{key:`large|${R}|${D}|${u}|${H}`,spec:{id:`reg-large-${R}-${d}`,style:R,w:2,d:2,...Hi("large",2,2,D,u),look:N},compactYard:x}}if(i>=3&&(s<=6.8||n===se.DENSE&&o<=6.6)){let I=jt(Math.round(i),3,4),R=y,D=d&1?"shed":"flat";return{key:`pencil|${I}|${R}|${D}`,spec:{id:`reg-pencil-${I}-${R}`,style:"modern",w:1,d:1,...Hi("pencil",1,1,I,u),look:{wall:Zs[(R+1)%Zs.length],roof:"roof-metal",roofKind:D,eave:.28,low:!0}},compactYard:!0}}if(n===se.DENSE&&s>=8.8&&o>=5.5&&f>=(_==="old"?.88:.8)){let I=jt(Math.round(i),2,3),R=Zs[p],D=s>=11.2?2:1;return{key:`apart|${D}|${I}|${p}`,spec:{id:`reg-apart-${D}-${I}-${p}`,style:"modern",w:D,d:1,...Hi("apart",D,1,I,p),look:{wall:R,roof:"roof-metal",roofKind:"gable",eave:.45,rail:"panel",low:!0}},compactYard:!0}}if(n===se.DENSE&&_==="old"&&i<=2&&f<.3){let I=Ra[u];return{key:`machiya|${u}|${I}`,spec:{id:`reg-machiya-${u}`,style:"japan",w:1,d:1,...Hi("machiya",1,1,2,u),look:{wall:I,roof:"roof-kawara-dark",roofKind:"gable",eave:.34,low:!0}},compactYard:!0}}if(n===se.DENSE&&i>=2&&f>=(_==="old"?.54:.9)&&f<(_==="old"?.68:.96)){let I=jt(Math.round(i),2,3),R=br[p];return{key:`dense-shop|${I}|${p}`,spec:{id:`reg-dshop-${I}-${p}`,style:"modern",w:1,d:1,...Hi("shophouse",1,1,I,p),look:{wall:R,roof:"roof-metal",roofKind:u?"flat":"gable",rail:"solid",eave:.32}},compactYard:!0}}let A=_==="old"?n===se.DENSE?.54:.45:_==="mid"?.22:n===se.DENSE?.09:.12,P=.04,C="modern";f<A?C="japan":f>=1-P&&(C="europe");let M=C==="japan"?Math.min(2,Math.max(1,Math.round(i))):jt(Math.round(i),1,3),m={};C==="japan"?(m.wall=Ra[y],m.roof=Yp[u],m.roofKind=d%3===0?"gable":"hip",m.eave=.3,m.low=!0):C==="modern"?(m.wall=Zs[d%Zs.length],m.roof=_==="new"?Xp[p]:u?"roof-slate":"roof-metal",m.roofKind=d===0?"shed":p===1?"hip":"gable",m.eave=_==="new"&&d<3?.22:.28,m.low=M<=2):(m.wall=Eu[y],m.roof=u?"roof-tile-brown":"roof-tile-orange",m.eave=.28,m.low=M<=2);let g=s>=9.2&&o>=5.5&&e<=2?2:1,b=g===2&&o>=8.2?2:1,T=`${m.wall}|${m.roof}|${m.roofKind||""}|${m.eave||""}`;return{key:`det|${g}x${b}|${C}|${M}|${u}|${T}|${x?"c":"f"}`,spec:{id:`reg-det-${g}x${b}-${d}`,style:C,w:g,d:b,...Qi(C,g,b,M,u),look:m},compactYard:x}}if(n===se.MID){if(i<=3&&f<.42&&s/Math.max(1,o)<2.2){let g=jt(Math.round(i),2,3),b=Zs[p];return{key:`mid|apart|${g}|${p}`,spec:{id:`reg-midap-${g}-${p}`,style:"modern",w:1,d:1,...Hi("apart",1,1,g,p),look:{wall:b,roof:"roof-metal",roofKind:"gable",eave:.42,rail:"panel",low:!0}},compactYard:!0}}if(s/Math.max(1,o)>=1.8&&i<=5){let g=jt(Math.round(s/7.3),2,3),b=jt(Math.round(i),4,5),T=["mortar-white","mortar-ivory","mortar-grey"][p];return{key:`mid|danchi|${g}|1|${b}|${p}`,spec:{id:`reg-danchi-${p}`,style:"danchi",w:g,d:1,...Qi("danchi",g,1,b,u),look:{wall:T,rail:"solid"}},compactYard:!0}}let P=jt(Math.round(s/8),1,2),C=Ao(i,[3,4,5,7,10]),M=$p[y],m=u?"solid":"panel";return{key:`mid|mansion|${P}|1|${C}|${y}|${m}`,spec:{id:`reg-mid-${y}`,style:"mansion",w:P,d:1,...Qi("mansion",P,1,C,u),look:{wall:M,rail:m}},compactYard:!0}}if(n===se.HIGH){let P=o>=14?2:1,C=Ao(i,[10,14,18,24]),M=$p[y],m=u?"glass":"panel";return{key:`high|mansion|2|${P}|${C}|${u}|${m}`,spec:{id:`reg-high-${u}`,style:"mansion",w:2,d:P,...Qi("mansion",2,P,C,0),look:{wall:M,rail:m}},compactYard:!0}}if(n===se.STATION_HUB||c===20||c===28||c===29){let A=jt(Math.round(s/9),2,3),P=o>=14?2:1,C=Ao(i,[4,6,8,10,14]),M=c===20?"tile-beige":br[y];return{key:`hub|office|${A}|${P}|${C}|${M}`,spec:{id:`reg-hub-${y}`,style:"office",w:A,d:P,floors:Qi("office",A,P,C,0).floors,look:{wall:M,rail:"glass"}},compactYard:!0}}if(n===se.ROADSIDE_COM||c===21||c===22||c===24||c===25||c===26||c===32){let A=jt(Math.round(s/9),1,3),P=o>=13?2:1,C=Ao(i,[1,2,3,4]),M=c===24||c===26?"siding-white":c===22||c===21?"tile-white":br[p];return{key:`rcom|office|${A}|${P}|${C}|${M}`,spec:{id:`reg-rcom-${p}`,style:"office",w:A,d:P,floors:Qi("office",A,P,C,0).floors,look:{wall:M,roofKind:"flat",rail:"solid"}},compactYard:!0}}if(c===0||c===1||c===2||c===7){let A=Ra[u],P=jt(Math.round(i),1,2);return{key:`tradshop|machiya|${P}|${u}|${A}`,spec:{id:`reg-tradshop-${u}`,style:"japan",w:1,d:1,...Hi("machiya",1,1,P,u),look:{wall:A,roof:"roof-kawara-dark",roofKind:"gable",eave:.42,low:!0}},compactYard:!0}}if(n===se.COMMERCIAL||c!==255&&c>=0){if(c===35||i<=2&&s<=10.5&&(c===23||c===33||f<.34)){let m=c===35||c===255&&u===1?xu.cafe:xu.shop;return{key:`com|${m.kind}|${p}`,spec:{id:`reg-${m.kind}-${p}`,kind:m.kind,style:"shop",w:1,d:1,floors:m.floors},compactYard:!0}}if(i<=3&&(s<=10||f<.62)){let m=jt(Math.round(i),2,3),g=br[y];return{key:`com|shophouse|${m}|${p}`,spec:{id:`reg-cshop-${m}-${p}`,style:"modern",w:1,d:1,...Hi("shophouse",1,1,m,p),look:{wall:g,roof:"roof-metal",roofKind:u?"flat":"gable",rail:"solid",eave:.3}},compactYard:!0}}if(i>=3&&s<=6.8){let m=Ao(i,[3,4]);return{key:`com|pencil|${m}|${u}`,spec:{id:`reg-cpencil-${m}-${u}`,style:"modern",w:1,d:1,...Hi("pencil",1,1,m,u),look:{wall:br[u],roof:"roof-metal",roofKind:"flat",eave:.28}},compactYard:!0}}let A=["office","mansion","office","brutal"][y],P=jt(Math.round(s/8),1,2),C=Ao(i,[3,5,7,10]),M=br[p];return{key:`com|${A}|${P}|1|${C}|${p}`,spec:{id:`reg-com-${p}`,style:A,w:P,d:1,floors:Qi("office",P,1,C,0).floors,look:{wall:M,rail:"panel"}},compactYard:!0}}if(n===se.INDUSTRIAL){let A=jt(Math.round(s/10),2,3),P=jt(Math.round(i),1,2),C=u===0?"metal-silver":"metal-white";return{key:`ind|office|${A}|2|${P}|${C}`,spec:{id:`reg-ind-${u}`,style:"office",w:A,d:2,floors:Qi("office",A,2,P,0).floors,look:{wall:C,frame:"black",roofKind:"flat",rail:"solid"}},compactYard:!0}}let S=jt(Math.round(s/8.5),2,5),w=jt(Math.round(o/9),1,2),v=Ao(i,[2,3,4]);return{key:`pub|brutal|${S}|${w}|${v}`,spec:{id:"reg-pub-0",style:"brutal",w:S,d:w,floors:Qi("office",S,w,v,0).floors,look:{wall:"concrete",frame:"silver",roofKind:"flat",rail:"solid"}},compactYard:!0}}function Zp({key:n,spec:t,compactYard:e}){if(oh.has(n))return oh.get(n);let i=Ql(t,{exteriorOnly:!0,compactYard:e}),s=Bp({...t,design:i});s.group.updateMatrixWorld(!0);let o=Ul(i),r=(o.x0+o.x1)/2,a=(o.z0+o.z1)/2,c=Math.max(.5,o.x1-o.x0),l=Math.max(.5,o.z1-o.z0),f=[],h=new X,d=new X,u=new ge;for(let w of[s.group.children[0],s.group.children[2]])w&&w.traverse(v=>{if(!v.isMesh||!v.visible)return;let A=v.geometry,P=A.getAttribute("position"),C=A.getIndex();if(!P||!C)return;let M=A.getAttribute("shade"),m=A.getAttribute("normal"),g=A.getAttribute("uv"),b=v.matrixWorld;u.getNormalMatrix(b);let T=P.count,I=new Float32Array(T*3);for(let H=0;H<T;H++)h.fromBufferAttribute(P,H).applyMatrix4(b),I[H*3]=h.x-r,I[H*3+1]=h.y,I[H*3+2]=h.z-a;let R=Uint32Array.from(C.array);if(M){let H=Float32Array.from(M.array);f.push({isShade:!0,material:v.material,positions:I,shades:H,indices:R});return}if(!m||!g)return;let D=new Float32Array(T*3);for(let H=0;H<T;H++)d.fromBufferAttribute(m,H).applyMatrix3(u).normalize(),D[H*3]=d.x,D[H*3+1]=d.y,D[H*3+2]=d.z;let N=Float32Array.from(g.array);f.push({isShade:!1,material:J2(v.material),castShadow:v.castShadow,receiveShadow:v.receiveShadow,positions:I,normals:D,uvs:N,indices:R})});let p=s.height;s.dispose();let y=[],_=null,x=new Map;for(let w of f){if(w.isShade){_||(_={material:w.material,items:[]}),_.items.push(w);continue}let v=`${w.castShadow?1:0}${w.receiveShadow?1:0}`,A=x.get(w.material);A||(A=new Map,x.set(w.material,A));let P=A.get(v);P||(P={isShade:!1,material:w.material,castShadow:w.castShadow,receiveShadow:w.receiveShadow,items:[]},A.set(v,P)),P.items.push(w)}for(let w of x.values())for(let v of w.values()){if(v.items.length===1){y.push(v.items[0]);continue}let A=0,P=0;for(let I of v.items)A+=I.positions.length/3,P+=I.indices.length;let C=new Float32Array(A*3),M=new Float32Array(A*3),m=new Float32Array(A*2),g=new Uint32Array(P),b=0,T=0;for(let I of v.items){let R=I.positions.length/3;C.set(I.positions,b*3),M.set(I.normals,b*3),m.set(I.uvs,b*2);let D=I.indices;for(let N=0;N<D.length;N++)g[T++]=b+D[N];b+=R}y.push({isShade:!1,material:v.material,castShadow:v.castShadow,receiveShadow:v.receiveShadow,positions:C,normals:M,uvs:m,indices:g})}if(_)if(_.items.length===1)y.push(_.items[0]);else{let w=0,v=0;for(let g of _.items)w+=g.positions.length,v+=g.indices.length;w/=3;let A=new Float32Array(w*3),P=new Float32Array(w),C=new Uint32Array(v),M=0,m=0;for(let g of _.items){let b=g.positions.length/3;A.set(g.positions,M*3),P.set(g.shades,M);let T=g.indices;for(let I=0;I<T.length;I++)C[m++]=M+T[I];M+=b}y.push({isShade:!0,material:_.material,positions:A,shades:P,indices:C})}let S={bw:c,bd:l,totalHeight:p,compactYard:e,parts:y,instancedParts:null};return oh.set(n,S),S}var Tu=null;function j2(n){let t=n?.customProgramCacheKey?.();return typeof t!="string"||!t.startsWith("machi-glass-")?n:(Tu||(Tu=new Dn({color:"#344b60",roughness:.16,metalness:.78,envMapIntensity:1.25})),Tu)}function Q2(n){if(n.instancedParts)return n.instancedParts;let t=[];for(let e of n.parts){if(e.isShade)continue;let i=new bn;i.setAttribute("position",new Ce(e.positions,3)),i.setAttribute("normal",new Ce(e.normals,3)),i.setAttribute("uv",new Ce(e.uvs,2)),i.setIndex(new Ce(e.indices,1)),i.computeBoundingBox(),i.computeBoundingSphere(),t.push({material:j2(e.material),geometry:i})}return n.instancedParts=t,t}var Au=null;function tb(){return Au||(Au=new zs(1,1,1)),Au}function Jp({frameBudget:n=6}={}){let t=new _e;t.name="region-distant-buildings";let e=ft("concrete","#b9b6ae"),i=new Map,s=new Map,o=new Set,r=new Float32Array(8),a={corners:r},c=[0,0],l=0,f=null,h=null,d=!0,u=!1,p=!1,y=null,_=0,x=new Map,S=()=>new Promise(R=>{let D=!1,N=()=>{D||(D=!0,R())};typeof requestAnimationFrame=="function"&&requestAnimationFrame(N),setTimeout(N,24)}),w=(R,D,N,H,U,F,Y,$)=>R<=Y&&U<=N&&D<=$&&F<=H,v=(R,D,N=2e3)=>({x0:R*N,z0:D*N,x1:(R+1)*N,z1:(D+1)*N});function A(R,D){return f?w(R*4e3,D*4e3,(R+1)*4e3,(D+1)*4e3,f.x0,f.z0,f.x1,f.z1):!1}function P(R){for(let D of[...R.children])D.isInstancedMesh&&D.dispose?.(),R.remove(D)}function C(R){let D=s.get(R);D&&(t.remove(D.node),P(D.node),s.delete(R))}function M(R){if(R.startsWith("t:")){let[U,F]=R.slice(2).split(",").map(Number),Y=Math.floor(U/2),$=Math.floor(F/2);if(!A(Y,$))return null;let J=i.get(`${U},${F}`);return J&&J.count>0?[J]:null}let[D,N]=R.slice(2).split(",").map(Number);if(A(D,N))return null;let H=[];for(let U=0;U<2;U++)for(let F=0;F<2;F++){let Y=i.get(`${D*2+F},${N*2+U}`);Y&&Y.count>0&&H.push(Y)}return H.length?H:null}function m(R,D){let N=Math.floor(R/2),H=Math.floor(D/2);return A(N,H)?`t:${R},${D}`:`q:${N},${H}`}function g(){o.clear();for(let R of[...s.keys()])M(R)||C(R);for(let R of i.values())o.add(m(R.tx,R.tz));b()}function b(R=!1){p||!d||u||!o.size||(y&&clearTimeout(y),y=setTimeout(()=>{y=null,!(p||!d||u||!o.size)&&(p=!0,T().catch(()=>{}).finally(()=>{p=!1,d&&!u&&o.size&&b(!0)}))},R?0:120))}async function T(){for(;d&&!u&&o.size;){let R=null;for(let D of o)if(D.startsWith("t:")){R=D;break}R??(R=o.values().next().value),o.delete(R),await I(R),await S()}}async function I(R){let D=_,N=(x.get(R)??0)+1;x.set(R,N);let H=M(R);if(!H){C(R);return}let U=f,F=c,Y=l,$=h,J=new Map,Rt=[],vt=performance.now()+n;for(let j of H){let{corners:G,baseY:q,padY:ct,floors:Q,uses:B,tiers:et,eras:z,tones:K,count:nt}=j,lt=v(j.tx,j.tz),gt=U&&w(lt.x0,lt.z0,lt.x1,lt.z1,U.x0,U.z0,U.x1,U.z1);for(let ut=0;ut<nt;ut++){let Mt=ut*8,yt=G[Mt],pt=G[Mt+1],wt=G[Mt+2],L=G[Mt+3],E=G[Mt+4],k=G[Mt+5],st=G[Mt+6],rt=G[Mt+7];if(gt){let fn=Math.min(yt,wt,E,st),ti=Math.min(pt,L,k,rt),He=Math.max(yt,wt,E,st),Ke=Math.max(pt,L,k,rt);if(w(fn,ti,He,Ke,U.x0,U.z0,U.x1,U.z1))continue}if($&&(r.set(G.subarray(Mt,Mt+8)),!$(a)))continue;let Z=yt-F[0],Et=pt-F[1],V=wt-F[0],it=L-F[1],tt=E-F[0],at=k-F[1],dt=st-F[0],zt=rt-F[1],Pt=(Z+V+tt+dt)*.25,ot=(Et+it+at+zt)*.25,It=Math.hypot(V-Z,it-Et)||1,W=Math.hypot(dt-Z,zt-Et)||1,ht=Z-dt,Tt=Et-zt,Nt=Math.hypot(ht,Tt)||1,St=ht/Nt,bt=Tt/Nt,Dt=bt,Ut=-St,Bt=K[ut],Vt=Bt===256?.5:Bt/255,Yt=j.shopTypes?j.shopTypes[ut]:255,me=Kp(B[ut],z[ut],et[ut],Q[ut],It,W,Vt,!1,Yt),we=Zp(me),Fe=q[ut]-Y,pe=ct[ut]-Y,Me={arch:we,cx:Pt,cz:ot,baseY:Fe,padY:pe,widthM:It,depthM:W,rightX:Dt,rightZ:Ut,outX:St,outZ:bt},Xe=J.get(we);if(Xe||(Xe=[],J.set(we,Xe)),Xe.push(Me),Rt.push(Me),(ut&127)===127&&performance.now()>=vt){if(await S(),!d||D!==_||x.get(R)!==N)return;vt=performance.now()+n}}}if(!d||D!==_||x.get(R)!==N)return;if(!Rt.length){C(R);return}let mt=new _e;mt.name=R,mt.matrixAutoUpdate=!1,mt.updateMatrix();{let j=Rt.length,G=new tr(tb(),e,j),q=G.instanceMatrix.array,ct=1/0,Q=1/0,B=1/0,et=-1/0,z=-1/0,K=-1/0;for(let nt=0;nt<j;nt++){let lt=Rt[nt],gt=lt.arch.compactYard?.08:.36,ut=lt.arch.compactYard?.08:1.28,Mt=lt.widthM+gt*2,yt=lt.depthM+ut+gt,pt=(ut-gt)*.5,wt=lt.cx+lt.outX*pt,L=lt.cz+lt.outZ*pt,E=lt.baseY-3,k=Math.max(.1,lt.padY-E),st=E+k*.5,rt=nt*16;q[rt]=lt.rightX*Mt,q[rt+1]=0,q[rt+2]=lt.rightZ*Mt,q[rt+3]=0,q[rt+4]=0,q[rt+5]=k,q[rt+6]=0,q[rt+7]=0,q[rt+8]=lt.outX*yt,q[rt+9]=0,q[rt+10]=lt.outZ*yt,q[rt+11]=0,q[rt+12]=wt,q[rt+13]=st,q[rt+14]=L,q[rt+15]=1;let Z=(Mt+yt)*.5;wt-Z<ct&&(ct=wt-Z),wt+Z>et&&(et=wt+Z),E<Q&&(Q=E),lt.padY>z&&(z=lt.padY),L-Z<B&&(B=L-Z),L+Z>K&&(K=L+Z)}G.instanceMatrix.needsUpdate=!0,G.boundingBox=new ui(new X(ct,Q,B),new X(et,z,K)),G.boundingSphere=G.boundingBox.getBoundingSphere(new di),G.castShadow=!1,G.receiveShadow=!1,G.matrixAutoUpdate=!1,G.updateMatrix(),mt.add(G)}for(let[j,G]of J.entries()){let q=Q2(j);if(!q.length)continue;let ct=G.length,Q=new Float32Array(ct*16),B=new ho(Q,16),et=1/0,z=1/0,K=1/0,nt=-1/0,lt=-1/0,gt=-1/0;for(let yt=0;yt<ct;yt++){let pt=G[yt],wt=pt.widthM/j.bw,L=pt.depthM/j.bd,E=yt*16;Q[E]=pt.rightX*wt,Q[E+1]=0,Q[E+2]=pt.rightZ*wt,Q[E+3]=0,Q[E+4]=0,Q[E+5]=1,Q[E+6]=0,Q[E+7]=0,Q[E+8]=pt.outX*L,Q[E+9]=0,Q[E+10]=pt.outZ*L,Q[E+11]=0,Q[E+12]=pt.cx,Q[E+13]=pt.padY,Q[E+14]=pt.cz,Q[E+15]=1;let k=Math.max(pt.widthM,pt.depthM)*.75+2;pt.cx-k<et&&(et=pt.cx-k),pt.cx+k>nt&&(nt=pt.cx+k),pt.padY-.5<z&&(z=pt.padY-.5),pt.padY+j.totalHeight+1>lt&&(lt=pt.padY+j.totalHeight+1),pt.cz-k<K&&(K=pt.cz-k),pt.cz+k>gt&&(gt=pt.cz+k)}let ut=new ui(new X(et,z,K),new X(nt,lt,gt)),Mt=ut.getBoundingSphere(new di);for(let yt of q){let pt=new tr(yt.geometry,yt.material,0);pt.instanceMatrix=B,pt.count=ct,pt.boundingBox=ut,pt.boundingSphere=Mt,pt.castShadow=!1,pt.receiveShadow=!1,pt.frustumCulled=!0,pt.matrixAutoUpdate=!1,pt.updateMatrix(),mt.add(pt)}if(performance.now()>=vt){if(await S(),!d||D!==_||x.get(R)!==N){P(mt);return}vt=performance.now()+n}}if(!d||D!==_||x.get(R)!==N){P(mt);return}C(R),t.add(mt),s.set(R,{key:R,node:mt})}return{group:t,hasTile:(R,D)=>i.has(`${R},${D}`),loadedTileKeys:()=>[...i.keys()],setView({origin:R=[0,0],datum:D=0}={}){c[0]===R[0]&&c[1]===R[1]&&l===D||(c=R,l=D,_++,g())},setNearBox(R){let D=f;f=R?{...R}:null;let N=new Set;if(D)for(let H=Math.floor(D.z0/4e3);H<=Math.floor(D.z1/4e3);H++)for(let U=Math.floor(D.x0/4e3);U<=Math.floor(D.x1/4e3);U++)N.add(`${U},${H}`);if(f)for(let H=Math.floor(f.z0/4e3);H<=Math.floor(f.z1/4e3);H++)for(let U=Math.floor(f.x0/4e3);U<=Math.floor(f.x1/4e3);U++)N.add(`${U},${H}`);for(let H of N){let[U,F]=H.split(",").map(Number);if(A(U,F)){C(`q:${U},${F}`);for(let Y=0;Y<2;Y++)for(let $=0;$<2;$++)i.has(`${U*2+$},${F*2+Y}`)&&o.add(`t:${U*2+$},${F*2+Y}`)}else{let Y=!1;for(let $=0;$<2;$++)for(let J=0;J<2;J++)C(`t:${U*2+J},${F*2+$}`),i.has(`${U*2+J},${F*2+$}`)&&(Y=!0);Y&&o.add(`q:${U},${F}`)}}b(!0)},setFilter(R){h=R??null,_++,g()},addTile(R){let D=`${R.tx},${R.tz}`;i.set(D,R);let N=Math.floor(R.tx/2),H=Math.floor(R.tz/2);A(N,H)?(C(`q:${N},${H}`),o.add(`t:${R.tx},${R.tz}`)):o.add(`q:${N},${H}`),b()},removeTile(R,D){let N=`${R},${D}`;if(!i.delete(N))return;let H=Math.floor(R/2),U=Math.floor(D/2);A(H,U)?C(`t:${R},${D}`):(o.add(`q:${H},${U}`),b())},clear(){_++,y&&(clearTimeout(y),y=null),o.clear(),i.clear();for(let R of[...s.keys()])C(R)},setActive(R){d=!!R,t.visible=d&&!u,d||(y&&(clearTimeout(y),y=null),o.clear())},setPaused(R){let D=!!R;u!==D&&(u=D,t.visible=d&&!u,!u&&d&&o.size&&b(!0))},dispose(){d=!1,_++,y&&(clearTimeout(y),y=null),o.clear(),i.clear();for(let R of[...s.keys()])C(R)}}}function jp(){let n=new _e;n.name="region";let t=null,e=0;function i(m,g,b){let T=jt((g-m.box.x0)/m.step,0,m.width-1),I=jt((b-m.box.z0)/m.step,0,m.depth-1),R=Math.min(m.width-2,Math.floor(T)),D=Math.min(m.depth-2,Math.floor(I)),N=T-R,H=I-D,U=m.heights,F=R+D*m.width,Y=U[F]+(U[F+1]-U[F])*N,$=U[F+m.width]+(U[F+m.width+1]-U[F+m.width])*N;return Y+($-Y)*H}function s(m,g,b){let T=jt((g-m.box.x0)/m.step,0,m.width-1),I=jt((b-m.box.z0)/m.step,0,m.depth-1);return m.water[Math.round(T)+Math.round(I)*m.width]}function o(m,g,b){if(!m.era)return 5;let T=jt((g-m.box.x0)/m.step,0,m.width-1),I=jt((b-m.box.z0)/m.step,0,m.depth-1);return m.era[Math.round(T)+Math.round(I)*m.width]||5}function r(m,g,b=null){let{width:T,depth:I,step:R}=m,D=new Uint32Array((T-1)*(I-1)*6),N=0;for(let H=0;H<I-1;H++){let U=m.box.z0+H*R,F=g&&U>=g.z0&&U+R<=g.z1;for(let Y=0;Y<T-1;Y++){if(b&&!b[Y+H*T])continue;if(F){let mt=m.box.x0+Y*R;if(mt>=g.x0&&mt+R<=g.x1)continue}let $=Y+H*T,J=$+1,Rt=$+T,vt=Rt+1;D[N++]=$,D[N++]=Rt,D[N++]=J,D[N++]=J,D[N++]=Rt,D[N++]=vt}}return new Ce(D.subarray(0,N),1)}let a=(m,g)=>r(m,g);function*c(m,g,b,T){let{width:I,depth:R,step:D,heights:N,use:H,water:U}=m,F=new Float32Array(I*R*3),Y=new Float32Array(I*R*3),$=T?null:new Float32Array(I*R*2),J=T?null:new Float32Array(F.length),Rt=1/0,vt=-1/0;for(let Q=0;Q<R;Q++){let B=Math.max(0,Q-1),et=Math.min(R-1,Q+1);for(let z=0;z<I;z++){let K=z+Q*I,nt=m.box.x0+z*D,lt=m.box.z0+Q*D;F[K*3]=nt-g[0];let gt=N[K]-b;F[K*3+1]=gt,F[K*3+2]=lt-g[1],$&&($[K*2]=nt,$[K*2+1]=lt),Rt=Math.min(Rt,gt),vt=Math.max(vt,gt);let ut=Math.max(0,z-1),Mt=Math.min(I-1,z+1),yt=(N[ut+Q*I]-N[Mt+Q*I])/(Math.max(1,Mt-ut)*D),pt=(N[z+B*I]-N[z+et*I])/(Math.max(1,et-B)*D),wt=Math.sqrt(yt*yt+1+pt*pt),L=1/wt;J&&(J[K*3]=yt/wt,J[K*3+1]=L,J[K*3+2]=pt/wt);let E=H[K],k=U[K]===1,st=k?Ca[se.WATER]:Ca[E]??Ca[se.LOW],rt=st.r,Z=st.g,Et=st.b;if(!T){let V=ih(nt*.025,lt*.025),it=ih(nt*.14+31.4,lt*.14-19.2),tt=.97+.06*V+.03*it;if(k)tt=.72+.08*V;else if(U[K]===2)tt=.76+.06*V,rt=rt*.55+vr.r*.45,Z=Z*.55+vr.g*.45,Et=Et*.55+vr.b*.45;else{let at=Math.sqrt(Math.max(0,1-L*L)),dt=Math.max(1,Math.round(6/D)),zt=Math.max(2,Math.round(13/D)),Pt=W=>U[Math.max(0,z-W)+Q*I]===1||U[Math.min(I-1,z+W)+Q*I]===1||U[z+Math.max(0,Q-W)*I]===1||U[z+Math.min(R-1,Q+W)*I]===1||U[Math.max(0,z-W)+Math.max(0,Q-W)*I]===1||U[Math.min(I-1,z+W)+Math.max(0,Q-W)*I]===1||U[Math.max(0,z-W)+Math.min(R-1,Q+W)*I]===1||U[Math.min(I-1,z+W)+Math.min(R-1,Q+W)*I]===1,ot=Pt(dt),It=ot||Pt(zt);if(E===se.RIVERBED||It&&(E===se.GREEN||at>.12)){let W=ih(nt*.032+7.1,lt*.032-3.4)*.5+.5,ht=ot?.68:E===se.RIVERBED?.35+.45*W:.48+.25*W,Tt=Ca[se.RIVERBED];rt=rt*(1-ht)+vr.r*(ht*W)+Tt.r*(ht*(1-W)),Z=Z*(1-ht)+vr.g*(ht*W)+Tt.g*(ht*(1-W)),Et=Et*(1-ht)+vr.b*(ht*W)+Tt.b*(ht*(1-W))}else if(E===se.LOW||E===se.DENSE||E===se.MID||E===se.COMMERCIAL||E===se.ROADSIDE_COM||E===se.STATION_HUB){let W=ih(nt*.085-5.2,lt*.085+9.4);if(W>.1){let ht=jt((W-.1)*.9,0,.55);rt=rt*(1-ht)+yu.r*ht,Z=Z*(1-ht)+yu.g*ht,Et=Et*(1-ht)+yu.b*ht}else if(W<-.15){let ht=jt((-.15-W)*.85,0,.45);rt=rt*(1-ht)+vu.r*ht,Z=Z*(1-ht)+vu.g*ht,Et=Et*(1-ht)+vu.b*ht}}else if(E===se.PADDY){let W=Math.abs(Math.sin(nt*(Math.PI/24))),ht=Math.abs(Math.sin(lt*(Math.PI/38)));if(W>.955||ht>.965)rt=Mu.r,Z=Mu.g,Et=Mu.b;else{let Tt=.35+.15*V;rt=rt*(1-Tt)+bu.r*Tt,Z=Z*(1-Tt)+bu.g*Tt,Et=Et*(1-Tt)+bu.b*Tt}}else if(E===se.FIELD){let W=Math.sin((nt*.78+lt*.62)*(Math.PI*2/3.2));tt+=W*.055}else(E===se.FOREST||E===se.GREEN)&&(tt+=.05*Math.sin(nt*.13+lt*.11));if(!U[K]&&at>.24&&!It){let W=jt((at-.24)*2.2,0,.75);rt=rt*(1-W)+_u.r*W,Z=Z*(1-W)+_u.g*W,Et=Et*(1-W)+_u.b*W}}rt=jt(rt*tt,0,1),Z=jt(Z*tt,0,1),Et=jt(Et*tt,0,1)}Y[K*3]=rt,Y[K*3+1]=Z,Y[K*3+2]=Et}Q%8===7&&(yield)}let mt=new bn;if(mt.setAttribute("position",new Ce(F,3)),mt.setAttribute("color",new Ce(Y,3)),$){let Q=new Ce($,2);mt.setAttribute("uv",Q),mt.setAttribute("uv1",Q)}J&&mt.setAttribute("normal",new Ce(J,3)),mt.setIndex(a(m,null));let j=(I-1)*D/2,G=(R-1)*D/2,q=new X(m.box.x0-g[0]+j,(Rt+vt)/2,m.box.z0-g[1]+G);mt.boundingSphere=new di(q,Math.hypot(j,(vt-Rt)/2,G)),Wp??(Wp=new Gn({vertexColors:!0}));let ct=new Be(mt,T?Wp:q2());return ct.receiveShadow=!T,ct.name="region-ground",ct}function*l(m,g,b,T){let{width:I,depth:R,step:D,heights:N,water:H}=m,U=new _e;U.name="region-water";let F=null,Y=null,$=I*R,J=new Float32Array($).fill(NaN),Rt=new Uint8Array($).fill(255),vt=!1;for(let mt=0;mt<$;mt++)H[mt]===1&&(J[mt]=N[mt]-b+1.65,Rt[mt]=0,vt=!0);if(vt){let mt=D<=4?4:1,j=[];for(let q=0;q<$;q++)Rt[q]===0&&j.push(q);for(let q=1;q<=mt&&j.length;q++){let ct=[];for(let Q of j){let B=Q%I,et=(Q-B)/I;for(let z=-1;z<=1;z++)for(let K=-1;K<=1;K++){if(K===0&&z===0)continue;let nt=B+K,lt=et+z;if(nt<0||nt>=I||lt<0||lt>=R)continue;let gt=nt+lt*I;if(Rt[gt]!==255)continue;let ut=0,Mt=0;for(let pt=-1;pt<=1;pt++)for(let wt=-1;wt<=1;wt++){let L=nt+wt,E=lt+pt;if(L<0||L>=I||E<0||E>=R)continue;let k=L+E*I;Rt[k]<q&&(ut+=J[k],Mt++)}if(!Mt)continue;let yt=ut/Mt;J[gt]=yt,Rt[gt]=q,N[gt]-b<=yt+.2&&ct.push(gt)}}j=ct}Y=new Uint8Array($);let G=!1;for(let q=0;q<R-1;q++)for(let ct=0;ct<I-1;ct++){let Q=ct+q*I,B=Q+1,et=Q+I,z=et+1;Rt[Q]<255&&Rt[B]<255&&Rt[et]<255&&Rt[z]<255&&Math.min(Rt[Q],Rt[B],Rt[et],Rt[z])<mt&&(Y[Q]=1,G=!0)}if(G){let q=new Float32Array($*3),ct=new Float32Array($*3),Q=new Float32Array($*2),B=new Float32Array($*3),et=new he("#1d526d"),z=new he("#3b7c92");for(let lt=0;lt<R;lt++)for(let gt=0;gt<I;gt++){let ut=gt+lt*I;if(Rt[ut]===255)continue;let Mt=m.box.x0+gt*D,yt=m.box.z0+lt*D,pt=J[ut];q[ut*3]=Mt-g[0],q[ut*3+1]=pt,q[ut*3+2]=yt-g[1],Q[ut*2]=Mt,Q[ut*2+1]=yt,B[ut*3]=0,B[ut*3+1]=1,B[ut*3+2]=0;let wt=jt((pt-(N[ut]-b))/1.5,0,1),L=.95+.06*Math.sin(Mt*.08+yt*.06);ct[ut*3]=jt((z.r*(1-wt)+et.r*wt)*L,0,1),ct[ut*3+1]=jt((z.g*(1-wt)+et.g*wt)*L,0,1),ct[ut*3+2]=jt((z.b*(1-wt)+et.b*wt)*L,0,1)}let K=new bn;K.setAttribute("position",new Ce(q,3)),K.setAttribute("color",new Ce(ct,3)),K.setAttribute("uv",new Ce(Q,2)),K.setAttribute("normal",new Ce(B,3)),K.setIndex(r(m,null,Y));let nt=new Be(K,K2());nt.receiveShadow=!0,nt.name="region-water-surface",U.add(nt),F={mesh:nt,cells:Y}}}if(yield,!T&&D<=4&&m.streams&&m.streams.length){let mt=new Ie,j=new Ie,G=ft("revetment","#c4c0b4"),q=ft("concrete","#d4d1c8"),ct=Z2(),{x0:Q,z0:B,x1:et,z1:z}=m.box,K=25,nt=(lt,gt,ut)=>new X(lt-g[0],gt,ut-g[1]);for(let lt of m.streams){if(lt.covered)continue;let gt=[];for(let V=0;V<lt.points.length;V+=2)gt.push([lt.points[V],lt.points[V+1]]);let ut=[gt[0]];for(let V=1;V<gt.length;V++){let[it,tt]=gt[V-1],[at,dt]=gt[V],zt=Math.hypot(at-it,dt-tt),Pt=Math.max(1,Math.ceil(zt/2.2));for(let ot=1;ot<=Pt;ot++)ut.push([it+(at-it)*ot/Pt,tt+(dt-tt)*ot/Pt])}if(ut.length<2)continue;let Mt=Math.max(1.1,lt.width*.5),yt=Mt+2.5,pt=ut.length,wt=new Float32Array(pt),L=new Float32Array(pt),E=new Float32Array(pt),k=new Float32Array(pt),st=new Float32Array(pt),rt=new Uint8Array(pt);for(let V=0;V<pt;V++){let[it,tt]=ut[Math.max(0,V-1)],[at,dt]=ut[Math.min(pt-1,V+1)],zt=Math.hypot(at-it,dt-tt)||1,Pt=-(dt-tt)/zt,ot=(at-it)/zt;wt[V]=Pt,L[V]=ot;let[It,W]=ut[V];It>Q-K&&It<et+K&&W>B-K&&W<z+K&&s(m,It,W)!==1&&(rt[V]=1);let ht=i(m,It-Pt*yt,W-ot*yt)-b,Tt=i(m,It+Pt*yt,W+ot*yt)-b;E[V]=ht,k[V]=Tt,st[V]=Math.min(ht,Tt)}let Z=V=>{for(let it=0;it<3;it++){let tt=V.slice();for(let at=1;at<pt-1;at++)V[at]=tt[at-1]*.25+tt[at]*.5+tt[at+1]*.25}};Z(E),Z(k),Z(st);let Et=Math.min(.68,(lt.depth??1.4)*.45);for(let V=1;V<pt;V++){if(!rt[V-1]&&!rt[V])continue;let[it,tt]=ut[V-1],[at,dt]=ut[V],zt=wt[V-1],Pt=L[V-1],ot=wt[V],It=L[V],W=st[V-1]-Et,ht=st[V]-Et,Tt=Math.max(E[V-1]+.05,W+.36),Nt=Math.max(E[V]+.05,ht+.36),St=Math.max(k[V-1]+.05,W+.36),bt=Math.max(k[V]+.05,ht+.36),Dt=Mt+.22,Ut=Math.max(.4,Mt-.16),Bt=Mt+.55,Vt=Mt+1.05;j.quad(ct,nt(it-zt*Dt,W,tt-Pt*Dt),nt(at-ot*Dt,ht,dt-It*Dt),nt(at+ot*Dt,ht,dt+It*Dt),nt(it+zt*Dt,W,tt+Pt*Dt),Ci);let Yt=new X((zt+ot)*.5,.35,(Pt+It)*.5);mt.quad(G,nt(it-zt*Bt,Tt,tt-Pt*Bt),nt(at-ot*Bt,Nt,dt-It*Bt),nt(at-ot*Ut,ht-.55,dt-It*Ut),nt(it-zt*Ut,W-.55,tt-Pt*Ut),Yt),mt.quad(q,nt(it-zt*Vt,Tt,tt-Pt*Vt),nt(at-ot*Vt,Nt,dt-It*Vt),nt(at-ot*Bt,Nt,dt-It*Bt),nt(it-zt*Bt,Tt,tt-Pt*Bt),Ci),mt.quad(q,nt(it-zt*Vt,Tt-.35,tt-Pt*Vt),nt(at-ot*Vt,Nt-.35,dt-It*Vt),nt(at-ot*Vt,Nt,dt-It*Vt),nt(it-zt*Vt,Tt,tt-Pt*Vt),new X(-(zt+ot)*.5,0,-(Pt+It)*.5));let me=new X(-(zt+ot)*.5,.35,-(Pt+It)*.5);mt.quad(G,nt(it+zt*Ut,W-.55,tt+Pt*Ut),nt(at+ot*Ut,ht-.55,dt+It*Ut),nt(at+ot*Bt,bt,dt+It*Bt),nt(it+zt*Bt,St,tt+Pt*Bt),me),mt.quad(q,nt(it+zt*Bt,St,tt+Pt*Bt),nt(at+ot*Bt,bt,dt+It*Bt),nt(at+ot*Vt,bt,dt+It*Vt),nt(it+zt*Vt,St,tt+Pt*Vt),Ci),mt.quad(q,nt(it+zt*Vt,St-.35,tt+Pt*Vt),nt(at+ot*Vt,bt-.35,dt+It*Vt),nt(at+ot*Vt,bt,dt+It*Vt),nt(it+zt*Vt,St,tt+Pt*Vt),new X((zt+ot)*.5,0,(Pt+It)*.5))}yield}mt.build(U,{cast:!1,receive:!0,where:"out"}),j.build(U,{cast:!1,receive:!0})}return{node:U,waterSurface:F}}function f(m,g,b,T,{bridge:I=!1}={}){let R=[];for(let J=0;J<g.length;J+=2)R.push([g[J],g[J+1]]);let D=[R[0]],N=[0];for(let J=1;J<R.length;J++){let[Rt,vt]=R[J-1],[mt,j]=R[J],G=Math.hypot(mt-Rt,j-vt),q=Math.max(1,Math.ceil(G/b)),ct=N[N.length-1];for(let Q=1;Q<=q;Q++)D.push([Rt+(mt-Rt)*Q/q,vt+(j-vt)*Q/q]),N.push(ct+G*Q/q)}let H=D.length,U=new Float32Array(H),F=new Float32Array(H);for(let J=0;J<H;J++){let[Rt,vt]=D[Math.max(0,J-1)],[mt,j]=D[Math.min(H-1,J+1)],G=Math.hypot(mt-Rt,j-vt)||1;U[J]=-(j-vt)/G,F[J]=(mt-Rt)/G}let Y=null,$=null;if(I){let J=new Uint8Array(H),Rt=new Float32Array(H),vt=!1;for(let mt=0;mt<H;mt++){let j=s(m,D[mt][0],D[mt][1]);J[mt]=j,Rt[mt]=i(m,D[mt][0],D[mt][1])-T,j&&(vt=!0)}if(vt){Y=new Float32Array(H).fill(NaN),$=new Uint8Array(H);for(let mt=0;mt<H;mt++){if(!J[mt])continue;let j=mt,G=J[mt]===1;for(;mt+1<H&&J[mt+1];)mt++,J[mt]===1&&(G=!0);let q=mt;if(G){let ct=j;for(;ct>0&&j-ct<12&&(J[ct]||Rt[ct-1]>Rt[ct]+.08);)ct--;let Q=q;for(;Q<H-1&&Q-q<12&&(J[Q]||Rt[Q+1]>Rt[Q]+.08);)Q++;let B=1/0;for(let z=j;z<=q;z++)J[z]===1&&(B=Math.min(B,Rt[z]));let et=Math.max(Rt[ct],Rt[Q],(Number.isFinite(B)?B:0)+4.5);for(let z=ct;z<=Q;z++)if($[z]=1,z<j){let K=(z-ct)/Math.max(1,j-ct);Y[z]=Rt[ct]+(et-Rt[ct])*K}else if(z>q){let K=(z-q)/Math.max(1,Q-q);Y[z]=et+(Rt[Q]-et)*K}else Y[z]=et}else{let ct=Math.max(0,j-2),Q=Math.min(H-1,q+2),B=Rt[ct],et=Rt[Q];for(let z=ct;z<=Q;z++){let K=(z-ct)/Math.max(1,Q-ct);Y[z]=B+(et-B)*K+.12*Math.sin(Math.PI*K),$[z]=2}}}}}return{dense:D,dist:N,nxArr:U,nzArr:F,overrideY:Y,bridgeKind:$}}function h(m,g,b,T,I,R,D,{lift:N=.05,side0:H=-1,side1:U=1,step:F=6,dash:Y=null,skirt:$=0,bridge:J=!1,omitAt:Rt=null}={}){let vt=Array.isArray(T)||ArrayBuffer.isView(T)?f(b,T,F,D,{bridge:J}):T,{dense:mt,dist:j,nxArr:G,nzArr:q,overrideY:ct,bridgeKind:Q}=vt,{x0:B,z0:et,x1:z,z1:K}=b.box,nt=22,lt=I/2,gt=Math.abs(U-H)*lt,ut=Y?1:Math.max(I>=2.4?2:1,Math.min(4,Math.ceil(gt/3.5))),Mt=pt=>{let[wt,L]=mt[pt],E=G[pt],k=q[pt],st=ct&&!Number.isNaN(ct[pt])?ct[pt]:null,rt=[];for(let Z=0;Z<=ut;Z++){let Et=H+(U-H)*(Z/ut),V=wt+E*lt*Et,it=L+k*lt*Et,tt=(st!==null?st:i(b,V,it)-D)+N;rt.push(new X(V-R[0],tt,it-R[1]))}return{pts:rt,nx:E,nz:k,isBridge:Q?Q[pt]===1:!1}},yt=null;for(let pt=0;pt<mt.length;pt++){let[wt,L]=mt[pt],k=wt>B-nt&&wt<z+nt&&L>et-nt&&L<K+nt?Mt(pt):null;if(yt&&k){let[st,rt]=mt[pt-1];if((!Y||(j[pt-1]+j[pt])*.5%Y[1]<Y[0])&&(!Rt||!Rt((st+wt)*.5,(rt+L)*.5))){for(let V=0;V<ut;V++)m.quad(g,yt.pts[V],k.pts[V],k.pts[V+1],yt.pts[V+1],Ci);let Et=(yt.isBridge||k.isBridge)&&$>0?Math.max($,.85):$;if(Et>0){let V=yt.pts[0],it=k.pts[0],tt=yt.pts[ut],at=k.pts[ut],dt=new X(-(yt.nx+k.nx)*.5,0,-(yt.nz+k.nz)*.5),zt=new X((yt.nx+k.nx)*.5,0,(yt.nz+k.nz)*.5);m.quad(g,new X(V.x,V.y-Et,V.z),new X(it.x,it.y-Et,it.z),it,V,dt),m.quad(g,new X(tt.x,tt.y-Et,tt.z),new X(at.x,at.y-Et,at.z),at,tt,zt)}}}yt=k}}function d(m,g,b,T,I,R,D,N,H,U,F,Y,$,J=.18){let Rt=-H,vt=N,mt=(j,G)=>{let q=R+N*j+Rt*G,ct=D+H*j+vt*G;return new X(q-T[0],i(b,q,ct)-I+J,ct-T[1])};m.quad(g,mt(U,Y),mt(F,Y),mt(F,$),mt(U,$),Ci)}function u(m,g,b,T,I,R,D,N){let H=b-m,U=T-g,F=D-I,Y=N-R,$=H*Y-U*F;if(Math.abs($)<1e-6)return null;let J=I-m,Rt=R-g,vt=(J*Y-Rt*F)/$,mt=(J*U-Rt*H)/$;return vt>=-.02&&vt<=1.02&&mt>=-.02&&mt<=1.02?{x:m+vt*H,z:g+vt*U,t:vt,u:mt}:null}function*p(m,g,b){let T=new Ie,I=ft("asphalt","#ffffff"),R=ft("sidewalk","#e2e0d8"),D=ft("mortar","#c6c4ba"),N=ft("asphalt","#d4d3cc"),H=ft("asphalt","#dfded8"),U=ft("asphalt","#eae8e0"),F=ft("mortar","#cbc9c0"),Y=ft("#43474b","#ffffff",{roughness:.45,metalness:.72}),$=ft("#eeece2","#ffffff",{roughness:.65}),J=ft("#e4a829","#ffffff",{roughness:.62}),Rt=ft("#2274b8","#ffffff",{roughness:.52}),vt=ft("#4f783e","#ffffff",{roughness:.88}),mt=ft("#4c5259","#ffffff",{roughness:.45,metalness:.65}),j=ft("#e03030","#ffffff",{roughness:.35}),G=ft("#f0b429","#ffffff",{roughness:.35}),q=ft("#14a060","#ffffff",{roughness:.35}),ct=ft("#d62828","#ffffff",{roughness:.42}),Q=ft("#e8ecef","#ffffff",{roughness:.38,metalness:.55}),B=Math.min(2,m.step||2),{x0:et,z0:z,x1:K,z1:nt}=m.box,lt=[];for(let L=0;L<m.roads.length;L++){let E=m.roads[L],k=E.points;for(let st=2;st<k.length;st+=2){let rt=k[st-2],Z=k[st-1],Et=k[st],V=k[st+1];Math.max(rt,Et)<et-25||Math.min(rt,Et)>K+25||Math.max(Z,V)<z-25||Math.min(Z,V)>nt+25||lt.push({rIdx:L,kind:E.kind,width:E.width,ax:rt,az:Z,bx:Et,bz:V})}}let gt=[];for(let L=0;L<lt.length;L++){let E=lt[L];for(let k=L+1;k<lt.length;k++){let st=lt[k];if(E.rIdx===st.rIdx)continue;let rt=u(E.ax,E.az,E.bx,E.bz,st.ax,st.az,st.bx,st.bz);if(!rt)continue;let Z=Math.max(E.width,st.width)*.5+3.2;gt.push({x:rt.x,z:rt.z,rSq:Z*Z,rA:E.rIdx,rB:st.rIdx,radA:st.width*.5+1.8,radB:st.width*.5+1.8})}}let ut=[];for(let L of m.streets){if(L.width<2.2)continue;let E=L.points,k=E[0],st=E[1],rt=E[E.length-2],Z=E[E.length-1];for(let[Et,V,it,tt]of[[k,st,rt,Z],[rt,Z,k,st]])if(!(Et<et-20||Et>K+20||V<z-20||V>nt+20))for(let at of lt){let dt=at.bx-at.ax,zt=at.bz-at.az,Pt=dt*dt+zt*zt,ot=Pt>1e-6?jt(((Et-at.ax)*dt+(V-at.az)*zt)/Pt,0,1):0,It=at.ax+dt*ot,W=at.az+zt*ot;if(Math.hypot(It-Et,W-V)<at.width*.5+3.2){let ht=Math.sqrt(Pt)||1,Tt=-zt/ht,Nt=dt/ht,St=(it-Et)*Tt+(tt-V)*Nt>=0?1:-1,bt=L.width*.5+2.2;ut.push({x:It,z:W,rIdx:at.rIdx,sideSign:St,rSq:bt*bt})}}}for(let L=0;L<m.roads.length;L++){let E=m.roads[L],k=f(m,E.points,B,b,{bridge:!0}),st=E.kind>=Eo.ARTERIAL?3.5:2.5,rt=.25,Z=jt(1-2*st/E.width,.2,1),Et=jt(Z-2*rt/E.width,.18,Z),V=jt(.18/E.width,.01,.05),it=jt(.15/E.width,.008,.035),tt=Et-it*1.6,at=E.regFlags??0,dt=!!(at&32||E.centerlineType==="median"||E.kind>=Eo.TRUNK&&E.width>=24),zt=!!(at&512||E.centerlineType==="none"||E.width<5.5)&&!dt&&E.kind<Eo.COLLECTOR,Pt=!!(at&256||E.centerlineType==="yellow_solid"||E.kind===Eo.ARTERIAL)&&!dt&&!zt,ot=!!(at&128),It=gt.filter(Dt=>Dt.rA===L||Dt.rB===L),W=ut.filter(Dt=>Dt.rIdx===L&&Dt.sideSign<0),ht=ut.filter(Dt=>Dt.rIdx===L&&Dt.sideSign>0),Tt=It.length?(Dt,Ut)=>{for(let Bt=0;Bt<It.length;Bt++){let Vt=It[Bt],Yt=Vt.rA===L?Vt.radB:Vt.radA,me=Dt-Vt.x,we=Ut-Vt.z;if(me*me+we*we<=Yt*Yt)return!0}return!1}:null,Nt=Dt=>It.length||Dt.length?(Ut,Bt)=>{if(Tt&&Tt(Ut,Bt))return!0;for(let Vt=0;Vt<Dt.length;Vt++){let Yt=Dt[Vt],me=Ut-Yt.x,we=Bt-Yt.z;if(me*me+we*we<=Yt.rSq)return!0}return!1}:null,St=Nt(W),bt=Nt(ht);if(h(T,I,m,k,E.width,g,b,{lift:.23,side0:-Z,side1:Z,step:B}),h(T,D,m,k,E.width,g,b,{lift:.3,side0:-Z,side1:-Et,step:B,skirt:.16,omitAt:St}),h(T,D,m,k,E.width,g,b,{lift:.3,side0:Et,side1:Z,step:B,skirt:.16,omitAt:bt}),h(T,R,m,k,E.width,g,b,{lift:.31,side0:-1,side1:-Z,step:B,skirt:.32,omitAt:St}),h(T,R,m,k,E.width,g,b,{lift:.31,side0:Z,side1:1,step:B,skirt:.32,omitAt:bt}),h(T,$,m,k,E.width,g,b,{lift:.242,side0:-tt-it,side1:-tt+it,step:B,omitAt:St}),h(T,$,m,k,E.width,g,b,{lift:.242,side0:tt-it,side1:tt+it,step:B,omitAt:bt}),ot&&tt>.25){let Dt=jt(.55/E.width,.015,.045),Ut=tt-it-Dt;h(T,Rt,m,k,E.width,g,b,{lift:.241,side0:-Ut-Dt,side1:-Ut+Dt,step:B,dash:[3,6],omitAt:Tt}),h(T,Rt,m,k,E.width,g,b,{lift:.241,side0:Ut-Dt,side1:Ut+Dt,step:B,dash:[3,6],omitAt:Tt})}if(dt){let Dt=jt(.85/E.width,.025,.075),Ut=Dt*.68;h(T,D,m,k,E.width,g,b,{lift:.3,side0:-Dt,side1:Dt,step:B,skirt:.14,omitAt:Tt}),h(T,vt,m,k,E.width,g,b,{lift:.32,side0:-Ut,side1:Ut,step:B,omitAt:Tt});let Bt=(Dt+tt)*.5;h(T,$,m,k,E.width,g,b,{lift:.242,side0:-Bt-it,side1:-Bt+it,step:B,dash:[4.5,10],omitAt:Tt}),h(T,$,m,k,E.width,g,b,{lift:.242,side0:Bt-it,side1:Bt+it,step:B,dash:[4.5,10],omitAt:Tt})}else if(!zt&&Pt){if(h(T,J,m,k,E.width,g,b,{lift:.245,side0:-V,side1:V,step:B,omitAt:Tt}),E.kind>=Eo.ARTERIAL){let Dt=tt*.5;h(T,$,m,k,E.width,g,b,{lift:.242,side0:-Dt-it,side1:-Dt+it,step:B,dash:[4.5,10],omitAt:Tt}),h(T,$,m,k,E.width,g,b,{lift:.242,side0:Dt-it,side1:Dt+it,step:B,dash:[4.5,10],omitAt:Tt})}}else zt||h(T,$,m,k,E.width,g,b,{lift:.245,side0:-V,side1:V,step:B,dash:[4.5,9.5],omitAt:Tt});if(k.dense.length>=4){let Ut=E.width*.5-.35,{dense:Bt,nxArr:Vt,nzArr:Yt,bridgeKind:me}=k;for(let we=2;we<Bt.length;we+=4){if(me?.[we]===1)continue;let[Fe,pe]=Bt[we-2],[Me,Xe]=Bt[we];if(Fe<et-14||Fe>K+14||pe<z-14||pe>nt+14||Tt&&Tt((Fe+Me)*.5,(pe+Xe)*.5))continue;let fn=Math.hypot(Me-Fe,Xe-pe);if(fn<2)continue;let ti=i(m,Fe,pe)-b,He=i(m,Me,Xe)-b;if(Math.abs(He-ti)/fn<.055)continue;let Ke=Math.atan2(Me-Fe,Xe-pe),Nn=(Fe+Me)*.5,vi=(pe+Xe)*.5,Tn=Vt[we],ri=Yt[we];for(let bi of[-1,1]){let Se=Nn+Tn*Ut*bi-g[0],Re=vi+ri*Ut*bi-g[1],O=(ti+He)*.5+.31;T.box(Q,Se,O+.58,Re,.08,.24,Math.min(8,fn),Ke),T.box(mt,Se,O+.34,Re,.09,.68,.09,Ke)}}}if(k.bridgeKind){let Dt=E.width/2,Ut=22,{dense:Bt,nxArr:Vt,nzArr:Yt,overrideY:me,bridgeKind:we}=k;for(let Fe of[-1,1])for(let pe=1;pe<Bt.length;pe++){if(we[pe-1]!==1&&we[pe]!==1)continue;let[Me,Xe]=Bt[pe-1],[fn,ti]=Bt[pe];if(Me<et-Ut||Me>K+Ut||Xe<z-Ut||Xe>nt+Ut)continue;let He=(Number.isNaN(me[pe-1])?i(m,Me,Xe)-b:me[pe-1])+.31,Ke=(Number.isNaN(me[pe])?i(m,fn,ti)-b:me[pe])+.31,Nn=Me+Vt[pe-1]*(Dt-.12)*Fe-g[0],vi=Xe+Yt[pe-1]*(Dt-.12)*Fe-g[1],Tn=fn+Vt[pe]*(Dt-.12)*Fe-g[0],ri=ti+Yt[pe]*(Dt-.12)*Fe-g[1],bi=(Nn+Tn)*.5,Se=(vi+ri)*.5,Re=Math.hypot(Tn-Nn,ri-vi);if(Re<.05)continue;let O=Math.atan2(Tn-Nn,ri-vi);T.box(D,bi,(He+Ke)*.5+.48,Se,.22,.96,Re+.04,O)}}yield}let Mt=new Map,yt=(L,E)=>`${Math.round(L*.5)},${Math.round(E*.5)}`;for(let L of m.streets){let E=L.points;if(E.length>=4){let k=yt(E[0],E[1]),st=yt(E[E.length-2],E[E.length-1]);Mt.set(k,(Mt.get(k)??0)+1),Mt.set(st,(Mt.get(st)??0)+1)}}for(let L of m.streets){let E=f(m,L.points,B,b,{bridge:!0}),k=L.kind==="stair",st=k||L.kind==="alley"||L.width<3.6,rt=L.kind==="lane"||L.kind==="designated",Z=L.points,Et=Z.length;if(k){h(T,H,m,E,L.width,g,b,{lift:.218,side0:-.86,side1:.86,step:B}),h(T,F,m,E,L.width,g,b,{lift:.213,side0:-1,side1:-.86,step:B,skirt:.25}),h(T,F,m,E,L.width,g,b,{lift:.213,side0:.86,side1:1,step:B,skirt:.25});for(let it=2;it<Et;it+=2){let tt=Z[it-2],at=Z[it-1],dt=Z[it],zt=Z[it+1],Pt=Math.hypot(dt-tt,zt-at);if(Pt<3)continue;let ot=(dt-tt)/Pt,It=(zt-at)/Pt;for(let W=.6;W<Pt-.5;W+=.9)d(T,D,m,g,b,tt+ot*W,at+It*W,ot,It,-.18,.18,-(L.width*.4),L.width*.4,.25)}}else if(st){let V=jt(1-.44/Math.max(L.width,2.2),.72,.9);h(T,U,m,E,L.width,g,b,{lift:.218,side0:-V,side1:V,step:B}),h(T,F,m,E,L.width,g,b,{lift:.213,side0:-1,side1:-V,step:B,skirt:.25}),h(T,F,m,E,L.width,g,b,{lift:.213,side0:V,side1:1,step:B,skirt:.25})}else{let V=rt?H:N,it=jt(1-2*.3/Math.max(L.width,2.4),.68,.9);if(h(T,V,m,E,L.width,g,b,{lift:.22,side0:-it,side1:it,step:B}),h(T,F,m,E,L.width,g,b,{lift:.215,side0:-1,side1:-it,step:B,skirt:.25}),h(T,F,m,E,L.width,g,b,{lift:.215,side0:it,side1:1,step:B,skirt:.25}),L.width>=4.8){let tt=jt(.11/L.width,.015,.035),at=it-tt*1.4;h(T,$,m,E,L.width,g,b,{lift:.225,side0:-at-tt,side1:-at+tt,step:B}),h(T,$,m,E,L.width,g,b,{lift:.225,side0:at-tt,side1:at+tt,step:B})}if(Et>=4){let[tt,at]=[Z[Et-2],Z[Et-1]],[dt,zt]=[Z[Et-4],Z[Et-3]],Pt=Math.hypot(tt-dt,at-zt);if(Pt>=4&&(Mt.get(yt(tt,at))??0)===1&&!lt.some(St=>Math.hypot(St.ax-tt,St.az-at)<St.width+4)){let St=(tt-dt)/Pt,bt=(at-zt)/Pt;d(T,V,m,g,b,tt,at,St,bt,-.4,.35,-L.width*.5,L.width*.5,.221)}let[ot,It]=[Z[0],Z[1]],[W,ht]=[Z[2],Z[3]],Tt=Math.hypot(W-ot,ht-It);if(Tt>=4&&(Mt.get(yt(ot,It))??0)===1&&!lt.some(St=>Math.hypot(St.ax-ot,St.az-It)<St.width+4)){let St=(ot-W)/Tt,bt=(It-ht)/Tt;d(T,V,m,g,b,ot,It,St,bt,-.4,.35,-L.width*.5,L.width*.5,.221)}let Nt=L.width/2*((1+it)*.5);for(let St=2;St<Et;St+=2){let bt=Z[St-2],Dt=Z[St-1],Ut=Z[St],Bt=Z[St+1],Vt=Math.hypot(Ut-bt,Bt-Dt);if(Vt<12)continue;let Yt=(Ut-bt)/Vt,me=(Bt-Dt)/Vt,we=bt+Yt*(Vt*.5),Fe=Dt+me*(Vt*.5);we>=et&&we<=K&&Fe>=z&&Fe<=nt&&d(T,Y,m,g,b,we,Fe,Yt,me,-.45,.45,Nt-.14,Nt+.14,.223)}}}yield}let pt=[];for(let L=0;L<lt.length;L++){let E=lt[L];for(let k=L+1;k<lt.length;k++){let st=lt[k];if(E.rIdx===st.rIdx)continue;let rt=u(E.ax,E.az,E.bx,E.bz,st.ax,st.az,st.bx,st.bz);if(!(!rt||rt.x<et+4||rt.x>K-4||rt.z<z+4||rt.z>nt-4)&&!pt.some(Z=>Math.hypot(Z.x-rt.x,Z.z-rt.z)<22)){pt.push(rt);for(let[Z,Et]of[[E,st],[st,E]]){let V=Math.hypot(Z.bx-Z.ax,Z.bz-Z.az)||1,it=(Z.bx-Z.ax)/V,tt=(Z.bz-Z.az)/V,at=-tt,dt=it,zt=Z.kind>=Eo.ARTERIAL?3.5:2.5,Pt=Math.max(2.5,Z.width/2-zt-.35),ot=Et.width/2+2.2;d(T,I,m,g,b,rt.x,rt.z,it,tt,-(ot-.6),ot-.6,-(Pt+.35),Pt+.35,.2462);for(let It of[-1,1]){let W=It*(ot+1.6);for(let Ut=-Pt+.45;Ut<=Pt-.45;Ut+=.9)d(T,$,m,g,b,rt.x,rt.z,it,tt,W-1.5,W+1.5,Ut-.22,Ut+.22,.248);let ht=It*(ot+4.8),Tt=It>0?.2:-Pt+.25,Nt=It>0?Pt-.25:-.2;d(T,$,m,g,b,rt.x,rt.z,it,tt,ht-.22,ht+.22,Tt,Nt,.248);let St=It*(ot+24),bt=It>0?Pt*.5:-Pt*.5,Dt=(Ut,Bt)=>{let Vt=rt.x+it*Ut+at*Bt,Yt=rt.z+tt*Ut+dt*Bt;return new X(Vt-g[0],i(m,Vt,Yt)-b+.248,Yt-g[1])};T.quad($,Dt(St-2.4,bt),Dt(St,bt-.72),Dt(St+2.4,bt),Dt(St,bt+.72),Ci)}}}}}if(m.intersections?.length)for(let L of m.intersections){if(L.x<et+3||L.x>K-3||L.z<z+3||L.z>nt-3)continue;let E=i(m,L.x,L.z)-b+.3;if(L.hasSignal)for(let[k,st,rt]of[[-7.5,-7.5,0],[7.5,7.5,Math.PI]]){let Z=L.x+k-g[0],Et=L.z+st-g[1];T.box(mt,Z,E+2.6,Et,.22,5.2,.22,rt),T.box(mt,Z+(k<0?1.8:-1.8),E+4.9,Et,3.6,.16,.16,0);let V=Z+(k<0?2.8:-2.8);T.box(mt,V,E+4.65,Et,1.35,.42,.28,0),T.box(j,V-.38,E+4.65,Et+(k<0?.16:-.16),.24,.24,.06,0),T.box(G,V,E+4.65,Et+(k<0?.16:-.16),.24,.24,.06,0),T.box(q,V+.38,E+4.65,Et+(k<0?.16:-.16),.24,.24,.06,0)}else if(L.hasStop){let k=L.x-4.2-g[0],st=L.z-4.2-g[1];T.box(mt,k,E+1.25,st,.08,2.5,.08,0),T.box(ct,k,E+2.35,st,.65,.56,.06,.4)}}if(m.levelCrossings?.length)for(let L of m.levelCrossings){if(L.x<et+3||L.x>K-3||L.z<z+3||L.z>nt-3)continue;let E=i(m,L.x,L.z)-b+.25,k=L.railAngle??0,st=-Math.sin(k),rt=Math.cos(k);for(let Z of[-1,1]){let Et=L.x+st*Z*3.8-g[0],V=L.z+rt*Z*3.8-g[1];T.box(G,Et,E+1.6,V,.18,3.2,.18,0),T.box(mt,Et,E+2.9,V,.72,.28,.16,k),T.box(j,Et,E+2.55,V,.55,.22,.2,k),T.box(G,Et+st*Z*-.4,E+.95,V+rt*Z*-.4,3.2,.1,.08,L.roadAngle??0)}}for(let L of m.streets){if(L.width<3.6||L.points.length<4)continue;let E=L.points,k=E.length,st=L.width/2-.38,rt=[[E[0],E[1],E[2],E[3],!1],[E[k-4],E[k-3],E[k-2],E[k-1],!0]];for(let[Z,Et,V,it,tt]of rt){let at=Math.hypot(V-Z,it-Et);if(at<6)continue;let dt=(V-Z)/at,zt=(it-Et)/at,Pt=tt?V:Z,ot=tt?it:Et;if(Pt<et+2||Pt>K-2||ot<z+2||ot>nt-2)continue;let It=null;for(let St of lt){let bt=St.bx-St.ax,Dt=St.bz-St.az,Ut=bt*bt+Dt*Dt,Bt=Ut>0?((Pt-St.ax)*bt+(ot-St.az)*Dt)/Ut:0;if(Bt=jt(Bt,0,1),Math.hypot(St.ax+bt*Bt-Pt,St.az+Dt*Bt-ot)<St.width/2+1.8){It=St;break}}if(!It)continue;let W=It.width/2+1.6;if(W+2>=at)continue;let ht=tt?at-W:W,Tt=tt?-st:.05,Nt=tt?-.05:st;d(T,$,m,g,b,Z,Et,dt,zt,ht-.18,ht+.18,Tt,Nt,.228)}}yield;let wt=new _e;return wt.name="region-roads",T.build(wt,{cast:!1,receive:!0,where:"out"}),wt}function*y(m,g,b){let T=[],I=[],R=new he;for(let U of m.roads){R.set(U.kind>=Eo.ARTERIAL?"#e9d8ad":"#dddcd4");for(let F=2;F<U.points.length;F+=2)for(let Y of[F-2,F]){let $=U.points[Y],J=U.points[Y+1];T.push($-g[0],i(m,$,J)-b+4,J-g[1]),I.push(R.r,R.g,R.b)}yield}let D=new bn;D.setAttribute("position",new pn(T,3)),D.setAttribute("color",new pn(I,3));let N=new nr({vertexColors:!0});N.userData.ownMaterial=!0;let H=new Qr(D,N);return H.userData.ownMaterial=!0,H.name="region-overview-roads",H}function*_(m,g,b){let T=[];if(!m.buildings.length){let V=new _e;return V.name="region-buildings",{node:V,solids:T}}let I=32,R=new Map,D=(V,it,tt,at,dt)=>{let zt={ax:V,az:it,bx:tt,bz:at,half:dt},Pt=Math.floor((Math.min(V,tt)-dt-4)/I),ot=Math.floor((Math.max(V,tt)+dt+4)/I),It=Math.floor((Math.min(it,at)-dt-4)/I),W=Math.floor((Math.max(it,at)+dt+4)/I);for(let ht=It;ht<=W;ht++)for(let Tt=Pt;Tt<=ot;Tt++){let Nt=Tt+ht*1e5,St=R.get(Nt);St||R.set(Nt,St=[]),St.push(zt)}};for(let V of m.roads){let it=V.width*.5;for(let tt=2;tt<V.points.length;tt+=2)D(V.points[tt-2],V.points[tt-1],V.points[tt],V.points[tt+1],it)}for(let V of m.streets){let it=V.width*.5;for(let tt=2;tt<V.points.length;tt+=2)D(V.points[tt-2],V.points[tt-1],V.points[tt],V.points[tt+1],it)}let N=(V,it,tt)=>{let at=R.get(Math.floor(V/I)+Math.floor(it/I)*1e5);if(!at)return!0;for(let dt of at){let zt=dt.bx-dt.ax,Pt=dt.bz-dt.az,ot=zt*zt+Pt*Pt,It=ot>0?jt(((V-dt.ax)*zt+(it-dt.az)*Pt)/ot,0,1):0;if(Math.hypot(dt.ax+zt*It-V,dt.az+Pt*It-it)-dt.half<tt)return!1}return!0},H=new Ie,U=new Ie,F=ft("concrete","#b9b6ae"),Y=ft("grass","#739450"),$=ft("grass","#5e8242"),J=ft("gravel","#cbc4b4"),Rt=ft("gravel","#e5e0d4"),vt=ft("grass","#466a35"),mt=ft("concrete","#c7c3b8"),j=ft("stone","#aca699"),G=ft("concrete","#b5b0a4"),q=ft("planks","#6b5642"),ct=ft("#3c3f42","#ffffff",{roughness:.48,metalness:.42}),Q=ft("hedge","#446632"),B=ft("#93543b","#ffffff",{roughness:.85}),et=ft("#8c9298","#ffffff",{roughness:.45,metalness:.55}),z=ft("#4a5562","#ffffff",{roughness:.35,metalness:.65}),K=ft("#e4e4df","#ffffff",{roughness:.65}),nt=ft("#1b2944","#ffffff",{roughness:.18,metalness:.72}),lt=ft("mortar","#ede6d6"),gt=_n("roof-kawara-dark"),ut=ft("#5b4632","#ffffff",{roughness:.92}),Mt=[ft("#4d7236","#ffffff",{roughness:.88}),ft("#5d8340","#ffffff",{roughness:.88}),ft("#3f602f","#ffffff",{roughness:.88})],yt=ft("#c46d68","#ffffff",{roughness:.85}),pt=[ft("#dadbd6","#ffffff",{roughness:.25,metalness:.42}),ft("#353940","#ffffff",{roughness:.25,metalness:.42}),ft("#5b6a79","#ffffff",{roughness:.25,metalness:.42}),ft("#7f3a36","#ffffff",{roughness:.25,metalness:.42})],wt=ft("#253038","#ffffff",{roughness:.1,metalness:.75}),L=ft("#222325","#ffffff",{roughness:.9}),E=new Map,k={material:null,vCount:0,iCount:0,vCursor:0,iCursor:0},st=(V,it,tt,at,dt)=>{let zt=E.get(V);zt||(zt={material:V,castShadow:it,receiveShadow:tt,vCount:0,iCount:0,vCursor:0,iCursor:0},E.set(V,zt)),zt.vCount+=at,zt.iCount+=dt},rt=(V,it,tt)=>new X(V,it,tt),Z=new Array(m.buildings.length);for(let V=0;V<m.buildings.length;V++){let it=m.buildings[V],tt=it.corners,at=(tt[0]+tt[2]+tt[4]+tt[6])*.25,dt=(tt[1]+tt[3]+tt[5]+tt[7])*.25,zt=[[tt[0],tt[1]],[tt[2],tt[3]],[tt[4],tt[5]],[tt[6],tt[7]]],Pt=1/0,ot=-1/0;for(let[Se,Re]of zt){let O=i(m,Se,Re)-b;Pt=Math.min(Pt,O),ot=Math.max(ot,O)}let It=Pt-.45,W=ot+.04,ht=zt.map(([Se,Re])=>[Se-g[0],Re-g[1]]),Tt=(ht[0][0]+ht[1][0]+ht[2][0]+ht[3][0])*.25,Nt=(ht[0][1]+ht[1][1]+ht[2][1]+ht[3][1])*.25,St=Math.hypot(ht[1][0]-ht[0][0],ht[1][1]-ht[0][1])||1,bt=Math.hypot(ht[3][0]-ht[0][0],ht[3][1]-ht[0][1])||1,Dt=(ht[1][0]-ht[0][0])/St,Ut=(ht[1][1]-ht[0][1])/St,Bt=ht[0][0]-ht[3][0],Vt=ht[0][1]-ht[3][1],Yt=Math.hypot(Bt,Vt)||1,me=Bt/Yt,we=Vt/Yt,Fe=we,pe=-me,Me=it.lot??[.2,.2,.2,.2],Xe=it.tier??1,fn=Pt;if(it.parcelPoly&&it.parcelPoly.length>=6){let Se=it.parcelPoly;for(let Re=0;Re<Se.length;Re+=2){let O=i(m,Se[Re],Se[Re+1])-b;O<fn&&(fn=O)}}else if(Me[0]+Me[1]+Me[2]+Me[3]>.35){let Se=St*.5,Re=bt*.5;for(let[O,_t]of[[-Se-Me[0],Re+Me[2]],[Se+Me[1],Re+Me[2]],[Se+Me[1],-Re-Me[3]],[-Se-Me[0],-Re-Me[3]]]){let At=i(m,at+Fe*O+me*_t,dt+pe*O+we*_t)-b;At<fn&&(fn=At)}}let ti=it.use===se.LOW?N((tt[0]+tt[2])*.5,(tt[1]+tt[3])*.5,1.55):!1,He=o(m,at,dt),Ke=it.shopType??255,Nn=Kp(it.use,He,Xe,it.floors,St,bt,it.tone??.5,ti,Ke),vi=!oh.has(Nn.key),Tn=Zp(Nn);vi&&(yield);for(let Se of Tn.parts){let Re=Se.positions.length/3,O=Se.indices.length;Se.isShade?(k.material??(k.material=Se.material),k.vCount+=Re,k.iCount+=O):st(Se.material,Se.castShadow,Se.receiveShadow,Re,O)}let ri=St/Tn.bw,bi=bt/Tn.bd;Z[V]={arch:Tn,ring:ht,cx:Tt,cz:Nt,bcx:at,bcz:dt,ux:Dt,uz:Ut,rightX:Fe,rightZ:pe,outX:me,outZ:we,base:It,padY:W,lotLow:fn,widthM:St,depthM:bt,lot:Me,tier:Xe,use:it.use,floors:it.floors,era:He,tone:it.tone??.5,shopType:Ke,sx:ri,sz:bi,invSx:1/ri,invSz:1/bi,retainingH:it.retainingH??0,designFlags:it.designFlags??0,frontRoadW:it.frontRoadW??6,gardenCode:it.gardenCode??0,parcelPoly:it.parcelPoly??null},T.push({ring:ht,base:It,top:W+Tn.totalHeight}),(V&63)===63&&(yield)}for(let V of E.values())V.positions=new Float32Array(V.vCount*3),V.normals=new Float32Array(V.vCount*3),V.uvs=new Float32Array(V.vCount*2),V.indices=new Uint32Array(V.iCount);k.vCount>0&&(k.positions=new Float32Array(k.vCount*3),k.shades=new Float32Array(k.vCount),k.indices=new Uint32Array(k.iCount));for(let V=0;V<Z.length;V++){let it=Z[V],{arch:tt,cx:at,cz:dt,bcx:zt,bcz:Pt,ux:ot,uz:It,rightX:W,rightZ:ht,outX:Tt,outZ:Nt,base:St,padY:bt,lotLow:Dt,widthM:Ut,depthM:Bt,lot:Vt,tier:Yt,use:me,era:we,tone:Fe,shopType:pe,sx:Me,sz:Xe,invSx:fn,invSz:ti}=it,He=tt.bw*.5,Ke=tt.bd*.5,Nn=tt.compactYard?.08:1.28,vi=tt.compactYard?.08:.36,Tn=Ut*.5+vi,ri=Bt*.5+Nn,bi=-(Bt*.5+vi),Se=(Ht,Ft,te)=>rt(at+W*Ht+Tt*te,Ft,dt+ht*Ht+Nt*te),Re=[[-Tn,bi],[Tn,bi],[Tn,ri],[-Tn,ri]];H.quad(F,Se(Re[0][0],bt,Re[0][1]),Se(Re[1][0],bt,Re[1][1]),Se(Re[2][0],bt,Re[2][1]),Se(Re[3][0],bt,Re[3][1]),Ci);for(let Ht=0;Ht<4;Ht++){let[Ft,te]=Re[Ht],[Wt,ne]=Re[(Ht+1)%4],ie=(Ft+Wt)*.5,Ve=(te+ne)*.5,On=rt(W*ie+Tt*Ve,0,ht*ie+Nt*Ve).normalize();H.quad(F,Se(Ft,St,te),Se(Wt,St,ne),Se(Wt,bt,ne),Se(Ft,bt,te),On)}let O=it.retainingH??0,_t=it.designFlags??0,At=Math.atan2(-ht,W);if(O>=1.2||bt-St>=1.2){let Ht=Math.max(bt-St,O);if(_t&4&&Ht>=1.35){let te=Math.min(3.4,Ut*.62),Wt=Math.min(Ht-.18,2.25),ne=Bt*.5+Nn+.05;U.box(ct,at+Tt*ne,St+Wt*.5+.04,dt+Nt*ne,te,Wt,.24,At),U.box(F,at+Tt*(ne+.06),St+Wt+.14,dt+Nt*(ne+.06),te+.36,.22,.32,At)}let Ft=Math.max(2.6,Ut*.48);for(let te=-Ut*.4;te<=Ut*.4;te+=Ft){let Wt=at+W*te+Tt*(Bt*.5+Nn+.08),ne=dt+ht*te+Nt*(Bt*.5+Nn+.08);U.box(F,Wt,St+Ht*.5,ne,.28,Ht*.94,.22,At)}}if(_t&32&&it.floors>=4){let Ht=bt+tt.totalHeight-1.4;U.box(F,at-Tt*(Bt*.14),Ht,dt-Nt*(Bt*.14),Ut*.86,1.3,Bt*.68,At)}let[Ct,xt,Lt,Ot]=Vt,Qt=it.gardenCode??0,Jt=Qt&15,ce=Qt>>>4&3,fe=!!(Qt&64),$t=Qt===0&&(me===se.LOW||me===se.DENSE)?Yt>=2||Ot>=1.5||Lt>=1.5?1:0:Jt,ue=(Math.imul(Math.round(zt*10),73856093)^Math.imul(Math.round(Pt*10),19349663)^Math.round(Fe*255))>>>0,Pe=Math.imul(ue,1664525)+1013904223>>>0;if(it.parcelPoly&&it.parcelPoly.length>=6||Ct+xt+Lt+Ot>=.2){let Ht=Ut*.5,Ft=Bt*.5,te=-Ht-Ct,Wt=Ht+xt,ne=-Ft-Ot,ie=Ft+Lt,Ve=(te+Wt)*.5,On=(ne+ie)*.5,Gt=bt-.06,Fn=Dt-.45,Le=At,ve=(xe,Ee,Te)=>rt(at+W*xe+Tt*Ee,Te,dt+ht*xe+Nt*Ee),Zt=(xe,Ee,Te,Ne,De,en,nn)=>{U.box(xe,at+W*Ee+Tt*Ne,Te,dt+ht*Ee+Nt*Ne,De,en,nn,Le)},Ye=me===se.LOW||me===se.DENSE,un=me===se.MID||me===se.HIGH,Pn=!!(_t&8||_t&32768||it.frontRoadW>0&&it.frontRoadW<2.7),ke=(xe,Ee,Te,Ne,De)=>{let en=Gt+.016;Zt(De,xe,en+.34,Ee,Te,.38,Ne),Zt(wt,xe,en+.68,Ee-.14,Te*.84,.32,Ne*.52),Zt(De,xe,en+.85,Ee-.16,Te*.78,.07,Ne*.44);let nn=Te*.44,dn=Ne*.31;for(let ze of[-1,1])for(let Gi of[-1,1])Zt(L,xe+ze*nn,en+.15,Ee+Gi*dn,.18,.3,.46)},ai=$t===2?Rt:$t===0||ce===0&&Ye?J:$t===3?j:Ye||un?Yt===4||$t===4?$:Yt>=2||Lt>=1.4||Ot>=1.5||xt>=1.4?Y:J:J,Qs=it.parcelPoly;if(Qs&&Qs.length>=6){let xe=[];for(let Te=0;Te<Qs.length;Te+=2)xe.push([Qs[Te]-g[0],Qs[Te+1]-g[1]]);U.shape(ai,xe,[],Gt,!0);let Ee=xe.length;for(let Te=0;Te<Ee;Te++){let Ne=xe[Te],De=xe[(Te+1)%Ee],en=De[0]-Ne[0],nn=De[1]-Ne[1];if(Math.hypot(en,nn)<.08)continue;let ze=(Ne[0]+De[0])*.5-at,Gi=(Ne[1]+De[1])*.5-dt,gh=rt(ze,0,Gi).normalize();U.quad(F,rt(Ne[0],Fn,Ne[1]),rt(De[0],Fn,De[1]),rt(De[0],Gt,De[1]),rt(Ne[0],Gt,Ne[1]),gh)}}else{let xe=[[te,ne],[Wt,ne],[Wt,ie],[te,ie]];U.quad(ai,ve(te,ne,Gt),ve(Wt,ne,Gt),ve(Wt,ie,Gt),ve(te,ie,Gt),Ci);for(let Ee=0;Ee<4;Ee++){let[Te,Ne]=xe[Ee],[De,en]=xe[(Ee+1)%4],nn=(Te+De)*.5-Ve,dn=(Ne+en)*.5-On,ze=rt(W*nn+Tt*dn,0,ht*nn+Nt*dn).normalize();U.quad(F,ve(Te,Ne,Fn),ve(De,en,Fn),ve(De,en,Gt),ve(Te,Ne,Gt),ze)}}if(O>=.7&&!(_t&4)&&Lt>=.55){let xe=jt(Math.round((bt-Dt)/.22),2,5),Ee=jt(Ut*.28,1,1.8),Te=jt(ue&1?.55:-.25,-Ht+.65,Ht-.65),Ne=jt(Lt*.75,.55,1.65)/xe,De=Math.max(.18,(bt-Math.max(Dt,bt-1.2))/xe);for(let en=0;en<xe;en++){let nn=Gt-De*(en+.45),dn=Ft+Lt*.22+(en+.5)*Ne;Zt(F,Te,nn,dn,Ee,De,Ne*1.06)}}if((me===se.ROADSIDE_COM||me===se.INDUSTRIAL||$t===5)&&!Pn&&Lt>=2.6){U.quad(mt,ve(te+.14,Ft+.1,Gt+.014),ve(Wt-.14,Ft+.1,Gt+.014),ve(Wt-.14,ie-.06,Gt+.014),ve(te+.14,ie-.06,Gt+.014),Ci);let xe=Ft+Math.min(Lt*.52,2.55),Ee=Math.min(3,Math.floor((Wt-te-1.2)/2.6));for(let Te=0;Te<Ee;Te++){let Ne=(te+Wt)*.5+(Te-(Ee-1)*.5)*2.5;Zt(F,Ne,Gt+.06,xe-1.55,1.4,.1,.14),(Pe>>>Te*3&3)!==0&&ke(Ne,xe,1.68,Math.min(4.1,Lt-.45),pt[(ue+Te)%pt.length])}}if(un&&(Ct>=1.1||xt>=1.1||Lt>=1.2||Ot>=1.2)&&Lt>=1.4&&Wt-te>=3.2&&(Zt(Q,te+.65,Gt+.34,ie-.42,.72,.62,Math.min(1.6,Lt*.6)),Zt(z,Wt-1.35,Gt+1.85,Ft+Math.min(1,Lt*.55),2.1,.07,1.15),Zt(ct,Wt-.55,Gt+.92,Ft+Math.min(1,Lt*.55),.08,1.84,.08),Zt(ct,Wt-2.15,Gt+.92,Ft+Math.min(1,Lt*.55),.08,1.84,.08)),Ye){let xe=ie-.02,Ee=Math.max(ne+.15,-Ft+.2),Te=!Pn&&Ct>=2.4&&xe-Ee>=4,Ne=!Pn&&xt>=2.4&&xe-Ee>=4,De=Te&&Ne?ht>=0?"L":"R":Te?"L":Ne?"R":"",en=De!=="",nn=De==="L"?te+.08:Ht+.06,dn=De==="L"?-Ht-.06:Wt-.08;if(en){U.quad(mt,ve(nn,Ee,Gt+.014),ve(dn,Ee,Gt+.014),ve(dn,xe,Gt+.014),ve(nn,xe,Gt+.014),Ci);let re=(nn+dn)*.5,oe=dn-nn;if(Zt(F,re,Gt+.06,Math.max(Ee+.5,Ft-1.2),Math.min(1.4,oe*.7),.1,.14),oe>=2.35&&ue%3!==0&&we>=6){let ee=Math.min(xe-2.1,Ft+Lt*.35),sn=De==="L"?nn+.14:dn-.14;Zt(z,re,Gt+2.18,ee,Math.min(2.35,oe-.12),.07,Math.min(4.1,xe-Ee-.25)),Zt(ct,sn,Gt+1.09,ee-1.25,.09,2.18,.09),Zt(ct,sn,Gt+1.09,ee+1.25,.09,2.18,.09)}}let ze=jt(Yt===4?0:ue&1?.55:-.25,-Ht+.65,Ht-.65),Gi=Yt===4?1.35:Yt===3?1.05:.85;if(Lt>=.42)if($t===2||$t===1&&Lt>=1.6){let re=Math.max(2,Math.floor((Lt-.18)/.55));for(let oe=0;oe<re;oe++){let ee=Ft+.22+(oe+.5)*((Lt-.24)/re);Zt(j,ze+(oe&1?.09:-.09),Gt+.022,ee,.46,.04,.36)}}else U.quad(j,ve(ze-Gi*.5,Ft+.04,Gt+.018),ve(ze+Gi*.5,Ft+.04,Gt+.018),ve(ze+Gi*.5,ie-.02,Gt+.018),ve(ze-Gi*.5,ie-.02,Gt+.018),Ci);if($t===0||ce===0){let re=xt>=.42?1:Ct>=.42?-1:0;if(re!==0){let oe=re>0?Ht+Math.min(.24,xt*.45):-Ht-Math.min(.24,Ct*.45);Zt(K,oe,Gt+.36,-Ft*.25,.28,.62,.76)}else Ot>=.42&&Zt(K,Ht*.45,Gt+.36,-Ft-Math.min(.24,Ot*.45),.76,.62,.28);Lt>=.45&&Zt(ct,ze,bt+2.42,Ft+.28,Math.min(1.4,Ut*.36),.08,.52)}if($t!==0&&ce!==0){let re=[{sKey:"B",dot:-Nt,space:Ot},{sKey:"F",dot:Nt,space:Lt},...De!=="L"?[{sKey:"L",dot:-ht,space:Ct}]:[],...De!=="R"?[{sKey:"R",dot:ht,space:xt}]:[]],oe=null;for(let ee of re)ee.space>=1.35&&ee.dot>.2&&(!oe||ee.dot>oe.dot)&&(oe=ee);if(oe){let ee=jt(oe.space*.45,.8,1.45);if(oe.sKey==="B")Zt(q,0,Gt+.12,-Ft-ee*.5-.05,jt(Ut*.5,2.2,4.8),.24,ee),$t===1&&Ot>=ee+.85&&(Zt(B,-Ht*.45,Gt+.16,ne+.36,Math.min(2.2,Ut*.32),.32,.46),Zt(Q,-Ht*.45,Gt+.42,ne+.36,Math.min(1.9,Ut*.26),.28,.32));else if(oe.sKey==="F"){let sn=ze>=0?-Ht*.42:Ht*.42;Math.abs(sn-ze)>Gi*.6+1&&(Zt(q,sn,Gt+.12,Ft+ee*.5+.05,jt(Ut*.36,1.9,3.6),.24,ee),$t===1&&Lt>=ee+.85&&Zt(B,sn,Gt+.15,ie-.36,jt(Ut*.32,1.6,3),.3,.42))}else oe.sKey==="L"?Zt(q,-Ht-ee*.5-.05,Gt+.12,0,ee,.24,jt(Bt*.48,2,4.2)):Zt(q,Ht+ee*.5+.05,Gt+.12,0,ee,.24,jt(Bt*.48,2,4.2))}if($t===2){let ee=jt(Ut*.28,1.1,2.4);if(Ot>=1.6)Zt(vt,Ht*.45,Gt+.1,-Ft-Ot*.62,ee,.18,jt(Ot*.34,.65,1.6)),Zt(j,Ht*.22,Gt+.26,-Ft-Ot*.42,.38,.42,.38);else if(Lt>=1.8){let sn=ze>=0?-Ht*.5:Ht*.5;Zt(vt,sn,Gt+.1,Ft+Lt*.58,ee*.8,.18,jt(Lt*.32,.6,1.3))}}else if($t===3&&(Lt>=.85||Ot>=.85)){let ee=Lt>=.85?ie-.28:ne+.28;Zt(B,Ve-.6,Gt+.18,ee,.95,.36,.36),Zt(Q,Ve-.6,Gt+.44,ee,.78,.26,.26)}$t===1&&Ot>=1.25&&xt>=.9&&ue%4===0&&Zt(et,Ht+Math.min(xt*.45,.55),Gt+.92,-Ft-Math.min(Ot*.48,.62),.95,1.84,1.4)}let gh=Yt===4?95:Yt===3?85:Yt===2?76:60;if(en&&!Pn&&Pe%100<gh){let re=dn-nn-.28,oe=xe-Ee-.32,ee=Math.min(Yt>=3?4.25:3.72,oe),sn=jt(Ft+Lt*.45-.35,Ee+ee*.5+.12,xe-ee*.5-.16),qn=pt[ue%pt.length];if(Yt===4&&re>=4){let Kn=Math.min(1.72,re*.44);ke(nn+Kn*.6,sn,Kn,ee,qn),ke(dn-Kn*.6,sn,Kn,ee,pt[(Pe>>>3)%pt.length])}else{let Kn=Math.min(Yt>=3?1.74:1.6,re);ke((nn+dn)*.5,sn,Kn,ee,qn)}}let Ms=te+.08,ws=Wt-.08,Ss=ne+.08,ei=ie-.08,Lo=(Pe>>>8)%100,Do=Yt===4||$t===2?"closed":we<=4?Lo<68?"closed":Lo<92?"semi":"open":we<=6?Lo<30?"closed":Lo<68?"semi":"open":Lo<8?"closed":Lo<30?"semi":"open",bm=Yt===4?null:Yt===3||$t===2?ue&2?Q:q:ue%3===0?Q:ct,xh=Yt===4?1.28:Yt===3?.45:Yt>=1?.34:.22,_h=Yt===4?.2:Yt===3?.72:Yt>=1?.5:.36,Vu=Yt===4?lt:G,Tr=Yt===4?gt:bm,Gu=Yt===4?.22:.12,Wu=Yt===4?.34:Tr===Q?.24:.08,Ar=(re,oe,ee,sn,qn,Kn=Vu)=>{let wi=oe-re;if(wi<.25)return;let Pr=(re+oe)*.5;Zt(Kn,Pr,Gt+sn*.5,ee,wi,sn,Gu),qn>0&&Tr&&Zt(Tr,Pr,Gt+sn+qn*.5,ee,wi,qn,Wu)},Na=(re,oe,ee,sn,qn,Kn=Vu)=>{let wi=ee-oe;if(wi<.25)return;let Pr=(oe+ee)*.5;Zt(Kn,re,Gt+sn*.5,Pr,Gu,sn,wi),qn>0&&Tr&&Zt(Tr,re,Gt+sn+qn*.5,Pr,Wu,qn,wi)};if(Do==="open")Ct>=.3&&Na(Ms,Ss,ei,.09,0,j),xt>=.3&&Na(ws,Ss,ei,.09,0,j),Ot>=.3&&Ar(Ms,ws,Ss,.09,0,j);else{let re=Do==="semi"?Math.min(xh,.26):xh,oe=Do==="semi"&&Yt<=2?Math.min(_h,.42):_h;Ct>=.32&&Na(Ms,Ss,ei,re,oe),xt>=.32&&Na(ws,Ss,ei,re,oe),Ot>=.32&&Ar(Ms,ws,Ss,xh,_h)}let ns=Yt===4?.85:.58,Rr=De==="L"?Math.max(Ms,dn+.14):Ms,Cr=De==="R"?Math.min(ws,nn-.14):ws;if(Do==="closed"){let re=Yt===4?1.28:Yt===3?.55:Yt>=1?.32:.2,oe=Yt===4?.2:Yt===3?.58:Yt>=1?.42:0;Rr<Math.min(ze-ns,Cr)&&Ar(Rr,Math.min(ze-ns,Cr),ei,re,oe),Math.max(ze+ns,Rr)<Cr&&Ar(Math.max(ze+ns,Rr),Cr,ei,re,oe)}else if(Do==="semi"&&Lt>=1.2){let re=Math.max(Rr,ze+ns+.2),oe=Math.min(Cr,re+2.2);oe-re>=1&&Ar(re,oe,ei-.3,.22,.95)}if(Lt>=.45)if(Yt===4||$t===2){let re=Yt===4?1.82:1.48;for(let oe of[-1,1]){let ee=ze+oe*(ns+.2);Zt(j,ee,Gt+re*.5,ei,.38,re,.38),Zt(gt,ee,Gt+re+.08,ei,.48,.14,.48)}(we<=5||ue&4)&&Zt(gt,ze,Gt+re+.26,ei,ns*2+1.15,.16,.68)}else if(Yt===3&&Do!=="open")for(let re of[-1,1])Zt(j,ze+re*(ns+.16),Gt+.68,ei,.3,1.36,.28);else Yt>=1&&Zt(ct,ze-ns-.12,Gt+.62,ei,.16,1.24,.14);let Mi=(re,oe,ee,sn)=>{if(re<Ms+.55||re>ws-.55||oe<Ss+.55||oe>ei-.55||Math.abs(re)<Ht+.52&&oe>-Ft-.52&&oe<Ft+.52||en&&re>=nn-.45&&re<=dn+.45&&oe>Ee-.35||Math.abs(re-ze)<Gi*.75&&oe>=Ft)return;let qn=at+W*re+Tt*oe,Kn=dt+ht*re+Nt*oe,wi=1.28*ee;U.cylinder(ut,qn,Gt,Kn,.085*ee,wi,6,.055*ee),U.box(sn,qn,Gt+wi+.42*ee,Kn,1.48*ee,.96*ee,1.48*ee,Le+.3),U.box(sn,qn,Gt+wi+1.02*ee,Kn,1.08*ee,.84*ee,1.08*ee,Le+1),U.box(sn,qn,Gt+wi+1.52*ee,Kn,.64*ee,.62*ee,.64*ee,Le+.6)},to=Mt[ue%Mt.length],Oa=Mt[(Pe>>>2)%Mt.length],Bn=De==="R"?-1:1,is=Bn>0?xt:Ct;if(Yt===4||$t===2){let re=Yt===4;Mi(Bn*(Ht+is*.48),Ft+Lt*.52,re?1.32:1.12,yt),Mi(Bn*(Ht+is*.52),-Ft*.25,re?1.38:1.08,to),Mi(Bn*(Ht+is*.45),-Ft-Ot*.48,re?1.24:1.02,Oa),Mi(-Bn*Ht*.55,-Ft-Ot*.52,re?1.28:1.05,to),re&&(Mi(ze-Bn*1.75,Ft+Lt*.54,1.12,Oa),Mi(Bn*Ht*.65,Ft+Lt*.42,1.05,to));let oe=ze+Bn*1.18,ee=Lt>=1.5?Ft+Lt*.48:-Ft-Ot*.45;oe>Ms+.55&&oe<ws-.55&&ee>Ss+.55&&ee<ei-.55&&(Zt(j,oe,Gt+.14,ee,.42,.26,.42),Zt(j,oe,Gt+.54,ee,.2,.58,.2),Zt(j,oe,Gt+.92,ee,.34,.24,.34),Zt(j,oe,Gt+1.12,ee,.56,.14,.56))}else if(Yt===3&&$t!==0)Mi(Bn*(Ht+is*.48),Ft+Lt*.5,1.08,to),Mi(Bn*(Ht+is*.5),-Ft-Ot*.45,1.02,Oa),Mi(-Bn*Ht*.45,-Ft-Ot*.5,.98,to);else if(Yt===2&&$t!==0)Mi(Bn*Math.max(ze*Bn+1.45,Ht+is*.42),Ft+Lt*.52,.92,to),Mi(Bn*Ht*.55,-Ft-Ot*.48,.88,Oa);else if($t===1&&(Lt>=1.4||is>=1.5||Ot>=1.6)){let re=is>=1.4?Bn*(Ht+is*.48):ze+Bn*1.4,oe=-Nt>.35&&Ot>=1.5?-Ft-Ot*.48:Lt>=1.4?Ft+Lt*.5:-Ft-Ot*.48;Mi(re,oe,.78,to)}}}if(fe&&it.floors<=3&&(me===se.LOW||me===se.DENSE)){let Ht=jt(Nt*.16*Bt,-Bt*.18,Bt*.18),Ft=jt(ht*.14*Ut,-Ut*.16,Ut*.16);U.box(nt,at+W*Ft+Tt*Ht,bt+tt.totalHeight-.24,dt+ht*Ft+Nt*Ht,jt(Ut*.44,1.8,4.2),.1,jt(Bt*.34,1.4,2.8),At)}if(pe!==void 0&&pe!==255){let Ht=At,Ft=Bt*.5+.16,te=jt(Ut*.88,2.2,28),Wt=Y2(pe);if(pe===44)U.box(Wt,at+Tt*Ft,bt+1.32,dt+Nt*Ft,te*.92,2.45,.18,Ht),U.box(ct,at+Tt*(Ft+.08),bt+2.66,dt+Nt*(Ft+.08),te,.28,.24,Ht);else{let ne=pe===20||pe===21||pe===25||pe===26||pe===28||pe===29,ie=ne?1.15:pe===22||pe===23||pe===24||pe===32?.82:.56,Ve=ne?Math.min(tt.totalHeight-.8,4.2):2.95;U.box(Wt,at+Tt*(Ft+.1),bt+Ve,dt+Nt*(Ft+.1),te,ie,.26,Ht),!ne&&Ut>=3.2&&U.box(lt,at+Tt*(Ft+.42),bt+Ve-ie*.5-.12,dt+Nt*(Ft+.42),te*.86,.12,.72,Ht)}}for(let Ht of tt.parts){let Ft=Ht.positions,te=Ht.indices,Wt=Ft.length/3;if(Ht.isShade){let ne=k.vCursor,ie=k.positions,Ve=k.shades,On=Ht.shades,Gt=ne*3,Fn=ne;for(let Zt=0;Zt<Wt;Zt++){let Ye=Ft[Zt*3],un=Ft[Zt*3+1],Pn=Ft[Zt*3+2],ke=Ye>He?He*Me+Math.min(Ye-He,.42):Ye<-He?-He*Me+Math.max(Ye+He,-.42):Ye*Me,ai=Pn>Ke?Ke*Xe+Math.min(Pn-Ke,1.38):Pn<-Ke?-Ke*Xe+Math.max(Pn+Ke,-.42):Pn*Xe;ie[Gt++]=at+W*ke+Tt*ai,ie[Gt++]=bt+un,ie[Gt++]=dt+ht*ke+Nt*ai,Ve[Fn++]=On[Zt]}k.vCursor=ne+Wt;let Le=k.indices,ve=k.iCursor;for(let Zt=0;Zt<te.length;Zt++)Le[ve++]=ne+te[Zt];k.iCursor=ve}else{let ne=E.get(Ht.material),ie=ne.vCursor,Ve=ne.positions,On=ne.normals,Gt=ne.uvs,Fn=Ht.normals,Le=Ht.uvs,ve=ie*3,Zt=ie*3,Ye=ie*2;for(let ke=0;ke<Wt;ke++){let ai=Ft[ke*3],Qs=Ft[ke*3+1],xe=Ft[ke*3+2],Ee=ai>He?He*Me+Math.min(ai-He,.42):ai<-He?-He*Me+Math.max(ai+He,-.42):ai*Me,Te=xe>Ke?Ke*Xe+Math.min(xe-Ke,1.38):xe<-Ke?-Ke*Xe+Math.max(xe+Ke,-.42):xe*Xe;Ve[ve++]=at+W*Ee+Tt*Te,Ve[ve++]=bt+Qs,Ve[ve++]=dt+ht*Ee+Nt*Te;let Ne=Fn[ke*3]*(ai>=-He&&ai<=He?fn:1),De=Fn[ke*3+1],en=Fn[ke*3+2]*(xe>=-Ke&&xe<=Ke?ti:1),nn=W*Ne+Tt*en,dn=ht*Ne+Nt*en,ze=1/(Math.hypot(nn,De,dn)||1);On[Zt++]=nn*ze,On[Zt++]=De*ze,On[Zt++]=dn*ze,Gt[Ye++]=Le[ke*2],Gt[Ye++]=Le[ke*2+1]}ne.vCursor=ie+Wt;let un=ne.indices,Pn=ne.iCursor;for(let ke=0;ke<te.length;ke++)un[Pn++]=ie+te[ke];ne.iCursor=Pn}}V%48===47&&(yield)}let Et=new _e;Et.name="region-buildings",H.build(Et,{cast:!0,receive:!0,where:"out"}),U.build(Et,{cast:!0,receive:!0,where:"out"});for(let V of E.values()){if(!V.iCount)continue;let it=new bn;it.setAttribute("position",new Ce(V.positions,3)),it.setAttribute("normal",new Ce(V.normals,3)),it.setAttribute("uv",new Ce(V.uvs,2)),it.setIndex(new Ce(V.indices,1));let tt=new Be(it,V.material);tt.castShadow=V.castShadow&&!V.material.transparent,tt.receiveShadow=V.receiveShadow,Et.add(tt)}if(k.iCount&&k.material){let V=new bn;V.setAttribute("position",new Ce(k.positions,3)),V.setAttribute("shade",new Ce(k.shades,1)),V.setIndex(new Ce(k.indices,1));let it=new Be(V,k.material);it.renderOrder=-1,Et.add(it)}return{node:Et,solids:T}}function*x(m,g,b){let T=new Ie,I=ft("#c8553d"),R=ft("#e8e2d0");for(let[N,H,U,F]of[[m.borders.block,R,.35,4],[m.borders.town,I,.7,0]])for(let Y=0;Y<N.length;Y+=4){let $=N[Y],J=N[Y+1],Rt=N[Y+2],vt=N[Y+3],mt=Math.hypot(Rt-$,vt-J),j=Math.max(1,Math.ceil(mt/4));for(let G=0;G<j;G++){if(F&&G%2)continue;let q=G/j,ct=(G+1)/j;h(T,H,m,[$+(Rt-$)*q,J+(vt-J)*q,$+(Rt-$)*ct,J+(vt-J)*ct],U,g,b,{lift:.3,step:4})}yield}let D=new _e;return D.name="region-borders",T.build(D,{cast:!1,receive:!1,where:"out"}),D}function*S(m,g,b,T){let I=new Ie;for(let{colour:D,segments:N}of T){let H=ft(D);for(let U=0;U+3<N.length;U+=4)h(I,H,m,[N[U],N[U+1],N[U+2],N[U+3]],2.4,g,b,{lift:.34,side0:0,side1:1,step:4}),U%64===0&&(yield)}let R=new _e;return R.name="region-district-outlines",I.build(R,{cast:!1,receive:!1,where:"out"}),R}function*w(m,g,b,T,I){let R=new Ie,D=ft("concrete","#c9c5bc"),N=ft("sidewalk","#ffffff"),H=(F,Y,$)=>new X(F-g[0],Y-b,$-g[1]);for(let[F,Y]of T.entries()){let $=new X(Y.nx,0,Y.nz);R.quad(D,H(Y.ax,Y.low[0]-.2,Y.az),H(Y.bx,Y.low[1]-.2,Y.bz),H(Y.bx,Y.high[1]+.12,Y.bz),H(Y.ax,Y.high[0]+.12,Y.az),$),R.quad(D,H(Y.bx,Y.low[1]-.2,Y.bz),H(Y.ax,Y.low[0]-.2,Y.az),H(Y.ax,Y.high[0]+.12,Y.az),H(Y.bx,Y.high[1]+.12,Y.bz),$.clone().negate()),F%64===63&&(yield)}for(let F of I)R.quad(N,H(F.x0,F.y+.03,F.z0),H(F.x0,F.y+.03,F.z1),H(F.x1,F.y+.03,F.z1),H(F.x1,F.y+.03,F.z0),Ci);let U=new _e;return U.name="region-pads",R.build(U,{cast:!0,receive:!0,where:"out"}),U}async function v(m,{origin:g=[0,0],datum:b=0,borders:T=!0,roads:I=!0,coarse:R=!1,outlines:D=[],walls:N=[],paving:H=[]}={}){let U=++e,F=new _e;function*Y(){let J=yield*c(m,g,b,R);F.add(J),yield;let Rt=null;if(!R){let j=yield*l(m,g,b,R);j.node.children.length&&F.add(j.node),Rt=j.waterSurface}I&&F.add(R?yield*y(m,g,b):yield*p(m,g,b));let{node:vt,solids:mt}=yield*_(m,g,b);return m.buildings.length&&F.add(vt),T&&F.add(yield*x(m,g,b)),D.length&&F.add(yield*S(m,g,b,D)),(N.length||H.length)&&F.add(yield*w(m,g,b,N,H)),{win:m,origin:g,datum:b,solids:mt,ground:J,waterSurface:Rt}}let $=Y();try{await Gp();let J=performance.now()+Vp;for(;U===e;){let Rt=$.next();if(Rt.done)return C(),n.add(...F.children.slice()),t=Rt.value,!0;performance.now()>=J&&(await Gp(),J=performance.now()+Vp)}return!1}finally{$.return(),ji(F)}}function A(m){t&&(t.ground.geometry.setIndex(a(t.win,m)),t.waterSurface&&t.waterSurface.mesh.geometry.setIndex(r(t.win,m,t.waterSurface.cells)))}function P(){e++,C()}function C(){for(let m of[...n.children])n.remove(m),ji(m);t=null}function M(m,g){if(!t)return null;let b=m+t.origin[0],T=g+t.origin[1],{x0:I,z0:R,x1:D,z1:N}=t.win.box;return b<I||T<R||b>D||T>N?null:i(t.win,b,T)-t.datum}return{group:n,show:v,clear:P,heightAt:M,setHole:A,get solids(){return t?.solids??[]},get window(){return t?.win??null}}}var yi={width:.85,height:1.5,span:22},kt={length:14.7,width:2.98,height:5.1,floor:1.13,ceiling:3.28,roof:3.73,skirt:1.37,doors:[-3.65,3.65],doorWidth:1.3,doorHeight:1.9,gap:.5},Ru={speed:12.5,accel:.85,brake:.95,dwell:22,doorsOpenAt:1.4,doorTime:2.4,melodyAt:9.5,doorsCloseAt:5.2},rh=(n,t,e)=>Math.min(e,Math.max(t,n)),eb=n=>Math.round(n*1e3)/1e3,ah=n=>Array.from({length:n},(t,e)=>(e-(n-1)/2)*(kt.length+kt.gap)),Pa=n=>ah(n).flatMap(t=>kt.doors.map(e=>eb(t+e))),Cu=n=>n*kt.length+(n-1)*kt.gap;function nb(n,t=60){let e=[[...n[0]]],i=a=>{let c=e.at(-1);Math.hypot(a[0]-c[0],a[1]-c[1])>1e-6&&e.push(a)};for(let a=1;a<n.length-1;a++){let[c,l,f]=[n[a-1],n[a],n[a+1]],h=Math.hypot(l[0]-c[0],l[1]-c[1]),d=Math.hypot(f[0]-l[0],f[1]-l[1]),u=[(l[0]-c[0])/h,(l[1]-c[1])/h],p=[(f[0]-l[0])/d,(f[1]-l[1])/d],y=Math.acos(rh(u[0]*p[0]+u[1]*p[1],-1,1));if(y<.001)continue;let _=Math.min(t*Math.tan(y/2),h/2,d/2),x=_/Math.tan(y/2),S=Math.sign(u[0]*p[1]-u[1]*p[0])||1,w=[l[0]-u[0]*_,l[1]-u[1]*_],v=[w[0]-u[1]*S*x,w[1]+u[0]*S*x],A=Math.atan2(w[1]-v[1],w[0]-v[0]),P=Math.max(2,Math.ceil(x*y));for(let C=0;C<=P;C++){let M=A+S*y*C/P;i([v[0]+Math.cos(M)*x,v[1]+Math.sin(M)*x])}}i([...n.at(-1)]);let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let o=s.at(-1);return{length:o,spot:a=>{let c=rh(a,0,o),l=0,f=s.length-1;for(;f-l>1;){let y=l+f>>1;s[y]<=c?l=y:f=y}let h=s[f]-s[l]||1,d=(c-s[l])/h,[u,p]=[e[l],e[f]];return{x:u[0]+(p[0]-u[0])*d,z:u[1]+(p[1]-u[1])*d,dx:(p[0]-u[0])/h,dz:(p[1]-u[1])/h}},samples:e}}function Pu(n,t=[],e=yi.span){let i=[];for(let[r,a]of[...t].sort((c,l)=>c[0]-l[0])){let c=i.at(-1);c&&r<=c[1]?c[1]=Math.max(c[1],a):i.push([r,a])}let s=Math.max(1,Math.round(n/e)),o=[];for(let r=0;r<=s;r++){let a=n*r/s;for(let c=0;c<4;c++){let l=i.find(([f,h])=>a>f+1e-6&&a<h-1e-6);if(!l)break;a=a-l[0]<l[1]-a?l[0]:l[1]}a=rh(a,0,n),!o.length||a-o.at(-1)>4?o.push(a):r===s&&(o[o.length-1]=n)}return o}function ib(n,{speed:t,accel:e,brake:i}){let s=Math.min(t,Math.sqrt(2*n*e*i/(e+i))),o=s/e,r=s/i,a=Math.max(0,n-s*s/(2*e)-s*s/(2*i))/s,c=o+a+r;return{time:c,top:s,at:f=>{if(f<=0)return[0,0];if(f<o)return[e*f*f/2,e*f];if(f<o+a)return[s*s/(2*e)+s*(f-o),s];if(f<c){let h=c-f;return[n-i*h*h/2,i*h]}return[n,0]}}}function Iu(n,t=Ru){let e=nb(n.path,n.radius),i=n.stops.map((u,p)=>({side:1,...u,index:p})),s=n.cars??2,o=[],r=0,a=[...i.keys(),...[...i.keys()].reverse().slice(1,-1)];a.forEach((u,p)=>{let y=a[(p+1)%a.length];o.push({kind:"dwell",at:u,next:y,start:r,time:t.dwell}),r+=t.dwell;let _=ib(Math.abs(i[y].at-i[u].at),t);o.push({kind:"run",at:u,next:y,start:r,time:_.time,run:_,way:Math.sign(i[y].at-i[u].at)}),r+=_.time});let c=r,l=u=>{let p=(u-t.doorsOpenAt)/t.doorTime,y=(t.dwell-t.doorsCloseAt-u)/t.doorTime;return rh(Math.min(p,y),0,1)};function f(u){let p=(u%c+c)%c,y=o[0];for(let A of o)if(A.start<=p)y=A;else break;let _=p-y.start,x=i[y.at],S=i[y.next];if(y.kind==="dwell")return{time:u,phase:"dwell",s:x.at,speed:0,way:Math.sign(S.at-x.at)||1,stop:x,next:S,doors:l(_),leaves:y.time-_};let[w,v]=y.run.at(_);return{time:u,phase:"run",s:x.at+y.way*w,speed:v,way:y.way,stop:null,from:x,next:S,doors:0,arrives:y.time-_}}function h(u,p){if(!(p>u))return[];let y=[];for(let S of o){let w=i[S.at],v=i[S.next];S.kind==="dwell"?y.push([S.start,"arrive",w,v],[S.start+t.doorsOpenAt,"open",w,v],[S.start+S.time-t.melodyAt,"melody",w,v],[S.start+S.time-t.doorsCloseAt,"close",w,v]):y.push([S.start,"depart",w,v],[S.start+Math.min(6,S.time*.3),"next",w,v],[S.start+Math.max(S.time-13,S.time*.55),"soon",w,v],[S.start+Math.max(S.time-16,S.time*.4),"approach",w,v])}let _=[],x=Math.max(u,p-c);for(let S=Math.floor(x/c);S<=Math.floor(p/c);S++)for(let[w,v,A,P]of y){let C=S*c+w;C>x&&C<=p&&_.push({time:C,kind:v,stop:A,next:P})}return _.sort((S,w)=>S.time-w.time)}let d=u=>u.way>0?i.at(-1):i[0];return{name:n.name??"\u30E2\u30CE\u30EC\u30FC\u30EB",y:n.y??7,cars:s,stops:i,way:e,period:c,drive:t,stateAt:f,eventsBetween:h,boundFor:d}}var sb=(n,t)=>n*t>0?"\u5DE6":"\u53F3";function Lu(n,t){let{kind:e,stop:i,next:s}=t,o=s.index===0||s.index===n.stops.length-1,r=Math.sign(s.at-i.at)||1,a=r>0?n.stops.at(-1):n.stops[0];return e==="next"?{where:"car",text:`\u672C\u65E5\u3082\u3001${n.name}\u3092\u3054\u5229\u7528\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u6B21\u306F\u3001${s.name}\u3001${s.name}${o?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002`}:e==="soon"?{where:"car",text:`\u307E\u3082\u306A\u304F\u3001${s.name}${o?"\u3001\u7D42\u70B9":""}\u3067\u3059\u3002\u304A\u51FA\u53E3\u306F\u3001${sb(s.side,r)}\u5074\u3067\u3059\u3002`}:e==="approach"?{where:"platform",at:s,chime:"approach",text:`\u307E\u3082\u306A\u304F\u3001${a.name}\u3086\u304D\u304C\u3001\u307E\u3044\u308A\u307E\u3059\u3002\u30DB\u30FC\u30E0\u30C9\u30A2\u304B\u3089\u96E2\u308C\u3066\u3001\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002`}:e==="open"?{where:"both",at:i,chime:"door",text:`${i.name}\u3001${i.name}\u3067\u3059\u3002`}:e==="melody"?{where:"platform",at:i,chime:"depart",text:`${a.name}\u3086\u304D\u304C\u3001\u767A\u8ECA\u3044\u305F\u3057\u307E\u3059\u3002\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002`}:e==="close"?{where:"both",at:i,chime:"door",text:null}:null}function Du(n,t){let e=n.boundFor(t);return t.phase==="dwell"?[`${t.stop.name}`,t.leaves<n.drive.melodyAt?"\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059":`${e.name} \u3086\u304D`]:[t.arrives<14?"\u307E\u3082\u306A\u304F":"\u6B21\u306F",`${t.next.name}`]}var ob=6.62,rb=.05,ab={...Ru,speed:18,accel:.97,brake:1.1,dwell:25},cb=420,vs=1.85,hn={edge:vs+kt.width/2+.07,width:3.5,length:48,roof:3.9,stair:3};var Mr=(n,t,e)=>Math.min(e,Math.max(t,n));function Vi(n,t){if(!n?.length)return 0;if(t<=n[0][0])return n[0][1];let e=n[n.length-1];if(t>=e[0])return e[1];let i=0,s=n.length-1;for(;s-i>1;){let l=i+s>>1;n[l][0]<=t?i=l:s=l}let[o,r]=n[i],[a,c]=n[s];return r+(c-r)*((t-o)/(a-o||1))}function lb(n,t,{clearance:e=ob,grade:i=rb,level:s=[],floor:o=[]}={}){let r=n.length,a=Float64Array.from(n,f=>f+e),c=i*t,l=()=>{for(let[f,h,d]of o){let u=Mr(Math.floor(f/t),0,r-1),p=Mr(Math.ceil(h/t),0,r-1);for(let y=u;y<=p;y++)a[y]=Math.max(a[y],d)}for(let[f,h]of s){let d=Mr(Math.floor(f/t),0,r-1),u=Mr(Math.ceil(h/t),0,r-1),p=-1/0;for(let y=d;y<=u;y++)p=Math.max(p,a[y]);for(let y=d;y<=u;y++)a[y]=p}};for(let f=0;f<6;f++){l();for(let h=1;h<r;h++)a[h]=Math.max(a[h],a[h-1]-c);for(let h=r-2;h>=0;h--)a[h]=Math.max(a[h],a[h+1]-c)}return l(),a}function Qp(n,{origin:t=[0,0],datum:e=0,from:i=0,to:s=1/0,cars:o=2,step:r=20}={}){let c=(n.points.length/2-1)*r,l=Mr(i,0,c),f=Mr(s,l,c),h=Cu(o)/2,d=n.stations.filter(M=>M.s-h-2.5>=l&&M.s+h+2.5<=f);if(d.length<2)return null;let u=Math.floor(l/r),p=Math.ceil(f/r),y=[],_=[];for(let M=u;M<=p;M++)y.push([n.points[M*2]-t[0],n.points[M*2+1]-t[1]]),_.push((n.ground?.[M]??0)-e);let x=u*r,S=Math.max(h+8,hn.length/2+4),w=d.map(M=>[M.s-x-S,M.s-x+S]),v=lb(_,r,{level:w}),A=Array.from(v,(M,m)=>[m*r,Math.round(M*100)/100]),P=_.map((M,m)=>[m*r,Math.round(M*100)/100]),C=d.map(M=>[M.s-x-6,M.s-x+6]);return{name:n.name,color:n.color,path:y,radius:2e3,heights:A,ground:P,y:A[0][1],cars:o,clear:C,drive:ab,stops:d.map(M=>({name:M.name,at:M.s-x,side:1}))}}function tm(n,t=cb){return Math.max(1,Math.ceil(n/t))}var zu=".".repeat(32),Uu=(n,t)=>[n,n,n,t,t,zu,zu,zu].join(""),IE=[Uu(`XXSSSSSAA${"M".repeat(12)}${"E".repeat(11)}`,`${"A".repeat(9)}${"M".repeat(12)}${"E".repeat(11)}`),Uu(`XXOOOOOOOTTttEEEEE${"O".repeat(7)}SSSSSXX`,"O".repeat(32)),Uu(`${"O".repeat(30)}XX`,"O".repeat(32))];var tn=kt.width/2,En=kt.length/2,vn=kt.floor,Pi=(n,t=.5,e=0)=>ft(n,"#ffffff",{roughness:t,metalness:e});function lh(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0}),s=5,o=document.createElement("canvas");o.width=n*s,o.height=t*s;let r=o.getContext("2d"),a=new jn(o);a.colorSpace=on;let c=new Gn({map:a,toneMapped:!1}),l=null;return{material:c,show(f,h=["#ffb23e","#8dff9a"]){let d=f.join("|");if(d===l)return;l=d,i.clearRect(0,0,n,t),i.textBaseline="middle",i.textAlign="center";let u=t/f.length;f.forEach((y,_)=>{let x=Math.floor(u*.88),S=v=>`700 ${v}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`;i.font=S(x);let w=i.measureText(y).width;w>n-4&&(i.font=S(Math.max(6,Math.floor(x*(n-4)/w)))),i.fillStyle=h[_%h.length],i.fillText(y,n/2,u*(_+.5)+.5)});let p=i.getImageData(0,0,n,t).data;r.fillStyle="#08090a",r.fillRect(0,0,o.width,o.height);for(let y=0;y<t;y++)for(let _=0;_<n;_++){let x=(y*n+_)*4;r.fillStyle=p[x+3]>96?`rgb(${p[x]},${p[x+1]},${p[x+2]})`:"#1b1d1f",r.beginPath(),r.arc((_+.5)*s,(y+.5)*s,s*.4,0,Math.PI*2),r.fill()}a.needsUpdate=!0},dispose(){a.dispose(),c.dispose()}}}function ch(n,t,e,i=!1,s=0){let o=new _e,r=new Ie;r.box(Pi("#2a2e31",.5,.3),0,0,0,t+.08,e+.08,.09);for(let a of s?[-t*.35,t*.35]:[])r.box(Pi("#9aa0a3",.4,.7),a,e/2+.04+s/2,0,.025,s,.025);r.build(o,{cast:!1});for(let a of i?[1,-1]:[1]){let c=new Be(new ni(t,e),n.material);c.position.z=a*.047,a<0&&(c.rotation.y=Math.PI),o.add(c)}return o}var em=[[-En,kt.doors[0]-kt.doorWidth/2],[kt.doors[0]+kt.doorWidth/2,kt.doors[1]-kt.doorWidth/2],[kt.doors[1]+kt.doorWidth/2,En]];function nm({front:n,back:t,boards:e}){let i=new _e,s=new Ie,o=new Ie,r=new Ie,a=Pi("#f1f2f0",.42,.12),c=Pi("#1e8f8a",.45,.12),l=Pi("#3a4046",.6,.25),f=Pi("#b9bcbd",.55,.2),h=Pi("#1f2326",.5,.2),d=Pi("#c9cdcf",.3,.8),u=Ai("near"),p=vn+.45,y=vn+1.95,_=kt.roof-.35,x=(v,A,P)=>new X(v,A,P);for(let v of[-1,1]){let A=v*tn,P=x(v,0,0);s.box(l,v*(tn-.03),(.3-kt.skirt)/2,0,.06,kt.skirt+.3,kt.length),s.box(c,v*(tn-.03),.525,0,.062,.45,kt.length);for(let[C,M]of em){let m=M-C,g=(C+M)/2;s.box(a,v*(tn-.035),(.75+p)/2,g,.07,p-.75,m);let b=Math.max(1,Math.round(m/1.8)),T=[C===-En?C+.34:C+.1,M===En?M-.34:M-.1];for(let I=0;I<b;I++){let R=T[0]+(T[1]-T[0])*I/b+.03,D=T[0]+(T[1]-T[0])*(I+1)/b-.03;r.quad(u,x(A-v*.02,p,R),x(A-v*.02,p,D),x(A-v*.02,y,D),x(A-v*.02,y,R),P),I&&s.box(h,v*(tn-.035),(p+y)/2,R-.03,.07,y-p,.06)}for(let[I,R]of[[C,C===-En?.34:.1],[M,M===En?-.34:-.1]])s.box(a,v*(tn-.035),(p+y)/2,I+R/2,.07,y-p,Math.abs(R))}s.box(a,v*(tn-.035),(y+_)/2,0,.07,_-y,kt.length);for(let C of kt.doors)s.box(l,v*(tn-.03),.94,C,.062,.38,kt.doorWidth);s.quad(f,x(A,_,-En),x(A,_,En),x(v*.95,kt.roof,En),x(v*.95,kt.roof,-En),x(v*.4,1,0));for(let C of[-4.9,4.9])s.box(h,v*(yi.width/2+.34),-.6,C,.56,1.1,2.3)}s.quad(f,x(-.95,kt.roof,-En),x(-.95,kt.roof,En),x(.95,kt.roof,En),x(.95,kt.roof,-En),x(0,1,0));for(let v of[-3.1,3.1])s.box(Pi("#a9adae",.6,.2),0,kt.roof+.13,v,1.6,.26,2.4);s.box(l,0,vn-.06,0,kt.width,.12,kt.length);for(let v of[-4.9,4.9])s.box(h,0,.52,v,kt.width-.2,.9,2.5);for(let[v,A]of[[1,n],[-1,t]]){let P=v*En,C=x(0,0,v);if(A){s.box(a,0,(.75+p)/2,P-v*.035,kt.width,p-.75,.07),s.box(c,0,.525,P-v*.03,kt.width,.45,.062),s.box(l,0,(.3-kt.skirt)/2,P-v*.03,kt.width,kt.skirt+.3,.06);for(let m of[-tn+.11,tn-.11])s.box(a,m,(p+y)/2,P-v*.035,.22,y-p,.07);s.box(a,0,(y+_)/2,P-v*.035,kt.width,_-y,.07),r.quad(u,x(-tn+.22,p,P-v*.02),x(tn-.22,p,P-v*.02),x(tn-.22,y,P-v*.02),x(-tn+.22,y,P-v*.02),C);for(let m of[-.95,.95])s.box(qe("#fff6dc",1.1),m,p-.2,P+v*.002,.26,.1,.01),s.box(qe("#d0302b",.6),m*.72,p-.2,P+v*.002,.12,.08,.01);let M=ch(e.bound,1.3,.2);M.position.set(0,(y+_)/2,P+v*.012),M.rotation.y=v>0?0:Math.PI,i.add(M)}else{for(let M of[-1,1])s.box(a,M*(tn+.55)/2,(vn+_)/2,P-v*.035,tn-.55,_-vn,.07);s.box(a,0,(vn+2+_)/2,P-v*.035,1.1,_-vn-2,.07);for(let M of[-.6,.6])s.box(h,M,vn+1,P+v*kt.gap/4,.08,2.1,kt.gap/2);s.box(h,0,vn+2.08,P+v*kt.gap/4,1.28,.08,kt.gap/2),s.box(h,0,vn-.04,P+v*kt.gap/4,1.28,.08,kt.gap/2)}}o.slab(Pi("#5e6f7d",.7),-tn+.07,-En+.07,tn-.07,En-.07,vn+.002),o.box(Pi("#eceeed",.6),0,kt.ceiling+.03,0,kt.width-.14,.06,kt.length-.14);for(let v of[-.5,.5])o.box(qe("#fff9ec",1.25),v,kt.ceiling-.004,0,.14,.012,kt.length-1.2);let S=ft("carpet","#3f6f8f");for(let v of[-1,1]){for(let[A,P]of em){let C=A===-En?A+(t?.75:.25):A+.3,M=P===En?P-(n?.75:.25):P-.3;if(M-C<.6)continue;let m=(C+M)/2;o.box(S,v*(tn-.32),vn+.36,m,.46,.12,M-C),o.box(Pi("#d9dcdc",.6),v*(tn-.32),vn+.15,m,.42,.3,M-C),o.box(S,v*(tn-.11),vn+.62,m,.08,.4,M-C);for(let g of[C,M])o.box(d,v*(tn-.32),vn+.7,g,.5,.56,.03)}o.box(d,v*.66,vn+1.9,0,.03,.03,kt.length-1.4);for(let A of kt.doors){for(let C of[A-.76,A+.76])o.cylinder(d,v*(tn-.56),vn,C,.017,kt.ceiling-vn,8);let P=ch(e.car,.9,.16);P.position.set(v*(tn-.085),vn+2.02,A),P.rotation.y=v>0?-Math.PI/2:Math.PI/2,i.add(P)}}s.build(i,{where:"out"}),o.build(i,{where:"in",cast:!1});for(let v of r.build(i,{cast:!1}))v.renderOrder=1;let w=[];for(let v of[-1,1])for(let A of kt.doors)for(let P of[-1,1]){let C=new Ie,M=kt.doorWidth/2,m=(b,T,I,R)=>C.box(d,0,(I+R)/2,(b+T)/2,.035,R-I,T-b);m(-M/2,-M/2+.05,0,kt.doorHeight),m(M/2-.05,M/2,0,kt.doorHeight),m(-M/2,M/2,0,.18),m(-M/2,M/2,kt.doorHeight-.07,kt.doorHeight),C.quad(u,x(0,.18,-M/2+.05),x(0,.18,M/2-.05),x(0,kt.doorHeight-.07,M/2-.05),x(0,kt.doorHeight-.07,-M/2+.05),x(v,0,0));let g=new _e;for(let b of C.build(g,{cast:!1}))b.material===u&&(b.renderOrder=1);g.position.set(v*(tn+.02),vn,A+P*M/2),i.add(g),w.push({leaf:g,side:v,shut:A+P*M/2,slide:P*(M-.03)})}return{car:i,leaves:w}}var Fu=kt.width/2,om=kt.length/2,rm=kt.length+kt.gap,am=rm/2,hb=kt.doorWidth/2-mn,WE=Fu-mn-.1,fb=Math.min(.98-mn,Fu-mn-.24),Ou=Fu-mn-.19,ub=om-.36-mn,im=hn.edge+mn+.055,sm=(n,t)=>n?.phase==="dwell"&&n.doors>.85&&n.way===t.sign&&n.stop.index===t.stop.index;function Nu(n,t=kt.doors){return t.find(e=>Math.abs(n-e)<=hb)}function db(n,t,e){let{spot:i,sign:s}=n;return((t-i.x)*i.dx+(e-i.z)*i.dz)*s}function pb(n,t,e,i){return Math.abs(e)<=fb&&Math.abs(i)<=ub||Math.abs(e)<=Ou&&kt.doors.some(s=>Math.abs(i-s)<=.9-mn)?!0:Math.abs(e)<=.55-mn&&Math.abs(i)>=om-.7&&Math.abs(i)<=am+.14&&!!n.cars[t+Math.sign(i)]}function cm(n){function t(o,r,a){if(o.x===r&&o.z===a)return null;for(let c of n())for(let l of c.platforms){let{spot:f,sign:h,level:d}=l;if(Math.abs(o.y-d)>.4||Math.abs(o.x-f.x)>26||Math.abs(o.z-f.z)>26)continue;let u=((o.x-f.x)*f.dz-(o.z-f.z)*f.dx)*h,p=((r-f.x)*f.dz-(a-f.z)*f.dx)*h;if(u<hn.edge-.04||p>im||p>=u)continue;let y=Math.max(0,Math.min(1,(u-im)/(u-p))),_=db(l,o.x+(r-o.x)*y,o.z+(a-o.z)*y),x=c.trains.find(({state:S})=>sm(S,l));if(x)for(let S of x.cars){if(!S.place)continue;let w=_*h-S.offset,v=Nu(w);if(!(v===void 0||Math.abs(v+S.offset)+kt.doorWidth/2>=hn.length/2))return{entry:c,train:x,car:S.index,x:h*(Ou-.04),z:w}}}return null}function e(o){let{place:r}=o.train.cars[o.car],a=r.pitch??0,c=o.z*Math.cos(a)-kt.floor*Math.sin(a);return{x:r.x+o.x*r.dz+c*r.dx,z:r.z-o.x*r.dx+c*r.dz,y:r.y+kt.floor*Math.cos(a)+o.z*Math.sin(a)}}function i(o,r,a){let{entry:c,train:l}=o,f=l.cars[o.car],{place:h}=f,d=r*h.dz-a*h.dx,u=r*h.dx+a*h.dz,p=l.state.way,y=c.platforms.find(x=>sm(l.state,x)),_=(f.offset+o.z+u)*p;if(y&&d*p>0&&(o.x+d)*p>Ou&&Nu(o.z+u)!==void 0&&Math.abs(_)<hn.length/2-mn&&Nu(_,Pa(l.cars.length))!==void 0){let{spot:x}=y,S=hn.edge+mn+.18;return{x:x.x+p*(S*x.dz+_*x.dx),z:x.z+p*(-S*x.dx+_*x.dz),y:y.level}}for(let[x,S]of[[d,u],[d,0],[0,u]]){let w=o.x+x,v=o.z+S;if(pb(l,o.car,w,v)){o.x=w,o.z=v,Math.abs(v)>am&&l.cars[o.car+Math.sign(v)]?.place&&(o.car+=Math.sign(v),o.z-=Math.sign(v)*rm);break}}return!0}return{board:t,spotOf:e,walk:i,riding:o=>!!(o&&n().includes(o.entry)&&o.train.cars[o.car]?.place)}}var Cn={width:1.8,slope:.6,landing:2.2,riser:.17,gap:.2};function lm(n,t,e=hn.length/2){let i=hn.edge,s=hn.edge+hn.width,o=n-t,r={edge:i,outer:s,long:e,level:n,ground:t,stair:null,landing:null};if(!(o>1))return r;let a=Math.min(o/Cn.slope,2*e-Cn.landing-4),c=e-2,l=c-a,f=s+Cn.gap;return r.stair={u0:f,u1:f+Cn.width,top:l,bottom:c,run:a,rise:o},r.landing={u0:s-.2,u1:f+Cn.width,v0:l-Cn.landing,v1:l},r}function mb(n){let{edge:t,outer:e,long:i,level:s,ground:o,stair:r,landing:a}=n,c=[s-.4,s+2.2],l=[{u0:t,u1:e,v0:-i,v1:i,y0:s,y1:s}],f=[[t,-i,t,i,...c],[t,-i,e,-i,...c],[t,i,e,i,...c]],h=[];if(r){l.push({u0:a.u0,u1:a.u1,v0:a.v0,v1:a.v1,y0:s,y1:s}),l.push({u0:r.u0,u1:r.u1,v0:r.top,v1:r.bottom,y0:s,y1:o}),f.push([e,-i,e,a.v0,...c],[e,a.v1,e,i,...c]),f.push([e,a.v0,a.u1,a.v0,...c],[a.u1,a.v0,a.u1,a.v1,...c]);let d=[o-.5,s+2.2];f.push([r.u0,r.top,r.u0,r.bottom,...d],[r.u1,r.top,r.u1,r.bottom,...d]),f.push([r.u0,r.top,r.u1,r.top,o-.5,s-2])}else f.push([e,-i,e,i,...c]);for(let d=-i+4;d<=i-4;d+=8)h.push({u:e-.6,v:d,w:.7,d:.7,low:o-.5,high:s-.5});return{surfaces:l,walls:f,boxes:h}}function hm(n,{x:t,z:e,dx:i,dz:s,sign:o=1}){let r=o*s,a=o*-i,c=o*i,l=o*s,f=(_,x)=>[t+_*r+x*c,e+_*a+x*l],h=mb(n),d=h.surfaces.map(_=>{let x=[f(_.u0,_.v0),f(_.u1,_.v0),f(_.u1,_.v1),f(_.u0,_.v1)];return{..._,x:t,z:e,ux:r,uz:a,vx:c,vz:l,box:Bu(x)}}),u=h.walls.map(([_,x,S,w,v,A])=>{let[P,C]=f(_,x),[M,m]=f(S,w);return{ax:P,az:C,bx:M,bz:m,r:.05,low:v,high:A,box:Bu([[P,C],[M,m]])}}),p=Math.atan2(i,s)*180/Math.PI,y=h.boxes.map(_=>{let[x,S]=f(_.u,_.v);return{x,z:S,w:_.w,d:_.d,r:p,low:_.low,high:_.high,box:Bu([[x-_.w,S-_.d],[x+_.w,S+_.d]])}});return{surfaces:d,walls:u,boxes:y}}function Bu(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[o,r]of n)t=Math.min(t,o),i=Math.max(i,o),e=Math.min(e,r),s=Math.max(s,r);return{x0:t,z0:e,x1:i,z1:s}}function fm(n){return n.eventsBetween(-.001,n.period-.001).filter(t=>t.kind==="arrive").map(t=>({time:t.time,stop:t.stop.index,way:Math.sign(t.next.at-t.stop.at)||1}))}function um(n,t,e,i,s,o){let r=e.map(f=>n.stateAt(o+f)).find(f=>f.phase==="dwell"&&f.stop.index===i.index&&f.way===s),a=`${i.name} ${s>0?1:2}\u756A\u7DDA`,c=s>0?n.stops.at(-1):n.stops[0];if(r){let f=n.drive.dwell-r.leaves,h="\u505C\u8ECA\u4E2D";return f<n.drive.doorsOpenAt+n.drive.doorTime?h="\u30C9\u30A2\u304C\u958B\u304D\u307E\u3059":r.leaves<=n.drive.doorsCloseAt?h="\u767A\u8ECA\u3057\u307E\u3059":r.leaves<n.drive.doorsCloseAt+n.drive.doorTime&&(h="\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059"),{doors:r.doors,text:[a,`${c.name} \u3086\u304D`,h]}}let l=1/0;for(let f of t)if(!(f.stop!==i.index||f.way!==s))for(let h of e){let d=((f.time-o-h)%n.period+n.period)%n.period;l=Math.min(l,d)}return Number.isFinite(l)?{doors:0,text:[a,`${c.name} \u3086\u304D`,l<20?"\u307E\u3082\u306A\u304F\u5230\u7740":`\u7D04 ${Math.max(1,Math.ceil(l/60))} \u5206`]}:{doors:0,text:[a,"\u3053\u306E\u30DB\u30FC\u30E0\u306E\u904B\u884C\u306A\u3057","\u53CD\u5BFE\u5074\u30DB\u30FC\u30E0\u3078"]}}function dm({clock:n=()=>Date.now()/1e3,sound:t=null}={}){let e=new _e;e.name="route-transit";let i=[],s="",o="",r=cm(()=>i),a=0,c=new WeakMap;function l(x){if(x.track){e.remove(x.track),ji(x.track);for(let S of x.platforms)S.board.dispose();x.track=null,x.platforms=[]}}function f(){for(let x of i){l(x);for(let S of x.trains){for(let w of S.cars)e.remove(w.car),ji(w.car);S.boards.car.dispose(),S.boards.bound.dispose()}}i=[]}function h(x,S,w,v){let A=new _e,P=new Ie,C=ft("concrete","#d6d4cd"),M=ft("concrete","#c6c4bd"),m=ft("concrete","#bfbcb4"),g=ft("tile","#d9d4ca"),b=ft("roofMetal","#9aa3a8"),T=ft("#7d868c","#ffffff",{roughness:.45,metalness:.5}),I=ft(S.color??"#1f7a6a","#ffffff",{roughness:.5}),R=x.way,D=K=>{let nt=R.spot(K);return Math.hypot(nt.x-w[0],nt.z-w[1])<v},N=(K,nt,lt)=>new X(K,nt,lt);for(let K=0;K<R.length;K+=10){let nt=Math.min(R.length,K+10);if(!D(K)&&!D(nt))continue;let lt=R.spot(K),gt=R.spot(nt),ut=Vi(S.heights,K)-yi.height/2,Mt=Vi(S.heights,nt)-yi.height/2;for(let yt of[-1,1]){let[pt,wt]=[lt.x+lt.dz*yt*vs,lt.z-lt.dx*yt*vs],[L,E]=[gt.x+gt.dz*yt*vs,gt.z-gt.dx*yt*vs];P.bar(C,N(pt,ut,wt),N(L,Mt,E),yi.width,yi.height);for(let k of[-1,1]){let st=lt.dz*k*(yi.width/2+.035),rt=-lt.dx*k*(yi.width/2+.035);P.bar(T,N(pt+st,ut+.13,wt+rt),N(L+st,Mt+.13,E+rt),.05,.09)}}}let H=[];for(let K of Pu(R.length,S.clear??[])){if(!D(K))continue;let nt=R.spot(K),lt=Math.atan2(nt.dx,nt.dz),gt=Vi(S.ground,K),ut=Vi(S.heights,K)-yi.height,Mt=ut-.9-gt;Mt<.3||(P.box(M,nt.x,gt+.15,nt.z,2.6,.3,2.6,lt),P.box(M,nt.x,gt+Mt/2,nt.z,1.5,Mt,1.5,lt),P.box(M,nt.x,ut-.45,nt.z,vs*2+1.4,.9,1.6,lt),H.push({x:nt.x,z:nt.z,w:1.6,d:1.6,r:lt*180/Math.PI}))}let U={surfaces:[],walls:[],boxes:[]},F=[],Y=ft("#e8c33a"),$=ft("#dfe5e8","#ffffff",{roughness:.3}),J=ft("#9ab4c4","#ffffff",{roughness:.18,metalness:.45}),Rt=ft("wood","#8c623e"),vt=ft("wood","#a57c52"),mt=ft("#2c3338","#ffffff",{roughness:.4,metalness:.65}),j=ft("#d8dde0","#ffffff",{roughness:.35,metalness:.4}),G=ft("#c93a32","#ffffff",{roughness:.3}),q=ft("tile","#e6e2d8"),ct=qe("#fff8e6",1.15),Q=qe("#2a9df4",.9),B=qe("#4cd964",.85),et=Pa(x.cars).filter(K=>Math.abs(K)+kt.doorWidth/2<hn.length/2);for(let K of x.stops){if(!D(K.at))continue;let nt=R.spot(K.at),lt=Math.atan2(nt.dx,nt.dz),gt=Vi(S.heights,K.at),ut=gt-yi.height,Mt=gt+kt.floor,yt=Vi(S.ground,K.at),pt=lm(Mt,yt);for(let wt of[1,-1]){P.at(nt.x,0,nt.z,wt>0?lt:lt+Math.PI,Z=>z(Z,pt,ut));let L=hm(pt,{x:nt.x,z:nt.z,dx:nt.dx,dz:nt.dz,sign:wt});U.surfaces.push(...L.surfaces),U.walls.push(...L.walls),U.boxes.push(...L.boxes);let E=new _e;E.name="station-platform",E.position.set(nt.x,0,nt.z),E.rotation.y=wt>0?lt:lt+Math.PI;let k=[];for(let Z of et)for(let Et of[-1,1]){let V=new _e;V.name="platform-door";let it=new Ie,tt=kt.doorWidth/2;it.box($,0,.65,0,.05,1.25,tt-.04),it.box(T,0,1.28,0,.07,.06,tt);for(let dt of[-1,1])it.box(T,0,.65,dt*(tt/2-.025),.07,1.25,.05);it.build(V,{cast:!1,where:"out"});let at=Z+Et*tt/2;V.position.set(pt.edge+.14,Mt,at),E.add(V),k.push({leaf:V,shut:at,slide:Et*(tt-.02)})}let st=lh(208,68),rt=ch(st,2.1,.68,!0,.2);if(rt.name="platform-departure-board",rt.position.set((pt.edge+pt.outer)/2,Mt+2.9,0),E.add(rt),typeof document<"u"){let Z=wa(`${K.name}  ${wt>0?"1\u756A\u7DDA":"2\u756A\u7DDA"}`,{color:"#1b262c",background:"#f7f6f0",border:S.color??"#1f7a6a",padding:14}),Et=new Gn({map:Z.map}),V=.42,it=Math.min(2.4,V*Z.aspect);for(let tt of[-pt.long*.48,pt.long*.48]){let at=new Be(new ni(it,V),Et);at.position.set(pt.outer-.12,Mt+1.95,tt),at.rotation.y=-Math.PI/2,at.userData.ownMaterial=!0,E.add(at)}if(pt.stair){let tt=wa(`${K.name}\u99C5  ${wt>0?"1\u756A\u7DDA\u306E\u308A\u3070":"2\u756A\u7DDA\u306E\u308A\u3070"}`,{color:"#ffffff",background:S.color??"#1f7a6a",border:"#f4f2ea",padding:14}),at=new Gn({map:tt.map}),dt=.34,zt=Math.min(Cn.width+.3,dt*tt.aspect),Pt=new Be(new ni(zt,dt),at);Pt.position.set((pt.stair.u0+pt.stair.u1)/2,yt+2.42,pt.stair.bottom+.88),Pt.userData.ownMaterial=!0,E.add(Pt)}}A.add(E),F.push({stop:K,sign:wt,spot:nt,level:Mt,leaves:k,board:st,nextBoard:-1/0})}P.at(nt.x,0,nt.z,lt,wt=>{let L=pt.outer+.65,E=pt.long,k=Mt+hn.roof;for(let st of[-1,1])wt.box(b,st*(pt.edge+(L-pt.edge)/2),k+.08,0,L-pt.edge+.3,.18,E*2+2.4),wt.box(vt,st*(pt.edge+(pt.outer-pt.edge)/2),k-.01,0,pt.outer-pt.edge-.3,.02,E*2-.6),wt.box(I,st*(L+.04),k+.06,0,.08,.32,E*2+2.4),wt.box(ct,st*((pt.edge+pt.outer)/2),k-.04,0,.22,.03,E*2-2);wt.box(b,0,k+.54,0,pt.edge*2+.8,.16,E*2+2.4);for(let st of[-1,1])wt.box(J,st*(pt.edge+.15),k+.3,0,.06,.32,E*2+1.6);wt.box(I,0,k+.3,-E-1.2,L*2,.42,.12),wt.box(I,0,k+.3,E+1.2,L*2,.42,.12);for(let st=-E+4;st<=E-4;st+=8){wt.box(T,0,k+.18,st,L*2-.2,.18,.2),wt.box(M,0,ut-.42,st,pt.outer*2-.2,.84,.92);for(let rt of[-1,1]){let Z=pt.outer-pt.edge-.35,Et=rt*(pt.edge+.25+Z/2),V=Mt-.5-(ut-.05);V>.1&&wt.box(M,Et,ut-.05+V/2,st,Z,V,.72)}}for(let st of[-8,8]){let rt=ut-.84-yt;rt>.4&&(wt.box(M,0,yt+.18,st,2.8,.36,2.2),wt.box(M,0,yt+rt/2,st,1.7,rt,1.5))}}),H.push({x:nt.x,z:nt.z,w:2.4,d:2.4,r:lt*180/Math.PI})}function z(K,nt,lt){let{edge:gt,outer:ut,long:Mt,level:yt,ground:pt,stair:wt,landing:L}=nt,E=Mt*2;if(K.box(m,(gt+ut)/2,yt-.25,0,ut-gt,.5,E),K.box(M,ut+.04,yt-.22,0,.1,.56,E+.2),K.box(I,ut+.095,yt-.16,0,.02,.16,E+.2),K.box(g,(gt+ut)/2,yt+.005,0,ut-gt,.01,E),K.box(Y,gt+.46,yt+.012,0,.32,.012,E-.6),L){let ot=(L.v0+L.v1)/2;K.box(Y,(gt+.6+ut)/2,yt+.012,ot,ut-gt-.6,.012,.3)}let k=(ot,It)=>{let W=It-ot;if(W<=.1)return;let ht=(ot+It)/2;K.box(m,ut-.06,yt+.52,ht,.12,1.04,W),K.box(q,ut-.125,yt+.52,ht,.02,.96,Math.max(.1,W-.1)),K.box(J,ut-.05,yt+1.78,ht,.05,1.46,Math.max(.1,W-.16)),K.box(T,ut-.06,yt+2.54,ht,.12,.08,W),K.box(m,ut-.06,yt+3.22,ht,.12,1.28,W);for(let Tt=ot+3;Tt<It-1;Tt+=3)K.box(mt,ut-.06,yt+1.78,Tt,.09,1.46,.06)};L?(k(-Mt,L.v0),k(L.v1,Mt)):k(-Mt,Mt);for(let ot of[-Mt+.05,Mt-.05])K.box(m,(gt+ut)/2,yt+.52,ot,ut-gt,1.04,.1),K.box(J,(gt+ut)/2,yt+1.65,ot,ut-gt-.15,1.2,.05),K.box(T,(gt+ut)/2,yt+2.28,ot,ut-gt,.07,.1);let st=-Mt;for(let ot of et)rt(st,ot-kt.doorWidth/2),K.box(T,gt+.14,yt+2.22,ot,.1,.16,kt.doorWidth+.16),K.box(I,gt+.09,yt+2.22,ot,.02,.1,kt.doorWidth+.12),K.box(B,gt+.2,yt+2.22,ot,.02,.05,.32),st=ot+kt.doorWidth/2;rt(st,Mt);function rt(ot,It){if(It<=ot)return;let W=(ot+It)/2,ht=It-ot;K.box($,gt+.14,yt+.65,W,.06,1.3,ht),K.box(T,gt+.14,yt+1.3,W,.08,.06,ht),K.box(I,gt+.1,yt+1.12,W,.02,.08,ht),K.box(T,gt+.14,yt+2.26,W,.08,.08,ht)}for(let ot of[-11,0,11]){if(L&&ot>=L.v0-2.2&&ot<=L.v1+2.2)continue;let It=gt+(ut-gt)*.62;K.box(Rt,It,yt+.44,ot,.52,.07,2.4),K.box(Rt,It+.2,yt+.68,ot,.07,.42,2.4);for(let W of[ot-.95,ot+.95])K.box(mt,It,yt+.21,W,.44,.42,.07);if(ot===0)for(let W of[-1.45,1.45])K.box(mt,It-.05,yt+1.1,W,.72,2.2,.06),K.box(J,It-.05,yt+1.15,W,.64,1.7,.03)}for(let ot=-Mt+4;ot<=Mt-4;ot+=8){let It=yt-.5-pt;It>.5&&(K.box(M,ut-.6,pt+It/2,ot,.72,It,.72),K.box(M,ut-.6,pt+.18,ot,1,.36,1))}for(let ot=-Mt+2;ot<=Mt-2;ot+=8)K.box(T,ut-.2,yt+hn.roof/2,ot,.2,hn.roof,.2);if(!wt)return;let Z=(L.u0+L.u1)/2,Et=(L.v0+L.v1)/2,V=L.u1-L.u0,it=L.v1-L.v0;K.box(m,Z,yt-.25,Et,V,.5,it),K.box(g,Z,yt+.006,Et,V,.01,it),K.box(Y,Z,yt+.012,L.v1-.15,Cn.width-.2,.012,.28),K.box(m,(ut+L.u1)/2,yt+.52,L.v0+.04,L.u1-ut,1.04,.08),K.box(J,(ut+L.u1)/2,yt+1.75,L.v0+.04,L.u1-ut-.1,1.4,.04),K.box(m,L.u1-.04,yt+.52,Et,.08,1.04,it),K.box(J,L.u1-.04,yt+1.75,Et,.04,1.4,it-.1),K.box(b,Z,yt+hn.roof-.08,Et,V+.45,.18,it+.7),K.box(ct,Z,yt+hn.roof-.18,Et,.35,.03,it-.4);for(let ot of[L.v0+.35,L.v1-.35])K.box(j,ut+.05,yt+.48,ot,.95,.96,.22),K.box(mt,ut+.05,yt+.97,ot,.92,.04,.2),K.box(Q,ut+.36,yt+.99,ot,.14,.02,.12),K.box(G,ut+.05,yt+.48,ot+(ot<Et?.14:-.14),.04,.62,.08);let tt=(wt.u0+wt.u1)/2,at=Math.max(1,Math.ceil(wt.rise/Cn.riser));for(let ot=0;ot<at;ot++){let It=pt+wt.rise*(ot+1)/at,W=wt.bottom-wt.run*(ot+.5)/at;K.box(m,tt,It-.15,W,Cn.width,.3,wt.run/at+.02)}let dt=(ot,It,W)=>new X(ot,It,W);for(let ot of[wt.u0,wt.u1])K.face(M,[dt(ot,pt,wt.bottom),dt(ot,yt-.3,wt.top),dt(ot,yt+.9,wt.top),dt(ot,pt+.9,wt.bottom)]),K.face(M,[dt(ot,pt+.9,wt.bottom),dt(ot,yt+.9,wt.top),dt(ot,yt-.3,wt.top),dt(ot,pt,wt.bottom)]),K.face(J,[dt(ot,pt+.9,wt.bottom),dt(ot,yt+.9,wt.top),dt(ot,yt+2.2,wt.top),dt(ot,pt+2.2,wt.bottom)]),K.face(J,[dt(ot,pt+2.2,wt.bottom),dt(ot,yt+2.2,wt.top),dt(ot,yt+.9,wt.top),dt(ot,pt+.9,wt.bottom)]),K.bar(T,dt(ot,pt+.95,wt.bottom),dt(ot,yt+.95,wt.top),.06,.06),K.bar(T,dt(ot,pt+.72,wt.bottom),dt(ot,yt+.72,wt.top),.045,.045),K.bar(T,dt(ot,pt+2.25,wt.bottom),dt(ot,yt+2.25,wt.top),.08,.08);K.face(M,[dt(wt.u0,pt-.2,wt.bottom),dt(wt.u1,pt-.2,wt.bottom),dt(wt.u1,yt-.3,wt.top),dt(wt.u0,yt-.3,wt.top)]),K.bar(b,dt(tt,pt+2.6,wt.bottom+.4),dt(tt,yt+2.6,wt.top-.2),Cn.width+.48,.15),K.box(M,tt,(pt+yt)/2-.3,wt.top+.15,Cn.width,yt-pt,.35);let zt=Math.min(wt.run*.55,8.5);if(zt>3&&yt-pt>4.5){let ot=wt.top+zt/2+.3,It=Math.min(2.8,(yt-pt)*.45);K.box(q,tt,pt+It/2,ot,Cn.width-.08,It,zt)}let Pt=wt.bottom+.32;K.box(T,wt.u0-.05,pt+1.3,Pt,.12,2.6,.55),K.box(T,wt.u1+.05,pt+1.3,Pt,.12,2.6,.55),K.box(b,tt,pt+2.62,Pt,Cn.width+.55,.18,1.15),K.box(I,tt,pt+2.44,Pt+.56,Cn.width+.5,.26,.06),K.box(ct,tt,pt+2.51,Pt+.1,Cn.width-.2,.03,.4),K.box(Y,tt,pt+.02,wt.bottom+.25,Cn.width-.2,.015,.32),K.box(mt,wt.u1+.18,pt+1,wt.bottom-1.8,.28,2,1.8),K.box(Q,wt.u1+.33,pt+1.18,wt.bottom-1.4,.02,.58,.8),K.box(ct,wt.u1+.33,pt+1.45,wt.bottom-2.25,.02,.45,.65)}return P.build(A,{where:"out"}),{node:A,piers:H,solids:U,platforms:F}}function d(x,{near:S=[0,0],reach:w=1600}={}){let v=JSON.stringify(x.map(A=>[A.name,A.path.length,A.path[0],A.heights.length,A.ground?.length??0]));if(v!==s){s=v,f(),o="";for(let A of x)i.push(p(A))}u(S,w)}function u(x,S=1600){let w=JSON.stringify([x.map(v=>Math.round(v/200)),S]);if(w!==o){o=w;for(let v of i){l(v);let{node:A,piers:P,solids:C,platforms:M}=h(v.line,v.spec,x,S);e.add(A),v.track=A,v.piers=P,v.solids=C,v.platforms=M}a++}}function p(x){let S=Iu(x,x.drive),w=tm(S.period),v=[];for(let A=0;A<w;A++){let P={car:lh(160,28),bound:lh(144,22)},C=ah(S.cars),M=C.map((m,g)=>{let b=nm({front:g===C.length-1,back:g===0,boards:P});return e.add(b.car),{...b,offset:m,index:g}});v.push({offset:A*S.period/w,cars:M,boards:P,shown:""})}return{spec:x,line:S,track:null,piers:[],trains:v,platforms:[],calls:fm(S)}}function y(x,S,w,v){if(!t||!v)return;let{line:A,spec:P}=x,C=c.get(S);if(C||(C={time:w,events:new Set},c.set(S,C)),C.checked&&w>=C.time&&w-C.time<.25)return;let M=Math.max(C.time,w-2)+S.offset;C.time=w,C.checked=!0;let m=A.eventsBetween(M,w+S.offset),g=S.state;g.phase==="run"&&g.arrives<=16&&m.push({kind:"approach",time:g.time,stop:g.from,next:g.next,arrival:g.time+g.arrives});for(let b of m){let T=b.kind==="approach"?b.arrival??b.time+A.stateAt(b.time).arrives:b.time,I=`${b.kind}|${Math.round(T*1e3)}`;if(C.events.has(I))continue;let R=Lu(A,b);if(!R)continue;let D=v.ride?.entry===x&&v.ride.train===S,N=0,H=Math.sign(b.next.at-b.stop.at)||1;if(D&&R.where!=="platform")N=1;else if(!v.ride&&R.where!=="car"&&R.at){R.at.index===0?H=1:R.at.index===A.stops.length-1&&(H=-1);let U=A.way.spot(R.at.at),F=Vi(P.heights,R.at.at)+kt.floor;if(H*((v.x-U.x)*U.dz-(v.z-U.z)*U.dx)<hn.edge-.6||Math.abs(v.y-F)>2.2)continue;let $=H*(hn.edge+hn.width/2),J=U.x+U.dz*$,Rt=U.z-U.dx*$,vt=Math.hypot(v.x-J,v.z-Rt,(v.y-F)*2);N=Math.max(0,1-vt/32)}if(N>.05&&(C.events.add(I),C.events.size>32&&C.events.delete(C.events.values().next().value),R.chime&&t.play(R.chime,N),R.text)){let U=b.kind==="approach"?R.text.replace("\u307E\u3082\u306A\u304F\u3001",`\u307E\u3082\u306A\u304F\u3001${H>0?1:2}\u756A\u7DDA\u306B\u3001`):R.text;t.say(U,{volume:N})}}}function _(x=null,S=2200,w=null){let v=n();for(let A of i){let{line:P,spec:C}=A;for(let M of A.trains){let m=P.stateAt(v+M.offset);M.state=m;let g=m.way>=0?1:-1;for(let I of M.cars){let R=m.s+I.offset,D=P.way.spot(R),N=D.x+D.dz*g*vs,H=D.z-D.dx*g*vs,U=w?.ride?.train===M||!x||Math.hypot(N-x[0],H-x[1])<S;if(I.car.visible=U,!U)continue;let F=Vi(C.heights,R),Y=Math.atan2(Vi(C.heights,R+kt.length/2)-Vi(C.heights,R-kt.length/2),kt.length);I.car.position.set(N,F,H),I.car.rotation.set(-Y,Math.atan2(D.dx,D.dz),0,"YXZ"),I.place={x:N,z:H,dx:D.dx,dz:D.dz,y:F,pitch:Y};let $=m.phase==="dwell"?g:0;for(let J of I.leaves)J.leaf.position.z=J.shut+(J.side===$?J.slide*m.doors:0)}let b=Du(P,m),T=b.join("|");T!==M.shown&&(M.shown=T,M.boards.car.show(b,["#ffb23e","#ffffff"]),M.boards.bound.show([P.boundFor(m).name],["#ffb23e"])),y(A,M,v,w)}for(let M of A.platforms){let g=A.trains.find(({state:T})=>T.phase==="dwell"&&T.stop.index===M.stop.index&&T.way===M.sign)?.state.doors??0;for(let T of M.leaves)T.leaf.position.z=T.shut+T.slide*g;if(v<M.nextBoard&&M.nextBoard-v<=.5)continue;let b=um(P,A.calls,A.trains.map(({offset:T})=>T),M.stop,M.sign,v);M.board.show(b.text),M.nextBoard=v+.5}}}return{group:e,setLines:d,setNear:u,update:_,...r,get lines(){return i},get piers(){return i.flatMap(x=>x.piers)},get solids(){return{surfaces:i.flatMap(x=>x.solids?.surfaces??[]),walls:i.flatMap(x=>x.solids?.walls??[]),boxes:i.flatMap(x=>x.solids?.boxes??[])}},get revision(){return a},dispose(){s="",o="",f()}}}function gb(n){let t=String(n??"").trim();if(/^\d{1,9}$/.test(t))return Number(t);let e=t||"1",i=2166136261;for(let s=0;s<e.length;s++)i=Math.imul(i^e.charCodeAt(s),16777619);return i>>>0}var wr=2e4,Ro=2e3,Sr=new URLSearchParams(location.hash.slice(1)),ph=gb(Sr.get("seed")??"3"),pm=Number(Sr.get("dist")),gn=Math.min(wr,Math.max(200,Number(Sr.get("size"))||(pm>0?pm*2:1e3))),mm=Sr.get("bare")==="1",Da=!mm&&gn>1200,Co=document.getElementById("info"),hh=document.getElementById("view"),Po=new Rl({canvas:hh,antialias:!0});Po.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Po.shadowMap.enabled=gn<=1600;Po.toneMapping=Bc;Po.toneMappingExposure=.9;var js=new jr;js.background=new he("#c9dbe6");js.fog=new Jr("#c9dbe6",Math.max(600,Math.round(gn*.28)),Math.max(2600,Math.round(gn*1.45+600)));var Io=new Vn(50,1,gn>4e3?2:.5,Math.max(6e3,gn*3));Io.position.set(-gn*.38,gn*.26,gn*.42);var bs=new Il(Io,hh);bs.target.set(0,30,0);bs.minDistance=35;bs.maxDistance=Math.max(2400,gn*1.6);bs.maxPolarAngle=Math.PI*.49;js.add(new ca("#dfe8f0","#6b6a5a",1.2));var Er=new ha("#fff4e2",2.6);Er.position.set(-300,500,260);Er.castShadow=gn<=1600;Er.shadow.mapSize.set(4096,4096);Object.assign(Er.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:10,far:1600});js.add(Er,Er.target);var fh=jp();js.add(fh.group);var za=Jp();js.add(za.group);var mh=dm();js.add(mh.group);window.__view={camera:Io,controls:bs,transit:mh,region:fh,distant:za};function gm(){let n=hh.clientWidth,t=hh.clientHeight;Po.setSize(n,t,!1),Io.aspect=n/Math.max(1,t),Io.updateProjectionMatrix()}window.addEventListener("resize",gm);gm();Po.setAnimationLoop(()=>{bs.update(),mh.update([bs.target.x,bs.target.z],gn),Po.render(js,Io)});var uh=new Worker(new URL("./worker.bundle.js?v=online-20261125-refresh",import.meta.url)),Js=null,es=null,La=null,ku=0,xm=0,dh=[],Ua=0,Hu=0,_m=0,Ia=null,xb=[[1e3,"1km\u56DB\u65B9"],[2500,"2.5km\u56DB\u65B9"],[5e3,"5km\u56DB\u65B9"],[1e4,"10km\u56DB\u65B9"],[2e4,"20km(\u534A\u5F8410km)"]];function ym(n){if(!Ia)return;let t=Da?ku:Ia.buildings.length,e=Da&&dh.length+Ua>0?`\uFF08\u5EFA\u7269\u30BF\u30A4\u30EB\u8AAD\u8FBC ${xm}\uFF09`:"",i=`<div class="dist-bar">${xb.map(([r,a])=>`<button type="button" data-size="${r}" aria-pressed="${gn===r}">${a}</button>`).join("")}</div>`,s=Js?.buildingLawStats,o=s?`<br>\u6CD5\u898F\u9069\u5408 ${s.compliantSharePct}%\u30FB\u7D2F\u8A08\u58F2\u8CB7 ${s.cumulativeTransactions.toLocaleString()}\u4EF6\uFF08\u5EFA\u7BC9\u6CD5: ${s.lawEraName}\uFF09`:"";Co.innerHTML=`\u30B7\u30FC\u30C9 ${ph}\u30FB${gn}m\u56DB\u65B9\uFF08\u6771\u3078 ${(es[0]/1e3).toFixed(2)}km\u30FB\u5357\u3078 ${(es[1]/1e3).toFixed(2)}km\uFF09<br>\u5EFA\u7269 ${t.toLocaleString()}\u68DF${e}\u30FB\u751F\u6D3B\u9053\u8DEF ${Ia.streets.length}\u672C\u30FB\u5730\u533A ${Ia.districts.length}\u30FB\u30E2\u30CE\u30EC\u30FC\u30EB ${_m}\u8DEF\u7DDA${o}<br>3D\u306E\u7D44\u307F\u7ACB\u3066 ${Math.round(n)}\u30DF\u30EA\u79D2\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002${i}`}Co.addEventListener("click",n=>{let t=n.target.closest("button[data-size]");if(!t)return;let e=new URLSearchParams(location.hash.slice(1));e.set("size",t.dataset.size),e.delete("dist"),location.hash=e.toString(),location.reload()});window.addEventListener("hashchange",()=>location.reload());function _b(n){return n<=1100?2:n<=1600?4:Math.min(64,Math.max(8,Math.ceil(n/240/2)*2))}function vm(){for(;Ua<2&&dh.length;){let n=dh.shift();Ua++,uh.postMessage({type:"buildingTile",id:n.id,seed:ph,tx:n.tx,tz:n.tz})}}uh.onmessage=n=>{let t=n.data;if(t.type==="progress")Co.textContent=`${t.label}\uFF08${Math.round(t.fraction*100)}%\u30FB${(t.elapsed/1e3).toFixed(1)}\u79D2\uFF09`;else if(t.type==="ready"){Js=t.overlay;let e=(Js.lines||[]).flatMap(u=>u.stations||[]),i=(Js.streams||[]).filter(u=>!u.covered),s=Js.slopes||[],o=Js.lines[0]?.stations[Math.min(5,Js.lines[0].stations.length-1)],r=-1e9;for(let u of e){let p=(u.transfer?55:0)+Math.min(35,(u.boardings||0)/1e3);(u.x<4e3||u.x>wr-4e3||u.z<4e3||u.z>wr-4e3)&&(p-=350);let y=1e9;for(let x of i)for(let S=0;S<x.points.length;S+=4){let w=Math.hypot(x.points[S]-u.x,x.points[S+1]-u.z);w<y&&(y=w)}y>=90&&y<380?p+=150:y<480&&(p+=65);let _=!1;for(let x of s)if(Math.hypot((x.x??0)-u.x,(x.z??0)-u.z)<480){_=!0;break}_&&(p+=120),p>r&&(r=p,o=u)}es=[Number(Sr.get("x"))||o?.x||1e4,Number(Sr.get("z"))||o?.z||1e4];let a=_b(gn),c=gn/2,l=Math.max(0,Math.floor((es[0]-c)/a)*a),f=Math.max(0,Math.floor((es[1]-c)/a)*a),h=Math.min(wr,Math.ceil((es[0]+c)/a)*a),d=Math.min(wr,Math.ceil((es[1]+c)/a)*a);La={x0:l,z0:f,x1:h,z1:d},Co.textContent="3D\u306E\u5F62\u3092\u4F5C\u3063\u3066\u3044\u307E\u3059\u2026",uh.postMessage({type:"window",id:1,seed:ph,x0:l,z0:f,x1:h,z1:d,step:a,buildings:!mm&&!Da,streets:gn<=2500})}else if(t.type==="window")yb(t.window).catch(e=>{Co.textContent=`3D\u306E\u5F62\u3092\u4F5C\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002${e.message}`});else if(t.type==="buildingTile"){if(Ua=Math.max(0,Ua-1),!t.missing&&t.count>0){if(La){let{corners:e,count:i}=t,{x0:s,z0:o,x1:r,z1:a}=La;for(let c=0;c<i;c++){let l=c*8,f=(e[l]+e[l+2]+e[l+4]+e[l+6])*.25,h=(e[l+1]+e[l+3]+e[l+5]+e[l+7])*.25;f>=s&&f<=r&&h>=o&&h<=a&&ku++}}else ku+=t.count;za.addTile(t)}xm++,ym(performance.now()-Hu),vm()}else t.type==="error"&&(Co.textContent=`\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A${t.message}`)};uh.postMessage({type:"generate",seed:ph,preloadBuildings:Da});async function yb(n){let t=1/0;for(let r of n.heights)t=Math.min(t,r);let e=Math.floor(t),i=es;if(Hu=performance.now(),!await fh.show(n,{origin:i,datum:e}))return;let s=fh.heightAt(0,0)??0;bs.target.set(0,s,0),Io.position.set(-gn*.38,s+gn*.28,gn*.42),Co.textContent="\u30E2\u30CE\u30EC\u30FC\u30EB\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u2026",await new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));let o=[];for(let r of Js.lines){if(!n.lines.includes(r.id))continue;let a=Qp({name:r.name,color:r.color,points:r.points,ground:r.ground,stations:r.stations},{origin:i,datum:e});a&&o.push(a)}if(mh.setLines(o,{near:[0,0],reach:Math.min(gn*.75,4500)}),_m=o.length,Ia=n,Da&&La){let{x0:r,z0:a,x1:c,z1:l}=La;za.setView({origin:i,datum:e}),za.setFilter(({corners:x})=>{let S=(x[0]+x[2]+x[4]+x[6])*.25,w=(x[1]+x[3]+x[5]+x[7])*.25;return S>=r&&S<=c&&w>=a&&w<=l});let f=Math.floor(wr/Ro)-1,h=Math.max(0,Math.floor(r/Ro)),d=Math.min(f,Math.floor(Math.max(0,c-1)/Ro)),u=Math.max(0,Math.floor(a/Ro)),p=Math.min(f,Math.floor(Math.max(0,l-1)/Ro)),y=[],_=100;for(let x=u;x<=p;x++)for(let S=h;S<=d;S++){let w=Math.hypot((S+.5)*Ro-es[0],(x+.5)*Ro-es[1]);y.push({id:_++,tx:S,tz:x,dist:w})}y.sort((x,S)=>x.dist-S.dist),dh=y,vm()}ym(performance.now()-Hu)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
