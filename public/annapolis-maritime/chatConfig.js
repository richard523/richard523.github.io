const chatConfig = {
  // chatflowid: 'ffdd7c40-c401-42b8-9a59-ed1d2699044d',
  apiHost: 'https://flowise-repsix.onrender.com',
  chatflowid: "c509ba88-4cb2-4632-98d3-b74f5a2e55ef",
                    apiHost: "https://flowise-repsix.onrender.com",
                    theme: {
                        button: {   
                            backgroundColor: '#3f4a69',
                            right: 20,
                            bottom: 20,
                            size: 'large',
                            iconColor: 'white',
                        },
                    chatWindow: {
                        // showTitle: true, // show/hide the title bar
                        title: 'AMA&W Virtual Assistant',
                        titleAvatarSrc: 'https://i.imgur.com/r7bjeZx.png',
                        fontSize: 15,
                    welcomeMessage: 'Hi! I am the Annapolis Maritime Antiques Virtual assistant. How can I help?',
                        botMessage: {
                            backgroundColor: '#f7f8ff',
                            textColor: '#000000',
                            showAvatar: true,
                            avatarSrc: 'https://i.imgur.com/jmXbtRs.jpeg',
                        },
                        userMessage: {
                            backgroundColor: '#3f4a69',
                            textColor: '#f2efdd',
                        },
                        textInput: {
                            placeholder: 'Ask about our products',
                            backgroundColor: '#f7f8ff',
                            textColor: '#000000',
                            sendButtonColor: '#3f4a69',
                        },
                    }
                }
  
};

export function getChatConfig() {
  const urlParams = new URLSearchParams(window.location.search);
  const chatflowid = urlParams.get('chatflowid');
  if (chatflowid) {
    chatConfig.chatflowid = chatflowid;
    const chatflowidInput = document.getElementById('chatflowid');
    chatflowidInput.value = chatflowid;
  }
  return chatConfig;
}

export default chatConfig;

