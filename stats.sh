#!/bin/zsh

# Check if the script to run is provided
if [ -z "$1" ]; then
    echo "Script name missing" 1>&2
    exit 1
fi

SUFFIX=$(date '+%S_%M_%H_%d')
OUTFILE="./results/${1}_${SUFFIX}"

# Create the result folder if it does not exist
[ ! -d "./results" ] && mkdir results

# Check if the outputfile exists or not
node "$1" >> "$OUTFILE"

# Compute the maximum
MAX=$(sort -nr "$OUTFILE" | head -1)
MIN=$(sort -n "$OUTFILE" | head -1)
AVG=$(awk 'BEGIN {count=0} {count+=$0} END {print count/100}' "$OUTFILE")
STD=$(awk -v AVG="$AVG" 'BEGIN {sum=0} {sum=($0-AVG)^2} END {print sqrt(sum/100)}' "$OUTFILE")

case "$2" in
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
