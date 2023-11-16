import { useState } from 'react'



const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good + props.neutral * 0 + props.bad * -1)/all;
  const averageRounded = Math.round(average * 10) / 10;
  const positive = props.good / all * 100;
  const positiveRounded = Math.round(positive * 10) / 10;

  if (all > 0){
 
  return (
    <table>
      <tbody>
      <tr>
      <td>good</td><td>{props.good}</td>
      </tr>
      <tr>
      <td>neutral</td><td>{props.neutral}</td>
      </tr>
      <tr>
      <td>bad</td><td>{props.bad}</td>
      </tr>
      <tr>
      <td>all</td><td>{all}</td>
      </tr>
      <tr>
      <td>average</td><td>{averageRounded}</td>
      </tr>
      <tr>
      <td>positive</td><td>{positiveRounded} %</td>
      </tr>
      </tbody>
    </table>
  )
  }
  else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick= {() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App