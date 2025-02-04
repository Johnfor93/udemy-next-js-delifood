import {getMeal} from "@/lib/meals";

import Image from "next/image";
import {notFound} from "next/navigation";

export async function generateMetadata({params}){
    const data = await getMeal(params.slug);

    if(!data){
        notFound()
    }
    return {
        title: `${data.title} | DeliFood`,
        description: data.description,
    }
}

export default async function MealDescriptionPage({params}) {
    const data = await getMeal(params.slug);

    if(!data) {
        notFound();
    }

    data.instructions = data.instructions.replace(/\n/g, "<br>");
    return (
        <>
            <header className={"flex gap-12 max-w-screen-xl m-auto px-4 py-8"}>
                <div className={"relative w-[30rem] h-80"}>
                    <Image src={data.image} alt={data.title} className={"object-cover shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] motion-translate-x-in-[-22%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[30px] rounded-lg"} fill loading={"eager"}/>
                </div>
                <div className={"text-[#ddd6cb] max-w-screen-sm animate-[fade-slide-in-from-right_1s_ease-out_forwards] pt-2 pb-0 px-4 motion-translate-x-in-[22%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[30px]"}>
                    <h1 className={"text-[3.5rem] uppercase m-0 font-montserrat font-bold text-shadow-lg"}>{data.title}</h1>
                    <p className={"text-2xl text-[#cfa69b] italic"}>By: {data.creator}</p>
                    <p className={"text-2xl"}>{data.summary}</p>
                </div>
            </header>
            <main className={"motion-translate-y-in-[22%] motion-translate-x-in-[0%] motion-opacity-in-[0%] motion-blur-in-[30px]"}>
                <p className={"mt-8 text-xl leading-normal bg-[#6e6464] text-[#010101] shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] max-w-[60rem] animate-[fade-slide-in-from-bottom_1s_ease-out_forwards] mx-auto my-8 p-8 rounded-lg"}
                dangerouslySetInnerHTML={{ __html: data.instructions }}>
                </p>
            </main>
        </>
    )
}