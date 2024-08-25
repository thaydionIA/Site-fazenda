document.addEventListener('DOMContentLoaded', function() {
    const moreText = document.getElementById('more-text');
    const showMore = document.getElementById('show-more');
    const showLess = document.getElementById('show-less');

    function updateToggleState() {
        if (moreText.classList.contains('hidden')) {
            showMore.style.display = 'block';
            showLess.style.display = 'none';
        } else {
            showMore.style.display = 'none';
            showLess.style.display = 'block';
        }
    }

    updateToggleState();

    showMore.addEventListener('click', function() {
        moreText.classList.remove('hidden');
        updateToggleState();
    });

    showLess.addEventListener('click', function() {
        moreText.classList.add('hidden');
        updateToggleState();
    });
});
