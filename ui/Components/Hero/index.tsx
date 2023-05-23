/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
export function Hero() {
    return (
        <>
            <div className='bg-center-fixed relative flex h-screen items-center bg-[url("/hero.jpg")] bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container z-10 mx-auto px-4">
                    <div className="tex-white flex max-w-[780px] flex-col gap-[40px]">
                        <h1 className="head_text">
                            Compreender,
                            <br className="max-md:hidden" />
                            <span className="orange_gradient text-center">
                                {' '}
                                entregar e surpreender.
                            </span>
                        </h1>
                        <p className="text-left text-white ">
                            Como deseja que a sua marca seja vista no mercado? Aqui vamos
                            desenvolver estratégias de reconhecimento, relacionamento e presença.
                            Tudo de acordo com os seus valores, além dos objetivos e público que
                            pretende alcançar.
                        </p>
                    </div>

                    <div className="mt-10 flex w-96 items-center justify-center gap-x-8">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Vamos conversar?
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Mais detalhe <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
