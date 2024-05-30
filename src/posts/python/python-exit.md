---
icon: file
category:
  - python
---

# Python 中 os.\_exit()和 sys.exit()以及 eixt()函数的区别

在 Python 3.x 中，os.\_exit(), sys.exit(), 和 exit() 是三个不同的终止程序执行的函数，它们之间有一些区别：

`os._exit()`：这个函数是 os 模块中的一个函数，它用于直接终止程序的执行，并且不会触发任何清理活动或关闭程序中的资源。它不会抛出任何异常或执行任何 finally 子句。使用 os.\_exit()会立即终止程序，不会返回到调用它的地方。

```python
import os

try:
    os._exit()
except Exception as e:
    print(e)
finally:
    print("finnally")
print("os exit")
```

不会打印任何东西就退出了

```shell

```

`sys.exit()`：这个函数在 sys 模块中，当被调用时，会引发 SystemExit 异常。它可以传递一个可选的整数参数作为退出状态码，默认值为 0。使用 sys.exit()会引发异常，这意味着它可以被捕获和处理。

```python
import sys

try:
    sys.exit()
except Exception as e:
    print(e)
finally:
    print("finally")
print("sys exit")
```

```shell
finally
```

`exit()`：这个函数是内置函数，它实际上是 sys.exit()的别名，用法和效果与 sys.exit()相同。

综上所述，os.\_exit() 是一个不可捕获的底层终止程序执行的函数，而 sys.exit() 和 exit() 是抛出 SystemExit 异常来终止程序执行的函数，它们可以被捕获和处理。通常情况下，推荐使用 sys.exit() 或 exit() 来退出程序，以便在需要时进行清理操作.
