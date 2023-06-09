import img from './spotify2.png'

export default function Header(){
    return(
        <>
            <header className="w-full bg-fuchsia-700 text-white font-bold">
                <div className="alert-bar flex w-full p-2 justify-center items-center bg-fuchsia-900 bg-opacity-95 text-xs">
                        <div className="content">
                            <h3>Termina em 7d 15h 49min</h3>
                        </div>
                    </div>
                <div className='flex'>
                    <div className="max-w-screen-xl flex px-4 py-12 justify-around items-center m-auto max-lg:flex-col max-lg:gap-4">
                        <div className="content flex justify-center flex-col gap-12 mr-12 w-2/4">
                            <h1 className="font-extrabold text-4xl">Tá acabando: 3 meses de Premium por R$ 0,00</h1>
                            <h2 className="text-justify font-semibold text-2xl">Começa hoje a ouvir música sem anúncios e offline grátis até 9 de agosto de 2023. Cancela quando quiseres.</h2>
                            <div className="btns flex-row flex gap-2 justify-start items-cente">
                                <button className="border-solid border-gray-900 border-2 uppercase bg-gray-900 py-3 px-8 rounded-full text-sm hover:scale-x-105 hover:bg-black">Experimente 3 meses por R$ 0,00</button>
                                <button className="border-solid border-2 py-3 px-8 border-white uppercase rounded-full font-black text-sm hover:scale-x-105 hover:bg-fuchsia-900">Ver planos</button>
                            </div>
                            <p className='text-xs'>Somente no plano Individual. Depois é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. A oferta termina em 16/06/2023</p>
                        </div>
                        <div className='px-4 py-2'>
                            <img src={img} className='w-[400px]' alt="image-campain-spotify" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}