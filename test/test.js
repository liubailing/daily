(function () {
    try {
        let iframeNode = document.evaluate(`//IFRAME[@id='g_iframe']`,
            document.documentElement, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        debugger;
        if (!iframeNode) return 'error iframe';
        let str = document.evaluate(`//DIV[@id='song-list-pre-cache']/DIV[1]/DIV[1]/TABLE[1]/TBODY[1]/TR`,
            iframeNode.contentWindow.document.documentElement,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        console.log('str::', str);
        return str;
    } catch (error) {
        console.error(error);
        return false;
    }
})()


    (function () {
        try {
            let el = document.evaluate(`(//DIV[@id='song-list-pre-cache']/DIV[1]/DIV[1]/TABLE[1]/TBODY[1]/TR)[1]/TD[2]/DIV[1]/DIV[1]/DIV[1]/SPAN[1]/A[1]/B[1]/DIV[1]`,
                document.documentElement,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
            if (el == null) return '';
            console.log('str::', el);
            return el.innerText;
        } catch (error) {
            console.error(error);
            return '';
        }
    })()