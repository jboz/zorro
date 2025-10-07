#!/bin/bash

# Interval en secondes (par défaut 1 minute)
interval=${1:-60}

echo "Appuyez sur Ctrl+C pour arrêter."

size=500
wait=0.5

move() {
    local x=$1
    local y=$2
    local absolute=$3

    ydotool mousemove $absolute -x $x -y $y
}

draw_z() {
    move $size $size "-a"
    sleep $wait
    move $size 0
    sleep $wait
    move -$size $size
    sleep $wait
    move $size 0
    sleep $wait
}

while true; do
    # Dessiner le Z
    draw_z

    # Attendre l'interval spécifié
    sleep $interval
done