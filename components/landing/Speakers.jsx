import { useEffect, useState } from "react";
import Image from "next/future/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Container } from "@/components/landing/Container";
import { DiamondIcon } from "@/components/landing/DiamondIcon";
import davidtaylor from "@/public/landingimages/avatars/davidtaylor.png";
import ajtaylor from "@/public/landingimages/avatars/ajtaylor.png";
import davidandujo from "@/public/landingimages/avatars/davidandujo2.jpeg";
import magiobustillos from "@/public/landingimages/avatars/magiobustillos.jpeg";
import jonathanhernandez from "@/public/landingimages/avatars/jonathanhernandez.jpeg";
import diegoquintana from "@/public/landingimages/avatars/diegoquintana.jpeg";

const days = [
  {
    name: "Team ",
    date: "",
    dateTime: "",
    speakers: [
      {
        name: "David Taylor",
        role: "CEO Etherfuse",
        image: davidtaylor,
        url: "https://www.linkedin.com/in/lifehug/",
      },
      {
        name: "AJ Taylor",
        role: "CTO Etherfuse",
        image: ajtaylor,
        url: "https://www.linkedin.com/in/aj-taylor-977a5481/",
      },
      {
        name: "David Andujo",
        role: "ILUM Venture Partner",
        image: davidandujo,
        url: "https://www.linkedin.com/in/andujo/",
      },
      {
        name: "Magio Bustillos",
        role: "Hackathon Facilitator",
        image: magiobustillos,
        url: "https://twitter.com/magiobus",
      },
    ],
  },
  {
    name: "Mentores",
    date: "",
    dateTime: "",
    speakers: [
      {
        name: "Diego Quintana",
        role: "CEO Blockchain Business School",
        image: diegoquintana,
        url: "https://www.linkedin.com/in/diegoquintana13/",
      },
      {
        name: "Magio Bustillos",
        role: "Hackathon Facilitator",
        image: magiobustillos,
        url: "https://twitter.com/magiobus",
      },
    ],
  },
];

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  let id = Math.random().toString(36).substr(2, 9);
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0" id="organizers">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-happy-yellow bg-black px-2 py-2 sm:text-5xl"
          >
            Organizadores y Mentores
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-black">
            Conoce a los organizadores y mentores en tu proyecto.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        "absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        dayIndex === selectedIndex
                          ? "fill-black stroke-black "
                          : "fill-transparent stroke-black"
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          "font-mono text-xl  ",
                          dayIndex === selectedIndex
                            ? "text-happy-yellow bg-black px-2"
                            : "text-black"
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl bg-black">
                      <div
                        className={clsx(
                          "absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-happy-yellow",
                            "border-happy-yellow",
                            "border-happy-yellow",
                          ][speakerIndex % 3]
                        )}
                      />
                      <a
                        href={speaker?.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </a>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
}
