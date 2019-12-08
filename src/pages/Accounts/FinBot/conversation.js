const conversation = {
  greeting: {
    says: [
      'Hi, Liza, glad to have you here,let us help you prepare your first house!'
    ],
    reply: [
      {
        question: "Of course",
        similar: ['yes', 'sure'],
        answer: "goon"
      },
      {
        question: "Not now",
        similar: ['no'],
        answer: "over"
      }
    ]
  },
  'goon': {
    says: [
      "Based on situation of people with similar background, we suggest an apartment of 1,500,000 - 2,000,000 RMB for the first apartment"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "autorecommend"
      },
      {
        question: "I want to specify",
        answer: "manualinput"
      }
    ]
  },
  'autorecommend': {
    says: [
      "Based on your age, we suggest a 5 years saving period to save the 30% down payment of 1,500,000 RMB"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "studentloan"
      },
      {
        question: "I want to specify",
        similar: ['yes', 'sure'],
        answer: "studentloan"
      }
    ]
  },
  'studentloan': {
    says: [
      "We also notice that you have a student loan of 20,000 RMB for another 2 years,do you want to include that in your saving plan?"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "savingplan"
      },
      {
        question: "no",
        similar: ['yes', 'sure'],
        answer: "savingplan"
      }
    ]
  },
  'savingplan': {
    says: [
      "We suggest you save 8000 RMB per month,so you will reach your goal!"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "offers"
      },
      {
        question: "I wnat to specify",
        similar: ['yes', 'sure'],
        answer: "offers"
      }
    ]
  },
  'offers': {
    says: [
      "Based on the bank accounts you have already, we suggest this saving offer with higher intest rate : <a href='https://www.citibank.com.cn/sim/english/deposits/notice_deposit.htm' target='_blank'>here</a>"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "agreement"
      },
      {
        question: "I want to see more offers",
        similar: ['yes', 'sure'],
        answer: "agreement"
      }
    ]
  },
  'agreement': {
    says: [
      "okay, leave the rest to us, we will create this account for you and transfer 8000 RMB to this account per month"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "start"
      },
      {
        question: "not now",
        similar: ['yes', 'sure'],
        answer: "start"
      }
    ]
  },
  'start': {
    says: [
      "success!here is your new account : <a href='#/elements/dropdowns'> new account </a >"
    ],
    reply: [
      {
        question: "okay",
        similar: ['yes', 'sure'],
        answer: "start"
      }
    ]
  },
  // 'activity': {
  //   replace: ['activity'],
  //   says: [
  //     "Let's go for {activity}"
  //   ],
  //   reply: [
  //     {
  //       question: "Sure",
  //       similar: ['yes', 'ofcourse'],
  //       answer: "over"
  //     },
  //     {
  //       question: "Sorry, I don't have time",
  //       similar: ['no', 'reject'],
  //       answer: "over"
  //     }
  //   ]
  // },
  'over': {
    says: ['We hope to see you again soon!'],
    reply: [
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