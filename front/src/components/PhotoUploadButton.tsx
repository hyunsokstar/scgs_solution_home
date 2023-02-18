import { useMutation } from "@tanstack/react-query";

import { Box, Button, Container, FormControl, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

// import { getUploadURL } from "../api";
import { getUploadURL, uploadImage } from "../api";

type Props = {};

interface IForm {
    file: FileList;
}

function PhotoUploadButton({}: Props) {
    // const { register, watch } = useForm();
    // const { register, handleSubmit } = useForm<IForm>();
    const { register, handleSubmit, watch } = useForm<IForm>();

    const { roomPk } = useParams();

    const uploadImageMutation = useMutation(uploadImage, {
        onSuccess: (data: any) => {
            console.log("upload result", data);
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
