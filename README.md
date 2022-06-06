
# igottp

A simple http client that adds spice to the native fetch.

igottp have some advantages:
- Can be used on web pages or node
- Provide a flexible and extendable interface
- Have its own code generator  
- Preserve the full capabilities of the fetch API 

## Quick start
### Installation

Using npm:

    $ npm install igottp --save

igottp requires the [global `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch) function, witch is provided by the modern browsers or by node 16. If you are working with an older version of node or a browser that doesn't support fetch API you should install a polyfill of your preference. There are some good polyfills available, choose one that best fit to your needs.

## Usage

The first step to use igottp http client is to build a client. In this process you can configure common parameters that will be used for all requests. It can be done by calling the function `builder()`. See the example bellow:

```javascript
    import {builder} from 'igottp';
    let http = builder()
        .withBaseUrl('http://example.com/services')
        .type('json')
        .build();
```
After building the client, you can make requests.
For example, you can make a `GET` request easily:
```javascript
    http.get('/api/getsomething').then(data => console.log(data));
```
Or a `POST` request like this:

```javascript
    http.postForEntity('/api/customers', {name:'John von Neumann'});
```

## API-Docs
You can find the full documentation on the [wiki](https://github.com/gottabe-io/igottp/wiki)

## Changelog
* See [Github Releases](https://github.com/gottabe-io/igottp/releases) for recent versions of this api;
* For versions future versions, see the [Changelog](https://github.com/gottabe-io/igottp/blob/main/CHANGELOG.md)

## Reporting issues
If you have any issues related to library please fill in [GH Issues.](https://github.com/gottabe-io/igottp/issues)
