import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";
// import { addTodo, completeTodo, showComplete } from "./redux/actions";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// /**
// // unsubscribe 예시
// const unsubscribe = store.subscribe(() => {
//   // subscribe: store가 변경이 생겼을 때 () => {} 함수를 실행
//   // 리턴이 unsubscribe
//   // unsubscribe(); 하면 제거
//   console.log(store.getState());
// });

// // console.log(store);
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// unsubscribe(); // 따라서 이거 아래로는 콘솔 안나옴
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// */
// // combineReducers 예시
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
