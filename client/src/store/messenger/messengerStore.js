export default {
    namespaced: true,
    state: {
        conversationMessages: [],
        myConversations: [],
        showSidebar: false,
    },
    mutations: {
        setConversationMessages(state, messageArray) {
            state.conversationMessages = messageArray;
        },
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
                const response = await fetch('http://localhost:8000/api/conversations/my-conversations/1');
                const json = await response.json();
                commit('setMyConversations', json);
            } catch (error) {
                console.error(error)
            }
        },
        async loadConversationMessages({ commit }, conversationID) {
            try {
                const response = await fetch(`http://localhost:8000/api/messages//conversation/${conversationID}`);
                const json = await response.json();
                commit('setConversationMessages', json);
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getConversationMessages(state) {
            return state.conversationMessages
        },
        getMyConversations(state) {
            return state.myConversations
        },
        getShowSidebar(state) {
            return state.showSidebar
        }
    }
}