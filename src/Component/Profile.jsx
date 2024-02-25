import codechef from '../assets/codechef.png'
import hackerrank from '../assets/Hackerrank1.png'
import gfg from '../assets/gfg1.png'
import leetcode from '../assets/leetcode2.png'

function Profile() {
    return (
        <div className='flex flex-row gap-4 px-12 items-center justify-between py-12'>
            <a href='https://www.codechef.com/users/avinashraj1234' target='_blank'><img src={codechef} className='w-25 h-25 cursor-pointer opacity-70'></img></a>
            <a href='https://www.hackerrank.com/profile/Avinashrajraj628' target='_blank'><img src={hackerrank} className='w-20 h-20 cursor-pointer opacity-70'></img></a>
            <a href='https://auth.geeksforgeeks.org/user/avinashrajraj628/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' target='_blank'><img src={gfg} className='w-20 h-20 cursor-pointer opacity-70'></img></a>
            <a href='https://leetcode.com/avinashrajraj628/' target='_blank'><img src={leetcode} className='w-20 h-20 cursor-pointer opacity-70'></img></a>
        </div>
    )
}

export default Profile
