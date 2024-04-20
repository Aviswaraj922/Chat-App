import {create} from 'zustand';
// import Messages from '../components/messages/Messages';


const useConversation=create((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}));


export default useConversation;