import Footer from "@/components/Home/Footer"
import NavBar from "@/components/Home/NavBar/NavBar"

const Layout = ({children}) =>{
    return(
        <>  
            <header>
                <NavBar/>
            </header>
            <main className="container m-auto mt-0">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;