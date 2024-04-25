import './aboutMe-style.css'

export const AboutMe = () => {
    return (
        <div className="h-full bg-black">
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h1 className="text-white text-40 max-w-450 leading-none text-center comfortaa pt-40 pb-20">O <span className='firstColor'>responsável</span> por trás da AdGrowth Marketing.</h1>
                </div>
                <div className="cardAbout bg-white h-full max-w-580 m-5 p-10">
                    <div className='flex pb-10'>
                        <div>
                            <img src='/images/perfil.jpg' />
                        </div>
                        <div className='pl-5 sm:pl-10'>
                            <h2 className='text-lg sm:text-25 font-bold secondColor'>Cristoffer Marinho </h2>
                            <h3 className='text-lg sm:text-25 font-normal'>CO-Fundador</h3>
                        </div>
                    </div>
                    <div className='flex flex-col h-2/3 justify-between'>
                        <div className='flex-1 pb-5'>
                            <span className='text-sm sm:text-base '>
                                Com uma trajetória marcada por três anos de experiência no <span className='secondColor font-bold'>Google Brasil</span>,
                                tive a honra de colaborar com grandes e médias empresas, incluindo nomes como <span className='secondColor font-bold'> Petrobras,
                                    Serpro e Canal Combate</span>. Atualmente, sou sócio de uma das agências de marketing em mais rápida ascensão no Brasil.
                            </span>
                        </div>
                        <div className='flex-1 pb-5'>
                            <span className='text-sm sm:text-base'>
                                Tenho um histórico robusto em planejamento de marketing e estratégias comerciais.
                                Desde 2020, venho dedicando-me à área de marketing de performance, empregando minhas
                                habilidades para maximizar os resultados dos negócios de nossos clientes.
                                Minha especialização abrange <span className='secondColor font-bold'> Google Ads, Meta Ads (Facebook), Google Tag Manager e Google Analytics</span>.
                            </span>
                        </div>
                        <div className='flex-1 pb-10'>
                            <span className='text-sm sm:text-base'>
                                Juntos, vamos traçar o caminho para o sucesso do seu negócio, utilizando <span className='secondColor font-bold'>estratégias
                                    personalizadas</span> e dados orientados para performance. Estou aqui para ajudá-lo a alcançar e
                                superar seus objetivos comerciais.
                            </span>
                        </div>
                        <div>
                            <span className='font-bold secondColor'>
                                Vamos juntos nessa!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}