import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Services from "@/components/Services";
import Audio from "@/components/Audio";

const AudioGenerationPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Hello">
                <Question content="Hello 🙂" time="Just now" />
                <Answer>Hello! How can I help you today?</Answer>
                <Question content="Show me what you can do" time="Just now" />
                <Answer loading />
                <Answer time="Just now">
                    <Services />
                </Answer>
                <Question
                    content={
                        <>
                            <p>Text to speech voice:</p>
                            <p>
                            Introducing "JustiGuide," a
                            n AI-powered platform designed to simplify your legal needs. 
                            Utilizing advanced natural language processing and AI algorithms, 
                            JustiGuide can answer all your legal queries in multiple languages, c
                            reate timelines for your cases, and even make lawyer referrals tailored to your budget and needs. 
                            Features like Dolores AI, Case Tracker, and Cost Calculator empower you to navigate through your legal journey with ease and confidence. 
                            Additional customization options enable you to adapt the platform to suit your unique circumstances. 
                            With JustiGuide, managing your legal affairs has never been more efficient and user-friendly.
                            </p>
                        </>
                    }
                    time="Just now"
                />
                <Answer time="Just now">
                    <Audio />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </Layout>
    );
};

export default AudioGenerationPage;
