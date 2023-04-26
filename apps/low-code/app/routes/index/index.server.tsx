import type { ActionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"

export async function action({ request }: ActionArgs) {
  const user = await createUser()
  console.log("🚀 ~ file: index.tsx:21 ~ action ~ user:", user)
  return json(user)
}

async function createUser() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    }
  })
}
