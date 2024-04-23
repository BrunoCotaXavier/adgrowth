import './banner-style.css'

export const BannerComponent = () => {
    return (
        <div className="h-screen bg-black relative">
            <div className="bg-custom-pattern h-full bg-cover sm:bg-contain bg-no-repeat opacity-20 sm:opacity-10 absolute inset-0 z-0"></div>
            <div className="relative h-full flex flex-col justify-center items-center pb-20">
                <div className="text-center p-5">
                    <h1 className="text-white font-bold text-left pb-5 text-40 max-w-650 leading-none">Aumente sua receita incremental e eleve seu ROAS</h1>
                    <h2 className="text-white font-bold text-left sm:text-xl">TRANSFORME CLIQUES EM RESULTADOS REAIS <span className="font-light">POTENCIALIZE SUA <br /> EMPRESA COM ESTRATÉGIAS E PERFORMANCE DE EXCELÊNCIA</span></h2>
                </div>
                <div className="flex space-x-4 pt-5">
                    <button className="text-white btnSuccess">INICIAR</button>
                    <button className="text-white btnAbout">LER SOBRE</button>
                </div>
            </div>
        </div>
    );
};


