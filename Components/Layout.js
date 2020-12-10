import Head from 'next/head'
import Navigation from './Navgation'
import Footer from '../Components/footer'
import Questions from '../pages/questions'

const Layout = ({ children }) => {
    return (
        <main>
            <Head>
                <title>My Next.JS Page</title>
            </Head>
            <Navigation />
           
            { children}
           
           <Footer /> 
        </main>
    );
}

export default Layout;