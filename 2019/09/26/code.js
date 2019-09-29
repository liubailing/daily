changeProxyIp = (ip, times) => {
    if (times > 15) return;
    let setProxyId = setTimeout(x => {
        clearTimeout(setProxyId)
        changeProxyIp(ip, ++times);
    }, 1000);
}

changeProxyIp("test", 1)