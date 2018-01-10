### artTemplate：前端模板引擎

artTemplate的库分为两种，一个是template.js，一个是tempate-native.js，第一个是简洁语法模板，第二个是原生语法模板

#### 1、简洁语法版**(采用"{{ }}"，推荐使用)**

```
</pre><pre name="code" class="javascript">
<script id="test" type="text/template">  
{{if admin}}  
    {{each list as value index}}  
        <div>{{index}}:{{value}}</div>  
    {{/each}}  
{{else if}}  
条件判断  
{{/if}}  
</script>
```

#### 2、原生语法版(采用"<%= %>")

```
<script id="test" type="text/template">  
<%if(admin){%>  
    <% for(var i=0; i<list.length; i++){%>  
        <div><%=i%>:<%=list[i].value%></div>  
    <%}%>  
<%}else{%>  
    <div>没有结果！</div>  
<%}%>  
</script>  
```

实例：

```
//html部分
<ul class="first-category"></ul>
//模版部分,渲染数据
<script type="text/template" id="first-template">
  <% for(var i=0;i<rows.length;i++){ %>
    <%if(i==0){%>
      <li class="active">
      	<a href="javascript:;" data-id="<%=rows[i].id%>"><%=rows[i].categoryName%></a>
      </li>
      <%}else{%>
      <li>
      	<a href="#" data-id="<%=rows[i].id%>"><%=rows[i].categoryName%></a>
      </li>
    <%}%>
  <%}%>
</script>
//将数据传入数据模版，然后添加进入ul中
//此处template方法第一个参数对应模板部分id，第二个参数为传入的数据
var result = template('first-template',res); 
$(".first-category").html(result);
```







