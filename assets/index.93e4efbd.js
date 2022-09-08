var id=Object.defineProperty;var rd=(o,e,t)=>e in o?id(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Pe=(o,e,t)=>(rd(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="144",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sd=0,_l=1,ad=2,vu=1,od=2,Hr=3,Li=0,Jt=1,Pn=2,ni=0,cr=1,xl=2,vl=3,yl=4,ld=5,sr=100,cd=101,ud=102,bl=103,Ml=104,hd=200,dd=201,fd=202,pd=203,yu=204,bu=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=0,bd=1,Md=2,ro=3,Sd=4,wd=5,Td=6,Ed=7,Mu=0,Ad=1,Cd=2,On=0,Ld=1,Rd=2,Pd=3,Su=4,Dd=5,wu=300,pr=301,mr=302,so=303,ao=304,na=306,gr=1e3,jt=1001,Xs=1002,pt=1003,oo=1004,lo=1005,Ct=1006,Tu=1007,Cr=1008,Ri=1009,Id=1010,Od=1011,Eu=1012,Nd=1013,yi=1014,Zn=1015,Qr=1016,Fd=1017,Ud=1018,ur=1020,zd=1021,kd=1022,on=1023,Bd=1024,Vd=1025,Si=1026,_r=1027,Gd=1028,Hd=1029,Wd=1030,qd=1031,Xd=1033,da=33776,fa=33777,pa=33778,ma=33779,Sl=35840,wl=35841,Tl=35842,El=35843,jd=36196,Al=37492,Cl=37496,Ll=37808,Rl=37809,Pl=37810,Dl=37811,Il=37812,Ol=37813,Nl=37814,Fl=37815,Ul=37816,zl=37817,kl=37818,Bl=37819,Vl=37820,Gl=37821,Hl=36492,es=2300,xr=2301,ga=2302,Wl=2400,ql=2401,Xl=2402,Yd=2500,Kd=1,Au=2,Pi=3e3,ze=3001,Zd=3200,$d=3201,Uo=0,Jd=1,An="srgb",bi="srgb-linear",_a=7680,Qd=519,co=35044,jl="300 es",uo=1035;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const jr=Math.PI/180,ts=180/Math.PI;function cn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[o&255]+_t[o>>8&255]+_t[o>>16&255]+_t[o>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function vt(o,e,t){return Math.max(e,Math.min(t,o))}function zo(o,e){return(o%e+e)%e}function ef(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function tf(o,e,t){return o!==e?(t-o)/(e-o):0}function Yr(o,e,t){return(1-t)*o+t*e}function nf(o,e,t,n){return Yr(o,e,1-Math.exp(-t*n))}function rf(o,e=1){return e-Math.abs(zo(o,e*2)-e)}function sf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function af(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function of(o,e){return o+Math.floor(Math.random()*(e-o+1))}function lf(o,e){return o+Math.random()*(e-o)}function cf(o){return o*(.5-Math.random())}function uf(o){o!==void 0&&(Yl=o);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hf(o){return o*jr}function df(o){return o*ts}function ho(o){return(o&o-1)===0&&o!==0}function Cu(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function js(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ff(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),d=r((e-n)/2),h=s((e-n)/2),m=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*d,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*d,a*c);break;case"ZXZ":o.set(l*d,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*m,a*c);break;case"YXY":o.set(l*m,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ge(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var pf=Object.freeze({__proto__:null,DEG2RAD:jr,RAD2DEG:ts,generateUUID:cn,clamp:vt,euclideanModulo:zo,mapLinear:ef,inverseLerp:tf,lerp:Yr,damp:nf,pingpong:rf,smoothstep:sf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:uf,degToRad:hf,radToDeg:df,isPowerOfTwo:ho,ceilPowerOfTwo:Cu,floorPowerOfTwo:js,setQuaternionFromProperEuler:ff,normalize:Ge,denormalize:Dn});class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],b=i[1],M=i[4],y=i[7],x=i[2],E=i[5],L=i[8];return r[0]=s*f+a*b+l*x,r[3]=s*p+a*M+l*E,r[6]=s*_+a*y+l*L,r[1]=c*f+u*b+d*x,r[4]=c*p+u*M+d*E,r[7]=c*_+u*y+d*L,r[2]=h*f+m*b+g*x,r[5]=h*p+m*M+g*E,r[8]=h*_+m*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*r,m=c*r-s*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*c-u*n)*f,e[2]=(a*n-i*s)*f,e[3]=h*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-a*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(s*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Lu(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ns(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const xa={[An]:{[bi]:wi},[bi]:{[An]:Gs}},nn={legacyMode:!0,get workingColorSpace(){return bi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(xa[e]&&xa[e][t]!==void 0){const n=xa[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},rn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function va(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function xs(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bi){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bi){if(e=zo(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=va(s,r,e+1/3),this.g=va(s,r,e),this.b=va(s,r,e-1/3)}return nn.toWorkingColorSpace(this,i),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,nn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,nn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,nn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,nn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=An){const n=Ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return nn.fromWorkingColorSpace(xs(this,lt),e),vt(lt.r*255,0,255)<<16^vt(lt.g*255,0,255)<<8^vt(lt.b*255,0,255)<<0}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bi){nn.fromWorkingColorSpace(xs(this,lt),t);const n=lt.r,i=lt.g,r=lt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bi){return nn.fromWorkingColorSpace(xs(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=An){return nn.fromWorkingColorSpace(xs(this,lt),e),e!==An?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(_s);const n=Yr(rn.h,_s.h,t),i=Yr(rn.s,_s.s,t),r=Yr(rn.l,_s.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Me.NAMES=Ru;let Wi;class Pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=ns("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=wi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Du{constructor(e=null){this.isSource=!0,this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ya(i[s].image)):r.push(ya(i[s]))}else r=ya(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class Tt extends Fi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=jt,i=jt,r=Ct,s=Cr,a=on,l=Ri,c=1,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=cn(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=wu;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(m+1)/2,x=(_+1)/2,E=(u+h)/4,L=(d+f)/4,v=(g+p)/4;return M>y&&M>x?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=L/n):y>x?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=L/r,i=v/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-f)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Di extends Fi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gf extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[s+0],m=r[s+1],g=r[s+2],f=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||c!==m||u!==g){let p=1-a;const _=l*h+c*m+u*g+d*f,b=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const x=Math.sqrt(M),E=Math.atan2(x,_*b);p=Math.sin(p*E)/x,a=Math.sin(a*E)/x}const y=a*b;if(l=l*p+h*y,c=c*p+m*y,u=u*p+g*y,d=d*p+f*y,p===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s],h=r[s+1],m=r[s+2],g=r[s+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(s-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,d=l*i+r*n-s*t,h=-r*t-s*n-a*i;return this.x=c*l+h*-r+u*-a-d*-s,this.y=u*l+h*-s+d*-r-c*-a,this.z=d*l+h*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new R,Kl=new Nn;class Lr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>s&&(s=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>s&&(s=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)ui.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),vs.subVectors(this.max,Fr),qi.subVectors(e.a,Fr),Xi.subVectors(e.b,Fr),ji.subVectors(e.c,Fr),Vn.subVectors(Xi,qi),Gn.subVectors(ji,Xi),hi.subVectors(qi,ji);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-hi.y,hi.x,0];return!Sa(t,qi,Xi,ji,vs)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,qi,Xi,ji,vs))?!1:(ys.crossVectors(Vn,Gn),t=[ys.x,ys.y,ys.z],Sa(t,qi,Xi,ji,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,Ma=new Lr,qi=new R,Xi=new R,ji=new R,Vn=new R,Gn=new R,hi=new R,Fr=new R,vs=new R,ys=new R,di=new R;function Sa(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){di.fromArray(o,r);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _f=new Lr,Zl=new R,bs=new R,wa=new R;class Rr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(wa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?bs.set(0,0,1).multiplyScalar(e.radius):bs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Zl.copy(e.center).add(bs)),this.expandByPoint(Zl.copy(e.center).sub(bs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new R,Ta=new R,Ms=new R,Hn=new R,Ea=new R,Ss=new R,Aa=new R;class ia{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ms),a=Hn.dot(this.direction),l=-Hn.dot(Ms),c=Hn.lengthSq(),u=Math.abs(1-s*s);let d,h,m,g;if(u>0)if(d=s*l-a,h=s*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=r,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(s*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=s>0?-r:r,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Ms).multiplyScalar(h).add(Ta),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,r){Ea.subVectors(t,e),Ss.subVectors(n,e),Aa.crossVectors(Ea,Ss);let s=this.direction.dot(Aa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Hn.subVectors(this.origin,e);const l=a*this.direction.dot(Ss.crossVectors(Hn,Ss));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(Hn));if(c<0||l+c>s)return null;const u=-a*Hn.dot(Aa);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,d,h,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),s=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=s*u,m=s*d,g=a*u,f=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-f*c,t[9]=-a*l,t[2]=f-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h+f*a,t[4]=g*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=f+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h-f*a,t[4]=-s*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=f-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*d,g=a*u,f=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+f,t[1]=l*d,t[5]=f*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=a*l,f=a*c;t[0]=l*u,t[4]=f-h*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=s*l,m=s*c,g=a*l,f=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+f,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,vf)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Wn.crossVectors(n,Ot),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Wn.crossVectors(n,Ot)),Wn.normalize(),ws.crossVectors(Ot,Wn),i[0]=Wn.x,i[4]=ws.x,i[8]=Ot.x,i[1]=Wn.y,i[5]=ws.y,i[9]=Ot.y,i[2]=Wn.z,i[6]=ws.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],b=n[3],M=n[7],y=n[11],x=n[15],E=i[0],L=i[4],v=i[8],w=i[12],P=i[1],G=i[5],J=i[9],O=i[13],D=i[2],B=i[6],q=i[10],X=i[14],V=i[3],N=i[7],k=i[11],te=i[15];return r[0]=s*E+a*P+l*D+c*V,r[4]=s*L+a*G+l*B+c*N,r[8]=s*v+a*J+l*q+c*k,r[12]=s*w+a*O+l*X+c*te,r[1]=u*E+d*P+h*D+m*V,r[5]=u*L+d*G+h*B+m*N,r[9]=u*v+d*J+h*q+m*k,r[13]=u*w+d*O+h*X+m*te,r[2]=g*E+f*P+p*D+_*V,r[6]=g*L+f*G+p*B+_*N,r[10]=g*v+f*J+p*q+_*k,r[14]=g*w+f*O+p*X+_*te,r[3]=b*E+M*P+y*D+x*V,r[7]=b*L+M*G+y*B+x*N,r[11]=b*v+M*J+y*q+x*k,r[15]=b*w+M*O+y*X+x*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*m-n*l*m)+f*(+t*l*m-t*c*h+r*s*h-i*s*m+i*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*s*d+n*s*m+r*a*u-n*c*u)+_*(-i*a*u-t*l*d+t*a*h+i*s*d-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],b=d*p*c-f*h*c+f*l*m-a*p*m-d*l*_+a*h*_,M=g*h*c-u*p*c-g*l*m+s*p*m+u*l*_-s*h*_,y=u*f*c-g*d*c+g*a*m-s*f*m-u*a*_+s*d*_,x=g*d*l-u*f*l-g*a*h+s*f*h+u*a*p-s*d*p,E=t*b+n*M+i*y+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=b*L,e[1]=(f*h*r-d*p*r-f*i*m+n*p*m+d*i*_-n*h*_)*L,e[2]=(a*p*r-f*l*r+f*i*c-n*p*c-a*i*_+n*l*_)*L,e[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*m-n*l*m)*L,e[4]=M*L,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*L,e[6]=(g*l*r-s*p*r-g*i*c+t*p*c+s*i*_-t*l*_)*L,e[7]=(s*h*r-u*l*r+u*i*c-t*h*c-s*i*m+t*l*m)*L,e[8]=y*L,e[9]=(g*d*r-u*f*r-g*n*m+t*f*m+u*n*_-t*d*_)*L,e[10]=(s*f*r-g*a*r+g*n*c-t*f*c-s*n*_+t*a*_)*L,e[11]=(u*a*r-s*d*r-u*n*c+t*d*c+s*n*m-t*a*m)*L,e[12]=x*L,e[13]=(u*f*i-g*d*i+g*n*h-t*f*h-u*n*p+t*d*p)*L,e[14]=(g*a*i-s*f*i-g*n*l+t*f*l+s*n*p-t*a*p)*L,e[15]=(s*d*i-u*a*i+u*n*l-t*d*l-s*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,d=a+a,h=r*c,m=r*u,g=r*d,f=s*u,p=s*d,_=a*d,b=l*c,M=l*u,y=l*d,x=n.x,E=n.y,L=n.z;return i[0]=(1-(f+_))*x,i[1]=(m+y)*x,i[2]=(g-M)*x,i[3]=0,i[4]=(m-y)*E,i[5]=(1-(h+_))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+M)*L,i[9]=(p-b)*L,i[10]=(1-(h+f))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Yi.set(i[0],i[1],i[2]).length();const s=Yi.set(i[4],i[5],i[6]).length(),a=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,u=1/s,d=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(s+r)/(s-r),m=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),d=(t+e)*l,h=(n+i)*c,m=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new R,sn=new Fe,xf=new R(0,0,0),vf=new R(1,1,1),Wn=new R,ws=new R,Ot=new R,$l=new Fe,Jl=new Nn;class ds{constructor(e=0,t=0,n=0,i=ds.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ds.DefaultOrder="XYZ";ds.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yf=0;const Ql=new R,Ki=new Nn,Mn=new Fe,Ts=new R,Ur=new R,bf=new R,Mf=new Nn,ec=new R(1,0,0),tc=new R(0,1,0),nc=new R(0,0,1),Sf={type:"added"},ic={type:"removed"};class Qe extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new R,t=new ds,n=new Nn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Yt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DefaultMatrixWorldAutoUpdate,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ur,Ts,this.up):Mn.lookAt(Ts,Ur,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DefaultUp=new R(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;Qe.DefaultMatrixWorldAutoUpdate=!0;const an=new R,Sn=new R,Ca=new R,wn=new R,Zi=new R,$i=new R,rc=new R,La=new R,Ra=new R,Pa=new R;class Rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),Sn.subVectors(n,t),Ca.subVectors(e,t);const s=an.dot(an),a=an.dot(Sn),l=an.dot(Ca),c=Sn.dot(Sn),u=Sn.dot(Ca),d=s*c-a*a;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,g=(s*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,wn),l.set(0,0),l.addScaledVector(r,wn.x),l.addScaledVector(s,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Sn.subVectors(e,t),an.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Rn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Zi.subVectors(i,n),$i.subVectors(r,n),La.subVectors(e,n);const l=Zi.dot(La),c=$i.dot(La);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,i);const u=Zi.dot(Ra),d=$i.dot(Ra);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Zi,s);Pa.subVectors(e,r);const m=Zi.dot(Pa),g=$i.dot(Pa);if(g>=0&&m<=g)return t.copy(r);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return rc.subVectors(r,i),a=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(rc,a);const _=1/(p+f+h);return s=f*_,a=h*_,t.copy(n).addScaledVector(Zi,s).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wf=0;class mn extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=cr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yu,this.blendDst=bu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $n extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new R,Es=new ve;class zt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ou extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tf=0;const Wt=new Fe,Da=new Qe,Ji=new R,Nt=new Lr,zr=new Lr,dt=new R;class hn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Nu:Ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Nt.min,zr.min),Nt.expandByPoint(dt),dt.addVectors(Nt.max,zr.max),Nt.expandByPoint(dt)):(Nt.expandByPoint(zr.min),Nt.expandByPoint(zr.max))}Nt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dt.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),dt.add(Ji)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new R,u[P]=new R;const d=new R,h=new R,m=new R,g=new ve,f=new ve,p=new ve,_=new R,b=new R;function M(P,G,J){d.fromArray(i,P*3),h.fromArray(i,G*3),m.fromArray(i,J*3),g.fromArray(s,P*2),f.fromArray(s,G*2),p.fromArray(s,J*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const O=1/(f.x*p.y-p.x*f.y);!isFinite(O)||(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(O),b.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(O),c[P].add(_),c[G].add(_),c[J].add(_),u[P].add(b),u[G].add(b),u[J].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,G=y.length;P<G;++P){const J=y[P],O=J.start,D=J.count;for(let B=O,q=O+D;B<q;B+=3)M(n[B+0],n[B+1],n[B+2])}const x=new R,E=new R,L=new R,v=new R;function w(P){L.fromArray(r,P*3),v.copy(L);const G=c[P];x.copy(G),x.sub(L.multiplyScalar(L.dot(G))).normalize(),E.crossVectors(v,G);const O=E.dot(u[P])<0?-1:1;l[P*4]=x.x,l[P*4+1]=x.y,l[P*4+2]=x.z,l[P*4+3]=O}for(let P=0,G=y.length;P<G;++P){const J=y[P],O=J.start,D=J.count;for(let B=O,q=O+D;B<q;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new R,r=new R,s=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,p),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new zt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Fe,Qi=new ia,Ia=new Rr,qn=new R,Xn=new R,jn=new R,Oa=new R,Na=new R,Fa=new R,As=new R,Cs=new R,Ls=new R,Rs=new ve,Ps=new ve,Ds=new ve,Ua=new R,Is=new R;class ln extends Qe{constructor(e=new hn,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),e.ray.intersectsSphere(Ia)===!1)||(sc.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(sc),n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],b=i[_.materialIndex],M=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=M,E=y;x<E;x+=3){const L=a.getX(x),v=a.getX(x+1),w=a.getX(x+2);s=Os(this,b,e,Qi,l,c,u,d,h,L,v,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=f,b=p;_<b;_+=3){const M=a.getX(_),y=a.getX(_+1),x=a.getX(_+2);s=Os(this,i,e,Qi,l,c,u,d,h,M,y,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],b=i[_.materialIndex],M=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=M,E=y;x<E;x+=3){const L=x,v=x+1,w=x+2;s=Os(this,b,e,Qi,l,c,u,d,h,L,v,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=f,b=p;_<b;_+=3){const M=_,y=_+1,x=_+2;s=Os(this,i,e,Qi,l,c,u,d,h,M,y,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Ef(o,e,t,n,i,r,s,a){let l;if(e.side===Jt?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side!==Pn,a),l===null)return null;Is.copy(a),Is.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:o}}function Os(o,e,t,n,i,r,s,a,l,c,u,d){qn.fromBufferAttribute(i,c),Xn.fromBufferAttribute(i,u),jn.fromBufferAttribute(i,d);const h=o.morphTargetInfluences;if(r&&h){As.set(0,0,0),Cs.set(0,0,0),Ls.set(0,0,0);for(let g=0,f=r.length;g<f;g++){const p=h[g],_=r[g];p!==0&&(Oa.fromBufferAttribute(_,c),Na.fromBufferAttribute(_,u),Fa.fromBufferAttribute(_,d),s?(As.addScaledVector(Oa,p),Cs.addScaledVector(Na,p),Ls.addScaledVector(Fa,p)):(As.addScaledVector(Oa.sub(qn),p),Cs.addScaledVector(Na.sub(Xn),p),Ls.addScaledVector(Fa.sub(jn),p)))}qn.add(As),Xn.add(Cs),jn.add(Ls)}o.isSkinnedMesh&&(o.boneTransform(c,qn),o.boneTransform(u,Xn),o.boneTransform(d,jn));const m=Ef(o,e,t,n,qn,Xn,jn,Ua);if(m){a&&(Rs.fromBufferAttribute(a,c),Ps.fromBufferAttribute(a,u),Ds.fromBufferAttribute(a,d),m.uv=Rn.getUV(Ua,qn,Xn,jn,Rs,Ps,Ds,new ve)),l&&(Rs.fromBufferAttribute(l,c),Ps.fromBufferAttribute(l,u),Ds.fromBufferAttribute(l,d),m.uv2=Rn.getUV(Ua,qn,Xn,jn,Rs,Ps,Ds,new ve));const g={a:c,b:u,c:d,normal:new R,materialIndex:0};Rn.getNormal(qn,Xn,jn,g.normal),m.face=g}return m}class fs extends hn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(f,p,_,b,M,y,x,E,L,v,w){const P=y/L,G=x/v,J=y/2,O=x/2,D=E/2,B=L+1,q=v+1;let X=0,V=0;const N=new R;for(let k=0;k<q;k++){const te=k*G-O;for(let Q=0;Q<B;Q++){const ee=Q*P-J;N[f]=ee*b,N[p]=te*M,N[_]=D,c.push(N.x,N.y,N.z),N[f]=0,N[p]=0,N[_]=E>0?1:-1,u.push(N.x,N.y,N.z),d.push(Q/L),d.push(1-k/v),X+=1}}for(let k=0;k<v;k++)for(let te=0;te<L;te++){const Q=h+te+B*k,ee=h+te+B*(k+1),ae=h+(te+1)+B*(k+1),fe=h+(te+1)+B*k;l.push(Q,ee,fe),l.push(ee,ae,fe),V+=6}a.addGroup(m,V,w),m+=V,h+=X}}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(o){const e={};for(let t=0;t<o.length;t++){const n=vr(o[t]);for(const i in n)e[i]=n[i]}return e}function Af(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Cf={clone:vr,merge:xt};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fu extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Fu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=90,tr=1;class Pf extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(er,tr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new wt(er,tr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const s=new wt(er,tr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new R(0,1,0)),this.add(s);const a=new wt(er,tr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new wt(er,tr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new wt(er,tr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Bo extends Tt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Df extends Di{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fs(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ni});r.uniforms.tEquirect.value=t;const s=new ln(i,r),a=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Ct),new Pf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const za=new R,If=new R,Of=new Yt;class mi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Rr,Ns=new R;class Vo{constructor(e=new mi,t=new mi,n=new mi,i=new mi,r=new mi,s=new mi){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],b=n[14],M=n[15];return t[0].setComponents(a-i,d-l,f-h,M-p).normalize(),t[1].setComponents(a+i,d+l,f+h,M+p).normalize(),t[2].setComponents(a+r,d+c,f+m,M+_).normalize(),t[3].setComponents(a-r,d-c,f-m,M-_).normalize(),t[4].setComponents(a-s,d-u,f-g,M-b).normalize(),t[5].setComponents(a+s,d+u,f+g,M+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ns.x=i.normal.x>0?e.max.x:e.min.x,Ns.y=i.normal.y>0?e.max.y:e.min.y,Ns.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uu(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Nf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,m=u.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,h):(t?o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:s,remove:a,update:l}}class Go extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const b=_*h-s;for(let M=0;M<c;M++){const y=M*d-r;g.push(y,-b,0),f.push(0,0,1),p.push(M/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const M=b+c*_,y=b+c*(_+1),x=b+1+c*(_+1),E=b+1+c*_;m.push(M,y,E),m.push(y,x,E)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2))}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf="vec3 transformed = vec3( position );",Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,qf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Tp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Dp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Zp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Em=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Am=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$m=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Ff,alphamap_pars_fragment:Uf,alphatest_fragment:zf,alphatest_pars_fragment:kf,aomap_fragment:Bf,aomap_pars_fragment:Vf,begin_vertex:Gf,beginnormal_vertex:Hf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Zf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Qf,color_vertex:ep,common:tp,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:rp,displacementmap_vertex:sp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,encodings_fragment:lp,encodings_pars_fragment:cp,envmap_fragment:up,envmap_common_pars_fragment:hp,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Tp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:vp,lightmap_fragment:yp,lightmap_pars_fragment:bp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:wp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Dp,lights_fragment_maps:Ip,lights_fragment_end:Op,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:zp,map_fragment:kp,map_pars_fragment:Bp,map_particle_fragment:Vp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Wp,morphcolor_vertex:qp,morphnormal_vertex:Xp,morphtarget_pars_vertex:jp,morphtarget_vertex:Yp,normal_fragment_begin:Kp,normal_fragment_maps:Zp,normal_pars_fragment:$p,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:rm,output_fragment:sm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:um,roughnessmap_fragment:hm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:xm,skinning_vertex:vm,skinnormal_vertex:ym,specularmap_fragment:bm,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Em,uv_pars_fragment:Am,uv_pars_vertex:Cm,uv_vertex:Lm,uv2_pars_fragment:Rm,uv2_pars_vertex:Pm,uv2_vertex:Dm,worldpos_vertex:Im,background_vert:Om,background_frag:Nm,cube_vert:Fm,cube_frag:Um,depth_vert:zm,depth_frag:km,distanceRGBA_vert:Bm,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:Hm,linedashed_vert:Wm,linedashed_frag:qm,meshbasic_vert:Xm,meshbasic_frag:jm,meshlambert_vert:Ym,meshlambert_frag:Km,meshmatcap_vert:Zm,meshmatcap_frag:$m,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},ie={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},fn={basic:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:xt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:xt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:xt([ie.points,ie.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:xt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:xt([ie.common,ie.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:xt([ie.sprite,ie.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:xt([ie.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:xt([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:xt([ie.lights,ie.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};fn.physical={uniforms:xt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function dg(o,e,t,n,i,r){const s=new Me(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function m(f,p){let _=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?g(s,a):b&&b.isColor&&(g(b,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),b&&(b.isCubeTexture||b.mapping===na)?(c===void 0&&(c=new ln(new fs(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:vr(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||d!==b.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=o.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ln(new Go(2,2),new Ii({name:"BackgroundMaterial",uniforms:vr(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,r)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),a=p,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,g(s,a)},render:m}}function fg(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function d(D,B,q,X,V){let N=!1;if(s){const k=f(X,q,B);c!==k&&(c=k,m(c.object)),N=_(D,X,q,V),N&&b(D,X,q,V)}else{const k=B.wireframe===!0;(c.geometry!==X.id||c.program!==q.id||c.wireframe!==k)&&(c.geometry=X.id,c.program=q.id,c.wireframe=k,N=!0)}V!==null&&t.update(V,34963),(N||u)&&(u=!1,v(D,B,q,X),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,B,q){const X=q.wireframe===!0;let V=a[D.id];V===void 0&&(V={},a[D.id]=V);let N=V[B.id];N===void 0&&(N={},V[B.id]=N);let k=N[X];return k===void 0&&(k=p(h()),N[X]=k),k}function p(D){const B=[],q=[],X=[];for(let V=0;V<i;V++)B[V]=0,q[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:X,object:D,attributes:{},index:null}}function _(D,B,q,X){const V=c.attributes,N=B.attributes;let k=0;const te=q.getAttributes();for(const Q in te)if(te[Q].location>=0){const ae=V[Q];let fe=N[Q];if(fe===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;k++}return c.attributesNum!==k||c.index!==X}function b(D,B,q,X){const V={},N=B.attributes;let k=0;const te=q.getAttributes();for(const Q in te)if(te[Q].location>=0){let ae=N[Q];ae===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),V[Q]=fe,k++}c.attributes=V,c.attributesNum=k,c.index=X}function M(){const D=c.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function y(D){x(D,0)}function x(D,B){const q=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;q[D]=1,X[D]===0&&(o.enableVertexAttribArray(D),X[D]=1),V[D]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),V[D]=B)}function E(){const D=c.newAttributes,B=c.enabledAttributes;for(let q=0,X=B.length;q<X;q++)B[q]!==D[q]&&(o.disableVertexAttribArray(q),B[q]=0)}function L(D,B,q,X,V,N){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(D,B,q,V,N):o.vertexAttribPointer(D,B,q,X,V,N)}function v(D,B,q,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=X.attributes,N=q.getAttributes(),k=B.defaultAttributeValues;for(const te in N){const Q=N[te];if(Q.location>=0){let ee=V[te];if(ee===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ae=ee.normalized,fe=ee.itemSize,Y=t.get(ee);if(Y===void 0)continue;const De=Y.buffer,_e=Y.type,ge=Y.bytesPerElement;if(ee.isInterleavedBufferAttribute){const he=ee.data,Ce=he.stride,Se=ee.offset;if(he.isInstancedInterleavedBuffer){for(let pe=0;pe<Q.locationSize;pe++)x(Q.location+pe,he.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<Q.locationSize;pe++)y(Q.location+pe);o.bindBuffer(34962,De);for(let pe=0;pe<Q.locationSize;pe++)L(Q.location+pe,fe/Q.locationSize,_e,ae,Ce*ge,(Se+fe/Q.locationSize*pe)*ge)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<Q.locationSize;he++)x(Q.location+he,ee.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<Q.locationSize;he++)y(Q.location+he);o.bindBuffer(34962,De);for(let he=0;he<Q.locationSize;he++)L(Q.location+he,fe/Q.locationSize,_e,ae,fe*ge,fe/Q.locationSize*he*ge)}}else if(k!==void 0){const ae=k[te];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(Q.location,ae);break;case 3:o.vertexAttrib3fv(Q.location,ae);break;case 4:o.vertexAttrib4fv(Q.location,ae);break;default:o.vertexAttrib1fv(Q.location,ae)}}}}E()}function w(){J();for(const D in a){const B=a[D];for(const q in B){const X=B[q];for(const V in X)g(X[V].object),delete X[V];delete B[q]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const q in B){const X=B[q];for(const V in X)g(X[V].object),delete X[V];delete B[q]}delete a[D.id]}function G(D){for(const B in a){const q=a[B];if(q[D.id]===void 0)continue;const X=q[D.id];for(const V in X)g(X[V].object),delete X[V];delete q[D.id]}}function J(){O(),u=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:y,disableUnusedAttributes:E}}function pg(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,d),t.update(u,r,d)}this.setMode=s,this.render=a,this.renderInstances=l}function mg(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),M=h>0,y=s||e.has("OES_texture_float"),x=M&&y,E=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:E}}function gg(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new mi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const g=d.length!==0||h||n!==0||i;return i=h,t=u(d,m,0),n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=o.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,M=b*4;let y=_.clippingState||null;l.value=y,y=u(g,h,M,m);for(let x=0;x!==M;++x)y[x]=t[x];_.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let M=0,y=m;M!==f;++M,y+=4)s.copy(d[M]).applyMatrix4(b,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function _g(o){let e=new WeakMap;function t(s,a){return a===so?s.mapping=pr:a===ao&&(s.mapping=mr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===so||a===ao)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Df(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ho extends Fu{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,ac=[.125,.215,.35,.446,.526,.582],vi=20,ka=new Ho,oc=new Me;let Ba=null;const gi=(1+Math.sqrt(5))/2,ir=1/gi,lc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,gi,ir),new R(0,gi,-ir),new R(ir,0,gi),new R(-ir,0,gi),new R(gi,ir,0),new R(-gi,ir,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba),e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Qr,format:on,encoding:Pi,depthBuffer:!1},i=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,e,t)}return i}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(oc),u.toneMapping=On,u.autoClear=!1;const m=new $n({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new ln(new fs,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(oc),f=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;Fs(i,b*M,_>2?M:0,M,M),u.setRenderTarget(i),f&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pr||e.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=lc[(i-1)%lc.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ln(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):vi;p>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const _=[];let b=0;for(let L=0;L<vi;++L){const v=L/f,w=Math.exp(-v*v/2);_.push(w),L===0?b+=w:L<p&&(b+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const y=this._sizeLods[i],x=3*y*(i>M-ar?i-M+ar:0),E=4*(this._cubeSize-y);Fs(t,x,E,3*y,2*y),l.setRenderTarget(t),l.render(d,ka)}}function xg(o){const e=[],t=[],n=[];let i=o;const r=o-ar+1+ac.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-ar?l=ac[s-o+ar-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,f=3,p=2,_=1,b=new Float32Array(f*g*m),M=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let E=0;E<m;E++){const L=E%3*2/3-1,v=E>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];b.set(w,f*g*E),M.set(h,p*g*E);const P=[E,E,E,E,E,E];y.set(P,_*g*E)}const x=new hn;x.setAttribute("position",new zt(b,f)),x.setAttribute("uv",new zt(M,p)),x.setAttribute("faceIndex",new zt(y,_)),e.push(x),i>ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(o,e,t){const n=new Di(o,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function vg(o,e,t){const n=new Float32Array(vi),i=new R(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hc(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function dc(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function yg(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===ao,u=l===pr||l===mr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new cc(o)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new cc(o));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function bg(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mg(o,e,t,n){const i={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const b=m.array;f=m.version;for(let M=0,y=b.length;M<y;M+=3){const x=b[M+0],E=b[M+1],L=b[M+2];h.push(x,E,E,L,L,x)}}else{const b=g.array;f=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const x=M+0,E=M+1,L=M+2;h.push(x,E,E,L,L,x)}}const p=new(Lu(h)?Nu:Ou)(h,1);p.version=f;const _=r.get(d);_&&e.remove(_),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Sg(o,e,t,n){const i=n.isWebGL2;let r;function s(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,a,h*l),t.update(m,r,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,a,h*l,g),t.update(m,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function wg(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tg(o,e){return o[0]-e[0]}function Eg(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Ag(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new We,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let q=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var g=q;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),x===!0&&(P=2),E===!0&&(P=3);let G=u.attributes.position.count*P,J=1;G>e.maxTextureSize&&(J=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const O=new Float32Array(G*J*4*p),D=new Iu(O,G,J,p);D.type=Zn,D.needsUpdate=!0;const B=P*4;for(let X=0;X<p;X++){const V=L[X],N=v[X],k=w[X],te=G*J*4*X;for(let Q=0;Q<V.count;Q++){const ee=Q*B;y===!0&&(s.fromBufferAttribute(V,Q),O[te+ee+0]=s.x,O[te+ee+1]=s.y,O[te+ee+2]=s.z,O[te+ee+3]=0),x===!0&&(s.fromBufferAttribute(N,Q),O[te+ee+4]=s.x,O[te+ee+5]=s.y,O[te+ee+6]=s.z,O[te+ee+7]=0),E===!0&&(s.fromBufferAttribute(k,Q),O[te+ee+8]=s.x,O[te+ee+9]=s.y,O[te+ee+10]=s.z,O[te+ee+11]=k.itemSize===4?s.w:1)}}_={count:p,texture:D,size:new ve(G,J)},r.set(u,_),u.addEventListener("dispose",q)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const M=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<f;x++){const E=p[x];E[0]=x,E[1]=m[x]}p.sort(Eg);for(let x=0;x<8;x++)x<f&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Tg);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const E=a[x],L=E[0],v=E[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),b&&u.getAttribute("morphNormal"+x)!==b[L]&&u.setAttribute("morphNormal"+x,b[L]),i[x]=v,M+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),b&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Cg(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const zu=new Tt,ku=new Iu,Bu=new gf,Vu=new Bo,fc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function Pr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=fc[i];if(r===void 0&&(r=new Float32Array(i),fc[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Et(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function At(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ra(o,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Lg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Rg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2fv(this.addr,e),At(t,e)}}function Pg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;o.uniform3fv(this.addr,e),At(t,e)}}function Dg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4fv(this.addr,e),At(t,e)}}function Ig(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;_c.set(n),o.uniformMatrix2fv(this.addr,!1,_c),At(t,n)}}function Og(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;gc.set(n),o.uniformMatrix3fv(this.addr,!1,gc),At(t,n)}}function Ng(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;mc.set(n),o.uniformMatrix4fv(this.addr,!1,mc),At(t,n)}}function Fg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Ug(o,e){const t=this.cache;Et(t,e)||(o.uniform2iv(this.addr,e),At(t,e))}function zg(o,e){const t=this.cache;Et(t,e)||(o.uniform3iv(this.addr,e),At(t,e))}function kg(o,e){const t=this.cache;Et(t,e)||(o.uniform4iv(this.addr,e),At(t,e))}function Bg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Vg(o,e){const t=this.cache;Et(t,e)||(o.uniform2uiv(this.addr,e),At(t,e))}function Gg(o,e){const t=this.cache;Et(t,e)||(o.uniform3uiv(this.addr,e),At(t,e))}function Hg(o,e){const t=this.cache;Et(t,e)||(o.uniform4uiv(this.addr,e),At(t,e))}function Wg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||zu,i)}function qg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bu,i)}function Xg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vu,i)}function jg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ku,i)}function Yg(o){switch(o){case 5126:return Lg;case 35664:return Rg;case 35665:return Pg;case 35666:return Dg;case 35674:return Ig;case 35675:return Og;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Ug;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return Vg;case 36295:return Gg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return jg}}function Kg(o,e){o.uniform1fv(this.addr,e)}function Zg(o,e){const t=Pr(e,this.size,2);o.uniform2fv(this.addr,t)}function $g(o,e){const t=Pr(e,this.size,3);o.uniform3fv(this.addr,t)}function Jg(o,e){const t=Pr(e,this.size,4);o.uniform4fv(this.addr,t)}function Qg(o,e){const t=Pr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function e_(o,e){const t=Pr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function t_(o,e){const t=Pr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function n_(o,e){o.uniform1iv(this.addr,e)}function i_(o,e){o.uniform2iv(this.addr,e)}function r_(o,e){o.uniform3iv(this.addr,e)}function s_(o,e){o.uniform4iv(this.addr,e)}function a_(o,e){o.uniform1uiv(this.addr,e)}function o_(o,e){o.uniform2uiv(this.addr,e)}function l_(o,e){o.uniform3uiv(this.addr,e)}function c_(o,e){o.uniform4uiv(this.addr,e)}function u_(o,e,t){const n=e.length,i=ra(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||zu,i[r])}function h_(o,e,t){const n=e.length,i=ra(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Bu,i[r])}function d_(o,e,t){const n=e.length,i=ra(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Vu,i[r])}function f_(o,e,t){const n=e.length,i=ra(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ku,i[r])}function p_(o){switch(o){case 5126:return Kg;case 35664:return Zg;case 35665:return $g;case 35666:return Jg;case 35674:return Qg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return r_;case 35669:case 35673:return s_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Yg(t.type)}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=p_(t.type)}}class __{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function xc(o,e){o.seq.push(e),o.map[e.id]=e}function x_(o,e,t){const n=o.name,i=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),s=Va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){xc(t,c===void 0?new m_(a,o,e):new g_(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new __(a),xc(t,d)),t=d}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);x_(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function vc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let v_=0;function y_(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function b_(o){switch(o){case Pi:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function yc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+y_(o.getShaderSource(e),s)}else return i}function M_(o,e){const t=b_(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function S_(o,e){let t;switch(e){case Ld:t="Linear";break;case Rd:t="Reinhard";break;case Pd:t="OptimizedCineon";break;case Su:t="ACESFilmic";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function w_(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function T_(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E_(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Wr(o){return o!==""}function bc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(o){return o.replace(A_,C_)}function C_(o,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fo(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(o){return o.replace(L_,R_)}function R_(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function N_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F_(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=P_(t),c=D_(t),u=I_(t),d=O_(t),h=N_(t),m=t.isWebGL2?"":w_(t),g=T_(r),f=i.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Wr).join(`
`),_.length>0&&(_+=`
`)):(p=[wc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),_=[m,wc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ee.tonemapping_pars_fragment:"",t.toneMapping!==On?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,M_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),s=fo(s),s=bc(s,t),s=Mc(s,t),a=fo(a),a=bc(a,t),a=Mc(a,t),s=Sc(s),a=Sc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=b+p+s,y=b+_+a,x=vc(i,35633,M),E=vc(i,35632,y);if(i.attachShader(f,x),i.attachShader(f,E),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(x).trim(),G=i.getShaderInfoLog(E).trim();let J=!0,O=!0;if(i.getProgramParameter(f,35714)===!1){J=!1;const D=yc(i,x,"vertex"),B=yc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+D+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||G==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(x),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Hs(i,f)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=E_(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=E,this}let U_=0;class z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k_(e),t.set(e,n)),n}}class k_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function B_(o,e,t,n,i,r,s){const a=new ko,l=new z_,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,w,P,G,J){const O=G.fog,D=J.geometry,B=v.isMeshStandardMaterial?G.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),X=!!q&&q.mapping===na?q.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const N=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=N!==void 0?N.length:0;let te=0;D.morphAttributes.position!==void 0&&(te=1),D.morphAttributes.normal!==void 0&&(te=2),D.morphAttributes.color!==void 0&&(te=3);let Q,ee,ae,fe;if(V){const Ce=fn[V];Q=Ce.vertexShader,ee=Ce.fragmentShader}else Q=v.vertexShader,ee=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),fe=l.getFragmentShaderID(v);const Y=o.getRenderTarget(),De=v.alphaTest>0,_e=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:Q,fragmentShader:ee,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y===null?o.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Pi,map:!!v.map,matcap:!!v.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:X,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Jd,tangentSpaceNormalMap:v.normalMapType===Uo,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ze,clearcoat:_e,clearcoatMap:_e&&!!v.clearcoatMap,clearcoatRoughnessMap:_e&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===cr,alphaMap:!!v.alphaMap,alphaTest:De,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:On,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===Jt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(w,v),b(w,v),w.push(o.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function M(v){const w=g[v.type];let P;if(w){const G=fn[w];P=Cf.clone(G.uniforms)}else P=v.uniforms;return P}function y(v,w){let P;for(let G=0,J=c.length;G<J;G++){const O=c[G];if(O.cacheKey===w){P=O,++P.usedTimes;break}}return P===void 0&&(P=new F_(o,w,v,r),c.push(P)),P}function x(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:L}}function V_(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function G_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Tc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ec(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(d,h,m,g,f,p){let _=o[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},o[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),e++,_}function a(d,h,m,g,f,p){const _=s(d,h,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,h,m,g,f,p){const _=s(d,h,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||G_),n.length>1&&n.sort(h||Tc),i.length>1&&i.sort(h||Tc)}function u(){for(let d=e,h=o.length;d<h;d++){const m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function H_(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new Ec,o.set(n,[s])):i>=r.length?(s=new Ec,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function W_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Me};break;case"SpotLight":t={position:new R,direction:new R,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new R,halfWidth:new R,halfHeight:new R};break}return o[e.id]=t,t}}}function q_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let X_=0;function j_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Y_(o,e){const t=new W_,n=q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const r=new R,s=new Fe,a=new Fe;function l(u,d){let h=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,p=0,_=0,b=0,M=0,y=0,x=0,E=0,L=0,v=0;u.sort(j_);const w=d!==!0?Math.PI:1;for(let G=0,J=u.length;G<J;G++){const O=u[G],D=O.color,B=O.intensity,q=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=D.r*B*w,m+=D.g*B*w,g+=D.b*B*w;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],B);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const N=O.shadow,k=n.get(O);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=O.shadow.matrix,y++}i.directional[f]=V,f++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(D).multiplyScalar(B*w),V.distance=q,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[_]=V;const N=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,N.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[_]=N.matrix,O.castShadow){const k=n.get(O);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=X,E++}_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(D).multiplyScalar(B),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=V,b++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),V.distance=O.distance,V.decay=O.decay,O.castShadow){const N=O.shadow,k=n.get(O);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=O.shadow.matrix,x++}i.point[p]=V,p++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(B*w),V.groundColor.copy(O.groundColor).multiplyScalar(B*w),i.hemi[M]=V,M++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==M||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==E||P.numSpotMaps!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=M,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=E,P.numSpotMaps=L,i.version=X_++)}function c(u,d){let h=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const y=u[b];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),h++}else if(y.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),a.identity(),s.copy(y.matrixWorld),s.premultiply(_),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Ac(o,e){const t=new Y_(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function K_(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Ac(o,e),t.set(r,[l])):s>=a.length?(l=new Ac(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Z_ extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
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
}`;function e0(o,e,t){let n=new Vo;const i=new ve,r=new ve,s=new We,a=new Z_({depthPacking:$d}),l=new $_,c={},u=t.maxTextureSize,d={0:Jt,1:Li,2:Pn},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:J_,fragmentShader:Q_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new ln(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu,this.render=function(y,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),v=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),P=o.state;P.setBlending(ni),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let G=0,J=y.length;G<J;G++){const O=y[G],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,D.mapSize.y=r.y)),D.map===null){const X=this.type!==Hr?{minFilter:pt,magFilter:pt}:{};D.map=new Di(i.x,i.y,X),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const q=D.getViewportCount();for(let X=0;X<q;X++){const V=D.getViewport(X);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(s),D.updateMatrices(O,X),n=D.getFrustum(),M(x,E,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===Hr&&_(D,E),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,v,w)};function _(y,x){const E=e.update(f);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Di(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(x,null,E,h,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(x,null,E,m,f,null)}function b(y,x,E,L,v,w){let P=null;const G=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?P=G:P=E.isPointLight===!0?l:a,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const J=P.uuid,O=x.uuid;let D=c[J];D===void 0&&(D={},c[J]=D);let B=D[O];B===void 0&&(B=P.clone(),D[O]=B),P=B}return P.visible=x.visible,P.wireframe=x.wireframe,w===Hr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:d[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaTest,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=L,P.farDistance=v),P}function M(y,x,E,L,v){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Hr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const G=e.update(y),J=y.material;if(Array.isArray(J)){const O=G.groups;for(let D=0,B=O.length;D<B;D++){const q=O[D],X=J[q.materialIndex];if(X&&X.visible){const V=b(y,X,L,E.near,E.far,v);o.renderBufferDirect(E,null,G,V,y,q)}}}else if(J.visible){const O=b(y,J,L,E.near,E.far,v);o.renderBufferDirect(E,null,G,O,y,null)}}const P=y.children;for(let G=0,J=P.length;G<J;G++)M(P[G],x,E,L,v)}}function t0(o,e,t){const n=t.isWebGL2;function i(){let I=!1;const se=new We;let H=null;const de=new We(0,0,0,0);return{setMask:function(ue){H!==ue&&!I&&(o.colorMask(ue,ue,ue,ue),H=ue)},setLocked:function(ue){I=ue},setClear:function(ue,Ne,ht,nt,kn){kn===!0&&(ue*=nt,Ne*=nt,ht*=nt),se.set(ue,Ne,ht,nt),de.equals(se)===!1&&(o.clearColor(ue,Ne,ht,nt),de.copy(se))},reset:function(){I=!1,H=null,de.set(-1,0,0,0)}}}function r(){let I=!1,se=null,H=null,de=null;return{setTest:function(ue){ue?De(2929):_e(2929)},setMask:function(ue){se!==ue&&!I&&(o.depthMask(ue),se=ue)},setFunc:function(ue){if(H!==ue){if(ue)switch(ue){case yd:o.depthFunc(512);break;case bd:o.depthFunc(519);break;case Md:o.depthFunc(513);break;case ro:o.depthFunc(515);break;case Sd:o.depthFunc(514);break;case wd:o.depthFunc(518);break;case Td:o.depthFunc(516);break;case Ed:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);H=ue}},setLocked:function(ue){I=ue},setClear:function(ue){de!==ue&&(o.clearDepth(ue),de=ue)},reset:function(){I=!1,se=null,H=null,de=null}}}function s(){let I=!1,se=null,H=null,de=null,ue=null,Ne=null,ht=null,nt=null,kn=null;return{setTest:function(Ke){I||(Ke?De(2960):_e(2960))},setMask:function(Ke){se!==Ke&&!I&&(o.stencilMask(Ke),se=Ke)},setFunc:function(Ke,vn,Gt){(H!==Ke||de!==vn||ue!==Gt)&&(o.stencilFunc(Ke,vn,Gt),H=Ke,de=vn,ue=Gt)},setOp:function(Ke,vn,Gt){(Ne!==Ke||ht!==vn||nt!==Gt)&&(o.stencilOp(Ke,vn,Gt),Ne=Ke,ht=vn,nt=Gt)},setLocked:function(Ke){I=Ke},setClear:function(Ke){kn!==Ke&&(o.clearStencil(Ke),kn=Ke)},reset:function(){I=!1,se=null,H=null,de=null,ue=null,Ne=null,ht=null,nt=null,kn=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,_=!1,b=null,M=null,y=null,x=null,E=null,L=null,v=null,w=!1,P=null,G=null,J=null,O=null,D=null;const B=o.getParameter(35661);let q=!1,X=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=X>=2);let N=null,k={};const te=o.getParameter(3088),Q=o.getParameter(2978),ee=new We().fromArray(te),ae=new We().fromArray(Q);function fe(I,se,H){const de=new Uint8Array(4),ue=o.createTexture();o.bindTexture(I,ue),o.texParameteri(I,10241,9728),o.texParameteri(I,10240,9728);for(let Ne=0;Ne<H;Ne++)o.texImage2D(se+Ne,0,6408,1,1,0,6408,5121,de);return ue}const Y={};Y[3553]=fe(3553,3553,1),Y[34067]=fe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(ro),tt(!1),gt(_l),De(2884),qe(ni);function De(I){h[I]!==!0&&(o.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(o.disable(I),h[I]=!1)}function ge(I,se){return m[I]!==se?(o.bindFramebuffer(I,se),m[I]=se,n&&(I===36009&&(m[36160]=se),I===36160&&(m[36009]=se)),!0):!1}function he(I,se){let H=f,de=!1;if(I)if(H=g.get(se),H===void 0&&(H=[],g.set(se,H)),I.isWebGLMultipleRenderTargets){const ue=I.texture;if(H.length!==ue.length||H[0]!==36064){for(let Ne=0,ht=ue.length;Ne<ht;Ne++)H[Ne]=36064+Ne;H.length=ue.length,de=!0}}else H[0]!==36064&&(H[0]=36064,de=!0);else H[0]!==1029&&(H[0]=1029,de=!0);de&&(t.isWebGL2?o.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ce(I){return p!==I?(o.useProgram(I),p=I,!0):!1}const Se={[sr]:32774,[cd]:32778,[ud]:32779};if(n)Se[bl]=32775,Se[Ml]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Se[bl]=I.MIN_EXT,Se[Ml]=I.MAX_EXT)}const pe={[hd]:0,[dd]:1,[fd]:768,[yu]:770,[vd]:776,[_d]:774,[md]:772,[pd]:769,[bu]:771,[xd]:775,[gd]:773};function qe(I,se,H,de,ue,Ne,ht,nt){if(I===ni){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),I!==ld){if(I!==b||nt!==w){if((M!==sr||E!==sr)&&(o.blendEquation(32774),M=sr,E=sr),nt)switch(I){case cr:o.blendFuncSeparate(1,771,1,771);break;case xl:o.blendFunc(1,1);break;case vl:o.blendFuncSeparate(0,769,0,1);break;case yl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cr:o.blendFuncSeparate(770,771,1,771);break;case xl:o.blendFunc(770,1);break;case vl:o.blendFuncSeparate(0,769,0,1);break;case yl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,L=null,v=null,b=I,w=nt}return}ue=ue||se,Ne=Ne||H,ht=ht||de,(se!==M||ue!==E)&&(o.blendEquationSeparate(Se[se],Se[ue]),M=se,E=ue),(H!==y||de!==x||Ne!==L||ht!==v)&&(o.blendFuncSeparate(pe[H],pe[de],pe[Ne],pe[ht]),y=H,x=de,L=Ne,v=ht),b=I,w=null}function et(I,se){I.side===Pn?_e(2884):De(2884);let H=I.side===Jt;se&&(H=!H),tt(H),I.blending===cr&&I.transparent===!1?qe(ni):qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const de=I.stencilWrite;c.setTest(de),de&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),we(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?De(32926):_e(32926)}function tt(I){P!==I&&(I?o.frontFace(2304):o.frontFace(2305),P=I)}function gt(I){I!==sd?(De(2884),I!==G&&(I===_l?o.cullFace(1029):I===ad?o.cullFace(1028):o.cullFace(1032))):_e(2884),G=I}function Ye(I){I!==J&&(q&&o.lineWidth(I),J=I)}function we(I,se,H){I?(De(32823),(O!==se||D!==H)&&(o.polygonOffset(se,H),O=se,D=H)):_e(32823)}function ot(I){I?De(3089):_e(3089)}function ut(I){I===void 0&&(I=33984+B-1),N!==I&&(o.activeTexture(I),N=I)}function A(I,se){N===null&&ut();let H=k[N];H===void 0&&(H={type:void 0,texture:void 0},k[N]=H),(H.type!==I||H.texture!==se)&&(o.bindTexture(I,se||Y[I]),H.type=I,H.texture=se)}function S(){const I=k[N];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function U(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(I){ee.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function le(I){ae.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function xe(I,se){let H=d.get(se);H===void 0&&(H=new WeakMap,d.set(se,H));let de=H.get(I);de===void 0&&(de=o.getUniformBlockIndex(se,I.name),H.set(I,de))}function Le(I,se){const de=d.get(se).get(I);u.get(I)!==de&&(o.uniformBlockBinding(se,de,I.__bindingPointIndex),u.set(I,de))}function Xe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},N=null,k={},m={},g=new WeakMap,f=[],p=null,_=!1,b=null,M=null,y=null,x=null,E=null,L=null,v=null,w=!1,P=null,G=null,J=null,O=null,D=null,ee.set(0,0,o.canvas.width,o.canvas.height),ae.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:_e,bindFramebuffer:ge,drawBuffers:he,useProgram:Ce,setBlending:qe,setMaterial:et,setFlipSided:tt,setCullFace:gt,setLineWidth:Ye,setPolygonOffset:we,setScissorTest:ot,activeTexture:ut,bindTexture:A,unbindTexture:S,compressedTexImage2D:U,texImage2D:Z,texImage3D:ne,updateUBOMapping:xe,uniformBlockBinding:Le,texStorage2D:ce,texStorage3D:T,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:re,scissor:oe,viewport:le,reset:Xe}}function n0(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return _?new OffscreenCanvas(A,S):ns("canvas")}function M(A,S,U,$){let j=1;if((A.width>$||A.height>$)&&(j=$/Math.max(A.width,A.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=S?js:Math.floor,ce=re(j*A.width),T=re(j*A.height);f===void 0&&(f=b(ce,T));const Z=U?b(ce,T):f;return Z.width=ce,Z.height=T,Z.getContext("2d").drawImage(A,0,0,ce,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ce+"x"+T+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return ho(A.width)&&ho(A.height)}function x(A){return a?!1:A.wrapS!==jt||A.wrapT!==jt||A.minFilter!==pt&&A.minFilter!==Ct}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==pt&&A.minFilter!==Ct}function L(A){o.generateMipmap(A)}function v(A,S,U,$,j=!1){if(a===!1)return S;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=S;return S===6403&&(U===5126&&(re=33326),U===5131&&(re=33325),U===5121&&(re=33321)),S===33319&&(U===5126&&(re=33328),U===5131&&(re=33327),U===5121&&(re=33323)),S===6408&&(U===5126&&(re=34836),U===5131&&(re=34842),U===5121&&(re=$===ze&&j===!1?35907:32856),U===32819&&(re=32854),U===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function w(A,S,U){return E(A,U)===!0||A.isFramebufferTexture&&A.minFilter!==pt&&A.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===pt||A===oo||A===lo?9728:9729}function G(A){const S=A.target;S.removeEventListener("dispose",G),O(S),S.isVideoTexture&&g.delete(S)}function J(A){const S=A.target;S.removeEventListener("dispose",J),B(S)}function O(A){const S=n.get(A);if(S.__webglInit===void 0)return;const U=A.source,$=p.get(U);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(A),Object.keys($).length===0&&p.delete(U)}n.remove(A)}function D(A){const S=n.get(A);o.deleteTexture(S.__webglTexture);const U=A.source,$=p.get(U);delete $[S.__cacheKey],s.memory.textures--}function B(A){const S=A.texture,U=n.get(A),$=n.get(S);if($.__webglTexture!==void 0&&(o.deleteTexture($.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)o.deleteFramebuffer(U.__webglFramebuffer[j]),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer[j]);else{if(o.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&o.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let j=0;j<U.__webglColorRenderbuffer.length;j++)U.__webglColorRenderbuffer[j]&&o.deleteRenderbuffer(U.__webglColorRenderbuffer[j]);U.__webglDepthRenderbuffer&&o.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,re=S.length;j<re;j++){const ce=n.get(S[j]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),s.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(A)}let q=0;function X(){q=0}function V(){const A=q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),q+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function k(A,S){const U=n.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(U,A,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,U.__webglTexture)}function te(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){_e(U,A,S);return}t.activeTexture(33984+S),t.bindTexture(35866,U.__webglTexture)}function Q(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){_e(U,A,S);return}t.activeTexture(33984+S),t.bindTexture(32879,U.__webglTexture)}function ee(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){ge(U,A,S);return}t.activeTexture(33984+S),t.bindTexture(34067,U.__webglTexture)}const ae={[gr]:10497,[jt]:33071,[Xs]:33648},fe={[pt]:9728,[oo]:9984,[lo]:9986,[Ct]:9729,[Tu]:9985,[Cr]:9987};function Y(A,S,U){if(U?(o.texParameteri(A,10242,ae[S.wrapS]),o.texParameteri(A,10243,ae[S.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,ae[S.wrapR]),o.texParameteri(A,10240,fe[S.magFilter]),o.texParameteri(A,10241,fe[S.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(S.wrapS!==jt||S.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,P(S.magFilter)),o.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==pt&&S.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(S.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Qr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function De(A,S){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",G));const $=S.source;let j=p.get($);j===void 0&&(j={},p.set($,j));const re=N(S);if(re!==A.__cacheKey){j[re]===void 0&&(j[re]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,U=!0),j[re].usedTimes++;const ce=j[A.__cacheKey];ce!==void 0&&(j[A.__cacheKey].usedTimes--,ce.usedTimes===0&&D(S)),A.__cacheKey=re,A.__webglTexture=j[re].texture}return U}function _e(A,S,U){let $=3553;S.isDataArrayTexture&&($=35866),S.isData3DTexture&&($=32879);const j=De(A,S),re=S.source;if(t.activeTexture(33984+U),t.bindTexture($,A.__webglTexture),re.version!==re.__currentVersion||j===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const ce=x(S)&&y(S.image)===!1;let T=M(S.image,ce,!1,u);T=ut(S,T);const Z=y(T)||a,ne=r.convert(S.format,S.encoding);let oe=r.convert(S.type),le=v(S.internalFormat,ne,oe,S.encoding,S.isVideoTexture);Y($,S,Z);let xe;const Le=S.mipmaps,Xe=a&&S.isVideoTexture!==!0,I=re.__currentVersion===void 0||j===!0,se=w(S,T,Z);if(S.isDepthTexture)le=6402,a?S.type===Zn?le=36012:S.type===yi?le=33190:S.type===ur?le=35056:le=33189:S.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Si&&le===6402&&S.type!==Eu&&S.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=yi,oe=r.convert(S.type)),S.format===_r&&le===6402&&(le=34041,S.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ur,oe=r.convert(S.type))),I&&(Xe?t.texStorage2D(3553,1,le,T.width,T.height):t.texImage2D(3553,0,le,T.width,T.height,0,ne,oe,null));else if(S.isDataTexture)if(Le.length>0&&Z){Xe&&I&&t.texStorage2D(3553,se,le,Le[0].width,Le[0].height);for(let H=0,de=Le.length;H<de;H++)xe=Le[H],Xe?t.texSubImage2D(3553,H,0,0,xe.width,xe.height,ne,oe,xe.data):t.texImage2D(3553,H,le,xe.width,xe.height,0,ne,oe,xe.data);S.generateMipmaps=!1}else Xe?(I&&t.texStorage2D(3553,se,le,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,ne,oe,T.data)):t.texImage2D(3553,0,le,T.width,T.height,0,ne,oe,T.data);else if(S.isCompressedTexture){Xe&&I&&t.texStorage2D(3553,se,le,Le[0].width,Le[0].height);for(let H=0,de=Le.length;H<de;H++)xe=Le[H],S.format!==on?ne!==null?Xe?t.compressedTexSubImage2D(3553,H,0,0,xe.width,xe.height,ne,xe.data):t.compressedTexImage2D(3553,H,le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,H,0,0,xe.width,xe.height,ne,oe,xe.data):t.texImage2D(3553,H,le,xe.width,xe.height,0,ne,oe,xe.data)}else if(S.isDataArrayTexture)Xe?(I&&t.texStorage3D(35866,se,le,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,ne,oe,T.data)):t.texImage3D(35866,0,le,T.width,T.height,T.depth,0,ne,oe,T.data);else if(S.isData3DTexture)Xe?(I&&t.texStorage3D(32879,se,le,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,ne,oe,T.data)):t.texImage3D(32879,0,le,T.width,T.height,T.depth,0,ne,oe,T.data);else if(S.isFramebufferTexture){if(I)if(Xe)t.texStorage2D(3553,se,le,T.width,T.height);else{let H=T.width,de=T.height;for(let ue=0;ue<se;ue++)t.texImage2D(3553,ue,le,H,de,0,ne,oe,null),H>>=1,de>>=1}}else if(Le.length>0&&Z){Xe&&I&&t.texStorage2D(3553,se,le,Le[0].width,Le[0].height);for(let H=0,de=Le.length;H<de;H++)xe=Le[H],Xe?t.texSubImage2D(3553,H,0,0,ne,oe,xe):t.texImage2D(3553,H,le,ne,oe,xe);S.generateMipmaps=!1}else Xe?(I&&t.texStorage2D(3553,se,le,T.width,T.height),t.texSubImage2D(3553,0,0,0,ne,oe,T)):t.texImage2D(3553,0,le,ne,oe,T);E(S,Z)&&L($),re.__currentVersion=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ge(A,S,U){if(S.image.length!==6)return;const $=De(A,S),j=S.source;if(t.activeTexture(33984+U),t.bindTexture(34067,A.__webglTexture),j.version!==j.__currentVersion||$===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const re=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,T=[];for(let H=0;H<6;H++)!re&&!ce?T[H]=M(S.image[H],!1,!0,c):T[H]=ce?S.image[H].image:S.image[H],T[H]=ut(S,T[H]);const Z=T[0],ne=y(Z)||a,oe=r.convert(S.format,S.encoding),le=r.convert(S.type),xe=v(S.internalFormat,oe,le,S.encoding),Le=a&&S.isVideoTexture!==!0,Xe=j.__currentVersion===void 0||$===!0;let I=w(S,Z,ne);Y(34067,S,ne);let se;if(re){Le&&Xe&&t.texStorage2D(34067,I,xe,Z.width,Z.height);for(let H=0;H<6;H++){se=T[H].mipmaps;for(let de=0;de<se.length;de++){const ue=se[de];S.format!==on?oe!==null?Le?t.compressedTexSubImage2D(34069+H,de,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(34069+H,de,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+H,de,0,0,ue.width,ue.height,oe,le,ue.data):t.texImage2D(34069+H,de,xe,ue.width,ue.height,0,oe,le,ue.data)}}}else{se=S.mipmaps,Le&&Xe&&(se.length>0&&I++,t.texStorage2D(34067,I,xe,T[0].width,T[0].height));for(let H=0;H<6;H++)if(ce){Le?t.texSubImage2D(34069+H,0,0,0,T[H].width,T[H].height,oe,le,T[H].data):t.texImage2D(34069+H,0,xe,T[H].width,T[H].height,0,oe,le,T[H].data);for(let de=0;de<se.length;de++){const Ne=se[de].image[H].image;Le?t.texSubImage2D(34069+H,de+1,0,0,Ne.width,Ne.height,oe,le,Ne.data):t.texImage2D(34069+H,de+1,xe,Ne.width,Ne.height,0,oe,le,Ne.data)}}else{Le?t.texSubImage2D(34069+H,0,0,0,oe,le,T[H]):t.texImage2D(34069+H,0,xe,oe,le,T[H]);for(let de=0;de<se.length;de++){const ue=se[de];Le?t.texSubImage2D(34069+H,de+1,0,0,oe,le,ue.image[H]):t.texImage2D(34069+H,de+1,xe,oe,le,ue.image[H])}}}E(S,ne)&&L(34067),j.__currentVersion=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function he(A,S,U,$,j){const re=r.convert(U.format,U.encoding),ce=r.convert(U.type),T=v(U.internalFormat,re,ce,U.encoding);n.get(S).__hasExternalTextures||(j===32879||j===35866?t.texImage3D(j,0,T,S.width,S.height,S.depth,0,re,ce,null):t.texImage2D(j,0,T,S.width,S.height,0,re,ce,null)),t.bindFramebuffer(36160,A),we(S)?h.framebufferTexture2DMultisampleEXT(36160,$,j,n.get(U).__webglTexture,0,Ye(S)):o.framebufferTexture2D(36160,$,j,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(A,S,U){if(o.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let $=33189;if(U||we(S)){const j=S.depthTexture;j&&j.isDepthTexture&&(j.type===Zn?$=36012:j.type===yi&&($=33190));const re=Ye(S);we(S)?h.renderbufferStorageMultisampleEXT(36161,re,$,S.width,S.height):o.renderbufferStorageMultisample(36161,re,$,S.width,S.height)}else o.renderbufferStorage(36161,$,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const $=Ye(S);U&&we(S)===!1?o.renderbufferStorageMultisample(36161,$,35056,S.width,S.height):we(S)?h.renderbufferStorageMultisampleEXT(36161,$,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const $=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<$.length;j++){const re=$[j],ce=r.convert(re.format,re.encoding),T=r.convert(re.type),Z=v(re.internalFormat,ce,T,re.encoding),ne=Ye(S);U&&we(S)===!1?o.renderbufferStorageMultisample(36161,ne,Z,S.width,S.height):we(S)?h.renderbufferStorageMultisampleEXT(36161,ne,Z,S.width,S.height):o.renderbufferStorage(36161,Z,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Se(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,j=Ye(S);if(S.depthTexture.format===Si)we(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,j):o.framebufferTexture2D(36160,36096,3553,$,0);else if(S.depthTexture.format===_r)we(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,j):o.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function pe(A){const S=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,A)}else if(U){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=o.createRenderbuffer(),Ce(S.__webglDepthbuffer[$],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ce(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function qe(A,S,U){const $=n.get(A);S!==void 0&&he($.__webglFramebuffer,A,A.texture,36064,3553),U!==void 0&&pe(A)}function et(A){const S=A.texture,U=n.get(A),$=n.get(S);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=S.version,s.memory.textures++);const j=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ce=y(A)||a;if(j){U.__webglFramebuffer=[];for(let T=0;T<6;T++)U.__webglFramebuffer[T]=o.createFramebuffer()}else{if(U.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const T=A.texture;for(let Z=0,ne=T.length;Z<ne;Z++){const oe=n.get(T[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&we(A)===!1){const T=re?S:[S];U.__webglMultisampledFramebuffer=o.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let Z=0;Z<T.length;Z++){const ne=T[Z];U.__webglColorRenderbuffer[Z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,U.__webglColorRenderbuffer[Z]);const oe=r.convert(ne.format,ne.encoding),le=r.convert(ne.type),xe=v(ne.internalFormat,oe,le,ne.encoding),Le=Ye(A);o.renderbufferStorageMultisample(36161,Le,xe,A.width,A.height),o.framebufferRenderbuffer(36160,36064+Z,36161,U.__webglColorRenderbuffer[Z])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(j){t.bindTexture(34067,$.__webglTexture),Y(34067,S,ce);for(let T=0;T<6;T++)he(U.__webglFramebuffer[T],A,S,36064,34069+T);E(S,ce)&&L(34067),t.unbindTexture()}else if(re){const T=A.texture;for(let Z=0,ne=T.length;Z<ne;Z++){const oe=T[Z],le=n.get(oe);t.bindTexture(3553,le.__webglTexture),Y(3553,oe,ce),he(U.__webglFramebuffer,A,oe,36064+Z,3553),E(oe,ce)&&L(3553)}t.unbindTexture()}else{let T=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?T=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,$.__webglTexture),Y(T,S,ce),he(U.__webglFramebuffer,A,S,36064,T),E(S,ce)&&L(T),t.unbindTexture()}A.depthBuffer&&pe(A)}function tt(A){const S=y(A)||a,U=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let $=0,j=U.length;$<j;$++){const re=U[$];if(E(re,S)){const ce=A.isWebGLCubeRenderTarget?34067:3553,T=n.get(re).__webglTexture;t.bindTexture(ce,T),L(ce),t.unbindTexture()}}}function gt(A){if(a&&A.samples>0&&we(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],U=A.width,$=A.height;let j=16384;const re=[],ce=A.stencilBuffer?33306:36096,T=n.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let ne=0;ne<S.length;ne++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ne=0;ne<S.length;ne++){re.push(36064+ne),A.depthBuffer&&re.push(ce);const oe=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(oe===!1&&(A.depthBuffer&&(j|=256),A.stencilBuffer&&(j|=1024)),Z&&o.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ne]),oe===!0&&(o.invalidateFramebuffer(36008,[ce]),o.invalidateFramebuffer(36009,[ce])),Z){const le=n.get(S[ne]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,le,0)}o.blitFramebuffer(0,0,U,$,0,0,U,$,j,9728),m&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let ne=0;ne<S.length;ne++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ne,36161,T.__webglColorRenderbuffer[ne]);const oe=n.get(S[ne]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ne,3553,oe,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Ye(A){return Math.min(d,A.samples)}function we(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){const S=s.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function ut(A,S){const U=A.encoding,$=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===uo||U!==Pi&&(U===ze?a===!1?e.has("EXT_sRGB")===!0&&$===on?(A.format=uo,A.minFilter=Ct,A.generateMipmaps=!1):S=Pu.sRGBToLinear(S):($!==on||j!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),S}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=qe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=we}function i0(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===Ri)return 5121;if(r===Fd)return 32819;if(r===Ud)return 32820;if(r===Id)return 5120;if(r===Od)return 5122;if(r===Eu)return 5123;if(r===Nd)return 5124;if(r===yi)return 5125;if(r===Zn)return 5126;if(r===Qr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zd)return 6406;if(r===on)return 6408;if(r===Bd)return 6409;if(r===Vd)return 6410;if(r===Si)return 6402;if(r===_r)return 34041;if(r===Gd)return 6403;if(r===kd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===uo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hd)return 36244;if(r===Wd)return 33319;if(r===qd)return 33320;if(r===Xd)return 36249;if(r===da||r===fa||r===pa||r===ma)if(s===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sl||r===wl||r===Tl||r===El)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===El)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Al||r===Cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Al)return s===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ll||r===Rl||r===Pl||r===Dl||r===Il||r===Ol||r===Nl||r===Fl||r===Ul||r===zl||r===kl||r===Bl||r===Vl||r===Gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ll)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Il)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ol)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ul)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gl)return s===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Hl)return s===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ur?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class r0 extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const b=new Jn;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[f.jointName]=b,c.add(b)}const _=c.joints[f.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class a0 extends Tt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=yi),n===void 0&&u===_r&&(n=ur),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class o0 extends Fi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const g=t.getContextAttributes();let f=null,p=null;const _=[],b=[],M=new wt;M.layers.enable(1),M.viewport=new We;const y=new wt;y.layers.enable(2),y.viewport=new We;const x=[M,y],E=new r0;E.layers.enable(1),E.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=_[N];return k===void 0&&(k=new Ga,_[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=_[N];return k===void 0&&(k=new Ga,_[N]=k),k.getGripSpace()},this.getHand=function(N){let k=_[N];return k===void 0&&(k=new Ga,_[N]=k),k.getHandSpace()};function w(N){const k=b.indexOf(N.inputSource);if(k===-1)return;const te=_[k];te!==void 0&&te.dispatchEvent({type:N.type,data:N.inputSource})}function P(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",G);for(let N=0;N<_.length;N++){const k=b[N];k!==null&&(b[N]=null,_[N].disconnect(k))}L=null,v=null,e.setRenderTarget(f),h=null,d=null,u=null,i=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",P),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:h}),p=new Di(h.framebufferWidth,h.framebufferHeight,{format:on,type:Ri,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,te=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,k=g.stencil?_r:Si,te=g.stencil?ur:yi);const ee={colorFormat:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),p=new Di(d.textureWidth,d.textureHeight,{format:on,type:Ri,depthTexture:new a0(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ae=e.properties.get(p);ae.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(N){for(let k=0;k<N.removed.length;k++){const te=N.removed[k],Q=b.indexOf(te);Q>=0&&(b[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:te}))}for(let k=0;k<N.added.length;k++){const te=N.added[k];let Q=b.indexOf(te);if(Q===-1){for(let ae=0;ae<_.length;ae++)if(ae>=b.length){b.push(te),Q=ae;break}else if(b[ae]===null){b[ae]=te,Q=ae;break}if(Q===-1)break}const ee=_[Q];ee&&ee.dispatchEvent({type:"connected",data:te})}}const J=new R,O=new R;function D(N,k,te){J.setFromMatrixPosition(k.matrixWorld),O.setFromMatrixPosition(te.matrixWorld);const Q=J.distanceTo(O),ee=k.projectionMatrix.elements,ae=te.projectionMatrix.elements,fe=ee[14]/(ee[10]-1),Y=ee[14]/(ee[10]+1),De=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],ge=(ee[8]-1)/ee[0],he=(ae[8]+1)/ae[0],Ce=fe*ge,Se=fe*he,pe=Q/(-ge+he),qe=pe*-ge;k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(qe),N.translateZ(pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const et=fe+pe,tt=Y+pe,gt=Ce-qe,Ye=Se+(Q-qe),we=De*Y/tt*et,ot=_e*Y/tt*et;N.projectionMatrix.makePerspective(gt,Ye,we,ot,et,tt)}function B(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;E.near=y.near=M.near=N.near,E.far=y.far=M.far=N.far,(L!==E.near||v!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,v=E.far);const k=N.parent,te=E.cameras;B(E,k);for(let ee=0;ee<te.length;ee++)B(te[ee],k);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),N.matrix.copy(E.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const Q=N.children;for(let ee=0,ae=Q.length;ee<ae;ee++)Q[ee].updateMatrixWorld(!0);te.length===2?D(E,M,y):E.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let q=null;function X(N,k){if(c=k.getViewerPose(l||s),m=k,c!==null){const te=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let Q=!1;te.length!==E.cameras.length&&(E.cameras.length=0,Q=!0);for(let ee=0;ee<te.length;ee++){const ae=te[ee];let fe=null;if(h!==null)fe=h.getViewport(ae);else{const De=u.getViewSubImage(d,ae);fe=De.viewport,ee===0&&(e.setRenderTargetTextures(p,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let Y=x[ee];Y===void 0&&(Y=new wt,Y.layers.enable(ee),Y.viewport=new We,x[ee]=Y),Y.matrix.fromArray(ae.transform.matrix),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.viewport.set(fe.x,fe.y,fe.width,fe.height),ee===0&&E.matrix.copy(Y.matrix),Q===!0&&E.cameras.push(Y)}}for(let te=0;te<_.length;te++){const Q=b[te],ee=_[te];Q!==null&&ee!==void 0&&ee.update(Q,k,l||s)}q&&q(N,k),m=null}const V=new Uu;V.setAnimationLoop(X),this.setAnimationLoop=function(N){q=N},this.dispose=function(){}}}function l0(o,e){function t(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,M)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?a(f,p,_,b):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Jt&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Jt&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uv2Transform.value.copy(M.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,_,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=b*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Jt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function c0(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(b,M){const y=M.program;n.uniformBlockBinding(b,y)}function c(b,M){let y=i[b.id];y===void 0&&(g(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",p));const x=M.program;n.updateUBOMapping(b,x);const E=e.render.frame;r[b.id]!==E&&(h(b),r[b.id]=E)}function u(b){const M=d();b.__bindingPointIndex=M;const y=o.createBuffer(),x=b.__size,E=b.usage;return o.bindBuffer(35345,y),o.bufferData(35345,x,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,y),y}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const M=i[b.id],y=b.uniforms,x=b.__cache;o.bindBuffer(35345,M);for(let E=0,L=y.length;E<L;E++){const v=y[E];if(m(v,E,x)===!0){const w=v.value,P=v.__offset;typeof w=="number"?(v.__data[0]=w,o.bufferSubData(35345,P,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),o.bufferSubData(35345,P,v.__data))}}o.bindBuffer(35345,null)}function m(b,M,y){const x=b.value;if(y[M]===void 0)return typeof x=="number"?y[M]=x:y[M]=x.clone(),!0;if(typeof x=="number"){if(y[M]!==x)return y[M]=x,!0}else{const E=y[M];if(E.equals(x)===!1)return E.copy(x),!0}return!1}function g(b){const M=b.uniforms;let y=0;const x=16;let E=0;for(let L=0,v=M.length;L<v;L++){const w=M[L],P=f(w);if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){E=y%x;const G=x-E;E!==0&&G-P.boundary<0&&(y+=x-E,w.__offset=y)}y+=P.storage}return E=y%x,E>0&&(y+=x-E),b.__size=y,b.__cache={},this}function f(b){const M=b.value,y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(b){const M=b.target;M.removeEventListener("dispose",p);const y=s.indexOf(M.__bindingPointIndex);s.splice(y,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const b in i)o.deleteBuffer(i[b]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function u0(){const o=ns("canvas");return o.style.display="block",o}function Gu(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:u0(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pi,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,_=0,b=0,M=null,y=-1,x=null;const E=new We,L=new We;let v=null,w=e.width,P=e.height,G=1,J=null,O=null;const D=new We(0,0,w,P),B=new We(0,0,w,P);let q=!1;const X=new Vo;let V=!1,N=!1,k=null;const te=new Fe,Q=new ve,ee=new R,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return M===null?G:1}let Y=t;function De(C,z){for(let W=0;W<C.length;W++){const F=C[W],K=e.getContext(F,z);if(K!==null)return K}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),Y===null){const z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),Y=De(z,C),Y===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _e,ge,he,Ce,Se,pe,qe,et,tt,gt,Ye,we,ot,ut,A,S,U,$,j,re,ce,T,Z,ne;function oe(){_e=new bg(Y),ge=new mg(Y,_e,o),_e.init(ge),T=new i0(Y,_e,ge),he=new t0(Y,_e,ge),Ce=new wg,Se=new V_,pe=new n0(Y,_e,he,Se,ge,T,Ce),qe=new _g(f),et=new yg(f),tt=new Nf(Y,ge),Z=new fg(Y,_e,tt,ge),gt=new Mg(Y,tt,Ce,Z),Ye=new Cg(Y,gt,tt,Ce),j=new Ag(Y,ge,pe),S=new gg(Se),we=new B_(f,qe,et,_e,ge,Z,S),ot=new l0(f,Se),ut=new H_,A=new K_(_e,ge),$=new dg(f,qe,he,Ye,u,s),U=new e0(f,Ye,ge),ne=new c0(Y,Ce,ge,he),re=new pg(Y,_e,Ce,ge),ce=new Sg(Y,_e,Ce,ge),Ce.programs=we.programs,f.capabilities=ge,f.extensions=_e,f.properties=Se,f.renderLists=ut,f.shadowMap=U,f.state=he,f.info=Ce}oe();const le=new o0(f,Y);this.xr=le,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(w,P,!1))},this.getSize=function(C){return C.set(w,P)},this.setSize=function(C,z,W){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,P=z,e.width=Math.floor(C*G),e.height=Math.floor(z*G),W!==!1&&(e.style.width=C+"px",e.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(w*G,P*G).floor()},this.setDrawingBufferSize=function(C,z,W){w=C,P=z,G=W,e.width=Math.floor(C*W),e.height=Math.floor(z*W),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,z,W,F){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,z,W,F),he.viewport(E.copy(D).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(B)},this.setScissor=function(C,z,W,F){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,z,W,F),he.scissor(L.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(C){he.setScissorTest(q=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(C=!0,z=!0,W=!0){let F=0;C&&(F|=16384),z&&(F|=256),W&&(F|=1024),Y.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),ut.dispose(),A.dispose(),Se.dispose(),qe.dispose(),et.dispose(),Ye.dispose(),Z.dispose(),ne.dispose(),we.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ne),le.removeEventListener("sessionend",ht),k&&(k.dispose(),k=null),nt.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Ce.autoReset,z=U.enabled,W=U.autoUpdate,F=U.needsUpdate,K=U.type;oe(),Ce.autoReset=C,U.enabled=z,U.autoUpdate=W,U.needsUpdate=F,U.type=K}function Xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function I(C){const z=C.target;z.removeEventListener("dispose",I),se(z)}function se(C){H(C),Se.remove(C)}function H(C){const z=Se.get(C).programs;z!==void 0&&(z.forEach(function(W){we.releaseProgram(W)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,W,F,K,me){z===null&&(z=ae);const ye=K.isMesh&&K.matrixWorld.determinant()<0,Te=Qh(C,z,W,F,K);he.setMaterial(F,ye);let be=W.index;const ke=W.attributes.position;if(be===null){if(ke===void 0||ke.count===0)return}else if(be.count===0)return;let Ie=1;F.wireframe===!0&&(be=gt.getWireframeAttribute(W),Ie=2),Z.setup(K,F,Te,W,be);let Oe,Ze=re;be!==null&&(Oe=tt.get(be),Ze=ce,Ze.setIndex(Oe));const li=be!==null?be.count:ke.count,ki=W.drawRange.start*Ie,Bi=W.drawRange.count*Ie,dn=me!==null?me.start*Ie:0,Ue=me!==null?me.count*Ie:1/0,Vi=Math.max(ki,dn),rt=Math.min(li,ki+Bi,dn+Ue)-1,Ht=Math.max(0,rt-Vi+1);if(Ht!==0){if(K.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*fe()),Ze.setMode(1)):Ze.setMode(4);else if(K.isLine){let Bn=F.linewidth;Bn===void 0&&(Bn=1),he.setLineWidth(Bn*fe()),K.isLineSegments?Ze.setMode(1):K.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else K.isPoints?Ze.setMode(0):K.isSprite&&Ze.setMode(4);if(K.isInstancedMesh)Ze.renderInstances(Vi,Ht,K.count);else if(W.isInstancedBufferGeometry){const Bn=Math.min(W.instanceCount,W._maxInstanceCount);Ze.renderInstances(Vi,Ht,Bn)}else Ze.render(Vi,Ht)}},this.compile=function(C,z){function W(F,K,me){F.transparent===!0&&F.side===Pn?(F.side=Jt,F.needsUpdate=!0,gs(F,K,me),F.side=Li,F.needsUpdate=!0,gs(F,K,me),F.side=Pn):gs(F,K,me)}h=A.get(C),h.init(),g.push(h),C.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(f.physicallyCorrectLights),C.traverse(function(F){const K=F.material;if(K)if(Array.isArray(K))for(let me=0;me<K.length;me++){const ye=K[me];W(ye,C,F)}else W(K,C,F)}),g.pop(),h=null};let de=null;function ue(C){de&&de(C)}function Ne(){nt.stop()}function ht(){nt.start()}const nt=new Uu;nt.setAnimationLoop(ue),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){de=C,le.setAnimationLoop(C),C===null?nt.stop():nt.start()},le.addEventListener("sessionstart",Ne),le.addEventListener("sessionend",ht),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(z),z=le.getCamera()),C.isScene===!0&&C.onBeforeRender(f,C,z,M),h=A.get(C,g.length),h.init(),g.push(h),te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(te),N=this.localClippingEnabled,V=S.init(this.clippingPlanes,N,z),d=ut.get(C,m.length),d.init(),m.push(d),kn(C,z,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(J,O),V===!0&&S.beginShadows();const W=h.state.shadowsArray;if(U.render(W,C,z),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(d,C),h.setupLights(f.physicallyCorrectLights),z.isArrayCamera){const F=z.cameras;for(let K=0,me=F.length;K<me;K++){const ye=F[K];Ke(d,C,ye,ye.viewport)}}else Ke(d,C,z);M!==null&&(pe.updateMultisampleRenderTarget(M),pe.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(f,C,z),Z.resetDefaultState(),y=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function kn(C,z,W,F){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){F&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const ye=Ye.update(C),Te=C.material;Te.visible&&d.push(C,ye,Te,W,ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ce.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ce.render.frame),!C.frustumCulled||X.intersectsObject(C))){F&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const ye=Ye.update(C),Te=C.material;if(Array.isArray(Te)){const be=ye.groups;for(let ke=0,Ie=be.length;ke<Ie;ke++){const Oe=be[ke],Ze=Te[Oe.materialIndex];Ze&&Ze.visible&&d.push(C,ye,Ze,W,ee.z,Oe)}}else Te.visible&&d.push(C,ye,Te,W,ee.z,null)}}const me=C.children;for(let ye=0,Te=me.length;ye<Te;ye++)kn(me[ye],z,W,F)}function Ke(C,z,W,F){const K=C.opaque,me=C.transmissive,ye=C.transparent;h.setupLightsView(W),me.length>0&&vn(K,z,W),F&&he.viewport(E.copy(F)),K.length>0&&Gt(K,z,W),me.length>0&&Gt(me,z,W),ye.length>0&&Gt(ye,z,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function vn(C,z,W){const F=ge.isWebGL2;k===null&&(k=new Di(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Qr:Ri,minFilter:Cr,samples:F&&r===!0?4:0})),f.getDrawingBufferSize(Q),F?k.setSize(Q.x,Q.y):k.setSize(js(Q.x),js(Q.y));const K=f.getRenderTarget();f.setRenderTarget(k),f.clear();const me=f.toneMapping;f.toneMapping=On,Gt(C,z,W),f.toneMapping=me,pe.updateMultisampleRenderTarget(k),pe.updateRenderTargetMipmap(k),f.setRenderTarget(K)}function Gt(C,z,W){const F=z.isScene===!0?z.overrideMaterial:null;for(let K=0,me=C.length;K<me;K++){const ye=C[K],Te=ye.object,be=ye.geometry,ke=F===null?ye.material:F,Ie=ye.group;Te.layers.test(W.layers)&&Jh(Te,z,W,be,ke,Ie)}}function Jh(C,z,W,F,K,me){C.onBeforeRender(f,z,W,F,K,me),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(f,z,W,F,C,me),K.transparent===!0&&K.side===Pn?(K.side=Jt,K.needsUpdate=!0,f.renderBufferDirect(W,z,F,K,C,me),K.side=Li,K.needsUpdate=!0,f.renderBufferDirect(W,z,F,K,C,me),K.side=Pn):f.renderBufferDirect(W,z,F,K,C,me),C.onAfterRender(f,z,W,F,K,me)}function gs(C,z,W){z.isScene!==!0&&(z=ae);const F=Se.get(C),K=h.state.lights,me=h.state.shadowsArray,ye=K.state.version,Te=we.getParameters(C,K.state,me,z,W),be=we.getProgramCacheKey(Te);let ke=F.programs;F.environment=C.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(C.isMeshStandardMaterial?et:qe).get(C.envMap||F.environment),ke===void 0&&(C.addEventListener("dispose",I),ke=new Map,F.programs=ke);let Ie=ke.get(be);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===ye)return ml(C,Te),Ie}else Te.uniforms=we.getUniforms(C),C.onBuild(W,Te,f),C.onBeforeCompile(Te,f),Ie=we.acquireProgram(Te,be),ke.set(be,Ie),F.uniforms=Te.uniforms;const Oe=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=S.uniform),ml(C,Te),F.needsLights=td(C),F.lightsStateVersion=ye,F.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ze=Ie.getUniforms(),li=Hs.seqWithValue(Ze.seq,Oe);return F.currentProgram=Ie,F.uniformsList=li,Ie}function ml(C,z){const W=Se.get(C);W.outputEncoding=z.outputEncoding,W.instancing=z.instancing,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Qh(C,z,W,F,K){z.isScene!==!0&&(z=ae),pe.resetTextureUnits();const me=z.fog,ye=F.isMeshStandardMaterial?z.environment:null,Te=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Pi,be=(F.isMeshStandardMaterial?et:qe).get(F.envMap||ye),ke=F.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!F.normalMap&&!!W.attributes.tangent,Oe=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,li=!!W.morphAttributes.color,ki=F.toneMapped?f.toneMapping:On,Bi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dn=Bi!==void 0?Bi.length:0,Ue=Se.get(F),Vi=h.state.lights;if(V===!0&&(N===!0||C!==x)){const It=C===x&&F.id===y;S.setState(F,C,It)}let rt=!1;F.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Vi.state.version||Ue.outputEncoding!==Te||K.isInstancedMesh&&Ue.instancing===!1||!K.isInstancedMesh&&Ue.instancing===!0||K.isSkinnedMesh&&Ue.skinning===!1||!K.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==be||F.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==S.numPlanes||Ue.numIntersection!==S.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==Ie||Ue.morphTargets!==Oe||Ue.morphNormals!==Ze||Ue.morphColors!==li||Ue.toneMapping!==ki||ge.isWebGL2===!0&&Ue.morphTargetsCount!==dn)&&(rt=!0):(rt=!0,Ue.__version=F.version);let Ht=Ue.currentProgram;rt===!0&&(Ht=gs(F,z,K));let Bn=!1,Nr=!1,ca=!1;const Mt=Ht.getUniforms(),ci=Ue.uniforms;if(he.useProgram(Ht.program)&&(Bn=!0,Nr=!0,ca=!0),F.id!==y&&(y=F.id,Nr=!0),Bn||x!==C){if(Mt.setValue(Y,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&Mt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),x!==C&&(x=C,Nr=!0,ca=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const It=Mt.map.cameraPosition;It!==void 0&&It.setValue(Y,ee.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Mt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||K.isSkinnedMesh)&&Mt.setValue(Y,"viewMatrix",C.matrixWorldInverse)}if(K.isSkinnedMesh){Mt.setOptional(Y,K,"bindMatrix"),Mt.setOptional(Y,K,"bindMatrixInverse");const It=K.skeleton;It&&(ge.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),Mt.setValue(Y,"boneTexture",It.boneTexture,pe),Mt.setValue(Y,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ua=W.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&ge.isWebGL2===!0)&&j.update(K,W,F,Ht),(Nr||Ue.receiveShadow!==K.receiveShadow)&&(Ue.receiveShadow=K.receiveShadow,Mt.setValue(Y,"receiveShadow",K.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ci.envMap.value=be,ci.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Nr&&(Mt.setValue(Y,"toneMappingExposure",f.toneMappingExposure),Ue.needsLights&&ed(ci,ca),me&&F.fog===!0&&ot.refreshFogUniforms(ci,me),ot.refreshMaterialUniforms(ci,F,G,P,k),Hs.upload(Y,Ue.uniformsList,ci,pe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Hs.upload(Y,Ue.uniformsList,ci,pe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Mt.setValue(Y,"center",K.center),Mt.setValue(Y,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(Y,"normalMatrix",K.normalMatrix),Mt.setValue(Y,"modelMatrix",K.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let ha=0,nd=It.length;ha<nd;ha++)if(ge.isWebGL2){const gl=It[ha];ne.update(gl,Ht),ne.bind(gl,Ht)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ht}function ed(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function td(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,z,W){Se.get(C.texture).__webglTexture=z,Se.get(C.depthTexture).__webglTexture=W;const F=Se.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=W===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const W=Se.get(C);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,W=0){M=C,_=z,b=W;let F=!0;if(C){const be=Se.get(C);be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):be.__webglFramebuffer===void 0?pe.setupRenderTarget(C):be.__hasExternalTextures&&pe.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture)}let K=null,me=!1,ye=!1;if(C){const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(ye=!0);const ke=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(K=ke[z],me=!0):ge.isWebGL2&&C.samples>0&&pe.useMultisampledRTT(C)===!1?K=Se.get(C).__webglMultisampledFramebuffer:K=ke,E.copy(C.viewport),L.copy(C.scissor),v=C.scissorTest}else E.copy(D).multiplyScalar(G).floor(),L.copy(B).multiplyScalar(G).floor(),v=q;if(he.bindFramebuffer(36160,K)&&ge.drawBuffers&&F&&he.drawBuffers(C,K),he.viewport(E),he.scissor(L),he.setScissorTest(v),me){const be=Se.get(C.texture);Y.framebufferTexture2D(36160,36064,34069+z,be.__webglTexture,W)}else if(ye){const be=Se.get(C.texture),ke=z||0;Y.framebufferTextureLayer(36160,36064,be.__webglTexture,W||0,ke)}y=-1},this.readRenderTargetPixels=function(C,z,W,F,K,me,ye){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){he.bindFramebuffer(36160,Te);try{const be=C.texture,ke=be.format,Ie=be.type;if(ke!==on&&T.convert(ke)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===Qr&&(_e.has("EXT_color_buffer_half_float")||ge.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ie!==Ri&&T.convert(Ie)!==Y.getParameter(35738)&&!(Ie===Zn&&(ge.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-F&&W>=0&&W<=C.height-K&&Y.readPixels(z,W,F,K,T.convert(ke),T.convert(Ie),me)}finally{const be=M!==null?Se.get(M).__webglFramebuffer:null;he.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(C,z,W=0){const F=Math.pow(2,-W),K=Math.floor(z.image.width*F),me=Math.floor(z.image.height*F);pe.setTexture2D(z,0),Y.copyTexSubImage2D(3553,W,0,0,C.x,C.y,K,me),he.unbindTexture()},this.copyTextureToTexture=function(C,z,W,F=0){const K=z.image.width,me=z.image.height,ye=T.convert(W.format),Te=T.convert(W.type);pe.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),z.isDataTexture?Y.texSubImage2D(3553,F,C.x,C.y,K,me,ye,Te,z.image.data):z.isCompressedTexture?Y.compressedTexSubImage2D(3553,F,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):Y.texSubImage2D(3553,F,C.x,C.y,ye,Te,z.image),F===0&&W.generateMipmaps&&Y.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(C,z,W,F,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,ye=C.max.y-C.min.y+1,Te=C.max.z-C.min.z+1,be=T.convert(F.format),ke=T.convert(F.type);let Ie;if(F.isData3DTexture)pe.setTexture3D(F,0),Ie=32879;else if(F.isDataArrayTexture)pe.setTexture2DArray(F,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,F.flipY),Y.pixelStorei(37441,F.premultiplyAlpha),Y.pixelStorei(3317,F.unpackAlignment);const Oe=Y.getParameter(3314),Ze=Y.getParameter(32878),li=Y.getParameter(3316),ki=Y.getParameter(3315),Bi=Y.getParameter(32877),dn=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,dn.width),Y.pixelStorei(32878,dn.height),Y.pixelStorei(3316,C.min.x),Y.pixelStorei(3315,C.min.y),Y.pixelStorei(32877,C.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Ie,K,z.x,z.y,z.z,me,ye,Te,be,ke,dn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,me,ye,Te,be,dn.data)):Y.texSubImage3D(Ie,K,z.x,z.y,z.z,me,ye,Te,be,ke,dn),Y.pixelStorei(3314,Oe),Y.pixelStorei(32878,Ze),Y.pixelStorei(3316,li),Y.pixelStorei(3315,ki),Y.pixelStorei(32877,Bi),K===0&&F.generateMipmaps&&Y.generateMipmap(Ie),he.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?pe.setTextureCube(C,0):C.isData3DTexture?pe.setTexture3D(C,0):C.isDataArrayTexture?pe.setTexture2DArray(C,0):pe.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){_=0,b=0,M=null,he.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class h0 extends Gu{}h0.prototype.isWebGL1Renderer=!0;class d0 extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class f0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const St=new R;class qo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cc=new R,Lc=new We,Rc=new We,p0=new R,Pc=new Fe;class m0 extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Lc.fromBufferAttribute(i.attributes.skinIndex,e),Rc.fromBufferAttribute(i.attributes.skinWeight,e),Cc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Rc.getComponent(r);if(s!==0){const a=Lc.getComponent(r);Pc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(p0.copy(Cc).applyMatrix4(Pc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hu extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class g0 extends Tt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=pt,u=pt,d,h){super(null,s,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dc=new Fe,_0=new Fe;class Xo{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:_0;Dc.multiplyMatrices(a,t[r]),Dc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Cu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new g0(t,e,e,on,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Hu),this.bones.push(s),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Wu extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new R,Oc=new R,Nc=new Fe,Ha=new ia,Us=new Rr;class jo extends Qe{constructor(e=new hn,t=new Wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ic.fromBufferAttribute(t,i-1),Oc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ic.distanceTo(Oc);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;Nc.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,d=new R,h=new R,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),b=Math.min(g.count,s.start+s.count);for(let M=_,y=b-1;M<y;M+=m){const x=g.getX(M),E=g.getX(M+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,E),Ha.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),b=Math.min(p.count,s.start+s.count);for(let M=_,y=b-1;M<y;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Ha.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Fc=new R,Uc=new R;class x0 extends jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fc.fromBufferAttribute(t,i),Uc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(Uc);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v0 extends jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qu extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zc=new Fe,po=new ia,zs=new Rr,ks=new R;class y0 extends Qe{constructor(e=new hn,t=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;zc.copy(i).invert(),po.copy(e.ray).applyMatrix4(zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,f=m;g<f;g++){const p=c.getX(g);ks.fromBufferAttribute(d,p),kc(ks,p,l,i,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=h,f=m;g<f;g++)ks.fromBufferAttribute(d,g),kc(ks,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kc(o,e,t,n,i,r,s){const a=po.distanceSqToPoint(o);if(a<t){const l=new R;po.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class Yo extends hn{constructor(e=.5,t=1,n=8,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,m=new R,g=new ve;for(let f=0;f<=i;f++){for(let p=0;p<=n;p++){const _=r+p/n*s;m.x=d*Math.cos(_),m.y=d*Math.sin(_),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let f=0;f<i;f++){const p=f*(n+1);for(let _=0;_<n;_++){const b=_+p,M=b,y=b+n+1,x=b+n+2,E=b+1;a.push(M,y,E),a.push(y,x,E)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}static fromJSON(e){return new Yo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sa extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Yn(o,e,t){return Xu(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Bs(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Xu(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function b0(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bc(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function ju(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class ps{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class M0 extends ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=e,a=2*t-n;break;case Xl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:s=e,l=2*n-t;break;case Xl:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),f=g*g,p=f*g,_=-h*p+2*h*f-h*g,b=(1+h)*p+(-1.5-2*h)*f+(-.5+h)*g+1,M=(-1-m)*p+(1.5+m)*f+.5*g,y=m*p-m*f;for(let x=0;x!==a;++x)r[x]=_*s[u+x]+b*s[c+x]+M*s[l+x]+y*s[d+x];return r}}class S0 extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=s[c+h]*d+s[l+h]*u;return r}}class w0 extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=Yn(n,r,s),this.values=Yn(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&Xu(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Yn(this.times),t=Yn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ga,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,m=d+n;for(let g=0;g!==n;++g){const f=t[d+g];if(f!==t[h+g]||f!==t[m+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const d=a*n,h=s*n;for(let m=0;m!==n;++m)t[h+m]=t[d+m]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=Yn(e,0,s),this.values=Yn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Yn(this.times,0),t=Yn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=xr;class Dr extends xn{}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=es;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yu extends xn{}Yu.prototype.ValueTypeName="color";class is extends xn{}is.prototype.ValueTypeName="number";class T0 extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Oi extends xn{InterpolantFactoryMethodLinear(e){return new T0(this.times,this.values,this.getValueSize(),e)}}Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=xr;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends xn{}Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=es;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends xn{}rs.prototype.ValueTypeName="vector";class E0{constructor(e,t=-1,n,i=Yd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(C0(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=b0(l);l=Bc(l,1,u),c=Bc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,m,g,f){if(m.length!==0){const p=[],_=[];ju(m,p,_,g),p.length!==0&&f.push(new d(h,p,_))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let f=0;f<h[g].morphTargets.length;f++)m[h[g].morphTargets[f]]=-1;for(const f in m){const p=[],_=[];for(let b=0;b!==h[g].morphTargets.length;++b){const M=h[g];p.push(M.time),_.push(M.morphTarget===f?1:0)}i.push(new is(".morphTargetInfluence["+f+"]",p,_))}l=m.length*s}else{const m=".bones["+t[d].name+"]";n(rs,m+".position",h,"pos",i),n(Oi,m+".quaternion",h,"rot",i),n(rs,m+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function A0(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return Yu;case"quaternion":return Oi;case"bool":case"boolean":return Dr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function C0(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A0(o.type);if(o.times===void 0){const t=[],n=[];ju(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const yr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class L0{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const R0=new L0;class Or{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Tn={};class P0 extends Error{constructor(e,t){super(e),this.response=t}}class Ku extends Or{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=yr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:i});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Tn[e],d=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let f=0;const p=new ReadableStream({start(_){b();function b(){d.read().then(({done:M,value:y})=>{if(M)_.close();else{f+=y.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:m});for(let E=0,L=u.length;E<L;E++){const v=u[E];v.onProgress&&v.onProgress(x)}_.enqueue(y),b()}})}}});return new Response(p)}else throw new P0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{yr.add(e,c);const u=Tn[e];delete Tn[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Tn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zu extends Or{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=yr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=ns("img");function l(){u(),yr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class D0 extends Or{constructor(e){super(e)}load(e,t,n,i){const r=new Bo,s=new Zu(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(c){s.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class I0 extends Or{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,s=new Zu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ko extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vc=new Fe,Gc=new R,Hc=new R;class Zo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends Zo{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N0 extends Ko{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wc=new Fe,kr=new R,Wa=new R;class F0 extends Zo{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(kr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-kr.x,-kr.y,-kr.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class U0 extends Ko{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z0 extends Zo{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k0 extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ti{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class B0 extends Or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=yr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){yr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const $o="\\[\\]\\.:\\/",V0=new RegExp("["+$o+"]","g"),Jo="[^"+$o+"]",G0="[^"+$o.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",Jo),W0=/(WCOD+)?/.source.replace("WCOD",G0),q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),j0=new RegExp("^"+H0+W0+q0+X0+"$"),Y0=["material","materials","bones","map"];class K0{constructor(e,t,n){const i=n||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(e){const t=j0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=K0;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Z0{constructor(e,t,n=0,i=1/0){this.ray=new ia(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(qc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)mo(e[i],this,n,t);return n.sort(qc),n}}function qc(o,e){return o.distance-e.distance}function mo(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)mo(i[r],e,t,!0)}}class Xc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);class $0{constructor(){Pe(this,"elCanvasRoot");Pe(this,"size");Pe(this,"renderer");Pe(this,"experience");Pe(this,"cubeTextureLoader");this.elCanvasRoot=document.querySelector("#canvasRoot"),this.size={x:this.elCanvasRoot.clientWidth,y:this.elCanvasRoot.clientHeight},this.renderer=new Gu({alpha:!0,antialias:!0}),this.experience=new ai,this.renderer.toneMapping=Su,this.renderer.toneMappingExposure=1,this.renderer.outputEncoding=ze;const e=new D0().load([new URL("/webARdemo/assets/experience/hdri/px.png",self.location).href,new URL("/webARdemo/assets/experience/hdri/nx.png",self.location).href,new URL("/webARdemo/assets/experience/hdri/py.png",self.location).href,new URL("/webARdemo/assets/experience/hdri/ny.png",self.location).href,new URL("/webARdemo/assets/experience/hdri/pz.png",self.location).href,new URL("/webARdemo/assets/experience/hdri/nz.png",self.location).href]);this.experience.scene.environment=e,this.renderer.setSize(this.size.x,this.size.y),this.elCanvasRoot.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>{this.resizeCanvas()})}resizeCanvas(){this.size={x:this.elCanvasRoot.clientWidth,y:this.elCanvasRoot.clientHeight},this.experience.orbitCamera.camera.aspect=this.size.x/this.size.y,this.experience.orbitCamera.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.x,this.size.y),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}const jc={type:"change"},qa={type:"start"},Yc={type:"end"};class J0 extends Fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ut),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(jc),n.update(),r=i.NONE},this.update=function(){const T=new R,Z=new Nn().setFromUnitVectors(e.up,new R(0,1,0)),ne=Z.clone().invert(),oe=new R,le=new Nn,xe=2*Math.PI;return function(){const Xe=n.object.position;T.copy(Xe).sub(n.target),T.applyQuaternion(Z),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&w(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let I=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(I)&&isFinite(se)&&(I<-Math.PI?I+=xe:I>Math.PI&&(I-=xe),se<-Math.PI?se+=xe:se>Math.PI&&(se-=xe),I<=se?a.theta=Math.max(I,Math.min(se,a.theta)):a.theta=a.theta>(I+se)/2?Math.max(I,a.theta):Math.min(se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(ne),Xe.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||oe.distanceToSquared(n.object.position)>s||8*(1-le.dot(n.object.quaternion))>s?(n.dispatchEvent(jc),oe.copy(n.object.position),le.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",gt),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Xc,l=new Xc;let c=1;const u=new R;let d=!1;const h=new ve,m=new ve,g=new ve,f=new ve,p=new ve,_=new ve,b=new ve,M=new ve,y=new ve,x=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(T){l.theta-=T}function P(T){l.phi-=T}const G=function(){const T=new R;return function(ne,oe){T.setFromMatrixColumn(oe,0),T.multiplyScalar(-ne),u.add(T)}}(),J=function(){const T=new R;return function(ne,oe){n.screenSpacePanning===!0?T.setFromMatrixColumn(oe,1):(T.setFromMatrixColumn(oe,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ne),u.add(T)}}(),O=function(){const T=new R;return function(ne,oe){const le=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;T.copy(xe).sub(n.target);let Le=T.length();Le*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ne*Le/le.clientHeight,n.object.matrix),J(2*oe*Le/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ne*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),J(oe*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){h.set(T.clientX,T.clientY)}function X(T){b.set(T.clientX,T.clientY)}function V(T){f.set(T.clientX,T.clientY)}function N(T){m.set(T.clientX,T.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;w(2*Math.PI*g.x/Z.clientHeight),P(2*Math.PI*g.y/Z.clientHeight),h.copy(m),n.update()}function k(T){M.set(T.clientX,T.clientY),y.subVectors(M,b),y.y>0?D(v()):y.y<0&&B(v()),b.copy(M),n.update()}function te(T){p.set(T.clientX,T.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),O(_.x,_.y),f.copy(p),n.update()}function Q(T){T.deltaY<0?B(v()):T.deltaY>0&&D(v()),n.update()}function ee(T){let Z=!1;switch(T.code){case n.keys.UP:O(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:O(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:O(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:O(-n.keyPanSpeed,0),Z=!0;break}Z&&(T.preventDefault(),n.update())}function ae(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);h.set(T,Z)}}function fe(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);f.set(T,Z)}}function Y(){const T=x[0].pageX-x[1].pageX,Z=x[0].pageY-x[1].pageY,ne=Math.sqrt(T*T+Z*Z);b.set(0,ne)}function De(){n.enableZoom&&Y(),n.enablePan&&fe()}function _e(){n.enableZoom&&Y(),n.enableRotate&&ae()}function ge(T){if(x.length==1)m.set(T.pageX,T.pageY);else{const ne=ce(T),oe=.5*(T.pageX+ne.x),le=.5*(T.pageY+ne.y);m.set(oe,le)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;w(2*Math.PI*g.x/Z.clientHeight),P(2*Math.PI*g.y/Z.clientHeight),h.copy(m)}function he(T){if(x.length===1)p.set(T.pageX,T.pageY);else{const Z=ce(T),ne=.5*(T.pageX+Z.x),oe=.5*(T.pageY+Z.y);p.set(ne,oe)}_.subVectors(p,f).multiplyScalar(n.panSpeed),O(_.x,_.y),f.copy(p)}function Ce(T){const Z=ce(T),ne=T.pageX-Z.x,oe=T.pageY-Z.y,le=Math.sqrt(ne*ne+oe*oe);M.set(0,le),y.set(0,Math.pow(M.y/b.y,n.zoomSpeed)),D(y.y),b.copy(M)}function Se(T){n.enableZoom&&Ce(T),n.enablePan&&he(T)}function pe(T){n.enableZoom&&Ce(T),n.enableRotate&&ge(T)}function qe(T){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",tt)),$(T),T.pointerType==="touch"?A(T):Ye(T))}function et(T){n.enabled!==!1&&(T.pointerType==="touch"?S(T):we(T))}function tt(T){j(T),x.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(Yc),r=i.NONE}function gt(T){j(T)}function Ye(T){let Z;switch(T.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Gi.DOLLY:if(n.enableZoom===!1)return;X(T),r=i.DOLLY;break;case Gi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;V(T),r=i.PAN}else{if(n.enableRotate===!1)return;q(T),r=i.ROTATE}break;case Gi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;q(T),r=i.ROTATE}else{if(n.enablePan===!1)return;V(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qa)}function we(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;N(T);break;case i.DOLLY:if(n.enableZoom===!1)return;k(T);break;case i.PAN:if(n.enablePan===!1)return;te(T);break}}function ot(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(qa),Q(T),n.dispatchEvent(Yc))}function ut(T){n.enabled===!1||n.enablePan===!1||ee(T)}function A(T){switch(re(T),x.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;ae(),r=i.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;fe(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),r=i.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qa)}function S(T){switch(re(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(T),n.update();break;default:r=i.NONE}}function U(T){n.enabled!==!1&&T.preventDefault()}function $(T){x.push(T)}function j(T){delete E[T.pointerId];for(let Z=0;Z<x.length;Z++)if(x[Z].pointerId==T.pointerId){x.splice(Z,1);return}}function re(T){let Z=E[T.pointerId];Z===void 0&&(Z=new ve,E[T.pointerId]=Z),Z.set(T.pageX,T.pageY)}function ce(T){const Z=T.pointerId===x[0].pointerId?x[1]:x[0];return E[Z.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",gt),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}}function Cn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function $u(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},br={duration:.5,overwrite:!1,delay:0},Qo,en,at,Kt=1e8,He=1/Kt,go=Math.PI*2,Q0=go/4,ex=0,Ju=Math.sqrt,tx=Math.cos,nx=Math.sin,ft=function(e){return typeof e=="string"},Je=function(e){return typeof e=="function"},Fn=function(e){return typeof e=="number"},el=function(e){return typeof e>"u"},_n=function(e){return typeof e=="object"},Rt=function(e){return e!==!1},Qu=function(){return typeof window<"u"},Vs=function(e){return Je(e)||ft(e)},eh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bt=Array.isArray,_o=/(?:-?\.?\d|\.)+/gi,th=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nh=/[+-]=-?[.\d]+/,ih=/[^,'"\[\]\s]+/gi,ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,Xt,xo,tl,Bt={},Ys={},rh,sh=function(e){return(Ys=Ni(e,Bt))&&Vt},nl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ks=function(e,t){return!t&&console.warn(e)},ah=function(e,t){return e&&(Bt[e]=t)&&Ys&&(Ys[e]=t)||Bt},ss=function(){return 0},rx={suppressEvents:!0,isStart:!0},Kr={suppressEvents:!0},il={},ii=[],vo={},oh,Ft={},ja={},Kc=30,Ws=[],rl="",sl=function(e){var t=e[0],n,i;if(_n(t)||Je(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ws.length;i--&&!Ws[i].targetTest(t););n=Ws[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Lh(e[i],n)))||e.splice(i,1);return e},Ei=function(e){return e._gsap||sl(Zt(e))[0]._gsap},lh=function(e,t,n){return(n=e[t])&&Je(n)?e[t]():el(n)&&e.getAttribute&&e.getAttribute(t)||n},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},it=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},hr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zs=function(){var e=ii.length,t=ii.slice(0),n,i;for(vo={},ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ch=function(e,t,n,i){ii.length&&Zs(),e.render(t,n,i||en),ii.length&&Zs()},uh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ih).length<2?t:ft(e)?e.trim():e},hh=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ax=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ni=function(e,t){for(var n in t)e[n]=t[n];return e},Zc=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_n(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},$s=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Zr=function(e){var t=e.parent||je,n=e.keyframes?ax(bt(e.keyframes)):tn;if(Rt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ox=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dh=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},aa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Un=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ai=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yo=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(Kr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cx=function o(e){return!e||e._ts&&o(e.parent)},$c=function(e){return e._repeat?Mr(e._tTime,e=e.duration()+e._rDelay)*e:0},Mr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Js=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},oa=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||He)||0))},la=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),oa(e),n._dirty||Ai(n,e)),e},fh=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Js(e.rawTime(),t),(!t._dur||ms(0,t.totalDuration(),n)-t._tTime>He)&&t.render(n,!0)),Ai(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-He}},pn=function(e,t,n,i){return t.parent&&Un(t),t._start=mt((Fn(n)?n:n||e!==je?qt(e,n,t):e._time)+t._delay),t._end=mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dh(e,t,"_first","_last",e._sort?"_start":0),bo(t)||(e._recent=t),i||fh(e,t),e._ts<0&&la(e,e._tTime),e},ph=function(e,t){return(Bt.ScrollTrigger||nl("scrollTrigger",t))&&Bt.ScrollTrigger.create(t,e)},mh=function(e,t,n,i){if(ol(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&oh!==Ut.frame)return ii.push(e),e._lazy=[t,i],1},ux=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},bo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hx=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&ux(e)&&!(!e._initted&&bo(e))||(e._ts<0||e._dp._ts<0)&&!bo(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ms(0,e._tDur,t),u=Mr(l,a),e._yoyo&&u&1&&(s=1-s),u!==Mr(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||en||i||e._zTime===He||!t&&e._zTime){if(!e._initted&&mh(e,t,i,n))return;for(d=e._zTime,e._zTime=t||(n?He:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&yo(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Un(e,1),!n&&!en&&($t(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Sr=function(e,t,n,i){var r=e._repeat,s=mt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:mt(s*(r+1)+e._rDelay*r):s,a>0&&!i?la(e,e._tTime=e._tDur*a):e.parent&&oa(e),n||Ai(e.parent,e),e},Jc=function(e){return e instanceof Lt?Ai(e):Sr(e,e._dur)},fx={_start:0,endTime:ss,totalDuration:ss},qt=function o(e,t,n){var i=e.labels,r=e._recent||fx,s=e.duration()>=Kt?r.endTime(!1):e._dur,a,l,c;return ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(bt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},$r=function(e,t,n){var i=Fn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Rt(l.vars.inherit)&&l.parent;s.immediateRender=Rt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new ct(t[0],s,t[r+1])},oi=function(e,t){return e||e===0?t(e):t},ms=function(e,t,n){return n<e?e:n>t?t:n},yt=function(e,t){return!ft(e)||!(t=ix.exec(e))?"":t[1]},px=function(e,t,n){return oi(n,function(i){return ms(e,t,i)})},Mo=[].slice,gh=function(e,t){return e&&_n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_n(e[0]))&&!e.nodeType&&e!==Xt},mx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ft(i)&&!t||gh(i,1)?(r=n).push.apply(r,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return at&&!t&&at.selector?at.selector(e):ft(e)&&!n&&(xo||!wr())?Mo.call((t||tl).querySelectorAll(e),0):bt(e)?mx(e,n):gh(e)?Mo.call(e,0):e?[e]:[]},So=function(e){return e=Zt(e)[0]||Ks("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?Ks("Invalid scope")||tl.createElement("div"):e)}},_h=function(e){return e.sort(function(){return .5-Math.random()})},xh=function(e){if(Je(e))return e;var t=_n(e)?e:{each:e},n=Ci(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return ft(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,m,g){var f=(g||t).length,p=s[f],_,b,M,y,x,E,L,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Kt])[1],!w){for(L=-Kt;L<(L=g[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=s[f]=[],_=l?Math.min(w,f)*u-.5:i%w,b=w===Kt?0:l?f*d/w-.5:i/w|0,L=0,v=Kt,E=0;E<f;E++)M=E%w-_,y=b-(E/w|0),p[E]=x=c?Math.abs(c==="y"?y:M):Ju(M*M+y*y),x>L&&(L=x),x<v&&(v=x);i==="random"&&_h(p),p.max=L-v,p.min=v,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=yt(t.amount||t.each)||0,n=n&&f<0?Eh(n):n}return f=(p[h]-p.min)/p.max||0,mt(p.b+(n?n(f):f)*p.v)+p.u}},wo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Fn(n)?0:yt(n))}},vh=function(e,t){var n=bt(e),i,r;return!n&&_n(e)&&(i=n=e.radius||Kt,e.values?(e=Zt(e.values),(r=!Fn(e[0]))&&(i*=i)):e=wo(e.increment)),oi(t,n?Je(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Kt,u=0,d=e.length,h,m;d--;)r?(h=e[d].x-a,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:s,r||u===s||Fn(s)?u:u+yt(s)}:wo(e))},yh=function(e,t,n,i){return oi(bt(e)?!t:n===!0?!!(n=0):!i,function(){return bt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},_x=function(e,t){return function(n){return e(parseFloat(n))+(t||yt(n))}},xx=function(e,t,n){return Mh(e,t,0,1,n)},bh=function(e,t,n){return oi(n,function(i){return e[~~t(i)]})},vx=function o(e,t,n){var i=t-e;return bt(e)?bh(e,o(0,e.length),t):oi(n,function(r){return(i+(r-e)%i)%i+e})},yx=function o(e,t,n){var i=t-e,r=i*2;return bt(e)?bh(e,o(0,e.length-1),t):oi(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},as=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?ih:_o),n+=e.substr(t,i-t)+yh(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Mh=function(e,t,n,i,r){var s=t-e,a=i-n;return oi(r,function(l){return n+((l-e)/s*a||0)})},bx=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var s=ft(e),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(bt(e)&&!bt(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(o(e[c-1],e[c]));d--,r=function(g){g*=d;var f=Math.min(h,~~g);return u[f](g-f)},n=t}else i||(e=Ni(bt(e)?[]:{},e));if(!u){for(l in t)al.call(a,e,l,"get",t[l]);r=function(g){return ul(g,a)||(s?e.p:e)}}}return oi(n,r)},Qc=function(e,t,n){var i=e.labels,r=Kt,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},$t=function(e,t,n){var i=e.vars,r=i[t],s=at,a=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ii.length&&Zs(),a&&(at=a),u=l?r.apply(c,l):r.call(c),at=s,u},qr=function(e){return Un(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&$t(e,"onInterrupt"),e},lr,Mx=function(e){e=!e.name&&e.default||e;var t=e.name,n=Je(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ss,render:ul,add:al,kill:zx,modifier:Ux,rawVars:0},s={targetTest:0,get:0,getSetter:cl,aliases:{},register:0};if(wr(),e!==i){if(Ft[t])return;tn(i,tn($s(e,r),s)),Ni(i.prototype,Ni(r,$s(e,s))),Ft[i.prop=t]=i,e.targetTest&&(Ws.push(i),il[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ah(t,i),e.register&&e.register(Vt,i,Dt)},Ve=255,Xr={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Ya=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ve+.5|0},Sh=function(e,t,n){var i=e?Fn(e)?[e>>16,e>>8&Ve,e&Ve]:0:Xr.black,r,s,a,l,c,u,d,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xr[e])i=Xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ve,i&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(_o),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Ya(l+1/3,r,s),i[1]=Ya(l,r,s),i[2]=Ya(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(th),n&&i.length<4&&(i[3]=1),i}else i=e.match(_o)||Xr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ve,s=i[1]/Ve,a=i[2]/Ve,d=Math.max(r,s,a),h=Math.min(r,s,a),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===r?(s-a)/m+(s<a?6:0):d===s?(a-r)/m+2:(r-s)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},wh=function(e){var t=[],n=[],i=-1;return e.split(ri).forEach(function(r){var s=r.match(or)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},eu=function(e,t,n){var i="",r=(e+i).match(ri),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Sh(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=wh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ri,"1").split(or),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ri),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ri=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Sx=/hsl[a]?\(/,Th=function(e){var t=e.join(" "),n;if(ri.lastIndex=0,ri.test(t))return n=Sx.test(t),e[1]=eu(e[1],n),e[0]=eu(e[0],n,wh(e[1])),!0},os,Ut=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,d,h,m,g=function f(p){var _=o()-i,b=p===!0,M,y,x,E;if(_>e&&(n+=_-t),i+=_,x=i-n,M=x-s,(M>0||b)&&(E=++d.frame,h=x-d.time*1e3,d.time=x=x/1e3,s+=M+(M>=r?4:r-M),y=1),b||(l=c(f)),y)for(m=0;m<a.length;m++)a[m](x,h,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){rh&&(!xo&&Qu()&&(Xt=xo=window,tl=Xt.document||{},Bt.gsap=Vt,(Xt.gsapVersions||(Xt.gsapVersions=[])).push(Vt.version),sh(Ys||Xt.GreenSockGlobals||!Xt.gsap&&Xt||{}),u=Xt.requestAnimationFrame),l&&d.sleep(),c=u||function(p){return setTimeout(p,s-d.time*1e3+1|0)},os=1,g(2))},sleep:function(){(u?Xt.cancelAnimationFrame:clearTimeout)(l),os=0,c=ss},lagSmoothing:function(p,_){e=p||1/He,t=Math.min(_,e,0)},fps:function(p){r=1e3/(p||240),s=d.time*1e3+r},add:function(p,_,b){var M=_?function(y,x,E,L){p(y,x,E,L),d.remove(M)}:p;return d.remove(p),a[b?"unshift":"push"](M),wr(),M},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},d}(),wr=function(){return!os&&Ut.wake()},Re={},wx=/^[\d.\-M][\d.\-,\s]/,Tx=/["']/g,Ex=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Tx,"").trim():+c,i=l.substr(a+1).trim();return t},Ax=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Cx=function(e){var t=(e+"").split("("),n=Re[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ex(t[1])]:Ax(e).split(",").map(uh)):Re._CE&&wx.test(e)?Re._CE("",e):n},Eh=function(e){return function(t){return 1-e(1-t)}},Ah=function o(e,t){for(var n=e._first,i;n;)n instanceof Lt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ci=function(e,t){return e&&(Je(e)?e:Re[e]||Cx(e))||t},zi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Pt(e,function(a){Re[a]=Bt[a]=r,Re[s=a.toLowerCase()]=n;for(var l in r)Re[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Re[a+"."+l]=r[l]}),r},Ch=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ka=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/go*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*nx((u-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ch(a);return r=go/r,l.config=function(c,u){return o(e,c,u)},l},Za=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ch(n);return i.config=function(r){return o(e,r)},i};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;zi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Re.Linear.easeNone=Re.none=Re.Linear.easeIn;zi("Elastic",Ka("in"),Ka("out"),Ka());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};zi("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);zi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});zi("Circ",function(o){return-(Ju(1-o*o)-1)});zi("Sine",function(o){return o===1?1:-tx(o*Q0)+1});zi("Back",Za("in"),Za("out"),Za());Re.SteppedEase=Re.steps=Bt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-He;return function(a){return((i*ms(0,s,a)|0)+r)*n}}};br.ease=Re["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return rl+=o+","+o+"Params,"});var Lh=function(e,t){this.id=ex++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lh,this.set=t?t.getSetter:cl},Tr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sr(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),os||Ut.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(la(this,n),!r._dp||r.parent||fh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ch(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$c(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$c(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Mr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-He?0:this._rts,this.totalTime(ms(-this._delay,this._tDur,i),!0),oa(this),lx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Rt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Kr);var i=en;return en=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&Un(this),en=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qt(this,n),Rt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Rt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-He:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-He)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Je(n)?n:hh,a=function(){var c=i.then;i.then=null,Je(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){qr(this)},o}();tn(Tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var Lt=function(o){$u(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Rt(n.sortChildren),je&&pn(n.parent||je,Cn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ph(Cn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return $r(0,arguments,this),this},t.from=function(i,r,s){return $r(1,arguments,this),this},t.fromTo=function(i,r,s,a){return $r(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Zr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ct(i,r,qt(this,s),1),this},t.call=function(i,r,s){return pn(this,ct.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new ct(i,s,qt(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,Zr(s).immediateRender=Rt(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},t.staggerFromTo=function(i,r,s,a,l,c,u,d){return a.startAt=s,Zr(a).immediateRender=Rt(a.immediateRender),this.staggerTo(i,r,a,l,c,u,d)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:mt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,f,p,_,b,M,y,x,E,L;if(this!==je&&u>l&&i>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,M=this._ts,_=!M,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(h=mt(u%p),u===l?(f=this._repeat,h=c):(f=~~(u/p),f&&f===u/p&&(h=c,f--),h>c&&(h=c)),x=Mr(this._tTime,p),!a&&this._tTime&&x!==f&&(x=f),E&&f&1&&(h=c-h,L=1),f!==x&&!this._lock){var v=E&&x&1,w=v===(E&&f&1);if(f<x&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(L?0:mt(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Ah(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=dx(this,mt(a),mt(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&($t(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,s),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-He);break}}m=g}else{s=s||en,m=this._last;for(var P=i<0?i:h;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,s),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=P?-He:He);break}}m=g}}if(b&&!r&&(this.pause(),b.render(h>=a?0:-He)._zTime=h>=a?1:-1,this._ts))return this._start=y,oa(this),this.render(i,r,s);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Un(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Fn(r)||(r=qt(this,r,i)),!(i instanceof Tr)){if(bt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(ft(i))return this.addLabel(i,r);if(Je(i))i=ct.delayedCall(0,i);else return this}return this!==i?pn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Kt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ct?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return ft(i)?this.removeLabel(i):Je(i)?this.killTweensOf(i):(aa(this,i),i===this._recent&&(this._recent=this._last),Ai(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(Ut.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=qt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=ct.delayedCall(0,r||ss,s);return a.data="isPause",this._hasPause=1,pn(this,a,qt(this,i))},t.removePause=function(i){var r=this._first;for(i=qt(this,i);r;)r._start===i&&r.data==="isPause"&&Un(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Qn!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=Zt(i),l=this._first,c=Fn(r),u;l;)l instanceof ct?sx(l._targets,a)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=qt(s,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=ct.to(s,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||He,onStart:function(){if(s.pause(),!m){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==p&&Sr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,tn({startAt:{time:qt(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qc(this,qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qc(this,qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Ai(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ai(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=Kt,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,pn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Sr(s,s===je&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(je._ts&&(ch(je,Js(i,je)),oh=Ut.frame),Ut.frame>=Kc){Kc+=kt.autoSleep||120;var r=je._first;if((!r||!r._ts)&&kt.autoSleep&&Ut._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ut.sleep()}}},e}(Tr);tn(Lt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lx=function(e,t,n,i,r,s,a){var l=new Dt(this._pt,e,t,0,1,Nh,null,r),c=0,u=0,d,h,m,g,f,p,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=as(i)),s&&(b=[n,i],s(b,e,t),n=b[0],i=b[1]),h=n.match(Xa)||[];d=Xa.exec(i);)g=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?hr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(nh.test(i)||_)&&(l.e=0),this._pt=l,l},al=function(e,t,n,i,r,s,a,l,c,u){Je(i)&&(i=i(r||0,e,s));var d=e[t],h=n!=="get"?n:Je(d)?c?e[t.indexOf("set")||!Je(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Je(d)?c?Ox:Ih:ll,g;if(ft(i)&&(~i.indexOf("random(")&&(i=as(i)),i.charAt(1)==="="&&(g=hr(h,i)+(yt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||To)return!isNaN(h*i)&&i!==""?(g=new Dt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Fx:Oh,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&nl(t,i),Lx.call(this,e,t,h,i,m,l||kt.stringFilter,c))},Rx=function(e,t,n,i,r){if(Je(e)&&(e=Jr(e,r,t,n,i)),!_n(e)||e.style&&e.nodeType||bt(e)||eh(e))return ft(e)?Jr(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=Jr(e[a],r,t,n,i);return s},Rh=function(e,t,n,i,r,s){var a,l,c,u;if(Ft[e]&&(a=new Ft[e]).init(r,a.rawVars?t[e]:Rx(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Dt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==lr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qn,To,ol=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,s=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,d=n.runBackwards,h=n.yoyoEase,m=n.keyframes,g=n.autoRevert,f=e._dur,p=e._startAt,_=e._targets,b=e.parent,M=b&&b.data==="nested"?b.vars.targets:_,y=e._overwrite==="auto"&&!Qo,x=e.timeline,E,L,v,w,P,G,J,O,D,B,q,X,V;if(x&&(!m||!i)&&(i="none"),e._ease=Ci(i,br.ease),e._yEase=h?Eh(Ci(h===!0?i:h,br.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(O=_[0]?Ei(_[0]).harness:0,X=O&&n[O.prop],E=$s(n,il),p&&(t<0&&d&&s&&!g?p.render(-1,!0):p.revert(d&&f?Kr:rx),p._lazy=0),r){if(Un(e._startAt=ct.set(_,tn({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:Rt(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&(en||!s&&!g)&&e._startAt.revert(Kr),s&&f&&t<=0){t&&(e._zTime=t);return}}else if(d&&f&&!p){if(t&&(s=!1),v=tn({overwrite:!1,data:"isFromStart",lazy:s&&Rt(a),immediateRender:s,stagger:0,parent:b},E),X&&(v[O.prop]=X),Un(e._startAt=ct.set(_,v)),t<0&&(en?e._startAt.revert(Kr):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,He);else if(!t)return}for(e._pt=e._ptCache=0,a=f&&Rt(a)||a&&!f,L=0;L<_.length;L++){if(P=_[L],J=P._gsap||sl(_)[L]._gsap,e._ptLookup[L]=B={},vo[J.id]&&ii.length&&Zs(),q=M===_?L:M.indexOf(P),O&&(D=new O).init(P,X||E,e,q,M)!==!1&&(e._pt=w=new Dt(e._pt,P,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(N){B[N]=w}),D.priority&&(G=1)),!O||X)for(v in E)Ft[v]&&(D=Rh(v,E,e,q,P,M))?D.priority&&(G=1):B[v]=w=al.call(e,P,v,"get",E[v],q,M,0,n.stringFilter);e._op&&e._op[L]&&e.kill(P,e._op[L]),y&&e._pt&&(Qn=e,je.killTweensOf(P,B,e.globalTime(t)),V=!e.parent,Qn=0),e._pt&&a&&(vo[J.id]=1)}G&&Fh(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!V,m&&t<=0&&x.render(Kt,!0,!0)},Px=function(e,t,n,i,r,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return To=1,e.vars[t]="+=0",ol(e,a),To=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=it(n)+yt(u.e)),u.b&&(u.b=c.s+yt(u.b))},Dx=function(e,t){var n=e[0]?Ei(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=Ni({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},Ix=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(bt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},Jr=function(e,t,n,i,r){return Je(e)?e.call(t,n,i,r):ft(e)&&~e.indexOf("random(")?as(e):e},Ph=rl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dh={};Pt(Ph+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Dh[o]=1});var ct=function(o){$u(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:Zr(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=i.parent||je,M=(bt(n)||eh(n)?Fn(n[0]):"length"in i)?[n]:Zt(n),y,x,E,L,v,w,P,G;if(a._targets=M.length?sl(M):Ks("GSAP target "+n+" not found. https://greensock.com",!kt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||Vs(c)||Vs(u)){if(i=a.vars,y=a.timeline=new Lt({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:M}),y.kill(),y.parent=y._dp=Cn(a),y._start=0,h||Vs(c)||Vs(u)){if(L=M.length,P=h&&xh(h),_n(h))for(v in h)~Ph.indexOf(v)&&(G||(G={}),G[v]=h[v]);for(x=0;x<L;x++)E=$s(i,Dh),E.stagger=0,_&&(E.yoyoEase=_),G&&Ni(E,G),w=M[x],E.duration=+Jr(c,Cn(a),x,w,M),E.delay=(+Jr(u,Cn(a),x,w,M)||0)-a._delay,!h&&L===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),y.to(w,E,P?P(x,w,M):0),y._ease=Re.none;y.duration()?c=u=0:a.timeline=0}else if(g){Zr(tn(y.vars.defaults,{ease:"none"})),y._ease=Ci(g.ease||i.ease||"none");var J=0,O,D,B;if(bt(g))g.forEach(function(q){return y.to(M,q,">")}),y.duration();else{E={};for(v in g)v==="ease"||v==="easeEach"||Ix(v,g[v],E,g.easeEach);for(v in E)for(O=E[v].sort(function(q,X){return q.t-X.t}),J=0,x=0;x<O.length;x++)D=O[x],B={ease:D.e,duration:(D.t-(x?O[x-1].t:0))/100*c},B[v]=D.v,y.to(M,B,J),J+=B.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!Qo&&(Qn=Cn(a),je.killTweensOf(M),Qn=0),pn(b,Cn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===mt(b._time)&&Rt(d)&&cx(Cn(a))&&b.data!=="nested")&&(a._tTime=-He,a.render(Math.max(0,-u))),p&&ph(Cn(a),p),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-He&&!u?l:i<He?0:i,h,m,g,f,p,_,b,M,y;if(!c)hx(this,i,r,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,M=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,s);if(h=mt(d%f),d===l?(g=this._repeat,h=c):(g=~~(d/f),g&&g===d/f&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),p=Mr(this._tTime,f),h===a&&!s&&this._initted)return this._tTime=d,this;g!==p&&(M&&this._yEase&&Ah(M,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(mt(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(mh(this,u?i:h,s,r))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(h/c),this._from&&(this.ratio=b=1-b),h&&!a&&!r&&($t(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;M&&M.render(i<0?i:!h&&_?-He:M._dur*M._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&yo(this,i,r,s),$t(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&yo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Un(this,1),!r&&!(u&&!a)&&(d||a)&&($t(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.resetTo=function(i,r,s,a){os||Ut.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ol(this,l),c=this._ease(l/this._dur),Px(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(la(this,0),this.parent||dh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qr(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Qn&&Qn.vars.overwrite!==!0)._first||qr(this),this.parent&&s!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Zt(i):a,c=this._ptLookup,u=this._pt,d,h,m,g,f,p,_;if((!r||r==="all")&&ox(a,l))return r==="all"&&(this._pt=0),qr(this);for(d=this._op=this._op||[],r!=="all"&&(ft(r)&&(f={},Pt(r,function(b){return f[b]=1}),r=f),r=Dx(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],r==="all"?(d[_]=r,g=h,m={}):(m=d[_]=d[_]||{},g=r);for(f in g)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&aa(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&qr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return $r(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return $r(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return je.killTweensOf(i,r,s)},e}(Tr);tn(ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(o){ct[o]=function(){var e=new Lt,t=Mo.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var ll=function(e,t,n){return e[t]=n},Ih=function(e,t,n){return e[t](n)},Ox=function(e,t,n,i){return e[t](i.fp,n)},Nx=function(e,t,n){return e.setAttribute(t,n)},cl=function(e,t){return Je(e[t])?Ih:el(e[t])&&e.setAttribute?Nx:ll},Oh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ul=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ux=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},zx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?aa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Fh=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Dt=function(){function o(t,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||Oh,this.d=l||this,this.set=c||ll,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kx,this.m=n,this.mt=r,this.tween=i},o}();Pt(rl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return il[o]=1});Bt.TweenMax=Bt.TweenLite=ct;Bt.TimelineLite=Bt.TimelineMax=Lt;je=new Lt({sortChildren:!1,defaults:br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kt.stringFilter=Th;var Er=[],qs={},Bx=[],tu=0,$a=function(e){return(qs[e]||Bx).map(function(t){return t()})},Eo=function(){var e=Date.now(),t=[];e-tu>2&&($a("matchMediaInit"),Er.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=Xt.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),$a("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),tu=e,$a("matchMedia"))},Uh=function(){function o(t,n){this.selector=n&&So(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Je(n)&&(r=i,i=n,n=Je);var s=this,a=function(){var c=at,u=s.selector,d;return c&&c!==s&&c.data.push(s),r&&(s.selector=So(r)),at=s,d=i.apply(s,arguments),Je(d)&&s._r.push(d),at=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Je?a(s):n?s[n]=a:a},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ct&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(a){return{g:a.globalTime(0),t:a}}).sort(function(a,l){return l.g-a.g||-1}).forEach(function(a){return a.t.revert(n)}),this.data.forEach(function(a){return!(a instanceof Tr)&&a.revert&&a.revert(n)}),this._r.forEach(function(a){return a(n,r)}),this.isReverted=!0):this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){var s=Er.indexOf(this);~s&&Er.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),Vx=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){_n(n)||(n={matches:n});var s=new Uh(0,r||this.scope),a=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Xt.matchMedia(n[c]),l&&(Er.indexOf(s)<0&&Er.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Eo):l.addEventListener("change",Eo)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Qs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mx(i)})},timeline:function(e){return new Lt(e)},getTweensOf:function(e,t){return je.getTweensOf(e,t)},getProperty:function(e,t,n,i){ft(e)&&(e=Zt(e)[0]);var r=Ei(e||{}).get,s=n?hh:uh;return n==="native"&&(n=""),e&&(t?s((Ft[t]&&Ft[t].get||r)(e,t,n,i)):function(a,l,c){return s((Ft[a]&&Ft[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(u){return Vt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var s=Ft[t],a=Ei(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;lr._pt=0,d.init(e,n?u+n:u,lr,0,[e]),d.render(1,d),lr._pt&&ul(1,lr)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Vt.to(e,Ni((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ci(e.ease,br.ease)),Zc(br,e||{})},config:function(e){return Zc(kt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ft[a]&&!Bt[a]&&Ks(t+" effect requires "+a+" plugin.")}),ja[t]=function(a,l,c){return n(Zt(a),tn(l||{},r),c)},s&&(Lt.prototype[t]=function(a,l,c){return this.add(ja[t](a,_n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Re[e]=Ci(t)},parseEase:function(e,t){return arguments.length?Ci(e,t):Re},getById:function(e){return je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Lt(e),i,r;for(n.smoothChildTiming=Rt(e.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,i=je._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ct&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=r;return pn(je,n,0),n},context:function(e,t){return e?new Uh(e,t):at},matchMedia:function(e){return new Vx(e)},matchMediaRefresh:function(){return Er.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Eo()},addEventListener:function(e,t){var n=qs[e]||(qs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:vx,wrapYoyo:yx,distribute:xh,random:yh,snap:vh,normalize:xx,getUnit:yt,clamp:px,splitColor:Sh,toArray:Zt,selector:So,mapRange:Mh,pipe:gx,unitize:_x,interpolate:bx,shuffle:_h},install:sh,effects:ja,ticker:Ut,updateRoot:Lt.updateRoot,plugins:Ft,globalTimeline:je,core:{PropTween:Dt,globals:ah,Tween:ct,Timeline:Lt,Animation:Tr,getCache:Ei,_removeLinkedListItem:aa,reverting:function(){return en},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return Qo=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Qs[o]=ct[o]});Ut.add(Lt.updateRoot);lr=Qs.to({},{duration:0});var Gx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Hx=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Gx(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Ja=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(ft(r)&&(l={},Pt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Hx(a,r)}}}},Vt=Qs.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ja("roundProps",wo),Ja("modifiers"),Ja("snap",vh))||Qs;ct.version=Lt.version=Vt.version="3.11.1";rh=1;Qu()&&wr();Re.Power0;Re.Power1;Re.Power2;Re.Power3;Re.Power4;Re.Linear;Re.Quad;Re.Cubic;Re.Quart;Re.Quint;Re.Strong;Re.Elastic;Re.Back;Re.SteppedEase;Re.Bounce;Re.Sine;Re.Expo;Re.Circ;/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nu,ei,dr,hl,Mi,iu,dl,Wx=function(){return typeof window<"u"},zn={},_i=180/Math.PI,fr=Math.PI/180,rr=Math.atan2,ru=1e8,fl=/([A-Z])/g,qx=/(left|right|width|margin|padding|x)/i,Xx=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ao=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zx=function(e,t,n){return e.style[t]=n},$x=function(e,t,n){return e.style.setProperty(t,n)},Jx=function(e,t,n){return e._gsap[t]=n},Qx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ev=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},tv=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},$e="transform",un=$e+"Origin",nv=function(e){var t=this,n=this.target,i=n.style;if(e in zn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=In[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return t.tfm[r]=Ln(n,r)}):this.tfm[e]=n._gsap.x?n._gsap[e]:Ln(n,e)),this.props.indexOf($e)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(un,"")),e=$e}i&&this.props.push(e,i[e])},Bh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=2)e[r+1]?n[e[r]]=e[r+1]:n.removeProperty(e[r].replace(fl,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=dl(),r&&!r.isStart&&!n[$e]&&(Bh(n),i.uncache=1)}},Vh=function(e,t){var n={target:e,props:[],revert:iv,save:nv};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Gh,Co=function(e,t){var n=ei.createElementNS?ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ei.createElement(e);return n.style?n:ei.createElement(e)},gn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(fl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ar(t)||t,1)||""},su="O,Moz,ms,Ms,Webkit".split(","),Ar=function(e,t,n){var i=t||Mi,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(su[s]+e in r););return s<0?null:(s===3?"ms":s>=0?su[s]:"")+e},Lo=function(){Wx()&&window.document&&(nu=window,ei=nu.document,dr=ei.documentElement,Mi=Co("div")||{style:{}},Co("div"),$e=Ar($e),un=$e+"Origin",Mi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gh=!!Ar("perspective"),dl=Vt.core.reverting,hl=1)},Qa=function o(e){var t=Co("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(dr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),dr.removeChild(t),this.style.cssText=r,s},au=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hh=function(e){var t;try{t=e.getBBox()}catch{t=Qa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Qa||(t=Qa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+au(e,["x","cx","x1"])||0,y:+au(e,["y","cy","y1"])||0,width:0,height:0}:t},Wh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hh(e))},ls=function(e,t){if(t){var n=e.style;t in zn&&t!==un&&(t=$e),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(fl,"-$1").toLowerCase())):n.removeAttribute(t)}},ti=function(e,t,n,i,r,s){var a=new Dt(e._pt,t,n,0,1,s?kh:zh);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},ou={deg:1,rad:1,turn:1},rv={grid:1,flex:1},si=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=Mi.style,l=qx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,f,p,_;return i===s||!r||ou[i]||ou[s]?r:(s!=="px"&&!h&&(r=o(e,t,n,"px")),_=e.getCTM&&Wh(e),(m||s==="%")&&(zn[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],it(m?r/g*d:r/100*g)):(a[l?"width":"height"]=d+(h?s:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===ei||!f.appendChild)&&(f=ei.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Ut.time&&!p.uncache?it(r/p.width*d):((m||s==="%")&&!rv[gn(f,"display")]&&(a.position=gn(e,"position")),f===e&&(a.position="static"),f.appendChild(Mi),g=Mi[u],f.removeChild(Mi),a.position="absolute",l&&m&&(p=Ei(f),p.time=Ut.time,p.width=f[u]),it(h?g*r/d:g&&r?d/g*r:0))))},Ln=function(e,t,n,i){var r;return hl||Lo(),t in In&&t!=="transform"&&(t=In[t],~t.indexOf(",")&&(t=t.split(",")[0])),zn[t]&&t!=="transform"?(r=us(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ta(gn(e,un))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ea[t]&&ea[t](e,t,n)||gn(e,t)||lh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?si(e,t,r,n)+n:r},sv=function(e,t,n,i){if(!n||n==="none"){var r=Ar(t,e,1),s=r&&gn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var a=new Dt(this._pt,e.style,t,0,1,Nh),l=0,c=0,u,d,h,m,g,f,p,_,b,M,y,x;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=gn(e,t)||i,e.style[t]=n),u=[n,i],Th(u),n=u[0],i=u[1],h=n.match(or)||[],x=i.match(or)||[],x.length){for(;d=or.exec(i);)p=d[0],b=i.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(f=h[c++]||"")&&(m=parseFloat(f)||0,y=f.substr((m+"").length),p.charAt(1)==="="&&(p=hr(m,p)+y),_=parseFloat(p),M=p.substr((_+"").length),l=or.lastIndex-M.length,M||(M=M||kt.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(m=si(e,t,f,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?kh:zh;return nh.test(i)&&(a.e=0),this._pt=a,a},lu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},av=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=lu[n]||n,t[1]=lu[i]||i,t.join(" ")},ov=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],zn[a]&&(l=1,a=a==="transformOrigin"?un:$e),ls(n,a);l&&(ls(n,$e),s&&(s.svg&&n.removeAttribute("transform"),us(n,1),s.uncache=1,Bh(i)))}},ea={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Dt(e._pt,t,n,0,0,ov);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},cs=[1,0,0,1,0,0],qh={},Xh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cu=function(e){var t=gn(e,$e);return Xh(t)?cs:t.substr(7).match(th).map(it)},pl=function(e,t){var n=e._gsap||Ei(e),i=e.style,r=cu(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?cs:r):(r===cs&&!e.offsetParent&&e!==dr&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextElementSibling,dr.appendChild(e)),r=cu(e),l?i.display=l:ls(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):dr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ro=function(e,t,n,i,r,s){var a=e._gsap,l=r||pl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],b=l[5],M=t.split(" "),y=parseFloat(M[0])||0,x=parseFloat(M[1])||0,E,L,v,w;n?l!==cs&&(L=m*p-g*f)&&(v=y*(p/L)+x*(-f/L)+(f*b-p*_)/L,w=y*(-g/L)+x*(m/L)-(m*b-g*_)/L,y=v,x=w):(E=Hh(e),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),x=E.y+(~(M[1]||M[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&a.smooth?(_=y-c,b=x-u,a.xOffset=d+(_*m+b*f)-_,a.yOffset=h+(_*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=x,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[un]="0px 0px",s&&(ti(s,a,"xOrigin",c,y),ti(s,a,"yOrigin",u,x),ti(s,a,"xOffset",d,a.xOffset),ti(s,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+x)},us=function(e,t){var n=e._gsap||new Lh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=gn(e,un)||"0",u,d,h,m,g,f,p,_,b,M,y,x,E,L,v,w,P,G,J,O,D,B,q,X,V,N,k,te,Q,ee,ae,fe;return u=d=h=f=p=_=b=M=y=0,m=g=1,n.svg=!!(e.getCTM&&Wh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[$e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+l[$e]),i.scale=i.rotate=i.translate="none"),L=pl(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ro(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,L)),x=n.xOrigin||0,E=n.yOrigin||0,L!==cs&&(G=L[0],J=L[1],O=L[2],D=L[3],u=B=L[4],d=q=L[5],L.length===6?(m=Math.sqrt(G*G+J*J),g=Math.sqrt(D*D+O*O),f=G||J?rr(J,G)*_i:0,b=O||D?rr(O,D)*_i+f:0,b&&(g*=Math.abs(Math.cos(b*fr))),n.svg&&(u-=x-(x*G+E*O),d-=E-(x*J+E*D))):(fe=L[6],ee=L[7],k=L[8],te=L[9],Q=L[10],ae=L[11],u=L[12],d=L[13],h=L[14],v=rr(fe,Q),p=v*_i,v&&(w=Math.cos(-v),P=Math.sin(-v),X=B*w+k*P,V=q*w+te*P,N=fe*w+Q*P,k=B*-P+k*w,te=q*-P+te*w,Q=fe*-P+Q*w,ae=ee*-P+ae*w,B=X,q=V,fe=N),v=rr(-O,Q),_=v*_i,v&&(w=Math.cos(-v),P=Math.sin(-v),X=G*w-k*P,V=J*w-te*P,N=O*w-Q*P,ae=D*P+ae*w,G=X,J=V,O=N),v=rr(J,G),f=v*_i,v&&(w=Math.cos(v),P=Math.sin(v),X=G*w+J*P,V=B*w+q*P,J=J*w-G*P,q=q*w-B*P,G=X,B=V),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=it(Math.sqrt(G*G+J*J+O*O)),g=it(Math.sqrt(q*q+fe*fe)),v=rr(B,q),b=Math.abs(v)>2e-4?v*_i:0,y=ae?1/(ae<0?-ae:ae):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Xh(gn(e,$e)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=it(m),n.scaleY=it(g),n.rotation=it(f)+a,n.rotationX=it(p)+a,n.rotationY=it(_)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[un]=ta(c)),n.xOffset=n.yOffset=0,n.force3D=kt.force3D,n.renderTransform=n.svg?cv:Gh?jh:lv,n.uncache=0,n},ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},eo=function(e,t,n){var i=yt(t);return it(parseFloat(t)+parseFloat(si(e,"x",n+"px",i)))+i},lv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jh(e,t)},fi="0deg",Br="0px",pi=") ",jh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,M=n.zOrigin,y="",x=_==="auto"&&e&&e!==1||_===!0;if(M&&(d!==fi||u!==fi)){var E=parseFloat(u)*fr,L=Math.sin(E),v=Math.cos(E),w;E=parseFloat(d)*fr,w=Math.cos(E),s=eo(b,s,L*w*-M),a=eo(b,a,-Math.sin(E)*-M),l=eo(b,l,v*w*-M+M)}p!==Br&&(y+="perspective("+p+pi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(x||s!==Br||a!==Br||l!==Br)&&(y+=l!==Br||x?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+pi),c!==fi&&(y+="rotate("+c+pi),u!==fi&&(y+="rotateY("+u+pi),d!==fi&&(y+="rotateX("+d+pi),(h!==fi||m!==fi)&&(y+="skew("+h+", "+m+pi),(g!==1||f!==1)&&(y+="scale("+g+", "+f+pi),b.style[$e]=y||"translate(0, 0)"},cv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,M=parseFloat(s),y=parseFloat(a),x,E,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fr,c*=fr,x=Math.cos(l)*d,E=Math.sin(l)*d,L=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=fr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,E*=w)),x=it(x),E=it(E),L=it(L),v=it(v)):(x=d,v=h,E=L=0),(M&&!~(s+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=si(m,"x",s,"px"),y=si(m,"y",a,"px")),(g||f||p||_)&&(M=it(M+g-(g*x+f*L)+p),y=it(y+f-(g*E+f*v)+_)),(i||r)&&(w=m.getBBox(),M=it(M+i/100*w.width),y=it(y+r/100*w.height)),w="matrix("+x+","+E+","+L+","+v+","+M+","+y+")",m.setAttribute("transform",w),b&&(m.style[$e]=w)},uv=function(e,t,n,i,r){var s=360,a=ft(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?_i:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=r.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*ru)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*ru)%s-~~(c/s)*s)),e._pt=h=new Dt(e._pt,t,n,i,c,jx),h.e=u,h.u="deg",e._props.push(n),h},uu=function(e,t){for(var n in t)e[n]=t[n];return e},hv=function(e,t,n){var i=uu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[$e]=t,a=us(n,1),ls(n,$e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[$e],s[$e]=t,a=us(n,1),s[$e]=c);for(l in zn)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(m=yt(c),g=yt(u),d=m!==g?si(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Dt(e._pt,a,l,d,h-d,Ao),e._pt.u=g||0,e._props.push(l));uu(a,i)};Pt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});ea[e>1?"border"+o:o]=function(a,l,c,u,d){var h,m;if(arguments.length<4)return h=s.map(function(g){return Ln(a,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},s.forEach(function(g,f){return m[g]=h[f]=h[f]||h[(f-1)/2|0]}),a.init(l,m,d)}});var Yh={name:"css",register:Lo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,h,m,g,f,p,_,b,M,y,x,E,L,v;hl||Lo(),this.styles=this.styles||Vh(e),v=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(Ft[f]&&Rh(f,t,n,i,e,r)))){if(m=typeof u,g=ea[f],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=as(u)),g)g(this,e,f,u,n)&&(L=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",ri.lastIndex=0,ri.test(c)||(p=yt(c),_=yt(u)),_?p!==_&&(c=si(e,f,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,f),s.push(f),v.push(f,a[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],ft(c)&&~c.indexOf("random(")&&(c=as(c)),yt(c+"")||(c+=kt.units[f]||yt(Ln(e,f))||""),(c+"").charAt(1)==="="&&(c=Ln(e,f))):c=Ln(e,f),h=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),f in In&&(f==="autoAlpha"&&(h===1&&Ln(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",a.visibility),ti(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=In[f],~f.indexOf(",")&&(f=f.split(",")[0]))),M=f in zn,M){if(this.styles.save(f),y||(x=e._gsap,x.renderTransform&&!t.parseTransform||us(e,t.parseTransform),E=t.smoothOrigin!==!1&&x.smooth,y=this._pt=new Dt(this._pt,a,$e,0,1,x.renderTransform,x,0,-1),y.dep=1),f==="scale")this._pt=new Dt(this._pt,x,"scaleY",x.scaleY,(b?hr(x.scaleY,b+d):d)-x.scaleY||0,Ao),this._pt.u=0,s.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(un,a[un]),u=av(u),x.svg?Ro(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&ti(this,x,"zOrigin",x.zOrigin,_),ti(this,a,f,ta(c),ta(u)));continue}else if(f==="svgOrigin"){Ro(e,u,1,E,0,this);continue}else if(f in qh){uv(this,x,f,h,b?hr(h,b+u):u);continue}else if(f==="smoothOrigin"){ti(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){hv(this,u,e);continue}}else f in a||(f=Ar(f)||f);if(M||(d||d===0)&&(h||h===0)&&!Xx.test(u)&&f in a)p=(c+"").substr((h+"").length),d||(d=0),_=yt(u)||(f in kt.units?kt.units[f]:p),p!==_&&(h=si(e,f,c,_)),this._pt=new Dt(this._pt,M?x:a,f,h,(b?hr(h,b+d):d)-h,!M&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?Kx:Ao),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Yx);else if(f in a)sv.call(this,e,f,c,b?b+u:u);else if(f in e)this.add(e,f,c||e[f],b?b+u:u,i,r);else{nl(f,u);continue}M||v.push(f,a[f]),s.push(f)}}L&&Fh(this)},render:function(e,t){if(t.tween._time||!dl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ln,aliases:In,getSetter:function(e,t,n){var i=In[t];return i&&i.indexOf(",")<0&&(t=i),t in zn&&t!==un&&(e._gsap.x||Ln(e,"x"))?n&&iu===n?t==="scale"?Qx:Jx:(iu=n||{})&&(t==="scale"?ev:tv):e.style&&!el(e.style[t])?Zx:~t.indexOf("-")?$x:cl(e,t)},core:{_removeProperty:ls,_getMatrix:pl}};Vt.utils.checkPrefix=Ar;Vt.core.getStyleSaver=Vh;(function(o,e,t,n){var i=Pt(o+","+e+","+t,function(r){zn[r]=1});Pt(e,function(r){kt.units[r]="deg",qh[r]=1}),In[i[13]]=o+","+e,Pt(n,function(r){var s=r.split(":");In[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){kt.units[o]="px"});Vt.registerPlugin(Yh);var Po=Vt.registerPlugin(Yh)||Vt;Po.core.Tween;const dv=[new R(-.3,.9,-.2),new R(.35,.55,-.27),new R(0,.4,.4),new R(.7,.5,.7)];class fv{constructor(){Pe(this,"experience");Pe(this,"camera");Pe(this,"orbitControls");this.experience=new ai,this.camera=new wt(75,this.experience.renderCanvas.size.x/this.experience.renderCanvas.size.y,.1,1e3),this.orbitControls=new J0(this.camera,this.experience.renderCanvas.renderer.domElement),this.camera.position.set(0,0,-5),this.shiftPosition(3,new R(0,.35,.1))}shiftPosition(e,t){if(!this.orbitControls.enabled)return;const n=dv[e];this.orbitControls.enabled=!1,Po.to(this.orbitControls.target,{duration:.5,x:t.x,y:t.y,z:t.z}),Po.to(this.camera.position,{duration:1,x:n.x,y:n.y,z:n.z,onComplete:()=>{this.orbitControls.enabled=!0}})}update(){this.orbitControls.update()}}let hu=0;class to{constructor(e,t,n){Pe(this,"position");Pe(this,"experience");Pe(this,"elCanvasOverlay");Pe(this,"id");Pe(this,"htmlElement");Pe(this,"rayCaster");this.position=e,this.experience=new ai,this.elCanvasOverlay=document.querySelector("#canvasOverlay"),this.id=hu,hu+=1,this.rayCaster=new Z0,this.htmlElement=document.createElement("div"),this.htmlElement.classList.add("labelDivHolder"),this.htmlElement.innerHTML=this.createHTMLTemplate(t,n),this.elCanvasOverlay.appendChild(this.htmlElement),this.htmlElement.addEventListener("pointerup",()=>{this.experience.orbitCamera.shiftPosition(this.id,this.experience.labels[this.id].position)})}toggleVisibility(e){e?this.htmlElement.children[0].classList.remove("invisible"):this.htmlElement.children[0].classList.add("invisible")}update(){if(!this.experience.modelLoader.model)return;const e=this.position.clone();e.project(this.experience.orbitCamera.camera);const t={x:(e.x+1)*this.experience.renderCanvas.size.x/2,y:(-e.y+1)*this.experience.renderCanvas.size.y/2};this.htmlElement.style.transform=`translate(${t.x}px, ${t.y}px)`,this.rayCaster.setFromCamera(e,this.experience.orbitCamera.camera);const n=this.rayCaster.intersectObject(this.experience.modelLoader.model,!0);if(n.length===0)this.toggleVisibility(!0);else{const i=n[0].distance,r=this.position.distanceTo(this.experience.orbitCamera.camera.position);i<r?this.toggleVisibility(!1):this.toggleVisibility(!0)}}createHTMLTemplate(e,t){return`
    <div id="label${this.id.toString()}" class="labelRoot overlayInput  ">
      <div class="labelNode display flex flexAlignCenter flexJustifyCenter roboto">i</div>
      <div class="labelTextPanel noInput ">
        <h3 class="lato">${e}</h3>
        <p class="lato">${t}</p>
      </div>
    </div>
    `}}class pv extends Or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Cv(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Ti.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ku(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=e;else if(Ti.decodeText(new Uint8Array(e,0,4))===Kh){try{s[Ae.KHR_BINARY_GLTF]=new Lv(e)}catch(d){i&&i(d);return}r=s[Ae.KHR_BINARY_GLTF].content}else r=Ti.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Gv(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);a[d.name]=d,s[d.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const d=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(d){case Ae.KHR_MATERIALS_UNLIT:s[d]=new _v;break;case Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[d]=new Dv;break;case Ae.KHR_DRACO_MESH_COMPRESSION:s[d]=new Rv(l,this.dracoLoader);break;case Ae.KHR_TEXTURE_TRANSFORM:s[d]=new Pv;break;case Ae.KHR_MESH_QUANTIZATION:s[d]=new Iv;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function mv(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class gv{constructor(e){this.parser=e,this.name=Ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new k0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new U0(u),c.distance=d;break;case"spot":c=new N0(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class _v{constructor(){this.name=Ae.KHR_MATERIALS_UNLIT}getMaterialType(){return $n}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ze))}return Promise.all(i)}}class xv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ze)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Mv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Me(a[0],a[1],a[2]),Promise.all(r)}}class wv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Tv{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Me(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,ze)),Promise.all(r)}}class Ev{constructor(e){this.parser=e,this.name=Ae.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Av{constructor(e){this.parser=e,this.name=Ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Cv{constructor(e){this.name=Ae.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(m),u,d,h,i.mode,i.filter),m})})}else return null}}const Kh="glTF",Vr=12,du={JSON:1313821514,BIN:5130562};class Lv{constructor(e){this.name=Ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vr);if(this.header={magic:Ti.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Vr,i=new DataView(e,Vr);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===du.JSON){const l=new Uint8Array(e,Vr+r,s);this.content=Ti.decodeText(l)}else if(a===du.BIN){const l=Vr+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ae.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const d=Io[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=Io[u]||u.toLowerCase();if(s[u]!==void 0){const h=n.accessors[e.attributes[u]],m=hs[h.componentType];c[d]=m.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d){i.decodeDracoFile(u,function(h){for(const m in h.attributes){const g=h.attributes[m],f=l[m];f!==void 0&&(g.normalized=f)}d(h)},a,c)})})}}class Pv{constructor(){this.name=Ae.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Do extends sa{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Me().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Dv{constructor(){this.name=Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Do}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Me(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,ze)),e.emissive=new Me(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Me(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s,ze))}return Promise.all(r)}createMaterial(e){const t=new Do(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Uo,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Iv{constructor(){this.name=Ae.KHR_MESH_QUANTIZATION}}class Zh extends ps{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,m=h*d,g=e*c,f=g-c,p=-2*m+3*h,_=m-h,b=1-p,M=_-h+d;for(let y=0;y!==a;y++){const x=s[f+y+a],E=s[f+y+l]*u,L=s[g+y+a],v=s[g+y]*u;r[y]=b*x+M*E+p*L+_*v}return r}}const Ov=new Nn;class Nv extends Zh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ov.fromArray(r).normalize().toArray(r),r}}const En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fu={9728:pt,9729:Ct,9984:oo,9985:Tu,9986:lo,9987:Cr},pu={33071:jt,33648:Xs,10497:gr},mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Io={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fv={CUBICSPLINE:void 0,LINEAR:xr,STEP:es},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),o.DefaultMaterial}function Gr(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zv(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;s.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;l.push(h)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=d),r&&(o.morphAttributes.color=h),o.morphTargetsRelative=!0,o})}function kv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bv(o){const e=o.extensions&&o.extensions[Ae.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+gu(e.attributes):t=o.indices+":"+gu(o.attributes)+":"+o.mode,t}function gu(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Oo(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Gv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new I0(this.options.manager):this.textureLoader=new B0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ku(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Gr(r,a,i),xi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Ti.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=mu[i.type],c=hs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let f,p;if(m&&m!==d){const _=Math.floor(h/m),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let M=t.cache.get(b);M||(f=new c(a,_*m,i.count*m/u),M=new f0(f,m/u),t.cache.add(b,M)),p=new qo(M,l,h%m/u,g)}else a===null?f=new c(i.count*l):f=new c(a,h,i.count*l),p=new zt(f,l,g);if(i.sparse!==void 0){const _=mu.SCALAR,b=hs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,x=new b(s[1],M,i.sparse.count*_),E=new c(s[2],y,i.sparse.count*l);a!==null&&(p=new zt(p.array.slice(),p.itemSize,p.normalized));for(let L=0,v=x.length;L<v;L++){const w=x[L];if(p.setX(w,E[L*l]),l>=2&&p.setY(w,E[L*l+1]),l>=3&&p.setZ(w,E[L*l+2]),l>=4&&p.setW(w,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,s.name&&(u.name=s.name);const h=(r.samplers||{})[s.sampler]||{};return u.magFilter=fu[h.magFilter]||Ct,u.minFilter=fu[h.minFilter]||Cr,u.wrapS=pu[h.wrapS]||gr,u.wrapT=pu[h.wrapT]||gr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:s.mimeType});return l=a.createObjectURL(h),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(f){const p=new Tt(f);p.needsUpdate=!0,h(p)}),t.load(Ti.resolveURL(d,r.path),g,void 0,m)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=s.mimeType||Vv(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ae.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[Ae.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qu,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wu,mn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return sa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const d=i[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else if(l[Ae.KHR_MATERIALS_UNLIT]){const d=i[Ae.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,ze)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pn);const u=r.alphaMode||no.OPAQUE;if(u===no.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===no.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==$n&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&s!==$n&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==$n&&(a.emissive=new Me().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==$n&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ze)),Promise.all(c).then(function(){let d;return s===Do?d=i[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):d=new s(a),r.name&&(d.name=r.name),xi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Gr(i,d,r),d})}createUniqueName(e){const t=Be.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _u(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Bv(c),d=i[u];if(d)s.push(d.promise);else{let h;c.extensions&&c.extensions[Ae.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=_u(new hn,c,t),i[u]={primitive:c,promise:h},s.push(h)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?Uv(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const f=u[m],p=s[m];let _;const b=c[m];if(p.mode===En.TRIANGLES||p.mode===En.TRIANGLE_STRIP||p.mode===En.TRIANGLE_FAN||p.mode===void 0)_=r.isSkinnedMesh===!0?new m0(f,b):new ln(f,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===En.TRIANGLE_STRIP?_.geometry=xu(_.geometry,Kd):p.mode===En.TRIANGLE_FAN&&(_.geometry=xu(_.geometry,Au));else if(p.mode===En.LINES)_=new x0(f,b);else if(p.mode===En.LINE_STRIP)_=new jo(f,b);else if(p.mode===En.LINE_LOOP)_=new v0(f,b);else if(p.mode===En.POINTS)_=new y0(f,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&kv(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),xi(_,r),p.extensions&&Gr(i,_,p),t.assignFinalMaterial(_),d.push(_)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return d[0];const h=new Jn;t.associations.set(h,{meshes:e});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(pf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ho(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const d=n.channels[c],h=n.samplers[d.sampler],m=d.target,g=m.node,f=n.parameters!==void 0?n.parameters[h.input]:h.input,p=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",f)),s.push(this.getDependency("accessor",p)),a.push(h),l.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2],m=c[3],g=c[4],f=[];for(let _=0,b=u.length;_<b;_++){const M=u[_],y=d[_],x=h[_],E=m[_],L=g[_];if(M===void 0)continue;M.updateMatrix();let v;switch(Kn[L.path]){case Kn.weights:v=is;break;case Kn.rotation:v=Oi;break;case Kn.position:case Kn.scale:default:v=rs;break}const w=M.name?M.name:M.uuid,P=E.interpolation!==void 0?Fv[E.interpolation]:xr,G=[];Kn[L.path]===Kn.weights?M.traverse(function(O){O.morphTargetInfluences&&G.push(O.name?O.name:O.uuid)}):G.push(w);let J=x.array;if(x.normalized){const O=Oo(J.constructor),D=new Float32Array(J.length);for(let B=0,q=J.length;B<q;B++)D[B]=J[B]*O;J=D}for(let O=0,D=G.length;O<D;O++){const B=new v(G[O]+"."+Kn[L.path],y.array,J,P);E.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(X){const V=this instanceof Oi?Nv:Zh;return new V(this.times,this.values,this.getValueSize()/3,X)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(B)}}const p=n.name?n.name:"animation_"+e;return new E0(p,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Hu:a.length>1?l=new Jn:a.length===1?l=a[0]:l=new Qe,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=s),xi(l,r),r.extensions&&Gr(n,l,r),r.matrix!==void 0){const c=new Fe;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new Jn;i.name&&(s.name=r.createUniqueName(i.name)),xi(s,i),i.extensions&&Gr(n,s,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push($h(a[c],s,t,r));return Promise.all(l).then(function(){const c=u=>{const d=new Map;for(const[h,m]of r.associations)(h instanceof mn||h instanceof Tt)&&d.set(h,m);return u.traverse(h=>{const m=r.associations.get(h);m!=null&&d.set(h,m)}),d};return r.associations=c(s),s})}}function $h(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(a){s=a;const l=[];for(let c=0,u=s.joints.length;c<u;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let d=0,h=a.length;d<h;d++){const m=a[d];if(m){c.push(m);const g=new Fe;s.inverseBindMatrices!==void 0&&g.fromArray(s.inverseBindMatrices.array,d*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[d])}l.bind(new Xo(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];s.push($h(u,r,t,n))}}return Promise.all(s)})}function Hv(o,e,t){const n=e.attributes,i=new Lr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=Oo(hs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const f=Oo(hs[h.componentType]);l.multiplyScalar(f)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Rr;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function _u(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=Io[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return xi(o,e),Hv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zv(o,e.targets,t):o})}function xu(o,e){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Au)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r}class Wv{constructor(){Pe(this,"experience");Pe(this,"model");this.experience=new ai,this.loadModelAndTexture()}async loadModelAndTexture(){const e=new URL("/webARdemo/assets/experience/microscope/microscope.glb",self.location).href;new pv().load(e,n=>{var i,r;this.model=n.scene,this.experience.scene.add(this.model),this.experience.removeLoader(),(i=document.querySelector(".arButtonsRoot"))==null||i.classList.toggle("hide"),(r=document.querySelector("#canvasOverlay"))==null||r.classList.toggle("hide")})}}var qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},No={exports:{}};(function(o,e){(function(t,n){var i="1.0.2",r="",s="?",a="function",l="undefined",c="object",u="string",d="major",h="model",m="name",g="type",f="vendor",p="version",_="architecture",b="console",M="mobile",y="tablet",x="smarttv",E="wearable",L="embedded",v=255,w="Amazon",P="Apple",G="ASUS",J="BlackBerry",O="Browser",D="Chrome",B="Edge",q="Firefox",X="Google",V="Huawei",N="LG",k="Microsoft",te="Motorola",Q="Opera",ee="Samsung",ae="Sony",fe="Xiaomi",Y="Zebra",De="Facebook",_e=function(A,S){var U={};for(var $ in A)S[$]&&S[$].length%2===0?U[$]=S[$].concat(A[$]):U[$]=A[$];return U},ge=function(A){for(var S={},U=0;U<A.length;U++)S[A[U].toUpperCase()]=A[U];return S},he=function(A,S){return typeof A===u?Ce(S).indexOf(Ce(A))!==-1:!1},Ce=function(A){return A.toLowerCase()},Se=function(A){return typeof A===u?A.replace(/[^\d\.]/g,r).split(".")[0]:n},pe=function(A,S){if(typeof A===u)return A=A.replace(/^\s\s*/,r).replace(/\s\s*$/,r),typeof S===l?A:A.substring(0,v)},qe=function(A,S){for(var U=0,$,j,re,ce,T,Z;U<S.length&&!T;){var ne=S[U],oe=S[U+1];for($=j=0;$<ne.length&&!T;)if(T=ne[$++].exec(A),T)for(re=0;re<oe.length;re++)Z=T[++j],ce=oe[re],typeof ce===c&&ce.length>0?ce.length===2?typeof ce[1]==a?this[ce[0]]=ce[1].call(this,Z):this[ce[0]]=ce[1]:ce.length===3?typeof ce[1]===a&&!(ce[1].exec&&ce[1].test)?this[ce[0]]=Z?ce[1].call(this,Z,ce[2]):n:this[ce[0]]=Z?Z.replace(ce[1],ce[2]):n:ce.length===4&&(this[ce[0]]=Z?ce[3].call(this,Z.replace(ce[1],ce[2])):n):this[ce]=Z||n;U+=2}},et=function(A,S){for(var U in S)if(typeof S[U]===c&&S[U].length>0){for(var $=0;$<S[U].length;$++)if(he(S[U][$],A))return U===s?n:U}else if(he(S[U],A))return U===s?n:U;return A},tt={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},gt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ye={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[m,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[m,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[m,p],[/opios[\/ ]+([\w\.]+)/i],[p,[m,Q+" Mini"]],[/\bopr\/([\w\.]+)/i],[p,[m,Q]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[m,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[m,"UC"+O]],[/\bqbcore\/([\w\.]+)/i],[p,[m,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[m,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[m,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[m,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[m,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[m,/(.+)/,"$1 Secure "+O],p],[/\bfocus\/([\w\.]+)/i],[p,[m,q+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[m,Q+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[m,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[m,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[m,Q+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[m,"MIUI "+O]],[/fxios\/([-\w\.]+)/i],[p,[m,q]],[/\bqihu|(qi?ho?o?|360)browser/i],[[m,"360 "+O]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[m,/(.+)/,"$1 "+O],p],[/(comodo_dragon)\/([\w\.]+)/i],[[m,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[m,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[m],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[m,De],p],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[m,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[m,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[m,D+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[m,D+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[m,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[m,p],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[p,[m,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[p,m],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[m,[p,et,tt]],[/(webkit|khtml)\/([\w\.]+)/i],[m,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[m,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[m,q+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[m,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[_,"amd64"]],[/(ia32(?=;))/i],[[_,Ce]],[/((?:i[346]|x)86)[;\)]/i],[[_,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[_,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[_,"armhf"]],[/windows (ce|mobile); ppc;/i],[[_,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[_,/ower/,r,Ce]],[/(sun4\w)[;\)]/i],[[_,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[_,Ce]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[f,ee],[g,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[f,ee],[g,M]],[/\((ip(?:hone|od)[\w ]*);/i],[h,[f,P],[g,M]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[f,P],[g,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[f,V],[g,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[h,[f,V],[g,M]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[f,fe],[g,M]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[f,fe],[g,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[f,"OPPO"],[g,M]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[f,"Vivo"],[g,M]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[h,[f,"Realme"],[g,M]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[f,te],[g,M]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[f,te],[g,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[f,N],[g,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[f,N],[g,M]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[f,"Lenovo"],[g,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[f,"Nokia"],[g,M]],[/(pixel c)\b/i],[h,[f,X],[g,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[f,X],[g,M]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[f,ae],[g,M]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[f,ae],[g,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[f,"OnePlus"],[g,M]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[f,w],[g,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[f,w],[g,M]],[/(playbook);[-\w\),; ]+(rim)/i],[h,f,[g,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[f,J],[g,M]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[f,G],[g,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[f,G],[g,M]],[/(nexus 9)/i],[h,[f,"HTC"],[g,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[f,[h,/_/g," "],[g,M]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[f,"Acer"],[g,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[f,"Meizu"],[g,M]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[f,"Sharp"],[g,M]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,h,[g,M]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,h,[g,y]],[/(surface duo)/i],[h,[f,k],[g,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[f,"Fairphone"],[g,M]],[/(u304aa)/i],[h,[f,"AT&T"],[g,M]],[/\bsie-(\w*)/i],[h,[f,"Siemens"],[g,M]],[/\b(rct\w+) b/i],[h,[f,"RCA"],[g,y]],[/\b(venue[\d ]{2,7}) b/i],[h,[f,"Dell"],[g,y]],[/\b(q(?:mv|ta)\w+) b/i],[h,[f,"Verizon"],[g,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[f,"Barnes & Noble"],[g,y]],[/\b(tm\d{3}\w+) b/i],[h,[f,"NuVision"],[g,y]],[/\b(k88) b/i],[h,[f,"ZTE"],[g,y]],[/\b(nx\d{3}j) b/i],[h,[f,"ZTE"],[g,M]],[/\b(gen\d{3}) b.+49h/i],[h,[f,"Swiss"],[g,M]],[/\b(zur\d{3}) b/i],[h,[f,"Swiss"],[g,y]],[/\b((zeki)?tb.*\b) b/i],[h,[f,"Zeki"],[g,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],h,[g,y]],[/\b(ns-?\w{0,9}) b/i],[h,[f,"Insignia"],[g,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[f,"NextBook"],[g,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],h,[g,M]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],h,[g,M]],[/\b(ph-1) /i],[h,[f,"Essential"],[g,M]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[f,"Envizen"],[g,y]],[/\b(trio[-\w\. ]+) b/i],[h,[f,"MachSpeed"],[g,y]],[/\btu_(1491) b/i],[h,[f,"Rotor"],[g,y]],[/(shield[\w ]+) b/i],[h,[f,"Nvidia"],[g,y]],[/(sprint) (\w+)/i],[f,h,[g,M]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[f,k],[g,M]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[f,Y],[g,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[f,Y],[g,M]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,h,[g,b]],[/droid.+; (shield) bui/i],[h,[f,"Nvidia"],[g,b]],[/(playstation [345portablevi]+)/i],[h,[f,ae],[g,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[f,k],[g,b]],[/smart-tv.+(samsung)/i],[f,[g,x]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[f,ee],[g,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,N],[g,x]],[/(apple) ?tv/i],[f,[h,P+" TV"],[g,x]],[/crkey/i],[[h,D+"cast"],[f,X],[g,x]],[/droid.+aft(\w)( bui|\))/i],[h,[f,w],[g,x]],[/\(dtv[\);].+(aquos)/i],[h,[f,"Sharp"],[g,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,pe],[h,pe],[g,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[g,x]],[/((pebble))app/i],[f,h,[g,E]],[/droid.+; (glass) \d/i],[h,[f,X],[g,E]],[/droid.+; (wt63?0{2,3})\)/i],[h,[f,Y],[g,E]],[/(quest( 2)?)/i],[h,[f,De],[g,E]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[g,L]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[h,[g,M]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[g,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[g,y]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[g,M]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[m,B+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[m,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[m,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,m]],os:[[/microsoft (windows) (vista|xp)/i],[m,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[m,[p,et,gt]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,"Windows"],[p,et,gt]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[m,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[m,"Mac OS"],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[p,m],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[m,p],[/\(bb(10);/i],[p,[m,J]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[m,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[m,q+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[m,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[m,D+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[m,"Chromium OS"],p],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[m,p],[/(sunos) ?([\w\.\d]*)/i],[[m,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[m,p]]},we=function(A,S){if(typeof A===c&&(S=A,A=n),!(this instanceof we))return new we(A,S).getResult();var U=A||(typeof t!==l&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:r),$=S?_e(Ye,S):Ye;return this.getBrowser=function(){var j={};return j[m]=n,j[p]=n,qe.call(j,U,$.browser),j.major=Se(j.version),j},this.getCPU=function(){var j={};return j[_]=n,qe.call(j,U,$.cpu),j},this.getDevice=function(){var j={};return j[f]=n,j[h]=n,j[g]=n,qe.call(j,U,$.device),j},this.getEngine=function(){var j={};return j[m]=n,j[p]=n,qe.call(j,U,$.engine),j},this.getOS=function(){var j={};return j[m]=n,j[p]=n,qe.call(j,U,$.os),j},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return U},this.setUA=function(j){return U=typeof j===u&&j.length>v?pe(j,v):j,this},this.setUA(U),this};we.VERSION=i,we.BROWSER=ge([m,p,d]),we.CPU=ge([_]),we.DEVICE=ge([h,f,g,b,M,x,y,E,L]),we.ENGINE=we.OS=ge([m,p]),o.exports&&(e=o.exports=we),e.UAParser=we;var ot=typeof t!==l&&(t.jQuery||t.Zepto);if(ot&&!ot.ua){var ut=new we;ot.ua=ut.getResult(),ot.ua.get=function(){return ut.getUA()},ot.ua.set=function(A){ut.setUA(A);var S=ut.getResult();for(var U in S)ot.ua[U]=S[U]}}})(typeof window=="object"?window:qv)})(No,No.exports);class Xv{constructor(){this.uaParser=new No.exports.UAParser,this.experience=new ai,this.reticle=this.experience.reticle,this.arInSession=!1,this.init(),this.placedMicroscope=!1,this.hitTestSourceRequested=!1,this.hitTestSource=null}isMobile(){const e=this.uaParser.getOS();return e.name==="Android"||e.name==="IOS"}async isWebXRAble(){return navigator.xr?!!await navigator.xr.isSessionSupported("immersive-ar"):!1}async init(){this.uaParser.getOS().name==="IOS"?(console.log("show ios usdz"),this.showIOS()):await this.isWebXRAble()?(console.log("show web xr"),this.showWebXR()):(console.log("show qr code"),this.showQR())}showQR(){document.querySelector("#AR-QRCode").classList.toggle("hide")}showIOS(){document.querySelector("#ARApple").classList.toggle("hide")}showWebXR(){document.querySelector("#ARWebXr").classList.toggle("hide"),this.initWebXR()}initWebXR(){this.experience.renderCanvas.renderer.xr.enabled=!0,document.querySelector("#ARWebXr").addEventListener("pointerup",this.startARSession),document.querySelector("#backARButton").addEventListener("pointerup",()=>{this.experience.renderCanvas.renderer.xr.getSession().end()}),document.querySelector("#replaceARButton").addEventListener("pointerup",()=>{this.placedMicroscope=!1,this.experience.modelLoader.model.visible=!1}),document.querySelector("#spawnARButton").addEventListener("pointerup",()=>{if(this.reticle.visible){const e=this.experience.modelLoader.model;e.visible=!0,this.reticle.matrix.decompose(e.position,e.quaternion,e.scale),e.scale.set(.4,.4,.4),this.placedMicroscope=!0}})}onXRSessionStart(e){console.log("ar started");const t=this.experience.renderCanvas.renderer;t.xr.setReferenceSpaceType("local"),t.xr.setSession(e),e.addEventListener("end",this.onXRSessionEnd.bind(this)),this.arInSession=!0,document.querySelector("#domOverlayRoot").classList.remove("hide");const n=this.experience.modelLoader.model;n.visible=!1,n.scale.set(.5,.5,.5)}onXRSessionEnd(){var n;console.log("ar ended");const e=this.experience.renderCanvas.renderer;(n=e.xr.getSession())==null||n.removeEventListener("end",this.onXRSessionEnd),e.xr.setSession(null),this.arInSession=!1,document.querySelector("#domOverlayRoot").classList.add("hide");const t=this.experience.modelLoader.model;t.visible=!0,t.position.set(0,0,0),t.rotation.set(0,0,0),t.scale.set(1,1,1),this.experience.orbitCamera.shiftPosition(3,new R(0,.35,.1))}startARSession(){var t;const e={requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:document.querySelector("#domOverlay")}};(t=navigator.xr)==null||t.requestSession("immersive-ar",e).then(n=>{new ai().arButton.onXRSessionStart(n)})}update(e,t){if(this.arInSession){const n=this.experience.renderCanvas.renderer,i=n.xr.getReferenceSpace(),r=n.xr.getSession();if(t&&(this.hitTestSourceRequested||(r.requestReferenceSpace("viewer").then(s=>{var a;(a=r.requestHitTestSource({space:s}))==null||a.then(l=>{this.hitTestSource=l})}),r.addEventListener("end",()=>{this.hitTestSource=null,this.hitTestSourceRequested=!1}),this.hitTestSourceRequested=!0)),this.hitTestSource){const s=t.getHitTestResults(this.hitTestSource);if(s.length){const a=s[0];this.placedMicroscope?(document.querySelector("#spawnARButton").classList.add("hide"),document.querySelector("#arInstructions").classList.add("hide"),document.querySelector("#replaceARButton").classList.remove("hide"),this.reticle.visible=!1):(this.reticle.visible=!0,this.reticle.matrix.fromArray(a.getPose(i).transform.matrix),document.querySelector("#spawnARButton").classList.remove("hide"),document.querySelector("#arInstructions").classList.add("hide"),document.querySelector("#replaceARButton").classList.add("hide"))}else this.reticle.visible=!1,document.querySelector("#spawnARButton").classList.add("hide"),document.querySelector("#arInstructions").classList.remove("hide"),document.querySelector("#replaceARButton").classList.add("hide")}}}}let io=null;class ai{constructor(){Pe(this,"orbitCamera");Pe(this,"renderCanvas");Pe(this,"scene");Pe(this,"elCanvasRoot");Pe(this,"labels");Pe(this,"modelLoader");Pe(this,"keylight");Pe(this,"hemisphere");Pe(this,"arButton");Pe(this,"reticle");if(io)return io;io=this,this.elCanvasRoot=document.querySelector("#canvasRoot"),this.scene=new d0,this.renderCanvas=new $0,this.orbitCamera=new fv,this.orbitCamera.camera.position.set(0,0,1),this.modelLoader=new Wv,this.reticle=new Jn;const e=new ln(new Yo(.05,.06,32),new $n({color:16777215}));e.rotateOnAxis(new R(1,0,0),-1.5708),this.reticle.add(e),this.reticle.visible=!1,this.reticle.matrixAutoUpdate=!1,this.scene.add(this.reticle),this.labels=[new to(new R(-.08,.63,.02),"Simple To Use","No complicated dials or settings. Simply look through it and focus"),new to(new R(.05,.48,-.1),"Kid-Proof","Built with strong and durable materials for very hands-on learning"),new to(new R(0,.33,.2),"For the classroom","Designed for schools, with interchangeable components and available for bulk orders")],this.arButton=new Xv,this.renderCanvas.renderer.setAnimationLoop((t,n)=>{this.update(t,n)})}update(e,t){this.orbitCamera.orbitControls.update(),this.labels.forEach(n=>{n.update()}),this.arButton.update(e,t),this.renderCanvas.renderer.render(this.scene,this.orbitCamera.camera)}removeLoader(){var e;(e=document.querySelector("#loadingRoot"))==null||e.classList.add("hide")}}class jv{constructor(){Pe(this,"elSlider");Pe(this,"elSlideButton");Pe(this,"elSVG");Pe(this,"elButtonText");Pe(this,"isDown");Pe(this,"elBannerArrays");Pe(this,"experience");this.elSlider=document.querySelector("#sideRootSlider"),this.elSlideButton=document.querySelector("#slideButton"),this.elSVG=document.querySelector("#slideButton svg"),this.elButtonText=document.querySelector("#slideButton div"),this.elBannerArrays=document.querySelectorAll(".banners"),this.experience=new ai,this.isDown=!0,this.elSlideButton.addEventListener("pointerup",()=>{this.toggle()}),this.elBannerArrays.forEach((e,t)=>{e.addEventListener("pointerup",()=>{this.bannerClicked(t)})})}toggle(){this.elSlider.classList.toggle("sideRootDown"),this.elButtonText.innerHTML==="Slide Up"?this.elButtonText.innerHTML="Slide Down":this.elButtonText.innerHTML="Slide Up",this.elSVG.classList.toggle("svgRotate"),this.isDown=!this.isDown}bannerClicked(e){console.log("clicked banner ",e),this.experience.orbitCamera.shiftPosition(e,this.experience.labels[e].position),this.isDown||this.toggle()}}new ai;new jv;
