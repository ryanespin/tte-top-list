import Head from 'next/head'
import Image from 'next/image'

import { Flex, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import { TopListItem } from '@/components/elements/TopListItem'
import { DefaultLayout } from '@/components/layouts/Default'
import { gamesList } from './api/gameData'
import { anthonysList } from './api/listData/top10coops2024/anthonyList'
import { ericsList } from './api/listData/top10coops2024/ericList'



export default function Fav2023() {
  return (
    <>
      <Head>
        <title>Tabletop Express Top List: Top 10 Cooperative Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout pageTitle="Top 10 Cooperative Games">
        <Flex
          bg="purple.600"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
          flexDirection="column"
          gap={2}
          overflow="auto"
          p={4}
          width="100%"
        >
          {Object.entries(anthonysList).map(([gameName, gameInfo]) => (
            <TopListItem
              key={gameName}
              badgeText={gameInfo.badgeText}
              colorScheme="purple"
              crossover={gameInfo.crossover}
              gameArtists={gameInfo.gameArtists}
              gameDesigners={gameInfo.gameDesigners}
              gameImageName={gameInfo.gameImageName}
              gameName={gameName}
              gamePublisher={gameInfo.gamePublisher}
              height="fit-content"
              sequence={gameInfo.sequence}
              title="Anthony's Pick"
              yearPublished={gameInfo.yearPublished}
              width="100%"
              order={gameInfo.sequence}
            />
          ))}
        </Flex>
        <Flex
          bg="green.600"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
          flexDirection="column"
          gap={2}
          overflow="auto"
          p={4}
          width="100%"
        >
          {Object.entries(ericsList).map(([gameName, gameInfo]) => (
            <TopListItem
              key={gameName}
              badgeText={gameInfo.badgeText}
              colorScheme="green"
              crossover={gameInfo.crossover}
              gameArtists={gameInfo.gameArtists}
              gameDesigners={gameInfo.gameDesigners}
              gameImageName={gameInfo.gameImageName}
              gameName={gameName}
              gamePublisher={gameInfo.gamePublisher}
              height="fit-content"
              sequence={gameInfo.sequence}
              title="Eric's Pick"
              yearPublished={gameInfo.yearPublished}
              width="100%"
              order={gameInfo.sequence}
            />
          ))}
        </Flex>
      </DefaultLayout>
    </>
  )
}