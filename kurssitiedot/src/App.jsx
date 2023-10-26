const Header = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.course}
      </p>
    </>
  )  
}

const Part = (props) => {
  
  console.log(props)
  return (
    <>
    <p>{props.osa} {props.tehtava}</p>
    </>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part osa={props.osa1} tehtava={props.tehtava1}/>
      <Part osa={props.osa2} tehtava={props.tehtava2}/>
      <Part osa={props.osa3} tehtava={props.tehtava3}/>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>
      Number of exercises {props.tehtava}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header course={course} />
      <Content osa1={part1} tehtava1={exercises1} osa2={part2} tehtava2={exercises2} osa3={part3} tehtava3={exercises3} />
      <Total tehtava={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
