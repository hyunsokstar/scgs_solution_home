import { useMutation } from "@tanstack/react-query";

import { Box, Button, Container, FormControl, Heading, Input, VStack, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

// import { getUploadURL } from "../api";
import { getUploadURL, uploadImage, createPhoto } from "../api";

type Props = {};

interface IForm {
    file: FileList;
}

function PhotoUploadButton({}: Props) {
    // const { register, watch } = useForm();
    // const { register, handleSubmit } = useForm<IForm>();
    const { register, handleSubmit, watch, reset } = useForm<IForm>();

    // const { roomPk } = useParams(1);
    const roomPk  = "1";
    
    const toast = useToast();
    const navigate = useNavigate();

    const createPhotoMutation = useMutation(createPhoto, {
        onSuccess: () => {
            toast({
                status: "success",
                title: "Image uploaded!",
                isClosable: true,
                description: "Feel free to upload more images.",
            });
            reset();
        },
    });

    const uploadImageMutation = useMutation(uploadImage, {
        // onSuccess: (data: any) => {
        //     console.log("upload result", data);
        // },

        onSuccess: ({ result }: any) => {
            if (roomPk) {
                createPhotoMutation.mutate({
                    description: "I love react",
                    // file: `https://imagedelivery.net/aSbksvJjax-AUC7qVnaC4A/${result.id}/public`,
                    file: `https://imagedelivery.net/GDnsAXwwoW7vpBbDviU8VA/${result.id}/public`,
                    roomPk,
                });
            }
            // navigate(`/rooms/${roomPk}`);
        },
    });

    const mutation = useMutation(getUploadURL, {
        onSuccess: (data: any) => {
            console.log("data : ", data);

            uploadImageMutation.mutate({
                uploadURL: data.uploadURL,
                file: watch("file"),
            });
        },
    });

    const onSubmit = (data: any) => {
        console.log("file data : ", data);
        mutation.mutate();
    };

    return (
        <div>
            <Box
                pb={40}
                mt={10}
                px={{
                    base: 10,
                    lg: 40,
                }}
            >
                <Container>
                    <Heading textAlign={"center"}>Upload a Photo</Heading>
                    {/* <VStack spacing={5} mt={10}> */}
                    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={5} mt={10}>
                        <FormControl>
                            <Input {...register("file")} type="file" accept="image/*" />
                        </FormControl>
                        {/* <Button w="full" colorScheme={"red"}>
                            Upload photos
                        </Button> */}
                        <Button type="submit" w="full" colorScheme={"red"}>
                            Upload photos2
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </div>
    );
}

export default PhotoUploadButton;
