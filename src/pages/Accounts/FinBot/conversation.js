const conversation = {
  greeting: {
    says: [
      'Hi, Nice to see you!',
      'What a nice day today.',
    ],
    reply: [
      {
        question: "Of course",
        similar: ['yes', 'sure'],
        answer: "goon"
      },
      {
        question: "I don't think so",
        similar: ['no'],
        answer: "over"
      }
    ]
  },
  'goon': {
    says: [
      "Let's go out",
      "Click what you want to do below 👇",
    ],
    reply: [
      {
        question: "Hiking",
        answer: "activity"
      },
      {
        question: "Mountain climbing",
        answer: "activity"
      },
      {
        question: "Skating",
        answer: "activity"
      },
      {
        question: "Sorry, I don't have time",
        similar: ['no'],
        answer: "over"
      }
    ]
  },
  'activity': {
    replace: ['activity'],
    says: [
      "Let's go for {activity}"
    ],
    reply: [
      {
        question: "Sure",
        similar: ['yes', 'ofcourse'],
        answer: "over"
      },
      {
        question: "Sorry, I don't have time",
        similar: ['no', 'reject'],
        answer: "over"
      }
    ]
  },
  'over': {
    says: ['The conversation is over'],
    reply: [
      {
        question: "Start again",
        answer: "greeting"
      },
      {
        question: "Bye-bye",
        similar: ['seeyou', 'seeu'],
        answer: "end"
      }
    ]
  },
  'end': {
    says: [
      'Bye~~',
      'It was great to see you. Have a good day.'
    ],
    reply: [
      {
        question: "Start a new conversation",
        answer: "greeting"
      }
    ]
  },
  'missing': {
    says: [
      "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
    ],
  }
}

export default conversation;