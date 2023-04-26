import { useFetcher } from '@remix-run/react'
import { useState } from 'react'
import { Button, allMaterial } from 'materials'

console.log('🚀 ~ file: index.tsx:4 ~ allMaterial:', allMaterial)

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
