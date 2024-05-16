import React, { useRef, useState, useEffect } from 'react';
import { BtnStart } from '../btnStart';

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


    const setMsgWhats = () => {
        const element = document.getElementById('msgWhatsApp')
        if (element) {
            element.classList.remove('hidden')
        }
    }

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
        const form = formRef.current;
        const status = statusRef.current;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                status.textContent = "Email enviado com sucesso, obrigado pela preferência!";
                form.reset();
                setPage(1);
                viewCard();
                notViewForm();
                setMsgWhats();
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

    useEffect(() => {
        console.log('Page updated:', page);
    }, [page]);

    return (
        <div id='form' className="flex flex-col justify-center items-center p-10">
            <div id="title" className="pt-10 pb-10 sm:text-25 text-center">
                <span>Preencha o formulário e entraremos em <br /> contato em até <span className="greenColor font-bold">12</span> horas</span>
            </div>
            <div id='msgCard' className='text-center  text-xl sm:text-25'>
                <p ref={statusRef} id="my-form-status" className='font-bold greenColor'></p>
            </div>
            <a target='_blank' href="https://wa.link/zzn2od" id='msgWhatsApp' className='mt-5 text-white btnSuccessForm flex text-center items-center justify-center'>
                <h1 className='sm:text-xl pt-1 font-bold '>Entre em contato agora</h1>
                <img width={30} height={30} className='pl-1' src='/images/whatsLogo.svg' />
            </a>
            <form
                id="formSpree"
                ref={formRef}
                action="https://formspree.io/f/xoqgrzaj"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className='flex w-full flex-col max-w-400'>
                    <p className='text-gray-500'>- Sobre a empresa</p>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 arredondado' placeholder="Nome da empresa:" name="empresa" />
                    </div>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 arredondado' type='link' placeholder="Site:" name="site" />
                    </div>
                    <div className='p-2'>
                        <input className='p-1 w-333 border-2 arredondado' type='link' placeholder="Instagram:" name="instagram" />
                    </div>
                </div>

                {page === 2 && (
                    <div className='flex w-full flex-col max-w-400'>
                        <p className='text-gray-500 pt-5'>- Seus dados</p>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 rounded' type="text" placeholder="Nome:" name="nome" />
                        </div>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 rounded' type="email" placeholder="E-mail:" name="email" />
                        </div>
                        <div className='p-2'>
                            <input className='p-1 w-333 border-2 rounded' type="number" placeholder="Celular:" name="telefone" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-center text-gray-800 pt-2 max-w-333'>
                                Você está disposto a investir em média US$ 200/weekly com a melhor agência?
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
                        <button className='btnAbout text-white ml-5' onClick={() => setPage(1)}>Voltar</button>
                    </div>
                )}
            </form>
        </div>
    );
};
