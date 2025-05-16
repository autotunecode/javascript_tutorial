// Vue.js App Logic
const { createApp, ref, reactive } = Vue; // Vue3

document.addEventListener('DOMContentLoaded', () => {
    createApp({
        setup() {
            const activeTab = ref('vue-panel1'); // 初期アクティブタブID
            const tabs = reactive([
                { id: 'vue-panel1', title: 'タブ 1', content: 'これはVue.jsで実装されたタブ1のコンテンツです。' },
                { id: 'vue-panel2', title: 'タブ 2', content: 'これはVue.jsで実装されたタブ2のコンテンツです。' },
                { id: 'vue-panel3', title: 'タブ 3', content: 'これはVue.jsで実装されたタブ3のコンテンツです。' }
            ]);

            return {
                activeTab,
                tabs
            };
        }
    }).mount('#vue-app');
}); 