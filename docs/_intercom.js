if (typeof window != 'undefined') {
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/bmbvqzx1';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    //prepare
    window.Intercom('boot', {
        api_base: 'https://api-iam.intercom.io',
        app_id: 'bmbvqzx1'
    })

    //get logged user
    fetch('https://api.raindrop.io/v1/user', { credentials: 'include' })
        .then(async res=>{
            const { user } = await res.json()

            Intercom('update', {
                user_id: user._id,
                name: user.name,
                email: user.email,
                created_at: user.registered,
                pro: user.pro
            })
        })
        .catch(e=>{})

    //navigation change
    window.addEventListener('popstate', function(){
        window.Intercom('update')
    })

    //open form automatically
    window.addEventListener('load', function(){
        if (new URLSearchParams(location.search).get('open-contact-form') !== null)
            window.Intercom('show')
    })
}