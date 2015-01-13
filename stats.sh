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
node "$1" >> "$2"

# Compute the maximum
MAX=$(sort -nr "$2" | head -1)
MIN=$(sort -n "$2" | head -1)
AVG=$(awk 'BEGIN {count=0} {count+=$0} END {print count/100}' "$2")
STD=$(awk -v AVG="$AVG" 'BEGIN {sum=0} {sum=($0-AVG)^2} END {print sqrt(sum/100)}' "$2")

case "$3" in
    -f)
        # Formatted output
        echo "Max : $MAX"
        echo "Min : $MIN"
        echo "Avg : $AVG"
        echo "Std : $STD"
        ;;
    *)
        # Row output
        echo "$MAX $MIN $AVG $STD"
        ;;
esac
