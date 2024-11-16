import { addFitness } from '@/lib/actions/fitness/add-fitness'
import { getSession } from '@/lib/getSession';
import React from 'react'

const DashboardPage = async () => {
  // const userEmail = session?.user?.email
  const session = await getSession();
  const user = session?.user;
  const userEmail = user?.email;
  const userId = session?.user?.id
  return (
    <div>
      {userEmail}
      {userId}
      <form
      action={addFitness}
      >
        <input name='userId' id='userId' defaultValue={userId} hidden />
        <input name='steps' type='number' id='steps' placeholder='Steps...' />
        <input name='caloriesBurned' type='number' id='caloriesBurned' placeholder='Calories Burned...' />
        <button type='submit'>Add Fitness</button>
      </form>
    </div>
  )
}

export default DashboardPage