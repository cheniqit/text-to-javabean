##功能介绍
我们开发的java系统，经常需要调用其他系统的API。这些API的返回格式，往往都是json格式。这个小工具，可以帮助你把json格式的数据，转换成对应的javabean。以简化你手动拷贝粘贴json属性的工作。

##使用说明
下载git中的代码，打开index.html。页面如下图所示。默认会展示一个例子。
1、你可以在左边的输入框粘贴json数据
2、右边的框就会显示对应的javabean。
3、然后你可以复制右边的内容到你的项目中。
![上传图片](http://image.game.yy.com/o/cloudapp/25586759/170x170/201506-f685209c_63cd_4e49_bc52_cef047b9e89c.png)

##支持特性
- 1.自动识别属性中的值，目前可以识别int，double,string,date,boolean。

- 2.可以自动将小写命名的属性，转换为驼峰命名，如上图例子中的create_at，在输出结果中，被转换成createAt。而且，还会自动加上相关的json注解，以便于实际使用时的转换。

- 3.仅支持基本类型识别。当属性为一个自定义类，如图例中的person属性，会将属性名为转换为首字母大写，作为该属性的类型。

- 4.可以识别属性值为数组的情况，在输出结果中会对应为List<xx>的形式。如图例中的about属性