import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <>
    <Card width={300} height={300} borderRadius={10} overflow={"hidden"}>
        <Skeleton/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCardSkeleton