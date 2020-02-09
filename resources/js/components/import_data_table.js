// Imports
import { alertMsg } from "../app";
import { getOldContent, addElement, element_types } from "./table";

// Variables
let message;
let success = true;
let element_selected_container;
let previous_element;
let next_element;
let required_count = 0;

// ORDRE DES VALEURS
// Type; Title; Caption; Theme; Header top; Header left; Footer; Headers row;
// table; ""  ; ""     ; ""   ; true/false; true/false ; true/f; INT        ;
// Headers row > Nb de lignes de header horizontal




