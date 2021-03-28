import type { FunctionComponent, ReactNode } from 'react';
import type {
  BasicLayoutProps as ProLayoutProps,
  MenuDataItem,
} from '@ant-design/pro-layout';
import { history, Link } from 'umi'
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
} & ProLayoutProps;

const AppLayout: FunctionComponent<BasicLayoutProps> = (props) => {

  /** [state] Menu收缩状态 */

  const { children } = props;

  /** [MenuRender]: 菜单栏渲染 */
  const MenuChildrenRender = (
    item: MenuDataItem, 
    RenderDOM: ReactNode
  ): ReactNode => {
    return <Link to={ item.path || '/' } >{ RenderDOM }</Link>
  }

  return (
    <div className={styles.appBody}>
      <ProLayout
        location={{
          pathname: '/'
        }}
        navTheme="light"
        onMenuHeaderClick={() => history.push('/')}
        fixSiderbar
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: [
            {
              path: '/desktop',
              name: '首页',
              icon: 'icon-shoucang1',
              routes: [{
                path: '/desktop',
                name: '首页',
                icon: 'icon-shoucang1',
              }]
            },
          ],
        }}
        menuItemRender={ MenuChildrenRender }
      >
        <PageContainer content="欢迎使用">
          <div>{children}</div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default AppLayout;
