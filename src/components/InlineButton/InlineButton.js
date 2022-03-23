import './InlineButton.css'

const InlineButton = (props) => {
  return (
    <div className="inlineButton" style={{backgroundColor: `${props.color}`}}>
      {props.string}
    </div>
  )
}

InlineButton.defaultProps = {
    string: "InlineButton",
    color: "#FF006E"
}

export default InlineButton
