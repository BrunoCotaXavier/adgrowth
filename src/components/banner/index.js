import './banner-style.css'

export const BannerComponent = () => {
    return (
        <div className="bg-black pl-20 pr-20 p-5 relative">
            <div className="bg-custom-pattern h-full sm:blur sm:bg-center bg-contain sm:bg-cover sm:bg-no-repeat opacity-30 sm:opacity-25 absolute inset-0 z-0"></div>
            <div className="relative flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <div className="flex flex-col pb-10">
                        <h1 className="text-white font-bold max-w-400 sm:max-w-580 text-left pb-5 text-50 sm:text-67 leading-none">Aumente <br/> sua receita incremental</h1>
                        <h2 className="text-white max-w-400 sm:max-w-580 text-left text-sm"><span className='font-bold'>TORNE-SE O Nº1 NO GOOGLE</span> E AUMENTE SUA RELEVÂNCIA NAS REDES SOCIAIS </h2>
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


