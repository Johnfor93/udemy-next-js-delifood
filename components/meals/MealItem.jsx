import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={"flex flex-col justify-between h-full rounded shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-[0.3s] ease-[ease-in-out] text-[#ddd6cb]"}>
      <header>
        <div className={"relative h-60"}>
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className={"pt-2 pb-0 px-4"}>
          <h2 className="text-2xl m-0 font-montserrat">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic m-0">by {creator}</p>
        </div>
      </header>
      <div className={"flex flex-col justify-between h-full"}>
        <p className={"pt-4 pb-0 px-4"}>{summary}</p>
        <div className={"text-right p-4"}>
          <Link href={`/meals/${slug}`} className={"inline-block text-white font-bold no-underline mt-4 px-4 py-2 rounded-lg bg-gradient-to-r to-amber-600 from-orange-600 hover:to-amber-800 hover:from-orange-800"}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
