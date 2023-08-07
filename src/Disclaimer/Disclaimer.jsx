import React from 'react';

const Disclaimer = () => {
    return (
        <div className="bg-white min-h-screen py-8 md:pt-20 pt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-semibold mb-4">Disclaimer</h2>
                <p className="mb-4 ">
                    Welcome to NoteSync! The information provided on this website is for educational and informational purposes only. The content, including notes, articles, and resources, is created by contributors and users of the platform and may not always be accurate, up-to-date, or complete.
                </p>
                <p className="mb-4">
                    NoteSync does not guarantee the accuracy or reliability of any information presented on this website. Users are encouraged to verify information, conduct independent research, and consult with qualified professionals before making any decisions based on the content found here.
                </p>
                <p className="mb-4">
                    The use of NoteSync and its content is at your own risk. NoteSync, its creators, contributors, and affiliates will not be held liable for any damages, losses, or consequences arising from the use of the information provided on this website.
                </p>
                <p className="mb-4">
                    By using this website, you acknowledge and agree to the terms of this disclaimer. If you have any questions or concerns about the content or accuracy of information on NoteSync, please contact us.
                </p>
                <p className="mb-4">
                    We encourage our users to contribute accurate and reliable content, but we cannot guarantee the authenticity of all contributions. If you come across any content that you believe is inaccurate or inappropriate, please report it to us for review.
                </p>
                <p className="mb-4">
                    By using this website, you acknowledge and agree to the terms of this disclaimer. If you have any questions or concerns about the content or accuracy of information on NoteSync, please contact us {' '}
                    <a href="mailto:privacy@notesync.com" className="text-blue-500 underline">
                        helpme@notesync.in
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
