import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Question {
  id: number | any
  text: string
  priority: number
}

const questions: Question[] = [
  {id: 1, text: 'E-Newsletter?', priority: 1},
  {id: 2, text: 'Class Reunions', priority: 2},
  {id: 3, text: 'Program/Major Reunions', priority: 3},
  {id: 4, text: 'Regional Activities', priority: 4},
  {id: 5, text: 'Annual Campus', priority: 5},
]

const PriorityForm: React.FC = () => {
  const [priorities, setPriorities] = useState([0, 0, 0, 0, 0])

  const handleChange = (questionId: number, priority: number) => {

    setPriorities((prevPriorities) => {
      const newPriorities =  [...prevPriorities];
    

      newPriorities[questionId] = priority

      // Disable the selected priority for other questions.
      for (let i = 0; i < newPriorities.length; i++) {
        if (i !== questionId && newPriorities[i] === priority) {
          newPriorities[i] = 0
        }
      }
      
      return newPriorities
    })

    
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Get the selected priorities.
    const selectedPriorities = priorities.filter((priority) => priority > 0)
    if(selectedPriorities.length!==questions.length){
        console.log("Select all options");
        toast("Select all options");
    }
    else{
        const q=[...selectedPriorities];
        const obj = {
            q30: q[0],
            q31: q[1],
            q32: q[2],
            q33: q[3],
            q34: q[4]
          };
          
    console.log(obj)
    }

    // Submit the form with the selected priorities.
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id} className='mb-3'>
          <label htmlFor={question.id} className='form-label'>
            {question.text}
          </label>
          <select
            id={question.id}
            className='form-select'
            value={priorities[question.id]}
            onChange={(event) => handleChange(question.id, parseInt(event.target.value))}
          >
            <option value='0'>Select priority</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
      ))}

      <button onClick={handleSubmit} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default PriorityForm
