
const RatingBadge = (p) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        maximumFractionDigits: 0
    });
    return (
        <div class="flex flex-col items-center w-fit gap-2">
            <div class={`bg-sun-300 font-semibold rounded-full flex items-center justify-center w-20 h-20 ${p.class || ''}`}>
                {p.rating ? (p.rating * 1).toFixed(1) : '-'}
            </div>

            <span class="text-gray-600 text-xs text-center">
                {p.reviewCount ? formatter.format(p.reviewCount) : 'No'}
                {p.reviewCount != 1 ? ' Reviews' : ' Review'}
            </span>
        </div>
    );
}

export default RatingBadge;