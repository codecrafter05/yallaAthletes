import DashboardPage from '../DashboardPage'

export default function ProfilePageDashboard({user}){
  return( <>
    <DashboardPage user={user} />
    <h1>Profile</h1>
    </>
  )
}