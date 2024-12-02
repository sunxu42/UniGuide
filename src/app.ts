// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Uni Guide' };
}

export const layout = () => {
  return {
    title: 'Uni Guide',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },

    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    // menuHeaderRender: undefined,

    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};
