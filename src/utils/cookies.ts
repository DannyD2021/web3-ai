// 在浏览器写入cookie的办法是：
// document.cookie('name','zhangsan')

// 封装写入cookie
const setCookie = (name: string, value: string, { domain, maxAge, path }: any = {}) => {
    let cookieString = `${name}=${value}`;
    // 现在写好了name  value  添加过期时间
    if (typeof maxAge === "number") {
      cookieString += `; max-age=${maxAge}`;
    }
    // 添加domain
    if (domain) {
      cookieString += `; domain=${domain}`;
    }
    // 添加path
    if (path) {
      cookieString += `; path=${path}`;
    }
    //  cookieString有了， 把cookie写入浏览器
    document.cookie = cookieString;
  };
  const getCookie = (name: string) => {
    // 现在cookie里面是name zhangsan
    // 当执行函数的时候需要打印出name=zhangsan
    // 先取出cookie,把字符串转成数组，从分号开始隔开
    const cookieArray = document.cookie.split("; ");
    //
    let cookieName;
    let cookieValue;
    // 遍历数组
    for (const item of cookieArray) {
      // item 现在是 ['name=zhangsan']
      // 从等号开始隔开 ['name','zhangsan']
      [cookieName, cookieValue] = item.split("=");
      // cookieName = name cookieValue = zhangsan
      if ((cookieName === name)) {
          // 这样就返回我们需要的cookieValue
        return cookieValue;
      }
    }
  //   for循环结束，也就终止执行
  return ''
  };
  // 删除cookie意思也就是，继续调用setCookie，把过期时间设置为0
  const removeCookie = (name: string) => {
      setCookie(name,'',0)
  };
  // 用export 导出三个方法
  export { setCookie, getCookie, removeCookie };