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
                        method: 'GET',
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
            sortable: false,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'Make_ID',
                title: '#',
                // width: 40,
                type: 'number',
                selector: false,
                textAlign: 'center',
            }, {
                field: 'Make_Name',
                title: 'make',
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
