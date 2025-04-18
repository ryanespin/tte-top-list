import Head from 'next/head'
import Image from 'next/image'

import { Flex } from '@chakra-ui/react'
import { TopListItem } from '@/components/elements/TopListItem'
import { anthonysList } from './api/listData/favFirstPlays2023/anthonysList'
import { DefaultLayout } from '@/components/layouts/Default'
import { chrisList } from './api/listData/favFirstPlays2023/chrisList'
import { ryansList } from './api/listData/favFirstPlays2023/ryansList'



export default function FavFirstPlays2023() {
  return (
    <>
      <Head>
        <title>Tabletop Express Top List: Favorite First Plays of 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout pageTitle="Favorite First Plays of 2023">
        <Flex
          bg="blue.600"
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
          {Object.entries(chrisList).map(([gameName, gameInfo]) => (
            <TopListItem
              key={gameName}
              badgeText={gameInfo.badgeText}
              colorScheme="blue"
              crossover={gameInfo.crossover}
              gameArtists={gameInfo.gameArtists}
              gameDesigners={gameInfo.gameDesigners}
              gameImageName={gameInfo.gameImageName}
              gameName={gameName}
              gamePublisher={gameInfo.gamePublisher}
              height="fit-content"
              sequence={gameInfo.sequence}
              title="Chris' Pick"
              yearPublished={gameInfo.yearPublished}
              width="100%"
              order={gameInfo.sequence}
            />
          ))}
        </Flex>
        <Flex
          bg="red.600"
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
          {Object.entries(ryansList).map(([gameName, gameInfo]) => (
            <TopListItem
              key={gameName}
              badgeText={gameInfo.badgeText}
              colorScheme="red"
              crossover={gameInfo.crossover}
              gameArtists={gameInfo.gameArtists}
              gameDesigners={gameInfo.gameDesigners}
              gameImageName={gameInfo.gameImageName}
              gameName={gameName}
              gamePublisher={gameInfo.gamePublisher}
              height="fit-content"
              sequence={gameInfo.sequence}
              title="Ryan's Pick"
              yearPublished={gameInfo.yearPublished}
              width="100%"
              order={gameInfo.sequence}
            />
          ))}
        </Flex>
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
      </DefaultLayout>
    </>
  )
}
