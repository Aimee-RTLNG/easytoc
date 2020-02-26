<form data-tag="form" class="theme-blue" id="generated-form" action="#" method="get" name="generated-form">
    <div id="full-form">
        <h1 contenteditable="true" id="form-title" data-tag="form-title">
            {{ __('Titre du formulaire') }}
        </h1>
    </div>
</form>
<div class="mt-4" id="form-actions" contenteditable="false">
    <input data-tag="input-submit" form="generated-form" type="submit" disabled value="{{ __('Envoyer') }}" title="{{ __('Envoyer') }}">
</div>
