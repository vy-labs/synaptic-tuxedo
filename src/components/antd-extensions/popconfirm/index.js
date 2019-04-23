import hoistNonReactStatics from 'hoist-non-react-statics';
import { Popconfirm } from 'antd';

const TuxPopConfirm = Popconfirm;
export default hoistNonReactStatics(TuxPopConfirm, Popconfirm);
