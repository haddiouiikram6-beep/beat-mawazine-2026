

export const Accueil = () => {

  return (

    <>
      <p className=" flex bg-mist-500 rounded-xl w-50 text-center py-5 m-7"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
        19-27 JUIN2026.RABAT</p>
      <div className="mt-1 grid grid-cols-2 gap-8 items-center relative z-10">
        <div className="  py-5 text-2xl m-15">
          <h1 >VIVEZ LE </h1>
          <h1 className="text-pink-500" >RYTHME </h1>
          <h1> DU MONDE.</h1>
          <div className="py-5">
            <p>Découvrez le programme ,gérez <br />votre planning et gardez une mémoire <br />inoubliable de vos concerts a Mawazine.</p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl  text-cyan-300">A LA UNE CE SOIR</h1>
          <div>
            <img className="h-80 w-100" src=" src/assets/the weeknd.jpg" alt="image" />
          </div>
        </div>
      </div>

      <div className="flex  gap-5 m-auto w-11/12 items-center">
        <button className="rounded-full px-10 py-5 bg-pink-500  hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]">VOIR LE PROGRAMME</button>
        <button className="rounded-full px-10 py-5 bg-sky-500 hover:-translate-y-1  hover:scale-[1.02 ] hover : shadow[0px_20px_30px]">MON PASSPORT</button>
      </div>

    </>

  );


}