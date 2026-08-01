# Phoshell: Phoscript Omni*shell

## help: -- getting help in Phoshell

The easiest way to launch a shell like Phoshell from a GUI environment like a web page or mobile device is to use the context menu -- usually right click on a web page or long press on a mobile web page.

- [Phoscript tutorial](https://omnixtar.github.io/phoscript/cn)

In the Phoscript tutorial shown above, the reverse polish notation used in Phoscript usually places operands (inputs) before the operator (function token). However commands like `help:` requires its operands to be placed AFTER the operator, as the operands for `help:` are usually operators or function tokens themselves -- if placed BEFORE `help:`, they will be executed by the shell or they require a special flag to suppress execution.

Other commands that requires operands to be placed AFTER the operator are branch or control related commands such as `if`, `loop` etc.