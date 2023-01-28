import Form from '@/components/Form'
import Button from '@/components/Button'
import UserList from '@/components/UserList'

export default function Home() {
  return (
    <div>
      <form className='flex place-self-center space-x-3'>
        <Form />
        <Button type='submit' isLoading={false} />
      </form>
      <UserList />
    </div>
  )
}
