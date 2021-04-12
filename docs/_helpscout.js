if (typeof window != 'undefined') {
    !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});

    window.Beacon('init', 'a95b86ac-f480-49d4-96ca-b2e04267f5ff')
    window.Beacon('config', {
        color: '#1988E0',
        display: {
            style: 'iconAndText',
            text: 'Send a message',
            position: 'right'
        }
    })

    //get users
    fetch('https://api.raindrop.io/v1/user', { credentials: 'include' })
        .then(async res=>{
            const { user } = await res.json()

            window.Beacon('identify', {
                id: user._id,
                name: user.fullName,
                email: user.email,
                plan: user.pro ? 'pro' : 'free'
            })
        })
        .catch(e=>{})

    //open form automatically
    window.addEventListener('load', function(){
        if (new URLSearchParams(location.search).get('open-contact-form') !== null)
            Beacon('open')
    })
}