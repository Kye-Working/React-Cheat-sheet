import profilePic from "./assets/Toji.png";

function Card() {
  return (
    <div className=" text-center justify-center m-3 p-3 w-1/5 border-4 border-solid border-black">
      <img src={profilePic} className=" rounded-full mx-auto" />
      <h2 className="text-base sm:text-xs md:text-2xl font-bold">Kye</h2>
      <p className="text-base sm:text-xs md:text-2xl">I am studying react</p>
    </div>
  );
}

export default Card;
