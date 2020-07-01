@extends('layouts/app')

@section('titre') {{ __('Mentions légales') }} - EasyToC @endsection

@section('content')
<div class="container wysiwyg">
    <div class="entete">
        <h1 class="entete__title">
            {{ __('Mentions légales') }}
        </h1>
        <div class="entete__under"></div>
    </div>

    <p>{{ __("Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : ") }}
        <strong><a href="http://easytoc.ritleng.mmi-unistra.fr" target="_blank">easytoc.ritleng.mmi-unistra.fr</a></strong>
        {{ __("les informations suivantes :") }}</p>

    <h3 class="secondary_title" tabindex="0">{{ __('1. Informations légales :') }}</h3>

    <p>{{ __("En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site") }} 
        <a href="http://https://easytoc.ritleng.mmi-unistra.fr//">https://easytoc.ritleng.mmi-unistra.fr/</a> 
        {{ __("l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :") }}
    </p>
    <p><strong>{{ __("Propriétaire") }}</strong> : Aimee RITLENG –  – 30 Rue du Maire André Traband<br />
    <strong>{{ __("Créateur") }}</strong>  : <a href="https://easytoc.ritleng.mmi-unistra.fr/">Aimee RITLENG, Louise MATT, Pierre BOULANGER</a><br />
    <strong>{{ __("Responsable publication") }}</strong> : Louise MATT – 03 88 05 34 00<br />
    {{ __("Le responsable publication est une personne physique ou une personne morale.") }}<br />
    <strong>Webmaster</strong> : Pierre BOULANGER – contact@easytoc.fr<br />
    <strong>{{ __("Hébergeur") }}</strong> : OVH – 9 Rue du Bassin de l'Industrie, 67000 Strasbourg<br />
    {{ __("Crédits : Aimee RITLENG, Pierre BOULANGER, Louise MATT") }}

    <h3 class="secondary_title" tabindex="0">{{ __('2. Présentation et principe :') }}</h3>

    <p>{{ __('Est désigné ci-après : ') }}<strong>{{ __('Utilisateur') }}</strong>{{ __(', tout internaute se connectant et utilisant le site susnommé : ') }}<a href="http://easytoc.ritleng.mmi-unistra.fr"
            target="_blank">easytoc.ritleng.mmi-unistra.fr</a>.<br />
            {{ __('Le site') }} <strong>easytoc.ritleng.mmi-unistra.fr</strong> {{ __("regroupe un ensemble de services, dans l'état, mis à la disposition des utilisateurs. Il est ici précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site") }}
         <strong>easytoc.ritleng.mmi-unistra.fr </strong>.{{ __("Le site") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong> {{ __("est mis à jour régulièrement par Aimee RITLENG.") }}<br />
        {{ __("Aimée RITLENG s’efforce de fournir sur le site ") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong> {{ __("des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site, qu’elles soient de son fait  ou du fait des tiers partenaires qui lui fournissent ces informations. En conséquence, l'utilisateur reconnaît utiliser ces informations données (à titre indicatif, non exhaustives et susceptibles d'évoluer) sous sa responsabilité exclusive.") }}</p>

    <h3 class="secondary_title" tabindex="0">{{ __("3. Accessibilité :") }}</h3>

    <p>{{ __("Le site") }}
        <a href="http://https://easytoc.ritleng.mmi-unistra.fr//">https://easytoc.ritleng.mmi-unistra.fr/</a>
        {{ __(" est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au service,") }}
        <a href="http://https://easytoc.ritleng.mmi-unistra.fr//">https://easytoc.ritleng.mmi-unistra.fr/</a>
        {{ __('s’engage à faire son maximum afin de rétablir l’accès au service et s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. N’étant soumis qu’à une obligation de moyen,') }}
        <a href="http://https://easytoc.ritleng.mmi-unistra.fr//">https://easytoc.ritleng.mmi-unistra.fr/</a>
        {{ __('ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.') }}
    </p>

    <h3 class="secondary_title" tabindex="0">{{ __("4. Propriété intellectuelle :") }}</h3>

    <p>
        <em>Aimée RITLENG</em> {{ __("est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels…") }}<br />
        {{ __("Toute reproduction totale ou partielle du site") }} 
        <strong>easytoc.ritleng.mmi-unistra.fr</strong>
        {{ __(", représentation, modification, publication, adaptation totale ou partielle de l'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de ") }}<em>Aimée RITLENG</em>
        {{ __(", propriétaire du site à l'email : ") }}<em>aimeeritleng@outlook.com</em>
        {{ __(", à défaut elle sera considérée comme constitutive d’une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.") }}</p>

    <h3 class="secondary_title" tabindex="0">{{ __("5. Liens hypertextes et cookies :") }}</h3>

    <p>{{ __("Le site") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong> 
    {{ __("contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations …) mis en place avec l’autorisation de ") }}<em>Aimée RITLENG</em>. 
    {{ __("Cependant,") }}
    <em>Aimée RITLENG</em> 
    {{ __("n’a pas la possibilité de vérifier l'ensemble du contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites.") }}<br />
    {{ __("L’utilisateur est informé que lors de ses visites sur le site ") }}<strong>easytoc.ritleng.mmi-unistra.fr</strong>,
     {{ __("un ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur par l'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d'identifier l'utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site.") }}<br />
    {{ __("Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l’adresse suivante :") }} <a href="http://www.cnil.fr">www.cnil.fr</a>. 
    {{ __("L’utilisateur peut toutefois configurer le navigateur de son ordinateur pour refuser l’installation des cookies, sachant que le refus d'installation d'un cookie peut entraîner l’impossibilité d’accéder à certains services. Pour tout bloquage des cookies, tapez dans votre moteur de recherche : bloquage des cookies sous IE ou firefox et suivez les instructions en fonction de votre version.") }}</p>

    <h3 class="secondary_title" tabindex="0">{{ __("6. Protection des biens et des personnes - gestion des données personnelles :") }}</h3>

    <p>{{ __("En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.") }}</p>

    <p>{{ __("Sur le site") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong>, <em>Aimée RITLENG</em>
     {{ __("ne collecte des informations personnelles ( suivant l'article 4 loi n°78-17 du 06 janvier 1978) relatives à l'utilisateur que pour le besoin de certains services proposés par le site") }}
        <strong>easytoc.ritleng.mmi-unistra.fr.</strong> 
        {{ __("L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong>{{ __("l’obligation ou non de fournir ces informations.") }}<br />
        {{ __("Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant. Pour l’exercer, adressez votre demande à") }}
        <strong>easytoc.ritleng.mmi-unistra.fr</strong> {{ __("par email :") }}<strong><a
                href="mailto:aimeeritleng@outlook.com?subject=Contact à partir des mentions légales via le site easytoc.ritleng.mmi-unistra.fr">aimeeritleng@outlook.com</a></strong>
                {{ __("ou par écrit dûment signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.") }}</p>

    <p>{{ __("Aucune information personnelle de l'utilisateur du site") }} easytoc.ritleng.mmi-unistra.fr {{ __("n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat du site ") }}<strong>easytoc.ritleng.mmi-unistra.fr</strong> 
    {{ __("et de ses droits autorise ") }}<em>Aimée RITLENG</em> {{ __("à transmettre les dites informations à l'éventuel acquéreur qui serait à son tour tenu à la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site") }}
        <strong>easytoc.ritleng.mmi-unistra.fr.</strong><br />
        {{ __("Le site") }} <strong>easytoc.ritleng.mmi-unistra.fr</strong> {{ __("est en conformité avec le RGPD voir notre politique RGPD") }}
        <strong>http://easytoc.ritleng.mmi-unistra.fr/mentions_legales.</strong></p>

    <p>{{ __("Concernant la connexion via Facebook et Google, seules les informations suivantes sont récupérées pour votre compte utilisateur : ") }}</p>
    <ul>
        <li>{{ __("Votre nom et votre prénom, pour l'utiliser en tant que Nom de compte / Pseudonyme.") }}</li>
        <li>{{ __("Votre adresse e-mail, pour vous permettre de recevoir des mails de notre part dans le cas d'une modification de mot de passe.") }}</li>
    </ul>
    <p>{{ __("Pour supprimer ses informations, vous pouvez soit changer vos données directement via votre espace Mon Compte, ou supprimer votre compte." ) }}</p> 
    <p>{{ __("Nous fournissons des moyens pour que vous puissiez accéder, modifier et supprimer toutes les données que nous avons sur vous.") }}</p>

    <p>{{ __("Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.") }}</p><br />


</div>





@endsection
