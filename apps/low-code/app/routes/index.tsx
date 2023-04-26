import { useSearchParams } from '@remix-run/react'
import Layout from '~/components/layout'

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isEdit = searchParams.get('isEdit') === '1'
  return (
    isEdit
      ? <Layout>
        Content Here
      </Layout>
      : <div>hello world</div>
  )
}
