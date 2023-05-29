import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "./Categoria";

const Sidebar = () => {
    const {categorias} = useQuiosco();


    return (
        <>
            <Image
                className="m-auto pt-2"
                width={130}
                height={60}
                src="\assets\img\logo.svg"
                alt="Imagen logotipo" 
            />

            <nav className="mt-10">
                {categorias.map( categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar