##### wasmoon踩坑

看起来wasmoon是一个浏览器运行lua的方案，它通过wasm直接将luac源代码编译成浏览器可执行的二进制指令。

据说运行效率很高，比frangari的方案更优（主要是可以支持lua的全部特性）。故我觉得有对其进行测试的必要，如成功则我们的h5项目也能通过lua开发。

目前只尝试了在linux环境下编译

* 仓库初始化流程直接按 README.md 里面说的来就行
* emscripten环境需要自己搭建，参考 https://emscripten.org/docs/getting_started/downloads.html （apt-get的版本太低，不支持wasm不能用）
* emcc的环境变量靠执行 source ./emsdk_env.sh 配置（如果不想配置到全局的话）
* 目前 npm test 流程报错，已向作者提issue，看啥时候回复
* my_test.js 可以在nodejs环境下运行，看起来问题不大
