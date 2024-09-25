import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
export default function Create() {

  const [policyName, setpolicyName] = useState('')
  const [policyHolder, setpolicyHolder] = useState('')
  const [policyDuration, setpolicyDuration] = useState(0)
  const [policyCost, setpolicyCost] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const C = {
        PolicyName: policyName,
        PolicyHolder: policyHolder,
        PolicyDuration: policyDuration,
        PolicyCost: policyCost,
        _id: uuidv4(),
        
      };


      fetch(" http://localhost:5109/api/policy", {
        method: "post",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

        body: JSON.stringify({
          _id: C._id,
          PolicyName: C.PolicyName,
          PolicyHolder: C.PolicyHolder,
          PolicyDuration: C.PolicyDuration,
          PolicyCost: C.PolicyCost
        })
      })

    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div>
      <form onSubmit={handleSubmit}>

        <select onChange={(e) => setpolicyName(e.target.value)}>
          <option value="Vehicle"></option>
          <option value="Motorcylce"></option>
          <option value="Home"></option>
          <option value="Business"></option>
          <option value="Boat"></option>
          <option value="Renters"></option>
        </select>

        <select name="" id="">
          <option value="30"></option>
          <option value="60"></option>
          <option value="90"></option>
          <option value="120"></option>
          <option value="150"></option>
          <option value="180"></option>
        </select>
        <button type='submit'>Create Policy</button>
      </form>
    </div>
  )
}
