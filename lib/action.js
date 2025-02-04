'use server'

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text){
    if(text || text.trim() === "") {
        return true;
    }
    return false;
}

export default async function submitHandler(prevState, formData) {
    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        image: formData.get('meal-image'),
        instructions: formData.get('instructions'),
    }

    if(
        isInvalidText(meal.title) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.name) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.include('@') ||
        !meal.image ||
        !meal.image.size === 0
    ){
        return {
            message: 'Invalid input.'
        }
    }

    await saveMeal(meal);
    revalidatePath("/meals", "layout")
    redirect("/meals");
}