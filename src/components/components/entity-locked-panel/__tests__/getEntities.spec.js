import { getEntities } from '../utilities';

const entitiesWithoutDimensions = [
  {
    entity_id: 1,
    data_status: {
      disabled: true,
      message: 'disabled',
      locked: false,
      fetching: false,
      fetch_attempted: true
    },
    geo_domains: []
  },
  {
    entity_id: 11,
    data_status: {
      disabled: true,
      message: 'cannot fetch',
      locked: false,
      fetching: false,
      fetch_attempted: true
    },
    geo_domains: []
  },
  {
    entity_id: 2,
    data_status: {
      disabled: false,
      message: 'locked',
      locked: true,
      fetching: false,
      fetch_attempted: true
    },
    geo_domains: []
  },
  {
    entity_id: 3,
    data_status: {
      disabled: false,
      message: 'fetching',
      locked: false,
      fetching: true,
      fetch_attempted: true
    },
    geo_domains: []
  },
  {
    entity_id: 4,
    data_status: {
      disabled: false,
      message: 'no data',
      locked: false,
      fetching: false,
      fetch_attempted: true
    },
    geo_domains: []
  },
  {
    entity_id: 5,
    data_status: {
      disabled: false,
      message: '',
      locked: false,
      fetching: false,
      fetch_attempted: true
    },
    geo_domains: [
      {
        id: 1
      }
    ]
  }
];

const entitiesWithDimensions = [
  {
    id: 36,
    name: 'facebook.com',
    geo_domains: [
      {
        id: 5206,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '5206': {
          fetching: false,
          fetch_attempted: true,
          locked: false,
          message: 'Data available.',
          last_updated_at: null
        }
      }
    },
    company_id: 60,
    company_name: 'Facebook'
  },
  {
    id: 361,
    name: 'facebook.com',
    geo_domains: [
      {
        id: 5206,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '5206': {
          fetching: true,
          fetch_attempted: true,
          locked: false,
          message: 'fetching',
          last_updated_at: null
        }
      }
    },
    company_id: 60,
    company_name: 'Facebook'
  },
  {
    id: 250,
    name: 'fang.com',
    geo_domains: [
      {
        id: 6418,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: '',
      geo_domains_data_status: {
        '6418': {
          fetching: false,
          disabled: true,
          fetch_attempted: false,
          locked: false,
          message: 'disabled_no_data_source',
          last_updated_at: null
        }
      }
    },
    company_id: 7,
    company_name: 'Fang Holdings'
  },
  {
    id: 2501,
    name: 'fang.com',
    geo_domains: [],
    data_status: {
      disabled: true,
      message: 'No data found',
      geo_domains_data_status: {}
    },
    company_id: 7,
    company_name: 'Fang Holdings'
  },
  {
    id: 2308,
    name: 'mynd.co',
    geo_domains: [
      {
        id: 6418,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '6418': {
          fetching: false,
          fetch_attempted: false,
          locked: true,
          message: 'locked',
          last_updated_at: null
        }
      }
    },
    company_id: 2258,
    company_name: 'Mynd'
  },
  {
    id: 23081,
    name: 'mynd.co',
    geo_domains: [],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '6418': {
          fetching: false,
          fetch_attempted: true,
          locked: false,
          message: 'no data',
          last_updated_at: null
        }
      }
    },
    company_id: 2258,
    company_name: 'Mynd'
  },
  {
    id: 2308134,
    name: 'mynd.co',
    geo_domains: [
      {
        id: 6418,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '6418': {
          fetching: false,
          fetch_attempted: true,
          locked: true,
          message: 'locked',
          last_updated_at: null
        }
      }
    },
    company_id: 2258,
    company_name: 'Mynd'
  },
  {
    id: 23082,
    name: 'mynd.co',
    geo_domains: [
      {
        id: 6418,
        geo_region_id: 232,
        country_name: 'United States',
        country_flag: 'https://images.apple.com/ac/flags/1/images/us/60.png',
        country_iso: 'US'
      }
    ],
    data_status: {
      disabled: false,
      message: null,
      geo_domains_data_status: {
        '6418': {
          fetching: false,
          fetch_attempted: true,
          locked: false,
          message: 'data available',
          last_updated_at: null
        }
      }
    },
    company_id: 2258,
    company_name: 'Mynd'
  }
];

const dimensions = [
  {
    key: 'geo_domains',
    labelKey: 'country_iso',
    valueKey: 'geo_region_id'
  }
];

it('should return an object', () => {
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toBeDefined();
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toBeInstanceOf(Object);
});

it('should have predefined keys', () => {
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toHaveProperty('lockedEntities');
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toHaveProperty('fetchingEntities');
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toHaveProperty('disabledEntities');
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toHaveProperty('noDataEntities');
  expect(
    getEntities({
      entities: entitiesWithoutDimensions
    })
  ).toHaveProperty('validEntities');
});

it('should return expected length', () => {
  const entities = getEntities({
    entities: entitiesWithoutDimensions,
    statusKey: 'data_status',
    idKey: 'entity_id'
  });
  expect(entities.lockedEntities.length).toBe(1);
  expect(entities.fetchingEntities.length).toBe(1);
  expect(entities.disabledEntities.length).toBe(2);
  expect(entities.noDataEntities.length).toBe(1);
  expect(entities.validEntities.length).toBe(1);
});

it('should return expected entities', () => {
  const entities = getEntities({
    entities: entitiesWithoutDimensions,
    statusKey: 'data_status',
    idKey: 'entity_id'
  });
  expect(entities.lockedEntities[0].entity_id).toBe(2);
  expect(entities.fetchingEntities[0].entity_id).toBe(3);
  expect(entities.disabledEntities[0].entity_id).toBe(1);
  expect(entities.noDataEntities[0].entity_id).toBe(4);
  expect(entities.validEntities[0].entity_id).toBe(5);
});

it('should return expected messages and grouped entities', () => {
  const entities = getEntities({
    entities: entitiesWithoutDimensions,
    statusKey: 'data_status',
    idKey: 'entity_id'
  });
  expect(Object.keys(entities.messages.disabledEntitiesMessage).length).toBe(2);
  expect(Object.keys(entities.messages.fetchingEntitiesMessage).length).toBe(1);
  expect(Object.keys(entities.messages.lockedEntitiesMessage).length).toBe(1);
  expect(Object.keys(entities.messages.noDataEntitiesMessage).length).toBe(1);

  expect(entities.messages.disabledEntitiesMessage.disabled[0].entity_id).toBe(
    1
  );
  expect(
    entities.messages.disabledEntitiesMessage['cannot fetch'][0].entity_id
  ).toBe(11);
  expect(entities.messages.fetchingEntitiesMessage.fetching[0].entity_id).toBe(
    3
  );
  expect(entities.messages.lockedEntitiesMessage.locked[0].entity_id).toBe(2);
  expect(entities.messages.noDataEntitiesMessage['no data'][0].entity_id).toBe(
    4
  );
});

it('should return an object with dimensions', () => {
  const entities = getEntities({
    entities: entitiesWithDimensions,
    idKey: 'id',
    dimensions: dimensions,
    statusKey: 'data_status'
  });
  expect(entities).toBeDefined();
  expect(entities).toBeInstanceOf(Object);
});

it('should have predefined keys with dimensions', () => {
  const entities = getEntities({
    entities: entitiesWithDimensions,
    idKey: 'id',
    dimensions: dimensions,
    statusKey: 'data_status'
  });
  expect(entities).toHaveProperty('lockedEntities');
  expect(entities).toHaveProperty('fetchingEntities');
  expect(entities).toHaveProperty('disabledEntities');
  expect(entities).toHaveProperty('noDataEntities');
  expect(entities).toHaveProperty('validEntities');
});

it('should return expected length with dimensions', () => {
  const entities = getEntities({
    entities: entitiesWithDimensions,
    idKey: 'id',
    dimensions: dimensions,
    statusKey: 'data_status'
  });
  expect(entities.disabledEntities.length).toBe(2);
  expect(entities.lockedEntities.length).toBe(2);
  expect(entities.fetchingEntities.length).toBe(1);
  expect(entities.validEntities.length).toBe(2);
  expect(entities.noDataEntities.length).toBe(1);
});

it('should return expected entities', () => {
  const entities = getEntities({
    entities: entitiesWithDimensions,
    idKey: 'id',
    dimensions: dimensions,
    statusKey: 'data_status'
  });
  expect(entities.disabledEntities[0].id).toBe(2501);
  expect(entities.disabledEntities[1].id).toBe(250);
  expect(entities.lockedEntities[0].id).toBe(2308);
  expect(entities.lockedEntities[1].id).toBe(2308134);
  expect(entities.fetchingEntities[0].id).toBe(361);
  expect(entities.noDataEntities[0].id).toBe(23081);
  expect(entities.validEntities[0].id).toBe(36);
  expect(entities.validEntities[1].id).toBe(23082);
});

it('should return expected messages and grouped entities', () => {
  const entities = getEntities({
    entities: entitiesWithDimensions,
    idKey: 'id',
    dimensions: dimensions,
    statusKey: 'data_status'
  });
  expect(Object.keys(entities.messages.disabledEntitiesMessage).length).toBe(2);
  expect(Object.keys(entities.messages.fetchingEntitiesMessage).length).toBe(1);
  expect(Object.keys(entities.messages.lockedEntitiesMessage).length).toBe(1);
  expect(Object.keys(entities.messages.noDataEntitiesMessage).length).toBe(1);
  expect(entities.messages.disabledEntitiesMessage['No data found'][0].id).toBe(
    2501
  );
  expect(
    entities.messages.disabledEntitiesMessage['disabled_no_data_source'][0].id
  ).toBe(250);
  expect(entities.messages.fetchingEntitiesMessage.fetching[0].id).toBe(361);
  expect(entities.messages.lockedEntitiesMessage.locked[0].id).toBe(2308);
  expect(entities.messages.lockedEntitiesMessage.locked[1].id).toBe(2308134);
  expect(entities.messages.noDataEntitiesMessage[''][0].id).toBe(23081);
});
