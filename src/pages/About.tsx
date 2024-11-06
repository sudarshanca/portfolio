// import Image from 'next/image';

import Image from "next/image";

export default function About() {
  return (
    <section  className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50" id="About">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="self-center">
          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className=" text-sm font-medium text-gray-700">About me</p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          {/* Image Section */}
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image
                alt="Fullpose of Sudarshan"
                width={1833}
                height={1318}
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                style={{ objectFit: 'cover' }}
                src="/sudarshan-full.jpg"
              />
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex max-w-xl flex-col gap-6 text-gray-600">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900">
              Curious about me? Here you have it:
            </h3>
            <p className=" text-base">
              I'm a passionate,{' '}
                self-proclaimed designer
              who specializes in full stack development (React.js & Node.js). I
              am enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to
              me.
            </p>
            <p className=" text-base">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className=" text-base">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            
            <p className=" text-base">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
            <br />
              
            {/* Social Links */}
            <div className="flex gap-1">
            <a href="https://github.com/sudarshanca" target="_blank" style={{textDecoration: 'none'}}>
              <button className="flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 10c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path>
                </svg>
              </button>
              </a>
            <a href="https://www.figma.com/@sudarshanreddyc" target="_blank" style={{textDecoration: 'none'}}>
              <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-gray-600"
                >
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                </svg>
              </button>
                  </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
