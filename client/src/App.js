import React, {Component} from 'react'
import {sortBy} from 'underscore'

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

class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => this.setState({list: sortBy(['a', 'x', 'b', 'z'])})

  render () {
    const {list} = this.state

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
}


export default App;

