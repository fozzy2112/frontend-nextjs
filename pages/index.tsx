import Form from '@/components/Form'
import Button from '@/components/Button'
import UserList from '@/components/UserList'
import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='space-y-5'>
      <Head>
        <title>Frontend Test search and list Repository</title>
      </Head>
      <Header />
      <form className='flex place-self-center space-x-3'>
        <Form />
        <Button type='submit' isLoading={false} />
      </form>
      <UserList />
    </div>
  )
}
