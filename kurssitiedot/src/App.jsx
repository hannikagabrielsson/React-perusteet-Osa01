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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content osa1={part1.name} tehtava1={part1.exercises} osa2={part2.name} tehtava2={part2.exercises} osa3={part3.name} tehtava3={part3.exercises} />
      <Total tehtava={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
