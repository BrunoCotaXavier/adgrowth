import React, { useRef, useState, useEffect } from 'react';

export const FormSpree = () => {
    const formRef = useRef(null);
    const statusRef = useRef(null);
    const [page, setPage] = useState(1); // controla qual página está sendo exibida

    const handleNext = (event) => {
        const status = statusRef.current;
        status.textContent = "";
        event.preventDefault();
        setPage(2);
        notViewCard(); // vai para a próxima página de perguntas
    };

    const viewCard = () => {
        const element = document.getElementById('msgCard');
        if (element) {
            element.classList.remove('hidden');
        }
    }
    const notViewCard = () => {
        notViewTitle();
        const element = document.getElementById('msgCard');
        if (element) {
            element.classList.add('hidden');
        }
    }

    const notViewTitle = () => {
        const element = document.getElementById('title');
        if (element) {
            element.classList.add('hidden');
        }
    }

    const notViewForm = () => {
        const element = document.getElementById('formSpree');
        if (element) {
            element.classList.add('hidden');
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Formulário enviado');
        const form = formRef.current;
        const status = statusRef.current;
        const data = new FormData(form);

        // Submissão assíncrona do formulário
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                status.textContent = "Email enviado com sucesso, obrigado pela preferencia!";
                form.reset();
                setPage(1);
                viewCard(); // volta para a primeira página após a submissão
                notViewForm();
            } else {
                const responseData = await response.json();
                setPage(1);
                viewCard();
                if (responseData.errors) {
                    status.textContent = responseData.errors.map((error) => error.message).join(', ');
                } else {
                    status.textContent = "Oops! Houve um problema ao enviar o formulário.";
                }
            }
        } catch (error) {
            setPage(1);
            viewCard();
            status.textContent = "Oops! Houve um problema ao enviar o formulário.";
        }
    };

    // Verifique se o estado mudou
    useEffect(() => {
        console.log('Page updated:', page);
    }, [page]);

    return (
        <div id='form' className="flex flex-col justify-center items-center p-10">
            <div id="title" className="pt-10 pb-10 sm:text-25 text-center">
                <span>Preencha o formulário e entraremos em <br /> contato em até <span className="greenColor font-bold">12</span> horas</span>
            </div>
            <div id='msgCard' className='text-center  sm:text-25 hidden'>
                <p ref={statusRef} id="my-form-status" className='text-black'></p>
            </div>
            <form
                id="formSpree"
                ref={formRef}
                action="https://formspree.io/f/xbjnqbwy"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className='flex w-full flex-col max-w-400'>
                    <p className='text-gray-500'>- Seus dados</p>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 rounded' type="text" placeholder="Nome:" name="nome" />
                    </div>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 rounded' type="email" placeholder="E-mail:" name="email" />
                    </div>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 rounded' type="number" placeholder="Celular:" name="telefone" />
                    </div>
                </div>

                {page === 2 && (
                    <div className='flex w-full flex-col max-w-400'>
                        <p className='text-gray-500 pt-5'>- Sobre a empresa</p>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 arredondado' placeholder="Nome da empresa:" name="empresa" />
                        </div>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 arredondado' placeholder="Qual segmento:" name="segmento" />
                        </div>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 arredondado' type='link' placeholder="Site:" name="site" />
                        </div>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 arredondado' type='link' placeholder="Instagram:" name="instagram" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-center text-gray-800 pt-2 max-w-333'>
                                Você está disposto a investir US$ 700/month com a melhor agência?
                            </span>
                            <div className='flex justify-center items-center pt-2'>
                                <input type="radio" id="sim" name="transport" value="sim" />
                                <p className='pr-5 pl-1'>Sim</p>
                                <input type="radio" id="não" name="transport" value="nao" />
                                <p className='pl-1 pr-5'>Não</p>
                            </div>
                        </div>
                    </div>
                )}

                {page === 1 ? (
                    <div className='flex justify-center p-5'>
                        <button className='btnSuccess text-white' onClick={handleNext}>Next</button>
                    </div>
                ) : (
                    <div className='flex justify-center p-5'>
                        <a href='#/form'>
                            <button className='btnSuccess text-white' type="submit">Enviar</button>
                        </a>
                        <button className='btnAbout btnSuccess text-white ml-5' onClick={() => setPage(1)}>Voltar</button>
                    </div>
                )}
            </form>
        </div>
    );
};
