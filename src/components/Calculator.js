import {useState} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {evaluate} from 'mathjs'
import useStore from '../store/store'
import Display from './Display'
import Controls from './Controls'

const Calculator = () => {
  const {components, setComponents, removeComponent} = useStore()
  const [expression, setExpression] = useState('')

  const handleDragEnd = result => {
    if (!result.destination) return
    const reordered = [...components]
    const [movedItem] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, movedItem)
    setComponents(reordered)
  }

  const evalExpression = expr => {
    try {
      return evaluate(expr) // Safe calculations using math.js
    } catch {
      return 'Error'
    }
  }

  const handleButtonClick = value => {
    if (value === '=') {
      setExpression(evalExpression(expression).toString())
    } else {
      setExpression(expression + value)
    }
  }

  const handleClear = () => {
    setExpression('')
  }

  return (
    <div className='calculator'>
      <Controls />
      <Display expression={expression} handleClear={handleClear} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='calculator' direction='horizontal'>
          {dropProvided => (
            <div ref={dropProvided.innerRef} className='button-grid'>
              {components.map((component, index) => (
                <Draggable
                  key={component.id}
                  draggableId={component.id}
                  index={index}
                >
                  {dragProvided => (
                    <div
                      ref={dragProvided.innerRef}
                      className='button-container'
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                    >
                      <button
                        className='button'
                        onClick={() => handleButtonClick(component.value)}
                      >
                        {component.value}
                      </button>
                      <button
                        className='delete-btn'
                        onClick={() => removeComponent(component.id)}
                      >
                        ❌
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Calculator
