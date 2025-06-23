"use client";
import {
  Button,
  Card,
  CardBody,
  Code,
  Divider,
  Image,
  Input,
  Textarea,
} from "@nextui-org/react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import WorkCard from "./components/WorkCard";
import * as contactLottie from "../public/contactLottie.json";
import Lottie from "react-lottie";
import { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const workExperiences = useMemo(() => [
    {
      name: "VideoVerse",
      time: "Jun 2024 - Present",
      image: "vvlogo.png",
      imageWidth: 150,
      imageHeight: 150,
      role: "Software Development Engineer I",
      description: (
        <div>
          • Revamped legacy React.js + Redux frontend, resulting in a significant improvement in page load times and a high reduction in UI‑related bugs.<br />
          • Took full ownership of the front‑end codebase, resolving 90% of on‑call tickets within SLA.<br />
          • Migrated front‑end build system from CRA to Rsbuild, cutting build and debugging times by over 50%.<br />
          • Built robust, event‑driven backend features by leveraging AWS SQS and SNS for decoupled service communication and enhanced fault toler‑
          ance in distributed systems.<br />
          • Developed backend services using NestJS, TypeScript and PostgreSQL, supporting migration from monolith to microservices.<br />
          • Delivered 2+ internal full‑stack tools to automate operational tasks, reducing manual workload by 90%.
        </div>
      ),
      tech: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Redux", "Nest JS", "MongoDB", "Postgres", "Docker", "AWS"]
    },
    {
      name: "Let's Dive",
      time: "Nov 2023 - Feb 2024",
      image: "Dive.png",
      imageWidth: 150,
      imageHeight: 150,
      isIntern: true,
      role: "Software Engineer Intern",
      description: "Revamped React front end pages, fixed bugs and added new features to prod which improved the user experience significantly while collaborating with the backend team to integrate APIs.",
      tech: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Redux"]
    },
    {
      name: "Appwrite",
      time: "May 2023 - Aug 2023",
      image: "appwrite2.svg",
      imageWidth: 80,
      imageHeight: 150,
      isIntern: true,
      role: "Software Engineer Intern",
      description: "Created a lite and fast open-source micro PHP library that provides a convenient and flexible way to perform HTTP requests in PHP applications and will be used everywhere in Appwrite. Worked on the appwrite SDK generator and updated the API specs to include error types constants in all the SDKs.",
      tech: ["PHP"]
    },
    // {
    //   name: "Urban Ladder",
    //   time: "Aug 22 - Nov 22",
    //   image: "urbanLadder.svg",
    //   imageWidth: 150,
    //   imageHeight: 150,
    //   isIntern: true,
    //   description: "Integrated jaegar request tracing across microservices which helped to monitor and troubleshoot problems across services.",
    //   tech: ["Ruby on Rails"]
    // },
    {
      name: "TruckX",
      time: "Feb 2022 - Aug 2022",
      image: "truckxLogo.png",
      imageWidth: 150,
      imageHeight: 150,
      isIntern: true,
      role: "Software Engineer Intern",
      description: `Written microservices to support new types of IOT tracking devices.\nDeveloped parsers for data that were sent from IOT devices that follows new communication protocols and fixed bugs of multiple microservices.`,
      tech: ["Python", "Microservices", "Docker", "Kubernetes"]
    }
  ], []);

  const contactLottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: contactLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, []);
  const [state, handleSubmit] = useForm("meqpnjyo");

  return (
    <main className="dark text-foreground bg-background overflow-x-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <Card
          className="mx-5 mt-10 lg:my-10 lg:ml-10 lg:mr-5 shadow-sm mx transslate-x-[-200%]"
          id="info"
        >
          <CardBody className="lg:grid md:grid grid-cols-6 md:grid-cols-12 items-center justify-center gap-5 py-10 lg:p-5 md:p-5">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                width={200}
                height={200}
                radius="full"
                src="me.jpeg"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8 justify-center text-nowrap">
              <div className="text-3xl lg:text-5xl font-bold text-inherit">
                Sahil Saha
              </div>
              <div className="text-xl lg:text-2xl mt-2">Software Engineer</div>
              <div className="flex gap-3 lg:gap-5 mt-5">
                <Button
                  isIconOnly
                  className="text-xl lg:text-3xl"
                  color="default"
                  // color="warning"
                  variant="faded"
                  // aria-label="Take a photo"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/sahil-saha-76478516b/"
                    );
                  }}
                >
                  <FaLinkedinIn />
                </Button>
                <Button
                  isIconOnly
                  color="default"
                  className="text-xl lg:text-3xl"
                  variant="faded"
                  onClick={() => {
                    window.open("https://github.com/sahilsaha7773");
                  }}
                >
                  <FaGithub />
                </Button>
                {/* <Button
                  isIconOnly
                  color="default"
                  className="text-xl lg:text-3xl"
                  variant="faded"
                  onClick={() => {
                    window.open("https://www.instagram.com/_.sahil.s._/");
                  }}
                >
                  <FaInstagram />
                </Button> */}
                <Button
                  isIconOnly
                  color="default"
                  className="text-xl lg:text-3xl"
                  variant="faded"
                  onClick={() => {
                    window.open("mailto:sahilsaha7773@gmail.com");
                  }}
                >
                  <FaEnvelope />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="mx-5 my-10 lg:mr-10 lg:ml-5 shadow-sm mx">
          {/* <CardHeader>
            <div className="text-3xl mx-5 font-semibold">☕️</div>
          </CardHeader>
          <Divider /> */}
          <CardBody>
            <div className="flex justify-center lg:justify-normal items-center my-5 gap-5 mx-5 flex-wrap">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width="40"
                alt="javascript logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width="40"
                alt="typescript logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width="40"
                alt="react logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                width="40"
                alt="html5 logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width="40"
                alt="css3 logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                width="40"
                alt="python logo"
              />

              {/* <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                width="40"
                alt="csharp logo"
              /> */}

              {/* <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                width="40"
                alt="php logo"
              /> */}

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                width="40"
                alt="nextjs logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                width="40"
                alt="cplusplus logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                width="40"
                alt="java logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                width="40"
                alt="flutter logo"
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <Divider />
      <div className="mx-10 my-10" id="experience">
        <div className="text-3xl font-semibold">Experience</div>
        <div className="text-xl font-semibolds text-gray-400 mt-2">
          {"Places I have worked at"}
        </div>
        <div className="flex flex-wrap justify-center lg:justify-normal gap-10 mt-5">
          {workExperiences.map((experience) => (
            <WorkCard
              key={experience.name}
              name={experience.name}
              time={experience.time}
              image={experience.image}
              imageWidth={experience.imageWidth}
              imageHeight={experience.imageHeight}
              description={experience.description}
              tech={experience.tech}
              role={experience.role}
              isIntern={experience.isIntern}
            />
          ))}
        </div>
      </div>
      <Divider />
      <div className="mx-auto my-10" id="contactMe">
        <div className="lg:flex justify-center">
          <div className="flex-1 mx-8">
            <Lottie
              options={contactLottieOptions}
              height={350}
              width={400}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="mx-10 flex-1">
            <div className="text-3xl font-semibold">Wanna have a chat?</div>
            <div className="text-xl font-semibolds text-gray-400 mt-2">
              {"Send me a message"}
            </div>

            <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
              <Input
                isRequired
                label="Name"
                placeholder="Sahil Saha"
                className="max-w-xl"
              />
              <Input
                isRequired
                type="email"
                id="email"
                label="Email"
                placeholder="sahil@saha.in"
                className="max-w-xl"
              />
              <Textarea
                isRequired
                label="Message"
                id="message"
                // labelPlacement="outside"
                placeholder="Ask me anything tech"
                className="max-w-xl"
              />
              {state?.errors ? (
                <Code color="danger">
                  {state?.errors.getFormErrors().toString()}
                </Code>
              ) : null}
              <Button
                color="default"
                variant="bordered"
                className="max-w-xl"
                type="submit"
              >
                {state?.succeeded ? "Message sent succesfully!" : "Send"}
              </Button>
            </form>
          </div>
        </div>
        {/* <div className="flex gap-10 mt-5">
        <Card className="shadow-sm">
          <CardBody>
            <div className="flex items-center gap-5">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                width="40"
                alt="linkedin logo"
              />
              <div className="text-xl font-semibold">LinkedIn</div>
            </div>
          </CardBody>
        </Card>
        <Card className="shadow-sm">
          <CardBody>
            <div className="flex items-center gap-5">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                width="40"
                alt="github logo"
              />
              <div className="text-xl font-semibold">GitHub</div>
            </div>
          </CardBody>
        </Card>
        <Card className="shadow-sm">
          <CardBody>
            <div className="flex items-center gap-5">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg"
                width="40"
                alt="instagram logo"
              />
              <div className="text-xl font-semibold">Instagram</div>
            </div>
          </CardBody>
        </Card>
        <Card className="shadow-sm">
          <CardBody>
            <div className="flex items-center gap-5">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                width="40"
                alt="twitter logo"
              />
              <div className="text-xl font-semibold">Twitter</div>
            </div>
          </CardBody>
        </Card>
       </div> */}
      </div>
    </main>
  );
}
