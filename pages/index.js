import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/yogesh.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="Yogesh" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/12r3s8HiTvLo9r4MKzng72S4v2FA5bYV5/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Yogesh Mane
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Mechanical Engineer
            </h3>
            <p className="text-md py-5 justify-center leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
            I'm Currently Pursuing my Bachelor's Degree in Mechanical Engineering from MIT Academy of Engineering , Pune. I'm a good listener which helps to communicate well. I'm an enthusiastic person willing to learn new things and accept new challenges positively .
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/YogeshM68862568?t=wJ_XcfJKskUfaHrqdSedvA&s=09"><AiFillTwitterCircle /></a> 
              <a href="https://www.linkedin.com/in/yogesh-mane-5a4168207" ><AiFillLinkedin /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As mechanical engineers I can work in product lifecycle, from initial design and development through to installation, testing and maintenance.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including Design machinery, building and testing mechanical devices, tools and machines
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Internship
              </h3>
              <p className="py-2">
                Creating working designs suited for mechanical needs core
                design knowledge.Thanks to Saptasatiz Industry to guide me.
              </p>
              <h4 className="py-4 text-teal-600">working and learning in internship</h4>
              <p className="text-gray-800 py-1">Catia Design</p>
              <p className="text-gray-800 py-1">Die manufacturing</p>
              <p className="text-gray-800 py-1">Testing</p>

          
            </div>
            <div className="text-center shasdow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Work on projects
              </h3>
              <p className="py-2">
                Do you have any difficuilty in desinging inovative products? Let's make it a
                simple.
              </p>
              <h4 className="py-4 text-teal-600">Projects on i worked</h4>
              <p className="text-gray-800 py-1">Modified benches</p>
              <p className="text-gray-800 py-1">Alcohol detector</p>
              <p className="text-gray-800 py-1">Sanitizer and temperature analyser (SATA)</p>
              <p className="text-gray-800 py-1">Heat Transfer In Gas-Solid Fluidised Bed</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a mechanical engineer I've done Internships as
              <span className="text-black-500"> marketing  </span>
              intern for <span className="text-black-500"> NGO </span>. Design and manufacturing engineer for <span className="text-black-500"> DIE </span> manufucturing company
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Photographes of my projects.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
