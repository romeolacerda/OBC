"use strict";
var owner;
var repo;
var repository;
var localUser;
var localRepository;
// Vemos no autocompletar as propriedades de ambos os objetos
//the error is triggered because typescript sees the variable still as undefined in some scenarios.
// Adding !before variable tells typescript to remove undefined or null as possibles types for variable:
localUser.name = "";
localRepository.name = "";
