import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { Button } from "ui"
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

export default function Index() {
  const { feed } = useLoaderData<typeof loader>()
  console.log("🚀 ~ file: index.tsx:20 ~ Index ~ feed:", feed)
  return (
    <div className="page">
      <h1>My Blog</h1>
      <main>
        <Button></Button>
      </main>
    </div>
  )
}
