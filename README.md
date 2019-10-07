# react-use-scroll-lock [![Build Status](https://travis-ci.org/moldy530/react-use-scroll-lock.svg?branch=master)](https://travis-ci.org/moldy530/react-use-scroll-lock)
React custom hook to conditionally enable body scroll lock.

### Installation
``` 
npm install --save react-use-scroll-lock
```

### Usage
```js
import React, { useState } from 'react';
import useScrollLock from 'react-use-scroll-lock';

const MyComponent = () => {
    const [shouldLockBody, setShouldLockBody] = useState(false);
    useScrollLock(shouldLockBody);
    
    return <div> Hi World </div>;
}

export default MyComponent;
```
