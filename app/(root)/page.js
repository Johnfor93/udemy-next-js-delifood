import Link from "next/link";
import ImageSlideshow from "@/components/images/ImageSlideshow";

export default function Home() {
  return (
      <>
          <div id={"hero-section"} className={"flex mx-auto container gap-12 mt-36 mb-12 justify-center items-center"}>
              <div id={'slide-show'} className={"w-[40rem] h-[25rem]"}>
                <ImageSlideshow />
              </div>

              <div>
                  <div className={"text-[#ddd6cb] text-xl"}>
                      <h1 className={"text-3xl font-montserrat font-bold tracking-widest uppercase bg-gradient-to-r to-amber-600 from-orange-600 bg-clip-text background-clip-text mb-4"}>Heavenly Taste on DeliFood</h1>
                      <p>Taste and tell food from all over the world!</p>
                  </div>

                  <div className={"flex gap-4 text-xl mt-4"}>
                      <Link className={"inline-block px-0 py-2 rounded-lg text-amber-400  hover:text-amber-600  active:text-amber-600"} href="/community">Join the Community</Link>
                      <Link className={"inline-block px-4 py-2 rounded-lg text-white font-bold no-underline bg-gradient-to-r to-amber-600 from-orange-600 hover:to-amber-800 hover:from-orange-800"} href="/meals">Explore Meals</Link>
                  </div>
              </div>
          </div>
          <main>
              <section className={"flex flex-col text-[#ddd6cd] max-w-[50rem] w-11/12 mt-8 mx-auto text-center gap-4"}>
                  <h2 className={"text-2xl font-bold mb-4"}>How it works</h2>
                  <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                  </p>
                  <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                  </p>
              </section>

              <section className={"flex flex-col text-[#ddd6cd] max-w-[50rem] w-11/12 mt-8 mx-auto text-center gap-4"}>
                  <h2 className={"text-2xl font-bold mb-4"}>Why NextLevel Food?</h2>
                  <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                  </p>
                  <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                  </p>
              </section>
          </main>
      </>
  );
}