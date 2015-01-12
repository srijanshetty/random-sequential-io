#!/bin/zsh

if [ -e ./sfiles ]; then
    rm -f sfiles/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="sfiles/s$i" bs=1 count=2048
done
