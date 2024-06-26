export const Customers = () => {
    return (
        <div className="bg-black h-fll w-full text-white flex flex-col items-center justify-center pt-10">
            <div className="h-1 w-1/6 backgroundfirstColor rounded"></div>
            <div className="p-10 sm:text-xl text-sm">
                <span>+ de <span className="greenColor font-bold">120</span> empresas já atendidas</span>
            </div>
            <div className="p-10 w-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-4 flex justify-center pt-10">
                <div class="p-5 w-full h-auto flex justify-center">
                    <img className="absolute w-80 sm:w-120" src="./images/unip-customers.png" />
                    <p className="text-center opacity-40 mt-2 text-sm font-bold relative pt-20">@Unip</p>
                </div>
                <div class="p-5 w-full h-auto flex justify-center">
                    <img className="absolute w-80 sm:w-120" src="./images/petrobras-customers.png" />
                    <p className="text-center  opacity-40 mt-2 text-sm font-bold relative pt-20">@Petrobras</p>
                </div>
                <div class="p-5 w-full h-auto flex justify-center">
                    <img className="absolute w-80 sm:w-120" src="./images/safra-customers.png" />
                    <p className="text-center  opacity-40 mt-2 text-sm font-bold relative pt-20">@Safra</p>
                </div>
                <div class="p-5 w-full h-auto flex justify-center">
                    <img className="absolute w-80 sm:w-120" src="./images/combat-customers.png" />
                    <p className="text-center  opacity-40 mt-2 text-sm font-bold relative pt-20">@Combat</p>
                </div>
                <div class="p-5 w-full h-auto flex justify-center">
                    <img className="absolute w-80 sm:w-120" src="./images/loreal-customers.png" />
                    <p className="text-center  opacity-40 mt-2 text-sm font-bold relative pt-20">@L'oreal</p>
                </div>

            </div>
            <div className="flex w-full sm:flex-row flex-col pb-20 pl-20 pr-20">
                <div class="sm:p-20 p-7 w-full h-auto flex justify-center">
                    <img className="absolute" src="./images/rectangle.png"/>
                    <span className="firstColor relative pr-5 pt-5">+120</span> <span className="relative pt-5 pl-2"><span className="font-bold">Empresas</span> Atendidas </span>
                </div>
                <div class="sm:p-20 p-7 w-full h-auto flex justify-center">
                    <img className="absolute" src="./images/rectangle.png" />
                    <span className="firstColor relative pr-5 pt-5">+5</span> <span className="relative pt-5 pl-2"><span className="font-bold">Milhões</span> de Reais</span>
                </div>
                <div class="sm:p-20 p-7 w-full h-auto flex justify-center">
                    <img className="absolute" src="./images/rectangle.png" />
                    <span className="firstColor relative pr-5 pt-5">+4</span> <span className="relative pt-5 pl-2"><span className="font-bold">Anos</span> de Expêriencia </span>
                </div>
            </div>
        </div>
    );
}