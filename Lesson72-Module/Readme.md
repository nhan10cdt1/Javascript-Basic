## Modules

1. Import
2. Export

- Tách một phần chức năng riêng ra thành 1 file js thì gọi là Module hóa .
- index.html

```c
<!-- Module phan app.js -->
    <script type="module" src="./app.js"></script>
```

- file logger.js

```c
function logger(log, type = "log") {
    console[type](log);
}
export default logger;
```

- file app.js

```c
import logger from "./logger.js";

logger("message test", "log");
```

- Trong trường hợp
