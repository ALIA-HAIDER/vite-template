import { Title, Text, Button, Container } from '@mantine/core';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Try Serene MINDS Free for Six Months </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Enjoy full access to Serene MINDS’s features at no cost for the first six months. Sign
            up now to start transforming your practice with our comprehensive suite of tools.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
          Start Your Free Trial
          </Button>
        </div>
      </div>
    </Container>
  );
}
