import * as React from 'react';
import { Box, Button, Card, CardBody, CardProps, Collapse, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Icon, IconButton, Image as ChakraImage, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faIndustry, faPaintbrush, faPen } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';

export interface ItemBaseProps {
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

export const TopListItem: React.FC<TopListItemProps> = (props: TopListItemProps) => {
  const {
    children,
    colorScheme = 'blue',
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
  const btnRef = React.useRef()

  const itemName = itemType === 'game' ? gameName : personName;

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
                <Text>{title}</Text>
              </Collapse>
            </Box>
          </HStack>
          <Collapse in={isOpen} animateOpacity>
            {itemType === 'game' && (
              <Box ml={12} mt={2}>
                <Flex gap={2}>
                  <Icon as={FontAwesomeIcon} icon={faPen} mt={1} />
                  <Text noOfLines={1}>{gameDesigners}</Text>
                </Flex>
                <Flex gap={2}>
                  <Icon as={FontAwesomeIcon} icon={faPaintbrush} mt={1} />
                  <Text noOfLines={1}>{gameArtists}</Text>
                </Flex>
                <Flex gap={2}>
                  <Icon as={FontAwesomeIcon} icon={faCalendar} mt={1} />
                  <Text noOfLines={1}>{yearPublished}</Text>
                </Flex>
                <Flex gap={2}>
                  <Icon as={FontAwesomeIcon} icon={faIndustry} mt={1} />
                  <Text noOfLines={1}>{gamePublisher}</Text>
                </Flex>
              </Box>
            )}
            {itemType === 'person' && games && (<Flex alignItems="flex-start" flexWrap="wrap" gap={2} justifyContent="center" py={2} width="100%">{Object.entries(games).map(([gameName, gameInfo]) => (
              <Image
                key={gameName}
                alt={`Picture of ${gameName}`}
                src={`/gameImages/${gameInfo.gameImageName}-box.${gameInfo.imageBoxExtension || 'webp'}`}
                height={60}
                width={60}
              />
            ))}</Flex>)}

          </Collapse>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Button
            height="min-content"
            width="150px"
            onClick={onOpen}
            padding={0}
            variant="ghost"
          >
            <Image
              alt={`Picture of ${itemName}`}
              src={`/${itemType === 'game' ? `gameImages/${gameImageName}-box.` : `personImages/${personImageName}.`}${imageBoxExtension}`}
              height={150}
              width={150}
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
                  src={`/${itemType === 'game' ? `gameImages/${gameImageName}-box.` : `personImages/${personImageName}.`}${imageBoxExtension}`}
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
                    <Flex gap={2}>
                      <Icon as={FontAwesomeIcon} icon={faPen} mt={1} />
                      <Text noOfLines={1}>{gameDesigners}</Text>
                    </Flex>
                    <Flex alignItems="flex-start" gap={2}>
                      <Icon as={FontAwesomeIcon} icon={faPaintbrush} mt={1} />
                      <Text noOfLines={1}>{gameArtists}</Text>
                    </Flex>
                    <Flex gap={2}>
                      <Icon as={FontAwesomeIcon} icon={faCalendar} mt={1} />
                      <Text noOfLines={1}>{yearPublished}</Text>
                    </Flex>
                    <Flex gap={2}>
                      <Icon as={FontAwesomeIcon} icon={faIndustry} mt={1} />
                      <Text noOfLines={1}>{gamePublisher}</Text>
                    </Flex>
                  </Flex>
                )}
              </DrawerHeader>
              <DrawerBody>
                {itemType === 'game' && (
                  <Image
                    alt={`Picture of ${itemName}`}
                    src={`/gameImages/${gameImageName}-1.${imageExtension}`}
                    height={56*16}
                    style={{ width: '100%' }}
                    width={56*16}
                  />
                )}
                {itemType === 'person' && games && (
                  <>
                    {Object.entries(games).map(([gameName, gameInfo]) => (
                      <Flex key={gameName} alignItems="flex-start" borderBottomWidth={1} gap={2} mb={2} pb={2}>
                        <Box boxSize="100px" position="relative">
                          <Image
                            alt={`Picture of ${gameName}`}
                            src={`/gameImages/${gameInfo.gameImageName}-box.${gameInfo.imageBoxExtension || 'webp'}`}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                        <Box flex={1}>
                          <Heading color={`${colorScheme}.800`} flex={1} fontSize="lg">
                            {gameName}
                          </Heading>
                          <Flex flexDirection="column" fontSize="sm">
                            <Flex gap={2}>
                              <Icon as={FontAwesomeIcon} icon={faPen} mt={1} />
                              <Text noOfLines={1}>{gameInfo.gameDesigners}</Text>
                            </Flex>
                            <Flex alignItems="flex-start" gap={2}>
                              <Icon as={FontAwesomeIcon} icon={faPaintbrush} mt={1} />
                              <Text noOfLines={1}>{gameInfo.gameArtists}</Text>
                            </Flex>
                            <Flex gap={2}>
                              <Icon as={FontAwesomeIcon} icon={faCalendar} mt={1} />
                              <Text noOfLines={1}>{gameInfo.yearPublished}</Text>
                            </Flex>
                            <Flex gap={2}>
                              <Icon as={FontAwesomeIcon} icon={faIndustry} mt={1} />
                              <Text noOfLines={1}>{gameInfo.gamePublisher}</Text>
                            </Flex>
                          </Flex>
                        </Box>
                        <Box height="150px" position="relative" width="250px">
                          <Image
                            alt={`Picture of ${gameName}`}
                            src={`/gameImages/${gameInfo.gameImageName}-1.${gameInfo.imageExtension || 'webp'}`}
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
        </Collapse>
      </CardBody>
    </Card>
  )
}