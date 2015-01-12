#!/bin/zsh

# Generate the files for random IO
if [ -e ./random ]; then
    rm -f random/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="random/r$i" bs=1 count=2048
    sleep 5
done

# Generate files for sequential I/O
if [ -e ./sequential ]; then
    rm -f sequential/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="sequential/s$i" bs=1 count=65536
    sleep 5
done
