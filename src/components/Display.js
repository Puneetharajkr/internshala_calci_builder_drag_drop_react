const Display = ({expression, handleClear}) => (
  <div className="display">
    <input type="button" value={expression} readOnly />
    <button className="clear-btn" onClick={handleClear}>
      ❌
    </button>
  </div>
)

export default Display
