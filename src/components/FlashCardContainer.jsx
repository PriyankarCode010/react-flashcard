import { useState } from 'react';
import flashcardsData from '../data/data-flashcards.json';
import { ProgressBar } from './ProgressBar';
import { FlashCard } from './FlashCard';

export const FlashCardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === flashcardsData.length - 1 ? flashcardsData.length - 1 : prevIndex + 1
        ) % flashcardsData.length);
        setIsFlipped(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === 0 ? 0 : prevIndex - 1
        ) % flashcardsData.length);
        setIsFlipped(false); 
    };

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <>
            {/* Componente ProgressBar */}
            <ProgressBar currentIndex={currentIndex} totalCards={flashcardsData.length} />
            <div className='flashcard-section'>
                <FlashCard
                    question={flashcardsData[currentIndex].question}
                    answer={flashcardsData[currentIndex].answer}
                    isFlipped={isFlipped}
                    onFlip={handleFlip}
                />

                <div className="controls">
                    <div className='previous-next' onClick={handlePrevious}>
                        <p>&lt; Previous</p>
                    </div>
                    <button className="show-hide-answer" onClick={handleFlip}>
                        {
                            isFlipped ? ("Hide Answer") : ("Show Answer")
                        }
                    </button>
                    <div className='previous-next' onClick={handleNext}>
                        <p>Next &gt;</p>
                    </div>

                </div>
            </div>
        </>
    );
};

