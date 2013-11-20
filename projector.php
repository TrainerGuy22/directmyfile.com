<?php
error_reporting(E_ALL);
$data = file_get_contents("https://directmyfile.atlassian.net/rest/api/2/project");
$projects = json_decode($data);
$out = [];

foreach ($projects as &$j) {
    $p = ["name" => $j -> name, "self" => $j -> self];
    array_push($out, $p);
}

print json_encode($out, JSON_UNESCAPED_SLASHES);
