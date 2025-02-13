import {Draggable, Droppable} from 'react-beautiful-dnd'

const ButtonGrid = ({components, handleButtonClick}) => (
  <Droppable droppableId="calculator">
    {dropProvided => (
      <div ref={dropProvided.innerRef} className="button-grid">
        {components.map((component, index) => (
          <Draggable
            key={component.id}
            draggableId={component.id}
            index={index}
          >
            {dragProvided => (
              <button
                type="button"
                ref={dragProvided.innerRef}
                className="button"
                onClick={() => handleButtonClick(component.value)}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...dragProvided.draggableProps}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...dragProvided.dragHandleProps}
              >
                {component.value}
              </button>
            )}
          </Draggable>
        ))}
        {dropProvided.placeholder}
      </div>
    )}
  </Droppable>
)

export default ButtonGrid
