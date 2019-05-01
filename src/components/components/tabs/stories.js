import React from 'react';
import { Tabs, Box, Heading } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  const tabListWithIcon = [
    {
      label: 'Tab1',
      url: 'tab1',
      tabIcon: 'twitterSVG'
    },
    {
      label: 'Disabled',
      url: 'Disabled',
      tabIcon: 'twitterSVG',
      disabled: true
    },
    {
      label: 'Tab3',
      url: 'tab3',
      tabIcon: 'twitterSVG'
    },
    {
      label: 'Tab4',
      url: 'tab4',
      tabIcon: 'twitterSVG'
    },
    {
      label: 'Tab5',
      url: 'tab5',
      tabIcon: 'twitterSVG'
    }
  ];

  const tabList = [
    {
      label: 'Tab1',
      url: 'tab1'
    },
    {
      label: 'Disabled',
      url: 'Disabled',
      disabled: true
    },
    {
      label: 'Tab3',
      url: 'tab3'
    },
    {
      label: 'Tab4',
      url: 'tab4'
    },
    {
      label: 'Tab5',
      url: 'tab5'
    }
  ];

  const handleTabClick = tab => {
    return event => {
      console.log('Tab Clicked', tab, event);
    };
  };
  return (
    <div>
      <Box>
        Default
        <Tabs
          tabList={tabList}
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
        />
      </Box>

      <Box mt={3}>
        Small Tabs
        <Tabs
          tabList={tabList}
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
          variant='sm'
        />
      </Box>

      <Box mt={3}>
        Large Tabs
        <Tabs
          tabList={tabList}
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
          variant='lg'
        />
      </Box>
      <Box my={3}>
        <Heading variant='lg'>Vertical tabs</Heading>
      </Box>

      <Box width='320px'>
        Default
        <Tabs
          tabList={tabList}
          vertical
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
        />
      </Box>

      <Box mt={3} width='120px'>
        Small Tabs
        <Tabs
          tabList={tabList}
          vertical
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
          variant='sm'
        />
      </Box>

      <Box mt={3} width='320px'>
        Large Tabs
        <Tabs
          tabList={tabList}
          vertical
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
          variant='lg'
        />
      </Box>

      <Box mt={3} width='320px'>
        Large Tabs withIcon
        <Tabs
          tabList={tabListWithIcon}
          vertical
          click={handleTabClick}
          activeTab={'tab1'}
          valueKey={'url'}
          variant='lg'
        />
      </Box>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box, Heading]
})(story);
