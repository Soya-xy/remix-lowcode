import Content from './content'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      <Content className="px-4">{children}</Content>
      <Footer />
    </>
  )
}
