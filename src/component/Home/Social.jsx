
export default function Social() {
    const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
    const instaUsername = import.meta.env.VITE_INSTAGRAM_USERNAME;
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;

    return (
        <div className="home__social">
            <a href={`https://www.linkedin.com/in/${linkedinUsername}`} className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href={`https://github.com/${githubUsername}`} className="home__social-icon" target="_blank">
                <i className="uil uil-github"></i>
            </a>

            <a href={`https://instagram.com/${instaUsername}`} className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>

            {/* can add more */}
        </div>
    )
};