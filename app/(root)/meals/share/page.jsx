import classes from './page.module.css';

export default function ShareMealPage() {
    return (
        <>
            <header className={"gap-12 w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl mt-12 mb-20 mx-auto py-8"}>
                <h1 className={"font-montserrat text-4xl font-bold"}>
                    Share your <span className={"bg-gradient-to-r from-amber-400 to-orange-400 background-clip-text"}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={"w-[90%] max-w-[75rem] text-[white] mx-auto my-12 font-quicksand"}>
                <form className={"max-w-[50rem]"}>
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
                    IMAGE PICKER
                    <p className={"text-right"}>
                        <button type="submit" className={"text-white cursor-pointer text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] px-8 py-3 rounded-sm border-0 border-[none] bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-600 hover:to-orange-600"}>Share Meal</button>
                    </p>
                </form>
            </main>
        </>
    );
}