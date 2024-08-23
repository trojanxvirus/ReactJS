import React from 'react';
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime"
import App from './App.jsx'



function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement={
//   tyoe: "a",
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit Google"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',  target: '_blank'},
  'click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
 
  reactElement
 
)
//atul bsdk
