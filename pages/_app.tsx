import { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { useEffect } from 'react';
import { Footer } from '../src/components/Footer';
import { Header } from '../src/components/Header';
import { axeAccessibilityReporter } from '../src/utils/axeAccessibilityReporter';
import '../styles/globals.css';

const averta = localFont({
  src: [
    {
      path: '../public/averta/averta-regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/averta/averta-semibold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
})

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    axeAccessibilityReporter();
  },[]);
  
  return (
    <div className={averta.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
