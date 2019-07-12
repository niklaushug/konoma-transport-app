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
    {list.map((item, i) => {
      const {
        name,
        id,
        coordinate: {
          type,
          x,
          y
        }
      } = item

      return (
        <tr key={i}>
          <td>{name}</td>
          <td>{id}</td>
          <td>{type}</td>
          <td>{x}</td>
          <td>{y}</td>
        </tr>
      )
    })}
  </tbody>

class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    fetch('http://localhost:5000/api/getTransport?query=Bern')
    .then(res => res.json())
    .then(list => this.setState({list: sortBy(list, 'name')}))
  }

  reverseList = () =>
    this.setState(prevState => ({
        list: prevState.list.reverse()
    }))

  render () {
    const {list} = this.state

    return (
      <div>
        {list.length ? (
          <React.Fragment>
            {list.length > 1
              && <button onClick={this.reverseList}>sort by name</button>}
            <table>
              <TableHeader />
              <TableBody list={list} />
            </table>
          </React.Fragment>
        ): (
          <span>no results</span>
        )}
      </div>
    )
  }
}


export default App;

