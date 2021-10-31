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
                template: function(row) {
                    return `\
                        <a href="/makes/${row.Make_Name}" class="text-dark">${row.Make_Name}</a>\
                    `
                }
            }, {
                field: 'Actions',
                title: 'actions',
                sortable: false,
                width: 150,
                overflow: 'visible',
                autoHide: false,
                template: function(row) {
                    return '\
                        <a href="/makes/'+ row.Make_Name +'" class="btn btn-sm btn-clean btn-icon mr-2" title="List models">\
                            <span class="svg-icon svg-icon-md">\
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">\
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                        <rect x="0" y="0" width="24" height="24"/>\
                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"/>\
                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"/>\
                                    </g>\
                                </svg>\
                            </span>\
                        </a>\
                    '
                },
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
