const getters = {
    permission_routes: state => state.permission.routes,
    sidebar: state => state.app.sidebar,
    roles: state => state.user.roles,
    device: state => state.app.device,
    avatar: state => state.user.avatar
}
export default getters