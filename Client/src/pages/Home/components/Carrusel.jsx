import { useRef } from "react";

const imagenes = [
    "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg",
    "https://pampermut.com/blog/wp-content/uploads/2020/05/Como-es-el-caracter-de-tu-perro-segun-su-horoscopo-1155x770.jpg",
    "https://www.veterinariadelbosque.com/images/articulos/th-cachorros.jpg",
    "https://hospitalveterinariodonostia.com/wp-content/uploads/2022/02/Personalidad-gatos.png",
    "https://letraslibres.com/wp-content/uploads/2023/11/gato-domestico-evolucion.jpg",
    "https://media.revistagq.com/photos/5ca5fe4e3492a90c37bf1d13/master/w_1600%2Cc_limit/huron_gq_9670.jpg",
    "https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/10/13/6347b1172c410.jpeg"

];

export const Carrusel = () => {
    const slider = useRef();

    const scroll = (offset) => {
        if (slider.current) {
            slider.current.scrollLeft += offset;
        }
    };

    return (
        <div className="mx-24 mt-10">
            <div className="flex items-center justify-center w-full h-96 relative">
                <button
                    className="bg-gray-500 rounded-full p-2 mx-2 z-10"
                    onClick={() => scroll(-200)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                </button>

                <div
                    ref={slider}
                    className="overflow-x-auto whitespace-nowrap scroll-smooth snap-x scrollbar-hide"
                >
                    {imagenes.map((imagen, index) => (
                        <div
                            key={index}
                            className="inline-block snap-start mx-2 w-80 h-96 rounded overflow-hidden"
                        >
                            <img
                                src={imagen}
                                alt={`imagen-${index}`}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="bg-gray-500 rounded-full p-2 mx-2 z-10"
                    onClick={() => scroll(200)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};
