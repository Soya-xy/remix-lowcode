import { Layout } from 'materials'

const { Content: AContent } = Layout
export default function Content({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <AContent className={className}>{children || 'children'}</AContent>
  )
}
