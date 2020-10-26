import React, {useReducer } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {todoReducer,initialState } from '../reducers/todoReducer'

export default function Container() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  function addTodo(text) {
    dispatch({type:"ADD_TODO",payload: text})
  }
  function completeTodo(index) {
    dispatch({type:"COMPLETE_TODO",payload: index})
  }
  function removeTodo(index) {
    dispatch({type:"REMOVE_TODO",payload: index})
  }
  function updateTodo(index, value) {
    dispatch({type:"UPDATE_TODO",payload: {index,value}})
  }
  return (
    <>
      <TodoList
        todos={state.todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <TodoForm addTodo={addTodo} />
    </>
  );
}
