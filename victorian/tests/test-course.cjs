const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
process.chdir(path.resolve(__dirname,'../..'));
const original=JSON.parse(fs.readFileSync('victorian/data/flashcards-original.json','utf8'));
const cards=JSON.parse(fs.readFileSync('victorian/data/flashcards.json','utf8'));
assert.equal(cards.length,40);
for(const raw of original){const card=cards.find(c=>c.sourceId===raw.id);assert.ok(card);assert.equal(card.front,raw.front);assert.equal(card.back,raw.back);assert.equal(card.category,raw.category);}

const elements=new Map();const element=id=>{if(!elements.has(id))elements.set(id,{textContent:'',checked:false,addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},focus(){},replaceChildren(){}});return elements.get(id)};
const document={getElementById:element,addEventListener(){},querySelector(){return null}};
let stored={};const localStorage={getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v};const window={addEventListener(){}};
let app=fs.readFileSync('victorian/app.js','utf8');app=app.slice(0,app.lastIndexOf('renderToolbox();renderSources();'));
const ctx=vm.createContext({document,localStorage,window,matchMedia:()=>({matches:true}),assert,setTimeout,innerHeight:800});
vm.runInContext(fs.readFileSync('victorian/data/content.js','utf8')+'\n'+app,ctx);
vm.runInContext(`
const objectives=D.questions.filter(q=>q.type!=='open');
function right(q){if(q.type==='mc')return {choice:String(q.correct)};if(q.type==='tf')return {choice:String(q.correct),correction:q.explanation};if(q.type==='gap')return {gaps:q.answers.map(a=>a[0])};if(q.type==='match')return {matches:q.pairs.map((_,i)=>String(i))};if(q.type==='sentence')return {parts:q.parts.map((_,i)=>i)};}
for(const q of objectives){assert.equal(evaluateObjective(q,right(q)).correct,true,q.id);assert.ok(evaluateObjective(q,{}).empty,q.id);recordObjective(q,true);assert.equal(state.records[q.id].earned,10);recordObjective(q,true);assert.equal(state.records[q.id].attempts,1);}
assert.equal(Object.values(state.records).reduce((s,r)=>s+r.earned,0),objectives.length*10);
state.records={};for(const q of objectives){recordObjective(q,false);assert.ok(pendingQuestion(q));recordObjective(q,true);assert.equal(state.records[q.id].earned,5);assert.equal(state.records[q.id].wrong,1);assert.equal(state.records[q.id].first,false);assert.ok(!pendingQuestion(q));}
const gap=D.questions.find(q=>q.type==='gap'&&q.answers[0].includes('urbanization'));assert.ok(evaluateObjective(gap,{gaps:['  URBANIZATION. ']}).correct);
for(let i=0;i<100;i++){newMixed();assert.equal(new Set(mixedIds).size,12);assert.equal(new Set(mixedIds.map(id=>questionMap.get(id).level)).size,8);const chunks=order('test'+i+'-chunks',[0,1,2]);assert.ok(chunks.some((v,j)=>v!==j));}
render=()=>{};
for(const group of D.memory){memoryGroup=group.id;memories.set(memoryGroup,createMemory(memoryGroup));const m=memory();assert.equal(m.deck.length,group.pairs.length*2);selectMemory(0);selectMemory(0);assert.equal(m.open.length,1);const other=m.deck.findIndex(c=>c.pair!==m.deck[0].pair);selectMemory(other);assert.ok(m.locked);const tries=m.tries;selectMemory(2);assert.equal(m.tries,tries);m.open=[];m.locked=false;for(let pair=0;pair<group.pairs.length;pair++){const indices=m.deck.map((c,i)=>({c,i})).filter(x=>x.c.pair===pair).map(x=>x.i);selectMemory(indices[0]);selectMemory(indices[1]);}assert.ok(m.deck.every(c=>c.found));}
state.level=1;state.cards.c1='know';state.cards.c4='practise';state.drafts['q1-12']={text:'private draft'};performReset('level');assert.equal(state.records['q1-01'],undefined);assert.ok(state.records['q2-01']);assert.equal(state.cards.c1,undefined);assert.equal(state.cards.c4,'practise');assert.equal(state.drafts['q1-12'],undefined);
state.level=8;state.cards.c4='know';performReset('level');assert.equal(state.cards.c4,'know');
performReset('all');assert.equal(Object.keys(state.records).length,0);assert.equal(Object.keys(state.cards).length,0);assert.equal(Object.keys(state.drafts).length,0);assert.equal(state.stage,'discover');assert.equal(memories.size,0);
`,ctx);
console.log('PASS: all 88 objective answers and empty guards, no duplicate points, 10/5-point scoring, retry/error history, spelling tolerance, 100 mixed draws covering all 8 levels, scrambled sentences, all 5 memory games, isolated and global reset.');
