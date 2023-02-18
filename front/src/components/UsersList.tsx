import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr , Text, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsersList } from "../api";

interface IUsers {
    username: string;
    avatar: string;
    is_host: string;
    gender: string;
    language: string;
}

function UsersList() {
    const { isLoading, data } = useQuery<IUsers[]>(["users"], getUsersList);

    return (
        <div>
            <Box>
                {/* {data?.map((user: IUsers) => {
                    return <div>{user.username}</div>;
                })} */}

                <Text fontSize='5xl' mb={5}> 유저 리스트 </Text>
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
                                        <Td><Button>수정</Button></Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                        {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}

export default UsersList;
