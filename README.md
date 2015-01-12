### sGenerate.sh

- Generate binary files with random data in the directory ./sfiles/ of size 2K.

```shell
$ ./sGenerate.sh
```

### rGenerate.sh

- Generate binary files with random data in the directory ./rfiles/ of size 64K.

```shell
$ ./rGenerate.sh
```

### read.js

- Read a random file from the directory mentioned in it's config

```shell
$ node read.js
```

### stats.sh

- Compute min, max, avg and std for a given script which outputs a number

```shell
$ ./stats.sh read.js s.out
```

