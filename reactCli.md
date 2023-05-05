







































































































































































































































































### 一开发模式配置



### 二生产模式配置

### 三其他配

### 四合并开发和生产模式

### 五优化配置

### 总结



### 配置

### HMR 热更新替换

hot:true

JS的hmr

过去用react refresh 去做这个插件

现在react官方已经更新了 新的插件了

两个都要安装

```
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh

@pmmmwh/react-refresh-webpack-plugin 
react refresh
```

css的hmr  是style-loader 处理



### react前端路由

路由配置时刷新找不到资源 404

当访问地址时就去sources 里面找资源   sources  要是没有这个资源 就404

webpack

devServer.historyApiFallbackBoolean = false对象当使用HTML5 History API时，索引。Htmlpage可能会取代404响应。启用devServer。historyApiFallback设置为true:webpack.config.js

```javascript
devServer: {
    historyApiFallback: true,
  },
```

路由懒加载技术 让路由单独打包

// webpack代码分割配置 

​    splitChunks: {

​      chunks: "all", // 其他使用默认值

​    },

写成一个函数

要用到Suspense,lazy

import React {Suspense,lazy} from "react"

```jsx
import React,{Suspense,lazy} from "react"
import {Link,Routes,Route} from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"

const Home= lazy(()=>/*wbpackChunkName:home*/import("./pages/Home"));
const About=lazy(()=>/*wbpackChunkName:about*/import("./pages/About"));
function App(){
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {/* fallback={<div>loading...</div> 没加载之前渲染什么 */}
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
```



### 缓存

```
output: {
        path: path.relative(__dirname,"../dist"),
        //[contenthash] 更好做缓存
        filename: "static/js/[name].[contenthash].js",
        chunkFilename: "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
    },
```

