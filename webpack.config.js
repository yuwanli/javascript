const path = require('path');
let glob = require('glob');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let getEntry = (globPath, pathDir) => {
    let files = glob.sync(globPath);
    let entries = {};
    let entry;
    let dirname;
    let pathname;
    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        pathname = dirname.replace(new RegExp(`^${pathDir}`), '');
        entries[pathname] = `./${entry}`;
    }
    return entries;
};

const entries = getEntry('src/**/index.ts','src/');
const htmls = Object.keys(entries).reduce((resArr,val) => {
    resArr.push(new HtmlWebpackPlugin({
        template: `./src/${val}/index.html`,
        filename: `./${val}/index.html`,
        chunks: [`${val}`] 
    }))
    return resArr
},[])


module.exports = {
    entry: entries,    // 入口文件
    output: {
        filename: '[name]/index.js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmls
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/,
            },
            
        ]
    },
    devServer: {
        contentBase: './dist/',
        host: 'localhost',      
        port: 3000,             
    }
}