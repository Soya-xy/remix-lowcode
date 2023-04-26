import { useFetcher } from '@remix-run/react'
import { useState } from 'react'
import { Button } from 'materials'

export default function Index() {
  const fetcher = useFetcher()
  const [name, setName] = useState('Name')
  return (
    <div>
      <h1>{name}</h1>
      <main>
        <Button onClick={() => setName('Hello')}>Test</Button>
      </main>
    </div>
  )
}
