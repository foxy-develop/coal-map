!function(t){var e={};function n(C){if(e[C])return e[C].exports;var r=e[C]={i:C,l:!1,exports:{}};return t[C].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,C){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:C})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(C,r,function(e){return t[e]}.bind(null,r));return C},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="C90O")}({C90O:function(t,e,n){"use strict";n.r(e),n.d(e,"countObjects",(function(){return m})),n.d(e,"processObjects",(function(){return g})),n.d(e,"coalMarks",(function(){return y}));const C=Symbol("Comlink.proxy"),r=Symbol("Comlink.endpoint"),l=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.thrown"),a=t=>"object"==typeof t&&null!==t||"function"==typeof t,c=new Map([["proxy",{canHandle:t=>a(t)&&t[C],serialize(t){const{port1:e,port2:n}=new MessageChannel;return s(t,e),[n,[n]]},deserialize(t){return t.start(),function t(e,n=[],C=function(){}){let o=!1;const a=new Proxy(C,{get(C,r){if(f(o),r===l)return()=>d(e,{type:5,path:n.map(t=>t.toString())}).then(()=>{i(e),o=!0});if("then"===r){if(0===n.length)return{then:()=>a};const t=d(e,{type:0,path:n.map(t=>t.toString())}).then(h);return t.then.bind(t)}return t(e,[...n,r])},set(t,C,r){f(o);const[l,a]=L(r);return d(e,{type:1,path:[...n,C].map(t=>t.toString()),value:l},a).then(h)},apply(C,l,a){f(o);const c=n[n.length-1];if(c===r)return d(e,{type:4}).then(h);if("bind"===c)return t(e,n.slice(0,-1));const[s,i]=p(a);return d(e,{type:2,path:n.map(t=>t.toString()),argumentList:s},i).then(h)},construct(t,C){f(o);const[r,l]=p(C);return d(e,{type:3,path:n.map(t=>t.toString()),argumentList:r},l).then(h)}});return a}(t,[],e);var e}}],["throw",{canHandle:t=>a(t)&&o in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function s(t,e=self){e.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:l,type:a,path:c}=Object.assign({path:[]},r.data),f=(r.data.argumentList||[]).map(h);let p;try{const e=c.slice(0,-1).reduce((t,e)=>t[e],t),n=c.reduce((t,e)=>t[e],t);switch(a){case 0:p=n;break;case 1:e[c.slice(-1)[0]]=h(r.data.value),p=!0;break;case 2:p=n.apply(e,f);break;case 3:p=function(t){return Object.assign(t,{[C]:!0})}(new n(...f));break;case 4:{const{port1:e,port2:n}=new MessageChannel;s(t,n),p=function(t,e){return u.set(t,e),t}(e,[e])}break;case 5:p=void 0}}catch(t){p={value:t,[o]:0}}Promise.resolve(p).catch(t=>({value:t,[o]:0})).then(t=>{const[C,r]=L(t);e.postMessage(Object.assign(Object.assign({},C),{id:l}),r),5===a&&(e.removeEventListener("message",n),i(e))})})),e.start&&e.start()}function i(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function f(t){if(t)throw new Error("Proxy has been released and is not useable")}function p(t){const e=t.map(L);return[e.map(t=>t[0]),(n=e.map(t=>t[1]),Array.prototype.concat.apply([],n))];var n}const u=new WeakMap;function L(t){for(const[e,n]of c)if(n.canHandle(t)){const[C,r]=n.serialize(t);return[{type:3,name:e,value:C},r]}return[{type:0,value:t},u.get(t)||[]]}function h(t){switch(t.type){case 3:return c.get(t.name).deserialize(t.value);case 0:return t.value}}function d(t,e,n){return new Promise(C=>{const r=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");t.addEventListener("message",(function e(n){n.data&&n.data.id&&n.data.id===r&&(t.removeEventListener("message",e),C(n.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:r},e),n)})}const m=async(t,e)=>t.filter(t=>t.type.id===e).length,g=async(t,e)=>{const n={METINVEST:{title:"МЕТIНВЕСТ",logo:'\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 756.8 132.6" style="enable-background:new 0 0 756.8 132.6;" xml:space="preserve">\n                            <path fill="#fff" class="st0" d="M111.2,4.9c0,0-9.3-3.9-10.6-4.4c-1.3-0.5-2.6-0.6-4-0.3s-2.4,1.1-2.9,1.6C93.1,2.3,73,22.4,73,22.4  S53.1,2.5,52.5,1.9s-1.4-1.3-3-1.7c-1.7-0.4-3.1-0.1-3.9,0.3C44.7,0.9,36.1,4.4,35,4.9c-1.2,0.5-2.3,1.4-3,2.6  c-0.6,1-0.9,2.1-0.9,3.3c0-1.2,0,27.9,0,27.9l18.5,10.7V25.1l8.6,8.6c0.6,0.6,1.4,1.1,2.2,1.4c0.7,0.2,1.2,0.4,2.2,0.4s21,0,21,0  c0.7,0,1.5-0.2,2.1-0.4c0.8-0.3,1.6-0.8,2.4-1.6c0.8-0.8,8.5-8.5,8.5-8.5v24.3l18.5-10.7c0,0,0-25,0-27.8  C115.1,8.1,113.5,5.9,111.2,4.9L111.2,4.9z"/>\n                            <path fill="#fff" class="st0" d="M0.1,65.2c0,0,1.3,10,1.5,11.4s0.7,2.5,1.7,3.6s2.1,1.5,2.9,1.7c0.7,0.2,28.2,7.6,28.2,7.6s-7.3,27.2-7.5,28  s-0.4,1.8,0,3.5c0.5,1.6,1.5,2.7,2.2,3.2c0.7,0.6,8.2,6.2,9.1,7c1,0.8,2.3,1.3,3.7,1.3c1.1,0,2.3-0.2,3.3-0.8  c-1,0.6,24.2-14,24.2-14V96.3l-21.1,12.2l3.2-11.8c0.2-0.9,0.3-1.8,0.1-2.7c-0.1-0.7-0.2-1.2-0.8-2.1C50.3,91,40.3,73.7,40.3,73.7  c-0.4-0.6-0.9-1.2-1.4-1.7c-0.7-0.5-1.4-1-2.6-1.3c-1.1-0.3-11.6-3.1-11.6-3.1l21.1-12.2L27.3,44.7c0,0-21.6,12.5-24.1,13.9  C0.9,60.2-0.3,62.7,0.1,65.2L0.1,65.2z"/>\n                            <path fill="#fff" class="st0"  d="M107.8,131.3c0,0,8-6.2,9.1-7c1.1-0.9,1.8-1.9,2.3-3.3c0.4-1.4,0.3-2.6,0.1-3.4c-0.2-0.7-7.5-28.2-7.5-28.2  s27.2-7.3,28-7.5s1.8-0.5,3-1.8c1.2-1.2,1.6-2.6,1.7-3.6c0.1-0.9,1.3-10.2,1.5-11.4c0.2-1.2-0.1-2.7-0.7-3.9c-0.5-1-1.3-1.8-2.4-2.4  c1,0.6-24.2-14-24.2-14l-18.5,10.7l21.1,12.2l-11.8,3.2c-0.9,0.2-1.7,0.7-2.4,1.2c-0.5,0.5-0.9,0.8-1.4,1.7S95.2,92,95.2,92  c-0.4,0.7-0.6,1.3-0.7,2c-0.1,0.8-0.1,1.7,0.2,2.9c0.3,1.1,3.1,11.6,3.1,11.6L76.7,96.3v21.4c0,0,21.6,12.5,24.1,13.9  C103.1,133.1,105.8,132.8,107.8,131.3L107.8,131.3z"/>\n                            <polygon fill="#fff" points="272.3,33.2 272.3,105.3 330,105.3 330,92.8 288.1,92.8 288.1,75 330,75 330,62.5 288.1,62.4 288.1,45.7 330,45.7   330,33.2 "/>\n                            <polygon fill="#fff" points="566.7,33.2 566.7,105.3 624.5,105.3 624.5,92.8 582.6,92.8 582.6,75 624.5,75 624.5,62.5 582.6,62.4 582.6,45.7   624.5,45.7 624.5,33.2 "/>\n                            <polygon fill="#fff" points="402.1,105.3 402.1,33.1 417.5,33.1 417.5,105.3 "/>\n                            <polygon fill="#fff" points="203,33.1 221,89.4 239.9,33.1 262.4,33.1 262.4,105.3 247.7,105.3 247.7,51.1 228.8,105.3 213,105.3 195.2,51.1   195.2,105.3 180.5,105.3 180.5,33.1 "/>\n                            <polygon fill="#fff" points="358,45.9 334.9,45.9 334.9,33.1 397.2,33.1 397.2,45.9 373.3,45.9 373.3,105.3 358,105.3 "/>\n                            <polygon fill="#fff" points="485.9,33.1 485.9,105.3 470.5,105.3 470.5,75.4 442.7,75.4 442.7,105.3 427.4,105.3 427.4,33.1 442.7,33.1   442.7,62.5 470.5,62.5 470.5,33.1 "/>\n                            <path fill="#fff" d="M495.3,105.3V33.1h40.8c6.4,0,11,0.8,13.9,2.1c3.4,1.7,5.9,4.5,7.6,8.4c1.3,2.7,1.8,5.5,1.8,8.4c0,3.7-1,7.2-3,10.5  c-1.9,3.1-4.4,5.5-7.4,6.7c7,3.3,10.5,8.9,10.5,17c0,4.8-1.1,8.6-3.4,11.9c-1.9,2.7-4.4,4.7-7.4,5.7s-7.6,1.5-13.5,1.5L495.3,105.3  L495.3,105.3z M510.7,62.8h21c2.2,0,3.8-0.1,4.7-0.3c1-0.2,2-0.8,2.9-1.4c2.3-1.7,3.3-4.1,3.3-7.1c0-2.9-1.1-5.1-3.1-6.5  c-1.6-1-4.1-1.5-7.5-1.5h-21.3L510.7,62.8L510.7,62.8z M510.7,92.5h20.9c2.2,0,3.8-0.1,4.7-0.3c1.1-0.2,2-0.8,2.9-1.4  c2.3-1.8,3.3-4.1,3.3-7.1c0-2.9-1.1-5.1-3.1-6.5c-1.6-1-4.1-1.5-7.5-1.5h-21.3L510.7,92.5L510.7,92.5z"/>\n                            <path fill="#fff" d="M689.6,92.5v12.8h-25.2c-4.7,0-8.4-0.2-10.9-0.7c-8.9-1.7-15.2-6.7-18.9-14.9c-2.5-5.4-3.8-12.2-3.8-20.3  c0-9.6,1.9-17.6,5.7-23.6c5.4-8.7,14.1-12.6,28.6-12.6h24.5V46h-22.8c-6.8,0-11.9,1.8-15.1,5.5c-2.6,3-3.9,8.5-3.9,16.5  c0,10.7,2,17.7,6.2,21c2.9,2.3,7.4,3.5,13.5,3.5L689.6,92.5L689.6,92.5z"/>\n                            <polygon fill="#fff" points="717.5,45.9 694.5,45.9 694.5,33.1 756.8,33.1 756.8,45.9 732.8,45.9 732.8,105.3 717.5,105.3 "/>\n                        </svg>\n                      ',color:"223, 33, 50"},DTEK:{title:"ДТЭК Энерго",logo:'\n                            <svg style="max-height: 2.25rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Слой_1" x="0px" y="0px" viewBox="0 0 180.5 61.4"  xml:space="preserve">\n                                <path class="st1"  fill="#00011C" d="M9.8,0H0v11.5h9.8c10.6,0,19.2,8.6,19.2,19.2c0,10.6-8.6,19.2-19.2,19.2H0v11.5h9.8c16.9,0,31.1-12.4,31.1-30.7  C40.8,12.2,26.7,0,9.8,0 M34.6,49.9v11.5h11.5V49.9H34.6z M149.8,30.7l22.6-22.6V0h-8.5l-26.4,26.4V0H34.7v11.5h21.6v49.9h12.1V11.5  h21.7c-4,5.1-6.4,11.6-6.4,19.2c0,18.3,14.1,30.7,31.1,30.7h22.6V35l26.4,26.4h16.7L149.8,30.7z M125.3,49.9h-10.5  c-8.6,0-16-5.7-18.4-13.6h17V25.1h-17c2.4-7.9,9.7-13.6,18.4-13.6h10.5V49.9z"/>\n                                <path class="st0" fill="#FFE300" d="M9.8,11.5H0v38.4h9.8c10.6,0,19.2-8.6,19.2-19.2C28.9,20.1,20.3,11.5,9.8,11.5"/>\n                            </svg>\n                        ',color:"253, 220, 47"},ARCELORMITTAL:{title:"Группа АрселорМиттал",logo:'\n                            <svg xmlns="http://www.w3.org/2000/svg" width="1366pt" height="704pt" viewBox="0 0 1366 704" version="1.1">\n                            <path fill="#fff" d=" M 895.62 98.59 C 904.43 95.63 913.73 94.22 923.02 94.07 C 940.69 93.93 958.34 96.29 975.52 100.40 C 1004.46 106.78 1032.39 117.04 1059.67 128.50 C 1116.62 153.08 1170.94 183.70 1221.90 219.02 C 1235.71 228.84 1249.50 238.74 1262.35 249.80 C 1268.00 255.18 1273.69 261.14 1275.73 268.91 C 1277.21 276.67 1274.57 285.30 1268.46 290.45 C 1262.65 296.17 1253.74 297.70 1245.99 295.97 C 1238.31 294.91 1231.63 290.77 1224.84 287.34 C 1196.35 273.22 1166.86 261.07 1136.47 251.70 C 1123.00 247.33 1109.28 243.81 1095.57 240.31 C 1061.90 232.68 1027.56 227.59 993.03 226.55 C 978.12 225.59 963.14 226.22 948.29 227.77 C 968.12 258.99 990.53 288.48 1013.97 317.06 C 1018.82 322.69 1020.44 331.09 1017.45 337.97 C 1012.79 347.97 1000.52 353.90 989.87 350.40 C 984.83 348.90 981.44 344.68 977.91 341.08 C 968.58 330.04 959.46 318.80 950.91 307.14 C 939.30 292.34 928.66 276.81 917.93 261.36 C 912.21 252.52 905.87 244.04 900.97 234.71 C 846.43 244.94 794.47 266.15 745.88 292.58 C 729.55 301.76 713.34 311.20 697.89 321.83 C 686.85 328.96 676.69 337.32 666.02 344.97 C 661.13 348.81 654.50 349.53 648.50 348.78 C 640.62 346.56 633.34 340.59 631.63 332.30 C 630.24 327.86 631.01 323.06 632.77 318.84 C 634.89 314.84 638.20 311.62 641.64 308.73 C 670.40 284.87 701.96 264.50 734.98 247.06 C 801.04 212.77 873.38 188.74 947.98 184.10 C 964.94 184.06 981.95 183.42 998.87 184.86 C 1033.33 187.09 1067.49 193.04 1100.90 201.67 C 1128.49 209.15 1155.34 219.10 1181.87 229.68 C 1145.59 208.59 1108.45 188.81 1069.72 172.55 C 1043.26 161.21 1016.04 151.53 988.10 144.54 C 969.40 140.10 950.24 136.85 930.96 137.62 C 927.61 137.78 924.34 138.54 921.12 139.37 C 917.76 140.18 915.30 142.74 912.52 144.58 C 908.69 149.45 909.22 156.23 910.88 161.83 C 912.44 166.36 914.51 170.72 916.93 174.86 C 917.67 175.96 917.72 177.30 917.93 178.58 C 903.39 179.66 889.05 182.58 874.85 185.74 C 869.74 175.40 864.90 164.59 864.00 152.95 C 863.49 144.06 863.26 134.85 866.43 126.39 C 870.84 113.06 882.50 102.95 895.62 98.59 Z"/>\n                            <path fill="#fff" d=" M 144.96 441.89 C 149.95 437.71 158.27 438.49 162.41 443.51 C 165.21 447.10 166.61 451.49 168.16 455.71 C 181.83 492.40 195.49 529.09 209.14 565.78 C 210.43 569.45 212.43 574.06 209.47 577.51 C 206.15 580.69 200.21 581.39 196.61 578.29 C 194.32 575.96 193.52 572.67 192.38 569.71 C 189.06 560.15 185.48 550.69 182.24 541.11 C 166.81 540.87 151.39 541.06 135.96 541.00 C 131.65 541.07 127.31 540.75 123.03 541.38 C 119.69 552.61 115.29 563.52 111.39 574.58 C 109.48 581.05 99.85 582.27 95.99 577.02 C 93.47 573.53 95.33 569.10 96.58 565.49 C 110.96 527.15 125.24 488.78 139.60 450.44 C 140.82 447.30 142.34 444.11 144.96 441.89 Z"/>\n                            <path fill="#fff" d=" M 476.53 439.74 C 479.99 438.55 484.34 439.28 486.58 442.39 C 488.48 444.43 488.28 447.38 488.39 449.97 C 488.36 490.30 488.41 530.63 488.36 570.97 C 488.52 574.40 487.04 578.27 483.67 579.65 C 480.21 580.87 475.77 580.58 473.24 577.64 C 471.34 575.59 471.10 572.64 471.06 569.99 C 471.07 529.65 471.05 489.31 471.07 448.98 C 470.96 445.23 472.58 440.84 476.53 439.74 Z"/>\n                            <path fill="#fff" d=" M 697.39 442.51 C 700.83 439.01 706.36 438.56 710.86 439.99 C 715.31 441.52 718.29 445.69 719.55 450.07 C 725.78 471.96 732.08 493.83 738.28 515.73 C 741.89 527.75 745.16 539.87 748.13 552.07 C 752.34 533.27 758.25 514.92 763.43 496.38 C 767.67 481.40 772.02 466.45 776.28 451.48 C 777.24 448.16 778.44 444.65 781.18 442.36 C 786.14 437.69 795.15 438.21 799.33 443.68 C 801.82 447.11 802.75 451.37 803.31 455.51 C 809.43 492.69 815.74 529.83 821.89 567.00 C 822.20 570.56 823.17 574.83 820.57 577.80 C 818.15 580.82 813.63 580.64 810.31 579.51 C 806.90 578.12 806.17 574.05 805.49 570.86 C 799.89 534.53 793.74 498.28 788.54 461.90 C 786.68 472.02 783.54 481.84 780.79 491.75 C 772.72 519.11 764.94 546.57 756.81 573.92 C 755.24 580.78 745.80 582.37 741.00 577.98 C 739.58 576.44 739.02 574.36 738.39 572.43 C 733.08 554.26 727.84 536.07 722.51 517.91 C 717.44 499.27 711.03 480.98 707.15 462.04 C 702.07 497.80 695.90 533.40 690.45 569.10 C 689.87 572.82 689.25 577.25 685.67 579.33 C 682.14 580.84 677.01 580.93 674.70 577.34 C 672.55 574.36 673.32 570.47 673.75 567.10 C 680.12 529.00 686.45 490.90 692.81 452.81 C 693.53 449.11 694.61 445.22 697.39 442.51 Z"/>\n                            <path fill="#fff" d=" M 1108.33 439.56 C 1113.80 437.59 1120.02 442.06 1119.58 447.93 C 1119.68 488.26 1119.57 528.60 1119.64 568.94 C 1119.55 571.87 1119.77 575.31 1117.51 577.57 C 1113.86 581.92 1105.52 581.12 1103.25 575.73 C 1102.36 573.96 1102.34 571.94 1102.30 570.02 C 1102.29 530.34 1102.32 490.65 1102.29 450.96 C 1101.92 446.47 1103.14 440.57 1108.33 439.56 Z"/>\n                            <path fill="#fff" d=" M 850.11 444.21 C 856.64 442.31 863.99 448.11 863.23 454.95 C 863.25 461.71 855.64 466.74 849.39 464.43 C 843.34 462.71 840.29 454.98 843.40 449.55 C 844.69 446.88 847.38 445.15 850.11 444.21 Z"/>\n                            <path fill="#fff" d=" M 891.59 450.69 C 892.28 444.30 900.71 441.99 905.46 445.55 C 908.14 447.42 908.74 450.95 908.71 454.01 C 908.70 461.13 908.66 468.25 908.73 475.37 C 912.66 475.36 916.77 475.07 920.53 476.46 C 925.92 478.93 925.31 487.82 919.81 489.83 C 916.16 490.78 912.34 490.30 908.62 490.51 C 908.73 517.66 908.75 544.81 908.62 571.96 C 908.88 577.95 902.45 581.85 897.03 580.01 C 893.24 578.84 891.17 574.80 891.39 571.00 C 891.37 544.18 891.34 517.36 891.42 490.54 C 887.69 490.23 883.82 490.79 880.22 489.59 C 875.41 487.04 875.18 478.70 880.29 476.34 C 883.86 475.15 887.69 475.37 891.41 475.35 C 891.50 467.14 891.06 458.89 891.59 450.69 Z"/>\n                            <path fill="#fff" d=" M 946.03 451.00 C 946.48 444.08 956.32 441.52 960.71 446.37 C 963.12 448.94 963.14 452.65 963.07 455.96 C 963.02 462.44 963.05 468.92 963.11 475.41 C 967.25 475.39 971.63 475.01 975.56 476.63 C 979.84 479.38 979.80 486.96 975.19 489.35 C 971.38 491.02 967.12 490.30 963.10 490.44 C 962.95 517.31 963.11 544.18 963.02 571.05 C 963.01 573.45 962.42 575.97 960.90 577.87 C 957.00 581.62 949.40 581.19 946.82 576.10 C 945.45 572.91 945.89 569.34 945.82 565.97 C 945.81 540.80 945.90 515.63 945.78 490.46 C 941.38 490.22 936.28 491.35 932.70 488.08 C 930.01 485.17 930.73 480.75 932.53 477.57 C 936.44 474.96 941.30 475.42 945.78 475.38 C 946.02 467.25 945.53 459.10 946.03 451.00 Z"/>\n                            <path fill="#E25616" d=" M 152.74 458.15 C 160.25 480.17 168.32 502.01 176.05 523.96 C 176.40 524.73 176.77 526.30 175.17 525.79 C 159.77 525.79 144.38 525.78 128.98 525.78 C 136.70 503.17 145.33 480.87 152.74 458.15 Z"/>\n                            <path fill="#fff" d=" M 227.28 482.16 C 227.14 474.18 239.08 471.41 243.01 477.92 C 245.45 482.43 244.07 487.87 244.54 492.79 C 247.71 486.59 252.53 481.22 258.41 477.49 C 262.61 474.93 267.95 473.33 272.74 475.11 C 277.89 477.27 278.58 484.99 274.60 488.55 C 272.03 491.18 268.28 491.83 264.96 493.03 C 258.75 495.03 252.68 498.43 249.00 503.99 C 245.61 509.29 244.59 515.73 244.56 521.93 C 244.53 537.95 244.56 553.97 244.55 570.00 C 244.53 573.05 244.18 576.61 241.47 578.55 C 236.34 582.92 226.95 579.17 227.26 572.07 C 227.15 542.10 227.11 512.13 227.28 482.16 Z"/>\n                            <path fill="#fff" d=" M 320.54 474.64 C 328.07 473.98 335.85 474.42 343.03 476.97 C 346.69 478.36 350.34 480.30 352.76 483.47 C 355.73 487.37 352.92 493.98 347.98 494.39 C 343.96 494.72 340.42 492.45 336.74 491.24 C 327.94 488.05 317.32 488.88 309.85 494.82 C 302.87 500.13 299.19 508.64 297.59 517.05 C 296.18 525.64 296.34 534.61 298.86 542.99 C 301.14 550.45 305.63 557.48 312.37 561.64 C 318.66 565.39 326.37 565.84 333.45 564.61 C 337.82 563.86 341.60 561.31 345.87 560.25 C 349.16 559.40 353.53 561.20 353.97 564.90 C 354.77 568.13 353.13 571.50 350.48 573.34 C 342.86 578.76 333.24 580.65 324.02 580.28 C 311.62 579.96 299.03 574.65 291.24 564.80 C 282.09 553.82 278.89 539.04 279.36 525.03 C 279.65 511.23 284.15 497.01 294.04 487.06 C 301.02 479.92 310.64 475.64 320.54 474.64 Z"/>\n                            <path fill="#fff" d=" M 620.38 474.59 C 624.14 473.62 628.74 475.02 630.37 478.78 C 632.05 483.22 631.01 488.09 631.30 492.70 C 636.38 483.83 644.86 474.41 656.03 474.35 C 661.30 474.11 665.26 479.54 663.79 484.53 C 662.83 489.26 657.87 491.05 653.84 492.41 C 646.81 494.47 639.53 497.90 635.61 504.39 C 632.10 509.89 631.36 516.58 631.32 522.96 C 631.31 538.65 631.31 554.33 631.33 570.01 C 631.21 572.32 631.26 574.89 629.85 576.86 C 626.93 581.27 619.79 581.47 616.23 577.78 C 614.28 575.71 614.05 572.72 613.99 570.04 C 614.02 541.36 614.00 512.67 614.01 483.98 C 613.78 479.90 615.93 475.22 620.38 474.59 Z"/>\n                            <path fill="#fff" d=" M 850.38 474.51 C 853.40 474.13 857.07 474.23 859.11 476.88 C 861.23 479.02 861.44 482.17 861.45 485.02 C 861.39 513.68 861.46 542.34 861.41 571.01 C 861.56 574.45 860.06 578.18 856.71 579.58 C 853.31 580.85 848.68 580.73 846.31 577.62 C 844.32 575.60 844.13 572.61 844.07 569.95 C 844.07 543.62 844.07 517.28 844.07 490.95 C 844.09 487.63 843.87 484.29 844.34 481.00 C 844.79 477.85 847.28 475.18 850.38 474.51 Z"/>\n                            <path fill="#fff" d=" M 1063.89 475.94 C 1067.03 473.60 1071.85 473.81 1075.02 476.06 C 1077.16 478.07 1078.14 481.08 1078.02 483.98 C 1077.96 512.99 1078.03 542.00 1077.99 571.02 C 1077.99 574.23 1076.80 577.94 1073.66 579.35 C 1069.57 581.45 1063.31 580.28 1061.60 575.62 C 1060.14 571.87 1060.86 567.77 1060.67 563.86 C 1057.03 569.14 1052.54 573.90 1046.72 576.77 C 1034.80 582.70 1020.00 581.07 1008.84 574.15 C 997.06 566.73 990.16 553.46 987.88 540.01 C 985.84 527.47 986.63 514.23 991.34 502.35 C 995.58 491.56 1003.76 482.05 1014.60 477.58 C 1024.61 473.47 1036.50 472.86 1046.37 477.70 C 1052.29 480.62 1057.13 485.42 1060.63 490.98 C 1061.00 485.94 1059.43 479.63 1063.89 475.94 Z"/>\n                            <path fill="#fff" d=" M 378.08 486.03 C 387.06 477.58 399.72 473.38 411.97 474.50 C 422.61 475.12 432.74 480.34 439.78 488.28 C 448.93 498.50 453.46 512.46 453.01 526.09 C 452.90 528.79 451.76 531.97 449.01 532.98 C 445.21 534.56 440.97 533.86 436.97 534.00 C 417.72 534.08 398.46 533.82 379.21 534.15 C 379.69 541.69 381.79 549.41 386.83 555.23 C 392.00 561.45 400.04 565.07 408.09 565.16 C 415.44 565.31 423.09 564.24 429.46 560.35 C 433.27 558.27 436.71 555.37 440.91 554.07 C 444.20 553.42 448.38 555.38 448.95 558.94 C 450.37 563.78 446.36 567.94 442.73 570.51 C 430.76 579.05 415.26 581.56 400.87 579.72 C 389.07 578.25 378.02 571.51 371.46 561.58 C 363.06 549.21 360.70 533.53 362.46 518.89 C 363.91 506.63 369.15 494.68 378.08 486.03 Z"/>\n                            <path fill="#fff" d=" M 539.47 475.72 C 550.90 472.96 563.55 474.10 573.77 480.17 C 584.18 486.23 591.17 497.00 594.39 508.43 C 598.10 522.07 597.79 536.84 593.17 550.23 C 589.56 559.90 583.26 568.89 574.27 574.21 C 563.49 580.73 549.93 582.01 537.92 578.50 C 526.26 575.20 516.52 566.40 511.47 555.45 C 504.43 540.48 503.82 522.86 508.38 507.08 C 512.66 492.36 524.22 479.32 539.47 475.72 Z"/>\n                            <path fill="#E25616" d=" M 386.65 499.57 C 395.69 487.41 415.77 485.75 426.48 496.57 C 432.81 502.94 435.48 512.08 435.82 520.87 C 416.97 521.15 398.12 520.95 379.27 520.97 C 379.75 513.37 381.71 505.55 386.65 499.57 Z"/>\n                            <path fill="#E25616" d=" M 544.20 490.32 C 551.56 488.33 559.85 489.54 566.04 494.11 C 572.71 499.02 576.53 506.87 578.22 514.83 C 580.39 525.47 579.87 536.79 576.11 547.03 C 573.58 553.27 569.30 559.08 563.21 562.21 C 553.49 567.71 540.20 565.50 532.67 557.30 C 526.55 550.81 523.97 541.82 523.16 533.13 C 522.35 522.73 523.49 511.76 528.78 502.58 C 532.11 496.72 537.66 492.10 544.20 490.32 Z"/>\n                            <path fill="#E25616" d=" M 1026.19 490.20 C 1034.60 487.87 1044.20 490.49 1050.29 496.74 C 1056.43 502.55 1059.16 510.98 1060.33 519.15 C 1061.67 530.07 1060.58 541.66 1055.31 551.48 C 1052.47 556.36 1048.39 560.71 1043.18 563.04 C 1033.74 567.35 1021.57 565.41 1014.42 557.73 C 1007.52 550.69 1004.89 540.62 1004.27 531.03 C 1003.88 521.19 1005.07 510.84 1010.29 502.28 C 1013.74 496.39 1019.54 491.87 1026.19 490.20 Z"/>\n                        </svg>\n                        ',color:"226, 86, 22"},"ПРИВАТ":{title:"Приват",logo:'\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 159 30" version="1.1">\n                            <g id="surface1">\n                                <path  fill="#fff" d="M 30.726563 23.855469 L 26.835938 23.855469 L 26.835938 10.117188 L 40.832031 10.117188 L 40.832031 23.855469 L 36.945313 23.855469 L 36.945313 12.785156 L 30.726563 12.785156 L 30.726563 23.855469 "/>\n                                <path  fill="#fff" d="M 46.128906 18.851563 C 46.128906 16.066406 47.851563 15.515625 48.933594 15.515625 C 49.992188 15.515625 51.714844 16.066406 51.714844 18.851563 C 51.714844 20.582031 50.980469 22.226563 48.933594 22.226563 C 46.835938 22.226563 46.128906 20.582031 46.128906 18.851563 Z M 42.714844 13.882813 L 42.714844 27.488281 L 46.296875 27.488281 L 46.296875 22.832031 C 47.496094 24.136719 49.453125 24.226563 49.921875 24.226563 C 53.339844 24.226563 55.433594 22.050781 55.433594 18.886719 C 55.433594 15.59375 53.363281 13.511719 49.992188 13.511719 C 49.144531 13.511719 47.496094 13.648438 46.128906 15.082031 L 46.058594 15.082031 L 46.082031 13.882813 L 42.714844 13.882813 "/>\n                                <path fill="#fff" d="M 64.316406 22.660156 C 62.996094 23.894531 61.722656 24.226563 60.3125 24.226563 C 56.449219 24.226563 56.304688 21.324219 56.304688 20.125 L 56.304688 13.882813 L 59.886719 13.882813 L 59.886719 19.65625 C 59.886719 21.636719 60.570313 22.226563 61.890625 22.226563 C 64.152344 22.226563 64.316406 20.207031 64.316406 19.480469 L 64.316406 13.882813 L 67.894531 13.882813 L 67.894531 23.855469 L 64.316406 23.855469 L 64.316406 22.660156 "/>\n                                <path fill="#fff" d="M 73.03125 15.886719 L 74.960938 15.886719 C 75.976563 15.886719 76.847656 16.042969 76.847656 16.867188 C 76.847656 17.769531 75.480469 17.789063 74.890625 17.789063 L 73.03125 17.789063 Z M 69.449219 13.882813 L 69.449219 23.855469 L 76.5625 23.855469 C 79.15625 23.855469 80.945313 23.34375 80.945313 21.304688 C 80.945313 19.734375 80.074219 19.046875 78.09375 18.695313 L 78.09375 18.632813 C 79.390625 18.460938 80.519531 17.65625 80.519531 16.300781 C 80.519531 13.882813 77.695313 13.882813 76.585938 13.882813 Z M 73.03125 19.65625 L 75.222656 19.65625 C 76.917969 19.65625 77.269531 20.164063 77.269531 20.832031 C 77.269531 21.265625 77.035156 21.855469 75.269531 21.855469 L 73.03125 21.855469 L 73.03125 19.65625 "/>\n                                <path fill="#fff" d="M 89.613281 19.734375 C 89.613281 21.738281 87.871094 22.226563 87 22.226563 C 86.339844 22.226563 85.160156 22.011719 85.160156 21.070313 C 85.160156 19.949219 86.503906 19.734375 87.261719 19.636719 C 88.648438 19.4375 88.53125 19.5 89.613281 19.109375 Z M 85.46875 17.105469 C 85.46875 15.632813 87.019531 15.515625 87.660156 15.515625 C 88.058594 15.515625 89.542969 15.535156 89.59375 16.828125 C 89.59375 16.925781 89.59375 17.007813 89.59375 17.105469 C 89.519531 18.085938 88.578125 17.886719 85.941406 18.222656 C 83.769531 18.515625 81.484375 19.066406 81.484375 21.34375 C 81.484375 22.167969 81.839844 24.226563 85.65625 24.226563 C 87.117188 24.226563 88.71875 23.855469 89.660156 22.875 L 89.730469 22.875 L 90.039063 23.855469 L 93.804688 23.855469 L 93.804688 23.679688 C 93.125 23.542969 93.078125 22.875 93.101563 21.792969 L 93.171875 17.242188 C 93.195313 16.085938 93.078125 13.511719 87.679688 13.511719 C 86.386719 13.511719 82.21875 13.628906 82.050781 17.105469 L 85.46875 17.105469 "/>\n                                <path fill="#fff" d="M 93.574219 15.886719 L 93.574219 13.882813 L 105.066406 13.882813 L 105.066406 15.886719 L 101.109375 15.886719 L 101.109375 23.855469 L 97.527344 23.855469 L 97.527344 15.886719 L 93.574219 15.886719 "/>\n                                <path fill="#fff" d="M 109.636719 17.886719 L 112.863281 17.886719 C 113.804688 17.886719 115.691406 17.988281 115.691406 19.636719 C 115.691406 20.933594 114.324219 21.1875 112.792969 21.1875 L 109.636719 21.1875 Z M 109.636719 12.785156 L 118.5625 12.785156 L 118.5625 10.117188 L 105.75 10.117188 L 105.75 23.855469 L 113.617188 23.855469 C 117.433594 23.855469 119.882813 22.523438 119.882813 19.71875 C 119.882813 15.320313 114.984375 15.222656 113.617188 15.222656 L 109.636719 15.222656 L 109.636719 12.785156 "/>\n                                <path fill="#fff" d="M 128.691406 19.734375 C 128.691406 21.738281 126.949219 22.226563 126.078125 22.226563 C 125.417969 22.226563 124.238281 22.011719 124.238281 21.070313 C 124.238281 19.949219 125.582031 19.734375 126.335938 19.636719 C 127.726563 19.4375 127.609375 19.5 128.691406 19.109375 Z M 124.546875 17.105469 C 124.546875 15.632813 126.101563 15.515625 126.734375 15.515625 C 127.136719 15.515625 128.621094 15.535156 128.667969 16.828125 C 128.667969 16.925781 128.667969 17.007813 128.667969 17.105469 C 128.597656 18.085938 127.65625 17.886719 125.019531 18.222656 C 122.851563 18.515625 120.566406 19.066406 120.566406 21.34375 C 120.566406 22.167969 120.917969 24.226563 124.734375 24.226563 C 126.195313 24.226563 127.796875 23.855469 128.738281 22.875 L 128.8125 22.875 L 129.117188 23.855469 L 132.886719 23.855469 L 132.886719 23.679688 C 132.203125 23.542969 132.15625 22.875 132.179688 21.792969 L 132.25 17.242188 C 132.273438 16.085938 132.15625 13.511719 126.757813 13.511719 C 125.464844 13.511719 121.296875 13.628906 121.128906 17.105469 L 124.546875 17.105469 "/>\n                                <path fill="#fff" d="M 137.359375 23.855469 L 133.78125 23.855469 L 133.78125 13.882813 L 137.359375 13.882813 L 137.359375 17.636719 L 141.671875 17.636719 L 141.671875 13.882813 L 145.253906 13.882813 L 145.253906 23.855469 L 141.671875 23.855469 L 141.671875 19.636719 L 137.359375 19.636719 L 137.359375 23.855469 "/>\n                                <path fill="#fff" d="M 154.296875 13.882813 L 158.28125 13.882813 L 153.355469 18.554688 L 158.515625 23.855469 L 154.320313 23.855469 L 150.457031 19.5 L 150.386719 19.5 L 150.386719 23.855469 L 146.804688 23.855469 L 146.804688 13.882813 L 150.386719 13.882813 L 150.386719 17.886719 L 150.457031 17.886719 L 154.296875 13.882813 "/>\n                                <path fill="#fff" d="M 0.835938 23.890625 L 9.804688 23.890625 L 9.804688 14.925781 L 0.835938 14.925781 L 0.835938 23.890625 "/>\n                                <path fill="#fff" d="M 0.84375 0.957031 L 0.84375 12.117188 L 3.21875 12.117188 C 9.457031 12.117188 12.621094 15.285156 12.621094 21.523438 L 12.621094 23.894531 L 23.785156 23.894531 L 23.785156 0.957031 Z M 19.042969 5.699219 C 19.042969 8.746094 19.042969 16.105469 19.042969 19.152344 C 18.1875 19.152344 18.039063 19.152344 17.214844 19.152344 C 16.425781 12.5 12.238281 8.320313 5.585938 7.53125 C 5.585938 6.699219 5.585938 6.554688 5.585938 5.699219 C 8.636719 5.699219 15.992188 5.699219 19.042969 5.699219 "/>\n                            </g>\n                        </svg>\n                        ',color:"117, 175, 38"}};return t.map(t=>{var C;t.type=(C=t.type.id,e.find(t=>t.id==C));const r=(t=>{const e=Object.keys(n).filter(e=>-1!==t.toUpperCase().trim().indexOf(e));return e.length>0&&n[e[0]]})(t.owner);return r&&(t.corporate=r),t})},y=async(t,e,n)=>{let C=[{mark:"Б",title:"Бурый уголь",objects:[]},{mark:"Д",title:"Длиннопламенный уголь",objects:[]},{mark:"Г",title:"Газовый уголь",objects:[]},{mark:"Ж",title:"Жирный уголь",objects:[]},{mark:"К",title:"Коксовый уголь",objects:[]},{mark:"ОС",title:"Отощённо-спекающийся уголь",objects:[]},{mark:"Т",title:"Тощий уголь",objects:[]},{mark:"А",title:"Антрацитовый уголь",objects:[]},{mark:"ГЖ",title:"Газовый жирный уголь",objects:[]},{mark:"КЖ",title:"Коксовый жирный уголь",objects:[]},{mark:"К2",title:"Коксовый второй уголь",objects:[]},{mark:"СС",title:"Слабоспекающийся уголь",objects:[]},{mark:"Другие",title:"Другие марки угля",objects:[]}].reduce((t,e)=>Object.assign(t,{[e.mark]:e}),{});const r={METINVEST:{id:0,amount:0},DTEK:{id:1,amount:0},ARCELORMITTAL:{id:2,amount:0},"ПРИВАТ":{id:3,amount:0},Other:{id:4,amount:0}},l=Object.keys(r),o=(t,e)=>C[t].objects.includes(e)||C[t].objects.push(e);n&&e.forEach(t=>{t.corporate?r[l[t.corporate.id]].amount++:r[l[4]].amount++});const a=(t,e)=>C.hasOwnProperty(t.slice(0,e));t.forEach(t=>{n||(t.corporate?r[l[t.corporate.id]].amount++:r[l[4]].amount++),t.coalType&&t.coalType.split(",").forEach(e=>e.trim().split("/").forEach(e=>((t,e)=>{const n=t.trim().toUpperCase();a(n,1)&&"БРИ"!==n.slice(0,3)?a(n,2)?o(n.slice(0,2),e.coalType):o(n.slice(0,1),e.coalType):o("Другие",e.coalType)})(e,t)))});return{coalTypesList:Object.keys(C).filter(t=>C[t].objects.length>0).map(r=>({title:r,amount:(n?e:t).filter(t=>C[r].objects.includes(t.coalType)).length,description:C[r].title})),coalTypes:C,corporatesCount:r}};s(Object.keys(e).reduce((function(t,n){return"__esModule"==n||(t[n]=e[n]),t}),{}))}});
//# sourceMappingURL=b885470c8efbe18c1ad4.worker.js.map