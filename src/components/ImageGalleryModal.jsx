import { useState, useEffect } from 'react';
import serviceImages from '../data/serviceImages.json';

export default function ImageGalleryModal({ category, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // If no category selected or category invalid, render nothing
    const images = category ? serviceImages[category] : null;

    useEffect(() => {
        setCurrentIndex(0);
        // Disable scroll when modal is open
        if (category) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [category]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!category) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [category, currentIndex]);

    if (!category || !images || images.length === 0) return null;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={`gallery-modal-overlay ${category ? 'open' : ''}`} onClick={onClose}>
            <div className="gallery-modal-header">
                <div className="gallery-modal-title">
                    <span>{category}</span> Gallery
                </div>
                <button className="gallery-close-btn" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                <button className="gallery-nav-btn prev" onClick={prevImage}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="gallery-image-wrapper">
                    <img src={images[currentIndex]} alt={`${category} gallery item ${currentIndex + 1}`} />
                </div>

                <button className="gallery-nav-btn next" onClick={nextImage}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <div className="gallery-thumbnails" onClick={(e) => e.stopPropagation()}>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        className={`gallery-thumbnail ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
}
