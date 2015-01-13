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
Disk Sector Size:      4K

# Disk IO

## Observations

Title               Min         Max     Average     Standard

(i) Read r-files
Read                486         16      249.62      22.062

(ii) Read s-files
Read                504         32      541.78      49.178

(iii) Overwrite r-files
Pure Write          812         20      285.1       26.11
Overwrite           643         88      1106.17     99.217

(iv) Overwrite s-files
Pure Write          718         55      747.08      68.408
Overwrite           5518        1411    17215.1     1546.81

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
Overwrite (10%)     2391        93      14994.9     1334.39
Overwrite (20%)     6141        90      13364.9     1173.19
Overwrite (30%)     2730        90      12235.1     1056.51
Overwrite (40%)     2233        91      10496       873.9
Overwrite (50%)     5436        89      9037.03     736.503
Overwrite (60%)     2742        89      7138.58     555.458
Overwrite (70%)     2731        87      5814.43     434.343
Overwrite (80%)     2370        88      4184.45     259.945
Overwrite (90%)     2145        89      2606.4      109.84

## Observations

1. A read for an r-file --- which is smaller than a disk page --- constitutes a single disk access.
2. On the other hand an s-file --- which is much larger than the disk page size --- takes approximately double the time.
3. When timing overwrites to a file, we first open the file, truncate it and then write to it. This is evident in the fact that overwrites take approximately three times the time it takes for a pure write.
4. In light of the above, an overwrite operation amounts to 2 disk accesses while a write amounts to 1.
5. In a hard disk (HDD), reads and writes are symmetric.
6. The maximum time taken to read/write a file is sometimes arbitrarily large, this happens when the process is not scheduled immediately. (Therefore we cannot place any guarantees on the maximum time taken)
7. As the percentage of r-files is increased in part (v) and part (vi), the average time taken for the operation reduces.

# USB Drives
