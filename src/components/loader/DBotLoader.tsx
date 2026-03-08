import React, { useEffect, useState } from 'react';
import './DBotLoader.scss';

interface DBotLoaderProps {
    onFinish: () => void;
}

const DBotLoader: React.FC<DBotLoaderProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing Signals Center');
    const [currentStep, setCurrentStep] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Show modal after 3 seconds at 100%
                    setTimeout(() => {
                        setShowModal(true);
                    }, 3000);
                    return 100;
                }
                return prev + 2;
            });
        }, 100);

        // Update loading text based on progress - showcasing site features
        const textInterval = setInterval(() => {
            const texts = [
                'Initializing Signals Center',
                'Loading Zeus Analysis',
                'Preparing TrackTool',
                'Setting up Speed Bot',
                'Configuring Copy Trading',
                'Loading Bot Builder'
            ];
            setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
            setCurrentStep(prev => (prev >= 6 ? 1 : prev + 1));
        }, 800);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        onFinish();
    };

    const handleMaybeLater = () => {
        setShowModal(false);
        onFinish();
    };

    return (
        <>
            <div className="dbot-loader">
                <div className="dbot-loader__container">
                    {/* Logo */}
                    <div className="dbot-loader__logo">
                        <div className="dbot-loader__logo-icon">D</div>
                        <div className="dbot-loader__logo-text">
                            <h1>State FX</h1>
                            <p>statefx.com</p>
                        </div>
                        <span className="dbot-loader__version">v2</span>
                    </div>

                    {/* AI Engine Status */}
                    <div className="dbot-loader__ai-status">
                        <div className="dbot-loader__ai-indicator"></div>
                        <span>AI Engine</span>
                        <span className="dbot-loader__ai-percentage">{progress}%</span>
                    </div>

                    {/* Progress Section */}
                    <div className="dbot-loader__progress-section">
                        <div className="dbot-loader__progress-header">
                            <span>INIT</span>
                            <span className="dbot-loader__progress-value">{progress}%</span>
                        </div>
                        <div className="dbot-loader__progress-bar">
                            <div 
                                className="dbot-loader__progress-fill" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="dbot-loader__loading-text">
                            {loadingText}
                            <span className="dbot-loader__step-count">{currentStep}/6</span>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="dbot-loader__features">
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                                </svg>
                            </div>
                            <span>Signals Center</span>
                        </div>
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    <circle cx="13" cy="2" r="1.5" fill="currentColor"/>
                                    <circle cx="12" cy="22" r="1.5" fill="currentColor"/>
                                </svg>
                            </div>
                            <span>Zeus Analysis</span>
                        </div>
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="6.5" y1="10" x2="6.5" y2="14" stroke="currentColor" strokeWidth="1.5"/>
                                    <line x1="17.5" y1="10" x2="17.5" y2="14" stroke="currentColor" strokeWidth="1.5"/>
                                    <line x1="10" y1="6.5" x2="14" y2="6.5" stroke="currentColor" strokeWidth="1.5"/>
                                    <line x1="10" y1="17.5" x2="14" y2="17.5" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <span>TrackTool</span>
                        </div>
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                                    <path d="M12 3v1M12 20v1M21 12h-1M4 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span>Speed Bot</span>
                        </div>
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M16 11h6M19 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <circle cx="19" cy="11" r="1.5" fill="currentColor"/>
                                </svg>
                            </div>
                            <span>Copy Trading</span>
                        </div>
                        <div className="dbot-loader__feature-card">
                            <div className="dbot-loader__feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
                                    <circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>
                                    <circle cx="7.5" cy="16.5" r="1" fill="currentColor"/>
                                    <circle cx="16.5" cy="16.5" r="1" fill="currentColor"/>
                                </svg>
                            </div>
                            <span>Bot Builder</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Modal */}
            {showModal && (
                <div className="community-modal">
                    <div className="community-modal__overlay" onClick={handleCloseModal}></div>
                    <div className="community-modal__content">
                        <button className="community-modal__close" onClick={handleCloseModal}>×</button>
                        
                        <div className="community-modal__icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="community-modal__title">Join Our Trading Community</h2>
                        <p className="community-modal__subtitle">Connect & Grow Together</p>

                        <div className="community-modal__description">
                            <div className="community-modal__description-icon">💬</div>
                            <p>Connect with fellow traders! Share your trading experiences, strategies, and get the latest updates on new features and classes.</p>
                        </div>

                        <div className="community-modal__buttons">
                            <a href="https://chat.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--whatsapp">
                                Join WhatsApp Channel
                            </a>
                            <a href="https://t.me/your-channel" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--telegram">
                                Join Telegram
                            </a>
                            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--youtube">
                                Subscribe YouTube
                            </a>
                        </div>

                        <div className="community-modal__links">
                            <p>Get access to strategies, bots and guides sent earlier on our channels</p>
                            <a href="https://chat.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
                            <a href="https://t.me/your-channel" target="_blank" rel="noopener noreferrer">Telegram Channel</a>
                            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
                        </div>

                        <div className="community-modal__actions">
                            <button className="community-modal__action community-modal__action--no" onClick={handleCloseModal}>
                                NO THANKS
                            </button>
                            <button className="community-modal__action community-modal__action--later" onClick={handleMaybeLater}>
                                MAYBE LATER
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DBotLoader;
