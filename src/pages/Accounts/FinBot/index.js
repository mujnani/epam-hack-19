import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bubbles } from './Bubbles.js'

import conversation from './conversation'
import './styles/input.css'
import './styles/reply.css'
import './styles/says.css'
import './styles/setup.css'
import './styles/typing.css'

const strip = function(text) {
  return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
}

class ChatBubble extends Component {

  componentDidMount() {
    const standingAnswer = 'greeting';
    let lastAnswer = standingAnswer;
    const chatWindow = new Bubbles(
      document.getElementById('chatBubble'),
      {
        customerAvatar: 'https://static.cdn.epam.com/avatar/a017a077f8d66d4e8a2eb889aaf19d06.jpg',
        serviceAvatar: 'https://static.cdn.epam.com/avatar/a665799e590116841ef6fdd5fb9215ec.jpg',
        standingAnswer: standingAnswer,
        inputCallbackFn: function (o) {
          const _conversation = o.convo;
          let found = false;

          if (o.convo && o.standingAnswer) {
            const _replies = o.convo[o.standingAnswer].reply;
            if (_replies && o.input.length > 0) {
              _replies.forEach(function(e, i) {
                const stripQ = strip(e.question);
                const stripI = strip(o.input);
                if (stripQ.includes(stripI)) {
                  found = e.answer
                } else if (e.similar) {
                  found = (e.similar.some(keyword => keyword.includes(stripI))) ? e.answer : false;
                }
              })
            }
            lastAnswer = o.standingAnswer;
          }

          if (!found) {
            _conversation.missing.reply = _conversation[o.standingAnswer].reply;
          }

          setTimeout(function() {
            const _key = found ? found : (lastAnswer === 'end' ? 'greeting' : 'missing');
            chatWindow.talk(_conversation, found || _key)
          }, 600)
      }
    }
  );
  chatWindow.talk(conversation);
}

  render() {
    return (
      <div id="chatBubble"></div>
    )
  }
}

export default ChatBubble
