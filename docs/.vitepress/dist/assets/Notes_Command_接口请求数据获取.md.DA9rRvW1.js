import{_ as a,c as e,o as s,a1 as n}from"./chunks/framework.DO75OpyS.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Notes/Command/接口请求数据获取.md","filePath":"Notes/Command/接口请求数据获取.md","lastUpdated":null}'),i={name:"Notes/Command/接口请求数据获取.md"},t=n(`<h1 align="center" style="color:#000000;">接口数据获取</h1><h3 id="获取状态码" tabindex="-1">获取状态码 <a class="header-anchor" href="#获取状态码" aria-label="Permalink to &quot;获取状态码&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var code=responseCode.code</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="打印" tabindex="-1">打印 <a class="header-anchor" href="#打印" aria-label="Permalink to &quot;打印&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tests[code]=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="获取状态码名称" tabindex="-1">获取状态码名称 <a class="header-anchor" href="#获取状态码名称" aria-label="Permalink to &quot;获取状态码名称&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var codename=responseCode.name</span></span>
<span class="line"><span>tests[codename]=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取响应时间" tabindex="-1">获取响应时间 <a class="header-anchor" href="#获取响应时间" aria-label="Permalink to &quot;获取响应时间&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var time=responseTime</span></span>
<span class="line"><span>tests[time]=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取响应头" tabindex="-1">获取响应头 <a class="header-anchor" href="#获取响应头" aria-label="Permalink to &quot;获取响应头&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var header=postman.getResponseHeader</span></span>
<span class="line"><span>tests[header]=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取响应体" tabindex="-1">获取响应体 <a class="header-anchor" href="#获取响应体" aria-label="Permalink to &quot;获取响应体&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var body=responseBody</span></span>
<span class="line"><span>tests[body]=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),l=[t];function p(r,d,o,c,h,u){return s(),e("div",null,l)}const v=a(i,[["render",p]]);export{m as __pageData,v as default};
