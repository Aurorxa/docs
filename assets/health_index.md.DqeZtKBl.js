import{_ as a,o as s,c as t,a4 as i}from"./chunks/framework.Bt88HG6_.js";const u=JSON.parse('{"title":"服务健康检测、探活","description":"","frontmatter":{},"headers":[],"relativePath":"health/index.md","filePath":"zh/health/index.md","lastUpdated":1733968575000}'),n={name:"health/index.md"};function p(l,e,d,r,o,c){return s(),t("div",{"data-pagefind-body":!0},e[0]||(e[0]=[i('<h1 id="服务健康检测、探活" tabindex="-1">服务健康检测、探活 <a class="header-anchor" href="#服务健康检测、探活" aria-label="Permalink to &quot;服务健康检测、探活&quot;">​</a></h1><p>提供服务探活接口以支持发现有问题的节点，可（通过外部脚本）支持自动移除或重启集群中的问题节点</p><h2 id="探活http接口" tabindex="-1">探活http接口 <a class="header-anchor" href="#探活http接口" aria-label="Permalink to &quot;探活http接口&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /health</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>成功返回值:</p><ol><li>http status code: 200</li><li>http body: <code>success</code></li></ol><p>检测到模块不正常的返回内容为： <code>error: $module ill</code></p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>发起请求</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl http://127.0.0.1:8848/health</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>返回值：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>success</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12)]))}const b=a(n,[["render",p]]);export{u as __pageData,b as default};