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
        },
        addMessageToConversation(state, message) {
            state.conversationArray.push(message);
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
                const response = await fetch(`http://localhost:8000/api/messages/conversation/${conversationID}`);
                const json = await response.json();
                commit('setConversationMessages', json);
            } catch (error) {
                console.error(error)
            }
        },
        async sendMessage({ commit }) {
            try {
                const data = {
                    message : {
                        conversation_id: 1,
                        sender_id: 1,
                        message: 'message'
                    }
                  };
                  console.log(data)
                const response = await fetch(`http://localhost:8000/api/messages/create`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin':  'http://localhost:8080'
                    },
                    body: JSON.stringify(data)
                    
                });
                if (response.ok) {
                    commit('addMessageToConversation', 'message');
                }
                // const json = await response.json();
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