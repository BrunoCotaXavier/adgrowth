export const Offer = () => {
    return (
        <div className="bg-black p-10 flex sm:flex-row flex-col-reverse w-full justify-center items-center">
            <div className="w-full text-white text-lg p-5">
                <div className="sm:text-40 text-25 pb-10 leading-none">
                    <h1>O que <span className="font-bold firstColor ">Oferecemos</span></h1>
                </div>
                <span>
                    - Gerenciamento de Campanhas
                    <br />
                    - Instalação de Tag (GTM e GA4)
                    <br />
                    - Auxilio com o site
                    <br />
                    - Criativos de qualidade
                    <br />
                    - Relatórios mensais
                    <br />
                    - Reuniões semanais ou quinzenais
                    <br />
                    <br />
                </span>
                <div className="sm:text-40 text-25 pb-10 leading-none">
                    <h1>O que Fazemos <span className="font-bold firstColor ">Juntos</span></h1>
                </div>
                <span>
                    - Planejamento anual de marketing (promoções, sazonalidades e lançamentos)
                    <br />
                    - Definição de público
                    <br />
                    - Revisão do atendimento personalizado do time comercial
                    <br />
                    - Planejamento de conteúdo
                    <br />
                    <br />
                </span>
            </div>
            <div className="w-full flex justify-center">
                <img src="/images/offer.png" />
            </div>
        </div>
    );
}