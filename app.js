'use strict';
const $ = id => document.getElementById(id);
const STORAGE = 'verb-lab-v1';
const RULES = {
 'Present simple': 'Für Gewohnheiten und allgemeine Zustände brauchst du das Present simple: Grundform, bei he/she/it meist mit -s oder -es.',
 'Present continuous': 'Eine Handlung geschieht gerade jetzt. Dafür brauchst du am/is/are + Verb mit -ing.',
 'Present perfect simple': 'Das Geschehen hat einen Bezug zur Gegenwart. Bilde have/has + past participle (3. Verbform).',
 'Present perfect continuous': 'Die Tätigkeit begann früher und dauert noch an. Die Dauer steht im Vordergrund: have/has been + Verb mit -ing.',
 'Simple past': 'Das Ereignis liegt in einer abgeschlossenen Vergangenheit. Dafür brauchst du die 2. Verbform, ohne have/has.'
};
const EASY = {
 'Present simple': ['Einfache Gegenwart', 'Für Gewohnheiten: Nimm die Grundform. Bei he, she oder it kommt meist -s dazu.'],
 'Present continuous': ['Gerade jetzt', 'Nimm am, is oder are und hänge -ing an das Verb. Beispiel: is playing.'],
 'Present perfect simple': ['Vergangenheit mit Bezug zu jetzt', 'Nimm have oder has und die 3. Verbform. Beispiel: has played. Bei unregelmässigen Verben ändert sich die 3. Form oft.'],
 'Present perfect continuous': ['Seit einiger Zeit dabei', 'Nimm have been oder has been und das Verb mit -ing. Beispiel: has been playing.'],
 'Simple past': ['Abgeschlossene Vergangenheit', 'Nimm die 2. Verbform. Bei diesen Verben musst du sie lernen. Beispiel: go wird zu went.']
};
const NOTES = [
 '„usually“ zeigt eine Gewohnheit. „Our teacher“ entspricht he/she: lead + s = leads.',
 '„Look!“ und „right now“ zeigen, was gerade passiert. Dad ist Singular: is buying.',
 '„Watch out!“ warnt vor einer Handlung in diesem Moment. Bei bite fällt vor -ing das stumme e weg: biting.',
 '„for five minutes now“ und der müde Arm betonen eine noch andauernde Tätigkeit. She verlangt has: has been holding.',
 '„usually“ und „on Saturdays“ zeigen eine Gewohnheit. Bei „my parents“ (they) bleibt die Grundform let.',
 '„right now“ zeigt den laufenden Vorgang. „The water“ ist Singular; freeze verliert das letzte e: is freezing.',
 'Der Zug ist weg; die Folge gilt jetzt: „We are too late!“ Die Formen sind leave – left – left; Singular: has left.',
 '„Since Monday“ verbindet den Beginn mit jetzt. Die Formen sind become – became – become; Singular: has become.',
 '„Yesterday“ setzt das Ereignis in die abgeschlossene Vergangenheit. beat – beat – beaten: Die 2. Form ist beat.',
 '„every morning“ beschreibt eine Gewohnheit. Nach I steht die Grundform feel.',
 '„right now“ zeigt eine laufende Handlung. „The children“ ist Plural: are; hide verliert das stumme e: hiding.',
 '„every Tuesday“ zeigt eine Gewohnheit. Bei Ella (she) wird go zu goes.',
 '„in 2010“ ist ein abgeschlossener Zeitpunkt. Die Formen sind flee – fled – fled.',
 '„usually“ zeigt die Gewohnheit. Nach we steht have, nicht has.',
 '„every weekday“ zeigt eine Gewohnheit. Nach she bekommt catch die Endung -es: catches.',
 '„last Sunday“ liegt in der abgeschlossenen Vergangenheit. bring – brought – brought.',
 '„Yesterday“ verlangt hier Simple past. lay (legen) – laid – laid. Nicht mit lie (liegen) – lay – lain verwechseln.',
 'Die Verletzung hat eine Folge jetzt: „I cannot walk properly now.“ hurt – hurt – hurt; nach I: have hurt.',
 '„Last week“ liegt in der abgeschlossenen Vergangenheit. lend – lent – lent.',
 '„yesterday’s match“ ist abgeschlossen. hit – hit – hit: Auch die 2. Form lautet hit.',
 '„for three hours now“ und „no sign of stopping“ betonen die andauernde Tätigkeit. Der Wind ist Singular: has been blowing.',
 '„Look!“ lenkt den Blick auf das aktuelle Geschehen. A helicopter ist Singular: is flying.',
 '„two glasses“ und „so far today“ betonen das bisherige Ergebnis. drink – drank – drunk; nach he: has drunk.',
 '„every hour“ beschreibt eine Regelmässigkeit. „This station“ ist Singular: broadcasts.',
 '„for the last twenty minutes“ und „still have more“ betonen die Dauer. Nach I: have been; bei cutting wird das t verdoppelt.',
 '„in 2020“ ist ein abgeschlossener Zeitpunkt. give – gave – given: Im Simple past steht gave.',
 'Die Brille ist jetzt kaputt, deshalb kann ich nicht gut sehen. break – broke – broken; nach I: have broken.',
 '„for two hours now“ und „is still there“ betonen die Dauer. lie (liegen) wird vor -ing zu lying; der Hund: has been lying.',
 '„usually“ zeigt die Gewohnheit. „Our manager“ ist Singular: deals.',
 '„last year“ verlangt hier Simple past. forget – forgot – forgotten.',
 '„three messages so far today“ beschreibt das bisherige Ergebnis. Britisches Englisch: get – got – got; nach he: has got. Amerikanisch ist has gotten ebenfalls richtig.',
 'Es geht um einen typischen Zustand („usually“). „Our guide“ ist Singular: is. Die Lücke steht bereits vor usually.',
 '„Last night“ liegt in der abgeschlossenen Vergangenheit. do – did – done: Hier steht did.',
 '„At the moment“ zeigt eine Handlung jetzt. „The farmer“ ist Singular: is feeding.',
 '„Listen!“ und „right now“ zeigen das aktuelle Geschehen. Bei beginning wird das n verdoppelt; „the concert“: is beginning.',
 'Es sind jetzt keine Sandwiches mehr da: Das Ergebnis zählt. eat – ate – eaten; nach we: have eaten.',
 '„last night’s storm“ liegt in der abgeschlossenen Vergangenheit. fall – fell – fallen.',
 '„Last Saturday“ zeigt einen abgeschlossenen Zeitpunkt. Die übliche Vergangenheitsform lautet bet; betted ist ebenfalls möglich.',
 'Die Folge gilt jetzt: Die beiden sind wieder befreundet. forgive – forgave – forgiven; nach she: has forgiven.',
 '„Look!“ zeigt eine Handlung jetzt. Der Gärtner ist Singular: is kneeling. Die unregelmässige Vergangenheit knelt wird hier nicht gebraucht.',
 '„Here they are“ zeigt das aktuelle Ergebnis des Findens. find – found – found; nach I: have found.',
 '„Look!“ zeigt eine laufende Handlung. Mum ist Singular: is hanging. Bei Bildern heisst die Vergangenheit hung; jetzt brauchst du die -ing-Form.',
 '„The decision is made“ betont das Ergebnis jetzt. choose – chose – chosen; nach we: have chosen.',
 '„for six months now“ und „still unfinished“ betonen den laufenden Bauprozess. „The workers“ ist Plural: have been building.',
 '„every day“ zeigt eine Gewohnheit. Nach „my aunt“ (she) steht drives.',
 '„Look!“ zeigt den Vorgang jetzt. „The little girl“ ist Singular: is drawing.',
 '„always“ zeigt eine Gewohnheit. Nach he steht keeps.',
 '„since breakfast“ und „have not finished yet“ betonen den laufenden Vorgang. Nach they: have been; bei digging wird das g verdoppelt.',
 'Regeln gelten allgemein. „The school rules“ ist Plural: forbid ohne -s.',
 '„Look out of the window!“ zeigt das aktuelle Geschehen. „Our guests“ ist Plural: are; come verliert das e: coming.',
 '„since primary school“ beschreibt einen Zustand, der bis jetzt anhält. know ist ein Zustandsverb und steht hier üblicherweise nicht im Continuous. know – knew – known: have known.',
 '„Every morning“ zeigt eine Gewohnheit. Nach Mia (she) steht bends.',
 '„yesterday“ zeigt die abgeschlossene Vergangenheit. burst – burst – burst: Die Form ändert sich nicht.',
 '„yesterday afternoon“ liegt in der abgeschlossenen Vergangenheit. creep – crept – crept.',
 'Der Preis ist ein allgemeiner Zustand. „This book“ ist Singular: costs. Die Vergangenheit cost wird hier nicht gebraucht.',
 '„at midnight yesterday“ ist ein abgeschlossener Zeitpunkt. hear – heard – heard.',
 '„for hours“ und „still burning“ betonen die noch laufende Tätigkeit. „The firefighters“ ist Plural: have been fighting.',
 '„for weeks“ und „still getting taller“ betonen den noch laufenden Prozess. „These plants“ ist Plural: have been growing.'
];
const VARIANTS = {4:['has held'],28:['has lain'],31:['has gotten'],38:['betted'],57:['have fought'],58:['have grown']};
function normalize(s){return s.normalize('NFKC').trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').replace(/[.!?]+$/,'');}
function accepted(q){const base=[q.answer,...(VARIANTS[q.id]||[])];return base.flatMap(a=>[a,a.replace(/^have /,"'ve ").replace(/^has /,"'s ").replace(/^is /,"'s ").replace(/^are /,"'re ").replace(/^am /,"'m ")]).map(normalize);}
function isCorrect(q,value){return accepted(q).includes(normalize(value));}
let saved={};try{saved=JSON.parse(localStorage.getItem(STORAGE)||'{}')||{};}catch{}
let records=saved.records&&typeof saved.records==='object'?saved.records:{};
for(const [id,r] of Object.entries(records)){if(!QUESTIONS.some(q=>String(q.id)===id)||!r||typeof r!=='object')delete records[id];}
let current=QUESTIONS.some(q=>q.id===saved.current)?saved.current:1;
let order=QUESTIONS.map(q=>q.id), mode='all', streak=0, empty=false, retryAfterSolve=false;
const motion=$('motion');motion.checked=saved.motion!==false&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
function persist(){try{localStorage.setItem(STORAGE,JSON.stringify({records,current,motion:motion.checked}));}catch{$('storage-note').textContent='Speichern ist im Browser nicht verfügbar. Du kannst trotzdem üben.';}}
function candidates(){return order.filter(id=>{const q=QUESTIONS[id-1];return ($('tense-filter').value==='all'||q.tense===$('tense-filter').value)&&(mode==='all'||records[id]?.needsPractice);});}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function stats(){const rs=Object.values(records);const count=rs.filter(r=>r.solved).length;const first=rs.filter(r=>typeof r.first==='boolean');$('solved').innerHTML=count+'<span>/58</span>';$('accuracy').textContent=first.length?Math.round(100*first.filter(r=>r.first).length/first.length)+' %':'–';$('streak').textContent=streak;$('progress').value=count;$('progress').textContent=count+' von 58';$('percent').textContent=Math.round(count/58*100)+' %';$('error-count').textContent=rs.filter(r=>r.needsPractice).length;
 $('question-map').replaceChildren(...order.map(id=>{const q=QUESTIONS[id-1],r=records[id];const b=document.createElement('button');b.textContent=id;b.className=(r?.needsPractice?'wrong':r?.solved?'done':'')+(id===current&&!empty?' active':'');b.setAttribute('aria-label',`Aufgabe ${id}: ${r?.needsPractice?'noch üben':r?.solved?'gelöst':'offen'}`);if(id===current&&!empty)b.setAttribute('aria-current','step');b.disabled=$('tense-filter').value!=='all'&&q.tense!==$('tense-filter').value;b.addEventListener('click',()=>{if(mode==='errors'&&!r?.needsPractice){mode='all';setTabs();}current=id;render(true);});return b;}));}
function setTabs(){$('all-mode').setAttribute('aria-pressed',mode==='all');$('error-mode').setAttribute('aria-pressed',mode==='errors');}
function feedback(title,body,type=''){$('feedback').className='feedback '+type;$('feedback').innerHTML=`<h3>${title}</h3>${body}`;}
function explanation(q){return `<p><b>${q.tense}</b></p><p>${escapeHTML(NOTES[q.id-1])}</p><p>${RULES[q.tense]}</p>`;}
function render(focus=false){retryAfterSolve=false;const list=candidates();empty=!list.length;
 $('question-content').hidden=empty;
 let e=$('empty');if(e)e.remove();
 if(empty){e=document.createElement('div');e.id='empty';e.className='empty';const total=Object.values(records).filter(r=>r.needsPractice).length;e.innerHTML=`<h2>${mode==='errors'?'Gut gemacht!':'Keine Aufgaben'}</h2><p>${mode==='errors'?(total?'In dieser Zeitform gibt es keine Fehler zum Wiederholen.':'Du hast keine offenen Fehler zum Wiederholen.'):'Wähle eine andere Zeitform.'}</p><button class="primary" id="back-all">Alle Aufgaben üben</button>`;$('question-content').after(e);$('back-all').onclick=()=>{mode='all';$('tense-filter').value='all';setTabs();render(true);};$('question-label').textContent='DEIN TRAINING';$('verb').textContent='Weiter so';$('position').textContent='0 Aufgaben';$('previous').disabled=$('next').disabled=true;stats();return;}
 if(!list.includes(current))current=list[0];const q=QUESTIONS[current-1],r=records[current];const parts=q.sentence.split('___');$('before').textContent=parts[0];$('after').textContent=parts[1];$('question-label').textContent=`AUFGABE ${String(q.id).padStart(2,'0')} / 58`;$('verb').textContent='to '+q.verb+' · '+q.german;$('easy-help').replaceChildren();const easyTitle=document.createElement('b');easyTitle.textContent=EASY[q.tense][0]+' ('+q.tense+')';const easyText=document.createElement('p');easyText.textContent=EASY[q.tense][1];$('easy-help').append(easyTitle,easyText);$('answer').value=r?.value||'';$('answer').disabled=!!r?.solved;$('answer').className=r?.solved?'correct':'';$('answer').setAttribute('aria-invalid','false');$('feedback').innerHTML='';$('feedback').className='';$('check').textContent=r?.solved?'Nächste Aufgabe':'Antwort prüfen';$('hint').hidden=!!r?.solved;$('position').textContent=`${list.indexOf(current)+1} von ${list.length}`;$('previous').disabled=list.indexOf(current)===0;$('next').disabled=list.indexOf(current)===list.length-1;
 if(r?.solved)feedback('♥ Richtig gelöst',`<p class="solution">${escapeHTML(r.value||q.answer)}</p>${explanation(q)}`,'good');
 stats();persist();if(focus&&!r?.solved)$('answer').focus();}
function burst(good){if(!motion.checked||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=$('answer').getBoundingClientRect();for(let i=0;i<14;i++){const el=document.createElement('span');el.className='particle'+(good?'':' skull');el.textContent=good?'♥':'☠';el.style.left=(rect.left+rect.width/2)+'px';el.style.top=(rect.top+rect.height/2)+'px';el.style.setProperty('--dx',((Math.random()-.5)*340)+'px');el.style.setProperty('--dy',(-80-Math.random()*210)+'px');el.style.setProperty('--scale',(.6+Math.random()*.9));el.style.setProperty('--rotation',((Math.random()-.5)*110)+'deg');$('particles').append(el);setTimeout(()=>el.remove(),1350);}}
function move(step){const list=candidates();if(retryAfterSolve&&mode==='errors'){render(true);return;}const index=list.indexOf(current);const dest=list[index+step];if(dest){current=dest;render(true);}else if(mode==='errors')render(true);else if(step>0){feedback('Runde abgeschlossen',`<p>Du bist am Ende dieser Auswahl. Wähle links eine Aufgabe oder übe deine offenen Fehler.</p>`,'good');$('error-mode').focus();}}
$('answer-form').addEventListener('submit',e=>{e.preventDefault();if(empty)return;const q=QUESTIONS[current-1];if(records[current]?.solved){move(1);return;}const value=$('answer').value;if(!normalize(value)){feedback('Hier fehlt noch etwas.','<p>Trage zuerst eine Verbform ein. Eine leere Antwort zählt nicht als Fehler.</p>','tip');$('answer').focus();return;}const ok=isCorrect(q,value);const old=records[current]||{};const wasSolved=old.solved;records[current]={...old,first:typeof old.first==='boolean'?old.first:ok,value,solved:ok,needsPractice:!ok,attempts:(old.attempts||0)+1};
 if(ok){if(!wasSolved)streak++;$('answer').disabled=true;$('answer').className='correct';$('answer').setAttribute('aria-invalid','false');$('check').textContent='Nächste Aufgabe';$('hint').hidden=true;feedback('♥ Genau richtig!',`<p class="solution">${escapeHTML(value.trim())}</p>${normalize(value)!==normalize(q.answer)?`<p>Auch möglich. Die Musterlösung lautet <b>${escapeHTML(q.answer)}</b>.</p>`:''}${explanation(q)}`,'good');retryAfterSolve=mode==='errors';$('check').focus();}
 else{streak=0;$('answer').setAttribute('aria-invalid','true');feedback('☠ Noch nicht – schau genauer hin.',`<p>Deine Antwort: <b>${escapeHTML(value)}</b></p><p>Gesuchte Lösung: <strong class="solution">${escapeHTML(q.answer)}</strong></p>${explanation(q)}<p>Ändere deine Antwort und prüfe noch einmal.</p>`);$('answer').focus();$('answer').select();}
 burst(ok);stats();persist();});
$('hint').onclick=()=>{if(empty)return;const q=QUESTIONS[current-1];feedback('Ein kleiner Tipp',`<p>Gesucht ist <b>${q.tense}</b>.</p><p>${RULES[q.tense]}</p>`,'tip');};
$('next').onclick=()=>move(1);$('previous').onclick=()=>move(-1);
$('all-mode').onclick=()=>{mode='all';setTabs();render();};$('error-mode').onclick=()=>{mode='errors';setTabs();render();};$('tense-filter').onchange=()=>render();
$('shuffle').onclick=()=>{for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}current=candidates()[0]||current;render();};
$('reset').onclick=()=>{if(confirm('Alle gespeicherten Antworten und deinen Lernstand auf diesem Gerät löschen?')){records={};streak=0;current=1;mode='all';order=QUESTIONS.map(q=>q.id);$('tense-filter').value='all';setTabs();persist();render();}};
motion.onchange=persist;render();
