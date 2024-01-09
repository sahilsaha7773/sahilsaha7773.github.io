import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";

export default function ProjectCard({
  name,
  description,
  github,
  tech,
  image,
}: {
  name: string;
  description: string;
  github: string;
  tech: string[];
  image: string;
}) {
  return (
    <Card className="max-w-[400px] py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small> */}
        <h4 className="font-bold text-large">{name}</h4>
        <div className="flex items-center flex-wrap gap-2 my-5">
          {tech.map((t) => {
            return (
              <Chip
                key={t}
                className=""
                color="default"
                // size="mini"
                // label={t}
              >
                {t}
              </Chip>
            );
          })}
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            // width={270}
            height={200}
          />
        </div>
        <div className="flex flex-col my-5">
          {/* <p className="text-small text-default-500">nextui.org</p> */}
          <p>{description}</p>
        </div>
      </CardBody>
      <Divider />
      {/* <CardBody>
      </CardBody> */}
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={github}>
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
