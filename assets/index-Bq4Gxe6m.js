import{u as f,b as g,r as u,j as t}from"./vendor-DzCRn7ZB.js";const w="_container_1kneq_1",y="_textarea_1kneq_22",v="_row_1kneq_29",x="_compareResult_1kneq_35",b="_answerRow_1kneq_39",k="_col1_1kneq_44",T="_inputComparedRow_1kneq_48",r={container:w,textarea:y,row:v,compareResult:x,answerRow:b,col1:k,inputComparedRow:T},m=[{sentence:"Please get us a meeting room for the next hour."},{sentence:"Communication skills have become more important in recent years."},{sentence:"Before preparing any food, be sure to wash your hands well."},{sentence:"I want to make an appointment with the manager."},{sentence:"The weather has been lovely from this time of the year."},{sentence:"Please close the door behind you, when you leave the room."},{sentence:"There was a lot of traffic this morning."},{sentence:"The restroom is down the hall and on the right."},{sentence:"The teacher explains the homework to the students."},{sentence:"At that time, few people moved through the town to the village."},{sentence:"The fiction books have just passed to the counter."},{sentence:"The fiction books have just past to the counter."},{sentence:"You have to make an appointment with your doctor."},{sentence:"The students will meet their new teacher after summer vacation."},{sentence:"Please move us to the meeting room for the next hour."},{sentence:"You must call your doctor to make an appointment."},{sentence:"Please make an appointment with your tutor about work."},{sentence:"Rail transport is becoming more and more popular."},{sentence:"You can keep your bags in the back room."},{sentence:"The weather used to be lovely at this time of the year."},{sentence:"Everyone in this room needs to follow the rules."},{sentence:"Before preparing foods please make sure to wash your hands."},{sentence:"Before preparing food please make sure to wash your hands."},{sentence:"The teacher explained the homework to the class."},{sentence:"You should meet me in the lecture theater room."},{sentence:"At that time, few people moved from towns to villages."},{sentence:"Students of the first year usually live on campus."},{sentence:"The fiction books are just past the counter."},{sentence:"The teacher asked the group to complete the task."},{sentence:"There were a lot of traffic jams this morning."},{sentence:"The school canteen sells a large variety of water and food."},{sentence:"Please turn off the lights to save the energy."},{sentence:"Traffic is the main cause of air pollution in many cities."},{sentence:"You will get your uniform on the first day."},{sentence:"In my opinion, this car should be repaired soon."},{sentence:"We should have a meeting to discuss and report."},{sentence:"Sales figures for last year were better than expected."},{sentence:"The university canteen offers different healthy meal options."},{sentence:"Employment opportunities available in engineering are increasing rapidly."},{sentence:"The employment opportunities available in engineering are increasing rapidly."},{sentence:"We cannot consider an increase in price at this stage."},{sentence:"We should have a meeting to discuss the report."},{sentence:"Our culture influences the choices we make."},{sentence:"There will be a guest lecturer in the next class."},{sentence:"Exam results will be published on the noticeboard."},{sentence:"Atoms are the central building blocks of matter."},{sentence:"There will be a meeting for the first-year students on Friday."},{sentence:"The stairs are to the left of the elevator."},{sentence:"Restrooms are down the entrance and to the right."},{sentence:"Time is needed to complete the lecture."},{sentence:"Restaurants are down to the hall and next to the right."},{sentence:"Make sure you wash your hands before preparing the food."},{sentence:"You should draw your graph on a separate page."},{sentence:"You can ask your tutor for further assistance."},{sentence:"Speak to your tutor if you need further assistance."},{sentence:"Talk to your tutor if you need further assistance."},{sentence:"Talk to your tutor if you require further assistance."},{sentence:"Speak to your tutor if you require further assistance."},{sentence:"You are trained to be a special journalist."},{sentence:"We can have a lecture on the morning of Thursday."},{sentence:"We can all meet in the office after the lecture."},{sentence:"The digital revolution has changed the way we read."},{sentence:"Before the refrigerator was invented, people used underground ice houses."},{sentence:"The nation achieved prosperity by opening its ports for trade."},{sentence:"Understanding visual media has never been more challenging."},{sentence:"Online courses allow students to work on their own paces."},{sentence:"In my opinion, this car should be repaired soon."},{sentence:"You can get your coffee and tea in the lounge room."},{sentence:"The teacher asked the group to commence the task. "},{sentence:"The island is located at the south end of the bay."},{sentence:"The falling birth rate means the number of students drops."}],j=n=>{const a=window.speechSynthesis,e=new SpeechSynthesisUtterance(n);a.speak(e)},N=(n,a)=>{const e={answer:n,inputOriginal:a,inputCompared:[],total:0,correct:0},d=n.replace(/[,.]/g,""),i=a.replace(/[,.]/g,"");console.log("answer",n),console.log("input",a),console.log("answerWithoutComma",d),console.log("inputWithoutComma",i);const c=d.split(" "),s=i.split(" ");console.log("answerArr",c),console.log("inputArr",s),e.total=c.length;const l=[];for(let o=0;o<s.length;o++)c.indexOf(s[o])!==-1?(c.splice(c.indexOf(s[o]),1),e.correct++,l.push({word:o===s.length-1?s[o]:s[o]+" ",correct:!0})):l.push({word:o===s.length-1?s[o]:s[o]+" ",correct:!1});return a.endsWith(".")&&n.endsWith(".")&&l.push({word:".",correct:!0}),e.inputCompared=l,console.log(e),e},C=()=>{const{id:n}=f(),a=g(),[e,d]=u.useState(),[i,c]=u.useState(""),s=u.useRef("");u.useEffect(()=>{d(void 0),c(""),s.current="";const h=Number(n)-1,p=setTimeout(()=>{j(m[h].sentence)},800);return()=>{clearTimeout(p)}},[n]),u.useEffect(()=>{l()},[]);const l=async()=>{};u.useEffect(()=>{console.log(i),s.current=i},[i]);const o=()=>{console.log("inputTextRef.current",s.current),d(N(m[Number(n)-1].sentence,s.current))};return t.jsxs("div",{className:r.container,children:[t.jsxs("div",{children:["Num ",n]}),t.jsx("textarea",{name:"",id:"",className:r.textarea,onChange:h=>c(h.target.value),value:i}),t.jsxs("div",{className:r.row,children:[t.jsx("button",{onClick:o,children:"Submit"}),t.jsxs("div",{children:[t.jsx("button",{style:{marginRight:"10px"},onClick:()=>{Number(n)===1?a(`/Wfd/${m.length}`):a(`/Wfd/${Number(n)-1}`)},children:"Prev"}),t.jsx("button",{onClick:()=>{Number(n)>=m.length?a("/Wfd/1"):a(`/Wfd/${Number(n)+1}`)},children:"Next"})]})]}),e&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:r.compareResult,children:[t.jsxs("div",{className:r.answerRow,children:[t.jsx("div",{className:r.col1,children:"Answer: "}),t.jsx("div",{children:e==null?void 0:e.answer})]}),t.jsxs("div",{className:r.answerRow,children:[t.jsx("div",{className:r.col1,children:"Input: "}),t.jsx("div",{className:r.inputComparedRow,children:e==null?void 0:e.inputCompared.map((h,p)=>t.jsx("span",{style:{color:h.correct?"green":"#333"},children:h.word},p))})]})]}),t.jsxs("div",{className:r.answerRow,children:[t.jsx("div",{className:r.col1,children:"Overall:"}),t.jsxs("div",{className:r.inputCompareRow,children:[e==null?void 0:e.correct,"/",e==null?void 0:e.total]})]})]})]})};export{C as default};