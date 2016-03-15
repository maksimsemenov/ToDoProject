import expect from 'expect'
import { List, fromJS } from 'immutable'
import reducer from '../Reducer/Context'
import * as actionTypes from '../constants/ActionTypes'

describe('Context reducer', () => {
  it('Should return initial state', () => {
    const initialState = undefined
    const action = {}
    const nextState = fromJS([])
    expect(reducer(initialState, action)).toEqual(fromJS(nextState))
  })
  it('Should return state for empty action', () => {
    const initialState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      }
    ])
    const action = {}
    expect(reducer(initialState, action)).toEqual(fromJS(initialState))
  })


  it('Should handle ADD_CONTEXT with empty store', () => {
    const initialState = List()
    const action = {
      type: types.ADD_CONTEXT,
      properties: {
        title: 'New context'
      }
    }
    const nextState = from([
      {
        id: 0,
        title: 'New context'
      }
    ])
    expect(reducer(initialState, action)).toEqual(fromJS(nextState))
  })
  it('Should handle ADD_CONTEXT with not empty store', () => {
    const initialState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      }
    ])
    const action = {
      type: types.ADD_CONTEXT,
      properties: {
        title: 'New context'
      }
    }
    const nextState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      },
      {
        id: 1,
        title: 'New context'
      }
    ])
    expect(reducer(initialState, action)).toEqual(nextState)
  })

  it('Should handle REMOVE_CONTEXT', () => {
    const initialState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      },
      {
        id: 1,
        title: 'New context'
      }
    ])
    const action = {
      type: types.REMOVE_CONTEXT,
      id: 1
    }
    const nextState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      }
    ])
    expect(reducer(initialState, action)).toEqual(nextState)
  })

  it('Should handle EDIT_CONTEXT', () => {
    const initialState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      },
      {
        id: 1,
        title: 'New context'
      }
    ])
    const action = {
      type: types.EDIT_CONTEXT,
      id: 1,
      properties: {
        title: 'Changed Context Tittle'
      }
    }
    const nextState = fromJS([
      {
        id: 0,
        title: 'Existing context'
      },
      {
        id: 1,
        title: 'Changed Context Tittle'
      }
    ])
    expect(reducer(initialState, action)).toEqual(nextState)
  })
})