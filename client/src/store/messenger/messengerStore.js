export default {
    namespaced: true,
    state: {
        myConversations: [],
    },
    mutations: {
        setMyConversations(state, conversationArray) {
            state.myConversations = conversationArray;
        },
    },
    actions: {
        async selectMyConversations({ commit }) {
            try {
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
    }
}