"use client"
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person'

type Props = {
    href : string
    text : string
}

const Start = ({ href, text } : Props) => {
  return (
    <Link href={href} className='flex items-center gap-4 px-4 py-2 bg-black text-white rounded-lg'>
        {text}<PersonIcon/>
    </Link>
  )
}

export default Start