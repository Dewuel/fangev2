import React from 'react'

function List(props){
  const {todoList} = props
  console.log('list', todoList)
  return (
    <div>
      <ul>
        {
          todoList.map((item,index) => {
            return <li key={index.toString()}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
export default List