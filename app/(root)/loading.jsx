export default function mealsLoadingPage(){
    return (
        <>
            <header className={"mb-4 py-12"}>
                <div
                    className={"w-6 aspect-square rounded-full animate-loading bg-gray-50 mx-auto"}></div>
                <p className={"text-center animate-pulse text-gray-50 text-2xl py-2"}>
                    Fetching meals...
                </p>
            </header>
        </>
    )
}