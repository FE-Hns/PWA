# PWA介绍

## PWA的定义

认识一样事物，要明白的是该事物名字的含义。PWA => Progressive Web Apps 的简称，翻译过来是渐进式网络应用。可以给我们的网页提供一种类似APP的功能，即离线功能，可以带来更加极致的用户体验。它们赋予了开发者可以构建速度更快、富有弹性并且更吸引人的网站的能力，这些网站能够被全球数十亿人访问

## 1.1 PWA的优势所在

虽然我们的移动备变得愈发强大，但我们的移动网络并不是总能满足需求。如果你使用智能手机，你就会知道移动连接是有多么的脆弱。2G、3G 或 4G 这些连接本身都很不错，但是它们时常会失去连接，或者网速变得很差。如果你的业务是跟网络相关的，那这就是你需要去解决的问题。

从历史上来说，原生应用 (下载到手机的) 已经能够提供更好的整体用户体验，你只要下载好原生应用，它便会立即加载。即使没有网络连接，也并非是完全不可用的: 你的设备上已经存储了供用户使用的绝大部分资源。原生应用具备提供有弹性、吸引人的体验的能力，同时也意味它的数量已经呈爆炸式增长。目前在苹果和 Google 的应用商店中，已经有超过400万的原生应用！

从历史上来说，Web 无法提供原生应用所具备的这些强大功能，比如离线能力，瞬时加载和更高的可靠性。这也正是 PWA 成为 Web 颠覆者的契机。主要的浏览器厂商一直在努力改进构建 Web 的方式， 并创建了一组新功能以使 Web 开发者能够创建快速、可靠和吸引人的网站PWA 应该具备以下特点：

* 响应式
* 独立于网络连接
* 类似原生应用的交互体验
* 始终保持更新
* 安全
* 可发现
* 可重连
* 可安装
* 可链接

作为 Web 开发者，这是我们传统构建网站方式的一种转变。这意味着我们可以开始构建可以应对不断变化的网络条件或无网络连接的网站。这还意味着我们可以建立更吸引人的网站来为我们的用户提供一流的浏览体验。

很不错的idea，但是对于那些不支持这些新功能的老浏览器怎么办？ PWA 最棒的一点就是它们真的是“渐进式”的。如果你构建一个 PWA，即使在一个不支持的老旧浏览器上运行，它仍然可以作为一个普通的网站来运行。驱动 PWA 的技术就是这样设计的，只有在支持这些新功能的浏览器中才会增强体验。如果用户的设备支持，那么他们将获得所有额外的好处和更多的改进功能。无论怎样，这对你和你的用户来说都是双赢！

### 1.1.1 PWA基础

说了这么多关于PWA优点，那么还是一头雾水，PWA到底是什么组成的。其实非常简单，PWA是面向web开发者的，所以包含着HTML、CSS 和 JavaScript。

然而， PWA 却更进一步，它为用户提供了增强的体验。

PWA 会指向一个清单 (manifest) 文件，其中包含网站相关的信息，包括图标，背景屏幕，颜色和默认方向。

PWA 使用了叫做 Service Workers 的重要新功能，它可以令你深入网络请求并构建更好的 Web 体验。随着本章的深入，我们将进一步了解它们以及它们带给浏览器的改进。PWA 还允许你将其“添加”到设备的主屏幕上。它会像原生应用那样，通过点击图标便可让你轻松访问一个 Web 应用。

PWA 还可以离线工作。使用 Service Workers，你可以选择性地缓存部分网站以提供离线体验。如果你现在在没有网络连接的情况下浏览网站，由于页面无法连接到服务器，无法下载所需要的各种资源，会提示无网络链接，这种页面的出现会让用户觉得体验极差。

有了 Service Workers，我们的用户无需再面对恐怖的“无网络连接”屏幕了。使用 Service Workers，你可以拦截并缓存任何来自你网站的网络请求。无论你是为移动设备，桌面设备还是平板设备构建网站， 都可以在有网络连接或没有网络连接的情况下控制如何响应请求。举个例子来说，浏览一个商城网站，即使处于离线状态，我们也可以浏览商品，加入购物车等等交互操作，当然下单的操作那肯定得等到网络恢复链接才可以。

## 1.2 PWA核心：Service Workers

正如我之前所提到的，释放 PWA 力量的关键在于 Service Workers 。就其核心来说，Service Workers 只是后台运行的 worker 脚本。它们是用 JavaScript 编写的，只需短短几行代码，它们便可使开发者能够拦截网络请求，处理推送消息并执行许多其他任务。

最棒的一点是，如果用户的浏览器不支持 Service Workers 的话，它们只是简单地回退，你的网站还作为普通的网站。正是由于这一点，它们被描述为“完美的渐进增强”。渐进增强术语是指你可以先创建能在任何地方运行的体验，然后为支持更高级功能的设备增强体验。

### 1.2.1 理解 Service Workers

Service Workers 可以让你全权控制网站发起的每一个请求，这为许多不同的使用场景开辟了可能性。Service Worker 的行为方式也是如此，它可以重定向你的请求，甚至彻底停止。

虽然Service Workers是由JS编写完成，但是与一般的JS文件存在着些许差异。差异主要体现在如下几点

* 运行在它自己的全局脚本上下文中
* 不绑定到具体的网页
* 无法修改网页中的元素，因为它无法访问 DOM
* 只能使用 HTTPS（出于安全原因的考虑）

工作原理图示

![原理图](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure1.3.png)

于是我们得出几点：

1. Service Worker 运行在 worker 上下文中，这意味着它无法访问 DOM，它与应用的主要 JavaScript 运行在不同的线程上，所以它不会被阻塞。
2. 它们被设计成是完全异步的，因此你无法使用诸如同步 XHR 和 localStorage 之类的功能。
3. 在上面的图中，你可以看到 Service Worker 处于不同的线程，并且可以拦截网络请求。可以把它理解为"调度员"，它可以让你全权控制网站中所有进出的网络请求。这种能力使它们极其强大，并允许你来决定如何响应请求

### 1.2.2 Service Worker 的生命周期

Service Worker很像一个应用，在使用之前你需要下载安装注册等等步骤。。

[![生命周期](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure1.4.png)](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure1.4.png)


### 1.2.3 基础示例

举一个最简单的例子，来展示，来看看最简单的使用方式。

```html
<html>
  <head>The best web page ever</head>
  <body>
  <script>
    // 注册 service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // 注册成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope);         
      }).catch(function(err) {
        // 注册失败 :(
        console.log('ServiceWorker registration failed: ', err);
      });
    }
  </script>
  </body>
</html>
```
代码说明：

1. 检查当前浏览器是否支持 Service Workers
2. 如果支持，注册一个叫做 'sw.js' 的 Service Worker 文件
3. 如果成功则打印到控制台
4. 如果发生错误，捕获错误并打印到控制台

在上边的基础之上，我们继续往下进行，如果现在我们有一个需求是这样子的。如果我们请求中含有jpg图片，那么就把它替换成某个图片。

之前我提到过 Service Workers 是事件驱动的，而且 Service Workers 最强大的功能之一就是允许你通过进入 fetch 事件来监听任何网络请求。当一个资源发起 fetch 事件时，你可以决定如何继续进行。你可以将发出的 HTTP 请求或接收的 HTTP 响应更改成任何内容。这相当简单，但同时却非常强大！

```js
self.addEventListener('fetch', function(event) {     
  if (/\.jpg$/.test(event.request.url)) {            
    event.respondWith(fetch('/images/unicorn.jpg')); 
  }
});
```

### 1.2.4 安全考虑

既然Service Worker 可以拦截请求，那么同时这也是非常危险的。比如外部可以通过拦截请求，然后指向危险的代码。所以，出于安全方面的考虑，为了避免这种情况发送，Service Worker 只能在通过 HTTPS 提供服务的网页上注册。这确保了网页在通过网络的过程中没有被篡改。

## 1.3 性能提升

PWA可以提高用户的体验，比如离线浏览功能等等。并且可以将你的web放到桌面，就像app一样。可以对业务量有显著的提高。

## 1.4 总结一番

1. 在用户体验方面，相比于传统网站，原生应用可以提供更好的体验。
2. Web 正在发展，我们没有任何理由不去为用户提供快速、有弹性和吸引人的 Web 应用。
3. PWA 能够为你的用户提供更快的、富有弹性的和更吸引人的网站。
4. Service Workers 是解锁浏览器力量的关键。可以把它们当做是能够拦截 HTTP 请求的调度员。

## 2.1 在现有的基础上更改？

对于老项目中使用新技术，最使开发者头疼得是会不会导致项目的工作量过于大，成了重构。那是我们最不愿看到的情况，好在PWA这项技术还算好，不至于出现这样的情况，因为他是渐进式的。

我们可以通过一款工具，Lighthouse，来对我们的项目进行分析。我们可以直接打开谷歌应用商店，在里边搜索和安装，当然你需要翻一下天朝的墙。

因为我已经安装好了，所以直接我们用这个工具，对我们的页面进行分析。得到的结果都会在另一个页面中体现出来。

## 2.2 构建PWA的前端架构方式

在开发者之中，通常会讨论是构建原生应用还是 Web 应用，到底哪个更好。就我个人而言，我认为你应该根据用户的需要来构建应用。不应该出现 PWA 和原生应用相争的状况，作为开发者，我们应该不断探索提升用户体验的方法。就像你想的那样，我会对构建 Web 应用有自己的偏好，但无论你是否喜欢，如果你将 PWA 视为一套“最佳”实践的话，你都会构建出更好的网站。假设说，你喜欢用 React 或 Angular 进行开发，你完全可以继续使用它们，因为构建 PWA 只会增强 Web 应用，并使其速度更快，更具吸引力和更有弹性。

原生应用开发者长期以来一直能够给他们的用户提供 Web 开发者梦寐以求的功能，例如离线操作和无论网络连接如何都可以响应的功能。然而，要感谢 PWA 带给 Web 的新功能，我们可以努力构建更好的网站。许多原生应用都有着良好的架构，作为 Web 开发者，我们可以从他们的架构方法中进行学习。

### 2.2.1 应用外壳架构

名字看上去很高大上，其实说白了，很通俗，就是一个壳子。有人会问，这是什么样子的壳子。答案很简单，是利用HTML和CSS写的壳子。

> 为什么要用这个外壳架构？

这个问题很棒。是为了给用户比较好的体验，就是为了用户体验。当我们打开一个页面，我们把页面的结构和样式形成的东西叫做壳子，里边的数据是动态加载的。我们不可能让页面一直在等待数据，然后才会把页面呈现出来，否则用户会失去耐性直接关闭页面，那么不会带来任何效益。

> 如果使用了这个外壳架构呢？或者说，这个外壳架构技术能起到什么样的作用，优化我们的项目？

1. 用户首次访问，会下载Service Workers并且完成第一节说的那几步骤。
2. 当用户在此访问时候，可以通过缓存技术配合Service Workers来拦截请求，比如请求字体，图标，样式，js，html等等资源，直接利用我们缓存好的资源。当我们发起的请求中没有存在缓存中，那么我们向服务器发起请求。

这样基本上就完成了PWA的外壳架构。

来两张图，看看这两步的过程。

![第一步](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure2.5.png)

![第二步](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure2.6.png)


## 3.1 HTTP的缓存基础

现代的浏览器就仿佛当前的智能手机，非常聪明。打一个比方，将浏览器比作冰箱，当冰箱里边的牛奶没有过期，我们就不用采购，直到牛奶过期了之后，我们才需要进行采购。

对于浏览器来说，可以根据缓存的过期时间，来判断是否需要进行重新向服务器发送请求，来请求新的数据。如果没有过期那么只需要走本地的缓存即可，如果缓存过期了，那么需要向服务器发送请求。

![HTTP请求缓存头部信息](https://raw.githubusercontent.com/SangKa/PWA-Book-CN/master/assets/figure3.1.png)

在上图中，你可以看到当浏览器发起一个资源的 HTTP 请求时，服务器返回的资源还附带一些 HTTP 首部。这些首部包含有用的信息，浏览器可以通过它们来了解资源相关的更多信息。HTTP 响应告诉浏览器这个资源是什么类型的，要缓存多长时间，它是否压缩过，等等。

## 3.2 Service Workers 缓存基础

疑惑？我们都会这么想，我们都已经有 HTTP 缓存了，为何还需要 Service Worker 缓存呢？ Service Worker 缓存有何不同呢？好吧，它可以替代服务器来告诉浏览器资源要缓存多久，作为开发者的你可以全权掌控。Service Worker 缓存极其强大，因为对于如何缓存资源，它赋予了你程序式的精准控制能力。与所有 PWA 的功能一样，Service Worker 缓存是对 HTTP 缓存的增强，并可以与之配合使用。

Service Workers 的强大在于它们拦截 HTTP 请求的能力。在本章中，我们将使用这种拦截 HTTP 请求和响应的能力，从而为用户提供直接来自缓存的超快速响应！

### 3.2.1 在安装过程中进行预缓存


使用 Service Workers，你可以进入任何传入的 HTTP 请求，并决定想要如何响应。在你的 Service Worker 中，可以编写逻辑来决定想要缓存的资源，以及需要满足什么条件和资源需要缓存多久。一切尽归你掌控！

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hello,world!</title>
  </head>
  <body>
    <!-- 通用的图片资源 -->
    <img src="./img/pic.png" alt="">
    <!-- 通用的js -->
    <script async src="./js/script.js"></script>
    <script>
        // 注册 service worker
        if ('serviceWorker' in navigator) {             
          navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
            // 注册成功
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }).catch(function (err) {                     
            // 注册失败 :(
            console.log('ServiceWorker registration failed: ', err);
          });
        }
      </script>
</body>
</html>
```

```js
// service-worker.js 
// 代码清单3.2
var cacheName = 'helloWorld';                
self.addEventListener('install', event => {  
  event.waitUntil(
    caches.open(cacheName)                   
    .then(cache => cache.addAll([            
      '/js/script.js',
      '/images/hello.png'
    ]))
  );
});
```
1. 缓存的名称
2. 我们将进入 Service Worker 的安装事件
3. 使用我们指定的缓存名称来打开缓存
4. 把 JavaScript 和 图片文件添加到缓存中

在第1章中，我们看过了 Service Worker 生命周期和它激活之前所经历的不同阶段。其中一个阶段就是 install 事件，它发生在浏览器安装并注册 Service Worker 时。这是把资源添加到缓存中的绝佳时间，在后面的阶段可能会用到这些资源。例如，如果我知道某个 JavaScript 文件可能整个网站都会使用它，我们就可以在安装期间缓存它。这意味着另一个引用此 JavaScript 文件的页面能够在后面的阶段轻松地从缓存中获取文件。

清单3.2中的代码进入了 install 事件，并在此阶段将 JavaScript 文件和 hello 图片添加到缓存中。在上面的清单中，我还引用了一个叫做 cacheName 的变量。这是一个字符串，我用它来设置缓存的名称。你可以为每个缓存取不同的名称，甚至可以拥有一个缓存的多个不同的副本，因为每个新的字符串使其唯一。当看到本章后面的版本控制和缓存清除时，你将会感受到它所带来的便利。

如果所有的文件都成功缓存了，那么 Service Worker 便会安装完成。如果任何文件下载失败了，那么安装过程也会随之失败。这点非常重要，因为它意味着你需要依赖的所有资源都存在于服务器中，并且你需要注意决定在安装步骤中缓存的文件列表。定义一个很长的文件列表便会增加缓存失败的几率，多一个文件便多一份风险，从而导致你的 Servicer Worker 无法安装。

现在我们的缓存已经准备好了，我们能够开始从中读取资源。我们需要在清单3.3中添加代码，让 Service Worker 开始监听 fetch 事件。

```js
// 代码清单3.3
self.addEventListener('fetch', function (event) {  
  event.respondWith(
    caches.match(event.request)                    
    .then(function (response) {
      if (response) {                              
        return response;                           
      }
      return fetch(event.request);                 
    })
  );
});
```
1. 添加 fetch 事件的事件监听器
2. 检查传入的请求 URL 是否匹配当前缓存中存在的任何内容
3. 如果有 response 并且它不是 undefined 或 null 的话就将它返回
4. 否则只是如往常一样继续，通过网络获取预期的资源














