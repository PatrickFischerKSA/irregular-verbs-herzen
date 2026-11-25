'use strict';
// These are the 15 pairs supplied in the brief, in their original wording.
const MEMORY_PAIRS = [
 ['Pip','A poor orphan'],
 ['Joe','A kind blacksmith'],
 ['Magwitch','An escaped convict'],
 ['Miss Havisham','A rich woman who adopts Estella'],
 ['Estella','The girl Pip falls in love with'],
 ['Bentley Drummle',"Estella's cruel husband"],
 ['London','The city where Pip receives his education'],
 ['A secret benefactor','Someone who secretly gives another person money or support'],
 ["Pip's ambition",'To become a gentleman'],
 ["Pip's first act of kindness",'Helping an escaped prisoner'],
 ["Pip's mistake",'Believing that Miss Havisham gives him money'],
 ["Pip's shame",'His poor background'],
 ["Pip's discovery",'Magwitch is his real benefactor'],
 ['Orphan','A child whose parents have died'],
 ['Blacksmith','A person who makes things from iron']
];
const memoryElement=id=>document.getElementById(id);
let deck=[],selected=[],matched=0,moves=0,locked=false;
const board=memoryElement('board');
const notice=document.querySelector('.game-notice');
const motion=memoryElement('memory-motion');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
motion.checked=!reducedMotion.matches;
function shuffledCards(){
 const cards=MEMORY_PAIRS.flatMap((pair,id)=>pair.map((text,side)=>({id,side,text,found:false})));
 for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
 return cards;
}
function updateScores(){memoryElement('match-count').textContent=`${matched} / ${MEMORY_PAIRS.length}`;memoryElement('move-count').textContent=moves;}
function message(text,state=''){memoryElement('game-message').textContent=text;notice.dataset.state=state;}
function showCard(index){const button=board.children[index];button.classList.add('open');button.textContent=deck[index].text;button.setAttribute('aria-label',`Card ${index+1}: ${deck[index].text}`);button.setAttribute('aria-pressed','true');}
function hideCard(index){const button=board.children[index];button.className='memory-card';button.replaceChildren();const back=document.createElement('span');back.className='card-back';back.setAttribute('aria-hidden','true');button.append(back);button.setAttribute('aria-label',`Card ${index+1}, face down`);button.setAttribute('aria-pressed','false');}
function animateCards(good,index){
 if(!motion.checked||reducedMotion.matches)return;
 const rect=board.children[index].getBoundingClientRect();
 for(let i=0;i<12;i++){const particle=document.createElement('span');particle.className='memory-particle'+(good?'':' skull');particle.textContent=good?'♥':'☠';particle.style.left=rect.left+rect.width/2+'px';particle.style.top=rect.top+rect.height/2+'px';particle.style.setProperty('--dx',(Math.random()-.5)*260+'px');particle.style.setProperty('--dy',-80-Math.random()*150+'px');particle.style.setProperty('--rotate',(Math.random()-.5)*100+'deg');memoryElement('memory-particles').append(particle);setTimeout(()=>particle.remove(),1300);}
}
function finish(){
 memoryElement('result').textContent=`You matched all ${MEMORY_PAIRS.length} pairs in ${moves} tries. Well done!`;
 memoryElement('completion').hidden=false;
 message('All pairs found! You have connected the characters, the story and the vocabulary.','good');
 memoryElement('completion').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'center'});
 memoryElement('completion').focus({preventScroll:true});
}
function chooseCard(index){
 if(locked||deck[index].found||selected.includes(index))return;
 showCard(index);selected.push(index);
 if(selected.length===1){message('Now choose a card that goes with it.');return;}
 moves++;updateScores();
 const [a,b]=selected;
 if(deck[a].id===deck[b].id){
  deck[a].found=deck[b].found=true;matched++;updateScores();
  for(const i of selected){board.children[i].classList.add('matched');board.children[i].disabled=true;board.children[i].setAttribute('aria-label',`Matched: ${deck[i].text}`);}
  const pair=MEMORY_PAIRS[deck[a].id];message(`A match! ${pair[0]} — ${pair[1]}.`,'good');animateCards(true,b);selected=[];
  if(matched===MEMORY_PAIRS.length)finish();
 }else{
  locked=true;
  for(const i of selected)board.children[i].classList.add('wrong');
  message('These cards do not belong together. Read them, then try another pair.','wrong');
  memoryElement('continue').hidden=false;animateCards(false,b);
 }
}
function newGame(){
 deck=shuffledCards();selected=[];matched=0;moves=0;locked=false;
 board.replaceChildren(...deck.map((card,index)=>{const button=document.createElement('button');button.type='button';button.className='memory-card';button.addEventListener('click',()=>chooseCard(index));return button;}));
 for(let i=0;i<deck.length;i++)hideCard(i);
 memoryElement('continue').hidden=true;memoryElement('completion').hidden=true;
 message('Choose your first card. There is no hurry.');updateScores();
}
memoryElement('start').addEventListener('click',()=>{memoryElement('game').hidden=false;newGame();memoryElement('start').textContent='Restart the Memory';memoryElement('game').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});board.children[0].focus({preventScroll:true});});
// Mismatches stay visible until the learner is ready; no reading time limit.
memoryElement('continue').addEventListener('click',()=>{const first=selected[0];selected.forEach(hideCard);selected=[];locked=false;memoryElement('continue').hidden=true;message('Try again. Match a name or phrase with its meaning.');board.children[first].focus();});
const summaryDialog=memoryElement('summary-dialog');
memoryElement('dialog-summary').append(...Array.from(memoryElement('summary-source').children,p=>p.cloneNode(true)));
memoryElement('read-again').addEventListener('click',()=>summaryDialog.showModal());
memoryElement('close-summary').addEventListener('click',()=>summaryDialog.close());
const restartDialog=memoryElement('restart-dialog');
memoryElement('restart').addEventListener('click',()=>restartDialog.showModal());
memoryElement('cancel-restart').addEventListener('click',()=>restartDialog.close());
memoryElement('confirm-restart').addEventListener('click',()=>{restartDialog.close();newGame();board.children[0].focus();});
memoryElement('play-again').addEventListener('click',()=>{newGame();memoryElement('game').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});board.children[0].focus({preventScroll:true});});
