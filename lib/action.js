'use server'

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export default async function submitHandler(formData) {
    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        image: formData.get('meal-image'),
        instructions: formData.get('instructions'),
    }

    await saveMeal(meal);
    redirect("/meals");
}