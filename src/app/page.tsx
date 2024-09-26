// src/pages/index.tsx (o Home.tsx)
'use client';
import dynamic from 'next/dynamic';

// Cargamos el componente Login de manera diferida
const Login = dynamic(() => import('../components/login/login'), {
  loading: () => <p>Loading...</p>, 
  ssr: false 
});

export default function Home() {
  return (
    <div>
          <Login onLogin={(username, password) => {
        console.log(username, password);
      }} />
    </div>
  );
}
