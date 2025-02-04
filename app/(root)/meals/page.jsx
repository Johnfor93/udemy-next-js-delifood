import MealGrid from "@/components/meals/MealGrid";
import Link from "next/link";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meal(){
    const meals = await getMeals();

    return (
        <MealGrid meals={meals} />
    )
}

export default async function MealsPage() {

  return (
    <>
      <header className={"gap-12 mt-12 mx-auto mb-6 w-[90%] max-w-[90rem] text-gray-50 text-2xl py-8"}>
        <h1 className={"text-4xl font-bold leading-tight font-montserrat mb-8"}>
          Delicious Meal, created <span className={"bg-gradient-to-r to-amber-600 from-orange-600 bg-clip-text background-clip-text"}>by you</span>
        </h1>
        <p className="mb-4">Choose your favorite recipe and cook it yourself. It's a unique experience and enjoy!</p>
        <p>
          <Link href="/meals/share" className={"inline-block px-4 py-2 rounded-lg text-white font-bold no-underline bg-gradient-to-r to-amber-600 from-orange-600 hover:to-amber-800 hover:from-orange-800"}>
            Share Your Recipe
          </Link>
        </p>
      </header>

      <main className={" mx-auto text-gray-50 text-2xl text-center py-8"}>
          <Suspense fallback={
              <>
                  <div
                      className={"w-6 aspect-square rounded-full animate-loading bg-gray-50 mx-auto"}></div>
                  <p className={"text-center animate-pulse text-gray-50 text-2xl py-2"}>
                      Fetching meals...
                  </p>
              </>
          }>
              <Meal />
          </Suspense>
      </main>
    </>
  );
}
