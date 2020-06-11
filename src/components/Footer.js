import React from "react"

const Footer = () => {
    return(
        <div className="site-footer">
            <h4 className="text-center">Gatsby Dev Blog</h4>
            <p className="text-center">Follow us on our social media channels:</p>
            <div className="footer-social-links">
                <ul className="social-links-list">
                    <li>
                        <a href="https://github.com/timtangonan" target="_blank" rel="noopener noreferrer" className="github">
                            <i class="fab fa-github-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/timtangonan" target="_blank" rel="noopener noreferrer" className="twitter">
                            <i class="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/timtangonan" target="_blank" rel="noopener noreferrer" className="codepen">
                        <i class="fab fa-codepen fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer