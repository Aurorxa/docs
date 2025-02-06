import{_ as p,B as r,o as h,c as o,j as i,a,G as n,w as t,a3 as l}from"./chunks/framework.C4orK2dt.js";const v=JSON.parse('{"title":"Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"en/quick_started/index.md","filePath":"en/quick_started/index.md","lastUpdated":1738043441000}'),d={name:"en/quick_started/index.md"},c={class:"note custom-block github-alert"};function k(g,s,u,b,m,F){const e=r("VPNolebaseInlineLinkPreview");return h(),o("div",{"data-pagefind-body":!0},[s[15]||(s[15]=i("h1",{id:"quick-start",tabindex:"-1"},[a("Quick Start "),i("a",{class:"header-anchor",href:"#quick-start","aria-label":'Permalink to "Quick Start"'},"​")],-1)),s[16]||(s[16]=i("h2",{id:"_1-install-and-run-r-nacos",tabindex:"-1"},[a("1. Install and Run r-nacos "),i("a",{class:"header-anchor",href:"#_1-install-and-run-r-nacos","aria-label":'Permalink to "1. Install and Run r-nacos"'},"​")],-1)),s[17]||(s[17]=i("p",null,"【Standalone Deployment】",-1)),i("p",null,[s[1]||(s[1]=a("Method 1: Download the application package for your system from ")),n(e,{href:"https://github.com/heqingpan/rnacos/releases",target:"_blank",rel:"noreferrer"},{default:t(()=>s[0]||(s[0]=[a("github release")])),_:1}),s[2]||(s[2]=a(", and run it after extracting."))]),s[18]||(s[18]=l(`<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Extract</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos-x86_64-apple-darwin.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="note custom-block github-alert"><p class="custom-block-title">提醒</p><p></p><p>On Windows, simply run rnacos.exe after extraction.</p></div><p>Method 2: Run using Docker</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># stable is the latest official version, or you can specify an image version, such as: qingpan/rnacos:v0.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qingpan/rnacos:stable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	--name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mynacos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8848:8848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9848:9848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10848:10848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	qingpan/rnacos:stable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="note custom-block github-alert"><p class="custom-block-title">提醒</p><p></p><p>The Docker container&#39;s working directory is /io, where it reads and writes configuration files.</p></div><h4 id="docker-version-details" tabindex="-1">Docker Version Details <a class="header-anchor" href="#docker-version-details" aria-label="Permalink to &quot;Docker Version Details&quot;">​</a></h4><p>Each application build also includes a corresponding Docker package, qingpan/rnacos:$tag.</p><p>Each version has two types of Docker packages:</p><table tabindex="0"><thead><tr><th>Docker Package Type</th><th>tag Format</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>gnu debian package</td><td>$version</td><td>qingpan/rnacos:v0.4.0</td><td>Based on debian-slim, larger in size (36M compressed, 102M uncompressed), with higher performance;</td></tr><tr><td>musl alpine package</td><td>$version-alpine</td><td>qingpan/rnacos:v0.4.0-alpine</td><td>Based on alpine, smaller in size (11M compressed, 34M uncompressed), with lower performance;</td></tr></tbody></table><p>If you don&#39;t care about the version, you can use the latest official version tag:</p><ul><li>The latest gnu official version: <code>qingpan/rnacos:stable</code></li><li>The latest alpine official version: <code>qingpan/rnacos:stable-alpine</code></li></ul><p>Method 3: Install via cargo compilation</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Method 4: Download and compile the source code</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/heqingpan/rnacos.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Method 5: Install on MacOS using brew</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add r-nacos to taps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos/r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install r-nacos via brew</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="important custom-block github-alert"><p class="custom-block-title">重要</p><p></p><p>You can update to the latest version with the following command:</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`,26)),i("div",c,[s[5]||(s[5]=i("p",{class:"custom-block-title"},"提醒",-1)),s[6]||(s[6]=i("p",null,null,-1)),s[7]||(s[7]=i("p",null,"For testing and trial purposes, the first and second methods are recommended, as they can be used immediately after downloading.",-1)),s[8]||(s[8]=i("p",null,"On Linux, the first and second methods default to the musl version (which has slightly lower performance than the gnu version). For production environments where performance is critical, consider using the third and fourth methods to compile the gnu version in the appropriate environment for deployment.",-1)),i("p",null,[s[4]||(s[4]=a("For startup configuration, refer to: ")),n(e,{href:"./../env_config/"},{default:t(()=>s[3]||(s[3]=[a("Running Parameter Description")])),_:1})])]),s[19]||(s[19]=l(`<h2 id="_2-running-nacos-applications" tabindex="-1">2. Running Nacos Applications <a class="header-anchor" href="#_2-running-nacos-applications" aria-label="Permalink to &quot;2. Running Nacos Applications&quot;">​</a></h2><p>Once the service is up and running, you can proceed to run your existing Nacos applications.</p><h3 id="configuration-center-http-api-example" tabindex="-1">Configuration Center HTTP API Example <a class="header-anchor" href="#configuration-center-http-api-example" aria-label="Permalink to &quot;Configuration Center HTTP API Example&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Send a POST request to the Nacos configuration center to publish a configuration</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/cs/configs&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dataId=t001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # Unique identifier for the configuration, e.g., t001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;group=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # Group name to which the configuration belongs, e.g., foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;content=contentTest&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # Content of the configuration, e.g., contentTest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Query</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&amp;group=foo&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="registry-center-http-api-example" tabindex="-1">Registry Center HTTP API Example <a class="header-anchor" href="#registry-center-http-api-example" aria-label="Permalink to &quot;Registry Center HTTP API Example&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Register a service instance: Send a POST request to the Nacos registry to register a service instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # Port number of the service instance, e.g., 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # Health status of the service instance, true means healthy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.11&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # IP address of the service instance, e.g., 192.168.1.11</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # Weight of the service instance, e.g., 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # Name of the service, e.g., nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # Group name to which the service instance belongs, e.g., foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;001&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Metadata of the service instance, represented as a JSON string</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Register a service instance: Send a POST request to the Nacos registry to register a service instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # Port number of the service instance, e.g., 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # Health status of the service instance, true means healthy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.12&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # IP address of the service instance, e.g., 192.168.1.12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # Weight of the service instance, e.g., 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Name of the service, e.g., nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # Group name to which the service instance belongs, e.g., foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;002&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Metadata of the service instance, represented as a JSON string</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Register a service instance: Send a POST request to the Nacos registry to register a service instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     					# Port number of the service instance, e.g., 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  					# Health status of the service instance, true means healthy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.13&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # IP address of the service instance, e.g., 192.168.1.13</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # Weight of the service instance, e.g., 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Name of the service, e.g., nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # Group name to which the service instance belongs, e.g., foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;003&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# Metadata of the service instance, represented as a JSON string</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Query service instances</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://127.0.0.1:8848/nacos/v1/ns/instance/list?&amp;namespaceId=public&amp;serviceName=foo%40%40nacos.test.001&amp;groupName=foo&amp;clusters=&amp;healthyOnly=true&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>For more detailed usage, please refer to the Nacos user guide on nacos.io.</p>`,11)),i("p",null,[n(e,{href:"https://nacos.io/zh-cn/docs/sdk.html",target:"_blank",rel:"noreferrer"},{default:t(()=>s[9]||(s[9]=[a("JAVA-SDK")])),_:1})]),i("p",null,[n(e,{href:"https://nacos.io/zh-cn/docs/other-language.html",target:"_blank",rel:"noreferrer"},{default:t(()=>s[10]||(s[10]=[a("Other Languages")])),_:1})]),i("p",null,[n(e,{href:"https://nacos.io/zh-cn/docs/open-api.html",target:"_blank",rel:"noreferrer"},{default:t(()=>s[11]||(s[11]=[a("Open-API")])),_:1})]),s[20]||(s[20]=l('<h2 id="iii-using-the-r-nacos-console" tabindex="-1">III. Using the r-nacos Console <a class="header-anchor" href="#iii-using-the-r-nacos-console" aria-label="Permalink to &quot;III. Using the r-nacos Console&quot;">​</a></h2><p>Starting from version 0.4.0, r-nacos introduces a new console with its own dedicated port. This new console offers comprehensive user management, login verification, and permission control, and it can be exposed to external networks.</p><p>Once the service is up and running, you can access the new r-nacos console by navigating to <code>http://127.0.0.1:10848/rnacos/</code> in your browser.</p><p>The old console, accessible at <code>http://127.0.0.1:8848/rnacos/</code>, is now deprecated and is not enabled by default. However, it can still be activated through configuration settings. Unlike the new console, the old one does not require login authentication and lacks user management features.</p><p>The console provides several key functionalities, including user management, namespace management, configuration management, service management, and service instance management.</p><blockquote><p>Console Online Demo</p></blockquote>',6)),i("p",null,[s[13]||(s[13]=a("Address: ")),n(e,{href:"https://www.bestreven.top/rnacos/",target:"_blank",rel:"noreferrer"},{default:t(()=>s[12]||(s[12]=[a("https://www.bestreven.top/rnacos/")])),_:1}),s[14]||(s[14]=a(" (This demo service and URL are generously provided by a community user.)"))]),s[21]||(s[21]=l('<p>Demo Users:</p><ul><li>Developer: <ul><li>Username: <code>dev</code>, Password: <code>dev</code></li></ul></li><li>Guest: <ul><li>Username: <code>guest</code>, Password: <code>guest</code></li></ul></li></ul><p>Demo Content:</p><ul><li>Configuration Center: Nearly 5,000 configurations</li><li>Service Center: 30 services, each with 15 instances, totaling 450 service instances.</li></ul><blockquote><ol><li>User Login</li></ol></blockquote><p>When you try to access a page in the new console without being logged in, you&#39;ll be automatically redirected to the login page. If a user fails to log in 5 times consecutively, their account will be locked for 1 hour. The number of allowed failed attempts can be adjusted via startup parameters.</p><img style="width:400px;" width="400" src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223220425.png"><blockquote><ol start="2"><li>User Management</li></ol></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223222325.png" alt="" loading="lazy"></p><p>By default, the system creates an <code>admin</code> user with the password <code>admin</code>.</p><p>Once inside the console, you can manage users as needed.</p><p>User Role Permissions:</p><ol><li>Administrator: Full access to all console features</li><li>Developer: Access to all console features except user management</li><li>Guest: Can only view data in the configuration center and registry, with no editing capabilities.</li></ol><p><strong>Note:</strong> Before making the nacos console accessible externally, it&#39;s advisable to create a custom administrator and either delete or disable the default <code>admin</code> user.</p><blockquote><ol start="3"><li>Configuration Management</li></ol></blockquote><p>Configuration List Management</p><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155441.png" alt="" loading="lazy"></p><p>Create, Edit Configuration</p><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155545.png" alt="" loading="lazy"></p><blockquote><ol start="4"><li>Service List Management</li></ol></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155133.png" alt="" loading="lazy"></p><blockquote><ol start="5"><li>Service Instance Management</li></ol></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155158.png" alt="" loading="lazy"></p><blockquote><ol start="6"><li>Namespace Management</li></ol></blockquote><p><img src="https://user-images.githubusercontent.com/1174480/268299574-4947b9f8-79e1-48e2-97fe-e9767e26ddc0.png" alt="" loading="lazy"></p>',25))])}const C=p(d,[["render",k]]);export{v as __pageData,C as default};
