import {create} from 'zustand'
import {nanoid} from 'nanoid'

const useStore = create(set => ({
  components: [],
  addComponent: type =>
    set(state => {
      let newValue = ''
      if (type === 'number') {
        newValue = prompt('Enter a number (0-9):', '1') || '1'
      } else if (type === 'operation') {
        newValue = prompt('Enter an operation (+, -, *, /, =):', '+') || '+'
      }
      return {
        components: [...state.components, {id: nanoid(), value: newValue}],
      }
    }),
  removeComponent: id =>
    set(state => ({
      components: state.components.filter(comp => comp.id !== id),
    })),
  setComponents: components => set({components}),
}))

export default useStore
