# Verb Lab · Irregular Verbs

58 Originalsätze aus den bereitgestellten Aufgaben- und Lösungsblättern, mit Sofortkorrektur und deutschen Erklärungen zu jeder Aufgabe. Rote Herzen bzw. Totenköpfe fliegen direkt aus dem Antwortfeld. Fehler können beliebig oft korrigiert und gesondert wiederholt werden.

## Direkt starten

`index.html` im Browser öffnen. Keine Installation, keine externen Bibliotheken, kein Konto, kein Server erforderlich. Die HTML-, CSS- und JS-Dateien bilden die vollständige Website.

## GitHub Pages

Die Dateien ins Hauptverzeichnis eines GitHub-Repositories kopieren. In **Settings → Pages → Deploy from a branch** die Branch `main` und `/ (root)` wählen und speichern. Alle Verweise sind relativ und funktionieren auch unter einem Repository-Unterpfad. `.nojekyll` ist enthalten.

## Funktionen

- Alle 58 Sätze und erwarteten Zeitformen entsprechen den beiden PDFs.
- Korrektur unmittelbar nach „Antwort prüfen“ oder Enter. Unfertige Eingaben werden nicht während des Tippens als Fehler gewertet.
- **Basic:** Zeitform und kurze Bildungshilfe sind vor der Antwort sichtbar.
- **Advanced:** Die Zeitform wird selbst erkannt; Zeitformfilter, Bildungshilfe und verratender Tipp sind ausgeblendet. Nach dem Prüfen bleibt die Erklärung sichtbar. Die gewählte Variante wird gespeichert.
- Deutsche Bedeutung aller 58 Verben direkt bei der englischen Grundform sichtbar, passend zum Satzkontext.
- Pro Satz: Lösung, Zeitform, konkretes Signal und Erklärung zur Bildung.
- Gross-/Kleinschreibung, überzählige Leerzeichen, abschliessende Satzzeichen und passende Kurzformen wie `'ve found` werden toleriert.
- Ausgewählte gültige Alternativen werden akzeptiert, u. a. amerikanisches `has gotten` und `betted`. Der Trainer orientiert sich ansonsten an den Zielzeitformen des Arbeitsblatts und ist kein universeller Grammatikprüfer.
- Filter nach Zeitform, Aufgabenübersicht, Mischen und Fehlerwiederholung.
- Lernstand nur im lokalen Browser (`localStorage`), ohne Übertragung an einen Server. Geteilte Geräte teilen denselben Browser-Lernstand; „Lernstand zurücksetzen“ löscht ihn.
- Erstversuchsquote zählt beantwortete Aufgaben; Fortschritt zählt richtig gelöste Aufgaben. Ein nachträglich korrigierter Fehler zählt als gelöst, nicht als richtiger Erstversuch.
- Animationen abschaltbar; Systemeinstellung für reduzierte Bewegung wird respektiert. Tastaturbedienung, Screenreader-Rückmeldungen und mobile Darstellung.

## Dateien

- `index.html`: Oberfläche
- `style.css`: Darstellung und Animationen
- `data.js`: 58 Aufgaben und Musterlösungen
- `app.js`: Prüfung, Erklärungen, Statistik und Speicherung

Zum Bearbeiten genügen ein Texteditor und ein Browser. Kein Build-Schritt nötig.

## Great Expectations – Interactive Memory

English-language reading and memory activity at `great-expectations.html`, linked from the verb trainer. Includes the exact supplied three-paragraph summary and all **15 supplied pairs** (the brief calls them 20, but lists 15). No extra pairs have been invented.

Start the game after reading, match 30 shuffled cards, and reopen the summary at any time without losing the current game. Mismatches stay open until “Try another pair” is selected. Matched cards remain visible. A completion screen reinforces the main message. No timer or external dependencies; keyboard and mobile support, modal summary, restart confirmation, and optional hearts/skulls respecting reduced motion. The original Basic/Advanced verb trainer remains available.

- `great-expectations.html`: reading page and game
- `memory.css`: responsive literary design
- `memory.js`: original pairs, shuffle and game logic

### Further Great Expectations levels

- Level 2: 8 multiple-choice questions about family, adoption, love, financial support, contrasts and cause-and-effect.
- Level 3: 8 interpretation tasks, each requiring both a conclusion and a matching piece of textual evidence. Covers moral growth, class, assumptions, character connections and the limits of what the summary establishes.
- Immediate explanations, corrections and retry; separate completion and first-attempt scores for each level. The summary can be opened from either level. Switching levels preserves submitted answers and the current memory game for the page session.
- All questions use the supplied summary, without requiring details from an unprovided edition.
- `expectations-quiz.js`: questions, evidence and quiz behaviour.

### Reset controls

Each Great Expectations level has its own reset button, clearing only that level. “Reset all levels” clears Memory, quiz answers, scores and current questions, then returns to Level 1. All reset actions show a confirmation dialog; cancellation and Escape keep progress unchanged. The separate verb trainer is unaffected.

## Victorian Literature chapter

`victorian/index.html` adds the full Victorian Novel & Great Expectations course to the existing website. It uses the supplied Word sheet and preserves all 40 original flashcards verbatim, with 8 free levels, 112 additional exercises, 5 memory games, bilingual exam phrases, a 135-word exam model, review, local browser progress, points, read-aloud when supported, and reset controls. Complex free writing uses transparent self-assessment without a simulated automatic grade. See `victorian/README.md` for material, scoring, data files and validation.
