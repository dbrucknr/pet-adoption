export default {
    namespaced: true,
    state: {
        myConversations: [],
        showSidebar: false,
    },
    mutations: {
        setMyConversations(state, conversationArray) {
            state.myConversations = conversationArray;
        },
        setShowSidebar(state, boolean) {
            state.showSidebar = boolean;
        }
    },
    actions: {
        async selectMyConversations({ commit }) {
            try {
                console.log('Test')
                const response = await fetch('http://localhost:8000/api/conversations/my-conversations/1');
                const json = await response.json();
                commit('setMyConversations', json)
            } catch (error) {
                console.error(error)
            }
        },
    },
    getters: {
        getMyConversations(state) {
            return state.myConversations
        },
        getShowSidebar(state) {
            return state.showSidebar
        }
    }
}