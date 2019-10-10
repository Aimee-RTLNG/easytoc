<?php

// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push('Home', route('home'));
});

// Home > About
Breadcrumbs::for('about', function ($trail) {
    $trail->parent('home');
    $trail->push('About', route('about'));
});

// Books
Breadcrumbs::for('book.index', function ($trail) {
    $trail->push('Books', route('book.index'));
});

// Books > [Name]
Breadcrumbs::for('book.show', function ($trail, $book) {
    $trail->parent('book.index');
    $trail->push($book->title, route('book.index', $book->id));
});

// Authors
Breadcrumbs::for('author.index', function ($trail) {
    $trail->push('Authors', route('author.index'));
});

// Authors > [Name]
Breadcrumbs::for('author.show', function ($trail, $author) {
    $trail->parent('author.index');
    $trail->push($author->lastname." ".$author->firstname, route('author.index', $author->id));
});

// Editors
Breadcrumbs::for('editor.index', function ($trail) {
    $trail->push('Editors', route('editor.index'));
});

// Editors > [Name]
Breadcrumbs::for('editor.show', function ($trail, $editor) {
    $trail->parent('editor.index');
    $trail->push($editor->name, route('editor.index', $editor->id));
});

// Editors
Breadcrumbs::for('category.index', function ($trail) {
    $trail->push('Categories', route('category.index'));
});

// Editors > [Name]
Breadcrumbs::for('category.show', function ($trail, $category) {
    $trail->parent('category.index');
    $trail->push($category->name, route('category.index', $category->id));
});