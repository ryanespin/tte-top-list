import Head from 'next/head'
import Image from 'next/image'

import { Flex, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import { TopListItem } from '@/components/elements/TopListItem'
import { anthonysList } from './api/listData/fav2023/anthonysList'
import { DefaultLayout } from '@/components/layouts/Default'
import { ryansList } from './api/listData/fav2023/ryansList'
import { chrisList } from './api/listData/fav2023/chrisList'
import { gamesList } from './api/gameData'



export default function Fav2023() {
  return (
    <>
      <Head>
        <title>Tabletop Express Top List: Favorite 2023 Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout pageTitle="Favorite 2023 Games">
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
          <TopListItem
            colorScheme="blue"
            gameArtists={gamesList['The Field of the Cloth of Gold'].gameArtists}
            gameDesigners={gamesList['The Field of the Cloth of Gold'].gameDesigners}
            gameImageName={gamesList['The Field of the Cloth of Gold'].gameImageName}
            gameName="The Field of the Cloth of Gold"
            gamePublisher={gamesList['The Field of the Cloth of Gold'].gamePublisher}
            height="fit-content"
            title="Chris' Pick (Favorite New to Me)"
            yearPublished={gamesList['The Field of the Cloth of Gold'].yearPublished}
            width="100%"
            order={11}
          />
          <TopListItem
            colorScheme="blue"
            gameArtists={gamesList['Cosmic Frog: Find Muck'].gameArtists}
            gameDesigners={gamesList['Cosmic Frog: Find Muck'].gameDesigners}
            gameImageName={gamesList['Cosmic Frog: Find Muck'].gameImageName}
            gameName="Cosmic Frog: Find Muck"
            gamePublisher={gamesList['Cosmic Frog: Find Muck'].gamePublisher}
            height="fit-content"
            title="Chris' Pick (Favorite Expansion)"
            yearPublished={gamesList['Cosmic Frog: Find Muck'].yearPublished}
            width="100%"
            order={12}
          />
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
          <TopListItem
            colorScheme="red"
            gameArtists={gamesList['Ra'].gameArtists}
            gameDesigners={gamesList['Ra'].gameDesigners}
            gameImageName={gamesList['Ra'].gameImageName}
            gameName="Ra"
            gamePublisher={gamesList['Ra'].gamePublisher}
            height="fit-content"
            title="Ryan's Pick (Favorite New to Me)"
            yearPublished={gamesList['Ra'].yearPublished}
            width="100%"
            order={11}
          />
          <TopListItem
            colorScheme="red"
            gameArtists={gamesList['Cosmic Frog: Find Muck'].gameArtists}
            gameDesigners={gamesList['Cosmic Frog: Find Muck'].gameDesigners}
            gameImageName={gamesList['Cosmic Frog: Find Muck'].gameImageName}
            gameName="Cosmic Frog: Find Muck"
            gamePublisher={gamesList['Cosmic Frog: Find Muck'].gamePublisher}
            height="fit-content"
            title="Ryan's Pick (Favorite Expansion)"
            yearPublished={gamesList['Cosmic Frog: Find Muck'].yearPublished}
            width="100%"
            order={12}
          />
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
          <TopListItem
            colorScheme="purple"
            gameArtists={gamesList['Cockroach Poker'].gameArtists}
            gameDesigners={gamesList['Cockroach Poker'].gameDesigners}
            gameImageName={gamesList['Cockroach Poker'].gameImageName}
            gameName="Cockroach Poker"
            gamePublisher={gamesList['Cockroach Poker'].gamePublisher}
            height="fit-content"
            title="Anthony's Pick (Favorite New to Me)"
            yearPublished={gamesList['Cockroach Poker'].yearPublished}
            width="100%"
            order={11}
          />
          <TopListItem
            colorScheme="purple"
            gameArtists={gamesList['Cascadia: Landmarks'].gameArtists}
            gameDesigners={gamesList['Cascadia: Landmarks'].gameDesigners}
            gameImageName={gamesList['Cascadia: Landmarks'].gameImageName}
            gameName="Cascadia: Landmarks"
            gamePublisher={gamesList['Cascadia: Landmarks'].gamePublisher}
            height="fit-content"
            title="Anthony's Pick (Favorite Expansion)"
            yearPublished={gamesList['Cascadia: Landmarks'].yearPublished}
            width="100%"
            order={12}
          />
        </Flex>
      </DefaultLayout>
    </>
  )
}
