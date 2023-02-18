import { Box, Grid } from "@chakra-ui/react";
import PhotoUploadButton from "../components/PhotoUploadButton";
import RoomsList from "../components/RoomsList";
import UsersList from "../components/UsersList";

export default function Home() {
    return (
        <Box>
            <UsersList />
            <PhotoUploadButton />
            <RoomsList />
        </Box>
    );
}
