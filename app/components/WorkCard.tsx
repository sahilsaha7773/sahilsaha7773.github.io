import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";

const WorkModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
const WorkCard = ({
  name,
  time,
  image,
  imageWidth,
  imageHeight,
  tech,
  description,
}: {
  name: string;
  time: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tech: string[];
  description: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {name}
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center flex-wrap gap-2">
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
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Tooltip content="Software Engineer Intern" placement="top-end">
        <Card className="py-4 px-4 w-full md:w-fit lg:w-fit">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover"
              src={image}
              width={imageWidth}
              height={imageHeight}
            />
          </CardBody>
          <CardFooter className="flex flex-cosl px-4 items-center justify-between">
            <div className="flex flex-col items-start pr-6">
              <p className="text-tinsy uppercases font-bold">{name}</p>
              <small className="text-default-500">{time}</small>
            </div>
            <Button
              isIconOnly
              color="default"
              variant="bordered"
              onPress={onOpen}
              className="rounded-full"
            >
              <FaRegEye />
            </Button>
          </CardFooter>
        </Card>
      </Tooltip>
    </>
  );
};

export default WorkCard;
