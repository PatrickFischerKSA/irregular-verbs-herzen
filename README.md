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
