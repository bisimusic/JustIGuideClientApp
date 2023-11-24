import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Photo from "@/components/Photo";

const PhotoEditingPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Case Tracker">
                <Question
                    content="Stay on track with your case "
                    time="Just now"
                    image="/images/photo.jpg"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Photo
                        image="/images/photo-1.jpg"
                        content="I have uploaded the enhanced version of your case photo for better clarity."
                    />
                    
                </Answer>
              <Question
                    content=  "Please update the case details"
                    time="Just now"
                />
                <Answer time="Just now">
                    <Photo
                        image="/images/photo-2.jpg"
                        content="You can upload new documents here."
                        colorPicker
                    />
                </Answer>
                <Answer time="Just now">
                    <Photo
                        image="/images/photo-3.jpg"
                        content="Variation one"
                    />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                // image="/images/photo.jpg"
            />
        </Layout>
    );
};

export default PhotoEditingPage;
