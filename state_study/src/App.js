import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //[현재 상태 값, 상태 변경 함수] = useState(초기값);
  const [count, setCount] = useState(0);

  //객체/배열 state와 불변성
  // const [user,setUser] = useState({name: '지원', age:20});
  // 객체 업데이트 시: 기존 내용 복사하고 원하는 부분만 덮어쓰기
  // setUser({
  //   ...user,
  //   age:21
  // })

  return (
    <div className="App">
      <p>현재 카운트: {count}</p>
      <button onClick={()=> {
        setCount(prev=>prev+1) //이전 상태 값을 보장하는 prev=>prev+1
      }}>증가</button>
    </div>
  );
}

export default App;
