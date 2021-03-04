---
title: Login Problems
---

## Solutions
### Reset your password
First of try to [reset your password](../forgot-password.md). If this doesn't help try other solutions below.

### Add Raindrop.io to cookies exception list
If you need to login everytime you reopen browser or login just doesn't work.
Seems your browser blocking our cookies. Try to add our domain to list of exceptions:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="chrome"
    values={[
        {label: 'Chrome', value: 'chrome'},
        {label: 'Firefox', value: 'firefox'}
    ]}>
    <TabItem value="chrome">
        Paste this URL <b>chrome://settings/content/cookies</b> to address bar and press enter.
        In the bottom of the page click "Add" and paste this string <b>[*.]raindrop.io</b>
    </TabItem>
    <TabItem value="firefox">
        Open settings. Go to "Privacy & Security" section. 
        Scroll to "Cookies and Site Data" and click "Manage Permissions..."  
        <img src={require('./firefox1.png').default} />
        Manually add all described domains and save changes.
        <img src={require('./firefox2.png').default} />
    </TabItem>
</Tabs>