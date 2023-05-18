import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container, Text } from 'components';
import {
  BlogCard,
  ForbesList,
  SectionStatistics,
  TransactionHistory,
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
              <BlogCard />
            </TabPanel>

            <TabPanel>
              <SectionStatistics />
            </TabPanel>

            <TabPanel>
              <ForbesList />
            </TabPanel>

            <TabPanel>
              <TransactionHistory />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
