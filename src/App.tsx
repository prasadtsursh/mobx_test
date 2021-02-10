import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'

@inject('store')
@observer class App extends React.Component<{ store?: any }> {
  constructor(props: any) {
    super(props)
  }
  @observable name: string = 'prasad'

  handleClick = () => {
    this.name = 'qwertyui'
    console.log('this.name', this.name)
  }

  render() {
    console.log('this.name', this.name)
    const { store: { list, add, n } } = this.props
    return (
      <div className="App">
        {
          list.map((i: any, idx: number) => {
            return <li key={idx}>{i.id}</li>
          })
        }
        <button onClick={this.handleClick}>{this.name}</button>
        {n}
      </div>
    );
  }
}

export default App