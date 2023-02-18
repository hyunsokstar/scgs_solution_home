import {
    Box,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Switch,
    Select,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IUsersForUserList } from "../types";

// type Props = {}
interface UserModifyModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: IUsersForUserList;
}

function UserInfoModifyModal({ isOpen, onClose, user }: UserModifyModalProps) {
    const { isOpen: isUserModifyModalOpen, onClose: onUserModifyModalClose, onOpen: onUserModifyModalOpen } = useDisclosure();

    return (
        <Box>
            <Button onClick={onUserModifyModalOpen}>수정</Button>

            <Modal blockScrollOnMount={false} isOpen={isUserModifyModalOpen} onClose={onUserModifyModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>유저 정보 수정</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>username</FormLabel>
                            <Input htmlSize={40} width="auto" value={user.username} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>avatar</FormLabel>
                            <Input htmlSize={40} width="auto" value={user.avatar} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>is_host</FormLabel>
                            <Stack spacing={5} direction="row">
                                <Checkbox isChecked={user.is_host ? true : false}>주인</Checkbox>
                                <Checkbox isChecked={user.is_host ? false : true}>고객</Checkbox>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <FormLabel>성별</FormLabel>
                            <Stack spacing={5} direction="row">
                                <Checkbox isChecked={user.gender == "male"}>남자</Checkbox>
                                <Checkbox isChecked={user.gender == "feamale"}>여자</Checkbox>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <FormLabel>language</FormLabel>
                            {/* <Input htmlSize={40} width="auto" /> */}
                            <Select placeholder="Select option" defaultValue={user.language}>
                                <option value="kr">한국</option>
                                <option value="thailand">태국</option>
                                <option value="en">미국</option>
                                <option value="japan">일본</option>
                                <option value="france">프랑스</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default UserInfoModifyModal;
