import { Tag } from 'antd';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledTag = styled(Tag)`
  cursor: default;
`;

StyledTag.displayName = 'Tag';
StyledTag.propTypes = Tag.propTypes;

export default hoistNonReactStatics(StyledTag, Tag);
