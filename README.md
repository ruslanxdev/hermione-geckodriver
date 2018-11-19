# hermione-geckodriver

Hermione plugin for lounch geckodriver.

## Install

```
npm i -D hermione-geckodriver
```

## Usage

1. Install [geckodriver](https://github.com/mozilla/geckodriver) ([node-geckodriver](https://github.com/vladikoff/node-geckodriver)).
    ```
    npm i -g geckodriver
    ```
2. Install Firefox:
    ```
    brew cask install firefox
    ```
    or download [here](http://ftp.mozilla.org/pub/firefox/releases).
3. Set options for the plugin in your hermione config:
    ```
    {
        gridUrl: 'http://127.0.0.1:<PORT>/wd/hub',
        plugins: {
            'hermione-geckodriver': {
                geckoDriverArgs: ['--port=4444', '--disable-gpu']
            }
        },
        system: {
            mochaOpts: {
                timeout: 0
            }
        }
    }
    ```

## Options

| Option | Default | Description |
| --- | --- | --- |
| `geckoDriverArgs` | | Arguments for geckodriver. |

## Licence

MIT