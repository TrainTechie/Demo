import React, { Component } from 'react'

export default class ListEx2 extends Component {
  render() {
        const items = [
          {id: 1, name: 'bread'},
          {id: 2, name: 'milk'},
          {id: 3, name: 'eggs'}
        ];
      
        return (
          <>
            <h1>Grocery List</h1>
            <ul>
              {items.map((val) => <li Key={val.id}>{val.name}</li>)}
            </ul>
          </>
          );
        }
}
