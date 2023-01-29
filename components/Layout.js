import Header from './partials/Header';
import Footer from './partials/Footer';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800']
})

export default function Layout({ children }) { 
  return (
    <>
      <Header />
        <main className={`${montserrat.className}`}>
          {children}
        </main>
      <Footer />
    </>
  )
}