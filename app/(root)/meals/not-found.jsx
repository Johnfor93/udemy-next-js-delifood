import Link from "next/link";

export default function notFoundMealPage(){
    return(
        <div className={"flex flex-wrap flex-col items-center justify-center h-[80vh]"}>
            <h1 className={"text-center text-gray-50 text-5xl py-2 font-montserrat font-bold bg-gradient-to-r from-amber-400 to-orange-400 background-clip-text uppercase mb-4"}>Not Found
                Recipe Not Found
            </h1>
            <p className={"text-gray-50 text-xl mb-8"}>Unfortunately, we could not find the requested recipe.</p>
            <div className={"flex flex-wrap items-center justify-center"}>
                <Link href={"/meals"}
                      className={"text-center mx-auto bg-gradient-to-r from-amber-400 to-orange-400 uppercase text-lg px-4 py-2 font-bold font-montserrat tracking-widest text-gray-50 rounded"}>Back to Recipe List</Link>
            </div>
        </div>);
}