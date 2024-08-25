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



document.addEventListener('DOMContentLoaded', function() {
    const moreText2 = document.getElementById('more-text2');
    const showMore2 = document.getElementById('show-more2');
    const showLess2 = document.getElementById('show-less2');

    function updateToggleState2() {
        if (moreText2.classList.contains('hidden2')) {
            showMore2.style.display = 'block';
            showLess2.style.display = 'none';
        } else {
            showMore2.style.display = 'none';
            showLess2.style.display = 'block';
        }
    }

    updateToggleState2();

    showMore2.addEventListener('click', function() {
        moreText2.classList.remove('hidden2');
        updateToggleState2();
    });

    showLess2.addEventListener('click', function() {
        moreText2.classList.add('hidden2');
        updateToggleState2();
    });
});
