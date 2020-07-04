1、这个月家事比较多，有点耽搁了

## 主要工作是做了 electron 打包安装卸载

通过配置修改打包配置package.json引入installer.nsh文件。
electron-builder 可以读取这个文件，然后再对应得钩子接口执行对应的步骤操作，比如安装时、卸载时 做出对应的操作。

* electron-builder nsis 本身带的dll 不多，如果需要引用第三方dll
* 需要放在对应的文件夹下面：eg C:\Users\bzy_lbl\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.3.2\Plugins,然后对应的编码的dll放入对应的dll文件夹(x86-ansi,x86-unicode)
* 这里有的dll只提供得ascii得编码。可以通过 CallAnsiPlugin.dll 调用。这个时候要注意参数问题

``` javascript 

 //安装时 钩子操作
!macro customInstall 
  FileOpen  $0 "$EXEDIR\intalloct.bat" w
  FileWrite $0 "$\r$\n ipcongfig /all" ; we write an extra line
  FileClose $0 

  IpConfig::GetHostName
  Pop $0
  Pop $R0
 
  nsExec::Exec $EXEDIR\intalloct.bat
  IpConfig::GetNetworkAdapterMACAddress
  Pop $0
  Pop $R1
  
  nsExec::Exec $EXEDIR\intalloct.bat
  IpConfig::GetNetworkAdapterIPAddresses
  Pop $1
  Pop $R2

  StrCpy $R3 "{type:1,data:{cname:'$R0',mid:'$R1',ip:'$R2',os:'',cpu:'4',mem:'17094438912',osname:'Windows',ver:'8.0.4'}}" 
  
  InitPluginsDir ;make sure we have $pluginsdir
  File "/ONAME=$pluginsdir\NsisCrypt.dll" "${NSISDIR}\Plugins\x86-ansi\NsisCrypt.dll" ;you must extract the ansi plugin manually
  CallAnsiPlugin::Call "$pluginsdir\NsisCrypt" Base64Encode 1 'Octopus1'
  Pop $R4

  CallAnsiPlugin::Call "$pluginsdir\NsisCrypt" Base64Encode 1 'Octopus1'
  Pop $R5

  CallAnsiPlugin::Call "$pluginsdir\NsisCrypt" EncryptSymmetric 4  $R3 "des" $R4 $R5
  Pop $R6

  inetc::post $R6 /HEADER "Content-Type:text/html" http://v2.clientapi.bazhuayu.com/api/account/install "$EXEDIR\intalloct.log" /END
  Pop $0

  # 测试代码 需要注释 begin
  ; StrCpy $R7 '**PARAMS**: $\t $R3 $\r$\r$\n **ENCODE**: $\t des-cbc|| $R4|| $R5 $\r$\r$\n **DES-CBC RESULT**:  $\t  $R6 $\r$\r$\n'
  ; Messagebox MB_OK $R7
  ; FileOpen  $0 "$EXEDIR\encode.log" w
  ; FileWrite $0  $R7 ; we write an extra line
  ; FileClose $0 
  # 测试代码 需要注释 end

  Delete "$EXEDIR\intalloct.bat"
  Delete "$EXEDIR\intalloct.log" 
!macroend
```

## electron 项目回看

 重新回顾 [electron api](https://electronjs.org/docs/api) 

  主进程与渲染进程通信   
  [ipcMain](https://electronjs.org/docs/api/ipc-main)  
  [ipcRenderer](https://electronjs.org/docs/api/ipc-renderer)

  > ipcMain：在主进程中使用时，它处理从渲染器进程（网页）发送出来的异步和同步信息。 从渲染器进程发送的消息将被发送到该模块    
  ipcRenderer：可以使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主进程。 也可以接收主进程回复的消息。


[remote](https://electronjs.org/docs/api/remote) 模块
> remote 模块提供了一种在渲染进程（网页）和主进程之间进行进程间通讯（IPC）的简便途径。
在Electron中, GUI 相关的模块 (如 dialog、menu 等) 仅在主进程中可用, 在渲染进程中不可用。 为了在渲染进程中使用它们, ipc 模块是向主进程发送进程间消息所必需的。 使用 remote 模块, 你可以调用 main 进程对象的方法。

