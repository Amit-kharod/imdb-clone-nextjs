import Header from '@/Components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDB',
  description: 'IMDB, Explore Movies and TV Shows',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-rubik">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
