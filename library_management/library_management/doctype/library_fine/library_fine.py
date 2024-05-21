# Copyright (c) 2024, faris and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.naming import make_autoname

class LibraryFine(Document):
	def autoname(self):
		# select a project name based on customer
		format = "-{}-".format(self.fine_type)
		self.name = make_autoname(format)

	def before_submit(self):
		if frappe.db.exists("Library Transaction", self.library_transaction):
			transaction_doc = frappe.get_doc("Library Transaction",self.library_transaction)
			existing_fine = transaction_doc.fine_amount
			transaction_doc.fine_amount = existing_fine + self.fine_amount
			transaction_doc.save()
