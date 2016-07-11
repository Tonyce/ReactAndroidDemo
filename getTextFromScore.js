'use strict';

function getTextFromScore(score: number): string {
    return score > 0 ? score + '%' : 'N/A';
}

export default getTextFromScore;
