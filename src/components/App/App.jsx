import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container, Text } from 'components';
import {
  BlogCardTabs,
  ForbesListTabs,
  StatisticsTabs,
  CryptoHistoryTabs,
} from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Blog card</Text>
              </Tab>
              <Tab>
                <Text>Section statistics</Text>
              </Tab>
              <Tab>
                <Text>Forbes list</Text>
              </Tab>
              <Tab>
                <Text>Transaction history </Text>
              </Tab>
            </TabList>

            <TabPanel>
              <BlogCardTabs />
            </TabPanel>

            <TabPanel>
              <StatisticsTabs />
            </TabPanel>

            <TabPanel>
              <ForbesListTabs />
            </TabPanel>

            <TabPanel>
              <CryptoHistoryTabs />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
