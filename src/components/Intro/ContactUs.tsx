import {
    Text,
    Title,
    SimpleGrid,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
  import classes from './ContactUs.module.css';
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function ContactUs() {

    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={15} >
          <div className= "Frame35">
            <Title   className={classes.Frame35} >Streamline your Psycholgical Practice</Title>
          </div>
          <div >
            <div className={classes.Frame}>Serenity is a comprehesnive Saas platform designed to simplify and enhance the workflow of psychologsts and mental heath professionals</div>
             <Group justify="flex-start" mt="md">
              <Button className={classes.control}>Get Started</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }