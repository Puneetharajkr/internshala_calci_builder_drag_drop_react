import useStore from '../store/store'

const Controls = () => {
  const {addComponent} = useStore()

  return (
    <div className="controls">
      <button type="button" onClick={() => addComponent('number')}>
        Add Number
      </button>
      <button type="button" onClick={() => addComponent('operation')}>
        Add Operation
      </button>
    </div>
  )
}

export default Controls
