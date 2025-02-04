"use client"

import ImagePicker from "@/components/ImagePicker";
import submitHandler from "@/lib/action";
import RecipeFormSubmitButton from "@/components/Form/RecipeFormSubmitButton";
import {useActionState} from "react";

export default function ShareMealPage() {
    const [state, formAction] = useActionState(submitHandler, {message: null});

    return (
        <>
            <header className={"gap-12 w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl mt-12 mb-20 mx-auto py-8"}>
                <h1 className={"font-montserrat text-4xl font-bold"}>
                    Share your <span className={"bg-gradient-to-r from-amber-400 to-orange-400 background-clip-text"}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={"w-[90%] max-w-[75rem] text-[white] mx-auto my-12 font-quicksand"}>
                <form className={"max-w-[50rem]"} action={formAction}>
                    <ImagePicker label={"Meal Image"} name={"meal-image"} required={true}></ImagePicker>

                    <div className={"flex gap-4"}>
                        <p className={"w-full mb-4 text-xl"}>
                            <label className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"} htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required  className={"block w-full rounded border text-xl text-[#ddd6cb] px-4 py-2 border-solid border-[#454952] bg-[#1c2027]"}/>
                        </p>
                        <p className={"w-full mb-4 text-xl"}>
                            <label className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"} htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required  className={"block w-full rounded border text-xl text-[#ddd6cb] px-4 py-2 border-solid border-[#454952] bg-[#1c2027]"}/>
                        </p>
                    </div>
                    <p className={"w-full mb-4 text-xl"}>
                        <label className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"} htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required  className={"block w-full rounded border text-xl text-[#ddd6cb] px-4 py-2 border-solid border-[#454952] bg-[#1c2027]"}/>
                    </p>
                    <p className={"w-full mb-4 text-xl"}>
                        <label className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"} htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required  className={"block w-full rounded border text-xl text-[#ddd6cb] px-4 py-2 border-solid border-[#454952] bg-[#1c2027]"}/>
                    </p>
                    <p className={"w-full mb-4 text-xl"}>
                        <label className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"} htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required className={"block w-full rounded border text-xl text-[#ddd6cb] px-4 py-2 border-solid border-[#454952] bg-[#1c2027]"}
                        ></textarea>
                    </p>
                    {state.message && <p className={"w-full mb-4 text-xl text-red-400"}>{state.message}</p>}
                    <p className={"text-right"}>
                        <RecipeFormSubmitButton/>
                    </p>
                </form>
            </main>
        </>
    );
}