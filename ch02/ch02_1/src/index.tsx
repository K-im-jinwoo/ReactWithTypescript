import React from 'react'
import ReactDOM from 'react-dom/client'

/* 
일반적인 자바스크립트 돔 렌더링

let pDom = document.createElement('p')
pDom.innerText = 'Hello JS DOM'
document.body.appendChild(pDom)
*/

// 가상 돔 이해
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pDom = React.createElement('p', null, 'Hello Virtual DOM')

root.render(pDom)
