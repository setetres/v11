#!/bin/bash
# ./video.sh [INPUT_FILE] [OUTPUT_DIR] [OUTPUT_FILENAME] [OUTPUT_WIDTH]
# eg. ./video.sh ./static/XXXXXXXOOO-001.mp4 ./static/videos XXXXXXXOOO-001 720

INPUT_FILE=$1
OUTPUT_DIR=$2
OUTPUT_FILENAME=$3
OUTPUT_WIDTH=$4
OUTPUT_EXTENSION='mp4'
OUTPUT_FILE="$OUTPUT_DIR/$OUTPUT_FILENAME.$OUTPUT_EXTENSION"
OUTPUT_FILES="$OUTPUT_DIR/$OUTPUT_FILENAME-%d.$OUTPUT_EXTENSION"
OUTPUT_BLURRED_FILE="$OUTPUT_DIR/$OUTPUT_FILENAME-blurred.$OUTPUT_EXTENSION"
OUTPUT_POSTER_FIRST_FILE="$OUTPUT_DIR/$OUTPUT_FILENAME-0-poster.jpg"
ASPECT_RATIO=`echo '9 / 16' | bc -l`
OUTPUT_HEIGHT=`echo "$OUTPUT_WIDTH / $ASPECT_RATIO" | bc -l`

# resize and crop the input video at 9:16 aspect ratio
ffmpeg -i $INPUT_FILE -vf "scale=$OUTPUT_WIDTH:$OUTPUT_HEIGHT:force_original_aspect_ratio=increase,crop=$OUTPUT_WIDTH:$OUTPUT_HEIGHT" $OUTPUT_FILE
# blur the output video
ffmpeg -i $OUTPUT_FILE -filter_complex "[0:v]boxblur=luma_radius=50:chroma_radius=25:luma_power=1[blurred]" -map "[blurred]" $OUTPUT_BLURRED_FILE
# extract the first frame from the blurred video
ffmpeg -ss 00:00:01 -i $OUTPUT_BLURRED_FILE -vframes 1 -q:v 2 $OUTPUT_POSTER_FIRST_FILE
# extract the first frame fron the blurred video every 15 seconds
ffmpeg -i $OUTPUT_BLURRED_FILE -vf fps=1/15 "$OUTPUT_DIR/$OUTPUT_FILENAME-%d-poster.jpg"
# delete blurred video
rm $OUTPUT_BLURRED_FILE
# split the output video every 15 seconds
ffmpeg -i $OUTPUT_FILE -acodec copy -f segment -segment_time 15 -vcodec copy -reset_timestamps 1 -map 0 $OUTPUT_FILES
# delete output video
rm $OUTPUT_FILE
