function handleOpenURL(url) {
    console.log("External load - received url: " + url);
    localStorage.setItem("deepLink", url);
    var event = new CustomEvent('deepLink', { 'detail': url });
    window.dispatchEvent(event);
}
