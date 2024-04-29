export const Methodology = () => {
    return (
        <div className="bg-black pt-20">
            <div className="flex justify-center items-center">
                <h1 className='text-white sm:text-40 text-25 max-w-580 leading-none text-center pb-10'>Metodologia <span className='firstColor'>Escalavel</span></h1>
            </div>
            <div className="flex justify-center items-center p-10">
                <img src="/images/metodologia.png" />
            </div>
            <div className="flex sm:flex-row flex-col sm:pl-40 sm:pr-40 sm:pt-10 justify-between w-full p-10">
                <div className="gradient rounded pl-5 mb-10 pt-5">
                    <h2 className="font-bold text-xl firstColor">Visibilidade:</h2>
                    <h3 className="text-white sm:max-w-200">Atrair atenção do publico.</h3>
                </div>
                <div className="gradient rounded pl-5 mb-10 pt-5">
                    <h2 className="font-bold text-xl firstColor">Engajamento:</h2>
                    <h3 className="text-white sm:max-w-200">Construir confiança e interesse.</h3>
                </div>
                <div className="gradient rounded pl-5 mb-10 pt-5">
                    <h2 className="font-bold text-xl firstColor">Atendimento:</h2>
                    <h3 className="text-white sm:max-w-200">Atendimento sob medida.</h3>
                </div>
                <div className="gradient rounded pl-5 mb-10 pt-5">
                    <h2 className="font-bold text-xl firstColor">Monetizar:</h2>
                    <h3 className="text-white sm:max-w-200">Realizar vendas.</h3>
                </div>
            </div>
        </div>
    );
}