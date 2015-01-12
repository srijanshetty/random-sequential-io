#!/bin/zsh

# Check if the script to run is provided
if [ -z "$1" ]; then
    echo "Script name missing" 1>&2
    exit 1
fi

# Check if the output file is provided
if [ -z "$2" ]; then
    echo "Output file missing" 1>&2
    exit 1
fi

if [ -f "$2" ]; then
    rm "$2"
fi

# Check if the outputfile exists or not
for i in {1..100}; do
    node "$1" >> "$2"
done

# Compute the maximum
MAX=$(sort -nr "$2" | head -1)
echo "Max : $MAX"

# Compute minimum
MIN=$(sort -n "$2" | head -1)
echo "Min : $MIN"

# Compute average
AVG=$(awk 'BEGIN {count=0} {count+=$0} END {print count/$NF}' "$2")
echo "Avg : $AVG"
export AVG

# Standard deviation
STD=$(awk -v AVG="$AVG" 'BEGIN {sum=0} {sum=($0-AVG)^2} END {print sqrt(sum/$NF)}' "$2")
echo "Std : $STD"
