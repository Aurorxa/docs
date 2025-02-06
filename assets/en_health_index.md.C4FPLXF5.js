import{_ as a,o as s,c as t,ac as n}from"./chunks/framework.C8XEYcK3.js";const u=JSON.parse('{"title":"Service Health Check and Liveness Detection","description":"","frontmatter":{},"headers":[],"relativePath":"en/health/index.md","filePath":"en/health/index.md","lastUpdated":1738043441000}'),i={name:"en/health/index.md"};function l(c,e,r,o,d,p){return s(),t("div",null,e[0]||(e[0]=[n('<h1 id="service-health-check-and-liveness-detection" tabindex="-1">Service Health Check and Liveness Detection <a class="header-anchor" href="#service-health-check-and-liveness-detection" aria-label="Permalink to &quot;Service Health Check and Liveness Detection&quot;">​</a></h1><p>Offers a liveness detection interface to identify faulty nodes, enabling (through external scripts) the automatic removal or restart of problematic nodes within the cluster.</p><h2 id="liveness-http-interface" tabindex="-1">Liveness HTTP Interface <a class="header-anchor" href="#liveness-http-interface" aria-label="Permalink to &quot;Liveness HTTP Interface&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /health</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Successful response:</p><ol><li>http status code: 200</li><li>http body: <code>success</code></li></ol><p>Response when a module is found to be malfunctioning: <code>error: $module ill</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Make a request</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl http://127.0.0.1:8848/health</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Response:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>success</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12)]))}const m=a(i,[["render",l]]);export{u as __pageData,m as default};
