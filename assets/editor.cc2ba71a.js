import{q as v,r as m,m as x,s as d}from"./app.48af1194.js";import{j as C}from"./yamlWorker.73890f48.js";async function L(t){return t||(t="/resume/2021.resume.yml"),await fetch(t).then(n=>n.text())}const a=typeof window!="undefined",f="web-resume";function j(t,r){a&&localStorage.setItem(`${f}-${t}`,r)}function k(t){return a&&localStorage.getItem(`${f}-${t}`)}const R=v("editor",()=>{const t=m(),r=m(k("text")||"");let n;const l=x(()=>{try{n=C.load(r.value),_()}catch(e){e&&g(e.mark.line+1,e.mark.column+1,e.reason)}return n});async function _(){var s;const e=(s=t.value)==null?void 0:s.getModel();if(e&&a){const{editor:i}=await d(()=>import("./editor.main.89cdaf49.js").then(function(o){return o.b}),["assets/editor.main.89cdaf49.js","assets/editor.main.3d5e34c3.css","assets/editorWorker.5e336211.js"]);i.setModelMarkers(e,"yaml",[])}}async function g(e,s,i){var c;const o=(c=t.value)==null?void 0:c.getModel();if(o&&a){const{editor:p,MarkerSeverity:E}=await d(()=>import("./editor.main.89cdaf49.js").then(function(h){return h.b}),["assets/editor.main.89cdaf49.js","assets/editor.main.3d5e34c3.css","assets/editorWorker.5e336211.js"]);p.setModelMarkers(o,"yaml",[{startLineNumber:e,endLineNumber:e,startColumn:s,endColumn:o.getLineContent(e).length+1,severity:E.Error,message:i}])}}function u(e){r.value=e,j("text",e)}function y(e){u(e)}function M(e){t.value=e}return{codeEditor:t,resumeText:r,resumeJson:l,setEditor:M,setResume:y,setResumeText:u}});export{R as a,k as g,a as i,L as u};
