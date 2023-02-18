import { useMutation } from "@tanstack/react-query";
import { getUploadURL } from "../api";

import { Box, Button, Container, FormControl, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

type Props = {};


interface IForm {
    file: FileList;
}

function PhotoUploadButton({}: Props) {
    // const { register, watch } = useForm();
    const { register, handleSubmit } = useForm<IForm>();

    const { roomPk } = useParams();

    const mutation = useMutation(getUploadURL, {
        onSuccess: (data: any) => {
            console.log("data : ", data);
        },
    });

    const onSubmit = (data: any) => {
        // console.log("data : ", data);
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
