import React from 'react'

function Profile() {
    const profileStyle ={ 
        display :'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100wh',
        fontSize:'2rem'
    }
  return (
    <div style={profileStyle}>
        <h1>profile</h1>
    </div>
  )
}

export default Profile