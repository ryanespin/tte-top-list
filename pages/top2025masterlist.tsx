import { HStack, List, ListItem, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { callersList } from "./api/listData/top202025/callersList"
import { anthonysList } from "./api/listData/top202025/anthonyList";
import { GameList } from "@/components/elements/TopListItem";
import { arwenList } from "./api/listData/top202025/arwenList";
import { chrisList } from "./api/listData/top202025/chrisList";
import { daniellesList } from "./api/listData/top202025/daniellesList";
import { oliviasList } from "./api/listData/top202025/oliviasList";
import { ryansList } from "./api/listData/top202025/ryansList";

function getKeys(o: GameList) {
  return Object.keys(o).flatMap(k => k);
}

export default function Top2025MasterList() {

  const callerKeys = getKeys(callersList);
  const anthonyKeys = getKeys(anthonysList);
  const arwenKeys = getKeys(arwenList);
  const chrisKeys = getKeys(chrisList);
  const danielleKeys = getKeys(daniellesList);
  const oliviaKeys = getKeys(oliviasList);
  const ryanKeys = getKeys(ryansList);
  const keys = [anthonyKeys, arwenKeys, callerKeys, chrisKeys, danielleKeys, oliviaKeys, ryanKeys].flatMap(s => s).sort();
  const filteredKeys = [...new Set(keys)]
  const times = 20;

  function getTableRows(i: number) {
    return (
      <Tr bgColor="white" key={i}>
        <Td>{i + 1}</Td>
        <Td>{callerKeys[i]}</Td>
        <Td>{anthonyKeys[i]}</Td>
        <Td>{arwenKeys[i]}</Td>
        <Td>{chrisKeys[i]}</Td>
        <Td>{danielleKeys[i]}</Td>
        <Td>{oliviaKeys[i]}</Td>
        <Td>{ryanKeys[i]}</Td>
      </Tr>
    )
  }
  return (
    <div>
      {/* <List>{filteredKeys.map(k => <ListItem key={k}>{k}</ListItem>)}</List> */}
      <Table variant="striped">
        <Thead>
          <Tr bgColor="#ddd">
            <Th>Rank</Th>
            <Th>Callers</Th>
            <Th>Anthony</Th>
            <Th>Arwen</Th>
            <Th>Chris</Th>
            <Th>Danielle</Th>
            <Th>Olivia</Th>
            <Th>Ryan</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 20 }, (_, index) => getTableRows(index))}
        </Tbody>
      </Table>
    </div>
  )
}