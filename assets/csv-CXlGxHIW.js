import{d as o}from"./records-_jax2xv_.js";const s=/^-?\d+(\.\d+)?$/;function i(n){if(n==null)return"";let t=typeof n=="string"?n:String(n);return!s.test(t)&&/^[\s\uFEFF]*[=+\-@\t\r]/.test(t)&&(t=`'${t}`),/[",\r\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function r(n){return n.map(i).join(",")}function c(n,t){return[r(n),...t.map(r)].join(`\r
`)+`\r
`}function u(n){return n==null?"unknown":o(n).toFixed(2)}export{i as a,r as b,u as c,c as t};
