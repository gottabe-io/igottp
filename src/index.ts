/*
Copyright 2022 gottabe-io

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
type HeaderSetCallback = (headers: any) => void;
type HeaderGetCallback = (headers: any) => void;
type FetchInvoker = (url: string, options?: any) => Promise<Response>;

export const HttpHeaders = {
    /**
     * The HTTP Accept header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">Section 5.3.2 of RFC 7231</a>
     */
    ACCEPT: 'Accept',
    /**
     * The HTTP Accept-Charset header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
     */
    ACCEPT_CHARSET: 'Accept-Charset',
    /**
     * The HTTP Accept-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
     */
    ACCEPT_ENCODING: 'Accept-Encoding',
    /**
     * The HTTP Accept-Language header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
     */
    ACCEPT_LANGUAGE: 'Accept-Language',
    /**
     * The HTTP Accept-Ranges header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
     */
    ACCEPT_RANGES: 'Accept-Ranges',
    /**
     * The CORS Access-Control-Allow-Credentials response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials',
    /**
     * The CORS Access-Control-Allow-Headers response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers',
    /**
     * The CORS Access-Control-Allow-Methods response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods',
    /**
     * The CORS Access-Control-Allow-Origin response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
    /**
     * The CORS Access-Control-Expose-Headers response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_EXPOSE_HEADERS: 'Access-Control-Expose-Headers',
    /**
     * The CORS Access-Control-Max-Age response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_MAX_AGE: 'Access-Control-Max-Age',
    /**
     * The CORS Access-Control-Request-Headers request header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_REQUEST_HEADERS: 'Access-Control-Request-Headers',
    /**
     * The CORS Access-Control-Request-Method request header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_REQUEST_METHOD: 'Access-Control-Request-Method',
    /**
     * The HTTP Age header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
     */
    AGE: 'Age',
    /**
     * The HTTP Allow header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
     */
    ALLOW: 'Allow',
    /**
     * The HTTP Authorization header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
     */
    AUTHORIZATION: 'Authorization',
    /**
     * The HTTP Cache-Control header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
     */
    CACHE_CONTROL: 'Cache-Control',
    /**
     * The HTTP Connection header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
     */
    CONNECTION: 'Connection',
    /**
     * The HTTP Content-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
     */
    CONTENT_ENCODING: 'Content-Encoding',
    /**
     * The HTTP Content-Disposition header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
     */
    CONTENT_DISPOSITION: 'Content-Disposition',
    /**
     * The HTTP Content-Language header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
     */
    CONTENT_LANGUAGE: 'Content-Language',
    /**
     * The HTTP Content-Length header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
     */
    CONTENT_LENGTH: 'Content-Length',
    /**
     * The HTTP Content-Location header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
     */
    CONTENT_LOCATION: 'Content-Location',
    /**
     * The HTTP Content-Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
     */
    CONTENT_RANGE: 'Content-Range',
    /**
     * The HTTP Content-Type header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
     */
    CONTENT_TYPE: 'Content-Type',
    /**
     * The HTTP Cookie header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
     */
    COOKIE: 'Cookie',
    /**
     * The HTTP Date header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
     */
    DATE: 'Date',
    /**
     * The HTTP ETag header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
     */
    ETAG: 'ETag',
    /**
     * The HTTP Expect header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
     */
    EXPECT: 'Expect',
    /**
     * The HTTP Expires header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
     */
    EXPIRES: 'Expires',
    /**
     * The HTTP From header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
     */
    FROM: 'From',
    /**
     * The HTTP Host header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
     */
    HOST: 'Host',
    /**
     * The HTTP If-Match header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
     */
    IF_MATCH: 'If-Match',
    /**
     * The HTTP If-Modified-Since header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
     */
    IF_MODIFIED_SINCE: 'If-Modified-Since',
    /**
     * The HTTP If-None-Match header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
     */
    IF_NONE_MATCH: 'If-None-Match',
    /**
     * The HTTP If-Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
     */
    IF_RANGE: 'If-Range',
    /**
     * The HTTP If-Unmodified-Since header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
     */
    IF_UNMODIFIED_SINCE: 'If-Unmodified-Since',
    /**
     * The HTTP Last-Modified header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
     */
    LAST_MODIFIED: 'Last-Modified',
    /**
     * The HTTP Link header field name.
     * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
     */
    LINK: 'Link',
    /**
     * The HTTP Location header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
     */
    LOCATION: 'Location',
    /**
     * The HTTP Max-Forwards header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
     */
    MAX_FORWARDS: 'Max-Forwards',
    /**
     * The HTTP Origin header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
     */
    ORIGIN: 'Origin',
    /**
     * The HTTP Pragma header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
     */
    PRAGMA: 'Pragma',
    /**
     * The HTTP Proxy-Authenticate header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
     */
    PROXY_AUTHENTICATE: 'Proxy-Authenticate',
    /**
     * The HTTP Proxy-Authorization header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
     */
    PROXY_AUTHORIZATION: 'Proxy-Authorization',
    /**
     * The HTTP Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
     */
    RANGE: 'Range',
    /**
     * The HTTP Referer header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
     */
    REFERER: 'Referer',
    /**
     * The HTTP Retry-After header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
     */
    RETRY_AFTER: 'Retry-After',
    /**
     * The HTTP Server header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
     */
    SERVER: 'Server',
    /**
     * The HTTP Set-Cookie header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
     */
    SET_COOKIE: 'Set-Cookie',
    /**
     * The HTTP Set-Cookie2 header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
     */
    SET_COOKIE2: 'Set-Cookie2',
    /**
     * The HTTP TE header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
     */
    TE: 'TE',
    /**
     * The HTTP Trailer header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
     */
    TRAILER: 'Trailer',
    /**
     * The HTTP Transfer-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
     */
    TRANSFER_ENCODING: 'Transfer-Encoding',
    /**
     * The HTTP Upgrade header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
     */
    UPGRADE: 'Upgrade',
    /**
     * The HTTP User-Agent header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
     */
    USER_AGENT: 'User-Agent',
    /**
     * The HTTP Vary header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
     */
    VARY: 'Vary',
    /**
     * The HTTP Via header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
     */
    VIA: 'Via',
    /**
     * The HTTP Warning header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
     */
    WARNING: 'Warning',
    /**
     * The HTTP WWW-Authenticate header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC 7235</a>
     */
    WWW_AUTHENTICATE: 'WWW-Authenticate',

};

const APPLICATION_JSON = 'application/json';

function createJsonOptions(ent:any, instance: any, options?:any) {
    let bodyData = new TextEncoder().encode(JSON.stringify(ent));
    let headers :any = {};
    headers[HttpHeaders.CONTENT_TYPE] = APPLICATION_JSON + '; charset=utf-8';
    headers[HttpHeaders.CONTENT_LENGTH] = bodyData.length;
    return Object.assign({}, options || {}, {
        headers,
        body: bodyData
    });
}

function createBlobOptions(ent:any, instance: any, options?:any) {
    let data = new FormData()
    Object.entries(ent).forEach(([k,v]) => data.append(k, <any>v, v instanceof File ? v.name : undefined));
    return Object.assign({}, options || {}, {
        body: data
    });
}

const insertQueryParams = (url:string, baseUrl: string | undefined, params:any) => {
    let _url = new URL(url,baseUrl || 'http://dummy');
    if (params)
        Object.entries(params).forEach((e, i) => {
            if (typeof e[1] != 'undefined' && e[1] != null)
            _url.searchParams.append(e[0], <string>e[1]);
        });
    return !baseUrl ? _url.toString().substring(12) : _url.toString();
};

/**
 * The interface for a http client
 */
export interface HttpClient {
    /**
     * Send a request with the GET method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    get(url:string, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the DELETE method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    delete(url:string, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the POST method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    post(url:string, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the PUT method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    put(url:string, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the PATCH method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    patch(url:string, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the POST method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    postForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the PUT method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    putForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any>;
    /**
     * Send a request with the PATCH method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    patchForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any>;
    /**
     * Send a request to the URL using the method in the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    request(url:string, options?:any) : Promise<Response | any>;
}

function setAcceptHeader(type: string | undefined, charset: string | undefined, headers: any) {
    if (type == 'json')
        headers[HttpHeaders.ACCEPT] = APPLICATION_JSON + (charset ? '; charset='+charset : '');
}

function getType(param: any, options: any) {
    return (options || {}).type || param.type;
}

class DefaultHttpClient implements HttpClient {
    baseUrl?: string;
    predefHeaders?: any;
    headerSetCallback?: HeaderSetCallback;
    responseHeadersCallback?: HeaderGetCallback;
    acceptType?: string;
    type?: string;
    mode?: string;
    cache?: string;
    charset?: string;
    fetchInvoker: FetchInvoker;
    constructor(baseUrl?: string, predefHeaders?: any, headerSetCallback?: HeaderSetCallback, responseHeadersCallback?: HeaderGetCallback, acceptType?: string, type?: string, mode?: string, cache?: string, charset?: string, fetchInvoker?: FetchInvoker) {
        this.baseUrl = baseUrl;
        this.predefHeaders = predefHeaders;
        this.headerSetCallback = headerSetCallback;
        this.responseHeadersCallback = responseHeadersCallback;
        this.acceptType = acceptType;
        this.type = type;
        this.mode = mode;
        this.cache = cache;
        this.charset = charset;
        this.fetchInvoker = fetchInvoker || ((url: string, options?: any) => fetch(url, options));
    }
    get (url:string, options?:any) : Promise<Response | any> {
        return this.request(url, Object.assign({}, options, { method: 'GET' }));
    }

    post (url:string, options?:any) : Promise<Response | any> {
        return this.request(url, Object.assign({}, options || {}, { method: 'POST' }));
    }

    put (url:string, options?:any) : Promise<Response | any> {
        return this.request(url, Object.assign({}, options || {}, { method: 'PUT' }));
    }

    postForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any> {
        if (getType(this,options) == 'json')
            options = createJsonOptions(body, this, options);
        if (getType(this,options) == 'blob' || getType(this,options) == 'form')
            options = createBlobOptions(body, this, options);
        return this.post(url, options);
    }

    putForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any> {
        if (getType(this,options) == 'json')
            options = createJsonOptions(body, this, options);
        if (getType(this,options) == 'blob' || getType(this,options) == 'form')
            options = createBlobOptions(body, this, options);
        return this.put(url, options);
    }

    patchForEntity<T>(url:string, body: T, options?:any) : Promise<Response | any> {
        if (getType(this,options) == 'json')
            options = createJsonOptions(body, this, options);
        if (getType(this,options) == 'blob' || getType(this,options) == 'form')
            options = createBlobOptions(body, this, options);
        return this.patch(url, options);
    }

    delete (url:string, options?:any) : Promise<Response | any> {
        return this.request(url, Object.assign({}, options || {}, { method: 'DELETE' }));
    }

    patch (url:string, options?:any) : Promise<Response | any> {
        return this.request(url, Object.assign({}, options || {}, { method: 'PATCH' }));
    }

    async request(url:string, options?:any) : Promise<Response | any> {
        options = options || { };
        options.headers =  options.headers || {};
        if (this.predefHeaders)
            Object.assign(options.headers || {}, this.predefHeaders);
        this.headerSetCallback && this.headerSetCallback(options.headers);
        url = insertQueryParams(url, options.baseUrl || this.baseUrl, options.params);
        let acceptType = options.acceptType || this.acceptType;
        setAcceptHeader(acceptType, this.charset, options.headers);
        if (this.cache && !options.cache)
            options.cache = this.cache;
        if (this.mode && !options.mode)
            options.mode = this.mode;
        let resp = await this.fetchInvoker(url, options);
        this.responseHeadersCallback && this.responseHeadersCallback(resp.headers);
        if (resp.status >= 400 || resp.status < 100) {
            let error : any = new Error('HTTP status ' + resp.status + ': ' + resp.statusText);
            error.response = resp;
            throw error;
        } else {
            let contentType = resp.headers.get(HttpHeaders.CONTENT_TYPE) || '';
            if (acceptType == 'json' && contentType.toLowerCase().startsWith(APPLICATION_JSON)) {
                return resp.json();
            } else if (acceptType == 'blob') {
                return resp.blob();
            } else if (acceptType == 'text') {
                return resp.text();
            }
            return resp;
        }
    }
}

export interface HttpClientBuilder {
    /**
     * The HTTP client will use a base URL for requests
     * @param baseUrl the base URL
     */
    withBaseUrl(baseUrl: string) : DefaultHttpClientBuilder;

    /**
     * The HTTP client will send these headers on every request it sends
     * @param predefHeaders
     */
    withPredefinedHeaders(predefHeaders: any): HttpClientBuilder;

    /**
     * A callback to change request headers
     * @param headerSetCallback the callback function
     */
    withHeaderSetCallback(headerSetCallback: HeaderSetCallback): HttpClientBuilder;

    /**
     * A callback to retrieve the response headers
     * @param responseHeadersCallback the callback function
     */
    withResponseHeadersCallback(responseHeadersCallback: HeaderGetCallback): HttpClientBuilder;

    /**
     * Specifies the accepted type of the response for all requests.
     * <p>Possible types are:</p>
     * <ul>
     * <li>'json' - when this type is set the client will deserialize the response to JSON</li>
     * <li>'blob' - with this value the client will be convert the response to Blob</li>
     * <li>'text' - using this type, the response will be returned as text</li>
     * </ul>
     * @param type the type of the responses accepted
     */
    withAcceptType(type: string): HttpClientBuilder;

    /**
     * Specifies the content type of the request for all requests.
     * <p>Possible types are:</p>
     * <ul>
     * <li>'json' - when this type is set the client will serialize the body of the request</li>
     * <li>'blob' - with this value the client will send the data as FormData</li>
     * <li>'form' - this type will clients send data as FormData</li>
     * </ul>
     * @param type the type of the requests
     */
    withType(type: string): HttpClientBuilder;

    /**
     * Sets option mode for all requests
     * @param mode the mode
     */
    withMode(mode: string): HttpClientBuilder;

    /**
     * Sets option cache for all requests
     * @param mode the mode
     */
    withCache(cache: string): HttpClientBuilder;

    /**
     * Sets a Charset to be used
     * @param charset the charset
     */
    withCharset(charset: string): HttpClientBuilder;

    /**
     * Set a function to call fetch
     * @param fetchInvoker the fetch invoker
     */
    withFetchInvoker(fetchInvoker: FetchInvoker): HttpClientBuilder;

    /**
     * Build the HTTP client
     */
    build() : HttpClient;
}

class DefaultHttpClientBuilder implements HttpClientBuilder {
    baseUrl?: string;
    predefHeaders?: any;
    headerSetCallback?: HeaderSetCallback;
    responseHeadersCallback?: HeaderGetCallback;
    acceptType?: string;
    type?: string;
    mode?: string;
    cache?: string;
    charset?: string;
    fetchInvoker?: FetchInvoker;

    /**
     * The HTTP client will use a base URL for requests
     * @param baseUrl the base URL
     */
    withBaseUrl(baseUrl: string) : DefaultHttpClientBuilder {
        this.baseUrl = baseUrl;
        return this;
    }

    /**
     * The HTTP client will send these headers on every request it sends
     * @param predefHeaders
     */
    withPredefinedHeaders(predefHeaders: any) {
        this.predefHeaders = predefHeaders;
        return this;
    }

    /**
     * A callback to change request headers
     * @param headerSetCallback the callback function
     */
    withHeaderSetCallback(headerSetCallback: HeaderSetCallback) {
        this.headerSetCallback = headerSetCallback;
        return this;
    }

    /**
     * A callback to retrieve the response headers
     * @param responseHeadersCallback the callback function
     */
    withResponseHeadersCallback(responseHeadersCallback: HeaderGetCallback) {
        this.responseHeadersCallback = responseHeadersCallback;
        return this;
    }

    withAcceptType(type: string): HttpClientBuilder {
        this.acceptType = type;
        return this;
    }

    /**
     * Specifies the type of the request for all requests.
     * <p>Possible types are:</p>
     * <ul>
     * <li>'json' - when this type is set the client will serialize and deserialize the bodies of the request and response to JSON</li>
     * <li>'blob' - with this value the client will send the data as FormData and the response will be converted to Blob</li>
     * <li>'form' - this type will clients send data as FormData and it will return the default response from fetch</li>
     * </ul>
     * @param type the type of the requests
     */
    withType(type: string) {
        this.type = type;
        return this;
    }

    /**
     * Sets option mode for all requests
     * @param mode the mode
     */
    withMode(mode: string) {
        this.mode = mode;
        return this;
    }

    /**
     * Sets option cache for all requests
     * @param cache the mode
     */
    withCache(cache: string) {
        this.cache = cache;
        return this;
    }

    /**
     * Sets a Charset to be used
     * @param charset the charset
     */
    withCharset(charset: string) {
        this.charset = charset;
        return this;
    }

    /**
     * Set a function to call fetch
     * @param fetchInvoker the fetch invoker
     */
    withFetchInvoker(fetchInvoker: FetchInvoker) {
        this.fetchInvoker = fetchInvoker;
        return this;
    }

    /**
     * Build the HTTP client
     */
    build() : HttpClient {
        return new DefaultHttpClient(this.baseUrl, this.predefHeaders, this.headerSetCallback, this.responseHeadersCallback, this.acceptType, this.type, this.mode, this.cache, this.charset, this.fetchInvoker);
    }
}


/**
 * Create a builder
 */
export const builder = () : HttpClientBuilder => new DefaultHttpClientBuilder();
