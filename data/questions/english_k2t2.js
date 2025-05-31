import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

// Updated topics for English K2T2
export const ENGLISH_TOPICS = {
  PARTS_OF_BODY: 'Parts of the body',
  HEALTHY_HABITS: 'Healthy habits',
  TOO_AND_ENOUGH: 'Too & enough',
  CELEBRATIONS: 'Celebrations',
  FAMILY_MEMBERS: 'Family members',
  IRREGULAR_VERBS: 'Irregular verbs',
  PAST_TENSE_VERBS: 'Past tense verbs',
  PAST_TENSE_QUESTIONS: 'Past tense questions',
  ADVERBS: 'Adverbs',
  PREPOSITIONS: 'Prepositions'
};

export const questions = [
  // Topic: Parts of the body
  {
    id: 'eng_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which sentence correctly describes what we use our legs for?',
    options: [
      'We use our legs to walk',
      'We use our legs to eat',
      'We use our legs to write',
      'We use our legs to sleep'
    ],
    correctAnswer: 0,
    explanation: 'We use our legs to walk, run, jump, and move around. This is their primary function.'
  },

  {
    id: 'eng_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which body part do we use to smell?',
    options: [
      'Nose',
      'Eyes',
      'Mouth',
      'Ears'
    ],
    correctAnswer: 0,
    explanation: 'We use our nose to smell different scents'
  },

  {
    id: 'eng_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Choose all parts of the human face:',
    options: [
      'Eyes',
      'Nose',
      'Elbow',
      'Mouth',
      'Knee'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'The parts of the human face include eyes, nose, and mouth. Elbow and knee are parts of limbs (arms and legs).'
  },

  {
    id: 'eng_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which part of the body do we use for walking?',
    options: [
      'Legs',
      'Arms',
      'Head',
      'Stomach'
    ],
    correctAnswer: 0,
    explanation: 'We use our legs to walk, run, jump, and stand'
  },

  {
    id: 'eng_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Match the body parts with their functions:',
    leftOptions: [
      'Eyes',
      'Ears',
      'Nose',
      'Hands'
    ],
    rightOptions: [
      'Seeing',
      'Hearing',
      'Smelling',
      'Holding things'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Eyes are used for seeing, ears for hearing, nose for smelling, and hands for holding things'
  },

  // Topic: Healthy habits
  {
    id: 'eng_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.HEALTHY_HABITS,
    question: 'Choose all healthy habits:',
    options: [
      'Brush teeth twice a day',
      'Stay up late every night',
      'Eat a lot of candy',
      'Play video games all day'
    ],
    correctAnswer: 0,
    explanation: 'Brushing teeth twice a day is a healthy habit for maintaining oral hygiene'
  },

  {
    id: 'eng_k2t2_007',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.HEALTHY_HABITS,
    question: 'Which of these are healthy morning routines?',
    options: [
      'Eating breakfast',
      'Brushing teeth',
      'Washing face',
      'Watching TV for hours',
      'Sleeping until noon'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Healthy morning routines include eating breakfast, brushing teeth, and washing face'
  },

  {
    id: 'eng_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.HEALTHY_HABITS,
    question: 'What time should children go to bed?',
    options: [
      'Around 8-9 PM',
      'After midnight',
      'Any time they want',
      'Only when they feel sleepy'
    ],
    correctAnswer: 0,
    explanation: 'Children should go to bed early, around 8-9 PM, to get enough sleep for their growth and development'
  },

  // Topic: Past tense verbs
  {
    id: 'eng_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'What is the past tense of "eat"?',
    options: [
      'Ate',
      'Eated',
      'Eating',
      'Eat'
    ],
    correctAnswer: 0,
    explanation: 'The past tense of "eat" is "ate". It is an irregular verb.'
  },

  {
    id: 'eng_k2t2_010',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Fill in the blank: "Yesterday, I _____ my teeth twice."',
    options: [
      'brushed',
      'brush',
      'brushes',
      'brushing'
    ],
    correctAnswer: 0,
    explanation: 'The past tense form of "brush" is "brushed". We use past tense to talk about actions that happened in the past (yesterday).'
  },

  {
    id: 'eng_k2t2_011',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.TOO_AND_ENOUGH,
    question: 'Select all sentences that use the past tense correctly:',
    options: [
      'She washed her hands before eating.',
      'He eat dinner at 7 PM last night.',
      'They played football yesterday.',
      'I brush my teeth this morning.',
      'We went to bed early last night.'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Correctly used past tense: "washed" (past of wash), "played" (past of play), and "went" (past of go)'
  },

  {
    id: 'eng_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.TOO_AND_ENOUGH,
    question: 'Which sentence uses "too" correctly?',
    options: [
      'The soup is too hot to eat now.',
      'I have too money in my pocket.',
      'She is too swimming in the pool.',
      'They are too at school today.'
    ],
    correctAnswer: 0,
    explanation: '"Too" is used to indicate an excessive amount or degree. "The soup is too hot" means the soup is excessively hot and cannot be eaten yet.'
  },

  {
    id: 'eng_k2t2_013',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.TOO_AND_ENOUGH,
    question: 'Which sentence uses "enough" correctly?',
    options: [
      'I did not sleep enough last night.',
      'We have enough many apples.',
      'They are enough happy.',
      'He runs enough fast.'
    ],
    correctAnswer: 0,
    explanation: '"Enough" means "as much as needed" and is correctly used in "I did not sleep enough" (I didn\'t sleep as much as I needed to).'
  },

  {
    id: 'eng_k2t2_014',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.TOO_AND_ENOUGH,
    question: 'Match these sentences with their correct meanings:',
    leftOptions: [
      'The water is too cold.',
      'The water is cold enough.',
      'I didn\'t drink enough water.',
      'I drank too much soda.'
    ],
    rightOptions: [
      'The water is excessively cold.',
      'The water is sufficiently cold.',
      'I needed to drink more water.',
      'I drank an excessive amount of soda.'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: '"Too" indicates excess/excessive, while "enough" indicates a sufficient amount or degree'
  },

  // Topic: Celebrations
  {
    id: 'eng_k2t2_015',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do people usually do at birthday parties?',
    options: [
      'Blow out candles on a cake',
      'Plant trees',
      'Clean the house',
      'Do homework'
    ],
    correctAnswer: 0,
    explanation: 'At birthday parties, people typically blow out candles on a birthday cake, which is a traditional birthday celebration activity'
  },

  {
    id: 'eng_k2t2_016',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Select all words related to celebrations:',
    options: [
      'Gift',
      'Party',
      'Homework',
      'Cake',
      'Medicine'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Words related to celebrations include "gift" (something given at celebrations), "party" (a social gathering to celebrate), and "cake" (often served at celebrations like birthdays)'
  },

  {
    id: 'eng_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do we call the colorful paper decorations that hang from the ceiling at parties?',
    options: [
      'Streamers',
      'Pencils',
      'Books',
      'Shoes'
    ],
    correctAnswer: 0,
    explanation: 'Streamers are long strips of colorful paper used as decorations at parties'
  },

  // Topic: Irregular verbs
  {
    id: 'eng_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.IRREGULAR_VERBS,
    question: 'Which of these is an irregular verb?',
    options: [
      'Give - gave',
      'Play - played',
      'Dance - danced',
      'Jump - jumped'
    ],
    correctAnswer: 0,
    explanation: '"Give - gave" is an irregular verb because it doesn\'t follow the regular pattern of adding -ed for past tense'
  },

  {
    id: 'eng_k2t2_019',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Select all irregular verbs:',
    options: [
      'Eat - ate',
      'Go - went',
      'Walk - walked',
      'Sing - sang',
      'Talk - talked'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Irregular verbs don\'t follow the regular -ed pattern for past tense. "Eat-ate," "Go-went," and "Sing-sang" are all irregular verbs.'
  },

  {
    id: 'eng_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Which question is formed correctly?',
    options: [
      'Did you go to the party yesterday?',
      'You did go to the party yesterday?',
      'Did you went to the party yesterday?',
      'You went to the party yesterday?'
    ],
    correctAnswer: 0,
    explanation: 'The correct form for past tense questions with "did" uses the base form of the verb (not past tense): "Did you go...?" is correct'
  },

  {
    id: 'eng_k2t2_021',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Match these verbs with their correct past tense:',
    leftOptions: [
      'Give',
      'Have',
      'Make',
      'See'
    ],
    rightOptions: [
      'Gave',
      'Had',
      'Made',
      'Saw'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Irregular verbs have special past tense forms: give → gave, have → had, make → made, see → saw'
  },

  {
    id: 'eng_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Which is the correct way to form a question about past activities?',
    options: [
      'Did they celebrate her birthday last week?',
      'Do they celebrated her birthday last week?',
      'They did celebrate her birthday last week?',
      'Did they celebrated her birthday last week?'
    ],
    correctAnswer: 0,
    explanation: 'To form questions in the past tense with "did," use the structure: Did + subject + base form of verb (not past tense)'
  },

  // Additional Healthy habits questions
  {
    id: 'eng_k2t2_023',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which part of the body do we use to hear sounds?',
    options: [
      'Ears',
      'Eyes',
      'Mouth',
      'Hands'
    ],
    correctAnswer: 0,
    explanation: 'We use our ears to hear sounds.'
  },

  {
    id: 'eng_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.HEALTHY_HABITS,
    question: 'Which of these is a healthy habit?',
    options: [
      'Washing hands before eating',
      'Eating only candy',
      'Sleeping only 4 hours',
      'Never exercising'
    ],
    correctAnswer: 0,
    explanation: 'Washing hands before eating is a healthy habit that prevents germs and illness.'
  },

  {
    id: 'eng_k2t2_025',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Select all good habits for taking care of your teeth:',
    options: [
      'Brushing twice a day',
      'Using dental floss',
      'Eating lots of candy',
      'Visiting the dentist regularly',
      'Never brushing on weekends'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Good dental habits include brushing twice daily, using dental floss, and regular dental check-ups.'
  },

  {
    id: 'eng_k2t2_026',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which sentence uses "too" correctly?',
    options: [
      'The soup is too hot to eat right now.',
      'The soup is enough hot to eat right now.',
      'The soup is hot too to eat right now.',
      'The soup is hot enough too eat right now.'
    ],
    correctAnswer: 0,
    explanation: '"Too" is used before adjectives to mean "excessively" or "more than needed". "The soup is too hot" means it is excessively hot.'
  },

  {
    id: 'eng_k2t2_027',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Match each body part with the correct action:',
    leftOptions: [
      'Teeth',
      'Hair',
      'Hands',
      'Face'
    ],
    rightOptions: [
      'Brush',
      'Comb',
      'Wash',
      'Clean'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'We brush our teeth, comb our hair, wash our hands, and clean our face as part of good hygiene.'
  },

  {
    id: 'eng_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'How many times a day should you brush your teeth?',
    options: [
      'Twice',
      'Never',
      'Once a week',
      'Only after eating candy'
    ],
    correctAnswer: 0,
    explanation: 'It is recommended to brush teeth twice a day, in the morning and before bedtime.'
  },

  {
    id: 'eng_k2t2_029',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Choose the correct past tense for this sentence: "Yesterday, I ___ my teeth three times."',
    options: [
      'brushed',
      'brush',
      'brushes',
      'brushing'
    ],
    correctAnswer: 0,
    explanation: 'The past tense of "brush" is "brushed". For regular verbs, we add -ed to form the past tense.'
  },

  {
    id: 'eng_k2t2_030',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Select all sentences with correct grammar:',
    options: [
      'I am not strong enough to lift that box.',
      'I am too tired for sleeping.',
      'The water is enough cold.',
      'The music is too loud for me to hear you.',
      'She runs too fast enough.'
    ],
    correctAnswer: [0, 3],
    explanation: '"I am not strong enough" and "The music is too loud" use "enough" and "too" correctly. The other sentences have incorrect grammar.'
  },

  {
    id: 'eng_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'What do we use to clean between our teeth?',
    options: [
      'Dental floss',
      'Spoon',
      'Fork',
      'Pencil'
    ],
    correctAnswer: 0,
    explanation: 'Dental floss is a thin thread used to clean between teeth where a toothbrush cannot reach.'
  },

  {
    id: 'eng_k2t2_032',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Which sentence is in the past tense?',
    options: [
      'I slept for eight hours last night.',
      'I sleep for eight hours every night.',
      'I will sleep for eight hours tonight.',
      'I am sleeping for eight hours.'
    ],
    correctAnswer: 0,
    explanation: '"I slept for eight hours last night" is in the past tense, indicated by the past tense verb "slept" and the time marker "last night".'
  },

  {
    id: 'eng_k2t2_033',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Select all activities that are part of a healthy lifestyle:',
    options: [
      'Regular exercise',
      'Eating fruits and vegetables',
      'Playing video games all day',
      'Getting enough sleep',
      'Eating only junk food'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'A healthy lifestyle includes regular exercise, a balanced diet with fruits and vegetables, and sufficient sleep.'
  },

  {
    id: 'eng_k2t2_034',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'What should you do before eating a meal?',
    options: [
      'Wash your hands',
      'Run around the house',
      'Take a nap',
      'Watch TV'
    ],
    correctAnswer: 0,
    explanation: 'You should wash your hands before eating to remove germs and prevent illness.'
  },

  {
    id: 'eng_k2t2_035',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.PARTS_OF_BODY,
    question: 'Match each daily routine with the best time to do it:',
    leftOptions: [
      'Brush teeth',
      'Eat breakfast',
      'Do homework',
      'Go to bed'
    ],
    rightOptions: [
      'Morning and evening',
      'Morning',
      'Afternoon',
      'Night'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Good daily routines include brushing teeth in the morning and evening, eating breakfast in the morning, doing homework in the afternoon, and going to bed at night.'
  },

  {
    id: 'eng_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do people often have at a birthday party?',
    options: [
      'Cake',
      'School books',
      'Medicine',
      'Vegetables'
    ],
    correctAnswer: 0,
    explanation: 'People traditionally have cake at birthday parties, often with candles to blow out.'
  },

  {
    id: 'eng_k2t2_037',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do we call the colorful paper objects that burst and contain small toys or candies?',
    options: [
      'Crackers',
      'Balloons',
      'Presents',
      'Cards'
    ],
    correctAnswer: 0,
    explanation: 'Party crackers are colorful paper tubes that make a small explosion when pulled, revealing toys, jokes, or candies inside.'
  },

  {
    id: 'eng_k2t2_038',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Select all things you might find at a birthday party:',
    options: [
      'Presents',
      'Candles',
      'Homework',
      'Balloons',
      'Medicine'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Birthday parties typically include presents for the birthday person, candles on the cake, and balloon decorations.'
  },

  {
    id: 'eng_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do people sing at a birthday party?',
    options: [
      'Happy Birthday song',
      'School anthem',
      'National anthem',
      'Christmas carols'
    ],
    correctAnswer: 0,
    explanation: 'People traditionally sing the "Happy Birthday" song to celebrate someone\'s birthday.'
  },

  {
    id: 'eng_k2t2_040',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Match each celebration with what people typically celebrate:',
    leftOptions: [
      'Birthday',
      'New Year',
      'Graduation',
      'Wedding'
    ],
    rightOptions: [
      'Being born',
      'Start of a calendar year',
      'Finishing school',
      'Getting married'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Different celebrations mark different life events: birthdays celebrate being born, New Year celebrates the start of a new calendar year, graduation celebrates finishing school, and weddings celebrate marriage.'
  },

  {
    id: 'eng_k2t2_041',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Which is the correct past tense form: "Last year, we ___ New Year together."',
    options: [
      'celebrated',
      'celebrate',
      'celebrates',
      'celebrating'
    ],
    correctAnswer: 0,
    explanation: 'The past tense of "celebrate" is "celebrated". Regular verbs form the past tense by adding -ed.'
  },

  {
    id: 'eng_k2t2_042',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do people wrap birthday presents in?',
    options: [
      'Colorful paper',
      'Newspaper',
      'Tissues',
      'Plastic bags'
    ],
    correctAnswer: 0,
    explanation: 'People traditionally wrap birthday presents in colorful gift paper to make them look special and to hide what\'s inside.'
  },

  {
    id: 'eng_k2t2_043',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Select all irregular past tense verbs:',
    options: [
      'Gave',
      'Blew',
      'Watched',
      'Danced',
      'Brought'
    ],
    correctAnswer: [0, 1, 4],
    explanation: '"Gave" (from give), "blew" (from blow), and "brought" (from bring) are irregular past tense verbs. "Watched" and "danced" are regular (-ed) past tense forms.'
  },

  {
    id: 'eng_k2t2_044',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Complete the question: "___ did you get for your birthday?"',
    options: [
      'What',
      'Where',
      'When',
      'Who'
    ],
    correctAnswer: 0,
    explanation: '"What did you get..." is asking about the gifts or presents received. "What" is used to ask about things.'
  },

  {
    id: 'eng_k2t2_045',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What is put on top of a birthday cake?',
    options: [
      'Candles',
      'Plates',
      'Forks',
      'Books'
    ],
    correctAnswer: 0,
    explanation: 'Candles are traditionally placed on top of birthday cakes. The number of candles often represents the person\'s age.'
  },

  {
    id: 'eng_k2t2_046',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Match each celebration with the correct greeting:',
    leftOptions: [
      'Birthday',
      'New Year',
      'Graduation',
      'Wedding'
    ],
    rightOptions: [
      'Happy Birthday',
      'Happy New Year',
      'Congratulations',
      'Congratulations'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Different celebrations have traditional greetings: "Happy Birthday" for birthdays, "Happy New Year" for New Year, and "Congratulations" for achievements like graduation or weddings.'
  },

  {
    id: 'eng_k2t2_047',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Which sentence is grammatically correct?',
    options: [
      'Where did they go for the celebration?',
      'Where did they went for the celebration?',
      'Where they did go for the celebration?',
      'Where they went for the celebration?'
    ],
    correctAnswer: 0,
    explanation: 'The correct question form with "did" uses the base form of the verb: "Where did they go..." is correct.'
  },

  {
    id: 'eng_k2t2_048',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What do people say before eating at a celebration?',
    options: [
      'Enjoy your meal',
      'Good night',
      'See you tomorrow',
      'Thank you for coming'
    ],
    correctAnswer: 0,
    explanation: 'People often say "Enjoy your meal" or similar phrases before starting to eat at celebrations.'
  },

  {
    id: 'eng_k2t2_049',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'Select all sentences that use the past tense correctly:',
    options: [
      'She blew out the candles.',
      'He bringed a present.',
      'They eated the cake.',
      'We sang "Happy Birthday".',
      'I gived her a card.'
    ],
    correctAnswer: [0, 3],
    explanation: '"She blew out the candles" and "We sang Happy Birthday" use the correct irregular past tense forms. The others should be "brought" (not "bringed"), "ate" (not "eated"), and "gave" (not "gived").'
  },

  {
    id: 'eng_k2t2_050',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.ENGLISH.id,
    topic: ENGLISH_TOPICS.CELEBRATIONS,
    question: 'What does someone do after receiving a gift?',
    options: [
      'Say "thank you"',
      'Say "goodbye"',
      'Say "I don\'t like it"',
      'Say nothing'
    ],
    correctAnswer: 0,
    explanation: 'It is polite to say "thank you" after receiving a gift, whether you like it or not, to show appreciation for the gesture.'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [ENGLISH_TOPICS.PARTS_OF_BODY]: 5,           // 10%
  [ENGLISH_TOPICS.HEALTHY_HABITS]: 5,          // 10%
  [ENGLISH_TOPICS.TOO_AND_ENOUGH]: 5,          // 10%
  [ENGLISH_TOPICS.CELEBRATIONS]: 5,            // 10%
  [ENGLISH_TOPICS.FAMILY_MEMBERS]: 5,          // 10%
  [ENGLISH_TOPICS.IRREGULAR_VERBS]: 5,         // 10%
  [ENGLISH_TOPICS.PAST_TENSE_VERBS]: 5,        // 10%
  [ENGLISH_TOPICS.PAST_TENSE_QUESTIONS]: 5,    // 10%
  [ENGLISH_TOPICS.ADVERBS]: 5,                 // 10%
  [ENGLISH_TOPICS.PREPOSITIONS]: 5             // 10%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 35,     // 70%
  [QUESTION_TYPES.CMC1]: 10,   // 20%
  [QUESTION_TYPES.CMC2]: 5     // 10%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 20,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 20,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 10       // 20%
};
