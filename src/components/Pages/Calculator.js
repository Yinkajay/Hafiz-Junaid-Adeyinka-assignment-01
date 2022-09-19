import React from 'react'
import './Calculator.css'

const Calculator = () => {
  return (
    <>
      <div className='image-container'>
        <img src="/myself.jpg" alt="Picture of me" height="250" width="187" />
      </div>
      <hr />
      <h1>My Calculator</h1>
      <table border="2 px solid">
      <thead>
        <th colspan="4">0</th>
      </thead>
      <tbody>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>+</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>*</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>-</td>
        </tr>
        <tr>
          <td>0</td>
          <td>%</td>
          <td>/</td>
          <td>=</td>
        </tr>
    </tbody>
    </table>
    </>
  )
}

export default Calculator
