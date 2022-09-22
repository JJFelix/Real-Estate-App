import link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Link} from '@chakra-ui/react'

import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, LinkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p='5' >
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3x1" fontWeight="bold">{title1} <br /> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="x1">
        <Link href={LinkName}>{buttonText}</Link>

      </Button>
    </Box>
  </Flex>
)


export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner 
        purpose={"RENT A HOME"} 
        title1={"Find your dream home"}
        title2={"with us"}
        desc1={"We have a large collection of homes for rent"}
        desc2={"and we are sure you will find your dream home"}
        buttonText={"Renting"}
        LinkName={"/search?purpose=for-rent"}
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'      
      />

      <Flex flexWrap="wrap">
        {/* fetch the properties and map over them*/}
      </Flex>

      <Banner 
        purpose={"BUY A HOME"} 
        title1={"Find, Buy & Own Your"}
        title2={"Dream Home"}
        desc1={"We have a large collection of homes for sale"}
        desc2={"and we are sure you will find your dream home"}
        buttonText={"Buying"}
        LinkName={"/search?purpose=for-sale"}
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'      
      />

      <Flex flexWrap="wrap">
        {/* fetch the properties and map over them*/}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi('$(baseUrl)/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6')
  const propertyForRent = await fetchApi('$(baseUrl)/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6')

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }

  }

}