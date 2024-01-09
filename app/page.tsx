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
    <main className="dark text-foreground bg-background">
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <Card
          className="mx-5 mt-10 lg:my-10 lg:ml-10 lg:mr-5 shadow-sm mx transslate-x-[-200%]"
          id="info"
        >
          <CardBody className="lg:grid md:grid grid-cols-6 items-center justify-center gap-5 py-10 lg:p-5 md:p-5">
            <div className="relative col-span-2 md:col-span-2">
              <Image
                width={200}
                height={200}
                radius="full"
                alt="NextUI hero Image"
                src="me.jpeg"
                // src="https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg"
              />
            </div>
            <div className="flex flex-col justify-center text-nowrap">
              <div className="text-3xl lg:text-5xl font-bold text-inherit">
                Sahil Saha
              </div>
              <div className="text-xl lg:text-2xl mt-2">Codes for fun</div>
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
                <Button
                  isIconOnly
                  color="default"
                  className="text-xl lg:text-3xl"
                  variant="faded"
                  onClick={() => {
                    window.open("https://www.instagram.com/_.sahil.s._/");
                  }}
                >
                  <FaInstagram />
                </Button>
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

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                width="40"
                alt="csharp logo"
              />

              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                width="40"
                alt="php logo"
              />

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
          <WorkCard
            name="Let's Dive"
            time="Nov 23 - Feb 24"
            image="Dive.png"
            imageWidth={150}
            imageHeight={150}
            description="Revamped React front end pages, fixed bugs and added new features to prod which improved the user experience
            significantly while collaborating with the backend team to integrate APIs."
            tech={["React", "TypeScript", "JavaScript", "CSS", "HTML", "Redux"]}
          />
          <WorkCard
            name="Appwrite"
            time="May 23 - Aug 23"
            image="appwrite2.svg"
            imageWidth={80}
            imageHeight={150}
            description="Created a lite and fast open-source micro PHP library that provides a convenient and flexible way to perform HTTP
            requests in PHP applications and will be used everywhere in Appwrite.
            Worked on the appwrite SDK generator and updated the API specs to include error types constants in all the SDKs."
            tech={["PHP"]}
          />
          <WorkCard
            name="Urban Ladder"
            time="Aug 22 - Nov 22"
            image="urbanLadder.svg"
            imageWidth={150}
            imageHeight={150}
            description="Integrated jaegar request tracing across microservices which helped to monitor and troubleshoot problems across services."
            tech={["Ruby on Rails"]}
          />
          <WorkCard
            name="TruckX"
            time="Feb 22 - Aug 22"
            image="truckxLogo.png"
            imageWidth={150}
            imageHeight={150}
            description={`Written microservices to support new types of IOT tracking devices.
        ${"\n"}Developed parsers for data that were sent from IOT devices that follows new communication protocols and fixed bugs of
            multiple microservices.`}
            tech={["Python", "Microservices", "Docker", "Kubernetes"]}
          />
        </div>
      </div>
      <Divider />
      <div className="mx-auto my-10" id="contactMe">
        <div className="lg:flex justify-center">
          <div className="flex-1">
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
