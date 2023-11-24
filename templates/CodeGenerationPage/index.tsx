import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { writeCodeChat } from "@/mocks/writeCodeChat";

const CodeGenerationPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Dolores AI">
                <Question
                    content="Hello! How can I assist you today?"
                    time="Just now"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Code items={writeCodeChat} />
                </Answer>
                <Question
                    content={<a href="https://www.justi.guide/sign-in?callbackUrl=https%3A%2F%2Fwww.justi.guide%2Fsign-in">Click here to check out our demo</a>}
                    time="Just now"
                />
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </Layout>
    );
};

export default CodeGenerationPage;
