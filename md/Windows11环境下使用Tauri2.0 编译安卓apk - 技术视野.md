# Windows11环境下使用Tauri2.0 编译安卓apk - 技术视野
          Windows11环境下使用Tauri2.0 编译安卓apk - 技术视野      

![](https://cravatar.cn/avatar/8974d4e23aefb052aa1566409ad1f4c0?s=220&r=X&d=mm)
 🤗

[技术视野](https://www.http5.cn/)
=============================

聚焦科技前沿，分享技术解析，洞见未来趋势。在这里，与您一起探索人工智能的无限可能，共赴技术盛宴。
------------------------------------------------

[首页](https://www.http5.cn/)

[关于](https://www.http5.cn/index.php/start-page.html "关于")

1.  [首页](https://www.http5.cn/)
2.  [安装与配置](https://www.http5.cn/index.php/category/install_info/)
3.  正文

![](https://cravatar.cn/avatar/8974d4e23aefb052aa1566409ad1f4c0?s=220&r=X&d=mm)

![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688292052982-de58137d-467c-4fb9-a424-e875be17117a.png#averageHue=%23f2f1ef&clientId=u3c458853-e5df-4&from=paste&height=640&id=u45830c26&originHeight=1280&originWidth=576&originalType=binary&ratio=2&rotation=0&showTitle=false&size=189949&status=done&style=none&taskId=u49f60a5d-4344-4987-972d-2b7841e0698&title=&width=288)

Windows11环境下使用Tauri2.0 编译安卓apk
==============================

5789阅读

2023-07-02

### 环境安装。

*   参考官方说明：链接：[https://next--tauri.netlify.app/next/guides/getting-started/prerequisites/windows](https://next--tauri.netlify.app/next/guides/getting-started/prerequisites/windows)

1.  关于C++组件

```null
对于 Windows 用户，请确保至少安装了 Win10 SDK(10.0.19041.0) 和 Visual Studio Build Tools 2022（版本 17.2 或更高），此外还需要安装以下组件：

Microsoft Visual C++ 2015-2022 Redistributable (x64)
Microsoft Visual C++ 2015-2022 Redistributable (x86)
Microsoft Visual C++ 2012 Redistributable (x86)（可选）
Microsoft Visual C++ 2013 Redistributable (x86)（可选）
Microsoft Visual C++ 2008 Redistributable (x86)（可选）
```

2.  Rust版本，最新稳定版即可，我已经升到1.70了。并且需要包含安卓的所有跨跨平台编译器。参考上面的链接就是需要运行这个命令了。

```null
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
```

3.  Nodejs/npm/pnpm安装。nodejs选择最新的lts版本就好了，当前应该是18.12，npm装完nodejs自带就有。pnpm可以用npm安装。例如用这个命令：

```null
npm install -g pnpm
```

4.  需要安卓Android Studio开发工具，安装最新版即可。

*   SDK安装：打开Android Studio，选择`Tool`\-`SDK Manager`，然后安装你想要安装的SDK版本。以我为例，我的手机是安卓12，我想打包后的apk兼容安卓9-13，那就勾选完9-13的所有SDK，然后点击`Apply`即可开始下载（或许需要外网环境）。![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688291959240-9d42473b-42ca-4ddc-a1e8-a4fada26b67e.png#averageHue=%233e4247&clientId=u3c458853-e5df-4&from=paste&height=697&id=uf28bc967&originHeight=1394&originWidth=1920&originalType=binary&ratio=2&rotation=0&showTitle=false&size=912124&status=done&style=none&taskId=u2caf7bff-4de4-43fe-847b-e5e9b6fed7b&title=&width=960)
    
*   NDK安装：打开Android Studio，选择`Tool`\-`SDK Manager`，还是上面哪个界面，点击`SDK Tools`，需要安装`Android SDK Build-Tools`，`NDK (Side by Side)`，`Android SDK Command Tools (Latest)`，`Cmake`，`Android Auto API Simulatros`，`Android Emulator`（安卓模拟器），`Android Emulator Hypervisor Driver (installer)`，`Android SDK Platform-Tools`，`Google USB Driver` (谷歌USB驱动，用于adb调试），`Google Web Driver`(谷歌wifi驱动，用于adb wifi调试），`Intel X86 Emulator Accelerator (HAXM installer)`，然后点击`Apply`开始下载。![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688291972838-601bd9b7-2bf1-45eb-bb62-637db22c53c9.png#averageHue=%233e4348&clientId=u3c458853-e5df-4&from=paste&height=695&id=u2556b6ec&originHeight=1389&originWidth=1920&originalType=binary&ratio=2&rotation=0&showTitle=false&size=919368&status=done&style=none&taskId=ua415d639-a497-4da5-bc95-aa1446557b4&title=&width=960)
    
*   拷贝SDK路径：打开Android Studio，选择`Tool`\-`SDK Manager`，还是上面哪个界面，将`Android SDK Locations`后面的路径拷贝一下，我的显示是：`C:\Users\dsz\AppData\Local\Android\Sdk`

5.  环境设置。对于Win11：打开`Windows设置`\-`系统`\-`系统信息`\-`高级系统设置`\-`环境变量`。在用户环境，新建用户变量。下面是几个需要构建的变化。

*   变量名：`ANDROID_HOME`，变量值：`C:\Users\dsz\AppData\Local\Android\Sdk` 这个路径是从刚刚上一步拷贝而来的这个路径是从刚刚上一步拷贝而来的这个路径是从刚刚上一步拷贝而来的
*   变量名：`JAVA_HOME`，变量值：`C:\Program Files\Android\Android Studio\jbr` (这个路径需要根据你的**Android Studio安装目录**决定，我是默认安装位置，所以就是这个了。)
*   变量名：`NDK_HOME`，变量值：`C:\Users\dsz\AppData\Local\Android\Sdk\ndk\25.2.9519653` （注意这个路径需要你去`C:\Users\你的用户名\AppData\Local\Android\Sdk\ndk`找找看，版本号不一定是我这个。
*   然后再找到用户变量的`Path变量`，选择编辑。  
    ![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688291989208-27e83e67-66b4-41ab-9e7e-cbff831b746b.png#averageHue=%23eee9e8&clientId=u3c458853-e5df-4&from=paste&height=328&id=ub5819ff8&originHeight=656&originWidth=1223&originalType=binary&ratio=2&rotation=0&showTitle=false&size=64174&status=done&style=none&taskId=ua13f0710-7ef5-4707-b539-0b50b074726&title=&width=611.5)
    
*   然后再新建三个路径（需要根据你的用户名找到对应的路径）：
*   `C:\Program Files\Android\Android Studio\jbr\bin` 这个提供了一些java运行命令以及最后apk签名的工具。
*   `C:\Users\dsz\AppData\Local\Android\Sdk\platform-tools` 这个下面提供了一些adb工具，可以用来控制你的手机安装软件。
*   `C:\Users\dsz\AppData\Local\Android\Sdk\build-tools\34.0.0` 这个下面是一些apk查看，编辑的工具，可以用来定位apk错误信息。
*   参考截图如下：  
    ![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688291998776-b095d0cd-4ecb-4e87-95cc-171844b95a2f.png#averageHue=%23f2f0ef&clientId=u3c458853-e5df-4&from=paste&height=516&id=udf7561d4&originHeight=1032&originWidth=1059&originalType=binary&ratio=2&rotation=0&showTitle=false&size=82169&status=done&style=none&taskId=u83187a4d-d5ca-48b6-aaff-ec07ddb72e6&title=&width=529.5)
    
*   保存完环境变量后，需要验证一下。打开powershell。输入下面几个命令，如果没有提示找不到xxx，则说明ok。

```null
java --version
rustc --version
cargo --version
adb --version
node --version
npm --version
pnpm --version
aapt
jarsigner --help
keytool --help
```

### 构建Demo

*   参考页面链接：[https://next--tauri.netlify.app/next/guides/getting-started/setup/html-css-js](https://next--tauri.netlify.app/next/guides/getting-started/setup/html-css-js)

1.  用pnpm创建Demo

```null
pnpm create tauri-app
```

*   填写信息参考：

```null
1. 我写的项目名是：tauri_demo
? Project Name: tauri_demo

2. 直接回车即可，默认是TypeScript/JavaScript
? Choose which language to use for your frontend
❯ TypeScript / JavaScript  (pnpm, yarn, npm)
  Rust

3. 直接回车即可，默认是pnpm
? Choose your package manager ›
❯ pnpm
  yarn
  npm
4. 直接回车即可，默认是Vanilla
? Choose your UI template
❯ Vanilla
  Vue
  Svelte
  React
  Solid
  Angular
5. 直接回车即可，默认是TypeScript
? Choose your UI flavor ›
❯ TypeScript
  JavaScript
```

2.  用Vscode打开`tauri_demo`目录，然后终端运行下面的命令，安装web依赖，

```null
pnpm install
```

3.  打开`tauri_demo/src-tauri/Cargo.toml`文件，可以看到目前该项目依赖是Tauri 1.4，而不是Tauri 2.0。

```null
[dependencies]
tauri = { version = "1.4", features = ["shell-open"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

#### 迁移项目到Tauri 2.0

*   由于目前tauri 2.0还是alpha状态，所以需要手动更新tauri 2.0。参考页面：[https://next--tauri.netlify.app/next/mobile/development/configuration](https://next--tauri.netlify.app/next/mobile/development/configuration)

1.  进入到上面构建的tauri\_demo目录，运行下面两个命令来升级tauri 2.0

*   升级pnpm中的tauri依赖

```null
pnpm update @tauri-apps/cli@next @tauri-apps/api@next
```

*   输出如下：

```null
Packages: +3 -3
+++---

dependencies:
- @tauri-apps/api 1.4.0
+ @tauri-apps/api 2.0.0-alpha.5

devDependencies:
- @tauri-apps/cli 1.4.0
+ @tauri-apps/cli 2.0.0-alpha.10

Progress: resolved 49, reused 18, downloaded 0, added 3, done
```

*   可以看到tauri版本从1.4升级到了2.0.0-alpha
*   再进入tauri\_demo项目下面的src-tauri目录

```null
cd src-tauri
```

*   观察tauri github项目主页：[https://github.com/tauri-apps/tauri](https://github.com/tauri-apps/tauri)
*   主页下面有一个表格，里面写了最新tauri版本。可以看到tauri最新版是`v2.0.0-alpha.10`，tauri-build最新版是`v2.0.0-alpha.6`，tauri-cli最新版是`v2.0.0-alpha.10`
*   运行下面的命令，来更新rust项目中需要的tauri版本。

```null
cargo add tauri@2.0.0-alpha.10
cargo add tauri-build@2.0.0-alpha.6 --build
cargo install tauri-cli --version "^2.0.0-alpha"
```

*   第一条命令运行出错了，`error: unrecognized feature for crate tauri: shell-open`
*   需要将`src-tauri/Cargo.toml`中的`features = ["shell-open"]`去掉，然后重新运行第一条命令。
*   最后测试一下是否ok，如果没报错，说明是ok的。

```null
cargo tauri android --help
```

*   我的输出如下：

```null
Android commands

Usage: cargo tauri android [OPTIONS] <COMMAND>

Commands:
  init   Initializes a Tauri Android project
  open   Open project in Android Studio
  dev    Android dev
  build  Android build
  help   Print this message or the help of the given subcommand(s)

Options:
  -v, --verbose...  Enables verbose logging
  -h, --help        Print help
  -V, --version     Print version
```

2.  升级完工具后，还需要升级一下代码。用Vscode打开项目`tauri_demo`。
3.  修改一下端口和服务。打开项目根目录的`vite.config.ts`，里面有一段代码定义了端口：

```null
 server: {
    port: 1420,
    strictPort: true,
  },
```

*   但是我测试发现1420太小了，普通用户不能用这个端口，会报错，于是我改成了14200，顺便加上了host:`0.0.0.0`，改完后配置如下：

```null
server: {
    port: 14200,
    host: "0.0.0.0",
    strictPort: true,
  },
```

*   顺便将`src-tauri/tauri.config/.json`下面的devPath的1420改成14200。改完长这样：

```null
"devPath": "http://localhost:14200",
```

*   然后发现`src-tauri/tauri.config/.json` 中`allowlist`有波浪线提示，说这个属性无法解析，所以allow\_list以及对应值都需要干掉。顺便将identityfier改成你的用户名，改完后长这样：

```null
{
  "build": {
    "beforeDevCommand": "pnpm dev",
    "beforeBuildCommand": "pnpm build",
    "devPath": "http://localhost:14200",
    "distDir": "../dist",
    "withGlobalTauri": true
  },
  "package": {
    "productName": "tauri_demo",
    "version": "0.0.0"
  },
  "tauri": {
    "bundle": {
      "active": true,
      "targets": "all",
      "identifier": "com.tauri.tlntin",
      "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ]
    },
    "security": {
      "csp": null
    },
    "windows": [
      {
        "fullscreen": false,
        "resizable": true,
        "title": "tauri_demo",
        "width": 800,
        "height": 600
      }
    ]
  }
}
```

4.  根据这个链接：[https://next--tauri.netlify.app/next/mobile/development/integrate](https://next--tauri.netlify.app/next/mobile/development/integrate)， 还需要做一些代码层面修改。

*   修改：`src-tauri/Cargo.toml`目录，末尾新增下面这段代码，让安卓可以使用静态/动态库。

```null
[lib]
crate-type = ["staticlib", "cdylib", "rlib"]
```

*   新增`src-tauri/src/lib.rs` 内容如下：

```null
use tauri::App;

#[cfg(mobile)]
mod mobile;
#[cfg(mobile)]
pub use mobile::*;

pub type SetupHook = Box<dyn FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send>;

#[derive(Default)]
pub struct AppBuilder {
  setup: Option<SetupHook>,
}

impl AppBuilder {
  pub fn new() -> Self {
    Self::default()
  }

  #[must_use]
  pub fn setup<F>(mut self, setup: F) -> Self
  where
    F: FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send + 'static,
  {
    self.setup.replace(Box::new(setup));
    self
  }

  pub fn run(self) {
    let setup = self.setup;
    tauri::Builder::default()
      .setup(move |app| {
        if let Some(setup) = setup {
          (setup)(app)?;
        }
        Ok(())
      })
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }
}
```

*   新增`src-tauri/src/mobile.rs` 内容如下：

```null
#[tauri::mobile_entry_point]
fn main() {
  super::AppBuilder::new().run();
}
```

*   覆盖`src-tauri/src/main.rs` 内容如下：

```null
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

pub fn main() {
  app::AppBuilder::new().run();
}
```

### 编译安卓APK

1.  需要打开Android Studio的安卓模拟器或者adb命令连接你的手机，建议后者会更好一些。

*   可以用下面的adb命令查看当前电脑已经连接的设备。如果没有，则会运行项目时会自动打开虚拟机中的模拟器。

```null
adb devices
```

*   你也可以去Android Studio，打开`Tool`\-`Device Manager`查看你的虚拟机。如果虚拟机也么有，那就需要去Device Manage，点击`Create`创建一个了。  
    

![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688292037524-7d41f505-e6ac-44a1-81f5-320086d91488.png#averageHue=%233f4752&clientId=u3c458853-e5df-4&from=paste&height=317&id=u415bb5a5&originHeight=634&originWidth=1290&originalType=binary&ratio=2&rotation=0&showTitle=false&size=37485&status=done&style=none&taskId=u649ed38f-83c0-4947-88cc-a35f4e8ccb7&title=&width=645)

2.  回到项目根路径，用tauri 2.0生成安卓代码。参考链接：[https://next--tauri.netlify.app/next/mobile/development/mobile\_workflow](https://next--tauri.netlify.app/next/mobile/development/mobile_workflow)

```null
pnpm tauri android init
```

3.  以dev环境运行安卓项目。运行后会依次编译web，tauri，安卓运行后会依次编译web，tauri，安卓运行后会依次编译web，tauri，安卓，此时手机/虚拟机会自动安装apk。你点击手机屏幕会电脑终端可以看到对应的调试信息。

```null
pnpm tauri android dev
```

*   你可以在`src-tauri\gen\android\app\build\outputs\apk\arm64\debug`路径看到这个apk，它的命名为`app-arm64-debug.apk`，大小为148M。

4.  正式使用时，一般不需要那么多调试信息，而且也要缩减安装包大小。所以需要编译一下正式版应用。运行下面的命令即可编译正式版应用，可能需要2-5分钟。

```null
pnpm tauri android build
```

*   输出结果如下：

```null
See https://docs.gradle.org/8.0/userguide/command_line_interface.html#sec:command_line_warnings
    Finished 1 APK at:
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/apk/universal/release/app-universal-release-unsigned.apk

    Finished 1 AAB at:
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/bundle/universalRelease/app-universal-release.aab
```

*   可以看到生成了apk和aab两个安装包。
*   观察apk命名：`app-universal-release-unsigned.apk`有两个关键信息，`universal`代表多架构，`unsigned`代表未包含签名。
*   尝试将这个apk放到安卓手机安装，提示没有签名无法安装。
*   多架构说明还能精简一下，像手机一般用arm64就行了，多余的目前用不上。
*   目前要做的事情是先给apk签名。

5.  生成签名。参考链接：[https://next--tauri.netlify.app/next/guides/distribution/sign-android/](https://next--tauri.netlify.app/next/guides/distribution/sign-android/) 根据这个链接，我们需要先生成一个签名。对于windows，使用下面这个命令来生成(注意keystore里面的用户名改成你的，最好是全英语）。

```null
keytool -genkey -v -keystore C:\Users\dsz\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

*   注意口令千万记牢固了，否则要重新生成了，会影响到后期的上架应用商店问题。
*   参考输入

```null
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:  Tlntin Deng
您的组织单位名称是什么?
  [Unknown]:  MyCompany
您的组织名称是什么?
  [Unknown]:  MyOrg
您所在的城市或区域名称是什么?
  [Unknown]:  GuangZhou
您所在的省/市/自治区名称是什么?
  [Unknown]:  GuangDong
该单位的双字母国家/地区代码是什么?
  [Unknown]:  CN
CN=Tlntin Deng, OU=MyCompany, O=MyOrg, L=GuangZhou, ST=GuangDong, C=CN是否正确?
  [否]:  Y
```

*   生成完签名后，还需要将签名应用到apk中，还是参考上面的链接。先建一个`src-tauri/gen/android/key.properties`文件。填入你的口令以及签名路径：

```null
storePassword=xxxxxxxxx
keyPassword=xxxxxxxxx
keyAlias=upload
storeFile=C:\\Users\\dsz\\upload-keystore.jks
```

*   修改`src-tauri/gen/android/app/build.gradle.kts`文件。基本修改内容就是参考链接里面说的。我这里不再废话了。修改完长这样：

```null
import java.util.Properties
import java.io.FileInputStream

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("rust")
}

val keyPropertiesFile = rootProject.file("key.properties")
val keyProperties = Properties()
keyProperties.load(FileInputStream(keyPropertiesFile))

android {
    compileSdk = 33
    namespace = "com.tauri.tauri_demo"
    defaultConfig {
        manifestPlaceholders["usesCleartextTraffic"] = "false"
        applicationId = "com.tauri.tauri_demo"
        minSdk = 24
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
    }

    signingConfigs {
       create("release") {
           keyAlias = keyProperties["keyAlias"] as String
           keyPassword = keyProperties["keyPassword"] as String
           storeFile = file(keyProperties["storeFile"] as String)
           storePassword = keyProperties["storePassword"] as String
       }
    }

    buildTypes {
        getByName("debug") {
            manifestPlaceholders["usesCleartextTraffic"] = "true"
            isDebuggable = true
            isJniDebuggable = true
            isMinifyEnabled = false
            packaging {                jniLibs.keepDebugSymbols.add("*/arm64-v8a/*.so")
                jniLibs.keepDebugSymbols.add("*/armeabi-v7a/*.so")
                jniLibs.keepDebugSymbols.add("*/x86/*.so")
                jniLibs.keepDebugSymbols.add("*/x86_64/*.so")
            }
        }
        getByName("release") {
            isMinifyEnabled = true
            signingConfig = signingConfigs.getByName("release")
            proguardFiles(
                *fileTree(".") { include("**/*.pro") }
                    .plus(getDefaultProguardFile("proguard-android-optimize.txt"))
                    .toList().toTypedArray()
            )
        }
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

rust {
    rootDirRel = "../../../"
}

dependencies {
    implementation("androidx.webkit:webkit:1.6.1")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.8.0")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.4")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.0")
}

apply(from = "tauri.build.gradle.kts")
```

*   在项目根目录，终端环境下，重新运行一次编译命令。

```null
pnpm tauri android build
```

*   输出结果如下：

```null
See https://docs.gradle.org/8.0/userguide/command_line_interface.html#sec:command_line_warnings
    Finished 1 APK at:
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/apk/universal/release/app-universal-release.apk

    Finished 1 AAB at:
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/bundle/universalRelease/app-universal-release.aab
```

*   可以看到文件没有提示未签名（unsigned）了。

6.  精简架构（可选），观察一下目前apk的信息（注意路径改成你的）。

```null
aapt dump badging C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/apk/universal/release/app-universal-release.apk
```

*   输出结果：

```null
native-code: 'arm64-v8a' 'armeabi-v7a' 'x86' 'x86_64
```

*   可以看到目前有4种架构，分别是arm 64位/arm 32位，x86 32位，x86 64位，一般来说，我们手机都是arm架构，除非用电脑模拟器，否则只需要arm64就行。
*   获取编译安卓时的帮助信息

```null
cargo tauri android build --help
```

*   输出结果：

```null
Android build

Usage: cargo tauri android build [OPTIONS]

Options:
  -d, --debug                     Builds with the debug flag
  -v, --verbose...                Enables verbose logging
  -t, --target [<TARGETS>...]     Which targets to build (all by default) [possible values: aarch64, armv7, i686, x86_64]
  -f, --features [<FEATURES>...]  List of cargo features to activate
  -c, --config <CONFIG>           JSON string or path to JSON file to merge with tauri.conf.json
      --split-per-abi             Whether to split the APKs and AABs per ABIs
      --apk                       Build APKs
      --aab                       Build AABs
  -o, --open                      Open Android Studio
  -h, --help                      Print help
  -V, --version                   Print version
```

*   注意：`-t, --target [<TARGETS>...] Which targets to build (all by default) [possible values: aarch64, armv7, i686, x86_64]` 这里说`all by default`，默认是4种架构都支持，我们需要arm64，所以就选`aarch64`即可。
*   于是下面编译正式版时，指定一下架构aarch64。在项目根目录，终端环境下，重新运行一次编译命令。

```null
pnpm tauri android build --target aarch64
```

*   观察输出结果，命名好像没有变化，还是通用架构，已签名。

```null
See https://docs.gradle.org/8.0/userguide/command_line_interface.html#sec:command_line_warnings
    Finished 1 APK at:                                                                                                                                                                             
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/apk/universal/release/app-universal-release.apk                                                         

    Finished 1 AAB at:
        C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/bundle/universalRelease/app-universal-release.aab
```

*   观察一下新apk安装包的信息：

```null
aapt dump badging C:\Users\dsz\Documents\rust_web\tauri_demo\src-tauri/gen/android\app/build/outputs/apk/universal/release/app-universal-release.apk
```

*   输出结果：

```null
native-code: 'arm64-v8a
```

*   目前只支持单一架构了。文件名大小从38M到11M，减少了70%多。
*   然后把这个安装包发到手机上，就可以安装了。如果提示签名不一致，那就卸载一下旧版。

7.  安装后打开长这样：  
    ![](https://cdn.nlark.com/yuque/0/2023/png/22110941/1688292052982-de58137d-467c-4fb9-a424-e875be17117a.png#averageHue=%23f2f1ef&clientId=u3c458853-e5df-4&from=paste&height=640&id=u45830c26&originHeight=1280&originWidth=576&originalType=binary&ratio=2&rotation=0&showTitle=false&size=189949&status=done&style=none&taskId=u49f60a5d-4344-4987-972d-2b7841e0698&title=&width=288)
    

版权属于：tlntin

本文链接： [https://www.http5.cn/index.php/archives/22/](https://www.http5.cn/index.php/archives/22/ "转载时请注明本文出处及文章链接")

作品采用：本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可。

更新于: 2023年07月02日 18:20

*   [分享到QQ](https://connect.qq.com/widget/shareqq/index.html?url=&sharesource=qzone&title=&pics=https://cdn.nlark.com/yuque/0/2023/png/22110941/1688292052982-de58137d-467c-4fb9-a424-e875be17117a.png#averageHue=%23f2f1ef&clientId=u3c458853-e5df-4&from=paste&height=640&id=u45830c26&originHeight=1280&originWidth=576&originalType=binary&ratio=2&rotation=0&showTitle=false&size=189949&status=done&style=none&taskId=u49f60a5d-4344-4987-972d-2b7841e0698&title=&width=288&summary=环境安装。参考官方说明：链接：https://next--tauri.netlify.app/next/guides/getting-started/prerequisites/windows关...)
*   [分享到微博](https://service.weibo.com/share/share.php?url=https://www.http5.cn/index.php/archives/22/&title=Windows11环境下使用Tauri2.0 编译安卓apk)
*   [分享到Twitter](https://twitter.com/intent/tweet?url=https://www.http5.cn/index.php/archives/22/&text=Windows11环境下使用Tauri2.0 编译安卓apk)
*   * * *
    
*   [复制链接](javaScript:void(0))

[

< 上一篇



](https://www.http5.cn/index.php/archives/20/)

[

下一篇 >



](https://www.http5.cn/index.php/archives/25/)

  
  

  

46 文章数

6 分类数

47 页面数

已在风雨中度过 2年88天3小时20分

###### 目录

来自 《Windows11环境下使用Tauri2.0 编译安卓apk》

*   [环境安装。](#index-1)
*   [构建Demo](#index-2)
*   *   [迁移项目到Tauri 2.0](#index-3)
*   [编译安卓APK](#index-4)

###### 可能感兴趣

[](https://www.http5.cn/index.php/archives/85/)

[（2）使用代码调用MCP工具(TS 篇）](https://www.http5.cn/index.php/archives/85/)

2025-06-05

[](https://www.http5.cn/index.php/archives/10/)

[ubuntu 22.04cuda−11.6+cudnn8.4cuda-11.6+cudnn8.4cuda−11.6+cudnn8.4编译paddle](https://www.http5.cn/index.php/archives/10/)

2023-05-07

[](https://www.http5.cn/index.php/archives/55/)

[Triton23.10部署TensorRT-LLM,实现http查询](https://www.http5.cn/index.php/archives/55/)

2023-11-01

© 2025 [技术视野](https://www.http5.cn/) ❤  
[粤ICP备2023053470号-1](http://beian.miit.gov.cn/)

![](https://pic.imgdb.cn/item/64a198cd1ddac507cc863cf6.png)
 [粤公网安备44010402003054号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010402003054)  
[![](https://static.ipw.cn/icon/ipv6-s1.svg)
](https://ipw.cn/ipv6webcheck/?site=www.http5.cn "本站支持IPv6访问")

Theme By [Lanstar](https://dyedd.cn "禁止仿制")

暗黑模式

暗黑模式

返回顶部

© 2025 [技术视野](https://www.http5.cn/) ❤  
[粤ICP备2023053470号-1](http://beian.miit.gov.cn/)

![](https://pic.imgdb.cn/item/64a198cd1ddac507cc863cf6.png)
 [粤公网安备44010402003054号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010402003054)  
[![](https://static.ipw.cn/icon/ipv6-s1.svg)
](https://ipw.cn/ipv6webcheck/?site=www.http5.cn "本站支持IPv6访问")

Theme By [Lanstar](https://dyedd.cn "禁止仿制")

暗黑模式

暗黑模式

返回顶部