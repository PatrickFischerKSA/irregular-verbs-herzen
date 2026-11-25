const QUESTIONS = [
  {
    "id": 1,
    "sentence": "Our teacher usually ___ the discussion.",
    "verb": "lead",
    "tense": "Present simple",
    "answer": "leads",
    "german": "leiten / führen"
  },
  {
    "id": 2,
    "sentence": "Look! Dad ___ tickets at the counter right now.",
    "verb": "buy",
    "tense": "Present continuous",
    "answer": "is buying",
    "german": "kaufen"
  },
  {
    "id": 3,
    "sentence": "Watch out! The puppy ___ your shoe.",
    "verb": "bite",
    "tense": "Present continuous",
    "answer": "is biting",
    "german": "beissen"
  },
  {
    "id": 4,
    "sentence": "She ___ the door open for five minutes now, and her arm is getting tired.",
    "verb": "hold",
    "tense": "Present perfect continuous",
    "answer": "has been holding",
    "german": "halten"
  },
  {
    "id": 5,
    "sentence": "My parents usually ___ me stay up late on Saturdays.",
    "verb": "let",
    "tense": "Present simple",
    "answer": "let",
    "german": "lassen / erlauben"
  },
  {
    "id": 6,
    "sentence": "Look at the pond! The water ___ right now.",
    "verb": "freeze",
    "tense": "Present continuous",
    "answer": "is freezing",
    "german": "gefrieren"
  },
  {
    "id": 7,
    "sentence": "The train ___ the station. We are too late!",
    "verb": "leave",
    "tense": "Present perfect simple",
    "answer": "has left",
    "german": "verlassen"
  },
  {
    "id": 8,
    "sentence": "Since Monday, the weather ___ much colder.",
    "verb": "become",
    "tense": "Present perfect simple",
    "answer": "has become",
    "german": "werden"
  },
  {
    "id": 9,
    "sentence": "Yesterday, our team ___ the champions.",
    "verb": "beat",
    "tense": "Simple past",
    "answer": "beat",
    "german": "besiegen / schlagen"
  },
  {
    "id": 10,
    "sentence": "I ___ tired every morning when I get up too early.",
    "verb": "feel",
    "tense": "Present simple",
    "answer": "feel",
    "german": "sich fühlen"
  },
  {
    "id": 11,
    "sentence": "The children ___ behind the sofa right now.",
    "verb": "hide",
    "tense": "Present continuous",
    "answer": "are hiding",
    "german": "sich verstecken"
  },
  {
    "id": 12,
    "sentence": "Ella ___ swimming every Tuesday.",
    "verb": "go",
    "tense": "Present simple",
    "answer": "goes",
    "german": "gehen"
  },
  {
    "id": 13,
    "sentence": "The villagers ___ the area when the river flooded in 2010.",
    "verb": "flee",
    "tense": "Simple past",
    "answer": "fled",
    "german": "fliehen"
  },
  {
    "id": 14,
    "sentence": "We usually ___ lunch at noon.",
    "verb": "have",
    "tense": "Present simple",
    "answer": "have",
    "german": "haben / zu sich nehmen"
  },
  {
    "id": 15,
    "sentence": "She ___ the 7.15 train every weekday.",
    "verb": "catch",
    "tense": "Present simple",
    "answer": "catches",
    "german": "erwischen / nehmen"
  },
  {
    "id": 16,
    "sentence": "Our neighbour ___ us some apples last Sunday.",
    "verb": "bring",
    "tense": "Simple past",
    "answer": "brought",
    "german": "bringen"
  },
  {
    "id": 17,
    "sentence": "Yesterday, we ___ the blankets on the grass.",
    "verb": "lay",
    "tense": "Simple past",
    "answer": "laid",
    "german": "legen"
  },
  {
    "id": 18,
    "sentence": "I ___ my ankle, so I cannot walk properly now.",
    "verb": "hurt",
    "tense": "Present perfect simple",
    "answer": "have hurt",
    "german": "verletzen"
  },
  {
    "id": 19,
    "sentence": "Last week, my friend ___ me her bicycle.",
    "verb": "lend",
    "tense": "Simple past",
    "answer": "lent",
    "german": "leihen / verleihen"
  },
  {
    "id": 20,
    "sentence": "The ball ___ the window during yesterday's match.",
    "verb": "hit",
    "tense": "Simple past",
    "answer": "hit",
    "german": "treffen"
  },
  {
    "id": 21,
    "sentence": "The wind ___ hard for three hours now and shows no sign of stopping.",
    "verb": "blow",
    "tense": "Present perfect continuous",
    "answer": "has been blowing",
    "german": "wehen / blasen"
  },
  {
    "id": 22,
    "sentence": "Look! A helicopter ___ over our school.",
    "verb": "fly",
    "tense": "Present continuous",
    "answer": "is flying",
    "german": "fliegen"
  },
  {
    "id": 23,
    "sentence": "He ___ two glasses of water so far today.",
    "verb": "drink",
    "tense": "Present perfect simple",
    "answer": "has drunk",
    "german": "trinken"
  },
  {
    "id": 24,
    "sentence": "This station ___ the news every hour.",
    "verb": "broadcast",
    "tense": "Present simple",
    "answer": "broadcasts",
    "german": "senden / ausstrahlen"
  },
  {
    "id": 25,
    "sentence": "I ___ vegetables for the last twenty minutes and still have more to prepare.",
    "verb": "cut",
    "tense": "Present perfect continuous",
    "answer": "have been cutting",
    "german": "schneiden"
  },
  {
    "id": 26,
    "sentence": "My grandfather ___ me this watch in 2020.",
    "verb": "give",
    "tense": "Simple past",
    "answer": "gave",
    "german": "geben"
  },
  {
    "id": 27,
    "sentence": "Oh no! I ___ my glasses. Now I cannot see properly.",
    "verb": "break",
    "tense": "Present perfect simple",
    "answer": "have broken",
    "german": "zerbrechen"
  },
  {
    "id": 28,
    "sentence": "The dog ___ on the sofa for two hours now and is still there.",
    "verb": "lie",
    "tense": "Present perfect continuous",
    "answer": "has been lying",
    "german": "liegen"
  },
  {
    "id": 29,
    "sentence": "Our manager usually ___ with customer complaints.",
    "verb": "deal",
    "tense": "Present simple",
    "answer": "deals",
    "german": "umgehen mit / bearbeiten"
  },
  {
    "id": 30,
    "sentence": "I ___ her birthday last year.",
    "verb": "forget",
    "tense": "Simple past",
    "answer": "forgot",
    "german": "vergessen"
  },
  {
    "id": 31,
    "sentence": "He ___ three messages so far today.",
    "verb": "get",
    "tense": "Present perfect simple",
    "answer": "has got",
    "german": "bekommen / erhalten"
  },
  {
    "id": 32,
    "sentence": "Our guide ___ usually very patient.",
    "verb": "be",
    "tense": "Present simple",
    "answer": "is",
    "german": "sein"
  },
  {
    "id": 33,
    "sentence": "Last night, I ___ all my homework before dinner.",
    "verb": "do",
    "tense": "Simple past",
    "answer": "did",
    "german": "machen / erledigen"
  },
  {
    "id": 34,
    "sentence": "At the moment, the farmer ___ the chickens.",
    "verb": "feed",
    "tense": "Present continuous",
    "answer": "is feeding",
    "german": "füttern"
  },
  {
    "id": 35,
    "sentence": "Listen! The concert ___ right now.",
    "verb": "begin",
    "tense": "Present continuous",
    "answer": "is beginning",
    "german": "beginnen"
  },
  {
    "id": 36,
    "sentence": "We ___ all the sandwiches. There are none left.",
    "verb": "eat",
    "tense": "Present perfect simple",
    "answer": "have eaten",
    "german": "essen"
  },
  {
    "id": 37,
    "sentence": "A tree ___ across the road during last night's storm.",
    "verb": "fall",
    "tense": "Simple past",
    "answer": "fell",
    "german": "fallen"
  },
  {
    "id": 38,
    "sentence": "Last Saturday, Tom ___ five pounds on the race.",
    "verb": "bet",
    "tense": "Simple past",
    "answer": "bet",
    "german": "wetten / setzen"
  },
  {
    "id": 39,
    "sentence": "She ___ him, so they are friends again now.",
    "verb": "forgive",
    "tense": "Present perfect simple",
    "answer": "has forgiven",
    "german": "vergeben / verzeihen"
  },
  {
    "id": 40,
    "sentence": "Look! The gardener ___ beside the flower bed.",
    "verb": "kneel",
    "tense": "Present continuous",
    "answer": "is kneeling",
    "german": "knien"
  },
  {
    "id": 41,
    "sentence": "I ___ my missing keys! Here they are.",
    "verb": "find",
    "tense": "Present perfect simple",
    "answer": "have found",
    "german": "finden"
  },
  {
    "id": 42,
    "sentence": "Look! Mum ___ a picture on the wall.",
    "verb": "hang",
    "tense": "Present continuous",
    "answer": "is hanging",
    "german": "aufhängen"
  },
  {
    "id": 43,
    "sentence": "We ___ our final destination. The decision is made.",
    "verb": "choose",
    "tense": "Present perfect simple",
    "answer": "have chosen",
    "german": "wählen / auswählen"
  },
  {
    "id": 44,
    "sentence": "The workers ___ the bridge for six months now, and it is still unfinished.",
    "verb": "build",
    "tense": "Present perfect continuous",
    "answer": "have been building",
    "german": "bauen"
  },
  {
    "id": 45,
    "sentence": "My aunt ___ to work every day.",
    "verb": "drive",
    "tense": "Present simple",
    "answer": "drives",
    "german": "fahren"
  },
  {
    "id": 46,
    "sentence": "Look! The little girl ___ a picture of her dog.",
    "verb": "draw",
    "tense": "Present continuous",
    "answer": "is drawing",
    "german": "zeichnen"
  },
  {
    "id": 47,
    "sentence": "He always ___ his promises.",
    "verb": "keep",
    "tense": "Present simple",
    "answer": "keeps",
    "german": "halten / einhalten"
  },
  {
    "id": 48,
    "sentence": "They ___ a hole since breakfast and have not finished yet.",
    "verb": "dig",
    "tense": "Present perfect continuous",
    "answer": "have been digging",
    "german": "graben"
  },
  {
    "id": 49,
    "sentence": "The school rules ___ students to use phones during exams.",
    "verb": "forbid",
    "tense": "Present simple",
    "answer": "forbid",
    "german": "verbieten"
  },
  {
    "id": 50,
    "sentence": "Look out of the window! Our guests ___ up the path.",
    "verb": "come",
    "tense": "Present continuous",
    "answer": "are coming",
    "german": "kommen"
  },
  {
    "id": 51,
    "sentence": "I ___ her since primary school.",
    "verb": "know",
    "tense": "Present perfect simple",
    "answer": "have known",
    "german": "kennen"
  },
  {
    "id": 52,
    "sentence": "Every morning, Mia ___ her knees during her warm-up.",
    "verb": "bend",
    "tense": "Present simple",
    "answer": "bends",
    "german": "beugen"
  },
  {
    "id": 53,
    "sentence": "The balloon ___ during the party yesterday.",
    "verb": "burst",
    "tense": "Simple past",
    "answer": "burst",
    "german": "platzen"
  },
  {
    "id": 54,
    "sentence": "The cat ___ towards the bird yesterday afternoon.",
    "verb": "creep",
    "tense": "Simple past",
    "answer": "crept",
    "german": "schleichen"
  },
  {
    "id": 55,
    "sentence": "This book ___ ten pounds in this shop.",
    "verb": "cost",
    "tense": "Present simple",
    "answer": "costs",
    "german": "kosten"
  },
  {
    "id": 56,
    "sentence": "I ___ a strange noise at midnight yesterday.",
    "verb": "hear",
    "tense": "Simple past",
    "answer": "heard",
    "german": "hören"
  },
  {
    "id": 57,
    "sentence": "The firefighters ___ the fire for hours, and it is still burning.",
    "verb": "fight",
    "tense": "Present perfect continuous",
    "answer": "have been fighting",
    "german": "bekämpfen"
  },
  {
    "id": 58,
    "sentence": "These plants ___ steadily for weeks and are still getting taller.",
    "verb": "grow",
    "tense": "Present perfect continuous",
    "answer": "have been growing",
    "german": "wachsen"
  }
];
