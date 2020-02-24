import defaultSettings from '@/settings'

const { fixedHeader, tagsView } = defaultSettings
const state = {
    fixedHeader,
    tagsView
}

export default {
    namespaced: true,
    state
}