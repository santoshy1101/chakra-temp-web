import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

const data = new Array(12).fill(1)
export default function Card() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      m={`40px`}
      gap={6}
    >
      {data.map((ele, ind) => {
        const randomNumber = Math.round(Math.random() * 10 + 70)
        return (
          <GridItem key={ind}  cursor={'pointer'} onClick={() => navigate(`/card/${randomNumber}`)}>
            <Center py={12} >
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  /* height={'230px'} */
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${`https://picsum.photos/id/${randomNumber}/282/230`})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    
                    rounded={'lg'}
                    /*  height={230}
                  width={282} */
                    loading="lazy"
                    objectFit={'cover'}
                    src={`https://picsum.photos/id/${randomNumber}/282/230`}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Brand
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Nice Chair, pink
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      ${Math.round(Math.random() * 10 + 20)}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                      ${Math.round(Math.random() * 100 + 100)}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
        )
      })}
    </Grid>
  )
}
