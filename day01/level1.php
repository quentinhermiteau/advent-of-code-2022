<?php

$elvesCalories = explode("\n\n", file_get_contents('./input.txt'));

$max = 0;
foreach ($elvesCalories as $elfCalories) {
    $sum = array_sum(explode("\n", $elfCalories));
    $max = $sum > $max ? $sum : $max;
}

var_dump($max);
