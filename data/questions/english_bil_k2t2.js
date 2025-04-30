import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Our House Section
  {
    id: 'eng_bil_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Complete the sentence about a living room: "_____ a sofa in the living room."',
    options: [
      'There is',
      'There are',
      'Is there',
      'Are there'
    ],
    correctAnswer: 0,
    explanation: 'We use "There is" for singular nouns. Since "sofa" is singular, we say "There is a sofa"'
  },

  {
    id: 'eng_bil_k2t2_002',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Select all sentences that use correct grammar when describing a kitchen:',
    options: [
      'There are three chairs',
      'There is a refrigerator',
      'There are a stove',
      'There is an oven',
      'There are two windows'
    ],
    correctAnswer: [0, 1, 3, 4],
    explanation: '"There is" is used with singular nouns, "There are" with plural nouns'
  },

  // House on the Water
  {
    id: 'eng_bil_k2t2_003',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Match the sentences with their correct form:',
    leftOptions: [
      'one boat',
      'many fish',
      'a fishing net',
      'two windows'
    ],
    rightOptions: [
      'There is one boat',
      'There are many fish',
      'There is a fishing net',
      'There are two windows'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Singular nouns → There is\nPlural nouns → There are'
  },

  // Our Field Trip
  {
    id: 'eng_bil_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Complete the sentence about yesterday\'s field trip: "_____ a tour guide who showed us around the museum."',
    options: [
      'There was',
      'There were',
      'Was there',
      'Were there'
    ],
    correctAnswer: 0,
    explanation: '"There was" is the past tense of "There is" - used for singular nouns in the past'
  },

  {
    id: 'eng_bil_k2t2_005',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Select all correct sentences about the zoo visit:',
    options: [
      'There were many animals',
      'There was a big elephant',
      'There were a giraffe',
      'There was an ice cream stand',
      'There were three buses'
    ],
    correctAnswer: [0, 1, 3, 4],
    explanation: 'Past tense:\nSingular → There was\nPlural → There were'
  },

  // Additional Our House questions
  {
    id: 'eng_bil_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'What room do we sleep in?',
    options: [
      'Bedroom',
      'Kitchen',
      'Bathroom',
      'Living room'
    ],
    correctAnswer: 0,
    explanation: 'We sleep in a bedroom. Each room in a house has a specific purpose.'
  },

  {
    id: 'eng_bil_k2t2_007',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Select all the furniture usually found in a living room:',
    options: [
      'Sofa',
      'Television',
      'Stove',
      'Coffee table',
      'Bathtub'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'A living room typically contains a sofa, television, and coffee table. Stoves are found in kitchens, and bathtubs in bathrooms.'
  },

  {
    id: 'eng_bil_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Complete the sentence: "There _____ a refrigerator in the kitchen."',
    options: [
      'is',
      'are',
      'be',
      'has'
    ],
    correctAnswer: 0,
    explanation: 'We use "is" with singular nouns. Since "refrigerator" is singular, we say "There is a refrigerator."'
  },

  {
    id: 'eng_bil_k2t2_009',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Match each room with the activity usually done there:',
    leftOptions: [
      'Kitchen',
      'Bathroom',
      'Bedroom',
      'Living room'
    ],
    rightOptions: [
      'Cooking meals',
      'Taking a shower',
      'Sleeping at night',
      'Watching television'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each room in a house serves a specific purpose: kitchen for cooking, bathroom for washing, bedroom for sleeping, living room for relaxing.'
  },

  {
    id: 'eng_bil_k2t2_010',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Look at the picture. Complete the question: "_____ a window in the kitchen?"',
    imageUrl: '/images/kitchen_no_window.svg',
    options: [
      'Is there',
      'Are there',
      'There is',
      'There are'
    ],
    correctAnswer: 0,
    explanation: 'To form a question with "there is/are", we invert the order to "Is there/Are there". Since "window" is singular, we use "Is there".'
  },

  // Additional House on the Water questions
  {
    id: 'eng_bil_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'What is a house that floats on water called?',
    options: [
      'Floating house',
      'Water house',
      'Houseboat',
      'Swimming house'
    ],
    correctAnswer: 2,
    explanation: 'A house that floats on water is called a houseboat.'
  },

  {
    id: 'eng_bil_k2t2_012',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Select all things you might see near a house on water:',
    options: [
      'Fish',
      'Boats',
      'Cars',
      'Water',
      'Skyscrapers'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Near a house on water, you would typically see fish, boats, and water. Cars and skyscrapers are usually found in cities.'
  },

  {
    id: 'eng_bil_k2t2_013',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Complete the sentence: "There _____ many boats on the lake."',
    options: [
      'is',
      'are',
      'be',
      'has'
    ],
    correctAnswer: 1,
    explanation: 'We use "are" with plural nouns. Since "boats" is plural, we say "There are many boats."'
  },

  {
    id: 'eng_bil_k2t2_014',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Match each sentence with the correct form:',
    leftOptions: [
      'Three fishing nets',
      'A water tank',
      'Five small windows',
      'One big door'
    ],
    rightOptions: [
      'There are three fishing nets',
      'There is a water tank',
      'There are five small windows',
      'There is one big door'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'We use "There is" with singular nouns and "There are" with plural nouns.'
  },

  {
    id: 'eng_bil_k2t2_015',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Complete the sentence based on this description: "From our houseboat window, we can see fish swimming below. _________"',
    options: [
      'There is one fish',
      'There are two fish',
      'There are many fish',
      'There are no fish'
    ],
    correctAnswer: 2,
    explanation: 'When describing a group of multiple fish, we use the plural form with "There are many fish" to indicate a large number.'
  },

  // Additional Our Field Trip questions
  {
    id: 'eng_bil_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'What is a trip taken by students to a place away from school called?',
    options: [
      'Field trip',
      'Holiday',
      'Vacation',
      'Weekend'
    ],
    correctAnswer: 0,
    explanation: 'A trip taken by students to learn outside of school is called a field trip.'
  },

  {
    id: 'eng_bil_k2t2_017',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Select all places where students might go on a field trip:',
    options: [
      'Museum',
      'Zoo',
      'Home',
      'Science center',
      'Bed'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Common field trip destinations include museums, zoos, and science centers. Home and bed are not typical field trip destinations.'
  },

  {
    id: 'eng_bil_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Complete the sentence about yesterday: "There _____ a big playground at the park."',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 2,
    explanation: 'For past events, we use "was" with singular nouns. Since "playground" is singular, we say "There was a big playground."'
  },

  {
    id: 'eng_bil_k2t2_019',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Match each phrase with its correct past tense form:',
    leftOptions: [
      'Many students',
      'A bus',
      'Two teachers',
      'One lunch box'
    ],
    rightOptions: [
      'There were many students',
      'There was a bus',
      'There were two teachers',
      'There was one lunch box'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'In the past tense, we use "There was" with singular nouns and "There were" with plural nouns.'
  },

  {
    id: 'eng_bil_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Complete this statement about a field trip: "Yesterday, we went to the Natural History Museum. _______."',
    options: [
      'There was a dinosaur skeleton',
      'There were three elephants',
      'There was a swimming pool',
      'There were many cars'
    ],
    correctAnswer: 0,
    explanation: 'Natural History Museums typically display dinosaur skeletons, so "There was a dinosaur skeleton" is the most appropriate answer.'
  },

  // Additional Our House questions
  {
    id: 'eng_bil_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Which room do we use to cook food?',
    options: [
      'Bedroom',
      'Kitchen',
      'Bathroom',
      'Living room'
    ],
    correctAnswer: 1,
    explanation: 'We cook food in the kitchen. Each room in a house has a specific purpose.'
  },

  {
    id: 'eng_bil_k2t2_022',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Select all the things you can find in a bathroom:',
    options: [
      'Sink',
      'Toilet',
      'Oven',
      'Shower',
      'Couch'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'In a bathroom, you typically find a sink, toilet, and shower. An oven is found in the kitchen, and a couch is found in the living room.'
  },

  {
    id: 'eng_bil_k2t2_023',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Look at the picture of the kitchen. Complete the sentence: "_____ a window in this kitchen?"',
    imageUrl: '/images/kitchen_no_window.svg',
    options: [
      'There is',
      'There are',
      'Is there',
      'Are there'
    ],
    correctAnswer: 2,
    explanation: 'To form a question, we use "Is there" for singular nouns. Since "window" is singular, we say "Is there a window?"'
  },

  {
    id: 'eng_bil_k2t2_024',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Match each room with what we do there:',
    leftOptions: [
      'Bedroom',
      'Kitchen',
      'Bathroom',
      'Living room'
    ],
    rightOptions: [
      'Sleep',
      'Cook',
      'Wash',
      'Relax'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each room has a specific purpose: we sleep in the bedroom, cook in the kitchen, wash in the bathroom, and relax in the living room.'
  },

  {
    id: 'eng_bil_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Complete the sentence: "_____ four chairs around the dining table."',
    options: [
      'There is',
      'There are',
      'Is there',
      'Are there'
    ],
    correctAnswer: 1,
    explanation: 'We use "There are" with plural nouns. Since "chairs" is plural, we say "There are four chairs."'
  },

  // Additional House on the Water questions
  {
    id: 'eng_bil_k2t2_026',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'What do we call a house built on water?',
    options: [
      'Houseboat',
      'Treehouse',
      'Apartment',
      'Mansion'
    ],
    correctAnswer: 0,
    explanation: 'A house built on water is called a houseboat.'
  },

  {
    id: 'eng_bil_k2t2_027',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Select all things that float on water:',
    options: [
      'Boat',
      'Car',
      'Duck',
      'Rock',
      'Leaf'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Boats, ducks, and leaves can float on water. Cars and rocks sink in water.'
  },

  {
    id: 'eng_bil_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Complete the question: "_____ any people living in the houseboat last year?"',
    options: [
      'There was',
      'There were',
      'Was there',
      'Were there'
    ],
    correctAnswer: 3,
    explanation: 'To form a question in the past tense with plural nouns, we use "Were there". Since "people" is plural, we say "Were there any people?"'
  },

  {
    id: 'eng_bil_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Match each statement with True or False about houseboats:',
    leftOptions: [
      'Houseboats float on water',
      'Houseboats have wheels',
      'People can live in houseboats',
      'Houseboats can fly'
    ],
    rightOptions: [
      'True',
      'False',
      'True',
      'False'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Houseboats float on water and people can live in them. They do not have wheels and cannot fly.'
  },

  {
    id: 'eng_bil_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'What lives in the water under a houseboat?',
    options: [
      'Fish',
      'Birds',
      'Cows',
      'Monkeys'
    ],
    correctAnswer: 0,
    explanation: 'Fish live in the water under a houseboat.'
  },

  // Additional Field Trip questions
  {
    id: 'eng_bil_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Who usually leads students on a field trip?',
    options: [
      'Teacher',
      'Doctor',
      'Police officer',
      'Firefighter'
    ],
    correctAnswer: 0,
    explanation: 'Teachers usually lead students on field trips.'
  },

  {
    id: 'eng_bil_k2t2_032',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Select all things students might bring on a field trip:',
    options: [
      'Lunch box',
      'Notebook',
      'Bed',
      'Water bottle',
      'Television'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Students typically bring lunch boxes, notebooks, and water bottles on field trips. They don\'t bring beds or televisions.'
  },

  {
    id: 'eng_bil_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Complete the sentence: "_____ two buses for our trip to the museum yesterday."',
    options: [
      'There was',
      'There were',
      'Was there',
      'Were there'
    ],
    correctAnswer: 1,
    explanation: 'We use "There were" with plural nouns in the past tense. Since "buses" is plural, we say "There were two buses."'
  },

  {
    id: 'eng_bil_k2t2_034',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Match each question with its correct response:',
    leftOptions: [
      'Were there any dinosaurs at the museum?',
      'Was there a gift shop?',
      'Were there many students on the trip?',
      'Was there a picnic after the museum?'
    ],
    rightOptions: [
      'Yes, there were dinosaur skeletons',
      'Yes, there was a small gift shop',
      'Yes, there were thirty students',
      'Yes, there was a picnic in the park'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Questions with "Were there" (plural) get responses with "there were". Questions with "Was there" (singular) get responses with "there was".'
  },

  {
    id: 'eng_bil_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'What is another name for a "field trip"?',
    options: [
      'Excursion',
      'Bedroom',
      'Kitchen',
      'Restaurant'
    ],
    correctAnswer: 0,
    explanation: 'Another word for "field trip" is "excursion", which means a short journey made for pleasure or education.'
  },

  // Additional Body Parts questions
  {
    id: 'eng_bil_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'What part of the body do we use to see things around us?',
    options: [
      'Eyes',
      'Ears',
      'Nose',
      'Mouth'
    ],
    correctAnswer: 0,
    explanation: 'We use our eyes to see.'
  },

  {
    id: 'eng_bil_k2t2_037',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'Select all parts of the body we use to move:',
    options: [
      'Legs',
      'Arms',
      'Eyes',
      'Feet',
      'Ears'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'We use our legs, arms, and feet to move. We use our eyes to see and our ears to hear.'
  },

  {
    id: 'eng_bil_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE,
    question: 'Complete the question: "_____ a garden behind your house?"',
    options: [
      'There is',
      'There are',
      'Is there',
      'Are there'
    ],
    correctAnswer: 2,
    explanation: 'To form a question with a singular noun, we use "Is there". Since "garden" is singular, we say "Is there a garden?"'
  },

  {
    id: 'eng_bil_k2t2_039',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE,
    question: 'Match each plural noun with the correct question form:',
    leftOptions: [
      'boats',
      'trees',
      'birds',
      'cars'
    ],
    rightOptions: [
      'Are there any boats?',
      'Are there any trees?',
      'Are there any birds?',
      'Are there any cars?'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'For questions about plural nouns, we use "Are there".'
  },

  {
    id: 'eng_bil_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.ENGLISH.id,
    topic: SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP,
    question: 'At the zoo, we saw many animals. How do elephants drink water?',
    options: [
      'With their trunks',
      'With their ears',
      'With their tails',
      'With their feet'
    ],
    correctAnswer: 0,
    explanation: 'Elephants use their trunks to drink water by sucking it up and then spraying it into their mouths.'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.BILINGUAL.ENGLISH.topics.OUR_HOUSE]: 15,      // 30%
  [SUBJECTS.BILINGUAL.ENGLISH.topics.WATER_HOUSE]: 15,    // 30%
  [SUBJECTS.BILINGUAL.ENGLISH.topics.FIELD_TRIP]: 20      // 40%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 25,       // 50%
  [QUESTION_TYPES.CMC1]: 15,     // 30%
  [QUESTION_TYPES.CMC2]: 10      // 20%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 20,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 20,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 10       // 20%
};
