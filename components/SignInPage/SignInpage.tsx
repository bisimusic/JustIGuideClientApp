import React, { FormEvent } from 'react';

const SignInPage: React.FC = () => {
    const handleSignIn = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;

        // Do authentication here (e.g., make API call)
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;
