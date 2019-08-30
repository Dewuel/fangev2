import React from 'react';

function Logout(props){
  setTimeout(() => {
    props.history.push('/login')
  },500)
  return (
    <div>正在退出...</div>
  )
}
export default Logout