setInterval(() => {
    fetch('/version.txt')
        .then(res => res.text())
        .then(version => {
            if (version !== localStorage.getItem('page_version')) {
                localStorage.setItem('page_version', version);
                location.reload();
            }
        });
}, 15000);