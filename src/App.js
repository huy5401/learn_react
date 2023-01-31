import logo from './logo.svg';
import './App.css';
import Review from './component/review/Review';
import Header from './component/Header/Header';
import UseEffect from './component/f8/hook/UseEffect';
import ChapAppFake from './component/f8/hook/ChapAppFake';
import { useState } from 'react';
import UseLayoutEffect from './component/f8/hook/UseLayoutEffect';
import UseRef from './component/f8/hook/UseRef';


// dispatch custome event auto comment and log after 2 seconds
// function emitComment (id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Content comment lesson ${id}`
//       })
//     )
//   }, 2000)
// }
function emitComment (id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Content comment lesson ${id}`
      })
    )
  }, 2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header></Header>
      <button onClick={() => {setShow(!show)}}>toggle</button>
      {show && <UseRef></UseRef>}
    </div>
  );
}

export default App;
