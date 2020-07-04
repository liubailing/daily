## electron 跨域 问题

 这是一个bug还是一个改进?   
 5.0版本前通过browerview, 一个简单的设置就可以跨域,但是升级到5.0后竟然不行了，不知道是一个版本bug，还是electron做了安全升级，不允许跨域，但是通过其他设置还是可以跨域的~!~   

 嗯嗯嗯！ 这么说来应该是 版本 bug ~!~

 5.0前 跨域代码

    ```  javascript

        import { BrowserWindow} from 'electron';
        this.window = new BrowserWindow({
            webPreferences: {            
                webSecurity: false
            }
        });

    ```

    
 5.0 跨域代码

    ```  javascript

        import { app } from 'electron';
        // 解决跨域问题。
        app.commandLine.appendSwitch('--disable-site-isolation-trials', 'true');

    ```

### 参考文档
1, [Blocked a frame with origin](https://stackoverflow.com/questions/55898000/blocked-a-frame-with-origin-file-from-accessing-a-cross-origin-frame)
2 [Electron 支持的 Chrome 命令行开关](https://www.w3cschool.cn/electronmanual/82vz1ql9.html)
