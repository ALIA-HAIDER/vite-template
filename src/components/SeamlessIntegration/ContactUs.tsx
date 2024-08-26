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
  
  export function ContactUstwo() {

    return (
      <>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={15} >
          <div className= "Frame35">
            <Title   className={classes.Frame35} >Seamless Integrations</Title>
          </div>
          <div >
            <div className={classes.Frame}>Connect Serenity with your favorite tools for a seamless workflow. Our integrations enhance productivity by synchronizing with essential platforms.</div>
             <Group justify="flex-start" mt="md">
              <Button className={classes.control}>View all Integrations</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 5 }} spacing={15}>
        <img src="" alt="paytm" />
        <img src="" alt="link" />
        <img src="" alt="goo" />
        <img src="" alt="email" />
        <img src="" alt="calender" />
        <img src="" alt="drive" />
        <img src="" alt="calender" />
        <img src="" alt="calender" />
      

      </SimpleGrid>
      </>
    );
  }