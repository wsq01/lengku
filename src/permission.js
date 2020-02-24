import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = '冷库监控平台'
    const hasToken = true
    if(hasToken) {
        if(to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if(hasRoles) {
                next()
            } else {
                const accessRoutes = await store.dispatch('permission/generateRoutes', ['admin'])
                router.addRoutes(accessRoutes)
                next({...to, replace: true})
            }
        }
    } else {
        next('/login')
        NProgress.done()
    }
})
router.afterEach(() => {
    NProgress.done()
})