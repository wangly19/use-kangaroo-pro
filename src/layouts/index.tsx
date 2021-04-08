import type { FunctionComponent, ReactNode } from 'react';
import type {
  BasicLayoutProps as ProLayoutProps,
  MenuDataItem,
} from '@ant-design/pro-layout';
import { useState } from 'react';
import { history, Link } from 'umi'
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import GlobalHeader from './Global/Header'
import styles from './index.less';
import type { AuthRoute } from '@/types';

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
        navTheme="light"
        collapsed={ collapse }
        onCollapse={ setCollapse }
        onMenuHeaderClick={() => history.push('/')}
        fixSiderbar
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={ route }
        menuItemRender={ MenuChildrenRender }
        rightContentRender= {() => <GlobalHeader/>}
      >
        <PageContainer content="欢迎使用">
          { children }
        </PageContainer>
      </ProLayout>
    </div>  
  );
};

export default AppLayout
