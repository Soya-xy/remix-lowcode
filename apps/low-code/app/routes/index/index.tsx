import type { ActionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { NavLink, useFetcher, useLoaderData } from "@remix-run/react"
import { useState } from "react"
import { Button } from "materials"
import { prisma } from '~/libs/db.server'
export async function loader() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      author: true,
    }
  })
  return json({ feed })
}


// export async function action({ request }: ActionArgs) {
//   const user = await createUser()
//   console.log("🚀 ~ file: index.tsx:21 ~ action ~ user:", user)
//   return json(user)
// }

// async function createUser() {
//   return await prisma.user.findMany({
//     select: {
//       id: true,
//       name: true,
//       email: true,
//     }
//   })
// }

export default function Index() {
  const { feed } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
  const [name, setName] = useState('Name')


  return (
    <div className="page">
      <h1 text="red-500">{name}</h1>
      <main>
        <Button onClick={() => fetcher.submit({}, { method: "post", action: 'server' })}>TEst</Button>
        <NavLink to="/tags">Tags</NavLink>
      </main>
    </div>
  )
}
