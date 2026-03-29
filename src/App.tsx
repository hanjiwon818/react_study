import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  return (
    // h-screen: 화면 전체 높이
    // flex, items-center, justify-center: 자식 요소를 가로세로 정중앙에 배치
    // bg-slate-900: 어두운 회색 배경
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-indigo-100">
        <h1 className='text-4xl font-black text-indigo-600'>
          Hello React!
        </h1>
        <p className='text-gray-500 text-lg mt-2'>
          테일윈드 유틸리티 클래스 연습 중입니다.
        </p>
        <button className='mt-6 w-full py-3 bg-indigo-600 text-white font-bold rounded-xl transition-all hover:bg-indigo-300 active:scale-95'>클릭해보세요!</button>
      </div>
    </div>
  )
}