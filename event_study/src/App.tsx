import { useState } from 'react'
import './App.css'

function App() {
  //useState와 핸들러들은 App 함수의 최상위에 위치
  const [inputValue, setInputValue] = useState<string>("");
  //1. 입력 감지(onChange)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  //2. 제출 로직
  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    alert(`입력된 값: ${inputValue}`);
    setInputValue(""); //입력창 초기화
  };

  //3. 엔터키 감지 (onKeyDown)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { //Enter 대문자
      handleSubmit();
    }
  }
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }} onClick={() => console.log("부모 Div 클릭됨 (버블링)")}>
      <h3>사용자 인터랙션 실습</h3>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='내용 입력'>
      </input>
      <button onClick={(e) => {
        e.stopPropagation(); //부모 div로 이벤트가 퍼지는 것 방지
        handleSubmit();
      }}>확인</button>
      <button onClick={(e) => {
        console.log("target:", e.target);           // 클릭된 구체적인 요소
        console.log("currentTarget:", e.currentTarget); // onClick이 달린 버튼 자체
      }}>
        <strong>확인</strong> 버튼
      </button>
    </div>
  )
}

export default App
