# TODO

- writeFile also delets, so add a temp directory

### generateFile.sh

- This file creates 100 files of size 2K and 100 files of size 64K
- Files of size 2K denote a random I/O access.
- Files of size 64K denote a sequential I/O access.

```shell
$ ./generateFiles.sh
```

### read.js

- Read a random file from the provided directory.

```shell
$ node read.js
```

### overwrite.js

- Randomly overwrite 50% bits in a file and then write it back to disk;

```shell
$ node overwrite.js
```

### stats.sh

- Compute min, max, avg and std for a given script which outputs a number

```shell
$ ./stats.sh read.js
```

- The *-f* in the end provides formatted output.

```shell
$ ./stats.sh read.js -f
```
