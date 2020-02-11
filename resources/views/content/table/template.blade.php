<div id="generated-table" class="theme-white">
    <span class="table-title table-text" id="table-title" contenteditable=true data-tag="title">
        {{ __('Titre du tableau') }}
    </span>
    <table data-tag="table" id="full-table">
        <caption class="table-caption" id="table-caption">
            <span class="table-text" contenteditable="true" data-tag="caption">
                {{ __('Légende du tableau') }}
            </span>
        </caption>
        <thead class='table-head' data-tag='header'>
                <tr class='table-row' data-tag='row'>
                    <th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='col'> {{ __('En-tête') }} </th>
                    <th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='col'> {{ __('En-tête') }} </th>
                </tr>
        </thead>
        <tbody>
                <tr class="table-row" data-tag="row">
                    <td class='table-cell cell-text' contenteditable=true data-tag='cell'> {{ __('Cellule') }} </td>
                    <td class='table-cell cell-text' contenteditable=true data-tag='cell'> {{ __('Cellule') }} </td>
                </tr>
        </tbody>
    </table>
</div>
