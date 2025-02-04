"use client"

import Link from "next/link";

export default function ErrorPage({error}) {

    return (
        <>
            <h1 className={"text-center bg-gradient-to-r from-amber-400 to-orange-400 background-clip-text uppercase text-7xl font-bold font-montserrat tracking-widest"}>An Error Occurred!</h1>
            <p className={"text-center text-gray-50 text-2xl py-2"}>{error.message}</p>

            <div className={"flex flex-wrap items-center justify-center"}>
                <Link href={"/"} className={"text-center mx-auto bg-gradient-to-r from-amber-400 to-orange-400 uppercase text-lg px-4 py-2 font-bold font-montserrat tracking-widest text-gray-50 rounded"}>Back to Home</Link>
            </div>
        </>
    )
}

/*
    Error Page must be a client component
    Error page have error props
 */