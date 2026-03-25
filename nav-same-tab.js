// Make external navbar links open in the same tab
document.addEventListener('click', function(e) {
	var link = e.target.closest('#navbar a[target="_blank"]')
	if (link) {
		e.preventDefault()
		e.stopPropagation()
		window.location.href = link.href
	}
}, true)
