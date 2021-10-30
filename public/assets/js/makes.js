'use strict'
// Class definition

const AjaxTable = function() {
    // Private functions

    // basic demo
    const init = function() {

        const datatable = $('#makes_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: '/api/makes/list',
                        // sample custom headers
                        headers: { 'x-csrf-token': csrfToken },
                        map: function(raw) {
                            // sample data mapping
                            let dataSet = raw
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data
                            }
                            return dataSet
                        },
                    },
                },
                pageSize: 10,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                scroll: false,
                footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'id',
                title: '#',
                sortable: 'asc',
                width: 40,
                type: 'number',
                selector: false,
                textAlign: 'center',
            }, {
                field: 'title',
                title: 'título',
            }, {
                field: 'room',
                title: 'área',
            }],
        })
    }

    return {
        // public functions
        init: function() {
            init()
        },
    }
}()

$(document).ready(function() {
    AjaxTable.init()
})
