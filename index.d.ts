export interface HttpRequest {
    url: string;
    options: RequestInit;
}
declare type HeaderSetCallback = (headers: any) => void;
declare type HeaderGetCallback = (headers: any) => void;
declare type RequestInterceptor = (request: HttpRequest) => void;
declare type ResponseInterceptor = (response: Response) => void;
declare type FetchInvoker = (url: string, options?: any) => Promise<Response>;
export declare const HttpHeaders: {
    /**
     * The HTTP Accept header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">Section 5.3.2 of RFC 7231</a>
     */
    ACCEPT: string;
    /**
     * The HTTP Accept-Charset header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
     */
    ACCEPT_CHARSET: string;
    /**
     * The HTTP Accept-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
     */
    ACCEPT_ENCODING: string;
    /**
     * The HTTP Accept-Language header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
     */
    ACCEPT_LANGUAGE: string;
    /**
     * The HTTP Accept-Ranges header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
     */
    ACCEPT_RANGES: string;
    /**
     * The CORS Access-Control-Allow-Credentials response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_CREDENTIALS: string;
    /**
     * The CORS Access-Control-Allow-Headers response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_HEADERS: string;
    /**
     * The CORS Access-Control-Allow-Methods response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_METHODS: string;
    /**
     * The CORS Access-Control-Allow-Origin response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_ALLOW_ORIGIN: string;
    /**
     * The CORS Access-Control-Expose-Headers response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_EXPOSE_HEADERS: string;
    /**
     * The CORS Access-Control-Max-Age response header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_MAX_AGE: string;
    /**
     * The CORS Access-Control-Request-Headers request header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_REQUEST_HEADERS: string;
    /**
     * The CORS Access-Control-Request-Method request header field name.
     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    ACCESS_CONTROL_REQUEST_METHOD: string;
    /**
     * The HTTP Age header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
     */
    AGE: string;
    /**
     * The HTTP Allow header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
     */
    ALLOW: string;
    /**
     * The HTTP Authorization header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
     */
    AUTHORIZATION: string;
    /**
     * The HTTP Cache-Control header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
     */
    CACHE_CONTROL: string;
    /**
     * The HTTP Connection header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
     */
    CONNECTION: string;
    /**
     * The HTTP Content-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
     */
    CONTENT_ENCODING: string;
    /**
     * The HTTP Content-Disposition header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
     */
    CONTENT_DISPOSITION: string;
    /**
     * The HTTP Content-Language header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
     */
    CONTENT_LANGUAGE: string;
    /**
     * The HTTP Content-Length header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
     */
    CONTENT_LENGTH: string;
    /**
     * The HTTP Content-Location header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
     */
    CONTENT_LOCATION: string;
    /**
     * The HTTP Content-Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
     */
    CONTENT_RANGE: string;
    /**
     * The HTTP Content-Type header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
     */
    CONTENT_TYPE: string;
    /**
     * The HTTP Cookie header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
     */
    COOKIE: string;
    /**
     * The HTTP Date header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
     */
    DATE: string;
    /**
     * The HTTP ETag header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
     */
    ETAG: string;
    /**
     * The HTTP Expect header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
     */
    EXPECT: string;
    /**
     * The HTTP Expires header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
     */
    EXPIRES: string;
    /**
     * The HTTP From header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
     */
    FROM: string;
    /**
     * The HTTP Host header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
     */
    HOST: string;
    /**
     * The HTTP If-Match header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
     */
    IF_MATCH: string;
    /**
     * The HTTP If-Modified-Since header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
     */
    IF_MODIFIED_SINCE: string;
    /**
     * The HTTP If-None-Match header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
     */
    IF_NONE_MATCH: string;
    /**
     * The HTTP If-Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
     */
    IF_RANGE: string;
    /**
     * The HTTP If-Unmodified-Since header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
     */
    IF_UNMODIFIED_SINCE: string;
    /**
     * The HTTP Last-Modified header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
     */
    LAST_MODIFIED: string;
    /**
     * The HTTP Link header field name.
     * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
     */
    LINK: string;
    /**
     * The HTTP Location header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
     */
    LOCATION: string;
    /**
     * The HTTP Max-Forwards header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
     */
    MAX_FORWARDS: string;
    /**
     * The HTTP Origin header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
     */
    ORIGIN: string;
    /**
     * The HTTP Pragma header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
     */
    PRAGMA: string;
    /**
     * The HTTP Proxy-Authenticate header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
     */
    PROXY_AUTHENTICATE: string;
    /**
     * The HTTP Proxy-Authorization header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
     */
    PROXY_AUTHORIZATION: string;
    /**
     * The HTTP Range header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
     */
    RANGE: string;
    /**
     * The HTTP Referer header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
     */
    REFERER: string;
    /**
     * The HTTP Retry-After header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
     */
    RETRY_AFTER: string;
    /**
     * The HTTP Server header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
     */
    SERVER: string;
    /**
     * The HTTP Set-Cookie header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
     */
    SET_COOKIE: string;
    /**
     * The HTTP Set-Cookie2 header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
     */
    SET_COOKIE2: string;
    /**
     * The HTTP TE header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
     */
    TE: string;
    /**
     * The HTTP Trailer header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
     */
    TRAILER: string;
    /**
     * The HTTP Transfer-Encoding header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
     */
    TRANSFER_ENCODING: string;
    /**
     * The HTTP Upgrade header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
     */
    UPGRADE: string;
    /**
     * The HTTP User-Agent header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
     */
    USER_AGENT: string;
    /**
     * The HTTP Vary header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
     */
    VARY: string;
    /**
     * The HTTP Via header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
     */
    VIA: string;
    /**
     * The HTTP Warning header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
     */
    WARNING: string;
    /**
     * The HTTP WWW-Authenticate header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC 7235</a>
     */
    WWW_AUTHENTICATE: string;
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
    get(url: string, options?: any): Promise<Response | any>;
    /**
     * Send a request with the DELETE method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    delete(url: string, options?: any): Promise<Response | any>;
    /**
     * Send a request with the POST method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    post(url: string, options?: any): Promise<Response | any>;
    /**
     * Send a request with the PUT method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    put(url: string, options?: any): Promise<Response | any>;
    /**
     * Send a request with the PATCH method to the specified URL using the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    patch(url: string, options?: any): Promise<Response | any>;
    /**
     * Send a request with the POST method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    postForEntity<T>(url: string, body: T, options?: any): Promise<Response | any>;
    /**
     * Send a request with the PUT method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    putForEntity<T>(url: string, body: T, options?: any): Promise<Response | any>;
    /**
     * Send a request with the PATCH method to the specified URL using the options and automatically set the body
     * @param url the URL
     * @param body the object to be used as body
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    patchForEntity<T>(url: string, body: T, options?: any): Promise<Response | any>;
    /**
     * Send a request to the URL using the method in the options
     * @param url the URL
     * @param options the options used. The options can override default values for charset or type for the current request.
     */
    request(url: string, options?: any): Promise<Response | any>;
}
export interface HttpClientBuilder {
    /**
     * The HTTP client will use a base URL for requests
     * @param baseUrl the base URL
     */
    withBaseUrl(baseUrl: string): DefaultHttpClientBuilder;
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
     * @param cache the cache mode
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
     * Set a request interceptor
     * @param requestInterceptor
     */
    withRequestInterceptor(requestInterceptor: RequestInterceptor): HttpClientBuilder;
    /**
     * Set a response interceptor
     * @param responseInterceptor
     */
    withResponseInterceptor(responseInterceptor: ResponseInterceptor): HttpClientBuilder;
    /**
     * Set a agent
     * @param agent
     */
    withAgent(agent: any): HttpClientBuilder;
    /**
     * Build the HTTP client
     */
    build(): HttpClient;
}
declare class DefaultHttpClientBuilder implements HttpClientBuilder {
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
    requestInterceptor?: RequestInterceptor;
    responseInterceptor?: ResponseInterceptor;
    agent?: any;
    /**
     * The HTTP client will use a base URL for requests
     * @param baseUrl the base URL
     */
    withBaseUrl(baseUrl: string): DefaultHttpClientBuilder;
    /**
     * The HTTP client will send these headers on every request it sends
     * @param predefHeaders
     */
    withPredefinedHeaders(predefHeaders: any): this;
    /**
     * A callback to change request headers
     * @param headerSetCallback the callback function
     */
    withHeaderSetCallback(headerSetCallback: HeaderSetCallback): this;
    /**
     * A callback to retrieve the response headers
     * @param responseHeadersCallback the callback function
     */
    withResponseHeadersCallback(responseHeadersCallback: HeaderGetCallback): this;
    withAcceptType(type: string): HttpClientBuilder;
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
    withType(type: string): this;
    /**
     * Sets option mode for all requests
     * @param mode the mode
     */
    withMode(mode: string): this;
    /**
     * Sets option cache for all requests
     * @param cache the mode
     */
    withCache(cache: string): this;
    /**
     * Sets a Charset to be used
     * @param charset the charset
     */
    withCharset(charset: string): this;
    /**
     * Set a function to call fetch
     * @param fetchInvoker the fetch invoker
     */
    withFetchInvoker(fetchInvoker: FetchInvoker): this;
    /**
     * Set a request interceptor
     * @param requestInterceptor
     */
    withRequestInterceptor(requestInterceptor: RequestInterceptor): this;
    /**
     * Set a response interceptor
     * @param responseInterceptor
     */
    withResponseInterceptor(responseInterceptor: ResponseInterceptor): this;
    /**
     * Set a agent
     * @param agent
     */
    withAgent(agent: any): this;
    /**
     * Build the HTTP client
     */
    build(): HttpClient;
}
/**
 * Create a builder
 */
export declare const builder: () => HttpClientBuilder;
export {};
//# sourceMappingURL=index.d.ts.map