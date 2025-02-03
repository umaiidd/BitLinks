import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "800", // ExtraBold is typically 800
  display: "swap",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex flex-col items-center justify-center">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className={`text-3xl md:text-4xl font-bold text-center md:text-left ${poppins.className}`}>
            The Best URL Shortener in the Market
          </h1>
          <p className="text-lg text-center md:text-left max-w-md">
            A fast, private, and hassle-free URL shortener—no tracking, no sign-ups, just simple link shortening.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white rounded-lg shadow-md px-5 py-2 font-semibold">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/umaiidd" target="_blank">
              <button className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white rounded-lg shadow-md px-5 py-2 font-semibold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            className="mix-blend-darken rounded-lg shadow-lg"
            alt="Illustration of a vector"
            src="/vector.jpg"
            width={500}
            height={350}
            priority
          />
        </div>
      </section>
    </main>
  );
}
