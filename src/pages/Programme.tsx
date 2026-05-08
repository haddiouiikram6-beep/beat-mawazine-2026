export const Programme = () => {
    return (
        <div className=" flex py-20 gap-15 m-18 ">
            <div className="flex-col text-center">
                <img className=" w-60 h-80 outline-2 outline-offset-2 outline-blue-500 hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]" src="src/assets/soolking.webp" alt="soolking" />
                <h1>Soolking</h1>
                <p>19 JUIN2026.RABAT</p>
            </div>
            <div className="flex-col text-center">
                <img className="w-60 h-80 outline-2 outline-offset-2 outline-pink-500 hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]" src="src/assets/the-weeknd.webp" alt="the weekend" />
                <h1>The Weeknd</h1>
                <p>22 JUIN2026.RABAT</p>
            </div>
            <div className="flex-col text-center">
                <img className="w-60 h-80 outline-2 outline-offset-2 outline-green-300 hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]" src="src/assets/manal.jpg" alt="manal" />
                <h1>Manal</h1>
                <p>24 JUIN2026.RABAT</p>
            </div>
            <div className="flex-col text-center ">
                <img className="w-60 h-80 outline-2 outline-offset-2 outline-red-500 hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]" src="src/assets/adele.webp" alt="adel" />
                <h1>Adele</h1>
                <p>26 JUIN2026.RABAT</p>
            </div>
        </div>
    );
}