import Header from "./components/Header"
import "./style/global.css"
const Layout = ({children}) => {
  return (
    <html>
      <body>
        <Header/>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  )
}

export default Layout