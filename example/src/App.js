import React, { Component } from 'react'

import ExampleComponent from 'theoderic_content'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' 
        size={20} 
        marginTop = {20}
    marginBottom= {10}
    marginLeft= {10}
    marginRight= {10}
    paddingLeft= {10}
    paddingRight= {10}
    paddingTop= {10}
    paddingBottom = {5}
    fontStyle="italic"
    smallCaps={true}
    googleFont="Baumans"/>
      </div>
    )
  }
}
