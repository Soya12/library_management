// Copyright (c) 2024, faris and contributors
// For license information, please see license.txt

frappe.query_reports["Article Script Report"] = {
    filters: [
        {
            fieldname: 'article',
            label: __('Article'),
            fieldtype: 'Link',
            options: 'Article'
        },
			  {
					  fieldname: 'article',
					  label: __('Article'),
					  fieldtype: 'Link',
					  options: 'Article'
				},

    ]
};
