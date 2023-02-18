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
} from "@chakra-ui/react";
import React from "react";

// type Props = {}
interface UserModifyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function UserInfoModifyModal({ isOpen, onClose }: UserModifyModalProps) {
    return (
        <Box>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>유저 정보 수정</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>username</FormLabel>
                            <Input htmlSize={40} width="auto" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>avatar</FormLabel>
                            <Input htmlSize={40} width="auto" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>is_host</FormLabel>
                            <Stack direction="row">
                                <Switch colorScheme="teal" size="md" />
                            </Stack>{" "}
                        </FormControl>
                        <FormControl>
                            <FormLabel>성별</FormLabel>
                            <Stack spacing={5} direction="row">
                                <Checkbox>남자</Checkbox>
                                <Checkbox>여자</Checkbox>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <FormLabel>language</FormLabel>
                            {/* <Input htmlSize={40} width="auto" /> */}
                            <Select placeholder="Select option">
                                <option value="option1">한국</option>
                                <option value="option2">태국</option>
                                <option value="option3">미국</option>
                                <option value="option3">일본</option>
                                <option value="option3">프랑스</option>
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
