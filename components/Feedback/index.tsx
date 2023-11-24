import Details from "./Details";
import Assessment from "./Assessment";

type FeedbackProps = {};

const Feedback = ({}: FeedbackProps) => (
    <div className="">
        <div className="max-w-[38rem] mb-5 bg-n-1 rounded-2xl xl:max-w-full dark:bg-n-6">
            <Details />
            <Assessment />
        </div>
        <div className="mb-5 body1 md:body1S">
        JustiGuide is here to simplify your legal needs
        </div>
        <div className="">
            <p className="mb-4">
                <strong>Read regularly:</strong>Have a legal query? Dolores can answer in any language, explain the topic, and even refer you to the right lawyer.
            </p>
            <p className="mb-4">
                <strong>CaseTracker:</strong> WUpload a photo of your case documents and Case Tracker will identify the needed forms and create a deadline timeline for you. 
            </p>
            <p className="mb-4">
                <strong>CostCalculator:</strong> Calculate the potential costs of your legal needs, understand when to bring in a lawyer, and get cost-effective referrals.
            </p>
            <p className="mb-4">
                <strong>LawyerReferral:</strong> Need a lawyer? JustiGuide can connect you with the right legal expert based on your case and budget.
            </p>
            <p>
                <strong>Keep Documentation:</strong> Always keep all relevant documentation for your legal needs. This can be crucial for your case.
            </p>
        </div>
    </div>
);

export default Feedback;
