import React from 'react'

const TableHeader = props =>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>X</th>
      <th>Y</th>
    </tr>
  </thead>

const TableBody = ({list})=>
  <tbody>
    {list.map((item, i) =>
      <tr>
        <td>{item}</td>
        <td>{item}</td>
        <td>{item}</td>
        <td>{item}</td>
        <td>{item}</td>
      </tr>
    )}
  </tbody>

const App = () => {
  const list = ['a', 'b']

  return (
    <div>
    {list.length ? (
      <table>
        <TableHeader />
        <TableBody list={list} />
      </table>
    ): (
      <span>no results</span>
    )}
    </div>
  )
}


export default App;

