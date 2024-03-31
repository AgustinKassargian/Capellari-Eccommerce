import CarouselBanner from "./CarouselBanner"
export default function Banner(){
    return(
        <div className="flex flex-col justify-center w-full items-center p-8">
                <h2 className="text-center">Titulo de Banner</h2>
            <CarouselBanner/>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="btn btn-primary">
                        Boton 1
                    </button>
                    <button  className="btn btn-secondary">
                        Boton 2
                    </button>
                </div>
        </div>
    )
}