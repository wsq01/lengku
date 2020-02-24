<template>
  <div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu :default-active="activeMenu" :collapse-transition="false" :active-text-color="variables.menuActiveText" :text-color="variables.menuText" :background-color="variables.menuBg" :collapse="isCollapse">
            <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
        </el-menu>
      </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.less'
export default {
    components: {
        SidebarItem
    },
    computed: {
        ...mapGetters([
            'permission_routes',
            'sidebar'
        ]),
        variables() {
            return variables
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            if(meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    }
}
</script>

<style>

</style>