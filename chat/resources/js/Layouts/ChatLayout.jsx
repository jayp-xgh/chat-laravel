import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log("conversations", conversations);
    console.log("SelectedConversation", selectedConversation);

    useEffect(() => {
        Echo.join('online')
            .here((users) => {
                console.log("Here", users);
            })
            .joining((user) => {
                console.log("Joining", user);
            })
            .leaving((user) => {
                console.log("Leaving", user);
            })
            .error((error) => {
                console.error(error);
            }); 
    }, []);

    return (
        <>
            Chat Layout
            <div>{ children }</div>
        </>
    );
}

export default ChatLayout;
