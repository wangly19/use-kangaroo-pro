import type { FunctionComponent, ReactNode } from 'react';
import type { AuthRoute} from '@/types';
import type {
  BasicLayoutProps as ProLayoutProps,
  MenuDataItem} from '@ant-design/pro-layout';
import { useState } from 'react';
import { history, Link } from 'umi'
import ProLayout from '@ant-design/pro-layout';
import GlobalHeader from './Global/Header'
import defaultSetting from '../../config/defaultSetting'
import styles from './index.less';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    auth: string[];
  };
  authRoutes: AuthRoute[]
} & ProLayoutProps;

const AppLayout: FunctionComponent<BasicLayoutProps> = (props) => {

  /** [state] Menu收缩状态 */
  const [collapse, setCollapse] = useState<boolean>(false)

  const { children, location, route } = props

  /** [MenuRender]: 菜单栏渲染 */
  const MenuChildrenRender = (
    item: MenuDataItem, 
    RenderDOM: ReactNode
  ): ReactNode => (<Link to={ item.path || '/' } >{ RenderDOM }</Link>)

  return (
    <div className={styles.appBody}>
      <ProLayout
        location={{
          pathname: location?.pathname
        }}
        collapsed={ collapse }
        onCollapse={ setCollapse }
        onMenuHeaderClick={() => history.push('/')}
        iconfontUrl={ ICON_FONT_URL }
        route={ route }
        menuItemRender={ MenuChildrenRender }
        rightContentRender= {() => <GlobalHeader/>}
        {...defaultSetting}
      >
         { children }
      </ProLayout>
    </div>  
  );
};

export default AppLayout
