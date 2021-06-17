function legacyCopyToClipboard(id) {
    let ti = document.getElementById(id);
    ti.focus();
    ti.select();

    try {
        if(document.execCommand("copy")) return 0;
        return 1;
    } catch (err) {
        return 2;
    }
}

function navigatorCopyToClipboard(data) {
    let r = 2;
    navigator.clipboard.writeText(data).then(function () {
        r = 0;
    }, function (err) {
        r = 1;
    });
    return r;
}

function copyToClipboard(id) {
    let data = document.getElementById("toxId").value;
    data = btoa(data);
    if(navigator.clipboard && navigatorCopyToClipboard(data) === 0) return 0;
    return legacyCopyToClipboard(id);
}
