import Head from 'next/head'
import { Avatar, HStack, IconButton, SimpleGrid, useBoolean } from '@chakra-ui/react'
import { TopListItem } from '@/components/elements/TopListItem'
import { DefaultLayout } from '@/components/layouts/Default'
import { ryansList } from './api/listData/top202023/ryansList'

export default function Top20Ryan2023() {
  const [sort, setSort] = useBoolean()
  return (
    <>
      <Head>
        <title>Tabletop Express Top List: Ryan&apos;s Top 20</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout
        bgColor="red.600"
        bgImage="./backgroundImages/ryan-shelfie.webp"
        bgPosition="center"
        bgSize="cover"
        bgBlendMode="multiply"
        pageTitle={(
          <HStack>
            <Avatar
              name="Ryan Espin"
              src="./personImages/ryan-espin.webp"
            />
            <span>Ryan&apos;s Top 20</span>
            <IconButton aria-label="Toggle sort" borderRadius="full" icon={sort ? <>⬆️</> : <>⬇️</> } onClick={setSort.toggle} variant="ghost" />
          </HStack>
        )}
        width="100%"
      >
        <SimpleGrid columns={[1, null, 2, null, 3, 4 ]} overflow="auto" p={4} spacing={4} width="100%">
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
              width="auto"
              order={gameInfo.sequence ? gameInfo.sequence * (sort ? -1 : 1) : 1}
            />
          ))}
        </SimpleGrid>
      </DefaultLayout>
    </>
  )
}
