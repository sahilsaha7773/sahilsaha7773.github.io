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

const WorkCard = ({
  name,
  time,
  image,
  imageWidth,
  imageHeight,
  role,
  isIntern,
  tech,
  description,
}: {
  name: string;
  time: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  role: string;
  isIntern?: boolean;
  tech: string[];
  description: React.ReactNode;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-h-[80%]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {name}
                <span className="text-xs text-gray-500">{role}</span>
                <div className="flex items-center flex-wrap gap-2 mt-2">
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
              </ModalHeader>
              <ModalBody className="overflow-y-auto">
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
      <Tooltip content={role} placement="top-end">
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
