import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {(props.good + props.neutral * 0 + props.bad * -1)/all}</p>
      <p>positive {props.good / all * 100}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const all = [good + neutral + bad];
  // const average = [(good + neutral * 0 + bad * -1)/all];
  // const positive = [good / all * 100];

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick= {() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      {/*<p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p> */}
    </div>
  )
}

export default App