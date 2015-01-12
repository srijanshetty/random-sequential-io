#!/bin/zsh

# Generate the files for random IO
if [ -e ./rfiles ]; then
    rm -f rfiles/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="rfiles/r$i" bs=1 count=2048
    sleep 5
done

# Generate files for sequential I/O
if [ -e ./sfiles ]; then
    rm -f sfiles/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="sfiles/s$i" bs=1 count=65536
    sleep 5
done
