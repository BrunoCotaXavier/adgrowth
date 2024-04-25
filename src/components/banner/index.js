import './banner-style.css'

export const BannerComponent = () => {
    return (
        <div className="h-screen bg-black p-10 relative pb-20">
            <div className="bg-custom-pattern h-full blur-sm sm:blur sm:bg-center bg-contain sm:bg-cover sm:bg-no-repeat opacity-40 sm:opacity-25 absolute inset-0 z-0"></div>
            <div className="relative h-full flex flex-col justify-center items-center pb-20">
                <div className="flex justify-center">
                    <div className="flex flex-col pb-10">
                        <h1 className="text-white font-bold max-w-400 sm:max-w-650 text-left pb-5 text-50 sm:text-67 comfortaa leading-none">Aumente <br/> sua receita incremental</h1>
                        <h2 className="text-white font-bold max-w-400 sm:max-w-580 text-left text-sm">TRANSFORME CLIQUES EM RESULTADOS REAIS <span className="font-light">POTENCIALIZE SUA EMPRESA COM ESTRATÉGIAS E PERFORMANCE DE EXCELÊNCIA</span></h2>
                    </div>
                </div>
                <div className="flex space-x-4 ">
                    <button className="text-white btnSuccess">INICIAR</button>
                    <button className="text-white btnAbout">LER SOBRE</button>
                </div>
            </div>
        </div>
    );
};


