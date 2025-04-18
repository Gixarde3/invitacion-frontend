import Header from '../components/Header';
import Footer from '../components/Footer';
import generalesStyle from '../assets/styles/generales.module.css';
function Layout({children}) {
    return (
    <>
        <Header />
        <main className={generalesStyle.main}>
            {children}
            <div className={generalesStyle.spacing}></div>
        </main>
        <div className="divisor"></div>
        <Footer />
    </>);
}

export default Layout;