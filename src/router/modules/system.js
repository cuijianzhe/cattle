import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'System',
  meta: {
    title: '系统设置',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/system/user'),
      name: 'User',
      meta: { title: '用户管理', noCache: false, icon: 'el-icon-user', sign: 'user' }
    },
    {
      path: 'user/:id(\\d+)',
      component: () => import('@/views/system/user/detail'),
      name: 'UserDetail',
      hidden: true,
      meta: { title: '用户详情', noCache: false, sign: 'user', activeMenu: '/system/user' }
    }
  ]
}

export default systemRouter
