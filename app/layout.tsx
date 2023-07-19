import Footer from '@/components/footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import getCategories from "@/actions/get-categories";


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Store',
  description: 'E-commerce Store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const categories = await getCategories();

  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider />
        <Navbar data={categories} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
