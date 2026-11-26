# The Victorian Novel & Great Expectations

A complete buildless chapter in the existing English Lab GitHub Pages website. Open `index.html` directly, or serve the repository and visit `/victorian/`. The runtime loads `data/content.js`, so local use also works without fetching JSON or running a build.

## Teaching material

The chapter follows the supplied `Victorian_Novel_Great_Expectations.docx`. All **40 original fronts and backs** from `victorian_flashcards.json` are retained verbatim and were cross-checked against the supplied TSV. No textbook photographs or full abridged Oxford edition were supplied. Added German explanations clarify generalisations without silently changing the cards.

There are eight freely accessible levels, 112 additional exercises (14 per level), 5 memory games and 15 bilingual exam phrases. The exam model contains 135 words.

1. The Victorian Age
2. The Publishing World
3. Features of Victorian Novels
4. Types of Victorian Fiction
5. Characters & Social Values
6. Literary Analysis
7. Women Writers
8. Exam Challenge

Every level offers Discover, Learn, Practise, Challenge and Review. Level 8 reuses all 40 original cards as its exam deck; these are shared marks, not another set of 40 cards. The primary cards are organised by topic across Levels 1–7.

## Exercise formats

- 32 multiple-choice questions with four options in shuffled positions
- 24 true/false tasks; choosing false also asks the learner to rewrite the statement. Only the true/false choice is automatically checked; the correction is compared with the explanation.
- 16 gap tasks, with appropriate spelling and wording alternatives
- 8 matching tasks, each with three explicit connections
- 8 sentence builders with shuffled pieces
- 24 open questions with model answers, key ideas and transparent self-check criteria

No AI API or pretend grading of free writing. Learners must draft a short answer before revealing the model. Marking “I can explain this” requires ticking the criteria. Open answers receive no automatic grade or points.

## Progress and scoring

A checked objective exercise earns 10 points if the first checked answer is correct, or 5 after a correction. A completed objective exercise cannot be scored repeatedly. Empty or incomplete answers do not count as errors. Incorrect checked attempts increment the error statistic and add the task to the review list. A correct retry removes it from the pending list while retaining the error history.

Exercise progress counts correct objective exercises and open answers explicitly marked ready by self-assessment. Flashcard knowledge marks are separate. Mixed practice draws 12 distinct tasks with at least one from every level. It reuses the same progress records and cannot be used to farm points.

Card marks, answers, written drafts, checklist choices, points, errors and selected level/stage are stored only in this browser under `english-lab-victorian-v1`. No learner writing is sent to a server. Memory boards and temporary presentation choices last for the current visit. If local storage is unavailable, the activities still work for the visit and an explicit message is shown.

Reset controls show confirmation. Level reset clears that level’s task records, writing and marks on cards assigned to it. Resetting Level 8 keeps marks on the shared deck from Levels 1–7. Global reset clears the Victorian chapter, including memory boards, while leaving the separate verb trainer and Great Expectations memory/quiz untouched.

## Accessibility and platform

Native buttons, radio controls, selects, labelled fields and dialogs support keyboard and touch. Feedback is announced through live regions. Optional hearts/skulls respect reduced motion. English read-aloud uses the browser’s Web Speech API when available; no microphone is used. It depends on installed/browser voices and may not work on every device.

The CSS responds to phone, tablet and desktop widths. All application paths are relative. No backend, paid API, key, build step, remote fonts or third-party JavaScript is needed.

## Data files

- `data/lessons.json`: eight introductions with bilingual explanations and novel links
- `data/flashcards.json`: enriched original deck, retaining `front`, `back`, `category` and `sourceId`
- `data/flashcards-original.json`: original 40-card JSON
- `data/questions.json`: 112 exercises and model answers
- `data/memory.json`: five memory decks
- `data/toolbox.json`: phrases, 135-word model and references
- `data/content.js`: runtime mirror of the JSON datasets

When editing JSON, keep `data/content.js` in sync. The app deliberately uses a static script rather than fetch so the downloadable version can run from disk.

## Content accuracy

The lessons explicitly distinguish publication date from story setting, retrospective first-person narration from omniscience, recurring conventions from universal rules, and literary nonsense as a wider category that includes Lear’s verse. Women are discussed as authors and readers; male and gender-ambiguous pen names are distinguished. Interpretations connect the supplied material to the novel without inventing quotations or page references for an unseen abridged edition. Further-reading links are in Materials & sources.

## Validation

The original 40-card JSON and TSV were compared field by field. Automated checks cover all 88 objective solutions, incomplete-answer guards, 10/5-point scoring, duplicate-score prevention, error/review behaviour, spelling alternatives, random selections spanning all eight levels, sentence scrambling, all five memory decks and isolated/global reset. Browser checks cover all eight chapter/card views, each exercise format, model/checklist self-assessment, persistence after reload, review, mixed practice, toolbox and reset.

Run the self-contained logic checks from the repository root with:

```sh
node victorian/tests/test-course.cjs
```

The full repository ZIP can be published directly to GitHub Pages. No API keys, private documents, Git metadata or saved learner writing are included.

## Question language mode

Use **Questions / Fragen: English / Deutsch** above the learning steps. The German mode includes all 112 task questions/statements, all 40 flashcard fronts and core working instructions. Multiple-choice options, matching vocabulary, sentence pieces, gap sentences, models and expected answers remain in English for exam practice. The original card fronts/backs remain unchanged in the data and English mode.

The choice is saved in the same local progress record. Switching first captures the current draft and preserves scores, answers, review marks and current activity. English read-aloud uses the original English text. German prompts are supplied in `data/translations-de.json` and its runtime mirror `data/translations-de.js`.
