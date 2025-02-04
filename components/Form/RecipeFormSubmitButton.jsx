"use client"

import {useFormStatus} from "react-dom";

export default function RecipeFormSubmitButton() {
    const {pending} = useFormStatus();

    return (
        <>
            <button type="submit" className={"text-white cursor-pointer text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] px-8 py-3 rounded-sm border-0 border-[none] bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-600 hover:to-orange-600"} disabled={pending}>{!pending ? 'Share Meal' : "Submiting..."}</button>
        </>
    )
}