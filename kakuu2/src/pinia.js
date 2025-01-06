import { defineStore } from 'pinia'

export const pageCommitStore = defineStore('currentPage', {
    state: () => {
        return {
            page: 'default',
        }

    },
})
