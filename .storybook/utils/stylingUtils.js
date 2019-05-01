export function getWithInfoStyles() {
  return stylesheet => ({
    ...stylesheet,
    header: {
      ...stylesheet.header,
      h1: {
        ...stylesheet.header.h1,
        fontSize: '15px',
        color: '#858E9D',
        fontWeight: '500'
      },
      h2: {
        ...stylesheet.header.h2,
        fontWeight: 700,
        FontSize: '24px'
      }
    },
    infoBody: {
      ...stylesheet.infoBody,
      padding: 0,
      boxShasow: 'none',
      border: 'none'
    },
    source: {
      ...stylesheet.source,
      h1: {
        ...stylesheet.source.h1,
        margin: 0
      }
    }
  });
}
