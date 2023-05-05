module.exports={
    // 继承React官方规则
    extends:["react-app"],
    parserOptions:{
        babelOptions:{
            presets:[
                //解决页面报错
                ["babel-preset-react-app",false],
                "babel-preset-react-app/prod"
            ]
        }
    },
    // rules:{
    //     "no-var":2,//不使用var 定义变量
    // },
    plugins:["import"],//import 解决动态导入语法报错问题

}