import { Box, Grid } from "@chakra-ui/react";
import PhotoUploadButton from "../components/PhotoUploadButton";
import RoomsList from "../components/RoomsList";

export default function Home() {
    return (
        <Box>
            <PhotoUploadButton />
            <RoomsList />
        </Box>
    );
}
