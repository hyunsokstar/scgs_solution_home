import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsersList } from "../api";
import UserInfoModifyModal from "./UserInfoModifyModal";

interface IUsers {
    username: string;
    avatar: string;
    is_host: string;
    gender: string;
    language: string;
}

function UsersList() {
    const { isLoading, data } = useQuery<IUsers[]>(["users"], getUsersList);
    const { isOpen: isUserModifyModalOpen, onClose: onUserModifyModalClose, onOpen: onUserModifyModalOpen } = useDisclosure();

    return (
        <div>
            <Box>
                <Text fontSize="5xl" mb={5}>
                    {" "}
                    유저 리스트{" "}
                </Text>
                <TableContainer mb={20}>
                    <Table variant="simple">
                        {/* <TableCaption>유저 리스트</TableCaption> */}

                        <Thead>
                            <Tr>
                                <Th>userName</Th>
                                <Th>avatar</Th>
                                <Th>is_host</Th>
                                <Th>gender</Th>
                                <Th>language</Th>
                                <Th>수정</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((user: IUsers) => {
                                return (
                                    <Tr>
                                        <Td>{user.username}</Td>
                                        <Td>{user.avatar}</Td>
                                        <Td>{user.is_host}</Td>
                                        <Td>{user.gender}</Td>
                                        <Td>{user.language}</Td>
                                        <Td>
                                            {/* <Button>수정</Button> */}
                                            <Button onClick={onUserModifyModalOpen}>Log in</Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <UserInfoModifyModal  isOpen={isUserModifyModalOpen} onClose={onUserModifyModalClose}/>
            </Box>
        </div>
    );
}

export default UsersList;
