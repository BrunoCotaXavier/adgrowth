export const SalesStrategy = () => {
    return (
        <div className="bg-black p-10 flex sm:flex-row flex-col-reverse w-full justify-center items-center">
            <div className="w-full text-white text-lg p-5">
                <div className="sm:text-40 text-25 pb-10 leading-none">
                    <h1>Estratégia de <span className="font-bold firstColor ">Vendas/Leads</span></h1>
                </div>
                <span>
                    Uma estratégia para aumentar as vendas ou a quantidade e qualidade
                    dos leads está muito mais atrelada a estar um passo à frente dos concorrentes.
                    <br />
                    <br />
                </span>
                <span>
                    No <span className="font-bold secondColor">momento crucial em que o potencial consumidor reconhece sua necessidade e está
                    prestes a tomar uma decisão</span>, é essencial que estejamos prontos para oferecer não apenas
                    produtos ou serviços de alta qualidade, mas também um <span className="font-bold secondColor">atendimento excepcional</span>.
                    <br />
                    <br />
                </span>
                <span>
                    Ao garantir uma combinação de excelente qualidade e atendimento superior,
                    posicionamo-nos como a escolha óbvia para o consumidor.
                    <br />
                    <br />
                </span>
            </div>
            <div className="w-full flex justify-center">
                <img src="/images/leads.png" />
            </div>
        </div>
    );
}