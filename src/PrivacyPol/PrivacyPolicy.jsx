import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen py-8 md:pt-20 pt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">
                    This Privacy Policy was last updated on August 4, 2023.<br></br>
                    <br />
                    Welcome to NoteSync, a platform dedicated to providing engineering students with a seamless and efficient way to create, manage, and share their study notes. Your privacy is important to us, and we are committed to ensuring the security and confidentiality of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
                <p className="mb-4">
                    We collect information that you provide directly to us. This may include:<br />
                    1. Providing Services: Your account information and study notes enable us to deliver our note-sharing and organization services effectively.<br />
                    2. Improving User Experience: We analyze usage data to enhance our platform's features, functionality, and performance.<br />
                    3. Communication: We may use your email address to send you important updates, service notifications, and promotional content related to NoteSync.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">GDPR (General Data Protection Regulation):</h2>
                <p className="mb-4">
                    Under the General Data Protection Regulation (GDPR), we are committed to safeguarding your personal data and ensuring your privacy. When you use NoteSync, we collect and process certain information to provide you with our note-sharing services and improve your user experience. This may include your account details, study notes, and usage data. We utilize this data to personalize your interactions, optimize our platform, and communicate important updates to you.
                </p>


                <h2 className="text-xl font-semibold mt-6 mb-2">CPRA (California Privacy Rights Act):</h2>
                <p className="mb-4">
                    The California Privacy Rights Act (CPRA) enhances your data privacy rights as a California resident. As part of our commitment to your privacy, we want to ensure that you have control over your personal information. When you use NoteSync, we may collect and process data for various purposes, including providing our note-sharing services and displaying relevant advertisements.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information you provide to:
                    - Provide and maintain our services
                    - Improve, personalize, and expand our services
                    - Respond to your comments, questions, and requests
                    - Send you technical notices, updates, security alerts, and support and administrative messages
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
                <p className="mb-4">
                    We may share your personal information with:
                    - Service providers who perform services on our behalf
                    - Legal and regulatory authorities, upon request, or as required by applicable laws
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Google AdSense</h2>
                <p className="mb-4">
                    NoteSync uses Google AdSense to serve advertisements. Google AdSense utilizes advertising cookies to display ads based on your browsing behavior. You can manage your ad preferences and opt out of personalized advertising by visiting Google Ad Settings.
                    <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Google Ad Settings
                    </a>
                    .
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@notesync.com" className="text-blue-500 underline">
                        helpme@notesync.in
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
