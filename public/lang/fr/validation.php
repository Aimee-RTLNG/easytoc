<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules avoir multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Le champ :attribute doit être accepté.',
    'active_url' => 'Le champ :attribute n\'est pas une URL valide.',
    'after' => 'Le champ :attribute doit être une date suivant le :date.',
    'after_or_equal' => 'Le champ :attribute doit être une date égale ou suivant le :date.',
    'alpha' => 'Le champ :attribute ne doit contenir que des lettres.',
    'alpha_dash' => 'Le champ :attribute ne doit contenir que des lettres, chiffres, espaces ou underscores.',
    'alpha_num' => 'Le champ :attribute ne doit contenir que des lettres ou des chiffres.',
    'array' => 'Le champ :attribute doit être un tableau.',
    'before' => 'Le champ :attribute doit être une date précédent le :date.',
    'before_or_equal' => 'Le champ :attribute doit être une date égale ou précédent le :date.',
    'between' => [
        'numeric' => 'Le champ :attribute doit se situer entre :min et :max.',
        'file' => 'Le champ :attribute doit être entre :min et :max kilobytes.',
        'string' => 'Le champ :attribute doit avoir entre :min et :max caractères.',
        'array' => 'Le champ :attribute doit avoir entre :min et :max éléments.',
    ],
    'boolean' => 'Le champ :attribute field doit être vrai ou faux.',
    'confirmed' => 'Le champ confirmation de :attribute ne correspond pas.',
    'date' => 'Le champ :attribute n\'est pas une date valide.',
    'date_equals' => 'Le champ :attribute doit être une date égal à :date.',
    'date_format' => 'Le champ :attribute ne correspond pas au format :format.',
    'different' => 'Le champ :attribute et :other doivent être différents.',
    'digits' => 'Le champ :attribute doit être de :digits chiffres.',
    'digits_between' => 'Le champ :attribute doit être entre :min et :max chiffres.',
    'dimensions' => 'Le champ :attribute possède des dimensions invalides.',
    'distinct' => 'Le champ :attribute field a une valeur en double.',
    'email' => 'Le champ :attribute doit être a adresse e-mail valide.',
    'ends_with' => 'Le champ :attribute doit se terminer avec une de ces valeurs: :values',
    'exists' => 'Le champ :attribute sélectionné est invalide.',
    'file' => 'Le champ :attribute doit être un fichier.',
    'filled' => 'Le champ :attribute field doit avoir une valeur.',
    'gt' => [
        'numeric' => 'Le champ :attribute doit être supérieur à :value.',
        'file' => 'Le champ :attribute doit être supérieur à :value kilobytes.',
        'string' => 'Le champ :attribute doit avoir plus de :value caractères.',
        'array' => 'Le champ :attribute doit avoir plus de :value éléments.',
    ],
    'gte' => [
        'numeric' => 'Le champ :attribute doit être plus grand ou égal à :value.',
        'file' => 'Le champ :attribute doit être plus grand ou égal à :value kilobytes.',
        'string' => 'Le champ :attribute doit être plus grand ou égal à :value caractères.',
        'array' => 'Le champ :attribute doit avoir :value éléments ou plus.',
    ],
    'image' => 'Le champ :attribute doit être une image.',
    'in' => 'The selected :attribute est invalide.',
    'in_array' => 'Le champ :attribute n\'existe pas dans :other.',
    'integer' => 'Le champ :attribute doit être numérique.',
    'ip' => 'Le champ :attribute doit être une adresse IP valide.',
    'ipv4' => 'Le champ :attribute doit être une addresse IPv4 valide.',
    'ipv6' => 'Le champ :attribute doit être une addresse IPv6 valide.',
    'json' => 'Le champ :attribute doit être dans un format JSON valide.',
    'lt' => [
        'numeric' => 'Le champ :attribute doit être inférieur à :value.',
        'file' => 'Le champ :attribute doit être inférieur à :value kilobytes.',
        'string' => 'Le champ :attribute doit avoir moins de :value caractères.',
        'array' => 'Le champ :attribute doit avoir moins de :value items.',
    ],
    'lte' => [
        'numeric' => 'Le champ :attribute doit être inférieur ou égal à :value.',
        'file' => 'Le champ :attribute doit être inférieur ou égal à :value kilobytes.',
        'string' => 'Le champ :attribute doit avoir au moins :value caractères.',
        'array' => 'Le champ :attribute doit avoir au moins :value éléments.',
    ],
    'max' => [
        'numeric' => 'Le champ :attribute ne peut pas être plus grand que :max.',
        'file' => 'Le champ :attribute ne peut pas être plus grand que :max kilobytes.',
        'string' => 'Le champ :attribute ne peut pas être plus grand que :max caractères.',
        'array' => 'Le champ :attribute ne peut pas avoir plus de :max éléments.',
    ],
    'mimes' => 'Le champ :attribute doit être un fichier de type: :values.',
    'mimetypes' => 'Le champ :attribute doit être un fichier de type: :values.',
    'min' => [
        'numeric' => 'Le champ :attribute doit être au moins :min.',
        'file' => 'Le champ :attribute doit faire au moins :min kilobytes.',
        'string' => 'Le champ :attribute doit avoir au moins :min caractères.',
        'array' => 'Le champ :attribute doit avoir au moins :min items.',
    ],
    'not_in' => 'Le champ :attribute sélectionné est invalide.',
    'not_regex' => 'Le champ :attribute format est invalide.',
    'numeric' => 'Le champ :attribute doit être un nombre.',
    'password' => 'Le mot de passe est incorrect.',
    'present' => 'Le champ :attribute doit être présent.',
    'regex' => 'Le format du champ :attribute est invalide.',
    'required' => 'Le champ :attribute est requis.',
    'required_if' => 'Le champ :attribute est requis quand :other est :value.',
    'required_unless' => 'Le champ :attribute est requis tant que :other est compris dans :values.',
    'required_with' => 'Le champ :attribute est requis quand :values est présent.',
    'required_with_all' => 'Le champ :attribute est requis quand :values sont tous présents.',
    'required_without' => 'Le champ :attribute est requis quand :values n\'est pas présent.',
    'required_without_all' => 'Le champ :attribute est requis quand aucune des valeurs de :values ne sont présentes.',
    'same' => 'Les champs :attribute et :other doivent correspondre.',
    'size' => [
        'numeric' => 'Le champ :attribute doit être de :size.',
        'file' => 'Le champ :attribute doit être de :size kilobytes.',
        'string' => 'Le champ :attribute doit être de :size caractères.',
        'array' => 'Le champ :attribute doit contain de :size éléments.',
    ],
    'starts_with' => 'Le champ :attribute doit comencer avec les valeurs suivantes: :values',
    'string' => 'Le champ :attribute doit être une chaîne de caractères.',
    'timezone' => 'Le champ :attribute doit être une zone valide.',
    'unique' => 'La valeur :attribute a déjà été prise.',
    'uploaded' => 'Le fichier :attribute n\'a pas pû être uploadé.',
    'url' => 'Le champ :attribute format est invalide.',
    'uuid' => 'Le champ :attribute doit être un valide UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something plus reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message plus expressive.
    |
    */

    'attributes' => [],

];
