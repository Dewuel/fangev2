import React, {useState} from 'react'

function InputField(props){
  let [data, setData] = useState('')
  const {renderList} = props
  const emitData = () => {
    renderList(data)
  }
  return (
    <div>
      <input onChange={() => setData(data)} type="text"/>
      <button onClick={emitData}>add</button>
    </div>
  )
}
export default InputField