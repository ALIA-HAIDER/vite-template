import {
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Avatar,
  } from '@mantine/core';
  import classes from './FeaturesCards.module.css';
  import profile1 from './profile.jpeg';
  import profile2 from './profile.jpeg';
  import profile3 from './profile.jpeg';
  
  const mockdata = [
    {
      name: 'Jacob Warnhalter',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit.',
      avatarSrc: profile1,
      location: 'New York, USA',
    },
    {
      name: 'Emily Blunt',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma.',
      avatarSrc: profile2,
      location: 'Los Angeles, USA',
    },
    {
      name: 'Michael Johnson',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves.',
      avatarSrc: profile3,
      location: 'London, UK',
    },
    {
      name: 'Sara Connor',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit.',
      avatarSrc: profile1,
      location: 'Berlin, Germany',
    },
    {
      name: 'John Doe',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma.',
      avatarSrc: profile2,
      location: 'Sydney, Australia',
    },
    {
      name: 'Jane Smith',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves.',
      avatarSrc: profile3,
      location: 'Tokyo, Japan',
    },
  ];
  
  export function FeaturesCards() {
    const features = mockdata.map((feature) => (
      <Card key={feature.name} shadow="md" radius="md" className={classes.card} padding="xl">
        <Group>
          <Avatar src={feature.avatarSrc} radius="xl" size="lg" />
          <div>
            <Text fz="lg" fw={500} className={classes.cardTitle}>
              {feature.name}
            </Text>
            <Text fz="sm" c="dimmed">
              {feature.location}
            </Text>
          </div>
        </Group>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          What Our Trusted Users Are Saying
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Discover how Serenity has earned the trust of mental health professionals through their
          genuine experiences and success stories.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
  