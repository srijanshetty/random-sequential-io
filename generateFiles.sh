#!/bin/zsh

# Generate the files for random IO
if [ -e ./random ]; then
    rm -f random/*
else
    mkdir random
fi

for i in {0..1000}; do
    dd if=/dev/urandom of="random/r$i" bs=1 count=2048
done

# Generate files for sequential I/O
if [ -e ./sequential ]; then
    rm -f sequential/*
else
    mkdir sequential
fi

for i in {0..1000}; do
    dd if=/dev/urandom of="sequential/s$i" bs=1 count=65536
done
