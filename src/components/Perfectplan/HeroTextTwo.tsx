import { Title, Text, Button, Container } from '@mantine/core';
import classes from './HeroText.module.css';


export function HeroTextTwo() {
  return (
    <>
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Find the Perfect Plan for You </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          billed monthly | billed yearly
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
          View Detailed Pricing
          </Button>
        </div>
      </div>
      {/* <TextCarousel/> */}
    </Container>
    </>
    
  );
}
