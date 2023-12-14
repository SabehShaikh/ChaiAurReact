import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom app!</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://goggle.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit goggle'
// }


const AnotherElement = (
  <a href='https://goggle.com' target='_blank'>Visit goggle</a>
)

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a', { href: "https://goggle.com", target: '_blank', },
  'click me to visit goggle',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <App />
  )
