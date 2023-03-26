// 액션의 type 정의
// 액션의 타입 => 액션 생성자 이름
// ADD_TODO => addTodo
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// 액션 생산자
// 액션의 타입은 미리 정의한 타입으로 부터 가져와서 사용하며,
// 사용자가 인자로 주지 않음.
/** unsubscribe 예시
export function addTodo(todo) {
  return {
    // { type: ADD_TODO, todo: todo }
    type: ADD_TODO,
    todo,
  };
*/
export function addTodo(text) {
  return {
    // { type: ADD_TODO, text: '할일' }
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  // { type: COMPLETE_TODO, index: 3 }
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}
