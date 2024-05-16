export const Header = () => {
    return (
        <div className="w-full flex justify-between p-5 bg-black">
            <div>
                <img width={50} height={50} src="/images/logo.svg" /> 
            </div>
            <div className="flex pt-3">
                <a href="/#form">
                    <p className="font-medium text-white">Contatos</p>
                </a>
            </div>
        </div>
    );
}