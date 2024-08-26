import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Together, these features create a powerful synergy, offering a seamless and
            transformative experience that makes managing your practice effortless and rewarding.
          </Text>
        </Container>
      </div>
    </div>
  );
}
