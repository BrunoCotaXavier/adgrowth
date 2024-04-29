export const BrandStrategy = () => {
    return (
        <div className="p-10 flex sm:flex-row flex-col justify-center items-center gradient-right">
            <div className="w-full flex justify-center">
                <img src="/images/brand.png"/>
            </div>
            <div className="w-full text-white text-lg p-5">
                <div className="sm:text-40 text-25 pb-10">
                    <h1>Estratégia de <span className="font-bold firstColor">Brand</span></h1>   
                </div>
                <span>
                    Uma estratégia de marca eficaz envolve uma combinação de elementos essenciais que 
                    colaboram para estabelecer uma identidade única e uma proposição de valor distintiva.
                    <br/>
                    <br/>
                </span>
                <span>
                    Este conjunto não apenas diferencia sua marca no mercado competitivo, 
                    mas também fomenta uma conexão emocional com seu público-alvo.
                    <br/>
                    <br/>
                </span>
                <span>
                    <span className="font-bold secondColor">Para que sua marca se torne sinônimo de uma categoria específica: </span>
                     como a associação instantânea entre "carro elétrico" e a marca Tesla
                    <br/>
                    <br/>
                </span>
            </div>
        </div>
    );
}