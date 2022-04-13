import { useState } from 'react'
import './InlineButton.css'

import { assignmentData } from '../../data/switch-assignment'



const InlineButton = ({color, input}) => {

  // eslint-disable-next-line no-extend-native
  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  const dynamicField = `${input}`
  const {[dynamicField]: scopedArray} = assignmentData;

  const [label, setLabel] = useState(scopedArray.random())

  function updateLabel(){
    setLabel(scopedArray.random())
  }

  return (
    <div 
      className="inlineButton"
      style={{backgroundColor: `${color}`}}
      onClick={updateLabel}
    >
      {label}
    </div>
  )
}

InlineButton.defaultProps = {
    string: "InlineButton",
    color: "#FF006E"
}

export default InlineButton
