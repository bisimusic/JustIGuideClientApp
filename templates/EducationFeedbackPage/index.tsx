import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Feedback from "@/components/Feedback";

const EducationFeedbackPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Review test and provide feedback">
                <Question
                    document="Student-test.pdf"
                    content="Provide feedback on your experience so we can improve our service."
                    time="Just now"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Feedback />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                // document="Student-test.pdf"
            />
        </Layout>
    );
};

export default EducationFeedbackPage;
