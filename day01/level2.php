<?php

$elvesCalories = explode("\n\n", file_get_contents('./input.txt'));

$array = [];
foreach ($elvesCalories as $elfCalories) {
    $array[] = array_sum(explode("\n", $elfCalories));
}

rsort($array);
$total = array_sum(array_slice($array, 0, 3));
var_dump($total);
