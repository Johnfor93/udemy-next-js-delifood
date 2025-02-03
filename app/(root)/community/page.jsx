import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className={"gap-12 mt-12 mx-auto mb-20 container max-w-[75vh] text-gray-50 text-2xl text-center"}>
        <h1 className={"text-4xl font-bold leading-tight font-montserrat"}>
          One shared passion: <span className={"bg-gradient-to-r to-amber-600 from-orange-600 bg-clip-text background-clip-text"}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={"container mx-auto text-center"}>
        <h2 className="text-3xl font-bold mb-12 text-gray-50 font-montserrat">Community Perks</h2>

        <ul className={"list-none my-12 p-0 mx-0"}>
          <li className={"flex flex-col items-center gap-4 my-12"}>
            <Image src={mealIcon} className={"object-contain w-32 aspect-square"} alt="A delicious meal" />
            <p className={"font-montserrat text-2xl font-bold m-0 text-gray-50"}>Share & discover recipes</p>
          </li>
          <li className={"flex flex-col items-center gap-4 my-12"}>
            <Image src={communityIcon} className={"object-contain w-32 aspect-square"} alt="A crowd of people, cooking" />
            <p className={"font-montserrat text-2xl font-bold m-0 text-gray-50"}>Find new friends & like-minded people</p>
          </li>
          <li className={"flex flex-col items-center gap-4 my-12"}>
            <Image src={eventsIcon} className={"object-contain w-32 aspect-square"} alt="A crowd of people at a cooking event" />
            <p className={"font-montserrat text-2xl font-bold m-0 text-gray-50"}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
