if (typeof window != 'undefined') {
    function expand(anchor) {
        if(!anchor) return

        const details = anchor.closest("details")
        if (details){
            details.open = true
            expand(details.parentNode)
        }

        anchor.scrollIntoView({behavior: 'smooth'})

        return true
    }

    function openTarget() {
        var hash = location.hash.substring(1);
        if(!hash) return

        if (!expand(document.getElementById(hash)))
            setTimeout(() => {
                expand(document.getElementById(hash))
            })
    }

    window.addEventListener('hashchange', openTarget)
    window.addEventListener('popstate', openTarget)
    window.addEventListener('load', openTarget)
}