document.getElementById('copy-btn').addEventListener('click', function() {
    const textElement = document.querySelector('.text-to-copy'); // Change the selector to match your text element
    navigator.clipboard.writeText(textElement.textContent).then(function() {
        alert('テキストがコピーされました');
    }).catch(function(err) {
        console.error('コピーに失敗しました', err);
    });
});
