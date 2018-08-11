
import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import './App.css';
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: String,
  resetTranscript: Function,
  browserSupportsSpeechRecognition: Boolean
}

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)
