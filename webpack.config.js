const path=require('path');

/* 在内存中,根据指定的模板页面,生成一份内存中的首页,同时自动把打包好的bundle注入到页面底部
如果要配置插件,需要在导出的对象中,挂载一个plugins节点
*/
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');


// 当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{//指定输出选项
        path:path.join(__dirname,'./dist'),//输出路径
        filename:'bundle.js'//指定输出文件的名称
    },
    plugins:[//所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件的路径
            filename:'index.html'//设置生成内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理less文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理scss文件的loader
            {test:/\.(jpg|png|jpeg|bmp|gif)$/,use:'url-loader'},//处理图片路径的loader
            {test:/\.(jpg|png|jpeg|bmp|gif)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//这是处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},//这是配置babel来转换高级语法
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    resolve:{
        alias:{//修改vue被导入包的时候的路径
            // "vue$":"vue/dist/vue.js"
        } 
    }
}