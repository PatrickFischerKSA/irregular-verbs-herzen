'use strict';
// All questions and evidence are based on the summary shown on this website.
const EXPECTATIONS_LEVELS = {
 2: {title:'Connect the characters',subtitle:'Level 2 · Relationships & causes',intro:'Choose the best answer. Think about how the characters and events are connected.',questions:[
 {q:'How is Joe connected to Pip’s family?',a:['He is married to Pip’s sister.','He is Pip’s father.','He is married to Estella.'],correct:0,why:'Pip lives with his sister and her husband, Joe. Joe is therefore Pip’s brother-in-law.'},
 {q:'Which description shows Estella’s connection to Miss Havisham?',a:['She is Miss Havisham’s sister.','She is Miss Havisham’s adopted daughter.','She is Miss Havisham’s employer.'],correct:1,why:'Miss Havisham adopts Estella. Their relationship is a family connection, rather than a marriage or a working relationship.'},
 {q:'Who connects Pip’s early act of kindness with his later financial support?',a:['Bentley Drummle','Joe','Magwitch'],correct:2,why:'Pip helps Magwitch, the escaped convict. Later, Pip discovers that Magwitch is the benefactor who supports him.'},
 {q:'Why can Pip begin a new life as a gentleman in London?',a:['A secret benefactor gives him money.','He marries Estella.','He earns money as a blacksmith.'],correct:0,why:'The financial support makes Pip’s new life possible. He does not receive it through marriage to Estella or through working as a blacksmith.'},
 {q:'Which pair correctly connects a character with Estella?',a:['Joe — her husband; Magwitch — her adopted mother','Miss Havisham — her adopted mother; Bentley Drummle — her husband','Pip — her husband; Joe — her father'],correct:1,why:'Estella is adopted by Miss Havisham and marries Bentley Drummle. Pip loves her, but the summary does not say that she marries him.'},
 {q:'What is the clearest contrast between Joe and Bentley Drummle in the summary?',a:['Both are described as cruel.','Joe lives in London, while Drummle is an escaped convict.','Joe is described as kind, while Drummle is described as cruel.'],correct:2,why:'The summary introduces Joe as a kind blacksmith and Bentley Drummle as Estella’s cruel husband. Their personalities form a clear contrast.'},
 {q:'Which discovery corrects Pip’s belief about his new life?',a:['Magwitch, not Miss Havisham, is his real benefactor.','Joe has secretly married Estella.','Bentley Drummle is a kind blacksmith.'],correct:0,why:'Pip assumes that Miss Havisham gives him money. Discovering Magwitch’s support overturns this assumption.'},
 {q:'How does Pip’s view of his poor background change?',a:['He is always proud of it and never changes.','He becomes ashamed of it, but later regrets his behaviour.','He learns that money is the only thing that matters.'],correct:1,why:'His shame is followed by regret. This change prepares the final lesson about kindness, friendship and loyalty.'}
 ]},
 3: {title:'Read between the lines',subtitle:'Level 3 · Meaning & evidence',intro:'First choose an interpretation. Then choose the strongest evidence from the summary. Both answers must fit.',questions:[
 {q:'What is the strongest interpretation of Pip’s final idea of a “gentleman”?',a:['Being morally good matters more than having a high social position.','A gentleman must hide his poor background.','Wealth automatically makes a person kind.'],correct:0,evidence:['Pip wants to become a gentleman in London.','Pip learns that friendship, kindness and loyalty are more important than money and social status.','Estella marries Bentley Drummle.'],support:1,why:'Pip’s final lesson separates moral worth from social rank. His ambition alone shows what he wanted earlier; the ending is the strongest evidence of his changed values.'},
 {q:'Why does the identity of Pip’s benefactor challenge his assumptions?',a:['It proves that Miss Havisham never met Estella.','It makes his romantic hopes come true.','The person who supports him is the escaped convict he helped, rather than the rich woman he expected.'],correct:2,evidence:['Pip believes Miss Havisham helps him, but his real benefactor is Magwitch.','Joe is a blacksmith.','Pip lives with his sister.'],support:0,why:'The revelation makes Pip reconsider whom he should value. Social appearance and real support do not line up as he expected.'},
 {q:'Which connection best links the beginning and the ending of the story?',a:['Both show that wealth is the only way to earn loyalty.','Pip’s first kindness anticipates the moral lesson he understands at the end.','Pip stops caring about everyone as soon as he helps Magwitch.'],correct:1,evidence:['Pip travels to London and hopes to become a gentleman.','Miss Havisham is rich and Estella marries Drummle.','Pip helps an escaped convict early on; in the end, he values kindness and loyalty above status.'],support:2,why:'The opening act already shows the kindness Pip later learns to value consciously. This gives the story a meaningful connection between its beginning and its ending.'},
 {q:'Which interpretation keeps Pip’s emotional and financial relationships separate?',a:['Pip loves Estella, but Magwitch is the source of his financial support.','Estella’s marriage proves that she gives Pip his money.','Pip’s love for Estella proves that Miss Havisham is his benefactor.'],correct:0,evidence:['Joe is married to Pip’s sister.','Pip falls in love with Estella, while Magwitch is revealed as his real benefactor.','Pip’s ambition is to become a gentleman.'],support:1,why:'Love, adoption, marriage and financial support are different connections. Pip’s feelings for Estella do not establish who funds him.'},
 {q:'Which sequence best explains Pip’s moral development?',a:['Regret causes him to help Magwitch for the first time, and then he becomes an orphan.','He marries Estella, loses Joe’s money, and becomes a blacksmith.','He receives support, becomes ashamed of his background, and later rethinks his behaviour.'],correct:2,evidence:['The summary describes financial support, Pip’s shame, his regret and his final lesson about values.','The summary says that Miss Havisham adopts Estella.','The summary calls Magwitch an escaped convict.'],support:0,why:'The sequence connects changes in Pip’s circumstances with changes in his attitude. The summary presents growth as a process that includes mistakes and regret.'},
 {q:'Which claim can you safely make from this summary, without adding information?',a:['Miss Havisham personally promises to pay for Pip’s education.','Pip wrongly believes that Miss Havisham is helping him financially.','Estella tells Pip that Magwitch is his benefactor.'],correct:1,evidence:['Estella marries the cruel Bentley Drummle.','Pip meets Miss Havisham.','The summary says Pip believes Miss Havisham is helping him, but his real benefactor is Magwitch.'],support:2,why:'A character’s belief is not proof that someone made a promise. The summary supports Pip’s mistaken assumption, but does not explain who told him what.'},
 {q:'How do Joe and Magwitch together support the story’s main message?',a:['A kind blacksmith and an escaped convict show that a person’s value cannot be judged by social status alone.','Their occupations prove that rich people are always cruel.','They show that Pip can only have one loyal connection.'],correct:0,evidence:['London is where Pip receives his education.','Joe is kind, and Magwitch supports Pip; the ending values kindness and loyalty above social status.','Estella is Miss Havisham’s adopted daughter.'],support:1,why:'Joe’s kindness and Magwitch’s support challenge a judgement based only on rank or reputation. This does not mean that every rich person must be cruel.'},
 {q:'Which is the most balanced reading of Pip’s ambition?',a:['The story says that wanting any education is wrong.','The story shows that money guarantees happiness.','Wanting a better life becomes a moral problem when Pip feels ashamed of his background and undervalues kindness.'],correct:2,evidence:['Pip is an orphan.','Pip helps an escaped prisoner.','Pip wants to become a gentleman, becomes ashamed of his background, then regrets his behaviour and learns to value kindness.'],support:2,why:'The problem is not simply having an ambition. The summary links Pip’s mistake to his shame and changing values, and ends with a more humane understanding of success.'}
 ]}
};
const quizById=id=>document.getElementById(id);
let activeExpectationsLevel=1;
const quizProgress={2:{index:0,answers:{}},3:{index:0,answers:{}}};
function setExpectationsLevel(level){
 activeExpectationsLevel=level;
 for(const n of [1,2,3])quizById('expectations-level-'+n).setAttribute('aria-pressed',String(n===level));
 quizById('game').hidden=level!==1;
 quizById('expectations-quiz').hidden=level===1;
 if(level!==1)renderExpectationsQuiz();
}
function quizParagraph(text,className){const p=document.createElement('p');p.textContent=text;if(className)p.className=className;return p;}
function quizChoices(title,items,name,chosen,disabled){
 const fieldset=document.createElement('fieldset');const legend=document.createElement('legend');legend.textContent=title;fieldset.append(legend);
 items.forEach((text,index)=>{const label=document.createElement('label');label.className='quiz-option';const input=document.createElement('input');input.type='radio';input.name=name;input.value=index;input.checked=chosen===index;input.disabled=disabled;label.append(input,document.createTextNode(text));fieldset.append(label);});return fieldset;
}
function quizFeedback(q,record){
 const box=quizById('quiz-feedback');box.replaceChildren();box.className='quiz-feedback';
 if(!record?.attempts)return;
 const heading=document.createElement('h3');heading.textContent=record.solved?'♥ Correct — well connected!':'☠ Not quite. Look at the connection.';box.append(heading);
 if(!record.solved){box.append(quizParagraph('Best answer: '+q.a[q.correct]));if(q.evidence)box.append(quizParagraph('Strongest evidence: '+q.evidence[q.support]));}
 box.append(quizParagraph(q.why));box.classList.add(record.solved?'good':'wrong');
 if(!record.solved)box.append(quizParagraph('Choose again, then check your answer.'));
}
function renderExpectationsQuiz(){
 const level=activeExpectationsLevel,config=EXPECTATIONS_LEVELS[level],state=quizProgress[level],q=config.questions[state.index],record=state.answers[state.index];
 quizById('quiz-subtitle').textContent=config.subtitle;quizById('quiz-title').textContent=config.title;quizById('quiz-intro').textContent=config.intro;
 quizById('quiz-position').textContent=`Question ${state.index+1} of ${config.questions.length}`;
 const solved=Object.values(state.answers).filter(r=>r.solved).length;
 const first=Object.values(state.answers).filter(r=>r.first===true).length;
 quizById('quiz-score').textContent=`${solved} / ${config.questions.length} completed · ${first} right first time`;
 quizById('quiz-question').textContent=q.q;
 const options=quizById('quiz-options');options.replaceChildren(quizChoices(q.evidence?'1. Choose your interpretation':'Choose one answer',q.a,'interpretation',record?.choice,!!record?.solved));
 if(q.evidence)options.append(quizChoices('2. Choose the strongest evidence',q.evidence,'evidence',record?.evidence,!!record?.solved));
 quizFeedback(q,record);quizById('quiz-check').textContent=record?.solved?(state.index===config.questions.length-1?'Finish this level':'Next question'):'Check answer';
 quizById('quiz-previous').disabled=state.index===0;
 quizById('quiz-next').disabled=state.index===config.questions.length-1;
 quizById('quiz-completion').hidden=true;
}
function quizBurst(good){
 if(!motion.checked||reducedMotion.matches)return;
 const r=quizById('quiz-question').getBoundingClientRect();for(let i=0;i<10;i++){const p=document.createElement('span');p.className='memory-particle'+(good?'':' skull');p.textContent=good?'♥':'☠';p.style.left=r.left+r.width/2+'px';p.style.top=r.top+r.height/2+'px';p.style.setProperty('--dx',(Math.random()-.5)*220+'px');p.style.setProperty('--dy',-60-Math.random()*130+'px');p.style.setProperty('--rotate',(Math.random()-.5)*90+'deg');quizById('memory-particles').append(p);setTimeout(()=>p.remove(),1300);}
}
function finishQuizLevel(){
 const state=quizProgress[activeExpectationsLevel],config=EXPECTATIONS_LEVELS[activeExpectationsLevel];const solved=Object.values(state.answers).filter(r=>r.solved).length;
 if(solved!==config.questions.length){const missing=config.questions.findIndex((q,i)=>!state.answers[i]?.solved);state.index=missing;renderExpectationsQuiz();quizById('quiz-question').focus();return;}
 const first=Object.values(state.answers).filter(r=>r.first).length;
 quizById('quiz-completion-text').textContent=`All ${config.questions.length} questions completed. ${first} correct on your first try. ${activeExpectationsLevel===2?'You can now explore meaning and evidence in Level 3.':'You have explored the relationships, the evidence and the main message of the story.'}`;
 quizById('quiz-completion').hidden=false;quizById('quiz-level-up').textContent=activeExpectationsLevel===2?'Continue to Level 3':'Back to the Memory';quizById('quiz-completion').focus();
}
quizById('quiz-form').addEventListener('submit',event=>{
 event.preventDefault();const state=quizProgress[activeExpectationsLevel],config=EXPECTATIONS_LEVELS[activeExpectationsLevel],q=config.questions[state.index],old=state.answers[state.index];
 if(old?.solved){if(state.index===config.questions.length-1)finishQuizLevel();else{state.index++;renderExpectationsQuiz();quizById('quiz-question').focus();}return;}
 const chosen=document.querySelector('input[name="interpretation"]:checked'),evidence=q.evidence?document.querySelector('input[name="evidence"]:checked'):null;
 if(!chosen||(q.evidence&&!evidence)){const box=quizById('quiz-feedback');box.className='quiz-feedback';box.textContent=q.evidence?'Choose an interpretation and a piece of evidence before checking.':'Choose an answer before checking.';return;}
 const choice=Number(chosen.value),support=evidence?Number(evidence.value):null,ok=choice===q.correct&&(!q.evidence||support===q.support);
 state.answers[state.index]={choice,evidence:support,solved:ok,first:old?.attempts?old.first:ok,attempts:(old?.attempts||0)+1};
 renderExpectationsQuiz();quizBurst(ok);if(ok)quizById('quiz-check').focus();
});
quizById('quiz-previous').addEventListener('click',()=>{const s=quizProgress[activeExpectationsLevel];if(s.index>0){s.index--;renderExpectationsQuiz();}});
quizById('quiz-next').addEventListener('click',()=>{const s=quizProgress[activeExpectationsLevel];if(s.index<EXPECTATIONS_LEVELS[activeExpectationsLevel].questions.length-1){s.index++;renderExpectationsQuiz();}});
quizById('quiz-level-up').addEventListener('click',()=>setExpectationsLevel(activeExpectationsLevel===2?3:1));
quizById('quiz-summary').addEventListener('click',()=>quizById('summary-dialog').showModal());
for(const n of [1,2,3])quizById('expectations-level-'+n).addEventListener('click',()=>setExpectationsLevel(n));
quizById('start').addEventListener('click',()=>{quizById('expectations-levels').hidden=false;setExpectationsLevel(1);});
