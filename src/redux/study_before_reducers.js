// import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
// import { combineReducers } from "redux";
// unsubscribe 예시
// state
// ['코딩', '점심 먹기'];
// combineReducers 예시
// [{text: '코딩', done: false}, {text: '점심 먹기', done: false}]
// const initialState = [];
// 배열을 객체로 변경
// {todos: [{text: '코딩', done: false}, {text: '점심 먹기', done: false}], filter: 'ALL'}
const initialState = { todos: [], filter: "ALL" };
// export function todoApp(previousState = initialState, action) {
//     // 초기값을 설정해주는 부분
//     // if (previousState === undefined) {
//     //   return [];
//     // }

//     // unsubscribe 예시
//     // if (action.type === ADD_TODO) {
//     //   return [...previousState, action.todo];
//     // }

//     // combineReducers 예시
//     if (action.type === ADD_TODO) {
//       // return [...previousState, { text: action.text, done: false }];
//       return {
//         ...previousState,
//         todos: [...previousState.todos, { text: action.text, done: false }],
//       };
//     }

//     if (action.type === COMPLETE_TODO) {
//       // return previousState.map((todo, index) => {
//       //   if (index === action.index) {
//       //     return { ...todo, done: true };
//       //   }
//       //   return todo;
//       // });
//       return {
//         ...previousState,
//         todos: previousState.todos.map((todo, index) => {
//           if (index === action.index) {
//             return { ...todo, done: true };
//           }
//           return todo;
//         }),
//       };
//     }

//     if (action.type === SHOW_COMPLETE) {
//       return {
//         ...previousState,
//         filter: "COMPLETE",
//       };
//     }
//     if (action.type === SHOW_ALL) {
//       return {
//         ...previousState,
//         filter: "ALL",
//       };
//     }

//     return previousState;
//   }
// [{text: '코딩', done: false}, {text: '점심 먹기', done: false}]
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

// export default reducer;
