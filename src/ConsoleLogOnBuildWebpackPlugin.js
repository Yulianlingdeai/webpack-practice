const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log("webpack 构建正在启动！", compilation);
        });
    }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
