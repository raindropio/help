if (typeof window != 'undefined') {
    function openTarget() {
        var hash = location.hash.substring(1);
        if(!hash) return

        setTimeout(() => {
            var anchor = document.getElementById(hash);
            if(!anchor) return
            
            const details = anchor.closest("details")
            if (details)
                details.open = true

            anchor.scrollIntoView()
        })
    }

    window.addEventListener('hashchange', openTarget)
    window.addEventListener('popstate', openTarget)
    window.addEventListener('load', openTarget)
}