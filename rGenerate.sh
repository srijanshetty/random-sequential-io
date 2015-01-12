#!/bin/zsh

if [ -e ./rfiles ]; then
    rm -f rfiles/*
fi

for i in {0..99}; do
    dd if=/dev/urandom of="rfiles/r$i" bs=1 count=65536
done
