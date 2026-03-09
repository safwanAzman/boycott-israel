
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.9.16";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie;
    exports.parse = parseCookie;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date = new Date(val);
            if (Number.isFinite(date.valueOf()))
              setCookie.expires = date;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "node_modules/@opennextjs/aws/dist/http/util.js"() {
    init_logger();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
function initializeOnce() {
  if (initialized)
    return;
  cachedOrigins = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
  const functions = globalThis.openNextConfig.functions ?? {};
  for (const key in functions) {
    if (key !== "default") {
      const value = functions[key];
      const regexes = [];
      for (const pattern of value.patterns) {
        const regexPattern = `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`;
        regexes.push(new RegExp(regexPattern));
      }
      cachedPatterns.push({
        key,
        patterns: value.patterns,
        regexes
      });
    }
  }
  initialized = true;
}
var cachedOrigins, cachedPatterns, initialized, envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    cachedPatterns = [];
    initialized = false;
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          initializeOnce();
          for (const { key, patterns, regexes } of cachedPatterns) {
            for (const regex of regexes) {
              if (regex.test(_path)) {
                debug("Using origin", key, patterns);
                return cachedOrigins[key];
              }
            }
          }
          if (_path.startsWith("/_next/image") && cachedOrigins.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return cachedOrigins.imageOptimizer;
          }
          if (cachedOrigins.default) {
            debug("Using default origin", cachedOrigins.default, _path);
            return cachedOrigins.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// node_modules/@opennextjs/aws/dist/utils/stream.js
import { ReadableStream as ReadableStream2 } from "node:stream/web";
function toReadableStream(value, isBase64) {
  return new ReadableStream2({
    pull(controller) {
      controller.enqueue(Buffer.from(value, isBase64 ? "base64" : "utf8"));
      controller.close();
    }
  }, { highWaterMark: 0 });
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return new ReadableStream2({
      pull(controller) {
        maybeSomethingBuffer ??= Buffer.from("SOMETHING");
        controller.enqueue(maybeSomethingBuffer);
        controller.close();
      }
    }, { highWaterMark: 0 });
  }
  return new ReadableStream2({
    start(controller) {
      controller.close();
    }
  });
}
var maybeSomethingBuffer;
var init_stream = __esm({
  "node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// .next/server/edge-runtime-webpack.js
var require_edge_runtime_webpack = __commonJS({
  ".next/server/edge-runtime-webpack.js"() {
    "use strict";
    (() => {
      "use strict";
      var a = {}, b = {};
      function c(d) {
        var e = b[d];
        if (void 0 !== e) return e.exports;
        var f = b[d] = { exports: {} }, g = true;
        try {
          a[d](f, f.exports, c), g = false;
        } finally {
          g && delete b[d];
        }
        return f.exports;
      }
      c.m = a, c.amdO = {}, (() => {
        var a2 = [];
        c.O = (b2, d, e, f) => {
          if (d) {
            f = f || 0;
            for (var g = a2.length; g > 0 && a2[g - 1][2] > f; g--) a2[g] = a2[g - 1];
            a2[g] = [d, e, f];
            return;
          }
          for (var h = 1 / 0, g = 0; g < a2.length; g++) {
            for (var [d, e, f] = a2[g], i = true, j = 0; j < d.length; j++) (false & f || h >= f) && Object.keys(c.O).every((a3) => c.O[a3](d[j])) ? d.splice(j--, 1) : (i = false, f < h && (h = f));
            if (i) {
              a2.splice(g--, 1);
              var k = e();
              void 0 !== k && (b2 = k);
            }
          }
          return b2;
        };
      })(), c.n = (a2) => {
        var b2 = a2 && a2.__esModule ? () => a2.default : () => a2;
        return c.d(b2, { a: b2 }), b2;
      }, (() => {
        var a2, b2 = Object.getPrototypeOf ? (a3) => Object.getPrototypeOf(a3) : (a3) => a3.__proto__;
        c.t = function(d, e) {
          if (1 & e && (d = this(d)), 8 & e || "object" == typeof d && d && (4 & e && d.__esModule || 16 & e && "function" == typeof d.then)) return d;
          var f = /* @__PURE__ */ Object.create(null);
          c.r(f);
          var g = {};
          a2 = a2 || [null, b2({}), b2([]), b2(b2)];
          for (var h = 2 & e && d; "object" == typeof h && !~a2.indexOf(h); h = b2(h)) Object.getOwnPropertyNames(h).forEach((a3) => g[a3] = () => d[a3]);
          return g.default = () => d, c.d(f, g), f;
        };
      })(), c.d = (a2, b2) => {
        for (var d in b2) c.o(b2, d) && !c.o(a2, d) && Object.defineProperty(a2, d, { enumerable: true, get: b2[d] });
      }, c.e = () => Promise.resolve(), c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (a2) {
          if ("object" == typeof window) return window;
        }
      }(), c.o = (a2, b2) => Object.prototype.hasOwnProperty.call(a2, b2), c.r = (a2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a2, "__esModule", { value: true });
      }, (() => {
        var a2 = { 149: 0 };
        c.O.j = (b3) => 0 === a2[b3];
        var b2 = (b3, d2) => {
          var e, f, [g, h, i] = d2, j = 0;
          if (g.some((b4) => 0 !== a2[b4])) {
            for (e in h) c.o(h, e) && (c.m[e] = h[e]);
            if (i) var k = i(c);
          }
          for (b3 && b3(d2); j < g.length; j++) f = g[j], c.o(a2, f) && a2[f] && a2[f][0](), a2[f] = 0;
          return c.O(k);
        }, d = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        d.forEach(b2.bind(null, 0)), d.push = b2.bind(null, d.push.bind(d));
      })();
    })();
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// .next/server/src/middleware.js
var require_middleware = __commonJS({
  ".next/server/src/middleware.js"() {
    "use strict";
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[550], { 39: (a) => {
      "use strict";
      a.exports = JSON.parse(`{"Logo":{"LogoSection":{"title":"Boikot"}},"Header":{"HeaderSection":{"search":"Cari Semua","browse":"Semak Kategori","reference":"Rujukan","donate":"Derma untuk GAZA"}},"Container":{"IntroSection":{"title":"Sokong Palestin. Boikot Israel","description":"Berdiri bersama rakyat Palestin dalam perjuangan mereka untuk kebebasan, keadilan, dan kesaksamaan."}},"Why":{"WhySection":{"why":"Mengapa memboikot produk ini?","categories":"Kategori","alternatives":"Alternatif","proofLink":"Pautan Bukti","bntProof":"Bukti "}},"BoycottCard":{"BoycottCardSection":{"why":"Kenapa Perlu Boikot"}},"Form":{"formSection":{"search":"Carian","reset":"Set Semula","back":"Halaman Utama","categories":"Pilih Kategori"},"categories":{"all":"semua","car":"kereta","charity":"kebajikan","clothing":"pakaian","coffee":"kopi","contractor":"kontraktor","cosmetics":"kosmetik","drinks":"minuman","entertainment":"hiburan","fashion":"fesyen","finance":"kewangan","food":"makanan","healthcare":"kesihatan","household":"barangan rumah","insurance":"insurans","luxury":"mewah","manufacturer":"pengilang","petcare":"haiwan peliharaan","pharmaceuticals":"farmasi","politics":"politik","supermarket":"pasar raya","technology":"teknologi","travel":"perjalanan"}},"Empty":{"EmptySection":{"title":"Jika syarikat yang anda cari tidak tersenarai, dan anda rasa sepatutnya ia tersenarai, sila emel kami dengan butiran relevan untuk semakan.","btnTitle":"Klik Di Sini"}},"Data":{"boycottData":{"Nestle":{"desc":"Osem ialah pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki. Nestle memiliki pegangan kawalan dalam Osem.","categories":"makanan,minuman","alternatives":"Pilihan jenama sendiri pasaraya.,jenama bukan-Nestle/Coca-Cola/Pepsico"},"Cadbury":{"desc":"Pemilik Cadbury, Mondelez, melabur dalam startup Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Maggi":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki. Terutamanya elakkan mana-mana jenama Osem seperti Sabra Salads.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Lipton":{"desc":"Lipton, di bawah PepsiCo, mendapat perhatian kerana afiliasi dan pelaburannya dalam syarikat yang berkaitan dengan Israel.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Nescafe":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki. Terutamanya elakkan mana-mana jenama Osem seperti Sabra Salads.","categories":"minuman, kopi","alternatives":"Pilihan jenama sendiri pasaraya"},"Kitkat":{"desc":"Nestle memiliki pegangan kawalan dalam Osem, pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Oreo":{"desc":"Mondelez, pemilik Oreo, melabur dalam startup Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Mars":{"desc":"Mars menyokong negara Zionis dengan melabur dalam startup foodtech melalui rakan kongsi modal teroka JVC.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Snickers":{"desc":"Mars, pemilik Snickers, menyokong negara Zionis dengan melabur dalam startup foodtech melalui rakan kongsi modal teroka JVC.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Pringles":{"desc":"Pringles mengembangkan operasi ke Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Milo":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki. Terutamanya elakkan mana-mana jenama Osem seperti Sabra Salads.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Toblerone":{"desc":"Mondelez, pemilik Toblerone, melabur dalam startup Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Nestum":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"MatKool":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Nutella":{"desc":"Nutella ialah produk coklat Ferrero, yang dijual di lebih daripada 100 negara.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Coca-Cola":{"desc":"Coca-Cola mengendalikan kilang di penempatan haram Israel di Atarot, di Palestin yang Diduduki.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Nestea":{"desc":"Nestea, terkenal dengan tawaran teh aisnya, adalah sebahagian daripada Nestle.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Knorr":{"desc":"Unilever, pemilik Knorr, menjual hak edaran Israel Ben & Jerry's kepada Avi Zinger untuk meneruskan penjualan di Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Hershey":{"desc":"HERSHEY menyokong Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"M&M":{"desc":"Mars, pemilik M&M's, menyokong negara Zionis melalui pelaburan dalam startup foodtech.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"La Cremeria":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Haagen-Dazs":{"desc":"Keluarga Mattus, bekas pemilik H\xE4agen-Dazs, memberi tumpuan kepada menyokong penyebab Yahudi, Israel, dan Zionis.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Magnum":{"desc":"Magnum, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak edaran Israel Ben & Jerry's untuk meneruskan penjualan di Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Lady's Choice":{"desc":"Lady's Choice mempunyai afiliasi dengan syarikat Yahudi atau menyokong pendudukan Zionis di Palestin.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Horlicks":{"desc":"Horlicks mempunyai afiliasi dengan syarikat Yahudi atau menyokong pendudukan Zionis di Palestin.","categories":"makanan, minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Cornetto":{"desc":"Cornetto, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak edaran Israel Ben & Jerry's untuk meneruskan penjualan di Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Wall's":{"desc":"Wall's, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak edaran Israel Ben & Jerry's untuk meneruskan penjualan di Israel.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Fanta":{"desc":"Coca-Cola Company, yang memiliki Fanta, mengendalikan kilang di penempatan haram Israel di Atarot, di Palestin yang Diduduki.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Sprite":{"desc":"Coca-Cola Company, yang memiliki Sprite, mengendalikan kilang di penempatan haram Israel di Atarot, di Palestin yang Diduduki.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Pepsi":{"desc":"PepsiCo, pemilik Pepsi, membeli SodaStream dan memiliki 50% Saham Sabra, kedua-duanya memanfaatkan pendudukan Israel di Palestin.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Jacob's":{"desc":"Jacob's mempunyai hubungan dengan syarikat Yahudi atau menyokong pendudukan Zionis di Palestin.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"7up":{"desc":"PepsiCo, pengedar antarabangsa 7up, membeli SodaStream dan memiliki 50% Sabra, kedua-duanya telah mengambil kesempatan daripada pendudukan Israel di Palestin.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Coffee Mate":{"desc":"Nestle, pemilik Coffee Mate, memiliki pegangan kawalan dalam Osem, pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"makanan, kopi","alternatives":"Pilihan jenama sendiri pasaraya"},"Costa Coffee":{"desc":"Costa Coffee, milik Coca-Cola Company, mengendalikan kilang di penempatan haram Israel di Atarot, di Palestin yang Diduduki.","categories":"makanan, kopi","alternatives":"Pilihan jenama sendiri pasaraya"},"Dasani Water":{"desc":"Coca-Cola Company, yang memiliki Dasani Water, mengendalikan kilang di penempatan haram Israel di Atarot, di Palestin yang Diduduki.","categories":"minuman, air","alternatives":"Pilihan jenama sendiri pasaraya"},"Gatorade":{"desc":"PepsiCo, pemilik Gatorade, membeli SodaStream dan memiliki 50% Sabra, kedua-duanya telah mengambil kesempatan daripada pendudukan Israel di Palestin.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Halls":{"desc":"Mondelez, pemilik Halls, melabur dalam permulaan di Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Mondelez":{"desc":"Mondelez melabur dalam permulaan di Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Unilever":{"desc":"Unilever, pemilik Ben & Jerry's, menjual hak pengedaran jenama di Israel untuk terus menjual di Israel.","categories":"makanan, minuman, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya"},"Belvita":{"desc":"Mondelez, pemilik Belvita, melabur dalam permulaan di Israel di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Nesquik":{"desc":"Nestle, pemilik Nesquik, memiliki pegangan kawalan dalam Osem, pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Koko Krunch":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Honey Stars":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Fitnesse":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Sjora":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Quaker Oats":{"desc":"PepsiCo, pemilik Quaker Oats, membeli SodaStream dan memiliki 50% Sabra, kedua-duanya telah mengambil kesempatan daripada pendudukan Israel di Palestin.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Smarties":{"desc":"Nestle, pemilik Smarties, memiliki pegangan kawalan dalam Osem, pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Lays":{"desc":"PepsiCo, pemilik Lay's, membeli SodaStream dan memiliki 50% Sabra, kedua-duanya telah mengambil kesempatan daripada pendudukan Israel di Palestin.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Carnation":{"desc":"Nestle, pemilik Carnation, memiliki pegangan kawalan dalam Osem, pengeluar makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Mountain Dew":{"desc":"PepsiCo, pemilik Mountain Dew, membeli SodaStream dan memiliki 50% Sabra, kedua-duanya telah mengambil kesempatan daripada pendudukan Israel di Palestin.","categories":"minuman","alternatives":"Pilihan jenama sendiri pasaraya"},"Mcdonalds":{"desc":"McDonalds Israel menyokong IDF dengan menyediakan makanan dan minuman percuma kepada militan Israel.","categories":"makanan, minuman","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Starbucks":{"desc":"Howard Schultz, pemilik saham terbesar Starbucks, adalah Zionis tegar yang melabur banyak dalam ekonomi Israel, termasuk pelaburan terkini sebanyak $1.7 Bilion dalam permulaan keselamatan siber Wiz.","categories":"makanan, kopi, minuman","alternatives":"Zus Coffee,Kopi Saigon,Tealive,Bask Bear,Cool Blog,GIGI Coffee,Richiamo"},"Domino":{"desc":"Domino Pizza tidak menyuarakan sokongan terhadap Israel secara terbuka tetapi menjadi subjek seruan boikot di negara-negara Arab.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Omega":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Pilihan jenama sendiri pasaraya"},"Pizza Hut":{"desc":"Syarikat induk Yum Brands adalah pelabur dalam permulaan di Israel.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Burger King":{"desc":"Burger King didakwa menyokong IDF melalui pemberian makanan dan minuman percuma kepada militan Israel.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Subway":{"desc":"Subway terlibat dalam kontroversi kerana hubungannya dengan menyokong Israel dalam konflik Palestin.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Baskin Robbins":{"desc":"Baskin-Robbins mempunyai sejarah yang berkaitan dengan pengasas Yahudinya, Burt Baskin dan Irv Robbins, yang menyokong sebab Yahudi dan Israel.","categories":"makanan","alternatives":"Kedai ais krim tempatan atau jenama ais krim lain"},"PapaJohns":{"desc":"Restoran Papa John's telah menyertai senarai restoran yang menyokong Israel.","categories":"makanan","alternatives":"Marrybrown, The Chicken Rice Shop, Ramly's Burger, Ayamas, The Manhattan Fish Market"},"KFC":{"desc":"Syarikat induk Yum Brands adalah pelabur dalam permulaan di Israel.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Papa Johns":{"desc":"Restoran Papa John's menyokong Israel.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"EveryDay":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan, minuman","alternatives":"Jenama lain serbuk susu atau produk tenusu tempatan"},"Lactogrow":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan, minuman","alternatives":"Jenama formula bayi lain atau pilihan nutrisi"},"Lactokid":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan, minuman","alternatives":"Jenama formula bayi lain"},"Cerelac":{"desc":"Elakkan produk Nestle sehingga mereka melucutkan semua operasi di Palestin yang Diduduki.","categories":"makanan","alternatives":"Jenama sereal bayi lain atau makanan bayi buatan sendiri"},"Colgate":{"desc":"S. Schestowitz adalah salah satu importer barang keperluan terbesar di Israel. Syarikat ini menguasai 60% pasaran ubat gigi Israel, menurut Haaretz.","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Listerine":{"desc":"Ini adalah produk Johnson & Johnson, yang membeli syarikat Israel Biosense seharga $400 juta","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Darlie":{"desc":"Darlie adalah jenama popular China yang dimiliki oleh Colgate dan rakan usaha samanya, Hawley & Hazel. Pakejnya menampilkan seorang lelaki dengan topi tinggi. Ia dahulunya dipanggil Darkie dan menampilkan lelaki dengan wajah hitam.","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Pepsodent":{"desc":"Pepsodent, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak distribusi Ben & Jerry's di Israel untuk terus menjual di Israel.","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Dove":{"desc":"Dove dimiliki oleh Unilever. Ben & Jerry's juga dimiliki oleh Unilever. Ketika Ben & Jerry's memutuskan untuk berhenti menjual produk mereka di Israel, Unilever menjual hak distribusi di Israel kepada Avi Zinger untuk mengelakkan keputusan mereka dan memaksa nama jenama Ben & Jerry's terus dijual di Israel.","categories":"barangan rumah, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Antabax, Good Virtues Co, Bad Lab, Fruiser, Safi"},"Palmolive":{"desc":"S. Schestowitz adalah salah satu importir barang keperluan terbesar di Israel. Syarikat ini menguasai 60% pasaran ubat gigi Israel, menurut Haaretz.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya"},"CleanAndClear":{"desc":"Ini adalah produk Johnson & Johnson, yang membeli syarikat Israel Biosense seharga $400 juta","categories":"barangan rumah, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Vaseline":{"desc":"Vaseline, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak distribusi Ben & Jerry's di Israel untuk terus menjual di Israel.","categories":"barangan rumah, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Vicks":{"desc":"Vicks dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, dengan pelaburan tahunan $2bn.","categories":"barangan rumah, farmasi","alternatives":"Pilihan jenama sendiri pasaraya"},"Breeze":{"desc":"Breeze, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak distribusi Ben & Jerry's di Israel untuk terus menjual di Israel.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Joy":{"desc":"P&G berhubungan dengan syarikat Israel Avgol Nonwoven, yang mengkhusus dalam penghasilan tekstil untuk produk kebersihan, telah menarik perhatian.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Downy":{"desc":"P&G, syarikat induk Downy, mempunyai hubungan dalam dengan Israel, membangkitkan perbincangan dan perdebatan mengenai kerjasama perniagaannya dalam wilayah tersebut. Terutamanya, hubungan P&G dengan syarikat Israel Avgol Nonwoven, yang mengkhusus dalam penghasilan tekstil untuk produk kebersihan, telah menarik perhatian.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Axion":{"desc":"S. Schestowitz adalah salah satu importir barang keperluan terbesar di Israel. Syarikat ini menguasai 60% pasaran ubat gigi Israel, menurut Haaretz.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Sunlight":{"desc":"Sunlight, dimiliki oleh Unilever, yang juga memiliki Ben & Jerry's. Unilever menjual hak distribusi Ben & Jerry's di Israel untuk terus menjual di Israel.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Kotex":{"desc":"Pada tahun 1998 Robert P. Van der Merwe, Pengerusi Kimberly Clark, menerima Anugerah Jubli dari Perdana Menteri Israel Netanyahu, atas sumbangan mereka dalam membangunkan ekonomi Israel.","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Libresse, Sofy, Flowra"},"Huggies":{"desc":"Kimberly-Clark adalah salah satu syarikat pengguna terbesar di dunia dengan hampir 56,000 pekerja di 35 negara, dan perolehan jualan lebih dari $19 bilion pada tahun 2009. Jenama penjagaan keluarganya termasuk Kleenex, Scott, Andrex, Huggies, Pull-Ups, Kotex, Poise dan Depend","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya"},"Lux":{"desc":"Lux dimiliki oleh Unilever. Ben & Jerry's juga dimiliki oleh Unilever. Ketika Ben & Jerry's memutuskan untuk berhenti menjual produk mereka di Israel, Unilever menjual hak distribusi di Israel kepada Avi Zinger untuk mengelakkan keputusan mereka dan memaksa nama jenama Ben & Jerry's terus dijual di Israel.","categories":"barangan rumah, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya"},"Febreze":{"desc":"Febreze dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, dengan pelaburan tahunan $2bn.","categories":"barangan rumah","alternatives":"Pilihan jenama sendiri pasaraya"},"Lifebuoy":{"desc":"Lifebuoy dimiliki oleh Unilever. Ben & Jerry's juga dimiliki oleh Unilever. Ketika Ben & Jerry's memutuskan untuk berhenti menjual produk mereka di Israel, Unilever menjual hak distribusi di Israel kepada Avi Zinger untuk mengelakkan keputusan mereka dan memaksa nama jenama Ben & Jerry's terus dijual di Israel.","categories":"barangan rumah, kesihatan","alternatives":"Pilihan jenama sendiri pasaraya, Antabax, Good Virtues Co, Bad Lab, Fruiser, Safi"},"Rexona":{"desc":"Rexona dimiliki oleh Unilever. Ben & Jerry's juga dimiliki oleh Unilever. Ketika Ben & Jerry's memutuskan untuk berhenti menjual produk mereka di Israel, Unilever menjual hak distribusi di Israel kepada Avi Zinger untuk mengelakkan keputusan mereka dan memaksa nama jenama Ben & Jerry's terus dijual di Israel.","categories":"barangan rumah, kosmetik","alternatives":"Pilihan jenama sendiri pasaraya"},"Maybeline":{"desc":"Maybelline, di bawah kepemilikan L'Oreal, telah mengemudi sebuah laluan kontroversi dalam hubungannya dengan Israel.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Loreal":{"desc":"L'Oreal adalah 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Garnier":{"desc":"Garnier adalah jenama yang dimiliki oleh L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Clinique":{"desc":"Clinique dimiliki oleh Estee Lauder, yang kepemilikannya, terutama Ronald Lauder, mempunyai pandangan zionis ekstrem dan secara finansial dan politik mendukung pendudukan tanah Palestin oleh Israel.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Gillete":{"desc":"Terkenal dengan barisan produk penjagaan diri, Gillette beroperasi di bawah P&G, sebuah syarikat multinasional. P&G mendapat perhatian kerana pelaburan besar di Israel, terutamanya dengan penubuhan pusat Penyelidikan dan Pembangunan (R&D) di Tel Aviv, yang terletak dalam apa yang disebut sebagai Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya"},"Louis Vuitton":{"desc":"Pemilik syarikat induk Louis Vuitton, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"mewah, pakaian, kosmetik","alternatives":"sokong jenama tempatan"},"Giorgio Armani":{"desc":"Giorgio Armani Beauty adalah kerjasama dengan L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"mewah, pakaian, kosmetik, fesyen","alternatives":"sokong jenama tempatan"},"Johnson n Johnson":{"desc":"Johnson & Johnson membeli syarikat Israel, Biosense, sebanyak $400 juta","categories":"kesihatan","alternatives":"Pilihan jenama sendiri pasaraya"},"Bath & Body Works":{"desc":"Les Wexner, pemilik L Brands, syarikat induk Bath&Body Works, adalah sekutu kuat Israel, dan rakan perniagaan jangka panjang Jeffrey Epstein, pengedar kanak-kanak yang dihukum.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri pasaraya, Lush cosmetics, Minyak wangi tidak berjenama, Sunnamusk"},"Herbal Essence":{"desc":"Herbal essences dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, dengan pelaburan tahunan $2bn.","categories":"kosmetik, kesihatan","alternatives":"Pilihan jenama sendiri"},"Victoria Secret":{"desc":"Victoria Secret memperoleh keuntungan dari pendudukan Israel atas tanah Palestin & kejahatan terhadap kemanusiaan dengan kerjasama rapat dengan syarikat-syarikat Israel.","categories":"mewah","alternatives":"Pilihan jenama sendiri"},"Estee Lauder":{"desc":"Ronald Lauder, yang bersama dengan abangnya Leonard Lauder mewarisi syarikat Estee Lauder, adalah presiden Kongres Yahudi Dunia, dan pengerusi Dana Kebangsaan Yahudi, dan adalah zionis dengan pandangan ekstremis dan menyokong pendudukan Israel atas tanah Palestin secara kewangan dan politik.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri"},"Ralph Lauren":{"desc":"Ralph Lauren Frangrances adalah kerjasama dengan L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"mewah","alternatives":"Minyak wangi tidak berjenama, Sunnamusk"},"Neutrogena":{"desc":"Menyelami jejak Neutrogena di Israel, kita mengungkap jaringan hubungan, kerjasama, dan pelaburan yang menggambarkan gambaran berbilang wajah tentang keterlibatan jenama di wilayah ini.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri"},"Valentino Beauty":{"desc":"Valentino Beauty adalah kerjasama dengan L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"mewah, pakaian, fesyen, kosmetik","alternatives":"Pilihan jenama sendiri"},"YSL Beauty":{"desc":"YSL Beauty adalah kerjasama dengan L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"mewah, pakaian, fesyen, kosmetik","alternatives":"Pilihan jenama sendiri"},"Tommy Hilfiger":{"desc":"Di tengah-tengah kekacauan, laporan mendedahkan bahawa PVH, syarikat induk Tommy Hilfiger, berjanji untuk menyamai sumbangan daripada para pekerjanya dengan nisbah 2:1 untuk usaha bantuan di wilayah tersebut.","categories":"mewah, pakaian, fesyen","alternatives":"Pilihan jenama sendiri"},"Kerastase":{"desc":"Kerastase dimiliki oleh L'Oreal. L'Oreal adalah 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri"},"Lancome":{"desc":"Lancome adalah jenama milik L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"mewah, kosmetik","alternatives":"Kosmetik Lush, Kecantikan Huda"},"Revlon":{"desc":"Pemegang saham terbesar Revlon, Ronald Perelman, adalah pemegang amanah utama Yayasan Simon Weisenthal, yang menjalankan Muzium Toleransi yang agak ironis namanya.","categories":"kosmetik","alternatives":"Pilihan jenama sendiri"},"Chanel":{"desc":"Alain Wertheimer, mengutuk serangan terhadap Israel tetapi berdiam diri tentang serangan di Gaza, juga berjanji $4j atas nama Chanel.","categories":"mewah, pakaian, fesyen, kosmetik","alternatives":"Kosmetik Lush, Kecantikan Huda, Sunnamusk, Minyak wangi tidak berjenama"},"Cerave":{"desc":"Cerave dimiliki oleh L'Oreal. L'Oreal adalah 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Kosmetik Lush, Kecantikan Huda"},"Kenzo":{"desc":"Pemilik syarikat induk Kenzo, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"mewah, pakaian, fesyen, kosmetik","alternatives":"Kosmetik Lush, Kecantikan Huda, Sunnamusk, Minyak wangi tidak berjenama"},"Kiehl":{"desc":"Kiehl's adalah jenama milik L'Oreal, yang merupakan 'sahabat hangat Israel'. Setelah mengirim surat kepada Liga Arab dengan informasi membantu boikot, mereka membayar denda $1.4j dan mengeluarkan permintaan maaf, sebelum menjalin hubungan baru dengan Israel, dengan pelaburan besar dan bahkan mengoperasikan sebuah pabrik di Palestin yang Diduduki.","categories":"kosmetik","alternatives":"Kosmetik Lush, Kecantikan Huda"},"Olay":{"desc":"Olay dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, di mana mereka melabur $2bn setiap tahun.","categories":"kosmetik, kesihatan","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Dior":{"desc":"Pemilik syarikat induk Dior, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"mewah, pakaian, fesyen, kosmetik","alternatives":"Pilihan jenama sendiri"},"MAC":{"desc":"MAC Cosmetics dimiliki oleh Estee Lauder, yang pemilikannya, terutama Ronald Lauder, mempunyai pandangan zionis ekstremis dan secara kewangan dan politik menyokong pendudukan Israel atas tanah Palestin.","categories":"kosmetik","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"La Mer":{"desc":"La Mer dimiliki oleh Estee Lauder, yang pemilikannya, terutama Ronald Lauder, mempunyai pandangan zionis ekstremis dan secara kewangan dan politik menyokong pendudukan Israel atas tanah Palestin.","categories":"mewah, kosmetik","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Agoda":{"desc":"Booking.com, syarikat induk yang memiliki Agoda, membenarkan penyenaraian di wilayah Palestin yang diduduki, dan setelah memutuskan awalnya untuk menambah label pada hartanah yang berada di wilayah yang diduduki, membatalkan langkah itu di bawah tekanan dari Israel.","categories":"pelancongan, teknologi","alternatives":"halalbooking.com"},"Airbnb":{"desc":"Airbnb membenarkan penyenaraian di wilayah Palestin yang diduduki, dan setelah mengumumkan akan menghapuskan 200 penyenaraian tersebut, ia membatalkan keputusannya, menunjukkan ia dengan sengaja bersubahat dalam pendudukan Israel.","categories":"pelancongan, teknologi","alternatives":"halalbooking.com"},"Amazon":{"desc":"Amazon melabur $7.2bn dalam pusat data di Israel melalui AWS","categories":"pasar raya, teknologi","alternatives":"eBay (tidak disahkan)"},"AXA":{"desc":"AXA terus melabur dalam bank-bank Israel yang bersubahat dalam pendudukan dan apartheid Israel di Palestin.","categories":"insurans, kewangan","alternatives":"Syarikat insurans lain"},"Booking":{"desc":"Booking.com membenarkan penyenaraian di wilayah Palestin yang diduduki, dan setelah mengumumkan akan menghapuskan 200 penyenaraian tersebut, ia membatalkan keputusannya, menunjukkan ia dengan sengaja bersubahat dalam pendudukan Israel.","categories":"pelancongan, teknologi","alternatives":"halalbooking.com"},"Carrefour":{"desc":"Carrefour telah membuat pelaburan besar ke dalam Israel tahun lalu, membuka 50 kedai dan merancang untuk membuka 100 lagi menjelang 2024.","categories":"pasar raya, makanan, minuman, pakaian, barangan rumah","alternatives":"Rantaian pasar raya lain"},"Tesco":{"desc":"Tesco bekerjasama dengan sebuah permulaan Israel, Trigo Retail, untuk menyampaikan kedai tanpa kaunter dengan beberapa sudah dibuka di London. Michael Gabay, CEO Trigo adalah seorang zionis tegar.","categories":"pasar raya, makanan, minuman, insurans, barangan rumah, kewangan","alternatives":"Rantaian pasar raya lain"},"Disney":{"desc":"Disney membuat pengumuman rasmi bahawa ia akan berjanji $2 juta dan inisiatif lanjut untuk menyokong Israel. Walaupun CEO secara terang-terangan mengutuk serangan terhadap orang Yahudi di Israel, beliau tidak menyebut tentang orang Palestin yang dibunuh oleh tentera Israel.","categories":"hiburan, teknologi","alternatives":"Syarikat hiburan dan media lain"},"Fiverr":{"desc":"CEO, Micha Kaufman, adalah seorang zionis tegar yang menyokong IDF.","categories":"teknologi","alternatives":"Platform perkhidmatan bebas lain"},"HP":{"desc":"Hewlett Packard mengendalikan sistem ID biometrik yang digunakan Israel untuk menghadkan pergerakan Palestin serta sistem lain untuk IDF.","categories":"teknologi","alternatives":"Lenovo"},"HSBC":{"desc":"HSBC melabur dalam syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan terhadap Palestin.","categories":"kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Motorola":{"desc":"IDF menggunakan Motorola sebagai pembekal utama untuk peralatan komunikasinya yang membolehkan mereka mengawal orang Palestin yang diduduki secara berkesan. Mereka juga mengeluarkan fius bom yang digunakan dalam bom IDF.","categories":"teknologi, pengilang","alternatives":"Syarikat telefon bimbit dan teknologi lain"},"Movenpick":{"desc":"Pemilik jenama Movenpick, Nestle, memiliki saham pengendali di Osem. Osem adalah pengilang makanan Israel yang beroperasi di Palestin yang diduduki.","categories":"makanan","alternatives":"Jenama makanan dan minuman lain"},"PUMA":{"desc":"Puma adalah penaja utama Persatuan Bola Sepak Israel (IFA), yang termasuk pasukan di penempatan haram Israel di tanah Palestin yang diduduki.","categories":"pakaian, fesyen","alternatives":"Jenama pakaian sukan dan fesyen lain"},"Tag Heuer":{"desc":"Pemilik syarikat induk TAG Heuer, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"mewah, fesyen","alternatives":"Jenama jam tangan mewah lain"},"Waze":{"desc":"Pengasas, Uri Levine, adalah seorang zionis tegar yang juga bekas IDF (juga pengasas moovit). Waze telah dibeli oleh Google yang juga dalam senarai boikot kerana membina superkomputer Israel dengan Amazon. Waze dimiliki oleh Google tetapi pasukan dan pejabat mereka masih berada di Israel. Waze adalah penghasil pendapatan, kerana ia menayangkan iklan pada peta itu sendiri yang bermaksud mereka membuat wang apabila anda menggunakan navigasi. Peta Google adalah percuma dan bukan penghasil pendapatan. Ia membantu Google menargetkan anda dengan iklan kemudian, tetapi jika anda tidak mengklik iklan tersebut, maka anda tidak memberi manfaat kepada Google. Oleh itu, kami mengesyorkan menggunakan peta Google, tetapi tidak mengklik iklan Google semasa anda melayari internet.","categories":"teknologi, perjalanan","alternatives":"Perisian navigasi GPS lain"},"Nokia":{"desc":"Nokia Venture Partners, cawangan Nokia Ventures Organization, melancarkan dana baru $500 juta pada Disember 2000 dan membenarkan bahawa sejumlah besar daripadanya akan masuk ke dalam syarikat-syarikat Israel. Pusat Penyelidikan Nokia sedang mencari permulaan Israel yang boleh mereka kerjasama.","categories":"teknologi","alternatives":"Pengilang telefon bimbit lain"},"Nike":{"desc":"Keputusan Nike untuk menghentikan bekalan ke kedai-kedai Israel menandakan kemunduran bagi banyak kedai sukan di negara tersebut. Ia mencerminkan strategi global Nike daripada mesej politik tertentu terhadap Israel, bertujuan untuk mengawal proses jualan dan meningkatkan keuntungan.","categories":"pakaian, fesyen","alternatives":"Jenama pakaian sukan dan atletik lain"},"Skechers":{"desc":"Michael S Greenberg, presiden Skechers, adalah seorang zionis yang telah memuat naik kandungan pro-Israel di Instagramnya.","categories":"pakaian, fesyen","alternatives":"Jenama kasut dan fesyen lain"},"Adidas":{"desc":"Adidas menggunakan pengilang Israel, Delta Galil, untuk menghasilkan rangkaian pakaian dalamnya.","categories":"pakaian, fesyen","alternatives":"Jenama pakaian sukan dan atletik lain"},"Hyundai":{"desc":"Mesin berat Hyundai telah digunakan dalam pemusnahan kejiranan Palestin di Jerusalem, mendapat manfaat secara komersial dari pendudukan Israel.","categories":"kereta, pengilang","alternatives":"Pengilang kereta lain"},"Mercedes Benz":{"desc":"Mercedes Benz membuka pusat teknologi di Tel Aviv untuk mengembangkan teknologi kereta bersambung, padahal mereka boleh membuka pusat tersebut di mana-mana bandar di dunia.","categories":"kereta, pengilang","alternatives":"Pengilang kereta mewah lain"},"Rentalcars":{"desc":"Booking.com, yang syarikat induknya Booking Holdings memiliki Rentalcars.com, membenarkan penyenaraian di wilayah Palestin yang diduduki, dan selepas memutuskan untuk menambah label pada hartanah yang berada di wilayah yang diduduki, membatalkan langkah tersebut di bawah tekanan dari Israel.","categories":"kereta, teknologi, perjalanan","alternatives":"Perkhidmatan sewa kereta lain"},"Volvo":{"desc":"Mesin berat Volvo telah digunakan dalam pemusnahan kejiranan Palestin di Palestin yang diduduki, mendapat manfaat secara komersial dari pendudukan Israel. Mereka mengeluarkan kenyataan menjarakkan diri dan menolak tanggungjawab keputusan rangkaian penjualannya, namun masih bersalah kecuali mereka mengakhiri hubungan dengan syarikat yang menjual peralatan kepada IDF, contohnya Mayers Cars and Trucks di Ashdod.","categories":"kereta, pengilang","alternatives":"Pengilang kereta lain"},"Shell":{"desc":"Saham Shell mencapai rekod tertinggi kerana perang Israel-Hamas mendorong harga minyak naik","categories":"tenaga","alternatives":"Petronas, BHP"},"Caltex":{"desc":"Chevron terlibat dalam dasar dan amalan Israel yang merampas hak rakyat Palestin atas kedaulatan sumber semula jadi mereka.","categories":"tenaga","alternatives":"Petronas, BHP"},"Purina":{"desc":"Pemilik jenama Purina, Nestle, memiliki pegangan pengendali dalam Osem. Osem adalah pengilang makanan Israel yang beroperasi di Palestin yang Diduduki.","categories":"haiwan peliharaan","alternatives":"Jenama makanan haiwan peliharaan lain"},"Friskies":{"desc":"Hubungan antara Friskies Nestle dan Israel adalah mengkhawatirkan. Adalah membimbangkan mengetahui bahawa jenama terkenal seperti Friskies, yang dimiliki oleh Nestle, menyokong pendudukan Israel terhadap wilayah Palestin.","categories":"haiwan peliharaan","alternatives":"Jenama makanan haiwan peliharaan lain"},"Whiskas":{"desc":"Pemilik Whiskas, Mars, menyokong negara zionis dengan melabur berat dalam scene permulaan foodtech melalui rakan modal ventur JVC.","categories":"haiwan peliharaan","alternatives":"Jenama makanan haiwan peliharaan lain"},"Unicef":{"desc":"Ketua Unicef, Catherine Russell berkahwin dengan pengerusi pelaburan BlackRock, salah satu pelabur terbesar dalam syarikat senjata di dunia. Ini adalah konflik kepentingan besar dan Unicef tidak patut dipercayai.","categories":"kebajikan","alternatives":"Muslims Around The World, Ummah Welfare Trust, One Ummah"},"Labour party":{"desc":"Keir Starmer telah membuat kenyataan rasmi bahawa Parti Buruh berdiri bersama Israel.","categories":"politik","alternatives":"Abstain, Mengundi untuk parti kecil dengan nilai baik"},"Conservative party":{"desc":"Rishi Sunak telah membuat kenyataan rasmi bahawa Konservatif berdiri bersama Israel. Dia juga menghantar bantuan ketenteraan untuk membantu Israel dalam genosid Gaza.","categories":"politik","alternatives":"Abstain, Mengundi untuk parti kecil dengan nilai baik"},"G4S":{"desc":"G4S kini telah sepenuhnya melupuskan dari Israel selepas tekanan BDS. Tetapi mereka telah bersubahat dan membantu pendudukan Israel selama bertahun-tahun.","categories":"kontraktor","alternatives":"Tiada alternatif yang diselidiki"},"A&W":{"desc":"Syarikat induk Yum Brands adalah pelabur dalam permulaan di Israel.","categories":"makanan,minuman","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Taco Bell":{"desc":"Syarikat induk Yum Brands adalah pelabur dalam permulaan di Israel.","categories":"makanan","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Meta":{"desc":"Di tengah-tengah konflik yang berterusan antara Israel dan Palestin, Mark Zuckerberg, Ketua Pegawai Eksekutif Meta, menyatakan pendapatnya mengenai situasi itu dan mengutuk serangan yang dilakukan oleh Hamas. Dalam Kisah Instagram awal minggu ini, Encik Zuckerberg berkata, ''Serangan pengganas oleh Hamas adalah jahat. Tidak pernah ada sebarang justifikasi untuk melakukan tindakan keganasan terhadap orang yang tidak bersalah.''","categories":"teknologi","alternatives":"twitter,Gab"},"Aviva":{"desc":"Aviva melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"Jangan simpan wang persaraan anda dengan Aviva"},"BankOfAmerica":{"desc":"Bank of America adalah sebahagian daripada urusan pinjaman $500 juta dengan konsortium pemberi pinjaman, ke dalam Elbit Systems Ltd, pengilang senjata Israel.","categories":"kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"BankOfMontreal":{"desc":"Bank of Montreal meminjamkan $90 juta sebagai sebahagian daripada urusan pinjaman $500 juta dengan konsortium pemberi pinjaman, ke dalam Elbit Systems Ltd, pengilang senjata Israel.","categories":"kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Barclays":{"desc":"Barclays melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"BNP":{"desc":"BNP Paribas adalah sebahagian daripada urusan pinjaman $500 juta dengan konsortium pemberi pinjaman, ke dalam Elbit Systems Ltd, pengilang senjata Israel.","categories":"kewangan","alternatives":"Jangan berurusan dengan BNP Paribas"},"CapitalOne":{"desc":"Capital One adalah sebahagian daripada urusan pinjaman $500 juta dengan konsortium pemberi pinjaman, ke dalam Elbit Systems Ltd, pengilang senjata Israel.","categories":"kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Legal":{"desc":"Legal & General melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"Jangan melabur dengan Legal & General"},"Lloyds":{"desc":"Lloyds melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"M&S":{"desc":"Marks & Spencer telah menjadi entiti pro zionis sejak permulaannya, dengan pelbagai ahli pengurusan mereka secara terbuka menyatakan sokongan untuk negara zionis. Selama lebih 100 tahun, mereka telah menjadi saluran komersial terbesar antara Israel dan UK. Walau bagaimanapun, baru-baru ini mereka telah secara terbuka menjauhkan diri daripada mempunyai hubungan 'politik' dan tujuan. Dan kerana kenyataan terakhir dalam sokongan Israel adalah sekitar tahun 2000, sukar untuk mengetahui sejauh mana kepemimpinan mereka menyokong Israel.","categories":"supermarket, makanan, minuman, pakaian, kewangan","alternatives":"Morrisons, Co-op"},"RBS":{"desc":"RBS melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"StandardLife":{"desc":"Standard Life melabur dalam syarikat-syarikat yang menjual senjata dan peralatan ketenteraan kepada Israel yang telah digunakan dalam penindasan Palestin","categories":"insurans,kewangan","alternatives":"Jangan simpan atau melabur dengan Standard Life"},"Visa":{"desc":"Visa telah membuka pusat penyelidikan dan pembangunan di Israel dan melabur dengan banyak dalam ekonomi tempatan.","categories":"kewangan","alternatives":"Tiada alternatif yang dikaji setakat ini. Bantu kami!"},"WellsFargo":{"desc":"Wells Fargo adalah sebahagian daripada urusan pinjaman $500 juta dengan konsortium pemberi pinjaman, ke dalam Elbit Systems Ltd, pengilang senjata Israel.","categories":"kewangan","alternatives":"Jangan berurusan dengan Wells Fargo"},"DunkinDonuts":{"desc":"Di tengah-tengah konflik Israel-Palestin yang berterusan, timbul pertanyaan mengenai pendirian syarikat, yang membuat pengguna bertanya-tanya apakah Dunkin Donuts menyokong salah satu pihak. Artikel ini bertujuan untuk meneroka nuansa sekeliling Dunkin Donuts di Israel dan pendiriannya di tengah-tengah konflik.","categories":"makanan,kopi,minuman","alternatives":"sokong jenama tempatan"},"Wix":{"desc":"CEO Avishai Abrahami adalah seorang zionis yang menyokong IDF.","categories":"teknologi","alternatives":"Wordpress,Weebly,Squarespace,Framer,Figma"},"Nvidia":{"desc":"Nvidia sedang membina sebuah superkomputer untuk Israel, yang pasti akan digunakan untuk meneruskan penindasan terhadap Palestin dan menguatkuasakan apartheid mereka.","categories":"teknologi","alternatives":"AMD"},"Zara":{"desc":"Kempen pemasaran terbaru Zara menggunakan mayat dalam pembungkusan plastik, dan estetika zon perang, memperlekehkan pembunuhan besar-besaran oleh Israel di Gaza. Dalam insiden sebelumnya, Joey Schwebel, seorang warganegara dwi Kanada-Israel dan pengerusi francais Zara Israel Trimera, telah mengadakan pertemuan dengan pengganas yang dihukum, Itamar Ben-Gvir, di rumahnya menjelang pilihan raya Israel. Zara tidak mengeluarkan kenyataan untuk menjauhkan diri dari hubungan ini dan membiarkan kempen iklan ini berjalan.","categories":"pakaian, fesyen","alternatives":"sokong jenama tempatan"},"LouisVuitton":{"desc":"Pemilik syarikat induk Louis Vuitton, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"pakaian, fesyen, kosmetik","alternatives":"sokong jenama tempatan, kosmetik Lush, kecantikan Huda, Sunnamusk"},"PradaBeauty":{"desc":"Prada Beauty merupakan kerjasama dengan L'Oreal, yang merupakan 'kawan rapat Israel'. Setelah menghantar surat kepada Liga Arab dengan maklumat untuk membantu boikot, mereka membayar denda $1.4 juta dan mengeluarkan permohonan maaf, sebelum membina hubungan baru dengan Israel, dengan pelaburan besar-besaran dan bahkan mengendalikan kilang di Palestin yang Diduduki.","categories":"pakaian, fesyen, kosmetik","alternatives":"sokong jenama tempatan, kosmetik Lush, kecantikan Huda, Sunnamusk"},"Sephora":{"desc":"Pemilik Sephora, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"kosmetik","alternatives":"sokong jenama tempatan, kosmetik Lush, kecantikan Huda, Sunnamusk"},"Ordinary":{"desc":"The Ordinary dimiliki oleh Estee Lauder, di mana pemiliknya, terutama Ronald Lauder, mempunyai pandangan Zionis ekstremis dan menyokong secara kewangan dan politik pendudukan Israel atas tanah Palestin.","categories":"kosmetik","alternatives":"sokong jenama tempatan, kosmetik Lush, kecantikan Huda, Sunnamusk"},"Stella":{"desc":"Pemilik syarikat induk STELLA by Stella McCartney, LVMH, Bernard Arnault melabur ratusan juta dalam syarikat-syarikat Israel","categories":"pakaian, fesyen, kosmetik","alternatives":"sokong jenama tempatan, kosmetik Lush, kecantikan Huda, Sunnamusk"},"Victorias":{"desc":"Les Wexner yang memiliki L Brands, syarikat induk Victorias Secret, adalah sekutu kukuh Israel, dan rakan perniagaan jangka panjang Jeffrey Epstein, pengedar kanak-kanak yang dihukum.","categories":"pakaian, kosmetik","alternatives":"sokong jenama tempatan"},"OralB":{"desc":"Oral B dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, di mana ia melabur $2bn setiap tahun.","categories":"penjagaan kesihatan","alternatives":"Produk jenama sendiri pasar raya"},"Pantene":{"desc":"Pantene dimiliki oleh Procter and Gamble, yang membuka pusat R&D di Tel Aviv, Palestin yang Diduduki, di mana ia melabur $2bn setiap tahun.","categories":"kosmetik, penjagaan kesihatan","alternatives":"Produk jenama sendiri pasar raya"},"Hahne":{"desc":"Mempunyai Beberapa Logo Zionis","categories":"makanan , pasar raya","alternatives":"Produk jenama sendiri pasar raya"},"Vercel":{"desc":"Developer menjatuhkan Vercel, memanggil boikot selepas CEO memposting selfie dengan Netanyahu","categories":"teknologi","alternatives":"Netlify,Render,Railway,DigitalOcean"}}}}`);
    }, 66: (a, b, c) => {
      "use strict";
      c.d(b, { RM: () => f, s8: () => e });
      let d = new Set(Object.values({ NOT_FOUND: 404, FORBIDDEN: 403, UNAUTHORIZED: 401 })), e = "NEXT_HTTP_ERROR_FALLBACK";
      function f(a2) {
        if ("object" != typeof a2 || null === a2 || !("digest" in a2) || "string" != typeof a2.digest) return false;
        let [b2, c2] = a2.digest.split(";");
        return b2 === e && d.has(Number(c2));
      }
    }, 107: (a, b, c) => {
      "use strict";
      c.d(b, { I3: () => k, Ui: () => i, xI: () => g, Pk: () => h });
      var d = c(7814), e = c(6159);
      c(4979), c(1128), c(5379), c(5770), c(2340), c(9809);
      let f = "function" == typeof d.unstable_postpone;
      function g(a2, b2, c2) {
        let d2 = Object.defineProperty(new e.F(`Route ${b2.route} couldn't be rendered statically because it used \`${a2}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", { value: "E558", enumerable: false, configurable: true });
        throw c2.revalidate = 0, b2.dynamicUsageDescription = a2, b2.dynamicUsageStack = d2.stack, d2;
      }
      function h(a2) {
        switch (a2.type) {
          case "cache":
          case "unstable-cache":
          case "private-cache":
            return;
        }
      }
      function i(a2, b2, c2) {
        (function() {
          if (!f) throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E224", enumerable: false, configurable: true });
        })(), c2 && c2.dynamicAccesses.push({ stack: c2.isDebugDynamicAccesses ? Error().stack : void 0, expression: b2 }), d.unstable_postpone(j(a2, b2));
      }
      function j(a2, b2) {
        return `Route ${a2} needs to bail out of prerendering at this point because it used ${b2}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function k(a2) {
        return "object" == typeof a2 && null !== a2 && "string" == typeof a2.message && l(a2.message);
      }
      function l(a2) {
        return a2.includes("needs to bail out of prerendering at this point because it used") && a2.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
      }
      if (false === l(j("%%%", "^^^"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E296", enumerable: false, configurable: true });
      RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)`), RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`);
    }, 194: (a) => {
      "use strict";
      a.exports = c, a.exports.preferredCharsets = c;
      var b = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function c(a2, c2) {
        var g = function(a3) {
          for (var c3 = a3.split(","), d2 = 0, e2 = 0; d2 < c3.length; d2++) {
            var f2 = function(a4, c4) {
              var d3 = b.exec(a4);
              if (!d3) return null;
              var e3 = d3[1], f3 = 1;
              if (d3[2]) for (var g2 = d3[2].split(";"), h2 = 0; h2 < g2.length; h2++) {
                var i = g2[h2].trim().split("=");
                if ("q" === i[0]) {
                  f3 = parseFloat(i[1]);
                  break;
                }
              }
              return { charset: e3, q: f3, i: c4 };
            }(c3[d2].trim(), d2);
            f2 && (c3[e2++] = f2);
          }
          return c3.length = e2, c3;
        }(void 0 === a2 ? "*" : a2 || "");
        if (!c2) return g.filter(f).sort(d).map(e);
        var h = c2.map(function(a3, b2) {
          for (var c3 = { o: -1, q: 0, s: 0 }, d2 = 0; d2 < g.length; d2++) {
            var e2 = function(a4, b3, c4) {
              var d3 = 0;
              if (b3.charset.toLowerCase() === a4.toLowerCase()) d3 |= 1;
              else if ("*" !== b3.charset) return null;
              return { i: c4, o: b3.i, q: b3.q, s: d3 };
            }(a3, g[d2], b2);
            e2 && 0 > (c3.s - e2.s || c3.q - e2.q || c3.o - e2.o) && (c3 = e2);
          }
          return c3;
        });
        return h.filter(f).sort(d).map(function(a3) {
          return c2[h.indexOf(a3)];
        });
      }
      function d(a2, b2) {
        return b2.q - a2.q || b2.s - a2.s || a2.o - b2.o || a2.i - b2.i || 0;
      }
      function e(a2) {
        return a2.charset;
      }
      function f(a2) {
        return a2.q > 0;
      }
    }, 388: (a, b, c) => {
      "use strict";
      c.d(b, { R: () => k });
      var d = c(7028), e = c(4700), f = c(6206), g = c(4115);
      let h = Symbol("internal response"), i = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function j(a2, b2) {
        var c2;
        if (null == a2 || null == (c2 = a2.request) ? void 0 : c2.headers) {
          if (!(a2.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", { value: "E119", enumerable: false, configurable: true });
          let c3 = [];
          for (let [d2, e2] of a2.request.headers) b2.set("x-middleware-request-" + d2, e2), c3.push(d2);
          b2.set("x-middleware-override-headers", c3.join(","));
        }
      }
      class k extends Response {
        constructor(a2, b2 = {}) {
          super(a2, b2);
          let c2 = this.headers, i2 = new Proxy(new d.VO(c2), { get(a3, e2, f2) {
            switch (e2) {
              case "delete":
              case "set":
                return (...f3) => {
                  let g2 = Reflect.apply(a3[e2], a3, f3), h2 = new Headers(c2);
                  return g2 instanceof d.VO && c2.set("x-middleware-set-cookie", g2.getAll().map((a4) => (0, d.Ud)(a4)).join(",")), j(b2, h2), g2;
                };
              default:
                return g.l.get(a3, e2, f2);
            }
          } });
          this[h] = { cookies: i2, url: b2.url ? new e.X(b2.url, { headers: (0, f.Cu)(c2), nextConfig: b2.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[h].cookies;
        }
        static json(a2, b2) {
          let c2 = Response.json(a2, b2);
          return new k(c2.body, c2);
        }
        static redirect(a2, b2) {
          let c2 = "number" == typeof b2 ? b2 : (null == b2 ? void 0 : b2.status) ?? 307;
          if (!i.has(c2)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", { value: "E529", enumerable: false, configurable: true });
          let d2 = "object" == typeof b2 ? b2 : {}, e2 = new Headers(null == d2 ? void 0 : d2.headers);
          return e2.set("Location", (0, f.qU)(a2)), new k(null, { ...d2, headers: e2, status: c2 });
        }
        static rewrite(a2, b2) {
          let c2 = new Headers(null == b2 ? void 0 : b2.headers);
          return c2.set("x-middleware-rewrite", (0, f.qU)(a2)), j(b2, c2), new k(null, { ...b2, headers: c2 });
        }
        static next(a2) {
          let b2 = new Headers(null == a2 ? void 0 : a2.headers);
          return b2.set("x-middleware-next", "1"), j(a2, b2), new k(null, { ...a2, headers: b2 });
        }
      }
    }, 403: (a, b) => {
      "use strict";
      function c(a2) {
        return ("object" == typeof a2 ? null == a2.host && null == a2.hostname : !/^[a-z]+:/i.test(a2)) && !function(a3) {
          let b2 = "object" == typeof a3 ? a3.pathname : a3;
          return null != b2 && !b2.startsWith("/");
        }(a2);
      }
      function d(a2, b2) {
        let c2;
        return "string" == typeof a2 ? c2 = e(b2, a2) : (c2 = { ...a2 }, a2.pathname && (c2.pathname = e(b2, a2.pathname))), c2;
      }
      function e(a2, b2) {
        let c2 = a2;
        return /^\/(\?.*)?$/.test(b2) && (b2 = b2.slice(1)), c2 += b2;
      }
      function f(a2, b2) {
        return b2 === a2 || b2.startsWith("".concat(a2, "/"));
      }
      function g(a2) {
        let b2 = function() {
          try {
            return "true" === process.env._next_intl_trailing_slash;
          } catch (a3) {
            return false;
          }
        }();
        if ("/" !== a2) {
          let c2 = a2.endsWith("/");
          b2 && !c2 ? a2 += "/" : !b2 && c2 && (a2 = a2.slice(0, -1));
        }
        return a2;
      }
      function h(a2) {
        return "/" + a2;
      }
      function i(a2) {
        let b2 = a2.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(b2, "$"));
      }
      function j(a2) {
        return a2.includes("[[...");
      }
      function k(a2) {
        return a2.includes("[...");
      }
      function l(a2) {
        return a2.includes("[");
      }
      function m(a2, b2) {
        let c2 = a2.split("/"), d2 = b2.split("/"), e2 = Math.max(c2.length, d2.length);
        for (let a3 = 0; a3 < e2; a3++) {
          let b3 = c2[a3], e3 = d2[a3];
          if (!b3 && e3) return -1;
          if (b3 && !e3) return 1;
          if (b3 || e3) {
            if (!l(b3) && l(e3)) return -1;
            if (l(b3) && !l(e3)) return 1;
            if (!k(b3) && k(e3)) return -1;
            if (k(b3) && !k(e3)) return 1;
            if (!j(b3) && j(e3)) return -1;
            if (j(b3) && !j(e3)) return 1;
          }
        }
        return 0;
      }
      Object.defineProperty(b, "__esModule", { value: true }), b.getLocaleAsPrefix = h, b.getLocalePrefix = function(a2, b2) {
        var c2;
        return "never" !== b2.mode && (null == (c2 = b2.prefixes) ? void 0 : c2[a2]) || h(a2);
      }, b.getSortedPathnames = function(a2) {
        return a2.sort(m);
      }, b.hasPathnamePrefixed = f, b.isLocalizableHref = c, b.isPromise = function(a2) {
        return "function" == typeof a2.then;
      }, b.localizeHref = function(a2, b2) {
        let e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b2, g2 = arguments.length > 3 ? arguments[3] : void 0, h2 = arguments.length > 4 ? arguments[4] : void 0;
        if (!c(a2)) return a2;
        let i2 = f(h2, g2);
        return (b2 !== e2 || i2) && null != h2 ? d(a2, h2) : a2;
      }, b.matchesPathname = function(a2, b2) {
        let c2 = g(a2), d2 = g(b2);
        return i(c2).test(d2);
      }, b.normalizeTrailingSlash = g, b.prefixHref = d, b.prefixPathname = e, b.templateToRegex = i, b.unprefixPathname = function(a2, b2) {
        return a2.replace(new RegExp("^".concat(b2)), "") || "/";
      };
    }, 720: (a, b, c) => {
      "use strict";
      c.r(b), c.d(b, { ErrorCode: () => i, FormatError: () => ab, IntlMessageFormat: () => ai, InvalidValueError: () => ac, InvalidValueTypeError: () => ad, MissingValueError: () => ae, PART_TYPE: () => j, default: () => aj, formatToParts: () => ag, isFormatXMLElementFn: () => af });
      var d, e, f, g, h, i, j, k = c(7613), l = c(6660);
      function m(a2) {
        return a2.type === e.literal;
      }
      function n(a2) {
        return a2.type === e.number;
      }
      function o(a2) {
        return a2.type === e.date;
      }
      function p(a2) {
        return a2.type === e.time;
      }
      function q(a2) {
        return a2.type === e.select;
      }
      function r(a2) {
        return a2.type === e.plural;
      }
      function s(a2) {
        return a2.type === e.tag;
      }
      function t(a2) {
        return !!(a2 && "object" == typeof a2 && a2.type === f.number);
      }
      function u(a2) {
        return !!(a2 && "object" == typeof a2 && a2.type === f.dateTime);
      }
      !function(a2) {
        a2[a2.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", a2[a2.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", a2[a2.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", a2[a2.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", a2[a2.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", a2[a2.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", a2[a2.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", a2[a2.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", a2[a2.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", a2[a2.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", a2[a2.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", a2[a2.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", a2[a2.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", a2[a2.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", a2[a2.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", a2[a2.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", a2[a2.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", a2[a2.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", a2[a2.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", a2[a2.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", a2[a2.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", a2[a2.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", a2[a2.INVALID_TAG = 23] = "INVALID_TAG", a2[a2.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", a2[a2.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", a2[a2.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
      }(d || (d = {})), function(a2) {
        a2[a2.literal = 0] = "literal", a2[a2.argument = 1] = "argument", a2[a2.number = 2] = "number", a2[a2.date = 3] = "date", a2[a2.time = 4] = "time", a2[a2.select = 5] = "select", a2[a2.plural = 6] = "plural", a2[a2.pound = 7] = "pound", a2[a2.tag = 8] = "tag";
      }(e || (e = {})), function(a2) {
        a2[a2.number = 0] = "number", a2[a2.dateTime = 1] = "dateTime";
      }(f || (f = {}));
      var v = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, w = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, x = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i, y = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, z = /^(@+)?(\+|#+)?[rs]?$/g, A = /(\*)(0+)|(#+)(0+)|(0+)/g, B = /^(0+)$/;
      function C(a2) {
        var b2 = {};
        return "r" === a2[a2.length - 1] ? b2.roundingPriority = "morePrecision" : "s" === a2[a2.length - 1] && (b2.roundingPriority = "lessPrecision"), a2.replace(z, function(a3, c2, d2) {
          return "string" != typeof d2 ? (b2.minimumSignificantDigits = c2.length, b2.maximumSignificantDigits = c2.length) : "+" === d2 ? b2.minimumSignificantDigits = c2.length : "#" === c2[0] ? b2.maximumSignificantDigits = c2.length : (b2.minimumSignificantDigits = c2.length, b2.maximumSignificantDigits = c2.length + ("string" == typeof d2 ? d2.length : 0)), "";
        }), b2;
      }
      function D(a2) {
        switch (a2) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function E(a2) {
        var b2 = D(a2);
        return b2 || {};
      }
      var F = { "001": ["H", "h"], 419: ["h", "H", "hB", "hb"], AC: ["H", "h", "hb", "hB"], AD: ["H", "hB"], AE: ["h", "hB", "hb", "H"], AF: ["H", "hb", "hB", "h"], AG: ["h", "hb", "H", "hB"], AI: ["H", "h", "hb", "hB"], AL: ["h", "H", "hB"], AM: ["H", "hB"], AO: ["H", "hB"], AR: ["h", "H", "hB", "hb"], AS: ["h", "H"], AT: ["H", "hB"], AU: ["h", "hb", "H", "hB"], AW: ["H", "hB"], AX: ["H"], AZ: ["H", "hB", "h"], BA: ["H", "hB", "h"], BB: ["h", "hb", "H", "hB"], BD: ["h", "hB", "H"], BE: ["H", "hB"], BF: ["H", "hB"], BG: ["H", "hB", "h"], BH: ["h", "hB", "hb", "H"], BI: ["H", "h"], BJ: ["H", "hB"], BL: ["H", "hB"], BM: ["h", "hb", "H", "hB"], BN: ["hb", "hB", "h", "H"], BO: ["h", "H", "hB", "hb"], BQ: ["H"], BR: ["H", "hB"], BS: ["h", "hb", "H", "hB"], BT: ["h", "H"], BW: ["H", "h", "hb", "hB"], BY: ["H", "h"], BZ: ["H", "h", "hb", "hB"], CA: ["h", "hb", "H", "hB"], CC: ["H", "h", "hb", "hB"], CD: ["hB", "H"], CF: ["H", "h", "hB"], CG: ["H", "hB"], CH: ["H", "hB", "h"], CI: ["H", "hB"], CK: ["H", "h", "hb", "hB"], CL: ["h", "H", "hB", "hb"], CM: ["H", "h", "hB"], CN: ["H", "hB", "hb", "h"], CO: ["h", "H", "hB", "hb"], CP: ["H"], CR: ["h", "H", "hB", "hb"], CU: ["h", "H", "hB", "hb"], CV: ["H", "hB"], CW: ["H", "hB"], CX: ["H", "h", "hb", "hB"], CY: ["h", "H", "hb", "hB"], CZ: ["H"], DE: ["H", "hB"], DG: ["H", "h", "hb", "hB"], DJ: ["h", "H"], DK: ["H"], DM: ["h", "hb", "H", "hB"], DO: ["h", "H", "hB", "hb"], DZ: ["h", "hB", "hb", "H"], EA: ["H", "h", "hB", "hb"], EC: ["h", "H", "hB", "hb"], EE: ["H", "hB"], EG: ["h", "hB", "hb", "H"], EH: ["h", "hB", "hb", "H"], ER: ["h", "H"], ES: ["H", "hB", "h", "hb"], ET: ["hB", "hb", "h", "H"], FI: ["H"], FJ: ["h", "hb", "H", "hB"], FK: ["H", "h", "hb", "hB"], FM: ["h", "hb", "H", "hB"], FO: ["H", "h"], FR: ["H", "hB"], GA: ["H", "hB"], GB: ["H", "h", "hb", "hB"], GD: ["h", "hb", "H", "hB"], GE: ["H", "hB", "h"], GF: ["H", "hB"], GG: ["H", "h", "hb", "hB"], GH: ["h", "H"], GI: ["H", "h", "hb", "hB"], GL: ["H", "h"], GM: ["h", "hb", "H", "hB"], GN: ["H", "hB"], GP: ["H", "hB"], GQ: ["H", "hB", "h", "hb"], GR: ["h", "H", "hb", "hB"], GT: ["h", "H", "hB", "hb"], GU: ["h", "hb", "H", "hB"], GW: ["H", "hB"], GY: ["h", "hb", "H", "hB"], HK: ["h", "hB", "hb", "H"], HN: ["h", "H", "hB", "hb"], HR: ["H", "hB"], HU: ["H", "h"], IC: ["H", "h", "hB", "hb"], ID: ["H"], IE: ["H", "h", "hb", "hB"], IL: ["H", "hB"], IM: ["H", "h", "hb", "hB"], IN: ["h", "H"], IO: ["H", "h", "hb", "hB"], IQ: ["h", "hB", "hb", "H"], IR: ["hB", "H"], IS: ["H"], IT: ["H", "hB"], JE: ["H", "h", "hb", "hB"], JM: ["h", "hb", "H", "hB"], JO: ["h", "hB", "hb", "H"], JP: ["H", "K", "h"], KE: ["hB", "hb", "H", "h"], KG: ["H", "h", "hB", "hb"], KH: ["hB", "h", "H", "hb"], KI: ["h", "hb", "H", "hB"], KM: ["H", "h", "hB", "hb"], KN: ["h", "hb", "H", "hB"], KP: ["h", "H", "hB", "hb"], KR: ["h", "H", "hB", "hb"], KW: ["h", "hB", "hb", "H"], KY: ["h", "hb", "H", "hB"], KZ: ["H", "hB"], LA: ["H", "hb", "hB", "h"], LB: ["h", "hB", "hb", "H"], LC: ["h", "hb", "H", "hB"], LI: ["H", "hB", "h"], LK: ["H", "h", "hB", "hb"], LR: ["h", "hb", "H", "hB"], LS: ["h", "H"], LT: ["H", "h", "hb", "hB"], LU: ["H", "h", "hB"], LV: ["H", "hB", "hb", "h"], LY: ["h", "hB", "hb", "H"], MA: ["H", "h", "hB", "hb"], MC: ["H", "hB"], MD: ["H", "hB"], ME: ["H", "hB", "h"], MF: ["H", "hB"], MG: ["H", "h"], MH: ["h", "hb", "H", "hB"], MK: ["H", "h", "hb", "hB"], ML: ["H"], MM: ["hB", "hb", "H", "h"], MN: ["H", "h", "hb", "hB"], MO: ["h", "hB", "hb", "H"], MP: ["h", "hb", "H", "hB"], MQ: ["H", "hB"], MR: ["h", "hB", "hb", "H"], MS: ["H", "h", "hb", "hB"], MT: ["H", "h"], MU: ["H", "h"], MV: ["H", "h"], MW: ["h", "hb", "H", "hB"], MX: ["h", "H", "hB", "hb"], MY: ["hb", "hB", "h", "H"], MZ: ["H", "hB"], NA: ["h", "H", "hB", "hb"], NC: ["H", "hB"], NE: ["H"], NF: ["H", "h", "hb", "hB"], NG: ["H", "h", "hb", "hB"], NI: ["h", "H", "hB", "hb"], NL: ["H", "hB"], NO: ["H", "h"], NP: ["H", "h", "hB"], NR: ["H", "h", "hb", "hB"], NU: ["H", "h", "hb", "hB"], NZ: ["h", "hb", "H", "hB"], OM: ["h", "hB", "hb", "H"], PA: ["h", "H", "hB", "hb"], PE: ["h", "H", "hB", "hb"], PF: ["H", "h", "hB"], PG: ["h", "H"], PH: ["h", "hB", "hb", "H"], PK: ["h", "hB", "H"], PL: ["H", "h"], PM: ["H", "hB"], PN: ["H", "h", "hb", "hB"], PR: ["h", "H", "hB", "hb"], PS: ["h", "hB", "hb", "H"], PT: ["H", "hB"], PW: ["h", "H"], PY: ["h", "H", "hB", "hb"], QA: ["h", "hB", "hb", "H"], RE: ["H", "hB"], RO: ["H", "hB"], RS: ["H", "hB", "h"], RU: ["H"], RW: ["H", "h"], SA: ["h", "hB", "hb", "H"], SB: ["h", "hb", "H", "hB"], SC: ["H", "h", "hB"], SD: ["h", "hB", "hb", "H"], SE: ["H"], SG: ["h", "hb", "H", "hB"], SH: ["H", "h", "hb", "hB"], SI: ["H", "hB"], SJ: ["H"], SK: ["H"], SL: ["h", "hb", "H", "hB"], SM: ["H", "h", "hB"], SN: ["H", "h", "hB"], SO: ["h", "H"], SR: ["H", "hB"], SS: ["h", "hb", "H", "hB"], ST: ["H", "hB"], SV: ["h", "H", "hB", "hb"], SX: ["H", "h", "hb", "hB"], SY: ["h", "hB", "hb", "H"], SZ: ["h", "hb", "H", "hB"], TA: ["H", "h", "hb", "hB"], TC: ["h", "hb", "H", "hB"], TD: ["h", "H", "hB"], TF: ["H", "h", "hB"], TG: ["H", "hB"], TH: ["H", "h"], TJ: ["H", "h"], TL: ["H", "hB", "hb", "h"], TM: ["H", "h"], TN: ["h", "hB", "hb", "H"], TO: ["h", "H"], TR: ["H", "hB"], TT: ["h", "hb", "H", "hB"], TW: ["hB", "hb", "h", "H"], TZ: ["hB", "hb", "H", "h"], UA: ["H", "hB", "h"], UG: ["hB", "hb", "H", "h"], UM: ["h", "hb", "H", "hB"], US: ["h", "hb", "H", "hB"], UY: ["h", "H", "hB", "hb"], UZ: ["H", "hB", "h"], VA: ["H", "h", "hB"], VC: ["h", "hb", "H", "hB"], VE: ["h", "H", "hB", "hb"], VG: ["h", "hb", "H", "hB"], VI: ["h", "hb", "H", "hB"], VN: ["H", "h"], VU: ["h", "H"], WF: ["H", "hB"], WS: ["h", "H"], XK: ["H", "hB", "h"], YE: ["h", "hB", "hb", "H"], YT: ["H", "hB"], ZA: ["H", "h", "hb", "hB"], ZM: ["h", "hb", "H", "hB"], ZW: ["H", "h"], "af-ZA": ["H", "h", "hB", "hb"], "ar-001": ["h", "hB", "hb", "H"], "ca-ES": ["H", "h", "hB"], "en-001": ["h", "hb", "H", "hB"], "en-HK": ["h", "hb", "H", "hB"], "en-IL": ["H", "h", "hb", "hB"], "en-MY": ["h", "hb", "H", "hB"], "es-BR": ["H", "h", "hB", "hb"], "es-ES": ["H", "h", "hB", "hb"], "es-GQ": ["H", "h", "hB", "hb"], "fr-CA": ["H", "h", "hB"], "gl-ES": ["H", "h", "hB"], "gu-IN": ["hB", "hb", "h", "H"], "hi-IN": ["hB", "h", "H"], "it-CH": ["H", "h", "hB"], "it-IT": ["H", "h", "hB"], "kn-IN": ["hB", "h", "H"], "ml-IN": ["hB", "h", "H"], "mr-IN": ["hB", "hb", "h", "H"], "pa-IN": ["hB", "hb", "h", "H"], "ta-IN": ["hB", "h", "hb", "H"], "te-IN": ["hB", "h", "H"], "zu-ZA": ["H", "hB", "hb", "h"] }, G = new RegExp("^".concat(v.source, "*")), H = new RegExp("".concat(v.source, "*$"));
      function I(a2, b2) {
        return { start: a2, end: b2 };
      }
      var J = !!String.prototype.startsWith && "_a".startsWith("a", 1), K = !!String.fromCodePoint, L = !!Object.fromEntries, M = !!String.prototype.codePointAt, N = !!String.prototype.trimStart, O = !!String.prototype.trimEnd, P = Number.isSafeInteger ? Number.isSafeInteger : function(a2) {
        return "number" == typeof a2 && isFinite(a2) && Math.floor(a2) === a2 && 9007199254740991 >= Math.abs(a2);
      }, Q = true;
      try {
        Q = (null == (g = X("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) ? void 0 : g[0]) === "a";
      } catch (a2) {
        Q = false;
      }
      var R = J ? function(a2, b2, c2) {
        return a2.startsWith(b2, c2);
      } : function(a2, b2, c2) {
        return a2.slice(c2, c2 + b2.length) === b2;
      }, S = K ? String.fromCodePoint : function() {
        for (var a2, b2 = [], c2 = 0; c2 < arguments.length; c2++) b2[c2] = arguments[c2];
        for (var d2 = "", e2 = b2.length, f2 = 0; e2 > f2; ) {
          if ((a2 = b2[f2++]) > 1114111) throw RangeError(a2 + " is not a valid code point");
          d2 += a2 < 65536 ? String.fromCharCode(a2) : String.fromCharCode(((a2 -= 65536) >> 10) + 55296, a2 % 1024 + 56320);
        }
        return d2;
      }, T = L ? Object.fromEntries : function(a2) {
        for (var b2 = {}, c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2[c2], e2 = d2[0], f2 = d2[1];
          b2[e2] = f2;
        }
        return b2;
      }, U = M ? function(a2, b2) {
        return a2.codePointAt(b2);
      } : function(a2, b2) {
        var c2, d2 = a2.length;
        if (!(b2 < 0) && !(b2 >= d2)) {
          var e2 = a2.charCodeAt(b2);
          return e2 < 55296 || e2 > 56319 || b2 + 1 === d2 || (c2 = a2.charCodeAt(b2 + 1)) < 56320 || c2 > 57343 ? e2 : (e2 - 55296 << 10) + (c2 - 56320) + 65536;
        }
      }, V = N ? function(a2) {
        return a2.trimStart();
      } : function(a2) {
        return a2.replace(G, "");
      }, W = O ? function(a2) {
        return a2.trimEnd();
      } : function(a2) {
        return a2.replace(H, "");
      };
      function X(a2, b2) {
        return new RegExp(a2, b2);
      }
      if (Q) {
        var Y = X("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        h = function(a2, b2) {
          var c2;
          return Y.lastIndex = b2, null != (c2 = Y.exec(a2)[1]) ? c2 : "";
        };
      } else h = function(a2, b2) {
        for (var c2 = []; ; ) {
          var d2, e2 = U(a2, b2);
          if (void 0 === e2 || _(e2) || (d2 = e2) >= 33 && d2 <= 35 || 36 === d2 || d2 >= 37 && d2 <= 39 || 40 === d2 || 41 === d2 || 42 === d2 || 43 === d2 || 44 === d2 || 45 === d2 || d2 >= 46 && d2 <= 47 || d2 >= 58 && d2 <= 59 || d2 >= 60 && d2 <= 62 || d2 >= 63 && d2 <= 64 || 91 === d2 || 92 === d2 || 93 === d2 || 94 === d2 || 96 === d2 || 123 === d2 || 124 === d2 || 125 === d2 || 126 === d2 || 161 === d2 || d2 >= 162 && d2 <= 165 || 166 === d2 || 167 === d2 || 169 === d2 || 171 === d2 || 172 === d2 || 174 === d2 || 176 === d2 || 177 === d2 || 182 === d2 || 187 === d2 || 191 === d2 || 215 === d2 || 247 === d2 || d2 >= 8208 && d2 <= 8213 || d2 >= 8214 && d2 <= 8215 || 8216 === d2 || 8217 === d2 || 8218 === d2 || d2 >= 8219 && d2 <= 8220 || 8221 === d2 || 8222 === d2 || 8223 === d2 || d2 >= 8224 && d2 <= 8231 || d2 >= 8240 && d2 <= 8248 || 8249 === d2 || 8250 === d2 || d2 >= 8251 && d2 <= 8254 || d2 >= 8257 && d2 <= 8259 || 8260 === d2 || 8261 === d2 || 8262 === d2 || d2 >= 8263 && d2 <= 8273 || 8274 === d2 || 8275 === d2 || d2 >= 8277 && d2 <= 8286 || d2 >= 8592 && d2 <= 8596 || d2 >= 8597 && d2 <= 8601 || d2 >= 8602 && d2 <= 8603 || d2 >= 8604 && d2 <= 8607 || 8608 === d2 || d2 >= 8609 && d2 <= 8610 || 8611 === d2 || d2 >= 8612 && d2 <= 8613 || 8614 === d2 || d2 >= 8615 && d2 <= 8621 || 8622 === d2 || d2 >= 8623 && d2 <= 8653 || d2 >= 8654 && d2 <= 8655 || d2 >= 8656 && d2 <= 8657 || 8658 === d2 || 8659 === d2 || 8660 === d2 || d2 >= 8661 && d2 <= 8691 || d2 >= 8692 && d2 <= 8959 || d2 >= 8960 && d2 <= 8967 || 8968 === d2 || 8969 === d2 || 8970 === d2 || 8971 === d2 || d2 >= 8972 && d2 <= 8991 || d2 >= 8992 && d2 <= 8993 || d2 >= 8994 && d2 <= 9e3 || 9001 === d2 || 9002 === d2 || d2 >= 9003 && d2 <= 9083 || 9084 === d2 || d2 >= 9085 && d2 <= 9114 || d2 >= 9115 && d2 <= 9139 || d2 >= 9140 && d2 <= 9179 || d2 >= 9180 && d2 <= 9185 || d2 >= 9186 && d2 <= 9254 || d2 >= 9255 && d2 <= 9279 || d2 >= 9280 && d2 <= 9290 || d2 >= 9291 && d2 <= 9311 || d2 >= 9472 && d2 <= 9654 || 9655 === d2 || d2 >= 9656 && d2 <= 9664 || 9665 === d2 || d2 >= 9666 && d2 <= 9719 || d2 >= 9720 && d2 <= 9727 || d2 >= 9728 && d2 <= 9838 || 9839 === d2 || d2 >= 9840 && d2 <= 10087 || 10088 === d2 || 10089 === d2 || 10090 === d2 || 10091 === d2 || 10092 === d2 || 10093 === d2 || 10094 === d2 || 10095 === d2 || 10096 === d2 || 10097 === d2 || 10098 === d2 || 10099 === d2 || 10100 === d2 || 10101 === d2 || d2 >= 10132 && d2 <= 10175 || d2 >= 10176 && d2 <= 10180 || 10181 === d2 || 10182 === d2 || d2 >= 10183 && d2 <= 10213 || 10214 === d2 || 10215 === d2 || 10216 === d2 || 10217 === d2 || 10218 === d2 || 10219 === d2 || 10220 === d2 || 10221 === d2 || 10222 === d2 || 10223 === d2 || d2 >= 10224 && d2 <= 10239 || d2 >= 10240 && d2 <= 10495 || d2 >= 10496 && d2 <= 10626 || 10627 === d2 || 10628 === d2 || 10629 === d2 || 10630 === d2 || 10631 === d2 || 10632 === d2 || 10633 === d2 || 10634 === d2 || 10635 === d2 || 10636 === d2 || 10637 === d2 || 10638 === d2 || 10639 === d2 || 10640 === d2 || 10641 === d2 || 10642 === d2 || 10643 === d2 || 10644 === d2 || 10645 === d2 || 10646 === d2 || 10647 === d2 || 10648 === d2 || d2 >= 10649 && d2 <= 10711 || 10712 === d2 || 10713 === d2 || 10714 === d2 || 10715 === d2 || d2 >= 10716 && d2 <= 10747 || 10748 === d2 || 10749 === d2 || d2 >= 10750 && d2 <= 11007 || d2 >= 11008 && d2 <= 11055 || d2 >= 11056 && d2 <= 11076 || d2 >= 11077 && d2 <= 11078 || d2 >= 11079 && d2 <= 11084 || d2 >= 11085 && d2 <= 11123 || d2 >= 11124 && d2 <= 11125 || d2 >= 11126 && d2 <= 11157 || 11158 === d2 || d2 >= 11159 && d2 <= 11263 || d2 >= 11776 && d2 <= 11777 || 11778 === d2 || 11779 === d2 || 11780 === d2 || 11781 === d2 || d2 >= 11782 && d2 <= 11784 || 11785 === d2 || 11786 === d2 || 11787 === d2 || 11788 === d2 || 11789 === d2 || d2 >= 11790 && d2 <= 11798 || 11799 === d2 || d2 >= 11800 && d2 <= 11801 || 11802 === d2 || 11803 === d2 || 11804 === d2 || 11805 === d2 || d2 >= 11806 && d2 <= 11807 || 11808 === d2 || 11809 === d2 || 11810 === d2 || 11811 === d2 || 11812 === d2 || 11813 === d2 || 11814 === d2 || 11815 === d2 || 11816 === d2 || 11817 === d2 || d2 >= 11818 && d2 <= 11822 || 11823 === d2 || d2 >= 11824 && d2 <= 11833 || d2 >= 11834 && d2 <= 11835 || d2 >= 11836 && d2 <= 11839 || 11840 === d2 || 11841 === d2 || 11842 === d2 || d2 >= 11843 && d2 <= 11855 || d2 >= 11856 && d2 <= 11857 || 11858 === d2 || d2 >= 11859 && d2 <= 11903 || d2 >= 12289 && d2 <= 12291 || 12296 === d2 || 12297 === d2 || 12298 === d2 || 12299 === d2 || 12300 === d2 || 12301 === d2 || 12302 === d2 || 12303 === d2 || 12304 === d2 || 12305 === d2 || d2 >= 12306 && d2 <= 12307 || 12308 === d2 || 12309 === d2 || 12310 === d2 || 12311 === d2 || 12312 === d2 || 12313 === d2 || 12314 === d2 || 12315 === d2 || 12316 === d2 || 12317 === d2 || d2 >= 12318 && d2 <= 12319 || 12320 === d2 || 12336 === d2 || 64830 === d2 || 64831 === d2 || d2 >= 65093 && d2 <= 65094) break;
          c2.push(e2), b2 += e2 >= 65536 ? 2 : 1;
        }
        return S.apply(void 0, c2);
      };
      var Z = function() {
        function a2(a3, b2) {
          void 0 === b2 && (b2 = {}), this.message = a3, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!b2.ignoreTag, this.locale = b2.locale, this.requiresOtherClause = !!b2.requiresOtherClause, this.shouldParseSkeletons = !!b2.shouldParseSkeletons;
        }
        return a2.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", false);
        }, a2.prototype.parseMessage = function(a3, b2, c2) {
          for (var f2 = []; !this.isEOF(); ) {
            var g2 = this.char();
            if (123 === g2) {
              var h2 = this.parseArgument(a3, c2);
              if (h2.err) return h2;
              f2.push(h2.val);
            } else if (125 === g2 && a3 > 0) break;
            else if (35 === g2 && ("plural" === b2 || "selectordinal" === b2)) {
              var i2 = this.clonePosition();
              this.bump(), f2.push({ type: e.pound, location: I(i2, this.clonePosition()) });
            } else if (60 !== g2 || this.ignoreTag || 47 !== this.peek()) if (60 === g2 && !this.ignoreTag && $(this.peek() || 0)) {
              var h2 = this.parseTag(a3, b2);
              if (h2.err) return h2;
              f2.push(h2.val);
            } else {
              var h2 = this.parseLiteral(a3, b2);
              if (h2.err) return h2;
              f2.push(h2.val);
            }
            else if (!c2) return this.error(d.UNMATCHED_CLOSING_TAG, I(this.clonePosition(), this.clonePosition()));
            else break;
          }
          return { val: f2, err: null };
        }, a2.prototype.parseTag = function(a3, b2) {
          var c2 = this.clonePosition();
          this.bump();
          var f2 = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return { val: { type: e.literal, value: "<".concat(f2, "/>"), location: I(c2, this.clonePosition()) }, err: null };
          if (!this.bumpIf(">")) return this.error(d.INVALID_TAG, I(c2, this.clonePosition()));
          var g2 = this.parseMessage(a3 + 1, b2, true);
          if (g2.err) return g2;
          var h2 = g2.val, i2 = this.clonePosition();
          if (!this.bumpIf("</")) return this.error(d.UNCLOSED_TAG, I(c2, this.clonePosition()));
          if (this.isEOF() || !$(this.char())) return this.error(d.INVALID_TAG, I(i2, this.clonePosition()));
          var j2 = this.clonePosition();
          return f2 !== this.parseTagName() ? this.error(d.UNMATCHED_CLOSING_TAG, I(j2, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? { val: { type: e.tag, value: f2, children: h2, location: I(c2, this.clonePosition()) }, err: null } : this.error(d.INVALID_TAG, I(i2, this.clonePosition()));
        }, a2.prototype.parseTagName = function() {
          var a3, b2 = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (a3 = this.char()) || 46 === a3 || a3 >= 48 && a3 <= 57 || 95 === a3 || a3 >= 97 && a3 <= 122 || a3 >= 65 && a3 <= 90 || 183 == a3 || a3 >= 192 && a3 <= 214 || a3 >= 216 && a3 <= 246 || a3 >= 248 && a3 <= 893 || a3 >= 895 && a3 <= 8191 || a3 >= 8204 && a3 <= 8205 || a3 >= 8255 && a3 <= 8256 || a3 >= 8304 && a3 <= 8591 || a3 >= 11264 && a3 <= 12271 || a3 >= 12289 && a3 <= 55295 || a3 >= 63744 && a3 <= 64975 || a3 >= 65008 && a3 <= 65533 || a3 >= 65536 && a3 <= 983039); ) this.bump();
          return this.message.slice(b2, this.offset());
        }, a2.prototype.parseLiteral = function(a3, b2) {
          for (var c2 = this.clonePosition(), d2 = ""; ; ) {
            var f2 = this.tryParseQuote(b2);
            if (f2) {
              d2 += f2;
              continue;
            }
            var g2 = this.tryParseUnquoted(a3, b2);
            if (g2) {
              d2 += g2;
              continue;
            }
            var h2 = this.tryParseLeftAngleBracket();
            if (h2) {
              d2 += h2;
              continue;
            }
            break;
          }
          var i2 = I(c2, this.clonePosition());
          return { val: { type: e.literal, value: d2, location: i2 }, err: null };
        }, a2.prototype.tryParseLeftAngleBracket = function() {
          var a3;
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && ($(a3 = this.peek() || 0) || 47 === a3) ? null : (this.bump(), "<");
        }, a2.prototype.tryParseQuote = function(a3) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === a3 || "selectordinal" === a3) break;
              return null;
            default:
              return null;
          }
          this.bump();
          var b2 = [this.char()];
          for (this.bump(); !this.isEOF(); ) {
            var c2 = this.char();
            if (39 === c2) if (39 === this.peek()) b2.push(39), this.bump();
            else {
              this.bump();
              break;
            }
            else b2.push(c2);
            this.bump();
          }
          return S.apply(void 0, b2);
        }, a2.prototype.tryParseUnquoted = function(a3, b2) {
          if (this.isEOF()) return null;
          var c2 = this.char();
          return 60 === c2 || 123 === c2 || 35 === c2 && ("plural" === b2 || "selectordinal" === b2) || 125 === c2 && a3 > 0 ? null : (this.bump(), S(c2));
        }, a2.prototype.parseArgument = function(a3, b2) {
          var c2 = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE, I(c2, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(d.EMPTY_ARGUMENT, I(c2, this.clonePosition()));
          var f2 = this.parseIdentifierIfPossible().value;
          if (!f2) return this.error(d.MALFORMED_ARGUMENT, I(c2, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE, I(c2, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), { val: { type: e.argument, value: f2, location: I(c2, this.clonePosition()) }, err: null };
            case 44:
              if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE, I(c2, this.clonePosition()));
              return this.parseArgumentOptions(a3, b2, f2, c2);
            default:
              return this.error(d.MALFORMED_ARGUMENT, I(c2, this.clonePosition()));
          }
        }, a2.prototype.parseIdentifierIfPossible = function() {
          var a3 = this.clonePosition(), b2 = this.offset(), c2 = h(this.message, b2), d2 = b2 + c2.length;
          return this.bumpTo(d2), { value: c2, location: I(a3, this.clonePosition()) };
        }, a2.prototype.parseArgumentOptions = function(a3, b2, c2, g2) {
          var h2, i2 = this.clonePosition(), j2 = this.parseIdentifierIfPossible().value, l2 = this.clonePosition();
          switch (j2) {
            case "":
              return this.error(d.EXPECT_ARGUMENT_TYPE, I(i2, l2));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var m2 = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var n2 = this.clonePosition(), o2 = this.parseSimpleArgStyleIfPossible();
                if (o2.err) return o2;
                var p2 = W(o2.val);
                if (0 === p2.length) return this.error(d.EXPECT_ARGUMENT_STYLE, I(this.clonePosition(), this.clonePosition()));
                m2 = { style: p2, styleLocation: I(n2, this.clonePosition()) };
              }
              var q2 = this.tryParseArgumentClose(g2);
              if (q2.err) return q2;
              var r2 = I(g2, this.clonePosition());
              if (m2 && R(null == m2 ? void 0 : m2.style, "::", 0)) {
                var s2 = V(m2.style.slice(2));
                if ("number" === j2) {
                  var o2 = this.parseNumberSkeletonFromString(s2, m2.styleLocation);
                  if (o2.err) return o2;
                  return { val: { type: e.number, value: c2, location: r2, style: o2.val }, err: null };
                }
                if (0 === s2.length) return this.error(d.EXPECT_DATE_TIME_SKELETON, r2);
                var t2, u2 = s2;
                this.locale && (u2 = function(a4, b3) {
                  for (var c3 = "", d2 = 0; d2 < a4.length; d2++) {
                    var e2 = a4.charAt(d2);
                    if ("j" === e2) {
                      for (var f2 = 0; d2 + 1 < a4.length && a4.charAt(d2 + 1) === e2; ) f2++, d2++;
                      var g3 = 1 + (1 & f2), h3 = f2 < 2 ? 1 : 3 + (f2 >> 1), i3 = function(a5) {
                        var b4, c4 = a5.hourCycle;
                        if (void 0 === c4 && a5.hourCycles && a5.hourCycles.length && (c4 = a5.hourCycles[0]), c4) switch (c4) {
                          case "h24":
                            return "k";
                          case "h23":
                            return "H";
                          case "h12":
                            return "h";
                          case "h11":
                            return "K";
                          default:
                            throw Error("Invalid hourCycle");
                        }
                        var d3 = a5.language;
                        return "root" !== d3 && (b4 = a5.maximize().region), (F[b4 || ""] || F[d3 || ""] || F["".concat(d3, "-001")] || F["001"])[0];
                      }(b3);
                      for (("H" == i3 || "k" == i3) && (h3 = 0); h3-- > 0; ) c3 += "a";
                      for (; g3-- > 0; ) c3 = i3 + c3;
                    } else "J" === e2 ? c3 += "H" : c3 += e2;
                  }
                  return c3;
                }(s2, this.locale));
                var p2 = { type: f.dateTime, pattern: u2, location: m2.styleLocation, parsedOptions: this.shouldParseSkeletons ? (t2 = {}, u2.replace(w, function(a4) {
                  var b3 = a4.length;
                  switch (a4[0]) {
                    case "G":
                      t2.era = 4 === b3 ? "long" : 5 === b3 ? "narrow" : "short";
                      break;
                    case "y":
                      t2.year = 2 === b3 ? "2-digit" : "numeric";
                      break;
                    case "Y":
                    case "u":
                    case "U":
                    case "r":
                      throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                    case "q":
                    case "Q":
                      throw RangeError("`q/Q` (quarter) patterns are not supported");
                    case "M":
                    case "L":
                      t2.month = ["numeric", "2-digit", "short", "long", "narrow"][b3 - 1];
                      break;
                    case "w":
                    case "W":
                      throw RangeError("`w/W` (week) patterns are not supported");
                    case "d":
                      t2.day = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "D":
                    case "F":
                    case "g":
                      throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                    case "E":
                      t2.weekday = 4 === b3 ? "long" : 5 === b3 ? "narrow" : "short";
                      break;
                    case "e":
                      if (b3 < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                      t2.weekday = ["short", "long", "narrow", "short"][b3 - 4];
                      break;
                    case "c":
                      if (b3 < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                      t2.weekday = ["short", "long", "narrow", "short"][b3 - 4];
                      break;
                    case "a":
                      t2.hour12 = true;
                      break;
                    case "b":
                    case "B":
                      throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                    case "h":
                      t2.hourCycle = "h12", t2.hour = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "H":
                      t2.hourCycle = "h23", t2.hour = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "K":
                      t2.hourCycle = "h11", t2.hour = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "k":
                      t2.hourCycle = "h24", t2.hour = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "j":
                    case "J":
                    case "C":
                      throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                    case "m":
                      t2.minute = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "s":
                      t2.second = ["numeric", "2-digit"][b3 - 1];
                      break;
                    case "S":
                    case "A":
                      throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                    case "z":
                      t2.timeZoneName = b3 < 4 ? "short" : "long";
                      break;
                    case "Z":
                    case "O":
                    case "v":
                    case "V":
                    case "X":
                    case "x":
                      throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
                  }
                  return "";
                }), t2) : {} };
                return { val: { type: "date" === j2 ? e.date : e.time, value: c2, location: r2, style: p2 }, err: null };
              }
              return { val: { type: "number" === j2 ? e.number : "date" === j2 ? e.date : e.time, value: c2, location: r2, style: null != (h2 = null == m2 ? void 0 : m2.style) ? h2 : null }, err: null };
            case "plural":
            case "selectordinal":
            case "select":
              var v2 = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(d.EXPECT_SELECT_ARGUMENT_OPTIONS, I(v2, (0, k.Cl)({}, v2)));
              this.bumpSpace();
              var x2 = this.parseIdentifierIfPossible(), y2 = 0;
              if ("select" !== j2 && "offset" === x2.value) {
                if (!this.bumpIf(":")) return this.error(d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                var o2 = this.tryParseDecimalInteger(d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, d.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                if (o2.err) return o2;
                this.bumpSpace(), x2 = this.parseIdentifierIfPossible(), y2 = o2.val;
              }
              var z2 = this.tryParsePluralOrSelectOptions(a3, j2, b2, x2);
              if (z2.err) return z2;
              var q2 = this.tryParseArgumentClose(g2);
              if (q2.err) return q2;
              var A2 = I(g2, this.clonePosition());
              if ("select" === j2) return { val: { type: e.select, value: c2, options: T(z2.val), location: A2 }, err: null };
              return { val: { type: e.plural, value: c2, options: T(z2.val), offset: y2, pluralType: "plural" === j2 ? "cardinal" : "ordinal", location: A2 }, err: null };
            default:
              return this.error(d.INVALID_ARGUMENT_TYPE, I(i2, l2));
          }
        }, a2.prototype.tryParseArgumentClose = function(a3) {
          return this.isEOF() || 125 !== this.char() ? this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE, I(a3, this.clonePosition())) : (this.bump(), { val: true, err: null });
        }, a2.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var a3 = 0, b2 = this.clonePosition(); !this.isEOF(); ) switch (this.char()) {
            case 39:
              this.bump();
              var c2 = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(d.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, I(c2, this.clonePosition()));
              this.bump();
              break;
            case 123:
              a3 += 1, this.bump();
              break;
            case 125:
              if (!(a3 > 0)) return { val: this.message.slice(b2.offset, this.offset()), err: null };
              a3 -= 1;
              break;
            default:
              this.bump();
          }
          return { val: this.message.slice(b2.offset, this.offset()), err: null };
        }, a2.prototype.parseNumberSkeletonFromString = function(a3, b2) {
          var c2 = [];
          try {
            c2 = function(a4) {
              if (0 === a4.length) throw Error("Number skeleton cannot be empty");
              for (var b3 = a4.split(x).filter(function(a5) {
                return a5.length > 0;
              }), c3 = [], d2 = 0; d2 < b3.length; d2++) {
                var e2 = b3[d2].split("/");
                if (0 === e2.length) throw Error("Invalid number skeleton");
                for (var f2 = e2[0], g2 = e2.slice(1), h2 = 0; h2 < g2.length; h2++) if (0 === g2[h2].length) throw Error("Invalid number skeleton");
                c3.push({ stem: f2, options: g2 });
              }
              return c3;
            }(a3);
          } catch (a4) {
            return this.error(d.INVALID_NUMBER_SKELETON, b2);
          }
          return { val: { type: f.number, tokens: c2, location: b2, parsedOptions: this.shouldParseSkeletons ? function(a4) {
            for (var b3 = {}, c3 = 0; c3 < a4.length; c3++) {
              var d2 = a4[c3];
              switch (d2.stem) {
                case "percent":
                case "%":
                  b3.style = "percent";
                  continue;
                case "%x100":
                  b3.style = "percent", b3.scale = 100;
                  continue;
                case "currency":
                  b3.style = "currency", b3.currency = d2.options[0];
                  continue;
                case "group-off":
                case ",_":
                  b3.useGrouping = false;
                  continue;
                case "precision-integer":
                case ".":
                  b3.maximumFractionDigits = 0;
                  continue;
                case "measure-unit":
                case "unit":
                  b3.style = "unit", b3.unit = d2.options[0].replace(/^(.*?)-/, "");
                  continue;
                case "compact-short":
                case "K":
                  b3.notation = "compact", b3.compactDisplay = "short";
                  continue;
                case "compact-long":
                case "KK":
                  b3.notation = "compact", b3.compactDisplay = "long";
                  continue;
                case "scientific":
                  b3 = (0, k.Cl)((0, k.Cl)((0, k.Cl)({}, b3), { notation: "scientific" }), d2.options.reduce(function(a5, b4) {
                    return (0, k.Cl)((0, k.Cl)({}, a5), E(b4));
                  }, {}));
                  continue;
                case "engineering":
                  b3 = (0, k.Cl)((0, k.Cl)((0, k.Cl)({}, b3), { notation: "engineering" }), d2.options.reduce(function(a5, b4) {
                    return (0, k.Cl)((0, k.Cl)({}, a5), E(b4));
                  }, {}));
                  continue;
                case "notation-simple":
                  b3.notation = "standard";
                  continue;
                case "unit-width-narrow":
                  b3.currencyDisplay = "narrowSymbol", b3.unitDisplay = "narrow";
                  continue;
                case "unit-width-short":
                  b3.currencyDisplay = "code", b3.unitDisplay = "short";
                  continue;
                case "unit-width-full-name":
                  b3.currencyDisplay = "name", b3.unitDisplay = "long";
                  continue;
                case "unit-width-iso-code":
                  b3.currencyDisplay = "symbol";
                  continue;
                case "scale":
                  b3.scale = parseFloat(d2.options[0]);
                  continue;
                case "rounding-mode-floor":
                  b3.roundingMode = "floor";
                  continue;
                case "rounding-mode-ceiling":
                  b3.roundingMode = "ceil";
                  continue;
                case "rounding-mode-down":
                  b3.roundingMode = "trunc";
                  continue;
                case "rounding-mode-up":
                  b3.roundingMode = "expand";
                  continue;
                case "rounding-mode-half-even":
                  b3.roundingMode = "halfEven";
                  continue;
                case "rounding-mode-half-down":
                  b3.roundingMode = "halfTrunc";
                  continue;
                case "rounding-mode-half-up":
                  b3.roundingMode = "halfExpand";
                  continue;
                case "integer-width":
                  if (d2.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                  d2.options[0].replace(A, function(a5, c4, d3, e3, f3, g3) {
                    if (c4) b3.minimumIntegerDigits = d3.length;
                    else if (e3 && f3) throw Error("We currently do not support maximum integer digits");
                    else if (g3) throw Error("We currently do not support exact integer digits");
                    return "";
                  });
                  continue;
              }
              if (B.test(d2.stem)) {
                b3.minimumIntegerDigits = d2.stem.length;
                continue;
              }
              if (y.test(d2.stem)) {
                if (d2.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                d2.stem.replace(y, function(a5, c4, d3, e3, f3, g3) {
                  return "*" === d3 ? b3.minimumFractionDigits = c4.length : e3 && "#" === e3[0] ? b3.maximumFractionDigits = e3.length : f3 && g3 ? (b3.minimumFractionDigits = f3.length, b3.maximumFractionDigits = f3.length + g3.length) : (b3.minimumFractionDigits = c4.length, b3.maximumFractionDigits = c4.length), "";
                });
                var e2 = d2.options[0];
                "w" === e2 ? b3 = (0, k.Cl)((0, k.Cl)({}, b3), { trailingZeroDisplay: "stripIfInteger" }) : e2 && (b3 = (0, k.Cl)((0, k.Cl)({}, b3), C(e2)));
                continue;
              }
              if (z.test(d2.stem)) {
                b3 = (0, k.Cl)((0, k.Cl)({}, b3), C(d2.stem));
                continue;
              }
              var f2 = D(d2.stem);
              f2 && (b3 = (0, k.Cl)((0, k.Cl)({}, b3), f2));
              var g2 = function(a5) {
                var b4;
                if ("E" === a5[0] && "E" === a5[1] ? (b4 = { notation: "engineering" }, a5 = a5.slice(2)) : "E" === a5[0] && (b4 = { notation: "scientific" }, a5 = a5.slice(1)), b4) {
                  var c4 = a5.slice(0, 2);
                  if ("+!" === c4 ? (b4.signDisplay = "always", a5 = a5.slice(2)) : "+?" === c4 && (b4.signDisplay = "exceptZero", a5 = a5.slice(2)), !B.test(a5)) throw Error("Malformed concise eng/scientific notation");
                  b4.minimumIntegerDigits = a5.length;
                }
                return b4;
              }(d2.stem);
              g2 && (b3 = (0, k.Cl)((0, k.Cl)({}, b3), g2));
            }
            return b3;
          }(c2) : {} }, err: null };
        }, a2.prototype.tryParsePluralOrSelectOptions = function(a3, b2, c2, e2) {
          for (var f2, g2 = false, h2 = [], i2 = /* @__PURE__ */ new Set(), j2 = e2.value, k2 = e2.location; ; ) {
            if (0 === j2.length) {
              var l2 = this.clonePosition();
              if ("select" !== b2 && this.bumpIf("=")) {
                var m2 = this.tryParseDecimalInteger(d.EXPECT_PLURAL_ARGUMENT_SELECTOR, d.INVALID_PLURAL_ARGUMENT_SELECTOR);
                if (m2.err) return m2;
                k2 = I(l2, this.clonePosition()), j2 = this.message.slice(l2.offset, this.offset());
              } else break;
            }
            if (i2.has(j2)) return this.error("select" === b2 ? d.DUPLICATE_SELECT_ARGUMENT_SELECTOR : d.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, k2);
            "other" === j2 && (g2 = true), this.bumpSpace();
            var n2 = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === b2 ? d.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : d.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, I(this.clonePosition(), this.clonePosition()));
            var o2 = this.parseMessage(a3 + 1, b2, c2);
            if (o2.err) return o2;
            var p2 = this.tryParseArgumentClose(n2);
            if (p2.err) return p2;
            h2.push([j2, { value: o2.val, location: I(n2, this.clonePosition()) }]), i2.add(j2), this.bumpSpace(), j2 = (f2 = this.parseIdentifierIfPossible()).value, k2 = f2.location;
          }
          return 0 === h2.length ? this.error("select" === b2 ? d.EXPECT_SELECT_ARGUMENT_SELECTOR : d.EXPECT_PLURAL_ARGUMENT_SELECTOR, I(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !g2 ? this.error(d.MISSING_OTHER_CLAUSE, I(this.clonePosition(), this.clonePosition())) : { val: h2, err: null };
        }, a2.prototype.tryParseDecimalInteger = function(a3, b2) {
          var c2 = 1, d2 = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (c2 = -1);
          for (var e2 = false, f2 = 0; !this.isEOF(); ) {
            var g2 = this.char();
            if (g2 >= 48 && g2 <= 57) e2 = true, f2 = 10 * f2 + (g2 - 48), this.bump();
            else break;
          }
          var h2 = I(d2, this.clonePosition());
          return e2 ? P(f2 *= c2) ? { val: f2, err: null } : this.error(b2, h2) : this.error(a3, h2);
        }, a2.prototype.offset = function() {
          return this.position.offset;
        }, a2.prototype.isEOF = function() {
          return this.offset() === this.message.length;
        }, a2.prototype.clonePosition = function() {
          return { offset: this.position.offset, line: this.position.line, column: this.position.column };
        }, a2.prototype.char = function() {
          var a3 = this.position.offset;
          if (a3 >= this.message.length) throw Error("out of bound");
          var b2 = U(this.message, a3);
          if (void 0 === b2) throw Error("Offset ".concat(a3, " is at invalid UTF-16 code unit boundary"));
          return b2;
        }, a2.prototype.error = function(a3, b2) {
          return { val: null, err: { kind: a3, message: this.message, location: b2 } };
        }, a2.prototype.bump = function() {
          if (!this.isEOF()) {
            var a3 = this.char();
            10 === a3 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += a3 < 65536 ? 1 : 2);
          }
        }, a2.prototype.bumpIf = function(a3) {
          if (R(this.message, a3, this.offset())) {
            for (var b2 = 0; b2 < a3.length; b2++) this.bump();
            return true;
          }
          return false;
        }, a2.prototype.bumpUntil = function(a3) {
          var b2 = this.offset(), c2 = this.message.indexOf(a3, b2);
          return c2 >= 0 ? (this.bumpTo(c2), true) : (this.bumpTo(this.message.length), false);
        }, a2.prototype.bumpTo = function(a3) {
          if (this.offset() > a3) throw Error("targetOffset ".concat(a3, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (a3 = Math.min(a3, this.message.length); ; ) {
            var b2 = this.offset();
            if (b2 === a3) break;
            if (b2 > a3) throw Error("targetOffset ".concat(a3, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break;
          }
        }, a2.prototype.bumpSpace = function() {
          for (; !this.isEOF() && _(this.char()); ) this.bump();
        }, a2.prototype.peek = function() {
          if (this.isEOF()) return null;
          var a3 = this.char(), b2 = this.offset(), c2 = this.message.charCodeAt(b2 + (a3 >= 65536 ? 2 : 1));
          return null != c2 ? c2 : null;
        }, a2;
      }();
      function $(a2) {
        return a2 >= 97 && a2 <= 122 || a2 >= 65 && a2 <= 90;
      }
      function _(a2) {
        return a2 >= 9 && a2 <= 13 || 32 === a2 || 133 === a2 || a2 >= 8206 && a2 <= 8207 || 8232 === a2 || 8233 === a2;
      }
      function aa(a2, b2) {
        void 0 === b2 && (b2 = {});
        var c2 = new Z(a2, b2 = (0, k.Cl)({ shouldParseSkeletons: true, requiresOtherClause: true }, b2)).parse();
        if (c2.err) {
          var e2 = SyntaxError(d[c2.err.kind]);
          throw e2.location = c2.err.location, e2.originalMessage = c2.err.message, e2;
        }
        return (null == b2 ? void 0 : b2.captureLocation) || function a3(b3) {
          b3.forEach(function(b4) {
            if (delete b4.location, q(b4) || r(b4)) for (var c3 in b4.options) delete b4.options[c3].location, a3(b4.options[c3].value);
            else n(b4) && t(b4.style) || (o(b4) || p(b4)) && u(b4.style) ? delete b4.style.location : s(b4) && a3(b4.children);
          });
        }(c2.val), c2.val;
      }
      !function(a2) {
        a2.MISSING_VALUE = "MISSING_VALUE", a2.INVALID_VALUE = "INVALID_VALUE", a2.MISSING_INTL_API = "MISSING_INTL_API";
      }(i || (i = {}));
      var ab = function(a2) {
        function b2(b3, c2, d2) {
          var e2 = a2.call(this, b3) || this;
          return e2.code = c2, e2.originalMessage = d2, e2;
        }
        return (0, k.C6)(b2, a2), b2.prototype.toString = function() {
          return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
        }, b2;
      }(Error), ac = function(a2) {
        function b2(b3, c2, d2, e2) {
          return a2.call(this, 'Invalid values for "'.concat(b3, '": "').concat(c2, '". Options are "').concat(Object.keys(d2).join('", "'), '"'), i.INVALID_VALUE, e2) || this;
        }
        return (0, k.C6)(b2, a2), b2;
      }(ab), ad = function(a2) {
        function b2(b3, c2, d2) {
          return a2.call(this, 'Value for "'.concat(b3, '" must be of type ').concat(c2), i.INVALID_VALUE, d2) || this;
        }
        return (0, k.C6)(b2, a2), b2;
      }(ab), ae = function(a2) {
        function b2(b3, c2) {
          return a2.call(this, 'The intl string context variable "'.concat(b3, '" was not provided to the string "').concat(c2, '"'), i.MISSING_VALUE, c2) || this;
        }
        return (0, k.C6)(b2, a2), b2;
      }(ab);
      function af(a2) {
        return "function" == typeof a2;
      }
      function ag(a2, b2, c2, d2, f2, g2, h2) {
        if (1 === a2.length && m(a2[0])) return [{ type: j.literal, value: a2[0].value }];
        for (var k2 = [], l2 = 0; l2 < a2.length; l2++) {
          var v2 = a2[l2];
          if (m(v2)) {
            k2.push({ type: j.literal, value: v2.value });
            continue;
          }
          if (v2.type === e.pound) {
            "number" == typeof g2 && k2.push({ type: j.literal, value: c2.getNumberFormat(b2).format(g2) });
            continue;
          }
          var w2 = v2.value;
          if (!(f2 && w2 in f2)) throw new ae(w2, h2);
          var x2 = f2[w2];
          if (v2.type === e.argument) {
            x2 && "string" != typeof x2 && "number" != typeof x2 || (x2 = "string" == typeof x2 || "number" == typeof x2 ? String(x2) : ""), k2.push({ type: "string" == typeof x2 ? j.literal : j.object, value: x2 });
            continue;
          }
          if (o(v2)) {
            var y2 = "string" == typeof v2.style ? d2.date[v2.style] : u(v2.style) ? v2.style.parsedOptions : void 0;
            k2.push({ type: j.literal, value: c2.getDateTimeFormat(b2, y2).format(x2) });
            continue;
          }
          if (p(v2)) {
            var y2 = "string" == typeof v2.style ? d2.time[v2.style] : u(v2.style) ? v2.style.parsedOptions : d2.time.medium;
            k2.push({ type: j.literal, value: c2.getDateTimeFormat(b2, y2).format(x2) });
            continue;
          }
          if (n(v2)) {
            var y2 = "string" == typeof v2.style ? d2.number[v2.style] : t(v2.style) ? v2.style.parsedOptions : void 0;
            y2 && y2.scale && (x2 *= y2.scale || 1), k2.push({ type: j.literal, value: c2.getNumberFormat(b2, y2).format(x2) });
            continue;
          }
          if (s(v2)) {
            var z2 = v2.children, A2 = v2.value, B2 = f2[A2];
            if (!af(B2)) throw new ad(A2, "function", h2);
            var C2 = B2(ag(z2, b2, c2, d2, f2, g2).map(function(a3) {
              return a3.value;
            }));
            Array.isArray(C2) || (C2 = [C2]), k2.push.apply(k2, C2.map(function(a3) {
              return { type: "string" == typeof a3 ? j.literal : j.object, value: a3 };
            }));
          }
          if (q(v2)) {
            var D2 = v2.options[x2] || v2.options.other;
            if (!D2) throw new ac(v2.value, x2, Object.keys(v2.options), h2);
            k2.push.apply(k2, ag(D2.value, b2, c2, d2, f2));
            continue;
          }
          if (r(v2)) {
            var D2 = v2.options["=".concat(x2)];
            if (!D2) {
              if (!Intl.PluralRules) throw new ab('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', i.MISSING_INTL_API, h2);
              var E2 = c2.getPluralRules(b2, { type: v2.pluralType }).select(x2 - (v2.offset || 0));
              D2 = v2.options[E2] || v2.options.other;
            }
            if (!D2) throw new ac(v2.value, x2, Object.keys(v2.options), h2);
            k2.push.apply(k2, ag(D2.value, b2, c2, d2, f2, x2 - (v2.offset || 0)));
            continue;
          }
        }
        return k2.length < 2 ? k2 : k2.reduce(function(a3, b3) {
          var c3 = a3[a3.length - 1];
          return c3 && c3.type === j.literal && b3.type === j.literal ? c3.value += b3.value : a3.push(b3), a3;
        }, []);
      }
      function ah(a2) {
        return { create: function() {
          return { get: function(b2) {
            return a2[b2];
          }, set: function(b2, c2) {
            a2[b2] = c2;
          } };
        } };
      }
      !function(a2) {
        a2[a2.literal = 0] = "literal", a2[a2.object = 1] = "object";
      }(j || (j = {}));
      var ai = function() {
        function a2(b2, c2, d2, e2) {
          void 0 === c2 && (c2 = a2.defaultLocale);
          var f2, g2, h2 = this;
          if (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }, this.format = function(a3) {
            var b3 = h2.formatToParts(a3);
            if (1 === b3.length) return b3[0].value;
            var c3 = b3.reduce(function(a4, b4) {
              return a4.length && b4.type === j.literal && "string" == typeof a4[a4.length - 1] ? a4[a4.length - 1] += b4.value : a4.push(b4.value), a4;
            }, []);
            return c3.length <= 1 ? c3[0] || "" : c3;
          }, this.formatToParts = function(a3) {
            return ag(h2.ast, h2.locales, h2.formatters, h2.formats, a3, void 0, h2.message);
          }, this.resolvedOptions = function() {
            var a3;
            return { locale: (null == (a3 = h2.resolvedLocale) ? void 0 : a3.toString()) || Intl.NumberFormat.supportedLocalesOf(h2.locales)[0] };
          }, this.getAst = function() {
            return h2.ast;
          }, this.locales = c2, this.resolvedLocale = a2.resolveLocale(c2), "string" == typeof b2) {
            if (this.message = b2, !a2.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var i2 = e2 || {}, m2 = (i2.formatters, (0, k.Tt)(i2, ["formatters"]));
            this.ast = a2.__parse(b2, (0, k.Cl)((0, k.Cl)({}, m2), { locale: this.resolvedLocale }));
          } else this.ast = b2;
          if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
          this.formats = (f2 = a2.formats, d2 ? Object.keys(f2).reduce(function(a3, b3) {
            var c3, e3;
            return a3[b3] = (c3 = f2[b3], (e3 = d2[b3]) ? (0, k.Cl)((0, k.Cl)((0, k.Cl)({}, c3 || {}), e3 || {}), Object.keys(c3).reduce(function(a4, b4) {
              return a4[b4] = (0, k.Cl)((0, k.Cl)({}, c3[b4]), e3[b4] || {}), a4;
            }, {})) : c3), a3;
          }, (0, k.Cl)({}, f2)) : f2), this.formatters = e2 && e2.formatters || (void 0 === (g2 = this.formatterCache) && (g2 = { number: {}, dateTime: {}, pluralRules: {} }), { getNumberFormat: (0, l.memoize)(function() {
            for (var a3, b3 = [], c3 = 0; c3 < arguments.length; c3++) b3[c3] = arguments[c3];
            return new ((a3 = Intl.NumberFormat).bind.apply(a3, (0, k.fX)([void 0], b3, false)))();
          }, { cache: ah(g2.number), strategy: l.strategies.variadic }), getDateTimeFormat: (0, l.memoize)(function() {
            for (var a3, b3 = [], c3 = 0; c3 < arguments.length; c3++) b3[c3] = arguments[c3];
            return new ((a3 = Intl.DateTimeFormat).bind.apply(a3, (0, k.fX)([void 0], b3, false)))();
          }, { cache: ah(g2.dateTime), strategy: l.strategies.variadic }), getPluralRules: (0, l.memoize)(function() {
            for (var a3, b3 = [], c3 = 0; c3 < arguments.length; c3++) b3[c3] = arguments[c3];
            return new ((a3 = Intl.PluralRules).bind.apply(a3, (0, k.fX)([void 0], b3, false)))();
          }, { cache: ah(g2.pluralRules), strategy: l.strategies.variadic }) });
        }
        return Object.defineProperty(a2, "defaultLocale", { get: function() {
          return a2.memoizedDefaultLocale || (a2.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), a2.memoizedDefaultLocale;
        }, enumerable: false, configurable: true }), a2.memoizedDefaultLocale = null, a2.resolveLocale = function(a3) {
          if (void 0 !== Intl.Locale) {
            var b2 = Intl.NumberFormat.supportedLocalesOf(a3);
            return new Intl.Locale(b2.length > 0 ? b2[0] : "string" == typeof a3 ? a3 : a3[0]);
          }
        }, a2.__parse = aa, a2.formats = { number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, a2;
      }();
      let aj = ai;
    }, 1128: (a, b, c) => {
      "use strict";
      c.d(b, { M1: () => e, FP: () => d });
      let d = (0, c(2058).xl)();
      function e(a2) {
        throw Object.defineProperty(Error(`\`${a2}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", { value: "E251", enumerable: false, configurable: true });
      }
    }, 1213: (a) => {
      (() => {
        "use strict";
        var b = { 993: (a2) => {
          var b2 = Object.prototype.hasOwnProperty, c2 = "~";
          function d2() {
          }
          function e2(a3, b3, c3) {
            this.fn = a3, this.context = b3, this.once = c3 || false;
          }
          function f(a3, b3, d3, f2, g2) {
            if ("function" != typeof d3) throw TypeError("The listener must be a function");
            var h2 = new e2(d3, f2 || a3, g2), i = c2 ? c2 + b3 : b3;
            return a3._events[i] ? a3._events[i].fn ? a3._events[i] = [a3._events[i], h2] : a3._events[i].push(h2) : (a3._events[i] = h2, a3._eventsCount++), a3;
          }
          function g(a3, b3) {
            0 == --a3._eventsCount ? a3._events = new d2() : delete a3._events[b3];
          }
          function h() {
            this._events = new d2(), this._eventsCount = 0;
          }
          Object.create && (d2.prototype = /* @__PURE__ */ Object.create(null), new d2().__proto__ || (c2 = false)), h.prototype.eventNames = function() {
            var a3, d3, e3 = [];
            if (0 === this._eventsCount) return e3;
            for (d3 in a3 = this._events) b2.call(a3, d3) && e3.push(c2 ? d3.slice(1) : d3);
            return Object.getOwnPropertySymbols ? e3.concat(Object.getOwnPropertySymbols(a3)) : e3;
          }, h.prototype.listeners = function(a3) {
            var b3 = c2 ? c2 + a3 : a3, d3 = this._events[b3];
            if (!d3) return [];
            if (d3.fn) return [d3.fn];
            for (var e3 = 0, f2 = d3.length, g2 = Array(f2); e3 < f2; e3++) g2[e3] = d3[e3].fn;
            return g2;
          }, h.prototype.listenerCount = function(a3) {
            var b3 = c2 ? c2 + a3 : a3, d3 = this._events[b3];
            return d3 ? d3.fn ? 1 : d3.length : 0;
          }, h.prototype.emit = function(a3, b3, d3, e3, f2, g2) {
            var h2 = c2 ? c2 + a3 : a3;
            if (!this._events[h2]) return false;
            var i, j, k = this._events[h2], l = arguments.length;
            if (k.fn) {
              switch (k.once && this.removeListener(a3, k.fn, void 0, true), l) {
                case 1:
                  return k.fn.call(k.context), true;
                case 2:
                  return k.fn.call(k.context, b3), true;
                case 3:
                  return k.fn.call(k.context, b3, d3), true;
                case 4:
                  return k.fn.call(k.context, b3, d3, e3), true;
                case 5:
                  return k.fn.call(k.context, b3, d3, e3, f2), true;
                case 6:
                  return k.fn.call(k.context, b3, d3, e3, f2, g2), true;
              }
              for (j = 1, i = Array(l - 1); j < l; j++) i[j - 1] = arguments[j];
              k.fn.apply(k.context, i);
            } else {
              var m, n = k.length;
              for (j = 0; j < n; j++) switch (k[j].once && this.removeListener(a3, k[j].fn, void 0, true), l) {
                case 1:
                  k[j].fn.call(k[j].context);
                  break;
                case 2:
                  k[j].fn.call(k[j].context, b3);
                  break;
                case 3:
                  k[j].fn.call(k[j].context, b3, d3);
                  break;
                case 4:
                  k[j].fn.call(k[j].context, b3, d3, e3);
                  break;
                default:
                  if (!i) for (m = 1, i = Array(l - 1); m < l; m++) i[m - 1] = arguments[m];
                  k[j].fn.apply(k[j].context, i);
              }
            }
            return true;
          }, h.prototype.on = function(a3, b3, c3) {
            return f(this, a3, b3, c3, false);
          }, h.prototype.once = function(a3, b3, c3) {
            return f(this, a3, b3, c3, true);
          }, h.prototype.removeListener = function(a3, b3, d3, e3) {
            var f2 = c2 ? c2 + a3 : a3;
            if (!this._events[f2]) return this;
            if (!b3) return g(this, f2), this;
            var h2 = this._events[f2];
            if (h2.fn) h2.fn !== b3 || e3 && !h2.once || d3 && h2.context !== d3 || g(this, f2);
            else {
              for (var i = 0, j = [], k = h2.length; i < k; i++) (h2[i].fn !== b3 || e3 && !h2[i].once || d3 && h2[i].context !== d3) && j.push(h2[i]);
              j.length ? this._events[f2] = 1 === j.length ? j[0] : j : g(this, f2);
            }
            return this;
          }, h.prototype.removeAllListeners = function(a3) {
            var b3;
            return a3 ? (b3 = c2 ? c2 + a3 : a3, this._events[b3] && g(this, b3)) : (this._events = new d2(), this._eventsCount = 0), this;
          }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = c2, h.EventEmitter = h, a2.exports = h;
        }, 213: (a2) => {
          a2.exports = (a3, b2) => (b2 = b2 || (() => {
          }), a3.then((a4) => new Promise((a5) => {
            a5(b2());
          }).then(() => a4), (a4) => new Promise((a5) => {
            a5(b2());
          }).then(() => {
            throw a4;
          })));
        }, 574: (a2, b2) => {
          Object.defineProperty(b2, "__esModule", { value: true }), b2.default = function(a3, b3, c2) {
            let d2 = 0, e2 = a3.length;
            for (; e2 > 0; ) {
              let f = e2 / 2 | 0, g = d2 + f;
              0 >= c2(a3[g], b3) ? (d2 = ++g, e2 -= f + 1) : e2 = f;
            }
            return d2;
          };
        }, 821: (a2, b2, c2) => {
          Object.defineProperty(b2, "__esModule", { value: true });
          let d2 = c2(574);
          class e2 {
            constructor() {
              this._queue = [];
            }
            enqueue(a3, b3) {
              let c3 = { priority: (b3 = Object.assign({ priority: 0 }, b3)).priority, run: a3 };
              if (this.size && this._queue[this.size - 1].priority >= b3.priority) return void this._queue.push(c3);
              let e3 = d2.default(this._queue, c3, (a4, b4) => b4.priority - a4.priority);
              this._queue.splice(e3, 0, c3);
            }
            dequeue() {
              let a3 = this._queue.shift();
              return null == a3 ? void 0 : a3.run;
            }
            filter(a3) {
              return this._queue.filter((b3) => b3.priority === a3.priority).map((a4) => a4.run);
            }
            get size() {
              return this._queue.length;
            }
          }
          b2.default = e2;
        }, 816: (a2, b2, c2) => {
          let d2 = c2(213);
          class e2 extends Error {
            constructor(a3) {
              super(a3), this.name = "TimeoutError";
            }
          }
          let f = (a3, b3, c3) => new Promise((f2, g) => {
            if ("number" != typeof b3 || b3 < 0) throw TypeError("Expected `milliseconds` to be a positive number");
            if (b3 === 1 / 0) return void f2(a3);
            let h = setTimeout(() => {
              if ("function" == typeof c3) {
                try {
                  f2(c3());
                } catch (a4) {
                  g(a4);
                }
                return;
              }
              let d3 = "string" == typeof c3 ? c3 : `Promise timed out after ${b3} milliseconds`, h2 = c3 instanceof Error ? c3 : new e2(d3);
              "function" == typeof a3.cancel && a3.cancel(), g(h2);
            }, b3);
            d2(a3.then(f2, g), () => {
              clearTimeout(h);
            });
          });
          a2.exports = f, a2.exports.default = f, a2.exports.TimeoutError = e2;
        } }, c = {};
        function d(a2) {
          var e2 = c[a2];
          if (void 0 !== e2) return e2.exports;
          var f = c[a2] = { exports: {} }, g = true;
          try {
            b[a2](f, f.exports, d), g = false;
          } finally {
            g && delete c[a2];
          }
          return f.exports;
        }
        d.ab = "//";
        var e = {};
        (() => {
          Object.defineProperty(e, "__esModule", { value: true });
          let a2 = d(993), b2 = d(816), c2 = d(821), f = () => {
          }, g = new b2.TimeoutError();
          class h extends a2 {
            constructor(a3) {
              var b3, d2, e2, g2;
              if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = f, this._resolveIdle = f, !("number" == typeof (a3 = Object.assign({ carryoverConcurrencyCount: false, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: true, queueClass: c2.default }, a3)).intervalCap && a3.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null != (d2 = null == (b3 = a3.intervalCap) ? void 0 : b3.toString()) ? d2 : ""}\` (${typeof a3.intervalCap})`);
              if (void 0 === a3.interval || !(Number.isFinite(a3.interval) && a3.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null != (g2 = null == (e2 = a3.interval) ? void 0 : e2.toString()) ? g2 : ""}\` (${typeof a3.interval})`);
              this._carryoverConcurrencyCount = a3.carryoverConcurrencyCount, this._isIntervalIgnored = a3.intervalCap === 1 / 0 || 0 === a3.interval, this._intervalCap = a3.intervalCap, this._interval = a3.interval, this._queue = new a3.queueClass(), this._queueClass = a3.queueClass, this.concurrency = a3.concurrency, this._timeout = a3.timeout, this._throwOnTimeout = true === a3.throwOnTimeout, this._isPaused = false === a3.autoStart;
            }
            get _doesIntervalAllowAnother() {
              return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
            }
            get _doesConcurrentAllowAnother() {
              return this._pendingCount < this._concurrency;
            }
            _next() {
              this._pendingCount--, this._tryToStartAnother(), this.emit("next");
            }
            _resolvePromises() {
              this._resolveEmpty(), this._resolveEmpty = f, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = f, this.emit("idle"));
            }
            _onResumeInterval() {
              this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
            }
            _isIntervalPaused() {
              let a3 = Date.now();
              if (void 0 === this._intervalId) {
                let b3 = this._intervalEnd - a3;
                if (!(b3 < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => {
                  this._onResumeInterval();
                }, b3)), true;
                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
              }
              return false;
            }
            _tryToStartAnother() {
              if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), false;
              if (!this._isPaused) {
                let a3 = !this._isIntervalPaused();
                if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                  let b3 = this._queue.dequeue();
                  return !!b3 && (this.emit("active"), b3(), a3 && this._initializeIntervalIfNeeded(), true);
                }
              }
              return false;
            }
            _initializeIntervalIfNeeded() {
              this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => {
                this._onInterval();
              }, this._interval), this._intervalEnd = Date.now() + this._interval);
            }
            _onInterval() {
              0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
            }
            _processQueue() {
              for (; this._tryToStartAnother(); ) ;
            }
            get concurrency() {
              return this._concurrency;
            }
            set concurrency(a3) {
              if (!("number" == typeof a3 && a3 >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${a3}\` (${typeof a3})`);
              this._concurrency = a3, this._processQueue();
            }
            async add(a3, c3 = {}) {
              return new Promise((d2, e2) => {
                let f2 = async () => {
                  this._pendingCount++, this._intervalCount++;
                  try {
                    let f3 = void 0 === this._timeout && void 0 === c3.timeout ? a3() : b2.default(Promise.resolve(a3()), void 0 === c3.timeout ? this._timeout : c3.timeout, () => {
                      (void 0 === c3.throwOnTimeout ? this._throwOnTimeout : c3.throwOnTimeout) && e2(g);
                    });
                    d2(await f3);
                  } catch (a4) {
                    e2(a4);
                  }
                  this._next();
                };
                this._queue.enqueue(f2, c3), this._tryToStartAnother(), this.emit("add");
              });
            }
            async addAll(a3, b3) {
              return Promise.all(a3.map(async (a4) => this.add(a4, b3)));
            }
            start() {
              return this._isPaused && (this._isPaused = false, this._processQueue()), this;
            }
            pause() {
              this._isPaused = true;
            }
            clear() {
              this._queue = new this._queueClass();
            }
            async onEmpty() {
              if (0 !== this._queue.size) return new Promise((a3) => {
                let b3 = this._resolveEmpty;
                this._resolveEmpty = () => {
                  b3(), a3();
                };
              });
            }
            async onIdle() {
              if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((a3) => {
                let b3 = this._resolveIdle;
                this._resolveIdle = () => {
                  b3(), a3();
                };
              });
            }
            get size() {
              return this._queue.size;
            }
            sizeBy(a3) {
              return this._queue.filter(a3).length;
            }
            get pending() {
              return this._pendingCount;
            }
            get isPaused() {
              return this._isPaused;
            }
            get timeout() {
              return this._timeout;
            }
            set timeout(a3) {
              this._timeout = a3;
            }
          }
          e.default = h;
        })(), a.exports = e;
      })();
    }, 1378: (a, b, c) => {
      "use strict";
      c.d(b, { Q: () => d });
      var d = function(a2) {
        return a2[a2.SeeOther = 303] = "SeeOther", a2[a2.TemporaryRedirect = 307] = "TemporaryRedirect", a2[a2.PermanentRedirect = 308] = "PermanentRedirect", a2;
      }({});
    }, 1583: (a, b, c) => {
      "use strict";
      c.d(b, { CB: () => d, Yq: () => e, l_: () => f });
      class d extends Error {
        constructor({ page: a2 }) {
          super(`The middleware "${a2}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class e extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class f extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
    }, 1691: (a, b, c) => {
      var d = { "./en.json": 7020, "./my.json": 39 };
      function e(a2) {
        return Promise.resolve().then(() => {
          if (!c.o(d, a2)) {
            var b2 = Error("Cannot find module '" + a2 + "'");
            throw b2.code = "MODULE_NOT_FOUND", b2;
          }
          var e2 = d[a2];
          return c.t(e2, 19);
        });
      }
      e.keys = () => Object.keys(d), e.id = 1691, a.exports = e;
    }, 1754: (a, b, c) => {
      "use strict";
      var d = c(8586), e = c(7814), f = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment"), i = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), o = Symbol.for("react.memo_cache_sentinel");
      Symbol.for("react.postpone");
      var p = Symbol.iterator;
      function q(a10) {
        return null === a10 || "object" != typeof a10 ? null : "function" == typeof (a10 = p && a10[p] || a10["@@iterator"]) ? a10 : null;
      }
      var r = Symbol.asyncIterator;
      function s(a10) {
        setTimeout(function() {
          throw a10;
        });
      }
      var t = Promise, u = "function" == typeof queueMicrotask ? queueMicrotask : function(a10) {
        t.resolve(null).then(a10).catch(s);
      }, v = null, w = 0;
      function x(a10, b2) {
        if (0 !== b2.byteLength) if (2048 < b2.byteLength) 0 < w && (a10.enqueue(new Uint8Array(v.buffer, 0, w)), v = new Uint8Array(2048), w = 0), a10.enqueue(b2);
        else {
          var c2 = v.length - w;
          c2 < b2.byteLength && (0 === c2 ? a10.enqueue(v) : (v.set(b2.subarray(0, c2), w), a10.enqueue(v), b2 = b2.subarray(c2)), v = new Uint8Array(2048), w = 0), v.set(b2, w), w += b2.byteLength;
        }
        return true;
      }
      var y = new TextEncoder();
      function z(a10) {
        return y.encode(a10);
      }
      function A(a10) {
        return a10.byteLength;
      }
      function B(a10, b2) {
        "function" == typeof a10.error ? a10.error(b2) : a10.close();
      }
      var C = Symbol.for("react.client.reference"), D = Symbol.for("react.server.reference");
      function E(a10, b2, c2) {
        return Object.defineProperties(a10, { $$typeof: { value: C }, $$id: { value: b2 }, $$async: { value: c2 } });
      }
      var F = Function.prototype.bind, G = Array.prototype.slice;
      function H() {
        var a10 = F.apply(this, arguments);
        if (this.$$typeof === D) {
          var b2 = G.call(arguments, 1);
          return Object.defineProperties(a10, { $$typeof: { value: D }, $$id: { value: this.$$id }, $$bound: b2 = { value: this.$$bound ? this.$$bound.concat(b2) : b2 }, bind: { value: H, configurable: true } });
        }
        return a10;
      }
      var I = { value: function() {
        return "function () { [omitted code] }";
      }, configurable: true, writable: true }, J = Promise.prototype, K = { get: function(a10, b2) {
        switch (b2) {
          case "$$typeof":
            return a10.$$typeof;
          case "$$id":
            return a10.$$id;
          case "$$async":
            return a10.$$async;
          case "name":
            return a10.name;
          case "displayName":
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "Provider":
            throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
          case "then":
            throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
        }
        throw Error("Cannot access " + String(a10.name) + "." + String(b2) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
      }, set: function() {
        throw Error("Cannot assign to a client module from a server module.");
      } };
      function L(a10, b2) {
        switch (b2) {
          case "$$typeof":
            return a10.$$typeof;
          case "$$id":
            return a10.$$id;
          case "$$async":
            return a10.$$async;
          case "name":
            return a10.name;
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "__esModule":
            var c2 = a10.$$id;
            return a10.default = E(function() {
              throw Error("Attempted to call the default export of " + c2 + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
            }, a10.$$id + "#", a10.$$async), true;
          case "then":
            if (a10.then) return a10.then;
            if (a10.$$async) return;
            var d2 = E({}, a10.$$id, true), e2 = new Proxy(d2, M);
            return a10.status = "fulfilled", a10.value = e2, a10.then = E(function(a11) {
              return Promise.resolve(a11(e2));
            }, a10.$$id + "#then", false);
        }
        if ("symbol" == typeof b2) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
        return (d2 = a10[b2]) || (Object.defineProperty(d2 = E(function() {
          throw Error("Attempted to call " + String(b2) + "() from the server but " + String(b2) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, a10.$$id + "#" + b2, a10.$$async), "name", { value: b2 }), d2 = a10[b2] = new Proxy(d2, K)), d2;
      }
      var M = { get: function(a10, b2) {
        return L(a10, b2);
      }, getOwnPropertyDescriptor: function(a10, b2) {
        var c2 = Object.getOwnPropertyDescriptor(a10, b2);
        return c2 || (c2 = { value: L(a10, b2), writable: false, configurable: false, enumerable: false }, Object.defineProperty(a10, b2, c2)), c2;
      }, getPrototypeOf: function() {
        return J;
      }, set: function() {
        throw Error("Cannot assign to a client module from a server module.");
      } }, N = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = N.d;
      function P(a10) {
        if (null == a10) return null;
        var b2, c2 = false, d2 = {};
        for (b2 in a10) null != a10[b2] && (c2 = true, d2[b2] = a10[b2]);
        return c2 ? d2 : null;
      }
      N.d = { f: O.f, r: O.r, D: function(a10) {
        if ("string" == typeof a10 && a10) {
          var b2 = as();
          if (b2) {
            var c2 = b2.hints, d2 = "D|" + a10;
            c2.has(d2) || (c2.add(d2), au(b2, "D", a10));
          } else O.D(a10);
        }
      }, C: function(a10, b2) {
        if ("string" == typeof a10) {
          var c2 = as();
          if (c2) {
            var d2 = c2.hints, e2 = "C|" + (null == b2 ? "null" : b2) + "|" + a10;
            d2.has(e2) || (d2.add(e2), "string" == typeof b2 ? au(c2, "C", [a10, b2]) : au(c2, "C", a10));
          } else O.C(a10, b2);
        }
      }, L: function(a10, b2, c2) {
        if ("string" == typeof a10) {
          var d2 = as();
          if (d2) {
            var e2 = d2.hints, f2 = "L";
            if ("image" === b2 && c2) {
              var g2 = c2.imageSrcSet, h2 = c2.imageSizes, i2 = "";
              "string" == typeof g2 && "" !== g2 ? (i2 += "[" + g2 + "]", "string" == typeof h2 && (i2 += "[" + h2 + "]")) : i2 += "[][]" + a10, f2 += "[image]" + i2;
            } else f2 += "[" + b2 + "]" + a10;
            e2.has(f2) || (e2.add(f2), (c2 = P(c2)) ? au(d2, "L", [a10, b2, c2]) : au(d2, "L", [a10, b2]));
          } else O.L(a10, b2, c2);
        }
      }, m: function(a10, b2) {
        if ("string" == typeof a10) {
          var c2 = as();
          if (c2) {
            var d2 = c2.hints, e2 = "m|" + a10;
            if (d2.has(e2)) return;
            return d2.add(e2), (b2 = P(b2)) ? au(c2, "m", [a10, b2]) : au(c2, "m", a10);
          }
          O.m(a10, b2);
        }
      }, X: function(a10, b2) {
        if ("string" == typeof a10) {
          var c2 = as();
          if (c2) {
            var d2 = c2.hints, e2 = "X|" + a10;
            if (d2.has(e2)) return;
            return d2.add(e2), (b2 = P(b2)) ? au(c2, "X", [a10, b2]) : au(c2, "X", a10);
          }
          O.X(a10, b2);
        }
      }, S: function(a10, b2, c2) {
        if ("string" == typeof a10) {
          var d2 = as();
          if (d2) {
            var e2 = d2.hints, f2 = "S|" + a10;
            if (e2.has(f2)) return;
            return e2.add(f2), (c2 = P(c2)) ? au(d2, "S", [a10, "string" == typeof b2 ? b2 : 0, c2]) : "string" == typeof b2 ? au(d2, "S", [a10, b2]) : au(d2, "S", a10);
          }
          O.S(a10, b2, c2);
        }
      }, M: function(a10, b2) {
        if ("string" == typeof a10) {
          var c2 = as();
          if (c2) {
            var d2 = c2.hints, e2 = "M|" + a10;
            if (d2.has(e2)) return;
            return d2.add(e2), (b2 = P(b2)) ? au(c2, "M", [a10, b2]) : au(c2, "M", a10);
          }
          O.M(a10, b2);
        }
      } };
      var Q = "function" == typeof AsyncLocalStorage, R = Q ? new AsyncLocalStorage() : null, S = Symbol.for("react.temporary.reference"), T = { get: function(a10, b2) {
        switch (b2) {
          case "$$typeof":
            return a10.$$typeof;
          case "name":
          case "displayName":
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "Provider":
            throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
          case "then":
            return;
        }
        throw Error("Cannot access " + String(b2) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
      }, set: function() {
        throw Error("Cannot assign to a temporary client reference from a server module.");
      } };
      function U() {
      }
      var V = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), W = null;
      function X() {
        if (null === W) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var a10 = W;
        return W = null, a10;
      }
      var Y = null, Z = 0, $ = null;
      function _() {
        var a10 = $ || [];
        return $ = null, a10;
      }
      var aa = { readContext: ad, use: function(a10) {
        if (null !== a10 && "object" == typeof a10 || "function" == typeof a10) {
          if ("function" == typeof a10.then) {
            var b2 = Z;
            Z += 1, null === $ && ($ = []);
            var c2 = $, d2 = a10, e2 = b2;
            switch (void 0 === (e2 = c2[e2]) ? c2.push(d2) : e2 !== d2 && (d2.then(U, U), d2 = e2), d2.status) {
              case "fulfilled":
                return d2.value;
              case "rejected":
                throw d2.reason;
              default:
                switch ("string" == typeof d2.status ? d2.then(U, U) : ((c2 = d2).status = "pending", c2.then(function(a11) {
                  if ("pending" === d2.status) {
                    var b3 = d2;
                    b3.status = "fulfilled", b3.value = a11;
                  }
                }, function(a11) {
                  if ("pending" === d2.status) {
                    var b3 = d2;
                    b3.status = "rejected", b3.reason = a11;
                  }
                })), d2.status) {
                  case "fulfilled":
                    return d2.value;
                  case "rejected":
                    throw d2.reason;
                }
                throw W = d2, V;
            }
          }
          a10.$$typeof === i && ad();
        }
        if (a10.$$typeof === C) {
          if (null != a10.value && a10.value.$$typeof === i) throw Error("Cannot read a Client Context from a Server Component.");
          throw Error("Cannot use() an already resolved Client Reference.");
        }
        throw Error("An unsupported type was passed to use(): " + String(a10));
      }, useCallback: function(a10) {
        return a10;
      }, useContext: ad, useEffect: ab, useImperativeHandle: ab, useLayoutEffect: ab, useInsertionEffect: ab, useMemo: function(a10) {
        return a10();
      }, useReducer: ab, useRef: ab, useState: ab, useDebugValue: function() {
      }, useDeferredValue: ab, useTransition: ab, useSyncExternalStore: ab, useId: function() {
        if (null === Y) throw Error("useId can only be used while React is rendering");
        var a10 = Y.identifierCount++;
        return "_" + Y.identifierPrefix + "S_" + a10.toString(32) + "_";
      }, useHostTransitionStatus: ab, useFormState: ab, useActionState: ab, useOptimistic: ab, useMemoCache: function(a10) {
        for (var b2 = Array(a10), c2 = 0; c2 < a10; c2++) b2[c2] = o;
        return b2;
      }, useCacheRefresh: function() {
        return ac;
      } };
      function ab() {
        throw Error("This Hook is not supported in Server Components.");
      }
      function ac() {
        throw Error("Refreshing the cache is not supported in Server Components.");
      }
      function ad() {
        throw Error("Cannot read a Client Context from a Server Component.");
      }
      var ae = { getCacheForType: function(a10) {
        var b2 = (b2 = as()) ? b2.cache : /* @__PURE__ */ new Map(), c2 = b2.get(a10);
        return void 0 === c2 && (c2 = a10(), b2.set(a10, c2)), c2;
      }, cacheSignal: function() {
        var a10 = as();
        return a10 ? a10.cacheController.signal : null;
      } }, af = e.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      if (!af) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
      var ag = Array.isArray, ah = Object.getPrototypeOf;
      function ai(a10) {
        return (a10 = Object.prototype.toString.call(a10)).slice(8, a10.length - 1);
      }
      function aj(a10) {
        switch (typeof a10) {
          case "string":
            return JSON.stringify(10 >= a10.length ? a10 : a10.slice(0, 10) + "...");
          case "object":
            if (ag(a10)) return "[...]";
            if (null !== a10 && a10.$$typeof === ak) return "client";
            return "Object" === (a10 = ai(a10)) ? "{...}" : a10;
          case "function":
            return a10.$$typeof === ak ? "client" : (a10 = a10.displayName || a10.name) ? "function " + a10 : "function";
          default:
            return String(a10);
        }
      }
      var ak = Symbol.for("react.client.reference");
      function al(a10, b2) {
        var c2 = ai(a10);
        if ("Object" !== c2 && "Array" !== c2) return c2;
        c2 = -1;
        var d2 = 0;
        if (ag(a10)) {
          for (var e2 = "[", f2 = 0; f2 < a10.length; f2++) {
            0 < f2 && (e2 += ", ");
            var h2 = a10[f2];
            h2 = "object" == typeof h2 && null !== h2 ? al(h2) : aj(h2), "" + f2 === b2 ? (c2 = e2.length, d2 = h2.length, e2 += h2) : e2 = 10 > h2.length && 40 > e2.length + h2.length ? e2 + h2 : e2 + "...";
          }
          e2 += "]";
        } else if (a10.$$typeof === g) e2 = "<" + function a11(b3) {
          if ("string" == typeof b3) return b3;
          switch (b3) {
            case k:
              return "Suspense";
            case l:
              return "SuspenseList";
          }
          if ("object" == typeof b3) switch (b3.$$typeof) {
            case j:
              return a11(b3.render);
            case m:
              return a11(b3.type);
            case n:
              var c3 = b3._payload;
              b3 = b3._init;
              try {
                return a11(b3(c3));
              } catch (a12) {
              }
          }
          return "";
        }(a10.type) + "/>";
        else {
          if (a10.$$typeof === ak) return "client";
          for (h2 = 0, e2 = "{", f2 = Object.keys(a10); h2 < f2.length; h2++) {
            0 < h2 && (e2 += ", ");
            var i2 = f2[h2], o2 = JSON.stringify(i2);
            e2 += ('"' + i2 + '"' === o2 ? i2 : o2) + ": ", o2 = "object" == typeof (o2 = a10[i2]) && null !== o2 ? al(o2) : aj(o2), i2 === b2 ? (c2 = e2.length, d2 = o2.length, e2 += o2) : e2 = 10 > o2.length && 40 > e2.length + o2.length ? e2 + o2 : e2 + "...";
          }
          e2 += "}";
        }
        return void 0 === b2 ? e2 : -1 < c2 && 0 < d2 ? "\n  " + e2 + "\n  " + (a10 = " ".repeat(c2) + "^".repeat(d2)) : "\n  " + e2;
      }
      var am = Object.prototype.hasOwnProperty, an = Object.prototype, ao = JSON.stringify;
      function ap(a10) {
        console.error(a10);
      }
      function aq(a10, b2, c2, d2, e2, f2, g2, h2, i2) {
        if (null !== af.A && af.A !== ae) throw Error("Currently React only supports one RSC renderer at a time.");
        af.A = ae;
        var j2 = /* @__PURE__ */ new Set(), k2 = [], l2 = /* @__PURE__ */ new Set();
        this.type = a10, this.status = 10, this.flushScheduled = false, this.destination = this.fatalError = null, this.bundlerConfig = c2, this.cache = /* @__PURE__ */ new Map(), this.cacheController = new AbortController(), this.pendingChunks = this.nextChunkId = 0, this.hints = l2, this.abortableTasks = j2, this.pingedTasks = k2, this.completedImportChunks = [], this.completedHintChunks = [], this.completedRegularChunks = [], this.completedErrorChunks = [], this.writtenSymbols = /* @__PURE__ */ new Map(), this.writtenClientReferences = /* @__PURE__ */ new Map(), this.writtenServerReferences = /* @__PURE__ */ new Map(), this.writtenObjects = /* @__PURE__ */ new WeakMap(), this.temporaryReferences = i2, this.identifierPrefix = h2 || "", this.identifierCount = 1, this.taintCleanupQueue = [], this.onError = void 0 === d2 ? ap : d2, this.onPostpone = void 0 === e2 ? U : e2, this.onAllReady = f2, this.onFatalError = g2, k2.push(a10 = aC(this, b2, null, false, j2));
      }
      var ar = null;
      function as() {
        if (ar) return ar;
        if (Q) {
          var a10 = R.getStore();
          if (a10) return a10;
        }
        return null;
      }
      function at(a10, b2, c2) {
        var d2 = aC(a10, c2, b2.keyPath, b2.implicitSlot, a10.abortableTasks);
        switch (c2.status) {
          case "fulfilled":
            return d2.model = c2.value, aB(a10, d2), d2.id;
          case "rejected":
            return aR(a10, d2, c2.reason), d2.id;
          default:
            if (12 === a10.status) return a10.abortableTasks.delete(d2), b2 = a10.fatalError, aW(d2), aX(d2, a10, b2), d2.id;
            "string" != typeof c2.status && (c2.status = "pending", c2.then(function(a11) {
              "pending" === c2.status && (c2.status = "fulfilled", c2.value = a11);
            }, function(a11) {
              "pending" === c2.status && (c2.status = "rejected", c2.reason = a11);
            }));
        }
        return c2.then(function(b3) {
          d2.model = b3, aB(a10, d2);
        }, function(b3) {
          0 === d2.status && (aR(a10, d2, b3), a$(a10));
        }), d2.id;
      }
      function au(a10, b2, c2) {
        b2 = z(":H" + b2 + (c2 = ao(c2)) + "\n"), a10.completedHintChunks.push(b2), a$(a10);
      }
      function av(a10) {
        if ("fulfilled" === a10.status) return a10.value;
        if ("rejected" === a10.status) throw a10.reason;
        throw a10;
      }
      function aw() {
      }
      function ax(a10, b2, c2, d2, e2) {
        var f2 = b2.thenableState;
        if (b2.thenableState = null, Z = 0, $ = f2, e2 = d2(e2, void 0), 12 === a10.status) throw "object" == typeof e2 && null !== e2 && "function" == typeof e2.then && e2.$$typeof !== C && e2.then(aw, aw), null;
        return e2 = function(a11, b3, c3, d3) {
          if ("object" != typeof d3 || null === d3 || d3.$$typeof === C) return d3;
          if ("function" == typeof d3.then) {
            switch (d3.status) {
              case "fulfilled":
                return d3.value;
              case "rejected":
                break;
              default:
                "string" != typeof d3.status && (d3.status = "pending", d3.then(function(a12) {
                  "pending" === d3.status && (d3.status = "fulfilled", d3.value = a12);
                }, function(a12) {
                  "pending" === d3.status && (d3.status = "rejected", d3.reason = a12);
                }));
            }
            return { $$typeof: n, _payload: d3, _init: av };
          }
          var e3 = q(d3);
          return e3 ? ((a11 = {})[Symbol.iterator] = function() {
            return e3.call(d3);
          }, a11) : "function" != typeof d3[r] || "function" == typeof ReadableStream && d3 instanceof ReadableStream ? d3 : ((a11 = {})[r] = function() {
            return d3[r]();
          }, a11);
        }(a10, 0, 0, e2), d2 = b2.keyPath, f2 = b2.implicitSlot, null !== c2 ? b2.keyPath = null === d2 ? c2 : d2 + "," + c2 : null === d2 && (b2.implicitSlot = true), a10 = aJ(a10, b2, aS, "", e2), b2.keyPath = d2, b2.implicitSlot = f2, a10;
      }
      function ay(a10, b2, c2) {
        return null !== b2.keyPath ? (a10 = [g, h, b2.keyPath, { children: c2 }], b2.implicitSlot ? [a10] : a10) : c2;
      }
      var az = 0;
      function aA(a10, b2) {
        return b2 = aC(a10, b2.model, b2.keyPath, b2.implicitSlot, a10.abortableTasks), aB(a10, b2), "$L" + b2.id.toString(16);
      }
      function aB(a10, b2) {
        var c2 = a10.pingedTasks;
        c2.push(b2), 1 === c2.length && (a10.flushScheduled = null !== a10.destination, 21 === a10.type || 10 === a10.status ? u(function() {
          return aV(a10);
        }) : setTimeout(function() {
          return aV(a10);
        }, 0));
      }
      function aC(a10, b2, c2, d2, e2) {
        a10.pendingChunks++;
        var f2 = a10.nextChunkId++;
        "object" != typeof b2 || null === b2 || null !== c2 || d2 || a10.writtenObjects.set(b2, aD(f2));
        var h2 = { id: f2, status: 0, model: b2, keyPath: c2, implicitSlot: d2, ping: function() {
          return aB(a10, h2);
        }, toJSON: function(b3, c3) {
          az += b3.length;
          var d3 = h2.keyPath, e3 = h2.implicitSlot;
          try {
            var f3 = aJ(a10, h2, this, b3, c3);
          } catch (j2) {
            if (b3 = "object" == typeof (b3 = h2.model) && null !== b3 && (b3.$$typeof === g || b3.$$typeof === n), 12 === a10.status) h2.status = 3, d3 = a10.fatalError, f3 = b3 ? "$L" + d3.toString(16) : aD(d3);
            else if ("object" == typeof (c3 = j2 === V ? X() : j2) && null !== c3 && "function" == typeof c3.then) {
              var i2 = (f3 = aC(a10, h2.model, h2.keyPath, h2.implicitSlot, a10.abortableTasks)).ping;
              c3.then(i2, i2), f3.thenableState = _(), h2.keyPath = d3, h2.implicitSlot = e3, f3 = b3 ? "$L" + f3.id.toString(16) : aD(f3.id);
            } else h2.keyPath = d3, h2.implicitSlot = e3, a10.pendingChunks++, d3 = a10.nextChunkId++, e3 = aK(a10, c3, h2), aM(a10, d3, e3), f3 = b3 ? "$L" + d3.toString(16) : aD(d3);
          }
          return f3;
        }, thenableState: null };
        return e2.add(h2), h2;
      }
      function aD(a10) {
        return "$" + a10.toString(16);
      }
      function aE(a10, b2, c2) {
        return a10 = ao(c2), z(b2 = b2.toString(16) + ":" + a10 + "\n");
      }
      function aF(a10, b2, c2, d2) {
        var e2 = d2.$$async ? d2.$$id + "#async" : d2.$$id, f2 = a10.writtenClientReferences, h2 = f2.get(e2);
        if (void 0 !== h2) return b2[0] === g && "1" === c2 ? "$L" + h2.toString(16) : aD(h2);
        try {
          var i2 = a10.bundlerConfig, j2 = d2.$$id;
          h2 = "";
          var k2 = i2[j2];
          if (k2) h2 = k2.name;
          else {
            var l2 = j2.lastIndexOf("#");
            if (-1 !== l2 && (h2 = j2.slice(l2 + 1), k2 = i2[j2.slice(0, l2)]), !k2) throw Error('Could not find the module "' + j2 + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
          }
          if (true === k2.async && true === d2.$$async) throw Error('The module "' + j2 + '" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.');
          var m2 = true === k2.async || true === d2.$$async ? [k2.id, k2.chunks, h2, 1] : [k2.id, k2.chunks, h2];
          a10.pendingChunks++;
          var n2 = a10.nextChunkId++, o2 = ao(m2), p2 = n2.toString(16) + ":I" + o2 + "\n", q2 = z(p2);
          return a10.completedImportChunks.push(q2), f2.set(e2, n2), b2[0] === g && "1" === c2 ? "$L" + n2.toString(16) : aD(n2);
        } catch (d3) {
          return a10.pendingChunks++, b2 = a10.nextChunkId++, c2 = aK(a10, d3, null), aM(a10, b2, c2), aD(b2);
        }
      }
      function aG(a10, b2) {
        return b2 = aC(a10, b2, null, false, a10.abortableTasks), aT(a10, b2), b2.id;
      }
      function aH(a10, b2, c2) {
        a10.pendingChunks++;
        var d2 = a10.nextChunkId++;
        return aO(a10, d2, b2, c2, false), aD(d2);
      }
      var aI = false;
      function aJ(a10, b2, c2, d2, e2) {
        if (b2.model = e2, e2 === g) return "$";
        if (null === e2) return null;
        if ("object" == typeof e2) {
          switch (e2.$$typeof) {
            case g:
              var i2 = null, k2 = a10.writtenObjects;
              if (null === b2.keyPath && !b2.implicitSlot) {
                var l2 = k2.get(e2);
                if (void 0 !== l2) if (aI !== e2) return l2;
                else aI = null;
                else -1 === d2.indexOf(":") && void 0 !== (c2 = k2.get(c2)) && (i2 = c2 + ":" + d2, k2.set(e2, i2));
              }
              if (3200 < az) return aA(a10, b2);
              return c2 = (d2 = e2.props).ref, "object" == typeof (a10 = function a11(b3, c3, d3, e3, f2, i3) {
                if (null != f2) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
                if ("function" == typeof d3 && d3.$$typeof !== C && d3.$$typeof !== S) return ax(b3, c3, e3, d3, i3);
                if (d3 === h && null === e3) return d3 = c3.implicitSlot, null === c3.keyPath && (c3.implicitSlot = true), i3 = aJ(b3, c3, aS, "", i3.children), c3.implicitSlot = d3, i3;
                if (null != d3 && "object" == typeof d3 && d3.$$typeof !== C) switch (d3.$$typeof) {
                  case n:
                    if (d3 = (0, d3._init)(d3._payload), 12 === b3.status) throw null;
                    return a11(b3, c3, d3, e3, f2, i3);
                  case j:
                    return ax(b3, c3, e3, d3.render, i3);
                  case m:
                    return a11(b3, c3, d3.type, e3, f2, i3);
                }
                return b3 = e3, e3 = c3.keyPath, null === b3 ? b3 = e3 : null !== e3 && (b3 = e3 + "," + b3), i3 = [g, d3, b3, i3], c3 = c3.implicitSlot && null !== b3 ? [i3] : i3;
              }(a10, b2, e2.type, e2.key, void 0 !== c2 ? c2 : null, d2)) && null !== a10 && null !== i2 && (k2.has(a10) || k2.set(a10, i2)), a10;
            case n:
              if (3200 < az) return aA(a10, b2);
              if (b2.thenableState = null, e2 = (d2 = e2._init)(e2._payload), 12 === a10.status) throw null;
              return aJ(a10, b2, aS, "", e2);
            case f:
              throw Error('A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.');
          }
          if (e2.$$typeof === C) return aF(a10, c2, d2, e2);
          if (void 0 !== a10.temporaryReferences && void 0 !== (i2 = a10.temporaryReferences.get(e2))) return "$T" + i2;
          if (k2 = (i2 = a10.writtenObjects).get(e2), "function" == typeof e2.then) {
            if (void 0 !== k2) {
              if (null !== b2.keyPath || b2.implicitSlot) return "$@" + at(a10, b2, e2).toString(16);
              if (aI !== e2) return k2;
              aI = null;
            }
            return a10 = "$@" + at(a10, b2, e2).toString(16), i2.set(e2, a10), a10;
          }
          if (void 0 !== k2) if (aI !== e2) return k2;
          else {
            if (k2 !== aD(b2.id)) return k2;
            aI = null;
          }
          else if (-1 === d2.indexOf(":") && void 0 !== (k2 = i2.get(c2))) {
            if (l2 = d2, ag(c2) && c2[0] === g) switch (d2) {
              case "1":
                l2 = "type";
                break;
              case "2":
                l2 = "key";
                break;
              case "3":
                l2 = "props";
                break;
              case "4":
                l2 = "_owner";
            }
            i2.set(e2, k2 + ":" + l2);
          }
          if (ag(e2)) return ay(a10, b2, e2);
          if (e2 instanceof Map) return "$Q" + aG(a10, e2 = Array.from(e2)).toString(16);
          if (e2 instanceof Set) return "$W" + aG(a10, e2 = Array.from(e2)).toString(16);
          if ("function" == typeof FormData && e2 instanceof FormData) return "$K" + aG(a10, e2 = Array.from(e2.entries())).toString(16);
          if (e2 instanceof Error) return "$Z";
          if (e2 instanceof ArrayBuffer) return aH(a10, "A", new Uint8Array(e2));
          if (e2 instanceof Int8Array) return aH(a10, "O", e2);
          if (e2 instanceof Uint8Array) return aH(a10, "o", e2);
          if (e2 instanceof Uint8ClampedArray) return aH(a10, "U", e2);
          if (e2 instanceof Int16Array) return aH(a10, "S", e2);
          if (e2 instanceof Uint16Array) return aH(a10, "s", e2);
          if (e2 instanceof Int32Array) return aH(a10, "L", e2);
          if (e2 instanceof Uint32Array) return aH(a10, "l", e2);
          if (e2 instanceof Float32Array) return aH(a10, "G", e2);
          if (e2 instanceof Float64Array) return aH(a10, "g", e2);
          if (e2 instanceof BigInt64Array) return aH(a10, "M", e2);
          if (e2 instanceof BigUint64Array) return aH(a10, "m", e2);
          if (e2 instanceof DataView) return aH(a10, "V", e2);
          if ("function" == typeof Blob && e2 instanceof Blob) return function(a11, b3) {
            function c3(b4) {
              0 === f2.status && (a11.cacheController.signal.removeEventListener("abort", d3), aR(a11, f2, b4), a$(a11), g2.cancel(b4).then(c3, c3));
            }
            function d3() {
              if (0 === f2.status) {
                var b4 = a11.cacheController.signal;
                b4.removeEventListener("abort", d3), aR(a11, f2, b4 = b4.reason), a$(a11), g2.cancel(b4).then(c3, c3);
              }
            }
            var e3 = [b3.type], f2 = aC(a11, e3, null, false, a11.abortableTasks), g2 = b3.stream().getReader();
            return a11.cacheController.signal.addEventListener("abort", d3), g2.read().then(function b4(h2) {
              if (0 === f2.status) if (!h2.done) return e3.push(h2.value), g2.read().then(b4).catch(c3);
              else a11.cacheController.signal.removeEventListener("abort", d3), aB(a11, f2);
            }).catch(c3), "$B" + f2.id.toString(16);
          }(a10, e2);
          if (i2 = q(e2)) return (d2 = i2.call(e2)) === e2 ? "$i" + aG(a10, Array.from(d2)).toString(16) : ay(a10, b2, Array.from(d2));
          if ("function" == typeof ReadableStream && e2 instanceof ReadableStream) return function(a11, b3, c3) {
            function d3(b4) {
              0 === h2.status && (a11.cacheController.signal.removeEventListener("abort", e3), aR(a11, h2, b4), a$(a11), g2.cancel(b4).then(d3, d3));
            }
            function e3() {
              if (0 === h2.status) {
                var b4 = a11.cacheController.signal;
                b4.removeEventListener("abort", e3), aR(a11, h2, b4 = b4.reason), a$(a11), g2.cancel(b4).then(d3, d3);
              }
            }
            var f2 = c3.supportsBYOB;
            if (void 0 === f2) try {
              c3.getReader({ mode: "byob" }).releaseLock(), f2 = true;
            } catch (a12) {
              f2 = false;
            }
            var g2 = c3.getReader(), h2 = aC(a11, b3.model, b3.keyPath, b3.implicitSlot, a11.abortableTasks);
            return a11.pendingChunks++, b3 = h2.id.toString(16) + ":" + (f2 ? "r" : "R") + "\n", a11.completedRegularChunks.push(z(b3)), a11.cacheController.signal.addEventListener("abort", e3), g2.read().then(function b4(c4) {
              if (0 === h2.status) if (c4.done) h2.status = 1, c4 = h2.id.toString(16) + ":C\n", a11.completedRegularChunks.push(z(c4)), a11.abortableTasks.delete(h2), a11.cacheController.signal.removeEventListener("abort", e3), a$(a11), a_(a11);
              else try {
                h2.model = c4.value, a11.pendingChunks++, aU(a11, h2), a$(a11), g2.read().then(b4, d3);
              } catch (a12) {
                d3(a12);
              }
            }, d3), aD(h2.id);
          }(a10, b2, e2);
          if ("function" == typeof (i2 = e2[r])) return null !== b2.keyPath ? (a10 = [g, h, b2.keyPath, { children: e2 }], a10 = b2.implicitSlot ? [a10] : a10) : (d2 = i2.call(e2), a10 = function(a11, b3, c3, d3) {
            function e3(b4) {
              0 === g2.status && (a11.cacheController.signal.removeEventListener("abort", f2), aR(a11, g2, b4), a$(a11), "function" == typeof d3.throw && d3.throw(b4).then(e3, e3));
            }
            function f2() {
              if (0 === g2.status) {
                var b4 = a11.cacheController.signal;
                b4.removeEventListener("abort", f2);
                var c4 = b4.reason;
                aR(a11, g2, b4.reason), a$(a11), "function" == typeof d3.throw && d3.throw(c4).then(e3, e3);
              }
            }
            c3 = c3 === d3;
            var g2 = aC(a11, b3.model, b3.keyPath, b3.implicitSlot, a11.abortableTasks);
            return a11.pendingChunks++, b3 = g2.id.toString(16) + ":" + (c3 ? "x" : "X") + "\n", a11.completedRegularChunks.push(z(b3)), a11.cacheController.signal.addEventListener("abort", f2), d3.next().then(function b4(c4) {
              if (0 === g2.status) if (c4.done) {
                if (g2.status = 1, void 0 === c4.value) var h2 = g2.id.toString(16) + ":C\n";
                else try {
                  var i3 = aG(a11, c4.value);
                  h2 = g2.id.toString(16) + ":C" + ao(aD(i3)) + "\n";
                } catch (a12) {
                  e3(a12);
                  return;
                }
                a11.completedRegularChunks.push(z(h2)), a11.abortableTasks.delete(g2), a11.cacheController.signal.removeEventListener("abort", f2), a$(a11), a_(a11);
              } else try {
                g2.model = c4.value, a11.pendingChunks++, aU(a11, g2), a$(a11), d3.next().then(b4, e3);
              } catch (a12) {
                e3(a12);
              }
            }, e3), aD(g2.id);
          }(a10, b2, e2, d2)), a10;
          if (e2 instanceof Date) return "$D" + e2.toJSON();
          if ((a10 = ah(e2)) !== an && (null === a10 || null !== ah(a10))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + al(c2, d2));
          return e2;
        }
        if ("string" == typeof e2) return (az += e2.length, "Z" === e2[e2.length - 1] && c2[d2] instanceof Date) ? "$D" + e2 : 1024 <= e2.length && null !== A ? (a10.pendingChunks++, b2 = a10.nextChunkId++, aP(a10, b2, e2, false), aD(b2)) : a10 = "$" === e2[0] ? "$" + e2 : e2;
        if ("boolean" == typeof e2) return e2;
        if ("number" == typeof e2) return Number.isFinite(e2) ? 0 === e2 && -1 / 0 == 1 / e2 ? "$-0" : e2 : 1 / 0 === e2 ? "$Infinity" : -1 / 0 === e2 ? "$-Infinity" : "$NaN";
        if (void 0 === e2) return "$undefined";
        if ("function" == typeof e2) {
          if (e2.$$typeof === C) return aF(a10, c2, d2, e2);
          if (e2.$$typeof === D) return void 0 !== (d2 = (b2 = a10.writtenServerReferences).get(e2)) ? a10 = "$h" + d2.toString(16) : (d2 = null === (d2 = e2.$$bound) ? null : Promise.resolve(d2), a10 = aG(a10, { id: e2.$$id, bound: d2 }), b2.set(e2, a10), a10 = "$h" + a10.toString(16)), a10;
          if (void 0 !== a10.temporaryReferences && void 0 !== (a10 = a10.temporaryReferences.get(e2))) return "$T" + a10;
          if (e2.$$typeof === S) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
          if (/^on[A-Z]/.test(d2)) throw Error("Event handlers cannot be passed to Client Component props." + al(c2, d2) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
          throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.' + al(c2, d2));
        }
        if ("symbol" == typeof e2) {
          if (void 0 !== (i2 = (b2 = a10.writtenSymbols).get(e2))) return aD(i2);
          if (Symbol.for(i2 = e2.description) !== e2) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + e2.description + ") cannot be found among global symbols." + al(c2, d2));
          return a10.pendingChunks++, d2 = a10.nextChunkId++, c2 = aE(a10, d2, "$S" + i2), a10.completedImportChunks.push(c2), b2.set(e2, d2), aD(d2);
        }
        if ("bigint" == typeof e2) return "$n" + e2.toString(10);
        throw Error("Type " + typeof e2 + " is not supported in Client Component props." + al(c2, d2));
      }
      function aK(a10, b2) {
        var c2 = ar;
        ar = null;
        try {
          var d2 = a10.onError, e2 = Q ? R.run(void 0, d2, b2) : d2(b2);
        } finally {
          ar = c2;
        }
        if (null != e2 && "string" != typeof e2) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e2 + '" instead');
        return e2 || "";
      }
      function aL(a10, b2) {
        (0, a10.onFatalError)(b2), null !== a10.destination ? (a10.status = 14, B(a10.destination, b2)) : (a10.status = 13, a10.fatalError = b2), a10.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: b2 }));
      }
      function aM(a10, b2, c2) {
        c2 = { digest: c2 }, b2 = z(b2 = b2.toString(16) + ":E" + ao(c2) + "\n"), a10.completedErrorChunks.push(b2);
      }
      function aN(a10, b2, c2) {
        b2 = z(b2 = b2.toString(16) + ":" + c2 + "\n"), a10.completedRegularChunks.push(b2);
      }
      function aO(a10, b2, c2, d2, e2) {
        e2 ? a10.pendingDebugChunks++ : a10.pendingChunks++, e2 = new Uint8Array(d2.buffer, d2.byteOffset, d2.byteLength), e2 = (d2 = 2048 < d2.byteLength ? e2.slice() : e2).byteLength, b2 = z(b2 = b2.toString(16) + ":" + c2 + e2.toString(16) + ","), a10.completedRegularChunks.push(b2, d2);
      }
      function aP(a10, b2, c2, d2) {
        if (null === A) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
        d2 ? a10.pendingDebugChunks++ : a10.pendingChunks++, d2 = (c2 = z(c2)).byteLength, b2 = z(b2 = b2.toString(16) + ":T" + d2.toString(16) + ","), a10.completedRegularChunks.push(b2, c2);
      }
      function aQ(a10, b2, c2) {
        var d2 = b2.id;
        "string" == typeof c2 && null !== A ? aP(a10, d2, c2, false) : c2 instanceof ArrayBuffer ? aO(a10, d2, "A", new Uint8Array(c2), false) : c2 instanceof Int8Array ? aO(a10, d2, "O", c2, false) : c2 instanceof Uint8Array ? aO(a10, d2, "o", c2, false) : c2 instanceof Uint8ClampedArray ? aO(a10, d2, "U", c2, false) : c2 instanceof Int16Array ? aO(a10, d2, "S", c2, false) : c2 instanceof Uint16Array ? aO(a10, d2, "s", c2, false) : c2 instanceof Int32Array ? aO(a10, d2, "L", c2, false) : c2 instanceof Uint32Array ? aO(a10, d2, "l", c2, false) : c2 instanceof Float32Array ? aO(a10, d2, "G", c2, false) : c2 instanceof Float64Array ? aO(a10, d2, "g", c2, false) : c2 instanceof BigInt64Array ? aO(a10, d2, "M", c2, false) : c2 instanceof BigUint64Array ? aO(a10, d2, "m", c2, false) : c2 instanceof DataView ? aO(a10, d2, "V", c2, false) : (c2 = ao(c2, b2.toJSON), aN(a10, b2.id, c2));
      }
      function aR(a10, b2, c2) {
        b2.status = 4, c2 = aK(a10, c2, b2), aM(a10, b2.id, c2), a10.abortableTasks.delete(b2), a_(a10);
      }
      var aS = {};
      function aT(a10, b2) {
        if (0 === b2.status) {
          b2.status = 5;
          var c2 = az;
          try {
            aI = b2.model;
            var d2 = aJ(a10, b2, aS, "", b2.model);
            if (aI = d2, b2.keyPath = null, b2.implicitSlot = false, "object" == typeof d2 && null !== d2) a10.writtenObjects.set(d2, aD(b2.id)), aQ(a10, b2, d2);
            else {
              var e2 = ao(d2);
              aN(a10, b2.id, e2);
            }
            b2.status = 1, a10.abortableTasks.delete(b2), a_(a10);
          } catch (c3) {
            if (12 === a10.status) {
              a10.abortableTasks.delete(b2), b2.status = 0;
              var f2 = a10.fatalError;
              aW(b2), aX(b2, a10, f2);
            } else {
              var g2 = c3 === V ? X() : c3;
              if ("object" == typeof g2 && null !== g2 && "function" == typeof g2.then) {
                b2.status = 0, b2.thenableState = _();
                var h2 = b2.ping;
                g2.then(h2, h2);
              } else aR(a10, b2, g2);
            }
          } finally {
            az = c2;
          }
        }
      }
      function aU(a10, b2) {
        var c2 = az;
        try {
          aQ(a10, b2, b2.model);
        } finally {
          az = c2;
        }
      }
      function aV(a10) {
        var b2 = af.H;
        af.H = aa;
        var c2 = ar;
        Y = ar = a10;
        try {
          var d2 = a10.pingedTasks;
          a10.pingedTasks = [];
          for (var e2 = 0; e2 < d2.length; e2++) aT(a10, d2[e2]);
          aY(a10);
        } catch (b3) {
          aK(a10, b3, null), aL(a10, b3);
        } finally {
          af.H = b2, Y = null, ar = c2;
        }
      }
      function aW(a10) {
        0 === a10.status && (a10.status = 3);
      }
      function aX(a10, b2, c2) {
        3 === a10.status && (c2 = aD(c2), a10 = aE(b2, a10.id, c2), b2.completedErrorChunks.push(a10));
      }
      function aY(a10) {
        var b2 = a10.destination;
        if (null !== b2) {
          v = new Uint8Array(2048), w = 0;
          try {
            for (var c2 = a10.completedImportChunks, d2 = 0; d2 < c2.length; d2++) a10.pendingChunks--, x(b2, c2[d2]);
            c2.splice(0, d2);
            var e2 = a10.completedHintChunks;
            for (d2 = 0; d2 < e2.length; d2++) x(b2, e2[d2]);
            e2.splice(0, d2);
            var f2 = a10.completedRegularChunks;
            for (d2 = 0; d2 < f2.length; d2++) a10.pendingChunks--, x(b2, f2[d2]);
            f2.splice(0, d2);
            var g2 = a10.completedErrorChunks;
            for (d2 = 0; d2 < g2.length; d2++) a10.pendingChunks--, x(b2, g2[d2]);
            g2.splice(0, d2);
          } finally {
            a10.flushScheduled = false, v && 0 < w && (b2.enqueue(new Uint8Array(v.buffer, 0, w)), v = null, w = 0);
          }
        }
        0 === a10.pendingChunks && (12 > a10.status && a10.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== a10.destination && (a10.status = 14, a10.destination.close(), a10.destination = null));
      }
      function aZ(a10) {
        a10.flushScheduled = null !== a10.destination, Q ? u(function() {
          R.run(a10, aV, a10);
        }) : u(function() {
          return aV(a10);
        }), setTimeout(function() {
          10 === a10.status && (a10.status = 11);
        }, 0);
      }
      function a$(a10) {
        false === a10.flushScheduled && 0 === a10.pingedTasks.length && null !== a10.destination && (a10.flushScheduled = true, setTimeout(function() {
          a10.flushScheduled = false, aY(a10);
        }, 0));
      }
      function a_(a10) {
        0 === a10.abortableTasks.size && (a10 = a10.onAllReady)();
      }
      function a0(a10, b2) {
        if (13 === a10.status) a10.status = 14, B(b2, a10.fatalError);
        else if (14 !== a10.status && null === a10.destination) {
          a10.destination = b2;
          try {
            aY(a10);
          } catch (b3) {
            aK(a10, b3, null), aL(a10, b3);
          }
        }
      }
      function a1(a10, b2) {
        if (!(11 < a10.status)) try {
          a10.status = 12, a10.cacheController.abort(b2);
          var c2 = a10.abortableTasks;
          if (0 < c2.size) {
            var d2 = void 0 === b2 ? Error("The render was aborted by the server without a reason.") : "object" == typeof b2 && null !== b2 && "function" == typeof b2.then ? Error("The render was aborted by the server with a promise.") : b2, e2 = aK(a10, d2, null), f2 = a10.nextChunkId++;
            a10.fatalError = f2, a10.pendingChunks++, aM(a10, f2, e2, d2, false), c2.forEach(function(b3) {
              return aW(b3, a10, f2);
            }), setTimeout(function() {
              try {
                c2.forEach(function(b3) {
                  return aX(b3, a10, f2);
                }), (0, a10.onAllReady)(), aY(a10);
              } catch (b3) {
                aK(a10, b3, null), aL(a10, b3);
              }
            }, 0);
          } else (0, a10.onAllReady)(), aY(a10);
        } catch (b3) {
          aK(a10, b3, null), aL(a10, b3);
        }
      }
      function a2(a10, b2) {
        var c2 = "", d2 = a10[b2];
        if (d2) c2 = d2.name;
        else {
          var e2 = b2.lastIndexOf("#");
          if (-1 !== e2 && (c2 = b2.slice(e2 + 1), d2 = a10[b2.slice(0, e2)]), !d2) throw Error('Could not find the module "' + b2 + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
        }
        return d2.async ? [d2.id, d2.chunks, c2, 1] : [d2.id, d2.chunks, c2];
      }
      var a3 = /* @__PURE__ */ new Map();
      function a4(a10) {
        var b2 = globalThis.__next_require__(a10);
        return "function" != typeof b2.then || "fulfilled" === b2.status ? null : (b2.then(function(a11) {
          b2.status = "fulfilled", b2.value = a11;
        }, function(a11) {
          b2.status = "rejected", b2.reason = a11;
        }), b2);
      }
      function a5() {
      }
      function a6(a10) {
        for (var b2 = a10[1], d2 = [], e2 = 0; e2 < b2.length; ) {
          var f2 = b2[e2++];
          b2[e2++];
          var g2 = a3.get(f2);
          if (void 0 === g2) {
            g2 = c.e(f2), d2.push(g2);
            var h2 = a3.set.bind(a3, f2, null);
            g2.then(h2, a5), a3.set(f2, g2);
          } else null !== g2 && d2.push(g2);
        }
        return 4 === a10.length ? 0 === d2.length ? a4(a10[0]) : Promise.all(d2).then(function() {
          return a4(a10[0]);
        }) : 0 < d2.length ? Promise.all(d2) : null;
      }
      function a7(a10) {
        var b2 = globalThis.__next_require__(a10[0]);
        if (4 === a10.length && "function" == typeof b2.then) if ("fulfilled" === b2.status) b2 = b2.value;
        else throw b2.reason;
        return "*" === a10[2] ? b2 : "" === a10[2] ? b2.__esModule ? b2.default : b2 : am.call(b2, a10[2]) ? b2[a10[2]] : void 0;
      }
      var a8 = Symbol();
      function a9(a10, b2, c2) {
        this.status = a10, this.value = b2, this.reason = c2;
      }
      a9.prototype = Object.create(Promise.prototype), a9.prototype.then = function(a10, b2) {
        switch ("resolved_model" === this.status && bm(this), this.status) {
          case "fulfilled":
            if ("function" == typeof a10) {
              for (var c2 = this.value, d2 = 0, e2 = /* @__PURE__ */ new Set(); c2 instanceof a9; ) {
                if (d2++, c2 === this || e2.has(c2) || 1e3 < d2) {
                  "function" == typeof b2 && b2(Error("Cannot have cyclic thenables."));
                  return;
                }
                if (e2.add(c2), "fulfilled" === c2.status) c2 = c2.value;
                else break;
              }
              a10(this.value);
            }
            break;
          case "pending":
          case "blocked":
            "function" == typeof a10 && (null === this.value && (this.value = []), this.value.push(a10)), "function" == typeof b2 && (null === this.reason && (this.reason = []), this.reason.push(b2));
            break;
          default:
            "function" == typeof b2 && b2(this.reason);
        }
      };
      var ba = Object.prototype, bb = Array.prototype;
      function bc(a10, b2, c2, d2) {
        for (var e2 = 0; e2 < b2.length; e2++) {
          var f2 = b2[e2];
          "function" == typeof f2 ? f2(c2) : bp(a10, f2, c2, d2.reason);
        }
      }
      function bd(a10, b2, c2) {
        for (var d2 = 0; d2 < b2.length; d2++) {
          var e2 = b2[d2];
          "function" == typeof e2 ? e2(c2) : br(a10, e2.handler, c2);
        }
      }
      function be(a10, b2, c2) {
        if ("pending" !== b2.status && "blocked" !== b2.status) b2.reason.error(c2);
        else {
          var d2 = b2.reason;
          b2.status = "rejected", b2.reason = c2, null !== d2 && bd(a10, d2, c2);
        }
      }
      function bf(a10, b2, c2) {
        var d2 = {};
        return new a9("resolved_model", b2, (d2.id = c2, d2[a8] = a10, d2));
      }
      function bg(a10, b2, c2, d2) {
        if ("pending" !== b2.status) b2 = b2.reason, "C" === c2[0] ? b2.close("C" === c2 ? '"$undefined"' : c2.slice(1)) : b2.enqueueModel(c2);
        else {
          var e2 = b2.value, f2 = b2.reason;
          if (b2.status = "resolved_model", b2.value = c2, c2 = {}, b2.reason = (c2.id = d2, c2[a8] = a10, c2), null !== e2) switch (bm(b2), b2.status) {
            case "fulfilled":
              bc(a10, e2, b2.value, b2);
              break;
            case "blocked":
            case "pending":
              if (b2.value) for (a10 = 0; a10 < e2.length; a10++) b2.value.push(e2[a10]);
              else b2.value = e2;
              if (b2.reason) {
                if (f2) for (e2 = 0; e2 < f2.length; e2++) b2.reason.push(f2[e2]);
              } else b2.reason = f2;
              break;
            case "rejected":
              f2 && bd(a10, f2, b2.reason);
          }
        }
      }
      function bh(a10, b2, c2) {
        var d2 = {};
        return new a9("resolved_model", (c2 ? '{"done":true,"value":' : '{"done":false,"value":') + b2 + "}", (d2.id = -1, d2[a8] = a10, d2));
      }
      function bi(a10, b2, c2, d2) {
        bg(a10, b2, (d2 ? '{"done":true,"value":' : '{"done":false,"value":') + c2 + "}", -1);
      }
      function bj(a10, b2, c2, d2) {
        function e2(b3) {
          var c3 = h2.reason;
          h2.status = "rejected", h2.value = null, h2.reason = b3, null !== c3 && bd(a10, c3, b3), br(a10, j2, b3);
        }
        var f2 = b2.id;
        if ("string" != typeof f2 || "then" === d2) return null;
        var g2 = b2.$$promise;
        if (void 0 !== g2) return "fulfilled" === g2.status ? (g2 = g2.value, "__proto__" === d2 ? null : c2[d2] = g2) : (bl ? (f2 = bl, f2.deps++) : f2 = bl = { chunk: null, value: null, reason: null, deps: 1, errored: false }, g2.then(bq.bind(null, a10, f2, c2, d2), br.bind(null, a10, f2)), null);
        var h2 = new a9("blocked", null, null);
        b2.$$promise = h2;
        var i2 = a2(a10._bundlerConfig, f2);
        if (g2 = b2.bound, f2 = a6(i2)) g2 instanceof a9 && (f2 = Promise.all([f2, g2]));
        else {
          if (!(g2 instanceof a9)) return g2 = a7(i2), (f2 = h2).status = "fulfilled", f2.value = g2;
          f2 = Promise.resolve(g2);
        }
        if (bl) {
          var j2 = bl;
          j2.deps++;
        } else j2 = bl = { chunk: null, value: null, reason: null, deps: 1, errored: false };
        return f2.then(function() {
          var f3 = a7(i2);
          if (b2.bound) {
            var g3 = b2.bound.value;
            if (1e3 < (g3 = ag(g3) ? g3.slice(0) : []).length) return void e2(Error("Server Function has too many bound arguments. Received " + g3.length + " but the limit is 1000."));
            g3.unshift(null), f3 = f3.bind.apply(f3, g3);
          }
          g3 = h2.value, h2.status = "fulfilled", h2.value = f3, h2.reason = null, null !== g3 && bc(a10, g3, f3, h2), bq(a10, j2, c2, d2, f3);
        }, e2), null;
      }
      function bk(a10, b2, c2) {
        if ((a10.count += b2) > c2._arraySizeLimit && a10.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
      }
      var bl = null;
      function bm(a10) {
        var b2 = bl;
        bl = null;
        var c2 = a10.reason, d2 = c2[a8];
        c2 = -1 === (c2 = c2.id) ? void 0 : c2.toString(16);
        var e2 = a10.value;
        a10.status = "blocked", a10.value = null, a10.reason = null;
        try {
          var f2 = JSON.parse(e2);
          e2 = { count: 0, fork: false };
          var g2 = function a11(b3, c3, d3, e3, f3, g3) {
            if ("string" == typeof e3) return function(a12, b4, c4, d4, e4, f4) {
              if ("$" === d4[0]) {
                switch (d4[1]) {
                  case "$":
                    return null !== f4 && bk(f4, d4.length - 1, a12), d4.slice(1);
                  case "@":
                    return bo(a12, b4 = parseInt(d4.slice(2), 16));
                  case "h":
                    return bs(a12, f4 = d4.slice(2), b4, c4, null, bj);
                  case "T":
                    var g4, h4, i3;
                    if (void 0 === e4 || void 0 === a12._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
                    return g4 = a12._temporaryReferences, h4 = e4, i3 = new Proxy(i3 = Object.defineProperties(function() {
                      throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                    }, { $$typeof: { value: S } }), T), g4.set(i3, h4), i3;
                  case "Q":
                    return bs(a12, f4 = d4.slice(2), b4, c4, null, bt);
                  case "W":
                    return bs(a12, f4 = d4.slice(2), b4, c4, null, bu);
                  case "K":
                    for (b4 = d4.slice(2), b4 = a12._prefix + b4 + "_", c4 = new FormData(), f4 = Array.from((a12 = a12._formData).keys()), d4 = 0; d4 < f4.length; d4++) if ((e4 = f4[d4]).startsWith(b4)) {
                      for (var j2 = a12.getAll(e4), k2 = e4.slice(b4.length), l2 = 0; l2 < j2.length; l2++) c4.append(k2, j2[l2]);
                      a12.delete(e4);
                    }
                    return c4;
                  case "i":
                    return bs(a12, f4 = d4.slice(2), b4, c4, null, bv);
                  case "I":
                    return 1 / 0;
                  case "-":
                    return "$-0" === d4 ? -0 : -1 / 0;
                  case "N":
                    return NaN;
                  case "u":
                    return;
                  case "D":
                    return new Date(Date.parse(d4.slice(2)));
                  case "n":
                    if (300 < (b4 = d4.slice(2)).length) throw Error("BigInt is too large. Received " + b4.length + " digits but the limit is 300.");
                    return null !== f4 && bk(f4, b4.length, a12), BigInt(b4);
                  case "A":
                    return bx(a12, d4, ArrayBuffer, 1, b4, c4, f4);
                  case "O":
                    return bx(a12, d4, Int8Array, 1, b4, c4, f4);
                  case "o":
                    return bx(a12, d4, Uint8Array, 1, b4, c4, f4);
                  case "U":
                    return bx(a12, d4, Uint8ClampedArray, 1, b4, c4, f4);
                  case "S":
                    return bx(a12, d4, Int16Array, 2, b4, c4, f4);
                  case "s":
                    return bx(a12, d4, Uint16Array, 2, b4, c4, f4);
                  case "L":
                    return bx(a12, d4, Int32Array, 4, b4, c4, f4);
                  case "l":
                    return bx(a12, d4, Uint32Array, 4, b4, c4, f4);
                  case "G":
                    return bx(a12, d4, Float32Array, 4, b4, c4, f4);
                  case "g":
                    return bx(a12, d4, Float64Array, 8, b4, c4, f4);
                  case "M":
                    return bx(a12, d4, BigInt64Array, 8, b4, c4, f4);
                  case "m":
                    return bx(a12, d4, BigUint64Array, 8, b4, c4, f4);
                  case "V":
                    return bx(a12, d4, DataView, 1, b4, c4, f4);
                  case "B":
                    return b4 = parseInt(d4.slice(2), 16), a12._formData.get(a12._prefix + b4);
                  case "R":
                    return bz(a12, d4, void 0);
                  case "r":
                    return bz(a12, d4, "bytes");
                  case "X":
                    return bB(a12, d4, false);
                  case "x":
                    return bB(a12, d4, true);
                }
                return bs(a12, d4 = d4.slice(1), b4, c4, f4, bw);
              }
              return null !== f4 && bk(f4, d4.length, a12), d4;
            }(b3, c3, d3, e3, f3, g3);
            if ("object" == typeof e3 && null !== e3) if (void 0 !== f3 && void 0 !== b3._temporaryReferences && b3._temporaryReferences.set(e3, f3), ag(e3)) {
              if (null === g3) {
                var h3 = { count: 0, fork: false };
                b3._rootArrayContexts.set(e3, h3);
              } else h3 = g3;
              for (1 < e3.length && (h3.fork = true), bk(h3, e3.length + 1, b3), c3 = 0; c3 < e3.length; c3++) e3[c3] = a11(b3, e3, "" + c3, e3[c3], void 0 !== f3 ? f3 + ":" + c3 : void 0, h3);
            } else for (h3 in e3) am.call(e3, h3) && ("__proto__" === h3 ? delete e3[h3] : (c3 = void 0 !== f3 && -1 === h3.indexOf(":") ? f3 + ":" + h3 : void 0, void 0 !== (c3 = a11(b3, e3, h3, e3[h3], c3, null)) ? e3[h3] = c3 : delete e3[h3]));
            return e3;
          }(d2, { "": f2 }, "", f2, c2, e2), h2 = a10.value;
          if (null !== h2) for (a10.value = null, a10.reason = null, f2 = 0; f2 < h2.length; f2++) {
            var i2 = h2[f2];
            "function" == typeof i2 ? i2(g2) : bp(d2, i2, g2, e2);
          }
          if (null !== bl) {
            if (bl.errored) throw bl.reason;
            if (0 < bl.deps) {
              bl.value = g2, bl.reason = e2, bl.chunk = a10;
              return;
            }
          }
          a10.status = "fulfilled", a10.value = g2, a10.reason = e2;
        } catch (b3) {
          a10.status = "rejected", a10.reason = b3;
        } finally {
          bl = b2;
        }
      }
      function bn(a10, b2) {
        a10._closed = true, a10._closedReason = b2, a10._chunks.forEach(function(c2) {
          "pending" === c2.status ? be(a10, c2, b2) : "fulfilled" === c2.status && null !== c2.reason && "function" == typeof (c2 = c2.reason).error && c2.error(b2);
        });
      }
      function bo(a10, b2) {
        var c2 = a10._chunks, d2 = c2.get(b2);
        return d2 || (d2 = "string" == typeof (d2 = a10._formData.get(a10._prefix + b2)) ? bf(a10, d2, b2) : a10._closed ? new a9("rejected", null, a10._closedReason) : new a9("pending", null, null), c2.set(b2, d2)), d2;
      }
      function bp(a10, b2, c2, d2) {
        var e2 = b2.handler, f2 = b2.parentObject, g2 = b2.key, h2 = b2.map, i2 = b2.path;
        try {
          for (var j2 = 0, k2 = a10._rootArrayContexts, l2 = 1; l2 < i2.length; l2++) {
            var m2 = i2[l2];
            if ("object" != typeof c2 || null === c2 || ah(c2) !== ba && ah(c2) !== bb || !am.call(c2, m2)) throw Error("Invalid reference.");
            if (c2 = c2[m2], ag(c2)) j2 = 0, d2 = k2.get(c2) || d2;
            else if (d2 = null, "string" == typeof c2) j2 = c2.length;
            else if ("bigint" == typeof c2) {
              var n2 = Math.abs(Number(c2));
              j2 = 0 === n2 ? 1 : Math.floor(Math.log10(n2)) + 1;
            } else j2 = ArrayBuffer.isView(c2) ? c2.byteLength : 0;
          }
          var o2 = h2(a10, c2, f2, g2), p2 = b2.arrayRoot;
          null !== p2 && (null !== d2 ? (d2.fork && (p2.fork = true), bk(p2, d2.count, a10)) : 0 < j2 && bk(p2, j2, a10));
        } catch (b3) {
          br(a10, e2, b3);
          return;
        }
        bq(a10, e2, f2, g2, o2);
      }
      function bq(a10, b2, c2, d2, e2) {
        "__proto__" !== d2 && (c2[d2] = e2), "" === d2 && null === b2.value && (b2.value = e2), b2.deps--, 0 === b2.deps && null !== (c2 = b2.chunk) && "blocked" === c2.status && (d2 = c2.value, c2.status = "fulfilled", c2.value = b2.value, c2.reason = b2.reason, null !== d2 && bc(a10, d2, b2.value, c2));
      }
      function br(a10, b2, c2) {
        b2.errored || (b2.errored = true, b2.value = null, b2.reason = c2, null !== (b2 = b2.chunk) && "blocked" === b2.status && be(a10, b2, c2));
      }
      function bs(a10, b2, c2, d2, e2, f2) {
        var g2 = parseInt((b2 = b2.split(":"))[0], 16), h2 = bo(a10, g2);
        switch ("resolved_model" === h2.status && bm(h2), h2.status) {
          case "fulfilled":
            g2 = h2.value, h2 = h2.reason;
            for (var i2 = 0, j2 = a10._rootArrayContexts, k2 = 1; k2 < b2.length; k2++) {
              if (i2 = b2[k2], "object" != typeof g2 || null === g2 || ah(g2) !== ba && ah(g2) !== bb || !am.call(g2, i2)) throw Error("Invalid reference.");
              ag(g2 = g2[i2]) ? (i2 = 0, h2 = j2.get(g2) || h2) : (h2 = null, i2 = "string" == typeof g2 ? g2.length : "bigint" == typeof g2 ? 0 === (i2 = Math.abs(Number(g2))) ? 1 : Math.floor(Math.log10(i2)) + 1 : ArrayBuffer.isView(g2) ? g2.byteLength : 0);
            }
            return c2 = f2(a10, g2, c2, d2), null !== e2 && (null !== h2 ? (h2.fork && (e2.fork = true), bk(e2, h2.count, a10)) : 0 < i2 && bk(e2, i2, a10)), c2;
          case "blocked":
            return bl ? (a10 = bl, a10.deps++) : a10 = bl = { chunk: null, value: null, reason: null, deps: 1, errored: false }, e2 = { handler: a10, parentObject: c2, key: d2, map: f2, path: b2, arrayRoot: e2 }, null === h2.value ? h2.value = [e2] : h2.value.push(e2), null === h2.reason ? h2.reason = [e2] : h2.reason.push(e2), null;
          case "pending":
            throw Error("Invalid forward reference.");
          default:
            return bl ? (bl.errored = true, bl.value = null, bl.reason = h2.reason) : bl = { chunk: null, value: null, reason: h2.reason, deps: 0, errored: true }, null;
        }
      }
      function bt(a10, b2) {
        if (!ag(b2)) throw Error("Invalid Map initializer.");
        if (true === b2.$$consumed) throw Error("Already initialized Map.");
        return a10 = new Map(b2), b2.$$consumed = true, a10;
      }
      function bu(a10, b2) {
        if (!ag(b2)) throw Error("Invalid Set initializer.");
        if (true === b2.$$consumed) throw Error("Already initialized Set.");
        return a10 = new Set(b2), b2.$$consumed = true, a10;
      }
      function bv(a10, b2) {
        if (!ag(b2)) throw Error("Invalid Iterator initializer.");
        if (true === b2.$$consumed) throw Error("Already initialized Iterator.");
        return a10 = b2[Symbol.iterator](), b2.$$consumed = true, a10;
      }
      function bw(a10, b2, c2, d2) {
        return "then" === d2 && "function" == typeof b2 ? null : b2;
      }
      function bx(a10, b2, c2, d2, e2, f2, g2) {
        function h2(b3) {
          if (!j2.errored) {
            j2.errored = true, j2.value = null, j2.reason = b3;
            var c3 = j2.chunk;
            null !== c3 && "blocked" === c3.status && be(a10, c3, b3);
          }
        }
        b2 = parseInt(b2.slice(2), 16);
        var i2 = a10._prefix + b2;
        if ((d2 = a10._chunks).has(b2)) throw Error("Already initialized typed array.");
        if (d2.set(b2, new a9("rejected", null, Error("Already initialized typed array."))), b2 = a10._formData.get(i2).arrayBuffer(), bl) {
          var j2 = bl;
          j2.deps++;
        } else j2 = bl = { chunk: null, value: null, reason: null, deps: 1, errored: false };
        return b2.then(function(b3) {
          try {
            null !== g2 && bk(g2, b3.byteLength, a10);
            var d3 = c2 === ArrayBuffer ? b3 : new c2(b3);
            "__proto__" !== i2 && (e2[f2] = d3), "" === f2 && null === j2.value && (j2.value = d3);
          } catch (a11) {
            h2(a11);
            return;
          }
          j2.deps--, 0 === j2.deps && null !== (b3 = j2.chunk) && "blocked" === b3.status && (d3 = b3.value, b3.status = "fulfilled", b3.value = j2.value, b3.reason = null, null !== d3 && bc(a10, d3, j2.value, b3));
        }, h2), null;
      }
      function by(a10, b2, c2, d2) {
        var e2 = a10._chunks;
        for (c2 = new a9("fulfilled", c2, d2), e2.set(b2, c2), a10 = a10._formData.getAll(a10._prefix + b2), b2 = 0; b2 < a10.length; b2++) "string" == typeof (e2 = a10[b2]) && ("C" === e2[0] ? d2.close("C" === e2 ? '"$undefined"' : e2.slice(1)) : d2.enqueueModel(e2));
      }
      function bz(a10, b2, c2) {
        function d2(a11) {
          "bytes" !== c2 || ArrayBuffer.isView(a11) ? e2.enqueue(a11) : i2.error(Error("Invalid data for bytes stream."));
        }
        if (b2 = parseInt(b2.slice(2), 16), a10._chunks.has(b2)) throw Error("Already initialized stream.");
        var e2 = null, f2 = false, g2 = new ReadableStream({ type: c2, start: function(a11) {
          e2 = a11;
        } }), h2 = null, i2 = { enqueueModel: function(b3) {
          if (null === h2) {
            var c3 = bf(a10, b3, -1);
            bm(c3), "fulfilled" === c3.status ? d2(c3.value) : (c3.then(d2, i2.error), h2 = c3);
          } else {
            c3 = h2;
            var e3 = new a9("pending", null, null);
            e3.then(d2, i2.error), h2 = e3, c3.then(function() {
              h2 === e3 && (h2 = null), bg(a10, e3, b3, -1);
            });
          }
        }, close: function() {
          if (!f2) if (f2 = true, null === h2) e2.close();
          else {
            var a11 = h2;
            h2 = null, a11.then(function() {
              return e2.close();
            });
          }
        }, error: function(a11) {
          if (!f2) if (f2 = true, null === h2) e2.error(a11);
          else {
            var b3 = h2;
            h2 = null, b3.then(function() {
              return e2.error(a11);
            });
          }
        } };
        return by(a10, b2, g2, i2), g2;
      }
      function bA(a10) {
        this.next = a10;
      }
      function bB(a10, b2, c2) {
        if (b2 = parseInt(b2.slice(2), 16), a10._chunks.has(b2)) throw Error("Already initialized stream.");
        var d2 = [], e2 = false, f2 = 0, g2 = {};
        return g2[r] = function() {
          var a11 = 0;
          return new bA(function(b3) {
            if (void 0 !== b3) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
            if (a11 === d2.length) {
              if (e2) return new a9("fulfilled", { done: true, value: void 0 }, null);
              d2[a11] = new a9("pending", null, null);
            }
            return d2[a11++];
          });
        }, by(a10, b2, c2 = c2 ? g2[r]() : g2, { enqueueModel: function(b3) {
          f2 === d2.length ? d2[f2] = bh(a10, b3, false) : bi(a10, d2[f2], b3, false), f2++;
        }, close: function(b3) {
          if (!e2) for (e2 = true, f2 === d2.length ? d2[f2] = bh(a10, b3, true) : bi(a10, d2[f2], b3, true), f2++; f2 < d2.length; ) bi(a10, d2[f2++], '"$undefined"', true);
        }, error: function(b3) {
          if (!e2) for (e2 = true, f2 === d2.length && (d2[f2] = new a9("pending", null, null)); f2 < d2.length; ) be(a10, d2[f2++], b3);
        } }), c2;
      }
      function bC(a10, b2, c2) {
        var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), e2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
        return { _bundlerConfig: a10, _prefix: b2, _formData: d2, _chunks: /* @__PURE__ */ new Map(), _closed: false, _closedReason: null, _temporaryReferences: c2, _rootArrayContexts: /* @__PURE__ */ new WeakMap(), _arraySizeLimit: e2 };
      }
      function bD(a10) {
        bn(a10, Error("Connection closed."));
      }
      function bE(a10, b2) {
        var c2 = b2.id;
        if ("string" != typeof c2) return null;
        var d2 = a2(a10, c2);
        return a10 = a6(d2), (b2 = b2.bound) instanceof Promise ? Promise.all([b2, a10]).then(function(a11) {
          a11 = a11[0];
          var b3 = a7(d2);
          if (1e3 < a11.length) throw Error("Server Function has too many bound arguments. Received " + a11.length + " but the limit is 1000.");
          return b3.bind.apply(b3, [null].concat(a11));
        }) : a10 ? Promise.resolve(a10).then(function() {
          return a7(d2);
        }) : Promise.resolve(a7(d2));
      }
      function bF(a10, b2, c2, d2) {
        if (bD(a10 = bC(b2, c2, void 0, a10, d2)), (a10 = bo(a10, 0)).then(function() {
        }), "fulfilled" !== a10.status) throw a10.reason;
        return a10.value;
      }
      bA.prototype = {}, bA.prototype[r] = function() {
        return this;
      }, b.createClientModuleProxy = function(a10) {
        return new Proxy(a10 = E({}, a10, false), M);
      }, b.createTemporaryReferenceSet = function() {
        return /* @__PURE__ */ new WeakMap();
      }, b.decodeAction = function(a10, b2) {
        var c2 = new FormData(), d2 = null, e2 = /* @__PURE__ */ new Set();
        return a10.forEach(function(f2, g2) {
          g2.startsWith("$ACTION_") ? g2.startsWith("$ACTION_REF_") ? e2.has(g2) || (e2.add(g2), f2 = bF(a10, b2, f2 = "$ACTION_" + g2.slice(12) + ":"), d2 = bE(b2, f2)) : g2.startsWith("$ACTION_ID_") && !e2.has(g2) && (e2.add(g2), d2 = bE(b2, { id: f2 = g2.slice(11), bound: null })) : c2.append(g2, f2);
        }), null === d2 ? null : d2.then(function(a11) {
          return a11.bind(null, c2);
        });
      }, b.decodeFormState = function(a10, b2, c2) {
        var d2 = b2.get("$ACTION_KEY");
        if ("string" != typeof d2) return Promise.resolve(null);
        var e2 = null;
        if (b2.forEach(function(a11, d3) {
          d3.startsWith("$ACTION_REF_") && (e2 = bF(b2, c2, "$ACTION_" + d3.slice(12) + ":"));
        }), null === e2) return Promise.resolve(null);
        var f2 = e2.id;
        return Promise.resolve(e2.bound).then(function(b3) {
          return null === b3 ? null : [a10, d2, f2, b3.length - 1];
        });
      }, b.decodeReply = function(a10, b2, c2) {
        if ("string" == typeof a10) {
          var d2 = new FormData();
          d2.append("0", a10), a10 = d2;
        }
        return b2 = bo(a10 = bC(b2, "", c2 ? c2.temporaryReferences : void 0, a10, c2 ? c2.arraySizeLimit : void 0), 0), bD(a10), b2;
      }, b.decodeReplyFromAsyncIterable = function(a10, b2, c2) {
        function d2(a11) {
          bn(f2, a11), "function" == typeof e2.throw && e2.throw(a11).then(d2, d2);
        }
        var e2 = a10[r](), f2 = bC(b2, "", c2 ? c2.temporaryReferences : void 0, void 0, c2 ? c2.arraySizeLimit : void 0);
        return e2.next().then(function a11(b3) {
          if (b3.done) bD(f2);
          else {
            var c3 = (b3 = b3.value)[0];
            if ("string" == typeof (b3 = b3[1])) {
              f2._formData.append(c3, b3);
              var g2 = f2._prefix;
              if (c3.startsWith(g2)) {
                var h2 = f2._chunks;
                c3 = +c3.slice(g2.length), (h2 = h2.get(c3)) && bg(f2, h2, b3, c3);
              }
            } else f2._formData.append(c3, b3);
            e2.next().then(a11, d2);
          }
        }, d2), bo(f2, 0);
      }, b.registerClientReference = function(a10, b2, c2) {
        return E(a10, b2 + "#" + c2, false);
      }, b.registerServerReference = function(a10, b2, c2) {
        return Object.defineProperties(a10, { $$typeof: { value: D }, $$id: { value: null === c2 ? b2 : b2 + "#" + c2, configurable: true }, $$bound: { value: null, configurable: true }, bind: { value: H, configurable: true }, toString: I });
      }, b.renderToReadableStream = function(a10, b2, c2) {
        var d2 = new aq(20, a10, b2, c2 ? c2.onError : void 0, c2 ? c2.onPostpone : void 0, U, U, c2 ? c2.identifierPrefix : void 0, c2 ? c2.temporaryReferences : void 0);
        if (c2 && c2.signal) {
          var e2 = c2.signal;
          if (e2.aborted) a1(d2, e2.reason);
          else {
            var f2 = function() {
              a1(d2, e2.reason), e2.removeEventListener("abort", f2);
            };
            e2.addEventListener("abort", f2);
          }
        }
        return new ReadableStream({ type: "bytes", start: function() {
          aZ(d2);
        }, pull: function(a11) {
          a0(d2, a11);
        }, cancel: function(a11) {
          d2.destination = null, a1(d2, a11);
        } }, { highWaterMark: 0 });
      }, b.unstable_prerender = function(a10, b2, c2) {
        return new Promise(function(d2, e2) {
          var f2 = new aq(21, a10, b2, c2 ? c2.onError : void 0, c2 ? c2.onPostpone : void 0, function() {
            d2({ prelude: new ReadableStream({ type: "bytes", pull: function(a11) {
              a0(f2, a11);
            }, cancel: function(a11) {
              f2.destination = null, a1(f2, a11);
            } }, { highWaterMark: 0 }) });
          }, e2, c2 ? c2.identifierPrefix : void 0, c2 ? c2.temporaryReferences : void 0);
          if (c2 && c2.signal) {
            var g2 = c2.signal;
            if (g2.aborted) a1(f2, g2.reason);
            else {
              var h2 = function() {
                a1(f2, g2.reason), g2.removeEventListener("abort", h2);
              };
              g2.addEventListener("abort", h2);
            }
          }
          aZ(f2);
        });
      };
    }, 1916: (a, b, c) => {
      "use strict";
      let d;
      c.r(b), c.d(b, { default: () => bN });
      var e = {};
      async function f() {
        return "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
      }
      c.r(e), c.d(e, { config: () => bJ, default: () => bI });
      let g = null;
      async function h() {
        if ("phase-production-build" === process.env.NEXT_PHASE) return;
        g || (g = f());
        let a10 = await g;
        if (null == a10 ? void 0 : a10.register) try {
          await a10.register();
        } catch (a11) {
          throw a11.message = `An error occurred while loading instrumentation hook: ${a11.message}`, a11;
        }
      }
      async function i(...a10) {
        let b2 = await f();
        try {
          var c2;
          await (null == b2 || null == (c2 = b2.onRequestError) ? void 0 : c2.call(b2, ...a10));
        } catch (a11) {
          console.error("Error in instrumentation.onRequestError:", a11);
        }
      }
      let j = null;
      function k() {
        return j || (j = h()), j;
      }
      function l(a10) {
        return `The edge runtime does not support Node.js '${a10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== c.g.process && (process.env = c.g.process.env, c.g.process = process);
      try {
        Object.defineProperty(globalThis, "__import_unsupported", { value: function(a10) {
          let b2 = new Proxy(function() {
          }, { get(b3, c2) {
            if ("then" === c2) return {};
            throw Object.defineProperty(Error(l(a10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, construct() {
            throw Object.defineProperty(Error(l(a10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, apply(c2, d2, e2) {
            if ("function" == typeof e2[0]) return e2[0](b2);
            throw Object.defineProperty(Error(l(a10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          } });
          return new Proxy({}, { get: () => b2 });
        }, enumerable: false, configurable: false });
      } catch {
      }
      k();
      var m = c(1583), n = c(6206);
      let o = Symbol("response"), p = Symbol("passThrough"), q = Symbol("waitUntil");
      class r {
        constructor(a10, b2) {
          this[p] = false, this[q] = b2 ? { kind: "external", function: b2 } : { kind: "internal", promises: [] };
        }
        respondWith(a10) {
          this[o] || (this[o] = Promise.resolve(a10));
        }
        passThroughOnException() {
          this[p] = true;
        }
        waitUntil(a10) {
          if ("external" === this[q].kind) return (0, this[q].function)(a10);
          this[q].promises.push(a10);
        }
      }
      class s extends r {
        constructor(a10) {
          var b2;
          super(a10.request, null == (b2 = a10.context) ? void 0 : b2.waitUntil), this.sourcePage = a10.page;
        }
        get request() {
          throw Object.defineProperty(new m.CB({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new m.CB({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      var t = c(2742), u = c(388);
      function v(a10, b2) {
        let c2 = "string" == typeof b2 ? new URL(b2) : b2, d2 = new URL(a10, b2), e2 = d2.origin === c2.origin;
        return { url: e2 ? d2.toString().slice(c2.origin.length) : d2.toString(), isRelative: e2 };
      }
      var w = c(4700);
      let x = "next-router-prefetch", y = ["rsc", "next-router-state-tree", x, "next-hmr-refresh", "next-router-segment-prefetch"], z = "_rsc";
      var A = c(4115);
      class B extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new B();
        }
      }
      class C extends Headers {
        constructor(a10) {
          super(), this.headers = new Proxy(a10, { get(b2, c2, d2) {
            if ("symbol" == typeof c2) return A.l.get(b2, c2, d2);
            let e2 = c2.toLowerCase(), f2 = Object.keys(a10).find((a11) => a11.toLowerCase() === e2);
            if (void 0 !== f2) return A.l.get(b2, f2, d2);
          }, set(b2, c2, d2, e2) {
            if ("symbol" == typeof c2) return A.l.set(b2, c2, d2, e2);
            let f2 = c2.toLowerCase(), g2 = Object.keys(a10).find((a11) => a11.toLowerCase() === f2);
            return A.l.set(b2, g2 ?? c2, d2, e2);
          }, has(b2, c2) {
            if ("symbol" == typeof c2) return A.l.has(b2, c2);
            let d2 = c2.toLowerCase(), e2 = Object.keys(a10).find((a11) => a11.toLowerCase() === d2);
            return void 0 !== e2 && A.l.has(b2, e2);
          }, deleteProperty(b2, c2) {
            if ("symbol" == typeof c2) return A.l.deleteProperty(b2, c2);
            let d2 = c2.toLowerCase(), e2 = Object.keys(a10).find((a11) => a11.toLowerCase() === d2);
            return void 0 === e2 || A.l.deleteProperty(b2, e2);
          } });
        }
        static seal(a10) {
          return new Proxy(a10, { get(a11, b2, c2) {
            switch (b2) {
              case "append":
              case "delete":
              case "set":
                return B.callable;
              default:
                return A.l.get(a11, b2, c2);
            }
          } });
        }
        merge(a10) {
          return Array.isArray(a10) ? a10.join(", ") : a10;
        }
        static from(a10) {
          return a10 instanceof Headers ? a10 : new C(a10);
        }
        append(a10, b2) {
          let c2 = this.headers[a10];
          "string" == typeof c2 ? this.headers[a10] = [c2, b2] : Array.isArray(c2) ? c2.push(b2) : this.headers[a10] = b2;
        }
        delete(a10) {
          delete this.headers[a10];
        }
        get(a10) {
          let b2 = this.headers[a10];
          return void 0 !== b2 ? this.merge(b2) : null;
        }
        has(a10) {
          return void 0 !== this.headers[a10];
        }
        set(a10, b2) {
          this.headers[a10] = b2;
        }
        forEach(a10, b2) {
          for (let [c2, d2] of this.entries()) a10.call(b2, d2, c2, this);
        }
        *entries() {
          for (let a10 of Object.keys(this.headers)) {
            let b2 = a10.toLowerCase(), c2 = this.get(b2);
            yield [b2, c2];
          }
        }
        *keys() {
          for (let a10 of Object.keys(this.headers)) {
            let b2 = a10.toLowerCase();
            yield b2;
          }
        }
        *values() {
          for (let a10 of Object.keys(this.headers)) {
            let b2 = this.get(a10);
            yield b2;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      var D = c(7028), E = c(5379);
      class F extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        }
        static callable() {
          throw new F();
        }
      }
      class G {
        static seal(a10) {
          return new Proxy(a10, { get(a11, b2, c2) {
            switch (b2) {
              case "clear":
              case "delete":
              case "set":
                return F.callable;
              default:
                return A.l.get(a11, b2, c2);
            }
          } });
        }
      }
      let H = Symbol.for("next.mutated.cookies");
      class I {
        static wrap(a10, b2) {
          let c2 = new D.VO(new Headers());
          for (let b3 of a10.getAll()) c2.set(b3);
          let d2 = [], e2 = /* @__PURE__ */ new Set(), f2 = () => {
            let a11 = E.J.getStore();
            if (a11 && (a11.pathWasRevalidated = true), d2 = c2.getAll().filter((a12) => e2.has(a12.name)), b2) {
              let a12 = [];
              for (let b3 of d2) {
                let c3 = new D.VO(new Headers());
                c3.set(b3), a12.push(c3.toString());
              }
              b2(a12);
            }
          }, g2 = new Proxy(c2, { get(a11, b3, c3) {
            switch (b3) {
              case H:
                return d2;
              case "delete":
                return function(...b4) {
                  e2.add("string" == typeof b4[0] ? b4[0] : b4[0].name);
                  try {
                    return a11.delete(...b4), g2;
                  } finally {
                    f2();
                  }
                };
              case "set":
                return function(...b4) {
                  e2.add("string" == typeof b4[0] ? b4[0] : b4[0].name);
                  try {
                    return a11.set(...b4), g2;
                  } finally {
                    f2();
                  }
                };
              default:
                return A.l.get(a11, b3, c3);
            }
          } });
          return g2;
        }
      }
      function J(a10, b2) {
        if ("action" !== a10.phase) throw new F();
      }
      var K = c(9183), L = function(a10) {
        return a10.handleRequest = "BaseServer.handleRequest", a10.run = "BaseServer.run", a10.pipe = "BaseServer.pipe", a10.getStaticHTML = "BaseServer.getStaticHTML", a10.render = "BaseServer.render", a10.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", a10.renderToResponse = "BaseServer.renderToResponse", a10.renderToHTML = "BaseServer.renderToHTML", a10.renderError = "BaseServer.renderError", a10.renderErrorToResponse = "BaseServer.renderErrorToResponse", a10.renderErrorToHTML = "BaseServer.renderErrorToHTML", a10.render404 = "BaseServer.render404", a10;
      }(L || {}), M = function(a10) {
        return a10.loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", a10.loadComponents = "LoadComponents.loadComponents", a10;
      }(M || {}), N = function(a10) {
        return a10.getRequestHandler = "NextServer.getRequestHandler", a10.getServer = "NextServer.getServer", a10.getServerRequestHandler = "NextServer.getServerRequestHandler", a10.createServer = "createServer.createServer", a10;
      }(N || {}), O = function(a10) {
        return a10.compression = "NextNodeServer.compression", a10.getBuildId = "NextNodeServer.getBuildId", a10.createComponentTree = "NextNodeServer.createComponentTree", a10.clientComponentLoading = "NextNodeServer.clientComponentLoading", a10.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", a10.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", a10.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", a10.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", a10.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", a10.sendRenderResult = "NextNodeServer.sendRenderResult", a10.proxyRequest = "NextNodeServer.proxyRequest", a10.runApi = "NextNodeServer.runApi", a10.render = "NextNodeServer.render", a10.renderHTML = "NextNodeServer.renderHTML", a10.imageOptimizer = "NextNodeServer.imageOptimizer", a10.getPagePath = "NextNodeServer.getPagePath", a10.getRoutesManifest = "NextNodeServer.getRoutesManifest", a10.findPageComponents = "NextNodeServer.findPageComponents", a10.getFontManifest = "NextNodeServer.getFontManifest", a10.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", a10.getRequestHandler = "NextNodeServer.getRequestHandler", a10.renderToHTML = "NextNodeServer.renderToHTML", a10.renderError = "NextNodeServer.renderError", a10.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", a10.render404 = "NextNodeServer.render404", a10.startResponse = "NextNodeServer.startResponse", a10.route = "route", a10.onProxyReq = "onProxyReq", a10.apiResolver = "apiResolver", a10.internalFetch = "internalFetch", a10;
      }(O || {}), P = function(a10) {
        return a10.startServer = "startServer.startServer", a10;
      }(P || {}), Q = function(a10) {
        return a10.getServerSideProps = "Render.getServerSideProps", a10.getStaticProps = "Render.getStaticProps", a10.renderToString = "Render.renderToString", a10.renderDocument = "Render.renderDocument", a10.createBodyResult = "Render.createBodyResult", a10;
      }(Q || {}), R = function(a10) {
        return a10.renderToString = "AppRender.renderToString", a10.renderToReadableStream = "AppRender.renderToReadableStream", a10.getBodyResult = "AppRender.getBodyResult", a10.fetch = "AppRender.fetch", a10;
      }(R || {}), S = function(a10) {
        return a10.executeRoute = "Router.executeRoute", a10;
      }(S || {}), T = function(a10) {
        return a10.runHandler = "Node.runHandler", a10;
      }(T || {}), U = function(a10) {
        return a10.runHandler = "AppRouteRouteHandlers.runHandler", a10;
      }(U || {}), V = function(a10) {
        return a10.generateMetadata = "ResolveMetadata.generateMetadata", a10.generateViewport = "ResolveMetadata.generateViewport", a10;
      }(V || {}), W = function(a10) {
        return a10.execute = "Middleware.execute", a10;
      }(W || {});
      let X = /* @__PURE__ */ new Set(["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"]), Y = /* @__PURE__ */ new Set(["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"]);
      function Z(a10) {
        return null !== a10 && "object" == typeof a10 && "then" in a10 && "function" == typeof a10.then;
      }
      let $ = process.env.NEXT_OTEL_PERFORMANCE_PREFIX, { context: _, propagation: aa, trace: ab, SpanStatusCode: ac, SpanKind: ad, ROOT_CONTEXT: ae } = d = c(3817);
      class af extends Error {
        constructor(a10, b2) {
          super(), this.bubble = a10, this.result = b2;
        }
      }
      let ag = (a10, b2) => {
        (function(a11) {
          return "object" == typeof a11 && null !== a11 && a11 instanceof af;
        })(b2) && b2.bubble ? a10.setAttribute("next.bubble", true) : (b2 && (a10.recordException(b2), a10.setAttribute("error.type", b2.name)), a10.setStatus({ code: ac.ERROR, message: null == b2 ? void 0 : b2.message })), a10.end();
      }, ah = /* @__PURE__ */ new Map(), ai = d.createContextKey("next.rootSpanId"), aj = 0, ak = { set(a10, b2, c2) {
        a10.push({ key: b2, value: c2 });
      } };
      class al {
        getTracerInstance() {
          return ab.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return _;
        }
        getTracePropagationData() {
          let a10 = _.active(), b2 = [];
          return aa.inject(a10, b2, ak), b2;
        }
        getActiveScopeSpan() {
          return ab.getSpan(null == _ ? void 0 : _.active());
        }
        withPropagatedContext(a10, b2, c2) {
          let d2 = _.active();
          if (ab.getSpanContext(d2)) return b2();
          let e2 = aa.extract(d2, a10, c2);
          return _.with(e2, b2);
        }
        trace(...a10) {
          var b2;
          let [c2, d2, e2] = a10, { fn: f2, options: g2 } = "function" == typeof d2 ? { fn: d2, options: {} } : { fn: e2, options: { ...d2 } }, h2 = g2.spanName ?? c2;
          if (!X.has(c2) && "1" !== process.env.NEXT_OTEL_VERBOSE || g2.hideSpan) return f2();
          let i2 = this.getSpanContext((null == g2 ? void 0 : g2.parentSpan) ?? this.getActiveScopeSpan()), j2 = false;
          i2 ? (null == (b2 = ab.getSpanContext(i2)) ? void 0 : b2.isRemote) && (j2 = true) : (i2 = (null == _ ? void 0 : _.active()) ?? ae, j2 = true);
          let k2 = aj++;
          return g2.attributes = { "next.span_name": h2, "next.span_type": c2, ...g2.attributes }, _.with(i2.setValue(ai, k2), () => this.getTracerInstance().startActiveSpan(h2, g2, (a11) => {
            let b3;
            $ && c2 && Y.has(c2) && (b3 = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0);
            let d3 = false, e3 = () => {
              !d3 && (d3 = true, ah.delete(k2), b3 && performance.measure(`${$}:next-${(c2.split(".").pop() || "").replace(/[A-Z]/g, (a12) => "-" + a12.toLowerCase())}`, { start: b3, end: performance.now() }));
            };
            if (j2 && ah.set(k2, new Map(Object.entries(g2.attributes ?? {}))), f2.length > 1) try {
              return f2(a11, (b4) => ag(a11, b4));
            } catch (b4) {
              throw ag(a11, b4), b4;
            } finally {
              e3();
            }
            try {
              let b4 = f2(a11);
              if (Z(b4)) return b4.then((b5) => (a11.end(), b5)).catch((b5) => {
                throw ag(a11, b5), b5;
              }).finally(e3);
              return a11.end(), e3(), b4;
            } catch (b4) {
              throw ag(a11, b4), e3(), b4;
            }
          }));
        }
        wrap(...a10) {
          let b2 = this, [c2, d2, e2] = 3 === a10.length ? a10 : [a10[0], {}, a10[1]];
          return X.has(c2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let a11 = d2;
            "function" == typeof a11 && "function" == typeof e2 && (a11 = a11.apply(this, arguments));
            let f2 = arguments.length - 1, g2 = arguments[f2];
            if ("function" != typeof g2) return b2.trace(c2, a11, () => e2.apply(this, arguments));
            {
              let d3 = b2.getContext().bind(_.active(), g2);
              return b2.trace(c2, a11, (a12, b3) => (arguments[f2] = function(a13) {
                return null == b3 || b3(a13), d3.apply(this, arguments);
              }, e2.apply(this, arguments)));
            }
          } : e2;
        }
        startSpan(...a10) {
          let [b2, c2] = a10, d2 = this.getSpanContext((null == c2 ? void 0 : c2.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(b2, c2, d2);
        }
        getSpanContext(a10) {
          return a10 ? ab.setSpan(_.active(), a10) : void 0;
        }
        getRootSpanAttributes() {
          let a10 = _.active().getValue(ai);
          return ah.get(a10);
        }
        setRootSpanAttribute(a10, b2) {
          let c2 = _.active().getValue(ai), d2 = ah.get(c2);
          d2 && d2.set(a10, b2);
        }
      }
      let am = (() => {
        let a10 = new al();
        return () => a10;
      })(), an = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(an);
      class ao {
        constructor(a10, b2, c2, d2) {
          var e2;
          let f2 = a10 && function(a11, b3) {
            let c3 = C.from(a11.headers);
            return { isOnDemandRevalidate: c3.get(K.kz) === b3.previewModeId, revalidateOnlyGenerated: c3.has(K.r4) };
          }(b2, a10).isOnDemandRevalidate, g2 = null == (e2 = c2.get(an)) ? void 0 : e2.value;
          this._isEnabled = !!(!f2 && g2 && a10 && g2 === a10.previewModeId), this._previewModeId = null == a10 ? void 0 : a10.previewModeId, this._mutableCookies = d2;
        }
        get isEnabled() {
          return this._isEnabled;
        }
        enable() {
          if (!this._previewModeId) throw Object.defineProperty(Error("Invariant: previewProps missing previewModeId this should never happen"), "__NEXT_ERROR_CODE", { value: "E93", enumerable: false, configurable: true });
          this._mutableCookies.set({ name: an, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" }), this._isEnabled = true;
        }
        disable() {
          this._mutableCookies.set({ name: an, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) }), this._isEnabled = false;
        }
      }
      function ap(a10, b2) {
        if ("x-middleware-set-cookie" in a10.headers && "string" == typeof a10.headers["x-middleware-set-cookie"]) {
          let c2 = a10.headers["x-middleware-set-cookie"], d2 = new Headers();
          for (let a11 of (0, n.RD)(c2)) d2.append("set-cookie", a11);
          for (let a11 of new D.VO(d2).getAll()) b2.set(a11);
        }
      }
      var aq = c(1128), ar = c(1213), as = c.n(ar), at = c(9809), au = c(3788);
      c(5356).Buffer, new au.q(52428800, (a10) => a10.size), process.env.NEXT_PRIVATE_DEBUG_CACHE && console.debug.bind(console, "DefaultCacheHandler:"), process.env.NEXT_PRIVATE_DEBUG_CACHE && ((a10, ...b2) => {
        console.log(`use-cache: ${a10}`, ...b2);
      }), Symbol.for("@next/cache-handlers");
      let av = Symbol.for("@next/cache-handlers-map"), aw = Symbol.for("@next/cache-handlers-set"), ax = globalThis;
      function ay() {
        if (ax[av]) return ax[av].entries();
      }
      async function az(a10, b2) {
        if (!a10) return b2();
        let c2 = aA(a10);
        try {
          return await b2();
        } finally {
          let b3 = function(a11, b4) {
            let c3 = new Set(a11.pendingRevalidatedTags), d2 = new Set(a11.pendingRevalidateWrites);
            return { pendingRevalidatedTags: b4.pendingRevalidatedTags.filter((a12) => !c3.has(a12)), pendingRevalidates: Object.fromEntries(Object.entries(b4.pendingRevalidates).filter(([b5]) => !(b5 in a11.pendingRevalidates))), pendingRevalidateWrites: b4.pendingRevalidateWrites.filter((a12) => !d2.has(a12)) };
          }(c2, aA(a10));
          await aC(a10, b3);
        }
      }
      function aA(a10) {
        return { pendingRevalidatedTags: a10.pendingRevalidatedTags ? [...a10.pendingRevalidatedTags] : [], pendingRevalidates: { ...a10.pendingRevalidates }, pendingRevalidateWrites: a10.pendingRevalidateWrites ? [...a10.pendingRevalidateWrites] : [] };
      }
      async function aB(a10, b2) {
        if (0 === a10.length) return;
        let c2 = [];
        b2 && c2.push(b2.revalidateTag(a10));
        let d2 = function() {
          if (ax[aw]) return ax[aw].values();
        }();
        if (d2) for (let b3 of d2) c2.push(b3.expireTags(...a10));
        await Promise.all(c2);
      }
      async function aC(a10, b2) {
        let c2 = (null == b2 ? void 0 : b2.pendingRevalidatedTags) ?? a10.pendingRevalidatedTags ?? [], d2 = (null == b2 ? void 0 : b2.pendingRevalidates) ?? a10.pendingRevalidates ?? {}, e2 = (null == b2 ? void 0 : b2.pendingRevalidateWrites) ?? a10.pendingRevalidateWrites ?? [];
        return Promise.all([aB(c2, a10.incrementalCache), ...Object.values(d2), ...e2]);
      }
      var aD = c(7669), aE = c(5566);
      class aF {
        constructor({ waitUntil: a10, onClose: b2, onTaskError: c2 }) {
          this.workUnitStores = /* @__PURE__ */ new Set(), this.waitUntil = a10, this.onClose = b2, this.onTaskError = c2, this.callbackQueue = new (as())(), this.callbackQueue.pause();
        }
        after(a10) {
          if (Z(a10)) this.waitUntil || aG(), this.waitUntil(a10.catch((a11) => this.reportTaskError("promise", a11)));
          else if ("function" == typeof a10) this.addCallback(a10);
          else throw Object.defineProperty(Error("`after()`: Argument must be a promise or a function"), "__NEXT_ERROR_CODE", { value: "E50", enumerable: false, configurable: true });
        }
        addCallback(a10) {
          this.waitUntil || aG();
          let b2 = aq.FP.getStore();
          b2 && this.workUnitStores.add(b2);
          let c2 = aE.Z.getStore(), d2 = c2 ? c2.rootTaskSpawnPhase : null == b2 ? void 0 : b2.phase;
          this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
          let e2 = (0, aD.cg)(async () => {
            try {
              await aE.Z.run({ rootTaskSpawnPhase: d2 }, () => a10());
            } catch (a11) {
              this.reportTaskError("function", a11);
            }
          });
          this.callbackQueue.add(e2);
        }
        async runCallbacksOnClose() {
          return await new Promise((a10) => this.onClose(a10)), this.runCallbacks();
        }
        async runCallbacks() {
          if (0 === this.callbackQueue.size) return;
          for (let a11 of this.workUnitStores) a11.phase = "after";
          let a10 = E.J.getStore();
          if (!a10) throw Object.defineProperty(new at.z("Missing workStore in AfterContext.runCallbacks"), "__NEXT_ERROR_CODE", { value: "E547", enumerable: false, configurable: true });
          return az(a10, () => (this.callbackQueue.start(), this.callbackQueue.onIdle()));
        }
        reportTaskError(a10, b2) {
          if (console.error("promise" === a10 ? "A promise passed to `after()` rejected:" : "An error occurred in a function passed to `after()`:", b2), this.onTaskError) try {
            null == this.onTaskError || this.onTaskError.call(this, b2);
          } catch (a11) {
            console.error(Object.defineProperty(new at.z("`onTaskError` threw while handling an error thrown from an `after` task", { cause: a11 }), "__NEXT_ERROR_CODE", { value: "E569", enumerable: false, configurable: true }));
          }
        }
      }
      function aG() {
        throw Object.defineProperty(Error("`after()` will not work correctly, because `waitUntil` is not available in the current environment."), "__NEXT_ERROR_CODE", { value: "E91", enumerable: false, configurable: true });
      }
      function aH(a10) {
        let b2, c2 = { then: (d2, e2) => (b2 || (b2 = a10()), b2.then((a11) => {
          c2.value = a11;
        }).catch(() => {
        }), b2.then(d2, e2)) };
        return c2;
      }
      class aI {
        onClose(a10) {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot subscribe to a closed CloseController"), "__NEXT_ERROR_CODE", { value: "E365", enumerable: false, configurable: true });
          this.target.addEventListener("close", a10), this.listeners++;
        }
        dispatchClose() {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot close a CloseController multiple times"), "__NEXT_ERROR_CODE", { value: "E229", enumerable: false, configurable: true });
          this.listeners > 0 && this.target.dispatchEvent(new Event("close")), this.isClosed = true;
        }
        constructor() {
          this.target = new EventTarget(), this.listeners = 0, this.isClosed = false;
        }
      }
      function aJ() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || "", previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      let aK = Symbol.for("@next/request-context");
      async function aL(a10, b2, c2) {
        let d2 = [], e2 = c2 && c2.size > 0;
        for (let b3 of ((a11) => {
          let b4 = ["/layout"];
          if (a11.startsWith("/")) {
            let c3 = a11.split("/");
            for (let a12 = 1; a12 < c3.length + 1; a12++) {
              let d3 = c3.slice(0, a12).join("/");
              d3 && (d3.endsWith("/page") || d3.endsWith("/route") || (d3 = `${d3}${!d3.endsWith("/") ? "/" : ""}layout`), b4.push(d3));
            }
          }
          return b4;
        })(a10)) b3 = `${K.gW}${b3}`, d2.push(b3);
        if (b2.pathname && !e2) {
          let a11 = `${K.gW}${b2.pathname}`;
          d2.push(a11);
        }
        return { tags: d2, expirationsByCacheKind: function(a11) {
          let b3 = /* @__PURE__ */ new Map(), c3 = ay();
          if (c3) for (let [d3, e3] of c3) "getExpiration" in e3 && b3.set(d3, aH(async () => e3.getExpiration(...a11)));
          return b3;
        }(d2) };
      }
      class aM extends t.J {
        constructor(a10) {
          super(a10.input, a10.init), this.sourcePage = a10.page;
        }
        get request() {
          throw Object.defineProperty(new m.CB({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new m.CB({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        waitUntil() {
          throw Object.defineProperty(new m.CB({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      let aN = { keys: (a10) => Array.from(a10.keys()), get: (a10, b2) => a10.get(b2) ?? void 0 }, aO = (a10, b2) => am().withPropagatedContext(a10.headers, b2, aN), aP = false;
      async function aQ(a10) {
        var b2;
        let d2, e2;
        if (!aP && (aP = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
          let { interceptTestApis: a11, wrapRequestHandler: b3 } = c(7720);
          a11(), aO = b3(aO);
        }
        await k();
        let f2 = void 0 !== globalThis.__BUILD_MANIFEST;
        a10.request.url = a10.request.url.replace(/\.rsc($|\?)/, "$1");
        let g2 = a10.bypassNextUrl ? new URL(a10.request.url) : new w.X(a10.request.url, { headers: a10.request.headers, nextConfig: a10.request.nextConfig });
        for (let a11 of [...g2.searchParams.keys()]) {
          let b3 = g2.searchParams.getAll(a11), c2 = (0, n.wN)(a11);
          if (c2) {
            for (let a12 of (g2.searchParams.delete(c2), b3)) g2.searchParams.append(c2, a12);
            g2.searchParams.delete(a11);
          }
        }
        let h2 = process.env.__NEXT_BUILD_ID || "";
        "buildId" in g2 && (h2 = g2.buildId || "", g2.buildId = "");
        let i2 = (0, n.p$)(a10.request.headers), j2 = i2.has("x-nextjs-data"), l2 = "1" === i2.get("rsc");
        j2 && "/index" === g2.pathname && (g2.pathname = "/");
        let m2 = /* @__PURE__ */ new Map();
        if (!f2) for (let a11 of y) {
          let b3 = i2.get(a11);
          null !== b3 && (m2.set(a11, b3), i2.delete(a11));
        }
        let o2 = g2.searchParams.get(z), p2 = new aM({ page: a10.page, input: function(a11) {
          let b3 = "string" == typeof a11, c2 = b3 ? new URL(a11) : a11;
          return c2.searchParams.delete(z), b3 ? c2.toString() : c2;
        }(g2).toString(), init: { body: a10.request.body, headers: i2, method: a10.request.method, nextConfig: a10.request.nextConfig, signal: a10.request.signal } });
        j2 && Object.defineProperty(p2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCacheShared && a10.IncrementalCache && (globalThis.__incrementalCache = new a10.IncrementalCache({ CurCacheHandler: a10.incrementalCacheHandler, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: a10.request.headers, getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: aJ() }) }));
        let r2 = a10.request.waitUntil ?? (null == (b2 = function() {
          let a11 = globalThis[aK];
          return null == a11 ? void 0 : a11.get();
        }()) ? void 0 : b2.waitUntil), t2 = new s({ request: p2, page: a10.page, context: r2 ? { waitUntil: r2 } : void 0 });
        if ((d2 = await aO(p2, () => {
          if ("/middleware" === a10.page || "/src/middleware" === a10.page) {
            let b3 = t2.waitUntil.bind(t2), c2 = new aI();
            return am().trace(W.execute, { spanName: `middleware ${p2.method} ${p2.nextUrl.pathname}`, attributes: { "http.target": p2.nextUrl.pathname, "http.method": p2.method } }, async () => {
              try {
                var d3, f3, g3, i3, j3, k2;
                let l3 = aJ(), m3 = await aL("/", p2.nextUrl, null), n2 = (j3 = p2.nextUrl, k2 = (a11) => {
                  e2 = a11;
                }, function(a11, b4, c3, d4, e3, f4, g4, h3, i4, j4, k3, l4) {
                  function m4(a12) {
                    c3 && c3.setHeader("Set-Cookie", a12);
                  }
                  let n3 = {};
                  return { type: "request", phase: a11, implicitTags: f4, url: { pathname: d4.pathname, search: d4.search ?? "" }, rootParams: e3, get headers() {
                    return n3.headers || (n3.headers = function(a12) {
                      let b5 = C.from(a12);
                      for (let a13 of y) b5.delete(a13);
                      return C.seal(b5);
                    }(b4.headers)), n3.headers;
                  }, get cookies() {
                    if (!n3.cookies) {
                      let a12 = new D.tm(C.from(b4.headers));
                      ap(b4, a12), n3.cookies = G.seal(a12);
                    }
                    return n3.cookies;
                  }, set cookies(value) {
                    n3.cookies = value;
                  }, get mutableCookies() {
                    if (!n3.mutableCookies) {
                      let a12 = function(a13, b5) {
                        let c4 = new D.tm(C.from(a13));
                        return I.wrap(c4, b5);
                      }(b4.headers, g4 || (c3 ? m4 : void 0));
                      ap(b4, a12), n3.mutableCookies = a12;
                    }
                    return n3.mutableCookies;
                  }, get userspaceMutableCookies() {
                    return n3.userspaceMutableCookies || (n3.userspaceMutableCookies = function(a12) {
                      let b5 = new Proxy(a12.mutableCookies, { get(c4, d5, e4) {
                        switch (d5) {
                          case "delete":
                            return function(...d6) {
                              return J(a12, "cookies().delete"), c4.delete(...d6), b5;
                            };
                          case "set":
                            return function(...d6) {
                              return J(a12, "cookies().set"), c4.set(...d6), b5;
                            };
                          default:
                            return A.l.get(c4, d5, e4);
                        }
                      } });
                      return b5;
                    }(this)), n3.userspaceMutableCookies;
                  }, get draftMode() {
                    return n3.draftMode || (n3.draftMode = new ao(i4, b4, this.cookies, this.mutableCookies)), n3.draftMode;
                  }, renderResumeDataCache: h3 ?? null, isHmrRefresh: j4, serverComponentsHmrCache: k3 || globalThis.__serverComponentsHmrCache, devFallbackParams: null };
                }("action", p2, void 0, j3, {}, m3, k2, void 0, l3, false, void 0, null)), o3 = function({ page: a11, renderOpts: b4, isPrefetchRequest: c3, buildId: d4, previouslyRevalidatedTags: e3 }) {
                  var f4;
                  let g4 = !b4.shouldWaitOnAllReady && !b4.supportsDynamicResponse && !b4.isDraftMode && !b4.isPossibleServerAction, h3 = b4.dev ?? false, i4 = h3 || g4 && (!!process.env.NEXT_DEBUG_BUILD || "1" === process.env.NEXT_SSG_FETCH_METRICS), j4 = { isStaticGeneration: g4, page: a11, route: (f4 = a11.split("/").reduce((a12, b5, c4, d5) => b5 ? "(" === b5[0] && b5.endsWith(")") || "@" === b5[0] || ("page" === b5 || "route" === b5) && c4 === d5.length - 1 ? a12 : a12 + "/" + b5 : a12, "")).startsWith("/") ? f4 : "/" + f4, incrementalCache: b4.incrementalCache || globalThis.__incrementalCache, cacheLifeProfiles: b4.cacheLifeProfiles, isRevalidate: b4.isRevalidate, isBuildTimePrerendering: b4.nextExport, hasReadableErrorStacks: b4.hasReadableErrorStacks, fetchCache: b4.fetchCache, isOnDemandRevalidate: b4.isOnDemandRevalidate, isDraftMode: b4.isDraftMode, isPrefetchRequest: c3, buildId: d4, reactLoadableManifest: (null == b4 ? void 0 : b4.reactLoadableManifest) || {}, assetPrefix: (null == b4 ? void 0 : b4.assetPrefix) || "", afterContext: function(a12) {
                    let { waitUntil: b5, onClose: c4, onAfterTaskError: d5 } = a12;
                    return new aF({ waitUntil: b5, onClose: c4, onTaskError: d5 });
                  }(b4), cacheComponentsEnabled: b4.experimental.cacheComponents, dev: h3, previouslyRevalidatedTags: e3, refreshTagsByCacheKind: function() {
                    let a12 = /* @__PURE__ */ new Map(), b5 = ay();
                    if (b5) for (let [c4, d5] of b5) "refreshTags" in d5 && a12.set(c4, aH(async () => d5.refreshTags()));
                    return a12;
                  }(), runInCleanSnapshot: (0, aD.$p)(), shouldTrackFetchMetrics: i4 };
                  return b4.store = j4, j4;
                }({ page: "/", renderOpts: { cacheLifeProfiles: null == (f3 = a10.request.nextConfig) || null == (d3 = f3.experimental) ? void 0 : d3.cacheLife, experimental: { isRoutePPREnabled: false, cacheComponents: false, authInterrupts: !!(null == (i3 = a10.request.nextConfig) || null == (g3 = i3.experimental) ? void 0 : g3.authInterrupts) }, supportsDynamicResponse: true, waitUntil: b3, onClose: c2.onClose.bind(c2), onAfterTaskError: void 0 }, isPrefetchRequest: "1" === p2.headers.get(x), buildId: h2 ?? "", previouslyRevalidatedTags: [] });
                return await E.J.run(o3, () => aq.FP.run(n2, a10.handler, p2, t2));
              } finally {
                setTimeout(() => {
                  c2.dispatchClose();
                }, 0);
              }
            });
          }
          return a10.handler(p2, t2);
        })) && !(d2 instanceof Response)) throw Object.defineProperty(TypeError("Expected an instance of Response to be returned"), "__NEXT_ERROR_CODE", { value: "E567", enumerable: false, configurable: true });
        d2 && e2 && d2.headers.set("set-cookie", e2);
        let B2 = null == d2 ? void 0 : d2.headers.get("x-middleware-rewrite");
        if (d2 && B2 && (l2 || !f2)) {
          let b3 = new w.X(B2, { forceLocale: true, headers: a10.request.headers, nextConfig: a10.request.nextConfig });
          f2 || b3.host !== p2.nextUrl.host || (b3.buildId = h2 || b3.buildId, d2.headers.set("x-middleware-rewrite", String(b3)));
          let { url: c2, isRelative: e3 } = v(b3.toString(), g2.toString());
          !f2 && j2 && d2.headers.set("x-nextjs-rewrite", c2), l2 && e3 && (g2.pathname !== b3.pathname && d2.headers.set("x-nextjs-rewritten-path", b3.pathname), g2.search !== b3.search && d2.headers.set("x-nextjs-rewritten-query", b3.search.slice(1)));
        }
        if (d2 && B2 && l2 && o2) {
          let a11 = new URL(B2);
          a11.searchParams.has(z) || (a11.searchParams.set(z, o2), d2.headers.set("x-middleware-rewrite", a11.toString()));
        }
        let F2 = null == d2 ? void 0 : d2.headers.get("Location");
        if (d2 && F2 && !f2) {
          let b3 = new w.X(F2, { forceLocale: false, headers: a10.request.headers, nextConfig: a10.request.nextConfig });
          d2 = new Response(d2.body, d2), b3.host === g2.host && (b3.buildId = h2 || b3.buildId, d2.headers.set("Location", b3.toString())), j2 && (d2.headers.delete("Location"), d2.headers.set("x-nextjs-redirect", v(b3.toString(), g2.toString()).url));
        }
        let H2 = d2 || u.R.next(), K2 = H2.headers.get("x-middleware-override-headers"), L2 = [];
        if (K2) {
          for (let [a11, b3] of m2) H2.headers.set(`x-middleware-request-${a11}`, b3), L2.push(a11);
          L2.length > 0 && H2.headers.set("x-middleware-override-headers", K2 + "," + L2.join(","));
        }
        return { response: H2, waitUntil: ("internal" === t2[q].kind ? Promise.all(t2[q].promises).then(() => {
        }) : void 0) ?? Promise.resolve(), fetchMetrics: p2.fetchMetrics };
      }
      var aR = c(2838);
      function aS() {
        return (aS = Object.assign ? Object.assign.bind() : function(a10) {
          for (var b2 = 1; b2 < arguments.length; b2++) {
            var c2 = arguments[b2];
            for (var d2 in c2) ({}).hasOwnProperty.call(c2, d2) && (a10[d2] = c2[d2]);
          }
          return a10;
        }).apply(null, arguments);
      }
      var aT = c(7814);
      function aU(a10, b2) {
        var c2;
        return "never" !== b2.mode && (null == (c2 = b2.prefixes) ? void 0 : c2[a10]) || "/" + a10;
      }
      function aV(a10) {
        return "function" == typeof a10.then;
      }
      let aW = (0, c(6637).YR)(function() {
        throw Error(`Attempted to call the default export of "/Users/safwan_azman/Documents/personal/boycott-israel/node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.`);
      }, "/Users/safwan_azman/Documents/personal/boycott-israel/node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js", "default");
      var aX = c(1378), aY = c(4944);
      let aZ = c(7918).s;
      function a$(a10, b2, c2) {
        void 0 === c2 && (c2 = aX.Q.TemporaryRedirect);
        let d2 = Object.defineProperty(Error(aY.oJ), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        return d2.digest = aY.oJ + ";" + b2 + ";" + a10 + ";" + c2 + ";", d2;
      }
      var a_ = c(66);
      let a0 = "" + a_.s8 + ";404";
      function a1() {
        let a10 = Object.defineProperty(Error(a0), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        throw a10.digest = a0, a10;
      }
      a_.s8, a_.s8, c(9515).X;
      var a2 = c(3985), a3 = c(107), a4 = c(4979), a5 = c(5770);
      let a6 = { current: null }, a7 = "function" == typeof aT.cache ? aT.cache : (a10) => a10, a8 = console.warn;
      function a9(a10) {
        return function(...b2) {
          a8(a10(...b2));
        };
      }
      a7((a10) => {
        try {
          a8(a6.current);
        } finally {
          a6.current = null;
        }
      });
      var ba = c(8823);
      function bb() {
        let a10 = "headers", b2 = E.J.getStore(), c2 = aq.FP.getStore();
        if (b2) {
          if (c2 && "after" === c2.phase && !(0, ba.iC)()) throw Object.defineProperty(Error(`Route ${b2.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", { value: "E367", enumerable: false, configurable: true });
          if (b2.forceStatic) return bd(C.seal(new Headers({})));
          if (c2) switch (c2.type) {
            case "cache": {
              let a11 = Object.defineProperty(Error(`Route ${b2.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", { value: "E304", enumerable: false, configurable: true });
              throw Error.captureStackTrace(a11, bb), b2.invalidDynamicUsageError ??= a11, a11;
            }
            case "private-cache": {
              let a11 = Object.defineProperty(Error(`Route ${b2.route} used "headers" inside "use cache: private". Accessing "headers" inside a private cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", { value: "E742", enumerable: false, configurable: true });
              throw Error.captureStackTrace(a11, bb), b2.invalidDynamicUsageError ??= a11, a11;
            }
            case "unstable-cache":
              throw Object.defineProperty(Error(`Route ${b2.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", { value: "E127", enumerable: false, configurable: true });
          }
          if (b2.dynamicShouldError) throw Object.defineProperty(new a4.f(`Route ${b2.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", { value: "E525", enumerable: false, configurable: true });
          if (c2) switch (c2.type) {
            case "prerender":
            case "prerender-runtime":
              var d2 = b2, e2 = c2;
              let f2 = bc.get(e2);
              if (f2) return f2;
              let g2 = (0, a5.W5)(e2.renderSignal, d2.route, "`headers()`");
              return bc.set(e2, g2), g2;
            case "prerender-client":
              let h2 = "`headers`";
              throw Object.defineProperty(new at.z(`${h2} must not be used within a client component. Next.js should be preventing ${h2} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", { value: "E693", enumerable: false, configurable: true });
            case "prerender-ppr":
              return (0, a3.Ui)(b2.route, a10, c2.dynamicTracking);
            case "prerender-legacy":
              return (0, a3.xI)(a10, b2, c2);
            case "request":
              return (0, a3.Pk)(c2), bd(c2.headers);
          }
        }
        (0, aq.M1)(a10);
      }
      /* @__PURE__ */ new WeakMap(), a9(function(a10, b2) {
        let c2 = a10 ? `Route "${a10}" ` : "This route ";
        return Object.defineProperty(Error(`${c2}used ${b2}. \`cookies()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E223", enumerable: false, configurable: true });
      });
      let bc = /* @__PURE__ */ new WeakMap();
      function bd(a10) {
        let b2 = bc.get(a10);
        if (b2) return b2;
        let c2 = Promise.resolve(a10);
        return bc.set(a10, c2), Object.defineProperties(c2, { append: { value: a10.append.bind(a10) }, delete: { value: a10.delete.bind(a10) }, get: { value: a10.get.bind(a10) }, has: { value: a10.has.bind(a10) }, set: { value: a10.set.bind(a10) }, getSetCookie: { value: a10.getSetCookie.bind(a10) }, forEach: { value: a10.forEach.bind(a10) }, keys: { value: a10.keys.bind(a10) }, values: { value: a10.values.bind(a10) }, entries: { value: a10.entries.bind(a10) }, [Symbol.iterator]: { value: a10[Symbol.iterator].bind(a10) } }), c2;
      }
      a9(function(a10, b2) {
        let c2 = a10 ? `Route "${a10}" ` : "This route ";
        return Object.defineProperty(Error(`${c2}used ${b2}. \`headers()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E277", enumerable: false, configurable: true });
      }), c(6159), /* @__PURE__ */ new WeakMap(), a9(function(a10, b2) {
        let c2 = a10 ? `Route "${a10}" ` : "This route ";
        return Object.defineProperty(Error(`${c2}used ${b2}. \`draftMode()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E377", enumerable: false, configurable: true });
      });
      let be = "X-NEXT-INTL-LOCALE", bf = (0, aT.cache)(function() {
        return { locale: void 0 };
      });
      function bg() {
        return bf().locale;
      }
      let bh = (0, aT.cache)(async function() {
        let a10 = bb();
        return aV(a10) ? await a10 : a10;
      }), bi = (0, aT.cache)(async function() {
        let a10;
        try {
          a10 = (await bh()).get(be) || void 0;
        } catch (a11) {
          if (a11 instanceof Error && "DYNAMIC_SERVER_USAGE" === a11.digest) {
            let b2 = Error("Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, you can use the `setRequestLocale` API to enable static rendering, see https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering", { cause: a11 });
            throw b2.digest = a11.digest, b2;
          }
          throw a11;
        }
        return a10;
      });
      async function bj() {
        return bg() || await bi();
      }
      let bk = (0, aT.cache)(function() {
        let a10;
        try {
          a10 = bb().get(be);
        } catch (a11) {
          throw a11 instanceof Error && "DYNAMIC_SERVER_USAGE" === a11.digest ? Error("Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, you can use the `setRequestLocale` API to enable static rendering, see https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering", { cause: a11 }) : a11;
        }
        return a10 || (console.error("\nUnable to find `next-intl` locale because the middleware didn't run on this request. See https://next-intl.dev/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result.\n"), a1()), a10;
      }), bl = ["en", "my"], bm = async ({ requestLocale: a10 }) => {
        let b2 = await a10, d2 = b2 && bl.includes(b2) ? b2 : "en";
        return { locale: d2, messages: (await c(1691)(`./${d2}.json`)).default };
      }, bn = false, bo = false, bp = (0, aT.cache)(function() {
        return /* @__PURE__ */ new Date();
      }), bq = (0, aT.cache)(function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }), br = (0, aT.cache)(async function(a10, b2) {
        if ("function" != typeof a10) throw Error("Invalid i18n request configuration detected.\n\nPlease verify that:\n1. In case you've specified a custom location in your Next.js config, make sure that the path is correct.\n2. You have a default export in your i18n request configuration file.\n\nSee also: https://next-intl.dev/docs/usage/configuration#i18n-request\n");
        let c2 = { get locale() {
          return bo || (console.warn("\nThe `locale` parameter in `getRequestConfig` is deprecated, please switch to `await requestLocale`. See https://next-intl.dev/blog/next-intl-3-22#await-request-locale\n"), bo = true), b2 || bg() || bk();
        }, get requestLocale() {
          return b2 ? Promise.resolve(b2) : bj();
        } }, d2 = a10(c2);
        aV(d2) && (d2 = await d2);
        let e2 = d2.locale;
        return e2 || (bn || (console.error("\nA `locale` is expected to be returned from `getRequestConfig`, but none was returned. This will be an error in the next major version of next-intl.\n\nSee: https://next-intl.dev/blog/next-intl-3-22#await-request-locale\n"), bn = true), (e2 = await c2.requestLocale) || (console.error("\nUnable to find `next-intl` locale because the middleware didn't run on this request and no `locale` was returned in `getRequestConfig`. See https://next-intl.dev/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result.\n"), a1())), { ...d2, locale: e2, now: d2.now || bp(), timeZone: d2.timeZone || bq() };
      }), bs = (0, aT.cache)(a2.CB), bt = (0, aT.cache)(a2.gZ), bu = (0, aT.cache)(async function(a10) {
        let b2 = await br(bm, a10);
        return { ...(0, a2.TD)(b2), _formatters: bs(bt()) };
      }), bv = (0, aT.cache)(async function() {
        return Promise.resolve((await bu()).locale);
      });
      async function bw(a10) {
        let { locale: b2, localePrefix: c2, ...d2 } = a10, e2 = b2 || await bv(), f2 = aU(e2, c2);
        return aT.createElement(aW, aS({ locale: e2, localePrefixMode: c2.mode, prefix: f2 }, d2));
      }
      function bx(a10) {
        return function(b2) {
          let c2, d2 = aU(b2.locale, b2.localePrefix), e2 = "never" === b2.localePrefix.mode || ("object" == typeof (g2 = f2 = b2.pathname) ? null != g2.host || null != g2.hostname : /^[a-z]+:/i.test(g2)) || function(a11) {
            let b3 = "object" == typeof a11 ? a11.pathname : a11;
            return null != b3 && !b3.startsWith("/");
          }(f2) ? b2.pathname : (h2 = b2.pathname, c2 = d2, /^\/(\?.*)?$/.test(h2) && (h2 = h2.slice(1)), c2 += h2);
          for (var f2, g2, h2, i2 = arguments.length, j2 = Array(i2 > 1 ? i2 - 1 : 0), k2 = 1; k2 < i2; k2++) j2[k2 - 1] = arguments[k2];
          return a10(e2, ...j2);
        };
      }
      let by = bx(function(a10, b2) {
        var c2;
        throw null != b2 || (b2 = (null == aZ || null == (c2 = aZ.getStore()) ? void 0 : c2.isAction) ? aY.zB.push : aY.zB.replace), a$(a10, b2, aX.Q.TemporaryRedirect);
      }), bz = bx(function(a10, b2) {
        throw void 0 === b2 && (b2 = aY.zB.replace), a$(a10, b2, aX.Q.PermanentRedirect);
      });
      function bA(a10) {
        return function(b2) {
          let c2 = bg() || bk();
          for (var d2 = arguments.length, e2 = Array(d2 > 1 ? d2 - 1 : 0), f2 = 1; f2 < d2; f2++) e2[f2 - 1] = arguments[f2];
          return a10({ ...b2, locale: c2 }, ...e2);
        };
      }
      let bB = bA(by), bC = bA(bz), bD = ["en", "my"], { Link: bE, redirect: bF, usePathname: bG, useRouter: bH } = function(a10) {
        var b2, c2;
        let d2 = "object" == typeof (b2 = null == a10 ? void 0 : a10.localePrefix) ? b2 : { mode: b2 || "always" }, e2 = !(null != (c2 = null == a10 ? void 0 : a10.localeCookie) && !c2) && { name: "NEXT_LOCALE", maxAge: 31536e3, sameSite: "lax", ..."object" == typeof c2 && c2 };
        function f2(a11) {
          return () => {
            throw Error("`".concat(a11, "` is not supported in Server Components. You can use this hook if you convert the component to a Client Component."));
          };
        }
        return { Link: function(a11) {
          return aT.createElement(bw, aS({ localeCookie: e2, localePrefix: d2 }, a11));
        }, redirect: function(a11) {
          for (var b3 = arguments.length, c3 = Array(b3 > 1 ? b3 - 1 : 0), e3 = 1; e3 < b3; e3++) c3[e3 - 1] = arguments[e3];
          return bB({ pathname: a11, localePrefix: d2 }, ...c3);
        }, permanentRedirect: function(a11) {
          for (var b3 = arguments.length, c3 = Array(b3 > 1 ? b3 - 1 : 0), e3 = 1; e3 < b3; e3++) c3[e3 - 1] = arguments[e3];
          return bC({ pathname: a11, localePrefix: d2 }, ...c3);
        }, usePathname: f2("usePathname"), useRouter: f2("useRouter") };
      }({ locales: bD }), bI = (0, aR.A)({ locales: bD, defaultLocale: "en" }), bJ = { matcher: ["/", "/(my|en)/:path*"] };
      c(7128);
      let bK = { ...e }, bL = bK.middleware || bK.default, bM = "/src/middleware";
      if ("function" != typeof bL) throw Object.defineProperty(Error(`The Middleware "${bM}" must export a \`middleware\` or a \`default\` function`), "__NEXT_ERROR_CODE", { value: "E120", enumerable: false, configurable: true });
      function bN(a10) {
        return aQ({ ...a10, page: bM, handler: async (...a11) => {
          try {
            return await bL(...a11);
          } catch (e2) {
            let b2 = a11[0], c2 = new URL(b2.url), d2 = c2.pathname + c2.search;
            throw await i(e2, { path: d2, method: b2.method, headers: Object.fromEntries(b2.headers.entries()) }, { routerKind: "Pages Router", routePath: "/middleware", routeType: "middleware", revalidateReason: void 0 }), e2;
          }
        } });
      }
    }, 2058: (a, b, c) => {
      "use strict";
      c.d(b, { xl: () => g });
      let d = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
      class e {
        disable() {
          throw d;
        }
        getStore() {
        }
        run() {
          throw d;
        }
        exit() {
          throw d;
        }
        enterWith() {
          throw d;
        }
        static bind(a2) {
          return a2;
        }
      }
      let f = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function g() {
        return f ? new f() : new e();
      }
    }, 2269: (a, b) => {
      "use strict";
      function c(a2) {
        return !(null != a2 && !a2) && { name: "NEXT_LOCALE", maxAge: 31536e3, sameSite: "lax", ..."object" == typeof a2 && a2 };
      }
      function d(a2) {
        return "object" == typeof a2 ? a2 : { mode: a2 || "always" };
      }
      Object.defineProperty(b, "__esModule", { value: true }), b.receiveLocaleCookie = c, b.receiveLocalePrefixConfig = d, b.receiveRoutingConfig = function(a2) {
        var b2, e;
        return { ...a2, localePrefix: d(a2.localePrefix), localeCookie: c(a2.localeCookie), localeDetection: null == (b2 = a2.localeDetection) || b2, alternateLinks: null == (e = a2.alternateLinks) || e };
      };
    }, 2340: (a, b, c) => {
      "use strict";
      function d(a2) {
        return "object" == typeof a2 && null !== a2 && "digest" in a2 && "BAILOUT_TO_CLIENT_SIDE_RENDERING" === a2.digest;
      }
      c.d(b, { C: () => d });
    }, 2634: (a, b, c) => {
      "use strict";
      function d() {
        throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", { value: "E183", enumerable: false, configurable: true });
      }
      c.r(b), c.d(b, { ImageResponse: () => d, NextRequest: () => f.J, NextResponse: () => g.R, URLPattern: () => l, after: () => n, connection: () => t, unstable_rootParams: () => N, userAgent: () => k, userAgentFromString: () => j });
      var e, f = c(2742), g = c(388), h = c(4449), i = c.n(h);
      function j(a2) {
        return { ...i()(a2), isBot: void 0 !== a2 && /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(a2) };
      }
      function k({ headers: a2 }) {
        return j(a2.get("user-agent") || void 0);
      }
      let l = "undefined" == typeof URLPattern ? void 0 : URLPattern;
      var m = c(5379);
      function n(a2) {
        let b2 = m.J.getStore();
        if (!b2) throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", { value: "E468", enumerable: false, configurable: true });
        let { afterContext: c2 } = b2;
        return c2.after(a2);
      }
      var o = c(1128), p = c(107), q = c(4979), r = c(5770), s = c(8823);
      function t() {
        let a2 = m.J.getStore(), b2 = o.FP.getStore();
        if (a2) {
          if (b2 && "after" === b2.phase && !(0, s.iC)()) throw Object.defineProperty(Error(`Route ${a2.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", { value: "E186", enumerable: false, configurable: true });
          if (a2.forceStatic) return Promise.resolve(void 0);
          if (a2.dynamicShouldError) throw Object.defineProperty(new q.f(`Route ${a2.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", { value: "E562", enumerable: false, configurable: true });
          if (b2) switch (b2.type) {
            case "cache": {
              let b3 = Object.defineProperty(Error(`Route ${a2.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", { value: "E752", enumerable: false, configurable: true });
              throw Error.captureStackTrace(b3, t), a2.invalidDynamicUsageError ??= b3, b3;
            }
            case "private-cache": {
              let b3 = Object.defineProperty(Error(`Route ${a2.route} used "connection" inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", { value: "E753", enumerable: false, configurable: true });
              throw Error.captureStackTrace(b3, t), a2.invalidDynamicUsageError ??= b3, b3;
            }
            case "unstable-cache":
              throw Object.defineProperty(Error(`Route ${a2.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", { value: "E1", enumerable: false, configurable: true });
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
              return (0, r.W5)(b2.renderSignal, a2.route, "`connection()`");
            case "prerender-ppr":
              return (0, p.Ui)(a2.route, "connection", b2.dynamicTracking);
            case "prerender-legacy":
              return (0, p.xI)("connection", a2, b2);
            case "request":
              return (0, p.Pk)(b2), Promise.resolve(void 0);
          }
        }
        (0, o.M1)("connection");
      }
      var u = c(9809);
      let v = /^[A-Za-z_$][A-Za-z0-9_$]*$/, w = /* @__PURE__ */ new Set(["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "then", "catch", "finally", "status", "displayName", "_debugInfo", "toJSON", "$$typeof", "__esModule"]);
      c(7918);
      let { env: x, stdout: y } = (null == (e = globalThis) ? void 0 : e.process) ?? {}, z = x && !x.NO_COLOR && (x.FORCE_COLOR || (null == y ? void 0 : y.isTTY) && !x.CI && "dumb" !== x.TERM), A = (a2, b2, c2, d2) => {
        let e2 = a2.substring(0, d2) + c2, f2 = a2.substring(d2 + b2.length), g2 = f2.indexOf(b2);
        return ~g2 ? e2 + A(f2, b2, c2, g2) : e2 + f2;
      }, B = (a2, b2, c2 = a2) => z ? (d2) => {
        let e2 = "" + d2, f2 = e2.indexOf(b2, a2.length);
        return ~f2 ? a2 + A(e2, b2, c2, f2) + b2 : a2 + e2 + b2;
      } : String, C = B("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
      B("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"), B("\x1B[3m", "\x1B[23m"), B("\x1B[4m", "\x1B[24m"), B("\x1B[7m", "\x1B[27m"), B("\x1B[8m", "\x1B[28m"), B("\x1B[9m", "\x1B[29m"), B("\x1B[30m", "\x1B[39m");
      let D = B("\x1B[31m", "\x1B[39m"), E = B("\x1B[32m", "\x1B[39m"), F = B("\x1B[33m", "\x1B[39m");
      B("\x1B[34m", "\x1B[39m");
      let G = B("\x1B[35m", "\x1B[39m");
      B("\x1B[38;2;173;127;168m", "\x1B[39m"), B("\x1B[36m", "\x1B[39m");
      let H = B("\x1B[37m", "\x1B[39m");
      B("\x1B[90m", "\x1B[39m"), B("\x1B[40m", "\x1B[49m"), B("\x1B[41m", "\x1B[49m"), B("\x1B[42m", "\x1B[49m"), B("\x1B[43m", "\x1B[49m"), B("\x1B[44m", "\x1B[49m"), B("\x1B[45m", "\x1B[49m"), B("\x1B[46m", "\x1B[49m"), B("\x1B[47m", "\x1B[49m");
      var I = c(3788);
      let J = { wait: H(C("\u25CB")), error: D(C("\u2A2F")), warn: F(C("\u26A0")), ready: "\u25B2", info: H(C(" ")), event: E(C("\u2713")), trace: G(C("\xBB")) }, K = { log: "log", warn: "warn", error: "error" }, L = new I.q(1e4, (a2) => a2.length), M = /* @__PURE__ */ new WeakMap();
      async function N() {
        !function(...a3) {
          let b3 = a3.join(" ");
          L.has(b3) || (L.set(b3, b3), function(...a4) {
            !function(a5, ...b4) {
              ("" === b4[0] || void 0 === b4[0]) && 1 === b4.length && b4.shift();
              let c2 = a5 in K ? K[a5] : "log", d2 = J[a5];
              0 === b4.length ? console[c2]("") : 1 === b4.length && "string" == typeof b4[0] ? console[c2](" " + d2 + " " + b4[0]) : console[c2](" " + d2, ...b4);
            }("warn", ...a4);
          }(...a3));
        }("`unstable_rootParams()` is deprecated and will be removed in an upcoming major release. Import specific root params from `next/root-params` instead.");
        let a2 = m.J.getStore();
        if (!a2) throw Object.defineProperty(new u.z("Missing workStore in unstable_rootParams"), "__NEXT_ERROR_CODE", { value: "E615", enumerable: false, configurable: true });
        let b2 = o.FP.getStore();
        if (!b2) throw Object.defineProperty(Error(`Route ${a2.route} used \`unstable_rootParams()\` in Pages Router. This API is only available within App Router.`), "__NEXT_ERROR_CODE", { value: "E641", enumerable: false, configurable: true });
        switch (b2.type) {
          case "cache":
          case "unstable-cache":
            throw Object.defineProperty(Error(`Route ${a2.route} used \`unstable_rootParams()\` inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", { value: "E642", enumerable: false, configurable: true });
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            return function(a3, b3, c2) {
              switch (c2.type) {
                case "prerender-client": {
                  let a4 = "`unstable_rootParams`";
                  throw Object.defineProperty(new u.z(`${a4} must not be used within a client component. Next.js should be preventing ${a4} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", { value: "E693", enumerable: false, configurable: true });
                }
                case "prerender": {
                  let d2 = c2.fallbackRouteParams;
                  if (d2) {
                    for (let e2 in a3) if (d2.has(e2)) {
                      let d3 = M.get(a3);
                      if (d3) return d3;
                      let e3 = (0, r.W5)(c2.renderSignal, b3.route, "`unstable_rootParams`");
                      return M.set(a3, e3), e3;
                    }
                  }
                  break;
                }
                case "prerender-ppr": {
                  let d2 = c2.fallbackRouteParams;
                  if (d2) {
                    for (let e2 in a3) if (d2.has(e2)) return function(a4, b4, c3, d3) {
                      let e3 = M.get(a4);
                      if (e3) return e3;
                      let f2 = { ...a4 }, g2 = Promise.resolve(f2);
                      return M.set(a4, g2), Object.keys(a4).forEach((e4) => {
                        w.has(e4) || (b4.has(e4) ? Object.defineProperty(f2, e4, { get() {
                          var a5;
                          let b5 = (a5 = "unstable_rootParams", v.test(e4) ? "`" + a5 + "." + e4 + "`" : "`" + a5 + "[" + JSON.stringify(e4) + "]`");
                          "prerender-ppr" === d3.type ? (0, p.Ui)(c3.route, b5, d3.dynamicTracking) : (0, p.xI)(b5, c3, d3);
                        }, enumerable: true }) : g2[e4] = a4[e4]);
                      }), g2;
                    }(a3, d2, b3, c2);
                  }
                }
              }
              return Promise.resolve(a3);
            }(b2.rootParams, a2, b2);
          case "private-cache":
          case "prerender-runtime":
          case "request":
            return Promise.resolve(b2.rootParams);
          default:
            return b2;
        }
      }
    }, 2742: (a, b, c) => {
      "use strict";
      c.d(b, { J: () => i });
      var d = c(4700), e = c(6206), f = c(1583), g = c(7028);
      let h = Symbol("internal request");
      class i extends Request {
        constructor(a2, b2 = {}) {
          let c2 = "string" != typeof a2 && "url" in a2 ? a2.url : String(a2);
          (0, e.qU)(c2), a2 instanceof Request ? super(a2, b2) : super(c2, b2);
          let f2 = new d.X(c2, { headers: (0, e.Cu)(this.headers), nextConfig: b2.nextConfig });
          this[h] = { cookies: new g.tm(this.headers), nextUrl: f2, url: f2.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[h].cookies;
        }
        get nextUrl() {
          return this[h].nextUrl;
        }
        get page() {
          throw new f.Yq();
        }
        get ua() {
          throw new f.l_();
        }
        get url() {
          return this[h].url;
        }
      }
    }, 2838: (a, b, c) => {
      "use strict";
      b.A = c(5231).default;
    }, 3788: (a, b, c) => {
      "use strict";
      c.d(b, { q: () => f });
      class d {
        constructor(a2, b2, c2) {
          this.prev = null, this.next = null, this.key = a2, this.data = b2, this.size = c2;
        }
      }
      class e {
        constructor() {
          this.prev = null, this.next = null;
        }
      }
      class f {
        constructor(a2, b2, c2) {
          this.cache = /* @__PURE__ */ new Map(), this.totalSize = 0, this.maxSize = a2, this.calculateSize = b2, this.onEvict = c2, this.head = new e(), this.tail = new e(), this.head.next = this.tail, this.tail.prev = this.head;
        }
        addToHead(a2) {
          a2.prev = this.head, a2.next = this.head.next, this.head.next.prev = a2, this.head.next = a2;
        }
        removeNode(a2) {
          a2.prev.next = a2.next, a2.next.prev = a2.prev;
        }
        moveToHead(a2) {
          this.removeNode(a2), this.addToHead(a2);
        }
        removeTail() {
          let a2 = this.tail.prev;
          return this.removeNode(a2), a2;
        }
        set(a2, b2) {
          let c2 = (null == this.calculateSize ? void 0 : this.calculateSize.call(this, b2)) ?? 1;
          if (c2 <= 0) throw Object.defineProperty(Error(`LRUCache: calculateSize returned ${c2}, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", { value: "E789", enumerable: false, configurable: true });
          if (c2 > this.maxSize) return void console.warn("Single item size exceeds maxSize");
          let e2 = this.cache.get(a2);
          if (e2) e2.data = b2, this.totalSize = this.totalSize - e2.size + c2, e2.size = c2, this.moveToHead(e2);
          else {
            let e3 = new d(a2, b2, c2);
            this.cache.set(a2, e3), this.addToHead(e3), this.totalSize += c2;
          }
          for (; this.totalSize > this.maxSize && this.cache.size > 0; ) {
            let a3 = this.removeTail();
            this.cache.delete(a3.key), this.totalSize -= a3.size, null == this.onEvict || this.onEvict.call(this, a3.key, a3.data);
          }
        }
        has(a2) {
          return this.cache.has(a2);
        }
        get(a2) {
          let b2 = this.cache.get(a2);
          if (b2) return this.moveToHead(b2), b2.data;
        }
        *[Symbol.iterator]() {
          let a2 = this.head.next;
          for (; a2 && a2 !== this.tail; ) {
            let b2 = a2;
            yield [b2.key, b2.data], a2 = a2.next;
          }
        }
        remove(a2) {
          let b2 = this.cache.get(a2);
          b2 && (this.removeNode(b2), this.cache.delete(a2), this.totalSize -= b2.size);
        }
        get size() {
          return this.cache.size;
        }
        get currentSize() {
          return this.totalSize;
        }
      }
    }, 3817: (a, b, c) => {
      (() => {
        "use strict";
        var b2 = { 491: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.ContextAPI = void 0;
          let d2 = c2(223), e2 = c2(172), f2 = c2(930), g = "context", h = new d2.NoopContextManager();
          class i {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new i()), this._instance;
            }
            setGlobalContextManager(a3) {
              return (0, e2.registerGlobal)(g, a3, f2.DiagAPI.instance());
            }
            active() {
              return this._getContextManager().active();
            }
            with(a3, b4, c3, ...d3) {
              return this._getContextManager().with(a3, b4, c3, ...d3);
            }
            bind(a3, b4) {
              return this._getContextManager().bind(a3, b4);
            }
            _getContextManager() {
              return (0, e2.getGlobal)(g) || h;
            }
            disable() {
              this._getContextManager().disable(), (0, e2.unregisterGlobal)(g, f2.DiagAPI.instance());
            }
          }
          b3.ContextAPI = i;
        }, 930: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.DiagAPI = void 0;
          let d2 = c2(56), e2 = c2(912), f2 = c2(957), g = c2(172);
          class h {
            constructor() {
              function a3(a4) {
                return function(...b5) {
                  let c3 = (0, g.getGlobal)("diag");
                  if (c3) return c3[a4](...b5);
                };
              }
              let b4 = this;
              b4.setLogger = (a4, c3 = { logLevel: f2.DiagLogLevel.INFO }) => {
                var d3, h2, i;
                if (a4 === b4) {
                  let a5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                  return b4.error(null != (d3 = a5.stack) ? d3 : a5.message), false;
                }
                "number" == typeof c3 && (c3 = { logLevel: c3 });
                let j = (0, g.getGlobal)("diag"), k = (0, e2.createLogLevelDiagLogger)(null != (h2 = c3.logLevel) ? h2 : f2.DiagLogLevel.INFO, a4);
                if (j && !c3.suppressOverrideMessage) {
                  let a5 = null != (i = Error().stack) ? i : "<failed to generate stacktrace>";
                  j.warn(`Current logger will be overwritten from ${a5}`), k.warn(`Current logger will overwrite one already registered from ${a5}`);
                }
                return (0, g.registerGlobal)("diag", k, b4, true);
              }, b4.disable = () => {
                (0, g.unregisterGlobal)("diag", b4);
              }, b4.createComponentLogger = (a4) => new d2.DiagComponentLogger(a4), b4.verbose = a3("verbose"), b4.debug = a3("debug"), b4.info = a3("info"), b4.warn = a3("warn"), b4.error = a3("error");
            }
            static instance() {
              return this._instance || (this._instance = new h()), this._instance;
            }
          }
          b3.DiagAPI = h;
        }, 653: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.MetricsAPI = void 0;
          let d2 = c2(660), e2 = c2(172), f2 = c2(930), g = "metrics";
          class h {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new h()), this._instance;
            }
            setGlobalMeterProvider(a3) {
              return (0, e2.registerGlobal)(g, a3, f2.DiagAPI.instance());
            }
            getMeterProvider() {
              return (0, e2.getGlobal)(g) || d2.NOOP_METER_PROVIDER;
            }
            getMeter(a3, b4, c3) {
              return this.getMeterProvider().getMeter(a3, b4, c3);
            }
            disable() {
              (0, e2.unregisterGlobal)(g, f2.DiagAPI.instance());
            }
          }
          b3.MetricsAPI = h;
        }, 181: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.PropagationAPI = void 0;
          let d2 = c2(172), e2 = c2(874), f2 = c2(194), g = c2(277), h = c2(369), i = c2(930), j = "propagation", k = new e2.NoopTextMapPropagator();
          class l {
            constructor() {
              this.createBaggage = h.createBaggage, this.getBaggage = g.getBaggage, this.getActiveBaggage = g.getActiveBaggage, this.setBaggage = g.setBaggage, this.deleteBaggage = g.deleteBaggage;
            }
            static getInstance() {
              return this._instance || (this._instance = new l()), this._instance;
            }
            setGlobalPropagator(a3) {
              return (0, d2.registerGlobal)(j, a3, i.DiagAPI.instance());
            }
            inject(a3, b4, c3 = f2.defaultTextMapSetter) {
              return this._getGlobalPropagator().inject(a3, b4, c3);
            }
            extract(a3, b4, c3 = f2.defaultTextMapGetter) {
              return this._getGlobalPropagator().extract(a3, b4, c3);
            }
            fields() {
              return this._getGlobalPropagator().fields();
            }
            disable() {
              (0, d2.unregisterGlobal)(j, i.DiagAPI.instance());
            }
            _getGlobalPropagator() {
              return (0, d2.getGlobal)(j) || k;
            }
          }
          b3.PropagationAPI = l;
        }, 997: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.TraceAPI = void 0;
          let d2 = c2(172), e2 = c2(846), f2 = c2(139), g = c2(607), h = c2(930), i = "trace";
          class j {
            constructor() {
              this._proxyTracerProvider = new e2.ProxyTracerProvider(), this.wrapSpanContext = f2.wrapSpanContext, this.isSpanContextValid = f2.isSpanContextValid, this.deleteSpan = g.deleteSpan, this.getSpan = g.getSpan, this.getActiveSpan = g.getActiveSpan, this.getSpanContext = g.getSpanContext, this.setSpan = g.setSpan, this.setSpanContext = g.setSpanContext;
            }
            static getInstance() {
              return this._instance || (this._instance = new j()), this._instance;
            }
            setGlobalTracerProvider(a3) {
              let b4 = (0, d2.registerGlobal)(i, this._proxyTracerProvider, h.DiagAPI.instance());
              return b4 && this._proxyTracerProvider.setDelegate(a3), b4;
            }
            getTracerProvider() {
              return (0, d2.getGlobal)(i) || this._proxyTracerProvider;
            }
            getTracer(a3, b4) {
              return this.getTracerProvider().getTracer(a3, b4);
            }
            disable() {
              (0, d2.unregisterGlobal)(i, h.DiagAPI.instance()), this._proxyTracerProvider = new e2.ProxyTracerProvider();
            }
          }
          b3.TraceAPI = j;
        }, 277: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.deleteBaggage = b3.setBaggage = b3.getActiveBaggage = b3.getBaggage = void 0;
          let d2 = c2(491), e2 = (0, c2(780).createContextKey)("OpenTelemetry Baggage Key");
          function f2(a3) {
            return a3.getValue(e2) || void 0;
          }
          b3.getBaggage = f2, b3.getActiveBaggage = function() {
            return f2(d2.ContextAPI.getInstance().active());
          }, b3.setBaggage = function(a3, b4) {
            return a3.setValue(e2, b4);
          }, b3.deleteBaggage = function(a3) {
            return a3.deleteValue(e2);
          };
        }, 993: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.BaggageImpl = void 0;
          class c2 {
            constructor(a3) {
              this._entries = a3 ? new Map(a3) : /* @__PURE__ */ new Map();
            }
            getEntry(a3) {
              let b4 = this._entries.get(a3);
              if (b4) return Object.assign({}, b4);
            }
            getAllEntries() {
              return Array.from(this._entries.entries()).map(([a3, b4]) => [a3, b4]);
            }
            setEntry(a3, b4) {
              let d2 = new c2(this._entries);
              return d2._entries.set(a3, b4), d2;
            }
            removeEntry(a3) {
              let b4 = new c2(this._entries);
              return b4._entries.delete(a3), b4;
            }
            removeEntries(...a3) {
              let b4 = new c2(this._entries);
              for (let c3 of a3) b4._entries.delete(c3);
              return b4;
            }
            clear() {
              return new c2();
            }
          }
          b3.BaggageImpl = c2;
        }, 830: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.baggageEntryMetadataSymbol = void 0, b3.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        }, 369: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.baggageEntryMetadataFromString = b3.createBaggage = void 0;
          let d2 = c2(930), e2 = c2(993), f2 = c2(830), g = d2.DiagAPI.instance();
          b3.createBaggage = function(a3 = {}) {
            return new e2.BaggageImpl(new Map(Object.entries(a3)));
          }, b3.baggageEntryMetadataFromString = function(a3) {
            return "string" != typeof a3 && (g.error(`Cannot create baggage metadata from unknown type: ${typeof a3}`), a3 = ""), { __TYPE__: f2.baggageEntryMetadataSymbol, toString: () => a3 };
          };
        }, 67: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.context = void 0, b3.context = c2(491).ContextAPI.getInstance();
        }, 223: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NoopContextManager = void 0;
          let d2 = c2(780);
          class e2 {
            active() {
              return d2.ROOT_CONTEXT;
            }
            with(a3, b4, c3, ...d3) {
              return b4.call(c3, ...d3);
            }
            bind(a3, b4) {
              return b4;
            }
            enable() {
              return this;
            }
            disable() {
              return this;
            }
          }
          b3.NoopContextManager = e2;
        }, 780: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.ROOT_CONTEXT = b3.createContextKey = void 0, b3.createContextKey = function(a3) {
            return Symbol.for(a3);
          };
          class c2 {
            constructor(a3) {
              let b4 = this;
              b4._currentContext = a3 ? new Map(a3) : /* @__PURE__ */ new Map(), b4.getValue = (a4) => b4._currentContext.get(a4), b4.setValue = (a4, d2) => {
                let e2 = new c2(b4._currentContext);
                return e2._currentContext.set(a4, d2), e2;
              }, b4.deleteValue = (a4) => {
                let d2 = new c2(b4._currentContext);
                return d2._currentContext.delete(a4), d2;
              };
            }
          }
          b3.ROOT_CONTEXT = new c2();
        }, 506: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.diag = void 0, b3.diag = c2(930).DiagAPI.instance();
        }, 56: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.DiagComponentLogger = void 0;
          let d2 = c2(172);
          class e2 {
            constructor(a3) {
              this._namespace = a3.namespace || "DiagComponentLogger";
            }
            debug(...a3) {
              return f2("debug", this._namespace, a3);
            }
            error(...a3) {
              return f2("error", this._namespace, a3);
            }
            info(...a3) {
              return f2("info", this._namespace, a3);
            }
            warn(...a3) {
              return f2("warn", this._namespace, a3);
            }
            verbose(...a3) {
              return f2("verbose", this._namespace, a3);
            }
          }
          function f2(a3, b4, c3) {
            let e3 = (0, d2.getGlobal)("diag");
            if (e3) return c3.unshift(b4), e3[a3](...c3);
          }
          b3.DiagComponentLogger = e2;
        }, 972: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.DiagConsoleLogger = void 0;
          let c2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
          class d2 {
            constructor() {
              for (let a3 = 0; a3 < c2.length; a3++) this[c2[a3].n] = /* @__PURE__ */ function(a4) {
                return function(...b4) {
                  if (console) {
                    let c3 = console[a4];
                    if ("function" != typeof c3 && (c3 = console.log), "function" == typeof c3) return c3.apply(console, b4);
                  }
                };
              }(c2[a3].c);
            }
          }
          b3.DiagConsoleLogger = d2;
        }, 912: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.createLogLevelDiagLogger = void 0;
          let d2 = c2(957);
          b3.createLogLevelDiagLogger = function(a3, b4) {
            function c3(c4, d3) {
              let e2 = b4[c4];
              return "function" == typeof e2 && a3 >= d3 ? e2.bind(b4) : function() {
              };
            }
            return a3 < d2.DiagLogLevel.NONE ? a3 = d2.DiagLogLevel.NONE : a3 > d2.DiagLogLevel.ALL && (a3 = d2.DiagLogLevel.ALL), b4 = b4 || {}, { error: c3("error", d2.DiagLogLevel.ERROR), warn: c3("warn", d2.DiagLogLevel.WARN), info: c3("info", d2.DiagLogLevel.INFO), debug: c3("debug", d2.DiagLogLevel.DEBUG), verbose: c3("verbose", d2.DiagLogLevel.VERBOSE) };
          };
        }, 957: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.DiagLogLevel = void 0, function(a3) {
            a3[a3.NONE = 0] = "NONE", a3[a3.ERROR = 30] = "ERROR", a3[a3.WARN = 50] = "WARN", a3[a3.INFO = 60] = "INFO", a3[a3.DEBUG = 70] = "DEBUG", a3[a3.VERBOSE = 80] = "VERBOSE", a3[a3.ALL = 9999] = "ALL";
          }(b3.DiagLogLevel || (b3.DiagLogLevel = {}));
        }, 172: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.unregisterGlobal = b3.getGlobal = b3.registerGlobal = void 0;
          let d2 = c2(200), e2 = c2(521), f2 = c2(130), g = e2.VERSION.split(".")[0], h = Symbol.for(`opentelemetry.js.api.${g}`), i = d2._globalThis;
          b3.registerGlobal = function(a3, b4, c3, d3 = false) {
            var f3;
            let g2 = i[h] = null != (f3 = i[h]) ? f3 : { version: e2.VERSION };
            if (!d3 && g2[a3]) {
              let b5 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${a3}`);
              return c3.error(b5.stack || b5.message), false;
            }
            if (g2.version !== e2.VERSION) {
              let b5 = Error(`@opentelemetry/api: Registration of version v${g2.version} for ${a3} does not match previously registered API v${e2.VERSION}`);
              return c3.error(b5.stack || b5.message), false;
            }
            return g2[a3] = b4, c3.debug(`@opentelemetry/api: Registered a global for ${a3} v${e2.VERSION}.`), true;
          }, b3.getGlobal = function(a3) {
            var b4, c3;
            let d3 = null == (b4 = i[h]) ? void 0 : b4.version;
            if (d3 && (0, f2.isCompatible)(d3)) return null == (c3 = i[h]) ? void 0 : c3[a3];
          }, b3.unregisterGlobal = function(a3, b4) {
            b4.debug(`@opentelemetry/api: Unregistering a global for ${a3} v${e2.VERSION}.`);
            let c3 = i[h];
            c3 && delete c3[a3];
          };
        }, 130: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.isCompatible = b3._makeCompatibilityCheck = void 0;
          let d2 = c2(521), e2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
          function f2(a3) {
            let b4 = /* @__PURE__ */ new Set([a3]), c3 = /* @__PURE__ */ new Set(), d3 = a3.match(e2);
            if (!d3) return () => false;
            let f3 = { major: +d3[1], minor: +d3[2], patch: +d3[3], prerelease: d3[4] };
            if (null != f3.prerelease) return function(b5) {
              return b5 === a3;
            };
            function g(a4) {
              return c3.add(a4), false;
            }
            return function(a4) {
              if (b4.has(a4)) return true;
              if (c3.has(a4)) return false;
              let d4 = a4.match(e2);
              if (!d4) return g(a4);
              let h = { major: +d4[1], minor: +d4[2], patch: +d4[3], prerelease: d4[4] };
              if (null != h.prerelease || f3.major !== h.major) return g(a4);
              if (0 === f3.major) return f3.minor === h.minor && f3.patch <= h.patch ? (b4.add(a4), true) : g(a4);
              return f3.minor <= h.minor ? (b4.add(a4), true) : g(a4);
            };
          }
          b3._makeCompatibilityCheck = f2, b3.isCompatible = f2(d2.VERSION);
        }, 886: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.metrics = void 0, b3.metrics = c2(653).MetricsAPI.getInstance();
        }, 901: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.ValueType = void 0, function(a3) {
            a3[a3.INT = 0] = "INT", a3[a3.DOUBLE = 1] = "DOUBLE";
          }(b3.ValueType || (b3.ValueType = {}));
        }, 102: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.createNoopMeter = b3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = b3.NOOP_OBSERVABLE_GAUGE_METRIC = b3.NOOP_OBSERVABLE_COUNTER_METRIC = b3.NOOP_UP_DOWN_COUNTER_METRIC = b3.NOOP_HISTOGRAM_METRIC = b3.NOOP_COUNTER_METRIC = b3.NOOP_METER = b3.NoopObservableUpDownCounterMetric = b3.NoopObservableGaugeMetric = b3.NoopObservableCounterMetric = b3.NoopObservableMetric = b3.NoopHistogramMetric = b3.NoopUpDownCounterMetric = b3.NoopCounterMetric = b3.NoopMetric = b3.NoopMeter = void 0;
          class c2 {
            constructor() {
            }
            createHistogram(a3, c3) {
              return b3.NOOP_HISTOGRAM_METRIC;
            }
            createCounter(a3, c3) {
              return b3.NOOP_COUNTER_METRIC;
            }
            createUpDownCounter(a3, c3) {
              return b3.NOOP_UP_DOWN_COUNTER_METRIC;
            }
            createObservableGauge(a3, c3) {
              return b3.NOOP_OBSERVABLE_GAUGE_METRIC;
            }
            createObservableCounter(a3, c3) {
              return b3.NOOP_OBSERVABLE_COUNTER_METRIC;
            }
            createObservableUpDownCounter(a3, c3) {
              return b3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
            }
            addBatchObservableCallback(a3, b4) {
            }
            removeBatchObservableCallback(a3) {
            }
          }
          b3.NoopMeter = c2;
          class d2 {
          }
          b3.NoopMetric = d2;
          class e2 extends d2 {
            add(a3, b4) {
            }
          }
          b3.NoopCounterMetric = e2;
          class f2 extends d2 {
            add(a3, b4) {
            }
          }
          b3.NoopUpDownCounterMetric = f2;
          class g extends d2 {
            record(a3, b4) {
            }
          }
          b3.NoopHistogramMetric = g;
          class h {
            addCallback(a3) {
            }
            removeCallback(a3) {
            }
          }
          b3.NoopObservableMetric = h;
          class i extends h {
          }
          b3.NoopObservableCounterMetric = i;
          class j extends h {
          }
          b3.NoopObservableGaugeMetric = j;
          class k extends h {
          }
          b3.NoopObservableUpDownCounterMetric = k, b3.NOOP_METER = new c2(), b3.NOOP_COUNTER_METRIC = new e2(), b3.NOOP_HISTOGRAM_METRIC = new g(), b3.NOOP_UP_DOWN_COUNTER_METRIC = new f2(), b3.NOOP_OBSERVABLE_COUNTER_METRIC = new i(), b3.NOOP_OBSERVABLE_GAUGE_METRIC = new j(), b3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new k(), b3.createNoopMeter = function() {
            return b3.NOOP_METER;
          };
        }, 660: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NOOP_METER_PROVIDER = b3.NoopMeterProvider = void 0;
          let d2 = c2(102);
          class e2 {
            getMeter(a3, b4, c3) {
              return d2.NOOP_METER;
            }
          }
          b3.NoopMeterProvider = e2, b3.NOOP_METER_PROVIDER = new e2();
        }, 200: function(a2, b3, c2) {
          var d2 = this && this.__createBinding || (Object.create ? function(a3, b4, c3, d3) {
            void 0 === d3 && (d3 = c3), Object.defineProperty(a3, d3, { enumerable: true, get: function() {
              return b4[c3];
            } });
          } : function(a3, b4, c3, d3) {
            void 0 === d3 && (d3 = c3), a3[d3] = b4[c3];
          }), e2 = this && this.__exportStar || function(a3, b4) {
            for (var c3 in a3) "default" === c3 || Object.prototype.hasOwnProperty.call(b4, c3) || d2(b4, a3, c3);
          };
          Object.defineProperty(b3, "__esModule", { value: true }), e2(c2(46), b3);
        }, 651: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3._globalThis = void 0, b3._globalThis = "object" == typeof globalThis ? globalThis : c.g;
        }, 46: function(a2, b3, c2) {
          var d2 = this && this.__createBinding || (Object.create ? function(a3, b4, c3, d3) {
            void 0 === d3 && (d3 = c3), Object.defineProperty(a3, d3, { enumerable: true, get: function() {
              return b4[c3];
            } });
          } : function(a3, b4, c3, d3) {
            void 0 === d3 && (d3 = c3), a3[d3] = b4[c3];
          }), e2 = this && this.__exportStar || function(a3, b4) {
            for (var c3 in a3) "default" === c3 || Object.prototype.hasOwnProperty.call(b4, c3) || d2(b4, a3, c3);
          };
          Object.defineProperty(b3, "__esModule", { value: true }), e2(c2(651), b3);
        }, 939: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.propagation = void 0, b3.propagation = c2(181).PropagationAPI.getInstance();
        }, 874: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NoopTextMapPropagator = void 0;
          class c2 {
            inject(a3, b4) {
            }
            extract(a3, b4) {
              return a3;
            }
            fields() {
              return [];
            }
          }
          b3.NoopTextMapPropagator = c2;
        }, 194: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.defaultTextMapSetter = b3.defaultTextMapGetter = void 0, b3.defaultTextMapGetter = { get(a3, b4) {
            if (null != a3) return a3[b4];
          }, keys: (a3) => null == a3 ? [] : Object.keys(a3) }, b3.defaultTextMapSetter = { set(a3, b4, c2) {
            null != a3 && (a3[b4] = c2);
          } };
        }, 845: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.trace = void 0, b3.trace = c2(997).TraceAPI.getInstance();
        }, 403: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NonRecordingSpan = void 0;
          let d2 = c2(476);
          class e2 {
            constructor(a3 = d2.INVALID_SPAN_CONTEXT) {
              this._spanContext = a3;
            }
            spanContext() {
              return this._spanContext;
            }
            setAttribute(a3, b4) {
              return this;
            }
            setAttributes(a3) {
              return this;
            }
            addEvent(a3, b4) {
              return this;
            }
            setStatus(a3) {
              return this;
            }
            updateName(a3) {
              return this;
            }
            end(a3) {
            }
            isRecording() {
              return false;
            }
            recordException(a3, b4) {
            }
          }
          b3.NonRecordingSpan = e2;
        }, 614: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NoopTracer = void 0;
          let d2 = c2(491), e2 = c2(607), f2 = c2(403), g = c2(139), h = d2.ContextAPI.getInstance();
          class i {
            startSpan(a3, b4, c3 = h.active()) {
              var d3;
              if (null == b4 ? void 0 : b4.root) return new f2.NonRecordingSpan();
              let i2 = c3 && (0, e2.getSpanContext)(c3);
              return "object" == typeof (d3 = i2) && "string" == typeof d3.spanId && "string" == typeof d3.traceId && "number" == typeof d3.traceFlags && (0, g.isSpanContextValid)(i2) ? new f2.NonRecordingSpan(i2) : new f2.NonRecordingSpan();
            }
            startActiveSpan(a3, b4, c3, d3) {
              let f3, g2, i2;
              if (arguments.length < 2) return;
              2 == arguments.length ? i2 = b4 : 3 == arguments.length ? (f3 = b4, i2 = c3) : (f3 = b4, g2 = c3, i2 = d3);
              let j = null != g2 ? g2 : h.active(), k = this.startSpan(a3, f3, j), l = (0, e2.setSpan)(j, k);
              return h.with(l, i2, void 0, k);
            }
          }
          b3.NoopTracer = i;
        }, 124: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.NoopTracerProvider = void 0;
          let d2 = c2(614);
          class e2 {
            getTracer(a3, b4, c3) {
              return new d2.NoopTracer();
            }
          }
          b3.NoopTracerProvider = e2;
        }, 125: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.ProxyTracer = void 0;
          let d2 = new (c2(614)).NoopTracer();
          class e2 {
            constructor(a3, b4, c3, d3) {
              this._provider = a3, this.name = b4, this.version = c3, this.options = d3;
            }
            startSpan(a3, b4, c3) {
              return this._getTracer().startSpan(a3, b4, c3);
            }
            startActiveSpan(a3, b4, c3, d3) {
              let e3 = this._getTracer();
              return Reflect.apply(e3.startActiveSpan, e3, arguments);
            }
            _getTracer() {
              if (this._delegate) return this._delegate;
              let a3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
              return a3 ? (this._delegate = a3, this._delegate) : d2;
            }
          }
          b3.ProxyTracer = e2;
        }, 846: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.ProxyTracerProvider = void 0;
          let d2 = c2(125), e2 = new (c2(124)).NoopTracerProvider();
          class f2 {
            getTracer(a3, b4, c3) {
              var e3;
              return null != (e3 = this.getDelegateTracer(a3, b4, c3)) ? e3 : new d2.ProxyTracer(this, a3, b4, c3);
            }
            getDelegate() {
              var a3;
              return null != (a3 = this._delegate) ? a3 : e2;
            }
            setDelegate(a3) {
              this._delegate = a3;
            }
            getDelegateTracer(a3, b4, c3) {
              var d3;
              return null == (d3 = this._delegate) ? void 0 : d3.getTracer(a3, b4, c3);
            }
          }
          b3.ProxyTracerProvider = f2;
        }, 996: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.SamplingDecision = void 0, function(a3) {
            a3[a3.NOT_RECORD = 0] = "NOT_RECORD", a3[a3.RECORD = 1] = "RECORD", a3[a3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
          }(b3.SamplingDecision || (b3.SamplingDecision = {}));
        }, 607: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.getSpanContext = b3.setSpanContext = b3.deleteSpan = b3.setSpan = b3.getActiveSpan = b3.getSpan = void 0;
          let d2 = c2(780), e2 = c2(403), f2 = c2(491), g = (0, d2.createContextKey)("OpenTelemetry Context Key SPAN");
          function h(a3) {
            return a3.getValue(g) || void 0;
          }
          function i(a3, b4) {
            return a3.setValue(g, b4);
          }
          b3.getSpan = h, b3.getActiveSpan = function() {
            return h(f2.ContextAPI.getInstance().active());
          }, b3.setSpan = i, b3.deleteSpan = function(a3) {
            return a3.deleteValue(g);
          }, b3.setSpanContext = function(a3, b4) {
            return i(a3, new e2.NonRecordingSpan(b4));
          }, b3.getSpanContext = function(a3) {
            var b4;
            return null == (b4 = h(a3)) ? void 0 : b4.spanContext();
          };
        }, 325: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.TraceStateImpl = void 0;
          let d2 = c2(564);
          class e2 {
            constructor(a3) {
              this._internalState = /* @__PURE__ */ new Map(), a3 && this._parse(a3);
            }
            set(a3, b4) {
              let c3 = this._clone();
              return c3._internalState.has(a3) && c3._internalState.delete(a3), c3._internalState.set(a3, b4), c3;
            }
            unset(a3) {
              let b4 = this._clone();
              return b4._internalState.delete(a3), b4;
            }
            get(a3) {
              return this._internalState.get(a3);
            }
            serialize() {
              return this._keys().reduce((a3, b4) => (a3.push(b4 + "=" + this.get(b4)), a3), []).join(",");
            }
            _parse(a3) {
              !(a3.length > 512) && (this._internalState = a3.split(",").reverse().reduce((a4, b4) => {
                let c3 = b4.trim(), e3 = c3.indexOf("=");
                if (-1 !== e3) {
                  let f2 = c3.slice(0, e3), g = c3.slice(e3 + 1, b4.length);
                  (0, d2.validateKey)(f2) && (0, d2.validateValue)(g) && a4.set(f2, g);
                }
                return a4;
              }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }
            _keys() {
              return Array.from(this._internalState.keys()).reverse();
            }
            _clone() {
              let a3 = new e2();
              return a3._internalState = new Map(this._internalState), a3;
            }
          }
          b3.TraceStateImpl = e2;
        }, 564: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.validateValue = b3.validateKey = void 0;
          let c2 = "[_0-9a-z-*/]", d2 = `[a-z]${c2}{0,255}`, e2 = `[a-z0-9]${c2}{0,240}@[a-z]${c2}{0,13}`, f2 = RegExp(`^(?:${d2}|${e2})$`), g = /^[ -~]{0,255}[!-~]$/, h = /,|=/;
          b3.validateKey = function(a3) {
            return f2.test(a3);
          }, b3.validateValue = function(a3) {
            return g.test(a3) && !h.test(a3);
          };
        }, 98: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.createTraceState = void 0;
          let d2 = c2(325);
          b3.createTraceState = function(a3) {
            return new d2.TraceStateImpl(a3);
          };
        }, 476: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.INVALID_SPAN_CONTEXT = b3.INVALID_TRACEID = b3.INVALID_SPANID = void 0;
          let d2 = c2(475);
          b3.INVALID_SPANID = "0000000000000000", b3.INVALID_TRACEID = "00000000000000000000000000000000", b3.INVALID_SPAN_CONTEXT = { traceId: b3.INVALID_TRACEID, spanId: b3.INVALID_SPANID, traceFlags: d2.TraceFlags.NONE };
        }, 357: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.SpanKind = void 0, function(a3) {
            a3[a3.INTERNAL = 0] = "INTERNAL", a3[a3.SERVER = 1] = "SERVER", a3[a3.CLIENT = 2] = "CLIENT", a3[a3.PRODUCER = 3] = "PRODUCER", a3[a3.CONSUMER = 4] = "CONSUMER";
          }(b3.SpanKind || (b3.SpanKind = {}));
        }, 139: (a2, b3, c2) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.wrapSpanContext = b3.isSpanContextValid = b3.isValidSpanId = b3.isValidTraceId = void 0;
          let d2 = c2(476), e2 = c2(403), f2 = /^([0-9a-f]{32})$/i, g = /^[0-9a-f]{16}$/i;
          function h(a3) {
            return f2.test(a3) && a3 !== d2.INVALID_TRACEID;
          }
          function i(a3) {
            return g.test(a3) && a3 !== d2.INVALID_SPANID;
          }
          b3.isValidTraceId = h, b3.isValidSpanId = i, b3.isSpanContextValid = function(a3) {
            return h(a3.traceId) && i(a3.spanId);
          }, b3.wrapSpanContext = function(a3) {
            return new e2.NonRecordingSpan(a3);
          };
        }, 847: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.SpanStatusCode = void 0, function(a3) {
            a3[a3.UNSET = 0] = "UNSET", a3[a3.OK = 1] = "OK", a3[a3.ERROR = 2] = "ERROR";
          }(b3.SpanStatusCode || (b3.SpanStatusCode = {}));
        }, 475: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.TraceFlags = void 0, function(a3) {
            a3[a3.NONE = 0] = "NONE", a3[a3.SAMPLED = 1] = "SAMPLED";
          }(b3.TraceFlags || (b3.TraceFlags = {}));
        }, 521: (a2, b3) => {
          Object.defineProperty(b3, "__esModule", { value: true }), b3.VERSION = void 0, b3.VERSION = "1.6.0";
        } }, d = {};
        function e(a2) {
          var c2 = d[a2];
          if (void 0 !== c2) return c2.exports;
          var f2 = d[a2] = { exports: {} }, g = true;
          try {
            b2[a2].call(f2.exports, f2, f2.exports, e), g = false;
          } finally {
            g && delete d[a2];
          }
          return f2.exports;
        }
        e.ab = "//";
        var f = {};
        (() => {
          Object.defineProperty(f, "__esModule", { value: true }), f.trace = f.propagation = f.metrics = f.diag = f.context = f.INVALID_SPAN_CONTEXT = f.INVALID_TRACEID = f.INVALID_SPANID = f.isValidSpanId = f.isValidTraceId = f.isSpanContextValid = f.createTraceState = f.TraceFlags = f.SpanStatusCode = f.SpanKind = f.SamplingDecision = f.ProxyTracerProvider = f.ProxyTracer = f.defaultTextMapSetter = f.defaultTextMapGetter = f.ValueType = f.createNoopMeter = f.DiagLogLevel = f.DiagConsoleLogger = f.ROOT_CONTEXT = f.createContextKey = f.baggageEntryMetadataFromString = void 0;
          var a2 = e(369);
          Object.defineProperty(f, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
            return a2.baggageEntryMetadataFromString;
          } });
          var b3 = e(780);
          Object.defineProperty(f, "createContextKey", { enumerable: true, get: function() {
            return b3.createContextKey;
          } }), Object.defineProperty(f, "ROOT_CONTEXT", { enumerable: true, get: function() {
            return b3.ROOT_CONTEXT;
          } });
          var c2 = e(972);
          Object.defineProperty(f, "DiagConsoleLogger", { enumerable: true, get: function() {
            return c2.DiagConsoleLogger;
          } });
          var d2 = e(957);
          Object.defineProperty(f, "DiagLogLevel", { enumerable: true, get: function() {
            return d2.DiagLogLevel;
          } });
          var g = e(102);
          Object.defineProperty(f, "createNoopMeter", { enumerable: true, get: function() {
            return g.createNoopMeter;
          } });
          var h = e(901);
          Object.defineProperty(f, "ValueType", { enumerable: true, get: function() {
            return h.ValueType;
          } });
          var i = e(194);
          Object.defineProperty(f, "defaultTextMapGetter", { enumerable: true, get: function() {
            return i.defaultTextMapGetter;
          } }), Object.defineProperty(f, "defaultTextMapSetter", { enumerable: true, get: function() {
            return i.defaultTextMapSetter;
          } });
          var j = e(125);
          Object.defineProperty(f, "ProxyTracer", { enumerable: true, get: function() {
            return j.ProxyTracer;
          } });
          var k = e(846);
          Object.defineProperty(f, "ProxyTracerProvider", { enumerable: true, get: function() {
            return k.ProxyTracerProvider;
          } });
          var l = e(996);
          Object.defineProperty(f, "SamplingDecision", { enumerable: true, get: function() {
            return l.SamplingDecision;
          } });
          var m = e(357);
          Object.defineProperty(f, "SpanKind", { enumerable: true, get: function() {
            return m.SpanKind;
          } });
          var n = e(847);
          Object.defineProperty(f, "SpanStatusCode", { enumerable: true, get: function() {
            return n.SpanStatusCode;
          } });
          var o = e(475);
          Object.defineProperty(f, "TraceFlags", { enumerable: true, get: function() {
            return o.TraceFlags;
          } });
          var p = e(98);
          Object.defineProperty(f, "createTraceState", { enumerable: true, get: function() {
            return p.createTraceState;
          } });
          var q = e(139);
          Object.defineProperty(f, "isSpanContextValid", { enumerable: true, get: function() {
            return q.isSpanContextValid;
          } }), Object.defineProperty(f, "isValidTraceId", { enumerable: true, get: function() {
            return q.isValidTraceId;
          } }), Object.defineProperty(f, "isValidSpanId", { enumerable: true, get: function() {
            return q.isValidSpanId;
          } });
          var r = e(476);
          Object.defineProperty(f, "INVALID_SPANID", { enumerable: true, get: function() {
            return r.INVALID_SPANID;
          } }), Object.defineProperty(f, "INVALID_TRACEID", { enumerable: true, get: function() {
            return r.INVALID_TRACEID;
          } }), Object.defineProperty(f, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
            return r.INVALID_SPAN_CONTEXT;
          } });
          let s = e(67);
          Object.defineProperty(f, "context", { enumerable: true, get: function() {
            return s.context;
          } });
          let t = e(506);
          Object.defineProperty(f, "diag", { enumerable: true, get: function() {
            return t.diag;
          } });
          let u = e(886);
          Object.defineProperty(f, "metrics", { enumerable: true, get: function() {
            return u.metrics;
          } });
          let v = e(939);
          Object.defineProperty(f, "propagation", { enumerable: true, get: function() {
            return v.propagation;
          } });
          let w = e(845);
          Object.defineProperty(f, "trace", { enumerable: true, get: function() {
            return w.trace;
          } }), f.default = { context: s.context, diag: t.diag, metrics: u.metrics, propagation: v.propagation, trace: w.trace };
        })(), a.exports = f;
      })();
    }, 3985: (a, b, c) => {
      "use strict";
      var d = c(7287), e = c(5211);
      c(720), c(7814), c(6660), d.IntlError, d.IntlErrorCode, d.createFormatter, b.gZ = e.createCache, b.CB = e.createIntlFormatters, b.TD = e.initializeConfig;
    }, 4058: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true });
      var d = c(403), e = c(9644);
      b.default = function(a2) {
        var b2;
        let { localizedPathnames: c2, request: f, resolvedLocale: g, routing: h } = a2, i = f.nextUrl.clone(), j = e.getHost(f.headers);
        function k(a3, b3) {
          return a3.pathname = d.normalizeTrailingSlash(a3.pathname), f.nextUrl.basePath && ((a3 = new URL(a3)).pathname = e.applyBasePath(a3.pathname, f.nextUrl.basePath)), "<".concat(a3.toString(), '>; rel="alternate"; hreflang="').concat(b3, '"');
        }
        function l(a3, b3) {
          return c2 && "object" == typeof c2 ? e.formatTemplatePathname(a3, c2[g], c2[b3]) : a3;
        }
        j && (i.port = "", i.host = j), i.protocol = null != (b2 = f.headers.get("x-forwarded-proto")) ? b2 : i.protocol, i.pathname = e.getNormalizedPathname(i.pathname, h.locales, h.localePrefix);
        let m = e.getLocalePrefixes(h.locales, h.localePrefix, false).flatMap((a3) => {
          let b3, [d2, f2] = a3;
          function g2(a4) {
            return "/" === a4 ? f2 : f2 + a4;
          }
          if (h.domains) return h.domains.filter((a4) => e.isLocaleSupportedOnDomain(d2, a4)).map((a4) => ((b3 = new URL(i)).port = "", b3.host = a4.domain, b3.pathname = l(i.pathname, d2), d2 === a4.defaultLocale && "always" !== h.localePrefix.mode || (b3.pathname = g2(b3.pathname)), k(b3, d2)));
          {
            let a4;
            a4 = c2 && "object" == typeof c2 ? l(i.pathname, d2) : i.pathname, d2 === h.defaultLocale && "always" !== h.localePrefix.mode || (a4 = g2(a4)), b3 = new URL(a4, i);
          }
          return k(b3, d2);
        });
        if (!h.domains && ("always" !== h.localePrefix.mode || "/" === i.pathname)) {
          let a3 = new URL(l(i.pathname, h.defaultLocale), i);
          m.push(k(a3, "x-default"));
        }
        return m.join(", ");
      };
    }, 4115: (a, b, c) => {
      "use strict";
      c.d(b, { l: () => d });
      class d {
        static get(a2, b2, c2) {
          let d2 = Reflect.get(a2, b2, c2);
          return "function" == typeof d2 ? d2.bind(a2) : d2;
        }
        static set(a2, b2, c2, d2) {
          return Reflect.set(a2, b2, c2, d2);
        }
        static has(a2, b2) {
          return Reflect.has(a2, b2);
        }
        static deleteProperty(a2, b2) {
          return Reflect.deleteProperty(a2, b2);
        }
      }
    }, 4238: (a) => {
      "use strict";
      a.exports = d, a.exports.preferredMediaTypes = d;
      var b = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
      function c(a2, c2) {
        var d2 = b.exec(a2);
        if (!d2) return null;
        var e2 = /* @__PURE__ */ Object.create(null), f2 = 1, g2 = d2[2], j = d2[1];
        if (d2[3]) for (var k = function(a3) {
          for (var b2 = a3.split(";"), c3 = 1, d3 = 0; c3 < b2.length; c3++) h(b2[d3]) % 2 == 0 ? b2[++d3] = b2[c3] : b2[d3] += ";" + b2[c3];
          b2.length = d3 + 1;
          for (var c3 = 0; c3 < b2.length; c3++) b2[c3] = b2[c3].trim();
          return b2;
        }(d2[3]).map(i), l = 0; l < k.length; l++) {
          var m = k[l], n = m[0].toLowerCase(), o = m[1], p = o && '"' === o[0] && '"' === o[o.length - 1] ? o.slice(1, -1) : o;
          if ("q" === n) {
            f2 = parseFloat(p);
            break;
          }
          e2[n] = p;
        }
        return { type: j, subtype: g2, params: e2, q: f2, i: c2 };
      }
      function d(a2, b2) {
        var d2 = function(a3) {
          for (var b3 = function(a4) {
            for (var b4 = a4.split(","), c2 = 1, d4 = 0; c2 < b4.length; c2++) h(b4[d4]) % 2 == 0 ? b4[++d4] = b4[c2] : b4[d4] += "," + b4[c2];
            return b4.length = d4 + 1, b4;
          }(a3), d3 = 0, e2 = 0; d3 < b3.length; d3++) {
            var f2 = c(b3[d3].trim(), d3);
            f2 && (b3[e2++] = f2);
          }
          return b3.length = e2, b3;
        }(void 0 === a2 ? "*/*" : a2 || "");
        if (!b2) return d2.filter(g).sort(e).map(f);
        var i2 = b2.map(function(a3, b3) {
          for (var e2 = { o: -1, q: 0, s: 0 }, f2 = 0; f2 < d2.length; f2++) {
            var g2 = function(a4, b4, d3) {
              var e3 = c(a4), f3 = 0;
              if (!e3) return null;
              if (b4.type.toLowerCase() == e3.type.toLowerCase()) f3 |= 4;
              else if ("*" != b4.type) return null;
              if (b4.subtype.toLowerCase() == e3.subtype.toLowerCase()) f3 |= 2;
              else if ("*" != b4.subtype) return null;
              var g3 = Object.keys(b4.params);
              if (g3.length > 0) if (!g3.every(function(a5) {
                return "*" == b4.params[a5] || (b4.params[a5] || "").toLowerCase() == (e3.params[a5] || "").toLowerCase();
              })) return null;
              else f3 |= 1;
              return { i: d3, o: b4.i, q: b4.q, s: f3 };
            }(a3, d2[f2], b3);
            g2 && 0 > (e2.s - g2.s || e2.q - g2.q || e2.o - g2.o) && (e2 = g2);
          }
          return e2;
        });
        return i2.filter(g).sort(e).map(function(a3) {
          return b2[i2.indexOf(a3)];
        });
      }
      function e(a2, b2) {
        return b2.q - a2.q || b2.s - a2.s || a2.o - b2.o || a2.i - b2.i || 0;
      }
      function f(a2) {
        return a2.type + "/" + a2.subtype;
      }
      function g(a2) {
        return a2.q > 0;
      }
      function h(a2) {
        for (var b2 = 0, c2 = 0; -1 !== (c2 = a2.indexOf('"', c2)); ) b2++, c2++;
        return b2;
      }
      function i(a2) {
        var b2, c2, d2 = a2.indexOf("=");
        return -1 === d2 ? b2 = a2 : (b2 = a2.slice(0, d2), c2 = a2.slice(d2 + 1)), [b2, c2];
      }
    }, 4449: (a, b, c) => {
      var d;
      (() => {
        var e = { 226: function(e2, f2) {
          !function(g2, h) {
            "use strict";
            var i = "function", j = "undefined", k = "object", l = "string", m = "major", n = "model", o = "name", p = "type", q = "vendor", r = "version", s = "architecture", t = "console", u = "mobile", v = "tablet", w = "smarttv", x = "wearable", y = "embedded", z = "Amazon", A = "Apple", B = "ASUS", C = "BlackBerry", D = "Browser", E = "Chrome", F = "Firefox", G = "Google", H = "Huawei", I = "Microsoft", J = "Motorola", K = "Opera", L = "Samsung", M = "Sharp", N = "Sony", O = "Xiaomi", P = "Zebra", Q = "Facebook", R = "Chromium OS", S = "Mac OS", T = function(a2, b2) {
              var c2 = {};
              for (var d2 in a2) b2[d2] && b2[d2].length % 2 == 0 ? c2[d2] = b2[d2].concat(a2[d2]) : c2[d2] = a2[d2];
              return c2;
            }, U = function(a2) {
              for (var b2 = {}, c2 = 0; c2 < a2.length; c2++) b2[a2[c2].toUpperCase()] = a2[c2];
              return b2;
            }, V = function(a2, b2) {
              return typeof a2 === l && -1 !== W(b2).indexOf(W(a2));
            }, W = function(a2) {
              return a2.toLowerCase();
            }, X = function(a2, b2) {
              if (typeof a2 === l) return a2 = a2.replace(/^\s\s*/, ""), typeof b2 === j ? a2 : a2.substring(0, 350);
            }, Y = function(a2, b2) {
              for (var c2, d2, e3, f3, g3, j2, l2 = 0; l2 < b2.length && !g3; ) {
                var m2 = b2[l2], n2 = b2[l2 + 1];
                for (c2 = d2 = 0; c2 < m2.length && !g3 && m2[c2]; ) if (g3 = m2[c2++].exec(a2)) for (e3 = 0; e3 < n2.length; e3++) j2 = g3[++d2], typeof (f3 = n2[e3]) === k && f3.length > 0 ? 2 === f3.length ? typeof f3[1] == i ? this[f3[0]] = f3[1].call(this, j2) : this[f3[0]] = f3[1] : 3 === f3.length ? typeof f3[1] !== i || f3[1].exec && f3[1].test ? this[f3[0]] = j2 ? j2.replace(f3[1], f3[2]) : void 0 : this[f3[0]] = j2 ? f3[1].call(this, j2, f3[2]) : void 0 : 4 === f3.length && (this[f3[0]] = j2 ? f3[3].call(this, j2.replace(f3[1], f3[2])) : h) : this[f3] = j2 || h;
                l2 += 2;
              }
            }, Z = function(a2, b2) {
              for (var c2 in b2) if (typeof b2[c2] === k && b2[c2].length > 0) {
                for (var d2 = 0; d2 < b2[c2].length; d2++) if (V(b2[c2][d2], a2)) return "?" === c2 ? h : c2;
              } else if (V(b2[c2], a2)) return "?" === c2 ? h : c2;
              return a2;
            }, $ = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, _ = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [r, [o, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [r, [o, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [o, r], [/opios[\/ ]+([\w\.]+)/i], [r, [o, K + " Mini"]], [/\bopr\/([\w\.]+)/i], [r, [o, K]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [o, r], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [r, [o, "UC" + D]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [r, [o, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [r, [o, "WeChat"]], [/konqueror\/([\w\.]+)/i], [r, [o, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [r, [o, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [r, [o, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[o, /(.+)/, "$1 Secure " + D], r], [/\bfocus\/([\w\.]+)/i], [r, [o, F + " Focus"]], [/\bopt\/([\w\.]+)/i], [r, [o, K + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [r, [o, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [r, [o, "Dolphin"]], [/coast\/([\w\.]+)/i], [r, [o, K + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [r, [o, "MIUI " + D]], [/fxios\/([-\w\.]+)/i], [r, [o, F]], [/\bqihu|(qi?ho?o?|360)browser/i], [[o, "360 " + D]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[o, /(.+)/, "$1 " + D], r], [/(comodo_dragon)\/([\w\.]+)/i], [[o, /_/g, " "], r], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [o, r], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [o], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[o, Q], r], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [o, r], [/\bgsa\/([\w\.]+) .*safari\//i], [r, [o, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [r, [o, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [r, [o, E + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[o, E + " WebView"], r], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [r, [o, "Android " + D]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [o, r], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [r, [o, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [r, o], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [o, [r, Z, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [o, r], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[o, "Netscape"], r], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [r, [o, F + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [o, r], [/(cobalt)\/([\w\.]+)/i], [o, [r, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[s, "amd64"]], [/(ia32(?=;))/i], [[s, W]], [/((?:i[346]|x)86)[;\)]/i], [[s, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[s, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[s, "armhf"]], [/windows (ce|mobile); ppc;/i], [[s, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[s, /ower/, "", W]], [/(sun4\w)[;\)]/i], [[s, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[s, W]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [n, [q, L], [p, v]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [n, [q, L], [p, u]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [n, [q, A], [p, u]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [n, [q, A], [p, v]], [/(macintosh);/i], [n, [q, A]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [n, [q, M], [p, u]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [n, [q, H], [p, v]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [n, [q, H], [p, u]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[n, /_/g, " "], [q, O], [p, u]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[n, /_/g, " "], [q, O], [p, v]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [n, [q, "OPPO"], [p, u]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [n, [q, "Vivo"], [p, u]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [n, [q, "Realme"], [p, u]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [n, [q, J], [p, u]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [n, [q, J], [p, v]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [n, [q, "LG"], [p, v]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [n, [q, "LG"], [p, u]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [n, [q, "Lenovo"], [p, v]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[n, /_/g, " "], [q, "Nokia"], [p, u]], [/(pixel c)\b/i], [n, [q, G], [p, v]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [n, [q, G], [p, u]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [n, [q, N], [p, u]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[n, "Xperia Tablet"], [q, N], [p, v]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [n, [q, "OnePlus"], [p, u]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [n, [q, z], [p, v]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[n, /(.+)/g, "Fire Phone $1"], [q, z], [p, u]], [/(playbook);[-\w\),; ]+(rim)/i], [n, q, [p, v]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [n, [q, C], [p, u]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [n, [q, B], [p, v]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [n, [q, B], [p, u]], [/(nexus 9)/i], [n, [q, "HTC"], [p, v]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [q, [n, /_/g, " "], [p, u]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [n, [q, "Acer"], [p, v]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [n, [q, "Meizu"], [p, u]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [q, n, [p, u]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [q, n, [p, v]], [/(surface duo)/i], [n, [q, I], [p, v]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [n, [q, "Fairphone"], [p, u]], [/(u304aa)/i], [n, [q, "AT&T"], [p, u]], [/\bsie-(\w*)/i], [n, [q, "Siemens"], [p, u]], [/\b(rct\w+) b/i], [n, [q, "RCA"], [p, v]], [/\b(venue[\d ]{2,7}) b/i], [n, [q, "Dell"], [p, v]], [/\b(q(?:mv|ta)\w+) b/i], [n, [q, "Verizon"], [p, v]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [n, [q, "Barnes & Noble"], [p, v]], [/\b(tm\d{3}\w+) b/i], [n, [q, "NuVision"], [p, v]], [/\b(k88) b/i], [n, [q, "ZTE"], [p, v]], [/\b(nx\d{3}j) b/i], [n, [q, "ZTE"], [p, u]], [/\b(gen\d{3}) b.+49h/i], [n, [q, "Swiss"], [p, u]], [/\b(zur\d{3}) b/i], [n, [q, "Swiss"], [p, v]], [/\b((zeki)?tb.*\b) b/i], [n, [q, "Zeki"], [p, v]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[q, "Dragon Touch"], n, [p, v]], [/\b(ns-?\w{0,9}) b/i], [n, [q, "Insignia"], [p, v]], [/\b((nxa|next)-?\w{0,9}) b/i], [n, [q, "NextBook"], [p, v]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[q, "Voice"], n, [p, u]], [/\b(lvtel\-)?(v1[12]) b/i], [[q, "LvTel"], n, [p, u]], [/\b(ph-1) /i], [n, [q, "Essential"], [p, u]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [n, [q, "Envizen"], [p, v]], [/\b(trio[-\w\. ]+) b/i], [n, [q, "MachSpeed"], [p, v]], [/\btu_(1491) b/i], [n, [q, "Rotor"], [p, v]], [/(shield[\w ]+) b/i], [n, [q, "Nvidia"], [p, v]], [/(sprint) (\w+)/i], [q, n, [p, u]], [/(kin\.[onetw]{3})/i], [[n, /\./g, " "], [q, I], [p, u]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [n, [q, P], [p, v]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [n, [q, P], [p, u]], [/smart-tv.+(samsung)/i], [q, [p, w]], [/hbbtv.+maple;(\d+)/i], [[n, /^/, "SmartTV"], [q, L], [p, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[q, "LG"], [p, w]], [/(apple) ?tv/i], [q, [n, A + " TV"], [p, w]], [/crkey/i], [[n, E + "cast"], [q, G], [p, w]], [/droid.+aft(\w)( bui|\))/i], [n, [q, z], [p, w]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [n, [q, M], [p, w]], [/(bravia[\w ]+)( bui|\))/i], [n, [q, N], [p, w]], [/(mitv-\w{5}) bui/i], [n, [q, O], [p, w]], [/Hbbtv.*(technisat) (.*);/i], [q, n, [p, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[q, X], [n, X], [p, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, w]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [q, n, [p, t]], [/droid.+; (shield) bui/i], [n, [q, "Nvidia"], [p, t]], [/(playstation [345portablevi]+)/i], [n, [q, N], [p, t]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [n, [q, I], [p, t]], [/((pebble))app/i], [q, n, [p, x]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [n, [q, A], [p, x]], [/droid.+; (glass) \d/i], [n, [q, G], [p, x]], [/droid.+; (wt63?0{2,3})\)/i], [n, [q, P], [p, x]], [/(quest( 2| pro)?)/i], [n, [q, Q], [p, x]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [q, [p, y]], [/(aeobc)\b/i], [n, [q, z], [p, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [n, [p, u]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [n, [p, v]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, v]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, u]], [/(android[-\w\. ]{0,9});.+buil/i], [n, [q, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [r, [o, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [r, [o, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [o, r], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [r, o]], os: [[/microsoft (windows) (vista|xp)/i], [o, r], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [o, [r, Z, $]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[o, "Windows"], [r, Z, $]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[r, /_/g, "."], [o, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[o, S], [r, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [r, o], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [o, r], [/\(bb(10);/i], [r, [o, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [r, [o, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [r, [o, F + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [r, [o, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [r, [o, "watchOS"]], [/crkey\/([\d\.]+)/i], [r, [o, E + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[o, R], r], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [o, r], [/(sunos) ?([\w\.\d]*)/i], [[o, "Solaris"], r], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [o, r]] }, aa = function(a2, b2) {
              if (typeof a2 === k && (b2 = a2, a2 = h), !(this instanceof aa)) return new aa(a2, b2).getResult();
              var c2 = typeof g2 !== j && g2.navigator ? g2.navigator : h, d2 = a2 || (c2 && c2.userAgent ? c2.userAgent : ""), e3 = c2 && c2.userAgentData ? c2.userAgentData : h, f3 = b2 ? T(_, b2) : _, t2 = c2 && c2.userAgent == d2;
              return this.getBrowser = function() {
                var a3, b3 = {};
                return b3[o] = h, b3[r] = h, Y.call(b3, d2, f3.browser), b3[m] = typeof (a3 = b3[r]) === l ? a3.replace(/[^\d\.]/g, "").split(".")[0] : h, t2 && c2 && c2.brave && typeof c2.brave.isBrave == i && (b3[o] = "Brave"), b3;
              }, this.getCPU = function() {
                var a3 = {};
                return a3[s] = h, Y.call(a3, d2, f3.cpu), a3;
              }, this.getDevice = function() {
                var a3 = {};
                return a3[q] = h, a3[n] = h, a3[p] = h, Y.call(a3, d2, f3.device), t2 && !a3[p] && e3 && e3.mobile && (a3[p] = u), t2 && "Macintosh" == a3[n] && c2 && typeof c2.standalone !== j && c2.maxTouchPoints && c2.maxTouchPoints > 2 && (a3[n] = "iPad", a3[p] = v), a3;
              }, this.getEngine = function() {
                var a3 = {};
                return a3[o] = h, a3[r] = h, Y.call(a3, d2, f3.engine), a3;
              }, this.getOS = function() {
                var a3 = {};
                return a3[o] = h, a3[r] = h, Y.call(a3, d2, f3.os), t2 && !a3[o] && e3 && "Unknown" != e3.platform && (a3[o] = e3.platform.replace(/chrome os/i, R).replace(/macos/i, S)), a3;
              }, this.getResult = function() {
                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
              }, this.getUA = function() {
                return d2;
              }, this.setUA = function(a3) {
                return d2 = typeof a3 === l && a3.length > 350 ? X(a3, 350) : a3, this;
              }, this.setUA(d2), this;
            };
            aa.VERSION = "1.0.35", aa.BROWSER = U([o, r, m]), aa.CPU = U([s]), aa.DEVICE = U([n, q, p, t, u, w, v, x, y]), aa.ENGINE = aa.OS = U([o, r]), typeof f2 !== j ? (e2.exports && (f2 = e2.exports = aa), f2.UAParser = aa) : c.amdO ? void 0 === (d = function() {
              return aa;
            }.call(b, c, b, a)) || (a.exports = d) : typeof g2 !== j && (g2.UAParser = aa);
            var ab = typeof g2 !== j && (g2.jQuery || g2.Zepto);
            if (ab && !ab.ua) {
              var ac = new aa();
              ab.ua = ac.getResult(), ab.ua.get = function() {
                return ac.getUA();
              }, ab.ua.set = function(a2) {
                ac.setUA(a2);
                var b2 = ac.getResult();
                for (var c2 in b2) ab.ua[c2] = b2[c2];
              };
            }
          }("object" == typeof window ? window : this);
        } }, f = {};
        function g(a2) {
          var b2 = f[a2];
          if (void 0 !== b2) return b2.exports;
          var c2 = f[a2] = { exports: {} }, d2 = true;
          try {
            e[a2].call(c2.exports, c2, c2.exports, g), d2 = false;
          } finally {
            d2 && delete f[a2];
          }
          return c2.exports;
        }
        g.ab = "//", a.exports = g(226);
      })();
    }, 4700: (a, b, c) => {
      "use strict";
      function d(a2) {
        return a2.replace(/\/$/, "") || "/";
      }
      function e(a2) {
        let b2 = a2.indexOf("#"), c2 = a2.indexOf("?"), d2 = c2 > -1 && (b2 < 0 || c2 < b2);
        return d2 || b2 > -1 ? { pathname: a2.substring(0, d2 ? c2 : b2), query: d2 ? a2.substring(c2, b2 > -1 ? b2 : void 0) : "", hash: b2 > -1 ? a2.slice(b2) : "" } : { pathname: a2, query: "", hash: "" };
      }
      function f(a2, b2) {
        if (!a2.startsWith("/") || !b2) return a2;
        let { pathname: c2, query: d2, hash: f2 } = e(a2);
        return "" + b2 + c2 + d2 + f2;
      }
      function g(a2, b2) {
        if (!a2.startsWith("/") || !b2) return a2;
        let { pathname: c2, query: d2, hash: f2 } = e(a2);
        return "" + c2 + b2 + d2 + f2;
      }
      function h(a2, b2) {
        if ("string" != typeof a2) return false;
        let { pathname: c2 } = e(a2);
        return c2 === b2 || c2.startsWith(b2 + "/");
      }
      c.d(b, { X: () => n });
      let i = /* @__PURE__ */ new WeakMap();
      function j(a2, b2) {
        let c2;
        if (!b2) return { pathname: a2 };
        let d2 = i.get(b2);
        d2 || (d2 = b2.map((a3) => a3.toLowerCase()), i.set(b2, d2));
        let e2 = a2.split("/", 2);
        if (!e2[1]) return { pathname: a2 };
        let f2 = e2[1].toLowerCase(), g2 = d2.indexOf(f2);
        return g2 < 0 ? { pathname: a2 } : (c2 = b2[g2], { pathname: a2 = a2.slice(c2.length + 1) || "/", detectedLocale: c2 });
      }
      let k = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
      function l(a2, b2) {
        return new URL(String(a2).replace(k, "localhost"), b2 && String(b2).replace(k, "localhost"));
      }
      let m = Symbol("NextURLInternal");
      class n {
        constructor(a2, b2, c2) {
          let d2, e2;
          "object" == typeof b2 && "pathname" in b2 || "string" == typeof b2 ? (d2 = b2, e2 = c2 || {}) : e2 = c2 || b2 || {}, this[m] = { url: l(a2, d2 ?? e2.base), options: e2, basePath: "" }, this.analyze();
        }
        analyze() {
          var a2, b2, c2, d2, e2;
          let f2 = function(a3, b3) {
            var c3, d3;
            let { basePath: e3, i18n: f3, trailingSlash: g3 } = null != (c3 = b3.nextConfig) ? c3 : {}, i3 = { pathname: a3, trailingSlash: "/" !== a3 ? a3.endsWith("/") : g3 };
            e3 && h(i3.pathname, e3) && (i3.pathname = function(a4, b4) {
              if (!h(a4, b4)) return a4;
              let c4 = a4.slice(b4.length);
              return c4.startsWith("/") ? c4 : "/" + c4;
            }(i3.pathname, e3), i3.basePath = e3);
            let k2 = i3.pathname;
            if (i3.pathname.startsWith("/_next/data/") && i3.pathname.endsWith(".json")) {
              let a4 = i3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
              i3.buildId = a4[0], k2 = "index" !== a4[1] ? "/" + a4.slice(1).join("/") : "/", true === b3.parseData && (i3.pathname = k2);
            }
            if (f3) {
              let a4 = b3.i18nProvider ? b3.i18nProvider.analyze(i3.pathname) : j(i3.pathname, f3.locales);
              i3.locale = a4.detectedLocale, i3.pathname = null != (d3 = a4.pathname) ? d3 : i3.pathname, !a4.detectedLocale && i3.buildId && (a4 = b3.i18nProvider ? b3.i18nProvider.analyze(k2) : j(k2, f3.locales)).detectedLocale && (i3.locale = a4.detectedLocale);
            }
            return i3;
          }(this[m].url.pathname, { nextConfig: this[m].options.nextConfig, parseData: true, i18nProvider: this[m].options.i18nProvider }), g2 = function(a3, b3) {
            let c3;
            if ((null == b3 ? void 0 : b3.host) && !Array.isArray(b3.host)) c3 = b3.host.toString().split(":", 1)[0];
            else {
              if (!a3.hostname) return;
              c3 = a3.hostname;
            }
            return c3.toLowerCase();
          }(this[m].url, this[m].options.headers);
          this[m].domainLocale = this[m].options.i18nProvider ? this[m].options.i18nProvider.detectDomainLocale(g2) : function(a3, b3, c3) {
            if (a3) for (let f3 of (c3 && (c3 = c3.toLowerCase()), a3)) {
              var d3, e3;
              if (b3 === (null == (d3 = f3.domain) ? void 0 : d3.split(":", 1)[0].toLowerCase()) || c3 === f3.defaultLocale.toLowerCase() || (null == (e3 = f3.locales) ? void 0 : e3.some((a4) => a4.toLowerCase() === c3))) return f3;
            }
          }(null == (b2 = this[m].options.nextConfig) || null == (a2 = b2.i18n) ? void 0 : a2.domains, g2);
          let i2 = (null == (c2 = this[m].domainLocale) ? void 0 : c2.defaultLocale) || (null == (e2 = this[m].options.nextConfig) || null == (d2 = e2.i18n) ? void 0 : d2.defaultLocale);
          this[m].url.pathname = f2.pathname, this[m].defaultLocale = i2, this[m].basePath = f2.basePath ?? "", this[m].buildId = f2.buildId, this[m].locale = f2.locale ?? i2, this[m].trailingSlash = f2.trailingSlash;
        }
        formatPathname() {
          var a2;
          let b2;
          return b2 = function(a3, b3, c2, d2) {
            if (!b3 || b3 === c2) return a3;
            let e2 = a3.toLowerCase();
            return !d2 && (h(e2, "/api") || h(e2, "/" + b3.toLowerCase())) ? a3 : f(a3, "/" + b3);
          }((a2 = { basePath: this[m].basePath, buildId: this[m].buildId, defaultLocale: this[m].options.forceLocale ? void 0 : this[m].defaultLocale, locale: this[m].locale, pathname: this[m].url.pathname, trailingSlash: this[m].trailingSlash }).pathname, a2.locale, a2.buildId ? void 0 : a2.defaultLocale, a2.ignorePrefix), (a2.buildId || !a2.trailingSlash) && (b2 = d(b2)), a2.buildId && (b2 = g(f(b2, "/_next/data/" + a2.buildId), "/" === a2.pathname ? "index.json" : ".json")), b2 = f(b2, a2.basePath), !a2.buildId && a2.trailingSlash ? b2.endsWith("/") ? b2 : g(b2, "/") : d(b2);
        }
        formatSearch() {
          return this[m].url.search;
        }
        get buildId() {
          return this[m].buildId;
        }
        set buildId(a2) {
          this[m].buildId = a2;
        }
        get locale() {
          return this[m].locale ?? "";
        }
        set locale(a2) {
          var b2, c2;
          if (!this[m].locale || !(null == (c2 = this[m].options.nextConfig) || null == (b2 = c2.i18n) ? void 0 : b2.locales.includes(a2))) throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${a2}"`), "__NEXT_ERROR_CODE", { value: "E597", enumerable: false, configurable: true });
          this[m].locale = a2;
        }
        get defaultLocale() {
          return this[m].defaultLocale;
        }
        get domainLocale() {
          return this[m].domainLocale;
        }
        get searchParams() {
          return this[m].url.searchParams;
        }
        get host() {
          return this[m].url.host;
        }
        set host(a2) {
          this[m].url.host = a2;
        }
        get hostname() {
          return this[m].url.hostname;
        }
        set hostname(a2) {
          this[m].url.hostname = a2;
        }
        get port() {
          return this[m].url.port;
        }
        set port(a2) {
          this[m].url.port = a2;
        }
        get protocol() {
          return this[m].url.protocol;
        }
        set protocol(a2) {
          this[m].url.protocol = a2;
        }
        get href() {
          let a2 = this.formatPathname(), b2 = this.formatSearch();
          return `${this.protocol}//${this.host}${a2}${b2}${this.hash}`;
        }
        set href(a2) {
          this[m].url = l(a2), this.analyze();
        }
        get origin() {
          return this[m].url.origin;
        }
        get pathname() {
          return this[m].url.pathname;
        }
        set pathname(a2) {
          this[m].url.pathname = a2;
        }
        get hash() {
          return this[m].url.hash;
        }
        set hash(a2) {
          this[m].url.hash = a2;
        }
        get search() {
          return this[m].url.search;
        }
        set search(a2) {
          this[m].url.search = a2;
        }
        get password() {
          return this[m].url.password;
        }
        set password(a2) {
          this[m].url.password = a2;
        }
        get username() {
          return this[m].url.username;
        }
        set username(a2) {
          this[m].url.username = a2;
        }
        get basePath() {
          return this[m].basePath;
        }
        set basePath(a2) {
          this[m].basePath = a2.startsWith("/") ? a2 : `/${a2}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new n(String(this), this[m].options);
        }
      }
    }, 4931: (a) => {
      "use strict";
      a.exports = d, a.exports.preferredEncodings = d;
      var b = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function c(a2, b2, c2) {
        var d2 = 0;
        if (b2.encoding.toLowerCase() === a2.toLowerCase()) d2 |= 1;
        else if ("*" !== b2.encoding) return null;
        return { encoding: a2, i: c2, o: b2.i, q: b2.q, s: d2 };
      }
      function d(a2, d2, h) {
        var i = function(a3) {
          for (var d3 = a3.split(","), e2 = false, f2 = 1, g2 = 0, h2 = 0; g2 < d3.length; g2++) {
            var i2 = function(a4, c2) {
              var d4 = b.exec(a4);
              if (!d4) return null;
              var e3 = d4[1], f3 = 1;
              if (d4[2]) for (var g3 = d4[2].split(";"), h3 = 0; h3 < g3.length; h3++) {
                var i3 = g3[h3].trim().split("=");
                if ("q" === i3[0]) {
                  f3 = parseFloat(i3[1]);
                  break;
                }
              }
              return { encoding: e3, q: f3, i: c2 };
            }(d3[g2].trim(), g2);
            i2 && (d3[h2++] = i2, e2 = e2 || c("identity", i2), f2 = Math.min(f2, i2.q || 1));
          }
          return e2 || (d3[h2++] = { encoding: "identity", q: f2, i: g2 }), d3.length = h2, d3;
        }(a2 || ""), j = h ? function(a3, b2) {
          if (a3.q !== b2.q) return b2.q - a3.q;
          var c2 = h.indexOf(a3.encoding), d3 = h.indexOf(b2.encoding);
          return -1 === c2 && -1 === d3 ? b2.s - a3.s || a3.o - b2.o || a3.i - b2.i : -1 !== c2 && -1 !== d3 ? c2 - d3 : -1 === c2 ? 1 : -1;
        } : e;
        if (!d2) return i.filter(g).sort(j).map(f);
        var k = d2.map(function(a3, b2) {
          for (var d3 = { encoding: a3, o: -1, q: 0, s: 0 }, e2 = 0; e2 < i.length; e2++) {
            var f2 = c(a3, i[e2], b2);
            f2 && 0 > (d3.s - f2.s || d3.q - f2.q || d3.o - f2.o) && (d3 = f2);
          }
          return d3;
        });
        return k.filter(g).sort(j).map(function(a3) {
          return d2[k.indexOf(a3)];
        });
      }
      function e(a2, b2) {
        return b2.q - a2.q || b2.s - a2.s || a2.o - b2.o || a2.i - b2.i;
      }
      function f(a2) {
        return a2.encoding;
      }
      function g(a2) {
        return a2.q > 0;
      }
    }, 4944: (a, b, c) => {
      "use strict";
      c.d(b, { nJ: () => g, oJ: () => e, zB: () => f });
      var d = c(1378);
      let e = "NEXT_REDIRECT";
      var f = function(a2) {
        return a2.push = "push", a2.replace = "replace", a2;
      }({});
      function g(a2) {
        if ("object" != typeof a2 || null === a2 || !("digest" in a2) || "string" != typeof a2.digest) return false;
        let b2 = a2.digest.split(";"), [c2, f2] = b2, g2 = b2.slice(2, -2).join(";"), h = Number(b2.at(-2));
        return c2 === e && ("replace" === f2 || "push" === f2) && "string" == typeof g2 && !isNaN(h) && h in d.Q;
      }
    }, 4979: (a, b, c) => {
      "use strict";
      c.d(b, { f: () => d });
      class d extends Error {
        constructor(...a2) {
          super(...a2), this.code = "NEXT_STATIC_GEN_BAILOUT";
        }
      }
    }, 5211: (a, b, c) => {
      "use strict";
      var d = c(6660);
      function e() {
        for (var a2 = arguments.length, b2 = Array(a2), c2 = 0; c2 < a2; c2++) b2[c2] = arguments[c2];
        return b2.filter(Boolean).join(".");
      }
      function f(a2) {
        return e(a2.namespace, a2.key);
      }
      function g(a2) {
        console.error(a2);
      }
      function h(a2, b2) {
        return d.memoize(a2, { cache: { create: () => ({ get: (a3) => b2[a3], set(a3, c2) {
          b2[a3] = c2;
        } }) }, strategy: d.strategies.variadic });
      }
      function i(a2, b2) {
        return h(function() {
          for (var b3 = arguments.length, c2 = Array(b3), d2 = 0; d2 < b3; d2++) c2[d2] = arguments[d2];
          return new a2(...c2);
        }, b2);
      }
      b.createCache = function() {
        return { dateTime: {}, number: {}, message: {}, relativeTime: {}, pluralRules: {}, list: {}, displayNames: {} };
      }, b.createIntlFormatters = function(a2) {
        return { getDateTimeFormat: i(Intl.DateTimeFormat, a2.dateTime), getNumberFormat: i(Intl.NumberFormat, a2.number), getPluralRules: i(Intl.PluralRules, a2.pluralRules), getRelativeTimeFormat: i(Intl.RelativeTimeFormat, a2.relativeTime), getListFormat: i(Intl.ListFormat, a2.list), getDisplayNames: i(Intl.DisplayNames, a2.displayNames) };
      }, b.defaultGetMessageFallback = f, b.defaultOnError = g, b.initializeConfig = function(a2) {
        let { getMessageFallback: b2, messages: c2, onError: d2, ...e2 } = a2;
        return { ...e2, messages: c2, onError: d2 || g, getMessageFallback: b2 || f };
      }, b.joinPath = e, b.memoFn = h;
    }, 5231: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true });
      var d = c(2634), e = c(2269), f = c(8279), g = c(403), h = c(4058), i = c(5641), j = c(9160), k = c(9644);
      b.default = function(a2, b2) {
        var c2, l, m;
        let n = e.receiveRoutingConfig({ ...a2, alternateLinks: null != (c2 = null == b2 ? void 0 : b2.alternateLinks) ? c2 : a2.alternateLinks, localeDetection: null != (l = null == b2 ? void 0 : b2.localeDetection) ? l : a2.localeDetection, localeCookie: null != (m = null == b2 ? void 0 : b2.localeCookie) ? m : a2.localeCookie });
        return function(a3) {
          var b3;
          let c3;
          try {
            c3 = decodeURI(a3.nextUrl.pathname);
          } catch (a4) {
            return d.NextResponse.next();
          }
          let e2 = k.sanitizePathname(c3), { domain: l2, locale: m2 } = i.default(n, a3.headers, a3.cookies, e2), o = l2 ? l2.defaultLocale === m2 : m2 === n.defaultLocale, p = (null == (b3 = n.domains) ? void 0 : b3.filter((a4) => k.isLocaleSupportedOnDomain(m2, a4))) || [], q = null != n.domains && !l2;
          function r(b4) {
            let c4 = new URL(b4, a3.url);
            a3.nextUrl.basePath && (c4.pathname = k.applyBasePath(c4.pathname, a3.nextUrl.basePath));
            let e3 = new Headers(a3.headers);
            return e3.set(f.HEADER_LOCALE_NAME, m2), d.NextResponse.rewrite(c4, { request: { headers: e3 } });
          }
          function s(b4, c4) {
            var e3, f2;
            let h2 = new URL(b4, a3.url);
            if (h2.pathname = g.normalizeTrailingSlash(h2.pathname), p.length > 0 && !c4 && l2) {
              let a4 = k.getBestMatchingDomain(l2, m2, p);
              a4 && (c4 = a4.domain, a4.defaultLocale === m2 && "as-needed" === n.localePrefix.mode && (h2.pathname = k.getNormalizedPathname(h2.pathname, n.locales, n.localePrefix)));
            }
            return c4 && (h2.host = c4, a3.headers.get("x-forwarded-host") && (h2.protocol = null != (e3 = a3.headers.get("x-forwarded-proto")) ? e3 : a3.nextUrl.protocol, h2.port = null != (f2 = a3.headers.get("x-forwarded-port")) ? f2 : "")), a3.nextUrl.basePath && (h2.pathname = k.applyBasePath(h2.pathname, a3.nextUrl.basePath)), d.NextResponse.redirect(h2.toString());
          }
          let t = k.getNormalizedPathname(e2, n.locales, n.localePrefix), u = k.getPathnameMatch(e2, n.locales, n.localePrefix), v = null != u, w = "never" === n.localePrefix.mode || o && "as-needed" === n.localePrefix.mode, x, y, z = t, A = n.pathnames;
          if (A) {
            let b4;
            if ([b4, y] = k.getInternalTemplate(A, t, m2), y) {
              let c4 = A[y], d2 = "string" == typeof c4 ? c4 : c4[m2];
              if (g.matchesPathname(d2, t)) z = k.formatTemplatePathname(t, d2, y);
              else {
                let e3;
                e3 = b4 ? "string" == typeof c4 ? c4 : c4[b4] : y;
                let f2 = w ? void 0 : g.getLocalePrefix(m2, n.localePrefix), h2 = k.formatTemplatePathname(t, e3, d2);
                x = s(k.formatPathname(h2, f2, a3.nextUrl.search));
              }
            }
          }
          if (!x) if ("/" !== z || v) {
            let b4 = k.formatPathname(z, k.getLocaleAsPrefix(m2), a3.nextUrl.search);
            if (v) {
              let c4 = k.formatPathname(t, u.prefix, a3.nextUrl.search);
              if ("never" === n.localePrefix.mode) x = s(k.formatPathname(t, void 0, a3.nextUrl.search));
              else if (u.exact) if (o && w) x = s(k.formatPathname(t, void 0, a3.nextUrl.search));
              else if (n.domains) {
                let a4 = k.getBestMatchingDomain(l2, u.locale, p);
                x = (null == l2 ? void 0 : l2.domain) === (null == a4 ? void 0 : a4.domain) || q ? r(b4) : s(c4, null == a4 ? void 0 : a4.domain);
              } else x = r(b4);
              else x = s(c4);
            } else x = w ? r(b4) : s(k.formatPathname(t, g.getLocalePrefix(m2, n.localePrefix), a3.nextUrl.search));
          } else x = w ? r(k.formatPathname(z, k.getLocaleAsPrefix(m2), a3.nextUrl.search)) : s(k.formatPathname(t, g.getLocalePrefix(m2, n.localePrefix), a3.nextUrl.search));
          return n.localeDetection && n.localeCookie && j.default(a3, x, m2, n.localeCookie), "never" !== n.localePrefix.mode && n.alternateLinks && n.locales.length > 1 && x.headers.set("Link", h.default({ routing: n, localizedPathnames: null != y && A ? A[y] : void 0, request: a3, resolvedLocale: m2 })), x;
        };
      };
    }, 5356: (a) => {
      "use strict";
      a.exports = (init_node_buffer(), __toCommonJS(node_buffer_exports));
    }, 5379: (a, b, c) => {
      "use strict";
      c.d(b, { J: () => d });
      let d = (0, c(2058).xl)();
    }, 5392: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true }), !function(a2, b2) {
        for (var c2 in b2) Object.defineProperty(a2, c2, { enumerable: true, get: b2[c2] });
      }(b, { getTestReqInfo: function() {
        return g;
      }, withRequest: function() {
        return f;
      } });
      let d = new (c(5521)).AsyncLocalStorage();
      function e(a2, b2) {
        let c2 = b2.header(a2, "next-test-proxy-port");
        if (!c2) return;
        let d2 = b2.url(a2);
        return { url: d2, proxyPort: Number(c2), testData: b2.header(a2, "next-test-data") || "" };
      }
      function f(a2, b2, c2) {
        let f2 = e(a2, b2);
        return f2 ? d.run(f2, c2) : c2();
      }
      function g(a2, b2) {
        let c2 = d.getStore();
        return c2 || (a2 && b2 ? e(a2, b2) : void 0);
      }
    }, 5521: (a) => {
      "use strict";
      a.exports = (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports));
    }, 5566: (a, b, c) => {
      "use strict";
      c.d(b, { Z: () => d });
      let d = (0, c(7669).xl)();
    }, 5641: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true });
      var d = c(9904), e = c(8366), f = c(9644), g = function(a2) {
        return a2 && a2.__esModule ? a2 : { default: a2 };
      }(e);
      function h(a2, b2, c2) {
        let e2, f2 = new g.default({ headers: { "accept-language": a2.get("accept-language") || void 0 } }).languages();
        try {
          let a3 = b2.slice().sort((a4, b3) => b3.length - a4.length);
          e2 = d.match(f2, a3, c2);
        } catch (a3) {
        }
        return e2;
      }
      function i(a2, b2) {
        if (a2.localeCookie && b2.has(a2.localeCookie.name)) {
          var c2;
          let d2 = null == (c2 = b2.get(a2.localeCookie.name)) ? void 0 : c2.value;
          if (d2 && a2.locales.includes(d2)) return d2;
        }
      }
      function j(a2, b2, c2, d2) {
        var e2;
        let g2;
        return d2 && (g2 = null == (e2 = f.getPathnameMatch(d2, a2.locales, a2.localePrefix)) ? void 0 : e2.locale), !g2 && a2.localeDetection && (g2 = i(a2, c2)), !g2 && a2.localeDetection && (g2 = h(b2, a2.locales, a2.defaultLocale)), g2 || (g2 = a2.defaultLocale), g2;
      }
      b.default = function(a2, b2, c2, d2) {
        return a2.domains ? function(a3, b3, c3, d3) {
          let e2, g2 = function(a4, b4) {
            let c4 = f.getHost(a4);
            if (c4) return b4.find((a5) => a5.domain === c4);
          }(b3, a3.domains);
          if (!g2) return { locale: j(a3, b3, c3, d3) };
          if (d3) {
            var k;
            let b4 = null == (k = f.getPathnameMatch(d3, a3.locales, a3.localePrefix)) ? void 0 : k.locale;
            if (b4) {
              if (!f.isLocaleSupportedOnDomain(b4, g2)) return { locale: b4, domain: g2 };
              e2 = b4;
            }
          }
          if (!e2 && a3.localeDetection) {
            let b4 = i(a3, c3);
            b4 && f.isLocaleSupportedOnDomain(b4, g2) && (e2 = b4);
          }
          if (!e2 && a3.localeDetection) {
            let c4 = h(b3, g2.locales || a3.locales, g2.defaultLocale);
            c4 && (e2 = c4);
          }
          return e2 || (e2 = g2.defaultLocale), { locale: e2, domain: g2 };
        }(a2, b2, c2, d2) : { locale: j(a2, b2, c2, d2) };
      }, b.getAcceptLanguageLocale = h;
    }, 5663: (a) => {
      (() => {
        "use strict";
        "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//");
        var b = {};
        (() => {
          b.parse = function(b2, c2) {
            if ("string" != typeof b2) throw TypeError("argument str must be a string");
            for (var e2 = {}, f = b2.split(d), g = (c2 || {}).decode || a2, h = 0; h < f.length; h++) {
              var i = f[h], j = i.indexOf("=");
              if (!(j < 0)) {
                var k = i.substr(0, j).trim(), l = i.substr(++j, i.length).trim();
                '"' == l[0] && (l = l.slice(1, -1)), void 0 == e2[k] && (e2[k] = function(a3, b3) {
                  try {
                    return b3(a3);
                  } catch (b4) {
                    return a3;
                  }
                }(l, g));
              }
            }
            return e2;
          }, b.serialize = function(a3, b2, d2) {
            var f = d2 || {}, g = f.encode || c;
            if ("function" != typeof g) throw TypeError("option encode is invalid");
            if (!e.test(a3)) throw TypeError("argument name is invalid");
            var h = g(b2);
            if (h && !e.test(h)) throw TypeError("argument val is invalid");
            var i = a3 + "=" + h;
            if (null != f.maxAge) {
              var j = f.maxAge - 0;
              if (isNaN(j) || !isFinite(j)) throw TypeError("option maxAge is invalid");
              i += "; Max-Age=" + Math.floor(j);
            }
            if (f.domain) {
              if (!e.test(f.domain)) throw TypeError("option domain is invalid");
              i += "; Domain=" + f.domain;
            }
            if (f.path) {
              if (!e.test(f.path)) throw TypeError("option path is invalid");
              i += "; Path=" + f.path;
            }
            if (f.expires) {
              if ("function" != typeof f.expires.toUTCString) throw TypeError("option expires is invalid");
              i += "; Expires=" + f.expires.toUTCString();
            }
            if (f.httpOnly && (i += "; HttpOnly"), f.secure && (i += "; Secure"), f.sameSite) switch ("string" == typeof f.sameSite ? f.sameSite.toLowerCase() : f.sameSite) {
              case true:
              case "strict":
                i += "; SameSite=Strict";
                break;
              case "lax":
                i += "; SameSite=Lax";
                break;
              case "none":
                i += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
            return i;
          };
          var a2 = decodeURIComponent, c = encodeURIComponent, d = /; */, e = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        })(), a.exports = b;
      })();
    }, 5770: (a, b, c) => {
      "use strict";
      function d(a2) {
        return "object" == typeof a2 && null !== a2 && "digest" in a2 && a2.digest === e;
      }
      c.d(b, { Ts: () => d, W5: () => h });
      let e = "HANGING_PROMISE_REJECTION";
      class f extends Error {
        constructor(a2, b2) {
          super(`During prerendering, ${b2} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b2} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a2}".`), this.route = a2, this.expression = b2, this.digest = e;
        }
      }
      let g = /* @__PURE__ */ new WeakMap();
      function h(a2, b2, c2) {
        if (a2.aborted) return Promise.reject(new f(b2, c2));
        {
          let d2 = new Promise((d3, e2) => {
            let h2 = e2.bind(null, new f(b2, c2)), i2 = g.get(a2);
            if (i2) i2.push(h2);
            else {
              let b3 = [h2];
              g.set(a2, b3), a2.addEventListener("abort", () => {
                for (let a3 = 0; a3 < b3.length; a3++) b3[a3]();
              }, { once: true });
            }
          });
          return d2.catch(i), d2;
        }
      }
      function i() {
      }
    }, 5862: (a) => {
      "use strict";
      a.exports = d, a.exports.preferredLanguages = d;
      var b = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
      function c(a2, c2) {
        var d2 = b.exec(a2);
        if (!d2) return null;
        var e2 = d2[1], f2 = d2[2], g2 = e2;
        f2 && (g2 += "-" + f2);
        var h = 1;
        if (d2[3]) for (var i = d2[3].split(";"), j = 0; j < i.length; j++) {
          var k = i[j].split("=");
          "q" === k[0] && (h = parseFloat(k[1]));
        }
        return { prefix: e2, suffix: f2, q: h, i: c2, full: g2 };
      }
      function d(a2, b2) {
        var d2 = function(a3) {
          for (var b3 = a3.split(","), d3 = 0, e2 = 0; d3 < b3.length; d3++) {
            var f2 = c(b3[d3].trim(), d3);
            f2 && (b3[e2++] = f2);
          }
          return b3.length = e2, b3;
        }(void 0 === a2 ? "*" : a2 || "");
        if (!b2) return d2.filter(g).sort(e).map(f);
        var h = b2.map(function(a3, b3) {
          for (var e2 = { o: -1, q: 0, s: 0 }, f2 = 0; f2 < d2.length; f2++) {
            var g2 = function(a4, b4, d3) {
              var e3 = c(a4);
              if (!e3) return null;
              var f3 = 0;
              if (b4.full.toLowerCase() === e3.full.toLowerCase()) f3 |= 4;
              else if (b4.prefix.toLowerCase() === e3.full.toLowerCase()) f3 |= 2;
              else if (b4.full.toLowerCase() === e3.prefix.toLowerCase()) f3 |= 1;
              else if ("*" !== b4.full) return null;
              return { i: d3, o: b4.i, q: b4.q, s: f3 };
            }(a3, d2[f2], b3);
            g2 && 0 > (e2.s - g2.s || e2.q - g2.q || e2.o - g2.o) && (e2 = g2);
          }
          return e2;
        });
        return h.filter(g).sort(e).map(function(a3) {
          return b2[h.indexOf(a3)];
        });
      }
      function e(a2, b2) {
        return b2.q - a2.q || b2.s - a2.s || a2.o - b2.o || a2.i - b2.i || 0;
      }
      function f(a2) {
        return a2.full;
      }
      function g(a2) {
        return a2.q > 0;
      }
    }, 6159: (a, b, c) => {
      "use strict";
      c.d(b, { F: () => e, h: () => f });
      let d = "DYNAMIC_SERVER_USAGE";
      class e extends Error {
        constructor(a2) {
          super("Dynamic server usage: " + a2), this.description = a2, this.digest = d;
        }
      }
      function f(a2) {
        return "object" == typeof a2 && null !== a2 && "digest" in a2 && "string" == typeof a2.digest && a2.digest === d;
      }
    }, 6206: (a, b, c) => {
      "use strict";
      c.d(b, { Cu: () => g, RD: () => f, p$: () => e, qU: () => h, wN: () => i });
      var d = c(9183);
      function e(a2) {
        let b2 = new Headers();
        for (let [c2, d2] of Object.entries(a2)) for (let a3 of Array.isArray(d2) ? d2 : [d2]) void 0 !== a3 && ("number" == typeof a3 && (a3 = a3.toString()), b2.append(c2, a3));
        return b2;
      }
      function f(a2) {
        var b2, c2, d2, e2, f2, g2 = [], h2 = 0;
        function i2() {
          for (; h2 < a2.length && /\s/.test(a2.charAt(h2)); ) h2 += 1;
          return h2 < a2.length;
        }
        for (; h2 < a2.length; ) {
          for (b2 = h2, f2 = false; i2(); ) if ("," === (c2 = a2.charAt(h2))) {
            for (d2 = h2, h2 += 1, i2(), e2 = h2; h2 < a2.length && "=" !== (c2 = a2.charAt(h2)) && ";" !== c2 && "," !== c2; ) h2 += 1;
            h2 < a2.length && "=" === a2.charAt(h2) ? (f2 = true, h2 = e2, g2.push(a2.substring(b2, d2)), b2 = h2) : h2 = d2 + 1;
          } else h2 += 1;
          (!f2 || h2 >= a2.length) && g2.push(a2.substring(b2, a2.length));
        }
        return g2;
      }
      function g(a2) {
        let b2 = {}, c2 = [];
        if (a2) for (let [d2, e2] of a2.entries()) "set-cookie" === d2.toLowerCase() ? (c2.push(...f(e2)), b2[d2] = 1 === c2.length ? c2[0] : c2) : b2[d2] = e2;
        return b2;
      }
      function h(a2) {
        try {
          return String(new URL(String(a2)));
        } catch (b2) {
          throw Object.defineProperty(Error(`URL is malformed "${String(a2)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: b2 }), "__NEXT_ERROR_CODE", { value: "E61", enumerable: false, configurable: true });
        }
      }
      function i(a2) {
        for (let b2 of [d.AA, d.h]) if (a2 !== b2 && a2.startsWith(b2)) return a2.substring(b2.length);
        return null;
      }
    }, 6440: (a, b) => {
      "use strict";
      var c = { H: null, A: null };
      function d(a2) {
        var b2 = "https://react.dev/errors/" + a2;
        if (1 < arguments.length) {
          b2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var c2 = 2; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
        }
        return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var e = Array.isArray;
      function f() {
      }
      var g = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), p = Symbol.iterator, q = Object.prototype.hasOwnProperty, r = Object.assign;
      function s(a2, b2, c2) {
        var d2 = c2.ref;
        return { $$typeof: g, type: a2, key: b2, ref: void 0 !== d2 ? d2 : null, props: c2 };
      }
      function t(a2) {
        return "object" == typeof a2 && null !== a2 && a2.$$typeof === g;
      }
      var u = /\/+/g;
      function v(a2, b2) {
        var c2, d2;
        return "object" == typeof a2 && null !== a2 && null != a2.key ? (c2 = "" + a2.key, d2 = { "=": "=0", ":": "=2" }, "$" + c2.replace(/[=:]/g, function(a3) {
          return d2[a3];
        })) : b2.toString(36);
      }
      function w(a2, b2, c2) {
        if (null == a2) return a2;
        var i2 = [], j2 = 0;
        return !function a3(b3, c3, i3, j3, k2) {
          var l2, m2, n2, q2 = typeof b3;
          ("undefined" === q2 || "boolean" === q2) && (b3 = null);
          var r2 = false;
          if (null === b3) r2 = true;
          else switch (q2) {
            case "bigint":
            case "string":
            case "number":
              r2 = true;
              break;
            case "object":
              switch (b3.$$typeof) {
                case g:
                case h:
                  r2 = true;
                  break;
                case o:
                  return a3((r2 = b3._init)(b3._payload), c3, i3, j3, k2);
              }
          }
          if (r2) return k2 = k2(b3), r2 = "" === j3 ? "." + v(b3, 0) : j3, e(k2) ? (i3 = "", null != r2 && (i3 = r2.replace(u, "$&/") + "/"), a3(k2, c3, i3, "", function(a4) {
            return a4;
          })) : null != k2 && (t(k2) && (l2 = k2, m2 = i3 + (null == k2.key || b3 && b3.key === k2.key ? "" : ("" + k2.key).replace(u, "$&/") + "/") + r2, k2 = s(l2.type, m2, l2.props)), c3.push(k2)), 1;
          r2 = 0;
          var w2 = "" === j3 ? "." : j3 + ":";
          if (e(b3)) for (var x2 = 0; x2 < b3.length; x2++) q2 = w2 + v(j3 = b3[x2], x2), r2 += a3(j3, c3, i3, q2, k2);
          else if ("function" == typeof (x2 = null === (n2 = b3) || "object" != typeof n2 ? null : "function" == typeof (n2 = p && n2[p] || n2["@@iterator"]) ? n2 : null)) for (b3 = x2.call(b3), x2 = 0; !(j3 = b3.next()).done; ) q2 = w2 + v(j3 = j3.value, x2++), r2 += a3(j3, c3, i3, q2, k2);
          else if ("object" === q2) {
            if ("function" == typeof b3.then) return a3(function(a4) {
              switch (a4.status) {
                case "fulfilled":
                  return a4.value;
                case "rejected":
                  throw a4.reason;
                default:
                  switch ("string" == typeof a4.status ? a4.then(f, f) : (a4.status = "pending", a4.then(function(b4) {
                    "pending" === a4.status && (a4.status = "fulfilled", a4.value = b4);
                  }, function(b4) {
                    "pending" === a4.status && (a4.status = "rejected", a4.reason = b4);
                  })), a4.status) {
                    case "fulfilled":
                      return a4.value;
                    case "rejected":
                      throw a4.reason;
                  }
              }
              throw a4;
            }(b3), c3, i3, j3, k2);
            throw Error(d(31, "[object Object]" === (c3 = String(b3)) ? "object with keys {" + Object.keys(b3).join(", ") + "}" : c3));
          }
          return r2;
        }(a2, i2, "", "", function(a3) {
          return b2.call(c2, a3, j2++);
        }), i2;
      }
      function x(a2) {
        if (-1 === a2._status) {
          var b2 = a2._result;
          (b2 = b2()).then(function(b3) {
            (0 === a2._status || -1 === a2._status) && (a2._status = 1, a2._result = b3);
          }, function(b3) {
            (0 === a2._status || -1 === a2._status) && (a2._status = 2, a2._result = b3);
          }), -1 === a2._status && (a2._status = 0, a2._result = b2);
        }
        if (1 === a2._status) return a2._result.default;
        throw a2._result;
      }
      function y() {
        return /* @__PURE__ */ new WeakMap();
      }
      function z() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      b.Children = { map: w, forEach: function(a2, b2, c2) {
        w(a2, function() {
          b2.apply(this, arguments);
        }, c2);
      }, count: function(a2) {
        var b2 = 0;
        return w(a2, function() {
          b2++;
        }), b2;
      }, toArray: function(a2) {
        return w(a2, function(a3) {
          return a3;
        }) || [];
      }, only: function(a2) {
        if (!t(a2)) throw Error(d(143));
        return a2;
      } }, b.Fragment = i, b.Profiler = k, b.StrictMode = j, b.Suspense = m, b.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, b.cache = function(a2) {
        return function() {
          var b2 = c.A;
          if (!b2) return a2.apply(null, arguments);
          var d2 = b2.getCacheForType(y);
          void 0 === (b2 = d2.get(a2)) && (b2 = z(), d2.set(a2, b2)), d2 = 0;
          for (var e2 = arguments.length; d2 < e2; d2++) {
            var f2 = arguments[d2];
            if ("function" == typeof f2 || "object" == typeof f2 && null !== f2) {
              var g2 = b2.o;
              null === g2 && (b2.o = g2 = /* @__PURE__ */ new WeakMap()), void 0 === (b2 = g2.get(f2)) && (b2 = z(), g2.set(f2, b2));
            } else null === (g2 = b2.p) && (b2.p = g2 = /* @__PURE__ */ new Map()), void 0 === (b2 = g2.get(f2)) && (b2 = z(), g2.set(f2, b2));
          }
          if (1 === b2.s) return b2.v;
          if (2 === b2.s) throw b2.v;
          try {
            var h2 = a2.apply(null, arguments);
            return (d2 = b2).s = 1, d2.v = h2;
          } catch (a3) {
            throw (h2 = b2).s = 2, h2.v = a3, a3;
          }
        };
      }, b.cacheSignal = function() {
        var a2 = c.A;
        return a2 ? a2.cacheSignal() : null;
      }, b.captureOwnerStack = function() {
        return null;
      }, b.cloneElement = function(a2, b2, c2) {
        if (null == a2) throw Error(d(267, a2));
        var e2 = r({}, a2.props), f2 = a2.key;
        if (null != b2) for (g2 in void 0 !== b2.key && (f2 = "" + b2.key), b2) q.call(b2, g2) && "key" !== g2 && "__self" !== g2 && "__source" !== g2 && ("ref" !== g2 || void 0 !== b2.ref) && (e2[g2] = b2[g2]);
        var g2 = arguments.length - 2;
        if (1 === g2) e2.children = c2;
        else if (1 < g2) {
          for (var h2 = Array(g2), i2 = 0; i2 < g2; i2++) h2[i2] = arguments[i2 + 2];
          e2.children = h2;
        }
        return s(a2.type, f2, e2);
      }, b.createElement = function(a2, b2, c2) {
        var d2, e2 = {}, f2 = null;
        if (null != b2) for (d2 in void 0 !== b2.key && (f2 = "" + b2.key), b2) q.call(b2, d2) && "key" !== d2 && "__self" !== d2 && "__source" !== d2 && (e2[d2] = b2[d2]);
        var g2 = arguments.length - 2;
        if (1 === g2) e2.children = c2;
        else if (1 < g2) {
          for (var h2 = Array(g2), i2 = 0; i2 < g2; i2++) h2[i2] = arguments[i2 + 2];
          e2.children = h2;
        }
        if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps) void 0 === e2[d2] && (e2[d2] = g2[d2]);
        return s(a2, f2, e2);
      }, b.createRef = function() {
        return { current: null };
      }, b.forwardRef = function(a2) {
        return { $$typeof: l, render: a2 };
      }, b.isValidElement = t, b.lazy = function(a2) {
        return { $$typeof: o, _payload: { _status: -1, _result: a2 }, _init: x };
      }, b.memo = function(a2, b2) {
        return { $$typeof: n, type: a2, compare: void 0 === b2 ? null : b2 };
      }, b.use = function(a2) {
        return c.H.use(a2);
      }, b.useCallback = function(a2, b2) {
        return c.H.useCallback(a2, b2);
      }, b.useDebugValue = function() {
      }, b.useId = function() {
        return c.H.useId();
      }, b.useMemo = function(a2, b2) {
        return c.H.useMemo(a2, b2);
      }, b.version = "19.2.0-canary-0bdb9206-20250818";
    }, 6637: (a, b, c) => {
      "use strict";
      var d;
      (d = c(1754)).renderToReadableStream, d.decodeReply, d.decodeReplyFromAsyncIterable, d.decodeAction, d.decodeFormState, d.registerServerReference, b.YR = d.registerClientReference, d.createClientModuleProxy, d.createTemporaryReferenceSet;
    }, 6660: (a, b, c) => {
      "use strict";
      function d(a2, b2) {
        var c2 = b2 && b2.cache ? b2.cache : i, d2 = b2 && b2.serializer ? b2.serializer : g;
        return (b2 && b2.strategy ? b2.strategy : function(a3, b3) {
          var c3, d3, g2 = 1 === a3.length ? e : f;
          return c3 = b3.cache.create(), d3 = b3.serializer, g2.bind(this, a3, c3, d3);
        })(a2, { cache: c2, serializer: d2 });
      }
      function e(a2, b2, c2, d2) {
        var e2 = null == d2 || "number" == typeof d2 || "boolean" == typeof d2 ? d2 : c2(d2), f2 = b2.get(e2);
        return void 0 === f2 && (f2 = a2.call(this, d2), b2.set(e2, f2)), f2;
      }
      function f(a2, b2, c2) {
        var d2 = Array.prototype.slice.call(arguments, 3), e2 = c2(d2), f2 = b2.get(e2);
        return void 0 === f2 && (f2 = a2.apply(this, d2), b2.set(e2, f2)), f2;
      }
      c.r(b), c.d(b, { memoize: () => d, strategies: () => j });
      var g = function() {
        return JSON.stringify(arguments);
      }, h = function() {
        function a2() {
          this.cache = /* @__PURE__ */ Object.create(null);
        }
        return a2.prototype.get = function(a3) {
          return this.cache[a3];
        }, a2.prototype.set = function(a3, b2) {
          this.cache[a3] = b2;
        }, a2;
      }(), i = { create: function() {
        return new h();
      } }, j = { variadic: function(a2, b2) {
        var c2, d2;
        return c2 = b2.cache.create(), d2 = b2.serializer, f.bind(this, a2, c2, d2);
      }, monadic: function(a2, b2) {
        var c2, d2;
        return c2 = b2.cache.create(), d2 = b2.serializer, e.bind(this, a2, c2, d2);
      } };
    }, 7020: (a) => {
      "use strict";
      a.exports = JSON.parse(`{"Logo":{"LogoSection":{"title":"Boycott"}},"Header":{"HeaderSection":{"search":"Search All","browse":"Browse Categories","reference":"Reference","donate":"Donate for GAZA"}},"Container":{"IntroSection":{"title":"Support Palestine. Boycott Israel","description":"Stand with the Palestinians in their struggle for freedom, justice, and equality."}},"Why":{"WhySection":{"why":"Why boycott this product?","categories":"Categories","alternatives":"Alternatives","proofLink":"Proof Links","bntProof":"Proof "}},"BoycottCard":{"BoycottCardSection":{"why":"Why Boycott"}},"Form":{"formSection":{"search":"Search","reset":"Reset","back":"Home","categories":"Select Categories"},"categories":{"all":"all","car":"car","charity":"charity","clothing":"clothing","coffee":"coffee","contractor":"contractor","cosmetics":"cosmetics","drinks":"drinks","entertainment":"entertainment","fashion":"fashion","finance":"finance","food":"food","healthcare":"healthcare","household":"household","insurance":"insurance","luxury":"luxury","manufacturer":"manufacturer","petcare":"petcare","pharmaceuticals":"pharmaceuticals","politics":"politics","supermarket":"supermarket","technology":"technology","travel":"travel"}},"Empty":{"EmptySection":{"title":"If the company you're searching for isn't listed, and you think it should be, please email us with relevant details for review.","btnTitle":"Click Here"}},"Data":{"boycottData":{"Nestle":{"desc":"Osem is an Israeli food manufacturer which operates in Occupied Palestine. Nestle owns a controlling stake in Osem.","categories":"food,drinks","alternatives":"Supermarket own brand options.,non-Nestle/Coca-Cola/Pepsico brands"},"Cadbury":{"desc":"The owner of Cadbury, Mondelez, invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Maggi":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads.","categories":"food","alternatives":"Supermarket own brand options"},"Lipton":{"desc":"Lipton, under PepsiCo, faces scrutiny for its affiliations and investments in companies connected to Israel.","categories":"drinks","alternatives":"Supermarket own brand options"},"Nescafe":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads.","categories":"drinks, coffee","alternatives":"Supermarket own brand options"},"Kitkat":{"desc":"Nestle owns a controlling stake in Osem, an Israeli food manufacturer operating in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Oreo":{"desc":"Mondelez, owner of Oreo, invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Mars":{"desc":"Mars supports the Zionist state by investing in the foodtech startup scene through venture capital partner JVC.","categories":"food","alternatives":"Supermarket own brand options"},"Snickers":{"desc":"Mars, owner of Snickers, supports the Zionist state by investing in the foodtech startup scene through venture capital partner JVC.","categories":"food","alternatives":"Supermarket own brand options"},"Pringles":{"desc":"Pringles has expanded into Israel.","categories":"food","alternatives":"Supermarket own brand options"},"Milo":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads.","categories":"food","alternatives":"Supermarket own brand options"},"Toblerone":{"desc":"Mondelez, owner of Toblerone, invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Nestum":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"MatKool":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Nutella":{"desc":"Nutella is a chocolate product of Ferrero, sold in more than 100 countries.","categories":"food","alternatives":"Supermarket own brand options"},"Coca-Cola":{"desc":"Coca-Cola operates a factory in the illegal Israeli settlement of Atarot, in Occupied Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Nestea":{"desc":"Nestea, known for its iced tea offerings, is part of Nestle.","categories":"drinks","alternatives":"Supermarket own brand options"},"Knorr":{"desc":"Unilever, owner of Knorr, sold the Israeli distribution rights of Ben & Jerry's to Avi Zinger to continue selling in Israel.","categories":"food","alternatives":"Supermarket own brand options"},"Hershey":{"desc":"HERSHEY supports Israel.","categories":"food","alternatives":"Supermarket own brand options"},"M&M":{"desc":"Mars, owner of M&M's, supports the Zionist state through investments in the foodtech startup scene.","categories":"food","alternatives":"Supermarket own brand options"},"La Cremeria":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Haagen-Dazs":{"desc":"The Mattus family, former owners of H\xE4agen-Dazs, focused on supporting Jewish, Israeli, and Zionist causes.","categories":"food","alternatives":"Supermarket own brand options"},"Magnum":{"desc":"Magnum, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"food","alternatives":"Supermarket own brand options"},"Lady's Choice":{"desc":"Lady's Choice has affiliations with Jewish companies or supports the Zionist occupation of Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Horlicks":{"desc":"Horlicks has affiliations with Jewish companies or supports the Zionist occupation of Palestine.","categories":"food, drinks","alternatives":"Supermarket own brand options"},"Cornetto":{"desc":"Cornetto, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"food","alternatives":"Supermarket own brand options"},"Wall's":{"desc":"Wall's, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"food","alternatives":"Supermarket own brand options"},"Fanta":{"desc":"Coca-Cola Company, which owns Fanta, operates a factory in the illegal Israeli settlement of Atarot, in Occupied Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Sprite":{"desc":"Coca-Cola Company, which owns Sprite, operates a factory in the illegal Israeli settlement of Atarot, in Occupied Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Pepsi":{"desc":"PepsiCo, owner of Pepsi, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Jacob's":{"desc":"Jacob's has any affiliation with Jewish companies or supports the Zionist occupation of Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"7up":{"desc":"PepsiCo, the international distributor of 7up, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Coffee Mate":{"desc":"Nestle, owner of Coffee Mate, has a controlling stake in Osem, an Israeli food manufacturer operating in Occupied Palestine.","categories":"food, coffee","alternatives":"Supermarket own brand options"},"Costa Coffee":{"desc":"Costa Coffee, owned by Coca-Cola Company, operates a factory in the illegal Israeli settlement of Atarot, in Occupied Palestine.","categories":"food, coffee","alternatives":"Supermarket own brand options"},"Dasani Water":{"desc":"Coca-Cola Company, which owns Dasani Water, operates a factory in the illegal Israeli settlement of Atarot, in Occupied Palestine.","categories":"drinks, water","alternatives":"Supermarket own brand options"},"Gatorade":{"desc":"PepsiCo, owner of Gatorade, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Halls":{"desc":"Mondelez, the owner of Halls, invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Mondelez":{"desc":"Mondelez invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Unilever":{"desc":"Unilever, owner of Ben & Jerry's, sold off the brand's Israeli distribution rights to continue selling in Israel.","categories":"food, drinks, cosmetics","alternatives":"Supermarket own brand options"},"Belvita":{"desc":"Mondelez, owner of Belvita, invests in Israeli startups in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Nesquik":{"desc":"Nestle, owner of Nesquik, has a controlling stake in Osem, an Israeli food manufacturer operating in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Koko Krunch":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Honey Stars":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Fitnesse":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Sjora":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Quaker Oats":{"desc":"PepsiCo, owner of Quaker Oats, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Smarties":{"desc":"Nestle, owner of Smarties, has a controlling stake in Osem, an Israeli food manufacturer operating in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Lays":{"desc":"PepsiCo, owner of Lay's, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Carnation":{"desc":"Nestle, owner of Carnation, has a controlling stake in Osem, an Israeli food manufacturer operating in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Mountain Dew":{"desc":"PepsiCo, owner of Mountain Dew, bought SodaStream and owns 50% of Sabra, both of which had taken advantage of the Israeli occupation of Palestine.","categories":"drinks","alternatives":"Supermarket own brand options"},"Mcdonalds":{"desc":"McDonalds Israel supports IDF by providing free food and drinks to Israeli militants.","categories":"food, drinks","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Starbucks":{"desc":"Howard Schultz, the largest private owner of Starbucks shares, is a staunch Zionist who invests heavily in Israel's economy, including a recent $1.7 Billion investment in cybersecurity startup Wiz.","categories":"food, coffee, drinks","alternatives":"Kopi Saigon,Tealive,Bask Bear,Cool Blog,GIGI Coffee"},"Domino":{"desc":"Domino Pizza has not publicly voiced support for Israel but is subject to boycott calls in Arab countries.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Omega":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Supermarket own brand options"},"Pizza Hut":{"desc":"Parent company Yum Brands is an investor in Israeli startups.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Burger King":{"desc":"Burger King purportedly supports IDF through free food and beverages to Israeli militants.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Subway":{"desc":"Subway is involved in controversy due to its association with supporting Israel in the Palestine conflict.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Baskin Robbins":{"desc":"Baskin-Robbins has a history linked with its Jewish founders, Burt Baskin and Irv Robbins, who supported Jewish and Israeli causes.","categories":"food","alternatives":"Local ice cream shops or other ice cream brands"},"PapaJohns":{"desc":"Papa John's restaurant has joined the list of restaurants supporting Israel.","categories":"food","alternatives":"Marrybrown, The Chicken Rice Shop, Ramly's Burger, Ayamas, The Manhattan Fish Market"},"KFC":{"desc":"Parent company Yum Brands is an investor in Israeli startups.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"EveryDay":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food, drinks","alternatives":"Other milk powder brands or local dairy products"},"Lactogrow":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food, drinks","alternatives":"Other baby formula brands or nutrition options"},"Lactokid":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food, drinks","alternatives":"Alternative baby formula brands"},"Cerelac":{"desc":"Avoid Nestle products until they divest all operations in Occupied Palestine.","categories":"food","alternatives":"Other baby cereal brands or homemade baby food"},"Colgate":{"desc":"S. Schestowitz is one of the largest toiletries importers in Israel. The company controls 60% of Israel's toothpaste market, according to Haaretz.","categories":"household, healthcare","alternatives":"Supermarket own brand options, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Listerine":{"desc":"This is Johnson & Johnson Product, johnson & johnson purchased Israeli company Biosense for $400 million","categories":"household, healthcare","alternatives":"Supermarket own brand options, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Darlie":{"desc":"Darlie is a popular Chinese brand owned by Colgate and its joint venture partner, Hawley & Hazel. Its package features a smiling man in a top hat. It used to be called Darkie and featured a man in blackface.","categories":"household, healthcare","alternatives":"Supermarket own brand options, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Pepsodent":{"desc":"Pepsodent, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"household, healthcare","alternatives":"Supermarket own brand options, Mu'min, Safi, Halagel, Oradex, Aafiyat Store"},"Dove":{"desc":"Dove is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.","categories":"household, cosmetics","alternatives":"Supermarket own brand options, Antabax, Good Virtues Co, Bad Lab, Fruiser, Safi"},"Palmolive":{"desc":"S. Schestowitz is one of the largest toiletries importers in Israel. The company controls 60% of Israel's toothpaste market, according to Haaretz.","categories":"household","alternatives":"Supermarket own brand options"},"CleanAndClear":{"desc":"This is Johnson & Johnson Product, johnson & johnson purchased Israeli company Biosense for $400 million","categories":"household, cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Vaseline":{"desc":"Vaseline, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"household, cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Vicks":{"desc":"Vicks is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"household, pharmaceuticals","alternatives":"Supermarket own brand options"},"Breeze":{"desc":"Breeze, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel","categories":"household","alternatives":"Supermarket own brand options, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Joy":{"desc":"P&G association with Israeli company Avgol Nonwoven, specializing in producing textiles for hygienic products, has attracted attention.","categories":"household","alternatives":"Supermarket own brand options, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Downy":{"desc":"P&G, the parent company of Downy, has deep connections with Israel, raising discussions and debates about its business collaborations within the region. Notably, P&G association with Israeli company Avgol Nonwoven, specializing in producing textiles for hygienic products, has attracted attention.","categories":"household","alternatives":"Supermarket own brand options, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Axion":{"desc":"S. Schestowitz is one of the largest toiletries importers in Israel. The company controls 60% of Israel's toothpaste market, according to Haaretz.","categories":"household","alternatives":"Supermarket own brand options, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Sunlight":{"desc":"Sunlight, owned by Unilever, which also owns Ben & Jerry's. Unilever sold off Ben & Jerry's Israeli distribution rights to continue selling in Israel.","categories":"household","alternatives":"Supermarket own brand options, Kuat Harimau, Dozee, TLC, Good Maid, Toyyib"},"Kotex":{"desc":"In 1998 Robert P. Van der Merwe, Chairman of Kimberly Clark, received the Jubilee Award from Israeli Prime Minister Netanyahu, for their contribution in developing the Israeli economy.","categories":"household, healthcare","alternatives":"Supermarket own brand options, Libresse, Sofy, Flowra"},"Huggies":{"desc":"Kimberly-Clark is one of the largest consumer companies in the world with nearly 56,000 employees in 35 countries, and a sales turnover of over $19 billion in 2009. Its family care brands include Kleenex, Scott, Andrex, Huggies, Pull-Ups, Kotex, Poise and Depend","categories":"household, healthcare","alternatives":"Supermarket own brand options"},"Lux":{"desc":"Lux is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.","categories":"household, cosmetics","alternatives":"Supermarket own brand options"},"Febreze":{"desc":"Febreze is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"household","alternatives":"Supermarket own brand options"},"Lifebuoy":{"desc":"Lifebuoy is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.","categories":"household, healthcare","alternatives":"Supermarket own brand options, Antabax, Good Virtues Co, Bad Lab, Fruiser, Safi"},"Rexona":{"desc":"Rexona is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.","categories":"household, cosmetics","alternatives":"Supermarket own brand options"},"Maybeline":{"desc":"Maybelline, under the ownership of LOr\xE9al, has navigated a contentious path in its relationship with Israel.","categories":"cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Loreal":{"desc":"L'Oreal is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Garnier":{"desc":"Garnier is a brand owned by L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Clinique":{"desc":"Clinique is owned by Estee Lauder, who's ownership, especially Ronald Lauder, has extremist zionist views and financially and politically supports Israeli occupation of Palestinian land.","categories":"cosmetics","alternatives":"Supermarket own brand options, Aiken, Nano White, Kayman, Safi, Zarzou, Silkygirl, SimplySiti, Nurraysa"},"Gillete":{"desc":"Renowned for its grooming line, Gillette operates under P&G, a multinational corporation. P&G gained attention due to its substantial investment in Israel, notably establishing a Research and Development (R&D) center in Tel Aviv, situated within what is termed occupied Palestine.","categories":"cosmetics","alternatives":"Supermarket own brand options"},"Louis Vuitton":{"desc":"The owner of Louis Vuitton's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"luxury, clothing, cosmetics","alternatives":"support local brand"},"Giorgio Armani":{"desc":"Giorgio Armani Beauty is a partnership with L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"luxury, clothing, cosmetics, fashion","alternatives":"support local brand"},"Johnson n Johnson":{"desc":"Johnson & Johnson purchased Israeli company Biosense for $400 million","categories":"healthcare","alternatives":"Supermarket own brand options"},"Bath & Body Works":{"desc":"Les Wexner who owns L Brands, the parent company of Bath&Body Works, is a staunch ally of Israel, and a long time business partner of Jeffrey Epstein, the convicted child trafficker.","categories":"cosmetics","alternatives":"Supermarket own brand options, Lush cosmetics, Unbranded oil based perfumes, Sunnamusk"},"Herbal Essence":{"desc":"Herbal essences is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"cosmetics, healthcare","alternatives":"Own brand options"},"Victoria Secret":{"desc":"Victoria Secret profits from Israels occupation of Palestinian land & crimes against humanity by closely partnering with Israeli corporations.","categories":"luxury","alternatives":"Own brand options"},"Estee Lauder":{"desc":"Ronald Lauder, who together with his brother Leonard Lauder inherited the Estee Lauder company, is the president of the World Jewish Congress, and chairman of the Jewish National Fund, and is a zionist with extremist views and financially and politically supports Israeli occupation of Palestinian land.","categories":"cosmetics","alternatives":"Own brand options"},"Ralph Lauren":{"desc":"Ralph Lauren Frangrances is a partnership with L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"luxury","alternatives":"Unbranded oil based fragrances, Sunnamusk"},"Neutrogena":{"desc":"Delving into Neutrogena footprint in Israel, we unearth a web of relationships, partnerships, and investments that paint a multifaceted picture of the brand engagement in this region.","categories":"cosmetics","alternatives":"Own brand options"},"Valentino Beauty":{"desc":"Valentino Beauty is a partnership with L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"luxury, clothing, fashion, cosmetics","alternatives":"Own brand options"},"YSL Beauty":{"desc":"YSL Beauty is a partnership with L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"luxury, clothing, fashion, cosmetics","alternatives":"Own brand options"},"Tommy Hilfiger":{"desc":"Amid the turmoil, reports reveal that PVH, the parent company of Tommy Hilfiger, pledged to match donations from its associates at a 2:1 ratio for relief efforts in the region.","categories":"luxury, clothing, fashion","alternatives":"Own brand options"},"Kerastase":{"desc":"Kerastase is owned by L'Oreal. L'Oreal is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"cosmetics","alternatives":"Own brand options"},"Lancome":{"desc":"Lancome is a brand owned by L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"luxury, cosmetics","alternatives":"Lush cosmetics, Huda beauty"},"Revlon":{"desc":"Revlon largest stakeholder, Ronald Perelman, is a major trustee of the Simon Weisenthal foundation, which runs the somewhat ironically named Museum of Tolerance.","categories":"cosmetics","alternatives":"Own brand options"},"Chanel":{"desc":"Alain Wertheimer, condemned the attack on Israel but remained silent on the attacks on Gaza, also pledged $4m in Chanel's name.","categories":"luxury, clothing, fashion, cosmetics","alternatives":"Lush cosmetics, Huda beauty, Sunnamusk, Unbranded oil based perfumes"},"Cerave":{"desc":"Cerave is owned by L'Oreal. L'Oreal is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"cosmetics","alternatives":"Lush cosmetics, Huda beauty"},"Kenzo":{"desc":"The owner of Kenzo's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"luxury, clothing, fashion, cosmetics","alternatives":"Lush cosmetics, Huda beauty, Sunnamusk, Unbranded oil based perfumes"},"Kiehl":{"desc":"Kiehl's is a brand owned by L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"cosmetics","alternatives":"Lush cosmetics, Huda beauty"},"Olay":{"desc":"Olay is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"cosmetics, healthcare","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Dior":{"desc":"The owner of Dior's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"luxury, clothing, fashion, cosmetics","alternatives":"Supermarket own brand options"},"MAC":{"desc":"MAC Cosmetics is owned by Estee Lauder, who's ownership, especially Ronald Lauder, has extremist zionist views and financially and politically supports Israeli occupation of Palestinian land.","categories":"cosmetics","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"La Mer":{"desc":"La Mer is owned by Estee Lauder, who's ownership, especially Ronald Lauder, has extremist zionist views and financially and politically supports Israeli occupation of Palestinian land.","categories":"luxury, cosmetics","alternatives":"Aiken, Nano White, Kayman, Safi, Zarzou, Cosmoderm, Jelita KL, Nurish, Elianto, Pixy, Silkygirl, SimplySiti, Nurraysa"},"Agoda":{"desc":"Booking.com, whos parent company Booking Holdings owns Agoda, allows listings in occupied Palestinian territory, and after initially deciding to add a label to properties which are in occupied territory, reversed that move under pressure from Israel.","categories":"travel, technology","alternatives":"halalbooking.com"},"Airbnb":{"desc":"Airbnb allows listings in occupied Palestinian territory, and after announcing it will remove 200 of such listings, it reversed its decision, showing it is knowingly complicit in Israels occupation.","categories":"travel, technology","alternatives":"halalbooking.com"},"Amazon":{"desc":"Amazon is investing $7.2bn in data centers in Israel via AWS","categories":"supermarket, technology","alternatives":"eBay (unverified)"},"AXA":{"desc":"AXA continues to invest in Israeli banks which are complicit in Israels occupation and apartheid in Palestine.","categories":"insurance, finance","alternatives":"Other insurance companies"},"Booking":{"desc":"Booking.com allows listings in occupied Palestinian territory, and after announcing it will remove 200 of such listings, it reversed its decision, showing it is knowingly complicit in Israels occupation.","categories":"travel, technology","alternatives":"halalbooking.com"},"Carrefour":{"desc":"Carrefour made huge investments into Israel last year, opening 50 stores and is planning to open a further 100 by 2024.","categories":"supermarket, food, drinks, clothing, household","alternatives":"Other supermarket chains"},"Tesco":{"desc":"Tesco is partnering with an Israeli start, Trigo Retail, up to deliver till-less stores with several already open in London. Michael Gabay, the CEO of Trigo is a staunch zionist.","categories":"supermarket, food, drinks, insurance, household, finance","alternatives":"Other supermarket chains"},"Disney":{"desc":"Disney made an official announcement that it will be pledging $2m and further initiatives to support Israel. Whilst the CEO explicitly condemned attacks on Jews in Israel, he made no mention of the Palestinian people who are being killed by the Israeli military.","categories":"entertainment, technology","alternatives":"Other entertainment and media companies"},"Fiverr":{"desc":"CEO, Micha Kaufman, is a staunch zionist who supports the IDF.","categories":"technology","alternatives":"Other freelance services platforms"},"HP":{"desc":"Hewlett Packard runs the biometric ID system that Israel uses to restrict Palestinian movement as well as other systems for the IDF.","categories":"technology","alternatives":"Lenovo"},"HSBC":{"desc":"HSBC invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Motorola":{"desc":"The IDF uses Motorola as a main supplier for its communication equipment which enables them to effectively control the occupied Palestinians. They also manufacture the bomb fuses used in IDF bombs.","categories":"technology, manufacturer","alternatives":"Other mobile phone and technology companies"},"Movenpick":{"desc":"The owner of the Movenpick brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.","categories":"food","alternatives":"Other food and beverage brands"},"PUMA":{"desc":"Puma is the main sponsor of the Israel Football Association (IFA), which includes teams in Israel's illegal settlements on occupied Palestinian land.","categories":"clothing, fashion","alternatives":"Other sportswear and fashion brands"},"Tag Heuer":{"desc":"The owner of TAG Heuer's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"luxury, fashion","alternatives":"Other luxury watch brands"},"Waze":{"desc":"Founder, Uri Levine, is a staunch zionist who is also ex-IDF (also founded moovit). Waze was bought by Google who are also on the boycott list for building Israel's supercomputer with Amazon. Waze is owned by Google but their team and office is still based in Israel. Waze is a revenue generator, because it serves ads on the map itself which means they make money when you use navigation. Google maps is free and not a revenue generator. It helps Google to target you with ads later, but if you do not click those ads, then you are not benefiting Google. So we recommend using Google maps, but not clicking on Google ads when you browse the internet.","categories":"technology, travel","alternatives":"Other GPS navigation software"},"Nokia":{"desc":"Nokia Venture Partners, a branch of Nokia Ventures Organization, launched a new $500 million fund in December 2000 and allowed that a disproportionate amount of it would go into Israeli companies. Nokia Research Center is on the lookout for Israeli start-ups with which it can cooperate.","categories":"technology","alternatives":"Other mobile phone manufacturers"},"Nike":{"desc":"Nike's decision to halt supply to Israeli stores marks a setback for many sports outlets in the country. It reflects Nike's global strategy rather than a targeted political message against Israel, aiming to control sales processes and bolster profitability.","categories":"clothing, fashion","alternatives":"Other sportswear and athletic brands"},"Skechers":{"desc":"Michael S Greenberg, the president of Skechers, is a zionist who has posted pro-Israel content on his Instagram.","categories":"clothing, fashion","alternatives":"Other footwear and fashion brands"},"Adidas":{"desc":"Adidas uses Israeli manufacturer, Delta Galil, to manufacture its underwear range.","categories":"clothing, fashion","alternatives":"Other sportswear and athletic brands"},"Hyundai":{"desc":"Hyundai heavy machinery has been used in the demolition of Palestinian neighbourhoods in Jerusalem, benefiting them commercially from the Israeli occupation.","categories":"car, manufacturer","alternatives":"Other automobile manufacturers"},"Mercedes Benz":{"desc":"Mercedes Benz opened a tech hub in Tel Aviv to develop connected cars technology, when it could have opened such a hub in any city in the world.","categories":"car, manufacturer","alternatives":"Other luxury automobile manufacturers"},"Rentalcars":{"desc":"Booking.com, whose parent company Booking Holdings owns Rentalcars.com, allows listings in occupied Palestinian territory, and after initially deciding to add a label to properties which are in occupied territory, reversed that move under pressure from Israel.","categories":"car, technology, travel","alternatives":"Other car rental services"},"Volvo":{"desc":"Volvo heavy machinery has been used in the demolition of Palestinian neighbourhoods in Occupied Palestine, benefiting them commercially from the Israeli occupation. They issued a statement distancing themselves and rejecting responsibility for its sales networks decisions, however, it is still complicit unless it ends its relationship with the companies who sell equipment to the IDF, for example Mayers Cars and Trucks in Ashdod.","categories":"car, manufacturer","alternatives":"Other automobile manufacturers"},"Shell":{"desc":"Shell shares hit record high as Israel-Hamas war drives up oil price","categories":"energy","alternatives":"Petronas, BHP"},"Caltex":{"desc":"Chevron is implicated in Israel policy and practice of depriving the Palestinian people of their right to sovereignty over their natural resources.","categories":"energy","alternatives":"Petronas, BHP"},"Purina":{"desc":"The owner of the Purina brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.","categories":"petcare","alternatives":"Other pet food brands"},"Friskies":{"desc":"The connection between Friskies Nestle and Israel is alarming, to say the least. It is concerning to know that a well-known brand like Friskies, which is owned by Nestle, supports Israel occupation of Palestinian territories.","categories":"petcare","alternatives":"Other pet food brands"},"Whiskas":{"desc":"The owner of Whiskas, Mars, supports the zionist state by investing heavily in the foodtech startup scene through venture capital partner JVC.","categories":"petcare","alternatives":"Other pet food brands"},"Unicef":{"desc":"The head of Unicef, Catherine Russell is married to the chairman of BlackRock investments, one of the largest investors in weapons companies in the world. This is a major conflict of interest and Unicef should not be trusted.","categories":"charity","alternatives":"Muslims Around The World, Ummah Welfare Trust, One Ummah"},"Labour party":{"desc":"Keir Starmer has made official statements that Labour stands with Israel.","categories":"politics","alternatives":"Abstain, Vote for a small party with good values"},"Conservative party":{"desc":"Rishi Sunak has made official statements that Conservatives stand with Israel. He also sent military assistance to help Israel in its genocide of Gaza.","categories":"politics","alternatives":"Abstain, Vote for a small party with good values"},"G4S":{"desc":"G4S has now completely divested from Israel after BDS pressure. But they have been complicit and helped the Israeli occupation for many years already.","categories":"contractor","alternatives":"No alternatives researched"},"A&W":{"desc":"Parent company Yum Brands is an investor in Israeli startups.","categories":"food,drinks","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Taco Bell":{"desc":"Parent company Yum Brands is an investor in Israeli startups.","categories":"food","alternatives":"Marrybrown,The Chicken Rice Shop,Ramly's Burger,Ayamas,The Manhattan Fish Market"},"Meta":{"desc":"Amid the ongoing conflict between Israel and Palestine, Mark Zuckerberg, the CEO of Meta, expressed his opinion on the situation and condemned the attacks perpetrated by Hamas. In an Instagram Story earlier this week, Mr Zuckerberg said, ''The terrorist attacks by Hamas are pure evil. There is never any justification for carrying out acts of terrorism against innocent people.''","categories":"technology","alternatives":"twitter,Gab"},"Aviva":{"desc":"Aviva invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"Don't keep your pension with Aviva"},"BankOfAmerica":{"desc":"Bank of America was part of a $500m loan deal with a consortium of lenders, into Elbit Systems Ltd, the Israeli weapons manufacturer.","categories":"finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"BankOfMontreal":{"desc":"Bank of Montreal lent $90 million as part of a $500m loan deal with a consortium of lenders, into Elbit Systems Ltd, the Israeli weapons manufacturer.","categories":"finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Barclays":{"desc":"Barclays invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"BNP":{"desc":"BNP Paribas was part of a $500m loan deal with a consortium of lenders, into Elbit Systems Ltd, the Israeli weapons manufacturer.","categories":"finance","alternatives":"Don't bank with BNP Paribas"},"CapitalOne":{"desc":"Capital One was part of a $500m loan deal with a consortium of lenders, into Elbit Systems Ltd, the Israeli weapons manufacturer.","categories":"finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"Legal":{"desc":"Legal & General invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"Don't invest with Legal & General"},"Lloyds":{"desc":"Lloyds invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"M&S":{"desc":"Marks & Spencer has been a pro zionist entity since its inception, with various members of its management openly declaring support for the zionist state. For over 100 years, they have been the biggest commercial conduit between Israel and the UK. More recently however, they have publicly distanced themselves from having 'political' ties and aims. And since the last statements in support of Israel were around the year 2000, it is difficult to tell how much their leadership supports Israel.","categories":"supermarket, food, drinks, clothing, finance","alternatives":"Morrisons,Co-op"},"RBS":{"desc":"RBS invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"TSB Bank, Monzo Bank, Bank Islam, MayBank, Muamalat Bank, Cimb Bank, Bank Rakyat, Affin Bank, Alliance Bank, RHB Bank, Public Bank, Agrobank, BSN"},"StandardLife":{"desc":"Standard Life invests in companies selling arms and military equipment to Israel that have been used in the oppression of Palestinians","categories":"insurance,finance","alternatives":"Don't save or invest with Standard Life"},"Visa":{"desc":"Visa has opened a research and development center in israel and invests heavily in the local economy.","categories":"finance","alternatives":"No alternatives researched yet. Help us out!"},"WellsFargo":{"desc":"Wells Fargo was part of a $500m loan deal with a consortium of lenders, into Elbit Systems Ltd, the Israeli weapons manufacturer.","categories":"finance","alternatives":"Don't bank with Wells Fargo"},"DunkinDonuts":{"desc":"Amid the ongoing Israel-Palestine conflict, questions about the company stance have emerged, leaving consumers pondering whether Dunkin Donuts supports either side. This article aims to explore the nuances surrounding Dunkin Donuts in Israel and its stance amidst the conflict.","categories":"food, coffee, drinks","alternatives":"support local brand"},"Wix":{"desc":"CEO Avishai Abrahami is a zionist who supports the IDF.","categories":"technology","alternatives":"Wordpress,Weebly,Squarespace,Framer,Figma"},"Nvidia":{"desc":"Nvidia is building a supercomputer for Israel, which will undoubtedly be used to continue its oppression of Palestinians and enforce their apartheid.","categories":"technology","alternatives":"AMD"},"Zara":{"desc":"Zara's latest marketing campaign uses corpses in plastic wrapping, and warzone aesthetics, mocking the genocide by israel in Gaza. In a previous incident Joey Schwebel, a Canadian-Israeli dual national and chairman of israel's Zara franchisee Trimera, hosted the convicted terrorist Itamar Ben-Gvir at his home in the lead-up to the Israeli elections. Zara did not made a statement distancing themselves from this association and allowed this ad campaign to run.","categories":"clothing,fashion","alternatives":"support local brand"},"LouisVuitton":{"desc":"The owner of Louis Vuitton's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"clothing, fashion, cosmetics","alternatives":"support local brand,Lush cosmetics,Huda beauty,Sunnamusk"},"PradaBeauty":{"desc":"Prada Beauty is a partnership with L'Oreal, which is a 'warm friend of Israel'. After sending a letter to the Arab League with information helping the boycott, they paid a $1.4m fine and issued an apology, before fostering a new relationship with Israel, with heavy investment and even operating a factory in Occupied Palestine.","categories":"clothing, fashion, cosmetics","alternatives":"support local brand,Lush cosmetics,Huda beauty,Sunnamusk"},"Sephora":{"desc":"The owner of Sephora, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"cosmetics","alternatives":"support local brand,Lush cosmetics,Huda beauty,Sunnamusk"},"Ordinary":{"desc":"The Ordinary is owned by Estee Lauder, who's ownership, especially Ronald Lauder, has extremist zionist views and financially and politically supports Israeli occupation of Palestinian land.","categories":"cosmetics","alternatives":"support local brand,Lush cosmetics,Huda beauty,Sunnamusk"},"Stella":{"desc":"The owner of STELLA by Stella McCartney's parent company, LVMH, Bernard Arnault invests hundreds of millions in Israeli companies","categories":"clothing, fashion, cosmetics","alternatives":"support local brand,Lush cosmetics,Huda beauty,Sunnamusk"},"Victorias":{"desc":"Les Wexner who owns L Brands, the parent company of Victorias Secret, is a staunch ally of Israel, and a long time business partner of Jeffrey Epstein, the convicted child trafficker.","categories":"clothing, cosmetics","alternatives":"support local brand"},"OralB":{"desc":"Oral B is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"healthcare","alternatives":"Supermarket own brand products"},"Pantene":{"desc":"Pantene is owned by Procter and Gamble, who opened an R&D center in Tel Aviv, Occupied Palestine, in which it invests $2bn annually.","categories":"cosmetics, healthcare","alternatives":"Supermarket own brand products"},"Hahne":{"desc":"Has some Zionist Logo","categories":"food, supermarket","alternatives":"Supermarket own brand products"},"Vercel":{"desc":"Developers drop Vercel, call for boycott after CEO posts selfie with Netanyahu","categories":"technology","alternatives":"Netlify,Render,Railway,DigitalOcean"}}}}`);
    }, 7028: (a, b, c) => {
      "use strict";
      c.d(b, { Ud: () => d.stringifyCookie, VO: () => d.ResponseCookies, tm: () => d.RequestCookies });
      var d = c(8443);
    }, 7128: (a, b, c) => {
      "use strict";
      c.d(b, { p: () => f });
      var d = c(66), e = c(4944);
      function f(a2) {
        return (0, e.nJ)(a2) || (0, d.RM)(a2);
      }
    }, 7287: (a, b, c) => {
      "use strict";
      var d = c(720), e = c(7814), f = c(5211), g = function(a2) {
        return a2 && a2.__esModule ? a2 : { default: a2 };
      }(d);
      function h(a2, b2, c2) {
        var d2;
        return (b2 = "symbol" == typeof (d2 = function(a3, b3) {
          if ("object" != typeof a3 || !a3) return a3;
          var c3 = a3[Symbol.toPrimitive];
          if (void 0 !== c3) {
            var d3 = c3.call(a3, b3 || "default");
            if ("object" != typeof d3) return d3;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === b3 ? String : Number)(a3);
        }(b2, "string")) ? d2 : d2 + "") in a2 ? Object.defineProperty(a2, b2, { value: c2, enumerable: true, configurable: true, writable: true }) : a2[b2] = c2, a2;
      }
      let i = function(a2) {
        return a2.MISSING_MESSAGE = "MISSING_MESSAGE", a2.MISSING_FORMAT = "MISSING_FORMAT", a2.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", a2.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", a2.INVALID_MESSAGE = "INVALID_MESSAGE", a2.INVALID_KEY = "INVALID_KEY", a2.FORMATTING_ERROR = "FORMATTING_ERROR", a2;
      }({});
      class j extends Error {
        constructor(a2, b2) {
          let c2 = a2;
          b2 && (c2 += ": " + b2), super(c2), h(this, "code", void 0), h(this, "originalMessage", void 0), this.code = a2, b2 && (this.originalMessage = b2);
        }
      }
      function k(a2, b2) {
        return a2 ? Object.keys(a2).reduce((c2, d2) => (c2[d2] = { timeZone: b2, ...a2[d2] }, c2), {}) : a2;
      }
      function l(a2, b2, c2, d2) {
        let e2 = f.joinPath(d2, c2);
        if (!b2) throw Error(e2);
        let g2 = b2;
        return c2.split(".").forEach((b3) => {
          let c3 = g2[b3];
          if (null == b3 || null == c3) throw Error(e2 + " (".concat(a2, ")"));
          g2 = c3;
        }), g2;
      }
      let m = 365 / 12 * 86400, n = { second: 1, seconds: 1, minute: 60, minutes: 60, hour: 3600, hours: 3600, day: 86400, days: 86400, week: 604800, weeks: 604800, month: 365 / 12 * 86400, months: 365 / 12 * 86400, quarter: 365 / 12 * 259200, quarters: 365 / 12 * 259200, year: 31536e3, years: 31536e3 };
      b.IntlError = j, b.IntlErrorCode = i, b.createBaseTranslator = function(a2) {
        let b2 = function(a3, b3, c2) {
          let d2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.defaultOnError;
          try {
            if (!b3) throw Error(void 0);
            let d3 = c2 ? l(a3, b3, c2) : b3;
            if (!d3) throw Error(c2);
            return d3;
          } catch (b4) {
            let a4 = new j(i.MISSING_MESSAGE, b4.message);
            return d2(a4), a4;
          }
        }(a2.locale, a2.messages, a2.namespace, a2.onError);
        return function(a3) {
          let { cache: b3, defaultTranslationValues: c2, formats: d2, formatters: h2, getMessageFallback: m2 = f.defaultGetMessageFallback, locale: n2, messagesOrError: o, namespace: p, onError: q, timeZone: r } = a3, s = o instanceof j;
          function t(a4, b4, c3) {
            let d3 = new j(b4, c3);
            return q(d3), m2({ error: d3, key: a4, namespace: p });
          }
          function u(a4, j2, q2) {
            let u2, v2;
            if (s) return m2({ error: o, key: a4, namespace: p });
            try {
              u2 = l(n2, o, a4, p);
            } catch (b4) {
              return t(a4, i.MISSING_MESSAGE, b4.message);
            }
            if ("object" == typeof u2) {
              let b4;
              return t(a4, Array.isArray(u2) ? i.INVALID_MESSAGE : i.INSUFFICIENT_PATH, b4);
            }
            let w = function(a5, b4) {
              if (b4) return;
              let c3 = a5.replace(/'([{}])/gi, "$1");
              return /<|{/.test(c3) ? void 0 : c3;
            }(u2, j2);
            if (w) return w;
            h2.getMessageFormat || (h2.getMessageFormat = f.memoFn(function() {
              return new g.default(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], { formatters: h2, ...arguments.length <= 3 ? void 0 : arguments[3] });
            }, b3.message));
            try {
              v2 = h2.getMessageFormat(u2, n2, function(a5, b4) {
                let c3 = b4 ? { ...a5, dateTime: k(a5.dateTime, b4) } : a5, d3 = g.default.formats.date, e2 = b4 ? k(d3, b4) : d3, f2 = g.default.formats.time, h3 = b4 ? k(f2, b4) : f2;
                return { ...c3, date: { ...e2, ...c3.dateTime }, time: { ...h3, ...c3.dateTime } };
              }({ ...d2, ...q2 }, r), { formatters: { ...h2, getDateTimeFormat: (a5, b4) => h2.getDateTimeFormat(a5, { timeZone: r, ...b4 }) } });
            } catch (b4) {
              return t(a4, i.INVALID_MESSAGE, b4.message);
            }
            try {
              let a5 = v2.format(function(a6) {
                if (0 === Object.keys(a6).length) return;
                let b4 = {};
                return Object.keys(a6).forEach((c3) => {
                  let d3, f2 = 0, g2 = a6[c3];
                  d3 = "function" == typeof g2 ? (a7) => {
                    let b5 = g2(a7);
                    return e.isValidElement(b5) ? e.cloneElement(b5, { key: c3 + f2++ }) : b5;
                  } : g2, b4[c3] = d3;
                }), b4;
              }({ ...c2, ...j2 }));
              if (null == a5) throw Error(void 0);
              return e.isValidElement(a5) || Array.isArray(a5) || "string" == typeof a5 ? a5 : String(a5);
            } catch (b4) {
              return t(a4, i.FORMATTING_ERROR, b4.message);
            }
          }
          function v(a4, b4, c3) {
            let d3 = u(a4, b4, c3);
            return "string" != typeof d3 ? t(a4, i.INVALID_MESSAGE, void 0) : d3;
          }
          return v.rich = u, v.markup = (a4, b4, c3) => {
            let d3 = u(a4, b4, c3);
            if ("string" != typeof d3) {
              let b5 = new j(i.FORMATTING_ERROR, void 0);
              return q(b5), m2({ error: b5, key: a4, namespace: p });
            }
            return d3;
          }, v.raw = (a4) => {
            if (s) return m2({ error: o, key: a4, namespace: p });
            try {
              return l(n2, o, a4, p);
            } catch (b4) {
              return t(a4, i.MISSING_MESSAGE, b4.message);
            }
          }, v.has = (a4) => {
            if (s) return false;
            try {
              return l(n2, o, a4, p), true;
            } catch (a5) {
              return false;
            }
          }, v;
        }({ ...a2, messagesOrError: b2 });
      }, b.createFormatter = function(a2) {
        let { _cache: b2 = f.createCache(), _formatters: c2 = f.createIntlFormatters(b2), formats: d2, locale: e2, now: g2, onError: h2 = f.defaultOnError, timeZone: k2 } = a2;
        function l2(a3) {
          var b3;
          return null != (b3 = a3) && b3.timeZone || (k2 ? a3 = { ...a3, timeZone: k2 } : h2(new j(i.ENVIRONMENT_FALLBACK, void 0))), a3;
        }
        function o(a3, b3, c3, d3) {
          let e3;
          try {
            e3 = function(a4, b4) {
              let c4;
              if ("string" == typeof b4) {
                if (!(c4 = null == a4 ? void 0 : a4[b4])) {
                  let a5 = new j(i.MISSING_FORMAT, void 0);
                  throw h2(a5), a5;
                }
              } else c4 = b4;
              return c4;
            }(b3, a3);
          } catch (a4) {
            return d3();
          }
          try {
            return c3(e3);
          } catch (a4) {
            return h2(new j(i.FORMATTING_ERROR, a4.message)), d3();
          }
        }
        function p(a3, b3) {
          return o(b3, null == d2 ? void 0 : d2.dateTime, (b4) => (b4 = l2(b4), c2.getDateTimeFormat(e2, b4).format(a3)), () => String(a3));
        }
        function q() {
          return g2 || (h2(new j(i.ENVIRONMENT_FALLBACK, void 0)), /* @__PURE__ */ new Date());
        }
        return { dateTime: p, number: function(a3, b3) {
          return o(b3, null == d2 ? void 0 : d2.number, (b4) => c2.getNumberFormat(e2, b4).format(a3), () => String(a3));
        }, relativeTime: function(a3, b3) {
          try {
            var d3;
            let f2, g3, h3 = {};
            b3 instanceof Date || "number" == typeof b3 ? f2 = new Date(b3) : b3 && (f2 = null != b3.now ? new Date(b3.now) : q(), g3 = b3.unit, h3.style = b3.style, h3.numberingSystem = b3.numberingSystem), f2 || (f2 = q());
            let i2 = (new Date(a3).getTime() - f2.getTime()) / 1e3;
            g3 || (g3 = function(a4) {
              let b4 = Math.abs(a4);
              return b4 < 60 ? "second" : b4 < 3600 ? "minute" : b4 < 86400 ? "hour" : b4 < 604800 ? "day" : b4 < m ? "week" : b4 < 31536e3 ? "month" : "year";
            }(i2)), h3.numeric = "second" === g3 ? "auto" : "always";
            let j2 = (d3 = g3, Math.round(i2 / n[d3]));
            return c2.getRelativeTimeFormat(e2, h3).format(j2, g3);
          } catch (b4) {
            return h2(new j(i.FORMATTING_ERROR, b4.message)), String(a3);
          }
        }, list: function(a3, b3) {
          let f2 = [], g3 = /* @__PURE__ */ new Map(), h3 = 0;
          for (let b4 of a3) {
            let a4;
            "object" == typeof b4 ? (a4 = String(h3), g3.set(a4, b4)) : a4 = String(b4), f2.push(a4), h3++;
          }
          return o(b3, null == d2 ? void 0 : d2.list, (a4) => {
            let b4 = c2.getListFormat(e2, a4).formatToParts(f2).map((a5) => "literal" === a5.type ? a5.value : g3.get(a5.value) || a5.value);
            return g3.size > 0 ? b4 : b4.join("");
          }, () => String(a3));
        }, dateTimeRange: function(a3, b3, f2) {
          return o(f2, null == d2 ? void 0 : d2.dateTime, (d3) => (d3 = l2(d3), c2.getDateTimeFormat(e2, d3).formatRange(a3, b3)), () => [p(a3), p(b3)].join("\u2009\u2013\u2009"));
        } };
      }, b.resolveNamespace = function(a2, b2) {
        return a2 === b2 ? void 0 : a2.slice((b2 + ".").length);
      };
    }, 7613: (a, b, c) => {
      "use strict";
      c.d(b, { C6: () => e, Cl: () => f, Tt: () => g, fX: () => h });
      var d = function(a2, b2) {
        return (d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
          a3.__proto__ = b3;
        } || function(a3, b3) {
          for (var c2 in b3) Object.prototype.hasOwnProperty.call(b3, c2) && (a3[c2] = b3[c2]);
        })(a2, b2);
      };
      function e(a2, b2) {
        if ("function" != typeof b2 && null !== b2) throw TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        function c2() {
          this.constructor = a2;
        }
        d(a2, b2), a2.prototype = null === b2 ? Object.create(b2) : (c2.prototype = b2.prototype, new c2());
      }
      var f = function() {
        return (f = Object.assign || function(a2) {
          for (var b2, c2 = 1, d2 = arguments.length; c2 < d2; c2++) for (var e2 in b2 = arguments[c2]) Object.prototype.hasOwnProperty.call(b2, e2) && (a2[e2] = b2[e2]);
          return a2;
        }).apply(this, arguments);
      };
      function g(a2, b2) {
        var c2 = {};
        for (var d2 in a2) Object.prototype.hasOwnProperty.call(a2, d2) && 0 > b2.indexOf(d2) && (c2[d2] = a2[d2]);
        if (null != a2 && "function" == typeof Object.getOwnPropertySymbols) for (var e2 = 0, d2 = Object.getOwnPropertySymbols(a2); e2 < d2.length; e2++) 0 > b2.indexOf(d2[e2]) && Object.prototype.propertyIsEnumerable.call(a2, d2[e2]) && (c2[d2[e2]] = a2[d2[e2]]);
        return c2;
      }
      Object.create;
      function h(a2, b2, c2) {
        if (c2 || 2 == arguments.length) for (var d2, e2 = 0, f2 = b2.length; e2 < f2; e2++) !d2 && e2 in b2 || (d2 || (d2 = Array.prototype.slice.call(b2, 0, e2)), d2[e2] = b2[e2]);
        return a2.concat(d2 || Array.prototype.slice.call(b2));
      }
      Object.create, "function" == typeof SuppressedError && SuppressedError;
    }, 7669: (a, b, c) => {
      "use strict";
      c.d(b, { $p: () => i, cg: () => h, xl: () => g });
      let d = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
      class e {
        disable() {
          throw d;
        }
        getStore() {
        }
        run() {
          throw d;
        }
        exit() {
          throw d;
        }
        enterWith() {
          throw d;
        }
        static bind(a2) {
          return a2;
        }
      }
      let f = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function g() {
        return f ? new f() : new e();
      }
      function h(a2) {
        return f ? f.bind(a2) : e.bind(a2);
      }
      function i() {
        return f ? f.snapshot() : function(a2, ...b2) {
          return a2(...b2);
        };
      }
    }, 7720: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true }), !function(a2, b2) {
        for (var c2 in b2) Object.defineProperty(a2, c2, { enumerable: true, get: b2[c2] });
      }(b, { interceptTestApis: function() {
        return f;
      }, wrapRequestHandler: function() {
        return g;
      } });
      let d = c(5392), e = c(9165);
      function f() {
        return (0, e.interceptFetch)(c.g.fetch);
      }
      function g(a2) {
        return (b2, c2) => (0, d.withRequest)(b2, e.reader, () => a2(b2, c2));
      }
    }, 7814: (a, b, c) => {
      "use strict";
      a.exports = c(6440);
    }, 7918: (a, b, c) => {
      "use strict";
      c.d(b, { s: () => d });
      let d = (0, c(2058).xl)();
    }, 8279: (a, b) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true }), b.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", b.LOCALE_SEGMENT_NAME = "locale";
    }, 8366: (a, b, c) => {
      "use strict";
      var d = c(194), e = c(4931), f = c(5862), g = c(4238);
      function h(a2) {
        if (!(this instanceof h)) return new h(a2);
        this.request = a2;
      }
      a.exports = h, a.exports.Negotiator = h, h.prototype.charset = function(a2) {
        var b2 = this.charsets(a2);
        return b2 && b2[0];
      }, h.prototype.charsets = function(a2) {
        return d(this.request.headers["accept-charset"], a2);
      }, h.prototype.encoding = function(a2, b2) {
        var c2 = this.encodings(a2, b2);
        return c2 && c2[0];
      }, h.prototype.encodings = function(a2, b2) {
        return e(this.request.headers["accept-encoding"], a2, (b2 || {}).preferred);
      }, h.prototype.language = function(a2) {
        var b2 = this.languages(a2);
        return b2 && b2[0];
      }, h.prototype.languages = function(a2) {
        return f(this.request.headers["accept-language"], a2);
      }, h.prototype.mediaType = function(a2) {
        var b2 = this.mediaTypes(a2);
        return b2 && b2[0];
      }, h.prototype.mediaTypes = function(a2) {
        return g(this.request.headers.accept, a2);
      }, h.prototype.preferredCharset = h.prototype.charset, h.prototype.preferredCharsets = h.prototype.charsets, h.prototype.preferredEncoding = h.prototype.encoding, h.prototype.preferredEncodings = h.prototype.encodings, h.prototype.preferredLanguage = h.prototype.language, h.prototype.preferredLanguages = h.prototype.languages, h.prototype.preferredMediaType = h.prototype.mediaType, h.prototype.preferredMediaTypes = h.prototype.mediaTypes;
    }, 8443: (a) => {
      "use strict";
      var b = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyNames, e = Object.prototype.hasOwnProperty, f = {};
      function g(a2) {
        var b2;
        let c2 = ["path" in a2 && a2.path && `Path=${a2.path}`, "expires" in a2 && (a2.expires || 0 === a2.expires) && `Expires=${("number" == typeof a2.expires ? new Date(a2.expires) : a2.expires).toUTCString()}`, "maxAge" in a2 && "number" == typeof a2.maxAge && `Max-Age=${a2.maxAge}`, "domain" in a2 && a2.domain && `Domain=${a2.domain}`, "secure" in a2 && a2.secure && "Secure", "httpOnly" in a2 && a2.httpOnly && "HttpOnly", "sameSite" in a2 && a2.sameSite && `SameSite=${a2.sameSite}`, "partitioned" in a2 && a2.partitioned && "Partitioned", "priority" in a2 && a2.priority && `Priority=${a2.priority}`].filter(Boolean), d2 = `${a2.name}=${encodeURIComponent(null != (b2 = a2.value) ? b2 : "")}`;
        return 0 === c2.length ? d2 : `${d2}; ${c2.join("; ")}`;
      }
      function h(a2) {
        let b2 = /* @__PURE__ */ new Map();
        for (let c2 of a2.split(/; */)) {
          if (!c2) continue;
          let a3 = c2.indexOf("=");
          if (-1 === a3) {
            b2.set(c2, "true");
            continue;
          }
          let [d2, e2] = [c2.slice(0, a3), c2.slice(a3 + 1)];
          try {
            b2.set(d2, decodeURIComponent(null != e2 ? e2 : "true"));
          } catch {
          }
        }
        return b2;
      }
      function i(a2) {
        if (!a2) return;
        let [[b2, c2], ...d2] = h(a2), { domain: e2, expires: f2, httponly: g2, maxage: i2, path: l2, samesite: m2, secure: n, partitioned: o, priority: p } = Object.fromEntries(d2.map(([a3, b3]) => [a3.toLowerCase().replace(/-/g, ""), b3]));
        {
          var q, r, s = { name: b2, value: decodeURIComponent(c2), domain: e2, ...f2 && { expires: new Date(f2) }, ...g2 && { httpOnly: true }, ..."string" == typeof i2 && { maxAge: Number(i2) }, path: l2, ...m2 && { sameSite: j.includes(q = (q = m2).toLowerCase()) ? q : void 0 }, ...n && { secure: true }, ...p && { priority: k.includes(r = (r = p).toLowerCase()) ? r : void 0 }, ...o && { partitioned: true } };
          let a3 = {};
          for (let b3 in s) s[b3] && (a3[b3] = s[b3]);
          return a3;
        }
      }
      ((a2, c2) => {
        for (var d2 in c2) b(a2, d2, { get: c2[d2], enumerable: true });
      })(f, { RequestCookies: () => l, ResponseCookies: () => m, parseCookie: () => h, parseSetCookie: () => i, stringifyCookie: () => g }), a.exports = ((a2, f2, g2, h2) => {
        if (f2 && "object" == typeof f2 || "function" == typeof f2) for (let i2 of d(f2)) e.call(a2, i2) || i2 === g2 || b(a2, i2, { get: () => f2[i2], enumerable: !(h2 = c(f2, i2)) || h2.enumerable });
        return a2;
      })(b({}, "__esModule", { value: true }), f);
      var j = ["strict", "lax", "none"], k = ["low", "medium", "high"], l = class {
        constructor(a2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = a2;
          let b2 = a2.get("cookie");
          if (b2) for (let [a3, c2] of h(b2)) this._parsed.set(a3, { name: a3, value: c2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...a2) {
          let b2 = "string" == typeof a2[0] ? a2[0] : a2[0].name;
          return this._parsed.get(b2);
        }
        getAll(...a2) {
          var b2;
          let c2 = Array.from(this._parsed);
          if (!a2.length) return c2.map(([a3, b3]) => b3);
          let d2 = "string" == typeof a2[0] ? a2[0] : null == (b2 = a2[0]) ? void 0 : b2.name;
          return c2.filter(([a3]) => a3 === d2).map(([a3, b3]) => b3);
        }
        has(a2) {
          return this._parsed.has(a2);
        }
        set(...a2) {
          let [b2, c2] = 1 === a2.length ? [a2[0].name, a2[0].value] : a2, d2 = this._parsed;
          return d2.set(b2, { name: b2, value: c2 }), this._headers.set("cookie", Array.from(d2).map(([a3, b3]) => g(b3)).join("; ")), this;
        }
        delete(a2) {
          let b2 = this._parsed, c2 = Array.isArray(a2) ? a2.map((a3) => b2.delete(a3)) : b2.delete(a2);
          return this._headers.set("cookie", Array.from(b2).map(([a3, b3]) => g(b3)).join("; ")), c2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((a2) => `${a2.name}=${encodeURIComponent(a2.value)}`).join("; ");
        }
      }, m = class {
        constructor(a2) {
          var b2, c2, d2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = a2;
          let e2 = null != (d2 = null != (c2 = null == (b2 = a2.getSetCookie) ? void 0 : b2.call(a2)) ? c2 : a2.get("set-cookie")) ? d2 : [];
          for (let a3 of Array.isArray(e2) ? e2 : function(a4) {
            if (!a4) return [];
            var b3, c3, d3, e3, f2, g2 = [], h2 = 0;
            function i2() {
              for (; h2 < a4.length && /\s/.test(a4.charAt(h2)); ) h2 += 1;
              return h2 < a4.length;
            }
            for (; h2 < a4.length; ) {
              for (b3 = h2, f2 = false; i2(); ) if ("," === (c3 = a4.charAt(h2))) {
                for (d3 = h2, h2 += 1, i2(), e3 = h2; h2 < a4.length && "=" !== (c3 = a4.charAt(h2)) && ";" !== c3 && "," !== c3; ) h2 += 1;
                h2 < a4.length && "=" === a4.charAt(h2) ? (f2 = true, h2 = e3, g2.push(a4.substring(b3, d3)), b3 = h2) : h2 = d3 + 1;
              } else h2 += 1;
              (!f2 || h2 >= a4.length) && g2.push(a4.substring(b3, a4.length));
            }
            return g2;
          }(e2)) {
            let b3 = i(a3);
            b3 && this._parsed.set(b3.name, b3);
          }
        }
        get(...a2) {
          let b2 = "string" == typeof a2[0] ? a2[0] : a2[0].name;
          return this._parsed.get(b2);
        }
        getAll(...a2) {
          var b2;
          let c2 = Array.from(this._parsed.values());
          if (!a2.length) return c2;
          let d2 = "string" == typeof a2[0] ? a2[0] : null == (b2 = a2[0]) ? void 0 : b2.name;
          return c2.filter((a3) => a3.name === d2);
        }
        has(a2) {
          return this._parsed.has(a2);
        }
        set(...a2) {
          let [b2, c2, d2] = 1 === a2.length ? [a2[0].name, a2[0].value, a2[0]] : a2, e2 = this._parsed;
          return e2.set(b2, function(a3 = { name: "", value: "" }) {
            return "number" == typeof a3.expires && (a3.expires = new Date(a3.expires)), a3.maxAge && (a3.expires = new Date(Date.now() + 1e3 * a3.maxAge)), (null === a3.path || void 0 === a3.path) && (a3.path = "/"), a3;
          }({ name: b2, value: c2, ...d2 })), function(a3, b3) {
            for (let [, c3] of (b3.delete("set-cookie"), a3)) {
              let a4 = g(c3);
              b3.append("set-cookie", a4);
            }
          }(e2, this._headers), this;
        }
        delete(...a2) {
          let [b2, c2] = "string" == typeof a2[0] ? [a2[0]] : [a2[0].name, a2[0]];
          return this.set({ ...c2, name: b2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(g).join("; ");
        }
      };
    }, 8586: (a, b, c) => {
      "use strict";
      a.exports = c(9744);
    }, 8823: (a, b, c) => {
      "use strict";
      c.d(b, { iC: () => e }), c(4979);
      var d = c(5566);
      function e() {
        let a2 = d.Z.getStore();
        return (null == a2 ? void 0 : a2.rootTaskSpawnPhase) === "action";
      }
    }, 9160: (a, b) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true }), b.default = function(a2, b2, c, d) {
        var e;
        let { name: f, ...g } = d;
        (null == (e = a2.cookies.get(f)) ? void 0 : e.value) !== c && b2.cookies.set(f, c, { path: a2.nextUrl.basePath || void 0, ...g });
      };
    }, 9165: (a, b, c) => {
      "use strict";
      var d = c(5356).Buffer;
      Object.defineProperty(b, "__esModule", { value: true }), !function(a2, b2) {
        for (var c2 in b2) Object.defineProperty(a2, c2, { enumerable: true, get: b2[c2] });
      }(b, { handleFetch: function() {
        return h;
      }, interceptFetch: function() {
        return i;
      }, reader: function() {
        return f;
      } });
      let e = c(5392), f = { url: (a2) => a2.url, header: (a2, b2) => a2.headers.get(b2) };
      async function g(a2, b2) {
        let { url: c2, method: e2, headers: f2, body: g2, cache: h2, credentials: i2, integrity: j, mode: k, redirect: l, referrer: m, referrerPolicy: n } = b2;
        return { testData: a2, api: "fetch", request: { url: c2, method: e2, headers: [...Array.from(f2), ["next-test-stack", function() {
          let a3 = (Error().stack ?? "").split("\n");
          for (let b3 = 1; b3 < a3.length; b3++) if (a3[b3].length > 0) {
            a3 = a3.slice(b3);
            break;
          }
          return (a3 = (a3 = (a3 = a3.filter((a4) => !a4.includes("/next/dist/"))).slice(0, 5)).map((a4) => a4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: g2 ? d.from(await b2.arrayBuffer()).toString("base64") : null, cache: h2, credentials: i2, integrity: j, mode: k, redirect: l, referrer: m, referrerPolicy: n } };
      }
      async function h(a2, b2) {
        let c2 = (0, e.getTestReqInfo)(b2, f);
        if (!c2) return a2(b2);
        let { testData: h2, proxyPort: i2 } = c2, j = await g(h2, b2), k = await a2(`http://localhost:${i2}`, { method: "POST", body: JSON.stringify(j), next: { internal: true } });
        if (!k.ok) throw Object.defineProperty(Error(`Proxy request failed: ${k.status}`), "__NEXT_ERROR_CODE", { value: "E146", enumerable: false, configurable: true });
        let l = await k.json(), { api: m } = l;
        switch (m) {
          case "continue":
            return a2(b2);
          case "abort":
          case "unhandled":
            throw Object.defineProperty(Error(`Proxy request aborted [${b2.method} ${b2.url}]`), "__NEXT_ERROR_CODE", { value: "E145", enumerable: false, configurable: true });
          case "fetch":
            let { status: n, headers: o, body: p } = l.response;
            return new Response(p ? d.from(p, "base64") : null, { status: n, headers: new Headers(o) });
          default:
            return m;
        }
      }
      function i(a2) {
        return c.g.fetch = function(b2, c2) {
          var d2;
          return (null == c2 || null == (d2 = c2.next) ? void 0 : d2.internal) ? a2(b2, c2) : h(a2, new Request(b2, c2));
        }, () => {
          c.g.fetch = a2;
        };
      }
    }, 9183: (a, b, c) => {
      "use strict";
      c.d(b, { AA: () => d, gW: () => h, h: () => e, kz: () => f, r4: () => g });
      let d = "nxtP", e = "nxtI", f = "x-prerender-revalidate", g = "x-prerender-revalidate-if-generated", h = "_N_T_", i = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", apiNode: "api-node", apiEdge: "api-edge", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", pagesDirBrowser: "pages-dir-browser", pagesDirEdge: "pages-dir-edge", pagesDirNode: "pages-dir-node" };
      ({ ...i, GROUP: { builtinReact: [i.reactServerComponents, i.actionBrowser], serverOnly: [i.reactServerComponents, i.actionBrowser, i.instrument, i.middleware], neutralTarget: [i.apiNode, i.apiEdge], clientOnly: [i.serverSideRendering, i.appPagesBrowser], bundled: [i.reactServerComponents, i.actionBrowser, i.serverSideRendering, i.appPagesBrowser, i.shared, i.instrument, i.middleware], appPages: [i.reactServerComponents, i.serverSideRendering, i.appPagesBrowser, i.actionBrowser] } });
    }, 9515: (a, b, c) => {
      "use strict";
      c.d(b, { X: () => function a2(b2) {
        if ((0, g.p)(b2) || (0, f.C)(b2) || (0, i.h)(b2) || (0, h.I3)(b2) || "object" == typeof b2 && null !== b2 && b2.$$typeof === e || (0, d.Ts)(b2)) throw b2;
        b2 instanceof Error && "cause" in b2 && a2(b2.cause);
      } });
      var d = c(5770);
      let e = Symbol.for("react.postpone");
      var f = c(2340), g = c(7128), h = c(107), i = c(6159);
    }, 9644: (a, b, c) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true });
      var d = c(403);
      function e(a2, b2) {
        let c2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], e2 = a2.map((a3) => [a3, d.getLocalePrefix(a3, b2)]);
        return c2 && e2.sort((a3, b3) => b3[1].length - a3[1].length), e2;
      }
      function f(a2, b2) {
        let c2 = d.normalizeTrailingSlash(b2), e2 = d.normalizeTrailingSlash(a2), f2 = d.templateToRegex(e2).exec(c2);
        if (!f2) return;
        let g2 = {};
        for (let a3 = 1; a3 < f2.length; a3++) {
          var h2;
          let b3 = null == (h2 = e2.match(/\[([^\]]+)\]/g)) ? void 0 : h2[a3 - 1].replace(/[[\]]/g, "");
          b3 && (g2[b3] = f2[a3]);
        }
        return g2;
      }
      function g(a2, b2) {
        if (!b2) return a2;
        let c2 = a2 = a2.replace(/\[\[/g, "[").replace(/\]\]/g, "]");
        return Object.entries(b2).forEach((a3) => {
          let [b3, d2] = a3;
          c2 = c2.replace("[".concat(b3, "]"), d2);
        }), c2;
      }
      function h(a2, b2) {
        return b2.defaultLocale === a2 || !b2.locales || b2.locales.includes(a2);
      }
      b.applyBasePath = function(a2, b2) {
        return d.normalizeTrailingSlash(b2 + a2);
      }, b.formatPathname = function(a2, b2, c2) {
        let e2 = a2;
        return b2 && (e2 = d.prefixPathname(b2, e2)), c2 && (e2 += c2), e2;
      }, b.formatPathnameTemplate = g, b.formatTemplatePathname = function(a2, b2, c2, e2) {
        let h2 = "";
        return h2 += g(c2, f(b2, a2)), h2 = d.normalizeTrailingSlash(h2);
      }, b.getBestMatchingDomain = function(a2, b2, c2) {
        let d2;
        return a2 && h(b2, a2) && (d2 = a2), d2 || (d2 = c2.find((a3) => a3.defaultLocale === b2)), d2 || (d2 = c2.find((a3) => {
          var c3;
          return null == (c3 = a3.locales) ? void 0 : c3.includes(b2);
        })), d2 || null != (null == a2 ? void 0 : a2.locales) || (d2 = a2), d2 || (d2 = c2.find((a3) => !a3.locales)), d2;
      }, b.getHost = function(a2) {
        var b2, c2;
        return null != (b2 = null != (c2 = a2.get("x-forwarded-host")) ? c2 : a2.get("host")) ? b2 : void 0;
      }, b.getInternalTemplate = function(a2, b2, c2) {
        for (let e2 of d.getSortedPathnames(Object.keys(a2))) {
          let f2 = a2[e2];
          if ("string" == typeof f2) {
            if (d.matchesPathname(f2, b2)) return [void 0, e2];
          } else {
            let a3 = Object.entries(f2), g2 = a3.findIndex((a4) => {
              let [b3] = a4;
              return b3 === c2;
            });
            for (let [c3, f3] of (g2 > 0 && a3.unshift(a3.splice(g2, 1)[0]), a3)) if (d.matchesPathname(f3, b2)) return [c3, e2];
          }
        }
        for (let c3 of Object.keys(a2)) if (d.matchesPathname(c3, b2)) return [void 0, c3];
        return [void 0, void 0];
      }, b.getLocaleAsPrefix = function(a2) {
        return "/".concat(a2);
      }, b.getLocalePrefixes = e, b.getNormalizedPathname = function(a2, b2, c2) {
        a2.endsWith("/") || (a2 += "/");
        let f2 = e(b2, c2), g2 = RegExp("^(".concat(f2.map((a3) => {
          let [, b3] = a3;
          return b3.replaceAll("/", "\\/");
        }).join("|"), ")/(.*)"), "i"), h2 = a2.match(g2), i = h2 ? "/" + h2[2] : a2;
        return "/" !== i && (i = d.normalizeTrailingSlash(i)), i;
      }, b.getPathnameMatch = function(a2, b2, c2) {
        for (let [d2, f2] of e(b2, c2)) {
          let b3, c3;
          if (a2 === f2 || a2.startsWith(f2 + "/")) b3 = c3 = true;
          else {
            let d3 = a2.toLowerCase(), e2 = f2.toLowerCase();
            (d3 === e2 || d3.startsWith(e2 + "/")) && (b3 = false, c3 = true);
          }
          if (c3) return { locale: d2, prefix: f2, matchedPrefix: a2.slice(0, f2.length), exact: b3 };
        }
      }, b.getRouteParams = f, b.isLocaleSupportedOnDomain = h, b.sanitizePathname = function(a2) {
        return a2.replace(/\\/g, "%5C").replace(/\/+/g, "/");
      };
    }, 9744: (a, b, c) => {
      "use strict";
      var d = c(7814);
      function e() {
      }
      var f = { d: { f: e, r: function() {
        throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
      }, D: e, C: e, L: e, m: e, X: e, S: e, M: e }, p: 0, findDOMNode: null };
      if (!d.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
      function g(a2, b2) {
        return "font" === a2 ? "" : "string" == typeof b2 ? "use-credentials" === b2 ? b2 : "" : void 0;
      }
      b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, b.preconnect = function(a2, b2) {
        "string" == typeof a2 && (b2 = b2 ? "string" == typeof (b2 = b2.crossOrigin) ? "use-credentials" === b2 ? b2 : "" : void 0 : null, f.d.C(a2, b2));
      }, b.prefetchDNS = function(a2) {
        "string" == typeof a2 && f.d.D(a2);
      }, b.preinit = function(a2, b2) {
        if ("string" == typeof a2 && b2 && "string" == typeof b2.as) {
          var c2 = b2.as, d2 = g(c2, b2.crossOrigin), e2 = "string" == typeof b2.integrity ? b2.integrity : void 0, h = "string" == typeof b2.fetchPriority ? b2.fetchPriority : void 0;
          "style" === c2 ? f.d.S(a2, "string" == typeof b2.precedence ? b2.precedence : void 0, { crossOrigin: d2, integrity: e2, fetchPriority: h }) : "script" === c2 && f.d.X(a2, { crossOrigin: d2, integrity: e2, fetchPriority: h, nonce: "string" == typeof b2.nonce ? b2.nonce : void 0 });
        }
      }, b.preinitModule = function(a2, b2) {
        if ("string" == typeof a2) if ("object" == typeof b2 && null !== b2) {
          if (null == b2.as || "script" === b2.as) {
            var c2 = g(b2.as, b2.crossOrigin);
            f.d.M(a2, { crossOrigin: c2, integrity: "string" == typeof b2.integrity ? b2.integrity : void 0, nonce: "string" == typeof b2.nonce ? b2.nonce : void 0 });
          }
        } else null == b2 && f.d.M(a2);
      }, b.preload = function(a2, b2) {
        if ("string" == typeof a2 && "object" == typeof b2 && null !== b2 && "string" == typeof b2.as) {
          var c2 = b2.as, d2 = g(c2, b2.crossOrigin);
          f.d.L(a2, c2, { crossOrigin: d2, integrity: "string" == typeof b2.integrity ? b2.integrity : void 0, nonce: "string" == typeof b2.nonce ? b2.nonce : void 0, type: "string" == typeof b2.type ? b2.type : void 0, fetchPriority: "string" == typeof b2.fetchPriority ? b2.fetchPriority : void 0, referrerPolicy: "string" == typeof b2.referrerPolicy ? b2.referrerPolicy : void 0, imageSrcSet: "string" == typeof b2.imageSrcSet ? b2.imageSrcSet : void 0, imageSizes: "string" == typeof b2.imageSizes ? b2.imageSizes : void 0, media: "string" == typeof b2.media ? b2.media : void 0 });
        }
      }, b.preloadModule = function(a2, b2) {
        if ("string" == typeof a2) if (b2) {
          var c2 = g(b2.as, b2.crossOrigin);
          f.d.m(a2, { as: "string" == typeof b2.as && "script" !== b2.as ? b2.as : void 0, crossOrigin: c2, integrity: "string" == typeof b2.integrity ? b2.integrity : void 0 });
        } else f.d.m(a2);
      }, b.version = "19.2.0-canary-0bdb9206-20250818";
    }, 9809: (a, b, c) => {
      "use strict";
      c.d(b, { z: () => d });
      class d extends Error {
        constructor(a2, b2) {
          super("Invariant: " + (a2.endsWith(".") ? a2 : a2 + ".") + " This is a bug in Next.js.", b2), this.name = "InvariantError";
        }
      }
    }, 9904: (a, b, c) => {
      "use strict";
      c.r(b), c.d(b, { LookupSupportedLocales: () => p, ResolveLocale: () => o, match: () => q });
      var d, e = c(7613), f = { supplemental: { languageMatching: { "written-new": [{ paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } }, { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } }, { $cnsar: { _value: "HK+MO" } }, { $americas: { _value: "019" } }, { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } }, { no: { _desired: "nb", _distance: "1" } }, { bs: { _desired: "hr", _distance: "4" } }, { bs: { _desired: "sh", _distance: "4" } }, { hr: { _desired: "sh", _distance: "4" } }, { sr: { _desired: "sh", _distance: "4" } }, { aa: { _desired: "ssy", _distance: "4" } }, { de: { _desired: "gsw", _distance: "4", _oneway: "true" } }, { de: { _desired: "lb", _distance: "4", _oneway: "true" } }, { no: { _desired: "da", _distance: "8" } }, { nb: { _desired: "da", _distance: "8" } }, { ru: { _desired: "ab", _distance: "30", _oneway: "true" } }, { en: { _desired: "ach", _distance: "30", _oneway: "true" } }, { nl: { _desired: "af", _distance: "20", _oneway: "true" } }, { en: { _desired: "ak", _distance: "30", _oneway: "true" } }, { en: { _desired: "am", _distance: "30", _oneway: "true" } }, { es: { _desired: "ay", _distance: "20", _oneway: "true" } }, { ru: { _desired: "az", _distance: "30", _oneway: "true" } }, { ur: { _desired: "bal", _distance: "20", _oneway: "true" } }, { ru: { _desired: "be", _distance: "20", _oneway: "true" } }, { en: { _desired: "bem", _distance: "30", _oneway: "true" } }, { hi: { _desired: "bh", _distance: "30", _oneway: "true" } }, { en: { _desired: "bn", _distance: "30", _oneway: "true" } }, { zh: { _desired: "bo", _distance: "20", _oneway: "true" } }, { fr: { _desired: "br", _distance: "20", _oneway: "true" } }, { es: { _desired: "ca", _distance: "20", _oneway: "true" } }, { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } }, { en: { _desired: "chr", _distance: "20", _oneway: "true" } }, { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } }, { fr: { _desired: "co", _distance: "20", _oneway: "true" } }, { fr: { _desired: "crs", _distance: "20", _oneway: "true" } }, { sk: { _desired: "cs", _distance: "20" } }, { en: { _desired: "cy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ee", _distance: "30", _oneway: "true" } }, { en: { _desired: "eo", _distance: "30", _oneway: "true" } }, { es: { _desired: "eu", _distance: "20", _oneway: "true" } }, { da: { _desired: "fo", _distance: "20", _oneway: "true" } }, { nl: { _desired: "fy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ga", _distance: "20", _oneway: "true" } }, { en: { _desired: "gaa", _distance: "30", _oneway: "true" } }, { en: { _desired: "gd", _distance: "20", _oneway: "true" } }, { es: { _desired: "gl", _distance: "20", _oneway: "true" } }, { es: { _desired: "gn", _distance: "20", _oneway: "true" } }, { hi: { _desired: "gu", _distance: "30", _oneway: "true" } }, { en: { _desired: "ha", _distance: "30", _oneway: "true" } }, { en: { _desired: "haw", _distance: "20", _oneway: "true" } }, { fr: { _desired: "ht", _distance: "20", _oneway: "true" } }, { ru: { _desired: "hy", _distance: "30", _oneway: "true" } }, { en: { _desired: "ia", _distance: "30", _oneway: "true" } }, { en: { _desired: "ig", _distance: "30", _oneway: "true" } }, { en: { _desired: "is", _distance: "20", _oneway: "true" } }, { id: { _desired: "jv", _distance: "20", _oneway: "true" } }, { en: { _desired: "ka", _distance: "30", _oneway: "true" } }, { fr: { _desired: "kg", _distance: "30", _oneway: "true" } }, { ru: { _desired: "kk", _distance: "30", _oneway: "true" } }, { en: { _desired: "km", _distance: "30", _oneway: "true" } }, { en: { _desired: "kn", _distance: "30", _oneway: "true" } }, { en: { _desired: "kri", _distance: "30", _oneway: "true" } }, { tr: { _desired: "ku", _distance: "30", _oneway: "true" } }, { ru: { _desired: "ky", _distance: "30", _oneway: "true" } }, { it: { _desired: "la", _distance: "20", _oneway: "true" } }, { en: { _desired: "lg", _distance: "30", _oneway: "true" } }, { fr: { _desired: "ln", _distance: "30", _oneway: "true" } }, { en: { _desired: "lo", _distance: "30", _oneway: "true" } }, { en: { _desired: "loz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "lua", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mai", _distance: "20", _oneway: "true" } }, { en: { _desired: "mfe", _distance: "30", _oneway: "true" } }, { fr: { _desired: "mg", _distance: "30", _oneway: "true" } }, { en: { _desired: "mi", _distance: "20", _oneway: "true" } }, { en: { _desired: "ml", _distance: "30", _oneway: "true" } }, { ru: { _desired: "mn", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mr", _distance: "30", _oneway: "true" } }, { id: { _desired: "ms", _distance: "30", _oneway: "true" } }, { en: { _desired: "mt", _distance: "30", _oneway: "true" } }, { en: { _desired: "my", _distance: "30", _oneway: "true" } }, { en: { _desired: "ne", _distance: "30", _oneway: "true" } }, { nb: { _desired: "nn", _distance: "20" } }, { no: { _desired: "nn", _distance: "20" } }, { en: { _desired: "nso", _distance: "30", _oneway: "true" } }, { en: { _desired: "ny", _distance: "30", _oneway: "true" } }, { en: { _desired: "nyn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "oc", _distance: "20", _oneway: "true" } }, { en: { _desired: "om", _distance: "30", _oneway: "true" } }, { en: { _desired: "or", _distance: "30", _oneway: "true" } }, { en: { _desired: "pa", _distance: "30", _oneway: "true" } }, { en: { _desired: "pcm", _distance: "20", _oneway: "true" } }, { en: { _desired: "ps", _distance: "30", _oneway: "true" } }, { es: { _desired: "qu", _distance: "30", _oneway: "true" } }, { de: { _desired: "rm", _distance: "20", _oneway: "true" } }, { en: { _desired: "rn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "rw", _distance: "30", _oneway: "true" } }, { hi: { _desired: "sa", _distance: "30", _oneway: "true" } }, { en: { _desired: "sd", _distance: "30", _oneway: "true" } }, { en: { _desired: "si", _distance: "30", _oneway: "true" } }, { en: { _desired: "sn", _distance: "30", _oneway: "true" } }, { en: { _desired: "so", _distance: "30", _oneway: "true" } }, { en: { _desired: "sq", _distance: "30", _oneway: "true" } }, { en: { _desired: "st", _distance: "30", _oneway: "true" } }, { id: { _desired: "su", _distance: "20", _oneway: "true" } }, { en: { _desired: "sw", _distance: "30", _oneway: "true" } }, { en: { _desired: "ta", _distance: "30", _oneway: "true" } }, { en: { _desired: "te", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tg", _distance: "30", _oneway: "true" } }, { en: { _desired: "ti", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tk", _distance: "30", _oneway: "true" } }, { en: { _desired: "tlh", _distance: "30", _oneway: "true" } }, { en: { _desired: "tn", _distance: "30", _oneway: "true" } }, { en: { _desired: "to", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tt", _distance: "30", _oneway: "true" } }, { en: { _desired: "tum", _distance: "30", _oneway: "true" } }, { zh: { _desired: "ug", _distance: "20", _oneway: "true" } }, { ru: { _desired: "uk", _distance: "20", _oneway: "true" } }, { en: { _desired: "ur", _distance: "30", _oneway: "true" } }, { ru: { _desired: "uz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "wo", _distance: "30", _oneway: "true" } }, { en: { _desired: "xh", _distance: "30", _oneway: "true" } }, { en: { _desired: "yi", _distance: "30", _oneway: "true" } }, { en: { _desired: "yo", _distance: "30", _oneway: "true" } }, { zh: { _desired: "za", _distance: "20", _oneway: "true" } }, { en: { _desired: "zu", _distance: "30", _oneway: "true" } }, { ar: { _desired: "aao", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abv", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acm", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acw", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acx", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acy", _distance: "10", _oneway: "true" } }, { ar: { _desired: "adf", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aec", _distance: "10", _oneway: "true" } }, { ar: { _desired: "afb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apc", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apd", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ars", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ary", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "auz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "avl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "pga", _distance: "10", _oneway: "true" } }, { ar: { _desired: "shu", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } }, { az: { _desired: "azb", _distance: "10", _oneway: "true" } }, { et: { _desired: "vro", _distance: "10", _oneway: "true" } }, { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fub", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fue", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fui", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gui", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gun", _distance: "10", _oneway: "true" } }, { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } }, { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } }, { kln: { _desired: "enb", _distance: "10", _oneway: "true" } }, { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } }, { kln: { _desired: "niq", _distance: "10", _oneway: "true" } }, { kln: { _desired: "oki", _distance: "10", _oneway: "true" } }, { kln: { _desired: "pko", _distance: "10", _oneway: "true" } }, { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tec", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } }, { kok: { _desired: "gom", _distance: "10", _oneway: "true" } }, { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } }, { luy: { _desired: "ida", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lko", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lks", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lri", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lto", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lts", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nle", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } }, { luy: { _desired: "rag", _distance: "10", _oneway: "true" } }, { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } }, { mg: { _desired: "msh", _distance: "10", _oneway: "true" } }, { mg: { _desired: "skg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "txy", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } }, { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "btj", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bve", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } }, { ms: { _desired: "coa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "dup", _distance: "10", _oneway: "true" } }, { ms: { _desired: "hji", _distance: "10", _oneway: "true" } }, { ms: { _desired: "id", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jak", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jax", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lce", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "liw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "max", _distance: "10", _oneway: "true" } }, { ms: { _desired: "meo", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "min", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } }, { ms: { _desired: "msi", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mui", _distance: "10", _oneway: "true" } }, { ms: { _desired: "orn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "ors", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pel", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pse", _distance: "10", _oneway: "true" } }, { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "urk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } }, { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } }, { ne: { _desired: "dty", _distance: "10", _oneway: "true" } }, { om: { _desired: "gax", _distance: "10", _oneway: "true" } }, { om: { _desired: "hae", _distance: "10", _oneway: "true" } }, { om: { _desired: "orc", _distance: "10", _oneway: "true" } }, { or: { _desired: "spv", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pst", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qub", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qud", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quf", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qug", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quk", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qul", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qup", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qur", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qus", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qux", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quy", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qva", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qve", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qws", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sro", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aae", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aat", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aln", _distance: "10", _oneway: "true" } }, { syr: { _desired: "aii", _distance: "10", _oneway: "true" } }, { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } }, { yi: { _desired: "yih", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "gan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hak", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } }, { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } }, { zh: { _desired: "nan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } }, { zh: { _desired: "yue", _distance: "10", _oneway: "true" } }, { "*": { _desired: "*", _distance: "80" } }, { "en-Latn": { _desired: "am-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "az-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "bn-Beng", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "bo-Tibt", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "hy-Armn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ka-Geor", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "km-Khmr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "kn-Knda", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "lo-Laoo", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ml-Mlym", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "my-Mymr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ne-Deva", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "or-Orya", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "pa-Guru", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ps-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "sd-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "si-Sinh", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ta-Taml", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "te-Telu", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ti-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "tk-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ur-Arab", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "uz-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "yi-Hebr", _distance: "10", _oneway: "true" } }, { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } }, { "zh-Hans": { _desired: "za-Latn", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "zh-Hant": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "ar-Arab": { _desired: "ar-Latn", _distance: "20", _oneway: "true" } }, { "bn-Beng": { _desired: "bn-Latn", _distance: "20", _oneway: "true" } }, { "gu-Gujr": { _desired: "gu-Latn", _distance: "20", _oneway: "true" } }, { "hi-Deva": { _desired: "hi-Latn", _distance: "20", _oneway: "true" } }, { "kn-Knda": { _desired: "kn-Latn", _distance: "20", _oneway: "true" } }, { "ml-Mlym": { _desired: "ml-Latn", _distance: "20", _oneway: "true" } }, { "mr-Deva": { _desired: "mr-Latn", _distance: "20", _oneway: "true" } }, { "ta-Taml": { _desired: "ta-Latn", _distance: "20", _oneway: "true" } }, { "te-Telu": { _desired: "te-Latn", _distance: "20", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Latn", _distance: "20", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Latn", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hani", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hrkt", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hani", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hang", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "ko-Hang": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "*-*": { _desired: "*-*", _distance: "50" } }, { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } }, { "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" } }, { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } }, { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } }, { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } }, { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } }, { "en-*-*": { _desired: "en-*-*", _distance: "5" } }, { "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" } }, { "es-*-$!americas": { _desired: "es-*-$!americas", _distance: "4" } }, { "es-*-*": { _desired: "es-*-*", _distance: "5" } }, { "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" } }, { "pt-*-$!americas": { _desired: "pt-*-$!americas", _distance: "4" } }, { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } }, { "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" } }, { "zh-Hant-$!cnsar": { _desired: "zh-Hant-$!cnsar", _distance: "4" } }, { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } }, { "*-*-*": { _desired: "*-*-*", _distance: "4" } }] } } }, g = { "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"], "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"], "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"], "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"], "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"], "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"], "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"], "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"], "018": ["018", "BW", "LS", "NA", "SZ", "ZA"], "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"], "021": ["021", "BM", "CA", "GL", "PM", "US"], "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"], "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"], "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"], "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"], "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"], "054": ["054", "FJ", "NC", "PG", "SB", "VU"], "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"], "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"], 142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"], 143: ["143", "KG", "KZ", "TJ", "TM", "UZ"], 145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"], 150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"], 151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"], 154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"], 155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"], 202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], 419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"], EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"], EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"], QO: ["AC", "AQ", "CP", "DG", "QO", "TA"], UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"] }, h = /-u(?:-[0-9a-z]{2,8})+/gi;
      function i(a2, b2, c2) {
        if (void 0 === c2 && (c2 = Error), !a2) throw new c2(b2);
      }
      function j(a2, b2, c2) {
        var d2 = b2.split("-"), f2 = d2[0], h2 = d2[1], i2 = d2[2], j2 = true;
        if (i2 && "$" === i2[0]) {
          var k2 = "!" !== i2[1], l2 = (k2 ? c2[i2.slice(1)] : c2[i2.slice(2)]).map(function(a3) {
            return g[a3] || [a3];
          }).reduce(function(a3, b3) {
            return (0, e.fX)((0, e.fX)([], a3, true), b3, true);
          }, []);
          j2 && (j2 = l2.indexOf(a2.region || "") > 1 == k2);
        } else j2 && (j2 = !a2.region || "*" === i2 || i2 === a2.region);
        return j2 && (j2 = !a2.script || "*" === h2 || h2 === a2.script), j2 && (j2 = !a2.language || "*" === f2 || f2 === a2.language), j2;
      }
      function k(a2) {
        return [a2.language, a2.script, a2.region].filter(Boolean).join("-");
      }
      function l(a2, b2, c2) {
        for (var d2 = 0, e2 = c2.matches; d2 < e2.length; d2++) {
          var f2 = e2[d2], g2 = j(a2, f2.desired, c2.matchVariables) && j(b2, f2.supported, c2.matchVariables);
          if (f2.oneway || g2 || (g2 = j(a2, f2.supported, c2.matchVariables) && j(b2, f2.desired, c2.matchVariables)), g2) {
            var h2 = 10 * f2.distance;
            if (c2.paradigmLocales.indexOf(k(a2)) > -1 != c2.paradigmLocales.indexOf(k(b2)) > -1) return h2 - 1;
            return h2;
          }
        }
        throw Error("No matching distance found");
      }
      function m(a2) {
        return Intl.getCanonicalLocales(a2)[0];
      }
      function n(a2, b2) {
        for (var c2 = b2; ; ) {
          if (a2.indexOf(c2) > -1) return c2;
          var d2 = c2.lastIndexOf("-");
          if (!~d2) return;
          d2 >= 2 && "-" === c2[d2 - 2] && (d2 -= 2), c2 = c2.slice(0, d2);
        }
      }
      function o(a2, b2, c2, g2, j2, k2) {
        "lookup" === c2.localeMatcher ? p2 = function(a3, b3, c3) {
          for (var d2 = { locale: "" }, e2 = 0; e2 < b3.length; e2++) {
            var f2 = b3[e2], g3 = f2.replace(h, ""), i2 = n(a3, g3);
            if (i2) return d2.locale = i2, f2 !== g3 && (d2.extension = f2.slice(g3.length, f2.length)), d2;
          }
          return d2.locale = c3(), d2;
        }(Array.from(a2), b2, k2) : (r = Array.from(a2), u = [], v = b2.reduce(function(a3, b3) {
          var c3 = b3.replace(h, "");
          return u.push(c3), a3[c3] = b3, a3;
        }, {}), (void 0 === w && (w = 838), x = 1 / 0, y = { matchedDesiredLocale: "", distances: {} }, u.forEach(function(a3, b3) {
          y.distances[a3] || (y.distances[a3] = {}), r.forEach(function(c3) {
            var g3, h2, i2, j3, k3, m2, n2 = (g3 = new Intl.Locale(a3).maximize(), h2 = new Intl.Locale(c3).maximize(), i2 = { language: g3.language, script: g3.script || "", region: g3.region || "" }, j3 = { language: h2.language, script: h2.script || "", region: h2.region || "" }, k3 = 0, m2 = function() {
              var a4, b4;
              if (!d) {
                var c4 = null == (b4 = null == (a4 = f.supplemental.languageMatching["written-new"][0]) ? void 0 : a4.paradigmLocales) ? void 0 : b4._locales.split(" "), g4 = f.supplemental.languageMatching["written-new"].slice(1, 5);
                d = { matches: f.supplemental.languageMatching["written-new"].slice(5).map(function(a5) {
                  var b5 = Object.keys(a5)[0], c5 = a5[b5];
                  return { supported: b5, desired: c5._desired, distance: +c5._distance, oneway: "true" === c5.oneway };
                }, {}), matchVariables: g4.reduce(function(a5, b5) {
                  var c5 = Object.keys(b5)[0], d2 = b5[c5];
                  return a5[c5.slice(1)] = d2._value.split("+"), a5;
                }, {}), paradigmLocales: (0, e.fX)((0, e.fX)([], c4, true), c4.map(function(a5) {
                  return new Intl.Locale(a5.replace(/_/g, "-")).maximize().toString();
                }), true) };
              }
              return d;
            }(), i2.language !== j3.language && (k3 += l({ language: g3.language, script: "", region: "" }, { language: h2.language, script: "", region: "" }, m2)), i2.script !== j3.script && (k3 += l({ language: g3.language, script: i2.script, region: "" }, { language: h2.language, script: i2.script, region: "" }, m2)), i2.region !== j3.region && (k3 += l(i2, j3, m2)), k3 + 0 + 40 * b3);
            y.distances[a3][c3] = n2, n2 < x && (x = n2, y.matchedDesiredLocale = a3, y.matchedSupportedLocale = c3);
          });
        }), x >= w && (y.matchedDesiredLocale = void 0, y.matchedSupportedLocale = void 0), z = y).matchedSupportedLocale && z.matchedDesiredLocale && (s = z.matchedSupportedLocale, t = v[z.matchedDesiredLocale].slice(z.matchedDesiredLocale.length) || void 0), p2 = s ? { locale: s, extension: t } : { locale: k2() }), null == p2 && (p2 = { locale: k2(), extension: "" });
        var o2, p2, q2, r, s, t, u, v, w, x, y, z, A = p2.locale, B = j2[A], C = { locale: "en", dataLocale: A };
        q2 = p2.extension ? function(a3) {
          i(a3 === a3.toLowerCase(), "Expected extension to be lowercase"), i("-u-" === a3.slice(0, 3), "Expected extension to be a Unicode locale extension");
          for (var b3, c3 = [], d2 = [], e2 = a3.length, f2 = 3; f2 < e2; ) {
            var g3 = a3.indexOf("-", f2), h2 = void 0;
            h2 = -1 === g3 ? e2 - f2 : g3 - f2;
            var j3 = a3.slice(f2, f2 + h2);
            i(h2 >= 2, "Expected a subtag to have at least 2 characters"), void 0 === b3 && 2 != h2 ? -1 === c3.indexOf(j3) && c3.push(j3) : 2 === h2 ? (b3 = { key: j3, value: "" }, void 0 === d2.find(function(a4) {
              return a4.key === (null == b3 ? void 0 : b3.key);
            }) && d2.push(b3)) : (null == b3 ? void 0 : b3.value) === "" ? b3.value = j3 : (i(void 0 !== b3, "Expected keyword to be defined"), b3.value += "-" + j3), f2 += h2 + 1;
          }
          return { attributes: c3, keywords: d2 };
        }(p2.extension).keywords : [];
        for (var D = [], E = function(a3) {
          var b3, d2, e2 = null != (o2 = null == B ? void 0 : B[a3]) ? o2 : [];
          i(Array.isArray(e2), "keyLocaleData for ".concat(a3, " must be an array"));
          var f2 = e2[0];
          i(void 0 === f2 || "string" == typeof f2, "value must be a string or undefined");
          var g3 = void 0, h2 = q2.find(function(b4) {
            return b4.key === a3;
          });
          if (h2) {
            var j3 = h2.value;
            "" !== j3 ? e2.indexOf(j3) > -1 && (g3 = { key: a3, value: f2 = j3 }) : e2.indexOf("true") > -1 && (g3 = { key: a3, value: f2 = "true" });
          }
          var k3 = c2[a3];
          i(null == k3 || "string" == typeof k3, "optionsValue must be a string or undefined"), "string" == typeof k3 && (b3 = a3.toLowerCase(), d2 = k3.toLowerCase(), i(void 0 !== b3, "ukey must be defined"), "" === (k3 = d2) && (k3 = "true")), k3 !== f2 && e2.indexOf(k3) > -1 && (f2 = k3, g3 = void 0), g3 && D.push(g3), C[a3] = f2;
        }, F = 0; F < g2.length; F++) E(g2[F]);
        return D.length > 0 && (A = function(a3, b3, c3) {
          i(-1 === a3.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
          for (var d2, e2 = "-u", f2 = 0; f2 < b3.length; f2++) {
            var g3 = b3[f2];
            e2 += "-".concat(g3);
          }
          for (var h2 = 0; h2 < c3.length; h2++) {
            var j3 = c3[h2], k3 = j3.key, l2 = j3.value;
            e2 += "-".concat(k3), "" !== l2 && (e2 += "-".concat(l2));
          }
          if ("-u" === e2) return m(a3);
          var n2 = a3.indexOf("-x-");
          return m(-1 === n2 ? a3 + e2 : a3.slice(0, n2) + e2 + a3.slice(n2));
        }(A, [], D)), C.locale = A, C;
      }
      function p(a2, b2) {
        for (var c2 = [], d2 = 0; d2 < b2.length; d2++) {
          var e2 = n(a2, b2[d2].replace(h, ""));
          e2 && c2.push(e2);
        }
        return c2;
      }
      function q(a2, b2, c2, d2) {
        return o(b2, Intl.getCanonicalLocales(a2), { localeMatcher: (null == d2 ? void 0 : d2.algorithm) || "best fit" }, [], {}, function() {
          return c2;
        }).locale;
      }
    } }, (a) => {
      var b = a(a.s = 1916);
      (_ENTRIES = "undefined" == typeof _ENTRIES ? {} : _ENTRIES)["middleware_src/middleware"] = b;
    }]);
  }
});

// node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "src/middleware", "page": "/", "regex": ["^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$", "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(my|en))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$"] }];
    require_edge_runtime_webpack();
    require_middleware();
  }
});

// node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const handlerConfig = config[handler3.type];
  const override = handlerConfig && "override" in handlerConfig ? handlerConfig.override : void 0;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto from "node:crypto";
import { parse as parseQs, stringify as stringifyQs } from "node:querystring";

// node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "eslint": { "ignoreDuringBuilds": false }, "typescript": { "ignoreBuildErrors": false, "tsconfigPath": "tsconfig.json" }, "typedRoutes": false, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.js", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": ["ucarecdn.com", "cdn3d.iconscout.com"], "disableStaticImages": false, "minimumCacheTTL": 60, "formats": ["image/webp"], "maximumResponseBody": 5e7, "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "remotePatterns": [], "unoptimized": false }, "devIndicators": { "position": "bottom-left" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "amp": { "canonicalBase": "" }, "basePath": "", "sassOptions": {}, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "serverRuntimeConfig": {}, "publicRuntimeConfig": {}, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6e3, "httpAgentOptions": { "keepAlive": true }, "logging": {}, "compiler": {}, "expireTime": 31536e3, "staticPageGenerationTimeout": 60, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "outputFileTracingRoot": "/Users/safwan_azman/Documents/personal/boycott-israel", "experimental": { "useSkewCookie": false, "cacheLife": { "default": { "stale": 300, "revalidate": 900, "expire": 4294967294 }, "seconds": { "stale": 30, "revalidate": 1, "expire": 60 }, "minutes": { "stale": 300, "revalidate": 60, "expire": 3600 }, "hours": { "stale": 300, "revalidate": 3600, "expire": 86400 }, "days": { "stale": 300, "revalidate": 86400, "expire": 604800 }, "weeks": { "stale": 300, "revalidate": 604800, "expire": 2592e3 }, "max": { "stale": 300, "revalidate": 2592e3, "expire": 4294967294 } }, "cacheHandlers": {}, "cssChunking": true, "multiZoneDraftMode": false, "appNavFailHandling": false, "prerenderEarlyExit": true, "serverMinification": true, "serverSourceMaps": false, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "clientSegmentCache": false, "clientParamParsing": false, "dynamicOnHover": false, "preloadEntriesOnStart": true, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "middlewarePrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 7, "memoryBasedWorkersCount": false, "imgOptConcurrency": null, "imgOptTimeoutInSeconds": 7, "imgOptMaxInputPixels": 268402689, "imgOptSequentialRead": null, "imgOptSkipMetadata": null, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "typedEnv": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "authInterrupts": false, "webpackMemoryOptimizations": false, "optimizeServerReact": true, "viewTransition": false, "routerBFCache": false, "removeUncaughtErrorAndRejectionListeners": false, "validateRSCRequestHeaders": false, "staleTimes": { "dynamic": 0, "static": 300 }, "serverComponentsHmrCache": true, "staticGenerationMaxConcurrency": 8, "staticGenerationMinPagesPerWorker": 25, "cacheComponents": false, "inlineCss": false, "useCache": false, "globalNotFound": false, "devtoolSegmentExplorer": true, "browserDebugInfoInTerminal": false, "optimizeRouterScrolling": false, "middlewareClientMaxBodySize": 10485760, "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "effect", "@effect/schema", "@effect/platform", "@effect/platform-node", "@effect/platform-browser", "@effect/platform-bun", "@effect/sql", "@effect/sql-mssql", "@effect/sql-mysql2", "@effect/sql-pg", "@effect/sql-sqlite-node", "@effect/sql-sqlite-bun", "@effect/sql-sqlite-wasm", "@effect/sql-sqlite-react-native", "@effect/rpc", "@effect/rpc-http", "@effect/typeclass", "@effect/experimental", "@effect/opentelemetry", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "htmlLimitedBots": "[\\w-]+-Google|Google-[\\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight", "bundlePagesRouterDependencies": false, "configFileName": "next.config.js", "turbopack": { "root": "/Users/safwan_azman/Documents/personal/boycott-israel" } };
var BuildId = "5EM7WO0YrDt4bvoD-xBav";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }], "routes": { "static": [{ "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/favicon.ico", "regex": "^/favicon\\.ico(?:/)?$", "routeKeys": {}, "namedRegex": "^/favicon\\.ico(?:/)?$" }], "dynamic": [{ "page": "/[locale]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)(?:/)?$" }, { "page": "/[locale]/sitemap.xml", "regex": "^/([^/]+?)/sitemap\\.xml(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/sitemap\\.xml(?:/)?$" }, { "page": "/[locale]/why/[...id]", "regex": "^/([^/]+?)/why/(.+?)(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale", "nxtPid": "nxtPid" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/why/(?<nxtPid>.+?)(?:/)?$" }], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/_not-found": { "initialStatus": 404, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_not-found", "dataRoute": "/_not-found.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/favicon.ico": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/favicon.ico", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/en": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/[locale]", "dataRoute": "/en.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/my": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/[locale]", "dataRoute": "/my.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "dynamicRoutes": { "/[locale]": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "routeRegex": "^/([^/]+?)(?:/)?$", "dataRoute": "/[locale].rsc", "fallback": null, "dataRouteRegex": "^/([^/]+?)\\.rsc$", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "notFoundRoutes": [], "preview": { "previewModeId": "433ee72d2f1e51c6f91f37ad36371f33", "previewModeSigningKey": "4eb9ebf8b16755aabc330aabecb2283c6cc4ce8d377fdd511d75b1fa946fa767", "previewModeEncryptionKey": "1b2fb2d2296e4701d3ea162b4e012484a8572c5fe7b3f58340364f8b7f7c13b5" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge-runtime-webpack.js", "server/src/middleware.js"], "name": "src/middleware", "page": "/", "matchers": [{ "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$", "originalSource": "/" }, { "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(my|en))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$", "originalSource": "/(my|en)/:path*" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "5EM7WO0YrDt4bvoD-xBav", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "mBgSo7xfemCU7+zrFyC5PUVBTkdlgnw4TUj5WVXp+B8=", "__NEXT_PREVIEW_MODE_ID": "433ee72d2f1e51c6f91f37ad36371f33", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "4eb9ebf8b16755aabc330aabecb2283c6cc4ce8d377fdd511d75b1fa946fa767", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "1b2fb2d2296e4701d3ea162b4e012484a8572c5fe7b3f58340364f8b7f7c13b5" } } }, "functions": {}, "sortedMiddleware": ["/"] };
var AppPathRoutesManifest = { "/[locale]/sitemap.xml/route": "/[locale]/sitemap.xml", "/favicon.ico/route": "/favicon.ico", "/_not-found/page": "/_not-found", "/[locale]/page": "/[locale]", "/[locale]/why/(name)/[...id]/page": "/[locale]/why/[...id]" };
var FunctionsConfigManifest = { "version": 1, "functions": {} };
var PagesManifest = { "/_error": "pages/_error.js", "/_app": "pages/_app.js", "/_document": "pages/_document.js", "/404": "pages/404.html" };
process.env.NEXT_BUILD_ID = BuildId;
process.env.NEXT_PREVIEW_MODE_ID = PrerenderManifest?.preview?.previewModeId;

// node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();
import { ReadableStream as ReadableStream3 } from "node:stream/web";

// node_modules/@opennextjs/aws/dist/utils/binary.js
var commonBinaryMimeTypes = /* @__PURE__ */ new Set([
  "application/octet-stream",
  // Docs
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Fonts
  "font/otf",
  "font/woff",
  "font/woff2",
  // Images
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  // Audio
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  // Video
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  // Archives
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  // Serialized data
  "application/x-protobuf"
]);
function isBinaryContentType(contentType) {
  if (!contentType)
    return false;
  const value = contentType.split(";")[0];
  return commonBinaryMimeTypes.has(value);
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: constructNextUrl(internalEvent.url, `/${detectedLocale}`)
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (!pattern.test(url))
    return false;
  if (host) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.host !== host;
    } catch {
      return !url.includes(host);
    }
  }
  return true;
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  return new ReadableStream3({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));
function normalizeLocationHeader(location, baseUrl, encodeQuery = false) {
  if (!URL.canParse(location)) {
    return location;
  }
  const locationURL = new URL(location);
  const origin = new URL(baseUrl).origin;
  let search = locationURL.search;
  if (encodeQuery && search) {
    search = `?${stringifyQs(parseQs(search.slice(1)))}`;
  }
  const href = `${locationURL.origin}${locationURL.pathname}${search}${locationURL.hash}`;
  if (locationURL.origin === origin) {
    return href.slice(origin.length);
  }
  return href;
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    const cacheTags = value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
    delete value.meta?.headers?.["x-next-cache-tags"];
    return cacheTags;
  } catch (e) {
    return [];
  }
}

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
var NEXT_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
var NEXT_PRERENDER_HEADER = "x-nextjs-prerender";
var NEXT_POSTPONED_HEADER = "x-nextjs-postponed";
async function computeCacheControl(path3, body, host, revalidate, lastModified) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest?.routes ?? {}).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  if (finalRevalidate !== CACHE_ONE_YEAR) {
    const sMaxAge = Math.max(finalRevalidate - age, 1);
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate
    });
    const isStale = sMaxAge === 1;
    if (isStale) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
function getBodyForAppRouter(event, cachedValue) {
  if (cachedValue.type !== "app") {
    throw new Error("getBodyForAppRouter called with non-app cache value");
  }
  try {
    const segmentHeader = `${event.headers[NEXT_SEGMENT_PREFETCH_HEADER]}`;
    const isSegmentResponse = Boolean(segmentHeader) && segmentHeader in (cachedValue.segmentData || {});
    const body = isSegmentResponse ? cachedValue.segmentData[segmentHeader] : cachedValue.rsc;
    return {
      body,
      additionalHeaders: isSegmentResponse ? { [NEXT_PRERENDER_HEADER]: "1", [NEXT_POSTPONED_HEADER]: "2" } : {}
    };
  } catch (e) {
    error("Error while getting body for app router from cache:", e);
    return { body: cachedValue.rsc, additionalHeaders: {} };
  }
}
async function generateResult(event, localizedPath, cachedValue, lastModified) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  let additionalHeaders = {};
  if (cachedValue.type === "app") {
    isDataRequest = Boolean(event.headers.rsc);
    if (isDataRequest) {
      const { body: appRouterBody, additionalHeaders: appHeaders } = getBodyForAppRouter(event, cachedValue);
      body = appRouterBody;
      additionalHeaders = appHeaders;
    } else {
      body = cachedValue.html;
    }
    type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
  } else if (cachedValue.type === "page") {
    isDataRequest = Boolean(event.query.__nextDataReq);
    body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
    type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
  } else {
    throw new Error("generateResult called with unsupported cache value type, only 'app' and 'page' are supported");
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified);
  return {
    type: "core",
    // Sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    // Also set the status code to the rewriteStatusCode if defined
    // This can happen in handleMiddleware in routingHandler.
    // `NextResponse.rewrite(url, { status: xxx})
    // The rewrite status code should take precedence over the cached one
    statusCode: event.rewriteStatusCode ?? cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER,
      ...additionalHeaders
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  const cookies = event.headers.cookie || "";
  const hasPreviewData = cookies.includes("__prerender_bypass") || cookies.includes("__next_preview_data");
  if (hasPreviewData) {
    debug("Preview mode detected, passing through to handler");
    return event;
  }
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath ?? "/") || Object.values(PrerenderManifest?.dynamicRoutes ?? {}).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      if (cachedData.value?.type === "app" || cachedData.value?.type === "route") {
        const tags = getTagsFromValue(cachedData.value);
        const _hasBeenRevalidated = cachedData.shouldBypassTagCache ? false : await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        case "route": {
          const cacheControl = await computeCacheControl(localizedPath, cachedData.value.body, host, cachedData.value.revalidate, cachedData.lastModified);
          const isBinary = isBinaryContentType(String(cachedData.value.meta?.headers?.["content-type"]));
          return {
            type: "core",
            statusCode: event.rewriteStatusCode ?? cachedData.value.meta?.status ?? 200,
            body: toReadableStream(cachedData.value.body, isBinary),
            headers: {
              ...cacheControl,
              ...cachedData.value.meta?.headers,
              vary: VARY_HEADER
            },
            isBase64Encoded: isBinary
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => (route.startsWith("/api/") || route === "/api") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !event.headers["x-nextjs-data"] && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes = {}, routes = {} } = prerenderManifest ?? {};
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
var REDIRECTS = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest?.preview?.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else if (REDIRECTS.has(statusCode) && key.toLowerCase() === "location") {
        resHeaders[key] = normalizeLocationHeader(value, internalEvent.url);
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite,
    rewriteStatusCode: rewriteUrl && !isExternalRewrite ? statusCode : void 0
  };
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_HEADER_REWRITE_STATUS_CODE = `${INTERNAL_HEADER_PREFIX}rewrite-status-code`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      if (key.startsWith(INTERNAL_HEADER_PREFIX) || key.startsWith(MIDDLEWARE_HEADER_PREFIX)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = normalizeLocationHeader(redirect.headers.Location, event.url, true);
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    const middlewareHeadersPrioritized = globalThis.openNextConfig.dangerous?.middlewareHeadersOverrideNextConfigHeaders ?? false;
    if (middlewareHeadersPrioritized) {
      headers = {
        ...headers,
        ...middlewareEventOrResult.responseHeaders
      };
    } else {
      headers = {
        ...middlewareEventOrResult.responseHeaders,
        ...headers
      };
    }
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0,
      rewriteStatusCode: middlewareEventOrResult.rewriteStatusCode
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const middlewareConfig = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(middlewareConfig?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(middlewareConfig?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(middlewareConfig?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId,
              [INTERNAL_HEADER_REWRITE_STATUS_CODE]: String(result.rewriteStatusCode)
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    if (process.env.OPEN_NEXT_REQUEST_ID_HEADER || globalThis.openNextDebug) {
      result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    }
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
