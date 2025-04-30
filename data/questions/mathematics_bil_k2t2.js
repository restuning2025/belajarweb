import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Time and Calendar Section
  {
    id: 'math_bil_k2t2_001',
    type: QUESTION_TYPES.MC,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'What time does this analog clock show?',
    imageUrl: '/images/clock_0845.svg',
    options: [
      'Eight forty-five',
      'Eight fifteen',
      'Nine forty-five',
      'Quarter to nine'
    ],
    correctAnswer: [0, 3], // Both answers are acceptable
    explanation: 'The clock shows 8:45, which can be read as "eight forty-five" or "quarter to nine"'
  },

  {
    id: 'math_bil_k2t2_002',
    type: QUESTION_TYPES.CMC1,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Select all correct statements about the minute hand:',
    options: [
      'It makes a complete rotation in 60 minutes',
      'It is usually longer than the hour hand',
      'When it points to 6, it means 30 minutes',
      'It moves faster than the hour hand',
      'It points to 12 at the start of each hour'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'All statements about the minute hand are correct'
  },

  {
    id: 'math_bil_k2t2_003',
    type: QUESTION_TYPES.CMC2,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Match these times with their correct period:',
    leftOptions: [
      '7:00 breakfast time',
      '12:00 noon',
      '3:30 after school',
      '8:00 bedtime'
    ],
    rightOptions: [
      'AM',
      'PM',
      'PM',
      'PM'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 1]
    ],
    explanation: 'AM is from midnight (12:00) to noon, PM is from noon to midnight'
  },

  // Fractions Section
  {
    id: 'math_bil_k2t2_004',
    type: QUESTION_TYPES.MC,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Which picture shows 1/4 (one-fourth) of the circle shaded?',
    imageUrl: '/images/fraction_circles.svg',
    options: [
      'Circle A (one quarter shaded)',
      'Circle B (one half shaded)',
      'Circle C (three quarters shaded)',
      'Circle D (whole circle shaded)'
    ],
    correctAnswer: 0,
    explanation: 'One-fourth (1/4) means the circle is divided into 4 equal parts and one part is shaded'
  },

  {
    id: 'math_bil_k2t2_005',
    type: QUESTION_TYPES.CMC1,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Select all fractions that are equal to one-half (1/2):',
    options: [
      '2/4',
      '3/6',
      '1/4',
      '4/8',
      '5/8'
    ],
    correctAnswer: [0, 1, 3],
    explanation: '2/4, 3/6, and 4/8 are all equal to 1/2 when simplified'
  },

  // 2D and 3D Figures Section
  {
    id: 'math_bil_k2t2_006',
    type: QUESTION_TYPES.CMC2,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Match the 3D shape with its properties:',
    leftOptions: [
      'Cube',
      'Sphere',
      'Cylinder',
      'Cone'
    ],
    rightOptions: [
      '6 square faces',
      'No faces, edges, or vertices',
      '2 circular faces and 1 curved surface',
      '1 circular face and 1 curved surface'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each 3D shape has unique properties that define its structure'
  },

  // Additional Time and Calendar Section Questions
  {
    id: 'math_bil_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'What time does this analog clock show?',
    options: [
      'Three thirty',
      'Half past three',
      'Quarter to three',
      'Three fifteen'
    ],
    correctAnswer: 0,
    explanation: 'The clock shows 3:30, which is read as "three thirty"'
  },

  {
    id: 'math_bil_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Which month comes after July?',
    options: [
      'June',
      'August',
      'September',
      'October'
    ],
    correctAnswer: 1,
    explanation: 'The order of months is: June, July, August, September, October.'
  },

  {
    id: 'math_bil_k2t2_009',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Select all months that have 31 days:',
    options: [
      'January',
      'April',
      'June',
      'July',
      'September',
      'November'
    ],
    correctAnswer: [0, 3],
    explanation: 'January and July have 31 days. April, June, September, and November have 30 days.'
  },

  {
    id: 'math_bil_k2t2_010',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'How many days are in a week?',
    options: [
      '5 days',
      '6 days',
      '7 days',
      '8 days'
    ],
    correctAnswer: 2,
    explanation: 'There are 7 days in a week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday.'
  },

  {
    id: 'math_bil_k2t2_011',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Match each duration with the correct number of minutes:',
    leftOptions: [
      'Quarter of an hour',
      'Half an hour',
      'Three quarters of an hour',
      'Full hour'
    ],
    rightOptions: [
      '15 minutes',
      '30 minutes',
      '45 minutes',
      '60 minutes'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Time conversions: quarter hour = 15 min, half hour = 30 min, three quarters = 45 min, full hour = 60 min'
  },

  // Additional Fractions Questions
  {
    id: 'math_bil_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Which fraction represents three fourths?',
    options: [
      'One fourth (1/4)',
      'One half (1/2)',
      'Three fourths (3/4)',
      'One whole (1)'
    ],
    correctAnswer: 2,
    explanation: 'Three fourths (3/4) is the fraction that represents three equal parts out of four'
  },

  {
    id: 'math_bil_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Select all fractions that are equal to 1 (one whole):',
    options: [
      '2/2',
      '3/3',
      '4/4',
      '1/2',
      '2/3'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'When the numerator equals the denominator (2/2, 3/3, 4/4), the fraction equals 1 whole'
  },

  {
    id: 'math_bil_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'If a pizza is cut into 8 equal slices and you eat 4 slices, what fraction of the pizza did you eat?',
    options: [
      'One fourth (1/4)',
      'One half (1/2)',
      'Three fourths (3/4)',
      'Four eighths (4/8)'
    ],
    correctAnswer: [1, 3],
    explanation: '4 out of 8 pieces equals 4/8, which simplifies to 1/2 (one-half)'
  },

  {
    id: 'math_bil_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Match each fraction with its equivalent:',
    leftOptions: [
      'One half (1/2)',
      'One third (1/3)',
      'One fourth (1/4)',
      'Three fourths (3/4)'
    ],
    rightOptions: [
      'Two fourths (2/4)',
      'Two sixths (2/6)',
      'Three twelfths (3/12)',
      'Nine twelfths (9/12)'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Equivalent fractions: 1/2 = 2/4, 1/3 = 2/6, 1/4 = 3/12, 3/4 = 9/12'
  },

  // Additional 2D and 3D Figures Questions
  {
    id: 'math_bil_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Which shape has 4 equal sides?',
    options: [
      'Rectangle',
      'Square',
      'Triangle',
      'Circle'
    ],
    correctAnswer: 1,
    explanation: 'A square has 4 equal sides, unlike a rectangle which has 2 pairs of equal sides'
  },

  {
    id: 'math_bil_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'If a circle is divided into 4 equal parts and 3 parts are shaded, what fraction is represented?',
    options: [
      'Three fourths (3/4)',
      'One fourth (1/4)',
      'One half (1/2)',
      'Two thirds (2/3)'
    ],
    correctAnswer: 0,
    explanation: 'When a circle is divided into 4 equal parts and 3 parts are shaded, the fraction represented is three fourths (3/4)'
  },

  {
    id: 'math_bil_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'How many sides does a triangle have?',
    options: [
      '2 sides',
      '3 sides',
      '4 sides',
      '5 sides'
    ],
    correctAnswer: 1,
    explanation: 'A triangle has 3 sides, which is why it is called a "tri-angle" (tri means three)'
  },

  {
    id: 'math_bil_k2t2_019',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Match each 3D shape with an object that has a similar shape:',
    leftOptions: [
      'Sphere',
      'Cube',
      'Cylinder',
      'Cone'
    ],
    rightOptions: [
      'Ball',
      'Box',
      'Can',
      'Ice cream cone'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Real-world objects match with 3D shapes: sphere-ball, cube-box, cylinder-can, cone-ice cream cone'
  },

  {
    id: 'math_bil_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Which shape has no corners?',
    options: [
      'Square',
      'Triangle',
      'Rectangle',
      'Circle'
    ],
    correctAnswer: 3,
    explanation: 'A circle has no corners (vertices), while squares, triangles, and rectangles all have corners'
  },

  // Additional Time Questions
  {
    id: 'math_bil_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'If it is 2:30 PM now, what time will it be in 3 hours?',
    options: [
      '5:30 PM',
      '5:30 AM',
      '4:30 PM',
      '2:30 AM'
    ],
    correctAnswer: 0,
    explanation: 'Adding 3 hours to 2:30 PM gives us 5:30 PM'
  },

  {
    id: 'math_bil_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'How many minutes are in 2 hours?',
    options: [
      '60 minutes',
      '90 minutes',
      '120 minutes',
      '180 minutes'
    ],
    correctAnswer: 2,
    explanation: 'There are 60 minutes in 1 hour, so 2 hours equals 120 minutes'
  },

  {
    id: 'math_bil_k2t2_023',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Select all correct statements about time:',
    options: [
      'There are 24 hours in a day',
      'There are 60 seconds in a minute',
      'There are 30 days in every month',
      'There are 12 months in a year',
      'There are 52 weeks in a year'
    ],
    correctAnswer: [0, 1, 3, 4],
    explanation: 'All statements are correct except "There are 30 days in every month" - some months have 31 days, and February has 28 or 29 days'
  },

  {
    id: 'math_bil_k2t2_024',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Match these activities with the most appropriate time:',
    leftOptions: [
      'Breakfast',
      'Lunch',
      'Dinner',
      'Sleep'
    ],
    rightOptions: [
      '7:00 AM',
      '12:00 PM',
      '6:00 PM',
      '9:00 PM'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Common times for daily activities: breakfast around 7 AM, lunch at noon (12 PM), dinner around 6 PM, and bedtime around 9 PM'
  },

  {
    id: 'math_bil_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'If you start reading at 3:15 PM and read for 45 minutes, what time will you finish?',
    options: [
      '3:45 PM',
      '4:00 PM',
      '4:15 PM',
      '4:30 PM'
    ],
    correctAnswer: 1,
    explanation: 'Starting at 3:15 PM and adding 45 minutes gives us 4:00 PM'
  },

  // Additional Fractions Questions
  {
    id: 'math_bil_k2t2_026',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'What fraction of the square is shaded?',
    options: [
      'One fourth (1/4)',
      'One half (1/2)',
      'Three fourths (3/4)',
      'One whole (1)'
    ],
    correctAnswer: 2,
    explanation: 'Three parts out of four equal parts are shaded, which represents 3/4 (three-fourths)'
  },

  {
    id: 'math_bil_k2t2_027',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Select all fractions that are less than 1/2:',
    options: [
      '1/4',
      '1/3',
      '2/3',
      '3/8',
      '5/8'
    ],
    correctAnswer: [0, 3],
    explanation: '1/4 (0.25) and 3/8 (0.375) are less than 1/2 (0.5). The fractions 1/3 (0.33), 2/3 (0.67), and 5/8 (0.625) are all greater than 1/2'
  },

  {
    id: 'math_bil_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'If you eat 3 pieces of a pizza that has 8 equal slices, what fraction is left?',
    options: [
      '3/8',
      '5/8',
      '3/5',
      '8/3'
    ],
    correctAnswer: 1,
    explanation: 'If you eat 3 out of 8 slices, then 5 out of 8 slices are left, which is 5/8'
  },

  {
    id: 'math_bil_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Match each fraction with the correct decimal:',
    leftOptions: [
      '1/4',
      '1/2',
      '3/4',
      '1/10'
    ],
    rightOptions: [
      '0.25',
      '0.5',
      '0.75',
      '0.1'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Fraction to decimal conversions: 1/4 = 0.25, 1/2 = 0.5, 3/4 = 0.75, 1/10 = 0.1'
  },

  {
    id: 'math_bil_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'Which is greater: 2/5 or 3/8?',
    options: [
      '2/5',
      '3/8',
      'They are equal',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: '2/5 = 0.4 and 3/8 = 0.375. Since 0.4 > 0.375, 2/5 is greater than 3/8'
  },

  // Additional Geometry Questions
  {
    id: 'math_bil_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'What shape is a book most similar to?',
    options: [
      'Cube',
      'Sphere',
      'Rectangular prism',
      'Cylinder'
    ],
    correctAnswer: 2,
    explanation: 'A book is most similar to a rectangular prism because it has length, width, and height with rectangular faces'
  },
  
  {
    id: 'math_bil_k2t2_032',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Select all shapes that have exactly 4 sides:',
    options: [
      'Square',
      'Rectangle',
      'Triangle',
      'Rhombus',
      'Pentagon'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Squares, rectangles, and rhombuses all have exactly 4 sides. Triangles have 3 sides and pentagons have 5 sides'
  },

  {
    id: 'math_bil_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'How many faces does a cube have?',
    options: [
      '4 faces',
      '6 faces',
      '8 faces',
      '12 faces'
    ],
    correctAnswer: 1,
    explanation: 'A cube has 6 square faces'
  },

  {
    id: 'math_bil_k2t2_034',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Match each shape with its number of sides:',
    leftOptions: [
      'Triangle',
      'Square',
      'Pentagon',
      'Hexagon'
    ],
    rightOptions: [
      '3 sides',
      '4 sides',
      '5 sides',
      '6 sides'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Number of sides in each polygon: triangle - 3, square - 4, pentagon - 5, hexagon - 6'
  },

  {
    id: 'math_bil_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'Which 3D shape has no flat faces?',
    options: [
      'Cube',
      'Pyramid',
      'Sphere',
      'Rectangular prism'
    ],
    correctAnswer: 2,
    explanation: 'A sphere has no flat faces, edges, or vertices - it has a completely curved surface'
  },

  // Additional Time and Calendar Questions
  {
    id: 'math_bil_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'What season comes after summer?',
    options: [
      'Winter',
      'Spring',
      'Fall/Autumn',
      'Monsoon'
    ],
    correctAnswer: 2,
    explanation: 'In the four-season calendar, fall (autumn) comes after summer, followed by winter, and then spring'
  },

  {
    id: 'math_bil_k2t2_037',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Select all months that have exactly 30 days:',
    options: [
      'April',
      'May',
      'June',
      'July',
      'September'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'April, June, and September have exactly 30 days. May and July have 31 days.'
  },

  {
    id: 'math_bil_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS,
    question: 'If a recipe needs 3/4 cup of flour and you want to make half of the recipe, how much flour do you need?',
    options: [
      '1/4 cup',
      '3/8 cup',
      '1/2 cup',
      '6/8 cup'
    ],
    correctAnswer: 1,
    explanation: 'Half of 3/4 is 3/8 (multiply 3/4 by 1/2)'
  },

  {
    id: 'math_bil_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY,
    question: 'What is the name of a shape with 8 sides?',
    options: [
      'Hexagon',
      'Heptagon',
      'Octagon',
      'Nonagon'
    ],
    correctAnswer: 2,
    explanation: 'An octagon has 8 sides ("oct" means eight)'
  },

  {
    id: 'math_bil_k2t2_040',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.MATH.id,
    topic: SUBJECTS.BILINGUAL.MATH.topics.TIME,
    question: 'Match each time period with its total duration:',
    leftOptions: [
      'One week',
      'One month (average)',
      'One year',
      'One decade'
    ],
    rightOptions: [
      '7 days',
      '30 days',
      '365 days',
      '10 years'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Time period durations: week = 7 days, month ≈ 30 days, year = 365 days (366 in leap years), decade = 10 years'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.BILINGUAL.MATH.topics.TIME]: 20,     // 40%
  [SUBJECTS.BILINGUAL.MATH.topics.FRACTIONS]: 15,   // 30%
  [SUBJECTS.BILINGUAL.MATH.topics.GEOMETRY]: 15     // 30%
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
