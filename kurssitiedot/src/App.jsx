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


const Content = (props) => {
  console.log(props)
  return (
    <>
    <p>
      {props.osa} {props.tehtava}
    </p>
    {/* <p>
      {props.part2} {props.excercises2}
    </p>
    <p>
      {props.part3} {props.excercises3}
    </p> */}
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
      <Content osa={part1} tehtava={exercises1} />
      <Content osa={part2} tehtava={exercises2} />
      <Content osa={part3} tehtava={exercises3} />
      <Total tehtava={exercises1 + exercises2 + exercises3}/>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App
