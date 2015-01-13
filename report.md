# Specifications

Kernel                 3.2.0-73-generic
CPU                    Intel i7
Architecture:          x86_64
CPU(s):                8
Thread(s) per core:    2
CPU MHz:               2201.000
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              6144K
HDD:                   5400 rpm, 1TB
HDD FileSystem:        ext4
USB FileSystem:        NTFS

# Disk IO

## Observations

Title               Min         Max     Average     Standard

(i) Read r-files
Read                486         16      249.62      22.062

(ii) Read s-files
Read                504         32      541.78      49.178

(iii) Overwrite r-files
Write               812         20      285.1       26.11
Overwrite           864         37      466.58      42.058

(iv) Overwrite s-files
Write               718         55      747.08      68.408
Overwrite           1584        83      1120        103.1

(iv) Read r-files and s-files in various percentages.
Read  (10%)         2989        19      577.68      52.968
Read  (20%)         4030        17      589.75      53.975
Read  (30%)         500         18      485.96      43.996
Read  (40%)         3497        16      450.04      40.104
Read  (50%)         448         16      383.9       33.59
Read  (60%)         472         16      371.11      32.011
Read  (70%)         455         16      328.49      27.849
Read  (80%)         505         15      290.59      23.959
Read  (90%)         500         16      261.13      21.113

(vi) Overwrite r-files and s-files in various percentages.
Overwrite (10%)     789         37      1206.88     110.788
Overwrite (20%)     17385       38      1284.36     117.336
Overwrite (30%)     798         38      1018.38     90.538
Overwrite (40%)     620         30      720.69      63.469
Overwrite (50%)     620         34      655.82      57.082
Overwrite (60%)     603         35      698.84      59.684
Overwrite (70%)     601         34      553.91      47.291
Overwrite (80%)     605         35      646.45      49.945
Overwrite (90%)     581         33      447.12      36.112

## Observations

1. An overwrite operation first truncates the file and then writes to the file, hence it takes approximately double the time that a plain write operation which creates a new file.
2. In light of the above, an overwrite operation amounts to 2 disk accesses while a write amounts to 1.
3. In a hard disk (HDD) reads and writes are symmetric.
4. The maximum time taken to read/write a file at times is very high, this happens when the process is not scheduled back immediately when the operation has succeeded.
5. As the percentage of r-files is increased in reads and writes, the average time taken for the operation reduces.
