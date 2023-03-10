import * as React from 'react';
import { Avatar, Badge, Box, Button, Card, CardBody, CardProps, Collapse, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, IconButton, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export interface ItemBaseProps {
  badgeText?: string;
  crossover?: {
    'Anthony'?: number,
    'Brian'?: number,
    'Chris'?: number,
    'Danielle'?: number,
    'Ryan'?: number
  },
  sequence?: number;
}

export interface GameItemProps extends ItemBaseProps {
  gameArtists?: string;
  gameDesigners?: string;
  gameImageName?: string;
  gameName?: string;
  gamePublisher?: string;
  imageExtension?: 'webp' | 'jpg' | 'jpeg';
  imageBoxExtension?: 'webp' | 'jpg' | 'jpeg';
  yearPublished?: string;
}

export interface PersonItemProps extends ItemBaseProps {
  games?: GameList;
  personName?: string;
  personImageName?: string;
}

export type GameList = {
  [key: string]: GameItemProps;
}

export type PersonList = {
  [key: string]: PersonItemProps;
}

interface TopListItemProps extends CardProps, GameItemProps, PersonItemProps {
  colorScheme?: CardProps['colorScheme'];
  itemType?: 'game' | 'person';
  title?: string;
}

const ImageWithHideOnError: React.FC<ImageProps> = (props: ImageProps) => {
  const { alt, src, ...otherProps } = props;
  const [hideImage, setHideImage] = useState(false);
  return (
    <Box display={hideImage ? 'none' : 'block'} position="relative">
      <Image
        alt={alt}
        src={src}
        fill
        style={{ objectFit: 'contain' }}
        {...otherProps}
        onError={() => {
          setHideImage(true);
        }}
      />
    </Box>
  );
};

export const TopListItem: React.FC<TopListItemProps> = (props: TopListItemProps) => {
  const {
    badgeText = '',
    children,
    colorScheme = 'blue',
    crossover,
    gameArtists = "N/A",
    gameDesigners = "(Uncredited)",
    gameImageName,
    gameName,
    gamePublisher = "N/A",
    games,
    imageBoxExtension = 'webp',
    imageExtension = 'webp',
    itemType = 'game',
    personName,
    personImageName,
    sequence,
    title,
    yearPublished,
    ...otherProps
  } = props;
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure()

  const itemName = itemType === 'game' ? gameName : personName;

  const credits = (
    <>
      <Flex gap={2}>
        <Text noOfLines={1}>?????? {gameDesigners}</Text>
      </Flex>
      <Flex gap={2}>
        <Text noOfLines={1}>???? {gameArtists}</Text>
      </Flex>
      <Flex gap={2}>
        <Text noOfLines={1}>???? {yearPublished}</Text>
      </Flex>
      <Flex gap={2}>
        <Text noOfLines={1}>???? {gamePublisher}</Text>
      </Flex>
    </>
  )

  return (
    <Card width="100%" {...otherProps}>
      <CardBody display="flex">
        <Box flex={1}>
          <HStack width="100%">
            <IconButton
              aria-label={`Open ${sequence}`}
              borderRadius="full"
              colorScheme={colorScheme}
              icon={<Heading fontSize={sequence && sequence > 9 ? 'xl' : '2xl'}>{sequence}</Heading>}
              onClick={onToggle}
              variant={isOpen ? 'solid' : 'outline'}
            />
            <Box width="100%">
              <Heading color={`${colorScheme}.800`} flex={1} fontSize="lg">
                <Collapse in={!isOpen} animateOpacity>{title}</Collapse>
                <Collapse in={isOpen} animateOpacity>{itemName}</Collapse>
              </Heading>
              <Collapse in={isOpen} animateOpacity>
                <HStack>
                  <Text>{title}</Text>
                  <Badge colorScheme={badgeText.toLowerCase().includes('new') ? 'green' : 'gray'}>{badgeText}</Badge>
                  {crossover && Object.entries(crossover).map(([crossoverName, crossoverInfo]) => (
                    <Badge borderRadius="full" colorScheme="green" key={crossoverName} variant="solid">
                      <Avatar name={crossoverName} src={'./personImages/brian-chandler.webp'} size="2xs" />
                      <Box as="span" px={1}>{crossoverName}: #{crossoverInfo}</Box>
                    </Badge>
                  ))}
                </HStack>
              </Collapse>
            </Box>
          </HStack>
          <Collapse in={isOpen} animateOpacity>
            {itemType === 'game' && (
              <Box ml={12} mt={2}>
                {credits}
              </Box>
            )}
            {itemType === 'person' && games && (
              <Flex
                alignItems="flex-start"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
                py={2}
                width="100%"
              >
                {Object.entries(games).map(([gameName, gameInfo]) => (
                  <Image
                    key={gameName}
                    alt={`Picture of ${gameName}`}
                    src={`./gameImages/${gameInfo.gameImageName}-box.${gameInfo.imageBoxExtension || 'webp'}`}
                    height={60}
                    width={60}
                  />
                ))}
              </Flex>
            )}
          </Collapse>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <>
            <Button
              height="100%"
              width="150px"
              onClick={onOpen}
              padding={0}
              variant="ghost"
              position="relative"
            >
              <Image
                alt={`Picture of ${itemName}`}
                src={`./${itemType === 'game' ? `gameImages/${gameImageName}-box.` : `personImages/${personImageName}.`}${imageBoxExtension}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Button>
            <Drawer
              isOpen={isDrawerOpen}
              placement='right'
              onClose={onClose}
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader display="flex" gap={4}>
                  <Image
                    alt={`Picture of ${itemName}`}
                    src={`./${itemType === 'game' ? `gameImages/${gameImageName}-box.` : `personImages/${personImageName}.`}${imageBoxExtension}`}
                    height={75}
                    style={{ objectFit: 'contain' }}
                    width={75}
                  />
                  <Box flex={1}>
                    <Text fontSize="sm">{title}</Text>
                    <Heading color={`${colorScheme}.800`} flex={1} fontSize="lg">
                      {itemName}
                    </Heading>
                  </Box>
                  {itemType === 'game' && (
                    <Flex borderLeftWidth={1} flexDirection="column" fontSize="sm" maxWidth="50%" px={4}>
                      {credits}
                    </Flex>
                  )}
                </DrawerHeader>
                <DrawerBody bgColor="gray.200">
                  {itemType === 'game' && (
                    <SimpleGrid minChildWidth={['100%', null, 96]} spacing={4} height="100%" width="100%">
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-1.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-2.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-3.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-4.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-5.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-6.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-7.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-8.${imageExtension}`}
                      />
                      <ImageWithHideOnError
                        alt={`Picture of ${itemName}`}
                        src={`./gameImages/${gameImageName}-9.${imageExtension}`}
                      />
                    </SimpleGrid>
                  )}
                  {itemType === 'person' && games && (
                    <>
                      {Object.entries(games).map(([gameName, gameInfo]) => (
                        <Flex key={gameName} alignItems="flex-start" borderBottomWidth={1} gap={2} mb={2} pb={2}>
                          <Box boxSize="100px" position="relative">
                            <Image
                              alt={`Picture of ${gameName}`}
                              src={`./gameImages/${gameInfo.gameImageName}-box.${gameInfo.imageBoxExtension || 'webp'}`}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </Box>
                          <Box flex={1}>
                            <Heading color={`${colorScheme}.800`} flex={1} fontSize="lg">
                              {gameName}
                            </Heading>
                            <Flex flexDirection="column" fontSize="sm">
                              {credits}
                            </Flex>
                          </Box>
                          <Box height="150px" position="relative" width="250px">
                            <Image
                              alt={`Picture of ${gameName}`}
                              src={`./gameImages/${gameInfo.gameImageName}-1.${gameInfo.imageExtension || 'webp'}`}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </Box>
                        </Flex>
                      ))}
                    </>
                  )}
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        </Collapse>
      </CardBody>
    </Card>
  )
}