import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // const [clicks, setClicks] = useState({
  //   vote: 0
  // })

  const randomNumber = () => {
    return Math.floor(Math.random() * 7);
  }

 
  const handleClick = () => {
    setSelected(randomNumber());
  };

  // const handleVoteClicks = () => {
  //   const newClicks = {
  //     vote: clicks.vote + 1
  //   }
  //   console.log(newClicks);
  //   setClicks(newClicks);
  //   console.log({clicks});

  //   return newClicks;
  // }
  
  return (
    <div>
      {anecdotes[selected]}
      <br />
      {/* <p>has {clicks.vote} votes</p>
      <br/>
      <button onClick={handleVoteClicks}>vote</button>
      <br /> */}
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )

}


  

export default App