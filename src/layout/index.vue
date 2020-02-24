<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, TagsView, AppMain } from "./components";
import { mapState } from "vuex";
export default {
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain
  },
  computed: {
    ...mapState({
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    })
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/variables.less";
.app-wrapper {
  .clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - @sideBarWidth);
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>>