var jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},El=0,Va=1,Tl=2;var Ga=1,Al=2,Mn=3,Ln=0,He=1,Ve=2,Un=0,li=1,Wa=2,Xa=3,qa=4,Rl=5,qn=100,Cl=101,Il=102,Pl=103,Dl=104,Ll=200,Ul=201,Nl=202,Ol=203,Ar=204,Rr=205,Fl=206,zl=207,Bl=208,kl=209,Hl=210,Vl=211,Gl=212,Wl=213,Xl=214,$r=0,Zr=1,Jr=2,hi=3,Kr=4,jr=5,Qr=6,to=7,Ya=0,ql=1,Yl=2,Nn=0,$l=1,Zl=2,Jl=3,eo=4,Kl=5,jl=6,Ql=7;var $a=300,_i=301,yi=302,no=303,io=304,Zs=306,ui=1e3,Xn=1001,Cr=1002,Pe=1003,th=1004;var Js=1005;var Ke=1006,so=1007;var bn=1008;var mn=1009,Za=1010,Ja=1011,is=1012,ro=1013,ti=1014,an=1015,ss=1016,oo=1017,ao=1018,rs=1020,Ka=35902,ja=35899,Qa=1021,tc=1022,Oe=1023,qi=1026,os=1027,ec=1028,co=1029,nc=1030,lo=1031;var ho=1033,Ks=33776,js=33777,Qs=33778,tr=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,xo=37492,_o=37496,yo=37808,vo=37809,Mo=37810,bo=37811,So=37812,wo=37813,Eo=37814,To=37815,Ao=37816,Ro=37817,Co=37818,Io=37819,Po=37820,Do=37821,Lo=36492,Uo=36494,No=36495,Oo=36283,Fo=36284,zo=36285,Bo=36286;var Es=2300,Ir=2301,Tr=2302,Pa=2400,Da=2401,La=2402;var eh=3200,nh=3201;var ic=0,ih=1,On="",be="srgb",di="srgb-linear",Ts="linear",ee="srgb";var ci=7680;var Ua=519,sh=512,rh=513,oh=514,sc=515,ah=516,ch=517,lh=518,hh=519,Na=35044;var rc="300 es",fn=2e3,As=2001;var _n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=1234567,Ss=Math.PI/180,Yi=180/Math.PI;function as(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function oc(n,t){return(n%t+t)%t}function Mu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function bu(n,t,e){return n!==t?(e-n)/(t-n):0}function ws(n,t,e){return(1-e)*n+e*t}function Su(n,t,e,i){return ws(n,t,1-Math.exp(-e*i))}function wu(n,t=1){return t-Math.abs(oc(n,t*2)-t)}function Eu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Tu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Au(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ru(n,t){return n+Math.random()*(t-n)}function Cu(n){return n*(.5-Math.random())}function Iu(n){n!==void 0&&(nl=n);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pu(n){return n*Ss}function Du(n){return n*Yi}function Lu(n){return(n&n-1)===0&&n!==0}function Uu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ou(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ac={DEG2RAD:Ss,RAD2DEG:Yi,generateUUID:as,clamp:qt,euclideanModulo:oc,mapLinear:Mu,inverseLerp:bu,lerp:ws,damp:Su,pingpong:wu,smoothstep:Eu,smootherstep:Tu,randInt:Au,randFloat:Ru,randFloatSpread:Cu,seededRandom:Iu,degToRad:Pu,radToDeg:Du,isPowerOfTwo:Lu,ceilPowerOfTwo:Uu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Ou,normalize:Be,denormalize:Wi},Ot=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let m=1-a,f=c*d+l*p+u*g+h*x,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let R=Math.sqrt(M),T=Math.atan2(R,f*w);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let _=a*w;if(c=c*m+d*_,l=l*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new U,il=new rn,Vt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],w=s[1],M=s[4],_=s[7],R=s[2],T=s[5],E=s[8];return r[0]=o*x+a*w+c*R,r[3]=o*m+a*M+c*T,r[6]=o*f+a*_+c*E,r[1]=l*x+u*w+h*R,r[4]=l*m+u*M+h*T,r[7]=l*f+u*_+h*E,r[2]=d*x+p*w+g*R,r[5]=d*m+p*M+g*T,r[8]=d*f+p*_+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*l-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Vt;function cc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uh(){let n=Rs("canvas");return n.style.display="block",n}var sl={};function $i(n){n in sl||(sl[n]=!0,console.warn(n))}function dh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var rl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){let n={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Ts:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[di]:{primaries:t,whitePoint:i,transfer:Ts,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),n}var Jt=Fu();function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Di,Pr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Di===void 0&&(Di=Rs("canvas")),Di.width=t.width,Di.height=t.height;let s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Di}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Dn(e[i]/255)*255):e[i]=Dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,Zi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bu=0,da=new U,ke=class n extends _n{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Xn,s=Xn,r=Ke,o=bn,a=Oe,c=mn,l=n.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=as(),this.name="",this.source=new Zi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$a)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=$a;ke.DEFAULT_ANISOTROPY=1;var le=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(p+1)/2,R=(f+1)/2,T=(u+d)/4,E=(h+x)/4,C=(g+m)/4;return M>_&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=E/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=C/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=C/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr=class extends _n{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new ke(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Dr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Cs=class extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),ar.subVectors(this.max,_s),Li.subVectors(t.a,_s),Ui.subVectors(t.b,_s),Ni.subVectors(t.c,_s),zn.subVectors(Ui,Li),Bn.subVectors(Ni,Ui),si.subVectors(Li,Ni);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-si.z,si.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!fa(e,Li,Ui,Ni,ar)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,Li,Ui,Ni,ar))?!1:(cr.crossVectors(zn,Bn),e=[cr.x,cr.y,cr.z],fa(e,Li,Ui,Ni,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},An=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,or=new Yn,Li=new U,Ui=new U,Ni=new U,zn=new U,Bn=new U,si=new U,_s=new U,ar=new U,cr=new U,ri=new U;function fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ri.fromArray(n,r);let a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=t.dot(ri),l=e.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ku=new Yn,ys=new U,pa=new U,Ji=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ku.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(pa)),this.expandByPoint(ys.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rn=new U,ma=new U,lr=new U,kn=new U,ga=new U,hr=new U,xa=new U,Ki=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ma.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=kn.dot(this.direction),c=-kn.dot(lr),l=kn.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ma).addScaledVector(lr,d),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,s,r){ga.subVectors(e,t),hr.subVectors(i,t),xa.crossVectors(ga,hr);let o=this.direction.dot(xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);let c=a*this.direction.dot(hr.crossVectors(kn,hr));if(c<0)return null;let l=a*this.direction.dot(ga.cross(kn));if(l<0||c+l>o)return null;let u=-a*kn.dot(xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class n{constructor(t,e,i,s,r,o,a,c,l,u,h,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,u,h,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Vu)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Hn.crossVectors(i,Ze),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Hn.crossVectors(i,Ze)),Hn.normalize(),ur.crossVectors(Ze,Hn),s[0]=Hn.x,s[4]=ur.x,s[8]=Ze.x,s[1]=Hn.y,s[5]=ur.y,s[9]=Ze.y,s[2]=Hn.z,s[6]=ur.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],w=i[3],M=i[7],_=i[11],R=i[15],T=s[0],E=s[4],C=s[8],S=s[12],v=s[1],P=s[5],L=s[9],N=s[13],k=s[2],F=s[6],W=s[10],$=s[14],B=s[3],J=s[7],j=s[11],nt=s[15];return r[0]=o*T+a*v+c*k+l*B,r[4]=o*E+a*P+c*F+l*J,r[8]=o*C+a*L+c*W+l*j,r[12]=o*S+a*N+c*$+l*nt,r[1]=u*T+h*v+d*k+p*B,r[5]=u*E+h*P+d*F+p*J,r[9]=u*C+h*L+d*W+p*j,r[13]=u*S+h*N+d*$+p*nt,r[2]=g*T+x*v+m*k+f*B,r[6]=g*E+x*P+m*F+f*J,r[10]=g*C+x*L+m*W+f*j,r[14]=g*S+x*N+m*$+f*nt,r[3]=w*T+M*v+_*k+R*B,r[7]=w*E+M*P+_*F+R*J,r[11]=w*C+M*L+_*W+R*j,r[15]=w*S+M*N+_*$+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],w=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,M=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,_=u*x*l-g*h*l+g*a*p-o*x*p-u*a*f+o*h*f,R=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,T=e*w+i*M+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=w*E,t[1]=(x*d*r-h*m*r-x*s*p+i*m*p+h*s*f-i*d*f)*E,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*E,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*p-i*c*p)*E,t[4]=M*E,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*E,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*E,t[8]=_*E,t[9]=(g*h*r-u*x*r-g*i*p+e*x*p+u*i*f-e*h*f)*E,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*f+e*a*f)*E,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*p-e*a*p)*E,t[12]=R*E,t[13]=(u*x*s-g*h*s+g*i*d-e*x*d-u*i*m+e*h*m)*E,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,x=o*u,m=o*h,f=a*h,w=c*l,M=c*u,_=c*h,R=i.x,T=i.y,E=i.z;return s[0]=(1-(x+f))*R,s[1]=(p+_)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(m-w)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let l=1/r,u=1/o,h=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===As)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fn,c=!1){let l=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===fn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===As)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Oi=new U,un=new xe,Hu=new U(0,0,0),Vu=new U(1,1,1),Hn=new U,ur=new U,Ze=new U,al=new xe,cl=new rn,pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cl.setFromEuler(this),this.setFromQuaternion(cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gu=0,ll=new U,Fi=new rn,Cn=new xe,dr=new U,vs=new U,Wu=new U,Xu=new rn,hl=new U(1,0,0),ul=new U(0,1,0),dl=new U(0,0,1),fl={type:"added"},qu={type:"removed"},zi={type:"childadded",child:null},_a={type:"childremoved",child:null},Ne=class n extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new pn,i=new rn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Vt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dr.copy(t):dr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(vs,dr,this.up):Cn.lookAt(dr,vs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new U,In=new U,ya=new U,Pn=new U,Bi=new U,ki=new U,pl=new U,va=new U,Ma=new U,ba=new U,Sa=new le,wa=new le,Ea=new le,Wn=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),In.subVectors(i,e),ya.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(In),c=dn.dot(ya),l=In.dot(In),u=In.dot(ya),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Sa.setScalar(0),wa.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Ea.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),In.subVectors(t,e),dn.cross(In).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Bi.subVectors(s,i),ki.subVectors(r,i),va.subVectors(t,i);let c=Bi.dot(va),l=ki.dot(va);if(c<=0&&l<=0)return e.copy(i);Ma.subVectors(t,s);let u=Bi.dot(Ma),h=ki.dot(Ma);if(u>=0&&h<=u)return e.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Bi,o);ba.subVectors(t,r);let p=Bi.dot(ba),g=ki.dot(ba);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ki,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return pl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(pl,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=oc(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ta(o,r,t+1/3),this.g=Ta(o,r,t),this.b=Ta(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Jt.workingToColorSpace(Le.copy(this),t),Math.round(qt(Le.r*255,0,255))*65536+Math.round(qt(Le.g*255,0,255))*256+Math.round(qt(Le.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Le.copy(this),e);let i=Le.r,s=Le.g,r=Le.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=be){Jt.workingToColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,s=Le.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(fr);let i=ws(Vn.h,fr.h,e),s=ws(Vn.s,fr.s,e),r=ws(Vn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Xt;Xt.NAMES=fh;var Yu=0,$n=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=as(),this.name="",this.type="Material",this.blending=li,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Rr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ar&&(i.blendSrc=this.blendSrc),this.blendDst!==Rr&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fi=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new U,pr=new Ot,$u=0,Ie=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Na,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}};var Ps=class extends Ie{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ds=class extends Ie{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var We=class extends Ie{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zu=0,nn=new xe,Aa=new Ne,Hi=new U,Je=new Yn,Ms=new Yn,Re=new U,on=class n extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cc(t)?Ds:Ps)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Je.min,Ms.min),Je.expandByPoint(Re),Re.addVectors(Je.max,Ms.max),Je.expandByPoint(Re)):(Je.expandByPoint(Ms.min),Je.expandByPoint(Ms.max))}Je.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(t,l),Re.add(Hi)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new U,c[C]=new U;let l=new U,u=new U,h=new U,d=new Ot,p=new Ot,g=new Ot,x=new U,m=new U;function f(C,S,v){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(x),a[S].add(x),a[v].add(x),c[C].add(m),c[S].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,S=w.length;C<S;++C){let v=w[C],P=v.start,L=v.count;for(let N=P,k=P+L;N<k;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new U,_=new U,R=new U,T=new U;function E(C){R.fromBufferAttribute(s,C),T.copy(R);let S=a[C];M.copy(S),M.sub(R.multiplyScalar(R.dot(S))).normalize(),_.crossVectors(T,S);let P=_.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=w.length;C<S;++C){let v=w[C],P=v.start,L=v.count;for(let N=P,k=P+L;N<k;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ie(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ml=new xe,oi=new Ki,mr=new Ji,gl=new U,gr=new U,xr=new U,_r=new U,Ra=new U,yr=new U,xl=new U,vr=new U,Ce=class extends Ne{constructor(t=new on,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Ra.fromBufferAttribute(h,t),o?yr.addScaledVector(Ra,u):yr.addScaledVector(Ra.sub(e),u))}e.add(yr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(mr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(mr,gl)===null||oi.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),oi.copy(t.ray).applyMatrix4(ml),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,R=M;_<R;_+=3){let T=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);s=Mr(this,f,t,i,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let w=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Mr(this,o,t,i,l,u,h,w,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,R=M;_<R;_+=3){let T=_,E=_+1,C=_+2;s=Mr(this,f,t,i,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let w=m,M=m+1,_=m+2;s=Mr(this,o,t,i,l,u,h,w,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,o,a){let c;if(t.side===He?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ln,a),c===null)return null;vr.copy(a),vr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(vr);return l<e.near||l>e.far?null:{distance:l,point:vr.clone(),object:n}}function Mr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,gr),n.getVertexPosition(c,xr),n.getVertexPosition(l,_r);let u=Ju(n,t,e,i,gr,xr,_r,xl);if(u){let h=new U;Wn.getBarycoord(xl,gr,xr,_r,h),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,c,l,h,new Ot)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,c,l,h,new Ot)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Wn.getNormal(gr,xr,_r,d.normal),u.face=d,u.barycoord=h}return u}var ji=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function g(x,m,f,w,M,_,R,T,E,C,S){let v=_/E,P=R/C,L=_/2,N=R/2,k=T/2,F=E+1,W=C+1,$=0,B=0,J=new U;for(let j=0;j<W;j++){let nt=j*P-N;for(let mt=0;mt<F;mt++){let Mt=mt*v-L;J[x]=Mt*w,J[m]=nt*M,J[f]=k,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[f]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(mt/E),h.push(1-j/C),$+=1}}for(let j=0;j<C;j++)for(let nt=0;nt<E;nt++){let mt=d+nt+F*j,Mt=d+nt+F*(j+1),Pt=d+(nt+1)+F*(j+1),Ft=d+(nt+1)+F*j;c.push(mt,Mt,Ft),c.push(Mt,Pt,Ft),B+=6}a.addGroup(p,B,S),p+=B,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){let t={};for(let e=0;e<n.length;e++){let i=vi(n[e]);for(let s in i)t[s]=i[s]}return t}function Ku(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var ph={clone:vi,merge:Fe},ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ls=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new U,_l=new Ot,yl=new Ot,Ue=class extends Ls{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,yl),e.subVectors(yl,_l)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vi=-90,Gi=1,Ur=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Vi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Vi,Gi,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Vi,Gi,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Vi,Gi,t,e);a.layers=this.layers,this.add(a);let c=new Ue(Vi,Gi,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Vi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Us=class extends ke{constructor(t=[],e=_i,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nr=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Us(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Un});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ke),new Ur(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Se=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},td={type:"move"},Qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(td)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Ns=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Os=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Zn=class extends ke{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Pe,u=Pe,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=new U,ed=new U,nd=new Vt,sn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ca.subVectors(i,e).cross(ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||nd.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new Ji,id=new Ot(.5,.5),br=new U,ts=class{constructor(t=new sn,e=new sn,i=new sn,s=new sn,r=new sn,o=new sn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],w=r[12],M=r[13],_=r[14],R=r[15];if(s[0].setComponents(l-o,p-u,f-g,R-w).normalize(),s[1].setComponents(l+o,p+u,f+g,R+w).normalize(),s[2].setComponents(l+a,p+h,f+x,R+M).normalize(),s[3].setComponents(l-a,p-h,f-x,R-M).normalize(),i)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,p-d,f-m,R-_).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-_).normalize(),e===fn)s[5].setComponents(l+c,p+d,f+m,R+_).normalize();else if(e===As)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);let e=id.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends ke{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fs=class extends ke{constructor(t,e,i=ti,s,r,o,a=Pe,c=Pe,l,u=qi,h=1){if(u!==qi&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zs=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};function sd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=mh(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=ld(n,t,r,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){let p=n[d],g=n[d+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Bs(r,o,e,a,c,l,0),o}function mh(n,t,e,i,s){let r;if(s===vd(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=vl(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=vl(o/i|0,n[o],n[o+1],r);return r&&es(r,r.next)&&(Hs(r),r=r.next),r}function mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(es(e,e.next)||ge(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&pd(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?od(n,i,s,r):rd(n)){t.push(c.i,n.i,l.i),Hs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ad(mi(n),t),Bs(n,t,e,i,s,r,2)):o===2&&cd(n,t,e,i,s,r):Bs(mi(n),t,e,i,s,r,1);break}}}function rd(n){let t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&bs(s,a,r,c,o,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function od(n,t,e,i){let s=n.prev,r=n,o=n.next;if(ge(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,p=Math.min(a,c,l),g=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),f=Oa(p,g,t,e,i),w=Oa(x,m,t,e,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=f&&_&&_.z<=w;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bs(a,u,c,h,l,d,M.x,M.y)&&ge(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&bs(a,u,c,h,l,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bs(a,u,c,h,l,d,M.x,M.y)&&ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=w;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&bs(a,u,c,h,l,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ad(n,t){let e=n;do{let i=e.prev,s=e.next.next;!es(i,s)&&xh(i,e,e.next,s)&&ks(i,s)&&ks(s,i)&&(t.push(i.i,e.i,s.i),Hs(e),Hs(e.next),e=n=s),e=e.next}while(e!==n);return mi(e)}function cd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xd(o,a)){let c=_h(o,a);o=mi(o,o.next),c=mi(c,c.next),Bs(o,t,e,i,s,r,0),Bs(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ld(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=mh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(gd(l))}s.sort(hd);for(let r=0;r<s.length;r++)e=ud(s[r],e);return e}function hd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function ud(n,t){let e=dd(n,t);if(!e)return t;let i=_h(e,n);return mi(i,i.next),mi(e,e.next)}function dd(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(es(n,e))return e;do{if(es(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&gh(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);ks(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&fd(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function fd(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function pd(n,t,e,i){let s=n;do s.z===0&&(s.z=Oa(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,md(s)}function md(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Oa(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function gd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function gh(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function bs(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&gh(n,t,e,i,s,r,o,a)}function xd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!_d(n,t)&&(ks(n,t)&&ks(t,n)&&yd(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||es(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function es(n,t){return n.x===t.x&&n.y===t.y}function xh(n,t,e,i){let s=wr(ge(n,t,e)),r=wr(ge(n,t,i)),o=wr(ge(e,i,n)),a=wr(ge(e,i,t));return!!(s!==r&&o!==a||s===0&&Sr(n,e,t)||r===0&&Sr(n,i,t)||o===0&&Sr(e,n,i)||a===0&&Sr(e,t,i))}function Sr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wr(n){return n>0?1:n<0?-1:0}function _d(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ks(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function yd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function _h(n,t){let e=Fa(n.i,n.x,n.y),i=Fa(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function vl(n,t,e,i){let s=Fa(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fa(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vd(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var za=class{static triangulate(t,e,i=2){return sd(t,e,i)}},Vs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ml(t),bl(i,t);let o=t.length;e.forEach(Ml);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bl(i,e[c]);let a=za.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ml(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var gi=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let w=f*d-o;for(let M=0;M<l;M++){let _=M*h-r;g.push(_,-w,0),x.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let M=w+l*f,_=w+l*(f+1),R=w+1+l*(f+1),T=w+1+l*f;p.push(M,_,T),p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var vn=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Or=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fr=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Er(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Md(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var xi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zr=class extends xi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pa,endingEnd:Pa}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Da:r=t,a=2*e-i;break;case La:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Da:o=t,c=2*i-e;break;case La:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let R=0;R!==a;++R)r[R]=f*o[u+R]+w*o[l+R]+M*o[c+R]+_*o[h+R];return r}},Br=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},kr=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Er(e,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Er(t.times,Array),values:Er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Tr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Md(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){let x=e[h+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Ir;var Jn=class extends Qe{constructor(t,e,i){super(t,e,i)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Es;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Hr.prototype.ValueTypeName="color";var Vr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Vr.prototype.ValueTypeName="number";var Gr=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gs=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends Qe{constructor(t,e,i){super(t,e,i)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Es;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Wr.prototype.ValueTypeName="vector";var Xr=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},yh=new Xr,qr=class{constructor(t){this.manager=t!==void 0?t:yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xs=class extends Ws{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ia=new xe,Sl=new U,wl=new U,Ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wl),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qs=class extends Ls{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ka=class extends Ba{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new ka}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yr=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hc="\\[\\]\\.:\\/",bd=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",Sd="[^"+hc.replace("\\.","")+"]",wd=/((?:WC+[\/:])*)/.source.replace("WC",uc),Ed=/(WCOD+)?/.source.replace("WCOD",Sd),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Rd=new RegExp("^"+wd+Ed+Td+Ad+"$"),Cd=["material","materials","bones","map"],Ha=class{constructor(t,e,i){let s=i||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bd,"")}static parseTrackName(t){let e=Rd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Ha;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var ns=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $s=class extends _n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dc(n,t,e,i){let s=Id(i);switch(e){case Qa:return n*t;case ec:return n*t/s.components*s.byteLength;case co:return n*t/s.components*s.byteLength;case nc:return n*t*2/s.components*s.byteLength;case lo:return n*t*2/s.components*s.byteLength;case tc:return n*t*3/s.components*s.byteLength;case Oe:return n*t*4/s.components*s.byteLength;case ho:return n*t*4/s.components*s.byteLength;case Ks:case js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fo:case mo:return Math.max(n,16)*Math.max(t,8)/4;case uo:case po:return Math.max(n,8)*Math.max(t,8)/2;case go:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Uo:case No:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Oo:case Fo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zo:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Id(n){switch(n){case mn:case Za:return{byteLength:1,components:1};case is:case Ja:case ss:return{byteLength:2,components:1};case oo:case ao:return{byteLength:2,components:4};case ti:case ro:case an:return{byteLength:4,components:1};case Ka:case ja:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Gh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Dd(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Ld,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Od,alphatest_fragment:Fd,alphatest_pars_fragment:zd,aomap_fragment:Bd,aomap_pars_fragment:kd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:Gd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:Qd,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:xf,fog_pars_vertex:_f,fog_fragment:yf,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:wf,lights_pars_begin:Ef,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:If,lights_physical_fragment:Pf,lights_physical_pars_fragment:Df,lights_fragment_begin:Lf,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Hf,map_particle_fragment:Vf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Zf,morphtarget_vertex:Jf,normal_fragment_begin:Kf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:xp,shadowmask_pars_fragment:_p,skinbase_vertex:yp,skinning_pars_vertex:vp,skinning_vertex:Mp,skinnormal_vertex:bp,specularmap_fragment:Sp,specularmap_pars_fragment:wp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Ip,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Lp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Op,cube_vert:Fp,cube_frag:zp,depth_vert:Bp,depth_frag:kp,distanceRGBA_vert:Hp,distanceRGBA_frag:Vp,equirect_vert:Gp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Zp,meshlambert_frag:Jp,meshmatcap_vert:Kp,meshmatcap_frag:jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Sn={basic:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([lt.points,lt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([lt.common,lt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([lt.sprite,lt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Fe([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Fe([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:Fe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var ko={r:0,b:0,g:0},Mi=new pn,fm=new xe;function pm(n,t,e,i,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1,R=g(M);R===null?f(a,c):R&&R.isColor&&(f(R,1),_=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,_){let R=g(_);R&&(R.isCubeTexture||R.mapping===Zs)?(u===void 0&&(u=new Ce(new ji(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:vi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Mi.copy(_.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Mi)),u.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ee,(h!==R||d!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ce(new gi(2,2),new je({name:"BackgroundMaterial",uniforms:vi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ee,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,_){M.getRGB(ko,lc(n)),i.buffers.color.setClear(ko.r,ko.g,ko.b,_,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:x,addToRenderList:m,dispose:w}}function mm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,P,L,N,k){let F=!1,W=h(N,L,P);r!==W&&(r=W,l(r.object)),F=p(v,N,L,k),F&&g(v,N,L,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(v,P,L,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,P,L){let N=L.wireframe===!0,k=i[v.id];k===void 0&&(k={},i[v.id]=k);let F=k[P.id];F===void 0&&(F={},k[P.id]=F);let W=F[N];return W===void 0&&(W=d(c()),F[N]=W),W}function d(v){let P=[],L=[],N=[];for(let k=0;k<e;k++)P[k]=0,L[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,P,L,N){let k=r.attributes,F=P.attributes,W=0,$=L.getAttributes();for(let B in $)if($[B].location>=0){let j=k[B],nt=F[B];if(nt===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(v,P,L,N){let k={},F=P.attributes,W=0,$=L.getAttributes();for(let B in $)if($[B].location>=0){let j=F[B];j===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));let nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),k[B]=nt,W++}r.attributes=k,r.attributesNum=W,r.index=N}function x(){let v=r.newAttributes;for(let P=0,L=v.length;P<L;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){let L=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;L[v]=1,N[v]===0&&(n.enableVertexAttribArray(v),N[v]=1),k[v]!==P&&(n.vertexAttribDivisor(v,P),k[v]=P)}function w(){let v=r.newAttributes,P=r.enabledAttributes;for(let L=0,N=P.length;L<N;L++)P[L]!==v[L]&&(n.disableVertexAttribArray(L),P[L]=0)}function M(v,P,L,N,k,F,W){W===!0?n.vertexAttribIPointer(v,P,L,k,F):n.vertexAttribPointer(v,P,L,N,k,F)}function _(v,P,L,N){x();let k=N.attributes,F=L.getAttributes(),W=P.defaultAttributeValues;for(let $ in F){let B=F[$];if(B.location>=0){let J=k[$];if(J===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){let j=J.normalized,nt=J.itemSize,mt=t.get(J);if(mt===void 0)continue;let Mt=mt.buffer,Pt=mt.type,Ft=mt.bytesPerElement,X=Pt===n.INT||Pt===n.UNSIGNED_INT||J.gpuType===ro;if(J.isInterleavedBufferAttribute){let K=J.data,pt=K.stride,At=J.offset;if(K.isInstancedInterleavedBuffer){for(let yt=0;yt<B.locationSize;yt++)f(B.location+yt,K.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let yt=0;yt<B.locationSize;yt++)m(B.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let yt=0;yt<B.locationSize;yt++)M(B.location+yt,nt/B.locationSize,Pt,j,pt*Ft,(At+nt/B.locationSize*yt)*Ft,X)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<B.locationSize;K++)f(B.location+K,J.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<B.locationSize;K++)m(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let K=0;K<B.locationSize;K++)M(B.location+K,nt/B.locationSize,Pt,j,nt*Ft,nt/B.locationSize*K*Ft,X)}}else if(W!==void 0){let j=W[$];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(B.location,j);break;case 3:n.vertexAttrib3fv(B.location,j);break;case 4:n.vertexAttrib4fv(B.location,j);break;default:n.vertexAttrib1fv(B.location,j)}}}}w()}function R(){C();for(let v in i){let P=i[v];for(let L in P){let N=P[L];for(let k in N)u(N[k].object),delete N[k];delete P[L]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;let P=i[v.id];for(let L in P){let N=P[L];for(let k in N)u(N[k].object),delete N[k];delete P[L]}delete i[v.id]}function E(v){for(let P in i){let L=i[P];if(L[v.id]===void 0)continue;let N=L[v.id];for(let k in N)u(N[k].object),delete N[k];delete L[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function gm(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Oe&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==mn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!C)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function _m(n){let t=this,e=null,i=0,s=!1,r=!1,o=new sn,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let w=r?0:i,M=w*4,_=f.clippingState||null;c.value=_,_=u(g,d,M,p);for(let R=0;R!==M;++R)_[R]=e[R];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ym(n){let t=new WeakMap;function e(o,a){return a===no?o.mapping=_i:a===io&&(o.mapping=yi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===no||a===io)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Nr(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ls=4,vh=[.125,.215,.35,.446,.526,.582],wi=20,fc=new qs,Mh=new Xt,pc=null,mc=0,gc=0,xc=!1,Si=(1+Math.sqrt(5))/2,cs=1/Si,bh=[new U(-Si,cs,0),new U(Si,cs,0),new U(-cs,0,Si),new U(cs,0,Si),new U(0,Si,-cs),new U(0,Si,cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],vm=new U,Go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=vm}=r;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=xc,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ss,format:Oe,colorSpace:di,depthBuffer:!1},s=Sh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=bm(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,i,s,r){let c=new Ue(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new fi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new Ce(new ji,x),f=!1,w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,f=!0):(x.color.copy(Mh),f=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let R=this._cubeSize;Ho(s,_*R,M>2?R:0,R,R),h.setRenderTarget(s),f&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_i||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ho(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,fc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ce(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);let f=[],w=0;for(let E=0;E<wi;++E){let C=E/x,S=Math.exp(-C*C/2);f.push(S),E===0?w+=S:E<m&&(w+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let _=this._sizeLods[s],R=3*_*(s>M-ls?s-M+ls:0),T=4*(this._cubeSize-_);Ho(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(h,fc)}};function Mm(n){let t=[],e=[],i=[],s=n,r=n-ls+1+vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ls?c=vh[o-n+ls-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,w=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,C=T>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];w.set(S,x*g*T),M.set(d,m*g*T);let v=[T,T,T,T,T,T];_.set(v,f*g*T)}let R=new on;R.setAttribute("position",new Ie(w,x)),R.setAttribute("uv",new Ie(M,m)),R.setAttribute("faceIndex",new Ie(_,f)),t.push(R),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sh(n,t,e){let i=new yn(n,t,e);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ho(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bm(n,t,e){let i=new Float32Array(wi),s=new U(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Eh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function Sm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===no||c===io,u=c===_i||c===yi;if(l||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Go(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Go(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Em(n,t,e,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let w=p.array;x=p.version;for(let M=0,_=w.length;M<_;M+=3){let R=w[M+0],T=w[M+1],E=w[M+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){let w=g.array;x=g.version;for(let M=0,_=w.length/3-1;M<_;M+=3){let R=M+0,T=M+1,E=M+2;d.push(R,T,T,E,E,R)}}else return;let m=new(cc(d)?Ds:Ps)(d,1);m.version=x;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Tm(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*x[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Am(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Rm(n,t,e){let i=new WeakMap,s=new le;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let S=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*h),E=new Cs(T,_,R,h);E.type=an,E.needsUpdate=!0;let C=M*4;for(let v=0;v<h;v++){let P=m[v],L=f[v],N=w[v],k=_*R*4*v;for(let F=0;F<P.count;F++){let W=F*C;p===!0&&(s.fromBufferAttribute(P,F),T[k+W+0]=s.x,T[k+W+1]=s.y,T[k+W+2]=s.z,T[k+W+3]=0),g===!0&&(s.fromBufferAttribute(L,F),T[k+W+4]=s.x,T[k+W+5]=s.y,T[k+W+6]=s.z,T[k+W+7]=0),x===!0&&(s.fromBufferAttribute(N,F),T[k+W+8]=s.x,T[k+W+9]=s.y,T[k+W+10]=s.z,T[k+W+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Ot(_,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cm(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Wh=new ke,Th=new Fs(1,1),Xh=new Cs,qh=new Lr,Yh=new Us,Ah=[],Rh=[],Ch=new Float32Array(16),Ih=new Float32Array(9),Ph=new Float32Array(4);function us(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xo(n,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Im(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Pm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function Dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Um(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),Ee(e,i)}}function Nm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Ee(e,i)}}function Om(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ee(e,i)}}function Fm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Hm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Xm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=sc,r=Th):r=Wh,e.setTexture2D(t||r,s)}function qm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qh,s)}function Ym(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yh,s)}function $m(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xh,s)}function Zm(n){switch(n){case 5126:return Im;case 35664:return Pm;case 35665:return Dm;case 35666:return Lm;case 35674:return Um;case 35675:return Nm;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}function Jm(n,t){n.uniform1fv(this.addr,t)}function Km(n,t){let e=us(t,this.size,2);n.uniform2fv(this.addr,e)}function jm(n,t){let e=us(t,this.size,3);n.uniform3fv(this.addr,e)}function Qm(n,t){let e=us(t,this.size,4);n.uniform4fv(this.addr,e)}function t0(n,t){let e=us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e0(n,t){let e=us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n0(n,t){let e=us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i0(n,t){n.uniform1iv(this.addr,t)}function s0(n,t){n.uniform2iv(this.addr,t)}function r0(n,t){n.uniform3iv(this.addr,t)}function o0(n,t){n.uniform4iv(this.addr,t)}function a0(n,t){n.uniform1uiv(this.addr,t)}function c0(n,t){n.uniform2uiv(this.addr,t)}function l0(n,t){n.uniform3uiv(this.addr,t)}function h0(n,t){n.uniform4uiv(this.addr,t)}function u0(n,t,e){let i=this.cache,s=t.length,r=Xo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wh,r[o])}function d0(n,t,e){let i=this.cache,s=t.length,r=Xo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qh,r[o])}function f0(n,t,e){let i=this.cache,s=t.length,r=Xo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yh,r[o])}function p0(n,t,e){let i=this.cache,s=t.length,r=Xo(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xh,r[o])}function m0(n){switch(n){case 5126:return Jm;case 35664:return Km;case 35665:return jm;case 35666:return Qm;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}var yc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}},vc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Dh(n,t){n.seq.push(t),n.map[t.id]=t}function g0(n,t,e){let i=n.name,s=i.length;for(_c.lastIndex=0;;){let r=_c.exec(i),o=_c.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Dh(e,l===void 0?new yc(a,n,t):new vc(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Mc(a),Dh(e,h)),e=h}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);g0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Lh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var x0=37297,_0=0;function y0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Uh=new Vt;function v0(n){Jt._getMatrix(Uh,Jt.workingColorSpace,n);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case Ts:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y0(n.getShaderSource(t),a)}else return r}function M0(n,t){let e=v0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b0(n,t){let e;switch(t){case $l:e="Linear";break;case Zl:e="Reinhard";break;case Jl:e="Cineon";break;case eo:e="ACESFilmic";break;case jl:e="AgX";break;case Ql:e="Neutral";break;case Kl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new U;function S0(){Jt.getLuminanceCoefficients(Vo);let n=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function E0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function T0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function er(n){return n!==""}function Oh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(A0,C0)}var R0=new Map;function C0(n,t){let e=kt[t];if(e===void 0){let i=R0.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(I0,P0)}function P0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function D0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function L0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case yi:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function N0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case ql:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function O0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function F0(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=D0(e),l=L0(e),u=U0(e),h=N0(e),d=O0(e),p=w0(e),g=E0(r),x=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?b0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=bc(o),o=Oh(o,e),o=Fh(o,e),a=bc(a),a=Oh(a,e),a=Fh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=w+m+o,_=w+f+a,R=Lh(s,s.VERTEX_SHADER,M),T=Lh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(R)||"",k=s.getShaderInfoLog(T)||"",F=L.trim(),W=N.trim(),$=k.trim(),B=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,T);else{let j=Nh(s,R,"vertex"),nt=Nh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+j+`
`+nt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(W===""||$==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:F,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(R),s.deleteShader(T),C=new hs(s,x),S=T0(s,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,x0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var z0=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wc(t),e.set(t,i)),i}},wc=class{constructor(t){this.id=z0++,this.code=t,this.usedTimes=0}};function B0(n,t,e,i,s,r,o){let a=new Is,c=new Sc,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,L,N){let k=L.fog,F=N.geometry,W=S.isMeshStandardMaterial?L.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),B=$&&$.mapping===Zs?$.image.height:null,J=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=j!==void 0?j.length:0,mt=0;F.morphAttributes.position!==void 0&&(mt=1),F.morphAttributes.normal!==void 0&&(mt=2),F.morphAttributes.color!==void 0&&(mt=3);let Mt,Pt,Ft,X;if(J){let Qt=Sn[J];Mt=Qt.vertexShader,Pt=Qt.fragmentShader}else Mt=S.vertexShader,Pt=S.fragmentShader,c.update(S),Ft=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);let K=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),At=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,Wt=!!S.map,fe=!!S.matcap,I=!!$,Zt=!!S.aoMap,Ut=!!S.lightMap,Lt=!!S.bumpMap,_t=!!S.normalMap,te=!!S.displacementMap,ot=!!S.emissiveMap,Ct=!!S.metalnessMap,re=!!S.roughnessMap,ue=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,H=S.iridescence>0,Y=S.sheen>0,Q=S.transmission>0,q=ue&&!!S.anisotropyMap,Tt=A&&!!S.clearcoatMap,rt=A&&!!S.clearcoatNormalMap,St=A&&!!S.clearcoatRoughnessMap,wt=H&&!!S.iridescenceMap,it=H&&!!S.iridescenceThicknessMap,dt=Y&&!!S.sheenColorMap,zt=Y&&!!S.sheenRoughnessMap,Et=!!S.specularMap,ht=!!S.specularColorMap,Gt=!!S.specularIntensityMap,D=Q&&!!S.transmissionMap,st=Q&&!!S.thicknessMap,ct=!!S.gradientMap,xt=!!S.alphaMap,tt=S.alphaTest>0,Z=!!S.alphaHash,bt=!!S.extensions,Ht=Nn;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let oe={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Mt,fragmentShader:Pt,defines:S.defines,customVertexShaderID:Ft,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:At,instancingColor:At&&N.instanceColor!==null,instancingMorph:At&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:fe,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:B,aoMap:Zt,lightMap:Ut,bumpMap:Lt,normalMap:_t,displacementMap:d&&te,emissiveMap:ot,normalMapObjectSpace:_t&&S.normalMapType===ih,normalMapTangentSpace:_t&&S.normalMapType===ic,metalnessMap:Ct,roughnessMap:re,anisotropy:ue,anisotropyMap:q,clearcoat:A,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:y,iridescence:H,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:Y,sheenColorMap:dt,sheenRoughnessMap:zt,specularMap:Et,specularColorMap:ht,specularIntensityMap:Gt,transmission:Q,transmissionMap:D,thicknessMap:st,gradientMap:ct,opaque:S.transparent===!1&&S.blending===li&&S.alphaToCoverage===!1,alphaMap:xt,alphaTest:tt,alphaHash:Z,combine:S.combine,mapUv:Wt&&x(S.map.channel),aoMapUv:Zt&&x(S.aoMap.channel),lightMapUv:Ut&&x(S.lightMap.channel),bumpMapUv:Lt&&x(S.bumpMap.channel),normalMapUv:_t&&x(S.normalMap.channel),displacementMapUv:te&&x(S.displacementMap.channel),emissiveMapUv:ot&&x(S.emissiveMap.channel),metalnessMapUv:Ct&&x(S.metalnessMap.channel),roughnessMapUv:re&&x(S.roughnessMap.channel),anisotropyMapUv:q&&x(S.anisotropyMap.channel),clearcoatMapUv:Tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(S.sheenRoughnessMap.channel),specularMapUv:Et&&x(S.specularMap.channel),specularColorMapUv:ht&&x(S.specularColorMap.channel),specularIntensityMapUv:Gt&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:st&&x(S.thicknessMap.channel),alphaMapUv:xt&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Wt||xt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ve,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function f(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(v,S),M(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let v=g[S.type],P;if(v){let L=Sn[v];P=ph.clone(L.uniforms)}else P=S.uniforms;return P}function R(S,v){let P;for(let L=0,N=u.length;L<N;L++){let k=u[L];if(k.cacheKey===v){P=k,++P.usedTimes;break}}return P===void 0&&(P=new F0(n,v,S,r),u.push(P)),P}function T(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function k0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function H0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||H0),i.length>1&&i.sort(d||kh),s.length>1&&s.sort(d||kh)}function u(){for(let h=t,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function V0(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Hh,n.set(i,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function G0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Xt};break;case"SpotLight":e={position:new U,direction:new U,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function W0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var X0=0;function q0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Y0(n){let t=new G0,e=W0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new xe,o=new xe;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,w=0,M=0,_=0,R=0,T=0,E=0;l.sort(q0);for(let S=0,v=l.length;S<v;S++){let P=l[S],L=P.color,N=P.intensity,k=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],N);E++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(N),W.distance=k,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;let $=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=$.matrix,P.castShadow){let B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=F,_++}x++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(L).multiplyScalar(N),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let $=P.shadow,B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=W,g++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(N),W.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==w||C.numPointShadows!==M||C.numSpotShadows!==_||C.numSpotMaps!==R||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=w,C.numPointShadows=M,C.numSpotShadows=_,C.numSpotMaps=R,C.numLightProbes=E,i.version=X0++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let M=l[f];if(M.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Vh(n){let t=new Y0(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $0(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(n),t.set(s,[a])):r>=o.length?(a=new Vh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
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
}`;function K0(n,t,e){let i=new ts,s=new Ot,r=new Ot,o=new le,a=new Or({depthPacking:nh}),c=new Fr,l={},u=e.maxTextureSize,h={[Ln]:He,[He]:Ln,[Ve]:Ve},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Z0,fragmentShader:J0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let f=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Un),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=f!==Mn&&this.type===Mn,k=f===Mn&&this.type!==Mn;for(let F=0,W=T.length;F<W;F++){let $=T[F],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let J=B.getFrameExtents();if(s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||N===!0||k===!0){let nt=this.type!==Mn?{minFilter:Pe,magFilter:Pe}:{};B.map!==null&&B.map.dispose(),B.map=new yn(s.x,s.y,nt),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let j=B.getViewportCount();for(let nt=0;nt<j;nt++){let mt=B.getViewport(nt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),L.viewport(o),B.updateMatrices($,nt),i=B.getFrustum(),_(E,C,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Mn&&w(B,C),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,P)};function w(T,E){let C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,C,p,x,null)}function M(T,E,C,S){let v=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=v.uuid,N=E.uuid,k=l[L];k===void 0&&(k={},l[L]=k);let F=k[N];F===void 0&&(F=v.clone(),k[N]=F,E.addEventListener("dispose",R)),v=F}if(v.visible=E.visible,v.wireframe=E.wireframe,S===Mn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=n.properties.get(v);L.light=C}return v}function _(T,E,C,S,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Mn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let N=t.update(T),k=T.material;if(Array.isArray(k)){let F=N.groups;for(let W=0,$=F.length;W<$;W++){let B=F[W],J=k[B.materialIndex];if(J&&J.visible){let j=M(T,J,S,v);T.onBeforeShadow(n,T,E,C,N,j,B),n.renderBufferDirect(C,null,N,j,T,B),T.onAfterShadow(n,T,E,C,N,j,B)}}}else if(k.visible){let F=M(T,k,S,v);T.onBeforeShadow(n,T,E,C,N,F,null),n.renderBufferDirect(C,null,N,F,T,null),T.onAfterShadow(n,T,E,C,N,F,null)}}let L=T.children;for(let N=0,k=L.length;N<k;N++)_(L[N],E,C,S,v)}function R(T){T.target.removeEventListener("dispose",R);for(let C in l){let S=l[C],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var j0={[$r]:Zr,[Jr]:Qr,[Kr]:to,[hi]:jr,[Zr]:$r,[Qr]:Jr,[to]:Kr,[jr]:hi};function Q0(n,t){function e(){let D=!1,st=new le,ct=null,xt=new le(0,0,0,0);return{setMask:function(tt){ct!==tt&&!D&&(n.colorMask(tt,tt,tt,tt),ct=tt)},setLocked:function(tt){D=tt},setClear:function(tt,Z,bt,Ht,oe){oe===!0&&(tt*=Ht,Z*=Ht,bt*=Ht),st.set(tt,Z,bt,Ht),xt.equals(st)===!1&&(n.clearColor(tt,Z,bt,Ht),xt.copy(st))},reset:function(){D=!1,ct=null,xt.set(-1,0,0,0)}}}function i(){let D=!1,st=!1,ct=null,xt=null,tt=null;return{setReversed:function(Z){if(st!==Z){let bt=t.get("EXT_clip_control");Z?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),st=Z;let Ht=tt;tt=null,this.setClear(Ht)}},getReversed:function(){return st},setTest:function(Z){Z?K(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Z){ct!==Z&&!D&&(n.depthMask(Z),ct=Z)},setFunc:function(Z){if(st&&(Z=j0[Z]),xt!==Z){switch(Z){case $r:n.depthFunc(n.NEVER);break;case Zr:n.depthFunc(n.ALWAYS);break;case Jr:n.depthFunc(n.LESS);break;case hi:n.depthFunc(n.LEQUAL);break;case Kr:n.depthFunc(n.EQUAL);break;case jr:n.depthFunc(n.GEQUAL);break;case Qr:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){tt!==Z&&(st&&(Z=1-Z),n.clearDepth(Z),tt=Z)},reset:function(){D=!1,ct=null,xt=null,tt=null,st=!1}}}function s(){let D=!1,st=null,ct=null,xt=null,tt=null,Z=null,bt=null,Ht=null,oe=null;return{setTest:function(Qt){D||(Qt?K(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!D&&(n.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Tn,xn){(ct!==Qt||xt!==Tn||tt!==xn)&&(n.stencilFunc(Qt,Tn,xn),ct=Qt,xt=Tn,tt=xn)},setOp:function(Qt,Tn,xn){(Z!==Qt||bt!==Tn||Ht!==xn)&&(n.stencilOp(Qt,Tn,xn),Z=Qt,bt=Tn,Ht=xn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){oe!==Qt&&(n.clearStencil(Qt),oe=Qt)},reset:function(){D=!1,st=null,ct=null,xt=null,tt=null,Z=null,bt=null,Ht=null,oe=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,M=null,_=null,R=null,T=null,E=new Xt(0,0,0),C=0,S=!1,v=null,P=null,L=null,N=null,k=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,$=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=$>=2);let J=null,j={},nt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Mt=new le().fromArray(nt),Pt=new le().fromArray(mt);function Ft(D,st,ct,xt){let tt=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<ct;bt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(st+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return Z}let X={};X[n.TEXTURE_2D]=Ft(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(hi),Lt(!1),_t(Va),K(n.CULL_FACE),Zt(Un);function K(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function pt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function At(D,st){return h[D]!==st?(n.bindFramebuffer(D,st),h[D]=st,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function yt(D,st){let ct=p,xt=!1;if(D){ct=d.get(st),ct===void 0&&(ct=[],d.set(st,ct));let tt=D.textures;if(ct.length!==tt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,bt=tt.length;Z<bt;Z++)ct[Z]=n.COLOR_ATTACHMENT0+Z;ct.length=tt.length,xt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,xt=!0);xt&&n.drawBuffers(ct)}function Wt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let fe={[qn]:n.FUNC_ADD,[Cl]:n.FUNC_SUBTRACT,[Il]:n.FUNC_REVERSE_SUBTRACT};fe[Pl]=n.MIN,fe[Dl]=n.MAX;let I={[Ll]:n.ZERO,[Ul]:n.ONE,[Nl]:n.SRC_COLOR,[Ar]:n.SRC_ALPHA,[Hl]:n.SRC_ALPHA_SATURATE,[Bl]:n.DST_COLOR,[Fl]:n.DST_ALPHA,[Ol]:n.ONE_MINUS_SRC_COLOR,[Rr]:n.ONE_MINUS_SRC_ALPHA,[kl]:n.ONE_MINUS_DST_COLOR,[zl]:n.ONE_MINUS_DST_ALPHA,[Vl]:n.CONSTANT_COLOR,[Gl]:n.ONE_MINUS_CONSTANT_COLOR,[Wl]:n.CONSTANT_ALPHA,[Xl]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,st,ct,xt,tt,Z,bt,Ht,oe,Qt){if(D===Un){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),D!==Rl){if(D!==m||Qt!==S){if((f!==qn||_!==qn)&&(n.blendEquation(n.FUNC_ADD),f=qn,_=qn),Qt)switch(D){case li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFunc(n.ONE,n.ONE);break;case Xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,R=null,T=null,E.set(0,0,0),C=0,m=D,S=Qt}return}tt=tt||st,Z=Z||ct,bt=bt||xt,(st!==f||tt!==_)&&(n.blendEquationSeparate(fe[st],fe[tt]),f=st,_=tt),(ct!==w||xt!==M||Z!==R||bt!==T)&&(n.blendFuncSeparate(I[ct],I[xt],I[Z],I[bt]),w=ct,M=xt,R=Z,T=bt),(Ht.equals(E)===!1||oe!==C)&&(n.blendColor(Ht.r,Ht.g,Ht.b,oe),E.copy(Ht),C=oe),m=D,S=!1}function Ut(D,st){D.side===Ve?pt(n.CULL_FACE):K(n.CULL_FACE);let ct=D.side===He;st&&(ct=!ct),Lt(ct),D.blending===li&&D.transparent===!1?Zt(Un):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let xt=D.stencilWrite;a.setTest(xt),xt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(D){v!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),v=D)}function _t(D){D!==El?(K(n.CULL_FACE),D!==P&&(D===Va?n.cullFace(n.BACK):D===Tl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),P=D}function te(D){D!==L&&(W&&n.lineWidth(D),L=D)}function ot(D,st,ct){D?(K(n.POLYGON_OFFSET_FILL),(N!==st||k!==ct)&&(n.polygonOffset(st,ct),N=st,k=ct)):pt(n.POLYGON_OFFSET_FILL)}function Ct(D){D?K(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function re(D){D===void 0&&(D=n.TEXTURE0+F-1),J!==D&&(n.activeTexture(D),J=D)}function ue(D,st,ct){ct===void 0&&(J===null?ct=n.TEXTURE0+F-1:ct=J);let xt=j[ct];xt===void 0&&(xt={type:void 0,texture:void 0},j[ct]=xt),(xt.type!==D||xt.texture!==st)&&(J!==ct&&(n.activeTexture(ct),J=ct),n.bindTexture(D,st||X[D]),xt.type=D,xt.texture=st)}function A(){let D=j[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(D){Mt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Mt.copy(D))}function zt(D){Pt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Pt.copy(D))}function Et(D,st){let ct=l.get(st);ct===void 0&&(ct=new WeakMap,l.set(st,ct));let xt=ct.get(D);xt===void 0&&(xt=n.getUniformBlockIndex(st,D.name),ct.set(D,xt))}function ht(D,st){let xt=l.get(st).get(D);c.get(st)!==xt&&(n.uniformBlockBinding(st,xt,D.__bindingPointIndex),c.set(st,xt))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,j={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,M=null,_=null,R=null,T=null,E=new Xt(0,0,0),C=0,S=!1,v=null,P=null,L=null,N=null,k=null,Mt.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pt,bindFramebuffer:At,drawBuffers:yt,useProgram:Wt,setBlending:Zt,setMaterial:Ut,setFlipSided:Lt,setCullFace:_t,setLineWidth:te,setPolygonOffset:ot,setScissorTest:Ct,activeTexture:re,bindTexture:ue,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:wt,texImage3D:it,updateUBOMapping:Et,uniformBlockBinding:ht,texStorage2D:rt,texStorage3D:St,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Tt,scissor:dt,viewport:zt,reset:Gt}}function tg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Rs("canvas")}function x(A,y,H){let Y=1,Q=ue(A);if((Q.width>H||Q.height>H)&&(Y=H/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(Y*Q.width),Tt=Math.floor(Y*Q.height);h===void 0&&(h=g(q,Tt));let rt=y?g(q,Tt):h;return rt.width=q,rt.height=Tt,rt.getContext("2d").drawImage(A,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Tt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,y,H,Y,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===n.RED&&(H===n.FLOAT&&(q=n.R32F),H===n.HALF_FLOAT&&(q=n.R16F),H===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.R8UI),H===n.UNSIGNED_SHORT&&(q=n.R16UI),H===n.UNSIGNED_INT&&(q=n.R32UI),H===n.BYTE&&(q=n.R8I),H===n.SHORT&&(q=n.R16I),H===n.INT&&(q=n.R32I)),y===n.RG&&(H===n.FLOAT&&(q=n.RG32F),H===n.HALF_FLOAT&&(q=n.RG16F),H===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RG8UI),H===n.UNSIGNED_SHORT&&(q=n.RG16UI),H===n.UNSIGNED_INT&&(q=n.RG32UI),H===n.BYTE&&(q=n.RG8I),H===n.SHORT&&(q=n.RG16I),H===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(q=n.RGB16UI),H===n.UNSIGNED_INT&&(q=n.RGB32UI),H===n.BYTE&&(q=n.RGB8I),H===n.SHORT&&(q=n.RGB16I),H===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),H===n.UNSIGNED_INT&&(q=n.RGBA32UI),H===n.BYTE&&(q=n.RGBA8I),H===n.SHORT&&(q=n.RGBA16I),H===n.INT&&(q=n.RGBA32I)),y===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),y===n.RGBA){let Tt=Q?Ts:Jt.getTransfer(Y);H===n.FLOAT&&(q=n.RGBA32F),H===n.HALF_FLOAT&&(q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(q=Tt===ee?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(A,y){let H;return A?y===null||y===ti||y===rs?H=n.DEPTH24_STENCIL8:y===an?H=n.DEPTH32F_STENCIL8:y===is&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===rs?H=n.DEPTH_COMPONENT24:y===an?H=n.DEPTH_COMPONENT32F:y===is&&(H=n.DEPTH_COMPONENT16),H}function R(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pe&&A.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){let y=A.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&u.delete(y)}function E(A){let y=A.target;y.removeEventListener("dispose",E),v(y)}function C(A){let y=i.get(A);if(y.__webglInit===void 0)return;let H=A.source,Y=d.get(H);if(Y){let Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys(Y).length===0&&d.delete(H)}i.remove(A)}function S(A){let y=i.get(A);n.deleteTexture(y.__webglTexture);let H=A.source,Y=d.get(H);delete Y[y.__cacheKey],o.memory.textures--}function v(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=A.textures;for(let Y=0,Q=H.length;Y<Q;Y++){let q=i.get(H[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(H[Y])}i.remove(A)}let P=0;function L(){P=0}function N(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function k(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function F(A,y){let H=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,A,y);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function W(A,y){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){X(H,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function $(A,y){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){X(H,A,y);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function B(A,y){let H=i.get(A);if(A.version>0&&H.__version!==A.version){K(H,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}let J={[ui]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Cr]:n.MIRRORED_REPEAT},j={[Pe]:n.NEAREST,[th]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},nt={[sh]:n.NEVER,[hh]:n.ALWAYS,[rh]:n.LESS,[sc]:n.LEQUAL,[oh]:n.EQUAL,[lh]:n.GEQUAL,[ah]:n.GREATER,[ch]:n.NOTEQUAL};function mt(A,y){if(y.type===an&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ke||y.magFilter===so||y.magFilter===Js||y.magFilter===bn||y.minFilter===Ke||y.minFilter===so||y.minFilter===Js||y.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,J[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,j[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pe||y.minFilter!==Js&&y.minFilter!==bn||y.type===an&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Mt(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));let Y=y.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let q=k(y);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[q].usedTimes++;let Tt=Q[A.__cacheKey];Tt!==void 0&&(Q[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(y)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return H}function Pt(A,y,H){return Math.floor(Math.floor(A/H)/y)}function Ft(A,y,H,Y){let q=A.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,H,Y,y.data);else{q.sort((it,dt)=>it.start-dt.start);let Tt=0;for(let it=1;it<q.length;it++){let dt=q[Tt],zt=q[it],Et=dt.start+dt.count,ht=Pt(zt.start,y.width,4),Gt=Pt(dt.start,y.width,4);zt.start<=Et+1&&ht===Gt&&Pt(zt.start+zt.count-1,y.width,4)===ht?dt.count=Math.max(dt.count,zt.start+zt.count-dt.start):(++Tt,q[Tt]=zt)}q.length=Tt+1;let rt=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),wt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let it=0,dt=q.length;it<dt;it++){let zt=q[it],Et=Math.floor(zt.start/4),ht=Math.ceil(zt.count/4),Gt=Et%y.width,D=Math.floor(Et/y.width),st=ht,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Gt,D,st,ct,H,Y,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function X(A,y,H){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);let Q=Mt(A,y),q=y.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+H);let Tt=i.get(q);if(q.version!==Tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);let rt=Jt.getPrimaries(Jt.workingColorSpace),St=y.colorSpace===On?null:Jt.getPrimaries(y.colorSpace),wt=y.colorSpace===On||rt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let it=x(y.image,!1,s.maxTextureSize);it=re(y,it);let dt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Et=M(y.internalFormat,dt,zt,y.colorSpace,y.isVideoTexture);mt(Y,y);let ht,Gt=y.mipmaps,D=y.isVideoTexture!==!0,st=Tt.__version===void 0||Q===!0,ct=q.dataReady,xt=R(y,it);if(y.isDepthTexture)Et=_(y.format===os,y.type),st&&(D?e.texStorage2D(n.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,dt,zt,null));else if(y.isDataTexture)if(Gt.length>0){D&&st&&e.texStorage2D(n.TEXTURE_2D,xt,Et,Gt[0].width,Gt[0].height);for(let tt=0,Z=Gt.length;tt<Z;tt++)ht=Gt[tt],D?ct&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,zt,ht.data):e.texImage2D(n.TEXTURE_2D,tt,Et,ht.width,ht.height,0,dt,zt,ht.data);y.generateMipmaps=!1}else D?(st&&e.texStorage2D(n.TEXTURE_2D,xt,Et,it.width,it.height),ct&&Ft(y,it,dt,zt)):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,dt,zt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Et,Gt[0].width,Gt[0].height,it.depth);for(let tt=0,Z=Gt.length;tt<Z;tt++)if(ht=Gt[tt],y.format!==Oe)if(dt!==null)if(D){if(ct)if(y.layerUpdates.size>0){let bt=dc(ht.width,ht.height,y.format,y.type);for(let Ht of y.layerUpdates){let oe=ht.data.subarray(Ht*bt/ht.data.BYTES_PER_ELEMENT,(Ht+1)*bt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Ht,ht.width,ht.height,1,dt,oe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,dt,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Et,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,dt,zt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Et,ht.width,ht.height,it.depth,0,dt,zt,ht.data)}else{D&&st&&e.texStorage2D(n.TEXTURE_2D,xt,Et,Gt[0].width,Gt[0].height);for(let tt=0,Z=Gt.length;tt<Z;tt++)ht=Gt[tt],y.format!==Oe?dt!==null?D?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Et,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ct&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,zt,ht.data):e.texImage2D(n.TEXTURE_2D,tt,Et,ht.width,ht.height,0,dt,zt,ht.data)}else if(y.isDataArrayTexture)if(D){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Et,it.width,it.height,it.depth),ct)if(y.layerUpdates.size>0){let tt=dc(it.width,it.height,y.format,y.type);for(let Z of y.layerUpdates){let bt=it.data.subarray(Z*tt/it.data.BYTES_PER_ELEMENT,(Z+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,dt,zt,bt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,zt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,dt,zt,it.data);else if(y.isData3DTexture)D?(st&&e.texStorage3D(n.TEXTURE_3D,xt,Et,it.width,it.height,it.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,zt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,dt,zt,it.data);else if(y.isFramebufferTexture){if(st)if(D)e.texStorage2D(n.TEXTURE_2D,xt,Et,it.width,it.height);else{let tt=it.width,Z=it.height;for(let bt=0;bt<xt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Et,tt,Z,0,dt,zt,null),tt>>=1,Z>>=1}}else if(Gt.length>0){if(D&&st){let tt=ue(Gt[0]);e.texStorage2D(n.TEXTURE_2D,xt,Et,tt.width,tt.height)}for(let tt=0,Z=Gt.length;tt<Z;tt++)ht=Gt[tt],D?ct&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt,zt,ht):e.texImage2D(n.TEXTURE_2D,tt,Et,dt,zt,ht);y.generateMipmaps=!1}else if(D){if(st){let tt=ue(it);e.texStorage2D(n.TEXTURE_2D,xt,Et,tt.width,tt.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,zt,it)}else e.texImage2D(n.TEXTURE_2D,0,Et,dt,zt,it);m(y)&&f(Y),Tt.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function K(A,y,H){if(y.image.length!==6)return;let Y=Mt(A,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);let q=i.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+H);let Tt=Jt.getPrimaries(Jt.workingColorSpace),rt=y.colorSpace===On?null:Jt.getPrimaries(y.colorSpace),St=y.colorSpace===On||Tt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let wt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!wt&&!it?dt[Z]=x(y.image[Z],!0,s.maxCubemapSize):dt[Z]=it?y.image[Z].image:y.image[Z],dt[Z]=re(y,dt[Z]);let zt=dt[0],Et=r.convert(y.format,y.colorSpace),ht=r.convert(y.type),Gt=M(y.internalFormat,Et,ht,y.colorSpace),D=y.isVideoTexture!==!0,st=q.__version===void 0||Y===!0,ct=Q.dataReady,xt=R(y,zt);mt(n.TEXTURE_CUBE_MAP,y);let tt;if(wt){D&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Gt,zt.width,zt.height);for(let Z=0;Z<6;Z++){tt=dt[Z].mipmaps;for(let bt=0;bt<tt.length;bt++){let Ht=tt[bt];y.format!==Oe?Et!==null?D?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,Ht.width,Ht.height,Et,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,Gt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,0,0,Ht.width,Ht.height,Et,ht,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt,Gt,Ht.width,Ht.height,0,Et,ht,Ht.data)}}}else{if(tt=y.mipmaps,D&&st){tt.length>0&&xt++;let Z=ue(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Et,ht,dt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,dt[Z].width,dt[Z].height,0,Et,ht,dt[Z].data);for(let bt=0;bt<tt.length;bt++){let oe=tt[bt].image[Z].image;D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,oe.width,oe.height,Et,ht,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,Gt,oe.width,oe.height,0,Et,ht,oe.data)}}else{D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,ht,dt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Et,ht,dt[Z]);for(let bt=0;bt<tt.length;bt++){let Ht=tt[bt];D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,0,0,Et,ht,Ht.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,bt+1,Gt,Et,ht,Ht.image[Z])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),q.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function pt(A,y,H,Y,Q,q){let Tt=r.convert(H.format,H.colorSpace),rt=r.convert(H.type),St=M(H.internalFormat,Tt,rt,H.colorSpace),wt=i.get(y),it=i.get(H);if(it.__renderTarget=y,!wt.__hasExternalTextures){let dt=Math.max(1,y.width>>q),zt=Math.max(1,y.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,St,dt,zt,y.depth,0,Tt,rt,null):e.texImage2D(Q,q,St,dt,zt,0,Tt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ot(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,it.__webglTexture,0,te(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,it.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(A,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){let Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=_(y.stencilBuffer,Q),Tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=te(y);ot(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,q,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,A)}else{let Y=y.textures;for(let Q=0;Q<Y.length;Q++){let q=Y[Q],Tt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),St=M(q.internalFormat,Tt,rt,q.colorSpace),wt=te(y);H&&ot(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,St,y.width,y.height):ot(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,St,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,St,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);let Q=Y.__webglTexture,q=te(y);if(y.depthTexture.format===qi)ot(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===os)ot(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Wt(A){let y=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let Y=A.texture.mipmaps;Y&&Y.length>0?yt(y.__webglFramebuffer[0],A):yt(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),At(y.__webglDepthbuffer[Y],A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),At(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(A,y,H){let Y=i.get(A);y!==void 0&&pt(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Wt(A)}function I(A){let y=A.texture,H=i.get(A),Y=i.get(y);A.addEventListener("dispose",E);let Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),q){H.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[rt]=[];for(let St=0;St<y.mipmaps.length;St++)H.__webglFramebuffer[rt][St]=n.createFramebuffer()}else H.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)H.__webglFramebuffer[rt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let rt=0,St=Q.length;rt<St;rt++){let wt=i.get(Q[rt]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){let St=Q[rt];H.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[rt]);let wt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),dt=M(St.internalFormat,wt,it,St.colorSpace,A.isXRRenderTarget===!0),zt=te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,dt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,H.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),At(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),mt(n.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)pt(H.__webglFramebuffer[rt][St],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St);else pt(H.__webglFramebuffer[rt],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,St=Q.length;rt<St;rt++){let wt=Q[rt],it=i.get(wt),dt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,it.__webglTexture),mt(dt,wt),pt(H.__webglFramebuffer,A,wt,n.COLOR_ATTACHMENT0+rt,dt,0),m(wt)&&f(dt)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),mt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)pt(H.__webglFramebuffer[St],A,y,n.COLOR_ATTACHMENT0,rt,St);else pt(H.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,rt,0);m(y)&&f(rt),e.unbindTexture()}A.depthBuffer&&Wt(A)}function Zt(A){let y=A.textures;for(let H=0,Y=y.length;H<Y;H++){let Q=y[H];if(m(Q)){let q=w(A),Tt=i.get(Q).__webglTexture;e.bindTexture(q,Tt),f(q),e.unbindTexture()}}}let Ut=[],Lt=[];function _t(A){if(A.samples>0){if(ot(A)===!1){let y=A.textures,H=A.width,Y=A.height,Q=n.COLOR_BUFFER_BIT,q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(A),rt=y.length>1;if(rt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let St=A.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[wt]);let it=i.get(y[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,H,Y,0,0,H,Y,Q,n.NEAREST),c===!0&&(Ut.length=0,Lt.length=0,Ut.push(n.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ut.push(q),Lt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[wt]);let it=i.get(y[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function te(A){return Math.min(s.maxSamples,A.samples)}function ot(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(A){let y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function re(A,y){let H=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==di&&H!==On&&(Jt.getTransfer(H)===ee?(Y!==Oe||Q!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=fe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot}function eg(n,t){function e(i,s=On){let r,o=Jt.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ao)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ka)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ja)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Za)return n.BYTE;if(i===Ja)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===ro)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===an)return n.FLOAT;if(i===ss)return n.HALF_FLOAT;if(i===Qa)return n.ALPHA;if(i===tc)return n.RGB;if(i===Oe)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===ec)return n.RED;if(i===co)return n.RED_INTEGER;if(i===nc)return n.RG;if(i===lo)return n.RG_INTEGER;if(i===ho)return n.RGBA_INTEGER;if(i===Ks||i===js||i===Qs||i===tr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uo||i===fo||i===po||i===mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===go||i===xo||i===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===go||i===xo)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===vo||i===Mo||i===bo||i===So||i===wo||i===Eo||i===To||i===Ao||i===Ro||i===Co||i===Io||i===Po||i===Do)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ao)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ro)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Co)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Po)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Do)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===Uo||i===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lo)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oo||i===Fo||i===zo||i===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new je({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends _n{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ec,f={},w=e.getContextAttributes(),M=null,_=null,R=[],T=[],E=new Ot,C=null,S=new Ue;S.viewport=new le;let v=new Ue;v.viewport=new le;let P=[S,v],L=new Yr,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=R[X];return K===void 0&&(K=new Qi,R[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=R[X];return K===void 0&&(K=new Qi,R[X]=K),K.getGripSpace()},this.getHand=function(X){let K=R[X];return K===void 0&&(K=new Qi,R[X]=K),K.getHandSpace()};function F(X){let K=T.indexOf(X.inputSource);if(K===-1)return;let pt=R[K];pt!==void 0&&(pt.update(X.inputSource,X.frame,l||o),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let X=0;X<R.length;X++){let K=T[X];K!==null&&(T[X]=null,R[X].disconnect(K))}N=null,k=null,m.reset();for(let X in f)delete f[X];t.setRenderTarget(M),p=null,d=null,h=null,s=null,_=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,At=null,yt=null;w.depth&&(yt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?os:qi,At=w.stencil?rs:ti);let Wt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new yn(d.textureWidth,d.textureHeight,{format:Oe,type:mn,depthTexture:new Fs(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new yn(p.framebufferWidth,p.framebufferHeight,{format:Oe,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let K=0;K<X.removed.length;K++){let pt=X.removed[K],At=T.indexOf(pt);At>=0&&(T[At]=null,R[At].disconnect(pt))}for(let K=0;K<X.added.length;K++){let pt=X.added[K],At=T.indexOf(pt);if(At===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=T.length){T.push(pt),At=Wt;break}else if(T[Wt]===null){T[Wt]=pt,At=Wt;break}if(At===-1)break}let yt=R[At];yt&&yt.connect(pt)}}let B=new U,J=new U;function j(X,K,pt){B.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(pt.matrixWorld);let At=B.distanceTo(J),yt=K.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,fe=yt[14]/(yt[10]-1),I=yt[14]/(yt[10]+1),Zt=(yt[9]+1)/yt[5],Ut=(yt[9]-1)/yt[5],Lt=(yt[8]-1)/yt[0],_t=(Wt[8]+1)/Wt[0],te=fe*Lt,ot=fe*_t,Ct=At/(-Lt+_t),re=Ct*-Lt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),yt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ue=fe+Ct,A=I+Ct,y=te-re,H=ot+(At-re),Y=Zt*I/A*ue,Q=Ut*I/A*ue;X.projectionMatrix.makePerspective(y,H,Y,Q,ue,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,pt=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),L.near=v.near=S.near=K,L.far=v.far=S.far=pt,(N!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,k=L.far),L.layers.mask=X.layers.mask|6,S.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;let At=X.parent,yt=L.cameras;nt(L,At);for(let Wt=0;Wt<yt.length;Wt++)nt(yt[Wt],At);yt.length===2?j(L,S,v):L.projectionMatrix.copy(S.projectionMatrix),mt(X,L,At)};function mt(X,K,pt){pt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(X){return f[X]};let Mt=null;function Pt(X,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let At=!1;pt.length!==L.cameras.length&&(L.cameras.length=0,At=!0);for(let I=0;I<pt.length;I++){let Zt=pt[I],Ut=null;if(p!==null)Ut=p.getViewport(Zt);else{let _t=h.getViewSubImage(d,Zt);Ut=_t.viewport,I===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let Lt=P[I];Lt===void 0&&(Lt=new Ue,Lt.layers.enable(I),Lt.viewport=new le,P[I]=Lt),Lt.matrix.fromArray(Zt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Zt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),I===0&&(L.matrix.copy(Lt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),At===!0&&L.cameras.push(Lt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let I=h.getDepthInformation(pt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let I=0;I<pt.length;I++){let Zt=pt[I].camera;if(Zt){let Ut=f[Zt];Ut||(Ut=new zs,f[Zt]=Ut);let Lt=h.getCameraImage(Zt);Ut.sourceTexture=Lt}}}}for(let pt=0;pt<R.length;pt++){let At=T[pt],yt=R[pt];At!==null&&yt!==void 0&&yt.update(At,K,l||o)}Mt&&Mt(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let Ft=new Gh;Ft.setAnimationLoop(Pt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}},bi=new pn,sg=new xe;function rg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,lc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),M=w.envMap,_=w.envMapRotation;M&&(m.envMap.value=M,bi.copy(_),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function og(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){let _=M.program;i.uniformBlockBinding(w,_)}function l(w,M){let _=s[w.id];_===void 0&&(g(w),_=u(w),s[w.id]=_,w.addEventListener("dispose",m));let R=M.program;i.updateUBOMapping(w,R);let T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function u(w){let M=h();w.__bindingPointIndex=M;let _=n.createBuffer(),R=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let M=s[w.id],_=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,E=_.length;T<E;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,v=C.length;S<v;S++){let P=C[S];if(p(P,T,S,R)===!0){let L=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],k=0;for(let F=0;F<N.length;F++){let W=N[F],$=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,L+k,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,M,_,R){let T=w.value,E=M+"_"+_;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let C=R[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(w){let M=w.uniforms,_=0,R=16;for(let E=0,C=M.length;E<C;E++){let S=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,P=S.length;v<P;v++){let L=S[v],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,F=N.length;k<F;k++){let W=N[k],$=x(W),B=_%R,J=B%$.boundary,j=B+J;_+=J,j!==0&&R-j<$.storage&&(_+=R-j),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=$.storage}}}let T=_%R;return T>0&&(_+=R-T),w.__size=_,w.__cache={},this}function x(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){let M=w.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Wo=class{constructor(t={}){let{canvas:e=uh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,R=!1;this._outputColorSpace=be;let T=0,E=0,C=null,S=-1,v=null,P=new le,L=new le,N=null,k=new Xt(0),F=0,W=e.width,$=e.height,B=1,J=null,j=null,nt=new le(0,0,W,$),mt=new le(0,0,W,$),Mt=!1,Pt=new ts,Ft=!1,X=!1,K=new xe,pt=new U,At=new le,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function fe(){return C===null?B:1}let I=i;function Zt(b,O){return e.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),I===null){let O="webgl2";if(I=Zt(O,b),I===null)throw Zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ut,Lt,_t,te,ot,Ct,re,ue,A,y,H,Y,Q,q,Tt,rt,St,wt,it,dt,zt,Et,ht,Gt;function D(){Ut=new wm(I),Ut.init(),Et=new eg(I,Ut),Lt=new xm(I,Ut,t,Et),_t=new Q0(I,Ut),Lt.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),te=new Am(I),ot=new k0,Ct=new tg(I,Ut,_t,ot,Lt,Et,te),re=new ym(_),ue=new Sm(_),A=new Dd(I),ht=new mm(I,A),y=new Em(I,A,te,ht),H=new Cm(I,y,A,te),it=new Rm(I,Lt,Ct),rt=new _m(ot),Y=new B0(_,re,ue,Ut,Lt,ht,rt),Q=new rg(_,ot),q=new V0,Tt=new $0(Ut),wt=new pm(_,re,ue,_t,H,p,c),St=new K0(_,H,Lt),Gt=new og(I,te,Lt,_t),dt=new gm(I,Ut,te),zt=new Tm(I,Ut,te),te.programs=Y.programs,_.capabilities=Lt,_.extensions=Ut,_.properties=ot,_.renderLists=q,_.shadowMap=St,_.state=_t,_.info=te}D();let st=new Tc(_,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(W,$,!1))},this.getSize=function(b){return b.set(W,$)},this.setSize=function(b,O,V=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,$=O,e.width=Math.floor(b*B),e.height=Math.floor(O*B),V===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*B,$*B).floor()},this.setDrawingBufferSize=function(b,O,V){W=b,$=O,B=V,e.width=Math.floor(b*V),e.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,O,V,G){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,O,V,G),_t.viewport(P.copy(nt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,O,V,G){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,O,V,G),_t.scissor(L.copy(mt).multiplyScalar(B).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(b){_t.setScissorTest(Mt=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,V=!0){let G=0;if(b){let z=!1;if(C!==null){let et=C.texture.format;z=et===ho||et===lo||et===co}if(z){let et=C.texture.type,ut=et===mn||et===ti||et===is||et===rs||et===oo||et===ao,vt=wt.getClearColor(),gt=wt.getClearAlpha(),Nt=vt.r,Bt=vt.g,It=vt.b;ut?(g[0]=Nt,g[1]=Bt,g[2]=It,g[3]=gt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Nt,x[1]=Bt,x[2]=It,x[3]=gt,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}O&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),wt.dispose(),q.dispose(),Tt.dispose(),ot.dispose(),re.dispose(),ue.dispose(),H.dispose(),ht.dispose(),Gt.dispose(),Y.dispose(),st.dispose(),st.removeEventListener("sessionstart",xn),st.removeEventListener("sessionend",Jc),ni.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=te.autoReset,O=St.enabled,V=St.autoUpdate,G=St.needsUpdate,z=St.type;D(),te.autoReset=b,St.enabled=O,St.autoUpdate=V,St.needsUpdate=G,St.type=z}function tt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Z(b){let O=b.target;O.removeEventListener("dispose",Z),bt(O)}function bt(b){Ht(b),ot.remove(b)}function Ht(b){let O=ot.get(b).programs;O!==void 0&&(O.forEach(function(V){Y.releaseProgram(V)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,G,z,et){O===null&&(O=yt);let ut=z.isMesh&&z.matrixWorld.determinant()<0,vt=mu(b,O,V,G,z);_t.setMaterial(G,ut);let gt=V.index,Nt=1;if(G.wireframe===!0){if(gt=y.getWireframeAttribute(V),gt===void 0)return;Nt=2}let Bt=V.drawRange,It=V.attributes.position,Yt=Bt.start*Nt,ne=(Bt.start+Bt.count)*Nt;et!==null&&(Yt=Math.max(Yt,et.start*Nt),ne=Math.min(ne,(et.start+et.count)*Nt)),gt!==null?(Yt=Math.max(Yt,0),ne=Math.min(ne,gt.count)):It!=null&&(Yt=Math.max(Yt,0),ne=Math.min(ne,It.count));let _e=ne-Yt;if(_e<0||_e===1/0)return;ht.setup(z,G,vt,V,gt);let ae,se=dt;if(gt!==null&&(ae=A.get(gt),se=zt,se.setIndex(ae)),z.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*fe()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(z.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),_t.setLineWidth(Dt*fe()),z.isLineSegments?se.setMode(I.LINES):z.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else z.isPoints?se.setMode(I.POINTS):z.isSprite&&se.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)$i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Dt=z._multiDrawStarts,pe=z._multiDrawCounts,jt=z._multiDrawCount,Ye=gt?A.get(gt).bytesPerElement:1,Pi=ot.get(G).currentProgram.getUniforms();for(let $e=0;$e<jt;$e++)Pi.setValue(I,"_gl_DrawID",$e),se.render(Dt[$e]/Ye,pe[$e])}else if(z.isInstancedMesh)se.renderInstances(Yt,_e,z.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,Dt);se.renderInstances(Yt,_e,pe)}else se.render(Yt,_e)};function oe(b,O,V){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=He,b.needsUpdate=!0,rr(b,O,V),b.side=Ln,b.needsUpdate=!0,rr(b,O,V),b.side=Ve):rr(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),f=Tt.get(V),f.init(O),M.push(f),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let G=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let et=z.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let vt=et[ut];oe(vt,V,z),G.add(vt)}else oe(et,V,z),G.add(et)}),f=M.pop(),G},this.compileAsync=function(b,O,V=null){let G=this.compile(b,O,V);return new Promise(z=>{function et(){if(G.forEach(function(ut){ot.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){z(b);return}setTimeout(et,10)}Ut.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Qt=null;function Tn(b){Qt&&Qt(b)}function xn(){ni.stop()}function Jc(){ni.start()}let ni=new Gh;ni.setAnimationLoop(Tn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){Qt=b,st.setAnimationLoop(b),b===null?ni.stop():ni.start()},st.addEventListener("sessionstart",xn),st.addEventListener("sessionend",Jc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(O),O=st.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,C),f=Tt.get(b,M.length),f.init(O),M.push(f),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pt.setFromProjectionMatrix(K,fn,O.reversedDepth),X=this.localClippingEnabled,Ft=rt.init(this.clippingPlanes,X),m=q.get(b,w.length),m.init(),w.push(m),st.enabled===!0&&st.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&aa(et,O,-1/0,_.sortObjects)}aa(b,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,j),Wt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Wt&&wt.addToRenderList(m,b),this.info.render.frame++,Ft===!0&&rt.beginShadows();let V=f.state.shadowsArray;St.render(V,b,O),Ft===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,z=m.transmissive;if(f.setupLights(),O.isArrayCamera){let et=O.cameras;if(z.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){let gt=et[ut];jc(G,z,b,gt)}Wt&&wt.render(b);for(let ut=0,vt=et.length;ut<vt;ut++){let gt=et[ut];Kc(m,b,gt,gt.viewport)}}else z.length>0&&jc(G,z,b,O),Wt&&wt.render(b),Kc(m,b,O);C!==null&&E===0&&(Ct.updateMultisampleRenderTarget(C),Ct.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,O),ht.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(f=M[M.length-1],Ft===!0&&rt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function aa(b,O,V,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pt.intersectsSprite(b)){G&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);let ut=H.update(b),vt=b.material;vt.visible&&m.push(b,ut,vt,V,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pt.intersectsObject(b))){let ut=H.update(b),vt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(K)),Array.isArray(vt)){let gt=ut.groups;for(let Nt=0,Bt=gt.length;Nt<Bt;Nt++){let It=gt[Nt],Yt=vt[It.materialIndex];Yt&&Yt.visible&&m.push(b,ut,Yt,V,At.z,It)}}else vt.visible&&m.push(b,ut,vt,V,At.z,null)}}let et=b.children;for(let ut=0,vt=et.length;ut<vt;ut++)aa(et[ut],O,V,G)}function Kc(b,O,V,G){let z=b.opaque,et=b.transmissive,ut=b.transparent;f.setupLightsView(V),Ft===!0&&rt.setGlobalState(_.clippingPlanes,V),G&&_t.viewport(P.copy(G)),z.length>0&&sr(z,O,V),et.length>0&&sr(et,O,V),ut.length>0&&sr(ut,O,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function jc(b,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new yn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?ss:mn,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let et=f.state.transmissionRenderTarget[G.id],ut=G.viewport||P;et.setSize(ut.z*_.transmissionResolutionScale,ut.w*_.transmissionResolutionScale);let vt=_.getRenderTarget(),gt=_.getActiveCubeFace(),Nt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(k),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&wt.render(V);let Bt=_.toneMapping;_.toneMapping=Nn;let It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),Ft===!0&&rt.setGlobalState(_.clippingPlanes,G),sr(b,V,G),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ne=0,_e=O.length;ne<_e;ne++){let ae=O[ne],se=ae.object,Dt=ae.geometry,pe=ae.material,jt=ae.group;if(pe.side===Ve&&se.layers.test(G.layers)){let Ye=pe.side;pe.side=He,pe.needsUpdate=!0,Qc(se,V,G,Dt,pe,jt),pe.side=Ye,pe.needsUpdate=!0,Yt=!0}}Yt===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et))}_.setRenderTarget(vt,gt,Nt),_.setClearColor(k,F),It!==void 0&&(G.viewport=It),_.toneMapping=Bt}function sr(b,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,et=b.length;z<et;z++){let ut=b[z],vt=ut.object,gt=ut.geometry,Nt=ut.group,Bt=ut.material;Bt.allowOverride===!0&&G!==null&&(Bt=G),vt.layers.test(V.layers)&&Qc(vt,O,V,gt,Bt,Nt)}}function Qc(b,O,V,G,z,et){b.onBeforeRender(_,O,V,G,z,et),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,O,V,G,b,et),z.transparent===!0&&z.side===Ve&&z.forceSinglePass===!1?(z.side=He,z.needsUpdate=!0,_.renderBufferDirect(V,O,G,z,b,et),z.side=Ln,z.needsUpdate=!0,_.renderBufferDirect(V,O,G,z,b,et),z.side=Ve):_.renderBufferDirect(V,O,G,z,b,et),b.onAfterRender(_,O,V,G,z,et)}function rr(b,O,V){O.isScene!==!0&&(O=yt);let G=ot.get(b),z=f.state.lights,et=f.state.shadowsArray,ut=z.state.version,vt=Y.getParameters(b,z.state,et,O,V),gt=Y.getProgramCacheKey(vt),Nt=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?ue:re).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Z),Nt=new Map,G.programs=Nt);let Bt=Nt.get(gt);if(Bt!==void 0){if(G.currentProgram===Bt&&G.lightsStateVersion===ut)return el(b,vt),Bt}else vt.uniforms=Y.getUniforms(b),b.onBeforeCompile(vt,_),Bt=Y.acquireProgram(vt,gt),Nt.set(gt,Bt),G.uniforms=vt.uniforms;let It=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=rt.uniform),el(b,vt),G.needsLights=xu(b),G.lightsStateVersion=ut,G.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Bt,G.uniformsList=null,Bt}function tl(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function el(b,O){let V=ot.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function mu(b,O,V,G,z){O.isScene!==!0&&(O=yt),Ct.resetTextureUnits();let et=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,vt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:di,gt=(G.isMeshStandardMaterial?ue:re).get(G.envMap||ut),Nt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color,_e=Nn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=_.toneMapping);let ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=ae!==void 0?ae.length:0,Dt=ot.get(G),pe=f.state.lights;if(Ft===!0&&(X===!0||b!==v)){let ze=b===v&&G.id===S;rt.setState(G,b,ze)}let jt=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==pe.state.version||Dt.outputColorSpace!==vt||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==gt||G.fog===!0&&Dt.fog!==et||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Nt||Dt.vertexTangents!==Bt||Dt.morphTargets!==It||Dt.morphNormals!==Yt||Dt.morphColors!==ne||Dt.toneMapping!==_e||Dt.morphTargetsCount!==se)&&(jt=!0):(jt=!0,Dt.__version=G.version);let Ye=Dt.currentProgram;jt===!0&&(Ye=rr(G,O,z));let Pi=!1,$e=!1,xs=!1,me=Ye.getUniforms(),tn=Dt.uniforms;if(_t.useProgram(Ye.program)&&(Pi=!0,$e=!0,xs=!0),G.id!==S&&(S=G.id,$e=!0),Pi||v!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",b.projectionMatrix),me.setValue(I,"viewMatrix",b.matrixWorldInverse);let Ge=me.map.cameraPosition;Ge!==void 0&&Ge.setValue(I,pt.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,$e=!0,xs=!0)}if(z.isSkinnedMesh){me.setOptional(I,z,"bindMatrix"),me.setOptional(I,z,"bindMatrixInverse");let ze=z.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),me.setValue(I,"boneTexture",ze.boneTexture,Ct))}z.isBatchedMesh&&(me.setOptional(I,z,"batchingTexture"),me.setValue(I,"batchingTexture",z._matricesTexture,Ct),me.setOptional(I,z,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",z._indirectTexture,Ct),me.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",z._colorsTexture,Ct));let en=V.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&it.update(z,V,Ye),($e||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,me.setValue(I,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=gt,tn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),$e&&(me.setValue(I,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&gu(tn,xs),et&&G.fog===!0&&Q.refreshFogUniforms(tn,et),Q.refreshMaterialUniforms(tn,G,B,$,f.state.transmissionRenderTarget[b.id]),hs.upload(I,tl(Dt),tn,Ct)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(I,tl(Dt),tn,Ct),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(I,"center",z.center),me.setValue(I,"modelViewMatrix",z.modelViewMatrix),me.setValue(I,"normalMatrix",z.normalMatrix),me.setValue(I,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ze=G.uniformsGroups;for(let Ge=0,ca=ze.length;Ge<ca;Ge++){let ii=ze[Ge];Gt.update(ii,Ye),Gt.bind(ii,Ye)}}return Ye}function gu(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function xu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,V){let G=ot.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ot.get(b.texture).__webglTexture=O,ot.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let V=ot.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let _u=I.createFramebuffer();this.setRenderTarget=function(b,O=0,V=0){C=b,T=O,E=V;let G=!0,z=null,et=!1,ut=!1;if(b){let gt=ot.get(b);if(gt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(gt.__webglFramebuffer===void 0)Ct.setupRenderTarget(b);else if(gt.__hasExternalTextures)Ct.rebindTextures(b,ot.get(b.texture).__webglTexture,ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let It=b.depthTexture;if(gt.__boundDepthTexture!==It){if(It!==null&&ot.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(b)}}let Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ut=!0);let Bt=ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?z=Bt[O][V]:z=Bt[O],et=!0):b.samples>0&&Ct.useMultisampledRTT(b)===!1?z=ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?z=Bt[V]:z=Bt,P.copy(b.viewport),L.copy(b.scissor),N=b.scissorTest}else P.copy(nt).multiplyScalar(B).floor(),L.copy(mt).multiplyScalar(B).floor(),N=Mt;if(V!==0&&(z=_u),_t.bindFramebuffer(I.FRAMEBUFFER,z)&&G&&_t.drawBuffers(b,z),_t.viewport(P),_t.scissor(L),_t.setScissorTest(N),et){let gt=ot.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,V)}else if(ut){let gt=O;for(let Nt=0;Nt<b.textures.length;Nt++){let Bt=ot.get(b.textures[Nt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,V,gt)}}else if(b!==null&&V!==0){let gt=ot.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(b,O,V,G,z,et,ut,vt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){_t.bindFramebuffer(I.FRAMEBUFFER,gt);try{let Nt=b.textures[vt],Bt=Nt.format,It=Nt.type;if(!Lt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&V>=0&&V<=b.height-z&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt),I.readPixels(O,V,G,z,Et.convert(Bt),Et.convert(It),et))}finally{let Nt=C!==null?ot.get(C).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,G,z,et,ut,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt)if(O>=0&&O<=b.width-G&&V>=0&&V<=b.height-z){_t.bindFramebuffer(I.FRAMEBUFFER,gt);let Nt=b.textures[vt],Bt=Nt.format,It=Nt.type;if(!Lt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt),I.readPixels(O,V,G,z,Et.convert(Bt),Et.convert(It),0);let ne=C!==null?ot.get(C).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ne);let _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await dh(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Yt),I.deleteSync(_e),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,V=0){let G=Math.pow(2,-V),z=Math.floor(b.image.width*G),et=Math.floor(b.image.height*G),ut=O!==null?O.x:0,vt=O!==null?O.y:0;Ct.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ut,vt,z,et),_t.unbindTexture()};let yu=I.createFramebuffer(),vu=I.createFramebuffer();this.copyTextureToTexture=function(b,O,V=null,G=null,z=0,et=null){et===null&&(z!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=z,z=0):et=0);let ut,vt,gt,Nt,Bt,It,Yt,ne,_e,ae=b.isCompressedTexture?b.mipmaps[et]:b.image;if(V!==null)ut=V.max.x-V.min.x,vt=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Bt=V.min.y,It=V.isBox3?V.min.z:0;else{let en=Math.pow(2,-z);ut=Math.floor(ae.width*en),vt=Math.floor(ae.height*en),b.isDataArrayTexture?gt=ae.depth:b.isData3DTexture?gt=Math.floor(ae.depth*en):gt=1,Nt=0,Bt=0,It=0}G!==null?(Yt=G.x,ne=G.y,_e=G.z):(Yt=0,ne=0,_e=0);let se=Et.convert(O.format),Dt=Et.convert(O.type),pe;O.isData3DTexture?(Ct.setTexture3D(O,0),pe=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ct.setTexture2DArray(O,0),pe=I.TEXTURE_2D_ARRAY):(Ct.setTexture2D(O,0),pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let jt=I.getParameter(I.UNPACK_ROW_LENGTH),Ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pi=I.getParameter(I.UNPACK_SKIP_PIXELS),$e=I.getParameter(I.UNPACK_SKIP_ROWS),xs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It);let me=b.isDataArrayTexture||b.isData3DTexture,tn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let en=ot.get(b),ze=ot.get(O),Ge=ot.get(en.__renderTarget),ca=ot.get(ze.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Ge.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let ii=0;ii<gt;ii++)me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(b).__webglTexture,z,It+ii),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(O).__webglTexture,et,_e+ii)),I.blitFramebuffer(Nt,Bt,ut,vt,Yt,ne,ut,vt,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||ot.has(b)){let en=ot.get(b),ze=ot.get(O);_t.bindFramebuffer(I.READ_FRAMEBUFFER,yu),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,vu);for(let Ge=0;Ge<gt;Ge++)me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,z,It+Ge):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,z),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,et,_e+Ge):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,et),z!==0?I.blitFramebuffer(Nt,Bt,ut,vt,Yt,ne,ut,vt,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(pe,et,Yt,ne,_e+Ge,Nt,Bt,ut,vt):I.copyTexSubImage2D(pe,et,Yt,ne,Nt,Bt,ut,vt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(pe,et,Yt,ne,_e,ut,vt,gt,se,Dt,ae.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(pe,et,Yt,ne,_e,ut,vt,gt,se,ae.data):I.texSubImage3D(pe,et,Yt,ne,_e,ut,vt,gt,se,Dt,ae):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Yt,ne,ut,vt,se,Dt,ae.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Yt,ne,ae.width,ae.height,se,ae.data):I.texSubImage2D(I.TEXTURE_2D,et,Yt,ne,ut,vt,se,Dt,ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pi),I.pixelStorei(I.UNPACK_SKIP_ROWS,$e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,xs),et===0&&O.generateMipmaps&&I.generateMipmap(pe),_t.unbindTexture()},this.initRenderTarget=function(b){ot.get(b).__webglFramebuffer===void 0&&Ct.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ct.setTextureCube(b,0):b.isData3DTexture?Ct.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ct.setTexture2DArray(b,0):Ct.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var $h={type:"change"},Cc={type:"start"},Jh={type:"end"},qo=new Ki,Zh=new sn,ag=Math.cos(70*ac.DEG2RAD),Te=new U,Xe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rc=1e-6,Yo=class extends $s{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new rn,this._lastTargetPosition=new U,this._quat=new rn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ns,this._sphericalDelta=new ns,this._scale=1,this._panOffset=new U,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new U,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lg.bind(this),this._onPointerDown=cg.bind(this),this._onPointerUp=hg.bind(this),this._onContextMenu=xg.bind(this),this._onMouseWheel=fg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=gg.bind(this),this._onMouseDown=ug.bind(this),this._onMouseMove=dg.bind(this),this._interceptControlDown=_g.bind(this),this._interceptControlUp=yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xe:i>Math.PI&&(i-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Te.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<ag?this.object.lookAt(this.target):(Zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Zh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rc||this._lastTargetPosition.distanceToSquared(this.target)>Rc?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function cg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jh),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ug(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case jn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case jn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Cc)}function dg(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(Cc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jh))}function pg(n){this.enabled!==!1&&this._handleKeyDown(n)}function mg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Cc)}function gg(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function xg(n){this.enabled!==!1&&n.preventDefault()}function _g(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ic(n,t=0,e=0){let i=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return i-Math.floor(i)}var at=(n,t,e,i="#ffffff",s={})=>({label:n,group:t,texture:e,tint:i,...s}),Kh={"mortar-white":at("\u30E2\u30EB\u30BF\u30EB\uFF08\u767D\uFF09","wall","mortar","#fbfaf4"),"mortar-cream":at("\u30E2\u30EB\u30BF\u30EB\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","mortar","#f5ead0"),"mortar-ivory":at("\u30E2\u30EB\u30BF\u30EB\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","mortar","#f1e9d9"),"mortar-grey":at("\u30E2\u30EB\u30BF\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","mortar","#c8c7bf"),"stucco-white":at("\u5857\u308A\u58C1\uFF08\u767D\uFF09","wall","stucco","#f8f6ef"),"stucco-ivory":at("\u5857\u308A\u58C1\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","wall","stucco","#f3ecda"),"stucco-cream":at("\u5857\u308A\u58C1\uFF08\u30AF\u30EA\u30FC\u30E0\uFF09","wall","stucco","#f2e2c0"),"stucco-yellow":at("\u5857\u308A\u58C1\uFF08\u9EC4\uFF09","wall","stucco","#efd58e"),"stucco-rose":at("\u5857\u308A\u58C1\uFF08\u30ED\u30FC\u30BA\uFF09","wall","stucco","#eccdc0"),"stucco-sage":at("\u5857\u308A\u58C1\uFF08\u82E5\u8349\uFF09","wall","stucco","#d2dcc0"),"stucco-blue":at("\u5857\u308A\u58C1\uFF08\u6C34\u8272\uFF09","wall","stucco","#c8d9e3"),"stucco-charcoal":at("\u5857\u308A\u58C1\uFF08\u30C1\u30E3\u30B3\u30FC\u30EB\uFF09","wall","stucco","#54585b"),"plaster-white":at("\u6F06\u55B0","wall","plaster","#f6f3ea"),concrete:at("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u6253\u3061\u653E\u3057","wall","concrete"),"concrete-stained":at("\u53E4\u3073\u305F\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8","wall","concreteStained"),"concrete-dark":at("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF08\u6FC3\uFF09","wall","concreteStained","#a4a39e"),"brick-red":at("\u30EC\u30F3\u30AC\uFF08\u8D64\uFF09","wall","brick"),"brick-brown":at("\u30EC\u30F3\u30AC\uFF08\u3053\u3052\u8336\uFF09","wall","brick","#b08d7c"),"brick-white":at("\u30EC\u30F3\u30AC\uFF08\u767D\uFF09","wall","brickWhite"),"tile-white":at("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","wall","tile","#fafaf6"),"tile-beige":at("\u30BF\u30A4\u30EB\uFF08\u30D9\u30FC\u30B8\u30E5\uFF09","wall","tile","#e7d5bc"),"tile-sand":at("\u30BF\u30A4\u30EB\uFF08\u7802\u8272\uFF09","wall","tile","#d8c0a6"),"tile-brown":at("\u30BF\u30A4\u30EB\uFF08\u8336\uFF09","wall","tile","#a47b5d"),"tile-grey":at("\u30BF\u30A4\u30EB\uFF08\u30B0\u30EC\u30FC\uFF09","wall","tile","#b8b6af"),"tile-navy":at("\u30BF\u30A4\u30EB\uFF08\u7D3A\uFF09","wall","tile","#49576c"),"siding-white":at("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u767D\uFF09","wall","siding","#f4f3ee"),"siding-sand":at("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7802\u8272\uFF09","wall","siding","#d9ceb7"),"siding-grey":at("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u30B0\u30EC\u30FC\uFF09","wall","siding","#8e9397"),"siding-navy":at("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u7D3A\uFF09","wall","siding","#3e4b5d"),"siding-green":at("\u30B5\u30A4\u30C7\u30A3\u30F3\u30B0\uFF08\u6DF1\u7DD1\uFF09","wall","siding","#4d6455"),"wood-natural":at("\u677F\u5F35\u308A\uFF08\u660E\u308B\u3044\u6728\uFF09","wall","planks","#d3a979"),"wood-brown":at("\u677F\u5F35\u308A\uFF08\u8336\uFF09","wall","planks","#8f6646"),"wood-dark":at("\u677F\u5F35\u308A\uFF08\u713C\u6749\uFF09","wall","planks","#3d342e"),"wood-red":at("\u677F\u5F35\u308A\uFF08\u3079\u3093\u304C\u3089\uFF09","wall","planks","#8d4f3f"),"metal-dark":at("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9ED2\uFF09","wall","metalPanel","#3d4349",{roughness:.45,metalness:.7}),"metal-silver":at("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u9280\uFF09","wall","metalPanel","#c3c8cc",{roughness:.4,metalness:.8}),"metal-white":at("\u91D1\u5C5E\u30D1\u30CD\u30EB\uFF08\u767D\uFF09","wall","metalPanel","#eef0f0",{roughness:.5,metalness:.3}),stone:at("\u77F3\u5F35\u308A","wall","stone"),"wp-white":at("\u58C1\u7D19\uFF08\u767D\uFF09","paper","wallpaper","#f7f5ef"),"wp-ivory":at("\u58C1\u7D19\uFF08\u30A2\u30A4\u30DC\u30EA\u30FC\uFF09","paper","wallpaper","#f2ead9"),"wp-grey":at("\u58C1\u7D19\uFF08\u30B0\u30EC\u30FC\uFF09","paper","wallpaper","#d9dbd9"),"wp-blue":at("\u58C1\u7D19\uFF08\u6C34\u8272\uFF09","paper","wallpaper","#d2dfe9"),"wp-green":at("\u58C1\u7D19\uFF08\u82E5\u8349\uFF09","paper","wallpaper","#d7e3d0"),"wp-pink":at("\u58C1\u7D19\uFF08\u685C\uFF09","paper","wallpaper","#f1dcd8"),"wp-yellow":at("\u58C1\u7D19\uFF08\u305F\u307E\u3054\uFF09","paper","wallpaper","#f4e9bd"),"wp-navy":at("\u58C1\u7D19\uFF08\u7D3A\uFF09","paper","wallpaper","#44516a"),"wp-brown":at("\u58C1\u7D19\uFF08\u8336\uFF09","paper","wallpaper","#8b6f5c"),"wp-stripe":at("\u58C1\u7D19\uFF08\u30B9\u30C8\u30E9\u30A4\u30D7\uFF09","paper","wallpaperStripe"),juraku:at("\u3058\u3085\u3089\u304F\u58C1","paper","plaster","#dccfa9"),"tile-bath":at("\u30BF\u30A4\u30EB\uFF08\u6C34\u8272\uFF09","paper","bathTile","#d4e9ef"),"tile-bath-white":at("\u30BF\u30A4\u30EB\uFF08\u767D\uFF09","paper","bathTile"),"panel-wood":at("\u677F\u58C1","paper","planks","#caa57c"),"floor-maple":at("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30E1\u30FC\u30D7\u30EB\uFF09","floor","floorboards"),"floor-oak":at("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30AA\u30FC\u30AF\uFF09","floor","floorboards","#d9b98f"),"floor-walnut":at("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u30A6\u30A9\u30EB\u30CA\u30C3\u30C8\uFF09","floor","floorboards","#8f6b52"),"floor-dark":at("\u30D5\u30ED\u30FC\u30EA\u30F3\u30B0\uFF08\u3053\u3052\u8336\uFF09","floor","floorboards","#5d4a40"),tatami:at("\u7573","floor","tatami"),"tile-floor":at("\u30BF\u30A4\u30EB\u5E8A\uFF08\u767D\uFF09","floor","bathTile"),"tile-floor-blue":at("\u30BF\u30A4\u30EB\u5E8A\uFF08\u6C34\u8272\uFF09","floor","bathTile","#d4e9ef"),"stone-floor":at("\u77F3\u7573","floor","pavers","#f1ece2"),"genkan-floor":at("\u7384\u95A2\u30BF\u30A4\u30EB","floor","pavers","#b8b2a6"),checker:at("\u5E02\u677E\u6A21\u69D8\u306E\u5E8A","floor","checker"),"carpet-grey":at("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u30B0\u30EC\u30FC\uFF09","floor","carpet","#b4b9bf"),"carpet-blue":at("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u9752\uFF09","floor","carpet","#6f7f93"),"carpet-red":at("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u3048\u3093\u3058\uFF09","floor","carpet","#9a5a56"),"carpet-green":at("\u30AB\u30FC\u30DA\u30C3\u30C8\uFF08\u7DD1\uFF09","floor","carpet","#6f8a72"),"concrete-floor":at("\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\u5E8A","floor","concrete","#d2d0c9"),deck:at("\u30A6\u30C3\u30C9\u30C7\u30C3\u30AD","floor","planks","#b08a62"),"ceil-white":at("\u5929\u4E95\uFF08\u767D\uFF09","ceiling","plaster","#fbfaf6"),"ceil-wood":at("\u677F\u5929\u4E95","ceiling","planks","#c9a880"),"roof-kawara":at("\u74E6\uFF08\u3044\u3076\u3057\u9280\uFF09","roof","kawara","#a7adb4",{roughness:.55,metalness:.2}),"roof-kawara-dark":at("\u74E6\uFF08\u9ED2\uFF09","roof","kawara","#5b6068",{roughness:.6,metalness:.15}),"roof-tile-orange":at("\u6D0B\u74E6\uFF08\u3060\u3044\u3060\u3044\uFF09","roof","kawara","#c7633d",{roughness:.85}),"roof-tile-brown":at("\u6D0B\u74E6\uFF08\u8336\uFF09","roof","kawara","#8b5b45",{roughness:.85}),"roof-tile-green":at("\u6D0B\u74E6\uFF08\u7DD1\uFF09","roof","kawara","#4f6b58",{roughness:.8}),"roof-slate":at("\u30B9\u30EC\u30FC\u30C8","roof","slate","#5a5e63"),"roof-metal":at("\u91D1\u5C5E\u5C4B\u6839\uFF08\u6FC3\u3044\u30B0\u30EC\u30FC\uFF09","roof","roofMetal","#5b5f63",{roughness:.5,metalness:.4}),"roof-metal-green":at("\u91D1\u5C5E\u5C4B\u6839\uFF08\u7DD1\u9752\uFF09","roof","roofMetal","#5f8a7c",{roughness:.55,metalness:.35}),"roof-metal-red":at("\u91D1\u5C5E\u5C4B\u6839\uFF08\u8D64\u3055\u3073\u8272\uFF09","roof","roofMetal","#8e4d3c",{roughness:.6,metalness:.3}),"roof-concrete":at("\u5C4B\u4E0A\uFF08\u30B3\u30F3\u30AF\u30EA\u30FC\u30C8\uFF09","roof","concrete","#9da09b")},$t=(n,t,e,i,s,r={})=>({label:n,door:t,w:e,h:i,s,...r}),vg={"door-entrance":$t("\u7384\u95A2\u30C9\u30A2",!0,.92,2.33,0),"door-oyako":$t("\u89AA\u5B50\u30C9\u30A2",!0,1.24,2.33,0),"door-flat":$t("\u96C6\u5408\u4F4F\u5B85\u306E\u7384\u95A2\u30C9\u30A2\uFF08\u92FC\u88FD\uFF09",!0,.85,2,0),"door-wood":$t("\u6728\u306E\u30C9\u30A2",!0,.78,2,0),"door-white":$t("\u767D\u3044\u30C9\u30A2",!0,.75,2,0),"door-glass":$t("\u30AC\u30E9\u30B9\u30C9\u30A2",!0,.8,2,0,{glass:!0}),"door-steel":$t("\u30B9\u30C1\u30FC\u30EB\u30C9\u30A2",!0,.78,2,0),"door-fold":$t("\u6D74\u5BA4\u306E\u6298\u308C\u6238",!0,.72,2,.05),"door-key":$t("\u9375\u4ED8\u304D\u306E\u30C9\u30A2",!0,.78,2,0,{lock:!0}),"door-slide":$t("\u5F15\u304D\u6238",!0,.8,2,0,{slide:!0}),"door-fusuma":$t("\u3075\u3059\u307E",!0,1.69,1.8,0,{slide:!0}),"door-shoji":$t("\u969C\u5B50",!0,1.69,1.8,0,{slide:!0}),"door-closet":$t("\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u306E\u6298\u308C\u6238",!0,1.6,2,0),"door-double":$t("\u4E21\u958B\u304D\u30C9\u30A2",!0,1.5,2.1,0),"door-auto":$t("\u81EA\u52D5\u30C9\u30A2",!0,1.6,2.3,0,{slide:!0,glass:!0}),"door-terrace":$t("\u6383\u304D\u51FA\u3057\u7A93\uFF08\u51FA\u5165\u308A\u3067\u304D\u308B\uFF09",!0,1.65,2,.03,{slide:!0,glass:!0}),"lift-door":$t("\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u6249",!0,.8,2.1,0,{slide:!0,lift:!0}),"door-platform":$t("\u30DB\u30FC\u30E0\u30C9\u30A2",!0,1.4,2.1,0,{slide:!0,glass:!0,platform:!0}),arch:$t("\u958B\u53E3\uFF08\u30C9\u30A2\u306A\u3057\uFF09",!0,1.2,2,0,{open:!0}),"win-slide":$t("\u5F15\u304D\u9055\u3044\u7A93",!1,1.65,1.1,.9),"win-wide":$t("\u6A2A\u9577\u306E\u7A93",!1,1.65,.9,1.1),"win-full":$t("\u5E8A\u307E\u3067\u306E\u7A93",!1,1.65,1.97,.03),"win-small":$t("\u5C0F\u7A93",!1,.6,.5,1.5),"win-high":$t("\u9AD8\u7A93",!1,.74,.5,1.5),"win-tall":$t("\u7E26\u3059\u3079\u308A\u51FA\u3057\u7A93",!1,.4,1.1,.9),"win-slit":$t("\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.34,1.5,.5),"win-fixed":$t("\u306F\u3081\u6BBA\u3057\u7A93",!1,1,1,1),"win-lattice":$t("\u9762\u683C\u5B50\u3064\u304D\u306E\u7A93",!1,1.19,.9,1.1),"win-shutter":$t("\u3088\u308D\u3044\u6238\u3064\u304D\u306E\u7A93",!1,1,1.2,.8),"win-steel":$t("\u30B9\u30C1\u30FC\u30EB\u30B5\u30C3\u30B7",!1,1.69,1.2,.8),"win-round":$t("\u4E38\u7A93",!1,.8,.8,1.1,{round:!0}),"win-shop":$t("\u30B7\u30E7\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",!1,1.6,2.2,.2),"win-curtain":$t("\u30AB\u30FC\u30C6\u30F3\u30A6\u30A9\u30FC\u30EB",!1,1.7,2.6,.75),"win-ribbon":$t("\u6A2A\u9023\u7A93",!1,1.7,1.5,.9),"win-hood":$t("\u3072\u3055\u3057\u4ED8\u304D\u30B9\u30EA\u30C3\u30C8\u7A93",!1,.5,1.5,.6),"win-block":$t("\u30AC\u30E9\u30B9\u30D6\u30ED\u30C3\u30AF",!1,.8,1.6,.4)};var Rt=(n,t,e,i,s,r={})=>({label:n,group:t,w:e,d:i,h:s,solid:!0,...r}),jh={sofa:Rt("\u30BD\u30D5\u30A1","living",1.5,.72,.78),armchair:Rt("\u3072\u3068\u308A\u639B\u3051\u30BD\u30D5\u30A1","living",.78,.75,.78),"table-low":Rt("\u30ED\u30FC\u30C6\u30FC\u30D6\u30EB","living",.95,.55,.38),tv:Rt("\u30C6\u30EC\u30D3","living",1.3,.38,1.15),shelf:Rt("\u672C\u68DA","living",.9,.3,1.8),cabinet:Rt("\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8","living",.9,.4,.85),rug:Rt("\u30E9\u30B0","living",1.8,1.2,.02,{solid:!1}),plant:Rt("\u89B3\u8449\u690D\u7269","living",.45,.45,1.2),lamp:Rt("\u30D5\u30ED\u30A2\u30E9\u30F3\u30D7","living",.35,.35,1.5),"ceiling-light":Rt("\u5929\u4E95\u306E\u7167\u660E","living",.5,.5,.12,{solid:!1,ceiling:!0}),"table-dining":Rt("\u30C0\u30A4\u30CB\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB","dining",1.4,.8,.72),chair:Rt("\u3044\u3059","dining",.42,.45,.85),kitchen:Rt("\u30AD\u30C3\u30C1\u30F3","dining",1.5,.6,.86),fridge:Rt("\u51B7\u8535\u5EAB","dining",.62,.66,1.76),bed:Rt("\u30D9\u30C3\u30C9","bedroom",1,1.95,.5),"bed-double":Rt("\u30C0\u30D6\u30EB\u30D9\u30C3\u30C9","bedroom",1.5,1.95,.5),desk:Rt("\u673A","bedroom",1.1,.55,.72),wardrobe:Rt("\u6D0B\u670D\u3060\u3093\u3059","bedroom",1,.55,1.9),tansu:Rt("\u305F\u3093\u3059","japanese",.9,.45,1.3),cupboard:Rt("\u98DF\u5668\u68DA","dining",.9,.45,1.85),"mail-boxes":Rt("\u96C6\u5408\u90F5\u4FBF\u53D7\u3051","entrance",1.2,.3,1.3),car:Rt("\u81EA\u52D5\u8ECA","garden",1.48,3.4,1.55),chabudai:Rt("\u3061\u3083\u3076\u53F0","japanese",1,1,.32),zabuton:Rt("\u3056\u3076\u3068\u3093","japanese",.5,.5,.08,{solid:!1}),futon:Rt("\u3075\u3068\u3093","japanese",1,1.9,.14,{solid:!1}),toilet:Rt("\u30C8\u30A4\u30EC","water",.42,.7,.8),bathtub:Rt("\u6D74\u69FD","water",.75,1.4,.56),washbasin:Rt("\u6D17\u9762\u53F0","water",.6,.45,.85),washer:Rt("\u6D17\u6FEF\u6A5F","water",.6,.6,.9),"shoe-box":Rt("\u3052\u305F\u7BB1","entrance",1,.34,.9),boxes:Rt("\u6BB5\u30DC\u30FC\u30EB\u7BB1","entrance",.8,.7,1),rack:Rt("\u30CF\u30F3\u30AC\u30FC\u30E9\u30C3\u30AF","shop",1.3,.4,1.7),counter:Rt("\u30AB\u30A6\u30F3\u30BF\u30FC","shop",1.6,.6,1),mirror:Rt("\u59FF\u898B","shop",.9,.12,1.9),"cafe-table":Rt("\u30AB\u30D5\u30A7\u30C6\u30FC\u30D6\u30EB","shop",.8,.8,.72),stool:Rt("\u30B9\u30C4\u30FC\u30EB","shop",.36,.36,.46),"office-desk":Rt("\u30AA\u30D5\u30A3\u30B9\u30C7\u30B9\u30AF","office",1.2,.62,1.2),"office-chair":Rt("\u30AA\u30D5\u30A3\u30B9\u30C1\u30A7\u30A2","office",.5,.5,.9),bench:Rt("\u30D9\u30F3\u30C1","garden",1.6,.5,.8),planter:Rt("\u30D7\u30E9\u30F3\u30BF\u30FC","garden",.9,.35,.5),hedge:Rt("\u751F\u3051\u57A3","garden",1.6,.5,1.1),fence:Rt("\u30D5\u30A7\u30F3\u30B9","garden",1.6,.08,1),tree:Rt("\u5EAD\u6728","garden",.7,.7,3.2),mailbox:Rt("\u30DD\u30B9\u30C8","garden",.3,.3,1.1),bicycle:Rt("\u81EA\u8EE2\u8ECA","garden",.5,1.7,1),vending:Rt("\u81EA\u52D5\u8CA9\u58F2\u6A5F","garden",1,.7,1.85),"ac-unit":Rt("\u5BA4\u5916\u6A5F","garden",.86,.34,.65),"gate-post":Rt("\u6A5F\u80FD\u9580\u67F1","garden",.3,.16,1.45),lantern:Rt("\u77F3\u706F\u7C60","garden",.5,.5,1.3),"ticket-gate":Rt("\u81EA\u52D5\u6539\u672D\u6A5F","station",.19,1.5,1.03),"ticket-gate-clear":Rt("\u81EA\u52D5\u6539\u672D\u6A5F\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\uFF09","station",.19,1.5,1.03),"ticket-machine":Rt("\u5238\u58F2\u6A5F","station",.85,.5,1.75),"platform-bench":Rt("\u30DB\u30FC\u30E0\u306E\u30D9\u30F3\u30C1","station",1.8,.5,.8),"tactile-line":Rt("\u70B9\u5B57\u30D6\u30ED\u30C3\u30AF\uFF08\u30DB\u30FC\u30E0\uFF09","station",.3,2.4,.01,{solid:!1})};var Qh=new U(0,1,0),$o=new U,Zo=new U,wn=new U,Jo=new U,Pc=new U,qe=class{constructor(){this.parts=new Map,this.matrix=null}part(t){let e=this.parts.get(t);return e||(e={positions:[],normals:[],uvs:[],indices:[]},this.parts.set(t,e)),e}at(t,e,i,s,r){let o=this.matrix,a=new xe().makeRotationY(s).setPosition(t,e,i);return this.matrix=o?o.clone().multiply(a):a,r(this),this.matrix=o,this}face(t,e){this.matrix&&(e=e.map(r=>r.clone().applyMatrix4(this.matrix)));let i=this.part(t);if($o.subVectors(e[1],e[0]),Zo.subVectors(e[2],e[0]),wn.crossVectors($o,Zo),wn.lengthSq()<1e-12)return this;wn.normalize(),Math.abs(wn.y)>.999?(Jo.set(1,0,0),Pc.set(0,0,1)):(Jo.crossVectors(Qh,wn).normalize(),Pc.crossVectors(wn,Jo));let s=i.positions.length/3;for(let r of e)i.positions.push(r.x,r.y,r.z),i.normals.push(wn.x,wn.y,wn.z),i.uvs.push(r.dot(Jo),r.dot(Pc));for(let r=1;r<e.length-1;r++)i.indices.push(s,s+r,s+r+1);return this}quad(t,e,i,s,r,o){return $o.subVectors(i,e),Zo.subVectors(s,e),this.face(t,wn.crossVectors($o,Zo).dot(o)>=0?[e,i,s,r]:[r,s,i,e])}shape(t,e,i,s,r=!0){let o=e.map(([d,p])=>new Ot(d,p)),a=i.map(d=>d.map(([p,g])=>new Ot(p,g))),c=[...o,...a.flat()],l=this.part(t),u=l.positions.length/3,h=new U;for(let d of c)h.set(d.x,s,d.y),this.matrix&&h.applyMatrix4(this.matrix),l.positions.push(h.x,h.y,h.z),l.normals.push(0,r?1:-1,0),l.uvs.push(h.x,h.z);for(let[d,p,g]of Vs.triangulateShape(o,a))(c[p].x-c[d].x)*(c[g].y-c[d].y)-(c[p].y-c[d].y)*(c[g].x-c[d].x)<0===r?l.indices.push(u+d,u+p,u+g):l.indices.push(u+d,u+g,u+p);return this}box(t,e,i,s,r,o,a,c=0){let l=Math.cos(c),u=Math.sin(c),h=(p,g,x)=>new U(e+p*r/2*l+x*a/2*u,i+g*o/2,s-p*r/2*u+x*a/2*l),d=[-1,1].map(p=>[-1,1].map(g=>[-1,1].map(x=>h(p,g,x))));return this.face(t,[d[1][0][0],d[1][1][0],d[1][1][1],d[1][0][1]]),this.face(t,[d[0][0][1],d[0][1][1],d[0][1][0],d[0][0][0]]),this.face(t,[d[0][1][0],d[0][1][1],d[1][1][1],d[1][1][0]]),this.face(t,[d[0][0][1],d[0][0][0],d[1][0][0],d[1][0][1]]),this.face(t,[d[1][0][1],d[1][1][1],d[0][1][1],d[0][0][1]]),this.face(t,[d[0][0][0],d[0][1][0],d[1][1][0],d[1][0][0]]),this}bar(t,e,i,s,r=s){let o=i.clone().sub(e),a=o.length();if(a<1e-5)return this;o.divideScalar(a);let c=new U().crossVectors(o,Qh);c.lengthSq()<1e-8&&c.set(1,0,0),c.normalize().multiplyScalar(s/2);let l=new U().crossVectors(c,o).normalize().multiplyScalar(r/2),u=p=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,x])=>p.clone().addScaledVector(c,g).addScaledVector(l,x)),h=u(e),d=u(i);for(let p=0;p<4;p++){let g=(p+1)%4;this.quad(t,h[p],h[g],d[g],d[p],h[p].clone().add(h[g]).multiplyScalar(.5).sub(e))}return this.quad(t,h[0],h[1],h[2],h[3],o.clone().negate()),this.quad(t,d[0],d[1],d[2],d[3],o),this}slab(t,e,i,s,r,o){return this.face(t,[new U(e,o,i),new U(e,o,r),new U(s,o,r),new U(s,o,i)]),this}cylinder(t,e,i,s,r,o,a=10,c=r){let l=(d,p)=>Array.from({length:a},(g,x)=>{let m=x/a*Math.PI*2;return new U(e+Math.cos(m)*d,p,s+Math.sin(m)*d)}),u=l(r,i),h=l(c,i+o);for(let d=0;d<a;d++){let p=(d+1)%a;this.face(t,[u[d],h[d],h[p],u[p]])}return c>.001&&this.face(t,[...h].reverse()),this}get empty(){return[...this.parts.values()].every(t=>!t.indices.length)}build(t,{cast:e=!0,receive:i=!0,where:s=""}={}){let r=[];for(let[o,a]of this.parts){if(!a.indices.length)continue;let c=Lg(o,s),l=new on;l.setAttribute("position",new We(a.positions,3)),l.setAttribute("normal",new We(a.normals,3)),l.setAttribute("uv",new We(a.uvs,2)),l.setIndex(a.indices);let u=new Ce(l,c);u.castShadow=e&&!c.transparent,u.receiveShadow=i,t.add(u),r.push(u)}return r}},Uv=new je({transparent:!0,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`});function Ti(n){n.traverse(t=>{(t.isMesh||t.isLine||t.isSprite)&&(t.geometry?.dispose(),t.userData.ownMaterial&&(t.material.map?.dispose(),t.material.dispose()))}),n.clear()}function tu(n){let t=document.createElement("canvas");return t.width=n,t.height=n,t}function Ko(n,t,e,i,s){let r=Math.imul((n%e+e)%e,374761393)^Math.imul((t%i+i)%i,668265263)^Math.imul(s+1,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}var Dc=new Map;function wg(n,t,e,i,s){let r=`${n}|${t}|${e}|${i}|${s}`;if(Dc.has(r))return Dc.get(r);let o=new Float32Array(n*n),a=1,c=0;for(let l=0;l<i;l++){let u=Math.max(1,Math.round(t*2**l)),h=Math.max(1,Math.round(e*2**l));for(let d=0;d<n;d++){let p=d/n*h,g=Math.floor(p),x=p-g,m=x*x*(3-2*x);for(let f=0;f<n;f++){let w=f/n*u,M=Math.floor(w),_=w-M,R=_*_*(3-2*_),T=Ko(M,g,u,h,s+l*7),E=Ko(M+1,g,u,h,s+l*7),C=Ko(M,g+1,u,h,s+l*7),S=Ko(M+1,g+1,u,h,s+l*7);o[d*n+f]+=(T+(E-T)*R+(C-T)*m+(T-E-C+S)*R*m)*a}}c+=a,a*=.5}for(let l=0;l<o.length;l++)o[l]/=c;return Dc.set(r,o),o}var eu=n=>{let t=Math.round(Math.min(1,Math.max(0,n))*255);return`rgb(${t},${t},${t})`},fs=([n,t,e],i=0)=>`rgb(${Math.round(n+i)},${Math.round(t+i)},${Math.round(e+i)})`,Uc=class{constructor(t){this.size=t,this.colour=tu(t).getContext("2d",{willReadFrequently:!0}),this.height=tu(t).getContext("2d",{willReadFrequently:!0}),this.passes=[],this.random=1}roll(){return this.random++,Ic(this.random,this.size,7)}fill(t,e=.5){return this.colour.fillStyle=Array.isArray(t)?fs(t):t,this.colour.fillRect(0,0,this.size,this.size),this.height.fillStyle=eu(e),this.height.fillRect(0,0,this.size,this.size),this}both(t,e,i){for(let[s,r]of[[this.colour,t],[this.height,e==null?null:eu(e)]])if(r!=null){s.fillStyle=r,s.strokeStyle=r;for(let o of[0,-this.size,this.size])for(let a of[0,-this.size,this.size])s.save(),s.translate(o,a),i(s),s.restore()}return this}rect(t,e,i,s,r,o){return this.both(Array.isArray(r)?fs(r):r,o,a=>a.fillRect(t,e,i,s))}line(t,e,i,s,r,o,a){return this.both(o,a,c=>{c.lineWidth=r,c.beginPath(),c.moveTo(t,e),c.lineTo(i,s),c.stroke()})}dot(t,e,i,s,r){return this.both(s,r,o=>{o.beginPath(),o.arc(t,e,i,0,Math.PI*2),o.fill()})}speckle(t,[e,i],s,r){for(let o=0;o<t;o++)this.dot(this.roll()*this.size,this.roll()*this.size,e+this.roll()*(i-e),s[Math.floor(this.roll()*s.length)],typeof r=="function"?r(this.roll()):r);return this}streaks(t,e,{width:i=4,length:s=.6}={}){for(let r=0;r<t;r++){let o=this.roll()*this.size,a=this.roll()*this.size,c=(.2+this.roll()*s)*this.size,l=1+this.roll()*i;for(let u of[0,-this.size,this.size])for(let h of[0,-this.size]){let d=this.colour.createLinearGradient(0,a+h,0,a+h+c);d.addColorStop(0,e),d.addColorStop(1,"rgba(0,0,0,0)"),this.colour.fillStyle=d,this.colour.fillRect(o+u,a+h,l,c)}}return this}cracks(t,e,{width:i=1.2,level:s=.15,steps:r=26}={}){for(let o=0;o<t;o++){let a=this.roll()*this.size,c=this.roll()*this.size,l=this.roll()*Math.PI*2;for(let u=0;u<r;u++){l+=(this.roll()-.5)*1.1;let h=a+Math.cos(l)*this.size*.022,d=c+Math.sin(l)*this.size*.022;this.line(a,c,h,d,i*(.5+this.roll()),e,s),a=h,c=d}}return this}noise({cells:t=8,cellsY:e=t,octaves:i=3,colour:s=0,height:r=0,seed:o=1,tint:a=[1,1,1],ridge:c=!1}){return this.passes.push({cells:t,cellsY:e,octaves:i,colour:s,height:r,seed:o,tint:a,ridge:c}),this}finish({metres:t,depth:e=.002,rough:i=[.9,.9],shade:s=.7}){let{size:r}=this,o=this.colour.getImageData(0,0,r,r),a=this.height.getImageData(0,0,r,r).data,c=new Float32Array(r*r);for(let x=0;x<c.length;x++)c[x]=a[x*4]/255;for(let x of this.passes){let m=wg(r,x.cells,x.cellsY,x.octaves,x.seed%3);for(let f=0;f<c.length;f++){let w=(x.ridge?1-Math.abs(m[f]*2-1):m[f])-.5;x.colour&&(o.data[f*4]+=w*x.colour*x.tint[0],o.data[f*4+1]+=w*x.colour*x.tint[1],o.data[f*4+2]+=w*x.colour*x.tint[2]),x.height&&(c[f]=Math.min(1,Math.max(0,c[f]+w*x.height)))}}this.colour.putImageData(o,0,0);let l=e*r/t*1.6,u=new Uint8Array(r*r*4),h=new Uint8Array(r*r*4);for(let x=0;x<r;x++){let m=(x-1+r)%r*r,f=(x+1)%r*r,w=(r-1-x)*r;for(let M=0;M<r;M++){let _=c[x*r+M],R=(c[x*r+(M+1)%r]-c[x*r+(M-1+r)%r])/2*l,T=(c[f+M]-c[m+M])/2*l,E=Math.hypot(R,T,1),C=(w+M)*4;u[C]=(-R/E*.5+.5)*255,u[C+1]=(T/E*.5+.5)*255,u[C+2]=(1/E*.5+.5)*255,u[C+3]=_*255,h[C]=(s+(1-s)*_)*255,h[C+1]=(i[0]+(i[1]-i[0])*_)*255,h[C+2]=255,h[C+3]=255}}let d=x=>(x.wrapS=ui,x.wrapT=ui,x.repeat.set(1/t,1/t),x.anisotropy=Eg,x),p=x=>{let m=new Zn(x,r,r,Oe);return m.generateMipmaps=!0,m.minFilter=bn,m.magFilter=Ke,m.needsUpdate=!0,d(m)},g=d(new pi(this.colour.canvas));return g.colorSpace=be,{map:g,normalMap:p(u),surfaceMap:p(h),metres:t,depth:e}}};function Ei(n,t,e,{joint:i,jointLevel:s=.2,gap:r=2,stagger:o=!0,palette:a,tone:c=16,level:l=.85,bevel:u=0}){let{size:h}=n;n.fill(i,s);let d=h/t,p=h/e;for(let g=0;g<e;g++){let x=o&&g%2?d/2:0;for(let m=0;m<t;m++){let f=a[Math.floor(n.roll()*a.length)],w=(n.roll()-.5)*c,M=m*d+x+r/2,_=g*p+r/2;n.rect(M,_,d-r,p-r,fs(f,w),l+(n.roll()-.5)*.12),u&&(n.rect(M,_,d-r,u,"rgba(255,255,255,0.16)",null),n.rect(M,_+p-r-u,d-r,u,"rgba(0,0,0,0.2)",l-.25))}}}var nu={mortar:{size:512,metres:2.4,depth:.003,rough:[.97,.88],paint(n){n.fill("#ece9e0").streaks(20,"rgba(96,92,78,0.10)").streaks(5,"rgba(60,72,60,0.08)",{width:9,length:.4}).cracks(2,"rgba(70,66,58,0.3)",{width:.8}).noise({cells:5,octaves:3,colour:12,height:.12,seed:2}).noise({cells:110,octaves:2,colour:10,height:.45,seed:3})}},stucco:{size:512,metres:2,depth:.005,rough:[.97,.86],paint(n){n.fill("#f1eee7").noise({cells:9,octaves:4,colour:12,height:.55,seed:4,ridge:!0}).noise({cells:120,octaves:1,colour:6,height:.16,seed:5}).noise({cells:3,octaves:2,colour:8,seed:6})}},plaster:{size:256,metres:3,depth:.001,rough:[.9,.8],paint(n){n.fill("#f2f1ed").noise({cells:5,octaves:3,colour:7,height:.2,seed:7}).noise({cells:90,octaves:1,colour:4,height:.1,seed:8})}},concrete:{size:512,metres:3.6,depth:.004,rough:[.97,.8],relief:!0,paint(n){let{size:t}=n;n.fill("#aaa8a1").streaks(16,"rgba(70,72,70,0.14)",{width:6,length:.7});for(let e=0;e<4;e++)n.rect(e*t/4-1.5,0,3,t,"rgba(52,52,50,0.5)",.12);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(52,52,50,0.5)",.12);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.4,"rgba(36,36,36,0.75)",0);n.speckle(260,[.5,1.6],["rgba(40,40,40,0.4)","rgba(70,70,68,0.35)"],.1).noise({cells:5,octaves:4,colour:30,height:.08,seed:9}).noise({cells:150,octaves:1,colour:11,height:.22,seed:10})}},concreteStained:{size:512,metres:3.6,depth:.005,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#878681").streaks(54,"rgba(26,28,26,0.26)",{width:9,length:.75}).streaks(9,"rgba(120,70,35,0.26)",{width:5,length:.5}).streaks(10,"rgba(225,225,215,0.2)",{width:7,length:.35});for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(28,28,28,0.6)",.08);for(let e=0;e<2;e++)n.rect(0,e*t/2-2,t,4,"rgba(28,28,28,0.6)",.08);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.dot(e*t/4+t/8,i*t/4+t/8,3.8,"rgba(18,18,18,0.8)",0);n.cracks(5,"rgba(24,24,24,0.55)").speckle(380,[.6,2.2],["rgba(30,30,30,0.45)","rgba(150,150,140,0.3)"],.1).noise({cells:4,octaves:4,colour:44,height:.1,seed:11}).noise({cells:150,octaves:1,colour:14,height:.26,seed:12})}},brick:{size:512,metres:1.76,depth:.009,rough:[.98,.86],relief:!0,paint(n){Ei(n,8,16,{joint:"#b6b0a4",gap:4,tone:26,bevel:2,palette:[[152,82,62],[166,96,70],[138,72,56],[176,108,84],[146,90,72]]}),n.speckle(500,[.6,1.8],["rgba(60,30,24,0.3)","rgba(210,150,120,0.25)"],null).noise({cells:70,octaves:2,colour:16,height:.2,seed:13}).noise({cells:4,octaves:3,colour:16,seed:14})}},brickWhite:{size:512,metres:1.76,depth:.008,rough:[.97,.8],relief:!0,paint(n){Ei(n,8,16,{joint:"#cfcbc2",gap:4,tone:10,bevel:2,palette:[[240,238,232],[232,230,224],[244,242,238],[226,222,214]]}),n.noise({cells:70,octaves:2,colour:9,height:.2,seed:15}).noise({cells:4,octaves:3,colour:10,seed:16})}},tile:{size:512,metres:.9,depth:.004,rough:[.92,.28],relief:!0,paint(n){Ei(n,9,18,{joint:"#8f8a80",jointLevel:.25,gap:3.4,tone:12,bevel:1.5,palette:[[244,244,240],[236,236,232],[248,248,246],[230,230,226]]}),n.noise({cells:3,octaves:3,colour:8,seed:17}).noise({cells:90,octaves:1,colour:4,height:.05,seed:18})}},siding:{size:512,metres:1.44,depth:.007,rough:[.92,.72],relief:!0,paint(n){let{size:t}=n;n.fill("#efefeb");for(let e=0;e<8;e++){let i=e*t/8;for(let s=0;s<16;s++)n.rect(0,i+s*t/128,t,t/128+.5,null,.35+s/15*.55);n.rect(0,i+t/8-3,t,3,"rgba(0,0,0,0.3)",.05),n.rect(0,i,t,2,"rgba(255,255,255,0.35)",null)}n.noise({cells:5,cellsY:90,octaves:2,colour:9,height:.07,seed:19})}},planks:{size:512,metres:1.2,depth:.005,rough:[.95,.78],relief:!0,paint(n){let{size:t}=n;n.fill("#e9d9c3");for(let e=0;e<8;e++){let i=e*t/8;if(n.rect(i,0,t/8,t,`rgba(${n.roll()>.5?"255,244,224":"70,46,24"},${.05+n.roll()*.13})`,.72+n.roll()*.14),n.rect(i-1.5,0,3,t,"rgba(34,22,12,0.75)",.05),n.roll()>.6){let s=i+t/16+(n.roll()-.5)*t/20,r=n.roll()*t;for(let o=4;o>0;o--)n.dot(s,r,o*2.4,`rgba(70,44,24,${.12+(4-o)*.09})`,.55)}}n.noise({cells:90,cellsY:3,octaves:2,colour:30,height:.16,seed:20,tint:[1,.86,.66]}).noise({cells:22,cellsY:2,octaves:2,colour:18,height:.08,seed:21,ridge:!0,tint:[1,.86,.66]})}},wood:{size:512,metres:1.1,depth:.0012,rough:[.82,.6],paint(n){n.fill("#96704e").noise({cells:70,cellsY:2,octaves:3,colour:34,height:.3,seed:22,tint:[1,.82,.6]}).noise({cells:14,cellsY:1,octaves:2,colour:22,seed:23,ridge:!0,tint:[1,.82,.6]}).noise({cells:3,octaves:2,colour:14,seed:24})}},metalPanel:{size:512,metres:2.4,depth:.004,rough:[.7,.42],paint(n){let{size:t}=n;n.fill("#e8e8e8",.8);for(let e=0;e<4;e++)n.rect(e*t/4-2,0,4,t,"rgba(0,0,0,0.5)",.1),n.rect(e*t/4+2,0,2,t,"rgba(255,255,255,0.35)",null);for(let e=0;e<2;e++)n.rect(0,e*t/2-1.5,t,3,"rgba(0,0,0,0.42)",.15);n.noise({cells:3,octaves:3,colour:9,height:.05,seed:25}).noise({cells:2,cellsY:60,octaves:1,colour:5,seed:26})}},stone:{size:512,metres:2,depth:.014,rough:[.98,.84],relief:!0,paint(n){let{size:t}=n;n.fill("#77736b",.15);let e=0;for(let i of[.22,.3,.2,.28]){let s=n.roll()*40,r=s+t;for(;s<r-1;){let o=Math.min(r-s,t*(.14+n.roll()*.2)),a=(n.roll()-.5)*34,c=n.roll()>.6?[176,168,150]:[164,162,156];n.rect(s+2.5,e*t+2.5,o-5,i*t-5,fs(c,a),.7+n.roll()*.25),s+=o}e+=i}n.noise({cells:26,octaves:4,colour:26,height:.4,seed:27}).noise({cells:4,octaves:2,colour:12,seed:28})}},wallpaper:{size:256,metres:.8,depth:6e-4,rough:[.95,.88],paint(n){n.fill("#f4f2ec").noise({cells:128,cellsY:20,octaves:1,colour:5,height:.5,seed:29}).noise({cells:20,cellsY:128,octaves:1,colour:5,height:.5,seed:30}).noise({cells:3,octaves:2,colour:4,seed:31})}},wallpaperStripe:{size:256,metres:.64,depth:6e-4,rough:[.95,.88],paint(n){let{size:t}=n;n.fill("#f3efe4");for(let e=0;e<4;e++)n.rect(e*t/4,0,t/8,t,"#cfdbe3",.55),n.rect(e*t/4+t/8-2,0,2,t,"#b9982f",.6);n.noise({cells:128,cellsY:20,octaves:1,colour:5,height:.4,seed:32})}},floorboards:{size:512,metres:1.44,depth:.0016,rough:[.7,.36],paint(n){let{size:t}=n;n.fill("#e3c79d",.8);for(let e=0;e<12;e++){let i=e*t/12,s=n.roll()*t;for(let r=0;r<3;r++){let o=t*(.22+n.roll()*.3);n.rect(i,s,t/12,o,`rgba(${n.roll()>.5?"255,240,214":"96,60,28"},${.04+n.roll()*.16})`,null),n.rect(i,s,t/12,1.6,"rgba(60,36,18,0.6)",.2),s+=o}n.rect(i-.8,0,1.6,t,"rgba(60,36,18,0.62)",.15)}n.noise({cells:110,cellsY:3,octaves:2,colour:22,height:.12,seed:33,tint:[1,.84,.62]}).noise({cells:26,cellsY:2,octaves:2,colour:12,seed:34,ridge:!0,tint:[1,.84,.62]})}},tatami:{size:512,metres:1.82,depth:.0015,rough:[.95,.82],paint(n){let{size:t}=n;n.fill("#b9bb86");for(let e=0;e<t;e+=3)n.rect(0,e,t,1.4,`rgba(86,96,48,${.1+n.roll()*.14})`,.25);for(let e of[0,t/2])n.rect(e-7,0,14,t,"#2f3a2c",.9);n.noise({cells:4,octaves:3,colour:10,seed:35,tint:[1,1,.5]}).noise({cells:160,cellsY:6,octaves:1,colour:8,height:.2,seed:36})}},bathTile:{size:256,metres:.8,depth:.0025,rough:[.9,.14],paint(n){Ei(n,8,8,{joint:"#a9b0b2",jointLevel:.25,gap:3,stagger:!1,tone:6,bevel:1.5,palette:[[246,248,248],[240,243,244],[250,251,251]]})}},checker:{size:256,metres:1.2,depth:.002,rough:[.9,.22],paint(n){let{size:t}=n;n.fill("#8a8a88",.3);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.rect(i*t/4+1,e*t/4+1,t/4-2,t/4-2,(e+i)%2?"#3f4042":"#f1eee7",.85);n.noise({cells:6,octaves:3,colour:8,seed:37})}},pavers:{size:512,metres:1.6,depth:.007,rough:[.98,.82],relief:!0,paint(n){Ei(n,4,4,{joint:"#7f7a70",jointLevel:.15,gap:6,stagger:!1,tone:16,bevel:3,palette:[[226,220,206],[214,208,194],[234,230,218],[206,200,186]]}),n.noise({cells:40,octaves:3,colour:16,height:.22,seed:38}).noise({cells:3,octaves:3,colour:14,seed:39})}},carpet:{size:256,metres:1,depth:.003,rough:[1,.96],paint(n){n.fill("#cfcfcf").noise({cells:128,octaves:1,colour:40,height:.7,seed:40}).noise({cells:5,octaves:3,colour:10,seed:41})}},kawara:{size:512,metres:1.5,depth:.03,rough:[.8,.5],relief:!0,paint(n){let{size:t}=n,e=6,i=5;n.fill("#cfcfcf");for(let s=0;s<i;s++){let r=s*t/i;for(let o=0;o<e;o++){let a=o*t/e,c=(n.roll()-.5)*22;for(let l=0;l<16;l++){let u=Math.sin(l/15*Math.PI*1.25-.25);n.rect(a+l*t/e/16,r,t/e/16+.6,t/i,fs([205,205,205],c+u*26),.25+Math.max(0,u)*.6)}n.rect(a,r+t/i-5,t/e,5,"rgba(0,0,0,0.4)",.02),n.rect(a,r,t/e,3,"rgba(255,255,255,0.22)",null)}}n.noise({cells:60,octaves:2,colour:10,height:.05,seed:42}).noise({cells:3,octaves:2,colour:12,seed:43})}},slate:{size:512,metres:1.2,depth:.008,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#b9b9b9",.5);for(let e=0;e<4;e++)for(let i=-1;i<6;i++){let s=i*t/6+(e%2?t/12:0),r=e*t/4,o=(n.roll()-.5)*30;for(let a=0;a<8;a++)n.rect(s+1,r+a*t/32,t/6-2,t/32+.5,fs([196,196,196],o),.3+a/7*.6);n.rect(s,r+t/4-4,t/6,4,"rgba(0,0,0,0.42)",.04),n.rect(s-1,r,2,t/4,"rgba(0,0,0,0.3)",.1)}n.noise({cells:50,octaves:3,colour:14,height:.08,seed:44})}},roofMetal:{size:256,metres:.9,depth:.022,rough:[.62,.42],relief:!0,paint(n){let{size:t}=n;n.fill("#d6d6d6",.3);for(let e=0;e<2;e++){let i=e*t/2;n.rect(i-6,0,12,t,"rgba(0,0,0,0.22)",.65),n.rect(i-2.5,0,5,t,"rgba(255,255,255,0.4)",1)}n.noise({cells:2,cellsY:40,octaves:1,colour:6,seed:45}).noise({cells:4,octaves:3,colour:8,height:.04,seed:46})}},asphalt:{size:512,metres:4,depth:.004,rough:[.97,.86],paint(n){n.fill("#47494d").speckle(1500,[.5,1.5],["rgba(170,170,170,0.5)","rgba(14,14,16,0.5)","rgba(120,116,108,0.45)"],t=>.3+t*.6).cracks(4,"rgba(16,16,18,0.7)",{width:1.6,level:.05,steps:34}).noise({cells:4,octaves:4,colour:18,height:.08,seed:47}).noise({cells:170,octaves:1,colour:16,height:.4,seed:48})}},sidewalk:{size:512,metres:2.4,depth:.005,rough:[.97,.84],relief:!0,paint(n){Ei(n,6,6,{joint:"#6d6b66",jointLevel:.15,gap:4,stagger:!1,tone:14,bevel:2,palette:[[190,188,180],[180,178,170],[198,196,190],[172,170,162]]}),n.speckle(300,[.5,1.6],["rgba(60,60,56,0.3)","rgba(230,230,224,0.25)"],null).noise({cells:60,octaves:2,colour:14,height:.2,seed:49}).noise({cells:3,octaves:3,colour:16,seed:50})}},grass:{size:512,metres:6,depth:.02,rough:[1,.92],paint(n){let{size:t}=n;n.fill("#587040");for(let e=0;e<5200;e++){let i=n.roll(),s=n.roll()*t,r=n.roll()*t;n.line(s,r,s+(n.roll()-.5)*6,r-3-n.roll()*6,1,i>.6?"rgba(134,156,86,0.5)":i>.25?"rgba(52,82,40,0.55)":"rgba(126,124,70,0.4)",.4+i*.5)}n.noise({cells:5,octaves:4,colour:34,height:.2,seed:51,tint:[.9,1,.5]}).noise({cells:26,octaves:2,colour:16,seed:52,tint:[1,1,.3]})}},dirt:{size:256,metres:5,depth:.01,rough:[1,.94],paint(n){n.fill("#88765c").speckle(260,[.6,2.4],["rgba(60,50,40,0.4)","rgba(190,176,150,0.35)"],t=>t).noise({cells:4,octaves:4,colour:30,height:.3,seed:53}).noise({cells:90,octaves:1,colour:14,height:.3,seed:54})}},gravel:{size:256,metres:1.5,depth:.012,rough:[1,.9],relief:!0,paint(n){n.fill("#77746c",.1).speckle(900,[2,5],["#b9b5aa","#9e9a90","#c9c5ba","#8a877e","#a8a094"],t=>.5+t*.5).noise({cells:80,octaves:1,colour:12,height:.1,seed:55})}},cblock:{size:512,metres:1.6,depth:.006,rough:[.98,.9],relief:!0,paint(n){Ei(n,4,8,{joint:"#a7a59d",jointLevel:.25,gap:3,tone:12,bevel:1,level:.86,palette:[[176,174,167],[168,167,161],[184,182,175],[162,161,156],[172,168,160]]}),n.speckle(900,[.4,1.4],["rgba(70,70,66,0.35)","rgba(210,208,200,0.25)"],.7).noise({cells:40,octaves:2,colour:12,height:.2,seed:61}).noise({cells:3,octaves:3,colour:14,seed:62,tint:[1,1,.9]})}},hedge:{size:512,metres:1.2,depth:.05,rough:[.95,.7],relief:!0,paint(n){let{size:t}=n;n.fill("#22381c",.15);let e=[[78,112,52],[92,128,60],[64,98,44],[104,136,66],[58,86,40],[118,146,70]];for(let i=0;i<3400;i++){let s=n.roll()*t,r=n.roll()*t,o=5+n.roll()*7,a=n.roll()*Math.PI,[c,l,u]=e[Math.floor(n.roll()*e.length)],h=.8+n.roll()*.4;n.both(`rgb(${Math.round(c*h)},${Math.round(l*h)},${Math.round(u*h)})`,.45+n.roll()*.55,d=>{d.beginPath(),d.ellipse(s,r,o,o*.45,a,0,Math.PI*2),d.fill()})}n.noise({cells:6,octaves:3,colour:26,height:.35,seed:63}).noise({cells:2,octaves:2,colour:14,seed:64,tint:[1,1,.6]})}},bark:{size:256,metres:1,depth:.03,rough:[1,.9],relief:!0,paint(n){n.fill("#6f5d4b").noise({cells:16,cellsY:2,octaves:3,colour:60,height:.9,seed:56,ridge:!0}).noise({cells:60,cellsY:20,octaves:2,colour:20,height:.15,seed:57}).noise({cells:3,octaves:2,colour:16,seed:58,tint:[.6,1,.6]})}}},Lc=new Map,Eg=4,nr=1;function Tg(n){if(!Lc.has(n)){let t=nu[n],e=new Uc(t.size);t.paint(e),Lc.set(n,{...e.finish(t),relief:!!t.relief})}return Lc.get(n)}var Ag={value:new U(1.32,1.27,1.17)},Rg=`
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
`,Cg=`
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
`,Ig=`
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
`;function Pg(n){n.userData.parallax={value:0},n.onBeforeCompile=t=>{t.uniforms.parallaxDepth=n.userData.parallax,t.uniforms.machiRoom=Ag,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMachiWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>
${Rg}`).replace("#include <map_fragment>",`vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${kt.map_fragment.replaceAll("vMapUv","( vMapUv + parallaxUv )")}
        ${Cg}`).replace("#include <roughnessmap_fragment>",`${kt.roughnessmap_fragment.replaceAll("vRoughnessMapUv","( vRoughnessMapUv + parallaxUv )")}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`).replace("#include <normal_fragment_maps>",kt.normal_fragment_maps.replaceAll("texture2D( normalMap, vNormalMapUv )","texture2D( normalMap, vNormalMapUv + parallaxUv )")).replace("#include <lights_fragment_end>",`${Ig}
#include <lights_fragment_end>`).replace("#include <aomap_fragment>",kt.aomap_fragment.replaceAll("vAoMapUv","( vAoMapUv + parallaxUv )"))},n.customProgramCacheKey=()=>"machi-surface"}function Dg(n){let{set:t,wants:e,recipe:i}=n.userData;if(!i)return;let s=(r,o)=>{o?n.defines[r]="":delete n.defines[r]};if(s("MACHI_WEAR",nr>=1),t){n.normalMap=nr>=1?t.normalMap:null,n.roughnessMap=nr>=1?t.surfaceMap:null,n.aoMap=nr>=1?t.surfaceMap:null;let r=nr>=2&&t.relief&&e;s("MACHI_PARALLAX",r),n.userData.parallax.value=r?t.depth/t.metres*1.5:0}n.needsUpdate=!0}var ps=new Map;function de(n,t="#ffffff",{roughness:e,metalness:i=0,twoSided:s=!1,relief:r=!0,where:o=""}={}){let a=`${n}|${t}|${e}|${i}|${s}|${r}|${o}`;if(!ps.has(a)){let c=Object.hasOwn(nu,n),l={color:c?t:n,roughness:e??(c?1:.85),metalness:i};s&&(l.side=Ve);let u=new vn(l);u.userData={recipe:[n,t,{roughness:e,metalness:i,twoSided:s,relief:r}],wants:r},c&&(u.userData.set=Tg(n),u.map=u.userData.set.map,u.aoMapIntensity=.85),o==="out"&&(u.defines.MACHI_OUTDOOR=""),o==="in"&&(u.defines.MACHI_INDOOR=""),Pg(u),Dg(u),ps.set(a,u)}return ps.get(a)}function Lg(n,t){let e=n.userData?.recipe;return!e||!t?n:de(e[0],e[1],{...e[2],where:t})}var jo=(n,t=1.6)=>{let e=`glow|${n}|${t}`;return ps.has(e)||ps.set(e,new vn({color:n,emissive:n,emissiveIntensity:t,roughness:.6})),ps.get(e)};var Kt={WATER:0,RIVERBED:1,FOREST:2,GREEN:3,FIELD:4,PADDY:5,PARK:6,LOW:7,DENSE:8,MID:9,HIGH:10,COMMERCIAL:11,INDUSTRIAL:12,PUBLIC:13},Ug={COLLECTOR:2,ARTERIAL:3,TRUNK:4},Ng={[Kt.WATER]:"#5f8fa8",[Kt.RIVERBED]:"#93ad6c",[Kt.FOREST]:"#4f6b3a",[Kt.GREEN]:"#6d8a4a",[Kt.FIELD]:"#a08a5c",[Kt.PADDY]:"#8fa25a",[Kt.PARK]:"#79984f",[Kt.LOW]:"#8f9a72",[Kt.DENSE]:"#9a9584",[Kt.MID]:"#9a9a8c",[Kt.HIGH]:"#a2a29a",[Kt.COMMERCIAL]:"#a6a39b",[Kt.INDUSTRIAL]:"#9e9c94",[Kt.PUBLIC]:"#b39f7c"},Qo=[];for(let[n,t]of Object.entries(Ng))Qo[n]=new Xt(t);var Og={[Kt.LOW]:2.9,[Kt.DENSE]:2.8,[Kt.MID]:2.95,[Kt.HIGH]:2.95,[Kt.COMMERCIAL]:3.4,[Kt.INDUSTRIAL]:5.5,[Kt.PUBLIC]:3.8},iu={[Kt.LOW]:[["siding","#f1ece2"],["mortar","#e9e2d3"],["siding","#d9d5cc"],["mortar","#cfc5b3"],["siding","#b8b2a6"]],[Kt.DENSE]:[["mortar","#ddd5c4"],["planks","#8a7258"],["mortar","#c9c0ae"],["siding","#cfcac0"]],[Kt.MID]:[["concrete","#e3e0d8"],["tile","#d8d2c6"],["mortar","#ece7dc"]],[Kt.HIGH]:[["concrete","#dcdad4"],["tile","#cfccc4"]],[Kt.COMMERCIAL]:[["tile","#d6d0c8"],["concrete","#cfcbc4"],["mortar","#e2dbd0"]],[Kt.INDUSTRIAL]:[["metalPanel","#b9c0c6"],["metalPanel","#a7b0b5"]],[Kt.PUBLIC]:[["concrete","#eeece6"]]},Nc=[["kawara","#6e7378"],["kawara","#4f565c"],["slate","#6a5446"],["slate","#4d5a66"],["roofMetal","#7c6a5b"]],Oc=(n,t,e)=>Math.min(e,Math.max(t,n)),su=null;function ru(){let n=new Se;n.name="region";let t=null;function e(p,g,x){let m=Oc((g-p.box.x0)/p.step,0,p.width-1),f=Oc((x-p.box.z0)/p.step,0,p.depth-1),w=Math.min(p.width-2,Math.floor(m)),M=Math.min(p.depth-2,Math.floor(f)),_=m-w,R=f-M,T=p.heights,E=w+M*p.width,C=T[E]+(T[E+1]-T[E])*_,S=T[E+p.width]+(T[E+p.width+1]-T[E+p.width])*_;return C+(S-C)*R}function i(p,g){let{width:x,depth:m,step:f}=p,w=new Uint32Array((x-1)*(m-1)*6),M=0;for(let _=0;_<m-1;_++){let R=p.box.z0+_*f,T=g&&R>=g.z0&&R+f<=g.z1;for(let E=0;E<x-1;E++){if(T){let L=p.box.x0+E*f;if(L>=g.x0&&L+f<=g.x1)continue}let C=E+_*x,S=C+1,v=C+x,P=v+1;w[M++]=C,w[M++]=v,w[M++]=S,w[M++]=S,w[M++]=v,w[M++]=P}}return new Ie(w.subarray(0,M),1)}function s(p,g,x){let{width:m,depth:f,step:w,heights:M,use:_,water:R}=p,T=new Float32Array(m*f*3),E=new Float32Array(m*f*3);for(let v=0;v<f;v++)for(let P=0;P<m;P++){let L=P+v*m;T[L*3]=p.box.x0+P*w-g[0],T[L*3+1]=M[L]-x,T[L*3+2]=p.box.z0+v*w-g[1];let N=R[L]?Qo[Kt.WATER]:Qo[_[L]]??Qo[Kt.LOW];E[L*3]=N.r,E[L*3+1]=N.g,E[L*3+2]=N.b}let C=new on;C.setAttribute("position",new Ie(T,3)),C.setAttribute("color",new Ie(E,3)),C.setIndex(i(p,null)),C.computeVertexNormals(),su??(su=new vn({vertexColors:!0,roughness:1,metalness:0}));let S=new Ce(C,su);return S.receiveShadow=!0,S.name="region-ground",S}function r(p,g,x,m,f,w,M,{lift:_=.05,side0:R=-1,side1:T=1,step:E=6}={}){let{x0:C,z0:S,x1:v,z1:P}=x.box,L=20,N=[];for(let B=0;B<m.length;B+=2)N.push([m[B],m[B+1]]);let k=[N[0]];for(let B=1;B<N.length;B++){let[J,j]=N[B-1],[nt,mt]=N[B],Mt=Math.max(1,Math.ceil(Math.hypot(nt-J,mt-j)/E));for(let Pt=1;Pt<=Mt;Pt++)k.push([J+(nt-J)*Pt/Mt,j+(mt-j)*Pt/Mt])}let F=f/2,W=B=>{let[J,j]=k[Math.max(0,B-1)],[nt,mt]=k[Math.min(k.length-1,B+1)],Mt=Math.hypot(nt-J,mt-j)||1,Pt=-(mt-j)/Mt,Ft=(nt-J)/Mt,[X,K]=k[B],pt=At=>{let yt=X+Pt*F*At,Wt=K+Ft*F*At;return new U(yt-w[0],e(x,yt,Wt)-M+_,Wt-w[1])};return[pt(R),pt(T)]},$=null;for(let B=0;B<k.length;B++){let[J,j]=k[B],mt=J>C-L&&J<v+L&&j>S-L&&j<P+L?W(B):null;$&&mt&&p.face(g,[$[0],mt[0],mt[1],$[1]]),$=mt}}function o(p,g,x){let m=new qe,f=de("asphalt","#ffffff"),w=de("sidewalk","#ffffff"),M=de("asphalt","#d4d4d0");for(let R of p.roads){let T=R.kind>=Ug.ARTERIAL?3.5:2.5,E=Oc(1-2*T/R.width,.2,1);r(m,f,p,R.points,R.width,g,x,{lift:.08,side0:-E,side1:E}),r(m,w,p,R.points,R.width,g,x,{lift:.18,side0:-1,side1:-E}),r(m,w,p,R.points,R.width,g,x,{lift:.18,side0:E,side1:1})}for(let R of p.streets)r(m,M,p,R.points,R.width,g,x,{lift:.06,step:4});let _=new Se;return _.name="region-roads",m.build(_,{cast:!1,receive:!0,where:"out"}),_}function a(p,g,x){let m=new qe,f=[];for(let M of p.buildings){let _=M.corners,R=[[_[0],_[1]],[_[2],_[3]],[_[4],_[5]],[_[6],_[7]]],T=1/0,E=-1/0;for(let[J,j]of R){let nt=e(p,J,j)-x;T=Math.min(T,nt),E=Math.max(E,nt)}let C=Og[M.use]??2.9,S=T-.3,v=E+.4+M.floors*C,P=iu[M.use]??iu[Kt.LOW],[L,N]=P[Math.floor(M.tone*P.length)%P.length],k=de(L,N),F=R.map(([J,j])=>[J-g[0],j-g[1]]),W=(F[0][0]+F[1][0]+F[2][0]+F[3][0])/4,$=(F[0][1]+F[1][1]+F[2][1]+F[3][1])/4;for(let J=0;J<4;J++){let[j,nt]=F[J],[mt,Mt]=F[(J+1)%4],Pt=new U((j+mt)/2-W,0,(nt+Mt)/2-$);m.quad(k,new U(j,S,nt),new U(mt,S,Mt),new U(mt,v,Mt),new U(j,v,nt),Pt)}if((M.use===Kt.LOW||M.use===Kt.DENSE)&&M.floors<=3){let[J,j]=Nc[Math.floor(M.tone*7.3*Nc.length)%Nc.length],nt=de(J,j),mt=Math.hypot(F[1][0]-F[0][0],F[1][1]-F[0][1])>=Math.hypot(F[3][0]-F[0][0],F[3][1]-F[0][1]),[Mt,Pt,Ft,X]=mt?F:[F[1],F[2],F[3],F[0]],K=(Ct,re,ue)=>{let A=Ct[0]-re[0],y=Ct[1]-re[1],H=Math.hypot(A,y)||1;return[Ct[0]+A/H*ue,Ct[1]+y/H*ue]},pt=[W,$],[At,yt,Wt,fe]=[Mt,Pt,Ft,X].map(Ct=>K(Ct,pt,.45)),I=Math.hypot(X[0]-Mt[0],X[1]-Mt[1]),Zt=Math.min(2.6,I*.28),Ut=(Ct,re)=>[(Ct[0]+re[0])/2,(Ct[1]+re[1])/2],Lt=Ut(At,fe),_t=Ut(yt,Wt),te=v-.15,ot=(Ct,re)=>new U(Ct[0],re,Ct[1]);m.quad(nt,ot(At,te),ot(yt,te),ot(_t,v+Zt),ot(Lt,v+Zt),new U(At[0]-fe[0],1,At[1]-fe[1])),m.quad(nt,ot(fe,te),ot(Lt,v+Zt),ot(_t,v+Zt),ot(Wt,te),new U(fe[0]-At[0],1,fe[1]-At[1])),m.face(k,[ot(Mt,v),ot(X,v),ot(Ut(Mt,X),v+Zt)]),m.face(k,[ot(Ft,v),ot(Pt,v),ot(Ut(Pt,Ft),v+Zt)]),m.face(k,[ot(X,v),ot(Mt,v),ot(Ut(Mt,X),v+Zt)]),m.face(k,[ot(Pt,v),ot(Ft,v),ot(Ut(Pt,Ft),v+Zt)])}else m.face(de("concrete","#c9c7c0"),F.map(([J,j])=>new U(J,v,j)).reverse()),m.face(de("concrete","#c9c7c0"),F.map(([J,j])=>new U(J,v,j)));f.push({ring:F,base:S,top:v})}let w=new Se;return w.name="region-buildings",m.build(w,{cast:!0,receive:!0,where:"out"}),{node:w,solids:f}}function c(p,g,x){let m=new qe,f=de("#c8553d"),w=de("#e8e2d0");for(let[_,R,T,E]of[[p.borders.block,w,.35,4],[p.borders.town,f,.7,0]])for(let C=0;C<_.length;C+=4){let S=_[C],v=_[C+1],P=_[C+2],L=_[C+3],N=Math.hypot(P-S,L-v),k=Math.max(1,Math.ceil(N/4));for(let F=0;F<k;F++){if(E&&F%2)continue;let W=F/k,$=(F+1)/k;r(m,R,p,[S+(P-S)*W,v+(L-v)*W,S+(P-S)*$,v+(L-v)*$],T,g,x,{lift:.25,step:4})}}let M=new Se;return M.name="region-borders",m.build(M,{cast:!1,receive:!1,where:"out"}),M}function l(p,{origin:g=[0,0],datum:x=0,borders:m=!0,roads:f=!0}={}){h();let w=s(p,g,x);n.add(w),f&&n.add(o(p,g,x));let{node:M,solids:_}=a(p,g,x);n.add(M),m&&n.add(c(p,g,x)),t={win:p,origin:g,datum:x,solids:_,ground:w}}function u(p){t&&t.ground.geometry.setIndex(i(t.win,p))}function h(){for(let p of[...n.children])n.remove(p),Ti(p);t=null}function d(p,g){if(!t)return null;let x=p+t.origin[0],m=g+t.origin[1],{x0:f,z0:w,x1:M,z1:_}=t.win.box;return x<f||m<w||x>M||m>_?null:e(t.win,x,m)-t.datum}return{group:n,show:l,clear:h,heightAt:d,setHole:u,get solids(){return t?.solids??[]},get window(){return t?.win??null}}}var cn={width:.85,height:1.5,span:22},ft={length:14.7,width:2.98,height:5.1,floor:1.13,ceiling:3.28,roof:3.73,skirt:1.37,doors:[-3.65,3.65],doorWidth:1.3,doorHeight:1.9,gap:.5},Fc={speed:12.5,accel:.85,brake:.95,dwell:22,doorsOpenAt:1.4,doorTime:2.4,melodyAt:9.5,doorsCloseAt:5.2},ta=(n,t,e)=>Math.min(e,Math.max(t,n));var zc=n=>Array.from({length:n},(t,e)=>(e-(n-1)/2)*(ft.length+ft.gap));var Bc=n=>n*ft.length+(n-1)*ft.gap;function Fg(n,t=60){let e=[[...n[0]]],i=a=>{let c=e.at(-1);Math.hypot(a[0]-c[0],a[1]-c[1])>1e-6&&e.push(a)};for(let a=1;a<n.length-1;a++){let[c,l,u]=[n[a-1],n[a],n[a+1]],h=Math.hypot(l[0]-c[0],l[1]-c[1]),d=Math.hypot(u[0]-l[0],u[1]-l[1]),p=[(l[0]-c[0])/h,(l[1]-c[1])/h],g=[(u[0]-l[0])/d,(u[1]-l[1])/d],x=Math.acos(ta(p[0]*g[0]+p[1]*g[1],-1,1));if(x<.001)continue;let m=Math.min(t*Math.tan(x/2),h/2,d/2),f=m/Math.tan(x/2),w=Math.sign(p[0]*g[1]-p[1]*g[0])||1,M=[l[0]-p[0]*m,l[1]-p[1]*m],_=[M[0]-p[1]*w*f,M[1]+p[0]*w*f],R=Math.atan2(M[1]-_[1],M[0]-_[0]),T=Math.max(2,Math.ceil(f*x));for(let E=0;E<=T;E++){let C=R+w*x*E/T;i([_[0]+Math.cos(C)*f,_[1]+Math.sin(C)*f])}}i([...n.at(-1)]);let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=s.at(-1);return{length:r,spot:a=>{let c=ta(a,0,r),l=0,u=s.length-1;for(;u-l>1;){let x=l+u>>1;s[x]<=c?l=x:u=x}let h=s[u]-s[l]||1,d=(c-s[l])/h,[p,g]=[e[l],e[u]];return{x:p[0]+(g[0]-p[0])*d,z:p[1]+(g[1]-p[1])*d,dx:(g[0]-p[0])/h,dz:(g[1]-p[1])/h}},samples:e}}function kc(n,t=[],e=cn.span){let i=[];for(let[o,a]of[...t].sort((c,l)=>c[0]-l[0])){let c=i.at(-1);c&&o<=c[1]?c[1]=Math.max(c[1],a):i.push([o,a])}let s=Math.max(1,Math.round(n/e)),r=[];for(let o=0;o<=s;o++){let a=n*o/s;for(let c=0;c<4;c++){let l=i.find(([u,h])=>a>u+1e-6&&a<h-1e-6);if(!l)break;a=a-l[0]<l[1]-a?l[0]:l[1]}a=ta(a,0,n),!r.length||a-r.at(-1)>4?r.push(a):o===s&&(r[r.length-1]=n)}return r}function zg(n,{speed:t,accel:e,brake:i}){let s=Math.min(t,Math.sqrt(2*n*e*i/(e+i))),r=s/e,o=s/i,a=Math.max(0,n-s*s/(2*e)-s*s/(2*i))/s,c=r+a+o;return{time:c,top:s,at:u=>{if(u<=0)return[0,0];if(u<r)return[e*u*u/2,e*u];if(u<r+a)return[s*s/(2*e)+s*(u-r),s];if(u<c){let h=c-u;return[n-i*h*h/2,i*h]}return[n,0]}}}function Hc(n,t=Fc){let e=Fg(n.path,n.radius),i=n.stops.map((p,g)=>({side:1,...p,index:g})),s=n.cars??2,r=[],o=0,a=[...i.keys(),...[...i.keys()].reverse().slice(1,-1)];a.forEach((p,g)=>{let x=a[(g+1)%a.length];r.push({kind:"dwell",at:p,next:x,start:o,time:t.dwell}),o+=t.dwell;let m=zg(Math.abs(i[x].at-i[p].at),t);r.push({kind:"run",at:p,next:x,start:o,time:m.time,run:m,way:Math.sign(i[x].at-i[p].at)}),o+=m.time});let c=o,l=p=>{let g=(p-t.doorsOpenAt)/t.doorTime,x=(t.dwell-t.doorsCloseAt-p)/t.doorTime;return ta(Math.min(g,x),0,1)};function u(p){let g=(p%c+c)%c,x=r[0];for(let R of r)if(R.start<=g)x=R;else break;let m=g-x.start,f=i[x.at],w=i[x.next];if(x.kind==="dwell")return{time:p,phase:"dwell",s:f.at,speed:0,way:Math.sign(w.at-f.at)||1,stop:f,next:w,doors:l(m),leaves:x.time-m};let[M,_]=x.run.at(m);return{time:p,phase:"run",s:f.at+x.way*M,speed:_,way:x.way,stop:null,from:f,next:w,doors:0,arrives:x.time-m}}function h(p,g){if(!(g>p))return[];let x=[];for(let w of r){let M=i[w.at],_=i[w.next];w.kind==="dwell"?x.push([w.start,"arrive",M,_],[w.start+t.doorsOpenAt,"open",M,_],[w.start+w.time-t.melodyAt,"melody",M,_],[w.start+w.time-t.doorsCloseAt,"close",M,_]):x.push([w.start,"depart",M,_],[w.start+Math.min(6,w.time*.3),"next",M,_],[w.start+Math.max(w.time-13,w.time*.55),"soon",M,_],[w.start+Math.max(w.time-16,w.time*.4),"approach",M,_])}let m=[],f=Math.max(p,g-c);for(let w=Math.floor(f/c);w<=Math.floor(g/c);w++)for(let[M,_,R,T]of x){let E=w*c+M;E>f&&E<=g&&m.push({time:E,kind:_,stop:R,next:T})}return m.sort((w,M)=>w.time-M.time)}let d=p=>p.way>0?i.at(-1):i[0];return{name:n.name??"\u30E2\u30CE\u30EC\u30FC\u30EB",y:n.y??7,cars:s,stops:i,way:e,period:c,drive:t,stateAt:u,eventsBetween:h,boundFor:d}}function Vc(n,t){let e=n.boundFor(t);return t.phase==="dwell"?[`${t.stop.name}`,t.leaves<n.drive.melodyAt?"\u30C9\u30A2\u304C\u9589\u307E\u308A\u307E\u3059":`${e.name} \u3086\u304D`]:[t.arrives<14?"\u307E\u3082\u306A\u304F":"\u6B21\u306F",`${t.next.name}`]}var Bg=6.62,kg=.05,Hg={...Fc,speed:18,accel:.97,brake:1.1,dwell:25},Vg=420,Fn=1.85,ve={edge:Fn+ft.width/2+.07,width:3.5,length:48,roof:3.9,stair:3};var ms=(n,t,e)=>Math.min(e,Math.max(t,n));function En(n,t){if(!n?.length)return 0;if(t<=n[0][0])return n[0][1];let e=n[n.length-1];if(t>=e[0])return e[1];let i=0,s=n.length-1;for(;s-i>1;){let l=i+s>>1;n[l][0]<=t?i=l:s=l}let[r,o]=n[i],[a,c]=n[s];return o+(c-o)*((t-r)/(a-r||1))}function Gg(n,t,{clearance:e=Bg,grade:i=kg,level:s=[],floor:r=[]}={}){let o=n.length,a=Float64Array.from(n,u=>u+e),c=i*t,l=()=>{for(let[u,h,d]of r){let p=ms(Math.floor(u/t),0,o-1),g=ms(Math.ceil(h/t),0,o-1);for(let x=p;x<=g;x++)a[x]=Math.max(a[x],d)}for(let[u,h]of s){let d=ms(Math.floor(u/t),0,o-1),p=ms(Math.ceil(h/t),0,o-1),g=-1/0;for(let x=d;x<=p;x++)g=Math.max(g,a[x]);for(let x=d;x<=p;x++)a[x]=g}};for(let u=0;u<6;u++){l();for(let h=1;h<o;h++)a[h]=Math.max(a[h],a[h-1]-c);for(let h=o-2;h>=0;h--)a[h]=Math.max(a[h],a[h+1]-c)}return l(),a}function ou(n,{origin:t=[0,0],datum:e=0,from:i=0,to:s=1/0,cars:r=2,step:o=20}={}){let c=(n.points.length/2-1)*o,l=ms(i,0,c),u=ms(s,l,c),h=Bc(r)/2,d=n.stations.filter(E=>E.s-h-2.5>=l&&E.s+h+2.5<=u);if(d.length<2)return null;let p=Math.floor(l/o),g=Math.ceil(u/o),x=[],m=[];for(let E=p;E<=g;E++)x.push([n.points[E*2]-t[0],n.points[E*2+1]-t[1]]),m.push((n.ground?.[E]??0)-e);let f=p*o,w=d.map(E=>[E.s-f-h-8,E.s-f+h+8]),M=Gg(m,o,{level:w}),_=Array.from(M,(E,C)=>[C*o,Math.round(E*100)/100]),R=m.map((E,C)=>[C*o,Math.round(E*100)/100]),T=d.map(E=>[E.s-f-6,E.s-f+6]);return{name:n.name,color:n.color,path:x,radius:2e3,heights:_,ground:R,y:_[0][1],cars:r,clear:T,drive:Hg,stops:d.map(E=>({name:E.name,at:E.s-f,side:1}))}}function au(n,t=Vg){return Math.max(1,Math.ceil(n/t))}var Wg=40,Xg=32,cu=64,qg=new Float32Array(cu*4*4),ea=new Zn(qg,cu,4,Oe,an);ea.magFilter=Pe;ea.minFilter=Pe;ea.needsUpdate=!0;var Wc=new Zn(new Uint8Array([104,132,84,255]),1,1);Wc.colorSpace=be;Wc.needsUpdate=!0;var Yg={glassScene:{value:ea},glassCount:{value:new Ot(0,0)},glassSun:{value:new U(.45,.64,.62)},glassGround:{value:Wc},glassGroundBox:{value:new le(0,0,1,1)}},$g=`
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
  for ( int i = 0; i < ${Wg}; i ++ ) {
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
  for ( int i = 0; i < ${Xg}; i ++ ) {
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
`,Zg=`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`,Jg={near:`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,far:`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,inner:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,rail:`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`};function Kg(n){let t=n==="far",e=new vn({color:t?"#0b0e10":"#141b1f",roughness:.04,metalness:0,side:Ve,transparent:!t,depthWrite:t,premultipliedAlpha:!t,forceSinglePass:!0});return n==="inner"&&(e.defines.GLASS_INDOORS=""),(n==="near"||n==="far")&&(e.defines.GLASS_WINDOW=""),e.onBeforeCompile=i=>{Object.assign(i.uniforms,Yg),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`);let s=kt.lights_fragment_maps.replace("radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );","radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );");i.fragmentShader=i.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
${$g}`).replace("#include <lights_fragment_maps>",s).replace("#include <opaque_fragment>",`${Zg}
${Jg[n]}`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=()=>`machi-glass-${n}`,e}var Gc=new Map;function lu(n="near"){return Gc.has(n)||Gc.set(n,Kg(n)),Gc.get(n)}var Xc=".".repeat(32),qc=(n,t)=>[n,n,n,t,t,Xc,Xc,Xc].join(""),u1=[qc(`XXSSSSSAA${"M".repeat(12)}${"E".repeat(11)}`,`${"A".repeat(9)}${"M".repeat(12)}${"E".repeat(11)}`),qc(`XXOOOOOOOTTttEEEEE${"O".repeat(7)}SSSSSXX`,"O".repeat(32)),qc(`${"O".repeat(30)}XX`,"O".repeat(32))];var he=ft.width/2,Ae=ft.length/2,Me=ft.floor,ln=(n,t=.5,e=0)=>de(n,"#ffffff",{roughness:t,metalness:e});function Yc(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0}),s=5,r=document.createElement("canvas");r.width=n*s,r.height=t*s;let o=r.getContext("2d"),a=new pi(r);a.colorSpace=be;let c=new fi({map:a,toneMapped:!1}),l=null;return{material:c,show(u,h=["#ffb23e","#8dff9a"]){let d=u.join("|");if(d===l)return;l=d,i.clearRect(0,0,n,t),i.textBaseline="middle",i.textAlign="center";let p=t/u.length;u.forEach((x,m)=>{let f=Math.floor(p*.88),w=_=>`700 ${_}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`;i.font=w(f);let M=i.measureText(x).width;M>n-4&&(i.font=w(Math.max(6,Math.floor(f*(n-4)/M)))),i.fillStyle=h[m%h.length],i.fillText(x,n/2,p*(m+.5)+.5)});let g=i.getImageData(0,0,n,t).data;o.fillStyle="#08090a",o.fillRect(0,0,r.width,r.height);for(let x=0;x<t;x++)for(let m=0;m<n;m++){let f=(x*n+m)*4;o.fillStyle=g[f+3]>96?`rgb(${g[f]},${g[f+1]},${g[f+2]})`:"#1b1d1f",o.beginPath(),o.arc((m+.5)*s,(x+.5)*s,s*.4,0,Math.PI*2),o.fill()}a.needsUpdate=!0},dispose(){a.dispose(),c.dispose()}}}function hu(n,t,e,i=!1,s=0){let r=new Se,o=new qe;o.box(ln("#2a2e31",.5,.3),0,0,0,t+.08,e+.08,.09);for(let a of s?[-t*.35,t*.35]:[])o.box(ln("#9aa0a3",.4,.7),a,e/2+.04+s/2,0,.025,s,.025);o.build(r,{cast:!1});for(let a of i?[1,-1]:[1]){let c=new Ce(new gi(t,e),n.material);c.position.z=a*.047,a<0&&(c.rotation.y=Math.PI),r.add(c)}return r}var uu=[[-Ae,ft.doors[0]-ft.doorWidth/2],[ft.doors[0]+ft.doorWidth/2,ft.doors[1]-ft.doorWidth/2],[ft.doors[1]+ft.doorWidth/2,Ae]];function du({front:n,back:t,boards:e}){let i=new Se,s=new qe,r=new qe,o=new qe,a=ln("#f1f2f0",.42,.12),c=ln("#1e8f8a",.45,.12),l=ln("#3a4046",.6,.25),u=ln("#b9bcbd",.55,.2),h=ln("#1f2326",.5,.2),d=ln("#c9cdcf",.3,.8),p=lu("near"),g=Me+.45,x=Me+1.95,m=ft.roof-.35,f=(_,R,T)=>new U(_,R,T);for(let _ of[-1,1]){let R=_*he,T=f(_,0,0);s.box(l,_*(he-.03),(.3-ft.skirt)/2,0,.06,ft.skirt+.3,ft.length),s.box(c,_*(he-.03),.525,0,.062,.45,ft.length);for(let[E,C]of uu){let S=C-E,v=(E+C)/2;s.box(a,_*(he-.035),(.75+g)/2,v,.07,g-.75,S);let P=Math.max(1,Math.round(S/1.8)),L=[E===-Ae?E+.34:E+.1,C===Ae?C-.34:C-.1];for(let N=0;N<P;N++){let k=L[0]+(L[1]-L[0])*N/P+.03,F=L[0]+(L[1]-L[0])*(N+1)/P-.03;o.quad(p,f(R-_*.02,g,k),f(R-_*.02,g,F),f(R-_*.02,x,F),f(R-_*.02,x,k),T),N&&s.box(h,_*(he-.035),(g+x)/2,k-.03,.07,x-g,.06)}for(let[N,k]of[[E,E===-Ae?.34:.1],[C,C===Ae?-.34:-.1]])s.box(a,_*(he-.035),(g+x)/2,N+k/2,.07,x-g,Math.abs(k))}s.box(a,_*(he-.035),(x+m)/2,0,.07,m-x,ft.length);for(let E of ft.doors)s.box(l,_*(he-.03),.94,E,.062,.38,ft.doorWidth);s.quad(u,f(R,m,-Ae),f(R,m,Ae),f(_*.95,ft.roof,Ae),f(_*.95,ft.roof,-Ae),f(_*.4,1,0));for(let E of[-4.9,4.9])s.box(h,_*(cn.width/2+.34),-.6,E,.56,1.1,2.3)}s.quad(u,f(-.95,ft.roof,-Ae),f(-.95,ft.roof,Ae),f(.95,ft.roof,Ae),f(.95,ft.roof,-Ae),f(0,1,0));for(let _ of[-3.1,3.1])s.box(ln("#a9adae",.6,.2),0,ft.roof+.13,_,1.6,.26,2.4);s.box(l,0,Me-.06,0,ft.width,.12,ft.length);for(let _ of[-4.9,4.9])s.box(h,0,.52,_,ft.width-.2,.9,2.5);for(let[_,R]of[[1,n],[-1,t]]){let T=_*Ae,E=f(0,0,_);if(R){s.box(a,0,(.75+g)/2,T-_*.035,ft.width,g-.75,.07),s.box(c,0,.525,T-_*.03,ft.width,.45,.062),s.box(l,0,(.3-ft.skirt)/2,T-_*.03,ft.width,ft.skirt+.3,.06);for(let S of[-he+.11,he-.11])s.box(a,S,(g+x)/2,T-_*.035,.22,x-g,.07);s.box(a,0,(x+m)/2,T-_*.035,ft.width,m-x,.07),o.quad(p,f(-he+.22,g,T-_*.02),f(he-.22,g,T-_*.02),f(he-.22,x,T-_*.02),f(-he+.22,x,T-_*.02),E);for(let S of[-.95,.95])s.box(jo("#fff6dc",1.1),S,g-.2,T+_*.002,.26,.1,.01),s.box(jo("#d0302b",.6),S*.72,g-.2,T+_*.002,.12,.08,.01);let C=hu(e.bound,1.3,.2);C.position.set(0,(x+m)/2,T+_*.012),C.rotation.y=_>0?0:Math.PI,i.add(C)}else{for(let C of[-1,1])s.box(a,C*(he+.55)/2,(Me+m)/2,T-_*.035,he-.55,m-Me,.07);s.box(a,0,(Me+2+m)/2,T-_*.035,1.1,m-Me-2,.07);for(let C of[-.6,.6])s.box(h,C,Me+1,T+_*ft.gap/4,.08,2.1,ft.gap/2);s.box(h,0,Me+2.08,T+_*ft.gap/4,1.28,.08,ft.gap/2),s.box(h,0,Me-.04,T+_*ft.gap/4,1.28,.08,ft.gap/2)}}r.slab(ln("#5e6f7d",.7),-he+.07,-Ae+.07,he-.07,Ae-.07,Me+.002),r.box(ln("#eceeed",.6),0,ft.ceiling+.03,0,ft.width-.14,.06,ft.length-.14);for(let _ of[-.5,.5])r.box(jo("#fff9ec",1.25),_,ft.ceiling-.004,0,.14,.012,ft.length-1.2);let w=de("carpet","#3f6f8f");for(let _ of[-1,1]){for(let[R,T]of uu){let E=R===-Ae?R+(t?.75:.25):R+.3,C=T===Ae?T-(n?.75:.25):T-.3;if(C-E<.6)continue;let S=(E+C)/2;r.box(w,_*(he-.32),Me+.36,S,.46,.12,C-E),r.box(ln("#d9dcdc",.6),_*(he-.32),Me+.15,S,.42,.3,C-E),r.box(w,_*(he-.11),Me+.62,S,.08,.4,C-E);for(let v of[E,C])r.box(d,_*(he-.32),Me+.7,v,.5,.56,.03)}r.box(d,_*.66,Me+1.9,0,.03,.03,ft.length-1.4);for(let R of ft.doors){for(let E of[R-.76,R+.76])r.cylinder(d,_*(he-.56),Me,E,.017,ft.ceiling-Me,8);let T=hu(e.car,.9,.16);T.position.set(_*(he-.085),Me+2.02,R),T.rotation.y=_>0?-Math.PI/2:Math.PI/2,i.add(T)}}s.build(i,{where:"out"}),r.build(i,{where:"in",cast:!1});for(let _ of o.build(i,{cast:!1}))_.renderOrder=1;let M=[];for(let _ of[-1,1])for(let R of ft.doors)for(let T of[-1,1]){let E=new qe,C=ft.doorWidth/2,S=(P,L,N,k)=>E.box(d,0,(N+k)/2,(P+L)/2,.035,k-N,L-P);S(-C/2,-C/2+.05,0,ft.doorHeight),S(C/2-.05,C/2,0,ft.doorHeight),S(-C/2,C/2,0,.18),S(-C/2,C/2,ft.doorHeight-.07,ft.doorHeight),E.quad(p,f(0,.18,-C/2+.05),f(0,.18,C/2-.05),f(0,ft.doorHeight-.07,C/2-.05),f(0,ft.doorHeight-.07,-C/2+.05),f(_,0,0));let v=new Se;for(let P of E.build(v,{cast:!1}))P.material===p&&(P.renderOrder=1);v.position.set(_*(he+.02),Me,R+T*C/2),i.add(v),M.push({leaf:v,side:_,shut:R+T*C/2,slide:T*(C-.03)})}return{car:i,leaves:M}}function fu({clock:n=()=>Date.now()/1e3}={}){let t=new Se;t.name="route-transit";let e=[],i="",s="";function r(){for(let h of e){h.track&&(t.remove(h.track),Ti(h.track));for(let d of h.trains){for(let p of d.cars)t.remove(p.car),Ti(p.car);d.boards.car.dispose(),d.boards.bound.dispose()}}e=[]}function o(h,d,p,g){let x=new Se,m=new qe,f=de("concrete","#d6d4cd"),w=de("concrete","#c6c4bd"),M=de("concrete","#bfbcb4"),_=de("tile","#d9d4ca"),R=de("roofMetal","#9aa3a8"),T=de("#7d868c","#ffffff",{roughness:.45,metalness:.5}),E=de(d.color??"#1f7a6a","#ffffff",{roughness:.5}),C=h.way,S=L=>{let N=C.spot(L);return Math.hypot(N.x-p[0],N.z-p[1])<g},v=(L,N,k)=>new U(L,N,k);for(let L=0;L<C.length;L+=10){let N=Math.min(C.length,L+10);if(!S(L)&&!S(N))continue;let k=C.spot(L),F=C.spot(N),W=En(d.heights,L)-cn.height/2,$=En(d.heights,N)-cn.height/2;for(let B of[-1,1]){let[J,j]=[k.x+k.dz*B*Fn,k.z-k.dx*B*Fn],[nt,mt]=[F.x+F.dz*B*Fn,F.z-F.dx*B*Fn];m.bar(f,v(J,W,j),v(nt,$,mt),cn.width,cn.height);for(let Mt of[-1,1]){let Pt=k.dz*Mt*(cn.width/2+.035),Ft=-k.dx*Mt*(cn.width/2+.035);m.bar(T,v(J+Pt,W+.13,j+Ft),v(nt+Pt,$+.13,mt+Ft),.05,.09)}}}let P=[];for(let L of kc(C.length,d.clear??[])){if(!S(L))continue;let N=C.spot(L),k=Math.atan2(N.dx,N.dz),F=En(d.ground,L),W=En(d.heights,L)-cn.height,$=W-.9-F;$<.3||(m.box(w,N.x,F+.15,N.z,2.6,.3,2.6,k),m.box(w,N.x,F+$/2,N.z,1.5,$,1.5,k),m.box(w,N.x,W-.45,N.z,Fn*2+1.4,.9,1.6,k),P.push({x:N.x,z:N.z,w:1.6,d:1.6,r:k*180/Math.PI}))}for(let L of h.stops){if(!S(L.at))continue;let N=C.spot(L.at),k=Math.atan2(N.dx,N.dz),F=En(d.heights,L.at)+ft.floor,W=En(d.ground,L.at),$=ve.length/2;m.at(N.x,0,N.z,k,B=>{for(let nt of[-1,1]){let mt=nt*ve.edge,Mt=nt*(ve.edge+ve.width),[Pt,Ft]=nt>0?[mt,Mt]:[Mt,mt];B.box(M,(Pt+Ft)/2,F-.25,0,Ft-Pt,.5,ve.length),B.box(_,(Pt+Ft)/2,F+.005,0,Ft-Pt,.01,ve.length),B.box(de("#e8c33a"),mt+nt*.45,F+.012,0,.3,.01,ve.length),B.box(T,Mt-nt*.05,F+.55,0,.05,1.1,ve.length),B.box(de("#dfe5e8","#ffffff",{roughness:.3}),mt+nt*.12,F+.65,0,.08,1.3,ve.length-6);for(let X=-$+4;X<=$-4;X+=8){let K=F-.5-W;K>.5&&B.box(w,Mt-nt*.6,W+K/2,X,.7,K,.7)}for(let X=-$+2;X<=$-2;X+=8)B.box(T,Mt-nt*.25,F+ve.roof/2,X,.18,ve.roof,.18)}let J=ve.edge+ve.width+.6;B.box(R,0,F+ve.roof+.1,0,J*2,.2,ve.length+2),B.box(E,0,F+ve.roof-.1,-$-1,J*2,.35,.08),B.box(E,0,F+ve.roof-.1,$+1,J*2,.35,.08);let j=F-W;if(j>1){let nt=j/.6,mt=ve.edge+ve.width+1.1,Mt=Math.ceil(j/.17);for(let Pt=0;Pt<Mt;Pt++){let Ft=W+j*(Pt+.5)/Mt,X=$-2-nt*(Pt+.5)/Mt;B.box(M,mt,Ft-.1,X,1.8,.2+j/Mt,nt/Mt)}B.box(R,mt,F+2.6,$-2-nt/2,2.2,.12,nt+1)}}),P.push({x:N.x,z:N.z,w:2.4,d:2.4,r:k*180/Math.PI})}return m.build(x,{where:"out"}),{node:x,piers:P}}function a(h,{near:d=[0,0],reach:p=1600}={}){let g=JSON.stringify(h.map(x=>[x.name,x.path.length,x.path[0],x.heights.length,x.ground?.length??0]));if(g!==i){i=g,r(),s="";for(let x of h)e.push(l(x))}c(d,p)}function c(h,d=1600){let p=JSON.stringify([h.map(g=>Math.round(g/200)),d]);if(p!==s){s=p;for(let g of e){g.track&&(t.remove(g.track),Ti(g.track));let{node:x,piers:m}=o(g.line,g.spec,h,d);t.add(x),g.track=x,g.piers=m}}}function l(h){let d=Hc(h,h.drive),p=au(d.period),g=[];for(let x=0;x<p;x++){let m={car:Yc(160,28),bound:Yc(144,22)},f=zc(d.cars),w=f.map((M,_)=>{let R=du({front:_===f.length-1,back:_===0,boards:m});return t.add(R.car),{...R,offset:M,index:_}});g.push({offset:x*d.period/p,cars:w,boards:m,shown:""})}return{spec:h,line:d,track:null,piers:[],trains:g}}function u(h=null,d=2200){let p=n();for(let g of e){let{line:x,spec:m}=g;for(let f of g.trains){let w=x.stateAt(p+f.offset);f.state=w;let M=w.way>=0?1:-1;for(let T of f.cars){let E=w.s+T.offset,C=x.way.spot(E),S=C.x+C.dz*M*Fn,v=C.z-C.dx*M*Fn,P=!h||Math.hypot(S-h[0],v-h[1])<d;if(T.car.visible=P,!P)continue;let L=En(m.heights,E),N=Math.atan2(En(m.heights,E+ft.length/2)-En(m.heights,E-ft.length/2),ft.length);T.car.position.set(S,L,v),T.car.rotation.set(-N,Math.atan2(C.dx,C.dz),0,"YXZ"),T.place={x:S,z:v,dx:C.dx,dz:C.dz,turn:Math.atan2(C.dx,C.dz),y:L};let k=w.phase==="dwell"?M:0;for(let F of T.leaves)F.leaf.position.z=F.shut+(F.side===k?F.slide*w.doors:0)}let _=Vc(x,w),R=_.join("|");R!==f.shown&&(f.shown=R,f.boards.car.show(_,["#ffb23e","#ffffff"]),f.boards.bound.show([x.boundFor(w).name],["#ffb23e"]))}}}return{group:t,setLines:a,setNear:c,update:u,get lines(){return e},get piers(){return e.flatMap(h=>h.piers)},dispose(){i="",s="",r()}}}function tx(n){let t=String(n??"").trim();if(/^\d{1,9}$/.test(t))return Number(t);let e=t||"1",i=2166136261;for(let s=0;s<e.length;s++)i=Math.imul(i^e.charCodeAt(s),16777619);return i>>>0}var ir=new URLSearchParams(location.hash.slice(1)),Zc=tx(ir.get("seed")??"3"),gn=Math.min(1600,Math.max(200,Number(ir.get("size"))||1e3)),na=document.getElementById("info"),sa=document.getElementById("view"),Ri=new Wo({canvas:sa,antialias:!0});Ri.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Ri.shadowMap.enabled=!0;Ri.toneMapping=eo;Ri.toneMappingExposure=.9;var Ii=new Os;Ii.background=new Xt("#c9dbe6");Ii.fog=new Ns("#c9dbe6",600,2600);var Ci=new Ue(50,1,.5,6e3);Ci.position.set(-380,260,420);var Ai=new Yo(Ci,sa);Ai.target.set(0,30,0);Ai.maxPolarAngle=Math.PI*.49;Ii.add(new Xs("#dfe8f0","#6b6a5a",1.2));var gs=new Ys("#fff4e2",2.6);gs.position.set(-300,500,260);gs.castShadow=!0;gs.shadow.mapSize.set(4096,4096);Object.assign(gs.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:10,far:1600});Ii.add(gs,gs.target);var ra=ru();Ii.add(ra.group);var oa=fu();Ii.add(oa.group);window.__view={camera:Ci,controls:Ai,transit:oa,region:ra};function pu(){let n=sa.clientWidth,t=sa.clientHeight;Ri.setSize(n,t,!1),Ci.aspect=n/Math.max(1,t),Ci.updateProjectionMatrix()}window.addEventListener("resize",pu);pu();Ri.setAnimationLoop(()=>{Ai.update(),oa.update([Ai.target.x,Ai.target.z],gn),Ri.render(Ii,Ci)});var $c=new Worker(new URL("./worker.bundle.js?v=assets-20261118",import.meta.url)),ia=null,ei=null;$c.onmessage=n=>{let t=n.data;if(t.type==="progress")na.textContent=`${t.label}\uFF08${Math.round(t.fraction*100)}%\u30FB${(t.elapsed/1e3).toFixed(1)}\u79D2\uFF09`;else if(t.type==="ready"){ia=t.overlay;let e=ia.lines[0]?.stations[Math.min(5,ia.lines[0].stations.length-1)];ei=[Number(ir.get("x"))||e?.x||1e4,Number(ir.get("z"))||e?.z||1e4],na.textContent="3D\u306E\u5F62\u3092\u4F5C\u3063\u3066\u3044\u307E\u3059\u2026",$c.postMessage({type:"window",id:1,seed:Zc,x0:ei[0]-gn/2,z0:ei[1]-gn/2,x1:ei[0]+gn/2,z1:ei[1]+gn/2,step:gn>1100?4:2,buildings:ir.get("bare")!=="1"})}else t.type==="window"?ex(t.window):t.type==="error"&&(na.textContent=`\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A${t.message}`)};$c.postMessage({type:"generate",seed:Zc});function ex(n){let t=1/0;for(let c of n.heights)t=Math.min(t,c);let e=Math.floor(t),i=ei,s=performance.now();ra.show(n,{origin:i,datum:e});let r=[];for(let c of ia.lines){if(!n.lines.includes(c.id))continue;let l=ou({name:c.name,color:c.color,points:c.points,ground:c.ground,stations:c.stations},{origin:i,datum:e});l&&r.push(l)}oa.setLines(r,{near:[0,0],reach:gn*.75});let o=r.length,a=ra.heightAt(0,0)??0;Ai.target.set(0,a,0),Ci.position.set(-gn*.38,a+gn*.28,gn*.42),na.innerHTML=`\u30B7\u30FC\u30C9 ${Zc}\u30FB${gn}m\u56DB\u65B9\uFF08\u6771\u3078 ${(ei[0]/1e3).toFixed(2)}km\u30FB\u5357\u3078 ${(ei[1]/1e3).toFixed(2)}km\uFF09<br>\u5EFA\u7269 ${n.buildings.length}\u68DF\u30FB\u751F\u6D3B\u9053\u8DEF ${n.streets.length}\u672C\u30FB\u5730\u533A ${n.districts.length}\u30FB\u30E2\u30CE\u30EC\u30FC\u30EB ${o}\u8DEF\u7DDA<br>3D\u306E\u7D44\u307F\u7ACB\u3066 ${Math.round(performance.now()-s)}\u30DF\u30EA\u79D2\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u3002`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
