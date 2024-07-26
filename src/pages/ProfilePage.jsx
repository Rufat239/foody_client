import React from 'react'
import Profile from '../components/Profile/Profile'
import Sidebar from '../components/Sidebar/Sidebar'



function ProfilePage() {
  return (
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%" }}>
       <Sidebar />
      <Profile />
    </div>
  )
}

export default ProfilePage
