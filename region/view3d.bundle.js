var ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vl=0,ec=1,Gl=2;var nc=1,Wl=2,bn=3,Un=0,Ve=1,Ge=2,zn=0,di=1,ic=2,sc=3,rc=4,Xl=5,Jn=100,ql=101,Yl=102,$l=103,Zl=104,Jl=200,Kl=201,jl=202,Ql=203,Ur=204,Nr=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,oh=212,ah=213,ch=214,so=0,ro=1,oo=2,fi=3,ao=4,co=5,lo=6,ho=7,oc=0,lh=1,hh=2,Bn=0,uh=1,dh=2,fh=3,uo=4,ph=5,mh=6,gh=7;var ac=300,Mi=301,bi=302,fo=303,po=304,tr=306,pi=1e3,Zn=1001,Or=1002,Pe=1003,xh=1004;var er=1005;var Ke=1006,mo=1007;var Sn=1008;var mn=1009,cc=1010,lc=1011,rs=1012,go=1013,ii=1014,on=1015,os=1016,xo=1017,_o=1018,as=1020,hc=35902,uc=35899,dc=1021,fc=1022,Fe=1023,Zi=1026,cs=1027,pc=1028,yo=1029,mc=1030,vo=1031;var Mo=1033,nr=33776,ir=33777,sr=33778,rr=33779,bo=35840,So=35841,wo=35842,Eo=35843,To=36196,Ao=37492,Ro=37496,Co=37808,Io=37809,Po=37810,Do=37811,Lo=37812,Uo=37813,No=37814,Oo=37815,Fo=37816,zo=37817,Bo=37818,ko=37819,Ho=37820,Vo=37821,Go=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,$o=36285,Zo=36286;var Cs=2300,Fr=2301,Lr=2302,Wa=2400,Xa=2401,qa=2402;var _h=3200,yh=3201;var gc=0,vh=1,kn="",be="srgb",mi="srgb-linear",Is="linear",ne="srgb";var ui=7680;var Ya=519,Mh=512,bh=513,Sh=514,xc=515,wh=516,Eh=517,Th=518,Ah=519,$a=35044;var _c="300 es",fn=2e3,Ps=2001;var yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=1234567,As=Math.PI/180,Ji=180/Math.PI;function ls(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function yc(n,t){return(n%t+t)%t}function Xu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qu(n,t,e){return n!==t?(e-n)/(t-n):0}function Rs(n,t,e){return(1-e)*n+e*t}function Yu(n,t,e,i){return Rs(n,t,1-Math.exp(-e*i))}function $u(n,t=1){return t-Math.abs(yc(n,t*2)-t)}function Zu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ju(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ku(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ju(n,t){return n+Math.random()*(t-n)}function Qu(n){return n*(.5-Math.random())}function td(n){n!==void 0&&(ml=n);let t=ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(n){return n*As}function nd(n){return n*Ji}function id(n){return(n&n-1)===0&&n!==0}function sd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function od(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var vc={DEG2RAD:As,RAD2DEG:Ji,generateUUID:ls,clamp:Yt,euclideanModulo:yc,mapLinear:Xu,inverseLerp:qu,lerp:Rs,damp:Yu,pingpong:$u,smoothstep:Zu,smootherstep:Ju,randInt:Ku,randFloat:ju,randFloatSpread:Qu,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:sd,floorPowerOfTwo:rd,setQuaternionFromProperEuler:od,normalize:ke,denormalize:Yi},Ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==p||h!==g){let m=1-a,u=c*f+l*p+h*g+d*x,S=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,u*S);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let _=a*S;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*f,t[e+1]=c*g+h*f+l*d-a*p,t[e+2]=l*g+h*p+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new L,gl=new rn,Wt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],S=s[1],v=s[4],_=s[7],A=s[2],T=s[5],E=s[8];return r[0]=o*x+a*S+c*A,r[3]=o*m+a*v+c*T,r[6]=o*u+a*_+c*E,r[1]=l*x+h*S+d*A,r[4]=l*m+h*v+d*T,r[7]=l*u+h*_+d*E,r[2]=f*x+p*S+g*A,r[5]=f*m+p*v+g*T,r[8]=f*u+p*_+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ba=new Wt;function Mc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rh(){let n=Ds("canvas");return n.style.display="block",n}var xl={};function Ki(n){n in xl||(xl[n]=!0,console.warn(n))}function Ch(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var _l=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){let n={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mi]:{primaries:t,whitePoint:i,transfer:Is,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),n}var Kt=ad();function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ni,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ni===void 0&&(Ni=Ds("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ni}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,ji=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sa(s[o].image)):r.push(Sa(s[o]))}else r=Sa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ld=0,wa=new L,He=class n extends yn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Ke,o=Sn,a=Fe,c=mn,l=n.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ls(),this.name="",this.source=new ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pi:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pi:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=ac;He.DEFAULT_ANISOTROPY=1;var he=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(p+1)/2,A=(u+1)/2,T=(h+f)/4,E=(d+x)/4,R=(g+m)/4;return v>_&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=E/i):_>A?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=R/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends yn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new He(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ji(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Br{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ls=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kr=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),dr.subVectors(this.max,Ms),Oi.subVectors(t.a,Ms),Fi.subVectors(t.b,Ms),zi.subVectors(t.c,Ms),Vn.subVectors(Fi,Oi),Gn.subVectors(zi,Fi),ai.subVectors(Oi,zi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!Ea(e,Oi,Fi,zi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Oi,Fi,zi,dr))?!1:(fr.crossVectors(Vn,Gn),e=[fr.x,fr.y,fr.z],Ea(e,Oi,Fi,zi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,ur=new Kn,Oi=new L,Fi=new L,zi=new L,Vn=new L,Gn=new L,ai=new L,Ms=new L,dr=new L,fr=new L,ci=new L;function Ea(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ci.fromArray(n,r);let a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=i.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hd=new Kn,bs=new L,Ta=new L,Nn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ta)),this.expandByPoint(bs.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cn=new L,Aa=new L,pr=new L,Wn=new L,Ra=new L,mr=new L,Ca=new L,gi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Aa.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=Wn.dot(this.direction),c=-Wn.dot(pr),l=Wn.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(pr,f),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);let i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,i,s,r){Ra.subVectors(e,t),mr.subVectors(i,t),Ca.crossVectors(Ra,mr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,t);let c=a*this.direction.dot(mr.crossVectors(Wn,mr));if(c<0)return null;let l=a*this.direction.dot(Ra.cross(Wn));if(l<0||c+l>o)return null;let h=-a*Wn.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class n{constructor(t,e,i,s,r,o,a,c,l,h,d,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,d,f,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,d,f,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,g=l*h,x=l*d;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,g=l*h,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Xn.crossVectors(i,Ze),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Xn.crossVectors(i,Ze)),Xn.normalize(),gr.crossVectors(Ze,Xn),s[0]=Xn.x,s[4]=gr.x,s[8]=Ze.x,s[1]=Xn.y,s[5]=gr.y,s[9]=Ze.y,s[2]=Xn.z,s[6]=gr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],S=i[3],v=i[7],_=i[11],A=i[15],T=s[0],E=s[4],R=s[8],b=s[12],M=s[1],I=s[5],D=s[9],U=s[13],k=s[2],H=s[6],X=s[10],K=s[14],W=s[3],it=s[7],G=s[11],Q=s[15];return r[0]=o*T+a*M+c*k+l*W,r[4]=o*E+a*I+c*H+l*it,r[8]=o*R+a*D+c*X+l*G,r[12]=o*b+a*U+c*K+l*Q,r[1]=h*T+d*M+f*k+p*W,r[5]=h*E+d*I+f*H+p*it,r[9]=h*R+d*D+f*X+p*G,r[13]=h*b+d*U+f*K+p*Q,r[2]=g*T+x*M+m*k+u*W,r[6]=g*E+x*I+m*H+u*it,r[10]=g*R+x*D+m*X+u*G,r[14]=g*b+x*U+m*K+u*Q,r[3]=S*T+v*M+_*k+A*W,r[7]=S*E+v*I+_*H+A*it,r[11]=S*R+v*D+_*X+A*G,r[15]=S*b+v*U+_*K+A*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+i*l*f+s*a*p-i*c*p)+x*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+i*o*p+r*a*h-i*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],S=d*m*l-x*f*l+x*c*p-a*m*p-d*c*u+a*f*u,v=g*f*l-h*m*l-g*c*p+o*m*p+h*c*u-o*f*u,_=h*x*l-g*d*l+g*a*p-o*x*p-h*a*u+o*d*u,A=g*d*c-h*x*c-g*a*f+o*x*f+h*a*m-o*d*m,T=e*S+i*v+s*_+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=S*E,t[1]=(x*f*r-d*m*r-x*s*p+i*m*p+d*s*u-i*f*u)*E,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*u+i*c*u)*E,t[3]=(d*c*r-a*f*r-d*s*l+i*f*l+a*s*p-i*c*p)*E,t[4]=v*E,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*E,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*E,t[8]=_*E,t[9]=(g*d*r-h*x*r-g*i*p+e*x*p+h*i*u-e*d*u)*E,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*u+e*a*u)*E,t[11]=(h*a*r-o*d*r-h*i*l+e*d*l+o*i*p-e*a*p)*E,t[12]=A*E,t[13]=(h*x*s-g*d*s+g*i*f-e*x*f-h*i*m+e*d*m)*E,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*E,t[15]=(o*d*s-h*a*s+h*i*c-e*d*c-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,g=r*d,x=o*h,m=o*d,u=a*d,S=c*l,v=c*h,_=c*d,A=i.x,T=i.y,E=i.z;return s[0]=(1-(x+u))*A,s[1]=(p+_)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+u))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+v)*E,s[9]=(m-S)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let l=1/r,h=1/o,d=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ps)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fn,c=!1){let l=this.elements,h=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===fn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ps)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Bi=new L,un=new pe,ud=new L(0,0,0),dd=new L(1,1,1),Xn=new L,gr=new L,Ze=new L,vl=new pe,Ml=new rn,pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,bl=new L,ki=new rn,In=new pe,xr=new L,Ss=new L,pd=new L,md=new rn,Sl=new L(1,0,0),wl=new L(0,1,0),El=new L(0,0,1),Tl={type:"added"},gd={type:"removed"},Hi={type:"childadded",child:null},Ia={type:"childremoved",child:null},De=class n extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new pn,i=new rn,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Wt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xr.copy(t):xr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ss,xr,this.up):In.lookAt(xr,Ss,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new L,Pn=new L,Pa=new L,Dn=new L,Vi=new L,Gi=new L,Al=new L,Da=new L,La=new L,Ua=new L,Na=new he,Oa=new he,Fa=new he,$n=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),Pn.subVectors(i,e),Pa.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(Pn),c=dn.dot(Pa),l=Pn.dot(Pn),h=Pn.dot(Pa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Na.setScalar(0),Oa.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,i),Fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Na,r.x),o.addScaledVector(Oa,r.y),o.addScaledVector(Fa,r.z),o}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),Pn.subVectors(t,e),dn.cross(Pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),dn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,i),Gi.subVectors(r,i),Da.subVectors(t,i);let c=Vi.dot(Da),l=Gi.dot(Da);if(c<=0&&l<=0)return e.copy(i);La.subVectors(t,s);let h=Vi.dot(La),d=Gi.dot(La);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Vi,o);Ua.subVectors(t,r);let p=Vi.dot(Ua),g=Gi.dot(Ua);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Gi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Al.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Al,a);let u=1/(m+x+f);return o=x*u,a=f*u,e.copy(i).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function za(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=yc(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=za(o,r,t+1/3),this.g=za(o,r,t),this.b=za(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let i=Ih[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Kt.workingToColorSpace(Ne.copy(this),t),Math.round(Yt(Ne.r*255,0,255))*65536+Math.round(Yt(Ne.g*255,0,255))*256+Math.round(Yt(Ne.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ne.copy(this),e);let i=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=be){Kt.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,i=Ne.g,s=Ne.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(_r);let i=Rs(qn.h,_r.h,e),s=Rs(qn.s,_r.s,e),r=Rs(qn.l,_r.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Xt;Xt.NAMES=Ih;var xd=0,On=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=di,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ur&&(i.blendSrc=this.blendSrc),this.blendDst!==Nr&&(i.blendDst=this.blendDst),this.blendEquation!==Jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Fn=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new L,yr=new Ft,_d=0,Ce=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$a,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$a&&(t.usage=this.usage),t}};var Ns=class extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Os=class extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Se=class extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}},yd=0,nn=new pe,Ba=new De,Wi=new L,Je=new Kn,ws=new Kn,Re=new L,Xe=class n extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Os:Ns)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Je.min,ws.min),Je.expandByPoint(Re),Re.addVectors(Je.max,ws.max),Je.expandByPoint(Re)):(Je.expandByPoint(ws.min),Je.expandByPoint(ws.max))}Je.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),Re.add(Wi)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new L,c[R]=new L;let l=new L,h=new L,d=new L,f=new Ft,p=new Ft,g=new Ft,x=new L,m=new L;function u(R,b,M){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(x),a[b].add(x),a[M].add(x),c[R].add(m),c[b].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,b=S.length;R<b;++R){let M=S[R],I=M.start,D=M.count;for(let U=I,k=I+D;U<k;U+=3)u(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let v=new L,_=new L,A=new L,T=new L;function E(R){A.fromBufferAttribute(s,R),T.copy(A);let b=a[R];v.copy(b),v.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(T,b);let I=_.dot(c[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,b=S.length;R<b;++R){let M=S[R],I=M.start,D=M.count;for(let U=I,k=I+D;U<k;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new Ce(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new pe,li=new gi,vr=new Nn,Cl=new L,Mr=new L,br=new L,Sr=new L,ka=new L,wr=new L,Il=new L,Er=new L,Ie=class extends De{constructor(t=new Xe,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(ka.fromBufferAttribute(d,t),o?wr.addScaledVector(ka,h):wr.addScaledVector(ka.sub(e),h))}e.add(wr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(vr.containsPoint(li.origin)===!1&&(li.intersectSphere(vr,Cl)===null||li.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],S=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=v;_<A;_+=3){let T=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);s=Tr(this,u,t,i,l,h,d,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let S=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Tr(this,o,t,i,l,h,d,S,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],S=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=v;_<A;_+=3){let T=_,E=_+1,R=_+2;s=Tr(this,u,t,i,l,h,d,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let S=m,v=m+1,_=m+2;s=Tr(this,o,t,i,l,h,d,S,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vd(n,t,e,i,s,r,o,a){let c;if(t.side===Ve?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Un,a),c===null)return null;Er.copy(a),Er.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:n}}function Tr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Mr),n.getVertexPosition(c,br),n.getVertexPosition(l,Sr);let h=vd(n,t,e,i,Mr,br,Sr,Il);if(h){let d=new L;$n.getBarycoord(Il,Mr,br,Sr,d),s&&(h.uv=$n.getInterpolatedAttribute(s,a,c,l,d,new Ft)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,c,l,d,new Ft)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};$n.getNormal(Mr,br,Sr,f.normal),h.face=f,h.barycoord=d}return h}var Qi=class n extends Xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function g(x,m,u,S,v,_,A,T,E,R,b){let M=_/E,I=A/R,D=_/2,U=A/2,k=T/2,H=E+1,X=R+1,K=0,W=0,it=new L;for(let G=0;G<X;G++){let Q=G*I-U;for(let ct=0;ct<H;ct++){let pt=ct*M-D;it[x]=pt*S,it[m]=Q*v,it[u]=k,l.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[u]=T>0?1:-1,h.push(it.x,it.y,it.z),d.push(ct/E),d.push(1-G/R),K+=1}}for(let G=0;G<R;G++)for(let Q=0;Q<E;Q++){let ct=f+Q+H*G,pt=f+Q+H*(G+1),yt=f+(Q+1)+H*(G+1),tt=f+(Q+1)+H*G;c.push(ct,pt,tt),c.push(pt,yt,tt),W+=6}a.addGroup(p,W,b),p+=W,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Si(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){let t={};for(let e=0;e<n.length;e++){let i=Si(n[e]);for(let s in i)t[s]=i[s]}return t}function Md(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Ph={clone:Si,merge:ze},bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fs=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new L,Pl=new Ft,Dl=new Ft,Oe=class extends Fs{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Dl),e.subVectors(Dl,Pl)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(As*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,Hr=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Xi,qi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Xi,qi,t,e);r.layers=this.layers,this.add(r);let o=new Oe(Xi,qi,t,e);o.layers=this.layers,this.add(o);let a=new Oe(Xi,qi,t,e);a.layers=this.layers,this.add(a);let c=new Oe(Xi,qi,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zs=class extends He{constructor(t=[],e=Mi,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vr=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Si(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:zn});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===Sn&&(e.minFilter=Ke),new Hr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},fe=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},wd={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Bs=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var jn=class extends He{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Pe,h=Pe,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ha=new L,Ed=new L,Td=new Wt,sn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ha.subVectors(i,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Td.getNormalMatrix(t),s=this.coplanarPoint(Ha).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new Nn,Ad=new Ft(.5,.5),Ar=new L,es=class{constructor(t=new sn,e=new sn,i=new sn,s=new sn,r=new sn,o=new sn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],S=r[12],v=r[13],_=r[14],A=r[15];if(s[0].setComponents(l-o,p-h,u-g,A-S).normalize(),s[1].setComponents(l+o,p+h,u+g,A+S).normalize(),s[2].setComponents(l+a,p+d,u+x,A+v).normalize(),s[3].setComponents(l-a,p-d,u-x,A-v).normalize(),i)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,p-f,u-m,A-_).normalize();else if(s[4].setComponents(l-c,p-f,u-m,A-_).normalize(),e===fn)s[5].setComponents(l+c,p+f,u+m,A+_).normalize();else if(e===Ps)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Ad.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gr=new L,Wr=new L,Ll=new pe,Es=new gi,Rr=new Nn,Va=new L,Ul=new L,Xr=class extends De{constructor(t=new Xe,e=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Gr.fromBufferAttribute(e,s-1),Wr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Gr.distanceTo(Wr);t.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Ll.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Ll);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=h.getX(x),S=h.getX(x+1),v=Cr(this,t,Es,c,u,S,x);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),u=Cr(this,t,Es,c,x,m,g-1);u&&e.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=Cr(this,t,Es,c,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){let x=Cr(this,t,Es,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cr(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Gr.fromBufferAttribute(a,s),Wr.fromBufferAttribute(a,r),e.distanceSqToSegment(Gr,Wr,Va,Ul)>i)return;Va.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Va);if(!(l<t.near||l>t.far))return{distance:l,point:Ul.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Nl=new L,Ol=new L,Hs=class extends Xr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Nl.fromBufferAttribute(e,s),Ol.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nl.distanceTo(Ol);t.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xi=class extends He{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vs=class extends He{constructor(t,e,i=ii,s,r,o,a=Pe,c=Pe,l,h=Zi,d=1){if(h!==Zi&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Gs=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};function Rd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Dh(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Ld(n,t,r,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let f=e;f<s;f+=e){let p=n[f],g=n[f+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Ws(r,o,e,a,c,l,0),o}function Dh(n,t,e,i,s){let r;if(s===Wd(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Fl(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Fl(o/i|0,n[o],n[o+1],r);return r&&is(r,r.next)&&(qs(r),r=r.next),r}function _i(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(is(e,e.next)||xe(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ws(n,t,e,i,s,r,o){if(!n)return;!o&&r&&zd(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Id(n,i,s,r):Cd(n)){t.push(c.i,n.i,l.i),qs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Pd(_i(n),t),Ws(n,t,e,i,s,r,2)):o===2&&Dd(n,t,e,i,s,r):Ws(_i(n),t,e,i,s,r,1);break}}}function Cd(n){let t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&Ts(s,a,r,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Id(n,t,e,i){let s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,p=Math.min(a,c,l),g=Math.min(h,d,f),x=Math.max(a,c,l),m=Math.max(h,d,f),u=Za(p,g,t,e,i),S=Za(x,m,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=u&&_&&_.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,c,d,l,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ts(a,h,c,d,l,f,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=u;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,c,d,l,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ts(a,h,c,d,l,f,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Pd(n,t){let e=n;do{let i=e.prev,s=e.next.next;!is(i,s)&&Uh(i,e,e.next,s)&&Xs(i,s)&&Xs(s,i)&&(t.push(i.i,e.i,s.i),qs(e),qs(e.next),e=n=s),e=e.next}while(e!==n);return _i(e)}function Dd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hd(o,a)){let c=Nh(o,a);o=_i(o,o.next),c=_i(c,c.next),Ws(o,t,e,i,s,r,0),Ws(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ld(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Dh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(kd(l))}s.sort(Ud);for(let r=0;r<s.length;r++)e=Nd(s[r],e);return e}function Ud(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Nd(n,t){let e=Od(n,t);if(!e)return t;let i=Nh(e,n);return _i(i,i.next),_i(e,e.next)}function Od(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(is(n,e))return e;do{if(is(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Lh(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Xs(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Fd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Fd(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function zd(n,t,e,i){let s=n;do s.z===0&&(s.z=Za(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bd(s)}function Bd(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Za(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Lh(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ts(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Lh(n,t,e,i,s,r,o,a)}function Hd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vd(n,t)&&(Xs(n,t)&&Xs(t,n)&&Gd(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||is(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function is(n,t){return n.x===t.x&&n.y===t.y}function Uh(n,t,e,i){let s=Pr(xe(n,t,e)),r=Pr(xe(n,t,i)),o=Pr(xe(e,i,n)),a=Pr(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Ir(n,e,t)||r===0&&Ir(n,i,t)||o===0&&Ir(e,n,i)||a===0&&Ir(e,t,i))}function Ir(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Pr(n){return n>0?1:n<0?-1:0}function Vd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Xs(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function Gd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Nh(n,t){let e=Ja(n.i,n.x,n.y),i=Ja(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fl(n,t,e,i){let s=Ja(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ja(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wd(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ka=class{static triangulate(t,e,i=2){return Rd(t,e,i)}},Ys=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];zl(t),Bl(i,t);let o=t.length;e.forEach(zl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Bl(i,e[c]);let a=Ka.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function zl(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var yi=class n extends Xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let S=u*f-o;for(let v=0;v<l;v++){let _=v*d-r;g.push(_,-S,0),x.push(0,0,1),m.push(v/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<a;S++){let v=S+l*u,_=S+l*(u+1),A=S+1+l*(u+1),T=S+1+l*u;p.push(v,_,T),p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Mn=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var qr=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yr=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Dr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Xd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var vi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$r=class extends vi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wa,endingEnd:Wa}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xa:r=t,a=2*e-i;break;case qa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Xa:o=t,c=2*i-e;break;case qa:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let A=0;A!==a;++A)r[A]=u*o[h+A]+S*o[l+A]+v*o[c+A]+_*o[d+A];return r}},Zr=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},Jr=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $r(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case Fr:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Xd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Fr;var Qn=class extends Qe{constructor(t,e,i){super(t,e,i)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Cs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="color";var jr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},$s=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Qe{constructor(t,e,i){super(t,e,i)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Cs;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};to.prototype.ValueTypeName="vector";var eo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Oh=new eo,no=class{constructor(t){this.manager=t!==void 0?t:Oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Js=class extends Zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ga=new pe,kl=new L,Hl=new L,ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hl),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ks=class extends Fs{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qa=class extends ja{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Qa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var io=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sc="\\[\\]\\.:\\/",qd=new RegExp("["+Sc+"]","g"),wc="[^"+Sc+"]",Yd="[^"+Sc.replace("\\.","")+"]",$d=/((?:WC+[\/:])*)/.source.replace("WC",wc),Zd=/(WCOD+)?/.source.replace("WCOD",Yd),Jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),Kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),jd=new RegExp("^"+$d+Zd+Jd+Kd+"$"),Qd=["material","materials","bones","map"],tc=class{constructor(t,e,i){let s=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qd,"")}static parseTrackName(t){let e=jd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=tc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);var ss=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qs=class extends yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ec(n,t,e,i){let s=tf(i);switch(e){case dc:return n*t;case pc:return n*t/s.components*s.byteLength;case yo:return n*t/s.components*s.byteLength;case mc:return n*t*2/s.components*s.byteLength;case vo:return n*t*2/s.components*s.byteLength;case fc:return n*t*3/s.components*s.byteLength;case Fe:return n*t*4/s.components*s.byteLength;case Mo:return n*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(n,16)*Math.max(t,8)/4;case bo:case wo:return Math.max(n,8)*Math.max(t,8)/2;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qo:case Yo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $o:case Zo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tf(n){switch(n){case mn:case cc:return{byteLength:1,components:1};case rs:case lc:case os:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case ii:case go:case on:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ou(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function nf(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Af=`#define PI 3.141592653589793
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,np=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Im=`#define TOON
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
}`,Pm=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Nm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:cf,alphatest_pars_fragment:lf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:xf,bumpmap_pars_fragment:_f,clipping_planes_fragment:yf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:bf,color_fragment:Sf,color_pars_fragment:wf,color_pars_vertex:Ef,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:If,displacementmap_vertex:Pf,emissivemap_fragment:Df,emissivemap_pars_fragment:Lf,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Of,envmap_common_pars_fragment:Ff,envmap_pars_fragment:zf,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Jf,envmap_vertex:kf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:$f,lights_pars_begin:Zf,lights_toon_fragment:Kf,lights_toon_pars_fragment:jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:lp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:xp,morphnormal_vertex:_p,morphtarget_pars_vertex:yp,morphtarget_vertex:vp,normal_fragment_begin:Mp,normal_fragment_maps:bp,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Ip,opaque_fragment:Pp,packing:Dp,premultiplied_alpha_fragment:Lp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Op,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:kp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:$p,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Kp,transmission_pars_fragment:jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:om,cube_vert:am,cube_frag:cm,depth_vert:lm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:xm,meshbasic_frag:_m,meshlambert_vert:ym,meshlambert_frag:vm,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Sm,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Im,points_vert:Pm,points_frag:Dm,shadow_vert:Lm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Om},mt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},wn={basic:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ze([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ze([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ze([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ze([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ze([mt.lights,mt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};wn.physical={uniforms:ze([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Jo={r:0,b:0,g:0},wi=new pn,Fm=new pe;function zm(n,t,e,i,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,A=g(v);A===null?u(a,c):A&&A.isColor&&(u(A,1),_=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let A=g(_);A&&(A.isCubeTexture||A.mapping===tr)?(h===void 0&&(h=new Ie(new Qi(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Si(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(wi)),h.material.toneMapped=Kt.getTransfer(A.colorSpace)!==ne,(d!==A||f!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ie(new yi(2,2),new je({name:"BackgroundMaterial",uniforms:Si(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(A.colorSpace)!==ne,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function u(v,_){v.getRGB(Jo,bc(n)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,u(a,c)},render:x,addToRenderList:m,dispose:S}}function Bm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,I,D,U,k){let H=!1,X=d(U,D,I);r!==X&&(r=X,l(r.object)),H=p(M,U,D,k),H&&g(M,U,D,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,I,D,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,I,D){let U=D.wireframe===!0,k=i[M.id];k===void 0&&(k={},i[M.id]=k);let H=k[I.id];H===void 0&&(H={},k[I.id]=H);let X=H[U];return X===void 0&&(X=f(c()),H[U]=X),X}function f(M){let I=[],D=[],U=[];for(let k=0;k<e;k++)I[k]=0,D[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,I,D,U){let k=r.attributes,H=I.attributes,X=0,K=D.getAttributes();for(let W in K)if(K[W].location>=0){let G=k[W],Q=H[W];if(Q===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function g(M,I,D,U){let k={},H=I.attributes,X=0,K=D.getAttributes();for(let W in K)if(K[W].location>=0){let G=H[W];G===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(G=M.instanceColor));let Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),k[W]=Q,X++}r.attributes=k,r.attributesNum=X,r.index=U}function x(){let M=r.newAttributes;for(let I=0,D=M.length;I<D;I++)M[I]=0}function m(M){u(M,0)}function u(M,I){let D=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;D[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),k[M]!==I&&(n.vertexAttribDivisor(M,I),k[M]=I)}function S(){let M=r.newAttributes,I=r.enabledAttributes;for(let D=0,U=I.length;D<U;D++)I[D]!==M[D]&&(n.disableVertexAttribArray(D),I[D]=0)}function v(M,I,D,U,k,H,X){X===!0?n.vertexAttribIPointer(M,I,D,k,H):n.vertexAttribPointer(M,I,D,U,k,H)}function _(M,I,D,U){x();let k=U.attributes,H=D.getAttributes(),X=I.defaultAttributeValues;for(let K in H){let W=H[K];if(W.location>=0){let it=k[K];if(it===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let G=it.normalized,Q=it.itemSize,ct=t.get(it);if(ct===void 0)continue;let pt=ct.buffer,yt=ct.type,tt=ct.bytesPerElement,z=yt===n.INT||yt===n.UNSIGNED_INT||it.gpuType===go;if(it.isInterleavedBufferAttribute){let V=it.data,$=V.stride,xt=it.offset;if(V.isInstancedInterleavedBuffer){for(let ft=0;ft<W.locationSize;ft++)u(W.location+ft,V.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ft=0;ft<W.locationSize;ft++)v(W.location+ft,Q/W.locationSize,yt,G,$*tt,(xt+Q/W.locationSize*ft)*tt,z)}else{if(it.isInstancedBufferAttribute){for(let V=0;V<W.locationSize;V++)u(W.location+V,it.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let V=0;V<W.locationSize;V++)m(W.location+V);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let V=0;V<W.locationSize;V++)v(W.location+V,Q/W.locationSize,yt,G,Q*tt,Q/W.locationSize*V*tt,z)}}else if(X!==void 0){let G=X[K];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(W.location,G);break;case 3:n.vertexAttrib3fv(W.location,G);break;case 4:n.vertexAttrib4fv(W.location,G);break;default:n.vertexAttrib1fv(W.location,G)}}}}S()}function A(){R();for(let M in i){let I=i[M];for(let D in I){let U=I[D];for(let k in U)h(U[k].object),delete U[k];delete I[D]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let D in I){let U=I[D];for(let k in U)h(U[k].object),delete U[k];delete I[D]}delete i[M.id]}function E(M){for(let I in i){let D=i[I];if(D[M.id]===void 0)continue;let U=D[M.id];for(let k in U)h(U[k].object),delete U[k];delete D[M.id]}}function R(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function km(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Fe&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==mn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==on&&!R)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function Vm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new sn,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:i,v=S*4,_=u.clippingState||null;c.value=_,_=h(g,f,v,p);for(let A=0;A!==v;++A)_[A]=e[A];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(d[v]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Gm(n){let t=new WeakMap;function e(o,a){return a===fo?o.mapping=Mi:a===po&&(o.mapping=bi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fo||a===po)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vr(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var us=4,Fh=[.125,.215,.35,.446,.526,.582],Ai=20,Tc=new Ks,zh=new Xt,Ac=null,Rc=0,Cc=0,Ic=!1,Ti=(1+Math.sqrt(5))/2,hs=1/Ti,Bh=[new L(-Ti,hs,0),new L(Ti,hs,0),new L(-hs,0,Ti),new L(hs,0,Ti),new L(0,Ti,-hs),new L(0,Ti,hs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Wm=new L,Qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Wm}=r;Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Cc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:os,format:Fe,colorSpace:mi,depthBuffer:!1},s=kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=qm(r,t,e)}return s}_compileMaterial(t){let e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,i,s,r){let c=new Oe(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(zh),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Fn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Ie(new Qi,x),u=!1,S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,u=!0):(x.color.copy(zh),u=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let A=this._cubeSize;Ko(s,_*A,v>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Mi||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ko(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Tc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bh[(s-r-1)%Bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ie(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let u=[],S=0;for(let E=0;E<Ai;++E){let R=E/x,b=Math.exp(-R*R/2);u.push(b),E===0?S+=b:E<m&&(S+=2*b)}for(let E=0;E<u.length;E++)u[E]=u[E]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let _=this._sizeLods[s],A=3*_*(s>v-us?s-v+us:0),T=4*(this._cubeSize-_);Ko(e,A,T,3*_,2*_),c.setRenderTarget(e),c.render(d,Tc)}};function Xm(n){let t=[],e=[],i=[],s=n,r=n-us+1+Fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-us?c=Fh[o-n+us-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,S=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,R=T>2?0:-1,b=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(b,x*g*T),v.set(f,m*g*T);let M=[T,T,T,T,T,T];_.set(M,u*g*T)}let A=new Xe;A.setAttribute("position",new Ce(S,x)),A.setAttribute("uv",new Ce(v,m)),A.setAttribute("faceIndex",new Ce(_,u)),t.push(A),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kh(n,t,e){let i=new vn(n,t,e);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qm(n,t,e){let i=new Float32Array(Ai),s=new L(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Hh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function Ym(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===fo||c===po,h=c===Mi||c===bi;if(l||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qo(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Qo(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $m(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ki("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zm(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let v=0,_=S.length;v<_;v+=3){let A=S[v+0],T=S[v+1],E=S[v+2];f.push(A,T,T,E,E,A)}}else if(g!==void 0){let S=g.array;x=g.version;for(let v=0,_=S.length/3-1;v<_;v+=3){let A=v+0,T=v+1,E=v+2;f.push(A,T,T,E,E,A)}}else return;let m=new(Mc(f)?Os:Ns)(f,1);m.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Jm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,i,1)}function d(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let u=0;for(let S=0;S<g;S++)u+=p[S]*x[S];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Km(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jm(n,t,e){let i=new WeakMap,s=new he;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*d),E=new Ls(T,_,A,d);E.type=on,E.needsUpdate=!0;let R=v*4;for(let M=0;M<d;M++){let I=m[M],D=u[M],U=S[M],k=_*A*4*M;for(let H=0;H<I.count;H++){let X=H*R;p===!0&&(s.fromBufferAttribute(I,H),T[k+X+0]=s.x,T[k+X+1]=s.y,T[k+X+2]=s.z,T[k+X+3]=0),g===!0&&(s.fromBufferAttribute(D,H),T[k+X+4]=s.x,T[k+X+5]=s.y,T[k+X+6]=s.z,T[k+X+7]=0),x===!0&&(s.fromBufferAttribute(U,H),T[k+X+8]=s.x,T[k+X+9]=s.y,T[k+X+10]=s.z,T[k+X+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new Ft(_,A)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Qm(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var au=new He,Gh=new Vs(1,1),cu=new Ls,lu=new kr,hu=new zs,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ea(n,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function t0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function e0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function n0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function i0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function s0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;$h.set(i),n.uniformMatrix2fv(this.addr,!1,$h),Ee(e,i)}}function r0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),Ee(e,i)}}function o0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),Ee(e,i)}}function a0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function u0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function d0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function f0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function p0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function m0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=xc,r=Gh):r=au,e.setTexture2D(t||r,s)}function g0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||lu,s)}function x0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hu,s)}function _0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cu,s)}function y0(n){switch(n){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return c0;case 35668:case 35672:return l0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(n,t){n.uniform1fv(this.addr,t)}function M0(n,t){let e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function b0(n,t){let e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function S0(n,t){let e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function w0(n,t){let e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function E0(n,t){let e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function T0(n,t){let e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function A0(n,t){n.uniform1iv(this.addr,t)}function R0(n,t){n.uniform2iv(this.addr,t)}function C0(n,t){n.uniform3iv(this.addr,t)}function I0(n,t){n.uniform4iv(this.addr,t)}function P0(n,t){n.uniform1uiv(this.addr,t)}function D0(n,t){n.uniform2uiv(this.addr,t)}function L0(n,t){n.uniform3uiv(this.addr,t)}function U0(n,t){n.uniform4uiv(this.addr,t)}function N0(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||au,r[o])}function O0(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lu,r[o])}function F0(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hu,r[o])}function z0(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cu,r[o])}function B0(n){switch(n){case 5126:return v0;case 35664:return M0;case 35665:return b0;case 35666:return S0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return I0;case 5125:return P0;case 36294:return D0;case 36295:return L0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return z0}}var Dc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}},Lc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Zh(n,t){n.seq.push(t),n.map[t.id]=t}function k0(n,t,e){let i=n.name,s=i.length;for(Pc.lastIndex=0;;){let r=Pc.exec(i),o=Pc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zh(e,l===void 0?new Dc(a,n,t):new Lc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Uc(a),Zh(e,d)),e=d}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);k0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Jh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var H0=37297,V0=0;function G0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Kh=new Wt;function W0(n){Kt._getMatrix(Kh,Kt.workingColorSpace,n);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Is:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+G0(n.getShaderSource(t),a)}else return r}function X0(n,t){let e=W0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q0(n,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="Cineon";break;case uo:e="ACESFilmic";break;case mh:e="AgX";break;case gh:e="Neutral";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jo=new L;function Y0(){Kt.getLuminanceCoefficients(jo);let n=jo.x.toFixed(4),t=jo.y.toFixed(4),e=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Z0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function J0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function or(n){return n!==""}function Qh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(K0,Q0)}var j0=new Map;function Q0(n,t){let e=Ht[t];if(e===void 0){let i=j0.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(tg,eg)}function eg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ng(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case bi:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case hh:t="ENVMAP_BLENDING_ADD";break}return t}function og(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ag(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ng(e),l=ig(e),h=sg(e),d=rg(e),f=og(e),p=$0(e),g=Z0(r),x=s.createProgram(),m,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),u.length>0&&(u+=`
`)):(m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),u=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Bn?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Nc(o),o=Qh(o,e),o=tu(o,e),a=Nc(a),a=Qh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=S+m+o,_=S+u+a,A=Jh(s,s.VERTEX_SHADER,v),T=Jh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(I){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(T)||"",H=D.trim(),X=U.trim(),K=k.trim(),W=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,T);else{let G=jh(s,A,"vertex"),Q=jh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+G+`
`+Q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||K==="")&&(it=!1);it&&(I.diagnostics={runnable:W,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:u}})}s.deleteShader(A),s.deleteShader(T),R=new ds(s,x),b=J0(s,x)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,H0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var cg=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fc(t),e.set(t,i)),i}},Fc=class{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}};function lg(n,t,e,i,s,r,o){let a=new Us,c=new Oc,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,D,U){let k=D.fog,H=U.geometry,X=b.isMeshStandardMaterial?D.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),W=K&&K.mapping===tr?K.image.height:null,it=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Q=G!==void 0?G.length:0,ct=0;H.morphAttributes.position!==void 0&&(ct=1),H.morphAttributes.normal!==void 0&&(ct=2),H.morphAttributes.color!==void 0&&(ct=3);let pt,yt,tt,z;if(it){let ee=wn[it];pt=ee.vertexShader,yt=ee.fragmentShader}else pt=b.vertexShader,yt=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),z=c.getFragmentShaderID(b);let V=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),xt=U.isInstancedMesh===!0,ft=U.isBatchedMesh===!0,Rt=!!b.map,Jt=!!b.matcap,P=!!K,Vt=!!b.aoMap,bt=!!b.lightMap,nt=!!b.bumpMap,lt=!!b.normalMap,Qt=!!b.displacementMap,St=!!b.emissiveMap,Bt=!!b.metalnessMap,ye=!!b.roughnessMap,de=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,B=b.iridescence>0,Z=b.sheen>0,et=b.transmission>0,J=de&&!!b.anisotropyMap,Ct=C&&!!b.clearcoatMap,ht=C&&!!b.clearcoatNormalMap,It=C&&!!b.clearcoatRoughnessMap,Pt=B&&!!b.iridescenceMap,ot=B&&!!b.iridescenceThicknessMap,Mt=Z&&!!b.sheenColorMap,zt=Z&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,_t=!!b.specularColorMap,qt=!!b.specularIntensityMap,N=et&&!!b.transmissionMap,at=et&&!!b.thicknessMap,dt=!!b.gradientMap,Et=!!b.alphaMap,st=b.alphaTest>0,j=!!b.alphaHash,At=!!b.extensions,Gt=Bn;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let ae={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:yt,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ft,batchingColor:ft&&U._colorsTexture!==null,instancing:xt,instancingColor:xt&&U.instanceColor!==null,instancingMorph:xt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:mi,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:Jt,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:W,aoMap:Vt,lightMap:bt,bumpMap:nt,normalMap:lt,displacementMap:f&&Qt,emissiveMap:St,normalMapObjectSpace:lt&&b.normalMapType===vh,normalMapTangentSpace:lt&&b.normalMapType===gc,metalnessMap:Bt,roughnessMap:ye,anisotropy:de,anisotropyMap:J,clearcoat:C,clearcoatMap:Ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:y,iridescence:B,iridescenceMap:Pt,iridescenceThicknessMap:ot,sheen:Z,sheenColorMap:Mt,sheenRoughnessMap:zt,specularMap:Dt,specularColorMap:_t,specularIntensityMap:qt,transmission:et,transmissionMap:N,thicknessMap:at,gradientMap:dt,opaque:b.transparent===!1&&b.blending===di&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:st,alphaHash:j,combine:b.combine,mapUv:Rt&&x(b.map.channel),aoMapUv:Vt&&x(b.aoMap.channel),lightMapUv:bt&&x(b.lightMap.channel),bumpMapUv:nt&&x(b.bumpMap.channel),normalMapUv:lt&&x(b.normalMap.channel),displacementMapUv:Qt&&x(b.displacementMap.channel),emissiveMapUv:St&&x(b.emissiveMap.channel),metalnessMapUv:Bt&&x(b.metalnessMap.channel),roughnessMapUv:ye&&x(b.roughnessMap.channel),anisotropyMapUv:J&&x(b.anisotropyMap.channel),clearcoatMapUv:Ct&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(b.sheenRoughnessMap.channel),specularMapUv:Dt&&x(b.specularMap.channel),specularColorMapUv:_t&&x(b.specularColorMap.channel),specularIntensityMapUv:qt&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:at&&x(b.thicknessMap.channel),alphaMapUv:Et&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(lt||de),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Rt||Et),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===ne,decodeVideoTextureEmissive:St&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===ne,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ge,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:At&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&b.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(M,b),v(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],I;if(M){let D=wn[M];I=Ph.clone(D.uniforms)}else I=b.uniforms;return I}function A(b,M){let I;for(let D=0,U=h.length;D<U;D++){let k=h[D];if(k.cacheKey===M){I=k,++I.usedTimes;break}}return I===void 0&&(I=new ag(n,M,b,r),h.push(I)),I}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:R}}function hg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ug(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function su(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,g,x,m){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function a(d,f,p,g,x,m){let u=o(d,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,g,x,m){let u=o(d,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||ug),i.length>1&&i.sort(f||iu),s.length>1&&s.sort(f||iu)}function h(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function dg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new su,n.set(i,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function pg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var mg=0;function gg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xg(n){let t=new fg,e=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new pe,o=new pe;function a(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,S=0,v=0,_=0,A=0,T=0,E=0;l.sort(gg);for(let b=0,M=l.length;b<M;b++){let I=l[b],D=I.color,U=I.intensity,k=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*U,d+=D.g*U,f+=D.b*U;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],U);E++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,W=e.get(I);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=I.shadow.matrix,S++}i.directional[p]=X,p++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(D).multiplyScalar(U),X.distance=k,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[x]=X;let K=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,K.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[x]=K.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=H,_++}x++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(D).multiplyScalar(U),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=X,m++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let K=I.shadow,W=e.get(I);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(U),X.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[u]=X,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==A||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=A,R.numLightProbes=E,i.version=mg++)}function c(l,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){let v=l[u];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function ru(n){let t=new xg(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _g(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ru(n),t.set(s,[a])):r>=o.length?(a=new ru(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`;function Mg(n,t,e){let i=new es,s=new Ft,r=new Ft,o=new he,a=new qr({depthPacking:yh}),c=new Yr,l={},h=e.maxTextureSize,d={[Un]:Ve,[Ve]:Un,[Ge]:Ge},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:yg,fragmentShader:vg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let u=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),D=n.state;D.setBlending(zn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=u!==bn&&this.type===bn,k=u===bn&&this.type!==bn;for(let H=0,X=T.length;H<X;H++){let K=T[H],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||U===!0||k===!0){let Q=this.type!==bn?{minFilter:Pe,magFilter:Pe}:{};W.map!==null&&W.map.dispose(),W.map=new vn(s.x,s.y,Q),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let G=W.getViewportCount();for(let Q=0;Q<G;Q++){let ct=W.getViewport(Q);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),D.viewport(o),W.updateMatrices(K,Q),i=W.getFrustum(),_(E,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===bn&&S(W,R),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,I)};function S(T,E){let R=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,R,p,x,null)}function v(T,E,R,b){let M=null,I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=M.uuid,U=E.uuid,k=l[D];k===void 0&&(k={},l[D]=k);let H=k[U];H===void 0&&(H=M.clone(),k[U]=H,E.addEventListener("dispose",A)),M=H}if(M.visible=E.visible,M.wireframe=E.wireframe,b===bn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=R}return M}function _(T,E,R,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let U=t.update(T),k=T.material;if(Array.isArray(k)){let H=U.groups;for(let X=0,K=H.length;X<K;X++){let W=H[X],it=k[W.materialIndex];if(it&&it.visible){let G=v(T,it,b,M);T.onBeforeShadow(n,T,E,R,U,G,W),n.renderBufferDirect(R,null,U,G,T,W),T.onAfterShadow(n,T,E,R,U,G,W)}}}else if(k.visible){let H=v(T,k,b,M);T.onBeforeShadow(n,T,E,R,U,H,null),n.renderBufferDirect(R,null,U,H,T,null),T.onAfterShadow(n,T,E,R,U,H,null)}}let D=T.children;for(let U=0,k=D.length;U<k;U++)_(D[U],E,R,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(let R in l){let b=l[R],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var bg={[so]:ro,[oo]:lo,[ao]:ho,[fi]:co,[ro]:so,[lo]:oo,[ho]:ao,[co]:fi};function Sg(n,t){function e(){let N=!1,at=new he,dt=null,Et=new he(0,0,0,0);return{setMask:function(st){dt!==st&&!N&&(n.colorMask(st,st,st,st),dt=st)},setLocked:function(st){N=st},setClear:function(st,j,At,Gt,ae){ae===!0&&(st*=Gt,j*=Gt,At*=Gt),at.set(st,j,At,Gt),Et.equals(at)===!1&&(n.clearColor(st,j,At,Gt),Et.copy(at))},reset:function(){N=!1,dt=null,Et.set(-1,0,0,0)}}}function i(){let N=!1,at=!1,dt=null,Et=null,st=null;return{setReversed:function(j){if(at!==j){let At=t.get("EXT_clip_control");j?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),at=j;let Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return at},setTest:function(j){j?V(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(j){dt!==j&&!N&&(n.depthMask(j),dt=j)},setFunc:function(j){if(at&&(j=bg[j]),Et!==j){switch(j){case so:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case oo:n.depthFunc(n.LESS);break;case fi:n.depthFunc(n.LEQUAL);break;case ao:n.depthFunc(n.EQUAL);break;case co:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=j}},setLocked:function(j){N=j},setClear:function(j){st!==j&&(at&&(j=1-j),n.clearDepth(j),st=j)},reset:function(){N=!1,dt=null,Et=null,st=null,at=!1}}}function s(){let N=!1,at=null,dt=null,Et=null,st=null,j=null,At=null,Gt=null,ae=null;return{setTest:function(ee){N||(ee?V(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(ee){at!==ee&&!N&&(n.stencilMask(ee),at=ee)},setFunc:function(ee,An,_n){(dt!==ee||Et!==An||st!==_n)&&(n.stencilFunc(ee,An,_n),dt=ee,Et=An,st=_n)},setOp:function(ee,An,_n){(j!==ee||At!==An||Gt!==_n)&&(n.stencilOp(ee,An,_n),j=ee,At=An,Gt=_n)},setLocked:function(ee){N=ee},setClear:function(ee){ae!==ee&&(n.clearStencil(ee),ae=ee)},reset:function(){N=!1,at=null,dt=null,Et=null,st=null,j=null,At=null,Gt=null,ae=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,S=null,v=null,_=null,A=null,T=null,E=new Xt(0,0,0),R=0,b=!1,M=null,I=null,D=null,U=null,k=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=K>=2);let it=null,G={},Q=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),pt=new he().fromArray(Q),yt=new he().fromArray(ct);function tt(N,at,dt,Et){let st=new Uint8Array(4),j=n.createTexture();n.bindTexture(N,j),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<dt;At++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(at+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return j}let z={};z[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(fi),nt(!1),lt(ec),V(n.CULL_FACE),Vt(zn);function V(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function $(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function xt(N,at){return d[N]!==at?(n.bindFramebuffer(N,at),d[N]=at,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=at),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=at),!0):!1}function ft(N,at){let dt=p,Et=!1;if(N){dt=f.get(at),dt===void 0&&(dt=[],f.set(at,dt));let st=N.textures;if(dt.length!==st.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let j=0,At=st.length;j<At;j++)dt[j]=n.COLOR_ATTACHMENT0+j;dt.length=st.length,Et=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,Et=!0);Et&&n.drawBuffers(dt)}function Rt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Jt={[Jn]:n.FUNC_ADD,[ql]:n.FUNC_SUBTRACT,[Yl]:n.FUNC_REVERSE_SUBTRACT};Jt[$l]=n.MIN,Jt[Zl]=n.MAX;let P={[Jl]:n.ZERO,[Kl]:n.ONE,[jl]:n.SRC_COLOR,[Ur]:n.SRC_ALPHA,[sh]:n.SRC_ALPHA_SATURATE,[nh]:n.DST_COLOR,[th]:n.DST_ALPHA,[Ql]:n.ONE_MINUS_SRC_COLOR,[Nr]:n.ONE_MINUS_SRC_ALPHA,[ih]:n.ONE_MINUS_DST_COLOR,[eh]:n.ONE_MINUS_DST_ALPHA,[rh]:n.CONSTANT_COLOR,[oh]:n.ONE_MINUS_CONSTANT_COLOR,[ah]:n.CONSTANT_ALPHA,[ch]:n.ONE_MINUS_CONSTANT_ALPHA};function Vt(N,at,dt,Et,st,j,At,Gt,ae,ee){if(N===zn){x===!0&&($(n.BLEND),x=!1);return}if(x===!1&&(V(n.BLEND),x=!0),N!==Xl){if(N!==m||ee!==b){if((u!==Jn||_!==Jn)&&(n.blendEquation(n.FUNC_ADD),u=Jn,_=Jn),ee)switch(N){case di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,v=null,A=null,T=null,E.set(0,0,0),R=0,m=N,b=ee}return}st=st||at,j=j||dt,At=At||Et,(at!==u||st!==_)&&(n.blendEquationSeparate(Jt[at],Jt[st]),u=at,_=st),(dt!==S||Et!==v||j!==A||At!==T)&&(n.blendFuncSeparate(P[dt],P[Et],P[j],P[At]),S=dt,v=Et,A=j,T=At),(Gt.equals(E)===!1||ae!==R)&&(n.blendColor(Gt.r,Gt.g,Gt.b,ae),E.copy(Gt),R=ae),m=N,b=!1}function bt(N,at){N.side===Ge?$(n.CULL_FACE):V(n.CULL_FACE);let dt=N.side===Ve;at&&(dt=!dt),nt(dt),N.blending===di&&N.transparent===!1?Vt(zn):Vt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Et=N.stencilWrite;a.setTest(Et),Et&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),St(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function lt(N){N!==Vl?(V(n.CULL_FACE),N!==I&&(N===ec?n.cullFace(n.BACK):N===Gl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),I=N}function Qt(N){N!==D&&(X&&n.lineWidth(N),D=N)}function St(N,at,dt){N?(V(n.POLYGON_OFFSET_FILL),(U!==at||k!==dt)&&(n.polygonOffset(at,dt),U=at,k=dt)):$(n.POLYGON_OFFSET_FILL)}function Bt(N){N?V(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function ye(N){N===void 0&&(N=n.TEXTURE0+H-1),it!==N&&(n.activeTexture(N),it=N)}function de(N,at,dt){dt===void 0&&(it===null?dt=n.TEXTURE0+H-1:dt=it);let Et=G[dt];Et===void 0&&(Et={type:void 0,texture:void 0},G[dt]=Et),(Et.type!==N||Et.texture!==at)&&(it!==dt&&(n.activeTexture(dt),it=dt),n.bindTexture(N,at||z[N]),Et.type=N,Et.texture=at)}function C(){let N=G[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(N){pt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),pt.copy(N))}function zt(N){yt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),yt.copy(N))}function Dt(N,at){let dt=l.get(at);dt===void 0&&(dt=new WeakMap,l.set(at,dt));let Et=dt.get(N);Et===void 0&&(Et=n.getUniformBlockIndex(at,N.name),dt.set(N,Et))}function _t(N,at){let Et=l.get(at).get(N);c.get(at)!==Et&&(n.uniformBlockBinding(at,Et,N.__bindingPointIndex),c.set(at,Et))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,G={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,S=null,v=null,_=null,A=null,T=null,E=new Xt(0,0,0),R=0,b=!1,M=null,I=null,D=null,U=null,k=null,pt.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:$,bindFramebuffer:xt,drawBuffers:ft,useProgram:Rt,setBlending:Vt,setMaterial:bt,setFlipSided:nt,setCullFace:lt,setLineWidth:Qt,setPolygonOffset:St,setScissorTest:Bt,activeTexture:ye,bindTexture:de,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Pt,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:_t,texStorage2D:ht,texStorage3D:It,texSubImage2D:Z,texSubImage3D:et,compressedTexSubImage2D:J,compressedTexSubImage3D:Ct,scissor:Mt,viewport:zt,reset:qt}}function wg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Ds("canvas")}function x(C,y,B){let Z=1,et=de(C);if((et.width>B||et.height>B)&&(Z=B/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(Z*et.width),Ct=Math.floor(Z*et.height);d===void 0&&(d=g(J,Ct));let ht=y?g(J,Ct):d;return ht.width=J,ht.height=Ct,ht.getContext("2d").drawImage(C,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Ct+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,y,B,Z,et=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=y;if(y===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),y===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let Ct=et?Is:Kt.getTransfer(Z);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Ct===ne?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(C,y){let B;return C?y===null||y===ii||y===as?B=n.DEPTH24_STENCIL8:y===on?B=n.DEPTH32F_STENCIL8:y===rs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===as?B=n.DEPTH_COMPONENT24:y===on?B=n.DEPTH_COMPONENT32F:y===rs&&(B=n.DEPTH_COMPONENT16),B}function A(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pe&&C.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){let y=C.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&h.delete(y)}function E(C){let y=C.target;y.removeEventListener("dispose",E),M(y)}function R(C){let y=i.get(C);if(y.__webglInit===void 0)return;let B=C.source,Z=f.get(B);if(Z){let et=Z[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(C),Object.keys(Z).length===0&&f.delete(B)}i.remove(C)}function b(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let B=C.source,Z=f.get(B);delete Z[y.__cacheKey],o.memory.textures--}function M(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let et=0;et<y.__webglFramebuffer[Z].length;et++)n.deleteFramebuffer(y.__webglFramebuffer[Z][et]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=C.textures;for(let Z=0,et=B.length;Z<et;Z++){let J=i.get(B[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(C)}let I=0;function D(){I=0}function U(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function k(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function H(C,y){let B=i.get(C);if(C.isVideoTexture&&Bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function X(C,y){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){z(B,C,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function K(C,y){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){z(B,C,y);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function W(C,y){let B=i.get(C);if(C.version>0&&B.__version!==C.version){V(B,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let it={[pi]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Or]:n.MIRRORED_REPEAT},G={[Pe]:n.NEAREST,[xh]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[Sn]:n.LINEAR_MIPMAP_LINEAR},Q={[Mh]:n.NEVER,[Ah]:n.ALWAYS,[bh]:n.LESS,[xc]:n.LEQUAL,[Sh]:n.EQUAL,[Th]:n.GEQUAL,[wh]:n.GREATER,[Eh]:n.NOTEQUAL};function ct(C,y){if(y.type===on&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ke||y.magFilter===mo||y.magFilter===er||y.magFilter===Sn||y.minFilter===Ke||y.minFilter===mo||y.minFilter===er||y.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,it[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,it[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,it[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,G[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pe||y.minFilter!==er&&y.minFilter!==Sn||y.type===on&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function pt(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));let Z=y.source,et=f.get(Z);et===void 0&&(et={},f.set(Z,et));let J=k(y);if(J!==C.__cacheKey){et[J]===void 0&&(et[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[J].usedTimes++;let Ct=et[C.__cacheKey];Ct!==void 0&&(et[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(y)),C.__cacheKey=J,C.__webglTexture=et[J].texture}return B}function yt(C,y,B){return Math.floor(Math.floor(C/B)/y)}function tt(C,y,B,Z){let J=C.updateRanges;if(J.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,Z,y.data);else{J.sort((ot,Mt)=>ot.start-Mt.start);let Ct=0;for(let ot=1;ot<J.length;ot++){let Mt=J[Ct],zt=J[ot],Dt=Mt.start+Mt.count,_t=yt(zt.start,y.width,4),qt=yt(Mt.start,y.width,4);zt.start<=Dt+1&&_t===qt&&yt(zt.start+zt.count-1,y.width,4)===_t?Mt.count=Math.max(Mt.count,zt.start+zt.count-Mt.start):(++Ct,J[Ct]=zt)}J.length=Ct+1;let ht=n.getParameter(n.UNPACK_ROW_LENGTH),It=n.getParameter(n.UNPACK_SKIP_PIXELS),Pt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ot=0,Mt=J.length;ot<Mt;ot++){let zt=J[ot],Dt=Math.floor(zt.start/4),_t=Math.ceil(zt.count/4),qt=Dt%y.width,N=Math.floor(Dt/y.width),at=_t,dt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,qt,N,at,dt,B,Z,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ht),n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function z(C,y,B){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);let et=pt(C,y),J=y.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+B);let Ct=i.get(J);if(J.version!==Ct.__version||et===!0){e.activeTexture(n.TEXTURE0+B);let ht=Kt.getPrimaries(Kt.workingColorSpace),It=y.colorSpace===kn?null:Kt.getPrimaries(y.colorSpace),Pt=y.colorSpace===kn||ht===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ot=x(y.image,!1,s.maxTextureSize);ot=ye(y,ot);let Mt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Dt=v(y.internalFormat,Mt,zt,y.colorSpace,y.isVideoTexture);ct(Z,y);let _t,qt=y.mipmaps,N=y.isVideoTexture!==!0,at=Ct.__version===void 0||et===!0,dt=J.dataReady,Et=A(y,ot);if(y.isDepthTexture)Dt=_(y.format===cs,y.type),at&&(N?e.texStorage2D(n.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,Mt,zt,null));else if(y.isDataTexture)if(qt.length>0){N&&at&&e.texStorage2D(n.TEXTURE_2D,Et,Dt,qt[0].width,qt[0].height);for(let st=0,j=qt.length;st<j;st++)_t=qt[st],N?dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,Mt,zt,_t.data):e.texImage2D(n.TEXTURE_2D,st,Dt,_t.width,_t.height,0,Mt,zt,_t.data);y.generateMipmaps=!1}else N?(at&&e.texStorage2D(n.TEXTURE_2D,Et,Dt,ot.width,ot.height),dt&&tt(y,ot,Mt,zt)):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,Mt,zt,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Dt,qt[0].width,qt[0].height,ot.depth);for(let st=0,j=qt.length;st<j;st++)if(_t=qt[st],y.format!==Fe)if(Mt!==null)if(N){if(dt)if(y.layerUpdates.size>0){let At=Ec(_t.width,_t.height,y.format,y.type);for(let Gt of y.layerUpdates){let ae=_t.data.subarray(Gt*At/_t.data.BYTES_PER_ELEMENT,(Gt+1)*At/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Gt,_t.width,_t.height,1,Mt,ae)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,ot.depth,Mt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Dt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,ot.depth,Mt,zt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Dt,_t.width,_t.height,ot.depth,0,Mt,zt,_t.data)}else{N&&at&&e.texStorage2D(n.TEXTURE_2D,Et,Dt,qt[0].width,qt[0].height);for(let st=0,j=qt.length;st<j;st++)_t=qt[st],y.format!==Fe?Mt!==null?N?dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,Mt,zt,_t.data):e.texImage2D(n.TEXTURE_2D,st,Dt,_t.width,_t.height,0,Mt,zt,_t.data)}else if(y.isDataArrayTexture)if(N){if(at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Dt,ot.width,ot.height,ot.depth),dt)if(y.layerUpdates.size>0){let st=Ec(ot.width,ot.height,y.format,y.type);for(let j of y.layerUpdates){let At=ot.data.subarray(j*st/ot.data.BYTES_PER_ELEMENT,(j+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ot.width,ot.height,1,Mt,zt,At)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Mt,zt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,Mt,zt,ot.data);else if(y.isData3DTexture)N?(at&&e.texStorage3D(n.TEXTURE_3D,Et,Dt,ot.width,ot.height,ot.depth),dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Mt,zt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,Mt,zt,ot.data);else if(y.isFramebufferTexture){if(at)if(N)e.texStorage2D(n.TEXTURE_2D,Et,Dt,ot.width,ot.height);else{let st=ot.width,j=ot.height;for(let At=0;At<Et;At++)e.texImage2D(n.TEXTURE_2D,At,Dt,st,j,0,Mt,zt,null),st>>=1,j>>=1}}else if(qt.length>0){if(N&&at){let st=de(qt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Dt,st.width,st.height)}for(let st=0,j=qt.length;st<j;st++)_t=qt[st],N?dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Mt,zt,_t):e.texImage2D(n.TEXTURE_2D,st,Dt,Mt,zt,_t);y.generateMipmaps=!1}else if(N){if(at){let st=de(ot);e.texStorage2D(n.TEXTURE_2D,Et,Dt,st.width,st.height)}dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,zt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Dt,Mt,zt,ot);m(y)&&u(Z),Ct.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function V(C,y,B){if(y.image.length!==6)return;let Z=pt(C,y),et=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let J=i.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);let Ct=Kt.getPrimaries(Kt.workingColorSpace),ht=y.colorSpace===kn?null:Kt.getPrimaries(y.colorSpace),It=y.colorSpace===kn||Ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let j=0;j<6;j++)!Pt&&!ot?Mt[j]=x(y.image[j],!0,s.maxCubemapSize):Mt[j]=ot?y.image[j].image:y.image[j],Mt[j]=ye(y,Mt[j]);let zt=Mt[0],Dt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),qt=v(y.internalFormat,Dt,_t,y.colorSpace),N=y.isVideoTexture!==!0,at=J.__version===void 0||Z===!0,dt=et.dataReady,Et=A(y,zt);ct(n.TEXTURE_CUBE_MAP,y);let st;if(Pt){N&&at&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,qt,zt.width,zt.height);for(let j=0;j<6;j++){st=Mt[j].mipmaps;for(let At=0;At<st.length;At++){let Gt=st[At];y.format!==Fe?Dt!==null?N?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,Gt.width,Gt.height,Dt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,qt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,Gt.width,Gt.height,Dt,_t,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,qt,Gt.width,Gt.height,0,Dt,_t,Gt.data)}}}else{if(st=y.mipmaps,N&&at){st.length>0&&Et++;let j=de(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,qt,j.width,j.height)}for(let j=0;j<6;j++)if(ot){N?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Mt[j].width,Mt[j].height,Dt,_t,Mt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Mt[j].width,Mt[j].height,0,Dt,_t,Mt[j].data);for(let At=0;At<st.length;At++){let ae=st[At].image[j].image;N?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,ae.width,ae.height,Dt,_t,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,qt,ae.width,ae.height,0,Dt,_t,ae.data)}}else{N?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,_t,Mt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Dt,_t,Mt[j]);for(let At=0;At<st.length;At++){let Gt=st[At];N?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Dt,_t,Gt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,qt,Dt,_t,Gt.image[j])}}}m(y)&&u(n.TEXTURE_CUBE_MAP),J.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function $(C,y,B,Z,et,J){let Ct=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),It=v(B.internalFormat,Ct,ht,B.colorSpace),Pt=i.get(y),ot=i.get(B);if(ot.__renderTarget=y,!Pt.__hasExternalTextures){let Mt=Math.max(1,y.width>>J),zt=Math.max(1,y.height>>J);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,J,It,Mt,zt,y.depth,0,Ct,ht,null):e.texImage2D(et,J,It,Mt,zt,0,Ct,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,et,ot.__webglTexture,0,Qt(y)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,et,ot.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(C,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let Z=y.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=_(y.stencilBuffer,et),Ct=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Qt(y);St(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,J,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,C)}else{let Z=y.textures;for(let et=0;et<Z.length;et++){let J=Z[et],Ct=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),It=v(J.internalFormat,Ct,ht,J.colorSpace),Pt=Qt(y);B&&St(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,It,y.width,y.height):St(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,It,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,It,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let et=Z.__webglTexture,J=Qt(y);if(y.depthTexture.format===Zi)St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(y.depthTexture.format===cs)St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Rt(C){let y=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?ft(y.__webglFramebuffer[0],C):ft(y.__webglFramebuffer,C)}else if(B){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),xt(y.__webglDepthbuffer[Z],C,!1);else{let et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,J)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),xt(y.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,J)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,y,B){let Z=i.get(C);y!==void 0&&$(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Rt(C)}function P(C){let y=C.texture,B=i.get(C),Z=i.get(y);C.addEventListener("dispose",E);let et=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let It=0;It<y.mipmaps.length;It++)B.__webglFramebuffer[ht][It]=n.createFramebuffer()}else B.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)B.__webglFramebuffer[ht]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ht=0,It=et.length;ht<It;ht++){let Pt=i.get(et[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let It=et[ht];B.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);let Pt=r.convert(It.format,It.colorSpace),ot=r.convert(It.type),Mt=v(It.internalFormat,Pt,ot,It.colorSpace,C.isXRRenderTarget===!0),zt=Qt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ct(n.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)$(B.__webglFramebuffer[ht][It],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else $(B.__webglFramebuffer[ht],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,It=et.length;ht<It;ht++){let Pt=et[ht],ot=i.get(Pt),Mt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ot.__webglTexture),ct(Mt,Pt),$(B.__webglFramebuffer,C,Pt,n.COLOR_ATTACHMENT0+ht,Mt,0),m(Pt)&&u(Mt)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),ct(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)$(B.__webglFramebuffer[It],C,y,n.COLOR_ATTACHMENT0,ht,It);else $(B.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,ht,0);m(y)&&u(ht),e.unbindTexture()}C.depthBuffer&&Rt(C)}function Vt(C){let y=C.textures;for(let B=0,Z=y.length;B<Z;B++){let et=y[B];if(m(et)){let J=S(C),Ct=i.get(et).__webglTexture;e.bindTexture(J,Ct),u(J),e.unbindTexture()}}}let bt=[],nt=[];function lt(C){if(C.samples>0){if(St(C)===!1){let y=C.textures,B=C.width,Z=C.height,et=n.COLOR_BUFFER_BIT,J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(C),ht=y.length>1;if(ht)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let It=C.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let ot=i.get(y[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,et,n.NEAREST),c===!0&&(bt.length=0,nt.length=0,bt.push(n.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(J),nt.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let ot=i.get(y[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function St(C){let y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Bt(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ye(C,y){let B=C.colorSpace,Z=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==mi&&B!==kn&&(Kt.getTransfer(B)===ne?(Z!==Fe||et!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Jt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=St}function Eg(n,t){function e(i,s=kn){let r,o=Kt.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cc)return n.BYTE;if(i===lc)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===go)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===dc)return n.ALPHA;if(i===fc)return n.RGB;if(i===Fe)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===pc)return n.RED;if(i===yo)return n.RED_INTEGER;if(i===mc)return n.RG;if(i===vo)return n.RG_INTEGER;if(i===Mo)return n.RGBA_INTEGER;if(i===nr||i===ir||i===sr||i===rr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===So||i===wo||i===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===To||i===Ao||i===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===To||i===Ao)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ro)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Co||i===Io||i===Po||i===Do||i===Lo||i===Uo||i===No||i===Oo||i===Fo||i===zo||i===Bo||i===ko||i===Ho||i===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Co)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Po)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Do)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===No)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ko)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ho)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Wo||i===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Go)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qo||i===Yo||i===$o||i===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new je({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends yn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new zc,u={},S=e.getContextAttributes(),v=null,_=null,A=[],T=[],E=new Ft,R=null,b=new Oe;b.viewport=new he;let M=new Oe;M.viewport=new he;let I=[b,M],D=new io,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=A[z];return V===void 0&&(V=new ts,A[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=A[z];return V===void 0&&(V=new ts,A[z]=V),V.getGripSpace()},this.getHand=function(z){let V=A[z];return V===void 0&&(V=new ts,A[z]=V),V.getHandSpace()};function H(z){let V=T.indexOf(z.inputSource);if(V===-1)return;let $=A[V];$!==void 0&&($.update(z.inputSource,z.frame,l||o),$.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let z=0;z<A.length;z++){let V=T[z];V!==null&&(T[z]=null,A[z].disconnect(V))}U=null,k=null,m.reset();for(let z in u)delete u[z];t.setRenderTarget(v),p=null,f=null,d=null,s=null,_=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,xt=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=S.stencil?cs:Zi,xt=S.stencil?as:ii);let Rt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new vn(f.textureWidth,f.textureHeight,{format:Fe,type:mn,depthTexture:new Vs(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let $={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new vn(p.framebufferWidth,p.framebufferHeight,{format:Fe,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(z){for(let V=0;V<z.removed.length;V++){let $=z.removed[V],xt=T.indexOf($);xt>=0&&(T[xt]=null,A[xt].disconnect($))}for(let V=0;V<z.added.length;V++){let $=z.added[V],xt=T.indexOf($);if(xt===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=T.length){T.push($),xt=Rt;break}else if(T[Rt]===null){T[Rt]=$,xt=Rt;break}if(xt===-1)break}let ft=A[xt];ft&&ft.connect($)}}let W=new L,it=new L;function G(z,V,$){W.setFromMatrixPosition(V.matrixWorld),it.setFromMatrixPosition($.matrixWorld);let xt=W.distanceTo(it),ft=V.projectionMatrix.elements,Rt=$.projectionMatrix.elements,Jt=ft[14]/(ft[10]-1),P=ft[14]/(ft[10]+1),Vt=(ft[9]+1)/ft[5],bt=(ft[9]-1)/ft[5],nt=(ft[8]-1)/ft[0],lt=(Rt[8]+1)/Rt[0],Qt=Jt*nt,St=Jt*lt,Bt=xt/(-nt+lt),ye=Bt*-nt;if(V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ye),z.translateZ(Bt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ft[10]===-1)z.projectionMatrix.copy(V.projectionMatrix),z.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let de=Jt+Bt,C=P+Bt,y=Qt-ye,B=St+(xt-ye),Z=Vt*P/C*de,et=bt*P/C*de;z.projectionMatrix.makePerspective(y,B,Z,et,de,C),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Q(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let V=z.near,$=z.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&($=m.depthFar)),D.near=M.near=b.near=V,D.far=M.far=b.far=$,(U!==D.near||k!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,k=D.far),D.layers.mask=z.layers.mask|6,b.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let xt=z.parent,ft=D.cameras;Q(D,xt);for(let Rt=0;Rt<ft.length;Rt++)Q(ft[Rt],xt);ft.length===2?G(D,b,M):D.projectionMatrix.copy(b.projectionMatrix),ct(z,D,xt)};function ct(z,V,$){$===null?z.matrix.copy(V.matrixWorld):(z.matrix.copy($.matrixWorld),z.matrix.invert(),z.matrix.multiply(V.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(V.projectionMatrix),z.projectionMatrixInverse.copy(V.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ji*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(z){return u[z]};let pt=null;function yt(z,V){if(h=V.getViewerPose(l||o),g=V,h!==null){let $=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let xt=!1;$.length!==D.cameras.length&&(D.cameras.length=0,xt=!0);for(let P=0;P<$.length;P++){let Vt=$[P],bt=null;if(p!==null)bt=p.getViewport(Vt);else{let lt=d.getViewSubImage(f,Vt);bt=lt.viewport,P===0&&(t.setRenderTargetTextures(_,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(_))}let nt=I[P];nt===void 0&&(nt=new Oe,nt.layers.enable(P),nt.viewport=new he,I[P]=nt),nt.matrix.fromArray(Vt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Vt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(bt.x,bt.y,bt.width,bt.height),P===0&&(D.matrix.copy(nt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xt===!0&&D.cameras.push(nt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let P=d.getDepthInformation($[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let P=0;P<$.length;P++){let Vt=$[P].camera;if(Vt){let bt=u[Vt];bt||(bt=new Gs,u[Vt]=bt);let nt=d.getCameraImage(Vt);bt.sourceTexture=nt}}}}for(let $=0;$<A.length;$++){let xt=T[$],ft=A[$];xt!==null&&ft!==void 0&&ft.update(xt,V,l||o)}pt&&pt(z,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}let tt=new ou;tt.setAnimationLoop(yt),this.setAnimationLoop=function(z){pt=z},this.dispose=function(){}}},Ei=new pn,Rg=new pe;function Cg(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,bc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,S,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,S,v):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ve&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ve&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let S=t.get(u),v=S.envMap,_=S.envMapRotation;v&&(m.envMap.value=v,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Ei)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,S,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=v*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let S=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ig(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let _=v.program;i.uniformBlockBinding(S,_)}function l(S,v){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(S,A);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let v=d();S.__bindingPointIndex=v;let _=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let v=s[S.id],_=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,E=_.length;T<E;T++){let R=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=R.length;b<M;b++){let I=R[b];if(p(I,T,b,A)===!0){let D=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],k=0;for(let H=0;H<U.length;H++){let X=U[H],K=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,D+k,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,v,_,A){let T=S.value,E=v+"_"+_;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let R=A[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){let v=S.uniforms,_=0,A=16;for(let E=0,R=v.length;E<R;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,I=b.length;M<I;M++){let D=b[M],U=Array.isArray(D.value)?D.value:[D.value];for(let k=0,H=U.length;k<H;k++){let X=U[k],K=x(X),W=_%A,it=W%K.boundary,G=W+it;_+=it,G!==0&&A-G<K.storage&&(_+=A-G),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=K.storage}}}let T=_%A;return T>0&&(_+=A-T),S.__size=_,S.__cache={},this}function x(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var ta=class{constructor(t={}){let{canvas:e=Rh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=be;let T=0,E=0,R=null,b=-1,M=null,I=new he,D=new he,U=null,k=new Xt(0),H=0,X=e.width,K=e.height,W=1,it=null,G=null,Q=new he(0,0,X,K),ct=new he(0,0,X,K),pt=!1,yt=new es,tt=!1,z=!1,V=new pe,$=new L,xt=new he,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Jt(){return R===null?W:1}let P=i;function Vt(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",st,!1),P===null){let O="webgl2";if(P=Vt(O,w),P===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let bt,nt,lt,Qt,St,Bt,ye,de,C,y,B,Z,et,J,Ct,ht,It,Pt,ot,Mt,zt,Dt,_t,qt;function N(){bt=new $m(P),bt.init(),Dt=new Eg(P,bt),nt=new Hm(P,bt,t,Dt),lt=new Sg(P,bt),nt.reversedDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Qt=new Km(P),St=new hg,Bt=new wg(P,bt,lt,St,nt,Dt,Qt),ye=new Gm(_),de=new Ym(_),C=new nf(P),_t=new Bm(P,C),y=new Zm(P,C,Qt,_t),B=new Qm(P,y,C,Qt),ot=new jm(P,nt,Bt),ht=new Vm(St),Z=new lg(_,ye,de,bt,nt,_t,ht),et=new Cg(_,St),J=new dg,Ct=new _g(bt),Pt=new zm(_,ye,de,lt,B,p,c),It=new Mg(_,B,nt),qt=new Ig(P,Qt,nt,lt),Mt=new km(P,bt,Qt),zt=new Jm(P,bt,Qt),Qt.programs=Z.programs,_.capabilities=nt,_.extensions=bt,_.properties=St,_.renderLists=J,_.shadowMap=It,_.state=lt,_.info=Qt}N();let at=new Bc(_,P);this.xr=at,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(X,K,!1))},this.getSize=function(w){return w.set(X,K)},this.setSize=function(w,O,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,K=O,e.width=Math.floor(w*W),e.height=Math.floor(O*W),q===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*W,K*W).floor()},this.setDrawingBufferSize=function(w,O,q){X=w,K=O,W=q,e.width=Math.floor(w*q),e.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,O,q,Y){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,q,Y),lt.viewport(I.copy(Q).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,O,q,Y){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,O,q,Y),lt.scissor(D.copy(ct).multiplyScalar(W).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){lt.setScissorTest(pt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,q=!0){let Y=0;if(w){let F=!1;if(R!==null){let rt=R.texture.format;F=rt===Mo||rt===vo||rt===yo}if(F){let rt=R.texture.type,vt=rt===mn||rt===ii||rt===rs||rt===as||rt===xo||rt===_o,Tt=Pt.getClearColor(),wt=Pt.getClearAlpha(),Ot=Tt.r,kt=Tt.g,Ut=Tt.b;vt?(g[0]=Ot,g[1]=kt,g[2]=Ut,g[3]=wt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ot,x[1]=kt,x[2]=Ut,x[3]=wt,P.clearBufferiv(P.COLOR,0,x))}else Y|=P.COLOR_BUFFER_BIT}O&&(Y|=P.DEPTH_BUFFER_BIT),q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Pt.dispose(),J.dispose(),Ct.dispose(),St.dispose(),ye.dispose(),de.dispose(),B.dispose(),_t.dispose(),qt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",_n),at.removeEventListener("sessionend",ll),ri.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Qt.autoReset,O=It.enabled,q=It.autoUpdate,Y=It.needsUpdate,F=It.type;N(),Qt.autoReset=w,It.enabled=O,It.autoUpdate=q,It.needsUpdate=Y,It.type=F}function st(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function j(w){let O=w.target;O.removeEventListener("dispose",j),At(O)}function At(w){Gt(w),St.remove(w)}function Gt(w){let O=St.get(w).programs;O!==void 0&&(O.forEach(function(q){Z.releaseProgram(q)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,Y,F,rt){O===null&&(O=ft);let vt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=Bu(w,O,q,Y,F);lt.setMaterial(Y,vt);let wt=q.index,Ot=1;if(Y.wireframe===!0){if(wt=y.getWireframeAttribute(q),wt===void 0)return;Ot=2}let kt=q.drawRange,Ut=q.attributes.position,$t=kt.start*Ot,ie=(kt.start+kt.count)*Ot;rt!==null&&($t=Math.max($t,rt.start*Ot),ie=Math.min(ie,(rt.start+rt.count)*Ot)),wt!==null?($t=Math.max($t,0),ie=Math.min(ie,wt.count)):Ut!=null&&($t=Math.max($t,0),ie=Math.min(ie,Ut.count));let _e=ie-$t;if(_e<0||_e===1/0)return;_t.setup(F,Y,Tt,q,wt);let ce,re=Mt;if(wt!==null&&(ce=C.get(wt),re=zt,re.setIndex(ce)),F.isMesh)Y.wireframe===!0?(lt.setLineWidth(Y.wireframeLinewidth*Jt()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(F.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),lt.setLineWidth(Nt*Jt()),F.isLineSegments?re.setMode(P.LINES):F.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else F.isPoints?re.setMode(P.POINTS):F.isSprite&&re.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Nt=F._multiDrawStarts,me=F._multiDrawCounts,te=F._multiDrawCount,Ye=wt?C.get(wt).bytesPerElement:1,Ui=St.get(Y).currentProgram.getUniforms();for(let $e=0;$e<te;$e++)Ui.setValue(P,"_gl_DrawID",$e),re.render(Nt[$e]/Ye,me[$e])}else if(F.isInstancedMesh)re.renderInstances($t,_e,F.count);else if(q.isInstancedBufferGeometry){let Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,me=Math.min(q.instanceCount,Nt);re.renderInstances($t,_e,me)}else re.render($t,_e)};function ae(w,O,q){w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,hr(w,O,q),w.side=Un,w.needsUpdate=!0,hr(w,O,q),w.side=Ge):hr(w,O,q)}this.compile=function(w,O,q=null){q===null&&(q=w),u=Ct.get(q),u.init(O),v.push(u),q.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),w!==q&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();let Y=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let rt=F.material;if(rt)if(Array.isArray(rt))for(let vt=0;vt<rt.length;vt++){let Tt=rt[vt];ae(Tt,q,F),Y.add(Tt)}else ae(rt,q,F),Y.add(rt)}),u=v.pop(),Y},this.compileAsync=function(w,O,q=null){let Y=this.compile(w,O,q);return new Promise(F=>{function rt(){if(Y.forEach(function(vt){St.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){F(w);return}setTimeout(rt,10)}bt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ee=null;function An(w){ee&&ee(w)}function _n(){ri.stop()}function ll(){ri.start()}let ri=new ou;ri.setAnimationLoop(An),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){ee=w,at.setAnimationLoop(w),w===null?ri.stop():ri.start()},at.addEventListener("sessionstart",_n),at.addEventListener("sessionend",ll),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,R),u=Ct.get(w,v.length),u.init(O),v.push(u),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),yt.setFromProjectionMatrix(V,fn,O.reversedDepth),z=this.localClippingEnabled,tt=ht.init(this.clippingPlanes,z),m=J.get(w,S.length),m.init(),S.push(m),at.enabled===!0&&at.isPresenting===!0){let rt=_.xr.getDepthSensingMesh();rt!==null&&ya(rt,O,-1/0,_.sortObjects)}ya(w,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,G),Rt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Rt&&Pt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&ht.beginShadows();let q=u.state.shadowsArray;It.render(q,w,O),tt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,F=m.transmissive;if(u.setupLights(),O.isArrayCamera){let rt=O.cameras;if(F.length>0)for(let vt=0,Tt=rt.length;vt<Tt;vt++){let wt=rt[vt];ul(Y,F,w,wt)}Rt&&Pt.render(w);for(let vt=0,Tt=rt.length;vt<Tt;vt++){let wt=rt[vt];hl(m,w,wt,wt.viewport)}}else F.length>0&&ul(Y,F,w,O),Rt&&Pt.render(w),hl(m,w,O);R!==null&&E===0&&(Bt.updateMultisampleRenderTarget(R),Bt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,O),_t.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(u=v[v.length-1],tt===!0&&ht.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ya(w,O,q,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||yt.intersectsSprite(w)){Y&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);let vt=B.update(w),Tt=w.material;Tt.visible&&m.push(w,vt,Tt,q,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||yt.intersectsObject(w))){let vt=B.update(w),Tt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),xt.copy(vt.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(V)),Array.isArray(Tt)){let wt=vt.groups;for(let Ot=0,kt=wt.length;Ot<kt;Ot++){let Ut=wt[Ot],$t=Tt[Ut.materialIndex];$t&&$t.visible&&m.push(w,vt,$t,q,xt.z,Ut)}}else Tt.visible&&m.push(w,vt,Tt,q,xt.z,null)}}let rt=w.children;for(let vt=0,Tt=rt.length;vt<Tt;vt++)ya(rt[vt],O,q,Y)}function hl(w,O,q,Y){let F=w.opaque,rt=w.transmissive,vt=w.transparent;u.setupLightsView(q),tt===!0&&ht.setGlobalState(_.clippingPlanes,q),Y&&lt.viewport(I.copy(Y)),F.length>0&&lr(F,O,q),rt.length>0&&lr(rt,O,q),vt.length>0&&lr(vt,O,q),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ul(w,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new vn(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?os:mn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let rt=u.state.transmissionRenderTarget[Y.id],vt=Y.viewport||I;rt.setSize(vt.z*_.transmissionResolutionScale,vt.w*_.transmissionResolutionScale);let Tt=_.getRenderTarget(),wt=_.getActiveCubeFace(),Ot=_.getActiveMipmapLevel();_.setRenderTarget(rt),_.getClearColor(k),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Rt&&Pt.render(q);let kt=_.toneMapping;_.toneMapping=Bn;let Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),tt===!0&&ht.setGlobalState(_.clippingPlanes,Y),lr(w,q,Y),Bt.updateMultisampleRenderTarget(rt),Bt.updateRenderTargetMipmap(rt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ie=0,_e=O.length;ie<_e;ie++){let ce=O[ie],re=ce.object,Nt=ce.geometry,me=ce.material,te=ce.group;if(me.side===Ge&&re.layers.test(Y.layers)){let Ye=me.side;me.side=Ve,me.needsUpdate=!0,dl(re,q,Y,Nt,me,te),me.side=Ye,me.needsUpdate=!0,$t=!0}}$t===!0&&(Bt.updateMultisampleRenderTarget(rt),Bt.updateRenderTargetMipmap(rt))}_.setRenderTarget(Tt,wt,Ot),_.setClearColor(k,H),Ut!==void 0&&(Y.viewport=Ut),_.toneMapping=kt}function lr(w,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let F=0,rt=w.length;F<rt;F++){let vt=w[F],Tt=vt.object,wt=vt.geometry,Ot=vt.group,kt=vt.material;kt.allowOverride===!0&&Y!==null&&(kt=Y),Tt.layers.test(q.layers)&&dl(Tt,O,q,wt,kt,Ot)}}function dl(w,O,q,Y,F,rt){w.onBeforeRender(_,O,q,Y,F,rt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,O,q,Y,w,rt),F.transparent===!0&&F.side===Ge&&F.forceSinglePass===!1?(F.side=Ve,F.needsUpdate=!0,_.renderBufferDirect(q,O,Y,F,w,rt),F.side=Un,F.needsUpdate=!0,_.renderBufferDirect(q,O,Y,F,w,rt),F.side=Ge):_.renderBufferDirect(q,O,Y,F,w,rt),w.onAfterRender(_,O,q,Y,F,rt)}function hr(w,O,q){O.isScene!==!0&&(O=ft);let Y=St.get(w),F=u.state.lights,rt=u.state.shadowsArray,vt=F.state.version,Tt=Z.getParameters(w,F.state,rt,O,q),wt=Z.getProgramCacheKey(Tt),Ot=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?de:ye).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",j),Ot=new Map,Y.programs=Ot);let kt=Ot.get(wt);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===vt)return pl(w,Tt),kt}else Tt.uniforms=Z.getUniforms(w),w.onBeforeCompile(Tt,_),kt=Z.acquireProgram(Tt,wt),Ot.set(wt,kt),Y.uniforms=Tt.uniforms;let Ut=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),pl(w,Tt),Y.needsLights=Hu(w),Y.lightsStateVersion=vt,Y.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function fl(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=ds.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function pl(w,O){let q=St.get(w);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Bu(w,O,q,Y,F){O.isScene!==!0&&(O=ft),Bt.resetTextureUnits();let rt=O.fog,vt=Y.isMeshStandardMaterial?O.environment:null,Tt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,wt=(Y.isMeshStandardMaterial?de:ye).get(Y.envMap||vt),Ot=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color,_e=Bn;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=_.toneMapping);let ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=ce!==void 0?ce.length:0,Nt=St.get(Y),me=u.state.lights;if(tt===!0&&(z===!0||w!==M)){let Be=w===M&&Y.id===b;ht.setState(Y,w,Be)}let te=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==me.state.version||Nt.outputColorSpace!==Tt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==wt||Y.fog===!0&&Nt.fog!==rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==kt||Nt.morphTargets!==Ut||Nt.morphNormals!==$t||Nt.morphColors!==ie||Nt.toneMapping!==_e||Nt.morphTargetsCount!==re)&&(te=!0):(te=!0,Nt.__version=Y.version);let Ye=Nt.currentProgram;te===!0&&(Ye=hr(Y,O,F));let Ui=!1,$e=!1,vs=!1,ge=Ye.getUniforms(),tn=Nt.uniforms;if(lt.useProgram(Ye.program)&&(Ui=!0,$e=!0,vs=!0),Y.id!==b&&(b=Y.id,$e=!0),Ui||M!==w){lt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(P,"projectionMatrix",w.projectionMatrix),ge.setValue(P,"viewMatrix",w.matrixWorldInverse);let We=ge.map.cameraPosition;We!==void 0&&We.setValue(P,$.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,$e=!0,vs=!0)}if(F.isSkinnedMesh){ge.setOptional(P,F,"bindMatrix"),ge.setOptional(P,F,"bindMatrixInverse");let Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(P,"boneTexture",Be.boneTexture,Bt))}F.isBatchedMesh&&(ge.setOptional(P,F,"batchingTexture"),ge.setValue(P,"batchingTexture",F._matricesTexture,Bt),ge.setOptional(P,F,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",F._indirectTexture,Bt),ge.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",F._colorsTexture,Bt));let en=q.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ot.update(F,q,Ye),($e||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ge.setValue(P,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tn.envMap.value=wt,tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),$e&&(ge.setValue(P,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&ku(tn,vs),rt&&Y.fog===!0&&et.refreshFogUniforms(tn,rt),et.refreshMaterialUniforms(tn,Y,W,K,u.state.transmissionRenderTarget[w.id]),ds.upload(P,fl(Nt),tn,Bt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ds.upload(P,fl(Nt),tn,Bt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(P,"center",F.center),ge.setValue(P,"modelViewMatrix",F.modelViewMatrix),ge.setValue(P,"normalMatrix",F.normalMatrix),ge.setValue(P,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Be=Y.uniformsGroups;for(let We=0,va=Be.length;We<va;We++){let oi=Be[We];qt.update(oi,Ye),qt.bind(oi,Ye)}}return Ye}function ku(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,q){let Y=St.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),St.get(w.texture).__webglTexture=O,St.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let q=St.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};let Vu=P.createFramebuffer();this.setRenderTarget=function(w,O=0,q=0){R=w,T=O,E=q;let Y=!0,F=null,rt=!1,vt=!1;if(w){let wt=St.get(w);if(wt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)Bt.setupRenderTarget(w);else if(wt.__hasExternalTextures)Bt.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ut=w.depthTexture;if(wt.__boundDepthTexture!==Ut){if(Ut!==null&&St.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(vt=!0);let kt=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?F=kt[O][q]:F=kt[O],rt=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?F=St.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[q]:F=kt,I.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else I.copy(Q).multiplyScalar(W).floor(),D.copy(ct).multiplyScalar(W).floor(),U=pt;if(q!==0&&(F=Vu),lt.bindFramebuffer(P.FRAMEBUFFER,F)&&Y&&lt.drawBuffers(w,F),lt.viewport(I),lt.scissor(D),lt.setScissorTest(U),rt){let wt=St.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,q)}else if(vt){let wt=O;for(let Ot=0;Ot<w.textures.length;Ot++){let kt=St.get(w.textures[Ot]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ot,kt.__webglTexture,q,wt)}}else if(w!==null&&q!==0){let wt=St.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wt.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(w,O,q,Y,F,rt,vt,Tt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){lt.bindFramebuffer(P.FRAMEBUFFER,wt);try{let Ot=w.textures[Tt],kt=Ot.format,Ut=Ot.type;if(!nt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&q>=0&&q<=w.height-F&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Tt),P.readPixels(O,q,Y,F,Dt.convert(kt),Dt.convert(Ut),rt))}finally{let Ot=R!==null?St.get(R).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,O,q,Y,F,rt,vt,Tt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt)if(O>=0&&O<=w.width-Y&&q>=0&&q<=w.height-F){lt.bindFramebuffer(P.FRAMEBUFFER,wt);let Ot=w.textures[Tt],kt=Ot.format,Ut=Ot.type;if(!nt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Tt),P.readPixels(O,q,Y,F,Dt.convert(kt),Dt.convert(Ut),0);let ie=R!==null?St.get(R).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,ie);let _e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ch(P,_e,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt),P.deleteBuffer($t),P.deleteSync(_e),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,q=0){let Y=Math.pow(2,-q),F=Math.floor(w.image.width*Y),rt=Math.floor(w.image.height*Y),vt=O!==null?O.x:0,Tt=O!==null?O.y:0;Bt.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,vt,Tt,F,rt),lt.unbindTexture()};let Gu=P.createFramebuffer(),Wu=P.createFramebuffer();this.copyTextureToTexture=function(w,O,q=null,Y=null,F=0,rt=null){rt===null&&(F!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=F,F=0):rt=0);let vt,Tt,wt,Ot,kt,Ut,$t,ie,_e,ce=w.isCompressedTexture?w.mipmaps[rt]:w.image;if(q!==null)vt=q.max.x-q.min.x,Tt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,kt=q.min.y,Ut=q.isBox3?q.min.z:0;else{let en=Math.pow(2,-F);vt=Math.floor(ce.width*en),Tt=Math.floor(ce.height*en),w.isDataArrayTexture?wt=ce.depth:w.isData3DTexture?wt=Math.floor(ce.depth*en):wt=1,Ot=0,kt=0,Ut=0}Y!==null?($t=Y.x,ie=Y.y,_e=Y.z):($t=0,ie=0,_e=0);let re=Dt.convert(O.format),Nt=Dt.convert(O.type),me;O.isData3DTexture?(Bt.setTexture3D(O,0),me=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),me=P.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let te=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ui=P.getParameter(P.UNPACK_SKIP_PIXELS),$e=P.getParameter(P.UNPACK_SKIP_ROWS),vs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut);let ge=w.isDataArrayTexture||w.isData3DTexture,tn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let en=St.get(w),Be=St.get(O),We=St.get(en.__renderTarget),va=St.get(Be.__renderTarget);lt.bindFramebuffer(P.READ_FRAMEBUFFER,We.__webglFramebuffer),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let oi=0;oi<wt;oi++)ge&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(w).__webglTexture,F,Ut+oi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(O).__webglTexture,rt,_e+oi)),P.blitFramebuffer(Ot,kt,vt,Tt,$t,ie,vt,Tt,P.DEPTH_BUFFER_BIT,P.NEAREST);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||St.has(w)){let en=St.get(w),Be=St.get(O);lt.bindFramebuffer(P.READ_FRAMEBUFFER,Gu),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wu);for(let We=0;We<wt;We++)ge?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,F,Ut+We):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,F),tn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,rt,_e+We):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,rt),F!==0?P.blitFramebuffer(Ot,kt,vt,Tt,$t,ie,vt,Tt,P.COLOR_BUFFER_BIT,P.NEAREST):tn?P.copyTexSubImage3D(me,rt,$t,ie,_e+We,Ot,kt,vt,Tt):P.copyTexSubImage2D(me,rt,$t,ie,Ot,kt,vt,Tt);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(me,rt,$t,ie,_e,vt,Tt,wt,re,Nt,ce.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(me,rt,$t,ie,_e,vt,Tt,wt,re,ce.data):P.texSubImage3D(me,rt,$t,ie,_e,vt,Tt,wt,re,Nt,ce):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,rt,$t,ie,vt,Tt,re,Nt,ce.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,rt,$t,ie,ce.width,ce.height,re,ce.data):P.texSubImage2D(P.TEXTURE_2D,rt,$t,ie,vt,Tt,re,Nt,ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,$e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vs),rt===0&&O.generateMipmaps&&P.generateMipmap(me),lt.unbindTexture()},this.initRenderTarget=function(w){St.get(w).__webglFramebuffer===void 0&&Bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,lt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var uu={type:"change"},Vc={type:"start"},fu={type:"end"},na=new gi,du=new sn,Pg=Math.cos(70*vc.DEG2RAD),Te=new L,qe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hc=1e-6,ia=class extends Qs{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new rn,this._lastTargetPosition=new L,this._quat=new rn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ss,this._sphericalDelta=new ss,this._scale=1,this._panOffset=new L,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new L,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lg.bind(this),this._onPointerDown=Dg.bind(this),this._onPointerUp=Ug.bind(this),this._onContextMenu=Hg.bind(this),this._onMouseWheel=Fg.bind(this),this._onKeyDown=zg.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=kg.bind(this),this._onMouseDown=Ng.bind(this),this._onMouseMove=Og.bind(this),this._interceptControlDown=Vg.bind(this),this._interceptControlUp=Gg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=se.NONE}update(t=null){let e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Te.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<Pg?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hc||this._lastTargetPosition.distanceToSquared(this.target)>Hc?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Dg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Lg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ug(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ng(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=se.DOLLY;break;case ei.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}break;case ei.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Vc)}function Og(n){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Fg(n){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(n.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(fu))}function zg(n){this.enabled!==!1&&this._handleKeyDown(n)}function Bg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=se.TOUCH_ROTATE;break;case ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=se.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Vc)}function kg(n){switch(this._trackPointer(n),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=se.NONE}}function Hg(n){this.enabled!==!1&&n.preventDefault()}function Vg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gc(n,t=0,e=0){let i=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return i-Math.floor(i)}var ut=(n,t,e,i="#ffffff",s={})=>({label:n,group:t,texture:e,tint:i,...s}),pu={"mortar-white":ut("\u30E2\u30EB\u30BF\u30EB\uFF08\u767D\uFF09","wall","mortar","#fbfaf4"),"mortar-cream":ut("\u30E2\u30EB\u30BF\u30EB\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","mortar","#f5ead0"),"mortar-ivory":ut("\u30E2\u30EB\u30BF\u30EB\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","mortar","#f1e9d9"),"mortar-grey":ut("\u30E2\u30EB\u30BF\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","mortar","#c8c7bf"),"stucco-white":ut("\u5857\u308A\u58C1\uFF08\u767D\uFF09","wall","stucco","#f8f6ef"),"stucco-ivory":ut("\u5857\u308A\u58C1\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","stucco","#f3ecda"),"stucco-cream":ut("\u5857\u308A\u58C1\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","stucco","#f2e2c0"),"stucco-yellow":ut("\u5857\u308A\u58C1\uFF08\u9EC4\uFF09","wall","stucco","#efd58e"),"stucco-rose":ut("\u5857\u308A\u58C1\uFF08\u30ED\u30FC\u30BA\uFF09","wall","stucco","#eccdc0"),"stucco-sage":ut("\u5857\u308A\u58C1\uFF08\u82E5\u8349\uFF09","wall","stucco","#d2dcc0"),"stucco-blue":ut("\u5857\u308A\u58C1\uFF08\u6C34\u8272\uFF09","wall","stucco","#c8d9e3"),"stucco-charcoal":ut("\u5857\u308A\u58C1\uFF08\u30C1\u30E3\u30B3\u30FC\u30EB\uFF09","wall","stucco","#54585b"),"plaster-white":ut("\u6F06\u55B0","wall","plaster","#f6f3ea"),concrete:ut("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u6253\u3061\u653E\u3057","wall","concrete"),"concrete-stained":ut("\u53E4\u3073\u305F\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8","wall","concreteStained"),"concrete-dark":ut("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF08\u6FC3\uFF09","wall","concreteStained","#a4a39e"),"brick-red":ut("\u30EC\u30F3\u30AC\uFF08\u8D64\uFF09","wall","brick"),"brick-brown":ut("\u30EC\u30F3\u30AC\uFF08\u3053\u3052\u8336\uFF09","wall","brick","#b08d7c"),"brick-white":ut("\u30EC\u30F3\u30AC\uFF08\u767D\uFF09","wall","brickWhite"),"tile-white":ut("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","wall","tile","#fafaf6"),"tile-beige":ut("\u30BF\u30A4\u30EB\uFF08\u30D9\u30FC\u30B8\u30E5\uFF09","wall","tile","#e7d5bc"),"tile-sand":ut("\u30BF\u30A4\u30EB\uFF08\u7802\u8272\uFF09","wall","tile","#d8c0a6"),"tile-brown":ut("\u30BF\u30A4\u30EB\uFF08\u8336\uFF09","wall","tile","#a47b5d"),"tile-grey":ut("\u30BF\u30A4\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","tile","#b8b6af"),"tile-navy":ut("\u30BF\u30A4\u30EB\uFF08\u7D3A\uFF09","wall","tile","#49576c"),"siding-white":ut("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u767D\uFF09","wall","siding","#f4f3ee"),"siding-sand":ut("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7802\u8272\uFF09","wall","siding","#d9ceb7"),"siding-grey":ut("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u30B0\u30EC\u30FC\uFF09","wall","siding","#8e9397"),"siding-navy":ut("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7D3A\uFF09","wall","siding","#3e4b5d"),"siding-green":ut("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u6DF1\u7DD1\uFF09","wall","siding","#4d6455"),"wood-natural":ut("\u677F\u5F35\u308A\uFF08\u660E\u308B\u3044\u6728\uFF09","wall","planks","#d3a979"),"wood-brown":ut("\u677F\u5F35\u308A\uFF08\u8336\uFF09","wall","planks","#8f6646"),"wood-dark":ut("\u677F\u5F35\u308A\uFF08\u713C\u6749\uFF09","wall","planks","#3d342e"),"wood-red":ut("\u677F\u5F35\u308A\uFF08\u3079\u3093\u304C\u3089\uFF09","wall","planks","#8d4f3f"),"metal-dark":ut("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9ED2\uFF09","wall","metalPanel","#3d4349",{roughness:.45,metalness:.7}),"metal-silver":ut("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9280\uFF09","wall","metalPanel","#c3c8cc",{roughness:.4,metalness:.8}),"metal-white":ut("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u767D\uFF09","wall","metalPanel","#eef0f0",{roughness:.5,metalness:.3}),stone:ut("\u77F3\u5F35\u308A","wall","stone"),"wp-white":ut("\u58C1\u7D19\uFF08\u767D\uFF09","paper","wallpaper","#f7f5ef"),"wp-ivory":ut("\u58C1\u7D19\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","paper","wallpaper","#f2ead9"),"wp-grey":ut("\u58C1\u7D19\uFF08\u30B0\u30EC\u30FC\uFF09","paper","wallpaper","#d9dbd9"),"wp-blue":ut("\u58C1\u7D19\uFF08\u6C34\u8272\uFF09","paper","wallpaper","#d2dfe9"),"wp-green":ut("\u58C1\u7D19\uFF08\u82E5\u8349\uFF09","paper","wallpaper","#d7e3d0"),"wp-pink":ut("\u58C1\u7D19\uFF08\u685C\uFF09","paper","wallpaper","#f1dcd8"),"wp-yellow":ut("\u58C1\u7D19\uFF08\u305F\u307E\u3054\uFF09","paper","wallpaper","#f4e9bd"),"wp-navy":ut("\u58C1\u7D19\uFF08\u7D3A\uFF09","paper","wallpaper","#44516a"),"wp-brown":ut("\u58C1\u7D19\uFF08\u8336\uFF09","paper","wallpaper","#8b6f5c"),"wp-stripe":ut("\u58C1\u7D19\uFF08\u30B9\u30C8\u30E9\u30A4\u30D7\uFF09","paper","wallpaperStripe"),juraku:ut("\u3058\u3085\u3089\u304F\u58C1","paper","plaster","#dccfa9"),"tile-bath":ut("\u30BF\u30A4\u30EB\uFF08\u6C34\u8272\uFF09","paper","bathTile","#d4e9ef"),"tile-bath-white":ut("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","paper","bathTile"),"panel-wood":ut("\u677F\u58C1","paper","planks","#caa57c"),"floor-maple":ut("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30E1\u30FC\u30D7\u30EB\uFF09","floor","floorboards"),"floor-oak":ut("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30AA\u30FC\u30AF\uFF09","floor","floorboards","#d9b98f"),"floor-walnut":ut("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30A6\u30A9\u30EB\u30CA\u30C3\u30C8\uFF09","floor","floorboards","#8f6b52"),"floor-dark":ut("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u3053\u3052\u8336\uFF09","floor","floorboards","#5d4a40"),tatami:ut("\u7573","floor","tatami"),"tile-floor":ut("\u30BF\u30A4\u30EB\u5E8A\uFF08\u767D\uFF09","floor","bathTile"),"tile-floor-blue":ut("\u30BF\u30A4\u30EB\u5E8A\uFF08\u6C34\u8272\uFF09","floor","bathTile","#d4e9ef"),"stone-floor":ut("\u77F3\u7573","floor","pavers","#f1ece2"),"genkan-floor":ut("\u7384\u95A2\u30BF\u30A4\u30EB","floor","pavers","#b8b2a6"),checker:ut("\u5E02\u677E\u6A21\u69D8\u306E\u5E8A","floor","checker"),"carpet-grey":ut("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u30B0\u30EC\u30FC\uFF09","floor","carpet","#b4b9bf"),"carpet-blue":ut("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u9752\uFF09","floor","carpet","#6f7f93"),"carpet-red":ut("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u3048\u3093\u3058\uFF09","floor","carpet","#9a5a56"),"carpet-green":ut("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u7DD1\uFF09","floor","carpet","#6f8a72"),"concrete-floor":ut("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u5E8A","floor","concrete","#d2d0c9"),deck:ut("\u30A6\u30C3\u30C9\u30C7\u30C3\u30AD","floor","planks","#b08a62"),"ceil-white":ut("\u5929\u4E95\uFF08\u767D\uFF09","ceiling","plaster","#fbfaf6"),"ceil-wood":ut("\u677F\u5929\u4E95","ceiling","planks","#c9a880"),"roof-kawara":ut("\u74E6\uFF08\u3044\u3076\u3057\u9280\uFF09","roof","kawara","#a7adb4",{roughness:.55,metalness:.2}),"roof-kawara-dark":ut("\u74E6\uFF08\u9ED2\uFF09","roof","kawara","#5b6068",{roughness:.6,metalness:.15}),"roof-tile-orange":ut("\u6D0B\u74E6\uFF08\u3060\u3044\u3060\u3044\uFF09","roof","kawara","#c7633d",{roughness:.85}),"roof-tile-brown":ut("\u6D0B\u74E6\uFF08\u8336\uFF09","roof","kawara","#8b5b45",{roughness:.85}),"roof-tile-green":ut("\u6D0B\u74E6\uFF08\u7DD1\uFF09","roof","kawara","#4f6b58",{roughness:.8}),"roof-slate":ut("\u30B9\u30EC\u30FC\u30C8","roof","slate","#5a5e63"),"roof-metal":ut("\u91D1\u5C5E\u5C4B\u6839\uFF08\u6FC3\u3044\u30B0\u30EC\u30FC\uFF09","roof","roofMetal","#5b5f63",{roughness:.5,metalness:.4}),"roof-metal-green":ut("\u91D1\u5C5E\u5C4B\u6839\uFF08\u7DD1\u9752\uFF09","roof","roofMetal","#5f8a7c",{roughness:.55,metalness:.35}),"roof-metal-red":ut("\u91D1\u5C5E\u5C4B\u6839\uFF08\u8D64\u3055\u3073\u8272\uFF09","roof","roofMetal","#8e4d3c",{roughness:.6,metalness:.3}),"roof-concrete":ut("\u5C4B\u4E0A\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF09","roof","concrete","#9da09b")},Zt=(n,t,e,i,s,r={})=>({label:n,door:t,w:e,h:i,s,...r}),Wg={"door-entrance":Zt("\u7384\u95A2\u30C9\u30A2",!0,.92,2.33,0),"door-oyako":Zt("\u89AA\u5B50\u30C9\u30A2",!0,1.24,2.33,0),"door-flat":Zt("\u96C6\u5408\u4F4F\u5B85\u306E\u7384\u95A2\u30C9\u30A2\uFF08\u92FC\u88FD\uFF09",!0,.85,2,0),"door-wood":Zt("\u6728\u306E\u30C9\u30A2",!0,.78,2,0),"door-white":Zt("\u767D\u3044\u30C9\u30A2",!0,.75,2,0),"door-glass":Zt("\u30AC\u30E9\u30B9\u30C9\u30A2",!0,.8,2,0,{glass:!0}),"door-steel":Zt("\u30B9\u30C1\u30FC\u30EB\u30C9\u30A2",!0,.78,2,0),"door-fold":Zt("\u6D74\u5BA4\u306E\u6298\u308C\u6238",!0,.72,2,.05),"door-key":Zt("\u9375\u4ED8\u304D\u306E\u30C9\u30A2",!0,.78,2,0,{lock:!0}),"door-slide":Zt("\u5F15\u304D\u6238",!0,.8,2,0,{slide:!0}),"door-fusuma":Zt("\u3075\u3059\u307E",!0,1.69,1.8,0,{slide:!0}),"door-shoji":Zt("\u969C\u5B50",!0,1.69,1.8,0,{slide:!0}),"door-closet":Zt("\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u306E\u6298\u308C\u6238",!0,1.6,2,0),"door-double":Zt("\u4E21\u958B\u304D\u30C9\u30A2",!0,1.5,2.1,0),"door-auto":Zt("\u81EA\u52D5\u30C9\u30A2",!0,1.6,2.3,0,{slide:!0,glass:!0}),"door-terrace":Zt("\u6383\u304D\u51FA\u3057\u7A93\uFF08\u51FA\u5165\u308A\u3067\u304D\u308B\uFF09",!0,1.65,2,.03,{slide:!0,glass:!0}),"lift-door":Zt("\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u6249",!0,.8,2.1,0,{slide:!0,lift:!0}),"door-platform":Zt("\u30DB\u30FC\u30E0\u30C9\u30A2",!0,1.4,2.1,0,{slide:!0,glass:!0,platform:!0}),arch:Zt("\u958B\u53E3\uFF08\u30C9\u30A2\u306A\u3057\uFF09",!0,1.2,2,0,{open:!0}),"win-slide":Zt("\u5F15\u304D\u9055\u3044\u7A93",!1,1.65,1.1,.9),"win-wide":Zt("\u6A2A\u9577\u306E\u7A93",!1,1.65,.9,1.1),"win-full":Zt("\u5E8A\u307E\u3067\u306E\u7A93",!1,1.65,1.97,.03),"win-small":Zt("\u5C0F\u7A93",!1,.6,.5,1.5),"win-high":Zt("\u9AD8\u7A93",!1,.74,.5,1.5),"win-tall":Zt("\u7E26\u3059\u3079\u308A\u51FA\u3057\u7A93",!1,.4,1.1,.9),"win-slit":Zt("\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.34,1.5,.5),"win-fixed":Zt("\u306F\u3081\u6BBA\u3057\u7A93",!1,1,1,1),"win-lattice":Zt("\u9762\u683C\u5B50\u3064\u304D\u306E\u7A93",!1,1.19,.9,1.1),"win-shutter":Zt("\u3088\u308D\u3044\u6238\u3064\u304D\u306E\u7A93",!1,1,1.2,.8),"win-steel":Zt("\u30B9\u30C1\u30FC\u30EB\u30B5\u30C3\u30B7",!1,1.69,1.2,.8),"win-round":Zt("\u4E38\u7A93",!1,.8,.8,1.1,{round:!0}),"win-shop":Zt("\u30B7\u30E7\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",!1,1.6,2.2,.2),"win-curtain":Zt("\u30AB\u30FC\u30C6\u30F3\u30A6\u30A9\u30FC\u30EB",!1,1.7,2.6,.75),"win-ribbon":Zt("\u6A2A\u9023\u7A93",!1,1.7,1.5,.9),"win-hood":Zt("\u3072\u3055\u3057\u4ED8\u304D\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.5,1.5,.6),"win-block":Zt("\u30AC\u30E9\u30B9\u30D6\u30ED\u30C3\u30AF",!1,.8,1.6,.4)};var Lt=(n,t,e,i,s,r={})=>({label:n,group:t,w:e,d:i,h:s,solid:!0,...r}),mu={sofa:Lt("\u30BD\u30D5\u30A1","living",1.5,.72,.78),armchair:Lt("\u3072\u3068\u308A\u639B\u3051\u30BD\u30D5\u30A1","living",.78,.75,.78),"table-low":Lt("\u30ED\u30FC\u30C6\u30FC\u30D6\u30EB","living",.95,.55,.38),tv:Lt("\u30C6\u30EC\u30D3","living",1.3,.38,1.15),shelf:Lt("\u672C\u68DA","living",.9,.3,1.8),cabinet:Lt("\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8","living",.9,.4,.85),rug:Lt("\u30E9\u30B0","living",1.8,1.2,.02,{solid:!1}),plant:Lt("\u89B3\u8449\u690D\u7269","living",.45,.45,1.2),lamp:Lt("\u30D5\u30ED\u30A2\u30E9\u30F3\u30D7","living",.35,.35,1.5),"ceiling-light":Lt("\u5929\u4E95\u306E\u7167\u660E","living",.5,.5,.12,{solid:!1,ceiling:!0}),"table-dining":Lt("\u30C0\u30A4\u30CB\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB","dining",1.4,.8,.72),chair:Lt("\u3044\u3059","dining",.42,.45,.85),kitchen:Lt("\u30AD\u30C3\u30C1\u30F3","dining",1.5,.6,.86),fridge:Lt("\u51B7\u8535\u5EAB","dining",.62,.66,1.76),bed:Lt("\u30D9\u30C3\u30C9","bedroom",1,1.95,.5),"bed-double":Lt("\u30C0\u30D6\u30EB\u30D9\u30C3\u30C9","bedroom",1.5,1.95,.5),desk:Lt("\u673A","bedroom",1.1,.55,.72),wardrobe:Lt("\u6D0B\u670D\u3060\u3093\u3059","bedroom",1,.55,1.9),tansu:Lt("\u305F\u3093\u3059","japanese",.9,.45,1.3),cupboard:Lt("\u98DF\u5668\u68DA","dining",.9,.45,1.85),"mail-boxes":Lt("\u96C6\u5408\u90F5\u4FBF\u53D7\u3051","entrance",1.2,.3,1.3),car:Lt("\u81EA\u52D5\u8ECA","garden",1.48,3.4,1.55),chabudai:Lt("\u3061\u3083\u3076\u53F0","japanese",1,1,.32),zabuton:Lt("\u3056\u3076\u3068\u3093","japanese",.5,.5,.08,{solid:!1}),futon:Lt("\u3075\u3068\u3093","japanese",1,1.9,.14,{solid:!1}),toilet:Lt("\u30C8\u30A4\u30EC","water",.42,.7,.8),bathtub:Lt("\u6D74\u69FD","water",.75,1.4,.56),washbasin:Lt("\u6D17\u9762\u53F0","water",.6,.45,.85),washer:Lt("\u6D17\u6FEF\u6A5F","water",.6,.6,.9),"shoe-box":Lt("\u3052\u305F\u7BB1","entrance",1,.34,.9),boxes:Lt("\u6BB5\u30DC\u30FC\u30EB\u7BB1","entrance",.8,.7,1),rack:Lt("\u30CF\u30F3\u30AC\u30FC\u30E9\u30C3\u30AF","shop",1.3,.4,1.7),counter:Lt("\u30AB\u30A6\u30F3\u30BF\u30FC","shop",1.6,.6,1),mirror:Lt("\u59FF\u898B","shop",.9,.12,1.9),"cafe-table":Lt("\u30AB\u30D5\u30A7\u30C6\u30FC\u30D6\u30EB","shop",.8,.8,.72),stool:Lt("\u30B9\u30C4\u30FC\u30EB","shop",.36,.36,.46),"office-desk":Lt("\u30AA\u30D5\u30A3\u30B9\u30C7\u30B9\u30AF","office",1.2,.62,1.2),"office-chair":Lt("\u30AA\u30D5\u30A3\u30B9\u30C1\u30A7\u30A2","office",.5,.5,.9),bench:Lt("\u30D9\u30F3\u30C1","garden",1.6,.5,.8),planter:Lt("\u30D7\u30E9\u30F3\u30BF\u30FC","garden",.9,.35,.5),hedge:Lt("\u751F\u3051\u57A3","garden",1.6,.5,1.1),fence:Lt("\u30D5\u30A7\u30F3\u30B9","garden",1.6,.08,1),tree:Lt("\u5EAD\u6728","garden",.7,.7,3.2),mailbox:Lt("\u30DD\u30B9\u30C8","garden",.3,.3,1.1),bicycle:Lt("\u81EA\u8EE2\u8ECA","garden",.5,1.7,1),vending:Lt("\u81EA\u52D5\u8CA9\u58F2\u6A5F","garden",1,.7,1.85),"ac-unit":Lt("\u5BA4\u5916\u6A5F","garden",.86,.34,.65),"gate-post":Lt("\u6A5F\u80FD\u9580\u67F1","garden",.3,.16,1.45),lantern:Lt("\u77F3\u706F\u7C60","garden",.5,.5,1.3),"ticket-gate":Lt("\u81EA\u52D5\u6539\u672D\u6A5F","station",.19,1.5,1.03),"ticket-gate-clear":Lt("\u81EA\u52D5\u6539\u672D\u6A5F\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\uFF09","station",.19,1.5,1.03),"ticket-machine":Lt("\u5238\u58F2\u6A5F","station",.85,.5,1.75),"platform-bench":Lt("\u30DB\u30FC\u30E0\u306E\u30D9\u30F3\u30C1","station",1.8,.5,.8),"tactile-line":Lt("\u70B9\u5B57\u30D6\u30ED\u30C3\u30AF\uFF08\u30DB\u30FC\u30E0\uFF09","station",.3,2.4,.01,{solid:!1})};var gu=new L(0,1,0),sa=new L,ra=new L,En=new L,oa=new L,Wc=new L,Le=class{constructor(){this.parts=new Map,this.matrix=null}part(t){let e=this.parts.get(t);return e||(e={positions:[],normals:[],uvs:[],indices:[]},this.parts.set(t,e)),e}at(t,e,i,s,r){let o=this.matrix,a=new pe().makeRotationY(s).setPosition(t,e,i);return this.matrix=o?o.clone().multiply(a):a,r(this),this.matrix=o,this}face(t,e){this.matrix&&(e=e.map(r=>r.clone().applyMatrix4(this.matrix)));let i=this.part(t);if(sa.subVectors(e[1],e[0]),ra.subVectors(e[2],e[0]),En.crossVectors(sa,ra),En.lengthSq()<1e-12)return this;En.normalize(),Math.abs(En.y)>.999?(oa.set(1,0,0),Wc.set(0,0,1)):(oa.crossVectors(gu,En).normalize(),Wc.crossVectors(En,oa));let s=i.positions.length/3;for(let r of e)i.positions.push(r.x,r.y,r.z),i.normals.push(En.x,En.y,En.z),i.uvs.push(r.dot(oa),r.dot(Wc));for(let r=1;r<e.length-1;r++)i.indices.push(s,s+r,s+r+1);return this}quad(t,e,i,s,r,o){return sa.subVectors(i,e),ra.subVectors(s,e),this.face(t,En.crossVectors(sa,ra).dot(o)>=0?[e,i,s,r]:[r,s,i,e])}shape(t,e,i,s,r=!0){let o=e.map(([f,p])=>new Ft(f,p)),a=i.map(f=>f.map(([p,g])=>new Ft(p,g))),c=[...o,...a.flat()],l=this.part(t),h=l.positions.length/3,d=new L;for(let f of c)d.set(f.x,s,f.y),this.matrix&&d.applyMatrix4(this.matrix),l.positions.push(d.x,d.y,d.z),l.normals.push(0,r?1:-1,0),l.uvs.push(d.x,d.z);for(let[f,p,g]of Ys.triangulateShape(o,a))(c[p].x-c[f].x)*(c[g].y-c[f].y)-(c[p].y-c[f].y)*(c[g].x-c[f].x)<0===r?l.indices.push(h+f,h+p,h+g):l.indices.push(h+f,h+g,h+p);return this}box(t,e,i,s,r,o,a,c=0){let l=Math.cos(c),h=Math.sin(c),d=(p,g,x)=>new L(e+p*r/2*l+x*a/2*h,i+g*o/2,s-p*r/2*h+x*a/2*l),f=[-1,1].map(p=>[-1,1].map(g=>[-1,1].map(x=>d(p,g,x))));return this.face(t,[f[1][0][0],f[1][1][0],f[1][1][1],f[1][0][1]]),this.face(t,[f[0][0][1],f[0][1][1],f[0][1][0],f[0][0][0]]),this.face(t,[f[0][1][0],f[0][1][1],f[1][1][1],f[1][1][0]]),this.face(t,[f[0][0][1],f[0][0][0],f[1][0][0],f[1][0][1]]),this.face(t,[f[1][0][1],f[1][1][1],f[0][1][1],f[0][0][1]]),this.face(t,[f[0][0][0],f[0][1][0],f[1][1][0],f[1][0][0]]),this}bar(t,e,i,s,r=s){let o=i.clone().sub(e),a=o.length();if(a<1e-5)return this;o.divideScalar(a);let c=new L().crossVectors(o,gu);c.lengthSq()<1e-8&&c.set(1,0,0),c.normalize().multiplyScalar(s/2);let l=new L().crossVectors(c,o).normalize().multiplyScalar(r/2),h=p=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,x])=>p.clone().addScaledVector(c,g).addScaledVector(l,x)),d=h(e),f=h(i);for(let p=0;p<4;p++){let g=(p+1)%4;this.quad(t,d[p],d[g],f[g],f[p],d[p].clone().add(d[g]).multiplyScalar(.5).sub(e))}return this.quad(t,d[0],d[1],d[2],d[3],o.clone().negate()),this.quad(t,f[0],f[1],f[2],f[3],o),this}slab(t,e,i,s,r,o){return this.face(t,[new L(e,o,i),new L(e,o,r),new L(s,o,r),new L(s,o,i)]),this}cylinder(t,e,i,s,r,o,a=10,c=r){let l=(f,p)=>Array.from({length:a},(g,x)=>{let m=x/a*Math.PI*2;return new L(e+Math.cos(m)*f,p,s+Math.sin(m)*f)}),h=l(r,i),d=l(c,i+o);for(let f=0;f<a;f++){let p=(f+1)%a;this.face(t,[h[f],d[f],d[p],h[p]])}return c>.001&&this.face(t,[...d].reverse()),this}get empty(){return[...this.parts.values()].every(t=>!t.indices.length)}build(t,{cast:e=!0,receive:i=!0,where:s=""}={}){let r=[];for(let[o,a]of this.parts){if(!a.indices.length)continue;let c=ix(o,s),l=new Xe;l.setAttribute("position",new Se(a.positions,3)),l.setAttribute("normal",new Se(a.normals,3)),l.setAttribute("uv",new Se(a.uvs,2)),l.setIndex(a.indices);let h=new Ie(l,c);h.castShadow=e&&!c.transparent,h.receiveShadow=i,t.add(h),r.push(h)}return r}},n1=new je({transparent:!0,depthWrite:!1,side:Ge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`});function Ci(n){n.traverse(t=>{(t.isMesh||t.isLine||t.isSprite)&&(t.geometry?.dispose(),t.userData.ownMaterial&&(t.material.map?.dispose(),t.material.dispose()))}),n.clear()}function xu(n){let t=document.createElement("canvas");return t.width=n,t.height=n,t}function aa(n,t,e,i,s){let r=Math.imul((n%e+e)%e,374761393)^Math.imul((t%i+i)%i,668265263)^Math.imul(s+1,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}var Xc=new Map;function $g(n,t,e,i,s){let r=`${n}|${t}|${e}|${i}|${s}`;if(Xc.has(r))return Xc.get(r);let o=new Float32Array(n*n),a=1,c=0;for(let l=0;l<i;l++){let h=Math.max(1,Math.round(t*2**l)),d=Math.max(1,Math.round(e*2**l));for(let f=0;f<n;f++){let p=f/n*d,g=Math.floor(p),x=p-g,m=x*x*(3-2*x);for(let u=0;u<n;u++){let S=u/n*h,v=Math.floor(S),_=S-v,A=_*_*(3-2*_),T=aa(v,g,h,d,s+l*7),E=aa(v+1,g,h,d,s+l*7),R=aa(v,g+1,h,d,s+l*7),b=aa(v+1,g+1,h,d,s+l*7);o[f*n+u]+=(T+(E-T)*A+(R-T)*m+(T-E-R+b)*A*m)*a}}c+=a,a*=.5}for(let l=0;l<o.length;l++)o[l]/=c;return Xc.set(r,o),o}var _u=n=>{let t=Math.round(Math.min(1,Math.max(0,n))*255);return`rgb(${t},${t},${t})`},ms=([n,t,e],i=0)=>`rgb(${Math.round(n+i)},${Math.round(t+i)},${Math.round(e+i)})`,Yc=class{constructor(t){this.size=t,this.colour=xu(t).getContext("2d",{willReadFrequently:!0}),this.height=xu(t).getContext("2d",{willReadFrequently:!0}),this.passes=[],this.random=1}roll(){return this.random++,Gc(this.random,this.size,7)}fill(t,e=.5){return this.colour.fillStyle=Array.isArray(t)?ms(t):t,this.colour.fillRect(0,0,this.size,this.size),this.height.fillStyle=_u(e),this.height.fillRect(0,0,this.size,this.size),this}both(t,e,i){for(let[s,r]of[[this.colour,t],[this.height,e==null?null:_u(e)]])if(r!=null){s.fillStyle=r,s.strokeStyle=r;for(let o of[0,-this.size,this.size])for(let a of[0,-this.size,this.size])s.save(),s.translate(o,a),i(s),s.restore()}return this}rect(t,e,i,s,r,o){return this.both(Array.isArray(r)?ms(r):r,o,a=>a.fillRect(t,e,i,s))}line(t,e,i,s,r,o,a){return this.both(o,a,c=>{c.lineWidth=r,c.beginPath(),c.moveTo(t,e),c.lineTo(i,s),c.stroke()})}dot(t,e,i,s,r){return this.both(s,r,o=>{o.beginPath(),o.arc(t,e,i,0,Math.PI*2),o.fill()})}speckle(t,[e,i],s,r){for(let o=0;o<t;o++)this.dot(this.roll()*this.size,this.roll()*this.size,e+this.roll()*(i-e),s[Math.floor(this.roll()*s.length)],typeof r=="function"?r(this.roll()):r);return this}streaks(t,e,{width:i=4,length:s=.6}={}){for(let r=0;r<t;r++){let o=this.roll()*this.size,a=this.roll()*this.size,c=(.2+this.roll()*s)*this.size,l=1+this.roll()*i;for(let h of[0,-this.size,this.size])for(let d of[0,-this.size]){let f=this.colour.createLinearGradient(0,a+d,0,a+d+c);f.addColorStop(0,e),f.addColorStop(1,"rgba(0,0,0,0)"),this.colour.fillStyle=f,this.colour.fillRect(o+h,a+d,l,c)}}return this}cracks(t,e,{width:i=1.2,level:s=.15,steps:r=26}={}){for(let o=0;o<t;o++){let a=this.roll()*this.size,c=this.roll()*this.size,l=this.roll()*Math.PI*2;for(let h=0;h<r;h++){l+=(this.roll()-.5)*1.1;let d=a+Math.cos(l)*this.size*.022,f=c+Math.sin(l)*this.size*.022;this.line(a,c,d,f,i*(.5+this.roll()),e,s),a=d,c=f}}return this}noise({cells:t=8,cellsY:e=t,octaves:i=3,colour:s=0,height:r=0,seed:o=1,tint:a=[1,1,1],ridge:c=!1}){return this.passes.push({cells:t,cellsY:e,octaves:i,colour:s,height:r,seed:o,tint:a,ridge:c}),this}finish({metres:t,depth:e=.002,rough:i=[.9,.9],shade:s=.7}){let{size:r}=this,o=this.colour.getImageData(0,0,r,r),a=this.height.getImageData(0,0,r,r).data,c=new Float32Array(r*r);for(let x=0;x<c.length;x++)c[x]=a[x*4]/255;for(let x of this.passes){let m=$g(r,x.cells,x.cellsY,x.octaves,x.seed%3);for(let u=0;u<c.length;u++){let S=(x.ridge?1-Math.abs(m[u]*2-1):m[u])-.5;x.colour&&(o.data[u*4]+=S*x.colour*x.tint[0],o.data[u*4+1]+=S*x.colour*x.tint[1],o.data[u*4+2]+=S*x.colour*x.tint[2]),x.height&&(c[u]=Math.min(1,Math.max(0,c[u]+S*x.height)))}}this.colour.putImageData(o,0,0);let l=e*r/t*1.6,h=new Uint8Array(r*r*4),d=new Uint8Array(r*r*4);for(let x=0;x<r;x++){let m=(x-1+r)%r*r,u=(x+1)%r*r,S=(r-1-x)*r;for(let v=0;v<r;v++){let _=c[x*r+v],A=(c[x*r+(v+1)%r]-c[x*r+(v-1+r)%r])/2*l,T=(c[u+v]-c[m+v])/2*l,E=Math.hypot(A,T,1),R=(S+v)*4;h[R]=(-A/E*.5+.5)*255,h[R+1]=(T/E*.5+.5)*255,h[R+2]=(1/E*.5+.5)*255,h[R+3]=_*255,d[R]=(s+(1-s)*_)*255,d[R+1]=(i[0]+(i[1]-i[0])*_)*255,d[R+2]=255,d[R+3]=255}}let f=x=>(x.wrapS=pi,x.wrapT=pi,x.repeat.set(1/t,1/t),x.anisotropy=Zg,x),p=x=>{let m=new jn(x,r,r,Fe);return m.generateMipmaps=!0,m.minFilter=Sn,m.magFilter=Ke,m.needsUpdate=!0,f(m)},g=f(new xi(this.colour.canvas));return g.colorSpace=be,{map:g,normalMap:p(h),surfaceMap:p(d),metres:t,depth:e}}};function Ri(n,t,e,{joint:i,jointLevel:s=.2,gap:r=2,stagger:o=!0,palette:a,tone:c=16,level:l=.85,bevel:h=0}){let{size:d}=n;n.fill(i,s);let f=d/t,p=d/e;for(let g=0;g<e;g++){let x=o&&g%2?f/2:0;for(let m=0;m<t;m++){let u=a[Math.floor(n.roll()*a.length)],S=(n.roll()-.5)*c,v=m*f+x+r/2,_=g*p+r/2;n.rect(v,_,f-r,p-r,ms(u,S),l+(n.roll()-.5)*.12),h&&(n.rect(v,_,f-r,h,"rgba(255,255,255,0.16)",null),n.rect(v,_+p-r-h,f-r,h,"rgba(0,0,0,0.2)",l-.25))}}}var yu={mortar:{size:512,metres:2.4,depth:.003,rough:[.97,.88],paint(n){n.fill("#ece9e0").streaks(20,"rgba(96,92,78,0.10)").streaks(5,"rgba(60,72,60,0.08)",{width:9,length:.4}).cracks(2,"rgba(70,66,58,0.3)",{width:.8}).noise({cells:5,octaves:3,colour:12,height:.12,seed:2}).noise({cells:110,octaves:2,colour:10,height:.45,seed:3})}},stucco:{size:512,metres:2,depth:.005,rough:[.97,.86],paint(n){n.fill("#f1eee7").noise({cells:9,octaves:4,colour:12,height:.55,seed:4,ridge:!0}).noise({cells:120,octaves:1,colour:6,height:.16,seed:5}).noise({cells:3,octaves:2,colour:8,seed:6})}},plaster:{size:256,metres:3,depth:.001,rough:[.9,.8],paint(n){n.fill("#f2f1ed").noise({cells:5,octaves:3,colour:7,height:.2,seed:7}).noise({cells:90,octaves:1,colour:4,height:.1,seed:8})}},concrete:{size:512,metres:3.6,depth:.004,rough:[.97,.8],relief:!0,paint(n){let{size:t}=n;n.fill("#aaa8a1").streaks(16,"rgba(70,72,70,0.14)",{width:6,length:.7});for(let e=0;e<4;e++)n.rect(e*t/4-1.5,0,3,t,"rgba(52,52,50,0.5)",.12);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(52,52,50,0.5)",.12);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.4,"rgba(36,36,36,0.75)",0);n.speckle(260,[.5,1.6],["rgba(40,40,40,0.4)","rgba(70,70,68,0.35)"],.1).noise({cells:5,octaves:4,colour:30,height:.08,seed:9}).noise({cells:150,octaves:1,colour:11,height:.22,seed:10})}},concreteStained:{size:512,metres:3.6,depth:.005,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#878681").streaks(54,"rgba(26,28,26,0.26)",{width:9,length:.75}).streaks(9,"rgba(120,70,35,0.26)",{width:5,length:.5}).streaks(10,"rgba(225,225,215,0.2)",{width:7,length:.35});for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(28,28,28,0.6)",.08);for(let e=0;e<2;e++)n.rect(0,e*t/2-2,t,4,"rgba(28,28,28,0.6)",.08);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.8,"rgba(18,18,18,0.8)",0);n.cracks(5,"rgba(24,24,24,0.55)").speckle(380,[.6,2.2],["rgba(30,30,30,0.45)","rgba(150,150,140,0.3)"],.1).noise({cells:4,octaves:4,colour:44,height:.1,seed:11}).noise({cells:150,octaves:1,colour:14,height:.26,seed:12})}},brick:{size:512,metres:1.76,depth:.009,rough:[.98,.86],relief:!0,paint(n){Ri(n,8,16,{joint:"#b6b0a4",gap:4,tone:26,bevel:2,palette:[[152,82,62],[166,96,70],[138,72,56],[176,108,84],[146,90,72]]}),n.speckle(500,[.6,1.8],["rgba(60,30,24,0.3)","rgba(210,150,120,0.25)"],null).noise({cells:70,octaves:2,colour:16,height:.2,seed:13}).noise({cells:4,octaves:3,colour:16,seed:14})}},brickWhite:{size:512,metres:1.76,depth:.008,rough:[.97,.8],relief:!0,paint(n){Ri(n,8,16,{joint:"#cfcbc2",gap:4,tone:10,bevel:2,palette:[[240,238,232],[232,230,224],[244,242,238],[226,222,214]]}),n.noise({cells:70,octaves:2,colour:9,height:.2,seed:15}).noise({cells:4,octaves:3,colour:10,seed:16})}},tile:{size:512,metres:.9,depth:.004,rough:[.92,.28],relief:!0,paint(n){Ri(n,9,18,{joint:"#8f8a80",jointLevel:.25,gap:3.4,tone:12,bevel:1.5,palette:[[244,244,240],[236,236,232],[248,248,246],[230,230,226]]}),n.noise({cells:3,octaves:3,colour:8,seed:17}).noise({cells:90,octaves:1,colour:4,height:.05,seed:18})}},siding:{size:512,metres:1.44,depth:.007,rough:[.92,.72],relief:!0,paint(n){let{size:t}=n;n.fill("#efefeb");for(let e=0;e<8;e++){let i=e*t/8;for(let s=0;s<16;s++)n.rect(0,i+s*t/128,t,t/128+.5,null,.35+s/15*.55);n.rect(0,i+t/8-3,t,3,"rgba(0,0,0,0.3)",.05),n.rect(0,i,t,2,"rgba(255,255,255,0.35)",null)}n.noise({cells:5,cellsY:90,octaves:2,colour:9,height:.07,seed:19})}},planks:{size:512,metres:1.2,depth:.005,rough:[.95,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#e9d9c3");for(let e=0;e<8;e++){let i=e*t/8;if(n.rect(i,0,t/8,t,`rgba(${n.roll()>.5?"255,244,224":"70,46,24"},${.05+n.roll()*.13})`,.72+n.roll()*.14),n.rect(i-1.5,0,3,t,"rgba(34,22,12,0.75)",.05),n.roll()>.6){let s=i+t/16+(n.roll()-.5)*t/20,r=n.roll()*t;for(let o=4;o>0;o--)n.dot(s,r,o*2.4,`rgba(70,44,24,${.12+(4-o)*.09})`,.55)}}n.noise({cells:90,cellsY:3,octaves:2,colour:30,height:.16,seed:20,tint:[1,.86,.66]}).noise({cells:22,cellsY:2,octaves:2,colour:18,height:.08,seed:21,ridge:!0,tint:[1,.86,.66]})}},wood:{size:512,metres:1.1,depth:.0012,rough:[.82,.6],paint(n){n.fill("#96704e").noise({cells:70,cellsY:2,octaves:3,colour:34,height:.3,seed:22,tint:[1,.82,.6]}).noise({cells:14,cellsY:1,octaves:2,colour:22,seed:23,ridge:!0,tint:[1,.82,.6]}).noise({cells:3,octaves:2,colour:14,seed:24})}},metalPanel:{size:512,metres:2.4,depth:.004,rough:[.7,.42],paint(n){let{size:t}=n;n.fill("#e8e8e8",.8);for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(0,0,0,0.5)",.1),n.rect(e*t/4+2,0,2,t,"rgba(255,255,255,0.35)",null);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(0,0,0,0.42)",.15);n.noise({cells:3,octaves:3,colour:9,height:.05,seed:25}).noise({cells:2,cellsY:60,octaves:1,colour:5,seed:26})}},stone:{size:512,metres:2,depth:.014,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#77736b",.15);let e=0;for(let i of[.22,.3,.2,.28]){let s=n.roll()*40,r=s+t;for(;s<r-1;){let o=Math.min(r-s,t*(.14+n.roll()*.2)),a=(n.roll()-.5)*34,c=n.roll()>.6?[176,168,150]:[164,162,156];n.rect(s+2.5,e*t+2.5,o-5,i*t-5,ms(c,a),.7+n.roll()*.25),s+=o}e+=i}n.noise({cells:26,octaves:4,colour:26,height:.4,seed:27}).noise({cells:4,octaves:2,colour:12,seed:28})}},wallpaper:{size:256,metres:.8,depth:6e-4,rough:[.95,.88],paint(n){n.fill("#f4f2ec").noise({cells:128,cellsY:20,octaves:1,colour:5,height:.5,seed:29}).noise({cells:20,cellsY:128,octaves:1,colour:5,height:.5,seed:30}).noise({cells:3,octaves:2,colour:4,seed:31})}},wallpaperStripe:{size:256,metres:.64,depth:6e-4,rough:[.95,.88],paint(n){let{size:t}=n;n.fill("#f3efe4");for(let e=0;e<4;e++)n.rect(e*t/4,0,t/8,t,"#cfdbe3",.55),n.rect(e*t/4+t/8-2,0,2,t,"#b9982f",.6);n.noise({cells:128,cellsY:20,octaves:1,colour:5,height:.4,seed:32})}},floorboards:{size:512,metres:1.44,depth:.0016,rough:[.7,.36],paint(n){let{size:t}=n;n.fill("#e3c79d",.8);for(let e=0;e<12;e++){let i=e*t/12,s=n.roll()*t;for(let r=0;r<3;r++){let o=t*(.22+n.roll()*.3);n.rect(i,s,t/12,o,`rgba(${n.roll()>.5?"255,240,214":"96,60,28"},${.04+n.roll()*.16})`,null),n.rect(i,s,t/12,1.6,"rgba(60,36,18,0.6)",.2),s+=o}n.rect(i-.8,0,1.6,t,"rgba(60,36,18,0.62)",.15)}n.noise({cells:110,cellsY:3,octaves:2,colour:22,height:.12,seed:33,tint:[1,.84,.62]}).noise({cells:26,cellsY:2,octaves:2,colour:12,seed:34,ridge:!0,tint:[1,.84,.62]})}},tatami:{size:512,metres:1.82,depth:.0015,rough:[.95,.82],paint(n){let{size:t}=n;n.fill("#b9bb86");for(let e=0;e<t;e+=3)n.rect(0,e,t,1.4,`rgba(86,96,48,${.1+n.roll()*.14})`,.25);for(let e of[0,t/2])n.rect(e-7,0,14,t,"#2f3a2c",.9);n.noise({cells:4,octaves:3,colour:10,seed:35,tint:[1,1,.5]}).noise({cells:160,cellsY:6,octaves:1,colour:8,height:.2,seed:36})}},bathTile:{size:256,metres:.8,depth:.0025,rough:[.9,.14],paint(n){Ri(n,8,8,{joint:"#a9b0b2",jointLevel:.25,gap:3,stagger:!1,tone:6,bevel:1.5,palette:[[246,248,248],[240,243,244],[250,251,251]]})}},checker:{size:256,metres:1.2,depth:.002,rough:[.9,.22],paint(n){let{size:t}=n;n.fill("#8a8a88",.3);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.rect(i*t/4+1,e*t/4+1,t/4-2,t/4-2,(e+i)%2?"#3f4042":"#f1eee7",.85);n.noise({cells:6,octaves:3,colour:8,seed:37})}},pavers:{size:512,metres:1.6,depth:.007,rough:[.98,.82],relief:!0,paint(n){Ri(n,4,4,{joint:"#7f7a70",jointLevel:.15,gap:6,stagger:!1,tone:16,bevel:3,palette:[[226,220,206],[214,208,194],[234,230,218],[206,200,186]]}),n.noise({cells:40,octaves:3,colour:16,height:.22,seed:38}).noise({cells:3,octaves:3,colour:14,seed:39})}},carpet:{size:256,metres:1,depth:.003,rough:[1,.96],paint(n){n.fill("#cfcfcf").noise({cells:128,octaves:1,colour:40,height:.7,seed:40}).noise({cells:5,octaves:3,colour:10,seed:41})}},kawara:{size:512,metres:1.5,depth:.03,rough:[.8,.5],relief:!0,paint(n){let{size:t}=n,e=6,i=5;n.fill("#cfcfcf");for(let s=0;s<i;s++){let r=s*t/i;for(let o=0;o<e;o++){let a=o*t/e,c=(n.roll()-.5)*22;for(let l=0;l<16;l++){let h=Math.sin(l/15*Math.PI*1.25-.25);n.rect(a+l*t/e/16,r,t/e/16+.6,t/i,ms([205,205,205],c+h*26),.25+Math.max(0,h)*.6)}n.rect(a,r+t/i-5,t/e,5,"rgba(0,0,0,0.4)",.02),n.rect(a,r,t/e,3,"rgba(255,255,255,0.22)",null)}}n.noise({cells:60,octaves:2,colour:10,height:.05,seed:42}).noise({cells:3,octaves:2,colour:12,seed:43})}},slate:{size:512,metres:1.2,depth:.008,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#b9b9b9",.5);for(let e=0;e<4;e++)for(let i=-1;i<6;i++){let s=i*t/6+(e%2?t/12:0),r=e*t/4,o=(n.roll()-.5)*30;for(let a=0;a<8;a++)n.rect(s+1,r+a*t/32,t/6-2,t/32+.5,ms([196,196,196],o),.3+a/7*.6);n.rect(s,r+t/4-4,t/6,4,"rgba(0,0,0,0.42)",.04),n.rect(s-1,r,2,t/4,"rgba(0,0,0,0.3)",.1)}n.noise({cells:50,octaves:3,colour:14,height:.08,seed:44})}},roofMetal:{size:256,metres:.9,depth:.022,rough:[.62,.42],relief:!0,paint(n){let{size:t}=n;n.fill("#d6d6d6",.3);for(let e=0;e<2;e++){let i=e*t/2;n.rect(i-6,0,12,t,"rgba(0,0,0,0.22)",.65),n.rect(i-2.5,0,5,t,"rgba(255,255,255,0.4)",1)}n.noise({cells:2,cellsY:40,octaves:1,colour:6,seed:45}).noise({cells:4,octaves:3,colour:8,height:.04,seed:46})}},asphalt:{size:512,metres:4,depth:.004,rough:[.97,.86],paint(n){n.fill("#47494d").speckle(1500,[.5,1.5],["rgba(170,170,170,0.5)","rgba(14,14,16,0.5)","rgba(120,116,108,0.45)"],t=>.3+t*.6).cracks(4,"rgba(16,16,18,0.7)",{width:1.6,level:.05,steps:34}).noise({cells:4,octaves:4,colour:18,height:.08,seed:47}).noise({cells:170,octaves:1,colour:16,height:.4,seed:48})}},sidewalk:{size:512,metres:2.4,depth:.005,rough:[.97,.84],relief:!0,paint(n){Ri(n,6,6,{joint:"#6d6b66",jointLevel:.15,gap:4,stagger:!1,tone:14,bevel:2,palette:[[190,188,180],[180,178,170],[198,196,190],[172,170,162]]}),n.speckle(300,[.5,1.6],["rgba(60,60,56,0.3)","rgba(230,230,224,0.25)"],null).noise({cells:60,octaves:2,colour:14,height:.2,seed:49}).noise({cells:3,octaves:3,colour:16,seed:50})}},grass:{size:512,metres:6,depth:.02,rough:[1,.92],paint(n){let{size:t}=n;n.fill("#587040");for(let e=0;e<5200;e++){let i=n.roll(),s=n.roll()*t,r=n.roll()*t;n.line(s,r,s+(n.roll()-.5)*6,r-3-n.roll()*6,1,i>.6?"rgba(134,156,86,0.5)":i>.25?"rgba(52,82,40,0.55)":"rgba(126,124,70,0.4)",.4+i*.5)}n.noise({cells:5,octaves:4,colour:34,height:.2,seed:51,tint:[.9,1,.5]}).noise({cells:26,octaves:2,colour:16,seed:52,tint:[1,1,.3]})}},dirt:{size:256,metres:5,depth:.01,rough:[1,.94],paint(n){n.fill("#88765c").speckle(260,[.6,2.4],["rgba(60,50,40,0.4)","rgba(190,176,150,0.35)"],t=>t).noise({cells:4,octaves:4,colour:30,height:.3,seed:53}).noise({cells:90,octaves:1,colour:14,height:.3,seed:54})}},gravel:{size:256,metres:1.5,depth:.012,rough:[1,.9],relief:!0,paint(n){n.fill("#77746c",.1).speckle(900,[2,5],["#b9b5aa","#9e9a90","#c9c5ba","#8a877e","#a8a094"],t=>.5+t*.5).noise({cells:80,octaves:1,colour:12,height:.1,seed:55})}},cblock:{size:512,metres:1.6,depth:.006,rough:[.98,.9],relief:!0,paint(n){Ri(n,4,8,{joint:"#a7a59d",jointLevel:.25,gap:3,tone:12,bevel:1,level:.86,palette:[[176,174,167],[168,167,161],[184,182,175],[162,161,156],[172,168,160]]}),n.speckle(900,[.4,1.4],["rgba(70,70,66,0.35)","rgba(210,208,200,0.25)"],.7).noise({cells:40,octaves:2,colour:12,height:.2,seed:61}).noise({cells:3,octaves:3,colour:14,seed:62,tint:[1,1,.9]})}},hedge:{size:512,metres:1.2,depth:.05,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#22381c",.15);let e=[[78,112,52],[92,128,60],[64,98,44],[104,136,66],[58,86,40],[118,146,70]];for(let i=0;i<3400;i++){let s=n.roll()*t,r=n.roll()*t,o=5+n.roll()*7,a=n.roll()*Math.PI,[c,l,h]=e[Math.floor(n.roll()*e.length)],d=.8+n.roll()*.4;n.both(`rgb(${Math.round(c*d)},${Math.round(l*d)},${Math.round(h*d)})`,.45+n.roll()*.55,f=>{f.beginPath(),f.ellipse(s,r,o,o*.45,a,0,Math.PI*2),f.fill()})}n.noise({cells:6,octaves:3,colour:26,height:.35,seed:63}).noise({cells:2,octaves:2,colour:14,seed:64,tint:[1,1,.6]})}},bark:{size:256,metres:1,depth:.03,rough:[1,.9],relief:!0,paint(n){n.fill("#6f5d4b").noise({cells:16,cellsY:2,octaves:3,colour:60,height:.9,seed:56,ridge:!0}).noise({cells:60,cellsY:20,octaves:2,colour:20,height:.15,seed:57}).noise({cells:3,octaves:2,colour:16,seed:58,tint:[.6,1,.6]})}}},qc=new Map,Zg=4,ar=1;function Jg(n){if(!qc.has(n)){let t=yu[n],e=new Yc(t.size);t.paint(e),qc.set(n,{...e.finish(t),relief:!!t.relief})}return qc.get(n)}var Kg={value:new L(1.32,1.27,1.17)},jg=`
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
`,Qg=`
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
`,tx=`
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
`;function ex(n){n.userData.parallax={value:0},n.onBeforeCompile=t=>{t.uniforms.parallaxDepth=n.userData.parallax,t.uniforms.machiRoom=Kg,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMachiWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>
${jg}`).replace("#include <map_fragment>",`vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${Ht.map_fragment.replaceAll("vMapUv","( vMapUv + parallaxUv )")}
        ${Qg}`).replace("#include <roughnessmap_fragment>",`${Ht.roughnessmap_fragment.replaceAll("vRoughnessMapUv","( vRoughnessMapUv + parallaxUv )")}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`).replace("#include <normal_fragment_maps>",Ht.normal_fragment_maps.replaceAll("texture2D( normalMap, vNormalMapUv )","texture2D( normalMap, vNormalMapUv + parallaxUv )")).replace("#include <lights_fragment_end>",`${tx}
#include <lights_fragment_end>`).replace("#include <aomap_fragment>",Ht.aomap_fragment.replaceAll("vAoMapUv","( vAoMapUv + parallaxUv )"))},n.customProgramCacheKey=()=>"machi-surface"}function nx(n){let{set:t,wants:e,recipe:i}=n.userData;if(!i)return;let s=(r,o)=>{o?n.defines[r]="":delete n.defines[r]};if(s("MACHI_WEAR",ar>=1),t){n.normalMap=ar>=1?t.normalMap:null,n.roughnessMap=ar>=1?t.surfaceMap:null,n.aoMap=ar>=1?t.surfaceMap:null;let r=ar>=2&&t.relief&&e;s("MACHI_PARALLAX",r),n.userData.parallax.value=r?t.depth/t.metres*1.5:0}n.needsUpdate=!0}var gs=new Map;function oe(n,t="#ffffff",{roughness:e,metalness:i=0,twoSided:s=!1,relief:r=!0,where:o=""}={}){let a=`${n}|${t}|${e}|${i}|${s}|${r}|${o}`;if(!gs.has(a)){let c=Object.hasOwn(yu,n),l={color:c?t:n,roughness:e??(c?1:.85),metalness:i};s&&(l.side=Ge);let h=new Mn(l);h.userData={recipe:[n,t,{roughness:e,metalness:i,twoSided:s,relief:r}],wants:r},c&&(h.userData.set=Jg(n),h.map=h.userData.set.map,h.aoMapIntensity=.85),o==="out"&&(h.defines.MACHI_OUTDOOR=""),o==="in"&&(h.defines.MACHI_INDOOR=""),ex(h),nx(h),gs.set(a,h)}return gs.get(a)}function ix(n,t){let e=n.userData?.recipe;return!e||!t?n:oe(e[0],e[1],{...e[2],where:t})}var ca=(n,t=1.6)=>{let e=`glow|${n}|${t}`;return gs.has(e)||gs.set(e,new Mn({color:n,emissive:n,emissiveIntensity:t,roughness:.6})),gs.get(e)};var jt={WATER:0,RIVERBED:1,FOREST:2,GREEN:3,FIELD:4,PADDY:5,PARK:6,LOW:7,DENSE:8,MID:9,HIGH:10,COMMERCIAL:11,INDUSTRIAL:12,PUBLIC:13},vu={COLLECTOR:2,ARTERIAL:3,TRUNK:4},sx={[jt.WATER]:"#5f8fa8",[jt.RIVERBED]:"#93ad6c",[jt.FOREST]:"#4f6b3a",[jt.GREEN]:"#6d8a4a",[jt.FIELD]:"#a08a5c",[jt.PADDY]:"#8fa25a",[jt.PARK]:"#79984f",[jt.LOW]:"#8f9a72",[jt.DENSE]:"#9a9584",[jt.MID]:"#9a9a8c",[jt.HIGH]:"#a2a29a",[jt.COMMERCIAL]:"#a6a39b",[jt.INDUSTRIAL]:"#9e9c94",[jt.PUBLIC]:"#b39f7c"},la=[];for(let[n,t]of Object.entries(sx))la[n]=new Xt(t);var rx={[jt.LOW]:2.9,[jt.DENSE]:2.8,[jt.MID]:2.95,[jt.HIGH]:2.95,[jt.COMMERCIAL]:3.4,[jt.INDUSTRIAL]:5.5,[jt.PUBLIC]:3.8},Mu={[jt.LOW]:[["siding","#f1ece2"],["mortar","#e9e2d3"],["siding","#d9d5cc"],["mortar","#cfc5b3"],["siding","#b8b2a6"]],[jt.DENSE]:[["mortar","#ddd5c4"],["planks","#8a7258"],["mortar","#c9c0ae"],["siding","#cfcac0"]],[jt.MID]:[["concrete","#e3e0d8"],["tile","#d8d2c6"],["mortar","#ece7dc"]],[jt.HIGH]:[["concrete","#dcdad4"],["tile","#cfccc4"]],[jt.COMMERCIAL]:[["tile","#d6d0c8"],["concrete","#cfcbc4"],["mortar","#e2dbd0"]],[jt.INDUSTRIAL]:[["metalPanel","#b9c0c6"],["metalPanel","#a7b0b5"]],[jt.PUBLIC]:[["concrete","#eeece6"]]},$c=[["kawara","#6e7378"],["kawara","#4f565c"],["slate","#6a5446"],["slate","#4d5a66"],["roofMetal","#7c6a5b"]],Zc=(n,t,e)=>Math.min(e,Math.max(t,n)),bu=5,Su=()=>new Promise(n=>setTimeout(n,0)),wu=null,Eu=null;function Tu(){let n=new fe;n.name="region";let t=null,e=0;function i(S,v,_){let A=Zc((v-S.box.x0)/S.step,0,S.width-1),T=Zc((_-S.box.z0)/S.step,0,S.depth-1),E=Math.min(S.width-2,Math.floor(A)),R=Math.min(S.depth-2,Math.floor(T)),b=A-E,M=T-R,I=S.heights,D=E+R*S.width,U=I[D]+(I[D+1]-I[D])*b,k=I[D+S.width]+(I[D+S.width+1]-I[D+S.width])*b;return U+(k-U)*M}function s(S,v){let{width:_,depth:A,step:T}=S,E=new Uint32Array((_-1)*(A-1)*6),R=0;for(let b=0;b<A-1;b++){let M=S.box.z0+b*T,I=v&&M>=v.z0&&M+T<=v.z1;for(let D=0;D<_-1;D++){if(I){let K=S.box.x0+D*T;if(K>=v.x0&&K+T<=v.x1)continue}let U=D+b*_,k=U+1,H=U+_,X=H+1;E[R++]=U,E[R++]=H,E[R++]=k,E[R++]=k,E[R++]=H,E[R++]=X}}return new Ce(E.subarray(0,R),1)}function*r(S,v,_,A){let{width:T,depth:E,step:R,heights:b,use:M,water:I}=S,D=new Float32Array(T*E*3),U=new Float32Array(T*E*3),k=A?null:new Float32Array(D.length),H=1/0,X=-1/0;for(let ct=0;ct<E;ct++){let pt=Math.max(0,ct-1),yt=Math.min(E-1,ct+1);for(let tt=0;tt<T;tt++){let z=tt+ct*T;D[z*3]=S.box.x0+tt*R-v[0];let V=b[z]-_;D[z*3+1]=V,D[z*3+2]=S.box.z0+ct*R-v[1],H=Math.min(H,V),X=Math.max(X,V);let $=I[z]?la[jt.WATER]:la[M[z]]??la[jt.LOW];if(U[z*3]=$.r,U[z*3+1]=$.g,U[z*3+2]=$.b,k){let xt=Math.max(0,tt-1),ft=Math.min(T-1,tt+1),Rt=(b[xt+ct*T]-b[ft+ct*T])/((ft-xt)*R),Jt=(b[tt+pt*T]-b[tt+yt*T])/((yt-pt)*R),P=Math.sqrt(Rt*Rt+1+Jt*Jt);k[z*3]=Rt/P,k[z*3+1]=1/P,k[z*3+2]=Jt/P}}ct%8===7&&(yield)}let K=new Xe;K.setAttribute("position",new Ce(D,3)),K.setAttribute("color",new Ce(U,3)),k&&K.setAttribute("normal",new Ce(k,3)),K.setIndex(s(S,null));let W=(T-1)*R/2,it=(E-1)*R/2,G=new L(S.box.x0-v[0]+W,(H+X)/2,S.box.z0-v[1]+it);K.boundingSphere=new Nn(G,Math.hypot(W,(X-H)/2,it)),wu??(wu=new Mn({vertexColors:!0,roughness:1,metalness:0})),Eu??(Eu=new Fn({vertexColors:!0}));let Q=new Ie(K,A?Eu:wu);return Q.receiveShadow=!A,Q.name="region-ground",Q}function o(S,v,_,A,T,E,R,{lift:b=.05,side0:M=-1,side1:I=1,step:D=6}={}){let{x0:U,z0:k,x1:H,z1:X}=_.box,K=20,W=[];for(let pt=0;pt<A.length;pt+=2)W.push([A[pt],A[pt+1]]);let it=[W[0]];for(let pt=1;pt<W.length;pt++){let[yt,tt]=W[pt-1],[z,V]=W[pt],$=Math.max(1,Math.ceil(Math.hypot(z-yt,V-tt)/D));for(let xt=1;xt<=$;xt++)it.push([yt+(z-yt)*xt/$,tt+(V-tt)*xt/$])}let G=T/2,Q=pt=>{let[yt,tt]=it[Math.max(0,pt-1)],[z,V]=it[Math.min(it.length-1,pt+1)],$=Math.hypot(z-yt,V-tt)||1,xt=-(V-tt)/$,ft=(z-yt)/$,[Rt,Jt]=it[pt],P=Vt=>{let bt=Rt+xt*G*Vt,nt=Jt+ft*G*Vt;return new L(bt-E[0],i(_,bt,nt)-R+b,nt-E[1])};return[P(M),P(I)]},ct=null;for(let pt=0;pt<it.length;pt++){let[yt,tt]=it[pt],V=yt>U-K&&yt<H+K&&tt>k-K&&tt<X+K?Q(pt):null;ct&&V&&S.face(v,[ct[0],V[0],V[1],ct[1]]),ct=V}}function*a(S,v,_){let A=new Le,T=oe("asphalt","#ffffff"),E=oe("sidewalk","#ffffff"),R=oe("asphalt","#d4d4d0");for(let M of S.roads){let I=M.kind>=vu.ARTERIAL?3.5:2.5,D=Zc(1-2*I/M.width,.2,1);o(A,T,S,M.points,M.width,v,_,{lift:.08,side0:-D,side1:D}),o(A,E,S,M.points,M.width,v,_,{lift:.18,side0:-1,side1:-D}),o(A,E,S,M.points,M.width,v,_,{lift:.18,side0:D,side1:1}),yield}for(let M of S.streets)o(A,R,S,M.points,M.width,v,_,{lift:.06,step:4}),yield;let b=new fe;return b.name="region-roads",A.build(b,{cast:!1,receive:!0,where:"out"}),b}function*c(S,v,_){let A=[],T=[],E=new Xt;for(let I of S.roads){E.set(I.kind>=vu.ARTERIAL?"#e9d8ad":"#dddcd4");for(let D=2;D<I.points.length;D+=2)for(let U of[D-2,D]){let k=I.points[U],H=I.points[U+1];A.push(k-v[0],i(S,k,H)-_+4,H-v[1]),T.push(E.r,E.g,E.b)}yield}let R=new Xe;R.setAttribute("position",new Se(A,3)),R.setAttribute("color",new Se(T,3));let b=new ns({vertexColors:!0});b.userData.ownMaterial=!0;let M=new Hs(R,b);return M.userData.ownMaterial=!0,M.name="region-overview-roads",M}function*l(S,v,_){let A=new Le,T=[];for(let R of S.buildings){yield;let b=R.corners,M=[[b[0],b[1]],[b[2],b[3]],[b[4],b[5]],[b[6],b[7]]],I=1/0,D=-1/0;for(let[yt,tt]of M){let z=i(S,yt,tt)-_;I=Math.min(I,z),D=Math.max(D,z)}let U=rx[R.use]??2.9,k=I-.3,H=D+.4+R.floors*U,X=Mu[R.use]??Mu[jt.LOW],[K,W]=X[Math.floor(R.tone*X.length)%X.length],it=oe(K,W),G=M.map(([yt,tt])=>[yt-v[0],tt-v[1]]),Q=(G[0][0]+G[1][0]+G[2][0]+G[3][0])/4,ct=(G[0][1]+G[1][1]+G[2][1]+G[3][1])/4;for(let yt=0;yt<4;yt++){let[tt,z]=G[yt],[V,$]=G[(yt+1)%4],xt=new L((tt+V)/2-Q,0,(z+$)/2-ct);A.quad(it,new L(tt,k,z),new L(V,k,$),new L(V,H,$),new L(tt,H,z),xt)}if((R.use===jt.LOW||R.use===jt.DENSE)&&R.floors<=3){let[yt,tt]=$c[Math.floor(R.tone*7.3*$c.length)%$c.length],z=oe(yt,tt),V=Math.hypot(G[1][0]-G[0][0],G[1][1]-G[0][1])>=Math.hypot(G[3][0]-G[0][0],G[3][1]-G[0][1]),[$,xt,ft,Rt]=V?G:[G[1],G[2],G[3],G[0]],Jt=(B,Z,et)=>{let J=B[0]-Z[0],Ct=B[1]-Z[1],ht=Math.hypot(J,Ct)||1;return[B[0]+J/ht*et,B[1]+Ct/ht*et]},P=[Q,ct],[Vt,bt,nt,lt]=[$,xt,ft,Rt].map(B=>Jt(B,P,.45)),Qt=Math.hypot(Rt[0]-$[0],Rt[1]-$[1]),St=Math.min(2.6,Qt*.28),Bt=(B,Z)=>[(B[0]+Z[0])/2,(B[1]+Z[1])/2],ye=Bt(Vt,lt),de=Bt(bt,nt),C=H-.15,y=(B,Z)=>new L(B[0],Z,B[1]);A.quad(z,y(Vt,C),y(bt,C),y(de,H+St),y(ye,H+St),new L(Vt[0]-lt[0],1,Vt[1]-lt[1])),A.quad(z,y(lt,C),y(ye,H+St),y(de,H+St),y(nt,C),new L(lt[0]-Vt[0],1,lt[1]-Vt[1])),A.face(it,[y($,H),y(Rt,H),y(Bt($,Rt),H+St)]),A.face(it,[y(ft,H),y(xt,H),y(Bt(xt,ft),H+St)]),A.face(it,[y(Rt,H),y($,H),y(Bt($,Rt),H+St)]),A.face(it,[y(xt,H),y(ft,H),y(Bt(xt,ft),H+St)])}else A.face(oe("concrete","#c9c7c0"),G.map(([yt,tt])=>new L(yt,H,tt)).reverse()),A.face(oe("concrete","#c9c7c0"),G.map(([yt,tt])=>new L(yt,H,tt)));T.push({ring:G,base:k,top:H})}let E=new fe;return E.name="region-buildings",A.build(E,{cast:!0,receive:!0,where:"out"}),{node:E,solids:T}}function*h(S,v,_){let A=new Le,T=oe("#c8553d"),E=oe("#e8e2d0");for(let[b,M,I,D]of[[S.borders.block,E,.35,4],[S.borders.town,T,.7,0]])for(let U=0;U<b.length;U+=4){let k=b[U],H=b[U+1],X=b[U+2],K=b[U+3],W=Math.hypot(X-k,K-H),it=Math.max(1,Math.ceil(W/4));for(let G=0;G<it;G++){if(D&&G%2)continue;let Q=G/it,ct=(G+1)/it;o(A,M,S,[k+(X-k)*Q,H+(K-H)*Q,k+(X-k)*ct,H+(K-H)*ct],I,v,_,{lift:.25,step:4})}yield}let R=new fe;return R.name="region-borders",A.build(R,{cast:!1,receive:!1,where:"out"}),R}function*d(S,v,_,A){let T=new Le;for(let{colour:R,segments:b}of A){let M=oe(R);for(let I=0;I+3<b.length;I+=4)o(T,M,S,[b[I],b[I+1],b[I+2],b[I+3]],2.4,v,_,{lift:.32,side0:0,side1:1,step:4}),I%64===0&&(yield)}let E=new fe;return E.name="region-district-outlines",T.build(E,{cast:!1,receive:!1,where:"out"}),E}function*f(S,v,_,A,T){let E=new Le,R=oe("concrete","#c9c5bc"),b=oe("sidewalk","#ffffff"),M=(D,U,k)=>new L(D-v[0],U-_,k-v[1]);for(let[D,U]of A.entries()){let k=new L(U.nx,0,U.nz);E.quad(R,M(U.ax,U.low[0]-.2,U.az),M(U.bx,U.low[1]-.2,U.bz),M(U.bx,U.high[1]+.12,U.bz),M(U.ax,U.high[0]+.12,U.az),k),E.quad(R,M(U.bx,U.low[1]-.2,U.bz),M(U.ax,U.low[0]-.2,U.az),M(U.ax,U.high[0]+.12,U.az),M(U.bx,U.high[1]+.12,U.bz),k.clone().negate()),D%64===63&&(yield)}for(let D of T)E.face(b,[M(D.x0,D.y+.03,D.z0),M(D.x0,D.y+.03,D.z1),M(D.x1,D.y+.03,D.z1),M(D.x1,D.y+.03,D.z0)]);let I=new fe;return I.name="region-pads",E.build(I,{cast:!0,receive:!0,where:"out"}),I}async function p(S,{origin:v=[0,0],datum:_=0,borders:A=!0,roads:T=!0,coarse:E=!1,outlines:R=[],walls:b=[],paving:M=[]}={}){let I=++e,D=new fe;function*U(){let H=yield*r(S,v,_,E);D.add(H),yield,T&&D.add(E?yield*c(S,v,_):yield*a(S,v,_));let{node:X,solids:K}=yield*l(S,v,_);return S.buildings.length&&D.add(X),A&&D.add(yield*h(S,v,_)),R.length&&D.add(yield*d(S,v,_,R)),(b.length||M.length)&&D.add(yield*f(S,v,_,b,M)),{win:S,origin:v,datum:_,solids:K,ground:H}}let k=U();try{await Su();let H=performance.now()+bu;for(;I===e;){let X=k.next();if(X.done)return m(),n.add(...D.children.slice()),t=X.value,!0;performance.now()>=H&&(await Su(),H=performance.now()+bu)}return!1}finally{k.return(),Ci(D)}}function g(S){t&&t.ground.geometry.setIndex(s(t.win,S))}function x(){e++,m()}function m(){for(let S of[...n.children])n.remove(S),Ci(S);t=null}function u(S,v){if(!t)return null;let _=S+t.origin[0],A=v+t.origin[1],{x0:T,z0:E,x1:R,z1:b}=t.win.box;return _<T||A<E||_>R||A>b?null:i(t.win,_,A)-t.datum}return{group:n,show:p,clear:x,heightAt:u,setHole:g,get solids(){return t?.solids??[]},get window(){return t?.win??null}}}var an={width:.85,height:1.5,span:22},gt={length:14.7,width:2.98,height:5.1,floor:1.13,ceiling:3.28,roof:3.73,skirt:1.37,doors:[-3.65,3.65],doorWidth:1.3,doorHeight:1.9,gap:.5},Jc={speed:12.5,accel:.85,brake:.95,dwell:22,doorsOpenAt:1.4,doorTime:2.4,melodyAt:9.5,doorsCloseAt:5.2},ha=(n,t,e)=>Math.min(e,Math.max(t,n)),ox=n=>Math.round(n*1e3)/1e3,ua=n=>Array.from({length:n},(t,e)=>(e-(n-1)/2)*(gt.length+gt.gap)),Kc=n=>ua(n).flatMap(t=>gt.doors.map(e=>ox(t+e))),jc=n=>n*gt.length+(n-1)*gt.gap;function ax(n,t=60){let e=[[...n[0]]],i=a=>{let c=e.at(-1);Math.hypot(a[0]-c[0],a[1]-c[1])>1e-6&&e.push(a)};for(let a=1;a<n.length-1;a++){let[c,l,h]=[n[a-1],n[a],n[a+1]],d=Math.hypot(l[0]-c[0],l[1]-c[1]),f=Math.hypot(h[0]-l[0],h[1]-l[1]),p=[(l[0]-c[0])/d,(l[1]-c[1])/d],g=[(h[0]-l[0])/f,(h[1]-l[1])/f],x=Math.acos(ha(p[0]*g[0]+p[1]*g[1],-1,1));if(x<.001)continue;let m=Math.min(t*Math.tan(x/2),d/2,f/2),u=m/Math.tan(x/2),S=Math.sign(p[0]*g[1]-p[1]*g[0])||1,v=[l[0]-p[0]*m,l[1]-p[1]*m],_=[v[0]-p[1]*S*u,v[1]+p[0]*S*u],A=Math.atan2(v[1]-_[1],v[0]-_[0]),T=Math.max(2,Math.ceil(u*x));for(let E=0;E<=T;E++){let R=A+S*x*E/T;i([_[0]+Math.cos(R)*u,_[1]+Math.sin(R)*u])}}i([...n.at(-1)]);let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=s.at(-1);return{length:r,spot:a=>{let c=ha(a,0,r),l=0,h=s.length-1;for(;h-l>1;){let x=l+h>>1;s[x]<=c?l=x:h=x}let d=s[h]-s[l]||1,f=(c-s[l])/d,[p,g]=[e[l],e[h]];return{x:p[0]+(g[0]-p[0])*f,z:p[1]+(g[1]-p[1])*f,dx:(g[0]-p[0])/d,dz:(g[1]-p[1])/d}},samples:e}}function Qc(n,t=[],e=an.span){let i=[];for(let[o,a]of[...t].sort((c,l)=>c[0]-l[0])){let c=i.at(-1);c&&o<=c[1]?c[1]=Math.max(c[1],a):i.push([o,a])}let s=Math.max(1,Math.round(n/e)),r=[];for(let o=0;o<=s;o++){let a=n*o/s;for(let c=0;c<4;c++){let l=i.find(([h,d])=>a>h+1e-6&&a<d-1e-6);if(!l)break;a=a-l[0]<l[1]-a?l[0]:l[1]}a=ha(a,0,n),!r.length||a-r.at(-1)>4?r.push(a):o===s&&(r[r.length-1]=n)}return r}function cx(n,{speed:t,accel:e,brake:i}){let s=Math.min(t,Math.sqrt(2*n*e*i/(e+i))),r=s/e,o=s/i,a=Math.max(0,n-s*s/(2*e)-s*s/(2*i))/s,c=r+a+o;return{time:c,top:s,at:h=>{if(h<=0)return[0,0];if(h<r)return[e*h*h/2,e*h];if(h<r+a)return[s*s/(2*e)+s*(h-r),s];if(h<c){let d=c-h;return[n-i*d*d/2,i*d]}return[n,0]}}}function tl(n,t=Jc){let e=ax(n.path,n.radius),i=n.stops.map((p,g)=>({side:1,...p,index:g})),s=n.cars??2,r=[],o=0,a=[...i.keys(),...[...i.keys()].reverse().slice(1,-1)];a.forEach((p,g)=>{let x=a[(g+1)%a.length];r.push({kind:"dwell",at:p,next:x,start:o,time:t.dwell}),o+=t.dwell;let m=cx(Math.abs(i[x].at-i[p].at),t);r.push({kind:"run",at:p,next:x,start:o,time:m.time,run:m,way:Math.sign(i[x].at-i[p].at)}),o+=m.time});let c=o,l=p=>{let g=(p-t.doorsOpenAt)/t.doorTime,x=(t.dwell-t.doorsCloseAt-p)/t.doorTime;return ha(Math.min(g,x),0,1)};function h(p){let g=(p%c+c)%c,x=r[0];for(let A of r)if(A.start<=g)x=A;else break;let m=g-x.start,u=i[x.at],S=i[x.next];if(x.kind==="dwell")return{time:p,phase:"dwell",s:u.at,speed:0,way:Math.sign(S.at-u.at)||1,stop:u,next:S,doors:l(m),leaves:x.time-m};let[v,_]=x.run.at(m);return{time:p,phase:"run",s:u.at+x.way*v,speed:_,way:x.way,stop:null,from:u,next:S,doors:0,arrives:x.time-m}}function d(p,g){if(!(g>p))return[];let x=[];for(let S of r){let v=i[S.at],_=i[S.next];S.kind==="dwell"?x.push([S.start,"arrive",v,_],[S.start+t.doorsOpenAt,"open",v,_],[S.start+S.time-t.melodyAt,"melody",v,_],[S.start+S.time-t.doorsCloseAt,"close",v,_]):x.push([S.start,"depart",v,_],[S.start+Math.min(6,S.time*.3),"next",v,_],[S.start+Math.max(S.time-13,S.time*.55),"soon",v,_],[S.start+Math.max(S.time-16,S.time*.4),"approach",v,_])}let m=[],u=Math.max(p,g-c);for(let S=Math.floor(u/c);S<=Math.floor(g/c);S++)for(let[v,_,A,T]of x){let E=S*c+v;E>u&&E<=g&&m.push({time:E,kind:_,stop:A,next:T})}return m.sort((S,v)=>S.time-v.time)}let f=p=>p.way>0?i.at(-1):i[0];return{name:n.name??"\u30E2\u30CE\u30EC\u30FC\u30EB",y:n.y??7,cars:s,stops:i,way:e,period:c,drive:t,stateAt:h,eventsBetween:d,boundFor:f}}function el(n,t){let e=n.boundFor(t);return t.phase==="dwell"?[`${t.stop.name}`,t.leaves<n.drive.melodyAt?"\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059":`${e.name} \u3086\u304D`]:[t.arrives<14?"\u307E\u3082\u306A\u304F":"\u6B21\u306F",`${t.next.name}`]}var lx=6.62,hx=.05,ux={...Jc,speed:18,accel:.97,brake:1.1,dwell:25},dx=420,Hn=1.85,cn={edge:Hn+gt.width/2+.07,width:3.5,length:48,roof:3.9,stair:3};var xs=(n,t,e)=>Math.min(e,Math.max(t,n));function Tn(n,t){if(!n?.length)return 0;if(t<=n[0][0])return n[0][1];let e=n[n.length-1];if(t>=e[0])return e[1];let i=0,s=n.length-1;for(;s-i>1;){let l=i+s>>1;n[l][0]<=t?i=l:s=l}let[r,o]=n[i],[a,c]=n[s];return o+(c-o)*((t-r)/(a-r||1))}function fx(n,t,{clearance:e=lx,grade:i=hx,level:s=[],floor:r=[]}={}){let o=n.length,a=Float64Array.from(n,h=>h+e),c=i*t,l=()=>{for(let[h,d,f]of r){let p=xs(Math.floor(h/t),0,o-1),g=xs(Math.ceil(d/t),0,o-1);for(let x=p;x<=g;x++)a[x]=Math.max(a[x],f)}for(let[h,d]of s){let f=xs(Math.floor(h/t),0,o-1),p=xs(Math.ceil(d/t),0,o-1),g=-1/0;for(let x=f;x<=p;x++)g=Math.max(g,a[x]);for(let x=f;x<=p;x++)a[x]=g}};for(let h=0;h<6;h++){l();for(let d=1;d<o;d++)a[d]=Math.max(a[d],a[d-1]-c);for(let d=o-2;d>=0;d--)a[d]=Math.max(a[d],a[d+1]-c)}return l(),a}function Au(n,{origin:t=[0,0],datum:e=0,from:i=0,to:s=1/0,cars:r=2,step:o=20}={}){let c=(n.points.length/2-1)*o,l=xs(i,0,c),h=xs(s,l,c),d=jc(r)/2,f=n.stations.filter(E=>E.s-d-2.5>=l&&E.s+d+2.5<=h);if(f.length<2)return null;let p=Math.floor(l/o),g=Math.ceil(h/o),x=[],m=[];for(let E=p;E<=g;E++)x.push([n.points[E*2]-t[0],n.points[E*2+1]-t[1]]),m.push((n.ground?.[E]??0)-e);let u=p*o,S=f.map(E=>[E.s-u-d-8,E.s-u+d+8]),v=fx(m,o,{level:S}),_=Array.from(v,(E,R)=>[R*o,Math.round(E*100)/100]),A=m.map((E,R)=>[R*o,Math.round(E*100)/100]),T=f.map(E=>[E.s-u-6,E.s-u+6]);return{name:n.name,color:n.color,path:x,radius:2e3,heights:_,ground:A,y:_[0][1],cars:r,clear:T,drive:ux,stops:f.map(E=>({name:E.name,at:E.s-u,side:1}))}}function Ru(n,t=dx){return Math.max(1,Math.ceil(n/t))}var px=40,mx=32,Cu=64,gx=new Float32Array(Cu*4*4),da=new jn(gx,Cu,4,Fe,on);da.magFilter=Pe;da.minFilter=Pe;da.needsUpdate=!0;var il=new jn(new Uint8Array([104,132,84,255]),1,1);il.colorSpace=be;il.needsUpdate=!0;var xx={glassScene:{value:da},glassCount:{value:new Ft(0,0)},glassSun:{value:new L(.45,.64,.62)},glassGround:{value:il},glassGroundBox:{value:new he(0,0,1,1)}},_x=`
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
  for ( int i = 0; i < ${px}; i ++ ) {
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
  for ( int i = 0; i < ${mx}; i ++ ) {
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
`,yx=`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`,vx={near:`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,far:`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,inner:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,rail:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`};function Mx(n){let t=n==="far",e=new Mn({color:t?"#0b0e10":"#141b1f",roughness:.04,metalness:0,side:Ge,transparent:!t,depthWrite:t,premultipliedAlpha:!t,forceSinglePass:!0});return n==="inner"&&(e.defines.GLASS_INDOORS=""),(n==="near"||n==="far")&&(e.defines.GLASS_WINDOW=""),e.onBeforeCompile=i=>{Object.assign(i.uniforms,xx),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`);let s=Ht.lights_fragment_maps.replace("radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );","radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );");i.fragmentShader=i.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
${_x}`).replace("#include <lights_fragment_maps>",s).replace("#include <opaque_fragment>",`${yx}
${vx[n]}`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=()=>`machi-glass-${n}`,e}var nl=new Map;function Iu(n="near"){return nl.has(n)||nl.set(n,Mx(n)),nl.get(n)}var sl=".".repeat(32),rl=(n,t)=>[n,n,n,t,t,sl,sl,sl].join(""),D1=[rl(`XXSSSSSAA${"M".repeat(12)}${"E".repeat(11)}`,`${"A".repeat(9)}${"M".repeat(12)}${"E".repeat(11)}`),rl(`XXOOOOOOOTTttEEEEE${"O".repeat(7)}SSSSSXX`,"O".repeat(32)),rl(`${"O".repeat(30)}XX`,"O".repeat(32))];var ue=gt.width/2,Ae=gt.length/2,Me=gt.floor,ln=(n,t=.5,e=0)=>oe(n,"#ffffff",{roughness:t,metalness:e});function pa(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0}),s=5,r=document.createElement("canvas");r.width=n*s,r.height=t*s;let o=r.getContext("2d"),a=new xi(r);a.colorSpace=be;let c=new Fn({map:a,toneMapped:!1}),l=null;return{material:c,show(h,d=["#ffb23e","#8dff9a"]){let f=h.join("|");if(f===l)return;l=f,i.clearRect(0,0,n,t),i.textBaseline="middle",i.textAlign="center";let p=t/h.length;h.forEach((x,m)=>{let u=Math.floor(p*.88),S=_=>`700 ${_}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`;i.font=S(u);let v=i.measureText(x).width;v>n-4&&(i.font=S(Math.max(6,Math.floor(u*(n-4)/v)))),i.fillStyle=d[m%d.length],i.fillText(x,n/2,p*(m+.5)+.5)});let g=i.getImageData(0,0,n,t).data;o.fillStyle="#08090a",o.fillRect(0,0,r.width,r.height);for(let x=0;x<t;x++)for(let m=0;m<n;m++){let u=(x*n+m)*4;o.fillStyle=g[u+3]>96?`rgb(${g[u]},${g[u+1]},${g[u+2]})`:"#1b1d1f",o.beginPath(),o.arc((m+.5)*s,(x+.5)*s,s*.4,0,Math.PI*2),o.fill()}a.needsUpdate=!0},dispose(){a.dispose(),c.dispose()}}}function fa(n,t,e,i=!1,s=0){let r=new fe,o=new Le;o.box(ln("#2a2e31",.5,.3),0,0,0,t+.08,e+.08,.09);for(let a of s?[-t*.35,t*.35]:[])o.box(ln("#9aa0a3",.4,.7),a,e/2+.04+s/2,0,.025,s,.025);o.build(r,{cast:!1});for(let a of i?[1,-1]:[1]){let c=new Ie(new yi(t,e),n.material);c.position.z=a*.047,a<0&&(c.rotation.y=Math.PI),r.add(c)}return r}var Pu=[[-Ae,gt.doors[0]-gt.doorWidth/2],[gt.doors[0]+gt.doorWidth/2,gt.doors[1]-gt.doorWidth/2],[gt.doors[1]+gt.doorWidth/2,Ae]];function Du({front:n,back:t,boards:e}){let i=new fe,s=new Le,r=new Le,o=new Le,a=ln("#f1f2f0",.42,.12),c=ln("#1e8f8a",.45,.12),l=ln("#3a4046",.6,.25),h=ln("#b9bcbd",.55,.2),d=ln("#1f2326",.5,.2),f=ln("#c9cdcf",.3,.8),p=Iu("near"),g=Me+.45,x=Me+1.95,m=gt.roof-.35,u=(_,A,T)=>new L(_,A,T);for(let _ of[-1,1]){let A=_*ue,T=u(_,0,0);s.box(l,_*(ue-.03),(.3-gt.skirt)/2,0,.06,gt.skirt+.3,gt.length),s.box(c,_*(ue-.03),.525,0,.062,.45,gt.length);for(let[E,R]of Pu){let b=R-E,M=(E+R)/2;s.box(a,_*(ue-.035),(.75+g)/2,M,.07,g-.75,b);let I=Math.max(1,Math.round(b/1.8)),D=[E===-Ae?E+.34:E+.1,R===Ae?R-.34:R-.1];for(let U=0;U<I;U++){let k=D[0]+(D[1]-D[0])*U/I+.03,H=D[0]+(D[1]-D[0])*(U+1)/I-.03;o.quad(p,u(A-_*.02,g,k),u(A-_*.02,g,H),u(A-_*.02,x,H),u(A-_*.02,x,k),T),U&&s.box(d,_*(ue-.035),(g+x)/2,k-.03,.07,x-g,.06)}for(let[U,k]of[[E,E===-Ae?.34:.1],[R,R===Ae?-.34:-.1]])s.box(a,_*(ue-.035),(g+x)/2,U+k/2,.07,x-g,Math.abs(k))}s.box(a,_*(ue-.035),(x+m)/2,0,.07,m-x,gt.length);for(let E of gt.doors)s.box(l,_*(ue-.03),.94,E,.062,.38,gt.doorWidth);s.quad(h,u(A,m,-Ae),u(A,m,Ae),u(_*.95,gt.roof,Ae),u(_*.95,gt.roof,-Ae),u(_*.4,1,0));for(let E of[-4.9,4.9])s.box(d,_*(an.width/2+.34),-.6,E,.56,1.1,2.3)}s.quad(h,u(-.95,gt.roof,-Ae),u(-.95,gt.roof,Ae),u(.95,gt.roof,Ae),u(.95,gt.roof,-Ae),u(0,1,0));for(let _ of[-3.1,3.1])s.box(ln("#a9adae",.6,.2),0,gt.roof+.13,_,1.6,.26,2.4);s.box(l,0,Me-.06,0,gt.width,.12,gt.length);for(let _ of[-4.9,4.9])s.box(d,0,.52,_,gt.width-.2,.9,2.5);for(let[_,A]of[[1,n],[-1,t]]){let T=_*Ae,E=u(0,0,_);if(A){s.box(a,0,(.75+g)/2,T-_*.035,gt.width,g-.75,.07),s.box(c,0,.525,T-_*.03,gt.width,.45,.062),s.box(l,0,(.3-gt.skirt)/2,T-_*.03,gt.width,gt.skirt+.3,.06);for(let b of[-ue+.11,ue-.11])s.box(a,b,(g+x)/2,T-_*.035,.22,x-g,.07);s.box(a,0,(x+m)/2,T-_*.035,gt.width,m-x,.07),o.quad(p,u(-ue+.22,g,T-_*.02),u(ue-.22,g,T-_*.02),u(ue-.22,x,T-_*.02),u(-ue+.22,x,T-_*.02),E);for(let b of[-.95,.95])s.box(ca("#fff6dc",1.1),b,g-.2,T+_*.002,.26,.1,.01),s.box(ca("#d0302b",.6),b*.72,g-.2,T+_*.002,.12,.08,.01);let R=fa(e.bound,1.3,.2);R.position.set(0,(x+m)/2,T+_*.012),R.rotation.y=_>0?0:Math.PI,i.add(R)}else{for(let R of[-1,1])s.box(a,R*(ue+.55)/2,(Me+m)/2,T-_*.035,ue-.55,m-Me,.07);s.box(a,0,(Me+2+m)/2,T-_*.035,1.1,m-Me-2,.07);for(let R of[-.6,.6])s.box(d,R,Me+1,T+_*gt.gap/4,.08,2.1,gt.gap/2);s.box(d,0,Me+2.08,T+_*gt.gap/4,1.28,.08,gt.gap/2),s.box(d,0,Me-.04,T+_*gt.gap/4,1.28,.08,gt.gap/2)}}r.slab(ln("#5e6f7d",.7),-ue+.07,-Ae+.07,ue-.07,Ae-.07,Me+.002),r.box(ln("#eceeed",.6),0,gt.ceiling+.03,0,gt.width-.14,.06,gt.length-.14);for(let _ of[-.5,.5])r.box(ca("#fff9ec",1.25),_,gt.ceiling-.004,0,.14,.012,gt.length-1.2);let S=oe("carpet","#3f6f8f");for(let _ of[-1,1]){for(let[A,T]of Pu){let E=A===-Ae?A+(t?.75:.25):A+.3,R=T===Ae?T-(n?.75:.25):T-.3;if(R-E<.6)continue;let b=(E+R)/2;r.box(S,_*(ue-.32),Me+.36,b,.46,.12,R-E),r.box(ln("#d9dcdc",.6),_*(ue-.32),Me+.15,b,.42,.3,R-E),r.box(S,_*(ue-.11),Me+.62,b,.08,.4,R-E);for(let M of[E,R])r.box(f,_*(ue-.32),Me+.7,M,.5,.56,.03)}r.box(f,_*.66,Me+1.9,0,.03,.03,gt.length-1.4);for(let A of gt.doors){for(let E of[A-.76,A+.76])r.cylinder(f,_*(ue-.56),Me,E,.017,gt.ceiling-Me,8);let T=fa(e.car,.9,.16);T.position.set(_*(ue-.085),Me+2.02,A),T.rotation.y=_>0?-Math.PI/2:Math.PI/2,i.add(T)}}s.build(i,{where:"out"}),r.build(i,{where:"in",cast:!1});for(let _ of o.build(i,{cast:!1}))_.renderOrder=1;let v=[];for(let _ of[-1,1])for(let A of gt.doors)for(let T of[-1,1]){let E=new Le,R=gt.doorWidth/2,b=(I,D,U,k)=>E.box(f,0,(U+k)/2,(I+D)/2,.035,k-U,D-I);b(-R/2,-R/2+.05,0,gt.doorHeight),b(R/2-.05,R/2,0,gt.doorHeight),b(-R/2,R/2,0,.18),b(-R/2,R/2,gt.doorHeight-.07,gt.doorHeight),E.quad(p,u(0,.18,-R/2+.05),u(0,.18,R/2-.05),u(0,gt.doorHeight-.07,R/2-.05),u(0,gt.doorHeight-.07,-R/2+.05),u(_,0,0));let M=new fe;for(let I of E.build(M,{cast:!1}))I.material===p&&(I.renderOrder=1);M.position.set(_*(ue+.02),Me,A+T*R/2),i.add(M),v.push({leaf:M,side:_,shut:A+T*R/2,slide:T*(R-.03)})}return{car:i,leaves:v}}var gn={width:1.8,slope:.6,landing:2.2,riser:.17,gap:.2};function Lu(n,t,e=cn.length/2){let i=cn.edge,s=cn.edge+cn.width,r=n-t,o={edge:i,outer:s,long:e,level:n,ground:t,stair:null,landing:null};if(!(r>1))return o;let a=Math.min(r/gn.slope,2*e-gn.landing-4),c=e-2,l=c-a,h=s+gn.gap;return o.stair={u0:h,u1:h+gn.width,top:l,bottom:c,run:a,rise:r},o.landing={u0:s-.2,u1:h+gn.width,v0:l-gn.landing,v1:l},o}function wx(n){let{edge:t,outer:e,long:i,level:s,ground:r,stair:o,landing:a}=n,c=[s-.4,s+2.2],l=[{u0:t,u1:e,v0:-i,v1:i,y0:s,y1:s}],h=[[t,-i,t,i,...c],[t,-i,e,-i,...c],[t,i,e,i,...c]],d=[];if(o){l.push({u0:a.u0,u1:a.u1,v0:a.v0,v1:a.v1,y0:s,y1:s}),l.push({u0:o.u0,u1:o.u1,v0:o.top,v1:o.bottom,y0:s,y1:r}),h.push([e,-i,e,a.v0,...c],[e,a.v1,e,i,...c]),h.push([e,a.v0,a.u1,a.v0,...c],[a.u1,a.v0,a.u1,a.v1,...c]);let f=[r-.5,s+2.2];h.push([o.u0,o.top,o.u0,o.bottom,...f],[o.u1,o.top,o.u1,o.bottom,...f]),h.push([o.u0,o.top,o.u1,o.top,r-.5,s-2])}else h.push([e,-i,e,i,...c]);for(let f=-i+4;f<=i-4;f+=8)d.push({u:e-.6,v:f,w:.7,d:.7,low:r-.5,high:s-.5});return{surfaces:l,walls:h,boxes:d}}function Uu(n,{x:t,z:e,dx:i,dz:s,sign:r=1}){let o=r*s,a=r*-i,c=r*i,l=r*s,h=(m,u)=>[t+m*o+u*c,e+m*a+u*l],d=wx(n),f=d.surfaces.map(m=>{let u=[h(m.u0,m.v0),h(m.u1,m.v0),h(m.u1,m.v1),h(m.u0,m.v1)];return{...m,x:t,z:e,ux:o,uz:a,vx:c,vz:l,box:ol(u)}}),p=d.walls.map(([m,u,S,v,_,A])=>{let[T,E]=h(m,u),[R,b]=h(S,v);return{ax:T,az:E,bx:R,bz:b,r:.05,low:_,high:A,box:ol([[T,E],[R,b]])}}),g=Math.atan2(i,s)*180/Math.PI,x=d.boxes.map(m=>{let[u,S]=h(m.u,m.v);return{x:u,z:S,w:m.w,d:m.d,r:g,low:m.low,high:m.high,box:ol([[u-m.w,S-m.d],[u+m.w,S+m.d]])}});return{surfaces:f,walls:p,boxes:x}}function ol(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[r,o]of n)t=Math.min(t,r),i=Math.max(i,r),e=Math.min(e,o),s=Math.max(s,o);return{x0:t,z0:e,x1:i,z1:s}}function Nu(n){return n.eventsBetween(-.001,n.period-.001).filter(t=>t.kind==="arrive").map(t=>({time:t.time,stop:t.stop.index,way:Math.sign(t.next.at-t.stop.at)||1}))}function Ou(n,t,e,i,s,r){let o=e.map(h=>n.stateAt(r+h)).find(h=>h.phase==="dwell"&&h.stop.index===i.index&&h.way===s),a=`${i.name} ${s>0?1:2}\u756A\u7DDA`,c=s>0?n.stops.at(-1):n.stops[0];if(o){let h=n.drive.dwell-o.leaves,d="\u505C\u8ECA\u4E2D";return h<n.drive.doorsOpenAt+n.drive.doorTime?d="\u30C9\u30A2\u304C\u958B\u304D\u307E\u3059":o.leaves<=n.drive.doorsCloseAt?d="\u767A\u8ECA\u3057\u307E\u3059":o.leaves<n.drive.doorsCloseAt+n.drive.doorTime&&(d="\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059"),{doors:o.doors,text:[a,`${c.name} \u3086\u304D`,d]}}let l=1/0;for(let h of t)if(!(h.stop!==i.index||h.way!==s))for(let d of e){let f=((h.time-r-d)%n.period+n.period)%n.period;l=Math.min(l,f)}return Number.isFinite(l)?{doors:0,text:[a,`${c.name} \u3086\u304D`,l<20?"\u307E\u3082\u306A\u304F\u5230\u7740":`\u7D04 ${Math.max(1,Math.ceil(l/60))} \u5206`]}:{doors:0,text:[a,"\u3053\u306E\u30DB\u30FC\u30E0\u306E\u904B\u884C\u306A\u3057","\u53CD\u5BFE\u5074\u30DB\u30FC\u30E0\u3078"]}}function Fu({clock:n=()=>Date.now()/1e3}={}){let t=new fe;t.name="route-transit";let e=[],i="",s="",r=0;function o(p){if(p.track){t.remove(p.track),Ci(p.track);for(let g of p.platforms)g.board.dispose();p.track=null,p.platforms=[]}}function a(){for(let p of e){o(p);for(let g of p.trains){for(let x of g.cars)t.remove(x.car),Ci(x.car);g.boards.car.dispose(),g.boards.bound.dispose()}}e=[]}function c(p,g,x,m){let u=new fe,S=new Le,v=oe("concrete","#d6d4cd"),_=oe("concrete","#c6c4bd"),A=oe("concrete","#bfbcb4"),T=oe("tile","#d9d4ca"),E=oe("roofMetal","#9aa3a8"),R=oe("#7d868c","#ffffff",{roughness:.45,metalness:.5}),b=oe(g.color??"#1f7a6a","#ffffff",{roughness:.5}),M=p.way,I=G=>{let Q=M.spot(G);return Math.hypot(Q.x-x[0],Q.z-x[1])<m},D=(G,Q,ct)=>new L(G,Q,ct);for(let G=0;G<M.length;G+=10){let Q=Math.min(M.length,G+10);if(!I(G)&&!I(Q))continue;let ct=M.spot(G),pt=M.spot(Q),yt=Tn(g.heights,G)-an.height/2,tt=Tn(g.heights,Q)-an.height/2;for(let z of[-1,1]){let[V,$]=[ct.x+ct.dz*z*Hn,ct.z-ct.dx*z*Hn],[xt,ft]=[pt.x+pt.dz*z*Hn,pt.z-pt.dx*z*Hn];S.bar(v,D(V,yt,$),D(xt,tt,ft),an.width,an.height);for(let Rt of[-1,1]){let Jt=ct.dz*Rt*(an.width/2+.035),P=-ct.dx*Rt*(an.width/2+.035);S.bar(R,D(V+Jt,yt+.13,$+P),D(xt+Jt,tt+.13,ft+P),.05,.09)}}}let U=[];for(let G of Qc(M.length,g.clear??[])){if(!I(G))continue;let Q=M.spot(G),ct=Math.atan2(Q.dx,Q.dz),pt=Tn(g.ground,G),yt=Tn(g.heights,G)-an.height,tt=yt-.9-pt;tt<.3||(S.box(_,Q.x,pt+.15,Q.z,2.6,.3,2.6,ct),S.box(_,Q.x,pt+tt/2,Q.z,1.5,tt,1.5,ct),S.box(_,Q.x,yt-.45,Q.z,Hn*2+1.4,.9,1.6,ct),U.push({x:Q.x,z:Q.z,w:1.6,d:1.6,r:ct*180/Math.PI}))}let k={surfaces:[],walls:[],boxes:[]},H=[],X=oe("#e8c33a"),K=oe("#dfe5e8","#ffffff",{roughness:.3}),W=Kc(p.cars).filter(G=>Math.abs(G)+gt.doorWidth/2<cn.length/2);for(let G of p.stops){if(!I(G.at))continue;let Q=M.spot(G.at),ct=Math.atan2(Q.dx,Q.dz),pt=Tn(g.heights,G.at)+gt.floor,yt=Tn(g.ground,G.at),tt=Lu(pt,yt);for(let z of[1,-1]){S.at(Q.x,0,Q.z,z>0?ct:ct+Math.PI,Jt=>it(Jt,tt));let V=Uu(tt,{x:Q.x,z:Q.z,dx:Q.dx,dz:Q.dz,sign:z});k.surfaces.push(...V.surfaces),k.walls.push(...V.walls),k.boxes.push(...V.boxes);let $=new fe;$.name="station-platform",$.position.set(Q.x,0,Q.z),$.rotation.y=z>0?ct:ct+Math.PI;let xt=[];for(let Jt of W)for(let P of[-1,1]){let Vt=new fe;Vt.name="platform-door";let bt=new Le,nt=gt.doorWidth/2;bt.box(K,0,.65,0,.06,1.25,nt-.04),bt.box(R,0,1.28,0,.09,.06,nt);for(let Qt of[-1,1])bt.box(R,0,.65,Qt*(nt/2-.025),.09,1.25,.05);bt.build(Vt,{cast:!1,where:"out"});let lt=Jt+P*nt/2;Vt.position.set(tt.edge+.12,pt,lt),$.add(Vt),xt.push({leaf:Vt,shut:lt,slide:P*(nt-.02)})}let ft=pa(208,68),Rt=fa(ft,2.1,.68,!0,.2);Rt.name="platform-departure-board",Rt.position.set((tt.edge+tt.outer)/2,pt+2.9,0),$.add(Rt),u.add($),H.push({stop:G,sign:z,leaves:xt,board:ft,nextBoard:-1/0})}S.at(Q.x,0,Q.z,ct,z=>{let V=tt.outer+.6,$=tt.long;z.box(E,0,pt+cn.roof+.1,0,V*2,.2,$*2+2),z.box(b,0,pt+cn.roof-.1,-$-1,V*2,.35,.08),z.box(b,0,pt+cn.roof-.1,$+1,V*2,.35,.08)}),U.push({x:Q.x,z:Q.z,w:2.4,d:2.4,r:ct*180/Math.PI})}function it(G,Q){let{edge:ct,outer:pt,long:yt,level:tt,ground:z,stair:V,landing:$}=Q,xt=yt*2;G.box(A,(ct+pt)/2,tt-.25,0,pt-ct,.5,xt),G.box(T,(ct+pt)/2,tt+.005,0,pt-ct,.01,xt),G.box(X,ct+.45,tt+.012,0,.3,.01,xt);let ft=(nt,lt)=>{lt-nt>.05&&G.box(R,pt-.05,tt+.55,(nt+lt)/2,.05,1.1,lt-nt)};$?(ft(-yt,$.v0),ft($.v1,yt)):ft(-yt,yt);let Rt=-yt;for(let nt of W)Jt(Rt,nt-gt.doorWidth/2),Rt=nt+gt.doorWidth/2;Jt(Rt,yt);function Jt(nt,lt){lt<=nt||(G.box(K,ct+.12,tt+.65,(nt+lt)/2,.08,1.3,lt-nt),G.box(R,ct+.12,tt+1.3,(nt+lt)/2,.1,.06,lt-nt))}for(let nt=-yt+4;nt<=yt-4;nt+=8){let lt=tt-.5-z;lt>.5&&G.box(_,pt-.6,z+lt/2,nt,.7,lt,.7)}for(let nt=-yt+2;nt<=yt-2;nt+=8)G.box(R,pt-.25,tt+cn.roof/2,nt,.18,cn.roof,.18);if(!V)return;G.box(A,($.u0+$.u1)/2,tt-.25,($.v0+$.v1)/2,$.u1-$.u0,.5,$.v1-$.v0),G.box(T,($.u0+$.u1)/2,tt+.006,($.v0+$.v1)/2,$.u1-$.u0,.01,$.v1-$.v0),G.box(R,(pt+$.u1)/2,tt+.55,$.v0+.03,$.u1-pt,1.1,.05),G.box(R,$.u1-.03,tt+.55,($.v0+$.v1)/2,.05,1.1,$.v1-$.v0);let P=(V.u0+V.u1)/2,Vt=Math.max(1,Math.ceil(V.rise/gn.riser));for(let nt=0;nt<Vt;nt++){let lt=z+V.rise*(nt+1)/Vt,Qt=V.bottom-V.run*(nt+.5)/Vt;G.box(A,P,lt-.15,Qt,gn.width,.3,V.run/Vt+.02)}let bt=(nt,lt,Qt)=>new L(nt,lt,Qt);for(let nt of[V.u0,V.u1])G.face(_,[bt(nt,z,V.bottom),bt(nt,tt-.3,V.top),bt(nt,tt+.9,V.top),bt(nt,z+.9,V.bottom)]),G.face(_,[bt(nt,z+.9,V.bottom),bt(nt,tt+.9,V.top),bt(nt,tt-.3,V.top),bt(nt,z,V.bottom)]),G.bar(R,bt(nt,z+.95,V.bottom),bt(nt,tt+.95,V.top),.06,.06);G.face(_,[bt(V.u0,z-.2,V.bottom),bt(V.u1,z-.2,V.bottom),bt(V.u1,tt-.3,V.top),bt(V.u0,tt-.3,V.top)]),G.box(_,P,(z+tt)/2-.3,V.top+.15,gn.width,tt-z,.3),G.box(E,P,tt+2.6,(V.top+V.bottom)/2,gn.width+.4,.12,V.run+1)}return S.build(u,{where:"out"}),{node:u,piers:U,solids:k,platforms:H}}function l(p,{near:g=[0,0],reach:x=1600}={}){let m=JSON.stringify(p.map(u=>[u.name,u.path.length,u.path[0],u.heights.length,u.ground?.length??0]));if(m!==i){i=m,a(),s="";for(let u of p)e.push(d(u))}h(g,x)}function h(p,g=1600){let x=JSON.stringify([p.map(m=>Math.round(m/200)),g]);if(x!==s){s=x;for(let m of e){o(m);let{node:u,piers:S,solids:v,platforms:_}=c(m.line,m.spec,p,g);t.add(u),m.track=u,m.piers=S,m.solids=v,m.platforms=_}r++}}function d(p){let g=tl(p,p.drive),x=Ru(g.period),m=[];for(let u=0;u<x;u++){let S={car:pa(160,28),bound:pa(144,22)},v=ua(g.cars),_=v.map((A,T)=>{let E=Du({front:T===v.length-1,back:T===0,boards:S});return t.add(E.car),{...E,offset:A,index:T}});m.push({offset:u*g.period/x,cars:_,boards:S,shown:""})}return{spec:p,line:g,track:null,piers:[],trains:m,platforms:[],calls:Nu(g)}}function f(p=null,g=2200){let x=n();for(let m of e){let{line:u,spec:S}=m;for(let v of m.trains){let _=u.stateAt(x+v.offset);v.state=_;let A=_.way>=0?1:-1;for(let R of v.cars){let b=_.s+R.offset,M=u.way.spot(b),I=M.x+M.dz*A*Hn,D=M.z-M.dx*A*Hn,U=!p||Math.hypot(I-p[0],D-p[1])<g;if(R.car.visible=U,!U)continue;let k=Tn(S.heights,b),H=Math.atan2(Tn(S.heights,b+gt.length/2)-Tn(S.heights,b-gt.length/2),gt.length);R.car.position.set(I,k,D),R.car.rotation.set(-H,Math.atan2(M.dx,M.dz),0,"YXZ"),R.place={x:I,z:D,dx:M.dx,dz:M.dz,turn:Math.atan2(M.dx,M.dz),y:k};let X=_.phase==="dwell"?A:0;for(let K of R.leaves)K.leaf.position.z=K.shut+(K.side===X?K.slide*_.doors:0)}let T=el(u,_),E=T.join("|");E!==v.shown&&(v.shown=E,v.boards.car.show(T,["#ffb23e","#ffffff"]),v.boards.bound.show([u.boundFor(_).name],["#ffb23e"]))}for(let v of m.platforms){let A=m.trains.find(({state:E})=>E.phase==="dwell"&&E.stop.index===v.stop.index&&E.way===v.sign)?.state.doors??0;for(let E of v.leaves)E.leaf.position.z=E.shut+E.slide*A;if(x<v.nextBoard&&v.nextBoard-x<=.5)continue;let T=Ou(u,m.calls,m.trains.map(({offset:E})=>E),v.stop,v.sign,x);v.board.show(T.text),v.nextBoard=x+.5}}}return{group:t,setLines:l,setNear:h,update:f,get lines(){return e},get piers(){return e.flatMap(p=>p.piers)},get solids(){return{surfaces:e.flatMap(p=>p.solids?.surfaces??[]),walls:e.flatMap(p=>p.solids?.walls??[]),boxes:e.flatMap(p=>p.solids?.boxes??[])}},get revision(){return r},dispose(){i="",s="",a()}}}function Ex(n){let t=String(n??"").trim();if(/^\d{1,9}$/.test(t))return Number(t);let e=t||"1",i=2166136261;for(let s=0;s<e.length;s++)i=Math.imul(i^e.charCodeAt(s),16777619);return i>>>0}var cr=new URLSearchParams(location.hash.slice(1)),cl=Ex(cr.get("seed")??"3"),xn=Math.min(1600,Math.max(200,Number(cr.get("size"))||1e3)),_s=document.getElementById("info"),ga=document.getElementById("view"),Pi=new ta({canvas:ga,antialias:!0});Pi.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Pi.shadowMap.enabled=!0;Pi.toneMapping=uo;Pi.toneMappingExposure=.9;var Li=new ks;Li.background=new Xt("#c9dbe6");Li.fog=new Bs("#c9dbe6",600,2600);var Di=new Oe(50,1,.5,6e3);Di.position.set(-380,260,420);var Ii=new ia(Di,ga);Ii.target.set(0,30,0);Ii.maxPolarAngle=Math.PI*.49;Li.add(new Js("#dfe8f0","#6b6a5a",1.2));var ys=new js("#fff4e2",2.6);ys.position.set(-300,500,260);ys.castShadow=!0;ys.shadow.mapSize.set(4096,4096);Object.assign(ys.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:10,far:1600});Li.add(ys,ys.target);var xa=Tu();Li.add(xa.group);var _a=Fu();Li.add(_a.group);window.__view={camera:Di,controls:Ii,transit:_a,region:xa};function zu(){let n=ga.clientWidth,t=ga.clientHeight;Pi.setSize(n,t,!1),Di.aspect=n/Math.max(1,t),Di.updateProjectionMatrix()}window.addEventListener("resize",zu);zu();Pi.setAnimationLoop(()=>{Ii.update(),_a.update([Ii.target.x,Ii.target.z],xn),Pi.render(Li,Di)});var al=new Worker(new URL("./worker.bundle.js?v=stations-20261118",import.meta.url)),ma=null,si=null;al.onmessage=n=>{let t=n.data;if(t.type==="progress")_s.textContent=`${t.label}\uFF08${Math.round(t.fraction*100)}%\u30FB${(t.elapsed/1e3).toFixed(1)}\u79D2\uFF09`;else if(t.type==="ready"){ma=t.overlay;let e=ma.lines[0]?.stations[Math.min(5,ma.lines[0].stations.length-1)];si=[Number(cr.get("x"))||e?.x||1e4,Number(cr.get("z"))||e?.z||1e4],_s.textContent="3D\u306E\u5F62\u3092\u4F5C\u3063\u3066\u3044\u307E\u3059\u2026",al.postMessage({type:"window",id:1,seed:cl,x0:si[0]-xn/2,z0:si[1]-xn/2,x1:si[0]+xn/2,z1:si[1]+xn/2,step:xn>1100?4:2,buildings:cr.get("bare")!=="1"})}else t.type==="window"?Tx(t.window).catch(e=>{_s.textContent=`3D\u306E\u5F62\u3092\u4F5C\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002${e.message}`}):t.type==="error"&&(_s.textContent=`\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A${t.message}`)};al.postMessage({type:"generate",seed:cl});async function Tx(n){let t=1/0;for(let c of n.heights)t=Math.min(t,c);let e=Math.floor(t),i=si,s=performance.now();if(!await xa.show(n,{origin:i,datum:e}))return;let r=xa.heightAt(0,0)??0;Ii.target.set(0,r,0),Di.position.set(-xn*.38,r+xn*.28,xn*.42),_s.textContent="\u30E2\u30CE\u30EC\u30FC\u30EB\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u2026",await new Promise(c=>requestAnimationFrame(()=>setTimeout(c,0)));let o=[];for(let c of ma.lines){if(!n.lines.includes(c.id))continue;let l=Au({name:c.name,color:c.color,points:c.points,ground:c.ground,stations:c.stations},{origin:i,datum:e});l&&o.push(l)}_a.setLines(o,{near:[0,0],reach:xn*.75});let a=o.length;_s.innerHTML=`\u30B7\u30FC\u30C9 ${cl}\u30FB${xn}m\u56DB\u65B9\uFF08\u6771\u3078 ${(si[0]/1e3).toFixed(2)}km\u30FB\u5357\u3078 ${(si[1]/1e3).toFixed(2)}km\uFF09<br>\u5EFA\u7269 ${n.buildings.length}\u68DF\u30FB\u751F\u6D3B\u9053\u8DEF ${n.streets.length}\u672C\u30FB\u5730\u533A ${n.districts.length}\u30FB\u30E2\u30CE\u30EC\u30FC\u30EB ${a}\u8DEF\u7DDA<br>3D\u306E\u7D44\u307F\u7ACB\u3066 ${Math.round(performance.now()-s)}\u30DF\u30EA\u79D2\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
