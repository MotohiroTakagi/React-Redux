import { createStore } from "redux";

const initialState = {
  count: 1,
}

// storeを作成するためにreducerを定義
// reducerは引数にstateを持つ

const reducer = (state = initialState) => {
  return state;
}

// reducerが保持しているstateをstoreの中に保存する
const store = createStore(reducer);

export default store;