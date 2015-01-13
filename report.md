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

## Findings

Title               Min         Max     Average     Standard

(i) Read r-files
Read                486         16      24.962      2.2062

(ii) Read s-files
Read                504         32      54.178      49.178

(iii) Overwrite r-files
Pure Write          812         20      28.51       2.611
Overwrite           643         88      110.617     9.9217

(iv) Overwrite s-files
Pure Write          718         55      74.708      6.8408
Overwrite           5518        1411    1721.51     154.681

(v) Read r-files and s-files in various percentages.
Read  (10%)         2989        19      57.768      5.2968
Read  (20%)         4030        17      58.975      5.3975
Read  (30%)         500         18      48.596      4.3996
Read  (40%)         3497        16      45.004      4.0104
Read  (50%)         448         16      38.39       3.359
Read  (60%)         472         16      37.111      3.2011
Read  (70%)         455         16      32.849      2.7849
Read  (80%)         505         15      29.059      2.3959
Read  (90%)         500         16      26.113      2.1113

(vi) Overwrite r-files and s-files in various percentages.
Overwrite (10%)     2391        93      1499.49     133.439
Overwrite (20%)     6141        90      1336.49     117.319
Overwrite (30%)     2730        90      1223.51     105.651
Overwrite (40%)     2233        91      1049.6       87.39
Overwrite (50%)     5436        89      903.703     73.6503
Overwrite (60%)     2742        89      713.858     55.5458
Overwrite (70%)     2731        87      581.443     43.4343
Overwrite (80%)     2370        88      418.445     25.9945
Overwrite (90%)     2145        89      260.64      10.984

## Observations

1. A read for an r-file --- which is smaller than a disk page --- constitutes a single disk access.
2. On the other hand an s-file --- which is much larger than the disk page size --- takes approximately double the time.
3. When timing overwrites to a file, we first open the file, truncate it and then write to it. This is evident in the fact that overwrites take approximately three times the time it takes for a pure write.
4. In light of the above, an overwrite operation amounts to 2 disk accesses while a write amounts to 1.
5. In a hard disk (HDD), reads and writes are symmetric.
6. The maximum time taken to read/write a file is sometimes arbitrarily large, this happens when the process is not scheduled immediately. (Therefore we cannot place any guarantees on the maximum time taken)
7. As the percentage of r-files is increased in part (v) and part (vi), the average time taken for the operation reduces.
8. The deviations for all readings are an order of magnitude low, this means that the read/write times are fairly same for all files.
9. Read have uniform speed as indicated by small standard deviations.

# USB Drives

## Observations

Title               Min         Max     Average     Standard

(i) Read r-files
Read                467         16      22.022      1.9422

(ii) Read s-files
Read                499         33      59.436      5.3936

(iii) Overwrite r-files
Overwrite           419         15      20.072      1.7672

(iv) Overwrite s-files
Overwrite           104249      1851    8030.63     525.263

(v) Read r-files and s-files in various percentages.
Read  (10%)         3127        17      54.013      4.8413
Read  (20%)         422         16      50.44       4.514
Read  (30%)         440         16      44.938      3.9938
Read  (40%)         3252        16      47.765      4.2665
Read  (50%)         440         15      37.502      3.2302
Read  (60%)         460         15      34.251      2.9151
Read  (70%)         490         16      32.643      2.7043
Read  (80%)         451         15      26.89       2.159
Read  (90%)         427         15      23.456      1.8256

(vi) Overwrite r-files and s-files in various percentages.
Overwrite (10%)     101482      1784    8492.2      275.82
Overwrite (20%)     101739      1727    15260.8     1326.18
Overwrite (30%)     100075      616     6787.84     496.184
Overwrite (40%)     103917      1637    23432.5     1709.55
Overwrite (50%)     103879      579     15861.4     1389.84
Overwrite (60%)     103256      1096    7076.67     133.833
Overwrite (70%)     102690      1205    6544.52     97.552
Overwrite (80%)     17199       1292    2895.49     105.549
Overwrite (90%)     63304       1353    2914.44     89.244

## Observations

- The read time for the flash drive is comparable to that of the HDD, which is counter-intuitive.
- The write times for a flash drive is not symmetric to the read time, unlike HDDs.
- Part (iv) shows erratic write times for the flash drive and no clear trend on varying the amount of r-files.
- The standard deviation for overwrites in part (iv) are very high bolstering the above claim.
- In part (v), again we see a similar trend as that of the HDD for the flash drive and read times decrease with increasing r-files.
