import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'

export function Home(){
  const [auth] = useLocalStorage('auth', {})

  if(auth?.user?.id){
    return <Navigate to="/dashboard" replace={true}/>
  }

  return(
    <div className='bg-red-700 text-white p-4 flex flex-col items-center min-h-screen space-y-6'>
     
      <header className='container max-w-5xl p-4 flex justify-center'>
       <img className='w-40' src="/imgs/logo-fundo-vinho.svg"/>
      </header>

      <div className="container max-w-5xl p-4 flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className='flex md:flex-1 justify-center'>
          <img className='w-full max-w-md' src="/imgs/photo.png"/>
        </div>

        <div className='flex flex-col md:flex-1 space-y-6'>
          <h1 className='text-3xl text-center md:text-left font-bold'>Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <a href="/signup" className="text-center text-red-700 bg-white text-lg px-8 py-4 rounded-xl">Criar minha conta</a>
          <a href="/login" className="text-center text-white border border-white text-lg px-8 py-4 rounded-xl">Fazer Login</a>
        </div>
      </div>
    </div>
  )
}
